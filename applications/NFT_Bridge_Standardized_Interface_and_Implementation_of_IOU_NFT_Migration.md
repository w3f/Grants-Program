# Open Grant Proposal

* **Project Name:** Standardized Interface and Implementation of IOU NFT Migration
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


Building a standard to put an ERC-721 token into escrow and minting an IOU on the destination chain, as well as an implementation of that standard for EVM use. 

This is for direct use on the moonbeam parachain, and to act as an XCMP upper layer for NFT migration .


Our team is building NFT.com, a marketplace for the world’s tokenized assets and we need this infrastructure for our marketplace to work effectively on the Polkadot Network. Previous to this we also developed [Cryptograph](https://cryptograph.co), an NFT publisher and marketplace on Ethereum.

### Project Details
The deliverable of this proposal is a fully functioning IOU migration bridge for EVM use, with the associated standards.
### Ecosystem Fit 
To our knowledge, there is currently no work being done on a standardized, universal NFT bridge for cross-chain migration.


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
* **Total Estimated Duration:** ~6 weeks
* **Full-time equivalent (FTE):**  2 FTE
* **Total Work Days:** 60 days
* **Cost per work day:** £300
* **Total Costs:** £18,000

### Milestone 1 — Interface for Sending a Token to a Bridge 
* **Estimated Duration:** Less than 2 weeks
* **FTE:**  2 FTE
* **Work Days:** 15 days
* **Cost per work day:** £300
* **Costs:** £4,500

We will write a standardized set of functions for an owner to send a token to a bridge with the intent of migrating it, based on the NFT migration protocol defined in our [Open Grant Proposal #1](./NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange.md).
* Write a Predicate & Postulate for each function
* Provide an EVM compatible (Solidity) interface, which must allow for IOU migration, both checked and unchecked.
* Provide documentation

### Milestone 2 — Interface for Checked Migration Process
* **Estimated Duration:** ~2 weeks
* **FTE:**  2
* **Work Days:** 20 days
* **Cost per work day:** £300
* **Costs:** £6,000

We will write a standardized set of functions for an IOU minter to associate a migrated token with an IOU that the minter has published, as well as register themselves as IOU minters of the destination universe in the original universe based upon the NFT migration protocol defined in our [Open Grant Proposal #1](./NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange.md).
* Write a Predicate & Postulate for each function
* Provide an EVM compatible (Solidity) interface, which must allow for IOU migration as well as both checked and unchecked migration.
* Provide documentation

### Milestone 3 — Solidity Implementation
* **Estimated Duration:** Less than 3weeks
* **FTE:**  2
* **Work Days:** 25 days
* **Cost per work day:** £300
* **Costs:** £7,500

We will code a barebone Solidity implementation of the previously defined interface(s).
* The code will have complete unit-test coverage to ensure functionality and robustness. A testing guide will describe how to run these tests   
* We will provide a dockerfile to demonstrate the full functionality of the code.   
* We will provide documentation

## Future Plans
* We need a fully functioning migration bridge so that users can bring any intangible asset into the polkadot ecosystem so that they can then buy and sell those assets on our marketplace platform NFT.com.
* We are also interested in creating a substrate module for the above so more parachains can integrate the features of our bridge. 


## Additional Information :heavy_plus_sign: 
This proposal is a part of the wider NFT.com venture.      
     
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

