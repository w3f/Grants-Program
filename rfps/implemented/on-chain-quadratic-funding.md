# On-chain Quadratic Funding

* **Status:**  [Implementation by Dora](https://github.com/zhangjiannan/QFgrant), [Implementation by OAK](https://github.com/OAK-Foundation/quadratic-funding-pallet/tree/master)
* **Proposer:** [Noc2](https://github.com/Noc2)

## Project Description :page_facing_up: 

CLR, short for [Constrained Liberal Radicalism algorithm](https://blogchains.org/wp-content/uploads/sites/4/2019/04/SSRN-id3243656.pdf), commonly called quadratic funding (QF), is a way to efficiently fund projects in the Web3 ecosystem. The way it works is that users contribute directly to projects which they value and in doing so, help the projects earn a share of a matching pool of funds. The *number* and amount of each contribution influences the total amount allocated to a project. This means even a small contribution is valuable and can result in a high matched amount. 

[Gitcoin](https://gitcoin.co/) is currently using this mechanism to successfully fund and support public goods. However, Gitcoin is centralized. The goal of this RFP is to develop a decentralized solution on top of [Substrate](https://github.com/paritytech/substrate), which can potentially be integrated into Kusama, Polkadot or any other Substrate-based chain as a pallet. The on-chain treasury could potentially sustainably fund the matching pool in the long-run. However, the Web3 Foundation would also be committed to fund a matching pool of the solution for initial test rounds. 

Key-problems to solve as part of the grant:
1. **Anti-collusion** 
2. **Sybil resistance**
3. **User-friendly UI**
 

## Deliverables :nut_and_bolt:

The milestones below are just an initial draft. The milestones can be structured completely differently and the implementation can also leverage other tools and infrastructure as long as the overall goal of the RFP is met. 


### Milestone 1 - Sybil resistance

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Inline documentation of the code and a basic tutorial that explains how a developer can use the project|
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | Article or tutorial that explains the work done as part of the grant. 
| 1. | Sybil resistance | Mechanism to prevent Sybil attacks, either implemented as its own Substrate pallet or possible integration of the existing on-chain identity on Kusama/Polkadot provided by specified registrar  |  
| 2.  | UI | UI for verification of identities, including a polkadot.js extension support | 

### Milestone 2 - CLR

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Inline documentation of the code and a basic tutorial that explains how a developer can use the project |
| 0c. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | Article or tutorial that explains the work done as part of the grant. 
| 1. | CLR pallet(s) | Implement the necessary substrate pallets, potentially containing a Token Curated Registry (TCR) to allow anyone to permissionlessly register eligible recipients each round and DAO to govern the protocol.  |  
| 2. | Off-chain Storage | Integrate an off-chain storage solution, for example IPFS for storing the applications and information about the grants |
| 2.  | Test 1 | Set up a test network and leverage the extrinsics tabs of polkdaot.js to test the implementation and improve it. The Web3 Foundation provides a small matching pool as a incentive. | 

### Milestone 4 - UI

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Inline documentation of the code and a basic tutorial that explains how a developer can use the project |
| 0c. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | Article or tutorial that explains the work done as part of the grant. 
| 1. | CLR UI | UI for the whole process (creation and funding of grants), including polkadot.js extension support.  |  
| 2.  | Test 2 | Test the newly created UI. The Web3 Foundation provides another small matching pool as a incentive. | 


