# W3F Grant Proposal

* **Project Name:** Signac - a monorepo plugin for developing multiple Parity ink! smart contracts
* **Team Name:** Standard Protocol
* **USDC Payment Address:**  0xd2234E506862991ADA75f930c6D79B4236e3E265
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Inspired from painter from pointillism, I named the framework signac. Seurat was reserved in NPM, so the framework name is now signac.

Here is the overview of Signac by Sotherby's [link](https://www.youtube.com/watch?v=XcOF5Ok6vrM).

In short, Signac is monorepo parity ink! framework for versatile functions regarding wasm smart contract development on Polkadot ecosystem. The framework was initially being made for implementing Standard Protocol in ink!, but I see the opportunity to make it as offical smart contract dev tool.


### Overview

* Why Monorepo?

After developing wasm contract development framework [Houston](https://github.com/terra-money/houston) in Cosmos ecosystem, I found out it will never going to work like hardhat nor truffle because **Rust smart contracts are consisted of not just files, but projects**.
  1. They are wrapped in Cargo, which means you have to move around current working directory to compile each contract. (e.g. cd .. && cd ./contract1 && cargo build --release && ..)
  2. To import from other contracts, it is not done in path, you have to specify both path and version -> More tedious jobs
  3. Multiple compiled outputs in each project folder -> harder to locate each of them on deployment

To keep an eye on whole contracts, I found out the monorepo is the optimal way to develop them to provide the most same experience as existing solidity contract dev tools.

* Why Nx?

For cloud build.
<br>
![image](https://user-images.githubusercontent.com/12888144/177867044-74491815-860b-4e0e-ab36-95d021498699.png)

Rust smart contracts take extensive amount of time just to compile a contract.
Now imagine there are more than 10 of them, and you compile all of them. 
Cloud build was the necessary feature that we needed to work with.

* Reference?

I have used nx with other rust smart contract Cosmwasm for developing a project.

[nxcw](https://github.com/digitalnativeinc/nxcw)

### Project Details

* [Standard Protocol Website](https://standard.tech/)

### Technologies
1. Rust
2. Parity ink!
3. Polkadot.js or substrate-connect

### Components

### Nxink

Nxink is a nx plugin where it creates boilerplates for parity ink! smart contracts. It also supports cloud build where developers can save local computer resources for compiling smart contracts.

### Signac

Signac is a CLI that creates an nxink-integrated project for developers to start developing with ink! contract without knowing nx.
Signac is also used to call other related tools in ink! smart contract ecosystem.

### Ecosystem Fit

:link:  **Smart Contract Development Tool**<br>


### Project Uniqueness
* The world's first framework for developing multiple parity ink! smart contract, from a former dev who developed a wasm smart contract framework.

### Target Audience
* Developers/Developers/Developers

### Problem Addressed

**1. Rust smart contract requires unique approach to have fungible developer experience**
After developing wasm contract development framework [Houston](https://github.com/terra-money/houston) in Cosmos ecosystem. I found out it will never going to work like hardhat nor truffle because **Rust smart contracts are consisted of not just files, but projects**.
  1. They are wrapped in Cargo, which means you have to move around current working directory to compile each contract. (e.g. cd .. && cd ./contract1 && cargo build --release && ..)
  2. To import from other contracts, it is not done in path, you have to specify both path and version -> More tedious jobs
  3. Multiple compiled outputs in each project folder -> harder to locate each of them on deployment

To keep an eye on whole contracts, I found out the monorepo is the optimal way to develop them to provide the most same experience as existing solidity contract dev tools.

**2. Rust compilation is heavy in local computer**
<br>
For cloud build.
<br>
![image](https://user-images.githubusercontent.com/12888144/177867044-74491815-860b-4e0e-ab36-95d021498699.png)

Rust smart contracts take extensive amount of time just to compile a contract.
Now imagine there are more than 10 of them, and you compile all of them. 
Cloud build was the necessary feature that we needed to work with.


## Team :busts_in_silhouette:

### Team members 
(Development & Engineers)

* [Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang) - Founder & Head of Development

### Contact

* **Contact Name:** Hyungsuk Kang
* **Contact Email:** hyungsuk@standard.tech
* **Website:** [https://standard.tech](https://www.standard.tech)

### Legal Structure

Digital Native Foundation. </br> 
3 Fraser Street #05-25 Duo Tower, </br> 
Singapore </br> 

### Founders' experiences

* [Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang) has experience working in blockchain industry over 3 years and is a contributor to UST restitution group. Being enlightened that with people who are saying DAOs and Governance can bring decentralzation were actually the one who tries to rule the whole system, He is now making a new standard in defi securing self-sovereignty of users' finance in web3.0 with enforceable, immutable financial contract that can keep promise without Governance's interference.

### Team Code Repos

* Standard Protocol's team Github: https://github.com/digitalnativeinc

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* [Hyungsuk Kang](https://www.github.com/hskang9) - Founder & Head of Development

### Team LinkedIn Profiles (if available)

* [Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang), Founder

## Development Status :open_book:
I have used nx with other rust smart contract Cosmwasm for developing a project.

[nxcw](https://github.com/digitalnativeinc/nxcw)

## Development Roadmap :nut_and_bolt:

### Overview

* **Full-Time Equivalent (FTE):** 1
* **Total Costs:** $30000 equivalent

### Milestone 1 — Implement Nx plugin for Parity ink!

* **Estimated duration:** 4 weeks
* **FTE:**  1
* **Costs:** $10,000 equivalent USDC

Goal - Develop Nx plugin for boilerplate in Parity ink! contract project

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | This code is the inner works of the signac, so what user needs to focus is the documnetation from signac, so there will be no documentation. |
| 0c. | Testing Guide | E2E test code will be provided to test. If not verifiable due to processing time on a command, sandbox is provided in `/tmp` folder so tester can manually operate to verify functionality. |
| 0d. | Docker | This is a javascript library that does not need docker. |
| 1. | Nx Plugin Repo | The entire code for the boilerplate plugin will be shared in a github public repository. |

### Milestone 2 — Signac CLI

* **Estimated duration:** 10 weeks
* **FTE:**  1
* **Costs:** $20,000 equivalent USDC

Goal - Make a CLI binary that can put this in a production level.
Taking one step further from [create-nx-workspace](https://github.com/nrwl/nx/blob/b8efa778f639d26e339cecb1d16e0f5a51b1d082/packages/create-nx-workspace/bin/create-nx-workspace.ts), Signac will generate nx boilerplate for parity ink! smart contract development and support other commands that are related to not only in contract development.
This includes deploying contract, running the test chain, and setting up a task to run.
The cli binary aims to cover whole feature in [ink-waterfall](https://github.com/paritytech/ink-waterfall).

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 | 
| 0b. | Documentation | Documentation of Signac will be provided in gitbook |
| 0c. | Testing Guide | Testing guide will be provided as a tutorial in gitbook documentation |
| 0d. | Docker | There will be a dockerfile included in the codebase to run local substrate node with `contract` pallet |
| 1. | Signac Repo | The entire code for the binary will be shared in a github public repository. |
| 2. | Article & Video | 	We will write an **article** that explains the work done as part of the grant, as well as release a video walk through demonstrating Signac |

## Future Plans

* Make indexer boilerplate with [SubQuery](https://linktr.ee/subquerynetwork)
* Test deployment in Canvas or Statemint common-good parachain.
* More example contract generators using XCM, Defi, NFT, etc
* Build Standard Protocol implementation in Parity ink!
* Maintain framework to adapt into multichain smart contract environment(e.g. support deploy command for deploying to other ink! contract chains)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
I applied before.
