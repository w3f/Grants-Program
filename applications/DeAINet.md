# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.

- **Project Name:** DeAINet
- **Team Name:** DeAI Team
- **Payment Address(USDT):** 0x8341e551B0AE5E5905C20A112b123b5F797612f3
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

The DeAI project aims to deliver a fully decentralized artificial intelligence (AI) service network with highly scalable, crypto token incentivized and results in a solution that can serve as the application interface (API) layer in the decentralized development (web3) stack. We present solutions for incentivizing AI nodes for maximum usage of idle resources and distributing AI services for higher availability and security. This grant will allow us to implement a substrate-based AI algorithm blockchain that can not only be used to decentralize computational provider but also used to create DeAI Algorithm NFT. All the AI pretrained weight files and source code will be deployed on IPFS as well as Algorithm NFT.

DeAINet as a part of Substrate / Kusama / Polkadot / Web 3 Ecosystem and has Following Rich Properties

  - Protect the privacy for AI users by executing encryption protocol transparently.
  - Improve the security for AI system by miners consensus.
  - Strengthen robustness for AI service by DeAPI runtime redundancy of miners.
  - Save energy and reduce the service cost by making use of spare resource to mine.
  - Protect AI intellectual properties by algorithm NFTs.

  
### Project Details

#### Architecture
  ![image](https://user-images.githubusercontent.com/95557343/152795929-621711c2-8ab9-4af5-8dfe-078ad29ee7ee.png)

  - Users pay DEAI token to access DeAPIs. DeAINet will periodically generate a certain
amount of new DEAI tokens and half of them will reward to the most active
users. Another half tokens distribute to a random address as an airdrop.
After 4 years, no more DEAI is generated.

  - Miners earn 95%’ users’ paid DEAI to execute DeAPI on their hardware. Each
miner can run all kinds of DeAPIs to satisfy any kind of DeRequest. The
redundancy exactly achieves the decentralization and reliability of DeAINet.

  - Inventors earn 5% users’ paid DEAI as patent fee aside from miners, since they
are AI researchers or developers who invent and create new DeAPIs.

  - DEAI Stakers share profit from miners by staking DEAI to miners for DPoS
(Delegation PoS) consensus.

![image](https://user-images.githubusercontent.com/95557343/152797749-a96e9f40-e1ae-4a02-9679-b446e09f59c5.png)

#### Technologies

  1. Deep learning frameworks: Pytorch, Tensorflow, MxNet, Caffe
  2. Docker
  3. libp2p
  4. Substrate
  5. IPFS
  6. gRPC
  7. Rust
  8. Go

#### Components
  1. **Miner Network**
  It consists of all the computational power providers to offer decentralized AI as a Service which undertake to execute DeAPI to reply DeResponse for user's DeRequest. All the DeAPIs are deployed by Inventors on each miner. Thus, one miner is crashed other miners could follow up to replace the old one. This redundancy with shading could guarantee the decentralized and robustness for DeAI network. 
  
  2. **Inventor Network**
  It is a DAO sub-project for Inventors such as AI researchers and developers to submit their code and pretrain weights to setup AI service API through DAO mechanism which is a decentralized App with a UI website interface. Any inventors can submit a proposal to setup APIs but, only DAO approved proposals could finally be realized and accepted to deploy on all the miners. Therefore, DAO could make sure the quality and necessity for a new API creation. Meanwhile, once a new DeAPI is setup, a corresponding algorithm NFT is minted and send to inventors address as a digital patent. The user's  paid fee will send to NFT holders.
  
  3. **User Network**
  It consists of all the callable DeAPIs in the application layer for users to send request and retrieve the response which also implements a DPoS concensus aside from kusama/polkadot to guarantee the decentralization, venerable and security. 
  
  4. **NFT Marketplace**
  A marketplace beyond the DeAINet for traders to buy and sell algorithm NFT or digital patent to earn gains. 

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
