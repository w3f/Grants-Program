# Samaritan

- **Team Name:** Algorealm
- **DOT**: 14pG7HieCjNk2hZ4X2YvxkbpAXs9oCeW8aNZcD7tD2tpaJT9
  - **Payment Address**: 15M8sYRQSbErkg7eFMCHfpsGqR484A1YA4gHhfwBokDcV6aP (Polkadot AssetHub)
- **Level:** 3


## Project Overview :page_facing_up:

Samaritan is a decentralized backend-as-a-service (BaaS) platform that offers Firebase-like APIs for building real-time Web3 applications.

### Overview

**Samaritan** is a modern backend for Web3 apps, offering real-time document sync, wallet-based authentication, and a serverless function layer for event-driven logic — all without relying on centralized infrastructure. It enables developers to build collaborative, reactive dApps with the speed and simplicity of Firebase, but with the principles of decentralization at its core.


**Integration with Substrate / Polkadot**  
Samaritan integrates seamlessly with the Polkadot ecosystem via:

- **Wallet-based authentication** using Polkadot.js
- **Event listeners** for Ink! smart contracts
- **Off-chain triggers** responding to on-chain activity


**Why We’re Building This**

Firebase revolutionized app development by giving developers instant access to tools for real-time data, authentication, and cloud functions — allowing rapid iteration without backend complexity. But Firebase is a closed, centralized service — unsuitable for the Web3 vision of trustless, user-owned infrastructure.

Samaritan brings the Firebase experience to Web3: fast to integrate, powerful for real-time collaboration, and aligned with decentralization. Developers get a familiar stack — instant auth, real-time sync, and programmable logic — while users retain control over identity and data. Samaritan helps dApp teams move quickly without giving up sovereignty or composability.

### Project Details

**Samaritan** is a backend-as-a-service (BaaS) designed for decentralized applications. It brings the simplicity and power of Firebase — including real-time data updates, plug-and-play authentication, and reactive backend logic — into the Web3 world, without compromising on decentralization or user ownership.

Instead of relying on centralized services, Samaritan uses **wallet-based authentication** (e.g., Polkadot.js, MetaMask) and connects directly to **blockchain smart contracts** for event-based triggers. It enables a two-way interaction model: smart contracts can emit events that trigger backend logic, and backend logic can also invoke smart contracts when needed.

Rather than replicating all of Firebase, Samaritan focuses on the core features that matter most for dApp developers — **authentication**, **real-time sync**, and **serverless function execution** — all built to be modular, decentralized, and chain-agnostic.


#### Key Features of Samaritan

1. Decentralized Authentication
Samaritan replaces traditional email-and-password systems with a seamless, wallet-based login experience. Users authenticate using cryptographic signatures from wallets like MetaMask or Polkadot.js, allowing for secure, passwordless access without reliance on centralized identity providers. This form of authentication is inherently self-sovereign—users own and control their identity entirely—and it's interoperable across apps, making it easy for developers to support cross-platform login while respecting user privacy and autonomy.
2. Real-Time Document Sync
Samaritan includes a real-time, peer-to-peer document database built in Rust, designed for speed, safety, and collaboration at scale. It tracks structured JSON data and supports live updates across users and devices, enabling features like shared state, presence, and history. Powered by SwarmNL, it achieves low-latency communication without relying on a central server. While CRDTs may be used internally to handle conflict resolution, the core abstraction remains a developer-friendly document store — not a merge engine. This makes it ideal for building real-time dashboards, multiplayer apps, co-editing tools, and any product that benefits from decentralized, responsive state.
3. Smart Contract Event Integration  
Samaritan enables bi-directional interaction with smart contracts, bringing dynamic, event-driven logic to Web3 apps. On one hand, developers can register functions that react to on-chain events—like minting an NFT or updating a DAO proposal—executing off-chain code securely in response. On the other hand, Samaritan can also trigger smart contracts based on backend logic or user actions (e.g., writing to the database, reaching a threshold, or invoking a workflow). These interactions are processed through a lightweight function runtime that mirrors cloud functions—without central infrastructure—enabling powerful automation between on-chain and off-chain systems.

This makes it ideal for building collaborative Web3 applications — from multiplayer tools and real-time dashboards to automated workflows and co-editors — all on decentralized infrastructure.
This makes it ideal for building collaborative apps like editors, shared dashboards, or multiplayer tools — all on Web3 infrastructure.

Samaritan builds on our earlier work developing [SwarmNL](https://github.com/algorealmInc/SwarmNL), a lightweight peer-to-peer networking layer designed for real-time synchronization without centralized servers, built on libp2p. With this, we are able to bring real-time, decentralized communication patterns to Samaritan — allowing users and devices to sync data directly, securely, and with minimal latency. SwarmNL’s architecture forms the backbone of Samaritan’s real-time update engine.

#### 🔧 Stack

- Rust (Core Infrastructure)
- TypeScript/JavaScript (SDKs/API library)
- React (Admin Dashboard)

#### What Samaritan is not
Samaritan is not a blockchain or smart contract platform. It doesn't aim to create a new consensus layer, token economy, or on-chain execution environment. Instead, it integrates with existing chains like Ethereum and Polkadot for authentication, data anchoring, and event-driven workflows.

It also isn’t trying to replicate Firebase feature-for-feature. Services like analytics, crash reporting, or deep user segmentation are out of scope for the MVP. Samaritan is focused on solving three core backend primitives for Web3 apps: authentication, real-time data sync, and smart contract integration. Additional features will be considered based on real developer needs and community feedback.

### Ecosystem Fit
Samaritan fits into the Polkadot ecosystem as a lightweight developer tool for real-time data sync, decentralized identity, and smart contract event integration. It provides essential backend primitives—like wallet-based authentication, live peer-to-peer collaboration, and contract-triggered workflows—that parachains, dApps, and wallets can use without depending on centralized infrastructure.

Rather than trying to be a full-featured platform, Samaritan focuses on enabling these foundational capabilities in a modular, pluggable way that supports Polkadot’s vision of interoperability, trustlessness, and developer empowerment.


#### 🎯 Target Audience

Our primary target audience includes:

- **dApp developers** who need real-time, collaborative features like shared dashboards, multiplayer editing, or live session data.
- **Wallet and identity providers** looking to extend DID systems with live application state tied to users.
- **Parachain and infrastructure teams** that want to integrate real-time app logic or contract-triggered workflows without maintaining extra backend services.
- **Builders and creators** seeking developer-friendly, decentralized alternatives to Firebase for identity and event-driven apps.

#### ✅ Needs Met by Samaritan

Samaritan solves critical backend challenges for decentralized app developers:

- **Live document synchronization** across clients using peer-to-peer messaging — no centralized relay or server needed.  
- **Wallet-based authentication** using Polkadot.js or MetaMask, with self-sovereign sessions and no passwords.  
- **Event-driven backend logic**, triggered by smart contract events or external inputs — allowing rich, decentralized workflows.  
- **Infrastructure minimization**, by removing the need to maintain custom backend stacks or centralized APIs.


#### How These Needs Were Identified

We identified these needs through a combination of:

- Experience from building **SwarmNL**, our CRDT engine base, and testing it in apps requiring offline sync and real-time collaboration.
- https://www.buildondot.com/ideas/web3-firebase/

Samaritan distinguishes itself by combining **wallet-based authentication**, **real-time peer-to-peer data sync**, and **event-driven backend logic** into a cohesive, developer-friendly backend. It is purpose-built for applications that require **live, collaborative experiences**—without relying on centralized infrastructure. By abstracting complex decentralized primitives into familiar interfaces, Samaritan empowers developers to build modern, Web3-native apps with minimal friction.



#### What Makes Samaritan Different

Samaritan is a unified Web3 backend that:

- Includes a **decentralized document database** powered by a custom sync engine (built on SwarmNL) for real-time, conflict-free collaboration.
- Provides **serverless authentication** using Ethereum and Polkadot wallets — no username/password or backend setup required.
- Supports **event-driven smart contract integration**, enabling both reactive (listen to events) and proactive (trigger contracts) interactions.
- Delivers a **simple, Firebase-like developer experience**, with intuitive SDKs and patterns for building live, collaborative apps — without the centralized overhead.

#### Similar Projects in Other Ecosystems

We’ve studied comparable efforts outside Polkadot:

- **Automerge** and **Yjs** offer CRDTs, but lack native wallet-based auth or contract integration.
- **Textile**, **3Box/Ceramic**, and **OrbitDB** focus on decentralized identity or storage, but don’t provide real-time collaboration or bidirectional contract logic.
- **Liveblocks** and **Firebase** are widely used for real-time apps but are centralized and unsuitable for decentralized, trust-minimized systems.

#### Why Samaritan is Unique

Samaritan is the only solution that combines:

- **Real-time CRDT-based syncing** for live, conflict-free collaboration  
- **Decentralized identity** using Ethereum and Polkadot wallets  
- **Smart contract integration** for two-way communication between on-chain events and off-chain logic  

...all in a single, protocol-native system purpose-built for modern Web3 applications.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Adedeji Adebayo
- Names of team members: Sacha Lansky, Promise Okafor, Daniel Brai

### Contact

- **Contact Name:** Adedeji Adebayo
- **Contact Email:** adebayodeji15@gmail.com

### Legal Structure

- **Registered Address:**  	374 Westgate St, Apt 12, Iowa City, Iowa 52246 Us
- **Registered Legal Entity:** Algorealm, Inc.

### Team's experience

Adedeji Adebayo is a dynamic and inquisitive programmer with over 7 years of experience in web development, systems software, and blockchain developemt. He is the founder of Algorealm, a company focused on building foundational infrastructure for decentralized applications.
Adedeji has earned recognition in the Web3 space, notably securing a top-three position in the Web3 and Tooling category of the Polkadot Hackathon: North America Edition. He also won the KILT category in the Polkadot Hackathon: Europe Edition with a solution tackling property management issues in West Africa.
He served as core developer on [**SwarmNL**](https://github.com/algorealmInc/SwarmNL), a Rust library for building custom networking layers in decentralized and distributed applications.

Sacha Lansky joined Parity in 2021, where he led all things developer relations including launching initiatives like the Substrate Newsletter, Substrate Seminar and SDK Unwinds and has played a key role in the content launch for the first wave of the Polkadot Blockchain Academy. He now leads the developer relations team at WebZero, delivering hackathons for the ecosystem and helping developers build on Polkadot. He was also the project lead for the development of SwarmNL.

Promise Okafor is a seasoned software engineer with over 5 years of experience in crafting scalable and accessible frontend applications using JavaScript and its frameworks, including React and Next.js. With a keen eye for detail, Promise ensures that every aspect of the user experience is meticulously considered and executed. His expertise spans a range of technologies, including React, Next.js, Tailwind CSS, TypeScript, Redux, and TanStack Query, allowing him to deliver high-quality solutions that meet the demands of modern web development.

Daniel Brai is a Software Engineer over 3 years of experience building web applications and APIs. Daniel specializes in backend development and has a passion for artificial intelligence and machine learning.  He uses right tool for the job as such he has expertise using Python, Typescript, Golang, Rust and Elixir in various projects.

### Team Code Repos

- https://github.com/algorealminc


## Development Status :open_book:

We began iterating on Samaritan as a personal exploration into the possibilities of data self-sovereignty. Between its early stages and 2023, we built several proof-of-concepts including, the latest of which was known as [SamaritanDB](https://github.com/thewoodfish/samaritandb-proto1). 
In 2024, we took a step back to rethink the architecture. Rather than tightly coupling networking and storage, we decided to abstract the networking layer into a modular, pluggable subsystem. This led to the development of [SwarmNL](https://github.com/algorealmInc/SwarmNL) — a purpose-built networking engine optimized for real-time synchronization, CRDTs, and offline collaboration, built on libp2p.
Now that SwarmNL is stable and proven, we are in the strongest position yet to realize Samaritan, grounded in privacy, decentralization, and composability.

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 4.5 months
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** $57,200

### 🚀 Milestone 1 — Authentication

- **Estimated duration:** 1 month  
- **FTE:** 2.5  
- **Cost:** $14,000

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Full inline documentation will be provided for all Rust and TypeScript modules. A setup guide will demonstrate how to integrate wallet-based authentication. |
| **0c.** | Testing and Testing Guide | The authentication logic will be covered with unit and integration tests. A guide will detail how to test signature verification, session handling, and API endpoints. |
| **0d.** | Docker | A `Dockerfile` and `docker-compose.yml` will be provided to run the Rust backend and React admin panel locally. |
| **1.** | Authentication Rust Backend | A Rust backend that verifies signatures from Polkadot or Ethereum wallets. It supports login by verifying a signed challenge (nonce), issues JWTs for authenticated sessions, and handles token refresh and revocation. |
| **2.** | TS/JS Auth SDK | A TypeScript/JavaScript SDK that handles wallet connection, retrieves a challenge from the backend, signs it, and exchanges it for a JWT. Supports both Polkadot.js and MetaMask-compatible wallets. |
| **3.** | React Admin Panel | A React-based admin dashboard to monitor and test authentication flows, including wallet connections and active sessions. |
| **4.** | Nonce Challenge System | A secure challenge-response system where the backend issues a unique nonce per login attempt, which the user signs with their wallet to prove ownership. Nonces expire after a short time window. |
| **5.** | Token System | Stateless authentication using short-lived access tokens and long-lived refresh tokens, signed using server-side keys. Token rotation and revocation will be implemented. |
| **6.** | Session Persistence | The SDK will manage session state in the browser using secure local/session storage. It will automatically refresh tokens and handle re-authentication as needed. |
| **7.** | Examples | Practical examples demonstrating how to implement decentralized authentication with **Samaritan** |



### 🚀 Milestone 2 — Real-Time Document Sync

- **Estimated Duration:** 1.5 months  
- **FTE:** 2.5
- **Cost:** $21,600

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline code documentation and a technical guide explaining the real-time sync engine, how it integrates with SwarmNL, and how clients can listen for updates and push changes. |
| **0c.** | Testing + Testing Guide | Unit and integration tests covering document syncing, subscription logic, and merge resolution. A test guide will explain how to run local and simulated multi-client scenarios. |
| **0d.** | Docker | A Docker image to run the real-time document sync engine locally for testing and development. |
| **1.** | Real-Time Document Engine (Rust) | A Rust-based backend that maintains live JSON documents, handles client subscriptions, and broadcasts updates using SwarmNL. |
| **2.** | Pub/Sub Protocol | A structured topic-based protocol for syncing documents and metadata updates (e.g., `doc:update`, `doc:delete`, `user:presence`). |
| **3.** | TypeScript/Javascript Client SDK | A browser-compatible SDK for subscribing to documents, applying updates, listening for changes and handling reconnection logic. |
| **4.** | Integration with Auth System | Real-time access control using tokens from Milestone 1. Ensures only authenticated and authorized users can read/write documents. |
| **5.** | Admin Dashboard Integration | Extend the React admin panel to show live document changes, active subscriptions, and connection status. |
| **6.** | Real-Time Demo App | A minimal collaborative app demonstrating real-time editing of shared documents across multiple clients, powered by the sync engine. |


### 🚀 Milestone 3 — Smart Contract Integration & Extensibility

- **Estimated Duration:** 1.5 months  
- **FTE:** 1.5  
- **Cost:** $21,600

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Developer documentation on how to deploy cloud functions triggered by Ink! smart contract events. Includes architecture guides and setup instructions. |
| **0c.** | Testing + Guide | Tests for contract-event listeners and trigger executions, with instructions for simulating events and observing side effects. |
| **0d.** | Docker | Updated Docker environment with support for smart contract event listening and trigger execution. |
| **1.** | Smart Contract Event Listener (Rust) | Build a background service that listens for contract events from a Substrate-based chain (via WebSocket), parses relevant logs, and forwards them to registered functions. |
| **2.** | Cloud Function Engine (Rust) | Add a module that lets developers register and deploy custom logic (e.g., serverless functions) to run in response to events. These functions can access document data, trigger sync, or call external APIs. |
| **3.** | Plugin Runtime API | Define a plugin interface for sandboxed code execution (WASM or restricted JS). Integrate runtime with developer-deployable extensions. |
| **4.** | Admin Dashboard Extension | Extend the React dashboard to allow function creation, log inspection, and event simulation. |
| **5.** | Example Application | Example: An NFT minting contract that triggers an off-chain profile creation or leaderboard update, demonstrating two-way interaction. |


## Future Plans

In the short term, we intend to continue developing Samaritan into a production-ready alternative to Firebase for Web3. We plan to release SDKs and developer tools that will make it easy to integrate Samaritan into existing dApps.

To promote adoption, we will run developer workshops, publish technical tutorials, and partner with early-stage dApps that need a Firebase-like backend tailored for Web3 primitives. We also plan to actively engage with the Substrate, Polkadot, and broader Web3 developer communities to showcase how Samaritan can accelerate their development workflows.

#### Long-Term Vision

Long-term, we plan to add premium services and build more decentralized backend tools that developers can easily plug into their apps. This will make building dApps faster and simpler, helping grow a richer Web3 ecosystem.

Samaritan is part of a broader vision we’ve been pursuing since our initial proof of concept in 2023. With SwarmNL now mature as our networking layer, we believe Samaritan is in the best position to define the standard for decentralized backend services—starting with Firebase parity and expanding into new paradigms that traditional backend-as-a-service models cannot support.

## Additional Information :heavy_plus_sign:.

**How did you hear about the Grants Program?** Personal recommendation.