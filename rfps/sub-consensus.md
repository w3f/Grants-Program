# Sub-consensus mechanism

* **Status:** Open
* **Proposer:** mmagician, laboon
* **Projects you think this work could be useful for:** All parachains

## Project Description :page_facing_up:

### Summary

Parachain dApps suffer from long confirmation times due to the time taken for the Relay Chain to issue an on-chain verification of the parachain blocks. This proposal aims at providing an alternative mechanism for providing parachain users with an alternative, probabilistic sub-consensus mechanism.

### Project Details

Currently the time taken from collator producing a block on a parachain, to that block becoming finalised, is prohibitive to some applications deployed on the parachain. What we'd like to introduce is a mechanism for parachain collators to achieve consensus among themselves on the "best" block. This mechanism would most likely be realised as an additional runtime module in which all collators can (but don't have to) participate, thus providing a faster way for the users of parachain applications to see quasi-finalised blocks -> note that this sub-consensus on parachains will have no effect on the decision of relay chain validators' votes and can at times diverge from the outcome on the relay chain. 
Should this mechanism be opt-in for collators, they could be incentivised to participate honestly by bonding a small stake, that is later slashed (the stick) in case a relay-chain-finalised-block causes a reorg on the sub-consensus mechanism. Conversely, the carrot would be a small reward paid out by the parachain governance (tied to the decision by that governance to include such a module)

## Deliverables :nut_and_bolt:

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 1
* **Total Costs:** 40,000 DAI

### Milestone 1 - Research and technical specification

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 1
* **Total Costs:** 20,000 DAI

While normally the Grants Program doesn't fund the research phase, in this case a comprehensive write-up should proceed the implementation and should be subject to acceptance.

At the end of the milestone, a detailed document should contain, at a minimum, the following parts:
- summary of the current technical implementation and its limitations
- technical proposal, including full specification of any pallets needed, as well as necessary changes (if any) to upstream substrate/cumulus repositories
- security analysis of the proposed solution
- summary of adoption of the proposed solution by a parachain team (either case study or general guidelines)

### Milestone 2 - PoC

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 1
* **Total Costs:** 20,000 DAI

A proof of concept implementation of the proposed solution, or a full-fledged delivery.
The scope of this milestone is highly dependant on the proposal submitted in M1.
