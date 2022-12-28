# NFT Collectibles Wallet

* **Payment Address (DAI):** 0x16D7A415040D52F2427C2b921dfC31829C0d17fc
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/341#issuecomment-994701023)

## Project Overview :page_facing_up:

The `NFT Collectibles Wallet` is a multi-chain non-custodial mobile wallet which will allow users to claim, store and manage an unlimited number of NFTs from any Substrate based blockchain. This project will consist of 2 major parts: the mobile wallet for users and the javascript sdk for front-end developers to create NFT management UI.

<u>**Users:**</u> By scanning QR codes, users will be able to claim NFTs into their wallet. These NFTs can be consumed (burned), listed for sale or sent to others. Users will also have the ability to mint NFTs from within the mobile app. The mobile app will be downloadable from Apple's App Store and Google's Play Store.

<u>**Front-end developers:**</u> By using the `nft-wallet-javascript-sdk`, javascript developers can create a UI for creating new NFTs. This javascript sdk will be able to connect to any substrate node via Polkadot.js.

### Overview

The reason we are creating the NFT Collectibles Wallet is to allow users of GamePower Network (<https://www.gamepower.network>) to claim NFTs from games published on the platform. We could have made the wallet closed sourced such as other projects (Enjin Wallet), but we decided since we are the new kids on the block, it is better for us to contribute to the Substrate/Polkadot/Kusama community. That is what excites us so much about this project.

Our team is very passionate about gaming and NFTs. We believe the use case for NFTs in gaming is one of the most valuable in crypto right now. The problem we see with NFTs is that explaining NFTs to the general consumer and giving them a streamlined and friendly place to use those NFTs is lacking. We want to solve this with the NFT Collectibles Wallet.

### Project Details

* **Mobile Wallet Details:**

The mobile wallet will be built using `React Native`. We feel this will allow us to use a coding language (javascript) we've used for years and build performant mobile applications. Using React Native also allows us to code once and deploy on multiple mobile platforms.

Mobile Stack:
* React Native
* Polkadot.js
* react-qr-scanner

A mockup of our mobile wallet UI. This mockup outlines the wallet creation, QR scanning and collectibles viewer.
![img](https://github.com/GamePowerNetwork/nft-collectibles-wallet/raw/open-grant/images/Mobile_App_Wireframe.png)

* **Substrate Pallet Details:**

The `nft-wallet-pallet` will use ORML (open runtime modules library: <https://github.com/open-web3-stack/open-runtime-module-library>) which will provide us with some underlying NFT code. The pallet will also talk to the balances pallet to handle any minting and consuming which is needed since each NFT is minted with a type of currency native to the blockchain it is on.

Substrate Stack:
* Substrate
* ORML

These methods will serve as an interface for the NFT Wallet to communicate with any substrate runtime. `nft-wallet-pallet` expects ORML's nft pallet to be a part of the runtime since it will be used to handle all NFT related functions.

We will expose a SEND and BURN callback so that the runtime can do any domain specific logic when sending or burning an NFT.

```rust
fn send(origin, asset_id: u64, recipient: AccountId) -> Result;
// burn the NFT with a short reason used by dapps
fn burn(origin, asset_id: u64, reason: Vec<u8>) -> Result;
// list an NFT for sale
fn list(origin, asset_id: u64, price: T::Balance) -> Result;
// buy a listed NFT
fn buy(origin, asset_id: u64, list_price: T::Balance) -> Result;
// add an emote to the NFT (for social)
fn emote(origin, asset_id: u64, emote: Vec<u8>) -> Result;
// allows a user to claim a minted NFT
fn claim(origin, asset_id: u64) -> Result;
```

* **Javascript SDK Details:**

The front-end UI will be built using React + Polkadot.js. This will be a straight-forward and clean UI to allow the creation and management of NFTs. This UI is not a front-end for consumers but for developers to create NFTs. The underlying SDK for the front-end can be used to create any type of custom NFT management UI.

Web Stack:
* React
* Polkadot.js

Mockup of the admin frontend.
![img](https://github.com/GamePowerNetwork/nft-collectibles-wallet/raw/open-grant/images/Admin.png)

### Ecosystem Fit

The NFT Collectibles Wallet provides the ecosystem with a streamlined and standard way to create, manage and exchange NFTs. By allowing the wallet to connect to any substrate based chain, users can freely move around the ecosystem without downloading multiple wallets for each chain, while still having a wallet that focuses specifically on collectibles.

The NFT Wallet uses the RMRK NFT standard (<https://rmrk.app/#standards>). However the NFT Wallet project can potentially support other standards such as the new Enjin initiative on the Polkadot ecosystem.

Our target audience is 3-fold: The everyday consumer that wants to manage their NFTs, The Substrate blockchain developer that wants to connect to the NFT Collectibles Wallet to offer NFTs on their blockchain and finally Dapp developers who want to offer their users NFTs through QR codes.

* ***Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?***

The most similar project to the NFT Collectibles Wallet is the Enjin Wallet. However, the Enjin wallet is closed sourced and multiple blockchains cannot directly integrate into it in a decentralized way. This project solves that issue by being open sourced and allowing anyone that is a part of the ecosystem to contribute and enhance the project. Also by removing the wallet's centralization, any Substrate blockchain can make use of it.

## Team :busts_in_silhouette:

### Team members

* Michael Huntington: Senior Software Engineer.
* Michael Rochester: Project Manager and Software Project Implementation 

### Contact

* **Contact Name:** Micheal Huntington
* **Contact Email:** dev@gamepower.network
* **Website:** <https://gamepower.network>

### Legal Structure

* **Registered Address:** None
* **Registered Legal Entity:** None

### Team's experience

`Michael Huntington` has worked on various projects through enterprise and personal software creations. Mike has published games for IOS and Android launched on the Apple AppStore and Google Play Store. He has worked as a Software Engineer for multiple fortune 500 companies such as AT&T, Turner Broadcasting, and ADP. Mike brings a wealth of knowledge to our team and is a driving force behind our concepts.

`Michael Rochester` has worked with various software companies as a project manager and has implemented a wide range of clients within the municipal software niche and utility billing genre. His experience includes consumer account management applications launched on Google Play and Apple app stores. He brings 7 years of project management experience and is a guiding force for this project.

### Team Code Repos

* <https://github.com/GamePowerNetwork>
* <https://github.com/MikeHuntington>

### Team LinkedIn Profiles

* <https://www.linkedin.com/in/Mike-Huntington>
* <https://www.linkedin.com/in/Michael-Rochester>

## Development Status :open_book:

Currently, work for the NFT Collectibles Wallet has not started, but the team has started initial work on GamePower Network (<https://www.gamepower.network>) which will be the first project to implement the NFT Collectibles Wallet. The wallet was actually conceived because of the GamePower project. The need for the NFT wallet was very important and we decided to open the project up to anyone in the ecosystem that has the same need.

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 7 weeks
* **Full-Time Equivalent (FTE):**  2.1 FTE
* **Total Costs:** 15,000 USD

### Milestone 1 — Implement NFT Wallet Pallet

* **Estimated Duration:** 4 weeks
* **FTE:**  1
* **Costs:** 0 DAI

| Number | Deliverable             | Specification |
| -----: | ----------------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | nft-wallet-pallet | We will create a Substrate module that will allow an NFT to be (consumed, listed on market, traded, purchased on market). pallet methods are listed in the diagram above. |  
| 2. | Substrate Test Chain | users can interact with the nft-wallet-pallet module through a simple substrate barebones setup.  |

### Milestone 2 — Build NFT Collectibles Wallet Mobile App

* **Estimated Duration:** 4 weeks
* **FTE:**  1
* **Costs:** 10,000 DAI

| Number | Deliverable             | Specification |
| -----: | ----------------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | build app structure | We will have the core structure of the application in place. |  
| 2. | implement wallet creation view | This will be the landing screen of the app where users can create or restore their NFT Collectibles Wallet.  |
| 3. | implement the collectibles view | This view is where users can see a list of all their collectibles. |
| 4. | implement QR scanner view | This view is where users can scan a QR code a see information about the NFT such as (the chain it belongs to and other metadata attached to the NFT). |
| 5. | implement QR scanner logic | When a QR code is scanned we will connect to the blockchain it belongs to and fetch the NFTs metadata. |
| 6. | implement NFT claim screen | After scanning a QR code the user will be taken to a screen to confirm if they want to claim the NFT. From here a transaction is made for the claim. |
| 7. | write tests | Tests will need to be written for each view. |

### Milestone 3 — Build Javascript SDK and Admin Frontend

* **Estimated Duration:** 3 weeks
* **FTE:**  0.5
* **Costs:** 5,000 DAI

| Number | Deliverable             | Specification |
| -----: | ----------------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article/Tutorial | We will publish an article/tutorial for non-technical users that explains what the NFT Collectibles wallet is and how to use it.
| 1. | react frontend | This frontend will provide a UI for all the CRUD methods needed for managing NFTs. Users should be able to mint collections, mint NFTs and change issuers. |  
| 2. | Connect to IPFS | All metadata entered for minting collections and NFTs should be stored on IPFS.  |  
| 3. | Connect to substrate with Polkadot.js | Users should easily be able to connect the Admin frontend using polkadot.js.  |
| 4. | write tests | Tests will need to be written for each view. |

## Future Plans

This NFT Collectibles Wallet will be used as part of the GamePower Network. GamePower will operate on the Kusama and Polkadot platform and will be the first application of it's kind that delivers decentralized game publishing. GamePower will use the NFT Collectibles Wallet to allow users of GamePower to store NFTs purchased or earned through GamePower either in a game or through the GamePower NFT marketplace.

However, Development of the NFT Collectibles Wallet won't end after all milestones are met. We plan to add features such as Minting NFTs from within the application by users, A way for the app to automatically discover blockchains using NFTs on its own (maybe through some type of registry). There are endless possibilities where this wallet can go and we are very excited to get started on it!

## Additional Information :heavy_plus_sign:

Currently we have no funding for this project or GamePower Network, we feel getting the NFT Collectibles Wallet off the ground will kick-start our GamePower Network development in a big way. We are excited to be part of the Substrate and Polkadot community and we will continue to contribute as much as we can. Thank you for your time and thank you for considering us for the Web3 Open Grant.
