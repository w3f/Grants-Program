# W3F Open Grant Proposal

* **Project Name:** Uniscan NFT Explorer
* **Team Name:** Uniscan
* **Payment Address:** 0x480821a0700b0d5fBC722a5339ED2d49979Eaa42 (DAI)

## Project Overview :page_facing_up:

### Overview

Uniscan NFT Explorer wants to be the best place to analyze, track and discover NFTs.

Uniscan NFT Explorer hopes to create a unified NFT dedicated explorer for the Polkadot / Kusama ecology. It can be used to discover and view the NFTs in important parachains in the Polkadot / Kusama ecology. 

The vision of this explorer is to become a better platform for discovering and analyzing NFTs. In the future, we can provide more tools for discovering and analyzing NFTs, such as combining on-chain data and off-chain data to provide users with some statistical views.

We hope that through this grant, we can better understand NFT and lay a foundation for the realization of this vision. This grant is the first step of this vision, that is to achieve a basic browser structure and functions, and only focus on evm. Through this grant, we hope to 

1. establish a reliable technology architecture.
2. choose the best technology stacks.
3. better understand nft, and improve the data model, 
4. implement a better style suitable for NFT display.

### Project Details

#### Architecture

![](https://user-images.githubusercontent.com/1608576/127757463-724704ab-d7e1-488c-bd18-d4f2d9725d5f.png)

This is a standard web program, the main structure includes three layers.

The first layer is the Web server, which is responsible for rendering browser pages, showing NFTs to users, and providing some interactive functions.

The second layer is the database layer. A data model is used in the database to store all NFTs data, and the Web server will query the data from the database.

The third layer is the data query layer connected to blockchains. In this layer, there will be a number of long-running workers. These workers will monitor or poll blockchains to discover NFTs, and then combine these NFTs with their related data into the database, and the push service will also be notified to push the latest data to the browser. In addition to obtaining data through blockchains, this layer may also grab data from some centralized or decentralized services, such as grabbing transaction data from Markets, etc. This part is not in the scope of this grant.

This grant application only focuses on the NFTs on the evm-compatible virtual machine in the Polkadot ecosystem, and only monitors and saves the ERC721 and ERC1155 compatible NFTs. And only considers connecting two blockchains, Darwinia and Moonbean.

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

We found that there is no unified and easy-to-use NFT browser in the current Polkadot ecosystem.

Potential users of the NFT browser include NFT collectors, NFT creators, NFT speculators and other applications.

### Similar projects:

https://nft.kodadot.xyz/rmrk/gallery

Kodadot gallery is a rmrk nfts gallery. 

The difference between us is that the purpose and direction. Kodadot gallery is a part of the RMRK. Uniscan's current goal is to support NFTs of evm pallet. The Uniscan's final goal is to build an all-in-one NFT explorer for Polkadot & Kusama ecosystem with some data statistics for users to easily discover NFTs. 

### Why evm?

1. Evm is the most widely adopted virtual machine platform in the Polkadot/Kusama ecosystem, so there will be a lot of NFTs to be issued based on evm pallet.
2. There is not an NFT explorer support evm in the Polkadot/Kusama ecosystem. 
3. It is difficult for the NFT explorers of the Ethereum ecosystem to cover the chains in the Polkadot ecosystem. And they are not permissionless.

## Team :busts_in_silhouette:

### Team members

* Kyle Gu: product manager
* Tuminfei: architecture and blockchain consultant
* Aki Wu: full-stack developer

### Contact

* **Contact Name:** Aki Wu
* **Contact Email:** wuminzhe@gmail.com

### Legal Structure

* **Registered Address:** 3 FRASER STREET #05-25 DUO TOWER SINGAPORE (189352)
* **Registered Legal Entity:** UNI-ARTS FOUNDATION LTD.

### Team's experience

Uniscan is a team dedicated to create an unified NFT explorer. We have the ability to develop web, mobile, and blockchain applications. The team is familiar with Ethereum and Substrate development.

**Aki Wu** has many years of web and blockchain development experience, and is proficient in web development, and is familiar with ruby and rust languages. When working at [Itering](https://www.itering.io/), he developed [scale.rb](https://github.com/itering/scale.rb), a Scale Codec library and Substrate Client implemented in Ruby language. [scale.rb](https://github.com/itering/scale.rb) is a grant of the Web3 Foundation.

**Kyle Gu** is the product manager of Uniscan team.  He has worked in the blockchain industry for many years and is familiar with the operation and development of blockchain projects.

**Tuminfei** is the architecture and blockchain consultant of Uniscan team. He has rich experience in the field of software development, especially in blockchain. He has implemented many projects as a leader. He is familiar with the development of Ethereum and Substrate. He is also a major maintainer of the UniArts chain.

### Team Code Repos

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

### Milestone 1 — common components

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
| 1. | A evm log tracking lib using ethereum filter | It is a lib used to track event logs of certain addresses and topics.<br />It use ethereum compatible json-rpc apis([eth_newfilter](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter), [eth_getlogs](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)) to track the logs. <br />It will be used to track the Moonbean ERC721 and ERC1155 NFTs. |
| 2. | A evm log tracking lib using substrate event | It is a lib used to track event logs of certain addresses and topics.<br />It use substrate events([getStorage](https://polkadot.js.org/docs/substrate/rpc/#getstoragekey-storagekey-at-blockhash-storagedata)) to track the logs. <br />It will be used to track Darwinia ERC721 and ERC1155 NFTs. |
| 3. | A lib to identify the NFTs | This lib is used by the above tracking lib to identify which contracts are NFT contracts(ERC721, ERC1155). [ERC-165](https://eips.ethereum.org/EIPS/eip-165) Standard Interface Detection is used. |


### Milestone 2 — Web server

* **Estimated Duration:** 1.5 month
* **FTE:**  2
* **Costs:** 8,000 USD

| Number | Deliverable           | Specification                                                |
| -----: | --------------------- | ------------------------------------------------------------ |
|    0a. | License               | MIT                                                          |
|    0b. | Documentation         | 1. We will provide both **inline documentation** of the code. |
|    0c. | Testing Guide         | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker                | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. <br />And, It will be used to run the server. |
|    0e. | Article               | We will publish an medium english **article** that explains what was done as part of the grant and how to use it( How to use the three libraries in Milestone1, the description of the models in Milestone2). |
|     1. | Models                | Implement the models described in [models](https://www.notion.so/Data-models-Apis-2195fd63e1b14e46bb75d68a00c6ecaa) |
|     2. | Views and Controllers | Implement the views and the related controllers described in [mockups](https://www.notion.so/Mockup-3993bf6284d9416e86e77a21f9fc5014) and [apis](https://www.notion.so/Data-models-Apis-2195fd63e1b14e46bb75d68a00c6ecaa) |


## Future Plans

* Strengthen the display effect on the small screen
* Support the NFTs of Statemine
* Support more evm based chain
* Support wasm based NFTs
* Support more NFT types or specifications, such as RMRK
* Market data & view
* Record important addresses and level them
* Statistic chart, such as transfer frequency statistic
* Signup & Signin. The use can add nfts to the favorites. 
