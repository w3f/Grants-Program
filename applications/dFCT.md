# d-FCT: Cardano–Polkadot Provenance Bridge
<img width="1500" height="500" alt="Profile header" src="https://github.com/user-attachments/assets/0297d418-cee5-49e9-b225-a9fdadd61697" />

- **Team Name:** MOBR Systems
- **Payment Details:**
  - **DOT Vesting Address**: 169fS4nXv5hXKvofF5MZeJsa5LLC62cgq3Mkye7MSvUrmqWM (Polkadot Network).
  - **Payment Address**: 169fS4nXv5hXKvofF5MZeJsa5LLC62cgq3Mkye7MSvUrmqWM (AssetHub USDC).
- **Level:** 2

## Project Overview :page_facing_up:

**d-FCT (Decentralized Fact-Checking Toolkit)**, pronounced _de facto_, is a community-driven platform designed to redefine how online information is verified. It integrates AI-powered content analysis, decentralized governance, and token-based incentives to build a transparent, verifiable fact-checking ecosystem.

Users can upload diverse types of content (e.g., text, images, videos, or URLs) for collaborative verification. Each submission is processed through a hybrid pipeline that combines automated semantic inspection with human evaluation, producing structured knowledge artifacts that are periodically anchored on-chain for provenance and auditability.

The platform’s architecture follows a modular Web2/Web3 model:

- Off-chain components handle AI-driven content processing, natural language understanding, and claim extraction.

- On-chain components manage lifecycle state, contributor rewards, and verifiable governance.

To enable this, the team developed a state machine smart contract (dSM-Prov) that governs topic lifecycles, evidence submissions, and reward distribution, along with a second governance contract (dSM-Gov) that supports community-led decision-making. This hybrid approach ensures scalability, transparency, and long-term sustainability while rewarding meaningful participation through a native token economy. A fully functional MVP of the system has been deployed on Cardano's preview test network, demonstrating the core end-to-end flow, from content submission and analysis to verified, on-chain publication and reward distribution.

### Overview

This project introduces cross-chain provenance verification, bringing Cardano’s decentralized fact-checking state machine (dSM-Prov) into the Polkadot ecosystem through PolkaVM or EVM-compatible smart contracts combined with XCM messaging. This integration establishes the foundation for interoperable truth verification between heterogeneous blockchain environments.

The initiative aims to implement a bridge-enabled provenance module that connects Cardano’s on-chain provenance system to Polkadot. This bridge will enable cross-chain provenance attestation, allowing verified fact-checking contributions from Cardano to be transparently reflected, queried, and validated within the Polkadot ecosystem. The architecture will comprise three main components: a **smart contract** responsible for receiving and validating provenance proofs from Cardano; an **off-chain relay service** that extracts, formats, and transmits Cardano transaction metadata into standardized proof records; and an **XCM interface** that disseminates verified provenance events to participating parachains via the `dfct-prov` pallet. Together, these elements establish a verifiable, interoperable infrastructure for decentralized fact-checking across chains.

The provenance smart contract will be deployed on Polkadot Hub** or an EVM-compatible parachain such as Moonbeam. It exposes a `submit_provenance()` call to register proofs and emit `RecordStored` events upon verification. These events will be propagated via **XCM messaging** to parachains that implement the `dfct-prov` Substrate pallet, ensuring synchronized and trustless updates across the network. The **off-chain relay service** acts as the communication layer between Cardano and Polkadot, continuously monitoring on-chain transactions, validating data, and maintaining proof consistency across both ecosystems.

The initial d-FCT MVP proved the feasibility of decentralized fact-checking using Cardano’s on-chain governance and provenance system. However, provenance data currently resides within a single blockchain environment. This project expands that vision by bridging Cardano’s verified records into Polkadot’s cross-chain smart contract and XCM framework, enabling multi-chain transparency and verifiable data exchange. 

### Project Details

#### Architecture and Current Implementation

The **d-FCT architecture** is designed to handle and verify user-submitted content through a combination of specialized components. It features a **modular structure** that incorporates **Web2 and Web3 elements**, enabling scalable, transparent, and verifiable fact-checking workflows.

<img width="1920" height="1080" alt="dFCT architecture" src="https://github.com/user-attachments/assets/c100740d-cb61-4368-85b4-87e55d57d58f" />


The interaction model allows users to provide content, search input, and feedback, while consuming verified topics and facts through a streamlined interface. At its core, the system integrates **AI-assisted content analysis**, **decentralized governance**, and **on-chain provenance** to ensure the authenticity and traceability of verified information.

---

#### Backend

The backend is implemented in **Python** and manages dynamic and resource-intensive operations, facilitating communication between **off-chain and on-chain subsystems**. It handles the platform’s operational logic, including media processing, semantic data extraction, task execution, and user metrics tracking, while ensuring scalable, asynchronous processing through distributed task pipelines.

The backend also manages the **data gateway** that bridges frontend operations, AI services, and blockchain records.  
Information extraction pipelines orchestrate human and AI-assisted tasks throughout the verification process, combining semantic reasoning and factual validation.

#### Table 1 – Python Backend Main Components

| Component                 | Description                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Chain Gateway**         | Facilitates communication between off-chain processes and the blockchain. Manages smart contract interactions, transaction monitoring, and synchronization of operational data. |
| **Media Processor**       | Prepares and processes multimedia content (e.g., extracting frames, metadata, verifying media integrity, transcoding).                                                          |
| **Semantic Extraction**   | Integrates AI models and knowledge graphs to analyze submitted content, extract claims, and identify semantic relationships.                                                    |
| **Task Execution**        | Manages workflows for claim verification, coordinating both automated and human review tasks.                                                                                   |
| **User Metrics**          | Tracks user activity, engagement, and contribution quality to determine reputation and reward eligibility.                                                                      |
| **Knowledge Integration** | Structures claims and verified information within a growing knowledge graph, ensuring contextual linkage across topics.                                                         |
| **Web Crawling**          | Fetches and analyzes external data sources to provide enriched context for validation, supporting retrieval-augmented generation (RAG) processes.                               |
| **Data Gateway**          | Bridges data exchange between the frontend, backend, and on-chain systems, maintaining data consistency across layers.                                                          |

---

#### Blockchain Integration

Blockchain records and smart contracts underpin the platform’s key functionalities — including **reward distribution**, **governance**, and **provenance of contributions**.  
All records for topics, claims, and content references (e.g., user identifiers, metadata, and source links) are stored immutably on-chain.

Each transaction validates the authenticity and eligibility of a contribution before committing it to the ledger, ensuring the integrity of the verification process.  
Rewards are calculated and distributed automatically based on predefined rules that reflect contribution quality, timeliness, and reputation.

---

#### Frontend

The frontend follows a **user-centric, minimalist design** implemented in **ReactJS**, ensuring clarity and simplicity throughout the decentralized verification process.  
It allows users to connect their wallets, log in, and interact seamlessly with the system. Users can submit content for verification (text, images, videos, or URLs), review existing topics, or contribute new evidence to ongoing discussions.

A **landing page** serves as the main entry point for users, enabling quick access to content submission and discovery. Uploaded materials are automatically linked to existing topics within the knowledge base or used to create new proposals.

The **topic breakdown page** provides a structured exploration of individual topics and their related claims.  
Users can view supporting and opposing evidence, upvote or downvote claims, and follow the evolution of each topic through verified contributions and rewards.  
This design maintains simplicity while providing essential functionality for transparent, community-driven verification.

<img width="960" height="540" alt="dFCT showcase" src="https://github.com/user-attachments/assets/efe15ca2-3b48-4038-8f82-d92c6250448b" />


### Cardano-Polkadot Provenance Bridge 🌉

#### Objective

To establish a **cross-chain provenance layer** between Cardano and Polkadot, enabling verifiable fact-checking data to be registered and queried across both ecosystems.

This bridge extends d-FCT’s Cardano provenance system (**dSM-Prov**) to Polkadot through **PolkaVM/EVM-compatible smart contracts**, **Substrate pallets**, and **XCM messaging**, making verified information interoperable and auditable between heterogeneous blockchain environments.

#### New Proposed Components

| Component                                          | Description                                                                                                                                                                                                                            |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Provenance Smart Contract**                      | Implements the on-chain registry for provenance proofs on Polkadot. Accepts verified proof structures originating from Cardano and stores them immutably. Emits standardized `RecordStored` and XCM events for downstream consumption. |
| **Cross-Chain Relay Service**                      | Off-chain agent (Rust) that monitors Cardano transactions, extracts provenance metadata, validates signatures, and relays formatted proofs to the Polkadot contract through RPC. Uses Koios or Blockfrost APIs for data ingestion.     |
| **Substrate Pallet Integration (`dfct-prov`)**     | Extends the d-FCT Substrate pallet with `consume_provenance_event()` to record and verify incoming proofs from Cardano. Enables parachains and dApps to trustlessly integrate external provenance data.                                |
| **TypeScript SDK (`@dfct-prov/substrate-bridge`)** | Provides developers with high-level APIs (`submitProvenance()`, `getProvenanceRecord()`, event listeners) for both Node.js and browser environments, facilitating integration with the relay and Substrate node.                       |
| **React Proof Explorer**                           | Interactive demo that visualizes provenance records stored on both Cardano and Polkadot, displaying transaction hashes, timestamps, content hashes, and author public keys. Demonstrates verifiable cross-chain synchronization.       |

---

#### Data Model / API Specification

```rust
struct ProvenanceRecord {
    origin_chain: Vec<u8>,        // e.g., "cardano-preview"
    topic_id: Vec<u8>,            // d-FCT topic identifier
    content_hash: [u8; 32],       // SHA256 of verified content
    author_pkh: [u8; 28],         // Public key hash of contributor
    tx_hash: [u8; 32],            // Cardano transaction reference
    timestamp: u64,               // Unix epoch timestamp
    signature: [u8; 64],          // Relay or author signature
}
```

#### Public methods (extrinsics & messages)

| Method                                                 | Description                                                                 |
| ------------------------------------------------------ | --------------------------------------------------------------------------- |
| `submit_provenance(record: ProvenanceRecord) -> bool`  | Stores a verified provenance record from Cardano.                           |
| `get_provenance(id: Hash) -> Option<ProvenanceRecord>` | Returns stored provenance data by record ID.                                |
| `emit_xcm_event(id: Hash)`                             | Broadcasts an XCM message to subscribing parachains for provenance updates. |

---

#### Runtime Storage

- `ProvenanceRecords: map Hash => ProvenanceRecord`
- `RelaySignatures: double_map (OriginChain, TxHash) => Signature`

#### Architecture Overview

1. **Cardano Layer (dSM-Prov):**  
   Handles provenance anchoring for fact-checked topics and evidence. Each finalized verification generates a transaction embedding a provenance hash and metadata.

2. **Relay Layer (Off-Chain Agent):**  
   Continuously monitors Cardano for new d-FCT provenance events, validates transaction metadata, transforms it into a standardized record, and submits it to the Polkadot contract.

3. **Polkadot Layer (Smart Contract + Pallet):**  
   Receives, verifies, and stores the provenance record. Emits events and XCM messages to inform parachains that new verified content is available.

4. **Consumer Layer (Substrate / Frontend):**  
   Provides APIs and SDKs for dApps, parachains, and explorers to query and display the provenance history across chains.

#### Technology Stack

| Layer                | Tools & Frameworks                                     |
| -------------------- | ------------------------------------------------------ |
| **Smart Contract**   | Rust / Solidity (compiled for PolkaVM or Moonbeam EVM) |
| **Relay Service**    | Rust + Koios API + Cardano serialization lib           |
| **Substrate Pallet** | FRAME SDK + XCM v3 integration                         |
| **SDK**              | TypeScript / Polkadot.js API / JSON-RPC                |
| **Frontend**         | React + Vite + Dockerized demo                         |
| **CI/CD**            | GitHub Actions + Docker Compose (local testnet setup)  |

#### Expected Outcomes

- **Interoperable Provenance:**  
  Cardano-anchored fact-checks become visible and queryable in the Polkadot ecosystem.

- **Cross-Chain Verification Standard:**  
  Establishes a reusable proof schema and relay pattern for other Web3 research and governance DAOs.

- **Open Developer Toolkit:**  
  Provides SDKs, pallets, and open-source infrastructure for extending provenance-based verification into multi-chain environments.

### Ecosystem Fit

The **Cardano–Polkadot Provenance Bridge** fills a critical interoperability gap by enabling cross-chain verification of data provenance, a capability that is currently absent in both ecosystems. Through this bridge, verified contributions anchored on Cardano become accessible and queryable within the Polkadot network. This allows parachains, governance DAOs, and content-verification applications to validate the authenticity of fact-checking contribution records and reuse these proofs across decentralized platforms.

The **target audience** includes developers building on Polkadot’s Substrate framework, particularly those focused on governance, identity, and data-driven projects; researchers and auditors exploring Web3 transparency standards; and civic technology initiatives that rely on verified information to strengthen digital accountability.

The project directly addresses the **need for interoperable provenance** between heterogeneous blockchain environments such as Cardano and Polkadot. By establishing a standardized mechanism for proof exchange, it introduces a transparent method to verify the origin and authenticity of off-chain content, improving trust across decentralized ecosystems.

In terms of **comparable efforts**, most existing bridges (such as Wanchain’s Cardano bridge) focus on asset transfer rather than provenance data. There is currently no bridge standardizing data-level proofs between Cardano and Polkadot. This project stands out by introducing a purpose-built framework for verifiable content provenance using PolkaVM/EVM contracts and XCM messaging, extending interoperability beyond token transfer into the realm of trusted information exchange.

## Team :busts_in_silhouette:

### Team members

- Co-founder: Marcio Moreno, PhD (Co-founder, MOBR Systems)

- Co-founder: Rafael Brandão, PhD (Co-founder, MOBR Systems)

### Contact

- **Contact Name:** Rafael Brandão
- **Contact Email:** rafael@mobr.ai
- **Website:** https://mobr.ai | https://dfc.to

### Legal Structure

- **Registered Address:** Av. Paulista, 1636, CEP 01310-200, Sao Paulo, Brazil
- **Registered Legal Entity:** MOBR Systems LTDA

### Team's Experience

The project will be led by the two co-founders of MOBR Systems, **Dr. Marcio Moreno** and **Dr. Rafael Brandão**, who bring extensive experience in blockchain engineering, data analytics, and artificial intelligence. Together, they have designed and delivered several successful Web3 initiatives spanning multi-chain ecosystems, decentralized governance, and AI-powered verification.

- **Marcio Moreno, PhD**: [https://linkedin.com/in/marcio-moreno-phd-598a459a/](https://linkedin.com/in/marcio-moreno-phd-598a459a/)
- **Rafael Brandão, PhD**: [https://linkedin.com/in/rafaelrmb/](https://linkedin.com/in/rafaelrmb/)

Under their leadership, MOBR Systems has developed and deployed d-FCT (Decentralized Fact-Checking Toolkit), a hybrid AI + blockchain platform funded under Project Catalyst Fund 13 (#1300076) on Cardano, which integrates decentralized governance and on-chain provenance for verified content.

The team also successfully delivered the **Polkadot Ontology (POnto)** project, an open knowledge graph framework for the Polkadot ecosystem, supported by a previous Web3 Foundation grant: [https://github.com/mobr-ai/POnto](https://github.com/mobr-ai/POnto)

Both co-founders are active researchers with a strong academic background and a track record of peer-reviewed publications and granted U.S. patents in AI, data modeling, and distributed systems. Their full academic profiles can be found on Google Scholar:

- **Marcio Moreno, PhD:** [https://scholar.google.com/citations?user=PfdmrPUAAAAJ](https://scholar.google.com/citations?user=PfdmrPUAAAAJ)
- **Rafael Brandão, PhD:** [https://scholar.google.com/citations?user=3ta0InEAAAAJ](https://scholar.google.com/citations?user=3ta0InEAAAAJ)

### Team Code Repos

#### Project GitHub repos

- https://github.com/mobr-ai/ (company)
- https://github.com/mobr-ai/dfct-cardano
- https://github.com/mobr-ai/dfct-substrate (bridge implementation to be initialized)

#### Team GitHub handles:

- https://github.com/mfmoreno
- https://github.com/rbrandao

## Development Status :open_book:

Over the past eight months, the d-FCT project has progressed from research and prototyping to a functional MVP on the Cardano blockchain. The deployed version includes operational provenance and governance smart contracts (Plutus-based), demonstrating the full verification workflow, from content submission and AI-assisted analysis to on-chain registration and decentralized governance.

- **YouTube Video (Project Close-Out):** [https://www.youtube.com/watch?v=jdnXWIeVVYQ](https://www.youtube.com/watch?v=jdnXWIeVVYQ)
- **Technical Report (PDF):** [TechnicalReport-M1.pdf](https://github.com/mobr-ai/dfct-cardano/blob/main/docs/TechnicalReport-M1.pdf)
- **Project Close-Out Report (PDF):** [Project Close-Out Report](https://github.com/mobr-ai/dfct-cardano/blob/main/docs/Project%20Close-out%20Report.pdf)

The **Cardano–Polkadot Bridge** phase builds on this foundation by introducing a **cross-chain provenance mechanism** that connects Cardano’s dSM-Prov model with Polkadot’s Substrate and XCM frameworks. The bridge prototype and relay architecture are currently under active design and validation.

No previous Web3 Foundation grant has been awarded for this specific initiative, making this submission the first cross-chain milestone in the broader d-FCT multi-chain roadmap, which aims to expand verifiable fact-checking infrastructure across ecosystems.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50% DOT (vested) / 50% USDC (AssetHub)

### Milestone 1 — Smart Contract + Relay Prototype

- **Estimated duration:** 1 month
- **FTE:** 2,0
- **Costs:** 15,000 USD

|  Number | Deliverable               | Specification                                                                                          |
| ------: | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| **0a.** | License                   | Apache 2.0 / MIT                                                                                       |
| **0b.** | Documentation             | Contract design (storage/events/API), relay protocol, proof structure (ProvenanceRecord), setup guide. |
| **0c.** | Testing and Testing Guide | Unit tests for smart contract (record submission/retrieval); Tests for relay input validation.         |
| **0d.** | Docker                    | Compose stack for local Polkadot node + relay service.                                                 |
|      1. | Smart Contract            | Implements submit_provenance, get_provenance, emits RecordStored; compiled for PolkaVM or EVM.         |
|      2. | Relay (Rust)              | Connects to Cardano via Koios/Blockfrost API; submits verified ProvenanceRecord to Polkadot RPC.       |
|      3. | TypeScript SDK (skeleton) | Basic contract interface + record parsing helpers.                                                     |
|      4. | Integration Tests         | Local end-to-end: relay → PolkaVM contract → event confirmation.                                       |

**Acceptance Criteria:**

- Contract deploys successfully and stores provenance proofs.

- Relay retrieves Cardano provenance and submits valid records.

- SDK reads records via JSON-RPC.

- Documentation is clear and concise.

### Milestone 2 — XCM Event Broadcast + UI Demo

- **Estimated duration:** 1 month
- **FTE:** 2,0
- **Costs:** 15,000 USD

|  Number | Deliverable               | Specification                                                                                                             |
| ------: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | Apache 2.0 / MIT                                                                                                          |
| **0b.** | Documentation             | Extended docs.                                                                                                            |
| **0c.** | Testing and Testing Guide | Tests across XCM flow.                                                                                                    |
| **0d.** | Docker                    | Full dockerized demo.                                                                                                     |
| **0e.** | Article                   | Publish an article on Medium detailing Cardano–Polkadot provenance bridge architecture, challenges, and future direction. |
|      1. | XCM Integration           | Contract emits RecordStored → XCM message consumed by Substrate mock pallet.                                              |
|      2. | Substrate Pallet Update   | Extend existing d-FCT pallet with consume_provenance_event().                                                             |
|      3. | SDK completion            | Expose XCM event listener and provenance query utilities.                                                                 |
|      4. | UI demo                   | Visual explorer showing content hash + verification status from both chains.                                              |

**Acceptance Criteria:**

- Provenance event from Cardano visible in Polkadot UI via XCM.
- Pallet correctly consumes RecordStored events.
- SDK demonstrates full query flow.
- Article published on Medium.

## Future Plans

- Maintain repositories, support open-source contributions, publish regular updates.

- Next steps:

  - Implement reverse flow (Polkadot → Cardano provenance).

  - Add signature aggregation (Mithril-style) for relay validation.

  - Deploy to testnet and invite community review.

- Long-term vision:
  - Establish d-FCT as a multi-chain provenance layer, enabling transparent content verification across ecosystems.

## Additional Information :heavy_plus_sign:

The MOBR Systems team has a proven track record of delivering innovative Web3 research and infrastructure projects. The company was previously awarded a Web3 Foundation grant for the development of the Polkadot Ontology (POnto), an open-source semantic framework designed to map the Polkadot ecosystem into interoperable knowledge graphs. Project page: [https://github.com/mobr-ai/POnto](https://github.com/mobr-ai/POnto)

Building on that foundation, MOBR Systems continues to expand its multi-chain R&D efforts across several leading blockchain ecosystems. The team is currently advancing d-FCT alongside complementary analytics platforms other networks, each contributing to a shared vision of transparent, data-driven Web3 applications.

For more details about our current projects, technical documentation, and open-source initiatives, visit:  
🌐 [https://mobr.ai](https://mobr.ai)  | 💻 [https://github.com/mobr-ai](https://github.com/mobr-ai)
