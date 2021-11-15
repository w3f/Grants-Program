# W3F Open Grant Proposal

* **Project Name:** Open Node Framework
* **Team Name:** Phala Network
* **Payment Address:** DAI at 0x50DC97D0345d61B4D096e15313d50b6506972e5F

## Project Overview :page_facing_up: 

### Overview

**Open Node Framework** is an end-to-end DevOps (SRE) solution to deploy a Substrate node network for staking and other purposes. It's designed to address high availability, scalability, and flexibility, using the modern technology stack.

### Project Details

While developing a Substrate based parachain, we found it challenging to operate and maintain different types of nodes. Validators and collators require high availability and key security. Bootnodes and RPC nodes require high performance and flexible scalability. So Open Node Framework has the following design purpose:

- Parachain first: Focus on the requirement of parachains
- Flexibility: Integrate with any Substrate based blockchain easily
- Multipurpose: Run validators, collators, full nodes, bootstrap nodes, or RPC nodes
- High Availability: Add redundancy to nodes (validators & collators) for higher security and robustness

There are a few existing projects that can partially meet the above requirements. Among them, [Polkadot Deployer](https://github.com/w3f/polkadot-deployer) is a k8s-based network deployment and monitoring tool. However, it's mainly designed for bootstraping and operating a full Polkadot, which may not meet the typical requirement of running a parachain. Therefore we think it's a good idea to iterate on it and make it parachain ready and address the features mentioned above.

Tere are other interesting projects as well. [Polkadot Secure Validator](https://github.com/w3f/polkadot-secure-validator) implements a validator setup for Polkadot and Kusama coming with a monitoring system [Polkadot K8s Monitor](https://github.com/ironoa/polkadot-k8s-monitor). [Gantree](https://github.com/gantree-io/) is a W3F Grant funded Substrate DevOps framework supporting customized Substrate node. However it lacks the support of node HA, and like the other two projects, doesn't support cross-datacenter deployment, and is not built on modern Kubernetes stack.

Open Node Framework wants to feature:

- Multi IT infrastructure
    - Native Kubernetes architecture
    - Cross-datacenter / cloud providers deployment with a central dashboard for daily management
    - Support multiple cloud providers with Terraform
    - Scale up to a large node network easily
- High availability
    - Upgradable node binary
    - Blockchain database backup and recovery
    - DDoS mitigation
    - Collator and validator redundancy
- Hardened security
    - Ops jump servers / VPN behind a firewall
    - RPC authentication
- Monitoring
    - Dashboard and data visualization with Prometheus and Graphana
    - Grafana / Loki stack for metrics, logging, tracing
- Flexible node integration
    - Replacible Docker images for node binaries

![](https://i.imgur.com/VeoV3Oh.png)

Open Node Framework has its MVP implementaion availabe at our [Github Repo](https://github.com/Tenet-X/open-node). It implemented a basic infrastructure as shown in the above diagram. The components are deployed in a Kubernetes cluster with the binaries defined by Docker images. It supports both Terraform and Google GKE deployment, and it has been tested on Polkadot and Phala Network testnets.

In this grant, we are going to expand Open Node Framework in aspects:

1. Switch the code base to a fork of w3f/polkadot-deployer
2. Enable parachain and 3rd party binary config
3. Cross-datacenter deployment with a central place to manage and view the dashboard
4. HA collator validator setup

We are interested in the following areas but want to leave them for future work:

1. Secure Enclave protected Key Management Service
2. Integrate with indexing tools like SubQuery
3. Comprehensive UI for the end users

Open Node Framework doesn't aim to build everything from scratch. We prefer to utilize the existing open source tools and potentially contribute to them. We plan to work on a fork of [Polkadot Deployer](https://github.com/w3f/polkadot-deployer), and contribute it to the upstream if possible.

The other building block candidates are:

- Raft-based validator availablity
    - Consul validator failover: [protofire/polkadot-failover-mechanism](https://github.com/protofire/polkadot-failover-mechanism)
- Monitoring dashboard
    - [ironoa/polkadot-k8s-monitor](https://github.com/ironoa/polkadot-k8s-monitor)
    - [SimplyVC/panic_polkadot](https://github.com/SimplyVC/panic_polkadot)
- API Serving
    - [Joystream/hydra](https://github.com/Joystream/hydra)
    - [subquery/subql](https://github.com/subquery/subql)
    - [insight-w3f/terragrunt-polkadot](https://github.com/insight-w3f/terragrunt-polkadot)

### Ecosystem Fit 

Open Node Framework provides the infrastructure to deploy any Substrate based parachain or standalone blockchain for multiple purposes, including running a bootstrap network, a validator cluster, a full node RPC service network, or a temporary simulation network for experiments, with all the essential infrastructure. It allows other Substrate blockchains to integrate with it easily.

The project serves standalone the Substrate blockchain, parachain, and relay chain operators, offering them a flexible and user-friendly infrastructure framework with production best practice.

## Team :busts_in_silhouette:

### Team members

* Hang Yin: Lead & Software Engineer
* Jun Jiang: Project Manager & Software Architect

### Contact

* **Contact Name:** Hang Yin
* **Contact Email:** hangyin@phala.network
* **Website:** https://phala.network

### Legal Structure 

* **Registered Address:** 3 FRASER STREET #05-25 DUO TOWER SINGAPORE (189352)
* **Registered Legal Entity:** HASHFOREST TECHNOLOGY PTE. LTD.

### Team's experience

Open Node Framework is an open source project initiated by core members of [Phala Network](https://phala.network) and other contributors. Phala Network is a confidentiality layer for Polkadot that provides general purpose confidential smart contract to parachains on Polkadot and Kusama. The Phala team got two W3F General Grants: [pDiem](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/pLIBRA.md) and [Web3 Analytics](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/web3_analytics.md). Phala has launched 3 testnets and got 1200+ nodes and 2600+ registered miners.

### Team Code Repos

* Open Node development repo: https://github.com/Phala-Network/open-node-deployer
* Open Node MVP: https://github.com/Tenet-X
* Phala Network team repo: https://github.com/Phala-Network
### Team LinkedIn Profiles

* https://www.linkedin.com/in/hang-yin-167012a7/
* https://www.linkedin.com/in/jun-jiang-5b9b4153/

## Development Status :open_book: 

The MVP of Open Node Framework is available on [Github](https://github.com/Tenet-X) but we are going to switch to build on polkadot-deployer [on our fork](https://github.com/Phala-Network/open-node-deployer) instead. Please see [Project Details](#Project-Details).

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 22,000 USD

In the milestone deliverable table, the features marked with _"(addition)"_ means add-on feature to the upstrea polkadot-deployer, and _"(integration)"_ means some changes in the upstream are required.

### Milestone 1 - Basic features and operating security improvement

* **Estimated Duration:** 1 month (ETA: Dec 15, 2021)
* **FTE:**  4
* **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Design docs including the architecture of the system and the design choices (including which open source projects to integrate). Inline documentation of the config files. |
| 0c. | Testing Guide | A guide describing how to run the tests covering the cases in 0b. |
| 0d. | Article/Tutorial | We will publish a tutorial and an workshop that explains how the project can be used to deploy different types of blockchain network. |
| 1. | Parachain support | Add parachain config support. (addition) |
| 2. | Custom Substrate support | Enable custom Substrate blockchain integration with the example configs to integrate with Substrate sample node (substrate/node/cli) (addition) |
| 3. | Operating scripts | The scripts to: scale up / down the nodes (addition) and get direct access to the nodes (integration) |
| 4. | Authenticated RPC | Add the authentication layer to the node RPC for node operation (integration) |

### Milestone 2 — Advanced Features

* **Estimated Duration:** 1 month (ETA: Jan 15, 2021)
* **FTE:**  4
* **Costs:** 12,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide high availability and session key management design docs, inline documentation of the config files and a basic tutorial that explains how to add HA setup, backup nodes, and alerts to the basic configurations as in M1. |
| 0c. | Testing Guide | A guide describing how to run the tests covering the cases in 0b. |
| 0d. | Article/Tutorial | We will extend the workshop to show how to deploy a hardened node network. |
| 1. | Backup node and recovery | Add sync node type and database backup & recovery routines. Add scripts to trigger and minotor the process. (addition) |
| 2. | Session key management | Add the script to interact with the node and the blockchain to generate and rotate the session keys, and add routines to migrate keys between validators and collators (or mount the keystore db to the assigned validators) (addition) |
| 3. | Alerts, monitoring, and logging | Implement the monitoring infrastructure with Prometheus and Loki to collect metrics and logs. Define the collator / validator related warnings and metrics and add them to the alerm manager. (integration) |
| 4. | Grey release | Integrate with CI/CD pipeline and enable greyscale release inside the cluster. (addition) |
| 5. | HPA scaling | Automatically scale the storage and the size of the cluster based on load of the nodes. (addition) |
| 6. | More deployment modes | Templates to deploy bootstrap nodes, API nodes, and simulation network. (addition) |

## Future Plans

Besides the future work we described in [Project Details](#Project-Details), the general plan is to make Open Node Framework an open and friendly open source project, lowering the barrier for Susbstrate developers to run their network. So we intend to use the project as a start point to build a developer community, and attract more contributors to sustain it.
