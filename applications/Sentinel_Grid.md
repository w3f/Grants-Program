---
team_name: "Monza Tech LLC"
project_name: "Sentinel Grid"
contact_name: "Alexandre Figueras"
contact_email: "alex@monzatech.co"
level: 2
address: "14znUCRAVUgUSYLcStj2gug3fUBnu5v6ARtEgjDt5YGRPGjn"
total_cost_dai: 50000
license: "Apache-2.0"
github: "https://github.com/MonzaTech"
---

# Grant Application: Sentinel Grid

## Project Abstract

Sentinel Grid is a Substrate-based protocol providing decentralized, verifiable monitoring for mission-critical infrastructure. It ingests encrypted telemetry from energy grids and telecom networks, performs deterministic anomaly scoring off-chain, and anchors provable events on-chain. This enables tamper-resistant audit trails and cross-chain alerting for infrastructure operators and downstream applications such as insurance and risk analytics.

This application requests funding to finalize Substrate FRAME pallets, off-chain workers, XCM integration, and a production-ready monitoring dashboard in order to support pilot deployments with utility partners and demonstrate cross-chain infrastructure resilience workflows.

---

## 1. Project Overview

### 1.1 Overview

Sentinel Grid provides decentralized and verifiable monitoring for critical infrastructure using Substrate. It analyzes real-time telemetry from energy grids and telecom networks to detect anomalies and prevent cascading failures. The project demonstrates how Polkadot and Substrate can support non-financial, mission-critical infrastructure primitives.

### 1.2 Project Details

- **Current Status:** Live MVP with telemetry ingestion, anomaly scoring, and on-chain event logging  
- **Ecosystem:** Polkadot, Substrate, XCM  
- **Tech Stack:** Rust, Substrate FRAME pallets, Off-chain Workers, React dashboard, Polkadot JS  
- **Total Estimated Duration:** 4 months  
- **Full-Time Equivalent:** 2 FTE  
- **Total Cost:** 50,000 USD (50,000 DAI equivalent)  
- **GitHub:** https://github.com/MonzaTech  

---

## 1.3 Team

| Name | Role | Relevant Experience | GitHub |
|---|---|---|---|
| Alexandre Figueras | Founder & CEO | Infrastructure analytics, applied AI, Substrate R&D. Experience building real-time telemetry pipelines, anomaly detection systems, and blockchain-based verification layers. | https://github.com/alexfigueras |
| Micky Bauer | CTO | 10+ years in distributed systems and digital asset infrastructure. Former senior roles at Kraken, Binance, and BVNK, focused on secure systems, auditability, and high-availability platforms. | https://github.com/mickybauer |

The team has delivered a functional MVP and is engaged in early discussions with infrastructure and public-sector stakeholders for pilot deployments.

---

## 2. Project Details

### 2.1 Ecosystem Fit

Sentinel Grid expands the Polkadot and Substrate ecosystem into industrial and public-sector infrastructure. It introduces primitives not currently available on Substrate: verifiable off-chain telemetry, deterministic anomaly scoring, and cross-chain alert propagation via XCM. This broadens Substrate adoption beyond financial use cases.

### 2.2 Technical Approach

- **Substrate FRAME pallets** for telemetry verification, scoring, and event anchoring  
- **Off-chain Workers** for ingestion, preprocessing, and deterministic AI scoring  
- **XCM** for cross-chain transmission of verified anomaly events  
- **Frontend:** React dashboard with Polkadot JS integration  
- **Deployment:** Dockerized local testnet with sample datasets for reproducible demos  

---

## 3. Development Roadmap

### 3.1 Overview

- **Total Duration:** 4 months  
- **Full-Time Equivalent:** 2  
- **Total Cost:** 50,000 USD  

---

### 3.2 Milestone 1: Core Infrastructure

| Item | Description |
|---|---|
| Duration | 2 months |
| Cost | 25,000 USD |
| Deliverables | Substrate pallets for telemetry packet verification and deterministic scoring. Off-chain Workers capable of processing at least 1,000 packets per hour in test mode. XCM example demonstrating cross-chain transmission of an anomaly event. Unit tests targeting ~80% coverage. Dockerized local deployment and developer documentation. |
| Acceptance Criteria | Pallets compile and pass CI. Off-chain Worker meets throughput target on test data. XCM example successfully relays an event across two local chains. Documentation enables a developer to run the local demo. |

---

### 3.3 Milestone 2: Monitoring System

| Item | Description |
|---|---|
| Duration | 2 months |
| Cost | 25,000 USD |
| Deliverables | React dashboard with Polkadot JS integration showing live telemetry and alerts. Cross-chain alerting module using XCM. Two demo scenarios: energy grid failure and telecom site outage simulation. End-to-end demo video, datasets, and developer API documentation. |
| Acceptance Criteria | Dashboard displays live telemetry and alerts. XCM-based alerts propagate across three connected test chains in simulation. Demo scenarios executed and documented. Demo video and datasets published. |

---

## 4. Additional Information

### 4.1 What Makes This Project Unique

Sentinel Grid is the first Substrate-native system focused on industrial infrastructure monitoring with verifiable telemetry and cross-chain alerting. It enables enterprise workflows such as infrastructure incident audit trails, parametric insurance triggers, and interoperable resilience tooling.

### 4.2 Previous Work

- Live MVP demonstrating telemetry ingestion and anomaly scoring  
- Proof-of-concepts using anonymized energy and telecom datasets  
- Engagements with defense and infrastructure resilience programs  

### 4.3 Similar Projects

There are no direct Substrate-native equivalents. Legacy vendors such as Siemens and ABB offer centralized monitoring solutions without on-chain verifiability or cross-chain interoperability.

---

## 5. Funding and Licensing

- **Requested Funding:** 50,000 USD (DAI equivalent)  
- **License:** Apache-2.0  
- **KYC/KYB:** Acknowledged  

---

## 6. Contact and Payment

- **Contact:** Alexandre Figueras — alex@monzatech.co  
- **Payment Address:** 14znUCRAVUgUSYLcStj2gug3fUBnu5v6ARtEgjDt5YGRPGjn  

---

## 7. Appendix

- MVP demo video (upon request)  
- GitHub repository: https://github.com/MonzaTech  
