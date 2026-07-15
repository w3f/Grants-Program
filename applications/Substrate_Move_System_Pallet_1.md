# Substrate Move System Pallet (part 1)

- **Team Name:** Eiger
- **Payment Address:** Fiat 14.04.2023, 16:50 UTC+3
- **Level:** 3

## Project Overview ****📄****

This application is a response to the **[Move Smart Contract Pallet RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/move_smart_contract_pallet.md).**

### Overview

Some terminology first: 

 - **Substrate Move System Pallet** - A Substrate system pallet that can be used as a building block for substrate-based chains, it exposes interfaces to interact with the Move virtual machine.

 - **Substrate Move** - A Move language fork that is Substrate compatible.

Objectives:

- The goal is to provide a Substrate system pallet that allows to deploy and interact with Smart Contracts written in the Move language, by providing a Move Virtual Machine (MoveVM) as a pallet.
- We plan on exploring a fork of the Move language, so it’s adjusted to work with the Substrate ecosystem, as well as developing a Substrate system pallet that allows the execution of Move smart contracts.
- The project directly improves the growth potential of the Substrate based ecosystem by providing support for one of the most modern smart contract programming languages and VM types out there - Move.
- We are interested in creating this project because we are firm believers in the modular vision of web3, and only by collaborative efforts on improving and unifying the technology between different chains and the languages, will we get better products as an outcome.

**Goal** - Level up the growth possibilities of the Substrate ecosystem by providing a way to develop and execute Move smart contracts on Substrate.

This is the first phase of a 3-phase development program:

1. **In-Depth Exploration and Assessment of MoveVM and Substrate Integration**
2. MoveVM compatibility work and Subtrate Pallet development
3. Finalising the Substrate-Compatible MoveVM

### Project Details

**Prior work**

We are basing the core architecture and many of the design decisions on the [Pontem networks developed system pallet for Move VM](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm). They had maintained [their own fork of the Diems Move language](https://github.com/pontem-network/sp-move-vm), which was used as the base execution layer for their version. Both of these repositories have not been maintained for a very long time already.

♻️ We aren't seeking to maintain any of the existing codebase; rather, we aim for a full revival through a new greenfield project. Our rationale for this stems from the substantial advancements made in the Rust, Substrate, and Move ecosystems since Pontem’s latest commits from over a year ago. We believe that handling potential code rot due to the passage of time might be more labor-intensive than starting afresh and drawing upon existing projects for more current guidelines.

**Documentation of core components, architecture**

1. **Substrate Move:**
    
    The first part of the project will be a MoveVM fork, as some major changes will need to be made to the codebase for it to be substrate compatible. For example:
    
    - `no_std` compatibility: Making it lightweight and suitable for use in Substrate runtimes.
    - `wasm32` target compatibility: Adapting all the VM’s different components to work efficiently and securely on the wasm32 target architecture.
    
    We plan on creating and maintaining the fork in a manner that would allow us and the community to easily follow and track changes from the upstream, thus making the maintenance and change tracking to be much simpler.
    
    At the time of writing this application, we suspect that this will be needed because this is what also Pontem had to do to support it in their version. This will be further researched and assessed during the first milestone.
    
2. **Move VM system pallet:**
    
    The second part of the project will be a Substrate virtual machine pallet in Substrate. This is a modular component that is needed to integrate a specific new VM into a Substrate runtime. It will serve as a bridge between the runtime and the Move VM, managing resources and translating data or actions between the two environments.
    

**API specifications**

As a minimum, we plan on providing all of the RPC calls that the Pontem crate did. As the team progresses with the implementation, we might add or remove RPC calls as we best see fit.

Move language has a concept of “gas” for executing contracts, whereas Polkadot uses “Weights”. Each Move transaction invocation requires providing a gas limit for execution, and it’s necessary to be able to transform the values between weight and gas:

- `mvm_gasToWeight`
- `mvm_weightToGas`

Estimating gas for different operations:

- `mvm_estimateGasPublish`
- `mvm_estimateGasExecute`

Working with the primitives of the Move language:

- `mvm_getResource`
- `mvm_getModuleABI`
- `mvm_getModule`

**Tech stack**

We plan on using Rust for developing the system pallets and using existing Move language smart contracts for end-to-end testing of the whole workflow.

**Notes**

Because the Move language requires a fork to work with Substrate chains, and modifications to the address size, there might be incompatibilities with deploying existing Move Smart Contracts from other chains that make use of the address properties size, as well as the compiled ABI and bytecode for those contracts might be invalid. To deploy on our MoveVM system pallet, the forked toolchain must be used to re-compile all smart contracts. The address size of Move language is configurable via a feature switch with 32-bits being one of the options.

### Ecosystem Fit

Move is a smart contract programming language that emphasizes access control and scarcity, offering some unique advantages over other popular VMs in blockchain ecosystems.

The importance of bringing the MoveVM to Polkadot was recognized over two years ago when [Pontem Network](https://pontem.network/) started working on a [Move virtual machine pallet](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm) to execute Move smart contracts on Substrate-based chains. Although they discontinued the project and haven't updated the codebase for over a year, the W3F still keeps this RFP, which serves as evidence that porting the MoveVM is crucial for the future of the Polkadot network.

We concur with this perspective and have actually been actively researching the MoveVM - exactly with a similar idea of helping port it over to other chains.

## Team **👥**

### Team members

- **Roberts Ivanovs** ([Github](https://github.com/roberts-ivanovs), [Linkedin](https://www.linkedin.com/in/roberts-ivanovs-3b24b6159/)) is a Rust Software Engineer at Eiger. He has extensive experience using Rust for performance-sensitive backend work, the IoT industry, web development, and Solidity/dApp development.
- **Tomek Piotrowski** ([Github](https://github.com/tomekpiotrowski), [Linkedin](https://www.linkedin.com/in/tomasz-piotrowski-17466b4/)) Software Engineer at Eiger, specializing in Rust-based applications. With a strong background in software development, he has spent recent years focusing on the Rust programming language. At Eiger, Tomasz actively contributes to the advancement of Rust-based blockchains and their ecosystems.

### Contact

- **Contact Name:** Daren Tuzi
- **Contact Email:** [daren@eiger.co](mailto:daren@eiger.co) (Founder & CEO of Eiger)
- **Website:** [Eiger.co](https://www.eiger.co/)

### Legal Structure

- **Registered Address:** Linnankatu 3 A 24, 20100 Turku, Finland
- **Registered Legal Entity:** Eiger Oy****

### Team's experience

Web3 promises to upgrade the very foundations of our society – from money, finance, and governance to media, gaming, and science. To deliver on that promise, decentralised technologies are to be integrated into the everyday experiences of billions of people. For engineering, this is a mountain of a challenge.

Eiger was founded to develop infrastructure for web3 mass adoption. We help technology companies improve and integrate the core technologies of web3 to meet the climbing demands for scaling and performance.

We currently employ 25+ senior web3 engineers across the globe and work with some of the most ambitious organisations in the industry, including Forte, Aleo, and XRP Labs, to name a few.

### Team Code Repos

As mentioned in the Teams section, Eiger already has extensive experience developing large infrastructural projects. Some chosen examples:

- The SnarkOS for Aleo, the privacy-focused smart contract L1 platform going into production this summer. https://github.com/AleoHQ/snarkOS
- OrbitDB is a distributed, p2p, serverless database. https://github.com/orbitdb/orbit-db
- The rust implementation of IPFS, now archived. https://github.com/rs-ipfs/rust-ipfs
- The main implementation of Interledger in Rust, which we developed and maintained. https://github.com/interledger/interledger-rs
- Ziggurat - A Network protocol testing framework for ZCash, XRP, and Algorand. Notably, critical network vulnerabilities were found and reported to the core teams. https://github.com/runziggurat

## Development Status **📖**

- This application is a direct response to [this RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/move_smart_contract_pallet.md)
- [Move language Github](https://github.com/move-language/move/tree/main/language)
- [Pontem MoveVM fork](https://github.com/pontem-network/sp-move-vm)
- [Pontem MoveVM system pallet](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm)

We have not yet started our own development, we are still in the research phase.

## Development Roadmap **🔩**

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 48 000 USD
- **Starting Date:** 10/07/23

### **In-Depth Exploration and Assessment of MoveVM and Substrate Integration**

**Goal**: Research Pontem Move VM solution, Move language and its ecosystem, and document all findings. Prepare a repository for developing the Substrate Move system pallet. 

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 and MIT |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | Content: article that explains all of the research and findings done in the research phase, and how it shapes the project in the future. The research would include: <ul><li>analysis of the Pontem Move fork,</li><li>analysis of the Pontem MoveVM system pallet, evaluating its architecture and design decisions,</li><li>analysis of the current Move language restrictions, ABI and understanding if forking the language is still necessary,</li><li>analysis of the potential effects of forking the language and the toolchain if it is deemed necessary.</li></ul>Medium: A markdown design decision document in the repository. |
| 1. | System Pallet: Substrate Move | We will create a Substrate system pallet that will provide the RPC calls as the initial interfaces for interacting with the Move VM. The Move VM port itself will not be implemented, all of the methods will be empty stubs.<br /> Solid code practices will be in place: CI/CD, tests, documentation, linting, and publication of the library to http://crates.io. |
| 2. | Rust crate: Substrate Move | Forking the Move VM if deemed necessary. The alterations would include everything to create the virtual machine Substrate-compatible. |
| 3. | Rust crate: Substrate Move documentation | Documentation of the alteration made for the MoveVM to be Substrate-compatible. Also, the whole process of how it was ported will be described, either in form of markdown documentation or detailed commenting on GitHub issues and PRs. |


## Future Plans

This is the first phase of a 3 steps development plan:

1. **In-Depth Exploration and Assessment of MoveVM and Substrate Integration**
2. MoveVM compatibility work and Subtrate Pallet development
3. Finalising the Substrate-Compatible MoveVM

The **next** step will be to submit a grant proposal to continue this work - creating the first iteration of a pallet capable of receiving, storing and executing Move smart contracts.

We hope that upon the completion of all phases of creating the Substrate Move System Pallet , it will open doors for further collaboration and community input on the project. We strive to have the codebase well documented so that others might join in and contribute.

While there are no long-term plans set in stone for the usage of this pallet, we have had incredibly exciting discussions about creating a parachain, possibly a [common good parachain](https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/) (system parachain), that utilizes this MoveVM implementation and would run MoveVM contracts. As we near the completion of this initial development, we will be discussing these future plans more in-depth.

## Additional Information **➕**

**How did you hear about the Grants Program?**

We learned about it when looking at open RFPs by the web3 foundation on their website.

We wanted to get back up to date on what is happening in the Polkadot ecosystem, and working on grants, specifically RFPs, has been a great way to do so.

Looking to apply to other RFPs currently open as well. Stay tuned!
