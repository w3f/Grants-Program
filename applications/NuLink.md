# Open Grant Proposal
* **Project:** NuLink
* **Proposer:**  Pawn
* **Payment Address:**  0xf7410438ead9e89EEd5ca6e61a11E862C297ca0e

## Project Overview :page_facing_up:
### Overview

Our project NuLink is trying to bridge the NuCypher Network to the Polkadot Ecosystem. The [NuCypher Network](https://docs.nucypher.com/en/latest/index.html) is a decentralized network of nodes that perform threshold cryptography operations serving users with secrets management and dynamic access control; in particular, NuCypher currently offers a threshold proxy re-encryption solution that enables secure data sharing which can be used to construct content management platforms, secure messaging, encrypted NFTs, and many other applications.

Through our project, users and applications from Polkadot could take advantage of NuCypher Network. For example, a user Alice in Polkadot could share her private data to another user Bob using the integration from our project, without worrying information leaking to any third party, thanks to NuCypher cryptographic assurance.

The main components of the project are:

1. A Nuproxy pallet which can retrieve the information of stakers and bonding workers from NuCypher contracts in Ethereum to Polkadot parachain;
2. A Policy pallet which holds policy fees and distributes them to nodes of the network.

### Project Description

+ In the NuCypher Network, all the cryptography operations are currently performed in an off-chain side channel. We can reuse this side channel in our project. We only need to take care of the on-chain operation from Ethereum to Polkadot. The on-chain operation mainly includes two parts: Stakers need to register and get rewards on-chain, while Alice needs to grant access to Bob and pay fees to stakers on-chain. NuLink would focus on migrating the on-chain operation from Ethereum to the Polkadot parachain.
+ We will develop a Nuproxy pallet which can retrieve the information of stakers and bonding workers from Nucypher contracts in Ethereum. At the current stage we consider constructing a watcher network managed by the NuCypher team. The watcher network would relay such information to the Nuproxy pallet. 
+ The watcher network  is simply constructed by a single watcher node in the current version. The Nuproxy pallet would check the signature of the watcher node to pass the update request. And in the future we would expand the watcher network to a multi-signature network constructed by a certain number(say N) of watcher nodes. And their corresponding public key would be recorded in the Nuproxy pallet when first deployed.  The update request must obtain more than the 2/3 signature of the total watcher nodes to be valid. The Nuproxy pallet would check the signature  when receiving the update request.  The locking period of Ursulas network is 1days, so the watcher network would send the update request at the same pace.
+  In the future we may use ETH-Polkadot bridge such as Snowbridge to retrieve such information from Ethereum instead of the watcher network. The details would be updated once we finish the design.
+ We would also develop a Policy pallet which can hold policy fees and distribute them in the Polkadot parachain. Through this pallet, Alice in Polkadot could issue a policy in the polkadot parachain and pay the policy fee in the Polkadot parachain. And the worker of Ursulas could withdraw the reward in the Polkadot parachain.  


### Ecosystem Fit
## Team :busts_in_silhouette:
### Team members
* Pawn
* Sam


### Team's experience
* Pawn: Currently pursuing a PHD degree in cryptography from UCAS. Familiar with most cryptographic technology such as Fully Homomorphic Encryption,  Zero Knowledge Proof and Secure Multi-party Computation. 
* Sam: Tutor for Blockchain Engineer Lecture Hall of Internet Industry Research Institute of Tsinghua University;  Former Huobi technical expert; proficient in DEFI project development, developer of  KOKOSWAP, Perpexchange, TMK NFT, YFX.


### Team Code Repos

https://github.com/pawnz0/NuLink


## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated Duration:** 6 month
* **Full-time equivalent (FTE):** 2
* **Total Costs:** 10,000 DAI.


### Milestone 1 Implement Nuproxy Pallet
* **Estimated Duration:** 4 month
* **FTE:**  2
* **Costs:** 5,000 DAI

| Number | Deliverable                          | Specification                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both documentation of the code and a basic tutorial that explains how a user can use the pallet. |
| 0c. | Testing Guide | This milestone will have unit-test for each function to ensure functionality. In the guide we will describe how to run these tests. |
| 1.     | register_watcher   | This function would record the public key of the watcher nodes and would be executed when the Nuproxy pallet first deployed. |
| 2.     | UpdateStakers   | This function would provide the functionality of updating the information of current stakers and bonding workers of Ursulas network. It will be restricted to watchers. |
| 3.     | GetActiveStakers | This function would return a list of active stakers by random sampling. |

### Milestone 2 Implement Policy Pallet
* **Estimated Duration:** 2 month
* **FTE:**  2
* **Costs:** 5,000 DAI

| Number | Deliverable                          | Specification                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both documentation of the code and a basic tutorial that explains how a user can use this pallet. |
| 0c. | Testing Guide | This milestone will have unit-test for each function to ensure functionality. In the guide we will describe how to run these tests. |
| 1.     | CreatePolicy | This function would lock the fee for a specific policy for a locking period. |
| 2.     | RevokePolicy | This function would revoke a specific policy and refund the unconsumed policy fee depending on the locking period. |
| 3.     | Mint | This function would computes and transfers the policy fee to the staker’s account |
| 4.     | Withdraw | The staker could call this function to claim the reward fee. |



## Additional Information :heavy_plus_sign:

We have discussed this project  with the NuCypher core team and got some technical support from the NuCypher team. 

We have implemented the watcher nodes  independently and not funded by this proposal. The owner who deployed the Nuproxy pallet could either manually update the information from Ethereum,  or use our watcher node updating it automatically. Here is the (link)[the watcher nodes](https://github.com/NuLink-network/nulink-watcher).


## Update & Amendments

### 2022/02/27

We  underestimated the total work and the time-line has now been exceeded by several months. We have already  submitted our [work](https://github.com/w3f/Grant-Milestone-Delivery/pull/367) and are waiting for review.

This amendment updates the name of the mirror pallet to the Nuproxy pallet,  and the name of the Policy Management pallet to Policy pallet. 

We have decided to implement the watcher network as one single node in the current version. And we will keep working on this and support the multi-nodes network in the future.
