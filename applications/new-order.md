# W3F Grant Proposal

* **Project Name:** New Order - a full onchain orderbook dex with indexers
* **Team Name:** Standard Protocol
* **USDC Payment Address:**  0xd2234E506862991ADA75f930c6D79B4236e3E265
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This orderbook dex substrate frame and indexer logics focuses on bringing true orderbook runtime with feasible indexer in Polkadot ecosystem other than just UI mockup from Fiverr.
This is clearly a frame and indexer using Subquery, not investment seeking parachain design.

### Overview

* Why Orderbook?

After developing dex with [Standard](www.github.com/digitalnativeinc/standard-evm) in Polkadot ecosystem, I found out it will never going to work like osmosis because **We can't provide matching liqudity between projects**.
  0. Just to explain DEX in this document, It is an automated market maker between asset x and y keeping its equation x * y = k(k as the variable determining the price between asset on each trade). I see some grant editors are new to this field, so I leave this video link [https://www.youtube.com/watch?v=Af3NxB7r-Ws](https://www.youtube.com/watch?v=Af3NxB7r-Ws) to understand the concept.
  1. I heard Osmosis were actually the team who got kicked out from Jae Kwon, Cosmos founder saying that they are all shit. I do not know if this is true or not, but it is ironic they actually built something better than his recent project. Anyways, I believe they took many ATOMS from the company for the liqudity? (Source: Cosmos frens)
  2. The team is not Osmosis, and parachain projects are acually like families with knives behind the back trying to stab each other to take limited slots. After all, they are all businesmen, so there is no beautiful or "decentralized" situation where they just easily set prices on each other and make initial pair in DEX. Competitions are neccessary for better projects to kick in to the ecosystem, but no wonder why nobody wants to sit in the table. In fact, we do not have liquid tokens(e.g. ATOM) to get enough matching liquidity between parachain project tokens on making a dex pair.    
  3. While parachain projects are finding the "right" price, pair is not made, and an end user can't even trade assets in polkadot ecosystem, so they will quit using this. 

Hence, orderbook dex is needed for the "actual" polkadot user to trade the asset in polkadot ecosystem and take ownership of the market across this multichain ecosystem.

There are other benefits as well:
- Possibility for perpetual trade(e.g. dy/dx)
- Possibility for MEV bot ecosystem (e.g. [flashbot](https://www.flashbots.net/))
- Familiar UX

* Why Parachain?

For adding smart contract tokens and testing xcm tokens.

* Why Open Source?

For keeping it real. Doing honest job. Yes Web3.0, No Web2.0. We need audits anyways so we open-source it.

But License may be different as there are more than 2 projects which aspire to be dex in polkadot. 

Also, if W3F cannot show this in their official discord that this is the first fully open-source orderbook dex in Polkadot ecosystem, I am not building this as many copycats can take over this code.

* Reference?

Kujira team from Cosmos ecosystem already built this without bragging or marketing. Instead of bragging about their 10x multichain future in conferences, they kept their mouth shut and built it.

[Kujira Fin](https://fin.kujira.app/trade/kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867)

* Concerns?

1. A transaction may be finalized more or less than 12 seconds. Improving the block finalization time may be needed, but it is safer than layer 2 with bridge.
2. If indexer from operator shuts down, the UI cannot work.

### Project Details

* [Standard Protocol Website](https://standard.tech/)

### Technologies
1. Rust
2. Substrate Runtime
3. Subquery
4. Polkadot.js or substrate-connect

### Components

### new-order

New order is the substrate module that processes orders in a queue model.

### Subquery

Subquery is an indexer that aggregates the whole experince of 

### Ecosystem Fit

:link:  **Smart Contract Development Tool**<br>


### Project Uniqueness
* The world's first fully open-source orderbook dex runtime with queue model.

### Target Audience
* End users who are used to order book exchanges

### Problem Addressed

After developing dex with [Standard](www.github.com/digitalnativeinc/standard-evm) in Polkadot ecosystem, I found out it will never going to work like osmosis because **We can't provide matching liqudity between projects**.
  0. Just to explain DEX in this document, It is an automated market maker between asset x and y keeping its equation x * y = k(k as the variable determining the price between asset on each trade). I see some grant editors are new to this field, so I leave this video link [https://www.youtube.com/watch?v=Af3NxB7r-Ws](https://www.youtube.com/watch?v=Af3NxB7r-Ws) to understand the concept.
  1. I heard Osmosis were actually the team who got kicked out from Jae Kwon, Cosmos founder saying that they are all shit. I do not know if this is true or not, but it is ironic they actually built something better than his recent project. Anyways, I believe they took many ATOMS from the company for the liqudity? (Source: Cosmos frens)
  2. The team is not Osmosis, and parachain projects are acually like families with knives behind the back trying to stab each other to take limited slots. After all, they are all businesmen, so there is no beautiful or "decentralized" situation where they just easily set prices on each other and make initial pair in DEX. Competitions are neccessary for better projects to kick in to the ecosystem, but no wonder why nobody wants to sit in the table. In fact, we do not have liquid tokens(e.g. ATOM) to get enough matching liquidity between parachain project tokens on making a dex pair.    
  3. While parachain projects are finding the "right" price, pair is not made, and an end user can't even trade assets in polkadot ecosystem, so they will quit using this. 

Hence, orderbook dex is needed for the "actual" polkadot user to trade the asset in polkadot ecosystem and take ownership of the market across this multichain ecosystem.

## Team :busts_in_silhouette:

### Team members 
(Development & Engineers)

* [Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang) - Founder & Head of Development

### Contact

* **Contact Name:** Hyungsuk Kang
* **Contact Email:** hyungsuk@standard.tech
* **Website:** [https://standard.tech](https://www.standard.tech)

### Legal Structure

Digital Native Foundation. </br> 
3 Fraser Street #05-25 Duo Tower, </br> 
Singapore </br> 

### Founders' experiences

* [Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang) has experience working in blockchain industry over 3 years and is a contributor to UST restitution group. Being enlightened that with people who are saying DAOs and Governance can bring decentralzation were actually the one who tries to rule the whole system, He is now making a new standard in defi securing self-sovereignty of users' finance in web3.0 with enforceable, immutable financial contract that can keep promise without Governance's interference.

### Team Code Repos

* Standard Protocol's team Github: https://github.com/digitalnativeinc

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* [Hyungsuk Kang](https://www.github.com/hskang9) - Founder & Head of Development

### Team LinkedIn Profiles (if available)

* [Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang), Founder

## Development Status :open_book:
I have fiddled with substrate last year.

[nxcw](https://github.com/digitalnativeinc/standard-substrate)

## Development Roadmap :nut_and_bolt:

### Overview

* **Full-Time Equivalent (FTE):** 1
* **Total Costs:** $30000 equivalent

### Milestone 1 — Implement Runtime module for dex order

* **Estimated duration:** 5 weeks
* **FTE:**  1
* **Costs:** $10,000 equivalent USDC

Goal - Develop new-order pallet

New order pallet consists of:

###### Primitives
Order
```
- order_id: Global order identifier for ticketing
- pair_id: Pair where the order is placed in
- price: Order price for showing info when called individually
- amount: Requested amount for trade
```

Pair
```
- id: Pair id
- human: Human-readable info for the pair(e.g. BTC-USDT)
- from: Trading from
- to: Trading to
```

###### Storages
`Bids`(key1: pair_id, key2: price[6 decimals], value: Order[]): A double hash map for Total bids in a price of an asset
`Asks`(key1: pair_id, key2: price[6 decimals], value: Order[]): A double hash map for Total asks in a price of an asset
`Pairs`(key: pair_id, value: Pair): A hashmap for storing pair information.

###### Calls
`add_pair`: a sudo function to add a pair in the orderbook
`remove_pair`: a sudo function to remove a pair in the orderbook 
`place_bid`: place bid on the orderbook, if existing orders match with ask, dissolve while going through the ask queue.
`place_ask`: place ask on the orderboook, if existing orders match with bid, dissolve while going through the bid queue.

###### Events
`BidOrderFulfilled`: an event when an order is fullfilled
`AskOrderFulfilled`: an event when an order is fullfilled
`AskOrderMatched`: an event when an order is matched for certain amount
`BidOrderMatched`: an event when an order is matched for certain amount
`NewBidOrder`: an event when a new bid order is requested in the orderbook
`NewAskOrder`: an event when a new ask order is requested in the orderbook

I will build this.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will write this in README |
| 0c. | Testing Guide | Test code will be provided in the pallet. |
| 0d. | Docker | Docker can be provided for running this in substrate. |
| 1. | Pallet code | the code will be placed in `Standard-frame`. |

### Milestone 2 — Subquery indexer 

* **Estimated duration:** 5 weeks
* **FTE:**  1
* **Costs:** $20,000 equivalent USDC

Goal - Make an indexer from pallet events then draw chart data with volume.

This milestone focuses on building an indexer in subquery to process pallet events and aggregate in GraphQL. The PoC for this is to provide compatible data for TradingView to display charts like [this](https://jsfiddle.net/TradingView/cnbamtuh/).

This milestone builds:
- Ticker for certain asset pair
- Volume changes in the array

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 | 
| 0b. | Documentation | I will do this in README. |
| 0c. | Testing Guide | Testing guide will be provided to run PoC on this with TradingView lightweight chart |
| 0d. | Docker | Dockerfile may be provided if |
| 1. | Indexer Repo | The code for the indexer will be open source for PoC. |
| 2. | Article & Video | 	We will write an **article** that explains the work done as part of the grant, as well as release a video walk through demonstrating New-order |

## Future Plans

* Researching BitMex p2p perpetual system, this may be implemented for next step as funding procedure is clarified.
* XCM integration in Rococo
* Build Governance for onboarding tokens can be further developed
* Make `new-order.js` for executing trading from bots
* Make real UI based on the working system
* Get funded so that I can feed my devs

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
I applied before.
