# Fundation

- **Team Name:** Swen USA LLC
- **Payment Details:**
  - **DOT:** polkadot asset hub / Dot / 12F4tc8yuGc5pZsbbPNS4TEwpDr7td8rMvnVyPQFxQnskqTk
  - **Payment:** polkadot asset hub / USDC / 12F4tc8yuGc5pZsbbPNS4TEwpDr7td8rMvnVyPQFxQnskqTk 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1

## Project Overview :page_facing_up:

### Overview
**Tagline:** Build dApps Faster Than Ever. Accelerate Your Polkadot Projects with Fundation's polkadot-api Management, Robust Auth, and Modular Toolkit.

**Project Description:**  
**Fundation** is a modular, open-source framework that empowers developers to build decentralized applications (dApps) rapidly on the Polkadot ecosystem. It uses the **polkadot-api** to provide abstracted, reusable components for authentication, asset management, and UI, significantly reducing development time.

**Integration with Polkadot/Kusama:**  
The primary goal of Fundation is to simplify dApp development on top of Asset Hub and rollups, significantly reducing development time. It uses polkadot-api for seamless integration with the Polkadot and Substrate ecosystems, complementing backend tools by addressing front-end gaps.
![module-components](https://github.com/swenthebuilder/PapiNextjsBasic/blob/main/module-components.png)  
**Team's Motivation:**  
While building my first dApp on Polkadot, Stake2Build, over a year and a half ago, I realized how far behind the ecosystem was in front-end and web developer tooling. Although many improvements have been made since then, I believe this tool will still be of great benefit to the community by addressing these ongoing challenges, lowering entry barriers for indie devs, hackathon teams, and startups.


- What your project is *not* or will *not* provide or implement
  This funding covers the base module only. It provides fast full‑stack dApp scaffolding limited to:

  - Modular authentication (wallet, social, email/password, WebAuthn)
  - Blockchain connectivity and chain management via polkadot‑api
  - Reusable UI components and utilities to accelerate dApp development

  What this does NOT include:

  - Prebuilt showcase dApps, full application templates, or production end‑user apps
  - Application‑specific components, custom integrations, or business logic required to implement particular dApps
  - Hosting, third‑party paid services, or deployment/maintenance of end‑user applications

  In short: the deliverable is a developer‑focused toolkit to jumpstart dApp development. Teams will still need to build, adapt, and deploy their own complete applications on top of the base module; additional funding would be needed to deliver full showcase apps or bespoke integrations.

### Project Details

**Technology Stack:**  
- Core Stack: Next.js  
- UI: Tailwind CSS, shadcn/ui  
- Database: SQLite  
- API: polkadot-api
![Papiclient](https://github.com/swenthebuilder/PapiNextjsBasic/blob/main/Papiclient.png)  
**Proof of Concept (PoC)/MVP:**  
- Website: https://www.fundation.dev/  
- MVP: https://dationauth.vercel.app/login  
- Mockups/UI Designs:  
  I have posted numerous videos on my X (formerly Twitter) page showcasing updates and ideas. You can view them here: https://x.com/swenw31.  


### Ecosystem Fit

Fundation is positioned on the front-end side of the development stack.

- **Apillon:** A Polkadot-focused Web3 platform offering UI and API integration for parachain services.  
- **Thirdweb:** An Ethereum/EVM-focused platform with SDKs and smart contract tools, targeting games and creator platforms.  
- **Base OnchainKit:** OnchainKit is your go-to SDK for building beautiful onchain applications. Ship in minutes, not weeks.  
- **Magic:** An Ethereum-based authentication tool using passwordless logins, not a full dApp solution.  
 - **Polkadot-UI:** Deliver great UX with ready-made, typesafe Polkadot components. Fully customizable. Fully open source. Powered by papi and dedot

**Are there any projects similar to yours in the Polkadot/Kusama ecosystem?**  
Yes, projects like Apillon address similar needs.  
Fundation is fully open-source and self-hostable, prioritizing developer autonomy and flexibility. Unlike Apillon or Thirdweb, it does not depend on third-party services, allowing teams to maintain complete control over their deployments and adapt the framework as needed without external dependencies or delays. While Base OnchainKit offers rapid onchain app development, it lacks comprehensive full-stack authentication and robust chain management features. In comparison to Polkadot-UI, Fundation and Polkadot-UI share some similarities, but their scopes and objectives differ significantly: Polkadot-UI provides a reusable component library compatible with multiple React frameworks, whereas Fundation delivers an integrated, end-to-end toolkit focused specifically on accelerating dApp development and authentication within the Polkadot ecosystem.

**Are there any projects similar to yours in related ecosystems?**  
Yes, as noted above (e.g., Thirdweb in Ethereum/EVM, Magic for auth).  


## Team 
### Team Members
- Victor Stallone Peck (Swen)

### Contact
- **Contact Name:** Victor Stallone Peck (Swen)  
- **Contact Email:** swenpeck@outlook.com  
- **Website:** [https://www.fundation.dev/](https://www.fundation.dev/)

### Legal Structure
- **Registered Address:** 1389 SW 12th Ave, Pompano Beach, Florida 33069  
- **Registered Legal Entity:** SWEN USA LLC

### Team's Experience
Experience gained from building the dApp Stake2Build and leading the BuildOnDot developer community. Additionally, extensive corporate and freelance work, primarily in e-commerce platforms and corporate websites.

### Team Code Repos
- [https://github.com/swenthebuilder](https://github.com/swenthebuilder)

### Team LinkedIn Profiles (if available)

- None

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying.: no code to show 

- links to improvement proposals or [RFPs](https://grants.web3.foundation/docs/rfps) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

### Overview
- **Total Estimated Duration:** 2 months  
- **Full-Time Equivalent (FTE):** 0.5  
- **Total Costs:** 10,000 USD  
- **DOT %:** 85%

### Milestone 1 — Base Module Functionality
- **Estimated Duration:** 1 month  
- **FTE:** 0.5  
- **Costs:** 8,000 USD  

| Number | Deliverable          | Specification                                                                 |
|--------|----------------------|-------------------------------------------------------------------------------|
| **0a.** | License             | We will release all code under the **Apache 2.0** license. **Acceptance Criteria:** The GitHub repository contains a valid LICENSE file with Apache 2.0 terms, verified by running `license-checker` or manual inspection, ensuring 100% code coverage under this license. |
| **0b.** | Documentation       | We will provide **inline documentation** and a comprehensive **README.md** with setup instructions. **Acceptance Criteria:** README.md includes step-by-step installation commands that successfully build and run the project on a clean environment (e.g., via `npm install && npm run dev`), with at least 80% code coverage in inline  comments |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the delivery guidelines for details. **Acceptance Criteria:** Unit tests achieve 90%+ coverage (measured by Jest ), pass all executions without errors, and the testing guide in README.md enables reproduction of results in under 5 minutes. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. **Acceptance Criteria:** Dockerfile builds successfully (`docker build -t fundation .`), runs without errors (`docker run -p 3000:3000 fundation`), and exposes the app at localhost:3000 with all core features accessible. |
| **1.**  | Authentication Module | Implement **modular authentication**: Wallet-based, Social, Email/Password, and Passkey (WebAuthn), with secure session management. **Acceptance Criteria:** Each auth method (4 total) successfully logs in a test user, creates a secure session and handles logout/refresh without errors; end-to-end tests pass for 100% of flows using Playwright. |
| **2.**  | Dynamic Blockchain API Module | Build an abstracted **Asset Retrieval System** for Polkadot chains via the **polkadot-api**. This module will handle chain selection, token fetching, and balance queries. **Acceptance Criteria:** Module queries balances for at least 3 Polkadot testnet assets (e.g., DOT, USDC), supports dynamic chain switching (e.g., Polkadot to Kusama),  |
| **3.**  | UX/UI Components    | Deliver polished UI components for **intuitive chain connect/disconnect** and responsive asset display. **Acceptance Criteria:** Components render correctly on desktop/mobile (tested via Chrome DevTools), connect/disconnect chains in, display assets with real-time updates, and pass accessibility checks (e.g., Lighthouse score >90 for UI elements). |

![Identity](https://github.com/swenthebuilder/PapiNextjsBasic/blob/main/Identityfix.png)  
![Network Select](https://github.com/swenthebuilder/PapiNextjsBasic/blob/main/Network%20Select.png)

---
 
### Milestone 2 — Comprehensive Documentation & Launch
- **Estimated Duration:** 1 month  
- **FTE:** 0.5  
- **Costs:** 2,000 USD  

| Number | Deliverable              | Specification                                                                 |
|--------|--------------------------|-------------------------------------------------------------------------------|
| **0a.** | License                 | Apache 2.0. **Acceptance Criteria:** All new code additions maintain Apache 2.0 compliance, with LICENSE file updated if needed and verified via automated linting in CI pipeline. |
| **0b.** | Documentation           | **Full documentation suite** (architecture, API schemas, integration examples) hosted on a dedicated site. **Acceptance Criteria:** Docs site covers 100% of public APIs with interactive examples, searchable index, and user feedback form; site loads in <3 seconds and has zero broken links. |
| **0c.** | Article                 | We will publish an **article** on platforms like Medium/X explaining the v1.0 features. **Acceptance Criteria:** Article is live on at least 2 platforms (Medium and X), receives 100+ views within 1 week of publication (tracked via platform analytics), and includes links to repo/docs. |
| **1.**  | Final Code Release      | Tag the **v1.0 release** on GitHub with a comprehensive **CHANGELOG.md** detailing features and fixes. **Acceptance Criteria:** GitHub release tag `v1.0` exists, CHANGELOG.md lists all changes categorized (e.g., Added/Fixed), and release includes downloadable assets (e.g., npm package) installable without errors. |
| **2.**  | Tutorial dApp           | Develop a fully functional mini-dApp (e.g., simple asset transfer) to serve as a **core template** showcasing all features. **Acceptance Criteria:** Mini-dApp deploys successfully to Vercel/Netlify, performs end-to-end asset transfer (e.g., 1 DOT) on Polkadot testnet and includes a 5-step tutorial in docs with 100% reproducibility. |
| **3.**  | Project Sustainability Plan | Detail the maintenance strategy (community contributions, monthly releases, BuildOnDot promotion) and long-term roadmap. **Acceptance Criteria:** Plan document (e.g., SUSTAINABILITY.md) outlines 3+ contribution guidelines, quarterly roadmap milestones, and promotion channels. |

---

## Future Plans

**Long-term maintenance and development financing:**  
Maintenance will be **community-driven** via GitHub contributions and future dApp growth.  
Sustainability will be sought through optional donations and partnerships with Polkadot teams.

**Short-term use, enhancement, and promotion:**  
Release v1.0 and promote via the **BuildOnDot** community. Enhance based on early user feedback, adding more modules for DeFi and governance.

**Team's long-term plans:**  
My long-term vision is to accelerate Polkadot adoption by enabling the rapid creation of high-quality dApps. I aim to develop a comprehensive suite of tools and products that empower developers, lower technical barriers, and foster a thriving ecosystem—ultimately driving mainstream adoption of Polkadot technology.


Master Plan

## Master Plan

### Phase One: Fundation
Current funding request will establish the foundation framework and core modules.

### Phase Two: DAppaggedon
Development of showcase dApps targeting key Polkadot ecosystem needs:
- Gaming
- DeFi
- Social
- OpenGov
These applications will demonstrate Polkadot's capabilities and potential.

### Phase Three: Clone Wars & Case Studies
- Create Web3 versions of popular Web2 applications
- Document migration challenges and solutions
- Develop detailed case studies for enterprise adoption
- Focus on e-commerce migration to Web3 architecture

### Phase Four — Omnipass Lightwallet
- Embedded light wallet delivered as an NPM package.
- Intended for single relying-party use: the wallet instance is created and usable only on the site/app where it was instantiated.
- Goals: easy integration, minimal footprint, secure local key storage, and fast onboarding for dApp developers.

### Phase Five — Omnipass Browser Extension & Mobile App
- Browser extension wallet
  - Cross-site passkey use: allows a single passkey to authenticate across multiple dApps without creating a new light wallet for each site.
  - Standard extension features: secure key storage, permissioned site access, connect/disconnect flows, and background sync.
- Mobile app
  - Mirrors extension functionality on mobile: stores the wallet, provides deep links/universal links for in-browser flows, and supports mobile-to-dapp communication.
  - Use cases: mobile-first dApps, seamless auth between mobile browser and native app, and push/QR flows for transaction approval.

### Phase Six — Omni Protocol
- Omni ID: a wallet naming protocol for human-readable addresses (e.g., swen@dot).
- Features: name resolution, chain-aware addressing, lookup/fallback to raw addresses, and a registry model (on-chain or decentralized) to map names to account identifiers.
- Goals: simplify fund transfers and UX by enabling username+chain transfers while preserving security and ownership controls.
- Considerations: name collision handling, ownership verification, and privacy/resolution performance.
