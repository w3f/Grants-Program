# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** [Low-Trust Tendermint Bridge](https://feedback.parity.io/b/substrate-feedback-board/low-trust-tendermint-bridge/)
* **Proposer:** [DeFi-Evangelist](https://github.com/DeFi-Evangelist)
* **BTC Payment Address:** 1BeRKVozn3X7wiByvYBryPWugFvvrp61ug

## Overview
  
We're [team](https://venlab.dev/) of founders and core devs of tokenless oracles & gateways protocol - [Gravity](https://gravity.tech/). The protocol itself is aiming to be a blockchain-agnostic solution. [Graviton](https://graviton.one/) - is an application on top of gravity network designed to increase user experience with wrapped tokens, gateways and bring an incentivisation for gateways oracles and AMM liquidity providers within integrated chains.

Gravity is using [tendermint](https://tendermint.com/) as a framework for a tokenless internal ledger designed to be a message bus, events log distributed storage and consensus engine for oracle transactions (commit/reveal/aggregations and reputation changes).

The team is looking for approaches to add an integration with polkadot/parity tech and expand/develop products within the polkadot ecosystem.

## Proposed Solution

We propose the gateway solution illustrated in Figure (1) below:

![Tendermint <-> Substrate Bridge Schema](https://raw.githubusercontent.com/ventuary-lab/images/master/polkadot/Tendermint-Substrate-Bridge-long.png)

Here we have 2 chains connected via [IBC protocol](https://docs.cosmos.network/v0.40/ibc/overview.html): 1. Custom Tendermint Chain and 2. Sovereign Substrate Chain (parachain slot candidate or parachain potentially). Tendermint chain has pBFT blockchain consensus via it's own validators nodes (V). Substrate Chain has PoA consensus or Polkadot consesus after winning of parachain slot (so we have: validators/collators - VC). Tendermint chain has special a module for Substrate bridge implemented in Go-Lang, while Substrate has two different approaches for bridge support implementation: 1 - [ink! smart contract](https://substrate.dev/docs/en/knowledgebase/smart-contracts/) or 2 - bridge module. We're going to add both implementations (designed for different potential use cases).

## Demo Usecase for the bridge

An implementation of four transactions which are basic components of a crosschain bridge functionality:

I. <b>Tendermint Chain</b> (called by any <b>user</b>): <span style="color:blue"> Deposit-Event-TX: </span> {TOKEN-INFO: "example-token-id", AMOUNT: 100, RECEIVER: "receiver's public address", SENDER: "sender's public adress"}

II. <b>Substrate Chain</b> (called by bridge <b>provider</b>): <span style="color:purple"> Echo-Deposit-Event-TX: </span> {..._same data spec_...}

III. <b>Substrate Chain</b> (called by any <b>user</b>): <span style="color:purple"> Deposit-Event-TX: </span> {..._same data spec_...}

IV. <b>Tendermint Chain</b> (called by bridge <b>provider</b>): <span style="color:blue"> Echo-Deposit-Event-TX: </span> {..._same data spec_...}




## Reason for an application and an ecosystem fit
There are many existing tendermint based [chains](https://cosmos.network/ecosystem) are already in production. To scale their potential within the polkadot ecosystem and to bring more integrations and products from already established teams we have to use [Low-Trust Tendermint-Supstrate/Polka Bridges](https://feedback.parity.io/b/substrate-feedback-board/low-trust-tendermint-bridge/).

This is also the most popular issue in [Feedback Parity Portal](https://feedback.parity.io/b/substrate-feedback-board/low-trust-tendermint-bridge/) at the moment.

Our open-sourced implementation of a Tendermint bridge will be used by our [gravity](https://gravity.tech/) team and another [teams](https://cosmos.network/ecosystem) teams who has an infrastructure on Tendermint and Cosmos-SDK.

We believe in "cooperation over competition" principle and we're going to make a first move in that direction.

## Team members

Team Lead / Tech Lead:
Aleksei Pupyshev - [twitter](https://twitter.com/AlekseiPupyshev), [linkedin](https://www.linkedin.com/in/aleksei-pupyshev-23a70954/), [coursera](https://www.coursera.org/instructor/fdfe7de8cd69d39234e1b17bb4c76eb8)

Experience: Protocols Architect, Blockchain Engineer, Smart Contract Engineer, Data Scientist, Full-Stack Software Engineer, Quantitative Researcher,Dev Community Director, Dev Rel, AI-Researcher, Research & Development Consultant, Head of Data Science & Data Engineering, Team Lead, Tech Lead.

Team members:
Ilya Sapranidi (blockchain researcher), Shamil Khalilov (full-stack developer), Ilya Teterin (blockchain developer)

## Team Website	
Team:
* https://venlab.dev/

Tech/Dev:
* https://gravity.tech/

* https://graviton.one/

## Legal Structure 
Aleksei Pupyshev - Individual Entrepreneur License (Saint Petersburg, Russia)

## Team's experience
The VenLab blockchain research & development team, founded by Aleksei Pupyshev in 2018. VenLab’s track record:

* “Mastering Web 3.0” online course for developers on [Stepik](https://stepik.org/course/54415/promo) and [Coursera](https://www.coursera.org/learn/mastering-web3-waves?#instructors)

~3k learners, ~1k developers in [dev chat](https://t.me/waves_ride_dapps_dev)

* [Neutrino](https://neutrino.at/) [($USDN)](https://coinmarketcap.com/currencies/neutrino-usd/) - An algorithmic crypto-collateralized stablecoin (acquired by [WX](https://waves.exchange/))

~50mln$ Total Value Locked (TVL), ~8k dApp users, ~30mln$ market cap & ~5mln$ volume

* [Gravity Protocol](https://medium.com/gravity-protocol) - A blockchain-agnostic oracles and cross-chain communication network

5 integrated chains so far {Ethereum, Cosmos, BSC, Tron, Waves}, 21+ reputable node operators/partnerships


## Team Code Repos
* https://github.com/ventuary-lab
* https://github.com/Gravity-Tech

## Team LinkedIn Profiles
* https://www.linkedin.com/in/aleksei-pupyshev-23a70954/

## Team Website
* https://venlab.dev/

## Development Roadmap :nut_and_bolt: 

## Overview
* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):** 2.25
* **Total Costs:** 1 BTC

### Milestone 1 — Research
* **Estimated Duration:** 3 weeks
* **FTE:**  1.125
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1 |  Integration/Unit DEPOSIT/ECHO transactions test suites | Dockerized Tests for {I, II, III, IV}-txs  for mocked tx data|
| 2 |  IBC test suites | Dockerized Tests for IBC mocked transactions |
| 3 |  Bridge Module for Tendermint | Bridge functionality implementation for tendermint chain |
| 4 |  ink! Bridge Smart Contract for Substrate | Bridge functionality implementation on ink! (substrate chain)|

### Milestone 2 — Implementation
* **Estimated Duration:** 3 weeks
* **FTE:**  1.125
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1 | Tests of (<b>V</b>) services functionality | Unit Tests for Tendermint Validators actors |
| 2 | Tests of (<b>VC</b>) services functionality | Unit Tests for Substrate Validators/Collators actors |
| 3 | Tests of <b>bridge providers</b> services functionality | Unit Tests for Substrate Validators/Collators actors |
| 4 | Bridge Demo-MVP | Fully functioning assembled bridge service demo (via REST-api) hosted on our servers|


## Future Plans
1) Add Substrate Module as a 2nd option for bridge;
2) Add an integration with EVM-Substrate using solidity
3) Using an implementation of this bridge for token gateways of [graviton](https://graviton.one/) project;