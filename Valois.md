Open Grant Proposal
This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.


Project Name: Valois Protocol
Team Name: Valar
Payment Address: BTC bc1qfs7xjtuqcq4kvkexd5c55dgyn4kltp8d6nxhw
The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.

## Project Overview :page_facing_up: 

A network that aims to bridge other platforms (POLKADOT, TRON, ETHEREUM, BSC) in the safest general solution. 
This application is not in response to an RFP.


### Overview

Please provide the following:
Valois protocol aims to bridge the multicomplex platforms the likes of polkadot, ethereum, bsc, tron via cross-chain assets transfer and general remote chain call as well as providing privacy for polkadot ecosystem. It will also achieve the functionality of a private UI dapp (wallet) which will contain a swap functionality of tokens traded on all platforms. 

Valois protocol is built on substrate, with devlopement on progress. The valar team is extremely excited to use valois to mitigate nodes accross the entire world, implementing staking, in its wallet but also improving the ever growing blockchain, specifically polkadots ecosystem. OUR vision is to unite all platforms rather than competing with them. This will strengthen the vision of decentralisation as well as Valois.

### Project Details 
We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

* Mockups/designs of any UI components
* Data models / API specifications of the core functionality
* An overview of the technology stack to be used
* Documentation of core components, protocols, architecture, etc. to be deployed
* PoC/MVP or other relevant prior work or research on the topic
* What your project is _not_ or will _not_ provide or implement
  * This is a place for you to manage expectations and to clarify any limitations that might not be obvious

### Ecosystem Fit 

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

* Where and how does your project fit into the ecosystem? Defi is still in its early stages, and cross chain between platforms is a necessity. We aim to be the leading protocol in providing a private and secure wallet that will adapt to bridge all platforms while also providing a liquidity and a staking platform via our wallet ( Valoiswallet - valswap) rewarding users. This will be the first of its kind on the polkadot ecosystem. 

## Team :busts_in_silhouette:

### Team members
* Alek Basderik lead 
* Sai Zheng - Blockchain Specialist
* Rykul Massingh - full stack developer

### Contact
* **Contact Name:** Alek Basderik
* **Contact Email:** valoisprotocol@gmail.com
* **Website:** in progress.


### Team's experience
Alek Basderik
Alek is an active marketer and promoter in the blockchain and everygrowing crypto industry  for over 5 years, and has been heavily involved with multimillion dollar defi companies including previously in early years being a Binance angel. 

Sai Zheng
Sai is adept at go, c++, soliditiy, javascript/java and rust. Sai has improved over the course of 5 yeats helping lead solid and large projects as well as educate the language to learning devs graduating from the university of technology in sydney. 

Rykul Massingh
Rykul is a full-stack developer with over 5 years experience in software development and technology management. He has plenty of experience in Software Architecture and currently focuses on blockchain development and cross-chain technologies.

### Team Code Repos
https://github.com/Valoisprotocol


## Development Roadmap :nut_and_bolt:
### Overview

* Total Estimated Duration: 3 months
* Full-time equivalent (FTE): 3
* Total Costs: 1.5 BTC

#### Milestone 1 — Valois Substrate Modules and cross-chain bridge implementation

* Estimated Duration: 2 month
* FTE: 2
* Costs: 1 BTC

The main deliverable of this milestone is the Valois substrate pallet that supports: transfer, mint, stake, lock and unlock functionalities. The substrate modules will support both tokens of Polkadot ecosystem as well as those on ERC-20, Bep-20.

| **Number** | **Deliverable**                          | **Specification**                                            |
| ---------- | ---------------------------------------- | ------------------------------------------------------------ |
| 0a.        | License                                  | Apache 2.0 / MIT / Unlicense                                 |
| 1.         | Valois module for cross chain bridging polkadot with BSC, ETH, and TRX | The bridge wil map ERC-20, Bep-20 and TRC-20 to polkadots ecosystem and provide a platform to liquidity swap via the valois wallet. 
| 2.         | the valois substrate and staking module | we will implement a staking scheme as well as a zero proof to enable mint, stake, redeem, lock and unlock functionality.
| 3.         | Benchmark | Benchmark on the throughput and gas cost of the proposed modules. |
| 4.         | Docker    | We will provide a dockerfile to demonstrate the usage of our modules. |

#### Milestone 2 — Valois client implementation and integration

* Estimated Duration: 1 month
* FTE: 1
* Costs: 0.5 BTC

The main deliverable of this milestone is the client that can generate the transactions that can trigger the aforementioned contracts.

| **Number** | **Deliverable**                          | **Specification**                                            |
| ---------- | ---------------------------------------- | ------------------------------------------------------------ |
| 0a.        | License                                  | Apache 2.0 / MIT / Unlicense                                 |
| 1.         | Valois client | We will implement the client that supports the Register, CreateMintTx, CreateTransferTx, CreateRedeemTx, CreateLockTx, and CreateUnlockTx algorithms. The client will be able to generate the necessary transactions to trigger the corresponding substrate modules. |
| 2.         | UI wallet | This will enable users to stake, swap, aswell as lock the tokens they desire to hold in our valoiswallet. |
| 3.         | Benchmark | Benchmark on the usability and latency of the proposed client functionalities. |
| 4.         | Docker    | We will deploy the client on Kusama or Rococo and engage our community on the testing of our product. |


## Future Plans

In phase 1, our goal is to achieve all the basic functionality of Valois Substrate Modules and cross-chain bridge implementation.

In phase 2, we will open the source code of the mint module and the redeem module and launch the product based on the source code of mint and redeem module and it can be accessible via metamask and other wallets. 

In phase 3, we will launch our UI wallet and swap functionality. 

Finally, our main priority and goal is to lauch a private, efficient and smooth UI wallet that integrates cross funcitionlaity between Polkadot and other platforms. The UI will integrate a Valswap in its wallet allowing instant swaps at extremely low costs. 


## Additional Information :heavy_plus_sign: 
