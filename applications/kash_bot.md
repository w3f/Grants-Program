# 📝 Kash

## 🌟 Project Overview
<img width="656" alt="Screenshot 2025-04-19 at 16 55 07" src="https://github.com/user-attachments/assets/b96ff522-1b88-47ff-95ea-d23889eab0d6" />

- ### Name and one-liner of the project
  Kash - Your Friendly AI-Powered Prediction Markets Crypto Buddy On X
  
- ### Description
  Kash enables users to effortlessly place bets on the outcome of future events, directly from a simple X post. ElizaOS and Mira Network are used to digest market signals to create new trending markets and to perfectly     target the right X thread at the right time to ensure maximum user kick and engagement. Equally, Kash is building the first zkTLS <> AI oracle network to resolve markets immediately, in a decentralised and trustless manner -three of the biggest challenges stopping prediction markets from becoming the next big thing. At the core of Kash, there is Polkadot, to ensure millions of users deposit USDT on the biggest prediction markets, with Kash understanding and executing user intents from a simple post, automatically, fully effortlessly and seamlessly. **Before, PayPal changed the game with email-based payment systems. Today, Kash is redifining SocialFi with a simple post - poised for viral growth.** 🧨
<img width="1158" alt="Screenshot 2025-04-19 at 16 48 48" src="https://github.com/user-attachments/assets/8737a587-d2c4-4fed-945f-c040de88cbdd" />


- ### Polkadot integration:
  Kash integrates seamlessly into Polkadot as a Substrate-based parachain, leveraging Polkadot’s shared security and XCM interoperability to enhance its AI-driven prediction markets. Built natively on Polkadot, Kash taps into Phala Network’s off-chain compute for its ElizaOS AI and aligns its zkTLS oracles and ZKML resolution with Polkadot’s zero-knowledge focus (e.g., JAM protocol). It can pull liquidity from Acala or data via Acurast, showcasing Polkadot’s flexibility for complex DeFi primitives. For Polkadot, Kash introduces a socially-driven use case—prediction markets with social media integration—boosting retail adoption, ecosystem liquidity, and technical innovation in AI and ZK domains - it effectively has the power to bring million of X users seamlessly onto Polkadot 🙌
  
- ### Kash-team-fit:
  Kash is built upon two main pillars that the team profoundly believes in. Firstly, the unequivocal human right to permissionlessly participate in prediction markets to yield an accurate public good, and, secondly, the team's certainty and vision of the future of retail finance being fully embedded into social media and running on cryptorails. Finally, the team includes the nerdiest of cryptographers (zkp experts), blocklchain security hackers (DeFi focused) together with the most degen of crypto / web3 B2C marketers. The team further brings 7+ years of early-stage, product-led crypto entrepreneurial experience, with the best successful failures and vital lessons learned, all of which make us the hungriest to conquer the GTM with Kash 🔥
  
- [1-min video pitch](https://www.ycombinator.com/video/)

### 🔍 Project Details

- ### Technology stack:
  Kash is a Substrate-based parachain built on the **Polkadot ecosystem**, harnessing shared security and **XCM** (cross-chain messaging) to drive its **AI-powered prediction markets**. Its off-chain AI framework, **ElizaOS**, runs on **Phala Network** with Intel SGX, enabling secure computation for market curation and resolution. Trustless operations are powered by **zkTLS oracles and a ZKML pipeline via RISC Zero’s zkVM**, aligning with Polkadot’s zero-knowledge vision (e.g., JAM protocol). Liquidity is sourced from **Acala’s aUSD stablecoin**, while **Acurast** delivers decentralized real-world data as oracles. The user experience is streamlined through a **Polkadot.js** frontend and custom APIs for social media integration, starting with X's API and moving later to Reddit, Telegam, Farecaster and more. 

- ### Documentation of core components, protocols, architecture, etc. to be deployed
  1. #### KashDAO Architecture Design
     ![kash_polka_architecture](https://github.com/user-attachments/assets/968706b8-663b-45f5-9aa9-b5ab04dfd0e0)
     The KashDAO architecture leverages Polkadot’s on‑chain governance pallets (Democracy, Council, Technical Committee) alongside a bespoke Treasury & Buyback pallet to coordinate protocol funding, fee management, and token buy‑backs. Market parameters, pallet upgrades, and oracle lists are submitted as GOVERNANCE calls and voted on via on‑chain referenda. Once approved, the Scheduler pallet enacts changes automatically at the next era boundary. Emergency multi‑sig interventions are handled by the Proxy pallet under a “Collective” proxy group, ensuring no single actor can unilaterally pause markets or alter critical modules. This design creates a fully decentralized decision loop—proposals originate in the community, are ratified on the Relay Chain, and executed atomically in the Kash parachain runtime.
  3. #### Protocol Architecture
     ![kash_aaa](https://github.com/user-attachments/assets/4d5c9788-92dc-4171-a1f5-22dfba8a448a)
     At its core, the Kash parachain runtime bundles three key pallets: the AMM pallet for on‑chain constant‑product markets, the Resolver pallet for trustless outcome settlement via zk‑proof verification, and a ProxyAccount pallet for gas delegation and meta‑transactions. Off‑chain, ElizaOS agents and Mira validators generate and curate markets, then submit XCM‑encoded extrinsics to the parachain. Liquidity provisioning and swaps execute through an integrated DEX Aggregator pallet (e.g., HydraDX), while the FeeProxy pallet sponsors transaction fees, paid in xcUSD or KASH. MEV protection is provided by a dedicated bundle relayer that interfaces with collators—ensuring private inclusion of large bets. Together, these modules stitch off‑chain intelligence and on‑chain execution into a seamless, Polkadot‑native protocol.
  5. #### Listeners
     ![kash_wallet](https://github.com/user-attachments/assets/f9f7fa15-1f80-4d79-9519-0c27d43a1e44)
     Kash off‑chain listeners consist of two streams: the X Post Listener monitors public tweets tagging @kash_bot, parsing structured bet intents via a lightweight NLP layer; the DM Interface handles private commands, mapping natural‑language requests (“Bet 20 on NO”) into discrete extrinsic payloads. Both listeners sign payloads with a Privy‑managed MPC key and forward them to a ProxyDispatcher service. This service batches incoming operations into a single “UserOperation” and routes them through the ProxyAccount pallet, enabling gas‑abstracted execution. By decoupling social ingestion from on‑chain calls, Kash maintains high throughput, resilience to social‑layer rate limits, and an immutable audit trail of user intents.
  7. #### Wallet & Account Logic
     ![kash_wallet_sequence](https://github.com/user-attachments/assets/44dce2d5-a9e4-43eb-9542-282458d5c401)
     Wallets are instantiated via the Privy MPC framework, which generates an SS58 address and splits key shares between the user device and Kash’s HSM. Each user gets a ProxyAccount on the parachain, controlled by a “proxy” pallet instance. When a user action arrives, the Privy service reconstructs the signature locally, and the ProxyDispatcher submits the extrinsic through the ProxyAccount, which can both batch 0x‑style swaps and AMM interactions. Fees are sponsored by the FeeProxy pallet, debited in xcUSD on success. In case of account compromise, users can rotate shares via an emergency recovery pallet, re-establishing control without exposing seed phrases—preserving self‑custody and user experience.
  9. #### Automated, AI-Powered Market Creation
     ![kash_market_creation](https://github.com/user-attachments/assets/4df5932d-f598-4be6-b9b0-b9a7a3640a6f)
     ElizaOS agents run in a distributed off‑chain worker network, continuously scanning X for emerging topics. Upon detecting a suitable signal, the Market Creator agent uses a fine‑tuned LLM to normalize the question, then computes a “Gambling‑Neutral Behavioral Score” and consults Mira validators for consensus. If the score and validator attestations pass predefined thresholds, the agent submits an XCM‑wrapped instantiate_market extrinsic to the parachain’s Factory pallet. That pallet spins up a new instance of the AMM and Resolver pallets, initializing liquidity pools and on‑chain metadata. A feedback message is then sent back through @kash_bot, complete with initial odds—turning social chatter into decentralized markets in under seconds.

  
- ### Tokenomics and Token Utility Prior Research and Work For Community Engagement and Sustanability
  ![kash_tokenomics](https://github.com/user-attachments/assets/feb8680b-ee0f-4618-9e3e-2cef12e1dd55)

- [Demo mockup](https://www.youtube.com/watch?v=lnyuNwofK7M)
  
- ### Data models / API specifications of the core functionality
  Core functionality is exposed via two complementary interfaces: (1) a lightweight REST/WebSocket API for off‑chain agents and front‑end bots, and (2) the on‑chain RPC and extrinsic methods of our parachain.

In the off‑chain API, each `UserOperation` object is modeled as:

```json
{
  "sender_ss58": "5F…",
  "calls": [
    {
      "pallet": "dexAgg",
      "method": "swap_exact_input",
      "args": {
        "asset_in": "DOT",
        "asset_out": "xcUSD",
        "amount_in": 1000000000000
      }
    },
    {
      "pallet": "amm",
      "method": "place_bet",
      "args": {
        "market_id": "0xabc123…",
        "outcome": 1,
        "amount": 50000000000
      }
    }
  ],
  "fee_asset": "xcUSD",
  "max_fee": 1000000000,
  "nonce": 42,
  "signature": "0x…"
}
```

The ProxyDispatcher packages this payload and dispatches it via the `proxy.dispatch` extrinsic.

On‑chain, the runtime exposes pallets with the following key extrinsics (parameters simplified):

- **Factory.instantiate_market**  
  ```rust
  fn instantiate_market(
      origin: Origin, 
      question: Vec<u8>, 
      outcomes: u8, 
      deadline: T::BlockNumber
  ) -> MarketId
  ```
- **AMM.add_liquidity**  
  ```rust
  fn add_liquidity(
      origin: Origin, 
      market_id: MarketId, 
      amounts: Vec<Balance>
  )
  ```
- **AMM.place_bet**  
  ```rust
  fn place_bet(
      origin: Origin, 
      market_id: MarketId, 
      outcome: u8, 
      amount: Balance
  )
  ```
- **Resolver.resolve_market**  
  ```rust
  fn resolve_market(
      origin: Origin, 
      market_id: MarketId, 
      outcome: u8, 
      proof: Vec<u8>
  )
  ```
- **Treasury.withdraw_proceeds**  
  ```rust
  fn withdraw_proceeds(
      origin: Origin, 
      market_id: MarketId
  )
  ```

Market state is stored in a Rust struct:

```rust
struct MarketInfo<AccountId, Balance, BlockNumber> {
    question: Vec<u8>,
    creator: AccountId,
    outcomes: u8,
    reserves: Vec<Balance>,
    deadline: BlockNumber,
    resolved: bool,
    result: Option<u8>,
}
```

Resolution proofs are verified by the on‑chain `Verifier` pallet using a succinct SNARK verifying key. Events such as `MarketCreated`, `BetPlaced`, `MarketResolved`, and `PayoutIssued` provide real‑time feeds to off‑chain indexers. Cross‑chain asset transfers and XCM‑wrapped extrinsics enable multi‑network interoperability for both liquidity and resolution agents.
  
- ### What Kash is *not* or will *not* provide or implement
  

### 🧩 Ecosystem Fit

Help us locate your project in the Polkadot landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Target audience: 
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Polkadot ecosystem?
  - If so, how is your project different?
  - If not, why might such a project not exist yet?

> **Note**: We prioritize projects building on Plaza/Polkadot Hub, games, and DeFi applications, though all types of projects will be considered.

## 👥 Team

- **Team Name:** Name of your team. If you apply as a legal entity, please use its name.
- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email
- **Website:** Your website, GitHub org, blog, or similar

### Team members

Please list the legal name of all grant beneficiaries. Solo developers (1-person teams) are eligible for funding.

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/{person_1}
- https://www.linkedin.com/{person_2}

### Team Code Repos

- https://github.com/{your_organisation}/{project_1}
- https://github.com/{your_organisation}/{project_2}

Please also provide the GitHub accounts of all team members:

- https://github.com/{team_member_1}
- https://github.com/{team_member_2}

### Team's experience

Please describe the team's relevant experience, including any previous blockchain projects or contributions to the ecosystem.

## 📊 Development Status

If you've already started implementing your project, please provide a link and a description of the code. Otherwise, please provide some documentation on the research and other work you have conducted before applying.

## 📅 Development Roadmap

This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, please describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality.

**Important notes:**
- Each milestone is capped at **$5,000 USD**
- Milestones must be delivered within **3 months** of approval
- The maximum grant amount is **$10,000 USD** per application (up to **$15,000 USD** per project in exceptional cases)
- You will only receive payment after successful milestone delivery

### Overview

- **Estimated Duration:** Duration of the whole project (maximum 3 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project
- **Total Costs:** Requested amount in USD for the whole project (maximum $10,000 USD)

> Note that deliverables 0a to 0d are mandatory. Please adapt their specification to your project.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can... |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article** that explains what was done/achieved as part of the grant. |
| 1. | Feature X | We will create a feature that will... (Please describe in detail) |
| 2. | Feature Y | The Y feature will... (Please describe in detail) |
| 3. | Feature Z | The Z feature will... (Please describe in detail) |

### 💰 Budget Breakdown

Please provide a breakdown of your budget by milestone:

| Milestone | Deliverables | Cost (USD) | Estimated Completion |
| --- | --- | --- | --- |
| 1 | Features X, Y | $5,000 | 1.5 months |
| 2 | Feature Z | $5,000 | 1.5 months |
| **Total** | | **$10,000** | **3 months** |

## 🔮 Future Plans

Please include:

- Future development after the Fast Grant: Kash is on full speed seeking fundraising from BAs and VCs. We already have gathered a small initial amount from BAs, and tier one VCs have shown solid interest in learning more about our pre-seed round. The round costs will be broken down into GTM execution (gamified farming for SocialFi pre-launch), MVP development and community engagement competitions. For the former, we have already partnered with top crypto B2C marketing and strategy companies that have brought products like Coinbase, Lido or Uniswap to the next level. The MVP will take around 3-4 months until official launch with solid and loyal user base (from the farming strategy) and community competitions will be coordinated from our Discord server and executed on X, regarding our "feed ambassadaor", referral and leaderboard strategies to keep Kash users engaged and maximise X viral growth.

- Any plans for seeking additional funding (other grants, VC funding, etc.)
  
- Vision of Kash within Polkadot: Kash aims to become the largest prediction market in the world whose technology enables for a higher-frequency betting schedule and a viral user growth, given our full embedding directly onto social media, fully powered and driven via advanced AI agents and immediate, trustless cryptographic techniques. Polymarket brought the concept of prediction markets to the world, and Kash is here to double down on that and overcome the biggest barriers these platforms have had thus far, albeit their massive success ($3 billion volume in most popular markets alone), with Elon Musk reposting them all the time. 

## ℹ️ Additional Information

Here you can add any additional information that you think is relevant to this application, such as:

- Work you have already done
- If there are any other teams who have already contributed to the project
- Other funding you may have applied for

Remember that the Fast-Grants Programme is designed as a first step for promising projects. We're looking for projects that can continue to grow beyond this initial funding.
