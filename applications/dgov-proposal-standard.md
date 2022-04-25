# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** DGov on-chain proposals and API
- **Team Name:** Decentration
- **Payment Address:** BTC, Ethereum (USDT/DAI) or Karura (kUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

**tagline** - Sovereign on-chain governance, publishing and organisation for Substrate  

With nearly three years of battle hardened experience funding projects in Edgeware, one of the most active proposal and governance system within the Substrate ecosystem, we have developed some insight to improve the proposal process. 

We believe governance systems should be considered as publishing platforms for sovereign public networks since the persistence of nuanced and context specific communications alongside on-chain actions are essential to the enduring and scalable collective intelligence of a Substrate community. 

We propose Edgeware to match fund with W3F.

### Overview

This grant focuses on building DGov 1.0 - a project that moves many off-chain elements into on-chain actions. We are also introducing a [_Network Services_](https://commonwealth.im/edgeware/discussion/3650-decent-partners-an-introduction-to-network-services) organisational structure thats aid the curation, onboarding and management of funded projects. We expect to develop it further to expand the native governance logic of Substrate, making systems simpler, more intuive and ultimately sovereign. 

With governance systems acting as publishing platforms for network native communities, there is a pressing requirement to build core Substrate infrastructure that ensures Web3 values of data ownership, provenance and sovereignity are prioritised.

The solution is DGov on-chain proposal system (first remarks, then pallets) and well documented and easy to use API. 

We will store key proposal data on-chain linked to IPFS, protecting the version history, allowing for the honoring of proposals with hashes as evidence. 

The API opens up access to other teams and platforms to use the data in useful ways that benefit the community. 

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

On-chain governance and publishing tools for sovereign Substrate chains 

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

We are building this as a pressing requirement for both Edgeware and Kabocha and believe it is a project that can benefit the ecosystem more broadly since it seeks to address a primary challenge facing the long term viability, productivity and scalability of Substrate communities.  

- What need(s) does your project meet?

Sovereign on-chain governance and publishing

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

Currently dedicated governance platforms such as [Commonwealth](https://commonwealth.im) which is where Edgeware's communication is based offer basic tools and chain integrations, but are primarily off-chain.

  - If so, how is your project different?

The proposal history is held within a centralised off-chain system, with data held by a third party focused on a multi-chain architecture whose design may not prioritise the long or even short term sovereignity of a community. 

There is also no API for another team in the community to leverage the data, and make their own interface / tools, which forms an unecessary monopoly on the data. Proposals are also an essential part of a community, as it is the core records which unlocks funding from the treasury. The verification and preservation of this data is essential to just distribution of a cryptocurrency, and also in some cases justify inflation of the cryptocurrency to fund human endevour. 

  - If not, are there similar projects in related ecosystems?

We can see inspiration in Decred's transparent censorship model for its on-chain governance and proposal system [Politeia](https://docs.decred.org/governance/politeia/overview/) where they include version control and proposals and comments are hashed to the chain. 

## Team :busts_in_silhouette:

### Team members

- Name of team leader
- Names of team members

### Contact

- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email (e.g. john@duo.com)
- **Website:**

### Legal Structure

- **Registered Address:** 
- **Registered Legal Entity:** Decentration 

### Team's experience

Ramsey - Substrate Engineer, API developer and technical founder. Have 15 months experience in the substrate ecosystem.
Here is a recent contribution from me in Substrate Seminar:
https://www.youtube.com/watch?v=IiAkJAfZsug&t=2299s

Joined the Edgeware community, and became a council memeber. I am technical steward for Kabocha parachain https://kabocha.network.

Interested in Education surrounding blockchain. Recently helped to get Substrate Recipes funded as it was a deprecated learning resource, but one that was very useful and many others in their success path in Substrate. 

Relevant previous (Web2) work includes building an API and spec for invoice factoring fintech https://docs.beansapi.com

Rich - Edgeware council member, nearly 2+ years contributor, founder at [Decent Partners](https://decent.partners), introduced Network Services model and has stewarded many of the projects proposals and iterated the governance process. Previously Decred contributor, cofounder [Copa90](https://copa90.media). 

Jan - Full Stack Developer with experience building tools for Edgeware and Kabocha parachain crowdloan.  


### Team Code Repos

- https://github.com/decentration
- https://github.com/kabocha-network/parachain
- https://github.com/edgeware-network
- https://github.com/johny
- https://github.com/monsieurbulb/forksintheroad/blob/master/Decred_forks_in_the_road.md

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

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

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Implement Substrate Modules

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone) |  
| 2. | Substrate module: Y | We will create a Substrate module that will... |  
| 3. | Substrate module: Z | We will create a Substrate module that will... |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  


### Milestone 2 Example — Additional features

- **Estimated Duration:** 3 month
- **FTE:**  1
- **Costs:** 37,000 USD

...


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
