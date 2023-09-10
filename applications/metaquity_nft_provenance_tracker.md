# NFT PROVENANCE TRACKER SDK

- **Team Name:** [Metaquity limited](https://www.metaquity.xyz) (Part of Substrate Builders Program)
- **Payment Address:** Fiat payment (Bank account details will be emailed to grants@web3.foundation by abhishek@metaquity.xyz)
- **Level:** 2

## Project Overview :page_facing_up:

We propose to build an NFT Provenance Tracker SDK, an on-chain system capable of tracking and displaying the entire lifecycle of NFTs across multiple parachains in the Polkadot ecosystem. The tracker will collect data like NFT creation, past ownership history, price history, metadata, and locking/unlocking events. The data will be made accessible via SDK.

### Project Context

The rise of NFTs has brought a new level of complexity to asset tracking in the blockchain space. The unique and non-interchangeable nature of NFTs, combined with the ability to fractionalize and trade them across multiple parachains, presents a pressing need for a tool that can track their provenance in a trustless and transparent manner.

Our research indicates that, while there are some solutions for tracking NFT provenance, none currently offer cross-parachain functionality combined with an on-chain model for scalability. By developing this tool, we can significantly enhance transparency and trust in the Polkadot NFT space, benefiting individual NFT owners, DEXs, parachain operators, and potential asset buyers.

### Project Details

Architecture:

<img width="1244" alt="Screenshot 2023-08-25 at 13 06 25" src="https://github.com/Metaquity-Network/Grants-Program/assets/22363352/3f9c7231-c45c-4541-8374-197c5bc33d6b">

Overview:
  A standard asset-tracking SDK will be built with the following layers:
  - Blockchain layer: Access to the blockchain data source and crawl through the blocks from the genesis block, we will using using existing solution for crawling through the blockchain, Currently we are exploring subscan for this solution and these are self-hosted or we will connect to external RPC nodes for fetching the data.
  - Middleware layer: Contains the crawlers/plugins through which we can crawl the blockchain and collect information about NFTs and write into the database and index it using elastic search. These indexers can index data based on the common NFR events and platform specific events for better data availability. This module can be a self hosted or SaaS this module can read and index any newer blockchain that adopts `pallet-nft` for the NFTs.
  - API: This layer helps in fetching details of the blockchain from DB to the SDK, This is a transportation layer where it is fetching information from the DB based on the user commands. This module will also be self-hosted.
  - SDK: This package will have all the necessary functions to fetch details about the NFT asset. Users will be able to download this package and query for the information of the asset on blockchain by providing various SDK command. This module will be essentially integrated at the client side.

Technology stack: 
- MongoDB 
- Typescript 
- Elasticsearch
- JavaScript
- Subsquid

### Ecosystem Fit

There are quite a few projects in the Polkadot/Kusama ecosystem that are working with NFTs. And going forward with XCM v4 supporting cross-chain transfer of NFT's, we believe tracking and tracing of the entire lifecycle of an NFT will not only be a need but a must-have.

The NFT-Provenance-Tracker SDK built by Metaquity will be a great way for these projects to implement provenance for their projects and will save a lot of time and effort to build this from scratch.

Also in line with our project, we intend to extend this SDK to include use cases of tracking fractional ownership of the individual NFTs. This use case alone will open a lot of doors of bringing real-world assets into the Polkadot ecosystem.

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

- Metaquity Network is already part of the Substrate Builders Program.


### Team Code Repos

- https://github.com/metaquiry-network/nft-provenance-tracker

Team members GitHub:

- https://github.com/abhichat85
- https://github.com/ekaanth

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/abhishekchatterjee85/
- https://www.linkedin.com/in/abhishek-sira-chandrashekar-821244b7/

## Development Roadmap :nut_and_bolt:

This project will be a proof of concept (PoC) to demonstrate a particular use case and how NFT-SDK can be leveraged by other projects and parachains in the Polkadot ecosystem. Since this will be an SDK, anyone will be able to integrate this within their application. This acts as an enabler for this particular use case for provenance tracking of NFTs and fractional fungible tokens associated with those NFTs. This can extend to not only digital assets but also real-world assets (which is what is the primary focus of Metaquity Network).

### Overview

- **Total Estimated Duration:** 2,5 months
- **Full-Time Equivalent (FTE):**  2 FTE (full-time employees)
- **Total Costs:** 20,000 USD

### Milestone

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation |  We will provide both readme.md and official architectural documentation of the NFT scanner module |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0e.** | Article | Add an article covering how to integrate NFT-SDK in a project. |
| 1. | NFT Schema Development | Development of data models for the indexing of the NFT related extrinsic so that users can get compressive information of the NFT lifecycle  |
| 2. | Collection schema development | Development of NFT-collection schema models |
| 3. | NFT fractionalization schema development | Development of fractionalization schema models |
| 4. | NFT lifecycle schema development | Developing schema models for the NFT lifecycle, which includes the ownership, transfer, locking, or fractionalization of NFT |
| 5. | NFT pallet event indexer  | Development of the module to monitor the latest block generation via subsquid |
| 6. | Asset pallet event and fractionalization indexer  | Development of the module to monitor the pallet NFT actions and NFT fractionalization pallet actions |
| 7. | Integration of subsquid  | Using subsquid to get the latest block information  |
| 8. | Implementation of APIs  | Development of endpoints which can ge used for SDKs request to fetch more details about the NFT lifecycle  |
| 9. | Implementation of SDK  | Develop SDK to facilitate the users call to actions |
| 10. | NFT indexer module | Index all the data that is scanned by the scanner module and pass it to the database layer. |
| 11. | Design and development of the NFT provenance SDK | A typescript-based SDK which consists of API calls to the database to fetch the NFT lifecycle. |
| 12. | Technical Documentation for the SDK | We will provide a technical doc outlining the process of integrating the SDK to other projects. |

## Future Plans

- Support the NFTs of Statemint
- Support wasm based NFTs
- Adding capabilities for tracking and tracing fractional ownership of NFTs
- Adding capabilities for tracking locking/unlocking of NFTs

## Additional information 

 > When you talk about NFTs, do you mean the NFTs pallet, PSP34s, uniques pallet, or EVM-compatible ones?

We will not be focusing currently on the EVM-compatible ones but stick to more Polkadot ecosystem NFT's which are powered mostly by the Uniques Pallet and going forward the NFT's pallet will be used. So this will be a tool for aggregation for NFTs created through both pallets.

> Indexing NFT-related events seem to be a common indexer task. See, for example, https://github.com/emarai/squid-polkadot-psp34-nft-indexing. Why should we fund another, NFT-only indexer?

We have envisioned this project as a more generic use case for our larger project and other projects in the ecosystem. PSP34 and especially the ones mentioned in the link is focused on the Astar network but this SDK can be implemented by any parachain using NFTs in some form or the other. More importantly, this is not going to be just an NFT-only indexer module, we can extend this to re-fungible tokens built on top of these NFTs and to track provenance of the entire asset lifecycle, which includes extending this use case to track fractional ownership of assets in the future.

> Please expand the Ecosystem Fit section to explain who your target audience is and how this project compares to similar, existing ones.

Our target audience is basically the parachains and projects in the Polkadot ecosystem who are working with NFTs and possibly refungibility of NFT's to fungible tokens and make their lives simpler by providing an open source tool to track the entire lifecycle of their assets. Also upcoming parachains like Metaquity Network (ours) and others can use this to build these provenance use cases which will eventually give rise to more effective collaborations between the DeX's and the parachains.
