---
team_name: Monza Tech LLC
contact_name: Alexandre Figueras
contact_email: alex@monzatech.co
project_name: Sentinel Grid
level: 2
address: 14znUCRAVUgUSYLcStj2gug3fUBnu5v6ARtEgjDt5YGRPGjn
---

# Grant Application: Sentinel Grid

## 1. Project Overview

### 1.1 Overview
Sentinel Grid provides decentralized and verifiable monitoring for critical infrastructure using Substrate. We ingest and analyze real-time telemetry from energy grids and telecom networks to detect anomalies and prevent catastrophic failures. The goal is to bring mission-critical infrastructure systems into the Polkadot ecosystem with reliable, cross-chain visibility.

### 1.2 Project Details
- Current Status: Live MVP with real-time telemetry ingestion, anomaly scoring, and on-chain event logging
- Ecosystem: Polkadot, Substrate, XCM
- Tech Stack: Rust, Substrate FRAME pallets, Off-chain Workers, React dashboard, Polkadot JS, XCM SDK
- Total Estimated Duration: 4 months
- Full-time Equivalent: 2 FTE
- Total Costs: 50000 USD
- GitHub: https://github.com/MonzaTech

### 1.3 Team
**Alexandre Figueras**  
Infrastructure analytics, Rust development, Substrate engineering, predictive maintenance systems. Previous deployments include real-time telemetry pipelines and blockchain integrations.  
GitHub: https://github.com/alexfigueras

**Senior Rust Engineer**  
Experience with FRAME pallets, runtime development, Off-chain Workers, and XCM message handling.  
GitHub: https://github.com/MonzaTech

**Frontend Engineering Support**  
Responsible for the real-time dashboard, Polkadot JS integration, and test network tools.

The team has previous experience delivering telemetry systems, Substrate research, and a live MVP that already demonstrates the core concept.

---

## 2. Project Details

### 2.1 Ecosystem Fit
Sentinel Grid brings real-world critical infrastructure telemetry to Polkadot. It expands the ecosystem beyond financial use cases by providing high-assurance monitoring tools for industrial and public-sector systems. No other Substrate project focuses on energy grids or telecom networks. By introducing verifiable telemetry, deterministic anomaly scores, and cross-chain alerts, Sentinel Grid offers new primitives for the Substrate and Polkadot ecosystem.

### 2.2 Technology Stack
- Substrate FRAME pallets for telemetry verification and scoring
- Off-chain workers for real-time data ingestion and preprocessing
- XCM for cross-chain alert propagation
- Rust for core logic and runtime development
- React and Polkadot JS for visualization and dashboards

---

## 3. Development Roadmap

### 3.1 Overview
- Total Duration: 4 months
- FTE: 2
- Total Cost: 50000 USD

---

### 3.2 Milestone 1: Core Infrastructure
**Estimated Duration:** 2 months  
**Costs:** 25000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Tutorials, API documentation, setup guides |
| 0c. | Testing | Unit tests with 80 percent coverage of pallet logic |
| 0d. | Docker | Full local network deployment with off-chain workers |
| 1. | Substrate Pallets | Verification of telemetry packets with signature checks and scoring logic |
| 2. | Off-chain Workers | Real-time sensor processing, minimum 1000 packets per hour in test |
| 3. | XCM Integration | Working example sending anomaly scores between two chains |

**Acceptance Criteria:**  
Pallets compile with no errors, documented tests cover core logic, XCM example runs locally, telemetry packets can be processed and verified in a sample network.

---

### 3.3 Milestone 2: Monitoring System
**Estimated Duration:** 2 months  
**Costs:** 25000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Dashboard | Real-time UI built with React and Polkadot JS |
| 2. | Alerting | Cross-chain alerts triggered by anomalies using XCM |
| 3. | Example Scenarios | Two use cases: energy infrastructure and telecom failures |
| 4. | End to End Demo | Full workflow from telemetry to scoring to cross-chain alerts |

**Acceptance Criteria:**  
Dashboard shows live telemetry, alerts are broadcast across chains, at least two vertical examples are functional, and an end to end demo with video and dataset is delivered.

---

## 4. Additional Information

### 4.1 What makes this project unique
Sentinel Grid is the first Substrate-based project focused on industrial and public-sector critical infrastructure. It introduces new primitives to Polkadot, including verifiable off-chain telemetry feeds, deterministic anomaly scoring, and cross-chain alerts. The MVP already proves feasibility and the need for decentralized monitoring in a market of more than 200 billion USD.

### 4.2 Previous Work
- Live MVP at monzatech.co
- Real-time telemetry ingestion and anomaly scoring demonstrations
- Engagement with infrastructure and defense innovation programs
- Previous RWA data integrations on blockchain networks

### 4.3 Similar Projects
There are no direct Substrate competitors. Legacy solutions from traditional industrial vendors are centralized and lack verifiable audit trails or cross-chain capabilities.
