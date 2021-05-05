# W3F Open Grant Proposal

* **Project Name:** Web3Games
* **Team Name:** Web3Games
* **Payment Address:** 0xEb5931a175b836f87F4DdEea8E9987076d8bf7CC

## 1-Project Overview :page_facing_up: 

### 1.1 Project Description

Web3Games is a new generation gaming ecosystem built on Substrate.

By adopting blockchain technology, leveraging virtual gaming and NFT, we offer solutions that build the new ecosystem for blockchain gaming and collectibles - from framework to tools - whereby users as 'developers' can curate their own integrated gaming experience.



Project  website  https://web3games.org/

Project Public testnet https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fsubstrate.org.cn%3A4443#/settings



### 1.2 Project Background

起源于Polkadot Hackathon的Web3Games
Web3Games是一个诞生于首届官方 Substrate 开发者  Polkadot 黑客马拉松创业大赛的项目，团队成员结识于 Parity 与 OneBlock+ 社区共同主办的Substrate课程。Web3Games战队是一群来自以太坊、EOS等不同的区块链开发者们组队而成，建构波卡游戏生态的项目，Web3Games在33支队伍中成功晋级决赛DemoDay，并在决赛中获得最受开发者欢迎奖。

### 1.3 Project Integrated

SubGame is based on the Substrate 3.0 Framework.我们通过编写大量跟NFT,DEFI相关的pallet集成到我们的Web3Games链上对外暴露功能，并制作相应的前端与模块交互集成降低用户的使用门槛，除此之外我们也开发了专注于游戏的合约标准库作为二层技术栈开放给区块链游戏开发者使用。通过使用官方提供的Front EVM兼容桥，开发者可以同时使用ink,solidiry去编写合约部署到我们的Web3Games网络，并使用3.0带来的链扩展功能调用我们的链上集成功能。

### 1.4 Project Interest

我们的团队成员大部分均来自于区块链一线开发人员与游戏制作人员，Substrate赋予开发者极高的自由度，我们发现游戏领域特别适合在Substrate上建造。

### 1.5 Project Details 

Web3Games项目包含Web3Games节点，W3G-Integration Framework，W3G-Game Example.

![](https://gitee.com/Tansh_vip/images/raw/master/3.png)



- **Web3Game Test** 目前已经上线到Polkadot js app,它是一条基础链，在上面搭载了很多的自研Pallet和游戏合约标准库。
- **Pallet Library** 它是Web3Games作为链上Pallet开发的核心集成库，对外暴露高性能接口。
- **Game Contract Library** 区块链游戏研发必备的智能合约库，标准里有合约模板以及未来标准提案。
- **Game Product** 通过 W3G-Integration Framework 开发的游戏，Web3Games已经提供了相关的游戏示例。
- **W3G-Integration Framework** 它完整的包含了区块链游戏开发所需的脚手架，可以从0-1快速开发一个关于区块链游戏产品的项目。

### Ecosystem Fit 

* 首先Web3Games通过Substrate构建的，作为承载游戏和对应数字资产而设计的下一代区块链，不管是游戏开发者，玩家亦是传统区块链开发者及用户都是整个Web3Games中的一员，通过Web3Games开发的技术工具可极大的降低区块链游戏开发的门槛以及提高玩家的产品体验感受。在所有的区块链生态系统没有完全跟我们一样的项目，不同于其他的生态上的相似项目Web3Games是高强度执行力著称以及研发为导向的基础设施和标准建设项目，Web3Games希望通过完成所有的路线图，去推动下一代数字游戏的发展并迎接Web3的到来。

## 2-Team :busts_in_silhouette:

### Team members
* Name of team leader
Henry Liu
* Names of team members
KK Chen
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

**KK Chen**   

   -  Full-stack Developer   
   -  ebay Software Engineer before
   -  Has plenty of experience in Software Development and Product Design    
   -  Currently focused on  Blockchain Development 

**Xueshan Wong**

   -  Front-end Developer
   -  Smart Contract Development Engineer
   -  Has plenty of experience in Defi 
   -  Currently focused on  Blockchain Development and Cross-chain Technologies 

### Team Code Repos
* https://github.com/web3gamesofficial

### Team LinkedIn Profiles
* KK Chen https://www.linkedin.com/in/bichenkk/
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

- 我们希望在未来几个月内陆续完成我们的官方媒体渠道搭建以及社区建设
- 于此同时开展前期的市场预热去分发我们即将上线的游戏NFT

### 4.2Development Plans

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

