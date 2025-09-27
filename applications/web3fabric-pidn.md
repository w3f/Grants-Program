# Polkadot Interop Devnet (PIDN)

* Team Name: Web3Fabric
* Payment Details:
  * DOT: 15iFtNCWbxCBnSz3VHKiy5uim254pFbWtz9Tu9tXbMcerS39
  * USDT: 15iFtNCWbxCBnSz3VHKiy5uim254pFbWtz9Tu9tXbMcerS39
* Level: 3

## Project Overview
"Empowering developers to revolutionize cross-chain innovation—Polkadot-first, one-command multi-ecosystem devnets for seamless testing and prototyping."

The Polkadot Interop Devnet (PIDN) will make Polkadot the natural hub for multi-chain development. With a single command, developers will be able to spin up a local or CI-ready relay chain + parachains alongside optional Cosmos zones, Ethereum clients, Solana validators, and Bitcoin nodes, plus preconfigured bridges (e.g., Snowbridge, Axelar, Wormhole).

PIDN will provide a unified CLI and API to orchestrate networks, automate XCM/relayer flows, enable AI-assisted troubleshooting, and deliver benchmarking for finality, latency, and throughput. By collapsing setup time from weeks to minutes, it will allow developers to focus on application logic rather than infrastructure, accelerating the creation of interoperability-native applications.

PIDN is designed to make Polkadot the default starting point for cross-chain development:
- Every devnet will begin with a Polkadot relay chain and parachains at the core, with other ecosystems optionally layered on.
- XCM testing and benchmarking will be first-class features, positioning Polkadot as the control plane for interoperability.
- By providing a production-like environment where both human and AI developers can build, test, and rerun workflows, PIDN will turn Polkadot's interoperability promise into an accessible developer advantage.

In short, PIDN will transform Polkadot from the ecosystem with the strongest interoperability technology into the ecosystem where interoperability is the easiest to build.

# Project Details

The cross-chain development ecosystem faces a critical bottleneck: while Polkadot offers the most advanced interoperability technology, developers today spend weeks on infrastructure setup before writing their first line of application code. This friction risks pushing builders toward simpler but less capable ecosystems, leaving Polkadot's technical advantages unrealized.

## Fragmented Tooling Landscape
Multi-chain development currently lacks unified tooling. Each ecosystem provides partial solutions — Zombienet for Polkadot, Cosmos testnets, Solana local validators — but these remain siloed, focus on single ecosystems, and often emulate rather than reproduce production behavior. Production bridges like Snowbridge or Wormhole enable live connectivity but offer no safe environment for iteration and debugging. The result: interoperability exists in theory but remains inaccessible in practice.

## Developer Experience Crisis
Building cross-chain apps today requires developers to become DevOps experts first. Configuring relay chains, parachains, HRMP channels, and bridges manually is complex, error-prone, and distracts teams from innovation. Even after setup, what works locally often fails in production, slowing time-to-market.

PIDN will remove this friction by:
- Running real nodes and bridges in production-like conditions, not lightweight emulations.
- Providing a one-command, Polkadot-first devnet that extends to Cosmos, Ethereum, Solana, and Bitcoin.
- Offering a unified CLI and SDK with integrated troubleshooting, benchmarking, and CI/CD support.

This will reduce setup time from weeks to minutes, while delivering both:
- **Technical reliability**: multi-chain orchestration, comprehensive testing, performance benchmarking.
- **Developer accessibility**: simple commands, clear documentation, and AI-assisted troubleshooting.

With PIDN, Polkadot will become the natural choice for teams building interoperability-native applications.

## Target Audience

### Primary Users

**Parachain Teams**
- Pain: Weeks to test XCM transfers between parachains
- PIDN Solution: Rapid cross-chain integration testing

**Cross-Chain dApp Developers**
- Pain: Infrastructure setup blocks product development
- PIDN Solution: Focus on app logic, not DevOps

### Secondary Users

**Bridge Builders**
- Pain: No unified environment to test multi-ecosystem bridges
- PIDN Solution: Comprehensive cross-chain testing and benchmarking

**Wallet Teams**
- Pain: Complex setup to test cross-chain functionality
- PIDN Solution: Easy integration testing across networks

**Enterprise Developers**
- Pain: High technical barrier to explore cross-chain capabilities
- PIDN Solution: Simple way to prototype with Polkadot

**Explorers**
- Pain: Builders exploring Polkadot require time to understand the ecosystem and setting up the infrastructure
- PIDN Solution: Boilerplates and examples with the infra which can support immediate building of products on polkadot.

## Competitive Analysis

| Existing Tool / Approach | Strengths | Gaps for Cross-Chain Builders |
|---------------------------|-----------|--------------------------------|
| Zombienet (Polkadot) | Gold-standard for testing Substrate chains; CI integration. | Limited to Polkadot/Substrate only. No Cosmos/EVM/Solana support. Emulates flows instead of running production-like nodes. No bridge testing. |
| Cosmos Testnets + Hermes Relayer | Native IBC testing for Cosmos app-chains. | Cosmos-only. No unified interface with Polkadot/EVM. Setup is heavy, no cross-ecosystem orchestration. |
| Solana Local Validator | Quick simulation of Solana environment. | Solana-only, no bridge/XCM integration, minimal orchestration. |
| Manual DevOps Setups | Closest to production if done by hand. | Requires weeks of config + DevOps expertise. Not reproducible, unsuitable for CI/CD. |
| Production Bridges (Snowbridge, Axelar, Wormhole, etc.) | Battle-tested mainnet connectivity. | No dev/test environments. Heavy and costly. Only validate live flows, not developer iteration. |

All current tools address single-ecosystem needs or final mainnet connectivity. None provide a Polkadot-first, multi-ecosystem devnet that mirrors production, supports CI/CD, and is simple enough for everyday developers. PIDN will fill this critical gap, becoming the first true interoperability-native developer platform.

## Market Opportunity

The cross-chain ecosystem is at an inflection point. Over 200 parachain projects are registered on Polkadot/Kusama, and more than 23,600 Web3 developers are actively building worldwide (Electric Capital, 2024). Yet most still spend weeks on setup before writing application code — friction that pushes talent toward simpler but less capable ecosystems.

Meanwhile, interoperability protocols are one of Web3's fastest-growing segments, with adoption rising 200–300% year-over-year. Enterprises, parachain teams, and dapp developers are eager to launch cross-chain products, but today's tooling is fragmented, ecosystem-siloed, and error-prone.

The rise of AI-assisted development makes this need even sharper. AI copilots and agents can generate code rapidly, but without reproducible, production-like environments, they cannot validate or refine cross-chain logic. AI requires the ability to spin up, test, and rerun end-to-end workflows — something current solutions cannot deliver.

Why PIDN unlocks this market:
- **Polkadot-first, multi-ecosystem**: Relay + parachains at the core, with Cosmos/Ethereum/Solana/Bitcoin optionally added.
- **One-command orchestration**: Launch complete testnets in minutes.
- **Production-like fidelity**: Runs real nodes and bridges, ensuring test results match live behavior.
- **Unified DX**: Single CLI/SDK across ecosystems, with CI templates, dashboards, and AI-assisted debugging.
- **AI-ready**: Containerized end-to-end framework that both humans and AI can use for iterative testing.

By collapsing setup from weeks to minutes and enabling AI-driven iteration, PIDN will transform Polkadot into the default hub for interoperability-native development. This positions Polkadot ahead of Cosmos, Ethereum, and Solana as the place where both human and AI developers build the next generation of cross-chain applications.

## What PIDN Is Not
- Not a hosted/SaaS offering (grant scope is open-source tooling).  
- No token, tokenomics, or incentive programs.  
- No custodial operations or production bridge ops.

# Team Information

## Team Members
* **Name**: Shivani Digari (Main contact) <br>
* **Name**: Puneet Mahajan <br>

### Contact 
* **Name**: Shivani Digari (Main contact) <br>
**Role**: Product Lead <br>
**Email**: digarishivani@gmail.com  <br>

* **Name**: Puneet Mahajan <br>
**Role**: Tech Lead <br>

Advisors
* **Name**: Maajid Narula <br>
**Role**: Product Advisor <br>
**LinkedIn**: https://www.linkedin.com/in/maajid/ <br>

* **Name**: Anmol Yadav <br>
**Role**: Tech Advisor <br>
**LinkedIn**: https://www.linkedin.com/in/anmol-yadav-152126a4/ <br>

## Team's Experience
The Web3Fabric team combines deep product, protocol engineering, and infrastructure expertise across Web2 fintech scale-ups and Web3 ecosystems like Polkadot, Cosmos, and Ethereum. Collectively, the team has over a decade of experience delivering developer tooling, interoperability frameworks, and high-scale financial platforms.

- **Product Leadership — Shivani Digari**  
  - 6+ years leading fintech and SaaS product development, including a $1B+ co-lending platform and AI-driven lending systems that cut turnaround times from weeks to days.  
  - Expert in translating complex infrastructure into developer-friendly experiences with a focus on usability, reliability, and adoption.  
  - Brings strong experience in turning ecosystem-level goals (like interoperability) into tangible developer tooling.

- **Protocol & Infrastructure Engineering — Puneet Mahajan**  
  - Protocol engineer with contributions to **Cosmos SDK** and **IBC-based projects** such as Persistence One and pSTAKE.  
  - Skilled in Rust, Go, and Kubernetes; built liquid staking, relayer tooling, and multi-chain orchestration frameworks.  
  - Brings battle-tested knowledge of cross-chain primitives and secure abstractions for production-grade interoperability.

- **Technical Advisory — Anmol Yadav**  
  - Co-founder of **Hyperweb** and creator of **Starship**, a Kubernetes-powered multi-chain dev/test environment widely used in the Cosmos ecosystem.  
  - Specialist in developer tooling, reproducible CI/CD pipelines, and multi-chain network orchestration.  
  - Advises PIDN’s integration with Starship for broader multi-ecosystem compatibility.

- **Product Advisory — Maajid Narula**  
  - Product leader across **Cosmos, Ethereum, and Polkadot ecosystems**, with advisory roles in **Astar (Polkadot parachain)** and **Sony’s Soneium (Ethereum L2)**.  
  - Known for simplifying mental models for complex cross-chain UX and ensuring intuitive developer experiences.  
  - Focused on making interoperability invisible and natural for builders.

- **Core Developer Team (3 members)**  
  - Experienced across Web2 and Web3 software development with skills in **Rust, Go, TypeScript/JavaScript, and Kubernetes orchestration**.  
  - Previous contributions include CI/CD-ready local devnets, multi-chain relayers, Snowbridge test flows, and benchmarking frameworks for XCM/IBC performance.

Together, the team has delivered production systems processing **billions in value**, authored **open-source developer tooling**, and built **cross-ecosystem orchestration frameworks**. Their combined background ensures that PIDN is not just a technical prototype but a **developer-friendly product poised to become the standard for interoperability testing in the Polkadot ecosystem**.

### Team Code Repos
* **Github**: https://github.com/shivaniD96 <br> 
* **Github**: https://github.com/puneet2019 <br>

### Team LinkedIn profiles
* **LinkedIn**: https://www.linkedin.com/in/shivani-digari/  <br>

## Legal Structure
* Registered Address: Sharjah Media City, Sharjah, UAE
* Registered Legal Entity: Seema Software Solutions LLC

## Development Status

### Prior Work
- Built multi-chain testing frameworks (inspired by Starship-class infra) that orchestrated multiple blockchain environments, providing confidence in handling complex network topologies.
- Delivered proof-of-concept Polkadot local networks with CI integration, demonstrating reproducibility and automation on GitHub Actions.
- Authored scripts for Cosmos and EVM relayers, validating that cross-ecosystem flows can be automated in a CI/CD context.
- Conducted early Snowbridge experiments, confirming feasibility of DOT↔ETH test transfers in controlled environments.

### Research & Learnings
- **Zombienet Analysis**: Identified strengths for Substrate-only testing but confirmed the gap for true multi-ecosystem orchestration and production-like fidelity.
- **Reproducible CI**: Documented how devnets can be reliably spun up across Linux/macOS CI runners; noted friction points developers face when trying to debug across chains.
- **Benchmark Design**: Outlined plans for latency, finality, and throughput benchmarking, drawing inspiration from "Spammening"-style load tests to stress-test XCM and relayer performance.
- **DX Gaps**: Through user interviews and ecosystem conversations, observed that current workflows require developers to become DevOps experts first, validating the need for PIDN's "minutes not weeks" promise.

## Current Readiness
We have validated the core building blocks (spinning up Polkadot devnets in CI, automating relayers, running Snowbridge POCs).

Next stage is to integrate these into a unified CLI/API with production-like environments, expand to Cosmos/EVM/Solana modules, and deliver benchmarking + AI-assisted DX features.

## Development Roadmap with Milestones

**Total Duration**: 6–7 months  
**Team Effort (FTE)**: 2.5–3.0 full-time equivalents  
**Budget**: $90,000 USD  
**Payment Split**: 40% vested DOT (over 18 months), 60% USDC (AssetHub)

Baseline deliverables (license, documentation, testing, and Docker images) are included in every milestone; outreach deliverables are included in the final milestone.

### Milestone 1 — Core Polkadot Network Foundation
- **Estimated Duration:** 8–10 weeks  
- **FTE:** 2.0–2.5  
- **Costs:** $25,000 USD  

**Deliverables**

| #   | Deliverable | Specification |
|-----|-------------|---------------|
| 0a. | **License** | MIT License in root of repository |
| 0b. | **Documentation** | Initial docs: README + “Getting Started” (relay + 2 parachains) |
| 0c. | **Testing & Guide** | Unit/integration tests for bootstrapping; `docs/testing.md` |
| 0d. | **Docker** | Custom Dockerfiles for relay chain and parachain nodes |
| 1.  | **Helm Chart: Kubernetes Deployment** | Base chart to spin up relay + ≥2 parachains |
| 1.a | Relay Chain Templates | Validator StatefulSets, service, configmap, secrets |
| 1.b | Parachain Support | Generic collator templates; Asset Hub + template parachain |
| 1.c | Genesis/Spec Tooling | Genesis/spec generation scripts and chain spec configs |
| 2.  | **CLI Bootstrap** | Core CLI for network lifecycle |
| 2.a | Commands | `pidn up`, `pidn down`, `pidn status`, `pidn logs` |
| 2.b | Config Handling | YAML schema + validation; profile loader |
| 2.c | Profiles | `polkadot-basic` profile (relay + 2 parachains) |
| 3.  | **Examples Directory** | `examples/polkadot-basic` runnable sample (one command) |
| 4.  | **CI Templates** | GitHub Actions to spin PIDN locally/CI (matrix-ready) |
| 5.  | **Observability** | Prometheus + Grafana dashboards (finality, block time, validators) |

**Acceptance Criteria:**  
`pidn up --profile polkadot-basic` launches relay + 2 parachains via the Helm chart; custom Docker images are used; examples and CI workflow run green; dashboards render core metrics.

### Milestone 2 — XCM Implementation, Registry & Network APIs
- **Estimated Duration:** 8–10 weeks  
- **FTE:** 2.0–2.5  
- **Costs:** $30,000 USD  

**Deliverables**

| #   | Deliverable | Specification |
|-----|-------------|---------------|
| 0a. | **Documentation** | Docs for XCM flows, Registry API, and config examples |
| 0b. | **Testing & Guide** | Automated XCM test suite (transfers, teleports, remote execution) |
| 0c. | **Docker** | Dockerfiles for XCM relayer and Registry service |
| 1.  | **Helm Chart: Extensions** | Subcharts for relayer + registry |
| 1.a | XCM Relayer Subchart | StatefulSet/Deployment, secrets, health/readiness |
| 1.b | Registry API Subchart | REST service, storage, ingress/service |
| 1.c | HRMP Bootstrap Jobs | Jobs to open HRMP channels between parachains |
| 2.  | **CLI Enhancements (XCM)** | XCM/HRMP flows from the CLI |
| 2.a | Channel Ops | `pidn xcm open-channel`, `pidn xcm close-channel` |
| 2.b | XCM Runner | `pidn xcm run` to execute test scenarios |
| 2.c | Config | HRMP pair definitions and asset routing in YAML |
| 3.  | **Examples Directory** | `examples/polkadot-xcm` with end-to-end asset transfer |
| 4.  | **Network Registry API** | `/networks`, `/parachains`, `/xcm` endpoints + OpenAPI |
| 5.  | **Metadata Management** | Persisted chain/para metadata, validator/collator health |
| 6.  | **XCM Test Suite (CI)** | CI job produces reports and pass/fail gates for PRs |

**Acceptance Criteria:**  
`pidn up --profile polkadot-xcm` deploys relay + parachains, opens HRMP channels, and runs XCM transfers successfully. Registry API serves live metadata; CI XCM suite passes.

---

### Milestone 3 — pidnjs SDK & Developer Tooling
- **Estimated Duration:** 6 weeks  
- **FTE:** 2.0–2.5  
- **Costs:** $20,000 USD  

**Deliverables**

| #   | Deliverable | Specification |
|-----|-------------|---------------|
| 0a. | **Documentation** | Interactive docs hub (API refs, tutorials, guides) |
| 0b. | **Testing & Guide** | SDK unit/integration tests; multi-env CI |
| 0c. | **Docker** | SDK test containers with sample networks |
| 1.  | **Helm Chart: Enhancements** | Dev-friendly presets for K8s |
| 1.a | RBAC/Profiles | Namespaced RBAC + small/medium/large resource presets |
| 1.b | Networking | Optional ingress/service templates for local/cluster |
| 1.c | Telemetry Hooks | Pre-wired metrics dashboards for SDK demos |
| 2.  | **pidnjs SDK** | TypeScript SDK to manage networks + XCM |
| 2.a | Network Mgmt | Start/stop/status/logs programmatically |
| 2.b | XCM Ops | Helpers for HRMP ops and XCM scenarios |
| 2.c | Config API | Programmatic overrides/merges for YAML profiles |
| 3.  | **Examples Directory** | `examples/sdk-local`, `examples/ci-pipelines`, `examples/k8s-cluster` |
| 4.  | **CI/CD Templates** | Expanded GitHub Actions, GitLab CI, Jenkins |
| 5.  | **Developer Tooling** | VS Code extension + CLI plugins for common workflows |

**Acceptance Criteria:**  
Developers use `pidnjs` to spin networks and run XCM scenarios locally, in K8s clusters, and CI. Examples run out-of-the-box; docs cover SDK, configs, and pipelines.

---

### Milestone 4 — Starship Integration & v1.0 Release
- **Estimated Duration:** 4 weeks  
- **FTE:** 1.5–2.0  
- **Costs:** $15,000 USD  

**Deliverables**

| #   | Deliverable | Specification |
|-----|-------------|---------------|
| 0a. | **License** | MIT License maintained |
| 0b. | **Documentation** | Final docs: migration guides, contributor guidelines, governance |
| 0c. | **Testing & Guide** | E2E tests across Polkadot + Cosmos + Ethereum profiles |
| 0d. | **Docker** | Final images for Polkadot + cross-ecosystem profiles (pushed to OCI/registry) |
| 0e. | **Article/Workshop** | “Cross-Ecosystem Devnets with PIDN + Starship” |
| 1.  | **Helm Chart: Starship Integration** | PIDN packaged as a Starship-compatible module/subchart |
| 1.a | Module Manifest & Interface | Starship module manifest (YAML/JSON) + interface contract; versioned and documented |
| 1.b | Polkadot Module Packaging | Relay/parachain Helm chart refactored to reusable subchart with values schema + README badges |
| 1.c | Init/Teardown Hooks | Pre/post hooks and Jobs for multi-ecosystem boot/shutdown (HRMP bootstrap, health checks) |
| 1.d | Chart Linting & CT | `chart-testing` CI job + chart schema validation; OCI chart publishing workflow |
| 2.  | **CLI/SDK Compatibility** | Starship-aware commands and loaders |
| 2.a | Config Loader | Load/validate Starship YAMLs via CLI/SDK; schema errors surfaced clearly |
| 2.b | Orchestration | Start/stop/status/logs across ecosystems from one interface |
| 2.c | Adapters | Thin adapters mapping Starship lifecycle to PIDN internals (Helm/K8s ops, profiles) |
| 3.  | **Examples Directory** | `examples/cross-ecosystem` runnable demo |
| 3.a | Example Configs | Example Starship YAML combining Polkadot + Cosmos + Ethereum |
| 3.b | Tutorial | Step-by-step guide + recordings/screens for boot/run/teardown |
| 3.c | CI Example | Minimal CI workflow invoking Starship + PIDN module with smoke tests |
| 4.  | **Upstream Contributions (PRs)** | PRs into the Starship repo to add the PIDN plugin/module |
| 4.a | **Primary PR to `hyperweb-io/starship`** | Adds the Polkadot module, manifests, docs links, sample configs, and CI badge updates |
| 4.b | Docs PR | Adds/updates Starship docs site pages referencing the new Polkadot module |
| 4.c | Chart Index/Registry PR | Adds/updates chart index/registry references used by Starship to pull the module |
| 4.d | CI Integration PR | Ensures Starship CI runs lint/build/smoke tests for the new module (chart-testing, helm lint, basic boot) |
| 5.  | **Maintenance Plan** | Governance, LTS profiles, CODEOWNERS, triage SLA, SemVer policy |
| 5.a | Contribution Model | `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, DCO sign-off notes |
| 5.b | Release Policy | Semantic versioning, release notes, deprecation policy, backport/LTS plan |
| 5.c | Security & Support | SECURITY.md (reporting), supported matrix & EOL policy |
| 6.  | **v1.0 Release** | Tagged release, changelog, images/charts pushed; docs and workshop published |
| 6.a | Provenance & SBOM | Build provenance (SLSA-oriented where possible) + SBOM artifacts attached to release |
| 6.b | Compatibility Matrix | Verified versions table (K8s, Helm, polkadot-sdk, starship, node/images) |

**Acceptance Criteria:**  
- `starship start --config polkadot-cosmos-ethereum.yaml` launches cross-ecosystem networks including Polkadot.  
- Primary **PR to `hyperweb-io/starship`** for the Polkadot module is **merged** (or acknowledged with requested follow-ups tracked).  
- Charts and images are linted, tested, and **published** to an OCI/registry; docs & examples live; v1.0 tagged with changelog and SBOM.  

---

## Technial Specification
### Architecture Overview

PIDN will follow a proven hybrid architecture pattern, leveraging Helm charts for Kubernetes deployment, TypeScript client libraries, and Go microservices for core components.

### Reusable Components

#### Core Infrastructure Framework
- **Helm Chart Architecture**: The devnet chart structure and template patterns
- **TypeScript CLI Framework**: Command structure and configuration management
- **TypeScript Client Library**: Kubernetes API integration and deployment orchestration
- **GitHub Actions Integration**: CI/CD workflow patterns
- **Monitoring Stack**: Prometheus and Grafana deployment templates

### Polkadot-Specific Components to Build

#### 1. Polkadot Relay Chain Support
**New Helm Templates Required:**
- `templates/chains/polkadot/relay-chain.yaml` - Polkadot validator node StatefulSets
- `templates/chains/polkadot/genesis.yaml` - Relay chain genesis and spec configuration
- `scripts/polkadot/create-validator.sh` - Validator key generation and registration

#### 2. Parachain Infrastructure
**New Components:**
- `templates/chains/polkadot/parachain.yaml` - Generic parachain collator deployments
- `templates/chains/polkadot/system-chains.yaml` - Asset Hub and system parachain deployments
- `scripts/polkadot/register-parachain.sh` - Parachain registration automation
- Support for `polkadot-omni-node` as generic collator runtime

#### 3. Substrate Chain Abstraction
**Configuration Schema Extensions:**
```yaml
chains:
  - id: polkadot-relay
    name: relay-chain
    runtime: polkadot
    validators: 4
  - id: asset-hub-1000
    name: system-parachain
    paraId: 1000
    runtime: asset-hub
  - id: custom-para-2000
    name: parachain
    paraId: 2000
    runtime: custom
```

#### 4. XCM Relayer Integration
**New Service:**
- `templates/relayers/xcm/statefulset.yaml` - XCM message relayer deployment
- `scripts/polkadot/setup-xcm.sh` - Cross-chain channel configuration
- Support for HRMP channel establishment between parachains

#### 5. Polkadot-Specific Faucet
**Enhanced Faucet Service:**
- `faucet-polkadot/` - New Go microservice for DOT/KSM/custom token distribution
- Support for multi-asset transfers across parachains
- Integration with Asset Hub for cross-chain asset management

#### 6. Chopsticks Integration
**Chain Forking Support:**
- `templates/chains/polkadot/chopsticks.yaml` - Lazy fork service deployment
- `scripts/polkadot/fork-chain.sh` - Automated chain state forking
- WebSocket endpoints at `ws://localhost:8000` for forked chain access

#### 7. Client Library Extensions
**TypeScript Client Enhancements:**
- `@pidn-ci/client` - Polkadot.js integration for transaction submission
- WebSocket connection management for multiple parachains
- Support for `@polkadot/api` runtime calls and queries

### Technical Deliverables

#### NPM Packages
- `@pidn-ci/cli` - Command-line interface
- `@pidn-ci/client` - TypeScript client library for programmatic control
- `@pidn-ci/types` - Shared TypeScript definitions for Polkadot configurations

#### Helm Charts
- `pidn/charts/devnet` - Main deployment chart with Polkadot-specific templates
- Support for configurable network topologies via `values.yaml`

#### Go Microservices
- `pidn-faucet` - DOT/KSM token distribution service
- `pidn-registry` - Polkadot chain and parachain metadata registry
- `pidn-exposer` - API gateway for unified parachain access

#### GitHub Actions
- `pidn-action` - Workflow action for CI/CD integration
- Template workflows for multi-parachain testing scenarios

## Future Plans

### Maintenance Strategy
- **Open Governance**: PIDN will be maintained under an open-source governance model with transparent triage, contributor guidelines, and "good first issue" tickets.
- **Release Cadence**: Tagged releases every 6–8 weeks with reproducible builds and changelogs.
- **CI/CD Health**: Automated pipelines to ensure regression-free cross-ecosystem support.
- **Community Modules**: Encourage parachain teams and bridge builders to contribute modules (e.g., new parachain configs, external chain integrations).
- **Security & Stability**: Security disclosure policy and LTS support for stable profiles (relay + 2 parachains + Snowbridge).

### Long-Term Vision
- **v1.x Evolution**: Expand bridge profiles (Axelar, Wormhole, Hyperlane), add richer XCM stress-test harnesses, runtime upgrade simulations, and prebuilt cloud presets.
- **v2.0 Vision**: Position PIDN as the standard interop devnet framework, with Polkadot at the center, extended seamlessly to Cosmos/Ethereum/Solana/Bitcoin. Enable AI-native workflows where agents can autonomously spin up, test, and optimize cross-chain code.
- **Sustainability**: Long-term funding via grants, ecosystem sponsorships, and community-driven governance, with optional hosted/SaaS offerings for enterprises.

### Measurable 12–18 Month Goals

**Adoption**:
- At least 10 parachain teams integrating PIDN into their CI pipelines.
- 50+ external developers using PIDN profiles/templates in GitHub projects.

**Ecosystem Coverage**:
- Support for 3+ external ecosystems (Cosmos, Ethereum, Solana) alongside Polkadot.
- At least 2 bridge profiles (Snowbridge + one additional, e.g., Axelar) validated end-to-end.

**Performance Benchmarks**:
- Deliver reproducible reports for latency, throughput, and finality across 2 parachains + Snowbridge.
- Run "stress profiles" simulating 1M+ XCM messages with automated metrics dashboards.

**Community Contributions**:
- 5+ community-contributed modules (e.g., parachain configs, external chain presets).
- Active GitHub community with ≥20 external contributors.

**AI Integration**:
- Containerized e2e environments consumable by AI copilots/agents.
- Demonstrate at least one case study of AI-assisted cross-chain testing using PIDN.

