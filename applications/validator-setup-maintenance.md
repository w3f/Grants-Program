# W3F Grant Proposal

- **Project Name:** Validator Setup Maintenance
- **Team Name:** Popular Coding LLC.
- **Payment Address:** 0x98d8b52Eb09db91f92D01F0DF40cFa3F0e172c7f (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:
This is an application in response to the [validator-setup-maintenance RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/validator-setup-maintenance.md).

### Overview

In response to the validator setup maintenance RFP, our goal is to decrease the complexity of deploying a polkadot validator on any of the major cloud providers (AWS, Azure and GCP) and increase the maintainability of the repository. 

Our team has extensive experience with cloud technologies and has seen the benefits that reliable automated deployments and metrics provide to customers.  Seeing this RFP and the validator setup repository moving into an inactive state, presents us with an opportunity to impact the Polkadot and Kusama ecosystem and open the validator community to less experienced participants.

### Project Details

Deliverables
- Terraform remote backend and metrics-based notification 
- In repo Deploy to Cloud Buttons on AWS & Azure
- Additional Cloud Provider Support - Alibaba Cloud
- CI/CD Pipelines for maintenance and updates
- Docker Deployment

### Ecosystem Fit

This project fits into the Validator portion of the Polkadot and Kusama ecosystem.

The target audience for our project is anyone interested in running a Polkadot or Kusama validator.

Our project meets the need of having a reliable setup for deploying validators to popular cloud providers and providing quality of life additions like infrastructure metrics and downtime notifications.

This is a proposal to update and extend the existing validator setup repository.

## Team :busts_in_silhouette:

### Team members

- Patrick Gryczka 
- GinSiu Cheng

### Contact

- **Contact Name:** Patrick Gryczka
- **Contact Email:** patrick@popularcoding.com

### Legal Structure

- **Registered Legal Entity:** Popular Coding LLC.
- **Registered Address:** 8 The Green
STE D
Dover, DE 19901 

### Team's experience

The team is comprised of two enterprise architects with extensive experience creating reliable deployment pipelines for workloads across major cloud providers.

#### Patrick Gryczka 
AWS Solutions Architect - Amazon Web Services
* 5 years of experience working for major cloud providers architecting, developing, and deploying cloud workloads, prior to that experience as a consulting software engineer
* Experience with DevOps and tooling such as GitHub Actions and Azure DevOps
* Experience with Infrastructure as Code across both AWS (Cloud Formation Templates) and Azure (ARM Templates) and third party IaC providers like Terraform

#### Ginsiu Cheng 
Principal Cloud Solutions Architect - Microsoft
* Experienced technical leader in large scale multi-year transformational initiatives/projects
* 10 year of software development (C++, Python, PHP, Java, C#, JS) and devops (Azure Devops, Github Actions, IaC - Terraform, Cloudformation, ARM) experience across Fortune 500 customers

### Team Code Repos

- https://github.com/Popular-Coding

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/Gryczka
- https://github.com/GinSiuCheng

### Team LinkedIn Profiles 

- https://www.linkedin.com/in/gryczka/
- https://www.linkedin.com/in/ginsiucheng/

## Development Status :open_book:

[**RFP** - Validator Setup Maintenance](https://github.com/w3f/Grants-Program/blob/master/rfps/validator-setup-maintenance.md)

**Relevant Work**
* [Azure AKS Deployment Repository](https://github.com/GinSiuCheng/private-aks-deployment) (Not Validator Specific)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4-5 months 
- **Full-Time Equivalent (FTE):** 2 FTEs
- **Total Costs:** $50,000 USD
### Milestone 1 Terraform Remote Backend and Metrics-based notification implementation

- **Estimated duration:** 1 Month
- **FTE:**  2
- **Costs:** $10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation for remote backend configurations | We will provide inline documentation of the code and a basic tutorial on configuring remote backends for terraform leveraging Azure Blob Storage, Google Cloud Storage and AWS S3 Storage. |
| 0c. | Inventory list of metric-based alerts for AWS, Azure and GCP | We will provide an inventory list of metrics based alerts for Azure, AWS and GCP that should be configured based on the infrastructure deployed to notify end users of operational downtimes and errors. |
| 1. | Terraform remote backend implementation | We will provide implementation examples for Azure, AWS and GCP storage for Terraform remote backend that includes CLI commands to instantiate the cloud storage needed, terraform configurations for the remote backends and protection mechanisms (resource-lock) to prevent accidental deletion. |  
| 2. | Metrics-based alerts and notifications | We will create metrics-based alerts and notifications in terraform for Azure, AWS and GCP based on the inventory list provided, metrics available and terraform cloud provider support. |  

### Milestone 2 — In Repo Deploy to Cloud Buttons - AWS & Azure

- **Estimated Duration:** 2 months
- **FTE:**  2
- **Costs:** $15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Overview of cloud deployment button - Documented through a readme page | Provide an overview documentation on code structure for AWS/Azure cloud deploy button |
| 1a. | Documentation on AWS deployment button | We will provide inline documentation on the deployment button for AWS | 
| 1b. | AWS deployment button for validator | Rewrite existing assets/scripts to match cloudformation deployment button model for AWS deploy | 
| 2a. | Documentation on Azure deployment button | We will provide inline documentation on the deployment button for Azure | 
| 2b. | Azure deployment button for validator | Rewrite existing assets/scripts to match ARM deplyoment model for Azure deploy |  

### Milestone 3 — Additional Cloud Provider Support - Alibaba Cloud

- **Estimated Duration:** 1 Month
- **FTE:**  2
- **Costs:** $5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation on Alibaba Cloud Setup | We will provide inline documentation of the code and a basic tutorial on setting up an Alibaba Cloud Validator with remote backend |
| 1. | Terraform remote backend implementation | We will provide implementation examples for Alibaba Cloud storage remote backend with CLI commands |
| 2. | Alibaba Cloud Validator Implementation | We will provide the terraform implementation for Alibaba Cloud Validator components | 
| 3. | Alibaba Cloud Validator Deployment | We will provide modifications needed for validator script deployments to Alibaba Cloud | 

### Milestone 4 — CI/CD Pipelines for maintenance and updates

- **Estimated Duration:** 2 Month
- **FTE:**  2
- **Costs:** $10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation for CI/CD Pipelines | We will provide inline documentation of the pipeline YAML files and a read me explaining the Pipelines steps along with a basic tutorial on configuring the GitHub Secrets necessary for the pipeline (ie Cloud Credentials, Validator Keys, etc). |
| 1. | GitHub Actions for Continuous Deployment of Polkadot Releases | We will provide implemented pipelines for AWS, Azure, and GCP deployments. |  
| 1a. | GitHub Actions for Continuous Deployment of Polkadot Releases to AWS | We will provide implemented pipelines for AWS deployment. | 
| 1b. | GitHub Actions for Continuous Deployment of Polkadot Releases to Azure | We will provide implemented pipelines for Azure deployment. | 
| 1c. | GitHub Actions for Continuous Deployment of Polkadot Releases to GCP | We will provide implemented pipelines for GCP deployment. | 

### Milestone 5 - Docker Deployment
- **Estimated Duration:** 2 Month
- **FTE:**  2
- **Costs:** $10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation for Docker Images | We will provide inline documentation of the code and a basic tutorial on configuring remote backends for terraform leveraging Azure Blob Storage, Google Cloud Storage and AWS S3 Storage. |
| 1a. | Deploy Docker Image on AWS EKS Fargate | Support for a serverles deployment option on AWS where underying infrastructure is abstracted away. |  
| 1b. | Deploy Docker Image on Azure Container Instance |  Support for a serverles deployment option on Azure where underying infrastructure is abstracted away.  |  
|2.| Automated pipelines for CI/CD for Serverless Docker Deployments| GitHub Actions Pipelines for deployment of latest versions of Polkadot docker image to AWS and Azure. |
## Future Plans

The near term goal for this project is to improve the usability of the Validator Setup repository and simplify deployments across multiple cloud providers.

Long term, the goal is to have this repository in a stable state where any Polkadot releases can be deployed reliably.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
Web3 Foundation Website