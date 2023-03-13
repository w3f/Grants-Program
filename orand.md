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

* **Total Estimated Duration:** 19 
* **Full-time equivalent (FTE):**  1,500
* **Total Costs:** Amount of Payment in USD for the whole project: USD225,000
### Milestone 1

Please add additional milestones in the same way: 
* **Estimated Duration:** 2 months
* **FTE:**  120
* **Costs:** USD18,000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implement ECVRF | Implement ECVRF based on secp256k1 curve |  

### Milestone 2

Please add additional milestones in the same way: 
* **Estimated Duration:** 3 months
* **FTE:**  180
* **Costs:** USD27,000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Transformed ECVRF | Transformed ECVRF to a pallet-ecvrf |  
### Milestone 3

Please add additional milestones in the same way: 
* **Estimated Duration:** 2 months
* **FTE:**  120
* **Costs:** USD18,000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implement precomplie evm | Implement precomplie evm pallet for ECVRF in frontier, to allow smart contract to get ECVRF from pallet |  

### Milestone 4

Please add additional milestones in the same way: 
* **Estimated Duration:** 2 months
* **FTE:**  80
* **Costs:** USD12,000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Research MPC | Research about MPC in ECVRF |  

### Milestone 5

Please add additional milestones in the same way: 
* **Estimated Duration:** 3 months
* **FTE:**  300
* **Costs:** USD45,000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implement DKG | Implement DKG allow validators to genereate secret shares |  
### Milestone 6

Please add additional milestones in the same way: 
* **Estimated Duration:** 3 months
* **FTE:**  300
* **Costs:** USD45,000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implement distributed ECVRF | Implement distributed ECVRF based on MPC |  


### Milestone 7

Please add additional milestones in the same way: 
* **Estimated Duration:** 2 months
* **FTE:**  200
* **Costs:** USD30,000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implement pallet | Implement pallet-mpc-ecvrf |  


### Milestone 8

Please add additional milestones in the same way: 
* **Estimated Duration:** 2 months
* **FTE:**  200
* **Costs:** USD30,000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implement precompile evm pallet | Implement precompile evm pallet for MPC ECVRF in frontier |  

Work time each week	40	hours/week,
Salary of one person	$3.000	/month,
Basic cost in hours	$19	/hour
