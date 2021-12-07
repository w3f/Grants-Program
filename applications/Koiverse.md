# Koi Metaverse - Open Grants Program



* **Project:** Koi Metaverse
* **Proposer:** https://github.com/KoiMetaverse
* **Payment Address:** 0xfADc3c36E41D36796ca05B4D55b148725c804cE0


# Project Overview


## Overview


### Introduction

Koi Metaverse aims to unlock the next-gen GameFi metaverse economies and it is building the digital collectibles platform for virtual GameFi NFTs. It is a fish collection blockchain game that combines token economy and NFT assets. It consists of a series of smart contracts, and all of the in-game assets belong to its players. Players can play to earn by collecting high mining power fish and growing them, creating a positive self-circulation. 

If pure-bred mining fish is reproduced, you can lock it into the pictorial book to mine the governance token, and use it to participate in the other DeFi activities. Koiverse creates a variety of NFT assets in the form of fish images and aims to become the BearBrick in the blockchain GameFi space and the brand new Axie Infinity on the Polkadot network.


### Team Interest

Our team has more than 10 years of game development experience and 3 years of blockchain game development experience. The number of accumulated registered users in the previous games is over 50 million globally. The highest number of active unique users exceeded 1 million. Koi team is also experts in innovative gaming mechanisms, sidechain implementation, tokenization economics and decentralized wallet integration.

We are creating new kinds of virtual assets on Blockchain. Certainly we are the true Metaverse believers and builders who have strong motivation to unlock the Next-Gen GameFi Metaverse Economies. In Metaverse powered by Blockchain, we have seen the following core disruptive innovations:



* Blockchain infrastructure leads to the property rights revolution. With blockchain, we can imagine a world in which contracts are embedded in digital code and stored in transparent, shared databases so that everyone could have the real ownership of properties.
* Non-Fungible Token (NFT) changes the types and rules of games. NFT is a new form of unique digital asset designed to show someone has ownership of a unique virtual asset. It will become a new trend of virtual assets for creating, trading and collecting.
* Tokenization and crypto creates brand-new business models. Crypto unlocks new rules of business models in game, like the concept of Play-to-Earn (P2E) which created new types of jobs and professions in digital Metaverse economies.


## Project Details


### Project Architecture

The technical architecture of the project:

![](https://statics.fishnft.xyz/github/koi.png)


The gaming NFT protocols and Dapp consists of:



* NFT Lottery Draw (NFT function)
* NFT Auction Sale (NFT function)
* NFT Minting (NFT function)
* Fish NFT (game asset)
* Fish Tank NFT (game asset)
* Fish Breeding (game function)
* Fish Mining (game function)
* Pictorial Book Mining (game function)


#### NFT Functions

**NFT Lottery Draw**


### Types



* `name` - activity name
* `nft` - nft contract address
* `noin` - coin contract address
* `price` - fees needed to run lottery
* `total` - total number of lotteries 
* `remain` - remnant quantity
* `limit` - nft limited per person 
* `startTime` - activity start time 
* `endTime` - activity end time


### Functions



* `lottery()` - lottery

**NFT Auction Sale**


### Types



* `name` - activity name
* `nft` - nft contract address
* `coin` - coin contract address
* `startTime` - activity start time
* `endTime` - activity end time


### Function



* `fishList()` - read the fish list in the auction activity
* `fishGeneList()` - read the fish gene list in the auction activity
* `bid()` - users submit bids
* `refreshFishList()` - refresh the fish list
* `getMyFish()` - users acquired the bade fish

**NFT Minting**


### Types



* `nft` - nft contract address
* `coin` - coin contract address
* `totalNft` - current NFT quantities in mining pool
* `totalNftPower` - current total NFT mining power in mining pool


### Function



* `myNft()` - read staked NFT
* `getNft()` - read one nft info
* `earned()` - read mining profit
* `stakeNft()` - stake nft
* `withdrawNft()` - withdraw the staked nft
* `withdrawNftAll()` - withdraw all staked nfts
* `getReward()` - acquire mining reward


#### NFT Assets

**Fish NFT**



* Each fish is composed of 14 genetic components: shape, color, pattern, eyes, mouth, pectoral fin, dorsal fin, caudal fin, decorations, invisible components, and breeding sequence.
* The highest mining power of the fish is determined by the sum of each part’s mining power, gear buff, and the cultivation level.
* When certain fish genes match, a mining power bonus and pictorial books will be activated.  

**Fist Tank NFT**



* The fish can grow up in fish tanks. The cultivation time cycles are 10 days, 30 days, and 90 days, which respectively come with a maximum 30%, 120%, and 400% mining power increase.
* Each fish tank may have unique features and different capacities.
* Fish tanks and fish cannot be sold during the lock period.
* In the cultivation time, the fish cannot engage in mining or breeding.


#### Game Functions

**Fish Breeding**



* The only way gamers can mint new fish NFT assets is to breed fish. The cost of the very first breeding is determined by the average mining power P of the parent fish and the average ecological mining power AP. The cost F=K*P/AP, tentatively K = 500.
* The progeny genes are inherited from the parent fish genes, and each parent has a 50% chance to propagate its genes.
* The scarcity of the fish gene is classified as normal, scarce, epic, and legendary. The scarce, epic, and legendary genes, respectively, have a 50%, 35%, and 25% chance to be inherited. There is a 1% chance to increase the gene scarcity level, or the genes will mutate into random and normal genes.

**Fish Mining**



* All fish with mining power can obtain reward tokens every day proportionately. The amount of reward token available to mine per day (M) is related to (F) the total sum of the fish (mining power>0) participating in mining. M=K*F^0.9，K as a constant, tentatively K=50.
* Only the fish that are not being sold, bred, or locked by pictorial books can participate in mining.
* Every time a fish participates in mining, it loses 4% of the mining power until it reaches 0.

**Pictorial Book Mining**



* A gamer can activate a pictorial book when acquiring some pure-bred fish with the built-in suites.
* You can start mining reward tokens if you lock the right fish into the pictorial book. The locked fish must have full mining capacity.
* There are 4 levels to each fish’s pictorial book: 0, 10, 30, and 90 growing up days in fish tanks.
* When level 2, level 3 or level 4 fish are locked, the system automatically releases the low-level fish previously locked. You can only lock one fish, and you can double your points after collecting all level 4 fish, in all the colors, with the same suit.
* The mined reward tokens are distributed according to the points and settled once a day. At the same time, the mining power is reduced by 4%. If the mining power is 0, then no more mining can be done.


#### Front End



* Implement web front-end based on react.js and polkadot.js. Modules include: NFT Lottery Draw, NFT Auction Sale, NFT Minting, Fish and Fish Tank.
* Implement web front-end based on react.js, polkadot.js and pixi.js. Game functions include Fishing Mining, Fish Breeding, Pictorial Book Mining.
* UI mockups: https://www.figma.com/file/0uuKT3XxB6hbzyFxLnzfAr/Koi-Metaverse?node-id=0%3A1
* Fish Gene and Images: https://drive.google.com/drive/folders/1R4EoaDhoPkpxd9vchh7KLs-jx94pKad1?usp=sharing


### Ecosystem Fit

Existing GameFi NFT projects mainly focus on the public chains, games and collectible publishing, Marketplace, etc. Popular projects working in this segment include Axie Infinity (NFT game), Chiliz (sports-oriented underlying public chain), Flow (general NFT issuance public chain), and Opensea (general marketplace). We will add more game functions than Axie Infinity and build on the Substrate framework. We also can collaborate with native Polkadot NFT marketplace [RMRK](https://www.rmrk.app/) and [NFTMart](https://www.nftmart.io/).

  


# Team


## Team Members



* Anetta Sultygova - Project Lead
* Euglena Liu - Product Manager
* Yuan Li - Full-stack Developer
* Tao Liu - UI/UX Designer
* Jelly Ji - Front-end Developer
* Hongfeng Liu - Artistic Designer
* Vladan Falcic - NFT Advisor


## Team Website



* [https://www.koi.io/](https://www.koi.io/)


## Legal Structure



* Koi Metaverse Ltd. is a company registered in the British Virgin Islands.


## Team Experience

Anetta Sultygova



* 8-years project management and investing experience in the blockchain industry. She is good at structuring and organizing the teams around the projects.
* Seasoned experience in NFT ecosystem and marketing strategy.
* Marketing and community management in MILC, Realm, BloXmove and Metis etc.

Euglena Liu



* Product lead of fishchain and Paopaoyu (Top 10 web game on Renren “Chinese Facebook”).
* 8-years gaming product design experience in the game industry.
* Early player and investor in Axie Infinity ($AXS).

Yuan Li



* 10-years full stack software development experience
* 5-years blockchain and smart contract development experience
* Over 15 years of experiences in development and Management
* Expert in Ethereum, Polkadot, Neo and other smart contract platforms.

Tao Liu



* 3-years of product management experience in the game industry.
* 20-years of art design and animation experience.
* Former Front-end Director of LightInBox, Fishchain and ShopperPlus.

Vladan Falcic



* Blockchain and crypto enthusiast, he entered the crypto space back in 2014 and was mostly involved in early stage projects. 
* In 2016, he started working with different projects, improving their marketing and establishing valuable partnerships. 
* As the CEO of Squares Capital, he is working with several startup projects, advising them, improving their marketing and building the community. 

Jelly Ji



* 5-years experience in html5 and front-end stack development.
* Expert in mobile game development, H5 game development and blockchain game development
* Bsc in Information Management and Information System of Beijing University of Posts and Telecommunications

Hongfeng Liu



* Senior UI and animation designer.
* 3-years experience in blockchain game development


## Team Code Repos



* [https://github.com/KoiMetaverse](https://github.com/KoiMetaverse)


## Team Linkedin Profiles



* [https://www.linkedin.com/in/anetta-sultygova/](https://www.linkedin.com/in/anetta-sultygova/)
* [https://www.linkedin.com/in/taoliu-designer/](https://www.linkedin.com/in/taoliu-designer/)
* [https://www.linkedin.com/in/vladan-falcic-sqcap/](https://www.linkedin.com/in/vladan-falcic-sqcap/)
* [https://www.linkedin.com/in/jelly-ji-7b193a177/](https://www.linkedin.com/in/jelly-ji-7b193a177/)
* [https://www.linkedin.com/in/euglena-game/](https://www.linkedin.com/in/euglena-game/)


# Development Roadmap


## Overview



* Total Estimated Duration: 3 months
* Full-time equivalent (FTE): 4 FTE
* Total Costs: 12,000 DAI


### **Milestone 1 —— Koi Metaverse NFT Modules and Assets**



* Estimated Duration: 3 months
* FTE: 4 FTE.
* Costs: 12,000 DAI

<table>
  <tr>
   <td>
<strong>Number</strong>
   </td>
   <td><strong>Deliverable</strong>
   </td>
   <td><strong>Specification</strong>
   </td>
  </tr>
  <tr>
   <td>0a.
   </td>
   <td>License
   </td>
   <td>Apache 2.0
   </td>
  </tr>
  <tr>
   <td>0b.
   </td>
   <td>Documentation
   </td>
   <td>We will provide inline documentation, video, medium articles & start creating the lightpaper of the project.
   </td>
  </tr>
  <tr>
   <td>0c.
   </td>
   <td>Testing Guide
   </td>
   <td>The code will have proper unit-test and guid coverage for Koi Metaverse modules
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>smart contract: NFT Lottery Draw
   </td>
   <td>NFT lottery contract include: lottery function implemented by ink
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>smart contract: NFT Auction Sale
   </td>
   <td>NFT auction contract include: fishList, fishGeneList, bid, refreshFishList, getMyFish functions implemented by ink
   </td>
  </tr>
  <tr>
   <td>3.
   </td>
   <td>smart contract: NFT Minting
   </td>
   <td>NFT minting contract include: myNft, getNft, earned, stakeNft, withdrawNft, withdrawNftAll, getReward functions implemented by ink
   </td>
  </tr>
  <tr>
   <td>4.
   </td>
   <td>smart contract: Fish
   </td>
   <td>fish contract include: gene, birthday, power, reproduction, growth implemented by ink
   </td>
  </tr>
  <tr>
   <td>5.
   </td>
   <td>smart contract: Fish Tank 
   </td>
   <td>fish tank contract include: capacity, totalPower, fishList implemented by ink
   </td>
  </tr>
  <tr>
   <td>6a.
   </td>
   <td>UI mock-ups
   </td>
   <td>The UI design of product frontend and product workflow.
   </td>
  </tr>
  <tr>
   <td>6b.
   </td>
   <td>Fish Genes and Images
   </td>
   <td>The UI design and gene system of fish NFTs.
   </td>
  </tr>
  <tr>
   <td>7.
   </td>
   <td>Front end
   </td>
   <td>Implement web front-end based on react.js and polkadot.js. Modules include: NFT Lottery Draw, NFT Auction Sale, NFT Minting, Fish and Fish Tank. Fish Mining, Fish Breeding.
   </td>
  </tr>
  <tr>
   <td>8. 
   </td>
   <td>Test
   </td>
   <td>We will provide a dockerfile to demonstrate the usage of our modules.
   </td>
  </tr>
</table>


## Community Engagement



* **Play to Earn:** Koi Metaverse will also adopt the P2E model to inspire players of GameFi games. Through P2E, players can share the growth and development dividend of the Koi Metaverse.
* **Genesis Collection:** [Koi NFTs Genesis Collection Offering — Phase 1: Newborn](https://koimetaverse.medium.com/koi-nfts-genesis-collection-offering-phase-1-newborn-5619038200c6) Genesis Collection is an effective way to start a project and have public awareness.
* **GameFi Communities:** Koi Metaverse will collaborate with game P2E communities, including Yield Guild Games (YGG), A16, etc. to complete users acquisition and users growth.


# Future Plans

Our project plans to become a parachain for the Polkadot network, which provides benefits from shared security and communications (XCMP). We will launch our game application Koi Metaverse first to complete the first adoption and then open our infrastructure layer Koi Network to support more game Dapps. The Koi Network will support marketplace, NFT DeFi, GameFi Hub and Cross-chain Gateway, etc.


# Additional Information



* Website: [https://koi.io/](https://koi.io/) (Previously [http://koi.network/](http://koi.network/))
* Twitter: [https://twitter.com/KoiMetaverse](https://twitter.com/KoiMetaverse)
* Discord: [https://discord.gg/Aj5Zq9Cx9r](https://discord.gg/Aj5Zq9Cx9r)
* Telegram: [https://t.me/KoiMetaverse](https://t.me/KoiMetaverse)
* Medium: [https://medium.com/@KoiMetaverse](https://medium.com/@KoiMetaverse)
* Github: [https://github.com/KoiMetaverse](https://github.com/KoiMetaverse)
* LinkedIn: [https://www.linkedin.com/company/koi-metaverse](https://www.linkedin.com/company/koi-metaverse)
* Email: [info@koi.io](mailto:info@koi.io)
