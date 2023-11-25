# Decentralized Private Computation

- **Team Name:** Ann
- **Payment Address:12saaaiXmkgd4yw6rgSU2tVrVRvUnrxLhahoW6pGe92hgKZ7** (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview 📄

This Project based in [ZEXE](https://github.com/AleoHQ/zexe/tree/master) and [ZEXE paper](https://eprint.iacr.org/2018/962).
In order to  implement ideal_ledger,plain_dpc,delegable_dpc Pallet.

### Overview

This project will implement ideal_ledger,plain_dpc,delegable_dpc pallet (The following content is taken from  ZEXE paper):

1. ideal_ledger pallet
   In ZEXE's prototype.It is simply an ideal ledger, an append-only log of valid transactions that is stored in memory.
   It maintain a Merkle tree.
2. plain_dpc  pallet
   It is decentralized private computation (DPC) schemes, a cryptographic primitive in which parties with access to an ideal append-only ledger execute computations offline and subsequently post privacy-preserving, publicly-verifiable transactions that attest to the correctness of these offline executions.
3. delegable_dpc  pallet
   It is a DPC scheme in which a user can delegate to an untrusted worker the expensive computations associated with producing a transaction. The security goal is that the worker should not be able to produce valid transactions that have not been authorized by the user.
4. dpc_cli
   It is offline proof computation cli tool.It implements `execute` function part of plain_dpc and delegable_dpc.

### Project Details
the integration into Polkadot/Substrate:
phase 1 prototype stage:
- The merkle tree of transactions and commitments will store on the storage of substrate pallet ideal_ledger.
- plain_dpc transaction proof verify will implement in on-chain function verify  in substate pallet plain_dpc pallet.
- delegable_dpc transaction proof verify will implement in on-chain function verify  in substate pallet delegable_dpc pallet.

phase 2 privacy preserving applications:
support polkadot address.
private user-defined asset substrate pallet.
private DEX substrate pallet.
private stable coin substrate pallet.

phase 3 :
The another version of the offline proof computation execute part of plain_dpc and delegable_dpc .

Roadmap:
- 2024 Q2 (phase 1) : DPC prototype substate local development node.It includes ideal_ledger ,plain_dpc,delegable_dpc pallets.
- 2025 Q2 (phase 2) : DPC privacy-preserving application parachain/chain testnet.
It includes private user-defined asset ,private DEXs,private stable coins pallets.
- Future (phase 3) : DPC general-purpose privacy-preserving smart contract application parachain/chain.
It include private smart contract application examples.

### Ecosystem Fit

The target audience:
- privacy blockchain developers/operators/maintainer
- privacy preserving applications developers
- privacy preserving applications users

It meets data privacy and function privacy needs.

The examples of ZEXE such as zerocash,tornado cash [exmaples](https://github.com/EspressoSystems/veri-zexe/tree/main/src/examples)

There are similar projects in related ecosystems:
- [Aleo SnarkVM](https://github.com/AleoHQ/snarkVM/tree/testnet2) ZEXE implement
- [Veri ZEXE](https://github.com/EspressoSystems/veri-zexe) ZEXE implement and improvement 

## Team 👥

### Team members

- Aric Lee
- Zen Zhou

### Contact

- **Contact Name:** Aric Lee
- **Contact Email:** aric0x02@gmail.com
- **Website:** None

### Legal Structure

None

### Team's experience

Aric has 22 years of software development experience and 5 years working in Blockchain developer. Now working as a freelancer. He has 3 years Rust development experience and 5 years NodeJs experience.

Zen has 22 years of software development experience and 1 years working in Blockchain developer. He has 1 years Rust development experience .

### Team Code Repos

- https://github.com/aric0x02
- https://github.com/ant8ee

### Team LinkedIn Profiles (if available)

None

## Development Status 📖

[DPC](https://github.com/aric0x02/substrate-dpc.git)

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 6 month
- **Full-Time Equivalent (FTE):**   1 FTE
- **Total Costs:**  30,000 USD.

### Milestone 1  — ideal_ledger pallet

- **Estimated duration:** 2 month
- **FTE:**  1
- **Costs:** 10,000 USD

|        Number | Deliverable               | Specification                                                                                                                                                                                                                                            |
| ------------: | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | Apache 2.0 and MIT                                                                                                                                                                                                                                       |
| **0b.** | Documentation             | We will provide both**inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                          |
|            1. | ideal_ledger pallet       | We will implement main functions:`push transaction`,`prove transaction`,`verify transaction` and so on.                                                                                                                                            |

### Milestone 2 — plain_dpc  pallet

- **Estimated Duration:** 2 month
- **FTE:**  1
- **Costs:** 10,000 USD

|        Number | Deliverable               | Specification                                                                                                                                                                                                                                            |
| ------------: | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | Apache 2.0 and MIT                                                                                                                                                                                                                                       |
| **0b.** | Documentation             | We will provide both**inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                          |
|            1. | plain_dpc  pallet         | We will implement main functions:`verify` and so on.                                                                                                                                                                                                   |
|            2. | dpc_cli  tool             | We will mainly implement `execute` part of **DPC** and so on.                                                                                                                                                                                    |

### Milestone 3 — delegable_dpc  pallet

- **Estimated Duration:** 2 month
- **FTE:**  1
- **Costs:** 10,000 USD

|        Number | Deliverable               | Specification                                                                                                                                                                                                                                            |
| ------------: | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | Apache 2.0 and MIT                                                                                                                                                                                                                                       |
| **0b.** | Documentation             | We will provide both**inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                          |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                            |
|           0e. | Article                   | We will publish an**article** that explains the usage detail of DPC pallets.                                                                                                                                                                       |
|            1. | delegable_dpc  pallet     | We will implement main functions:`verify` and so on.                                                                                                                                                                                                   |

## Future Plans

## Additional Information ➕

**How did you hear about the Maintenance Grants Program?**  personal recommendation .
