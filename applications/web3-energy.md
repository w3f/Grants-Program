# W3CP Core: Polkadot-Anchored Device Identity for Real-World Energy Infrastructure

- **Team Name:** Web3 Energy Ltd.
- **Contact Email:** contact@web3-energy.com
- **Level:** 2
- **Total Costs:** 30,000 USD
- **Payment Address (DOT, the address is Asset Hub):** 16LwjL7KKPXaSGgiPYA4qdYfGv2dsUU4Zb81SzUJRmmFTkxd 
- **Payment Address (USDC, again Asset Hub):** 16LwjL7KKPXaSGgiPYA4qdYfGv2dsUU4Zb81SzUJRmmFTkxd

---

## Project Overview :page_facing_up:

### Overview

**Tagline:**
Polkadot-anchored decentralized identities for charge points, vehicles, and energy infrastructure.

**Brief Description:**
Web3 Energy Ltd. is building W3CP (Web3 Charging Protocol), an identity-first protocol for EV charging and energy infrastructure.

This proposal requests a Level 2 grant to deliver a Polkadot-anchored device identity verification core that enables real-world infrastructure devices to authenticate without centralized allowlists or pre-registration.

---

### Motivation & Real-World Context

Electric vehicles and charging infrastructure are transitioning from closed ecosystems to **open, heterogeneous networks** involving multiple manufacturers, operators, and jurisdictions.

In this environment:

- Charge points must authenticate without fragile backend allowlists
- Vehicles must identify themselves across vendors and borders
- Infrastructure lifecycles span 10–20+ years
- Regulatory and security requirements continue to increase

**Identity is the missing layer across the entire charging stack — from vehicles and charge points down to embedded meters that must cryptographically sign and attest measured values — while backend systems remain verifiers, not trust anchors.**

Web3 Energy’s core belief is:

- Cars need identities
- Charge points need identities
- Independent meters inside charge points need identities to sign and attest measured values
- Infrastructure needs verifiable, long-lived identities
- Backends should not be the root of trust

Polkadot provides a uniquely suitable foundation:

- **Native, addressable runtime storage**, enabling deterministic, constant-time verification of identity and attestation state without block scanning or external indexers
- **Long-term governance and upgradeability**, allowing trust and attestation models to evolve over time without breaking deployed infrastructure
- **Neutral, non-vendor-controlled trust**, suitable for multi-operator and multi-jurisdiction infrastructure
- **Strong cryptographic and economic guarantees**, aligned with long-lived physical devices

This foundation allows the project to start with a minimal, production-ready verification model, while enabling more advanced governance-based trust and attester models to be introduced in later phases.

---

### Current State & Proof of Concept

Web3 Energy already operates a **working proof-of-concept**, including:

- A **publicly accessible backend** implementing the W3CP protocol
- A **user-facing UI** (public access via Gmail login)
- A **public charge-point simulator / reference firmware**, implementing the W3CP device handshake
- A **public W3CP protocol specification**
- An initial **Polkadot-based identity proof-of-concept deployed on the Westend testnet**, which will be **open-sourced as part of this grant**

In the current PoC:
- Device identities are available to the backend at connection time
- Polkadot is used experimentally to anchor and validate identity data
- Verification logic demonstrates feasibility, but is not yet production-grade

This grant focuses on **strengthening this PoC**, formalizing the identity model, and upgrading it to a **real DID-based verification flow** suitable for mainnet usage.

---

## Project Details

### Core Concept

The project delivers a **verified connection flow** where:

- A device connects to a backend **without being pre-registered**
- The backend **does not store a static device allowlist**
- The device presents a decentralized identity (DID)
- The backend verifies the DID **in real time against Polkadot**
- The connection is upgraded to **VERIFIED** only after successful proof
- Invalid or unknown identities are **explicitly rejected**

Compared to the existing PoC, this grant introduces:
- A formal DID model
- Real-time attestation checks
- Clear separation between backend logic and identity verification
- A migration path from Westend to Polkadot mainnet

This pattern is applicable beyond EV charging:
- IoT
- DePIN
- Energy infrastructure
- Industrial systems

---

### Attesters & Trust Assumptions (Scope Clarification)

For the scope of this grant, **device attestations are assumed to be issued by a small, known set of bootstrap attesters**.

- Attesters are represented by cryptographic keys whose public identifiers are **anchored on Polkadot**
- The identity sidecar verifies:
    - the device’s cryptographic proof of key ownership
    - the validity of the attestation
    - the presence of the attester reference in on-chain state
- The backend itself does **not** maintain issuer or device allowlists and derives trust exclusively from on-chain verification results

**Governance mechanisms for permissionless attester admission, registrar workflows, deposits, slashing, or reputation systems are intentionally out of scope for this grant** and are planned as future work once the core verification flow is production-ready.

---


### Architecture (High-Level)

- **Device / Simulator:** Implements W3CP handshake and cryptographic proof
- **Polkadot Identity Sidecar (Open-Source):**
    - Resolves device DIDs
    - Verifies signatures
    - Validates attestations in real time against Polkadot
- **Backend (Reference Integration):**
    - Performs live verification
    - Does not maintain a device registry
- **Demo UI:** Visualizes verified vs rejected connections

The backend trusts **on-chain state**, not its own database.

![W3CP Polkadot-Anchored Device Identity Verification Flow](https://raw.githubusercontent.com/web3-energy/polkadot/main/polkadot-trust.svg)

---

### Technology Stack

- **Backend:** Java (Quarkus)
- **CP-Firmware** Java, open-source 
- **Identity Sidecar:** Node.js, open-source
- **Frontend:** Web UI (Vue.js, hosted on AWS CloudFront; publicly accessible, Google Auth)
- **Infrastructure:** AWS
- **Blockchain:** Polkadot (Westend for proof-of-concept, mainnet-ready design)
- **Cryptography:** Standard public-key signatures, challenge–response authentication, and cryptographic hashes

No proprietary cryptographic primitives are introduced.


---

## Ecosystem Fit

### Why This Matters to Polkadot

- Demonstrates **real-world device identity usage** in production-like environments
- Aligns with **DePIN, IoT, and decentralized identity** verticals
- Creates **tangible Polkadot usage** through on-chain identity anchoring
- Positions Polkadot as an **invisible but critical infrastructure layer** for physical systems
- Provides a **practical reference implementation** that can be evaluated, tested, and reused by the foundation and the broader ecosystem

This project is designed to be **actively used, tested, and extended**, not merely demonstrated.


---

## Scope & Deliverables

### Milestone 1 — Polkadot Device Identity Verification Core
**Duration:** ~6 weeks
**Cost:** ~$15,000 USD

**Deliverables:**
- Extension of the existing PoC into a **formal DID-based identity model**
- Polkadot identity sidecar (open-source reference attester)
- Real-time on-chain verification and attestation checks
- Verified connection flow (unauthenticated → verified / rejected)
- Charge-point simulator implementing the upgraded W3CP identity handshake
- Protocol documentation and trust-model explanation

---

### Milestone 2 — Demo, Documentation & Developer Experience
**Duration:** ~6 weeks
**Cost:** ~$15,000 USD

**Deliverables:**
- **Public Demo UI**
    - Visualizes device connection attempts
    - Shows real-time identity verification outcomes
    - Allows anyone to experiment end-to-end

- **Public HOW-TO Documentation**
    - How the **W3CP protocol** works
    - How devices perform DID-based identity handshakes
    - How the Polkadot identity sidecar verifies identities and attestations
    - How to migrate from testnet-based PoCs to mainnet-ready setups

- **Open-Source Components**
    - Charge-point firmware simulator / reference implementation
    - Polkadot identity sidecar
        - Stateless
        - Unauthenticated
        - Backend-agnostic
        - Reusable by other projects

The backend itself is **publicly accessible and testable**, but its internal implementation is **not part of the open-source deliverables**.
It serves as a **reference integration of the W3CP protocol**, demonstrating how decentralized identity verification can be embedded into real backend systems.

---

## Explicitly Out of Scope (Context & Rationale)

The following activities are **intentionally out of scope for this grant**, but are **actively ongoing and financed through other means**:

- Commercial backend and frontend product development
- Integration and pilot discussions with charge-point vendors
- Integration and pilot discussions with vehicle manufacturers
- Secure hardware modules, certifications, and manufacturing
- OCPP protocol extensions
- Payments, wallets, and settlement logic

These activities are **essential for real-world adoption** and are being pursued in parallel.
This grant **explicitly focuses on the Polkadot-based identity layer**, which must remain **open, reusable, and ecosystem-facing**.

---

## Why This Split Is Intentional

Real-world infrastructure adoption requires **both**:

1. **Open, neutral infrastructure primitives**
   (Polkadot-anchored decentralized identity)

2. **Commercial execution and market integration**
   (vendors, pilots, operations, compliance)

This grant funds **(1)**, while **(2)** ensures that the work leads to **real-world usage** rather than isolated experiments.

This reflects how infrastructure is built and adopted in practice.

---

## Team :busts_in_silhouette:

**Web3 Energy Ltd.** is a company focused on building real-world energy and EV charging infrastructure software.
The team combines backend engineering, protocol design, and deep domain knowledge of charging systems and identity.

- **Contact Name:** Y. Boev
- **Operations Contact:** V. Tsenova
- **Email:** contact@web3-energy.com
- **Company Website:** https://web3-energy.com
- **GitHub Organization:** https://github.com/web3-energy

We are happy to provide live demos, walkthroughs, or additional context in a call if helpful during the review process.


## Final Note

This project is intentionally pragmatic.

It does not attempt to solve everything at once.
It demonstrates how Polkadot’s decentralized identity stack can be applied to real-world infrastructure, connecting on-chain identity with physical devices in a concrete, testable, and extensible manner.

