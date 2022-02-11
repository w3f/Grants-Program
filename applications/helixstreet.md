# W3F Grant Proposal



- **Project Name:** helixstreet Module
- **Team Name:** helixstreet
- **Payment Address:** bc1qvu2mjjm602rqshwkspy2v7a6wke529uzkucnej
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:


### Overview

helixstreet is a project to extend the use of Blockchain technology to genomics. helixstreet chose substrate as technology to implement a pallet to store a Merkle tree hash of genomic raw sequencing data. Relationsships ( ancestry ) can be documented in the blockchain based on relationships between genomic data. Currently we are planning to implement helixstreet as parathread.

Ancestry data an personal genomic relationships are today centralized. helixstreet's approach allows the representation of ancestry data in a decentralized manner.


### Project Details

The project is in this stage just a pallet.

### Ecosystem Fit

The project extends the use of Polkadot to a whole new use case. helixstreet would be an application specific parathread. It solves the problem of ownership of genomic data and the the human desire to conduct genealogical research without a central authority.

## Team :busts_in_silhouette:

### Team members

- Thomas Deisen

### Contact

- **Contact Name:** Thomas Deisen
- **Contact Email:** thomas.deisen@helixstreet.io
- **Website:** https://helixstreet.io

### Legal Structure

- **Registered Address:** None
- **Registered Legal Entity:** None

### Team's experience

Master in Computer Science / Founder of several companies / self education in Genomic Sequencing Technology and Variant Calling

### Team Code Repos

- https://github.com/helixstreet


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/thomasdeisen


## Development Status :open_book:

We started the project: https://github.com/helixstreet

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,

- make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
- include the amount of funding requested _per milestone_.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration: 2
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 10000 USD

### Milestone 1 Example — Implement Substrate Modules

- **Estimated duration:** 2 month
- **FTE:**  1
- **Costs:** 10000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can send test transactions, which will show how the new functionality works. |
| 1. | Substrate module: genomics | We will create a Substrate module that will.store the merkle hash of genomic sequencing raw data an a rust program to create the hash



## Future Plans

The pallet is gradually expanded to document the relationship to other public keys. It is also examining the possibility of working with HiFi sequencing manufacturers who could store genomic footprints directly from the machines in the blockchain. Longterm we plan to develop a healthcare ecosystem in the blockchain based on genomic data.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

The project is a very long term project. Parallel to the Blockchain and decentralized governance development there is actually a a game changing shift in the sequencing technology bases on the availability of HiFi sequencing which allows the sequencing of human ( and other species ) in a reference grade level quality.
