# Open Grant Proposal

* **Project Name:** Protocol and Implementation of a Singular, Decentralized, Trustless NFT Bridge with Digital Rights Management
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


Building a standard that ensures that when an NFT is migrated across different blockchains, the intellectual property rights of the NFT publisher are not infringed upon, in a trustless and decentralized fashion. This standard should allow callbacks to functions defined by the right holders when the NFT is migrated so they can perform proprietary actions relative to the migration.


This proposal will allow parachains to migrate NFTs without committing copyright infringements or creating counterfeit NFTs

Our team is building NFT.com, a marketplace for the world’s tokenized assets and we need this infrastructure for our marketplace to work effectively on the Polkadot Network. Previous to this we also developed [Cryptograph](https://cryptograph.co), an NFT publisher and marketplace on Ethereum.

### Project Details 
The deliverable of this proposal is a fully functioning migration bridge with DRM for EVM use, with the associated standards.
### Ecosystem Fit 
To our knowledge, there is currently no work being done on this problem.
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
* **Total Estimated Duration:** ~2 months
* **Full-time equivalent (FTE):**  2 FTE
* **Total Work Days:** 90 days
* **Cost per work day:** £300
* **Total Costs:** £27,000

### Milestone 1 — Interface for Rights Holder Cross-chain Smart Contract Association
* **Estimated Duration:** Less than 3 weeks
* **FTE:**  2 FTE
* **Work Days:** 25 days
* **Cost per work day:** £300
* **Costs:** £7,500

Based upon the NFT migration protocol defined in our [Open Grant Proposal #1](./NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange.md), we will write a standardized set of functions for token rights holder(s) to associate an origin smart contract with a destination smart contract. Token rights holders should also be able to point at callback functions that are to be called when a full migration is initiated and who then get the return data appended to the migration data.

Example use case: Proving that address B on Moonbeam is controlled by the same intellectual property rights holder of address A on the Ethereum mainnet.

Further example use case: EVM bridges could implement a whitelist of destination smart contracts for full migration and a blacklist of source smart contracts for IOU migrations.

* Write a Predicate & Postulate for each function
* Provide an EVM compatible (Solidity) interface.
* Enable full migration, both checked and unchecked. 
* Provide documentation

### Milestone 2 — Interface for Sending a token to a bridge for Full Migration
* **Estimated Duration:** ~2 weeks
* **FTE:**  2 FTE
* **Work Days:** 20 days
* **Cost per work day:** £300
* **Costs:** £6,000

Based upon the NFT migration protocol defined in our [Open Grant Proposal #1](./NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange.md) we will write a standardized set of functions for an owner sending a token to a bridge with the intent of fully migrating it. Importantly, such procedures should include a callback() that was setup by the rights holder(s) of the origin and destination smart contracts. This process needs to be reversible, the right holder(s) need to be able to set up enough data within the callback calls in order for the token to be released from the bridge should it need to revert back to the original chain.

* Write a Predicate & Postulate for each function
* Provide an EVM compatible (Solidity) interface. (including events)
* Enable IOU migration, both checked and unchecked.
* Provide documentation

### Milestone 3 — Solidity Implementation
* **Estimated Duration:** ~1 month
* **FTE:**  2 FTE
* **Work Days:** 45 days
* **Cost per work day:** £300
* **Costs:** £13,500

We will code a barebone Solidity implementation of the previously defined interface(s).
* The code will have complete unit-test coverage to ensure functionality and robustness. A testing guide will describe how to run these tests   
* We will provide a dockerfile to demonstrate the full functionality of the code.   
* We will provide documentation   


## Future Plans
Creating a marketplace (NFT.com) where any NFT from any chain can be traded. 

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
