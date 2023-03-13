# Identity Wallet and Pallet

- **Team Name:** Impierce Technologies B.V.
- **Payment Address:** Bank Transfer in Fiat (USD/EUR)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

This project proposes the development of a Proof-of-Concept (PoC) for all required components for a healthy Decentralized Identity ecosystem for all Substrate-based chains, following internationally recognized standards from W3C, the OpenId Foundation and the European eIDAS regulation.

Decentralized Identity or Self-Sovereign Identity (SSI) defines a new method for identity management and authentication. It removes the centralized aspects and puts the identity subject in full control over its own identity and data. Decentralized Identity provides a solution for the increasing amount of database breaches, the lack of trust in any digital setting, and the increasingly difficult to comply with privacy legislation, such as GDPR. It has caught the attention in many different ecosystems and industries such as Crypto, Government, Finance and Education.

The EU has recently turned its attention to Digital Identity. It has proposed an update to the eIDAS regulation to follow many SSI principles and standards. Using our expertise, we propose the development of an Identity Wallet based on Substrate that complies with the [Architecture Reference Framework](https://github.com/eu-digital-identity-wallet/architecture-and-reference-framework) from the EU. This would make the wallet compliant with the eIDAS regulation, follow the commonly accepted OpenID standards such as [OIDC](https://openid.net/connect/), [SIOPv2](https://openid.net/specs/openid-connect-self-issued-v2-1_0.html), [OpenID4VP](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html) and [OpenID4VCI](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html) and W3C standards for [Decentralized Identifiers](https://www.w3.org/TR/did-core/) and [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/). The EU goal of eIDAS is to onboard 80% of EU citizens and mandate adoption across all EU member states government agencies, financial sector, educational sector and partially public entities such as transportation by 2025. This Identity Wallet would be compatible with this new ecosystem and intends to be recognized as an official EU Identity Wallet allowing users to manage and use their web2 and web3 identities together.

The Substrate / Polkadot and Kusama ecosystems have shown significant interest in Decentralized Identity as there are several identity-related projects, pallets and chains such as the [DID Pallet](https://github.com/substrate-developer-hub/pallet-did), Identity Pallet,  [Parami](https://github.com/parami-foundation/parami-blockchain), [KILT](https://github.com/KILTprotocol/kilt-node) and [Dock](https://github.com/docknetwork/dock-substrate). While the projects are great, there is some major untapped potential. With Decentralized Identity, web3 users can easily authenticate themselves and create trust between each other. This can be immensely valuable to web3 (and web2) service providers, for user authentication and identification. As Impierce Technologies, we do currently warn of the potential of GDPR risks with some of these implementations as writing any Personal Identifiable Information to a Blockchain is most likely a irreversible GDPR violation. With this proposed project we provide a GDPR compliant alternative for the entire Substrate ecosystem.

### Project Details

Impierce Technologies would like to develop and maintain an Identity Wallet in several phases over the following years. This initial phase requires us to implement an Identity Wallet with all features necessary for users to create and manage their substrate-based DIDs, log-in and authenticate yourself with Relying Parties and collect and share Verifiable Credentials. In later phases, we would like to further enhance the wallet with more features that will connect ecosystems and encourage adoption.

In order to achieve the first phase, we would develop a PoC for a DID Pallet and accompanying Substrate DID Method that complies with the DID standard. In addition, we implement a client that can connect to an Identity Provider that is compatible with the SIOPv2, OIDC, OpenID4VP and OpenID4VCI. These are OpenID Foundation standards that allow user authentication following globally recognized standards adopted by hundreds of thousands of websites.

The Identity Wallet is a sensitive piece of software as it will handle private keys and personal information. As such, security is our topmost priority. We have decided to develop the cross-platform app in Rust using the [Tauri framework](https://tauri.app/). It is chosen as it provides the best tools to our developers for separating front-end rendering from business logic and handling sensitive data. This clear separation allows us to handle any sensitive information inside Rust, which gives an extra layer of defense in order to maintain optimal security and privacy.

![Overview of the Components](https://i.imgur.com/VcSkujW.png)

As shown in the above picture, we would need to develop the following components:
* A Tauri-based Identity Wallet for Android and IOS
* A DID-Pallet for Substrate following the DID standard
* Implement the SIOPv2, OpenID4VP and OpenID4VCI standards
* Research and implement Browser - Application communication via deeplinking, websockets or via a browser plug-in.

This application does not (yet) include the following components that we may or may not request as follow-up projects:
* A W3C approved submission for a Substrate DID Method
* A secure solution for handling sensitive data and private keys in the mobile environment
* Support for Revocation via the [StatusList2021](https://w3c.github.io/vc-status-list-2021/) W3C standard
* Support for Selective Disclosure
* Support for [ISO 18013-5:202](https://www.iso.org/standard/69084.html)
* Support for an external data vault such as [Solid](https://solidproject.org/)
* An application or service for Relying Parties or Issuers of Credentials to easily onboard into the ecosystem
* In app management of Substrate-based tokens or NFTs
* 100% Compliance with eIDAS 2.0 and the ARF (Every component we implement will aim to be compliant, but not all required components fall under the scope of this proposal)

The wallet will naturally be developed completely open-source and is a key component for Impierce Technologies. This guarantees our commitment towards maintaining the wallet, providing support services and pushing for adoption. The wallet would also become part of our ongoing demo project with a Dutch college of 20.000 students, to demonstrate the power of Self-Sovereign Identity and OpenBadges to the region, aiming to create a consortium of regional companies and educational institutions to move towards a large-scale pilot. More information on this project will soon be available.

### Ecosystem Fit

With this project, we propose the start of the development of Substrate Identity tooling that is not limited to only one specific Blockchain, but rather would be available for all Substrate-based Blockchains that wish to gain Decentralized Identity functionalities (which requires them to install the DID Pallet). By not just providing a DID pallet, but also an entire user wallet, we unburden projects from having to create any large identity components, while still benefiting from the features it provides. In the future, we hope to expand these services and tools even further.

As such, our target audience is a combination of parachain and dApp developers, and the users of these parachains and dApps. This does include our own user base as we wish to publish a version of the app to the app stores ourselves, but these will be free-to-use and gives projects the opportunity to connect ecosystems / user bases together. Our users will instantly be able to onboard, login and proof credentials towards adopting dApps, while dApps can instantly utilize our published wallet for their own users and connect them with other dApps.

Our project meets the growing need for web2 and web3 based user authentication and verification that follows common and upcoming standards, while being compliant with crucial laws such as GDPR and eIDAS. This project will enable the development of software which features will be immensely useful for many other projects, while taking away the significant development burden and costs that this infrastructure generally requires for any project.

The project is similar to existing DID projects for specific Blockchains using Substrate technology, but none directly build on Substrate, as far as we are aware. Other existing project using the Identity Pallet would do well to utilize the DID pallet and wallet suggested in this project, as it currently does not seem to comply to GDPR.

## Team :busts_in_silhouette:

### Team members

* Team Leader
	* Jelle Millenaar - CEO of Impierce Technologies
* Team Members
	* Nander Stabel - Rust Developer
	* Daniel Mader - Full-stack / Rust Developer
	* Currently Hiring a Mobile Developer

If this project is accepted, we would hire an additional Rust developer with Substrate experience and a part-time front-end developer.

### Contact

- **Contact Name:** Jelle Millenaar
- **Contact Email:** Jelle.millenaar@impierce.com
- **Website:** [impierce.com](impierce.com)

### Legal Structure

- **Registered Address:** Will be provided on demand for privacy reasons.
- **Registered Legal Entity:** Impierce Technologies B.V., registered in the Netherlands as a limited liability company at the Kamer van Koophandel with registration number: [87959410](https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=879594100000)

### Team's experience

While our team might be unfamiliar for people in the Substrate / Polkadot / Kusama ecosystem, we have made significant contributions to the IOTA ecosystem on the topic of Decentralized Identity.

Jelle has been working on Self-Sovereign Identity since 2017. He joined the IOTA Foundation in 2019 and became Lead of Identity. He educated the IOTA community and its partners on the topic of Identity with the release of the [Unified Identity whitepaper](https://files.iota.org/comms/IOTA_The_Case_for_a_Unified_Identity.pdf) and the development of [Selv demonstrations](https://selv.iota.org/). He has presented at [EclipseCon](https://www.eclipsecon.org/2020/sessions/establishing-trust-between-people-organizations-and-things) and will soon present at the [European Identity and Cloud Conference](https://www.kuppingercole.com/sessions/5279/3). He later went on to set-up and manage a team of 6 developers to create the Rust [IOTA Identity framework](https://github.com/iotaledger/identity.rs) and designed / wrote the [did:iota](https://wiki.iota.org/identity.rs/specs/did/iota_did_method_spec/) method. He founded Impierce Technologies to go beyond developing frameworks, and focus on more user-facing software to enable easier adoption from (web3) businesses and governments.

Daniel has contributed to the IOTA Identity Experience Team, a group of enthusiasts / developers that test and use the IOTA Identity framework. He developed an initial [proof-of-concept](https://youtu.be/Vu-LuDZTxhg?t=40) to utilize DID for logging in, which inspired this project ([code](https://github.com/cambriota/iota-identity-provider)).

### Team Code Repos

Our team repositories are currently private as we have only recently started development and are very much experimenting and testing things, before starting proper development. As a reference, we would like to once again link to IOTA Identity, which was completely managed by Jelle, and we intent to have a similar approach and quality for our repository.

* https://github.com/iotaledger/identity.rs

The following links are too our personal Github profiles, but Jelle has mostly functioned in a management role, while Daniel and Nander have been working for closed-sourced companies.

- https://github.com/JelleMillenaar
- https://github.com/daniel-mader
- https://github.com/nanderstabel

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/jellefm/
- https://www.linkedin.com/in/daniel-mader-778370229/
- https://www.linkedin.com/in/nanderstabel/

## Development Status :open_book:

As described in the Team's experience section, we are an experienced team familiar with all of the standards and ongoing legislative challenges and changes in the field of Digital Identity. We have previously designed, implemented and worked with the DID method for IOTA at the IOTA Foundation. Only recently have we started Impierce Technologies, so while our company doesn't yet have the desired track record and evidence, we do have that as individuals.

Blogposts:
* [Avoiding the Dangers of Excessive Data Sharing with SSI](https://medium.com/@iotacontentcreators/avoiding-the-dangers-of-excessive-data-sharing-with-ssi-a8fbeb369200)
* [The Binding Problem for SSI and NFTs](https://blog.iota.org/the-binding-problem-for-ssi-and-nfts/)
* [Twitter Showcases the need for Verifiable Corporate Digital Identities](https://medium.com/@jelle.millenaar/twitter-showcases-the-need-for-verifiable-corporate-digital-identities-316a9846aca9)
* [Explaining the IOTA Identity Actor](https://blog.iota.org/the-iota-identity-actor-explained/)

Open-Source Contributions:
* [Identity.ts](https://github.com/iotaledger/identity.ts) - TypeScript initial implementation of IOTA Identity, main developer: Jelle
* [Selv Mobile](https://github.com/iotaledger/selv-mobile) - A Demo Identity Wallet, project lead: Jelle
* [Identity.rs](https://github.com/iotaledger/identity.rs) - Main IOTA Identity framework, team lead: Jelle
* [W3C did:iota Method](https://github.com/w3c/did-spec-registries/pull/300) - Submission Issue of DID method to W3C Method Registry

User Experience mock-ups:

![Initial Mock-ups](https://i.imgur.com/864Bdd1.png)

In the above screens, we showcase a first set of mock-up screens for the Identity Wallet. The left most screen shows a simple profile for Susan Miller, which contains a collection of 5 Verifiable Credentials. She will be able to view the credentials, share them, remove them or categorize them.

In the second screen, Susan receives a Login Request from bestdex.com, this request is triggered by simply clicking a button on the mobile website, or scanning a QR code. It is important for Susan to identify where she logs in, so this screen provides bestdex.com the opportunity to present evidence of who they are. The website of Bestdex is verified by using [.well-known](https://en.wikipedia.org/wiki/Well-known_URI) standard. It verifies on the website, which DID is tied to bestdex.com and only shows up as verified if that same DID sends this log-in request. Susan has never before logged in to bestdex.com and there will show the status as Not connected. This should make Susan a bit more careful before proceeding. In the background, the OIDC and SIOPv2 standards are used to make this possible.

The third screen shows a request for sharing credentials by bestdex.com, which is now recognized. They ask Susan to share her Personal Information, Banking Details and ID card. As some of the information is self-issued (so not verified by a third party), the data is considered of Medium data sensitivity. This unique feature is a way for the wallet to warn Susan about how much data she is sharing. The more data she shares (or more sensitive data), the more difficult the user consent process (screen 4) will be and the more she will be warned.

In the last screen, we show that we always give the user the insight in the historical use of their data. They can see what information was shared to which parties and at what time. They can also act on this, by removing connections and revoking access to data. This screen will come with an extensive filter and search mechanism to make it possible for users to find things quickly in their entire history. All information shown on the wallet is only locally stored and would not be tracked by Impierce or any other party.

## Development Roadmap :nut_and_bolt:

As a larger project, we would like to fully develop a production-ready DID Pallet and Wallet. The wallet will continue to gain additional functionalities, features and security updates and has a much larger scope then is described in this grant proposal. While we are an experienced team in the SSI world, we are not well-known in the Substrate / Polkadot ecosystem. This grant request is scoped as a PoC, with our intention of showing our skill and ability to deliver amazing software. We would hope to follow this up with a Polkadot Treasury Proposal for maturing the Pallet and Wallet. 

We have designed the PoC project as is due to the fact that both the Pallet and the Wallet depend on each other. As Impierce Technologies, we wouldn't be making significant steps towards building an ecosystem if we would just build a DID pallet. In addition, in the past we have build an DID implementation for IOTA and observed the lack of an Identity Wallet as the biggest roadblock to adoption. Due to these reasons, we fundamentally believe that any ecosystem should only invest in DID by committing to building both components.

For the milestones, we have tried to keep them short, but also didn't want to create too many milestones. As we will be building both the DID Pallet and Identity Wallet in parallel, we aren't sure what the order of the delivery will be. As such, we have split the milestones in to two parallel paths, but have ordered them in the expected order of delivery. The time frames between delivery of milestones may also be shorter then the duration due to parallel developments.

### Overview

- **Total Estimated Duration:** ~15 Weeks (Parallel developments)
- **Full-Time Equivalent (FTE):** 4.5 FTE
- **Total Costs:** 82,400 USD

### Milestone 1 — MVP DID Pallet

- **Estimated duration:** 12 weeks
- **FTE:**  2,0
- **Costs:** 38,400 USD

*Description*

We will develop a feature complete DID Pallet that is compliant with the DID standard and follow our research and feedback collected from the Substrate community through interviews and research. We will deliver an initial document describing how the method works which can later be submitted to W3C. We will run either run a public testnet or join an existing one which will support this DID Pallet for testing purposes.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **instructions** on how to run the code. We will also draft an initial rough DID method explaining how DID on Substrate works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness.|
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will write an article on how DID works on Substrate and highlight some of the features, asking for feedback. |
| 1. | Substrate DID Pallet | We will create a Substrate Pallet that implements the Decentralized Identifiers (DIDs) v1.0 standard from W3C. |
| 2. | DID Method Specification | We provide a draft version of the DID Method Specification following W3C requirements. |
| 3. | DID Testnet | We run a public testnet or join an existing one which will implement the DID Pallet. |

### Milestone 2 — Login Wallet MVP

- **Estimated duration:** 11 weeks
- **FTE:**  2,5
- **Costs:** 44,000 USD

*Description*

The previously implement standards will now be accompanied by the full-implementation of the UX designs providing a Minimum Viable Product for using Substrate-based identities. The wallet delivered in this milestone will already be published onto the app-stores and provide full decentralized login functionalities. It follows the previously delivered standards and can easily be integrated by websites already familiar with OIDC or SIOPv2. This milestone is for a full app and therefore includes multi-language support, theming, white labeling and basic security mechanisms. A separate client will be developed that provides an easier-to-integrate API for the OpenId standards into wallets, but also future other Identity components such as SaaS products or Identity Agents.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide **inline documentation** of the code, contribution guidelines for translations and a white labeling guide. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests. We will set up basic end-to-end testing and perform user testing. |
| **0d.** | Docker | Where relevant and possible, we will deliver a Dockerfile to test out the functionality of this milestone. |
| 0e. | Article | We will publish an **article** that announced the release of the app and how it can be used or how parties may integrate with this new technology! |
| 1. | Identity Wallet |  The Identity Wallet repo is updated with a MVP Tauri Identity Wallet including a standard design. |
| 2. | Identity Client | We deliver an Identity Client that supports SIOPv2. |
| 3. | Integration Guide |  A guide that explains how to integrate as a website with the new login functionality |
| 4. | ARF Standards | A Github repo that contains collect and/or implements the SIOPv2, OpenID4VP and OpenID4VCI and will grow in time to fully cover the Architecture Reference Framework for eIDAS. |

## Future Plans

This project is the start of a larger journey to develop a healthy and vibrant identity ecosystem that follows widely accepted standards and is compatible with GDPR and eIDAS regulations. By developing the DID Pallet and the initial Identity Wallet, all Substrate-based Blockchains will be able to benefit from Digital Identity technology. After delivering this project, adoption and expanding features and services will be the main goal for Impierce Technologies.

We will use the wallet for our own clients, promote it for new clients and parties and enhance it with additional features. We plan to add an extension system to the wallet such that parties can have their own space within user's identity wallet. This space can contain functionalities that specifically fit a party such as showing only particular Verifiable Credentials (think entry tickets), display NFTs, manage tokens or integrate services their services directly in the app.

We plan to apply for the Polkadot Treasury to mature the outcome of this PoC into a full production-ready Identity Pallet and Wallet with the following additional features:
* A W3C approved submission for a Substrate DID Method
* A secure solution for handling sensitive data and private keys in the mobile environment
* Support for Desktop environements: Windows, Linux and MacOS
* Full integration of Verifiable Credentials in the Wallet
* Implementation of OpenID4VP and OpenID4VCI
* Multi-chain support for all Substrate chains with the DID Pallet enabled
* An extention system for developers to integrate with the Wallet
* A whitelabel solution for developers to brand their own app
* Integration with Identity.rs

The wallet will be extended to fully comply with the eIDAS regulations (according to the ARF design) meaning we plan to include support for:
* Support for Revocation via the [StatusList2021](https://w3c.github.io/vc-status-list-2021/) W3C standard
* Support for Selective Disclosure
* Support for [ISO 18013-5:202](https://www.iso.org/standard/69084.html)

In addition, Impierce Technologies will develop and offer a Software-as-a-Service solution to help companies benefit from the Identity Wallet. It helps them connect with users who are using the wallet to accept their authentication and data verification. It onboards them into the relevant Substrate ecosystem and set-up or connect with nodes for verification. These services will be offered with a focus on privacy and security, which means Impierce Technologies will not be able to observe and decode any of the interactions, respecting the privacy of our clients and their users. This software will significantly lower the barrier to adoption for web2 or web3 companies willing to make use of the Identity Wallet without requiring any developers or expertise on the topic.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Web3 Foundation Website

Impierce Technologies is a relatively new company with significant experience and knowledge in the world of Self-Sovereign Identity. We have been in the SSI space for many years and see a very significant rise in opportunities and demand for this software in the last 12 months. While we are new in the Substrate ecosystem, we would like to make this our home for building a healthy SSI ecosystem. We bring immense knowledge and have many connections and partners that want to adopt our technology.

Unfortunately due to contract restrictions and privacy concerns, we are unable to share all included developers, partners and exciting opportunities. We can share that two parties have made financial contributions to the development of the wallet of €25.000 and €60.000. The €25.000 is reserved for the integration of the [OpenBadges v3](https://1edtech.github.io/openbadges-specification/ob_v3p0.html) standard, allowing the wallet to be used in the educational sector, while the €60.000 commitment by another party is reserved for tackling security and privacy challenges.

We have also applied to IOTA's Ecosystem Development Fund program, but got rejected due to the  financial downturn of the IOTA token. Our proposal would have been accepted based on the technical breakdown and the added value of our work to the ecosystem but has purely been rejected due to the financial situation of the IOTA ecosystem.

Our main objective is to make our vision of a fair and privacy-friendly digital identity solution a reality. We purposely never did a ICO or NFT sale to fund our development as that would paint an inaccurate picture of our values and believes. We do not want to create speculation around our company and run it as a classical web2 company. We are looking forward to helping the Substrate community and all its Blockchains benefit from SSI and add a lot of utility and an improved user experience to the many projects building on Substrate.
