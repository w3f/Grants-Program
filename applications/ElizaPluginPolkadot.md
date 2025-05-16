# Polkadot ElizaOS Plugin

- **Team Name:** Esscrypt Ltd.
- **Payment Details:**
  - **DOT**: 15JRT5GjLAZkuvmpwmjCUp1RRLr7Y6Gnusz37ia37h2Xn5Rz
  - **Payment**: 15JRT5GjLAZkuvmpwmjCUp1RRLr7Y6Gnusz37ia37h2Xn5Rz (USDC) 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

**Empowering decentralized AI with Polkadot on-chain integration.**
  The Polkadot ElizaOS Plugin is an open-source integration module designed to connect ElizaOS—a decentralized AI operating system—with the Polkadot ecosystem. The plugin provides a set of actions and providers for AI agents to access real-time on-chain data, query governance information, and interact with common parachain smart contracts, opening up the possibility for agentic interactions on Polkadot networks.
  Our plugin leverages the polkadot-js API for data feeds, utilizes Polkadot’s XCMP for cross-chain communication, and provides standardized interfaces for smart contract interactions on parachains. This tight integration enables seamless interaction between AI systems and the Polkadot network.
  Our team is driven by a passion for decentralized innovation. With extensive experience in blockchain integration and decentralized AI, we aim to reduce technical complexity and accelerate innovation by creating a standardized tool that benefits developers and researchers in the Polkadot ecosystem.

### Project Details

- **UI/UX Designs:**  
  Initial mockups for administrative dashboards and API usage examples are available as part of our internal design documents.
- **Data Models / API Specifications:**  
  The plugin API will cover endpoints for:
  - Retrieving on-chain data (balances, block information, event logs).
  - Querying governance proposals and voting results.
  - Interacting with parachain smart contracts.
  
  Detailed API specifications and data models will be documented using OpenAPI standards.
- **Technology Stack:**  
  - **Integration Layer** TypeScript with polkadot-js.
  - **Framework:** ElizaOS Monorepo set up with all necessary prerequisites for a fully functional local testing environment.
  - **Testing & Documentation:** Comprehensive unit tests (>95%); detailed inline documentation and user guides. Screenshots of end-to-end deep testing using a test AI Agent
- **Core Documentation:**  
  We will provide full technical documentation including architecture diagrams, integration guides, and API tutorials.
- **Prior Work:**  
  Our team has successfully delivered integration plugins for other blockchain ecosystems, such as the [ElizaOS TON Plugin](https://github.com/elizaos-plugins/plugin-ton/pull/18), which demonstrates our ability to build robust, community-driven, open-source projects.
- **Scope Limitations:**  
  This project focuses solely on software integration for ElizaOS with Polkadot and does not include any token issuance, financial instruments, or business-oriented services.

### Ecosystem Fit

- **Ecosystem Positioning:**  
  The Polkadot ElizaOS Plugin acts as a bridge between decentralized AI and Polkadot’s data-rich environment, enabling developers to harness on-chain data, participate in governance, and utilize parachain smart contracts.
- **Target Audience:**  
  Developers and researchers building decentralized AI applications, dApp developers, and blockchain enthusiasts seeking simplified integration with Polkadot.
- **Needs Addressed:**  
  It streamlines agentic access to on-chain data and governance information, reducing the complexity of integrating blockchain functionalities into AI systems.
- **Need Identification:**  
  Our requirements are based on extensive community discussions and experience from other ecosystems.
- **Competitive Landscape:**  
  While several projects exist for blockchain integrations, none specifically target the intersection of ElizaOS as one of the most widely used Agentic frameworks and Polkadot’s unique capabilities. Our plugin’s focus distinguishes it from existing solutions.
- **Related Projects:**  
  Similar integrations exist in the Ethereum ecosystem, but our solution is tailored for Polkadot’s architecture and its cross-chain interoperability features.

## Team :busts_in_silhouette:

### Team members

- **Mihail Kirov:**  
  Lead Developer with 5+ years of experience in distributed systems and blockchain integration. Specializes in connecting AI systems with decentralized networks and has a strong track record in open-source contributions.
  Mentored at the [Polkadot Prodigy](https://www.linkedin.com/posts/polkadotprodigy_lets-welcome-mihail-kirov-who-is-joining-activity-7191345617330192384-DJbv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC27-YYBCPf5vbQMBXvlthYYXnOflSOp-9A) Hackathon 
  [GitHub: mikirov](https://github.com/mikirov) | [LinkedIn](https://www.linkedin.com/in/mihail-kirov/)

- **Tyler Ellis McWilliams:**  
  Blockchain Developer with 5+ years of experience in decentralized applications, tokenomics, and smart contracts. Expert in multi-language development and AI integration, with extensive contributions to open-source projects.  
  [GitHub: tylermcwilliams](https://github.com/tylermcwilliams) | [LinkedIn](https://www.linkedin.com/in/tyler-mcwilliams-85256a117)


### Contact

- **Contact Name:** Mihail Kirov
- **Contact Email:** me@mikirov.xyz
- **Website:** [esscrypt.com](https://esscrypt.com/)

### Legal Structure

- **Registered Address:** Mladost 3, bl. 313, ent. 3, fl. 10, ap. 66, 1799, Sofia, Bulgaria.
- **Registered Legal Entity:** Escrypt Ltd.

### Team's experience

### Team Code Repos

- [Mihail Kirov](https://github.com/mikirov)
- [Tyler Ellis McWilliams](https://github.com/tylermcwilliams)

### Team LinkedIn Profiles

- [Mihail Kirov](https://www.linkedin.com/in/mihail-kirov/)
- [Tyler Ellis McWilliams](https://www.linkedin.com/in/tyler-mcwilliams-85256a117)

## Development Status :open_book:

We have conducted preliminary research and have established a solid architectural design for the Polkadot ElizaOS Plugin. 
Initial prototypes and integration experiments with the polkadot-js API have been performed, 
and design documents outlining core functionalities, data models, and API specifications are available. 
Our prior work on similar projects (TON, IOTA and Ocean integrations) further validates our technical approach. 
Detailed documentation and research findings will be maintained in our repositories and published blog posts.

## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 120 person-days
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 20,000 USD
- **DOT %:** 50% of total costs

### Milestone 1 — Wallet and On-Chain Observability

- **Estimated Duration:** 1 month
- **FTE:** 2FTE, the listed members would contribute to different deliverables based on their skill-set.
- **Costs:** 10,000 USD

| Number | Deliverable                       | Specification                                                                                                     |
| ------ | --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                           | Apache 2.0                                                                                                        |
| **0b.** | Documentation                     | Inline code documentation and a tutorial on how to set up the plugin and perform test queries using polkadot-js  |
| **0c.** | Testing and Testing Guide         | Comprehensive unit tests covering core functions with instructions on running these tests                        |
| 1.     | Wallet Integration         | Create actions to create a wallet, eject wallet, utilizing end-to-end encryption of the private key        |
| 2.     | On-Chain Data Feed Module         | Create actions to retrieve on-chain data (balances, block numbers, event logs) using polkadot-js API               |
| 3.     | Governance Query Module           | Develop actions to query and parse governance proposals, referenda, and voting results from Polkadot                  |

**Plugin Actions:**
- **Polkadot Wallet Creation:**
 - Allows the user to create a new wallet, with both a user-provided secret and agent-generated one.
- **Polkadot Wallet Eject:**
 - Allows the user to export their wallet using their passkey.
- **Retrieve On-Chain Data:**
 - Action to fetch and filter on-chain data such as account balances, block information, and event logs.
 - Retrieves live data from Polkadot nodes via the polkadot-js API.
- **View Governance Data:**
 - Action to display current governance proposals and voting results from Polkadot’s governance modules.

**Providers:**
- **Polkadot Wallet Provider:**
 - Authenticate users by signing messages or transactions. Requires a created wallet, or secrets set up in env.
- **Polkadot Data Provider:**
 - Integrates with the polkadot-js API to fetch on-chain data and governance information.
 - Manages API authentication, connection to Polkadot nodes, and error handling.

**Developer Tasks:**
- Establish the plugin framework within ElizaOS.
- Set up integration and unit tests targeting ≥95% coverage.
- Define common interfaces for future actions and providers.
 
### Milestone 2 — Asset Hub Subsidized Transactions and Cross-Parachain Transfers

- **Estimated Duration:** 1 month
- **FTE:** 2FTE, the listed members would contribute to different deliverables based on their skill-set.
- **Costs:** 10,000 USD

| Number | Deliverable                       | Specification                                                                                                     |
| ------ | --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                           | Apache 2.0                                                                                                        |
| **0b.** | Documentation                     | Detailed documentation of governance query actions and smart contract interaction modules                         |
| **0c.** | Testing and Testing Guide         | Unit tests covering governance and contract interactions with testing instructions                               |
| 4.     | Transfers & Transactions   | Execute token transfers between accounts, multisigs, or across parachains (XCMP transfers).    
| 5.     | Subsidized Transactions  | 	Subsidized payment of transaction fees using asset hub's sufficient assets.                  |
| 6.     | Official ElizaOS Repository Integration | Submit a pull request to the official ElizaOS plugin repository and ensure successful merge. This ensures the plugin becomes an official part of the ElizaOS ecosystem and is accessible to all ElizaOS users. |          

## Future Plans

- **Long-Term Maintenance:**  
  We plan to sustain the project through continuous community contributions and by exploring partnerships that provide service-based revenue streams. Our open-source approach ensures that the community can extend and improve the plugin over time.
- **Short-Term Enhancements:**  
  We will introduce advanced analytics tools for real-time monitoring, support additional parachain networks, and implement custom runtime modules based on community feedback.
- **Long-Term Vision:**  
  Our roadmap includes the development of easy-to-extend and intuitive interfaces, allowing contributors to easily extend and build on top of the plugin.
- **PVM readiness**
  One of our main goals will be to develop the current plugin with extensibility and forwards-compatibility in mind, defining common interfaces in such a way that a future AssetHub integration will be easier

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
- Research over missing ElizaOS ecosystems.
- **Additional Work:**  
  Our team has previously delivered successful integrations for the TON network. This is our first grant application for a Polkadot-specific project, marking our commitment to advancing decentralized AI technologies within the Polkadot ecosystem.
- **Previous Grants:**  
  None.
