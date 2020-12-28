# Open Grant Proposal


* **Project Name:** PolkaCasino
* **Team Name:**  PolkaCasino Lab
* **Payment Address:** bc1qa0dsm7h35vvwekk4suf2wwv7n8u8hndrsj25w5

## Project Overview :page_facing_up: 

PolkaCasino is a decentralized self-sustainable financial platform where games (of gambling nature, if the community wants one) could be built. The platform integrates native token Cas, swap pools, a game center, and three mining pools. Those components together make up the entire eco-system. 

### Overview

The native token Cas is used for playing the games in the platform. The game center supplies various games, and some of which may be of gambling nature. When participating the games, a fee is charged by the platform, and then directed to the profit pool, which are later distributed among the Cas holder, platform treasury, Swap LP provider, and the develop team / project investors. 

The swap is of the purpose to provide the exchange for Cas from other cryptocurrency, such as Dot, or polka-native stable coins. Players exchange for native token Cas for playing the games, and the LP of the pool earn a part of the profits accumulated by the fee charged during the game.  More details are in the *Profit Pool Distribution* section.

The majority of the native token Cas comes from a staking process where Dot holders stake dots for mining Cas as a reward. The Dot staked would be used for the parachain auction.

Our interest in building such a project stems from the precedent revolution of central exchange made by DEX, such as uniswap. The same thing could be done for the centralized Casino. Everybody in the world should have the right to govern and share the profits of the casino where they are the clients.

The entire project will be implemented as a substrate chain.

### Project Details 

![](https://raw.githubusercontent.com/PolkaCasinoLab/sources/main/structure.png)


#### Cas Mining

The issuance of native token Cas is from a staking process. Investors stake their Dot in the platform in exchange for an opportunity of mining Cas. The Dot staked will be used for the parachain auction, which means Dot will be returned to the investors at the end of the lease of the parachain slot.

Cas will all be minted in the first parachain auction staking process. To make it clear, when the first lease of parachain slot ends, the project still needs dot to secure a parachain slot, however the staking process associated with this slot auction will NOT result in the newly minted Cas. The staker may be rewarded by the Cas in the profit pool, the revenue of the platform, collected during the previous slot lease. 

The Dot stakers are rewarded by the native token Cas. The release of the Cas will continue through out the entire duration of the staking period, i.e. parachain leasing period; however, the amount distributed versus time is in a decreasing manner, which means the majority of the Cas would be minted at some of the early stage of the staking. The distribution of Cas among stakers are dependent on the amount of Dot they provided in a linear manner.  

#### Swap

Swap is designed to support pairs like Cas/Dot, or Cas/StableCoin, or Cas and other popular assets in the polka eco-system. Players swap for Cas to play the games, and in the same time, the value of Cas are captured in this swap market.

The more demand for Cas, meaning more players are interested in playing here, will push up the price of Cas. The liquidity provider of the swap shares a part of the profits of the profits pool. More details can be found in the *Profit Pool and Distribution* section.


#### Game Center

Game center is the core part of the platform. The different kinds of games are supported here. These games are realized by manipulating the run time logic of how the block are processed. The updatable feature powered by polka dot helps in the future to update and remove a current game, and add new games. 

The way how the update, removal and adding new games work is detailed in the *Govern* section. 

#### Profit Poll and Distribution

During the play of the games, a fee is collected from the players, and then goes into the profit pool. The profit pool represents the revenue of the platform, and its distribution should make the platform work in a self-sustainable way.

The tentative plan is that, 20% goes to platform treasury, 20% goes to develop team and the project investors, and the remaining 60% goes into Cas holder and swap liquidity provider. 

The treasure serves as two purpose, the first of which is to help grow the community, and the second of which is to help raise dot for the auction of parachain slot of the next round. Cas to the platform is like the stock share to a public company, therefore the one holding Cas are eligible to share the profits made by the platform. Some of the Cas holders choose to provide liquidity to the swap, and they are also the Cas holder. Consequently, the majority of the profits made by the platform goes into their pockets.   

The exact distribution ratio are subject to change before the project launched in the mainnet. And this set of ratio are also updatable in the future during a self-governance process. More detailed could be found in the *Govern* section.

#### Govern

Cas works as the native token to the parachain.  It is also used for governing the entire platform. Cas holders could propose and then vote for or against a proposal. The vote is held in a manner that each Cas has even power in the voting. 

The thing to be governed includes but not limited to:
(1) The profit distribution ratio.
(2) Game update, game removal and adding new games.

### Ecosystem Fit 

Currently, no similar project was found in polkadot system. 

Compared to the similar platform built on EOS blockchain, our project has the following advantages. Polkadot provides a solution to randomness, which is very hard to realize in EOS. In addition,  many of the games in EOS are private owned, the code and the logic is hidden, and the profits of the platform belongs to the individual entity. However, our platform is completely transparent, every piece of code are open to the public. Plus, the platform is totally decentralized, and owned by all the native token holder.

In the ethereum eco-system, the high gas fee makes players reluctant to play. It makes non-sense for a player to spend $20 gas fee to player a game with a ticket worth $2. Plus, some games may be in a high frequency nature, which is not suitable to the current ethereum blockchain due to the limited tps.  

## Team :busts_in_silhouette:

### Team members

* Fuming Chang 
* Guoliang Zhou 

### Contact

* **Contact Name:** Fuming Chang
* **Contact Email:** cfuming@umich.edu
* **Website:** coming soon

### Legal Structure 

The team currently doesn't have a legal entity now, but intends to form one in the near future.

### Team's experience

Fuming Chang is a PhD student studying Space Physics in the University of Michigan. Fuming has experience in crypto quantitative trading, and used to be a developer for Cosmos based blockchain.

Guoliang Zhou with a master degree in computer science has three-year working experience as a blockchain developer. He worked as one of the core developers for the blockchain belonging to one Top Crypto Exchange using cosmos-sdk. As an individual developer, Guoliang won the first place in Dorahackers hackson in 2020 Beijing (ethereum ecosystem, using solidity), and won several awards during the Nebulas blockchain competition and Bytom Blockchain competition in 2018.   

### Team Code Repos

* https://github.com/PolkaCasinoLab/PolkaCasino-Substrate

### Team LinkedIn Profiles

* https://www.linkedin.com/fuming-chang

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 4 months
* **FTE:**  4
* **Total Costs:** 1.1 BTC

### Mildestone 1: Single Game Development, White Paper, and Website.
* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 0.35 BTC

| Number | Deliverable                   | Specification                                                |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| 1      | Website                       | A website will be available. On the website, users could see our project white paper, project overview, the develop team, and related information. A substrate-front-ends will also be available online for users to interact with our game demo. |
| 2      | White Paper                   | A white paper will be crafted containing all the details of the project. This white paper will be on our website. |
| 3      | Single Game Tracked on Github | The development of one single game in the substrate chain will be completed. This game will be accessible online through our website, and a substrate-front-ends would be provided for use. |

### Mildestone 2: Game module Development, Game UI.
* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 0.35 BTC

| Number | Deliverable                   | Specification                                                |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| 1      | Game Module Tracked on Github | The entire substrate game module will be completed, including more operations like update a game, remove a game and add a new game. All the progress is tracked on Github |
| 2      | Game UI                       | Game UI will be finished and presented on our website        |

### Mildestone 3: Swap Module, Staking-Mining module, Profit Pool Module, and their UI
* **Estimated Duration:** 1 months
* **FTE:**  4
* **Costs:** 0.4 BTC

| Number | Deliverable           | Specification                                                |
| ------ | --------------------- | ------------------------------------------------------------ |
| 1      | Swap Module           | The swap substrate module will be completed, and the progress are tracked on Github |
| 2      | Staking-Mining module | The staking-mining substrate module will be completed, and the progress are tracked on Github |
| 3      | Profit Pool Module    | The profit pool substrate module will be completed, and the progress are tracked on Github |
| 4      | UI                    | The corespondent UI will be finished and presented in our website. |

## Future Plans

The vision of this project is to decentralize the traditional Casino. Everyone could be the owner of the Casino and share one part of the profit. 

We intend to lease a slot to be one parachain. Therefore, the future plan is to complete all the necessities needed to be one parachain. 

## Additional Information :heavy_plus_sign: 

The team member Fuming with this idea of decentralized Casino won the first place in DoraHacks Substrate Hackathon in december 2020 Beijing. This activity is supported polkadot treasury.  