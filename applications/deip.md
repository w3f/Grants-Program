# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** DEIP IP Management/Governance Module
* **Proposer:** [aliakseikulik](https://github.com/aliakseikulik)
* **Payment Address:** TODO

## Project Overview :page_facing_up: 

### Overview
DEIP is a Polkadot Parachain built for IP management, tokenization, and governance.

DEIP builds an IP assets management platform which allows discovering, evaluation, and exchange of IP assets on the blockchain. It can be applied to any type of IP assets. The platform implements registration of IP assets on the blockchain, tokenization of IP assets, and governance of IP assets. With such infrastructure, DEIP becomes a foundation for DeFI and DAO around IP assets. In the future, DEIP will also provide a no-code/low code SDK to build custom Dapps for specific IP assets management cases (patents, art, movies, technologies, etc.).

Please provide the following:
  * A brief description of the project.
  * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
  * An indication of why your team is interested in creating this project.

### Project Details 

#### DEIP IP Management/Governance (IPMG) Module
IPMG is a core module for managing technology assets, and assessment and evaluation of IP assets. It enables a collaborative approach in the creation and governance of IP assets via working groups as DAOs, advanced access control & sharing capabilities with Proof of Share. Furthermore, the IPMG module enables a collaborative assessment and evaluation of IP assets via a Decentralized Assessment System that allows to crowdsource expertise from the network. Working groups are managed as DAOs via specific smart-contracts that create delayed transactions with multi-sig to be executed.

As a first phase we will implement a parachain and web-based UI with basic functionality for the management of working groups via DAOs, and governance and registration of IP on the blockchain. Core features to be implemented during this phase:
* Management of working groups (creation, membership management, decision-making mechanisms (voting));
* Creation of project(s);
* Creation of IP asset(s) within a project;
* Registration of IP asset(s) ownership on the blockchain with certification (a digital certificate that embeds a signature of IP asset creator, creation timestamp and hash of the certified IP asset);
* Access control (with Proof of Share);
* Ownership validation tool (a web-based tool used to verify the owner/creator of IP asset and creation timestamp using the provided certification data such as hash of IP asset or certified IP asset file);

<img src="https://user-images.githubusercontent.com/13851716/99986481-47698300-2dc0-11eb-8523-68f03d1a6b2c.png" width="640px"/>



We expect the teams to already have a solid idea about the project's expected final state.

Therefore, we ask the teams to submit (where relevant):
* Mockups/designs of any UI components
* API specifications of the core functionality
* An overview of the technology stack to be used
* Documentation of core components, protocols, architecture etc. to be deployed
* PoC/MVP or other relevant prior work or research on the topic

### Ecosystem Fit 
Are there any other projects similar to yours? If so, how is your project different?

## Team :busts_in_silhouette:

### Team members
* Name of team leader
* Names of team members	

### Contact
* **Contact Name:** Alexey Kulik
* **Contact Email:** alexey.kulik@deip.world
* **Website:** [https://deip.world](https://deip.world)

### Legal Structure 
* **Registered Address:** Address of your registered legal entity, if available. Please keep it on one line. (e.g. High Street 1, London LK1 234, UK)
* **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

### Team Code Repos
* https://github.com/<your_repo_1>
* https://github.com/<your_repo_2>

### Team LinkedIn Profiles
* https://www.linkedin.com/<person_1>
* https://www.linkedin.com/<person_2>

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  TODO
* **Total Costs:** TODO

### Milestone 1 Implement IP Management/Governance Module 
* **Estimated Duration:** 2 month
* **FTE:**  TODO
* **Costs:** TODO BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be coded for the first milestone) |  
| 2. | Substrate module: Y | We will create a Substrate module that will... |  
| 3. | Substrate module: Z | We will create a Substrate module that will... |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |
| 6. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 


## Future Plans
Please include the team's long-term plans and intentions.

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?
