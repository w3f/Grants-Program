# W3F Grant Proposal


- **Project Name:** Gafi Network - The Network of Game Finance
- **Team Name:** Cryptoviet
- **Gafi Paper:** https://gafi.network/GafiPaper.pdf
- **Wiki:** https://wiki.gafi.network/
- **Payment Address:** 0x7fD4b72d3Bf681C2e80D6076D7997B21DEf45130 (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:


### Overview

- Abstract

  The decentralized blockchain platform that built for blockchain games and high-frequency applications. Applications running on top of Gafi Network will never bother about the security, transaction fee, malicious accounts, and many other bad factors. They can just focus on gameplay, game experience, or application logic. The Gafi Network supports EVM (Ethereum Virtual Machine) that projects deploy from Ethereum or Binance Smart Chain to Gafi with little or no change.

- Thanks to Parity technologies
  
  Gafi Network is layer one that builds from the Substrate and is EVM compatible using [Frontier](https://github.com/paritytech/frontier).
  
- Motivating the Cryptoviet team

  As the current project titled [Heroes And Empires](https://heroesempires.com/) is running on Binance Smart Chain, mostly due to the scalability and the cost of operating, we build the platform for Heroes And Empires and many other NFT Blockchain Games.
  We have the experience of What NFT blockchain games need, Why we have to build Gafi Network, and How to build Gafi to solve the problems that current NFT games face when they run on Ethereum, BSC, or even Solana.
  
### Project Details


![Gafi Network Architecture](https://github.com/cryptoviet/he-chain-assets/blob/main/Gafi%20Network%20Architecture.jpg)


- **Gafi Architecture**:
  
  **Inside Players**: Players have to join Gafi Pool to get the privileges. When they are in the Gafi Pool, they won't bother about the transaction fee but they can only make the limited of discounted transactions that are handled by Gafi-TX, there are three different pool services [Upfront](https://wiki.gafi.network/learn/upfront-pool), [Staking](https://wiki.gafi.network/learn/staking-pool) and [Sponsored](https://wiki.gafi.network/learn/sponsored-pool). Please visit Gafi Wiki to get more information about [Gafi Network Structure](https://wiki.gafi.network/learn/gafi-network-structure) and [Gafi Pool](https://wiki.gafi.network/learn/gafi-pool). The Gafi Pool will ban 'bad' players with the Autoban mechanism.
  
  **Outside Player**: As a player outside Gafi Pool, you can do anything with no restrictions, but with the 'high' transaction fee. 
  
  
- **Pallet structure**

  The project is broken down into following pallets:

  **proof-address-mapping**: mapping Substrate (AccountId) address with EVM address (H160) by given signature.

  **upfront-pool**: Changing upfront every 'x' amount of time (x depends on the number of players staying in the pool and the number of projects running on Gafi, x will be determined when testnet goes live) to get the discount on the transaction fee.
  
  **staking-pool**: Freeze the amount of token to reduce the transaction fee.
  
  **sponsored-pool**: Provide the service to help the game-creator appeal to their users, the sponsored pool created by the game-creator to pay a part of the transaction fee when players deploy their smart contracts.

  **gafi-tx**: Manage player's transactions on the Gafi Pool, every minute or hour players can only make 'x' discounted transactions. Reduce 'y' percentage of transaction fee. 'x' and 'y' will be and should be determined by DAO.
  
  **game-creator**: With the purpose of rewarding the game's creator, pallet game-creator provides the following main functionality:
    1. Game's creator claim the ownership of the contract by given transaction hash
    2. Withdraw the transaction fee reward
    3. Change the ownership
  
  **pallet-cache**: Store pallet data temporarily.

  **pallet-player**: Handle player information likes id, name, friends...


- **DAO**

  Currently, by design, there are three objects that need to determine through DAO:

    1. Autoban mechanism
  
     There are several rules of Gafi Network that players must follow when they join the pool. These are ideas to keep the pool 'as clean as possible' such as ban/kick AFK(away from keyboard) players, ban/kick players on the Spamming Blacklist.
  
    2. The Gafi Pool fee
  
     Pool fee is another base idea to keep the pool clean, with a reasonable fee determined by DAO, the Gafi Pool can prevent the network from malicious accounts. When many players join the pool, the total network fee charged by the pool can be significant to grow the ecosystem by granting the projects. 
  
    3. The number discounted transaction limit of Gafi-TX

     The idea of Gafi-TX is to protect the network from the DDOS, also determining the right number is important because if the number is not appropriate, it's can drive away many good projects for example. Currently, our Heroes & Empires only need a maximum of 10 TXs/minute but another good PvP game can require 30 TXs/minutes, at this point the limit number is 30 is reasonable for the Gafi Network.
  
Although these ideas would be different in blockchain, we must deploy Heroes & Empires on Gafi to determine those numbers.

### Ecosystem Fit

  At this moment, most of the NFT Gaming projects are running on Ethereum, BSC, or Solana name Axie Infinity, the Sandbox, Decentraland... and as we do the [Heroes and Empires](https://heroesempires.com/). We consider these platforms are "common" chains because they can fit many purposes but don't specialize in NFT Blockchain Games. Inspired by Substrate philosophy that 'builders can just focus on the chain logic', so we built Gafi Network that specialized in NFT Blockchain Game.
  
  We know the 'pain' of scalability and  the cost of operating that Heroes & Empires spent more than $3M just for the transaction fees, we do think if we brought that money to grow the H&E ecosystem that could be game-changing.
  
  Our current user target is the NFT Gaming projects, high-frequency applications, and, of course, is Heroes and Empires. Gafi Network will bring fully decentralized platform and web3 to around 40k users of H&E and millions of users in the cryptocurrency world.
  
  At this time, in the Kusama/Polkadot ecosystem, all the EVM compatible can be the same as Gafi Network at this time but with specialization of Gafi chain logic, there is no project nearly the same as Gafi according to [Dotmarketcap](https://dotmarketcap.com/ecosystem).

## Team :busts_in_silhouette:

### Team members

- Huynh Van Quyet (Jack) - CEO + Leader
- Phan Dang Quy (David) - Technical Lead
- Truong Ngoc Vuong (Michael) - CTO + UX/UI
- Do Tan Trung (Jackson) - Full-Stack Developer + DevOps
- Luu Hoang Trung (Mike) - UI/UI + DevOps
- Bui Minh Thanh (Stefan Muto) - Substrate developer

### Contact

- **Contact Name:** Stefan
- **Contact Email:** stefan@cryptoviet.com
- **Contact Telegram:** @stefan_muto
- **Website:** https://team.cryptoviet.com/

### Legal Structure

- **Registered Address:** 
- **Registered Legal Entity:** 

### Team's experience

Cryptoviet team started in the crypto industry in 2017. Back then we did the social media, marketing plans. In 2020 we build web3 products starting with [CasperStats](https://casperstats.io/) as an Explorer for Casper Network that granted by DEVxDAO, NFT Blockchain Game named [Heroes and Empires](https://heroesempires.com/) with ~400k total users and ~40k daily users.

Team experiences comes from many aspects, but focus is on 'build to last'. Good model design and clean code is the philosophy of the Cryptoviet developer team

CEO + Leader Jack has created the most active social media in Vietnam (Bitcoin Vietnam News).

David has designed and built smart contract models for H&E, a grant project from Contentos for [wallet](https://play.google.com/store/apps/details?id=com.xonic.wallet) [source code](https://github.com/quyphandang/xonic_wallet).

Michael with more than 4 years of experience with Nodejs and React, Nuxtjs. UX/UI for https://casperstats.io and https://heroesempires.com/

Jackson, back then as Technical Lead for a well-known bank in Vietnam, with 4 years of experience in static languages (Java, C++, Typescript)

Mike, with 4 years of experience in UX/UI and Nodejs, has designed and built  [marketplace](https://market.heroesempires.com/) for H&E and https://casperstats.io

Stefan with 5 years of experience as Software Engineer working on the top crypto exchange in Vietnam, he is best on design pattern, SOLID, and Substrate

### Team Code Repos

- [Cryptoviet](https://github.com/cryptoviet)
- [Heroes and Empires](https://github.com/HeroesEmpires)

### Team Member Github

[David](https://github.com/quyphandang)
[Michael](https://github.com/satoshiman)
[Jackson](https://github.com/dttr278)
[Mike](https://github.com/lhtrung307)
[Stefan](https://github.com/mutobui)


### Team LinkedIn Profiles (if available)

[Cryptoviet](https://www.linkedin.com/company/cryptoviet/mycompany/)

[Jack](https://www.linkedin.com/in/quyethuynh2002/)
[David](https://www.linkedin.com/in/phan-dang-quy/)
[Michael](https://www.linkedin.com/in/truongngocvuong/)
[Jackson](https://www.linkedin.com/in/trung-dt/)
[Mike](https://www.linkedin.com/in/l%C6%B0u-ho%C3%A0ng-trung-53036a168/)
[Stefan](https://www.linkedin.com/in/thanhbuiminh/)

## Development Status :open_book:

Gafi Node Repos: https://github.com/grindytech/gafi

[Heroes & Empires 2021 Roundup](https://medium.com/@stefan_muto/heroes-and-empires-2021-roundup-a6617941ef5a)

Whitepaper: Coming soon


## Development Roadmap :nut_and_bolt:

![Gafi Network Development Roadmap session 2](https://github.com/cryptoviet/he-chain-assets/blob/main/Gafi%20Network%20Development%20Roadmap%20session%202.jpg)

### Overview

- **Total Estimated Duration:** 11.5 months
- **Full-Time Equivalent (FTE):**  1.2 FTEs
- **Total Costs:** 59,000 USDT

### Milestone 1 — The Heroes & Empires

- **Estimated duration:** 4 months
- **FTE:**  1.2
- **Costs:** 20,000 USD

At this milestone, we build modules for Player, Empires. The requirements will fall into acceptance criteria:
+ Users can join Empires
+ Users can leave Empires
+ Charge an upfront fee when users join the pool with service options
+ Freeze and unfreeze the correct amount of token when users join the pool with staking option
+ Charge a correct transaction fee based on the their option
+ Refund the correct amount when users leave the pool
+ Solidity code can be deployed and called on Gafi
+ Create pallet-player
+ Unittest
+ Code coverage > 80%
+ Dispatchable functions must have comments


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Apache 2.0|
| 0b. | Whitepaper |
| 0c. | Documentation | We will comment on code, publish documents as text articles and videos to show users how Empire Pool works, how to create a player account, how to join and leave the pool |
| 0d. | Testing Guide | Every internal and external function must have the comment followed by a unittest, and the community will be rewarded for finding bugs |
| 0e. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0f. | Article | This will merge with Documentation, mostly on SubSocial, Medium, and Twitter)
| 1. | Substrate module: pallet_player | module to store player information like (name, id, friends, tokens) |  
| 2. | Substrate module: pallet_option_pool | Provide service options for users to join the Empire |
| 3. | Substrate module: pallet_staking_pool | Provide staking option for users to join the Empire |
| 4. | Substrate module: proof-mapping | mapping accountid with h160 |
| 5. | Weights/Benchmarking | implement benchmarking for pallets to determine appropriate weights |


### Milestone 2 — Sponsored-Pool + Gafi-TX + Pallet-Cache

- **Estimated duration:** 3.5 months
- **FTE:**  1.2
- **Costs:** 20,000 USD

In this milestone, the requirements will fall into acceptance criteria:
+ Gafi-TX manage the discounted transaction limit
+ Sponsored-Pool works
+ Pallet-Cache works
+ All dispatchable functions and public functions must have unittest
+ Code coverage > 80%
+ Module documentation and Wiki(optional)


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Apache 2.0|
| 0b. | Documentation | Module documentation and Wiki(optional) |
| 0c. | Testing Guide | Dispatable functions and public functions must have the comment followed by a unittest |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | wiki.gafi.network and Medium |
| 1. | Substrate module: pallet sponsored_pool | https://wiki.gafi.network/learn/sponsored-pool |  
| 2. | Substrate module: pallet gafi-tx | https://wiki.gafi.network/learn/gafi-tx |  
| 3. | Substrate module: pallet-cache | store runtime data temporarily |  
| 4. | Weights/Benchmarking | implement benchmarking for pallets to determine appropriate weights  |
| 5. | Demo | Demo new features in milestone 2 with guide article | 

### Milestone 3 — DAO + Game-Creator + Gafi Testnet

- **Estimated duration:** 4 months
- **FTE:**  1.2
- **Costs:** 19,000 USD

In this milestone, the requirements will fall into acceptance criteria:
+ Gafi Network Testnet launch with at least 5 nodes
+ Build DAO to vote on-chain governance
+ Pallet Game-Creator works
+ Determine the 'x' number of limit discount transactions per minute by Testnet and vote by on-chain governance
+ Determine the 'y' percentage to reduce transaction fee by Testnet and vote by on-chain governance
+ Determine the 'z' percentage of the transaction fee to reward the game-creator
+ All dispatchable functions and public functions must have unittest
+ Code coverage > 80%
+ Module documentation and Wiki(optional)


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Apache 2.0|
| 0b. | Documentation | Module documentation and Wiki(optional) |
| 0c. | Testing Guide | Dispatable functions and public functions must have the comment followed by a unittest |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | wiki.gafi.network and Medium |
| 1. | Substrate module: pallet game-creator | https://wiki.gafi.network/learn/game-creator |  
| 2. | Substrate module: pallet_dao | module to vote on-chain runtime data |  
| 3. | Weights/Benchmarking | implement benchmarking for pallets to determine appropriate weights  |
| 4. | Demo | Demo new features in milestone 3 with guide article | 


## Future Plans

Fortunately, we will integrate Heroes & Empires into Gafi Network first, allowing us to devote all of our resources (20 team members including marketing, QA, and QC) to expanding, using, and testing Gafi Network.

We will work with several top NFT Game projects and teams in Vietnam such as [Axie Infinity](https://axieinfinity.com/), [Imba Game](https://imba.co/), and [StarPunk](https://starpunk.io/) to deploy on Gafi Network.
