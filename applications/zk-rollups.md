# Open Grant Proposal

* **Project:** ZK Rollup on Polkadot/Substrate
* **Proposer:** NoCtrlZ, akru, and SotaWatanabe
* **Payment Address:** 1LYWirHyBbmdCCU2YHg2qxgLAuybUfKEPm

## Project Overview :page_facing_up:
We have been working on off-chain scalability solutions aka layer2 solutions. After tremendous research, we have come to believe that ZK Rollup would be the killer layer2 solution because of its data availability. Currently, rollup is [one of the potentially interesing topics](https://github.com/w3f/General-Grants-Program/blob/master/grants/polkadot_stack.md) of Web3 Foundation and Vitalik announced [the rollup centric Ethreum roadmap](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698?fbclid=IwAR1oJyMEwvjFXNy7vCHT19PyXNh27PAHZjvCR4qBRoUB9mKf_nEVOtE4vgk) last month. According to Vitalik, the Ethereum ecosystem is likely to be all-in on rollup (plus some plasma and channels) as a scaling strategy for the near and mid-term future. We know that Polkdot has a different technical architecture and tech stack but Rollup is still important because of severtal reasons.

1. Bringing vertical off-chain scalability without sacrificing on-chain data availability, security and privacy (×3-10 scalability).
1. Handling smart contracts on layer2.
1. Sharding plus Rollups will be the future. Polkadot has the sharding ish architecture but it doesn't have Rollups yet.
1. Currenntly, a lot of Ethereum projects are interested in migrating from Ethreum to Polkadot. And some of the great Ethereum projects have already started using Rollups. If we could build Rollups on Substeate/Polkadot, we would help these projects migrate smoothly.

Through this grant, we will make a ZK Rollup pallet for Parachain builders to get zero-knowledge vertical scalability.

### Overview
Throught this grant, we are going to make a ZK Rollup pallet for potential Parachains like Plasm. Our initial goal is to implement ZK Rollup on Plasm but we aim to make it public and adoptable for all Substrate based chains.

The following diagram is the architecture we will implement.

<img width="988" alt="Screen Shot 2020-11-10 at 23 03 01" src="https://user-images.githubusercontent.com/29359048/98683905-ec3f9580-23a8-11eb-8305-c4c312cdb326.png">


There are four components we implement as a substrate pallet and these components allow substrate-based chain to do following things.

* Prover: Create proof which verifies the block validity.
* Operator: Collect transactions, create a block and submit the block to mainchain contract.
* User Wallet: Send transaction to operator and deposit token on the mainchain contract.
* Mainchain Contract: Hold user's desposit, verify block and update state.

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
We plan to provide a `ZK Rollup` pallet that allows Substrate-based blockchain to execute `ZK Rollup` on its evm environment.

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  1 FTE
* **Total Costs:** 2.1

### Milestone 1
#### Prepare ZK Rollup Contracts On Substrate
* **Estimated Duration:** 0.75 months
* **FTE:**  1
* **Costs:** 0.20 BTC

Our first step is to deploy [matter-labs](https://github.com/matter-labs/zksync) solidity contracts and test overall on substrate-based chain.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Deploy ZK Rollup Contract To Substrate | Deploy [matter-labs](https://github.com/matter-labs/zksync) solidity contracts on substrate evm |  
| 2. | Integration Test On Substrate | Test for all contracts and sidechain network actors |  
| 3. | Documentation | Document which describes how to test ZK Rollup on substrate |

### Milestone 2
#### Implement ZK Rollup Network Operator And Prover Pallet
* **Estimated Duration:** 2 months
* **FTE:**  1
* **Costs:** 1.50 BTC

Our second step is to implement a ZK Rollup operator and a prover pallet. In order for a service provider to setup ZK Rollup sidechain network, we need a pallet to make a network operator which monitors mainchain contracts, to commit the sidechain block to the mainchain and to create a sidechain block proof for a prover. In order for user to participating ZK Rollup network and create sidechain block validity proof with SNARK, we need to implement prover applications.

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

Our third step is to prepare Dockerfile and tutorial. In order for developers to setup the environment and try to run example commands, we need to prepare Dockerfile and tutorial.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Prepare Dockerfile | Dockerfile that allows developer to setup the environment through docker |  
| 2. | Write Tutorial | ZK Rollup tutorial that allows developer to run example commands |  
| 3. | Integration Test | Test explorer works together correctly on Web UI |  
| 4. | Documentation | Document which describes how to deposit, withdraw and send, be validator |

### Gantt Chart
There are three parts in the following `gantt chart` and it describes how long it takes to get things done for each milestone. First of all we implement ZK Rollup contracts and sidechain components on ropsten network to check whether it works correctly. And second, we implement sidechain components pallet that allow us to build ZK Rollup on substrate-based chain. At last, we prepare Dockerfile and tutorial that allow developer to user this pallet and build their own ZK Rollup.

<img width="661" alt="gantt_chart" src="https://user-images.githubusercontent.com/39494661/98802759-194a8180-2457-11eb-9006-33d41bf89d15.png">

### Detail
The following list describes our detail for each components.

<img width="661" alt="detail_tasks" src="https://user-images.githubusercontent.com/39494661/98802952-6a5a7580-2457-11eb-95f6-25629b43bc56.png">

## Additional Information :heavy_plus_sign:
- [web site](https://www.plasmnet.io/)
- [document](https://docs.plasmnet.io/)
- [Twitter](https://twitter.com/Plasm_Network)
- [Medium](https://medium.com/stake-technologies)
- [GitHub](https://github.com/staketechnologies/Plasm)
