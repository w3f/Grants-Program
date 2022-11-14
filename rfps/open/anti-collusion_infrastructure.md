# Anti-Collusion Infrastructure

* **Status:** Open
* **Proposer:** [Noc2](https://github.com/Noc2)

## Project Description :page_facing_up: 

A lot of blockchain applications that involve some kind of voting, like on-chain quadratic funding, can potentially be exploited via collusion and bribery (see [Vitalik’s post about collusion](https://vitalik.ca/general/2019/04/03/collusion.html)). Therefore, it’s important to design mechanisms that effectively prevent any kind of on-chain collusion or at least make it more difficult. The goal of this RFP is to encourage people to try to research and come up with their own solutions or to implement existing solutions, like [Minimal anti-collusion infrastructure](https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413) as a substrate pallet or ink! smart contract.  

## Deliverables :nut_and_bolt:

The milestones below are just an initial draft. The milestones can be structured completely differently and the implementation can also leverage other tools and infrastructure as long as the overall goal of the RFP is met. 

### Milestone 1 - Anti-collusion

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Inline documentation of the code and a basic tutorial that explains how a developer can use the project |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | Article or tutorial that explains the work done as part of the grant. 
| 1. | Anti-collusion | Implement a mechanism to prevent bribery and collusion, leveraging encrypting votes (ZKPs) potentially via [Minimum Anti-Collusion Infrastructure (MACI)](https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413) |  
| 2.  | Voting Example | Integrate a basic voting example that lets you test the mechanism | 



