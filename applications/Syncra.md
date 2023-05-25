# Syncra x Web3 Foundation

- **Team Name:** Syncra
- **Payment Address:** 15Geo1RfLLM1PmPsD4uggts1Ht5LrWUChBDruLPqt5EgFKPB (PolkaDOT - USDT)
- **Level:** 3

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

Modular-dao is a set of traits with default implementations built using [ink!](https://github.com/paritytech/ink) and [OpenBrush](https://github.com/727-Ventures/openbrush-contracts) that can be used to create customized DAOs. Be aware that this is just a concept, none of the contracts have been properly tested and/or audited, and all the work is still experimental! :)

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

With Polakdot Smart Contracts Caller, we can easily create a relayer service, for delegating Smart Contracts calls. In this scope, we are planning to add scheduler, and frontend implementation, so that tasks such as execution of the proposal can be scheduled, and called automatically after the end of voting period. 

Moreover, we are also planning to integrate this tool in the Private Voting feature, so that "withdraw" function can be called from a neutral account, without revealing any sensitive info about the original caller.

Known drawbacks are the security concerns, related with storing private keys on the cloud. We are currently conducting the Security research, on a possible solution to this problem. Therefore, for the scope of the grant, we treat this feature rather more like a Proof of Concept, than MVP or even final product.

### Data Model

Syncra uses IPFS as well as MongoDB for storing additional data about DAOs, proposals, and user stats. The purpose is to minimise the data footprint on the blockchain itself, as storing data onchain is costly, and not very performant. Only the critical data is stored inside of the the DAO Smart Contract’s. 

DAOs and Proposals titles, and descriptions are stored on the IPFS, and then corresponding URLs are linked to the given DAO, and Proposal. In this way, users can be sure that the data about the given DAO or Proposal won’t be modified, nor fade-away if the server is down. The same applies to storing images, as we use web3 storage for image upload. 

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

All developments within the Polkadot Grants Program will be open-sourced from day one on GitHub.
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

- **Total Estimated Duration:** 24 weeks
- **Full-Time Equivalent (FTE):** 2-3 FTE
- **Total Costs:** Requested amount in USD for the whole project 80,000 USD.

### Milestone 1

- **Estimated duration:** 6 weeks
- **FTE:** 2
- **Costs:** 20,000 USD

We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0.a | License | Apache 2.0 |
| 0.b | Documentation | A clear overview of the software's architecture and components, as well as its main functions and capabilities. Technical details, including programming language, technologies, frameworks, libraries, and services. |
| 0.c | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0.d | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Application | Finished MVP application contains easy way of creating, and manage DAO. |
| 2. | Testing | We want our customers to be safe, that means, we want to cover contracts, backend, and frontend as extensively as possible. |
| 3. | Infrastructure | The infrastructure has to be resilient to any downtime which might happen. With that in mind, we want to host our solutions as decentralized as possible, using various infra providers, e.g. AWS, and GCP. |
| 4. | Product Development | During the MVP build we’ve realized that there is a lot of product development needed to fit the market properly. We want to use the opportunity to talk with protocols to make it even more suitable for their needs, gathering as much information as possible. |

### Milestone 2

- **Estimated duration:** 6 weeks
- **FTE:** 2
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0. | Identity Provider | We will integrate Identity Provider solution within Syncra to make DAOs accessible for everyone, even non-crypto native people. This is a part of off-chain voting, which allows Syncra usage for non-crypto native communities. |
| 1. | Designs Improvement | We want to improve our initial UI, and UX processes to make DAOs even more accessible. That includes also marketing graphics creation. |
| 2. | Marketing  | We want to work on marketing strategy to increase platform visibility even more. The goal is to attract more  |
| 3. | Treasury management | We want to integrate custodian solution which allows DAOs manage their treasuries across networks, keeping the security as top priority. Custodian solutions allows DAO to manage their funds across multiple networks. |

### Milestone 3

- **Estimated duration:** 6 weeks
- **FTE:** 2-3
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 1. | OpenZeppelins’ Governance standard | We want to polish our smart contracts, and propose them as a substrate standard, like it is in Open Zeppelin currently. |
| 2. | On-chain automation | We want to provide a solution which allows DAO owners, and their voters to automate actions on-chain based on proposal resolution. |

### Milestone 4

- **Estimated duration:** 6 weeks
- **FTE:** 2-3
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 1.a | SDK | We want to provide a programmatic way of DAOs interactions, allowing the protocols to use our infrastructure without dashboard. That means create, manage DAO, and proposals itself. SDK in Typescript in the beginning, with a clear path for more languages. |
| 1.b | SDK Documentation | A clear overview of the SDK, with documented use-cases, and tutorials describing easy integration. |

## Future Plans

After completing the grant, our goal is to establish a seamless process for creating and managing DAOs, with a great user experience. Additionally, we aim to enable protocols to integrate our solution into their systems using an SDK.

Our next steps include:

- Providing para-chain support, with the goal of allowing protocols across all Substrate-based blockchains to use Syncra's solution.
- Expanding the possibilities for voting and SDK integration.

## Additional Information

### **How did you hear about the Grants Program?**

Web3 Foundation Website, and Personal Recommendation.

### Work you have already done

- Platform MVP,
- Designs,
- Started to build brand recognition wit Twitter and Discord community,

### Previous grants you may have applied for

- Aleph Zero Grants program