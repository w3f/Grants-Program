# Kuma Wallet - Phase 2

- **Team Name:** Blockcoders
- **Payment Address:** Ethereum (USDT/USDC/DAI) 0x1Ff29471bf02399A5B6Bd096A13d43982dFac357
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This is a follow-up grant for the previous successfully delivered [Cross-chain Wallet - XCW grant](https://github.com/w3f/Grants-Program/blob/master/applications/cross-chain-wallet.md) under [W3F's General Grants Program](https://github.com/w3f/General-Grants-Program/).

Kuma Wallet is a cross-chain wallet designed to revolutionize the way users interact with EVM and WASM blockchain networks. Built with user-friendliness and security in mind, Kuma Wallet aims to streamline cross-chain asset management and provide a unified, intuitive interface for asset transfers, dApp interactions, and much more.

### Why Kuma Wallet?

In today's fragmented blockchain landscape, managing assets across multiple chains is cumbersome and often requires multiple wallets or interfaces. Kuma Wallet addresses this challenge head-on, providing seamless, secure, and efficient asset management across diverse blockchain ecosystems.

### How is Kuma Wallet different from existing projects?

Kuma Wallet aims to differentiate itself from existing projects like Talisman, Nova and Primis by providing support for both EVM and WASM accounts and the ability to transfer assets between them. This feature is not currently available in any other wallet in the ecosystem. Instead of adding this feature to an existing wallet or forking an existing repository, we want to build a new wallet with a user-friendly interface that makes it easy for users to understand and use.

### Current Features of Kuma Wallet

* Seamless Asset Transfer: Utilizes XCM technology for secure and quick transfers between EVM and WASM chains.
* Wide Network Support: Compatible with Astar, Acala, Shiden, Moonriver, Polkadot, Kusama, Binance Smart Chain, Ethereum, and Polygon.
* Intuitive UI: Inspired by Astar UI, Kuma Wallet offers an easy-to-navigate and user-friendly interface.
* Comprehensive Functionality: Covers more than 90% of primary functionalities needed for cross-chain asset management.
* Security: Ensures private keys are stored locally on users’ devices, safeguarding against unauthorized access.
* Advanced Encryption: Utilizes PBKDF2 iteration and AES-GCM mode for additional layers of security.
* Parachain Availability Indicator: A unique feature that informs users of the operational status of different parachains before initiating a transfer.
* Transparent Transactions: Detailed transaction history with links to blockchain explorers.  Active Telegram and Discord channels for user support and feedback.

### Current Metrics

Over the recent weeks, we have maintained our growth and increase it by **9.8%** compared to the previous period. This growth is a result of our continued efforts to improve the wallet's user experience and add new features. We have also seen a significant increase in the number of users, which has helped us maintain our growth rate.

Below, we present a graph that encapsulates the weekly user count over the last month:

![Weekly users vs  Date](https://github.com/w3f/Grants-Program/assets/3802516/5953ba54-a49a-4c1b-8550-72934dfcebfb)

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  - This wallet is a perfect match for the ecosystem as it provides a solution to the problem of having to use multiple wallets to interact with different types of accounts such as EVM and WASM.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - The target audience is anyone that interacts with the ecosystem using a wallet. From developers to final users.
- What need(s) does your project meet?
  - It provides a solution that today it's resolved by using multiple wallets/applications.  
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - There aren't any other wallets that support both EVM and WASM accounts and the ability to send assets between them.
  
## Team :busts_in_silhouette:

### Team members

- Jose Ramirez
- Fernando Sirni
- Ruben Gutierrez

### Contact

- **Contact Name:** Jose Ramirez
- **Contact Email:** jose@blockcoders.io
- **Website:** http://blockcoders.io/

### Legal Structure

- **Registered Address:** Bouchard 705, Buenos Aires, Argentina
- **Registered Legal Entity:** Blockcoders

### Team's experience

We are Blockcoders, a self-managed team building on the blockchain-based in LATAM. We enjoy working on decentralized protocols and blockchains. We put a lot of effort into developing compelling user experiences that will help your project appeal to a constantly expanding market.

Why Blockcoders? We are a team of engineers with over ten years of experience building world-class applications. We assist engineering teams in scaling fast by focusing on developer tooling, SDKs, and libraries. 

We have experience with many different blockchains, including OL, Harmony, Aptos, Polkadot, and NEAR. With live projects focused on partnering with you to create thoughtful, innovative applications that can support its community's entire lifecycle from awareness through post-purchase behaviors.

### Team Code Repos

#### Open Source Projects
- https://github.com/blockcoders/nestjs-ethers
- https://github.com/blockcoders/nestjs-websocket
- https://github.com/blockcoders/nestjs-library-template

#### Web3 Foundation
- https://github.com/blockcoders/ink-substrate-explorer-api
- https://github.com/blockcoders/ink-substrate-explorer-frontend
- https://github.com/blockcoders/xcm-sdk
- https://github.com/kumawallet/extension

#### Polkadot Hackathon (Smart contracts - NFTs - Moonbeam)
- https://github.com/blockcoders/dotocracy-frontend
- https://github.com/blockcoders/dotocracy-contracts

#### Athena DAO
- https://github.com/athenafarm
- https://github.com/athenafarm/athena-vault-contracts
- https://github.com/athenafarm/athena-sdk
- https://github.com/athenafarm/athena-vault-frontend

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/blockcoders
- https://github.com/0xslipk
- https://github.com/fersirni
- https://github.com/RubenGutierrezC

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/jarcodallo/
- https://www.linkedin.com/in/fernando-sirni-1931ba122/
- https://www.linkedin.com/in/rubengutierrezc/

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 month
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** 18,000 USD


### Milestone 1 - SubQuery Integration

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 6,000 USD

Kuma Wallet is currently partnered with SubQuery Network, a cutting-edge data indexing framework that specializes in flexible, reliable, and decentralized APIs tailored for web3 projects. SubQuery's platform offers fast data synchronization, indexing optimizations, and supports over 100 chains, making it a truly multi-chain solution.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to configure the environment and send xcm messages. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 1. | SubQuery's GraphQL interface | This will ensure smooth interaction with multiple chains for our users and a more stable application overall. |
| 2. | Deploy the Kuma SubQuery on [OnFinality](https://onfinality.io/) | The first time we deploy on SubQuery we need to sync around ~18M blocks from Polkadot and ~4.5M blocks from Acala, Astar and Moonbeam. |

### Milestone 2 - On-Ramp

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 6,000 USD

We are going to integrating [Transak](https://transak.com/), a globally recognized financial services gateway. Initially, the supported tokens for the on/off ramp functionality will include Polkadot (DOT), Kusama (KSM), Astar (ASTR), Moonriver (MOVR), and Moonbeam (GLMR). Furthermore, our collaboration with Transak extends beyond these offerings, as we are working together to include additional Parachains in the near future. 

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to send all kind of xcm messages. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 1. | Supported Polkadot ecosystem tokens for the on/off ramp | Enable users to buy and sell Polkadot (DOT), Kusama (KSM), Astar (ASTR), Moonriver (MOVR), and Moonbeam (GLMR). |

### Milestone 3 - Swapping Cross-Chain

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 6,000 USD

Milestone number 3 will in a seamless experience to users who wish to transfer and swap assets across multiple blockchains, we're introducing the Swapping Cross-Chain feature. Our unique approach involves utilizing the Ink! smart contract language and the [StealthEX](https://stealthex.io/) and [HydraDX Omnipool](https://hydradx.io/).

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to send all kind of xcm messages. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 1. | Integrate StealthEX Trading API | Provide user with opportunity to exchange assets in polkadot ecosystem with StealthEX platform API. |
| 2. | Integrate HydraDX | Users will initiate a cross-chain transfer with a simple and easy-to-understand UI, before confirming the transfer, users will be shown how much of their DOT will be converted to destination native token for transaction fees. Post-transfer, users can easily manage their DOT in the destination chain or any other chain they transferred to, directly within the Kuma Wallet. |

## Future Plans

- Incorporating Trezor hardware wallet support 
- Add support for other Swapping Cross-Chain platform like Maganta.

## Additional Information :heavy_plus_sign:

Updates to the Kuma Wallet extension on the Google Chrome Web Store and Firefox Add-ons marketplace will be rolled out on a monthly basis rather than every four weeks. This allows us more time for thorough testing and quality assurance before each release.
