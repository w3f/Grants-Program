# DataBlock

- **Team Name:**  Datablock
- **Payment Address:** 0x41e975f075eA1050A7DCB6723381ED8Fa553e207 (USDC) **
- **Level:** 1

## Project Overview :page_facing_up:

We propose to build a searchable database that provides a record of precedence, cross-chain analysis, proof of history, context, security, and ownership of NFTs across multiple parachains in the Polkadot ecosystem and other Blockchains. The tracker will collect data like NFT creation, past ownership history, metadata. The data will be made accessible via polybase.

### Project Context

1. The continuous indexation of several blockchains.
2. A more human-understandable output.
3. NFT Search Engine.
4. Providing history, precedence, security and context all devoid of the value of the NFT.
5. Leveraging the power of POLYBASE to index multiple Blockchains and nonBlockchain data.
6. A record of precedence, cross-chain analysis, proof of history, context, and security of ownership.
### Project Details

Architecture:
    
  A standard asset tracking SDK will be built with the following layers:
  - Blockchain layer: Access to the blockchain data source and crawl through the blocks from genesis block
  - Middleware layer: Contains the crawlers through which we can crawl the blockchain and collect information about NFTs and write into the database and index it.
  - SDK: This package will have all the necessary functions to fetch details about the NFT asset.

Technology stack: 
- Polybase (Polylang) 
- Typescript 
- Elasticsearch
- JavaScript
- Python
- C/C++
- VECTOR EMBEDDING SEARCH
- [Rust-web3](https://github.com/tomusdrw/rust-web3)
- Nginx, AWS

### Ecosystem Fit
There are quite a few projects in the Polkadot/Kusama ecosystem which are working with NFTs. And going forward with XCM v4 supporting cross chain transfer of NFT's, we believe tracking and tracing of the entire lifecycle of an NFT will not only be a need but a must have.

The DataBlock data will be a great way for these projects to implement provenance for their projects and will save a lot of time and effort to build this from scratch.

Later on we can extend EVM compatibility to this project to make it more versatile.
## Team :busts_in_silhouette:

### Team Code Repos

- https://github.com/diposs/datablock/
- https://explorer.testnet.polybase.xyz/collections/pk%2F0x89de820323237a0e6cab8c5f29dfbf2f026f8c1da20c01f5b06b31877252a9d0f493bf95b625b667b1bdb3fb1593553bda1f056220cb2aa0e680316dba8b9a2c%2Fsh!%2FIndexBlock/schema
- **Live code published on spheron:** http://datablock-66da4c.spheron.app/
- **Vercel link for Main Branch:**  https://datablock-olive.vercel.app/
###Team Accomplishment

- surface level indexation of the Ethereum Blockchain from Genesis to block 17,499,999
- surface level frontend webpage.
- Being in constant communication with the Polybase team and community [Cal](https://github.com/calummoore)
- **Example:** [Block 16,900,000](https://testnet.polybase.xyz/v0/collections/pk%2F0x89de820323237a0e6cab8c5f29dfbf2f026f8c1da20c01f5b06b31877252a9d0f493bf95b625b667b1bdb3fb1593553bda1f056220cb2aa0e680316dba8b9a2c%2Fsh!%2FIndexBlock/records/00ETH-16900000?format=nft) 

### Team members

- **Team lead:** [Onakunle Oladipo](https://github.com/diposs)
- **Team member:** [Tobi Tella](https://github.com/Tobziy)  


### Contact

- **Contact Name:** Onakunle Oladipo
- **Contact Email:** onakunle.dipo@gmail.com

### Team's experience

- **Onakunle Oladipo**: 7+ years of product and technical experience. 2+ years of blockchain experience. FULL STACK DEVELOPER (PREFERENCE – BACKEND)

- **Tobi Tella**: Frontend Junior Developer with less than 6 months experience.


## Development Status :open_book:

## Development Roadmap :nut_and_bolt:

### Overview
- **Total Estimated Duration:** 6 weeks
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 9,500 USD

### Milestone 1 — Blockchain Indexation


- **Estimated duration:** 6 weeks
- **FTE:**  1.5
- **Costs:** 9,500 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that run the code, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d**. | Docker | |
| **0e**. | Article | |
| 1. | Data model definition | Designing and defining the architectural overview of the data model for this application using polybase.xyz  |
| 2. | NFT scanner module | This module will scan the blockchain for any NFT related data from the genesis block and invoke indexer module  for ETH, BNB, POLYGON, POLKADOT. Other chains might be included excluding the 4 mentioned  |

## Future Plans

To connect the raw data to a machine learning model and bring in  [Sotunbo David Ayomide](https://github.com/sotunboolamide) to work on the models. Also add [Dhikrullah Oriade Durosinmi](https://github.com/EngineerSk) to the team.
`
## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** A friend recommended
