# solidity-trie-verifier

- **Team Name:** Polytope Labs
- **Payment Address:** 0xC70ac55B07A070743555C5D12B263733eCae9f92 (Ethereum DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

This project aims to deliver an implementation of the parity trie [verifier](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/lib.rs#L268) in the Solidity programming language, enabling EVM chains verify Parachain state proofs.

This is a vital component in the context of secure bridging infrastructure in the ecosystem.

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

- **Total Estimated Duration:** 1 Month
- **Full-Time Equivalent (FTE):**  0.75 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 Implementation

- **Estimated duration:** 1 Month
- **FTE:**  0.75
- **Costs:** 30,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | A documentation on how to use this library in form of a README on the project repository. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that covers what was done/achieved as part of the grant. |
| 1. | Layoutv0 | Provide the Solidity implementation of following; [https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60](https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60). |  
| 2. | Layoutv1 | Provide the Solidity implementation of the following; [https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63](https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63). |
| 3. | Trie Verifier | Provide the Solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/lib.rs#L268](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/lib.rs#L268). |

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website.
