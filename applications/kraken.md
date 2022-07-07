# W3F Grant Proposal

* **Project Name:** Kraken - a monorepo plugin for developing multiple Parity ink! smart contracts
* **Team Name:** Standard Protocol
* **USDC Payment Address:**  (PLEASE NOTE CHANGE)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

Inspired from squid spitting ink, I first tried to come up with the name "squid", but to glorify I named the framework "Kraken". Maybe name "squid" may be more memorable due to Squid Game, but I leave the decision to reviewers. 

In short, Kraken is monorepo parity ink! framework for versatile functions regarding wasm smart contract development on Polkadot ecosystem. The framework was initially being made for implementing Standard Protocol in ink!, but I see the opportunity to make it as offical smart contract dev tool.


### Overview

* Why Monorepo?

After developing wasm contract development framework [Houston](https://github.com/terra-money/houston) in Cosmos ecosystem. I found out it will never going to work like hardhat nor truffle because **Rust smart contracts are consisted of not just files, but projects**.
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

Nxink is a nx plugin where it creates boilerplates for parity ink! smart contracts. It also supports cloud build where developers 

### Kraken

Kraken is a CLI that creates an nxink-integrated project for developers to start developing with ink! contract without knowing nx.
Kraken is also used to call other related tools in ink! smart contract ecosystem.

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

* [Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang) has experience working in blockchain industry over 3 years and is a contributor to UST restitution group. He is now making a new standard in defi securing self-sovereignty of users' finance in web3.0 with enforceable financial contract.

### Team Code Repos

* Standard Protocol's team Github: https://github.com/digitalnativeinc

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* [Hyungsuk Kang](https://www.github.com/hskang9) - Founder & Head of Development

### Team LinkedIn Profiles (if available)

* [Hyungsuk Kang](https://www.linkedin.com/in/hyungsukkang), Founder

## Development Status :open_book:

* 
## Development Roadmap :nut_and_bolt:

### Overview

* **Full-Time Equivalent (FTE):** 1
* **Total Costs:** $16000 equivalent

### Milestone 1 — Implement Nx plugin for Parity ink!

* **Estimated duration:** 4 weeks
* **FTE:**  1
* **Costs:** $14,000 equivalent USDC

Goal - Develop Nx plugin for boilerplate in Parity ink! contract project

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Testing Guide | The code will have end-to-end test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 1. | Nx Plugin Repo | The entire code for the boilerplate plugin will be shared in a github public repository. |

### Milestone 2 — Kraken CLI

* **Estimated duration:** 10 weeks
* **FTE:**  1
* **Costs:** $28,000 equivalent USDC

Goal - Make a CLI binary that can put this in a production level.
Taking one step further from [create-nx-workspace](https://github.com/nrwl/nx/blob/b8efa778f639d26e339cecb1d16e0f5a51b1d082/packages/create-nx-workspace/bin/create-nx-workspace.ts), Kraken will generate nx boilerplate for parity ink! smart contract development and support other commands that are related to not only in contract development.
This includes deploying contract, running the test chain, and setting up a task to run.
The cli binary aims to cover whole feature in [ink-waterfall](https://github.com/paritytech/ink-waterfall).

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 | 
| 0b. | Documentation | Documentation on Github |
| 0c. | Kraken Repo | |
| 1. | Article & Video | 	We will write an **article** that explains the work done as part of the grant, as well as release a video walk through demonstrating Kraken |

## Future Plans

* Make indexer boilerplate with [SubQuery](https://linktr.ee/subquerynetwork)
* Test deployment in Canvas or Statemint common-good parachain.
* More example contract generators using XCM, Defi, NFT, etc
* Build Standard Protocol implementation in Parity ink!
* Maintain framework to adapt into multichain smart contract environment(e.g. support deploy command for deploying to other ink! contract chains)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
I applied before.
