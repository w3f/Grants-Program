# Marco Polo Technologies - a Web3 infrastructure to power RWAs and bridge traditional finance to digital investments in private markets with Substrate

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Marco Polo Technologies
- **Payment Address:** In the case of fiat payment, please share your bank account privately with grants@web3.foundation via your contact email (see below) and enter the date when you shared the information with us (e.g. Fiat 24.12.1971, 11:59) here. Otherwise, provide the BTC, Ethereum (USDC/DAI) or Polkadot/Kusama (USDT) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1, 2 or 3

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

### Overview

#### A liquidity protocol for real-world assets (RWAs) to securely and compliantly automate primary and secondary token issuance in digital private markets.

#### Description

Marco Polo Technologies bridges the gap between traditional finance and innovative digital solutions, aiming at connecting real-world assets with digital finance. Our infrastructure serves as a secure and compliant foundation for diverse business models, for companies in turnaround phases and to those seeking a technological edge. With customizable workflows and a range of pre-built and _ad hoc_ functions, businesses can swiftly integrate our solution into existing digital or offline models. Additionally, we are developing a user-friendly UI architecture, enabling non-tech-savvy clients to create their alternative finance platforms with a close to _drag-and-drop_ experience.

Through our infrastructure, businesses can expand into previously underserved markets, connecting real-world assets to a broader audience. Our ongoing efforts harness the synergy between asset owners, investors, and issuers, facilitating transformative changes within private markets into public-like, frictionless models, injecting liquidity, accessibility, and transparency into digital private market investments, making them more impactful, appealing, and inclusive.

#### Marco Polo Technologies, Substrate and Polkadot - A brief description of our project.

Our first layer of infrastructure is built on Rust, and to add a blockchain that focuses on the primary and secondary issuance of tokens representing real-world assets (RWAs) in private markets while enabling access to many different investor classes, we chose _Substrate_ as our development framework as a natural addition to our existing technology. By building a liquidity protocol for RWAs on _Substrate_ and connecting it with our comprehensive infrastructure, Marco Polo Technologies (MPT) aims to share, among other future benefits, the following benefits with the Polkadot ecosystem:

- Promoting financial inclusion: We will onboard reliable clients through established social connections, making digital private markets more accessible to a wider range of investors and asset owners, leveraging our proprietary social network.
- Enhancing asset interoperability: By enabling the seamless transfer and trading of RWAs across the Polkadot network, we will increase liquidity and accessibility for all market participants.
- Expanding market access: We will provide a gateway for a diverse range of participants to access private markets and RWAs issuance and trading, enriching the Polkadot ecosystem's financial landscape.
- Fostering DeFi innovation: We will leverage RWAs within the decentralized finance (DeFi) space, supporting existing possibilities for DeFi applications such as fractional ownership, collateralization, and asset-backed lending. This will attract new clients and assets to the Polkadot ecosystem.
- Building a robust ecosystem: We will add a layer of financial functionality that complements and strengthens the overall infrastructure of Polkadot. This will attract more platforms and clients to the ecosystem and expand its use cases.
- Interoperability with other blockchains: We will support a variety of RWAs and facilitate easy trading and investments across the network.
- Wallet support: Our protocol will be interoperable with other wallets in the Polkadot ecosystem, supporting various fiat currencies. This will make it easier for users to store and manage their RWAs.

#### Team interest

Our team is a small, senior, and resourceful group with expertise in global private markets, investments, and technology. Our project has naturally evolved towards private markets and our current project iteration is driven by our goal of tokenizing RWAs, which allows for fractional ownership and exchanges, while breaking down historical barriers such as illiquidity and limited access for smaller investors. We aim to harness the benefits of transparency, immutability, and automated compliance to ownership records by leveraging Substrate and Polkadot's robust technologies. These benefits instill trust and reduce friction within the alternative finance market, making it more accessible and appealing to a wider range of investors and borrowers.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

Our intention is to deliver an initial implementation of a liquidity protocol to support assets tokenization in private markets, our first steps for the MVP would be:

- Set up our asset focused blockchain for private markets and develop its initial attributes: specifically designed for issuance and trading of RWAs, whereas priamry issuance would be the focus in this initial phase. ~ 2 months
- Set up the initial role of the tokens for primary and secondary issuance through smart contracts: creating a token standard that will make it easy for asset owners to
issue tokens that represent their RWAs, and allow investors to invest in and trade these tokens on decentralized private exchanges. ~ 1 month
3. Set up the initial wallet functions and a way to interact with multiple users owning multiple assets, including fiat: we aim at creating a wallet that will allow users to store and manage their RWAs. ~ 1 month

Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):
- The (future) tokenomics of your project 
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
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

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

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