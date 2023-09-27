# Choko Wallet

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

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

- Another issue with all wallets is the lacking of good encryption/decryption features with the user's private key. (i.e. <https://github.com/polkadot-js/common/pull/1331>) This feature is critical when Web3 is more privacy centric. It has been hard to be built because of different elliptic curve and encryption schema. We will make attempt to first adopt to the schema used by our own SkyeKiwi Network and try to generize it later.

### Project Details

Technology Stack: (Almost) static Web App built with React/Redux and PolkadotJs.

A PoC on the redirecting mechnisim is available [here](https://github.com/RoyTimes/wallet-sandbox-demo).

- Setup on Another Device via QR: generate a QR code that displays a *plaintext* of the seed phrase and scan it on another device. Similar to Metamask.

- Email Recovery/Create Via Email: have a centralized service to send an email to the user with a link that contains *plaintext* of the seed phrase to recover the seed phrase (i.e. Email saying "Please keep this email for recovery of your wallet. Click link: <https://choko.app/recovery?11111aaaaaaa>...... "). A banner with warning should be presented when the user has more than $50 in the wallet.  

- "Linkdrop": a feature inspired by other ecosystems. A Dapp developer might initialize a Linkdrop vault of some tokens as gas fee for their seed users. (i.e. Having 10 DOT for the first 100 signup users). A pallet might be required, so we will build a pallet on SkyeKiwi Network first to test things out. The wallet will provide the developer with a simple interface to generate a linkdrop vault and generate a linkdrop link. (i.e. <https://choko.app/claim?vault=1&authorization=0x8dad7777>..."). The developer can distribute the link drop link to users. When a user click the link, it will guide the user to create a new seed phrase and then have the gas fee token deposited to the wallet.

- Encryption/Decryption: A few solutions avaliable: 1. allow encryption/decryption on Sr25519 key agreement. Drawback would be that the composed message would be hard to process outside the wallet. 2. Find a method to calculate a Curve25519 public key from a Sr25519 public key. We are not hardcore cryptographer and has no intention of implementing this ourselves. Looking for a more expertised answer to whether this is possible or if there is an implementation to it. Such conversion would greatly increase compatbility with popular Curve25519 based encryption softwares. 3. Worst case senario: ask users to register a Curve25519 public key on account creation. This is horrible but allow the encryption schema to be further compatible with other ECs like secp256k1. Would love to have a discussion on this.

- Request Handling: there will be two types of requests - local requests that should be resolved inside the Dapps and remote requests that need to be redirected to the wallet web app. For usual wallets, this is somewhat implicitly assumed (like Web3js and Metamask). However, for a website based wallets, these two types of requests need to be dramatically different to be handled to prevent constant website redirecting. Moreover, in lack of proper RPC between DApp and browser extensions, requests and response payloads are encoded in the URL with plaintext. Therefore, in response to all these differences, we will create a set of bytes precises encoding schema and segregated request handling strategies. The wallet app will only handle requests that require the usage of user's private keys and do no load the private key unless a password is authenticated. Check out PoC implementations here [Link](https://github.com/choko-wallet/sdk/blob/master/packages/request-handler/src/signMessage.ts).

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
- **Website:** <https://skye.kiwi>

### Legal Structure

None

### Team's experience

We have applied and deliverd all milestones of the [SkyeKiwi Protocol](https://github.com/w3f/Grants-Program/pull/553) and built the SkyeKiwi Network based on SkyeKiwi Protocol as a privacy layer for Web3 featuring interoprabl, multi-shard, multi-vm private smart contract execution as a part of the Substrate Builder Program. We have a track record of engineering complicated system with high quality. The Choko Wallet is a critical component for the adoption of the SkyeKiwi Network (and the SkyeKiwi Protocol), from the encryption/decryption functionalities of the network. More discussed in future plan section.

### Team Code Repos

- <https://github.com/skyekiwi/skyekiwi-network> - Main repo for the SkyeKiwi Network

- <https://github.com/skyekiwi/skyekiwi-protocol> - TypeScript implementation of the SkyeKiwi Protocol

- <https://github.com/skyekiwi/kiwi-contract> - Smart contract toolkit for submitting smart contract on SkyeKiwi Network. [Tutorial](https://docs.skye.kiwi/docs/quick-start/deploy)

## Development Status :open_book:

The project is mostly front-end work, except for the mechism for cross-browser tab communication from the Dapp and wallet. Therefore, so far, we have only created a simple sandbox to demostrate the viability of such communication [here](https://github.com/RoyTimes/wallet-sandbox-demo).

Moreover, the [Near Wallet](https://github.com/near/near-wallet) (an Apache2.0 or MIT licensed open source software) seem to be a good base of development for Choko Wallet. We will fork the repo and do a complete overhaul to better fit the needs of the Polkadot ecosystem.

> Update on August 2
> on Near Wallet: after a month long dig into the Near Wallet codebase, we recognize the following issues that prevent us to build upon the Near Wallet but instead, start a new codebase of the Web App from scratch:
>
> 1. Chaotic state management: the Near Wallet has very tangled state management for requests and responese. As it will be more efficient to build the underlying redux dataflow from scratch.
> 2. Different account system and different cryptographics: the NEAR blockchain uses Ed25519 for pretty much everything, while on Substrate, Sr25519 is used in default but there can be all kinds of cryptographic used in the Polkadot ecosystem. (i.e. Moonbeam). Moreover, NEAR is based on a human-readable fake AccountId that links to several cryptographic "keys" for accounts. These are factors that contribute to point 1 of why the Near wallet codebase has such a complicated Redux dataflow.
> 3. Loose Encoding on URL: as we stated above on "Requst Handling", we will build a byte percise(and efficient) version of the encoding to be sent between Dapp and Wallet as Substrate extrinsics can be very long on cross-chain communicattions.
> 4. Decentralziation: lots of functionalities of Near wallet relies on a closed-source centralied helper service. We don't want that.
> 5. Extensibility: the network RPC is hardcoded into NEAR. Choko Wallets need to support a wide range of networks, while we will allow networks to customize their own request handling mechnisim, while have a set of functionalities by default. Such design will require weeks to peel off wallet logics away from the near codebase.
> 6. Security: the near wallet does not require a user input password to safeguard the seed phrase. This can be considered "kind of" secure because of the AccountId system of Near(i.e. Keys are ephermeral, while a human readable AccountId like "alex.near" is presistent). However, this is not applicable to the Polkadot ecosystem. To change so, we would also have to completely peel away the private key management logic from the near codebase.
> 7. Frontend Framework: we decided to go with Next+Tailwind+Redux+TypeScript combo with good lint/test/build pipeline for better maintainablity. And avoid the messy codebase as the Near Wallet.

[LINK `@choko-wallet/core`](https://github.com/choko-wallet/sdk/tree/master/packages/core/src) for all primitives to the wallet like cross-chain `DAppDescriptor`, cross-chain `UserAccount` that can be locked and typed with different cryptographic types etc.

[LINK `@choko-wallet/known-networks`](https://github.com/choko-wallet/sdk/tree/master/packages/known-networks/src) for a list of known-networks from `@polkadot/apps`;

[LINK `@choko-wallet/request-handler`](https://github.com/choko-wallet/sdk/tree/master/packages/request-handler/src) for a extendable request handling that are byte precise and efficient on payload encoding;

[LINK `@choko-wallet/sdk`](https://github.com/choko-wallet/sdk/tree/master/packages/sdk) for Dapps to integrate for account management in browsers and handle both local and remote requests;

`@choko-wallet/sdk-react` (To be made) to inject the SDK to React components for lifecycle management etc.

## Development Roadmap :nut_and_bolt:

Mostly described above in the Overview section.

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  5 FTE
- **Total Costs:** $36,000

### Milestone 1

- **Estimated duration:** 1.5 months
- **FTE:**  6 FTE
- **Costs:** 36,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **live demo**. Documentation to SDK. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | A Dockerfile won't be much useful for a static web app. Therefore, we are not going to provide one for this milestone. |
| 0e. | Article | We will publish an **article** that explains the concept of the Choko Wallet. More general-public-oriented version of what described in this application. |
| 1. | Reactjs WebApp | import/create account (create 12 words seed phrase, encrypt with user-input password and store in browser localStorage, encrypted with cryptographic primitives from `@skyekiwi/crypto`,  make sure the user has writen down the seed by testing a randomly selected word i.e. ask user to input and validate word #7; import a seed phrase and encrypt with user-input password)<br/><br/> sign message/transaction<br/><br/> a almost blank dashboard but allow switching between networks (support all networks on `@choko-wallet/known-networks`) and connect to a customized network provider <br/><br/> setup-on-another-device(instruction and QR code generator), import from clear seed(a route to receive a *clear* encoded seed pharse via URL and import into wallet), create wallet page(option to send a URL with a *clear* seed phrase via email & warning banner when a wallet that had exposed a *clear* seed phrase has more than $50 on the selected network) |
| 2. | A Sample DApp | A sample DApp created with `@choko-wallet/sdk` to test with common functionalities. |
| 3. | SDK | For `@choko-wallet/known-networks` will include a few popular Polkadot chains, `@choko-wallet/request-handler` will implements handler for "request for user public identity", "request to sign transaction", "request to sign message", "request to decrypt/encrypt message" (Note: encryption/decryption won't be a solution yet, see discussion above for details). |


## Future Plans

- Allow Web2 login info to be mapped to Web3 address. This will be some complicated and hard tech to implement to preserve user privacy. Require deeper integration of the SkyeKiwi Network for privacy preserving smart contract calls.

- NFT integration - Integrate wallet support for popular NFT protocols in the Polkadot ecosystem and teleporting of NFT assets.

- Allow connection to Ethereum. Research and implement ways to send Web3Js style transactions via the browser wallet.

- Ledger support - for serious crypto users, while preserving the easy to use nature of the wallet.

- Biometric support - encrypt the seed phrases with FaceId/TouchId etc with WebAuthn standard.

- Port as mobile Apps - biometrics authentication will sure be there and security will be greatly enhanced.

- More face-to-face events features - i.e. genrate printable QR codes for Linkdrops to be distributed at event venues; location based events check-ins. Scan and validate tickets (as NFTs) at event venues.

- Integrate social-recovery-pallet for an easy recovery process.
