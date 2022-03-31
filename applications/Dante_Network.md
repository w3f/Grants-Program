# W3F Grant Proposal

- **Project Name:** Dante Network
- **Team Name:** Dante Network
- **Payment Address:** 0xc92314a5f62FA54b272612804C9Ac70AC139F7B0 (ERC20 USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

We are sincerely applying for a grant from Web3 Foundation to build an infrastructure to help multi-chains currently in web3 be connected together just as OSI did for the internet in web2. We call this infrastructure Dante Network.

Dante Network is a middleware to empower multiple ecosystems to interoperate and interconnect in web3. In Dante Network, we define and offer a general protocol stack to realize interoperability and interconnection. This is an infrastructure bringing innovative experiences in web3, just as internet protocol is for today’s internet. With this infrastructure, participants in web3 can make general message transmission and contract invocation among multi-chains.

We will cooperate with the smart contract platforms in Polkadot/Kusama to build our protocol stack along with an on-chain router, such that the whole Polkadot/Kusama ecosystem can interoperate with public chains in the whole web3 world generally. For example, more than token, general information can be sent from contracts on ETH to Crust with the help of the on-chain router based on our protocol stack deployed on Moonriver and XCMP of Polkadot.

#### Inspiration
We highly endorse the philosophy of Web3 Foundation. We think the web3 world is expected to be an “internet” of multi-chains, each of which can provide its own special features and every participant can share it worldwide. So there should be a kind of infrastructure that can provide consistent and convenient multi-chain interoperability for Dapps in Web3 so that they can focus on their application business which can serve the whole web3 market instead of staying in some certain ecosystem. 
In our idea, we think different public chains are like realms in mythology. There are barriers for users to having universal transportation to travel around the different realms. And there is Bifrost to open a teleport between realms, but it is neither cheap nor easy.  So inspired by this, we want to grow a “World Tree” that supports open and collaborative ecosystems in web3. 
It can take roots in the computing resources and storage infrastructures in web3 and web2 to provide orderly resource scheduling. And it can grow by offering non-differentiated data collaboration services for Dapps in web3 and providing valid resources. This is why we have the Dante Network. 


### Project Details
**Architecture**
![Architecture](https://github.com/dantenetwork/Pitch-Deck/blob/main/images/%5BEN%5DDante%20Pitch%20Deck3.7_06.jpg)

Generally, the protocol stack includes three layers, the “Service Presentation Layer”, the “Security Quality Layer”, and the “Consensus Verification Layer”. We make a concrete implementation of these.
The “Service Presentation Layer” is at the top of the protocol stack, which can be called “web3 service protocol” in the white paper. They have defined the message organization protocol, the invocation method, and the service interfaces, which can be analogous to “RESTful Web Service” and “HTTPS” in web2. This makes developers of web3 DApps easier to construct. We will bring privacy transaction technology into our protocol stack to help protect the privacy of behavior and data.
The “Security Quality Layer” is the next down from the top, which defines a collection of security mechanisms that can be chosen according to the demand of the application. “SQoS” defines the concrete mechanisms of routing, verification, privacy, authority, etc. This can be analogous to the “QoS” in TCP/IP protocol cluster. 
The “Consensus Verification Layer” is the bottom layer of the protocol stack, which is especially for web3. The verification algorithms include commitment verification and belief verification, which can be adapted to a wider range of scenarios in web3. And besides, a “Parallel Route Scheduling” algorithm is within the protocol responsible for the “route nodes” selection, along with which are the algorithms include evaluation, incentives, and challenge. At the bottom of this layer, they define a “Physical” protocol defining the standard behavior of the working node(named “Adaption node” officially), which is just analogous to the “Physical Layer” of OSI. 

That’s the overview of the protocol stack in Dante Network. We think it can be treated as the “internet” of Web3. The implementation of the protocol stack can be embedded in public chains as the smart contract. That’s just like the TCP/IP protocol cluster embedded in operating systems to construct the computer network.


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

- Name of team leader
- Names of team members

### Contact

- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email (e.g. john@duo.com)
- **Website:**

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/<your_organisation>
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

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 4,000 USD

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
