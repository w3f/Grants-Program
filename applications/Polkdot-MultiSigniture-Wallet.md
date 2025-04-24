# Polkadot Multi Signiture Wallet For Cloud Platforms

- **Team Name:** Paybill.dev
- **Payment Details:**
  - **DOT**: 1XsqJ2uNmEz4RZssE17VMzCW26akUNgZqYuJNbTNDJ1uLGS
  - **Payment**: **USDC** 1XsqJ2uNmEz4RZssE17VMzCW26akUNgZqYuJNbTNDJ1uLGS
- **[Level](https://grants.web3.foundation/docs/Introduction/levels)**: 2

## Project Overview :page_facing_up:
We propose developing a backend service for a multisignature wallet tailored to the Polkadot ecosystem. 
This service will enable secure, cloud-based management of DOT and other Substrate-based tokens, facilitating collaborative fund management for teams and DAOs. 
The backend will handle transaction orchestration, signature aggregation, and integration with Polkadot's multisig pallet, providing a robust API for frontend applications.​

### Overview
​"Secure, Cloud-Ready Multisignature Wallet Backend for the Polkadot Ecosystem."​

We aim to develop a backend service that facilitates the creation and management of multisignature wallets on the Polkadot network. 
This service will provide RESTful APIs to handle wallet creation, transaction initiation, and signature aggregation, integrating seamlessly with Polkadot's multisig pallet. 
Our solution is designed to support cloud-based deployments, enabling teams and organizations to manage funds collaboratively with enhanced security and flexibility.​

Our backend service will directly interface with the Substrate-based multisig pallet, leveraging its native capabilities to manage multisignature transactions. 
By abstracting the complexities of the underlying blockchain interactions, our solution will simplify the development of applications that require multisignature functionalities across Polkadot and Kusama networks. 
This integration will promote broader adoption of secure, collaborative fund management practices within the ecosystem.​

### Project Details

We have already defined a complete set of RESTful endpoints to interact with the Polkadot network. 
Below is a high-level overview of the available functionality:

#### 🔐 Wallet Management
- `POST /wallet`: Create a new wallet
- `POST /wallet/:id/address`: Generate a new address for a wallet
- `GET /wallet/:id`: Retrieve wallet information
- `POST /wallet/:id/consolidate`: Consolidate assets to a single address

#### 💸 Transaction Operations
- `POST /wallet/:id/send`: Send native tokens from a wallet
- `GET /wallet/:id/transaction/:hash`: Retrieve a wallet-specific transaction
- `GET /transaction/:hash`: Retrieve a transaction by hash
- `POST /webhook/transaction`: Register a webhook to monitor wallet transactions

#### 🪙 Token Operations
- `POST /wallet/:id/token/:contract/send`: Send a token from a wallet
- `POST /wallet/:id/token/:contract/consolidate`: Consolidate a token to a single address
- `GET /wallet/:id/token/:contract/transfer/:hash`: Retrieve a specific token transfer
- `GET /token/:contract/transfer/:hash`: Retrieve token transfer by hash
- `GET /token/:contract/status`: Get token contract status
- `POST /webhook/token`: Register a webhook for token events

#### ⚙️ Misc
- `GET /ping`: Health check endpoint
- `GET /gas-price`: Retrieve current gas price

### **Technology Stack**

- **Language**: NodeJs
- **Containerization**: Docker (Dockerfile and docker-compose setup provided)
- **API Testing & Docs**: Postman collections and Swagger/OpenAPI (optional) documentation

### Ecosystem Fit

#### **Where and how does your project fit into the ecosystem?**

This project provides a secure and developer-friendly **RESTful API** for managing wallets, tokens, and transactions in the **Polkadot** ecosystem. It targets use cases where cloud-native applications require backend infrastructure to interact with Substrate-based chains, without needing to directly integrate low-level SDKs or build blockchain logic from scratch. 

By exposing common wallet operations, transaction handling, and webhook support through a simple API, our project lowers the barrier to entry for developers building on Polkadot, especially in backend-heavy or non-browser-based environments.

#### **Who is your target audience?**

- **Backend Developers** building APIs, bots, SaaS, or server-side tools for Polkadot.
- **DApp Teams** that need backend support to manage multisig wallets or handle transactions programmatically.
- **Wallet Projects** looking for a modular backend to power their frontends.
- **Integration Providers** working with Polkadot and needing webhook-driven architectures.
- **Research & Enterprise Teams** evaluating Substrate-based solutions in secure cloud environments.

#### **What need(s) does your project meet?**

- **Cloud-Native Wallet Infrastructure**: Securely manage Polkadot wallets from a server environment.
- **Token & Transaction Automation**: Enable backends to handle transfers, webhook callbacks, and gas monitoring.
- **Abstraction of Blockchain Complexity**: Developers can interact with simple API calls instead of learning low-level Substrate primitives.
- **Multichain, Multiwallet Capabilities**: Supports wallet consolidation, token sending, and multi-address management.

#### **How did you identify these needs?**

- From direct experience building multisig wallet infrastructure across **Ethereum**, **Binance Smart Chain**, and **Tron** ecosystems ([GitHub links](https://github.com/ebartile)).
- Discussions in forums like [Polkadot Watercooler](https://forum.polkadot.network/), and GitHub issues where developers request help managing keys and interacting with Substrate programmatically.
- Gaps in tooling noted in current developer experience with Substrate SDKs and APIs, especially for backend-first workflows.

**How we differ**:
- **API-first** and designed for **server-side** usage, not end-user apps.
- Focused on **wallet orchestration**, not frontend wallet UIs.
- Modular design allowing **extension to parachains** or other Substrate runtimes.

#### **Are there any projects similar to yours in related ecosystems?**

Yes, and they demonstrate demand for this type of infrastructure:

- **TronGrid** – A server-side interaction layer for TRON.

These precedents confirm that such infrastructure is essential as ecosystems mature.

However, **Polkadot lacks an open-source, self-hosted backend wallet API** that abstracts chain interactions while maintaining compatibility with Substrate primitives. Our project fills this gap by delivering a solution that is **open**, **extensible**, and **ready for parachain integrations**.

### Team members

- Bartile Emmanuel

### Contact

- **Contact Name:** Bartile Emmanuel
- **Contact Email:** ebartile@gmail.com
- **Website:** https://github.com/ebartile

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

Our team has a proven track record in developing multisignature wallet solutions for Ethereum, Binance Smart Chain, and Tron, as evidenced by our previous projects:

- Ethereum: [ethereum-multisignature-wallet](https://github.com/ebartile/ethereum-multisignature-wallet)

- Binance Smart Chain: [binance-multisignature-wallet](https://github.com/ebartile/binance-multisignature-wallet)

- Tron: [tron-multisignature-wallet](https://github.com/ebartile/tron-multisignature-wallet)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/ebartile

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/emmanuelbartile

Perfect! Let's revise the **milestones** and **tech stack references** to better reflect a **Node.js-based implementation**. Here's the updated version:

---

## 🧾 Development Status

**Pending funding**

### Overview

- **Total Estimated Duration:** 2 months  
- **Full-Time Equivalent (FTE):** 1.5  
- **Total Costs:** 16,000 USD  
- **DOT %:** 50%

---

### **Milestone 1 — Core Node.js Wallet API & Webhook Infrastructure**

- **Estimated Duration:** 1 month  
- **FTE:** 1.5  
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| ------:| ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Inline JSdoc-style documentation + a tutorial (Markdown or Postman collection) on creating wallets, checking balances, and sending transactions using the API. |
| **0c.** | Testing and Testing Guide | Mocha/Chai-based test suite. A guide will describe how to run tests using `npm test`. |
| **0d.** | Docker | A `Dockerfile` and `docker-compose.yml` to spin up the API server and webhook handler locally. |
| **1.** | Wallet API (Node.js, Express) | A REST API for generating Substrate-compatible wallets (e.g., using `@polkadot/util-crypto`), querying balances, and exporting encrypted keys. |
| **2.** | Transaction Service | Endpoint to send DOT tokens using `@polkadot/api`, with support for transfer status tracking. |
| **3.** | Webhook Service | Allow users to register webhook URLs to receive transaction updates and address activity notifications. |
| **4.** | Auth & Rate Limiting | JWT-based auth and rate-limiting middleware using `express-jwt` and `express-rate-limit`. |
| **5.** | Chain Compatibility | Supports Westend and Rococo by default; ready for Polkadot mainnet config via `.env` file. |

---

### **Milestone 2 — Multiwallet, Batch TXs & Advanced Security**

- **Estimated Duration:** 1 month  
- **FTE:** 1.5  
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| ------:| ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Add sections for multiwallet and batch transfers. Include Swagger/OpenAPI specs. |
| **0c.** | Testing and Testing Guide | Add tests for multiwallet logic, 2FA auth layer, and batch transaction execution. |
| **0d.** | Docker | Updated Docker setup reflecting new services and background workers. |
| **0e.** | Article | Publish “Building Wallet-as-a-Service on Polkadot with Node.js” on Dev.to/Medium or similar. |
| **1.** | Multiwallet Module | Support multiple labeled wallets per user. Endpoints to list, tag, delete, or export wallets. |
| **2.** | Batch Transfer Endpoint | Send tokens to multiple recipients in one API call. Internally batches using Polkadot `utility.batch`. |
| **3.** | Security Enhancements | AES encryption for wallet seeds (using `crypto` module), and optional 2FA via email/OTP. |
| **4.** | Analytics & Logs API | Endpoint for users to view webhook logs, wallet usage, transaction history, and token flow. |

---

## 🚀 Future Plans

- **Monetization & Sustainability**  
  We will host a **cloud-based version of the service** with freemium tiers for developers, along with consulting and integration services for parachains and wallets.

- **Short-Term Expansion**  
  - Launch SDKs for Node.js and Python.
  - Extend webhook events for NFTs, multisig activity, and staking.
  - Add GraphQL option for developer flexibility.

- **Long-Term Vision**  
  We aim to become the **go-to wallet-as-a-service (WaaS) provider** for Polkadot-based ecosystems — plug-and-play secure wallet infrastructure that other devs can rely on, especially for mobile and backend integrations.

---

## ➕ Additional Information

**How did you hear about the Grants Program?**  
Google Search while exploring wallet infrastructure options on Polkadot.
