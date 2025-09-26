# Polkadot ElizaOS Plugin - Revive Pallet Extension

- **Team Name:** TEM Solutions
- **Payment Details:**
  - **DOT**: 14dkGZ9YbMoy5ipU2cXT3oxTrGhJPcDekbaVB2yMjTRifkhW
  - **Payment (USDC)**: 14dkGZ9YbMoy5ipU2cXT3oxTrGhJPcDekbaVB2yMjTRifkhW — Polkadot AssetHub address
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

**Enabling AI agents to interact with Polkadot's Revive pallet smart contracts.**

This Revive Pallet Extension extends our successfully delivered Polkadot ElizaOS Plugin ([M1](https://github.com/w3f/Grant-Milestone-Delivery/pull/1267), [M2](https://github.com/w3f/Grant-Milestone-Delivery/pull/1271)) to enable AI agents to interact with smart contracts deployed on Polkadot's Revive pallet. This follow-up grant addresses the specific guidance provided by Web3 Foundation reviewers during our original grant process ([PR #2518](https://github.com/w3f/Grants-Program/pull/2518)), who recommended focusing on pallet-revive integration and direct chain interactions.

The plugin provides intelligent address routing between H160 and AccountId32 formats, dual-mode contract deployment and interaction, contract event monitoring, and basic analytics integration. It leverages both Revive's Ethereum RPC endpoints and native Substrate interfaces to provide AI agents with Revive interaction capabilities.

Our team successfully delivered the foundational Polkadot ElizaOS Plugin, demonstrating our capability in ElizaOS architecture and Polkadot integration. This project focuses solely on software integration and does not include any token issuance, financial instruments, or business-oriented services.

### Project Details

- **Data Models / API Specifications:**  
  Comprehensive API specifications covering:
  - Revive contract deployment via both upload_code and Ethereum RPC
  - Intelligent address routing (H160 ↔ AccountId32 conversion)
  - Unified contract interaction endpoints supporting both eth_call and bare_call
  - Revive-native asset management with ERC20 compatibility
  - Contract event querying and filtering via eth_getLogs
  - Subscan API integration for Revive contract details

- **Technology Stack:**  
  - **Core Integration:** TypeScript with polkadot-js API and Ethereum RPC client libraries
  - **Framework:** ElizaOS Plugin Architecture (extending our existing foundation)
  - **Revive Support:** Direct pallet-revive integration with dual-mode operation support
  - **Analytics:** Subscan API integration for Revive contract monitoring
  - **Testing:** Comprehensive unit and integration tests (>95% coverage) with Revive-specific validation

- **Architecture Innovation:**  
  Our dual-mode architecture allows a single action to automatically detect address types and route operations to the appropriate Revive execution layer (Substrate or Ethereum RPC), providing seamless interaction with Revive contracts regardless of the interface used for deployment.

- **Prior Work:**  
  Our team successfully delivered the foundational Polkadot ElizaOS Plugin, establishing wallet integration, on-chain data queries, governance interactions, and cross-parachain transfers. This follow-up builds directly on that proven foundation to add Revive pallet capabilities.

- **Scope Limitations:**  
  This project focuses exclusively on Revive pallet integration capabilities and does not include token issuance, DeFi protocol development, or business-oriented financial services.

### Ecosystem Fit

- **Target Audience:**  
  Developers building AI-integrated applications on Revive, smart contract developers seeking agentic automation, and researchers exploring autonomous blockchain interactions with Ethereum-compatible contracts on Polkadot.

- **Needs Addressed:**  
  It streamlines agentic access to Revive smart contracts, reducing the complexity of integrating Ethereum-compatible contract functionality into AI systems on Polkadot. The plugin addresses the need for intelligent address handling between H160 and AccountId32 formats and provides unified contract management regardless of deployment method.

- **Need Identification:**  
  During our original grant review ([PR #2518](https://github.com/w3f/Grants-Program/pull/2518)), Web3 Foundation reviewers specifically recommended focusing on pallet-revive integration and capabilities that go beyond data fetching to enable direct chain interactions. This proposal directly implements those recommendations.

- **Competitive Landscape:**  
  While basic smart contract integrations exist for other chains, no solution provides comprehensive agentic interaction with Polkadot's Revive pallet. Our plugin's focus on dual-mode operations (Ethereum RPC + Substrate) distinguishes it from existing solutions.

- **Related Projects:**  
  Similar integrations exist for Ethereum, but our solution is tailored specifically for Polkadot's Revive architecture and cross-chain interoperability features.

## Team :busts_in_silhouette:

### Team members

- **Mihail Kirov:**  
  Lead Developer with 5+ years of experience in distributed systems and blockchain integration. Co-delivered the foundational Polkadot ElizaOS Plugin, demonstrating proven capability in connecting AI systems with Polkadot networks. Specializes in cross-chain interoperability and has extensive experience with both Substrate and Ethereum ecosystems.
  Mentored at [Polkadot Prodigy](https://www.linkedin.com/posts/polkadotprodigy_lets-welcome-mihail-kirov-who-is-joining-activity-7191345617330192384-DJbv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC27-YYBCPf5vbQMBXvlthYYXnOflSOp-9A) Hackathon  
  [GitHub: mikirov](https://github.com/mikirov) | [LinkedIn](https://www.linkedin.com/in/mihail-kirov/)

- **Tyler Ellis McWilliams:**  
  Blockchain Developer with 5+ years of experience in decentralized applications, tokenomics, and smart contracts. Expert in multi-language development and AI integration, with extensive contributions to open-source projects.  
  [GitHub: tylermcwilliams](https://github.com/tylermcwilliams) | [LinkedIn](https://www.linkedin.com/in/tyler-mcwilliams-85256a117)

### Contact

- **Contact Name:** Tyler Ellis McWilliams
- **Contact Email:** tyler.ellis.mcwilliams@gmail.com
 - **Website:** n/a

### Legal Structure

- **Registered Address:** Via Proserpina 11, Catania, CT, Italy
- **Registered Legal Entity:** TEM SOLUTIONS DI TYLER ELLIS MCWILLIAMS (Ditta Individuale)
- **VAT Number (Partita IVA):** 06195420879
- **Tax Code:** MCWTLR94M14C351T
- **Business Activity Code:** 621000 - Attività di Programmazione Informatica (IT Programming Activities)

### Team's experience

Our team successfully delivered the foundational Polkadot ElizaOS Plugin ([M1](https://github.com/w3f/Grant-Milestone-Delivery/pull/1267), [M2](https://github.com/w3f/Grant-Milestone-Delivery/pull/1271)), which established wallet integration, on-chain data querying, governance interactions, and cross-parachain transfers. This proven track record, combined with our extensive experience in EVM-compatible environments and Substrate development, positions us to deliver comprehensive Revive pallet integration capabilities.

### Team Code Repos

- [Polkadot ElizaOS Plugin](https://github.com/Esscrypt/plugin-polkadot) (contains both foundational plugin and upcoming Revive extension)
- [Mihail Kirov](https://github.com/mikirov)
- [Tyler Ellis McWilliams](https://github.com/tylermcwilliams)

### Team LinkedIn Profiles

- [Mihail Kirov](https://www.linkedin.com/in/mihail-kirov/)
- [Tyler Ellis McWilliams](https://www.linkedin.com/in/tyler-mcwilliams-85256a117)

## Development Status :open_book:

We have conducted preliminary research into Revive pallet architecture and dual-mode contract interaction patterns, informed by Web3 Foundation reviewer feedback emphasizing pallet-revive integration.

Initial architectural designs for address routing between H160 and AccountId32 formats have been completed, and we have analyzed Revive's upload_code and eth_sendTransaction deployment methods. Our existing plugin architecture from the successfully delivered foundation ([M1](https://github.com/w3f/Grant-Milestone-Delivery/pull/1267), [M2](https://github.com/w3f/Grant-Milestone-Delivery/pull/1271)) provides the base for implementing Revive-specific capabilities.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months (120 person-days)
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 20,000 USD
- **DOT %:** 50% of total costs

### Milestone 1 — Revive Contract Foundation & Dual-Mode Operations

- **Estimated Duration:** 1 month
- **FTE:** 2 FTE, team members will contribute to deliverables based on their specialized expertise
- **Costs:** 10,000 USD

| Number | Deliverable                       | Specification |
| ------ | --------------------------------- | ------------- |
| **0a.** | License | Apache 2.0. <br><br>**Acceptance Criteria:** Apache-2.0 `LICENSE` at repo root. <br><br>**Verification:** Reviewer checks repository root for `LICENSE`. |
| **0b.** | Documentation | Comprehensive Revive contract deployment guide, dual-mode operation documentation, and API integration tutorials. <br><br>**Acceptance Criteria:** Quickstart (deploy + 1 read call) and basic usage examples are present. <br><br>**Verification:** Reviewer follows a quickstart (deploy + one call) end-to-end using the described steps and sample configuration. |
| **0c.** | Testing and Testing Guide | Unit and integration tests for Revive deployment, interaction, and dual-mode operations with a Local Testing Guide. <br><br>**Acceptance Criteria:** `TESTING.md` and `.env.example` are present; test commands work and tests pass. <br><br>**Verification:** Reviewer runs the suite per `TESTING.md`; tests pass. |
| 1.     | Account Mapping & Address Routing | Implement intelligent H160 ↔ AccountId32 conversion with automatic address type detection for Revive operations. <br><br>**Acceptance Criteria:** Provider exposes `detectAddressType`, `toH160`, `toAccountId32`; basic examples and unit tests included. <br><br>**Verification:** Documented example demonstrates conversion in both directions with expected outputs; unit tests are green. |
| 2.     | Revive Contract Deployment | Create unified action supporting both Ethereum RPC contract deployment and Substrate `upload_code` for the Revive pallet. <br><br>**Acceptance Criteria:** One action deploys via EVM and Substrate paths; example shows a successful deployment and deployed address. <br><br>**Verification:** Reviewer follows the walkthrough and reproduces the documented example; on-chain inclusion is verifiable. |
| 3.     | Revive Contract Calls | Develop unified contract interaction supporting both `eth_call` and Substrate `bare_call` for Revive contracts. <br><br>**Acceptance Criteria:** For a sample read function, both paths return the same decoded result; example provided. <br><br>**Verification:** Reviewer follows the walkthrough and reproduces the example; output matches contract state. |
| 4.     | Enhanced Balance Queries | Extend existing getBalance action to support native balance queries for Revive addresses. <br><br>**Acceptance Criteria:** Supports H160 via `eth_getBalance` and AccountId32 via `system.account`; example shows both with units. <br><br>**Verification:** Reviewer reproduces the example and cross-checks values with an explorer/API. |
| 5.     | Contract Events System | Implement Revive contract event querying and filtering using `eth_getLogs` with real-time monitoring capabilities. <br><br>**Acceptance Criteria:** Historical filter example and a simple live monitoring example; outputs include block number, tx hash, and topics. <br><br>**Verification:** Reviewer follows the example and observes events with the stated fields. |

**Plugin Actions:**
- **Deploy Contract:** Unified action supporting both Ethereum RPC deployment and Substrate upload_code to Revive pallet
- **Call Contract Function:** Single action supporting both eth_call and bare_call for Revive contracts
- **Query Contract Events:** Contract event querying and filtering using eth_getLogs
- **Enhanced Balance Queries:** Extend existing getBalance to support native balances via eth_getBalance and system.account

**Providers:**
- **Revive Contract Provider:** Manages dual-mode Revive contract interactions with address routing
- **Address Translation Provider:** H160 ↔ AccountId32 conversion with automatic address type detection

### Milestone 2 — Advanced Revive Integration & Analytics

- **Estimated Duration:** 1 month  
- **FTE:** 2 FTE, team members will contribute to deliverables based on their specialized expertise
- **Costs:** 10,000 USD

| Number | Deliverable                       | Specification |
| ------ | --------------------------------- | ------------- |
| **0a.** | License | Apache 2.0. <br><br>**Acceptance Criteria:** Apache-2.0 `LICENSE` present and unchanged. <br><br>**Verification:** Reviewer checks repository. |
| **0b.** | Documentation | Complete API documentation, Revive integration guide, and analytics usage instructions. <br><br>**Acceptance Criteria:** API reference and analytics quickstart are present with one working example. <br><br>**Verification:** Reviewer follows analytics quickstart to retrieve metrics for a sample contract. |
| **0c.** | Testing and Testing Guide | Comprehensive tests for analytics integration, Revive compatibility, performance optimization, and error handling, with an updated Local Testing Guide. <br><br>**Acceptance Criteria:** `TESTING.md` is updated; tests for new modules exist and pass locally. <br><br>**Verification:** Reviewer runs test suite and integration tests per `TESTING.md`; all pass using the provided configuration. |
| 6.     | apiService Revive Extension | Extend existing apiService module with pallet-revive endpoint support and Ethereum RPC proxy connection management. <br><br>**Acceptance Criteria:** apiService supports mode selection (EVM/Substrate) and exposes a simple health check. <br><br>**Verification:** Documented example shows successful health check and mode switching using configuration. |
| 7.     | Revive Native Asset Integration | Enhance asset management actions to support Revive native ERC20 assets alongside traditional Substrate assets with subsidized transaction support. <br><br>**Acceptance Criteria:** Actions support ERC20 balance/transfer and native balances; optional subsidized flag documented. <br><br>**Verification:** Documented examples show balance retrieval and a transfer that updates balances as expected on a test network or local node. |
| 8.     | Contract Analytics Integration | Implement Subscan API integration for Revive contract details. <br><br>**Acceptance Criteria:** Subscan integration with basic backoff; a valid `SUBSCAN_API_KEY` is required. On-chain/cache fallback is documented. Provide a contract details feature with an example output. <br><br>**Verification:** Reviewer retrieves contract details for a sample contract using a valid `SUBSCAN_API_KEY`. |
| 9.     | Reliability & Error Policy | Unified error body and dry-run fee preview for transfers. <br><br>**Acceptance Criteria:** Actions return a unified error body; transfer actions support `dryRun` returning a fee estimate. <br><br>**Verification:** Reviewer observes the unified error body and a dry-run fee preview. |
| 10.    | Official ElizaOS Integration | Submit comprehensive pull request to official ElizaOS plugin repository with full documentation; merge is a stretch goal. <br><br>**Acceptance Criteria:** PR opened to official repo with docs; CI green. <br><br>**Verification:** Link to PR; walkthrough and docs visible in repository. |

**System Components:**
- **apiService Revive Extension:** Extend existing apiService module with pallet-revive endpoint support and Ethereum RPC proxy connections
- **Revive Asset Integration:** Enhance existing asset management actions to support Revive ERC20 assets alongside traditional Substrate assets
- **Contract Analytics:** Subscan API integration for contract details
- **Error Handling:** Unified error body and dry-run fee previews for transfers

## Future Plans

- **Long-Term Maintenance:**  
  We plan to sustain the project through continuous community contributions and by maintaining compatibility with evolving Revive pallet features. Our open-source approach ensures that the community can extend and improve the plugin over time.

- **Short-Term Enhancements:**  
  We will introduce additional parachain support as they adopt Revive, enhanced analytics capabilities, and improved error handling based on community feedback.

- **Ecosystem Expansion:**  
  As the Revive pallet evolves and more parachains implement it, we will expand support to ensure our plugin remains the comprehensive solution for agentic Revive interactions across the Polkadot ecosystem.

## Additional Information :heavy_plus_sign:

**Previous Grant Success:**
Our team successfully collaborated to deliver the foundational Polkadot ElizaOS Plugin ([M1](https://github.com/w3f/Grant-Milestone-Delivery/pull/1267), [M2](https://github.com/w3f/Grant-Milestone-Delivery/pull/1271)) under a previous Web3 Foundation grant ([PR #2518](https://github.com/w3f/Grants-Program/pull/2518)). During that review process, Web3 Foundation reviewers recommended focusing on pallet-revive integration and smart contract capabilities in a follow-up grant. This proposal directly implements those recommendations.

**How did you hear about the Grants Program?**
Continuing from our successful first grant.

**Previous Grants:**
- Polkadot ElizaOS Plugin (Web3 Foundation, [PR #2518](https://github.com/w3f/Grants-Program/pull/2518)) - Successfully delivered ([M1](https://github.com/w3f/Grant-Milestone-Delivery/pull/1267), [M2](https://github.com/w3f/Grant-Milestone-Delivery/pull/1271))
- Amount: $20,000 USD  
- Status: Complete and integrated into official ElizaOS plugin ecosystem