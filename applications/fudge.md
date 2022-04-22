# W3F Grant Proposal

- **Project Name:** fudge
- **Team Name:** k-f Dev
- **Payment Address:** *ToBeDetermined*
- **Level:** 3

## Project Overview :page_facing_up:

Fudge (FUlly Decoupled Generic Environment for substrate-based chains) provides a simple and generic way to interact with and manipulate the database of a substrate-based blockchain.

### Overview

Please provide the following:

- If the name of your project is not descriptive, a tag line (one sentence summary).
- A brief description of your project.
- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.
- An indication of why your team is interested in creating this project.

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
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?

## Team :busts_in_silhouette:

### Team members

- Frederik Gartenmeister (Core Developer, Fudge project Lead)
- Jeroen Offerijns (CTO)
- Branan Riley (Core Developer)
- Miguel Hervás (Core Developer)
- Nuno Alexandre (Core Developer)

### Contact

- **Contact Name:** Frederik Gartenmeister
- **Contact Email:** frederik@centrifuge.io
- **Website:** [Centrifuge](https://centrifuge.io/)

### Legal Structure

- **Registered Address:** Grafenauweg 8, 6300 Zug, CH
- **Registered Legal Entity:** k-f Dev AG

### Team's experience

The team is made of experienced Substrate builders and part of a well established project in the Polkadot/Kusama ecosystem.

It has already received grant and developed a go-based rpc library for interacting with Substrate nodes ([GSRPC](https://github.com/centrifuge/go-substrate-rpc-client)). Furthermore, the centrifuge chain is actively pushing xcm integrations in the Polkadot/Kusama ecosystem. All team members have worked extensively on launching Centrifuge and Altair launching the respective parachains. The team is actively contributing to the ecosystem by providing a Chachacha Testnet for other teams. Various team members have presented talks on polkadot related events (sub0, Amsterdot, etc.).

### Team Code Repos

- GSRPC: https://github.com/centrifuge/go-substrate-rpc-client
- Centrifuge-Chain: https://github.com/centrifuge/centrifuge-chain
- Fudge: https://github.com/centrifuge/fudge

Teams github accounts:

- Branan - https://github.com/branan
- Nuno - https://github.com/NunoAlexandre
- Jeroen - https://github.com/offerijns
- Miguel - https://github.com/mikiquantum
- Frederik - https://github.com/mustermeiszer

### Team LinkedIn Profiles

- https://www.linkedin.com/in/branan-riley/
- https://www.linkedin.com/in/nunoalexandredotcom/
- https://www.linkedin.com/in/jofferijns/
- https://www.linkedin.com/in/mhervas/
- https://www.linkedin.com/in/frederik-gartenmeister

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

- **Total Estimated Duration:** 1 year
- **Full-Time Equivalent (FTE):**  TBD
- **Total Costs:** TBD

### Milestone 1 — Stabilize fudge PoC

- **Estimated duration:** 6 month
- **FTE:**  TBD
- **Costs:** TBD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)|
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone) |
| 2. | Substrate module: Y | We will create a Substrate module that will... |
| 3. | Substrate module: Z | We will create a Substrate module that will... |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |


### Milestone 2  — 

- **Estimated Duration:** 3 month
- **FTE:**  TBD
- **Costs:** TBD

### Milestone 3  — Implement fudge eco-system CLIs

- **Estimated Duration:** 3 month
- **FTE:**  TBD
- **Costs:** TBD


## Future Plans

The fudge-library is currently actively used by the Centrifuge project to enable real integration-testing. As the library allows to progress blockchain networks locally the plan is to use it extensively to test complete code-path executions for chains and more importantly for the overall ecosystem, for full xcm-integration tests.

As defined by milestone 3, the lib can be used to generate tools in the ecosystem to ease testing and manipulating a blockchains database for this purpose.


## Additional Information :heavy_plus_sign:

- Work you have already done.
  &rarr; The library has a working PoC, see https://github.com/centrifuge/fudge. Also, is it actively used for the Centrifuge chains integration tests (https://github.com/centrifuge/centrifuge-chain/tree/parachain/runtime/integration-tests).
- If there are any other teams who have already contributed (financially) to the project. 
  &rarr; Just k-f Dev
- Previous grants you may have applied for.
  &rarr; gsrpc 
