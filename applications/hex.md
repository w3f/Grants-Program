# Five Degrees on Substrate

- **Team Name:** Lee
- **Payment Address:** 0x352a7f69df71bda6c51ee7fa938dd76ff2375087(USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Hex  Space Social Graph is  heavily inspired by Five Degrees protocol implementation [5degrees](https://github.com/5DegreesProtocol/5degrees-protocol.git)
Five Degrees propose a simple entity data ownership protocol and use the protocol to capitalize these core data. To make the protocol simple enough, permission-less, and composable, we choose to build the protocol under the existing ERC-1155 standard. Compatible with the ERC-1155 standard, meaning it will be easily implanted into any protocol or business of Web3 that supports ERC-1155. The NFT generated in the protocol can be traded in any NFT market, also any smart contract that requires user relationships can track this data on chain. Any application that supports ERC-1155, can easily integrate this protocol.


### Project Details

With the development of the Web3.0 industry, entities build a relationship network by minting target NFTs, thereby forming a huge transparent, unified, and permission-less relationship network
infrastructure. All DAPPs focus on their own business, and combine the relationship network to realize various products. For example, a social module can be added to Uniswap, so that users can easily know the detailed data of the transactions of the people they follow, or a moment feature can be added to OpenSea, so that users can easily know what kinds of NFTs are their friends trading or holding, just like integrating Twitter or Discord into OpenSea, or if a social network product uses this solution to start its business, the user's friend relationship can be reconnected in Sandbox even the product failed.
Core methods:
Set Entity's Info:Invoke setInfo to set entity's information
Get Entity's Info:Invoke contract's URI methods to get current entity's information Set entity's followers limitation:invoke increaseMaxSupply method
Build the relationship between entities:Invoke mint method to mint an NFT of the following, hold his NFT means your relationship is connected
Destroy the relationship between entities:Invoke burn method to destroy a following's NFT to disconnect the relationship
Get entity's follower list:Query through check the who is holding the entity's NFT Get entity's following list:Query through check the whose NFT is the entity holding.
(5degrees protocol white paper)[https://www.5degrees.io/5Degrees-Whitepaper.pdf]


### Ecosystem Fit

| Project | 5Degrees | Lens Protocol |RSS3 | CyberConnect |
| -----: | ----------- | ------------- | ----------- | ------------- |
| Introduce |5Degrees is a Web3.0 native social protocol,Capitalize the user's core data,Generate NFTs. Protocol compatible and recognized.The ERC-1155 standard allows developers to Any protocol that is firstly implanted into Web 3.0 protocol layer or business layer |Lens Protocol is a Web3.0 social graph protocol. It capitalizes users' calibration data through self-defined protocol standards, generates NFT, and builds a healthy social network. |RSS3 is Decentralized Content Distribution and Aggregation protocol, the RSS3 network consists of service nodes(Server Node).Subgroups and Global Indexers (Global Indexer) composition, the content is stored in Arweave, |CyberConnect implements the Web3.0 social graph protocol and builds an extensible standardized social graph module, which simplifies the development process. CyberConnect Society The cross-graph data is stored on IPFS through Ceramic, and the CyberConnect gateway provides a common data layer for DApps. |
|Core functions |Profile, on-chain user relationship | Profile, on-chain user relationshipPost Mirror. Comment |Profile. Web3.0 social graph module, public chain |Profile, Web3.0 social graph module  Cyberchat |
| Technical implement | ERC-1155 protocol standard |Lens Protocol self-built protocol standard |Arweave | Ceramics IPFS |
|  Open source | Yes | Yes | Yes | Unknown |
|DApp access method | No permission required | No permission required |API access required | API access required |
|Composability | on+off chain | on+off chain | off chain |  off chain |


## Team :busts_in_silhouette:

### Team members

- Lester 

### Contact

- **Contact Name:** Lester Lee
- **Contact Email:** rust.0x0@gmail.com
- **Website:**
No.
### Legal Structure

Individual

### Team's experience

Lester has 20+ years of software development experience and 4 years working in Blockchain   developer.now working as a freelancer.He is proficient in C++. He has 2 years Rust development experience and 3 years Solidity development experience.

### Team Code Repos

- https://github.com/rust-0x0/5degrees-protocol-substrate/tree/dev
- https://github.com/rust-0x0/5degrees-protocol-front-end/tree/dev


- https://github.com/rust-0x0


### Team LinkedIn Profiles (if available)

No.

## Development Status :open_book:

5degrees-protocol-substrate ink! contract implement finished.
5degrees-protocol-front-end implement finished.

- https://github.com/rust-0x0/5degrees-protocol-substrate/tree/dev
- https://github.com/rust-0x0/5degrees-protocol-front-end/tree/dev
  
* 5degrees-protocol-front-end screenshot picture
![image](https://github.com/rust-0x0/5degrees-protocol-doc/blob/dev/images/ScreenShot.png)


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**  1 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:**  3,500 USD

### Milestone 1 — Implement Five Degrees ink! Contract & Front-end Modules

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:**  3,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. |  Unlicense |
| 0b. | Documentation |We will provide both inline documentation of the code and a basic tutorial that explains how a user can deploy our smart contract, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Docker file(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article on medium detailing our social protocol construction .
| 1. |  ink! Contract: FiveDegrees | This contract is the overall contract of the FiveDegrees protocol.Set Entity's Info, Get Entity's Info,Build the relationship,Destroy the relationship and so on. |  
| 2. |  protocol front-end  | We will deliver the  react-based front-end base on substrate-front-end-template  with the contract,which demonstrates core methods of the contract. |  


## Future Plans

No.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

- personal recommendation.


