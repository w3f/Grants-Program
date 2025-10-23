## **OZED NETWORK - POLKADOT ECOSYSTEM**


- **Team Name:** Ozed Hub Tech
- **Payment Details:** 
  - **DOT**: 134Ffzb7qsYAuUVb8Wx4wj85e38pNsbXZwV1JXsxfp31o8xp
  - **Payment**: 134Ffzb7qsYAuUVb8Wx4wj85e38pNsbXZwV1JXsxfp31o8xp (USDC). 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2


## Project Overview :page_facing_up:

### Overview

1. True Data Sovereignty
2. Ozed Network is a Layer 1 blockchain developed by Ozed Hub Technology, focused on data sovereignty, transparency, and immutability for individuals, enterprises, and organizations. The project aims to build a decentralized data infrastructure that enables secure data interoperability, governance, and cross-chain collaboration across Web3 ecosystems.
3. Ozed Network will be built with Substrate, leveraging its modular framework for scalability, governance, and interoperability. It aims to integrate into the Polkadot ecosystem as a parachain, enabling seamless cross-chain data exchange and collaboration. Future deployments may extend to Kusama for testing and innovation.
4. Our team is driven by the vision to give users (individuals and organizations) full control over their data through decentralized sovereignty. We believe that trusted data infrastructure is essential for transparency, privacy, accountabilty and innovation. Ozed Network is aimed to solve the growing challenge of data fragmentation and centralization by providing a blockchain-powered framework for secure, interoperable, and verifiable data exchange across ecosystems.

### Project Details

Project Details (Transparent Preliminary Stage Version)
1. Current Stage
   Ozed Network is presently at the research and architecture phase. Our focus is on defining the core framework, data model, and governance structure that will form the foundation of the network.
   We are conducting technical explorations with Substrate to understand the best-fit runtime modules and interoperability mechanisms required to achieve our goals around data sovereignty and transparency.
   The first deliverable from this phase will be a proof of concept (PoC) demonstrating:
   - On-chain data registration and verification using Substrate.
   - A lightweight governance module for decision-making.
   - Integration with IPFS for decentralized storage.

2. Mockups/designs of any UI components
   - We are currently developing conceptual mockups to visualize:
   - The Ozed Dashboard (user data overview and permissions)
   - The Validator Console (governance and staking)
   - The Data Access Layer (view and verify stored hashes)
   - These will guide the user experience as we build the MVP.
     (Mockups will be shared in the next phase or attached once finalized.)
 
3. Data models / API specifications of the core functionality
   [https://github.com/ozedhubtech/Ozed-Network/blob/main/Core%20Data%20Model%20%26%20API](https://github.com/ozedhubtech/Ozed-Network/blob/main/Core%20Data%20Model%20%26%20API)
   
4. An overview of the technology stack to be used
   [https://github.com/ozedhubtech/Ozed-Network/blob/main/Technology%20Stack](https://github.com/ozedhubtech/Ozed-Network/blob/main/Technology%20Stack)
   
5. Documentation of core components, protocols, architecture, etc. to be deployed
   [https://github.com/ozedhubtech/Ozed-Network/blob/main/Documentation](https://github.com/ozedhubtech/Ozed-Network/blob/main/Documentation)
   
6. PoC/MVP or other relevant prior work or research on the topic
   [https://github.com/ozedhubtech/Ozed-Network/blob/main/Proof%20of%20Concept%20(PoC)](https://github.com/ozedhubtech/Ozed-Network/blob/main/Proof%20of%20Concept%20(PoC))

7. What your project is *not* or will *not* provide or implement
   What Ozed Network is not / will not provide or implement (in this PoC phase)
   Not a production-ready blockchain yet
   - This PoC will not include a fully deployed mainnet or testnet.
   - The focus is on demonstrating core functionality — not scalability or performance optimization.
   
   Not a financial or tokenized platform (YET)
   - The PoC will not issue or manage native tokens, staking systems, or token economics.
   - Tokenomics and governance incentives will be developed in later phases.
   
   No enterprise integrations at this stage
   - The PoC won’t yet connect to third-party enterprise systems or data providers.
   - Those integrations will follow once the verification and governance modules are validated.
   
   No zero-knowledge proofs or privacy-focused cryptography (YET)
   - Although privacy is a long-term goal, the initial implementation prioritizes transparency and auditability.
   
   No user-facing marketplace or application layer
   - The prototype will not include end-user apps or marketplaces.
   - The focus remains on the blockchain layer, APIs, and data verification mechanisms.
   
   Limited governance scope
   - Governance will be demonstrated through a minimal voting model — not a full DAO or multi-tier system.
   - The goal is to illustrate concept feasibility, not governance complexity.

  SUMMARY
  The Ozed Network PoC focuses on core blockchain and data verification functionality, not commercialization or production deployment.
  This strategic limitation ensures that the foundation is strong, reproducible, and technically sound before expanding into full-scale deployment, governance, and enterprise adoption.
  
  8. This is a place for you to manage expectations and clarify any limitations that might not be obvious
     https://github.com/ozedhubtech/Ozed-Network/blob/main/PoC%20%E2%80%93%20Limitations%20and%20Expectation%20Management


### Ecosystem Fit

- **Where and how Ozed Network fit into the ecosystem**
  Ozed Network is a Substrate-based Layer-1 blockchain built to integrate within the Polkadot and Kusama ecosystems as a parachain or parathread.
  It centers on Verifiable Data Objects (VDOs)—enabling on-chain validation of data proofs, seamless connections to decentralized storage systems like IPFS and Filecoin, and robust on-chain governance for managing data policies.
  Rather than replicating the work of identity, privacy, or storage parachains, Ozed Network enhances them by providing the missing layer for data sovereignty, verifiable provenance, and interoperable data governance across multiple chains.
  
- **Our target audience**
  - Parachain & Substrate developers who need standard pallets for data anchoring and governance.
  - dApp and wallet developers who want to integrate verifiable data proofs into their UX (KYC, documents, provenance).
  - Enterprise integrators seeking a verifiable, auditable data layer (audit trails, compliance).
  - Researchers / data marketplace builders interested in secure data sharing.
  - End users / organizations who want control over their data ownership and permissions.
  This positioning establishes Ozed as infrastructure middleware, meaning its core services, data proofs and governance modules are designed to be integrated and utilized by other chains and applications, rather than functioning solely as an independent end-user platform.

- **Needs Ozed Network meet**
  - Data sovereignty & control: enable individuals and organizations to prove ownership and control of their data across platforms.
  - Verifiable provenance / auditability: create immutable records linking off-chain assets to on-chain proofs (useful for legal, compliance, RWA, research datasets).
  - Interoperable governance: give communities tools to manage data access policies and updates on-chain.
  - Decentralized storage linkage: avoid centralized lock-in by combining IPFS/Filecoin with blockchain anchoring.
  - Developer primitives: offer pallets and APIs that make it easier to build data-aware dApps on Substrate/Polkadot.
    These needs are especially critical in areas where data is sensitive, highly regulated, or holds significant value, such as healthcare, enterprise analytics, supply chain provenance, and scientific research.

- **(Scientific) articles, forum discussions, case studies, or raw data how this needs were identified.**
  We identified needs via academic literature and observed ecosystem projects / industry coverage showing demand for data marketplaces, sovereign data, and decentralized storage:
  - Academic reviews of “data sovereignty” highlight the governance/legal challenges and growing demand for technical approaches that give data owners control. (Patrik Hummel et al., Data sovereignty: A review).
  - Research on data marketplaces importance and the technical/economic challenges that currently limit commercialization — showing opportunity for infrastructure that improves trust and reproducibility. - (MDPI: Business Data Sharing through Data Marketplaces, 2021). 
  - Cloud/centralization analysis shows risks of centralized platforms and motivates decentralized approaches to data control. (De Filippi et al., Cloud Computing: Centralization and Data Sovereignty).
  - Industry example - integrations such as Ocean Protocol’s work bringing data marketplace concepts into Polkadot/Moonbeam highlight the ecosystem interest in decentralized data economies.

- **Are there any other projects similar to Ozed Network in the Substrate / Polkadot / Kusama ecosystem?**
  Yes!
  Identity & Verifiable Credentials
    - KILT Protocol — Decentralized identity and verifiable credentials, focused on self-sovereign identity.
      KILT aims to return control over personal data and issues verifiable credentials. (KILT website / KILT parachain notes).
    - Litentry — Cross-chain identity aggregation with DID indexing and reputation/credit computation. Useful where identity links to data access. parachains.info

  Privacy & Confidential Compute
    - Phala Network — privacy-preserving off-chain compute / Trusted Execution Environments (TEEs).
      Useful where data must be processed confidentially. docs.phala.network

  Decentralized Storage / Data Availability
    - Crust Network — IPFS incentive layer for decentralized storage integrated into the Polkadot ecosystem; handles long-term storage and pinning. crust.network

  Data Marketplaces / Data Economy
    - Ocean Protocol (not Substrate-native but has worked to integrate with Polkadot via Moonbeam) — a decentralized data marketplace model emphasising data owner control and data monetization.
   
  **How Ozed Network is different**
  - Primary focus on verifiable data objects (VDOs) that explicitly tie off-chain payloads (IPFS/Filecoin) to on-chain proofs plus a governance layer for data rules.
    Identity (KILT, Litentry) and compute/privacy (Phala) solve adjacent problems; Ozed is designed to be the data-proof & governance infrastructure that these identity/privacy/storage projects can integrate with.

    In short:
    - KILT/Litentry = identity / credentials; Ozed = data anchoring & governance (complements identity).
    - Phala = confidential compute; Ozed = verifiable provenance and access controls for data before/after compute (complements privacy compute).
    - Crust = storage provider; Ozed = cryptographic anchoring + access governance for files stored on Crust/IPFS (integrates with storage).
    - Ocean = data marketplace model; Ozed = foundational verifiability layer that marketplaces can use to prove provenance and ownership across chains.
  I will also note: many of these projects deliberately focus on a single vertical (ID, storage, privacy). Ozed’s niche is the interoperable, governance-enabled data proof layer that sits between storage, identity, and compute layers — a coordination/integrator role rather than direct competition. 


    - If not, please indicate why such a project might not have been possible, successful, or attempted.
      ()


  - **Are there any projects similar to yours in related ecosystems?**
      Yes. Outside Polkadot there are several projects addressing data marketplaces, provenance, and data sovereignty (often Ethereum-based or cross-chain):
      - Ocean Protocol (Ethereum + integrations) — data marketplaces and compute-to-data. (see above). 
      - Filecoin + Textile / PowerGate / Estuary — decentralized file storage ecosystems with provenance/hosting features (these are storage-first, not governance-first). (see Crust & Filecoin docs referenced earlier). 
    These projects show both demand and workable components (storage, identity, privacy) that Ozed can integrate with or leverage rather than having to re-build.
    
    Ozed Network occupies a complementary niche in the Substrate/Polkadot landscape:
    It provides the verifiable data anchoring and governance primitives that identity (KILT, Litentry), privacy compute (Phala), and storage (Crust, Filecoin) projects need to create auditable, sovereign data flows.
    The academic literature and industry reports show persistent problems around data centralization, data marketplace viability, and governance — gaps that an interoperable VDO + governance layer can address.
    Our design focuses on composability:
    Pallets and APIs that enable other parachains and dApps to adopt verifiable, policy-controlled data without re-implementing identity, storage, or confidential compute.

## Team :busts_in_silhouette:

### Team members

The project is currently led by Alexander Ozaveshe Adogah, Founder of Ozed Hub Technology.
Additional team members, including blockchain developers, researchers, and ecosystem collaborators, will be engaged during subsequent development phases.

### Contact

- **Contact Name:** Alexander Ozaveshe Adogah
- **Contact Email:** ozedhubtech@gmail.com
- **Website:** N/A

### Legal Structure
- **Registered Address** N/A (Founder-led, fully remote project. Contact reachable via email: ozedhubtech@gmail.com  / alexanderozavesheadogah@gmail.com)
- **Registered Legal Entity:** Ozed Hub Tech

### Team's experience
The Ozed Network project is led by **Alexander Ozaveshe Adogah**, founder of **Ozed Hub Tech**.  
While this marks his first blockchain-focused initiative, Alex brings strong technical insight and hands-on experience from **self-directed research and practical exploration in Substrate, Polkadot, and decentralized storage systems**.  
His **innovation-driven approach** centers on conceptualizing and executing technology solutions that bridge emerging trends — including **AI-assisted applications and Web3 architectures**.  
This background provides a solid foundation for the design, architecture, and future implementation of the Ozed Network Proof of Concept (PoC) and beyond.

This combination of **technical expertise, problem-solving, and research-driven approach** provides a solid base to develop the Ozed Network and onboard additional specialized team members as the project grows.

### Team Code Repos

At this stage, Ozed Network is in its foundational phase. The primary organizational repository is maintained under:

- [https://github.com/ozedhubtech/Ozed-Network](https://github.com/ozedhubtech/Ozed-Network)

Additional repositories related to the Ozed Network’s Proof of Concept (PoC), Substrate modules, and integration demos will be published progressively as development milestones are achieved.

### Team GitHub Accounts

- **Alexander Ozaveshe Adogah** — [https://github.com/ozedhubtech/Ozed-Network](https://github.com/ozedhubtech/Ozed-Network)
  
As the project evolves and new contributors join, their respective GitHub profiles and code repositories will be added to ensure transparency and open collaboration.


### Team LinkedIn Profiles (if available)


---

## Development Status :open_book:
Ozed Network is currently in the **research and architectural design phase**, laying the foundation for its Substrate-based Layer 1 protocol focused on data sovereignty and verifiable data objects (VDOs). Although implementation has not yet begun, significant groundwork has been conducted through structured research, conceptual documentation, and ecosystem alignment studies.

### Current Progress
- **Research Documentation:** Internal whitepaper draft outlining Ozed Network’s architecture, governance, and interoperability model.
- **Technical Design:** Preliminary outlines for Substrate modules focused on data anchoring, proof verification, and cross-chain interoperability.
- **Ecosystem Mapping:** Comparative analysis with relevant Polkadot ecosystem projects such as KILT, Phala, Crust, and Ocean.
- **Public Communication:** Early discussions and documentation managed through the official GitHub organization:
  - [https://github.com/ozedhubtech/Ozed-Network](https://github.com/ozedhubtech/Ozed-Network)
  
### Planned Deliverables
- Development of a **Proof of Concept (PoC)** to demonstrate VDO creation, anchoring, and verification.
- Publication of **technical documentation and architectural diagrams** for community feedback.
- Collaboration with Substrate developer communities and ecosystem contributors as the project advances.
At this stage, there are **no prior implementations or improvement proposals (RFPs)** submitted, but foundational research and ecosystem studies provide a clear technical direction for the Ozed Network.


## Development Roadmap :nut_and_bolt:

### Overview
- **Total Estimated Duration:** 4 months  
- **Full-Time Equivalent (FTE):** 1.0 (Founder-led with part-time external support)  
- **Total Costs:** 18,000 USD  
- **DOT %:** 50%  


### Milestone 1 — Research and Architecture Design
**Estimated Duration:** 1 month  
**FTE:** 1  
**Costs:** 4,000 USD  

#### Deliverables:
- Technical whitepaper draft covering Ozed Network’s mission, architecture, and integration model within the Polkadot ecosystem  
- Substrate module outline for Verifiable Data Objects (VDOs)  
- Ecosystem interoperability plan (KILT for identity, Phala for confidential compute, Crust for storage)  
- Documentation hosted in the `ozed-docs` repository  
- Public update on GitHub and Web3 Forum  

#### Verification:
- Submission of whitepaper draft and architecture diagrams  
- Accessible documentation on GitHub under `ozed-docs/`  
- Publicly viewable progress commits and community feedback  


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | All code and documentation will be released under the **MIT License**. |
| **0b.** | Documentation | Inline code comments, architecture notes, and a step-by-step tutorial on running the PoC node and sending test transactions will be provided. |
| **0c.** | Testing and Testing Guide | Core Substrate modules (VDO, Governance, Bridge) will include unit tests and an accompanying guide for verification. |
| **0d.** | Docker | A Dockerfile will be provided for easy deployment and local testing of the PoC network. |
| **0e.** | Article | A public article summarizing the milestones, results, and ecosystem integration will be published on Medium and GitHub. |
| **1.** | Substrate Module: `pallet-vdo` | Implements Verifiable Data Objects (VDO) — creation, anchoring, and verification of data proofs on-chain. |
| **2.** | Substrate Module: `pallet-governance` | Implements on-chain governance for data ownership and rule-based permissions. |
| **3.** | Substrate Module: `pallet-bridge` | Handles interoperability between Ozed and external parachains (KILT, Phala, Crust) using XCM. |
| **4.** | Substrate PoC Chain | Combines the above pallets into a working prototype chain for local and testnet validation. Includes CLI tools for testing. |
| **5.** | Documentation Library | Markdown-based developer and integration guide hosted in `ozed-docs`. |
| **6.** | Final Report | Summary of implementation, lessons learned, and roadmap for mainnet development. |



### Milestone 2 — Prototype (PoC) Development
**Estimated Duration:** 1.5 months  
**FTE:** 1  
**Costs:** 7,000 USD  

#### Deliverables:
- Implementation of `pallet-vdo` — a basic Substrate module for creating and verifying data proofs  
- Mock integration using XCM with KILT and Crust for data identity and storage reference  
- Testnet environment setup for demonstration  
- Documentation for build, test, and run procedures  
- Code repository published under `ozed-poc`  

#### Verification:
- Reviewable source code under open MIT license  
- Demonstration scripts and test logs  
- GitHub issues and commits showing progress and functionality  

---

### Milestone 3 — Governance & Data Rules Layer
**Estimated Duration:** 1 month  
**FTE:** 1  
**Costs:** 5,000 USD  

#### Deliverables:
- Implementation of `pallet-governance` for basic data rule voting and permission logic  
- Integration testing between governance and VDO modules  
- Documentation for governance design and decision flow  
- Expanded whitepaper with governance section  
- Community feedback documentation and initial governance proposals  

#### Verification:
- Code inspection and testing logs  
- Updated documentation and whitepaper version 2  
- Publicly verifiable on-chain tests in the PoC environment  

---

### Milestone 4 — Evaluation & Next Steps
**Estimated Duration:** 0.5 month  
**FTE:** 0.5  
**Costs:** 2,000 USD  

#### Deliverables:
- Comprehensive final report summarizing PoC results, challenges, and next-phase roadmap  
- Demo video or live session showing Ozed PoC functionality  
- Updated grant documentation for next phase funding request  

#### Verification:
- Public submission of final report  
- GitHub publication of results and next steps  
- Optional call with Web3 Foundation team for feedback  

---

### Summary Table

| Milestone | Duration | Deliverables | Cost (USD) |
|------------|-----------|---------------|-------------|
| 1. Research & Architecture | 1 month | Whitepaper + Design Docs | 4,000 |
| 2. Prototype (PoC) | 1.5 months | Substrate VDO Module + Testnet | 7,000 |
| 3. Governance Layer | 1 month | Governance Pallet + Integration | 5,000 |
| 4. Evaluation & Report | 0.5 month | Final Review + Presentation | 2,000 |
| **Total** | **4 months** | — | **18,000 USD** |

---

**License Notice:**  
All deliverables will be published under the **MIT License**.  
Any integrations or dependencies on existing projects (e.g., Substrate FRAME, KILT, Phala, Crust) will properly reference and comply with their respective open-source licenses.



## Future Plans

- **How we intend to finance the project's long-term maintenance and development**
  Long-term Maintenance and Development:
  Ozed Hub Tech intends to sustain Ozed Network through a hybrid funding model combining ecosystem grants, venture partnerships, and validator incentives. Once the network reaches the mainnet stage, part of the governance treasury and validator rewards will be allocated to continuous development, audits, and community contributions.
  We also plan to establish a developer grant and ambassador program to encourage external contributions and ecosystem growth around Ozed’s core modules; especially in data sovereignty and interoperability tooling.

- **How we intend to use, enhance, and promote ozed network in the short term**
  Short-term Use, Enhancement, and Promotion:
  In the short term, the focus will be on completing the PoC chain, engaging with the Substrate Builders Program, and open-sourcing the development progress on GitHub.
  We will publish technical articles, tutorials, and developer walkthroughs to drive community engagement and attract early testers.
  Additionally, partnerships will be pursued with projects such as KILT (identity), Phala (confidential compute), and Crust (storage) to demonstrate interoperability and real-world use cases of verifiable data governance.

- **The team's long-term plans and intentions in relation to it**
  Long-term Vision and Team Intentions:
  The ultimate goal is for Ozed Network to evolve into a self-governing Layer-1 chain under a decentralized governance model.
  Ozed Hub Technology’s role will shift from sole developer to core contributor and ecosystem steward, focusing on protocol research, upgrades, and interoperability frameworks.
  Long-term, we aim to position Ozed Network as a data infrastructure hub for the Polkadot ecosystem enabling compliant, transparent, and sovereign data management across chains and enterprises.

## Referral Program (optional) :moneybag:

- **Referrer:** Referrer: N/A (No formal referral or ambassador affiliation at this stage. The team however welcomes future collaboration opportunities with the Web3 Foundation and Polkadot Ambassadors.)
- **Payment Address:** Polkadot/Kusama: 134Ffzb7qsYAuUVb8Wx4wj85e38pNsbXZwV1JXsxfp31o8xp (USDC)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** I learned about the Web3 Foundation Grants Program through a YouTube video explaining opportunities and builder support initiatives.

**Additional Information:**

- Ozed Network is an independent initiative by Ozed Hub Tech, currently in the research and prototype planning stage.
- No prior funding or external contributions have been received.
- This is the first grant application related to Ozed Network.
- All development work to date has been self-funded and self-directed.


Ozed Network represents a carefully planned, founder-led initiative aimed at advancing data sovereignty, transparency, and interoperability within the Polkadot ecosystem. With a clear technical vision, defined milestones, and a commitment to open-source principles, this project is positioned to deliver meaningful contributions to the Web3 community.
We are eager to leverage the support of the Web3 Foundation Grants Program to accelerate development, validate our proof-of-concept, and lay the foundation for a fully functional, interoperable Layer-1 blockchain. By approving this grant, the Foundation will help bring Ozed Network’s vision of verifiable and sovereign data management closer to reality.
