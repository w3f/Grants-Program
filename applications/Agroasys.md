
# Agroasys

- **Team Name:** Agroasys Labs
- **Payment Details:**
  - **DOT**: 1U1XRcPB1bw5jKVR9ovTavsGeAVGqNKBzHuSh19GVqj1skL
  - **Payment**: 1U1XRcPB1bw5jKVR9ovTavsGeAVGqNKBzHuSh19GVqj1skL (USDC)
- **Level:** 2 

## Project Overview :page_facing_up:

### Overview

Agroasys is a Web3-powered settlement and Ricardian contract layer for agricultural trade Infrastructure across Africa.

Agroasys is a decentralized, non-custodial agricultural trade settlement platform designed to make cross-border agri-trade legally enforceable, transparent, and frictionless. It integrates Ricardian Contracts—cryptographically signed, human-readable agreements—with a Polkadot AssetHub Smart Contract layer that locks funds, stores contract hashes, and executes conditional settlements via Oracle triggers.

The system targets exporters, aggregators, and buyers who require trustworthy trade contracts that bridge real-world legal enforceability and blockchain transparency. Agroasys achieves this by combining PolkaVM (Solidity) Smart Contracts, Non-Custodial MPC Wallets (via Web3Auth) for invisible user onboarding, and Oracle Services that verify logistics data to automate fund release.

### Project Details

A Web3-enabled digital agricultural trade infrastructure that replaces opaque, high-friction cross-border workflows with cryptographically verifiable Ricardian Contracts and programmable settlement logic.

The system moves away from centralized custody, utilizing non-custodial wallets where users retain full control of their keys (via Multi-Party Computation), while the platform acts only as an Oracle providing logistics data to the blockchain.

#### UI Mockups & UX Components
The platform will include:

- **Contract Creation UI**: Form-driven builder for parameterizing Ricardian Contracts (goods, Incoterms, delivery windows, penalties, quantities).
- **Invisible Wallet Interface**: A seamless dashboard where enterprise users interact with Web3 via email login (MPC), without managing seed phrases directly.

Settlement Dashboard: Real-time view of Smart Contract states (Locked, In-Transit, Released) and Oracle triggers.

![Screenshot 2025-11-14 at 18 31 56](https://github.com/user-attachments/assets/65bb8713-9764-4563-92b2-c2603e5eb734)

![Screenshot 2025-11-14 at 18 32 08](https://github.com/user-attachments/assets/70fe4a1e-0002-41e9-8e86-317f5a462e6c)

![Screenshot 2025-11-14 at 18 40 51](https://github.com/user-attachments/assets/3b384719-adbb-47af-868b-edf8fd870ca3)

![Screenshot 2025-11-14 at 18 41 02](https://github.com/user-attachments/assets/ae9d787c-eafb-4b71-8fe0-268282020112)

#### Data models / API specifications of the core functionality
The core platform uses a modular enterprise architecture with non-custodial wallet management.

**Core Data Models:**
- **Contract Schema**: Off-chain Ricardian contracts (PDFs) with SHA-256 hashes stored in Smart Contract state.
- **User Identity**: KYB-verified enterprise profiles mapped to non-custodial Polkadot addresses.
- **Escrow Logic**: Smart Contract states managing the "Buyer-Pays-All" fee model (Product Price + Logistics Fees).
- **Oracle Events**: Logistics status updates (Shipped/Arrived) that trigger on-chain state changes.

**API Specifications:**
- **Settlement API**: Interfaces between the frontend and the Smart Contract for creating trades and locking funds.
- **Ricardian API**: Generates legal PDFs, calculates hashes, and coordinates signing.
- **Oracle API**: Relays verified logistics data (DHL/Maersk) to the Smart Contract to trigger fund release.
- **Indexing API**: Syncs on-chain Smart Contract events with the off-chain Postgres database for reconciliation.

### Technology Stack

**Blockchain Layer**: Polkadot AssetHub (PolkaVM)
- **PolkaVM (Pallet-Revive)**: For deploying Solidity-based Escrow Smart Contracts.
- **Assets Pallet**: For native USDC storage and transfers.
- **Asset Conversion Pallet**: For automated gas fee swapping (paying fees in USDC).

**Wallet & Security System**:
- **Non-Custodial MPC**: Web3Auth integration for seedless, self-custodial key management.
- **Client-Side Signing**: All transactions are signed locally on the user's device; the platform never sees private keys.
- **KYT/AML Engine**: Real-time wallet screening before smart contract interaction.

**Backend Services**:
- **Node.js/NestJS**: API Gateway and Business Logic.
- **Ricardian Service**: PDF generation and Hashing.
- **Oracle Service**: Trusted data relay for logistics events.
- **Postgres**: User profiles and trade metadata.
- **Redis**: Rate limiting and caching.

**Security & Monitoring**:
- Fraud detection with rate limiting and anomaly detection
- Comprehensive monitoring and alerting
- Immutable audit logs for legal compliance

#### Core Architecture & Protocol Documentation;
Our architecture connects traditional enterprise procurement with blockchain-based verification using Polkadot AssetHub's Smart Contract capabilities.

**Contract Creation & Signing**:
1. **Ricardian Generation**: Engine transforms trade terms into a PDF and generates a SHA-256 hash.
2. **Client-Side Signing**: User signs the hash using their non-custodial MPC wallet.
3. **Smart Contract Lock**: The signature and hash are passed to the Escrow Smart Contract on AssetHub, which locks the Buyer's USDC.

**Settlement Flow**:
1. **Logistics Trigger**: Logistics partners (real-world) update shipment status.
2. **Oracle Execution**: The Agroasys Oracle Service relays this data to the Smart Contract.
3. **Automated Release**: The Smart Contract verifies the condition and executes the split payment (100% to Supplier, Fees to Logistics/Treasury).
4. **Reconciliation**: Indexers catch the on-chain event and update the user dashboard.

![user flow](https://github.com/user-attachments/assets/09441121-1ac0-4ab0-b789-a6b87ad2c9a3)

**Enterprise Integration**:
- **Invisible Onboarding**: Enterprise users login via SSO, with wallets generated in the background.
- **Legal Enforceability**: The on-chain hash is cryptographically bound to the off-chain PDF (Ricardian).
- **Compliance**: "Gatekeeper" middleware ensures only KYB-verified and AML-screened wallets can interact with the contracts.

**Data Integrity & Verification**:
- **On-Chain Proofs**: Cryptographic commitments are stored directly in Smart Contract State, creating an immutable link between the locked funds and the Ricardian Contract hash.
- **Off-Chain Storage**: Sensitive documents (PDFs) are encrypted with enterprise-grade security and stored off-chain, linked only by their hash.
- **Reconciliation**: Automated settlement matching between on-chain Smart Contract events and off-chain database records.
- **Audit Trails**: Complete transaction history exportable for legal proceedings, proving exactly which document hash was active when funds were locked.

![web3layer](https://github.com/user-attachments/assets/8cc6b3fd-c561-4635-9530-3d6b1d255286)


### Ecosystem Fit

Agroasys leverages Polkadot's PolkaVM (Revive) on AssetHub to bring programmable, legally enforceable trade settlements to Africa. By using Smart Contracts instead of simple transfers, we enable complex logic (partial releases, fee splitting, dispute timers) without building a custom parachain.

**Why Polkadot & AssetHub:**
- **PolkaVM**: Allows us to deploy standard Solidity logic for Escrow directly on the system chain.
- **Native USDC**: AssetHub holds the liquidity required for B2B trade.
- **Low Fees**: The Asset Conversion pallet allows users to pay gas in USDC, removing the need to hold DOT.

**Addressing Real Market Needs:**
- **$10B Serviceable Market** in Global agricultural trade corridors
- **5-12% bank fee reduction** through USDC settlements and streamlined reconciliation
- **Trustless Settlement**: Removing the need for the platform to hold funds (Custodial Risk).
- **Legal Clarity**: Ricardian contracts provide the evidence needed for local courts, while Smart Contracts ensure execution.
- **Frictionless UX**: Non-custodial MPC removes the "Crypto Barrier" for traditional agri-businesses.

**Ecosystem Contributions:**
- **Open-source reference implementation** for agricultural trade settlement on Polkadot
- **Real-world enterprise adoption** bringing traditional businesses into the Web3 ecosystem
- **Cross-border settlement patterns** that can be replicated across emerging markets
- **Legal framework development** for Ricardian contract enforceability in African jurisdictions

**Strategic Alignment with Polkadot:**
- **Web3 Foundation Mission**: Bringing blockchain to real-world use cases
- **Enterprise Focus**: Targeting established agricultural exporters and buyers
- **Emerging Markets**: Expanding Web3 adoption in high-growth African economies
- **Sustainable Model**: Revenue-generating platform that doesn't require ongoing grants

Agroasys serves agricultural exporters, cooperatives, and enterprise buyers requiring transparent, low-cost digital settlements. We provide a trust layer that digitizes and verifies contracts and transactions between stakeholders.
Within the Polkadot ecosystem, we enable parachain and dApp developers to integrate our modules for contract verification, settlement proofs, and agricultural data oracles. This dual approach ensures real-world adoption while contributing technical interoperability to the broader Web3 ecosystem. The platform functions as both a standalone application and an interoperable service module that other parachains can integrate for agricultural contract verification and settlement tracking.

These needs were validated through multi-stakeholder interviews, East Africa trade data ([Trademark Africa](https://trademarkafrica.com/tracking-east-africas-top-agricultural-commodities-and-export-destinations-new-report/#:~:text=East%20Africa's%20agricultural%20trade%20is,demands%20require%20urgent%20policy%20interventions.)), and World Bank reports highlighting the inefficiencies of Africa’s agri-export payments and the 30–40% loss in transaction value due to intermediaries ([World Bank: Digitalizing Agricultural Payments in Sub-Saharan Africa](https://www.worldbank.org/en/publication/globalfindex/brief/data-from-the-global-findex-2021-digitalizing-agricultural-payments-in-sub-Saharan-africa)). Field discussions with over 100 traders in East Africa and Middle East alone revealed a consistent lack of trust in payment and contract enforcement systems, confirming strong demand for tamper-proof, digitally signed contracts and blockchain-based settlements.

Within the Polkadot/Substrate ecosystem, few projects currently address agricultural settlement infrastructure. Projects like [Centrifuge](https://centrifuge.io/), [Peaq Network](https://www.peaq.xyz/), and [Pendulum](https://www.pendulumchain.org/) explore real-world asset tokenization and financial bridges, but none focus on agricultural trade contracts, Ricardian logic, or Africa’s agricultural export economy. Agroasys introduces a new use case: sector-specific contract enforcement integrated with blockchain-based settlement verification, designed to comply with Global trade laws.

While other blockchain ecosystems have generic supply chain solutions, they face scalability, cost, and regional relevance limitations. Agroasys leverages Substrate's modularity and Polkadot's cross-chain capabilities to deliver a specialized, legally compliant settlement layer that connects African agricultural stakeholders directly to the global blockchain economy.
 
## Team :busts_in_silhouette:

### Team members

- **Mrisho Lukamba** - Blockchain Engineer & Cryptography Specialist [Github](https://github.com/MrishoLukamba) | [Linkedin](https://www.linkedin.com/in/mrisho-lukamba/)
- **Aston Steven** - Product lead, [Github](https://github.com/Astonstevn) | [Linkedin](https://www.linkedin.com/in/aston-steven/)
- **Akpolo OgagaOghene** - UX/UI Lead, [Github](https://github.com/ogazboiz)
- **Samuel Oladele** - Senior Blockchain Engineer, [Github](https://github.com/blurbeast) | [X](https://twitter.com/dleexes) | [Linkedin](https://www.linkedin.com/in/oladele-banjo-553b65b1)

### Contact

- **Contact Name:** Aston steven
- **Contact Email:** astonsteven65@gmail.com
- **Website:** www.agroasys.com

### Legal Structure

- **Registered Address:** Plot No. 84 Kinondoni Rd, Dar es Salaam, Tanzania  
- **Registered Legal Entity:** Agroasys Company Limited

### Team's experience

### Team Code Repos

- **Mrisho Lukamba** - Mrisho Lukamba is an innovative blockchain engineer and cryptography specialist with a strong foundation in mathematics and physics. He previously worked as an engineer at TONOMUS NEOM and contributed to Class Lambda, giving him hands on experience designing cryptographically secure architectures and Web3 infrastructure for African markets. At Agroasys he leads the integration of Polkadot based settlement layers, focuses on transaction throughput and finality, and hardens the platform’s cryptographic integrity, key management, and verification pipelines. Some of his nootable works include: [Succist-summer](https://github.com/MrishoLukamba/succinct-summer-2.5) | [madara](https://github.com/MrishoLukamba/madara) | [Vane.web3](https://github.com/MrishoLukamba/vane_web3). He also was able to apply for a grant at the Web3 Foundation previously on the project [CumulusProver.md](https://github.com/MrishoLukamba/Grants-Program/blob/master/applications/CumulusProver.md), [Github](https://github.com/MrishoLukamba)

- **Akpolo OgagaOghene** - is a full-stack developer and Web3 engineer with hands-on experience building scalable, high-performance web applications and blockchain-enabled systems. He works across React, Next.js, and Node.js to deliver production-ready user interfaces and APIs, and develops smart contracts using Solidity and Hardhat with seamless Web3 integration. His expertise spans performance optimization, smart contract interaction, and the design of scalable, efficient web applications that bridge modern frontend systems with decentralized infrastructure. Some of his notable works include: [quantumdex-smartcontracts](https://github.com/ogazboiz/quantumdex-smartcontracts) | [VaultsIQ-smartcontracts](https://github.com/ogazboiz/VaultsIQ-smartcontract) | [HabiTrac](https://github.com/ogazboiz/HabiTrac) | [Chilly](https://github.com/ogazboiz/chilly)

- **Samuel Oladele** - is a blockchain and full-stack engineer with strong proficiency across Rust, Java, TypeScript, and Solidity. He shares deep experience in full-stack web development and smart contract engineering, building scalable applications and Web3-integrated systems using modern frameworks and tooling. His multidisciplinary skill set enables him to work effectively across low-level systems, backend services, and blockchain protocols, strengthening the team’s ability to build secure, performant, and future-ready decentralized applications. Some of his notable works include: [Pool Trust](https://github.com/blurbeast/pool_trust) | [Rosca](https://github.com/blurbeast/rosca) | [Treasury Hub - Community Governance Platform](https://github.com/blurbeast/treasury_gov_client)

- **Aston Steven** - is the project lead and an experienced Web3 founder across East Africa who has driven regional initiatives including the launch of East Africa and Tanzania Web3 chambers. He has championed the adoption of Ricardian contracts in the region, led grant and partnership efforts with major foundations, and represents Agroasys in investor and government engagements. At Agroasys he connects product strategy, legal enforceability, and market partnerships to ensure the platform is both visionary and deliverable.

## Development Status :open_book:

#### Prior Work :building_construction:

To ensure this grant focuses strictly on Web3 infrastructure, it is important to distinguish between the **Agroasys Marketplace (Web2 Layer)**, which is already built, and the **Web3 Settlement Layer**, which is the subject of this proposal.

#### 1. Completed: The Agroasys Marketplace (Client Layer)
We have already designed, developed, and deployed the core marketplace infrastructure. This layer handles the business logic, user interfaces, and trade negotiation workflows.
* **Frontend & UI:** The React-based dashboards for Contract Creation, Trade Negotiation, and User Management are complete (as seen in the "UI Mockups" section).
* **Off-Chain Database:** The Postgres schemas for User Identity, KYC data, and commodity tracking are implemented.
* **Matchmaking Engine:** The logic connecting buyers to cooperatives is functional.
* **Document Generation:** The engine that compiles trade terms into a human-readable PDF (the visual representation of the Ricardian contract) is built.

#### 2. To Be Built: The Web3 Integration (The Grant Scope)
The grant focuses exclusively on the "Blockchain Integration Layer".

- **The Grant covers:**
    - Developing the Smart Contract Escrow (Solidity on PolkaVM).
    - Integrating Web3Auth for non-custodial MPC wallets.
    - Building the Oracle Service to trigger smart contracts based on logistics data.
    - Implementing the Ricardian Hashing Bridge (connecting PDFs to Chain state).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 10 weeks
- **Full-Time Equivalent (FTE):** 3 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 Smart Contract Escrow & Ricardian Architecture

- **Estimated duration:** 6 weeks
- **FTE:**  2
- **Costs:** 16,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how to set up and run the system, including how to deploy the Solidity Smart Contracts to PolkaVM on AssetHub, how to generate a Ricardian hash, and how to verify the on-chain state via a block explorer. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests using Hardhat or Foundry to ensure functionality and robustness. In the guide, we will describe how to run these tests to verify the deposit, locking, and release mechanisms of the smart contract. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone, spinning up a local node and the Ricardian service. |
| 0e. | Article | We will publish an article that explains the Ricardian-to-Smart-Contract bridge architecture on Polkadot, detailing how off-chain legal documents are cryptographically bound to on-chain execution via PolkaVM. |
| 1. | Escrow Smart Contracts | We will develop the Solidity-based Escrow Smart Contracts compatible with PolkaVM. This module will include the `CreateTrade` function (which locks USDC and stores the Ricardian Hash), the `ReleaseFunds` function (which executes the logic to split payments between Supplier and Treasury), and the `dispute` mechanism. |
| 2. | Ricardian Service | We will build a backend service (Python/Node.js) that accepts trade parameters, generates a PDF contract based on a standard template, calculates the SHA-256 hash of the document, and formats the output for the frontend to initiate the smart contract call. |
| 3. | AssetHub Integration | We will create deployment scripts and interaction modules that interface with AssetHub’s `Assets` pallet (for USDC handling) and `AssetConversion` pallet (for gas fee abstraction), ensuring the Smart Contracts can interact natively with the chain. |
| 4. | Event Indexer | We will develop a custom indexer (using SubQuery or Squid) that listens for specific Smart Contract events (e.g., `TradeLocked`, `FundsReleased`) and syncs this state to a local database to allow the API to query the status of trades. |

### Milestone 2 Non-Custodial Integration & Oracle Service

- **Estimated Duration:** 4 weeks
- **FTE:**  3
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0
| **0b.** | Documentation | We will provide documentation and tutorials for setting up the Web3Auth SDK integration, configuring the Oracle API endpoints, and running the full settlement flow from the frontend. |
| **0c.** | Testing and Testing Guide | We will deliver integration tests ensuring that Web2 logistics data correctly triggers on-chain Smart Contract functions. The guide will verify that the Oracle signatures are correctly validated by the Smart Contract before funds are released. |
| **0d.** | Docker | We will provide Docker containers for the Oracle Service and Settlement API to facilitate easy deployment and testing. |
| 0e. | Article | We will publish an article demonstrating the "Invisible Wallet" user experience for enterprise agriculture, showing how non-custodial MPC wallets lower the barrier to entry for Web3 trade. |
| 1. | Web3Auth Integration |  We will implement the Web3Auth Multi-Party Computation (MPC) SDK into the React frontend. This module will enable email-based login and handle the client-side signing of the `createTrade` transaction using the generated non-custodial private key.  |
| 2. | Oracle Verification Service | We will build a secure backend Oracle service that acts as the "Validation Layer." It will include logic to ingest logistics webhooks (simulating DHL/Maersk), verify the data against the trade terms, and cryptographically sign the "release" transaction using a designated Oracle key. |
| 3. | Settlement API | We will develop the orchestration API that connects the user dashboard to the blockchain. This includes error handling, gas estimation for the Asset Conversion pallet, and broadcasting the signed transactions to the network.|
| 4. | End-to-End Test Suite |  We will create a comprehensive end-to-end integration test suite that simulates a complete trade lifecycle: User Login (MPC) -> PDF Generation -> Client-Side Signing -> Smart Contract Lock -> Oracle Verification -> Fund Release. |
...

## Future Plans

Our long-term sustainability will be financed through recurring revenue from platform commissions (automatically split via Smart Contract), enterprise integrations, and commercial pilot conversions. In the short term, we will enhance and promote the project by scaling our Polkadot integration and executing a regional expansion into East Africa, West Africa and Middle East.

## Referral Program :moneybag:

- **Referrer:** Bekka, DevRel Lead at Polkadot Africa

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
I learned about the Grants Program through direct engagement with the ecosystem, including a Polkadot event I participated in and subsequent meetings with several members of the Web3 Foundation team.

---
