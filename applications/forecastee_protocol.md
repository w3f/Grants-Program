# Forecastee Protocol

* **Project:** Forecastee Protocol
* **Proposer:** GitHub ranneen
* **Payment Address:** 13HWsydyoPDuqS32xkmn3cb58VLz7Db6kf

## Project Overview :page_facing_up: 
Forecastee Protocol is a decentralized oracle for prediction markets via betting.

### Overview

Forecastee is a trustless decentralized oracle employed on a predictive market protocol. 

Forecastee is a protocol available for anyone to use. Forecastee is accessible through a dapp client similar to interacting with Ethereum. The prediction markets on Forecastee are created by individual users with no restriction. Users of the Forecastee protocol trade in the market at their own risk.

### Project Details 

The Forecastee protocol is a set of substrate modules that may interact with the Polkadot relay chain.

Forecastee markets follow a four-stage progression: creation, trading, reporting, and settlement. Anyone can create a market based on any real-world event . Trading begins immediately after market creation, and all users are free to trade on any market. After the event on which the market is based has occurred, the outcome of the event is determined by Forecastee’s oracle. Once the out- come is determined, traders can close out their positions and collect their payouts.

For example, consider a market that has two possible outcomes Yes/No. Alice is willing to pay 0.7 DAI for a share of `Yes` and Bob is willing to pay 0.3 DAI for a share of `No`. Forecastee matches these orders and collects a total of 1 DAI from Alice and Bob. Forecastee creates a complete set of shares, giving Alice the share of `Yes` and Bob the share of `No`.

Forecastee allows anyone to create an openly tradable Market about any upcoming event. Forecastee maintains an `OrderBook` for each of the Markets created. Any trader can place or take an Order on the Market's Order Book. When placing a trade, that trade request will be Filled immediately if there is an Order on the Order Book that will fulfill it. If there is no matching Order, or if the trade request can only be partially Filled, the remainder of what wasn't filled of the trade will be placed on the Order Book as an Order. Order Creators may cancel their Order to remove it from the Order Book.

### Ecosystem Fit 
Forecastee protocol is not identical to other Oracles as it provides oracle template to make prediction market and has it's own incentive.

## Team :busts_in_silhouette:

### Team members
* Ran Francis

### Team Website	
* https://github.com/forecastee

### Team's experience
SRE, aiming to take an extensive stab at blockchains. Prior to that, I was with Red Hat for about 4 years, where I worked on the hybrid cloud and Linux OS components, with their Performance engineering department.

### Team Code Repos
* https://github.com/forecastee/forecastee

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):**  1
* **Total Costs:** Amount of Payment in BTC for the whole project. The total amount of funding needs to be below $30k at the time of submission.

### Milestone 1 — Implement Substrate orderbook module
* **Estimated Duration:** 3 weeks
* **FTE:**  1
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. |
| 0c. | Testing Guide | The code will have proper unit-test to ensure functionality and robustness. we will describe how to run these tests |
| 1. | implement basic trading orderbook module | We will create a Substrate module which maintain orderbook of each created market. In this milestone we only provide Yes/No market type. When placing a trade, the trade request may be filled immediately if there is an existing order which can fulfill it. If there is no matching order, the trade will be placed on the orderbook. We won't support partial order fulfillment at this stage. |

### Milestone 2 — Enhance orderbook and resolve market delivery

* **Estimated Duration:** 5 weeks
* **FTE:**  1
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. |
| 0c. | Testing Guide | The code will have proper unit-test to ensure functionality and robustness. we will describe how to run these tests. |
| 1. | enhance orderbook | We will enhance the orderbook to support partial order fulfillment. |
| 2. | solve market settlement | Once a market’s underlying event occurs, the outcome will be determined in order for the market to finalize the market settlement. We may use implement an offchain-worker to submit the event result. Only amout of authorized accounts is only allowed to report the actual, real-world outcome of the event at the stage. |
| 3. | deliver shares of market participant | We will implement delivery mechanism of outcome tokens purchased on the  protocol. |

## Future Plans
The Forecastee protocol needs a trustless way to report real world event. We need an  profit-motivation incentive mechanism to allow anynone to report event result to the protocol.

As Forecastee is a general protocol to create all kinds of market. We plan to provide other market types except for the Y/N option.