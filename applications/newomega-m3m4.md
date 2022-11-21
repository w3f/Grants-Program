# NewOmega (Milestone 3 and 4)

* **Team Name:** NewOmega
* **Payment Address:** DAI: 0xBd774017Ea2ae5B9dec156bA8C987d74eF249b30

## Project Overview

### Overview

* Description

For the initial scope for milestones 1 and 2, please refer to the M1/2 application at https://github.com/w3f/Open-Grants-Program/pull/243.
Now that they are completed, further roadmap is presented in two additional milestones.
End of Milestone 4 marks the end of pre-production development and is intended to become a Release Candidate.

## Team

### Team members
* Wiktor Starczewski

### Contributors
* Michal Stanczak (Visual Design)

### Contact
* **Contact Name:** Wiktor Starczewski
* **Contact Email:** celrisen@gmail.com / poszerny@gmail.com

### Legal Structure
* **Registered Address:** N/A
* **Registered Legal Entity:** N/A

### Team's experience

Wiktor:
I'm an experienced software developer, and an early blockchain adopter. Previously involved with the Elastos Foundation as a freelance developer, my two favourite things are blockchain and web development. I have 15 years experience in the business.

### Team Code Repos
* https://github.com/WiktorStarczewski

### Team LinkedIn Profiles
* https://www.linkedin.com/in/wiktor-starczewski-94625b96/
* https://www.linkedin.com/in/michael-stanczak-ux-digital

## Development Roadmap

After establishing the initial game concept, its implementation in the form of Ink contracts and game client, several important aspects need to be finalised before a wider release. New game features will provide a revenue model to finance the operation of the game.

### Tokens

A token will be created to facilitate the new Universe mode, which can be minted and spent in game on ship production. It is further referred to as Silver and is not meant to be tradeable. Gold token, referenced below, is the token of the operating network, or DOT. All actions performed in game for those tokens directly finance the game contracts.

### Betting

Firstly, a betting system will be developed, which allows players to attach bets to their ranked challenges, and win/lose in tokens that way. The tokens used are ingame tokens (without real world value), to avoid the notion of gambling.

In game terms, that means that a player's defence fleet will now have a balance associated with it, and attacking other fleets requires specifying one's own bet (lower than the defence bet), which is then paid back / taken away depending on the fight result.

### Ship Modules

Modules are an extension to the game (eventually in the form of NFTs, when a solid platform becomes available on Polkadot ecosystem), which allows equipping ships with additional abilities (effects, think spells, such as snare, root, blind, buffs/debuffs). They are crafted or looted, although loot is limited to only basic models. The crafting requires Gold tokens or components received from dismantling existing modules. Each Module has a % chance to trigger an effect for X rounds (all configurable by the Module itself).

Basic modules will drop from fights randomly, providing an influx of potential token-valued items to farm and sell.

* Technical Implementation

Support for Ship Modules will be implemented in the game (fight) engine, because the Modules determine the outcome of the battle. Since in order to use Modules, the Player will need to unlock them, by Crafting or Looting, we will track to which Modules the Player has access to by issuing NFT Tokens at the point of unlock. The Game Engine will then resolve the statistics of the Module and apply them in combat, according to the information stored in the NFT itself.

### Modules Market

A Market functionality will be implemented, allowing trading of Modules for Gold Tokens with other players. There will be a commission from every trade for the Game Contract.

* Technical Implementation

Implemented with a payable Smart Contract message that transfers the NFT between players.

### Universe

The Universe will be a new functionality in which players will fight over territory control in an infinite map. It is divided into Systems, each containing 7 Planets, each able to be fought over and colonised. Each System has 4 other Systems adjacent to it. Initially all Systems are undiscovered, and the players can use Gold Tokens to discover them. Discovered Systems forever display the name of their disoverer. There is no limit to the Systems that can be discovered.

Each player starts in a newly generated System. By connecting adjacent Systems together and exerting control over them, a territory control zone is created.

Each Planet generates Silver Tokens over time, allowing controlling players to collect them, by the process of which they become minted. Silver Tokens can be then spent on buying ships to use in the Universe mode. Ships are used to attack and defend (occupy) Planets and can be lost in battle.

The important thing here is to combine the exploration, leaving a mark on the game by discovering new systems, and with the tactical combat and progress to control systems. Ship production that depends on the amount of territory held provides a building component to build strategies upon.

* Technical Implementation

The Universe operates as a Smart Contract, which stores the discovered Systems (position in space, discoverer, planets and their infrastructure levels, etc), tracks player ownership and defence fleets assigned to Planets inside. The Contract will generate new Systems on demand, which is the process of "discovering", by assigning unused coordinates to the new System, therefore creating one infinite space to discover and control.

Each Planet in a System (or, broadly, any object able to generate Silver Tokens), stores the speed of production and last "harvesting" timestamp in the contract, so that when the user requests to "Harvest" (mint the Silver Tokens), the amount can be established by subtracting block numbers and multiplying by production speed.

When attacking Planets, the new Smart Contract will use the fight resolution contract to determine the winner, and change (or not) the ownership of the Planet. Number of ships available to players will be subtracted also, according to the fight losses.

Since players will be able to possess fleets of ships, we will track that in the Smart Contract itself, increasing the ship counts upon production, and decreasing after a fight took place.

### Usages of Silver Token
    - Buying Ships (Burns Tokens)
    - Betting in Ranked Combat

### Usages of Gold Token
    - Universe: Discovering new Systems
    - Universe: Renaming planets, sectors
    - Universe: Custom territory flag
    - Universe: Upgrading planets, sectors
    - Ship Module Crafting
    - Ship Visuals

### Additional areas of development

Focused on releasing the game to the public as soon as possible, the deployment to a public (test) network, creation of a mobile client and publishing on App Stores (potentially Play Store at first, due to Apple blockchain apps policy).

### Deliverables

Frontend part of all deliverables to be made in JavaScript (React / Babylon.js / Capacitor.js).
Backend (smart contract) part in Ink.

Milestone 3 (1)
* **Estimated Duration:** 1.5 month
* **FTE:**  1.5
* **Costs:** 6500 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can run the contracts which will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Betting | We will implement betting in the game client / contracts for ranked fights |
| 2. | Mobile Client | The client will become a hybrid app, in addition to playable on web, it will be packaged and deployed on Google Play Store, and ready to deploy on Apple App Store (NOTE, Apple policies currently prevent submitting blockchain apps, and that is unlikely to change for the duration of this grant). |
| 3. | Game: Modules | We will implement modules in the game engine, with the ability to fire effects (snare, root, blind, debuffs) at a specific % chance during the fight. |
| 4. | Game: Targeting | We will implement the ability to change targeting of ships, in the engine and UI. |
| 5. | Game: Universe | We will implement the Universe mode, with territory exploration and ship production as described in Roadmap |

Milestone 4 (2)
* **Estimated Duration:** 1.5 month
* **FTE:**  1.5
* **Costs:** 6500 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can participate in the game, interact with their wallets etc. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Game: Crafting | We will implement the ability to own, break down and craft Modules. |
| 2. | Modules Market | We will implement an in game market where it is possible to trade modules between players
| 3. | Game: Modules as NFTs | We will implement ownership of Modules in a NFT standard (ERC-1155 or ERC-721) |
| 4. | Visuals: Illustrations | The game will receive a brand new set of illustrations, custom made to compliment the game climate |


### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 3 FTE
* **Total Costs:** 13000 DAI


## Future Plans

Articles:
https://wiktorstarczewski.medium.com/newomega-3504ce08120
https://wiktorstarczewski.medium.com/newomega-now-and-future-a87589d01722

Homepage:
https://www.newomega.online/


The goal is to have a deployed, playable, and marketable test version on a public network at the end of Milestone 4. The combination of space exploration, leaving a permanent mark on an inifinite universe, combined with a tactical combat element, all delivered in a modern 3d web (hybrid) app, will provide a broader "reason" to enjoy the game, and the ranked combat (leaderboards + staking own ingame money on fights) will provide a competitive element to compliment.

In time (after M4), the Universe will become more diverse; producing different minerals which will be used to craft Modules of certain parameters. The minerals/production system should offer the player an option creation of an "industry" used to produce Modules, and the mineral types should be randomly generated when discovering Systems, making control of some Systems more attractive than others and giving more reason to territory control.

Once released to test users, additional features will be driven by test user feedback, at which stage we will also trigger development on onboarding features (in game tutorials, starting resources, but also gas (weight => transaction cost) sponsoring model to remove the requirement of owning tokens for new players (to pay registration contract's gas fees, for example). And as the DOT ecosystem matures, new opportunities for technical improvements will present themselves.

