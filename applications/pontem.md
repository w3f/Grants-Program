# Open Grant Proposal

* **Project Name:** Pontem Network (VM).
* **Team Name:** Dfinance.
* **Payment Address:** 32AAAxmKJ9XxCsGSwt11oAuovCUHbgsgfY.

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview

Pontem Network aims to bring the Move VM and Move language, and ecosystem around it to Polkadot.

The Move language and the Move Virtual Machine, both developed by Facebook Libra, are among the safest technologies out there that enable the creation of smart contracts. While having built-in security by design such as resource-oriented architecture and formal verification, Move VM still severely lacks toolsets and documentation.

We are going to create the Move pallet to make it possible for developers to publish their Move VM modules and execute scripts, also, we already built rich toolset and documentation for Move language, so we will need only adopt it for Polkadot. 

This is where our team has a unique experience, due to over 2 years spent working with Move and building tools around it. We have been working closely with Libra (as recognized technical adopters) as part of the Dfinance project which is utilizing the Move language and Move VM in order to run safe and usable smart contracts.

### Project Details 

Implementation of Move VM pallet isn't going to be obvious task, even we already have experience by connecting Move VM with Cosmos SDK, but it's done by bringing Move VM as GRPC service. 

In the case of Polkadot WASM Runtime we can't repeat the same approach with GRPC due to limitations of Runtime, but we can implement a more elegant solution by utilizing Move VM inside Runtime. To be clear let's see our plan step by step.

1. Move VM and language written in Rust language and can be compiled to WASM, unfortunately we can't use crates that depend on runtime. We will create a stable working pallet by forking of Move VM/language and replace creates with ones we can use.

2. We will make Move VM outputs (writesets) compatible with Polkadot key-value storage, as during our latest research we discovered it's not going to work "out of the box" and will require some time to build a solution. 

3. We need to make gas usage of Move VM compatible with Polkadot standards. At least by using the same units like other VMs/pallets using.

4. Build a documentation around the Move pallet, adopt existing tools and docs about VM and language. 

We already have rich experience in these topics because of our current Dfinance project, so far we developed:

- Cosmos SDK [Move VM](https://github.com/dfinance/dnode/tree/master/x/vm) module, brings Move VM to Cosmos SDK.
- [Documentation](https://docs.dfinance.co/move_vm) of how to write your own Move modules and scripts on Dfinance network.
- [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=damirka.move-ide) to write modules and scripts for both Libra and Dfinance network.
- [IntelliJ plugin](https://github.com/dfinance/intellij-move) for Move language.
- [Move VM](https://github.com/dfinance/dvm) as a server.
- [Toolset](https://github.com/dfinance/move-tools) for Move language: dissembler, resources viewer, language server, executor.
- [Move Book](https://github.com/dfinance/move-book) - the first book about Move.
- [DeFi contracts](https://github.com/dfinance/contracts) framework on Move language.

### Ecosystem Fit 

* Developers will be interested to build their DApps on Polkadot using Move technology stack, as it's a safe and useful language which is getting more and more adoption.
   
* Libra is developing and using Move, so Polkadot will have at least initial compatibility with Libra at least by allowing using the same modules in both networks.

* Flow - Crypto Kitties creators blockchain also going to utilize Move VM and language, also by creating new language on top of it - Cadence, which can be adopted to Polkadot later. 

## Team :busts_in_silhouette:

### Team members

* Oleg Gaidukov - CTO.
* Boris Povod - R&D Lead and Blockchain developer.
* Alexander Kozlovsky - Rust developer and Rust community enthusiast.
* Dmitry Yakushev - Rust developer.

### Contact
* **Contact Name:** Boris Povod
* **Contact Email:** boris@dfinance.co
* https://dfinance.co

### Legal Structure 
* **Registered Address:** Gubbelstasse 11, 6300 Zug, Switzerland.
* **Registered Legal Entity:** Wings Stiftung.

### Team's experience

We are experienced team, our current project is [Dfinance](https://dfinance.co), in past we launched [Wings](https://wings.ai) platform, also we developed [Crypti](https://github.com/borispovod/crypti-sources)(becomed Lisk).

### Team Code Repos
* Cosmos SDK [Move VM](https://github.com/dfinance/dnode/tree/master/x/vm) module, brings Move VM to Cosmos SDK.
* [VSCode plugin](https://github.com/dfinance/vscode-move-ide) repository.
* [IntelliJ plugin](https://github.com/dfinance/intellij-move) for Move language.
* [Move VM](https://github.com/dfinance/dvm) as a server.
* [Toolset](https://github.com/dfinance/move-tools) for Move language: dissembler, resources viewer, language server, executor.
  
Contributions to other projects (Libra & Cosmos SDK):
* https://github.com/libra/libra/pull/4058
* https://github.com/libra/libra/pull/4053
* https://github.com/libra/libra/pull/3472
* https://github.com/libra/libra/pull/6116
* https://github.com/cosmos/cosmos-sdk/pull/6053

### Team LinkedIn Profiles
* https://www.linkedin.com/in/ogaidukov/
* https://www.linkedin.com/in/boris-povod-361a1b79/
* https://www.linkedin.com/in/a-koz/
* https://github.com/RIg410

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
* **Full-time equivalent (FTE):**  Workload of an employed person ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) (e.g. 2 FTE)
* **Total Costs:** Amount of Payment in BTC for the whole project. The total amount of funding needs to be below $30k at the time of submission. (e.g. 0.80 BTC)

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.75 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be coded for the first milestone) |  
| 2. | Substrate module: Y | We will create a Substrate module that will... |  
| 3. | Substrate module: Z | We will create a Substrate module that will... |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |
| 6. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 

### Milestone 2 Example — Additional features
...

## Future Plans
Please include the team's long-term plans and intentions.

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?
