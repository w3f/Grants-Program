# Open Grant Proposal

* **Project Name:**  Implement raft consensus and collator
* **Team Name:**  Tidot team
* **Payment Address:**  0x30C75CCa722395FcbAACC48b36a91c8200CBAD30


## Project Overview :page_facing_up: 
### Overview

​		Distributed storage has reached a saturation point among centralized systems, meaning the technology is available and deployable to any centralized organization, which however does not equate with flawless and immaculate operation. There are still many problems. Nowadays a handful of tech giants have tightened their grip on our day-to-day data, monopolizing its usage and dictating its structural and categorical allocation, which unequivocally leads people to question the centralized structure itself. What’s worse, research teams that require huge amount of data cannot properly examine their results due to lack of data access. This is the status quo that we want to break and in return we’ll have our data back. A number of projects have tried in this regard, such as maidsafe, filecoin, and many others which tried to incentivize distributed storage, but even today, filecoin still fails to do so and strides no further than mining games on the fil chain by miners, nowhere near real blockchain storage. There is another project named arwave that blazes a new trail with the chain only performing confirmation and no calculation. With this in mind, it does manage to store data with incentives in place, cracking the hard nut that traditional blockchain fumbled. But there is a major problem. Arwave confirms on-chain transactions via a PoW consensus similar to Monero’s, with its market value determining the security of the chain, thus not secure enough given the market value. Then comes TiDot which is equipped with arwave's "on-chain confirmation and off-chain calculation" principle and polkadot's security consensus, allowing DOT's relay chain to fortify the already strong TiDot network.


### Project Details 

TiDot is committed to providing a stable, reliable and available data storage network in the Polkadot ecosystem. TiDot has two roles: Collator and Client. Users can store, and retrieve data after paying fees and claim part of the fees as refund if the data is deleted.

Collator is completely controlled by parachain and communicates with relay chain through the collator protocol. 
The integration of Collator and raft node requires the following:

-1: Collator's economic model and management.
-2: Embedding TiKV’s raft node state into Collator.
-3: The integration of Polkadot network module and TiKV network module in terms of communication. (Both have all modules designed by themselves, so we add the Bridger module to both for communication purpose.)

## Team :busts_in_silhouette:

### Team members
Xianzhi  Huang(leader)

Xing  Li

Dong Cheng

Fei Zhang

Xin Tang

### Contact
* **Contact Name:** Xianzhi Huang
* **Contact Email:**  haroldtiansheng@gmail.com

### Team Code Repos

https://github.com/TiDot-netowrk




## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 3 month

* **Full-time equivalent (FTE):**  5

* **Total Costs:**  29000 DAI

  

### Milestone 1 — Implement Substrate Modules 
* **Estimated Duration:** 3 month
* **FTE:**  5 
* **Costs:**   29000 DAI

| Number | Deliverable | Specification |
| ------ | ------------- | ------------------------------------------------------------ |
| 0a.    | License       | GPL-3.0 License                            |
|  1 |  cumulus | All collators should form a cluster, and the leader is responsible for submitting candidate block information to collators assigned to the parachain by the relay chain. The implementation and integration of collator's raft network https://github.com/tikv/raft-rs into cumulus, and let cumulus choose the raft protocol. |
