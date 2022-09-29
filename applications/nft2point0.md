# Open Grant Proposal

* **Project:** nft2point0

* **Proposer:** [Aviraj Khare](https://github.com/avirajkhare00)

* **Payment Address:** bc1qtf7h53c4a0c0h0z8mrfp4krk979206wxhdt2a5

## Project Description :page_facing_up:

We are building an infrastructure for developers to create interactive Gen 2 NFTs to plug-n-play in their own NFT marketplace.

Our NFTs are interactive in nature, i.e you can interact with them using your mouse and keyboard.

Please read this blog to understand it much better. It has around 5k views: https://learn.block6.tech/nft-2-0-the-interactive-nfts-e4e4df621922

## Team :busts_in_silhouette:

* **Member:** Aviraj Khare

* **LinkedIn Profile:** https://www.linkedin.com/in/avirajkhare00

* **GitHub Repo:** https://github.com/nft2point0

* **Website:**	https://nft2point0.com/

* **Legal Structure:** Not yet incorporated

* **Team's Experience:** 

Aviraj Khare: Founder & CTO, nft2point0, Ex Gojek
Worked in web3 space from 2016 to 2019. Created a Decentralized exchange on top of the 0x protocol as a Whitelabel solution. From 2019-21 worked in the Gojek infrastructure team. Currently working as Founder & CTO in nft2point0.

## Grant level
Level 2: Up to $30,000, 3 approvals

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 14 weeks
* **Total Costs:** 30,000 USD

### Milestone 1

* **Estimated Duration:** 4 weeks 
* **Costs:** 15,000 USD


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in Jest to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Articles | We will publish a series of tutorials along with online workshops within our discord community so that we can educate our users the use of this platform. |
| 0. | NFT 2.0 - Extending the EIP-721 | We need to make a change in ERC721 Metadata JSON Schema, we are adding a field that contains an IPFS hash of JavaScript code that will serve as logic layer for NFTs |
| 1. | NFT 2.0 - Smart Contract development | We need to develop, test and audit a smart contracts in ink for our interactive NFTs. We need to create Storage layer that will store output of interactive NFT and extending ERC-721 smart contract code. We will use this smart contract as reference: https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/token/psp34/psp34.rs |

### Milestone 2

* **Estimated Duration:** 4 weeks 
* **Costs:** 5,000 USD


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in Jest to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Articles | We will publish a series of tutorials along with online workshops within our discord community so that we can educate our users the use of this platform. |
| 0. | SDK development | We need to develop a SDK so that anyone can integrate the Interactive NFTs in their frontends |
| 1. | UI development | UI for both traditional and Interactive NFTs so that anyone can fork the repository and they can easily build their Interactive NFT marketplace. Most of the work is already done: https://github.com/nft2point0/interactive-nft-marketplace |

### Milestone 3

* **Estimated Duration:** 8 weeks 
* **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in Jest to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Articles | We will publish a series of tutorials along with online workshops within our discord community so that we can educate our users the use of this platform. |
| ------------- | ------------- | ------------- |
| 0. | API and Infrastructure | We need to develop our backend and infrastructure so that we can keep a track of Interactive NFTs minted along with essential functionalities |

## Additional Information :heavy_plus_sign: 

* We're currently implementing it in substrate ecosystem.
