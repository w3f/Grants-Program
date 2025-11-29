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

Sentinel Grid is a Substrate-based protocol providing decentralized, verifiable monitoring for mission-critical infrastructure. We ingest encrypted telemetry from energy grids and telecom networks, run deterministic AI-based anomaly scoring off-chain, and record provable events onchain. This creates tamper resistant audit trails, cross-chain alerting, and tokenizable real-world assets for infrastructure operators and downstream DeFi/insurance primitives.

This application requests funding to finalize Substrate pallets, off-chain workers, XCM integration, and a production-ready monitoring dashboard so we can run pilot deployments with utility partners and demonstrate cross-chain resilience workflows.

---

## 1. Project Overview

### 1.1 Overview
Sentinel Grid provides decentralized and verifiable monitoring for critical infrastructure using Substrate. We ingest and analyze real-time telemetry from energy grids and telecom networks to detect anomalies and prevent cascading failures. The project demonstrates how Polkadot and Substrate can host mission-critical infrastructure primitives.

### 1.2 Project Details
- **Current Status:** Live MVP with real-time telemetry ingestion, anomaly scoring, and on-chain event logging  
- **Ecosystem:** Polkadot, Substrate, XCM  
- **Tech Stack:** Rust, Substrate FRAME pallets, Off-chain Workers, React dashboard, Polkadot JS  
- **Total Estimated Duration:** 4 months  
- **Full-time Equivalent (FTE):** 2 FTE  
- **Total Costs:** 50,000 USD (50,000 DAI equivalent specified in frontmatter)  
- **GitHub:** https://github.com/MonzaTech

### 1.3 Team
**Alexandre Figueras**  
Founder. Infrastructure analytics, applied AI, Substrate R&D. Past work includes real-time telemetry pipelines and blockchain integrations.  
GitHub: https://github.com/alexfigueras

**Senior Rust Engineer**  
FRAME pallet and runtime development, off-chain workers, XCM integration.  
GitHub: https://github.com/MonzaTech

**Frontend Engineering Support**  
Real-time dashboard, Polkadot JS integration, UX for pilot operators.

The team has delivered an MVP demonstrating core functionality and has early engagement with infrastructure stakeholders.

---

## 2. Project Details

### 2.1 Ecosystem Fit
Sentinel Grid expands the Polkadot/Substrate ecosystem into industrial and public-sector infrastructure. It provides primitives not currently available: verifiable off-chain telemetry, deterministic anomaly scoring, and XCM cross-chain alert propagation. This broadens Substrate usage beyond finance and collectibles and attracts enterprise and public-sector users.

### 2.2 Technical Approach
- **Substrate FRAME pallets** for telemetry verification, scoring, and event anchoring  
- **Off-chain Workers** for ingestion, preprocessing, and deterministic AI scoring (deterministic model inference pipeline)  
- **XCM** for sending alerts and verified events across chains and parachains  
- **Frontend:** React + Polkadot JS for the operator dashboard and developer tooling  
- **Deployment:** Dockerized local testnet and sample datasets for reproducible demos

---

## 3. Development Roadmap

### 3.1 Overview
- **Total Duration:** 4 months  
- **FTE:** 2  
- **Total Cost:** 50,000 USD

### 3.2 Milestone 1 — Core Infrastructure (2 months) — 25,000 USD
**Deliverables**
- Substrate pallets implementing telemetry packet verification and deterministic scoring  
- Off-chain Workers capable of ingesting and processing 1,000 packets/hour in test mode  
- XCM example demonstrating cross-chain transmission of an anomaly event  
- Unit tests covering core pallet logic (target 80% coverage)  
- Dockerized local deployment and developer docs

**Acceptance Criteria**
- Pallets compile cleanly and pass CI tests  
- Off-chain worker demonstrates required throughput on test data  
- XCM example successfully relays a sample event across two local chains  
- Documentation sufficient for a developer to run the local demo

### 3.3 Milestone 2 — Monitoring System (2 months) — 25,000 USD
**Deliverables**
- React dashboard with Polkadot JS integration showing live telemetry and alerts  
- Cross-chain alerting module using XCM to broadcast verified anomalies  
- Two vertical demo scenarios: energy grid and telecom site failure simulation  
- End-to-end demo video, test datasets, and developer API docs

**Acceptance Criteria**
- Dashboard connected to testnet showing live feeds and alerts  
- XCM-based alerts propagate across three connected test chains in simulation  
- Two demo scenarios executed and documented with results
- End-to-end demo published (video + dataset)

---

## 4. Additional Information

### 4.1 What makes this project unique?
Sentinel Grid is the first Substrate-native system targeting industrial infrastructure with verifiable telemetry and cross-chain alerting. It introduces primitives that enable new enterprise flows such as infrastructure-backed RWAs, parametric insurance triggers, and interoperable resilience tooling.

### 4.2 Previous Work
- Live MVP demonstrating telemetry ingestion and anomaly scoring (internal demo)  
- Early POCs with anonymized energy and telecom datasets  
- Engagements with defense innovation programs for dual-use validation

### 4.3 Similar Projects
No direct Substrate competitors. Legacy vendors (Siemens, ABB) offer proprietary centralized solutions without onchain verifiability or cross-chain capabilities.

---

## 5. Funding & Licensing

- **Requested Funding:** 50,000 USD (denominated in DAI as specified above)  
- **License:** Apache-2.0 for all grant deliverables  
- **KYC/KYB:** Acknowledged and understood; Monza Tech will complete required checks

---

## 6. Contact & Payment

- **Contact:** Alexandre Figueras — alex@monzatech.co  
- **Payment Address:** 14znUCRAVUgUSYLcStj2gug3fUBnu5v6ARtEgjDt5YGRPGjn

---

## 7. Appendix (attachments to include in PR)
- Link to MVP demo video (attach or link)  
- Link to sample telemetry dataset (attach or link)  
- Link to GitHub repo with initial code and docs (https://github.com/MonzaTech)
