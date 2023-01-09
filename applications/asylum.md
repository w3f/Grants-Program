# Asylum

- **Team Name:** Asylum
- **Payment Address:** 0x4dE01f5904651353021b9694f16FAb5f02DCD00e (USDT (ERC20))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Asylum is a metaverse for next generation gaming.

Our vision of the future of gaming is unicity between the games: interoperability of the in-game items, unified economics, cross-game gameplay, etc. Nothing of that can be achieved without users' trust and here is where blockchain gaming is becoming a solution. Thanks to the migration of the games' economics and in-game items to the blockchain, players don't have to trust some particular game publishers or marketplaces and the game economy and world will become more stabilized.

But in fact, it's not the only thing that blockchain can give us. We, at the Asylum, believe that if the approaches to blockchain gaming will be standardized we will achieve much more than just trust - we can achieve the real metaverse experience, where will be no borders between the games and no limits for the creative minds. With the creation of basic building blocks for the gaming metaverse, we want to do for crypto gaming what Polkadot doing for the blockchains.

The ecosystem and standards of the Asylum are not going to be related to some specific blockchain, as the new chains, more suitable for games, can be created anytime. And in addition, the requirements of game developers can differ and we are not seeking to limit their choice. So, we are developing Asylum to support firstly substrate-based chains, as they are developed with interoperability in mind. Particularly Polkadot, as it provides access to the ecosystem of many different parachains with various possibilities and bridges to the most popular chains.

### Project Details


#### Asylum overview

The Asylum project is about building the ecosystem, where every сomponent is connected with each other, achieving a synergy.

So, the best way to give a detailed description of the Asylum - is to define its main components:

- **Interoperability standards**

The standard for storing the metadata will be used for NFT, representing **in-game items**. The main goal of this standard is to make every item as independent of the concrete game as possible. Storing various possible interpretations will give the ability to use them in different games.
Based on this standard we plan also to introduce the **standard for Avatar** - player's identity in a virtual space. Like in-game items, Avatar standard will make it compatible with different games.

Also, besides the mentioned standards, we will create the **standard for game distribution** system using NFTs - one for developers, as the confirmation of their ownership, and another for players, like NFT-tickets to the game.


- **On-chain metaverse ecosystem**

The part of the Asylum project is an on-chain code (on layer 1, or layer 3), that gives the basic functionality to the games based on the blockchain.
**"Core" block** will cover the operations with the standards, defined below. Also, there will be an **Economic block**, which will include, but is not limited to Marketplace and token swap contracts to unite the economy of the games. And in addition, we want to extend our ecosystem with **gameplay helpers block**, such as a smart-contract for creating contracts between players, or any other repeatable gameplay logic that can be moved to the blockchain.

- **Framework for ecosystem integration**

As all functionality mentioned below is meant to be used by clients (apps, games) we will provide a framework for easy ecosystem integration.

- **Application with admin tools**

For game development studios will be created an **"Admin console"** - web app, where the game admin will be able to operate the game: add new items, tokens, etc.

- **Application with players interface**

For players, Asylum will provide an application, similar to the common gaming platforms (like Steam) with Game store, Library, Inventory, and Avatar pages. Also, there will be introduced the **Creator studio** which will be used as a UGC tool - for the creation of the new items or adding interpretations for the existing ones.

A simple scheme with Asylum ecosystem components:

![Core-components](https://gitlab.com/asylum-space/asylum-docs/-/raw/main/materials/Asylum-core-components.png)

As it was described above, Asylum is a big and complex project. However, we are at the start for now, and work related to this grant application is about to build a PoC of our ecosystem.

#### Asylum PoC overview

As a PoC we want to deliver a compact version of our ecosystem: 

1. Substrate pallet with basic API for creating templates, minting in-game item NFTs, and updating items metadata. Our pallet will utilize https://github.com/rmrk-team/rmrk-substrate.
2. Game Developers Console (admin web application), which allows creating/editing NFTs, uploading media resources for in-game items, and trying them on different games.
3. Connection library, which provides integration of the Asylum on-chain ecosystem into the client applications. 
4. Two sandbox games (2d and 3d), where admins can try out in-game items.


##### Pallet

> Tech: Rust, Substrate, JS (for tests)

We will extend the RMRK Core pallet (built on top of the Uniques pallet) and introduce the `Asylum Core` Pallet.

![Pallet-extension](https://gitlab.com/asylum-space/asylum-item-nft/-/raw/basic-functionality/pallets/asylum-core/docs/Pallet-extension.png)

**Disclaimer: RMRK pallets are in the early stage of development, so the Asylum pallets’ config, dispatchable functions, and storage structure are unstable.**

RMRK standard will always support a limited set of operations. For our goal, we need to extend RMRK core mechanics. We plan to create an association between the RMRK Collection and different Interpretation types and Interpretations. Each Item minted from this Template should have the same set of Interpretation types and Interpretations as Template. Updating the Template will lead to possible updating of the Item, but this update won't be forced. We intend to leverage RMRK multi-resource NFT's model to implement the Asylum Interpretation concept. Still, the current RMRK pallet state won't allow us to predict the best way to do this. For example, we need Resource mutability [https://github.com/rmrk-team/rmrk-spec/issues/44]. Still, we don't have it right now, so we will manage Item's resources in the Asylum core pallet instead of using the RMRK resource model, but this can change depending on the RMRK pallet pace of development.

Dispatchable functions and storage model can be found [here](https://gitlab.com/asylum-space/asylum-item-nft/-/blob/f62d9b694422b8deb40becdfe719182f524ccedf/pallets/asylum-core/INTERFACE.md)

Use-case diagram for pallet:

![use-case-diagram](https://gitlab.com/asylum-space/asylum-item-nft/-/raw/basic-functionality/pallets/asylum-core/docs/Use-case-diagram.png)

The standard way to work with items via our pallet is given below:

1. **Create a template**
    Template in the Asylum terms is such kind of “NFT collection” where the items have identical interpretations set (at least one interpretation is mandatory, with 'default-view' type). Every item can have its own custom properties, but the only way to  get any interpretation - is to be minted from a template (or updated, will be described below)
2. **Mint item**
    The issuer of the Template can mint NFT items within it. 
3. **Edit template**
    After the template was built and items were minted in this collection the only way to update items interpretations set - is to update the template and then every owner of the item will be able to update it to the latest version (if he wants so). The template update process is planned to use DAO approval. However, we will not fully implement it within this grant application, just make a template update proposal logic, which will be automatically approved.
4. **Update item**
    After the template was updated all items will have the ability to be updated, according to the template, by their owners.

Interpretations for the items will be stored under the string key, which can be composite. Such an approach will give the ability to build "presets".

For example, sword for "Heroes 2D" game can have such interpretations: "heroes-2D-pixeled-inventory-view", "heroes-2D-pixeled-equiped-view", "heroes-2D-pixeled-strike-animation-atlas".
By using such structure for keys, the "Heroes 2D" game client will be able to filter interpretations on fetch, to load all resources with the "heroes-2D-pixeled" prefix (in other terms, load "heroes-2D-pixeled" preset).



##### Game Developers Console

> Tech: JS, TS, React, Redux

The web application, that we are plan to deliver within this grant application will be a prototype of the Asylum Game Developers Console, where game admins will be able to manage their games and particularly set up the templates for in-game NFTs.
However, in this app, we will also provide two features, that in the future will be available publicly - template update proposal (via Creator Studio) and items explorer.

Initial wireframes for application can be found [here](https://www.figma.com/file/wIbe2L0Y1lhuZbsCkSnZgJ/%5BAsylum%5D-Game-Developers-Console?node-id=1011%3A3346) along with a comments

##### Connection library

> Tech: JS

This library is about to be a simple wrapper for Asylum on-chain ecosystem, which allows clients to easily integrate it. Library interfaces are currently not defined, but they will cover the base pallet functionality that client apps need.

##### Games

> Tech: C#, Unity

Games, delivered within this grant application will be small playable demos, with a purpose to show cross-games NFT items’ use-cases.

- “Game A” will be the 3D “Diablo-like” RPG, build on [this](https://assetstore.unity.com/packages/templates/packs/prodigy-game-framework-119282) assets pack
    Basic mechanics:
    - Base gameplay:
    you will be able to move, jump and fight with enemies
    - Inventory system
    NFT items will be fetched from the user’s wallet and can be used in the game
    - Loot system
    NFT items can be obtained during the game process	
    - Characters evolution with items
    NFT items can improve player’s characteristic
    
- “Game B” will be the 2D platformer adventure, build on [this](https://assetstore.unity.com/packages/templates/packs/ninja-rian-complete-game-176835) assets pack
    Basic mechanics:
    - Base gameplay:
    you will be able to move, jump and fight with enemies
    - Inventory system
    NFT items will be fetched from the user’s wallet and can be used in the game
    - Loot system
    NFT items can be obtained during the game process
    - Hidden locations
    NFT items can gain access to the hidden locations
    - In-game shop
    With the possibility of passive income of in-game currency



### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

The Polkadot ecosystem should be very attractive for blockchain-based games development, thanks to the possibilities, that parachains opens. Such standards will help create a basis for game development and tools will help developers save their time. So, eventually, Asylum's mission is to create the ecosystem that accelerates games development in the Polkadot network, bringing a gaming experience to a new level.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our target audience is game development studios and their user base (players).

- What need(s) does your project meet?

Asylum is seeking to become a starting point for the development of blockchain-based games.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

There is the [RMRK](https://www.rmrk.app/) project in the Kusama ecosystem. We're considering their standards as a starting point for creating ours.

- If so, how is your project different?

The main difference is that Asylum builds a complete ecosystem for gaming when RMRK is only providing a standard for NFTs and tools.

Speaking particularly about standards, RMRK provides a basic standard for NFT legos, but Asylum wants to extend it to make a ready-to-use standard for an in-game item.

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

**Sven Seven** - Head of Engineering at Supercolony.
Software engineer with prod experience since 2015. Master degree in Information Security.
Has worked in finance, e-commerce, networking domains as full-stack dev.
Programming languages are JS, Java, Python, Rust, C++.
Blockchain dev since 2021.

**Horacio Lex** - Blockchain developer at Supercolony. Software engineer since 2018. Master of Science in Applied Mathematics. Has worked in data science and game development. Former Ubisoft employee was working on HUD/UI & gameplay systems. Programming languages are Python, C++, Rust. Blockchain developer since 2021.

### Team Code Repos

- https://gitlab.com/asylum-space/
- https://gitlab.com/asylum-space/asylum-app
- https://gitlab.com/asylum-space/asylum-item-nft
- https://gitlab.com/asylum-space/asylum-standards

Members:
- https://github.com/LastSymbol0
- https://github.com/0xMarkian
- https://github.com/YaremenkoM
- https://github.com/sventime
- https://github.com/SupremaLex

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/illia-abrosimov/
- https://www.linkedin.com/in/maria-yaremenko/
- https://www.linkedin.com/in/0xmarkian/
- https://www.linkedin.com/in/sven-seventimes/
- https://www.linkedin.com/in/heorhii-lutsenko-502873164/

## Development Status :open_book:

Asylum was firstly implemented on the Solana Ignition hackathon in its initial idea.
After that, the project received its first positive feedback from game developers and multiple VCs and Supercolony venture studio entered the project as a co-founder. Was held two strategical sessions, the concept was largely clarified and reworked. For now, we already have such partners as Darvinia Network and Evolution land (first DeFi game) and conversations with games such as Eizper Chain, Wind metaverse, SpaceFalcon.io. Also, we have already raised the first money from Mempool ventures and speaking with other VCs (Hillrise Group, Woodstock Fund, 500 Startups, and others).

Materials which was implemented during the time of the hackathon:
- [Repository of Asylum demo made for Solana Ignition hackathon](https://github.com/LastSymbol0/Asylum),
- [Basic SDK for interactions with the Asylum programs and data](https://github.com/LastSymbol0/asylum-sdk),
- [Asylum on devpost](https://devpost.com/software/asylum)

Actual concept materials
- [Asylum Litepaper](https://drive.google.com/file/d/1sEk159ISUZypgUSflsHFyqP0Z7IRJtdl/view)
- [Asylum Pitchdeck](https://www.canva.com/design/DAE1y6AHyCA/Lh0gxRtIePVtb_QfzyP6aQ/view?utm_content=DA[%E2%80%A6]tm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 weeks
- **FTE:** 2-3 FTE
- **Total Costs:** 50,000 USD


### Milestone 1 — Basic in-game NFT items standard and web-app

- **Estimated Duration:** 3 weeks
- **FTE:** 3
- **Costs:** 30,000 USD

| Number | Deliverable                     | Specification |
| -----: | ------------------------------- | ------------- |
| 0a.    | License                         | MIT           |
| 0b.    | Documentation                   | We will provide a repository with documentation for the defined standard of NFT metadata in the format of text docs (most likely in .md). Also, examples of metadata will be provided. |
| 0c.    | Testing Guide                   | For implemented standard unit tests will be provided along with a guide on how to run them. |
| 0d.    | Docker                          | - |
| 0e.    | Article                         | - |
| 1.     | Item standard definition        | The definition of the in-game item standard will consist of three parts: JSON schema, descriptive documentation, and examples of usage. Standard properties will be described below in the subparagraphs. |
| 1.1    | 2D visualization                | NFT item created with the proposed standard will have the ability to have a visual interpretation in form of a 2D image. |
| 1.2    | 3D visualization                | NFT item created with the proposed standard will have the ability to have a visual interpretation in form of a 3D model. |
| 1.3    | Multiple visual interpretations | NFT item created with the proposed standard will have the ability to have multiple visual interpretations, both for 2D or 3D visualization types. Interpretations will be stored under the different tags, for example, "2d-pixeled-inventory-view" or "3d-realistic-equipped". |
| 2.     | Asylum Core pallet              | We will deliver the implementation of the described standard. It will be pallets, which will implement base operations with item  |
| 3.     | Connection library              | We will deliver the JS library, that will cover functionality of Asylum Core pallet.  |
| 4.     | Web application                 | We will create a web application that will give an ability to interact with mentioned pallets: create and update template and mint test NFT items. Related to the proposed UI mockups, the "templates section" will be implemented |


### Milestone 2 — Extended web-app and testing games

- **Estimated Duration:** 3 weeks
- **FTE:** 2
- **Costs:** 20,000 USD

| Number | Deliverable                     | Specification |
| -----: | ------------------------------- | ------------- |
| 0a.    | License                         | MIT           |
| 0b.    | Documentation                   | -             |
| 0c.    | Testing Guide                   | For manually testing we will provide a basic **tutorial** that explains how a user can interact with the testing environment - go through a "happy path" which includes running a node, hosting web-app and games, minting the NFT in specified standard and trying to use it in two games. |
| 0d.    | Docker                          | - |
| 0e.    | Article                         | - |
| 1.     | Web application                 | We will extend a web application to make it correspond provided mockups. |
| 2.     | Unity integration               | We will provide a simple library for Unity (SDK) for integration of the Asylum on-chain ecosystem (Asylum Core pallet) into the game client. |
| 3.     | Game A                          | We will create a 2d web-faced platformer game sandbox in pixeled style with a small "level" space. A player will have a possibility to move, equip items from the inventory (inventory refers to the assets in the user's wallet), and use items (where applicable). The game will use NFT items minted on the Asylum Core pallet via the Unity library. |


## Future Plans

As was described in the 'Overview' section, Asylum is a big project which has ambitious plans for the future. The milestones described in this grant application are about to become the first step for building a huge ecosystem for crypto gaming. We are planning to create a follow-up grant where we will describe one more game to show interoperability and extend our ecosystem.

In our plans, the launch of the Asylum platform is set for the end of the 2022 year, but we are planning to support and extend our product long-term. Also, we would like not only to build but also empower real metaverse gaming by creating Asylum Studio - an independent team that will develop games on top of the Asylum ecosystem.

**Materials**:

- Roadmap:
  ![Roadmap](https://gitlab.com/asylum-space/asylum-docs/-/raw/main/materials/Asylum-roadmap.jpg)
- [Pitch deck](https://www.canva.com/design/DAE1y6AHyCA/Lh0gxRtIePVtb_QfzyP6aQ/view?utm_content=DA[%E2%80%A6]tm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Personal recommendation from the [Supercolony](https://www.supercolony.net).
