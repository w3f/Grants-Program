# Unified deployment for the collator node

- **Team Name:** Blaize.tech
- **Payment Address:** 0x7a83b5F20e69dfFe2c8FC942b54b159460C3D3d2
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is the response to the [Polkadot Collator Setup](https://github.com/w3f/Grants-Program/blob/master/rfps/open/polkadot-collator-setup.md) RFP

### Overview

The main goal is to provide production-ready deployment for the Collator node that could work for any parachain with very few adjustments. 

There are a lot of parachains in the substrate ecosystem, and each of them has its guide on how to spin up a collator node [astar](https://docs.astar.network/docs/nodes/collator/secure_setup_guide/), [datahighway](https://dev.datahighway.com/docs/tutorials/tutorials-nodes-collators-setup), [moonbeam](https://docs.moonbeam.network/node-operators/networks/run-a-node/docker/#collator), [hydradx](https://docs.hydradx.io/collator_setup/), [oak](https://docs.oak.tech/docs/setup-collator-node/).
Most of those guides are just examples of how to start a collator for testing purposes and are not production-ready. That complicates life for those who want to manage collators for several parachains because each new parachain requires an entirely new setup. We aim to pack a common part of infrastructure and Collator node deployment into functional building blocks that could be used with any parachain and make it highly extendable and configurable for each specific case. 

Every collator node has common steps to run it that do not depend on concrete parachain: 
* build 
* containerize 
* terraform infrastructure 
* deploy

All of that could be automated and templated for all existing and parachains future. Even if building and containerization are relatively simple tasks, most teams handle them in their own way, sometimes far away from IaC best practices. Unfortunately, there is still no unified way approved \ recommended by Web3 so we aim to fill this gap.

### Project Details

First, we want to start from two unified Dockerfile templates for building and running collator node that suits best practices like minimal runtime, no root user, minimal port exposure, etc. Those templates could be easily extended with all required dependencies if needed.

The next step is to provide reproducible and configurable infrastructure via terraforming one of the supported clouds. In most cases, Collator nodes have similar requirements on infrastructure, but in case of special requirements, it would be pretty easy to configure terraform scripts for the needs.

Last step that requires most of the confgurability is a deployment step which would be handled by ansible scripts. We would provide unified deployment with configuration for the relay chain and common Collator parameters.

#### Components

* Terraform deployment of the Collator infrastructure to the corresponding AWS and GCP clouds
* Ansible scrips for the configurable deployment of a Collator node for different parachains

#### Technologies
* Docker as virtualization for the collator node
* Terraform as IaC for the reliable and reproducible infrastructure deployment
* Ansible as deployment automatization tool

### Ecosystem Fit

Currently, most parachains provide a setup guide on how to run the Collator on bare metal; however, it is neither automatized (hence non-reproducible) nor suits high availability standards. Our solution will provide most parachains with the out-of-the-box instrument for spinning up Collator. That would increase the reliability of the existing parachains as they may utilize reliability, high availability and scaling of Kubernetes. As well will significantly reduce the time and cost of spinning up the Collator for those who want to support several parachains 

## Team :busts_in_silhouette:

### Team members

- Mark Tsyrulnyk - Blockchain Solutions Architect at blaize.tech, CTO at momo.finance
- Oleksandr Bortnik - Senior DevOps at blaize.tech

### Contact

- **Contact Name:** Pasha Bergman
- **Contact Email:** pasha@blaize.tech
- **Website:** https://blaize.tech/

### Legal Structure

- **Registered Address:** Sichovykh Striltsiv St, 20, Dnipro, Dnipropetrovsk Oblast, 49000. Ukraine
- **Registered Legal Entity:** LIMITED LIABILITY COMPANY "BLAIZE TECHNOLOGY"

### Team's experience

Blaize is a blockchain development company with 5+ years of experience and 60 people on board. Core expertise: DeFi, app development, smart contracts development, and security audits.

### Team Code Repos

- https://blaize.tech/clients/
- https://github.com/markblaize, https://github.com/siexp
- https://github.com/babebort-blaize

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/siexp

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2.5 months
- **Full-Time Equivalent (FTE):**  FTE 1.5
- **Total Costs:** 24500 USDT

### Milestone 1 Unify collator node deployment

- **Total Estimated Duration:** 2.5 months
- **Full-Time Equivalent (FTE):**  FTE 1.5
- **Total Costs:** 24500 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Documentation includes a comprehensive guide of deployment options, recommended infrastructure and minimal requirements, step-by-step guide on how to deploy, maintain and monitor the collator node |
| **0c.** | Testing and Testing Guide |	Core functions will be fully covered by comprehensive infrustructure tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Article | We will publish an article that explains the architecture, possible tweaks and benefits of using a unified collator deployment solution |
| 1. | Unified Infrastructure as Code | Terraforming scrips and deployment scripts for spinning up a Collator node on AWS and GCP clouds |
| 1a. | Terraform scripts for setting up Collator infrastructure | Configurable deployment via terraform to Kubernetes cluster running on AWS and GCP clouds |
| 1b. | Ansible scripts for spinning up Collator node | Configurable scripts to run collator node over the infrastructure |

## Future Plans

* Provide more vendor-specific deployment like Azure, Vultr, IBM Cloud etc. 
* Provide different tiers for Availability \ SLA for the collator node

## Additional Information :heavy_plus_sign:
