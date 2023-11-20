# Substrate enterprise based on Hyperledger Fabric


- **Team Name:** CoreBlocks
- **Payment Address:** 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2



## Project Overview :page_facing_up:

This proposal outlines a strategic approach to integrate key features of Hyperledger Fabric into a Substrate-based blockchain framework. The integration aims to leverage the customizability and scalability of Substrate. 

Hyperledger Fabric is an enterprise-grade, distributed ledger platform that offers
modularity and versatility for a broad set of industry use cases. The modular
architecture for Hyperledger Fabric accommodates the diversity of enterprise
use cases through plug and play components, such as consensus, privacy and
membership services.

This hybrid model is poised to offer enhanced privacy, security, and efficiency, making it ideal for various enterprise applications.

Key features include:

- Channels for private transactions and data segregation.
- Membership Service Providers (MSP) for identity management.


### Overview

**Why Hyperledger Fabric?** 

One of the many compelling Fabric features is the enablement of a network of networks. Members of a network work together, but because businesses need some of their data to remain private, they often maintain separate relationships within their networks. For example, a purchaser may work with different sellers, selling the same product. The transactional relationship between the purchaser and each of the sellers should remain private and not visible across all sellers. This is made possible via the “channels” feature in Hyperledger Fabric if you need total transaction isolation, and the “private data” feature if you’d like to keep data private while sharing hashes as transaction evidence on the ledger (private data can be shared among “collection” members, or with a specific organization on a need-to-know basis. Rather than an open, permission-less system, Fabric offers a scalable and secure platform that sup-ports private transactions and confidential contracts. This architecture allows for solutions developed with Fabric to be adapted for any industry, thus ushering in a new era trust, transparency, and accountability for businesses. From the very beginning, 

Hyperledger Fabric was designed for enterprise use. It is intended as a foundation for developing applications or solutions with a modular architecture. Its modular and versatile design satisfies a broad range of industry use cases. It offers a unique approach to consensus that enables performance at scale while preserving privacy. Unlike some other distributed ledger technologies that were originally designed for ad hoc, public use (where there is no privacy and no governance) which had to be significantly redesigned to add in support for permissions and privacy;

Source : https://8112310.fs1.hubspotusercontent-na1.net/hubfs/8112310/hyperledger_fabric_whitepaper.pdf

### Substrate implementation of Hyperledger Fabric

#### 1. Multi-Tenancy via Pallets:

Create a multi-tenancy system using Substrate pallets where each "tenant" (analogous to a channel) has its own separate state and logic. 

- **Isolating State**: Designing pallets in such a way that they maintain separate states for each tenant. This could involve namespacing the storage items to prevent overlap between tenants.
- **Access Control**: Implementing access control logic in each pallet to ensure that only authorized participants can interact with the tenant's state.

#### 2. Permissioning:

Develop a permissioning system to control which accounts can participate in each tenant's network. 

- **Account Whitelisting**: Creating a whitelist pallet that manages a list of authorized accounts for each tenant.
- **Transaction Filtering**: Using Substrate's `BaseCallFilter` to restrict which calls can be made by which accounts, effectively controlling access at the transaction level.

#### 3. Custom Consensus:

the Raft-based ordering service in Hyperledger Fabric is a system designed for permissioned enterprise blockchain networks with known participants, focusing on deterministic finality and performance. In contrast, Polkadot's PoS is for a permissionless, decentralized environment, emphasizing scalability and interoperability across multiple blockchains.

- **Develop a Custom Consensus Mechanism**: Implement a consensus mechanism based on Raft by creating a new Substrate pallet. This would involve translating the Raft protocol's leader election and log replication logic into the context of a blockchain consensus algorithm.

### Project Details


### Ecosystem Fit

#### Case Studies on Hyperledger Fabric

#### GSBN: A New Global Trade Operating System

The Global Shipping Business Network (GSBN) case study illustrates a revolutionary suite of blockchain solutions addressing significant challenges in global trade. This includes streamlining processes such as cargo release, trade finance, and managing bills of lading. Key features of the GSBN system include:

- A paperless, efficient, and transparent blockchain-based system.
- A single, immutable data source and record, enhancing trust and accuracy.
- Direct data harnessing from the shipping industry via GSBN, ensuring authenticity.
- Marked improvements in operational efficiency and transparency from end-to-end.

[GSBN Case Study](https://www.hyperledger.org/case-studies/gsbn-case-study)

#### DLT Labs™ & Walmart Canada: Transforming Freight Invoice Management

DLT Labs™ collaborated with Walmart Canada to revolutionize freight invoice management using Hyperledger Fabric. This partnership exemplifies how blockchain technology can innovate traditional business processes.

[DLT Labs™ & Walmart Canada Case Study](https://www.hyperledger.org/case-studies/dltlabs-case-study)

#### taXchain: Streamlining EU Tax Form Processing

Developed by KrypC and supported by Henkel and Siemens, taXchain introduces a blockchain network specifically for digitizing tax forms using Hyperledger Fabric 2.2. This innovation demonstrates significant efficiency improvements, with one tax form currently in production and more in the pipeline for implementation.

[taXchain Case Study](https://www.hyperledger.org/case-studies/taxchain-case-study)

#### ChainYard and IBM: Redefining Vendor Onboarding and Risk Management

In collaboration with IBM, ChainYard has made a significant impact in reducing new vendor risk and onboarding time from 60 days to just 3 days. Their approach and projected results include:

- Streamlining the onboarding of B2B suppliers.
- Modernizing supplier information management to reduce risks.
- Establishing a new digital ID standard in the industry.


## Team :busts_in_silhouette:

### Team members

- Mukesh Toppo
- Anwesh Nayak

### Contact

- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email (e.g. john@duo.com)
- **Website:** Your website

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/<your_organisation>/<project_1>
- https://github.com/<your_organisation>/<project_2>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/<team_member_1>
- https://github.com/<team_member_2>

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/<person_1>
- https://www.linkedin.com/<person_2>


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone. You can refer to details provided in previous sections.) |
| 2. | Substrate module: Y | The Y Substrate module will... |
| 3. | Substrate module: Z | The Z Substrate module will... |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5. | Library: ABC | We will deliver a JS library that will implement the functionality described under "ABC Library" |
| 6. | Smart contracts: ... | We will deliver a set of ink! smart contracts that will...


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

...


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDT/USDC) payment address. Please also specify the currency. (e.g. 0x8920... (USDT))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
