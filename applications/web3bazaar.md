# W3F Grant Proposal

- **Project Name:** Web3 Bazaar
- **Team Name:** Web3 Bazaar
- **Payment Address:** 0x453b719D4E8A663C11C21cEe225649527083a758 (ETH)
- **Level:** 2 

## Project Overview :page_facing_up:

### Overview

The Web3 Bazaar is a peer-to-peer exchange for Web3 assets supported by an escrow smart contract that allows for swaps between any ERC-20 or NFT token between counter-parties that have already agreed to terms.
The Web3 Bazaar connects an easy to use dApp interface with escrow smart contracts that enable the on-chain establishment of trade terms and ensure both parties possess and swap the intended assets in a non-custodial manner.
The Bazaar was built to support P2P trades from all assets on all chains and to provide a safe haven for trustless trades between unknown parties. The Bazaar was built by 3 frens who are active members of the gaming NFT and DeFi space and decided to build it after seeing the explosions in P2P trading scams within Discord groups and subreddits.We're a group of devs deeply worried that our ability to do anonymous P2P trades will soon be a high-priority target by governments and other malificent actors therefore we're trying to give it our best to use this window of opportunity and build the tools that will be impossible to target before its too late.


### Project Details

Web3 Bazaar endgame is to provide a fully decentralised platform that enables P2P trades of all assets on-chain and between any blockchain or network. We want to make sure that not every asset is dependent on Liquity pools and that there's no vector of attack for P2P trades.
The test version of the dApp and the smart contract V1 is already live and anyone can enter and test it out through the [Website](https://web3bazaar.org) or fully on-chain, interacting with the [smart contract](https://mumbai.polygonscan.com/address/0x670bc34b16e0994fd64D90F127fDe38c0f1Afb83#code).
The Bazaar is fully open-source and all its code can be verified in our Github or on-chain and we intend to keep it open to all, free to use and KYCless forever,

**Here's a sneak peak into what it looks like to create a trade in the bazaar:**

![image](https://user-images.githubusercontent.com/92461670/167898841-f52728c8-475e-49d7-b8d2-4eae4ede0608.png)


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?

Web3 Bazaar eng game is to be the multi-chain non-custodial P2P exchange of the Metaverse. We aim to make it possible for Web3 user to swap any asset with anyone independently of market liquidity or infrastrcuture.
We're starting by addressing EVM compatible chains and especially gaming and DeFi projects with intensive P2P activity. Most activity in this area comes from chains such as Polygon, BSC and Avalanche.

However, Polkadot parachain activity in this sector is rising as well and that's the next ecosystem we're targetting (see Milestone 2 in this project). The first contact with the ecosystem will occur on the 1st Milestone through the deployment of our smart contracts in the MoonBeam chain (Polkadot's EVM compatible parachain preparing the ground for an easy adaptation for Polkadot's exclusive deployments.

## Team :busts_in_silhouette:

### Team members

- [S3mz](https://github.com/orgs/Web3bazaar/people/S3mz)
- [Dr. Brown](https://github.com/orgs/Web3bazaar/people/drEmmetBrown85)
- [0XVallados](https://github.com/orgs/Web3bazaar/people/0xVallados)

### Contact

- **Contact Name:** S3mz
- **Contact Email:** s3mztube@gmail.com
- **Twitter:** https://twitter.com/unrealS3mz
- **Telegram:** unrealS3mz

### Legal Structure
This is a fully-open source project with a treasury funded only through gratns and donations. There's no legal structure and there was never a company incomporation.

### Team's experience

S3mz is a Biz Dev and PM in the Web3 for about 5 years. He's been mostly involved in Decentralised ID projects and recently started working on a few side projects such as [Strio](https://strio.xyz), a decentralised protocol for Creators.

Dr. Brown is a Backend and Solidity dev for more than 5 years after working with digital IDs and met S3mz. He most of all become very aware that we needed to start working on self-sustained P2P tools and since then has been siding with S3mz on Strio and Web3 Bazaar

0xVallados is a frontend and Web3 dev who will never give up his real ID. He's main focus in life is to create easy tools for people to keep their self-sovereignty. We know nothing about him except that he his still in college and that's the way way he wants to stay known.



### Team Code Repos

- [Web3 Bazaar Github](https://github.com/Web3bazaar)


## Development Status :open_book:

- dApp is live and open for beta testing:https://github.com/Web3bazaar/web3bazaar.github.io
- Smart contract launched on Mumbai testnet:https://github.com/Web3bazaar/bazaar-test-smart-contract

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months 
- **Full-Time Equivalent (FTE):** 5 FTE
- **Total Costs:** 40,000 USD

### Milestone 1 — EVM Mainnets Launch

- **Estimated duration:** 3 months
- **FTE:** 3
- **Costs:** 25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a series of articles that explains what was done as part of the grant as well as user guides and partnerships announcements
| 1. | Smart contract| We will deploy the Bazaar escrow smart contract on Top EVM compatible chains (Polygon, Moonbeam, Avanlanche, BSC, Aurora and Fantom) supporting all ERC-20, ERC-1155 and ERC-721 assets in individual or bundle transactions and in a non-custodial manner |  
| 2. | dApp interface | We will deploy an uodated and fine tunned version of the dApp that will support bundle transactions and checkmarked projects |  
| 3. | Audits | We will audit the smart contracts deployed on Mainnets  |  
| 4. | Community | We will be onboarding 10+ projects to list their smart contracts and assets and get a verified checkmark on the Bazaar frontend. |  


### Milestone 2 — Polkadot Mainnet Launch

- **Estimated duration:** 3 months
- **FTE:** 5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a series of articles that explains what was done as part of the grant as well as user guides and partnerships announcements
| 1. | Smart contract| We will deploy the Bazaar escrow smart contract on Polkadot, Kusama, and other ecosystem parachains with significant NFT and DeFi activity. |  
| 2. | dApp interface | We will adapt the dapp to support Polkadot wallet authentication and the interaction with the ecosystem chains |  
| 3. | Audits | We will audit the smart contracts deployed |  
| 4. | Community | We will be onboarding 10+ projects to list their smart contracts and assets and get a verified checkmark on the Bazaar frontend. |  


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.


## Additional Information :heavy_plus_sign:

### Use of proceeds


