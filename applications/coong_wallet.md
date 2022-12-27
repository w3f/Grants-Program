# Coong Wallet

- **Team Name:** Coong Team
- **Payment Address:** 0xdF14fb4c2F189402b510C603e7f52bf416Fd477B (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Wallet is a key factor to blockchain technology & cryptocurrencies, it should be secure, easy to use and for mass adoption it should have a frictionless users onboarding experience.

Polkadot & Kusama ecosystem has seen a few wallet solutions out there with great UI/UX (SubWallet, Nova, Talisman, Enkrypt). On desktop, most of the solutions are browser extension-based wallets with which users need to install an extension in order to interact with dapps and networks. On mobile, most of the browsers do not support extensions, so users would need to install wallet mobile apps and then interact with dapps via Dapp Browser build inside the wallets (SubWallet, Nova). We believe this creates an inconsistent experience for users on desktop & mobile since most of the dapps are website-based thus posing a barrier in onboarding new users to the ecosystem, especially for those who are new to or less-educated about crypto.

As users, we love the website-based wallet experience that the [NEAR wallet](https://wallet.near.org/) brings to the NEAR ecosystem where users can connect to dapps using their favorite browsers while at the same time can also access their wallet smoothly inside the same browser on both desktop & mobile.

With that inspiration, we propose to build Coong, a website-based multi-chain wallet, to bring a similar experience to Polkadot & Kusama ecosystem which we believe will bring huge benefits to both users & the ecosystem.

### Project Details

#### Design Goals
- Compatible with `@polkadot/extension` API
    - Most of the wallets in the ecosystem are now following `@poladot/extension` API which is widely used now in the ecosystem. So being compatible `@polkadot/extension` API will help dapps can easily integrate with Coong within a few steps.
    - The `@polkadot/extension` API allows dapps to call into the wallet to access granted information (connected accounts) as well as asking for permission/approval (request to access accounts, sign transaction, …), dapps can also subscribe to changes happened inside the wallet. Those abilities seems to be impossible with the redirection-based approach that the Near wallet is using.
    - The approach that Coong would take is similar to how dapps interact with extension-based wallets which is via `window.postMessage` API.
        - To access granted information or subscribe to changes from the wallet, dapps will send/receive messages via an iframe loading Coong wallet, the iframe will be injected inside dapps via Coong SDK.
        - To ask for users’ permission/approval, dapps would open a child tab of Coong wallet using `window.open` API, the `window.open` will return a window object of the child tab allowing wallet & dapps to send messages back and forth via `window.postMessage`.
        - We have created a PoC to demonstrate how dapps can interact with a website-based wallet to ask for accounts access & sign dummy data. [Live demo here](https://coong-dapp.netlify.app/)
- Security first
    - We believe a wallet should not only be easy to use but also can keep users’ information safe and secure. Coong is a non-custodial wallet, users’ private keys & seed phrase will be encrypted and stored in `localStorage` of the browsers, and can only be decrypted by users’ wallet password.

#### Account Creation
Coong is a hierarchical deterministic (HD) wallet following the idea of [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki), which only requires users to back up only one seed phrase upon setting up the wallet, new accounts will be created by deriving from the setup seed and an account index number as the derivation path (`//{index}`), `index` number will be started from `0` and increased one by one as new accounts are created. The first account will be created without derivation path, this is to be compatible with the Polkadot{.js} wallet.

Coong also supports import accounts by private keys, but those accounts cannot be recovered by the setup seed phrase, so they will be labeled as `Imported Account`.

#### Integration Process into Dapps
- Developers need to install Coong SDK (`@coong/sdk`) into the dapps and run Coong wallet initialization upon loading dapps to [inject the Coong API](https://github.com/polkadot-js/extension#injection-information).
- After the Coong API is injected, dapps can interact with Coong just like they interact with other extension-based wallets. E.g: calling `window.injectedWeb3['coong'].enable()` to request access to the wallet & users’ accounts.
- `@coong/sdk` will be published on npm registry so developers can easily download & integrate to dapps.

#### Vision
We set a vision for Coong to be an important part of Polkadot/Kusama ecosystem with fully-fledged features like view/send balances, EVM accounts, NFTs, staking, crowdloan, transaction history… We will split the development of Coong into several phases. This application is asking for a grant to support the first development phase.

The first development phase will be focused on the core/common features of the wallet and the SDK with `@polkadot/extension` compatibility to help dapps easily integrate with Coong.

#### Wireframes
_These are simple wireframes serving as guidance for UI development, the final product might look different._

- Welcome screen
![image](https://user-images.githubusercontent.com/6867026/208712735-10bc6957-cb69-489c-9bec-c6eaa14e9b39.png)

- Set up new wallet
![image](https://user-images.githubusercontent.com/6867026/208712848-1c64adc4-bdc2-41cd-9b71-e10ec1a5c579.png)

- Unlock Wallet
![image](https://user-images.githubusercontent.com/6867026/208713009-48d617e3-85eb-4c33-a21d-a86f546bd616.png)

- List accounts
![image](https://user-images.githubusercontent.com/6867026/208713099-5e8a5034-350f-4ae1-8b5e-ab17ee7ad440.png)

- Create account
![image](https://user-images.githubusercontent.com/6867026/208713186-fef5435b-7d49-4786-ba78-69086e3178ad.png)

- Account controls (Forget, Copy address, Show QR Code, Export, Rename, Dapps Access)
![image](https://user-images.githubusercontent.com/6867026/208813964-4a35eecd-7279-47f6-a840-31c3df4982ef.png)

- Sign/Approve Transaction & Message
![image](https://user-images.githubusercontent.com/6867026/208714308-b1b7a9b1-bcb1-4cab-9cf3-07c280e81c71.png)

- Request Wallet Access
![image](https://user-images.githubusercontent.com/6867026/208714373-4c785e2c-b968-46e8-b0c6-69f1321553d1.png)

- Other additional features:
    - Export wallet
    ![image](https://user-images.githubusercontent.com/6867026/208714528-e0998bea-eae9-42d7-894a-3ace1a61229d.png)

    - Import account
    ![image](https://user-images.githubusercontent.com/6867026/208714641-569c17a7-ba27-4fcd-9ac7-0f8257401620.png)

    - Manage Dapps Access
    ![image](https://user-images.githubusercontent.com/6867026/208714802-851123d7-4c97-4056-8740-3ab688e6bcee.png)

    - Settings
    ![image](https://user-images.githubusercontent.com/6867026/208714706-581b34c4-b357-4572-ab15-114ea4388882.png)


#### Technology Stack
- React/Redux
- Material UI

### Ecosystem Fit

Coong is born with the intention to help mitigate the inconsistent wallet experience on desktop & mobile and bring a seamless onboarding new users experience to the Polkadot & Kusama ecosystem.

As discussed above, there’re a few wallet solutions out there in the ecosystem that have great UX/UI but most are extension-based wallet, Coong takes a different approach as to be a website-based wallet.

[Choko wallet](https://github.com/w3f/Grants-Program/blob/master/applications/choko_wallet.md) is also another website-based wallet but there’re a few differences:

- Choko wallet took the redirection-based approach like the [NEAR wallet](https://wallet.near.org/) did while Coong uses the `window.postMessage` API for cross-tab & cross-origin communication like how dapps interact with extension-based wallets.
- Coong is compatible with `@polkadot/extension` API which is widely adopted in the ecosystem, so dapps can integrate with Coong just like how they integrate with extension-based wallets.

## Team :busts_in_silhouette:

### Team members

- Thang X. Vu - Leader / Lead Developer
- Tung Vu - Frontend Developer

### Contact

- **Contact Name:** Thang X. Vu
- **Contact Email:** zthangxv@gmail.com

### Legal Structure

None

### Team's experience

We have more than 7 years of experience in software development for startups & enterprises. Seeing the potential of blockchain technologies, we have spent more than 1 year exposing to blockchains and Polakdot & Kusama ecosystem. We closely worked with SubWallet team in helping to review the source code to [improve performance & stability of the wallet](https://github.com/Koniverse/SubWallet-Extension/issues/232). Thang is a participant of the first [Polkadot DevCamp in May 2022](https://medium.com/polkadot-network/polkadot-devcamp-1489a1f8eef2). We as users also experience the UX problems in Polkadot & Kusama ecosystem. With that, we know where and how to solve these paint points to help bring the ecosystem closer to end-users.

### Team Code Repos

Projects repos will be hosted at https://github.com/CoongCrafts

Team members

- Thang X. Vu - https://github.com/sinzii
- Tung Vu - https://github.com/1cedrus

## Development Status :open_book:

- We’ve been in research the `@polkadot/extension` source code to have a sense of how the wallet is set up & works, and also to better understand the interaction between dapps & extension. Coong will be compatible with `@polkadot/extension` API, so knowing its source code to a certain extent would greatly help the development of Coong.

- We’ve also been working on a PoC to demonstrate the interaction between dapp & wallet.
    - [Live demo](https://coong-dapp.netlify.app/)
    - Source code: [demo-dapp](https://github.com/sinzii/demo-wallet-interaction/tree/main/dapp), [demo-wallet](https://github.com/sinzii/demo-wallet-interaction/tree/main/wallet)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 — Core features & SDK

- **Estimated duration:** 2.5 month
- **FTE:**  1,5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide **inline documentation** of the code, a live demo of the wallet and instruction on how to integrate Coong Wallet into dapps using Coong SDK. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Wallet App / Core features | We'll implement the following features for the wallet app:<br>- Welcome screen: Shows a small introduction about Coong & instruct users to set up the wallet by creating a new one or import from an existing seed phrase.<br>- Unlock wallet: Requires users to enter password to access the wallet<br>- Set up new wallet: Guides users through a screen flow to help setting up their wallet from picking up a wallet password, to back up secret recovery phrase (12 words).<br>- Create account: Creates a new account<br>- List accounts: Lists all of the accounts users have created<br>- Request wallet access: Allows users to approve dapps access to the wallet accounts<br>- Approve transaction: Allows users to sign/approve a transaction  |
| 2. | Coong SDK | We'll implement the SDK to helps [integrate Coong into Dapps](#integration-process-into-dapps) & publish the package to npm registry. |


### Milestone 2 — Additional features & demo dapp

- **Estimated duration:** 2.5 month
- **FTE:**  1,5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a live demo which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article to introduce Coong Wallet, what has been done so far and plans for future development. |
| 1. | Wallet App / Additional features | We'll implement the following features for the wallet app:<br>- Sign message: Allow users to sign a raw message<br/>- Import existing wallet: Set up wallet by using an existing recovery phrase (seed phrase) or scan QR code from the export wallet feature<br>- Forget wallet password / Reset wallet: Allow users to reset the wallet if they forget the password.<br/>- Account Controls (Forget, Copy address, Show QR Code, Export, Rename, Dapps Access)<br/>- Export wallet: Allow users to easily transfer seed phrase & created accounts to other devices via QR code<br/>- Import account from QR Code, Private Key, JSON file<br/>- Manage Dapps Access: Manage & update access to wallet accounts of dapps<br/>- Settings: Dark/light theme mode, Language, Auto-lock timer, Reveal recovery phrase, Change wallet password |
| 2. | Demo Dapp | We'll create a demo dapp that is integrated with Coong wallet to demonstrate dapp-wallet interactions, similar to [connect.subwallet.app](https://connect.subwallet.app/). |


## Future Plans

As mentioned, future plans for Coong wallet are to equip with more features that help users manage assets easier:
- View/send balances, EVM accounts, NFTs, staking, crowdloan, transaction history
- Attach QR Signer, Support hardware wallets

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

Web3 Foundation Website & Medium
