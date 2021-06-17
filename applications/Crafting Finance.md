# W3F Open Grant Proposal

* **Project Name:** Crafting Finance
* **Team Name:** Crafting
* **Payment Address:** 0x2764997b34f28e8244cf21a27a2629403766d80a (USDT)

## Project Overview :page_facing_up: 

The sharing debt pool (SDP) model proposed by Synthetix on Ethereum is the most important part of a real synthetic assets project. But it also has its own drawbacks and limitations. For example, users who hold synthetic assets will bear the risk we call "crafting loss". In Crafting Finance, we have upgraded the sharing debt pool model (SDP). Different from Synthetix, in which users have no choice and can only join the debt pool when forging synthetic assets. We innovatively proposed that users can choose whether to join the debt pool, and found that even if users do not join the debt pool, they can still trade in the system, and bring more possibilities to the entire system. This innovation will be applied to Kingsman, the DEX of Crafting Finance, and make it the brand new next-generation DEX.

### Overview

Crafting Finance is a synthetic asset issuance protocol and decentralised contract trading exchange based on the Polkadot contract chain. It natively supports multi-token collateral, including the token CRF issued by Crafting Finance, Polkadot (DOT), Kusama (KSM), Bitcoin (BTC) and Ethereum (ETH), and synthesizes any cryptocurrencies or stocks, bonds, gold and any other off-chain assets directly through smart contracts and oracles. Users can forge a certain synthetic asset, such as the US dollar, by collateralizing supported tokens, and automatically have a long position in the asset. Users can also convert minted assets into other assets through the trading platform, so as to realize the purpose of shorting the asset and longing other assets. The assets minted by all the users correspond to the liabilities of the entire system, and the proportion of each user's liabilities has been determined at the time of forging, so that their respective profits can be calculated. Because such a collateral pool model does not require a counterparty, it perfectly solves the problems of liquidity and trading depth in decentralised exchange(DEX).

### Project Details 
The main functional modules of the entire system are Forge and Kingsman. Forge are where all synthetic assets are minted. Kingsman is the decentralized contract exchange using our upgraded sharing debt pool model. Other important modules of the system include collateral pools, fee pool, interest pool, and oracles. We will introduce in detail how Kingsman works in this application. 

#### 1. When all users join SDP
Below is an example to illustrate how we calculate profit or loss using SDP trading mode when all users join SDP. We define “Crafting Loss” in this example.

Example 1: Assuming two users A and B, A generates $100 rBTC, and B generates $100 rUSD, the respective debt ratio is 50%, and the total system debt is $200.  Suppose the price of BTC rises by 50%, so the value of rBTC held by A becomes $150, and the value of rUSD held by B is still $100. At this time, the total system liability becomes $150+$100=$250.  Note that because the debt ratio has not changed, A’s debt is $250*50%=$125, and B’s debt is also $125.  Therefore, it can be calculated that the profit or loss of A is $150-$125=$25, and the profit or loss of B is $100-$125=-$25.  The sum of all users' profit and loss in the entire system is 0, which is similar to a traditional contract trading system.  It should be noted that although B did nothing after generating rUSD, he/she still lost money due to the increase in the price of BTC.  This is because rUSD is generated, which by default is equivalent to becoming a long position in the U.S. dollar (in this case, it is also equivalent to a short position in BTC)! We define this loss as "crafting loss".

#### 2. Optional Joining of SDP
Because of the principle of the sdp trading mode, users who generate any synthetic asset and join the debt pool will automatically become a long holder of the asset. That is, even if the user generates a stable currency, it will automatically become a long position in the stablecoin, causing losses when other assets rise. We call this loss "crafting loss". This is like another form of impermanent loss in liquidity mining. To avoid this loss, we innovatively provide users with the option of whether they want to join the debt pool. So a user can choose not to join the debt pool if he/she does not want to take the risk. In this case, users can essentially use this system as a lending platform, and the system will charge interest on the assets users minted. The interest rate will be determined by community governance later.

#### 3. An upgrade for the SDP model
Belows are two examples showing how things change when optional joining of SDP is provided. 

Example 2: Suppose there are user A and user B. User A chooses not to join the debt pool when forging synthetic assets, and user B chooses to join the debt pool when forging synthetic assets. Suppose that before A and B forged synthetic assets, there were originally $100 rBTC in the system. Then, A forged $100 of rUSD but did not join the debt pool, and B forged $100 of rBTC and joined the debt pool. Then, the assets and liabilities of the entire system become $200 rBTC in the debt pool, and $100 rUSD outside the debt pool. B accounts for 50% of the system’s liabilities, and A has no debt ratio because he/she has not joined the debt pool.
Now if B buys $100 rUSD from A, and the $100 rUSD is not in the system, can it be traded in the system? The answer is yes. For example, B converts this $100 rUSD to rBTC through our trading system Kingsman, and the assets in the debt pool become a total of $300 rBTC, -$100 rUSD, the total assets and liabilities of the system are still $200, and B’s debt ratio is still 50% which is $100. That is, by allowing the balance of an asset in the debt pool to be negative, we have realized that synthetic assets that are not in the debt pool can also be traded in Kingsman.

Example 3: If there is no user B, can user A who does not join the debt pool directly go to Kingsman to trade? The answer is also yes. Imagine that the debt pool originally had $100, and it was all rBTC, while A forged $100 of rUSD but did not join the debt pool. If A converts rUSD to rBTC through Kingsman, the assets in the debt pool will become $200 rBTC and -$100 rUSD, and the total assets or liabilities of the debt pool will still be $100. How to calculate profit and loss? In fact, it can still be calculated according to the debt ratio. For example, if the price of BTC to USD doubles, the assets in the debt pool will become $400 rBTC and -$100 rUSD, that is, total assets or liabilities have become $300, of which $200 is A's assets. However, because A has not joined the debt pool, A's debt is still 0! So A's profit is the current $200 minus the initial $100, and the profit is $100. Note that after removing A's assets, the assets in the debt pool are still $200, but the liabilities are $300, so other people in the debt pool will lose $100! That is to say, in this example, when A finds that everyone in the debt pool is long in BTC, and BTC price will indeed rise, A can use the external rUSD to exchange rBTC through Kingsman to earn money from those with long positions in the debt pool. Conversely, if BTC price falls, people in the debt pool will make a profit, and A will lose money, that is, people in the debt pool can earn external money. In Synthetix, if the entire system is long in BTC, no one will make a profit and no one will lose no matter how the BTC price changes. Therefore, our design can introduce additional liquidity from the outside, which greatly improves the original design of Synthetix.

### Ecosystem Fit
Synthetic assets is an indispensable part of Defi, which is also a major application on Ethereum already. So, as a strong challenger of Ethereum, Polkadot definitely needs synthetic assets in its ecosystem. Of course, there are already several Defi projects in the Polkadot ecosystem, such as Acala and Laminar, but Crafting Finance is absolutely different with them. 

Firstly, Acala is like MakerDao on Ethereum. Its stablecoin is stabilized through stability fees like Dai. In Crafting Finance, there are no stability fees or interest, but stablecoin is issued in a synthetic asset collateral pool. Therefore, the cost that users pay to generate RaftStable through collateral is determined by the relative change of all synthetic assets in the entire system, rather than artificial regulations in previous decentralized stablecoins (e.g. Dai). This cost is more market-oriented, and at the same time it is equivalent to the inflation rate of stablecoin to world assets.

Secondly, both Acala and Laminar can only generate stablecoins directly. But in this project, we can generate at least four kinds of synthetic assets directly, including stablecoins (RaftStable), simple synthetic assets (Raft), custom synthetic assets (UnivRaft), and synthetic bonds (BondRaft). And although Laminar also has a function of synthetic assets, it mainly focuses only on foreign exchanges and stocks. By contrast, Crafting Finance is a more universal decentralized financial system and it will definitely make the Polkadot ecosystem stronger. 

Last but not the least, in this project, we use a debt pool model in the DEX, which does not need counterparty and solves the problem of trading depth. The dex of Acala or Laminar do not have this design. 

## Team :busts_in_silhouette:

### Team members
* Owen, team leader, PhD in Economics, major in Macroeconomics including currency, finance and exchange rates. Mainly focuses on cryptocurrency and is committed to exploring the fundamental changes that cryptocurrency brings to traditional economic theories.
* Anray
  - Over 10 years of experiences in Software Development
  - Polkadot China 2021 Technology Ambassador
  - A senior Rust technical expert and a blockchain technical expert
  - The author of "Rust Programming From Beginner to Expert" (China Machine Press)
* Felix
  - Over 10 years of experiences in Software Development   
  - DApp Developer
  - Full-stack Developer
* Andrew
  - Over 4 years of experiences in smart contract
  - Experienced in financial system algorithms

### Contact
* **Contact Name:** Owen
* **Contact Email:** dev@crafting.finance
* **Website:** http://crafting.finance

### Legal Structure 
* **Registered Address:** 60 PAYA LEBAR ROAD, #13-06, PAYA LEBAR SQUARE, SINGAPORE 409051
* **Registered Legal Entity:** CRAFTING FOUNDATION LTD.

### Team's experience
This project is honored to be selected into the Substrate Startup Camp. Among the 139 projects worldwide, only 6 projects have been selected, and we are one of the six. And Dr. Gavin Wood is the mentor of this Startup Camp. 

This can be verified on the following website. The previous project name is Crafting Protocol.

https://www.chainnews.com/articles/924390697929.htm

Introduction to Substrate Startup Camp:

https://www.chainnews.com/articles/847789328743.htm


### Team Code Repos
* https://github.com/CraftingFinance

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 2 months
* **Full-Time Equivalent (FTE):**  3 FTE
* **Total Costs:** 8000 USDT

### Milestone 1 — Sharing Debt Pool (SDP)
* **Estimated Duration:** 1 month
* **FTE:**  3 FTE
* **Costs:** 4000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how forging synthetic assets. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | ink! Smart Contract: SDP | The user will be assigned a fixed debt ratio which is the ratio of the value of the user's synthetic assets to the value of all synthetic assets in the entire system. "Fixed" means this ratio will not change due to changes in asset prices, and will be used to calculate the user's profit and loss. This ratio will only change when a new user mints new assets or an existing user destroys existing assets. |


### Milestone 2 — Kingsman DEX

* **Estimated Duration:** 1 month
* **FTE:**  3 FTE
* **Costs:** 4000 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how forging synthetic assets. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | ink! Smart Contract: Kingsman | Kingsman is an exchange that provides conversion of different synthetic assets and contract trading, using SDP trading mode. Due to the design characteristics of SDP, this DEX does not require a counterparty, and there is no issue of trading depth. |


## Future Plans
There is still a lot of space for growth in the future, including:

1. RaftBond will be online for issuance and trading.
2. UnivRaft will be online for universal synthetic assets, user could use it to issuance smart assets.
3. Will launch the brand-new oracle system which could feed every asset‘s price over the world.

## Additional Information :heavy_plus_sign: 

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:

* Whitepaper: https://github.com/CraftingFinance/whitepaper
