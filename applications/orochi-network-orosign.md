# Orosign - Non-custody MPC Mobile Wallet.

- **Team Name:** Orochi Network
- **Payment Address:** 0xcCccE1EeCc5176383A515186fDb0442e7ee3EC23 (ETH)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> :exclamation: _The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe._

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Users are now able to take advantage of the highest security feature similar to a cold storage while experiencing flexibility and convenience of the mobile app at minimal cost

Orosign is a self-managing custodial Mobile App for digital assets/identity that suits all demands of Web3.

### Project Details

Orosign project utilize cryptographic primitives to help people manage/secure their digital assets, it could provide highest security meanwhile friendly to end-users. Orosign provides following features:

- **Gasless Multi-signature:** We use ECDSA proofs to perform off-chain voting to manage multisig wallet.
- **Gaming & NFT:** Support gaming by providing automation transaction signing for Web3 game, this wallet can receive and display NFTs.
- **ZeroKey:** A MPC based wallet, we build ECDSA on top of MPC to secure the signing process where user can perform the signing without any actual private key.
- **Web3 Passport:** Support Proof of Carrying Data for the.

![](https://orochi.network/assets/images/orosign.png)

### Ecosystem Fit

- **Non-custodial** Users are holding their own digital asset that meant they hold the private keys in their crypto wallet and hold the major shares in MPC wallet. Orosign was design to make sure no one able to touch people digital asset even Orochi Network.
- **High Customizability** In gasless Multi-signature and MPC wallet, user can customize number of participants and the threshold to perform signing process.
- **Highest Level of Security** Orosign can be provide the first MPC Wallet on Polkadot.
- **NFT & games optimization** Automatic showcase for all NFT collectibles, and support automation transaction signing for Web3 game.

**What is the benefit of this solution compared to others?**

- Multi-signature and MPC wallet enable highest level of security in co-ownership for vast majority of Polkadot's users.
- Orosign can be the first MPC wallet on Polkadot
- Orosign is building toward the vision of Web3 passport.

## Team :busts_in_silhouette:

### Team members

- Chiro Hiro - CEO Orochi Network [Github](https://github.com/chiro-hiro)
- Hubert Nguyen - CGO Orochi Network [Github](https://github.com/hubertnguyen88)
- Minh - R&D Specialist [Github](https://github.com/phamnhatminh1292001)
- James - Front-end Developer [Github](https://github.com/seawish369)
- Kevin - Back-end Developer [Github](https://github.com/dqtkien)
- Trang - Business Analysis

### Contact

- **Contact Name:** Hubert Nguyen
- **Contact Email:** hubert@orochi.network
- **Website:** www.orochi.network

### Legal Structure

- **Registered Address:** OROCHI NETWORK PTE. LTD,68 CIRCULAR ROAD , #02-01 , SINGAPORE (049422)
- **Registered Legal Entity:** OROCHI NETWORK PTE. LTD,68 CIRCULAR ROAD , #02-01 , SINGAPORE (049422)

### Team's experience

We are focusing in cryptography and especially ZKP, we want to utilize cryptography to provide **Verifiable Computation**.

- Our technical blog [https://docs.orochi.network/](https://docs.orochi.network/)
- Our Github repo [https://github.com/orochi-network](https://github.com/orochi-network)
- Our proposal for zkMemory [https://hackmd.io/@chiro-hiro/SkqNGtcW2](https://hackmd.io/@chiro-hiro/SkqNGtcW2)

### Team Code Repos

- https://github.com/orochi-network

### Team LinkedIn Profiles (if available)

- [Chiro Hiro](https://www.linkedin.com/in/chiro8x)
- [Hubert Nguyen](https://www.linkedin.com/in/hungnguyen88)

## Development Status :open_book:

[https://github.com/orochi-network](https://github.com/orochi-network)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 11
- **Full-time equivalent (FTE):** 12.1
- **Total Costs:** $80,500

### Milestone 1

- **Estimated Duration:** 1 month
- **FTE:** 1.6
- **Costs:** $5,600

| Number  | Deliverable | Specification                                                                                                                       |
| ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License     | CC0 1.0                                                                                                                             |
| **0b.** | Research    | Researching about Polkadot signature system                                                                                         |
| **0c.** | Research    | Public article for every research we made, everything published under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) |
| **1.**  | Research    | Researching about MPC in ECDSA (all supported signatures by Polkadot)                                                               |
| **2.**  | Research    | Researching MPC for `secp256k1`                                                                                                     |
| **3.**  | Research    | Researching about MPC for `ed25519`                                                                                                 |
| **4.**  | Research    | Researching about MPC in `sr25519`                                                                                                  |

### Milestone 2

- **Estimated Duration:** 2 months
- **FTE:** 2.1
- **Costs:** $14,700

| Number  | Deliverable                          | Specification                                                                                                                                                                                                                         |
| ------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                              | Apache 2.0                                                                                                                                                                                                                            |
| **0b.** | Documentation                        | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide            | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                       |
| **0d.** | Docker                               | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                         |
| **1.**  | Functionality: Polkadot in back-end  | Support Polkadot ecosystem in back-end of Orosign                                                                                                                                                                                     |
| **2.**  | Functionality: Polkadot in front-end | Support Polkadot ecosystem in front-end of Orosign                                                                                                                                                                                    |

### Milestone 3

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** $7,000

| Number  | Deliverable                           | Specification                                                                                                                                                                                                                         |
| ------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                               | Apache 2.0                                                                                                                                                                                                                            |
| **0b.** | Documentation                         | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide             | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                       |
| **0d.** | Docker                                | We will publish an article that explains about Orosign's MPC wallet on curve `secp256k1`                                                                                                                                              |
| **1.**  | Functionality: MPC on secp256k1 curve | Implement for `secp256k1`                                                                                                                                                                                                             |

### Milestone 4

- **Estimated Duration:** 2 months
- **FTE:** 2
- **Costs:** $14,000

| Number  | Deliverable                         | Specification                                                                                                                                                                                                                         |
| ------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                             | Apache 2.0                                                                                                                                                                                                                            |
| **0b.** | Documentation                       | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide           | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                       |
| **0d.** | Docker                              | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                         |
| **0e.** | Article                             | We will publish an article that explains about Orosign's MPC wallet on curve `ed25519`                                                                                                                                                |
| **1.**  | Functionality: MPC on ed25519 curve | Implement for `ed25519`                                                                                                                                                                                                               |

### Milestone 5

- **Estimated Duration:** 2 months
- **FTE:** 2
- **Costs:** $14,000

| Number  | Deliverable                   | Specification                                                                                                                                                                                                                         |
| ------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                       | Apache 2.0                                                                                                                                                                                                                            |
| **0b.** | Documentation                 | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide     | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                       |
| **0d.** | Docker                        | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                         |
| **0e.** | Article                       | We will publish an article that explains about Orosign's MPC wallet on curve `sr25519`                                                                                                                                                |
| **1.**  | Functionality: MPC on sr25519 | Implement for `sr25519`                                                                                                                                                                                                               |

### Milestone 6

Please add additional milestones in the same way:

- **Estimated Duration:** 3 months
- **FTE:** 2.4
- **Costs:** $25,200

| Number  | Deliverable                        | Specification                                                                                                                                                                                                                         |
| ------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                            | Apache 2.0                                                                                                                                                                                                                            |
| **0b.** | Documentation                      | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide          | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                       |
| **0d.** | Docker                             | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                         |
| **0e.** | Article                            | We will publish an article that explains about Orosign's MPC wallet, how does it benefit users.                                                                                                                                       |
| **1.**  | Functionality: Distributed Network | Implement a node of MPC's distributed network to perform MPC.                                                                                                                                                                         |
| **2.**  | Functionality: Node's RPC          | Implement API interface for distributed system, allow Wallet API to connect to MPC nodes.                                                                                                                                             |
| **3.**  | Functionality: MPC Back-end        | Integrate wallet API with node's RPC, provide back-end for Orosign front-end.                                                                                                                                                         |
| **3.**  | Functionality: MPC Front-end       | Integrate wallet API with Orosign front-end, allow users to use MPC wallet.                                                                                                                                                           |

## Future Plans

**Milestone 7:** Implement Proof of Carrying Data (PCD)

**Milestone 8:** Implement PCD in front-end of Orosign, build the first Web3 passport of Polkadot

## Additional Information :heavy_plus_sign:

We do research about MPC, especially ECDSA threshold signature for 1 year, publish several articles on our blog ([docs.orochi.network](https://docs.orochi.network)). Drafting the paper to consider right method to Implement threshold signature (ECDSA), considering different methods to for implementation. Have some related work on MPC [ECVRF](https://github.com/orochi-network/orochimaru/tree/main/libecvrf) which is shared some similar primitives to ECDSA.

- Are there are any teams who have already contributed (financially) to the project?
  - No, our project is self funded till now
- Have you applied for other grants so far?
  - No
