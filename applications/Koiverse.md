# Open Grant Proposal

* **Project Name:** Koi Metaverse - Game 
* **Team Name:** Koiverse
* **Payment Address:** 

## Project Overview

### Overview

* Description
  
In galaxies, information and energy are eternally in a state of flux, building the universe we inhabit. They are also flowing among the blockchain nodes, forming the Koiverse.
 
Koiverse Design Features：
* Separation of governance tokens and game tokens, the dual-token system creating a positive feedback loop.
* Game promotion via time instead of traditional operation gimmicks, which significantly decreases the gamer retention and reactivation cost.
* Valuable NFT assets, precipitating more value with time.

Fish
* Each fish is composed of 14 genetic components: shape, color, pattern, eyes, mouth, pectoral fin, dorsal fin, caudal fin, decorations(3), invisible components(2), and breeding sequence.
* The highest mining power of the fish is determined by the sum of each part’s mining power, gear buff, and the cultivation level.
* When certain fish genes match, a mining power bonus and pictorial books will be activated.  

Fish Tank
* The fish can grow up in fish tanks. The cultivation time cycles are 10 days, 30 days, and 90 days, which respectively come with a maximum 30%, 120%, and 400% mining power increase.
* To cultivate the fish, one must purchase fish food based on X SHELL/fish/day. Tentatively, X=20. The turnover (SHELL) will be destroyed.
* Each fish tank may have unique features and different capacities.
* Fish tanks and fish cannot be sold during the lock period.
* In the cultivation time, the fish cannot engage in mining or breeding.
* Gamers can list their fish tanks in the rental market to allow others to grow fish. 1% of the rental fee (SHELL) will be destroyed.

Breeding
* The only way gamers can mint new NFT assets is to breed fish. 
* The progeny genes are inherited from the parent fish genes, and each parent has a 50% chance to propagate its genes.
* The scarcity of the fish gene is classified as normal, scarce, epic, and legendary(TBD). The scarce, epic, and legendary genes, respectively, have a 50%, 35%, and 25% chance to be inherited. There is a 1% chance to increase the gene scarcity level, or the genes will mutate into random and normal genes.
* It costs SHELL to breed fish. The cost of the very first breeding is determined by the average mining power P of the parent fish and the average ecological mining power AP. The cost F=K*P/AP, tentatively K = 500. Its turnover (SHELL) will be destroyed.
The maximum times each fish can breed is determined by its specific genes, ranging from 3 to 7 times, and each additional breeding will cost 30% more SHELL.

Fish Mining
* All fish with mining power can obtain SHELL every day proportionately.
* The amount of SHELL available to mine per day (M) is related to (F) the total sum of the fish (mining power >0) participating in mining. M=K*F^0.9，K as a constant, tentatively K=50.
* Averagely, if it takes 500 SHELL to breed a fish and the average mining power of its lifespan is 1250 SHELL, then the absolute return of breeding will start to lose money when the total number of mining fish in the system reaches about 10,000, that is to say, reproductive behavior begins to propel SHELL into deflation, and from the perspective of the absolute number of SHELL, investment behaviors turn to consumption behaviors. However, due to the influence of SHELL price and the existence of the KOI system, breeding still has the possibility of positive income.  
* Only the fish that are not being sold, bred, or locked by pictorial books can participate in mining.
* Every time a fish participates in mining, it loses 4% of the mining power until it reaches 0.

Pictorial Book Mining
* A gamer can activate a pictorial book when acquiring some pure-bred fish with the built-in suites.
* You can start mining KOI if you lock the right fish into the pictorial book. The locked fish must have full mining capacity.
* There are 4 levels to each fish’s pictorial book: 0, 10, 30, and 90 growing up days in fish tanks.
* …When level 2, level 3 or level 4 fish are locked, the system automatically releases the low-level fish previously locked. You can only lock one fish, and you can double your points after collecting all level 4 fish, in all the colors, with the same suit.
* The mined KOI is distributed according to the points and settled once a day. At the same time, the mining power is reduced by 4%. If the mining power is 0, then no more mining can be done.
* KOI mining pool releases are going to be carried out in stages. When the total number of fish in pictorial books (or the mining fish) are larger than N, then mining starts with a daily release (M), which will be halved every year. Mining will be suspended when the remaining KOI of each stage is lower than the amount that should be released on the same day.


### Project Details
Code:
* https://github.com/KoiMetaverse/koi-contracts-polkadot
* https://github.com/KoiMetaverse/koi-web-polkadot

The technicals:
  * a JavaScript (pixi.js) game frontend
  * Substrate
  * Immutable X 

## Team

### Team members
* Kevin
* Euglena liu
* Ray hou
* Yuan Li
* Jelly
* Hongfeng

### Contact
* **Contact Name:** 
* **Contact Email:**

### Legal Structure
* **Registered Address:** 
* **Registered Legal Entity:** 

### Team's experience

The team has more than ten years of game development experience and 3 years of blockchain game development experience.

### Team Code Repos
* https://github.com/KoiMetaverse

## Development Roadmap

### Overview
* **Total Estimated Duration:** 12 weeks

### Milestone 1  — 游戏设计
* **Estimated Duration:** 4 weeks
* **Costs:**  

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Documents containing the description of whole architecture design for KoiMetaverse |
| 0c. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 1a. | 艺术风格设计 | 完成游戏美术风格设计。 |
| 1b. | 鱼的基因 | 完成鱼基因的设计。 |
| 1c. | 1000条鱼的形象 | 绘制许多鱼的身体组件，可以用这些组件至少组合出1000条形态各异的鱼。 |


### Milestone 2  — nft相关工作
* **Estimated Duration:** 4 weeks
* **Costs:**  

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 2a. | Subkoi | 基于Substrate构建游戏平行链--SubKoi. |
| 2b. | 发币 SHELL | 在SubKoi上发代币SHELL，SHELL是游戏中的通用代币. |
| 2c. | NFT | 在SubKoi上发NFT. |
| 1c. | NFT预售, 盲盒合约 | 用rust写智能合约，实现一个盲盒，运行在SubKoi上。 |
| 1c. | NFT预售, 盲盒前端 | 用react.js, polkadot.js 开发一个web页面。 |


### Milestone 3  — 游戏逻辑实现
* **Estimated Duration:** 4 weeks
* **Costs:**  

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1a. | 鱼挖矿合约 | 用rust写智能合约，实现鱼的挖矿产币逻辑，用户质押NFT可以挖SHELL，运行在SubKoi上。 |
| 1a. | 鱼挖矿前端 | 用react.js, polkadot.js, pixi.js 开发鱼产币游戏前端。 |
| 1b. | 繁殖合约 | 用rust写智能合约，实现两条父母鱼繁殖出新鱼的逻辑，运行在SubKoi上。 |
| 1b. | 繁殖前端 |用react.js, polkadot.js, pixi.js 开发繁殖游戏前端。 |
| 1a. | 图鉴合约 | 用rust写智能合约，实现图鉴挖矿的逻辑，运行在SubKoi上。 |
| 1a. | 图鉴前端 | 用react.js, polkadot.js, pixi.js 开发图鉴挖矿游戏前端。 |
