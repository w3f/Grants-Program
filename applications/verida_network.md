# Verida

- **Team Name:** Verida PTE LTD
- **Payment Address:** 0x1596525C44f68b45CDd53db49b03A390e2687331 (USDC)
- **Level:** 2

## Project Overview :page_facing_up:

Verida will bring single-sign on, decentralized identities, messaging and private data storage to the Polkadot ecosystem.

This is Verida’s first proposal to the W3F Grants program.

### Overview

The Polkadot ecosystem enables a variety of application specific blockchains to provide decentralized computation capabilities. While this is enormously beneficial for building the next generation of Web3 applications, there are additional technical capabilities required to build applications capable of replacing existing Web2 incumbents.

The Verida network provides this missing Web3 infrastructure for developers and end users.

Please refer to the Development Status section for links to developer documentation, demos, interactive tutorials and reference implementations which showcase the technology and core components.

#### Developers

Here is an overview of the additional decentralized capabilities that will be enabled for application developers in the Polkadot ecosystem.

<img width="495" alt="image" src="https://user-images.githubusercontent.com/92969583/160052399-1de25ad1-9ffe-4a4b-88d7-7c9723d731a7.png" />


Verida provides a developer SDK to access the Verida decentralized personal data network. The Typescript SDK works across web, server and mobile platforms. Learn more via the Verida Developers Portal.

The SDK enables developers to easily access:

1. Identities - Decentralized identities on the Verida network that enable service discovery, messaging, encryption and signature schemes
2. Authentication - Decentralized QR code based single sign-on for any application
3. Messaging - Decentralized peer to peer messaging protocol for requesting transactions, sharing private data and much more
4. Private storage - Decentralized personal data storage for sensitive information for end users

This project will provide a turnkey SDK for developers to use the Verida SDKs and the PolkadotJS SDK to build powerful, feature rich applications on Polkadot.

#### End users

Verida provides a mobile wallet application (Verida Vault) that combines a traditional crypto wallet with the additional decentralized capabilities of the Verida network (identity, single sign-on, messaging, private data etc.).

This provides an entry point for end users to easily access these new technologies with Polkadot applications in a simple, easy to use way.

Example Single Sign-On requests:

<img width="580" alt="image" src="https://user-images.githubusercontent.com/92969583/160052493-41df2558-eb5f-4dcc-bfb5-869784807c68.png" />


Example crypto wallet screens for Polkadot projects:

<img width="566" alt="image" src="https://user-images.githubusercontent.com/92969583/160052512-9ed92a8c-1626-45a1-857d-7c638ca753ba.png" />


This project will initially add support for the DOT token in the Verida Vault, with other application specific chains and tokens to be supported as the project progresses.

#### Increase the use cases and industries accessible by Polkadot applications

Connecting Verida’s decentralized Web3 infrastructure with Polkadot’s application specific chains will unlock a range of new use cases that aren’t possible with blockchain technology alone.

One important use case is KYC credentials. The Verida network allows a user to complete a KYC process with third party credential issuers, store that credential securely and then present to decentralized applications where required.

These credentials can be used to enable DeFi applications on Polkadot to meet new regulatory requirements requiring all users to pass KYC and AML checks.

The credentials can also be used to provide a unique identifier of an individual across multiple chains and multiple addresses. This unlocks the ability to airdrop tokens to an individual person rather than an individual address, that can be exploited. It also allows free / low transaction fees to be allocated to individual users.

Visit the [solutions page on the Verida website](https://www.verida.io/solutions) for a more detailed breakdown of use cases and new industries that will be unlocked for the Polkadot ecosystem.

### Project Details

This project will connect the Verida decentralized infrastructure to any application in the Polkadot ecosystem. This will enhance existing applications while opening up many new use cases and industries to build Web3 applications on Polkadot.

There are several key pieces of development work to support this integration across the Verida Vault and Verida developer SDKs.

#### Verida Vault

The Verida Vault will be updated to natively support the Polkadot relay chain and DOT token. This will make it easy for end users to access both Polkadot and Verida network capabilities from one application.

As part of this integration, and as a valuable early use case, this project will enable any network user or application to easily request DOT from another user on the network via the Verida messaging service.

#### PolkadotJs + Verida SDK integration

The PolkadotJs SDK will be integrated with the Verida SDK to provide a powerful suite of tools for application developers to access a full range of Web3 capabilities.

This will enable Polkadot developers to leverage Verida decentralized identities, single sign-on, personal off-chain encrypted databases and messaging alongside the capabilities of their own application specific chains.

More specifically, this integration will allow an end user to sign into a Polkadot application using the Verida Single Sign-On feature. Once signed in, the user will have unlocked Verida’s network features (identity, private storage, messaging etc), while also unlocking the ability for the application to request a user to sign transactions for a specific parachain. This will provide a powerful set of technical capabilities via a very simple QR code sign in process.

Initially the ability to sign transactions will be enabled via the Verida messaging service. WalletConnect 2.0 is currently adding support for non-EVM chains such as Polkadot. Once WalletConnect 2.0 is adopted, an option will be available for developers to auto-enable a WalletConnect 2.0 connection as part of the sign in process.

#### Personal Data, Credentials & Messaging

Once complete, the PolkdotJs and Verida SDK integration will enable Polkadot applications to request verifiable credentials from end users (e.g. KYC), store encrypted personal data on behalf of users and send them message notifications (e.g. margin call on a DEX).

Documentation, tutorials and other educational materials will be developed specifically for Polkadot developers looking to integrate these capabilities into their applications.

#### Multiple Parachains

The Polkadot ecosystem consists of many parachains. While this offers great flexibility, it also introduces challenges to easily add support for those parachains in different wallet applications.

Leveraging the Verida network messaging service, a new type of message (“Add Polkadot Parachain”) will be created. This will allow any Polkadot application to send a secure message to a user on the Verida network inviting them to add their parachain into the wallet.

A user-friendly interface will be presented to the user, the request will be signed to prevent phishing attacks and the message will include all the essential system information (i.e. endpoint(s)) to interact with that parachain.


### Ecosystem Fit

Numerous wallets are available in the Polkadot ecosystem which provide self-custody for end users to manage their cryptocurrency transactions, but none exist to facilitate interactions with personal data, identities and messaging.

Verida provides a mobile application called the Verida Vault which acts as both a ‘Data Wallet’ and a ‘Crypto Wallet’ with private key management and a user-friendly interface for interacting with the Verida network and supported blockchains. Using the Vault, users can browse their decrypted data and consensually share their data with other applications via their decentralized identity. This unlocks many exciting new use cases for decentralized applications.

There is a lack of single sign-on infrastructure within the Polkadot ecosystem. Verida provides missing pieces of infrastructure for developers to build in Web3 including single sign-on, portable decentralized identities and credentials for Polkadot applications. Verida will enable data interoperability across parachains in the Polkadot ecosystem for private data sharing, single-sign on and identity management.

Traditional Web3 software applications regularly message users (via email or mobile push notifications) to provide an enhanced user experience and to retain users. This is a critically missing piece of infrastructure in the evolving Web3 architecture. The Verida network provides this messaging infrastructure and is multi-chain, making it ideally suited to provide a backbone of messaging across the whole ecosystem of Polkadot applications. Examples include; margin call warnings from DEX’s, notification and reminders about DAO votes, in-game messages and much more.

Integrating Polkadot and the DOT token into Verida Vault will allow users to connect their Polkadot address to Verida’s decentralized identity framework for enhanced user identity profiles. It will allow developers in the Verida ecosystem to choose Polkadot and its parachains as their choice of blockchain for building and deploying their Web3 applications.

There is a growing need for regulatory compliant decentralized applications from initiatives such as the [Financial Action Task Force](https://www.fatf-gafi.org/) (FATF). Integrating with the Verida network opens up future possibilities for a standard, re-usable KYC credential to operate across the whole Polkadot ecosystem that is both FATF compliant and meets the industry expectations around privacy and security. Verida is actively working with compliance experts and industry leaders to bring these solutions to the network.

The Polkadot ecosystem is a collection of interoperable blockchains. The Verida network is designed to be multi-chain, which is well suited to Polkadot’s multi-chain architecture. This ensures a framework is in place to easily add support for new parachains and provides a user experience natively designed for multiple chains.

Once complete, this integration opens up the possibilities for future capabilities on the Verida network to be brought to the Polkadot ecosystem. These include bridging off-chain data to on-chain smart contracts, a trust framework and data marketplaces.


## Team :busts_in_silhouette:

### Team members

- Chris Were (CEO, Co-founder, Solution Architect)
- Nick Lothian (Head of Product)
- Yolanda Sam (Grant / Delivery Manager)


### Contact

- **Contact Name:** Yolanda Sam / Chris Were
- **Contact Email:** hello@verida.io
- **Website:** https://www.verida.io/

### Legal Structure

- **Registered Address:** 160 Robinson Road, 14-04 Singapore Business Federation Centre, SGP 068914
- **Registered Legal Entity:** Verida PTE LTD

### Team's experience

**Chris Were** (CEO and co-founder, [@tahpot](https://github.com/tahpot))
Chris is an Australian based technology entrepreneur who has spent more than 20 years devoted to developing innovative software solutions. He’s led the development of Verida, a decentralized, self-sovereign data network. Chris previously co-founded Community Data Solutions, providing secure CRM solutions for not-for-profit organizations and government, growing the company to 150 enterprise customers across Australia.

**Nick Lothian** (Head of Product, [@nick-verida](https://github.com/nick-verida))
Nick is an experienced software professional with over 20 years of experience in a wide variety of roles. Prior to joining Verida he started and successfully exited an Artificial Intelligence company. He has significant experience in standards (eg W3C ActivityStream, JSR168) and open source (Apache Foundation).

**Verida Engineering Team**
The Verida engineering team consists of 6+ software engineers with expertise in Web3 development, Solidity smart contracts, Mobile Development and DevOps.

### Team Code Repos

A collection of Verida repos can be found here https://github.com/verida

Repos relevant to this grant proposal include:

- https://github.com/verida/verida-js
- https://github.com/verida/storage-node
- https://github.com/verida/vault-auth-server
- https://github.com/verida/wallet-utils


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/company/verida-technology
- https://www.linkedin.com/in/nicklothian/
- https://www.linkedin.com/in/chriswere/
- https://www.linkedin.com/in/yolandasam/


## Development Status :open_book:

We have made significant progress on the Verida roadmap, including releasing the Whitepaper, Alpha protocol, reference implementations, demos and developer documentation.

- Verida Whitepaper: https://www.verida.io/whitepaper
- Developer Documentation https://developers.verida.io/
- Interactive Tutorials: https://developers.verida.io/docs/tutorial/introduction
- Demos: https://developers.verida.io/docs/demos
- Summary on Alpha protocol release: https://news.verida.io/alpha-protocol-release-start-building-privacy-preserving-web3-dapps-with-verida-e5cedfc15878
- Reference Implementations
- Vault Showcase: https://github.com/verida/vault-showcase
- Account Explorer: https://github.com/verida/account-explorer
- Markdown Editor: https://github.com/verida/markdown-notes-demo
- Credentials Management Platform: https://github.com/verida/Credentials-Management-Platform
- Getting Started with Verida Vault: https://docsend.com/view/nft2dbdpquf8z7bh
- Web3 Builders Deck: https://docsend.com/view/n29fx369jiq62ayu

The focus of this grant proposal is to build and enhance existing capabilities and make them developer-ready for builders in the Polkadot ecosystem.

### Verida Self-Funded Contribution

As part of this proposal, Verida will self-fund the software development to provide DOT support in the Verida Vault, and support for requesting a DOT payment via Verida decentralized messaging. This work will provide the necessary foundation to enable self-sovereign identity claims, verifiable credentials, encrypted personal data storage, single sign-on, and more for Polkadot as outlined in future milestones.
Verida Self-Funded Contribution

| Number | Deliverable | Specification |
| :------ | :-------- | :--------------- |
| 1 | DOT support in Verida Vault
| 1a. | Sign transactions | Add PolkadotJS support into the Verida Vault to support signing transactions
| 1b. | Submit transactions | Add PolkadotJs support into the Verida Vault blockchain API to submit transactions on chain
| 1c. | Transaction history | Support fetching and building up transaction history information for Polkadot addresses
| 1d. | On-chain events | Support listening to on-chain events relating to new transactions for Polkadot addresses
| 1e. | Transaction fee | Support for fetching and displaying transaction fee information
| 1f. | DOT token support | Add support for the DOT token on the Polkadot parachain
| 1g. | DOT token price | Support fetching price information for the DOT token
| 1h. | CAIP compatibility for Polkadot | Support CAIP compatible token specifications for Polkadot
| 1i. | Unit tests | Develop unit tests for all new capabilities
| 2 | Support requesting a DOT payment via Verida message
| 2a. | Payment Request schema | Define a new inbox message schema for “Payment Request” message types that includes the recipient address and a description of the request purpose
| 2b. | Payment Request screens | Design new Verida Vault screens for handling “Payment Request” inbox messages
| 2c. | Facilitating DOT payment | Implement an inbox handler that facilitates making a payment in DOT tokens to the requested address
| 2d. | Edge case handling | Handle edge cases such as insufficient DOT tokens
| 2e. | Purchase DOT | Redirect the user to purchase more DOT tokens if required
| 2f. | Unit tests | Develop unit tests for the inbox handler
| 2g. | Documentation | Document how Polkadot developers can initiate a Payment Request

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1.7 FTE
- **Total Costs:** 50,000 USD

See below for a summary of the software licencing for deliverables on the roadmap.

| Name | Description | Licence | GitHub Link |
| :--- | :----------- | :------- | :----------- |
| verida-js | The core Verida protocol library | ISC (MIT equivalent) | https://github.com/verida/verida-js |
| Verida Account Explorer | A web front end showing details of each DID | ISC  (MIT equivalent) | https://github.com/verida/account-explorer/ |
| Wallet-Utils | Integration library between the Verida Vault and blockchains | ISC (MIT equivalent) | https://github.com/verida/wallet-utils |
| Auth Server | Decentralized server that faciliates single sign-on connections | ISC (MIT equivalent) | https://github.com/verida/vault-auth-server

### Milestone 1 - Single Sign-On for Apps in Polkadot Ecosystem

- **Estimated Duration:** 2 months [Expected delivery June 2023]
- **FTE:**  1.7 FTE
- **Costs:** 50,000 USD

We are seeking a level 2 grant for the following deliverables:

1. Single Sign-On (SSO) for DOT applications
2. Implement generic transaction support for Polkadot
3. Support requesting a Verifiable Credential from a Polkadot dApp
4. Support storing encrypted personal data within a Polkadot dApp

Single sign-on will provide users with a seamless experience for signing in across Polkadot dApps. Powered by Verida’s decentralized identity framework, these capabilities will allow users to maintain self-sovereign identity, without sacrificing on the user experience.

We will provide the capabilities for developers to request verifiable credentials and build Polkadot dApps with encrypted data storage for private and sensitive data. This enables Polkadot developers to build user-oriented, privacy-preserving, feature rich dApps across industrial verticals including DeFi and metaverse.

| Number | Deliverable | Specification |
| :------ | :-------- | :--------------- |
| 0a. | License | ISC (MIT equivalent)
| 0b. | Documentation | We will provide both inline documentation of the code and update the necessary tutorials that explain how a user can use the application.
| 0c. | Testing | Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests.
| 0d. | Docker | N/A - We are not providing any infrastructure. All functionality can be tested via unit tests in the repo's.
| 0e. | Article | We will publish an article that explains what was done as part of the grant.
| 1. | Single Sign-On (SSO) for DOT applications
| 1a. | Establish SSO request | Support establishing a SSO request for a Polkadot dApp
| 1b. | Link Polkadot to Verida DID | Support linking a Polkadot account to a Verida DID account to unlock messaging and payment use cases
| 1c. | Show available Polkadot addresses | Support specifying a list of available Polkadot addresses for the user to select from
| 1d. | Specify Polkadot address | Support a user specifying their Polkadot address during user sign
| 1e. | Documentation | Document how Polkadot developers can establish a SSO request for a Polkadot dApp
| 2.  | Implement generic transaction support for Polkadot
| 2a. | Support transaction signing | Support an application requesting a transaction to be signed by the end user
| 2b. | Support transaction submission | Support an application requesting a transaction to be signed and submitted by the end user
| 2c. | Support signing any message | Support an application requesting a message to be signed by the end user
| 2d. | Unit tests | Develop unit tests for the integration
| 2d. | Documentation | Document how Polkadot developers can initiate a WalletConnect connection during user sign in
| 3. | Support requesting a Verifiable Credential from a Polkadot dApp
| 3a. | Documentation | Document how a Polkadot dApp can make a Verifiable Credential request once connected
| 4. | Support storing encrypted personal data within a Polkadot dApp
| 4a. | Documentation | Document how a Polkadot dApp can create, update, view, query and delete encrypted private data for a user of their application


## Future Plans

We will produce articles, tutorials and other content to promote the work completed in this grant proposal through our community channels.

### Off-chain Data Bridge

Following the completion of this grant proposal, future capabilities on the Verida roadmap which could bring value to the Polkadot ecosystem include bridging off-chain personal data to on-chain decentralized applications.

The Verida network stores personal data for end users. Every piece of data is signed by the originator of the data. For a patient record, a hospital visit may be signed by the doctor. For an insurance policy claim, a police incident may be signed by a police officer.

Verida has developed a way to securely use this off-chain signed data as an input to smart contracts in a gas efficient manner. This capability unlocks a huge range of new use cases for smart contracts that can be leveraged by Polkadot applications.

### Expanding the Data Ecosystem

We are also developing an API Connector framework, trust framework and data schemas to enhance trust and enable growth in the Verida network. Once the Polkadot integration is complete, these capabilities can be unlocked for the broader Polkadot ecosystem.

### Supporting additional Polkadot Parachains

Building on the foundational work completed as part of this grant proposal, Verida will be able to build support for additional parachains in the Verida Vault based on Chain Agnostic Improvement Proposal (CAIP) standards. Further examples and tutorials will be developed to support and enable developers.

More details on our future plans can be found in the [Verida Whitepaper](https://www.verida.io/whitepaper).

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Verida has had numerous conversations with Rohan Joseph and Surag Sheth from Parity Labs about Verida support for the Polkadot ecosystem.

**Work already completed**

- Verida’s Alpha Protocol Release was made available in November 2021
- The Verida Whitepaper was released in February 2022
- Developer Documentation, including demos and interactive tutorials, continues to be updated to support developers building on Verida

**Previous grants**

We have previously been successful in receiving grants from Open Web Collective and NEAR.
