# Dotnix

- **Team Name:** Sporyon Technologies OÜ

- **Payment Address:** Fiat 25.03.2024, 15:18
- **DOT:** 1Z765yAFnVpzYT7Vk2wKaePoP1YGdYQ5yUw3nVEyu2DYju8
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview 📄


### Overview

Dotnix is a collection of Nix packages, NixOS modules, and a commandline tool designed for compiling Polkadot validators, managing their deployments while emphasizing both security and ease of use.

#### Security / Auditability

Dotnix aims to minimize the attack surface of a Polkadot node by only enabling services explicitly declared in Nix configuration files. This approach not only enhances its security but also ensures a minimalistic machine setup where components run solely when they are declared, further bolstering the node's defense against potential threats.

Auditability is facilitated by the way the Nix package manager builds packages using only predetermined build inputs, and by producing packages that never change once they have been built. During the build process, there is no arbitrary network access nor access to any file that hasn't been specified explicitly.
Each package is stored in its own directory, like e.g. `/nix/store/nawl092prjblbhvv16kxxbk6j9gkgcqm-git-2.14.1`.

The directory name consists of a unique identifier, the package name, and its version. The name and version are included only for convenience. The identifier captures all of the package's dependencies, i.e. it's a cryptographic hash of its build dependency graph, including all source files, all other packages used directly or indirectly by the build process, and any other detail like e.g. compiler flags.

With Nix, the entire configuration of the Polkadot validator node can be observed at a glance for both the executing system and the validator configurations. This clarity is invaluable for those responsible maintaining these systems.

#### Ease of Use

To simplify testing and operation of the Polkadot validator, Dotnix provides easy access to an array of tools built on top of Nix's tooling such as [nixos-anywhere](https://github.com/nix-community/nixos-anywhere) and [nixos-generators](https://github.com/nix-community/nixos-generators) which will enable users of the Dotnix to iterate quickly over their staking infrastructure. This allows to deploy Polkadot validators to a variety of cloud providers as well as self-hosted virtual machines. It can even spawn local virtual machine instances directly for any given NixOS configuration, providing a convenient way to for testing. A command line tool will be developed to add even more management capabilities of validators that have been deployed using the initial set of tools.

### Project Details

#### Mockups/designs of any UI components 
#### Technology stack to be used
  - Nix
  - NixOS
  - nixos-anywhere
  - disko
  - nixos-generators
  - systemd-vault
  - vault
####  Documentation of core components, protocols, architecture, etc. to be deployed

  We will be providing Markdown documentation in the repository of the work 

#### PoC/MVP or other relevant prior work or research on the topic

We have gathered a large list of of references for software projects that fullfil similar objectives that we are trying to achieve.

#### What your project is *not* or will *not* provide or implement
Dotnix is a tool to deploy reproducible declarative and hardened validators to the following targets:
Baremetal, VM, Docker
Nothing more nothing less.

### Ecosystem Fit

The software sponsored by this grant is intentented to be a SecOps tool to enable system admistrators have a better overview/management of their validators. There is a lot of Infrastructure as Code that is kept closed source and we hope that this tooling provides best in class open source staking infrastructure for individual to large teams. The software created by this grant will provide alternative deployment methods to `ansible` and `docker-compose`.

Business-oriented activities (marketing, business planning), events or outreach. To increase awareness, we will target people who want to host a validator but don't have the technical knowledge to deploy their machines. Additionally, we aim to reach individuals and institutions experienced in hosting infrastructure but are searching for ways to do it more securely or with less maintenance.

#### Where and how does your project fit into the ecosystem?

Dotnix seeks to enhance the existing methods of creating and managing validator nodes by:

-  Minimizing the attack surface of a node by exclusively enabling services declared in the `nix` derivation.
-  Enabling modularized linux system components 

#### Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our primary focus is on the DotSama community that seeks a more straightforward method to deploy Kusama or Polkadot validators. Additionally, we cater to institutions and maintainers aiming for a validator setup with a pronounced emphasis on high security and low maintenance.

#### What need(s) does your project meet?

- Better OpenSource Infrastructure as Code for validators.
- Deterministic dependency management of the Polkadot validator ecosystem.
- Software supply chain auditing.
- DevOps tooling to manage containers, virtual machines, and bare metal machines.

#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

-  [Bitcoin.nix](https://github.com/fort-nix/nix-bitcoin)
   -  While not directly in the aforementioned ecosystem, the Bitcoin community offers a Bitcoin node setup. This setup also stresses security and user-friendliness. However, given Bitcoin's distinct nature compared to Polkadot, our architectural approaches are significantly different.
- [polkadot.nix](https://github.com/andresilva/polkadot.nix)
- [Enby collective validator](https://github.com/enby-collective/validator)

## Team 👥

### Team members

- Team Lead 
  - Sebastian Kraus

- Team Members 
  - Tomislav "tv" Viljetić
  - Sebastian Bolaños

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

Tomislav has been administering systems with and developing software around Nix since 2014. He has helped multiple companies to move their testing and production environments to or build them from scratch on top of Nix, both for bare metal as well as virtual machines at Hetzner, GCP, AWS, and Azure. He is maintaining a handful Nix packages and NixOS services at https://github.com/NixOS/nixpkgs and is the author of the [krops](https://github.com/krebs/krops) deployment tool. He is the co-founder and co-host of the weekly NixOS meetup in Berlin.

##### Sebastian Bolaños
###### Cofounder WalletConnect and freelance DevOps services

Sebastian is a backend developer and Linux sysadmin with subject knowledge in DevOps. He is an experienced backened developer with 8 years in helping multiple companies design and deploy their blockchain networks in the Tendermint or EVM stack. He is knowledgable with monitoring systems (Prometheus, Grafana), and Linux systems both cloud and baremetal. He has worked with `nix` building CI/CD pipelines, server provisioning, virtual machine provisioning, Docker container pipeline, and Ethereum validator management across cloud and baremetal servers. He has used `nix` in both personal and production environments for four years. While at WalletConnect, he helped grow WalletConnects customer connections from 40 thousand million to 2 million daily.

###### Previous Web3Foundation grant:

Sebastian Bolaños has applied to a joint grant from the Inter Chain Foundation and the Web3 Foundation for the work on developing WalletConnect V2 during the year 2021.


##### Sebastian Kraus
###### Founder of Sporyon

Sebastian has been an entrepreneur for 6 years and a seasoned CEO. He has experience leading teams and delivering within tight deadlines. Over the past six years, Sebastian has built a broad industry network in the real estate technology sector. Thanks to his dedication and vision, they expanded the agency successfully, acquiring notable clients. Between November 2021 and January 2023, Sebastian enhanced his expertise at Qrucial OÜ, a company specializing in blockchain security. They participated in the Web3 foundation's Grants program, planning and developing the first milestone for QrucialDao on chain auditing solution.

###### Previous Web3Foundation grant:

Sebastian Kraus has applied and delivered the First Milestone of Qrucial DAO Grant.Qrucial OÜ.


### Team Code Repos

#### Team Members

- https://github.com/4z3 (tv)
- https://github.com/sbc64
- https://github.com/ra33it0

## Development Status 📖

We have started designing the architecture and the interfaces between the different modules. We have kept the first milestone short just to enable quicker iteration of the code and documention.

### Previous research
-
## Development Roadmap 🔩

### Overview

- **Total Estimated Duration:** 2 month
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 10000 USD

### Milestone 1: MVP Development and Deployment of NixOS Validator Module

#### Objective: Develop a Minimum Viable Product (MVP) of a validator module deployable as a NixOS service, enabling a simplified one-click deployment process for users.

- **Estimated duration:** 4 weeks
- **FTE:**  1 FTE
- **Costs:** 5000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **quick start guide**  of how to go from 0 to a running validator that can perform the basic functions up until making a test transaction. The guide will be focused on how to set up the dotnix validator and other administrative topics. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) built with `nix` that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an article explaining why we believe this project is a step in the right direction and what benefits we hope to bring to the polkadot and general staking services. |
| 1. | Package Polkadot binary | We will create a polkadot `nix flake` that packages the Polkadot validator. We will likely use [`polkadot.nix`](https://github.com/andresilva/polkadot.nix) since the work has already been done there and the License is MIT. We plan to contribute back to `polkadot.nix`. any changes we might need. |
| 2. | NixOS Validator Module | We will create a NixOS module (similar to ansible playbook(s)`) that allows compatible CPU architecture (`linux-x86_64`, `linux-aarch64)  NixOS system virtual machine to run the packaged `polkadot` binary as `systemd unit(s)`. |
| 3. | Secret Management | Secrets are managed using a command-line utility that allows the user to set and unset the validator's node key. The validator will run depending on the presence of the key. This means that a freshly installed validator won't start until the user sets the key. When the key is set, the validator will start automatically and keep running until the key is unset. If the key gets reset to a different value, the validator will be restarted. |
| 4. | Tests for secret maangement | Services using the secret management will not start unless all required secrets have been provided (services will wait for the secrets). Removing required secrets will stop affected services (put them into a waiting state). Re-adding secrets will start waiting services. Modifying secrets will restart affected services |
| 5. | Basic Security Hardening | Implement dynamic unprivileged user, restrict filesystem access, and other suggestions that `systemd-analyze security` command suggests. |
|  |  |  |
### Milestone 2: Audit Trail and CLI Service Management

#### Objective: Enhance the validator module by incorporating a comprehensive audit trail system and providing a Command Line Interface (CLI) equivalent for service management to ensure high security and ease of use.

- **Estimated Duration:** 4 weeks
- **FTE:**  1 FTE
- **Costs:** 5000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and  extend the guide to cover the new functions of implemented in M2 like keyrotate and our runtime CLI tool. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) built with `nix` that can be used to test all the functionality delivered with this milestone. |
| 1. | Audit trail | Integrate an audit trail dependency within the validator module to record a detailed and tamper-evident log of all operations, providing transparency and facilitating accountability. |
| 2. | CLI Tool Development | Create a runtime CLI tool that mirrors the functionalities of the NixOS services, enabling users to manage the validator service effectively through command-line operations, which is crucial for automation and advanced user scenarios. |
| 2a | Functions: | polkadot_backup_keystore, polkadot_clean_logs, polkadot_full_archive_node_setup, polkadot_full_setup, polkadot_prepare,   polkadot_restart, polkadot_restore, polkadot_rotate_key, polkadot_stop, polkadot_update, process_exporter, updating_promtail, snapshot_script, updating_snapshot_script |





## Future Plans

Our vision for the Polkadot ecosystem centers on three key pillars: improving ease of use, enhancing security, and bolstering decentralization.

### First Objective: Auditability and alternative build methods

We're aware of a gap in the Substrate ecosystem, one that we can bridge with additional tooling. Our strategy is to tap into the established advantages of nix within the DevOps cycle, enhancing the toolkit available to Polkadot validators. This enhancement is aimed at not only refining the validator management experience but also introducing features like:

A detailed software bill of materials.
Enhanced supply chain security through the use of isolated build environments.
Smoother transitions between software compilation and its deployment.
Open-source playbooks designed for both individual and team deployment.
Currently, there's a noticeable absence of an open-source software build system that can guarantee software remains unaltered. Addressing this, we are focused on developing fundamental tools that will not only cater to immediate needs but also lay the groundwork for an open-source Polkadot infrastructure, conceptualized as code.

### Second Objective: ease of use, and decentralization
With the development of improved tools for the Polkadot ecosystem, our next step is to explore the provision of SaaS solutions for Polkadot validators. We aim to include features like:

- Integrated monitoring and alert systems.
- A modular network stack, giving validators greater control over their network operations.
- The introduction of alternative git hosting to enhance decentralization through diverse software distribution methods.
- Distributing validator source code via IPFS.
-Investigating the integration of redundant connections, such as effortless LTE backups.

We are confident that these enhancements will not only simplify usage for validators but also address security concerns more effectively. Our ambition extends beyond tool development; we aspire to evolve into a company renowned for its expertise in these areas, contributing significantly to the Polkadot community.

### Third Objective: Expanding the Scope of Validator Software Distribution

Our vision includes a significant role for nix in the Polkadot ecosystem, particularly in utilizing Polkadot's consensus for the distribution of auditable and reliable binaries. We're keen to delve into how we can enhance the interaction between the Polkadot virtual machine and the software it runs. Our goal is to simplify deployment on a secure platform, ensuring even those without technical expertise can securely operate machines by default. Our focus is on making validator operation more accessible to a broader audience. Furthermore, we aspire to develop tooling that not only serves our immediate needs but also holds potential to contribute to other services and possibly be integrated into other software initiatives. 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
After having a constructive discussion with Gavin Wood at protocol berg, he kindly suggested that we consider applying for this grant.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

**Work you have already done.**
Our team's effort has been to research the viability of a tool like dotnix.


**If there are any other teams who have already contributed (financially) to the project.**
No other teams contributed to this project.

**Previous grants you may have applied for.**
I have worked the following w3f granted projects in the past: https://github.com/Qrucial/QRUCIAL-DAO


