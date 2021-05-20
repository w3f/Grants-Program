# W3F Open Grant Proposal

* **Project Name:** Web3Games
* **Team Name:** Web3Games
* **Payment Address:** 0xEb5931a175b836f87F4DdEea8E9987076d8bf7CC

## 1-Project Overview :page_facing_up: 

### 1.1 Project Description

**🎮 Bridging gaming with NFT and DeFi**

We are building a new generation gaming ecosystem. By adopting blockchain technology, leveraging virtual gaming and NFTs, we offer solutions that build a unique network — from framework to tools — whereby users as ‘developers’ can curate their own integrated gaming experience.

**The potential of NFT＋DeFi＋Gaming**
* Expanded use of NFT with increased interactive functions
* Converting of gaming assets into blockchain assets
* Embedding DeFi elements into a gaming ecosystem

**What We Do**

🎮 Blockchain Games

Metaverse blockchain games utilising existing NFTs

⛓ Chain Development

Blockchain for gamers and collectors based on Substrate, providing NFT curation ability with cross-chain bridges.

🛠 Toolkit/SDK

Provide SDK & tools for developers, including digital asset standard libraries and different integrations

🏪 Digital Asset Apps

We build platforms to facilitate trading such as NFT AMM, NFT Marketplace, Auction Platform, etc.

> Website  https://web3games.org/

> Testnet https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fsubstrate.org.cn%3A4443#/settings
>
> YOUTUBE https://www.youtube.com/watch?v=3PIXF1Sa5L0 【important !】
>
> OR Google drive https://drive.google.com/file/d/167bwKm7SyP95FR5SMhNZGQ-R5Tv39NTZ/view?usp=sharing

### 1.2 Project Background

##### Started from Polkadot Hackathon

The Web3Games team is formed of blockchain engineers with a mission to build a new game ecosystem on Polkadot. The core team met during a Substrate course co-hosted by Parity and OneBlock+, and competed against 33 other teams at the Polkadot Hackathon Demo Day to receive the Developers’ Choice Award.

### 1.3 Project Integrated

Web3Games is based on the Substrate 3.0 Framework. We built numbers of pallets with NFT and DeFi and deployed on our Web3Games Testnet. Besides the substrate-based network, we also provide frontend and backend game client intergration libraries for players to kickstart the blockchain gaming journey easier. For developers, we open source all our contract libraries. Through the Front EVM bridge, developers can also write contracts with Ink or Solidity and deploy to our network, bringing Web 3.0 cross chain features.

### 1.4 Project Interest

Our team is built from experienced blockchain and game developers. With highly tailor made features in Substrate, blockchain gaming can be implemented much easier and provide a better environment for players.

### 1.5 Project Details 

Web3Games includes Web3Games Chian,Web3Games SDK.

![](https://web3games-public.oss-ap-northeast-1.aliyuncs.com/project-diagram.png)

- **Web3Game Chain** Already live on Polkadot.js App. We deployed all our pallet and contracts on it for development and testing purposes.
- **Game Product** Developed with Web3Games SDK. For demo and tutoral purposes.
- **Web3Game SDK** Help developers quickly develop blockchain games.

### Ecosystem Fit 

* Web3Games is built based on Substrate, aiming to become the collective blockchain for gaming and digital collectibles. For players, we provide more user-friendly blockchain games. For developers, we provide demo games for reference and development toolkit/SDK to lower the entry barrier of creating digital assets and provide blockchain servies. We would like to complete our roadmap and build the gaming ecosystem for the community in Web 3.0.

### Content Detail

##### Different from other projects【Pallet】

##### Project Advantages (Already Achieved)

The Web3Games GameSwap is designed precisely for gaming assets, and the Swap function module can be implemented right after unboxing. GamesSwap currently supports FT and NFT exchange, namely in-game content and assets, on-chain FT or NFTs. It can act as a DeFi tool to enable efficient circulation of gaming assets, for instance, by establishing a liquidity pool or liquidity providers for value mapping within the Web3Games ecosystem. By opening up the game economy to GameSwap, players will automatically deposit liquidity into the ecosystem and help maintain its stability. 

1. Safer assets - conventional projects store players’ assets by deploying smart contracts, but once rollback occurs caused by contract problems on Substrate or other chains, such as contract attacks, logic programming issues, insufficient gas, abnormal network connection, Web3Games’ smart contract library and through chain extension lets the contract directly apply on-chain pallets to store assets on the chain. GameSwap is not affected by common contract problems, as it uses players’ assets on the chain for transactions to solve atomic swaps. Web3Games has also developed a mobile liquidity pool for users who need to swap their assets to deposit without incurring contract rollback, thereby ensuring transaction consistency and security. 

   

2. Lower transaction fees (higher performance from faster reading time)As mentioned, Web3Games contracts use on-chain pallets to store assets on the chain itself, so that during I/O contracts do not need to relay information back through the Contract Pallet. Reducing this step improves operational efficiency, and is equivalent to using weight rather than increasing gas. The more complicated the contract and in high frequency trading, the greater the reduced fees. This is a strong advantage of Swap, which enables the exchange economy within Web3Games and is a feature of the ecosystem’s blockchain games. 

   

3. Multicurrency support Inspired by other projects, GameSwap realized a multi-currency exchange function where game devs can establish value mapping between their game token and the Web3Games ecosystem. At the same time, the game token can also be value mapped with other ecosystems like Polkadot, allowing players to easily exchange their assets for other tokens. 

   

4. Cross-Chain GameSwap (To Be Achieved)Web3Games is equipped with a compatible bridge, currently the EVM for contract development, in a way similar to layer 2 networking. In the near future, transfer codes will be solved by using Solidity contracts to manipulate pallets on Substrate. Through Substrate’s intervention on the parachain, the XCMP can be used to complete cross-chain capabilities by developing different compatible transcoding. (Transcoding refers to converting to WASM or IR compiling to WAS M)

   

Token palletDifference from ERC20, 721, 1155, 1808 and other similar protocolsWeb3Games has its own complete token interface to facilitate most protocol implementation requirements without needing to deploy the same contract code on the chain, by adjusting parameters and avoiding misusing storage space on the chain. To meet the need for customization, we have opened up the contract library for niche implementations and experimental projects. The token pallet has already realized most of the interfaces as an open source for developers and users. 

1. Higher performance (initially executed with pallet Wasmtime, now contracts are using wasmi)We developed the layer 2 network through chain expansion and the contract library. The pallets allow contracts to be deployed using expansion codes so that developers do not need to code themselves.
2. Convenient integrated contractsIn our Token Pallet and Swap there is an instance code, which allows each game to deploy just one token contract to manage all FT and NFTs used in the game. The code is unique and only the person who deployed it can exercise authority. 



The Web3Games SDK includes all development files, project documents, tools, and libraries. Anything related to development of the ecosystem or the chain including tutorials and faucets can be found there. The core component SubGat, a blockchain game development framework is also within, which helps integrate login systems, registration of wallets, content creation, and backend portal support. It is used for I/O logic, chain link processing, authorization and different game editors to quickly interact with the chain. Configuration paths, layout mode, and other integration details are bundled. There is also a game server template, which specifies the management logic for the backend portal, data calculations, and log records. Finally, the Web3Games contract library and game examples are also part of the SDK. Unlike other similar projects, the Web3Games SDK is meant to be a full kit for building blockchain games. 



Attach some pictures

![](https://web3games-public.oss-ap-northeast-1.aliyuncs.com/Web3Games-chain.png)

![](https://web3games-public.oss-ap-northeast-1.aliyuncs.com/dex.png)

![](https://web3games-public.oss-ap-northeast-1.aliyuncs.com/Faucet.png)

![](https://web3games-public.oss-ap-northeast-1.aliyuncs.com/demo-game-1.png)

![](https://web3games-public.oss-ap-northeast-1.aliyuncs.com/pallet.png)

### Team members

* Name of team leader
Henry Liu
* Names of team members
Xueshan Wong
Joan Ma

### Contact
* **Contact Name:** Xu Peng
* **Contact Email:** xupeng@web3games.org
* **Website:** https://web3games.org

### Legal Structure 
* **Registered Address:** 306 Victoria House, Victoria, Mahe, Seychelles
* **Registered Legal Entity:** Web3Games Limited

### Team's experience
**Henry Liu**

   -  Full-stack Developer   
   -  Polkadot Technical Ambassador 
   -  Has plenty of experience in Software Development and Blockchain Development   
   -  Game Developer and Game Producer

**Xueshan Wong**

   -  Front-end Developer
   -  Smart Contract Development Engineer
   -  Has plenty of experience in Defi 
   -  Currently focused on  Blockchain Development and Cross-chain Technologies 

### Team Code Repos

https://github.com/web3gamesofficial

#### Web3Games Chain

* https://github.com/web3gamesofficial/web3games-blockchain

#### Web3Games SDK

* https://github.com/web3gamesofficial/web3games-contract-library
* https://github.com/web3gamesofficial/web3games-web-template-react
* https://github.com/web3gamesofficial/web3games-web-server-template-rust
* https://github.com/web3gamesofficial/web3games-game-client-template
* https://github.com/web3gamesofficial/web3games-game-sever-template
* https://github.com/web3gamesofficial/web3games-game-example-1
* https://github.com/web3gamesofficial/web3games-faucet
* https://github.com/web3gamesofficial/web3games-faucet-server

### Team LinkedIn Profiles
* Henry Liu https://www.linkedin.com/in/henry-liu-80576a187/
* Xueshan Wang https://www.linkedin.com/in/xueshan-wang-01a406208/
* Joan Ma https://www.linkedin.com/in/joan-ma-1793b1208/

## 3 Development Roadmap 🔩

### 3.1 Overview

- **Total Estimated Duration:** 1 month

- **Full-time equivalent (FTE):** 3

  - **Total Costs:** 25000DAI

### 2021 Q2 Milestone 1 — Web3Games Testnet (Provide foundation modules)

  - **Estimated Duration:** 1 month
  - **FTE:** 1.5
  - **Costs:** 5000DAI

| Number | Deliverable   | Specification                                                |
| ------ | ------------- | ------------------------------------------------------------ |
| 0.a    | License       | MIT                                                          |
| 0.b    | Documentation | Provide documents containing the description of whole architecture design for Web3Games |
| 2      | Token Pallet  | Provide a token generation module through which developers and users can generate FT or NFTs assets, and whether it is a module or a contract, the asset data under this module can be directly called |
| 3      | Swap Pallet   | A module that provides token exchange functions. Users or developers can exchange FT-type NFTs-type assets through this module. This module and Token are highly closely related. At the same time, this module supports multi-currency exchange FT, and NFTs also supports FT. Exchange NFTs back to other multi-currency such as DOT, KSM, etc. |
| 4      | Uint Test     | Provide unit tests for the current development modules, including functional tests, stress performance tests, and issue test results |
| 5      | Front-End     | Provide front-end product pages corresponding to Token and Swap modules to facilitate developers and users to quickly use these functions |

### 2021 Q3 Milestone 2 — Web3Games  SDK (Middleware for developers and users)

  - **Estimated Duration:** 1 month
  - **FTE:** 1.5

    - **Costs:** 5000DAI

    | Number | Deliverable        | Language/Framework           | Specification                                                |
    | ------ | ------------------ | ---------------------------- | ------------------------------------------------------------ |
    | 0.a    | License            | Text                         | MIT                                                          |
    | 0.b    | Documentation      | Text                         | Provide Web3Games SDK overall concept description            |
    | 1      | Faucet             | NextJs/TypeScript            | Provide testnet faucets for developers and users to obtain testnet tokens for development testing and basic transfer functions through the front-end page of the faucet, and develop corresponding back-end service applications to provide basic data support and interfaces |
    | 4      | GameExample        | Cocos/TypeScript             | Provide complete, simple, easy and quick game cases, and disassemble the game process to write corresponding notes at each step of the operation, for developers to quickly get started and write their own blockchain games |
    | 5      | Contract Library   | NextJs/TypeScript            | Provides a game contract standard library for developers to customize their own game contracts. The contract library contains different types of contract examples, such as the implementation of simple ECR1155 in Substrate, and Web3Games’s self-developed game contract standards and those that can interact with modules on the chain. Game contract standards. |
    | 6      | Template framework | React/Rust/NodeJs/TypeScript | Provide a framework for developing blockchain game projects, for games or ordinary developers can use this framework to quickly develop blockchain games in a short period of time, including 1-game website front-end template, 2-game website back-end service support , 3-blockchain game client template, 4-blockchain game real-time server template |

  ### 2021 Q4 Milestone 3 — Web3Games Live Network (Addition of DeFi modules)

  - **Estimated Duration:** 2 month
    - **FTE:** 2.5
    - **Costs:** 15000DAI

| Number | Deliverable    | Specification                                                |
| ------ | -------------- | ------------------------------------------------------------ |
| 1      | Staking Pallet | Provides a pledge function, users and developers can pledge any project through this module to generate tokens through our token module, and lock it to a game project to obtain a certain amount of income or interest |
| 2      | Auction Pallet | Provide public auction and secret auction functions. Users can choose public bidding and start time including end time. The secret auction will hash the auction price and confirm at the end whether the highest price has been decoded. Each auction will return the previous person’s bid |
| 3      | Lend Pallet    | Provide a lending module, through which users can lend their NFT assets to the lending pool, other users can pay the lending price, and the lending user must repay the loan within a fixed time after receiving the loaned funds and get the money back Otherwise, the NFT assets will be sent to the user who paid the loan price at the last time of the outstanding payment. |
| 4      | Node           | Package all completed functional modules and construct main network-level nodes to provide public networks and corresponding main network front-end interfaces |
| 5      | Uint Test      | Provide complete function test, pressure performance test, and issue test result report |
| 6      | Front-End      | Provide a visual front end to facilitate users and developers to use the functional modules on the chain of Staking, Auction, and Lending |
| 7      | Docker         | We will provide a dockerfile to demonstrate the full functionality of our chain and front end |

## 4-Future Plans

### Marketing and Community Plans

Twitter https://twitter.com/web3games
Latest project developments and news will be available on our Twitter.

Medium https://medium.com/web3games
In the meantime, we will be sharing our insights on NFTs and blockchain advancements in gaming. We are also writing tutorials that teach users to use our contract libraries and components to create tokens and build games.

WeChat & Telegram
After launching our first demo game, there will be game token / NFT airdrops for community members in our official WeChat and Telegram groups.

**Future Plans**
* Incentivize gaming economy growth by giving players permanent asset ownership on blockchain
* Drive mainstream adoption for GameFi – DeFi elements and utilities for digital gaming assets
* Develop two demo games, Crypto Empire and Constellation
* Increase crypto user interest and awareness about our NFTs and projects
* Provide open-source project source code for everyone to learn and share together

**Demo Games**

**CryptoEmpire**

![](https://web3games-public.oss-ap-northeast-1.aliyuncs.com/cryptoempire-logo-web3-grant.png)

Battle your opponents using strategic card combinations to build your crypto empire. With access to multiple gaming worldviews, players can alternate between their assets on different networks without relying on a centralized developer, and take full ownership of all aspects of gameplay. A trading card game uniting NFTs, DeFi, soon to be available on Ethereum, NEAR, BSC, and Solana. The dApp will be released in 2021 Q2 and the game client in 2021 Q3-Q4.

**Constellation**

![](https://web3games-public.oss-ap-northeast-1.aliyuncs.com/constellation-logo-web3-grant.png)

Curate your own spacecraft using digital assets, NFTs, and collectibles from your wallet address. A proud owner of CryptoKitties? Invite your pet to join your mission to explore the galaxy! Have a unique OG CryptoPunk? Use your character as your avatar image! Astronauts of Constellation can also explore neighboring stars and visit other spaceships. Inspired by Nintendo's "Animal Crossing".


### 4.2 Development Plans

- Stage 1
  - Blockchain Game Launch【The first commercial-grade example game By Web3Games 】
  - Digital Asset Application Development (AMM, Marketplace, Auction) Launch 【Complete product front-end development】 
- Stage 2
  - Blockchain Game SDK 【The necessary middleware for blockchain games】
- Stage 3
  - Web3Games Mainnet 【Live network】
- Stage 4
  - Cross-chain Integration 【Via a backward compatibility bridge such as Ethereum】


## Additional Information :heavy_plus_sign: 

  - **Are there are any teams who have already contributed (financially) to the project?** No

  - **Have you applied for other grants so far?** No

  - **Unlike SubGame, we provide the necessary framework and tools for developers to curate their own gaming experience with embedded DeFi elements**
