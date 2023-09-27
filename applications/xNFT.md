# xNFT

- **Team Name:**  Starks
- **Payment Address:** 0x2492237FA7698B8F3B35F2be4be3B1128439Ec8d (USDC) **
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

This application is in response to the open RFP [xcm-tools](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/xcm-tool.md)

### Overview

The Crosschain NFT Pallet is a unique initiative designed to facilitate the smooth movement of NFTs across various blockchain networks, utilizing the XCM protocol. Through the implementation of this pallet, individuals can effortlessly exchange NFTs between relay chains and parachains.

### Project Details

![xNFT](https://github.com/anshulWeb3/Grants-Program/assets/100308982/9ad19535-10d4-4dbe-a2ac-4f1ba22f1c00)

#### The xNFT Pallet provides the following extrinsics (functions):

1. transferSingleNFT(admin,collection_id, item_id, dest_collection_id, dest_item_id, mint_to, dest) —> DispatchResult ; transfer an NFT with the NFT ID 
     - admin — the owner of the NFT being sent.
     - collection_id — the ID of the collection of which the nft is being sent.
     - item_id — the ID of the NFT being sent.
     - dest_collection_id — the ID of the collection to which the nft is being sent.
     - dest_item_id — the ID of the NFT being created.
     - mint_to — the new owner of the NFT being sent.  
     - dest — a multilocation to define the destination address for the tokens being sent via XCM. It supports different address formats, such as 20 or 32-byte addresses (Ethereum or Substrate).
    

2. transferMultiNFT(admin,collection_id, item_id, dest_collection_id, dest_item_id, mint_to, dest) —> DispatchResult ; transfer multiple non-fungible tokens, defined by their multilocation
     - admin — the owner of the NFT's being sent.
     - collection_id — the ID of the collection of which the nft is being sent.
     - item_id — the ID's of the multiple NFT's being sent.
     - dest_collection_id — the ID of the collection to which the nft is being sent.
     - dest_item_id — the ID's of the multiple NFT's being created.
     - mint_to — the new owner of the NFT's being sent. 
      - dest — a multilocation to define the destination address for the tokens being sent via XCM. It supports different address formats, such as 20 or 32-byte addresses (Ethereum or Substrate)
     

3. transferCollection(admin,collection_id, dest) —> DispatchResult ; transfer a collection using collection id , defined by its multilocation
     - admin — the owner of the collection. 
    - collection_id — the ID of the COLLECTION being sent.
    - dest — a multilocation to define the destination address for the tokens being sent via XCM. It supports different address formats, such as 20 or 32-byte addresses (Ethereum or Substrate).
 
4. transferCollectionOwnership(new_owner,collection_id, dest ) —> DispatchResult ; transfer the collection ownership on another chain, defined by their multilocation
    - new_owner — the new owner of the COLLECTION being sent.
    - collection_id — the IDs of the COLLECTION being sent.
    - dest — a multilocation to define the destination address for the tokens being sent via XCM. It supports different address formats, such as 20 or 32-byte  addresses (Ethereum or Substrate).
    

#### A feature will be added to the XCM VM for minting NFt on target chain using the encoded data from source chain.
#### This xNFT pallet will be tightly coupled with the NFT pallet in Substrate

#### Project does not include:
- This pallet does not let you create, mint or burn any NFT this just to send them to other chains by making use of the XCM functionality
- This pallet will not be able to transfer any NFT that is not registered using the NFT pallet for Substrate(i.e NFT deployed as smart contracts).

### Ecosystem Fit

- The implementation of the xNFT pallet would introduce improved interoperability, expanded applications, increased liquidity, and enhanced flexibility to the Substrate ecosystem. It would foster the growth and vitality of the community, while facilitating seamless exchange and utilization of NFTs across different Substrate-based blockchains.
1.  Interoperability: The xNFT pallet would enable effortless transfer of NFTs across various blockchains within the Substrate ecosystem. This would enhance connectivity and compatibility between Substrate-based chains, promoting a more integrated and interconnected ecosystem.
2. Expanded Applications: Cross-chain NFT transfers would unlock new possibilities and use cases for NFTs within the Substrate ecosystem. Developers and users would have the ability to leverage NFTs from different chains, enabling cross-chain collaborations, marketplace integrations, and enhanced utility for NFT-based applications.
3. Improved NFT Liquidity: By facilitating cross-chain transfers, the xNFT pallet would enhance liquidity for NFTs within the Substrate ecosystem. NFTs from different chains could be freely traded and utilized, expanding their market reach and creating more opportunities for value exchange.
4. Flexibility and Choice: The xNFT pallet would provide developers and users with the flexibility to choose the most suitable blockchain for their NFT requirements. They would be able to mint, transfer, and interact with NFTs on various Substrate chains, ensuring compatibility with specific needs or preferences.
5. Ecosystem Growth: The introduction of the xNFT pallet would contribute to the growth of the Substrate ecosystem, attracting developers and projects interested in building NFT-related applications or platforms. This would foster innovation and expand the range of offerings within the ecosystem.
6. Adoption of XCM: By utilizing XCM for cross-chain NFT transfers, the xNFT pallet would promote broader adoption of the Cross-Chain Messaging protocol within the Substrate ecosystem. This would reinforce the significance of interoperability and cross-chain communication, encouraging other projects and pallets to integrate XCM for various use cases.
7. Community Engagement: The xNFT pallet would generate interest among developers, NFT enthusiasts, and users within the Substrate community. It would encourage collaboration, knowledge sharing, and participation in the development of cross-chain NFT solutions, further strengthening community bonds and promoting ecosystem growth.

## Team :busts_in_silhouette:

### Team members

- **Team lead:** [Aqueel Abbas](https://github.com/tur461)
- **Team member:** [Ipsa Gupta](https://github.com/Ipsa11?tab=repositories)  
- **Team member:** [Arunjot Singh](https://github.com/arunjot12?tab=repositories) 


### Contact

- **Contact Name:** Jatinder Singh
- **Contact Email:** jatindersngh116@gmail.com

### Legal Structure

- **Registered Address:** C-208, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160059
- **Registered Legal Entity:** AntLabs India Pvt. Ltd.

### Team's experience

We are a skilled and dedicated group of professionals who possess extensive experience working with the Substrate ecosystem. Our team members have successfully completed numerous projects related to Substrate development, including building custom blockchains, implementing governance mechanisms, and designing smart contract for intuitive dApp functionalites. We understand the importance of technical partnerships in fostering innovation and growth within the blockchain industry. We are confident that our knowledge of the Substrate framework and its capabilities will enable us to contribute significantly to the development and expansion of Polka's ecosystem.

Stack exchange profiles of some of our team members:
1. https://substrate.stackexchange.com/users/3136/wakar-seraj-khan
2. https://substrate.stackexchange.com/users/406/akash-singh
3. https://substrate.stackexchange.com/users/4068/upendra-singh

We are the technical partners for [Peer Coin](https://explorer.peer.inc/)

## Development Status :open_book:

[xcm-tools](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/xcm-tool.md)

## Development Roadmap :nut_and_bolt:

### Overview

### Milestone 1 — xNFT Pallet

* **Total Estimated Duration:** 6 weeks
* **Total Costs:** 9800 USD
- **FTE:**  2

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can transfer nft across chains |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | xNFT | We will create a Substrate module that will handle cross-chain NFT transfers using these functions: 1. transferSingleNFT 2. transferMultiNFT 3. transferCollection 4. transferCollectionOwnership   |

## Future Plans

Currently this project is solely to transfer NFT between Substrate based chains. In future we plan to extend this functionality to non-substrate chains like Ethereum, Solana etc. We also plan to extend the functionality of this pallet to substrate based solo-chains as well(solo to solo). We will also add support to transfer NFT deployed to the chains as smart contracts.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** A friend recommended
