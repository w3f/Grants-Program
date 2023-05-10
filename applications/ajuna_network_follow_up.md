# Ajuna Network Follow up

* **Team Name:** Ajuna Network Team
* **Payment Address:** 1. Milestone: 1FgaH4sRHF4boR4Fw316ddKMJbFpsDXGeL 2-4. Milestone: 3H2shhx3GyMjc5Y4QuF9D5skbQgZDhvPMq
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

![image](https://user-images.githubusercontent.com/17710198/136852531-d9eb47cd-efcd-4c88-bdbf-78dfcbffe287.png)

## Project Overview :page_facing_up:

We believe that the promising substrate blockchain technology enables us to bring a new way of gamification to a broad audience in a responsive, playful and immersive way. Our unique technical base allows us and the community to create independent games that can be deployed as enrichment to any substrate based chain.

### Overview

#### Introduction (A brief description of the project.)

This is a follow up grant, on <https://github.com/w3f/Open-Grants-Program/pull/265>, of which all milestone have been submitted.

* Milestone 1 [LINK](https://github.com/w3f/Grant-Milestone-Delivery/pull/102) - [Evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/dotmog_1_alxs.md)
* Milestone 2 [LINK](https://github.com/w3f/Grant-Milestone-Delivery/pull/161) - [Evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/dotmog_2_Noc2.md)
* Milestone 3 [LINK](https://github.com/w3f/Grant-Milestone-Delivery/pull/162) - [Evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/dotmog_3_Noc2.md)

This followup grant is intended to create real value in the provided API, GameEngine, Service Layer and Unity Asset to help ramping up teams focusing on game develoment with substrate based chains, we are currently in development towards our early game access target in july for the DOTMog Mobile Game, which is our flagship game. The game has been described in our first open-grant application, as it is not part of the grant itself, we have removed the full description of it.

[DEMO (from May 2021)](https://youtu.be/xPE16aMZZpc)

What matters for the grant are the artifacts that can be reused and extracted out of our game framework. The intention is to build a full featuring SDK for Unity and Substrate, which will be provided as a free Asset in the Unity Asset Store [LINK](https://assetstore.unity.com/) and usable out-of-the box with the node-template pallet.

This is part of the components that **Jeton Network** is providing and maintaining for future blockchain game developers. Jeton Network intends to work towards a second order relay chain for games that like the benefit of using there own blockchain, but can't afford a parachain or parathread slot on Polkadot or Kusama.

![image](https://user-images.githubusercontent.com/17710198/144747995-1290d21b-7767-4f8b-9057-b978e8e81067.png)

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

<https://github.com/dotmog/SubstrateNetApi>

#### An overview of the technology stack to be used

![image](https://user-images.githubusercontent.com/17710198/121258352-1578c380-c8af-11eb-8ab1-453e68299743.png)

#### Documentation of core components, protocols, architecture etc. to be deployed

* <https://github.com/ajuna-network> All components for the Generic Gaming Blockchain and the UnitySDK will be provided under the organisation Ajuna Network.

**Generic Game Pallets**<br/>
Generic Game Pallets, build special features used in games, they are fully supported in the UnitySDk<br/>
Match Maker Pallet, Game Event Pallet and ConnectFour Pallet using them both. More to come, ...

**UnitySDK for Substrate**
* Supporting features GameWallet (Wallet Creation, Restore, Mnemonic, Send)<br/>
People can easily sign in to your game, by creating a wallet. Password encryption to login and a mnemonic to transfer or restore a lost passwort or mobile device.  
* Supporting features Matchmaker (Queueing, Rankingsystem, Invites)<br/>
People can join Matches against other players in a ranked or unranked system, they are also able to create a match by invitation. The multiplayer setup enables turn based games with or with out time limitations an easy entry.
* Supporting features GameEvent (Events that happen on specified blocknumbers, like an egg hatching, turn time passed or auction period finished)<br/>
Easy access to Game Events for animation or updates that are triggered by storage updates. React on any on-chain events and create an interactive experience on mobiles.
* Supporting features Asset (Create, Delete, Transfer, Buy/Sell, Auction)<br/>
Asset handling allowing to create, delete, transfer and auction them. Having full availability of the pallet asset in the UnitySDK enables devlopers create in game shops and auction houses.
* Supporting feature for custom gamelogic<br/>
Custom logic can be easy implemented or at least it is well documented how the workflow works to get custom pallet functions into the UnitySDK.

The SDK includes a **premade GameEngine**, that supports the above features out of the box, additionaly, instead of connecting straight to the node over the substrateNetApi, it is possible to scale over a deployable ServiceLayer that offers a RestAPI to decouple client storage accesss to full nodes.

**SubstrateNetService**
The service Layer project can be deployed to a server as DOTNet application offering node storage information as RestAPI to the UnitySDK GameEngine. The Service Layer can add a persistent layer to store node storage, with a Database which is already supported and documented.

#### PoC/MVP or other relevant prior work or research on the topic

Our alpha game is already running, check out our webpage (<https://dotmog.com/>).

The basic part of the open-grant has been developed as framework for our flagship game, as we where focusing on the game it self the API lakes inline comments and might be a little complicated to jump in with out a good documentation or tutorials.

A lot of our previous work on the World of Mogwais is being used as PoC for the current project, the game logic we created [WoMNetCore](https://github.com/WorldOfMogwais/WoMNetCore) is reused where it makes sense or refactored to match better, here an [old PoC](https://github.com/WorldOfMogwais/WoM-Releases/releases). We used the CryptoKitties on Substrate as our first crash course into Rust and luckily it had a theme in common with our vision from 2017 [old whitepaper](https://github.com/mogwaicoin/mogwai-doc/raw/master/doc/Mogwai_Whitepaper.pdf).

### Ecosystem Fit

I think currently there are no such projects in the substrate ecosystem, at least we don't know of any. The setup should enable an easy start in to game development with substrate.

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
* **Contact Email:** cedric@ajuna.io
* Website www.ajuna.io

### Legal Structure

* **Registered Address:** Stetten SH, Switzerland
* **Registered Legal Entity:** BloGa Tech AG

### Team's experience

The team consists of three experienced developers, one project manager / designer and additionally two supplying artists working on illustrations and 3D models.
In past projects the team has already worked together on different projects one of them is [mogwaicoin](https://github.com/mogwaicoin) which has been live since 2018 and on the game on top [The World of Mogwais](https://github.com/WorldOfMogwais/WoM-Releases/releases). Besides that both devs have a background in reverse engineering of games and creating automations or simulators, like sabberstone. Our project manager is working in the financial sector in the same role for years as he is supporting the team. Based on the work of darkfriend77 Sabberstone simulator a lot of research and publications have been done in the AI domain (google: [sabberstone research ai](https://www.google.com/search?rlz=1C1CHBF_deCH914CH914&sxsrf=ALeKk006zio57YXebBkFf5i5F96dp67ePA%3A1612994036885&ei=9FUkYOvDNePEgwfIyLm4Ag&q=sabberstone+research+ai&oq=sabberstone+research+ai&gs_lcp=CgZwc3ktYWIQAzIHCCMQsAMQJ1AAWABg5RZoAXAAeACAAUeIAUeSAQExmAEAqgEHZ3dzLXdpesgBAcABAQ&sclient=psy-ab&ved=0ahUKEwjrjd-Ep-DuAhVj4uAKHUhkDicQ4dUDCA0&uact=5)) or even [ai competitions](https://hearthstoneai.github.io/index.html). Our passion is about creating games and/or enhancing the gaming experience for us.

### Team Code Repos

* <https://github.com/dotmog/SubstrateNetApi>
* <https://github.com/dotmog/pallet-dotmog> (dotmog pallet)
* <https://github.com/dotmog/DOTMogCore> (GameEngine, currently private)
* <https://github.com/dotmog/DOTMogClient> (Unity3D Client, currently private)
* <https://github.com/darkfriend77/Unity3DExample>
* <https://github.com/dotmog/SubstrateUnityWalletSimple>

Other projects lead and maintained by the teammembers

* <https://github.com/HearthSim/SabberStone>
* <https://github.com/WorldOfMogwais/WoMNetCore>
* <https://github.com/WorldOfMogwais/WoM-Releases/releases>
* <https://github.com/mogwaicoin/mogwai>
* <https://github.com/mogwaicoin/NeoScryptCSharp>
* <https://github.com/rwindegger/RabbitExpress>
* <https://github.com/rwindegger/UnityMainThreadDispatcher>
* <https://github.com/darkfriend77/CoinMillions>

Adding a polkadot related commit here ..
<https://github.com/usetech-llc/polkadot_api_dotnet/pull/10>

Active organisations of the teammebers

* <https://github.com/ajuna-network>
* <https://github.com/dotmog>

### Team LinkedIn Profiles

* <https://www.linkedin.com/in/cedric-decoster-3a004510b/>
* <https://www.xing.com/profile/Andre_Schneider90>
* <https://www.linkedin.com/in/renewindegger/>
* <https://www.linkedin.com/in/2much/>
* <https://www.linkedin.com/in/tim-kramarz-80345aba/>

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 4 months
* **Full-time equivalent (FTE):** 1-2 FTE
* **Total Costs:** 25.000 USD

### Milestone 1: SubstrateNetApi — Rework and Documentation of the Substrate .NET API

* **Estimated Duration:** 1 month
* **FTE:**  1-2
* **Costs:** 5.000 USD

SubstrateNetApi is the base API and it needs a dedicated documentation to allow better adoption and also simplify custom needs, like integration to other blockchain types and more examples and inline documentation.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Enhance API | Generic handling of Types & Metadata, Custom Pallet & Type support |
| 1a. | Enhance API | Extend Generic Types for Vec & Option |
| 1b. | Enhance API | Implement Extension Custom Pallets & Types for PolkaDot, Kusama, DOTMog & UniqueNetwork |
| 1c. | Enhance API | Generic Approach on Encode & Decode of Types |
| 1d. | Enhance API | Implement Rust special enums, who are used like structs |
| 2. | Schnorrkel | Reintegrate Schnorrkel, into SubstrateNetApi |
| 2a. | Schnorrkel | Publish Schnorrkel project, with proper licensing as nuget package |
| 2b. | Schnorrkel | Implement SR25519, similar to ED25519 in SubstrateNetApi |
| 3. | Mnemonic | Add mnemonic seed, in SubstrateNetApi |
| 3a. | Mnemonic | Add mnemonic seed, recovery on lost password or wallet file |
| 6. | Documentation | Documentation referencing prev. milestone 1 <https://github.com/w3f/Grant-Milestone-Delivery/pull/102#issuecomment-795929390>  |
| 6a. | Inline Documentation | Add inline documentation to make code more understandable |
| 6b. | Wiki | Add a structured wiki, include components and workflows, ex. updateing blockchain metadata, implementing custom pallets, implementing custom types .... |
| 6c. | Types | Wiki documentation on workflow for adding types and maintaining the api |
| 6d. | Node | Add documentation how to setup live node-template testing, for extrinsic |
| 6e. | Custom Test | Add documentation for custom pallet and type testing |
| 7. | Ajuna Network | Internet appearance of the Ajuna Network, under www.ajuna.io |
| 7a. | Ajuna Network | Article and Blog about this open grant and the deliverables, at least one deep dive post into each milestone subject area, SubstrateNetApi, GameEngine, ServiceLayer & ConnectFour (if accpeted) |

### Milestone 2: GameEngine — Implement Basic GameEngine Domain Driven Design (DDD) & Implement Basic Bot's for Load and Game Testing

* **Estimated Duration:** 1 month (est. February 2022)
* **FTE:**  1-2
* **Costs:** 7.500 USD

Game Engine is the logic layer for games and provides the necessary informations for the presentation layer that is in unity. To avoid having storage accessed by players all the time, we provide a service layer that keeps global storage changes uptodate an creates event handling which can be subscribed by the representation layer for updates or animations.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Pallet | GameEventSystem(events on blocknumber based not on extrinsic), Matchmaker(Queue up, Ranked and non ranked, create matches) |
| 2. | Game Engine |
| 2a. | Game Engine | Concept game engine and architecture (Domain Driven Design) and Implement basic and generic game Entities |
| 2b. | Game Engine | Account, Player, Wallet (Private Key Encryption / Mnemonic Restore |
| 2c. | Game Engine | Asset Transfer, Buy/Sell, Auction |
| 2d. | Game Engine | GameEventSystem (events on blocknumber based not on extrinsic), Matchmaker (Queue up, Ranked and non ranked) |
| 2e. | Game Engine | Event System, for game changes for games in Unity you need trigger points for animations and datachanges, this need to be decoupled, so you have an easy access to them in Unity. |
| 2f. | Game Engine | Custom Game Logic layer |
| 3. | Service Layer |
| 3a. | Service Layer | Concept service layer (Domain Driven Design) |
| 3b. | Service Layer | Implement service layer global storage access over SubstrateNetApi |
| 3c. | Service Layer | Implement service layer for all mentioned Entities (Account, Player, Wallet, etc.), register changes and creation of entities |
| 3c. | Service Layer | Implement service layer extension to use a light weight database as a persistence layer |
| 3d. | Service Layer | Create event system for storage changes, this is needed for example to trigger presentation layer updates or animations, like egg hatching animation when gameevent triggers |
| 4. | Rest API | Adding service Layer Rest API, accessing Game data |
| 5. | Basic Bot | Implement Basic Bot, that plays Connect Four with an human like strategic |
| 6. | Tutorial | Service layer, Docker setup, Rest API & Multithreaded Bot testing of Game and Performance |
| 7. | Generator | Since substrate monthly-2021-10, types are fully disclosed in the metadata, which allows to generated more or less everything for the service layer |
| 7a. | MetaData | Decode Node exposed Metadata into a json format readable and interpretable for the generator, json file of the node exposed metadata |
| 7b. | Generator | Ajuna.NetApiExt Generator, including all Types |
| 7c. | Generator | Storage Generator, including all Pallets |
| 7d. | Generator | Rest Generator, including all Pallets |

### Milestone 3: Unity — Substrate SDK for Unity, Documentation, Templates and Tutorial Video

* **Estimated Duration:** 1 month (est. March 2022)
* **FTE:**  1-2
* **Costs:** 7.500 USD

Creating a Free Unity Asset in the Assetstore, will allow access to Substrate for game devs, it will take some iterations to provide an out-of-the-box solution and the fast paced susbtrate develoment might create additional maintanance work during the on going project. The goal is to provide an end to end working Asset that uses the node-template and allows access to alice and bob account and balances in a mobile deployable project on unity.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Unity | Free Substrate SDK for Unity in the Asset store |
| 1a. | Unity | Template Wallet, integrated over the ServiceLayer and the GameEngine, including functionalities (Creating Wallet (Private Key Ed or Sr), using a Mnemonic seed), Restoring Wallet, Transfering Coins, Balance Update, Error handling) |
| 1b. | Unity | Template with On chain GameEvent and Pallet Matchmaker, where User can queue up to a match and animations that are executed on on chain game events |
| 1c. | Unity | Template example for Event handlin, balance changed, sending extrinsic in Unity |
| 2. | Unity | Tutorial for building and connecting with Unity including connection, wallet decription and balance in Unity |
| 3. | Asset | Asset Documentation like (<https://assetstore.unity.com/packages/tools/utilities/blockchain-sdk-by-enjin-124133>) |
| 3a. | Asset | Tutorial video on implementing a new chain and accessing it with unity |
| 3b. | Asset | Tutorial video on adding a custom pallet and accessing it in unity |
| 3c. | Asset | Integration Guide of adding a new function in a pallet, adding it as custom pallet function to SubstrateNetApi, adding custom storage access to Service Layer, and adding access in game engine to the new function for unity |

### Milestone 4: Complete Game "Connect four", as Tutorial from scratch on Substrate and Unity playable on Mobile (Player vs. Player)

* **Estimated Duration:** 1 month (est. March 2022)
* **FTE:**  1-2
* **Costs:** 5.000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Pallet & Unity | Pallet: Connect four, Matchmaker, Multiplayer, TimeBased Turns |
| 2. | Unity | Provide fully functional Multiplayer playable "Connect Four" for Mobile (Android), playable with bots and as real player |
| 3. | UnitySDK | Providing a performance test setup that creates 1000 bots playing the game concurrently |
| 4. | Unity | Youtube Videos serie Step-by-Step Connect four on Substrate Mobile |

## Future Plans

We are working towards the goal of creating a modular gaming blockchain with reusable components that game devs can use and enhance.
