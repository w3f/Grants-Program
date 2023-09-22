# Asylum

- **Team Name:** Asylum
- **Payment Address:** 0xB2a6bF365635ea209d7A824125c1bf249A189866 (USDT (ERC20))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/1000#issuecomment-1377343850)

## Project Overview :page_facing_up:

### Overview

Asylum is a fundamental metaverse platform.

We're seeing a big gap in the Metaverse market because every project is mostly just trying to do some sandbox-like game with some extra blockchain-related stuff, whether it is suitable or not.

But we believe that Metaverse is not about many separate projects - it is about a united and open system, consisting of many granular interconnected components. We can use the analogy with the Internet - there are a lot of different components, services, and content that are united into a single system due to the defined standards and protocols.

And as the Internet was started by defining the basic standards we should start building the Metaverse in the same way. That's why the main focus for Asylum will be creating a set of open standards and protocols that will be a basement for future Metaverse. We call this set of standards IMP - Interoperable Metaverse Protocol. And such standards cannot be proprietary - we're not trying to make it a part of our product. We are building it open and free for everyone.

And the Asylum product will consist of the etalon implementation of our standards, tools to make it usable for devs, and immersive apps for Users.

### Project Details

Here we will show two parts of our work in detail - IMP and Asylum product.

#### IMP

**What is it?**

IMP (Interoperable Metaverse Protocol) - is a set of open standards and protocols that will be a basement for the Metaverse - a virtual open space with a life-like experience for the user.

**Why is it important?**

A real Metaverse, that will be open and consistent can be built only with a down-top approach when firstly we are building an infrastructure and only after that start creating User-side solutions. IMP (and its implementation by Asylum) will be the fundamental layer for Metaverse, which will natively connect different spaces, games, and apps into a single space. And unlike infrastructure products that are not separate the standards and protocol to the separate entity - **IMP will give an ability for every new project to implement its version of it, remaining compatible with other implementations**.

**Who will work on it?**

We understand the open standard can not be built only by some particular company - that's why we plan to gather a strong community of key players from the Metaverse market around IMP and make it owned by this community.

**What components will be in?**

IMP will consist of 6 loosely coupled blocks:

1. Metaverse objects standard

Within this standard, we are using a new approach to use NFT technology for building digital objects for Metaverse. We've reworked the concept of NFT as an image and concept of the NFT collections. We are seeking to make every object maximally independent from any client applications, store its history, be **natively** interoperable between different kinds of spaces (applications/games/etc inside the metaverse) and have fixed value to support balance between these spaces.

We wrote the main pieces of this standard within our [first grant application](https://github.com/w3f/Grants-Program/blob/master/applications/asylum.md).

Here are the main materials that describe our work:

- [PitchDeck](https://asylum.space/files/AsylumPitchDeck.pdf).
- [Litepaper](https://asylum.space/files/litepaper.pdf).

Here is also a diagram to have a quick overview of the standard:

![img](https://gitlab.com/asylum-space/imp/-/raw/50a8a1bd1ba8a90b833e4cca128736d25f3e9357/standards/metaverse-object-0.1/docs/img/metaverse-objects-entities-flow-diagram.png)

2. DAO protocol

DAO for the Metaverse is th necessary foundation to exist - it provides ownership and participation for a User, which creates the feeling of the real life, and guarantees community-driven evolution.

As the Metaverse is a huge space that consists of many various smaller spaces and components it is not suitable to have only one big DAO to rule them all. That's why we're seeing this protocol and the **agile framework to build multiple layers of DAO inside the Metaverse**, connected to the incentivize model.

For different purposes it is suitable to use different solutions - in one place it could be critical to have fast decision making time, in another - to make sure that some proposal will be the right change for everybody. Because of this reason, we will include the different mechanisms of governance for different DAO layers.

Main layers that we see for now:

- DAO of the Metaverse
- DAO of the space
- DAO of the object

The development of the last one will be included in the scope of this grant.

3. Identity protocol

For the metaverse, it is critically important to have a definition of the identity of every User. That will be the primary goal of the Identity protocol.

Besides this, it will serve to provide an interoperable NFT Avatar(s) for the User, partially by utilizing the Metaverse objects standard.

4. Exchange protocol

In our vision Metaverse spaces should be interoperable not only in a "gameplay" way by also economically. For example, the problem of current games and web2.0 apps is that every such app has its own closed economy and there is no possibility for, for example, usage of some in-game currency on the social platform. This block the possibility of both products growing in synergy.

We can think about Exchange protocol as the base economic laws and rules in the Metaverse. Every space can create its own, more detailed, rules as it wants, but working on the same ground it will make these economics connected.

Particularly Exchange protocol will define the base standards and workflows for exchanging currencies (FTs) and objects (NFTs). The important part of it will be incentivized model that will fairly reward ecosystem Creators and Participants (DAO participants, artists, developers, space owners, etc) for their contribution to the ecosystem.

5. L1 - L2 sync protocol

A protocol for the L2 solution is necessary here because almost every space in the Metaverse will need a fast and secure backend. Usage of the blockchain for every space need is not the best solution and that is why we need to define the L2 standard for the Metaverse.

6. World protocol

World protocol is designed to standardize the structure and rules of space inside the Metaverse. It will include space DAO, space access rights, revenue model, economy rules, versioning and control rights of client&backend code, and so on.

It will be the high-level organization block and will be coupled with every block mentioned above.

#### Asylum product

After we're described the IMP structure let's give a presentation of the Asylum product.

On the high level it can be divided into two significant parts:

- Metaverse provider

  Which includes complete and ready-to-use implementation of the IMP

- Metaverse ecosystem

  Which includes applications, SDKs, tools, and frameworks for Creators and Players - to make the entrypoint to the Metaverse easier.

##### Metaverse provider

Just like Internet has a set of standards and has providers - Asylum will develop the reference implementation of the IMP, becoming the Metaverse provider.

As the concept and functionality of IMP were described above here will be provided a short description of our implementation.

For every part of the IMP, we will implement a Substrate pallet, which will be the basement for Asylum node. For the L2 solution, we'll use TEE technology. We plan to become firstly Kusama and then Polkadot parachain to achieve interoperability on the chain level.

For every part of the IMP we will implement a Substrate pallet, which will be the basement for Asylum node. For the L2 solution we'll use TEE technology. Our plans are to become firstly Kusama and then Polkadot parachain to achieve interoperability on the chain level.

We've already partially implemented a pallet for Metaverse objects within our first grant application. Here you could find all materials and code related to it.

##### Metaverse ecosystem

To make our product accessible for the Creators and Users we will provide necessary apps and tools that will lower the barrier of entry and attract more businesses and people to become participants in this ecosystem.

- **SDK for game engines**

As the Metaverse is about the more immersive approach to the applications - game engines are the best tools for builders of future apps. We've already started the development of the Unity SDK within our first grant application, here you could find all materials and code related to it. By our launch on the Kusame we also plan to deliver SDK for the Unreal engine to cover most of the market.

Working on the SDK and Creato studio we're creating an environment where game/space developers and artists will not deal with some blockchain-specific tech but will work in their comfortable environment.

- **Creator studio app**

Creator Studio - is the web interface for the exploring and management of the Asylum ecosystem designed for artists and developers. It was partially delivered within our first grant application, here you could find all materials and code related to it. After the last milestone delivery, it was already extended with new features and now going through the design improvement stage.

Finally it will be a single application with the different "mods" designed specifically for every actor: artist, developer, and space owner. It will cover functionality to set up and manage the space, work with objects, integrate them into a client, explore existing spaces and objects, etc.

- **Asylum App**

Asylum App - the entrypoint to the Metaverse for User. As Metaverse is about immersive interfaces it will be a 3d space with life-like interactions with the system. We're working on a design that will bring a new kind of user experience and make actions more intuitive.

This application will provide a "room" for every User where he can work with his inventory and avatars and dive into available spaces.

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

One of our main values is interoperability, this is why Polkadot ecosystem is a good fit for us. While we're working on intreroperability on the Metaverse layer - Polkadot is providing native interoperability on the chain level. We're seeking to be a chain agnostic platform, because for different types of our customers there will be different chains that better fits their needs. This is why interoperability in Polkadot is so suitable solution for our platform.

From our side we will provide the first open Metaverse platform in the Polkadot ecosystem, that will be valuable for many parachains.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our target audience is applications, that want to become a part of united Metaverse - connect with their partners, open their economic, power up their content.

We see here three basic areas: gaming, events, education and social.
Because of games are natively attractive, have immersive approach to interactions and smooth UX - we see this field as a first and a big target for us, as it will be a starting point for the Metaverse adoption.

- What need(s) does your project meet?

As the large-scale fundamental project we see gathering community as one of the main need now. The community with witch we will build and implement IMP so can the real world can be built.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

There are few projects in ecosystem that are working in the similar direction with Asylum:

1. [RMRK](https://www.rmrk.app/).
2. [Ajuna Network](https://ajuna.io/).
3. [CypherMod](https://cyphermod.com/) by PhalaNetwork and RMRKAPP.

- If so, how is your project different?

Asylum is operating on the fundamental layer, working on the standards and its implementation for the whole Metaverse ecosystem. There are no such projects for now, that are working on the infrastructure solution for the whole Metaverse ecosystem (not focusing only on NFT, or other spheres) and meanwhile implementing it as an open and extendable solution, not a closed (like Sandbox).
Because of this, almost all projects operating in this market are good candidates to work together, for example including their infrastructure solutions in our ecosystem.

## Team :busts_in_silhouette:

### Team members

- **Illia Abrosimov** (Founder and СEO)
- **Markian Ivanichok** (Co-founder | СEO of Supercolony)
- **Maria Yaremenko** (Co-founder)
- **Sven Seven** (Head of Engineering | Supercolony)
- **Horacio Lex** (Rust Blockchain Developer | Supercolony)

### Contact

- **Contact Name:** Illia Abrosimov
- **Contact Email:** illia.abrosimov@asylum.space
- **Website**: [Asylum](https://asylum.space/)

### Legal Structure

- **Registered Address:** 68 Circular Road, #02-01, 049422, Singapore
- **Registered Legal Entity:** Asylum Labs PTE LTD

### Team's experience

**Illia Abrosimov** - CEO and Founder of Asylum.

Illia used to be a backend developer since 2015, started coding at Unit Factory, had experience with algorithms, graphics, and game engines.
Was working at Ubisoft as an online programmer for two years, was dealing with backend infrastructure, led game jams and hackathons.
Have C#, C/C++, Rust, AWS in the stack.

**Markian Ivanichok** - CEO and co-founder of Supercolony.

Blockchain entrepreneur, Software Engineer.
Markian started his engineering career back when he was 15. Since then, developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded, and invested in Sector F, one of the top consulting companies in Ukraine that help entrepreneurs to move faster.
Co-founded and led Supercolony, a Polkadot venture studio that is dedicated to building and creating Polkadot’s ecosystem.

**Maria Yaremenko** - Head of operations and co-founder of Asylum.

In 2019 started to work as a front-end developer, Maria became interested in blockchain technology and soon started her career as a blockchain developer in the Polkadot ecosystem in 2021.
Maria has mentorship experience as a computer science tutor with, background in economics.

**Alexander Kaplaty** - Financial Analytic & CFO, Supercolony.

Internationally experienced financial and commerce professional helping businesses grow sales, improve operational performance, introduce corporate best practices, change organizational culture, and attract investments.

**Kyrylo Nagorny** - CMO, Supercolony.

**Sven Seven** - CTO, Supercolony.

Software engineer with prod experience since 2015. Master degree in Information Security.
Has worked in finance, e-commerce, networking domains as full-stack dev.
Programming languages are JS, Java, Python, Rust, C++.
Blockchain dev since 2021.

**Horacio Lex** - Blockchain developer, Supercolony.

Software engineer since 2018. Master of Science in Applied Mathematics. Has worked in data science and game development. Former Ubisoft employee was working on HUD/UI & gameplay systems. Programming languages are Python, C++, Rust. Blockchain developer since 2021.

### Team Code Repos

- <https://gitlab.com/asylum-space/>
- <https://gitlab.com/asylum-space/asylum-ui>
- <https://gitlab.com/asylum-space/asylum-item-nft>
- <https://gitlab.com/asylum-space/asylum-standards>

Members:

- <https://github.com/LastSymbol0>
- <https://github.com/0xMarkian>
- <https://github.com/YaremenkoM>
- <https://github.com/sventime>
- <https://github.com/SupremaLex>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/illia-abrosimov/>
- <https://www.linkedin.com/in/maria-yaremenko/>
- <https://www.linkedin.com/in/0xmarkian/>
- <https://www.linkedin.com/in/sven-seventimes/>
- <https://www.linkedin.com/in/%D0%BD%D0%B0%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-3bb2276a/>
- <https://www.linkedin.com/in/kaplaty/>
- <https://www.linkedin.com/in/heorhii-lutsenko-502873164/>

## Development Status :open_book:

Current status of the Asylum development - finalization of the PoC. Mainly previous work were delivered within our [first grant application](https://github.com/w3f/Grants-Program/blob/master/applications/asylum.md)

1. Creator studio - [link](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/packages/game-developers-console/)

Web application for NFT artists and game/space developers. Delivered within our first grant application. Now goining throught redesign stage.

2. [Connection library](https://gitlab.com/asylum-space/asylum-ui/-/blob/main/packages/connection-library/README.md)

TS library for connection with Asylum node. Fully delivered within our first grant application.

3. [Unity SDK](https://gitlab.com/asylum-space/asylum-unity-sdk)

Library for integration of the Asylum ecosystem into the unity engine. Delivered within our first grant application.

4. [Asylum node](https://gitlab.com/asylum-space/asylum-item-nft)

Currently includes pallet that implements Metaverse object standard (now called "asylum-core") and pallet for game/spaces distribution ("asylum-game-distribution"). Delivered within our first grant application.

5. [Metaverse object standard](https://gitlab.com/asylum-space/imp)

Now called "Asylum stadard", will be renamed in process of separation standards from Aslum to IMP. The basic version of the "Metaverse object standard" from IMP. Fully delivered within our first grant application.

6. [Testing game A - 2d platformer "Ninja rian"](https://gitlab.com/asylum-space/asylum-ui/-/tree/main/packages/connection-library/data)

Build of the 2d testing game with integration with Asylum node. Delivered within our first grant application.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 weeks
- **FTE:** 3,5 - 4 FTE
- **Total Costs:** 48,000 USD

### Previous work

#### Milestone 1 — Basic in-game NFT items standard and web-app

- **Estimated Duration:** 3 weeks
- **FTE:** 3
- **Costs:** 30,000 USD
- **Devilery Status**: [Delivered](https://github.com/w3f/Grant-Milestone-Delivery/pull/438)

| Number | Deliverable                     | Specification                                                                                                                                                                                                                                                                   |
| -----: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                         | MIT                                                                                                                                                                                                                                                                             |
|    0b. | Documentation                   | We will provide a repository with documentation for the defined standard of NFT metadata in the format of text docs (most likely in .md). Also, examples of metadata will be provided.                                                                                          |
|    0c. | Testing Guide                   | For implemented standard unit tests will be provided along with a guide on how to run them.                                                                                                                                                                                     |
|    0d. | Docker                          | -                                                                                                                                                                                                                                                                               |
|    0e. | Article                         | -                                                                                                                                                                                                                                                                               |
|     1. | Item standard definition        | The definition of the in-game item standard will consist of three parts: JSON schema, descriptive documentation, and examples of usage. Standard properties will be described below in the subparagraphs.                                                                       |
|    1.1 | 2D visualization                | NFT item created with the proposed standard will have the ability to have a visual interpretation in form of a 2D image.                                                                                                                                                        |
|    1.2 | 3D visualization                | NFT item created with the proposed standard will have the ability to have a visual interpretation in form of a 3D model.                                                                                                                                                        |
|    1.3 | Multiple visual interpretations | NFT item created with the proposed standard will have the ability to have multiple visual interpretations, both for 2D or 3D visualization types. Interpretations will be stored under the different tags, for example, "2d-pixeled-inventory-view" or "3d-realistic-equipped". |
|     2. | Asylum Core pallet              | We will deliver the implementation of the described standard. It will be pallets, which will implement base operations with item                                                                                                                                                |
|     3. | Connection library              | We will deliver the JS library, that will cover functionality of Asylum Core pallet.                                                                                                                                                                                            |
|     4. | Web application                 | We will create a web application that will give an ability to interact with mentioned pallets: create and update template and mint test NFT items. Related to the proposed UI mockups, the "templates section" will be implemented                                              |

#### Milestone 2 — Extended web-app and testing games

- **Estimated Duration:** 3 weeks
- **FTE:** 2
- **Costs:** 20,000 USD
- Delivery status: In development

| Number | Deliverable       | Specification                                                                                                                                                                                                                                                                                                                                            |
| -----: | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License           | MIT                                                                                                                                                                                                                                                                                                                                                      |
|    0b. | Documentation     | -                                                                                                                                                                                                                                                                                                                                                        |
|    0c. | Testing Guide     | For manually testing we will provide a basic **tutorial** that explains how a user can interact with the testing environment - go through a "happy path" which includes running a node, hosting web-app and games, minting the NFT in specified standard and trying to use it in two games.                                                              |
|    0d. | Docker            | -                                                                                                                                                                                                                                                                                                                                                        |
|    0e. | Article           | -                                                                                                                                                                                                                                                                                                                                                        |
|     1. | Web application   | We will extend a web application to make it correspond provided mockups.                                                                                                                                                                                                                                                                                 |
|     2. | Unity integration | We will provide a simple library for Unity (SDK) for integration of the Asylum on-chain ecosystem (Asylum Core pallet) into the game client.                                                                                                                                                                                                             |
|     3. | Game A            | We will create a 2d web-faced platformer game sandbox in pixeled style with a small "level" space. A player will have a possibility to move, equip items from the inventory (inventory refers to the assets in the user's wallet), and use items (where applicable). The game will use NFT items minted on the Asylum Core pallet via the Unity library. |

### Scope of this Grant

#### Milestone 3 — Interoperable games

- **Estimated Duration:** 2 weeks
- **FTE:** 3,5
- **Costs:** 22,400 USD

| Number | Deliverable               | Specification                                                                                                                                                                                                                                                      |
| ------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0a.    | License                   | MIT                                                                                                                                                                                                                                                                |
| 0b.    | Documentation             | Improve documentation for Unity SDK, describe new features with managing 3D items and items drop                                                                                                                                                                   |
| 0c.    | Testing Guide             | Guide through the interoperability of game mechanics between two games and association of Blueprints with in-game items, specified by Game Client                                                                                                                  |
| 0d.    | Docker                    | Current Docker setup doesn't require additional changes                                                                                                                                                                                                            |
| 0e.    | Article                   | -                                                                                                                                                                                                                                                                  |
| 1.     | Unity SDK                 |                                                                                                                                                                                                                                                                    |
| 1.1    | Unity SDK                 | Implement the ability to use Unity SDK in Standalone mode (without React build). We're going to utilize Ajuna Unity SubstrateClient and integrate it with Asylum pallets.                                                                                          |
| 1.2    | Unity SDK                 | Implement Unity Editor Extension to operate with Asylum pallets in Editor mode. This will be the first iteration of the editor extension, where a developer can specify the seed phase, connect to the Asylum chain, query Asylum entities, and mint Asylum Items. |
| 1.3    | Unity SDK                 | Refactor Unity SDK to support both use cases: inside React app and Standalone mode.                                                                                                                                                                                |
| 1.4    | Unity SDK                 | Implement UML Class diagram of Unity SDK high-level classes                                                                                                                                                                                                        |
| 1.5    | Unity SDK                 | Implement asynchronous assets loading to reduce lags during the game                                                                                                                                                                                               |
| 1.6    | Unity SDK                 | Improve Unity SDK example documentation: show two possible usages of the plugin (inside React and Standalone mode), a guide on editor extension usage                                                                                                              |
| 2.     | 3D Game                   |                                                                                                                                                                                                                                                                    |
| 2.1    | 3D Game                   | Implement a 3D Diablo-like game in Unity 3D, which utilizes Unity SDK                                                                                                                                                                                              |
| 2.2    | 3D Game                   | Implement the ability to parse and render GLB/GLTF 3D models                                                                                                                                                                                                       |
| 2.3    | 3D Game                   | Implement the ability to render 3D animation and effects based on Tags and Interpretations                                                                                                                                                                         |
| 2.4    | 3D Game                   | Implement in-game Items drop logic with on-chain minting. There will be scripted in-game actions (e.g. open a chest, defeat an NPC), which triggers the on-chain minting of Item and handles its result                                                            |
| 3.     | In-game items association | This deliverable is related to the Creators Studio web app                                                                                                                                                                                                         |
| 3.1    | In-game items association | Implement the ability to create Blueprint with specific Interpretations required by Game Client to associate it with in-game item                                                                                                                                  |
| 3.2    | In-game items association | Implement the ability to adapt existing Blueprint and add missing Interpretations, required by Game Client to associate it with in-game item                                                                                                                       |
| 3.3    | In-game items association | Implement a 3D model viewer to check uploaded 3D Interpretations                                                                                                                                                                                                   |
| 4.     | Renamings                 | According to the latest comments and product design discussions, we are making the following renamings: Template -> Blueprint, Game -> Space, Game Developers Console -> Creators Studio                                                                           |

#### Milestone 4 — Public availability

- **Estimated Duration:** 2 weeks
- **FTE:** 4
- **Costs:** 25,600 USD

| Number | Deliverable                            | Specification                                                                                                                                                                                                                                                          |
| ------ | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                                | MIT                                                                                                                                                                                                                                                                    |
| 0b.    | Documentation                          | Organize all distinct documents in one single resource using existing documentation tools and make it public available.                                                                                                                                                |
| 0c.    | Testing Guide                          | Guide for Players WebApp: describe how user can configure wallet and achieve tokens to enter Asylum platform                                                                                                                                                           |
| 0d.    | Docker                                 | -                                                                                                                                                                                                                                                                      |
| 0e.    | Article                                | -                                                                                                                                                                                                                                                                      |
| 1.     | Game back-end example                  | We will implement a back-end for delivered games (milestones 2 and 3) that will track user actions and decide about items minting. In the future, this back-end is planned to be deployed on TEE (as an L2 solution) to make it secure and potentially decentralized.  |                                                                                           |
| 1.1    | Game back-end example                  | Implement game back-end as substrate offchain worker and call it Asylum offchain minter. To make minting possible, blueprints issuer should insert their keys into the keystore as keys for offchain minter.                                                           |
| 1.2    | Game back-end example                  | Implement minting control. Offchain minter will submit a mint transaction with parameters from the mint request (blueprint_id, item receiver) from player.                                                                                                             |
| 1.3    | Game back-end example                  | Implement minting request validation. Offchain minter will validate item mint request: game should support a blueprint, which mint is requested and player should own a Ticket, which gives him an access to the game                                                  |
| 1.4    | Game back-end example                  | Implement anti-bot protection. Offchain minter will store last player actions, such as movements, to guarantee that game was played honestly. Mint request will be rejected if some anomaly is found.                                                                  |
| 1      | Unity SDK                              |                                                                                                                                                                                                                                                                        |
| 1.1    | Unity SDK                              | Update Editor Extension to load Blueprint Interpretations as assets and display them in Unity custom editor window                                                                                                                                                     |
| 1.2    | Unity SDK                              | Implement ability to place and interact with Blueprint images and 3D models on the scene                                                                                                                                                                               |
| 2.     | Players WebApp                         | Implement WebApp for players, where user can run games and see/manage his obtained NFTs. Application will be based on Creator Studio app. It's the first iteration of Players WebApp, the next stage is 3D world with Avatar and multiplayer capabilities              |
| 2.1    | Players WebApp                         | Implement ability to view player's ASLM balance                                                                                                                                                                                                                        |
| 2.2    | Players WebApp                         | Implement Discourd bot, where player can request ASLM tokens and link it with Players WebApp                                                                                                                                                                           |
| 2.3    | Players WebApp                         | Implement page, where user can buy Tikets and launch Spaces                                                                                                                                                                                                            |
| 2.4    | Players WebApp                         | Implement page, wheere user can view his obtained NFT items                                                                                                                                                                                                            |

## Future Plans

As was described in the 'Overview' section, Asylum is a big project which has ambitious plans for the future. The milestones described in this grant application are about to become the first step for building a huge ecosystem for the Metaverse.

Here you could find Asylum roadmap
![roadmap](https://i.ibb.co/KX4WDXS/2022-07-28-17-23-56.jpg)

**Materials**:

- [Website](https://asylum.space/)
- [Litepaper](https://asylum.space/files/litepaper.pdf)
- [Pitch deck](https://asylum.space/files/AsylumPitchDeck.pdf)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Personal recommendation from the [Supercolony](https://www.supercolony.net).
