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

Web3 Bazaar endgame is to provide a fully decentralised platform that enables P2P trades of all assets on-chain and between any blockchain or network. We want to make sure that not every asset is dependent on Liquity Pools and that there's no vector of attack for P2P trades.
The test version of the dApp and the smart contract V1 is already live and anyone can enter and test it out through the [Website](https://web3bazaar.org) or fully on-chain, interacting with the [smart contract](https://mumbai.polygonscan.com/address/0x670bc34b16e0994fd64D90F127fDe38c0f1Afb83#code).
The Bazaar is fully open-source and all its code can be verified in our Github or on-chain and we intend to keep it open to all, free to use and KYCless forever,

**Here's a sneak peak into what it looks like to create a trade in the bazaar:**

![image](https://user-images.githubusercontent.com/92461670/167898841-f52728c8-475e-49d7-b8d2-4eae4ede0608.png)


### Ecosystem Fit

Web3 Bazaar is the multi-chain non-custodial P2P exchange of the Metaverse. We aim to make it possible for Web3 users to swap any asset with anyone independently of market liquidity or infrastrcuture.
We're starting by addressing EVM compatible chains and especially gaming and DeFi projects with intensive P2P activity. Most activity in this area comes from chains such as Polygon, BSC and Avalanche.

However, Polkadot parachain activity in this sector is rising as well and that's the next ecosystem we're targetting (see Milestone 2 in this project). The first contact with the ecosystem will occur on the 1st Milestone through the deployment of our smart contracts in the [MoonBeam](https://moonbeam.network/) chain (Polkadot's EVM compatible parachain preparing the ground for an easy adaptation for Polkadot's exclusive deployments.

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
This is a fully-open source project with a treasury funded only through gratns and donations. There's no legal structure and there was never a company incorporation.

### Team's experience

S3mz is a Biz Dev and PM in the tech industry for more than 10 years. He fell down the  web3 rabbit hole back in 2017 but started building in 2021 only, kickstarting a few side projects such as [Strio](https://strio.xyz), a decentralised protocol for Creators. Met Dr.Brown at Strio DAO and both matched their obsession with self-sovereignty, starting to pursue it 100% by building the Web3Bazaar first.

Dr. Brown is a Backend and Solidity dev for more than 5 years after working alone building DeFi optimisation tools he met S3mz at Strio DAO, where he designed its protocol and from then on both matched their obsession with self-sovereignty, starting to pursue it 100% by building the Web3Bazaar first.

0xVallados is a frontend and Web3 for 2+ years, after contributing to some projects and DAOs such as Strio where he met S3mZ and Brown. He's main focus in life is to create easy tools for people to keep their self-sovereignty. 

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
| 0b. | Documentation | We will provide inline documentation, techinical documentation of the code of the smart contracts and dApp features and a basic **tutorial** that explains how a user can interact with the Bazaar. |
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
| 0b. | Documentation | We will provide inline documentation, techinical documentation of the code of the smart contracts and dApp features and a basic **tutorial** that explains how a user can interact with the Bazaar. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a series of articles that explains what was done as part of the grant as well as user guides and partnerships announcements
| 1. | Smart contract| We will deploy the Bazaar escrow smart contract on Polkadot, Kusama, and other ecosystem parachains with significant NFT and DeFi activity. |  
| 2. | dApp interface | We will adapt the dapp to support Polkadot wallet authentication and the interaction with the ecosystem chains |  
| 3. | Audits | We will audit the smart contracts deployed |  
| 4. | Community | We will be onboarding 10+ projects to list their smart contracts and assets and get a verified checkmark on the Bazaar frontend. |  


## Future Plans

Our growth strategy is focused on promoting the Bazaar next to gaming and DeFi project owners as the tool to safeguard the P2P trades of their communities. By listing with us they get a "verified" checkmark on their assets within the Bazaar frontend and we expect them to co-promote us within their community and bring most of the users to the platform.

Core team's goal is to keep working on the development of the Bazaar, increasing the number of users, listed projects and funds in the treasury. We aim to build a fully open-source community of contributors that becomes self-sustainable through donations and when that happens we will step down from a leading role, 


## Additional Information :heavy_plus_sign:

### Use of proceeds:

- Audits - 50%
- Marketing and partnerships - 25%
- Core team and contributor rewards - 25%


