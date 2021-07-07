# W3F Open Grant Proposal

* **Project Name:** Open Node Framework
* **Team Name:** Phala Network
* **Payment Address:** DAI at 0x50DC97D0345d61B4D096e15313d50b6506972e5F

## Project Overview :page_facing_up: 

### Overview

**Open Node Framework** is an end-to-end DevOps (SRE) solution to deploy a Substrate node network for staking and other purposes. It's designed to address high availability, scalability, and flexibility, using the modern technology stack.

### Project Details

While developing a Substrate based blockchain, we found it challenging to operate and maintain different types of nodes. Validators (or collators in the future) require high availability and key security. Bootnodes and RPC nodes require high performance and flexible scalability. So Open Node Framework has the following design purpose:

- High Availability: Add redundancy to nodes (validators & collators) for higher security and robustness
- Flexibility: Integrate with any Substrate based blockchain easily
- Multipurpose: Run validators, collators, full nodes, bootstrap nodes, or RPC nodes

There are a few existing projects that can partially meet the above requirements. [Polkadot Secure Validator](https://github.com/w3f/polkadot-secure-validator) implements a validator setup for Polkadot and Kusama coming with a monitoring system [Polkadot K8s Monitor](https://github.com/ironoa/polkadot-k8s-monitor). [Polkadot Deployer](https://github.com/w3f/polkadot-deployer) supports Docker-based network deployment and monitoring but is designed for bootstraping nodes. Both of them require some additional work to integrate with other Substrate blockchains. [Gantree](https://github.com/gantree-io/) is a W3F Grant funded Substrate DevOps framework supporting customized Substrate node. However it lacks the support of node HA, and like the other two projects, doesn't support cross-datacenter deployment, and is not built on modern Kubernetes stack.

Open Node Framework wants to feature:

- Multi IT infrastructure
    - Native Kubernetes architecture
    - Cross-datacenter / cloud providers deployment with Google Anthos
    - Support multiple cloud providers with Terraform
    - Scale up to a large node network easily
- High availability
    - Validator redundancy
    - DDoS mitigation
    - Upgradable node binary
    - Blockchain database backup and recovery
- Hardened security
    - Ops jump servers / VPN behind a firewall
    - RPC authentication
    - Session key management by KMS and periodical key rotation
- Monitoring
    - Dashboard and data visualization with Prometheus and Graphana
    - ElasticSearch stack for metrics, logging, tracing
- Flexible node integration
    - Replacible Docker images for node binaries
    - Restful RPC with @substrate/api-sidecar

![](https://i.imgur.com/VeoV3Oh.png)

Open Node Framework has its MVP implementaion availabe at our [Github Repo](https://github.com/Tenet-X/open-node). It implemented a basic infrastructure as shown in the above diagram. The components are deployed in a Kubernetes cluster with the binaries defined by Docker images. It supports both Terraform and Google GKE deployment, and it has been tested on Polkadot and Phala Network testnets.

In this grant, we are going to expand Open Node Framework in aspects:

1. Enable parachain architecture (the MVP only supports standalone Substrate blockchains)
2. HA validator setup
3. Support more cloud service providers by default
4. Cross-datacenter deployment with Multicloud solution
5. Better dashboard and data visualization frontend

We are interested in the following areas but want to leave them for future work:

1. Secure Enclave protected Key Management Service
2. Extend to a storage indexing tool
3. Comprehensive UI for the end users

Open Node Framework doesn't aim to build everything from scratch. We prefer to utilize the existing open source tools and potentially contribute to them. The candidates are:

- Deployment
    - Helm deployment template: [w3f/polkaodt-chars](https://github.com/w3f/polkadot-charts)
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

Open Node Framework provides the infrastructure to deploy any Substrate based blockchain for multiple purposes, including running a bootstrap network, a validator cluster, a full node RPC service network, or a temporary simulation network for experiments, with all the essential infrastructure. It allows other Substrate blockchains to integrate with it easily.

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

* Open Node Framework: https://github.com/Tenet-X
* Phala Network team repo: https://github.com/Phala-Network

### Team LinkedIn Profiles

* https://www.linkedin.com/in/hang-yin-167012a7/
* https://www.linkedin.com/in/jun-jiang-5b9b4153/

## Development Status :open_book: 

The first version of Open Node Framework is available on [Github](https://github.com/Tenet-X). It has the basic framework to run validators. Please see [Project Details](#Project-Details).

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 22,000 USD


### Milestone 1 - Basic features and operating security improvement

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Design docs including the architecture of the system and the design choices (including which open source projects to integrate). Inline documentation of the config files. |
| 0c. | Testing Guide | A guide describing how to run the tests covering the cases in 0b. |
| 0d. | Article/Tutorial | We will publish a tutorial and an workshop that explains how the project can be used to deploy different types of blockchain network. |
| 1. | Operating scripts | The scripts to: scale up / down the nodes and get direct access to the nodes |
| 2. | Authenticated RPC | Add the authentication layer to the node RPC for node ops |
| 3. | Parachain support | Add parachain config. Allow to put relay chain validators or parachain collators directly behind a firewall for Collator Protocol. |
| 4. | Custom Substrate support | Enable custom Substrate blockchain integration with the example configs to integrate with Substrate sample node (substrate/node/cli) |


### Milestone 2 — Validator high availability

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 8,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide high availability and session key management design docs, inline documentation of the config files and a basic tutorial that explains how to add HA setup, backup nodes, and alerts to the basic configurations as in M1. |
| 0c. | Testing Guide | A guide describing how to run the tests covering the cases in 0b. |
| 0d. | Article/Tutorial | We will extend the workshop to show how to deploy a hardened node network. |
| 1. | Backup node and recovery | Add sync node type and database backup & recovery routines. Add scripts to trigger and minotor the process. |
| 2. | Session key management | Add a database (or mountable drive) to store the session keys and add routines to migrate keys between validators (or mount the keystore db to the assigned validators) |
| 3. | Validator alerts | Define the validator related warnings and metrics and add them to the alerm manager. |


### Milestone 3 - Multicloud deployment

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the config files and a basic tutorial that explains how to deploy a node network to AWS and GCP. |
| 0c. | Testing Guide | A guide describing how to run the tests covering the cases in 0b. |
| 0d. | Article/Tutorial | We will extend the workshop to explains how to deploy the network on AWS and GCP. |
| 1. | Multicloud | Integrate Anthos to the kubernetes configurations. |


### Milestone 4 - More deployment modes

* **Estimated Duration:** 0.5 month
* **FTE:** 1
* **Costs:** 2,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the config files for more complex network setup, including bootstrap nodes, API nodes. and simulation network. |
| 0c. | Testing Guide | A guide describing how to run the tests covering the cases in 0b. |
| 0d. | Article/Tutorial | We will extend the workshop to show how to set up node networks for different purpose. |
| 1. | Bootstrap nodes | Configurations for bootstrap node and firewall deployment |
| 2. | API nodes | L4 load balancer for API nodes and JSON-RPC proxy for API permission control. |
| 3. | Simulation network | Configurations for bootstraping a scalable simulation network and expose the RPCs. |

## Future Plans

Besides the future work we described in [Project Details](#Project-Details), the general plan is to make Open Node Framework an open and friendly open source project, lowering the barrier for Susbstrate developers to run their network. So we intend to use the project as a start point to build a developer community, and attract more contributors to sustain it.
