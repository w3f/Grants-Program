# RELAI Network

- **Team Name:** [RELAI Network](https://https://relai.network/)
- **Payment Address:** Ethereum: 0xfA34F566bDDcA92Dc656310F08AC5aE64fC46456 (USDC)
- **Level:** 1 

## Project Overview :page_facing_up:

### Overview

AI is evolving fast and changing the world, creating so many opportunities, changing so many industries and lives. However, it is also prone to creating a lot of issues and have also many risks.

These risks include the potential for AI to be tampered with by bad actors, the lack of transparency in AI decision-making, the inability to identify AI developers and system administrators, and the absence of reproducibility in machine learning experiments. These factors can lead to the creation of AI that poses a threat to humanity, which may be difficult to control or reverse. Furthermore, the lack of trust in AI and the difficulty in identifying and resolving problems may limit its potential benefits.

The NIST (National Institute of Standards and Technology in US) has created a document that lists the challenges and risks of AI and proposed a framework [AI RMF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) for addressing these challenges and risks. There is also this interesting talk in this topic by Karen Kilroy an expert in the subject [AI Risk Management](https://www.youtube.com/watch?v=JHk34fA3T_I).

RELAI (Reliable AI) Network is a decentralized platform that aims to help setting foundations to build a secure, transparent, and reproducible environment for AI development and deployment. RELAI Network will provide a set of tools and services to help AI developers and system administrators to build and deploy AI systems that are secure for having trackable, traceable, transparent models.

The project will be in multiple phases and the current phase focuses on setting the foundations for a secure, and decentralized Machine Learning hub.

### Project Details
The RELAI Network focuses on organizations that want to write, train, test, and/or deploy their AI model in a blockchain based system that gives an authentic blockchain based report about the history of the AI model.
They care about information like who trained, who reviewed and how, what was the data set, and so on. 

The solution will be is composed of 2 main layers.

 - Blockchain Layer
 - Front Layer

The `blockchain Layer` will be used to manage machine learning model lifecycle. To ensure the integrity of an AI model, pallets will be created for the following functions:
- Identity control(for actors)
- Governance, managing instructions and restrictions for intelligent agents
- Proof of authenticity for AI model provenance.

This audit trail process begins at the time of model submission and continues through testing and validation. It will be possible to verify if the model is properly trained by tracing its provenance. Models and logs, will be stored off-chain.

The `Front Layer` is the user facing side. It will be used to manage the lifecycle of the AI model. It will be comprised of the following component:
- Web application + Notebook setup guide and samples (Jyputer Notebook, Codelabs,...)
- Storage layer for Models and Logs

 It will be used by the AI developer and system administrator to submit, train, test, and deploy the AI model. The web application will also be used by the AI model consumer to review the AI model and its provenance.

There are four main actors in the system:
- Organization Admin: will be in charge of the organization. He will be able to manage(add/remove/premission control) users for an organization.

- AI Engineer: will be in charge of training and testing the AI model.

- ML Ops Engineer: will be in charge of deploying the AI model and also will be able to see the results of the tests.

- Stakeholder: will be in charge of reviewing the AI model and will be able to see the results of the tests.


### Ecosystem Fit

The current target audience of the project is organizations and Machine Learning model users that look for a secure, transparent, and reproducible environment for AI model development and deployment and as the project moves forward the audience will expand.

The need for controlled and secure AI is becoming more and more pressing. AI is hard to track and control but using blockchain technology it is absolutely possible to regain it's control.

To this date there is no project focused on Machine Learning audit trail and provenance on the Polkdadot/Kusama ecosystem.

## Team :busts_in_silhouette:

### Team members

- Mor GUEYE

### Contact

- **Contact Name:** Mor GUEYE
- **Contact Email:** gueyemor2009@gmail.com


### Legal Structure

- **Registered Address:** Sicap Mbao, Dakar Senegal
- **Registered Legal Entity:** Ridone Technologies.


### Team's experience

Mor GUEYE is a software engineer with almost a decade of experience. He has worked on several projects in the field of web2 and web3 development and contributed to web3 projects like Ternoa, Pendulum chain...

### Team Code Repos

Org:

https://github.com/RELAI-Network

Team:

https://github.com/morgueye4

## Development Status :open_book:

To this date, researches on the subject of Blockchain and AI intersection have been started and other researches are ongoing for the next phases. The phase 1 implementation is ready to be implemented.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 10,000 USDC


### Milestone 1 — Implementing the Blockchain Layer

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **tutorial** that explains how a user can setup RELAI node and interact with the Pallets.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | `MLOrg` Pallet | This pallet will be responsible for creating and managing Organizations and access for the users  `Create organization`, `Add/Remove users`, `Assign roles` (eg: Admin, AI engineer, MLOps, Stakeholders,…)|
| 2. | `ModelBase` Pallet | The ModelBase pallet will be responsible for managing models and will allow to: `Create/Update` project ,`Create/Update` model artifact ,`Remove model` artifact ,`Create/Update` model version, `Create/Update` model experiment ,`Create/Update` model review. There will be data structures for the : `Projects`, `ProjectPurpose`, `Model`, `ModelVersion`, `ModelArtifact`, `ModelExperiment`, `ModelReview`. ModelBase pallet extrinsics will be called according to the caller's role (managed by the MLOrg pallet which will be loosely coupled).|


### Milestone 2 — Implementing the Front Layer

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Documentation of code and  tutorials that explains how to use the Web apps for full AI Models management lifecycle. Benefits of such systems wil also be explained |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Web Application | We will create a web frontend application that will be in charge of interacting with the blockchain and other layers such as storage a for model storage and also for Organisations management | 
| 2. | SDK | We will provide SDK that will be used for : `interacting with the RELAI Network` (manage the lifecycle of AI models), giving API for `identity control and governance` and APIs for getting `proof of authenticity` for AI model provenance and history information.| 

## Future Plans

The RELAI Network project at this stage will be focusing on setting up an infrastructure for having reliable and secure AI models. after this step the goal is build a layer for Decentralized Machine Learning compute protocol and/or data access protocol.
Also creating DAO structure like for public Machine Learning and AI models management for public use cases is being researched.
Improve SDK functionnalities

## Additional Information :heavy_plus_sign:

All information already included in above. 

