# Open Grant Proposal

- **Project Name:** XP.network Substrate Parachain - Elrond bridge.
- **Team Name:** XP.network.
- **Payment Address:** BTC: bc1qdpx2e6lejre536ph0csskas888ua3pz5p4pkuj.

## Project Overview

### Overview

XP.network is a codeless platform for building blockchain agnostic NFT DApps. XP.network allows non-developers to build their NFT marketplaces, galleries, museums and many more use-cases without coding. We will connect our users's applications to different blockchains via Polkadot.

In this project, we aim to bring Elrond’s users and ecosystem to Polkadot.

### Project Details

The main product of the project is a Cross-Chain Communication Bridge (CCCB) for two non-identical unsynchronized blockchains A (Substrate Parachain) and B (Elrond).

The structure of the CCCB:
1. An Ink! **Smart contract in a Substrate Parachain**.
2. This smart contract (SC) can be implemented by any Substrate Parachain as part of the setup of the bridge to Elrond.
3. A Rust **Smart contract in Elrond**.
4. This SC will be responsible for locking & releasing wrapped or native tokens in the Elrond blockchain.
5. Semi-decentralised **relay validators**.
6. The relay validators will be decentralised in terms of being separate independent nodes sitting in different servers with different security credentials. Why semi - because, at the moment, the validators will be set up and controlled by XP.network.
7. **Bridge RPC protocol** for calling remote smart contracts via our relay validators.
8. This protocol will allow calling functions with arbitrary data from smart contracts in Substrate Parachains.
9. **Elrond event listening mechanism** via our smart contract storage and validators calls
10. At the moment, Elrond has not implemented smart contract event emission, therefore our smart contract will store the transaction related events in its storage. Our validators will be requesting whether the data has changed in the smart contract in a loop with the 6 sec. delay (round length) for a fixed number of rounds. Once Elrond implements proper event emission (approximately in 2-3 months), we will use the native flow, since it will be more efficient.
11. Unit tests covering 85% of code.
12. Tutorials & documentation how to install, set up and use the bridge from the other Substrate Parachains.

### Ecosystem Fit

+ Users will be able to transfer their assets from any Substrate parachain to Elrond and backwards via the CCCB to Elrond.
+ Substrate parachain SCs will be able to call SCs in Elrond and backwards.
+ Other parachain developers will be able to implement our smart contracts and the validators to become bridged to Elrond.

## Team

### Team members

- Dmitry Brook - CTO, Project Lead.
- Virbal Kint - Expert in Move, Rust & Co-Founder


### Contact

- **Contact Name:** Dmitry Briukhanov

- **Contact Email:** dima@xp.network

- [XP.network website](https://xp.network/)


### Legal Structure

- **Registered Address:** HaHagana, 15, Or Yehuda, Israel
- **Registered Legal Entity:** XP Network


### Team Experience

**Dmitry Briukhanov**

- Over 18 years of experience in Development and Management 
- Former Senior Software Developer in Best Systems, Israel
- Former Team Lead in NLK, Russia

**Verbal Kint**

- Over 5 years of experiences in Blockchain Development 8 years in Rust, 1 year in Move and 15 years of development experience overall


### Team Code Repos

[Rust Documentation](https://xp-network.github.io/poc-documentation/docs/freezer/) Method names, parameters with types, return types and description. </br>
[PoC repository](https://github.com/xp-network/XP.network-Elrond-Migration)

### Team LinkedIn Profiles

[Dmitry Bryukhanov](https://www.linkedin.com/in/dmitry-briukhanov-60b2ab45/)


## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 months.
- **Total Effort:** 120 days.
- **Total Costs:** $ 30,000


### Milestone 1 - Alpha version of CCCB

- **Estimated Duration:** 20 working days (1 month)
- Working days **x** ppl. **:** 20 **x** 2
- Effort: 40 days
- **Costs:** $15,000

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Delivery time | End of June |
| 0c. | Documentation | Documents containing product architecture as well as basic user manuals  |
| 1. | CCCB architecture | CCCB architecture is developed and documented in textual descriptions and UML diagrams |
| 2. | Parachain -> Elrond transfer | We will implement the functionality of assets transfer form a Substrate Parachain to Elrond |
| 3. | Listening to events in Elrond | Since event handling is not fully implemented in Elrond, we will implement event storage in our smart contract and our validators will be querying the smart contract in a loop with the 6 sec. Intervals.( till events are implemented there) |
| 4. | Semi-decentralized relay validators | Bridge relay validators written in Typescript |


### Milestone 2 — Beta version of CCCB

- **Estimated Duration:** 20 working days (1 month)
- Working days **x** ppl. **:** 20 **x** 2
- Effort: 40 days
- **Costs:** $15,000

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Delivery time | End of July |
| 0c. | Documentation | Documents containing product architecture as well as basic user manuals  |
| 1. | Elrond -> Parachain transfer | We will implement the functionality of assets transfer from Elrond to a Substrate Parachain |
| 2. |Remote Smart Contract Calls | We will enable calls of smart contracts in Elrond from smart contracts in a Substrate Parachain via our relay validators |
| 3. |Remote Smart Contract Calls | We will enable calls of smart contracts in a Substrate Parachain from smart contracts in Elrond via our relay validators  |
| 4. | Unit tests | We will write unit tests with for the 1 & 2 milestones with min 85% code coverage  |
| 5. | Transaction fees solution | Solving the “gas” fee in the “foreign” blockchain problem | 
| 6. | Security audition | Testing the system resilience to fraudulent or erroneous validators | 
| 7. | Tutorials | Preparing tutorials with examples 1. How to attach an XP.Network CCCB to a parachain, 2. How to use XP.network CCCB | 


## Future Plans

+ We will develop a DEX between the coins of the Substrate Parachains to Elrond and back.
+ We will make the relay validators completely decentralized, implementing the PoS consensus mechanism.

## Additional Information

[The project repo:](https://github.com/xp-network) </br>
The present bridge is built in close cooperation with the Elrond team.
