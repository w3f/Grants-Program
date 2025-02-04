# BlackBet – The First **Fully Decentralized** Betting Platform

- **Team Name:** BlackBet
- **Payment Details:**
  - **DOT**: 12b7sswrKGkst2jFBPcXsFX4K8XcaMGeQvMpsRepsf6wb6ZJ
  - **Payment**: Fiat 04.02.2025, 02:10 UTC
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 🐣


## Project Overview 📄

**BlackBet** is the first decentralized crypto casino and betting platform that not only offers traditional casino games but also enables users to create and bet on any event they like. In addition to gaming and custom betting events, BlackBet introduces a unique share ownership model, allowing community members to own a stake in the casino. This innovative solution ensures transparency, fairness, and community-driven growth within a trustless blockchain environment.


BlackBet is an entirely on-chain casino and betting platform where:
1. Traditional casino games (roulette, blackjack, etc.) are **fully decentralized** and **verifiable** on-chain.  
2. Users can **create and bet on any event** (sports, real-world, or user-generated) with transparent payouts.  
3. Community members can own a share of the casino through **on-chain share tokens**—profit-sharing and governance occur entirely in a trustless blockchain environment.

No off-chain servers are needed for trust, random number generation (via Chainlink VRF or similar), or bet settlement. Everything is executed and recorded on the blockchain, and users sign transactions from their personal wallets.

---

## Project Components

### 1. On-chain Modules (Runtime Pallets)
- Developed using **Substrate**.
- Manages all logic: bet creation, bet settlement, user balances, casino game outcomes, and ownership tokens.
- Integrates directly with an **on-chain randomness** provider (e.g., Chainlink VRF) for fair game results.

### 2. UI (Decentralized App)
- Built in **React.js**.
- Loaded from a static host or IPFS; no centralized backend server.
- Communicates with the Substrate chain via **wallet RPC** calls. Users sign transactions directly from their wallet.

### 3. Wallet Connection
- Users connect through a **Web3 wallet** (Polkadot.js, MetaMask, etc.).
- All critical actions—placing bets, withdrawing funds, buying/selling shares—are **on-chain transactions** that the user signs locally.

---

## On-chain Modules / Runtime Pallets

### Smart Contract Module Overview
We will develop Substrate pallets that handle:

- **Bet Creation & Settlement**  
  Allow any user to create a custom betting event (e.g., “Will Team X win?”), accept bets, and settle payouts entirely on-chain.

- **Traditional Casino Games**  
  Implement verifiable on-chain games like roulette, blackjack, etc., using Chainlink VRF or another on-chain randomness provider.

- **Share Ownership**  
  Provide a mechanism for users to purchase, trade, and hold casino ownership tokens. These tokens can be used for profit sharing or governance (deciding platform upgrades, new games, etc.).

#### Publicly Exposed Methods

| Method Name         | Signature                                                               | Description                                                                                            |
|---------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **createBet**       | `fn createBet(origin, bet_details: BetDetails) -> DispatchResult`        | Allows a user to create a custom betting event with parameters (outcomes, odds, timeframe, etc.).       |
| **placeBet**        | `fn placeBet(origin, bet_id: u32, amount: Balance) -> DispatchResult`    | A user places a bet on an existing event or casino game, with an amount of tokens.                      |
| **settleBet**       | `fn settleBet(origin, bet_id: u32, outcome: Outcome) -> DispatchResult`  | Concludes a bet with a known outcome; funds are automatically distributed to winners.                   |
| **depositFunds**    | `fn depositFunds(origin, amount: Balance) -> DispatchResult`             | Users can deposit tokens into their on-chain balance for betting and gaming.                           |
| **withdrawFunds**   | `fn withdrawFunds(origin, amount: Balance) -> DispatchResult`            | Users withdraw tokens from their on-chain balance.                                                      |
| **buyCasinoShare**  | `fn buyCasinoShare(origin, amount: Balance) -> DispatchResult`           | Acquire casino ownership tokens directly on-chain.                                                      |
| **sellCasinoShare** | `fn sellCasinoShare(origin, share_id: u32, amount: Balance) -> DispatchResult` | Sell existing casino ownership tokens back to the platform or on an open market.                       |

### Runtime Storage
- **Bets**: Mapping of `bet_id` to event data (creator, odds, status, participants, etc.).  
- **UserBalances**: Tracks each user’s on-chain balance for betting.  
- **CasinoShares**: Information about ownership tokens, including allocation, transfers, and potential voting rights.  
- **GameConfigurations**: On-chain settings for various casino games (payout ratios, bet limits, etc.).

---

## Workflow Explanation (Fully On-chain)

1. **User Action**  
   The user interacts with the React.js dApp (e.g., clicks “Place Bet”).  
   The dApp prepares a **transaction** to call `placeBet` in the Betting Pallet.

2. **Wallet Signing**  
   The user’s **Web3 wallet** (Polkadot.js, MetaMask, etc.) prompts for approval/signature.  
   Once signed, the transaction is sent to the Substrate blockchain.

3. **On-chain Transaction**  
   The Betting Pallet processes the request, updates the on-chain storage (e.g., user balances, bet info).

4. **On-chain Response**  
   A **transaction event** is emitted after successful execution (e.g., bet placed).  
   The dApp listens to these on-chain events (via RPC/WebSocket), updating the UI with the new bet status.

5. **Randomness (if needed)**  
   For casino games or bets requiring randomness, the on-chain module calls Chainlink VRF or a similar solution.  
   Verifiably random outcomes are produced entirely on-chain, ensuring fairness.

6. **UI Update**  
   The React.js dApp displays the updated bet status, user balances, or game outcomes in real time.

---

![](https://kroki.io/mermaid/svg/eNp9Uk2P2jAQvfMrRlRbBalRV9tTI7USgaZaPgRKtOUQcTDOsIkwdmo7okj8-J04NEsQ7FwSz3ueeW_GW6EOPGfawizuAcXDA_xoA35JLpQp5CvYHOlkC42QHI3F_QXNXTTV5lWzModQML4L0f7npf028wwL6Y9yVkgYap4XFrmtNPbXrkId7U9Xx4tBDZ9hxYSgMledO90d81la1IzbQsmWUcfQS2t8PQDf_wmrNF3h5tu56nrdoa4cJUwjraiYzCAbluU7hTK9O1rJIncW5yqrBJoP5SbVxljNLNLYFN81F9P-rXS_K3Dq0URtvZql0z_ooDNvcZCoTV6UN_G5N2K0V3UTnHieW5Io5A7-xNFgEASBooEKvDsAv43L6ZuLvN_Sw3q2p5FGMvg1IReCfKI1J5heccLqSAQhIKE3ikSYXRGWgh3hbOU329eU-T1dMZOZ2ks0l6pa7tzVi_FvhcbWrk8wacFJA74XWGqlth_0ah9BYustvpQZfW72nTZG6VnHaCpRTyFswZkDnXkImWCSYwdvRJ_9LyrL1b4h9Do74oIZM8YtNEuEbSFE8CmKoqfx-As9NLVDOn4fDh8fz0f_UGQ2D57Kf703qfca6w)


## Why This Architecture?

1. **Complete Decentralization**  
   - **No centralized backend** to trust for bet logic, random numbers, or user balances. All data and rules live on the blockchain.

2. **User Control & Security**  
   - Private keys remain in the user’s local wallet. Users sign every critical transaction, removing reliance on centralized servers.

3. **Transparency & Fairness**  
   - Smart contracts/pallets enforce game rules and bet payouts. Anyone can audit the code and verify all transactions on-chain.

4. **Community Ownership**  
   - Share tokens exist entirely on-chain, enabling trustless profit sharing and potential governance.

5. **Scalability & Modularity**  
   - Substrate-based pallets can be upgraded or extended without needing an entire separate backend stack.

---

## Development Roadmap

### Overview
- **Total Estimated Duration**: 182 working days  
- **Total Costs**: ~ 0.35 BTC or 29,500 USDC/USDT  

Although the architecture is fully on-chain, the development still involves writing and testing the **on-chain modules**, creating the **client-side dApp**, and ensuring everything integrates smoothly.

---

### Milestone 1 — Core On-chain Modules & Betting Engine
- **Estimated Duration**: 92 Working Days  
- **Full-Time Equivalent (FTE)**: 1  
- **Costs**: $14,000

| #   | Deliverable                                              | Specification                                                                                                                                     |
|-----|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a  | Documentation                                            | Inline code docs, configuration docs, and a README explaining how to set up the chain and pallets.                                                |
| 0b  | Testing Guide                                            | Unit tests (≥50% coverage) plus instructions on running them (for Substrate pallets).                                                             |
| 1a  | On-chain Betting Module: Configuration                   | Define configuration for betting limits, outcomes, integration with on-chain randomness.                                                          |
| 1b  | On-chain Betting Module: Core Logic                      | Implement core logic (`createBet`, `placeBet`, `settleBet`, `depositFunds`, `withdrawFunds`).                                                     |
| 1c  | On-chain Ownership Module: Setup                         | Issue, transfer, and track casino share tokens for community ownership on-chain.                                                                 |
| 1d  | Docker & Deployment Setup                                | Dockerfiles for local test environments, helpful for easily spinning up a test network.                                                           |

---

### Milestone 2 — Additional On-chain Features & UI Integration
- **Estimated Duration**: 65 Working Days  
- **FTE**: 2  
- **Costs**: $11,500

| #   | Deliverable                           | Specification                                                                                                                                         |
|-----|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a  | Documentation                         | Updated docs covering new modules/features, plus guides on how the UI interacts with the chain.                                                       |
| 0b  | Testing Guide                         | Unit & integration tests (≥50% coverage) for new features (e.g., advanced casino games, extended share mechanics).                                    |
| 1a  | Advanced Casino Module                | Extend the **Casino Pallet** with additional games (like roulette, blackjack), integrated with on-chain randomness.                                   |
| 1b  | Share Governance Mechanics            | Optionally implement on-chain voting or profit-sharing logic for share token holders.                                                                 |
| 1c  | UI Chain Integration                 | Set up wallet connection in the React.js dApp (Polkadot.js/MetaMask) plus transaction signing and event listening for live updates.                   |
| 1d  | Docker & Deployment Setup            | Containers for local dev/test. Might include scripts for deploying the chain to testnet and the UI to IPFS or a static hosting service.               |

---

### Milestone 3 — Final UI Development & Public Launch
- **Estimated Duration**: 25 Working Days  
- **FTE**: 1  
- **Costs**: $4,000

| #   | Deliverable                   | Specification                                                                                                                        |
|-----|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 0a  | Documentation                | Comprehensive user/developer docs for the final version (covering the dApp usage, on-chain modules, how to run a local node, etc.).|
| 0b  | Testing Guide                | UI test coverage, instructions on how to run end-to-end testing (e.g., test a full bet cycle on a local chain).                     |
| 1a  | Final UI/UX Improvements     | Polish the React dApp (responsive design, user-friendly flows, real-time notifications of on-chain events).                        |
| 1b  | Public Testnet Deployment    | Deploy all on-chain pallets to a testnet; host the dApp (e.g., IPFS). Allow public user testing and feedback.                       |
| 1c  | Public Launch & UAT          | After successful testnet trials, prepare the mainnet launch; gather feedback from the community; fix any final bugs before release.|

---

## Future Plans

- **Cross-Chain Integration**  
  Explore bridging to other blockchain ecosystems (e.g., Polkadot parachains, Ethereum) to extend liquidity, user reach, and betting markets.

- **Advanced Governance**  
  Empower casino share holders with on-chain voting proposals, treasury management, and community-driven feature requests for new games or betting options.

- **NFT-Based Gaming & Rewards**  
  Incorporate non-fungible tokens for unique in-game items, special betting badges, or collectible casino membership perks.

- **Layer 2 Scalability**  
  Investigate rollups or off-chain solutions to reduce transaction fees and increase throughput, ensuring a seamless user experience during peak betting volume.

- **Expanded DeFi Integrations**  
  Partner with DeFi platforms to offer yield-bearing tokens for betting, collateralizing bets with stablecoins, and providing automated liquidity pools for frequent bettors.


## Team

- **Georges Dagher** – *Blockchain Developer, CTO*  
- **Joe Dagher** – *General Manager, CFO*  

## About the Founder – Georges Dagher

### **Blockchain & Full Stack Expert with Extensive Industry Experience**

Georges Dagher is a seasoned **Full Stack Developer** and **Blockchain Engineer** with a proven track record in **fintech, blockchain, and Web3 development**. With over **130+ web applications** built using **React, Next.js, Laravel, Solidity, and Web3**, he has been at the forefront of developing cutting-edge **crypto exchanges, decentralized applications (dApps), and blockchain-based casinos**.

### **Key Expertise & Achievements**
- **Blockchain & Smart Contracts**: Deployed **smart contracts handling over $75M in transaction volume**, showcasing expertise in **Solidity, Web3.js, and blockchain security best practices**.
- **Crypto & DeFi Projects**: Built **decentralized finance (DeFi) protocols**, including **staking platforms, launchpad integrations, and NFT marketplaces**.
- **Web3 & Fintech Experience**: Worked with **leading blockchain auditors like Hacken**, ensuring high-security standards for crypto projects.
- **Gaming & Crypto Casinos**: Developed **custodial and non-custodial crypto casinos**, implementing **live multiplayer PvP games**, on-chain payments, and **provably fair gaming systems**.
- **Cross-Industry Impact**: Successfully **collaborated with global teams** across fintech, crypto processing, and decentralized applications.

## About the Co-Founder – Joe Dagher

### **Strategic Finance & Operations Leader with a Proven Track Record**

Joe Dagher is a **finance and operations expert** with a strong background in **venture capital fundraising, financial strategy, and business operations**. With years of experience in **managing multi-million-dollar projects, overseeing financial operations, and leading cross-functional teams**, he brings a **business-driven approach** to the decentralized finance and blockchain gaming space.

### **Key Expertise & Achievements**
- **Venture Capital & Fundraising**  
  - Successfully **raised $3.5M in venture capital** to fund blockchain and gaming projects, ensuring strategic financial planning and execution.
  
- **Financial Strategy & Budget Optimization**  
  - Managed **financial operations** for large-scale projects, ensuring development and delivery were within allocated budgets.
  
- **Business & Project Management**  
  - Oversaw **end-to-end project execution**, from concept to deployment, ensuring timely delivery while maintaining high-quality standards.
  
- **Talent Acquisition & Team Leadership**  
  - Led **recruitment efforts** to hire top talent and drive key operational and development milestones.
---

### Team Contact Info
- **Name**: Joe Dagher  
- **Email**: [joe@blackbet.gg](mailto:joe@blackbet.gg)  or team@blackbet.gg
- **Website**: [BlackBet.gg](https://blackbet.gg)

---

### Additional Information

- **Work Done So Far**: A Telegram mini-app MVP (showcasing basic betting functionality).  
- **Financial Contributions**: \$8,500 by the core team members for telegram mini-app MVP development.  
- **Other Grants**: None.

---

## Summary

**BlackBet** is now envisioned as a **fully decentralized** platform:

- **All** betting logic, balances, and casino mechanics live in **Substrate pallets**.  
- **Users sign** every action with their **Web3 wallet**, removing any dependence on centralized servers.  
- **Chainlink VRF** (or another on-chain randomness provider) ensures fair and **verifiable** outcomes.  
- **React.js dApp** serves as a user-friendly **front-end**, connecting people directly to the chain.

This architecture delivers **maximum trustlessness, transparency, and community empowerment**, aligning perfectly with the ethos of Web3.
