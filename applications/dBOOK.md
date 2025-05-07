# 📝 dBOOK

## 🌟 Project Overview


- Tagline:  
AI-powered Intelligence Engine for Wallets
- Brief description:  
dBOOK is an AI-powered intelligence engine that simplifies Web3 exploration and protocol interaction into a single, in-wallet conversation. By unifying on-chain discovery and transaction execution into a single, chat-based flow, dBOOK removes friction for end users, opens new revenue avenues for wallets, and provides protocols with direct access to high-intent audiences.
- An indication of how your project relates to / integrates into Polkadot:  
dBOOK integrates natively with the Polkadot stack through a lightweight TypeScript SDK that snaps into any polkadot{.js}-compatible wallet—including Talisman, SubWallet and Nova—and overlays a conversational UI. This layer translates a user's plain-language request into a signed Intent, preserving the wallet's existing sr25519 keys and signature flow.
On the protocol side, parachains add a minimal open-source Substrate pallet that maps their functions to the same intent format, allowing every swap, lend, stake or bridge action to be invoked programmatically. dBOOK's settlement engine then converts the intent into XCM v3 messages and executes it atomically across the relevant parachains, delivering a single, safe result to the user.
- An indication of why your team is interested in creating this project:  
We're building dBOOK because the last mile of Web 3 still speaks machine, not human. As everyday multi-chain users we juggle half a dozen wallets, bridges and signatures—yet a simple, plain-English request like “bridge my DOT to Moonbeam and earn the best yield” still takes multiple clicks & dApps.
Polkadot's XCM shows the infrastructure for seamless interoperability already exists; what's missing is the consumer-grade layer that:  
	‣ Understands intent - a chat interface that turns natural-language requests into a single, signed, cross-chain transaction.  
	‣ Advises intelligently - an AI engine that studies each wallet's on-chain history, risk profile and real-time yields to surface personalised protocol recommendations, not a static dApp list.  
	‣ Executes safely - a solver network that races to deliver the best route while validators stake to guarantee correctness.

- [1-min video pitch](https://www.ycombinator.com/video/):  
https://docsend.com/v/jrb5g/polkadot  

### 🔍 Project Details

We expect applicants to have a solid idea about the project's expected final state. Therefore, please submit (where relevant):

- An overview of the technology stack to be used:  
**Intelligence Engine**: Maps user intentions to programmable on-chain intentions.  
Tech Stack: JavaScript/Node.js, Anthropic SDK.  
**Settlement Engine**: Finds the best execution path among solvers, agents for a given intent.  
Tech Stack: JavaScript/Node.js, Solidity, 0x API, Coinbase API, Moralis SDK, Viem, MySQL.  
**Recommendation Engine**: Suggests quality protocols using momentary intelligence factoring user's current intent, balances and on-chain activity.  
Tech Stack: JavaScript/Node.js, openAI SDK, Pinecone.  
Frontend: Allows user to chat with intelligence engine and execute transaction. Tech Stack: Typescript/React, Tailwind CSS, ethers.

- Documentation of core components, protocols, architecture, etc. to be deployed:  
https://whitepaper.dbook.network/
- Any PoC/MVP or other relevant prior work or research on the topic:  
Demo link: https://docsend.com/v/jrb5g/intelligencedemo  
Whitepaper link: https://whitepaper.dbook.network/  
Website link: https://dbook.network/  
- Mockups/designs of any UI components:  
https://drive.google.com/drive/folders/1B0P2MB3SLHcLNxfoZZx2o7PO-jNOonhB?usp=sharing  
- Data models / API specifications of the core functionality:  
To be decided later  
- What your project is _not_ or will _not_ provide or implement:  
  - This is a place for you to manage expectations and clarify any limitations  
What dBOOK is not going to build or promise  
	•	Not another wallet: We enhance existing Polkadot wallets through an SDK; we will never ship a standalone wallet that competes with our partners.  
	•	Not a new parachain (at launch): Intent ordering runs off-chain first, with the option to migrate to a lightweight parathread only for shared security—not to create yet another execution environment.  
	•	Not a liquidity source or DEX: dBOOK routes intents to third-party bridges, DEXes and lending pools; we will not operate our own trading venues or hold user funds.  
	•	Not custodial: Keys stay in the user's chosen wallet; dBOOK never stores private keys, seed phrases or recovery shares.  
	•	Not a data-harvesting platform: All recommendations are computed from on-chain public data and in-wallet context; we do not monetise personal data or off-chain tracking.  
	•	Not a “yield guarantee: Our AI ranks opportunities, but market risk, slippage and protocol risk remain the user's responsibility; we do not underwrite returns.  
	•	Not a replacement for Polkadot governance or XCM tooling: We consume XCM and OpenGov primitives rather than re-implementing them.  
In short: dBOOK is an assitant and recommendation engine—not a wallet, not a chain, and not a custodial service—designed to reduce fragmentation rather than add to it.  

### 🧩 Ecosystem Fit

Help us locate your project in the Polkadot landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?  
dBOOK forms the “middleware glue” between Polkadot's wallets and its parachains. 
A lightweight SDK plugs into any polkadot{.js}-based wallet, adding a chat box that turns plain-language requests into signed intents. Those intents flow to an off-chain engine that ranks the safest, cheapest route, then to settlement engine that execute the plan as a single XCM transaction. Parachains tap in via a simple Substrate pallet, instantly becoming discoverable and callable by every integrated wallet.  
Result:  
‣ Wallets keep users inside the ecosystem with one-chat, cross-chain actions,  
‣ Parachains get a turnkey distribution rail and higher conversion,  
‣ Polkadot benefits from more transactions, TVL, and retained users—without adding a new competing wallet or siloed chain.  
- Who is your target audience?  
‣ Wallet & UX providers (primary): Polkadot/Substrate wallets such as Talisman, SubWallet and Nova integrate dBOOK's API to add conversational, on-chain intent execution plus curated product discovery, boosting retention and revenues.  
‣ Parachain & dApp teams (secondary): DeFi, NFT and GameFi projects (e.g., Acala, Moonbeam, Astar) plug into dBOOK's distribution rail to reach the right users across every wallet—no additional UX or growth stack required.  
‣ Retail users (ultimate): Crypto-natives and crypto-curious newcomers gain a single, AI-guided, self-custodial flow that lets them discover and use Polkadot protocols as easily as sending a chat message.  
- What need(s) does your project meet?  
dBOOK meets four acute gaps in the Polkadot landscape:  
	1.	Seamless cross-chain UX – turns a chat sentence (“bridge my DOT, stake it on Moonbeam”) into one signed, risk-checked XCM transaction, eliminating today’s wallet-hopping and manual bridges.  
	2.	Wallet retention & revenue – a two-file SDK lets any Polkadot wallet offer that experience in days, boosting stickiness and adding an intent-routing fee stream without building its own bridge logic.  
	3.	Protocol distribution – a lightweight Substrate pallet makes a parachain action instantly discoverable in every dBOOK-enabled wallet, replacing ad-hoc marketing with qualified, AI-matched traffic.  
	4.	Network utilisation – each intent generates XCM volume, validator fees and sticky liquidity, translating Polkadot’s technical interoperability into a tangible user advantage.

In short, dBOOK converts Polkadot’s cross-chain plumbing into a one-sentence, one-click experience that benefits users, wallets, parachains and the Relay Chain alike.
- Are there any other projects similar to yours in the Polkadot ecosystem?
  - If so, how is your project different?
  - If not, why might such a project not exist yet?  
There are projects like Talisman Portal that aggregates transaction routing and SubWallet 'Discover' that prodives a dApp catalog and abstracts some XCM steps. However they are only limited for bridges/swaps and manual product cataloging. There's a clear gap of a natural language based system that does "intent to execution" by integrating transaction flow in one conversation, and personalised product recommendations to the users.  
Why no direct competitor yet:  
‣ Engineering complexity: dBOOK's tech stack of Intelligence engine, recommendation engine and settlement engine exceed typical wallet scope.  
‣ AI/ML skill-set: Real-time intent parsing, risk-scoring, and personalised ranking demand ML infra that most wallet or parachain teams don't specialise in.  
‣ Business model: dBOOK's B2B API (wallet SDK) is a new monetisation path that current ecosystem projects haven't pursued. 
> **Note**: We prioritize projects building on Plaza/Polkadot Hub, games, and DeFi applications, though all types of projects will be considered.

## 👥 Team

- **Team Name:** dBOOK
- **Contact Name:** Harshit Singhal
- **Contact Email:** harshit@dbook.network
- **Website:** https://www.dbook.network

### Team members

Angad Singh Agarwal
Harshit Singhal
Gurkaran Sahni

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/mrangad
- https://www.linkedin.com/in/gurkaransahni
- https://www.linkedin.com/in/harry1121

### Team Code Repos
-- Private for now

Please also provide the GitHub accounts of all team members:

- https://github.com/mrangad
- https://github.com/gurkaransahni99
- https://github.com/harry1121-s

### Team's experience

Angad Singh Agarwal (CEO)
Angad is an experienced software engineer with a background in DeFi, programming and finance. A Purdue University Graduate in Electrical Engineering, he has successfully led multifunctional teams in the development of compliant crypto products. At Nealthy, Angad single-handedly built a proof-of-concept that enabled the startup to secure $1.3M in pre-seed funding. He is now focused on dBOOK, driving the company's vision and leading business development.

Gurkaran Sahni (CTO)
Gurkaran Sahni is a seasoned blockchain engineer with extensive experience in DeFI and blockchain security. As the blockchain lead at Bitbns, he spearheaded the development of over 10 products, driving engagement from 10,000+ daily active users. He has also contributed to projects raising over $1 million and secured $4.6 million in assets through whitehat hacking.

Harshit Singhal (CRO - Chief Research Officer)
Harshit Singhal has a background in cryptography and blockchain technology. He previously deployed quantum communication systems for the Indian Army and specialized in post-quantum cryptography. Transitioning to blockchain, Harshit led projects generating millions in transaction volume, launched an omnichain decentralized exchange with $1.3M at launch, scaled a community of over 30,000 users, and developed innovative solutions for regulated crypto markets.

## 📊 Development Status

If you've already started implementing your project, please provide a link and a description of the code. Otherwise, please provide some documentation on the research and other work you have conducted before applying.  
-- Whitepaper Link: https://whitepaper.dbook.network/  

## 📅 Development Roadmap
This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, please describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality.  
**Stage 1: Frameworks & Wallet SDK**  
Deliverables:  
a. Open-source Intelligence Engine SDK for polkadot{.js}-compatible wallets.  
b. Substrate Intent Pallet that maps parachain calls to the dBOOK intent schema.  
Success Milestone:  
a. Live in-wallet chat panel with successful translation of "intention to intent".  
b. Code published under Apache 2.0.  

**Stage 2: Native Asset Transfer & XCM Settlement**  
Deliverables:  
a. Settlement Engine that converts intents → XCM v3 messages.  
b. Support for DOT with major parachain assets (Acala aUSD, GLMR, ASTAR) with fee abstraction.  
Success Milestone:  
a. End-to-end "Convert DOT to GLMR" live demonstration.  
b. 1000+ cross-chain intents settled with less than 1% failure.  

**Stage 3: Protocol / Parachain Integration & Recommendations**  
Deliverables:  
a. Parachain adapters for top ecosystems (Acala DeFi, Astar EVM, Moonbeam DEXes, HydraDX LBP).  
b. Recommendation Engine: tag based live recommendation system.  
Success Milestone:  
a. 10+ parachains live through pallet adapters.  
b. Live recommendations via in-wallet chat activities.  


**Important notes:**

- Each milestone is capped at **$5,000 USD**
- Milestones must be delivered within **3 months** of approval
- The maximum grant amount is **$10,000 USD** per application (up to **$15,000 USD** per project in exceptional cases)
- You will only receive payment after successful milestone delivery

### Overview

- **Estimated Duration:** Duration of the whole project (maximum 3 months):  
2.5 months
- **Full-Time Equivalent (FTE):** Average number of full-time employees working on the project:  
4
- **Total Costs:** Requested amount in USD for the whole project (maximum $10,000 USD):  
Total Cost = $9000  
2 FTE at $1200/month  
2 FTE at $600/month

> Note that deliverables 0a to 0d are mandatory. Please adapt their specification to your project.

| Number | Deliverable                       | Specification                                                                                                                                                                                                                            |
| -----: | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                           | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                     |
|    0b. | Documentation                     | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a wallet service can integrate the dBOOK's intelligence engine and it's functionalitites.                                           |
|    0c. | Testing and Testing Guide         | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                          |
|    0d. | Article                           | We will publish an **article** that explains what was done/achieved as part of the grant.                                                                                                                                                |
|     1. | Wallet Intelligence SDK + Chat UI | We will publish @dbook/sdk (TypeScript) shipping a plug-and-play React/Vue chat panel so any polkadot{.js}-compatible wallet can translate plain-language requests into a signed Intent JSON.    |
|     2. | Intent Pallet v0                  | We will release a Substrate pallet that maps common extrinsics (transfer, swap, stake, etc.) to the dBOOK intent schema and emits IntentExecuted events for indexing and audit.                                                          |
|     3. | Settlement Engine β               | We will integrate and create(if required) solver services that convert an intent into XCM v3 messages, execute cross-parachain transfers (e.g., DOT → GLMR) and return one atomic result to the wallet, with automatic fee-asset selection. |
|     4. | Asset-Support Matrix v1           | We will add DOT plus major parachain assets (aUSD, GLMR, ASTR), auto-detect available pairs per wallet and demonstrate ≥1000 cross-chain intents with <1 % failure.                                                                     |
|     5. | Parachain Adapters v1             | We will publish ready-made adapter crates for Acala, Astar, Moonbeam, HydraDX and others, so any parachain protocol can expose its functionality as intent-callable endpoints.                                             |
|     6. | Recommendation Engine v1          | We will publish a rule-based tags model that delivers intent-mapped protocol suggestions inside the wallet chat.                                |

### 💰 Budget Breakdown

Please provide a breakdown of your budget by milestone:

| Milestone | Deliverables                                                | Cost (USD)  | Estimated Completion |
| --------- | ----------------------------------------------------------- | ----------- | -------------------- |
| 1         | Wallet Intelligence SDK + Chat UI, Intent Pallet v0         | $2,700      | 0.75 month           |
| 2         | Settlement Engine β, Asset-Support Matrix v1                | $2,700      | 0.75 month           |
| 2         | Parachain Adapters v1, Recommendation Engine v1             | $3,600      | 1 month              |
| **Total** |                                                             | **$9,000**  | **2.5 months**       |

## 🔮 Future Plans

Please include:

- How you intend to continue development after the Fast-Grant  
‣ Post the fast grant, we intent to onboard users onto the B2C web-app and start monetisation from procotols for in-app personalised recommendations  
‣ Integrate other agentic workflows to broaden user-segments  
‣ Build rails for inward flow from other ecosystems (wallet APIs)

- Any plans for seeking additional funding (other grants, VC funding, etc.):  
We intend to raise additional capital through venture funding and complementary grant opportunities.  
- Your vision for the project's growth and impact in the Polkadot ecosystem:  
dBOOK will become the default on-ramp and routing layer that funnels people, liquidity, and attention into Polkadot.  
	‣ Unlock mainstream access. By abstracting every bridge, XCM call and fee swap behind a single chat request, we expect to bring > 1 million new wallets into the ecosystem within three years—users who would otherwise stay on EVM, Solana or Cosmos.  
	‣ Super-charge protocol growth. Any parachain that ships the dBOOK pallet is automatically surfaced—ranked and risk-scored—in every integrated wallet, turning Polkadot’s “long tail” of dApps into a curated storefront and boosting TVL and active addresses across the Relay Chain.  
	‣ Ecosystem flywheel. More users → more intents → more fees and data → better AI recommendations → higher protocol conversion—creating a self-reinforcing loop that elevates Polkadot from a technically superior network to the most user-friendly multichain hub.  

## ℹ️ Additional Information

Here you can add any additional information that you think is relevant to this application, such as:

- Work you have already done  
Demo link: https://docsend.com/v/jrb5g/intelligencedemo
- If there are any other teams who have already contributed to the project
- Other funding you may have applied for

