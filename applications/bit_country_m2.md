# Open Grant Proposal

- **Project:** Bit.Country Milestone 2 (Follow up grant after M1 delivered) by MVP.STUDIO
- **Proposer:** https://github.com/bit-country
- **Payment Address:** 1NzRAkHyDZByge95nuMJSNB5tBTQo6RLPy

## Development Roadmap :nut_and_bolt:

### Changes summary

There are some changes from the original [application](https://github.com/w3f/Grants-Program/pull/305). The reason of the changes that some UI features that was not aligned on our roadmap and we shifted more focus on delivering public testnet and canary network.

Here are summary of changes

- Remove 3D map and continuum UI out of the application scope.
- Adjusted Continuum Governance Protocol.
- Added Buying Continuum Spot with fixed cost.
- Added Sign to support NFT.
- Added Multi tokens local marketplace.
- Added Benchmarking.
- Adjusted the cost.
- Adjust the FTE.

### Summary

Since completing the first milestone for Bit.Country, we have developed multiple proof of concepts for newer features such as Continuum (the map of bit countries), the marketplaces and NFT minting.

We have also developed the virtual world further, implementing collaborative building, material packs, persistance of changes and general tweaks to the UI and experience. Currently undergoing basic user testing and demoing to interested parties.

Other work has included changes to the design and layout of the DApp; improved sharing experience for posts and content created on the bit country timelines; migration to improve scalability.

The team has also been applying for a number of accelerators, and receiving attention/interest from multiple VCs, funds and KOLs. Currently, oversubscribed so negotiating with them to determine the initial round allocations. The team has recently been accepted into the Berkeley Blockchain Xcelerator cohort of 2021. Currently in talks with VCs, funds and KOLs who have reach to over 40 million fans. If you are interested to hear more about our current progress, please email us at hi@bit.country

### Considerations

We have been investigating the possibility of using decentralized storage for more aspects of bit country content and storage needs, a basic proof of concept is being worked on.

The team has been reconsidering the block planner for a bit country and its related block theme feature as part of milestone 1. We are now looking at separating the logic to enable a smoother experience between users who wish to use a predesigned template or build from scratch.

### Tech Stack

Blockchain: Substrate/Rust

### Overview

- **Total Estimated Duration:** 6 weeks
- **Full-time equivalent (FTE):** 4 FTE.

### Milestone 2 — Continuum Protocol (Universal Map) & NFT Centric Token Economy. Goal: public testnet

- **Estimated Duration:** 6 weeks
- **FTE:** 4
- **Costs:** 24,000 USD

\*Note: We should submit this application ealier, due to the workload required by Kusama NFT Gallery, we have decided to help the community for the upcoming Chiba Art Gallery.

| Number | Deliverable                              | Specification                                                                                                                                                                                                                                                                                                                  |
| ------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0a.    | License                                  | Apache 2.0                                                                                                                                                                                                                                                                                                                     |
| 0b.    | Documentation                            | We will provide inline documentation, video, medium articles & creating more content in the lightpaper of the project.                                                                                                                                                                                                         |
| 0c.    | Testing Guide                            | The code will have proper unit-test coverage for pallets.                                                                                                                                                                                                                                                                      |
| 1.     | Substrate module: Continuum              | This pallet handles the Continuum protocols for shaping the map of the bit countries.                                                                                                                                                                                                                                          |
| 1a.    | Spot Good Neighbor (Auction) Protocol    | Controls which users are able to participate in auctions for spots, allows existing neighboring spots to have their say on a potential occupier of the new spot.                                                                                                                                                               |
| 1b.    | Spot with fixed price                    | Creating more flexibility for the Continuum Slot by allowing governance to enable buy now option for Continuum Spot which allows Metaverse to occupy Continuum Spot through buying with fixed price instead of Auction.                                                                                                        |
| 1c.    | Spot Good Neighbor (Governance) Protocol | Governance voting only enabled when bit countries secured the spot on Continuum, once local governance enabled, residents in the local governance has the ability to raise disputes, change their local economic model which can be voted on and actioned. Designed to improve neighborhood quality.                           |
| 2.     | Substrate module: NftPromotion           | Our network is designed to support NFT and its promotion. This pallet manages NFT campaigns that we will create to incentivize NFT creators, traders and minters. (e.g. subsidies on costs or other incentive)                                                                                                                 |
| 3.     | Substrate: NFT Minting - Extended        | While using ORML trait as a base, we will be implementing co-creator, origin details, NFT-Future-Event (e.g. time capsule), Smart Contract Enabled NFT (e.g. give NFTs programmability).                                                                                                                                       |
| 4.     | Substrate: NFT Sign Support - Extended   | This will allow NFT get supported by their supporters who willing to sign with their signatures to show supports.                                                                                                                                                                                                              |
| 5.     | Substrate: NFT Benchmarking              | This will ensure appropriate weights will apply based on number of NFTs minting and extrinsics.                                                                                                                                                                                                                                |
| 6.     | Substrate: Auction Benchmarking          | This will ensure appropriate weights will apply to auction extrinsics.                                                                                                                                                                                                                                                         |
| 7.     | Connected to Rococo                      | Become a parachain on Rococo, requires frequent migrations to the newest version of pallets and reapplication for the parachain. Aim to be included as soon as possible.                                                                                                                                                       |
| 8.     | Local NFT Market                         | Develop the local bit country marketplace (like a subset of the platform-wide marketplace) for local market and value creation. Some items will only be able within the local NFT market, encouraging users to belong to quality bit countries. Included functionality: listing items, searching, auctions, purchases, rentals |
| 9.     | Multi token in local NFT Market          | Allow local bit country NFT market accepts their own token or using network token when listing, bidding, auctioning or interact with local Marketplace.                                                                                                                                                                        |
| 10.    | Docker / UAT                             | We will demonstrate the full functionality of our chain and our dapp on UAT / a dockerfile.                                                                                                                                                                                                                                    |
