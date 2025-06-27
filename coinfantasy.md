# CoinFantasy

- **Team Name:** CoinFantasy Inc. 
- **Payment Details:**
  - **DOT**: 14owCoW5SNApxbdwGsBKjcfnu7u9z2D6saquGnNQyML9Ukk4                   
  - **Payment**: In case of payment in **USDC**, please provide a Polkadot AssetHub address and the currency (e.g. 15oF4... (USDC)). In the case of **fiat** payment, please share your bank account privately with grants@web3.foundation via your contact email (see below) and list here the date and time of your email (e.g. Fiat 24.12.1971, 11:59). 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1, 2 or 3

> [!IMPORTANT]
> *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:
CoinFantasy is the world’s first freemium fantasy sports platform that transforms live crypto markets into zero-risk, competitive gameplay. By wrapping real-time token performance in familiar fantasy-sports mechanics—drafts, lineups, leaderboards—we onboard millions of sports fans into Web3 through play, education, and community.

### Overview
CoinFantasy: Where Crypto Meets Fantasy Sports. CoinFantasy is a pioneering gamified fantasy sports platform that transforms real-time crypto market data into competitive gameplay, 
providing an engaging gateway for users to experience cryptocurrency in a familiar format. The platform is designed to integrate seamlessly with Substrate-based networks like Polkadot and Kusama, 
leveraging decentralized technology to ensure scalability, security, and transparency. Our team is driven by the passion to reduce the barriers to crypto adoption by combining the thrill of fantasy sports with innovative digital asset management, ultimately fostering greater crypto engagement and financial literacy among a broader audience.

### Project Details

Overview

CoinFantasy is the world’s first fantasy sports-style platform powered by real-time cryptocurrency market data. Instead of drafting athletes, users draft crypto assets (coins/tokens) into fantasy teams and compete based on live financial metrics such as price volatility, Sharpe ratio, momentum, and hourly delta trends.

CoinFantasy transforms passive crypto observation into an engaging, gamified experience — similar in spirit to fantasy football, but deeply tied to the mechanics of DeFi and trading behaviors. The platform operates across recurring match rounds, with auto-scheduling, auto-scoring, and AI-generated match narratives for maximum user engagement.

Architecture

Frontend: React + Tailwind + Shadcn + Framer Motion for responsive UI/UX.
Backend: Node.js + Express with PostgreSQL via Prisma ORM.
Scheduler: pgBoss for background job orchestration (match timing, scoring intervals, story generation).
Scoring Engine: Isolated microservice (Dockerized) that maps coin performance to fantasy stats per position (QB, RB, WR, etc.).
On-chain ambitions: While MVP is off-chain, future milestones will include Web3 integration for scoring proofs, rewards issuance, and league registry using Substrate-based chains or bridges.

Problem It Solves

CoinFantasy is created to solve the The Three Lows of crypto, low penetration, low engagement, and low retention. 
Despite high crypto awareness, crypto adoption in the general public remains low (~15% in the U.S.). CoinFantasy offers a fun, zero-risk, game-driven gateway into crypto that’s easier to onboard and more engaging than trading apps or DeFi dashboards.


### Ecosystem Fit

CoinFantasy leverages the robust, scalable, and interoperable environment of the Polkadot/Substrate/Kusama ecosystem to introduce a revolutionary gamified fantasy sports platform 
that blends real-time crypto market dynamics with competitive gameplay. Serving as a dApp tailored for both fantasy sports enthusiasts and crypto adopters, 
our target audience includes end-users who are fans of fantasy sports as well as developers and designers working within decentralized gaming and financial applications. 
CoinFantasy addresses the pressing need to lower crypto adoption barriers—characterized by high complexity, low engagement, 
and poor retention—by providing a familiar and educational gateway, a need underscored by various market analyses, forum discussions, and academic insights. 
Although there are other blockchain gaming and DeFi projects in the ecosystem, none merge the appeal of fantasy sports with crypto trading in such an accessible way, 
making our approach unique. Additionally, while similar initiatives exist in related ecosystems, our platform’s distinctive integration of real-time market data with a user-friendly fantasy format,
built on Polkadot’s low-fee, cross-chain capabilities, sets it apart as a pioneering solution in the space.

## Team :busts_in_silhouette:


### Team members

William Wang 

### Contact

- **Contact Name:** William Wang
- **Contact Email:** wwang@coinfantasy.fun
- **Website:** https://coinfantasy.fun

### Legal Structure

- **Registered Address:** 10-50 Jackson, Long Island City, NY 11101
- **Registered Legal Entity:** CoinFantasy Inc.

### Team's experience
William Wang
Previously CEO and Co-founder
Satoshi.Art (Montreal, Canada & New York City, USA) 
Premium NFT platform co-founded with Waka Flocka 
Successfully launched one of the biggest phygital NFT projects collaborating with grammy winning rapper Lil Durk

Bitchain Exchange (Jersey City, USA)
World's fastest crypto exchange with 3.5m tps and latency <10μs
A fully regulated, fully compliant crypto-currency exchange targeting institution market
Co-founded with formal chief architect and technical lead of NYSE (Pillar) trading system
Successfully raised $2M seed investment from one of the largest Crypto mining pool in the world 

### Team Code Repos

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/coinfantasy365

### Team LinkedIn Profiles (if available)
N/A

## Development Status :open_book:

public beta live at https://coinfantasy.fun

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2 (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** 30000 USD
- **DOT %:** 100%

### Milestone 1 — Core Game Engine (Fantasy League + Draft System)

- **Estimated duration:** 1 month  
- **FTE:** 2  
- **Costs:** 10,000 USD

| Number  | Deliverable           | Specification                                                                                                         |
| -------:| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License               | MIT                                                                                                                   |
| **0b.** | Documentation         | Inline code docs and a beginner tutorial explaining how to start a mock fantasy league with the API.                  |
| **0c.** | Testing & Test Guide  | ≥ 90% unit-test coverage on core game logic: team creation, league joining, draft logic. Includes setup instructions. |
| **0d.** | Docker                | Dockerfile + docker-compose to spin up the game engine with DB and API.                                               |
| **1.**  | League Engine         | Backend service (TypeScript, Node.js) supporting league creation, round-robin scheduling, user management, team slots. |
| **2.**  | Snake Draft Module    | Draft logic with randomized order and stateful progression; stores pick history and rosters in PostgreSQL.            |
| **3.**  | REST API              | Endpoints for creating leagues, joining teams, and driving the draft. Swagger/OpenAPI docs included.                 |

### Milestone 2 Scoring Engine & Match Simulation

- **Estimated Duration:** 1 month  
- **FTE:** 2  
- **Costs:** 10,000 USD  

| Number  | Deliverable              | Specification                                                                                                             |
| ------: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                  | MIT                                                                                                                       |
| **0b.** | Documentation            | Scoring engine setup guide + architecture diagram.                                                                        |
| **0c.** | Testing and Test Guide   | Full test coverage for scoring logic functions: volatility, price change, Sharpe ratio, momentum.                         |
| **0d.** | Docker                   | Standalone container for scoring engine with mocked market data.                                                          |
| **1.**  | Scoring Engine           | TypeScript service that computes match results using proprietary scoring algorithm. Listens for match-start events via PG Boss. |
| **2.**  | Match Cycle Simulation   | Auto-match flow runs every 3 hours, pulls latest mock crypto prices, and processes team scores.                             |
| **3.**  | Stats Recording          | Writes match results and individual coin performance into a persistent database. Prepares for Polkadot integration.       |

### Milestone 3 — Polkadot Integration + Frontend Dashboard

- **Estimated Duration:** 1 month  
- **FTE:** 2  
- **Costs:** 10,000 USD  

| Number  | Deliverable                 | Specification                                                                                                                                                |
| -------:| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0a.** | License                     | MIT                                                                                                                                                          |
| **0b.** | Documentation               | Docs on interacting with the chain + user guide for the app                                                                                                 |
| **0c.** | Testing & Test Guide        | End-to-end tests covering chain interaction and frontend UI                                                                                                  |
| **0d.** | Docker                      | Full-stack Docker bundle to launch backend + frontend + scoring engine                                                                                       |
| **1.**  | ink! Smart Contract Stub    | Contract to record match hashes, metadata, and checksums—lays groundwork for token rewards                                                                   |
| **2.**  | React Frontend              | Lightweight React + Tailwind UI showing league lobby, teams, and match stats                                                                                 |
| **3.**  | Chain Submission Script     | Service using Polkadot.js API to submit match results on-chain                                                                                               |
| **4.**  | Deployment                  | Deploy contracts and frontend to Polkadot mainnet                                                                                                           |
| **0e.** | Article                     | Publish a DevPost blog titled “Turning Crypto Markets into Fantasy Sports: Building on Polkadot with CoinFantasy,” highlighting architecture & public benefit |





## Future Plans

CoinFantasy has already launched its public beta and continues to evolve rapidly. After the completion of the grant milestones, our next development priorities include:

Full On-Chain Match Verification
Extend our scoring and match results to be fully verifiable and stored on-chain, using Polkadot parachain infrastructure or a custom Substrate chain.

Decentralized League Governance
Enable DAO-style governance over custom league creation, rules, and scoring parameters through smart contracts and on-chain voting.

Interoperability Across Chains
Expand support for multiple ecosystems and assets through Polkadot’s cross-chain messaging (XCMP) and bridge protocols.

Builder Tools & SDKs
Open up CoinFantasy’s engine and match framework as an SDK so other projects can build games and simulations on top of our infrastructure.

Community Growth via Hackathons & Partnerships
Partner with Substrate developers, host community tournaments, and run integrations with other gaming or DeFi projects to drive ecosystem adoption.

Academic Collaboration
Work with university labs and crypto researchers to validate the statistical models and scoring algorithms powering the fantasy engine.


We also plan to apply to other ecosystem grants and VCs to support scaling. Once we reach product-market fit, we intend to raise external funding to accelerate mass adoption.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](https://grants.web3.foundation/docs/referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDC))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
