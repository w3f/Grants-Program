# Open Grant Proposal

* **Project Name:** The Parami Protocol
* **Team Name:** The Parami Team
* **Payment Address:** 1ET2d5D2aDebVdrV21d6h9w2kuYV4fthv

## Project Overview :page_facing_up:

### Overview

The goal of Parami Protocol is to build a blockchain-empowered fair and transparent win-win private domain traffic advertising alliance, connecting the majority of advertisers, traffic owners and users, removing intermediaries, improving settlement efficiency, allowing users to take back their own digital sovereignty, and the revenue of all parties involved in digital advertising.

Parami uses Substrate as the blockchain development framework, mainly for two reasons. From the technical level, Substrate framework is a general blockchain development framework launched by Polkadot. Substrate contains all the components needed to build a blockchain, including a p2p network, consensus mechanism, distributed database, transaction queue, and core runtime. The modulized framework provides a powerful tool for chain or side-chain development.

On an ecological basis, the number of Polkadot developers and projects is growing at a rapid pace. The Web3 Foundation currently funds over 100 projects, most of which are related to Polkadot or Substrate. In terms of eco-applications, there are already nearly 100 projects based on Substrate. More and more talented developers and teams are joining the Polkadot ecosystem. These Web3.0 projects will all have the need for tokenized marketing, thus becoming an important business partner of Parami.

The Parami protocol will provide a DID-based tokenized advertising preference solution for the whole Polkadot ecosystem, with its power of the parachain & relay-chain mechanism.

We have done many attempts to combine blockchain with digital advertising, and have been bothered by traditional digital advertising. We have been keeping considering some questions:

- How can users benefit from the advertising industry?
- How can users re-gain their control of self digital sovereignty, and be freedom from digital exploitation?
- How can participants in the digital advertising industry can mutually benefit from each other?

So we come up with the Parami Protocol, an identity-driven and data-driven solution to digitial advertising.

From the perspective of the advertising industry, the blockchain technology can get fairness and autonomy. On the other hand, from the blockchain's view, tokenized advertising can bring more opportunities and value growth to the web 3.0 ecosystem.

### Project Details


The main participants of the Parami protocol are advertisers and users. The full set of services is achieved through the cooperation of multiple components.

![Project Details](https://user-images.githubusercontent.com/72891/102059406-dac82e00-3e2b-11eb-8ccb-f701786be6d1.png)

Parami components include Runtime, Off-chain worker, Access Services, Advertiser Portal, and Background Services.
Runtime and Off-chain workers work together to implement the factor core of Parami.

Advertisers can create ad requests by accessing the Access Services through the Advertiser Portal.

Users access various types of ads through different ad media. Parami uses CDN and API Gateway to speed up user access.
It also provides full Firewall and Auth support to enhance the security of the whole access system.

To support the full core service, we use IPFS and RDS as the storage layer, and use Message Queue to improve the message processing performance.

#### Data Analysis Platform

Advertisers are always very concerned about the effectiveness of advertising. For this reason, we will develop a data analysis platform to facilitate advertisers to do further analysis of placement data and improve the effectiveness of advertising.

![Data Platform Prototype](https://user-images.githubusercontent.com/72891/102059676-2d094f00-3e2c-11eb-9891-c22a185b37f3.png)

### Ecosystem Fit

Projects like XCHNG, MAD Network, ADEX and Parpuys, use smart contracts to build infrastructure, which is expensive for normal users yet not appealing.

Other projects, like Rebelai, adChain, are using blockchain to solve the problem of deception in traditional advertising, which neglects the value of user data and privacy.

Parami combines DID with tokenized advertising, providing an Ad 3.0 paradigm to Web 3.0, decentralized privacy and data security, benefiting all participants.

## Team :busts_in_silhouette:

### Team members
* Lucas WU, Team Leader
* Dorian, Blockchain Architect
* Yanping YANG, Full-stack Developer
* Alex, Product Director

### Contact
* **Contact Name:** The Parami Team
* **Contact Email:** contact@parami.io
* https://parami.io

### Legal Structure
* **Registered Address:** 140 PAYA LEBAR ROAD #10-09 AZ @ PAYA LEBAR SINGAPORE 409015
* **Registered Legal Entity:** PROCHAIN FOUNDATION LIMITED

### Team's experience
Lucas WU

* Senior Blockchain Architect
* Former experience in TRON Protocol and STEEM
* OpenSource enthusiast
* Github: @wubin01(https://github.com/wubin01)

Dorian

* Blockchain Developer
* Former experience in TRON Protocol, among top contributors
* Github: @DorianRust(https://github.com/DorianRust)

Yanping YANG

* Full-stack Developer
* blockchain enthusiasts and familiar with rust
* Github: [@Yanping YANG](https://github.com/andelf)

### Team Code Repos
* https://github.com/parami-protocol/parami - The core runtime project
* https://github.com/parami-protocol/apps - The web

### Team LinkedIn Profiles
* [Lucas WU](https://www.linkedin.com/in/%E6%96%8C-%E5%90%B4-892ab2201/)
* [Alex](https://www.linkedin.com/in/%E7%85%9C%E5%B0%A7-%E6%9D%A8-59b75691/)
* [Dorian](https://www.linkedin.com/in/dorian-wu-90942a202/)

## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated duration:** 6 months
* **Full-time equivalent (FTE):** 3 FTE
* **Total Costs:** 2 BTC

### Milestone 1 — Testnet: Dāna
* **Estimated duration:** 1 month
* **FTE:**  3
* **Costs:** 0.2 BTC

This milestone’s main task is to perform proof of concept and security validation based on Substrate tokenized advertising parallel chains.

Also, the Parami protocol will open the test process of on-chain DID (Decentralized Identifier) generation, bridging the social identities and asset identities of users.


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | POC | Proof of Concept, implement DID generation on the chain |
| 2. | Testnet | Setup and run a testnet |
| 3. | DID Generating | Generate on-chain DID, invite test users |

### Milestone 2 - Mainnet V1: Śīla
* **Estimated duration:** 2 month
* **FTE:**  3
* **Costs:** 0.5 BTC

The main task of this milestone is setting up Parami nodes and implementing core logic.

The NPoS-based BABE/GRANDPA hybrid consensus algorithm will help the Parami main network to balance efficiency and decentralization, preventing the centralized evil tendencies similar the DPoS. Initially, Parami will set up some nodes for the testnet.

Ad 3.0 runtime core logic will be deployed at this milestone, which will support advertisers to build a contract-regulated process of ad setup, more transparent price bidding, more accurate cost metering, and more intelligent placement. The goal is to ensure advertisers and users are honest and trustworthy in ad consumption and avoid evil.

Off-chain Worker-based decentralized advertising oracle machine will be deployed, and Parami nodes will have the ability to verify ads off-chain and get profit through real advertising verification behavior.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Node Setup | Set up and run a few decentralized nodes |
| 2. | Ad Runtime | The core component of Parami, empowering digital ad with blockchain |
| 3. | Offchain Worker | The Ad Oracle, which will verify ads off-chain |
| 4. | Ad API | Provide feature-rich API for advertisers, including Runtime API and Off-chain Worker API |
| 5. | API Documentation | The documentation will provide details of Runtime API and Off-chain Worker API |

### Milestone 3 - Mainnet V2: Vīrya
* **Estimated duration:** 1.5 month
* **FTE:**  1
* **Costs:** 0.2 BTC

This milestone will kick off the on-chain governance process for the Parami community, and the community will make appropriate mainnet adjustments based on former running of the chain.

Parami will simultaneously support Offchain Worker 2.0, providing a more powerful decentralized advertising oracle machine for seamless access to social identity platforms like Twitter, Facebook, Wechat.

Parami mainnet will also initiate support for NFTs(non-fungible tokens) such as ERC721, thus enabling advertisers to offer more incentive tools, like coupons, vouchers, tickets, medals, and so on.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Governance | Implement chain governance logic |
| 2. | Off-chain Worker Update | Update to Off-chain Worker 2.0, a more powerful oracle implementation. Introduce social platforms to oracle |
| 3. | NFT Support | Add NFT support to runtime and off-chain worker, and advertisers can issue their NFTs |

### Milestone 4 - Mainnet V3: Dhyāna
* **Estimated duration:** 1 month
* **FTE:**  1
* **Costs:** 0.3 BTC

This milestone will focus on the privacy protection and realization of users' advertising data.

In this milestone, Parami will, on the one hand, provide better privacy protection tools, so that users can truly control their own privacy data sovereignty. On the other hand, it will use an improved zero-knowledge-based, non-interactive version to allow users to prove themselves as potential target users for advertisers without revealing their personal private data, to gain additional profit.

Besides, Parami will also provide on-chain data analysis tools to provide a basis for advertisers to track and analyze their ads. It will also establish an industry blocklist solution to jointly defend against potential malicious acts like witch attacks.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Zk-based Data Model | Implement privacy by using a zero-knowledge-based data model |
| 2. | Profit Model | Implement a profit model upon zk-based data model |
| 3. | Analysis Tool | Provide a data visualization analysis tool for advertisers |
| 4. | Blocklist | Implement an on-chain blocklist |

### Milestone 5 - Mainnet V4: Prajñā
* **Estimated duration:** 1 month
* **FTE:**  1
* **Costs:** 0.2 BTC

This milestone of Parami will be connected to the Polkadot leading network and rely on Polkadot's parachain capabilities to provide tokenized advertising services to other parallel chains. The Ink-based smart contract infrastructure will provide Parami with the ability to generate shadow assets. With Polkadot's shared security and its own data completeness, Parami will serve as the DID infrastructure to other parallel chains,
further enriching users' DID data assets.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Para-chain | Connect Parami to Polkadot leading network via parachain mechanism |
| 2. | Ink! Support | Introduce ink! module to runtime, allowing generate shadow assets |

## Future Plans

We will continue to build a more decentralized Ad platform for the Polkadot ecosystem.

## Additional Information :heavy_plus_sign:

Any additional information that you think is relevant to this application that hasn't already been included.

* What work has been done so far?

Github projects: https://github.com/parami-protocol

* Are there are any teams who have already contributed (financially) to the project?

ProChain Foundation.

* Have you applied for other grants so far?

Substrate Builder Program.
