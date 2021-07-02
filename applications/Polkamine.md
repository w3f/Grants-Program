# Polkamine - Open Grants Proposal

* **Project:** Polkamine
* **Proposer:** Polkamine
* **Payment Address:** 0xc17256d1497b716e9D2686d40D4DE637899ae152

## Project Overview :page_facing_up:

### Overview

#### Introduction
Polkamine Network is the first decentralized standard hashrate token protocol that solves the liquidity problem of miners on multi-chains, like Bitcoin, Litecoin, Ethereum and Filecoin.

The total Bitcoin mining industry was worth about 5 billion USD, and that of Ethereum was 2.7 billion USD. Taking Litecoin, Bitcoin Cash, Filecoin, and other minable currencies into account, the total value of this industry would have well exceeded 10 billion USD. More importantly, this is a rapidly developing sector, increasing in value with time.

However, even with the high value and buoyant growth of the mining industry,  three issues need to be addressed:
* **Liquidity Problems of Miners**. The miners in mining-based projects like Bitcoin, Litecoin and Ethereum consistently face a lack of liquidity for their assets. Polkamine will help miners liquify their assets by issuing standard hashrate tokens, which could be traded at any time on DEX or collateralized to borrow USDT for liquidity.
* **No standardization of different cloud mining pools**.Although cloud mining pools have lowered the entry barrier to mining, there are thousands of cloud mining pools with no real standard, which makes the market unorganized and difficult to grow rapidly.
* **Lack of credibility**.The different mining pools are always operated in a centralized way. There is a lot of information available about the output and expenses, but most of it can not be confirmed or verified. As a result, the retail miners can not fully trust the mining pools.

Polkamine will standardize the mining power from different mining pools for different mining projects and then issue different standard hashrate tokens, like pBTCM for the Bitcoin standard hashrate token, pETHM for the Ethereum standard hashrate token, pFILM for the Filecoin standard hashrate token and pLTCM for the Litecoin standard hashrate token. Every standard hashrate token is a synthetic token that represents the basic standard mining power of a unique mining blockchain, and is also collateralized by standardized mining power. The pTokens could be integrated into cross-chain DeFi protocols (like DEX, lending protocols on Polkadot, etc.), which will help to increase the liquidity of the pTokens.

Polkamine Network will implement Substrate's off-chain workers (OCW) to monitor the on-chain revenue data of different mining projects in real time, and upload revenue information to ensure that the information is open and transparent for miners.

In addition to solving the above mentioned fundamental problems in the mining industry, Polkamine also has the below advantages:
* The first cross-chain protocol to standardize the mining power and the issuance of hashrate tokens for more than a dozen mining projects such as BTC, ETH, LTC, FIL, etc.
* The first protocol to encourage miners to use their pTokens in different DeFi protocols on multi-chains. Other projects only encourage miners to stake their hashrate tokens to earn mining rewards, which constrains the liquidity of hashrate tokens to a great extent. 
* The first totally limitless and scalable hashrate mining protocol. Any mining pools outside the Polkamine network can freely join in or exit the standardized mining pools on the Polkamine network after mining power standardization.
* The first protocol will leverage Substrate’s off-chain workers mechanism to monitor the output of each mining pool, to ensure openness and transparency for retail miners.

### Project Details

#### Project Architecture

<div align="center">
  
<img src="https://github.com/polkamine/Polkamine/raw/main/images/pic-03.png" alt="" width="80%"/>
</div>
  

##### Hashrate Standardization

Polkamine protocol has an important function - to develop standards for different mining powers as well as the minimum standardized HashRate unit. This is the only way through which the Polkamine mining pool can become an open and tokenized market that  is free to enter and exit.

Before realizing the standardization of mining HashRate, standardizing all mining machines is essential, which means to make the energy consumption ratio of different machines the same. When different mining machines are combined, only when the energy consumption ratio is consistent and the mining revenue and electricity cost are the same can the standardization of HashRate be realized.

When Polkamine standardizes external mining pools for different mining projects targeting Bitcoin and Ethereum, the process is as follows:
1. First, set the standard for the energy consumption ratio for all mining machines. Whether it is Polkamine's self-built mining pool or external pools, all mining machines must have the same energy consumption ratio.
2. Second, assess the energy consumption ratio of the mining pool. When the energy consumption ratio standard is determined, it is necessary to investigate the types, numbers, and total energy consumption ratio of the mining machines. It is also important to compare the ratio of different machines to make preparations before upgrading the pool.
3. Third, upgrade the energy consumption ratio of the mining pool. When the conditions of the mining machines are thoroughly investigated, it is necessary to set the target energy consumption ratio to strike a balance between machines with different ratios, and finally make sure that the energy consumption ratio reaches the target. The weighted average energy consumption can be calculated by the below formula:

<div align="center">
<img src="https://github.com/polkamine/Polkamine/raw/main/images/pic-05.png" alt="" width="35%"/>
</div>

In the above formula, `Ei` represents the energy consumption ratio of the `i-th` type of mining machine, and `Qi` represents the quantity of the `i-th` type of mining machine.

Only when the weighted efficiency of the mining pool reaches Polkamine's target can the mining pool join the standard mining pool of Polkamine. The data structure of  Mining Pool Standardization Pallet is shown below:
```
mining_pool {
coin: string
ptoken: string  
wtoken: string  
}  
daily_mining_output {
pool_index: int
output: int
hashrate_power: int
daily_expenses: int
}
daily_reward_stats {
pool_index: int
reward_per_user: daily_user_reward[]
}
daily_user_reward {
user: address
reward: int
}
```
##### Hashrate Tokenization
When the mining pool is standardized, the next step is to tokenize the HashRate. The process is as follows:
1. First, the mining pool applies for Tokenization. The first step of the HashRate tokenization is for a mining pool to apply to PolkamineDAO. For mining pools with sufficient HashRate, they can apply to become the Cooperation Mining Pool (CMP). CMP mining pools can choose to standardize and tokenize locally, though, for those whose HashRate fails to reach a certain level, the mining machine needs to be transported to the nearest CMP mining pool for standardization and tokenization.
2. Second, the PolkamineDAO members audit. Polkamine DAO will appoint a professional audit team to conduct on-site inspections of the mining machines. They will investigate the type, energy consumption ratio of the machines and the mining pool environment, infrastructure, power quality, site management, compliance capabilities, etc. The team will also test the energy consumption ratio of the miners who have applied for joining. Only when demands are met can the applicant enter the next step.
3. Transfer ownership and deliver mining pools. If the standard is met, the mining pool needs to sign a contract with PolkamineDAO. The mining pool can choose either of the following two methods:
   * Directly transfer the ownership to PolkamineDAO. In this way, PolkamineDAO will use StableCoins to directly pay the mining pool, obtain the ownership of its mining machine, and package it into Polkamine's self-built mining pool.
   * Transfer to other parties through PolkamineDAO. In this way, Polkamine will act as an intermediary which tokenizes the HashRate of the mining pool and sells it to Mini Miners. The trade will be done on Polkamine's HashRate platform. The USDT and other StableCoins paid by Mini Miners will be paid to the original mining pool.
4. Tokenization of HashRate. After completing the third step, PolkamineDAO will tokenize the total HashRate of the mining pool according to the unit HashRate anchored by Standard Hashrate. The DAO will issue the corresponding number of Standard Hashrate Tokens, namely pTokens.

##### pTokens and wTokens

In the Polkamine network, tokens that are anchored to the standard HashRate unit are called pTokens, such as pBTCM, pLTCM, pETHM, etc. They are the proof of ownership of the standard HashRate.

pTokens represent the corresponding amount of HashRate in the Polkamine standard mining pool. For example, pBTCM anchors 1Th/s standard HashRate, and holding 5 pBTCM tokens means having 5 Th/s in the Polkamine BTC standard mining pool and the corresponding income rights.

pTokens are issued on the Polkamine chain, and can only be further issued when additional HashRates appear in the Polkamine standard mining pool. Each additional issuance must be approved (voted) by PolkamineDAO. Meanwhile, the third-party audit report must be publicly announced.

In addition to pTokens, there is another type of asset called Wrapped Output Tokens (wTokens).

wTokens are Tokens issued on the Polkamine chain and anchored to the tokens produced by the Polkamine standard mining pool at a 1:1 ratio. You can consider wTokens as the income certificate in the mining products of the Polkamine standard mining pool. wTokens include wBTCO, wETHO, wLTCO, wFILO, etc. which respectively anchor BTC on the Bitcoin chain, ETH on the Ethereum chain, LTC on the Litcoin chain, and FIL on the Filecoin chain in a 1:1 ratio.

Since different mining projects adopt varied chains, only by issuing 1:1 mapping assets wTokens can Polkamine write all mining income of Mini Miners to the chain and achieve automation.

Assuming that user `A` holds and stakes `X` pBTCM tokens with the ownership of `0.5X` Th/s standard HashRate and the corresponding income rights,  A can obtain `Y` BTC output every day, calculated by the RoR of the Polkamine BTC standard pool. In order to ensure that the distribution of benefits is fully automated by smart contracts, Polkamine Network will immediately send `Y` wBTCO tokens to user A's address, and users' wBTCO tokens can be exchanged for BTC on the original chain at a 1:1 ratio through Polkamine's cross-chain bridge at any time.

Mini Miners must stake their pTokens if they want to obtain the mining income from the Polkamine standard mining pool. The income of the previous day is only for the Mini Miners with a staking period of more than 1 day. If they have not participated in staking or the staking period is less than 1 day, then the amount of wTokens that can be claimed in the contract is 0.
Under this mechanism, if the staking rate is less than 100%, it means that all mining income will be distributed to a part of the Mini Miners. Therefore, miners who stake pTokens will get more rewards than those who don't.

##### Reward Distribution

Different standard mining pools of Polkamine, targeting various tokens, have different levels of operating cost `Coperation`. The cost encompasses electricity fee `Ce` consumed by the mining machines, the commission `Cc` of the mining software, the maintenance cost `Cf`  of the mining machines, etc.:

<div align="center">
<img src="https://github.com/polkamine/Polkamine/raw/main/images/pic-06.png" alt="" width="35%"/>
</div> 

`Celectricity` is the main part. It is determined by the energy consumption ratio of the mining machines(`Eefficiency`), the HastRate(`MP`) and the electricity price(`Pelectricity`).
  
<div align="center">
<img src="https://github.com/polkamine/Polkamine/raw/main/images/pic-07.png" alt="" width="35%"/>
</div>
  
As the operator of all standard mining pools, Polkamine also undertakes standardization and tokenization work in addition to the operation work. So, the Polkamine network will claim a certain percentage (ẞ) of the total output of each mining pool as Commission.
  
<div align="center">
<img src="https://github.com/polkamine/Polkamine/raw/main/images/pic-08.png" alt="" width="35%"/>
</div> 

`ẞ` will be adjusted according to the situation of each standard mining pool. PolkamineDAO will also vote for `ẞ` value.

In conclusion, if `N` Mini Miners choose to stake pTokens, then the mining reward `R(i)` of the `i-th` Mini Miner is calculated as follows:
  
<div align="center">
<img src="https://github.com/polkamine/Polkamine/raw/main/images/pic-09.png" alt="" width="35%"/>
</div> 
  
#### Substrate Integration

Polkamine will leverage Polkadot's off-chain workers (OCW) mechanism to monitor the output of each mining pool, to ensure openness and transparency for retail miners.

The reasons for adopting the OCW mechanism are:
* Some data, especially fees and costs, cannot be called by on-chain oracles since the mining pool is operated off-chain, and so some of Polkamine's design cannot be fulfilled.
* OCW can perform random number verification on external data to ensure the security and decentralization of off-chain information.

In addition to OCW, Polkamine will also integrate Substrate’s Off-chain Storage function, so that all operating and revenue data of the mining pool can be safely stored. Also, there will be a complete historical record for Mini Miners to inquire and third-party auditing agencies to audit.

  
<div align="center">
<img src="https://github.com/polkamine/Polkamine/raw/main/images/pic-04.png" alt="" width="60%"/>
</div> 
  

#### Competitive Edges

| **Project** | **Polkamine**          | **Mars**               | **BTCST**              | **DMEX**               | 
| :---------: | :--------------------: | :--------------------: | :--------------------: | :--------------------: |
| The underlying public chain | Chain developed based on Substrate  | DeFi on Ethereum | DeFi on Ethereum               | Self-developed chain          | 
| HashRate target | BTC, LTC, ETH, etc.              | BTC                            | BTC                             | FIL                           | 
| Standardized HashRate | Yes              | Yes        | Yes     | No     | 
| Whether has Governance Token | Yes        | Yes    | No   | Yes   | 
| Whether Limitless | Yes  | No, Binyin Mining Pool operates exclusively | Yes  | Yes   | 
| Governance | Decentralized DAO | Centralized - Binyin Mining Pool operates exclusively | Centralized - Off-chain governance by several mining pools. | Decentralized | 
| Information transparency mechanism | OCW, data are written to the chain | No, revenue not made public | No, revenue not made public | Unknown | 
| Whether has a third-party audit | Yes   | No   |  No   |  No   | 
| Multi-chain | Yes  | No  | No  | No  | 

## Team :busts_in_silhouette:

### Team Members

* Andreas Aschenbrenner - Project Lead   
* Vladan Falcic - Head of Marketing  
* Marcin Dudek - Head of Design and Branding  
* Philippe Dee - Senior Blockchain Developer  
* David Lee - Senior Smart Contract Developer  
* Mahmoud El Hallab - Head of Operation  
* Ben Lakoff - Advisor  
* Pramod Mahadik - Advisor  
* Farrukh Shaikh - Advisor  

### Team Website
* https://polkamine.com/

### Legal Structure
Polkamine Technology Ltd. is a company registered in the BVI.

### Team Experience

**Andreas Aschenbrenner**  
Andreas has been involved in several projects since 2016, taking them to another level. He joined Polkamine to make it a success with an international communication mentality. His ingenuity and thirst for knowledge are indomitable, with which he focuses on making the world more decentralized and communicating the value of new technologies like Polkamine through his impressive work ethic.

**Vladan Falcic**  
Vladan is a Blockchain and crypto enthusiast, he entered the crypto space back in 2014 and was mostly involved in early stage projects. Since 2016 he started working with different projects, improving their marketing and establishing valuable partnerships. Vladan is working with several startup projects, advising them, improving their marketing and building the community. He joined Polkamine as head of marketing and will help to ensure the further growth of the project.

**Marcin Dudek**  
Marcin, 2D/3D graphic designer with 20 years of experience. From 2002 to 2016 he owned a large advertising agency. Since 2016 he has been involved in the cryptocurrency market. He cooperated with many cryptocurrency projects, taking care of full graphic design of the projects. Investor, present on the investment market for 6 years. Economist and computer graphic designer by education.

**Philippe Dee**  
Phil is an IT professional with a unique combination of technical consulting, and management skills. He’s participated as an individual contributor, consultant, architect and manager on numerous projects of different sizes – from one-person shows to projects involving larger teams spanning globally. Phil is mostly focusing on Ethereum DeFi protocols.

**David Lee**  
David is a hard core technologist with balanced perspectives to Blockchain, decentralized applications and finance that create value. He has gained substantial hands-on experience in leading cryptocurrency projects and technology start-ups as a developer, lead and consultant. He appreciates the importance of quality code as well as the need to meet scheduling demands.

**Mahmoud El Hallab**  
Driven operation manager with experience in community building and program planning with background in communication and marketing. Energetic, results-oriented proactive professional with extensive knowledge and expertise in community building with passion for blockchain technology.

**Ben Lakoff**  
Ben has developed a strong global finance experience from nearly a decade of international assignments across 4 continents, and boasts a broad & diverse finance background before joining the blockchain space full-time in 2017. Now, working primarily with early-stage startups, Ben has been an integral part of teams that have raised over $15M in funding.

**Pramod Mahadik**  
Pramod aims to build Web3 economy for unique and scarce digital assets supported on Polkadot, Polygon, Ethereum, and Binance Smart Chain. He is the CEO and founder of Polkarare. Besides, he is an expert in the NFT ecosystem with seasoned experience.

**Farrukh Shaikh**  
Farrukh is a seasoned investment and financial professional who previously worked for both KPMG and Grant & Thornton. During his corporate career Farrukh was involved with audit and advisory for the middle eastern region’s largest players. He later left his corporate career to join the evolving world of cryptocurrency. He is a derivatives trader and an active investor in the crypto space.

### Team Code Repos
* https://github.com/Polkamine-Network

### Team Linkedin Profiles
* https://www.linkedin.com/in/andreas-a-62964a207/  
* https://www.linkedin.com/in/vladan-falcic-sqcap/  
* https://www.linkedin.com/in/marcin-dudekgr/  
* https://www.linkedin.com/in/philippe-dee-a83baa1b5/
* https://www.linkedin.com/in/david-l-9723b5173/
* https://www.linkedin.com/in/mahmoud-el-hallab/
* https://www.linkedin.com/in/benlakoff/
* https://www.linkedin.com/in/psquare-pramod/
* https://www.linkedin.com/in/farrukh-shaikh-754b8089/

## Development Roadmap :nut_and_bolt:

### Overview
* Total Estimated Duration: 3 months
* Full-time equivalent (FTE): 4 FTE
* Total Costs: 10,000 DAI

**Milestone 1 - Creation of Mining Pool Standardization Pallet and Rewards Oracle**
* Estimated Duration: 8 Weeks
* FTE: 4
* Costs: 5,000 DAI

| **Number** | **Deliverable**                       | **Specification**                                            |
| ---------- | ------------------------------------- | ------------------------------------------------------------ |
| 0a.        | License                               | Apache 2.0 / MIT / Unlicense                                           |
| 0b.        | Documentation                         | Documents containing the different mining standardization rules for different coins, and rewards oracle technical design and calculation rules. |
| 0c.        | Testing Guide                         | We will provide a guide wherein an outside mining pool can create a standardized mining pool through the standardization rules. |
| 1.         | Mining Pool Standardization Pallet    | The Mining Pool Standardization Pallet will record all the stats of different standardized mining pools for different coins like BTC, ETH and FIL, etc. All the output, total hashrate power, daily expenses are fully recorded in this module. |
| 2.         | Rewards Oracle                        | The Rewards Oracle part is another important module of this project. Polkamine will integrate Substrate's Off-chain Worker mechanism to ensure the openness and transparency of data, such as mining pool revenue and fees. |
| 3.         | Article/Tutorial                      | We will publish medium articles that explains the mining standardization mechanisms and how it will help introduce the first substrate based standardized hashrate token protocol into the DeFi lego of the Polkadot Ecosystem. |

**Milestone 2 - pToken Staking-to-Mine Pallet and Front-end Integration**
* Estimated Duration: 4 Weeks
* FTE: 4
* Costs: 5,000 DAI

| **Number** | **Deliverable**                       | **Specification**                                            |
| ---------- | ------------------------------------- | ------------------------------------------------------------ |
| 0a.        | License                               | Apache 2.0 / MIT / Unlicense                                           |
| 0b.        | Documentation                         | Documents explaining the structure of pToken Staking Pallet, staking-to-mine mechanism, and the mining rewards distribution rules. |
| 0c.        | Testing Guide                         | We will provide a testing guide for the pToken holders to teach them how to stake pTokens to mine BTC/ETH/FIL tokens, and how to claim the mining rewards. |
| 1.         | pToken Staking-to-Mine Pallet         | pToken Staking-to-Mine Pallet will include the staking module, ming rewards oracle integration, claiming wTokens module and cross-chain bridges. This pallet includes the main user-end functions of the Polkamine project. |
| 2.         | Front-end Integration                 | Every pToken holder has to stake their pTokens in the pToken Staking-top-Mine contracts on Polkamine to win the mining rewards from the mining pools, then claim the corresponding mining rewards according to the calculations of the rewards oracle. Also they could use the cross-chain bridge function to swap pTokens and wTokens to other Substrate-based chains or Ethereum/BSC chains. |
| 3.         | Article/Tutorial                      | We will publish medium articles and tutorial videos that explains the staking-to-mine mechanisms and rules, how to claim the native mining output tokens from wTokens, and also how to swap these tokens into other Substrate-based chains or Ethereum/BSC chains. |

## Future Plans

* After the milestone is completed, we plan to apply for the Substrate Builders Program. We will develop an open API and SDK for our protocol to integrate more hashrate mining pools.
* In order to promote the adoption of pTokens, Polkamine will launch mining incentive campaigns. Polkamine will launch relevant campaigns when the standard HashRate pool is created and launched for community members who participate in pTokens Staking and provide liquidity for pTokens on DEX.
* We will launch a fundraising platform that collects the investment from mainstream investors and institutions and wraps up the annual return from mining pools as a structured financial product to the participants.







