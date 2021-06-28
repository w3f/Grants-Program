# W3F Open Grant Proposal: Polkadot eNFT

* **Project Name:** Polkadot eNFT Standard
* **Team Name:** Splyt Core
* **Payment Address:** BTC: bc1q6u43pc0mzkvenjy4gsnq4kg4lvj0cnxd2pw2px


## Project Overview :page_facing_up: 

### Background

Mirroring the TCP/IP, Splyt Core proposes the TCP/eNFT: The Transmission Control Protocol for E-Commerce Non-Fungible Tokens. This protocol outlines the guidelines and procedures that will be used to reinvent global e-commerce. A “Splyt” economy; decentralized, scalable, and flexible. All while providing a fair and balanced ecosystem that empowers both small and large brands.

The eNFT is a standard that’s been created for e-commerce transactions within the Polkadot ecosystem. The eNFT will be the Polkadot standard for e-commerce users, just as the erc-721 standard for Ethereum. We're building our protocol and eNFT so that all others may be adopted into our own, creating a universalized e-commerce web3 data-layer standard

Splyt is going to use eNFTs. How bitcoin solves the “double spend” problem, Splyt solves the “double-sale” problem with a live-updating inventory and a unique eNFT attached to each product. Splyt’s blockchain eNFT inventory database enables effortless & transparent sales, streamlines multi-platform affiliate sales, and eliminates liability between e-commerce platforms and supply chain. 

Splyt Core functionality automates the e-commerce experience, removing guesswork, the middleman, and inefficiencies. Double sale, inventory management, affiliate contracts, negotiations, product authenticity/knockoffs, product markups/scalping, User reputation, and Seller integrity are all managed by the structure of the system. This removes the need for trust and prevents unhealthy imbalances that often occur in centralized economies. 

### Objectives

We ultimately seek to become a standard that can bring a common e-Commerce capabilities the various NFT projects present in the Polkadot ecosystem. Through this, we expect Polkadot eNFT project to oil the wheels of NFT transactions between Polkadot NFT projects and real-world e-commerce platforms, and accelerate the real-world adoption of Polkadot.

The main objectives of Polkadot eNFT project and the purpose of this grant proposal are:
1. to provide a design, reference architecture and implementation of Polkadot ecosystem's NFT pallet for e-commerce. 
2. to expand the Polkadot ecosystem through integration with real-world e-commerce platforms, stores and affiliate networks including Shopify, WooCommerce and Maison Du. 
3. to pioneer the blockchain/e-commerce continuum in order to complement the defect of the legacy e-commerce.


### Related NFT Projects and Our Contribution


**Featured Polkadot NFT Projects:**
* Enjin: Next-generation NFT blockchain made for games, apps, enterprises, and creators. Also known as the creators of the ERC-1155 non-fungible token (NFT) standard.
* Kusama NFT: Focuses on deploying NFT usability natively, with an initial focus on an art use case that can be used to define extensible, general-purpose standards.
* Polkamon: Source of all these unique animated and unique blockchain-based collectibles.
* SubstraPunks: Substrate based remake of CryptoPunks game, a classic game that inspired ERC-721 Ethereum standard.
* Polkafoundry: NFT Auction Marketplaces + Open Lending Platform + Crosscahin Dex + Decentralized Insurance + Prediction Markets + Defi Derrivatives.
* Guapfei NFT Market: NFTs + NFT trades for NFT market.


**Our Contribution:**

Splyt stands unique in the market, although there are similar attempts. Without Splyt’s highly versatile and airtight system revolving around eNFT inventory and solid game theory, their platform does little to address the serious issues, and simply provides a different place to shop.

Compared to other Polkadot NFT projects, Splyt not only defines NFT assets and transfers, but also covers e-commerce specific features such as arbitration, global reputation, dispute resolution, validation, etc. Through cooperation and communication with other Polkadot NFT projects, we expect that our unique eNFT functions can have interoperability with other NFT pallets.


### Project Details 
The backbone of Splyt Core is the eNFT. The functionality that branches out of this technology will set the standard for how e-commerce should operate and will revolutionize how NFT’s are used and perceived by the community. 

To facilitate transactions and bolster market integrity, Splyt Core provides a set of protocols that simplify user interactions and disincentivize fraudulent behavior. This includes a Listing Deposit, Affiliate Protocol, Dispute Resolution, Validators, Arbitrators, and Global Reputations. 


* When a seller uploads an item, a unique eNFT is minted and assigned to that item for the duration of its lifetime in the ecosystem. When an eNFT is purchased from any market, the blockchain is updated and the item is removed from available digital inventory. Each eNFT requires an initial deposit as collateral, creating a TCR (token curated registry) mechanism to govern the inventory supply on Splyt to prevent fraud and scams. If the seller fulfills the order, they get their deposit back. If they are deemed a bad actor, they lose the deposit. 
* As a product is bought and sold and moves through the Splyt ecosystem, the eNFT remains attached. There are several different opportunities to capitalize on here. Buying and selling can be tracked, tracing consumer behavior. This free information can help brands react quickly to market trends. 
* As Splyt becomes more widely adopted, buyers and sellers alike will develop large eNFT “wallets” that represent their purchase history. These accumulated eNFT’s can be bought, sold, and eventually even traded with a single click. If a user wants to resell an eNFT, they need only to press a button, and it will automatically restock on any market that had previously listed it. The restocked eNFT will carry its purchase history with it.


**Listing Deposit:** Upon listing an item for purchase, sellers must deposit tokens to be returned after successful purchase. These listing fees increase or decrease based on the seller’s reputation. The following formula will calculate the listing depsoit required: f(x) = ((10,000,000) / (100 * x + 2,000,000))<br>
<br>
The listing depsoit is what makes the eNFT unique. It is a collateral based NFT system that will financially incentivize the seller to fulfill the order so that the seller will get their depsoit back. This will make p2p e-commerce a safe place to transact. 

**Affiliate Protocol:** After listing an item, the seller will be able to add a bounty to the eNFT. Any affiliate marketer who wants to advertise that item can sell it and receive the bounty upon purchase.

**Dispute Resolution:** Using the Double Stake method, sellers will be financially disincentivized to post fraudulent listings or act in bad faith.

1. Seller makes the required deposit on their listing. Let’s say 5 tokens.
2. Buyer opens a dispute after purchasing.
3. Seller has 48 hours to either concede their 5 tokens to the Buyer or Double Stake their deposit. They stake 5 more tokens for a total of 10.
4. Buyer has 24 hours to either back down or match the total stake, 10 tokens
5. At any point in the process, the parties can come to a personal agreement without losing tokens.
6. Arbitrator steps in and evaluates the claim. Both parties present their evidence within 48 hours, and the Arbitrator reviews within 72 hours.
7. The winner of arbitration gets their tokens back and half of the loser’s tokens. The arbitrator gets the other half (in this case, the winner gets 15 and the arbitrator gets 5)

**Validators:** These agents stake tokens into a fund to disincentivize bad faith behavior. If a listing receives a large number of spam/fraud reports in relation to views, the listing will be sent to a Validator to dispute with the Double Stake method. The only difference is that the Validator must stake tokens equal to the listing deposit to begin the dispute.

**Arbitrators:** These agents stake tokens into a fund to disincentivize bad faith behavior. The larger the stake, the larger the price of the listing they will be allowed to arbitrate. Their job is to settle disputes in a fair, timely manner. 

**Global Reputations:** Each user and each eNFT has a global reputation that sticks with them and determines how the system and how other users treat them. eNFT’s with bad ratings might not be purchased. User’s with bad reputations might not be bought from. Validators and Arbitrators with bad reputations are selected less frequently until ultimately being removed from service and losing their initial stakes. 


### Other Project Details: 

*  Mockups/designs of any UI components
    * [Splyt beta demo](https://www.youtube.com/watch?v=gOur7pm6yl0)
*  API specifications of the core functionality
   * API for blockchain communication, CRUD backend server for updating blockchain.
   * API for plugin access, baked into shopify plugin already or as needed by any external website plugins.
   * Contracts will follow hierarchy format that starts with factory/manager contract and trickles down to child/NFTs.
*  An overview of the technology stack to be used
    * NodeJS, expressJS, MongoDB, React, PHP (coming in future)
*  Documentation of core components, protocols, architecture etc. to be deployed
    * Core: [Github: Splyt_Protocol](https://github.com/splytcore/Splyt_Protocol) contracts
    * Supporting backend services: Splyt backend for integration with blockchain and front-end dapp
    * Supporting plugins: Splyt shopify plugin in beta (link not available due to non-prod/beta)
*  PoC/MVP or other relevant prior work or research on the topic
	* Splyt alpha version: PoC of Splyt alpha with web UI



##  Team :busts_in_silhouette:


###  Team members


*  Name of team leaders
	* **Cyrus Taghehchain**, Co-Founder / CEO: Tech entrepreneur, Deloitte Consulting alum, e-commerce thought-leader with 15+ years of tech and business experience. Rated #7 in Entrepreneur Magazine’s Top Entrepreneurs under 40s in 2018. Two portfolio companies at Science VC, UCI MBA. First bitcoin 2014, Ether 2016, **Devcon x2** and **ETH Magicians x2**

	* **Josh Dipen**, Co-Founder / CTO: Architected and built NetID, Custody of Digital Assets, and DAO for Blockchains LLC, has over 10 years of experience in blockchain and commerce development. CSUN Computer Science. First Ether and BTC in 2016 **Devcon x1** and **ETH Magicians x1**

	* **Leo Jeong**, Lead Blockchain Engineer: PhD in CSE, Ex-Samsung Research, Ex-Research Collaborator at Princeton University, One of Korea's top blockchain developers with expertise in distributed systems and network management. Currently, technical program committee of IEEE International Conference on Blockchain and Cryptocurrency. 



###  Contact

*  **Contact Name:** [Cyrus Taghehchian](mailto:cyrus@spl.yt)(CEO) or [Leo Jeong](mailto:leo@spl.yt)(Blockchain Lead)

-   **Contact Email:** [cyrus@spl.yt](mailto:Cyrus@spl.yt) & [leo@spl.yt](mailto:leo@spl.yt)

-   **Website:** https://www.splytcore.org

###  Legal Structure

*  **Registered Address:** House of Francis, Room 303, Ile Du Port, Mahe, Seychelles

*  **Registered Legal Entity:** Splyt Genesis



###  Team's experience

Our founders (Cyrus & Josh) have built and executed multiple blockchain startups/projects together over the past 7 years. Not only having significant experience in blockchain space, but also having extensive business and system development experience in the legacy commerce markets, which is necessary for blockchain entrepreneurs to bridge the gap between the blockchain technology and the legacy markets. 

Josh Dipen has been working in blockchain space in corporate since ethereum was in the presale stage. Previously known as digital money corp, berns inc, and most recently Blockchains llc. He has created the first sidechain project for high scalability based on a trusted user base for mining. First to create a KYC platform that involves users owning their own data, stored encrypted on the blockchain, with the help of biometrics. Users submit their PII info to trusted authorities, who then verify the accuracy, insert into blockchain. User then applies for a loan with the same PII info, the loan agency can then verify the authenticity of the info through KYC platform. 

Leo entered the blockchain space in 2016 when he was a visiting research collaborator at Princeton University, working on edge/fog computing with a blockchain-based incentive system. As a tech entrepreneur he co-founded two startups and led design and implementation of an aggregate crypto exchange and tokenization of assets. In Academia, as a blockchain researcher, he has joined a series of blockchain research projects funded by the Korean government and published research papers and patents. He was a special event chair in IEEE Blockchain Summit Korea and has served as a technical program committee in IEEE International Conference on Blockchain and Cryptocurrency since 2018.

###  Team Code Repos

Polkadot Repos
* [Github: Splyt_Polkadot](https://github.com/splytcore/Splyt_Polkadot)

Ethereum Repos for Reference Only
* [Github: Splyt_Protocol](https://github.com/splytcore/Splyt_Protocol)


###  Team LinkedIn Profiles

* [LinkedIn: Cyrus Taghehchian](https://www.linkedin.com/in/taghehchian/)
* [LinkedIn: Josh Dipen](https://www.linkedin.com/in/dipen-joshi-36a52a76/)
* [LinkedIn: Leo J](https://www.linkedin.com/in/dreamerty/)

##  Development Roadmap :nut_and_bolt:

The development roadmap of this project covers a survey on existing NFT projects, design of eNFT, implementation of key eNFT pallets, testing and real-world use cases. Each milestone describes estimated duration, FTE, costs and its deliverables. The key types and functionality of eNFT standard and its implementation-specific deliverables (D4, D5, D8, D9, D11, D12, D13 and D14) are described in detail in the Specification Details section. 

The summary of the milestones includes:  
* Milestone 1 - eNFT Design: survey of the existing NFT projects and eNFT reference architecture proposal
* Milestone 2 - eNFT Assets: design and implementation of asset-related types and functionalities
* Milestone 3 - eNFT Order: design and implementation of order-related types and functionalities
* Milestone 4 - eNFT Arbitration and Reputation: design and implementation of eNFT governance
* Milestone 5 - Polkadot eNFT: eNFT soft launch with basic use cases
* Milestone 6 - Polkadot eNFT Expansion: eNFT hard launch with advanced use cases

###  Overview  

* **Total Estimated Duration:** 12 months
* **Full-time equivalent (FTE):**  6 FTE
* **Total Costs:** $3,000 USD

###  Milestone 1 — eNFT Design 

*  **Estimated Duration:** - 1 week

*  **FTE:** 4

*  **Costs:** Self-funded

| Number | Deliverable | Specification |
| - | - | - |
| D0-a | License | Apache 2.0 |
| D0-b | Documentation | Repository with a Readme.md file describing eNFT project |
| D0-d | Repository | https://github.com/splytcore/Splyt_Polkadot/deliverables/README.md |
| D1 | Polkadot NFT Projects Survey | survey of the current NFT projects and comparisons of their system design and architecture |
| D2 | eNFT Ref Architecture | proposed eNFT reference architecture |
| D3 | Dev environment | rust dev environment and local rococo testnet for substrate and parachain development |


###  Milestone 2 — eNFT Asset

*  **Estimated Duration:** - 4 weeks

*  **FTE:** 4

*  **Costs:** 1,000 USD

| Number | Deliverable | Specification |
| - | - | - |
| D0-a | License | Apache 2.0 |
| D0-b | Documentation | Repository with a Readme.md file describing how to build, run, test and deploy this project |
| D0-c | Testing Guide | Deliverables will be tested before deployinng. Tests will available under https://github.com/splytcore/Splyt_Polkadot/tree/master/test |
| D0-d | Repository | https://github.com/splytcore/Splyt_Polkadot/deliverables/README.md |
| D4 | eNFT Asset | eNFT Asset types and functionalies including unit tests |
| D5 | eNFT Asset Manager | eNFT Asset Manager types and functionalities including unit tests |
| D6 | Script for Testing | Script to run test for eNFT Asset and eNFT Asset Manager on a polkadot testnet |
| D7-a | Documentation | Design and Architecture of Polkadot eNFT |


###  Milestone 3 — eNFT Order

*  **Estimated Duration:** - 4 weeks

*  **FTE:** 4

*  **Costs:** 1,000 USD

| Number | Deliverable | Specification |
| - | - | - |
| D0-a | License | Apache 2.0 |
| D0-b | Documentation | Repository with a Readme.md file describing how to build, run, test and deploy this project |
| D0-c | Testing Guide | Deliverables will be tested before deployinng. Tests will available under https://github.com/splytcore/Splyt_Polkadot/tree/master/test |
| D0-d | Repository | https://github.com/splytcore/Splyt_Polkadot/deliverables/README.md |
| D8 | eNFT Order | eNFT Order types and functionalies including unit tests |
| D9 | eNFT Order Manager | eNFT Order Manager types and functionalities including unit tests |
| D10 | Script for Testing | Script to run test for eNFT Order and eNFT Order Manager on a polkadot testnet |
| D7-b | Documentation | Design and Implementation of eNFT Asset and Order for Polkadot Ecosystem |


###  Milestone 4 — eNFT Arbitration and Reputation

*  **Estimated Duration:** - 4 weeks

*  **FTE:** 4

*  **Costs:** 1,000 USD

| Number | Deliverable | Specification |
| - | - | - |
| D0-a | License | Apache 2.0 |
| D0-b | Documentation | Repository with a Readme.md file describing how to build, run, test and deploy this project |
| D0-c | Testing Guide | Deliverables will be tested before deployinng. Tests will available under https://github.com/splytcore/Splyt_Polkadot/tree/master/test |
| D0-d | Repository | https://github.com/splytcore/Splyt_Polkadot/deliverables/README.md |
| D11 | eNFT Arbitration | eNFT Order types and functionalies including unit tests |
| D12 | eNFT Arbitration Manager | eNFT Order Manager types and functionalities including unit tests |
| D13 | eNFT Reputation | eNFT Order types and functionalies including unit tests |
| D14 | eNFT Reputation Manager | eNFT Order Manager types and functionalities including unit tests |
| D15 | Script for Testing | Script to run test for eNFT Arbitration, Reputation and their Managers on a polkadot testnet |
| D7-c | Documentation | A complete documentation of Polkadot eNFT including eNFT Asset, Order, Arbitration and Reputation |



###  Milestone 5 — Polkadot eNFT

*  **Estimated Duration:** - 12 weeks

*  **FTE:** 6

*  **Costs:** Self-funded

| Number | Deliverable | Specification |
| - | - | - |
| D0-a | License | Apache 2.0 |
| D0-b | Documentation | Repository with a Readme.md file describing how to build, run, test and deploy this project |
| D0-c | Testing Guide | Deliverables will be tested before deployinng. Tests will available under https://github.com/splytcore/Splyt_Polkadot/tree/master/test |
| D0-d | Repository | https://github.com/splytcore/Splyt_Polkadot/deliverables/README.md |
| D16 | Soft Launch Mainnet | Launch splyt onto mainnet along with eNFT pallets. |
| D17 | Polkadot eNFT - Shopify App Integration | Launch Shopify plugin powered by Polkadot eNFT. Such that the whole shopify ecosystem is able to view, download and start using Polkadot eNFT |
| D18 | eNFT Inventory System | Launch a Splyt SDK to support eNFT inventory system |
| D19 | eNFT Stylist Checkout Cart | Upgrade shopify plugin to account for splyt related token buy (browser wallet capability) |
| D7-d | Documentation | A complete documentation and how to guide for Polkadot eNFT and Shopify plugin |




###  Milestone 6 — Polkadot eNFT Expansion

*  **Estimated Duration:** - 24 weeks+

*  **FTE:** 6

*  **Costs:** Self-funded

| Number | Deliverable | Specification |
| - | - | - |
| D0-a | License | Apache 2.0 |
| D0-b | Documentation | Repository with a Readme.md file describing how to build, run, test and deploy this project |
| D0-c | Testing Guide | Deliverables will be tested before deployinng. Tests will available under https://github.com/splytcore/Splyt_Polkadot/tree/master/test
| D20 | Hard Launch | Figure out what works, what doesn’t and bug fixes |
| D21 | WooCommerce Integration | The 2nd biggest small business integration website will receive a beta version of splyt plugin |
| D22 | Maison Du Integration | Polkadot eNFT integration with a Luxury market place and affiliate network |
| D23 | eNFT Inventory Management Portal | Separate management portal on splyt website, for shop owners to manage, modify and see sales data |
| D24 | eNFT Wallets & Marketplace | Secondary marketplace to trade splyt NFTs, collect, resale etc. |
| D25 | DeFi Soft Launch | Integrate with DeFi protocol for easier problem resolution and other services.  |
| D7-e | Documentation | Polkadot eNFT ecosystem with various real-world e-commerce, affiliate network and inventory management systems  |



### Specification Details
#### D4: eNFT Asset types including unit tests
This deliverable includes the following types:
* Asset types
    * type SellerAddress;
    * type ListOfMarketPlacesAddress;
    * type AssetID;    
    * type Term;    
    * type AmountFunded;
    * type TotalCost;
    * type ExpirationDate;
    * type KickBackAmount;
    * type Title;
    * type InitialStakeAmount;
    * type Contributions;
    * type Arbitration;
    * type InventoryCount;
    
This deliverable includes the following methods:
* Asset
    * ▸ fn set_status(Statuses);
    * ▸ fn get_marketplace_by_index(index: u128);
    * ▸ fn get_marketplace_length();
    * ▸ fn add_marketplace(marketplace: address);
    * ▸ fn add_inventory(quantity: u128) ;
    * ▸ fn subtract_inventory(quantity: u128);
    * ▸ fn set_inventory(qty: u128);
    * ▸ fn is_only_affiliate() -> bool;  



#### D5: eNFT Order Manager types including unit tests
This deliverable includes the following types:
* Asset types
    * type AssetData;
    * type SplytManager;
    * type IOracle;
    * type OracleAddress;
    * type SplytWalletAddress;

This deliverable includes the following methods:
* Asset
    * ▸ fn create_asset (assetid: u128, term: u128, seller: address, title: string, totalcost: u128, expirationdate: u128, mpaddress: address, mpamount: u128, inventorycount: u128 ) -> address;
    * ▸ fn get_asset_info_by_assetid (assetid: u128) -> Asset 
    * ▸ fn get_asset_info_by_address (assetaddress: u128) -> Asset 
    * ▸ fn get_asset_info_by_index (index: u128) -> Asset
    * ▸ fn get_asset_assets_length () -> u128;
    * ▸ fn get_market_places_length_by_assetid (assetid: u128) -> u128;
    * ▸ fn get_market_place_by_assetid_and_index (assetid: u128, index: u128) -> address
    * ▸ fn set_data_contract (assetdata: address);
    * ▸ fn get_type (assetaddress: address) -> AssetTypes;
    * ▸ fn get_status (assetaddress: address) -> Statuses
    * ▸ fn add_market_place_by_assetaddress (assetaddress: address, marketplace: address);
    * ▸ fn add_market_place_by_assetid (assetid: u128);
    * ▸ fn set_status (assetaddress: address, status:Statuses);
    * ▸ fn set_inventory (assetaddress: address, count: u128);
    * ▸ fn add_inventory (assetaddresss: address, qty: u128);
    * ▸ subtract_inventory (assetaddresss: address, qty: u128);
    * ▸ fn set_splyt_manager (address: address);
    * ▸ fn get_address_by_id (assetid: u128) -> address
    * ▸ fn get_id_by_address (assetaddress: address) -> u128
    * ▸ fn get_address_by_index (index: u128) -> address
    * ▸ fn is_manager (address: address) -> bool
    * ▸ fn dot_to_shopx (assetid: u128, term: u128, seller: address, title: string, totalcost: u128, expirationdate: u128, mpaddress: address, mpamount: u128, inventorycount: u128);
    * ▸ fn set_oracle_address (oracleaddress: address);



#### D8: eNFT Order types including unit tests
This deliverable includes the following types:
* Order types
    * type Version;
    * type Orders;
    * type FractionalOrders;
    * type OrderIdByIndex;
    * type Index;


This deliverable includes the following methods:
* Order
    * ▸ fn save (orderid: u128, asset: address, buyer: address, quantity: u128, paidamount: u128) -> bool;
    * ▸ fn set_status (orderid: u128, status: Statuses) -> bool;
    * ▸ fn get_status (orderid: u128) -> Statuses;
    * ▸ fn get_paid_amount (orderid: u128) -> u128;
    * ▸ fn get_asset_address (orderid: u128) -> address;
    * ▸ fn get_quantity (orderid: u128) -> u128;
    * ▸ fn get_total_contributions (orderid: u128) -> u128;
    * ▸ fn save_fractional (orderid: u128, asset: address, contribution: address, amount: u128, status: Statuses) -> bool
    * ▸ fn add_contribution (orderid: u128, contributor: address, amount: u128, status: Statuses);    
    * ▸ fn get_factional_order_id_by_index (assetaddress: addresss) -> u128;
    * ▸ fn get_buyer (orderid: u128) -> address;
    * ▸ fn get_asset (orderid: u128) -> address;
    * ▸ fn get_order_by_order_id (orderid: u128) -> Order;




#### D9: eNFT Order Manager types including unit tests
This deliverable includes the following types:
* Order Manager types
    * type OrderData;
    * type SplytManagerers;
    
This deliverable includes the following methods:
* Order Manager
    * ▸ fn purchase (orderid: u128, assetaddress: address, quantity: u128, tokenamount: u128, marketplace: address) -> bool;
    * ▸ fn create_order (orderid: u128, asset: Asset, quantity: u128, tokenamount: u128);
    * ▸ fn is_fractional_order_exists (asset: address) -> bool;
    * ▸ fn contribute_order (orderid: u128, asset: Asset, tokenamount: u128);
    * ▸ fn set_status (orderid: u128, status: Statuses) -> bool;
    * ▸ fn get_status (orderid: u128) -> Statuses;
    * ▸ fn calc_distribution (totalcost: u128, length: u128, kickbackamount: u128) -> u128;
    * ▸ fn approve_refund (orderid: u128) -> Statuses;
    * ▸ fn request_refund (orderid: u128) -> Statuses;
    * ▸ fn get_total_contributions (orderid: u128) -> u128;
    * ▸ fn set_splytmanager (address: address);
    * ▸ fn get_data_contract_address () -> address;
    * ▸ fn get_data_contract (orderdata: address) -> OrderData;
    * ▸ fn get_fraction_order_id_by_asset_address (asset: address) -> u128; 
    * ▸ fn get_order_info_by_order_id (orderid: u128) -> OrderData;
    * ▸ fn get_order_info_by_index (index: u128) -> OrderData;
    * ▸ fn get_contribution_length (orderid: u128) -> u128;
    * ▸ fn get_contribution_by_order_id_and_index (orderid: u128, index: u128) -> u128;
 


#### D11: eNFT Arbitration types including unit tests
This deliverable includes the following types:
* Arbitration types
    * type Reason;
    * type Winner;
    * type Status;
    * type ArbitrationID;
    * type Reporter;
    * type BaseStake;
    * type ReporterStakeTotal;
    * type SellerStatkeTotal;
    * type Asset;
    * type Arbitrator;

This deliverable includes the following methods:
* Arbitration
    * ▸ fn set_winner (winner: Winner);
    * ▸ fn get_winner () -> Winner;
    * ▸ fn set_arbitrator (arbitrator: address);
    * ▸ fn get_arbitrator () -> arbitrator;
    * ▸ fn set_2x_stake_by_seller ();
    * ▸ fn set_2x_stake_by_reporter ();
    * ▸ fn get_seller () -> seller
    * ▸ fn get_total_stake () -> u128;


#### D12: eNFT Arbitration Manager types including unit tests

This deliverable includes the following methods:
* Arbitration Manager
    * ▸ fn create_arbitration (arbitrationid: u128, assetaddress: address,  reason: Reasons) -> arbitration
    * ▸ fn set_winner (arbitrationid: u128; winner: Winners);
    * ▸ fn get_winner (arbitrationid: u128) -> winner
    * ▸ fn set_arbitrator (arbitrationid: u128, arbitrator: address);
    * ▸ fn get_arbitrator (arbitrationid: u128) -> address;
    * ▸ fn get_status (arbitrationid: u128) -> Statuses;
    * ▸ fn get_arbitration_length () -> index;
    * ▸ fn get_address_by_id (arbitrationid: u128) -> address;
    * ▸ fn get_address_by_arbitrationid (arbitrationid: u128) -> address;
    * ▸ fn get_arbitration_id_by_address (arbitrationaddress: address) -> arbitrationid;
    * ▸ fn get_arbitration_by_index (index: u128) -> address;
    * ▸ fn get_arbitration_info_by_index (index: u128) -> arbitration;
    * ▸ fn get_arbitration_info_by_arbitrationid (arbitrationid: u128) -> arbitration;
    * ▸ fn set_2x_stake_by_seller (arbitrationid: u128);
    * ▸ fn set_2x_stake_by_reporter (arbitrationid: u128);

#### D13: eNFT Reputation types including unit tests
This deliverable includes the following types:
* Reputation types
    * type wallet;
    * type rate;
    
This deliverable includes the following methods:
* Reputation
    * ▸ fn add_rate (rating: u128, from: address);
    * ▸ fn update_rate (index: u128, rating: u128);
    * ▸ fn get_rates_length () -> u128;
    * ▸ fn get_rate_info_by_index (index: u128) -> rate;
    * ▸ fn get_date_by_index (index: u128) -> date;
    * ▸ fn get_rater_by_index (index: u128) -> address;
    * ▸ fn get_rating_by_index (index: u128) -> u128;

#### D14: eNFT Reputation Manager types including unit tests

This deliverable includes the following methods:
* Reputation Manager
    * ▸ fn create_rate (wallet: address, rating: u128) -> address;
    * ▸ fn get_rate_info_by_wallet_and_index (wallet: address, index: u128) -> rate;
    * ▸ fn get_reputation_info_by_index (index: u128) -> reputation;
    * ▸ fn get_reputation_info_by_wallet (wallet: address) -> reputation;
    * ▸ fn get_reputation_length() -> u128;
    * ▸ fn get_reputation_address_by_wallet (wallet: address) -> address;
    * ▸ fn get_average_rating_by_wallet (wallet: address) -> u128;
    * ▸ fn get_total_rating_by_wallet (wallet: address) -> u128;
    

##  Future Plans

The Splyt protocol is an open-source blockchain inventory built to be “the next generation of e-commerce” to push forward global digital commerce for a more sustainable business climate. Splyt’s vision is to be adopted by the masses and used as the foundation for all digital commerce, just as the internet has been mass adapted and built out. The ultimate goal is to make Splyt a self-sustained and organized open source project and move all governance to be decentralized within the foundation. Splyt is building the protocol to be built on and used globally by all businesses, large and small. The protocol is adaptable to user changes and needs, enabling the technology to keep up with changing demands and uses. We want to be synonyms with TCP/IP but for digital commerce transactions.

Splyt aims to join the substrate builder program and start paving the way to acquire our own Parachain optimized for e-commerce. We have raised over 400,000 DOT from our community to make the bid.



##  Additional Information :heavy_plus_sign:

* What work has been done so far?
  * Ref Architecture
  * Local rococo testnet for parachain development based on Substrate Cumulus Workshop
  * Dev environment for substrate
  * Shopify client (beta) to connect to Splyt network
    * https://www.youtube.com/watch?v=gOur7pm6yl0&feature=youtu.be

* Are there any teams who have already contributed (financially) to the project?
  * AU21
  * NGC
  * Morning Star
  * Alphabit

*  Have you applied for other grants so far?
	* No, this is our first







