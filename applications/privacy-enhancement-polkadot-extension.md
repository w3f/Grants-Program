# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Privacy Enhancement for Polkadot Extension
- **Team Name:** Web3 Crypto Wallet Team
- **Payment Address:** BTC bc1qk6juy2ejuapdy9x76q8qlsa65ysdpzr7903xdz
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

https://github.com/w3f/Grants-Program/blob/master/rfps/privacy-enhancement-polkadot-extension.md

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Please provide the following:

- If the name of your project is not descriptive, a tag line (one sentence summary).
- A brief description of your project.
- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.
- An indication of why your team is interested in creating this project.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?

## Team :busts_in_silhouette:

### Team members

- Team leader: Victor @web3cryptowallet
- Team members: Victor @web3cryptowallet

### Contact

- **Contact Name:** Victor @web3cryptowallet
- **Contact Email:** web3future@protonmail.com
- **Website:** https://twitter.com/Web3Wallet

### Legal Structure

- **Registered Address:** -
- **Registered Legal Entity:** -

### Team's experience

Blockchain developer since 2010
- Bitcoin core 2010
- Ethereum from 2014
- Smartcontracts: Solidity developer. Vyper, NEO and Nem API researcher
- Ethereum related: web3 internals, Infura, Zeppelin, develop oracles for ICO (React/NodeJS)
- Several forks from Dash, PIVX, Komodo, Blackcoin. PoW, PoS, masternode. I made fork where PoS joined to Dash also
- Embedded: Ledger Nano S firmware for KMD coin. I moidfy firmware sources for run Ledger Nano S firmware inside Linux QEMU with gdb for security research
- Multiple crypto/hash algo. I develop optimized ZCash GPU miner 

- Rust, C/C++, JS/TS, React/NodeJS
- Core developer: Bitcoin Core, geth, casper
- Solidity, Infura, Zeppelin, Oracles for ICO, Reverse & Solidity VM gas optimization
- Vyper, NEO, Nem, EOS 
- Dash, PIVX, Komodo, Blackcoin. PoW, PoS, Masternodes
- Ledger Nano S embedded firmware
- Tezos hackhaton
- Casper core & smart contracts, wallet Signer

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/web3cryptowallet
- https://github.com/web3cryptowallet/Web3CryptoWallet
- https://github.com/web3cryptowallet/drive-py

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/<person_1>

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Deliverables :nut_and_bolt:

See https://github.com/w3f/Grants-Program/blob/master/rfps/privacy-enhancement-polkadot-extension.md

***

As outlined [here](https://github.com/polkadot-js/extension/issues/893), the deliverable should include five features to the extension and a successful completion of this RFP includes a merge of a PR to the main polkadot-js/extension repo. **It is of great importance to generate clean code that follows best-practices**. 

* **Total Estimated Duration:** 1 month
* **Full-time equivalent (FTE):**  Amount of time (in days) required for a single person to complete this project ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
* **Total Costs:** $10'000. 

### Milestone 1
 
* **Estimated Duration:** 1 month
* **FTE:**  Amount of time (in days) required for a single person to complete this milestone
* **Costs:** $10'000


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | "Hide all" | A global button that hides/un-hides all addresses |  
| 2.  | "View-Groups" | Create and name groups which a user can organize their accounts to. For example, a "polkadot-js" group could unhide all accounts, while a "Parachain X" group only unhides those accounts a user knows that they have those parachain tokens on. |
| 3. | "Privacy Mode" | A setting that automatically changes the extension to a specific view group (which could be "hide all"). | 
| 4. | "Hide from Extension" | A feature that lets users hide addresses in the extension itself. This is useful for doing demos or presenting the screen. Those accounts are listed in a special tab and can be unhidden from there. | 
| 5. | "Link View-Groups to URLs" | The extension already features an access control to specific URLs. To add on that, the extension could automatically switch to a defined view-group when entering an URL. Building on that, upon *first* authorization of a website, the extension could ask which view-groups to add it to or offer to create a new one. | 