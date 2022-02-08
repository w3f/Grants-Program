# W3F Grant Proposal

- **Project Name:** Webb ink! Mixer
- **Team Name:** [Webb Technologies](https://github.com/webb-tools) 
- **Payment Address:** 0xAC8E9305dc7AC95685c7D52E759c35aCd9eB90Ff
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

Webb Technologies aims to implement a DOT & KSM mixer similarly described in [RFP #694](https://github.com/w3f/Grants-Program/blob/master/rfps/mixer.md) using ink!.

As detailed in [RFP #694](https://github.com/w3f/Grants-Program/blob/master/rfps/mixer.md), the available options for DOT holders to preserve privacy on-chain is limited and imposes users to trust centralized exchanges. The usage of centralized exchanges in this manner rarely achieves the intended purpose of on-chain anonymity and for many users these exchange features are not accessible, and unwieldly to use.  

The Webb team's primary focus is building tools that are interoperable, composable, and most importantly **private**. Our contention is privacy should be default, and we aspire to design systems that emphasizes collaborative privacy creation. The Webb Protocol team is passionate about advancing zero-knowledge research and actively participates in collaborative discussions regarding the development, implementation and usage of zero-knowledge proofs in distributed systems. We intend to leverage the teams technical know-how, interests, and capabilities to augment our existing zero-knowledge mixer to be written using the **ink!** smart contract langauge.   

### Project Details

#### Technology Stack
* [ink!](https://paritytech.github.io/ink/) 
* Rust

The Webb team already has considerable experience in designing and developing in this area:

* [Arkworks-gadgets](https://github.com/webb-tools/arkworks-gadgets): Zero-knowledge gadgets for Webb's private blockchain applications
* [Protocol-substrate](https://github.com/webb-tools/protocol-substrate): A collection of pallets enabling shielded bridging of cross-chain assets to Polkadot
* [Protocol-solidity](https://github.com/webb-tools/protocol-solidity): A collection of contracts enabling shielded bridging of cross-chain assets to EVM based chains
* [Webb Dapp](https://github.com/webb-tools/webb-dapp): Webb Protocol UI
* [Webb.js](https://github.com/webb-tools/webb.js): SDK library for setting up Webb Substrate tools
* [Relayer](https://github.com/webb-tools/relayer): Webb Relayer Network

### Ecosystem Fit 

The Webb Protocol is designed to be interoperable, and composable enabling other chains and assets to make use of the privacy-preserving properties offered. The protocol will further DeFi adoption on the Polkadot network, bring in additional liquidity, and facilitate the growing appetite for privacy in Web3. 

## Team :busts_in_silhouette:

### Team members

- Drew Stone
- Dustin Brickwood
- Ayomide Onigbinde
- Nathan Barnavon
- Ahmed Korim
- Stephen Akinyemi

### Contact

- **Contact Name:** Drew Stone
- **Contact Email:** drew@commonwealth.im
- **Website:** [Webb Tools](https://webb.tools)

### Legal Structure

- **Registered Address:** 1 World Trade Center, New York City, New York 10007
- **Registered Legal Entity:** Spider Webb Technologies Inc.

### Team's experience

Our team has deep experience building on Substrate and growing experience building zero-knowledge proof based applications. The team is made of experienced Substrate builders, various members are active in discussions regarding [ZK-Garage/plonk](https://github.com/ZK-Garage/plonk) development, and enthusiastic Rust engineers. We also shipped an initial grant, (1) to build out the pallets for native token support using bulletproofs zero-knowledge arguments, and (2) to extend the project to support Arkworks proving backends.

### Team Code Repos

- [Dkg-substrate](https://github.com/webb-tools/dkg-substrate): Multy-party threshold ECDSA Substrate node
- [Arkworks-gadgets](https://github.com/webb-tools/arkworks-gadgets): Zero-knowledge gadgets for Webb's private blockchain applications
- [Protocol-substrate](https://github.com/webb-tools/protocol-substrate): A collection of pallets enabling shielded bridging of cross-chain assets to Polkadot
- [Protocol-solidity](https://github.com/webb-tools/protocol-solidity): A collection of contracts enabling shielded bridging of cross-chain assets to EVM based chains
- [Webb Dapp](https://github.com/webb-tools/webb-dapp): Webb Protocol UI
- [Relayer](https://github.com/webb-tools/relayer): Webb Relayer Network

#### Team GitHub Accounts

- [Drew Stone](https://github.com/drewstone)
- [Dustin Brickwood](https://github.com/dutterbutter)
- [Ayomide Onigbinde](https://github.com/OAyomide)
- [Nathan Barnavon](https://github.com/nepoche)
- [Ahmed Korim](https://github.com/AhmedKorim)
- [Stephen Akinyemi](https://github.com/appcypher)

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/drewcstone/

## Development Status :open_book:

We have developed a Substrate Mixer module which will be used as the blueprint for designing and implementing a mixer using ink!. In addition we have started an inital implementation in ink!.

Webb Protocol related work:
* [Substrate mixer module](https://github.com/webb-tools/protocol-substrate/tree/main/pallets/mixer)
* [protocol-ink!](https://github.com/webb-tools/protocol-ink)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 7.5 months
- **Full-Time Equivalent (FTE):** 5  
- **Total Costs:** 144,000 USD

### Milestone 1 - Implement ink! smart contract that will facilitate a deposit/withdraw functionality for mixing a token

- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:**  40,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can interact with ink! smart contracts. |
| 0c. | Unit tests| Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the implementation and design details.
| 1. | Mixer ink! contract | Implement a Mixer contract that will facilitate a `deposit` and `withdraw` functionality for mixing a token using the MerkleTree as the underlying data storage and appends the commitments "deposited" to it. | 
| 1a. | Mixer ink! contract | Unspent nullifer verification checks to protect against double spend on `Withdraw` operations|  
| 1b. | Mixer ink! contract | Event emission for `Deposit` and `Withdraw` |  
| 1c. | PSP22 support | Using OpenBrush standard for native mixer contract and a token mixer contract| 
| 2. | Merkle tree implementation | Implement an append-only `MerkleTree` that can be integrated into mixer ink! contract | 

### Milestone 2 -  Extend relayer implementation for ink! events

- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:**  40,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can run the relayer to listen to ink! events and relay transactions. |
| 0c. | Unit tests | Core functions will be fully covered by unit tests to ensure functionality and robustness. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | ink! event watcher | Listen for ink! contract events, `Deposit` and `Withdraw` |
| 1a. | ink! event watcher | Build local merkle tree using deposit events, and ensure state syncronization (spelling) | 
| 1b. | API | Implement API endpoint for fetching merkle tree state | 
| 2. | Transaction relayer | Verifies the validity of the submitted proof & transaction. If correct, it submits the transaction to the `ink!` contract| 
| 2a. | Fee and Refund support | Support for setting fee for relayer incentives, and end-user refunds. | 
| 2b. | API | Implement API endpoint for fetching relayer state, incluidng state and refund | 


### Milestone 3 - `Withdraw` method & R1CS groth16 verifier contract in ink!

- **Estimated duration:** 1.5 month
- **FTE:**  2
- **Costs:**  24,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can run the relayer to listen to ink! events and relay transactions. |
| 0c. | Unit tests | Core functions will be fully covered by unit tests to ensure functionality and robustness. |
| 1. | Implementing Mixer verifier | Implementing ink! contract for mixer verifier circuit | 

### Milestone 4 -  UI Integration

- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:** 40,000 USD
  
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can interact with UI. |
| 1. | UI/Desgin  | Design UI based on the user input requirements. |
| 2. | User Interface | Integrate into existing dApp and build on top of the smart contract functionalities|

## Future Plans

The team's future plans are to build zero-knowledge products with extensible UIs and composable runtime primitives. We want to continue develop governance in zero-knowledge and we see mixers as being the core primitives towards this pursuit.

## Additional Information :heavy_plus_sign:

#### If there are any other teams who have already contributed (financially) to the project.
- Nope
#### Previous grants you may have applied for.
- [Mixer.md](https://github.com/w3f/Grants-Program/blob/master/applications/MIXERv2.md) 
