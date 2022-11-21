# NewOmega

* **Team Name:** NewOmega
* **Payment Address:** DAI: 0xBd774017Ea2ae5B9dec156bA8C987d74eF249b30

## Project Overview

### Overview

* Description

NewOmega is, very simply, a blockchain game that can not be shut down.

The current state of online gaming is a massive in-game purchases system, for anything ranging from quality of life improvements for players, to actual advantages, which usually can otherwise be obtainted but take time to get. Purchasing things, combining gaming and finance (at least, a real money wallet), became the norm. That is certainly the sentiment we're aiming to take advantage of.

Purchasing things sounds great, but what if the game stops being profitable tomorrow? It will be shut down. All the spent money on "owned" items suddenly evaporates. The value of in game is at the whim of game developers. This is the second reason why New Omega was born.

With blockchain, there are several things we can solve here, right now. First of all, let's rework the running costs. Let's take advantage of blockchain/smart contract platforms to move the computing away from central servers with traditional financing, into a place where we can easily integrate them with an economic model to keep them going.

By moving the processing logic to the blockchain, we achieve another important win when gaming, especially competitive gaming, is concerned: we provide transparency into the code, therefore guaranteeing fairness. Dice rolls are fair (thanks to Oracles). The game engine is fair (you can see the code at any time).

Blockchain also offers an unique opportunity for a different take on a financing model. Since the game interactions are effectively smart contract executions, there is a cost involved with the interactions. At the very basic level, the game can always keep going, because the users pay for the upkeep (the blockchain interactions). On top of that however, NewOmega wants to introduce items and otherwise collectible objects (ideally NFTs), purchasable by crypto, proceeds of which can be divided into 3 Pools: Development, Upkeep, Rewards.

Development Pool would finance the development of the game (the development team private address)
Upkeep Pool would be used to finance smart contract execution for users, especially new users, to ease onboarding. ETH offers solutions like Gas Station, which would ideally be employed.
Rewards Pool would be used to reward the winners of a game season (1 week or 1 month), so the top players would be rearded with crypto.

NewOmega wants to be self-financed, never-ending, strategic space game, with provably fair results and crypto rewards for the best. The situation described above (game shutting down due to not being profitable), is an actual real life event that motivated the team to seek a solution. The players should decide which game lives on, not corporations.

The game itself:
  * a tactical spaceship combat simulator, in which players compose fleets from spaceships and attack each other, for in game progress and the leaderboard (or ladder system)
  * users select fleets, tactics, and then the game resolves without users interaction
  * other features can be incorporated, such as territory control system which would lead to the fights (which are at the core of the game)

The project is currently in prototype stage, a basic client exists and smart contracts are published on the Ethereum Ropsten testnet, so the basic game is fully playable.
However, we are interested in developing this using Polkadot with Ink! and WASM smart contracts, and therefore we would like to submit our application, for your consideration.


### Project Details
The prototype is available on GitHub under https://github.com/WiktorStarczewski/newomega.trinity (Contracts under hardhat/contracts. Frontend client in src/.)

The technicals:
  * a JavaScript (Babylon.js) 3d game frontend
  * Ink smart contracts
  * integrated wallet via polkadot.js
  * game engine, a smart contract
  * game board (state of the game), a smart contract

Game board contains the results, is used to create leaderboards, and also stores individual players progress in game.
Game engine is pure, does not alter the blockchain, so its free and is used to provide training mode in game. Not everything can be a paid smart contract.

### Ecosystem Fit
There are games out there, but in our view, none have fully yet embraced the opportunities of decentalisation.

## Team

### Team members
* Wiktor Starczewski

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

## Development Roadmap

Code commited reguarly to the GitHub repository.

Milestone 1 — Migrate to Ink! and integrate game codebase
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 7500 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can run the contracts which will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Ink: GameEngine | We will port NewOmega.sol into Ink (see https://github.com/WiktorStarczewski/newomega.trinity/blob/master/hardhat/contracts) |
| 2. | Ink: GameRewarder | We will write GameRewarder contract in Ink, which will generate buyable packages for the users |
| 3. | GitHub codebase | We will provide the prototype JavaScript game client, functionally as of the moment of application (playnewomega.online) |


Milestone 2 — Working prototype with signing transactions
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 7500 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can participate in the game, interact with their wallets etc. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Integrate game client with polkadot.js for wallet management and signing txs | We will, via polkadot.js, integrate a wallet solution and allow playing the game by interacting with the smart contracts to defend, attack, view leaderboards, and progress in game (basic) via experience points gained through combat. |



### Overview
* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 2 FTE
* **Total Costs:** 15000 DAI


## Future Plans
Gaining an initial playerbase is very important, especially when experimenting with different payment models based on crowdfunding. Organising the self funding aspect therefore has to come first.

**Roadmap**

* Self Funding / Financing Smart Contracts Fund
* Designing Own Ships (statistics)
A way to provide additional strategic options to the game, without increasing the smart contract load too much (one can design a ship and easily pass it into the fight contract as parameter, so its next to free).
* Territory Control
Will put more load on the contract side, but for broader gameplay will be unavoidable. Contracts for map control can be kept lean, so they would be cheap.
* Cooperative Play
Combining fleets together for attacks, etc.
* Alliances

## Additional Information
A working frontend prototype and smart contracts on Ethereum Ropsten are available. No teams have already contributed (financially) to the project. No other grant applications have been made.
