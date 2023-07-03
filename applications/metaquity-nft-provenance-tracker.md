# NFT PROVENANCE TRACKER SDK

- **Team Name:** [Metaquity limited](https://www.metaquity.xyz) (Part of Substrate Builders Program)
- **Payment Address:** 0x26d5BD3B8AC9c38DfA5E2A29EEAC2573f7b0d10b
- **Level:** 2

## Project Overview :page_facing_up:

We propose to build an NFT Provenance Tracker SDK, a on-chain system capable of tracking and displaying the entire lifecycle of NFTs across multiple parachains in the Polkadot ecosystem. The tracker will collect data like NFT creation, past ownership history, price history, metadata, and locking/unlocking events. The data will be made accessible via SDK.

### Project Context

The rise of NFTs has brought a new level of complexity to asset tracking in the blockchain space. The unique and non-interchangeable nature of NFTs, combined with the ability to fractionalize and trade them across multiple parachains, presents a pressing need for a tool that can track their provenance in a trustless and transparent manner.

Our research indicates that, while there are some solutions for tracking NFT provenance, none currently offer cross-parachain functionality combined with a on-chain model for scalability. By developing this tool, we can significantly enhance transparency and trust in the Polkadot NFT space, benefiting individual NFT owners, DEXs, parachain operators, and potential asset buyers.

### Project Details

Architecture:
    ![](https://i.ibb.co/TkWNWWK/Screenshot-2023-07-03-at-14-13-35.png)
    
  A standard asset tracking SDK will be built with the following layers:
  - Blockchain layer: Access to the blockchain data source and crawl through the blocks from genesis block
  - Middleware layer: Contains the crawlers through which we can crawl the blockchain and collect information about NFTs and write into the database and index it using elastic search.
  - SDK: This package will have all the necessary functions to fetch details about the NFT asset.

Technology stack: 
- MongoDB 
- Typescript 
- Elasticsearch
- JavaScript
- [Rust-web3](https://github.com/tomusdrw/rust-web3)
- Nginx, AWS

### Ecosystem Fit

There are quite a few projects in the Polkadot/Kusama ecosystem which are working with NFTs. And going forward with XCM v4 supporting cross chain transfer of NFT's, we believe tracking and tracing of the entire lifecycle of an NFT will not only be a need but a must have.

The NFT-Provenance-Tracker SDK built by Metaquity will be a great way for these projects to implement provenance for their projects and will save a lot of time and effort to build this from scratch.

Also in line with our project, we intend to extend this SDK to include use cases of tracking fractional ownership of the individual NFTs. This use case alone will open a lot of doors of bringing real world assets into the Polkadot ecosystem.

Later on we can extend EVM compatibility to this project to make it more versatile.

## Team :busts_in_silhouette:

### Team members

- Abhishek Chatterjee
- Abhishek Sira Chandrashekhar
- Arko Ganguli

### Contact

- **Contact Name:** Abhishek Chatterjee
- **Contact Email:** abhishek@metaquity.xyz
- **Website:** [Metaquity](www.metaquity.xyz/)

### Legal Structure

- **Registered Address:** 128 CITY ROAD, UNITED KINGDOM, LONDON, EC1V 2NX
- **Registered Legal Entity:** Metaquity Limited.

### Team's experience

- **Abhishek Chatterjee**: Co-founder of Metaquity, 15+ years of product and technical experience. 4+ years of blockchain experience. 
- **Abhishek Sira Chandrasekhar**: Software developer with 4+ years of experience in development 2+ years in Blockchain working on DID, SSI, VC and ZKP. Prior to Metaquity used to work at Litentry as a mobile developer.

- Metaquity Network is already part of the Substrate Builders Program and working on completing Milestone Level 1. 


### Team Code Repos

- https://github.com/metaquiry-network/nft-provenance-tracker

Team members GitHub:

- https://github.com/abhichat85
- https://github.com/ekaanth

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/abhishekchatterjee85/
- https://www.linkedin.com/in/abhishek-sira-chandrashekar-821244b7/

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2,5 months
- **Full-Time Equivalent (FTE):**  2 FTE ( full time employees)
- **Total Costs:** 20,000 USD

### Milestone 1 

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that run the code, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d**. | Docker | |
| **0e**. | Article | |
| 1. | Data model definition | Designing and defining the architectural overview of the data model for this application  |
| 2. | NFT scanner module | This module will scan the blockchain for any NFT related data from the genesis block and invoke indexer module |

### Milestone 2 

- **Estimated Duration:** 1,5 month
- **FTE:**  1,5
- **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that run the code, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | |
| 0e. | Article | |
| 1. | NFT indexer module | Index all the data that is scanned by the scanner module and pass it to the database layer. |
| 2. | Design and development of the NFT provenance SDK | A typescript based SDK which consists of API calls to the database to fetch the NFT lifecycle. |
| 3. | Technical Documentation for the SDK | We will provide a technical doc outlining the process of integrating the SDK to other projects. |

## Future Plans

- Support the NFTs of Statemint
- Support wasm based NFTs
- Adding capabilities for tracking and tracing fractional ownership of NFTs
- Adding capabilities for tracking locking/unlocking of NFTs
