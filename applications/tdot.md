# W3F Grant Proposal

- **Project Name:** tDOT
- **Team Name:** NUTS Finance
- **Payment Address:** 0x679824d755B054a2a50358008472a6F400740319(DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is a follow-up of the Stable Asset grant.

### Overview

DOT serves three distinct purposes in Polkadot: governance, staking and bonding. These critical functions have increased DOT's demand but also segregated DOT's liquidity across multiple applications.

Several parachains and protocols arise to enhance DOT's capital efficiency, which includes:

* Staked DOT, e.g. Acala's LDOT and Parallel's xDOT
* Crowdloan DOT, e.g. Acala's LCDOT and Moonbeam's stDOT

These DOT derivatives, which represents different forms of DOT across the Polkadot network, further spread out DOT's liquidity. DOT's liquidity fragementation has caused several crucial issues:

* Each DOT derivative need to bootstrap their own liquidity and find a stable pricing
* Polkadot application builders need to support multiple forms of DOT assets

These hurdles are extremely difficult to overcome, given Polkadot network liquidity is still relatively low. tDOT aims at solving these issues by generating unified DOT liquidity across Polkadot applications.

### Project Details

tDOT is a synthetic DOT-pegged asset built on top of the stable asset protocol.

Stable asset is a synthetic asset based on Curve's stable swap algorithm and is back by a pool of assets with the same peg. It utilizes traders to dynamically rebalance pool composition while maintaining a consistent pool value, thus generating a synthetic asset whose peg is much stronger than any of the underlying assets.

taiKSM is the first stable asset deployed on the Dotsama ecosystem. It aggregates liquidity from KSM and Acala's LKSM to generate unified KSM liquidity in Karura. 

<img width="707" alt="image" src="https://user-images.githubusercontent.com/3374016/158498318-a1a4269c-d93b-42f1-a944-3f663ae99073.png">

tDOT extends the idea of taiKSM to provide unified DOT liquidity over the whole Polkadot network. Its architecture is shown above:

* For each xDOT, a separate xDOT-DOT stable swap pool is created on the parachain where xDOT is native;
* Each xDOT-DOT pool can mint and burn tDOT on parachain A which is tDOT's hosting chain;
* If xDOT is not on parachain A, e.g. cDOT and dDOT, xDOT-DOT pool uses XCM to mint and burn tDOT.

Each xDOT-DOT pool is a trading pair between xDOT and DOT. It allows certain range of price difference between xDOT and DOT but ensures the value of its synthetic asset is pegged to DOT. Each xDOT represents a different form of 1 DOT in Polkadot network. According to the stable asset algorithm, when the prices of xDOT and DOT are equal, the synthetic asset is 100% collateralized and is backed by exactly 1 DOT. When the price of xDOT shifts, the synthetic asset is over collateralized and the collateral ratio increases as price shifts further. Each xDOT-DOT pool can control how fast the collateral ratio increases with its own parameter values.

Since each xDOT-DOT pool can maintain pegging of its own synthetic asset, it's a natural choice to unify these synthetic assets into a single tDOT. This brings extra benefits:

* It ensures a single tDOT and it can be bridged to any parachain;
* It unifies all xDOTs over the Polkadot network. New xDOT assets can be included by deploying new xDOT-DOT pool on their native chains;
* It provides sufficient application scenarios for each xDOT. Other than the xDOT-DOT swap, it allows xDOT holders to mint and use tDOT in DeFi applications;
* It can be used as cross-chain swap medium. Assume that bDOT is native in parachain B and cDOT is native in parachain C. Users can mint tDOT with bDOT and then redeem tDOT to cDOT. This user effectively swaps bDOT on parachain B to cDOT in parachain C.

### Ecosystem Fit

tDOT will be minted on Acala since it's the DeFi hub in the Polkadot ecosystem. Acala provides both staked DOT, namely LDOT and crowdloan DOT, namely LCDOT which are both mainstream DOT assets. LCDOT-DOT and LDOT-DOT will be the first two xDOT-DOT pools as well as the first two minters of tDOT. tDOT unifies all DOT liquidity on Acala and it can be used in Acala's native DeFi applications.

Parachains such as Parallel can deploy xDOT-DOT pools on their own chains and mint tDOT on Acala. Their benefits include:

* The xDOT-DOT pool provides a stable swap between xDOT and DOT;
* The xDOT-DOT liquidity is locked in its original chain while minting tDOT so that their TVL is not lost;
* The minted tDOT can be bridged to other chains other than Acala. For example, the minted tDOT can be bridged back to Parallel and be used as collateral of Parallel's lending applicaiton.

For the whole Polkadot network, a unified DOT asset can promote its DeFi applications since it can provide the largest DOT liquidity over the network. In such case, DeFi application builders can support a single DOT asset instead of managing multiple ones.

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
