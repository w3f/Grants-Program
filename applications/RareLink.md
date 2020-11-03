# Open Grant Proposal

* **Project:** RareLink Protocol
* **Proposer:** 0x522359
* **Payment Address:** 3Ah1QWfs9oEPdhRDYkWPSJYf5yKa7NLcSF

* **Project:** RareLink Protocol

## 1. Project Overview :page_facing_up: 

### 1.1 Project Description

Existing non-fungible tokens (NFTs) are "static" (e.g., do not interact with data and events outside of the blockchain network) and created by ERC721 standard in Ethereum to represent tokenized ownership of unique assets. Therefore, they are limited to the Ethereum network and isolated from the real world. On the contrary, "dynamic" NFTs receive data and events from the real world through Oracle services and response to them accordingly, which enables a large number of business use cases and becomes the next revolution in the blockchain domain.

RareLink Protocol is a new initiative to create "dynamic" NFTs and build a new token bridge between Ethereum and Polkadot, which facilitates minting, transfer and exchange of dynamic NFTs in both ecosystems:

  * creates a minting platform to create dynamic NFTs in both Ethereum and Polkadot network:
     * develop smart contracts in Ethereum network and integrate with Chainlink to create dynamic NFTs in Ethereum;
     * build NFT pallet, integrate with Chainlink pallet or off-chain worker, and develop Substrate Runtime to create dynamic NFTs in Polkadot;
  * a new token bridge will be created to enables two-way transfer of dynamic NFTs between Ethereum and Polkadot:
     * existing token bridge projects cannot transfer *dynamic events* across the network to update those transferred dyanmic NFTs;
     * new token bridge will focus on the transfer of dynamic NFTs and aim to preseve their dynamic behavior across networks.  
     
The team members behind RareLink Protocol are early adoptors and developers of blockchain technology including both Ethereum and Polkadot. We are proficient in mechanism design and blockchain development. In particular, our team believe NFTs will revolutionzie many industries (e.g., retail, real estate, advertising, and more) in the near future. Moreover, "dynamic" NFT enables unique tokens in blockchain network to interact with the real world, which will make more business use cases possible and more efficient. Our team believe in this vision so we look forward to working on RareLink Protocol and making it happen. 

### 1.2 Ecosystem Fit 

There are some existing token bridge projects (e.g., POA token bridge, Parity token bridge, and ChainSafe/Centrifuge chainbridge) are implemented to transfer "static" tokens such as ERC20 or ERC721 tokens. However, they are *not* able to relay dynamic events for dynamic NFTs, therefore, dynamic NFTs will lose their dynamic behavior after cross-chain transfer and become "static" NFTs. Moreover, existing token bridges cannot provide high reliability, therefore, token transfer may fail due to various reasons and cause great loss to users. As such, existing token bridges are not suitable for dynamic NFTs and a new token bridge is required. 

RareLink Protocol will make it friction-free to mint and transfer dynamic NFTs while preserving their dynamic behavior across different networks. Also, it will apply many new techniques and ensure high reliabilty in transfer process to avoid asset loss to users. It aims to close the gap and enable more business use cases for dynamic NFTs in both ecosystems. 


## 2. Team :busts_in_silhouette:

### 2.1 Team members

* Han: full-time developer

Our team has a few part-time developers and their information can be provided in private. We can transfer one or more part-time developer into full-time if grant is received.

### 2.2 Team Website	
* http://rarelink.network/

### 2.3 Legal Structure 
* details will be shared privately via the Google Form.

### 2.4 Team's experience

Our team had great development experience in blockchain domain.

1. blockchain project delivered from whitepaper to network launch: Solidity, Javascript, REST API;
2. Token bridge developed between Ethereum, POA network and Binance chain. 
3. Integration with Chainlink and Uniswap to create a decentralized exchange.

### 2.5 Team Code Repos
* rarelink-runtime-node: https://github.com/RareLink/rarelink-runtime-node
* rarelink-docs: https://github.com/RareLink/rarelink-docs
* token bridge poc
    * Oracle module: https://github.com/RareLink/tokenbridge
    * Bridge contracts: https://github.com/RareLink/tokenbridge-contracts
    * evm pallet: https://github.com/RareLink/frontier

### 2.6 Team LinkedIn Profiles
* provide in private through Google Form.

## 3 Development Roadmap :nut_and_bolt: 

### 3.1 Overview
* **Total Estimated Duration:** 5 months
* **Full-time equivalent (FTE):**  1.5 FTE
* **Total Costs:** 0.72BTC (We accept up to 100% of payment in cryptocurrency that are equivalent to $10000 such as BTC, DOT)

### 3.2 Milestone 1 — Create dynamic NFT module in Ethereum and Polkadot
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:**  0.145 BTC (equivalent to 500 DOTs or $2000)

* **Task**:
   * *minting in Ethereum*: 
     * build smart contract to mint ERC721 tokens and integrate with Chainlink to enable dynamic behavior; 
     * users should be able to configure settings and create their own dynamic NFT in Ethereum. 
   * *minting in Substrate*: 
     * build the runtime module using existing NFT pallet and Chainlink pallet on top of Substrate; 
     * allows users to create dynamic NFT on Substrate.
* **Test**
   * deploy the solidity contract to Ethereum public testnet and write test to demonstrate the minting of dynamic NFT.
   * deploy the Runtime module to Substrate testnet and verify the minting of dynamic NFT.
* **Documentation**:
   * document in detail about minting dynamic NFT in both Ethereum and Substrate;
   * a demo will be added to show that merchant can issue dynamic NFTs as admission tickets with expiration date.


### 3.3 Milestone 2 — Implement two-way bridge for dynamic NFT between Ethereum and Polkadot
* **Estimated Duration:** 2 month
* **FTE:**  1
* **Costs:** 0.29 BTC (equivalent to 1000 DOTs or $4000)

* **Task**:
   * bridge contract in Ethereum and Substrate
      * this module allows the dynamic NFTs to be locked/burnt in bridge contract for token transfer;
      * it can mint new tokens upon receiving events from validators to complete the token transfer;
      * it can send/receive update events across the bridge for dynamic NFTs that had been transferred across network;
   * off-chain validator module:
      * the validators are responsible to relay the transfer event (including both token and update event transfer) across the blockchain networks.
* **Test**:
   * deploy token bridge to testnet and run system test:
      * mint, list and burn dynamic NFT in both networks;
      * test the bidirectional transfer of dynamic NFT across the blockchain networks;
      * verify dynamic behavior remains intact after the cross-chain transfer.
   * run load testing: 
      * transfer a large number of dynamic NFTs or update events in the same time to test the stability and capacity limit. 
      * Measure performance of bridge over the time.
* **Documentation**:
  * create the tutorial to walk through the process of transferring dynamic NFTs in both directions;
  * a step-by-step demo will be added to show the complete transfer process.


### 3.4 Milestone 3 — Build frontend for users and SDK for third-party integration 
* **Estimated Duration:** 2 month
* **FTE:**  1
* **Costs:** 0.29 BTC (equivalent to 1000 DOTs or $4000)

* **Task**:
  * Web UI: user should be able to mint, list and transfer their dynamic NFT through the website on specified network.
  * SDK: in order to facilitate the third-party integration, SDK will be built to allow developers to easily invoke APIs to mint, list and transfer dynamic NFTs in their own applications.
* **Test**:
  * run end-to-end test on Web to demonstrate the minting, listing and transfer of dynamic NFTs. 
  * build a test project to integrate SDK and verify its functionality.
* **Documentation**: 
  * add “get-started” tutorial to show end-to-end process of minting and transferring dynamic NFT with Web UI across network. 
  * create document of all externally callable APIs. 
  * create a sample project to demonstrate the way to integrate SDK.

### 3.5 Community engagement

RareLink Protocol has great community support in China and Germany. Our community manager will host technical meetups in different cities to engage more community members. Moreover, we had partnerships with many media channels and they will report RareLink Protocol to their audience. 

## 4. Future Plans

Our team would like to make continuous contributions to Substrate and Polkadot ecosystem. Our future plans are following:

* enable the cross-parachain transfer of dynamic NFTs;
* provide monitoring service to visualize the status and allow users to inspect end-to-end transfer process;
* onboard more developers to build applications on top of RareLink Protocol, which makes more use cases to be available.

## 5. Additional Information :heavy_plus_sign: 

* **What work has been done so far?**

We have completed the proof of concept of NFT transfer between Ethereum mainnet and Polkadot mainnet, by reusing the [POA TokenBridge](https://github.com/poanetwork/tokenbridge). 

Also an initial version of substrated runtime node has been set up with using the [substrate node template](https://github.com/substrate-developer-hub/substrate-node-template).

* **Are there are any teams who have already contributed (financially) to the project?**
No

* **Have you applied for other grants so far?**
No

* **Are there any other projects similar to yours?**
To the best of our knowledge, there is no project about dynamic NFT that is similar to our project. Please let us know if there are any.
