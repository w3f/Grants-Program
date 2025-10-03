# Fundation

- **Team Name:** Swen USA LLC
- **Payment Details:**
  - **DOT:** 12F4tc8yuGc5pZsbbPNS4TEwpDr7td8rMvnVyPQFxQnskqTk
  - **Payment:** 12F4tc8yuGc5pZsbbPNS4TEwpDr7td8rMvnVyPQFxQnskqTk (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1

## Project Overview :page_facing_up:

### Overview
**Tagline:** Build dApps Faster Than Ever. Accelerate Your Polkadot Projects with Fundation's Polkadot API Management, Robust Auth, and Modular Toolkit.

**Project Description:**  
**Fundation** is a modular, open-source framework that empowers developers to build decentralized applications (dApps) rapidly on the Polkadot ecosystem. It uses the **Polkadot-API** to provide abstracted, reusable components for authentication, asset management, and UI, significantly reducing development time.

**Integration with Polkadot/Kusama:**  
The primary goal of Fundation is to simplify dApp development on top of Asset Hub and rollups, significantly reducing development time. It uses Polkadot-API for seamless integration with the Polkadot and Substrate ecosystems, complementing backend tools by addressing front-end gaps.
![module-components](https://github.com/swenthebuilder/PapiNextjsBasic/blob/main/module-components.png)  
**Team's Motivation:**  
While building my first dApp on Polkadot, Stake2Build, over a year and a half ago, I realized how far behind the ecosystem was in front-end and web developer tooling. Although many improvements have been made since then, I believe this tool will still be of great benefit to the community by addressing these ongoing challenges, lowering entry barriers for indie devs, hackathon teams, and startups.

### Project Details

**Technology Stack:**  
- Core Stack: Next.js  
- UI: Tailwind CSS, shadcn/ui  
- Database: SQLite  
- API: Polkadot-api API  
![Papiclient](https://github.com/swenthebuilder/PapiNextjsBasic/blob/main/Papiclient.png)  
**Proof of Concept (PoC)/MVP:**  
- Website: https://www.fundation.dev/  
- MVP: https://www.fundation.dev/login  
- Mockups/UI Designs:  
  I have posted numerous videos on my X (formerly Twitter) page showcasing updates and ideas. You can view them here: https://x.com/swenw31.  

(The future tokenomics of your project: none)  
(For non-infrastructure projects—deployment and hosting costs, maintenance or audits)  
(Business-oriented activities (marketing, business planning), events or outreach)

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

**If not, please indicate why such a project might not have been possible, successful, or attempted.**  
N/A

## Team :busts_in_silhouette:

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
| **0a.** | License             | We will release all code under the **Apache 2.0** license.                    |
| **0b.** | Documentation       | We will provide **inline documentation** and a comprehensive **README.md** with setup instructions. |
| **1.**  | Authentication Module | Implement **modular authentication**: Wallet-based, Social, Email/Password, and Passkey (WebAuthn), with secure session management. |
| **2.**  | Dynamic Blockchain API Module | Build an abstracted **Asset Retrieval System** for Polkadot chains via the **Polkadot-API**. This module will handle chain selection, token fetching, and balance queries. |
| **3.**  | UX/UI Components    | Deliver polished UI components for **intuitive chain connect/disconnect** and responsive asset display. |

![Identity](https://github.com/swenthebuilder/PapiNextjsBasic/blob/main/Identity.png)  
![Network Select](https://github.com/swenthebuilder/PapiNextjsBasic/blob/main/Network%20Select.png)

---

### Milestone 2 — Comprehensive Documentation & Launch
- **Estimated Duration:** 1 month  
- **FTE:** 0.5  
- **Costs:** 2,000 USD  

| Number | Deliverable              | Specification                                                                 |
|--------|--------------------------|-------------------------------------------------------------------------------|
| **0a.** | License                 | Apache 2.0.                                                                   |
| **0b.** | Documentation           | **Full documentation suite** (architecture, API schemas, integration examples) hosted on a dedicated site. |
| **0c.** | Article                 | We will publish an **article** on platforms like Medium/X explaining the v1.0 features. |
| **1.**  | Final Code Release      | Tag the **v1.0 release** on GitHub with a comprehensive **CHANGELOG.md** detailing features and fixes. |
| **2.**  | Tutorial dApp           | Develop a fully functional mini-dApp (e.g., simple asset transfer) to serve as a **core template** showcasing all features. |
| **3.**  | Project Sustainability Plan | Detail the maintenance strategy (community contributions, monthly releases, BuildOnDot promotion) and long-term roadmap. |

---

## Future Plans

**Long-term maintenance and development financing:**  
Maintenance will be **community-driven** via GitHub contributions and future dApp growth.  
Sustainability will be sought through optional donations and partnerships with Polkadot teams.

**Short-term use, enhancement, and promotion:**  
Release v1.0 and promote via the **BuildOnDot** community. Enhance based on early user feedback, adding more modules for DeFi and governance.

**Team's long-term plans:**  
My long-term vision is to accelerate Polkadot adoption by enabling the rapid creation of high-quality dApps. I aim to develop a comprehensive suite of tools and products that empower developers, lower technical barriers, and foster a thriving ecosystem—ultimately driving mainstream adoption of Polkadot technology.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](https://grants.web3.foundation/docs/referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee  
- **Payment Address:** Polkadot/Kusama (USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDC))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation from keegan@web3.foundation.

**Work you have already done:** Initial MVP built and tested in a live demo (**DotGrant** platform).