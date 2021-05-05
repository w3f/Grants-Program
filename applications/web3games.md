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

### 1.2 Project Background

** Started from Polkadot Hackathon

The Web3Games team is formed of blockchain engineers with a mission to build a new game ecosystem on Polkadot. The core team met during a Substrate course co-hosted by Parity and OneBlock+, and competed against 33 other teams at the Polkadot Hackathon Demo Day to receive the Developers’ Choice Award.

### 1.3 Project Integrated

SubGame is based on the Substrate 3.0 Framework. We built numbers of pallets with NFT and DeFi and deployed on our Web3Games Testnet. Besides the substrate-based network, we also provide frontend and backend game client intergration libraries for players to kickstart the blockchain gaming journey easier. For developers, we open source all our contract libraries. Through the Front EVM bridge, developers can also write contracts with Ink or Solidity and deploy to our network, bringing Web 3.0 cross chain features.

### 1.4 Project Interest

Our team is built from experienced blockchain and game developers. With highly tailor made features in Substrate, blockchain gaming can be implemented much easier and provide a better environment for players.

### 1.5 Project Details 

Web3Games includes Web3Games nodes, W3G-Integration Framework，W3G-Game Example.

![](https://web3games-public.oss-ap-northeast-1.aliyuncs.com/web3grant-project-structure.png)

- **Web3Game Testnet** Already live on Polkadot.js App. We deployed all our pallet and contracts on it for development and testing purposes.
- **Pallet Library** Provide interfaces to other components.
- **Game Contract Library** Provide contract template and protocol standard for blockchain gaming.
- **Game Product** Developed with W3G-Integration Framework. For demo and tutoral purposes.
- **W3G-Integration Framework** Provide boilerplate for blockchain game developers.

### Ecosystem Fit 

* Web3Games is built based on Substrate, aiming to become the collective blockchain for gaming and digital collectibles. For players, we provide more user-friendly blockchain games. For developers, we provide demo games for reference and development toolkit/SDK to lower the entry barrier of creating digital assets and provide blockchain servies. We would like to complete our roadmap and build the gaming ecosystem for the community in Web 3.0.

## 2-Team :busts_in_silhouette:

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
* https://github.com/web3gamesofficial

### Team LinkedIn Profiles
* Henry Liu https://www.linkedin.com/in/henry-liu-80576a187/
* Xueshan Wang https://www.linkedin.com/in/xueshan-wang-01a406208/
* Joan Ma https://www.linkedin.com/in/joan-ma-1793b1208/

## 3 Development Roadmap 🔩

### 3.1 Overview

- **Total Estimated Duration:** 2 month

- **Full-time equivalent (FTE):** 4.5

  - **Total Costs:** 0.45067BTC

  ### Milestone 1 — SubGat[W3G-Integration Framework]

  - **Estimated Duration:** 2 month
  - **FTE:** 3
  - **Costs:** 0.4BTC

  | Number | Deliverable                     | Specification                                                |
  | ------ | ------------------------------- | ------------------------------------------------------------ |
  | 0      | Licence                         | GPL3/Apache2                                                 |
  | 1      | Game-Website-Frontend-Framework | https://github.com/web3gamesofficial/SubGat-Game-Web-Template-Frame |
  | 2      | Game-Website-Backend-Framework  | https://github.com/web3gamesofficial/SubGat-Game-Web-Back-end-Server-Frame |
  | 3      | Game-Client-Framework           | https://github.com/web3gamesofficial/SubGat-Game-Client-Template-Frame |
  | 4      | Game-Backend-System-Framework   | https://github.com/web3gamesofficial/SubGat-Game-Real-Time-Server-Template-Frame |
  
  ### Milestone 2 — Web3Games-Testnet
  
  - **Estimated Duration:** 1 weeks
  - **FTE:** 3
  - **Costs:** 0.05BTC
  
  | Number | Deliverable         | Specification                                                |
  | ------ | ------------------- | ------------------------------------------------------------ |
  | 0      | License             | GPL3/Apache2                                                 |
  | 1      | Documentation       | Documents containing the description of whole architecture design for Substarte Game Chain【Web3Games】. |
  | 2      | update              | basic develop node from Substarte2.0 to Substarte 3.0 【change】 |
  | 3      | start               | aceess to start new Public Testnet  basic on Substarte       |
  | 4      | Add polkadot js app | commit the Node information to Polkadot js App 【Web3Games】 https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fsubstrate.org.cn%3A4443#/settings |
  | 5      | Frontier            | success add Ethereum-compatible  basic bridge  pallet  on Substarte3.0 node Web3Games Public Testnet |
  | 6      | EVM                 | Modify creation configuration,solidity contract can be use in Web3Games |
  | 7      | metamask            | metamask web pocket and mobile pocket can be use in Web3Games |
  | 8      | pallet              | add some ORML pallet in Web3Games                            |
  | 9      | Contract            | add game contract library https://github.com/web3gamesofficial/SubGat-Game-Contract-Library |
  
  ### Milestone 3 — Substrate Game SDK
  
  - **Estimated Duration:** 3 days
  - **FTE:** 1
  - **Costs:** 0.00067BTC
  
  | Number | Deliverable | Specification                                                |
  | ------ | ----------- | ------------------------------------------------------------ |
  | 1      | Home page   | finish V0.1 http://sdk.substrate.org.cn/                     |
  | 2      | Faucet      | get public testnet coin by Polkadot  Js  http://sdk.substrate.org.cn/post/Faucet |
  | 3      | Learn       | Learn how to develop blockchain games on Substarte Game Chain! |
  | 4      | Developer   | Quickly access blockchain games through our SDK toolkit.     |
  | 5      | Contact     | Contact us page                                              |

- ### Milestone 4 —  Game Product [Example]

  - **Estimated Duration:** 18 days
  - **FTE:** 1
  - **Costs:** 0.01BTC

  | Number | Deliverable     | Specification                                                |
  | ------ | --------------- | ------------------------------------------------------------ |
  | 1      | Deep Sea Hunter | finish  https://github.com/web3gamesofficial/Deep-Sea-Hunter-Webgame-example1 |



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
  - W3G Mainnet 【Live network】
- Stage 4
  - Cross-chain Integration 【Via a backward compatibility bridge such as Ethereum】


## Additional Information :heavy_plus_sign: 

  - **Are there are any teams who have already contributed (financially) to the project?** No
  - **Have you applied for other grants so far?** No

