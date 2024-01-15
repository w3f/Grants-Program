# Zeeve Larch

- **Team Name:** [Zeeve](https://www.zeeve.io)
- **Payment Address:** `1zhukWzj6pTskKUhDmyCaoJLuaHp5AVMDn5uLoNXTrw2gDR` USDC (Polkadot Asset Hub)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This grant is follow up grant of [Zeeve_zoombienet_deployment_testing_automation](https://github.com/w3f/Grants-Program/pull/1399) & [Update Zeeve Larch team, duration and deliverables](https://github.com/w3f/Grants-Program/pull/1744)

### Overview

**Zeeve Larch** : GUI for Zombienet

**Zeeve Larch** is a cross-platform GUI application that provides a user-friendly interface for managing and monitoring Polkadot and Substrate networks. It is built on top of the Zombienet CLI tool, which allows users to easily spawn ephemeral Polkadot/Substrate networks and perform tests against them.

The following work will improve and add more capabilities to the existing tool making it more extensible in terms of configuration parameters and utility functionalities.

### Project Details

**Zeeve Larch** can currently can do a deployment with main configurations but still lacks many other configuration parameters that were introduced during the previous development cycle and guided declarative testing input.
The following development will result in rich configuration parameters and guided declarative testing input, along with Monitoring support in Kubernetes based deployments.

**Mocks**

- Node Groups (Mock)

  ![Node Groups](https://raw.githubusercontent.com/Zeeve-App/larch/main/docs/assets/node_groups_mock.png)

- Collator Groups (Mock)

  ![Collator Groups](https://raw.githubusercontent.com/Zeeve-App/larch/main/docs/assets/collator_groups_mock.png)

- Config Download (Mock)

  ![Download](https://raw.githubusercontent.com/Zeeve-App/larch/main/docs/assets/config_download_mock.png)

- Upload Config to template (Mock)

  ![Upload](https://raw.githubusercontent.com/Zeeve-App/larch/main/docs/assets/config_import_mock.png)

- `zndsl` UI design

  ![zndsl_mock](https://raw.githubusercontent.com/Zeeve-App/larch/main/docs/assets/zndsl_mock.png)

**Technology stack** would be same as we used earlier for the project:
- NodeJS
- SQLite
- ReactJS
- TailwindCSS
- Lerna
- Zombienet libraries and binary
- Kubernetes & Podman
- Prometheus, Grafana

**Core Components**
- Larch Backend
  - Consists of API's, UI bundle and network management logic.
- Larch UI
  - GUI of Larch which will bundled and compiled within Larch Backend for serving the UI.
- Larch CLI
  - The CLI component of Larch, starts the Larch service and provide other helper functionalities.

The core components are compiled into a single executable binary, which can directly be run on any Linux x86_64 machine.

**Architecture**

![Larch Architecture](https://raw.githubusercontent.com/Zeeve-App/larch/main/docs/assets/larch_architecture.png)

The proposed work will implement utility functions like import/export of configurations, logs download and add more Zombienet configuration parameters to the multiple services along with monitoring support for K8 based deployments. Podman based deployment will be maintained with major focus will on Kubernetes based deployment.

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  - **Zeeve Larch** improves the Polkadot/Substrate-based network testing done by Zombienet by providing a GUI layer to it.
- Target Audience
  - Parachain developers, Polkadot/Substrate based Network Deployment teams
- **Zeeve Larch** resolves the need for GUI layer for Zombienet project.
- Currently, there is no similar project to **Larch** in the Substrate/Polkadot/Kusama ecosystem, the closet is Zombienet which we are utilizing and building upon.

## Team :busts_in_silhouette:

### Team members

- Sankalp Sharma
- Jasti Sri Radhe Shyam
- Supravat Samanta
- Gowrish

### Contact

- **Contact Name:** Ghan Vashishtha
- **Contact Email:** ghan@zeeve.io
- **Website:** www.zeeve.io

### Legal Structure

- **Registered Address:** 1603 Capitol Ave Ste 310, Cheyenne 82001, WY
- **Registered Legal Entity:** Zeeve Inc.

### Team's experience

Founded by a team of experienced professionals and entrepreneurs from industry, Zeeve's co-founders collectively have over 45+ years of experience in technology, product development, and various business verticals. Zeeve has built an enterprise-grade no-code Blockchain Infrastructure Automation platform that enables Enterprises, Blockchain Startups, Blockchain Consulting Companies and Web3 Developers to deploy Blockchain nodes and Decentralised Apps within minutes, and manage them with advanced analytics and real-time alerts. In June 2022, the Startup raised $2.65 Million in a Seed Round from Leo Capital and Blu Ventures. It plans to deploy the funds towards product development, augmenting the technology team and enhancing its reach among DApp developers and global corporations, please consider visiting our prior [work](https://www.zeeve.io/platform).

### Team Code Repos

- https://github.com/Zeeve-App
- https://github.com/Zeeve-App/larch
- https://github.com/Zeeve-App/supernets2-data-availability
- https://github.com/Zeeve-App/supernets2-contracts
- https://github.com/Zeeve-App/ink-playground
- https://github.com/Zeeve-App/sawtooth-artifacts
- https://github.com/Zeeve-App/Zeeve-read-the-docs


Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/radhe-zeeve
- https://github.com/supravat-zeeve
- https://github.com/gowrishZeeve
- https://github.com/sankalpZeeve

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ghan-vashishtha/
- https://www.linkedin.com/in/sankalp-sharma-502008139/
- https://www.linkedin.com/in/jastisriradheshyam
- https://www.linkedin.com/in/supravat03

## Development Status :open_book:

- **Project Link**: [Zeeve-App/larch: Zeeve Larch is a GUI frontend for Zombienet CLI](https://github.com/Zeeve-App/larch)
- **Blog**: [Zeeve's Larch: Polkadot/Substrate Zombienet Automation and Monitoring with an Intuitive GUI Tool](https://www.zeeve.io/blog/zeeves-larch-polkadot-substrate-zombienet-automation-and-monitoring-with-an-intuitive-gui-tool/)
- **Previous Grant**: [Grants-Program/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md at master · w3f/Grants-Program](https://github.com/w3f/Grants-Program/blob/master/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md)
- Automated Polkadot deployments including validator nodes, archive nodes [Polkadot Node | Launch Your Polkadot Node With Zeeve in Minutes](https://www.zeeve.io/blockchain-protocols/deploy-polkadot-node/)
- Automated Kusama deployments including validator nodes, archive nodes [Kusama | Blockchain Deployment and Management Platform | Zeeve](https://www.zeeve.io/blockchain-protocols/deploy-kusama-node/)
- Created a relay chain on substrate with some customisations done at the core to accommodate the tokenomics and custom reward mechanism [AXIA Blockchain Portal](https://axscan.axiacoin.network/#/explorer)
- Published a [blog post](https://www.zeeve.io/blog/how-to-use-substrate-to-create-parachains-in-polkadot/) about the usage and implementation of parachains
- Spoke with David Hawig, Richard Casey and Gautam Dhameja from the Parity team regarding the development of Zeeve and the Web3 Grant application

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  4
- **Total Costs:** 24,000 USD

### Milestone 1 — Monitoring Support for K8 deployments & Global config

- **Estimated duration:** 45 Days
- **FTE:**  4
- **Costs:** 7,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide the **tutorial** to that explains how a user can create a network configuration and start the network |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Monitoring for k8 based deployment | We will add Monitoring support to kubernetes based deployment. Monitoring will include basic k8 cluster resources and Polkadot parachains, collators and relay-chains metrics visualization |
| 2. | Zombienet global parameters support | Add All possible Global parameters in template creation corresponding to the supported Zombienet version [settings](https://paritytech.github.io/zombienet/network-definition-spec.html#settings) |
| 3. | In App docs update | Update in app docs to reflect the features added in the current milestone |
| 4. | Update Zombienet version | Update supported Zombienet version to latest stable version at the time of release |

### Milestone 2 — Export & Import of config and Parachain & Relaychain config 

- **Estimated duration:** 40 Days
- **FTE:**  4
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide the **tutorial** to that explains how a user can create a network configuration and start the network |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Zombienet config import & export | We will add Zombienet config import & export support of the template, for example config import as shown in the **Upload Config to template (Mock)** and **Config Download (Mock)**. While uploading the config application will validate the config format and prefill the template UI to perform further modification on existing config. `toml` and `json` formats will be supported for importing the config and `json` format will be supported for exporting the config. |
| 2. | Zombienet Parachain and Relaychain node group config support | Add all possible Parachain (not collator & collator groups) and node group configs in template creation corresponding to the supported Zombienet version [Parachains](https://paritytech.github.io/zombienet/network-definition-spec.html#parachains) & [node_groups](https://paritytech.github.io/zombienet/network-definition-spec.html#relaychain) as shown in the **Node Groups (Mock)** |
| 3. | In App docs update | Update in app docs to reflect the features added in the current milestone |
| 4. | Update Zombienet version | Update supported Zombienet version to latest stable version at the time of release |

### Milestone 3 — Zombienet `zndsl` guided setup and Collator config support

- **Estimated duration:** 50 Days
- **FTE:**  4
- **Costs:** 8,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide the **tutorial** to that explains how a user can create a network configuration and start the network |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Zombienet `zndsl` guided setup | We will implement guided input for Zombienet `zndsl` testing config based on `zndsl` spec: [Testing DSL spec - 🧟🧟🧟 ZombieNet 🧟🧟🧟](https://paritytech.github.io/zombienet/cli/test-dsl-definition-spec.html) as shown in the **`zndsl` UI design** mock |
| 2. | Zombienet Collator and Collator NodeGroup config support | Add All possible Collator and Collator NodeGroup config in template creation corresponding to the supported Zombienet version [collator_groups](https://paritytech.github.io/zombienet/network-definition-spec.html#parachains) & [collator](https://paritytech.github.io/zombienet/network-definition-spec.html#parachains) |
| 3. | In App docs update | Update in app docs to reflect the features added in the current milestone |
| 4. | Update Zombienet version | Update supported Zombienet version to latest stable version at the time of release |

## Future Plans

- We will promote the project by giving talks in the community, writing tutorials and videos.
- We will spread the project in Zeeve's developer and client community of 27K+
- We will also work closely with the developers and clients of the Parity ecosystem for getting feedback and refine our project.
- Our long-term plan is to make the tool become one of the default Parachain tools for the Parity ecosystem.
- We will maintain the Larch by fixing reported bugs, feature requests and adding new configuration & feature updates as Zombienet evolves. We will be applying for Maintenance Grant via either treasury funding or [Decentralized Futures program](https://futures.web3.foundation/) based on the suggestions of the w3f team.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Parity team / a conversation with Richard Casey.

- Previous grants: [Zeeve_zoombienet_deployment_testing_automation](https://github.com/w3f/Grants-Program/pull/1399) ( [Update Zeeve Larch team, duration and deliverables](https://github.com/w3f/Grants-Program/pull/1744) )
