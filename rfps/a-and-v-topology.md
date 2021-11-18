# Availability and Validity - Network Topology

* **Status:** Open
* **Proposer:** @infinity0, @skalman, @mmagician 

## Project Description :page_facing_up: 

A part of the promise of Polkadot is to bring scalability to the blockchains. The way it achieves it is via delegating application-specific logic from layer 0 (the relay chain) to layer 1 chains (parachains). In order to achieve this efficiently yet securely, each parachain has its own block production mechanism (achieving efficienct block production), but the finalisation of candidate parachain blocks still happens with the involvement of the relay chain validators.

The full mechanism is described in [the host specification](https://github.com/w3f/polkadot-spec/blob/main/host-spec/c07-anv.tm). In short, it is split in two parts: first, a publicly known subset of validators attests that the parachain block data is available to them (i.e. they must have it in their local storage); second, once 2/3+ of the first group have published their availability votes, a "secret" (VRF-based assignment) subset of validators checks the validitiy of the candidate, by checking its state transition against that parachain runtime, which is available on-(the relay)chain.

Currently, the gossip network among the relay chain validators does not make use of the public assignment of the first subgroup of validators to a particular parachain. Instead, the candidate block is passed around the network until it reaches 2/3+ of approvals, causing an additional delay in the process of finalisation of the candidate.

This proposal aims to solve this issue by creating a selective gossip topology among the publicly known subset of validators assigned to a particular parachain ID.

## Deliverables :nut_and_bolt:

* **Total Estimated Duration:** 3 months
* **Total Costs:** 60,000 DAI

### Milestone 1

