# Open Grant Proposal

* **Project Name:** Platdot
* **Proposer:** [chainnet](https://chainnet.tech)
* **Payment Address:** 0xd75A7F29D1b6C6a8B286a256B999B97b9a9CAED6 

## Project Overview :page_facing_up: 

### Overview

PlatON is a blockchain network focused on privacy computing. The founder is Xiao Feng of Wanxiang Blockchain Labs. Similar to Polkadot, PlatON also has an experimental network named alaya.Currently, Platon only has alaya meta network.Currently, PlatON only has alaya network, so we will give priority to the connection between alaya and kusama.When PlatON is online, we will connect PlatON and Polkadot.
 
The purpose of Platdot is to realize the cross-chain of PlatON and Platdot.We use iterative development. Initially, we will implement a simple multi-signature version to support the exchange of assets between platon and polkadot.Then we will implement polkadot and platon decentralized cross-chain by implementing polkadot spv client and platon spv client.

### Project Details 
platdot will unite the important partners of Polkadot and platon ecology to form an asset cross-chain alliance, and complete the cross-chain asset mapping through 2/3 multi-signature, which constitutes the issuance and exchange of cross-chain assets.

Take polkadot's dot cross to platon as an example. The user initiates a request to cross the dot to the wallet address specified by platon. After the alliance automatically listens to the minting request, it will issue 1:1 anchor dot on platon through multi-signature. pdot, the issued pdot is transferred to the platon address of the user.

Detailed solution:
1. Create a multi-signature account on polkadot to lock the dots required for pdot minting
2. Deploy a smart contract on platon to manage and record the minting and exchange of pdot
3. Multi-signature accounts and pdot smart contracts are managed by the asset cross-chain alliance
4. The members of the asset cross-chain alliance need to run the  Consortium node
5. The Consortium  node is responsible for monitoring and verifying events on polkadot and platon, and submitting the corresponding operations after the event occurs

#### Minting and exchange process of alliance multi-signature:

Minting process:
![Minting process](https://miro.medium.com/max/1050/1*jSH-h44Yos04Ef7c0cWu_g.jpeg)
Exchange process:
![Exchange process](https://miro.medium.com/max/1050/1*SojsfHsFRejISRfgd0jDog.jpeg)

### Ecosystem Fits
* [PlatON](https://platon.network): An infrastructure for Privacy-Preserving Computation and Distributed Economies

* [alaya](https://www.alaya.network): Alaya is a business sandbox and testing field for the next-generation of financial infrastructure of PlatON, a global data asset computing infrastructure with cutting-edge privacy-preserving architecture. While Alaya and PlatON share the almost identical underlying technology, they maintain their respective degrees of openness and independent activities. Despite sharing the same vision and ideas, their evolution paths and specializations differ.



## Team :busts_in_silhouette:
### Team members
* Guo Hongjie
* Li Ming
* Du Yunhui

### Contact
* **Contact Name:** Guo Hongjie
* **Contact Email:** platdotnetwork@gmail.com

### Team Website 
[chainnet](https://chainnet.tech)

### Team Code Repos
https://github.com/platdot

## Development Roadmap :nut_and_bolt: 
### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  5
* **Total Costs:** 50000 DAI 

### Milestone 1 - Multi-signature cross-chain
| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
|  1. | Consortium  node client | Listen events on the platon and polkadot chains, verify the authenticity of the event, broadcast the signature, and verify that the address is correct.|
|  2. | Smart contract | Provide multi-signature contracts and arc20 contract |
|  3. | Front End |  Provide user interface | 



## Additional Information :heavy_plus_sign: 
* PlatON official website: https://www.platon.network
* Alaya official website: https://www.alaya.network
* Chainnet official website: https://chainnet.tech

