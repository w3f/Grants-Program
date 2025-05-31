# Samaritan

- **Team Name:** Algorealm
- **Payment Details:**
  - **DOT**: 14pG7HieCjNk2hZ4X2YvxkbpAXs9oCeW8aNZcD7tD2tpaJT9
  - **Payment Address**: 14G7SjRE2TbWVH2yXNe2uwYU1H8Q4c4hyWk892naB3eX7KTy (Polkadot AssetHub)
- **Level:** 3


## Project Overview :page_facing_up:

Samaritan is a decentralized backend-as-a-service (BaaS) platform that offers Firebase-like APIs for building real-time Web3 applications.

### Overview
Samaritan is a modern backend for Web3 apps that combines a real-time document database, decentralized authentication, and peer-to-peer storage, making it easy to build collaborative, data-driven dapps without relying on centralized servers.


**Integration with Substrate / Polkadot**  
Samaritan will interoperate with Polkadot through:
- Polkadot.js-based wallet auth

**Why We’re Building This**  
Firebase has become the go-to backend for modern app development because it's fast, simple, and powerful — developers can build, test, and iterate in hours, not weeks. It offers real-time updates, easy authentication, and seamless data storage with minimal setup, making it a joy to use.

But Firebase is also a centralized system, controlled by a single entity. In the Web3 world, that’s a dealbreaker.

Samaritan brings the developer experience of Firebase into the decentralized web — enabling real-time apps that are easy to build and iterate on, while upholding Web3 values like data ownership, trustlessness, and composability. With familiar tools and interfaces, Samaritan empowers developers to move fast without compromising on sovereignty or control.

### Project Details

Samaritan is a backend-as-a-service (BaaS) designed specifically for decentralized applications. Inspired by the developer experience offered by platforms like Firebase — including real-time data updates, simple authentication, and easy integration — Samaritan brings those features to the Web3 space while preserving decentralization and data sovereignty.

Unlike traditional backends where data and authentication are managed by centralized providers, Samaritan uses decentralized storage (e.g., IPFS) and blockchain-based authentication through wallet signatures (e.g., MetaMask, Polkadot.js). 

Rather than trying to replace all of Firebase, Samaritan focuses on the core features most useful to dApp developers — authentication, storage, and real-time updates — and builds them to be modular and interoperable.

#### Key Features of Samaritan

1. Decentralized Authentication
Samaritan replaces traditional email-and-password systems with a seamless, wallet-based login experience. Users authenticate using cryptographic signatures from wallets like MetaMask or Polkadot.js, allowing for secure, passwordless access without reliance on centralized identity providers. This form of authentication is inherently self-sovereign—users own and control their identity entirely—and it's interoperable across apps, making it easy for developers to support cross-platform login while respecting user privacy and autonomy.
2. Real-Time Document Sync
Samaritan includes a real-time, peer-to-peer document database built in Rust, designed for speed, safety, and collaboration at scale. It tracks structured JSON data and supports live updates across users and devices, enabling features like shared state, presence, and history. Powered by SwarmNL, it achieves low-latency communication without relying on a central server. While CRDTs may be used internally to handle conflict resolution, the core abstraction remains a developer-friendly document store — not a merge engine. This makes it ideal for building real-time dashboards, multiplayer apps, co-editing tools, and any product that benefits from decentralized, responsive state.
3. Decentralized Storage
Instead of sending all data to a central server, Samaritan embraces a local-first, peer-to-peer storage model. It uses CRDTs (Conflict-free Replicated Data Types) to ensure that data written offline or in parallel across devices always merges correctly. Data is stored locally, synced in real-time when connections are available, and optionally anchored to IPFS for persistence. This approach not only improves performance and privacy but also makes applications resilient to network interruptions and server outages.


This makes it ideal for building collaborative apps like editors, shared dashboards, or multiplayer tools — all on Web3 infrastructure.

Samaritan builds on our earlier work developing [SwarmNL](https://github.com/algorealmInc/SwarmNL), a lightweight peer-to-peer networking layer designed for real-time synchronization without centralized servers, built on libp2p. With this, we are able to bring real-time, decentralized communication patterns to Samaritan — allowing users and devices to sync data directly, securely, and with minimal latency. SwarmNL’s architecture forms the backbone of Samaritan’s real-time update engine.

#### 🔧 Stack

- Rust (Core Infrastructure)
- TypeScript/JavaScript (SDKs/API library)
- React (Admin Dashboard)

#### What Samaritan is not
Samaritan is not intended to be a full-fledged blockchain or smart contract platform. While it leverages decentralization principles, it will not provide its own consensus mechanism, token economy, or on-chain execution environment. Instead, it integrates with existing chains (e.g., Ethereum, Polkadot) for identity proofs or data anchoring when needed.

Additionally, Samaritan does not aim to replicate Firebase feature-for-feature. Services like analytics, crash reporting, or user segmentation dashboards are outside the scope of this MVP. Our focus is tightly centered on authentication, storage, and real-time sync—reimagined in a trust-minimized, user-owned way. Features beyond that will only be explored with community feedback and scaling demands.

### Ecosystem Fit
Samaritan fits into the Polkadot ecosystem as a developer tool for handling real-time data sync, decentralized identity, and user-owned storage. It provides basic building blocks that parachains, dapps, or wallets can use when they need real-time collaboration or persistent user data — without falling back on centralized servers or databases. Rather than offering a full platform, Samaritan focuses on enabling these core capabilities in a way that aligns with Polkadot’s goals around interoperability, privacy, and user control.


#### Target Audience

Our primary target audience includes:

- **dApp developers** looking to add decentralized, collaborative features to their apps (e.g., multiplayer editing, shared data spaces).
- **Wallet and identity providers** exploring richer DID integrations and account-linked state.
- **Parachain teams** needing decentralized sync and document coordination without spinning up extra infrastructure.
- **End-users and builders** who want trustless tools to collaborate, store, and sync information without vendor lock-in.

#### Needs Met by Samaritan

Samaritan solves key problems faced by dapp developers:

- **Real-time document database** for syncing data across users and devices without relying on centralized servers.  
- **Decentralized, serverless infrastructure** to reduce costs and improve availability.  
- **Wallet-based authentication** and cross-platform identity support.  
- **Private, shared state** for collaborative apps — without exposing data to third parties.


#### How These Needs Were Identified

We identified these needs through a combination of:

- Experience from building **SwarmNL**, our CRDT engine base, and testing it in apps requiring offline sync and real-time collaboration.
- https://www.buildondot.com/ideas/web3-firebase/

#### Similar Projects in the Polkadot Ecosystem

A few projects address fragments of what Samaritan offers:

- **KILT** and **Litentry** provide decentralized identity and verifiable credentials. However, they do not support real-time collaboration, shared state management, or decentralized data synchronization across users and devices.
- **Crust Network** is focused on decentralized file storage, offering an IPFS-based alternative to cloud storage. While powerful for static content, it does not address dynamic application state or real-time collaboration.
Apillon is like a Web3 version of AWS, offering modular tools such as storage, identity, and hosting. However, it lacks the real-time sync, collaborative data flow, and decentralized conflict resolution that make Samaritan feel more like using Firebase. Samaritan is designed with the user experience in mind—fast, real-time, and built for seamless collaboration.


Samaritan distinguishes itself by combining decentralized identity, real-time data synchronization, and self-sovereign storage into a cohesive, developer-friendly backend — specifically built for applications that need collaborative, live experiences without relying on centralized infrastructure.


#### What Makes Samaritan Different

Samaritan is a unified Web3 backend that:

- Includes a **decentralized document database** powered by a custom CRDT engine (built on SwarmNL) for real-time, conflict-free collaboration.
- Provides **serverless authentication** using Ethereum and Polkadot wallets — no backend setup needed.
- Leverages **IPFS** for durable, self-sovereign storage with a fast, reactive sync layer optimized for edge performance.
- Delivers a **simple, Firebase-like developer experience**, with intuitive APIs and familiar patterns — no steep learning curve.


#### Similar Projects in Other Ecosystems

We’ve studied comparable efforts outside Polkadot:

- **Automerge** and **Yjs** offer CRDTs, but lack native identity or storage integration.
- **Textile**, **3Box/Ceramic**, and **OrbitDB** focus on decentralized storage, but don’t provide deterministic sync or strong offline collaboration guarantees.
- **Liveblocks** and **Firebase** are performant and popular, but centralized and not suitable for trustless systems.

#### Why Samaritan is Unique

Samaritan is the only solution that combines:

- **Real-time CRDT-based syncing** for live, conflict-free collaboration  
- **Decentralized identity** using Ethereum and Polkadot wallets  
- **Distributed, self-sovereign storage** powered by IPFS  

...all in a single, protocol-native system purpose-built for modern Web3 applications.


## Team :busts_in_silhouette:

### Team members

Name of team leader: Adedeji Adebayo
Names of team members: Sacha Lansky

### Contact

- **Contact Name:** Adedjei Adebayo
- **Contact Email:** adebayodeji15@gmail.com

### Legal Structure

- **Registered Address:**  n/a
- **Registered Legal Entity:** n/a

### Team's experience

**Adedeji Adebayo** is a dynamic and inquisitive programmer with over 7 years of experience in web development, systems software, and blockchain developemt. He is the founder of Algorealm, a company focused on building foundational infrastructure for decentralized applications.
Adedeji has earned recognition in the Web3 space, notably securing a top-three position in the Web3 and Tooling category of the Polkadot Hackathon: North America Edition. He also won the KILT category in the Polkadot Hackathon: Europe Edition with a solution tackling property management issues in West Africa.
He served as core developer on [**SwarmNL**](https://github.com/algorealmInc/SwarmNL), a Rust library for building custom networking layers in decentralized and distributed applications.

Sacha Lansky joined Parity in 2021, where he led all things developer relations including launching initiatives like the Substrate Newsletter, Substrate Seminar and SDK Unwinds and has played a key role in the content launch for the first wave of the Polkadot Blockchain Academy. He now leads the developer relations team at WebZero, delivering hackathons for the ecosystem and helping developers build on Polkadot. He was also the project lead for the development of SwarmNL.

### Team Code Repos

- https://github.com/algorealminc
- https://github.com/thewoodfish
- https://github.com/sacha-l

## Development Status :open_book:

We began iterating on Samaritan as a personal exploration into the possibilities of data self-sovereignty. Between its early stages and 2023, we built several proof-of-concepts including, the latest of which was known as [SamaritanDB](https://github.com/thewoodfish/samaritandb-proto1). 
In 2024, we took a step back to rethink the architecture. Rather than tightly coupling networking and storage, we decided to abstract the networking layer into a modular, pluggable subsystem. This led to the development of [SwarmNL](https://github.com/algorealmInc/SwarmNL) — a purpose-built networking engine optimized for real-time synchronization, CRDTs, and offline collaboration, built on libp2p.
Now that SwarmNL is stable and proven, we are in the strongest position yet to realize Samaritan, grounded in privacy, decentralization, and composability.

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** $57,600

### 🚀 Milestone 1 — Authentication

- **Estimated duration:** 1 month  
- **FTE:** 1.5  
- **Costs:** 14,400 USD

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| **0a.** | License | MIT License. All code and deliverables for this milestone will be released under the MIT license. |
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
- **FTE:** 1.5  
- **Costs:** 21,600 USD

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


### 🚀 Milestone 3 — Decentralized Storage

- **Estimated Duration:** 1.5 months  
- **FTE:** 1.5  
- **Costs:** 21,600 USD


| Number | Deliverable | Specification |
|--------|-------------|---------------|
| **0a.** | License | Code released under the MIT license. |
| **0b.** | Documentation | Inline code documentation and a comprehensive developer guide detailing how to run storage nodes, connect via SDK, upload/download data, and manage access control. |
| **0c.** | Testing and Testing Guide | Unit and integration tests covering upload, retrieval, access enforcement, CID handling, and signature validation. A testing guide will explain test execution. |
| **0d.** | Docker | Dockerfile and docker-compose setup for local deployment of the decentralized storage node with SwarmNL bootstrapping. |
| **0e.** | Article | Publish an article describing Samaritan’s decentralized storage architecture, SwarmNL integration, and advantages over centralized cloud storage. |
| **1.** | Rust-based Storage Node | Core daemon implemented in Rust handling storage, CID resolution, signature validation, access control, and peer synchronization via SwarmNL. |
| **2.** | Storage Gateway API (Rust) | RESTful and WebSocket gateway exposing endpoints for upload/download with signed request validation and SwarmNL integration. |
| **3.** | TypeScript SDK | Browser- and Node.js-compatible SDK for interacting with the storage layer. |
| **4.** | React Admin Interface | Dashboard for developers and node operators to view stored content, metadata, and node replication status. |
| **5.** | Binary Publishing | Publish compiled binaries for easy installation and deployment on popular platforms (Linux, macOS, Windows). |
| **6.** | Example Applications | Provide example scripts and demo applications showing the full authentication, storage, retrieval, and real-time update workflow from front-end to backend. |

## Future Plans

In the short term, we intend to continue developing Samaritan into a production-ready alternative to Firebase for Web3. We plan to release SDKs and developer tools that will make it easy to integrate Samaritan into existing dApps.

To promote adoption, we will run developer workshops, publish technical tutorials, and partner with early-stage dApps that need a Firebase-like backend tailored for Web3 primitives. We also plan to actively engage with the Substrate, Polkadot, and broader Web3 developer communities to showcase how Samaritan can accelerate their development workflows.

#### Long-Term Vision

Long-term, we plan to add premium services and build more decentralized backend tools that developers can easily plug into their apps. This will make building dApps faster and simpler, helping grow a richer Web3 ecosystem.

Samaritan is part of a broader vision we’ve been pursuing since our initial proof of concept in 2023. With SwarmNL now mature as our networking layer, we believe Samaritan is in the best position to define the standard for decentralized backend services—starting with Firebase parity and expanding into new paradigms that traditional backend-as-a-service models cannot support.

## Additional Information :heavy_plus_sign:.

**How did you hear about the Grants Program?** Personal recommendation.