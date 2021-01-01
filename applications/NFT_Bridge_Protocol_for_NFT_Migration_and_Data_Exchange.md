# Open Grant Proposal

* **Project Name:** Protocol for NFT Migration and Data Exchange
* **Team Name:** Perpetual Altruism 
* **Payment Address:** 1B6AHziiBvE28Lg74n23V3dYXbxcVLGKYi

## Project Overview :page_facing_up: 

This proposal is in response to Polkadot Bridge RFP.
### Overview

In this proposal, we use the following terms and definitions:   
   
* *NFT:* Intangible asset that is compatible with the ERC-721 standard (i.e. the unique intangible asset is abstracted from the concept of token, which is how the asset is represented on a blockchain). An NFT always exists in a world, which is itself in a universe.   
   
* *Universe* e.g. a blockchain, the Web2.0 internet, a private company’s database…   
   
* *World (within a universe)* e.g. a smart contract or smart contract ecosystem, a website, a private company project…   
   
* *Migration:* The movement of an NFT from an origin universe to a destination universe.   
    
* *IOU migration:* An NFT migration where the original token is put in escrow in the origin universe bridge, and a deed that allows the bearer to redeem that original token in the origin universe is created in the destination universe.   
     
* *Full migration:* An NFT migration which is handled by the publisher of the NFT, who controls the destination world, and thus can allow the NFT’s features and intellectual property rights to be transferred to the new token in the destination universe.   
     
* *Digital Rights Management:* The systematic approach to prevent unauthorized redistribution of digital rights and intellectual property rights infringement during a full NFT migration.   
    

The aim of this proposal is to standardize what information is sufficient and which are necessary to allow the migration of an NFT from an arbitrary universe to another. Both of the endpoints (origin universe/world and destination universe/world) must be ERC-721 compatible, but they do not have to be blockchains (e.g : domain name tokenization using an ERC-721 compatible API).

There are already Polkadot bridges under development for ERC-20 tokens and other arbitrary data. However, there is no consensus yet on how to bridge NFTs across chains. This project aim is to create a standard to do so at the messaging level.

Our team is building NFT.com, a marketplace for the world’s tokenized assets and we need this infrastructure for our marketplace to work effectively on the Polkadot Network. Previous to this we also developed [Cryptograph](https://cryptograph.co), an NFT publisher and marketplace on Ethereum.

### Project Details
The deliverable of this proposal is a standardized protocol specification.

### Ecosystem Fit 
To our knowledge, there is currently no work being done on a standardized, universal bridge protocol for cross-chain NFT migration.

## Team :busts_in_silhouette:
### Team members
* Guillaume Gonnaud
* Edouard Bessire

### Contact
* Guillaume Gonnaud
* g.gonnaud@perpetual-altruism.org
* [NFT.com](http://NFT.com)

### Legal Structure 
* Perpetual Altruism Ltd
* 2 Ordnance Mews, London NW86PF, United Kingdom

### Team's experience
**[Guillaume Gonnaud](https://github.com/Nokhal):** Co-Founder and CTO of Perpetual Altruism Ltd, the developer of NFT publisher and marketplace Cryptograph. Previously co-founded two other companies as CTO, and worked as a researcher and developer for Japan’s National Institute of Informatics in Tokyo. He holds a MSc Computer Science from France’s National Polytechnic Institute and a MSc Research in Artificial Intelligence from Paul Sabatier University. He is the main author of the [GBM auction mechanism](https://medium.com/cryptograph/incentivised-bidding-the-gbm-auction-c6dae5a756e5) as well as of the ERC-2665 standard.

**[Edouard Bessire](https://github.com/edouardru):** Co-Founder of Perpetual Altruism Ltd, the developer of NFT publisher and marketplace Cryptograph. Computer science Engineer with extensive product development and project management experience. Edouard holds an MSc in Applied Mathematics from France’s National Polytechnic Institute, and an MSc in Innovation, Entrepreneurship and Management from the Imperial College Business School. He is also a co-author of the [GBM auction mechanism](https://medium.com/cryptograph/incentivised-bidding-the-gbm-auction-c6dae5a756e5).

### Team Code Repos
[https://github.com/Nokhal/Cryptograph_Project](https://github.com/Nokhal/Cryptograph_Project)   
[https://github.com/ethereum/EIPs/issues/2665](https://github.com/ethereum/EIPs/issues/2665)   

### Team LinkedIn Profiles
[https://www.linkedin.com/in/guillaume-gonnaud/](https://www.linkedin.com/in/guillaume-gonnaud/)   
[https://www.linkedin.com/in/edouardbessire/](https://www.linkedin.com/in/edouardbessire/)   


## Development Roadmap :nut_and_bolt: 
### Overview
* **Total Estimated Duration:** Less than 7 weeks
* **Full-time equivalent (FTE):**  2 FTE
* **Total Work Days:** 66 days
* **Cost per work day:** £300
* **Total Costs:** £19,800

### Milestone 1 — Desirable Protocol Features 
* **Estimated Duration:** ~2 weeks
* **FTE:**  2 FTE
* **Work Days:** 21 days
* **Cost per work day:** £300
* **Costs:** £6,300

We will write up and engage with the community to determine the desirable features of a NFT migration and data exchange messaging protocol.
So far, we have determined that the protocol must allow for the following features:
* Migrate any ERC-721 token between EVM-compatible chains
* Migrate an NFT back and forth to get the original token back.
* Be ERC-1155 compatible
* Migrate an NFT outside of an EVM universe and redeem the same token back
* Migrate an NFT to an arbitrary world (as the owner of an NFT, you should be able to choose where you want the NFT to be migrated to and who will mint it i.e. the protocol is not restricted to a specific project)
* Have built-in protections against “bad” migration by preventing migration to non-registered destination worlds.
* Be XCMP compatible
* Perform both IOU migration (no Digital Rights Management requirement) and Full migration (which requires Digital Rights Management at the bridge level)
* Migrate an NFT with either a ‘checked’ migration (need to be acknowledged by both the sender and the receiver of a token) or ‘unchecked’ migration (the token in the original world needs to first be attributed to a tokenID on the destination chain, then it is simply put in escrow with the bridge on the origin chain). NB: Checked migrations are fully trutless and decentralized and optimised for security, whilst unchecked migrations are optimised for gas costs. 

### Milestone 2 — Checked Migration Process
* **Estimated Duration:** ~3 weeks
* **FTE:**  2
* **Work Days:** 30 days
* **Cost per work day:** £300
* **Costs:** £9,000

We will write up the ‘Checked Migration’ process which includes a security protocol to ensure that both the sender and the receiver are satisfied with the migration outcome in a decentralized and trustless fashion.
* Acknowledgment of migration on origin blockchain by the receiver
* Before this acknowledgement on the origin chain by the receiver, the sender can withdraw their token(s) from the bridge once a set timestamp has been reached (timelock).
* Challenge: Checked migration needs to be possible for either EVM => EVM, * => EVM or EVM => * migrations.

### Milestone 3 — Standard and Documentation for Cross-universe Migration
* **Estimated Duration:** ~1 week
* **FTE:**  2
* **Work Days:** 15 days
* **Cost per work day:** £300
* **Costs:** £4,500

We will write up the standard and documentation for cross-universe migration, which includes “necessary” and “optional” data for optimization (the less data the better, as this data is going to be written on both universes).
* Challenge: To establish what the necessary “bytes” are to be transmitted from universe to universe for all kinds of migration (*checked/unchecked, IOU/Full migration).

## Future Plans
We will implement this standard for EVM-compatible chains. Our main goal is the ability for any Ethereum mainnet NFT to be painlessly migrated to Moonbeam on the Polkadot network.


## Additional Information :heavy_plus_sign: 
This proposal is a part of the wider NFT.com venture.
Research on the bridge protocol is already under way. 

This proposal is part of a series of grant proposals that we have submitted:
|  #  | Grant Title   | Link  |
| :---: | :------------- | :-----: |
| 1      | Protocol for NFT Migration and Data Exchange |  [link](./NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange.md) |
| 2 | Standardized Interface and Implementation of IOU NFT Migration |  [link](./NFT_Bridge_Standardized_Interface_and_Implementation_of_IOU_NFT_Migration.md) |
| 3 | Standard for Reading Information About a Migrated NFT   |   [link](./NFT_Bridge_Standard_for_Reading_Information_About_a_Migrated_NFT.md) |
| 4 | Standardized Interface and Implementation of IOU NFT Redemption |   [link](./NFT_Bridge_Standardized_Interface_and_Implementation_of_IOU_NFT_Redemption.md) |
| 5 | Standard for Decentralised, Trustless Cross-chain Verification of Ownership |   [link](./NFT_Bridge_Standard_for_Decentralised_Trustless_Cross-chain_Verification_of_Ownership.md) |
| 6 |  Protocol and Implementation of a Singular, Decentralized, Trustless NFT Bridge with Digital Rights Management |   [link](./NFT_Bridge_Protocol_and_Implementation_of_a_Singular_Decentralized_Trustless_NFT_Bridge_with_Digital_Rights_Management.md) |
| 7 | Protocol, Interface and Implementation of a Cross-chain Ownership and Digital Rights Management Authority | [link](./NFT_Bridge_Protocol_Interface_and_Implementation_of_a_Cross-chain_Ownership_and_Digital_Rights_Management_Authority.md) |
| 8 | Governance System for Bridge Upgradability   |   [link](./NFT_Bridge_Governance_System_for_Bridge_Upgradability.md) |
| 9 | EIP and Implementation of All Previous Grant Proposals   |   [link](./NFT_Bridge_EIP_and_Implementation_of_All_Previous_Grant_Proposals.md) |
| 10 | Deployment and Operation of EVM NFT Bridges   |   [link](./NFT_Bridge_Deployment_and_Operation_of_EVM_NFT_Bridges.md) |
