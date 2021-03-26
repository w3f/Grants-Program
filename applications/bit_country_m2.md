# Open Grant Proposal

* **Project:** Bit.Country Milestone 2 (Follow up grant after M1 delivered) by MVP.STUDIO
* **Proposer:** https://github.com/bit-country
* **Payment Address:** 1NzRAkHyDZByge95nuMJSNB5tBTQo6RLPy

## Development Roadmap :nut_and_bolt: 

### Summary
Since completing the first milestone for Bit.Country, we have developed multiple proof of concepts for newer features such as Continuum (the map of bit countries), the marketplaces and NFT minting. 

We have also developed the virtual world further, implementing collaborative building, material packs, persistance of changes and general tweaks to the UI and experience. Currently undergoing basic user testing and demoing to interested parties. 

Other work has included changes to the design and layout of the DApp; improved sharing experience for posts and content created on the bit country timelines; migration to improve scalability.

The team has also been applying for a number of accelerators, and receiving attention/interest from multiple VCs, funds and KOLs. Currently, oversubscribed so negotiating with them to determine the initial round allocations. The team has recently been accepted into the Berkeley Blockchain Xcelerator cohort of 2021. Currently in talks with VCs, funds and KOLs who have reach to over 40 million fans. If you are interested to hear more about our current progress, please email us at hi@bit.country

### Considerations
We have been investigating the possibility of using decentralized storage for more aspects of bit country content and storage needs, a basic proof of concept is being worked on.

The team has been reconsidering the block planner for a bit country and its related block theme feature as part of milestone 1. We are now looking at separating the logic to enable a smoother experience between users who wish to use a predesigned template or build from scratch.

### Overview
* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):**  5 FTE.

### Milestone 2  — Continuum Protocol (Universal Map) & NFT Centric Token Economy. Goal: public testnet
* **Estimated Duration:** 6 weeks
* **FTE:**  5
* **Costs:**  30,000 USD

*Note: We should submit this application ealier, due to the workload required by Kusama NFT Gallery, we have decided to help the community for the upcoming Chiba Art Gallery.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation, video, medium articles & creating more content in the lightpaper of the project. |
| 0c. | Testing Guide | The code will have proper unit-test coverage for pallets and automated testing coverage for the dapp using Cypress. | 
| 1. | Substrate module: Continuum | This pallet handles the Continuum protocols for shaping the map of the bit countries. |
| 1a. | Spot Good Neighbor (Auction) Protocol | Controls which users are able to participate in auctions for spots, allows existing neighboring spots to have their say on a potential occupier of the new spot. |
| 1b. | Spot Leasing Protocol | Allows owners to lease their spot to others. Determines the valid period of leasing a continuum spot, enabling right of renewal for existing lessors. |
| 1c. | Spot Good Neighbor (Governance) Protocol | Gives neighboring spots the ability to raise disputes with other spots, which can be voted on and actioned. Designed to improve neighborhood quality. |
| 2. | Substrate module: NftPromotion | Our network is NFT native chain. This pallet manages NFT campaigns that we will create to incentivize NFT creators, traders and minters. (e.g. subsidies on costs or other incentive) |
|	3.	|	Substrate: NFT Minting - Extended |	While using ORML trait as a base, we will be implementing co-creator, origin details, NFT-Future-Event (e.g. time capsule), Smart Contract Enabled NFT (e.g. give NFTs programmability). |
| 4. | Connected to Rococo | Become a parachain on Rococo, requires frequent migrations to the newest version of pallets and reapplication for the parachain. Aim to be included as soon as possible. |
|	5. |	Dapp - Dual Login |	Support login using either PolkadotJs or classical username and password login. We need to do some engineering to make this happens so we can bring more users outside of the ecosystem. |
|	6. |	Dapp - Continnum	|	Continuum is the universal map of bit countries. We will be developing a mapping system (think Google Maps), using OpenLayer or similar. Provides the interface for all of our activities related to Continuum. |
| 6a. | Bit Country Search | Enable a user to search for a bit country on the Continuum with zoom to location. |
| 6b. | Spot Auction UI | Allow users to see which spots are currently being auctioned, and enable their participation. |
| 6c. | Spot Neighbor UI | Interface to raise disputes with neighboring spots, or to object to a potential bidder in auctions. |
| 6d. | Layer System | Population heatmap and possibly other map overlays to provide insights to users. |
|	7.	|	Dapp - Local NFT Market	|	Develop the local bit country marketplace (like a subset of the platform-wide marketplace) for local market and value creation. Some items will only be able within the local NFT market, encouraging users to belong to quality bit countries. Included functionality: listing items, searching, auctions, purchases, rentals |
|	8.	|	Dapp - Local Ownership Board	|	Screen to display the local token owners and their rankings (how their token quantities compare to other token holders). |
|	9.	|	Dapp - 2D <-> 3D	|	Implement the composite UI between 3D and 2D. Users in 3D can access 2D timeline without changing the page (leaving the virtual world). |
|	10.	|	Dapp - 3D templates	|	Develop some 3D templates for users to use to bootstrap their virtual world. (e.g. Mars, Cyberpunk, Kusama Canary theme) |
|	11.	|	Dapp - Dashboard |	Summary page of current system: blocks, bit countries, recent events, economic overview etc. The webapp landing page. |
|	12.	|	Dapp - Bootstrap	|	Our goal is to launch the testnet after this milestone, we will be creating honor-effort-on-the-testnet campaigns to attract users to engage with us. We will also setup public idea board allowing visitors to create new ideas and vote for existing ideads. |
| 13. | Docker / UAT | We will demonstrate the full functionality of our chain and our dapp on UAT / a dockerfile. |
