# Open Grant Proposal

* **Project Name:** Governance System for Bridge Upgradability
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


Any successful bridge will end up holding very large amounts of tokens put in escrow, and it will be a guardian of tremendous value, thus it is very important to ensure the said bridge is perennial. We propose a governance system that allows the upgradability of bridges, using a council which can vote to ratify or reject referenda. 

Passivism and apathy are the driving forces of voting, especially when voting costs real money (e.g. gas costs on public blockchains). We therefore propose a bridge that is an upgradable transparent smart contract (ERC-1538), with a maintainer who can push upgrades to the smart contract, and with a security council that can veto any upgrade made to it. Changing any security council member or the maintainer is also done through a vote.

We also propose that the initial council members for the bridge be The Polkadot Council, and for the initial maintainer for the bridge be NFT.com, as its interest is highly aligned with making the bridge work.

Such a governance system will be deployed on the bridge of every major EVM compatible chain in order to allow NFT migrations across them. 

Our team is building NFT.com, a marketplace for the world’s tokenized assets and we need this infrastructure for our marketplace to work effectively on the Polkadot Network. Previous to this we also developed [Cryptograph](https://cryptograph.co), an NFT publisher and marketplace on Ethereum.

### Project Details 
The deliverable of this proposal is twofold :
- A standardized interface to be implemented on transparent smart contracts for the governance of upgradability, as well as an example implementation.
- Setting up the authority (organisation) for such a system to function effectively for our bridges.

### Ecosystem Fit 
To our knowledge this is the first proposal of its kind. 

## Team :busts_in_silhouette:
### Team members
* Guillaume Gonnaud
* Hugo McDonaugh
* Edouard Bessire
### Contact
* Guillaume Gonnaud
* g.gonnaud@perpetual-altruism.org
* [NFT.com](http://NFT.com)

### Legal Structure 
* Perpetual Altruism Ltd
* 2 Ordnance Mews, London NW86PF, United Kingdom

### Team's experience
**Hugo McDonaugh:** Co-Founder and CEO of Perpetual Altruism Ltd, the developer of the NFT publisher and marketplace Cryptograph. Active impact investor and early believer and adopter of blockchain technology. Previously worked in banking and wealth management and has a BA in Ancient History and Classical Archaeology from the University Of Warwick and an MSc in Innovation, Entrepreneurship and Management from the Imperial College Business School. He is a co-author of the [GBM auction mechanism] (https://medium.com/cryptograph/incentivised-bidding-the-gbm-auction-c6dae5a756e5) 

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
* **Total Estimated Duration:** ~3 weeks
* **Full-time equivalent (FTE):**  3 FTE
* **Total Work Days:** 40 days
* **Cost per work day:** £300
* **Total Costs:** £12,000

### Milestone 1 — Protocol for EVM-compatible chains
* **Estimated Duration:** Less than a week
* **FTE:**  3 FTE
* **Work Days:** 5 days
* **Cost per work day:** £300
* **Costs:** £1,500

We will definine the process of governance by engaging with the relevant stake-holders (e.g. Polkadot Council)
Based upon this governance process, define a protocol (sequence of actions) for existing EVM chains.
* Produce a prototype and wireframe of frontend/integration for the voting procedures perhaps integrating with existing ones (e.g : polkadot council voting)


### Milestone 2 — Interface for Upgrading Smart Contract
* **Estimated Duration:** ~1 week
* **FTE:**  3 FTE
* **Work Days:** 15 days
* **Cost per work day:** £300
* **Costs:** £4,500

Based upon milestone 1 in this proposal we will write a standardized set of functions for a transparent smart contract to be upgraded by an owner but only after the approval of the security council, as well as a barebone frontend to be run.
* Write a Predicate & Postulate for each function
* Provide an EVM compatible (Solidity) interface. (including events)
* Provide documentation

### Milestone 3 — Solidity Implementation
* **Estimated Duration:** ~1 week
* **FTE:**  3 FTE
* **Work Days:** 20 days
* **Cost per work day:** £300
* **Costs:** £6,000

We will code a barebone Solidity implementation of the previously defined interface(s).
* The code will have complete unit-test coverage to ensure functionality and robustness. A testing guide will describe how to run these tests   
* We will provide a dockerfile to demonstrate the full functionality of the code.   
* We will provide documentation   

## Future Plans
Working with The Polkadot Council to create and run the governance system for the upgradeability of our bridges. 
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

