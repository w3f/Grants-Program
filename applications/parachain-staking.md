# Pallet-dPoS for Parachain Staking

* **Proposer:** [Moonbeam Network](https://github.com/PureStake/moonbeam)
* **Payment Address:** 0x9a66721302d9f30a9d11cf48a09c7ef1a842b5c8

## Project Overview :page_facing_up:

Moonbeam is an Ethereum-compatible parachain built with Substrate. Since January 2021, Moonbeam's runtime developer team has written and maintained a delegated Proof of Stake (dPoS) implementation designed specifically for parachains called [`parachain-staking`](https://github.com/PureStake/moonbeam/tree/master/pallets/parachain-staking/src). To make this code useful for other parachain teams, Moonbeam is applying for ecosystem funding to extend, benchmark, and document its dPoS implementation.

### Background

In the Polkadot consensus model, parachains have different requirements and constraints than the relay chain. While `frame/pallet-staking` offers many features necessary for relay chain consensus and shared security, it is overkill for parachains, which operate with more limited execution resources.

Instead of running an on-chain election, [`parachain-staking`](https://github.com/PureStake/moonbeam/tree/master/pallets/parachain-staking/src) implements direct delegation with a bounded number of nominations per `AccountId` (maximum of `Config::MaxCollatorsPerNominator` per account). In this paradigm, token holders (nominators) express exactly which collator candidates they would like to support and with what quantity of stake.

There is a new round every `<Round<T>>::get().length = 600` blocks. At the start of each round, the top `<TotalSelected<T>>::get() = 16` collator candidates (in terms of total backing stake) are chosen to be in the active collator set. At every block, a subset of this active collator set is chosen pseudorandomly by the `author-filter` pallet as valid block authors. Only valid block authors can produce blocks.

Block authors are logged via the `set_author_inherent` method in the `author-inherent` pallet. The logic in this runtime method reports each block author to `parachain-staking`, which distributes inflation rewards after a 2 round delay.

## Team :busts_in_silhouette:

* **Members:** Derek Yoo, Alan Sapede, Antoine Estienne, Joshy Orndorff, Amar Singh
* **LinkedIn Profiles**: https://www.linkedin.com/in/derek-yoo-8a050/, https://www.linkedin.com/in/alansapede/,
* **Code Repos:** https://github.com/PureStake/moonbeam
* **Website:** https://www.purestake.com/, https://moonbeam.network/
* **Legal Structure:** PureStake Ltd, Floor 4, Willow House, Cricket Square, Grand Cayman, KY1-9010, Cayman Islands
* **Team's Experience:** 

The PureStake team has extensive experience developing and delivering complex web2 software systems. In the last year, PureStake has built a number of web3 infrastructure projects including Algorand API Services (https://developer.purestake.io/) and the Goalseeker block explorer (https://goalseeker.purestake.io/), among others.

Derek co-founded Fuze in 2006 and as CTO was responsible for engineering, technical operations, product management, and design as the company grew over time into a 700 person cloud business. Alan was responsible for large parts of the Fuze cloud backend. Before joining Fuze, Alan was on the Google Streetview Team and also worked at NVidia developing drivers.

Antoine has been developing Web3 Dapps since 2016. He has participated in 3 projects inside ConsenSys (VariabL, Localties and Fathom) and helped HyperNetwork build their token system. Now, he's working for Moonbeam and has contributed to the polkadot-js suite (apps, common, api, etc).

Joshy and Amar worked at Parity on the Substrate Recipes.

## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):** 2 FTE
* **Total Costs:** 30000 DAI

Both milestones will be worked on in parallel, but UI development will lag changes to the pallet implementation.

### Milestone 1: Improve Parachain-Staking Pallet

* **Estimated Duration:** 4 weeks 
* **Costs:** 20000 DAI

In addition to updating Rust crate-level docs and [outdated user-level docs](https://meta5.world/stake-docs/) in step (5), we will also pursue the following changes to the current [`parachain-staking`](https://github.com/PureStake/moonbeam/tree/master/pallets/parachain-staking/src) implementation:

1. Benchmark to derive transaction weights. This work has been started in [this PR](https://github.com/PureStake/moonbeam/pull/372).

2. Security Research Labs reported two critical vulnerabilities in `parachain-staking`: (i) total locked balance was not updated in `{collator, nominator}_bond_more` leading to a potential underflow error (which could trigger excessive issuance) (ii) bounded number of nominations per collator allowed any account to fill the slots with the minimum nomination thereby preventing higher nominations.

3. The inflation logic implemented in [`parachain-staking`](https://github.com/PureStake/moonbeam/blob/master/pallets/parachain-staking/src/inflation.rs) is minimal. Instead of integrating `pallet-staking`'s reward curve, the current implementation calculates per-round inflation derived from an annual inflation rate. Although the inflation rate can be updated by governance (sudo as of now), it is constant. Some parachain teams (i.e. Kilt) have requested configurable inflation that uses `pallet-staking`'s reward curve instead because it has been audited and reviewed more closely.

4. Moonbeam reserves 30% of inflation for future parachain bond(s). To support this functionality, `parachain-staking` added the storage item `ParachainBondConfig`. This storage item is updatable by the root origin; it configures the percent (30%) of inflation reserved as well as the `AccountId` which receives the reserved funds. This feature is convenient for parachains in the Polkadot ecosystem, all of which must pay rent to the network by locking funds in the parachain bond.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | GPL3 |
| 0d. | Documentation | Update Rust crate-level docs and [user-level docs](https://meta5.world/stake-docs/) with implementation details. |
| 1. | Benchmark | Benchmark the existing implementation to derive transaction weights and discern optimization opportunities. |  
| 2. | Patch SR-Labs Critical Vulnerabilities | Patch both critical vulnerabilities reported by SR labs. |
| 3. | Configurable Inflation | Replace sudo with governance origin for setting inflation rate. Provide instructions for replacing constant inflation with `pallet-staking`'s reward curve logic. |
| 4. | Configurable Parachain Bond Reservation | Add optional parachain bond configuration that enables reserving a portion of inflation for future parachain bonds. |

### Milestone 2: Parachain-Staking Polkadot-JS UI

* **Estimated Duration:** 4 weeks 
* **Costs:** 10000 DAI

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Custom Polkadot-JS UI | An overlay UI using polkadot-js similar to the `pallet-staking` UI |
| 2. | PR polkadot-js apps | Make a pull request to polkadot-js apps with output |

## Additional Information :heavy_plus_sign: 

The current implementation has [significant unit test coverage](https://github.com/PureStake/moonbeam/blob/master/pallets/parachain-staking/src/tests.rs) and this will be maintained throughout the changes listed in Milestone 1. There are also runtime integration tests written in Rust as well as TS integration tests. Maintenance is not explicitly included in the milestones because test coverage is already relatively comprehensive and we have an incentive to maintain it throughout the proposed changes.