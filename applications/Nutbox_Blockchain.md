# W3F Open Grant Proposal

* **Project Name:** Nutbox Blockchain
* **Team Name:** Nutbox
* **Payment Address:** USDT 0xE27890A9F122c6DF6F27a6Fb92970334777016Dd

## Project Overview

### Overview

Nutbox Chain is a decentralized public content platform and Dapp platform built with Substrate to serve the community. On Nutbox Chain, other projects or communities in the polkadot ecosystem can build their own social content platforms. Unlike Steem, a platform that only implements decentralized storage of content, Nutbox Chain will support the community to use its own community tokens to incentivize content creation. In the future, the Nutbox Chain will also support ink contract, and developers can build content-based DApps on the Nutbox Chain.

Nutbox Chain is a decentralized public content platform and Dapp platform built with Substrate to serve the community. On Nutbox Chain, other projects or communities in the polkadot ecosystem can build their own social content platforms. Unlike Steem, a platform that only implements decentralized storage of content, Nutbox Chain will support the community to use its own community tokens to incentivize content creation. In the future, the Nutbox Chain will also support ink contract, and developers can build content-based DApps on the Nutbox Chain.

Nutbox Chain is a decentralized public content platform and Dapp platform built with Substrate to serve the community. On Nutbox Chain, other projects or communities in the polkadot ecosystem can build their own social content platforms. Unlike Steem, a platform that only implements decentralized storage of content, Nutbox Chain will support the community to use its own community tokens to incentivize content creation. In the future, the Nutbox Chain will also support ink contract, and developers can build content-based DApps on the Nutbox Chain.

Therefore, we need such a Public Content system, which will be designed with the community as the center, so that the community can create its own incentive public social media and activate the enthusiasm of users for creation. 

In addition, the community can also have its own set of governance system. Such a community will serve the members with open and fair value. At the same time, community members will be deeply involved in content creation and governance, and then regard themselves as active producers and participants in creating value.

### Project Details

 **Nutbox Chain Architecture**

See [Nutbox Architecture Layout](https://www.processon.com/view/link/60e27963f346fb04d2d991db)

Nutbox Chain Runtime mainly includes three main parts: PoB (Proof of Brain), Contracts and StakingFactory.

Among them, PoB abstracts the rights of users' content. It implements the economic model of users' content. This part mainly made some changes based on the PoB of the Steem network.

Contracts integrates the Substrate ink contract module. In addition to the basic ink contract implementation, Nutbox will also implement commonly used contract templates for the community to quickly build their own DApps.

StakingFactory is an asset staking factory, used to create the community's own staking DeFi module.

The innovation of Nutbox Chain lies in the construction of a content-based incentive network. Compared with Steem's content incentive network, we have introduced smart contract and DeFi. By building a huge developer community and DeFi infrastructure on Nutbox Chain, this set of content-based economic incentive mechanisms can operate more efficiently in the future. 

Therefore, Nutbox Chain will provide the following functions:

**PoB-based Public content module** 

Users have their own personal homepage

- Users publish posts (i.e.articles or pictures), which will be stored in a decentralized storage network such as IPFS
- A certain amount of native tokens are created every day to reward all users who publish daily posts
- Users can comment and like other users’ posts, so that they can be rewarded as part of the posts' rewards
- Developers can develop automatic vote robots based on Nutbox's RPC interfaces

**Smart contract module**

- Developers can develop DApps based on content with Ink contracts
- Nutbox provides an interface to the contract module to access content information, such as votex and comments of a post

**Content-based DeFi module**

- Users can transfer published post into a NFT
- Users can promote their own content to other users by sharing their own revenue
- Users can spend NUT to buy votes (i.e. upvote) directly
- Users who hold a large amount of assets, that is, users who have a large voting weight, can carry out the business of selling vote right

### Ecosystem Fit

As a public content chain, Nutbox Chain will bring decentralized social media to the Polkadot ecosystem, through WASM smart contract and our PoB system, communities in the Polkadot ecosystem can build their social media platform.

Both Parachains/Web3 users/Polkadot Communities are our arget audience. With Nutbox Chain:

- Parachain or community to create token-incentive social media platform.
- Community can create types of content based DApps on Nutbox Chain.
- Web3 users can publish their decentralized public content and get earn.

So far similar project in Substrate/Polkadot/Kusama ecosystem is [Subsocial](https://subsocial.network/), through we we have many differences.

### Team members

- Guazi: CEO
- Wenfeng: CTO
- Robert Yan: Blockchain Developer
- Xi Wang: Blockchain Developer
- Armonio Liang: Token Economy Designer

### Contact

* **Contact Name:** Sunny Zhang
* **Contact Email:** contact@nutbox.io
* **Website:** https://nutbox.io

### Legal Structure

* **Registered Address:** No. 4226, 42nd Floor, Unit 1, Building 1, No. 500, Middle Section of Tianfu Avenue, Hi-Tech Industrial Development Zone, Sichuan Pilot Free Trade Zone,China
* **Registered Legal Entity:** Chengdu Ooops Technology Co., Ltd.

### Team's experience

Our team has developed many popular blockchain applications, as follows:

- **Nutbox Peanut -** https://peanut.nutbox.io

    A decentralized staking platform built on Steem and Tron, Steem's largest Defi application. Its TVL once reached 700w USD.

- **Nutbox Slot Auction -** https://polkadot.nutbox.io

    A decentralized parachain slot auction contribution platform that supports Polkadot and Kusuma network, where users can directly participate in crowdloan for various projects. At present, many popular projects in the Polkadot ecosystem have been listed.

### Team Code Repos

All of our projects are list in our [github group](https://github.com/nutbox-dao)

## Development Roadmap

### Overview

- Total Estimated Duration:  4 months
Full-Time Equivalent (FTE): 5 FTE)
Total Costs: 24,000 USD

### Milestone 1 — Content publishment and store

- **Estimated Duration:** 1 month
- **FTE:** 5
- **Costs:** 8,000 USD

| Number |    Deliverable   | Specification                                                                                                                                                                                                                                        |
|:------:|:----------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License          | MIT                                                                                                                                                                                                                                                  |
| 0b.    | Documentation    | 1) Publish documents on social media such as Medium/Twitter/Wechat to explain what is Nutbox and what we gonna do.<br>2) Provide documents and tutorial make people know how to run Nutbox Chain node locally and how to participate in our testnet. |
| 0c.    | Testing Guide    | Writing documents on GitHub repo to give the developer the way how to test our code locally and run all substrate chain node. Also how to make contribution.                                                                             |
| 0d.    | Article/Tutorial | Articles would be published:<br>1) Nutbox - Rebuild Steem with substrate.<br>2) Why Steem needs rebuild and why we use substrate.<br> <br>Tutorial would be published:<br>1) How To Run Nutbox Chain Locally.                                        |
| 1      | Nutbox Chain     | 1) Upgrade Nutbox Chain from Substrate v3 to Substrate v4<br>2) Depoly Nutbox Chain as public testnet network                                                                                                                                        |
| 2      | Content Pallets  | We will implement the basic function of two pallets:<br>1) pallet-account - implementation of Nutbox accont system.<br>2) pallet-content - Implementation of content module. Including the storage proof.                                            |
| 3      | Tools            | 1) We will build a docker image that developer can run Nutbox Chain in one single container.<br>2) Nutbox Faucet bot.                                                                                                                                |

### Milestone 2 —  Implement PoB incentive content system

- **Estimated Duration:** 1 month
- **FTE:** 5
- **Costs:** 8,000 USD

| Number |    Deliverable   | Specification                                                                                                                                                                                                                                              |
|:------:|:----------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License          | MIT                                                                                                                                                                                                                                                        |
| 0b.    | Documentation    | 1) Publish documents about the topology of Nutbox Chain.<br>2) Publish documents to describe the PoB content system.                                                                                                                                        |
| 0c.    | Testing Guide    | Continually writing documents on GitHub repo to give the developer the way how to test our code locally and run all substrate chain node.                                                                                                      |
| 0d.    | Article/Tutorial | Articles would be published:<br>1) Different PoB incentive content system with Steem.<br> <br>Tutorial would be published:<br>1) Steps To Run Nutbox Blockchain Testnet Validator.<br>2) How To publish article and posts on Nutbox.                       |
| 1      | Nutbox Chain     | The Nutbox Chain would have optimization on both consensus system and network. That means:<br>1) We would update consensus algorithm from PoA to PoS.<br>2) Deploy batch of validators for our testnet.<br>3) Open validators deployment to our community. |
| 2      | PoB Pallets      | The pob-pallet would implement the PoB incentive algorithm:<br>1) Content storage proof validation.<br>2) Token reward computing and distribution.<br>3) vote and make comment on content.                                                                 |
| 3      | Tools            | We will create scripts that contains:<br>1) Build and deploy code.<br>3) PoB test scripts.                                                                                                                                                                 |

### Milestone 3 —  Integrate ink module into Nutbox Chain

- **Estimated Duration:** 1 month
- **FTE:** 5
- **Costs:** 8,000 USD

| Number |    Deliverable   | Specification                                                                                                                                                                                                                                     |
|:------:|:----------------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License          | MIT                                                                                                                                                                                                                                               |
| 0b.    | Documentation    | 1) By collecting the feedback of our testnet, we will write Q&A documents.<br>2) More details about our implementation of the Nutbox Chain and Ink smart contract.                                                                                |
| 0c.    | Testing Guide    | 1）Ink smart contract deployment on Nutbox Chain.                                                                                                                                                                                                 |
| 0d.    | Article/Tutorial | Articles would be published:<br>1) Build you content based DApp with Ink on Nutbox Chain.<br> <br>Tutorial would be published:<br>1) What content API that Ink smart contract can use.<br>2) How to deploy a ERC20 smart contract use Nutbox Ink. |
| 1      | Nutbox Chain     | 1) Monitor and optimize the block and transaction state of Nutbox Chain.                                                                                                                                                                          |
| 2      | Ink Pallets      | Integrate Ink contract pallets into Nutbox Chain.                                                                                                                                                                                                 |
| 3      | Tools            | Implement batch of commands that help developer and user interact with Ink such as query status and send Transaction to contract.                                                                                                                 |

### Milestone 4 —  Add DeFi modules

- **Estimated Duration:** 1 month
- **FTE:** 5
- **Costs:** 8,000 USD

| Number |    Deliverable   | Specification                                                                                                                                                                                                                                    |
|:------:|:----------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License          | MIT                                                                                                                                                                                                                                              |
| 0b.    | Documentation    | 1) Describe how we conbine content and DeFi.<br>2) Details of DeFi module and develop usage in ink contract.                                                                                                                                     |
| 0c.    | Testing Guide    | 1）Write posts and make it a NFT.                                                                                                                                                                                                                |
| 0d.    | Article/Tutorial | Articles would be published:<br>1) How to make posts become a NFT one shot on Nutbox Chain.<br> <br>Tutorial would be published:<br>1) Trade the content based NFT on Nutbox.<br>2) How to write smart contract to transfer a content based NFT. |
| 1      | Nutbox Chain     | 1) Asset transfer on Nutbox.<br>2) High TPS testing.                                                                                                                                                                                             |
| 2      | NFT Pallets      | Implement of tranfering a content posts into a NFT.                                                                                                                                                                                              |
| 3      | Tools            | 1) Interaction between smart contract and DeFi module.                                                                                                                                                                                           |


## Future Plans

## Short term plans

- Give more smart contract temple
- Join parachain auction and become parachain

## Long term plans

- Build a onchain NFT market that people can create and exchange their NFT
- Bridge Steem/Hive to Nutox Chain

## Additional Information

* How did you hear about the Grants Program?** 

We heard from a team member that the team member was deeply involved in the development of the Polkadot ecological project.

* Work you have already done.

- First, our team previously developed WhereIN, Aksai middleware and Ooops based on the Steem blockchain, which laid a solid foundation for the development of Nutbox.
- Second, we have build a decentralized parachain slot auction platform that people can contribute to the projects they support. Projects like Astar(Plasm)、Phala、Crust、Bifrost .etc have joined our ecosystem.
