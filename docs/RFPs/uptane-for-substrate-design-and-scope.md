# Designing Upchain: A framework for securing Substrate software update systems

:::danger
This Request for Proposals is _closed_, meaning we are not looking for any more proposals on this topic at the moment.
:::

* **Status:** Closed
* **Proposer:** taqtiqa-mark
* **Your Project(s):** N.A.
* **Projects you think this work could be useful for** [Substrate runtime upgrades](https://docs.substrate.io/build/upgrade-the-runtime/) and [Substrate network upgrades](https://docs.substrate.io/tutorials/get-started/upgrade-a-running-network/)
* **Teams/People that could deliver the RFP** Parity, William Freudenberger (KILT), Albrecht Weiche

## Project Description :page_facing_up:

The Upchain Specification, a framework for securing Substrate runtime upgrades and Substrate network upgrades, by extending The Update Framework and modeled on Uptane (The Update Framework Specification extended for automobiles).

This RFP seeks W3F Grant applications addressing/proposing how TUF can be integrated into Substrate.

The UpChain specification should serve as an outline of the requirements a chain must implement in order to be described as integrating UpChain.

The UpChain specification should allow for Parachin scaling, see for example [Parachain scaling by Parablock splitting](https://forum.polkadot.network/t/parachain-scaling-by-parablock-splitting/341).

The target audience is authors of the Substrate relay and parachain upgrade logic. The specification should be followed by default in all Substrate runtime upgrades and Substrate network upgrades.
Developers using Substrate would be oblivious until an upgrade failed - at which point they would notice their legacy logic is still in place.

There is considerable prior art to inform and guide the initial specification.
A greenfield design should not be accepted.

Rather, the Milestone 2 document accompanying the design specification should reference:

* [The Uptane Standard for Design and Implementation 2.0.0](https://uptane.github.io/papers/uptane-standard.2.0.0.html)
* [The Update Framework Specification](https://theupdateframework.github.io/specification/latest/)

Articulating:

* Deviations
  * The section number and title in the Uptane and TUF specification that Upchain should deviate from.
  * The Relay-parachain functionality lost or gained by this deviation, described in terms of TUF/Uptane functionality
* Extensions
  * The section number and title in the Uptane and TUF specification that should be extended by Upchain
  * The Relay-parachain functionality removed or added by this extension, described in terms of TUF/Uptane functionality
* Omissions
  * The section number and title in the Uptane and TUF specification that should be omitted from Upchain
  * The Relay-parachain functionality lost or gained by this omission, described in terms of TUF/Uptane functionality

Specifically, elements of these two specifications should not silently vanish.

### Context

The Uptane (ECU update framework for automotives) is chosen as the template to begin with and contrast UpChain for a couple of reasons:

* The specification should explicitly address Parachain scaling, see for example [Parachain scaling by Parablock splitting](https://forum.polkadot.network/t/parachain-scaling-by-parablock-splitting/341).
* While ECU updates have client-server model where centrally managed updates are pushed to clients, and upgrade failures must leave a vehicle in a safe and usable state.  Substrate upgrades have a single source of truth that also must be pushed to nodes, and upgrade failures must leave a node in a safe and usable state.
* Further, there are implementations of the Uptane spec that are not trivial and that experience could be expected to inform the design of how UpChain protects Parachain scaling e.g. motivate any deviations or extensions.

### Motivation

I’ve come across several reports of a para-relay chain update/upgrade going awry and a chain is bricked, unable to produce blocks - hi-jinx ensue, and everyone lives happily ever after.

One such case is discussed here: [How to recover a parachain](<https://forum.polkadot.network/t/how-to-recover-a-parachain/673>). The consensus appears to be: Automatic rollback is not possible, and a Parachain being inoperable for some period is the way things will be (hi-jinx required).

Potential utility for the wider community is evidenced by the [Polkadot Summit: Barcamp (30 Nov, 1 Dec) topic Parachain Emergency Recovery](https://forum.polkadot.network/t/polkadot-summit-barcamp-submit-agenda-topics-30-nov-1-dec/669/8)

## Deliverables :nut_and_bolt:

Upchain Standard for Design and Implementation 1.0.0

### Scope

The scope of "Designing UpChain" is limited to creating a spec which aims at mitigating/avoiding such upgrade failures.

Guidelines to triage and recover after the issue occurred will likely depend on the detail of an implementation, hence should be deferred to the implementation phase.

Scope includes providing recommendations and changes at the protocol level.
It also include analysis of performance overheads (e.g., overheads on the blockspace).
This may entail involving teams at parity/w3f.

* **Total Estimated Duration:** Duration of the whole project
* **Full-time equivalent (FTE):**  Amount of time (in days) required for a single person to complete this project ([see](https://en.wikipedia.org/wiki/Full-time_equivalent))
* **Total Costs:** Amount of Payment in USD for the whole project.

### Milestone 1

* **Estimated Duration:** Duration of milestone 1
* **FTE:**  Amount of time (in days) required for a single person to complete this milestone
* **Costs:** Amount of Payment in USD for milestone 1

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Upchain Standard for Design and Implementation 1.0.0 | The Update Framework Specification extended for Substrate Relay and Parachains |

This deliverable can be valuated by comparing the list of (sub-)sections with those from [The Update Framework](https://theupdateframework.github.io/specification/latest) - there should be no omissions.

### Milestone 2

* **Estimated Duration:** Duration of milestone 1
* **FTE:**  Amount of time (in days) required for a single person to complete this milestone
* **Costs:** Amount of Payment in USD for milestone 1

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Upchain: Deviations, Extensions and Omissions from The Update Framework | As detailed above, a document setting out all deviations, extensions and omissions from The Update Framework |
