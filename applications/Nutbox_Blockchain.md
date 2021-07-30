# W3F Open Grant Proposal

* **Project Name:** Nutbox Blockchain
* **Team Name:** Nutbox
* **Payment Address:** USDT 0xE27890A9F122c6DF6F27a6Fb92970334777016Dd

## Project Overview

### Overview

Nutbox Chain is a decentralized public content platform and Dapp platform built with Substrate to serve the community. On Nutbox Chain, other projects or communities in the polkadot ecosystem can build their own social content platforms. Unlike Steem, a platform that only implements decentralized storage of content, Nutbox Chain will support the community to use its own community tokens to incentivize content creation. In the future, the Nutbox Chain will also support ink contract, and developers can build content-based DApps on the Nutbox Chain.

Nutbox Chain is built entirely on Substrate, we will use a series of convenient and practical pallets provided by FRAME to build the runtime of Nutbox Chain. Before becoming a parachain, Nutbox Chain will run as Solo mode. After becoming a parachain, Nutbox Chain can exchange assets and transmit messages with other Polkadot/Kusama parachains through the XCMP protocol.

The Nutbox team has been committed to serving the web3.0 community(i.e. DAO), and we firmly believe that the future DAO (including DeFi, DApp, Governance etc.) will be based on content. Steem, the earliest decentralized content platform, realized the decentralized storage of user content (articles & tweets) and a user content incentive system based on the PoB mechanism (Proof of Brain). However, the Steem network is not a community-centric content platform, nor does it support smart contract, which greatly reduces its network activity and scalability.

Therefore, we need such a Public Content system, which will be designed with the community as the center, so that the community can create its own incentive public social media and activate the enthusiasm of users for creation. 

In addition, the community can also have its own set of governance system. Such a community will serve the members with open and fair value. At the same time, community members will be deeply involved in content creation and governance, and then regard themselves as active producers and participants in creating value.

### Project Details

 **Nutbox Chain Architecture**

See [Nutbox Architecture Layout](https://www.processon.com/view/link/61036e52637689719d312269)

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

According to the layout we can see it contains two pallets: content pallet and PoB pallet. When user publish their article on Nutbox, we first save the 
images/videos to CDN or IPFS(Optional, if choose IFPS, user need to pay more fee), with the returned URL, we generate the content metadata, which may contains 
following fields:

```sh
{
    "author": "tolak",
    "account": "5En54NcpvxWur5BVk59Lw9ynwHnMA8Dr5zLeQfMtgs7HGAvs",
    "id": "989272",
    "hash": "hash of content",
    "title": "Example Title",
    "created": "2021-07-26T10:18:48",
    "tag": ["tag1", "tag2", "tag3"],
    "cdn": ["https://cdn-url-1", "https://cdn-url-2"],
    "cid": "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
    "text": "user article raw text",
    ...
}
```

The metadata contains the cdn or IPFS CID url and the content hash, we can verify the content with a storage proof in **offchain worker**. This is necessary 
when user gonna to convert the content to a NFT and transfer the NFT to others.

After the metadata push to chain,  we created its vote and comments runtime storage at the same time. On Nutbox Chain, user who hold our native token NUT can 
transfer it to NP, NP means NUT Power, which can be used to vote and comment a content, the more user contribute NP to the content, the more rewards they can 
get from the rewards pool of the content. The PoB pallet handle all the logic about how many rewards every ready-to-settled-cotent can get. On Nutbox Chain 
NUT would be mined every block, some of them are reward to validator, some of them are reward to content author and content participants, different content may 
got differnt amount of NP contribution, it would be used to computing the reward that the content can get. As the layout shows, reward would be handled by a handler in content pallets, in this handler, we save every users rewards and they can claim the rewards later.

**Smart contract module**

- Developers can develop DApps based on content with Ink contracts
- Nutbox provides an interface to the contract module to access content information, such as votex and comments of a post

Substrate now can support send dispatch call to runtime from the contract, see this [PR](https://github.com/paritytech/substrate/pull/9276), so the **Content Dispatcher** here is used to send dispatch to read and write content pallet storage. The content info we get would be used by all the contracts as content metadata, that means developer can build content based DApp on Nutbox Chain, e.g.  build a robot contract that when user vote to a specific content, then distribute community token to the user as extra rewards. **Community Engine** would contains more modules that communities can use directly.

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
| 1      | Content Store    | 1) Store content images/videos to CDN and IPFS<br>2) Generate content storage proof in offchain worker                                                                                                                                        |
| 2      | Content Pallet  | 1) user publish content on chain<br>2) user vote and comment a content                                            |
| 3      | Deploy Tools    | 1) We will build a docker image that developer can run Nutbox Chain in one single container.<br>2) Nutbox Faucet bot.                                                                                                                                |

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
| 1      | Consens system update     | update consensus algorithm from PoA to PoS. |
| 2      | PoB Pallet      | The pob-pallet would implement the PoB incentive algorithm:<br>1) NUT and NP conversion.<br>2) Reward computing.<br>3) rewards distribution                                                                 |

### Milestone 3 —  Ink integration and contract template

- **Estimated Duration:** 1 month
- **FTE:** 5
- **Costs:** 8,000 USD

| Number |    Deliverable   | Specification                                                                                                                                                                                                                                     |
|:------:|:----------------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License          | MIT                                                                                                                                                                                                                                               |
| 0b.    | Documentation    | 1) By collecting the feedback of our testnet, we will write Q&A documents.<br>2) More details about our implementation of the Nutbox Chain and Ink smart contract.                                                                                |
| 0c.    | Testing Guide    | 1）Ink smart contract deployment on Nutbox Chain.                                                                                                                                                                                                 |
| 0d.    | Article/Tutorial | Articles would be published:<br>1) Build you content based DApp with Ink on Nutbox Chain.<br> <br>Tutorial would be published:<br>1) What content API that Ink smart contract can use.<br>2) How to deploy a ERC20 smart contract use Nutbox Ink. |
| 1      | Ink Integration    | 1) integrate ink! contract module. 2) build content dispatcher/reader/writer                                                                                                                                                                        |
| 2      | Ink Template      | We would provide several contract templates to help developer and communities, e.g. Ink contract implementation for ERC20/ERC721/ERC1551                                                                                                                                                                                                                                  |

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
| 1      | Community Token Distribution     | support community create its community token(not with balance-pallet) and token transfer between contract and runtime                                                                                                                                                                                            |
| 2      | NFT Converter      | Implement of tranfering a content posts into a NFT.                                                                                                                                                                                              |


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
