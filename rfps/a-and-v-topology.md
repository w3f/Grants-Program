# Availability and Validity - Network Topology

* **Status:** Open
* **Proposer:** @infinity0, @skalman, @mmagician 

## Project Description :page_facing_up: 

A part of the promise of Polkadot is to bring scalability to the blockchains. The way it achieves it is via delegating application-specific logic from layer 0 (the relay chain) to layer 1 chains (parachains). In order to achieve this efficiently yet securely, each parachain has its own block production mechanism (achieving efficienct block production), but the finalisation of candidate parachain blocks still happens with the involvement of the relay chain validators.

The full mechanism is described in [the host specification](https://github.com/w3f/polkadot-spec/blob/main/host-spec/c07-anv.tm). In short, it is split in two parts: first, a publicly known subset of validators attests that the parachain block data is available to them (i.e. they must have it in their local storage); second, once 2/3+ of the first group have published their availability votes, a "secret" (VRF-based assignment) subset of validators checks the validitiy of the candidate, by checking its state transition against that parachain runtime, which is available on-(the relay)chain.

Currently, the gossip network among the relay chain validators does not make use of the public assignment of a the first subgroup of validators to a particular parachain. Instead, the candidate block is passed around the network until it reaches 2/3+ of approvals, causing an additional delay in the process of finalisation of the candidate.

This proposal aims to solve this issue by creating a selective networking topology among the publicly known subset of validators assigned to a particular parachain ID. For full details of the topology and its considerations, please consult the [Availability and Validity research document](https://research.web3.foundation/en/latest/polkadot/networking/3-avail-valid.html#design-considerations).

## Deliverables :nut_and_bolt:

* **Total Estimated Duration:** 14 weeks
* **Total Costs:** 90,000 DAI

### Milestone 1 - update & implementation plan

Given that the above linked research document was produced almost a [year ago](https://github.com/w3f/research/commit/f1a698b34bda8a93433a0f8d9ab1b303c340cb31#diff-13146c2f4b910ccf22483fd1292efdaa079f5b07a966f76716e5bda35a6b3715) (at the time of writing the RFP) and the fast pace of polkadot development, especially parachain development, the first step should be related to understanding and updating, if necessary, that document.

Tasks:
- understand what is the current implemention status for parachain networking in Polkadot
- understand in depth what the new topology design tries to achieve
- produce a write-up detailing the differences between current and proposed design
- develop a roadmap for implementation, clearly identifying which parts of the codebase would be affected

* **Estimated Duration:** 3 weeks
* **Costs:** 15,000 DAI

### Milestone 2 - Topology discovery by validators

As detailed in [the Topology section](https://research.web3.foundation/en/latest/polkadot/networking/3-avail-valid.html#topology), each validator should have a deterministic and equal view of the topology.

This milestone is tasked with figuring out the topology for each validator.

Note: The implementer might find that splitting Milestones 2 & 3 is counterproductive and a more efficient approach is to actually combine these.

Tasks:
- perform the calculation of correct network topology for each validator
- add a method that returns the above result. This can either be an RPC method, thus allowing it to be verified externally, or an internal method, where the validators report (could be as simple as console logs) their assignment
- run tests to verify the correctness of the calculation and unanimous consensus

* **Estimated Duration:** 6 weeks
* **Costs:** 30,000 DAI

### Milestone 3 - Networking and benchmarking

This should be a "simple" milestone, in that it replaces the previous mechanism for candidate block distribution (broadcast medium B) with direct links(D), as proposed in the [Overview](https://research.web3.foundation/en/latest/polkadot/networking/3-avail-valid.html#overview).

* **Estimated Duration:** 8 weeks
* **Costs:** 45,000 DAI

Tasks:
- apply the topology calculated
- distribute block data along the direct route
- perform an extensive testing & benchmarking exercise on a network with at least 20 validators. The parachain block production can be mocked.
