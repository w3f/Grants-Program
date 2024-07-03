# Polkadart Extension

- **Team Name:** EXPERIO S M LTDA
- **Payment Address:** 167QS6UiF1ZJBkHtngCBoHTSbLm4Rokc2ehfFBEniEGQXB4k (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Polkadart is the equivalent of polkadot-js but written in Dart. Now, Dart and Flutter devs can create a wallet, manage keyring, connect to an RPC node, sign transactions, generate and use multi-sig accounts, decode and encode data, and interact with any Polkadot-based chains.

The library is already used in production environments on mobile wallets, dApps, and other applications, as can be seen by the support we have been providing to multiple people at GitHub.

Though we are very proud of what we have built, there are things that were out of the scope of the first grant, and we believe that it would be very beneficial to the community to create them. Thus, we are proposing an extension, more packages, to add to Polkadart.

### Project Details

Polkadot supports smart contracts, a powerful tool for anybody looking to make a decentralized application.

In terms of smart contracts, we are proposing:

- Abi encode & decode
- Support for contract metadata v0, v1, v2, v3, v4.
- Deployment of WASM contracts
- Send contract transactions

Additionally, we are proposing to extend the documentation significantly. We would like to create a website with many examples and tutorials and also extensive documentation on how to use the library.
We do have examples and documentation on every single package, but we believe that with a reasonable amount of time, making something like https://polkadot.js.org/docs/
This would be a great addition to the community as it allows junior developers to understand the lib and the whole concept of Polkadot, allowing more people to get on board the Polkadot ecosystem.


### Ecosystem Fit

Our new goal is to allow Dart/Flutter developers from any level, even those who are just starting to learn the language or entering the Polkadot ecosystem, to interact with Polkadot-based networks and create their own solutions and applications.

According to the latest [Stack Overflow Survey 2023](https://survey.stackoverflow.co/2023/), Flutter has already overtaken React Native as the most used framework. This means the Flutter ecosystem keeps growing in the mobile market, which is a great opportunity to attract more developers to the Polkadot ecosystem.

## Team :busts_in_silhouette:

### Team members

- Leonardo Custodio, Blockchain Engineer
- Kawaljeet Singh, Flutter Developer
- Talles Borges, Software Engineer

### Contact

- **Contact Name:** Leonardo Garcia Custodio
- **Contact Email:** leonardo@custodio.me
- **Website:** https://www.linkedin.com/in/leogcustodio/

### Legal Structure

- **Registered Address:** Rua Cap Souza Franco, 350 - Ap 22 - Curitiba-PR - Brazil
- **Registered Legal Entity:** Experio S M Ltda

### Team's experience

**Leonardo Custodio**

Leonardo Custodio is a Blockchain Engineer with a robust software development background. He has over three years of dedicated experience in Polkadot-related technologies and five years of experience as a Flutter developer. Currently, he is engaged in creating innovative SDKs tailored for game developers, enabling seamless interactions with blockchain systems. In his previous roles, he served as a Tech Lead at Athletico and as a Lead Mobile Developer at Inovatso.

**Kawaljeet Singh**

Kawal has extensive hands-on experience in Flutter and has good understanding of Polkadot’s stack and protocols. With numerous apps published on iOS and android in Flutter ranging from data-management to live appointment systems and drag-and-drop desktop designing tool, he brings good knowledge and vast skill-sets to the team. In his free time he is focused on developing Flutter tools and libraries like [excel](https://github.com/justkawal/excel) useful to ease developers work. On week-ends, he publishes complex [UIs](https://github.com/justkawal/ui) made in Flutter to showcase Flutter’s use-cases.

**Talles Borges**

Talles Borges is an experienced Software Engineer with over 11 years of experience. He worked across various technologies, including native iOS, Android, and C++ for game development. Talles ran his own game studio for five years, leading a team and helping the studio achieve over 100 million downloads. Currently, he works as a full-stack developer responsible for API development. Talles is proficient in blockchain technology, particularly Polkadot-related projects.

### Team Code Repos

- https://github.com/leonardocustodio/polkadart
- https://github.com/leonardocustodio
- https://github.com/justkawal
- https://github.com/tallesborges

### Team LinkedIn Profiles

- https://www.linkedin.com/in/leogcustodio
- https://www.linkedin.com/in/kawal74153
- https://www.linkedin.com/in/tallesborges

## Development Status :open_book:

Not started

## Development Roadmap :nut_and_bolt:

## Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 1.5
- **Total Costs:** 30,000 USD

### Milestone 1

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 8,000 USD

| Number | Deliverable       | Specification                                                                                                                                                                                                |
|:------:|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  0a.   | License           | Apache 2.0                                                                                                                                                                                                   |
|  0b.   | Documentation     | Provide a documentation website that the community can update                                                                                                                                                |
|  1a.   | Document API      | Explains numerous concepts of polkadot RPC, chain state, runtime calls, transactions, all methods of the API, how to use them, why use them, what to expect, what to avoid, etc.                             |
|  1c.   | Examples API      | Make code examples using the methods that a developer would probably use for multiple use cases and scenarios.                                                                                               |
|  1d.   | FAQ API           | Explains possible errors and concepts that could cause a developer to need clarification about the behavior of an interaction.                                                                                             |
|  2a.   | Document Metadata | Explain how metadata works, how to encode and decode stuff, how they differ from networks, how to generate static types from the metadata, how to get information like constants, and how it works at a low level. |
|  2c.   | Examples Metadata | Make code examples using the methods that a developer would use for multiple use cases and scenarios.                                                                                               |
|  2d.   | FAQ Metadata      | Explains possible errors and concepts that could cause a developer to need clarification about the behavior of an interaction.                                                                                             |
|  3a.   | Document Keyring  | Explains keyring, address, ss58 formats, signature, mnemonic, multi-sig, and security best practices.                                                                                                             |
|  3b.   | Examples Keyring  | Make code examples using the methods that a developer would probably use for multiple use cases and scenarios.                                                                                               |
|  3c.   | FAQ Keyring       | Explains keyring, address, ss58 formats, signature, mnemonic, multisig, and security best practices.                                                                                                             |

### Milestone 2

- **Estimated duration:** 3 months
- **FTE:**  1.5
- **Costs:** 22,000 USD

| Number | Deliverable        | Specification                                                                  |
|:------:|--------------------|--------------------------------------------------------------------------------|
|  0a.   | License            | Apache 2.0                                                                     |
|  0b.   | Documentation      | Documentation into the package repository                                      |
|  0c.   | Examples           | Some simple examples of how to use it                                          |
|  0b.   | Test               | Unit tests for the package created                                             |
|  1a.   | Offline Signer     | Adds support for CheckMetadata extension                                       |
|  1b.   | ABI                | Encodes & decodes ABI, contract metadata v0, v1,v2,v3,v4                       |
|  1c.   | Deploy contract    | Implements method into Polkadart API to deploy WASM smart contracts            |
|  2d.   | Read contract      | Methods to read the contract values and decode them into human-readable values |
|  3e.   | Write contract     | Create methods to send transactions to a contract                              |
|  4a.   | Pub.dev            | Publish the new package in Pub.dev                                             |
|  5a.   | Document Signer    | Documents offline signer                                                       |
|  6a.   | Document Contracts | Adds extensive documentation on the website from milestone 1                   |
|  7a.   | Examples Contracts | Adds multiple examples and different approaches to doing contract interactions |
|  8a.   | FAQ Contracts      | Adds extensive FAQ of unhappy paths and troubleshooting                        |


## Future Plans

After this grant, we will have a complete Polkadot Dart library with all the features that the Polkadot JS library has.
We will also have complete documentation and examples of using the library, making it easier for new developers to use it and the Polkadot ecosystem.

We plan to use all this to create open-source sample functional mobile apps and tutorials, increase the engagement of the Flutter lib, and build more stuff for the Polkadot ecosystem.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

We have already completed a previous grant.

💾 **Work you have already done.**

** Leonardo's previous work:** \
[Polkadart](https://github.com/leonardocustodio/polkadart) \
[Wallet Daemon](https://github.com/enjin/wallet-daemon) \
[Daemon UI](https://github.com/wallet-daemon-ui) \
[Platform Core](https://github.com/enjin/platform-core) \
[Platform](https://github.com/enjin/platform)

**Kawal's previous work:** \
[Polkadart](https://github.com/leonardocustodio/polkadart) \
[AnimatedText](https://github.com/justkawal/animated_text) \
[Protect](https://github.com/justkawal/protect) \
[Tenor](https://github.com/justkawal/tenor) \
[Excel](https://github.com/justkawal/excel)
