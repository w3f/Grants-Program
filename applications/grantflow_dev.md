# 📝 GrantFlow.dev

## 🌟 Project Overview

- **Tagline:** Streamlining Polkadot bounty grants from submission to payout in one unified web3 platform.
- **Brief Description:** GrantFlow.dev is an all-in-one platform that consolidates grant submissions, reviews, approvals, and payouts for Polkadot bounty programs. It replaces scattered channels (e.g., GitHub, Discord, Google Docs) with structured forms, real-time tracking, collaborative dashboards, integrated chat features for committees and grantees, and smart contract integrations for efficient, transparent processes.
- **Relation to Polkadot:** The platform integrates directly with Polkadot's ecosystem by handling chain integrations via multi-sig wallets for approvals and authentications, bounty precompiles for automatic payouts, and web3-based authentication. It supports committees like Fast-Grants, UX Bounty, OG Rust, Infrastructure Builders, and DeFi Infrastructure, enhancing bounty management on Polkadot/Substrate chains.
- **Why Interested:** As a developer passionate about web3 efficiency, I built the POC during a hackathon and see huge potential to reduce administrative burdens in Polkadot's grant ecosystem, making it easier for teams to contribute and committees to operate effectively.
- (Optional) **1-min Video Pitch:** [Link to video] (Note: This can be added later; currently unavailable in draft.)

### 🔍 Project Details

- **Technology Stack:** Next.js 15 (TypeScript), Vercel AI SDK for optional AI tasks (e.g., initial feedback, codebase guidance), Drizzle ORM for TypeScript-first database schema, PostgreSQL (Supabase) for storage, Octokit.js for GitHub integration (reading proposals, commenting via GitHub App), and web3 libraries for Polkadot multi-sig, chain integrations, and wallet authentication.
- **Documentation of Core Components:** Core architecture includes: (1) Submission forms with cache-based drafts and web3 wallet verification; (2) Dashboard for curators with voting systems, on-chain multi-sig approvals, and integrated chat for committees/grantees; (3) automatic payouts on granted milestones through multisig; (4) Public views for transparency (e.g., submission status, voting history). Protocols ensure immutable records on-chain, with Polkadot chain handling for all multisig and auth processes.
- **POC/MVP or Prior Work:** A hackathon POC exists with basic features: account creation/management, grant application forms, approvals, and milestone submissions (currently buggy). Link: https://github.com/MbBrainz/grantflow-dev.
- **Mockups/Designs of UI Components:** UI includes a unified dashboard for submissions/reviews, structured forms for deliverables (e.g., code uploads, repo links), real-time status trackers, and integrated chat interfaces for committees and grantees. Screenshots are provided here: https://drive.google.com/drive/folders/1H0EpDFICjO5n5ACsVO_tvKXcZOxniEsS?usp=drive_link
- **Data Models/API Specifications:** Data models (via Drizzle ORM) include schemas for grants (exec summary, milestones, wallets), submissions (proof files, repo links, states like "awaiting review"), approvals (votes, multi-sig tx), and chat logs. APIs: REST endpoints for form submissions (integrating GitHub PRs), web3 auth/multisig chain integrations, on-chain queries for status/payouts, and real-time chat endpoints.
- **What It's Not:** The platform will not handle non-Polkadot chains initially, nor will it provide full AI automation of decisions (AI is optional for assistance only). It focuses on Polkadot-specific integrations via multisig and auth.

### 🧩 Ecosystem Fit

- **Fit into Ecosystem:** GrantFlow.dev fits as a tooling layer for Polkadot's bounty programs, integrating with existing repos (e.g., Fast-Grants apply/delivery) and on-chain mechanisms to streamline workflows for committees and grantees.
- **Target Audience:** Polkadot bounty committees (e.g., Fast-Grants, UX Bounty) as curators, and grantees (teams/builders) submitting work.
- **Needs Met:** It addresses inefficiencies in tracking submissions, coordinating reviews, and processing payouts, reducing manual work, errors in milestone assessments (e.g., evaluating code contributions), and delays. Benefits include faster reviews, transparent processes, instant on-chain payouts via Polkadot multisig integrations, and integrated chat for seamless communication, saving time for committees.
- **Similar Projects:** Similar tools exist like bounties.usepapi.app (listing active bounties) or general grant platforms, as well as earn.superteam.fun in EVM and Solana ecosystems, but none provide end-to-end submission-to-payout with on-chain multi-sig, AI-assisted reviews, and integrated chat tailored to Polkadot. Our project differs by focusing on unified, web3-native flows with chat features, emphasizing transparency, committee onboarding, and specific optimizations for Polkadot bounty committees' grant processes. If none exist yet in Polkadot, it's likely due to the niche focus on its fragmented bounty workflows.

## 👥 Team

- **Team Name:** GrantFlow Dev (Solo Developer)
- **Contact Name:** Maurits Bos
- **Contact Email:** [maurits.bos@gmail.com](mailto:maurits.bos@gmail.com)
- **Website:** [https://grantflow.dev](https://grantflow.dev/)

### Team members

Please list the legal name of all grant beneficiaries. Solo developers (1-person teams) are eligible for funding.

- Maurits Bos (Solo developer and grant beneficiary)

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/mhwbos

### Team Code Repos

- https://github.com/MbBrainz/grantflow-dev

Please also provide the GitHub accounts of all team members:

- https://github.com/MbBrainz

### Team's experience


After my Masters in Computational Science I directly started working in web3 full time. First as smart-contract dev (CosmWasm, Rust), then as team lead for fortytwo.money (currently discontinued). Those last 3 years I've worked with all major web frameworks for web2, Next.js, shadcn, PostgreSQL etc, and for web3, ethers.js, wagmi, CosmJS, JSON-RPC, etc. The last iteration of FortyTwo.money, 42agents.ai, was a SaaS platform to manage the configuration of AI customer support, operative in Discord. This platform was fully developed by my colleague Dylan Brudo and me.

Alongside fortytwo, I've been working on a Telegram application called [MissionMate](https://missionmate.team), which is a Telegram community engagement app that acts like a virtual coach inside your Telegram group chats. It started as something fun, but I'm now commercializing it. I don't have experience with Polkadot specifically, but I'm looking forward to gaining that during this project.


## 📊 Development Status



Development has started with a hackathon POC implementing core features: account creation, grant forms, approvals, and milestone submissions (buggy but functional). Code link: https://github.com/MbBrainz/grantflow-dev. Prior research includes analyzing Polkadot grant processes (e.g., Web3 Foundation docs, Fast-Grants repo, interviews with committee members like sachalansky) and tech explorations for GitHub/Polkadot integrations, including multisig and auth.

## 📅 Development Roadmap

This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, please describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality.

**Important notes:**
- Each milestone is capped at **$5,000 USD**
- Milestones must be delivered within **3 months** of approval
- The maximum grant amount is **$10,000 USD** per application (up to **$15,000 USD** per project in exceptional cases)
- You will only receive payment after successful milestone delivery

### Overview

- **Estimated Duration:** 2 months (within 3-month cap)
- **Full-Time Equivalent (FTE):** 0.5 FTE (part-time availability)
- **Total Costs:** $10,000 USD (full payout in USD; no DOT lockup requested)

> Note that deliverables 0a to 0d are mandatory. Please adapt their specification to your project.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline code documentation and a basic tutorial explaining how users (grantees/curators) can submit forms, review submissions, approve milestones, trigger payouts via the dashboard, and use integrated chat features for communication. |
| 0c. | Testing and Testing Guide | Core functions (e.g., submissions, approvals, payouts, chat integrations) will be covered by unit/integration tests using Jest. The guide will describe running tests via npm commands |
| 0d. | Article | We will publish an article on Medium or similar explaining the platform's development, features (including chat and Polkadot integrations), and impact on Polkadot bounties. |
| 1. | Polish POC and Feedback Integration | Refine existing POC features (bug fixes, usability improvements for accounts, forms, approvals). Collect and integrate feedback from committees via forms. Deliverable: Updated codebase with improved UX and schema revisions. Verification: Demo access and committee feedback logs. |
| 2. | Full-Functioning Platform excl. On-chain mechanism | Full grant cycles should now be possible, from proposal review to multiple milestone payouts. |
| 3. | Onboarding, Multi-Sig Integration, and Chat Features  | Build onboarding flow, demo experience, integrate Polkadot multi-sig for approvals/payouts and chain auth, add chat features for committees and grantees, and onboard 5 committees. Deliverable: Functional dashboard with submission states, on-chain approvals, and chat. Verification: Test payouts/auth on testnet, chat functionality, and committee onboarding confirmation. |
| 4. | Final Enhancements and Deployment.  | Add flexible enhancements, full testing, and deployment. Deliverable: Live platform with public transparency features and all integrations. Verification: End-to-end testing, usage guide, and committee trials. |

### 💰 Budget Breakdown

Please provide a breakdown of your budget by milestone:

| Milestone | Deliverables | Cost (USD) | Estimated Completion |
| --- | --- | --- | --- |
| 1 | 0a-0d + Milestone 1 (Polish POC and Feedback) + Milestone 2 (Full platform excl. On-chain) | $5,000 | 3 weeks |
| 2 | Milestone 3 (Multi-Sig, Onboarding, and Chat) and 4, Final Enhancement | $5,000 | 3 weeks (cumulative: 1.5 months) |
| **Total** |  | **$10,000** | **1-2 months** |

Funding covers: 120 hours of development at ~$83/hour (part-time solo work, including research, coding, testing, chat implementation, Polkadot integrations, and committee interactions). All payments requested in full USD, without DOT lockup.

## 🔮 Future Plans



- **Continuation After Fast-Grant:** Maintain the platform with bug fixes and updates for at least 6 months, evolving based on user feedback, including chat and integration enhancements.
- **Additional Funding Plans:** Explore Web3 Foundation grants for expansions, potential SaaS business model, or community funding via DAOs.
- **Vision for Growth:** Aim for widespread adoption by all Polkadot committees, expanding to more ecosystems, and turning it into a key tool for efficient, transparent web3 grants with robust chat and Polkadot chain features, potentially as a SaaS or open-source project under Web3 Foundation.

## ℹ️ Additional Information


- **Work Already Done:** Hackathon POC with core features; initial research on Polkadot grant processes.
- **Other Contributors:** None currently; open to collaborations.
- **Other Funding:** No other applications yet; this is the first step toward sustainable growth. The platform's benefits for Polkadot committees include reduced review times, error-free assessments, seamless chat communication, and seamless on-chain payouts via multisig integrations, fostering more ecosystem contributions. Note: Requesting full $10,000 USD payout without DOT lockup, based on project needs and alignment with grant guidelines (open to committee feedback on feasibility).
