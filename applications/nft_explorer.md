# W3F Open Grant Proposal

* **Project Name:** UniArts NFT Explorer
* **Team Name:** UniArts
* **Payment Address:** 0x480821a0700b0d5fBC722a5339ED2d49979Eaa42 (DAI)

## Project Overview :page_facing_up:

### Overview

UniArts NFT Explorer wants to be the best place to analyze, track and discover NFTs.

UniArts NFT Explorer hopes to create a unified NFT dedicated explorer for the Polkadot / Kusama ecology. It can be used to discover and view the NFTs in important parachains in the Polkadot / Kusama ecology. 

UniArts Network is a decentralized incubation system for artists and art collectors with an end goal of the democratization of art.

This browser is different from opensea like market. 

1. It pays attention to all nfts on chain and does not provide trading markets. 
2. Do not require submission or application by NFT creators or administrators.

The vision of this browser is to become a better platform for discovering and analyzing NFTs. In the future, we can provide more tools for discovering and analyzing NFTs, such as combining on-chain data and off-chain data to provide users with some statistical views.

We hope that through this grant, we can better understand NFT and lay a foundation for the realization of this vision. This grant is the first step of this vision, that is to achieve a basic browser structure and functions, and only focus on evm. Through this grant, we hope to 

1. establish a reliable technology architecture.
2. choose the best technology stacks.
3. better understand nft, and improve the data model, 
4. implement a better style suitable for NFT display.

When these goals has been achieved, we will support more chains and NFT types, and grab more off-chain data to provide various statistical views and transaction history, etc.

### Project Details

#### Architecture

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9d18629c-5189-46b9-acc4-bcc720b08d29/scan-Page-6_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210722T022647Z&X-Amz-Expires=86400&X-Amz-Signature=7af6e86ef3029b39d6c6cf480613a679beda12ada38921b404dffc69fa16768b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22scan-Page-6_%281%29.png%22)

This is a standard web program, the main structure includes three layers.

The first layer is the Web server, which is responsible for rendering browser pages, showing NFTs to users, and providing some interactive functions.

The second layer is the database layer. A data model is used in the database to store all NFTs data, and the Web server will query the data from the database.

The third layer is the data query layer connected to blockchains. In this layer, there will be a number of long-running workers. These workers will monitor or poll blockchains to discover NFTs, and then combine these NFTs with their related data into the database, and the push service will also be notified to push the latest data to the browser. In addition to obtaining data through blockchains, this layer may also grab data from some centralized or decentralized services, such as grabbing transaction data from Markets, etc. This part is not in the scope of this grant.

This grant application only focuses on the NFTs on the evm-compatible virtual machine in the Polkadot ecosystem, and only monitors and saves the ERC721 and ERC1155 compatible NFTs. And only considers connecting three blockchains, UniArts, Darwinia and Moonbean.

In the future, we will apply for other grants based on the completion of this grant, including more chains, support for wasm based NFTs, and support for more types of NFTs, such as RMRK.

#### Mockups

- https://www.notion.so/Mockup-3993bf6284d9416e86e77a21f9fc5014

#### Data models / APIs

- https://www.notion.so/Data-models-Apis-2195fd63e1b14e46bb75d68a00c6ecaa

#### Technology stack

##### frontend

- [hotwired](https://hotwired.dev/), it is tool set to help build a rich & fast first-load pages.
- [bootstrap](https://getbootstrap.com/) 5
- https://github.com/ChainSafe/web3.js

##### backend

- [ruby lang](https://www.ruby-lang.org/) 2.7
- [ruby on rails](https://rubyonrails.org/) 6.1, web framework
- https://github.com/itering/scale.rb
- https://github.com/ChainSafe/web3.js
- [Sidekiq](https://github.com/mperham/sidekiq) 6, for background job processing
- Web/Application server: Nginx & [Puma](https://puma.io/)

### Ecosystem Fit

We believe that there will be various NFTs in the Polkadot / Kusama ecosystem in the future, so a unified nft explorer must be very important. Now many parachains will support the creation of NFTs. Users interested in NFTs will want to have a unified entry to view these NFTs.

We found that there is no unified and easy-to-use NFT browser in the current Polkadot ecosystem, and uniarts itself needs such a browser.

Potential users of the NFT browser include NFT collectors, NFT creators, NFT speculators and other applications.

Similar projects:

https://nft.kodadot.xyz/rmrk/gallery

## Team :busts_in_silhouette:

### Team members

* Kyle Gu
* Tuminfei
* Aki Wu

### Contact

* **Contact Name:** Aki Wu
* **Contact Email:** wuminzhe@gmail.com

### Legal Structure

* **Registered Address:** 3 FRASER STREET #05-25 DUO TOWER SINGAPORE (189352)
* **Registered Legal Entity:** UNI-ARTS FOUNDATION LTD.

### Team's experience

UniArts is a team dedicated to the democratization of art. We chose blockchain to achieve this goal, and finally chose Substrate to implement this goal. UniArts has the ability to develop web, mobile, and blockchain applications. The team is familiar with Ethereum and Substrate development.

**Aki Wu** has many years of blockchain development experience, is proficient in web development, and is familiar with ruby and rust languages. When working at [Itering](https://www.itering.io/), he developed [scale.rb](https://github.com/itering/scale.rb), a Scale Codec library and Substrate Client implemented in Ruby language. [scale.rb](https://github.com/itering/scale.rb) is a grant of the Web3 Foundation.

**Kyle Gu** is the leader of the UniArts team. He has worked in the blockchain industry for many years and is familiar with the operation and development of blockchain projects.

**Tuminfei** has rich experience in the field of software development, especially in blockchain. He has implemented many projects as a leader. He is familiar with the development of Ethereum and Substrate. He is also a major maintainer of the UniArts chain.

### Team Code Repos

* https://github.com/uni-arts-chain
* https://github.com/uni-arts-chain/uni-arts-network
* https://github.com/uni-arts-chain/uni-arts-web-frontend
* https://github.com/uni-arts-chain/uni-arts-app-Android
* https://github.com/uni-arts-chain/uni-arts-app-IOS
* https://github.com/uni-arts-chain/bitflix-nft-frontend

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* https://github.com/wuminzhe
* https://github.com/tuminfei

## Development Status :open_book:

* I try to use rust to query the evm log by address and topic, this is part of the research.

  https://github.com/wuminzhe/evm-log-tracker

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2.5 months
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 16,000 USD

### Milestone 1 — Implement the substrate data layer

* **Estimated duration:** 1 month
* **FTE:**  2
* **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that run the code, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article |  |
| 1. | Research | Research how to monitor the events of evm under the Substrate. We will provide a small doc about it. |
| 2. | substrate evm log track tool | It is a small framework used to track event logs about certain addresses and topics. |
| 3. | Workers for chain | A worker is a long-running process to monitor the events of evm under the Substrate for UniArts testnet, Darwinia Crab or Moonbean Moonriver, and, save the data to database. |


### Milestone 2 — Web server

* **Estimated Duration:** 1.5 month
* **FTE:**  2
* **Costs:** 8,000 USD

| Number | Deliverable                                   | Specification                                                |
| -----: | --------------------------------------------- | ------------------------------------------------------------ |
|    0a. | License                                       | MIT                                                          |
|    0b. | Documentation                                 | We will provide both **inline documentation** of the code and a basic **tutorial** that run the code, which will show how the new functionality works. |
|    0c. | Testing Guide                                 | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker                                        | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|    0e. | Article                                       | We will publish an medium english **article** that explains what was done as part of the grant and how to use it. |
|     1. | A running web site with push style refreshing | We will deploy the web application to nginx using puma. Everyone can explore it. The content will be refreshed by websocket push. It will include all pages in the mockups. |


## Future Plans

* Strengthen the display effect on the small screen
* Support the NFT of Statemine
* Support more evm based chain
* Support wasm based NFT
* Support more NFT types or specifications, such as RMRK
* Market data & view
* Record important addresses and level them
* Statistic chart, such as transfer frequency statistic
* Signup & Signin. The use can add nfts to the favorites. 
