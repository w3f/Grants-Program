
# Pallet Stylograph 

- **Team Name:** GenesisDAO by Deep Ink Ventures GmbH
- **Payment Address:** Ethereum Mainnet, 0x918a4363C35156c8F85F86795a79189e5A1ef557, USDC
- **Level:** 3

## Overview

> **Stylograph** [ stahy-luh-graf, -grahf ]
> 
> *A writing instrument for applying ink to paper.*


Stylograph is a framework aimed at enhancing the functionality of substrate-based chains in the Polkadot ecosystem with plugin-like functionality.

By using the ink! smart-contracting language, it allows third parties to extend core functionality, providing developers the ability to concentrate on domain logic.

The total ask for this proposal is $100,000 and it is planned to have a subsequent development to use this functionality within Genesis DAO.


## Project Details

### Introduction
A group of people surrounding Ken Thompson and Dennis Ritchie were quite busy at Bell Laboratories shaping the world as we know it today. They invented a milestone in programming languages — C, the breakthrough operational system Unix, the first shell, UTF-8 and a long list of others that alone would have been enough to receive a Turing award.

How were they so productive? Of course, the density of talent at Bell Labs was as high as within the Beatles (before John married) — but one tiny detail helped drive them. And that can be summed up in one word: focus; finding out what holds the application together in its innermost folds and excelling at that. It takes writing programs that do one thing and do it well. Today, this set of guiding principles is popularly known as the unix philosophy.

This fundamental building block of system design is what guides substrate development today. The ecosystem of polkadot is a set of domain-specific chains that focus on building the infrastructure for the web3 universe. 

The ink! smart-contracting language can be run on substrate chains either as a [core value proposition](https://use.ink/how-it-works#use-case-1-smart-contracts-as-first-class-citizens) - with the chain being an ecosystem for protocols developed in ink! on top of it - or as [second class citizens](https://use.ink/how-it-works#use-case-2-smart-contracts-as-second-class-citizens) - with protocols being able to build on top of the domain logic. 

*Stylograph* introduces a third use-case by utilizing ink! as configuration language to alter the domain specific language itself by introducing a simple and straightforward framework to inject loosely-coupled hook points into your pallets that will call smart contract functionality in registered contract on the contracts pallet. 

Stylograph is to substrate what plugins and and extensions were for CMS, Shops in web2 - a smooth way for third parties to extend the core functionality for a chain. It gives substrate developers the way to concentrate on doing their domain logic well whilst their users and protocols building on top maximize flexibility and time to market.


### Motivation
Deep Ink Ventures is building a system parachain for the polkadot ecosystem that is building infrastructure for Decentralized Autonomous Organizations - Genesis DAO. 

At *Genesis DAO* we are committed to the unix philosophy. 

We are focused on the domain of DAO management with the core components of creating and running DAOs, overseeing token issuance and DAO treasury and having a rocksolid proposal and voting infrastructure.

However, DAOs can have small and granular requirements that do require small tweaks and adjustments. Sometimes on-top protocols like Yield Aggregators require additional functionality. Some of those changes may be deal breaking for technical use cases or legal reasons and therefore a hard requirement for newly founded DAOs.

The core team ultimately has to decide what features are reasonably part of an unbloated core and there is no one-size-fits-all solution to a lot of problems. This is where Stylograph comes to the rescue.

### Framework Components Overview

The following is an overview of the architecture we build and is merely to sketch the scope and general concept; implementation details may vary.

#### pallet_stylograph
This pallet acts as an abstraction layer on top of pallet_contracts in order to conveniently create callback based implementations.

The pallet will have initial support for *ink!* The concept is easily extendable though for other languages such as *solidity* or *ask!* that can be added.

![image](https://user-images.githubusercontent.com/120174523/236872194-471198c3-48d8-4acc-842b-0ac450929908.png)


Since substrate does not know about the structure of smart contracts deployed in ink beforehand, substrate developers utilizing Stylograph need to register the function signature they want to support for callbacks.

This is a one-liner in the chain specs:

Stylograph is now aware of a function given by signature, function name or trait definition and knows its associated gas limit.

![image](https://user-images.githubusercontent.com/120174523/236872381-418dacb9-e776-4f5f-af0a-1c133196c2dc.png)

With the callback defined the core developers now can add callback functions into their pallets that extension developers can utilize. 

For example, the function above may alter the original vote in order to come up with a more complex algorithm (and it is therefore valuable to carefully select the arguments for the callback function for extension developers to be flexible).

An example might be something like this:

![image](https://user-images.githubusercontent.com/120174523/236872439-2b1cc9aa-0a5f-4982-9fc2-723828e7cfb5.png)


The next part is the registering of extensions by accounts - the second argument given in the callback above. 

The substrate node implementing can decide how they want to interpret this - e.g. if the extensions are per account or if the account represents an entity on the chain. The latter is true for _Genesis DAO_ where the account needs to be the owner of the dao - each DAO can register its own hookpoints to tweak the core to its needs.

![image](https://user-images.githubusercontent.com/120174523/236872530-d4cd6aec-03f5-4221-8cd8-a67a2b04da5f.png)


The framework now has all the information at hand to execute a fully abstracted _pallet_contracts::bare_call _and to handle errors associated with it:

1. The user calls the extrinsic of the implementing pallet. In the case of GenesisDAO that might be the _dao_votes_ pallet to intercept the voting process in order to alter the majority voting to a different decision system.
2. This pallet executes the callback that takes the information given from the _dao_votes_ panel and looks up the callback definitions registers.
3. It constructs a call to the ink! contract defined.

![image](https://user-images.githubusercontent.com/120174523/236872662-8518baf7-47c0-431a-9a3c-b72ccd845624.png)

The gas fees are therefore called by the person utilizing the functionality - the user calling the initial extrinsic.


#### ink! Stylograph Facade Builder

The aforementioned information is enough to auto generate a full boilerplate contract as template that substrate chain developers can use to deploy a sample contract and to write a macro that defines the interface that the runtime expects. 

This contract can be released to the extension developer community to use it as a boilerplate template. They can as well import the trait for the contract to be sure that they are compatible with the specs defined by the runtime.

![image](https://user-images.githubusercontent.com/120174523/236872845-248bc23e-a96b-4008-8e9e-6d6cf1756d35.png)

We therefore are building a cli tool to package a versioned ink! crate with installation steps and base documentation that can be published with a new runtime release of the chain to give protocol and extension developers a head start to extension development.

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
