# DEX Aggregator

- **Team Name:** Find Signal
- **Payment Address:** 0x8cdf9e28B5C49A80c039d68Fb5807Ed8EdE72E67 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

Bay Aggregator is a multi-parachain DEX aggregator with limit order functionality for the Polkadot & Kusama Ecosystem.

#### What does Bay Aggregator do?

1. Makes trading:
   - **Efficient**: Chains together swaps across multiple liquidity sources to find the most profitable route to execute a trade.
     - For example, you might get the best price to convert Token A to Token B from the following: Convert Token A to Token X on DEX A, then, convert Token X to Token B on DEX C.
   - **Seamless**: Abstracts away the above described complexity by letting the users achieve the above in one transaction, similar experience to trading on a single DEX.
2. **Limit Orders**: Users can set the price ratio at which they want to swap Token A to Token B, the protocols swaps it for them if and when the target price ratio is reached. The Limit Order Protocol will also leverage the DEX Aggregator for maximum efficiency.

#### How does the Bay Aggregator relate to the Polkadot Ecosystem?

Bay Aggregator will initially be deployed on select parachains that:

- Support EVM smart contracts.
- Have a healthy DeFi ecosystem.

On the basis of the above two criterias, Bay Aggregator will initially be available on:

- Moonriver
- Moonbeam
- Astar

Hence, providing value to the DeFi users on Moonriver, Moonbeam, and Astar, which are part of the greater Polkadot & Kusama Ecosystem.

#### Why are we interested in building the Bay Aggregator?

We've been knee-deep in the Polkadot & DeFi ecosystems for over three years now. From building a staking dashboard for Polkadot & Kusama, to a yield farm listicle spanning across 5 parachains.

We see the missing pieces in current DeFi ecosystem on parachains, and we want to build them.

### Project Details

#### Architecture

![](https://i.imgur.com/2q0xV1o.png)

##### DEX Aggregator

- EVM Smart Contracts: Protocol layer of the product that interact with the DEXes.

  - `DEX Adapters`: Every supported liquidity source will have an adapter that'll let the backend service query data from a unified interface. The adapters will also be used by the `DEX Aggregator` contract to interact with the liquidity sources.
  - `DEX Aggregator`: Smart Contract responsible for performing the aggregated swaps. This contract will recieve the information necessary to perform the swap(liquidity sources, routes, etc) and then interact with the `DEX Adapters` to perform the swap.

- Backend Services

  - `User Data Service`: API & indexer to keep track of the users' token balances, trade history, and limit order history across the supported chains.
  - `Route Aggregator Oracle`: API to find the best route for token-to-token swaps across the supported liquidity sources. It'll also include an endpoint to return signed data for smart contracts to verify the source.

- UI/Frontend
  - Swap UI: Interface to allow the users to perform the aggregated swaps.
  - Trade History UI: Interface to display all the users' past trades that took place through the aggregator.

##### Limit Order Protocol

- Smart Contracts
  - `Limit Order Protocol`: Set of EVM smart contracts that constitute the on-chain logic required for enabling limit orders.
- Backend
  - `Order Execution Keeper`: Off-chain bots that'll execute pending limit orders.

#### Technology Stack

- Backend
  - Services will pre-dominantly be written in **Rust**. Along with a sprinkle of **Typescript**, if required.
- Smart Contracts: **Solidity**
- Frontend
  - **NextJS**
  - **TailwindCSS**
  - **wagmi**

We'll also make sure to add **error monitoring services**, like Sentry, across the stack wherever we find necessary.

#### Limitations

Order splitting is not supported. Order splitting lets you divide your swap between multiple different liquidity routes. For example, 50% through DEX A, 50% through DEX B.

Order splitting will considerably increase scope, which is why we leave it out for now. Though, it's definitely a feature we want to incorporate at a later stage.

### Ecosystem Fit

Bay Aggregator aims to serve all the DeFi users on the supported Polkadot & Kusama Parachains.

Token swaps are the foundation of DeFi. By allowing for efficiency and optimizing for ease-of-use, we wish to make the lives of every DeFi user better.

Bay Aggregator will also act as a piece of infra which other DeFi dApps can integrate with to enable efficient swaps.

#### Comparing to [OpenOcean](https://openocean.finance/)

OpenOcean is a DEX Aggregator available on Moonriver and has feature parity, if not more, with our spec.

But, OpenOcean's focus is solely on the EVM land with no plans to expand beyond.

That's where we differ.

Bay Aggregator is a DEX Aggregator for the Dotsama Ecosystem. We'll expand it to a lot more parachains as and when need arises, and develop the tech necessary(ink smart contracts/substrate pallets) for it in the meantime.

## Team :busts_in_silhouette:

### Team members

- Name of team leader
  - Manan Gouhari
- Names of team members
  - Saumya Karan
  - Rajdeep Bharati
  - Sarthak Verma
  - Pragun Dua

### Contact

- **Contact Name:** Manan Gouhari
- **Contact Email:** manan@findsignal.studio
- **Website:** [Find Signal](https://www.findsignal.studio/)

### Legal Structure

- **Registered Address:** 3 Fraser Street, #05-25 Duo Tower, Singapore (189352)
- **Registered Legal Entity:** Find Signal PTE. LTD.

### Team's experience

Our team has previously built:

- [YieldBay List](https://list.yieldbay.io), a dotsama yield farm aggregator with close to 150 farms across 14 protocols listed on the platform, with an average of 700 monthly users. We have received a [grant from Polkadot Treasury](https://polkadot.polkassembly.io/motion/262) for the same.
- [Yieldscan](https://yieldscan.app/), a staking interface for Polkadot & Kusama which has previouly received two grants from the Web3 Foundation and moved $100M+ in cumulative staking volume since launch.
- ChurroFi, a staking interface for [Celo](https://celo.org) that received a grant from the Celo Foundation. ChurroFi is deprecated, but a mirror of it is live at [ChurritoFi](https://churrito.fi/).
- Warp Protocol at YieldBay. See [this tweet](https://twitter.com/yield_bay/status/1518501464234405888?s=20&t=CbdTFkVnKvEZys7rz4YUDQ) for the demo.

### Team Code Repos

- https://github.com/yield-bay

#### Team's Github

- [Manan Gouhari](https://github.com/manangouhari)
- [Saumya Karan](https://github.com/saumyakaran)
- [Rajdeep Bharati](https://github.com/ImRajdeepB)
- [Sarthak Verma](https://github.com/sarthakvdev)
- [Pragun Dua](https://github.com/pragdua)

### Team LinkedIn Profiles

- [Manan Gouhari](https://www.linkedin.com/in/manangouhari/)
- [Saumya Karan](https://www.linkedin.com/in/skrn/)
- [Rajdeep Bharati](https://www.linkedin.com/in/rajdeepbharati/)
- [Sarthak Verma](https://www.linkedin.com/in/sarthakv/)
- [Pragun Dua](https://www.linkedin.com/in/pragun-dua-0128031a8/)

## Development Status :open_book:

- [Wireframes for the Bay Aggregator](https://www.figma.com/file/YgSSJJLL95NRDMtEqvTgLT/DEX-Agg-Wireframes?node-id=1%3A22)

| ![](https://i.imgur.com/CTnqmRM.png) | ![](https://i.imgur.com/CTnqmRM.png) |
| ------------------------------------ | ------------------------------------ |

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 4
- **Total Costs:** $1,08,000

### Milestone 1 — Core functionality for the DEX Aggregator

- **Estimated duration:** 1.5 months
- **FTE:** 4
- **Costs:** $36,000

|  Number | Deliverable                           | Specification                                                                                                                                                                                                                                      |
| ------: | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                               | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                               |
| **0b.** | Documentation                         | We will provide both **inline documentation** of the code and a basic **tutorial** in the README of the respective repositories that explains how a user can run tests on the DEX Aggregator smart contracts and run the Backend Services locally. |
| **0c.** | Testing and Testing Guide             | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                    |
| **0d.** | Docker                                | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                                                                         |
|      1. | Smart Contracts: DEX Aggregator       | We will deliver a set of Solidity smart contracts that'll form the core of the DEX Aggregator Protocol.                                                                                                                                            |
|      2. | Backend Service: Route Aggregator API | API to find & fetch the best path from one token to another on the supported chains.                                                                                                                                                               |
|      3. | Hi-Fi Design: DEX Aggregator          | Figma document containing the detailed design of the frontend web app for the DEX Aggregator.                                                                                                                                                      |

### Milestone 2 — Ship the DEX Aggregator

- **Estimated duration:** 1.5 months
- **FTE:** 4
- **Costs:** $36,000

|  Number | Deliverable                             | Specification                                                                                                                                                                                               |
| ------: | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                 | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                        |
| **0b.** | Documentation                           | We will provide both **inline documentation** of the code and a basic **tutorial** in the README of the respective repositories that explains how a user can the Web Frontend and Backend Services locally. |
| **0c.** | Testing and Testing Guide               | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                             |
| **0d.** | Docker                                  | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                                  |
|      1. | Backend Service: User Balance & History | API & Indexer that returns a users token balances across the supported parachains and a history of their trades through the DEX Aggregator protocol.                                                        |
|      2. | Web Frontend: DEX Aggregator            | Frontend UI that will let the users connect their wallet and access the functionalities of the DEX Aggregator on the supported parachains.                                                                  |
|      3. | Hi-Fi Design: DEX Aggregator            | Figma document containing the detailed design of the frontend web app for the DEX Aggregator.                                                                                                               |

### Milestone 3 — Limit Order Protocol

- **Estimated duration:** 1 month
- **FTE:** 4
- **Costs:** $36,000

|  Number | Deliverable                                   | Specification                                                                                                                                                                                                                                   |
| ------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                       | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                            |
| **0b.** | Documentation                                 | We will provide both **inline documentation** of the code and a basic **tutorial** in the README of the respective repositories that explains how a user can run tests on the Limit Order smart contracts and run the Backend Services locally. |
| **0c.** | Testing and Testing Guide                     | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                 |
| **0d.** | Docker                                        | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                                                                      |
|     0e. | Article                                       | We will publish an **article** that explains the product funcionality & the key technical challenges we faced while building it.                                                                                                                |
|      1. | Smart Contracts: Limit Order Protocol         | We will deliver a set of Solidity smart contracts that'll form the core of the Limit Order Protocol & interact with DEX Aggregator to perform the swaps.                                                                                        |
|      2. | Backend Service: Order Execution Keeper       | An off-chain bot that'll periodically check for unfilled limit orders that have met the criteria set by the maker of the order and execute them.                                                                                                |
|      3. | Backend Service: Limit Order Status & History | The User Balance & History Service will be expanded to maintain a comprehensive index of both, open & closed limit orders.                                                                                                                      |
|      4. | Web Frontend: Limit Order UI                  | The Frontend delivered in Milestone 2 will be expanded upon to include the functionality of limit orders.                                                                                                                                       |

## Future Plans

- Following the grant's completion, focus on acquiring initial set of users for the Bay Aggregator.
- Research & implement "order splitting" to make the swaps more efficient.
- Explore building the Limit Order Protocol as a pallet or a set of ink smart contracts for DeFi-focused Parachains.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

Karan has previously received a grant from the Web3 Foundation for [YieldScan](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/YieldScan.md).
