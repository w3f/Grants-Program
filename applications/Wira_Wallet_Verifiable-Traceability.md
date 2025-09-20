# Wira Wallet: Sovereign Digital Identity + Real-time Verifiable Traceability with Zero-Knowledge Proofs


- **Team Name:** Software Blockchain SRL
- **Payment Details:**
  - **Payment Address**: 14xZQBJqdWpfrNDP3kv5sNqnV6Gg44T4eXfjH6yWUdQqg4R7
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:
![](https://scarlet-bitter-platypus-602.mypinata.cloud/ipfs/bafkreibwmcasqi7o26jwchsbi4rnvbtiae3ax2jeuwcpioxevxl5pnzhfu)
### Tagline

- **Tagline:** a comprehensive blockchain-based platform focused on real-time verifiable traceability using sovereign digital identity and Zero-Knowledge Proofs technology.

### Summary

- **Project Description:** The primary goal of this project is to bring reliable, verifiable data from the real world to the blockchain, enabling smart contracts and decentralized applications to interact securely with off-chain information. To achieve this, we implement a network of Human Oracles—categorized experts who verify and attest to real-world data. The identity and reputation of these oracles are ensured through a Sovereign Digital Identity (SDI) system, which serves as an auxiliary technology to guarantee the trustworthiness of the verifiers. 

### Integration and Technical Fit

- **Integration with Substrate/Polkadot/Kusama:** The project leverages Zero-Knowledge Proof technology for privacy-preserving verification, blockchain technology for decentralized identity management, and smart contracts for traceability systems. The architecture aligns with decentralized identity standards (W3C DID/VC) and could potentially integrate with Polkadot's ecosystem for cross-chain interoperability and enhanced privacy features.

### Team Motivation

- **Team Interest:** The team is motivated by the need to bridge the gap between the real world and blockchain by providing reliable, verifiable data through a network of Human Oracles. As blockchain enthusiasts, we aim to leverage sovereign digital identity as an auxiliary technology to ensure the trustworthiness of these oracles, enabling secure interactions between smart contracts and off-chain information across various sectors.

### Project Details


The Wira Wallet ecosystem consists of the following components:

#### Verifier Network (Human Oracles)
<!-- ![](./images/oraculos.png) -->
- **Core Technology:** A decentralized network of individuals and entities categorized to validate data.
- **Verifier Categorization:**
    - **Level 1 - General Verifiers:** Users with basic knowledge to validate public domain facts.
    - **Level 2 - Specialized Verifiers:** Professionals with expertise in areas such as agriculture, finance, or mining.
    - **Level 3 - Expert Local Verifiers:** Experts with deep knowledge of the regional context, crucial for local investment and traceability projects.
- **Incentive Mechanisms:** Verifiers stake cryptocurrency as collateral. They receive rewards for correct verifications and are penalized (slashed) for providing incorrect information, ensuring the network's honesty.


#### Sovereign Digital Identity (SDI) Layer
![](https://scarlet-bitter-platypus-602.mypinata.cloud/ipfs/bafkreigj24chduebc6kd4qppq3rggeatrnpm5towfcufhma62baodu4z4e)

*Figure: Diagram illustrating the Sovereign Digital Identity Layer, showcasing the creation and management of Decentralized Identifiers (DIDs), the issuance and verification of Verifiable Credentials (VCs), and the on-chain reputation system that tracks verifiers' performance to ensure trustworthiness.*

- **Purpose:** To ensure that each "Human Oracle" has a persistent identity and a verifiable reputation.
- **Core Technology:** Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs) to manage the identity and qualifications of verifiers without compromising their privacy.
- **Reputation System:** Each verifier's reputation is built on-chain based on their history of successful verifications and penalties, allowing data requesters to choose oracles with the appropriate reliability.

- **How it works (diagram explained):**
  - A user/device holds a DID and stores verifiable credentials locally; the device can present a verifiable credential when interacting with the oracle network.
  - An Issuer node ("Emisor") is responsible for issuing VCs after validation; in the diagram an OCR/AI component is shown that can extract data from identity documents to assist issuance.
  - Sensitive keys (e.g., private keys for DID wallets) can be protected using Shamir Secret Sharing (SSS) so recovery is possible through a set of Guardians or recovery services without centralizing secrets.
  - Guardians (trusted parties or social recovery agents) and external recovery services integrate with the system to support lost-key recovery and PIN/credential recovery flows.
  - Smart contracts (account abstraction + guardian modules) on-chain enforce recovery policies, link DIDs to on-chain accounts, and record reputation updates produced by verifications.

This layered approach combines on-device privacy, assisted issuance (AI/OCR), distributed key recovery (Shamir SSS + guardians), and on-chain governance via smart contracts to deliver a practical, resilient SDI for Human Oracles.

#### Data Request and Verification Platform
- **Features:** A platform where users (smart contracts, dApps, companies) can request the verification of real-world data.
- **Workflow:**
- ![](https://scarlet-bitter-platypus-602.mypinata.cloud/ipfs/bafkreib7ruyxwadunxfmhr35cp32v6ucmcxrerhxdwaaosjp4upzovd3w4)
    1. A client posts a data request, specifying the verification requirements and the reward.
    2. The network selects the most suitable verifiers based on their category, reputation, and location.
    3. The selected verifiers are notified to investigate and submit the data along with corresponding evidence.
    4. A consensus of verifiers validates the submitted data.
    5. Once validated, the data is written to the blockchain and becomes available to the requesting smart contract.

**Technology Stack:**
- **Blockchain:** Substrate, Polkadot (potentially as a parachain/parathread).
- **Identity:** Decentralized Identifiers (DIDs), Verifiable Credentials (VCs), Zero-Knowledge Proofs (ZKPs) for privacy.
- **Smart Contracts:** Smart contracts for on-chain logic and verification deployed on Moonbase.
- **Storage:** IPFS for off-chain storage of evidence and data.
- **Frontend:** React Native for mobile applications.
- **Backend:** Node.js, Substrate pallets.

**Proof of Concept (PoC):**

A national-scale pilot of the flagship application "Tu Voto Decide" was executed during Bolivia's August 2025 general elections, demonstrating real-world adoption and technical feasibility. The pilot generated 3,642 downloads, issued 1,222 sovereign digital identities, and tokenized 52 polling-station records as NFTs on Arbitrum — validating DID issuance, evidence capture, NFT minting, and verifiable attestations. To scale this model to nationwide coverage (target: 20k–25k actas, >30k IDs), the project requires sponsorship for gas, AI processing credits, and infrastructure support.

- Public on-chain artifacts & results:
  - Attestation NFT contract (Arbiscan): https://arbiscan.io/token/0x1FEEF5E4302AdE8Ac70Beff5F8bB7270c6a9aba1
  - Identity contract (Arbiscan): https://arbiscan.io/address/0x47C705EAe895BfF833d95a9d2A0Daa31B25d2885
  - Attestation collection (OpenSea): https://opensea.io/es/collection/attestationrecord
  - Results portal: https://resultados.tuvotodecide.com/resultados

### Ecosystem Fit

- **Ecosystem Position:** The Wira Wallet ecosystem fits into the Polkadot landscape as a complementary technology for sovereign digital identity and ZK-powered traceability. The architecture addresses critical gaps in privacy-preserving verification and real-time traceability that could enhance Polkadot's ecosystem adoption.
- **Target Audience:** Our primary beneficiaries are organizations and protocols that require provable, auditable chain-of-custody and real-world attestation for assets and events — for example supply chain platforms, commodity traders, agribusinesses, certification bodies, and dApps that depend on trustworthy on-chain facts. Secondary beneficiaries include enterprises integrating tokenization or compliance features and public-sector actors (e.g., electoral bodies, registries) that need certified attestations. Additionally, individual participants act as Human Oracles: verified people who produce and attest evidence using on‑chain-linked Sovereign Digital Identities, enabling the traceability flows.
- **Needs Addressed:**
  - Reliable, verifiable on-chain attestations and chain-of-custody records backed by human verification (the core need).
  - Practical traceability for physical and socio-technical processes where automated sensors are insufficient or unavailable.
  - A trustworthy mechanism to bind real-world evidence to on-chain records using DIDs/VCs so verifiers can be held accountable without exposing sensitive personal data.
  - Scalable workflows for selecting, incentivizing and slashing Human Oracles to ensure data quality and economic security of attestations.
  - Interoperable attestation formats and lightweight proofs (including ZKPs) to preserve privacy while enabling smart contracts to consume verified facts.
- **Need Identification:** The main gap we address is the lack of dependable human-attested data flows for traceability and attestation use cases: many industries need provable records of events or custody transfers but lack a practical, privacy-preserving way to capture, verify and anchor those facts on-chain. Demand comes from supply chains (provenance, anti-counterfeit, sustainability), commodity and export markets (chain-of-custody), certification and compliance workflows (audits, EUDR-like regulations), and civic processes (evidence-backed attestations). Our approach places traceability and attestation — provided by on‑chain-verified Human Oracles — at the center; other technologies (DIDs, VCs, ZKPs, IPFS, smart contracts) support this primary goal.

## Team :busts_in_silhouette:

### Team members

* **Huáscar Miranda M.** - CEO and Blockchain Specialist, Founder of Software Blockchain SRL
* **Juan Carlos Ferrufino** - CTO & Blockchain Backend Developer
* **José Mendoza** - Frontend and Mobile Developer
* **Pablo Fernandez** - Blockchain and Smart Contract Developer
* **Saul Choquehuanca** - Blockchain Developer and QA
* **Omar Quispe** - Frontend Developer
* **Brayan Sanchez** - Web3 and Smart Contract Developer
* **Augusto Rios** - Blockchain Smart Contract Developer, Full Stack Web3 Developer

We will be hiring one Rust Developer for the Polkadot integration work.

### Contact

* **Contact Name:** Huáscar Miranda M.
* **Contact Email:** info@blockchainconsultora.com
* https://blockchainconsultora.com/

### Legal Structure

* **Registered Address:** Avenida Víctor Agustín Ugarte #105, Z Sopocachi, La Paz - Bolivia
* **Registered Legal Entity:** Software Blockchain SRL (NIT: 576171021)


### Team's experience

* **Huáscar Miranda M.**
  Huáscar is the team lead and has several recognitions in the blockchain space:
  - Aethernity 2017 — Second prize in the Latin American blockchain projects competition (participation with Criptoanalisis.org).
  - Second place in a contest for the `gatsby-source-subsocial` plugin (npm): https://www.npmjs.com/package/gatsby-source-subsocial (repo: https://github.com/huascarmm/gatsby-source-subsocial) and project video: https://www.youtube.com/watch?v=k6vmLWQNnms. This plugin integrated Subsocial content into Gatsby sites and demonstrates experience in bringing on‑chain data into traditional web experiences.
  - Second place with an NFT project focused on Polkadot and tokenization of real estate — practical experience in tokenizing real-world assets and integrating attestation and ownership flows on Polkadot-compatible networks. https://github.com/Bonvo-dot/smartContracts, https://www.youtube.com/watch?v=qMnzvS4WGTs


* **Pablo Fernandez**
  Winner of 1st place at the Ethereum Bolivia Buildathon 2025 in the Social Enterprise & Public Goods category. LinkedIn post: https://www.linkedin.com/posts/ethereumbo_ethbolivia-buildathon-ethereum-activity-7363335713817329665-QbTk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAENyQj8BHYI8jwWbY6rdJGp7bSu316hZPo0

* **Saul Choquehuanca**
  Winner of 2nd place at the NeuroXplore hackathon (Universidad Católica Boliviana). https://www.instagram.com/p/DLtejFfMQ39/?utm_source=ig_web_copy_link&igsh=a2w3MmtmOGJiNzhv



### Team Code Repos

Wira Wallet and Tu Voto Decide GitHub organizations:
- https://github.com/Wira-Ecosystem
- https://github.com/tuvotodecide

### Team LinkedIn Profiles

-  [Huáscar Miranda](https://www.linkedin.com/in/huascarmiranda)
-  [Juan Carlos Ferrufino](https://www.linkedin.com/in/arevalo-ferrufino-juan-carlos-ba0084291)
-  [José Mendoza](https://www.linkedin.com/in/jose-mendoza-b186202aa)
-  [Pablo Fernandez](https://www.linkedin.com/in/pablo-fern%C3%A1ndez-7a1076179)
-  [Saul Choquehuanca](https://www.linkedin.com/in/saul-choquehuanca/)
-  [Omar Quispe](https://www.linkedin.com/in/omar-quispe-vargas-7b5601204)
-  [Brayan Sanchez](https://www.linkedin.com/in/brayanronaldo)
-  [Augusto Rios](https://www.linkedin.com/in/augusto-rios-375022204)

## Development Status :open_book:

The project has reached an advanced conceptual stage, supported by comprehensive whitepapers and technical documentation that lay the groundwork for the "Human Oracles" network.

**Completed Work:**
- **"Human Oracles" Whitepaper:** A detailed document outlining the decentralized verification model, expert categorization, and economic incentives.
- **Sovereign Digital Identity Whitepaper:** A technical specification for the identity layer that will support the oracle network, based on DIDs, VCs, and ZKPs.
- **System Architecture Design:** High-level architecture for the interaction between the oracle network, the identity layer, and the data verification platform.
- **Proof of Concept Planning:** Detailed use cases and technical requirements for initial pilots in electoral, agricultural, and mining traceability have been defined.
 - **Tu Voto Decide Application Development:** Design, build and deployment of the first production‑grade pilot mobile/web application (React Native + backend) enabling DID issuance, evidence capture (photos of polling station records), on‑chain attestation and NFT minting. The August 2025 national pilot produced 3,642 downloads, 1,222 issued sovereign digital identities and 52 tokenized polling‑station records (NFTs), validating the end‑to‑end attestation flow.
- **Moonbase Alpha (Polkadot Testnet) Deployments:** Early Substrate/EVM-compatible smart contract suite deployed on Moonbase Alpha validating core traceability and oracle economics components: 
    - Smart Wallet Factory ([0x77a2b71b01177B25f1f0Cf0a9194e43EA05b2dfd](https://moonbase.moonscan.io/address/0x77a2b71b01177B25f1f0Cf0a9194e43EA05b2dfd#code))
    - Wira Staking Token for oracles ([0xaEac30DeF92319b83Aa2bb66fff77bE19c5d7946](https://moonbase.moonscan.io/address/0xaEac30DeF92319b83Aa2bb66fff77bE19c5d7946#code))
    - User Reputation registry ([0x844Eff7b414c00c5fBD5F4b234FeBF01c8CB6dAC](https://moonbase.moonscan.io/address/0x844Eff7b414c00c5fBD5F4b234FeBF01c8CB6dAC#code))
    - Electoral Record NFT ([0xAEB821dCE949eE0Cf3A779c2dbd8160777170675](https://moonbase.moonscan.io/address/0xAEB821dCE949eE0Cf3A779c2dbd8160777170675#code))
    - Participation NFT ([0x6eAe707c5D098870E72a03e3F7a83cf124C0BA6C](https://moonbase.moonscan.io/address/0x6eAe707c5D098870E72a03e3F7a83cf124C0BA6C#code))
    - Oracle contract ([0xe3B731Fd7Dd0C0d2BAf565d0b6cE6a0BA883F5D9](https://moonbase.moonscan.io/address/0xe3B731Fd7Dd0C0d2BAf565d0b6cE6a0BA883F5D9#code))
  
Each address link is publicly verifiable on MoonScan and demonstrates progressive modularization of identity, attestation, reputation and staking primitives.

## Development Roadmap :nut_and_bolt:

This roadmap outlines the technical milestones for building the "Human Oracles" platform, starting with a proof-of-concept and progressively moving towards more complex traceability use cases. The project is structured into three main milestones.

### Overview

- **Total Estimated Active Development Duration:** 3 months
- **Calendar Roadmap Span:** March 2025 – January 2027
- **Full-Time Equivalent (FTE):** 3 (per active milestone month)
- **Total Costs:** 30,000 USD (Milestones 1–3)
- **DOT %:** 100%

### Milestone 1: Electoral Traceability (Proof of Concept)

- **Estimated Active Development Duration:** 1 month
- **FTE:** 2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline documentation + tutorial (mobile setup + contract interaction). |
| **0c.** | Testing and Testing Guide | Unit tests for identity, attestation & NFT minting flows with execution guide. |
| **0d.** | Docker | Dockerfile for backend components (API + indexing/oracle stub). |
| 0e. | Article | Results article (usability, offline connectivity, data verification findings). |
| 1. | Smart Contracts | DID + attestation + NFT electoral record contracts on EVM-compatible testnet. |
| 2. | Mobile Application | React Native app: capture evidence (photos), DID signature, submission to contracts. |
| 3. | Data Integration Layer | Backend service cross-verifying submitted results with official electoral data sources. |
| 4. | Usability & Connectivity Report | Report covering UX pain points and offline sync metrics gathered during pilot. |
| 5. | VC Issuance & Offline Module | Verifiable Credential issuance flow (identity & role credentials) + offline data capture & deferred submission logic. |

### Milestone 2: Agricultural Traceability Pilot

- **Estimated Active Development Duration:** 1 month
- **FTE:** 2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Updated docs: pilot setup, ZKP geo-verification usage, standards integration sections. |
| **0c.** | Testing and Testing Guide | Unit & integration tests (supply chain contracts, ZKP verifier, offline signatures). |
| **0d.** | Docker | Updated compose with geo-oracle + monitoring dashboard services. |
| 0e. | Article | Technical article on EUDR compliance architecture & privacy-preserving geo-verification. |
| 1. | Supply Chain Pilot | Coffee/cacao event attestations as chained NFTs referencing prior step. |
| 2. | EUDR Compliance Module | Oracle + ZKPs verifying deforestation-free status without precise location disclosure. |
| 3. | Usability Enhancements | Offline e-signatures + real-time monitoring dashboard for compliance alerts. |
| 4. | Certification & Audit Package | Documentation & test evidence for EUDR-style audit / regulator review. |
| 5. | Export Standards Integration | GS1 (or similar) data schema mapping & interoperable attestation format implementation. |

### Milestone 3: Mining Traceability Pilot

- **Estimated Active Development Duration:** 1 month
- **FTE:** 2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Final docs + deployment guide covering electoral, agricultural & mining flows. |
| **0c.** | Testing and Testing Guide | End-to-end mining flow tests + reproducible scenario scripts. |
| **0d.** | Docker | Final compose enabling full multi-domain deployment (incl. mining modules). |
| 0e. | Article | Final project report on Human Oracles transparency in extractive industries. |
| 1. | Mining Pilot | Extraction event NFTs with on-chain auditability & chain of custody. |
| 2. | ZKP-based Legality Proofs | Compliance proofs (environmental/regulatory) without exposing proprietary data. |
| 3. | Reputation System | Basic on-chain reputation scoring (legality & consistency weighted). |
| 4. | IoT Sensor Integration | Optional module ingesting sensor data (if available) into attestation pipeline. |
| 5. | Audit Trail zkRollup Prototype | Prototype batching mining attestations in a ZK-rollup for scalability. |
| 6. | Security & Penetration Test Report | External/internal test summary for mining traceability components. |
| 7. | End-to-End Traceability Demo | Demonstration from extraction to export including audit trail & legality proof. |


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
Web3 Foundation Website.

**Additional relevant information:**
- The project's core innovation is the combination of a human-based verification network with a strong, verifiable digital identity layer to ensure the reliability of oracles.
- We have a strong focus on solving real-world problems in emerging markets where trust in data is a significant challenge.
- The team has prior experience developing and deploying blockchain solutions in Bolivia.

**Official Links:**
- Software Blockchain SRL: https://blockchainconsultora.com/
- Wira Wallet: https://wirawallet.com/es/
- Tu Voto Decide: https://tuvotodecide.com/es/
