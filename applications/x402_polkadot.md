# x402 Payment Protocol for Polkadot

- **Team Name:** MahaSour
- **Payment Details:**
  - **DOT**: 12ECJeQWJBt2UVfyMQfsLca7M9aXRVzcJmbh2RvRv9yaAiwW
  - **Payment**: 12ECJeQWJBt2UVfyMQfsLca7M9aXRVzcJmbh2RvRv9yaAiwW
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

- **Tagline**: HTTP-native micropayments for Polkadot's AI agent economy
- **Description**: x402 is an open payment protocol that enables instant, programmatic stablecoin payments directly over HTTP using the 402 Payment Required status code. We are implementing x402 for the Polkadot ecosystem, allowing AI agents and applications to make autonomous micropayments using USDC on Polkadot AssetHub.
- **Integration with Polkadot**: Direct integration with Polkadot AssetHub for USDC settlement and leverages Polkadot.js ecosystem for wallet integration. Provides payment infrastructure layer for the Polkadot ecosystem, enabling developers to build paid APIs and AI agent applications.
- **Why we're interested**: The AI agent economy is projected to influence $30 trillion in transactions by 2030 (a16z). Currently, x402 only exists on Base and Solana. By bringing this protocol to Polkadot, we enable the ecosystem to compete in this emerging market while providing developers with production-ready payment infrastructure for autonomous agent applications.

### Project Details

**Technology Stack:**
- Client/Server SDKs: TypeScript/JavaScript (Node.js and browser)
- Facilitator Service: Rust
- Blockchain Integration: Polkadot.js, subxt
- Payment Settlement: Polkadot AssetHub
- Cryptography: sr25519/ed25519 for signatures
- Templates: Express.js, Next.js, Rust (Axum)
- Testing: Mocha (TypeScript), Cargo (Rust)
- Documentation: Docusaurus

**Architecture:**

```
┌────────────────────────┐
│      Client/Agent      │ (x402-polkadot-js [client])
└──────────┬─────────────┘
           │ HTTP + X-PAYMENT header
           ↓
┌────────────────────────┐
│       API Server       │ (x402-polkadot-js middleware [server])
└──────────┬─────────────┘
           │ Verify payment
           ↓
┌────────────────────────┐
│   Facilitator Service  │ (Rust REST API [facilitator])
└──────────┬─────────────┘
           │ Submit transaction
           ↓
┌────────────────────────┐
│   Polkadot AssetHub    │
└────────────────────────┘
```

**Core Components:**

1. **x402-polkadot-js SDK** - TypeScript/JavaScript library with:
   - Client module for making payments (browser & Node.js)
   - Server module with middleware for Express, Fastify, Next.js
   - Polkadot.js wallet integration
   - Payment signature creation and verification

2. **x402-facilitator** - Rust service providing:
   - REST API for payment verification and settlement
   - USDC payment support on AssetHub
   - AssetHub transaction submission
   - Nonce tracking and replay attack prevention

3. **Developer Tools:**
   - Templates for Express, Next.js, and Rust (Axum)
   - Comprehensive documentation and tutorials

### Ecosystem Fit

**Where and how does your project fit into the ecosystem?**

x402 sits at the infrastructure/tooling layer, providing payment rails for applications built on Polkadot. It enables autonomous agent payments, API micropayments, pay-per-use content, and machine-to-machine transactions. The protocol integrates directly with Polkadot AssetHub for settlement and leverages the Polkadot.js ecosystem for wallet connectivity.

**Who is your target audience?**

- Backend developers building paid APIs on Polkadot
- AI/agent developers needing payment capabilities for autonomous systems
- DApp developers wanting micropayment features
- Web3 entrepreneurs building agent-based services
- Developers creating pay-per-use content platforms

**What need(s) does your project meet?**

1. **Payment autonomy for AI agents**: Current payment systems require human intervention (API keys, credit cards, manual approvals). AI agents need to transact autonomously without human friction.

2. **Practical micropayments**: Traditional payment rails (credit cards, bank transfers) are impractical for micropayments due to 2-3% fees and minimum transaction amounts. x402 enables sub-cent transactions.

3. **HTTP-native crypto payments**: Developers currently must integrate complex blockchain SDKs to accept crypto payments. x402 makes payments as simple as HTTP requests.

4. **Polkadot's position in AI economy**: Polkadot is currently absent from the emerging AI agent payment narrative, while Base and Solana have active implementations.

**How did you identify these needs? Please provide evidence.**

- **Market data**: x402 on Base saw 10,000%+ transaction growth in one month, reaching 900K+ transactions per week (source: x402.org analytics)
- **Industry projections**: a16z research predicts $30 trillion in machine-driven transactions by 2030
- **Institutional validation**: Coinbase and Cloudflare launched the x402 Foundation to steward protocol adoption
- **Developer demand**: Multiple facilitator implementations emerged within months (Base, Solana), indicating strong demand
- **Forum discussions**: Polkadot forum discussions about AI agent integration and payment infrastructure gaps
- **Original protocol**: https://www.x402.org/ - demonstrates working implementation and adoption

**Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

No. There are currently no x402 implementations or equivalent HTTP-native payment protocols in the Polkadot/Kusama ecosystem.

**Why might such a project not have been attempted before?**

1. **Recent Protocol**: x402 was only introduced by Coinbase in 2024 and is still in early adoption phase
2. **Emerging Demand**: The AI agent economy requiring autonomous payments is just materializing - the market need wasn't significant until recently

Our project addresses this gap by bringing proven x402 technology to Polkadot, positioning the ecosystem to compete in the AI agent economy.

**Are there any other projects similar to yours in related ecosystems?**

Yes, in other blockchain ecosystems:

- **x402 on Base** (Coinbase): The original implementation using USDC on Coinbase's L2 network
- **x402 on Solana** (PayAI Network): Facilitator service for Solana blockchain

## Team :busts_in_silhouette:

### Team members

- **Team leader**: Mahavir Ganapati Dash
- **Team Member**: Sourav Mishra

### Contact

- **Contact Name:** Mahavir Ganapati Dash
- **Contact Email:** mahavirdash2017@gmail.com
- **Website:** N/A

### Sourav Mishra on my team has received a W3F grant before for the project OriginForge - A DID based gamer achievement aggregation platform and successfully delivered all the milestones.

### Legal Structure

- **Registered Address:** Individual
- **Registered Legal Entity:** Individual

### Team's experience

**Mahavir Ganapati Dash** is a Rust Backend & Blockchain Engineer with 3+ years of professional experience specializing in scalable backend solutions and blockchain technology.

**Blockchain Infrastructure Experience:**
- Designed and deployed authentication systems handling 10,000+ users at CO2 Network, improving security with Rust and Diesel
- Engineered backend solutions for custom blockchains using Substrate framework at Squbix Digital
- Developed and optimized runtime modules and pallets to align with business requirements
- Built custom consensus mechanisms to reduce storage usage by removing empty blocks
- Implemented rate limiter for authentication server to prevent DDoS attacks

**Rust Development Expertise:**
- 3+ years of professional Rust development in production environments
- Built and optimized REST and GraphQL APIs, reducing response time by 30%
- Strong proficiency in API design (REST, GraphQL, WebSocket) and database management (SQL, DynamoDB)
- Integrated APIs with React, TypeScript, and Vite projects for seamless frontend-backend communication
- Developed macOS applications using SwiftUI for admin operations

**Education & Community Involvement:**
- Graduate of Polkadot Blockchain Academy (PBA), Singapore
- Rust & Blockchain Instructor conducting workshops in collaboration with STPI (Software Technology Parks of India)
- Developed and delivered comprehensive Rust, backend, and blockchain course for Silicon University students
- Bachelor of Technology in Electronics and Communication Engineering from Silicon Institute of Technology

**Notable Achievements:**
- Partnered with STPI to conduct workshops and training programs on Rust, blockchain, and backend technologies
- Published open-source Rust packages: cargo-auto-run and string-config-parser

---

**Sourav Mishra** is a Rust Backend & Protocol Engineer with 3+ years of experience in blockchain development, specializing in Substrate-based systems.

**Blockchain Infrastructure Experience:**
- Built authentication systems handling 10,000+ users at CO2 Network
- Developed blockchain infrastructure using Substrate framework
- Engineered custom consensus mechanisms and runtime pallets
- Implemented XCM configurations for cross-chain transfers
- Received Web3 Foundation grant for self-sovereign identity project

**Rust Development Expertise:**
- 3+ years of professional Rust development in production environments
- Built production-grade authentication middleware systems
- Developed gRPC APIs and cryptographic systems
- Strong focus on type-safe, production-ready code with comprehensive testing

**Open Source Contributions:**
- **solpm**: Solana program manager for managing programs as dependencies
- **psvm contributions**: Contributed to Polkadot SDK version manager
- **surfpool contributions**: Contributed to the Surfpool CLI, the most popular testing suite in Solana

**Education & Community Involvement:**
- Graduate of Polkadot Blockchain Academy (PBA)
- Technical speaker at STPI (Software Technology Parks of India), a Central Government organisation
- Conducted Rust programming workshops
- Taught Rust and Blockchain to students at his University for their academic fulfilment
- Speaker at sub0 Reset Bangkok conference

### Team Code Repos

**GitHub account:**
- Mahavir - https://github.com/crypto-priest
- Sourav - https://github.com/0xsouravm

### Team LinkedIn Profiles

- Mahavir - https://www.linkedin.com/in/crypto-priest/
- Sourav - https://www.linkedin.com/in/web3-mishra/

## Development Status :open_book:

**Research conducted:**
- Comprehensive review of x402 protocol specification and implementation details
- Analysis of existing implementations on Base (Coinbase) and Solana (PayAI Network)
- Deep dive into Polkadot AssetHub APIs and integration patterns
- Research on AI agent economy trends and market demand
- Evaluation of Polkadot.js vs subxt for optimal blockchain integration approach
- Study of sr25519/ed25519 signature schemes for Polkadot compatibility

**Relevant links:**
- x402 Official Site: https://www.x402.org/
- x402 Protocol Specification: https://github.com/coinbase/x402
- Coinbase x402 Launch: https://www.coinbase.com/developer-platform/discover/launches/x402
- x402 Foundation Announcement: https://blog.cloudflare.com/x402-foundation
- Polkadot AssetHub Documentation: https://wiki.polkadot.network/docs/learn-assets

**Technical Architecture Planning:**
We have completed the technical architecture design, identifying key components and their interactions.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 — Facilitator Service Core

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to deploy and operate a facilitator service. Documentation will cover API endpoints, configuration options, and integration with AssetHub. We will also provide architecture documentation explaining design decisions. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests and integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests using `cargo test`. We will include load testing documentation with expected throughput (requests per second) and latency targets (p50, p95). |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. The Docker image will be production-ready with health checks and multi-stage builds. We will also provide Docker Compose configuration for spinning up dependencies locally. |
| 1. | REST API Server | We will create a Rust-based HTTP server using the Axum framework. The server will implement core endpoints: POST /verify (verifies payment signatures and structure), POST /settle (submits transaction to AssetHub), GET /health (service health check), and GET /status (provides facilitator status including gas balance). |
| 2. | Payment Verification Engine | We will implement the cryptographic verification logic that handles sr25519/ed25519 signature verification, payment amount validation, expiration timestamp checking, nonce tracking in the database to prevent replay attacks, comprehensive input validation for all API endpoints, and balance verification before settlement. All validation will conform to the x402 protocol specification. |
| 3. | Basic AssetHub Integration | We will implement connection to Polkadot AssetHub via RPC using the subxt library. The module will construct USDC transfer extrinsics, handle transaction submission and confirmation monitoring, implement retry logic for failed transactions, and check facilitator gas balances to ensure operational readiness. |
| 4. | Database Layer | We will implement a database layer using PostgreSQL or SQLite for tracking nonces (critical for replay attack prevention), storing transaction history, and maintaining payment receipts. The implementation will include proper database migrations and connection pooling for production use. |
| 5. | Production Hardening | We will implement rate limiting (configurable requests per IP), health check endpoints reporting service and dependency status, structured logging with transaction IDs for audit trails, and graceful error handling for network failures. |


### Milestone 2 — x402-polkadot-js Library

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can install the library, integrate it into their application, and create their first paid endpoint. The tutorial will cover wallet setup, payment signature creation, and basic server-side verification. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit and integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests using `npm test` for JavaScript. We will achieve 90%+ test coverage for the library. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Client Module | We will create the client-side library that handles creating signed payments, integrates with Polkadot.js wallets (browser extension and Node.js), and includes a fetch wrapper that automatically handles 402 responses. |
| 2. | Server Module | We will create the server-side library with middleware that extracts and validates X-PAYMENT headers, communicates with the facilitator API for verification, and generates proper 402 responses. The module will be framework-agnostic, working seamlessly with Express, Fastify, Next.js, and other Node.js frameworks. |
| 3. | Frontend Test Client | We will create a simple frontend application to test and demonstrate the SDK integration, including wallet connection, payment signing, and end-to-end payment flow verification. |


### Milestone 3 — Starter Templates & Documentation

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** for each template that explains how to set up, configure, and deploy the application. Each template will include a complete setup guide, detailed README with deployment instructions, and environment configuration guides. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. Every template will have working test suites with clear instructions on running them. |
| **0d.** | Docker | We will provide Dockerfiles and Docker Compose configurations that can be used to test all the functionality delivered with this milestone. Each template will have Docker Compose setups for local development. |
| 1. | Express.js Template | We will create a production-ready Express API template demonstrating x402-polkadot-js in action. It will include paid endpoints example, environment configuration setup, proper error handling, Docker deployment configuration, and integration tests. |
| 2. | Next.js Template | We will create a full-stack Next.js application template with API routes using x402 middleware, a React frontend that connects to Polkadot.js extension wallets, payment UI components, example paid content pages, and will be ready to deploy on Vercel or self-hosted infrastructure. |
| 3. | Project Website | We will create a marketing/landing page for the project that explains what x402-polkadot is, links to documentation and GitHub repositories, showcases live demos, provides community links (Discord/Telegram), displays a status page for facilitator uptime, and has a clear getting started call-to-action. |
| 4. | Documentation Site | We will create a Docusaurus-based documentation site with getting started guides, API reference, integration tutorials, and troubleshooting FAQ. |
| 5. | Rust Template | We will create a Rust backend template using Axum demonstrating facilitator integration with paid endpoints, middleware setup, configuration management, and Docker deployment. |


## Future Plans

**Long-term maintenance and financing:**

- **Year 1**: The grant funding ($30,000 USD) will cover development
- **Year 2+**: We plan to apply for Polkadot Treasury funding as ecosystem infrastructure, OR implement a 0.5-1% optional facilitator fee for self-sustainability
- **Self-hosting option**: Developers will always have the option to run their own facilitator instances, ensuring no vendor lock-in

**Promotion and enhancement:**

- Present at Polkadot events (sub0, Decoded, PBA) to raise awareness
- Engage with Substrate Builder's Program for additional support
- Partner with 5-10 pilot projects for real-world testing and feedback
- Regular tutorials, case studies, and integration guides
- Community workshops and hands-on integration support
- Active engagement on Polkadot forums and community channels

**Long-term vision:**

- Become the default payment standard for AI agents on Polkadot
- Position Polkadot as a leader in the AI agent economy
- Contribute improvements back to the broader x402 standard evolution
- Expand to support additional Polkadot parachains and cross-chain scenarios
- Build a thriving developer ecosystem around x402-polkadot
- Expand SDK and template support to additional programming languages (Rust, Go, Python) based on community demand
- Add support for additional tokens (DOT, USDT) on AssetHub
- Develop CLI debugging tool for testing and debugging payment flows
- Implement email notification system for payment events

**Post-grant support:**

- 6-week critical bug fix support after final milestone delivery
- Ongoing community support through Discord and GitHub discussions
- Security patches and dependency updates for 6 months

## Referral Program (optional) :moneybag:

Referrer: Sourav Mishra (https://github.com/0xsouravm)

Payment Address: 16SGUEfpDop2fXi9K89yzCQWHJ3vHz1tKJVA1pCBjoew5tzP (USDC)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Web3 Foundation website and through the Polkadot developer community.

**Work you have already done:**

- [Successfully released a Rust community template for x402 in Solana](https://github.com/crypto-priest/x402-solana-rust)
- Comprehensive research on x402 protocol specification and existing implementations
- Analysis of Polkadot AssetHub integration requirements and API capabilities
- Technical architecture design and component specification
- Evaluation of Polkadot.js vs subxt for optimal integration approach
- Assessment of sr25519/ed25519 signature schemes for Polkadot compatibility

**Previous grants:**

Successfully delivered a Web3 Foundation grant project - **OriginForge** - a Self-Sovereign Identity system for blockchain-based achievement aggregation ($30,000 USD).

**Other teams who have contributed:**

No other teams have contributed financially to this project.
