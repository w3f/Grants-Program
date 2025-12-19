# Agora

- **Team Name:** Agora
- **Payment Details:**
  - **DOT:** 1QvwVTx1G4ZhPjE68zEkZDjcLFkJwTMkgKk8FYWWKmsGjcc
  - **Payment (USDC) :** 1QvwVTx1G4ZhPjE68zEkZDjcLFkJwTMkgKk8FYWWKmsGjcc 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

- **Tagline:** Verifiable Off‑Chain Computation via Commit‑Reveal and XCM.
- **Brief Description:** Agora is a Polkadot parachain template extended with a verifiable computation marketplace. It enables parachains to outsource off‑chain jobs (API fetches, computations) to a network of staked workers. Results are verified on‑chain using a crypto‑economic commit‑reveal game. Cross‑parachain requests and result delivery use XCM.
- **Integration:** Agora integrates into the Polkadot ecosystem as a parachain that provides a service (verifiable computation) to other parachains via XCM. It leverages Substrate for the chain logic and Polkadot's shared security.
- **Interest:** The team is interested in creating this project to solve the problem of trustless off-chain computation and data fetching, enabling a decentralized oracle and computation network within the Polkadot ecosystem without relying on trusted execution environments (TEEs) or centralized providers.

### Project Details

**Mockups/Designs:**

**Video Demo:**
- [Watch Agora Demo Video](https://www.youtube.com/watch?v=3V9ne5yBJFs&t=2s)
- [Watch Agora Walkthrough](https://app.supademo.com/demo/cm6xuj2sr01o8pegv3s411vap)

- App Workflow: `https://drive.google.com/file/d/17Fb2KbcJln9lEmsJ8lFXYMeEEVOkCHt_/view?usp=drive_link`
- Dashboard: `https://drive.google.com/file/d/16tMUbN2GPYmBoMoPvyiPBAIZ66G6gCDt/view?usp=drive_link`
- Job submission UI: `https://drive.google.com/file/d/1eOcAyvX3cI-6YfwLqkAY1xymzIUTWI2V/view?usp=drive_link`

**Architecture:**
- **Runtime:** FRAME-based Substrate runtime including `agora` pallet.
- **Agora Pallet:** Handles job lifecycle (submit -> commit -> reveal -> finalize), staking, rewards/slashing, and XCM handling.
- **Off-Chain Worker (OCW):** Handles execution of jobs (API fetches, computation) and submits commits/reveals.
- **XCM:** Uses `Transact` for cross-chain job submission and HRMP for result delivery.

**Technology Stack:**
- **Blockchain:** Rust, Substrate, Polkadot SDK.
- **Frontend:** React, Vite, TailwindCSS, Polkadot JS API.
- **Scripts:** Node.js, JavaScript.

**Core Components:**
- `pallets/agora`: The core logic for the computation marketplace.
- `node`: The collator binary.
- `ui`: The React-based dashboard for interacting with the marketplace.

**PoC/MVP:**
- The current repository serves as the MVP, featuring a working local testnet (Zombienet) with XCM enabled, a functional `agora` pallet with commit-reveal mechanism, and a basic UI.

## Need for This
Parachains currently have no standardized way to outsource arbitrary computation tasks trustlessly within the Polkadot ecosystem. Teams either build custom solutions, use centralized providers.Existing decentralized computation requires trusted execution environments (specialized hardware, supply chain risks, limited validator sets). 

- TEE-based (Phala): Hardware dependencies, limited validator sets.
- Centralized oracles: Single points of failure, trust assumptions

## How We Help DOT
All computation workers must stake DOT as collateral for honest execution. Dishonest workers face slashing of staked DOT plus reputation decay. Honest workers earn bounties and build reputation to access higher-value jobs

DOT as Universal Payment Layer: Job bounties can be denominated in DOT for cross-parachain compatibility. When any parachain submits a computation job with a DOT bounty, XCM transfers it to Agora's sovereign account. After consensus verification, honest workers split the bounty. 

### Ecosystem Fit

- **Fit:** Agora fits as a utility parachain providing decentralized computation and oracle services to other parachains.
- **Target Audience:** Parachain developers needing off-chain data/compute, DeFi protocols requiring oracles, and users wanting to run worker nodes.
- **Needs Met:** Trustless access to off-chain data and computation without centralized intermediaries.
- **Differentiation:** Unlike TEE-based solutions (e.g., Phala), Agora uses crypto-economic verification (commit-reveal), which avoids hardware dependencies. Unlike centralized oracles, it is decentralized and permissionless.

## Team :busts_in_silhouette:

### Team members

- Suyash D Nahar
- Nikhil Kottoli

### Contact

- **Contact Name:** Suyash D Nahar
- **Contact Email:** nahsrsuyash@gmail.com
- **Contact Name:** Nikhil Kottoli
- **Contact Email:** nikhilkottoli2005@gmail.com

### Team Code Repos

- https://github.com/suyash101101/Agora

### Team LinkedIn Profiles

- https://www.linkedin.com/in/suyash101/
- https://www.linkedin.com/in/nikhil-kottoli-92552128a/

## Development Status :open_book:

- **Code:** [https://github.com/suyash101101/Agora](https://github.com/suyash101101/Agora)
- **Demo Video:** [Watch Agora Demo Video](https://www.youtube.com/watch?v=3V9ne5yBJFs&t=2s)
- **Walkthrough:** [Watch Agora Walkthrough](https://app.supademo.com/demo/cm6xuj2sr01o8pegv3s411vap)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **FTE:** 2
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1 — Core Functionality & Local Testnet

- **Estimated duration:** 2 months
- **FTE:** 2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT-0 / Apache 2.0 |
| **0b.** | Documentation | Inline docs for `agora` pallet and a guide on running the local Zombienet setup. |
| 1. | Code Revamp | Revise the hackathon implementation and resolve minor defects within the `agora` pallet. |
| 2. | Ecosystem Survey | Reach Out to parachains and ask them for desired additional features. |
| 3. | Professional UI | Improve and make a professional React-based UI dashboard. |
| 4. | Deployment | Deploy Agora as a parathread on a public Polkadot test network and exposing a stable public RPC endpoint. |

### Milestone 2 — OCW & Automation

- **Estimated Duration:** 2 months
- **FTE:** 2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Dockerfile | Dockerize the application |
| **0b.** | Docker Compose | A Compose configuration for running the parachain and its dependencies |
| **0c.** | Docker Documentation | Document the full Docker workflow, including build, run, logs, and network setup for local and CI environments. |
| **0d.** | Docker Testing Guide |Provide a test guide for validating the Dockerized parachain, including integration and networking checks. |
| 0e. | Article | Blog post explaining the architecture and use cases. |
| 1. | OCW | Improve and make robust Off-Chain Worker (OCW) logic for automatic job execution and verification. |
| 2. | Agora Client Pallet | Build a minimal Agora Client pallet that other parachains can plug into their runtime to send XCM job requests and receive results with no additional integration work. |
| 3. | Reputation & Security | Rework the reputation and slashing logic to compound penalties for dishonest workers and increase slashing rates |
| 4. | Tests | unit tests for all modules and End-to-end integration test that simulates a full local job_commit, reveal, finalize then consensus, rewards, and slashing across multiple workers |

## Future Plans

- Mainnet deployment as a parachain.
- Expansion of job types (e.g., more complex ML inference).
- Integration with more parachains.

## Additional Information :heavy_plus_sign:


- This project was 1st place in "Build Resilient Apps with Polkadot Cloud" Hackathon.
https://devpost.com/software/agora-bkfo60
