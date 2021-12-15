# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Venice Finance
- **Team Name:** Venice
- **Payment Address:** BTC, Ethereum (USDT/DAI) or Karura (kUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

Venice is a next-generation, ZK powered, decentralized finance platform, primarily focused on privacy preservation and cross-chain liquidity aggregation. At launch, Venice will be the first front-running resistant Automated Market Maker (AMM) Decentralized Exchange (DEX) in the world.


### Overview

Venice offers programmable & composable privacy solutions for liquidity migration cross all blockchains via bridges. Venice provides the following features:
* Advanced cryptography algorithms including Bulletproofs, Turbo-PLONK, MPC, etc. to encrypt smart contract inputs. 
Front-running resistance and full anonymity to protect users from value extracting players.
* VENI’s innovative deflationary tokenomics design and game-theoretic-inspired mining mechanism guarantees long-term sustainability of Venice protocol. 
Venetians collectively decide on the optimum solution for the protocol through farming, staking and voting.
* Venice allows users to frictionlessly and trustlessly move liquidity inter-ecosystem without revealing their position or identity.
Venice has secured $10 million worth of liquidity incentives from its investors and partners towards launch. 
 



### Project Details

<s>We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious </s>

* Onion Transfer & ZK Synthetic Assets
Onion Transfer utilizes cryptography algorithms, like atomic swap and anonymous transfer, to create ZK synthetic versions of any asset supported in the Venice ecosystem, removing account traceability and introducing fundamental privacy protection.
This process enables a “decontamination” process which helps users to establish privacy-preserving on-chain identities by breaking the link between sources and destination addresses. It automates the transfer of user assets from a traceable account, linked to an identity KYC'ed on CEX, to an untraceable address; users can migrate and trade their assets from a “contaminated” accounts on the many ecosystems supported by Venice  for privacy protection. 

![image](https://user-images.githubusercontent.com/96151378/146103229-8510bfa5-09c7-4604-bb6b-1b4ff4192bc6.png)

* FRONTRUNNING RESISTANCE (Bulletproofs)
Leveraging the Bulletproofs functionality interfacing to the EVM ledger using pre-compiled contracts, the asset type and amount in the txn data can be masked in a smart contract while the transaction itself still remains public and verifiable. 
Venice supports trades/swaps wherein the asset type and amount are masked, providing an elegant mechanism to prevent front-running while maintaining the ideology behind a completely decentralized and transparent system.

![image](https://user-images.githubusercontent.com/96151378/146103370-165c6d44-9056-4491-859b-6454a14428c0.png)

* FULLY-ANONYMOUS PRIVACY (Turbo-PLONK, MPC)
The technologies of Onion Transfer, together with front-running resistance, have provided a full set of privacy solutions. For mass adoption of the Pri-fi evolution through frictionless UX and better product-market fit, V3 will interface ‘Triple Masking’ to EVM to provide fully-anonymous privacy to obfuscate all smart contract inputs, allowing a user to trade without revealing his identity or position.
 - This feature is implemented by an efficient implementation of Turbo-PLONK, to be deployed on the UTXO ledger first and then exposed to the EVM ledger through pre-compiled contracts.
 - This feature enables the sender to provide zero-knowledge proofs of a transaction inputs, which is verifiable by the ledger without revealing details of the transaction.
 - The network in this case would be secured through a multi-party computation (MPC).
![image](https://user-images.githubusercontent.com/96151378/146103649-4af3af42-c3a2-4c1c-b90d-93930a530df6.png)




### Ecosystem Fit

<s>Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems? </s>

Built on the ethos of usability and privacy, Venice is a next-generation decentralized finance (DeFi) platform focused on privacy preservation and cross-chain liquidity & interoperability, to be launched as the first front-running resistant Automated Market Maker (AMM) Decentralized Exchange (DEX) in the world. Venice provides the Polkadot ecosystem with the features of atomic swaps and anonymous transfers. 
There are some similar AMM like Uniswap and Polkaswap. But these DEXes exploits from a fully-transparent ledger when privacy is deprioritized. Inheriting default programmable privacy, Venice is able to protect the users in Substrate / Polkadot / Kusama from malicious exploits including front-running attacks/GPA-style MEV, transaction linkability, identity traceability, and so on. Venice is committed to the ideals of permissionless access, privacy-protection, and auditable transparency, all indispensable components for a future where anyone in the world can access financial services without fear of identity breach or related counterparty risk.

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

- https://github.com/VeniceFinance
- https://github.com/VeniceFinance/venice-swap-periphery
- https://github.com/VeniceFinance/venice-swap-core

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

- **Total Estimated Duration:** 6 monthes
- **Full-Time Equivalent (FTE):**  6
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
