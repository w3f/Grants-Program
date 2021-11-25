# Multisig Pallet

* **Project Name:** Build A Minimum Viable Functioning Multisig Product on Substrate
* **Team Name:** Dora Factory
* **Payment Address:** 0xadcba9C5C8c33F7F71600c436F2F2B00bAbc9997

## Project Overview

Multisig is the mostly used DAO infrastructure so far. In the Ethereum ecosystem, multisig wallets are hosting major DAOs (such as venture DAOs & grant DAOs). This project implements a multisig pallet and a minimum viable functioning multisig product on a Substrate. The goal of this project is to eventually launch a multisig product that is integrated with Dora Factory's testnets and parachain.


### Project Details 

The MultiSig Substrate pallet will implement features including the following:
- Create wallet by organization
- Multi-asset management
- Initiate a transaction in a wallet
- Sign a transaction in a wallet
- Spend assets on wallet
- Controller address management
- Organization member management

There've been a multisig pallet developed by parity. The pallet (https://libraries.io/cargo/pallet-multisig) is a basic building block for us to build a more complete multisig MVP to meet actual demands of DAOs. It should also become an open-source module for us and other developers to build more complicated multisig features in the future.

Besides, in this grant, we'll implement a frontend MVP to make the multisig work for end users.

### Ecosystem Fit 

The Dora Factory team has built the first functioning quadratic funding pallet, a MolochDAO pallet (for both MolochDAO v1 & v2), and a POA local testnet that runs an actual quadratic funding round for Dora Factory ecosystem projects (https://hackerlink.io/grant/dora-factory/).

In addition to the pallets, the Dora Factory team has also built up the parachain infrastructure with a core pallet that helps organizations register and use future pallets that are available on the Dora Factory parachain.

Although structures vary in different organizations, funding management is a general demand of all decentralized organizations. Multisig has been proven to be the most general and flexible way of managing funds within a DAO (or any other forms of decentralized organizations / communities), because it introduces minimum procedure requirements of funding management except multi-signature itself. Therefore it is also the best entry point to a wider range of dGov applications.

### Team members
* Dora Factory & DoraHacks Dev Community -- a community of developers who has built HackerLink.io/en, now hosting quadratic funding grants, bounties, and hackathons for EVM ecosystems, Polygon, BSC, Filecoin, Solana, and Dora Factory itself (https://hackerlink.io/grant/dora-factory/). The team also implemented a quadratic funding Substrate pallet (https://github.com/w3f/Grant-Milestone-Delivery/pull/104), a Moloch pallet, and a DAO-as-a-Service Substrate chain to host dGov applications within the Polkadot / Substrate ecosystem.

### Contact
* **Contact Name:** Paul Deng, Eric Zhang
* **Contact Email:** eric@dorafactory.org
* HackerLink.io

### Legal Structure 
* Matsushiba Foundation LTD.

### Team Code Repos
* https://github.com/DoraFactory
* https://github.com/dorahacksglobal
* https://github.com/zhangjiannan/QFgrant

## Development Roadmap

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  3
* **Total Costs:** 25000 DAI

### Milestone 1 -- Implement Multisig Pallet
* **Estimated Duration:** 8 weeks
* **FTE:**  2
* **Costs:**  15000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Multisig Substrate Pallet | An open-source prototype of a MolochDAO v1 substrate pallet. The pallet will implement Multisig Key features include 1) Create wallet by organization 2) Multi assets management 3) Sign a transaction for a wallet 4) Spend assets on wallet 5) Collection address management 6) Organization member management |
| 2. | Test | Deploy the runtime module to a Substrate node and test Multisig functions described above｜

### Milestone 2  -- Design and Implement An Multisig Frontend MVP
* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 10000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Multisig frontend prototype | An open-source prototype of a web project which is used to demonstrate communication with the substrate pallet. The demo will show the whole flow of the pallet key features including 1) Create wallet by organization 2) Multi assets management 3) Sign a transaction for a wallet 4) Spend assets on wallet 5) Collection address management 6) Organization member management|
| 2. | Test | Deploy the runtime module to a Substrate node and test Multisig functions described above

## Future Plans

Integrate the multisig MVP with the Dora Factory core pallet and allow any organization on the Dora Factory Substrate chain to create a multisig wallet and use it to manage funds and access the other dGov applications (e.g. Quadratic Funding, MolochDAO, etc.) in the ecosystem.
