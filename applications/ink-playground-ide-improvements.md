# Ink Playground IDE Improvements Grant

- **Team Name:** [Zeeve](https://www.zeeve.io)
- **Payment Address:** Ethereum (USDT/USDC) 0x5E1257E928aa42E3D0cd9E2A7537E37D108D811B
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Overview
The adoption of any technology depends on the accessibility and ease of use to both the maintainer and user, blockchain 
or distributed ledger technologies are inherently a lot difficult to understand and maintain, so we have to build tools 
to make the process much easier and painless. In the case of Polkadot's substrate based smart contract development we have 
Ink! playground which helps smart contract developers to prototype and test it before deploying on the parachain in a 
Sandboxed environment with having to do time-consuming setup of dependencies and also with ability to set up a local 
environment to do development.

## Project Details

The community posed few challenges and issues to improve the Ink! Playground to keep up with the Ink's advancements and 
have Ink's own docs with ability to execute the examples with multi version support, the following issues were proposed 
by the Grant team to resolve:

- [Support supplying ink! version in URL · Issue #427 · paritytech/ink-playground](https://github.com/paritytech/ink-playground/issues/427)
- [Update playground automatically upon new ink! release · Issue #197 · paritytech/ink-playground · GitHub](https://github.com/paritytech/ink-playground/issues/197)
- [Implement versioning for ink! playground · Issue #460 · paritytech/ink-playground · GitHub](https://github.com/paritytech/ink-playground/issues/460)
- [Support running code from crate docs · Issue #428 · paritytech/ink-playground · GitHub](https://github.com/paritytech/ink-playground/issues/428)

The brief overview of the issue resolution:

- **Dependency Versioning**: Provide an API and UI components to set dependency versions for the contract, which will 
  help developers to build for targeted systems and environments.
- Automated **Ink! Version upgrade** in Ink! Playground system when new Ink! Version releases.
- Ability to select **Ink! version** to compile the code in the IDE.
- In Ink! **Crate docs** code examples can be executed using the Ink! Playground backend with Ink! version support.

Additionally, we would like to propose further enhancements to the Ink! Playground which will benefit the Polkadot community 
by easing the development process with better Developer Experience. We are excited to work on the following enhancements 
once we complete the aforementioned improvements and build upon to provide maintenance of the Ink! Playground.

- **Local file system storage:** Use the local file system for contract storage which will help developers 
  to open and save the file without leaving the IDE.
- **Template contracts:** Provide contract templates similar to the Ethereum contract standards based on
  the popular use cases.
- **Ability to run contract functions** based on the metadata generated for a contract, this
  will help developers to prototype, test and debug  the contracts faster.
- **Deploy contracts from the IDE:** Deploy the contracts to the remote contract execution environment by 
  providing the remote endpoint.
- **Recent contracts:** List all the recent contracts that were saved for faster access to previously edited
  contracts.

## Team :busts_in_silhouette:

### Team members
- Ghan Vashishtha
- Sankalp Sharma
- Jasti Sri Radhe Shyam

### Contact
- **Contact Name:** Ghan Vashishtha
- **Contact Email:** ghan@zeeve.io
- **Website:** www.zeeve.io

### Legal Structure
- **Registered Address:** 1603 Capitol Ave Ste 310, Cheyenne 82001, WY
- **Registered Legal Entity:** Zeeve Inc.

### Team's experience

Founded by a team of experienced professionals and entrepreneurs from industry, Zeeve's co-founders
collectively have over 45+ years of experience in technology, product development, and various 
business verticals. Zeeve has built an enterprise-grade no-code Blockchain Infrastructure Automation
platform that enables Enterprises, Blockchain Startups, Blockchain Consulting Companies and Web3
Developers to deploy Blockchain nodes and Decentralized Apps within minutes, and manage them with 
advanced analytics and real-time alerts. In June 2022, the Startup raised $2.65 Million in a Seed
Round from Leo Capital and Blu Ventures. It plans to deploy the funds towards product development,
augmenting the technology team and enhancing its reach among DApp developers and global corporations,
please consider visiting our prior [work](https://www.zeeve.io/platform).

### Team Code Repos

- https://github.com/Zeeve-App
- https://github.com/Zeeve-App/sawtooth-artifacts
- https://github.com/Zeeve-App/Zeeve-read-the-docs
- https://github.com/Zeeve-App/larch

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ghan-vashishtha/
- https://www.linkedin.com/in/sankalp-sharma-502008139/
- https://www.linkedin.com/in/jastisriradheshyam/

## Development Status :open_book:

Before applying for the Web3 Foundation Grant, the Zeeve team has built a DevOps automation for Polkadot and other substrate chains, also created substrates based relay chains:

- Automated Polkadot deployments including validator nodes, archive nodes [here](https://www.zeeve.io/blockchain-protocols/deploy-polkadot-node/)
- Automated Kusama deployments including validator nodes, archive nodes [here](https://www.zeeve.io/blockchain-protocols/deploy-kusama-node/)
- Created a relay chain on substrate with some customizations done at the core to accommodate the tokenomics and custom reward mechanism [here](https://axscan.axiacoin.network/#/explorer)
- Published a [blog post](https://www.zeeve.io/blog/how-to-use-substrate-to-create-parachains-in-polkadot/) about the usage and implementation of parachain's
- The focus for Zeeve will be automating the parachain deployments, dedicated node setups and help with faster testing with zombie-net.
- Spoke with David Hawig, Richard Casey and Gautam Dhameja from the Parity team regarding the development of Zeeve and the Web3 Grant application
- Developed Larch, a UI for the Parity's Zombienet - [GitHub - Zeeve-App/larch](https://github.com/Zeeve-App/larch)

## Development Road-map :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 100 working days
- **Full-Time Equivalent (FTE):** 3 FTE
- **Total Costs:** 24,000 USD.

### Milestone 1 — Implement Ink's Dependency versioning

- **Estimated duration:** 90 working days
- **FTE:** 3
- **Costs:** 21,000 USD

| Number | Deliverable | Specification |
| -----: | -------------- | ------------- |
| 0.a.   | License        | Apache-2.0 |
| 0.b.   | Documentation  | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can open and save a file |
| 1. | On demand version specific compilation | We will add the ability to build the compiler environment if a compiler environment is not present with a specific version of Ink! |
| 2. | Dependency Version support | We will upgrade and maintain Ink! and `cargo-contract` dependencies versions up to date and have provision to have older version support |
| 3. | Ink! Upgrades | We will add the ability to add Playground's Ink! version support to latest version as soon as new version of Ink! is released without manual intervention |
| 4. | Select Ink! version from UI | We will add ability to select Ink!'s version from the IDE to compile |

### Milestone 2 - Ink! crate docs code execution

- **Estimated duration:** 10 working days
- **FTE:** 3
- **Costs:** 3000 USD

| Number | Deliverable | Specification |
| -----: | -------------- | ------------- |
| 0.a.   | License        | Apache-2.0 |
| 0.b.   | Documentation  | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can open and save a file |
| 1. | Ink! Create docs | We will provide the API and update create docs to run the code examples |

## Technology Stack

- Javascript
- CSS
- HTML
- Typescript
- Rust
- Docker

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Parity team / a conversation with Richard Casey.

### References:

[1]: [What is Parity's ink!? | Parity Technologies](https://www.parity.io/blog/what-is-paritys-ink)

[2]: [ink/ARCHITECTURE.md at master · paritytech/ink · GitHub](https://github.com/paritytech/ink/blob/master/ARCHITECTURE.md)
