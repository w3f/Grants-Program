# Submarine — Open Explorer & Indexer for Polkadot

- **Team Name:** MLabs LTD
- **Payment Details:**
  - **DOT**: For the **DOT** compensation, please provide a Polkadot address (e.g. 15oF4...).

168GZyitp1Uyvp7Vx4zjCDZoCHrGuomNMVPhDeqv1iJNKP1Y

  - **Payment**: For the **USDC** portion of the payment, please provide a Polkadot AssetHub address and the currency (e.g. 15oF4... (USDC)). 

168GZyitp1Uyvp7Vx4zjCDZoCHrGuomNMVPhDeqv1iJNKP1Y (USDC)

- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1, 2 or 3?

3

## Project Overview 


### Overview

Submarine - Substrate Explorers Anywhere

#### Brief Overview

Substrate teams need dependable visibility without committing to opaque, high-touch stacks. Submarine is an open-source indexer and explorer centered on a Rust implementation with a clean API over an optimized relational schema for blocks, extrinsics, events, and related activity. It’s designed to be self-hosted and customized. Building on this OSS work, we will offer hosted explorer services on cloud-agnostic, bare-metal–friendly infrastructure, giving teams a cost-effective path without lock-in. Funding Submarine lowers barriers for newer projects and gives established or niche chains a transparent, modifiable baseline to extend.

#### Ecosystem Integration

Submarine consumes chain data via standard Substrate JSON-RPC, then decodes SCALE using the on-chain runtime metadata. We version decoding against specVersion/txVersion so runtime upgrades are handled cleanly across history. The indexer targets archive nodes on the Polkadot relay chains and their parachains, persists a relational schema for core activities, and exposes a clean API that the web UI and external integrators like wallets can use. Deployments are self-hosted on bare metal or standard IaaS with containerized components and CI/CD; no proprietary vendor services are required. This integration plan maps directly to our milestones: M1 (decoder/metadata/type registry), M2 (streaming indexer + schema + data-access API), and M3 (UI integration).

#### Motivation

Numerous ecosystem stakeholders have long since highlighted the need for reliable, affordable, and independently operable chain visibility. Submarine aims to provide a transparent, open-source baseline that lowers onboarding costs for new projects while giving established or niche chains a stack they can modify and run themselves. MLabs has delivered performant, self-hosted infrastructure before and has already prototyped the Rust implementation. We believe it can be developed to provide fast historical catch-up, steady real-time indexing, and predictable operations. Grant funding will support us in hardening and publishing this core work while allowing us to extend hosted services to teams that prefer not to operate it themselves. This advances vendor independence and operator choice across the ecosystem.

### Project Details

We will keep the schema relational and versioned, and we will commit to the final schema design in Milestone 2. Representative entities will likely include:

- Blocks
  - parent_hash, block_hash, number, state_root, extrinsics_root, extrinsics_count, spec_version, timestamp
- Extrinsics
  - block_number, extrinsic_index, extrinsic_hash, section, call_index_pallet, method, call_index_call, args_json, is_signed, signer, nonce, era, tip, success, error, weight, fee_paid
- Events
  - block_number, block_hash, event_index, phase, pallet, pallet_index, args_json, extrinsic_index, extrinsic_hash, variant, variant_index, spec_version
- Transfers (derived)
  - to, from, asset, amount, timestamp, block_hash, block_number, is_native, asset_id, asset_symbol, success, source_event, extrinsic_hash, event_index
- Metadata Registry
  - runtime_versions, pallets, calls, events, types_json, storage_items, constants, signed_extensions, spec_version, tx_version, created_at

The read API will expose a REST interface with cursor-based pagination and stable JSON field names. Example endpoints include:
- /v0/blocks 
- /v0/extrinsics 
- /v0/events
- /v0/accounts/{address}/transfers


An OpenAPI 3.0 specification will be published alongside the service in Milestone 2.

Technology Overview

Submarine’s stack will be fully open source and cloud-agnostic:

- Indexer and Services will be implemented in Rust, using asynchronous runtime and Substrate RPC for block and event ingestion. SCALE decoding and metadata versioning are handled via standard Substrate libraries.
- PostgreSQL with a versioned relational schema and JSONB fields for decoded data will be used for storage.
- We will expose REST endpoints with OpenAPI documentation, support pagination and query filters for blocks, extrinsics, and events.
- We will prioritize caching and containerized deployments via Docker; suitable for bare-metal or IaaS hosting.
- Our UI will be built with Next.js (React + TypeScript) and will read exclusively from the Submarine API layer.
- We will include monitoring and security solutions: standard health endpoints, Prometheus-compatible metrics, TLS termination, and basic API authentication.

Prior Work

Since 2021, the Polkadot ecosystem has relied on a small set of leading explorer solutions, with the community collectively investing millions of USD into explorer infrastructure and operations. Despite this investment, persistent gaps remain: high hosting costs tied to specific cloud choices, slow historical synchronization that stretches into weeks on typical hardware, and pricing or operational models that leave many smaller or niche parachains without dependable explorer coverage.

To validate these concerns, MLabs conducted hands-on evaluations of open explorer scaffolds and self-hosting paths used across the ecosystem. Our experiments surfaced two primary issues: (1) out-of-the-box indexing performance that under-utilizes modern servers, making full catch-up prohibitively slow and brittle, and (2) complexity in codebases that raises the bar for customization and ongoing maintenance, pushing many teams toward expensive hosted options rather than self-sovereign deployments.

In response, we built Submarine, an open, self-hostable indexer/explorer baseline. The initial prototype began in Go and is now implemented in Rust, with asynchronous RPC ingestion, SCALE decoding, runtime-metadata versioning (V8–V16), and pallet-aware data extraction. The current codebase demonstrates block, extrinsic, and event decoding for relay chains and parachains, plus targeted pallet modules. These results show a clear path to faster historical catch-up, predictable day-2 operations, and materially lower total cost of ownership which will enable broader parachain coverage without vendor lock-in.

### Ecosystem Fit

Overview

Submarine sits in the data infrastructure layer for Substrate networks: between archive/full nodes and the actors and applications that need queryable chain data. It provides a self-hostable indexer + explorer baseline that complements wallets, dApps, analytics, and governance tools by exposing consistent APIs and minimal UI surfaces for core on-chain activity.

Market 

There are several entities we are targeting as clients of Submarine:

Parachain teams - the most obvious use case is providing cost-effective explorer services for Parachain communities
dApps / wallets - these teams will find our APIs useful for interpreting extrinsics and events to build transactions and application interactions
Analysts / ecosystem stakeholders - these entities will benefit from transparent and auditable views of network activity

Impact

Today, many teams struggle to self-host explorers and to forecast or control infrastructure costs. Community feedback suggests that current options can be cost-prohibitive for smaller projects. While self-hosted scaffolds exist, they are not widely adopted—likely due to long historical sync times and operational complexity—delaying time-to-insight and increasing recovery risk. As a result, smaller or niche parachains frequently lack dependable explorer visibility.

Submarine addresses these gaps with an open, transparent baseline that teams can run on bare metal or standard IaaS—no proprietary services required. A lean Rust indexer with checkpointing/rewind and clear data contracts shortens catch-up and simplifies recovery. A versioned relational schema, cursor-based pagination, and reproducible container/CI deployments make day-2 operations predictable. Through pilots with 2–5 parachains, we aim to demonstrate lower-friction onboarding and broaden coverage. The result is greater plurality and reduced vendor-concentration risk, giving operators real choice in how they access and serve chain data.

Comparison

Unlike existing explorer offerings that are tightly coupled to specific hosting models, Submarine is vendor-neutral and designed for bare-metal or standard IaaS, with permissive licensing to encourage self-hosting. Please see our Executive Summary, previously provided and linked here, for more information.

## Team

### Team members

- Luke Mahoney 
- Gergely Szabó
- Dzmitry Shuiski

### Contact

- **Contact Name:** Luke Mahoney
- **Contact Email:** luke@mlabs.city
- **Website:** https://www.mlabs.city/

### Legal Structure

- **Registered Address:** First Floor Office, 3 Hornton Place, London, W8 4LZ
- **Registered Legal Entity:** MLabs LTD

### Team's experience


MLabs

MLabs is an engineering firm focused on open, reproducible blockchain infrastructure and high-quality decentralized applications. Our team’s work spans Substrate and non-EVM chains like Cardano and includes building indexers, runtime-aware decoders, RPC clients, and typed APIs. Deliverables ship with robust observability, containerized deployments, and Nix-based reproducibility where appropriate. We have deep experience with SCALE decoding across runtime versions, resumable block ingestion (checkpointing/rewind), and versioned relational schemas that provide stable, queryable views for wallets, dApps, and analytics.

Throughout our history we’ve shipped operations tooling that keeps deployments cost-aware and friendly to bare metal. We favor deterministic builds, straightforward CI/CD, clear telemetry (metrics, tracing, and logs), and automated snapshot/restore for fast recovery. This experience maps directly to Submarine’s milestones: we will harden the Rust decoder stack and metadata handling, implement a streaming indexer with pagination and rewind, publish a REST API documented with OpenAPI, and deliver a minimal, reliable UI that reads only from that API. The core will remain permissively licensed and reproducible so parachain teams can self-host without lock-in, with optional managed hosting for teams that want it, backed by the same operational standards we use internally.

Website: https://mlabs.city/

GitHub: https://github.com/mlabs-haskell


Gergely Szabo

Full-stack engineer and dApp developer with production experience in Rust, Haskell, PureScript, and Nix. At MLabs, Gergely has led development on Rust-based sidechain/L2 components and authored backend services for dApps, including tx-bakery, a Rust transaction-builder library. His recent work focuses on Substrate tooling: SCALE decoding, runtime metadata handling, and RPC integration—the same core areas underpinning Submarine’s indexer and API.

GitHub: https://github.com/szg251


Dzmitry Shuiski

Software engineer with a strong functional-programming background (Haskell, PureScript) and prior experience in iOS development. Dzmitry has contributed to smart-contract transaction-building libraries and full-stack dApp work, with a focus on correctness and clear interfaces. For Submarine, he brings experience in typed data modeling, decoder/test harness design, and UI integration. These skills translate directly to SCALE decoding, runtime-aware parsing, and end-to-end validation. He is currently pursuing a degree in Software Engineering and Management at Graz University of Technology.
GitHub: https://github.com/errfrom


Luke Mahoney
  
Project lead and software PM with experience coordinating open-source and DeFi initiatives. At MLabs, Luke has planned and delivered blockchain developer-tooling projects, managed multi-party roadmaps, and guided several successful grant applications and reporting cycles. For Submarine, he focuses on delivery management, stakeholder coordination with parachain teams, and making the work reproducible—release process, documentation, and community feedback loops. He attended the Polkadot Blockchain Academy in Lucerne in 2025.

GitHub: https://github.com/somthn0somthn



Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

MLabs completed the TuxedoDapp, and applied and worked on Formal Guarantees for GRANDPA Finality Gadget.


### Team Code Repos

- https://github.com/mlabs-haskell
- https://github.com/mlabs-haskell/Tuxedo
- https://github.com/mlabs-haskell/Tuxedo-Indexer
- https://github.com/mlabs-haskell/Grants-Program-tuxedo

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.


- https://github.com/somthn0somthn
- https://github.com/szg251
- https://github.com/errfrom

### Team LinkedIn Profiles (if available)

NA

## Development Status

We have completed initial research and a working Rust prototype that validate feasibility and performance assumptions for Submarine. The materials below underpin the project’s viability. Please request access from the MLabs team:

Executive summary:
https://docs.google.com/document/d/1ncUliPisvNhLcklTLYAeYkhsoEU5corn/edit

Prototype code:
https://github.com/szg251/submarine


## Development Roadmap 

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.


### Overview


- **Total Estimated Duration:** 25 Weeks

- **Full-Time Equivalent (FTE):** 1.5 FTE
 
- **Total Costs:** $166,038 USD

- **DOT %:** 50%

### Milestone 1  — Decode Extrinsics & Events

- **Estimated duration:** 
4.42 Weeks

- **FTE:**  
1.5

- **Costs:** 
$29,760


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | SCALE Parser | Build a parser that consumes raw SCALE-encoded bytes and, using on-chain metadata, splits them into pallet-call indices and parameter payloads. |
| 2. | Metadata Fetching & Caching | Auto-fetch latest on-chain metadata; Cache metadata versions based upon changes signified by specVersion or txVersion bumps. |
| 3. | Type Registry Generation | Tooling to generate and version per-chain custom type registries; persist registries for historical lookups and re-decode. |





### Milestone 2 — Indexer & Internal Query Layer

- **Estimated duration:** 
7.62 Weeks

- **FTE:** 
1.5

- **Costs:** 
$48,852


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Research | Research and develop of data structures and parsers needed for Relay + AssetHub - Basic smoke testing |
| 2. | Block scanner with basic checkpointing | Continuously pull new blocks via RPC, decode extrinsics/events (using the M1 parser), and persist a "last processed block" pointer. |
| 3. | Rewind | On restart or re-org, rewind N blocks based upon point (e.g. 5–10) to ensure consistency |
| 4. | Field extraction & Filtering | Prioritize field selection for UI pertinent information such as account ID balances, transfer records (`from` , `to` , `amount` , `block` , etc); Discard non-prioritized information |
| 5. | Storage Schema Design & Implementation | Define a DB schema for storing and accessing the extracted information; implement database queries |
| 6. | Data-Access Module | Define and design required endpoints; API exposing in-process function calls that batch, group, and sort results for UI consumption |




### Milestone 3 — UI Integration

- **Estimated duration:** 
4.14 Weeks

- **FTE:** 
1.0

- **Costs:** 
$25,830


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Component Development | Draft wireframes and build out front-end screens; Implement Navigation and routing between views; Loading, empty-state, error, etc displays |
| 2. | Data-access Integration | Wire up in-process function calls to UI components; Ensure pagination and filter controls map cleanly |
| 3. | Essential Validation & Testing | End-to-end smoke tests: block →decode → store → UI render; Verify UX flows |


### Milestone 4 — Infrastructure & DevOps

- **Estimated duration:** 
3.42 Weeks

- **FTE:**  
1.0

- **Costs:** 
$18,648


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Containerization | Dockerize each component (decoder, indexer, UI); Define reproducible images with clear version tags |
| 2. | CI/CD Pipeline | Automate builds, unit/integration tests |
| 3. | Hosting & Deployment | Stand up bare-metal infrastructure; Configure load-balancers, db clusters, and network security; Monitoring and logging implementation; Manage secrets and environment-specific configs |



### Milestone 5 — Ecosystem Integration

- **Estimated duration:** 
5.4 Weeks

- **FTE:**  
1.5

- **Costs:** 
$42,948


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Partner Parachain Onboarding | Identify 2-5 partner parachains and secure agreement for 6-month free trial; Organize customized integration relative their parachain specifics |
| 2. | Essential Validation | Ensure explorers are operating properly relative chain specific types and metadata; Verify critical workflows versus actual on-chain activity |
| 3. | Service Deployment, Monitoring and Feedback loop | Deploy integrated indexers to our infrastructure; Collect partner chain and, where available, community feedback; BD efforts for further product development including organizing further community funding if necessary |


## Future Plans

Please include here

- how you intend to finance the project's long-term maintenance and development,
- how you intend to use, enhance, and promote your project in the short term, and
- the team's long-term plans and intentions in relation to it.


In the near term, our focus is exactly what this grant proposes: harden the Rust indexer and explorer, finalize the versioned relational schema, and ship a documented REST API with an OpenAPI spec and cursor-based pagination. We’ll cut tagged releases, provide a reference deployment (Docker on bare metal or common IaaS), and validate end-to-end on 2–5 pilot parachains so that fresh deployments ingest blocks, decode extrinsics/events, and render in the UI reliably. This phase is about turning the current prototype into a stable, reproducible open-source baseline that any team can self-host.

Beyond the grant, we intend to build a sustainable business around Submarine while keeping the core Apache-2.0/MIT and vendor-neutral. Ongoing development and maintenance will be financed through optional managed hosting with transparent, usage-based pricing; support subscriptions with SLAs and onboarding; and funded integrations for chain-specific extractors or new pallets. This model preserves zero lock-in—teams can run Submarine themselves, or pay for convenience and guarantees—while giving us a durable path to maintain compatibility across runtime upgrades, publish benchmarks and cost profiles, and keep the roadmap public and semantically versioned.


## Additional Information 

**How did you hear about the Grants Program?** Web3 Foundation Website 


Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
