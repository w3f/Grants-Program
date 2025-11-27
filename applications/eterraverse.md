# Eterraverse

- **Team Name:** Blockchainia LLC
- **Payment Details:**
  - **DOT**: 14bztrctJet1mw2DGzySU8BsJfVrr6wPNHq3m6nxxQV267U
  - **Payment**: 14bztrctJet1mw2DGzySU8BsJfVrr6wPNHq3m6nxxQV267U
- **Level:** 1

## Project Overview :page_facing_up:

### Overview

Eterraverse: An Ecosystem of Interconnected Web3 Games

Two years ago, we submitted a grant application intended for the development of an ecosystem of interconnected Web3-enabled games. Over the past two years, the project has been overhauled and refined through both a technical and marketing lens to align with objectives identified in the [gaming strategy outlined by DotPlay](https://docs.google.com/presentation/d/1o5WHE0LDMgFK3LUwEZ90w6u-SO2zkBluzoyG8NQGltg/edit?slide=id.g340d8772fee_0_26#slide=id.g340d8772fee_0_26). As a fledgling independent game studio, we share the opinion that the way forward for Web3 gaming on Polkadot involves targeting the plethora of indie game studios.

As we started our journey, we began research and development using the .NET SDK developed by [Ajuna](https://www.ajuna.io). This led to the development of a handful of small projects (mostly based in Unity), the first being a simple and configurable daily rewards pallet that allows a user to spin a slot machine a few times a day to earn tokens or other rewards. At the same time, we met a prominent executive from the gaming industry, [Matt Harper](https://www.linkedin.com/in/matthewrharper/), who was heavily involved with the implementation of free-to-play business models and microtransaction-based games. With his advice, we steered development of our ecosystem to better align with these proven strategies.

During our early-stage development, we found that Ajuna’s documentation, example projects, and video content were sufficient to get started with their SDK, and the team has consistently been fast and helpful in answering our questions. However, beyond Ajuna’s own materials there are still relatively few open-source, production-leaning examples that indie developers can use as an engineering playground or adapt directly into their own games. To help fill that gap, as of November 2025 we have created backend pallets and frontend interfaces for a progressively more complex set of use cases: a daily rewards pallet, a simple trading card game, a simple strategy-based card game (using the cards from the trading card pallet), and a minimal model for a server-authoritative first-person shooter with a handful of on-chain interactions.

These examples serve two main purposes:

  1. They are not overly complex and allow others to pick up where we left off with their own ideas
  2. They are an IP-agnostic jumping-off point for any new indie game studio to begin with Web3 integration by:

     1. Gaining traction via a daily rewards program
     2. Moving any established (or newly created) IP to a collectible trading card game
     3. Enabling the use of these cards in a strategic PvP or PvE card game
     4. Integrating these with a Web3-enabled online multiplayer game

We are in the process of developing our own IP to apply to this model, and as we do so, we will continue to develop on these examples while preserving their usefulness to those who might follow in our footsteps. We continue to update our ecosystem, intertwining each pallet in ways that align with free-to-play, pay-to-play, and play-to-earn models.

The purpose of the first few pallets (daily rewards, trading card, and strategy card game) is meant to allow us to quickly gain daily active users and digitize our concept art into Season 1 of a collectible trading card game. These pallets are fully on chain, well tested, and should allow for risk-free onboarding. During Season 2, we will release more cards, as well as the strategy PvP/PvE card game (the current implementation is minimal, we will add features before release). As we gain users, we will eventually release an online multiplayer first-person shooter game that allows users to battle with characters/items earned from the strategy card game. This will, of course, require a refactor of each pallet with a revved version.

We hope to integrate our pallets into the Ajuna parachain, but are prepared to run our backend as a solochain if need be.

### Project Details

Below you can find barebones UIs that have been battle-tested to work with our pallets. We have intentionally left these implementations with minimal branding so they remain easy to fork, extend, and customize. In future updates, we will layer in our own branding and product-specific specializations, but for the purposes of this initial grant, we are keeping them as simple as possible while clearly demonstrating the current on-chain functionality.

Within the Trading Card Game, you will see a simple homepage, faucet, daily rewards view, gamer dashboard, vendor (card minting), hand selection (for the strategy card game), matchmaking (for both PvE and PvP games), and the gameplay screen.

#### UI for Trading Card Game  (Using Polkadot API, Svelte+Vite, Tailwind, Typescript)

**Overview and Trading Card Game Rules**

A user might first visit the Faucet to get some tokens. From there, they can play the rewards machine to earn more tokens or visit the Vendor to exchange their tokens for Cards. Each card has a "Rank" in a cardinal direction. Players take turns placing a card. When a card is placed adjacent to an opponents card, it can be captured if the adjacent Rank is higher than the opponent card. Turns alternate until all cards have been played. Anywhere from zero to six Cells may be locked, preventing placement.

<div align="center">

Homepage

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/tcg/homepage.png" width="300">

Faucet

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/tcg/faucet.png" width="300">

Daily Reward Slot

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/tcg/rewards.png" width="300">

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/tcg/rewards-spin.png" width="300">

Gamer Dashboard

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/tcg/dashboard.png" width="300">

Mint A Card from the Vendor

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/tcg/mint-card.png" width="300">

Create a Card Hand for the Strategy Card Game

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/tcg/update-hand.png" width="300">

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/tcg/update-hand-2.png" width="300">

Matchmaking (Select PvE or PvP)

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/tcg/matchmaking.png" width="300">

Gameplay (PvE Game)

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/tcg/game-state.png" width="300">

</div>

As you can see, we have not yet added a connection to IPFS to allow for graphics applied to each card. We will be implementing images and a card template over the next few months as the concept art for our own IP is created.

In future updates we plan to expand on the card game to include spoils for winning. Rewards may be in the form of tokens, NFTs, or other items/resources that have specific uses in the other games in our ecosystem. For PvE games, we will set the AI difficulty according to how many tokens have been rewarded over a previous specified window of blocks (similar to the difficulty of a PoW blockchain changing its hash difficulty). For example, if we wanted to limit the Coins rewarded in a given month to 10,000, we would raise the difficulty. For PvP games, we may include free-to-play and pay-to-play options, allowing players to wager items/tokens/cards, against each other, or allow winners to clone perishable cards from the opponents hand.

#### Semi-Web3 First Person Shooter with Chain Authorization (Godot, DotPlay .NET SDK, adapted from [FPS multiplayer template 1.2.4](https://godotengine.org/asset-library/asset/3658) via the MIT License

##### Overview of FPS

Our Godot FPS includes a headless server build. We plan to recruit gamers with the technical skills required to run their own servers and build their own communities, as was popular in early games like Counter-Strike and is still popular today with games like Minecraft. We will whitelist their wallet address/server IP address to allow the server to connect to the chain. The client itself does not send any on chain events, it simply signs a nonce provided by the server when they connect to prove ownership of the wallet. The server itself handles all chain transactions, ensuring clients are never able to cheat the system. As we expand on the project, we plan to develop the headless server in a highly configurable way allowing server owners to customize gameplay to fit their users play styles.

<div align="center">

Chain Authorized Server Log

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/fps/server-log.png" width="300">

Main Menu - Join By Server IP

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/fps/join-by-ip.png" width="300">

Multiplayer Connect

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/fps/dual-connect-menu.png" width="300">

Two Players (Verified as owning well-known accounts) Joined as Spectators

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/fps/inactive-spectators.png" width="300">

Two Players Ready for Next Match (Chain Driven Event)

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/fps/inactive-ready.png" width="300">

In Game Multiplayer

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/fps/in-game.png" width="300">

In Game Multiplayer With Menu Up

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/fps/in-game-2.png" width="300">

On-Chain Events

<img src="https://raw.githubusercontent.com/Blockchainia/eterra-grant-supplement/0efb6bda711babf4fd0402797024b56eb180e1c0/fps/chain-event.png" width="300">

</div>


### Ecosystem Fit

Our project aligns with the future ambitions of the DotPlay ecosystem, namely onboarding indie game studios who may have an interest with web3 integration. Our target audience will be future game studios, as well as our own user base, although we are in a pre-release, pre-advertising stage.

Our project is similar to Ajuna, as we use the SDK they and .NET Toolchain they developed for Unity/Unreal, but have chosen Godot as our engine, as being open source, it better aligns with a decentralized studio's interests and lowers risks associated with changes to license agreements and fees. While our games and IP are completely separate, we build off of similar infrastructure.

There are also various Web3 games, many of which can be found on PayToEarn.com. However, our current outlook aims to avoid a direct pay to earn model, as most gamers do not play games to earn money, but rather because they enjoy them. We aim to make fun games where the web3 element is either hidden, or may not need interacted with at all for some users. As such, our main target audience is other interested studios with the same concepts in mind, as well as all gamers who have had enough of the current cash-grab business models associated with current AAA games.

### Tangible Value to DOT

Eterraverse creates tangible value for DOT by using the Polkadot ecosystem as the primary on-ramp into our game economy. We use our own in-game token for gameplay and player rewards/incentives, but some participants (think whale players) may acquire it through Polkadot-native mechanisms by exchanging DOT (and/or Polkadot-based stablecoins). This holds whether we operate as a standalone Eterra solochain (Polkadot as on-ramp/settlement) or as a parachain/parathread (the economy operating natively in the ecosystem).

- **DOT-aligned on-ramps (planned):** We intend to support acquiring our in-game token through Polkadot-native on-ramps, including exchanges from DOT and/or Polkadot-based stablecoins, depending on what provides the best UX and liquidity at launch.
- **Polkadot-side activity (where applicable):** When users acquire our token via Polkadot venues and when assets move between Polkadot and Eterra (e.g., via XCM/bridging), those flows generate Polkadot ecosystem transactions and fees. If deployed as a parachain/parathread, game-economy activity (e.g., marketplace/state) also occurs within the Polkadot ecosystem.
- **Builds on existing ecosystem investment:** We build on Ajuna/DotPlay’s SDK and Polkadot’s existing tooling and system-chain infrastructure, extending the value of those prior investments through wider adoption by indie studios and community-run servers.
- **Server-operator commitment:** We will require server operators to post a DOT-denominated stake as part of being authorized to run a server, creating an additional DOT-linked incentive aligned with uptime, reputation, user interest, and anti-abuse measures.
- **Scales with real usage:** Demand and activity scale with players, servers, and community adoption.


## Team :busts_in_silhouette:

### Team members

- Ed Anderson (eca20@pitt.edu)

### Contact

- **Contact Name:** Ed Anderson
- **Contact Email:** eca20@pitt.edu
- **Website:** [Blockchainia Github](https://github.com/Blockchainia)

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Blockchainia LLC

#### Ed Anderson

Ed holds a B.S. in Computer Science from the University of Pittsburgh, where his Capstone requirement included implementing a MVP token concept, PittCoin, which relied on a bounty-program to connect students to community-sourced homework solutions, the tokens earned from which could be exchanged for extra credit from their professors. He also has five years of experience as the creator and manager of the Katz Business Research Center, during which he oversaw the implementation and successful completion of over one thousand market research and consumer behavior studies and focus groups. More recently, he has four years of engineering experience developing and renovating the full stack of an enterprise scale system. He has most recently contracted his time out to Benegon Enterprises LLC to implement a full CI/CD cycle, along with front-end, back-end, and DevOps development. However, the intersection of the web3 space and gaming is his true passion. To that end, he has developed the beginnings of the Eterraverse, focused on a roadmap toward a fully decentralized gaming ecosystem. 

[Previous application](https://github.com/w3f/Grants-Program/pull/1562) by Blockchainia LLC (Terminated)

### Team Code Repos

Team Member Github:
- [Ed Anderson Github](https://github.com/eca20)

Project Github Repos:
- [Eterra Chain + Pallets](https://github.com/Blockchainia/eterra-polkadot-sdk-solochain-template)
- [Trading Card Game Site](https://github.com/Blockchainia/eterra-tcg-site)
- [FPS Multiplayer in Godot](https://github.com/Blockchainia/Eterra-FPS-Multiplayer)

### Team LinkedIn Profiles (if available)

- [Ed Anderson](https://www.linkedin.com/in/edanderson4hire/)

## Development Status :open_book:

- This is our current chain (branched from the polkadot-sdk-solochain-template), modified to use our pallets. We are currently in the process of migrating towards a solochain to use as a testnet alongside an "Early Access" alpha we will use to onboard users who might be tolerant to the initial issues of deploying Web3 games.
  - [Eterra Chain + Pallets](https://github.com/Blockchainia/eterra-polkadot-sdk-solochain-template) (Currently migrating to solo-chain)
- The front end (displayed in the images above) that works with our solochain as the backend.  
  - [Trading Card Game Site](https://github.com/Blockchainia/eterra-tcg-site)
- The Godot Project that houses both the headless-server and client build
  - [FPS Multiplayer in Godot](https://github.com/Blockchainia/Eterra-FPS-Multiplayer)
- Previous supplement with a slightly outdated pitch deck, game design documents, etc
  - [Supplements](https://github.com/Blockchainia/eterraverse-grant-supplement)

We are in the final phases of preparing each repository for a v0.0.1 tag/release, and are open to any feedback for features/changes that we might include in this early version. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 10,000 USD
- **DOT %:** 50%

### Milestone 1 — Core pallets & reference game UIs (completed)

- **Estimated duration:** 1 month
- **FTE:** 1.0
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | All new pallets, crates, and client code delivered in this milestone are published under a permissive open-source license (MIT/Apache 2.0), consistent with the upstream templates and our existing repos. |
| **0b.** | Documentation | Each pallet and client component includes inline Rust / C# / TypeScript documentation and a short “Getting Started” tutorial describing how to run the node, interact with the pallets (via Polkadot.js or the web client), and connect the Godot headless server. |
| **0c.** | Testing and Testing Guide | Core pallet logic (storage, extrinsics, events) is covered by Rust unit tests where applicable. A short testing guide explains how to run `cargo test` for pallets and basic checks for the web client and Godot integration. End-to-end testing is currently manual, although some functionality built on top of the .NET SDK is integration tested with the chain with documentation provided |
| **0d.** | Docker | We provide Dockerfile(s) and simple scripts to spin up a local development node preconfigured with our pallets, along with an optional container for the TCG front end, so reviewers can quickly try the demo. |
| **0e.** | Article & video demo | We publish a short article/devlog and an accompanying recorded video demo showcasing the features completed in this milestone, including the pallets, TCG frontend, and FPS reference integration, and explaining how they work together as entry points for indie studios exploring Polkadot-based Web3 gaming. |

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Game-focused pallets | We provide and integrate the following pallets into our chain repo: `daily-slots`, `faucet`, `game-authority`, `gamer`, `monte-carlo-ai`, `simple-matchmaker`, and `simple-tcg`. Each pallet exposes documented extrinsics, events, and storage items suitable for reuse by other teams. |
| 2. | `eterra-card-ai-adapter` crate | A Rust crate that connects the `simple-tcg` game logic to the `monte-carlo-ai` pallet, including example code for simulating AI decisions and tests showing how to integrate AI-driven gameplay into a Substrate-based card game. |
| 3. | Trading Card Game web client | A Svelte + Vite + TypeScript + Tailwind front end that implements: Faucet, Daily Rewards, Gamer Dashboard, Vendor (card minting), hand management for the strategy card game, matchmaking (PvE & PvP), and gameplay screens, all wired to the pallets above using the Polkadot API. |
| 4. | Godot FPS reference project | A Godot FPS project (with headless server and client) integrated with the chain via the DotPlay/.NET SDK. This project is adapted from the open-source **FPS Multiplayer Template 1.2.4** by Dahoom (MIT License) — https://godotengine.org/asset-library/asset/3658 — which provides multiplayer foundations, a full map with custom MIT-licensed 3D assets, controller support, menus, random respawns, and other quality-of-life features. We extend this template to support wallet-based chain authorization and on-chain recording of core match lifecycle events (e.g., game creation, participation, eliminations). |
| 5. | Example dev setup | Example configuration files and scripts for running a local dev setup (node + TCG front end + Godot headless server), allowing reviewers and future adopters to reproduce the demo quickly. |

### Milestone 2 — Standalone solochain & end-to-end tests

- **Estimated Duration:** 1 month
- **FTE:** 1.0
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | All changes related to the solochain migration, benchmarking, and test suites remain under a permissive open-source license, with clear attribution to upstream projects where applicable. |
| **0b.** | Documentation | We extend the documentation to cover: (1) how to run the standalone Eterra solochain, (2) how weights and fees are configured, and (3) how to end-to-end test the chain, Godot server/client and web front end. |
| **0c.** | Testing and Testing Guide | We provide a comprehensive testing guide summarizing Rust pallet tests, benchmarking commands, and the Godot/.NET integration tests, including expected outputs and how to interpret failures. |
| **0d.** | Docker | Updated Dockerfile(s) and optional compose scripts for running the standalone solochain with realistic weights/fees applied, plus optional containers for the demo clients (TCG). |
| **0e.** | Article & video demo | We publish an article and a recorded video demo for indie game developers explaining the solochain migration, weights and fee model, the end-to-end test flow, and how other teams can fork the Eterraverse stack as a starting point. |

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Standalone Eterra solochain | Migration from the current template-based setup to a standalone Eterra solochain, including chain spec, genesis configuration, and integration of all listed pallets. The result is a runnable dev network (single-node or multi-validator) suitable as a long-lived testnet for our games. |
| 2. | Weights & fee model | Benchmarking and weight configuration for all included pallets (daily-slots, faucet, game-authority, gamer, monte-carlo-ai, simple-matchmaker, simple-tcg), with a documented transaction fee model and scripts for re-running benchmarks as the code evolves. |
| 3. | Godot chain-integration test suites | Full test suites for all Godot files that interact with chain events via the .NET SDK, covering connection setup, wallet authorization, game creation/termination, and elimination recording. Tests run headless and can be executed in CI or locally via a single command. |
| 4. | End-to-end demo flow | A documented end-to-end scenario that starts the solochain, launches the TCG front end and Godot server, registers sample wallets, and walks through: claiming faucet tokens, minting cards, playing a card game, and starting/finishing an FPS match with on-chain tracking. This flow serves as a reference implementation for other studios. |

## Future Plans

In the short term (the next 2–3 months), we will continue stabilizing and hardening the current stack while preparing the Eterra solochain for both testing and early production deployments. We will tag and maintain public v0.0.x releases for each of the three core repos (chain + pallets, TCG frontend, and FPS project). While we continue to develop and maintain the existing barebones UI repositories in their current form—ideal for testing, demos, and forking but not intended as a polished end-user experience—we will also begin building production-ready frontends and launcher flows specifically designed to onboard early “Early Access” users onto the solochain. In parallel, we will expand the strategy card game pallet with more complex battle mechanics and implement a consistent collect–craft–consume/compete play loop across the daily rewards pallet, trading card game, strategy card game, and FPS integration. On the FPS side, we will build out multiple match types—such as Deathmatch, Free-for-all, Elimination-Confirm, and Extraction—with the goal of allowing each mode to be played individually while also combining them into a fast-paced extraction-style battle royale. Eterraverse is a passion project; we are investing our own time and resources while we polish the “onboarding path” for indie studios: daily rewards → TCG → strategy card game → FPS integration. Concretely, this includes improving documentation, recording video demos, tightening test coverage (especially around the solochain migration and the Godot/.NET integration), and making it as simple as possible for another team to fork the stack and plug in their own IP.

For long-term maintenance and development, our goal is to finance the project primarily through the games and tools themselves rather than through continuous grant funding. After this initial grant, our focus will be on either (1) collaborating with Ajuna to have our pallets included in Ajuna nodes, or (2) preparing and operating our own Eterra solochain, with the long-term goal of later migrating to a parachain/parathread setup once there is sufficient adoption. As we move from prototype to “Early Access” alpha on our solochain testnet, we plan to experiment with sustainable Web2-style revenue models (e.g., battle passes, premium content, and founders passes granting early investors influence on the direction of development) layered on top of the open-source infrastructure, and to reinvest a portion of that revenue into ongoing development of the shared pallets, SDK integrations, and reference UIs. We expect Eterraverse to remain an MIT/Apache-friendly codebase that other studios can reuse freely, with the commercial upside coming from the games, IP, and services we build on top of it.


In parallel, we intend to actively promote the project across the wider gaming community, including but not limited to the Polkadot/Substrate and Godot ecosystems. In the short term, that means publishing technical articles and video walkthroughs, reaching out to indie game studios and individual developers (especially those with existing audiences on social platforms) who might be interested in Web3-based monetization, and inviting them to experiment with our stack. We also plan to livestream development sessions and begin a focused social media campaign of our own to build awareness and find our early adopter audience. Over the longer term, our intention is to grow Eterraverse into a well-known, battle-tested reference stack for Web3 gaming on Polkadot—whether as a long-lived solochain or integrated into a parachain such as Ajuna—while we continue to ship our own games using the same code we are making available to others.

### Distributed Game Integrity & Community Moderation (DPoS GaaS Model)

As Eterraverse evolves from reference demos into a long-lived testnet and Early Access alpha, we intend to structure our decentralized, community-run server network using a **Gaming-as-a-Service** model backed by **distributed proof of stake (DPoS)**. The goal is to separate concerns cleanly: servers execute matches, validators verify game-state correctness, and communities verify **fair play and conduct**.

#### Layered integrity model

```text
┌──────────────────────────────────────────┐
│ Layer 4: Network Integrity Nodes          │
│ (Global Validators / Judges)              │
│ • Resolve disputes + enforce slashing     │
│ • Protect liveness + prevent censorship   │
└──────────────▲───────────────────────────┘
               │
┌──────────────┴───────────────────────────┐
│ Layer 3: Game Integrity Nodes             │
│ (Game Validators / Auditors)              │
│ • Verify deterministic state transitions  │
│ • Attest to server commitments or challenge│
└──────────────▲───────────────────────────┘
               │
┌──────────────┴───────────────────────────┐
│ Layer 2: Player Integrity Communities     │
│ (Community Validators / Moderators)       │
│ • Detect cheating/hacking not caught by   │
│   pure game-state validation              │
│ • Enforce code-of-conduct / anti-toxicity │
│ • Submit stake-backed reports + evidence  │
└──────────────▲───────────────────────────┘
               │
┌──────────────┴───────────────────────────┐
│ Layer 1: Game Servers                     │
│ (Service Providers / Executors)           │
│ • Run matches + emit verifiable commits   │
│ • Stake-bonded uptime + correctness       │
└──────────────────────────────────────────┘
```

#### How this improves decentralization (while keeping gameplay fair)

- **Server operators** post a stake-bond (DOT-denominated where applicable) to participate, aligning uptime and honesty incentives.
- **Game integrity validators** subscribe to specific games/modes and attest to server-submitted state commitments (or challenge them).
- **Player integrity communities** provide a scalable, decentralized layer of anti-cheat and conduct enforcement using stake-backed reports, thresholds, and appeals—without relying on a single centralized moderation team.

#### Player Integrity Reports (stake-backed, threshold-triggered)

Communities do not ban players directly; instead they submit **Player Integrity Reports** that include evidence references (e.g., replay hashes, signed logs, server telemetry summaries). Actions can be triggered only after independent communities reach a threshold (e.g., “soft flag” → “restricted matchmaking” → escalation), reducing the risk of mob-reporting.

Looking further ahead, we plan to engage an often-overlooked yet influential segment of the gaming ecosystem: community members and influencers who already run their own game servers for titles like Counter-Strike, Minecraft, and other moddable or community-hosted games. Our goal is to develop a distributed network of independently operated, server-authoritative game servers that all connect to a shared on-chain state. In this model, achievements, characters, inventory, and progression are fully owned by players through on-chain storage. Items, characters, and accomplishments become freely tradable assets, giving real value to the time players invest in leveling, skill-building, or acquiring rare equipment. Time-rich players can earn valuable assets through gameplay, while time-poor players can join the ecosystem by purchasing what others are willing to sell—creating a healthy, voluntary market without compromising gameplay fairness.

This architecture naturally aligns with influencers and community leaders, many of whom already maintain active Discord communities or operate private servers. By letting them host their own on-chain-authoritative game servers, we create a new revenue pathway: players can choose to join their favorite creator’s server, and gameplay-based fees can be split between the chain and the server operator. Fans support creators not through direct donations, but simply by playing games they enjoy.


Additionally, this decentralized server-owner model presents a compelling alternative to traditional subscription-based online gaming. Instead of paying a monthly fee to a large corporation, value flows directly to the individuals providing the service—trusted community members, passionate hobbyists, or content creators whom players already follow. From a behavioral and consumer-psychology standpoint, this reduces the friction or guilt often associated with subscription payments: supporting a familiar creator or peer feels meaningful, transparent, and community-driven. In this way, Eterraverse replaces the legacy “paid online service” model with a decentralized, player-first economy rooted in real ownership and community participation.

### Trust, Safety, and Dispute Resolution (Planned)

To support community-run servers at scale, we intend to expand the stack with a minimal, transparent trust and safety framework that is compatible with decentralized governance:

- **Appeals process:** A time-bounded appeal window for player actions triggered by community reports, with optional escalation to higher-integrity validator sets.
- **Slashing and accountability:** Stake-backed incentives for server operators, game integrity validators, and moderation communities; false reporting and censorship attempts can be penalized.
- **Privacy-aware evidence handling:** Prefer hashed commitments and aggregated telemetry summaries on-chain, with optional disclosure of underlying evidence only during disputes.
- **Non-goals:** We do not aim to eliminate bots entirely; we focus on preventing malicious behavior (cheating/hacking/toxicity) beyond real-player tolerance thresholds.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

[Previous application](https://github.com/w3f/Grants-Program/pull/1562)
