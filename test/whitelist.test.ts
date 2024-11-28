import { describe, expect, it } from "@jest/globals";
import {
  serializeIndexedMap,
  loadIndexedMerkleMap,
  createIpfsURL,
} from "zkcloudworker";
import { PublicKey, Poseidon } from "o1js";
import { pinJSON } from "./helpers/ipfs.js";
import { Storage } from "../src/contracts/index.js";
import { Whitelist } from "../src/admin/index.js";
import { TEST_ACCOUNTS, PINATA_JWT } from "../env.json";

const hash = "bafkreihlc7xwtubgyjr2ug5huj6kxjcbpyoroq2f63fyhqdzcedzsoxlda";

describe("Save whitelist", () => {
  it.skip("should save whitelist", async () => {
    const whitelist = createWhitelist();
    const serialized = serializeIndexedMap(whitelist);
    console.log(serialized);
    const ipfsHash = await pinJSON({
      data: { map: serialized },
      name: "whitelist",
      auth: PINATA_JWT,
    });
    console.log(ipfsHash);
  });
  it("should load whitelist", async () => {
    const whitelist = createWhitelist();
    const root = whitelist.root;
    console.log(root.toJSON());
    const loaded = await loadIndexedMerkleMap({
      url: createIpfsURL({ hash }),
      type: Whitelist,
    });
    console.log(loaded.root.toJSON());
  });
});

function createWhitelist() {
  const whitelist = new Whitelist();
  const users = TEST_ACCOUNTS.slice(5)
    .map((account) => PublicKey.fromBase58(account.publicKey))
    .slice(0, 5);
  for (const user of users) {
    whitelist.insert(Poseidon.hash(user.toFields()), 50_000_000_000n);
  }
  return whitelist;
}
