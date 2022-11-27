# Designing Upchain: A framework for securing Substrate software update systems

* **Status:** Open
* **Proposer:** taqtiqa-mark
* **Your Project(s):** N.A.
* **Projects you think this work could be useful for** [Substrate runtime upgrades](https://docs.substrate.io/build/upgrade-the-runtime/) and [Substrate network upgrades](https://docs.substrate.io/tutorials/get-started/upgrade-a-running-network/)
* **Teams/People that could deliver the RFP** Parity, William Freudenberger (KILT), Albrecht Weiche

## Project Description :page_facing_up:

The Upchain Specification, a framework for securing Substrate runtime upgrades and Substrate network upgrades, by extending The Update Framework and modeled on Uptane (The Update Framework Specification extended for automobiles).

I’ve come across several reports of a para-relay chain update/upgrade going awry and a chain is bricked, unable to produce blocks - hi-jinx ensue, and everyone lives happily ever after.

One such case is discussed here: [How to recover a parachain](<https://forum.polkadot.network/t/how-to-recover-a-parachain/673>). The consensus appears to be: Automatic rollback is not possible, and a Parachain being inoperable for some period is the way things will be (hi-jinx required).

Potential utility for the wider community is evidenced by the [Polkadot Summit: Barcamp (30 Nov, 1 Dec) topic Parachain Emergency Recovery](https://forum.polkadot.network/t/polkadot-summit-barcamp-submit-agenda-topics-30-nov-1-dec/669/8)

The Upchain specification envisioned here would also serve as an outline of the implementation requirements.

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

## Deliverables :nut_and_bolt:

Upchain Standard for Design and Implementation 1.0.0

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

### Milestone 2

* **Estimated Duration:** Duration of milestone 1
* **FTE:**  Amount of time (in days) required for a single person to complete this milestone
* **Costs:** Amount of Payment in USD for milestone 1

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Upchain: Deviations, Extensions and Omissions from The Update Framework | As detailed above, a document setting out all deviations, extensions and omissions from The Update Framework |
