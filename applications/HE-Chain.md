# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** HE-Chain
- **Team Name:** Cryptoviet
- **Payment Address:** 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:


### Overview

- Abstract

  HE-Chain: The decentralized blockchain platform is built for high-frequency application, customization for NFT blockchain game projects. Applications running on top of HE-Chain will never bother about the security, spamming, transaction fee, malicious accounts, and many other bad factors,  they only need to focus on gameplay, game experience. HE-Chain supports EVM (Ethereum Virtual Machine) that projects deploy from Ethereum, Binance Smart Chain to HE-Chain with little or no changing.

- Thanks to Parity's technologies
  
  HE-Chain is layer one that builds from Substrate and EVM compatible using [Frontier](https://github.com/paritytech/frontier).
  
- Cryptoviet team motivation

  As the current project name [Heroes And Empires](https://heroesempires.com/) running on Binance Smart Chain, mostly due to the scalability and the cost of operating, we build the platform for Heroes And Empires then many other NFT Blockchain Games.
  We had the experience of What NFT blockchain games need, Why we have to build HE-Chain, and How to build HE-Chain to solve the problems that current NFT Game face when they run on Ethereum, BSC, even Solana.
  
### Project Details


![HE-Chain Architecture](https://github.com/cryptoviet/he-chain/blob/dev/HE-Chain%20Architecture.jpg)


- **HE-Chain Architecture**:

  Two-part of the HE-Chain are Heroes and Empires, the Empires is inside the red rounded rectangle and the outside is the Heroes.
  
  **Empires**:
  
  Players have to join Empires to get the privileges, when they are in the Empires, they won't bother about the transaction fee but they can only make the limited of transactions per minute that are handled by TX-Handler, and they will be charged the amount of fee base on the period of time they stay in the Empire Pool. The Empire Pool will also ban 'bad' players with the Autoban mechanism.
  
  **Heroes**:
  
  As heroes players can do anything with no restriction but with the 'high' transaction fee. 
  

  
- **Pallet structure**

  Project breaks down into 4 pallets:

  pallet-pool: Mange players in the Empires by limiting the number of players, changing upfront every 'x' time (x depends on the number of players staying in the       pool and number of projects running on HE-Chain, x will be determined when testnet go live). Ban players with bad activities follow by the DAO rules.

  pallet-tx-handler: Manage player's transactions on the Empires, every minute or hours players only can make 'x' transactions. Reduce 'y' percentage of               transaction fee. 'x' and 'y' will be determined by DAO.

  pallet-player: Handle player information likes id, name, friends...

  pallet-evm: build Ethereum compatible to deploy Solidity code.




### Ecosystem Fit

  At this moment, most of NFT Gaming projects running on Ethereum, BSC, or Solana name Axie Infinity, the Sandbox, Decentraland... and as we do the [Heroes and Empires](https://heroesempires.com/). We consider thoes platform are "common" chain because they can fit to many purposes but doesn't specialize for NFT Blockchain Game. Inspired fron Substrate philosophi that 'builders can just focus on the chain logic' so we build HE-Chain specialize for NFT Blockchain Game.
  We know the 'pain' of scalability and  the cost of operating that Heroes & Empires spent more than $3M just for the transaction fees, we do think if we bring that money to grow H&E ecosystem that could be the game changing.
  Our current user target is the NFT Gaming projects or high-frequency applications and of course if Heroes and Empires. HE-Chain will ship fully decentrialze platform and web3 to around 400k users of H&E and millions of users in cryptocurrency world.
  
  At the Kusama/Polkadot ecosystem, all the EVM compatible can be the same as HE-Chain at this time but with specialize of HE-Chain chain logic, there is no project nearly the same as HE-Chain acording to [Dotmarketcap](https://dotmarketcap.com/ecosystem).

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
