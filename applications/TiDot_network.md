# Open Grant Proposal

* **Project Name:**  Implement raft consensus and collator
* **Team Name:**  Tidot team
* **Payment Address:**  0x30C75CCa722395FcbAACC48b36a91c8200CBAD30

Project Overview :page_facing_up: 
### Overview
In the rococo  network, rococo's validator is Babe + grandpa consensus, which is BFT, but collator has no consensus.The consensus of each parachain/parathread is finally confirmed by Relaychain's BFT.The collator is the validator of the parachain, but the BFT of the collator is confirmed by the relaychain.Therefore, collator can use more efficient and fast consensus to collect transaction information and build blocks.BFT has been guaranteed by relaychain, so collator can use raft consensus to ensure the strong consistency and efficiency of collator packing blocks.

Currently, there is only one collator in the cumulus code, but the real parachain is online, and there should not be only one collator or a group of chaotic collators.At this time, collator is no longer necessary to run BFT, because the blocks packaged by collator are confirmed by relaychain's BFT, then running POA consensus is also feasible, but running raft is currently the most efficient distributed consensus protocol that seems to be the most efficient.

POA is not as efficient as raft.


### Project Details 


![raft](https://img.imgdb.cn/item/600fe0883ffa7d37b388fbf0.png)

Collator controls the transaction pool, and each parachain has only one collator to interact with the parachain.So we can let the leader in the raft group be responsible for interacting with the verification node that relaychain allocates the parachain。In the raft protocol, there is a leader and many fallow nodes. The collator is responsible for the function of packaging transactions. Currently, there is only one collator in cumulus that will successfully become a collator of the parachain.

In the raft protocol, each synchronized proposal is a <key, value> structure. In txpool with raft consensus, key represents transaction hash, and value represents transaction data.

The leader has the most comprehensive message in the transaction pool. The collator with the identity of the raft leader takes out the transaction to be sent from the raft group and puts it into the propose factory structure of clumulus to build the block.

![code](https://img.imgdb.cn/item/600fef5e3ffa7d37b390f13f.png)

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
* **Total Estimated Duration:** 2 month

* **Full-time equivalent (FTE):**  5

* **Total Costs:**  29000 DAI

  

### Milestone 1 — Implement Substrate Modules 
* **Estimated Duration:** 2 month
* **FTE:**  5 
* **Costs:**   29000 DAI

| Number | Deliverable   | Specification                                                |
| ------ | ------------- | ------------------------------------------------------------ |
| 0a.    | License       | GPL-3.0 License                            |
|  1 | cumulus | Implement raft protocol for txpool |
