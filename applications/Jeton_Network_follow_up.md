# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** Jeton Network & DOTMog
* **Team Name:** DOTMog Team
* **Payment Address:** 1FgaH4sRHF4boR4Fw316ddKMJbFpsDXGeL
*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

![image](https://user-images.githubusercontent.com/17710198/120234744-e502ab00-c258-11eb-80e0-dac144164b46.png)

## Project Overview :page_facing_up: 

We believe that the promising substrate blockchain technology enables us to bring a new way of gamification to a broad audience in a responsive, playful and immersive way. Our unique technical base allows us and the community to create independent games that can be deployed as enrichment to any substrate based chain.

### Overview

#### Introduction (A brief description of the project.)

This is a follow up grant, on https://github.com/w3f/Open-Grants-Program/pull/265, of which all milestone have been submitted.
* Milestone 1 [LINK](https://github.com/w3f/Grant-Milestone-Delivery/pull/102) - [Evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/dotmog_1_alxs.md)
* Milestone 2 [LINK](https://github.com/w3f/Grant-Milestone-Delivery/pull/161) feedback in work 
* Milestone 3 [LINK](...) feedback in work  

This followup grant is intended to create real value in the provided API, GameEngine, Service Layer and Unity Asset to help ramping up teams focusing on game develoment with substrate based chains, we are currently in development towards our early game access target in july for the DOTMog Mobile Game, which is our flagship game. The game has been described in our first open-grant application, as it is not part of the grant itself, we have removed the full description of it.

What matters for the grant are the artifacts that can be reused and extracted out of our game framework. The intention is to build a full featuring SDK for Unity and Substrate, which will be provided as a free Asset in the Unity Asset Store [LINK](https://assetstore.unity.com/) and usable out-of-the box with the node-template pallet.

This is part of the components that **Jeton Network** is providing and maintaining for future blockchain game developers. Jeton Network intends to work towards a second order relay chain for games that like the benefit of using there own blockchain, but can't afford a parachain or parathread slot on Polkadot or Kusama.

[DEMO (from May 2021)](https://youtu.be/xPE16aMZZpc)

**Bot based testing with the SubstrateNetApi and GameEngine**
![image](https://user-images.githubusercontent.com/17710198/116819828-2167bc00-ab72-11eb-8806-f402fa807054.png)

**Fast On-Chain Storage Access**
![image](https://user-images.githubusercontent.com/17710198/116819866-61c73a00-ab72-11eb-80a5-c8d59481f3ab.png)

**Service Layer (PoC)**
![image](https://user-images.githubusercontent.com/17710198/120229511-94d21b80-c24d-11eb-8582-f8f39df0cab8.png)

### Project Details 

This is the follow up grant from our previous open grant on **Wave 9**. 

#### Mockups/designs of any UI components

This is our current Dev GUI, from our running alpha release, we will extract it to a template involving the non DOTMog specific artifacts, like Blockchain Info, Wallet Info and updated and add simple configuration options.

![image](https://user-images.githubusercontent.com/17710198/116822118-431a7080-ab7d-11eb-92a1-c37263afcd12.png)


#### API specifications of the core functionality

https://github.com/dotmog/SubstrateNetApi

#### An overview of the technology stack to be used


![Possible Application Architecture](https://raw.githubusercontent.com/dotmog/SubstrateNetApi/origin/images/advanced_architecture.png)

![image](https://user-images.githubusercontent.com/17710198/116819173-1d866a80-ab6f-11eb-99e4-0073ea97a516.png)

#### Documentation of core components, protocols, architecture etc. to be deployed

* https://github.com/dotmog/SubstrateNetApi .NETStandard2.0 (SubstrateNetApi with Wallet functionalities, usable in Unity)
* https://github.com/dotmog/SubstrateNetCore .NETStandard2.0 (Core GameEngine) will be extracted out of our private DOTMogCore Repository.
* https://github.com/dotmog/SubstrateNetUnityClient .NETStandard2.0 (Asset Unity) will be extracted out of our private DOTMogClient Repository.

#### PoC/MVP or other relevant prior work or research on the topic

Our alpha game is already running, check out our webpage (https://dotmog.com/).

The basic part of the open-grant has been developed as framework for our flagship game, as we where focusing on the game it self the API lakes inline comments and might be a little complicated to jump in with out a good documentation or tutorials.

A lot of our previous work on the World of Mogwais is being used as PoC for the current project, the game logic we created [WoMNetCore](https://github.com/WorldOfMogwais/WoMNetCore) is reused where it makes sense or refactored to match better, here an [old PoC](https://github.com/WorldOfMogwais/WoM-Releases/releases). We used the CryptoKitties on Substrate as our first crash course into Rust and luckily it had a theme in common with our vision from 2017 [old whitepaper](https://github.com/mogwaicoin/mogwai-doc/raw/master/doc/Mogwai_Whitepaper.pdf). 

### Ecosystem Fit 
I think currently there are no such projects in the substrate ecosystem, at least we don't know of any. The full game logic is written down in our confluence, but for the sake of this file, we don't copy & paste it into here, but we can add it if necessary.

## Team :busts_in_silhouette:

### Team members
* Cedric Decoster ([darkfriend77](https://github.com/darkfriend77))
* André Schneider ([metastar77](https://github.com/metastar77))
* Sven Scharmentke ([svnscha](https://github.com/svnscha))
* Rene Windegger ([rwindegger](https://github.com/rwindegger))

Artists:
* Patrik Bundeli ([2much](https://www.instagram.com/2much_ch/))
* Tim Kramarz ([timkramarz](https://www.timkramarz.com/))

### Contact
* **Contact Name:** Cedric Decoster
* **Contact Email:** cedric.decoster@gmail.com
* Website www.dotmog.com

### Legal Structure 
* **Registered Address:** Stetten SH, Switzerland
* **Registered Legal Entity:** BloGa Tech AG (in incorporation)

### Team's experience
The team consists of three experienced developers, one project manager / designer and additionally two supplying artists working on illustrations and 3D models.
In past projects the team has already worked together on different projects one of them is [mogwaicoin](https://github.com/mogwaicoin) which has been live since 2018 and on the game on top [The World of Mogwais](https://github.com/WorldOfMogwais/WoM-Releases/releases). Besides that both devs have a background in reverse engineering of games and creating automations or simulators, like sabberstone. Our project manager is working in the financial sector in the same role for years as he is supporting the team. Based on the work of darkfriend77 Sabberstone simulator a lot of research and publications have been done in the AI domain (google: [sabberstone research ai](https://www.google.com/search?rlz=1C1CHBF_deCH914CH914&sxsrf=ALeKk006zio57YXebBkFf5i5F96dp67ePA%3A1612994036885&ei=9FUkYOvDNePEgwfIyLm4Ag&q=sabberstone+research+ai&oq=sabberstone+research+ai&gs_lcp=CgZwc3ktYWIQAzIHCCMQsAMQJ1AAWABg5RZoAXAAeACAAUeIAUeSAQExmAEAqgEHZ3dzLXdpesgBAcABAQ&sclient=psy-ab&ved=0ahUKEwjrjd-Ep-DuAhVj4uAKHUhkDicQ4dUDCA0&uact=5)) or even [ai competitions](https://hearthstoneai.github.io/index.html). Our passion is about creating games and/or enhancing the gaming experience for us. 

### Team Code Repos

* https://github.com/dotmog/SubstrateNetApi
* https://github.com/dotmog/substrate/tree/dotmog_v3.0.0 (dotmog pallet)
* https://github.com/dotmog/DOTMogCore (GameEngine, currently private)
* https://github.com/dotmog/DOTMogClient (Unity3D Client, currently private)
* https://github.com/darkfriend77/Unity3DExample

Other projects lead and maintained by the teammembers
* https://github.com/HearthSim/SabberStone
* https://github.com/WorldOfMogwais/WoMNetCore
* https://github.com/WorldOfMogwais/WoM-Releases/releases
* https://github.com/mogwaicoin/mogwai
* https://github.com/mogwaicoin/NeoScryptCSharp
* https://github.com/rwindegger/RabbitExpress
* https://github.com/rwindegger/UnityMainThreadDispatcher
* https://github.com/darkfriend77/CoinMillions

Adding a polkadot related commit here ..
https://github.com/usetech-llc/polkadot_api_dotnet/pull/10

Active organisations of the teammebers
* https://github.com/dotmog
* https://github.com/WorldOfMogwais
* https://github.com/mogwaicoin
* https://github.com/HearthSim

### Team LinkedIn Profiles
* https://www.linkedin.com/in/cedric-decoster-3a004510b/
* https://www.xing.com/profile/Andre_Schneider90
* https://www.linkedin.com/in/renewindegger/
* https://www.linkedin.com/in/2much/
* https://www.linkedin.com/in/tim-kramarz-80345aba/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 1 months
* **Full-time equivalent (FTE):** 1-2 FTE
* **Total Costs:** 30.000 USD

Optional is the a full game of connect four for additional 10.000 USD, with a timeline to finish end of 2021, the full video serie.

### Milestone 1: SubstrateNetApi — Rework and Documentation of the Substrate .NET API
* **Estimated Duration:** 1 month
* **FTE:**  1-2
* **Costs:** 10.000 USD 

SubstrateNetApi is the base API and it needs a dedicated documentation to allow better adoption and also simplify custom needs, like integration to other blockchain types and more examples and inline documentation.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Enhance API | Generic handling of Types & Metadata, Custom Pallet & Type support |
| 1a. | Enhance API | Extend Generic Types for Vec & Option |
| 1b. | Enhance API | Implement Extension Custom Pallets |
| 1c. | Enhance API | Implement Extension Custom Types |
| 1d. | Enhance API | Generic Approach on Encode & Decode of Types |
| 2. | Schnorrkel | Reimplement Schnorrkel, into SubstrateNetApi |
| 2a. | Schnorrkel | Publish Schnorrkel project, with proper licensing |
| 2b. | Schnorrkel | Implement SR25519, similar to ED25519 in SubstrateNetApi |
| 2c. | Schnorrkel | Tests |
| 3. | Mnemonic | Add mnemonic seed |
| 4. | Types | Wiki documentation on workflow for adding types and maintaining the api |
| 4a. | Types | Implement Rust special enums, who are used like structs |
| 5. | Testing  | Rework & Add Unit Test for better coverage of the migrated SubstrateNetApi | 
| 5a. | Node | Add live node-template testing, for extrinsic |
| 5b. | Custom Pallet Test | Add tests for current and future custom pallet testing |
| 5c. | Custom Type Test | Add tests for current and future custom type testing |
| 6. | Documentation | Documentation referencing prev. milestone 1 https://github.com/w3f/Grant-Milestone-Delivery/pull/102#issuecomment-795929390  |
| 6a. | Inline Documentation | Add inline documentation to make code more understandable |
| 6b. | Wiki | Add a structured wiki, include components and workflows, ex. updateing blockchain metadata, implementing custom pallets, implementing custom types .... |

### Milestone 2: GameEngine — Implement Basic GameEngine Domain Driven Design (DDD) & Implement Basic Bot's for Load and Game Testing
* **Estimated Duration:** 1 month
* **FTE:**  1-2
* **Costs:** 10.000 USD 

Game Engine is the logic layer for games and provides the necessary informations for the presentation layer that is in unity. To avoid having storage accessed by players all the time, we provide a service layer that keeps global storage changes uptodate an creates event handling which can be subscribed by the representation layer for updates or animations.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Game Engine |
| 1a. | Game Engine | Concept game engine and architecture (Domain Driven Design) | 
| 1b. | Game Engine | Refactor DOTMog game engine, reusable parts | 
| 1c. | Game Engine | Implement DDD game engine | 
| 1d. | Game Engine | Account, Player, Wallet, Encryption, Mnemonic, Restore, Transfer |
| 1e. | Game Engine | Event System |
| 1f. | Game Engine | Unit Tests |
| 1g. | Game Engine | Documentation |
| 2. | Service Layer |
| 2a. | Service Layer | Concept service layer (Domain Driven Design) | 
| 2b. | Service Layer | Implement service layer global storage access | 
| 2c. | Service Layer | Add light weight database as extension to in memory | 
| 2d. | Service Layer | Create event system for storage changes | 
| 2e. | Service Layer | Unit Tests |
| 2f. | Service Layer | Documentation |
| 3. | Rest API | Adding service Layer Rest API |
| 3. | Documentation | 
| 3a. | Documentation | Wiki about the service layer and the proper setup |
| 3b. | Documentation | Wiki about accessing the Rest API |

### Milestone 3: Unity — Substrate SDK for Unity, Documentation, Templates and Tutorial Video
* **Estimated Duration:** 1 month
* **FTE:**  1-2
* **Costs:** 10.000 USD 

Creating a Free Unity Asset in the Assetstore, will allow access to Substrate for game devs, it will take some iterations to provide an out-of-the-box solution and the fast paced susbtrate develoment might create additional maintanance work during the on going project. The goal is to provide an end to end working Asset that uses the node-template and allows access to alice and bob account and balances in a mobile deployable project on unity.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Unity | Free Substrate SDK for Unity in the Asset store
| 1a. | Unity | Template using the node-template |
| 1b. | Unity | Template example for Storage access |
| 1c. | Unity | Template example for Event handlin, balance changed |
| 1d. | Unity | Template example for sending extrinsic in Unity |
| 2. | Unity | Example including connection, wallet decription and balance in Unity |
| 3. | Asset | Asset Documentation like (https://assetstore.unity.com/packages/tools/utilities/blockchain-sdk-by-enjin-124133) |
| 3a. | Asset | Tutorial video on implementing a new chain and accessing it with unity |
| 3b. | Asset | Tutorial video on adding a custom pallet and accessing it in unity |
| 4. | Documentation | Maintaining API, Service Layer and UNity Asset on newest Substrate Vers. |

### (Optional) Milestone 4: Complete Game "Connect four", as Tutorial from scratch on Substrate and Unity playable on Mobile
* **Estimated Duration:** 1 month
* **FTE:**  1-2
* **Costs:** 10.000 USD 

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Unity | Pallets, Connect four, Matchmaker, Multiplayer
| 2. | Unity | GameEngine Connect four |
| 3. | Unity | Service Layer Connect four |
| 4. | Unity | Unity Project |
| 5. | Unity | Youtube Videos serie Step-by-Step Connect four on Substrate Mobile |

## Future Plans
We are working towards the goal of creating a modular gaming blockchain with reusable components that game devs can use and enhance.
