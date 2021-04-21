# Open Grant Proposal

* **Project:**  ZK Rollups CLI
* **Proposer:** Plasm Network (Shinsaku Ashizawa, Sota Watanabe)
* **Payment Address:**  1DJTSPajRFCjdfn5UgPXGRo6Di8EE1Dzox

# Project Overview
This is a follow up grant proposal of [zk-rollups.md](https://github.com/w3f/Open-Grants-Program/blob/master/applications/zk-rollups.md).

## Overview
After implementing Matter Labs’ ZK Rollups on Substrate during the milestone1, we realized that we won’t need to implement a ZK rollups pallet. More specifically, we can implement the pallet but this is not the best approach to achieve the objective.

Hence, we resubmit the proposal here to implement a CLI tool instead of a pallet. There are 2 main advantages over the original proposal we submitted before as the milestone2 of [zk-rollups.md](https://github.com/w3f/Open-Grants-Program/blob/master/applications/zk-rollups.md).

1. Decrease the cost and technical resource.
1. From the developer’s perspective, ZK Rollups can be implemennted easier.

## Project Detail
As we learned during the mlestone 1 implementation, there are many setups we need to introduce Zk Rollup on Substrate, but we can make is easier by implementing CLI. To prove this, let’s compare the conventional setups with our CLI setups.

**The conventional setups when we use Zk Rollup on substrate**
- Install dependencies (Docker, Node, Yarn, Axel, Rust and PSQL, Diesel, sqlx, solc)
- Set environment variables
- Init ZkSync (credit: Matter Labs) project with some commands
- Database migration
- Modify some modules to support substrate evm
- Deploy all contracts to substrate
- Compile circuit
- Integration test

**The setups by our CLI**
- Install Docker
- Indicate a deployer and an operator address
- Execute command to deploy contracts
- Execute command to do integration test

As you can see avove, we can reduce many steps to set up Zk Rollups on Substrate and each developer can set up the ZK Rollups environment without domain specific technincal knowledge.

In addtion to that, we also support following following actions.
- Add a prover
- Stop an operator and a prover
- Restart the whole network
- Change the network config

Lastly, we would like to descrive the roadmap below.
- Setup a Rust commander client
- Create an interactive environment variables setting through CLI
- Create commands to deploy contracts according to setting
- Create commands to do integration test
- Create commands to add prover
- Create commands to restart whole network
- Create commands to change network config

## Ecosystem Fit
According to Web3 Foundation, there are at least 2 different teams that work on ZK technologies.
- [Zeropool](https://github.com/zeropoolnetwork)
- [Glacier](https://github.com/gbctech)

In our understanding, Glacier is building a Distaff VM for zk-STARK proof generation and verification that are used to make  private smart contracts and private credential verifications. The difference between us is that we are making a ZK Rollup pallet and they are making a VM which supports STARKs. In terms of Zeropool, we couldn’t find their info on Web3 Foundation’s github.

We believe having ZK Rollups on Substrate helps developers migrate from Ethereum to Polkadot or build multi chain use cases given that Ethereum projects are all in on Rollups in coming months. In additon, some of Substrate projects need a scaling solution though Substrate is more scalable than other L1 chains.

## Team

### Team members
* Shinsaku Ashizawa
* Alexsandr Krrupenkin
* Sota Watanabe

### Team Website
* https://stake.co.jp/en

### Legal Structure
* Incorporated in Singapore
* Address: 63 Chulia Street Singapore

### Team’s experience
We have been making Plasm Network, a scalable multi-virtual machines smart contract platform on Polkadot supporting cutting edge layer2 solutions. Curretly, another team at Stake techologies is working on the Optimistic Virtual Machine, an unification for all layer2 solutions and a subset of Optimistic Rollup. We have already delivered 4 milestones out of 6. In addition to that, we have already delivered several grants such as Plasma, ECDSA, and ink! playground.

- [Plasma](https://github.com/stakedtechnologies/Plasm)
- [ECDSA](https://github.com/polkadot-js/common/tree/master/packages/util-crypto/src/secp256k1)
- [ink! playground](https://github.com/staketechnologies/ink-playground)

We are also participating in Substrate Builders Program and Substrate Delivery Partners and we have done some PoCs with clients.
- [“Plasm Network” is Adopted as a Blockchain Platform for Payment System by Satsudra HD and DataGateway](https://stake.co.jp/news/20201020english/)
- [Bitpoint and Stake Technologies Collaboration Announcement.](https://stake.co.jp/news/bitpoint_en/)

### Team Code Repos
* https://github.com/PlasmNetwork

### Team LinkedIn Profiles
* https://www.linkedin.com/in/sota-watanabe-b962b3110/


## Development Roadmap :nut_and_bolt:

### Summary
We plan to provide a CLI to make ZK Rollups solution on Substrate easily.

### Overview
* **Total Estimated Duration:** : 2 months
* **Full-time equivalent (FTE):** :  1 FTE
* **Total Costs:** : 0.33

### Milestone 1
#### ZK Rollups CLI
* **Estimated Duration:** 2 months
* **FTE:**  1
* **Costs:** 0.35

We implement a ZK Rollup CLI. In order to setup ZK Rollup sidechain network, we need to implement some commands that allow us to deploy contracts, do integration test and, run sidechain and prover. In order to reset ZK Rollup sidechain network, we need to implement commands that allow us to restart the whole network and change the network config. In order for developers to setup the environment and try to run example commands, we need to prepare Dockerfile and tutorial. This CLI allows us to setup and reset ZK Rollup environment without high technical knowledge.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Implement Zk Rollup Builder CLI | CLI that deploys contracts, does integration test and, runs sidechain and prover |
| 2. | Implement Zk Rollup Reset CLI | CLI that restarts whole network and changes the network config |
| 3. | Integration Test | Test sidechain and mainchain work together correctly on substrate-based chain |
| 4. | Prepare Dockerfile | Dockerfile that allows developer to setup the environment through docker |
| 5. | Write Tutorial | ZK Rollup tutorial that allows developer to run example commands |
| 6. | Documentation | Document which describes how to deposit, withdraw and send, be validator, and init and participate network on substrate-based chain |
| 7. | Publish an article | After the Web3 Foundation’s review, we will publish an article which highlights ZK Rollups on Polkadot. Potentially, we will integrate the article to the Polkadot’s medium. |

## Additional Information :heavy_plus_sign:
- [web site](https://www.plasmnet.io/)
- [document](https://docs.plasmnet.io/)
- [Twitter](https://twitter.com/Plasm_Network)
- [Medium](https://medium.com/stake-technologies)
- [GitHub](https://github.com/PlasmNetwork)
