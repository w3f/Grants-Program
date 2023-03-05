# Orand - Allows randomness to be generated and fed to any smart contracts on any EVM compatible blockchain.

* **Status:** Open (anyone is allowed to apply)
* **Proposer:** chiro-hiro
* **Your Project(s):** [optional]: https://github.com/orochi-network/sdk
* **Projects you think this work could be useful for** [optional]: Link(s)
* **Teams/People that could deliver the RFP** [optional]: https://github.com/orochi-network/

## Project Description :page_facing_up: 

**Verifiable randomness**: We’re using Verifiable Random Function (VRF) to generate randomness the process described here https://www.rfc-editor.org/rfc/rfc6979 . Curve secp256k1 was used to minimizing verification cost for smart contract on Ethereum.

**Dispersity**: A distributed system with many participants/nodes will join to generate randomness by using Multi Party Computation (MPC).

**Unpredictability**: A VRF will perform with the input is previous randomness and it’s also require half of participants to participate in MPC.

**High throughput**: Game/application server could request randomness from the Orochi đRNG system. The result will be provided as soon as half of participants participate in the MPC.

**Fault Proof**: If the game/application server tries to delay the feeding process to manipulate the result, a fault proof will be committed so sue the game server.

**Multi-chain**: All EVM compatible blockchains can be supported.

## Deliverables :nut_and_bolt:

Please list the deliverables of the project in as much detail as possible. Please also estimate the amount of work required and try to divide the project into meaningful milestones.

* **Total Estimated Duration:** Duration of the whole project
* **Full-time equivalent (FTE):**  Amount of time (in days) required for a single person to complete this project ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
* **Total Costs:** Amount of Payment in USD for the whole project. 
### Milestone 1

Please add additional milestones in the same way: 
* **Estimated Duration:** Duration of milestone 1 
* **FTE:**  Amount of time (in days) required for a single person to complete this milestone
* **Costs:** Amount of Payment in USD for milestone 1


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Title of the deliverable | Please describe the deliverable here as detailed as possible |  
| 2.  | ... |...| 
