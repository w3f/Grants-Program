# Formal Guarantees for GRANDPA Finality Gadget
* **Status:** Open
* **Proposer:** [Bhargav Bhatt](https://github.com/bhargavbh),  [David Hawig](https://github.com/Noc2)

## Project Description :page_facing_up:  

Consensus layers are the backbones of blockchains. Any vulnerability in the consensus mechanism can have far reaching consequences on the integrity and security of the whole system. Polkadot’s Relay Chain uses [GRANDPA](https://research.web3.foundation/en/latest/polkadot/finality.html) (a deterministic finality gadget) to achieve consensus in the network. 

This proposal aims to provide formal guarantees of GRANDPA’s correctness and security by modeling the consensus mechanism and verifying it against formal specifications. We expect this exercise would lead to better implementations, since writing formal specs exposes implicit assumptions. Furthermore, developers can identify invariants to guide implementation, and use counterexamples to produce tests that expose bugs. 

We are open to any reasonable formal methods approach that rigorously proves the correctness of GRANDPA’s claims of validity, finality and liveness. Suggested list of techniques include:
- Model-checking (in TLA+ Apalache, Ironfleet, IVY) 
- interactive theorem proving (in Isabelle/HOL, Coq, verdi)
- Any other temporal property verification tool for distributed systems

We envision the project to prove both safety and liveness properties of GRANDPA which interacts with a Block Production mechanism (like [BABE](https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html) or [Sassafras](https://research.web3.foundation/en/latest/polkadot/block-production/SASSAFRAS.html)) by assuming an abstract interface. 

## Deliverables

The structure of the grant and the milestones depends highly on the project itself. It’s therefore up to the applying team to come up with a milestone and delivery structure. 

The deliverables listed below are just an initial draft, assuming the project uses the approach of Modelcheking in TLA+ and can be changed. Proof of correctness can be delivered in stages. Verification of safety properties is mandatory and liveness properties is an optional objective.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | A document describing the design decisions in the modeling process, including justification for abstractions and assumptions (e.g. on the network model, latency, behavior of validators, nature of faults) w.r.t to protocol in the Paper and Spec. In-line comments in the TLA+/ PlusCal models that provide a clear mapping to the feature/property. |
 0c. | Testing Guide | Instructions to set up the required environment to run the analysis, preferably a docker image with all the tools pre-installed. | 
| 0d. | Article | High-level document summarizing the results of the verification efforts as well as a final presentation for a broader audience that summarizes the key take-aways. |
| 1 | Proof Artifact| Models and specs in TLA+ that adhere to protocol implementations with reasonable abstraction gaps. As a stepping stone, the block production mechanism could be instantiated with BABE. | 
| 2 | Proof Artifact| Formalize the validity, finality and liveness of GRANDPA as temporal properties in TLA+.  | 
| 3 | Engagements | Engage with the Web3 research team via regular meetings to refine the models and specs. For eg., clarify any assume/ rely reasoning made in the protocols. Engage with Web3 team to determine if detected bugs's are spurious.|

