# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Choko Wallet
- **Team Name:** SkyeKiwi Team
- **Payment Address:** 0x91029aBEb484a84D99c1C519C7A8A0cDB6B7c878 (USDC Preferred OR DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

Choko Wallet is a user-friendly multi-chain crypto wallet for the Polkadot ecosystem. The Polkadot ecosystem has been known for its complicated nature to interact with. 

### Overview

- Like all crypto wallets, fund privacy and ease of use are usually two sides of a spectreum. Choko Wallet will be more lean towards the "ease of use" side and remain to be (99%) static web app. 

- Unlike most of the crypto wallets, Choko wallet is designed to be website-based which stores user private key encrypted on website localStorage. When DApps request for signature, the Dapp will redirect to the Choko Wallet web app and ask for user approval. Upon finish, the wallet web app will redirect back to the Dapp. 

- The most confusion part of the Polkadot ecosystem for new comers is the amount of blockchains there are. The PolkadotJs App (dotapps.io) allow different teams to assign different theme color to their blockchain that greatly reduce confusion. Wallets in the Polkadot ecosystem should follow the same paradigm. Moreover, we should offload the burden for the end users to choose which blockchain back to Dapp developer so that the user can connect to the desired blockchain endpoint with zero configuration. 

- Another issue with all wallets is the lacking of good encryption/decryption features with the user's private key. (i.e. https://github.com/polkadot-js/common/pull/1331) This feature is critical when Web3 is more privacy centric. It has been hard to be built because of different elliptic curve and encryption schema. We will make attempt to first adopt to the schema used by our own SkyeKiwi Network and try to generize it later. 

### Project Details

Technology Stack: (Almost) static Web App built with React/Redux and PolkadotJs. 

A PoC on the redirecting mechnisim is available [here](https://github.com/RoyTimes/wallet-sandbox-demo). 

- Setup on Another Device via QR: generate a QR code that displays a *plaintext* of the seed phrase and scan it on another device. Similar to Metamask.

- Email Recovery/Create Via Email: have a centralized service to send an email to the user with a link that contains *plaintext* of the seed phrase to recover the seed phrase (i.e. Email saying "Please keep this email for recovery of your wallet. Click link: https://choko.app/recovery?11111aaaaaaa...... "). A banner with warning should be presented when the user has more than $50 in the wallet.  

- "Linkdrop": a feature inspired by other ecosystems. A Dapp developer might initialize a Linkdrop vault of some tokens as gas fee for their seed users. (i.e. Having 10 DOT for the first 100 signup users). A pallet might be required, so we will build a pallet on SkyeKiwi Network first to test things out. The wallet will provide the developer with a simple interface to generate a linkdrop vault and generate a linkdrop link. (i.e. https://choko.app/claim?vault=1&authorization=0x8dad7777..."). The developer can distribute the link drop link to users. When a user click the link, it will guide the user to create a new seed phrase and then have the gas fee token deposited to the wallet.

- Encryption/Decryption: A few solutions avaliable: 1. allow encryption/decryption on Sr25519 key agreement. Drawback would be that the composed message would be hard to process outside the wallet. 2. Find a method to calculate a Curve25519 public key from a Sr25519 public key. We are not hardcore cryptographer and has no intention of implementing this ourselves. Looking for a more expertised answer to whether this is possible or if there is an implementation to it. Such conversion would greatly increase compatbility with popular Curve25519 based encryption softwares. 3. Worst case senario: ask users to register a Curve25519 public key on account creation. This is horrible but allow the encryption schema to be further compatible with other ECs like secp256k1. Would love to have a discussion on this. 

Mockups:
[![jYkTaT.png](https://s1.ax1x.com/2022/07/04/jYkTaT.png)](https://imgtu.com/i/jYkTaT)
[![jYkLRJ.png](https://s1.ax1x.com/2022/07/04/jYkLRJ.png)](https://imgtu.com/i/jYkLRJ)



### Ecosystem Fit

- Choko Wallet provides a simple and intuitive interface for user to interact with blockchains/Dapps in the Polkadot ecosystem. 
- End users who are less-educated about the Polkadot ecosystem or blockchain/crypto in general. 


## Team :busts_in_silhouette:

### Team members

- Song Zhou
- Zoe Sun 
- Fontend Developer team at SkyeKiwi

### Contact

- **Contact Name:** Song Zhou
- **Contact Email:** song.zhou@skye.kiwi
- **Website:** https://skye.kiwi

### Legal Structure

None

### Team's experience

We have applied and deliverd all milestones of the [SkyeKiwi Protocol](https://github.com/w3f/Grants-Program/pull/553) and built the SkyeKiwi Network based on SkyeKiwi Protocol as a privacy layer for Web3 featuring interoprabl, multi-shard, multi-vm private smart contract execution as a part of the Substrate Builder Program. We have a track record of engineering complicated system with high quality. The Choko Wallet is a critical component for the adoption of the SkyeKiwi Network (and the SkyeKiwi Protocol), from the encryption/decryption functionalities of the network. More discussed in future plan section.


### Team Code Repos

- https://github.com/skyekiwi/skyekiwi-network - Main repo for the SkyeKiwi Network 

- https://github.com/skyekiwi/skyekiwi-protocol - TypeScript implementation of the SkyeKiwi Protocol

- https://github.com/skyekiwi/kiwi-contract - Smart contract toolkit for submitting smart contract on SkyeKiwi Network. [Tutorial](https://docs.skye.kiwi/docs/quick-start/deploy)


## Development Status :open_book:

The project is mostly front-end work, except for the mechism for cross-browser tab communication from the Dapp and wallet. Therefore, so far, we have only created a simple sandbox to demostrate the viability of such communication [here](https://github.com/RoyTimes/wallet-sandbox-demo).

Moreover, the [Near Wallet](https://github.com/near/near-wallet) (an Apache2.0 or MIT licensed open source software) seem to be a good base of development for Choko Wallet. We will fork the repo and do a complete overhaul to better fit the needs of the Polkadot ecosystem. 

## Development Roadmap :nut_and_bolt:

Mostly described above in the Overview section. 

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  5 FTE
- **Total Costs:** $86,000

### Milestone 1

- **Estimated duration:** 1.5 months
- **FTE:**  6 FTE
- **Costs:** 36,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **live demo**. Documentation to SDK. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | A Dockerfile won't be much useful for a static web app. Therefore, we are not going to provide one for this milestone. |
| 0e. | Article | We will publish an **article** that explains the concept of the Choko Wallet. More general-public-oriented version of what described in this application. |
| 1. | Reactjs WebApp | Pages: import/create account (create 12 words seed phrase, encrypt with user-input password and store in browser localStorage, make sure the user has writen down the seed by testing a randomly selected word i.e. ask user to input and validate word #7; import a seed phrase and encrypt with user-input password), sign message/transaction, a almost blank dashboard but allow switching between networks (support at least Polkadot, Kusama and SkyeKiwi Network) |
| 2. | Network Adapter | One package in the SDK that establish configuration to connect to networks (i.e. RPC endpoints, color schema, customized types, chain specific grammar candy over PolkadotJs etc.) |
| 3. | Simple SDK | wallet SDK for developers to connect to Choko Wallet from Dapps (connect wallet and request user address, request approve transactions, request approve singatures)  |  
 

### Milestone 2 

- **Estimated Duration:** 1.5 month
- **FTE:**  4 FTE
- **Costs:** 28,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **live demo**. Documentation to SDK.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | A Dockerfile won't be much useful for a static web app. Therefore, we are not going to provide one for this milestone. |
| 0e. | Article | We will publish two **article** that explains 1. Dapp developers, how to get started and why to get started with Choko Wallet 2. How to create LinkDrop and rational behind it. |
| 1. | Reactjs WebApp | Pages: dashboard (display balance, send tokens), setup-on-another-device(instruction and QR code generator), import from clear seed(a route to receive a *clear* encoded seed pharse via URL and import into wallet), create wallet page(option to send a URL with a *clear* seed phrase via email & warning banner when a wallet that had exposed a *clear* seed phrase has more than $50 on the selected network) |
| 2. | Linkdrop Pallet | A substrate pallet that enable anyone to create a linkdrop vault with X number of Y maximum recepients. The developer will create a batch of Y authorization code by `encode( signMessage(vaultId, receipientIndex) )` and distribute the authorization code to seed users. The pallet will then accept a rate limited 0 weight transaction that validate the authorization code and make transfers. |
| 3. | Linkdrop in Web App | Web App interface to create and claim LinkDrops |

### Milestone 3 

- **Estimated Duration:** 1 month
- **FTE:**  5 FTE
- **Costs:** 22,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **live demo**. Documentation to SDK.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | A Dockerfile won't be much useful for a static web app. Therefore, we are not going to provide one for this milestone. |
| 0e. | Article | We will host at least one workshop that walk through the process of integrating an existing Dapp into Choko Wallet. |
| 1. | Reactjs WebApp | Pages: account selector (allow creating or importing multiple accounts and select default account to use), encryption/decryption approval, staking tab on the main dashboard |
| 2. | DeFi Integration | Integrate popular DeFi protocols in the Polkadot ecosystem, and allow some XCM assets teleport. Details to be provided on delivery of Milestone1 or Milestone 2 |
| 3. | Complete SDK | get current user address, request approval to send transaction, request signature, request decryption/encryption, request change network endpoint and more common grammer candy over PolkadotJs (fetch latest `block_number`, fetch user token balances) |  
| 4. | Network Adapter Contribution Standard | a **standard** network adapter for blockchain developers in the Polkadot ecosystem to customize wrapper around PolkadotJs that lower the barrier of development for developers on their ecosystem. (i.e. `teleportAssetsTo` to teleport assets from Parachain A to Parachain B, evm specific cals etc.) |  

## Future Plans

- Allow Web2 login info to be mapped to Web3 address. This will be some complicated and hard tech to implement to preserve user privacy. Require deeper integration of the SkyeKiwi Network for privacy preserving smart contract calls. 

- NFT integration - Integrate wallet support for popular NFT protocols in the Polkadot ecosystem and teleporting of NFT assets. 

- Allow connection to Ethereum. Research and implement ways to send Web3Js style transactions via the browser wallet. 

- Ledger support - for serious crypto users, while preserving the easy to use nature of the wallet. 

- Biometric support - encrypt the seed phrases with FaceId/TouchId etc. Not sure if it is possible for browsers. 

- Port as mobile Apps - biometrics authentication will sure be there and security will be greatly enhanced. 

- More face-to-face events features - i.e. genrate printable QR codes for Linkdrops to be distributed at event venues; location based events check-ins. Scan and validate tickets (as NFTs) at event venues. 

- Integrate social-recovery-pallet for an easy recovery process. 


