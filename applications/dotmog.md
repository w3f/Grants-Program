# DOTMog

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Team Name:** DOTMog Team
* **Payment Address:** 1FgaH4sRHF4boR4Fw316ddKMJbFpsDXGeL

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

![LOGO](https://i.imgur.com/cS6Xj0v.png)

## Project Overview :page_facing_up:

We believe that the promising substrate blockchain technology enables us to bring a new way of gamification to a broad audience in a responsive, playful and immersive way. Our unique technical base allows us and the community to create independent games that can be deployed as enrichment to any substrate based chain.

### Overview

#### Introduction (A brief description of the project.)

***Click for a demo of our alpha release from 16.01.2021***
[![MOBILE](https://dotmog.com/wp-content/uploads/2021/02/DOTMog_game2.png)](https://youtu.be/GKWigHkaTxA)

DOT Mog (substrate based Unity3D Game) - Immerse yourself in the futuristic universe of the Mogwais. Lead them to glory and honor. Experience epic and thrilling adventures & duels. Explore the infinite universe & mysteries.

As probably the first substrate based Unity3D game using our open-sourced (SubstrateNetApi) we bring the functionalities and benefits of this promising technology to a broad audience in a playful and immersive way.

* Breed, create your own unique Mogwais based on the highly sophisticated Pairing DNA Algorithmus.
* Care, learn the language of the Mogwais and respond optimally to their needs and gain a competitive advantage.
* Duel, prepare your Mogwai and fight in the Arena against other Mogwais from all over the world and achieve glory and honour. Move up to master leagues and compete with the best.
* NFT's, trade Mogwais and their precious goods and become a fortuned merchant.
* Explore, travel with interstellar spaceships into the vastness of space to unexplored and mythical places and experience exciting and challenging adventures.
* Innovative, the self-developed SubstrateNetApi allows for the first time full substrate integration in Unity 3D for game development. Benefit from the full stack of substrates blockchain technology.

![LOGIN SCREEN](https://dotmog.com/wp-content/uploads/2021/02/login_screen-2.png)
![MAIN SCREEN](https://dotmog.com/wp-content/uploads/2021/02/Screenshot_1612460593-1.png)
![EXPLORER](https://dotmog.com/wp-content/uploads/2021/02/Screenshot_1612460682-1.png)

DOTMog, is the follow-up project from the creators of "The world of Mogwais" on the mogwaicoin blockchain.

#### Integration of the game into Substrate (An indication of how you will integrate this project into Substrate / Polkadot / Kusama)

The goal is currently to provide a pallet with the full functionality of the game, which can be independently deployed on any Substrate based chain. It is currently active as a reference implementation on its own chain ([DOTMog.com NET](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmogiway-01.dotmog.com#/explorer)).
One of our big goals is to create further creatures in addition to the Mogwai, which have different characteristics depending on the universe on which they are located. So in a future step not only mogwais, but also kusamais or polkadais will populate the universe of the game and create a big community of gamers that loves to dive into this immersive experience.

#### Motivation (An indication of why your team is interested in creating this project.)

We love the way we can materialize our ideas. Our small team consists of game and technology enthusiasts, who work in their leisure time with great dedication, passion and great intrinsic motivation on the project. Everyone inevitably has several hats on, we are developer, graphic designer, project manager, web designer and so on. We try to make up for this deficiency with our great enthusiasm and conviction in our almost daily work for the project.

### Project Details

#### Mockups/designs of any UI components

<https://dotmog.com/gallery/>

![Mogwai Life-Cylce](https://lucid.app/publicSegments/view/54cde0fa-754d-4472-96b0-d7ae32f8d41a/image.png)

#### API specifications of the core functionality

<https://github.com/dotmog/SubstrateNetApi>

#### An overview of the technology stack to be used

![Application Architecture](https://i.imgur.com/fSkrw46.png)

* <https://github.com/dotmog/SubstrateNetApi>
* <https://github.com/dotmog/substrate/tree/dotmog/bin/node/pallets/dotmog>
* <https://github.com/dotmog/DOTMogCore> (GameEngine, currently private)
* <https://github.com/dotmog/DOTMogClient> (Unity3D Client, currently private)

#### Documentation of core components, protocols, architecture etc. to be deployed

We have been working on the World of Mogwais for a long time gaining experience in technology and game design, we were stopped by the limitations of the technology we were using, problems like freezing chains due to hash power spikes or no available storage made our lives hard. Just when we were giving up, we learned about substrate, so we dug into it and started to work on migrating and transforming our project into this new world of 3 sec block times and responsive storage access.

We differentiate the gamelogic into two parts, base logic which is not heavy computing intense which will run inside the node and intense computing gamelogic for example for a dungeon event, which we plan to outsource with an Off-Chain worker to a trusted computing environment.

#### PoC/MVP or other relevant prior work or research on the topic

Our alpha MVP is already running, check out our webpage (<https://dotmog.com/>).

A lot of our previous work on the World of Mogwais is being used as PoC for the current project, the game logic we created [WoMNetCore](https://github.com/WorldOfMogwais/WoMNetCore) is reused where it makes sense or refactored to match better, here an [old PoC](https://github.com/WorldOfMogwais/WoM-Releases/releases). We used the CryptoKitties on Substrate as our first crash course into Rust and luckily it had a theme in common with our vision from 2017 [old whitepaper](https://github.com/mogwaicoin/mogwai-doc/raw/master/doc/Mogwai_Whitepaper.pdf).

### Ecosystem Fit

I think currently there are no such projects in the substrate ecosystem, at least we don't know of any. The full game logic is written down in our confluence, but for the sake of this file, we don't copy & paste it into here, but we can add it if necessary.

## Team :busts_in_silhouette:

### Team members

* Cedric Decoster ([darkfriend77](https://github.com/darkfriend77))
* Rene Windegger ([rwindegger](https://github.com/rwindegger))
* André Schneider ([metastar77](https://github.com/metastar77))

Artists:

* Patrik Bundeli ([2much](https://www.instagram.com/2much_ch/))
* Tim Kramarz ([timkramarz](https://www.timkramarz.com/))

### Contact

* **Contact Name:** Cedric Decoster
* **Contact Email:** cedric.decoster@gmail.com
* Website www.dotmog.com

### Legal Structure

* **Registered Address:** There is no legal structure.
* **Registered Legal Entity:** There is no legal structure.

### Team's experience

The team consists of two experienced developers, one project manager / designer and additionally two supplying artists working on illustrations and 3D models.
In past projects the team has already worked together on different projects one of them is [mogwaicoin](https://github.com/mogwaicoin) which has been live since 2018 and on the game on top [The World of Mogwais](https://github.com/WorldOfMogwais/WoM-Releases/releases). Besides that both devs have a background in reverse engineering of games and creating automations or simulators, like sabberstone. Our project manager is working in the financial sector in the same role for years as he is supporting the team. Based on the work of darkfriend77 Sabberstone simulator a lot of research and publications have been done in the AI domain (google: [sabberstone research ai](https://www.google.com/search?rlz=1C1CHBF_deCH914CH914&sxsrf=ALeKk006zio57YXebBkFf5i5F96dp67ePA%3A1612994036885&ei=9FUkYOvDNePEgwfIyLm4Ag&q=sabberstone+research+ai&oq=sabberstone+research+ai&gs_lcp=CgZwc3ktYWIQAzIHCCMQsAMQJ1AAWABg5RZoAXAAeACAAUeIAUeSAQExmAEAqgEHZ3dzLXdpesgBAcABAQ&sclient=psy-ab&ved=0ahUKEwjrjd-Ep-DuAhVj4uAKHUhkDicQ4dUDCA0&uact=5)) or even [ai competitions](https://hearthstoneai.github.io/index.html). Our passion is about creating games and/or enhancing the gaming experience for us.

### Team Code Repos

* <https://github.com/dotmog/SubstrateNetApi>
* <https://github.com/dotmog/substrate/tree/dotmog_v3.0.0> (dotmog pallet)
* <https://github.com/dotmog/DOTMogCore> (GameEngine, currently private)
* <https://github.com/dotmog/DOTMogClient> (Unity3D Client, currently private)
* <https://github.com/darkfriend77/Unity3DExample>

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

* <https://github.com/dotmog>
* <https://github.com/WorldOfMogwais>
* <https://github.com/mogwaicoin>
* <https://github.com/HearthSim>

### Team LinkedIn Profiles

* <https://www.linkedin.com/in/cedric-decoster-3a004510b/>
* <https://www.xing.com/profile/Andre_Schneider90>
* <https://www.linkedin.com/in/renewindegger/>
* <https://www.linkedin.com/in/2much/>
* <https://www.linkedin.com/in/tim-kramarz-80345aba/>

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 1 FTE
* **Total Costs:** 3.000 USD

### Milestone 1: SubstrateNetApi — Implement Basic Substrate .NET Standard 2.0 API

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 1.500 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Basic API | Create a solid base for the API, to be reusable, easy to use and simple to maintain |
| 1a. | MetaData Model | read & parse metadata v11, v12 to json |  
| 1b. | Connection | Connect & disconnect to node, with StreamJsonRpc, avoid reinventing the wheel where possible |  
| 1c. | Class Model | Create basic class model, for the API |  
| 1d. | Logging | Basic NLog implementation, make sure it's usable with Unity3D |  
| 1e. | Errorhandling | Implement specific errorhandling |
| 1f. | Unit Tests | Create unit test cases |
| 2. | Storage Call | Implement basic storage call |
| 2a. | Generic Call | Implement generic type read from metadata |
| 2b. | Type Converter | Add type converter logic for basic types |
| 2c. | Unit Tests | Create unit test cases |
| 3. | Refactoring | First Round of refactoring and restructure the API |
| 4. | Submit Extrinsic | Implement basic extrinsic submits |
| 4a. | Generic Call | Implement typed extrinsic submits, to make access easier |
| 4b. | Encoding | Add type encoding to the type converter class |
| 4c. | Unit Tests | Create unit test cases, with payload testing signed and unsigned |
| 5. | Testing | Add overall tests including connection to a node |

### Milestone 2: SubstrateNetApi & Pallet DotMog — Implement Advanced Substrate .NET Standard 2.0 API & Basic Pallet DotMog

* **Estimated Duration:** 0.5 month
* **FTE:**  1
* **Costs:** 750 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Second Round of refactoring and restructure the API |
| 2. | Subscriptions | Implement basic subscriptions |
| 2a. | Subscriptions | Implement generic Callback for handling multiple subscriptions with subscriptionId |
| 2b. | Subscriptions | Added storage subscriptions, with paging |
| 2c. | Unit Tests | Create unit test for subscriptions |
| 3. | Refactoring | Refactor type converters to be generic and reusable inheriting from IType, BaseType & Struct Type |
| 4. | Pallet | DotMogPallet add base functionality, MogwaiStruct, AccountConfig & BreedType |
| 5. | Pallet | DotMogPallet add pairing algorithm and MogwaiBios |
| 6. | Update | Update to Substrate v3.0/0.9 – Apollo 14, adjust types |

### Milestone 3: SubstrateNetWallet — Implement basic wallet & example Unity3D applications

* **Estimated Duration:** 0.5 month
* **FTE:**  1
* **Costs:** 750 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Wallet | Add basic wallet functions to be used in the game |  
| 1a. | Wallet | AES wallet file encryption, make sure that it is usable on Unity3D Mobile deployments, Android & iOs. |
| 1b. | Wallet | Wallet unlock and create, subscription to account and updates |
| 1c. | Wallet | Add events so game can register to changes, like mogwai creation, or extrinsic finalization |
| 2. | Examples | Provide basic examples of Unity3D application using the SubstrateNetApi |
| 2a. | Examples | Simple connection example |
| 2b. | Examples | Small wallet example |
| 3. | Documentation | Add documentation to the usage of the SubstrateNetApi |

### Milestone 4a: DOTMog — Features Login / Create / Remove / Breeding / Paring / Morph

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** *self funded, included intellectual property*

### Milestone 4b: DOTMog — Features Explorer / Auction / Trade / Sacrifice / Phases / GameEvents

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** *self funded, included intellectual property*

### Milestone 5: Enhancement of 3D Models / Enhancement of old Logo / Website and more

* **Estimated Duration:** 1 month
* **FTE:** 2 (external supplier)
* **Costs:** *self funded, included intellectual property*

### Milestone 6: MVP 2 — Features Stash/Item/Skills

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** self funded, included intellectual property

### Milestone 7: MVP 2 — Features Combatsystem, Duells, League

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** *self funded, included intellectual property*

### Milestone 8: DOTMog Game — Extensions Proving grounds & Interstellar Travel (Interchain operability)

* **Estimated Duration:** 3 month
* **FTE:**  2
* **Costs:** *self funded, included intellectual property*

## Future Plans

We believe that there is a lot of potential in our project and we have a lot of ideas to provide additional content that can fit on the technology that we are using.

#### Future Plans for MVP 2

* :rocket: **Milestone 6: MVP 2 — Features Stash / Item / Skills**  
* :rocket: **Milestone 7: MVP 2 — Features Combatsystem, Duells, League**  

#### Game Extension

* :rocket: **Milestone 8 Extension — Proving grounds & Interstellar Travel (Interchain operability)**  

## Additional Information :heavy_plus_sign:

The Milestones that have been marked as self funded include intellectual property of our brand and the core game, which includes game algorithm that shouldn't be public, which will run offchain worker on a trusted computing environment, it makes no sense in having this part open source as it would remove the games mysteries that are part of the DOTMog experience.

### ETA of the PROJECT

#### Currently we already have implemented the following Milestones

* :white_check_mark: **Milestone 1: SubstrateNetApi — Implement Basic Substrate .NET Standard 2.0 API**  
* :white_check_mark: **Milestone 2: SubstrateNetApi & Pallet DotMog — Implement Advanced Substrate .NET Standard 2.0 API & Basic Pallet DotMog**  
* :white_check_mark: **Milestone 4a: DOTMog Client — Features Login / Create / Remove / Breeding / Paring / Morph**  

#### On going work

* :construction: **Milestone 3: SubstrateNetWallet — Implement basic wallet & example Unity3D applications**  
* :construction: **Milestone 4b: DOTMog Client — Features Explorer / Auction / Trade / Sacrifice / Phases / GameEvents**  
* :construction: **Milestone 5: Enhancement of 3D Models / Enhancement of old Logo / Website and more ...**  
