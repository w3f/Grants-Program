# Proposal: Storage solution on Polkadot

- **Team Name:** Eiger
- **Payment Address:** Fiat 14.04.2023, 16:50 UTC+3
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview


The main goal is to implement and maintain a Filecoin-like system parachain that uses DOT as the native token and is easily usable for all kinds of parachain projects in the ecosystem via XCM.

### Project Details

To accomplish this we are submitting this initial proposal to update our previous research and test how XCM could be used to allow the ecosystem to use this storage network.

We are interested to build this because:
- Native storage in Polkadot payable in DOT is not currently available
- We have done the research 2 years ago.
- After talking to community members in Decoded 2023 we noticed there is demand for this kind of functionality.

We will not be using Trusted Execution Environments or Enclaves in this solution.

### 


### Ecosystem Fit

Currently a storage solution native to Polkadot is missing, by building a system parachain anyone in the ecosystem will be able to access storage thru XCM, pay in native DOT and build more complex applications withour relying on other networks.


## Team :busts_in_silhouette:

Eiger - We help leading technology companies to scale and develop their core technologies to gain an edge by providing expert teams in the most critical areas of modern web3 development.

Eiger is part of the [Equilibrium group](https://www.eqg.co/) which includes engineers from our sister company [Equilibrium Labs](https://equilibrium.co/).

### Team members

- **Tomek Piotrowski** ([Github](https://github.com/tomekpiotrowski), [Linkedin](https://www.linkedin.com/in/tomasz-piotrowski-17466b4/)) Software Engineer at Eiger, specializing in Rust-based applications. With a strong background in software development, he has spent recent years focusing on the Rust programming language. At Eiger, Tomasz actively contributes to the advancement of Rust-based blockchains and their ecosystems.
- **Mark Henderson** ([GitHub](https://github.com/aphelionz), [Twitter](http://twitter.com/aphelionz)) is the VP of Engineering at Equilibrium. He has led the team starting with the original Rust IPFS implementation in late 2019, through engagements with many of the largest names in Web3, and is part of the team that did [the original research](https://github.com/common-good-storage/report/blob/master/src/first.md) 2 years ago. Core contributor to OrbitDB, Rust IPFS, and Ziggurat.
- **Piotr Olszewski** ([Github](https://github.com/asmie), [LinkedIn](https://www.linkedin.com/in/piotr-olszewski-8a239939/)) & **Karlo Mardesic** ([Github](https://github.com/Rqnsom), [LinkedIn](https://www.linkedin.com/in/karlo-mardesic/)) - currently working on MoveVM pallet, they will contribute with their Polkadot and Substrate knowledge and join the next stage of this project, implementation.

### Contact

- **Contact Name:** Daren Tuzi
- **Contact Email:** daren@eiger.co (Founder & CEO of Eiger)
- **Website:** [Eiger.co](https://www.eiger.co/)

### Legal Structure

- **Registered Address:** Linnankatu 3 A 24, 20100 Turku, Finland
- **Registered Legal Entity:** Eiger Oy

### Team's experience

- [We researched this very topic 2 years ago](https://github.com/common-good-storage/report/blob/master/src/first.md)
- [We are the main contributors to implementing IPFS in Rust](https://github.com/rs-ipfs/rust-ipfs)
- We are building a MoveVM pallet for Polkadot (we will deliver Milestone 1 next week)

Our clients include: Starknet, Aleo, Forte, Zcash, Fireblocks, Ripple, Algorand, Solana, Flow, Elusiv, Celestia, Stellar and more.

### Team Code Repos

- Contributions to SnarkOS for Aleo. https://github.com/AleoHQ/snarkOS
- OrbitDB is a distributed, p2p, serverless database. https://github.com/orbitdb/orbit-db
- The rust implementation of IPFS. https://github.com/rs-ipfs/rust-ipfs
- The main implementation of Interledger in Rust. https://github.com/interledger/interledger-rs
- Ziggurat - A Network protocol testing framework for ZCash, XRP, and Algorand. Notably, critical network vulnerabilities were found and reported to the core teams. https://github.com/runziggurat
- Pathfinder, the full node implementation of Starknet https://github.com/eqlabs/pathfinder
- Zcash uniffi https://github.com/eigerco/uniffi-zcash-lib


## Development Status :open_book:

The goal of this proposal is to update the work we have done in the past to account for what has changed in the past 2 years in the Polkadot ecosystem and the advancements made in storage solutions like Filecoin.

In addition to this research and updating the code, we will also test how XCM could be used by anyone in the ecosystem to interact with this storage.

## Development Roadmap :nut_and_bolt:

### Update research, update code and test XCM

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1.5
- **Total Costs:** 30,000 USD


Two engineers will work together and in parallel to deliver these 3 subcomponents:

1. Update the research done previously to reflect latest tech changes in Polkadot and Substrate. We want to figure out what it would take to implement a whole storage solution as a parachain without depending on 3rd part chains and evaluate what components need to be written from scratch and what can be reused. 
2. Update the [code delivered in CGS](https://github.com/common-good-storage/parachain) or start fresh, whichever makes most sense. The scope of this is to deliver scafolding/template repository with boilerplace and dummy funcitonality. On top of this we can then test the milesone #3 below.
3. Research and test how XCM can be used. Using the scafolding code from #2 we can test how XCM can be used to access the storage from a different parachain.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 and MIT |
| **0b.** | Documentation/Tutorial | We will provide both inline documentation of the POC code and a basic tutorial that explains how a user can run the same test. |
| **0c.** | Methodology | Detailed explanation of how the results were achieved and how to reproduce/verify the results. |
| **0d.** | Infrastructure | We will provide the list of all requirements that can be used to verify the code deliverable with this milestone. This is related to deliverable 0b. Documentation and 0g. Docker |
| **0e.** | Article | Content: Updated research doc detailing our findings, how the tech has changed and how the solution will look like. |
| **0f.** | Testing and Testing Guide | We will deliver code that tests how XCM might be used to access this storage parachains. |
| **0g.** | Docker | Where relevant. we will provide a Dockerfile(s) that can be used to run and test the MVP and the XCM test. |
| **1.** | Updated CGS code | We will deliver a repositiory with the update MVP code |




## Future Plans

This initial grant will produce a game plan on how exactly this storage network will work. Using this knowledge we will submit another future proposal to build this solution. Once this storage solution has been built, it will be voted on by a governance vote. If successful then this system parachain will be available to be used by anyone in the ecosystem and payable in native DOT.



## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We are working on MoveVM pallet grant which asnwers the original RFP from the foundation so we were familiar with the ecosystem.
