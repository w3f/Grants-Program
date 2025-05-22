# 📝 Scaffold-DOT

## 🌟 Project Overview

Please provide the following:

- If the name of your project is not descriptive, a tagline (one sentence summary)
Open source fullstack toolkit for building and deploying EVM smart contracts onto Polkadot Hub.
- A brief description of your project
Built using NextJS, Reown AppKit, Hardhat, Wagmi, Viem, and Typescript
- An indication of how your project relates to / integrates into Polkadot
0 to Polkadot Hub for EVM devs and new devs. Great for hackathons and MVPs.
- An indication of why your team is interested in creating this project
Scaffold-DOT will be a fully configured way to get started with deploying EVM contracts to Polkadot Hub. Let's make it easy.
- (Optional but **huge bonus points**): [1-min video pitch](https://www.ycombinator.com/video/)

### 🔍 Project Details

We expect applicants to have a solid idea about the project's expected final state. Therefore, please submit (where relevant):

- An overview of the technology stack to be used
NextJS for frontend, Reown AppKit wallet connection, hardhat for EVM testing and deployment *may add Foundry support if possible*, Wagmi and Viem for interacting with blockchain. Scaffold-DOT is a fork of Scaffold-ETH 2.
- Documentation of core components, protocols, architecture, etc. to be deployed
It's a scaffold-eth fork that is configured for deploying to Polkadot Hub.
- Any PoC/MVP or other relevant prior work or research on the topic
Have been using scaffold-eth since version 1.
- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- What your project is *not* or will *not* provide or implement
Will not support smart contracts written in Ink!

### 🧩 Ecosystem Fit

Help us locate your project in the Polkadot landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
Great toolkit for hackathons and onboarding devs to Polkadot Hub. 
- Who is your target audience?
Tinkerers, new devs, Polkadot curious Solidity devs.
- What need(s) does your project meet?
Get people deploying onto Westend Hub and Polkadot Hub with minimal configuration.
- Are there any other projects similar to yours in the Polkadot ecosystem?
I don't think so, just came from Consensus hackathon, mentioned this to a few Polkadot devs and they said yeah that would be cool
  - If so, how is your project different?
  It's a fork of scaffold-eth 2 but will be configured with hardhat-polkadot, resolc, PVM local chain, rebranded
  - If not, why might such a project not exist yet?
  Hub is brand new, haven't needed this before now

> **Note**: We prioritize projects building on Plaza/Polkadot Hub, games, and DeFi applications, though all types of projects will be considered.

## 👥 Team

- **Team Name:** Scaffold-DOT
- **Contact Name:** Miles Patterson
- **Contact Email:** milesbrentpatterson@proton.me
- **Website:** https://github.com/gotnoshoeson

### Team members

Please list the legal name of all grant beneficiaries. Solo developers (1-person teams) are eligible for funding.
Miles Patterson, Anwesh Nayak

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/{person_1}
- https://www.linkedin.com/{person_2}

### Team Code Repos

- https://github.com/scaffold-dot/scaffold-dot

Please also provide the GitHub accounts of all team members:

- https://github.com/gotnoshoeson
- https://github.com/muddlebee

### Team's experience

Please describe the team's relevant experience, including any previous blockchain projects or contributions to the ecosystem.
Miles has ~3 years of full stack dev experience. He has been using scaffold-eth since the first version and has written tutorials on how to implement a proxy factory with scaffold-eth 2 for Minimal Proxies, UUPS, and Upgradeable Beacon Proxies. He has also forked buidlguidlv3 for an MVP of testnet.FanSociety.xyz
Anwesh has ~5 years full stack dev experience. Previously worked as a tech lead at B2B fintech firm. Was previously a Polkadot Ambassador and the community manager/moderator of the official Polkadot/Kusama discord. Has been contributing to Polkadot ecosystem for >2 years. Has participated in Thousand Contributors Programme by w3f and has been adding suggestions/improvements across the w3f github projects (polkadot-wiki). Also wrote a comprehensive tutorial to get started with Polkadot using the polkadot-js API. https://polkadotjs-developer-hub.gitbook.io/

## 📊 Development Status

If you've already started implementing your project, please provide a link and a description of the code. Otherwise, please provide some documentation on the research and other work you have conducted before applying.
It's a fork of scaffold-eth 2 and can be located at https://github.com/scaffold-dot/scaffold-dot

## 📅 Development Roadmap

This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, please describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality.

**Important notes:**
- Each milestone is capped at **$5,000 USD**
- Milestones must be delivered within **3 months** of approval
- The maximum grant amount is **$10,000 USD** per application (up to **$15,000 USD** per project in exceptional cases)
- You will only receive payment after successful milestone delivery

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
| 2. | Rebrand | Will update the look and feel of the frontend to follow Polkadot's Brand Hub colors, fonts, etc. Quicklink to Westend faucet.
| 3. | Foundry | Add support for Foundry. Relying on Parity Tech to finish their fork.

### 💰 Budget Breakdown

Please provide a breakdown of your budget by milestone:

| Milestone | Deliverables | Cost (USD) | Estimated Completion |
| --- | --- | --- | --- |
| 1 | MVP | $4000 | 2 weeks | 40 hours of fulltime at $100 USD / hr.
| 2 | Rebrand | $2000 | 2 weeks | 20 hours of partime at $100 USD / hr.
| 3 | Foundry | $2000 | 2 weeks | 20 hours of partime at $100 USD / hr.
| **Total** | | **$8,000** | **6 weeks** |

Make sure you show clearly what the funding is going towards (e.g. 30 hours of a full time employee at $X / hour).

## 🔮 Future Plans

Please include:

- How you intend to continue development after the Fast-Grant
Fast-Grant success will set us up for OpenGov Treasury proposals if further development is needed
- Any plans for seeking additional funding (other grants, VC funding, etc.)
Not at the moment. Just want to build this thing quickly.
- Your vision for the project's growth and impact in the Polkadot ecosystem
Polkadot Hub is coming, let's have things ready for various skill level devs to deploy there quickly. Scaffold-DOT should be useful for tinkerers and hackathons. Scaffold-eth has speedrunethereum, a series of challenges that introduce devs to the toolkit and get progressively more challenging. Could be cool to have something similar.

## ℹ️ Additional Information

Here you can add any additional information that you think is relevant to this application, such as:

- Work you have already done
- If there are any other teams who have already contributed to the project
- Other funding you may have applied for

Remember that the Fast-Grants Programme is designed as a first step for promising projects. We're looking for projects that can continue to grow beyond this initial funding.
