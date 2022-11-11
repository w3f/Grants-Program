# Polka Scan CLI

*  **Team Name:** Polkascan CLI Team

*  **Payment Address:** Ethereum Address for USDT: 0xE4545705068dec1f68698d032944561Ec332836c

*  **Level:** 1


## Project Overview :page_facing_up:

### Overview

polkascan-cli is a CLI tool where anyone can search for an account, block, event, transaction and logs. It is same as they do in https://explorer.polkascan.io Searching on CLI can increase productivity of a developer. They can also copy/paste data fast and can call this script via another script. It is a utility based tool.

#### Language Used
We will be using **Python** language since we will be needing support of **py-substrate-interface**.
We will be using **Typer** to implement the CLI: https://github.com/tiangolo/typer.

#### CLI Flags

There are going to be following options when users open up the CLI:
 - Get current block number.
 - Get Blocks: Number, time, hash, Extrinsics, Events.
 - Get block info: Timestamp UTC, Hash, Parent Hash, State root, Extrinsics root, Extrinsics count, Events count, Runtime.
 - Get Extrinsic details.
 - Get account info.

### Ecosystem Fit
 - Where and how does your project fit into the ecosystem?
Anyone who is looking for account/block/event/transaction details.
 - Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Our target users are ones who wants to take a look at transaction details on blockchain quickly using CLI.
  

### Simillar platforms

- None so far


## Team :busts_in_silhouette:

### Team members

* @avirathecrawler

### Legal Structure

*  **Registered Legal Entity:** Not yet registered

### Team's experience

* avirathecrawler: Did a web3 based startup in early 2016 when ethereum was just launched. Before that, worked with IBM as a software engineer.

### Team Code Repos

* https://github.com/avirathecrawler

## Development Roadmap :nut_and_bolt:

# Overview

## Grant level

Level 1: Up to $10,000, 2 approvals


## Development Roadmap :nut_and_bolt:

*  **Total Estimated Duration:** 3 weeks

*  **Total Costs:** 5,000 USD

### Milestone 1

*  **Estimated Duration:** 2 weeks

*  **Costs:** 5,000 USD


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation of the code. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in PyTest and CLI tests in PyTest to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Articles | We will publish an article on how to contribute and use this tool. |
| 0. | Creation CLI tool | CLI tool will be able to fetch account, block, event, transaction and logs as on explorer.We will be running our own instance of polkascan.io https://github.com/polkascan/explorer. CLI will be coded in Python since we might be using py-substrate-interface: https://github.com/polkascan/py-substrate-interface and polkascan API which will be provided from our own instance. CLI will be having interactive menu where user can navigate using arrow keys. |
| 1. | Spinning up polkascan instance | We will use this repository code: https://github.com/polkascan/explorer to spin up polkascan explorer. We won't be using UI component for this. |
