# Open Grant Proposal

* **Project:** ZK Rollup on Polkadot/Substrate
* **Proposer:** NoCtrlZ, akru, and SotaWatanabe
* **Payment Address:** 1LYWirHyBbmdCCU2YHg2qxgLAuybUfKEPm

## Project Overview :page_facing_up:
We have been working on off-chain scalability solutions aka layer2 solutions. After tremendous research, we have come to believe that ZK Rollup would be the killer layer2 solution because of its data availability. Currently, rollup is [one of the potentially interesing topics](https://github.com/w3f/General-Grants-Program/blob/master/grants/polkadot_stack.md) of Web3 Foundation and Vitalik announced [the rollup centrric Ethreum roadmap last month](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698?fbclid=IwAR1oJyMEwvjFXNy7vCHT19PyXNh27PAHZjvCR4qBRoUB9mKf_nEVOtE4vgk). According to Vitalik, the Ethereum ecosystem is likely to be all-in on rollup (plus some plasma and channels) as a scaling strategy for the near and mid-term future. We know that Polkdot has a different technical architecture and tech stack but Rollup is still important because of severtal reasons.

1. Bringing vertical off-chain scalability without sacrificing on-chain data availability, security and privacy (×3-10 scalability).
1. Handling smart contracts on layer2.
1. Sharding plus Rollups will be the future. Polkadot has the sharding ish architecture but it doesn't have Rollups yet.
1. Currenntly, a lot of Ethereum projects are interested in migrating from Ethreum to Polkadot. And some of the great Ethereum projects have already started using Rollups. If we could build Rollups on Substeate/Polkadot, we would help these projects migrate smoothly.

Through this grant, we will make a ZK Rollup pallet for Parachain builders to get zero-knowledge vertical scaling solution.

### Overview
Throught this grant, we are going to make a ZK Rollup pallet for potential Parachains like Plasm. Our initial goal is to implement ZK Rollup on Plasm but we aim to make it public and adoptable for all Substrate based chains.

More technically, this applicatin consists of 2 different parts. The  first part is to implement the main chain's pallet and the second part is to implement the side chain's  pallet.

### Project Details
The following diagram is the architecture we implement.
![architecture](https://drive.google.com/uc?id=1hacBr-U4YVp0gH6EddxKgb3Oh17XVYyb)

There are four components we implement as substrate pallet and these allow substrate-based chain to do following things.
* Prover: Create proof which verifies the block validity.
* Operator: Collect transactions, create block and submit block to mainchain contract.
* User Wallet: Send transaction to operator and deposit Ether/ERC20 token to mainchain contract.
* Mainchain Contract: Hold user desposit, verify block and update state.

### Ecosystem Fit
According to Web3 Foundation, there are at least 2 different teams that work on ZK technologies.
- [Zeropool](https://github.com/zeropoolnetwork)
- [Glacier](https://github.com/gbctech)

In our understanding, Glacier is building a Distaff VM for zk-STARK proof generation and verification that are used to make  private smart contracts and private credential verifications. The difference between us is that we are making a ZK Rollup pallet and they are making a VM which supports STARKs. In terms of Zeropool, we couldn't find their info on Web3 Foundation's github.

## Team :busts_in_silhouette:

### Team members
* Shinsaku Ashizawa
* Alexsandr Krrupenkin
* Sota Watanabe

### Team Website
* https://stake.co.jp/en

### Legal Structure
* Incorporated in Japan
* Address: 1-30-3 Minamiaoyama Minato-ku Tokyo Japan

### Team's experience
We have been making Plasm Network, a scalable multi-virtual machines smart contract platform on Polkadot supporting cutting edge layer2 solutions. Curretly, another team at Stake techologies is working on the Optimistic Virtual Machine, an unification for all layer2 solutions and a subset of Optimistic Rollup. We have already delivered 4 milestones out of 6. In addition to that, we have already delivered several grants such as Plasma, ECDSA, and ink! playground.

- [Plasma](https://github.com/stakedtechnologies/Plasm)
- [ECDSA](https://github.com/polkadot-js/common/tree/master/packages/util-crypto/src/secp256k1)
- [ink! playground](https://github.com/staketechnologies/ink-playground)

We are also participating in Substrate Builders Program and Substrate Delivery Partners and we have done some PoCs with clients.
- ["Plasm Network" is Adopted as a Blockchain Platform for Payment System by Satsudra HD and DataGateway](https://stake.co.jp/news/20201020english/)
- [Bitpoint and Stake Technologies Collaboration Announcement.](https://stake.co.jp/news/bitpoint_en/)

### Team Code Repos
* https://github.com/staketechnologies

### Team LinkedIn Profiles
* https://www.linkedin.com/in/sota-watanabe-b962b3110/


## Development Roadmap :nut_and_bolt:

### Summary
We plan to provide a `ZK Rollup` pallet that allows Substrate-based blockchain to execute `ZK Rollup` on evm environment.

### Overview
* **Total Estimated Duration:** 4 months
* **Full-time equivalent (FTE):**  1 FTE
* **Total Costs:** 2.07

### Milestone 1
#### Implement ZK Rollup Contracts And Sidechain Application
* **Estimated Duration:** 2.25 months
* **FTE:**  1
* **Costs:** 0.40 BTC

First step will be to implement ZK Rollup contracts with [`Zinc`](https://github.com/matter-labs/zinc) framework enables us to build ZK Rollup smart contracts easily. We'll prepare the mock contracts and operator application on ropsten network as test environment. We'll also implement sidechain application that includes user client, operator and prover api.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Mainchain Contract | Contract which is used by user to deposit and withdraw Ether or ERC token |  
| 2. | Sidechain Contract | Contract which receives transaction from transactor |  
| 3. | User API | API that allows user to sign transaction and deposite mainchain contract |  
| 4. | Prover API | API that allows prover to receive witness from operator and create SNARK proof for sidechain block |  
| 5. | Operator API | API that allows service provider to compose sidechain network and, broadcast bundle of transactions and SNARK proof for them to mainchain contract |  
| 6. | Unit Test | Test for above functions to check whether these work correctly |  
| 7. | Integration Test | Test for above modules to check whether these API work together correctly on ropsten network |  
| 8. | Documentation | Document which describes how to deposit, withdraw and send Ether, be prover, and to test them |

### Milestone 2
#### Implement ZK Rollup Network Operator And Prover Pallet
* **Estimated Duration:** 1.5 months
* **FTE:**  1
* **Costs:** 1.27 BTC

Second step will be to implement ZK Rollup operator and prover pallet. In order for service provider to setup ZK Rollup sidechain network, we need pallet to be network operator which has function to monitor mainchain contract, commit sidechain block on mainchain and request to create sidechain block proof for prover. In order for user to participating ZK Rollup network and create sidechain block validity proof with SNARK, we need implement prover application.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Implement Operator API Pallet | Runtime that run the sidechain environment |  
| 2. | Implement Prover API Pallet | Pallet that allows service provider to compose own ZK Rollup network and interact with mainchain through RPC |  
| 3. | Integration Test | Test sidechain and mainchain work together correctly on substrate-based chain |  
| 4. | Documentation | Document which describes how to deposit, withdraw and send, be validator, and init and participate network on substrate-based chain |

### Milestone 3
#### Prepare Dockerfile And Tutorial
* **Estimated Duration:** 0.25 month
* **FTE:**  1
* **Costs:** 0.40 BTC

Third step will be to prepare Dockerfile and tutorial. In order for developer to setup the environment and try to run example commands, we need to prepare Dockerfile and tutorial.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Prepare Dockerfile | Dockerfile that allows developer to setup the environment through docker |  
| 2. | Write Tutorial | ZK Rollup tutorial that allows developer to run example commands |  
| 3. | Integration Test | Test explorer works together correctly on Web UI |  
| 4. | Documentation | Document which describes how to deposit, withdraw and send, be validator |

### Gantt Chart
There are three part in following `gantt chart` and it describes how long it takes to get thing done for each milestone. First of all we implement ZK Rollup contracts and sidechain components on ropsten network to check whether it works correctly. And second, we implement sidechain components pallet that allow us to build ZK Rollup on substrate-based chain. At last, we prepare Dockerfile and tutorial that allow developer to user this pallet and build their own ZK Rollup.
![gantt_chart](https://drive.google.com/uc?id=1I8sKL5ddweQ8dCXBeRTYSFw2Jb8lBVUQ)

### Detail Tasks
The following list describes tasks detail for each components.
![detail_tasks](https://drive.google.com/uc?id=1PyaL34rYn9uxZ3vqCAFWQfPmQQMdVzEE)

## Additional Information :heavy_plus_sign:
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?