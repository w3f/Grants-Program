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
  
- ### [1-min video pitch](https://youtu.be/9Z_46SslsDE)

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

- ### [Demo mockup](https://youtu.be/2XzEAwKtLJ4)
  
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
  
- ### What our project is **not** or **will not** provide in this grant
  In this three‑month fast grant we will **not** deploy a full production parachain, build a user‑facing trading UI, or finalize tokenomics and governance flows. Our scope is limited to delivering comprehensive technical documentation and prototypes for (1) smart‑contract driven automated market creation, (2) an advanced zkTLS⇄AI oracle network ensuring off‑chain site integrity and uptime, and (3) an in‑house Polkadot “Privy” module using threshold cryptography for social‑login account creation. Everything beyond these core R&D efforts—end‑to‑end parachain integration, performance tuning to >1,000 TPS, cross‑chain asset bridges, mobile SDKs, compliance/KYC layers, full audit and security hardening—will be scheduled for the subsequent project phase, outside the grant’s timeline.  

### 👽 User Acquisition Strategy and Execution

![pre-launch-image](https://github.com/user-attachments/assets/cbd0a2e7-c659-4adb-8bac-acb1341fbe72)

Kash’s go-to-market strategy is engineered to acquire a massive user base by turning social engagement into a high-stakes, reward-driven game. During pre-launch, Kash runs a multi-season, Simpsons-themed gamified farming campaign that transforms social media activity—memes, predictions, riddles, referrals—into a viral quest for $KASH tokens and exclusive NFT status. With influencer seeding (50–100 KOLs), auto-generated visual bet tweets, and a mystery-driven finale, the campaign is structured to pull in hundreds of thousands of users across X, Farcaster, and Discord. Scarcity via invite-only beta, constant leaderboard reshuffles, and casino-style psychological hooks (like variable rewards and near-miss messaging) ensure participants don’t just join—they obsessively compete, share, and climb. Every social interaction becomes a growth node in a self-reinforcing flywheel.

![post_launch_image_kash](https://github.com/user-attachments/assets/7927cb47-4add-4819-a866-38d1c77c9b5a)

Post-launch, Kash rapidly activates these primed users by leveraging viral loops, real-time trend hijacking, and creator-driven market seeding. Launch is synced with a high-profile cultural event to ensure visibility, with influencers posting their bets in real-time, creating shareable content for immediate network effects. Paid ads, real-world visibility (like London bus campaigns), and integrations with platforms like Discord and Farcaster expand the reach beyond crypto Twitter. To drive conversion and long-term retention, the strategy layers in token yield mechanics, exclusive memberships, gamified betting incentives, and governance-lite perks—turning every user into a stakeholder. In short, Kash doesn’t just market—it builds a movement fueled by memes, money, and mass virality, making client acquisition a matter of momentum, not speculation.

### 🧩 Ecosystem Fit

Kash positions itself as a high‑impact Polkadot parachain, combining decentralized prediction markets (CPAMM), advanced zkTLS⇄AI oracle technology, and seamless social‑login onboarding. By integrating AI‑curated markets with on‑chain composability and Substrate‑native pallet design, Kash not only enriches DeFi and oracle capabilities on Polkadot but also unlocks a massive user base from social platforms (X, Farecaster, Reddit).

### Where and how does your project fit into the ecosystem?  
Kash ships as a dedicated parachain runtime composed of custom pallets for MarketFactory, AMM, Resolver and ProxyAccount. It leverages Polkadot’s cross‑chain messaging (XCM) to integrate off‑chain AI agents (ElizaOS) and Mira consensus for automated market creation, and embeds a zkTLS oracle pallet for trustless outcome verification. FeeProxy and DEX‑Aggregator pallets (e.g. HydraDX) handle gas sponsorship and in‑chain swaps, while Relay Chain governance (Democracy, Treasury) oversees protocol upgrades and buy‑backs.

### Target audience 

- **Retail bettors & social traders** on X, Farecaster, Reddit, Telegram, Discord, among others!
—any user can create or join markets via simple social posts. Our first, initial ICP is anyone 25-35 years-old, crypto degen, previously partcipated in social bets or SocialFi apps and is tech savvy (enough to have a crypto wallet). As per some gaming psychological customer profiling, this sort of user could be consider a "gambler". 
- **DeFi investors** seeking new on‑chain yield opportunities with dynamic fee/reward models. As per some gaming psychological customer profiling, this sort of user could be consider a "saver" or "sophisticated investor"

### What need(s) does your project meet?  
- **Mass onboarding**: social‑login via Privy‑MPC lowers UX barriers, bringing millions of non‑crypto users to Polkadot.  
- **Automated, decentralized market creation**: AI‑driven question structuring and on‑chain Factory instantiation scales prediction markets beyond manual provisioning.  
- **Trustless resolution**: zkTLS proofs + ezkl‑compiled AI inference deliver cryptographically verifiable outcomes without centralized oracles.  
- **Composable infra**: other parachains can leverage Kash’s oracle and AMM pallets to bootstrap their own markets or extend existing DeFi apps.

### Are there any other projects similar to yours in the Polkadot ecosystem?  
- **PolkaOracle** offers a general oracle network on Polkadot, but lacks integrated zkTLS proofs and AI inference pipelines
- **Polkadex** is a parachain DEX focused on order‑book trading; it doesn’t provide prediction markets or AI‑driven oracles

**How is Kash different?**  
- **End‑to‑end zkTLS⇄AI oracle** built into the runtime, not just data feeds. The first, automated, decentralised, immediate and trustless prediction market resolution oracle network. 
- **Automated market creation** by off‑chain AI agents, not manual proposals, through ElizaOS and Polkadot integration, at the cutting-edge of advanced agentic AI models. 
- **Social‑first UX** with threshold‑cryptography login, onboarding via existing social identities.
- **Kash is to Polkadot what PayPal was to e-commerce** by setting a precedent and first-mover-advantage when it comes to fully embedding prediction markets into social media. 

**If no direct analogue exists, why?**  
Prediction markets with integrated AI+zk proofs and social login are a novel convergence of SocialFi, AI‑oracles, and DeFi—areas still nascent on Polkadot. Kash pioneers this combination, filling a clear gap in the ecosystem.  

## 👥 Team

- **Team Name:**
  Kash (no legal entity)
- **Contact Name:**
  Lucas Martin Calderon
- **Contact Email:**
  lucas@kash.bot
- **Website:**
  kash.bot (not operational)

### Team members

#### LinkedIn Profile

- [Lucas Martin Calderon, Founder](https://uk.linkedin.com/in/lucasmartincalderon)
- [Matthew Wampler-Doty, 1st Kasher](https://vitalik.eth.limo/general/2017/09/14/prehistory.html)

### Team Code Repos

- https://github.com/organizations/KashDAO

Please also provide the GitHub accounts of all team members:

- https://github.com/xcthulhu
- https://github.com/LucasMartinCalderon

### Team's experience

#### Matthew Wampler-Doty
Matthew Wampler‑Doty is a rare polymath whose career bridges blockchain architecture, AI, astrophysics, and formal methods. In 2014 he co‑designed Ethereum’s ASIC‑resistant PoW proposal (“Dagger Hashimoto”), a memory‑hard algorithm that effectively staved off profitable ASICs and preserved network decentralization. He then calibrated the original EVM opcode gas schedule—work still reflected in the Yellow Paper and tracked by tools like the evm-opcode-gas-costs repository—ensuring smart contracts run safely and efficiently. As a principal scientist, he has led development of novel consensus protocols and scalable contract execution engines, advancing blockchain throughput and resilience. Prior to blockchain, Matthew engineered the focal plane electronics for NASA’s TESS mission—creating real‑time camera simulators and compilers essential for exoplanet discovery and produced groundbreaking AI tools for chemical‑reaction inference. His formal‑verification work includes a mechanized proof of Birkhoff’s Representation Theorem and a reduction of finitely‑additive probability counter‑examples to NP‑complete MAX‑SAT problems. Across every domain, Matthew combines deep theoretical insight with hands‑on engineering rigor, making him uniquely qualified to architect and secure Kash’s innovative zkTLS ⇄ AI oracle and threshold‑cryptography login systems.

#### Lucas Martin Calderon 
Lucas is a visionary technologist and entrepreneur whose deep expertise spans blockchain infrastructure, AI-driven SaaS, and hardware‑accelerated computing. In 2014 he launched Spain’s first academic Bitcoin mining pool and, in the wake of Ethereum’s DAO hack, specialised back in 2016 in smart contract security research. He holds two engineering degrees and an MSc focusing on electronics, blockchain, and AI from UCL, where he contributed to quantum‑photonics research and co‑designed a CPU architecture that dynamically reconfigures itself to running workloads. He has built an AI‑powered smart‑contract vulnerability scanner leveraging non‑Euclidean topology analytics, attracting both government funding and a soft acquisition offer from a leading Web3 security firm. He served as exclusive advisor to a Layer‑1 chain founded by NYSE executives, and later as CEO of a protocol tokenizing diamonds — where he engineered a patent‑eligible, AI‑driven AMM and a cryptographically verifiable asset‑token linkage system.


## 📊 Development Status

Kash officially launched in April 2025 as a brand‑new protocol. Since then, we’ve completed comprehensive feasibility studies and market research—validating both our cutting‑edge technical approach and strong user demand with outstanding results. Please find how Kash tackles the biggest challenges in the prediction market field, enabling Kash to become the largest protocol globally: 

### How Kash Tackles Prediction Markets Biggest Challenges

> 💡  
> Please note that there are 4 main types of user personas in the prediction markets field:
> - **Savers**: participate in prediction markets to earn income.  
> - **Gamblers**: participate in prediction markets for the thrill of the bet.  
> - **Sharps**: sophisticated investors with relevant asymmetric market insights.

| **Issue**                            | **Kash's Strategic Solution**                                                                                   | **Impact & Result**                                                                                                    | **How Kash Clearly Outperforms Kalshi, Polymarket, and Manifold**                                                                                                                                         |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Low Demand** (Lack of Savers)      | Kash’s AI agents identify savers and reward them with variable‑ratio incentives and near‑miss rewards.         | ✅ Attracts savers seeking **positive‑sum returns** beyond zero‑sum betting.                                            | 🚀 **Kash:** Intrinsic DeFi yield for savers. 📉 **Kalshi:** No savings incentives. 📉 **Polymarket:** Pure betting, no yield. 📉 **Manifold:** Play‑money, no real finance.                                   |
| **Low Engagement** (Lack of Gamblers) | **High‑frequency, AI‑driven markets** plus **gamified mechanics** (variable‑ratio rewards, near‑miss triggers). | ✅ **Fast resolutions** and dynamic experiences boost participation and excitement.                                      | 🚀 **Kash:** Real‑time AI + gamification. 📉 **Kalshi:** Slow cadence, low engagement. 📉 **Polymarket:** Moderate speed, little gamification. 📉 **Manifold:** No real stakes.                                |
| **Limited Liquidity** (Few Sharps)   | **Viral social distribution** via **X, Reddit, Telegram, Discord** to mobilize large pools of users.          | ✅ **Deep liquidity**, strong arbitrage and hedging opportunities for sharps.                                           | 🚀 **Kash:** Deep social reach. 📉 **Kalshi:** Niche markets, limited users. 📉 **Polymarket:** Regulatory constraints. 📉 **Manifold:** No financial incentives for sharps.                                 |
| **Poor Market Accessibility**        | **Intent‑based UX** on social platforms with **Privy non‑custodial smart wallets** (OAuth + MPC).             | ✅ Removes friction, enabling **one‑click mass adoption** from everyday users.                                          | 🚀 **Kash:** Instant, gasless participation. 📉 **Kalshi:** Complex onboarding. 📉 **Polymarket:** UX friction. 📉 **Manifold:** No real‑money integration.                                                   |
| **Inefficient Pricing & Incentives** | **Continuous AI market signals** and **in‑protocol gamification** drive dynamic odds and participation.       | ✅ Enables frequent **arbitrage** and a **diverse participant base** with aligned financial interests.                  | 🚀 **Kash:** AI‑driven inefficiencies = profit opportunities. 📉 **Kalshi:** Static odds, limited depth. 📉 **Polymarket:** No advanced gamification. 📉 **Manifold:** No professional mechanistic edge.        |
| **Lack of Virality & Growth**        | **Real‑time trending alignment** and embedded social mechanics ensure perpetual relevance and discovery.      | ✅ Maximizes **organic user acquisition**, **market momentum**, and **social virality**.                                | 🚀 **Kash:** Deep platform integration for viral loops. 📉 **Kalshi:** No social layer. 📉 **Polymarket:** Basic sharing. 📉 **Manifold:** Limited real‑world traction.                                        |
## 📅 Development Roadmap

**Summary:**  
Over 3 months, two full‑time engineers (Matthew & Lucas) will deliver Kash’s core protocol modules as Polkadot, EVM‑compatible smart contracts and off‑chain services. We thank Polkadot and request **$10,000 USD** under the **MIT license**, with verification via unit tests, coverage reports, local POC demos and documentation.

### Overview
- **Estimated Duration:** 3 months  
- **Full‑Time Equivalent (FTE):** 2 engineers  
- **Total Cost:** \$10,000 USD  

| Number  | Deliverable                            | Specification                                                                                                                                                                                                                                   |
|--------:|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | **License**                            | Release all code and artifacts under the **MIT License**.                                                                                                                                                                                        |
| **0b.** | **Documentation**                      | - **Inline code docs** (NatSpec/JSDoc) for contracts & services.  <br>- **User guide**: contract deployment, off‑chain service setup, CLI usage, end‑to‑end workflow.                                                                              |
| **0c.** | **Testing & Guide**                    | - **Unit tests** for contract logic, oracle flows, MPC simulations.  <br>- **Threshold‑crypto tests** for t‑of‑n signing.  <br>- **Coverage report** ≥ 95%.                                                                                        |
| **0d.** | **Article**                            | Publish a **technical blog post** detailing architecture, implementation, and test outcomes—targeting Base & Polkadot communities.                                                                                                               |
| **1.**  | **Concentrated‑Liquidity Market Module** | - **EVM contract** (`MarketFactory.sol`) that:  <br>  • Creates a **binary‑outcome pool** with deadline/metadata.  <br>  • Implements **concentrated liquidity** (Uniswap v4 style).  <br>  • Exposes `createMarket()`, `addLiquidity()`, `placeBet()`.  <br>- **Range SDK & CLI**: tick‑math helpers + visualization tool.  <br>- **Verification:** Hardhat/Foundry tests + demo scripts showing pool creation, LP range positions, and trades updating reserves. |
| **2.**  | **AI‑Agent Integration POC**           | - **Off‑chain agent** in Node.js that uses ElizaOS to detect X posts, generates market proposals, and calls `createMarket()`.  <br>- **SDK module** for signing intent via MPC/social‑login → JSON‑RPC to MarketFactory.  <br>- **Verification:** POC script demonstrating market creation end‑to‑end and unit tests for agent logic, connected to Polkadot. |
| **3.**  | **zkTLS ⇄ AI Oracle Network POC**      | - **Off‑chain service** fetching one HTTP source over **zkTLS**, running an **ezkl‑compiled AI classifier** to output YES/NO + proof.  <br>- **Oracle contract** consuming and verifying the proof on‑chain (`resolveMarket()`).  <br>- **Verification:** Local chain demo, unit tests for proof generation & on‑chain verification. |

### 💰 Budget Breakdown

| Milestone | Deliverables                                                               | Cost (USD) | Estimated Completion |
|----------:|----------------------------------------------------------------------------|-----------:|---------------------:|
| **1**     | 0a–0d + Deliverable 1 (Market + Liquidity Module & CLI)                    |   \$5,000 |  3 weeks          |
| **2**     | Deliverable 2 (AI‑Agent Integration POC + SDK)                              |   \$2,500 | 3 weeks         |
| **3**     | Deliverable 3 (zkTLS⇄AI Oracle Network POC)                                 |   \$2,500 | 3 weeks        |
| **Total** |                                                                            | **\$10,000**| **9 weeks**        |


## 🔮 Future Plans

### Continued Development Post–Fast Grant
Once the core POC is delivered, Kash will move into a 3–4 month MVP phase focused on:  
1. **GTM & Farming Launch** – Deploy gamified “farm‑to‑fish” SocialFi campaigns to onboard savers and gamblers via token‑incentivized yield farms, in partnership with top crypto B2C agencies (ex‑Coinbase, Lido, Uniswap teams).  
2. **MVP Feature Build‑out** – Harden and extend the oracle network to handle multiple data sources, add multi‑choice markets, and integrate front‑end UIs for X/Discord.  
3. **Community Engagement** – Coordinate Discord “feed ambassador” contests, X‑based referral campaigns, and leaderboard competitions to lock in a loyal user base and drive viral adoption.

### Additional Funding Plans
- **Pre‑Seed VC & Angels** – We will secure angel checks and are in advanced discussions with tier‑one VCs for a pre‑seed round.  
- **Grants & Ecosystem Programs** – We will apply for Polkadot ecosystem grants (beyond Fast‑Grant) and pursue relevant accelerator support.  
- **Strategic Partnerships** – Engage DAOs, DeFi protocols, and prediction‑market infrastructure projects for co‑marketing and potential co‑funding.

### Vision & Ecosystem Impact
Kash aims to become the world’s largest, highest‑frequency prediction platform—fully embedded in social media and powered by trustless zk‑proof oracles and AI agents. By leveraging Polkadot’s scalability and cross‑chain messaging, we will:  
- **Double‑Down on Adoption** – Simplify market creation & resolution to attract millions of X, Farecaster, and Reddit users.  
- **Enable Reusable Oracle Infrastructure** – Open‑source our zkTLS⇄AI oracle stack so other DApps can tap into provably‑fair off‑chain data.  
- **Drive Native DeFi Growth** – Fuse prediction markets with yield‑bearing strategies to convert “savers” into active participants and bootstrap deep liquidity.  
- **Catalyze SocialFi on Polkadot** – Showcase how Polkadot’s security and governance can underpin truly trustless, socially‑driven financial products at scale.  


## ℹ️ Additional Information

Beyond the technical team, Kash has secured founding members from tier-one web3 crypto protocols, from legal to design to hard core cryptographics experts, as the project's success relies on the correct GTM, development, execution and user adoption, maximising our chances. 

Remember that the Fast-Grants Programme is designed as a first step for promising projects. We're looking for projects that can continue to grow beyond this initial funding.
