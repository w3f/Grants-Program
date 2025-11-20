
# InkBench

- **Team Name:** MeshPort Labs
- **Payment Details:** 
   - **DOT**: 15o24agCBihRyUrb3Sv4nQqVuJunVW1CJ4NQFBU13LMjbMTt (65% in DOT)
   - **USDC**: 15o24agCBihRyUrb3Sv4nQqVuJunVW1CJ4NQFBU13LMjbMTt 
- **[Level](https://github.com/w3f/Grants-Program/tee/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

**Tagline:** *Reusable benchmarking library with CLI and API interfaces for comparing Solidity vs ink! smart contracts on pallet-revive.*

**Description:**
InkBench is a **Rust-based benchmarking framework** that leverages **pallet-revive** as the execution engine for running Solidity and ink! smart contracts on PolkaVM.

The **core deliverable is a library** that standardizes how contracts are deployed, executed, and benchmarked on pallet-revive. This library is then used to build:

* A **CLI tool** for reproducible developer and CI/CD workflows.
* A **Web API service** to expose benchmark results and enable visualization dashboards. 
* A **Web App** where users can drop their contracts and benchmark them.

**Relation to ink! ecosystem:**
By quantifying the performance advantages of ink! (64-bit arithmetic, SCALE ABI) compared to Solidity, InkBench will provide empirical evidence supporting ink! adoption and tooling integration.


### Project Details

**Abstractions and Core Capabilities**

Our library will **standardize the process of deploying, executing, and recording benchmarks** for both ink! and Solidity contracts by building directly on top of **pallet-revive**. At a high level, the library will provide three essential abstractions:

1. **Contract Lifecycle Management**

   * **Deployment:** Using pallet-revive’s instantiation API, we will deploy identical contracts (e.g., Incrementer, ERC20, upgradeable proxy) written in both ink! and Solidity. This ensures a fair baseline for comparing contract size and constructor overhead.
   * **Execution:** We will invoke methods on deployed contracts through revive’s low-level call interface. Each execution returns metrics such as gas consumed, gas required, and whether the call reverted.

2. **Benchmark Scenarios**
   We will design a suite of **standardized scenarios** that allow us to directly compare Solidity vs ink! under controlled conditions:

   * **Storage Operations:**

     * Writing to storage slots
     * Reading values from storage
     * Updating large mappings or arrays
       → Goal: quantify differences in gas usage and execution time.
   * **Arithmetic Operations:**

     * ink! (64-bit word size) vs Solidity (256-bit word size)
     * Benchmarks will involve repeated additions, multiplications, and modular arithmetic.
       → Goal: demonstrate performance impact of PolkaVM’s reduced word size advantage in ink!.
   * **Cross-Contract Calls:**

     * Nested calls (e.g., ERC20 `transfer` calling into another contract, or proxy delegation).
       → Goal: measure overhead of cross-contract communication.
   * **Contract Size Comparison:**

     * Compile identical functionality (ERC20, incrementer, upgradeable proxy) in ink! and Solidity.
     * Compare the size of resulting `.polkavm` binaries.
       → Goal: evaluate deploy-time footprint and storage cost of contracts.
   * **ABI Efficiency:**

     * ink!’s SCALE ABI vs Solidity’s ABI.
     * Benchmark function calls with structured data, arrays, and nested structs.
       → Goal: measure how SCALE’s compact encoding reduces gas and size overhead.

3. **Metrics & Results**
   For every benchmark, we will record and compare across dimensions:

   * **Gas Usage:** Actual vs required gas per call.
   * **Execution Time:** Nanosecond-level timing within the runtime.
   * **Contract Size:** Compiled `.polkavm` bytecode size.
   * **ABI Overhead:** Relative cost of SCALE vs Solidity ABI encoding.

    **Output Formats**

* Results will be exported in **JSON** for programmatic use (API, dashboards) and **CSV** for CLI/CI pipelines.
* This ensures benchmarks are both reproducible and easy to visualize.


---

**API Service**
The API service exposes benchmarking capabilities over HTTP, enabling developers, researchers, and teams to:

* Run predefined benchmark suites remotely.
* Submit compiled contracts (ink!/Solidity `.polkavm`) for testing.
* Fetch benchmark results in structured JSON.
  This allows automated workflows, integrations, and research use cases without requiring local runtime setup.

---

**Web App**
The Web App is a **user-friendly dashboard** for non-technical and community use.

* Upload contracts (ink!/Solidity) and benchmark them directly.
* Visualize results (gas usage, execution time, contract size, ABI overhead) in charts and tables.
* Preloaded examples (ERC20, incrementer, upgradeable proxy) for easy exploration.
* Export results as JSON/CSV.
  This makes benchmarking accessible to hackathon participants, ecosystem teams, and decision-makers without requiring CLI/API knowledge.

---

**Documentation**

* Inline Rustdoc for the library.
* Tutorials for using the CLI locally and in CI/CD.
* API usage guide for integrating benchmarks into external systems.
* Web App user guide for uploading contracts and interpreting results.


### Technology Stack

* **Core**: Rust, pallet-revive, Polkadot SDK, sp_io::TestExternalities (for deterministic runtime benchmarks).

* **CLI Tool**: Rust, Clap-rs, polkadot-sdk.

* **API Service**: Rust (Axum/Actix) wrapping library functions as HTTP endpoints. That we will build a dashboard

* **Web App** : Nextjs website for uploading contracts and running benchmarks.
  

* **PoC:**

  * Ink! and Solidity incrementer contracts already compiled to PolkaVM.
  * Benchmarking runtime implemented using pallet-revive (`bare_instantiate`, `bare_call`).
  * Repository: [ItshMoh/inkBench](https://github.com/ItshMoh/inkBench).

* **Business Model:**

  * Open-source infrastructure.
  * Positioned as a community tool and research enabler.

---

### Ecosystem Fit
This project addresses a community need identified in the [ink! RFP for Benchmarking Tools](https://github.com/use-inkubator/Ecosystem-Grants/blob/cmichi-update-rfp-benchmark/request-for-proposals.md#%EF%B8%8F-benchmark-solidity-vs-ink-on-pallet-revive). The ink! ecosystem lacks a standardized framework to compare ink! and Solidity contract performance on pallet-revive. This tool will provide developers with data-driven insights for informed language selection in smart contract development. The maintainer  of the Ecosystem Grants (Michael Müller) have share his thought on the proposal

> Your project would certainly be very valuable and your outline also looks good, so we'd like to encourage you to resubmit it in coming rounds of the ink!ubator

because of the lack of fund of the current inkubator grant it has not moved forward
[see the thought here](https://github.com/use-inkubator/Ecosystem-Grants/pull/94#issuecomment-3487440257) our proposal. 

---

### Ink! Ecosystem Impact

* **Developers:** Run benchmarks locally or in CI using the CLI.
* **Ecosystem Maintainers:** Integrate benchmarks into ink!’s CI/CD and documentation.
* **Adoption Impact:** Demonstrate ink!’s efficiency with clear metrics and visual comparisons against Solidity.
* **Researchers:** Use the API and exported datasets for academic or performance studies.

---

---

## Team :busts_in_silhouette:

### Team Members

* **Team Lead:** Mohan Kumar

### Contact

* **Contact Name:** Mohan Kumar
* **Contact Email:** [whitelovemohan123@gmail.com](mailto:whitelovemohan123@gmail.com)

### Legal Structure

- We don't have a legal structure yet. We are a group of developers that want to build cool stuff. We will create a legal structure for future work and projects.

### Team's experience

Mohan has 3 years of experience in Full Stack Development, working as an AI Engineer and Software Development.

He has participated in many hackathons and some web3 hackathons, also winning some of them. He has  also contributed to a lot of open Source Projects(Like [AsyncAPI](https://github.com/asyncapi), [Floresta](https://github.com/vinteumorg/Floresta))  

Currently this is the [POC](https://github.com/ItshMoh/inkBench) that he is working on.

### Team Code Repos

* [https://github.com/ItshMoh/inkBench](https://github.com/ItshMoh/inkBench)
* [https://github.com/ItshMoh/](https://github.com/ItshMoh/)


## Development Status :open_book:

* PoC cli implemented where we have a CLI to deploy, call, and benchmark contracts.
* Contracts compiled to PolkaVM and deployed on pallet-revive.

---

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):** 4
* **Total Costs:** 30,000 USD

---

### Milestone 1 — Core Library (pallet-revive integration) + CLI Tool

* **Estimated Duration:** 1.5 months
* **FTE:** 2
* **Costs:** 15,000 USD

|  Number | Deliverable              | Specification                                                                   |
| ------: | ------------------------ | ------------------------------------------------------------------------------- |
| **0a.** | License                  | Apache 2.0                                                                      |
| **0b.** | Documentation            | Inline docs, usage examples.                                                    |
| **0c.** | Testing                  | Unit + integration tests with pallet-revive.                                    |
| **0d.** | Docker                   | Containerized test runtime for reproducibility.                                 |
|   **1.** | Rust Library Crate       | Core API: deploy, call, measure (via `Revive::bare_instantiate` + `bare_call`). |
|    **2.** | Gas Benchmarks           | Storage read/write, cross-contract calls.                                       |
|    **3.** | Arithmetic Benchmarks    | ink! (64-bit) vs Solidity (256-bit).                                            |
|      **4.** | Contract Size Benchmarks | Measure `.polkavm` binary sizes for ink! vs Solidity.                           |
|      **5.** | CLI `revive-bench`      | Commands to deploy, call, and benchmark contracts.                                         |
|      **6.** | ERC20 Benchmarks     | Compare ink! vs Solidity ERC20 implementations.                                         |
|      **7.** | Output Serialization     | JSON + CSV export of benchmark results.                                         |
|      **8.** | CI Integration     | Example workflows (GitHub Actions).                                         |
---

### Milestone 2 —  Web API + Frontend Application

* **Estimated Duration:** 1.5 month
* **FTE:** 2
* **Costs:** 15,000 USD

|     Number | Deliverable               | Specification                                       |
| ---------: | ------------------------- | --------------------------------------------------- |
| **0a–0d.** | Standard deliverables     | License, docs, tests, Docker.                       |
|         1. | Web API Service      | HTTP API wrapping the library for running benchmarks.  |
|         2. | Upgradeable Contracts          | Benchmark proxy/upgradeable pattern.     |
|         3. | ABI Efficiency Benchmarks | Compare SCALE ABI vs Solidity ABI encoding.         |
|         4. | Web Frontend (React)           | UI where users upload ink!/Solidity contracts. |
|         5. | Benchmark Runner Integration           | Frontend communicates with Web API to run benchmarks.                 |
|         6. | Visualization           | Interactive charts/tables showing gas usage, contract size, and ABI efficiency. |
|         7. | Report Article           | Publish tutorial + benchmark results using the Web App. |



## Future Plans

* Extend benchmarks to DeFi/NFT contract patterns.
* Maintain a hosted public dashboard for ongoing comparisons.
* Collaborate with ink! maintainers to integrate benchmarks into official CI.

---

## Additional Information \:heavy\_plus\_sign:


* **Work already done:** [InkBench PoC](https://github.com/ItshMoh/inkBench).
* **Collaboration:** Open to syncing with ink! CI maintainers for integration.
