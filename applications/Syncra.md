# Syncra x Web3 Foundation

- **Team Name:** Syncra
- **Payment Address:** 15Geo1RfLLM1PmPsD4uggts1Ht5LrWUChBDruLPqt5EgFKPB (PolkaDOT - USDT)
- **Level:** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/1762#issuecomment-1769273868)

## Project Overview

### Intro

Building DAOs requires a lot of heavy, complex work and commitment to create a solution, even when using templates such as OpenZeppelin. As a protocols owner, the cost of development, voting mechanisms, and legal structure can be significant. On substrate such templates like ones in OpenZeppelin aren’t even available yet for DAO development. This means even more time required for research and development in this technology.

### Project Details

Syncra simplifies this process. We're working on a no-code solution to create, manage, and build your decentralized organization. Our goal is to provide a seamless process where protocol owners can launch the DAO within 5 minutes or even less.

![](https://i.imgur.com/Pe1Z26r.png)

Transparency is inherent in blockchain technology, but many situations require privacy, especially in DAOs when it comes to tough decisions. Also in times when connecting particular wallet address to a person or entity can by relatively easy, or even required (KYC, ID verification, Identity providers). With Syncra, we want to provide a solution for confidential voting where votes are hidden by default, but everything happens on-chain. Leveraging a modular approach, we want to enhance privacy, provide an easy way for treasury management, and offer on-chain automation, ultimately providing this service for the entire Substrate ecosystem.

Having Syncra in the PolkaDOT ecosystem is a necessary piece of the puzzle. Just as Tally, Aragon, and Snapshot exist on EVM, Syncra exists on Substrate.

### Product overview

We've already prepared and begun implementing some of our product designs. Our team is hard at work on product development, constantly refining and streamlining flows through research and product fit. 

Our goal is to make everything as simple as possible, while maintaining modularity and providing an excellent user experience.

![](https://i.imgur.com/GXzugeC.png)
### Key Functionalities

- DAO management,
- On and off-chain voting,
- Treasury management,
- Prepared and custom strategies,
- Undisclosed voting,
- Modular approach,
- Software Development Kit.

## Architecture and overview of common interfaces

Syncra implements modular-dao concept.

### What is it?

Modular-dao is a set of traits with default implementations built using [ink!](https://github.com/paritytech/ink) and [OpenBrush](https://github.com/727-Ventures/openbrush-contracts) that can be used to create customized DAOs. Be aware that this is just a concept, none of the contracts have been properly tested and/or audited, and all the work is still experimental.

### How does it work?

The traits with default implementations consists of:

- **Votes** - trait that provides 3 basic methods that allow to get voting power for of an address and delegate votes. The default implementation is done with combination of PSP22 token. However, **Votes** can represent any type of the "strategy" (for example PSP34-based).
- **Governor** - extends **Votes** and **AccessControl**. The base for the DAO. Provides proposal creation and execution functionalities.
- **Timelock** - extends **Governor**. Allows scheduling operations, for example to allow some time between voting end-time and proposal execution.
- **ShieldedVoting** - extends **Governor**. Allows to represent the "votes" by PSP22 token that can be shielded using Shielder contract.

![](https://i.imgur.com/aRwOgbR.png)

In the future, we plan to develop multi-chain treasury module to increase functionality and customisability.

### How does voting work?

For not shielded voting process, users can simply call `cast_vote(proposal_id)` method on the **Governor** contract. The vote power is calculated by `get_votes(account)`.

For shielded voting, users have to first "register" for voting to mint the PSP22 tokens representing their votes. Then, the tokens representing the votes can be simply transferred to an address representing one of the voting options or the transaction can be "shielded" using the Shielder contract.

### How does on-chain automation work?

Smart Contracts, Blockchain, and DAOs are very often promoted as Autonomous solutions. However, there is still a need for a manual trigger from user, to execute a given action onchain. 

At Syncra, we aim to deliver a complete automation with automatic Smart Contracts call execution. For this purposes we have started working a tool called Polkadot Smart Contracts Caller, which source code can be found here: https://github.com/KowalewskiPawel/Substrate-Polkadot-Smart-Contracts-Caller

With Polkadot Smart Contracts Caller, we can easily create a relayer service, for delegating Smart Contracts calls. In this scope, we are planning to add scheduler, and frontend implementation, so that tasks such as execution of the proposal can be scheduled, and called automatically after the end of voting period. 

Moreover, we are also planning to integrate this tool in the Private Voting feature, so that "withdraw" function can be called from a neutral account, without revealing any sensitive info about the original caller.

Known drawbacks are the security concerns, related with storing private keys on the cloud. We are currently conducting the Security research, on a possible solution to this problem. Therefore, for the scope of the grant, we treat this feature rather more like a Proof of Concept, than final product or even MVP.

### Data Model

Syncra uses IPFS as well as MongoDB for storing additional data about DAOs, proposals, and user stats. The purpose is to minimise the data footprint on the blockchain itself, as storing data onchain is costly, and not very performant. Only the critical data is stored inside of the the DAO Smart Contract’s. 

DAOs, Proposals titles, and descriptions are stored on the IPFS, and then corresponding IPFS hashes are set on the DAO contract's storage. In this way, users can be sure that the data about the given DAO or Proposal won’t be modified, nor fade-away if the server ever goes down. The same applies to storing images, as we use web3 storage for image upload.

To sum up, on the Syncra MongoDB side, general info about user/platform stats are stored, such as number of DAOs created, DAOs that the given user is involved in, etc. In this way, everyone can use our SDK or even connect directly with the DAO previously deployed via Syncra platform, and build own frontend dedicated to the given DAO, without losing the critical data, and need to connect with Syncra's database.

## Project Details

In the scope of this grant, several core parts will be implemented, as the extension of the pre-grant MVP product, built under AlephZero grant.

### MVP (Pre-Grant)

The MVP of the Syncra Platform, that we are going to start with, will consist the following parts:

1. Frontend Application with the connection to Wallet, Smart Contracts, and Backend
2. Set of Smart Contracts based on PSP22 voting strategy
3. Backend for storing off-chain data, such as DAO and proposal's additional info stored on IPFS. It's done for the purpose of minimizing storage footprint on-chain
4. Complete workflow of DAO creation, that allows users to create DAO, manage it, as well as create proposal and vote directly from the web application
5. Proof of Concept for Private voting, using AlephZero's Liminal Shielder - This one will require to start up a local custom AlephZero node, with ZK Verifier pallet implemented, as currently this functionally is not available on any AlephZero live chain

### Scope of W3F Grant

Based on the MVP described above, our team will deliver several extensions that will make our solution more universal, accessible, and possibly transferable to other Polkadot based chains, that implement Contract pallet.

* **OpenZeppelins’ like Governance Standards**
    Ideally, we plan to split the possible functionalities of a DAO into separate Rust traits, so that one can "bootstrap" the desired modules/functionalities and easily customize them. Moreover, our goal is to keep the project open for extension so in the future new modues/features could be added without the need to change existing standard. We will refactor the Smart Contracts code for creating DAOs and voting strategies, improve them, make more universal, and customizable so that they can be easily implemented. Additionally, we will prepare a documentation of each part, so that custom DAO contracts can be easily build from the ready puzzles. OpenZeppelins standards are the inspiration for this part, as there isn't any similar standard on Polkadot ecosystem yet.
* **On-chain Automation System Template**
    Smart contracts, even though considered autonomous, require a manual trigger from the user to execute certain functions. In ecosystems such as DAO, automatic execution of the proposals is something that is still missing. For this part we will create a template tool, that will work as off-chain worker for scheduling Smart Contracts calls. It will work as a simple application, with the Scheduler, and some relayer accounts, that contain tokens for covering gas costs. Scheduling certain actions, like for example mentioned above - executing proposal once they reach the deadline, will be possible by simply setting the call on the Smart Contract. The off-chain relayer, will read the state from the given smart contract, and then schedule the Smart Contract call.

* **SDK**
    Our platform Syncra, is just one of the examples of how our infrastructure can be used, that is why we will create a set of ready solutions, so that a new platform (ex. frontend, mobile app, etc.) can be build, upon the pillars created by Syncra. In this part, a bundle for NPM and Yarn will be created, wrapping all core functionalities of Syncra. Developer will be able to simply install the SDK library in their project, setup the endpoints, and API KEYs for accessing our backend services, and then simply call given functions inside of their custom application.

* **SDK Documentation**

    Dedicated documentation for the SDK will be created, so that the whole tool can be implemented with ease. We will also provide instructions for obtaining the necessary configuration keys, and other variables necessary to connect with our services.

#### Technology stack

Each of the core elements will be developed with certain set of technologies, and programming languages.

1. **Smart Contracts as Governance Standards**
    Written in Rust with the use of [ink!](https://github.com/paritytech/ink) framework and [OpenBrush](https://github.com/727-Ventures/openbrush-contracts) library for PSP22 standard of tokens, as well as additional helper functions, such as modifier for checking the roles. The documentation will be developed using [Docusaurus](https://docusaurus.io/) framework, that leverages JavaScript and TypeScript.
2. **On-chain Automation System Template**
    Main technology stack here will be TypeScript, and Node.js Express for creating a server that can be deployed and hosted on most of the available hosting services. The reason behind this is the ease of implementation, and the availability of various libraries and technologies that can be added on top of it. This service won't receive many calls, rather act as a relayer that reads data on-chain, and then submits data/send calls to Smart Contracts on-chain, without further need for external calls. As a core tool for creating calls to Smart Contracts, we will leverage [Polkadot.js Contracts API](https://polkadot.js.org/docs/api-contract).
3. **SDK**
    JavaScript and TypeScript will be fundamental programming languages of this part, while [NPM](npmjs.com) registry will be used for publishing the package itself. The SDK will be basically a wrapper of the certain functions that call Smart Contracts, and Backend. It will require the developer to add configuration, such as API Key to access our backend, Smart Contract Factory address, as well as the ABI files, that will serve as an instruction for calling each Smart Contract. We are not going to hardcode those in the SDK, as in the future, the platform may be deployed on different chains in the Polkadot ecosystem. Moreover, the Smart Contracts can be upgraded, or created with different set of rules and methods.
4. **SDK Documentation**
    The entire documentation for implementing SDK in the given project, will be built using [Docusaurus](https://docusaurus.io/) that leverages JavaScript and TypeScript.

#### Hosting and Infrastructure

All of the code will be open-source, and available under our organizational repositories address

[Syncra Repositories](https://github.com/orgs/SyncraDAO/repositories)

Frontend application from the MVP part will be available under the address below

[syncra.xyz](https://syncra.xyz/)

Example demo of on-chain automation service is going to be hosted most probably on the [Railway](https://railway.app/) service, and it will connect with one of the instances of Data Base, hosted on the [Atlas MongoDB](https://www.mongodb.com/atlas/database) service. The files stored on IPFS will leverage [Web3 Storage](https://web3.storage/) services.

SDK bundle on the other hand, will be published on the [official npmjs registry](npmjs.com)

Documentation will published on the [GH Pages](https://pages.github.com/)

#### Risks

There are several known risk that we are aware of, and will try our best to find solutions to prevent those scenarios from happening. Nevertheless, it is worth noticing those potential fields, which could have been improved for better safety.

* Storing Account Private Keys for Off-Chain Automation Relayer - since for sending transactions to the Smart Contracts, we need an actual on-chain Address, the seeds for that account, has to be stored somewhere on the Cloud. In this way, no human interaction is needed to create a signature. In our solution, we have no other option then just store those keys on one of the Cloud services. In such scenarios, there is always a risk of a data breach, that could compromise the access to the account, with the access to the funds stored for covering gas fees on it.

* Smart Contracts Security Hole - we expect our Smart Contracts to be initially audited by [Kudelski Security](https://kudelskisecurity.com/) as a part of AlephZero grant. However, there is still a risk that something will not be caught during the audit, and we will also extend those Smart Contracts during this Project as for the purpose of creating OpenZeppelins like standards. During the development, some additional security issues may occur.

* Off-Chain Automation Relayer Operational Failure - Automation relayer work as a centralized service for executing the calls, if for some reason, it will stop operating, the scheduled action may not be executed. For that reason, we are considering deploying several instances of this relayer, on multiple services, with multiple accounts. In this way we should minimize the risk of the scheduled action, not being executed due to the relayer's operational failure.

## Ecosystem Fit

Given the importance of scalable, and customisable DAO infrastructure, which many protocols needs, we want to introduce Syncra. As a easy to use, modular, reliable, and customisable platform we believe, that is crucial element of the ecosystem. Leveraging undisclosed voting, treasury management, on-chain automation, and many others we might bring a real value.

Our project aim to be the ecosystem standard for DAOs on Polkadot, Kusama, Aleph Zero and any Subsrate based ecosystem.

## Team

### Team members

- **Name of team leader:** Przemysław Paczoski
- **Names of team members:** Paweł Kowalewski, Krzysztof Kuczma, Jan Kuczma

### Contact

- **Contact Name:** Przemysław Paczoski
- **Contact Email:** przemek@syncra.xyz
- **Website: https://syncra.xyz**

### Legal Structure

- **Registered Address:** TBD
- **Registered Legal Entity:** TBD

### Team's experience

**Przemysław Paczoski** 

*Lead, front-end, and quality engineer with more than 6 years of experience in the field. Working on numerous projects with companies like XTB, Docplanner, Dfns, and others. He participated in a few NFT initiatives in addition to his professional activities, where he received practical expertise in creating projects from the ground up. He actively participate in hackathons and won awards in various categories.*

**Krzysztof Kuczma**

*Software engineer with over than 5 years of experience. Knowledgeable in front-end, and backend technologies, alongside Azure and GCP ecosystems. Working on projects for large financial institutions. Since 2020, exploring web3 projects, participating in hackathons in which winning awards. Passionate about knowledge sharing, in which he is running the YouTube channel about programming.*

**Paweł Kowalewski**

*Software Engineer, with experience in several blockchain technologies including projects based on Lightning Network. Prior to his software engineering career, he was an Academician and an Automotive Technician. The co-host of the YouTube channel “Devs in Chains”, focused on topics related to web3, web development, and Blockchain. He has attended numerous hackathons and won awards in various categories.*

**Jan Kuczma**

*An Alumni of the University of Sussex with Bachelor’s at Computer Sciences with focus on AI and Computer Architectures. In the academic course, he participated in several hacking events and I developed various software projects including developing a 3D game in Unity and designing and implementing Machine Learning models in Python. His final year he become interested in Blockchain technologies and started learning smart contracts development. He quickly become proficient in this matter.*

### Team Code Repos

Syncra Organization: https://github.com/SyncraDAO

Smart Contracts: https://github.com/SyncraDAO/modular-dao

Backend: https://github.com/SyncraDAO/Liberum-Backend

All developments within the Web3 Foundation Grants Program will be open-sourced from day one on GitHub.
### Team GitHub Profiles

- Przemysław Paczoski: https://github.com/Kodziak
- Krzysztof Kuczma: https://github.com/KrzysiekKuczma
- Paweł Kowalewski: https://github.com/KowalewskiPawel
- Jan Kuczma: https://github.com/jsk28
### Team LinkedIn Profiles

- Przemysław Paczoski: https://www.linkedin.com/in/ppaczoski/
- Krzysztof Kuczma: https://www.linkedin.com/in/krzysztof-kuczma/
- Paweł Kowalewski: https://www.linkedin.com/in/kowalewskipawel/
- Jan Kuczma: [https://www](https://www.linkedin.com/in/kowalewskipawel/)[.linkedin.com/in/jkuczma](http://www.linkedin.com/in/jkuczma)

## Development Status

The project is currently in early-stage development. We achieved a proof-of-concept solution during the HackOnChain hackathon in Berlin, and then decided to rebuild it from scratch, aiming for a minimum viable product soon.

Part of the MVP is almost finished. We aim to deploy the solution on the Aleph Zero testnet within a couple of weeks. The landing page, designs, and part of the application are almost complete.

We are currently focusing on legalising the entity, marketing, pitch decks, whitepapers, and many other things.

## Development Roadmap

### Overview

- **Total Estimated Duration:** 12 weeks
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** Requested amount in USD for the whole project 30,000 USD.

### Milestone 1

- **Estimated duration:** 6 weeks
- **FTE:** 2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | A clear overview of the software's architecture and components, as well as its main functions and capabilities. Technical details, including programming language, technologies, frameworks, libraries, and services. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that introduces to the solution with all the guidelines included. |
| 1. | DAO Smart Contracts (OpenZeppelins’ like) Governance Standards | Set of traits with default implementation for basic DAO feature such as voting power mechanisms based on psp22 and psp34, proposal creation and execution, quorum, proposal creation threshold and role-based proposal creation and execution. Both Smart Contracts written in ink! with OpenBrush will be provided, as well as the documentation explaining each part, with the tutorial of creating a new custom Governance Smart Contract. |
| 2. | On-chain Automation Tool | Source code as a Template with the Scheduler, and Smart Contracts caller will be provided. Moreover, as an example at least one instance of such a relayer will be deployed, and prepared for testing. |

### Milestone 2

- **Estimated duration:** 6 weeks
- **FTE:** 2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | A clear overview of the software's architecture and components, as well as its main functions and capabilities. Technical details, including programming language, technologies, frameworks, libraries, and services. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that introduces to the solution with all the guidelines included. |
| 1. | SDK | NPM package with ready wrapped functions, for creating custom GUI for the DAO platform based on Syncra will be provided. The package will be also published on the NPM registry. It will cover the workflow of connecting with our services, and creating the whole workflow, from creating the DAO, to adding proposals, and voting on them. |
| 2. | SDK Documentation | Clear overview, instructions, and explanation of each SDK's part will be documented in the documentation that will be available publicly for everyone. |

## Future Plans

After completing the grant, our goal is to establish a seamless process for creating and managing DAOs, with a great user experience. Additionally, we aim to enable protocols to integrate our solution into their systems using an SDK.

Our next steps include:

- Providing para-chain support, with the goal of allowing protocols across all Substrate-based blockchains to use Syncra's solution.
- Improving the security of the solutions provided in the scope of this grant

## Additional Information

### **How did you hear about the Grants Program?**

Web3 Foundation Website, and Personal Recommendation.

### Work you have already done

- Platform MVP
- Designs
- Started to build brand recognition on Twitter and Discord community

### Previous grants you may have applied for

- Aleph Zero Grants program
