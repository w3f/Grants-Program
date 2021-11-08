

# Multisig Pallet

* **Project Name:** Build Multisig on substrate
* **Team Name:** Dora Factory
* **Payment Address:** 0xadcba9C5C8c33F7F71600c436F2F2B00bAbc9997

## Project Overview

=== is the mostly used venture DAO template so far, hosting major venture & grant DAOs such as MolochDAO, The LAO, and MetaCartel Ventures. This project implements MolochDAO v1 on a Substrate pallet. The goal of this project is to eventually launch a MolochDAO for Polkadot ecosystem grants.

### Overview

=== was conceived after the fail of The DAO -- the first pioneering effort to support Ethereum ecosystem projects. After The DAO failed, MolochDAO revived the idea of The DAO but with simplicity and security. The MolochDAO itself is a minimum viable DAO, which implemented a concise set of mechanisms including proposal submission, voting, and ragequit. It has been operating safely for some time, and currently hosting more than $6 Million to support Ethereum ecosystem projects with grants. 

The open-source approach of MolochDAO has encouraged many other efforts. For example, The LAO (https://www.thelao.io/) and MetaCartel Ventures are using Moloch as an infrastructure to build DAO venture funds. Together, they are managing more than $50 Million worth of assets at this moment of writing. DAOhaus, on the other hand, creates a platform to create DAOs based on Moloch. It allows different types of organizations to create Moloch-like DAOs on Ethereum to manage its funds. The Open Law team is also developing a MolochV3 codebase (https://github.com/openlawteam/molochv3-contracts), which aims to break Moloch main contract into smaller smart contracts, and bring modularity to Moloch.

Currently, there are two mature versions of MolochDAO that are widely accepted -- the MolochDAO v1 and the MolochDAO v2. MolochV2 has some major features on top of MolochV1, including 1) multiple tokens in guild bank; 2) loot and shares; 3) guildkick.

This project develops a substrate pallet that implmenets MolochDAO v1 and v2, in two separate milestones. The goal of this project is to bring MolochDAO to Substrate and make it available for future DAOs on Polkadot, Kusama, and other parachain ecosystems.

Dora Factory and DoraHacks team is building tools and infrastructures to incentivize / fund open source blockchain innovation. Therefore, one of the first use cases of a Substrate MolochDAO can be a grant DAO to support open source developer projects that build on Substrate. It is yet another alternative to the current funding schemes.

### Project Details 


The MultiSig Substrate pallet will implement features including the following:
- Create wallet by organization
- Multi assets management
- Sign a transaction for a wallet
- Spend assets on wallet
- Collection address management
- Organization member management

There've been a multisig pallet developed by parity, however, that pallet (https://libraries.io/cargo/pallet-multisig) is too simple to meet actual requirements of DAO market. Our multisig comes from our deep thoughts about the DAO market requirements. 

Besides, in this grant, we'll implement a front end prototype project to demonstrate our functions.

### Ecosystem Fit 

===Since quadratic funding is a community driven funding mechanism for early-stage grants, it will introduce a more community-driven method to fund developer community projects in the Polkadot and Kusama ecosystem.

It's also exciting to implement quadratic funding as an on-chain governance module and add it to Polkadot governance stack.

MolochDAO is the most important open source DAO template in Ethereum ecosystem at this moment. It supports grant DAOs like MolochDAO and venture DAOs like The LAO and MetaCartel. Because of the simplicity of the Moloch mechanism, it can be extended to more use cases in the future.

Supporting on-chain governance and open source ventures is an important task in the Polkadot ecosystem. Therefore, an open source MolochDAO will be a useful building block is important.


### Team members
* Dora Factory & DoraHacks Dev Team -- a team of developers who has built HackerLink.io/en, now hosting quadratic funding grants, bounties, and hackathons for BSC, Filecoin, HECO, Solana, etc. The team also implemented a quadratic funding Substrate pallet (https://github.com/w3f/Grant-Milestone-Delivery/pull/104).

### Contact
* **Contact Name:** Eric Zhang
* **Contact Email:** eric@dorafactory.org
* HackerLink.io/en

### Legal Structure 
* Matsushiba Foundation LTD.

### Team Code Repos
* https://github.com/DoraFactory
* https://github.com/zhangjiannan/QFgrant

## Development Roadmap

### Overview
* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  2
* **Total Costs:** 2000 DAI

### Milestone 1 -- Implement Multisig Pallet
* **Estimated Duration:** 8 weeks
* **FTE:**  2
* **Costs:**  1000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Multisig Substrate Pallet | An open-source prototype of a MolochDAO v1 substrate pallet. The pallet will implement Multisig Key features include 1) Create wallet by organization 2) Multi assets management 3) Sign a transaction for a wallet 4) Spend assets on wallet 5) Collection address management 6) Organization member management |
| 2. | Test | Deploy the runtime module to a Substrate node and test Multisig functions described above｜

### Milestone 2  -- Implement Multisig frontend prototype
* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 1000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Multisig frontend prototype | An open-source prototype of a web project which is used to demonstrate communication with the substrate pallet. The demo will show the whole flow of the pallet key features including 1) Create wallet by organization 2) Multi assets management 3) Sign a transaction for a wallet 4) Spend assets on wallet 5) Collection address management 6) Organization member management|
| 2. | Test | Deploy the runtime module to a Substrate node and test Multisig functions described above

## Future Plans

The next step after completion of the milestone, we will consider to integrate with our Dorafactory DAO  core module, which is designed to be an open DAO platforms. Any one interested can implement their own product based on our DAO core modules or just use our DAO service.
