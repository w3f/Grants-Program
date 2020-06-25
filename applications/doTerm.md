# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** doTerm
* **Proposer:** whalelephant
* **Payment Address:** 37jAzoD7tD2QQHEpYj1bxL27Tjtc8Mgo8n


## Project Description :page_facing_up: 

  * ***doTerm*** is a terminal UI to dynamically displaying Polkadot's states
  * ***doTerm*** provides commands for user to query information relevant to staking, such as validators and nominators information.
  * As a client of the substrate rust RPC client, this project will contribute to the ecosystem to develop reusable APIs for other tools 

## Team :busts_in_silhouette:

* **Members:** Belsy Y.
* **LinkedIn Profiles:** https://www.linkedin.com/in/belsy/
* **Code Repos:** https://github.com/whalelephant/dumpling
* **Website:**	None
* **Legal Structure:** Individual
* **Team's Experience:** 

  - Contributed to completed milestone for W3F General Grants Program (Entropy Labs Ltd)
  - DApp builder (Ethereum) - mystery.market & transitplan.xyz
  - Contributed to blockchain traceability software (PwC New Ventures)
  - PhD in mechanical engineering and over 4 years in software development

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 8 weeks
* **Full-time equivalent (FTE):**  1
* **Total Costs:** 1 BTC

### Milestone 1

* **Estimated Duration:** 4 weeks
* **FTE:**  1
* **Costs:** 0.5

| Number | Deliverable         | Specification | 
| ------ | ------------------- | ----------- |
| 1. | Display network stats | Provide dynamic network stats display in the terminal, use lib such as [tui.rs](https://docs.rs/tui/0.8.0/tui/) to display network stats such as block height, era, session |
| 2. | Implement `stakers` flag / subcommand | Display exposures; work with [api-client](https://github.com/scs/substrate-api-client) to support get_keys for double map through PRs |  
| 3. | Use maintained RPC client | Update dependency to [api-client](https://github.com/scs/substrate-api-client) from a forked repo; work with [api-client](https://github.com/scs/substrate-api-client) through PRs
| 4.| Implement `consts` subcommand | Query metadata constants, which may be used to give information such as sessions to next era etc; work with [api-client](https://github.com/scs/substrate-api-client) through PRs
| 5. | Documentation and tutorial | Rust-doc and tutorial to setup and use a local node with `doTerm` |  

***Milestone will be delivered with the option for building in docker***

### Milestone 2

* **Estimated Duration:** 4 weeks
* **FTE:**  1
* **Costs:** 0.5


| Number | Deliverable         | Specification | 
| ------ | ------------------- | ----------- |
| 1. | Display validator stats | Similar to network states, this will display validators, nominators, rewards stats |
| 2. | Update `validators -q` | Display relevant info like score / ledger when available |  
| 3. | Implement `slash` flag / subcommand | Provide subcommand to query slashes in eras for both nominators / validators |
| 4. | Documentation and tutorial | Rust-doc and tutorial to setup and use a local node with `doTerm` |  
| 5. | Dependency updates | Ensure this tool is updated to use the latest substrate/polkadot lib |

***Milestone will be delivered with the option for building in docker***

## Additional Information :heavy_plus_sign: 
This is an extension of the validator specific CLI tool submitted for #buildPolkadot network launch challenge - [dumpling](https://github.com/whalelephant/dumpling), which unfortunately did not provide full functionality for the judges. However, it has been tested to work with a local polkadot node. 
