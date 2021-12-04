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
- Initiate a transaction in a wallet, sign a transaction, confirm a transaction
- Add a signer, update multisig rule

There've been a multisig pallet developed by parity. The pallet (https://libraries.io/cargo/pallet-multisig) is a basic building block for us to build a more complete multisig MVP to meet actual demands of DAOs. It should also become an open-source module for us and other developers to build more complicated multisig features in the future. The reasons why build a new pallet are below

1. Multisig pallet only provides 3 methods, which can not meet requirements application-level and DAO use cases
2. The multisig pallet has not been updated for a while, we’ll implement more new features to help community to build a multisig pallet faster
3. The latest polkadot{.js} has removed feautres to support multisig, which makes this pallet hard to debug/demonstrate
4. As Dora Factory is working on DAO infrastructures, most of our users are organization users, we are creating a multisig for organization users (e.g. a DAO can deposit and manage funding using the pallet and get access to a broader range of applications from Dora Factory). In this way this pallet can integrate with other Dora Factory pallets seamlessly.

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
* **Estimated Duration:** 10 weeks
* **FTE:**  2
* **Costs:**  15000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Multisig Substrate Pallet | An open-source prototype of a Multisig substrate pallet. The pallet will implement Multisig Key features include 1) Create wallet by organization 2) Multi assets management 3) Initiate a transaction in a wallet, sign a transaction, confirm a transaction 4) Add a signer, update multisig rule | 
| 2. | Parachain Integration | Deploy to some parachain(local/rococo) to demonstrate multi assests management flow |
| 3. | Test | Deploy the runtime module to a Substrate node and test Multisig functions described above | 


### Milestone 2  -- Design and Implement An Multisig Frontend MVP
* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 10000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Multisig frontend MVP | A functioning open-source frontend project. The frontend MVP will enable the whole flow of the pallet key features including 1) Create wallet by organization 2) Initiate, sign, and confirm transactions 3) Add signer and update multi-sig rule 4) Show transaction history of a wallet
| 2. | Test | Deploy the runtime module to a Substrate node and test Multisig functions described above

## Future Plans

Integrate the multisig MVP with the Dora Factory core pallet and allow any organization on the Dora Factory Substrate chain to create a multisig wallet and use it to manage funds and access the other dGov applications (e.g. Quadratic Funding, MolochDAO, etc.) in the ecosystem.
