# **📝 Agent Dot**

## 🌟 Project Overview

**AI-Powered Interaction Layer for Polkadot ecosystem**

AgentDot is an AI-powered interaction layer designed to simplify onboarding and transaction flows for users in the Polkadot ecosystem. It leverages modern AI, robust frontend/backend stacks, and Polkadot’s interoperability to lower entry barriers and enhance user experience across all substrate chains. AgentDot can be used to interact with any Polkadot-SDK chain or multiple chains at a time.

The motivation to come up with the idea lies behind Edgetributor SubDAO’s efforts as an educator collective in India. During the workshops and hackathons we hosted/represented for Polkadot in India, we repeatedly identified the challenges of the learning curve and limited awareness faced by individuals new to the ecosystem.

### 🔍 Project Details

#### **1\. System Architecture Overview**

AgentDot is designed as a modular, scalable web application that integrates AI-driven user assistance with seamless blockchain interactions. The core architecture consists of:

* Frontend: User interface and interaction logic.
* Backend: Business logic, AI orchestration, and data management.
* Blockchain Layer: Polkadot-SDK chains and cross-chain protocols.
* AI Layer: Natural language processing for user queries and transaction intent.

#### **2\. Core Components**

##### Frontend

* Framework: Next.js
* UI Libraries: TailwindCSS, Shadcn
* API Integration: PAPI (Polkadot API)
* Key Features:
  * Multi-chain wallet integration
  * Guided onboarding flows
  * Transaction builder and explorer

##### Backend

* Server Logic: Node.js (with Next.js API routes or custom server)
* Database: Convex (tentative) or PostgreSQL for structured data
* AI Orchestration: Langchain for LLM workflow management
* Blockchain Communication: PAPI for Polkadot chain interactions
* Key Features:
  * User session and state management
  * AI intent parsing and translation to blockchain extrinsics
  * Secure authentication and authorization

##### Blockchain Layer

* Supported Chains: Any Polkadot-SDK chain (e.g., Polkadot, Kusama, Westend)
* Protocols:
  * XCM (Cross-Consensus Messaging): For cross-chain operations and asset transfers.
* Key Features:
  * Onboarding and identity management
  * Transaction execution and monitoring

##### AI Components

* LLM Model: Fine-tuned GPT-3.5 Turbo (tentative)
* Framework: Langchain for prompt engineering and context management
* Capabilities:
  * Natural language to extrinsic (transaction) translation
  * FAQ and ecosystem guidance
  * Personalized recommendations and onboarding
* Example Use Case: User asks, “How do I nominate validators?” AgentDot parses intent and guides through bonding, selection, and transaction steps.

#### **3\. Workflow Example: User Onboarding & Transaction**

- User Onboards:
  * Sign in with a wallet (Web3Auth/OAuth).
  * AgentDot AI guides through initial setup, chain selection, and wallet funding.
- User Query:
  * Asks a question in natural language (e.g., “Transfer 10 DOT to XYZ”).
  * AI parses intent, fetches context, and translates to required extrinsics.
- Transaction Execution:
  * AgentDot prepares the transaction using PAPI.
  * The user reviews and signs the transaction.
  * Backend monitors transaction status.

#### **4\. Extensibility and Community Integration**

- Modular Design: Easy addition of new parachains or AI models.
- Community Feedback Loop: AI records common queries to inform documentation and improve onboarding flows.
- Open Ecosystem: Supports integration with ecosystem dApps and parachains/solochains.

#### **Summary Table: Tech Stack Overview**

| Layer | Technology | Purpose |
| :---: | :---: | :---: |
| Frontend | Next.js, Tailwindcss, Shadcn | UI/UX, User flows |
| Backend | Node.js, Langchain, PAPI | Logic, AI orchestration, chain access |
| Database | Convex/PostgreSQL | User data |
| Blockchain | Polkadot-SDK, XCM | Transfers, Staking and Cross-chain |
| AI | Fine-tuned LLM | Natural language processing |

AgentDot’s architecture is designed to be robust, user-centric, and future-proof, leveraging Polkadot’s core strengths-interoperability, scalability, and security-to deliver an intuitive onboarding and transaction experience for all users.

### 🧩 Ecosystem Fit


* Where and how does your project fit into the ecosystem?
  
  AgentDot serves as an AI-powered interaction and onboarding assistant within the Polkadot ecosystem, designed to simplify user engagement across Polkadot ecosystem chains. It fits into the ecosystem as a user-centric layer that bridges the complexity of Polkadot’s multichain environment with intuitive natural language interfaces, enabling seamless interaction with multiple chains simultaneously. By leveraging Polkadot’s messaging format XCM and integrating with Polkadot-SDK chains, AgentDot enhances accessibility and usability, addressing the steep learning curve that new and existing users face in the ecosystem.

* Who is your target audience?
  
  The primary target audience for AgentDot includes:
  * Existing users looking to build/verify complex extrinsic without any error.
  * New users entering the Polkadot space who need guided onboarding to understand and interact with ecosystem chains.
  * Existing users who want to manage transactions and cross-chain activities more intuitively.
  * Developers and dApp users looking for a simplified interface to interact with multiple Polkadot chains without deep technical knowledge.

* What need(s) does your project meet?
  
  AgentDot addresses several critical needs within the Polkadot ecosystem:
  - Avoid mistakes in complex extrinsic: Enables anyone to easily build, verify and visualize extrinsic.
  - Lowering the entry barrier: Simplifies the complex onboarding process for new users unfamiliar with blockchain and Polkadot’s multichain architecture.
  - Reducing the learning curve: Provides AI-driven natural language interaction to translate user intents into blockchain extrinsics, making transactions and interactions more accessible.
  - Enhancing multi-chain interaction: Enables users to interact with multiple parachains or SDK chains simultaneously through a unified interface.


* Are there any other projects similar to yours in the Polkadot ecosystem?
  
  While the Polkadot ecosystem hosts a variety of projects focused on finance, gaming, and socials, there is no direct equivalent that combines AI-powered natural language onboarding and multi-chain interaction assistance as AgentDot does.

  AgentDot’s unique differentiation lies in its integration of a fine-tuned large language model to translate natural language queries into blockchain extrinsics, combined with a multi-chain interaction layer. AgentDot serves as a generalized onboarding and transaction assistant that can operate across any Polkadot-SDK chain. Its AI-driven approach to reducing complexity and improving user experience is a novel contribution to the ecosystem.

  **Why might such a project not exist yet?**
  
  The absence of a similar project may be due to the technical challenges involved in combining AI natural language processing with blockchain extrinsic translation and multi-chain interoperability. Polkadot’s ecosystem is still evolving, and the integration of advanced AI components with decentralized protocols is an emerging area.

## 👥 Team

- **Team Name:** Edgetributor SubDAO.
- **Contact Name:** Raj Raorane
- **Contact Email:** raj@edgeware.community
- **Website:** https://github.com/edgeware-network, https://x.com/Edgetributors

### Team members

- Raj Raorane
- Pranav Pawar
- Rama Jha
- Prashant Saundalkar
- C Gagan Babu
- Shankar Warang

#### LinkedIn Profiles

- https://www.linkedin.com/in/raj-raorane-45b2b4166/
- https://github.com/pranavcpawar/
- https://www.linkedin.com/in/rama-jha/
- https://www.linkedin.com/in/prashant-saundalkar-08142512a/
- https://www.linkedin.com/in/c-gagan-babu-0903b01b6/
- https://www.linkedin.com/in/shankar-warang/

### Team Code Repos

- https://github.com/edgeware-network

Please also provide the GitHub accounts of all team members:

- https://github.com/Raj-RR1
- https://github.com/pranavcpawar
- https://github.com/ramavats
- https://github.com/psaundalkar
- https://github.com/gagan7gb
- https://github.com/ShankarWarang

### Team's experience

Edgetributor SubDAO is a collective of active solo contributors from the [Edgeware DAO](https://edgeware.io/), one of the oldest substrate projects from the Polkadot ecosystem. Edgetributor SubDAO is also the maintainer of the treasury-funded [Universal Hybrid Substrate Faucet](https://github.com/edgeware-network/Universal-Hybrid-Substrate-Faucet) project. The SubDAO members bring 4-5 years of Polkadot/Substrate ecosystem experience and expertise from different domains.
Here are some of our notable contributions:

* Volunteered in co-hosting JAM Tour Mumbai & JAM Tour HongKong
  * Polkadot India IIT Bombay (Pre-JAM) Workshops
    * Short video: [https://x.com/Edgetributors/status/1889756742218649944](https://x.com/Edgetributors/status/1889756742218649944)
    * Aftermovie: [https://x.com/Edgetributors/status/1898485735197655437](https://x.com/Edgetributors/status/1898485735197655437)
    * POAP: [https://poap.gallery/drops/185245](https://poap.gallery/drops/185245)
    * Report: [Events Bounty Report: Polkadot India IIT Bombay Workshops](https://docs.google.com/document/d/1Yz_jLazpjlg6m_OYYjrnrlgKdkqjGqbkuo7hQriR37k/edit?usp=sharing)
  * INNOV8 hackathon in Terna Engineering College
    * [Terna INNOV8 Hackathon 2025](https://drive.google.com/drive/folders/1P-9Hl4NgI4eVC6hwjcB7A2pK4kAirRJw?usp=sharing)
    * POAP: [https://poap.gallery/drops/187820](https://poap.gallery/drops/187820)
    * Report: [INNOV8 3.0 Hackathon ft. Polkadot mini-workshops, mentoring & judging](https://docs.google.com/document/d/1iDDP8mzP720bgHGMd3hYLCw15wSgJtXkispvER_MQS0/edit?usp=drive_link)
  * Polkadot India IIT Roorkee Workshops
    * [Event-video-IIT\_Roorkee.mp4](https://drive.google.com/file/d/14vAZCN5T4fEVABkWxO41Fe9dpDvolOeM/view?usp=drive_link)
    * [Polkadot India IIT Roorkee Workshops](https://drive.google.com/drive/folders/1i_-P8qTKuzILh7r7BwBf2Wsw_-cQMOVh)
    * POAP: [https://poap.gallery/drop/179140](https://poap.gallery/drop/179140)
    * Report: [Events Bounty Report: Polkadot India IIT Roorkee Workshops](https://docs.google.com/document/d/1S-b3mbstbAZMOgC5iSzZg1Nn6O_Ad9Y0gwRMWJW9w2Q/edit?usp=sharing)
  * ETHIndia 2024
    * \#PolkadotAtETHIndia short-form video: [https://x.com/Edgetributors/status/1875028290857287808](https://x.com/Edgetributors/status/1875028290857287808)
    * Aftermovie: [https://x.com/Edgetributors/status/1877044710096720065](https://x.com/Edgetributors/status/1877044710096720065)
    * POAP: [https://poap.gallery/drops/182647](https://poap.gallery/drops/182647)
    * Report: [Events Bounty Report: ETHIndia 2024](https://docs.google.com/document/d/1uYVT1UOrwnMWus64W-Le8rOaNEViOowvieTwr1LIZOg/edit?usp=sharing)
  * Developer & maintainer of Universal Hybrid Substrate Faucet
    * [https://substratefaucet.xyz/](https://substratefaucet.xyz/)
    * [https://polkadot.polkassembly.io/referenda/541](https://polkadot.polkassembly.io/referenda/541)
  * Curator of Paul Miller’s sr25519 package
    * [https://github.com/paulmillr/micro-sr25519](https://github.com/paulmillr/micro-sr25519)
    * [https://polkadot.polkassembly.io/referenda/1165](https://polkadot.polkassembly.io/referenda/1165)


## 📅 Development Roadmap

### Overview

- **Estimated Duration:** 20 days
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 10000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can utilise AgentDot for different use cases. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article** that explains what was done/achieved as part of the grant. |


### Milestone 1: AI extrinsic builder

- **Estimated Duration:** 10 days
- **FTE:** 1
- **Costs:** 5000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1a. | Natural Language to Transfer Parser | Fine-tune the LLM to map user query to backend logic for transfers using PAPI. |
| 1b. | Natural Language to Staking Parser | Fine-tune the LLM to map user query to backend logic for staking/nomination using PAPI. |
| 1c. | Natural Language to XCM Parser | Fine-tune the LLM to map user query to backend logic for XCM transfers using ParaSpell. |
| 1d. | Wallet connector and extrinsic broadcaster | Custom wallet connectors to cover all the ecosystem wallets along with the broadcaster logic |

### Milestone 2: Prompt box queuing and batched execution

- **Estimated Duration:** 10 days
- **FTE:** 1
- **Costs:** 5000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 2a. | Transaction Queue UI | Build a Next.js-based interface for users to review, reorder, or cancel pending transactions. |
| 2b. | Batch Extrinsic Signer | Implement batch signing (utility.batch) for queued transactions along with callback/tracing using PAPI’s signSubmitAndWatch. |


### 💰 Budget Breakdown

Please provide a breakdown of your budget by milestone:

| Milestone | Deliverables | Cost (USD) | Estimated Completion |
| --- | --- | --- | --- |
| 1 | AI extrinsic builder (transfer, staking, xcm transfers) | $5000 | 10 days |
| 2 | Prompt box queuing and batched execution | $5000 | 10 days |
| **Total** | | **$10000** | **20 days** |

(160 hours of contribution at $62.5 / hour).

## 🔮 Future Plans

We would like to expand the set of supported functionalities from the current ones (transfer, staking & XCM). For the same, we might need to seek funding from OpenGov or other bounties after the fast grant development scope is delivered.

AgentDot’s vision aligns with Polkadot’s mission to power a user-centric Web3 future, transforming the ecosystem from a developer-focused environment into a mainstream-ready platform. By bridging AI and blockchain, AgentDot will drive the next wave of adoption, making the Polkadot ecosystem as intuitive to use as modern web applications, if not more.

## ℹ️ Additional Information

Work already done:
MVP UI for transfers.
