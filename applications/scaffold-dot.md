# 📝 Scaffold-DOT

## 🌟 Project Overview

Scaffold-DOT is an open source, fullstack toolkit for building, testing, and deploying EVM smart contracts onto Polkadot Hub.

Built using NextJS, Reown AppKit, Hardhat, Wagmi, Viem, and Typescript. Foundry support planned in the future.

0 to Polkadot Hub for EVM devs and new devs. Great for hackathons, tinkering and MVPs. Integrates hardhat-polkadot, resolc, hardhat-polkadot-node packages with a fork of scaffold-eth.

Scaffold-DOT will be a fully configured way to get started with deploying EVM contracts to Polkadot Hub. Let's have this ready for the releases to Kusama Hub and Polkadot Hub.
- (Optional but **huge bonus points**): [1-min video pitch](https://www.ycombinator.com/video/)

### 🔍 Project Details

#### Tech Stack:
NextJS for frontend/backend
Reown AppKit wallet connection including email and social wallet creation in app
Hardhat for EVM testing and deployment
Wagmi and Viem for interacting with smart contracts
Scaffold-DOT is a fork of Scaffold-ETH 2.
*Foundry will be added when foundry-polkadot is available*

#### Documentation of architecture
Documentation is provided in README.md files and notes within code. More documentation to come.

#### MVP / Experience:
One contributor has been using scaffold-eth for ~3 years, another contributor has been in Polkadot for ~3 years. We're forking a project called scaffold-ETH which is a familiar toolkit in the ETH space.
![Image](https://github.com/user-attachments/assets/8cbcecee-e880-4e4e-85f4-dd262f69655e)
![Image](https://github.com/user-attachments/assets/12e4a857-84b4-4b1b-a899-862aa0cee084)
![Image](https://github.com/user-attachments/assets/4b1b2db9-58e1-4d8c-aae9-97f1cf8fb509)
![Image](https://github.com/user-attachments/assets/130355e7-45ed-4891-915f-50eaa9207293)
Will not support smart contracts written in Ink! Not for running DOOM :)

### 🧩 Ecosystem Fit

Toolkit is aimed at devs familiar with ethereum tools that want to deploy to Hub. It's a great toolkit for new devs, hackathons and can be built on top of for production level dapps.

The project is meant to provide a fully configured repo to make it dead simple to deploy to Hub.

There are no projects that bridge Ethereum developers to Polkadot quite like this, could be wrong though. I don't know what I don't know.
I just came from Consensus Toronto hackathon, mentioned this to a few Polkadot devs and they said yeah that would be cool to have.
Hub is pretty new, the ecosystem has been focused on Ink! smart contract tooling, there hasn't been a need for this before now.

## 👥 Team

- **Team Name:** Scaffold-DOT
- **Contact Name:** Miles Patterson
- **Contact Email:** milesbrentpatterson@proton.me
- **Website:** https://github.com/scaffold-dot

### Team members

Miles Patterson

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/miles-patterson-a02653139

### Team Code Repos

- https://github.com/scaffold-dot/scaffold-dot

Please also provide the GitHub accounts of all team members:

- https://github.com/gotnoshoeson


### Team's experience

Miles has ~3 years of full stack dev experience. He has been using scaffold-eth since the first version and provides support in the various scaffold-eth telegram chatrooms. Has written tutorials on how to implement a proxy factory with scaffold-eth 2 for Minimal Proxies, UUPS, and Upgradeable Beacon Proxies including additional components for doing so. He has also forked buidlguidlv3 for an MVP of FanSociety.xyz

### Contributor and Advisor
- https://github.com/muddlebee
Muddlebee has ~5 years full stack dev experience. Previously worked as a tech lead at B2B fintech firm. Was previously a Polkadot Ambassador and the community manager/moderator of the official Polkadot/Kusama discord. Has been contributing to Polkadot ecosystem for >2 years. Has participated in Thousand Contributors Programme by w3f and has been adding suggestions/improvements across the w3f github projects (polkadot-wiki). Also wrote a comprehensive tutorial to get started with Polkadot using the polkadot-js API. https://polkadotjs-developer-hub.gitbook.io/


## 📊 Development Status

It's a fork of scaffold-eth 2. Scaffold-DOT repo can be located at https://github.com/scaffold-dot/scaffold-dot

## 📅 Development Roadmap

### Overview

- **Estimated Duration:** Duration of the whole project (maximum 3 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project
- **Total Costs:** Requested amount in USD for the whole project (maximum $10,000 USD)

> Note that deliverables 0a to 0d are mandatory. Please adapt their specification to your project.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can... |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article** that explains what was done/achieved as part of the grant. |
| 1. | MVP | Will fork the scaffold-eth 2 repository and configure hardhat with hardhat-polkadot, hardhat-polkadot-node and resolc. User will be able to clone the repository, run and deploy to local chain, deploy to WestEnd Hub with zero configuration, and test the dapp with the frontend that is generated from the contract ABI. Toolkit will be capable of deploying to Polkadot and Kusama Hub when they're publicly available.
| 2. | UI/UX | Will update the look and feel of the frontend to follow Polkadot's Brand Hub colors, fonts, etc. Quicklink to Westend faucet. Swap wallet connection library for social and email login without browser extension.
| 3. | Foundry | Add support for Foundry. Relying on Parity Tech to finish their fork. npx cli tool to configure the build with hardhat vs foundry. Configure Foundry for polkadot hub.

### 💰 Budget Breakdown

| Milestone | Deliverables | Cost (USD) | Estimated Completion |
| --- | --- | --- | --- |
| 1 | MVP | $4000 | 3 weeks | 40 hours of fulltime at $100 USD / hr.
| 2 | UI/UX | $2500 | 3 weeks | 25 hours of partime at $100 USD / hr.
| 3 | Foundry | $2000 | 2 weeks | 20 hours of partime at $100 USD / hr.
| **Total** | | **$8,500** | **8 weeks** |

## 🔮 Future Plans

Fast-Grant success will set us up for OpenGov Treasury proposals if further development is needed, open to other sources.

Not sure what will be needed to maintain this long term. If toolkit is useful, the community will fund it.

Polkadot Hub is coming, let's have things ready for devs (with a variety of skill/experience) to make use of Hub quickly. Scaffold-DOT should be useful for tinkerers, hackathons and MVPs. Scaffold-eth has speedrunethereum, a series of challenges that introduce devs to the toolkit and get progressively more challenging and cover a variety of smart contract uses and topics. Could be cool to have something similar for scaffold-dot Polkadot ecosystem.

## ℹ️ Additional Information

We have forked the SE2 repo. Configured it to use hardhat-polkadot, resolc, and working on hardhat-polkadot-node (local PVM chain)
