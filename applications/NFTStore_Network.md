# Open Grant Proposal

* **Project:** NFTStore
* **Proposer:** [NFTT Studio](https://github.com/NFTT-studio)
* **Payment Address:**  1AeR4htoGwDRMpw7S2TTrzjJxeGLZsopiE

## Project Overview :page_facing_up:

### Overview

#### Introduction

NFTStore is an exclusive public chain for managing NFT assets. Users can not only issue their own NFTs, but also trade NFT transactions. The project is developed based on substrate 2.0. In the first phase of the design, we will write the business code at the runtime level. The project actually needs to consider whether to introduce the contract layer. In the economic model, we will fully give the token holders the transaction income on the platform Store. NFT is one of the important ways for the application of blockchain technology to approach life off-chain. We hope that this public chain will provide more possibilities for real-world assets on the chain. In addition, there are members of the team who have rich e-commerce experience. I believe that NFTStore has become the amazon.com of the blockchain and the best trading platform for digital assets in the world.

### Project Details

#### Architecture

NFTStore based on Substrate 2.0 and the Polkadot. Contains NFTStore node, pallet_nft, pallet_store and Front End.

![img](https://raw.githubusercontent.com/NFTT-studio/graphics/main/NFTT-Components.png) 

* **NFTStore Node** is the customized chain node built by Substrate 2.0 .  

* **pallet_nft** is used to create and manage NFT assets.

* **pallet_store** is responsible for NFT sales.

* **Front End** provides Web UI for everyone to interact with the NFTStore. Front End will be built with React.

* **NFTStore Token $NFTT** is the native token of the NFTStore, and it will play the role of governance and other utilities. **$NFTT** is necessary to secure and power the chain.

#### Data Structure

![img](https://raw.githubusercontent.com/NFTT-studio/graphics/main/NFTTT-UML.png)

As shown above,  NFT design adopts ERC721 protocol。

#### <span id="interface">Main pallet storage and method</span>

| API-ID | **Pallet Name** | **Storage** | **Public Method** |
| ------ | --------------- | ----------- | ----------------- |
|1| <span id="nft" >pallet_nft </span>  | NFTMap get(fn get_nfts ): map hasher(blake2_128_concat) T::AcountId => NFT;  |`pub fn create_nft(name:Vec<u8>,description:Vec<u8>, imageUrl:Vec<u8>, type:u8, amount:u256 ` )             |
| |  pallet_nft  | ERC721: |   `- safeTransferFrom(from:AccountId,to:AccountID,tokenId:u256,data:Vec<u8>)` |
| | | | `- safeTransferFrom(from:AccountId,to:AccountID,tokenId:u256) `|
| | | |` - transferFrom(from:AccountId,to:AccountID,tokenId:u256) `|
| | | | `- approve(approved: AccountId, tokenId:u256) `|
| | | |` - setapproveForAll(approved: AccountId,  approved:bool)`|
| | | | `- getApprove( tokenId:u256) `|
| | | | `- isApproveForAll(owner: AccountId, operator:AccountId) `|
| | | |` - burn(from: AccountId, tokenId:u256)` |
|2| <span id="store"> pallet_store</span> | ` StoreMap get(fn get_onsale):map hasher(blake2_128_concat)  u8 =>Vec<NFT>;`  | `pub fn sell_setting(contractAddress:Vec<u8>, tokenId:u256,  price:u256 )`|
| | | |` pub fn buy(contractAddress:vec<u8>, tokenId:u256)`|

#### UI 

![img](https://raw.githubusercontent.com/NFTT-studio/graphics/main/nfttt-frontend-mock-up.png)

[https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT](https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT)

## Team :busts_in_silhouette:

### Team Members

* blackjooohn - CTO/Project Lead
* MingMing - Product Director & FE
* Dragon - Full-stack Developer

### Legal Structure

No Legal Entity

### Team Experience

**blackjooohn**   
   -  Over 15 years of experiences in Development and Management   
   -  Has plenty of experience in Software Development and Blockchain Development   
   -  Currently, focus on Cross-chain technologies 

**MingMing**   
   -  Former Product Manager in Baidu   
   -  Former Product Manager in Alibaba  

**Dragon**   
   -  Full-stack Developer   
   -  Over 20 years of experiences in Product Development and Management   
   -  Has plenty of experience in Software Architecture   

### Team Code Repos

* NFTT Studio: https://github.com/NFTT-studio

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 2
* **Total Costs:** 0.4 BTC


#### Milestone 1 — Verify Production of Concepts (POC) and Implement Substrate Modules

* **Estimated Duration:** 2 months
* **Full-time Equivalent (FTE)**: 2
* **Costs:** 0.4 BTC 

In the first milestone, the features for the POC will be implemented and tested by limited users. 

The following features will be included:

* NFTStore Node  
* Pallet_nft
* Pallet_store
* Front End   

| **Number** | **Deliverable**         | **Specification**                                            |
| ---------- | ----------------------- | ------------------------------------------------------------ |
| 0a.        | License                 | Apache License 2.0                                           |
| 0b.        | Documentation           | Documents containing the description of whole architecture design for NFTStore. |
| 0c.        | Testing Guide           | We will provide a full test suite and guide for  NFT .     |
| 1a.        | Node Repo               | Complete the deployment of the basic public chain  |
| 1b.        | NFTStore token          | $NFTT Complete the design of the economic model   | 
| 2a.        | Pallet_nft              | Complete the development of pallet_nft and realize the ERC721 standard. [Related nft interfaces](#nft) that need to be delivered |
| 2b.        | Pallet_store            | Complete the development of pallet_store . [Related store interfaces](#store) that need to be delivered |
| 3.         | Front End               | Complete the development of the basic interactive page, the specific page can refer to: [https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT](https://www.figma.com/file/o3N4WbUFlBPX8gXpAl4iBN/NFT) |
| 4.         | Docker Image            | The NFTStore Network docker image contains the POC version running anywhere to verify the idea of the NFTStore. |

## Future Plans

* In phase 1, our goal is to make it easy for users to create NFTs and trade their NFTs.
* In phase 2, integrate more NFTs from other platforms on NFTStore through Polkadot cross-chain technology. 
* In phase 3, more integration with off-chain, such as holding art exhibitions

