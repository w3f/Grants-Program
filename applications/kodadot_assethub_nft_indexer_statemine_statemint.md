# AssetHub NFT Indexer

- **Team Name:**  KodaDot
- **Payment Address:**  1KxzJHoRJHi8EgWVhrGDueeyzg8PyihAvSL3NP6QMcxEve6
- **[Level](https://github.com/w3f/Grants-Program#baby_chick-level-2):**  2 

### Overview

The AssetHub Indexer is a GraphQL service designed to streamline the interaction with Uniques, NFT non-fungible assets, and fungible assets on AssetHubs (Statemine/Statemint). This service is specifically tailored to serve as a robust data layer for NFT-oriented dApps, leveraging the simplicity of GraphQL and REST API.

In the current landscape, developers face challenges interacting with Uniques and Assets on Statemine due to the complexity and time-consuming nature of querying fungible and non-fungible assets on AssetHub. AssetHub Indexer aims to address these challenges by providing a user-friendly GraphQL interface, thus reducing the time and effort required to query these assets.

The key advantages of the AssetHub Indexer include
its focus on ease of use,
versatility for a broad range of use cases, and
its commitment to bringing Statemine utilization & documentation closer to developers.
Furthermore, the AssetHub Indexer is a completely decentralized, open-source solution that respects user privacy by not collecting user data.

By reducing the time required to query assets and providing a more user-friendly interface, the AssetHub Indexer aims to foster the growth and development of the Web 3.0 ecosystem in Polkadot.


### Project Details

The AssetHub Indexer is a state-of-the-art infrastructure tool designed to address developers' challenges when querying NFTs from the chain. Currently, developers are limited to querying NFTs in batches from RPC nodes, which can be time-consuming and inefficient for customer-facing products. This limitation often results in long waiting times and heavy device data loads.

To overcome these challenges, we have developed the AssetHub Indexer. This tool leverages the power of GraphQL to provide a more efficient and user-friendly interface for developers. With the AssetHub Indexer, developers can easily query NFTs and build on top of the new [NFTs pallet by Parity](https://github.com/paritytech/substrate/blob/master/frame/nfts/src/lib.rs), opening up a wide range of potential use cases, such as creating [fandom shops](https://fandom.deno.dev) for art.

Recognizing that many web developers may not have extensive experience with GraphQL, we have also built a TypeScript-based SDK that can be easily imported into any existing project. This SDK simplifies interacting with Uniques and Assets on Statemine, making it more accessible for developers of all skill levels.

The AssetHub Indexer uses TypeScript and leverages the Squid framework (ArrowSquid) for data processing. It interacts with a Postgres database and provides a GraphQL interface for querying data. The project structure includes directories for generated model/server definitions, server extensions, data type definitions, and mapping modules. It also uses environment variables defined in a .env file or supplied by a shell for configuration.

Currently, the AssetHub Indexer allows developers to interact with Uniques and Assets on Statemine using GraphQL. The project is designed to be as simple as possible, ensuring all tasks can be done quickly and without extended searching. We aim to reduce the time necessary to query fungible and non-fungible assets on AssetHub, making it easier for developers to build innovative and user-friendly decentralized apps.

#### Architecture 🏗

The architecture of the AssetHub Indexer is designed with simplicity and efficiency in mind, ensuring a seamless interaction with Uniques and Assets on Statemine.

At the core of our architecture is TypeScript, a statically typed superset of JavaScript that adds optional types to the language. TypeScript ensures robustness and reliability in our codebase, allowing us to catch errors early in the development process and write more maintainable code.

To handle data processing, we leverage the ArrowSquid framework. ArrowSquid is a powerful tool allowing us to process and index blockchain data efficiently. It provides a set of utilities for defining and running data processing tasks, making handling complex data processing requirements easier.

Our project interacts with a Postgres database, a powerful, open-source object-relational database system that uses and extends the SQL language. Postgres provides us with the robustness, scalability, and performance we need to handle large amounts of data.

![](https://hackmd.io/_uploads/SyLxL56uh.jpg)

On the architectural level, we have a few layers, as described in the picture above.
We need to obtain the data for the correct function of our indexer. AssetHub indexer combines the SubSquid archive (the pre-indexed storage) and RPC node for the new data. When the indexer obtains a new event, it is automatically processed by the defined handler. As previously mentioned, we processed data stored in the Postgres DB. 

To expose the data to clients, we provide a GraphQL interface. GraphQL is a query language for APIs and a runtime for executing those queries with our existing data. It allows clients to ask for exactly what they need and nothing more, making it easier to evolve and enabling powerful developer tools.

The project structure is organized into several key directories. The 'src/generated' directory contains model/server definitions created by codegen. The 'src/server-extension' directory contains a module with custom type-graphql-based resolvers. The 'src/types' directory contains data type definitions for chain events and extrinsics created by typegen. The 'src/mappings' directory contains the mapping module. The 'lib' directory contains compiled js files, reflecting the structure of the 'src' directory.

Finally, the project configures environment variables, defined in a .env file or supplied by a shell. This approach allows us to easily manage and change the configuration without altering the codebase.

The second state-of-the-art is our Client-first SDK called Uniquery. As we can see in the picture below, the only thing that client applications need to do is import the Uniquery package via ESM/CJS (Javascript targets). Once we have the Uniquery package, we can access query builder implementation (such as `client.getCollectionById(id)`). Additionally, because many developers are familiar with REST API, we build a similar fetch strategy without needing a third party (every client fetches data directly from SubSquid). The REST looks like this: `$fetch(/collectionById/${id}).`

![](https://hackmd.io/_uploads/HkMKagJt3.png)

#### Technology Stack 💻

- TypeScript
- Node.js
- Docker
- SubSquid (ArrowSquid for Substrate)
- Postgres
- GraphQL
  

### Ecosystem Fit

The AssetHub Indexer is a crucial addition to the Polkadot and Substrate SDK ecosystem. It addresses the challenges developers often encounter when building on top of runtime pallets, particularly when interacting with Uniques, NFTs, and Assets on Statemine. The AssetHub Indexer provides a comprehensive NFT-oriented data solution, simplifying the development process and enhancing the efficiency of dApps within the ecosystem.

Our solution stands out within the Polkadot and Substrate SDK ecosystem due to its user-friendly GraphQL interface and TypeScript-based SDK. These features streamline interaction with Uniques and Assets on Statemine, reducing the complexity of querying these assets.

Moreover, the AssetHub Indexer is designed to be versatile, supporting a broad range of use cases. Developers can also leverage our [sub-scaffold UI](https://github.com/kodadot/sub-scaffold) template to bootstrap their projects quickly. This template, a forkable Substrate dev stack focused on rapid product iterations, accelerates the development process and allows developers to focus on creating innovative and user-friendly dApps, rather than getting bogged down in the initial setup.

Our target audience for this proposal includes Web3 projects and blockchain developers, whether they are just starting out or already established within the Polkadot and Substrate SDK ecosystem. We believe the AssetHub Indexer can provide significant value to these developers, enabling them to build more efficient and user-friendly dApps like [KodaDot](https://kodadot.xyz/).

AssetHub also plays significant for the [KodaDot](https://kodadot.xyz/) NFT marketplace, which is one of the main consumers for this indexer. Thanks to that, developers can find real-world examples of how to effectively make GraphQL queries and learn more about using Uniquery.


Regarding competition within the Polkadot and Substrate SDK ecosystem, the AssetHub Indexer differentiates itself through its focus on NFT-oriented data solutions, user-friendly interface, and commitment to simplifying the development process. Including the sub-scaffold UI template further sets it apart, providing developers with a ready-to-use foundation for their projects. Moreover, the AssetHub Indexer is already being utilized by [Subsocial](https://twitter.com/SubsocialChain/status/1674435226334904320) and KodaDot, demonstrating its practical application and effectiveness. We plan to further promote the indexer within the ecosystem to onboard new developers and explore new solutions. These factors position the AssetHub Indexer as a unique and valuable tool within the Polkadot and Substrate SDK ecosystem, ultimately serving as a Common Good solution.


## Team :busts_in_silhouette:

### Team members (In order of joining time)

- Matej Nemček - Project Lead
- Viktor Valaštín - Developer

### Contact 📞

- **Contact Name:**  Matej Nemček
- **Contact Email:**  matej.nemcek@geefu.net

### Legal Structure

- **Registered Address:**  Proletarska cesta 4, 1000 Ljubljana, Slovenia, Europe
- **Registered Legal Entity:**  GenArt, Matej Nemček s.p.


### Team's experience

**Matej Nemček** is the Founder and CEO of [KodaDot](https://kodadot.xyz/). He has been instrumental in the growth and development of KodaDot, leading the team to create the best end-user experience on the Asset hub. Matej's leadership and vision have been pivotal in transforming KodaDot into a collaborative hub where creators, developers, and community members work collectively for decision-making.

**Viktor Valaštín**, also known as Viki Val, is the Co-founder of KodaDot. He is responsible for the technical aspects of the project. Viktor has been working on implementing MoonBeam and MoonRiver NFT EVM smart contracts and enabling read-only access to existing components for seamless end-user interaction. His technical expertise has been crucial in successfully launching the Basilisk NFT Marketplace pallet in the Fall of 2022.

Matej and Viktor are strongly committed to the Polkadot ecosystem and have demonstrated their ability to deliver high-quality, impactful projects. They bring a wealth of knowledge and experience to the AssetHub Indexer project. Their work has earned KodaDot the number one rank as a decentralized dapp in the Polkadot ecosystem on [Github](https://github.com/topics/polkadot). You can read more about their work and KodaDot's contributions to the Polkadot ecosystem on the [Polkadot Wiki](https://wiki.polkadot.network/docs/learn-nft-projects#kodadot).


### Team Code Repos

- [https://github.com/kodadot/stick](https://github.com/kodadot/stick)
- [https://github.com/kodadot/nft-gallery](https://github.com/kodadot/nft-gallery)

#### Team GitHub accounts 🧑‍💻

- [Viktor Valaštín](https://github.com/vikiival)
- [Matej Nemček](https://github.com/yangwao)


### Team LinkedIn Profiles 🧑‍🎓

- [Matej Nemcek](https://linkedin.com/in/mnemcek/)
- [Viktor Valastin](https://linkedin.com/in/vikival/)


## Development Status :open_book:

- [github.com/kodadot/stick/milestone/1](https://github.com/kodadot/stick/milestone/1) - Milestone 1 track
- [github.com/kodadot/stick](https://github.com/kodadot/stick) This is the repo for AssetHub Indexer.
- [github.com/kodadot/uniquery](https://github.com/kodadot/uniquery) This is the repo for SDK.

## Development Roadmap :nut_and_bolt:

### Overview

- **Estimated duration:**  3 months ⌛️
- **FTE:**  2 FTE
- **Costs:**  30,000 USD 💰


## Milestone 1 - AssetHub Indexer Implementation first part
- **Estimated duration:**  3 months ⌛️
- **FTE:**  2 FTE
- **Costs:** 30,000 USD 💰


| Sequence | Deliverable                                         | Description                                                                                                   |
|----------|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| 0a.   | Licensing                                             | MIT License will be applicable.                                                                               |
| 0b.   | Documentation                                       | Comprehensive inline code documentation and an explicit README file to guide the project setup and execution.|
| 0c.   | Test Guidelines                                      | Testing will cover major functionality with unit tests and provide a guide for executing these tests.|
| 0d.   | Docker Integration                                   | A Dockerfile will enable the project to run within a Docker container.                          |
| 1a.    | Backward Compatibility Maintenance             | Ensuring backward compatibility with current Uniques v1.                                                      |
| 1b.   | Collection Schema Development              | Development of a GraphQL schema entity that represents the collection.                                        |
| 1c.   | NFT Schema Development                       | Formulation and creation of a GraphQL schema entity representing Non-fungible tokens.                         |
| 2.    | Unique v1.1 Handlers                  | Implement a handlers to index buy, set_price events from the chain.                                               |
| 3.   | NFT Pallet Handlers                 | Handler created for indexing create, mint, buy, set_price, transfer, burn events from the chain.           |
| 4a.   | On-chain Attributes Schema Design      | Development and design of a GraphQL schema entity representing on-chain attributes.                           |
| 4b.   | On-chain Attributes Handlers        | Implementing a four handlers to index the creation and deletion of metadata set for collection and NFT from the chain. |
| 5a.   | Metadata Schema Development                | Creating and designing a GraphQL schema entity representing metadata.                                     |
| 5b.   | Metadata Handlers                   | Implementing a four handlers to index the creation and deletion of an attribute for collection and NFT from the chain.  |
| 5c.   | Metadata IPFS Integration Handler     | Design a handler to retrieve IPFS Metadata from the IPFS network.                                                 |
| 5d.   | Metadata IPFS Unification Handler     | Design and integrate the library to uniform IPFS metadata into one format (OpenSea,TZIP-16,ERC-5773, FXhash)    |
| 6a.   | NFT Royalties Schema Integration      | Design and include royalty support within the GraphQL schema.                                                  |
| 6b.   | NFT Royalties Addition Handler        | Implement a handler to add royalty into NFT.                                                 |
| 6c.   | NFT Royalties PAYOUT Handler           |Creation of handler to index royalty payout events from the chain.                                             |
| 7a.      | Fungible Assets Schema Creation      |Design and formulation of a GraphQL schema entity representing fungible assets.                                |
| 7b.      | Fungible Assets Force Creation        |Handlers will be developed to add system tokens like KSM/DOT into fungible assets.                             |
| 7c.      | Fungible Assets CREATE Event          |An event handler for indexing the creation of a fungible event from a chain, such as (RMRK/USDT) will be developed.|
| 7d.      | Metadata Support for Fungible Assets | Implement a handler to add metadata to a fungible asset event from the chain.                          |
| 7e.   | Fungible Asset Allowlist Setup        |Setting up allows list-based indexing of fungible assets.                                                       |
| 8a.  | Data Views Development                |Construction of data views for efficient access to indexed data.                                               |
| 8b.  | Implementing Metadata Caching Layer |Develop and retry IPFS metadata if un-indexed by Metadata IPFS Integration Handler.                                                               |
| 9.    | Transfer of Collection Ownership    |Incorporate functionality to transfer collection ownership.                                                    |
| 10a.    | Collection settings Schema Design    | Development and design of a GraphQL schema entity representing Collection settings     |
| 10b.    | Collection settings handler    | Implement a handler to add collection settings into data                                                  |


## Future Plans 🔭

Upon the successful deployment of the AssetHub Indexer, our team plans to continue refining and expanding its capabilities in response to user feedback and technological advancements. We have outlined several key enhancements and upgrades that we aim to implement:

1. Development of an explorer to facilitate navigation within the NFT ecosystem.
2. Introduction of collections functionality for systematic organization of NFTs.
3. Creation of view modules to visually present NFT details.
4. Establishment of user profiles to enable personalized user interfaces.
5. Incorporation of constituent elements for individual NFT representation.
6. Implement action components for functionalities like LIST, SEND, BUY, MINT, BURN, and Atomic Swap.
7. Development of comprehensive statistical representations and analytics mechanisms.
8. Introduction of rankings to highlight top-performing users, collections, or items.
9. Personalization of the user interface to enhance the user experience.
10. Maintenance of compatibility with runtime upgrades and changes in the Kusama/Statemine ecosystem.
11. Regular updates to keep up with Substrate for continuous system enhancement.
12. Management of upgrades to parachain runtime versions, including indexer enhancements and related costs.

## Additional Information  ➕


The AssetHub Indexer project continues our team's various projects and implementations in the Polkadot ecosystem. We have already attracted interest from developers within the Polkadot and Kusama ecosystems. Notably, we have in 2019 previously received a grant from the W3F for creating Vue.js UI utilities, components, and libraries, details of which can be found [here](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/Vuejs_ui-components.md).

This previous grant allowed us to reimplement keyring into Vue.js & TypeScript, demonstrating our hands-on experience with the polkadot.js.org/common utilities. The result of this work can be seen in the [web-based Subkey](https://subkey.netlify.com/) tool.

We learned about the Grants Program through a personal recommendation. We believe that our project aligns well with the program's goals, and we are excited about the potential to further contribute to the Polkadot ecosystem.
