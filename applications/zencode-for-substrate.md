# Open Grant Proposal

* **Project Name:** Zencode for Substrate :left_right_arrow:
* **Team Name:** CryptoArena
* **DAI Payment Address:** `0x8214864d37944082322745b1639828F680f02124`

## Project Overview :page_facing_up: 
This is a grant application for $30,000 in DAI.



### Overview

* Description: Make [Zencode](https://decodeproject.eu/blog/smart-contracts-english-speaker)-based smart contracts available to the Polka ecosystem by integrating [Zenroom](https://zenroom.org/) into Substrate, then build a [Zenbridge](https://decodeproject.eu/blog/smart-contracts-english-speaker) bindings extension and Zenchain pallet for milestone 2 (which is not included in this request). It also runs [Lua](http://www.lua.org/).
* Use to ecosystem
  * [Zencode](https://decodeproject.eu/blog/smart-contracts-english-speaker) is an English-like DSL of [Zenroom](https://zenroom.org/) developed by [Dyne](https://dyne.org/), which handles smart contracts written in natural language. Users require no coding or programming knowledge at all.
  * [Lua](http://www.lua.org/) is a niche language often used in computer gaming due to its small payload size, easy integration, and efficiency. Can be used by future teams on Substrate seeking to build resource-intensive game (or gamified) applications, or to increase the accessibility and everyday usability of smart contracts.
* Why we want to do it: It's part of our greater plans. We want to integrate Zencode-based smart contracts to handle inter-user contracts relating to our "advanced copy trading" solution.


### Project Details 

Zenroom Documentation: https://dev.zenroom.org/#/pages/zencode-cookbook-intro

Lua Documentation: http://www.lua.org/docs.html

Languages: Zencode DSL :left_right_arrow: Zenroom (C) :left_right_arrow: **our modules (Node.js)** :left_right_arrow: Substrate (Rust)



### Ecosystem Fit 
Compared with [Polka stack](https://github.com/w3f/General-Grants-Program/blob/master/grants/polkadot_stack.md):

| Components | Existing | Our proposal |
| :--- | :--- | :--- |
| Easy Smart Contract Development | [ink-playground](https://github.com/staketechnologies/ink-playground/tree/master), [Ink! Remix Plugin](https://github.com/blockchain-it-hr/ink-remix-plugin) | [Zenroom](https://zenroom.org/zenbridge/) |
| Smart Contract Languages | [Ask!](https://github.com/patractlabs/ask), [Subscript](https://github.com/slickup/subscript), [Solang](https://github.com/hyperledger-labs/solang), [Ink!](https://github.com/paritytech/ink), [Pact](https://github.com/kadena-io/) | [Zencode](https://decodeproject.eu/blog/smart-contracts-english-speaker), [Lua](http://www.lua.org/) |
| Bridges | [Ethereum by Centrifuge](https://github.com/centrifuge/), [EOS by Bifrost](https://github.com/bifrost-finance), [POA :left_right_arrow: Substrate](https://github.com/paritytech/parity-bridge), [Substrate :left_right_arrow: Ethereum DAI Bridge](https://github.com/akropolisio/POC-polkadai-bridge), [Substrate :left_right_arrow: Substrate Bridge](https://github.com/paritytech/substrate-bridge-relay), [BTC by ChainX](https://github.com/chainx-org/ChainX), [Cosmos-Substrate bridge](https://github.com/ChorusOne/wormhole-bridge), [Polkadot Ethereum Bridge](https://github.com/Snowfork/polkadot-ethereum) | [Zenbridge](https://zenroom.org/zenbridge/) |
| ZKP | [ZeroPool](https://github.com/zeropoolnetwork), [Megaclite](https://github.com/patractlabs/megaclite) | zk-SNARKS based on [Coconut](https://arxiv.org/pdf/1802.07344.pdf) |
| Smart contract chains | [moonbeam](https://github.com/PureStake/moonbeam), [Edgeware](https://github.com/hicommonwealth), [EVM Module](https://substrate.dev/docs/en/next/conceptual/runtime/contracts/evm_module) | Milestone 2 Substrate Pallet ("Zenchain") |



## Team :busts_in_silhouette:
(LinkedIn profile links in table)

| Tech | Non-Tech | Support |
| :--- | :--- | :--- |
| [Robert Miller](https://www.linkedin.com/in/robert-m-2b629335/) - CTO | [Lorenzo Ferrari](https://www.linkedin.com/in/lorenzo-ferrari-669409125/) - CEO | [Dyne](http://dyne.org/) |
| [Chris Kraynik](https://www.linkedin.com/in/tidus/) - DevOps | [Leonie Forsman](https://www.linkedin.com/in/leonieforsman/) - COO | [dittofi](https://dittofi.com/) |
| [Sohaib Ezzahir](https://www.linkedin.com/in/sohaibezzahir/) - Front End | | |

### Contact
* **Name:** Lorenzo Ferrari, CEO
* **Email:** lorenzo@cryptoarena.org
* **Web site:** https://cryptoarena.org/

### Legal Structure 
* **Registered Address:** Stoomgemaalstraat 9, 1069WS North Holland, Amsterdam, NL
* **Registered Legal Entity:** CryptoArena

### Team's experience
* https://github.com/rabm2k7
* https://github.com/irvine

### Team Code Repos
* https://github.com/CryptoArenaSDEX/Zencode-for-Substrate



## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated Duration:** 1 months
* **Full-time equivalent (FTE):** 4.5 FTE
* **Total Costs:** $30,000 USD



### Milestone 1 — Zencode for Substrate

CMD LINE -> API -> Smart Contract -> Substrate / Polkadot

* **Estimated Duration:** 1 month
* **FTE:** 4.5
* **Costs:** $30,000 USD

| Number | Deliverable | Specification |
| :--- | :--- | :--- |
| 0a. | License | GNU GPL V3 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a Substrate user can use it. |
| 0c. | Testing Guide | The code will have unit test coverage (min. 70%) to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Node.js CMD Line Interface | We will create a Node.js command line interface that will integrate with our API-based Zencode smart contract engine (2). |
| 2. | Node.js API Zencode Smart Contract Engine | We will create an extensible API that interprets input, processes it inline with the chosen blockchain smart contract "recipe", and provides the output prepared for transmission to the blockchain. By "extensible", we mean that Zencode smart contract recipes for blockchains other than Polkadot can be created and integrated easily. |
| 3. | Zencode Smart Contract Recipe: Polkadot | We will create a smart contract recipe for our API that integrates with the Polkadot blockchain. This Zencode smart contract will be capable of interacting with all public functions of the Polkadot blockchain. |
| 4. | Dockerfile | We will provide a Dockerfile to demonstrate the full functionalities of our modules. |



## Future Plans

### Milestone 2 - Zenchain Substrate Pallet

We will create a pallet to function as the core of a "build your own blockchain" framework, along with pre-built smart contract templates to interact with other blockchains.

* **Estimated Duration:** 3 months
* **FTE:** 5
* **Costs:** $100,000 USD

| Number | Deliverable | Specification |
| :--- | :--- | :--- |
| 0a. | License | GNU GPL V3 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a Substrate user can use it. |
| 0c. | Testing Guide | The code will have unit test coverage (min. 70%) to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Zencode Compatible Substrate Pallet - Blockchain Framework | We will create a Substrate Pallet blockchain framework that provides basic blockchain functionality and is extensible and customizable by the user. This pallet is designed for interaction with the Zencode Smart Contract Engine (milestone 1 step #2) and Polkadot's ecosystem, for which we provide a dedicated Zencode Smart Contract Recipe (milestone 1 step #3). |
| 2. | Zencode Smart Contract Recipe - Core Pallet | We will create a smart contract recipe for our Zencode API engine that integrates with our Substrate Pallet, essentially creating an out-of-the-box blockchain solution as a pallet integrated with the framework detailed above. This core pallet will be capable of interacting with all public functions of Substrate's framework, and will be extensible and customizable. |
| 3. | Docker container | A pre-configured docker container to instantly deploy a complete, extensible blockchain solution which is compatible with Zencode. |

### Community Engagement

As part of the Milestone 2 program, we will also produce and publish documentation outlining the code developed and how to use it, as well as engagement materials including articles, tutorials and other promotional materials to explain the work done as part of the grant.
Additionally, CryptoArena offers to publicly acknowledge and (tactfully) promote Polkadot, Substrate, Kusama, and their ecosystems through its social channels and Web sites.


## Additional Information :heavy_plus_sign:

We are the team developing [CryptoArena](https://cryptoarena.org/), the first "Self-Decentralizing" Exchange (S-DEX). Many further extensions to the proposed modules are possible, from further interoperability to the creation of a collection of potential applications across various professional sectors. This work will be functional to the service offering of our future platform and ecosystem, which we are also considering developing as a parachain and through the Substrate's [Builders program](https://www.substrate.io/builders-program/) (Chains track).
