# Static Analysis of Runtime Pallets
* **Status:** [Under Development](https://github.com/w3f/Grants-Program/blob/master/applications/sarp-basic-functionality.md)
* **Proposer:** [Bhargav Bhatt](https://github.com/bhargavbh), [David Hawig](https://github.com/Noc2)

## Project Description :page_facing_up:  

[Runtime Pallets](https://docs.substrate.io/fundamentals/runtime-development/) are modules for writing the business logic of blockchains in [Substrate](https://github.com/paritytech/substrate) (a Rust framework fo rbuilding blockchians). These are usually concise pieces of standalone code with relatively few dependencies and clear specifications, hence tractable targets for performing static analysis and verification. We would like to develop tools and techniques to perform static analysis with reasonable soundness guarantees. In particular, we would like to target vunerability classes that are detectable using dataflow analysis techniques like *tag analysis* and *taint analysis*. Just to give a flavor, relevant might vulnerabilities include:
* [incorrect origin](https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/incorrect-origin/description.md) of dispatchable functions. 
* [unsigned transaction](https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/unsigned-transaction/description.md) validation.
* tracking bad randomness: ensure bad randomness does not leak into sensitive functions.
* detect panics statically to avoid potential DoS attacks: these include [unsafe arithmetic operations](https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/arithmetic-overflow/description.md), access outside bounds, assertion failures, etc.
* tracking unsanitised input leakage for sensitive functions.

We seek applications that either extend existing static analysers for rust like [MIRAI](https://github.com/facebookexperimental/MIRAI/), [Prusti](https://www.pm.inf.ethz.ch/research/prusti.html), or build Rust front-ends to static analysis engines. Our preliminary feasibility study shows that MIRAI would be a good starting point as it includes a tag analysis framework, however, we are open to other tools and techniques. 

## Deliverables

The deliverables listed are an innitial draft and can be modified taking into consideration the interests of the applicant. 

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | A document describing the design decisions for the tool and modeling of vulnerabilities. Clear usage guideline along with the trade-off of different modes if any.|
| 0c. | Testing Guide | Test-suite which exercises various features. | 
| 0d. | Article | A brief outreach article describing the high-level technique used and outcomes of the grant, including  asample of minimal examples. |
| 1 | Tool | A robust static analysis tool that works on Subsstrate runtime pallets and analyses vulnerabilities classes described above. | 
| 2 | Engaegment | Engage with teams at Web3 Foundation and Parity to prioritise targeting vulnerability classes.|

