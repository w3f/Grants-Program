# Open Grant Proposal

* **Project:** RareLink Protocol
* **Proposer:** 0x522359
* **Payment Address:** 3Ah1QWfs9oEPdhRDYkWPSJYf5yKa7NLcSF

## 1. Project Overview :page_facing_up: 

### 1.1 Project Description

Most existing non-fungible tokens (NFTs) are "static" (e.g., do not interact with data and events outside of the blockchain network) and created by ERC721 standard in Ethereum to represent tokenized ownership of unique assets. Therefore, they are limited to the Ethereum network and isolated from the real world. On the contrary, "dynamic" NFTs receive data and events from the real world through Oracle services and response to them accordingly, which enables a large number of business use cases and becomes the next revolution in the blockchain domain.

RareLink Protocol is a new initiative to create "dynamic" NFTs in Polkadot network, which facilitates minting, transfer and exchange of dynamic NFTs. In particular, our team aims to create build a NFT pallet, integrate with Chainlink pallet and develop a Substrate Runtime to create dynamic NFTs in Polkadot network. As such, "dynamic" NFTs can leverage the interoperability of Polkadot to be transferred across different blockchain networks.
     
The team members behind RareLink Protocol are early adoptors and developers of blockchain technology in Polkadot. We are proficient in mechanism design and blockchain development. In particular, our team believe NFTs will revolutionzie many industries (e.g., retail, real estate, advertising, and more) in the near future. Moreover, "dynamic" NFT enables non-fungible tokens in blockchain network to interact with the external real world, which will make more business use cases possible and more efficient. Our team believe in this vision so we look forward to working on RareLink Protocol and making it happen. 

### 1.2 Ecosystem Fit 

To the best of our knowledge, there is no project working on creating "dynamic" NFTs in Polkadot. There are some existing projects that create "static" NFTs in Polkadot (e.g., Centrifuge, Usetech, etc.). However, they are *not* able to update the NFTs according to external data and events in the real world.

RareLink Protocol will make it friction-free to mint and transfer "dynamic" NFTs in Polkadot. It aims to close the gap and enable more business use cases for "dynamic" NFTs in Polkadot ecosystems. 


## 2. Team :busts_in_silhouette:

### 2.1 Team members

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
* Oracle module: https://github.com/RareLink/tokenbridge
* evm pallet: https://github.com/RareLink/frontier
* rarelink-docs: https://github.com/RareLink/rarelink-docs (https://docs.rarelink.network/)   

### 2.6 Team LinkedIn Profiles
* provide in private through Google Form.

## 3 Development Roadmap :nut_and_bolt: 

### 3.1 Overview
* **Total Estimated Duration:** 5 months
* **Full-time equivalent (FTE):**  1.5 FTE
* **Total Costs:** 0.64BTC (equivalent to $10000)

### 3.2 Milestone 1 — create a NFT pallet in Substrate
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:**  0.128BTC (equivalent to $2000)
* **Programming Language:** Rust
* **Task**:
   * implement public functions for users to create, transfer and manage NFTs, which can include but not limited to following:
   		* utility function: `balanceOf`, `ownerOf`
   		* transfer tokens: `safe_transfer_from`, `transfer_from`, `approve`, `set_approve_for_all`, `get_approved`, and `is_approved_for_all`.
  *  implement internal functions to facilitate NFT operations, which can include but not limited to following: 
  		* `_mint_token`, `_burn_token`, `_transfer_from`  
* **Test**
   * write unit tests for each function and verify its functionality:
   		* create positive tests for minting, burning and transfer of NFTs. 
		* create negative tests to prevent the bugs in these functions. For example, approve or transfer transactions should fail if users have no permission.

* **Documentation**:
   * document all functions in details that users or developers can invoke;
   * a demo and tutorial will be added to walk through the end-to-end process of creating, transferring and burning a NFT token.


### 3.3 Milestone 2 — create a Substrate runtime for dynamic NFTs 
* **Estimated Duration:** 2 month
* **FTE:**  1
* **Costs:** 0.257 BTC (equivalent to $4000)
* **Programming Language:** Rust
* **Task**:
   * create a Substrate runtime to enable dynamic NFTs in Polkadot
      * import NFT pallet, Smart Contract pallet and ChainLink pallet into the runtime;
      * connect runtime to ChainLink network or spin up some ChainLink nodes;
      * it can mint, transfer, update or burn dynamic NFT tokens upon receiving specific data or events from ChainLink network. 
* **Test**:
   * deploy the runtime module to Substrate testnet and test dynamic NFTs:
      * mint, transfer and burn dynamic NFT in Substrate according to specific off-chain data or events in the real world;
	  * creating trigger events, passing through ChainLink network and verifying the behavior of dynamic NFTs is expected.
* **Documentation**:
  * create the tutorial to walk through the process of creating “dynamic” NFTs and verifying their “dynamic” behavior;
  * a step-by-step demo will be added to show that merchants can issue dynamic NFTs as admission tickets with an expiration date.


### 3.4 Milestone 3 — build frontend for users and SDK for third-party integration 
* **Estimated Duration:** 2 month
* **FTE:**  1
* **Costs:** 0.257 BTC (equivalent to $4000)
* **Programming Language:** HTML and Javascript
* **Task**:
  * Web UI: users should be able to mint, transfer and burn their dynamic NFT through the website on Polkadot;
  * SDK: in order to facilitate the third-party integration, a Javascript SDK will be built so developers can easily invoke APIs to mint, transfer and burn dynamic NFTs in their own applications.
* **Test**:
  * run an end-to-end test on the Web to demonstrate the minting, transfer, updating and burning of dynamic NFTs 
  * build a test project to integrate SDK and verify its functionality.
* **Documentation**: 
  * add “get-started” tutorial to show the end-to-end process of minting and transferring dynamic NFT with Web UI.
  * create a document of all externally callable APIs.
  * create a sample project to demonstrate the way to integrate SDK and create dynamic NFTs. 

### 3.5 Community engagement

RareLink Protocol has great community support in China and Germany. Our community manager will host technical meetups in different cities to engage more community members. Moreover, we had partnerships with many media channels and they will report RareLink Protocol to their audience. 

## 4. Future Plans

Our team would like to make continuous contributions to Substrate and Polkadot ecosystem. Our future plans are following:

* enable the cross-parachain transfer of dynamic NFTs;
* provide monitoring service to visualize the status and allow users to inspect dynamic behavior of "dynamic" NFTs;
* onboard more developers to build applications on top of RareLink Protocol, which makes more use cases to be available.

## 5. Additional Information :heavy_plus_sign: 

* **What work has been done so far?**

We have completed an initial version of substrated runtime node using the [substrate node template](https://github.com/substrate-developer-hub/substrate-node-template).

* **Are there are any teams who have already contributed (financially) to the project?**
No

* **Have you applied for other grants so far?**
No

* **Are there any other projects similar to yours?**
To the best of our knowledge, there is no project about dynamic NFT that is similar to our project. Please let us know if there are any.
