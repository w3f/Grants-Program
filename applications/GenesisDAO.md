# GenesisDAO

- **Team Name:** GenesisDAO by Deep Ink Ventures GmbH
- **Payment Address:** Ethereum Mainnet, 0x918a4363C35156c8F85F86795a79189e5A1ef557, USDC
- **Level:** 3

## Overview

### Intro
Historically, building DAOs requires heavy commitments to a specific chain and development of features on top of skeleton frameworks or template builders
such as OpenZepplin governance or Aragon DAO. 

This in turn led to significant costs occurring in development, legal structure and
voting mechanisms. As of today, launching a DAO alongside your crypto project
remains a mission.

We see XCM as a shift in the way blockchains interoperate. 10+
years after Forbes announced the API revolution for the Client-Server Architecture of Web 2.0; crosschain messaging is setup to move blockchains into platforms that
can abstract away its complexities and specializations behind a sharp
interface that protocols on other chain-ecosystems can utilize by
tapping into its XCM specifications.

Genesis DAO is among this new wave of emerging platforms and
provides DAOs as a Service. 

Having this in the polkadot ecosystem is not only a huge benefit for
existing parachains and protocols, itll be a competitive advantage for
the polkadot ecosystem as one of the first questions projects have
to face nowadays is: Where to launch the DAO? On Genesis DAO.

### Abstract
Genesis DAO is a platform as a service for DAOs. The platform lives on a polkadot parachain and utilizes Cross Consensus Messages (XCM) as a first-class citizen of its infrastructure. 

It allows teleporting of DAO tokens to other chains to be native parts of the protocol while voting, treasury and other DAO infrastructure is living natively on Genesis DAO. Genesis DAO manages the ramifications  of DAO on its robust platform – the DAO token itself becomes a lego block that can live on every chain of choice.

### Conceptual Overview
EVMs ERC-20 token is a shining example of the Unix philosophy of doing one thing and doing it right: The entire DeFi stack was
built on the shoulders of simple transfer and transferFrom methods alongside a balance entry for bookkeeping.

The basic layer of Genesis DAO is of similar structure, it has the main primitives of DAO participants baked in - voting. This token
and its defined interface can live on all chains and can communicate back to the Genesis DAO infrastructure layer. The DAO Token
is detangled from both - the complications of the DAO governance layer and the wiring to the protocol that it governs.
The parachain infrastructure builds on top of this layer and adds composable features on top of it.

The governance layer and the central infrastructure become first class (pallet level) citizens of the genesis DAO chain and the
feature structure and runtime updates are subject to the votes of Genesis DAO Token Holders themself. 

Therefore the basic primitives of a DAO to manage its votes, treasury and token distribution
will be a fundamental building block of the chain itself.

On top of this lays an EVM (Solidity) and WASM (e.g. Ink!) Layer for protocols to support further customization such as legal structure
document storage and setup, yield aggregation protocols and so on. 

// TODO PIC

Since these protocols have a joint understanding of the interfaces within, Genesis DAO will be a parachain specialized in DAOs.

Home of the governance for everything on chain, with its token becoming a lego block in the ecosystem of all blockchains that aim for decentralized governance.


## Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant) for each kind of project:

Software development projects:
- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

Research projects:
- The problem(s) that you want to investigate, and why these are important. 
- Research questions/hypothesis.
- The methodology that will be applied. 
- The data collection and analysis procedures.
- The expected results and how they would be double-checked by the grants team (reproducibility of the data analysis).
- Relevant related work.
- Intended venue for results publication and the timeline for publication. 
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and clarify any limitations that might not be obvious

Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):
- The (future) tokenomics of your project 
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach

## Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?

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

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.

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

### Google Scholar Profiles (only for research projects)
- https://scholar.google.com/citations?user=<person_1>
- https://scholar.google.com/citations?user=<person_2>

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

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

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
- **Payment Address:** BTC, Ethereum (USDT/USDC/DAI) or Polkadot/Kusama (aUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
