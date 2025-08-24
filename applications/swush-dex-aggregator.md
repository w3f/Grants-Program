# Swush v2 - Cross-chain DEX Aggregator

## Project Overview

<div align="center">
<img width="650" alt="image" src="https://github.com/user-attachments/assets/d434b068-3278-4814-9251-10e9e0cc5097" />
</div>

> *Building the missing UX layer that lets users interact with Polkadot's full liquidity stack through one unified interface.*

### Swush: A Unified DEX Aggregator for Polkadot's Cross-Chain Ecosystem

Swush is a cross-chain DEX aggregator for Polkadot. It finds and executes the best asset swap routes across parachains, abstracting away the complexity of XCM and multiple parachains and DEXs.

**Simple example:**

> **Want to swap DOT(Asset Hub) → USDC(Bifrost)?**
> 
> Instead of manually checking rates across Asset Hub, Hydration, and Bifrost DEXs, Swush automatically finds the best route (e.g., Hydration offers 3% better rates), handles all XCM complexity, and executes in few clicks.


We delivered Swush v1, backed by a [Web3 Foundation grant](https://github.com/w3f/Grants-Program/blob/master/applications/swush-dex-aggregator.md), an MVP that finds and executes optimal swaps across Asset Hub, Hydration. This validated the core model: users don't want to figure out XCM hops or check multiple DEXs - they just want the best swap, in one click.

> **You can try the early version here** → [app.swush.me](https://app.swush.me/)
> 
> *(Use the Alice account via Chopsticks to simulate mainnet)*

With **Swush v2**, we are expanding this foundation into a full routing engine:

| Feature | Description |
|---------|-------------|
| 🔄 **Cross-chain swaps** | Best asset swap routes across Asset Hub, Hydration, Moonbeam, Acala, Bifrost |
| 🌉 **Cross-ecosystem bridging** | Route and swap assets via Chainflip to Arbitrum and Solana |
| ⚡ **Direct perps market access** | One-click deposits into Hyperliquid after swaps |
| 🎯 **Reward-driven liquidity** | Incentives like vouchers, NFTs, or staking prompts on destination chains |

---


### Why Swush Matters for Polkadot

Polkadot’s core strength is interoperability. Yet today, the user experience for swaps and asset movement across parachains remains fragmented and difficult.

**Swush fills that gap, positioning itself as the liquidity access layer for Polkadot**. Much like **Jupiter on Solana** (routing 80% of Solana's DEX volume with $2.4B TVL) and **1inch on Ethereum** (60% market share across 9+ EVM chains), Swush is designed to:

- Aggregate liquidity across parachains and DEXs.
- Abstract away XCM and cross-chain complexity.
- Provide a sticky, incentive-driven experience that benefits both users and parachains.

While Jupiter dominates Solana and 1inch leads on EVM chains, **Polkadot lacks a unified liquidity aggregation layer** - which Swush addresses with XCM-native routing and cross-ecosystem bridging.


### User Incentives and Ecosystem-Alignment

Inspired by CRED (App to pay credit card bills), which rewards users for payments (e.g., pay bills), Swush brings a similar mechanic to DeFi.

Each successful swap earns users **Swush points** while also unlocking **post-swap action prompts** like staking, vaults, or dApp interactions on the target parachain. This reward system helps parachains **onboard and retain liquidity**, while users gain both loyalty benefits and deeper engagement opportunities.

     
| UI Card | Example |
|-------|------|
| <img width="250" src="https://github.com/user-attachments/assets/1cd8c68f-4777-4169-98db-875c4a7aabf8" > | **Example Flow - Parachain Growth Incentives**<br/>1. User swaps DOT → aUSD(Acala) on Swush<br/>2. Prompted to deposit aUSD into Acala's pool<br/>3. On successful deposit, unlocks reward (fee rebate, XP, or NFT tier) |



### Building Brand & Community Through NFTs

Taking inspiration from Pudgy Penguins - an NFT project that evolved into a full-fledged consumer brand - Swush plans to build an identity around its own original character: a playful, fiery avatar. 

<div align="center">
<img width="150" alt="swush-character" src="https://github.com/user-attachments/assets/0584067e-5069-4c92-a376-4ef63b4e078c" />
</div>


These NFTs are more than collectibles—they’re brand anchors and functional rewards. Early supporters and active users will receive limited-edition **Swush Flame Avatars**, which can:

- Unlock premium features
- Be used in loyalty tiers or in future community campaigns
- Represent the user’s status or journey within the Swush ecosystem

**Over time, these avatars may evolve into a standalone IP - usable in content, merchandise, or cross-chain partnerships.** Just as Pudgy Penguins became more than NFTs through storytelling and emotional resonance, Swush aims to create a recognizable, narrative-driven brand that can grow alongside the product.

> Note: User incentives and NFTs are part of Swush’s long-term roadmap. They are not included in the current milestones of this proposal but illustrate our vision for creating a high-retention user ecosystem around Polkadot liquidity.


### Existing products

While tools like [Turtle.cool](https://turtle.cool/) provide basic cross-chain transfers and swaps, Swush differentiates itself as:

- A **comprehensive multi-hop swap router** that compares asset swap routes across various DEXs (Asset Hub, Hydration, Bifrost) rather than just a bridge
- **Deeply integrated** with multiple parachain DEXs and liquidity pools via XCM (Hydration, Moonbeam, Bifrost, Acala)
- **Cross-ecosystem enabled** with bridging capabilities via Chainflip to Arbitrum and Solana
- **Perps market gateway** providing direct access to Hyperliquid derivatives trading
- **Engagement engine** combining ecosystem incentives, and brand loyalty mechanics through reward-driven actions and NFT-based community building

This creates a strong foundation and a sticky, high-retention user experience.


### In Summary

Swush is simple:

- **Find the best path. Route the liquidity. Reward the user.**

It's not just a DEX aggregator, it's a **liquidity distribution engine** for parachains, a **loyalty engine** for users, **incentive alignment** for parachains, and **NFT consumer brand** on Polkadot. 


## Project Details

<div align="center">
<img width="550" alt="cross-chain" src="https://github.com/user-attachments/assets/2462a5da-622e-4b5e-a856-4e55b4717a32" />
</div>

### Cross-Parachain DEX Aggregation: Detailed Example

**Scenario:** User wants to swap DOT (Asset Hub) → USDC (Bifrost)

**With Swush:**

- **Route 1**: DOT (Asset Hub) → XCM to Bifrost → Bifrost DEX (Rate: 3.98)
- **Route 2**: DOT (Asset Hub) → XCM to Hydration → Hydration DEX → XCM to Bifrost (Rate: 4.02)
- **Route 3**: Asset Hub DEX → XCM to Bifrost (Rate: 3.99)

**Result:** Swush automatically selects Route 2 (Hydration), giving user best swap rate.

**Visual Representation of the routes:**

<img width="1840" height="936" alt="Mermaid Chart - Create complex, visual diagrams with text  A smarter way of creating diagrams -2025-08-22-205320" src="https://github.com/user-attachments/assets/07de2200-aa03-455d-a446-e63c64f4adb2" />


### Core Features, Components & Architecture

**Router-Core Service**


- Fetches best asset rates for cross chain swaps across
    - Asset Hub
    - Hydration
    - Bifrost
    - Acala
    - Moonbeam.
- Executes XCM message building and runtime dry-runs for transaction validation.

**Multi-Wallet & Multi-Network Manager**

- Supports both Substrate and EVM wallets across major ecosystem(Polkadot, Ethereum)
- Selects optimal and stable RPC connections.

**Fee Estimation & Dry-Run Layer**

- Calculates fees for entire transaction steps like transaction, XCM fees etc
- Performs runtime `dry_run` to confirm weight, fee sufficiency, and successful execution before sending.

**Analytics Dashboard**

- User view: Historical past swaps of a particular user
    - amount sent and received
    - networks transacted over

**Cross-Ecosystem Bridging via Chainflip + Hyperliquid Integration**

**Chainflip** is a cross-chain liquidity network built for asset swaps between ecosystems. Instead of relying on wrapped tokens, it enables native-to-native swaps across chains like Polkadot, Ethereum, and Solana with lower fees and 1–3 minute settlement times.

**Hyperliquid** is a decentralized exchange for perpetual futures (“perps”) - a popular crypto trading product that lets users long or short assets with leverage, without expiry. Designed for speed and scale, it delivers sub-100ms trade execution, supports across 50+ markets, and secures over $750M in TVL.

- One-click flow: DOT/USDC/USDT → Arbitrum (via Chainflip) → Hyperliquid deposit.
- Revenue sharing through Hyperliquid's referral program, with referral links integrated directly into the Swush swap UI.

### User Flow
**Milestone 1: Cross-chain swaps within Polkadot ecosystem**

*(Asset Hub ↔ Hydration ↔ Moonbeam ↔ Bifrost, with multi-wallet & fee estimation)*

1. **User Connects Wallet**
    - Substrate or EVM wallet detection (multi-wallet support)
    - Network manager selects optimal RPC endpoints for each chain
2. **Select Swap**
    - Choose source/destination chain + token
    - Router-core computes best route via connected parachains (e.g., Asset Hub → Hydration → Bifrost) comparing asset swap rates across various DEXs.
3. **Fee Estimation**
    - Fetch XCM fee weights (BuyExecution, Transact, ReserveAssetDeposit) and transaction/swap estimated fees
4. **Dry Run and Slippage Protection**
    - Dry-run transaction on runtime to confirm execution & estimate outcome
    - Slippage protection to check if the output amount is within the acceptable range
5. **Sign & Execute**
    - User signs transaction
    - Asset swap is performed selecting the best asset route and sent to the destination chain using XCM.

**Milestone 2: Cross-chain swaps beyond Polkadot & Hyperliquid integration**

*(Chainflip → Ethereum L2s, Hyperliquid perps on-ramp, analytics dashboard)*

1. **User Analytics and XP Points** 
    - User view: transaction history, chain-specific swaps
    - Points awarded on each successful transaction
2. **Select External Destination and EVM wallet**
    - Example: DOT on Asset Hub → USDC on Arbitrum via Chainflip
    - Select destination address and connect popular evm wallets like Metamask/Rabby
3. **Fee Estimation**
    - Display combined bridge fee, slippage, and execution time estimate
4. **Execute Cross-Chain Swap**
    - Initiate transfer via Chainflip deposit-channel
    - Track status until funds reach target chain
5. **Hyperliquid Redirection**
    - Open referral link to Hyperliquid to deposit directly after swapping to Arbitrum via Chainflip


### Mockups & UI Components

- **Swap UI**: Multi-chain swap form with source/destination selection, best-route display, fee estimate, and status tracker.

Below is the mockup of our core swap UI.

<div align="center">
<video src="https://github.com/user-attachments/assets/59e06692-0c74-470f-be62-e4814c0f0ab4" width="550" style="max-width: 550px; width: 100%; height: auto;" controls></video>
</div>

Figma link can be found [here](https://www.figma.com/proto/kWunXnESHS2wN4xBESBikE/Swush-Project?node-id=187-326&t=vMGbsAbiLGFl1Lvy-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=170%3A1245).

- **Cross ecosystem swap UI**: Chainflip deposit-channel to Arbitrum and Solana and will be handled in core swap UI.
- **Transaction Tracker**: Progress bar UI with transaction status updates.
- **Analytics Dashboard**: Filterable transaction history for users; aggregated swap metrics for admins.
- **Hyperliquid On-Ramp UI**: Post-bridge deposit prompt with “Trade Now” CTA.


### **Technology Stack**

- **Frontend:** Next.js and React
- **Backend:** Node.js with TypeScript to handle core logic, API integrations, and cross-chain messaging.
- **Database:** Supabase **+** PostgreSQL to store user transaction history and application metadata.
- **Polkadot Integration:** Polkadot.js API/Papi to enable wallet connections, XCM transactions, and interaction with DEXs across Polkadot’s parachains.


## Team 

- **Team Name:** Swush Labs (Not a legal entity)
- **Contact Name:** Anwesh Nayak
- **Contact Email:** anweshknayak@gmail.com
- **Website:** NA

### **Team members**

- Anwesh Nayak (@muddlebee)
- Arnav Nayak

### **Contact**
- **Contact Name:** Anwesh Nayak
- **Contact Email:** [anweshknayak@gmail.com](mailto:anweshknayak@gmail.com)

### **Legal Structure**
- **Registered Address:** NA
- **Registered Legal Entity:** NA

### **Team's experience**

I have around 6 years of full-stack development experience, working as a Tech Lead and Software Engineer at fintech companies. For the past 3 years, I've been actively contributing to the Polkadot ecosystem as a former Ambassador and community moderator/manager for the official Polkadot/Kusama Discord.

Also, I've participated in the Web3 Foundation Thousand Contributors Programme, contributed to polkadot-wiki, and wrote a comprehensive tutorial for developers getting started with Polkadot ([polkadotjs-developer-hub.gitbook.io](https://polkadotjs-developer-hub.gitbook.io/)).

**Arnav** our Lead Product Designer with 4+ years of experience leading the end-to-end design of digital products, while also taking on responsibilities in product strategy and management. As the first designer at India’s first music tech licensing platform, he played a key role in shaping the product from the ground up. He has also worked on diverse projects including shopping-focused AI agents, a sports platform with landing and backend applications, and a calling automation AI tool for PwC.

### **Team Code Repos**

https://github.com/swush-labs/

### **Team Profiles (if available)**

Anwesh(muddlebee)
- GitHub: https://github.com/muddlebee
- LinkedIn: https://www.linkedin.com/in/anweshnayak/

Arnav
- LinkedIn: https://www.linkedin.com/in/arnav-nayak-321595141/


## Development Status

We have completed the MVP of Swush v1 as per [Web3 foundation grant](https://github.com/w3f/Grants-Program/blob/master/applications/swush-dex-aggregator.md), that finds and executes optimal swaps across Asset Hub, Hydration.

**Post-Grant Progress:** We have made significant progress since the grant completion with optimizing backend, network management, enhancing UI/UX, and setting up the core infrastructure. Github commits can be found [here](https://github.com/swush-labs/swush-app).
> **You can try the early version here** → [app.swush.me](https://app.swush.me/)
> 
> *(Use the Alice account via Chopsticks to simulate mainnet)*
>

> We’re starting to make our presence known, at https://x.com/swushme 👋

## Development Roadmap

### Overview
- **Estimated Duration:** 5-6 months
- **Full-Time Equivalent (FTE):** 2.0
- **Total Costs:** $30,000 USD


### Milestone 1: Polkadot Cross-Chain Routing Core

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | AGPL v3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can perform cross-chain swaps and route optimization across parachains |
| 0c. | Testing and Testing Guide | Core functions will be tested using chopsticks for multi network simulation to test the transactions to test the core functionality and unit tests wherever applicable. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone |
| 0e. | Article | We will publish a documentation that explains how Swush enables seamless cross-chain DEX aggregation on Polkadot |
| 1. | Core router: cross chain swaps | Fetches best asset rates for cross chain swaps across Asset Hub, Hydration, Moonbeam, Bifrost, Acala |
| 2. | Transaction tracker | Track swap status for multi-hop XCM transfers and asset swaps |
| 3. | Route selector and Total Fee Estimation | Select source & destination chains with comprehensive fee estimate including XCM costs |
| 4. | Multi-wallet enablement | Support for both Substrate and EVM-based wallets |
| 5. | Multi-network connection | Robust and fast connection handling for multiple chain endpoints |
| 6. | Transaction dry run | Dry run transaction to confirm execution and outcome of the transaction |
| 7. | Slippage protection | Protection to check if the output amount is within the acceptable range |

- **Estimated Duration:** 2.5-3 months
- **Full-Time Equivalent (FTE):** 2.0
- **Total Costs:** $18,000 USD

### Milestone 2: External Chain Integration & Hyperliquid On-Ramp

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | AGPL v3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use cross-ecosystem routing and Hyperliquid integration |
| 0c. | Testing and Testing Guide |  Core functions will be tested using chopsticks for multi network simulation to test the transactions to test the core functionality and unit tests wherever applicable. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone |
| 0e. | Article | We will publish a documentation that explains all the features covered in this milestone |
| 1. | User analytics | Track usage stats, transaction/swap history across multiple chains and user XP points |
| 2. | Currency dollar value | USD valuation of assets integrated in UI |
| 3. | Currency metadata rendering | Currency logo display, names, symbols, and decimals per chain |
| 4. | User XP Points | Post swap completion, awarding each user XP Points and unlock new levels on more points |
| 5. | Ethereum EVM support | Extended evm wallet support for Ethereum/Arbitrum and Solana |
| 6. | Chainflip integration for Arbitrum and Solana | Cross ecosystem asset swaps for Asset Hub based assets like DOT/USDC/USDT to Arbitrum and Solana with fee estimation, slippage protection, and transaction status tracking |
| 7. | Hyperliquid referral on-ramp | One-click Asset Hub/Polkadot(DOT/USDC/USDT) → Arbitrum(with chainflip) → Hyperliquid deposit |

- **Estimated Duration:** 2-2.5 months
- **Full-Time Equivalent (FTE):** 2.0
- **Total Costs:** $12,000 USD

### Budget Breakdown

| Category | Item | FTE | Total | Description |
| --- | --- | --- | --- | --- |
| Personell | Project Lead | 1 FTE | 20,000 USD | Leading project with tech architecture, implementation, research and product roadmap |
| Personell | Product Lead, UI design/dev | 1 FTE | 10,000 USD | Product management, design, UI/UX planning and development |
| --- | --- | **Total** | **30,000USD** |  |
