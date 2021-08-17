
 # Open Grant Proposal

 > This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

 * **Project Name:** SkyeKiwi Protocol
 * **Team Name:** SkyeKiwi Team
 * **Payment Address**: 0xa5E4E1BB29eE2D16B07545CCf565868aE34F92a2

 *The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.**

## Project Overview :page_facing_up:

The SkyeKiwi Protocol is a generic, efficient and customizable secret sharing protocol for end-users and blockchain nodes. 

### Project Details

The SkyeKiwi Protocol hides secrets under bright day lights. It is designed to be generalized useable blockchain library to package/manage encrypted content on blockchain. We designed it to be capable of efficiently processing a few bytes to GB size of secrets. It's a series of cryptographic process with help of storage network and smart contract/Substrate runtime pallet. 

The process can be graphed as: 

![Group 1](https://tva1.sinaimg.cn/large/008i3skNgy1gt7p6xldq2j31710u0acs.jpg)

It will take in a two inputs: a byte stream wrapped under the `File` API, an `EncryptionSchema` that outlines the sharing behavior and an optional `SealingKey` and any related blockchain identity seed/signer. 



The high level wrapper of the SkyeKiwi Protocol exposes four APIs: `upstream`, `donwstream`, `updateEncryptionSchema` and `verifyProofOfAccess`. And will be released in two phase:

1. Phase One - PoC Phase: Connects to a smart contract of a Substrate style WASM smart contract enabled blockchain; the Crust Network for storage; Public IPFS Pin Service & Gateways, with a SkyeKiwi ran IPFS Cluster as backup IPFS nodes. 
2. Phase Two: Connects to the SkyeKiwi Network `pallet-secrets` instead of a smart contract for general secrets registry; the Crust Network for storage; Public IPFS Pin Service & temporary IPFS nodes from the Crust Network ecosystem solutions. 

Usage Example on Node.js/Browser:

```javascript
const mnemonic = process.env.SEED_PHRASE
const blockchain = new SkyeKiwi.Blockchain(
  // seed phrase
  mnemonic,
  // contract address
  '3cNizgEgkjB8TKm8FGJD3mtcxNTwBRxWrCwa77rNTq3WaZsM',
  // contract instance endpoint
  'wss://jupiter-poa.elara.patract.io',
  // storage network endpoint
  'wss://rocky-api.crust.network/',
)

const encryptionSchema = new SkyeKiwi.EncryptionSchema({
  numOfShares: 2, 
  threshold: 2, 
  author: author, 
  unencryptedPieceCount: 1
})
encryptionSchema.addMember(author, 1)

const key = new SkyeKiwi.Seal({
  encryptionSchema: encryptionSchema, 
  seed: mnemonic
})

// upstream the file, it take two major actions: 
// upload files to the Crust Network & Write to a smart contract to generate a vaultId
await SkyeKiwi.Driver.upstream({
  file: fileHandle[0].file,
  seal: key,
  blockchain: blockchain
})
```



```javascript
const stream = fs.createWriteStream(outputPath, {flags: 'a'})
await SkyeKiwi.Driver.downstream({
  vaultId: vaultId,
  blockchain: blockchain,
  keys: [key1, key2 ... ], // private key of recipeints
  writeStream: stream,
})
```



```javascript
// upon finishing, the encryptionSchema will be updated
await SkyeKiwi.Driver.updateEncryptionSchema({
  vaultId: vaultId,
  newEncryptionSchema: encryptionSchema,
  seed: mnemonic,
  keys: [key1, key2 ... ], // private key of recipeints
  blockchain: blockchain
})
```

### Technology Stack

1. Cryptographic Library: `tweetnacl` for `x25519 encryption/decryption`, ` xsalsa20-poly1305 symmetrical encrypt/decrypt`
2. Random Number Generator: `tweetnacl - randomBytes` OR browser crypto APIs.
3. Threshold Secret Sharing: `@skyekiwi/secrets` a fork of audited SSS library `secret.js` 
4. Crust Network for persistent storage
5. `ink!` wasm smart contract & smart contract dev kit by Patract Labs
6. Substrate for `pallet-secrets`
7. IPFS JS - the JavaScript IPFS implementation 
8. Polkadot.js - to operate well in browsers & add in support for encryption/decryption and curve conversation



### Ecosystem Fit

The SkyeKiwi Protocol has a wide applicable areas. It's a generalized and customizable solution. For instance:

- Extend the NFT landscape to introduce NFTs with concealed content and strict access control of the content 
- Contract signature, build a decentralized contract signing platform, a DocuSign alternative. 



Moreover, SkyeKiwi will take the SkyeKiwi Protocol and built into the SkyeKiwi Network featuring concealed smart contract execution and secret processing. Where the SkyeKiwi Protocol is the schema used to communicate between blockchain nodes and between end-users to blockchain nodes. 



## Team :busts_in_silhouette:

* ### Team members

    * Song Zhou ( Developer ) https://github.com/RoyTimes
    * Zoe Sun ( Designer/COO )
    * ... More to be hired 

    ### Contact

    * **Contact Name:** Song Zhou (song.zhou@skye.kiwi)

    ### Legal Structure 

    * No legal entity yet

    ### Team's experience

    We have a draft implementation of the SkyeKiwi Protocol under development of SkyePass for a Web3 Foundation grant and delivered the PoC as the first milestone. We had won first place in the Polkadot Hackathon by Web3 in India with the SkyeKiwi Protocol and one of its application. 

## Development Status :open_book:

We have implemented a very very drafty version of the SkyeKiwi Protocol as part of our previous application to [SkyePass](https://github.com/w3f/Grants-Program/pull/212). Under our discussion in [LINK](https://github.com/w3f/Grants-Program/pull/553) we are now extracting the SkyeKiwi Protocol development out from the original grant application and port our previous work on this new application. 

- Code base: https://github.com/skyekiwi/skyekiwi-protocol AND https://github.com/skyekiwi/contract-demo for smart contract examples 
- Our contribution to Polkadot.js: https://github.com/polkadot-js/common/pull/1070 
- Documentation Site: https://cdocs.skye.kiwi/ (might not be 100% synced with development)

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 4 months (16 weeks)
* **Full-Time Equivalent (FTE):**  2 **FTE**
* **Total Costs:** $30,000 (payable in DAI)

### Milestone 1 - Phase 1

**Phase One** - PoC Phase: Connects to a smart contract of a Substrate style WASM smart contract enabled blockchain; the Crust Network for storage; Public IPFS Pin Service & Gateways, with a SkyeKiwi ran IPFS Cluster as backup IPFS nodes. 

* **Estimated duration:** 2 month
* **FTE:**  2
* **Costs:** 12,000USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can integrate the SkyeKiwi Protocol into their project. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests on both Node.js and Browser environment. |
| 1. | Core Protocol | Implements the `upstream` `downstream` `updateEncryptionSchema` and `verifyProofOfAccess` APIs. |
| 2. | Smart Contract | Implements and test for the smart contract used for registering secrets and access control write access to the secret. |
| 3. | Polkadot.js | Add in encryption/decryption functionality to `@polkadot/keyring` and `@polkadot/extension` so that the protocol can run without the needs to read the private key of users. |
### Milestone 2 - Phase 2

**Phase Two**: Connects to the SkyeKiwi Network `pallet-secrets` instead of a smart contract for general secrets registry; the Crust Network for storage; Public IPFS Pin Service & temporary IPFS nodes from the Crust Network ecosystem solutions. 

**Note:** We won't be 100% sure of the availability of the Crust Network temporary IPFS solution but will actively engage with the Crust Network for this part. Therefore, we'd like to mark it as optional. Worst thing worst, we still have our own IPFS cluster running. 

* **Estimated duration:** 2 month
* **FTE:**  2
* **Costs:** 18,000USD

| Number | Deliverable         | Specification                                                |
| -----: | ------------------- | ------------------------------------------------------------ |
|    0a. | License             | Apache 2.0                                                   |
|    0b. | Documentation       | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can integrate the SkyeKiwi Protocol into their project. |
|    0c. | Testing Guide       | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests on both Node.js, Browser and Rust environment. |
|     1. | `pallet-secrets`    | Port the `ink!` smart contract to be a runtime pallet and integrate it to the SkyeKiwi Protocol source code. |
|     2. | Rust Implementation | Port the SkyeKiwi Protocol to Rust, so that it works between blockchain nodes as well. |


## Future Plans

We will build a Substrate based blockchain with the SkyeKiwi Protocol. The blockchain is gonna feature:

1. Three registry: registry for SecretKeeper Nodes (TEE enabled nodes who keep a secret and process state transition functions on secrets), registry for general secrets (included in Milestone 2), registry for encrypted states (encrypted states are secrets that represents the state of secret contracts, the registry will mark the lazy execution position, checkpoint status of these states, and which nodes are processing the secrets).
2. Two Rotation: the small rotation - on par with the session key rotation of Substrate, the big rotation - rotate the sealing key of the encrypted states in TEE enclaves, and package the current states of the secret with the SkyeKiwi Protocol and publish it to the registry
3. One Lazy Execution Queue: an append-only log that records all transactions happened on a secrets, that can be subscribed by any nodes with access to the secret. 

The blockchain (SkyeKiwi Network) will be able to execute concealed smart contract executions. 
