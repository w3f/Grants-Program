# Open Grant Proposal

* **Project:** ZK Rollup on Polkadot
* **Proposer:** NoCtrlZ, akru, and SotaWatanabe
* **Payment Address:** 1LYWirHyBbmdCCU2YHg2qxgLAuybUfKEPm

## Project Overview :page_facing_up:
We have been working on off-chain scalability solutions aka layer2 solutions. And after tremendous research, we became to believe that ZK Rollup would be the killer layer2 solution. Currently, rollup is [one of the potentially interesing topics](https://github.com/w3f/General-Grants-Program/blob/master/grants/polkadot_stack.md) for Web3 Foundation and Vitalik announced [the rollup centrric Ethreum roadmap last month](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698?fbclid=IwAR1oJyMEwvjFXNy7vCHT19PyXNh27PAHZjvCR4qBRoUB9mKf_nEVOtE4vgk). According to Vitalik, the Ethereum ecosystem is likely to be all-in on rollup (plus some plasma and channels) as a scaling strategy for the near and mid-term future. We know that Polkdot has  a different technical architecture and tech stack but Rollup is still important because of severtal reasons.

1. Bringing vertical off-chain scalability without sacrificing on-chain data availability (×3-10 scalability).
1. Handling smart contracts on layer2.

### Overview
Throught this grant, we are going to make a ZK Rollup pallet for potential Parachains. Our goal is to make Plasm Network a scalable smart contract platform. And supporting Rollup on the Parachian is important both for us and for the community.

### Project Details
We expect the teams to already have a solid idea about the project's expected final state.

Therefore, we ask the teams to submit (where relevant):
* Mockups/designs of any UI components
* API specifications of the core functionality
* An overview of the technology stack to be used
* Documentation of core components, protocols, architecture etc. to be deployed
* PoC/MVP or other relevant prior work or research on the topic

### Ecosystem Fit
Are there any other projects similar to yours? If so, how is your project different?

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
We have been making Plasm Nnetwork, a scalable multi-virtual machines smart contract platform on Polkadot supporting cutting edge layer2 solutions. Curretly, another team at Stake techologies is working on the Optimistic Virtual Machine, an unification for all layer2 solutions and a subset of Optimistic Rollup. We have already delivered 4 milestones out of 6. In addition to that, we have already delivered several grants such as Plasma, ECDSA, and ink! playground.

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
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  1 FTE
* **Total Costs:** 2.07

### Milestone 1
#### Implement ZK Rollup Contract With Cirom
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.69 BTC

First step will be to implement ZK Rollup contracts with [`Zinc`](https://github.com/matter-labs/zinc) framework enables us to build ZK Rollup smart contracts easily. We'll prepare the mock contracts and operator application on ropsten network as test environment.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Mainchain Contract | Contract which is used by user to deposit and withdraw Ether or ERC token |  
| 2. | Sidechain Contract | Contract which receives transaction from transactor |  
| 3. | Prover API | API that allows prover to receive witness from operator and create SNARK proof for sidechain block |  
| 4. | Operator API | API that allows service provider to compose sidechain network and, broadcast bundle of transactions and SNARK proof for them to mainchain contract |  
| 5. | Integration Test | Test for above modules to check whether these API work together correctly on ropsten network |  
| 6. | Documentation | Document which describes how to deposit, withdraw and send Ether, be prover, and to test them |

### Milestone 2
#### Implement ZK Rollup Network Builder Pallet
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.69 BTC

Second step will be to implement ZK Rollup builder module as pallet. In order for service provider to setup ZK Rollup sidechain network, we need pallet to be network operator which has function to monitor mainchain contract, commit sidechain block on mainchain and request to create sidechain block proof for prover.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Implement Sidechain Runtime | Runtime that run the sidechain environment |  
| 2. | Implement Operator RPC | Pallet that allows service provider to compose own ZK Rollup network and interact with mainchain through RPC |  
| 3. | Integration Test | Test sidechain and mainchain work together correctly on substrate-based chain |  
| 4. | Documentation | Document which describes how to deposit, withdraw and send, be validator, and init and participate network on substrate-based chain |

### Milestone 3
#### Implement ZK Rollup Prover Client And Block Explorer
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.69 BTC

Third step will be to implement ZK Rollup prover application and block explore. In order for user to participating ZK Rollup network and create sidechain block validity proof with SNARK, we need implement prover application.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Implement Prover Application | Pallet that allows user to be prover in ZK Rollup network. This pallet has function to create proof after receiving witness from server |  
| 2. | Implement Block Explorer | UI that allows everyone to check blocks and transactions status |  
| 3. | Integration Test | Test explorer works together correctly on Web UI |  
| 4. | Documentation | Document which describes how to deposit, withdraw and send, be validator |

## Additional Information :heavy_plus_sign:
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?