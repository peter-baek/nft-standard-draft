# Log on devnet

## Run the test on devnet

```sh
yarn devnet
```

## Log

```
nft-standard-draft % yarn devnet
[3:57:49 PM] chain: devnet
[3:57:49 PM] networkId: testnet
[3:57:49 PM] o1js version: 2.0.0
[3:57:49 PM] zkCloudWorker version: 0.16.6
[3:57:49 PM] Collection contract address: B62qphUaxvHtqKP4fakajQSxcAu4V3iwcJHDAdd95kUQQ2qvjY4Qt9f
[3:57:49 PM] Admin contract address: B62qokw6FyMrBtUR8LH9RkcwNX1Pdhc4iC2KfBBqUUKbRxBUyaEc8Ve
[3:57:49 PM] NFT contract address: B62qiruqcMuDACvb8BpHnsN14T21qoKYyQCYJQidd7NqTCiDfuw1JXG
[3:57:49 PM] Upgrade authority contract address: B62qnas8npVy5azGrdrVhTCaPGSmou8zA3atueY5VLpx7dgPFb1vgs7
[3:57:49 PM] WhitelistedAdmin: false
[3:57:50 PM] Creator B62qpqd5Pi9RqvKkKRh2i5cGbSNbR85RBmYCT4xGM8f2ZEVh3ULHrby balance: 363.3
[3:57:50 PM] Admin   B62qja1xkTqG13nCWZYGJjKft9BgfRKbSbM5UNPUQtfmnWsrKA5gzDB balance: 225
[3:57:50 PM] User 0  B62qmZzjLeVjtNW3dECeiV7rbLYC1qufQzxTunL7pKtPS6Yz1jJNUZ7 balance: 299
[3:57:50 PM] User 1  B62qpadpnNB2rNwCgfQ8wd4DHHwE47KYfXFNzzgViVzWe4NUaaxdSU9 balance: 298.8
[3:57:50 PM] User 2  B62qkUYWyEznicHrGAmPTjZNwkvjhehEAEDsj1T9cdKbEhWg9mQG5KQ balance: 298.9
[3:57:51 PM] User 3  B62qpzpKh4rfCJqhmDk9VnWTfyPib8AxznYhMzuEWkP6pMnUowrKN5L balance: 299
[3:57:51 PM] User 4  B62qpqd5Pi9RqvKkKRh2i5cGbSNbR85RBmYCT4xGM8f2ZEVh3ULHrby balance: 363.3
[3:57:51 PM] RSS memory before compiling: 379 MB
[3:57:51 PM] compiling...
[3:57:55 PM] compiled NFTContract: 3.980s
[3:57:58 PM] compiled Admin: 2.973s
[3:57:58 PM] Admin vk hash: 27968039045891100927648704666754528771275213274406212289757761318443521844298
[3:58:03 PM] compiled WhitelistedAdmin: 4.908s
[3:58:03 PM] WhitelistedAdmin vk hash: 8349588753538109621191729972529371784910266349819356106649224763502515841361
[3:58:12 PM] compiled UpgradeAuthority: 8.480s
[3:58:12 PM] UpgradeAuthority vk hash: 24565401226054578737722791483057718071154045451563120873284696247613914953129
[3:58:20 PM] compiled ValidatorsVoting: 7.835s
[3:58:20 PM] ValidatorsVoting vk hash: 6353605971825030201002986807070533177679190473667768930431457206700622439047
[3:58:39 PM] compiled Collection: 19.724s
[3:58:39 PM] Collection vk hash: 21039138855797080218524455964665593273495413184664226050882204541100868894216
[3:58:46 PM] compiled NFTProgram: 7.047s
[3:58:46 PM] NFTProgram vk hash: 27880826672694616683520621021051389439841346881415962306038372232350405781184
[3:58:46 PM] Analyzing contracts methods...
[3:58:47 PM] methods analyzed: 241.686ms
[3:58:47 PM] method's total size for a NFT is 6237 rows (9.52% of max 65536 rows)
[3:58:47 PM] method's total size for a Admin is 5108 rows (7.79% of max 65536 rows)
[3:58:47 PM] method's total size for a WhitelistedAdmin is 11162 rows (17.03% of max 65536 rows)
[3:58:47 PM] method's total size for a UpgradeAuthority is 2714 rows (4.14% of max 65536 rows)
[3:58:47 PM] method's total size for a Collection is 30771 rows (46.95% of max 65536 rows)
[3:58:47 PM] method's total size for a NFTProgram is 1800 rows (2.75% of max 65536 rows)
[3:58:47 PM] RSS memory before deploy: 2949 MB, changed by 2570 MB
[3:58:51 PM] saveToIPFS result: {
  IpfsHash: 'bafkreidssirgapvcnfte5xc4t2tgbzom3cen2n3d7pwrok7zlyvgv734ou',
  PinSize: 2305,
  Timestamp: '2024-11-14T12:58:49.634Z'
}
[3:59:06 PM] Account updates for deploy UpgradeAuthority: 2, proof authorizations: 1
[3:59:06 PM] DUPLICATE AU deploy UpgradeAuthority: B62qnas8npVy5azGrdrVhTCaPGSmou8zA3atueY5VLpx7dgPFb1vgs7   count: 2
[3:59:08 PM] deploy UpgradeAuthority tx sent: hash: 5Jta5PV5MCHyLaNgzxU6zNZ9zT3rJp9QQQRU4JQYSJBWEScVDQKv status: pending
[3:59:08 PM] Waiting for tx inclusion...
[4:03:37 PM] deploy UpgradeAuthority tx included into block: hash: 5Jta5PV5MCHyLaNgzxU6zNZ9zT3rJp9QQQRU4JQYSJBWEScVDQKv status: included
[4:03:37 PM] deployed UpgradeAuthority: 4:50.312 (m:ss.mmm)
[4:03:42 PM] saveToIPFS result: {
  IpfsHash: 'bafkreidjg7e3fzolliyv7wu54spukexoxjerwblucmm5ojdaeq2bqoy2ya',
  PinSize: 1352,
  Timestamp: '2024-11-14T13:03:42.172Z'
}
[4:03:55 PM] Account updates for deploy Collection: 4, proof authorizations: 1
[4:03:55 PM] DUPLICATE AU deploy Collection: B62qphUaxvHtqKP4fakajQSxcAu4V3iwcJHDAdd95kUQQ2qvjY4Qt9f   count: 2
[4:03:57 PM] deploy Collection tx sent: hash: 5JvR7ZWrtj8CgYrT5pLHtU5A4WxARdinHxyxgRmLvME13VrcyWgn status: pending
[4:03:57 PM] Waiting for tx inclusion...
[4:06:21 PM] deploy Collection tx included into block: hash: 5JvR7ZWrtj8CgYrT5pLHtU5A4WxARdinHxyxgRmLvME13VrcyWgn status: included
[4:06:21 PM] deployed Collection: 2:44.449 (m:ss.mmm)
[4:06:21 PM] RSS memory before mint: 3375 MB, changed by 426 MB
[4:06:28 PM] saveToIPFS result: {
  IpfsHash: 'bafkreihnxskbjx7j6fc6nz4pbsljidd6qt625qjdhgce3scghwuwxszhee',
  PinSize: 3128,
  Timestamp: '2024-11-14T13:06:27.889Z'
}
[4:06:45 PM] Account updates for mint: 3, proof authorizations: 1
[4:06:46 PM] mint tx sent: hash: 5Jv6UNUkHqy6yFtLkRkuf9H4jcUiNvM6kdteGVwc875wu3yvW6Pq status: pending
[4:06:46 PM] Waiting for tx inclusion...
[4:09:31 PM] mint tx included into block: hash: 5Jv6UNUkHqy6yFtLkRkuf9H4jcUiNvM6kdteGVwc875wu3yvW6Pq status: included
[4:09:31 PM] minted NFT: 3:09.629 (m:ss.mmm)
[4:09:31 PM] RSS memory before sell: 3428 MB, changed by 53 MB
[4:09:32 PM] requireSaleApproval true
Attempt to sell NFT with wrong approval failed: Bool.assertFalse(): true != false
[4:10:01 PM] Account updates for sell: 4, proof authorizations: 3
[4:10:02 PM] sell tx sent: hash: 5JtoLgCPVtexQnkUZ8S9gmWEN6Ud5aQrcnXZoyPN2ePTsSJqXbER status: pending
[4:10:02 PM] Waiting for tx inclusion...
[4:12:27 PM] sell tx included into block: hash: 5JtoLgCPVtexQnkUZ8S9gmWEN6Ud5aQrcnXZoyPN2ePTsSJqXbER status: included
[4:12:27 PM] sold NFT: 2:56.151 (m:ss.mmm)
[4:12:27 PM] RSS memory before buy: 3627 MB, changed by 199 MB
[4:12:29 PM] requireBuyApproval true
Attempt to buy NFT with wrong approval failed: Bool.assertFalse(): true != false
[4:12:57 PM] Account updates for buy: 5, proof authorizations: 3
[4:12:58 PM] buy tx sent: hash: 5JvGRx8yNZG1Mf2qzfr9oACiQxLqGZ4jdrdaJkSVFdEMAXJMAGoa status: pending
[4:12:58 PM] Waiting for tx inclusion...
[4:15:22 PM] buy tx included into block: hash: 5JvGRx8yNZG1Mf2qzfr9oACiQxLqGZ4jdrdaJkSVFdEMAXJMAGoa status: included
[4:15:23 PM] bought NFT: 2:55.538 (m:ss.mmm)
[4:15:23 PM] RSS memory before update: 2883 MB, changed by -744 MB
[4:15:24 PM] requireUpdateApproval true
[4:15:46 PM] proved update 1: 14.418s
[4:15:59 PM] proved update 2: 13.138s
[4:16:19 PM] merged proofs: 19.862s
Attempt to update NFT with wrong approval failed: Update approval is required
Bool.assertFalse(): true != false
[4:16:55 PM] Account updates for update: 4, proof authorizations: 3
[4:16:58 PM] update tx sent: hash: 5JtYUPJcLFgYNd4ae66hLFsc4XpdNmFuqT7MTeAyW63ChngJBoh6 status: pending
[4:16:58 PM] Waiting for tx inclusion...
[4:18:20 PM] update tx included into block: hash: 5JtYUPJcLFgYNd4ae66hLFsc4XpdNmFuqT7MTeAyW63ChngJBoh6 status: included
[4:18:21 PM] updated NFT: 2:58.138 (m:ss.mmm)
[4:18:21 PM] RSS memory before transfer: 4637 MB, changed by 1754 MB
[4:18:22 PM] requireTransferApproval true
Attempt to transfer NFT with wrong approval failed: Transfer approval is required
Bool.assertFalse(): true != false
[4:18:55 PM] Account updates for transfer: 5, proof authorizations: 3
[4:18:56 PM] transfer tx sent: hash: 5JuicNhDUmA9UPWTXLE2fbi8VFrmjjpRc8ANc2yJuAEKpfychdPH status: pending
[4:18:56 PM] Waiting for tx inclusion...
[4:21:21 PM] transfer tx included into block: hash: 5JuicNhDUmA9UPWTXLE2fbi8VFrmjjpRc8ANc2yJuAEKpfychdPH status: included
[4:21:22 PM] transferred NFT: 3:01.028 (m:ss.mmm)
[4:21:22 PM] RSS memory before pause: 4763 MB, changed by 126 MB
[4:21:43 PM] Account updates for pause NFT: 3, proof authorizations: 2
[4:21:45 PM] pause NFT tx sent: hash: 5Jv7Ux6ecCpGKVufdDKgxmhcBHqgHmVdf8ejYrvqu4eVruUWHHuv status: pending
[4:21:45 PM] Waiting for tx inclusion...
[4:24:29 PM] pause NFT tx included into block: hash: 5Jv7Ux6ecCpGKVufdDKgxmhcBHqgHmVdf8ejYrvqu4eVruUWHHuv status: included
[4:24:30 PM] paused NFT: 3:07.934 (m:ss.mmm)
[4:24:30 PM] RSS memory before transfer: 4018 MB, changed by -745 MB
[4:24:31 PM] requireTransferApproval true
[4:24:31 PM] error during attempt to transfer paused NFT: NFT is paused
Bool.assertFalse(): true != false
[4:24:31 PM] tried to transfer paused NFT: 1.490s
[4:24:31 PM] RSS memory before resume: 3987 MB, changed by -31 MB
[4:24:52 PM] Account updates for resume NFT: 3, proof authorizations: 2
[4:24:53 PM] resume NFT tx sent: hash: 5Jv2YXJqSJcnHaZWooTaNfXNW9fvNtTZK2iL212pvbYZAH6V87J8 status: pending
[4:24:53 PM] Waiting for tx inclusion...
[4:33:29 PM] resume NFT tx included into block: hash: 5Jv2YXJqSJcnHaZWooTaNfXNW9fvNtTZK2iL212pvbYZAH6V87J8 status: included
[4:33:29 PM] resumed NFT: 8:58.033 (m:ss.mmm)
[4:33:29 PM] RSS memory before transfer: 1537 MB, changed by -2450 MB
[4:33:31 PM] requireTransferApproval true
[4:34:00 PM] Account updates for transfer: 5, proof authorizations: 3
[4:34:01 PM] transfer tx sent: hash: 5JuT4fjnp6wWcRTg7cHTKNA3AamQLZMFJkTrYSsHv57sxxVMyu7e status: pending
[4:34:01 PM] Waiting for tx inclusion...
[4:39:10 PM] transfer tx included into block: hash: 5JuT4fjnp6wWcRTg7cHTKNA3AamQLZMFJkTrYSsHv57sxxVMyu7e status: included
[4:39:13 PM] transferred NFT: 5:44.070 (m:ss.mmm)
[4:39:13 PM] RSS memory before pause: 2582 MB, changed by 1045 MB
[4:39:25 PM] Account updates for pause Collection: 2, proof authorizations: 1
[4:39:27 PM] pause Collection tx sent: hash: 5JtrdYBRpY1AzyWVzViPMm6pMTzaCBoBcG3n5ebQCUoXdJJoAzBm status: pending
[4:39:27 PM] Waiting for tx inclusion...
[4:42:12 PM] pause Collection tx included into block: hash: 5JtrdYBRpY1AzyWVzViPMm6pMTzaCBoBcG3n5ebQCUoXdJJoAzBm status: included
[4:42:12 PM] Waiting for devnet to update state for 0 sec...
[4:42:23 PM] paused Collection: 3:09.230 (m:ss.mmm)
[4:42:23 PM] RSS memory before transfer: 2881 MB, changed by 299 MB
[4:42:24 PM] requireTransferApproval true
[4:42:25 PM] error during attempt to transfer NFT on paused Collection: Collection is currently paused
Bool.assertFalse(): true != false
[4:42:25 PM] tried to transfer NFT on paused Collection: 2.099s
[4:42:25 PM] RSS memory before resume: 2858 MB, changed by -23 MB
[4:42:37 PM] Account updates for resume Collection: 2, proof authorizations: 1
[4:42:38 PM] resume Collection tx sent: hash: 5JtiLUbFNMW3oNQ4DPHFxBgMzhytmGAQEApDyYmo9VqLwqKbYtmC status: pending
[4:42:38 PM] Waiting for tx inclusion...
[4:51:36 PM] resume Collection tx included into block: hash: 5JtiLUbFNMW3oNQ4DPHFxBgMzhytmGAQEApDyYmo9VqLwqKbYtmC status: included
[4:51:37 PM] resumed Collection: 9:12.133 (m:ss.mmm)
[4:51:38 PM] storage bafkreidssirgapvcnfte5xc4t2tgbzom3cen2n3d7pwrok7zlyvgv734ou
[4:51:41 PM] saveToIPFS result: {
  IpfsHash: 'bafkreihgabkgid27nr3w3utfwgngufnbqtiffjrxawf2dzltkef262lydq',
  PinSize: 1830,
  Timestamp: '2024-11-14T13:51:40.932Z'
}
[4:51:41 PM] voting...
[4:52:17 PM] voted: 36.769s
[4:52:17 PM] merging vote proofs...
[4:52:55 PM] merged vote proofs: 37.309s
[4:53:11 PM] Account updates for Set UpgradeAuthority: 1, proof authorizations: 1
[4:53:12 PM] Set UpgradeAuthority tx sent: hash: 5Ju6rTwdCHEstJXc18xj24hSuJBXeQuv27F9gCCUwewvmzr7qeEF status: pending
[4:53:12 PM] Waiting for tx inclusion...
[4:57:40 PM] Set UpgradeAuthority tx included into block: hash: 5Ju6rTwdCHEstJXc18xj24hSuJBXeQuv27F9gCCUwewvmzr7qeEF status: included
[4:57:40 PM] Set UpgradeAuthority: 6:03.180 (m:ss.mmm)
[4:57:40 PM] RSS memory before NFT upgrade: 87 MB, changed by -2771 MB
[4:57:42 PM] requireCreatorSignatureToUpgradeNFT false
[4:58:24 PM] Account updates for upgrade NFT vk: 4, proof authorizations: 3
[4:58:25 PM] upgrade NFT vk tx sent: hash: 5Ju26CLxPjK55zUq57Fqfcv1FSDicu2zbBwN7Pjbx5s6eEWT6AnD status: pending
[4:58:25 PM] Waiting for tx inclusion...
[5:00:29 PM] upgrade NFT vk tx included into block: hash: 5Ju26CLxPjK55zUq57Fqfcv1FSDicu2zbBwN7Pjbx5s6eEWT6AnD status: included
[5:00:30 PM] upgraded NFT: 2:49.550 (m:ss.mmm)
[5:00:30 PM] RSS memory before Collection upgrade: 87 MB, changed by 0 MB
[5:01:02 PM] Account updates for upgrade Collection vk: 3, proof authorizations: 2
[5:01:05 PM] upgrade Collection vk tx sent: hash: 5JvMD1Bxaarjv6j9NLZpdVfKVVRGUEG2h78BYzm7hVY84FHjEmy6 status: pending
[5:01:05 PM] Waiting for tx inclusion...
[5:06:34 PM] upgrade Collection vk tx included into block: hash: 5JvMD1Bxaarjv6j9NLZpdVfKVVRGUEG2h78BYzm7hVY84FHjEmy6 status: included
[5:06:35 PM] upgraded Collection: 6:05.032 (m:ss.mmm)
[5:06:35 PM] RSS memory before AdminContract upgrade: 498 MB, changed by 411 MB
[5:06:57 PM] Account updates for upgrade AdminContract vk: 3, proof authorizations: 2
[5:06:58 PM] upgrade AdminContract vk tx sent: hash: 5JvNayCeNwcKk7tMgcHQvhNMhWPZMJPsbmSkSA6WcJUMVpkSQYJN status: pending
[5:06:58 PM] Waiting for tx inclusion...
[5:09:22 PM] upgrade AdminContract vk tx included into block: hash: 5JvNayCeNwcKk7tMgcHQvhNMhWPZMJPsbmSkSA6WcJUMVpkSQYJN status: included
[5:09:23 PM] upgraded AdminContract: 2:48.133 (m:ss.mmm)
[5:09:23 PM] RSS memory before transfer: 1588 MB, changed by 1090 MB
[5:09:27 PM] requireTransferApproval true
[5:09:59 PM] Account updates for transfer: 5, proof authorizations: 3
[5:10:00 PM] transfer tx sent: hash: 5JvR1MjEsNrEbEuGYsCWKc2x3UkmgwPb37iVwmaQdDNCHkCqahwT status: pending
[5:10:00 PM] Waiting for tx inclusion...
[5:12:25 PM] transfer tx included into block: hash: 5JvR1MjEsNrEbEuGYsCWKc2x3UkmgwPb37iVwmaQdDNCHkCqahwT status: included
[5:12:25 PM] transferred NFT: 3:02.594 (m:ss.mmm)
 PASS  tests/contract.test.ts (4477.722 s)
  NFT contracts tests
    ✓ should initialize a blockchain (2828 ms)
    ✓ should compile NFT Contract (3981 ms)
    ✓ should compile Admin (2973 ms)
    ✓ should compile WhitelistedAdmin (4907 ms)
    ✓ should compile UpgradeAuthority (8480 ms)
    ✓ should compile ValidatorsVoting (7836 ms)
    ✓ should compile Collection (19724 ms)
    ✓ should compile nft ZkProgram (7047 ms)
    ✓ should analyze contracts methods (242 ms)
    ✓ should deploy an UpgradeAuthority (290315 ms)
    ✓ should deploy a Collection (164452 ms)
    ✓ should mint NFT (189633 ms)
    ✓ should sell NFT (176117 ms)
    ✓ should buy NFT (175536 ms)
    ✓ should update NFT metadata (178140 ms)
    ✓ should transfer NFT (181030 ms)
    ✓ should pause NFT (187936 ms)
    ✓ should fail to transfer paused NFT (1491 ms)
    ✓ should resume NFT (538065 ms)
    ✓ should transfer NFT (344073 ms)
    ✓ should pause Collection (189228 ms)
    ✓ should fail to transfer NFT on paused Collection (2100 ms)
    ✓ should resume Collection (552129 ms)
    ✓ should set a UpgradeAuthority database (363183 ms)
    ✓ should upgrade NFT verification key (169549 ms)
    ✓ should upgrade Collection verification key (365034 ms)
    ✓ should upgrade AdminContract verification key (168135 ms)
    ✓ should transfer NFT (182596 ms)

Test Suites: 1 passed, 1 total
Tests:       28 passed, 28 total
Snapshots:   0 total
Time:        4477.766 s
Ran all test suites matching /contract.test/i.
```
