# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:** Phu Quoc Dog
* **Team Name:** Phu Quoc Labs
* **Payment Address:** DAI Address: 0x1AB7B41E9873A071AD89Fb3343a055e1E21Da96e


## Project Overview :page_facing_up:

Decentralized dogs social network, it is the best social network for pets, where you can share photos and videos of your pet's life, rescue puppies, adopt a pet, find pet friendly places and take advantage of our useful pet services. Join the moon mission

### Overview

SHIBA, DOGE just meme token. Phu Quoc Dog is a real coin for real services such as buy food and running a campaign on our platform so you can get more money!!

Phu Quoc Dog is a Substrate-based. Phu Quoc Dog is committed to providing easy-to-use blockchain infrastructure and creating a one-stop comprehensive infrastructure platform, which aims to reduce the threshold and cost for developers, while bringing them great returns.

Phu Quoc Dog is the native token of the Phu Quoc Dog network in a similar way that BTC is the native token of Bitcoin or Ether is the native token of the Ethereum blockchain, and Nicknamed the WE LOVE DOG.

### Project Details

### Architecture

Substrate and IPFS/S3 are the only required parts of the Phu Quoc Dog protocol.

![](https://gblobscdn.gitbook.com/assets%2F-MfYDzBxtTdyfUgSfrld%2Fsync%2Fe3a05fe875b1d005b6822121cd27023b2ed17973.png?alt=media)

Our project includes:

* Back-end developed in PHP, running on MySQL, Elastic and using Web3js.
* UI and Mobile app developed in React.js and React native.
* Blockhain part : Binance Smart Chain \(public and private\), Substrate Technology, either ready-to-use framework or Parathread \(and Relay Chain\).
* Substrate Wallets supports blockchain Phu Quoc Dog and Polkadot.

### Blockchain Operating System

Phu Quoc Dog is a Blockchain Operating System, which contains storage layer, smart contract layer, Defi protocol layer and eApp layer, in details:

* Storage layer: Storage protocol layer supports distributed storage of dApp data.
* Smart contract layer: It supports one-stop cross-chain deployment and calls of dApp. Phu Quoc Dog provides a Web3-compatible API, and existing web3 dApps can be migrated to Phu Quoc Dog without any change needed.
* Promoted comments and mentions. Set the cost at which people pay for guaranteed notification to the influencer.
* Distributed system for storing and accessing image, video and data via IPFS,

### Built on Substrate

Substrate is technically fit for Phu Quoc Dog. By building on top of Substrate, Phu Quoc Dog is able to leverage the extensive functionalities that Substrate provides out-of-the-box, rather than needing to build them from scratch. These functionalities include peer-to-peer networking, consensus mechanisms, governance functionality, and more.

## Team :busts_in_silhouette:

### Team members

* Thien Tran: CTO/Project Lead and Backend Developer
* Thanh Huynh: Full-stack Developer

### Contact

* **Contact Name:** Thien Tran
* **Contact Email:** hello@phuquoc.dog
* **Website:** https://phuquoc.dog


### Team's experience

Team members have  development experience, including front-end development, back-end development, Devops, etc. We have participated in the Vietnam blockchain. The team has in-depth research and accumulation of blockchain technology.

### Team Code Repos

* https://github.com/phuquocdog
* https://github.com/phuquocdog/node
* https://github.com/phuquocdog/wallet

GitHub accounts of all team members.

* https://github.com/byhbt
* https://github.com/duythien


### Team LinkedIn Profiles

* https://www.linkedin.com/in/fcduythien

## Development Status :open_book:

We are currently in the development process, we have basically built Phu Quoc Dog Mainet

### Start the PoA mode of the network

At this stage, we have

- The initial configuration of the Staking module is that the force_era of StakingConfig is set to ForceNone . In this case, the validator of the network will not change;
- Use of the system module BaseCallFilterto filter out current phase non-essential functional modules, so as not to lead to network instability because of an invalid transaction, sample code reference herein ;


## Development Roadmap :nut_and_bolt:


### Overview

* **Total Estimated Duration:** 8 months
* **Full-Time Equivalent (FTE):**  2
* **Total Costs:** $30k for initial grant

### Milestone 1 Example — Implement Substrate And Docs

* **Estimated duration:** 1 month
* **FTE:**  2
* **Costs:** 4,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works see https://docs.phuquoc.dog |
| 0c. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains on own blog see https://phuquoc.dog/blog | 
| 1. | Substrate chain | Use described modules of our custom chain will provide a token via built-in Proof of Authority (PoA) consensus algorithm , and the block generation algorithm is Aura|  

### Milestone 2: Implement Substrate POS And Governance

* **Estimated duration:** 2 month
* **FTE:**  2
* **Costs:** 8,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1 | Switch the network to PoS mode | After the network is stable in the PoA stage and there are no visible failures we can switch the network to PoS mode |
| 2 | Enable governance | Through the modified BaseCallFilterlogic, the required governance functions can be enabled, including:|
| 3 | Unit Tests | We will add unit tests to cover mint, burn, transfer, getBalance, getTotalBalance for the basic token. |
| 4 | Testnet | Running the testnet |

### Milestone 3: Implement Mobile app and Blockchain Operating System

* **Estimated duration:** 5 month
* **FTE:**  3
* **Costs:** 18,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1 | Build API |  Back-end developed in PHP, running on MySQL, Elastic and using Web3js|
| 2 | Mobile app | UI and Mobile app developed in React.js and React native.|
| 3 | Storage layer | Storage protocol layer supports distributed storage of dApp data. |
| 4 | Substrate Wallets | Substrate Wallets supports blockchain Phu Quoc Dog and Polkadot. |



## Future Plans

Our first goal is still to develope a pet social network on a private blockchain platform. It will then integrate the NFT feature for each owner’s animal to be unique on the blockchain network.

And finally we will consider about integrating Defi arrays, integrating support for smart contracts from Ethereum’s ERC20 or Binace’s BEP20 platforms that can run on our blockchain.

We know it will take a long time to complete the above ideas, hope you and investors will join us on this path. 


## Additional Information :heavy_plus_sign:

Currently we have no funding for the Phu Quoc Dog system. We are excited to be part of the Substrate and Polkadot community and we will continue to contribute as much as we can. Thank you for your time and thank you for considering us for the Web3 Open Grant.

Website: https://phuquoc.dog