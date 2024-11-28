import {
  Struct,
  Field,
  PublicKey,
  Signature,
  ZkProgram,
  Poseidon,
  SelfProof,
  UInt32,
  Experimental,
  DynamicProof,
  FeatureFlags,
  Void,
  Bool,
} from "o1js";
import {
  fieldFromString,
  Storage,
  PublicKeyOption,
} from "../contracts/index.js";
import { createIpfsURL, deserializeIndexedMerkleMap } from "zkcloudworker";
import { ValidatorsListData } from "./upgrade.js";

export {
  ValidatorsList,
  UpgradeAuthorityDatabase,
  ValidatorsState,
  ValidatorsDecision,
  ValidatorDecisionType,
  ValidatorsDecisionState,
  ValidatorsVoting,
  ValidatorsVotingProof,
  ValidatorsVotingNativeProof,
  UpgradeDatabaseState,
  UpgradeDatabaseStatePacked,
  ChainId,
  checkValidatorsList,
};

const { IndexedMerkleMap } = Experimental;
type IndexedMerkleMap = Experimental.IndexedMerkleMap;

const VALIDATORS_LIST_HEIGHT = 10;
const UPGRADE_AUTHORITY_DATABASE_HEIGHT = 20;

/**
 * The `ValidatorsList` is an indexed Merkle map used to store the list of validators.
 */
class ValidatorsList extends IndexedMerkleMap(VALIDATORS_LIST_HEIGHT) {}

/**
 * The `UpgradeAuthorityDatabase` is an indexed Merkle map used to manage upgrade proposals.
 */
class UpgradeAuthorityDatabase extends IndexedMerkleMap(
  UPGRADE_AUTHORITY_DATABASE_HEIGHT
) {}

/** Chain IDs following Auro Wallet naming conventions. */
const ChainId = {
  "mina:mainnet": fieldFromString("mina:mainnet"),
  "mina:devnet": fieldFromString("mina:devnet"),
  "zeko:mainnet": fieldFromString("zeko:mainnet"),
  "zeko:devnet": fieldFromString("zeko:devnet"),
};
type ChainId = keyof typeof ChainId;

/** Validator decision types for upgrade proposals. */
const ValidatorDecisionType = {
  updateDatabase: fieldFromString("updateDatabase"),
  updateValidatorsList: fieldFromString("updateValidatorsList"),
} as const;
type ValidatorDecisionType = keyof typeof ValidatorDecisionType;

/**
 * Represents the state of the validators.
 */
class ValidatorsState extends Struct({
  /** Chain ID (e.g., 'mina:mainnet') */
  chainId: Field,
  /** Merkle root of the ValidatorsList */
  root: Field,
  /** Sum of the hashes of validators' public keys */
  hashSum: Field,
  /** Number of validators */
  count: UInt32,
}) {
  /**
   * Asserts that two `ValidatorsState` instances are equal.
   * @param a First `ValidatorsState` instance.
   * @param b Second `ValidatorsState` instance.
   */
  static assertEquals(a: ValidatorsState, b: ValidatorsState) {
    a.chainId.assertEquals(b.chainId);
    a.root.assertEquals(b.root);
    a.hashSum.assertEquals(b.hashSum);
    a.count.assertEquals(b.count);
  }

  /**
   * Computes the hash of the validators state.
   * @returns Hash of the current state.
   */
  hash() {
    return Poseidon.hashPacked(ValidatorsState, this);
  }

  /**
   * Returns an empty `ValidatorsState`.
   * @returns An empty `ValidatorsState` instance.
   */
  static empty() {
    return new ValidatorsState({
      chainId: Field(0),
      root: Field(0),
      hashSum: Field(0),
      count: UInt32.zero,
    });
  }
}

/**
 * Represents the packed state of the upgrade database.
 */
class UpgradeDatabaseStatePacked extends Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** X-coordinate of the next upgrade authority's public key */
  nextUpgradeAuthorityX: Field,
  /** Packed data containing version, validFrom, and flags */
  data: Field,
}) {}

/**
 * Represents the state of the upgrade database.
 */
class UpgradeDatabaseState extends Struct({
  /** Root of the UpgradeAuthority database */
  root: Field,
  /** Storage information (e.g., IPFS hash) */
  storage: Storage,
  /** Optional public key of the next upgrade authority */
  nextUpgradeAuthority: PublicKeyOption,
  /** Version of the UpgradeAuthorityDatabase */
  version: UInt32,
  /** Slot when the UpgradeAuthority is valid from */
  validFrom: UInt32,
}) {
  /**
   * Asserts that two `UpgradeDatabaseState` instances are equal.
   * @param a First `UpgradeDatabaseState` instance.
   * @param b Second `UpgradeDatabaseState` instance.
   */
  static assertEquals(a: UpgradeDatabaseState, b: UpgradeDatabaseState) {
    a.root.assertEquals(b.root);
    Storage.assertEquals(a.storage, b.storage);
    a.nextUpgradeAuthority.value.assertEquals(b.nextUpgradeAuthority.value);
    a.nextUpgradeAuthority.isSome.assertEquals(b.nextUpgradeAuthority.isSome);
    a.version.assertEquals(b.version);
  }

  /**
   * Returns an empty `UpgradeDatabaseState`.
   * @returns An empty `UpgradeDatabaseState` instance.
   */
  static empty() {
    return new UpgradeDatabaseState({
      root: new UpgradeAuthorityDatabase().root,
      storage: Storage.empty(),
      nextUpgradeAuthority: PublicKeyOption.none(),
      version: UInt32.zero,
      validFrom: UInt32.MAXINT(),
    });
  }

  /**
   * Packs the `UpgradeDatabaseState` into a `UpgradeDatabaseStatePacked`.
   * @returns A packed representation of the upgrade database state.
   */
  pack(): UpgradeDatabaseStatePacked {
    const nextUpgradeAuthorityX = this.nextUpgradeAuthority.value.x;
    const data = Field.fromBits([
      ...this.version.value.toBits(32),
      ...this.validFrom.value.toBits(32),
      this.nextUpgradeAuthority.value.isOdd,
      this.nextUpgradeAuthority.isSome,
    ]);
    return new UpgradeDatabaseStatePacked({
      root: this.root,
      storage: this.storage,
      nextUpgradeAuthorityX,
      data,
    });
  }

  /**
   * Unpacks a `UpgradeDatabaseStatePacked` into a `UpgradeDatabaseState`.
   * @param packed The packed upgrade database state.
   * @returns An unpacked `UpgradeDatabaseState` instance.
   */
  static unpack(packed: UpgradeDatabaseStatePacked): UpgradeDatabaseState {
    const bits = packed.data.toBits(66);
    const versionBits = bits.slice(0, 32);
    const validFromBits = bits.slice(32, 64);
    const isOddBit = bits[64];
    const isSomeBit = bits[65];
    const version = UInt32.Unsafe.fromField(Field.fromBits(versionBits));
    const validFrom = UInt32.Unsafe.fromField(Field.fromBits(validFromBits));
    const nextUpgradeAuthority = PublicKeyOption.from(
      PublicKey.from({ x: packed.nextUpgradeAuthorityX, isOdd: isOddBit })
    );
    nextUpgradeAuthority.isSome = isSomeBit;
    return new UpgradeDatabaseState({
      root: packed.root,
      storage: packed.storage,
      nextUpgradeAuthority,
      version,
      validFrom,
    });
  }
}

/**
 * Represents a decision made by the validators.
 */
class ValidatorsDecision extends Struct({
  /** Type of decision (e.g., 'updateDatabase') */
  decisionType: Field,
  /** UpgradeAuthority contract address */
  contractAddress: PublicKey,
  /** Chain ID */
  chainId: Field,
  /** Current validators state */
  validators: ValidatorsState,
  /** Current upgrade database state */
  upgradeDatabase: UpgradeDatabaseState,
  /** Proposed update to validators state */
  updateValidatorsList: ValidatorsState,
  /** Slot when decision expires */
  expiry: UInt32,
}) {
  /**
   * Asserts that two `ValidatorsDecision` instances are equal.
   * @param a First `ValidatorsDecision` instance.
   * @param b Second `ValidatorsDecision` instance.
   */
  static assertEquals(a: ValidatorsDecision, b: ValidatorsDecision) {
    a.decisionType.assertEquals(b.decisionType);
    a.contractAddress.assertEquals(b.contractAddress);
    a.chainId.assertEquals(b.chainId);
    ValidatorsState.assertEquals(a.validators, b.validators);
    UpgradeDatabaseState.assertEquals(a.upgradeDatabase, b.upgradeDatabase);
    a.expiry.assertEquals(b.expiry);
  }
}

/**
 * Represents the state of a validators decision during the voting process.
 */
class ValidatorsDecisionState extends Struct({
  /** The validators' decision */
  decision: ValidatorsDecision,
  /** Sum of the hashes of validators who have voted */
  hashSum: Field,
  /** Count of votes in favor */
  count: UInt32,
}) {
  /**
   * Records a vote in favor of the decision by the given validator.
   * @param decision The validators' decision.
   * @param validatorAddress The public key of the validator.
   * @param validatorsList The ValidatorsList.
   * @param signature The signature of the validator.
   * @returns A new `ValidatorsDecisionState` reflecting the vote.
   */
  static vote(
    decision: ValidatorsDecision,
    validatorAddress: PublicKey,
    validatorsList: ValidatorsList,
    signature: Signature
  ) {
    const hash = Poseidon.hashPacked(PublicKey, validatorAddress);
    validatorsList
      .get(hash)
      .assertBool("Wrong ValidatorsList format")
      .assertTrue("Validator doesn't have authority to sign");
    signature
      .verify(validatorAddress, ValidatorsDecision.toFields(decision))
      .assertTrue("Wrong validator signature");
    decision.validators.root.assertEquals(validatorsList.root);
    return new ValidatorsDecisionState({
      decision,
      count: UInt32.from(1), // count as vote for the decision
      hashSum: hash,
    });
  }

  /**
   * Records an abstention or vote against the decision by the given validator.
   * @param decision The validators' decision.
   * @param validatorAddress The public key of the validator.
   * @param validatorsList The ValidatorsList.
   * @returns A new `ValidatorsDecisionState` reflecting the abstention.
   */
  static abstain(
    decision: ValidatorsDecision,
    validatorAddress: PublicKey,
    validatorsList: ValidatorsList
    // We do not require the signature if the vote is not for the decision
  ) {
    const hash = Poseidon.hashPacked(PublicKey, validatorAddress);
    validatorsList
      .get(hash)
      .assertBool("Wrong ValidatorsList format")
      .assertTrue("Validator doesn't have authority to sign");
    decision.validators.root.assertEquals(validatorsList.root);
    return new ValidatorsDecisionState({
      decision,
      count: UInt32.zero, // count as abstain or against
      hashSum: hash,
    });
  }

  /**
   * Merges two `ValidatorsDecisionState` instances.
   * @param state1 The first decision state.
   * @param state2 The second decision state.
   * @returns A new `ValidatorsDecisionState` representing the combined state.
   */
  static merge(
    state1: ValidatorsDecisionState,
    state2: ValidatorsDecisionState
  ) {
    ValidatorsDecision.assertEquals(state1.decision, state2.decision);

    return new ValidatorsDecisionState({
      decision: state1.decision,
      count: state1.count.add(state2.count),
      hashSum: state1.hashSum.add(state2.hashSum),
    });
  }

  /**
   * Asserts that two `ValidatorsDecisionState` instances are equal.
   * @param a First `ValidatorsDecisionState` instance.
   * @param b Second `ValidatorsDecisionState` instance.
   */
  static assertEquals(a: ValidatorsDecisionState, b: ValidatorsDecisionState) {
    ValidatorsDecision.assertEquals(a.decision, b.decision);
    a.count.assertEquals(b.count);
    a.hashSum.assertEquals(b.hashSum);
  }
}

/**
 * The `ValidatorsVoting` ZkProgram implements the voting logic for validators.
 */
const ValidatorsVoting = ZkProgram({
  name: "ValidatorsVoting",
  publicInput: ValidatorsDecisionState,

  methods: {
    /**
     * Records a vote in favor of a decision.
     */
    vote: {
      privateInputs: [ValidatorsDecision, PublicKey, ValidatorsList, Signature],

      async method(
        state: ValidatorsDecisionState,
        decision: ValidatorsDecision,
        validatorAddress: PublicKey,
        validatorsList: ValidatorsList,
        signature: Signature
      ) {
        const calculatedState = ValidatorsDecisionState.vote(
          decision,
          validatorAddress,
          validatorsList,
          signature
        );
        ValidatorsDecisionState.assertEquals(state, calculatedState);
      },
    },

    /**
     * Records an abstention or vote against a decision.
     */
    abstain: {
      privateInputs: [ValidatorsDecision, PublicKey, ValidatorsList],

      async method(
        state: ValidatorsDecisionState,
        decision: ValidatorsDecision,
        validatorAddress: PublicKey,
        validatorsList: ValidatorsList
      ) {
        const calculatedState = ValidatorsDecisionState.abstain(
          decision,
          validatorAddress,
          validatorsList
        );
        ValidatorsDecisionState.assertEquals(state, calculatedState);
      },
    },

    /**
     * Merges two `ValidatorsDecisionState` proofs.
     */
    merge: {
      privateInputs: [SelfProof, SelfProof],

      async method(
        state: ValidatorsDecisionState,
        proof1: SelfProof<ValidatorsDecisionState, void>,
        proof2: SelfProof<ValidatorsDecisionState, void>
      ) {
        proof1.verify();
        proof2.verify();
        const calculatedState = ValidatorsDecisionState.merge(
          proof1.publicInput,
          proof2.publicInput
        );
        ValidatorsDecisionState.assertEquals(state, calculatedState);
      },
    },
  },
});

/** Proof classes for the `ValidatorsVoting` ZkProgram. */
class ValidatorsVotingNativeProof extends ZkProgram.Proof(ValidatorsVoting) {}
class ValidatorsVotingProof extends DynamicProof<
  ValidatorsDecisionState,
  Void
> {
  static publicInputType = ValidatorsDecisionState;
  static publicOutputType = Void;
  static maxProofsVerified = 2 as const;
  static featureFlags = FeatureFlags.allMaybe;
}

/**
 * Checks the validators list against the provided storage.
 * @param params Object containing validators state and storage.
 * @returns An object containing the `ValidatorsList` and `ValidatorsListData`.
 */
async function checkValidatorsList(params: {
  validators?: ValidatorsState;
  storage: Storage;
}): Promise<{ map: ValidatorsList; data: ValidatorsListData }> {
  const { validators, storage } = params;
  const data = (await (
    await fetch(createIpfsURL({ hash: storage.toString() }))
  ).json()) as unknown as ValidatorsListData;
  const validatorsList = new ValidatorsList();
  let hashSum = Field(0);
  let count = 0;
  for (let i = 0; i < data.validators.length; i++) {
    const publicKey = PublicKey.fromBase58(data.validators[i].publicKey);
    const key = Poseidon.hashPacked(PublicKey, publicKey);
    validatorsList.set(
      key,
      Field(Bool(data.validators[i].authorizedToVote).value)
    );
    count++;
    hashSum = hashSum.add(key);
  }

  if (data.hashSum !== hashSum.toJSON()) {
    throw new Error("Invalid validators list hash sum");
  }
  const map = deserializeIndexedMerkleMap({
    serializedIndexedMap: data.map,
    type: ValidatorsList,
  });

  if (!map) {
    throw new Error("Invalid validators list");
  }
  if (map.root.equals(validatorsList.root).toBoolean() === false) {
    throw new Error("Invalid validators list root");
  }

  if (validators) {
    if (data.validatorsCount !== Number(validators.count.toBigint())) {
      throw new Error("Invalid validators list count");
    }
    if (data.root !== validators.root.toJSON()) {
      throw new Error("Invalid validators list root");
    }

    if (hashSum.equals(validators.hashSum).toBoolean() === false) {
      throw new Error("Invalid validators list hash sum");
    }
    if (Number(validators.count.toBigint()) > count) {
      throw new Error("Invalid validators list count");
    }
  }

  return { map, data };
}
