# Offline Election Tool

- **Team Name:** Starks
- **Payment Details:**
  - **Payment**: 0x4c2f3896E60B79ab3821cad311bD4c30Ae0a4693 (USDC) . 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1


## Project Overview :page_facing_up:

This application is in response to the open RFP [offline-election-tool](https://grants.web3.foundation/docs/RFPs/offline_election_tool)

### Overview

- Goal: Predict on-chain validator elections with accuracy and flexibility.
- This project is a simulation tool designed to accurately replicate the outcome of the on-chain validator election algorithm used by staking-based blockchain networks. It allows users to predict which validators will be elected, the stake distribution, and nomination assignments at any given point—whether during an actual election. The tool supports configurable parameters (such as custom voters and candidates), includes support for all election algorithms, and is accessible via both CLI and a RESTful API.
- The tool is directly relevant to the Nominated Proof-of-Stake (NPoS) system used by Polkadot, Kusama, and other Substrate-based networks. It mimics the behavior of Substrate’s election algorithms (e.g., Phragmén-based elections), leveraging staking data and governance parameters to simulate active set selection. It serves as a companion tool for networks built with Substrate to test, audit, and optimize validator nomination strategies off-chain.
- Our team is passionate about improving the transparency, accessibility, and decentralization of staking ecosystems. As participants in decentralized validator programs, we found existing tools outdated and lacking in flexibility. By creating this robust, customizable election simulator, we aim to empower nominators, validators, and researchers to better understand validator elections and make data-driven decisions—ultimately improving decentralization in the validator selection process.

### Project Details
#### UI Mockups / Designs
As this tool is primarily CLI- and API-based, no user interface mockups are required at this stage. However, the API will be designed to support potential integration with front-end dashboards or explorers in the future.
- The predicted active validator set.

#### Data Models / API Specifications
#### Core Input Parameters (JSON Schema format):

```json
{
  "voters": [
    {
      "account_id": "AccountId",
      "stake": "u128",
      "targets": ["ValidatorId"]
    }
  ],
  "candidates": [
    {
      "account_id": "ValidatorId",
      "bond": "u128"
    }
  ],
  "active_set_size": 100,
  "election_algorithm": "sequential-phragmen | phragmen | approval-voting",
  "snapshot_block": "optional<u32>"
}
```

#### Core API Endpoints (REST):

- POST /simulate: Runs the election with custom parameters.
- GET /defaults: Retrieves live chain snapshot (voters, candidates, stake) from current or historical block.
- POST /validate-results: Compares tool output with on-chain election results at a given block height.

#### API Output Example:

```json
{
  "active_validators": [
    {
      "account_id": "ValidatorId",
      "total_stake": "u128",
      "nominators": ["AccountId"]
    }
  ]
}
```

#### Technology Stack

- Rust – Core election logic will be ported or reused from Substrate's implementation to ensure accuracy.
- Node.js – Wrapper logic for scripting and CLI interaction.
- Rocket (Rust) – REST API server for running simulations via HTTP.
- Subxt / Polkadot.js API – To fetch live or historical staking data from a Substrate-based chain.
- Docker – For containerization and easy deployment.

#### Core Component Overview

##### Election Engine
Implements core logic for simulating elections using Substrate's election algorithms (especially Phragmén and Sequential Phragmén).

##### Data Loader
Fetches on-chain staking data (candidates, nominators, bonded amounts) using RPC or snapshot files.

##### Simulation Interface (CLI + API)
- CLI for local usage and automation.
- API for remote usage or frontend integration.

##### Validation Module
Compares predicted results with on-chain results for verification and debugging.

#### Prior Work / PoC

- We already have access to an earlier version of a validator election script. While it demonstrates the feasibility of simulating elections, it is:
- Tightly coupled with a single chain’s staking logic.
- Inaccurate for newer election algorithms or edge cases (e.g., non-existent accounts).
- Lacking API support and customization flexibility.

#### Additional information

- **Relation to polkadot-staking-miner (https://github.com/paritytech/polkadot-staking-miner/issues/1050):**  
  Our planned approach largely coincides with the discussion in the referenced issue.  
  We intend to base the solution on `polkadot-staking-miner`, extending it with offline election prediction capability and exposing parameters for customization.

- **Election algorithm if unspecified:**  
  If the user does not specify an algorithm, the tool will default to the election algorithm currently used by the Polkadot chain (Phragmen).  
  This ensures consistency with on-chain elections.

- **Handling missing snapshot block in Off Phase:**  
  If no snapshot block is specified and the tool is executed during the Off Phase, it will fallback to the latest available chain state to generate results.  
  This allows predictions to remain useful without requiring manual input.

- **Compatibility after Asset Hub migrations / staking-async:**  
  We are aware that the new staking miner only works with staking-async after the Asset Hub migrations.  
  Our tool is designed with this in mind to ensure smooth operation post-migration.

- **Output requirements (nominator allocation + stake):**  
  The output will include:  
  1. List of nominators allocated to each validator  
  2. Specific stake amounts allocated.  
  We consider this essential for the usefulness of the tool.

This project will build upon that foundation, reusing logic where valid, but heavily refactoring and extending it to meet modern use cases.

### Ecosystem Fit

- A simulation tool that predicts validator elections in Substrate-based networks like Polkadot and Kusama.
- Targets parachain teams, nominators, validator operators, staking dashboards, and researchers.
- Solves the need for accurate, customizable off-chain validator election prediction.
- Identified through community feedback, Kusama DNP requirements, GitHub issues, and forum discussions.
- Existing tools like the old Web3 script are outdated; dashboards lack simulation features.Our tool is distinct by offering full API/CLI access, support for all election algorithms, and hypothetical input handling.

## Team :busts_in_silhouette:

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- **Team lead:** [Shubham Gupta](https://github.com/s-h-ubham)  
- **Team member:** [Ipsa Gupta](https://github.com/Ipsa11?tab=repositories)  
- **Team member:** [Arunjot Singh](https://github.com/arunjot12?tab=repositories) 

### Contact

- **Contact Name:** Karan Chopra
- **Contact Email:** karan.chopra@antiersolutions.com

### Legal Structure

- **Registered Address:** C-208, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160059
- **Registered Legal Entity:** AntLabs India Pvt. Ltd.

### Team's experience

We are a skilled and dedicated group of professionals who possess extensive experience working with the Substrate ecosystem. Our team members have successfully completed numerous projects related to Substrate development, including building custom blockchains, implementing governance mechanisms, and designing smart contract for intuitive dApp functionalites. We understand the importance of technical partnerships in fostering innovation and growth within the blockchain industry. We are confident that our knowledge of the Substrate framework and its capabilities will enable us to contribute significantly to the development and expansion of Polka's ecosystem.

Stack exchange profiles of some of our team members:
1. https://substrate.stackexchange.com/users/3414/ipsa-gupta
2. https://substrate.stackexchange.com/users/354/shubham-gupta
3. https://substrate.stackexchange.com/users/2372/arunjot-singh

## Development Status :open_book:

[offline-election-tool](https://grants.web3.foundation/docs/RFPs/offline_election_tool)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 weeks
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 5000 USD

### Milestone 1 Core Election Simulation Tool

- **Estimated duration:** 2 weeks
- **FTE:**  1
- **Costs:** 2,500 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. |
| **0b.** | Documentation |Inline code documentation and a tutorial explaining how to simulate an election with default or custom inputs via CLI. |
| **0c.** | Testing and Testing Guide | Unit tests for the election logic; guide on how to run and interpret the results. |
| **0d.** | Docker | Dockerfile to build and run the CLI simulator locally. |
| 1. | Core Election Engine	 | Updated version of the existing election script with support for accurate simulation of on-chain validator election logic using Phragmén algorithm. |
| 2. | Custom Inputs Support | Allows passing custom active set size, voters, candidates, and their stakes via JSON input. |


### Milestone 2 Support for Hypothetical/Off-Chain Accounts

- **Estimated Duration:** 1 week
- **FTE:**  1
- **Costs:** 1,250 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. |
| **0b.** | Documentation |Examples and guide on how to include hypothetical or non-existent accounts in the simulation. |
| **0c.** | Testing and Testing Guide | Unit tests covering edge cases with invalid or off-chain accounts. |
| **0d.** | Docker | Docker image updated to support all new input types. |
| 1. | Hypothetical Account Simulation	 | Extend simulation engine to support voters or candidates that do not exist on-chain or lack bonded amounts. |

### Milestone 3 API Interface

- **Estimated Duration:** 1 week
- **FTE:**  1
- **Costs:** 1,250 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. |
| **0b.** | Documentation |API documentation and usage examples using tools like Postman or curl. |
| **0c.** | Testing and Testing Guide | Integration tests for all API endpoints and a guide to test via API calls. |
| **0d.** | Docker | Dockerfile to run the RESTful API server exposing the simulation endpoints. |
| **0e.** | Article | A blog post or technical article describing how the election simulation works, how to use the tool via API, and its applications for nominators and validator programs. |
| 1. | API functionality		 | Implement API functionality to set parameters and expose results. |


...


## Future Plans

We intend to maintain and enhance the Offline Election Tool through ongoing contributions from our core team, and potentially through future grants or ecosystem support from stakeholders who benefit from accurate validator election simulations, such as staking providers and parachain teams. In the short term, we will open-source the tool, provide comprehensive documentation, and promote it within the Polkadot and Kusama staking communities to gather early feedback and improve usability. Long-term, our goal is to make the tool a reliable reference for off-chain validator election predictions, keeping it aligned with ongoing changes in election logic and expanding its utility for ecosystem participants like governance platforms, dashboards, and staking automation tools.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** A friend recommended
