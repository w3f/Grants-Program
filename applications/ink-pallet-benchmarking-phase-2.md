# ink!/pallet/solidity performance benchmarking phase 2

- **Team Name:** Talentica Software
- **Payment Address:** 0x8bd54ec34A35f3A2f668A33d9578b5C3A6b730dE
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :
Proposal for Milestone 2 in the RFP titled [implementation-benchmarking](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/implementation-benchmarking.md).

### Overview

There are multiple ways to implement the logic in substrate i.e using pallets or ink smart contracts, or even writing solidity code and compiling it to WASM with the help of a solang compiler. We have to benchmark the performance metrics of the logic implemented using each of the above methods. We have already benchmarked the storage performance(basic data types) of each of the implementations as part of Milestone 1 and 2. Now, we will benchmark CPU-intensive logic, events emission and cross-contract calls across all the four implementations. We hope this will help new developers in deciding the best approach to implement the logic.

### Project Details

We will employ the approach already taken to deliver Milestones 1 and 2 to benchmark CPU intensive task on all the four implementation strategies and also cross-contract calls within an implementation, wherever possible. We will use following tools to do so:
- [Substrate Runtime Benchmarking Framework](https://github.com/paritytech/substrate/tree/master/frame/benchmarking)

### Ecosystem Fit

This will help new developers to decide the best tool to implement the logic.

## Team :busts_in_silhouette:

### Team members
- Debasish Ray Chawdhuri - Blockchain and Cryptography Researcher
- Pankaj Mendki -Blockchain expert
- Nikhil Desai - Blockchain Developer https://github.com/Nikhil-Desai-Talentica
- Amit Singh - Blockchain Developer https://github.com/iamit-singh

### Contact

- **Contact Name:** Nikhil Desai
- **Contact Email:** Nikhil.Desai@talentica.com
- **Website:** https://www.talentica.com/

### Legal Structure

- **Registered Address:** B-7/8, Anmol Pride, Baner Road, Baner, Pune, Maharashtra 411045, India
- **Registered Legal Entity:** Talentica Software India Pvt. Ltd.

### Team's experience

We have already worked on [implementation-benchmarking](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/implementation-benchmarking.md) and delivered Milestones 1 and 2.

### Team Code Repos

- [implementation-benchmarking](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ink-pallet-benchmarking-milestone_2.md)
- [provenance-usecase](https://github.com/TalenticaSoftware/provenance-usecase)
- [simpleblockchain](https://github.com/Talentica/simpleblockchain)

- [Nikhil-Desai-Talentica](https://github.com/Nikhil-Desai-Talentica)

### Team LinkedIn Profiles (if available)

- Debasish Ray Chawdhuri - https://www.linkedin.com/in/debasish-ray-chawdhuri-4b444316/
- Pankaj Mendki - https://www.linkedin.com/in/pankaj-mendki-8576363/
- Nikhil Desai - https://www.linkedin.com/in/nikhil-desai-1209a38b/
- Amit Singh - https://www.linkedin.com/in/amit-singh-3637a898/

## Development Status :

We have come up with a high-level implementation plan and will start implementing it soon.

## Development Roadmap :nut_and_bolt:

| Number | Objective | Deliverable | Time Estimate |
| -----: | ----------- | ------------- | ----------- |
| 1. |  | Milestone 3, Deliverable 1 | 2 days |
| 2. |  | Milestone 3, Deliverable 2 | 2 days |
| 3. |  | Milestone 3, Deliverable 3 | 1 day |
| 4. |  | Milestone 3, Deliverable 4 | 2 days |
| 5. |  | Milestone 3, Deliverable 5 | 3 days |
| 6. |  | Milestone 3, Deliverable 6 | 3 day |
| 7. |  | Milestone 3, Deliverable 7 | 3 days |
| 8. |  | Milestone 3, Deliverable 8 | 3 days |
| 9. |  | Milestone 3, Deliverable 9  | 1 days |
| 10. |  | Milestone 3, Deliverable 10  | 1 days |
| 11. |  | Milestone 3, Deliverable 11  | 1 days |
| 12. |  | Milestone 3, Deliverable 12  | 1 days |
| 13. |  | Milestone 3, Deliverable 0b, 0e | 1 day |

### Overview

- **Total Estimated Duration:** 5 Weeks
- **Full-Time Equivalent (FTE):**  1 
- **Total Costs:** 6,000 DAI

### Milestone 3 - Compute intensive function and cross-contract call benchmarking

- **Estimated duration:** 5 Weeks
- **FTE:**  1
- **Costs:** 6,000 DAI

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and and an **article** explaining how to use the tool to benchmark custom compute intensive functions and cross-contract calls along with a **live demo** if possible. |
| **0c.** | Testing and Testing Guide | We are building atop of the benchmarking framework that's part of the substrate-core. Some tests may be included when it comes to the functions being tested. |
| **0d.** | Docker | Not Applicable. |
| 0e. | Article | We will publish an **article** that explains how each implementation technique performs, and when to choose which. |
| 1. | Pallet CPU-intensive extrinsic | Extend a sample pallet to include a CPU-intensive extrinsic. |
| 2. | Ink! CPU-intensive function | Extend a sample Ink! contract to include a CPU-intensive function. |
| 3. | Solidity-WASM and Solidity-Native CPU-intensive function | Extend a sample Solidity contract to include a CPU-intensive function |
| 4. | CPU-intensive benchmarks | Run the benchmarks on all these implementations and compare. |
| 5. | Pallet cross-contract call | Add another pallet and invoke it from the sample pallet. |
| 6. | Ink! cross-contract call | Add another Ink! contract and invoke it from the sample Ink! contract. |
| 7. | cross-contract benchmarks | run cross-contract calls across different implementations and collect benchmarks. |
| 8. | Solidity-WASM and Solidity-Native cross-contract call | Add another Solidity contract and invoke it from the sample Solidity contract. (Note: There are [unresolved issues](https://github.com/hyperledger/solang/issues/666) questioning the feasibility of cross-contract calls in Solidity-WASM and Solidity-Native. Nevertheless, an attempt will be made to see if it's possible. |
| 9. | Pallet events | benchmark events emitted from the sample pallet. |
| 10. | Ink! events | benchmark events emitted from the sample Ink! contract. |
| 11. | Solidity-WASM and Solidity-Native events | benchmark events emitted from the Solidity-WASM and Solidity-Native contracts. |
| 12. | Benchmark events across implementations | benchmark and record events emission across implementations. |

We are planning to submit another grant application towards Milestone 4 where we discuss our approach to maintaining this work, using some software tools to automate the process wherever possible.

## Additional Information :heavy_plus_sign:

Gautam Dhameja told us about the Grants program and encouraged us to apply to the same.
We have already applied for and delivered Milestones 1 and 2 against [implementation-benchmarking](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/implementation-benchmarking.md)
