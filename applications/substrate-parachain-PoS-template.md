# substrate-parachain-PoS-template

- **Team Name:** Aband-Network
- **Payment Address:** 0xD6Cec62CE67E09b240B84A3FB53cC1EbA05795d6 (USDT ERC20)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview


Parachain projects require more teams to use PoS, which helps them achieve a certain degree of decentralization, and the economic model is healthier and more favored by the community.
Our aband-parachain project uses the [PureStake/nimbus](https://github.com/PureStake/nimbus) as the Pos block consensus.
In the business layer, we prefer the staking developed by the Polkadot team and a series of modules related to staking. It took us two days to familiarize ourselves with the codes of these two projects, and then implemented Staking on the third day.
This makes us a little frustrated, we are senior developers of substrate, if we are all like this, it will take more time for beginners, even if it is a strong development team,
You shouldn't spend too much time on it either. We hope to make a PoS template, so that developers can develop their own PoS projects without taking a minute.
We also found that moonbean only implements its own staking, which is obviously not what most developers need. Developers need more substrate-native things.
This makes it unnecessary for users to increase learning costs, and these projects with more native modules of substrate can further promote the use of related technologies in the Polkadot ecosystem. so,
It is very meaningful to create a PoS parachain template that only has a different block consensus but the other modules are exactly the same.


### Project Details
### Language
rust, and subsrate
### Details
A substrate development template like [substrate-developer-hub/substrate-parachain-template](https://github.com/substrate-developer-hub/substrate-parachain-template), this template implements PoS.
In this project, we don't have any UI to design, which is the advantage of this project. Because except for the block consensus, other modules come from substrate.
We don't need to write a lot of extra code, and we don't even have our own modules. Let developers not realize our existence, but we do the repetitive work they have to do.
This template comes from our project, we will continue to follow up the latest polkadot version, and there will be more projects to use and maintain together.
We just hope that more parachain project parties can use Substrate's native Staking and Staking-related functions at no cost. Make it as generic as the [substrate-developer-hub/substrate-parachain-template](https://github.com/substrate-developer-hub/substrate-parachain-template).
With more developers using this template, it will further help us find problems when upgrading the runtime or client of aband-parachain. Make Aband-Network more secure.
### Ecosystem Fit

This project makes up for Polkadot's lack of official PoS parachain templates. At the same time, it also makes up for the shortcomings of moonbean, because their Staking is very different from Substrate's Staking.
This is more friendly to both developers and users. It is born for better use of substrate to develop PoS parallel chains. 

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

- **Total Estimated Duration:** 3 weeks
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** 4,000 USD

### Milestone 1 - Based on the nimbus consensus
Based on the nimbus consensus, make a PoS parachain development template with Polkadot Staking and Staking related modules.

- **Estimated duration:** 3 weeks
- **FTE:**  3
- **Costs:** 4000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

|  Number | Deliverable                 | Specification                                                                                                                                                                                                                                                                 |
|--------:|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                     | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                                                          |
| **0b.** | Documentation               | Add documentation explaining how these modules fit together to complete the entire PoS process.                                                                                                                                                                               |
| **0c.** | Testing and Testing Guide   | Add manual tests to prove that the entire PoS runs successfully.  Provide unit testing and benchmarking for the Collators pallet.                                                                                                                                             |
| **0d.** | Docker                      | Provide Docker to the chain, allowing anyone to quickly run the chain                                                                                                                                                                                                         |
|       1 | client code                 | Provide a client with the same functions as [https://github.com/substrate-developer-hub/substrate-parachain-template/tree/main/node](https://github.com/substrate-developer-hub/substrate-parachain-template/tree/main/node).  Such as having the `try-runtime` command, etc. |
|       2 | Substrate Modlue: Collators | The role of the Collators pallet is to provide a validator set for consensus. The validator can come from the staking module, which can also be set by ensure_root in this module, which means that with this template, you can also use the Staking function in the case of PoA, which is very useful if you just only want to reward collators.                                                                                   |


## Future Plans

 - We are very happy to know that Polkadot is officially developing the SASSAFRAS consensus. In the future, we will bring SASSAFRAS to the POS parachain template.
Make this PoS template have more consensus.
- Based on the babe consensus, make a PoS parachain development template with Polkadot Staking and Staking related modules.
## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** [JimYam](https://github.com/w3f/Grants-Program/pull/1050) 
- **Payment Address:** 0x8ab7860cd39f0f2facf61b379e87f3de2e3d4d17 (USDT ERC20)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

personal recommendation

