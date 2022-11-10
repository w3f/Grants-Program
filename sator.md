# Sator x Polkadot Grant Proposal

- **Team Name:** Sator 
- **Payment Address:**  0x5c95d9BFF0f672562df784a5787eeA621a01dBDB (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1, 2 or 3

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Sator project concerns technology infrastructure to onramp global content to web3 at-scale. Specifically, Sator technologies enable the tokenization of network effect value surrounding streaming content that diffuses value throughout the ecosystem. Sator project empowers non-crypto-natives with digital in-app wallets that will include Polkadot which requires the creation of in-app wallet support on Substrate, using Parity signer technology and Polkawallet SDK. Polkadot in-app wallet support unlocks the following features:

- Users are able to view, burn (if an option exists), and transfer their NFTs through the Polkadot wallet. 
- Users are allowed to create their own NFTs and collections via wallet. There also will be an option to create NFTs for a user profile photo, quiz rewards, etc.
- Using DOT wallet functionality, users can make transactions to contracts directly.
- With the wallet, our users can subscribe for events directly from smart contracts (use case: the new quiz of trivia on-chain will have a start time and users can subscribe and get notifications about it in the app)
- In the wallet (also) users will be able to view all their bids and active auctions they have alive.

Sator infrastructure focuses on solving friction for content rights holders and audiences to align interests and benefit from Polkadot in-app wallet functionality. It is important to create this solution to actually onboard content fully to web3 ownership models especially in the case of large slates of content. 


### Project Details

<img width="1579" alt="Screen Shot 2022-10-25 at 4 25 58 PM" src="https://user-images.githubusercontent.com/54420219/197875182-cb29b308-48a7-4e24-9726-fe5c254c3643.png">

<img width="1583" alt="Screen Shot 2022-10-25 at 4 30 03 PM" src="https://user-images.githubusercontent.com/54420219/197875805-9aff4a3a-f000-469c-b6ed-12bfb2b1471b.png">

<img width="1584" alt="Screen Shot 2022-10-25 at 4 30 13 PM" src="https://user-images.githubusercontent.com/54420219/197875852-183ea43f-8c70-454b-b27c-961ed6c8f566.png">

### Ecosystem Fit

In this proposal, we raise the idea of building governance-focused cross-wallet support in our existing mobile app on iOS and Android. The app is in production and we are actively adding new in-app features regularly to appeal to our users. A cross-wallet DOT integration with our existing in app wallet native to Solana will encourage users to take part in various on-chain governance actions and be able to interact with on-chain governance activities in a low friction manner, thus improving the on-chain governance engagement. We are looking to have our app be accesible across multiple blockchains in an open format. Currently, the app only functions on the Solana network, and we see Polkadot as a great next step to improve multi-chain connectivity and interaction with other blockchains. This is a heavy lift but something we think is beneficial to our users and holders, and a great way to onboard the Polkadot ecosystem to our entertainment application. Longer build will include on-chain governance via substrate parachain, once we add DOT wallet functionality.

## Team :busts_in_silhouette:

### Team members

- Isla Perfito (Co-Founder, CEO/CTO) Isla is a Data Scientist and Blockchain Engineer. As the Chief Technology Officer of Sator, Isla is responsible for designing and building Sator technical product as well as managing initial and ongoing Sator development. Isla’s experience includes leading Data Science and development on the Digital Assets team at Credit Suisse and Blockchain Engineering at unicorn startup Chainalysis. Isla graduated from NYU with a degree in Computer Science.
- Chris Martin (Co-Founder, CRO) Series 7 & 63 licenses, Chris led crypto at Potomac Investments including representing Pantera Capital. Prior to that, Chris advised Wyre (crypto onboarding ramp), Aventus (a 2017 ICO) and Breakaway Festival (largest U.S. independent music festival and producers of first crypto music festival). Chris served as VP of STW Fixed Income and Bank Examiner Intern at the Federal Reserve System. Chris was also elected Trustee of the University of Colorado where Chris graduated Summa Cum Laude.
- Dmitry Momot VP Engineering, Sator. 8 years of experience building mobile applications.
- Nicko Hryschenkov, Product Manager
- Vlad Garhuska, Senior unity engineer
- Bohdan Bodarenko, Game design lead
- Rich Martinez, VP Marketing


### Contact

- **Contact Name:** Chris Martin
- **Contact Email:** sator@sator.io
- **Website:** sator.io

### Legal Structure

- **Registered Address:** 1831 12th Ave South Nashville TN 37203 United States
- **Registered Legal Entity:** Sator.io Corp

### Team's experience

We are an experienced team, our current project is Sator. In the past the Sator core team have launched Storj, managed digital assets dev at Credit Suisse, developed blockchain software at Chainalysis, derivatives trading and more.

### Team Code Repos

https://github.com/SatorNetwork

Contributions SATOR dev team has made to other projects:
-https://github.com/hellobloom
-https://github.com/affinityproject
-https://github.com/storj/storj
-https://github.com/nemgrouplimited/symbol-desktop-wallet
-https://github.com/onomyprotocol/market
Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

-https://github.com/islaperfito
-https://github.com/dmitrymomot
-https://github.com/BruSD
-https://github.com/ValeriiLav
-https://github.com/Qweder93
-https://github.com/Sator-Moon
-https://github.com/mbortsov
-https://github.com/NickolayH

Team LinkedIn Profiles (if available)
Christina Martin https://www.linkedin.com/in/chrismartinhodl/
Isla Perfito https://www.linkedin.com/in/islarose/

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,

- make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
- include the amount of funding requested _per milestone_.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 4 FTE)
- **Total Costs:** Requested amount in USD for the whole project: $70,000 USD. Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 — Polkadot Wallet Integration

- **Estimated duration:** 3 months
- **Costs:** 32,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can transact using Sator in-app DOT wallet, and show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how to use in-app DOT wallet. |
| 1. | Overview |  In this milestone we will complete the integration of a Polkadot wallet which allows for simple and easy access to private keys and signing transactions, adding DOT ecosystem functionality to our holders. |
| 2. | Wallet SDK | We will  test Parity Signer wallet and Polkawallet SDK 0.5.0 for integrating substrate-based blockchain as a plugin. |
| 2a. | Dart Package | Building a polkawallet_plugin dart package |
| 3. | Polkadot-JS API | Build Polkadot-JS wrapper |
| 3a. | API wrapper | The App will use a polkadot-js/api instance running in a hidden webView to connect to a remote node on Polkadot. |
| 4. | Seamless wallet UI | We will deliver sample wallet UI that allows a user to switch between SOL (current) and DOT wallet directly in app on iOS/Android.


### Milestone 2 — Add DOT functionality to NFT Marketplace

- **Estimated Duration:** 3 months
- **Costs:** 33,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can transact using Sator in-app DOT wallet, and show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how to use in-app DOT wallet. |
| 1. | Overview |  In this milestone we will complete the integration of Polkadot NFT functionality which allows for collecting Polkadot NFTs from our marketplace nft.sator.io |
| 2. | React Package Upgrades | We will upgrade NFT Marketplace react packages and wallet adapters in order to support Polkadot NFTs in our marketplace. Without react package upgrades, this could otherwise break the marketplace. |
| 2a. | Polkadot.js Extension | Install Polkadot (.js) Extension|
| 3. | Smart contract | We will deploy our custonm marketplace smart contract by using a matcher, Wasm and metadata.json files |
| 3a. | Efinity | We will explore working with Efinity for NFT bridging and paratoken integration which would be a standard for token migration across different parachains in the Polkadot ecosystem, but also into and out of Ethereum and other EVM systems|
| 4. | Polkadot-JS UI | Browser based wallet used with Polkadot-JS Extension: We will deliver sample wallet UI using the Polkadot-JS UI for browser based wallet integration to Sator NFT Marketplace |

### Milestone 3 — End-to-End Tests

- **Estimated duration:** 3 months
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can transact using Sator in-app DOT wallet, and show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | End-to-end tests |  We provide end-to-end tests that test the interplay between the new components. |
...


## Future Plans

<img width="1579" alt="Screen Shot 2022-10-25 at 4 48 36 PM" src="https://user-images.githubusercontent.com/54420219/197878945-7b62306e-0771-455a-a3e6-0284eb55a694.png">


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation from Parity team.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:
Download our app in the iOS app store or Google play store. Our Streaming TV application will be available on a SmartTV near you ;)
