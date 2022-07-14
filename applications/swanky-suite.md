# Swanky Suite

# W3F Open Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don’t remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
> 
> See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/#pencil-process) on how to submit a proposal.
> 
- **Project Name:** Swanky Suite - The all-in-one WASM development tool
- **Team Name:** Astar Foundation / Astar Network ([https://github.com/AstarNetwork/](https://github.com/AstarNetwork/)) & Supercolony ([https://github.com/Supercolony-net](https://github.com/Supercolony-net))
* **Payment Address:** Astar Network: `0xa8A86B4B7d5a280f37523B1369D5c118923f43C5` (USDC).
* **Payment Address:** Supercolony: `0xE1B19cE32866cDE87F8f59C7C2C5f90E093A6942` (USDC).
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> ⚠️ The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.

* **Status:** Open (anyone is allowed to apply)
* **Proposer:** Astar Network & Supercolony

## Project Description :page_facing_up:

### Overview

**Swanky Suite - The all-in-one WASM development tool.**

The goal of this project is to improve DEV tooling around WASM smart contracts within the Polkadot / Kusama ecosystem and make it easier for new developers coming to this space to start their projects.

There are a lot of development environments available for EVM as it is one of the earliest mainstream smart contract environments. On the other hand, we do not have enough development tools for WASM contracts or Ink! in spite of its technical superiority. Therefore, the developer engagement for WASM contracts is fairly low, especially for Substrate with Ink! as it is a very new architecture that does not justify the usage over Solidity. That is why we were motivated to create the Hardhat equivalent for the Substrate WASM contract ecosystem, but with more features.

We want to encourage more Web3 developers to use WASM by creating Swanky. Features of Swanky under the scope of this project are the following:

- Quick start a local contract development node with instant finality (Swanky Node)
- Scaffolding a new project with various templates  for both smart contracts and front-end dApp. ie. Truffle for ink!
- Compiling projects with various languages (like Ink!, Ask-Lite, …)
- Running unit tests with the Swanky Node and any other node supporting `pallet-contracts`
- Setting up RPC tests and integration tests via npm for interacting with smart contracts on the client-side
- Deploying smart contracts to networks within the Dotsama ecosystem that support `pallet-contracts`

We see Swanky Suite as the tool that enables all existing (and future) Web3 developers to have an equal experience compared to EVM dev tooling. The ultimate benefit is to have more developers who are new to WASM contract development enter the development scene in the Polkadot / Kusama ecosystem.

### Project Details

> We expect the teams to already have a solid idea about your project’s expected final state. Therefore, we ask the teams to submit (where relevant):
> 

> Mockups/designs of any UI components
> 

> Data models / API specifications of the core functionality
> 

> An overview of the technology stack to be used
> 

> Documentation of core components, protocols, architecture, etc. to be deployed
> 

> PoC/MVP or other relevant prior work or research on the topic
> 

> What your project is *not* or will *not* provide or implement
> 
> - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

Swanky Suite aims to be an "all-in-one" tool for WASM smart contract developers within the Polkadot / Kusama ecosystem that bridge the various tools in the WASM ecosystem into a single interface.

**Architecture overview**

The Swanky Suite consists of two main parts, Swanky CLI and the Swanky Node.

Swanky CLI is a Node.js CLI app that uses the Polkadot.js API as its backend alongside many existing tools like the cargo contract CLI. There will be many features that will support the developer such as bootstrapping WASM dApps via smart contract and UI scaffolding, running integration tests, starting local nodes, account management, connecting and deploying contracts to both local and remote networks, compiling for various languages from a single CLI app, compatibility check from contract pallet to the compiler, and much more.

The Swanky Node will be a local developer node with an instant seal and instant finality like those of Ganache for EVM or Jupiter by Patract Labs. However, if the Substrate contract node is the place for Substrate WASM smart contract development, the Swanky Node aims to be the de facto development node for WASM smart contract development on parachains as it will be able to have customizable extrinsic profiles, where the developer can load a node with preconfigured pallets with chain extensions.

The envisioned architecture of Swanky CLI and Swanky Node (Local developer node)

![Project Diagram Canvas](https://user-images.githubusercontent.com/40356749/178747897-1097c160-195e-4901-8053-ac3fa9a5791f.jpg)

**Swanky CLI Supported Commands**

This is a complete list of Swanky CLI Supported commands that will be available at the end of the project (complete delivery in Milestone 4).

- `[swanky call](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-call)`
- `[swanky check](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-check)`
- `[swanky compile](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-compile)`
- `[swanky deploy](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-deploy)`
- `[swanky help [COMMAND]](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-help-command)`
- `[swanky init NAME](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-init-name)`
- `[swanky node start](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-node-start)`
- `[swanky version](https://www.npmjs.com/package/@astar-network/swanky-cli#swanky-version)`
- `swanky account`
- `swanky console`

**`swanky init`**

Generate a new smart contract environment. 

Ink! language will be supported right from the start. Ask! language will be supported as soon as it becomes ready for usage.   

```bash
USAGE
  $ swanky init [NAME] [--language ink|ask] [--template blank|flipper|psp22] [--node
    swanky|substrate-contracts-node]

ARGUMENTS
  NAME  directory name of new project

FLAGS
  --language=<option>  <options: ink|ask>
  --node=<option>      <options: swanky|substrate-contracts-node>
  --template=<option>  <options: blank|flipper|psp22>

DESCRIPTION
  Generate a new smart contract environment
```

**`swanky compile`**

Compile the smart contract(s) in your project directory.

```bash
USAGE
  $ swanky compile [-s]

FLAGS
  -s, --silent  Don't display compilation output

DESCRIPTION
  Compile the smart contract(s) in your contracts directory
```

`**swanky deploy**`

Deploy contract to any running node (local or remote) that supports running WASM smart contracts. This feature will be limited to Swanky Node on the initial release, but it will evolve to support any running node (remote or local in the future). For remote live networks, you will be able to set accounts using the `account` command.

```bash
USAGE
  $ swanky deploy -g <value> -a <value>

FLAGS
  -a, --args=<value>  (required)
  -g, --gas=<value>   (required)

DESCRIPTION
  Deploy contract to a running node
```

**`swanky call`**

Call a method on a smart contract.

```bash
USAGE
  $ swanky call -m <value> [-a <value>] [-d]

FLAGS
  -a, --args=<value>
  -d, --dry
  -m, --message=<value>  (required)

DESCRIPTION
  Call a method on a smart contract
```

**`swanky check`**

Check installed package versions and compatibility. This command will help the user to validate the compatibility between versions of languages, Rust toolchain, cargo version, and pallets used in the project.

```bash
USAGE
  $ swanky check

DESCRIPTION
  Check installed package versions and compatibility
```

**`swanky node start`**

Start a local Swanky Node.

```bash
USAGE
  $ swanky node start

DESCRIPTION
  Start a local node
```

**`swanky version`**

Displays the current version of Swanky CLI.

```bash
USAGE
  $ swanky version
```

**`swanky help [COMMAND]`**

Display help for Swanky CLI.

```bash
USAGE
  $ swanky help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for swanky.
```

**`swanky account`**

Manage the account that will be used to sign the transaction for calling and deploying contracts.

```bash
USAGE
  $ swanky account

FLAGS
  -l, --list
  -s, --select=<name>
	--default=<name>
	--remove=<name>

DESCRIPTION
  Manage Substrate keys that are loaded to Swanky CLI
```

```bash
USAGE
  $ swanky account new

FLAGS
  -n, --name=<value>  (required)
	-t, --type=<sr25519|ed25519|ecdsa> (default=sr25519)
	-l, --load=<path>
DESCRIPTION
  Creates a new account
```

`swanky console`

```bash
USAGE
  $ swanky console 

FLAGS
  -h, --help

DESCRIPTION
  Using the console subcommand will open an interactive node.js console with an injected instance of the contract and polkadot-js/api
```

 
**Swanky Node Features**

Swanky Node is a Substrate based blockchain configured to enable `pallet-contracts` (a smart contract module) and more features to help WASM smart contract development locally.

The Swanky Node will be available for developers as a binary release for anyone to use.

It will be possible to start the single-node development chain with a persistent state or in a non-persist mode, purging the development chain's state, and connecting with Polkadot-JS Portal front-end.

Key features of Swanky Node are:

- [pallet-contracts](https://github.com/paritytech/substrate/tree/master/frame/contracts) and their unstable features are enabled by default.
- `instant-seal` & `manual-seal` are used instead of `grandpa` & `aura` consensus. Blocks are authored (1) as soon as a transaction gets in the pool (2) when `engine_createBlock` RPC is called. Blocks are finalized when `engine_finalizeBlock` RPC is called.
- Optimized for local development purposes by removing unnecessary components such as P2P. More features and pallets to interact with (Contract <-> Runtime) will be added.
- Access to key features of Substrate based for dApp development is available from smart contracts by implementing chain extensions for
    - Assets pallet ([https://github.com/paritytech/substrate/tree/master/frame/assets](https://github.com/paritytech/substrate/tree/master/frame/assets))
    - Balances pallet
    - Contracts pallet ([https://github.com/paritytech/substrate/tree/master/frame/contracts](https://github.com/paritytech/substrate/tree/master/frame/contracts))
    - And other custom pallets such as the dApps Staking pallet ([https://github.com/AstarNetwork/astar-frame/tree/polkadot-v0.9.24/frame/dapps-staking](https://github.com/AstarNetwork/astar-frame/tree/polkadot-v0.9.24/frame/dapps-staking))

**Sample contract templates available for scaffolding**

Swanky Suite will be shipped with a set of project templates that can be used via the Swanky init command. 

Templates will provide the full stack scaffolding including both the smart contract code and the front-end dApp code. This will allow the developers to jump right into development. The list of project templates will grow as new features are shipped and standards evolve, but the initial set of projects at the end of this project will be:

- "Blank" - blank smart contract project scaffolding
- "Flipper" - Flipper smart contract project scaffolding with an accompanying front-end project in React
- "PSP22" - smart contract interacting with PSP22 token scaffolding with an accompanying front-end project in React

All scaffolding projects will include unit tests where applicable.

The **Swanky tool is not:**

- An Integrated development environment (IDE)
- A compiler
- A testing framework
- A development framework or library

### Ecosystem Fit

The target audience is any existing and future WASM smart contract developers.

We want to develop Swanky to enable all existing (and future) Web3 developers to have the best possible experience when developing WASM smart contracts. In order to onboard more developers to WASM environment, dev tooling should improve and be comparatively as good as if not better than EVM dev tooling.

Swanky will become the tool for everything you need when developing WASM smart contracts for Substrate - from scaffolding to deploying on live nets. Some tools already exist and Swanky will integrate them and extend/update them if needed.  
When developing a smart contract project, each of these steps is mandatory (and should be done in the same order):

- Scaffolding new project
- Local: build debug + run unit test + deploy local + run local integration tests
- Testnet: build release + run unit test + deploy on test network (with secure account management) + run integration tests in test-network
- Mainnet: build release + run unit test (optional) + deploy on live-network (with secure account management)

The mission of Swanky is to fill those needs.

Redspot and Jupiter by Patract Labs. Both projects were the main tool for WASM smart contract development within the Polkadot / Kusama ecosystem before the Patract Labs team went into hiatus. Now there is rarely any activity in the project nor proper documentation for new developers to fully utilize the tool.

The Swanky Suite was heavily inspired by the fantastic works done by Patract Labs, and we aim to continue on what they have started but with our own uniqueness to it.

Namely, Swanky CLI adds network management, comprehensive account management, and compatibility check, and is built with an expandable code structure in mind, which is different from Redspot which is mainly a complementary tool for ink WASM development rather than an all-in-one solution.

The Swanky node has similar properties to Jupiter, but the Swanky node is focused on being the testing node for parachains, through customizable pallets with chain extensions.

## Teams :busts_in_silhouette:

## Astar

### Team members

- Hoon Kim (CTO of Astar)
- Mario Vukelic (Core dev Astar), Pierre Ossun (WASM dev Astar), Sasa Pul (Rust dev), Shunsuke Watanabe (Rust dev)

### Contact

- **Contact Name:** Hoon Kim
- **Contact Email:** [hoonkim@stake.co.jp](mailto:hoonkim@stake.co.jp)
- **Website: [astar.network](http://astar.network)**

### Legal Structure

- **Registered Address:** 63 Chulia Street Singapore
- **Registered Legal Entity:** STAKE TECHNOLOGIES PTE. LTD.

### Team’s experience

Astar Foundation's core development team is the main contributor to the Astar Network (previously known as the Plasm Network, contributing to the Polkadot ecosystem since 2019). Astar Network won its Parachain auction in January 2022, and since then has been the leading smart contract hub. Astar Network supports dApps using multiple virtual machines — WASM and EVM — and offers the best technology solutions and financial incentives for Web3 developers to build on top of a secure, scalable, and interoperable blockchain.

### Team Code Repos

Astar Network Repo

- [https://github.com/AstarNetwork](https://github.com/AstarNetwork)

Team members’ repos:

- [https://github.com/hoonsubin](https://github.com/hoonsubin)
- [https://github.com/codespool](https://github.com/codespool)
- [https://github.com/Maar-io](https://github.com/Maar-io)
- [https://github.com/PierreOssun](https://github.com/PierreOssun)
- [https://github.com/shunsukew](https://github.com/shunsukew)


## Supercolony 

### Team members
- Toma Sadova (Product Owner)  
- Green Baneling (Blockchain Core Rust Engineer)  
- Sven Seven (Blockchain Developer)
- Artem Lech (Blockchain Developer)
- Bohdan Ohorodnii (Blockchain Developer)

### Contact

* **Contact Name:** Toma Sadova
* **Contact Email:** toma.sadova@supercolony.net
* **Website:** [supercolony.net](supercolony.net)

### Legal Structure

* **Registered Address:** The registered office shall be in 16192 Coastal Highway, Lewes, Delaware 19958, County of
  Sussex, USA.
* **Registered Legal Entity:** SUPERCOLONY CORP.

### Team's experience

Supercolony is a venture studio.
We are building companies and products, help Polkadot and cross-chain companies and companies who interested to be on Polkadot.
Our main focus is to grow the capitalization of portfolio companies, grow the web 3 market and of course to make blockchain usable.
We created OpenBrush: an ink! library providing standard contracts based on PSP with useful contracts and macros for building; and  PSP22- first ERC-20 standard on Polkadot Wasm ecosystem.
Supercolony is co-founding gaming metaverse platform called Asylum and we help to make them successful.
Organised the first WASM conference - Smart Contracts on Polkadot it was on 31th of May.



### Team Code Repos

Supercolony repo:
* https://github.com/Supercolony-net


Team members’ repos:

* https://github.com/sventime
* https://github.com/TtomaS7
* https://github.com/xgreenx
* https://github.com/varex83
* https://github.com/Artemka374


## Development Status :open_book:

Swanky development plans have been communicated to the ecosystem (other parachains and Parity) during the AmsterDOT Conference in April 2022.

Swanky MVP has been demoed during Astar’s presentation at WASM Conference 2022 titled “****A hitchhiker’s guide to the WASM smart contract developer ecosystem****”. ([https://wasm-conference.com/](https://wasm-conference.com/)) as well during two workshops at Polkadot Hackathon North America 2022 ([https://polkadot-na.devpost.com/details/workshops](https://polkadot-na.devpost.com/details/workshops)) titled “**Write Deploy & Interact with ink! smart-contracts**” and “**Integrate dApp Staking chain-extension on ink! smart contract**”

MVP code is still under heavy development and will be open-sourced within Milestone 1 of the project - Swanky Beta 1 release. All details of future development are available in the Development Roadmap section.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 8 months Duration of the whole project
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs:** *400,000 USD*

### Milestone 1

- **Estimated Duration:** 2 months
- **FTE Astar:** 4
- **Costs:** 100,000 USD

The first milestone will cover:

- The groundwork for Swanky CLI
- A basic implementation of the essential commands for initializing and deploying a smart contract
- This milestone will be mainly worked by the Astar team

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | All projects under the Swanky Suite will be under the MIT open source license |
| 0b. | Article/Tutorial | We will publish a Medium article and hold a recorded public tutorial/workshop that explains the benefits of Swanky and teaches the audience how to use Swanky CLI via a live demo. |
| 1. | Swanky CLI basic config file | The Swanky CLI will create a swanky.config.json which contains all the information related to the Swanky Suite (CLI and Node) and determine the current development environment for other commands to use. |
| 2. | Swanky CLI basic initialize project command (ink!) | Through Swanky CLI, developers can easily bootstrap new WASM dApp projects. Swanky CLI will provide language options. For this milestone, we will only add ink scaffolding features. |
| 3. | Swanky CLI basic compile contract command (ink!) | Developers can use Swanky CLI to compile their smart contracts into a .contract file without having to use other tools. Currently, the CLI will only support ink compilers (via cargo contract), but we will structure the project so that it is easy to expand the compiler option. |
| 4. | Swanky CLI basic account management command | Through Swanky CLI, developers can manage the signing account for deploying and making contract calls. For this milestone, we will focus on basic security (using the json account backup) for persistent accounts. |
| 5. | Swanky CLI basic contract deploy command | Developers can use Swanky CLI to deploy the compiled contract binary to the chain and get the deployed contract address. For this milestone version, we will use the cargo contract command as the base for deploying the contract. |
| 6. | Swanky CLI basic integration tests |  |

### Milestone 2

- **Estimated Duration:** 2 months
- **FTE Supercolony:** 4
- **Costs:** 100,000 USD

The second milestone will cover:

- Improve and expand on existing commands that were described in milestone 1
- Add contract type generation script for dApps
- Add network management command
- Add integration tests
- This milestone will be mainly worked by the Supercolony team

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 1. | Contract dApp type generation script | Integration of Typechain to generate typed smart contracts from the sources that can be used in deploying scripts or tests. Typechain will cover most of the stuff related to interaction with blockchain and returning readable errors, results(Typechains has its own abstraction), deploying, etc. It only requires the right initialization from the Swanky. |
| 1.1. | Implement common primitives to the generated type | Implementation of popular primitives from hardhat and ethereum. Integration of primitives from Typechain. |
| 2. | Improve Swanky compile command | Speedup compilation of contracts, support of artifacts caching, optimal storage usage, add fields and arguments into swanky.config and swanky compile to manipulate the build process. |
| 3. | Swanky CLI network management command | Since developers can use Swanky CLI to deploy their dApps to remote networks, the CLI will keep a registry of networks that supports the contract pallet and configure the deploy destination. |
| 4. | Improve Swanky network and account management | Implementation of abstraction over network management, account management for integration tests, and deploying scripts. |
| 5. | Expand the Swanky test command | Implement new commands `swanky test` that allow compiling and running tests. Add the ability to run only specific tests, compile them, run without compilation, and support different modes(release, debug). |
| 6. | Swanky integration test scripts | Add a script that allows the developers to easily create integration tests for their contract which can communicate with other contracts and the UI. |

### Milestone 3

- **Estimated Duration:** 2 months
- **FTE Astar:** 4
- **Costs:** 100,000 USD

The first milestone will cover:

- Full documentation
- Improve the core commands from the previous milestones
- Front-end scaffolding
- Contract deploy command
- This milestone will be mainly worked by the Astar team

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | Create both inline documentation of the code, documentation on GitHub, and a basic tutorial on how to use Swanky in all development phases using a sample WASM smart contract written in Ink! (using commands init, check, compile, test, run a node, deploy contract) |
| 0c. | Testing Guide | All Swanky CLI codebase will be fully covered by unit tests to ensure functionality and robustness. Documentation will contain instructions on how to run these tests. |
| 1. | Swanky CLI improved config file | The Swanky CLI will create a swanky.config.json which contains all the information related to the Swanky Suite (CLI and Node) and determine the current development environment for other commands to use. This milestone will add account storage, project environment configuration, and more. |
| 2. | Swanky CLI Initialize project command with front-end and contracts | Through Swanky CLI, developers can easily bootstrap new WASM dApp projects. This milestone will refactor the command to be modular so that it can accept additional languages (if available), and scaffold with front-end code too. |
| 3. | Swanky CLI account management command | Through Swanky CLI, developers can manage the signing account for deploying and making contract calls. This milestone will add multiple accounts, better key management, and other improvements from the previous version. |
| 4. | Swanky CLI contract deploy command | Developers can use Swanky CLI to deploy the compiled contract binary to the chain and get the deployed contract address. This milestone will refactor the deploy command to work with polkadot-js instead of wrapping the cargo contract CLI. |

### Milestone 4

- **Estimated Duration:** 2 months
- **FTE Astar:** 4
- **FTE Supercolony:** 4
- **Costs:** 100,000 USD

The third milestone will cover:

- Swanky Node developer chain
- Swanky CLI commands for interacting with the node
- This milestone will be mainly worked by the Astar team, and item 2.2 and 4 will be worked by the Supercolony team

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 1. | Swanky Node basic developer chain | The Swanky Node is a local developer node for WASM contract developers. It implements the contract pallet, and instant seal + manual seal so the block will be produced only with transactions. |
| 2. | Swanky Node chain extensions |  |
| 2.1. | dApps Staking chain extension | The Swanky Node will implement the dApps Staking chain extension, which will allow WASM contracts to interact with the dApps Staking pallet, which is available on Astar Network. |
| 2.2. | Assets pallet chain extension | The Swanky Node will implement the assets pallet chain extension, which will allow WASM contracts to interact with the Substrate Assets pallet. |
| 3. | Swanky CLI interactive console command | Implementation of abstraction over network management, account management for integration tests, and deploying scripts. |
| 4. | Swanky CLI contract version check command | Version compatibility between the contract pallet and ink is always a problem. Swanky CLI will have a list of known compatibilities and check if the user’s current configuration is compatible or not with the chain. |
| 5. | Swanky CLI contract call command | The call command will allow the developer to directly read contract states and execute contract functions. |

## Future Plans

Our plan is to continuously develop and maintain Swanky and promote it to Web3 developers at relevant offline and online events such as hackathons, workshops, and conferences with the goal of growing the WASM smart contract DEV community.

In terms of features, we will work on the following:

- Add a Relaychain-Parachain environment setup like zomebienet to the Swanky Node so developers can test XCM with other pallets through WASM smart contracts.
- Add parachain profiles so other parachain projects can contribute to their implementation of chain extensions for custom pallets which can allow WASM contracts to interact with them directly.
- Add custom plugin support to extend the functionality.

Astar is a multi-chain smart contract platform that supports multiple blockchains and virtual machines. We strongly believe that WASM is the future of smart contracts and dApps we will continue with our efforts in making WASM on Polkadot and Kusama the go-to place for Web3 developers. This can be achieved by offering the developer community the best experience possible which includes both the technology stack but also the tools such as Swanky.

Swanky CLI is designed in a modular way and open-sourced, so anyone is welcome to contribute, develop and extend the tooling.

## Additional Information :heavy_plus_sign:

Useful links about Astar:

- Web Site - [https://astar.network/](https://astar.network/)
- Documentation - [https://docs.astar.network/](https://docs.astar.network/)
- Twitter - [https://twitter.com/astarNetwork](https://twitter.com/astarNetwork)
- Medium - [https://medium.com/astar-network](https://medium.com/astar-network)
- GitHub - [https://github.com/AstarNetwork](https://github.com/AstarNetwork)


Useful links about Supercolony:
- Web Site - [https://supercolony.net/](https://supercolony.net/)
- OpenBrush - [https://openbrush.io/](https://openbrush.io/))
- Twitter - [https://twitter.com/supercolony_vs](https://twitter.com/supercolony_vs)
- Medium - [https://medium.com/supercolony](https://medium.com/supercolony)
- GitHub - [https://github.com/Supercolony-net](https://github.com/Supercolony-net)

Previous Web3 Foundation Grants awarded to the Astar team:

- Wave 2 - Second Quarter 2019 - Plasma modules for Substrate (Delivered)
- Wave 4 - Fourth Quarter 2019 - Ink! Playground (Delivered)
- Wave 5 - First Quarter 2020 - Plasm Chain + OVM Implementation and ECDSA for Polkadot JS (Pending)
- Wave 7 - Third Quarter 2020 - Hardware ECDSA for Polkadot JS (Delivered)
- Wave 8 - Fourth Quarter 2020 - ZK Rollups Pallet (Delivered)
- Wave 10 - Second Quarter 2021 - ZK Plonk Pallet  (Delivered)

Previous Web3 Foundation Grants awarded to the Supercolony team:
- OpenBrush Grant 1 
- OpenBrush Grant 2 
- OpenBrush Grant 3 
- Sol2Ink
- Typechain 
