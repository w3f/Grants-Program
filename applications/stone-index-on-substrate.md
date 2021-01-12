# Open Grant Proposal

* **Project Name:** Stone Index on Substrate
* **Team Name:** stonedefi
* **Payment Address:** bc1qwyq4h8q07vjm9gm9mxjk5gew5hr06lk9ca5t0t

## Project Overview :page_facing_up: 

### Overview

Stone team proposes a STONE INDEX project which aims to track the portfolio of multiple digital assets across different blockchains, the index is designed to mimic the composition and performance of selected digital assets, particularly we are focusing on yield bearing assets (such as liquid staked tokens). As far as our knowledge goes, this is the first index on the Polkadot ecosystem, and yield bearing assets is a new asset type that creates stable rewards for holders. Stone has the vision of building the index defined by yields and expanding the horizon to index derivatives which further add to the asset offering of the Polkadot ecosystem.

The Stone team's vision is to bring solid yield to token holders, while index is a favorite investment option to normal users. There are quite some great index implementations in the Ethereum ecosystem, e.g. Tokensets, Balancer Exchange etc., and the Stone team sees a good opportunity to bring such an efficient crypto asset management instrument into the exciting Polkadot ecosystem. 

The index will be built on Substrate and join the coming Polkadot parachain ecosystem in future to increase the range of cross-chain assets to bridge staked assets from other chains to Polkadot.

Thanks to Polkadot's cross-chain protocol makes them the perfect blockchain to build an index of multiple crypto assets. We do see an exponential uptrend of Defi on the Polkadot ecosystem. Such indexes can be used in lending protocols and DEXes for users and traders to build further markets.

Stone Index is a decentralized instrument running on Stone platform (https://stonedefi.io), Stone platform is a yield maximisation protocol and asset aggregation platform of multiple strategies including Ethereum(both 1.0 and 2.0), Polkadot, Solana and so on, Stone Index will be a latest strategy to be added into Stone platform and open to all Stone users

The project will be broken down into multiple phases and we'll focus on the first phase, which is dedicated to liquid staked DOT, e.g. aDOT, bDOT and etc. from various providers, to create iDOT, which combines the total liquidity of the fragmented markets

### Project Details 

#### High level architecture

![Stone index architecture](https://github.com/RockX-SG/stone-index/blob/master/images/stone-index-architecture.jpg)

There are 3 high level components for Stone Index:

* Stone platform on Substrate(UI/UX and indexed basket management), including WebUI and a set of Substrate pallets
* One or more parachain on Polkadot for providing liquidity of staking tokens, e.g. aDOT, bDOT
* One parachain based DEX on Polkadot for Polkadot's interoperability

#### System flow

![Stone index sys flow](https://github.com/RockX-SG/stone-index/blob/master/images/stone-index-system-flow.png)

Stone Index essentially is a collateralised asset that allows the community to combine different tokens and form an index basket. Having an indexed basket makes diversified investment easier for the masses.

* Create an index
The creator of the index create a Substrate pallet that defines the composition of the basket. The Stone Team will manage these baskets(aDOT, bDOT and other liquid tokens) and indexes(iDOT) in this proposal.

* Purchase an index
Users can select to purchase from the indexed basket. They can purchase with aDOT, bDOT which would then automatically convert it to the underlying basket composition using DEX.

* Redeem an index
Alternatively if user wants to redeem the underlying index, they can choose to deposit the index token back into the Stone Platform. Subsequently the underlying tokens would be sent back to the user’s wallet.

#### Use case diagram

![Stone index use case flow](https://github.com/RockX-SG/stone-index/blob/master/images/stone-index-use-case.png)

There are 2 types of actors in Stone Index: 
* Admin: The user to manage indexed baskets 
* User: Any user who holds the desired tokens 

### Runtime module/chain - Indexed basket management pallet
#### Public exposed methods

* create_index(origin, 
To create an index with 2 tokens and weight per token
* update_index
To update the weight ratio of an existing index
* purchase_index
To purchase an index with desired token, and mint an index token(The token will be sent to the user address)
* redeem_index
To redeem token with index token, it will burn the index token and transfer the underlying token back to user address

#### Runtime storage 

```
  trait Store for Module<T: Trait> as Indexer {
      Value: map str => u8;
  }
```

#### MockUI

![Stone Index for DOT](https://github.com/RockX-SG/stone-index/blob/master/images/stone-index-ui.jpg)

## Team :busts_in_silhouette:

### Team members
* Calvin Zhou
* Tony Chew
* Raphael Yu

* Website
https://stonedefi.io

### Legal Structure 
Individual

### Team's experience

* Calvin is the Head of Engineering of RockX, he has worked on large-scale production systems for more than a decade, including  a secure payment gateway with tens of millions customers across Southeast Asian countries and a high performance cryptocurrency trading platform using NodeJS, Java, MongoDB, and RabbitMQ. Currently, he leads a team to build the RockX digital asset services platform on blockchain, which is written in Golang and NodeJS, and running on Kubernetes.

* Tony is a Senior Software Developer from RockX, he has worked in blockchain, fintech, adtech and cybersecurity industries for the past 13 years. His full stack development experience consists of UI / UX, frontend, backend development and server side deployment. At RockX, he is building a new digital asset platform and the languages he uses day to day are React, Redux, MySQL, MongoDB, NodeJS, Python & GoLang

* Raphael has 8 years IT industry experience and 3 years blockchain experience. Expertise in the technologies of smart contract and defi project and familiar with the major developer ecosystem. Have experience of leading several Ethereum Dapps engineering projects. 

### Team Code Repos

### Team LinkedIn Profiles
* https://www.linkedin.com/in/calvin-zhou-3b249517/
* https://sg.linkedin.com/in/tonychew1986

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):**  3 FTE
* **Total Costs:** 30,000 USD

### Milestone 1 -  Liquid staked DOT token

In the grant program, the Stone Team aims to provide liquidity of staked tokens on Polkadot ecosystem, and the special LP token which bounds to staked assets, like DOT token. We are aware that there are multiple teams are actively working on Polkadot ecosystem and more exciting projects on the roadmap, we'll focus on DOT-bound staked assets like aDOT first for the milestone 1
We'll also provide an easy-to-use web based UI that connects to the chrome based DOT wallet, and user can buy/sell the index using their DOT tokens easily, this UI will be part of https://stonedefi.io

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0. | License | Apache 2.0 / MIT / Unlicense |
| 1. | DEX integration | Create a Substrate pallet to trade on DEX based on Polkadot  |  
| 2. | UI/UX for Stone Platform | Update and add a new UI component that allow user to buy/sell stone index using different crypto assets, DOT for milestone 1 |  
| 3. | Indexed basket management | An indexed basket management module is a set of Substrate pallet which allows creation and update the indexed basket via configuration, e.g. weight per asset of the index | 
| 4. | Documentation | Publish tutorials and documentation in different channels, e.g. Stone Medium and other social media platforms | 

## Future Plans
Upon the completion of Milestone 1, the team will potentially add more functions like:

* Introduce the governance token for the governance purpose
* Allow user to create their own indexed basket using the governance token they earned, and get rewards of trading fees

Stone Index will be part of Stone Platform, and this grant program is the very first attempt of extent to Polkadot ecosystem in Stone Platform. The Stone team will continuously add more valuable instruments, and the team is aware that more and more teams and projects are rushing into Polkadot ecosystem, so we'll keep an eye on the new initiatives, and onboard those legitimate assets once they are ready

## Additional Information :heavy_plus_sign: 
RockX(https://rockx.com) founded by veterans and hardcore developers in Blockchain space, Rockx has been developing critical tools and applications for various Blockchains. RockX team is actively involved in building a better blockchain community and won quite some grants last year, the 2 examples are: 
* Algorand IDE(https://algorand.rockx.com/)
* Oasis Web Wallet(https://oasis-wallet.rockx.com). 

RockX helps the Stone Team to build the Stone Platform and bring Stone Platform to multiple blockchain platforms, so that allow Stone Platform users with one stop investment solution and the best user experience.


