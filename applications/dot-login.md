# DOT Login

- **Team Name:** DOT Login
- **Payment Address:** FIAT (provided privately)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

DOT Login is poised to bridge the gap between Web2 and Web3 by simplifying access to blockchain technology through familiar web2-native OAuth2 protocols which are [arguably](https://oauth.net/2/) the industry standard for web-based authorization. The Substrate pallets to be developed as part of this grant will allow any parachain that adds them to their runtime to onboard Web2 users through this familiar interface. The web-based wallet, specified in Milestone 3, will serve as the user interface for this integration.

In the project's second phase, we plan to launch a parachain to act as a hub connecting other parachains (if they opt out of integrating our pallets) with the Web2 environment. Furthermore, our overarching vision includes developing a payment app to transform global transactions. This will enable individuals, even those without prior blockchain experience, to enter the Polkadot and Kusama ecosystems with ease, using accounts they already trust and use daily. This grant application, however, is primarily focused on establishing the foundational technology: a OAuth2-compatible wallet and the runtime pallets that make this integration possible, while leveraging well-known OAuth2 providers such as Google, Twitter, Facebook, and Microsoft.

### Project Details

This grant is structured into three main parts: the wallet creation flow, the transaction sending flow, and the UI development. Each part addresses a core aspect of integrating OAuth2 authentication with Substrate, facilitating an accessible entry point into the Web3 space for Web2 users.

- **Wallet Creation Flow:** This process involves the user generating an ephemeral key pair through the wallet and authenticating with an OAuth2 provider (e.g. Gmail). The `zkEphemeralKeys` pallet then registers the public key, encapsulated with a zero-knowledge proof to ensure privacy. The wallet address is derived from this ephemeral public key, ensuring a secure link between the user's identity as authenticated by the OAuth2 provider and their on-chain presence.

- **Transaction Sending Flow (planned for M2/future grant):** For transaction processing, the `zkEphemeralKeys` pallet again plays a pivotal role. It employs an internal mechanism to verify transaction signatures made with the ephemeral keys. Upon successful verification, it executes the transfer using a custom extrinsic that mimics the core functionality of the vanilla `pallet_balances`, ensuring that the core logic of existing Substrate modules remains untouched.

- **Wallet Development (planned for M3/future grant):** The user interface is built using ReactJS and the Polkadot.js/API or PAPI library, combined with RxJS for reactive programming. The UI will provide a seamless experience for creating wallets, viewing balances, and sending transactions. The design prioritizes ease of use to encourage adoption by users less familiar with blockchain technologies.

**Architectural Overview**

The project architecture is designed to be modular and secure, ensuring that each component can operate independently while contributing to the system as a whole.

There are two key architectural diagrams that define the project's structure:

**Wallet Creation Flow:** This diagram outlines the process from wallet initiation by the user through OAuth2 provider interaction to the on-chain registration of keys and addresses. It includes the interaction with off-chain components like the JWK registry and OAuth2 providers' APIs.

![zkMoku-wallet-creation drawio](https://github.com/singkeo/Grants-Program/assets/6782362/770f5492-6e47-4629-82e9-51ab78f1d5ff)

**Transaction Sending Flow (out of scope for this grant):** This flow details the steps from the user's initiation of a transaction to the verification of signatures and the execution of token transfers on-chain. It emphasizes the importance of the `zkEphemeralKeys` pallet in ensuring secure transactions without altering the core Balances pallet.

![zkMoku-tx-creation drawio](https://github.com/singkeo/Grants-Program/assets/6782362/3f8dd94c-8d16-482a-82ce-5b343e8f35aa)

- **Technology Stack (current grant):**
    - Rust for Substrate pallets,

- **Additional Tech used (planned for M2 & M3/future grant):**
    - TypeScript/ReactJS for the wallet logic,
    - A Material Design lib for the wallet UI/UX,
    - OAuth2 integration libraries,
    - Polkadot.js/API or PAPI libraries,
    - RxJS for reactive programming.

### Ecosystem Fit

Below is a comparative overview of our immediate project goals for the scope of this grant versus our longer term macro vision:

| Aspect             | This Grant + M2 + M3                                                         | Macro Vision                                                                      |
|--------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| **Target Audience** | New and existing Web2 users transitioning to Web3, developers looking for user-friendly authentication methods. | - Other parachains that are interested to onboard Web2 users will be able to connect to our parachain through XCM. <br /> - Global user base with a focus on financial inclusion, merchants, and consumers seeking low-cost, efficient payment solutions. Eventually allow merchands and retail users to use the currency of their choice for payments and savings. This can be useful especially for countries that experience currency crisises or go to a time of high inflation. |
| **Needs Met**       | Simplifying the transition from Web2 to Web3 and enhancing user experience in the Polkadot/Kusama ecosystem. | Providing a stable, reliable, and accessible payment network using blockchain technology to facilitate financial transactions worldwide with a focus on stablecoins. The goal is to deliver an user experience that doesn't require users to know how blockchain works.  |

While it's difficult to pinpoint the exact number of active users on OAuth2-compatible networks, they should go well into the billions, if we assume that the available statistics on these providers are remotely accurate (which we think is a fair guess to make). We've condensed some stats here that illustrate that we're covering a wide range of age groups and markets while showing that most users access these networks using mobile devices. While these networks include a lot of gen z users alrady, we're planning to integrate providers where gen z are the largest age group, such as Twitch or TikTok.

| OAuth2 Provider | Active Users | Top Age Group | Smartphone Share | Top 3 Markets     |
|-----------------|--------------|---------------|------------------|-------------------|
| Google          | 1.8 billion  | 25-34 years   | 75%              | US, India, Brazil |
| Twitter         | 528 million  | 25-34 years   | 80% (2015)       | US, Japan, India  |
| Facebook        | 3 billion    | 30-49 years   | 98.5%            | India, US, Indonesia |

Sources

- https://marketsplash.com/gmail-statistics/
- https://www.searchlogistics.com/learn/statistics/twitter-user-statistics/
- https://www.statista.com/chart/1520/number-of-monthly-active-twitter-users/
- https://backlinko.com/facebook-users
- https://www.demandsage.com/twitch-users/#:~:text=As%%20the%20latest%20data,7.12%20million%20In%20July%202023.

#### Similar Projects

**DAuth**

As highlighted by @keeganquigley, there are some overlaps between DOT Login and the [DAuth](https://grants.web3.foundation/applications/dauth_network#decentralized-oauth) project.

DAuth utilizes Trusted Execution Environments (TEEs) to enhance privacy during the authentication process. In contrast, DOT Login employs a combination of zk-SNARKs, ephemeral keypairs, and a nonce for OAuth2 authentication to ensure user privacy. This approach avoids the reliance on hardware, potentially reducing risks associated with hardware vulnerabilities.

Our research into DAuth's integration with Polkadot technology (such as Polkadot SDK or ink! smart contracts) yielded limited results:

- DAuth appears to be developed on [Alchemy](https://www.alchemy.com/dapps/dauth-network), rather than the Polkadot SDK or ink!.
- Their "start building" CTA leads to the [dauth-provider](https://github.com/DAuth-Network/dauth/tree/main/packages/dauth-provider) package, which is a UI library for facilitating a GitHub login. Its capability to interact with Polkadot Tech remains unclear.
- We encountered difficulties in comprehending their detailed architecture and components, including any use of Polkadot SDK or ink! smart contracts, due to:
  - Inactive links in their grant application (e.g., [demo](http://demo.dauth.network/auth), [project overview PPT](https://grants.web3.foundation/applications/.com/view/fem479hkgc9hc5ck)).
  - An empty [README](https://github.com/DAuth-Network/dauth/blob/535f82b7145dbf4ab8e7307559644f8aa9bd4a32/README.md) in their dauth provider repo.
  - Solidity smart contracts found [here](https://github.com/DAuth-Network/Contracts/tree/55deb4c82328a406e4b974922c01a14f698e2a9c/DAuth-Solidity/contracts), suggesting an EVM-focus.
  - Challenges in running their demo app due to dependency issues.
- Their Twitter activity suggests a build on EVM rather than the Polkadot SDK:
  ![DAuth Twitter Activity](https://github.com/w3f/Grants-Program/assets/6782362/b258f9a8-ece7-4ff5-96be-967a55031ca6)

In summary, key differences between DOT Login and DAuth include:

- **Data Storage**: While DAuth appears to store user data (mail ↔ address mapping) within a TEE, DOT Login does not store any Personally Identifiable Information (PID) off-chain or on-chain.
- **Integration with Polkadot Technology**: The integration of DAuth with Polkadot Tech remains unclear, whereas DOT Login is specifically designed to provide OAuth2-derived accounts to parachain users, using reusable Substrate pallets without necessitating changes to core technologies like `pallet_balances`.
- **Architectural Simplicity**: We believe that the DOT Login architecture is simpler and more streamlined.
- **Focus Areas**: DAuth also focuses on email messaging, a feature not present in DOT Login.

**zkLogin**

As indicated by @Noc2, [zkLogin](https://github.com/pioneersprize/Polkadot-Pioneers-Prize/blob/main/applications/zklogin-Reclaim-protocol.md) and DOT Login have some technical overlaps (OAuth2, zk circuits).

ZkLogin is the Polkadot SDK-implementation of the [EVM-based reclaim protocol](https://github.com/reclaimprotocol/solidity-sdk/blob/main/contracts/Reclaim.sol). It focuses on proof of personhood use cases and enhanced bot protection, while DOT Login focuses on a web2-derived wallet. It depends on an off-chain, attestation-based architecture that introduces additional trust assumptions, since the dApps have no way to verify whether the attestor accurately observes, validates, and attests the data exchanges between the dApp and the on-chain components. In contrary to that, DOT Login doesn't introduce any additional trust assumptions in addition to the relience on the OAuth2 providers which both projects equally share. As outlined in the [project details](#project-details) section, our architecture allows for verification of the OAuth2 providers' signatures by bridging the JWK endpoints to the OCW to bring their public keys on-chain. We believe this process to be more transparent and to require no additional trust. Another major distinction is zkLogin's dependence on an additional app to generate the proofs (see their [demo](https://www.loom.com/share/b88ab8bb90ff498c8cbd486bdb4a42a4)) which might be an even higher barrier than simply using a browser-based wallet to log into a dApp (a trade-off that might be accepted by dApps that rely on proof of personhood use cases, such as a DAO voting system). Our solution, however, is aiming for a web2-native experience that requires no additional components - not even a browser extension.

To summarise, the key differences between DOT Login and zkLogin are:

- **Focus**: zkLogin focuses on proof of personhood and enhanced bot protection while DOT Login focuses on a wallet targeting web2 users
- **Bot Protection**: although zkLogin provides enhanced bot protection, DOT Login's relience on reputable OAuth2 providers allows us to benefit from their bot protection measures
- **UX**: zkLogin relies on a mobile app while DOT Login is browser-native, i.e. it doesn't require any components not previously known to web2 users to generate a wallet (not even a browser extension)
- **Trust assumptions & security**: zkLogin seems to introduce additional trust assumptions (attestors have to be trusted which might represent a game-theoretical security limitation) while DOT Login's trust assumptions are limited to trusting OAuth2 providers (a trust assumption shared with zkLogin)

Finally, we'd like to highlight the fact that DOT Login is pursuing a Polkadot SDK-first approach, while zkLogin represents the expansion of an existing protocol native to another ecosystem.

**Disclaimer**

Please note that above comparisons are based on our current understanding and research of the DAuth and zkLogin projects. We aimed for objective analyses and acknowledge that there may be aspects of DAuth/zkLogin not fully covered. Our intent is to provide information for clarity and not to discredit or critique DAuth/zkLogin.

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

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):** 3 FTE
- **Total Costs:** 17000 USD (2.5 FTE covered)

### Milestone 1 — Wallet Creation Flow
- **Estimated Duration:** 6 months
- **FTE:** 3
- **Costs:** 17000 USD (2.5 FTE covered)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline code documentation and basic user guide. |
| 0c. | Testing Guide | Comprehensive unit tests, covering the core logic. Tutorial that explains how to test all deliverables of this milestone. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | `zkEphemeralKeys` Pallet | Substrate pallet for ephemeral key registration with zk-SNARKs proof validation. |
| 2. | `address` Pallet | Substrate pallet for deriving wallet addresses from OAuth2 JWT. |
| 3. | `jwtValidation` Pallet | Substrate pallet for JWT validation. |
| 4. | `JWK Registry` Pallet | Pallet that stores a hard-coded list of public keys from supported OAuth2 providers. |
| 5. | Client and OAuth Integrations | A rust-based client that allows the user to log into their gmail account, receive a JWT, paste the JWT to the client CLI, generate the ephemeral public/private keypair, generate the salt, generate the ZK proof using jwt, public key, and salt as an input, and send it to the collator by calling the appropriate extrinsic. Client-side jwt signature validation using the jwk present in the jwt header. The client will directly communicate with the node, assumingly it runs on wss://127.0.0.1:9944.  |

## Future Plans

As [suggested](https://github.com/w3f/Grants-Program/pull/2175#pullrequestreview-1822032181) by @semuelle, we're planning to apply to the decentralized futures program, once Milestone 1 has been delivered successfully.

The planned milestones include:

#### Milestone 2 - Transaction Creation Flow

- **Estimated Duration:** 1 month
- **FTE:** 2

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

#### Milestone 3 - Wallet (Extension)

The goal of this milestone is to implement a web-based wallet OR a wallet extension that allows users to create addresses, receive and send transactions to other dot-login users as well as web3-native wallets in the ecosystem.

We've decided to cover this milestone by ourselves.

- **Estimated Duration:** 1 month
- **FTE:** 1.5

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline code documentation and basic user guide. |
| 0c. | Testing Guide | Comprehensive unit tests, covering the core logic. Tutorial that explains how to test all deliverables of this milestone. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | Article that covers the implementation of the wallet, how to use it, how this development is significant for the ecosystem and mainstream adoption as well as our long-term vision for this project. |
| 1. | dot login TypeScript library | Implement a reactive, TypeScript-based library that encapsulates the functionality specific to dot login, such as creating ephemeral keypairs, sending any supported transactions to extrinsics implemented in M1 & M2 and generating zk-SNARKs. |
| 2. | web-based ui OR wallet extension | Implement either our custom web-based UI or implement an integration with any of the existing wallets, such as polkadot.js, Talisman, Subwallet or Metamask (using the Polkadot SNAP plugin). It will support the following basic wallet actions: derive and display addresses, use QR codes to request payments, show balances and past transactions (might be cached in web storage for the first stage), send transactions, receive transactions, in-browser notifications for transactions. |

#### Milestone 4+

With the foundational technology established through M1, M2 and M3, DOT Login will forge a path for a seamless Web2 to Web3 transition. Our OAuth2-compatible payment framework consisting of Substrate pallets and a web-based wallet will be designed with a deep understanding of user experience, serving as an inviting gateway into blockchain ecosystems.

Our goal for M1-M3 is to integrate everyday Web2 users into the Dotsama ecosystem through a familiar and trusted authentication process, enabling a low-friction entry point into decentralized technologies. This includes assuring compatibility between the DOT Login parachain with other parachains and especially the Asset Hub common good chain through XCM.

In the longer term, we intend to build a payment framework that will integrate with DOT Login, serving as the technical foundation for a global payment network that prioritizes financial inclusion. We aim to empower merchants and consumers worldwide with a system that supports transactions using stablecoins, in particular USDT and USDC that are already present on Polkadot's Asset Hub, without the need for traditional financial intermediaries.

The DOT Login network will offer flexible transaction configurations for privacy and security while maintaining low costs. We are committed to building a user experience that leverages QR-codes and takes learnings from leading payment applications (namely France's _Lydia_, China's _Weixin Pay_ or Thailand's _PromptPay_), prioritizing ease of use to ensure our platform is accessible to all, regardless of their knowledge of blockchain technology.

This vision also includes hedging opportunities against domestic currency crises and inflation, offering users the freedom to choose their preferred digital assets for sending and receiving transactions, and providing cost-effective and secure solutions, especially for larger transactions. We plan to support microtransactions as well, where our approach includes leveraging off-chain scaling solutions to enhance performance and reduce costs further, which will make our platform also suitable for high-volume, low-cost transactions globally. Our team, composed of successful entrepreneurs and technical experts that have gained experience in the development of an e-banking portal and other TradFi and FiTech-related projects, one social media platform that raised $1.2M as well as running successful F&B and ecommerce and SaaS businesses, we think to be uniquely positioned to deliver a compelling product that meets the market's needs and expectations. We are confident in our ability to navigate the product-market fit journey, drawing from our past business and technical experience.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

- We've been following the Dotsama ecosystem for a while now, but we had been hesitant to build on it in the past, because the relatively high costs to secure a parachain slot discouraged us. However, with the advent of agile coretime the situation changes as leveraging the shared security paradigm becomes more viable for projects that are just starting off. Through the W3F's twitter account we've learned about this program and decided to apply.

**Why did you decide to apply to the Grants Program, rather than the Decentralized Futures Program?**

- While we do have a solid track record in web2 tech projects, TradFi, FinTech, e-commerce and entrepreneurism overall, we currently haven't implemented a major web3 project yet. Due to the transparent nature of the grants program we believe this is a good chance to build a solid reputation within the ecosystem, by living up to our promises and delivering solid open-source components that are beneficial to the overall ecosystem.
- We appreciate the ongoing efforts of the decentralised futures program to make significant impact in the ecosystem, however, in our research we haven't found any project yet that has been accepted. Our current situation is that we've reserved this month for setting up our businesses to be less reliant on us, so we can start focusing on the implementation of DOT Login from February. Hence, we choose to pick the grants program, since we've seen that good applications can be approved within weeks (recent examples include Democratic Governance, QuantumGuard, Lastic).
- We're not yet going to be profitable after completion of this grant, which we believe is a precondition for the futures program, quote from the [webpage](https://futures.web3.foundation/) (also, we're not a non-profit venture):
  >  Funding is available for Polkadot-focused organizations that aim to generate profit, as well as for non-profit ventures that have a strategy to secure ongoing financing through Polkadot's on-chain treasury system beyond 2024.
- We do see the scope of this grant as a very useful addition to the ecosystem that will enable mainstream web2 people to access the Dotsama ecosystem. While parachain teams will be able to reuse our pallets on their chain, we are envisioning to become the web2 entrypoint for the masses, allowing parachains to integrate with us through XCM, to onboard web2 users. In addition to that, as mentioned in the proposal our long term plan includes the implementation and launch of a global payment network that leverages our parachain under the hood.
