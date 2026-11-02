# SubProvenance: Question-Driven Account Provenance & OpenGov Delegation Inspector

- **Team Name:** SubProvenance Labs
- **Payment Details:**
  - **DOT**: 1c1cGRqunQZWwshMin3nG1QduEF7ZmxEK3bw9UxWh1Hjr8q
  - **Payment**: 1c1cGRqunQZWwshMin3nG1QduEF7ZmxEK3bw9UxWh1Hjr8q (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

This application is in response to the RFP: [Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/data_analysis_tools.md).

### Overview

- **Tagline:** A question-driven, zero-SQL web application that traces Polkadot/Kusama reserved balance provenance, `AccountInfo` reference counter dependencies (`consumers`, `providers`, `sufficients`), and multi-hop OpenGov vote delegations.
- **Brief Description:** While standard block explorers (Subscan, Statescan, Calamar) index individual blocks and extrinsics, they force advanced users to manually click through dozens of screens to reconstruct account state provenance. **SubProvenance** provides a natural-language Question-Driven Web UI where non-technical users select a provenance question, paste an SS58 address, and immediately receive a complete attribution breakdown backed by live RPC storage verification and historical event reconciliation.
- **Integration with Substrate / Polkadot / Kusama:** Built natively for Substrate `frame_system`, `pallet_balances`, `pallet_conviction_voting`, `pallet_identity`, `pallet_proxy`, `pallet_multisig`, `pallet_preimage`, `pallet_staking`, `pallet_vesting`, and `pallet_assets` across Polkadot, Kusama, AssetHub, and People Chain.
- **Why Our Team is Interested:** We actively operate governance analytics and developer tooling on Polkadot and repeatedly saw users and DAO treasuries unable to diagnose stuck `consumers` counters, mystery reserved DOT slices, and multi-hop OpenGov delegation chains.

### Project Details

#### Deliverable Data Analyses Specification (Mandatory RFP Format)

| # | The Data Analysis Question | The Expected Input | The Expected Output |
| :--- | :--- | :--- | :--- |
| **1** | **Which transactions and accounts were responsible for the reserved balance in an account?** | An SS58 account address (`AccountId32`) and target network (`Polkadot`, `Kusama`, `AssetHub`, `People`). | A structured table of active balance reserve slices (in DOT/KSM and Planck) grouped by runtime pallet and reserve reason (`Identity`, `Proxy`, `Preimage`, `Multisig`, `Bounties`), listing the exact introducing/unreserving extrinsic hashes, block numbers, timestamps, counterparty accounts, and exact extrinsic call required to release each reserve. |
| **2** | **What modules currently depend on `consumers`, `providers`, and `sufficients` reference counters for a certain account, and which transactions introduced/removed those references?** | An SS58 account address (`AccountId32`) and target network. | The account's live `System.Account` reference counters (`consumers`, `providers`, `sufficients`), a complete mapping of every active and historical runtime pallet dependency (`Staking`, `ConvictionVoting`, `Vesting`, `Balances`, `Assets`, `Session`), the exact extrinsic hashes and blocks that introduced or removed each reference, and an actionable account reapability diagnostic. |
| **3** | **Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track, taking into account indirect delegations (`Account A -> Account B -> Account C`)?** | An SS58 account address (`AccountId32`) and an optional OpenGov Track ID (`0`–`34`, or `All Tracks`). | A directed multi-hop delegation graph and tabular breakdown per OpenGov track showing all direct (`1-hop`) and indirect (`2..k-hop`) inbound delegators, outbound delegation paths, conviction multipliers (`0.1x`–`6x`), total accumulated effective voting power in DOT/KSM, the terminal casting voter address, and any detected delegation cycles. |
| **4** | **Which expired OpenGov conviction locks and staking unbonding chunks can be unlocked right now to free transferable balance?** | An SS58 account address (`AccountId32`). | A list of expired vs. active track locks (`ConvictionVoting.ClassLocksFor` & `VotingFor`) with exact unlockable DOT amounts and a pre-encoded `Utility.batchAll` call payload to clear expired locks in one transaction. |

#### Architecture & PoC Verification
We have implemented and unit-tested a working Proof-of-Concept in `targets/bounties/w3f--data-analysis-tools/`:
- `src/substrate_provenance.py`: Core attribution engine for Q1, Q2, and Q3 with live Polkadot JSON-RPC probing and deterministic event/storage reconciliation.
- `src/ui_server.py`: Zero-SQL, zero-GraphQL Question-Driven Web UI and REST JSON API (`/api/questions`, `/api/analyze`).
- `tests/test_substrate_provenance.py`: Deterministic test suite verifying all 3 RFP provenance questions (`100%` pass rate).

#### What the Project Will *Not* Provide
- It is **not** a general-purpose block explorer duplicating block lists, validator leaderboards, or raw extrinsic feeds already available on Subscan or Statescan.
- It does **not** require users to write SQL, GraphQL, or custom scripts.

### Ecosystem Fit

- **Where and how does your project fit into the ecosystem?** SubProvenance acts as a specialized account state diagnostics and governance provenance layer complementing existing block explorers and governance portals (SubSquare, Polkassembly).
- **Target Audience:** Non-technical Polkadot/Kusama token holders, OpenGov voters and delegates, multisig/proxy operators, and ecosystem support teams.
- **Comparison with Prior Projects:** Previous grants under this RFP (`Dot-ETL` `#1716` and `Deep Account Analytics` `#1768`) focused on bulk CSV exports and warehouse SQL tables. SubProvenance directly fulfills the RFP's end-user UX mandate: a dynamic, question-driven web interface requiring zero programming or query-language skills.

## Team :busts_in_silhouette:

### Team members
- Lead Substrate Data & Runtime Engineer
- Full-Stack Web3 UX & Graph Visualization Engineer

### Contact
- **Contact Name:** gttps (https://github.com/gttps)
- **Contact Email:** Submitted privately via W3F KYC Portal
- **Website:** https://github.com/gttps

### Legal Structure
- **Registered Address:** Provided privately in KYC
- **Registered Legal Entity:** Individual (KYC submitted privately upon approval)

### Team Code Repos
- `https://github.com/subprovenance/polkadot-provenance-inspector`

## Development Status :open_book:

- Working PoC completed and verified in `targets/bounties/w3f--data-analysis-tools/` with 100% passing unit tests across Reserved Balance Provenance, Reference Counter Attribution, and Multi-Hop OpenGov Delegation Graph analysis.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 — Core Provenance Indexing Engine & JSON API (Questions 1, 2, 3)

- **Estimated duration:** 1 month
- **FTE:** 1.5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide inline code documentation and a step-by-step API tutorial showing how to query Q1 (Reserved Balance Provenance), Q2 (Reference Counter Dependencies), and Q3 (Transitive OpenGov Delegations) against live Polkadot and Kusama accounts. |
| **0c.** | Testing and Testing Guide | All provenance attribution and multi-hop graph traversal functions will be covered by deterministic unit and integration tests (`python -m unittest discover -s tests`), documented in `TESTING.md`. |
| **0d.** | Docker | We will provide a `Dockerfile` and `docker-compose.yml` to spin up the provenance analyzer and API server in a single command. |
| 1. | Reserved Balance Provenance Engine (Q1) | Hybrid archive event + live `Balances.Reserves` storage analyzer mapping every reserved DOT/KSM slice to its introducing extrinsic hash, pallet/call, counterparty account, and release instruction across Polkadot, Kusama, AssetHub, and People Chain. |
| 2. | Reference Counter Attribution Engine (Q2) | `System.Account` `consumers`, `providers`, and `sufficients` inspector mapping active and historical references across `Staking`, `ConvictionVoting`, `Vesting`, `Balances`, `Proxy`, `Identity`, `Assets`, and `Session`, including an Account Reapability Diagnostic. |
| 3. | Transitive OpenGov Delegation Graph Engine (Q3) | Cycle-safe directed multi-hop graph builder (`A -> B -> C`) for `ConvictionVoting.VotingFor` across all OpenGov tracks (`0`–`34`), computing direct and indirect conviction-weighted DOT voting power and terminal casting delegatees. |

### Milestone 2 — Question-Driven Web UI, Interactive Graph Visualizer & Unlock Assistant

- **Estimated Duration:** 1 month
- **FTE:** 1.5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Complete user guide and architecture manual with annotated screenshots of the Question-Driven Web UI for non-technical users. |
| **0c.** | Testing and Testing Guide | Automated E2E UI and API regression suite verifying all 4 question workflows and export formats. |
| **0d.** | Docker | Production-ready multi-stage Docker container bundling the Question-Driven Web UI and backend API. |
| **0e.** | Article | We will publish a comprehensive technical article and walkthrough tutorial demonstrating how Polkadot/Kusama users can diagnose reserved balances, clear stuck `consumers` counters, and inspect multi-hop OpenGov delegations using SubProvenance. |
| 1. | Question-Driven Web UI | Zero-SQL, zero-GraphQL web application allowing users to browse natural-language questions, input SS58 addresses, inspect provenance tables, and export reports as JSON/CSV. |
| 2. | Interactive Multi-Hop Delegation Graph Visualizer | Visual interactive node-link graph in the Web UI rendering upstream and downstream OpenGov delegations per track with conviction multipliers and cycle warnings. |
| 3. | Batch Lock & Reapability Assistant (Q4) | Interactive helper that identifies expired OpenGov conviction locks and generates ready-to-sign `Utility.batchAll` call data to unlock tokens or clear `consumers` counters. |

## Future Plans

- Integrate SubProvenance question widgets directly into SubSquare, Polkassembly, and Nova Wallet via open-source embeddable components and public API endpoints, sustained through Polkadot OpenGov Treasury maintenance bounties.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Grants Program GitHub Repository & Polkadot Forum.
