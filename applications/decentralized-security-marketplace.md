# Decentralized Security Marketplace


- **Team Name:** Magic Powered Inc,
- **Payment Address:** Magicpowered.eth (0x85f9c38a44EfB45CeF47cBf510e6e18cDdf2a78A), USDC, Ethereum
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

This application is a response to an [RFP: Decentralized Security Marketplace](https://github.com/0xCaso/Grants-Program/blob/604d506591ea57eef4fee04aa2cfdf2010e8772c/docs/RFPs/Open/decentralized-security-marketplace.md)

### Overview

#### Tagline: Decentralized Security Marketplace

This project aims to build a platform connecting a broad community of engineers and web3 projects that need audits. For web3 projects, community contests and bounties can provide more time&cost flexibility and better capabilities diversity than traditional security audits. For engineers, the platform offers the ability to learn with a vast community and gain experience in a wide range of web3 projects, guaranteeing payments for work done.

Actors:

- Projects - The projects that want to be reviewed/tested;
- Engineers - Community engineers: Developers, QA, Security experts. - People who apply for a bounty and do the audition work.
- Judges - Top performing auditors chosen from the community with recorded credentials on the platform. Judges validate reports posted by Auditors to ensure fairness and transparency of the contest.

The platform provides rewards lock and release (escrow) functionality to reward engineers submitting their audit reports.

As mentioned, the system has three actors: Projects, Engineers, and Judges.

Projects can submit their bounties by defining the following:

- Project description
- Scope boundaries of the audits (list of files and/or links that are inside and out of scope)
- Rewards pool size
- Rewards percentage or levels for each serenity category of issues found
- Description of the serenity levels of the problems that may be found
- List of known issues that are out of scope for the bounty
- Instructions on how to compile, build, and run tests, if applicable

Then, the project admin has to move rewards funds to the bounty pool smart contract. The bounty pool smart contract will have all the necessary information to make automatic payments for each issue found:

- Kinds of issues
- The size of payment for each issue is found in each category.

![Bounty creation flow](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/create-bounty.png?raw=true)

Engineers submit their issues reports as proposals for the rewards pool.

![Report submission](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/submit-report.png?raw=true)

Judges then review all report submissions and verify them. After validation, they vote for the proposal. When the consensus of judges accepts the proposal, it executes by sending rewards to the engineers.

![Successfull report](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/successfull-report.png?raw=true)

The judge can change the reward size in the proposal and the serenity of found issues at any time by consensus mechanism together with other judges.

![Change report submission](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/change-proposal.png?raw=true)

Any eligible community member can become a judge. Judges are rewarded from the same rewards pool with a percent of rewards to be distributed by the proposals they review.

The eligibility criteria for a community member to become a judge will be provided during the protocol design phase.

### Project Details

The central piece of the platform will be the smart contracts:

- **Rewards pool contract**: Lock and release rewards funds for developers that make audits.
- **Governance contract**: Control and verify audit reports submissions
- **Souldbound NFT**: Help identify if a community member is a Judge and can vote for audits reports.

![Smart contract composition](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/architecture/smart-contracts.png?raw=true)

We leverage a data aggregation and indexing pipeline built on top of the SubSquid and postgres database to ensure low latency and high availability.

The GraphQL API will provide all necessary data to the Frontend application of the Platform.

The Frontend application, as mentioned, should read the GraphQL API to get all information and let users communicate with the smart contract directly using their wallet.

![AppStructure](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/architecture/app-structure.png?raw=true)

Technical stack will be the following:

1. **Rust** for smart contracts
2. **Typescript** for backend and frontend code
3. **Nodejs** for lambdas and SubSquid processor
4. **React** for frontend application
5. **Terraform** for provisioning the infrastructure

Infrastructure stack:

1. AWS EKS
2. AWS Lambda
3. AWS RDS
4. AWS API Gateway

### Ecosystem Fit

- Engineers can contribute to the overall security of entire ecosystem.
- Projects receive diverse security reports for their code and technology.
- Security community growth.
- Open Platform helps new engineers learn fast by participating in the community and learning by the open reports. 

## Team :busts_in_silhouette:

### Team members

- Petrovskyi Anatolii - Technical Lead, Solution Architect, Backend developer
- Denis Krasovskyi - MagicPowered CTO, Frontend Architect
- Max Khaiuk - Frontend developer

*MagicPowered is a big and flexible developer community. At any point of time we can onboard any developer we see required for the project. Current team composition is minimal required we see right now, it might change later during implementation phase

### Contact

- **Contact Name:** Max Kudinov
- **Contact Email:** max@magicpowered.io
- **Website:** https://magicpowered.io

### Legal Structure

- **Registered Address:** 3520 Spruce Hill Rd, Ottsville, PA 18942
- **Registered Legal Entity:** Magic Powered Inc

### Team's experience

Our community has wide experience building successful web3 products in different ecosystems and areas. 
Here is some of them:

- [Astro DAO](https://astrodao.com) - Is a DAO factory Platform where anyone can create and run their own DAO in couple clicks.
- [The Auction](https://the-auction.io) - A decentralised NFT auction where anyone can put their NFT on sale or bid others NFTs. This project is a winner of several grants in Near ecosystem, including the main grant from Near Foundation
- [Membrane Bot](http://membranebot.com) - Multi chain token gating for discord. Bot can grant Discord roles based on tokens users has on their wallets.
- [Staking Platform](https://staking-platform.io) - The Staking Platform is a decentralized crowdfunding protocol that will make it possible for people to launch and fund projects using proof-of-stake blockchains. This project is a winner of several grants programs.
- [Near JS client library](https://github.com/magic-powered/near.js) - SDK for Near blockchain API 

See more projects done by our community here: https://magicpowered.io


## Development Status :open_book:

Currently, the project is under technical design phase 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 99,000 USD

### Milestone 1 — Design Phase

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 19,000 USD

|  Number | Deliverable               | Specification                                                                |
|--------:|---------------------------|------------------------------------------------------------------------------|
| **0a.** | License                   | MIT                                                                          |
| **0b.** | Documentation             | We will provide architecture design document, task list for development team |
| **0c.** | Testing and Testing Guide | We provide core User-Story based test scenario for the platform              |
| **0d.** | Docker                    | N/A                                                                          |
|  **1.** | API Mock                  | Swagger documentation for the API that frontend application will use         |
|  **2.** | Smart contract API Mock   | Interfaces for the smart contracts implemented                               |
|  **2.** | Frontend app figma design | Figma design for frontend app                                                |

### Milestone 2 — Frontend version 1.0

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 19,000 USD

|  Number | Deliverable               | Specification                                                                                  |
|--------:|---------------------------|------------------------------------------------------------------------------------------------|
| **0a.** | License                   | MIT                                                                                            |
| **0b.** | Documentation             | User Story documentation, User guides, FAQ and documentation                                   |
| **0c.** | Testing and Testing Guide | Test report                                                                                    |
| **0d.** | Docker                    | N/A the frontend application will be implemented as a set of static files hosted on cloudfront |
|  **1.** | Code repo                 | React app code repo                                                                            |
|  **2.** | Functional React App      | Fully working application that works against mocked API and mocked smart contracts on testnets |

### Milestone 3 — Smart Contracts version 1.0

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 30,500 USD

|  Number | Deliverable               | Specification                                                                                                                                                           |
|--------:|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | MIT                                                                                                                                                                     |
| **0b.** | Documentation             | Both inline and markdown documentation pages describing the contract functions and other necessary info: How to run, contract composition diagrams, how to call, etc... |
| **0c.** | Testing and Testing Guide | Unit tests and functional tests for the contracts                                                                                                                       |
| **0d.** | Code repo                 | Repo with the code of smart contracts                                                                                                                                   |
|  **1.** | Deployment                | Smart contracts deployed to mainnet environment                                                                                                                         |

### Milestone 4 — Backend infrastructure and data processing version 1.0

- **Estimated Duration:** 2 month
- **FTE:**  1
- **Costs:** 30,500 USD

|  Number | Deliverable               | Specification                                                                                                                      |
|--------:|---------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | MIT                                                                                                                                |
| **0b.** | Documentation             | Both inline and markdown documentation pages describing a lambda functions and blockchain data processor with steps to deploy both |
| **0c.** | Testing and Testing Guide | Unit tests and functional tests, API tests                                                                                         |
| **0d.** | Docker                    | We will provide docker images and docker files for subsquid processor service                                                      |
|  **1.** | Lambda code repo          | Repo with the code of lambda APIs                                                                                                  |
|  **2.** | Processor code repo       | Repo with the code of subsquid processor                                                                                           |
|  **3.** | Infrastructure code repo  | Repo with necessary terraform code to spin up the underlying infrastructure: AWS Account, RDS, API Gateway, etc..                  |
|  **3.** | Deployment                | Deployment for both API and processir services. Integrate frontend with real data from the API                                     |

## Future Plans

In the future we want to build security specialists community around the platform:
- Community events
- Podcasts with security engineers
- Work with web3 projects to onboard them to the platform

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** - personal recommendation
