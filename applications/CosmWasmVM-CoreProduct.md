# CosmWasm VM - Core product

- **Team Name:** Composable Finance LTD
- **Payment Address:** (USDC) 0x7C0776FBfadcB5EeEA5eF1DC5b50d603c9a40621
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Composable Finance focuses on trustless, cross-chain communications between Polkadot and other ecosystems. 
In this case, a CosmWasm VM is a supplementary component to onboarding a new developer community and a widely adopted smart contract framework.

### Overview

The first CosmWasm VM implementation in Substrate for the Polkadot and Kusama ecosystems.

CosmWasm, short for Cosmos Webassembly, is a smart contract framework designed for use in the Cosmos ecosystem. 
Originally, the CosmWasm specification was built as a Cosmos SDK module and currently provides a plug-and-play functionality for Cosmos chains. 
CosmWasm was written in half Rust and half Golang (Go), with low-level calls in Rust and high-level dispatching logic, handled in Go. 
The actor model is implemented in Go which then calls the low-level Rust library to execute contracts effectively.

CosmWasm offers a high degree of customization as part of its design philosophy. 
A key feature of CosmWasm is that it allows for multi-chain contracts; one dApp, one contract, but multiple chains. 
As a result, CosmWasm allows users to benefit from the utility across chains instead of being forced to choose between them. 
Implementing the CosmWasm framework in Substrate will allow developers and parachains in the Polkadot and Kusama ecosystems 
to seamlessly interact with a well-tested and heavily adopted smart contract framework.

In terms of security, CosmWasm is designed to avoid the attack vectors found in Ethereum and Solidity, such as Reentrancy, and Default Visibilities. 
Its security is further reinforced by its well-developed tooling and testing mechanisms prioritized early in its conception. 
Due to these benefits, many projects have adopted CosmWasm as their smart contract framework, 
including notable examples like Juno, OKX, and Osmosis.

Overall, the CosmWasm VM proved to be the best VM for our needs as we found it to be the most portable and robust solution. 
CosmWasm was built with interoperability in mind from the very beginning, 
the goal being to build a smart contracting framework capable of operating across multiple blockchains. 
By utilizing the XCMP as a transport layer, 
CosmWasm contracts would be able to communicate with each other on different parachains without the need for any trusted parties. 
The entire Dotsama ecosystem has the potential to benefit from CosmWasm. 
This means that any team building on Dotsama will have unparalleled reach, 
and the potential to create applications that have never been seen before.


### Project Details

In its current state, Confio’s implementation of the CosmWasm VM excludes library components and consists of a single implementation targeting the Cosmos SDK. 
Our team is building a library implementation of CosmWasm that can be utilized by different host implementations to minimize the work to port Cosmwasm to different ecosystems. 
Currently, the only implementation of CosmWasm consists of half of it written in Rust and half Golang. 
Therefore, the current version was not compatible with Substrate and has never been leveraged outside of Cosmos. 
This meant we had to build a VM from scratch.

Furthermore, we have two host implementations which allows developers to integrate CosmWasm in their ecosystems in a straightforward manner. 
This ensures that our CosmWasm VM is highly portable with consistent execution semantics regardless of its host. 
As a result, this would enable developers to integrate our CosmWasm VM as a pallet, within a frontend app, or inside a CLI tool.

The official CosmWasm VM uses Wasmd for the runtime. 
It ensures that developers follow the same execution semantics, 
thus, all CosmWasm contracts will function the same irrespective of the Cosmos blockchain they are executed on. 
We utilized the Wasmd reference material to rewrite the Go portions of CosmWasm in Rust for implementation on our parachains.

![high_level_overview](https://drive.google.com/uc?id=1zcIT6UHveRrUfZunNx6otKuMCerEdX2J)

- Documentation of core components, protocols, architecture, etc. to be deployed
- https://book.cosmwasm.com/
- https://docs.cosmwasm.com/docs/1.0/
- https://cosmwasm.com/resources


- PoC/MVP or other relevant prior work or research on the topic:
- https://medium.com/cosmwasm/cosmwasm-for-ctos-f1ffa19cccb8
- https://medium.com/cosmwasm/cosmwasm-for-ctos-i-the-architecture-59a3e52d9b9c
- https://medium.com/cosmwasm

### Ecosystem Fit

CosmWasm would be able to facilitate the orchestration of cross-chain smart contracts between different parachains.

Our target audience consists of parachain builders, 
and dApps in the Dotsama ecosystem that want to leverage a WASM based smart contracting framework. 
We hope this VM enables and incentivizes developers to build in the Polkadot ecosystem as CosmWasm has been adopted by a large developer community.

We are the only team in the Substrate/Polkadot/Kusama ecosystem implementing CosmWasm for Substrate.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Blas Rodriguez
- Names of team members: Dzmitry Lahoda, Kostya Kastsevich

### Contact

- **Contact Name:** Ahmad Wehbi
- **Contact Email:** ahmad@composable.finance
- **Website:** https://www.composable.finance/

### Legal Structure

- **Registered Address:** 
  
  FortGate Offshore Investment and Legal Services LTD, 
  
  1st Floor, The Sotheby Building, Rodney Bay, Gros-Islet,

  P.O. Box 838, Castries, Saint Lucia
- **Registered Legal Entity:**  Composable Finance LTD

### Team's experience

- Blas Rodriguez: CTO at Composable Finance
- Dzmitry Lahoda: Senior staff engineer at Composable Finance
- Kostya Kastsevich: Parachain Lead at Composable Finance

### Team Code Repos

- https://github.com/ComposableFi/cosmwasm-vm

GitHub accounts of all team members:

- https://github.com/blasrodri
- https://github.com/dzmitry-lahoda
- https://github.com/kkast

### Team LinkedIn Profiles (if available)

- https://ar.linkedin.com/in/blas-rodriguez-irizar

## Development Status :open_book:
https://medium.com/supercolony/a-look-into-virtual-machines-and-smart-contract-runtimes-313cd7d494e3

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** February 2023 - September 2023
- **Full-Time Equivalent (FTE):**  1,5 FTE
- **Total Costs:** 29,700 USD

### Milestone 1 — Pallet CosmWasm VM

- **Estimated duration:** 8 weeks
- **FTE:**  1,5
- **Costs:** $21,600

|  Number | Deliverable          | Specification                                                                                                                                                                                         |
|--------:|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License              | GPLv3 / MIT /                                                                                                                                                                                         |
| **0b.** | Documentation        | We will provide both inline documentation of the code and a basic tutorial that explains how a user can test and execute transactions using cosmwasm vm pallet.                                       |
| **0c.** | Testing Guide        | Core functions will be fully covered by integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                              |
| **0d.** | Docker               | We will provide a Dockerfile that can be used to test the pallet functionality.                                                                                                                       |
| **1a.** | Development          | We will deliver the core pallet for the CosmWasm VM                                                                                                                                                   |
| **1b.** | Development          | This milestone includes the pallet supporting the following features: XCM integration, native asset support, allow calling extrinsics, verification through Fuzzing & Kani and Benchmarking.          |                                                                                                                                 |
| **1c.** | Testing              | A local network setup running a substrate chain with the pallet and a contract showing the functionality described in the milestones, so that it can be inspected and called through Polkadotjs.org.  |

### Milestone 2 — PolkadotJS Integration

- **Estimated duration:** 3 weeks
- **FTE: 1.5**
- **$8,100**


|  Number | Deliverable   | Specification                                                                                                                                                                               |
|--------:|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License       | GPLv3 / MIT                                                                                                                                                                                 |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how contracts interact with PolkadotJS.                                                            |
| **0c.** | Testing Guide | Core functions will be fully covered by integration tests to ensure functionality and robustness.                                                                                           |
| **0d.** | Docker        | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone                                                                                   |
| **0e.** | Article       | We intend to publish an article which outlines what was achieved as part of the grant, how it benefits the Substrate ecosystem and how other parachains can utilize the pallet.             |
|  **1.** | Development   | This milestone would include PolkadotJS support querying contracts’ state and interacting with CosmWam contracts                                                                            |


## Future Plans

Composable is continuing to contribute upstream, further pushing the boundaries of cryptographic research and opening up endless possibilities for the Dotama ecosystem as we work in line with our cross-chain/cross-layer interoperability goals.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

Web3 Foundation Medium and Twitter

