# Open Grant Proposal

* **Project Name:**  Minimization of Relaychain and Parachain networks
* **Team Name:**  sherpaX team
* **Payment Address:**  0xd75A7F29D1b6C6a8B286a256B999B97b9a9CAED6


## Project Overview :page_facing_up: 


### Overview
Currently, in the rococo test network, if we want to deploy a parachain, we need to run a validator and a collactor. Both validator and collator need to run a full node. This requires two machines, which wastes bandwidth and increases operation and maintenance costs. We want to improve on this. To achieve the minimal realization of Relaychain and Parachain networks.


### Project Details 
The validator consists of full node and block verification functions. The collator is composed of the full nodes of Relaychain and the blocks that collect parallel chains. We want these two roles to share a Relaychain full node,make collator has a block verification function to minimize Relaychain and parachain networks

![update_design](https://img.imgdb.cn/item/6007f95d3ffa7d37b37cc40c.png)


## Team :busts_in_silhouette:

### Team members
Ling Chong
Quan Sun
Ming Liu


### Contact
* **Contact Name:** Chong Ling

* **Contact Email:** haroldv@163.com

### Team's experience

Implemented chainx client, rust version of btc light client

### Team Code Repos
https://github.com/chainx-org/SherpaX



## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:**  1 month
* **Full-time equivalent (FTE):**  5FTE
* **Total Costs:** 5000 DAI 

### Milestone 1 - Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  5
* **Costs:** 5000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License |  GPL-3.0 License |
| 1. | collator | collator adds the function of block verification |

