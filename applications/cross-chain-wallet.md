# Cross-chain Wallet - XCW

- **Team Name:** Blockcoders
- **Payment Address:** Ethereum (USDT/USDC/DAI) 0x1Ff29471bf02399A5B6Bd096A13d43982dFac357
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3 

## Project Overview :page_facing_up:

Blockcoders is proud to propose the development of a revolutionary cross-chain wallet, capable of importing and creating both EVM and WASM accounts. This wallet will make it easy for users to manage and transfer tokens between the two chains. Built with the user experience in mind, the wallet will feature the same sleek and intuitive design as Astar UI. The term cross-chain in this case refers to the ability to transfer tokens between parachains for both EVM and WASM.
We plan to give constant support to this wallet and open Telegram and Discord channels to have a better feedback from the users, solve issues and add new functionalities.

### Goals

- Develop a user-friendly wallet that simplifies the management of EVM and WASM accounts in one place.
- Enable seamless and secure asset transfer between users accounts on different chains.
- Provide a safe and intuitive platform for users to sign messages and interact with dApps.
- Enhance transparency and accountability by displaying transaction details and links to scanner/explorer pages.
- Maintain the wallet's decentralization and open-source nature, ensuring its trustworthiness and security.
- Aim to cover more than 90% of the wallet's main functionalities to provide a comprehensive user experience.

### Security

The wallet will implement the Keyring concept, which is the core of the secret storing and account management system in MetaMask. This approach ensures that private keys are stored locally on users' devices using browser built-in storage capabilities such as IndexedDB or WebSQL, making them accessible only to the user. Additionally, we will use encryption techniques similar to MetaMask, such as PBKDF2 iteration and AES-GCM mode, to provide an extra layer of security for the private keys. This wallet will also implement the same feature that Polkadot's extension has, which allows users to see the availability of different parachains before they make a transfer. This feature will provide users with an added layer of security and peace of mind, as they can ensure that their transfer will go through smoothly.

### Specifications

In a first approach, we will be using the following technologies: React, Typescript, Polkadot API and Ethers.js. The supported browsers will be: Chrome and Firefox. The default networks will be: Astar, Shiden, Shibuya (testnet), Moonbeam, Moonriver, Moonbase Alpha (testnet), Polkadot and Kusama. The default tokens will be: ASTR, SDN, SBY, GLMR, MOVR, DEV, DOT and KSM.

### Main functionalities

- Allow users to easily create and import EVM and WASM accounts.
- Provide a clear and intuitive overview of users' balances for both EVM and WASM accounts.
- Enable the transfer of assets between EVM accounts, WASM accounts, and between EVM and WASM accounts.
- Allow users to sign messages and execute calls and transactions on custom smart contracts.
- Provide links to explorer pages to enhance transparency and accountability.
- Give users the flexibility to add custom networks and tokens to the wallet.
- Implement the XCM format to enable cross-chain functionality, making it easy for users to transfer assets between parachains.
- Design the wallet using React and follow the look and feel of Astar UI, with the option to open in full-screen mode.

The cross-chain functionality will be implemented using the XCM format, enabling users to easily transfer assets between EVM and WASM parachains. The XCM implementation will be simplified to provide a seamless user experience. The user interface will be built using React, and the design will be inspired by the look and feel of Astar UI. The extension will have the option to open in full-screen mode for a more immersive experience.


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

#### Near
- https://github.com/blockcoders/near-rpc-providers

#### Polkadot Hackathon (Smart contracts - NFTs - Moonbeam)
- https://github.com/blockcoders/dotocracy-frontend
- https://github.com/blockcoders/dotocracy-contracts

#### Harmony
- https://github.com/blockcoders/harmony-marketplace-sdk

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

- **Total Estimated Duration:** 6 month
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** 64000 USD

### Milestone 1 - Wallet extension

- **Estimated duration:** 2 month
- **FTE:**  3
- **Costs:** 24,000 USD

Create a wallet extension that can be installed on browsers such as Chrome, Firefox, etc. This milestone will include the following features:

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to configure the environment and send xcm messages. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 0d. | Docker | A Dockerfile will be provided that will be able to start the node and run tests for all the functionality delivered within this milestone. |
| 1. | Chrome/Firefox Extension | Develop a browser extension that can be installed on Chrome, Firefox, and other popular browsers. |  
| 2. | EVM/WASM accounts | Implement the ability to create and import EVM and WASM accounts. |
| 3. | Switch between networks | Allow users to switch between networks, such as Astar and Moonbeam, with ease. |
| 4. | Display accounts | Display EVM and WASM accounts in the same place for a clear and intuitive overview. |
| 5. | Balances | Show users their balances for both EVM and WASM accounts. |

### Milestone 2 - Support for WASM and EVM accounts

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 12,000 USD

The main focus on this milestone will be to allow users to transfer assets between their own accounts. This milestone will include the following features:

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to send all kind of xcm messages. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 0d. | Docker | A Dockerfile will be provided that will be able to start the node and run tests for all the functionality delivered within this milestone. |
| 1. | Custom tokens | Enable users to add custom tokens and networks/chains to the wallet. |
| 2. | Mesasges EVM<>WASM | Provide the ability to sign messages for EVM and WASM accounts. |
| 3. | Transfer EVM<>WASM | Allow users to transfer assets between their own EVM and WASM accounts on the same chain. |
| 4. | Transaction history | Show users their transaction history for both EVM and WASM accounts. |
| 5. | Explorer link | Provide links to explorer pages for enhanced transparency and accountability. |

### Milestone 3 - Transfer assets between chains

- **Estimated duration:** 2 month
- **FTE:**  3
- **Costs:** 24,000 USD

Milestone number 3 will focus on the transfer of assets between chains. This milestone will include the following features:

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to send all kind of xcm messages. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 0d. | Docker | A Dockerfile will be provided that will be able to start the node and run tests for all the functionality delivered within this milestone. |
| 1. | XCM/XVM standard for transfers | Implement the XCM/XVM standard to enable the transfer of assets between EVM and WASM accounts on different chains. |
| 2. | Call to custom smart contracts | Provide the ability to call custom smart contracts for both EVM and WASM accounts. |
| 3. | Transactions to custom smart contracts | Enable users to execute transactions on custom smart contracts for both EVM and WASM. |
| 4. | Open Beta | Create an open Beta of the wallet for Moonbeam and Astar users to test it (with both mainnets and testnets available). Telegram and Discord channels will be created for the beta that will be announced on Twitter. |

### Milestone 4 - Improve UX/UI

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 4,000 USD

The last milestone will focus on improving the UX/UI of the wallet. This milestone will include the following features:

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to send all kind of xcm messages. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 0d. | Docker | A Dockerfile will be provided that will be able to start the node and run tests for all the functionality delivered within this milestone. |
| 0e. | Article | We will post an article on Twitter and Reddit for both english and spanish speakers communities.
| 1. | Polish UX experience | Enhance wallet design and user experience. As the previous milestones will focus on resolving the features from a technical perspective, but not in the "best looking" or "easiest" way, this milestone will be focused on ensuring that the features are easy to use and the user experience is smooth. All suggestions on the Telegram and Discord channels created for the Beta will be considered here to improve UX/UI. |
| 2. | Landing page | Develop a landing page and documentation for the wallet. |
| 3. | Video Tutorial | Create a video tutorial to help users learn how to use the wallet. |
| 4. | End to End Testing | Test the wallet on different browsers and devices to ensure compatibility and stability. |
| 5. | QR code | Add a QR code feature to display the address of users accounts. |

## Maintaining the wallet

Once the wallet is released, we will continue to maintain it for at least 2 years. This will include:

- Bug fixes
- Improvements to the UX/UI
- Support for new features

#### User Interface

The wallet interface will be based on this [mock-up](https://www.figma.com/file/EawnVPOMgeTLUHaMfUNaGw/Wallet-XCM?node-id=0%3A1):

![XCM Wallet](https://cdn.discordapp.com/attachments/892735396847419452/1062025103300362280/Wallet-presentation.png)

## Future Plans

- Add support for popular hardware wallets, such as Ledger and Trezor, to provide users with additional security and flexibility
- Add support to move assets between Substrate-based blockchains and other EVM blockchains. This may be done using a bridge that can lock-mint and unlock-burn tokens.
