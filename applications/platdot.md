# Open Grant Proposal

* **Project Name:** Platdot
* **Proposer:** [chainnet](https://chainnet.tech)
* **Payment Address:** 3JP2Uf4HNqKfAfGQWSabohdTq6VQfa6bkL 
## Project Overview :page_facing_up: 

### Overview

PlatON is a blockchain network focused on privacy computing. The founder is [Feng Xiao](https://platon.network/en/team)of [Wanxiang Blockchain Labs](https://www.blockchainlabs.org/). Similar to Polkadot, PlatON also has an experimental network named alaya.Currently, Platon only has alaya meta network.Currently, PlatON only has alaya network, so we will give priority to the connection between alaya and kusama.When PlatON is online, we will connect PlatON and Polkadot. 

PlatON is not based on substrate.PlatON was not developed by our team,Platdot just wants to bridge PlatON and Polkadot in the best way.The use of multi-signature is only our first step, it is only a transitional stage.What we really want to do is a decentralized cross-chain through spv client  without anyone participating.

The purpose of Platdot is to realize the cross-chain of PlatON and Platdot.We use iterative development. Initially, we will implement a simple multi-signature version to support the exchange of assets between platon and polkadot.Then we will implement polkadot and platon decentralized cross-chain by implementing parachain light client  and platon light client.

In today's world, privacy and data are becoming more and more important. Data will be equated with oil to drive world development. PlatON has invested huge resources in data and privacy. Data comes from everyone. If you want efficient use of data, the ownership of the data and the right to use it should be separated. This is the future that PlatON believes in and the future that our team believes in.

### Project Details 
Platdot will unite the important partners of Polkadot and platon ecology to form an asset cross-chain alliance, and complete the cross-chain asset mapping through 2/3 multi-signature, which constitutes the issuance and exchange of cross-chain assets.

Take polkadot's dot cross to platon as an example. The user initiates a request to cross the dot to the wallet address specified by platon. After the alliance automatically listens to the minting request, it will issue 1:1 anchor dot on platon through multi-signature. pdot, the issued pdot is transferred to the platon address of the user.
o
Detailed solution:
1. Create a multi-signature account on polkadot to lock the dots required for pdot minting
2. Deploy a smart contract on platon to manage and record the minting and exchange of pdot
3. Multi-signature accounts and pdot smart contracts are managed by the asset cross-chain alliance
4. The members of the asset cross-chain alliance need to run the  Consortium node
5. The Consortium  node is responsible for monitoring and verifying events on polkadot and platon, and submitting the corresponding operations after the event occurs
6. We will design a game mechanism between alliance members and encourage alliance members to jointly maintain Platdot. For users who use cross-chain services, a certain handling fee will be charged, 70% will be used to give the alliance participating in multi-signature transactions an equal share, 30 % Is an incentive fund, used to motivate active alliance members. It is settled every 24 hours. The alliance member who participates in the most transactions will receive half of the incentive fund. The second alliance member will receive 25% of the incentive fund. The third alliance member  will receive 12.5% of the fund, and the remaining fund will be divided equally among the members who did not receive the reward.  
7. Platon's work focuses on MPC, which is a very interesting technology.  Blockchain focuses on verifiable calculations, and emphasizes the verifiability of calculations. The confidentiality of input data is not considered in this process. The MPC emphasizes the confidentiality of input data during the calculation process. But MPC does not guarantee that the data is verifiable. We will make some attempts to use MPC to improve cross-chain security(For example, using MPC to give users a veto right.) and decentralization.
#### Minting and exchange process of alliance multi-signature:

Minting process:
![Minting process](https://miro.medium.com/max/1050/1*jSH-h44Yos04Ef7c0cWu_g.jpeg)
Exchange process:
![Exchange process](https://miro.medium.com/max/1050/1*SojsfHsFRejISRfgd0jDog.jpeg)

### Ecosystem Fits
* [PlatON](https://platon.network/en): An infrastructure for Privacy-Preserving Computation and Distributed Economies

* [alaya](https://www.alaya.network/en): Alaya is a business sandbox and testing field for the next-generation of financial infrastructure of PlatON, a global data asset computing infrastructure with cutting-edge privacy-preserving architecture. While Alaya and PlatON share the almost identical underlying technology, they maintain their respective degrees of openness and independent activities. Despite sharing the same vision and ideas, their evolution paths and specializations differ.


## Team :busts_in_silhouette:
### Team members
* Hongjie Guo
* Ming Li
* Yunhui Du

### Contact
* **Contact Name:** Hongjie Guo
* **Contact Email:** platdotnetwork@gmail.com

### Team Website 
[chainnet](https://chainnet.tech)

### Team Code Repos
https://github.com/platdot

## Development Roadmap :nut_and_bolt: 
### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  5
* **Total Costs:** 0.75 BTC 

### Milestone 1 - Multi-signature cross-chain
| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
|  1. | Consortium  node client | Listen events on the platon and polkadot chains, verify the authenticity of the event, broadcast the signature, and verify that the address is correct.|
|  2. | Smart contract | We will provide wasm contract and compatible with solidty contract，Provide multi-signature, token minting and destruction, and Verifier incentive function |
|  3. | Front End | we will provide a user friendly interface,Provides functions to connect platon and polkadot plug-in wallets, transfer, track cross-chain progress, provide cross-chain minting and destruction, and display account information. | 



## Additional Information :heavy_plus_sign: 
* PlatON official website: https://www.platon.network/en
* Alaya official website: https://www.alaya.network/en
* Chainnet official website: https://chainnet.tech
* PlatON White Paper: https://platon.network/pdf/en/PlatON_A_High-Efficiency_Trustless_Computing_Network_Whitepaper_EN.pdf?v0.6.6

