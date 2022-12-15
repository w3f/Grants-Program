# substrate-parachain-PoS-template

- **Team Name:** Aband-Network
- **Payment Address:** 0xe9029d803ad0f06469cf7c925ada5e7795664917 (USDC ERC20)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview


Parachain projects require more project parties to use PoS, which helps them achieve a certain degree of decentralization, and the economic model is healthier and more favored by the community.
Our aband-parachain project uses the [project of the moonbean team](https://github.com/PureStake/nimbus) as the Pos block consensus, because it achieves randomness, but it only needs the function of randomness.
In the business layer, we prefer the staking developed by the Polkadot team and a series of modules related to staking. It took us two days to familiarize ourselves with the codes of these two projects, and then implemented Staking on the third day.
This makes us a little frustrated, we are senior developers of substrate, if we are all like this, it will take more time for beginners, even if it is a strong development team,
You shouldn't spend too much time on it either. We hope to make a PoS template, so that developers can develop their own PoS projects without taking a minute.
We also found that moonbean only implements its own staking, which is obviously not what most developers need. Developers need more substrate-native things.
This makes it unnecessary for users to increase learning costs, and these projects with more native modules of substrate can further promote the use of related technologies in the Polkadot ecosystem. so,
It is very meaningful to create a PoS parachain template that only has a different block consensus but the other modules are exactly the same.


### Project Details

In this project, we don't have any UI to design, which is the advantage of this project. Because except for the block consensus, other modules come from substrate.
We don't need to write a lot of extra code, and we don't even have our own modules. Let developers not realize our existence, but we do the repetitive work they have to do.
This template comes from our project, we will continue to follow up the latest polkadot version, and there will be more projects to use and maintain together.
We just hope that more parachain project parties can use Substrate's native Staking and Staking-related functions at no cost. Make it as generic as the Aura version of the parachain template.

### Ecosystem Fit

This project makes up for Polkadot's lack of official PoS parachain templates. At the same time, it also makes up for the shortcomings of moonbean, because their Staking is very different from Substrate's Staking.
This is more friendly to both developers and users. It is born for better use of substrate to develop PoS parallel chains

## Team :busts_in_silhouette:

### Team members

- Octavei
- keymi

### Contact

- **Contact Name:** Octavei
- **Contact Email:** octavei@proton.me

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

- Octavei Senior development engineer of Aband-Network, with 4 years experience in substrate development. Familiar with Ethereum and EOS smart contracts. Have done many blockchain projects.
- keymi Aband-Network's CEO. Worked in Google for 5 years, mainly as a product manager.

### Team Code Repos

- https://github.com/Aband-Network/substrate-parachain-PoS-template
- https://github.com/Aband-Network/aband-parachain


## Development Status :open_book:

- https://github.com/Aband-Network/substrate-parachain-PoS-template

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 weeks
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 3000 USD

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 2 weeks
- **FTE:**  2
- **Costs:** 3000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable               | Specification                                                                                                                                                                                                                                 |
| -----: |---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                          |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
| 0e. | Article                   | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)                                                |
|1| try-runtime               | Implement try-runtime for template clients.                                                                                                                                                                                                   |
|2 | modules                   | Implement all staking-related substrate native modules for the template runtime.                                                                                                                                                              |
## Future Plans

We are very happy to know that Polkadot is officially developing the SASSAFRAS consensus, and look forward to completing it sooner, so that we can replace the nimbus consensus and make this PoS template completely Polkadot. Currently we temporarily use nimbus to make block consensus,
It has better pluggability than babe, so that projects developed with this template can be upgraded smoothly.

## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** [JimYam](https://github.com/w3f/Grants-Program/pull/1050) 
- **Payment Address:** 0x8ab7860cd39f0f2facf61b379e87f3de2e3d4d17 (USDC ERC20)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

personal recommendation

