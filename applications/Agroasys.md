# Agroasys



- **Team Name:** Agroasys Tech
- **Payment Details:**
  - **DOT**: 1U1XRcPB1bw5jKVR9ovTavsGeAVGqNKBzHuSh19GVqj1skL
  - **Payment**: 1U1XRcPB1bw5jKVR9ovTavsGeAVGqNKBzHuSh19GVqj1skL (USDC)
- **Level:** 2 



## Project Overview :page_facing_up:



### Overview

Agroasys is a Web3-powered settlement and Ricardian contract layer for agricultural trade Infrastructure across Africa.

Agroasys is a decentralized agricultural trade settlement platform designed to make cross-border agri-trade legally enforceable, transparent, and tamper-evident. It integrates Ricardian Contracts,  cryptographically signed, human-readable agreements with a Substrate-based anchoring layer that stores contract proofs, settlement states, and signatures on-chain. Off-chain logic manages the legal, operational, and UX layers, while on-chain proofs ensure integrity, auditability, and dispute resolution.

The system targets exporters, aggregators, and buyers who require trustworthy trade contracts that can bridge real-world legal enforceability and blockchain transparency. Agroasys achieves this by combining cryptographic settlement proofs, data models aligned with trade laws, and developer-accessible APIs for integrating contract signing and verification into existing enterprise workflows.

### Project Details

A Web3-enabled digital agricultural trade infrastructure that replaces opaque, high-friction cross-border workflows with cryptographically verifiable Ricardian Contracts, deterministic settlement rails, and auditable supply-chain data flows. The system leverages Substrate-based primitives to guarantee contract integrity, minimize counterparty risk, and provide programmable settlement logic for inter-continental agri-trade.

#### UI Mockups & UX Components
The platform will include:

- **Contract Creation** UI: Form-driven builder for parameterizing Ricardian Contracts (goods, Incoterms, delivery windows, penalties, quantities).
- **Settlement Dashboard**: Real-time view of on-chain settlement status, proofs, and cross-border transactions.

<img width="1470" height="835" alt="Screenshot 2025-11-14 at 18 31 56" src="https://github.com/user-attachments/assets/65bb8713-9764-4563-92b2-c2603e5eb734" />

<img width="1470" height="835" alt="Screenshot 2025-11-14 at 18 32 08" src="https://github.com/user-attachments/assets/70fe4a1e-0002-41e9-8e86-317f5a462e6c" />

<img width="1470" height="835" alt="Screenshot 2025-11-14 at 18 40 51" src="https://github.com/user-attachments/assets/3b384719-adbb-47af-868b-edf8fd870ca3" />

<img width="1470" height="835" alt="Screenshot 2025-11-14 at 18 41 02" src="https://github.com/user-attachments/assets/ae9d787c-eafb-4b71-8fe0-268282020112" />


We have prepared a complete prototype of the Agroasys Web3 platform in Lovable. It includes all essential workflows and interface screens that reflect the final production architecture. As Lovable requires login for preview access, we will provide the private link and temporary credentials directly to the reviewers. This prototype also includes the conceptual layout of our initial PoC for comparison, showing clear UX and workflow improvements.


#### Data models / API specifications of the core functionality
The core platform uses a modular enterprise architecture with custodial wallet management.

**Core Data Models:**
- **Contract Schema**: Off-chain Ricardian contracts with on-chain hash commitments via `system.remark`
- **User Identity**: KYC-verified enterprise profiles with custodial wallet mappings
- **Settlement Flow**: Multi-party approval workflows with USDC settlement tracking
- **Audit Trail**: Comprehensive event logging for legal verification

**API Specifications:**
- **Settlement API**: Initiate/confirm USDC-based settlement flows
- **Identity API**: KYC/KYB verification and custodial wallet management
- **Contract API**: Ricardian contract generation, signing coordination, and anchoring
- **Verification API**: On-chain proof verification and audit evidence export

### Technology Stack

**Blockchain Layer**: Polkadot AssetHub primitives
- `system.remark` for contract hash anchoring and metadata
- `Assets` pallet for USDC transfers and settlement
- No custom runtime logic required

**Custodial Wallet System**:
- Platform-managed keys secured by KMS/HSM
- Multi-party transaction signing coordination
- Enterprise-grade security with fraud detection

**Backend Services**:
- Python/Django for business logic and orchestration
- Node.js API gateway with GraphQL endpoints
- Postgres for user profiles and transactional data
- Encrypted document storage for contracts
- Redis for real-time notifications and caching

**Security & Monitoring**:
- Fraud detection with rate limiting and anomaly detection
- Comprehensive monitoring and alerting
- Immutable audit logs for legal compliance
#### Core Architecture & Protocol Documentation
Our architecture connects traditional enterprise procurement with blockchain-based verification using Polkadot AssetHub's existing primitives.

**Contract Creation & Signing**:
1. **Contract Generation**: Ricardian Contract Engine transforms trade agreements into legally-sound digital contracts
2. **Multi-Party Coordination**: Platform coordinates signing between buyers and cooperatives using custodial wallets
3. **Hash Anchoring**: Contract hashes are anchored on-chain via AssetHub's `system.remark` for immutable verification
4. **Document Storage**: Full contracts stored in encrypted off-chain storage with legal-grade preservation

**Settlement Flow**:
1. **Payment Initiation**: Buyer approves settlement through platform interface
2. **Custodial Signing**: Platform retrieves buyer keys from KMS/HSM and signs USDC transfer
3. **AssetHub Execution**: USDC transfer executed via AssetHub's `Assets` pallet
4. **Event Indexing**: Settlement events captured and reconciled with off-chain records
5. **Commission Processing**: Platform fees automatically calculated and routed to treasury

**Enterprise Integration**:
- **Event-Driven Architecture**: Asynchronous processing with retry logic and error handling
- **Fraud Prevention**: Real-time anomaly detection and rate limiting
- **Legal Compliance**: Audit evidence export for court verification
- **Monitoring**: Comprehensive health checks and performance metrics

**Data Integrity & Verification**:
- **On-Chain Proofs**: Cryptographic commitments via `system.remark` provide tamper-resistant verification
- **Off-Chain Storage**: Sensitive documents encrypted with enterprise-grade security
- **Reconciliation**: Automated settlement matching between on-chain events and off-chain records
- **Audit Trails**: Complete transaction history exportable for legal proceedings

<img width="14256" height="11211" alt="Chain arch" src="https://github.com/user-attachments/assets/c5451752-7faa-4709-9ff5-f9ef9873eb43" />



### Ecosystem Fit

Agroasys leverages Polkadot's production-ready AssetHub to bring tamper-evident, legally enforceable Ricardian contracts and cryptographic settlement proofs to Africa's agricultural value chains. Our platform bridges the gap between traditional enterprise trade and Web3 infrastructure by utilizing Polkadot's existing primitives for maximum security and reliability.

**Why Polkadot & AssetHub:**
- **Enterprise-Grade Infrastructure**: AssetHub provides the stable, audited foundation required for real-world trade settlements
- **Production-Ready Primitives**: We use `system.remark` for contract verification and the `Assets` pallet for USDC settlements - no custom runtime risk
- **Shared Security**: Leverages Polkadot's battle-tested security model without the overhead of maintaining a parachain
- **Interoperability Ready**: Built on XCM-enabled infrastructure for future cross-chain expansion

**Addressing Real Market Needs:**
- **$10B Serviceable Market** in East African agricultural trade corridors
- **5-12% bank fee reduction** through USDC settlements and streamlined reconciliation
- **Legal enforceability** via Ricardian contracts with Tanzanian legal framework
- **Enterprise adoption** through custodial wallets that eliminate crypto complexity

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

Within the Polkadot ecosystem, we enable parachain and dApp developers to integrate our modules for contract verification, settlement proofs, and agricultural data oracles. This dual approach ensures real-world adoption while contributing technical interoperability to the broader Web3 ecosystem.

The platform functions as both a standalone application and an interoperable service module that other parachains can integrate for agricultural contract verification and settlement tracking.


These needs were validated through multi-stakeholder interviews, East Africa trade data ([Trademark Africa](https://trademarkafrica.com/tracking-east-africas-top-agricultural-commodities-and-export-destinations-new-report/#:~:text=East%20Africa's%20agricultural%20trade%20is,demands%20require%20urgent%20policy%20interventions.)), and World Bank reports highlighting the inefficiencies of Africa’s agri-export payments and the 30–40% loss in transaction value due to intermediaries ([World Bank: Digitalizing Agricultural Payments in Sub-Saharan Africa](https://www.worldbank.org/en/publication/globalfindex/brief/data-from-the-global-findex-2021-digitalizing-agricultural-payments-in-sub-Saharan-africa)). Field discussions with over 100 traders in East Africa and Middle East alone revealed a consistent lack of trust in payment and contract enforcement systems, confirming strong demand for tamper-proof, digitally signed contracts and blockchain-based settlements.

Within the Polkadot/Substrate ecosystem, few projects currently address agricultural settlement infrastructure. Projects like [Centrifuge](https://centrifuge.io/), [Peaq Network](https://www.peaq.xyz/), and [Pendulum](https://www.pendulumchain.org/) explore real-world asset tokenization and financial bridges, but none focus on agricultural trade contracts, Ricardian logic, or Africa’s agricultural export economy. Agroasys introduces a new use case: sector-specific contract enforcement integrated with blockchain-based settlement verification, designed to comply with East African and Global trade laws.

While other blockchain ecosystems have generic supply chain solutions, they face scalability, cost, and regional relevance limitations. Agroasys leverages Substrate's modularity and Polkadot's cross-chain capabilities to deliver a specialized, legally compliant settlement layer that connects African agricultural stakeholders directly to the global blockchain economy.
 

## Team :busts_in_silhouette:



### Team members

- Aston Steven
- Names of team members

### Contact

- **Contact Name:** Aston steven
- **Contact Email:** astonsteven65@gmail.com
- **Website:** www.agroasys.com

### Legal Structure

- **Registered Address:** Plot No. 84 Kinondoni Rd, Dar es Salaam, Tanzania  
- **Registered Legal Entity:** Agroasys Company Limited


### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/{your_organisation}/{project_1}
- https://github.com/{your_organisation}/{project_2}

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/{team_member_1}
- https://github.com/{team_member_2}

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/{person_1}
- https://www.linkedin.com/{person_2}


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://grants.web3.foundation/docs/rfps) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 10 weeks
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 AssetHub-Integrated Ricardian Contract System

- **Estimated duration:** 6 weeks
- **FTE:**  1
- **Costs:** 16,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how to set up and run the system, including how to send test transactions to AssetHub to anchor contract hashes and how to observe the events. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains the Ricardian contract system and how it integrates with AssetHub, including the benefits for agricultural trade in Africa. |
| 1. | Ricardian Contract Service |  We will build a system that generates, hashes, and coordinates multi-party signing of Ricardian contracts with document storage and encryption |
| 2. | AssetHub Anchor Service | We will create a service that integrates with AssetHub's `system.remark` for contract hash anchoring and `Assets` pallet for USDC operations . |
| 3. | Event Indexer system | We will develop an indexer that captures AssetHub events and provides GraphQL APIs for contract verification |
| 4. | Deployment Framework | We will create deployment scripts for AssetHub testnet/mainnet with production readiness checklists |



### Milestone 2 Custodial Wallet System & Settlement Engine


- **Estimated Duration:** 4 weeks
- **FTE:**  2
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0
| **0b.** | Documentation | We will provide documentation and tutorials for custodial wallet setup, KMS integration, and settlement flow execution |
| **0c.** | Testing and Testing Guide | We will deliver integration tests for wallet management and settlement flows, plus guides for testing KMS/HSM interactions |
| **0d.** | Docker | We will provide Docker containers for Custodial Wallet Manager, Transaction Signer, and Settlement Engine services |
| 0e. | Article | We will publish an article that explains the Ricardian contract system and how it integrates with AssetHub, including the benefits for agricultural trade in Africa. |
| 1. | Custodial Wallet Manager |  We will create a system that generates and maps blockchain accounts to Web2 user profiles for suppliers and buyers  |
| 2. | Transaction Signer Service | We will build a secure service that communicates with KMS/HSM to sign settlement transactions without exposing private keys. |
| 3. | Settlement Engine | We will develop an orchestration service that handles the complete settlement flow: logic checks → transaction signing → AssetHub broadcasting|
| 4. | Integration Test Suite |  We will create comprehensive tests proving Web2 user actions trigger valid on-chain signatures and settlements |
...


## Future Plans

Our long-term sustainability will be financed through recurring revenue from platform commissions, enterprise integrations, and commercial pilot conversions, targeting financial independence within 12-18 months post-grant. In the short term, we will enhance and promote the project by scaling our Polkadot integration (adding audit trails, APIs, and verification mechanisms to our Substrate module) and executing a regional expansion into East Africa, West Africa and Middle East via strategic partnerships. Long-term, our vision is to become the digital backbone of Africa's agricultural trade, enabling transparent, compliant, and instant cross-border settlements powered by Polkadot.



## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
I learned about the Grants Program through direct engagement with the ecosystem, including a Polkadot event I participated in and subsequent meetings with several members of the Web3 Foundation team.

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
