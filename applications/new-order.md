# New Order - a full onchain orderbook dex with indexers

* **Team Name:** Standard Protocol
* **USDC Payment Address:**  0xd2234E506862991ADA75f930c6D79B4236e3E265
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/1160#issuecomment-1481821012)
## Project Overview :page_facing_up:

### Overview

This orderbook dex substrate frame and indexer logics focuses on bringing true orderbook runtime with feasible indexer in Polkadot ecosystem other than just UI mockup from Fiverr.
This is clearly a frame and indexer using Subquery with reasons, not investment seeking parachain design.

### Project Details

* [Standard Protocol Website](https://standard.tech/)

### Technologies

1. Rust
2. Substrate Runtime

### Components

### new-order

New order is the substrate module that processes orders in a queue model.

### Indexer

Indexer is the middleware in blockchain where it aggregates events from the block and make a database with insights.
It is often used to retrieve an account's status upon interaction with a certain dapp.
Subquery is an indexer middleware that we use to integrate with in this grant.

### Ecosystem Fit

:link:  **Smart Contract Development Tool**<br />

### Project Uniqueness

* The world's first fully open-source permissionless orderbook dex runtime with queue model.

## Reactive Queue

Unlike other layer 2 orderbook dex which uses

### Target Audience

* End users who are used to order book exchanges

### Problem Addressed

* Why Orderbook?

After developing dex with [Standard](www.github.com/digitalnativeinc/standard-evm) in Polkadot ecosystem, There is a huge blocker on providing liqudity between polkadot ecosystem assets; **XYK pool economically does not make sense to be made from bottom-up**.
  0. Just to explain DEX in this document, It is an automated market maker between asset x and y keeping its equation x * y = k(k as the variable determining the price between asset on each trade). I see some grant editors are new to this field, so I leave this video link [https://www.youtube.com/watch?v=Af3NxB7r-Ws](https://www.youtube.com/watch?v=Af3NxB7r-Ws) to understand the concept. Many people forget that to make an xyk pool it requires a centralized power-play setting up initial price, and this is something that this grant focuses.

  1. XYK pool relies on the fact that price K can be made from each pair liquidity providers. To choose the price, the liquidity provider with more dominant or liquid asset in an ecosystem take the advantage. Let's say there is a pair between USDC and some new parachain project token $NEW or $DOT and $NEW. It is obvious that $DOT and $USDC liquidity provider take advantage of the $NEW token.
  2. $NEW token has two choices; to fight back by buying $DOT or $USDC, but they are fighting with the liquidity provider in the first place. The other is not to list at all, then this may lead to negotiation on finding the right price on initial pair creation.
  3. While parachain projects are finding the "right" price, pair is not made, and an end user can't even trade assets in polkadot ecosystem, so they will quit using this.

Hence, orderbook dex is not only needed for the "actual" polkadot user to trade the asset in polkadot ecosystem and take ownership of the market across this multichain ecosystem but also building market from bottom-up organically.

There are other benefits as well:

* Possibility for perpetual trade(e.g. dy/dx)
* Possibility for MEV bot ecosystem (e.g. [flashbot](https://www.flashbots.net/))
* Familiar UX

* Why Parachain?

For adding smart contract tokens and testing xcm tokens.

* Why Open Source?

For keeping it real. Doing honest job. Yes Web3.0, No Web2.0. Audit teams require the project to be open-source anyways so we do it.

* Reference?

Kujira team from Cosmos ecosystem already built this without bragging or marketing. Instead of bragging about their 10x multichain future in conferences, they kept their mouth shut and built it.

[Kujira Fin](https://fin.kujira.app/trade/kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867)

* Concerns?

1. A transaction may be finalized more or less than 12 seconds. Improving the block finalization time may be needed, but it is safer than layer 2 with bridge.
2. If indexer from operator shuts down, the UI cannot work.

## Team :busts_in_silhouette:

### Team members

(Development & Engineers)

* [Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang) - Founder & Head of Development

### Contact

* **Contact Name:** Hyungsuk Kang
* **Contact Email:** hyungsuk@standard.tech
* **Website:** [https://standard.tech](https://www.standard.tech)

### Legal Structure

Digital Native Foundation.

3 Fraser Street #05-25 Duo Tower,

Singapore

### Founders' experiences

* [Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang) has experience working in blockchain industry over 3 years and is a contributor to UST restitution group. Being enlightened that with people who are saying DAOs and Governance can bring decentralzation were actually the one who tries to rule the whole system, He is now making a new standard in defi securing self-sovereignty of users' finance in web3.0 with enforceable, immutable financial contract that can keep promise without Governance's interference.

### Team Code Repos

* Standard Protocol's team Github: <https://github.com/digitalnativeinc>

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
* **Total Costs:** $15000 equivalent

### Milestone 1 — Implement Runtime module for dex order

* **Estimated duration:** 10 weeks
* **FTE:**  1
* **Costs:** $15,000 equivalent USDC

Goal - Develop new-order pallet and documentation for the pallet

New order pallet consists of:

###### Primitives

Order

```
- order_id: Global order identifier for ticketing
- pair_id: Pair where the order is placed in
- owner: the owner of the Order request
- price: Order price for showing info when called individually
- amount: Requested amount for trade
- order_type: BID or ASK
```

Pair

```
- id: Pair id
- human: Human-readable info for the pair(e.g. BTC-USDT)
- from: Trading from
- to: Trading to
```

###### Storages

`Bids`(key1: pair_id, key2: price[in 6 decimals], value: order_id[]): A double hash map for Total bids in a price of an asset
`Asks`(key1: pair_id, key2: price[in 6 decimals], value: order_id[]): A double hash map for Total asks in a price of an asset
`Pairs`(key: pair_id, value: Pair): A hashmap for storing pair information.
`Orders`(key: order_id, value: Option&lt;Order&gt;): A hashmap for orders.
`Prices`(key1: pair_id, key2: asset_id, value: price in 6 decimal): A double hash map for market price in new order runtime.
`WhiteListed`(key: pair_id, value: bool): A hash map to store whitelisted pairs

###### Calls

`add_pair`: a sudo function to add a pair in the orderbook
`remove_pair`: a sudo function to remove a pair in the orderbook
`place_bid`: place bid on the orderbook, if existing orders match with ask, dissolve while going through the ask queue.
`place_ask`: place ask on the orderboook, if existing orders match with bid, dissolve while going through the bid queue.
`cancel_order`: cancel an order submitted from the sender

###### Events

`BidOrderFulfilled`: an event when an order is fullfilled
`AskOrderFulfilled`: an event when an order is fullfilled
`AskOrderMatched`: an event when an order is matched for certain amount
`BidOrderMatched`: an event when an order is matched for certain amount
`NewBidOrder`: an event when a new bid order is requested in the orderbook
`NewAskOrder`: an event when a new ask order is requested in the orderbook
`CanceledOrder`: an event when an order is canceled
`PairWhitelisted`: an event when an asset pair is whitelisted

I will build this.

### Documentation

Gitbook documentation is not enough to describe interacting with the software in current market. Guides are getting more important as more general people have been exposed to crypto. Polkadot has many tech to build something but coordination of them is poorly done. This section specifies which document to write for sufficient approach for newcomers and new devs. The documentation will add 2 categories, 3 subcategories, and at least 6 pages built with docusaurus framework.

##### Why Docusauraus?

Docusauraus supports algolia search with customizable UI components with React. Some of the components include [codehike](https://codehike.org/).

```
(Home)
  - What is New Order?
  - Learn More
  - Community
  Security
  FAQ


<Protocol>
  (Overview)
    Protocol Participants
    Tokens

  (Governance)
    Proposal Types
    Whitelist procedure

<Runtime>
new-order: new-order pallet description 
  - Primitives
  - Storages
  - Calls
  - Events
```

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | I will write this in official [documentation](https://github.com/standardweb3/docs) |
| 0c. | Testing Guide | Test code will be provided in the pallet. |
| 0d. | Docker | Docker can be provided for running this in substrate. |
| 1. | Pallet code | the code repo will be open source with name `new-order` |

### Documentation

Gitbook documentation is not enough to describe interacting with the software in current market. Guides are getting more important as more general people have been exposed to crypto. Polkadot has many tech to build something but coordination of them is poorly done. This section specifies which document to write for sufficient approach for newcomers and new devs. The documentation will add 1 category, at least 2 pages.

```
<Developers>
newordercli: A CLI to execute orders with new order
neworder.js: Usage guides with query, execution
```

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | I will write this in official [documentation](https://github.com/standardweb3/docs) |
| 0c. | Testing Guide | Test code will be written in neworder.js |
| 0d. | Docker | Dockerfile is not needed |
| 1. | Library Repo | The code for the library will be open source for PoC. |
| 2. | CLI Repo | The code for CLI interacting with new order will be open source for PoC. |
| 2. | Article & Video |  We will write an **article** that explains the work done as part of the grant, as well as release a video demo of executing newordercli |

## Future Plans

* Researching BitMex p2p perpetual system, this may be implemented for next step as funding procedure is clarified.
* Turn LPs from pair liquidity provider to future market fund provider
* Integrate with trading view lightweight chart for building UI
* XCM integration in Rococo
* EVM impl for multichain expansion
* Build Governance for onboarding tokens can be further developed
* Make real UI based on the working system with SubQuery or other indexer
* Get funded so that I can feed my devs

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
I applied before.
