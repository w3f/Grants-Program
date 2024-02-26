# Substrate Move System Pallet part 3

- **Team Name:** Eiger
- **Payment Address:** Fiat 14.04.2023, 16:50 UTC+3
- **Level:** 3

## Project Overview **📄**

This application is a response to **[Move Smart Contract Pallet RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/move_smart_contract_pallet.md).**

### Overview

> [!Tip]
> **Abbreviations** - useful information that users should know, even when skimming content.
>
> - _Substrate Move Pallet_ - Substrate pallet that can be used as a building block for substrate-based chains. It exposes interfaces to interact with the Move virtual machine.
> - _Substrate Move_ - Move VM language fork that is Substrate compatible.
> - _`smove`_ - the Move compiler and package tool for Substrate Move Pallet.
> - _Move module_ - basically Move libraries that define struct types along with functions that operate on these types.
> - _Move bundle_ - a set of Move modules.
> - _Move script_ - executable entry points similar to a `main` function in a conventional language.

- The goal is to provide a Substrate pallet that allows the deployment and interaction of Smart Contracts written in the Move language by providing a Move Virtual Machine (MoveVM) as a pallet.
- We plan on exploring a fork of the Move language so it’s adjusted to work with the Substrate ecosystem, as well as developing a Substrate pallet that allows the execution of Move smart contracts.
- The project directly improves the growth potential of the Substrate-based ecosystem by providing support for one of the most modern smart contract programming languages and VM types out there - Move.
- We are interested in creating this project because we are firm believers in the modular vision of web3, and only by collaborative efforts on improving and unifying the technology between different chains and languages will we get better products as an outcome.

**Goal** - Level up the growth possibilities of the Substrate ecosystem by providing a way to develop and execute Move smart contracts on Substrate.

This is the final phase of a 3-phase development program:

1. In-Depth Exploration and Assessment of MoveVM and Substrate Integration
2. MoveVM compatibility work and Substrate Pallet development
3. **Finalising the Substrate-Compatible MoveVM**

### Project Details

**Prior work**

In the first milestone, we explored and researched the whole solution.

In the second milestone, we implemented the basic MoveVM support into the Move pallet.

The overall solution, the core architecture, and many of the design decisions were based on the [Pontem networks developed pallet for Move VM](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm). They had maintained [their own fork of the Diems Move language](https://github.com/pontem-network/sp-move-vm), which was used as the base execution layer for their version. Both of these repositories have not been maintained for a very long time already.

**Documentation of core components and architecture**

1. **Substrate Move:**
    
    Substrate Move is the Move language fork, and it is located inside the [substrate-move](https://github.com/eigerco/substrate-move) repository.
    It contains two layers described in the following sections.
    
    **1.1. The core MoveVM**
    
    The MoveVM has been adapted with the following:
    
    - `no_std` compatibility - lightweight and suitable for use in Substrate runtimes.
    - `wasm32` target compatibility - adapting all the VM’s different components to work efficiently and securely on the `wasm32` target architecture.
    
    We plan on maintaining the fork in a manner that would allow us and the community to easily follow and track changes from the upstream, thus making the maintenance and change tracking much simpler.
    
    **1.2. The MoveVM backend layer**
    
    The backend layer is a software layer that is directly used by the Move pallet to communicate with the MoveVM internals to minimise the exposure to the language repository so that the MoveVM implementation remains pallet agnostic as much as possible. It handles and provides additional functionality like:
    
    - Storage solution fitted for the pallet,
    - Balance handling,
    - SS58 account to address conversion,
    - Gas handling.
2. **Move VM Pallet:**
    
    The main part of the project is the Move virtual machine pallet in Substrate. This modular component integrates a specific new VM into a Substrate runtime. It bridges the runtime and the Move VM, managing resources and translating data or actions between the two environments.
    

## Milestone features

### Substrate Move standard library adjustments

[The standard library](https://move-language.github.io/move/standard-library.html#standard-library) is a basic set of tools provided for Move developers. We extended it with an additional [substrate-stdlib](https://github.com/eigerco/substrate-stdlib), which contains some pallet-specific functionalities.

The standard library provided for the Move pallet might be extended with a few additional modules to allow Move developers more functionality after doing an analysis of what other Move blockchains contain in their standard library.

We will include a new extrinsic, which will be used to update the standard library. Use of this extrinsic should be rare, but it must be possible to do it when there is a necessity for the update in case of:

- discovering bugs in the library,
- adding new features to the library.

Updating the standard library is an exclusive operation reserved only for the root account.

### Pallet Move: Benchmarks and proper gas-to-weight calculation. Optimisations and new tests.

The gas mechanism in the MoveVM is used to control and charge the time for execution of the scripts and module publishing procedures. 

The gas handling introduced in the previous milestone provided just the basic support to publish any Move module and run any Move script. The values for the gas tables require finer tuning in relation to weight cost. We plan to thoroughly benchmark all extrinsics and observe how different gas table values affect the overall cost of the execution in the pallet’s MoveVM. Based on empirical analysis and heuristics, we will appropriately update the gas mechanism solution in the pallet to achieve the optimal gas-to-weight cost relationship.

The weight cost for extrinsics will be updated in a way that variably depends on the provided gas limit to ensure reasonable transaction costs depending on the MoveVM operation within each extrinsic.

### Pallet Move: Complete multi-signature support.

The multi-signature concept exists in Move language via script arguments, where each script can receive multiple signers:

```rust
script {
    fun tx_atomically_exchange_assets_via_multisig(bob: signer, alice: signer) { ... }
}
```

From the Substrate perspective, these Move signers are generated from Substrate accounts that sign the extrinsic. The previous milestone provided only support for single-signer scripts, e.g.

```rust
script {
    fun tx_do_something_with_my_assets(bob: signer, count: u128) { ... }
}
```

We will add a straightforward solution for multi-signer scripts, which will be described with additional documentation with fine-tuned examples. Adaptation and related UI improvements in pallet tools (`smove` package manager) might follow.

**API specifications**

At the moment, the following **extrinsics** are implemented:

- `execute` - Executes a Move script transaction sent by the user.
- `publish_module` - Publishes a Move module sent by the user.
- `publish_module_bundle` - Publishes a Move bundle sent by the user.

In this milestone, we will add a few more:

- `update_stdlib_bundle` - Updates a standard library bundle, e.g. Move-Stdlib or Substrate-Stdlib. For the root user only.
- `append_signature_for_mulitsig_script` - An efficient way to append a required signature to already pending multi-signature scripts.

*Note: the names and the number of the above extrinsics might change during development.*

Currently, the following **RPC methods** are fully implemented:

- `mvm_estimateGasPublishModule` - Estimates gas for publishing a module.
- `mvm_estimateGasPublishBundle` - Estimates gas for publishing a bundle.
- `mvm_estimateGasExecuteScript` - Estimates gas for executing a Move script.
- `mvm_getResource` - Gets resource from within the MoveVM storage on a chain.
- `mvm_getModuleABI` - Gets module ABI using account address.
- `mvm_getModule` - Gets module binary using account address.

These two RPC methods are provided but still don’t implement the necessary functionality since gas-weight handling is yet to be defined in this milestone:

- `mvm_gasToWeight` - Converts gas to weight.
- `mvm_weightToGas` - Converts weight to gas.

To learn more about the API specification above, please check the [design document](https://github.com/eigerco/pallet-move/blob/main/doc/final-design.md), which will be updated accordingly during the development of this milestone.

**Tech stack**

We plan on using Rust to develop the pallets and using existing Move language smart contracts for end-to-end testing of the whole workflow.

**Notes**

Because the Move language requires a fork to work with Substrate chains, and modifications to the address size, there might be incompatibilities with deploying existing Move Smart Contracts from other chains that make use of the address properties size, as well as the compiled ABI and bytecode for those contracts might be invalid. To deploy on our MoveVM pallet, the forked toolchain must be used to re-compile all smart contracts. The address size of Move language is configurable via a feature switch with 32-bits being one of the options.

### Ecosystem Fit

Move is a smart contract programming language that emphasizes access control and scarcity, offering some unique advantages over other popular VMs in blockchain ecosystems.

The importance of bringing the MoveVM to Polkadot was recognized over two years ago when [Pontem Network](https://pontem.network/) started working on a [Move virtual machine pallet](https://github.com/pontem-network/pontem/tree/master/pallets/sp-mvm) to execute Move smart contracts on Substrate-based chains. Although they discontinued the project and haven't updated the codebase for over a year, the W3F still keeps this RFP, which serves as evidence that porting the MoveVM is crucial for the future of the Polkadot network.

We concur with this perspective and have actually been actively researching the MoveVM - exactly with a similar idea of helping port it over to other chains.

## Team **👥**

### Team members

- **Karlo Mardešić** ([GitHub](https://github.com/Rqnsom), [LinkedIn](https://www.linkedin.com/in/karlo-mardesic)) is a Software Engineer at Eiger and has experience with telecommunications and low-level drivers in C/C++. These days his expertise has shifted to blockchain technology and P2P protocols, where he primarily uses Rust to tackle exciting problems.
- **Michael Eberhardt** ([GitHub](https://github.com/neutrinoks), [LinkedIn](https://www.linkedin.com/in/michael-eberhardt-bb15b0100)) is an electrical engineer with a Ph.D. and broad experience and knowledge in computer sciences, radar systems engineering, and embedded firmware. Before Eiger, he was with EoTLabs and worked on the KREST and the PEAQ parachain. Besides his professional experience in blockchain development, his overall passion is Rust. To deal with mathematical analyses and auxiliary tool development, he likes to use Python.

### Contact

- **Contact Name:** Daren Tuzi
- **Contact Email:** [daren@eiger.co](mailto:daren@eiger.co) (Founder & CEO of Eiger)
- **Website:** [Eiger.co](https://www.eiger.co/)

### Legal Structure

- **Registered Address:** Meritullinkatu 1B 00170 Helsinki FINLAND
- **Registered Legal Entity:** Eiger Oy****

### Team's experience

Web3 promises to upgrade the very foundations of our society – from money, finance, and governance to media, gaming, and science. To deliver on that promise, decentralised technologies are to be integrated into the everyday experiences of billions of people. For engineering, this is a mountain of a challenge.

Eiger was founded to develop infrastructure for web3 mass adoption. We help technology companies improve and integrate the core technologies of web3 to meet the climbing demands for scaling and performance.

We currently employ 25+ senior web3 engineers across the globe and work with some of the most ambitious organisations in the industry, including Forte, Aleo, and XRP Labs, to name a few.

### Team Code Repos

As mentioned in the Teams section, Eiger already has extensive experience developing large infrastructural projects. Some chosen examples:

- [Bringing native storage network to Polkadot](https://forum.polkadot.network/t/polkadot-native-storage/4551).
- [Ziggurat](https://github.com/runziggurat) - A Network protocol testing framework for ZCash, XRP, and Algorand. Notably, critical network vulnerabilities were found and reported to the core teams.
- [Beerus](https://github.com/eigerco/beerus) - Starknet light client.
- [Lumina](https://github.com/eigerco/lumina) - Celestia data availability light node in wasm.

## Development Status **📖**

This application is a direct response to [this RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/move_smart_contract_pallet.md) and is a follow-up to our previous grant work.

- [The Move Pallet](https://github.com/eigerco/pallet-move)
- [The MoveVM fork adapted for the Substrate runtime](https://github.com/eigerco/substrate-move)
- [“smove” package manager for the Move pallet](https://github.com/eigerco/smove)

The pallet hosting the adapted MoveVM is in a solid state at the moment. It can be used for basic Move operations:

- Publishing modules and bundles (sets of modules)
- Executing scripts with Substrate accounts

Please explore our [tutorial page](https://github.com/eigerco/pallet-move/blob/main/doc/tutorial.md) for more info and the showcase on pallet capabilities.

## Development Roadmap **🔩**

### **Overview**

- **Total Estimated Duration:** 2 month for 2 engineers
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs:** 98 000 USD

### **Milestone 1: Finalising the Substrate-Compatible Move VM**

- **Total Estimated Duration:** 2 month for 2 engineers
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs**: 98 000 USD

Goal: Maintain and update the Substrate Move Pallet as per communities' and developers’ feedback. Adapting the Move standard library, adjusting it for proper interaction with Substrate-based environments. Additional robustness and safety testing. Implementing the whole Move feature set.

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 and MIT |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Rust crate: Substrate Move standard library adjustments | Adapting the Move standard library and possibly extending it with additional modules after proper analysis. Adding a new extrinsic which will allow the root user to update the standard library if something like that is ever required. |
| 2. | Pallet Move: Benchmarks and proper gas-to-weight calculation. Optimisations and new tests. | Thoroughly testing and optimising the integration for correctness, security, efficiency, and scalability, addressing any performance or security issues raised by the community. |
| 3. | Pallet Move: Complete multi-signature support. | Allowing the pallet to execute Move scripts with multiple signers. New documentation with fine-tuned examples. Adaptation and related UI improvements in pallet tools (smove package manager) |

## Future Plans

This is the final phase of the 3-phase development program:

1. In-Depth Exploration and Assessment of MoveVM and Substrate Integration
2. MoveVM compatibility work and Substrate Pallet development
3. **Finalising the Substrate-Compatible MoveVM**

We hope that the completion of this final phase of creating the Substrate Move System Pallet will open doors for further collaboration and community input on the project. We strive to have the codebase well documented so that others might join in and contribute.

While there are no long-term plans set in stone for the usage of this pallet, we have had discussions about possibly creating a system parachain, also known as openMove, that utilizes this MoveVM implementation and would be a service owned by the network. As we near the completion of this initial development, we will be discussing these future plans more in-depth.

## Additional Information **➕**

**How did you hear about the Grants Program?**

We learned about it when looking at open RFPs by the web3 foundation on their website.

We wanted to get back up to date on what is happening in the Polkadot ecosystem, and working on grants, specifically RFPs, has been a great way to do so.

Looking to apply to other RFPs currently open as well. Stay tuned!
