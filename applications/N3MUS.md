# N3MUS is to game studios what Shopify is to e-commerce, a full-stack tournament platform to grow your audience, reward them, and keep them playing.
- **Team Name:** N3MUS
- **Payment Details:**
    - **DOT**: 50%
    - **Payment**: 13dePGJmM3SDMhndSsoAEV1V43dXD8Vtv4p2qShaP3sd9S5M
    - Level: 3
    - Total Cost: $200.000

## Project Overview
### Overview
- **Tagline:** is the go-to gamer acquisition platform, powering high-performing on-chain tournaments that drive real engagement. We help studios reach thousands of real players with a plug-and-play solution that delivers measurable impact fast.
- **Description:**
N3MUS is a Web3-native tournament platform designed to integrate directly with Polkadot-native and Ecosystem games. It allows games and studios to run interactive, reward-based tournaments where players complete in-game and social tasks to climb leaderboards and earn rewards.
By leveraging Polkadot's infrastructure, N3MUS offers an interoperable, scalable, and secure environment to execute and verify tournament results on-chain.

- **🔥 Traction (March 2025):**

    - 108,000+ Gameplays (109% MoM Growth)
    - 30 Tournaments | 6,750+ Players
    - Responsible for 6,300+ Gameplay Hours
    - Partnered with Flamengo (48M fans) | launching on-chain CS2 tournaments
    - Expanding to pro esports teams & top Web2 titles

Socials:

    -    Twitter: https://x.com/n3musfdn
    -    LinkedIn: https://www.linkedin.com/company/n3mus
    -    Telegram: https://t.me/n3muschat

- **Relation to Polkadot/Substrate:**
N3MUS is already live on Moonbeam, where the platform and participating games account for 8%-12% of all Moonbeam daily network traffic, with 109% month-over-month growth. As we expand deeper into the Polkadot ecosystem, we will leverage XCM and parachain integrations to manage tournament creation, reward distribution, and result publishing in a transparent and verifiable way, while respecting the technical limitations and roles of each parachain.
Our goal is to support both Polkadot-native games and broader ecosystem games by offering true cross-parachain interoperability. Game studios will be provided with an SDK or scripts to integrate N3MUS into their existing stack in under 4 hours.

- **What studios on Moonbeam are currently saying about N3MUS**:
    - Studios call it “the N3MUS effect.” One said: “Our game crashed from the number of gameplays, it was wild.” Another: “Integration was super easy, we were live in under an hour.” We’ve helped games go from zero to 10,000+ gameplays in just one week. The games include; Pinkdrop, The Great Escape, WeGainst, Data2073, Zoombies and we are onboarding several more games within the ecosystem (FlappyWud, Chess on Chain, Nitro Nations) and a few games from outside the ecosystem.

    ⚠️ **We are applying for a grant where 50% of the funding will be directly allocated to Community Incentives, directly growing the ecosystem and incentivizing activity across games and parachains on Polkadot.**

 - **Why Polkadot:**
We selected Polkadot for its modular scalability, low-latency transaction finality, and vibrant developer community. Its strong focus on security and interoperability makes it the ideal foundation for building a competitive gaming layer across parachains. With the growing presence of gaming projects like Mythical Games and others, Polkadot offers the infrastructure and community needed to support scalable, cross-chain gaming experiences.
We're also aligning with Distractive on the Q2 ecosystem incentives focused on gaming, perfectly timed to maximize user acquisition and engagement across all participating games in the Polkadot ecosystem.

The upcoming PolkaVM/Solidity competiability on the AssetHub brings us a great oppertunity to deploy our smart contracts there and bring the traction directly to Polkadot. We will fully open source (Apache license) the whole integration stack required to run on-chain tournaments including the smart contracts, unity/unreal SDKs, scripts etc!


### Project Details

- **UI Components:**
  - Tournament Leaderboard UI
  - Game Mission (Quest) Tracker
  - On-chain Score Verifier Modal
  - Studio Dashboard for Tournament Setup
  - Game Publishing

- **Data Models / API Specs:**
    - Tournament entity (game_id, start_time, end_time, reward_pool, quest types)
    - PlayerStats (wallet, game_identifier, points, bonus, leaderboard_score)
    - Result contract: store leaderboard ID, game identifier, score, bonus, total

- **Tech Stack:**
    - Frontend: React.js + Tailwind
    - Backend: Node.js, PostgreSQL
    - Blockchain: Currently EVM, live on Moonbeam. We want to expand to Wasm (ink!)
    - Infra: Azure

- **Documentation:**
    - https://n3mus.gitbook.io/docs
    - https://github.com/N3mus/ScoreToChain_Unity/tree/Scoresv2
    - Full SDK / Script and integration guides will be updated along the way
- **PoC/MVP:**
    - https://hub.n3mus.com
    - https://docs.n3mus.com/HjY2PN9J4J
- **Out of Scope:**
    - No new token or tokenomics
    - No business/marketing expenses included
### Ecosystem Fit
- **Fit into Polkadot Ecosystem:**

N3MUS is a layer for gamified engagement across Polkadot ecosystem-native games. We are bridging community interaction, competitive mechanics, and transparent scorekeeping into one stack. We are already collaborating with Moonbeam, DotPlay, Distractive and several other parties within the ecosystem who have a focus on gaming. Next to that we are running tournaments with the following games within the ecosystem:
  - Data2073 - https://hub.n3mus.com/games/data2073
  - Olderfall - https://hub.n3mus.com/games/olderfall
  - Pinkdrop - https://hub.n3mus.com/games/pink-drop
  - WeGainst - https://hub.n3mus.com/games/against-nouns
  - Zoombies - https://hub.n3mus.com/games/bonez
  - The Great Escape - https://hub.n3mus.com/games/the-great-escape

We are currently in planning stages with the following games:

- Nitro Nation World Tour - https://hub.n3mus.com/games/nitro-nation-world-tour  
- Flappywud – https://hub.n3mus.com/games/flappywud
- Chess on Chain (not listed yet)

- **Target Audience:**
    - Game studios building on Polkadot;
    - Web2&3 games and gamers;
    - Players from within the ecosystem;
    - Players from outside the ecosystem;
    - DAO developers and gaming dApps.
- **Needs Being Met:**
    - Lack of cross-game (&ecosystem) tournament infrastructure;
    - Transparent, trustless tournament results;
    - Engaging quests and rewards system for actual gamers (not just point/airdrop farmers).

- **Evidence:**
    - Active case study on Moonbeam with 10K+ players and 100K+ gameplays;
    - Twitter & Telegram feedback on need for transparency and engagement;
    - Internal usage data with >60% player return rate;
    - All our participants and tournament data is fully on chain;
    - Proven track record: from zero to 10K transactions in a single week for a new game tournament.

- **Similar Projects:**
    
No fully integrated tournament platform currently exists across the Substrate/Polkadot ecosystem. Competitors in other ecosystems (e.g., Galxe Quests, Layer3, Airlyft) focus primarily on social or wallet-based quests, offering limited gameplay-based engagement and lacking any form of on-chain score verification.

In contrast, N3MUS combines a robust questing and mission system directly tied to a dynamic leaderboard, ensuring only real in-game actions count toward rewards. This approach eliminates exploitation by airdrop hunters or bot-driven activity, as participation requires genuine gameplay.
    
By onboarding actual gamers and verifying real activity, N3MUS delivers sustainable, high-quality growth for games in the ecosystem.
- **Why Now & Why Here:**

Polkadot’s growth in gaming including DotPlay, LAOS, Ajuna, Moonbeam, and Mythical Games has created a ripe opportunity for player-centric infrastructure that connects gameplay, identity, and rewards across the ecosystem. N3MUS fills that gap by offering the tools and tournament framework needed to turn fragmented gaming activity into unified, on-chain engagement.
With the upcoming Q2 Polkadot gaming incentives, we’re perfectly positioned to activate large-scale tournaments and quest-based campaigns that drive real player acquisition and retention across parachains. Rather than relying on passive exposure, N3MUS creates active engagement loops that reward players for participating in ecosystem games, completing in-game and on-chain objectives, and climbing cross-game leaderboards. Gaming is becoming a big thing within Polkadot with already a dozen of popular games, we are here to grow the number of players and games.
We will also leveraging Polkadots partnership with HEROIC and their AimDots CS2 map, transforming it from a static Polkadot-branded experience into an actual on-chain onboarding funnel. Through CS2 tournaments powered by N3MUS. 

- ### Team Members
    - Neal Peters (Founder & CEO (+Tech Lead)) https://www.linkedin.com/in/nealpeters/
    - Marco Colaco (Founder & COO) https://www.linkedin.com/in/marco-colaco/
    - +3 FTE
- ### Contact
    - **Contact Name:** Neal Peters
    - **Contact Email:** neal@n3mus.com
    - **Website:** https://n3mus.com
- ### Legal Structure
    - **Registered Address:** Sea Meadow House PO Box 116 Road Town Tortola VG1110 British Virgin Islands
    - **Registered Legal Entity:** JR-Studio Inc.
 
- ### Team’s Experience
    - Neal has 20+ years in IT, DevOps, and sales, securing over $400M in contracts, with 7 years of expertise in Web3.
    - Marco brings over 7 years of experience in gaming and Web3, having previously served as marketing lead in the gaming industry.

- ### Team Code Repos
    - https://github.com/n3mus/
- ###  LinkedIn Profiles
    - https://www.linkedin.com/in/nealpeters
    - https://www.linkedin.com/in/marco-colaco
- ## Development Status
    - **Live Platform:** https://hub.n3mus.com
    - **Docs:** https://n3mus.gitbook.io/docs


- ## Grant Request Overview – Polkadot
    - **Total Grant Requested:** $200,000
    - **Estimated Duration:** 6 months
    - **Full-Time Equivalent (FTE):** 2-3
    - **Total Project Costs:** $200,000
    - **% in Dot:** 50%

## Milestone 1 – Q1-Q2 2025: Polkadot Integration & Launch ($20,000)

The USDC we receive from the grant will be fully allocated to the next milestone: running tournaments.  

This means the USDC will serve as the prize pool for these tournaments. Participating gamers will have the opportunity to win a share of the prize pool by playing and competing in games.
These tournaments provide marketing exposure for the featured games, incentivize new users to try them, and encourage deeper engagement from players.  
The vested DOT will be used to cover staffing, event management for Polkadot-specific initiatives (including social media and on-chain missions 100% focussed on Polkadot & Ecosystem), and infrastructure costs.

- **Estimated Duration:** 1-2 months
- **FTE:** 2

**Deliverables:**

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache2
| 0b. | Documentation | N3MUS provides both inline code documentation and basic tutorials: one for studios on how to integrate the tournament system, and one for users on how to participate in tournaments. |
| 0c. | Testing and Testing Guide | All code developed under this grant (e.g., integration with Polkadot AH) will be covered by comprehensive unit tests to ensure functionality and robustness. We will include detailed instructions on how to run these tests in the documentation.|
| 0d. | Docker | N3MUS provides a Dockerfile that sets up an API backend for fetching game scores. |
| 0e. | Article | N3MUS publishes articles, in collaboration with several Polkadot BD-related companies, highlighting the work completed under the grant, with a focus on integration and collaboration. |
| 1 | Onboarding | Onboard Polkadot as an "ORGANIZATION" within the N3MUS platform. |
| 2 | Development | N3MUS Develops an open-source (Apache license) Docker container, including smart contracts that studios can implement to onboard their games into the tournament system. Making sure this will work on the Polkadot AssetHub, when it accepts smart contracts. |
| 3 | Initial Tournament Launch | Launch the first test tournament with the newly built docker and contracts with an on-chain leaderboard and rewards. |
| 4 | Game Integrations | Integrate at least three games from the Polkadot ecosystem into the tournament platform. |
| 5 | Tournaments Execution | N3MUS Hosts and manages 15 game tournaments within the Polkadot ecosystem. | |
| 6 | On-Chain and Social Missions (Quests) | Execute both on-chain and social media missions for each tournament. All missions will center around Polkadot, with Polkadot and the featured games as the primary focus across all content and posts. |

## Milestone 2 – Q2-Q3 2025: Growth Through Game Integrations ($60,000)
The USDC received from Milestone 1 will be entirely used to host tournaments featuring games within the Polkadot ecosystem.
Looking ahead, 100% of the USDC received in Milestone 2 will also be fully allocated toward hosting additional tournaments for Polkadot ecosystem games in Milestone 3.

The vested DOT will be used to cover staffing, event management for Polkadot-specific initiatives (including social media and on-chain missions 100% focussed on Polkadot & Ecosystem), and infrastructure costs.
 
- **Estimated Duration:** 3 months
- **FTE:** 2

**Deliverables:**
| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache2
| 0b. | Documentation | Based on the changes, N3MUS will keep the documentation updated and provides how to videos and guides for users. |
| 0c. | Testing and Testing Guide | All code developed under this grant (implement blockchain technology for hosting web2 game tournaments) will be covered by  comprehensive unit tests to ensure functionality and robustness. We will include detailed instructions on how to run these tests in the documentation. |
| 0d. | Docker | N3MUS provides a Dockerfile that sets up an API backend for integrating web2 games. |
| 0e. | Article | N3MUS publishes articles, in collaboration with several Polkadot BD-related companies, highlighting the work completed under the grant, with a focus on integration and collaboration. Ofcourse we will expand the number of articles as marketing incentives with the goal of onboarding more users and studios. We also want to include gaming nights and events |
| 1 | Integration |Integrate at least 5 additional games into the platform, with potential inclusion of high-profile titles such as those from Mythical Games |
| 2 | Ongoing tournaments | Host 20 tournaments (subject to prize pool availability). Prize pools will range from $250 to $2,000 per tournament, with an average of $500. Factors influencing prize pool size include game popularity, on-chain incentives provided by the game, and player participation levels |
| 3 | Metrics | Achieve over 200,000 tracked gameplays across all integrated games. All gameplay data will be verified on-chain and published in transparent reports |
| 4 | Web2 game onboarding | Collaborate with HEROIC (an existing Polkadot partner) to organize a CS2 tournament that leverages blockchain technology. We are already doing this with Flamengo (48M fans, the largest club in LatAm) and Moonbeam (https://x.com/flaesports/status/1906814609140432966). Our goal is to add real value to existing gaming partnerships by applying blockchain technology and onboarding users into the Polkadot ecosystem. Currently the partnership with HEROIC doesn't leverage Polkadot Technology |


## Milestone 3 – Q3-Q4 2025: Expansion and Ecosystem Onboarding ($60,000)
The USDC received from Milestone 2 will be entirely used to host tournaments featuring games within the Polkadot ecosystem.
Looking ahead, 100% of the USDC received in Milestone 3 will also be fully allocated toward hosting additional tournaments for Polkadot ecosystem games in Milestone 4.

The vested DOT will be used to cover staffing, event management for Polkadot-specific initiatives (including social media and on-chain missions 100% focussed on Polkadot & Ecosystem), and infrastructure costs.


- **Estimated Duration:** 3 months
- **FTE:** 3

**Deliverables:**
| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache2
| 0b. | Documentation | Based on the changes, N3MUS will keep the documentation updated and provides how to videos and guides for users. |
| 0c. | Testing and Testing Guide | All code developed under this grant (integration of Polkadot AssetHub Smart Contracts) will be covered by  comprehensive unit tests to ensure functionality and robustness. We will include detailed instructions on how to run these tests in the documentation. |
| 0d. | Docker | N3MUS provides a Dockerfile that sets up an API backend for integration into Polkadot AssetHub |
| 0e. | Article | N3MUS publishes articles, in collaboration with several Polkadot BD-related companies, highlighting the work completed under the grant, integration of Polkadot AssetHub with a focus on integration and collaboration. Ofcourse we will expand the number of articles as marketing incentives with the goal of onboarding more users and studios. We also want to include gaming nights and events |
| 1 | Integration | Integrate at least 5 Additional Games to the Polkadot Ecosytem (or AH directly) |
| 2 | Ongoing tournaments | Host 50 tournaments (subject to prize pool availability). Prize pools will range from $250 to $2,000 per tournament, with an average of $500. Factors influencing prize pool size include game popularity, on-chain incentives provided by the game, and player participation levels |
| 3 | High Impact Tournaments | Launch larger and high impact tournaments with custom campaigns (e.g., CS2, LoL mod, sponsored events) in collaboration with pro eSports companies like Flamengo. |
| 4 | Metrics | Achieve over 400,000 tracked gameplays across all integrated games. All gameplay data will be verified on-chain and published in transparent reports |
| 5 | Marketing | Collaborate with Polkadot BD companies for publications and gamer onboarding campaigns |
| 6 | Mid-Point Report | Publish Polkadot case study with developer feedback, metrics, and learnings |


## Milestone 4 – Q4 2025: Flagship Tournaments & Scaling ($60,000)

The USDC received from Milestone 3 will be entirely used to host tournaments featuring games within the Polkadot ecosystem.
Looking ahead, 100% of the USDC received in Milestone 4 will also be fully allocated toward hosting additional tournaments for Polkadot ecosystem games in coming months.

The vested DOT will be used to cover staffing, event management for Polkadot-specific initiatives (including social media and on-chain missions 100% focussed on Polkadot & Ecosystem), and infrastructure costs.

- **Estimated Duration:** 3 month
- **FTE:** 3

**Deliverables:**
| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache2
| 0b. | Documentation | Based on the changes, N3MUS will keep the documentation updated and provides how to videos and guides for users. |
| 0e. | Article | N3MUS publishes articles, in collaboration with several Polkadot BD-related companies, highlighting the work completed under the grant, integration of Polkadot AssetHub with a focus on integration and collaboration. Ofcourse we will expand the number of articles as marketing incentives with the goal of onboarding more users and studios. We also want to include gaming nights and events |
| 1 | Integration | Expand to 15+ Integrated games, ensuring ongoing ecosystem growth |
| 2 | Flagship Tournaments | Run 3 Flagship Tournaments (longer duration, higher attention, higher prize pool) with three high potential games |
| 3 | Ongoing tournaments | Host 50 tournaments (subject to prize pool availability). Prize pools will range from $250 to $2,000 per tournament, with an average of $500. Factors influencing prize pool size include game popularity, on-chain incentives provided by the game, and player participation levels |
| 4 | Final Ecosystem Report | Includes interviews, community feedback, and recommendations |
| 5 | Developer Roundtable | Engage game teams to shape future feature development |

When Milestone 4 is completed, we will use 100% of the USDC to continue with tournaments on Polkadot with a goal of running an additional 50 tournaments.



## Future Plans
- **Sustainability:**
After grant-funded growth, N3MUS will monetize via optional pro features for studios (analytics, premium quests). Free accessible tournaments remain core.
- **Enhancement:**
Enable DAO for sponsored tournaments, customizable scoring rules, and multi-chain syncing with Polkadot bridges.
- **Long-term Vision:**
Position Polkadot as the premier home for Web3 competitive gaming, with N3MUS as its community-powered tournament engine.
## Referral Program (optional)
- **Referrer:** N/A
- **Payment Address:** N/A
## Additional Information
**How did you hear about the Grants Program?**

    Through the Web3 Foundation Website and Polkadot Forum and we were encouraged by many people within the ecosystem!
**Additional Notes:**
- Twitter: https://twitter.com/n3musfdn
- Notion/Deck available on request
