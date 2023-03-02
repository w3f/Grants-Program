# Decentralized Security Marketplace


- **Team Name:** Magic Powered Inc,
- **Payment Address:** Magicpowered.eth, USDC, Ethereum
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1, 2 or 3

## Project Overview :page_facing_up:

This application is a response to an [RFP: Decentralized Security Marketplace](https://github.com/0xCaso/Grants-Program/blob/604d506591ea57eef4fee04aa2cfdf2010e8772c/docs/RFPs/Open/decentralized-security-marketplace.md)

### Overview

#### Tagline: Decentralized Security Marketplace

This project aims to build a platform connecting a broad community of engineers and web3 projects that need audits. For web3 projects, community contests and bounties can provide more time&cost flexibility and better capabilities diversity than traditional security audits. For engineers, the platform offers the ability to learn with a vast community and gain experience in a wide range of web3 projects, guaranteeing payments for work done.

Actors:

- Projects - The projects that want to be reviewed/tested;
- Engineers - Community engineers: Developers, QA, Security experts. - People who apply for a bounty and do the audition work.
- Judges - Top performing auditors chosen from the community with recorded credentials on the platform. Judges validate reports posted by Auditors to ensure fairness and transparency of the contest.

The platform provides rewards lock and release (escrow) functionality to reward engineers submitting their audit reports.

As mentioned, the system has three actors: Projects, Engineers, and Judges.

Projects can submit their bounties by defining the following:

- Project description
- Scope boundaries of the audits (list of files and/or links that are inside and out of scope)
- Rewards pool size
- Rewards percentage or levels for each serenity category of issues found
- Description of the serenity levels of the problems that may be found
- List of known issues that are out of scope for the bounty
- Instructions on how to compile, build, and run tests, if applicable

Then, the project admin has to move rewards funds to the bounty pool smart contract. The bounty pool smart contract will have all the necessary information to make automatic payments for each issue found:

- Kinds of issues
- The size of payment for each issue is found in each category.

![Bounty creation flow](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/create-bounty.png?raw=true)

Engineers submit their issues reports as proposals for the rewards pool.

![Report submission](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/submit-report.png?raw=true)

Judges then review all report submissions and verify them. After validation, they vote for the proposal. When the consensus of judges accepts the proposal, it executes by sending rewards to the engineers.

![Successfull report](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/successfull-report.png?raw=true)

The judge can change the reward size in the proposal and the serenity of found issues at any time by consensus mechanism together with other judges.

![Change report submission](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/change-proposal.png?raw=true)

Any eligible community member can become a judge. Judges are rewards from the same rewards pool with a percent of rewards to be distributed by the proposals they review.

The eligibility criteria for a community member to become a judge will be provided during the protocol design phase.

### Project Details

The central piece of the platform will be the smart contracts:

- **Rewards pool contract**: Lock and release rewards funds for developers that make audits.
- **Governance contract**: Control and verify audit reports submissions
- **Souldbound NFT**: Help identify if a community member is a Judge and can vote for audits reports.

![Smart contract composition](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/architecture/smart-contracts.png?raw=true)

We leverage a data aggregation and indexing pipeline built on top of the SubSquid and postgres database to ensure low latency and high availability.

The GraphQL API will provide all necessary data to the Frontend application of the Platform.

The Frontend application, as mentioned, should read the GraphQL API to get all information and let users communicate with the smart contract directly using their wallet.

![AppStructure](https://github.com/magic-powered/decentralised-security-marketplace-architecture/blob/main/img/architecture/app-structure.png?raw=true)

Technical stack will be the following:

1. **Rust** for smart contracts
2. **Typescript** for backend and frontend code
3. **Nodejs** for lambdas and SubSquid processor
4. **React** for frontend application
5. **Terraform** for provisioning the infrastructure

Infrastructure stack:

1. AWS EKS
2. AWS Lambda
3. AWS RDS
4. AWS API Gateway

### Ecosystem Fit

- Engineers can contribute to the overall security of entire ecosystem.
- Projects receive diverse security reports for their code and technology.
- Security community growth.
- Open Platform helps new engineers learn fast by participating in the community and learning by the open reports. 
------
## Team :busts_in_silhouette:

### Team members

- Name of team leader
- Names of team members

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

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

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
- **Payment Address:** BTC, Ethereum (USDC/DAI) or Polkadot/Kusama (USDT) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
