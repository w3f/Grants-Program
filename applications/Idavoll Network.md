# Open Grant Proposal

* Project: Idavoll Network
* Proposer: [jasonberger0](https://github.com/jasonberger0)
* Payment Address:  1NNtuqwroKc9cMZdigpLdNLrzPKCp7zkXT

## Project Overview :

### Overview

Idavoll Network is an decentralized organization platform that provides infrastructure and services to users of the Idavoll Network and Polkadot ParaChains. Each Idavoll Network organization exists as a set of modules that define the organization’s stakeholders and their associated rights and privileges.
Idavoll Network will implement idavoll court in the future, developed and maintained by Idavoll Network holders. The idavoll court can be used by organizations, to resolve subjective disputes with binary outcomes.

### Project Details

Idavoll Network is a decentralized organization network based on Substrate and run as a parachain on Polkadot.
Idavoll Network has a set of pallets to achive the management of DAOs: orgnaization module, voting module, token module and finance module. By chanining these modules together, everyone can define a DAO which constrain how actions can be performed within the organization. We will give some common scenarios to explain how the idavoll pallets use predefined rules to active the standard forwarding operations.

![idv](https://github.com/jasonberger0/doc/blob/main/picture/idv.png?raw=true)

#### Common Scenarios

#### Transfer Assets

+ the Organization members initiate a proposal to transfer organizational assets through the Finance Module. The proposal is confirmed on the Vote Module and required to complete the voting results of the organization members within a certain period of time. The voting results are required to meet the asset transfer rules in the Finance Module. The approval votes are greater than the minimum approval votes. Only after the number and the number of negative votes are less than the limit of the maximum number of negative votes, can the proposed movement of asset transfer within the organization be realized through the Finance Module.

#### Snapshot Vote Decisions

+ We can combine the organization module, voting module and token module to implement the decision management process. Users can create any proposal (an easy-to-understand term that the proposal must follow) and initiate the voting process. All users holding the corresponding tokens can participate in the voting. The voting ends, the Idavoll Network will count the voting results of the voters according to the snapshot of the current blockchain state. The voting results will be used as a community consensus and will be permanently stored on the blockchain.

## Team :busts_in_silhouette:

### Team members

+ jasonberger0
+ Dylan
+ kericfrank

### Team’s experience

+ jasonberger0  Over 10 years of experiences in Development and Management,real time database products and digital currency transaction platform products expert. Currently focused on Blockchain Development and Cross-chain Technologies.
+ Dylan holds a master degree from Tsinghua University. He has more than 10 years of experience inlarge-scale computing and algorithm, with many patents such as consensus algorithm and blockchain transaction.
+ kericfrank: 8+ years development experience, proficient in public chain and cross chain development, proficient in using go and rust, p2p network expert.


### Team Code Repos
* https://github.com/idavollnetwork

### Team Website
* https://www.idavoll.network/


## Development Roadmap :nut_and_bolt:

### Overview

* Total Estimated Duration: 4 weeks
* Full-time equivalent (FTE):  3
* Total Costs: 1 btc

### Milestone 1

* Estimated Duration: 4 weeks
* FTE:  3
* Costs: 1 btc

In this milestone, We will implement Idavoll DAO proof-of-concept.

| Number | Deliverable                       | Specification                                                 |
| ------ | --------------------------------- | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can import the protocol. |
| 0c. | Testing Guide | This milestone will have unit-test for all modules to ensure functionality. In the guide we will describe how to run these tests.|
| 1.     | Idovall Organization  module | This module provide methods to create a DAO with specific parameters, such as the name, the permissions and the internal addresses for your organization. And it is the entry of the other module functions. |
| 2.     | Idovall Voting module  |  Create proposal and set the voting duration, minimum approval and support percentage of your proposal. When a proposal approved, token assignment or funds transfer will execute.  |
| 3.     | Idovall Token module  | Implement Token module to mint new tokens and assign them, and confer voting abilities to holders of the tokens such that one token equals one vote. Minting and assignment is trigger by **Idovall Voting module **. |
| 4.     | Idovall Finance module | This module provides tokenholders with access to the funds held by their organization. It supports deposit funds, withdraw funds and transfer funds, after the proposal approvement from ** Idovall Voting module **. The module also shows the current balance as well as the transaction history of the organization. |

## Future Plans

+ we will provides a Dapp for everyone to interact with the Idovall network.

+ In the future, the Idavoll Network will add a court protocol to resolve subjective disputes with binary outcomes, combined with the use of IDV’s infrastructure, so that the DAOs can create proposal agreements that define the subjective constraints of organizational operations, and can be used by a minority of interests Stakeholder implementation.