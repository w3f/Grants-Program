# W3F Grant Proposal

* **Project Name:** Rlink-Phase1
* **Team Name:** Rlink Team
* **Payment Address:** 0x421D4008F92Ff874374b38aEf4b5570B2Cb28157 (DAI)

## Project Overview
### Overview

Rlink is the world's first oracle that completely realizes decentralized recommendation relationship and rebate. Rlink want to realized the whole process of recording the reference relationship on the smart contract and making chain rebates according to the reference relationship. 

In the phase1,we need to develop this oracle and test this oracle in the test chain on the polkadot ecosystem. We also will launch this oracle in the parallel chain which is compatible with EVM to serve those dapp developers.

Rlink aims to become the parallel chain to record the relationship between addresses for the polkadot chain and all parallel chains in the future

### Project Details
#### Core services
Invitation relationship: This module records the invitation relationship between all addresses using a Hash map, and provides the function of querying and writing the associated address of any address.  Realize infinite level address associated record.  
Distribution: This module provides the function of distributing tokens for DAPP. By calling this module, DAPP can easily realize the distribution of tokens to a specified address and its associated address at a specified rate.  Supports multi-level associated address distribution

![architecture](https://github.com/Rlinkwork/rlink/blob/f23465352ea1e046aa55df191e4dc44855cb8fa9/docs/architecture.png?raw=true)

#### Details documentations of the project
BP of this project: https://docs.qq.com/pdf/DUktkcW9iemZ0TERo

#### Technology Stack
* Solidity
* Javascript
* substract

### Ecosystem Fit

 As far as I konw, No one in polkadot ecosystem is currently working on something similar. 
Rlink will rich the ecosystem of polkadot. The dapp developers or team in the polkadot parallel chain can easily call Rlink apis to get more users for their dapp

## Team

### Team members

- Steven,Team leader
- Peter,Project Product Director
- And other 24 members

### Contact

* **Contact Name:** Peter
* **Contact Email:** wangmingping@dooge.io / 744032924@qq.com

### Legal Structure

* **Registered Address:** 2402G, Block A, Tianan Digital Times Square, Che Gong Miao, Shenzhen, Guangdong Province, China

### Team's experience

#### Steven
Graduated from the Chinese University of Hong Kong with a double bachelor's degree in mathematics and information engineering, and a master of mathematics from the University of California, Berkeley
Worked in the fixed investment department of Bank of America Merrill Lynch
AItrade, a quantitative trading project, was founded in 2015 to provide data, analysis, and direct transaction services for Quanke
Created in 2018, the Dapp project AllBet has long been in the top three of the Tron rankings
Created TopDapp media and sold it to overseas community teams
FilWorld community technical partner, providing Fil-based mining pool and operation development.XZ Blasting Rock Fund Technical Verifier, providing technical verification for decentralized projects

#### Peter
Project Product Director, Master of User Experience at Kingston University, London, senior blockchain player, bought the first Bitcoin in April 2013, designed and participated in the development of multiple blockchain applications, and has a profound understanding of decentralization and defi applications opinion.

### Team Code Repos
- https://github.com/Rlinkwork/rlink

## Development Roadmap
### Overview
- **Description:** Development of Rlink - MVP - Phase 1
- **Total Estimated Duration:** 2 months
- **Full-time equivalent (FTE):** Milestone 1 - 3; Milestone 2 - 3
- **Total Costs:** 20000 DAI

### Milestone 1 — completed the core code development
* **Estimated duration:** 1 month
* **FTE:**  3
* **Costs:** 10,000 DAI

In the milestone, our team will completed core code development to realize one-level rebates on the smart contract

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | Documentation includes contract interface description documentation, invocation examples. |
| 0c. | Testing Guide | Core functions will have test demo coverage (min. 50%) to ensure functionality and robustness. In the guide we will describe how to use test demo. |
| 1. | Address relation | We will coding relation module for record one-level address relaitons by a hash map and query address relation functions |  
| 2. | Distribute | We will coding distribute module for distribute token by one-level address relations |  


### Milestone 2 — Implement more features

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 10,000 DAI

In the milestone, our team will realize two-level rebates on the smart contract. We will test this project in the parallel chain which is compatible with EVM. We will deliver developer document of Rlink and a demo of Rlink

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | Documentation includes contract interface description documentation, invocation examples. |
| 0c. | Testing Guide | Core functions will have test demo coverage (min. 50%) to ensure functionality and robustness. In the guide we will describe how to use test demo. |
| 1. | Address relation | We will upgrade relation module for record two-level address relaitons by hash map and query address relation functions |  
| 2. | Distribute | We will upgrade distribute module for distribute token by two-level address relations | 

## Future Plans

Rlink aims to become the parallel chain to record the relationship between addresses for the polkadot chain and all parallel chains.  
Rlink will support recording unlimited-level address relationships and rebate
This parallel chain will have several verified nodes.
We have calculated that the invitation relationship record of one billion blockchain address needs about 3 TB of space,so this project also pays attention to IPFS technology to accommodates such a large amount of data
