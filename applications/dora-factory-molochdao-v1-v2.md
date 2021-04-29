
# Quadratic Funding Pallet

* **Project Name:** Build MolochDAO v1 and v2 on Substrate
* **Team Name:** Dora Factory
* **Payment Address:** 0xadcba9C5C8c33F7F71600c436F2F2B00bAbc9997

## Project Overview

MolochDAO is the mostly used venture DAO template so far, hosting major venture & grant DAOs such as MolochDAO, The LAO, and MetaCartel Ventures. This project implements MolochDAO v1 on a Substrate pallet. The goal of this project is to eventually launch a MolochDAO for Polkadot ecosystem grants.

### Overview

MolochDAO was conceived after the fail of The DAO -- the first pioneering effort to support Ethereum ecosystem projects. After The DAO failed, MolochDAO revived the idea of The DAO but with simplicity and security. The MolochDAO implemented a concise set of mechanisms including proposal submission, voting, and ragequit. It has been operating safely for some time, and currently hosting more than $6 Million to support Ethereum ecosystem projects with grants. Other efforts, such as The LAO and MetaCartel Ventures, are using MolochDAO as an infrastructure to build DAO venture funds. So far, those efforts are also successful, proving the effectiveness of the MolochDAO mechanisms.

Currently, there are two versions of MolochDAO that are widely accepted -- the MolochDAO v1 and the MolochDAO v2. MolochV2 has some major features on top of MolochV1, including 1) multiple tokens in guild bank; 2) loot and shares; 3) guildkick.

This project develops a substrate pallet that implmenets MolochDAO v1 and v2, in two separate milestones. The goal of this project is to bring MolochDAO to Substrate and make it available for future DAOs on Polkadot, Kusama, and other parachain ecosystems.

Dora Factory and DoraHacks team is building tools and infrastructures to incentivize / fund open source blockchain innovation. Therefore, one of the first use cases of a Substrate MolochDAO can be a grant DAO to support open source developer projects that build on Substrate. It is yet another alternative to the current funding schemes.

### Project Details 

The MolochDAO is an open source project.

MolochDAO v1 codebase can be found here: https://github.com/MolochVentures/moloch/tree/master/v1_contracts

The current MolochDAO (V2) codebase can be found here: https://github.com/MolochVentures/moloch

This project will implement MolochDAO v1 and v2 in two milestones. The first milestone is to create a Substrate pallet that implements MolochV1, and the second milestone is to create a Substrate pallet that implements MolochV2.

The MolochV1 Substrate pallet will implement features including the following:
- Guild bank
- Guild shares
- Submit a proposal
- Vote for a proposal
- Process a proposal
- Ragequit

The MolochV2 Substrate pallet will be built on top of MolochV1 and further implement features including the following:
- Support multiple tokens in guild bank
- Implement loot
- Guild kick
- Ragekick


### Ecosystem Fit 

Since quadratic funding is a community driven funding mechanism for early-stage grants, it will introduce a more community-driven method to fund developer community projects in the Polkadot and Kusama ecosystem.

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
* **Total Estimated Duration:** 2.5 months
* **Full-time equivalent (FTE):**  2
* **Total Costs:** 2000 DAI

### Milestone 1 -- Implement MolochDAO v1 Pallet
* **Estimated Duration:** 6 weeks
* **FTE:**  2
* **Costs:**  1000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | MolochDAO v1 Substrate Pallet | An open-source prototype of a MolochDAO v1 substrate pallet. The pallet will implement Moloch v1. Key features include 1) guild bank, 2) guild shares, 3) submit a proposal, 4) vote for a proposal, 5) process a proposal, 6) ragequit |
| 2. | Test | Deploy the runtime module to a Substrate node and test MolochDAO v1 functions described above｜

### Milestone 2  -- Implement MolochDAO v2 Pallet
* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 1000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | MolochDAO v2 Substrate Pallet | An open-source prototype of a MolochDAO v2 substrate pallet. The pallet will implement Moloch v2 based on the delivery of Milestone 1 (Moloch v1). Key features include 1) support multiple tokens in guild bank, 2) implement loot, 3) guild kick 4) ragekick |
| 2. | Test | Deploy the runtime module to a Substrate node and test MolochDAO v2 functions described above｜

## Future Plans

The next step after completion of the milestone, we will consider to run a MolochDAO grant to support important projects from Polkadot and Kusama developer communities.

We will develop frontend solutions in parallel with the pallet. Eventually, we are providing an open source Moloch infrastructure to facilitate on-chain governance and support open source ventures in the Polkadot and Kusama ecosystem.