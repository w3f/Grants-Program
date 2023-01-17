# Ink Contracts Wizard

*  **Team Name:** Ink Contracts Wizard Team

*  **Payment Address:** Bitcoin Address: bc1qtr9993ch6zlr29j5c22zzax57h62x5gj24wtxk

*  **Level:** 1


## Project Overview :page_facing_up:

### Overview

Ink Contracts Wizard is an CLI based smart contract generation tool. It will scaffold Smart Contracts based on the options selected by the user. Once all the options are selected, user will have smart contract scaffolded in the machine.


### CLI commands

CLI will have following commands.

> ink-wiazrd --help

Print outs all the available commands.

> ink-wizard new flipper

Create boilerplate code for Flipper Smart Contract.

> ink-wizard new psp-22

Create boilerplate code for PSP-22 standard smart contracts, it is as same as ERC-20 standard.

> ink-wizard new psp-34

Create boilerplate code for PSP-34 standard smart contracts, it is as same as ERC-1155 standard.

> ink-wizard new psp-37

Create boilerplate code for PSP-37 standard smart contracts, it is as same as ERC-721 standard.

In an interactive way, CLI will ask user if they want to have mint, burn, Pausable, Capped, Ownable, etc. functionality.

### Motivation
A lot of people use OpenZepplin's Smart Contract Wizard tool on daily basis since they are industry standard. We will be using OpenBrush smart contracts: https://github.com/Supercolony-net/openbrush-contracts. The reason to use OpenBrush Library is to abstract away a lot of details like OpenZepplin Smart Contracts does otherwise Smart Contracts code will end up being too bloaty.

### Ecosystem Fit
 - Where and how does your project fit into the ecosystem?
Anyone who wants to quickly scaffold smart contract from the UI are our users.
 - Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Anyone who wants to create Smart Contracts on top of Ink are our target users.


### User Journey
 - User installs the CLI.
 - User selects option in which she wants there smart contracts to have functionality.
 - User will be able to generate the Smart Contract.
 - Smart contracts will be scaffolded in the user's machine.
  

### Simillar platforms for solidity

- https://docs.openzeppelin.com/contracts/4.x/wizard


## Team :busts_in_silhouette:

### Team members

* Aviraj Khare

### Contact

*  **Contact Name:** Aviraj Khare


### Legal Structure

*  **Registered Legal Entity:** Not yet registered

### Team's experience

* Aviraj Khare: Worked in Gojek, Dukaan in the past. Into Web3 space since 2016. Successfully completed Ink Boxes grant.

### Team Code Repos

* https://github.com/avirajkhare00

## Development Roadmap :nut_and_bolt:

# Overview

## Grant level

Level 1: Up to $10,000, 2 approvals


## Development Roadmap :nut_and_bolt:

*  **Total Estimated Duration:** 4 weeks

*  **Total Costs:** 5,000 USD

### Milestone 1

*  **Estimated Duration:** 2 weeks

*  **Costs:** 3,000 USD


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in unittest in python which is a great test runner to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0. | Conversion of OpenBrush smart contracts written in Ink to it's templates and sub-templates. | We will be using this code repo: https://github.com/Supercolony-net/openbrush-contracts and will convert them into basic templates and it's sub templates. We will be converting PSP-22, PSP-34, PSP-37 contracts. |
| 1. | Creation of code generation logic for Ink smart contracts. | We will be building our own code generator in Python. We will have templatized code and code convertor will output the rendered code with user's selected options. |

### Milestone 2

*  **Estimated Duration:** 2 weeks

*  **Costs:** 2,000 USD


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can run the CLI to generate the smart contracts. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written using unittest package to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Articles | We will publish an article on Medium on how to use this CLI tool. |
| 0. | Smart Contract Generator CLI | We will be building this CLI using Typer package using which we can create interactive CLI. |
| 1. | Push the Python package to PyPi | We will push this python package to PyPi so that users can install the package using pip3. |
| 2. | Creation of formula for CLI | We will be creating homebrew formula so that users can easily install this CLI tool. Since most of the substrate ecosystem users use Rust, having formula will remove dependency to install python. |


## Additional Information :heavy_plus_sign:

### Future plans

Once we are done with grants, we will be adding ink-boxes so that anyone can scaffold any ink-box using the same CLI.
