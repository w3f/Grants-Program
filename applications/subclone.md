# Subclone

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
- **Team Name:** Subclone
- **Payment Address:** BTC, Ethereum (USDT/USDC/DAI) or Polkadot/Kusama (aUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

### Overview

One of the most unique features of Substrate is an ability to upgrade the chain without hard forking it, a.k.a runtime upgrades. Runtime upgrades are a very powerful tool, which allows to fix bugs, add new features and improve the performance of the chain. However, runtime upgrades are also very dangerous, since a faulty upgrade can brick the chain. For example, a faulty upgrade can cause a chain to be stuck in a loop, or it can cause a chain to be unable to process any transactions. 

Runtime upgrades that contain storage migrations require even more attention.

As a Substrate developer, you might have already experienced the pain of properly testing your runtime upgrade before it goes to mainnet. Especially, when the upgrade contains a storage migration which alters a storage with a large amount of entries. It is very hard to simulate the upgrade on a local development chain, since copying the state from a live chain to a local one is a very time-consuming process and there are few tools to help you with that. Many parachain teams just maintain a staging or testing network which contains mostly a dummy data, and perform the upgrades there before going to mainnet. However, this approach is not ideal, since the staging network is not a real representation of the mainnet and it is unknown how the upgrade will behave on the mainnet.

As a result of this, there are currently several issues and discussions in the forums about reverting the runtime upgrade changes that bricked the chain. For example, an open issue [here](https://github.com/paritytech/substrate/issues/7558), a forum discussion about recovering a parachain  [here](https://forum.polkadot.network/t/how-to-recover-a-parachain/673) and another one about [parachain emergency recovery](https://forum.polkadot.network/t/polkadot-summit-barcamp-submit-agenda-topics-30-nov-1-dec/669/8).

I believe that the best way to avoid bricking a live parachain or a Substrate node or passing a faulty runtime upgrade is to have a better testing process. For that, we need a testing environment which is as close as possible to the live chain. In this research project, I will work on building a proof-of-concept implementation of a clone network that keeps track of the storage changes in the *target* network.

### Project Details

**Subclone** will leverage another key feature of Substrate - offchain workers. Following the Substrate convention, 

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

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
- Business-oriented activities (marketing, business planning), events or outreach

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

Please describe the team's relevant experience. For research-related grants, references to past publications and projects in a related domain are helpful.

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

### Google Scholar Profiles (Or other research indexer profile, ex. Researchgate)
- https://scholar.google.com/citations?user=<person_1>
- https://scholar.google.com/citations?user=<person_2>

## Development Status :open_book:

If you've already started working on your project or it is part of a larger project, please provide a link and a description of the research here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation.

## Development Roadmap :nut_and_bolt:

This section should break the research development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories, including research [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the deliverable we should expect in as much detail as possible_, plus how we can verify that deliverable. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you cite it. If your research contains software artifacts in the same situation, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Literature Review and Data Collection

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0e below are mandatory for all milestones**.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | CC0 / CC BY 4.0 / Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation/Tutorial | We will provide both **artifacts documentation** of the deliverables and a basic **tutorial** that explains how a user can (for example) execute the code included or can visualize data or use any artifacts included. |
| **0c.** | Methodology | Detailed explanation of how the results were achieved and how to reproduce/verify the results. |
| **0d.** | Infrastructure | We will provide the list of all infrastructure requirements (text editors with proper versions, software packages, data packages, etc) that can be used to verify the deliveries with this milestone. Ideally, we recommend the usage of LaTeX/Overleaf for article production and Docker files for software execution. |
| **0e.** | Article | We will send an **article** or part of it (with source code) that explains in the English language [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | List of academic papers regarding X | We will systematically search the literature about X and deliver a list of papers to read with web links to them |
| 2. | Data to be extracted from the papers | Data fields with the explanation of each that will be extracted from the papers ... |
| 3. | Analysis procedures | We gonna describe all the procedures planned for the analysis that will be conducted in the next milestone ... |


### Milestone 2 Example — Data Analysis

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
