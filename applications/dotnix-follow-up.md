# Dotnix

- **Team Name:** Sporyon Technologies OÜ

- **Payment Address-sporyon:** Fiat 25.03.2024, 15:18
- **DOT-sporyon:** 1Z765yAFnVpzYT7Vk2wKaePoP1YGdYQ5yUw3nVEyu2DYju8
- **DOT-tv:** 1Qtup4rW7TCCryMTH6UB7Fx2cN8ntbNyYVhbjRZiHP7skXQ
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview 📄


### Overview

Dotnix is a collection of Nix packages, NixOS modules, and a commandline tool designed for compiling Polkadot validators, managing their deployments while emphasizing both security and ease of use.

This is a follow-up grant on Dotnix, for which all milestones have been submitted and accepted.
* [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/dotnix-milestone_1.md) - [Evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/dotnix_1_semuelle.md)
* [Milestone 2](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/dotnix-milestone_2.md) - [Evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/dotnix_2_piewol.md)

#### Project overview
This follow-up grant is intended to further, increase security by building a module for SecureBoot and SELINUX that can be used by dotnix or be extracted in a simple mannet to be used by other Polkadot validators using Nix.
1. Increase security by building a module for SecureBoot and SELINUX that can be used by dotnix or be extracted easily to be used by other Polkadot validators using Nix.  
2. Make it easier to run a Polkadot validator on Bare-Metal.
3. Improve maintainability by automating state management (generating offsite backups and restoring them for all services e.g Database snapshots, Node keys).

#### Security / Auditability

Dotnix aims to minimize the attack surface of a Polkadot node by only enabling services explicitly declared in Nix configuration files. This approach not only enhances its security but also ensures a minimalistic machine setup where components run solely when they are declared, further bolstering the node's defense against potential threats.

Auditability is facilitated by the way the Nix package manager builds packages using only predetermined build inputs, and by producing packages that never change once they have been built. During the build process, there is no arbitrary network access nor access to any file that hasn't been specified explicitly.
Each package is stored in its own directory, like e.g. `/nix/store/nawl092prjblbhvv16kxxbk6j9gkgcqm-git-2.14.1`.

The directory name consists of a unique identifier, the package name, and its version. The name and version are included only for convenience. The identifier captures all of the package's dependencies, i.e. it's a cryptographic hash of its build dependency graph, including all source files, all other packages used directly or indirectly by the build process, and any other detail like e.g. compiler flags.

With Nix, the entire configuration of the Polkadot validator node can be observed at a glance for both the executing system and the validator configurations. This clarity is invaluable for those responsible maintaining these systems.

#### Ease of Use

To simplify testing and operation of the Polkadot validator, Dotnix provides easy access to an array of tools built on top of Nix's tooling such as [nixos-anywhere](https://github.com/nix-community/nixos-anywhere) and [nixos-generators](https://github.com/nix-community/nixos-generators) which will enable users of the Dotnix to iterate quickly over their staking infrastructure. This allows to deploy Polkadot validators to a variety of Bare-Metal hosts. It can even spawn local virtual machine instances directly for any given NixOS configuration, providing a convenient way to do testing. A command line tool will be developed to add even more management capabilities of validators that have been deployed using the initial set of tools.

### Project Details

#### Mockups/designs of any UI components 
#### Technology stack to be used
  - Nix
  - NixOS
  - nixos-anywhere
  - disko
  - Github actions
  - SELinux
  - Secureboot

####  Documentation of core components, protocols, architecture, etc. to be deployed

  We will be providing Markdown documentation in the dotnix repository.

#### PoC/MVP or other relevant prior work or research on the topic
We have a dotnix validator running on westend which is running stable and can be observed on Polkadot telemetry under "sporyon-dotnix-westend".
We have also written a [Blog article](https://github.com/sporyon/dotnix-infra) on deploying dotnix on a machine with just a rescue shell.

### Ecosystem Fit
The software sponsored by this grant is intentented to be a SecOps tool to enable system admistrators have a better overview/management of their validators. There is a lot of Infrastructure as Code that is kept closed source and we hope that this tooling provides best in class open source staking infrastructure for individual to large teams. The software created by this grant will provide alternative deployment methods to `ansible` and `docker-compose` and implement SecureBoot and SE-Linux in a modular way so it can be used by a variety of Polkadot validators using NixOS.

#### Where and how does your project fit into the ecosystem?

Dotnix seeks to enhance the existing methods of creating and managing validator nodes by:

-  Minimizing the attack surface of a node by exclusively enabling services declared in the `nix` derivation.
-  Enabling modularized linux system components 
-  Improve the security of Nix-based Polkadot validators providing modular SE-Linux and Secureboot implementations.

#### Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our primary focus is on the DotSama community that seeks a way to deploy hardened Polkadot and Kusama Validators easily.  Additionally, we cater to institutions and maintainers aiming for a validator setup with a pronounced emphasis on high security and low maintenance.

#### What need(s) does your project meet?

- Better OpenSource Infrastructure as Code for validators.
- Deterministic dependency management of the Polkadot validator ecosystem.
- Software supply chain auditing.
- DevOps tooling to manage bare metal machines as well  as virtual machines for testing purposes.
- Security improvements that can be used in a modular way.

#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

-  [Bitcoin.nix](https://github.com/fort-nix/nix-bitcoin)
   -  While not directly in the aforementioned ecosystem, the Bitcoin community offers a Bitcoin node setup. This setup also stresses security and user-friendliness. However, given Bitcoin's distinct nature compared to Polkadot, our architectural approaches are significantly different.
- [polkadot.nix](https://github.com/andresilva/polkadot.nix)
- [EthereumNix](https://github.com/nix-community/ethereum.nix)

## Team 👥

### Team members

- Team Lead 
  - Sebastian Kraus

- Team Members 
  - Tomislav "tv" Viljetić

### Contact

- **Contact Name:** Sebastian Kraus
- **Contact Email:** sebastian@sporyon.io
- **Website:** sporyon.io

### Legal Structure

- **Registered Address:** **Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 7-652, 10117**
- **Registered Legal Entity:** **SPORYON Technologies OÜ**

### Team's experience

##### Tomislav "tv" Viljetić
###### Freelancer

Tomislav has been administering systems with and developing software around Nix since 2014. He has helped multiple companies to move their testing and production environments to or build them from scratch on top of Nix, both for bare metal as well as virtual machines at Hetzner, GCP, AWS, and Azure. He is maintaining a handful Nix packages and NixOS services at https://github.com/NixOS/nixpkgs and is the author of the [krops](https://github.com/krebs/krops) deployment tool. Tomislav is an active member of the Nix community and is known for founding and hosting the NixOS meetup in Berlin as well as organizing NixCon2024.


###### Previous Web3Foundation grant:

 Tomislav Viljetić has applied and delivered the First and Second Milestone of Dotnix Sporyon OÜ.

##### Sebastian Kraus

###### Founder of Sporyon

Sebastian has been an entrepreneur for 6 years and a seasoned CEO. He has experience leading teams and delivering within tight deadlines. Over the past six years, Sebastian has built a broad industry network in the real estate technology sector. Thanks to his dedication and vision, they expanded the agency successfully, acquiring notable clients. Between November 2021 and January 2023, Sebastian enhanced his expertise at Qrucial OÜ, a company specializing in blockchain security. They participated in the Web3 foundation's Grants program, planning and developing the first milestone for QrucialDao on chain auditing solution.
Since 2023 Sebastian is working on sporyon a software development company dedicated to Nix.
Sebastian is active member of the Nix community and is known for organizing NixCon2024.

###### Previous Web3Foundation grant:

Sebastian Kraus has applied and delivered the First and Second Milestone of Dotnix Sporyon OÜ and the First Milestone of Qrucial DAO Grant Qrucial OÜ.

### Team Code Repos

#### Team Members

- https://github.com/4z3 (tv)
- https://github.com/ra33it0

## Development Status 📖

We have finished our first 2 Milestones and have a running Validator on Westend.
After a sucessfull delivery of a Nix based Validator(covering basic functionality) in the first 2 Milestones and the deployment of a Dotnix Validator on Westend we aim to ( move to a longer term view and want to move the project to a production ready state, in terms of features).
We initially applied for a different follow-up grant and received valuable feedback, particularly from [Lederstrumpf](https://github.com/Lederstrumpf). This feedback prompted us to reassess our approach, shifting our focus from simplifying the deployment of validators in hosted environments to enhancing the security of Nix-based Polkadot Validators on Bare-Metal machines.

### Previous research
-

## Development Roadmap 🔩

### Overview

- **Total Estimated Duration:** tba months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1: Usability, Security

#### Objective: Security Improvements to all Nix based Polkadot Validators.
- **Estimated duration:** 4 weeks
- **FTE:** 2 FTE
- **Costs:** 15.000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and extend the guide to cover the new functions implemented in M1. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) built with `nix` that can be used to test all the functionality delivered with this milestone. |
| 1. | SELinux | Implementing SELinux modules according to the reccomended specs of the [NSA](https://www.nsa.gov/portals/75/documents/resources/everyone/digital-media-center/publications/research-papers/configuring-selinux-policy-report.pdf)
| 2. | Usability | Improving the usability of set-node-key to prevent the insertion of invalid keys causing the validator to enter a failed state. |

### Milestone 2: Security, Usability
#### Objective: Security Improvements to all Nix based polkadot Validators, And additionally make deploying hardened Polkadot Validators easyer.
- **Estimated Duration:** 4 weeks
- **FTE:** 2 FTE
- **Costs:** 15.000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and extend the guide to cover the new functions implemented in M2. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) built with `nix` that can be used to test all the functionality delivered with this milestone. |
| 1. | SecureBoot | Implement SecureBoot into dotnix in a modular way using [Lanzaboote](https://github.com/nix-community/lanzaboote)
| 2. | CI, Public Artifacts | Setup continuous integration to build and test each modification to the Dotnix codebase, using e.g. GitHub Actions, to produce ISOs that can be used to easily and deploy custom hardened Polkadot validators for Bare Metal Machines |
| 3. | Bash completion | Implementing Bash completion for dotnix-specific functions to increase usability. |

## Future Plans

Our vision for the Polkadot ecosystem centers on two key pillars: enhancing security, and bolstering decentralization.

### First Objective: Auditability and alternative build methods

We're aware of a gap in the Substrate ecosystem, one that we can bridge with additional tooling. Our strategy is to tap into the established advantages of nix within the DevOps cycle, enhancing the toolkit available to Polkadot validators. This enhancement is aimed at not only refining the validator management experience but also introducing features like:

A detailed software bill of materials.
Enhanced supply chain security through the use of isolated build environments.
Smoother transitions between software compilation and its deployment.
Open-source playbooks designed for both individual and team deployment.
Currently, there's a noticeable absence of an open-source software build system that can guarantee software remains unaltered. Addressing this, we are focused on developing fundamental tools that will not only cater to immediate needs but also lay the groundwork for an open-source Polkadot infrastructure, conceptualized as code.

### Second Objective: ease of use, and decentralization
With the development of improved tools for the Polkadot ecosystem, our next step is to increase resiliance and decentralization when running Polkadot validators. We aim to include features like:

- A modular network stack, giving validators greater control over their network operations.
- The introduction of alternative git hosting to enhance decentralization through diverse software distribution methods.
- Distributing validator source code via IPFS.
-Investigating the integration of redundant connections, such as effortless LTE backups.

We are confident that these enhancements will not only simplify usage for validators but also address security concerns more effectively. Our ambition extends beyond tool development; we aspire to evolve into a company renowned for its expertise in these areas, contributing significantly to the Polkadot community.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
After having a constructive discussion with Gavin Wood at protocol berg, he kindly suggested that we consider applying for the first dotnix grant, this grant is the continuation.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

**Work you have already done.**
We have implemented a nix based Polkadot/Kusama Validator in the first Dotnix Grant.
We have a validator running on Westend.


**If there are any other teams who have already contributed (financially) to the project.**
No other teams contributed to this project.

**Previous grants you may have applied for.**
Our team has worked the following w3f granted projects in the past: https://github.com/Qrucial/QRUCIAL-DAO,  and https://github.com/sporyon/dotnix-core

