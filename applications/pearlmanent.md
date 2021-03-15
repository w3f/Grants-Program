# W3F Open Grant Proposal

* **Project Name:** Pearlmanent Coin
* **Team Name:** Pearlmanent
* **Payment Address:** 0x4B234F0d013F76cf8134f505bf89D154C7F2EbE3 (Ethereum address)

## Project Overview :page_facing_up: 

### Overview

* Pearlmanent coin is a cryptocurrency for minting, buying, and selling NFTs in Pearlmanent (https://pearlmanent.com), the first NFT exchange in South Korea our team is building.
* Pearlmanent uses AI technologies (e.g., text translation) to achieve glocalization: Introduce global NFTs to South Korean/Asian users, and introduce NFTs created by South Korean/Asian creators to global users
* As a Polkadot parachain, Pearlmanent coin will support the features of ERC-721 and ERC-1155, which are the standards for NFTs on Ethereum such as Cryptokitties
* We believe the market for NFTs will continue to grow in the long run (10~20 years), and Polkadot has the right foundations to become the best platform for valuable NFTs that will be created in the future, as well as NFTs that have already been created in other blockchains.

### Project Details 

#### Mockups/designs of any UI components

This is the current UI of Pearlmanent.com, where buying Ethereum-based NFTs by spending Ethereum (Ξ) through Metamask is supported. Once Pearlmanent coin is developed, we plan to add the functionality to buy Polkadot-based NFTs using Pearlmanent coin.

![ui](https://user-images.githubusercontent.com/4114572/111122251-1dc3aa00-85b1-11eb-9cb4-3630b5e14438.png)


#### Data models / API specifications of the core functionality

* Data models
  * We maintain mappings from addresses to their balance of Pearlmanent coins
  * We maintain mappings from addresses to ids of NFTs that they own (e.g., a hash of a file that contains the contents of a NFT), and vice-versa
  * We maintain mappings from NFT ids to buy and sell orders placed by users
* API specifications
  * NFT
    * The API specification follows the ERC-721 and ERC-1155 specification
  * Market (tentative)
    * order_id sell(nft_id, coins)
    * order_id buy(nft_id, coins)
    * void take(order_id)
    * void cancel(order_id)

#### An overview of the technology stack to be used

![architecture](https://user-images.githubusercontent.com/4114572/111122261-23b98b00-85b1-11eb-951d-f45bb3927442.png)



* Pearlmanent Coin Node
  * Node: We use the substrate node template
  * Frontend: We use the substrate frontend template
  * Pallets: We develop new pallets for our NFT functionalities (i.e., Market pallet, NFT pallet), and also reuse existing pallets (e.g., Balances) when needed 
    * We choose to develop runtime modules rather than smart contracts for scalability and cost reduction
* Pearlmanent NFT Exchange
  * Pearlmanent.com Website
    * Frontend: React
    * Backend: NodeJS, AWS
  * AI Engine
    * Deep learning technologies
  * Storage
    * Cloud storage (e.g., Google Cloud, AWS)

#### Documentation of core components, protocols, architecture, etc. to be deployed
Much of the documentation of the NFT pallet will be similar to the existing documentation of the ERC-721 and ERC-1155 standards.

The tentative documentation of the Market pallet is as follows
- order_id sell(nft_id, coins): Place a sell order for a NFT with the id <code>nft_id</code>, which the transaction sender owns, at the price of <code>coins</code>, which the transaction sender owns.
- order_id buy(nft_id, coins): Place a buy order for a NFT with the id <code>nft_id</code>, which exists, at the price of <code>coins</code>, which the transaction sender owns.
- void take(order_id): Take an order with the id <code>order_id</code>, with considerations on whether the order was buy/sell and whether the transaction sender owns sufficient balance or owns the NFT
- void cancel(order_id): Cancel an order with the id <code>order_id</code>, which the transaction sender placed

#### PoC/MVP or other relevant prior work or research on the topic
* ERC-721 specification: https://eips.ethereum.org/EIPS/eip-721
* ERC-1155 specification: https://eips.ethereum.org/EIPS/eip-1155

#### What your project is _not_ or will _not_ provide or implement

For this grant, we will not implement migrating existing ERC-721/ERC-1155 NFTs on Ethereum to Pearlmanent/Polkadot.
We will only support minting original NFTs on Pearlmanent/Polkadot, and trading the NFTs on Pearlmanent/Polkadot.

### Ecosystem Fit 

* Overview
  * Pearlmanent coin aims to become a Polkadot parachain for minting, buying, and selling NFTs
* Target audience
  * NFT creators: Artists, designers, game developers, social influencers, and others who want to create and sell NFTs
  * NFT collectors: Collectors who want to buy and sell NFTs 
* Project goal
  * We provide a tool for NFT creators to easily tokenize(mint) their digital collectibles on Polkadot
  * We provide a secure and convenient platform for NFT creators and investors to sell and buy NFTs on Polkadot
* Similar projects
  * In the Polkadot ecosystem
    * Projects: Xeno (XNO coin) NFT hub
    * Pearlmanent specifically focuses on the NFT market in South Korea/Asia, which the team knows very well
  * Outside of Polkadot
    * Projects: Rarible (RARI coin) and Opensea
    * In addition to focusing on South Korea/Asia, Pearlmanent differentiates itself by leveraging the Polkadot infrastructure and reducing the cost of transactions (i.e., Ethereum gas fees)

## Team :busts_in_silhouette:

### Team members
* Dr. John Youngseok Yang
* Hongseok Lee

### Contact
* **Contact Name:** Dr. John Youngseok Yang
* **Contact Email:** johnyangk@gmail.com
* **Website:** https://johnyangk.github.io

### Legal Structure 
* **Registered Address:** Not registered yet
* **Registered Legal Entity:** Not registered yet

### Team's experience
John found and reported critical consensus bugs in Ethereum, and is ranked #6 in the [Ethereum bounty program](https://bounty.ethereum.org/). One of the reported bugs lead to the 2020/11/11 Ethereum hard-fork, which is considered [Ethereum’s greatest challenge since the 2016 DAO fork](https://www.coindesk.com/ethereums-hard-fork-disruption).
John is a committer of two Apache big data projects, Apache REEF and Apache Nemo, which are integrated with Google and Microsoft cloud big data systems.
John also has experience working in Google (Mountain View) and Microsoft Research (Beijing).
John has a PhD in Computer Science and published papers on distributed systems at top systems conferences (OSDI21, ATC19, EuroSys17) as the first author.

Interesting commits by John:
- [REEF-30] Run REEF on Mesos: https://github.com/apache/reef/pull/52
- [NEMO-8] Implement PipeManagerMaster/Worker: https://github.com/apache/incubator-nemo/pull/129
- [NEMO-179] Delayed Task Cloning: https://github.com/apache/incubator-nemo/pull/112
- [NEMO-337] IRDAG Unit Tests: https://github.com/apache/incubator-nemo/pull/195

Hongseok is a senior software engineer and machine learning researcher who has an extensive experience in startups in South Korea. Hongseok has worked at Madup (marketing), Vanilla Bridge (matchmaking), Naver (search), and Vuno (healthcare). 
Hongseok is a commiter of a Naver open source project called PopEval, which is an end-to-end evaluation algorithm for deep learning models.
Hongseok has a Master's degree in Clinical Veterinary Science, and published a paper on computer vision at a top machine learning conference (ICDAR19) as the first author.

Interesting commits by Hongseok (most of Hongseok's work has been done inside companies and thus are not open to public)
- [POPEVAL-1] popEval Optimization https://github.com/naver/popeval/pull/1
- [LabelStudio-643] Initial Configuration fixed https://github.com/heartexlabs/label-studio/pull/643

Neither John nor Hongseok previously applied for a grant at the Web3 Foundation.

### Team Code Repos
* https://github.com/pearlmanent/pearlmanent
* https://github.com/johnyangk
* https://github.com/seoulite

### Team LinkedIn Profiles
* Dr. John Youngseok Yang: https://www.linkedin.com/in/john-youngseok-yang-768ab0137
* Hongseok Lee: https://www.linkedin.com/in/hongseok-lee-586b1a9a

## Development Status :open_book: 

* Pearlmanent coin: We have forked the substrate node template v3.0.0 in our repository (https://github.com/pearlmanent/pearlmanent).
* Pearlmanent.com website: We have integrated with Metamask and Cryptokitties to allow users to buy Cryptokitties with Ethereum.

## Development Roadmap :nut_and_bolt: 

In the next 3 months, we plan to develop the first version of Pearlmanent coin that supports the features of ERC-721 and ERC-1155, which are the standards for Ethereum-based NFTs like Cryptokitties.
For the first milestone, we'll develop a fully-functional blockchain that supports transferring coins and NFTs.
For the second milestone, we'll extend the blockchain to support ERC-721 and ERC-1155.
For the third milestone, we'll extend the blockchain to support buying and selling NFTs using coins.

### Overview
* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):** 1.5
* **Total Costs:** 30,000 USD

### Milestone 1 — Support transferring coins and NFTs
* **Estimated Duration:** 0.5 months
* **FTE:**  1.5
* **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial in a README file that explains how a user can run our Pearlmanent coin node. Once the node is up, it will be possible to send test transactions that transfer Pearlmanent coins and NFTs. |
| 0c. | Testing Guide | All of the functions that can be invoked by transactions will be covered by unit tests to ensure functionality and robustness. In the README file, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We'll publish an article that explains what was done/achieved. Pearlmanent users, node operators, and code contributors will find the article useful in understanding our development process.
| 1. | Substrate module: Balances | We will integrate the existing Balances module to enable transferring Pearlmanent coins. |  
| 2. | Substrate module: NFT | We will create a new module that determines the ownership of NFTs and enables transferring the ownership of NFTs to other accounts. |  
| 3. | Substrate chain | All modules will interact to enable users to receive and send Pearlmanent coins, and also mint and transfer NFTs on Pearlmanent by recording the transactions in our blockchain storage. | 
| 4. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |


### Milestone 2 — Support ERC-721 and ERC-1155 NFTs
* **Estimated Duration:** 1.5 months
* **FTE:**  1.5
* **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial in a README file that explains how a user can run our Pearlmanent coin node. Once the node is up, it will be possible to send test transactions that invoke the ERC-721/ERC-1155 functions on our Pearlmanent blockchain. |
| 0c. | Testing Guide | All of the exposed ERC-721/ERC-1155 functions will be covered by unit tests to ensure functionality and robustness. In the README file, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We'll publish an article that explains what was done/achieved. Pearlmanent users, node operators, and code contributors will find the article useful in understanding our development process.
| 1. | Substrate module: NFT | ERC-721 and ERC-1155 features will be implemented and provided such that they can be invoked with transactions. |  
| 2. | Substrate chain | All modules will interact to enable Pearlmanent.com users as well as 3rd party services to use the ERC-721 and ERC-1155 features (e.g., query NFT ownership, batch transfer) with the NFTs minted on Polkadot. | 
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |


### Milestone 3 — Support buying and selling NFTs using Pearlmanent coins

* **Estimated Duration:** 1 month
* **FTE:**  1.5
* **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial in a README file that explains how a user can run our Pearlmanent coin node. Once the node is up, it will be possible to send test transactions that invoke the marketplace functions on our Pearlmanent blockchain. |
| 0c. | Testing Guide | All of the exposed marketplace functions will be covered by unit tests to ensure functionality and robustness. In the README file, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We'll publish an article that explains what was done/achieved. Pearlmanent users, node operators, and code contributors will find the article useful in understanding our development process.
| 1. | Substrate module: Market | We will create a Substrate module that will enable users to place buy/sell orders, take existing orders, and cancel orders they placed.  |  
| 2. | Substrate module: NFT | We will extend the NFT module to interact well with the market module. |  
| 3. | Substrate chain | All modules will interact to enable trading NFTs using Pearlmanent coins on the blockchain. |  
| 4. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |

## Future Plans


### Short term plan

We plan seek VC funding in South Korea to support the development of the Pearlmanent.com web service, where the Pearlmanent coin will be used to mint, buy, and sell NFTs.
In addition, after the milestones are successfully completed, we'll apply for the follow-up Web3 grant to support our work.
(A possible candidate would be to extend the Pearlmanent coin to enable converting existing Ethereum-based NFTs to Polkadot-based NFTs)

We have detailed marketing plans, which we cannot disclose in this proposal, to attract NFT creators and NFT collectors in South Korea to Pearlmanent.com.

### Long term plans

Our long term vision is to become the number one NFT exchange and platform in South Korea and Asia.
Through Pearlmanent, we hope to contribute to decentralizing the way creators(artist, social influencers, etc) interact and communicate with people.

## Additional Information :heavy_plus_sign:

Crypto is huge in South Korea. 
Upbit, the largest crypto exchange in South Korea, handles around 7 billion USD of trading volume per day and is ranked #5 in the world (Source: coinranking.com).
We believe NFTs will also become huge in South Korea in a very near future, and our team has the right strategy and experience to provide the services that people need.
We are very much looking forward to partnering with the Web3 foundation and the Polkadot ecosystem in realizing our vision.
