# Name of your Project

- **Team Name:** Zkverse
- **Payment Address:** 0x8554fff69177C2cf470fA276b0C65dB58b5EfEE5(DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

The privacy protection technology in the blockchain is constantly developing, with the emergence of multi-party security computing, differential privacy, homomorphic encryption, zero-knowledge proof and other technologies. At present, ZKP technology is constantly developing and innovating in the privacy and expansion track in Ethereum. So the main goal of this project is to introduce ZKP technology into the polkadot/substrate ecosystem. Polkadot/substrate natively does not support ZKP, so this project(Zkverse, which means zk universe) will provide zk-related pallets to support substrate and more efficient zk proof generation ways.

### Project Details

There are three main tasks for project: 
- integrate some zkp libray(like bellman, arkworks and eg...) into substrate pallet
- Maximize the generation efficiency and convenience of zk proof(The proof is not generated on the chain, but through some developer friendly libraries(like snarkjs) to adapt the zk lib on substrate chain.)
- Publish some tutorial blogs to let more substrate community developers enjoy the convenience of the above zk development

Also, this project mainly focus on privacy function with ZKP technology.

### Ecosystem Fit
By integrating some very popular ZKP libraries into the substrate pallet, the privacy function of ZKP can be realized on the substrate-based chains, which is convenient for developers to develop zk applications on the substrate-based chains. Although zkp has been relatively active in the Ethereum ecosystem, zkp technology has not been widely popularized in polkadot ecosystem.
- [Zeropool](https://github.com/zeropoolnetwork/zeropool-substrate-groth16-example) implements zk on the substrate chain, but this library has not been updated for a long time. The substrate has gone through many development iterations and needs to be supported by the latest library.
- [Glacier](https://github.com/gbctech) is building a Distaff VM for zk-STARK proof generation and verification that are used to make  private smart contracts and private credential verifications.
- [zk-plonk](https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md) would like to implement Zk plonk pallet. However, plonk takes a long time to generate proofs and is generated on the chain, so there may be problems in efficiency.
- [ZK-Snarks tutorial](https://github.com/w3f/Grants-Program/blob/master/applications/ZK-Snarks%20tutorial.md) want to introduce the substrate community into the zk-snarks concept，but their ideas and goals have been implmentd since last year.


## Team :busts_in_silhouette:

### Team members
- Name of team leader: Bun

### Contact

- **Contact Name:** Bun
- **Contact Email:** csj1071285741@gmail.com  

### Legal Structure

- **Registered Address:** 3 FRASER STREET #05-25, DUO TOWER, SINGAPORE
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience



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
- **Payment Address:** BTC, Ethereum (USDT/USDC/DAI) or Polkadot/Kusama (aUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
