# Protocol for NFT Migration and Data Exchange

* **Team Name:** Perpetual Altruism 
* **Payment Address:**        
BTC : 1B6AHziiBvE28Lg74n23V3dYXbxcVLGKYi        
ETH/DAI : 0xA7427d0D45e8dd969049872F9cDE383716A39B23

## Project Overview :page_facing_up: 

This proposal is in response to Polkadot Bridge RFP.
### Overview

In this proposal, we use the following terms and definitions:   

* *NFT:* Intangible asset that is compatible with the ERC-721 standard (i.e. the unique intangible asset is abstracted from the concept of token, which is how the asset is represented on a blockchain). An NFT always exists in a world, which is itself in a universe.   

* *Universe* e.g. a blockchain or parachain, the Web2.0 internet, a private company’s database…   

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
* **Total Costs:** £19,800 (26862.66 USD/DAI)

### Milestone 1 — Desirable Protocol Features 
* **Estimated Duration:** ~2 weeks
* **FTE:**  2 FTE
* **Work Days:** 21 days
* **Cost per work day:** £300
* **Costs:** £6,300 (8558.05 USD/DAI)
* **Deliverable:** A list of clearly defined, measurable features that the final bridges built using this vision should support, as well as how to test them using pseudocode.    

We will write up and engage with the community to determine the desirable features of a NFT migration and data exchange messaging protocol.
So far, we have determined that the protocol must allow for the following features:
* Migrate any ERC-721 token between EVM-compatible chains
* Migrate an NFT back and forth to get the original token back.
* Be ERC-1155 compatible
* Migrate an NFT outside of an EVM universe and redeem the same token back
* Migrate an NFT to an arbitrary world (as the owner of an NFT, you should be able to choose where you want the NFT to be migrated to and who will mint it i.e. the protocol is not restricted to a specific project)
* Have built-in protections against “bad” migration by preventing migration to non-registered destination worlds.
* Allowing polkadot parachains to trustlessly migrate NFTs from one parachain to an another using SPREE.
* Perform both IOU migration (no Digital Rights Management requirement) and Full migration (which requires Digital Rights Management at the bridge level)
* Migrate an NFT with either a ‘checked’ migration (need to be acknowledged by both the sender and the receiver of a token) or ‘unchecked’ migration (the token in the original world needs to first be attributed to a tokenID on the destination chain, then it is simply put in escrow with the bridge on the origin chain). NB: Checked migrations are fully trutless and decentralized and optimised for security, whilst unchecked migrations are optimised for gas costs. 
* Licensed under the [Unlicense](https://unlicense.org)            

### Milestone 2 — Checked Migration Process
* **Estimated Duration:** ~2 weeks
* **FTE:** 2
* **Work Days:** 20 days
* **Cost per work day:** £300
* **Costs:** £6,000 (8150.52 USD/DAI)
* **Deliverable:** A documented step by step process that would allow a trusted relayer to perform efficient migrations of NFTs.       

We will write up the ‘Checked Migration’ process which includes a security protocol to ensure that both the sender and the receiver are satisfied with the migration outcome.
This is especially important if NFT's are migrating from/to a trustless universe (eg : a public decentralized blockchain) toward/from a centralized/private universe.
This process is NOT a fully decentralized trustless process itself in order to accomodate for a wide array of possible origin and destinations, but it does allow decentralized trustless outcomes while guaranteeing authenticity and ownership of the NFT at every step. 

* A checked migration process mean there is an acknowledgment of the migration on the destination universe by the sender.
* A checked migration process mean there is an acknowledgment of the migration on the origin universe by the receiver
* The migration is complete only once both the sender and receiver have acknowledged the migration. Before that, the migrated token cannot be used.
* If after a time-limit, either of those acknowledgement are missing, the migration is reverted : the original token can be withdrawn freely by the sender, and the migrated token is burned.
* Checked migrations need to be possible for either EVM => EVM, * => EVM or EVM => * migrations.
* Checked migrations need to allow any third party to "check" the migration and publish a standardized signed message that the migration did indeed happen.
* NB : This only cover the migration of NFTs to a new universe, not the redemption of the the NFT back to it's origin universe.
* Licensed under the [Unlicense](https://unlicense.org)         

*The main purpose of this migration process is for NFT publishers to allow their users to effortlessly migrate their tokens with the least amount of efforts required. NFT publishers could offer users to do the whole migration with a single gas spending approve() from an NFT owner and the rest trough meta-transactions by the publisher. The publisher would then sign the migration as properly done after having minted and transferred the token on the destination blockchain. By essence, most NFTs are not trustless assets as their publishers own real world IP rights to them, and it is hence acceptable to use said publishers as relayers. This is standardizing a process that would otherwise require the publisher to update their original NFT smart contracts or NFT owners to burn their original NFT token in order to get a new one minted on the destination universe.*

### Milestone 3 — Trustless Migration Process
* **Estimated Duration:** ~1 week
* **FTE:**  2
* **Work Days:** 10 days
* **Cost per work day:** £300
* **Costs:** £3,000 (4075.26 USD/DAI)
* **Deliverable:** A documented step by step process that would allow a trust-minimized relayer to perform migrations of NFTs.    

We will write up the ‘Trustless Migration’ process which is designed to be used when the destination universe have trutsless state reading capabilities of the origin universe.
* Snowfork is already building a substrate module allowing specifically for Ethereum Smart contract reading. If a Substrate-built parachain implement those reading capacities, then implementation of this process should be straightforward.
* In the case of EVM => EVM ERC-721 migration without trustless reading, Chainbridge already exist. However, their contracts requires administrator input for new contract registration as well as lacking features that are NFT specific, such as preventing minting technically correct but legally counterfeit tokens.
* NB : This only cover the migration of NFTs to a new universe, not the redemption of the the NFT back to it's origin universe.
* Licensed under the [Unlicense](https://unlicense.org)            

### Milestone 4 — Standard and Documentation for Cross-universe Migration
* **Estimated Duration:** ~1 week
* **FTE:**  2
* **Work Days:** 15 days
* **Cost per work day:** £300
* **Costs:** £4,500 (6112.89 USD/DAI)
* **Deliverables:** 

* A generic Standard written in pseudocode including predicate and postulate for each function and events that would allow for either checked or trustless migrations to be performed for the same asset, from the same bridge : only one endpoint should be sufficient to know about all of the migrations. This standard is the most generic version and allows the most diverse universes, and henceforth is the least constrained. It will have it's own dedicated decentralized webpage explaining the standard as well as a documentation and links to both the EIP and the PSP. This decentralized webpage will also have a centralized, cached version that NFT.com will host.
* An EIP standard written in Solidity including predicate and postulate for each function and events that would allow for either checked or trustless migrations to be performed for the same asset, from the same bridge.  
* A PSP standard written in ink! including predicate and postulate for each function and events that would allow a smart contract for either checked or trustless migrations to be performed for the same asset, from the same bridge. This would allow third parties to integrate an NFT bridge on any Smart contract supporting parachain, even if said parachain does not explicitely support a trustless communication channel with other parachains at the substrate level. As a separate module of this PSP we will also provide a standard for parachain NFT migrations using SPREE provided that both parachains implement this standard.
* Those standards must allow an EVM bridge following the EIP on ethereum mainnet/moonbeam to migrate an NFT to a WASM bridge following the PSP standard on a parachain and vice versa.

We will write up the standard and documentation for cross-universe migration, which includes “necessary” and “optional” data for optimization. This is a summarized write up of both the previous milestones but writen as specifications for implementations, including the predicate and postulate of each message and what they mean in term of state on the source and destination universe.
* Challenge: Establishing predicate and postulate on what are the allowed pair of source/destination worlds. Those allowed pairs could be designed in any fashion, from centralized trusted to decentralized and trust minimized.
* Licensed under the [Unlicense](https://unlicense.org) or when required under the license requirements of EIP and PSP.            

## Future Plans
We will implement this standard for EVM-compatible chains. Our main goal is the ability for any Ethereum mainnet NFT to be painlessly migrated to Moonbeam on the Polkadot network.

## Additional Information :heavy_plus_sign: 
This proposal is a part of the wider NFT.com venture.

Learn more about our vision for the bridge here: [link](https://docs.google.com/document/d/1mhSKmC_4Hg7GqJuSLZk5Tu1hNjJlqo6O5TNwFx-e6vw/edit?usp=sharing) 
