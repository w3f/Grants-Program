# Open Grant Proposal


* **Project Name:** HexPlay
* **Team Name:**  HexPlay Lab
* **Payment Address:** bc1qa0dsm7h35vvwekk4suf2wwv7n8u8hndrsj25w5

## Project Overview :page_facing_up: 

HexPlay is a decentralized self-sustainable financial platform where games could be built. The platform integrates native token HPT, swap pools, a game center, a mining pool, and a profit pool. Those components together make up the entire eco-system. 

### Overview

The native token HPT is used for playing the games in the platform. The game center supplies various games. When participating the games, some fee is collected (if the game is profitable) , and then directed to the profit pool, which are later distributed among the HPT holder, platform treasury, swap liquidity provider. 

The swap is of the purpose to provide the exchange for HPT from other cryptocurrency, such as Dot, or polka-native stable coins. Players exchange for native token HPT to play the games, and the LP of the pool earns a part of the profits accumulated by the fee collected during the game.  More details are in the *Profit Pool Distribution* section.

The majority of the native token HPT comes from a staking process where Dot holders stake Dot for mining HPT as a reward. The Dot staked would be used for the parachain auction.

Our interest in building such a project stems from the precedent revolution of central exchange made by DEX, such as uniswap. The same thing could be done for the centralized game center. Everybody in the world should have the right to become the owner of the game center where they are the clients.

The entire project will be implemented as a substrate chain.

### Project Details 

![](https://raw.githubusercontent.com/HexPlayLab/sources/main/structure.png)


####  Staking Dot and Mining HPT 

The issuance of native token HPT is from a staking process. Investors stake their Dot in the platform in exchange for an opportunity of mining HPT. The Dot staked will be used for the parachain auction, which means Dot will be returned to the investors at the end of the lease of the parachain slot.

HPT will be minted in the first parachain auction staking process. To make it clear, when the first lease of parachain slot ends, the project still needs Dot to secure a parachain slot in the future, however the staking process associated with this slot auction will NOT result in any newly minted HPT. The staker may be rewarded by the HPT in the profit pool, the part distributed to the platform treasury, collected during the previous slot lease. 

The Dot stakers are rewarded by the native token HPT. The release of the HPT will continue through the entire duration of the staking period, i.e. parachain leasing period; however, the amount distributed versus time is in a decreasing manner, which means the majority of the HPT would be minted/released at some of the early stage of the staking. The distribution of HPT among stakers are dependent on the amount of Dot they provided in a linear manner.  

#### Swap

Swap is designed to support pairs like HPT/Dot, or HPT/StableCoin, or HPT and other popular assets in the polka eco-system. Players swap for HPT to play the games, and in the same time, the value of HPT are captured in this swap market. LP of the swap pool get the correspondent LP token which could be used for mining the HPT of the profit pool (the part distributed to HPT holder, details in profit pool distribution section). 

The more demand for HPT, meaning more players are interested in playing here, will push up the price of HPT. 

#### Game Center

Game center is the core part of the platform. The different kinds of games are supported here. These games are realized by manipulating the run time logic of how the block are processed. The updatable feature powered by polka dot helps in the future to update and remove a current game, and add new games. 

The game to be added to our platform should be dependent in a financial sense. A game requires initial on-chain development, future maintenance. This development work will be bounties on the platform attracting teams to complete. The game should be profitable enough to pay for the development work. Therefore, we encourage the game to be designed as somewhat profitable. Some fee may be collected during the game for the operation/maintenance purpose, and those fee left after paying for the development team goes into the profit pool of the platform. 

The way how the update, removal and adding new games work is detailed in the *Govern* section. 

One game we tentatively intend to supply is **CryptoZoo**.

In the CryptoZoo, players purchase eggs from the merchant which later give a birth to an animal of level 0. In the zoo, we have 12 kinds of animals in total. Each egg has the possibility of 1/12 to become one of 12 kinds of animals. The animal directly from the egg is in level 0. Animals in the same kind,  and same level n could magically work together to be an animal of the same kind and a level n+1. The maximum level supported is level five. Players are permitted to swap animals in a client to client manner. The game itself will offer reward for an animal of the level greater than or equal to three, if the owner chooses to give the ownership of the animal back to the merchant.

All the tokens used to purchase eggs will divided into two parts. 5% of the tokens received by the merchant is reserved for operation expanse  and profit of the game, and 95% of the tokens goes into the reward pool. The reward pool is then divided into three portion, 10% to level three animal reward pool, 30% to level four animal reward pool, and 60% to level five animal reward pool. Once a player has an animal of a level greater than or equal to three, he can give that animal to the merchant, and in turn, the player gets the corresponding reward in the related reward pool.

The players are permitted to sell and buy animals in the secondary market to increase the possibility of having two animals of the same kind. The game provides a place for players to do so, but a 1% transaction fee will be charged for both sides. 

CryptoZoo is profitable in two ways. First of all, 5% of token used to purchase eggs is collected. Secondly, when a deal is done in the secondary market, a 1% transaction fee is collected. These two part together make up the profit of this game. 



#### Profit Pool and Distribution

During the play of the games, a fee is collected from the players, and then goes into the profit pool. The profit pool represents the revenue of the platform, and its distribution should make the platform work in a self-sustainable way.

The tentative plan is that, 30% goes to platform treasury, and the remaining 70% goes into HPT holder and swap liquidity provider via a mining process.  

The treasure serves as two main purposes. The first one is to help update, remove and add games. Once a demand for remove/add/update a game exists, the community proposes to make some specific change to the current game center module. Either a new game or an update is needed, the correspondent development work need to be done by someone. Once such a proposal is approved by the community, the treasury would give the money to the development team to do the development work.

The other purpose is to help raise dot for the auction of parachain slot of the next round. HPT to the platform is like the stock share to a public company, therefore the one holding HPT are eligible to share the profits made by the platform. 


The remaining 70% of the profit pool is distributed among LP of swaps and HPT holders. Liquidity providers locked their LP tokens, and HPT holder locked their HPT for mining this part of profit. 



Swap mentioned in this subsection refers to a swap of pair HPT/XXX.



#### Govern

HPT works as the native token to the parachain.  It is also used for governing the entire platform. HPT holders could propose and then vote for or against a proposal. The vote is held in a manner that each HPT has same power in the voting.

Things to be governed include but not limited to:
(1) The profit distribution ratio.
(2) Game update, game removal and adding new games.

### Ecosystem Fit 

Currently, no similar project was found in polkadot system. 

Compared to the similar platform built on EOS blockchain, our project has the following advantages. Polkadot provides a solution to randomness, which is very hard to realize in EOS. In addition,  many of the games in EOS are private owned, the code and the logic is hidden. However, our platform is completely transparent, every piece of code are open to the public. Plus, the platform is totally decentralized, and owned by all the native token holder.

In the ethereum eco-system, the high gas fee makes players reluctant to play. It makes non-sense for a player to spend $20 gas fee to player a game with a ticket worth $2. Plus, some games may be in a high frequency nature, which is not suitable to the current ethereum blockchain due to the limited tps.  

## Team :busts_in_silhouette:

### Team members

* Fuming Chang (Team Leader)
* Guoliang Zhou
* Guanyi Wang

### Contact

* **Contact Name:** Fuming Chang
* **Contact Email:** cfuming@umich.edu
* **Website:** coming soon

### Legal Structure 

The team currently doesn't have a legal entity now, but intends to form one in the near future.

### Team's experience

Fuming Chang is a PhD student studying Space Physics in the University of Michigan. Fuming has experience in crypto quantitative trading, and used to be a developer for Cosmos based blockchain.

Guoliang Zhou with a master degree in computer science has three-year working experience as a blockchain developer. He worked as one of the core developers for the blockchain belonging to one Top Crypto Exchange using cosmos-sdk. As an individual developer, Guoliang won the first place in Dorahackers hackson in 2020 Beijing (ethereum ecosystem, using solidity), and won several awards during the Nebulas blockchain competition and Bytom Blockchain competition in 2018.

Guanyi Wang is the core developer of the OKExChain. Specfically, he developed OKExChain GoSDK independently, and is the major contributor to the staking module ok OKExChain. Guanyi is involved in the CosmWasm project and is the committer cosmwasm-go repo. Besides, Guanyi holds the certificate of Analyst of Quantitative Finance.

### Team Code Repos

* https://github.com/HexPlayLab/hexplay

### Team LinkedIn Profiles
no

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 3 months
* **FTE:**  3
* **Total Costs:** 1 BTC

The entire roadmap is divided into three steps. The First step is to set up our official website and to provide the documentation for the *CryptoZoo* game. The second step is to finish developing the entire game module including adding, updating and removing games. The UI along with the front-end associate with the game center and the exact game will also be finished in the second step. During the third step, the team will using substrate framework to develop swap module, staking-mining module, and profit pool module. The relevant front-end work will also be finished in that step. In each step, documentations, tutorials, along with a docker file will be available. 

The primary back-end development will be implemented in rust programming language using substrate framework.


### Mildestone 1:  Website, CryptoZoo Development, Game module Development, Game Front-End. 
* **Estimated Duration:** 2 month
* **FTE:**  4
* **Costs:** 0.5 BTC

| Number | Deliverable                   | Specification                                                |
| ------ | ------------------------------ | ------------------------------------------------------------ |
| 0.     | License                | Apache 2.0                                                   |
| 1.     | Website                | A website will be available. On the website, users could see our project information, road map, the develop team, and related information. |
| 2.      | Front-End: Game Center                     | On the website, the game will have a nice user interface providing a nice playing experience. The corresponding operation like adding a game, updating a game will be available. |
| 3.    | Tutorial: Game Center | A document/video will be available on the website specifying the rule of a specific game and how the adding game, removing game operation works.|
| 4.    | CryptoZoo Demo | Using rust programming language along with the substrate framework, the single game GryptoZoowill be completed as the run time logic. A demo will be availabe on our website.|
| 5.      | Substrate Module: Game Center | The entire substrate game module will be completed, including more operations like update a game, remove a game and add a new game. All the progress is tracked on Github, and the primary programming language is rust. |
| 6.     | Testing                | The code will have proper unit-test coverage to ensure functionality and robustness. |
| 7.     | Docker                 | We will provide a docker file to demonstrate the functionality of our chain with the corresponding module. |

### Mildestone 2: Swap Module, Staking-Mining module, Profit Pool Module, and their Front-End
* **Estimated Duration:** 1 months
* **FTE:**  4
* **Costs:** 0.5 BTC

| Number | Deliverable           | Specification                                                |
| ------ | --------------------- | ------------------------------------------------------------ |
| 0.     | License                | Apache 2.0                                                   |
| 1.     | Front-End                | The website should include all the functionality supported by our chain, such as playing a game, swapping HPT, staking dot and mining HPT, claiming profit, and govern the platform. |
| 2.     | Tutorial               | A document/video will be available on the website introducing how the swap part and governing part work. |
| 3.      | Substrate Module: Swap  | We intend to reuse the work done before by other team, such as subdex or zenLink, to do the swap module.   |
| 4.      | Substrate Module: Staking Dot  | Users stake dot to mine HPT, and the dot staked will be used for parachain auction. This functionality will be realized in the staking substrate module. |
| 5.      | Substrate Module:  Mining Profit| 70% of the profit pool is distributed among LP of swaps and HPT holders via a mining process. Users locked their LP tokens and HPT to mine the profit.  |
| 6.     | Testing                | The code will have proper unit-test coverage to ensure functionality and robustness. |
| 7.     | Docker                 | We will provide a docker file to demonstrate the full functionality of our substrate chain. |
## Future Plans

The vision of this project is to decentralize the privated owned traditional game center. Everyone could be the owner of the game center. 

We intend to lease a slot to be one parachain. Therefore, the future plan is to complete all the necessities needed to be one parachain. 

## Additional Information :heavy_plus_sign: 

This team applied for the grant before with another project. The pull request is #169.

The team member Fuming with this idea of decentralized game center won the first place in DoraHacks Substrate Hackathon in december 2020 Beijing. This activity is supported polkadot treasury.  
