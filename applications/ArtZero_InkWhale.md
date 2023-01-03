# W3F Grant Proposal

- **Project Name:** ArtZero & InkWhale
- **Team Name:** ArtZero
- **Payment Address:** 1scixS3ofLuBN8XEQQdSjMQaLtvvbcJiQAqpnaov8xopX78
- **[Level]:** 2

## Project Overview :page_facing_up:

The ArtZero is a decentralized NFT marketplace on the Aleph Zero blockchain. It is the first NFT marketplace on Aleph Zero, allows everyone to Create, Buy, Bid, Sell, or just Collect Aleph Zero-based NFTs. The platform comes with its native Praying Mantis Predators NFT Collection, which NFT owners can stake for share of platform profit and other perks. ArtZero also provides a launchpad to let anyone to launch their NFT Collection.

Ink Whale lets stakers earn fixed interest and other rewards for locking up your tokens or NFTs. Unlike traditional yield farming, where you need to deposit tokens into a liquidity pool to get token rewards, NFT farming uses NFTs instead. The main goal of NFT farming is to create liquidity and utility for NFTs.

The Smart Contracts of ArtZero and Ink Whale use Ink! Substrate are currently working on Aleph Zero but the Smart Contracts can be deployed on any parachains that support Ink!

### Overview

### Project Details

Our Project, ArtZero is in Smart Contract Audit by BrushFam, the team behinds OpenBrush Library. We will be ready to launch on Aleph Zero network once Ink! 4.0 is deployed on the chain. Demo Testnet Version of the project can be accessed at https://artzero.io

Ink Whale is still in development and the MVP is completed for public test at https://inkwhale.net

### Ecosystem Fit

SubWallet is our friend and partner, their office is literally 5 minutes from our office and we have collaborated on many things in the past. Our team helped SubWallet in the development of https://dotinsights.subwallet.app/ and also working with SubWallet to integrate Aleph Zero blockchain to their wallet.

Ink Smart Contract is very new, but our team has strong knowledge of development on Ink!. ArtZero is also one of the very first dapps developed on Ink Ecosystem.

In Nov 2022, we also received the bounty for find a serious bug in Substrate Ink! by Parity Security Team. The fix is at PR #11771.

We believe that with our strong interest in Ink!, we can provide a lot of benefits to the ecosystem such as development training and supporting.

## Team :busts_in_silhouette:

### Team members

Mr. Brian Nguyen (founder, engineer)
There are another 4 key members in the company including:
Mrs. Phuong Hoang - CMO
Mr. Frankie Kao - Art Director and team of 5 designers
Mr. Long Nguyen - Full-stack developer
Mr. Albert Tran - Smart Contract & Back-end Developer
Mr. Tuan Vu - DevOp
Mr. Thien Nguyen - Front-end Developer
Mr. Nam Hoang - Blockchain Developer
Mr. Tung Nguyen - Back-end and Blockchain Developer

Other part-time testers and designers.

### Contact

- **Contact Name:** Brian Nguyen
- **Contact Email:** admin@artzero.io
- **Website:** https://artzero.io

### Legal Structure

- **Registered Address:** Not Registered
- **Registered Legal Entity:** Not Registered

### Team's experience

Brian Nguyen graduated from University of Nottingham with a 1st class degree in Computer and Electronics Engineering. Over the last 15 years, He has developed many data-driven applications. He also has deep interest in blockchain technology and development of decentralized apps on Ethereum, Binance Smart Chain, Tron, Solana
network. He is the founder of ArtZero - the first NFT Marketplace & also 1st dApp on Aleph Zero network.

Frankie Kao owns a design company and have been working in many projects on web design, graphic designs etc. He dedicated his resources to work with ArtZero.

Phuong Hoang has been in sale and marketing industry for over a decade. She has been Sale and Marketing Manager/Director for many companies including: Honda Vietnam, Plex Cinama, Saga Media etc.

All of our developers have at least 5-10 years experience in software development.

### Team Code Repos

- https://github.com/artzero-io (some repos are in private mode)

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/nad128668/
- http://linkedin.com/in/phuong-phoebe-hoang-4b5888148
- https://www.linkedin.com/in/tran-albert-469b6319a

## Development Status :open_book:

We have completed the Testnet demo version of the ArtZero NFT Marketplace. The first version of the contracts are waiting to be audited then our platform will be ready to be launch on Aleph Zero Mainnet.

https://artzero.io
https://docs.artzero.io/

Ink Whale is still in development and the MVP is completed for public test at https://inkwhale.net

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  5 FTE
- **Total Costs:** 30,000 USD


### Milestone 1  — NFT Marketplace on Polkadot Parachains
* **Estimated Duration:** 8 weeks
* **Costs:** 15,000 USD

In this milestone, We will create Smart contracts to be compatible with Ink!4.0 Polkadot Parachains with full working NFT Marketplace UI/UX and backend.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.    | License            | Apache License 2.0                                           |
| 0b.    | Documentation      | We will provide technical documents and user guides |
| 0c.    | Testing Guide      | We will provide Test Plan and Test Results for operating and using the NFT Marketplace |
| 0d.    | Article/Tutorial   | We will write an article or tutorial that explains the NFT Marketplace |
| 1. | Smart contract Development | We use ink! to develop the contracts and the functions that contracts support are: list, unlist NFT, buy NFT at fixed price, bid for an NFT, accept an NFT bid, add NFT Collection, add a launchpad project. We need to develop the contracts using project structure as defined in https://github.com/Supercolony-net/openbrush-contracts/tree/main/example_project_structure to meet higher code standard for better code management. The functions are partly built with psp34 support and still need more work to be compatible with psp37 (erc1155) standard. |
| 2. | Backend | Build infrastructure to serve the need of NFT Marketplaces. We use nodejs and mongodb on AWS Services. The backend will have an api service that serves the front end and cron jobs to fetch data from blockchains to save into the local database. The API definition can be found at https://docs.google.com/document/d/1bPq9aFMaaVgKgsYWG3K4APubRK33OloY4_gHM3c8wo0/edit and it needs development to work on all Polkadot's parachains. The backend will have to handle the following tasks: Monitor NFT bids in the queue and update Bid table in the database; Cache Images from IPFS to CloudFlare Image; Cache NFT Metadata to local database; Monitor NFT Collection changes and update the database; Monitor NFT Information and update the database; Telegram bot to alert system operators: queue length and access attempt and work load. |
| 3. | Frontend | Create new front-end for the NFT Marketplace, we have 2 mockups at https://www.figma.com/file/76ER4HZUR1KMDaxctx5BS6/DragonSUI?node-id=146%3A68 and https://www.figma.com/file/xsVkm8VOdTqyPWPgTrbQpl/ArtZero?node-id=275%3A12 these are under converting from Figma to ReactJS code. |
| 4. | Testing | We will provide unit test for smart contracts. For Frontend and Backend testing we will provide Test Document with Plan and Test Cases for operating and using the NFT Marketplace |

### Milestone 2  — Ink Whale Staking and Yield Farming Platform Development
* **Estimated Duration:** 8 weeks
* **Costs:** 15,000 USD

In this milestone, We will continue to improve the current development of Ink Whale Platform to completion.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.    | License            | Apache License 2.0                                           |
| 0b.    | Documentation      | We will provide technical documents and user guides |
| 0c.    | Testing Guide      | We will provide Test Plan and Test Results for operating and using the staking and yield farming platform. |
| 0d.    | Article/Tutorial   | We will write an article or tutorial that explains the work principle as part of the grant. |
| 1. | Smart Contract Development | Enhance the current smart contracts in MVP. The contracts will be compatible with Ink!4.0 and have following functions: create PSP22 token, create a staking pool, create NFT yield farm, create token yield farm, add rewards to pool, remove rewards from pool, claim reward from pool. We have to create 9 different contracts; WAL token contract that allows public minting and fixed total supply; General psp22 token contract and psp22 token generator contract; Pool Contract and Pool Generator Contract; NFT Farming Contract and NFT Farming Generator Contract; LP Farming Contract and LP Farming Generator Contract. |
| 2. | Backend | Build infrastructure to serve the need of Ink Whale. We use nodejs and mongodb on AWS Services. The cronjob monitor update queue to make sure data in the database match with data on-chain; The API serves the frontend with following functions: getTokens, getPools, getLPPools, getNFTPools, getPoolsbyOwner and getPoolsbyAddress. update API also required to add update request to the database queue and serves the cronjobs. |
| 3. | Frontend | Revamp the front-end for final version, better UI/UX. The new design is currently in progress and can be found at https://www.figma.com/file/63xCCH71Oa8AfJpkK1wCO3/Ink-Whale?node-id=88%3A234. The current demo can be seen at https://testnet.inkwhale.net |
| 4. | Testing | We will provide unit test for smart contracts. For Frontend and Backend testing we will provide Test Document with Plan and Test Cases for operating and using Ink Whale platform |


## Future Plans


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** from Founder of SubWallet
