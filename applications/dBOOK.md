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
What dBOOK is not going to build or promise  
	•	Not another wallet: We enhance existing Polkadot wallets through an SDK; we will never ship a standalone wallet that competes with our partners.  
	•	Not a new parachain (at launch): Intent ordering runs off-chain first, with the option to migrate to a lightweight parathread only for shared security—not to create yet another execution environment.  
	•	Not a liquidity source or DEX: dBOOK routes intents to third-party bridges, DEXes and lending pools; we will not operate our own trading venues or hold user funds.  
	•	Not custodial: Keys stay in the user's chosen wallet; dBOOK never stores private keys, seed phrases or recovery shares.  
	•	Not a data-harvesting platform: All recommendations are computed from on-chain public data and in-wallet context; we do not monetise personal data or off-chain tracking.  
	•	Not a “yield guarantee: Our AI ranks opportunities, but market risk, slippage and protocol risk remain the user's responsibility; we do not underwrite returns.  
	•	Not a replacement for Polkadot governance or XCM tooling: We consume XCM and OpenGov primitives rather than re-implementing them.  
In short: dBOOK is an assitant and recommendation engine—not a wallet, not a chain, and not a custodial service—designed to reduce fragmentation rather than add to it.  

## 👽 GTM Strategy
dBOOK will roll out in two waves—**Private Beta** followed by **Public Launch**—using a lean, content-driven funnel that turns early adopters into the primary growth engine.  
The strategy focuses on:  
* Seeding broad awareness with zero-cost channels,  
* Capturing qualified leads through a referral-powered wait-list,  
* Activating those leads in a tightly managed private beta, and  
* Leveraging their success stories to amplify reach ahead of the open release.

### Funnel & Channels

**Awareness:** Put dBOOK = chat-to-transact on the radar of crypto Twitter & builders.  
  * Many-part X thread series like “Why intents > transactions”, “UX death by bridges”, “How dBOOK works in one GIF.”, etc.  
  * Medium deep-dive reposted to Mirror + Hackernoon.  
  * Reddit posts in relevant builder community groups.  
  * Indie-dev teaser to spark conversation in builder circles.  

**Acquisition:** Convert interest into wait-list & segment qualified testers.  
  * Discord & Telegram entry gates via single-page wait-list that collect wallet addresses, persona (“dev”, "memer", “yield chaser”, etc).  
  * Referral loop: Every sign-up gets 5 invite codes & XP points. Every successful referral earns XP points multiplier.  

**Activation (Private Beta):** Turn testers into engaged product advocates.  
  * 100+ testers admitted in staggered cohorts.  
  * Gamified quests and Notion bug/idea board.  
    1. (“Execute your first cross-chain transfer”, “Execute your first DOT→USDC swap”, “Perform your first farm” etc.). Every quest completed earns XP points.  
    2. Each accepted issue earns “Intent Pioneer” NFT (future airdrop whitelisting).  
  * Loom videos from founders showcasing new fixes and tips.  

**Advocacy:** Leverage satisfied testers to feed the top of funnel for public launch.  
  * Social proof toolkit: Auto-generated quote cards “I swapped DOT to GLMR in 7 s – @dBOOK_handle.  
  * Beta-to-public referral: Each successful beta user receives 10 public-launch invite links that count toward future token airdrop multipliers.  

**Public Launch:** Ensure credibility & readiness.  
  * Create marketing material for X, reddit, and other social medial platforms leveraging the social proofs, positive community feedback for launch. Publish Builders Log #1 summarising beta metrics & shipped fixes.  
  * Target user-base of 1000 members.  


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

The team has already developed a WebApp Proof of Concept for the EVM ecosystem (with support for native and ERC20 asset transfers, swaps, user analytics).  
Demo link: https://docsend.com/v/jrb5g/intelligencedemo  
Whitepaper Link: https://whitepaper.dbook.network/  

## 📅 Development Roadmap
### Summary
A dedicated team of three full-time engineers will deliver the milestone modules in 45 days. Every feature will be accessible via a WebApp demo (public test link included). The entire codebase—complete with unit tests, PoC examples, and comprehensive docs—will be released as open source under the Apache 2.0 license.

**Important notes:**

- Each milestone is capped at **$5,000 USD**
- Milestones must be delivered within **3 months** of approval
- The maximum grant amount is **$10,000 USD** per application (up to **$15,000 USD** per project in exceptional cases)
- You will only receive payment after successful milestone delivery

### Overview

- **Estimated Duration:** Duration of the whole project (maximum 3 months):  
45 days
- **Full-Time Equivalent (FTE):** Average number of full-time employees working on the project:  
3
- **Total Costs:** Requested amount in USD for the whole project (maximum $10,000 USD):  
Total Cost = $9000  

> Note that deliverables 0a to 0d are mandatory. Please adapt their specification to your project.

| Number | Deliverable                       | Specification                                                                                                                                                                                                                            |
| -----: | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                           | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                     |
|    0b. | Documentation                     | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a wallet service can integrate the dBOOK's intelligence engine and it's functionalitites.                                           |
|    0c. | Testing and Testing Guide         | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                          |
|    0d. | Article                           | We will publish an **article** that explains what was done/achieved as part of the grant.                                                                                                                                                |

### Milestone 1
* Estimated Time = 10 days
* Cost = $2500  

| Number | Deliverable                       | Specification                                                                                                                                                                                                                            |
| -----: | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     1a. | Intent Pallet                    | We will publish a substrate intent pallet that maps parachain calls to the dBOOK intent schema. |
|     1b. | Query on-chain statistics        | View and query user-wallet and blockchain level analytics. (Eg., “I want to view my portfolio”, “What is the current gas fee?”). |
|     1c. | Native asset transfer            | In-app demonstration of native asset transfers on parachains like AssetHub, Acala, Astar, etc. (Eg. “I want to send 10 DOT to my friend Harry”). |

### Milestone 2
* Estimated Time = 21 days
* Cost = $3500  

| Number | Deliverable                       | Specification                                                                                                                                                                                                                            |
| -----: | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     2a. | Protocol Bindings & Execution    | We will build binding adapters for top protocols like Hydration, Bifrost, Arthswap, Moonwell, Gamma, etc., in the categories Swap, Bridge, Lending & Borrowing, Staking. This will expose their functionality as intent-callable endpoints to the settlement engine. Successful demonstration via the in-app chat interface to be delivered. (Eg., “I want to get atleast 10% yield on Bifrost”, “Convert 10 DOT to GLMR ”). |
|     2b. | Advanced  analytics              | View and query protocol level statistics. (Eg., “What are my current LP positions?”, “How much yield I’ve earned on Bifrost?”, etc.) |

### Milestone 3
* Estimated Time = 14 days
* Cost = $3000  

| Number | Deliverable                       | Specification                                                                                                                                                                                                                            |
| -----: | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     3a. | Recommendation engine            | We will publish a rule-based tags model that delivers intent-mapped protocol suggestions and live interaction through in-app conversation. |
|     3b. | Wallet SDK                       | We will publish @dbook/sdk (TypeScript) shipping a plug-and-play React chat panel so any polkadot{.js}-compatible wallet can translate plain-language requests into a signed Intent JSON.  |


### Cost Breakdown

Finishing the three milestones will take roughly 140 hours. With a budget of $9,000, that comes to an hourly rate of about $64.20.


## 🔮 Future Plans

Please include:

- How you intend to continue development after the Fast-Grant  
During the fast-grant program, we wiill continuously collect feedback to improve our offerings. 
Post fast-grant,  
a. **MVP feature Build-out:** Strengthen protocol directory by adding categories like Marketplaces, Social, Tokenization, On-ramp, Other Agentic Workflows, etc., to broaden user-segments. Develop module for risk engine to abort any path exceeding user-defined thresholds, memory optimisation for the Intelligence Engine.  
b. **GTM & Community Engagement:** Launch a private beta access program. Utilise these referrals for organic growth on X to prepare for public launch. Leverage leaderboard competitions, KOLs, and indie developers to create good word of mouth and target an active userbase of 1000.  

- Any plans for seeking additional funding (other grants, VC funding, etc.):  
We intend to raise additional capital through venture funding and complementary grant opportunities.  
Post fast-grant, we will apply for W3F and other relevant grants, to completely build out the MVP and progress towards the GTM strategy.
- Your vision for the project's growth and impact in the Polkadot ecosystem:  
Post the MVP launch, our focus will be to make onboarding to Polkadot even more seamless.  

	a. **Unlock mainstream access.** Users on any chain will be able to discover and interact with Polkadot-native assets and protocols directly—no need to worry about bridges, wallets, or chain switching. We’ll enable this through multi-chain agentic flows, and solvers running on Polkadot that abstract away cross-chain complexity. We also plan to apply for follow-on grant where Polkadot DAO funds the solver. In this setup, users pay on their native chain (e.g., Ethereum), and the solver executes the transaction on Polkadot, making cross-chain interactions feel native.  
	b. **Super-charge protocol growth.** Any parachain that ships the dBOOK pallet is automatically surfaced—ranked and risk-scored—in every integrated wallet, turning Polkadot’s “long tail” of dApps into a curated storefront and boosting TVL and active addresses across the Relay Chain.  
	c. **Ecosystem flywheel.** More users → more intents → more fees and data → better AI recommendations → higher protocol conversion—creating a self-reinforcing loop that elevates Polkadot from a technically superior network to the most user-friendly multichain hub.  

## ℹ️ Additional Information

Here you can add any additional information that you think is relevant to this application, such as:

- Work you have already done  
Our team has already developed a PoC for the EVM ecosystem.  
Demo link: https://docsend.com/v/jrb5g/intelligencedemo
- If there are any other teams who have already contributed to the project
- Other funding you may have applied for

