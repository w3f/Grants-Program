# Payments Pallet

* **Team Name:** Virto Network
* **Payment Address:** pvirtoK3FxBxXjxhkH2yZ4C62gjpgPNhCE9HnrGqzyocfBA (kUSD)

## Project Overview :page_facing_up:

### Overview

Virto Network aims to create the Local Incentives Protocol([LIP whitepaper][1])
which defines a secure payment infrastructure and means to trade off-chain
assets with cryptocurrency by connecting decentralized markets and users. LIP
will facilitate a better local welfare redistribution through local tax
collection from economic activities.

The [Payments Pallet][Pallet] is fundamental part of LIP, it's an escrow like
system that allows people pay with cryptocurrency for any product or service
from the real world, it has been redesigned from the ground up to be highly
configurable to serve the needs of the Virto Network as well as any other
substrate based chain that wants to engage with real-world assets.

[1]: https://virto.network/docs/whitepaper.md
[Pallet]: https://github.com/virto-network/virto-node/tree/master/pallets/payment

### Project Details

This is a successor and change of scope to the [PLIP proposal][2].
Previous proposal defined a simple escrow system and means for people buying
and selling cryptocurrency to set rates on their listing on-chain. LIP
supersedes that initial version of the protocol defining a more robust,
economically secure and configurable escrow pallet(now payments pallet) leaving
out the *Rates Pallet* that is to be implemented as a external decentralized
API using Matrix as storage backend.

Payments pallet has been reworked to include

* Escrow-like functionality. Payments are frozen in the seller's account until
  a release is triggered, usually when the parties come to an agreement
  off-chain(an end-to-end encrypted Matrix room in Virto)
* An incentive mechanism to ensure that buyers release/confirm the payment.
* Dispute system with a configurable *dispute resolver*, a way for users of the
  pallet to dynamically assign an account to each payment individually with the
  permissions to resolve conflicts when disagreements arise.
* A *fee handler* that allows setting up dynamic fees. e.g. in Virto is used to
  pay a *local tax* to communities and a *market fee* for marketplaces.
* Payment with remark to add extra metadata to payments. e.g. in Virto is used
  to incentive people buying via Marketplaces as the fee handler can use the
  data to apply discounts.

[2]: https://github.com/w3f/Grants-Program/blob/master/applications/plip.md

### Ecosystem Fit

Payments pallet is a useful primitive for any substrate based blockchain that
considers integrating escrow functionality serving as security protection
against scammers and other malicious actors not planning to honor the terms of
an off-chain trade.  

We will propose the inclusion of the pallet in the [orml
repository](https://github.com/open-web3-stack/open-runtime-module-library/issues/665)
as we use some of its crates internally and with the hope it can have better
visibility serving a wider audience. We will also champion its usage outside of
the Virto network(e.g. in Karura) to iterate and validate the pallet's design
and functionality before the Virto Network is launched which comes with the
benefit of bringing our primary use case of decentralized on&off ramps earlier
to the Kusama ecosystem.

## Team :busts_in_silhouette:

### Team members

**Team lead and architect** Daniel Olano  
**Lead economist and game theory expert** Qian Che  
**Runtime Developer** Stanly Johnson  
**Developer and Marketplace builder** David Barinas  
**Rust Developer** Kenji Phang  
**Rust Developer** Gabriela Azcona  

### Contact

* **Contact Name:** Daniel Olano
* **Contact Email:** we@virto.team
* **Website:** <https://virto.network>

### Legal Structure

Virto aims to remain a decentralized autonomous organization and has no plans
to become a legal entity.

### Team's experience

**Daniel Olano** is a Rust/Substrate Guru, and grinding full time to bring his
brain child, Virto, into fruition. He was first inspired to create Virto to
facilitate seamless fiat to crypto onboarding for users with varied financial
literacy to combat the plague of hyperinflation across Latin America, but is
excited to expand to failing fiat economies worldwide. He is currently
facilitating the first Rust developer workshop in Spanish to increase
visibility of Substrate and Polkadot to developers across LATAM.

**Qian Che** is an Economist based in Berlin with a passion of solving
problems that concern public welfare. She has research experience in game
theory modeling about mechanism of coalitions in tackling climate change.
Following this passion, blockchain opens her eyes and she sees it as an amazing
tooling to utilize decentralized system to create positive social impact.
Besides, she has been working as data analyst in global IT firms for more than
5 years. These experience drives her where she is now to further contribute to
Virto Network.  

**Stanly Johnson** is based in Bangalore, India and is a seasoned software
engineer across the stack of programming languages underpinning Web3
technologies, including Rust, Python, and Solidity. He is currently working as
a runtime developer part-time with Valibre specializing in cross-chain
transfers and escrow. Stanly’s passion for distributed systems stems from the
opportunity it provides to reach everyone by eliminating systemic barriers.

**David Barinas** is a hacker minded entrepreneur, ex-CTO and co-founder of
Valiu, a YCombinator startup providing USD pegged accounts and remittances to
people in Latin-America. Excited to apply his expertise in on&off ramps using
Virto Network as the decentralized backend infrastructure for
[*Bloque*](https://www.joinbloque.com)(payments, automation tools and analytics
for merchants in latam).

### Team Code Repos

* <https://github.com/virto-network/>

### Team Github

* **Daniel Olano:** <https://github.com/olanod>
* **Qian Che:** <https://github.com/cheqian0602>
* **Stanly Johnson:** <https://github.com/stanly-johnson>
* **David Barinas:** <https://github.com/stanly-johnson>
* **Kenji Phang:** <https://github.com/KenjiPcx>
* **Gabriela Azcona:** <https://github.com/azconita>

## Development Status :open_book:

Since the PLIP proposal months ago, we have been continuously working and
iterating on the protocol and pallet economics, we have divided the work in two
milestones out of which the first one is already completed.

## Development Roadmap :nut_and_bolt:

### Overview

### Milestone 1 — Payment pallet basic functionality

* **Estimated duration:** 6 weeks
* **FTE:**  1.5
* **Costs:** 21,600 kUSD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | The pallet will come with **inline documentation** and **usage instructions** as part of the crate documentation. |
| 0c. | Tests & benchmarks | All core functions will be fully covered by unit tests and benchmarks to ensure the weights of functions are correct. |
| 1. | Escrow functionality | Economically secure escrow based payments with incentive system for fund release. |  
| 2. | Dispute resolution  | Means for assigning a "judge" individually to each payment to resolve conflicts between the two parties. |  

### Milestone 2 — Payment pallet extensions

* **Estimated duration:** 4 weeks
* **FTE:**  1.5
* **Costs:** 14,400 kUSD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Documentation | We will extend the documentation to include example on how to implement custom handlers and configuration of the extra features. |
| 0b. | Article | We will create an article in virto.network talking about the benefits of the payments pallet and how it can be used by anyone in the ecosystem. |
| 1. | Stand-alone | Making the pallet generic and without being tight to Virto-only features. Create pull request in ORML repository to have the pallet included |  
| 2. | Fee processing | Configurable system to allow custom logic to charge extra fees that might be used by merchants. |
| 3. | Remarks system | Making payments with metadata to allow custom login react differently based on the payment information. |  

## Future Plans

* Integrating the payments pallet in the ORML or Substrate repositories to
  serve a bigger audience.
* Use the payments pallet in an existing Kusama parachain to expedite the
  launch and initial validation of *swap.cash*, Virto's reference use case of
  decentralized on&off-ramps for the Kusama ecosystem.
* Create a first stable version of
  [Valor](https://github.com/virto-network/valor), Virto's runtime that enables
  decentralizable APIs and progressive decentralization.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Web3 Foundation Website, the Substrate Builder's Program, as well as a
networking meeting with the Acala team.

**Previous Funding and Support**

Virto team has received minor funds from the Kusama
[treasury](https://kusama.polkassembly.io/post/616) for creating
[Sube](https://github.com/virto-network/sube), a lightweight Substrate client.  
Also worth noting that in early 2020 Virto Network started as an internal
initiative at Valiu, a YC startup providing dollar accounts to Venezuelan migrants
in Latin America, as an effort to create a decentralized on & off ramps platform
but later developed independently with a brother scope and self-funded for the
most part of 2021.
