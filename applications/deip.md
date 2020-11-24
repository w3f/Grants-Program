# Open Grant Proposal

* **Project Name:** DEIP IP Management/Governance Module
* **Proposer:** [aliakseikulik](https://github.com/aliakseikulik)
* **Payment Address:** TODO

## Project Overview :page_facing_up: 

### Overview
DEIP builds an IP assets management platform which allows discovering, evaluation, and exchange of IP assets on the blockchain. It can be applied to any type of IP assets. The platform implements registration of IP assets on the blockchain, tokenization of IP assets, and governance of IP assets. With such infrastructure, DEIP becomes a foundation for DeFI and DAO around IP assets. In the future, DEIP will also provide a no-code/low code SDK to build custom Dapps for specific IP assets management cases (patents, art, movies, technologies, etc.).

#### Integration ####
DEIP is a Polkadot Parachain built on Substrate 2.0 Framework and designed specifically for IP governance, tokenization, and exchange. We see integration with Polkadot ecosystem as an important step towards a truly decentralized way to govern and exhange tokenized IP assets.

#### Motivation ####
*TODO*

### Project Details 

#### DEIP IP Management/Governance (IPMG) Module
IPMG is a core module for managing technology assets, and assessment and evaluation of IP assets. It enables a collaborative approach in the creation and governance of IP assets via working groups as DAOs, advanced access control & sharing capabilities with Proof of Share. Furthermore, the IPMG module enables a collaborative assessment and evaluation of IP assets via a Decentralized Assessment System that allows to crowdsource expertise from the network. Working groups are managed as DAOs via specific smart-contracts that create delayed transactions with multi-sig to be executed.

Within the scope of this grant we will implement a parachain and web-based UI with basic functionality for the management of working groups via DAOs, and governance and registration of IP on the blockchain. Core features to be implemented during this phase:
* Management of working groups (creation, membership management, decision-making mechanisms (voting));
* Creation of project(s);
* Creation of IP asset(s) within a project;
* Registration of IP asset(s) ownership on the blockchain with certification (a digital certificate that embeds a signature of IP asset creator, creation timestamp and hash of the certified IP asset);
* Access control (with Proof of Share);
* Ownership validation tool (a web-based tool used to verify the owner/creator of IP asset and creation timestamp using the provided certification data such as hash of IP asset or certified IP asset file);

<img src="https://user-images.githubusercontent.com/13851716/99986481-47698300-2dc0-11eb-8523-68f03d1a6b2c.png" width="480px"/>

### Ecosystem Fit 
As far as our team knows there are no other projects working on IP governance, tokenization or exhange solitions within the Polkadot ecosystem.

## Team :busts_in_silhouette:

### Team members
* Yahor Tsaryk - CTO, Project Lead, Blockchain Developer
* Alex Shkor - Product director, Blockchain Architect
* Alexey Kulik - System Architect
* Euheny Bondarovich - Full-stack Developer

### Contact
* **Contact Name:** Alexey Kulik
* **Contact Email:** alexey.kulik@deip.world
* **Website:** [https://deip.world](https://deip.world)

### Legal Structure 
* **Registered Address:** Address of your registered legal entity, if available. Please keep it on one line. (e.g. High Street 1, London LK1 234, UK)
* **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience
*TODO*

**Yahor Tsaryk**

More than 7 years of experience
Professional in front-end and backend development, Big Data and distributed systems. 

**Alex Shkor** 

An expert in blockchain architectures, crypto economies modeling and has more than 10 years of experience in designing distributed systems. He held executive positions in Paralect.com. Alex is thinktank member and expert at Blockchain for Science, and public speaker at various events (presentations in Vienna (Scientific Publishing on the Blockchain), Zurich (CRYPTSCIENCE2018), ETH Zurich). Author of articles about the distributed system, especially CQRS and Event Sourcing. Alex has been advising Bitshares Core team on how to efficiently implement off-chain models for Bitshares protocol.

**Alexey Kulik**

Expert in software architectures and blockchain with 10 years of hands-on experience. Speaker on blockchain/DLT topics and lecturer at Belarusian National Technical University. 

**Euheny Bondarovich**

Full-stack developer from 2004.

### Team Code Repos
The existing code is not fully open-sourced at the moment. DEIP team is fully commited to open-source the code and protocol in early 2021. We will provide access to repositories upon request from Polkadot team. **All developments within the Polkadot Open Grants Program will be open-sourced from day one**.

### Team LinkedIn Profiles
* [Yahor Tsaryk](https://www.linkedin.com/in/yahor-tsaryk-92032a68/)
* [Alex Shkor](https://www.linkedin.com/in/alexshkor/)
* [Alexey Kulik](https://www.linkedin.com/in/alexeykulik/)
* [Euheny Bondarovich](https://www.linkedin.com/in/euheny/)

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  4.5
* **Total Costs:** 1.65 BTC (approx. $30,000)

### Milestone 1 Implement IP Management/Governance Module 
* **Estimated Duration:** 2 month
* **FTE:**  4.5
* **Costs:** 1.65 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Documentation describing the DEIP protocol and basic workflows implemented in the IPMG module. |
| 0c. | Testing Guide | Complete test-suite with acceptable unit-test coverage, and instructions how to run these tests. | 
| 1. | Working group management (DAO) | Create, manage members (invite, exclude), access control, decision-making via group voting. |  
| 2. | Project and IP management | Create project, edit project, create IP asset within project. |  
| 3. | IP registration | Register (timestamp) a fact of creation and/or ownership of specific IP asset on the blockchain. |
| 4. | Access control | Manage access permissions to specific IP asset with unique Proof of Share entries that confirm a specific user was granted access to an asset. |
| 5. | Web-based UI | Create and manage working groups (DAOs), project management, IP asset creation and registration, certificate verification page. |
| 6. | Docker | Dockerfile to run a chain. 

## Future Plans

We are planning to continuusly evolve the project adding new modules and make a first decentralized exchnage for IP assets. 

#### IP Tokenization (IPT) module ####
IPT module enables securitization and tokenization of IP assets. It introduces advanced mechanics for the management of IP ownership, such as the distribution of shares of IP, co-ownership, and royalties distribution via smart-contracts.

<img src="https://user-images.githubusercontent.com/13851716/100002424-966de300-2dd5-11eb-9b84-f7b1e0a51b4f.png" width="480px"/>

#### IP Financing (IPF) module ####
IPF module provides various models of funding and financing for projects that produce IP assets. Funding models include (but not limited to): crowd investing, private investing, grants, open innovation (OI) challenges.

<img src="https://user-images.githubusercontent.com/13851716/100002434-98d03d00-2dd5-11eb-8c1b-33b5403f81c3.png" width="480px"/>

#### IP Licensing (IPL) module ####
IPL module enables the licensing of IP assets. Allows tracking of all licensing transactions and provides evidence of licensing.
Various licensing agreements, instant licensing, proof of licensing, licensing transactions overview.

<img src="https://user-images.githubusercontent.com/13851716/100002436-9968d380-2dd5-11eb-8c68-74644984dfef.png" width="480px"/>

#### IP Exchange (IPE) module ####
IPE module enables the exchange of IP assets. Any IP asset can be exchanged for any other IP asset on the platform, as well as it can be exchanged for various crypto assets (e.g. DOT, ETH, or BTC). 

<img src="https://user-images.githubusercontent.com/13851716/100002431-9837a680-2dd5-11eb-9046-4800f8031f59.png" width="480px"/>


## Additional Information :heavy_plus_sign: 

* **What work has been done so far?**

We already have a working prototype and pilots.

* **Are there are any teams who have already contributed (financially) to the project?**

No

* **Have you applied for other grants so far?**

We have not applied for any other grants with this exact project. But we have applied for multiple grants related to the application of our Decentralized Assessment System (a system we designed for crowdsourcing of domain expertise to assess various IP assets). We are currently implementing pilots as part of Blockchers program, as well as part of EOSC Digital Innovation Hub.
