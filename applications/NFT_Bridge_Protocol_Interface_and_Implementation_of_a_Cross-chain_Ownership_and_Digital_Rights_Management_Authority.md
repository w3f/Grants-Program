# Open Grant Proposal

* **Project Name:** Protocol, Interface and Implementation of a Cross-chain Ownership and Digital Rights Management Authority
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


Sometimes, there are technical limitations to the decentralized and trustless proof of ownership across universes, which can prevent full migration of NFTs.
Some of these limitations may include: 
* The destination universe is not a public blockchain.
* The origin or the destination smart contract doesn’t have an owner field.
* The owner of either the origin or the destination smart contract cannot sign messages.

In order to solve that authentication issue, some level of trust and centralization is required. It should be understood that anyone asserting that contract A (in world 1) and contract B (in world 2) are indeed owned by the same rights holder could be liable for the damages to the said rights holder, similarly to websites facilitating the distribution of pirated content.

What is proposed is to take inspiration from the ICANN/Registrar mechanism currently used for domain names: 
* The WEB3 foundation would never assert themselves that smart Contract A and B are indeed held by the same right holder. However, like ICANN, it could designate registrars that are ready to take the legal risk of asserting that indeed smart Contract A and B are held by the same right holders, and authorize full migrations setup by said right holder.
* NFT.com is ready to take such a risk, as we have an interest in facilitating cross-chain migration of assets towards our marketplace whilst preserving the integrity of IP rights.

Our team is building NFT.com, a marketplace for the world’s tokenized assets and we need this infrastructure for our marketplace to work effectively on the Polkadot Network. Previous to this we also developed [Cryptograph](https://cryptograph.co), an NFT publisher and marketplace on Ethereum.

### Project Details 
The deliverable of this proposal is twofold :
* On the technical level, a protocol, interface and implementation of a cross-chain ownership and digital rights management authority for EVM use.
* But more importantly, it’s setting up the authority (organisation) for such a system to function effectively.
### Ecosystem Fit 
To our knowledge this is the first proposal of its kind. 

## Team :busts_in_silhouette:
### Team members
* Hugo McDonaugh
* Guillaume Gonnaud
* Edouard Bessire

### Contact
* Hugo McDonaugh
* h.mcdonaugh@perpetual-altruism.org


* Guillaume Gonnaud
* g.gonnaud@perpetual-altruism.org
* [NFT.com](http://NFT.com)

### Legal Structure 
* Perpetual Altruism Ltd
* 2 Ordnance Mews, London NW86PF, United Kingdom

### Team's experience
**Hugo McDonaugh:** Co-Founder and CEO of Perpetual Altruism Ltd, the developer of the NFT publisher and marketplace Cryptograph. Active impact investor and early believer and adopter of blockchain technology. Previously worked in banking and wealth management and has a BA in Ancient History and Classical Archaeology from the University Of Warwick and an MSc in Innovation, Entrepreneurship and Management from the Imperial College Business School. He is a co-author of the [GBM auction mechanism](https://medium.com/cryptograph/incentivised-bidding-the-gbm-auction-c6dae5a756e5) 

**[Guillaume Gonnaud](https://github.com/Nokhal):** Co-Founder and CTO of Perpetual Altruism Ltd, the developer of NFT publisher and marketplace Cryptograph. Previously co-founded two other companies as CTO, and worked as a researcher and developer for Japan’s National Institute of Informatics in Tokyo. He holds a MSc Computer Science from France’s National Polytechnic Institute and a MSc Research in Artificial Intelligence from Paul Sabatier University. He is the main author of the [GBM auction mechanism](https://medium.com/cryptograph/incentivised-bidding-the-gbm-auction-c6dae5a756e5) as well as of the ERC-2665 standard.   

**[Edouard Bessire](https://github.com/edouardru):** Co-Founder of Perpetual Altruism Ltd, the developer of NFT publisher and marketplace Cryptograph. Computer science Engineer with extensive product development and project management experience. Edouard holds an MSc in Applied Mathematics from France’s National Polytechnic Institute, and an MSc in Innovation, Entrepreneurship and Management from the Imperial College Business School. He is also a co-author of the [GBM auction mechanism](https://medium.com/cryptograph/incentivised-bidding-the-gbm-auction-c6dae5a756e5).


### Team Code Repos
[https://github.com/Nokhal/Cryptograph_Project](https://github.com/Nokhal/Cryptograph_Project)   
[https://github.com/ethereum/EIPs/issues/2665](https://github.com/ethereum/EIPs/issues/2665)   

### Team LinkedIn Profiles
[https://www.linkedin.com/in/guillaume-gonnaud/](https://www.linkedin.com/in/guillaume-gonnaud/)   
[https://www.linkedin.com/in/hugomcdonaugh/](https://www.linkedin.com/in/hugomcdonaugh/)   



## Development Roadmap :nut_and_bolt: 
### Overview
* **Total Estimated Duration:** ~4 weeks
* **Full-time equivalent (FTE):**  3 FTE
* **Total Work Days:** 40 days
* **Cost per work day:** £300
* **Total Costs:** £12,000

### Milestone 1 — Interface for Authority to Nominate and Retire Registrars
* **Estimated Duration:** ~1 week
* **FTE:**  3 FTE
* **Work Days:** 10 days
* **Cost per work day:** £300
* **Costs:** £3,000

Based on the protocols defined in our [Open Grant Proposal #1](./NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange.md) and [Open Grant Proposal #4](./NFT_Bridge_Standardized_Interface_and_Implementation_of_IOU_NFT_Redemption.md), and the discussion above, we will write a standardized set of functions for an ICANN-like authority to nominate and retire registrars. 
* Write a Predicate & Postulate for each function
* Provide an EVM compatible (Solidity) interface.
* Provide documentation

### Milestone 2 — Interface for Registering Owners
* **Estimated Duration:** ~1 week
* **FTE:**  3 FTE
* **Work Days:** 10 days
* **Cost per work day:** £300
* **Costs:** £3,000

Based on the protocols defined in our [Open Grant Proposal #1](./NFT_Bridge_Protocol_for_NFT_Migration_and_Data_Exchange.md) and [Open Grant Proposal #4](./NFT_Bridge_Standardized_Interface_and_Implementation_of_IOU_NFT_Redemption.md), and the discussion above, we will write a standardized set of functions for registrars to be able to associate an address as a registered owner of a smart contract on both the bridge universe and the destination universe(s). 
* Write a Predicate & Postulate for each function
* Provide an EVM compatible (Solidity) interface. (including events)
* Provide documentation

### Milestone 3 — Standardization
* **Estimated Duration:** Less than a week
* **FTE:**  3 FTE
* **Work Days:** 5 days
* **Cost per work day:** £300
* **Costs:** £1,500

We will amend the predicate and postulate of owner registration for full NFT migration as defined in our [Open Grant Proposal #6](./NFT_Bridge_Protocol_and_Implementation_of_a_Singular_Decentralized_Trustless_NFT_Bridge_with_Digital_Rights_Management.md),
* Write a Predicate & Postulate for each function in order to accommodate owners designed by registrars instead of being decentralized checks.
* Provide an EVM compatible (Solidity) interface.
* Enable full migration, both checked and unchecked. 
* Provide documentation

### Milestone 4 — Solidity Implementation
* **Estimated Duration:** Less than 3 weeks
* **FTE:**  3 FTE
* **Work Days:** 15 days
* **Cost per work day:** £300
* **Costs:** £4,500

We will code a barebone Solidity implementation of the previously defined interface(s).
* The code will have complete unit-test coverage to ensure functionality and robustness. A testing guide will describe how to run these tests   
* We will provide a dockerfile to demonstrate the full functionality of the code.   
* We will provide documentation   

## Future Plans
Working with the Web3 Foundation to create the authority for cross-chain ownership and digital rights management so our marketplace (NFT.com) can enable any NFT from any chain can be traded. 


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

