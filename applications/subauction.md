# W3F Open Grant Proposal

- **Project:** Subauction
- **Team name:** Subauction
- **BTC address:** 3MXF8e315nbRKzU5ZhxBxNUeew9xDKstTx (BTC)

## Project Overview :page_facing_up:

In Ethereum, the NFT industry is really testing network limits these days, so we expect there's quite some potential exploring the space within the Polkadot ecosystem.

Inspired by the parachain candle auction mechanics, we started working on a prototype of the NFT auction system while participating in Encode hackathon (awarded 2nd place in the Polkadot category).

This document describes a vision for the NFT marketplace platform built on top of NFT infrastructure projects being developed now on Polkadot.

We believe the ecosystem might benefit from a more generic implementation of our initial prototype of NFT auctions with English auction type. Also, we'd like to take a different path than most of the projects built on Ethereum and apply a curated quality-over-quantity approach with some specific features available in the Polkadot ecosystem.

Last but not least, while many other projects focus on the improvement of underlying background technology, we're convinced that there is a huge opportunity bridging the gap between what's possible with current technology and the end-user capabilities to interact with these systems. That's why we aim to both improve on infrastructure (NFT auction pallet) and potentially user delivery via a well-designed frontend application using another application for grant to continue in this work.

### Project Details

What we already accomplished:

- English auction type (creation, bidding, removal)
- NFT minting using ORML pallet and NFT standard schema based on OpenSea
- Media integration with upload to IPFS
- NFT and funds locking on the network, exchange of those funds

#### Candle Auction Type

Candle auction is a variant of the English auction where the last part of the auction is randomized in the sense that it can be concluded anytime. This prevents bidders from leaving their bids to the last few minutes or seconds and it's fairer in the internet environment where bots can bid on behalf of the buyers. The configuration of such an auction will be very similar to the English one.

#### Top-up Auction Type

This is a very popular auction type used by charities. Each participant will pay a "top-up fee" which is based on the bid he made minus the closest lower bid. This effectively means that each participant will pay the top-up fee except the first and the last bidder. The last bidder wins the auction, obtains the item, and only pays the item's price. We believe that bringing this kind of auction type enables entities to raise funds for good causes so that we can connect socially responsible projects with supporters and philanthropists.

#### Auction type generalization

As the long-term goal is to support as many different types of auctions as possible, the application has to be flexible enough to provide an easy interface to plug them in. This will be made possible by making the solution more robust with its architecture overhaul. In order to achieve genericity, we want to create a higher level of abstraction and provide more suitable data structures.

#### Governance and Content Curation

As stated in the project overview, we're strong believers in the quality over quantity approach. We'd also like to re-introduce the concept of scarcity and exclusivity in the NFT space which is slowly fading out in the Ethereum world from our point of view. To make that happen, we'd set up DAO for content curation where we would initially serve as the curators to avoid possible abusive content and eventually allow the community to participate.

We plan to leverage most of the governance features available on Polkadot. The first cornerstone of governance will be the council who will be voted on and will be deciding in referenda on the shape of the application - its modules, features, and functionality. The second cornerstone will be voted content curators who will be delegated from the council to approve or reject public proposals from the community, manage auctions and provide the optimal level of content safety and creativity. 

#### Business Model Mechanics

To keep on moving this project forward, we need predictable revenue streams to secure resources of different parts of our NFT marketplace such as content curation, new NFT content partnerships, and of course ongoing product development. We'll research applicable business models and go-to-market strategies that align with our overall vision of the NFT marketplace.

### Ecosystem Fit

We aim to build a feature-specific auction pallet that possibly integrates with already being developed NFT infrastructure projects and allows creating and bidding on NFT auctions of different auction types. The point is to provide easy integration to existing NFT implementations that can be re-used across the whole ecosystem. Also, there will be different auction types and some of them have never been implemented in the Polkadot space so it's definitely something that will push the whole ecosystem forward and we might even find some other means of token distribution models that can benefit all the projects (for example adjustments to the Dutch auction).

Also, we are already in touch with several leading NFT projects within the Polkadot ecosystem and they are very interested in having an auction system on top of their platforms. For instance, we have discussed that with Kodadot and we definitely want to work together in the future.

### NFT integration

There are multiple different approaches to NFT implementation on the market with no official standard set in stone yet on Polkadot. We want to keep our solution as flexible as possible and have the ability to be integrated with a broad spectrum of NFTs. At this point, the closest resemblance of an NFT standard we could find was the ORML by Acala so we started and will continue building based on this library. On the other hand it should be easy in the future to migrate the solution to a different kind of NFT implementation or a Polkadot standard.

## Team :busts_in_silhouette:

### Team members

- Michael Repetny (Product dev at Subauction, previously co-founder of web analytics Zeerat, graduate of University of Economics)
- Petr Mensik (Blockchain dev at Subauction, previously Java/Clojure backend developer, graduate of Ostrava University of Technology)
- Jindrich Zeleny (Blockchain dev at Subauction, previously BI engineer, graduate of Brno University of Technology)
- we plan to bring a part-time (0.5 MD) technical writer to help with specific milestones as further described

### Team Website

- https://polkadotters.medium.com

### Legal structure

- LLC in the Czech Republic

### Team's experience

We participated in the Encode hackathon winning 2nd prize in the Polkadot category. We were also in touch with the Acala team managing the ORML pallets and we discussed a couple of our proposals to enhance the NFT pallet and they have accepted our [PR](https://github.com/open-web3-stack/open-runtime-module-library/pull/351). Our team members are also graduates of Substrate Runtime Developer Academy. Last but not least, we run the biggest Polkadot community in Czechia/Slovakia (Polkadotters) where we gather valuable market feedback.

Besides blockchain development, each member has 5+ years of experience in Computer Science in different areas such as BI, software development, and enterprise-grade engineering.

### Team Code Repos

- https://github.com/polkadotters/SubAuction
- https://github.com/polkadotters/SubAuction_Frontend

### Team LinkedIn Profiles

- https://www.linkedin.com/in/repetny
- https://www.linkedin.com/in/petr-men%C5%A1%C3%ADk-2566394b/
- https://www.linkedin.com/in/jindrich-zeleny

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** ~2 months
- **Full-time equivalent (FTE):** 3.5
- **Total Costs:** ~30,000 USD

### Technologies used
- Built as a standalone auction module using **Rust** and **Substrate**
- Integrated with **ORML NFT** pallet from day 1
- Integrated with IPFS
- For the actual code please check our **[repository](https://github.com/polkadotters/SubAuction)**

### Milestone 0: Implement Auction Type Generalisation

See [Auction Type Generalization](#auction-type-generalization) for definitions.

- **Estimated Duration:** 2-4 weeks
- **FTE:** 3.5
- **Costs:** $12,000
- Implement Auction Type Generalisation from the currently developed type of English auction
    - redefine traits and add more of them (these are interfaces to handle various types of auctions), current solution has only one
    - add handlers/methods for events that operate auctions
    - add structs to keep on-chain data about auctions
- Deliver docker-compose file to run node
- The code will have proper unit-test coverage to ensure functionality and robustness.
- Provide both inline documentation of the code and a basic tutorial describing how the software can be used and tested.

### Milestone 1: Implement New Auction Types

See [Candle Auction Type](#candle-auction-type) and [Top-up Auction Type](#top-up-auction-type) for definitions.

- **Estimated Duration:** 1-2 weeks
- **FTE:** 3.5
- **Costs:** $6,000
- Implement:
  - the [Candle Auction Type](#candle-auction-type), a specific type for NFT auction to prevent snipping (placing bids in the very last second to gamble the system)
  - the [Top-up Auction Type](#top-up-auction-type), a specific type for NFT auction usually used for fundraising or charity auctions
- Deliver docker-compose file to run node
- The code will have proper unit-test coverage to ensure functionality and robustness.
- Provide both inline documentation of the code and a basic tutorial describing how the software can be used and tested.

### Milestone 2: Governance, Content Curation & Business Model Mechanics

See [Governance and Content Curation](#governance-and-content-curation) and [Business Model Mechanics](#business-model-mechanics) for definitions.

- **Estimated Duration:** 2-4 weeks
- **FTE:** 3.5
- **Costs:** $12,000
- Implement:
  - the content curation system and introduce governance DAO to prevent possible abusive content
- Deliver docker-compose file to run node
- The code will have proper unit-test coverage to ensure functionality and robustness.
- Provide both inline documentation of the code and a basic tutorial describing how the software can be used and tested.
  ...

### Community engagement

We are well-positioned within the Polkadot ecosystem to create our own product since we started the Polkadotters community that is currently having over 4,000 members and supporters. Therefore we will have plenty of space to carefully test our product and receive valuable feedback from the community. We will also try to gather support from other Polkadot ecosystem projects since we already have a good reputation within a space and we are confident that we will be able to promote the project properly.

Our progress will be regularly published on social media to gain enough attention and for the sake of transparency of the whole project.

Our channels

- https://polkadotters.medium.com
- https://twitter.com/Polkadotters1
- https://www.facebook.com/groups/232197797602358/

## Future Plans

We're huge fans of NFT space and we do believe that the Polkadot ecosystem will benefit from having the feature-specific auctino pallet that can be able easily integrated into other NFT solution standards developed on Polkadot. Our end result should be a feature-specific pallet that could be plugged into other blockchain applications and an NFT auction marketplace application with DAO curated exclusive content. But this is only beginning, we believe that huge innovations are going to happen in the NFT space and we want to follow those changes as closely as possible to make our auction system thrive!
