# 📝  Tempest Veil
## 🌟 Project Overview

### **Tagline**: 
A decentralized strategy game built on real time data and information asymmetry.

#### **Description** 
Tempest Veil is a real-time strategy game where players build armies, capture territory, and adapt their battle plans in response to real-world weather. Weather is not just aesthetic—it shapes movement, alters unit strengths, and creates shifting tactical opportunities. The game emphasizes permissionless play, emergent conflict, and evolving strategy.
Optionally, Tempest Veil will also explore hidden information to enable asymmetric gameplay, such as concealing army composition and strategy. This depends on VM compatibility and may not be fully supported on PolkadotHub’s polkaVM.


#### **Polkadot Integration** 
We plan to launch Tempest Veil on PolkadotHub and other EVM-compatible parachains like Moonbeam. To assess compatibility with polkaVM, we will begin by testing all smart contracts on the Westend testnet. Since gameplay involves frequent on-chain interactions, we are prioritizing chains that offer low gas fees and high throughput. 

#### **Motivation** 
Our team is passionate about real-time strategy games, and this project is a natural extension of that interest. I grew up playing text-based real time strategy RTS MMORPGs like **OGame**, **Travian**, **Tribal Wars**, and **War of Empires**—the thrill of world-building and strategic depth has always stayed with me. **Dark Forest** proved the potential of on-chain RTS games, but with its development no longer active, we’re excited to pick up the torch and push the genre forward in a decentralized and more interactive way. Here's a video about Dark Forest the game, if you are not familiar with it - https://www.youtube.com/watch?v=z7V830zndoA

### 🔍 Project Details

#### Technology Stack

- **Smart Contracts:** Solidity (deployed on EVM-compatible Polkadot parachains)
- **Oracle** We will use Acurast Trusted Execution Environment (TEE) to get Weather and Randomness data.
- **Zero-Knowledge Proofs(Future Goal):** Noir for circuit development, with Solidity verifier contracts generated using Aztec’s Barretenberg package, if Noir proof verification fails on PolkaVM, we will try Circom, and finally FHE (using Inco's Confidentiality Computation Layer). More on these technologies are discussed later.
- **Frontend:** Next.js, TypeScript, TailwindCSS
- **Backend / Game Engine:** The backend will be minimal, as most of the game logic is handled on-chain. Off-chain scripts written in TypeScript/Node.js will run as cron jobs to manage regular game state updates. Initially, we’ll use a centralized backend to fetch weather data during the early development phase. As the project matures, these scripts will be migrated into Acurast TEEs to enable decentralized, verifiable weather data retrieval
- **Indexer:** SubQuery for efficient game updates on frontend and leaderboard functionality

#### Weather Data and Randomness Integration
As a core part of the game, we will integrate Acurast Oracles to bring real-world weather into gameplay. Weather data will be fetched using Node.js scripts running inside Acurast’s Trusted Execution Environment (TEE), ensuring verifiability. This data will directly influence strategy, unit effectiveness, and movement on the battlefield. 

A typical Acurast TEE Oracle looks like this - 
![alt text](https://github.com/Cloakworks-collective/tempest_veil_fast_grant/raw/main/images/basic_acurast.png)

To support multiple in-game locations, each with their own dynamic weather, we will fetch real-world weather data for several cities. To scale this effectively, we propose an architecture similar to Chainlink’s Price Aggregator. Acurast will push weather data for multiple locations at regular intervals (frequency to be determined) into an on-chain aggregator contract. Our game contract will then query this aggregator to retrieve the latest weather data before executing actions—for example, adjusting the effectiveness of a cavalry charge if rain is detected.

![alt text](https://github.com/Cloakworks-collective/tempest_veil_fast_grant/raw/main/images/aggregator.png)

We also plan to incorporate Acurast’s Verifiable Random Function (VRF) to introduce controlled randomness into battles, adding depth and unpredictability to each encounter. Until Acurast is available on PolkadotHub, we will mock the randomness during development. Even if integration doesn’t happen within the three-month grant window, we’re confident it will follow soon given Acurast’s strong presence in the Polkadot ecosystem.

#### **Relevant Prior Work:**

We've explored ZK and FHE as core tools for building information-asymmetric strategy games—focusing on fog-of-war, hidden state, and verifiable actions. Through hackathons like ETHGlobal CircuitBreaker, zkHack Istanbul, zkHack Montreal and ETHDenver, we've gained hands-on experience with Noir, FHE (Inco/Fhenix), and zkVMs (Risc0 and Mina), laying the foundation for this game. We discuss these projects in more detail in the Development Status section below.

#### **Fast Grant Expectations**

Developing a real-time weather-driven strategy game will take the full three-month build period, even without integrating optional zk proofs or FHE. The main challenge is designing a scalable weather data aggregator, similar to Chainlink’s price feeds, using Acurast’s TEE-powered oracle network to fetch, verify, and publish on-chain weather conditions. While supporting a single location is simple, extending this to any number of cities requires careful planning and robust infrastructure. In parallel with the backend and smart contract work, I will also focus on building a polished frontend and delivering a smooth, engaging user experience.

For this grant, we will deliver a playable proof-of-concept version of Tempest Veil. Below is a list of core deliverables, along with optional features we plan to include in future iterations: 

#### Core Deliverables

- ✅ **Functional Gameplay Prototype**  
  - Real-time strategy mechanics driven by real-world weather  
  - Player actions: move, attack, and resolve combat based on on-chain data  
  - Controlled randomness using verifiable oracle input  

- ✅ **User Interface and Game Loop**  
  - Polished frontend with intuitive controls  
  - Fully playable core game loop

- ✅ **Backend and Smart Contracts**  
  - Weather data fetched and verified via Acurast's TEE-powered oracle network  
  - On-chain logic for player actions and environment-based combat resolution  
  - Scalable weather aggregator architecture supporting multiple cities  

#### Optional (Stretch Goal)

- ⚙️ **Fog of War Implementation** *(optional depending on tooling support)*  
  - Preferred: FHE via Inco's Confidentiality Layer (pending PolkaVM compatibility)  
  - Alternative: ZK proofs using Noir, Circom, or Risc0 as an alternative for hidden strategies, if the FHE coprocessor is not compatible with PolkaVM in time.

### Long term Goals - Optional Addition of ZK or FHE for information assymetry, and AI NPC agents.

> Note: The three month Fast Grant will focus on building a weather based RTS game as a foundation for future integration of fog of war mechanics, preferably using FHE via Inco's Confidentiality Layer once it becomes available beyond this initial timeframe.

>Note: While FHE is my preferred approach for implementing fog of war, I am including multiple options because it is still uncertain whether Inco’s Confidentiality Layer will support PolkaVM. To ensure progress, I am also prepared to use ZK alternatives such as Noir, Circom, or Risc0 depending on compatibility and readiness.

Tempest Veil will explore hidden information to enable asymmetric gameplay, such as concealing army composition and strategy. This depends on VM compatibility and may not be fully supported on PolkadotHub’s polkaVM.
We will make three attempts to enable hidden strategy in *Tempest Veil*:

  1. **Noir ZK Circuits**: Our first approach is to use Noir circuits to prove hidden actions. However, generating Solidity verifiers via Barretenberg requires specific EVM precompiles (`ecMul`, `ecAdd`, `ecPairing`, and `modexp`), and even with those, verifier contracts can fail to deploy or function correctly. More details are available [here](https://noir-lang.org/docs/how_to/how-to-solidity-verifier#compatibility-with-different-evm-chains).

  2. **Fallback to Circom**: If Noir does not work, we will rewrite the circuits in Circom and use Circom-compatible verifiers. However, Circom verifiers are also likely to face similar compatibility issues with PolkadotHub’s VM due to the same reliance on precompiles.

  3. **FHE via Inco ( Most Prefrred) **: As a third approach, we will explore fully homomorphic encryption (FHE) using Inco’s “Confidentiality as a Service” to achieve hidden strategy. More details are available [here](https://docs.inco.org/confidentiality-as-a-service/connect-to-dapps-on-existing-evm-chains). This service has not launched yet, and it is still unclear whether it will support the PolkadotHub VM (PVM).

We can guarantee that we will make every effort to implement hidden strategy in the game. However, due to current tooling limitations and VM compatibility concerns, we cannot guarantee success within the three-month grant timeline. If the technology becomes viable later, we are committed to incorporating it as soon as possible.

if we do succeed in Incorporating ZK Circuits in ascertaining battles, the battles will look like this: 

* Player 1 privately sets a city's defense by generating a ZK proof of their army, which is verified and stored as a hash on-chain keeping the actual composition hidden.

* Player 2 publicly attacks the city; the smart contract references the stored hash to validate the battle, while the defender's strategy remains secret.

![alt text](https://github.com/Cloakworks-collective/tempest_veil_fast_grant/raw/main/images/zk_1_2.png)

* Player 1 (the defender) computes the battle outcome off-chain by generating a Battle ZK Proof, then submits this proof and result on-chain; the smart contract verifies it using a Battle Proof Verifier and finalizes the outcome without ever revealing Player 1’s army

![alt text](https://github.com/Cloakworks-collective/tempest_veil_fast_grant/raw/main/images/zk_3.png)

* If Player 1 (the defender) fails to submit the battle proof after a public attack, the game assumes they have "ghosted"—in that case, Player 2 automatically loots the city, and the smart contract finalizes the result without needing Player 1's input.

![alt text](https://github.com/Cloakworks-collective/tempest_veil_fast_grant/raw/main/images/zk_4.png)

The FHE implementation offers a significantly better user experience, as it does not require the defender to compute battles themselves.

![alt text](https://github.com/Cloakworks-collective/tempest_veil_fast_grant/raw/main/images/fhe_1_2.png)

The game state will reside on PolkadotHub contracts, while battles are intended to be executed within an FHE coprocessor. This will require a way to transfer state between the two environments, potentially across different chains. Since the FHE coprocessors have not yet launched and their architecture is not fully defined, we will need to explore and adapt once more technical details become available.

**Tempest Veil** is more than just a game—it’s a permissionless, long-term experiment in cryptonative strategy design. Our vision is to create an open, moddable world where anyone can play, contribute, or build custom tools and agents on top of the game’s core mechanics. We're exploring how zero-knowledge, FHE, and verifiable AI can unlock new forms of emergent, asymmetric gameplay—not just as technical showcases, but to make something fun, strategic, and community-driven.

Looking ahead, we aim to expand the game’s strategic depth through confidential computing. We'll test **Inco’s upcoming testnet**, which introduces a confidentiality layer to EVM chains, to enable FHE-based concealment of army composition and tactics—critical for scaling battles that go beyond what ZK circuits can currently handle.

We also plan to integrate verifiable AI agents powered by TEEs. Platforms like **Phala** and **Acurast** will allow us to run autonomous, tamper-proof agents within the game—serving as neutral factions, rival warlords, or adaptive NPCs. By embedding these agents directly into gameplay and combining them with cryptographic fog of war, *Tempest Veil* will push the boundaries of decentralized, trustless strategy games—while staying open, composable, and fun for builders and players alike.

### 🧩 Ecosystem Fit

**Where and how does your project fit into the ecosystem?**

*Tempest Veil* brings a cryptonative, privacy-aware, text-based real-time strategy game to the Polkadot ecosystem. It will run on **PolkadotHub**, with smart contracts deployed on its EVM environment. The game focuses on strategic depth over graphics, leveraging on-chain verifiability, real-world weather data via Acurast oracles, and exploring emerging technologies like zero-knowledge proofs, FHE, and TEEs. By combining hidden information, dynamic environmental inputs, and permissionless interactions, *Tempest Veil* showcases how PolkadotHub can support innovative, modular, and trust-minimized on-chain games.

**Who is your target audience?**

Our audience mainly includes gamers, but we also want to egange with developers interested in ZK/FHE on polkadot ecosystem. We also want to engage with those interested in scripting, automation, or building AI agents within games - basically expand upon our game.

**What needs does your project meet?**

Tempest Veil fills a key gap in the Polkadot ecosystem by introducing an interactive, fully on-chain game that moves beyond collectibles and superficial NFT mechanics. We focus on gameplay innovation, verifiable logic, and open-ended world-building

**Are there similar projects in Polkadot? If so, how is yours different?**

To our knowledge, there are no other games in the Polkadot ecosystem combining zero-knowledge proofs, verifiable AI, and real-time strategy mechanics. Most existing projects focus on NFT-based gaming. We also haven’t seen many games that incorporate real-world data, like weather, into core gameplay. We think this opens up a unique and exciting space to experiment with dynamic, data-driven strategy.

**If no similar projects, why might that be?** 

Technologies like ZK, FHE, and TEE platforms have been around, but they’re only now becoming accessible enough for real game development. Tempest Veil is one of the first projects aiming to use these tools in a fun, interactive way. The FHE coprocessor for chains outside of Inco has not been released yet, and we plan to be among the first to integrate it once it's available—pushing the boundaries of cryptonative, strategy-focused gameplay.

## 👥 Team

- **Team Name:** Cloakworks Collective (not a legal entity yet).
- **Contact Name:** Saurav Dhar
- **Contact Email:** ender.nakamoto@gmail.com
- **Website:** Github: https://github.com/enderNakamoto

### Team members

Saurav Dhar

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/sdhar86/

### Team Code Repos

- https://github.com/Cloakworks-collective

Please also provide the GitHub accounts of all team members:

- https://github.com/enderNakamoto

### Team's experience

Saurav, also known as Ender, is a seasoned developer with 10+ years of experience in web2 and a recent but deep dive into web3 and zero-knowledge ecosystems.

In the web2 world, he was the founding engineer of an adtech startup that was acquired in 2019. He has extensive backend experience with Ruby, Python, TypeScript, and Rust, and has also contributed to frontend development using React and Next.js.

Since late 2023, he’s been fully immersed in web3—building at hackathons and experimenting with novel smart contract mechanics. He’s developed contracts using Solidity, Rust, and Move. In the ZK space, he has shipped applied ZK projects using Mina’s o1js, RISC Zero, and Noir.

## 📊 Development Status

While we haven't yet begun development specifically on Polkadot EVM parachains, we’ve spent the past year actively prototyping similar concepts across multiple ecosystems. Our work has focused on using zero-knowledge proofs and fully homomorphic encryption to build information-asymmetric strategy games—where game state is hidden, actions are verifiable, and players operate under true fog-of-war conditions.

These explorations have provided us with hands-on experience in cryptonative game design and laid the technical and conceptual foundation for Dark Armada:

- **Shadow Warfare**  
  ETHGlobal Circuit Breaker 2024 — ZK-based battle game using Noir  
  🏆 Bounties from Noir and Scroll  
  [GitHub](https://github.com/Cloakworks-collective/shadow_warfare)

- **Stealth Command**  
  ETH Denver 2024 — FHE-based army concealment using Inco and Fhenix  
  🏆 Bounties from Inco and Fhenix  
  [GitHub](https://github.com/Cloakworks-collective/stealth_command)

- **Castle TokyoEdo**  
  A zkVM strategy game using Risc0 for verifiable off-chain execution  
  📚 Prototype focused on trusted compute for game logic  
  [GitHub](https://github.com/Cloakworks-collective/castle_edo)


## 📅 Development Roadmap

### Overview

- **Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  1 developer
- **Total Costs:** $10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **architecture diagrams** that explains the overall system |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish **articles** on ZK integration with EVM parachain for our game, and getting weather data with Acurast TEEs |
| 1. | Core Game Mechanics and Data Structures| The core game loop revolves around players capturing, defending, and interacting with castles. Smart contracts manage and persist key data structures such as player profiles, army compositions, turn history, and castle ownership—enabling transparent, verifiable progression and conflict resolution. |
| 2. | Weather Data Integration | We use Acurast to fetch real-world weather data through verifiable Node.js scripts running in TEEs. This data is pushed on-chain at regular intervals into an aggregator contract, which stores the latest weather conditions for multiple in-game locations. Game contracts then query the aggregator to retrieve relevant weather data before resolving actions like battles—allowing dynamic, location-based strategy influenced by real-world environmental factors.  |
| 3. | Randomness Integration | We plan to integrate Acurast’s Verifiable Random Function (VRF) as a reliable source of on-chain randomness for actions like battle resolution and exploration. Until Acurast’s VRF is available on PolkadotHub, we will mock this data to simulate randomness during development.  |
| 4. | Basic on-chain Conquest | Battle resolution is handled on-chain by evaluating the attacking and defending armies, player-submitted strategies, real-time weather data from oracles, and a source of randomness, resulting in a fair and dynamic combat outcome. |
| 5. | UI  | Although Tempest Veil is a text-based strategy game, we believe a strong, intuitive UI is essential for usability and player engagement. Our goal is to design a clean, interactive interface that makes complex mechanics feel accessible—creating a fun, smooth, and playable experience|
| 6. | ZK Integration(Optional) | We plan to optionally integrate zero-knowledge proofs to enable hidden information mechanics, such as concealing army composition or strategy, depending on the availability and compatibility of verifier support on the target chain. |
| 7. | Indexed Leaderboard (Optional)  | Build leaderboard contract and SubQuery indexer for the UI |

### 💰 Budget Breakdown

> Note: We aim to build Feature 6 and 7 if time and tooling permits, but it’s not included in the milestones as it's non-essential to core gameplay. It would enhance the overall UI/UX but is not critical for the game’s core functionality. We will definitely keep exploring them even after 3 months are up.

Please provide a breakdown of your budget by milestone:

| Milestone | Deliverables | Cost (USD) | Estimated Completion |
| --- | --- | --- | --- |
| 1 | Features 1,2,3 | $5,000 | 1.5 months |
| 2 | Feature 4, 5 | $5,000 | 1.5 months |
| **Total** | | **$10,000** | **3 months** |

## 🔮 Future Plans

As outlined in our vision, *Tempest Veil* will continue evolving well beyond the Fast Grant scope. After the initial build, we plan to:

- Expand **battle mechanics** for deeper, more strategic gameplay  
- Improve **UI/UX** through ongoing feedback and iteration  
- Integrate **FHE** to support complex, private battle resolution  
- Introduce **AI agents** running in TEEs to simulate alliances and dynamic behavior  
- Continue developing **ZK-based hidden strategy** as an optional feature, to be integrated once verifier compatibility improves

#### Funding & Sustainability

We’ll seek additional support through:
- [Moonbeam Grants](https://moonbeam.network/build/grants/)
- [Kusama Treasury](https://kusama.subsquare.io/referenda/498), which now backs bleeding-edge innovation including ZK projects.
- **Noir** and **Inco** builder and grant programs to deepen our integration with their ZK and FHE ecosystems

> Note: We have not applied for any other grants for this project—this is our first. Our initial launch will be on PolkadotHub, and depending on ecosystem support and community interest, we may expand to other EVM-compatible parachains within the Polkadot ecosystem in the future.

To support longer-term development beyond grants, we also plan to introduce **financial incentives** and **in-game item purchases**. Revenue from these mechanics will help fund ongoing development and contribute to an on-chain **community treasury**—supporting both sustainability and future expansion of the game world.