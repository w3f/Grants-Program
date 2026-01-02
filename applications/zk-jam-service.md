# zk-jam-service: ZK Proof-of-Concept for JAM

- **Team Name:** abutlabs
- **Payment Details:**
  - **DOT Address (AssetHub):** 15AWQjAZ9Ev9uhcYJdfwQzXA2VRDn2oLgZTkBzRRT7sZNDgs
  - **USDC Address (AssetHub):** 15AWQjAZ9Ev9uhcYJdfwQzXA2VRDn2oLgZTkBzRRT7sZNDgs
- **Level:** 1

## Project Overview :page_facing_up:

### Overview

**zk-jam-service** is a proof-of-concept ZK verification & benchmarking service for JAM (Join-Accumulate Machine) that demonstrates how zero-knowledge proofs can be verified within JAM's unique Refine → Accumulate architecture. 

- **Tagline:** Educational ZK proof verification for JAM — learn by building. Benchmark various ZK proofs running natively and on polkajam-testnet

- **Description:** Building towards a public good that (1) implements ZK proof verification in a JAM service, (2) provides comprehensive documentation for JAM developers, (3) offers an interactive web dashboard for exploring ZK verification on testnet, and (4) provides a solid basis for a future production ready zk-jam-service

- **Relation to Polkadot:** JAM is Polkadot's next-generation execution environment. This project explores ZK integration patterns that will benefit future JAM service developers across the ecosystem.

- **Motivation:** JAM represents a paradigm shift in blockchain computation, but developer resources are scarce. I want to learn JAM deeply, document my journey, and create re-usable examples that lower the barrier for others.

### Project Details

#### Current Progress (Phases 0 Complete)

I have built and locally deployed a functional JAM service to Parity's polkajam binary here: [zk-jam-service](https://github.com/abutlabs/zk-jam-service)

- **Blake2s-256 hash verification service** — Demonstrates the full Refine → Accumulate pipeline
- **CLI tooling** — TypeScript tools for submitting work items and querying state
- **Web dashboard** — Next.js application with:
  - Interactive verification form
  - Block explorer showing verification history
  - Educational content designed for forking and experimentation

#### Technology Stack

| Component | Technology |
|-----------|------------|
| JAM Service | Rust (`no_std`), PolkaVM (RISC-V target) |
| CLI Tools | TypeScript, Node.js |
| Web Dashboard | Next.js 14, shadcn/ui, Tailwind CSS |
| Testnet | Parity's PolkaJam (6-validator local testnet) |

#### Architecture

```
┌─────────────────┐         ┌─────────────────────────────────┐         ┌──────────────┐
│   Off-Chain     │         │         JAM Network              │         │   On-Chain   │
│   Prover        │  submit │  ┌─────────┐    ┌────────────┐  │ finalize│    State     │
│                 │ ───────>│  │ REFINE  │───>│ ACCUMULATE │  │────────>│              │
│  Generate proof │  work   │  │  (6s)   │    │  (<10ms)   │  │         │  Immutable   │
│                 │  item   │  │ Verify  │    │  Update    │  │         │   Receipt    │
└─────────────────┘         │  └─────────┘    └────────────┘  │         └──────────────┘
                            └─────────────────────────────────┘
```

#### ZK Integration Strategy

**Important Context:** ZK proof *verification* is already fast—Groth16 verification takes ~5ms on modern hardware, PLONK ~30ms. The computational bottleneck in ZK systems is proof *generation*, not verification.

So why build a ZK verification service on JAM?

1. **PolkaVM Overhead Matters:** While native verification is fast, PolkaVM adds interpretation overhead. Benchmarking this is essential for JAM developers planning ZK integrations.

2. **Reference Implementation:** Future JAM services (rollups, bridges, privacy protocols) need a working example of ZK verification in `no_std` Rust for PolkaVM. This project provides that.

3. **Foundation for Batching:** Single verification is fast, but batched verification (N proofs verified together) amortizes costs. This PoC establishes the baseline for future batching services.

**The Reality:** The most battle-tested ZK implementations exist in C++. Aztec's Barretenberg, libsnark, and similar libraries represent years of optimization. However, JAM services run on PolkaVM—a RISC-V environment requiring `no_std` Rust, with no FFI support.

**Our Pragmatic Approach:**

| Approach | Feasibility | Risk | This Grant |
|----------|-------------|------|------------|
| **Rust-Native (Arkworks)** | High | Low | Primary focus |
| **C++ → RISC-V Compilation** | Medium | Medium | Research & document |
| **Custom Circuits** | Low | High | Out of scope |

**Primary Path (Milestone 1):** We integrate Arkworks—a mature Rust ZK library with full `no_std` support. This provides immediate, working ZK verification on JAM.

**Research Path (Milestone 2):** We investigate compiling C++ ZK libraries (specifically Barretenberg) to RISC-V bytecode for PolkaVM execution. This research benefits the entire JAM ecosystem by documenting:
- What works and what doesn't
- Performance comparisons (native Rust vs PVM-interpreted)
- Recommendations for future production services

**Why This Matters:** If C++ → PolkaVM compilation proves viable, JAM gains access to the entire battle-tested ZK ecosystem. If not, we document why and provide the Rust-native alternative. Either outcome advances the ecosystem.

#### Proposed Interface

```rust
// Work package payload (submitted to JAM)
struct VerificationRequest {
    proof_system: ProofSystem,     // Groth16 (this grant), PLONK (future)
    proof: Vec<u8>,                // Serialized proof bytes
    public_inputs: Vec<[u8; 32]>,  // Public input scalars
    vk_hash: [u8; 32],             // Hash of verification key
}

// Work result (output from Refine)
struct VerificationResult {
    request_hash: [u8; 32],        // Hash of original request
    verified: bool,                // Proof validity
    gas_used: u64,                 // Computation cost
}
```

This interface will be documented and stable, allowing other JAM services to integrate ZK verification.

#### What This Project Is

- A **proof-of-concept** demonstrating ZK verification is possible on JAM
- A **benchmarking exercise** measuring PolkaVM overhead for ZK operations
- An **educational resource** with documentation as a primary focus
- A **testnet tool** for developers to experiment with ZK on JAM and fork
- A **public good** — all code and documentation freely available (Apache 2.0)

#### What This Project Is NOT

- NOT a production-ready, audited ZK verification service
- NOT a complete ZK proving system (proofs generated off-chain by existing tools)
- NOT a token or financial product

### Ecosystem Fit

**Where does this fit?**
- JAM is new infrastructure with limited developer resources
- This project creates foundational learning materials and working examples
- Targets the gap between JAM specification (Graypaper) and practical implementation

**Target Audience:**
- JAM service developers learning the platform
- Upcoming PBA JAM course content
- Researchers evaluating JAM's capabilities
- JAM client implementers needing benchmarking tools

**Who Would Use ZK Verification on JAM?**

| Use Case | Description | Why JAM? |
|----------|-------------|----------|
| **ZK-Rollups** | L2s submitting validity proofs | JAM's Refine phase handles verification, Accumulate updates state root |
| **Cross-Chain Bridges** | Verifying consensus proofs from other chains | Trustless bridge validation without re-executing foreign chain logic |
| **Privacy Protocols** | Verifying spend/nullifier proofs | Similar to Zcash shielded transactions |
| **Identity Systems** | Selective disclosure credentials | Prove attributes without revealing full identity |

This PoC doesn't implement these applications—it provides the verified building block they need.

**Needs Addressed:**
- **Learning gap:** JAM documentation is sparse; developers need working examples
- **ZK exploration:** No existing JAM services demonstrate ZK verification
- **Tooling gap:** No web-based tools exist for interacting with JAM services
- **Benchmarking gap:** JAM client teams need tools to compare their implementations against polkajam

**Evidence of Need:**
- 44 teams are actively building JAM clients across multiple languages. JAM service documentation is the logical next step.
- Polkadot forum discussions highlight need for JAM developer resources
- No existing ZK verification services on JAM—this would be the first
- If ZK infrastructure is developed as a public good, the DOT/KSM ecosystem captures the value

**Similar Projects:**
- *In Polkadot:* None — JAM is too new for ZK services to exist
- *In other ecosystems:* Aztec (Ethereum), Cairo (Starknet) — but these are platform-specific and don't help JAM developers

Aztec's recent success validates market demand for ZK infrastructure. This project brings battle-tested ZK technology to JAM as a public good.

## Team :busts_in_silhouette:

### Team members

- Austin Kloske

### Contact

- **Contact Name:** Austin Kloske
- **Contact Email:** abutlabs@gmx.com
- **Website:** https://github.com/abutlabs

### Legal Structure

- **Registered Address:** N/A (Individual applicant)
- **Registered Legal Entity:** None. If this grant is successful and I continue Web3 Foundation work, I will form a B.V. in the Netherlands.

### Team's experience

**Austin Kloske** — Senior Software Developer & Architect with 15+ years of enterprise software experience.

- **Enterprise Background:** Most of my professional work is in the SAP ecosystem (ABAP, system migrations, complex landscape architecture) where code is proprietary and not publicly visible. I've led large-scale SAP system migrations and worked as an architect for complex multi-system integrations.
- **Relevant Skills:** TypeScript, Rust, Kubernetes, blockchain development, ZK cryptography concepts
- **Polkadot Ecosystem:**
  - [PBA-X Wave 1 Graduate](https://assethub-polkadot.subscan.io/account/15AWQjAZ9Ev9uhcYJdfwQzXA2VRDn2oLgZTkBzRRT7sZNDgs) — Completed Polkadot Blockchain Academy coursework
  - Polkadot crowdloan participant since 2021
- **This Project:** The [zk-jam-service repository](https://github.com/abutlabs/zk-jam-service) demonstrates my current capabilities — a working JAM service with web dashboard, built from scratch over the past months.

### Team Code Repos

- https://github.com/abutlabs/zk-jam-service (this project)
- https://github.com/abutlabs

### Team GitHub Profiles

- https://github.com/austinkloske22 (personal)
- https://github.com/abutlabs (organization)

### Team LinkedIn Profiles

- https://www.linkedin.com/in/akloske/


## Development Status :open_book:

**Repository:** https://github.com/abutlabs/zk-jam-service

I have already completed significant development work:

| Phase | Status | Description |
|-------|--------|-------------|
| 0.1 Initial Infrastructure | ✅ Complete | Project setup, build pipeline, deployment to PolkaJam testnet |
| 0.2 Hash Verification | ✅ Complete | Blake2s-256 verification demonstrating Refine → Accumulate |
| 0.3 Web Dashboard | ✅ Complete | Interactive UI for verification, exploration, and learning |
| 1.0 Grant Approval | 🔄 This Grant | Web3 Foundation feedback and approval |
| 2.0 Milestone 1 | 🔄 Pending | ZK Proof Verification Integration |
| 3.0 Milestone 2 | 🔄 Pending | Benchmarking & Documentation |


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 0.5 (part-time, ~20 hrs/week)
- **Total Costs:** $10,000 USD
- **DOT %:** 100%

### Milestone 1 — ZK Proof Verification Integration

- **Estimated duration:** 1 month
- **FTE:** 0.5
- **Costs:** $5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline code documentation + tutorial: "How to Deploy Your First JAM Service" covering project setup, building for PolkaVM, and deployment to testnet |
| **0c.** | Testing Guide | Unit tests for ZK verification logic; integration tests for work package submission; guide explaining how to run tests locally |
| **0d.** | Docker | Docker Compose setup for local development environment including PolkaJam testnet node, service deployment, and CLI tools |
| 1. | ZK Verifier Research | Evaluate Arkworks (Groth16) for `no_std` PolkaVM compatibility. Document integration challenges, compile sizes, and verification times. Preliminary investigation of C++ → RISC-V compilation paths. |
| 2. | JAM Service: ZK Verification | Implement Groth16 proof verification in `refine()` function using Arkworks. Accept proof bytes + public inputs, return verification result. |
| 3. | CLI: Proof Submission | Extend TypeScript CLI to submit ZK proofs (generated externally) to the service |
| 4. | Web Dashboard: ZK UI | Add proof upload interface, verification status display, and public inputs visualization |


### Milestone 2 — Benchmarking & Documentation

- **Estimated Duration:** 1 month
- **FTE:** 0.5
- **Costs:** $5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Complete API documentation for zk-jam-service; architecture decision records |
| **0c.** | Testing Guide | End-to-end testing guide covering full proof generation → submission → verification flow |
| **0d.** | Docker | Docker setup with example proof generation |
| **0e.** | Article | Blog post: "Building a ZK Verification Service on JAM: Lessons Learned" covering technical challenges, solutions, and recommendations |
| 1. | Benchmark Suite | Dual-tier benchmarking: Rust (`criterion`) for execution + k6 for load testing |
| 2. | Performance Report | Published analysis of ZK verification performance on JAM with recommendations |
| 3. | C++ Integration Research | Document findings from C++ → RISC-V compilation experiments (Barretenberg). Include feasibility assessment, blockers encountered, and recommendations |
| 4. | Tutorial Series | Three-part tutorial: (1) JAM Basics, (2) Building Your First Service, (3) Adding ZK Verification |
| 5. | Example Proofs | Sample ZK proofs and generation scripts for developer testing |


## Benchmarking Strategy

We employ a **dual-tier testing strategy** to establish baseline performance metrics:

### Tier 1: Execution Benchmarking (Rust)

Using `criterion` to measure within the PolkaVM environment:

| Metric | Tool | Purpose |
|--------|------|---------|
| Verification Time | criterion | Ensure < 6s Refine budget |
| Memory Consumption | custom profiler | Stay within PVM limits |
| PVM Overhead | comparative benchmarks | Native vs PVM execution |

### Tier 2: Load Testing (k6)

Simulating production conditions via the TypeScript bridge:

| Metric | Tool | Purpose |
|--------|------|---------|
| End-to-End Latency | k6 | Submission to finalization |
| Concurrent Load | k6 | Multiple simultaneous verifications |
| Network Reliability | k6 | Failure modes and recovery |

### Target Benchmark Results

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    Verification Time Comparison                          │
├─────────────────┬───────────┬───────────┬────────────┬─────────────────┤
│ Proof System    │  Native   │   PVM     │  Overhead  │ Fits 6s Budget? │
├─────────────────┼───────────┼───────────┼────────────┼─────────────────┤
│ Groth16         │   ~5ms    │    TBD    │    TBD     │      TBD        │
│ PLONK           │  ~30ms    │    TBD    │    TBD     │      TBD        │
└─────────────────┴───────────┴───────────┴────────────┴─────────────────┘
```

### Testing Environments

| Environment | Description | What We Measure |
|-------------|-------------|-----------------|
| **Native Benchmarks** | Development machine | Baseline times, memory |
| **PolkaVM Simulation** | PVM without network | Overhead vs native |
| **polkajam-testnet** | 6-validator local | Full pipeline latency |

## Future Plans

**Short-term (post-grant):**
- Maintain the project as testnet infrastructure evolves
- Engage with JAM developer community for feedback
- Present at Polkadot developer meetups/events

**Long-term Evolution Path:**

This PoC establishes single-proof verification. The natural evolution toward production value:

| Phase | Capability | Value Multiplier |
|-------|------------|------------------|
| **This Grant** | Single proof verification + benchmarks | 1x (baseline) |
| **Future: Batching** | Verify N proofs in one Refine call | Nx (amortized costs) |
| **Future: Aggregation** | Recursive proofs (N proofs → 1 proof) | N²x (exponential savings) |

A follow-up grant could extend this work toward batched verification—where the real efficiency gains of JAM's architecture become apparent.

**Other Long-term Goals:**
- If JAM reaches mainnet, evaluate production deployment (would require audit, separate funding)
- Explore additional ZK proof systems (PLONK, STARKs) based on community demand
- Verification key registry for ecosystem-wide proof interoperability

**Sustainability:**
- Core educational content will remain valuable regardless of further development
- Open source community can fork/extend as needed
- Low maintenance burden (testnet-focused, no production SLAs)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website and Polkadot developer documentation

**Previous W3F Grants:** None

**Other Funding:** No other funding received or applied for this project.

**Work Already Done:**
- Phases 0.1, 0.2, and 0.3 completed without funding
- Working service deployed on PolkaJam testnet
- Web dashboard with verification UI and educational content
- CLI tooling for service interaction

**Why Level 1:**
- I am an individual developer without legal entity
- Scope is appropriately sized: proof-of-concept + education, not production infrastructure
- Senior Software developer looking to pivot into the Polkadot ecosystem

**Additional Context:**
- JAM is nascent infrastructure; early educational resources have outsized impact
- This project directly supports Polkadot's technical roadmap
- All deliverables are public goods benefiting the entire ecosystem
