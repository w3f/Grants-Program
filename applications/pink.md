# PolkaGodot: Open-source toolkit for integrating Asset Hub NFTs into Godot Engine games

## **Project Overview**

**PINK** ([dotispink.com](https://www.dotispink.com/)) is a community project that has been actively building on Polkadot since early 2024, having launched multiple browser games, including a leaderboard-oriented racing game called Pinkness Overdrive (playable at [https://pink.racing](https://pink.racing)).
The sequel to Pinkness Overdrive is currently in development, featuring **real-time multiplayer** and **wearable cosmetics as NFTs on Asset Hub**, demanding a robust toolkit for on-chain integration that other game devs can also use.

As part of adding on-chain functionality to the game, we want to develop an open-source toolkit for easy integration of the upcoming Asset Hub NFT capabilities into any game made in Godot Engine, consisting of a smart contract setup, a backend solution, and a Godot Engine plug-in.

## **Project Details**

**Technology stack:**

* **Smart Contracts:** Solidity for Asset Hub deployment  
* **Game Engine:** Godot 4.x with GDScript  
* **Back-end for smart contracts:** NodeJS / Express

**Core Components:**

1. **Smart Contract Suite**  
   * Modular, cross-game-compatible NFT cosmetics
   * Standardized interfaces for wearable items (skins, accessories, effects)  
   * Gas-optimized batch operations for multiple NFT interaction
   * Score tracking smart contract with automated reward distribution mechanisms
2. **PolkaGodot extension**  
   * Native Godot plugin for EVM wallet interaction  
   * Automated NFT discovery and metadata parsing  
   * Pre-built UI components (3D holographic cards, inventory grids, item lists)  
   * Intuitive, plug-and-play access to the user’s NFTs  
3. **Back-end**  
   * Tracking games played and scoring  
   * Manages and initiates transactions from authorized wallets  
   * Logs events on/off-chain in a PostGRE SQL database  
   * Manages the API endpoints used in the game
4. **Example project**
   * A minimalistic game project that demonstrates the usage of the suite and can act as a starting point for new projects

**What This Project Will NOT Provide:**

* Our main game (Pinkness Overdrive 2) is not part of this proposal and will remain closed-source due to asset licensing  
* Game-specific logic is not part of this application  
* Marketplace functionality is out of this scope \- we’re focusing on core integration tools

## **Ecosystem Fit**

We’re building essential components to lower the barrier for game developers to adopt Polkadot.  
With the arrival of NFTs on Asset Hub, it is more important than ever to lower barriers to entry for developers.

**Target audience:**

* Game developers seeking Web3 integration  
* Existing Godot developers interested in NFT functionality  
* Projects looking to launch gaming experiences on AssetHub

**Problem we solve:** Currently, integrating blockchain functionality into Godot games requires significant custom development. Our toolkit will provide a plug-and-play solution that requires little setup and works out of the box.

While most other projects focus on Unity, we're among the first to provide tooling for Godot \- a community-driven open-source engine that’s rapidly gaining in popularity.

### **Team**

**Team name:** PINK  
**Contact email:** dotispink@dotispink.com  
**Website:** https://www.dotispink.com/

### Team Code Repos

**PINK Organization:**  
https://github.com/pinksters

**Team members’ github accounts:**  
https://github.com/mar1  
https://github.com/somekindofgamedev

## **Team’s Experience**

Our team has successfully launched multiple browser-based games in the Polkadot ecosystem throughout 2024, including [Pinkdrop](https://dotispink.com/game) \- a Moonbeam-oriented game with an on-chain rewards distribution system.

The team consists of an experienced game developer and a senior full-stack Web3 developer.

## Development Status

* **Live game:** Pinkness Overdrive v1 ([https://pink.racing](https://pink.racing)); on-chain rewards distribution system battle-tested in Pinkdrop
* **In development:** Pinkness Overdrive 2 (multiplayer functionality in internal testing phase) 
* **Not started:** PolkaGodot extension, smart contracts for AssetHub, smart contract back-end

## Development Roadmap

### **Overview**

* **Estimated duration:** 3 months  
* **Full-Time Equivalent (FTE):** Two part-time developers (0.5 FTE each)  
* **Total Costs:** $10,000 USD

**Milestones**:

**Milestone 1: Core features ($4,000)**

* NFT contract for wearable cosmetics and equippables  
* Back-end with full database integration accessible through API endpoints  
* Godot plugin with EVM wallet connectivity and automatic NFTs querying for in-game use  
* In-game list view of owned NFTs  
* Game smart-contract with on-chain recording of games played deployed and verified on Paseo (or directly on Polkadot Hub if available at that time)

**Milestone 2: Advanced features ($4,000)**

* Grid view of owned NFTs  
* Holographic card display of owned NFTs  
* Server-side verification of ownership  
* Game smart-contract with automated rewards distribution  
* On-chain customization of the NFT implemented in the game  
* Full back-end and database for offchain score verification and on-chain score’s submission

**Milestone 3: Documentation and optimization ($2,000)**

* Full documentation for contract deployment, back-end setup, and plugin usage  
* Example open-source Godot project that showcases the plugin and can be used as a starting point for new games  
* Example production-ready backend to go with the example game

### Budget Breakdown
- Back-end developer (smart contract suite and server-side code) for 3 months @ $1650/month
- Front-end developer (Godot extension and wallet integration) for 3 months @ $1650/month

## Future plans

**Immediate (Post-Grant):**

* Launch Pinkness Overdrive 2 on AssetHub as the flagship implementation of this suite

**Long-term Growth:**

* Make ongoing incremental updates to the game, alongside updating the extension and the contract suite

**Ecosystem Impact:**

* Lower barriers for game developers entering Polkadot  
* Drive Asset Hub adoption through gaming use cases

## Additional information

While our game cannot be open-sourced due to asset licensing, we're committed to contributing to the infrastructure of the ecosystem. This grant would enable us to properly document, test, and polish these tools for community use, rather than keeping them as internal-only solutions.

We are confident that this grant will open up the development of web3 games on Polkadot to the Godot community, thanks to this easy-to-implement plugin.
