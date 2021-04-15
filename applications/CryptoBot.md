# **Open Grant Proposal**

- **Project Name:** CryptoBot
- **Team Name:** CryptoBot Studio
- **Payment Address:** Madao.eth

## **Project Overview 📄**

### **Overview**
**CryptoBot** is a 2D sandbox game with gameplay that revolves around exploration, building, crafting and NFT Collecting. Our goal is: Make some real game in blockchain (Highly playable one).

CryptoBot uses Substrate as the blockchain development framework, 
and we will use a Ruby on Rails Web Application to store some other data(like user chat.) From the technical level, if we want gameplay smoothly, it must have some trade off, we will make sure that highly credible data storage and NFT materials/game props are stored on the chain. Other data we will choose to save it on a centralized server.

Apart from the daily play part of the game, we will design a main line containing at least 50,000 words.

We have done many attempts to combine blockchain with video game, to make sure we can achieve our goals, we will keep thinking these question: 

- How can users actually have fun in this game?
- How to reduce speculative users/bots?
- How to use models to control a healthy NFT market?

### **Project Details**
About this game, there will be 4 components: Game Runtime, Users Controller, NFT Market Service, In-Game User action validator(we call it BotShield).

And sure, these 4 components just the game's core, the addition part is the game logic itself.

#### Game Runtime
Our Game Runtime will recalculate some major datas in every block:
1. Newly generated items
2. Resources acquired and consumed by users
3. Event triggered by the previous block

In order to make sure that the gameplay will not be compromised, Some data with low reliability requirements will be calculated by the centralized server.

Both sides synchronize data through asynchronous communication.

#### Users Controller
User's CURD will trigger this controller. Once a user did create, we will create a user in both side.

The chat will be stored separately on a centralized server.

#### NFT Market Service
We will use Darwinia Network's cross-chain bridge protocol move game's inventory/items to polkadot's network from ethereum.

Inventory/Items's metadata format will be

```
{
    name: [STRING],
    description: [STRING],
    resourceUrl: [STRING], //IPFS url(and sure, we will create a CDN cache for this)
    levelRequire: [Integer],
    tags: [STRING],
    rarity: [Integer],
    ...
}
```

And the market part we will deploy a smart contract for this, it will contain these methods：

1. order(amount: integer, accountAddress: address) Create a order 
2. safeTransferFrom(from: address, to: address)
3. buy(amount, toAddress: address) 
    1. it will check order exist
    2. make sure balance enought
    3. transfer amount
    4. use safeTransferFrom to transfer NFT.

And we will create a JS API library for our game to use. Just like `opensea-js` https://github.com/ProjectOpenSea/opensea-js

#### In-Game User action validator
Actually that is an anti-cheat validator, we will create serval rules to make sure user actually play games without cheating.
We will create a **rule engine** to organize some rules to measure users behavior. If found some problem user, we can detect it and make it right.

#### Game Design Document (GDD)
1. Game Title: Crypto Art
2. Game Genre: Action-adventure, ‎sandbox, (Roguelike)
3. Game Perspective: Third person
4. Game Mode(s):
    * Single player
    * Multi player (optional)
5. Core Idea: CryptoBot's background is a Space cruiser pilot because of the failure landed on an unknown planet. Then leave this planet through exploration, building, crafting.
6. Goal: First phase will be leave this planet.
7. Game Play: 
    1. Objective:
        1. Collect objects that can be used as crafting
        2. Defend yourself against
        3. Get health to keep alive
        4. Create an automated production mechanism (pipeline)
        5. Item creation and sales system
    2. Game Logic:
        1. Every item has the number of uses, the number of uses is used up, and the item is hours
        2. Characters cannot pick up anything to big or heavy for them
        3. Can be automated by conveyor belts and sorters
        4. Most of the things that can be picked up need to be processed
        5. Every Block Maps will update some items(if you did picked some items).
    3. Game Resources (Because a large number of props require design mechanisms, we will only discuss the basic elements first):
        1. Wood, Flammable and can process to wood board. You need it for any building
        2. All kinds of ores, Obtain metals through construction refineries.
        3. Oil, Bot need it.
    4. Economies:
        1. In-Game Currency
        2. inventory/items
    5. Game Play I/O Controls:
        1. Keyboard
        2. Mouse
        3. To move around the environment:
            1. WASD or Arrow
        4. Special keys:
            1. E or click to interaction.
            2. click in different distance can do different things
            3. ESC is pause
            4. right click if target can be edit, it will show a menu.
8. Game Engine (tentative): GDevelop, it provide good tool for developer and is very friendly for 2D games. We may fork a version then 

### **Development Roadmap 🔩**
### Overview
- **Total Estimated Duration:** 6 months
- **Full-time equivalent (FTE):** 3 FTE
- **Total Costs:** 20000 DAI
### **Milestone 1 — **
- **Estimated Duration:** 6 months
- **FTE:** 3
- **Costs:** 20000 DAI
| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0c. | Testnet | Setup and run a testnet |
| 0d. | Game Development Logs | Keep in touch with the community |
| 1. | Substrate module: UserController | We will create a Substrate module that will generate events and allow user create avatar and trigger events |
| 2. | Substrate module: Runtime | We will create a Substrate module that will manage game events, update game world's data. |
| 3. | Substrate module: In-Game User action validator | We will create a Substrate module that will detect wrong data movement.(Maybe this problem will move to web application.) |
| 4. | Web Application | We will implementation User analysis\User Chat\Daily event operation in this place. |
| 5. | Web UI: Crypto Bot Game | And the Game's 'Frontend' will be this part, it will be heavy scripting job and pixel art design and game implementation in this part |
| 6. | NFT Integration SDK | Refer to the implementation of opensea js |

### **Ecosystem Fit**
1. My Neighbor Alice: That is a BSC 'star valley'-like game, currently we only can see some video. All we actually know is $ALICE token price.
2. Alien Worlds: Another Binance's friend. But the in-game design is great! but it is not doing well in anti-cheat. This game now is full of script runner. https://alienworlds.io/


### Team's experience
- Madao
    - Project Lead
    - Web Full-Stack Engineer(9 years)
    - Game Designer(3 years)
    - Blockchain Developer(2 years)
    - http://github.com/madao-3
- Pixel Art Artist - Recruiting...

![](https://avatars.githubusercontent.com/u/1069652?v=4)
