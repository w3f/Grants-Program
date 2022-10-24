# Open Grant Proposal

* **Project Name:** The Parami Protocol
* **Team Name:** The Parami Team
* **Payment Address:** 1ET2d5D2aDebVdrV21d6h9w2kuYV4fthv
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/521#issuecomment-899650244)

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

![Project Details](https://user-images.githubusercontent.com/72891/104114587-1aa60680-5341-11eb-9584-79ab45d8b932.png)

Parami components include Runtime, Off-chain worker, RPC Interface. Runtime and Off-chain workers work together to implement the core of Parami. The core node code and is maintained by Parami, the nodes will be maintained by the community.

Advertisers can create ad requests by accessing the Advertiser Portal, which interacts with RPC Interface.

Users access various types of ads through different ad media. The social integration SDK will fetch and display Ad in IM explorer, then track and upload user interaction data to Advister server.

Ad metadata is divided into two categories, the on-chain part and off-chain part(IPFS part).

On-chain ad metadata contains ad parimary key and reward info:

* **issuerdid**: issuer did of the ad
* **adid**: ID of the ad
* **totalfund**: all the fund has been deposited
* **remainfund**: the maining fund has been deposited.
* **base**: the basic reward for a single ad interaction.
* **bonus**: the highest stardard of the bonus reward.

Off-chain ad metadata will be stored on IPFS, including all other basic ad metadata:

* **id**: ID of the ad
* **adomain**: ad domain name
* **bundle**: unique ID of app where ad is shown
* **url**: ad jump url
* **tags**: string array of ad topic
* **lang**: language code of the ad using ISO-639-1
* **init**: timestamp of the original instantiation of this ad
* **lastmod**: timestamp of most recent modification to this ad
* **display**: ad display data, including static picture url, or video links
* **ext**: Optional vendor-specific extensions.

#### Business Logic

All ads are pre-registered by advertisers via RPC Interface. So the advertisers know the ad's id, and set up the display of ad in its social platform or mobile apps.

![Life Cycle](https://user-images.githubusercontent.com/72891/104114632-88eac900-5341-11eb-9c78-248dbe60b07c.png)

* When a user is to be shown an ad, the underlying RPC API SDK will be responsible for converting the ad id into ipfs metadata information to enable the display of the ad.
* The SDK will then be responsible for passing the tracking data to the advertiser's server, which will be responsible for confirming the click and passing the confirmation information to the Parami's RPC Interface.
* The off-chain worker is responsible for initiating reward transactions and updating the user's profile.

The SDK will be a javascript library for advertisers to complete ad placements, with core functionality including：

* DID registry: register/initialize new DID and profile for new user and bind the corresponding social platform ID.
* DID read: get the DID according to the platform id.
* Ad display: convert ad id to IPFS resources(metadata in JSON format)
* Ad track: convert user interaction to track info.
* Ad data upload: upload user ad data to advertiser server.

#### Data Analysis Platform

Advertisers are always very concerned about the effectiveness of advertising. For this reason, we will develop a data analysis platform to facilitate advertisers to do further analysis of placement data and improve the effectiveness of advertising.

![Data Platform Prototype](https://user-images.githubusercontent.com/72891/102059676-2d094f00-3e2c-11eb-9891-c22a185b37f3.png)

### Ecosystem Fit

The Polkadot community alreay has a few standard DID solutions. The Parami DID will be a production-ready and domain-specific DID solution. We will add a referral system and use DID attributes as users' ad preference data.

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
* [Lucas Wu](https://www.linkedin.com/in/lucas-wu-05714b202/)
* [Alex](https://www.linkedin.com/in/%E7%85%9C%E5%B0%A7-%E6%9D%A8-59b75691/)
* [Dorian](https://www.linkedin.com/in/dorian-wu-90942a202/)

## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated duration:** 4 months
* **Full-time equivalent (FTE):** 3 FTE
* **Total Costs:** 1 BTC

### Milestone 1 — The Parami Protocol
* **Estimated duration:** 4 month
* **FTE:** 3
* **Costs:** 1 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | API Documentation | We will provide inline documentation of the code and API documentation to help developers to integrate Parami DID into their project |
| 0c. | Tutorial | We will provide a standalone tutorial for endusers and developers. This will be a step-by-step guide. |
| 0d. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0b. | Testnet | Setup and run a testnet |
| 1. | Substrate module: did | We will create a Substrate module that will generate and manage on-chain DID with detailed preference profile. A referral system will be integrated with DID |
| 2. | Substrate module: ads | We will create a Substrate module that will manage ads metadata, including traditional ads metadata and rewarding settings |
| 3. | Substrate module: prices | We will create a Substrate module that will act as the price oracle to provide real-world prices of different kinds of assets |
| 4. | Substrate chain | All above modules of our custom chain will interact to provide a useable Ad platform. There will be APIs to setup DIDs and ads and APIs that allow transfer assets via DID |
| 5. | Web UI: Advertiser App | We will create a web-ui for advertisers, hiding the raw APIs from advertisers, providing an easy access to the ad management system |
| 6. | Wallet App | We will create a web-based wallet that is embedded to WeChat MiniProgram, the tech stack will be vue.js |
| 7. | Social Integration SDK | We will integrate ads to some social platforms like WeChat, allowing ad viewers to be verified as DID owners and gain rewards. To enable the combination of Wallet App and social platforms, we will rely on the open platform functionality provided by social platforms. The functionality will include DID registry, DID read, Ad display, Ad track and Ad data upload. |

## Future Plans

We will continue to build a more decentralized Ad platform for the Polkadot ecosystem.

- Refine oracle implementation. Engage ad-specific validation into it, like an anti-spam check, visibility validation, and so on.
- Introduce offchain-worker to verify ads and rewards
- Introduce chain governance logic to setup a more decentralized platform
- Introduce NFT support for advertisers, allowing issuing coupons, vouchers, tickets, etc
- Introduce a Zero Knowledge Proof based data module, enhancing data privacy

## Additional Information :heavy_plus_sign:

Any additional information that you think is relevant to this application that hasn't already been included.

* What work has been done so far?

Github projects: https://github.com/parami-protocol

* Are there are any teams who have already contributed (financially) to the project?

ProChain Foundation.

* Have you applied for other grants so far?

Substrate Builder Program.
