# W3F Open Grant Proposal

- **Project Name:** Yiban Chen (General chain)
- **Payment Address (DAI):** 0x6F19fdD08e5f08a26b6240eD3A83ff44fB8E670E
- **Status:** [Terminated](https://github.com/w3f/Grant-Milestone-Delivery/pull/402#issuecomment-1110671713)

## Project Overview :page_facing_up:

YibanChen / General chain is working to provide multiple protocols to help enable the transition from web2 to web3.

YibanChen plans to initially focus on providing:

- Communication between substrate wallets
- Web3 site hosting utilizing decentralized storage systems such as IPFS
- Name Service protocol for decentralized federated login and blockchain object identity

### Overview

Our team is very passionate about blockchain technology and decentralization. We believe creating a substrate blockchain which can provide decentralized infrastructure to move forward to a server-less web3 internet is one of the most important components to build right now.

We want to contribute to the Substrate/Polkadot/Kusama community by providing replacements for existing critical internet infrastructure which is now run by centralized services. We plan to move forward to become a parachain/parathread or possibly a common good parachain.

YibanChen first wants to enable communication between different wallet addresses. YibanChen intends to allow for decentralized, server less, data sharing between entities by levering wallet addresses and using polkadot.js API.

YibanChen `Note` is a meta protocol that coordinates data transmission. The data can be transmitted offchain, over multiple protocols, such as IPFS.

YibanChen will create a `Note-pallet` to enable users to write data hashes, such as an IPFS CID hash, and send a Note to a wallet public address(the receiver) using a Substrate based blockchain system. We will also create an open source React based front-end to enable users to send and receive notes.

Working to find a decentralized replacement for communication we see to be important. We think of the YibanChen Note protocol as working to replace the current email protocol.

The second feature YibanChen will implement is a `Site-pallet` protocol which will leverage a meta storage protocol similar to the previously described `Note-pallet` providing reference to decentralized storage and linking to a site name. This protocol will provide a mechanism to enable the publication of websites on decentralized storage system such as IPFS, and the ability to resolve the decentralized storage entry point using a name, similar to how traditional website resolution works today. YibanChen will build a React front-end to enable creation and the querying of sites on the YibanChen substrate system. This UI will help with user onboarding, discovery, and understanding the new mechanism for web3 hosting.

The next feature, Name Service, specifically the `Name-Service-pallet`. YibanChen will leverage existing code from the `identity-pallet` to start building a substrate blockchain based name service. While we intend for this service to act as a federated login provider. This service could act as a possible replacement for current DNS infrastructure, we also expect this service/protocol could enable name resolution of multiple blockchain objects such as Wallets, NFT's, and possible directory listing to discover different substrate blockchains.

We plan to create a simple Riot/Matrix bot service to enable users to verify their Marix user identity and pass judgment of the linked wallet identity, creating a verified wallet. This will act similar to how verified identities work on Polkadot/Kusama. We will continue to research how to verify and pass judgments on various different blockchain storage objects.

In the future, YibanChen will work to enable cross-chain communication with other parachains by enabling XCMP messaging once the YibanChen core infrastructure has been completed. We expect some substrate systems will reuse some of our pallets such as the `Note` system to enable note passing across different parachains.

### Project Details

- **Dapp & Wallet Details:**

The Dapp & wallet will be built using `React`. By utilizing React, this also allows us to deploy a web interface that works seamlessly on multiple browser platforms.

Interface Stack:

- React
- Polkadot.js

- **Substrate Pallet Details:**

The `site-pallet` and the `note-pallet` will leverage code from the ORML (open runtime modules library: https://github.com/open-web3-stack/open-runtime-module-library) which will provide us with some underlying community managed and reviewed code. The `site-pallet` and `name-service-pallet` will leverage some existing code and ideas from Substrate Names(https://github.com/xaya/substrate-names) and ENS on Substrate(https://github.com/hskang9/substrate-name-service).

Substrate Stack:

- Substrate
- note-pallet
- site-pallet
- identity-service-pallet
- ORML

These methods will serve as an interface for the React application and Wallet to communicate with any substrate runtime.

```rust
// Create a Note
fn create(origin, ipfs_cid: Vec<u8>) -> Result;
// Transfer a Note
fn transfer(origin, to: T::AccountId, note_id: T::NoteIndex) -> Result;
// list Notes
fn notes(origin, T::AccountId:, u64, note_id: T::NoteIndex) -> Result;

// burn the Note
fn burn(origin, note_id: T::NoteIndex, reason: Vec<u8>) -> Result;
```

- **Javascript UI Details:**

  - **Note UI**

    The front-end UI will be utilizing React + Polkadot.js. This will enable users to create Note hashes on substrate, store the data on IPFS, and transfer the Note to the recipient.

    The UI will enable a user to monitor a wallet address for received messages, retrieve the data from IPFS and display the Note for the user to read.

  - **Web3.0 Sites UI**

    The front-end will enable users to create, delete, transfer, modify and search for Web3.0 sites.

Design of the settings screen.
![img](https://github.com/davidrhodus/yibanchen-design/raw/main/Settings_Screen.png)

Design of the IPFS Pinata API settings screen.
![img](https://raw.githubusercontent.com/davidrhodus/yibanchen-design/main/Settings_IPFS_keys.png)

Design of the account selection settings screen.
![img](https://raw.githubusercontent.com/davidrhodus/yibanchen-design/main/Settings_Account_Select.png)

Design of the create note screen.
![img](https://raw.githubusercontent.com/davidrhodus/yibanchen-design/main/Compose_Note.png)

Design of the note listing screen.
![img](https://raw.githubusercontent.com/davidrhodus/yibanchen-design/main/Note_Listing.png)

Design of the note view screen.
![img](https://raw.githubusercontent.com/davidrhodus/yibanchen-design/main/Note_View.png)

### Ecosystem Fit

The YibanChen will provide users a way to start using web3 internet daily. The `Note-pallet` will provide the ecosystem with a streamlined method to create, store and transfer communication data. YibanChen will also enable users to move from centralized website hosting to a decentralized web3 model with the `Site-pallet`. The `Name-service-pallet` will provide a mechanism for federated login with an substrate user owned wallet.

The audience will be users that want to start using web3 for communication, website hosting and login. We also expect to support Substrate blockchain developers, which will want to reuse our pallets and connect to our infrastructure. In the future we'll integrate and support cross-chain messaging by leveraging XCMP.

- **_Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?_**

We are unaware of any of project that is focusing on critical components, such as email/communication, basic web3 hosting, and decentralized federated login, these services will enable a user to move from web2 to web3.

We looked at the system.remark call, while we found system.remark would allow for simple note creation, but would limit the ability to enhance our Note feature. In the future we plan to add two gatekeeper mechanisms on the note receiver side. First, whitelist a set of wallet address senders, and secondly the ability of a wallet address to set an amount of token required to be sent along with the note before the wallet address would accept the note. We also have had some initial feedback that users would be interested in selling the notes, which we believe utilizing ORML-NFT would be the best for this scenario for selling notes in the future.

## Team :busts_in_silhouette:

### Team members

- David Rhodus: Project lead and developer
- Max Rosenburg: Developer

### Contact

- **Contact Name:** David Rhodus
- **Contact Email:** david@yibanchen.com
- **Website:** https://yibanchen.com

### Legal Structure

- **Registered Address:** None
- **Registered Legal Entity:** None

### Team's experience

`David Rhodus` has been a software developer and development manager for 20 years. David has created multiple startups, worked at Amazon AWS via startup acquisition, Consensys on Ethereum data market research project(https://www.youtube.com/watch?v=l1xJC8d3g5E), and has been involved full time with blockchain since 2017. David has been studying rust for the past two years and substrate/polkadot development for one year.

`Max Rosenburg` is a developer focused on full stack web development and machine learning. Max has a degree in Computer Science from Reed College.

### Team Code Repos

- https://github.com/YibanChen/
- https://github.com/davidrhodus
- https://github.com/maxrosenb

### Team LinkedIn Profiles

- https://www.linkedin.com/in/davidrhodus/
- https://www.linkedin.com/in/-max-rosenberg

## Development Status :open_book:

Currently, work for the Dapp has started, the team has an initial Substrate node (wss://testnet.yibanchen.com:443).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 9 weeks
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 25,000 USD

### Milestone 1 — Build YibanChen Notes DApp with Substrate Wallet Support

- **Estimated Duration:** 3 weeks
- **FTE:** 2
- **Costs:** 10,000 DAI

| Number | Deliverable                                 | Specification                                                                                                                                                                                                                                                                |
| -----: | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                                     | Apache 2.0 / MIT / Unlicense                                                                                                                                                                                                                                                 |
|    0b. | Documentation                               | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
|    0c. | Testing Guide                               | Core pallet functions will be fully covered by unit tests to ensure functionality and robustness. ReactUI testing will be covered by selenium tests. In the guide, we will describe how to run these tests.                                                                  |
|     1. | note-pallet                                 | We will create a Substrate module that will allow an Note to be created and transferred.                                                                                                                                                                                     |
|     2. | Substrate Testnet Chain                     | Users can interact with the notes-pallet module through a simple substrate setup. We will run this substrate chain along with users being able to spin up their own copy.                                                                                                    |
|     3. | Build React app structure                   | We will have the core structure of the application in place.                                                                                                                                                                                                                 |
|     4. | Settings screen: wallet selection           | This will be the landing screen of the app where users can select which substrate wallet they will to use from the Polkadot.JS browser extension injection.                                                                                                                  |
|    4b. | Settings screen: IPFS storage configuration | This will be the screen of the app where users setup their IPFS storage by adding a Pinata API key.                                                                                                                                                                          |
|     5. | Sending a note                              | In the UI, a user can enter a wallet address which will be the message receiver. The user will enter a data message. When the user sends the message, the data will be written to IPFS and the IPFS CID written as a note object to the substrate chain.                     |
|     6. | Receiving a note                            | The UI will enable a user to query a wallet address for a received notes. The interface will enable the user to click on a note and the data will be retrieved from IPFS, displaying the message onscreen.                                                                   |
|     6. | Write tests                                 | Tests will need to be written for each view.                                                                                                                                                                                                                                 |

### Milestone 2 — Site-Pallet & React front end for Web3 Sites

- **Estimated Duration:** 3 weeks
- **FTE:** 2
- **Costs:** 9,000 DAI

| Number | Deliverable                           | Specification                                                                                                                                                                                                                                                                         |
| -----: | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                               | Apache 2.0 / MIT / Unlicense                                                                                                                                                                                                                                                          |
|    0b. | Documentation                         | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) create a site and modify the web3.0 sites.                                                                                                                      |
|    0c. | Article/Tutorial                      | We will publish an article/tutorial for non-technical users that explains what the Dapp is and how to use it.                                                                                                                                                                         |
|    0d. | Testing Guide                         | Core pallet functions will be fully covered by unit tests to ensure functionality and robustness. ReactUI testing will be covered by selenium tests. In the guide, we will describe how to run these tests.                                                                           |
|        |
|     1. | site-pallet                           | The Site-pallet will store a decentralized storage location such as a IPFS CID hash and a Site name as a String. The pallet will provide interfaces for create(), listing(), transfer(), burn().                                                                                      |
|     2. | React frontend                        | This frontend will provide a UI for managing web3 sites. This will expand upon the existing ReactUI which enables wallet-to-wallet communication. Users will be able to create sites, upload website data to IPFS, modify IPFS hashes in the Site-pallet and transfer site ownership. |
|     3. | Site Search                           | The UI will enable users to search for existing site names by reading the `site-pallet` name String data structure.                                                                                                                                                                   |
|     4. | Connect to substrate with Polkadot.js | Users should easily be able to connect the frontend using polkadot.js to manage their web3 sites.                                                                                                                                                                                     |
|     5. | write tests                           | Tests will need to be written for each view.                                                                                                                                                                                                                                          |

### Milestone 3 — Name-Service-Pallet, React javascript library & Riot/Matrix verification bot

- **Estimated Duration:** 3 weeks
- **FTE:** 1.5
- **Costs:** 6,000 DAI

| Number | Deliverable                                        | Specification                                                                                                                                                                                                                                                                                                                                                 |
| -----: | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                                            | Apache 2.0 / MIT / Unlicense                                                                                                                                                                                                                                                                                                                                  |
|    0b. | Documentation                                      | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works.                                                                                  |
|    0c. | Testing Guide                                      | Core pallet functions will be fully covered by unit tests to ensure functionality and robustness. ReactUI testing will be covered by selenium tests. In the guide, we will describe how to run these tests.                                                                                                                                                   |
|     1. | name-service-pallet                                | This pallet will provide users the ability link a name to a wallet.                                                                                                                                                                                                                                                                                           |
|     2. | Riot/Matrix bot                                    | A Riot bot will be created that allows users to sign a data string with their Substrate based wallet. The bot will then place a judgement and verify the Riot user has control of the wallet.                                                                                                                                                                 |
|     3. | React Name View                                    | Within the existing ReactUI the users will be able to set(), clear(), update() the `name-service-pallet` for their individual substrate wallet.                                                                                                                                                                                                               |
|     4. | React `name-service-pallet` authentication library | A javascript library will be created which will provide helper methods to developers to enable easy integration with a React application and substrate chain running the `name-service-pallet`. This library will help enable federated login within existing React frontend by supporting Polkadot.js browser extension and YibanChen `name-service-pallet`. |
|     5. | React Name authentication integration tutorials    | A tutorial blog writeup and video will be created explaining to developers how they can use leverage verified accounts for federated login within their existing React frontend by supporting Polkadot.js browser extension and YibanChen `name-service-pallet`.                                                                                              |
|     6. | Write tests                                        | Tests will need to be written for each the pallet and the bot service.                                                                                                                                                                                                                                                                                        |

## Future Plans

YibanChen plans operate on both the Kusama and Polkadot chains and will be the first application of it's kind that delivers decentralized communication, generalized name login service, and web3 website hosting, all built on Substrate.

However, Development of the YibanChen won't end after all milestones are met. We plan to add features such as expanding `Name Service` feature to support more blockchain storage objects, such as other decentralized protocols and substrate chain discovery. We are looking at integrating with more decentralized storage protocols such as DatProtocol. Prototyping and testing additional user interfaces including more p2p driven interfaces such as removing IPFS gateways with a combination of IPFS.js and offchain::ipfs. Also supporting smolDot in the front-end for substrate communication. We also plan on building a community around `Voting` to help try and enable better forms of democracy and governance on and off chain.

There are lot possibilities where this project YibanChen can go and we are very excited to get started on it and make a difference within the Web3 ecosystem.

## Additional Information :heavy_plus_sign:

Currently we have no funding for the YibanChen system, we feel getting the general web3 use-cases off the ground will kick-start the substrate ecosystem in a big way. We are excited to be part of the Substrate and Polkadot community and we will continue to contribute as much as we can. Thank you for your time and thank you for considering us for the Web3 Open Grant.
