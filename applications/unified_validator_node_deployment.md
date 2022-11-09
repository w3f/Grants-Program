# Unified deployment for the validator node

- **Team Name:** Blaize.tech
- **Payment Address:** 0x7a83b5F20e69dfFe2c8FC942b54b159460C3D3d2
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is the response to the [polkadot-validator-setup maintenance](https://github.com/w3f/Grants-Program/blob/master/rfps/open/validator-setup-maintenance.md) RFP

### Overview

The core goal is to provide production-ready deployment for the Polkadot validator node. 

At the current stage, there is no unified guide on how to set up a validator node for the production-ready environment. Attempt for the automatization via enterprise-level tools like "Helm" is done in [Polkadot Validator Setup](https://github.com/w3f/polkadot-validator-setup) repository, but unfortunately, this repository was archived and not actual anymore.

We will update [Polkadot Validator Setup](https://github.com/w3f/polkadot-validator-setup) repository with a guide and corresponding up-to-date scripts for the configuring, deployment of the validator node, providing telemetry and monitoring. That will give to community simpler and better quality instruments for running their node.

### Project Details

#### Components

* Terraform deployment for the Validator node which provides configurable deployment via terraform to Kubernetes cluster running on AWS and GCP clouds
* Terraform deployment for the Telemetry node is an additional role to deploy telemetry and corresponding frontend
* Terraform deployment for the Monitoring is an additional role to deploy Prometheus and Grafana as a monitoring solution

#### Technologies
* Docker as virtualization for the validator, telemetry, and monitoring
* Terraform as IaC for the reliable and reproducible infrastructure deployment
* Ansible as deployment automatization tool
* Prometheus and grafana as monitoring solution

### Ecosystem Fit

Currently, the Polkadot validator setup has no unified production-ready solution, making onboarding of validator node maintenance challenging for most operators. [Official guide](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot) provides an excellent step-by-step solution for the bare-metal setup with corresponding steps for securing and monitoring; however, it neither automatized (hence non-reproducible) nor suits high availability standards. 

As well, such a solution fits W3F goals itself. Once the community receives a simple instrument of quality maintenance for the validator, that will both increase the reliability of the current nodes and attract new ones because it lowers the entry level for the programs like [Thousand Validators Program](https://wiki.polkadot.network/docs/thousand-validators)

## Team :busts_in_silhouette:

### Team members

- Mark Tsyrulnyk - Blockchain Solutions Architect at blaize.tech, CTO at omomo.finance
- Oleksandr Bortnik - Senior DevOps at blaize.tech

### Contact

- **Contact Name:** Pasha Bergman
- **Contact Email:** pasha@blaize.tech
- **Website:** https://blaize.tech/

### Legal Structure

- **Registered Address:** Sichovykh Striltsiv St, 20, Dnipro, Dnipropetrovsk Oblast, 49000. Ukraine
- **Registered Legal Entity:** LIMITED LIABILITY COMPANY “BLAIZE TECHNOLOGY”

### Team's experience

Blaize is a blockchain development company with 5+ years of experience and 60 people on board. Core expertise: DeFi, dApp development, smart contracts development, and security audits.

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
- **Total Costs:** 27,000 USDT

### Milestone 1 Basic validator node deployment AWS

- **Total Estimated Duration:** 1.5 months
- **Full-Time Equivalent (FTE):** FTE 1.5
- **Total Costs:** 12900 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Documentation includes a comprehensive guide of deployment options, recommended infrastructure and minimal requirements, step-by-step guide on how to deploy, maintain and monitor the validator node |
| **0c.** | Infrastructure budget | Detailed budges for the infrastructure required by the validator node |
| 1. | Unified Infrastructure as Code | Terraforming scrips and deployment scripts for spinning up a Collator node on AWS cloud |
| 1a. | Terraform scripts for setting up Validator infrastructure | Configurable deployment via terraform to Kubernetes cluster running on AWS cloud |
| 1b. | Ansible scripts for running up Validator node | Configurable deployment via Ansible to Kubernetes cluster running on AWS cloud |

### Milestone 2 Advanced validator node deployment to AWS & GCP

- **Total Estimated Duration:** 1.0 months
- **Full-Time Equivalent (FTE):** FTE 1.5
- **Total Costs:** 14100 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 2. | Unified Infrastructure as Code | Terraforming scrips and deployment scripts for spinning up a Collator node on GCP and AWS clouds |
| 2a. | Terraform scripts for setting up Validator infrastructure | Configurable deployment via terraform to Kubernetes cluster running on GCP cloud |
| 2b. | Terraform scripts for setting up Telemetry | Additional role to deploy telemetry node infrastructure |
| 2c. | Ansible script for deployment Telemetry | Configurable deployment via Ansible to Kubernetes cluster running on AWS or GCP cloud |
| 2d. | Terraform scripts for setting up Monitoring solution | Additional role to deploy monitoring solution based on Prometheus and Grafana infrastructure |
| 2e. | Ansible script for deployment Monitoring solution | Configurable deployment via Ansible to Kubernetes cluster running on AWS or GCP cloud |

## Future Plans

* Provide more vendor-specific deployment like Azure, Alibaba Cloud, [OVS](https://github.com/w3f/polkadot-validator-setup/issues/116), [Vultr](https://github.com/w3f/polkadot-validator-setup/issues/159), IBM Cloud etc. 
* Provide different tiers for Availability \ SLA for the validator node
* "One-click" [localnet environment setup](https://github.com/w3f/polkadot-validator-setup/issues/161)

## Additional Information :heavy_plus_sign:
