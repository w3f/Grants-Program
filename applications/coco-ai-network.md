# Common Compute Network

- **Team Name:** Common Compute Labs
- **Payment Details:**
  - **DOT**: 12nNNM6RBnExmfvLy2cGAFF2Qp7HShXN2W6bh9jSN9XcjW6y
  - **Payment**: 12nNNM6RBnExmfvLy2cGAFF2Qp7HShXN2W6bh9jSN9XcjW6y (USDC on AssetHub)
  - **Preference**: 80% in vested DOT, 20% in USDC (AssetHub). We intend to keep the vested DOT staked in-network (e.g., nomination pools/validators) in accordance with program rules.
- **Level:** 2


## Project Overview :page_facing_up:

### Overview

Common Compute Network is a decentralized infrastructure protocol that transforms edge devices into a distributed AI inference network, with economic incentives and value settlement built on Polkadot. Our project extends the existing Common Compute OS - a lightweight, AI-ready operating system currently deployed at scale - to create a tokenized network where compute providers earn rewards for serving AI inference requests.

**Project Components:**
- **Common Compute OS**: Minimalist edge OS with pre-installed ai inference server 
- **Substrate Runtime**: Custom pallets for compute resource management, task distribution, and token economics
- **Inference Protocol**: Decentralized protocol for routing AI requests to optimal compute nodes
- **Economic Layer**: Token-based incentive system for compute providers and consumers


The project integrates into the Polkadot ecosystem by:
- Utilizing Substrate for the core blockchain infrastructure
- Using the parachain primarily for transparency (device registry, job intents metadata), financial records, internal governance, and maintaining treasury
- Keeping AI inference off-chain via a gateway and device agents; on-chain is used for verifiable coordination and accounting
- Optionally enabling interoperability (e.g., XCM) later for cross-chain reporting and treasury flows, not direct dApp-facing inference

We are building this because there is a clear technical gap and opportunity:
- Many AI workloads can execute on commodity edge hardware (especially quantized foundation open source LLMs), yet there is no standard way to discover, attest, and coordinate those resources.
- A Substrate-based registry and job-intent mechanism provides verifiable coordination, permissionless participation, and an audit trail for usage—well-aligned with blockchain primitives.
- Common Compute OS already standardizes the runtime on devices; adding a light client, agent, and minimal pallets enables a practical path from single-device inference to a networked, on-chain-coordinated system.
- Providing this capability natively within the Polkadot ecosystem unlocks AI features for parachains and dApps without depending on centralized inference providers.

### Project Details

**Architecture Overview:**

```
+------------------+       HTTP/REST       +------------------+
|   AI Consumer    | --------------------> |      Gateway     |
|    (App/User)    | <-------------------- |   (API Bridge)   |
+------------------+                       +---------+--------+
                                                  |
                                                  | Inference (off-chain)
                                                  v
                                           +----------------------+
                                           |      CoCo Device     |
                                           |      (Edge Node)     |                                         +----------------------+

        on-chain metadata/accounting              attestation/heartbeat
                       +-----------------------------------------------+
                       |                 Parachain                     |
                       | Transparency / Governance / Treasury          |
                       +------------------------------+----------------+
                                                      |
                                            +---------v----------+
                                            |  Polkadot Relay    |
                                            |       Chain        |
                                            +--------------------+
```

**Core Components to be Built:**

1. **Substrate Runtime Pallets (non-dApp-facing):**
   - `pallet-device-registry`: Manages compute node registration, capabilities, status, and last heartbeat
   - `pallet-compute-jobs`: Records job intents and acceptance metadata for auditability (no inference on-chain)
   - `pallet-treasury-governance` (scaffold/scope for later): Treasury records, internal governance hooks, payout events
   - `pallet-reputation` (later): Tracks compute node performance and reliability for transparency

2. **Compute Node Integration (off-chain inference):**
   - Go-based edge agent on Common Compute OS with Substrate light client integration for attestations/accounting
   - CoCo Edge Node runtime wrapper and orchestration in Go (requests do not go on-chain)
   - Resource monitoring and reporting via Go services; posts minimal metadata on-chain for transparency
   - Secure inference execution environment with existing CoCo Edge Node + Go agent coordination

3. **Inference Protocol:**
   - Load balancing and optimal node selection
   - Task validation and verification mechanisms
   - Result aggregation for improved reliability
   - Privacy-preserving inference options

4. **Gateway (scope for Level 2):**
   - Minimal REST gateway for AI requests; writes/verifies on-chain metadata for coordination and accounting
   - Basic client examples and docs (SDKs deferred to a follow-up)

**Technology Stack:**
- **Blockchain**: Substrate framework with custom pallets
- **Compute Layer**: Go-based services and orchestration (leveraging existing api-server)
- **Edge Runtime**: Go agent interfacing with Substrate + CoCo Edge Node runtime
- **AI Framework**: CoCo Edge Node with support for multiple model formats
- **Bridge Layer**: Go-Substrate integration via gsrpc
- **Networking**: libp2p for peer-to-peer communication + Go HTTP services
- **Frontend**: React-based dashboard for network monitoring (existing uniphy.commoncompute.org)
- **APIs**: REST endpoints via enhanced Go API server

**Data Models:**

*Go Service Layer:*
```go
// Minimal Go service data structures
type ComputeNode struct {
    NodeID          string               `json:"node_id"`
    Capabilities    []ModelCapability    `json:"capabilities"`
    ResourceStats   ResourceMetrics      `json:"resource_stats"`
    CoCoEdgeNode    string               `json:"coco_edge_node"`
    Status          NodeStatus           `json:"status"`
}

type InferenceRequest struct {
    ModelID     string               `json:"model_id"`
    Prompt      string               `json:"prompt"`
    Strategy    InferenceStrategy    `json:"strategy"`
    MaxTokens   int                  `json:"max_tokens"`
    Temperature float32              `json:"temperature"`
}
```

Note: The device-produced usage record (JSON + sr25519 signature) is specified and delivered under Milestone 2.



### Ecosystem Fit
- Role: infrastructure-facing pattern for coordinating off-chain AI inference on Polkadot; not dApp-facing
- Users: AI/ML developers, node operators, infra teams; later, parachains for reporting/treasury via XCM
- Need: transparent device discovery, job intents, and verifiable usage artifacts without on-chain inference
- Differentiators: Substrate-native coordination; edge-first OS/agent; privacy-preserving local execution with a live OS baseline

## Team :busts_in_silhouette:

### Team members
- Naveen Singh - Creator ( System Architecture, Product Design)
- Rachit Sharma - Contributor ( Backend, DevOps, Tooling)
- Stephen Pryce - Contributor ( BizDev, Marketing, Finance)
- Devaj Mody - AI/RL Engineer (Reinforcement Learning, AI Systems)


### Contact
- **Contact Name:** Naveen Singh
- **Contact Email:** io.naveens@gmail.com
- **Website:** https://commoncompute.org

### Legal Structure
- **Registered Address:** Not Incorporated ( Tentative Location - Thailand/Singapore/UAE )
- **Registered Legal Entity:** Tentative: UniPhy Foundation 

### Team's experience

**Creators Experience:**

- **For Profit Startups**: 
    Built an enterprise SaaS Servify, going public at $2.3B in NSE India 
    Building PhyFarm (Raising - $5M Series A) - currently in growth stage scaling across India to serve 300Mn Farming and rural population

- **Impact & Sustainability**:  Regenerative initiatives at RezenLabs - aligning technology with environmental and social impact rezenlabs.com
- **Edge Computing Expertise**: Successfully developed and deployed 10,000+ IoT devices with active user base across multiple hardware platforms
- **Systems Architecture**: Deep experience with distributed systems, performance optimization, and production-scale deployments with over 500Mn Userbase on cumulative projects done so far


**Previous Web3 Foundation Grants:** None (first application)

### Team Code Repos
- https://github.com/w0w/common-os
- https://github.com/w0w
- https://github.com/DevajMody



## Development Status :open_book:

**Current Implementation:**
- **Common Compute OS v1.0**: Production-ready with automated setup
- **CoCo Edge Node Integration**: Fully functional API for local LLM inference
- **Network Configuration**: mDNS, hotspot fallback, mobile-optimized web UI
- **Performance Benchmarks**: Tested on various Raspberry Pi configurations
- **Documentation**: Comprehensive setup and usage guides

**Deployment readiness:**
- **Hardware pipeline**: 100 device pre-orders; distributor pipeline forecasting up to 10,000 units within 12 months.
- **Fleet ops**: Reproducible OS image, first-boot automation, and ARM64 agent packaging for batch flashing and staged rollouts.

**Research and Development:**
- Analysis of token economics for sustainable compute networks
- Evaluation of Substrate pallet architecture for compute marketplaces
- Performance testing of different consensus mechanisms for task distribution
- Privacy-preserving inference techniques compatible with blockchain verification

**Community Engagement:**
- Building active dev community around Common Compute OS for Real world uses cases 
- Feedback from early adopters on edge AI deployment challenges
- Collaboration discussions with potential parachain integrators

**Technical Foundation:**
The project builds upon solid technical foundations:
- Proven OS deployment and management system
- Established AI inference pipeline with CoCo Edge Node
- Understanding of edge device limitations and optimization strategies
- Clear vision for blockchain integration architecture

## Development Roadmap :nut_and_bolt:

This roadmap is scoped for a Level 2 grant with two concrete milestones that deliver working code, tests, and documentation, building on the existing Common Compute OS.

### Overview
- **Total Estimated Duration:** 10–12 weeks
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 30,000 USD (proposed)
- **DOT %:** 80%

### Milestone 1 — Device Registry Pallet, Agent, and CLI

- **Estimated Duration:** 5–6 weeks
- **FTE:** 2
- **Costs:** 13,500 USD (45% of total)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT for agent/CLI; Apache 2.0 for pallets (or project standard) |
| **0b.** | Documentation | Guide to run a local Substrate node, build/install pallet, register a Common OS device from ARM64, and query state |
| **0c.** | Testing and Testing Guide | Unit tests for pallet (>70% coverage on extrinsics/weights); integration test for device registration and status updates |
| **0d.** | Docker | Dockerfile/docker-compose for local node + example device agent |
| 1. | `pallet-device-registry` | Substrate pallet implementing: `register_device`, `update_metadata`, `set_status`; Events, Errors, Weight annotations; storage for owner, capabilities (model, RAM, arch), status, last_heartbeat |
| 2. | Device Agent (ARM64) | Service for Common OS that generates/loads sr25519 key, posts heartbeats/status, updates capabilities; systemd service template and ARM64 build |
| 3. | `coco-cli` | CLI to register/update devices and query registry (works on macOS/Linux and ARM64) |
| 4. | Demo | Scripted demo: launch local node → register device from a Pi (or ARM64 container) → update status → query via RPC |

### Milestone 2 — Job Intents, Gateway Prototype, and Metering Record

- **Estimated Duration:** 5–6 weeks
- **FTE:** 2
- **Costs:** 16,500 USD (55% of total)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
|| **0a.** | Documentation | End-to-end tutorial: submit job intent → device acceptance → local CoCo Edge Node execution → produce signed usage record |
|| **0b.** | Testing and Testing Guide | Pallet unit tests; gateway/agent integration test running against local node; mock/fake CoCo Edge Node optional for CI |
| 1. | `pallet-compute-jobs` | Minimal job intents pallet: `submit_job_intent`, `accept_job`, job lifecycle states; storage for requester, model, max_price, SLA fields; events/errors/weights |
|| 2. | Gateway Prototype | Minimal REST bridge (subset of OpenAI/CoCo semantics) that posts on-chain job intents and listens for acceptances; forwards job details to device agent |
|| 3. | Device Agent Extension | Job runner invoking local CoCo Edge Node with provided prompt/model; streams logs locally; emits signed usage record (duration, approx tokens/bytes) |
| 4. | Usage Record Spec | JSON + signature format (sr25519) for device-produced metering record to be used in later settlement work |
| 5. | Demo | Scripted E2E demo on local devnet: API request → on-chain intent → device acceptance → job execution → usage record artifact |

Notes
- All code will include clear build/run instructions and avoid leaking secrets in logs or examples.

## Future Plans
- Follow-up: settlement/escrow and payments; smoldot/light client integration
- Technical: expanded model support; enterprise features (private networks, SLA); privacy-preserving options
- Community: workshops and infrastructure contributions across Middle East, South & East Asia

## Referral Program (optional) :moneybag:

- **Referrer:** N/A
- **Payment Address:** N/A

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website and community research

**Additional Information:**

- DOT stewardship commitment: We commit to keep 100% of the vested DOT in the Polkadot ecosystem (staked via nomination pools/validators). Staking rewards will be used to offset infra/CI, security hardening, and maintenance releases. We will not market-sell the vested DOT.
- Community participation: We are pursuing long-term participation in growing the Blockchain community and network in the Middle East, South & East Asia (Thailand, Malaysia, Singapore, India, UAE) - Our bet is on Polkadot/Jam network as highest performing L1 chain in market and best suitable for real world use cases we are looking to build on CoCo

**Market Validation:**
- Growing demand for AI features in Web3 applications
- Cost advantages over centralized AI services (estimated 70-90% cost reduction)
- Privacy first design
- Edge AI usage growing across industries

**Technical Innovation:**
- There is no widely adopted pattern in Polkadot for verifiable coordination of off-chain AI inference. This work proposes a minimal, reusable template (pallets + agents) other teams can adopt.
- Novel token economics for compute resource allocation
- Integration of edge computing with blockchain consensus
- Privacy-preserving inference with blockchain verification


**Strategic Importance:**
This work introduces a reusable pattern for Polkadot networks that need transparent coordination of off-chain AI inference: on-chain device discovery, job intents metadata, verifiable usage artifacts, and governance/treasury support. It reduces dependency on centralized inference APIs while keeping computation off-chain, and offers a pallets + agents template other teams can adopt.

**Design Principles:**

AI inference benefits from decentralization when coordination and usage are verifiable, and when data can be processed close to the source. Common Compute Network implements these principles in a practical way: a permissionless registry of edge devices, on-chain job intents, and an agent that executes workloads locally via the CoCo Edge Node. This proposal delivers the minimal building blocks needed to demonstrate the model end-to-end on Polkadot.
