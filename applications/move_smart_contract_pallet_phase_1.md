# Move Smart Contract Pallet

- **Team Name:** Talentica Software
- **Payment Address:** 0x8bd54ec34A35f3A2f668A33d9578b5C3A6b730dE
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

Proposal for the RFP titled [Move Smart Contract Pallet](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/move_smart_contract_pallet.md).

### Overview

The Move Virtual Machine (MoveVM) was initially developed by Facebook and is now maintained by the Aptos Foundation. Move is a smart contract programming language that emphasises access control and scarcity.

The RFP called for developing a Move virtual machine pallet to execute Move smart-contracts on Substrate-based chains.

### Project Details

We believe a good approach to solving a large problem is by breaking it down into smaller, well-defined and manageable ones and solving them.

In this spirit, I've named this project as Move VM Pallet Phase 1, wherein we will be evaluating the feasibility of making the Move VM crate no-std compatible.

Since the Move VM crate depends on other crates both within the Move repo as well as outside the repo, it is not scalable to look through the source files ourselves, note down the depended upon constructs from the std library and analyzing them. Hence, we will be automating it wherever we can and as much as possible.

The outcome of this Phase will be a detailed report not just on the feasibiltiy of making Move VM no-std compatible but also our take on 
an efficient approach that one could employ to figure out whether an arbitrary Rust crate can be made no-std compatible.

### Ecosystem Fit

Move is a smart contract programming language that emphasizes access control and scarcity, offering some unique advantages over other popular VMs in blockchain ecosystems.

The importance of bringing the MoveVM to Polkadot was recognized over two years ago when [Pontem Network](https://pontem.network/) started working on a [Move virtual machine pallet](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm) to execute Move smart contracts on Substrate-based chains. Although they discontinued the project and haven't updated the codebase for over a year, the W3F still keeps this RFP, which serves as evidence that porting the MoveVM is crucial for the future of the Polkadot network.

We concur with this perspective and have actually been actively researching the MoveVM - exactly with a similar idea of helping port it over to other chains.

## Team :busts_in_silhouette:

### Team members

- Pankaj Mendki -Blockchain expert
- Nikhil Desai - Blockchain Developer https://github.com/Nikhil-Desai-Talentica

### Contact

- **Contact Name:** Nikhil Desai
- **Contact Email:** Nikhil.Desai@talentica.com
- **Website:** https://www.talentica.com/

### Legal Structure

- **Registered Address:** B-7/8, Anmol Pride, Baner Road, Baner, Pune, Maharashtra 411045, India
- **Registered Legal Entity:** Talentica Software India Pvt. Ltd.

### Team's experience

We've successfully delivered on another RFP titled [ink!/pallet/solidity performance benchmarking](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/implementation-benchmarking.md)

### Team Code Repos

- [provenance-usecase](https://github.com/TalenticaSoftware/provenance-usecase)
- [simpleblockchain](https://github.com/Talentica/simpleblockchain)

### Team LinkedIn Profiles (if available)

- Pankaj Mendki - https://www.linkedin.com/in/pankaj-mendki-8576363/
- Nikhil Desai - https://www.linkedin.com/in/nikhil-desai-1209a38b/

## Development Status :open_book:

We have already developed Python scripts that can:
  1. extract all [use declarations](https://doc.rust-lang.org/reference/items/use-declarations.html) within a Rust crate,
  2. parse each of those use declarations, and return a list of constructs being imported as a result.

Next, we are considering extending these scripts to account for and analyze crate dependencies too.

## Development Roadmap :nut_and_bolt:

| Number | Objective | Deliverable | Time Estimate |
| -----: | ----------- | ------------- | ----------- |
| 1. | Analyze the Move VM crate and list out all the depended upon constructs from the std library | List of constructs from the std library that this Move VM depends upon | 2 days |
| 2. | Develop Python scripts to locally download a crate's dependencies and build a dependency graph for the same | 5 days |
| 3. | Analyze each crate in the dependency graph of Move VM crate | List of constructs from the std library that these dependenies have imported | 2 days |
| 4. | Figure out alternatives to each and every depended upon std constructs in the 'core' and 'alloc' crates | List of alternatives within the 'core' and 'alloc' crates | 10 days |
| 5. | Compile a report detailing the feasibility of porting the Move VM crate to 'no-std' | Feasibility report | 2 days |
| 6. | Share our approach and tools developed that help you in analyzing whether an arbitrary crate can be made no-std compatible | Methodology report | 2 days |

### Overview

- **Total Estimated Duration:** 3 weeks
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 6000 DAI

### Milestone 1 Example — no-std feasibility study and related tools

- **Estimated duration:** 3 weeks
- **FTE:**  1
- **Costs:** 6000 DAI

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the tools.  |
| 0e. | Article | We will publish an article that explains whether the Move VM can be made no-std compatible and our approach and the tools used in the process. |
| 1. | Python/Rust programs | we will share the scripts/tools we have used in conducting the feasibility study. |

## Future Plans

There are a total of four phases including this.
These are the objectives for each of the phases in that order,
  1. Explore the feasibility of developing a no-std variant of Move VM,
  2. Explore the feasibility of integrating the no-std variant of Move VM with Substrate,
  3. Develop a Substrate-compatible, no-std variant of Move VM, subject to feasibility,
  4. Build a FRAME pallet that embeds the above said Move VM and also chart a maintainance plan

We plan to submit an application per phase under the same RFP wherein we will detail out the objectives and deliver the same.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Gautam Dhameja told us about the Grants program and encouraged us to apply to the same.

We've successfully delivered on an RFP titled [ink!/pallet/solidity performance benchmarking](https://github.com/w3f/Grant-Milestone-Delivery/commit/27d653ac65a35feb410a1d0ee805469321ab4120)
