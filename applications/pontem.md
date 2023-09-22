# Pontem Network (VM).

- **Team Name:** Dfinance (Wings Stiftung).
- **Payment Address:** 32AAAxmKJ9XxCsGSwt11oAuovCUHbgsgfY.

## Project Overview

### Overview

Pontem Network aims to bring the Move VM and Move language, and ecosystem around it to Polkadot.

The Move language and the Move Virtual Machine, both developed by Facebook Libra, are among the safest technologies out there that enable the creation of smart contracts. While having built-in security by design such as resource-oriented architecture and formal verification, Move VM still severely lacks toolsets and documentation.

We are going to create the Move pallet to make it possible for developers to publish their Move VM modules and execute scripts, also, we already built a rich toolset and documentation for Move language, so we will need only adopt it for Polkadot.

This is where our team has a unique experience, due to over 2 years spent working with Move and building tools around it. We have been working closely with Libra (as recognized technical adopters) as part of the Dfinance project which is utilizing the Move language and Move VM in order to run safe and usable smart contracts.

### Project Details

Implementation of Move VM pallet won't be an easy task, even taking into account our experience connecting Move VM with Cosmos SDK, achieved via integrating Move VM as GRPC service.

In the case of Polkadot WASM Runtime we can’t repeat the same approach with GRPC due to limitations of Runtime, but we can do a more elegant solution by utilizing Move VM inside Runtime. To be clear let’s see our plan step by step.

1. Move VM and language written in Rust language and can be compiled to WASM, unfortunately we can’t use crates that depend on runtime. We will create a stable working pallet by forking of Move VM/language and replace creates with ones we can use.
2. We will make Move VM outputs (writesets) compatible with Polkadot key-value storage, as during our latest research we discovered it’s not going to work “out of the box” and will require some time to build a solution. Same with address format SS58, and non VM balances.
3. We need to make gas usage of Move VM compatible with Polkadot standards. At least by using the same units like other VMs/pallets using.
4. Build a documentation around the Move pallet, adopt existing tools and docs about VM and language.

We already have rich experience in these topics because of our current Dfinance project, so far we developed:

- [Cosmos SDK Move VM](https://github.com/dfinance/dnode/tree/master/x/vm) module, brings Move VM to Cosmos SDK.
- [Documentation](https://docs.dfinance.co/move_vm) of how to write your own Move modules and scripts on Dfinance network.
- [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=damirka.move-ide) to write modules and scripts for both Libra and Dfinance network.
- [IntelliJ plugin](https://github.com/dfinance/intellij-move) for Move language.
- [Move VM](https://github.com/dfinance/dvm) as a server.
- [Toolset](https://github.com/dfinance/move-tools) for Move language: dissembler, resources viewer, language server, executor.
- [Move Book](https://github.com/dfinance/move-book) - the first book about Move.
- [DeFi contracts](https://github.com/dfinance/contracts) framework on Move language.

### Ecosystem Fit

- Developers can be interested to build their DApps on Polkadot using Move technology stack, as it’s a safe and useful language which is getting more and more adoption.
- Libra is developing and using Move, so Polkadot will have at least initial compatibility with Libra at least by allowing using the same modules in both networks.
- Flow - Crypto Kitties creators blockchain also going to utilize Move VM and language, also by creating new language on top of it - Cadence, which can be adopted to Polkadot later.

## Team

### Team members

- Oleg Gaidukov - CTO.
- Boris Povod - R&D Lead and Blockchain developer.
- Alexander Kozlovsky - Rust developer and Rust community enthusiast.
- Dmitry Yakushev - Rust developer.
- Vitaly Rudko - Dev Ops.

### Contact

- **Contact Name:** Boris Povod
- **Contact Email:** boris@dfinance.co
- https://dfinance.co

### Legal Structure

- **Registered Address:** Gubbelstasse 11, 6300 Zug, Switzerland
- **Registered Legal Entity:** Wings Stiftung

### Team’s experience

We are an experienced team, our current project is [Dfinance](https://dfinance.co/), in the past we've launched [Wings](https://wings.ai/) platform, and before that we've developed [Crypti](https://github.com/borispovod/crypti-sources) (which became Lisk).

### Team Code Repos

- [Cosmos SDK Move VM](https://github.com/dfinance/dnode/tree/master/x/vm) module, brings Move VM to Cosmos SDK.
- [VSCode plugin](https://github.com/dfinance/vscode-move-ide) repository.
- [IntelliJ plugin](https://github.com/dfinance/intellij-move) for Move language.
- [Move VM](https://github.com/dfinance/dvm) as a server.
- [Toolset](https://github.com/dfinance/move-tools) for Move language: dissembler, resources viewer, language server, executor.

Contributions to other projects (Libra & Cosmos SDK): 

- https://github.com/libra/libra/pull/4058
- https://github.com/libra/libra/pull/4053
- https://github.com/libra/libra/pull/3472
- https://github.com/libra/libra/pull/6116
- https://github.com/cosmos/cosmos-sdk/pull/6053

### Team LinkedIn Profiles

- https://www.linkedin.com/in/ogaidukov/
- https://www.linkedin.com/in/boris-povod-361a1b79/
- https://www.linkedin.com/in/a-koz/

## Development Roadmap

### Overview

- **Total Estimated Duration:** 4 months.
- **Total Effort:** 357 days.
- **Total Costs:** 1.4658 BTC.

### Milestone 1 - Pre-Alpha version of Move pallet

- **Estimated Duration:** 1.5 month
- Working days **x** ppl. **:** 28 **x** 4
- Effort: 112 days
- **Costs:** 0.419 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0. | Crates list       | Building a list of crates we have to replace with analogues could work in runtime or make our own versions which can work in runtime also. |
| 1. | Crates developing | During our research we can use sp-std for part of cases, but unfortunately we will have to fork it and add additional functional or create our analogue crates contains missed functional. |
| 2. | Crates replace    | Adopt Move VM for runtime using developed crates. | 
| 3. | Move Pallet       | Create a Polkadot pallet with Move VM inside. Alpha version, without processing of WriteSets. |
| 4. | Addresses support | Add support of SS58 addresses to Move VM. |
| 5. | Compiler          | Adopt compiler to compile modules/scripts for Move VM inside pallet. |
| 6. | Unit-tests        | Basic unit-tests coverage, at least 30%. |
| 7. | Docker            | Docker-compose to quickly launch standalone version of Move VM. | 
| 8. | Documentation     | Initial documentation how to run Move VM inside Pallet/standalone, execute scripts and publish modules. |


### Milestone 2 — Alpha version of Move pallet

- **Estimated Duration:** 1.5 month
- Working days **x** ppl. **:** 28 **x** 5
- Effort: 140 days
- **Costs:** 0.5508 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0. | WriteSets processing      | Process WriteSets from MoveVM to Polka storage. Read/Write operations, Del operations. |
| 1. | Events processing         | Process Move events format to Polkadot one and publish them to block. | 
| 2. | Publish Transaction       | Create a transaction type to support Move module publishing. |
| 3. | Execute Arguments Parsing | To enable execute script transactions support we need to parse script arguments. |
| 4. | Standard Library          | Move Standard Library Module adoption for Polkadot. |
| 5. | Execute Transaction       | Create a transaction type to execute Move scripts. |
| 6. | Unit-tests                | Cover 60% of the pallet functional with unit tests. | 
| 7. | Resource viewer           | Resource viewer to view Move resources from Substrate node storage. |

### Milestone 3 — Beta version & Ecosystem

- **Estimated Duration:** 1 month
- Working days **x** ppl. **:** 21 **x** 5
- Effort: 105 days
- **Costs:** 0.496 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0. | Gas compatibility             | Change VM gas usage units and math to make it compatible with Polkadot. |
| 1. | Non-VM balances compatibility | VM supports native coins inside smart contracts, example: DOT. |
| 2. | REST API                      | REST API to compile, publish/execute modules and scripts. | 
| 3. | RPC                           | RPC to publish/execute modules and scripts. |
| 4. | Documentation                 | Supplement documentation with all features we provided: txs, compilers, smart contracts examples.   |
| 5. | Deployment of prod env        | Spin up instances on the top of DigitalOcean/Kubernetes cluster, set an auto deploy etc. |
| 6. | disassembler adoption         | Adopt current disassembler for Substrate node. |
| 7. | Unit-tests                    | Cover 85% of pallet functional with unit tests. | 

## Future Plans

Wings Stiftung plans to continue supporting Move ecosystem. We want to build a bridge between Polkadot and Libra as Parachain, and launch our Parachain with Move VM pallet inside. Also, we going to proceed with further development of toolset (Move debugger, unit-testing framework, etc.) and extend our Wallet with Polkadot-specific features.

## Additional Information

Wings Stiftung will be as well supporting financially this project. We are going to apply to another Grant for the implementation of the [Pontem network](https://pontem.network).
