# Polkadart

- **Team Name:** EXPERIO S M LTDA
- **Payment Address:** 0x67a341f26A9c6211773Bf315B6226105cd1b2F24 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

- Polkadart is a Dart library that provides a clean wrapper around all the methods exposed by a Polkadot/Substrate network client and defines all the types exposed by a node. It's an equivalent to [polkadot-api](https://github.com/polkadot-js/api) written in Dart language.

- Development of a library that allows users to connect to Polkadot/Substrate’s nodes on Flutter platform. 

- The library is already used in a few production environments to decode the storage and extrinsics from Substrate based chains. Today, there are multiple mobile applications built on Flutter and together with React Native it is one of the most popular frameworks to develop multi-platform mobile applications, but until now, there was no possibility to fully interact with Substrate's node.

### Project Details

- An overview of the technology stack to be used:
```
This library will be written purely in Dart technology from scratch.
```
- Documentation of core components, protocols, architecture, etc. to be deployed:
```
We will follow Polkadot specifications and, as a license for Polkadart library, we will use Apache 2.0.
```
- What your project is _not_ or will _not_ provide or implement:
```
This project will not support legacy metadata protocols, such as metadata v9, v10, v11 and v12. Polkadart will not implement any front-end, since it is going to allow developers to use Dart to connect to the Substrate based network.
```
- This is a place for you to manage expectations and to clarify any limitations that might not be obvious:
```
Polkadart is similar to the project "https://github.com/polkadot-js/api" but for Dart, instead of JavaScript.
```

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
Our project is going to allow developers to use Dart/Flutter to connect to the Substrate-based network.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Our target audience is the mobile app developer's community.
- What need(s) does your project meet?
Polkadart enlarges the range of tools compatible with Polkadot/Substrate, therefore expanding its usability.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
Pocket 4 Polkadot-Dart: https://github.com/Pocket4D/Polkadot-Dart#manually-build
Polkaj: https://github.com/emeraldpay/polkaj/blob/master/docs/03-rpc-client.adoc
  - If so, how is your project different?
Pocket4 was similar to PolkaDart but it was discontinued for lack of progress and Polkaj is related to Java.

## Team :busts_in_silhouette:

### Team members

- Leonardo Custodio, Blockchain Engineer
- Lohann Ferreira, Lead Blockchain Architect
- Kawaljeet Singh, Flutter Developer
- Gabriel Okura, Flutter Developer
- Bruno Pastre, Senior Flutter Developer

### Contact

- **Contact Name:** Leonardo Garcia Custodio
- **Contact Email:** leonardo@custodio.me
- **Website:** https://www.linkedin.com/in/leogcustodio/

### Legal Structure

- **Registered Address:** Rua Capitao Souza Franco, 350 - Ap 22 - Curitiba/PR - Brasil
- **Registered Legal Entity:** Experio S M Ltda

### Team's experience

**Leonardo Custodio**

Leonardo has being working with Polkadot/Substrate stack for the past 27 months. At his current position he makes SDKs that allows game developers to work easily with Substrate based chain. Before that he was the Lead Mobile Developer of Inovatso where he has created multiple applications for the general public like picPics and other entreprise applications using Flutter.

**Lohann Ferreira**

Lohann have a deep understanding of Polkadot/Substrate stack amongst other blockchain technologies. Previously worked at [First Foundry](https://www.firstfoundry.co/) as Senior Software Engineer. Founder and lead engineer at [Jurimetric](https://jurimetric.com.br/). Co-founder of [Veever](https://veever.global/), which through the combination of beacons, a web platform, and a mobile app aims to assist people with visual impairment to easily get around and interact with the urban environment. He is focused on solving big problems with simple ambitious solutions.

**Kawaljeet Singh**

Before starting to work as a full-time flutter developer at Rankanizer, Kawal was working as a freelance Flutter Developer at Inovatso and on other projects. In his free time, he loves to create open-source tools and plugins in dart to help the Flutter community. He is a blockchain enthusiast and is super dedicated to learning and bringing ideas to life.

**Gabriel Okura**

Gabriel is currently working as a mobile and backend developer at Hype Empreendimentos, and for the past year and a half, he has been having experience building apps in Dart with the Flutter framework. Previously worked with mobile game development at Opala Studios. He is excited about the opportunity to work on Rankanizer and to help build the PolkaDart library to increase his experience with blockchain technology.

**Bruno Pastre**
Bruno is an iOS specialized Software Engineer who has consulted for large tech companies like Coinbase and Wish. 
He is fascinated about writing scalable, testable and maintainable code and has been working on that for the past four years. He's a Apple Developer Academy alumni, performing both as a student and a Junior Mentor, There, he had the opportunity to share his knowledge with the next generation of iOS developers and empower them to develop themselfs.

### Team Code Repos

- https://github.com/rankanizer
- https://github.com/rankanizer/polkadart
- https://github.com/Lohann
- https://github.com/leonardocustodio
- https://github.com/justkawal
- https://github.com/gabrielokura
- https://github.com/pastre

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/leogcustodio
- https://www.linkedin.com/in/lohannferreira
- https://www.linkedin.com/in/kawal74153
- https://www.linkedin.com/in/gabriel-motelevicz-okura-aa95491b6
- https://www.linkedin.com/in/bpastre

## Development Status :open_book:

Out of the necessity of having a a library / sdk to use substrate chains in our other planned apps. We will start the development of Polkadart in the Grant's program. The repository that will be used during the development is https://github.com/rankanizer/polkadart. We intend to have it open-source since the beginning and all code will be added through pull-requests.

We decided to divide this project into three milestones. The first one is building the codec and metadata part. Since without this all data would have to be mocked and tested using third-party tools as everything is encoded in the substrate eco-system.

After we are able to encode/decode data from primitive types and metadata's of any chain. We are going to proceed with the connectivity part. Where we will implement the interfaces necessary for communicating with the nodes through RPC.

Finally the last step will be the crypto and utils part where we will have the utilities necessary for signing transactions. After these three milestones are completed we shall have a fully featured library that will enable people in the Dart/Flutter ecosystem to communicate with any substrate based node, sign transactions, encode and decode data. Making it possible for example for people to develop flutter applications for Polkadot using native libraries.

## Development Roadmap :nut_and_bolt:

Described above.

## Overview

- **Total Estimated Duration:** 15 months.
- **Full-Time Equivalent (FTE):** 4.
- **Total Costs:** 75,000 USD.

### Milestone 1 — Completed

- **Estimated duration:** 4 months.
- **FTE:**  4.
- **Costs:** 20,000 USD.

|Number|Deliverable|    Specification                   |
|:---: |  ---      |             ---                    |
| 0a.  | License       | Apache 2.0                         |
| 0b.  | Documentation | We will provide markdown documentation of how to install and use the API. |
| 0c.  | Testing Guide | We will provide sample scripts on how to use it. |
| 0d.  | Docker        | We will provide a Dockerfile(s) that can be used to test the PoC. |
| 1a.   | Scale Codec  | First we will port the functionalities of scale codec to Dart. This way developers can decode and encode data from substrate. |
| 1b.  | Metadata      | Then we will add the metadata parser so it can decode/encode the data by looking at the metadata. Important to note that we do not inteed to support legacy versions |
| 1c.  | Tests         | Unit tests for deliverables above  |


### Milestone 2 — Completed

- **Estimated duration:** 1 month.
- **FTE:**  4.
- **Costs:** 15,000 USD.

|Number|Deliverable|    Specification                   |
|:---: |  ---      |             ---                    |
| 0a.  | License       | Apache 2.0                         |
| 0b.  | Documentation | We will provide markdown documentation of how to install and use the API. |
| 0c.  | Testing Guide | We will provide sample scripts on how to use it. |
| 0d.  | Docker        | We will provide a Dockerfile(s) that can be used to test the PoC. |
| 2a.  | RPC        | We will create the interfaces to use and connect to the node through RPC. |
| 2b.  | Websockets | We will add websockets support to the above. |
| 2e.  | Tests     | Unit tests for deliverables above  |

### Milestone 3 — Ongoing

- **Estimated duration:** 6 months
- **FTE:**  2.
- **Costs:** 20,000 USD.

|Number|Deliverable|    Specification                   |
|:---: |  ---      |             ---                    |
| 0a.  | License          | Apache 2.0                         |
| 0b.  | Documentation    | We will provide markdown documentation of how to install and use the API. |
| 0c.  | Testing Guide    | We will provide sample scripts on how to use it. |
| 0d.  | Docker           | We will provide a Dockerfile(s) that can be used to test the PoC. |
| 0e.  | Article/Workshop | We will publish an example flutter project using the library to explain what was done and how to use it. |
| 3a.  | Substrate Uri    | Implement Substrate's standard derivation format that applies to seeds and mnemonics. |
| 3b.  | Encrypt/Decrypt  | Use Substrate's Bip39 password to encrypt/decrypt seeds and mnemonics. |
| 3c.  | Ed25519          | Support Ed25519 signatures and key derivation |
| 3e.  | Sign & Verify    | Sign and verify messages using ed25519 keypairs |
| 3f.  | Substrate Signed Extensions | Support substrate's signed extensions |
| 3g.  | AssetHub Signed Extensions | Support AssetHub's signed extensions |
| 3h.  | Transaction Subscriptions   | Support transaction subscription |
| 3i.  | Event Subscriptions         | Support runtime event subscription |
| 3j.  | Keyring          | Create a package that manage a set of keys in a consistent environment |
| 3k.  | Crypto           | Utilities needed for signing, hash and encode/decode messages |
| 3l.  | Tests            | Unit tests for deliverables above  |
| 3m.  | Pub.dev          | Publish to pub.dev                 |

### Milestone 4 — 

- **Estimated duration:** 4 months
- **FTE:**  2.
- **Costs:** 20,000 USD
  
|Number|Deliverable|    Specification                   |
|:---: |  ---      |             ---                    |
| 0a.  | License       | Apache 2.0                         |
| 0b.  | Documentation | We will provide markdown documentation of how to install and use the API. |
| 0c.  | Testing Guide | We will provide sample scripts on how to use it. |
| 0d.  | Docker        | We will provide a Dockerfile(s) that can be used to test the PoC. |
| 4a¹.  | Research sr25519 | More research needs to be done to decide what is the best path forward to support sr25519, one of the following might be done |
| 4a².  | Rewrite Schnorrkel in Dart | Rewrite [schnorrkel](https://github.com/w3f/schnorrkel) in pure dart |
| 4a³.  | Use rust schnorrkel | Make dart wrappers to use rust bindings to use schnorrkel lib |
| 4b.  | Ecdsa/Secp256k1  | Support Ecdsa/Secp256k1 signatures and key derivation |
| 4c.  | Sign & Verify    | Sign and verify messages using sr25519 and ecdsa keypairs |
| 4e.  | Custom RPC | Support custom RPC methods |
| 4f.  | Custom Signed Extensions | Support custom signed extensions |
| 4g.  | Multisig Account | Implement's Substrate's Multisig Account |
| 4h.  | Tests            | Unit tests for deliverables above  |
| 4i.  | Pub.dev          | Publish to pub.dev |

## Future Plans

Until now we are bootstrapping, but we intend to continue to support the project with W3F Grant's help. 

Our intention is to make the library available to whoever has an interest in using it. We need it to build Rankanizer, the next-generation app for enabling multiple-choice anonymous voting. Rankanizer will be a transparent and decentralized voting software built on blockchain technology.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Lohann was informed about the Grants Program by personal recommendation.

💾 **Work you have already done.**

**Lohann's previous work:** \
[Forte](https://forte.io) \
[Rally](https://rally.io) \
[Efinity](https://efinity.io) \
[Collectiba](https://www.youtube.com/watch?v=QftJoDz2JXU)

**Binder's previous work:** \
[Software project: Cluster](https://clusterforchange.com/) - Social Impact Platform. Project Manager, Software Architect. \
[Award: Apple Distinguished Educator 2019](https://www.apple.com/education/k12/apple-distinguished-educator/) \
[PHD Thesis](https://pergamum-biblioteca.pucpr.br/acervo/338937) \
[StackOverflow: 12.000+ points (top 3% overall)](https://stackoverflow.com/users/86154/fabio-vinicius-binder) \
[Personal Researcher Profile on Scopus](https://www.scopus.com/authid/detail.uri?authorId=56730458300)

**Kawal's previous work:** \
[AnimatedText](https://github.com/justkawal/animated_text) \
[Protect](https://github.com/justkawal/protect) \
[Tenor](https://github.com/justkawal/tenor) \
[Excel](https://github.com/justkawal/excel)
