# DOT Login

- **Team Name:** DOT Login
- **Payment Address:** FIAT (provided privately)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

DOT Login is poised to bridge the gap between Web2 and Web3 by simplifying access to blockchain technology through familiar OAuth2 protocols. Our project is not merely about creating another wallet; it's about crafting a portal that will open the Web3 ecosystem to the masses, starting with a focus on USD-backed stablecoins available on Polkadot's Asset Hub, such as USDT and USDC. While the overarching vision includes a payment app to revolutionize global transactions, this grant application centers on the core technology that will lay the foundation for this future: a wallet creation and transaction flow built on the back of well-known OAuth2 providers like Google, Twitter, Facebook, and Microsoft.

The DOT Login initiative will enable individuals, even those without prior blockchain experience, to enter the Polkadot and Kusama ecosystems with ease, using accounts they already trust and use daily. This grant application will focus on developing the underlying infrastructure to support this seamless transition, ensuring that while the long-term vision includes a comprehensive payment application, the current scope is dedicated to creating the technological core and user interface that will serve as the bedrock for future developments.

### Project Details

This project is structured into three main parts: the wallet creation flow, the transaction sending flow, and the UI development. Each part addresses a core aspect of integrating OAuth2 authentication with Substrate, facilitating an accessible entry point into the Web3 space for Web2 users.

- **Wallet Creation Flow:** This process involves the user generating an ephemeral key pair through the wallet and authenticating with an OAuth2 provider (e.g. Gmail). The `zkEphemeralKeys` pallet then registers the public key, encapsulated with a zero-knowledge proof to ensure privacy. The wallet address is derived from this ephemeral public key, ensuring a secure link between the user's identity as authenticated by the OAuth2 provider and their on-chain presence.

- **Transaction Sending Flow:** For transaction processing, the `zkEphemeralKeys` pallet again plays a pivotal role. It employs an internal mechanism to verify transaction signatures made with the ephemeral keys. Upon successful verification, it executes the transfer using a custom extrinsic that mimics the core functionality of the vanilla `pallet_balances`, ensuring that the core logic of existing Substrate modules remains untouched.

- **UI Development:** The user interface is built using ReactJS and the Polkadot.js/API or PAPI library, combined with RxJS for reactive programming. The UI will provide a seamless experience for creating wallets, viewing balances, and sending transactions. The design prioritizes ease of use to encourage adoption by users less familiar with blockchain technologies.

**Architectural Overview**

The project architecture is designed to be modular and secure, ensuring that each component can operate independently while contributing to the system as a whole.

There are two key architectural diagrams that define the project's structure:

**Wallet Creation Flow:** This diagram outlines the process from wallet initiation by the user through OAuth2 provider interaction to the on-chain registration of keys and addresses. It includes the interaction with off-chain components like the JWK registry and OAuth2 providers' APIs.

![zkMoku-wallet-creation drawio](https://github.com/singkeo/Grants-Program/assets/6782362/770f5492-6e47-4629-82e9-51ab78f1d5ff)

**Transaction Sending Flow:** This flow details the steps from the user's initiation of a transaction to the verification of signatures and the execution of token transfers on-chain. It emphasizes the importance of the `zkEphemeralKeys` pallet in ensuring secure transactions without altering the core Balances pallet.

![zkMoku-tx-creation drawio](https://github.com/singkeo/Grants-Program/assets/6782362/3f8dd94c-8d16-482a-82ce-5b343e8f35aa)

- **Technology Stack:**
    - Rust for Substrate pallets,
    - TypeScript/ReactJS for the wallet logic,
    - A Material Design lib for the wallet UI/UX,
    - OAuth2 integration libraries,
    - Polkadot.js/API or PAPI libraries,
    - RxJS for reactive programming.

### Ecosystem Fit

Below is a comparative overview of our immediate project goals for the scope of this grant versus our longer term macro vision:

| Aspect             | This Grant                                                                 | Macro Vision                                                                      |
|--------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| **Target Audience** | New and existing Web2 users transitioning to Web3, developers looking for user-friendly authentication methods. | Global user base with a focus on financial inclusion, merchants, and consumers seeking low-cost, efficient payment solutions. Eventually allow merchands and retail users to use the currency of their choice for payments and savings. This can be useful especially for countries that experience currency crisises or go to a time of high inflation. |
| **Needs Met**       | Simplifying the transition from Web2 to Web3 and enhancing user experience in the Polkadot/Kusama ecosystem. | Providing a stable, reliable, and accessible payment network using blockchain technology to facilitate financial transactions worldwide with a focus on stablecoins. The goal is to deliver an user experience that doesn't require users to know how blockchain works.  |

## Team :busts_in_silhouette:

### Team members

- Mickael Luangkhot (Project Lead)
- Ahmed Abouzi (Lead Developer)
- Avraam Makmhudov (Software Developer)

### Contact

- **Contact Name:** Mickael Luangkhot
- **Contact Email:** (provided privately)

### Legal Structure

- **Registered Address:** (provided privately)
- **Registered Legal Entity:** (provided privately)

### Team's experience

- **Mickael Luangkhot:**
    - Askip App Founder: Venture backed startup. Social network for teenagers which gathered 8 millions users in France.
    - Bubble Vie Founder: Physical retail chains in France (food)
    - Bobapro Founder: No. 1 supplier of Bubble Tea products in France
- **Ahmed Abouzi:**
    - Past CTO at Binks: neobank facilitating access to the bank account
    - CTO at Toruneko: an e-commerce company selling on the biggest marketplaces (Amazon, CDiscount, Fnac, Rakuten...) with a stock of thousand products
    - Consultant at ETravelCompanion: a proactive and adaptive voice assistant that helps and facilitates journeys of drivers
- **Avraam Makmhudov:**
    - Senior Software Engineer at Natixis

### Team Code Repos

- **Mickael Luangkhot:** https://github.com/singkeo
- **Ahmed Abouzi:** https://github.com/AhmedX6
- **Avraam Makmhudov:** https://github.com/avraamm

### Team LinkedIn Profiles

- (provided privately)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 2,17 FTE
- **Total Costs:** 44200 USD

### Milestone 1 — Wallet Creation Flow
- **Estimated Duration:** 1 month
- **FTE:** 3
- **Costs:** 20400 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline code documentation and basic user guide. |
| 0c. | Testing Guide | Comprehensive unit tests, covering the core logic. Tutorial that explains how to test all deliverables of this milestone. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | `zkEphemeralKeys` Pallet | Substrate pallet for ephemeral key registration with zk-SNARKs proof validation. |
| 2. | `address` Pallet | Substrate pallet for deriving wallet addresses from OAuth2 JWT. |
| 3. | `jwtValidation` Pallet | Substrate pallet for JWT validation. |
| 4. | `JWK Registry` Pallet | Pallet that stores JWK registries of supported OAuth2 providers continuously. |
| 5. | Off-Chain worker | Off-chain worker that queries the JWK registry endpoints of OAuth providers continuously and integrates with `JWK Registry` pallet. |
| 6. | OAuth Integrations | Integrate Google, Twitter, Facebook, and Microsoft OAuth providers with `JWK Registry` pallet. |

### Milestone 2 — Transaction Creation Flow

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 13600 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline code documentation and basic user guide. |
| 0c. | Testing Guide | Comprehensive unit tests, covering the core logic. Tutorial that explains how to test all deliverables of this milestone. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | Article that covers the implementation of the two modules, how to use them, how this development is significant for the ecosystem and mainstream adoption as well as our long-term vision for this project. |
| 1. | Transaction Signature Verification Mechanism | Develop a mechanism in `zkEphemeralKeys` to verify the signatures of transactions against the registered ephemeral keys. A `SIGNATURE_VERIFIED` (or similar) event will be emitted upon successful verification. |
| 2. | Implement `execute_transfer` Extrinsic | Develop the `execute_transfer` extrinsic within the `zkEphemeralKeys`` pallet. It will  accept all necessary parameters for a transfer, including an ephemeral key signature. |
| 3. | `zkEphemeralKeys`-internal Transfer Functionality | Develop an internal function within the `zkEphemeralKeys` pallet to handle the actual token transfer. This function will replicate the essential checks and logic of the balances pallet’s transfer mechanism and has to be updated, if the the balances pallet changes. While this dependency is not perfect, we think that's the best trade-off, because the alternative would be to change the balances pallet which is something we'd like to avoid. We might propose a change on the balances pallet at a later stage, to make this more flexible. Note that this deliverable will also include the handling and emitting of events to broadcast the success or failure of the transfer. |

### Milestone 3 — Wallet

The goal of this milestone is to implement a web-based wallet that allows users to create addresses, receive and send transactions to other dot-login users as well as web3-native wallets in the ecosystem.

- **Estimated Duration:** 1 month
- **FTE:** 1.5
- **Costs:** 10200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline code documentation and basic user guide. |
| 0c. | Testing Guide | Comprehensive unit tests, covering the core logic. Tutorial that explains how to test all deliverables of this milestone. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | Article that covers the implementation of the wallet, how to use it, how this development is significant for the ecosystem and mainstream adoption as well as our long-term vision for this project. |
| 1. | dot login TypeScript library | Implement a reactive, TypeScript-based library that encapsulates the functionality specific to dot login, such as creating ephemeral keypairs, sending any supported transactions to extrinsics implemented in M1 & M2 and generating zk-SNARKs. |
| 2. | web-based ui | Implement a web-based UI that supports the following basic wallet actions: derive and display addresses, use QR codes to request payments, show balances and past transactions (cached in web storage for the first stage), send transactions, receive transactions, in-browser notifications for transactions. |

## Future Plans

With the foundational technology established through this grant, DOT Login will forge a path for a seamless Web2 to Web3 transition. Our OAuth2-compatible payment framework consisting of Substrate pallets and a web-based wallet will be designed with a deep understanding of user experience, serving as an inviting gateway into blockchain ecosystems.

Our immediate goal is to integrate everyday Web2 users into the Dotsama ecosystem through a familiar and trusted authentication process, enabling a low-friction entry point into decentralized technologies. This includes assuring compatibility between the DOT Login parachain with other parachains and especially the Asset Hub common good chain through XCM.

In the longer term, we intend to build a payment framework that will integrate with DOT Login, serving as the technical foundation for a global payment network that prioritizes financial inclusion. We aim to empower merchants and consumers worldwide with a system that supports transactions using stablecoins, in particular USDT and USDC that are already present on Polkadot's Asset Hub, without the need for traditional financial intermediaries.

The DOT Login network will offer flexible transaction configurations for privacy and security while maintaining low costs. We are committed to building a user experience that leverages QR-codes and takes learnings from leading payment applications (namely France's _Lydia_, China's _Weixin Pay_ or Thailand's _PromptPay_), prioritizing ease of use to ensure our platform is accessible to all, regardless of their knowledge of blockchain technology.

This vision also includes hedging opportunities against domestic currency crises and inflation, offering users the freedom to choose their preferred digital assets for sending and receiving transactions, and providing cost-effective and secure solutions, especially for larger transactions. We plan to support microtransactions as well, where our approach includes leveraging off-chain scaling solutions to enhance performance and reduce costs further, which will make our platform also suitable for high-volume, low-cost transactions globally. Our team, composed of successful entrepreneurs and technical experts that have gained experience in the development of an e-banking portal and other TradFi and FiTech-related projects, one social media platform that raised $1.2M as well as running successful F&B and ecommerce and SaaS businesses, we think to be uniquely positioned to deliver a compelling product that meets the market's needs and expectations. We are confident in our ability to navigate the product-market fit journey, drawing from our past business and technical experience.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

- We've been following the Dotsama ecosystem for a while now, but we had been hesitant to build on it in the past, because the relatively high costs to secure a parachain slot discouraged us. However, with the advent of agile coretime the situation changes as leveraging the shared security paradigm becomes more viable for projects that are just starting off. Through the W3F's twitter account we've learned about this program and decided to apply.