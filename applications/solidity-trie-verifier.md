# solidity-trie-verifier

- **Team Name:** Polytope Labs
- **Payment Address:** 0x486cbad2d704bc76f8d0cdda6aa93c94d53297b9 (Ethereum DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

This project aims to deliver an implementation of the parity trie [verifier](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233) as required by state proof checking algorithms ([read_child_proof_check](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/state-machine/src/lib.rs#L1102), [read_proof_check_on_proving_backend](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/state-machine/src/lib.rs#L1128)) in the Solidity programming language, which would include various sub implementations (for example [NodeCodec](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81) for both layoutv0 & layoutv1) required to build trustless bridging protocols from the Polkadot ecosystem to the EVM ecosystem.

Goal: To create a primitive for more generalized bridging protocols like IBC, it is more efficient to verify Parachain state/storage than to use custom implementations which Darwina and Snowfork do.

### Project Details

#### APIs
```solidity
function VerifyProof(root bytes32, proof bytes[], keyValues KeyValue[]) public external returns (bool)

struct KeyValue {
    key bytes;
    value bytes;
}
```
#### Technology Stack
- Solidity

## Team :busts_in_silhouette:

### Team members

- Seun Lanlege,
- Sam Omidiora, Femi Bankole

### Contact

- **Contact Name:** Jesse Chejieh
- **Contact Email:** jesse@polytope.technology
- **Website:** [research.polytope.technology](https://research.polytope.technology/)

### Legal Structure
- **Registered Address:** Harneys Fiduciary (Cayman) Limited, 4th Floor, Harbour Place, 103 South Church Street, Cayman Islands
- **Registered Legal Entity:** Polytope Labs Ltd.

### Team's experience

Polytope Labs is a collective of core blockchain engineers, researchers & scientists from varying blockchain protocol backgrounds passionate about the proliferation of networks over platforms and enabling this future through blockchain research & education, tooling and core infrastructure development. 

- Seun Lanlege: Previously core developer at Parity Tech, Ethereum and Polkadot with over 4 years of industry experience, core contributor of the code utilized by the ecosystem who recently joined the [Polkadot fellowship program](https://github.com/polkadot-fellows/seeding/pull/33) and Mad Scientist at Polytope Labs.
- Sam Omidiora: Senior Blockchain Engineer with over four years of industry experience, previosly at [Aave](https://aave.com/), [Ambire](https://www.ambire.com/) and [Advanced Blockchain](https://www.advancedblockchain.com/) working with the solidity programming language and Lab Scientist at Polytope Labs.
- Femi Bankole: Blockchain engineer at [Matchx_iot](https://matchx.io/) + [MXC Foundation](https://www.mxc.org/) and Lab Intern at Polytope Labs.


### Team Code Repos

- [Solidity Merkle Trees](https://github.com/polytope-labs/solidity-merkle-trees)
- [Simnode](https://github.com/polytope-labs/sc-simnode)
- [Prisma Client](https://github.com/polytope-labs/prisma-client-rs)

### Team GitHub Profiles

- [Seun Lanlege](https://github.com/seunlanlege/)
- [Sam Omidiora](https://github.com/samparsky)
- [Femi Bankole](https://github.com/iTranscend/)

### Team LinkedIn Profiles

- [Seun Lanlege](https://www.linkedin.com/in/seunlanlege/)
- [Sam Omidiora](https://www.linkedin.com/in/omidiora-samuel/)
- [Femi Bankole](https://www.linkedin.com/in/femibankole)


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 Weeks
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 Implementation

- **Estimated duration:** 6 Weeks
- **FTE:**  2.5
- **Costs:** 30,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | A documentation on how to use this library in form of a README on the project repository. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that covers what was done/achieved as part of the grant. |
| 1 | Solidity SCALE Codec | This will include support for `enum{option/result}`, `Vec<Vec<u8>>` decoding and other types required for verifying state proofs as current implementations([Darwinia](https://github.com/darwinia-network/darwinia-messages-sol/blob/master/contracts/utils/contracts/ScaleCodec.sol), [Snowfork](https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/ScaleCodec.sol)) don't support.
| 2. | KeyspacedDB | Provide the solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L426](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L426). |
| 3. | MemoryDB | Provide the solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L163](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L163). |
| 4. |  NodeCodec | Provide solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81). |
| 5. | Node | Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L184](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L184). |
| 6. | NodePlan |   Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L507](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L507). |
| 7. | NodeHeader | Provide the solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_header.rs#L26](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_header.rs#L26). |
| 8. | NibbleSlicePlan | Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L454](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L454). |
| 9. | NibbleSlice | Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/nibble/mod.rs#L180](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/nibble/mod.rs#L180). |
| 10. | Layoutv0 | Provide the Solidity implementation of following; [https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60](https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60). |  
| 11. | Layoutv1 | Provide the Solidity implementation of the following; [https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63](https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63) . |
| 12. | Trie Verifier | Provide the Solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233). |

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website.
