# 📝 PolkaRTC: A Rust-based WebRTC SFU Engine for Polkadot

## 🌟 Project Overview

**Tagline:**
Real-time communication for Polkadot dApps, powered by a native Rust SFU.

**Description:**
PolkaRTC is a Selective Forwarding Unit (SFU) implemented in Rust, enabling decentralized and privacy-preserving video/audio calls for Polkadot-based applications. It routes WebRTC streams between participants and stores session metadata on-chain. Key use cases include on-chain arbitration, KYC video verification, DAO meetings, and proctoring solutions.

PolkaRTC is an iteration of **Proctodot**, which won **first place at the EasyA Consensus 2025 Hackathon under the Polkadot Launch track**. While Proctodot was purpose-built for decentralized exam monitoring, PolkaRTC generalizes the infrastructure to support a broader range of use cases across governance, compliance, and secure communication.

Everything implemented in Proctodot will also be included in PolkaRTC — including **on-chain event tracking** such as when a participant joins, drops, or reconnects during a session. These events will be pushed to the Substrate chain for transparent auditability.

**Integration with Polkadot:**
- Session hashes and IPFS CIDs are anchored to a Substrate-based chain.
- Future integration with DIDs and identity pallets (e.g., KILT) for wallet-authenticated access.
- Designed for compatibility with Plaza, Polkadot Hub, and any parachain needing real-time communication.

**Interest:**
The team is focused on bringing decentralized communication infrastructure to Polkadot. WebRTC is a crucial layer missing in the stack, and PolkaRTC aims to fill that gap with a secure, verifiable, and developer-friendly Rust-native solution.

### 🔍 Project Details

**Tech Stack:**
- `webrtc-rs`: Core WebRTC stack in Rust
- `actix-web`: For signaling via WebSocket
- `tokio`: Async runtime for coordination
- `gstreamer-rs`: RTP capture + recording pipeline
- `rust-ipfs`: Upload session recordings to IPFS
- `subxt`: Submit session metadata to a Substrate-based chain

**Core Components:**
- WebSocket-based signaling layer
- SFU logic for 1-to-N peer communication
- Optional server-side recording via RTP dump
- Upload of recorded session to IPFS
- Substrate runtime interaction for anchoring session metadata

**Not Included:**
- No full-featured conferencing platform (focus is on low-level SFU routing)
- No integration with specific parachains (but designed to be pluggable)

**Includes:**
- A minimal React-based frontend to support the primary use case of decentralized proctoring, with features for joining rooms and viewing basic session status.
- On-chain event tracking for session actions like join, drop, reconnect.

### 🧩 Ecosystem Fit

**Fit:**
PolkaRTC serves as decentralized communication middleware for the ecosystem. Any dApp requiring secure, auditable, and token-gated audio/video communication can adopt it.

**Target Audience:**
- DAO governance tools
- Arbitration/mediation protocols
- KYC/onboarding solutions
- Proctoring apps

**Needs Addressed:**
- Enables WebRTC-native use cases in Polkadot.
- Lowers barrier for real-time collaboration in decentralized contexts.
- Makes session metadata verifiable and permanent.

**Similar Projects:**
None within the Polkadot ecosystem. Huddle01 exists in Ethereum world but lacks on-chain anchoring or Substrate-native implementation.

## 👥 Team

- **Team Name:** Name of your team. If you apply as a legal entity, please use its name.
- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email
- **Website:** Your website, GitHub org, blog, or similar

### Team members

- **Team Name:** Feooh
- **Contact Name:** Inderdeep Singh Khanna
- **Contact Email:** inderdeep.khanna@gmail.com
- **Website:** https://feooh.com/

**Team Members:**
- Inderdeep Singh Khanna

**Team Repos:**
- https://github.com/DDPidhi/proctodot-web
- https://github.com/DDPidhi/proctodot-core
- https://github.com/DDPidhi/proctoink

**GitHub Accounts:**
- https://github.com/ddpidhi

**Experience:**
Inderdeep is a full-stack engineer with over 10 years of experience across Web2 and Web3 technologies. At Feooh, he:
- Recently transitioned into Web3 and successfully delivered two award-winning hackathon projects integrating Substrate, Ink!, and React Native.
- Built a React Native wallet app that bridges EVM and Substrate ecosystems.
- Developed the Proctodot proof of concept that won first prize in the Polkadot Launch track at the EasyA Consensus 2025 Hackathon.
- Deployed smart contracts migrating NFTs from Kusama to Astar.
- Built a Laravel-based CRM and BI tool for e-commerce and affiliate marketing.
- Previously contributed to healthcare, fintech, and loyalty platforms for clients like BMO, TD, Desjardins, PWC, and HSBC.

## 📊 Development Status

A working proof of concept was developed during the EasyA Consensus 2025 Hackathon using **a peer-to-peer WebRTC connection in a React app**, `actix-web` for signaling, and `ink!` smart contracts. This POC successfully demonstrated decentralized proctoring with real-time video streams and on-chain event logging, including join/drop session events. The architecture and functionality from this POC will be carried forward into PolkaRTC.

Research and experimentation completed using `actix-web` and SFU stream routing concepts. Initial signaling and 1-to-N peer relay logic are being transitioned to a full Rust-based SFU using `webrtc-rs`. Ready to formalize and polish into a public repo with tests and recording support.

## 📅 Development Roadmap

### Overview
- **Estimated Duration:** 3 months
- **FTE:** 1
- **Total Costs:** $10,000

| Number | Deliverable | Specification |
|--------|-------------|----------------|
| 0a | License | Apache 2.0 |
| 0b | Documentation | Inline code docs + tutorial on setting up and testing PolkaRTC from source |
| 0c | Testing and Guide | Unit tests for signaling, peer routing, IPFS upload, and event logging + test guide |
| 0d | Article | Dev blog post introducing PolkaRTC and how to use it |
| 1 | Core SFU Signaling | Signaling server using `actix-web`, supporting SDP and ICE exchange over WebSocket |
| 2 | SFU Media Routing | Peer-to-peer 1-to-N RTP packet forwarding using `webrtc-rs` + session management |
| 3 | Recording + IPFS | RTP capture → GStreamer pipeline → WebM file → Upload to IPFS and return CID |
| 4 | Substrate Integration | Store session CID, timestamps, and participant events (join, drop, reconnect) on a test Substrate chain using `subxt` |

### 💰 Budget Breakdown

| Milestone | Deliverables | Cost (USD) | Estimated Completion |
|-----------|--------------|------------|----------------------|
| 1 | 0a, 0b, 0c, 0d, 1, 2 | $5,000 | 1.5 months |
| 2 | 3, 4 | $5,000 | 1.5 months |
| **Total** |              | **$10,000** | **3 months** |

## 🔮 Future Plans

- Integrate DIDs and Polkadot.js wallet support for identity-bound sessions.
- Expand the React frontend for more use cases like DAO governance calls and KYC walkthroughs.
- Offer token-gated access logic for DAO and grant tooling.
- Seek follow-up funding via W3F Open Grants or Ecosystem Treasuries.

## ℹ️ Additional Information

- Initial prototype built and tested locally
- No other teams involved
- No other funding applied yet

PolkaRTC is designed as a foundational communication primitive for the decentralized future of governance, verification, and collaboration on Polkadot.