# W3F Open Grant Proposal

* **Project Name:** Donut Blockchain
* **Team Name:** Nutbox
* **Payment Address:** 0xE27890A9F122c6DF6F27a6Fb92970334777016Dd

## Project Overview

### Overview

Donut is a cross-chain bridge of Steem Blockchain and Polkadot, aiming at building Steem 2.0 on Polkadot（Including SMTs, Smart Media Tokens). On Donut,
the communities and parachains on Polkadot ecosystem can build their own incentive social media platforms and support community building and social interaction by providing community token rewards.

We will build a cross-chain bridge blockchain network Donut Chain based on Substrate. Since there is no guarantee that it will win the Parachain slot auction, Donut Chain will operate in Solo mode by default. Donut Chain will implement the cross-chain bridge related logic in the runtime pallet, combined with the relayer module under the chain to realize the two-way exchange of assets in the STEEM network and assets in the Donut Chain. 

When Donut Chain operates as a parachain, it can directly transfer funds across chains with other parachains through the XCM protocol.  
Finally, Donut Chain will serve as a bridge linking polkadot and Steem ecology, allowing polakadot ecological projects to build their own social modules in the Steem network.

It is necessary to establish a social media system that is based on encryption technology and not on the credit of third-party platforms. And rely on economic mechanisms to build a strong decentralized P2P network to coordinate network participants, so that any group can create incentives and open rules of social media, group members communicate with each other without the need for a third-party platform to make decisions for us. 
Open and neutral protocols can marginalize the decision-making power of the third-party centers and return data control rights to users, allowing users to obtain better privacy and security and to regard themselves as active producers and participants in creating value.

The main change that such Social Media will bring to the world is that it will set new standards for content pricing and fair distribution of rewards, and change the way the Internet operates, so that actual users and real content creators will get the corresponding rewards for their work. It will become a new infrastructure for content-based pricing and distribution on the Internet of Value and establish a fairer and more balanced open Internet-Web3.0 by allowing everyone to have ownership in the new attention economy.
Every community needs such Social Media to promote community building and social interaction.

### Project Details

 - Link of Mockups/designs of any UI components

See our [test web page](https://donut.nutbox.io)

 - API specifications of the core functionality

API spec of Donut chain pallets

```sh
enum ProposalStatus {
  Created,
  Passed,
  Executed,
  Rejected,
  Cancelled
}​

struct Proposal {
    ​ProposalStatus status
    ​uint8 ayeVotes
    ​uint100 ayeVoteBits
    ​uint64 sequence
    ​bytes32 extrinsicHash
}
```
#### Pallet dispatches

|           Dispatches          |                                                    Description                                                     |
|:----------------------------:|------------------------------------------------------------------------------------------------------------------|
| pallet_bridge.addRelayer     | Add a reayer, sudo only. Relayer is substrate account                                                              |
| pallet_bridge.removeRelayer  | Remove a reayer, sudo only. Given the reayer address to be removed                                                 |
| pallet_bridge.voteProposal   | Vote a proposal, relayer only. When proposal's "aye" vote exceed threadhold, proposal wold be marked as executable |
| pallet_bridge.executProposal | Execute a proposal, relayer only. Only after a proposal was marked as executable, it can be executed               |
| pallet_bridge.cancelProposal | Cancel a proposal, relayer only.                                                                                   |
| pallet_asset.handleProposal  | Bridge only, when execute proposal, bridge call this extrinsic to handle asset within the proposal                 |
| pallet_asset.transferToSteem | User call this extrinsic to transfer their DonutSteem to Steem account                                             |                                         |

#### API spec of Relayer

|        Interface       |                                       Description                                       |
|:----------------------:|---------------------------------------------------------------------------------------|
| block.verifyBlock      | Verify block of Donut chain and Steem, including header check, justification check etc. |
| block.processBlock     | Process block of Donut chain and Steem, got txs from block                              |
| tx.verifyTx            | Verify transction of Donut chain and Steem                                              |
| tx.processTx           | Process transactions and pick what we concern                                           |
| listener.pollingBlocks | Polling new blocks from specific chain. New blocks would be handle by block module      |

 - An overview of the technology stack to be used

    - substrate - build donut chain(Rust/WASM)
    - pallet-balance
    - pallet-staking
    - pallet-xcm*
    - polkadot.js - interact with substrate chain(Javascript)
    - steem.js - interact with Steem blockchain(Javascript)
    - Docker

 - Documentation of core components, protocols, architecture etc. to be deployed
 
    All technical documents would be published at below
    https://docs.nutbox.io/donut/solve.html


#### The Fundamental Structure:

With the technology of cross-chain bridge, Donut connects assets on the Steem network and and the Steem assets on Donut network. The task of cross-chain bridge is supported by data vertification over original blockchain network, the function is similar to a light peer on the blockchain network. The cross-chain bridge is comprised by three factors:

- Sync block data on the Steem network (Block & Header)
- Process block data (validate and decode transaction)
- Submit the Deposit and the withdraw proof (Proposal) to runtime.

The issuing of DonutSteem requires its client to provide a Deposite proof. The Deposite proof is created when Donut's client deposit  his/her assets into the Donut delegation account. The Deposite proof include the transaction data signiture made by Donut cross-chain bridge. The Donut issue pallet on Donut vertifies the signiture of Deposite proof, which then be decode to Deposite MetaData.the later one includesthe amount of staking assets on the Steem blockchain and the public key of the account. After the vertification,  The Donut issue pallet on Donut will issue the DonutSteem with corresponding amount. 

The DonutSteem hold by client can request to redeem the assets on Steem at any time [Figure 3]. After a client instruct to destory amount of DonutSteem, Donut Asset Pallet on Donut will burn the same amount of DonutSteem and issue a Withdraw proof, which include signitures of both Donut Asset Pallet and the client. the data structure of the Withdraw proof is similar to the Deposite proof. After vertification of signiture information, the information will be decoded to a Withdraw MetaData. The later one comprised of the amount of asset and the public key of account. Later, the Steem bridge on Donut will send the specified amount of Steem asset into client account on Steem. 

See our github repo:

- [donut-chain](https://github.com/nutbox-dao/donut-chain)
- [donut-daemon](https://github.com/nutbox-dao/donut-daemon)

### Ecosystem Fit

As a cross-chain bridge between Steem and Polkadot, Donut will bring a decentralized Social Media module to the Polkadot ecosystem. Once Donut becomes a parachain, the Polkadot ecological projects can quickly create their own motivational Social Media platform with a simple call.

Both parachains/Dapp/Communities are our arget audience.

Nutbox provides Crowd-staking , DApp factory and DAO Governance factory as all-in-one solution to solve the communities' main pain points of high risk of community financing, high DApp development cost and low DAO Governance effect and help the communities on the PoS chain to easily create their Staking Economy platform and build DAO.

So far no similar project in Substrate/Polkadot/Kusama ecosystem.

## Team :busts_in_silhouette:

### Team members

* Name of team leader

Guazi

* Names of team members 

    - Guazi
        - An entrepreneur in blockchain industry
        - Token economy designer
        - The founder of Steem community of Chinese, Nutbox, WhereIN and Ooops
        - Translator of the Chinese version of《Bitcoin and Cryptocurrency Technologies》
    - WenFeng
        - Former core developer of BTG professional platform
        - Developer of Bitcoin, Ethereum, Polkadot 
    - Robert Yan
        - Technical director of global top big-data company
        - A researcher of open resource block chain
    - Xi Wang
        - 6 years of development experience in OC, Swift, etc.
        - Core developer of Nutbox, Ooops 
    - Zhibin Jiang
        - Familiar with development in Ethereum / Steem / Tron and other PoS chains
        - Core developer of Nutbox v1
    - Armonio Liang
        - Master of SWUFE and KTH
        - Former co-founder of Xianggu Tank
        - FRM
    - Sunny Zhang
        - A blockchain enthusiast
        - Founder of cocogo
        - Working experience in famous consulting company

### Contact

* **Contact Name:** Sunny Zhang
* **Contact Email:** contact@nutbox.io
* **Website:** https://nutbox.io

### Legal Structure

* **Registered Address:** No. 4226, 42nd Floor, Unit 1, Building 1, No. 500, Middle Section of Tianfu Avenue, Hi-Tech Industrial Development Zone, Sichuan Pilot Free Trade Zone,China
* **Registered Legal Entity:** Chengdu Ooops Technology Co., Ltd.

### Team's experience

- Wenfeng Wang (Blockchain Developer)

    - More than 5 years of experience in blockchain development;
    - Familiar with Dapp development on Substrate, Ethereum and Bitcoin platforms;
    - Participated in the development of well-known blockchain projects Phala Network and Bitcoin Gold

- Robert Yan (Blockchain Developer)
    - Rich experience in community development, such as Ethereum, Steem, Near, Polkadot, etc.
    - Development expert in the fields of DApp, R&D tools and data analysis system

- Xi Wang (Blockchain Developer)
    - 6 years of development experience in OC, Swift, etc.
    - Core developer of Nutbox, Ooops

- Zhibin Jiang (Blockchain Developer)
    - Familiar with development in Ethereum / Steem / Tron and other PoS chains
    - Core developer of Nutbox v1

- Guazi

    - 4 years of entrepreneurial experience in the blockchain industry
    - Participated in the development of WhereIN DApp, Aksai middleware, Ooops,Peanut, Nutbox based on Steem blockchain
        - WhereIN，a Steem-based image community (NO.2 in Steem blockchain DApp，NO.7 in the global social DApp）
        - Aksai，a WordPress plugin that can make any webpage become a DApp based on the Steem blockchain
        - Ooops，a Steem-based local Social Media
        - Peanut，a DeFi platform based on the Steem blockchain(The TVL exceeds 6 million SP and the market value is 3 million USD）
        - Nutbox，a Cross-chain Staking Economy and DAO Platform to help the communities on the PoS chain to easily create their own Peanut-like platforms

### Team Code Repos

- donut-chain  https://github.com/nutbox-dao/donut-chain
- donut-relayer  https://github.com/nutbox-dao/donut-relayer
- donut-interface https://github.com/nutbox-dao/donut-interface

### Team LinkedIn Profiles

None

## Development Status

- Simple Donut blockchain build with substrate. (done)
- Donut bridge pallets development (ongoing）
- Bridge Relayer of Donut-Steem chain（ongoing）

## Development Roadmap

### Overview

- Total Estimated Duration:  5 months
Full-Time Equivalent (FTE): 5 FTE)
Total Costs: 20k USD

### Milestone 1 — Build substrate chain and a simple relayer

- **Estimated Duration:** 2 month
- **FTE:** 5
- **Costs:** 8,000 USD

| Number |    Deliverable   | Specification                                                                                                                                                                                                                                   |
|:------:|:----------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License          | MIT                                                                                                                                                                                                                                             |
| 0b.    | Documentation    | 1) Publish documents on social media such as Medium/Twitter/Wechat to explain what is Donut and what we gonna do. 2) Provide documents and tutorial make people know how to run Donut chain node locally and how to participate in our testnet. |
| 0c.    | Testing Guide    | Writing documents on GitHub repo to give the developer the way how to test our code locally and run all substrate chain node and relayer. Also how to make contribution.                                                                        |
| 0d.    | Article/Tutorial | Articles would be published: 1) Donut - Connecting Steem to Polkadot 2) Why Steem needs Polkadot and why Polkadot needs Steem 3) How Donut Bridge Work   Tutorial would be published: 1) How To Run Donut Chain Locally                         |
| 1      | Donut Chain      | 1) Upgrade Donut chain from Substrate v2 to Substrate v3 2) Depoly Donut Chain as public testnet network                                                                                                                                        |
| 2      | Bridge Pallets   | We will implement the basic function of two pallets: 1) pallet-bridge - implementation of bridge logic, such as asset binding, proposal voting 2) pallet-asset - implementation of crosschian transfer between Donut chain and Steem network    |
| 3      | Relayer          | We will implement the first version of Relayer, that is the relayer can: 1) Listen blocks from Donut chain and Steem blockchain. 2) Parse transactions from blocks 3) Make a proposal to dest chain 4) Execute a proposal on dest chain         |
| 4      | Tools            | 1) We will build a docker image that developer can run Donut chain, Steem and Realyer in one single container. 2) Donut Faucet bot                                                                                                              |

### Milestone 2 —  Implement full functional bridge pallet and relayer

- **Estimated Duration:** 2 month
- **FTE:** 5
- **Costs:** 8,000 USD

| Number |    Deliverable   | Specification                                                                                                                                                                                                                                                                                                                                                                                 |
|:------:|:----------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License          | MIT                                                                                                                                                                                                                                                                                                                                                                                           |
| 0b.    | Documentation    | 1) Publish documents about the topology of Donut chain and relayer 2) Publish documents to describe the data flow of a crosschain asset swap                                                                                                                                                                                                                                                  |
| 0c.    | Testing Guide    | Continually writing documents on GitHub repo to give the developer the way how to test our code locally and run all substrate chain node and relayer.  Asset swap guide would be published at the same time                                                                                                                                                                                   |
| 0d.    | Article/Tutorial | Articles would be published: 1) Another Way To Bring Smart Contract to Steem Network   Tutorial would be published: 1) Steps To Run Donut Blockchain Testnet Validator 2) How To Swap Asset Between Donut Testnet and Steem                                                                                                                                                                   |
| 1      | Donut Chain      | The Donut Chain would have optimization on both consensus system and network. That means: 1) We would update consensus algorithm from PoA to PoS 2) Deploy batch of validators for our testnet 3) Open validators deployment to our community                                                                                                                                                 |
| 2      | Bridge Pallets   | The two pallets pallet-bridge and pallet-asset would become more security which contains following enhancement: 1) Validate transaction payload 2) Add sequence number to make sure transaction safely 3) Add Sudo functions and ensure permission between pallets                                                                                                                            |
| 3      | Relayer          | We will implement some import modules of Relayer, so far the relayer: 1) Support validate blocks and transactions 2) Have retry mechanism when transactions was failed 3) Query status of Proposal and show user the status on the web page 4 ) Healthy check of network and chain etc. 5) Configurable parameters 6) Blocks storage that can make relayer start from a specific block height |
| 4      | Tools            | We will create scripts that contains: 1) Build and deploy code 2) Generate substrate and Steem account keys of relayer 3) Make asset swap between Donut and Steem                                                                                                                                                                                                                             |

### Integrate parachain module into Donut chain

- **Estimated Duration:** 1 month
- **FTE:** 5
- **Costs:** 4,000 USD

| Number |    Deliverable    | Specification                                                                                                                                                                                       |
|:------:|:-----------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License           | MIT                                                                                                                                                                                                 |
| 0b.    | Documentation     | 1) By collecting the feedback of our testnet, we will write Q&A documents 2) More details about our implementation of the Donut chain and bridge                                                    |
| 0c.    | Testing Guide     | We would give the finnal unit test code and function test methods so that people can test all of the function of Donut and Relayer.                                                                 |
| 0d.    | Article/Tutorial  | Articles would be published: 1) Build A Social Module Of Your Project On Donut   Tutorial would be published: 1) Standard Hardware To Run Donut Validator 2) Standard Hardware To Run Donut Relayer |
| 1      | Donut Chain       | Support runing as parachain: 1) Support runing as a collator 2) Support making crosschain transfer with other parachian                                                                             |
| 2      | Parachian Pallets | Integrate parachain and crosschain relevant pallet into Donut chain, such as pallet-xcm-handler, pallet-xcm-transactor, etc.                                                                        |
| 3      | Relayer           | Following the latest Substrate update and Steem update. Support Runing multi-relayer for bridge and set threadhold                                                                                  |
| 4      | Tools             | Implement batch of commands that help developer and user interact with Relayer such as query status of Realyer and Proposal                                                                         |


## Future Plans

#### Short term plans

- Integrate EVM contract pallet or Ink contract pallet
- Offchain Worker based relayer implementation

#### Long term plans

- Join in Polkadot/Kusuma parachain auction
- Build an open media platform on Donut chain that people can wirte article, post on Donut chain and got rewards from people's upvote
- Build NFT market that people can create and exchange their digital asset on Donut chain 

## Additional Information :heavy_plus_sign:

* How did you hear about the Grants Program?** 

We heard from a team member that the team member was deeply involved in the development of the Polkadot ecological project.

* Work you have already done.

First, our team previously developed WhereIN, Aksai middleware and Ooops based on the Steem blockchain, which laid a solid foundation for the development of Donut. Second, Nutbox, which was developed in August 2020, will be deeply integrated with Donut to provide services for DAO.
