# ink!/pallet/solidity performance benchmarking

* **Status:** Open
* **Proposer:** [mmagician](https://github.com/mmagician)


## Project Description :page_facing_up:

When a new team comes to the ecosystem, they are faced with a decision on how to best implement the logic that they need.
Traditionally in substrate, this has been a choice between a smart contract vs. runtime module (a.k.a. pallet) and elaborated on [in this StackOverflow question](https://stackoverflow.com/questions/56040779/when-should-i-build-a-substrate-runtime-module-versus-a-substrate-smart-contract) or [this entry in Substrate Developer Hub](https://substrate.dev/docs/en/knowledgebase/smart-contracts/#smart-contracts-vs-runtime-development). The choice has since been augmented by the possibility to deploy solidity contracts to an EVM-compatible chain, or even writing solidity code and compiling it to WASM with the help of a [solang](https://solang.readthedocs.io/en/latest) compiler.

As substrate is gaining traction, more and more tools will enable developers to write their logic in their language of choice and deploy on-chain, such as:
- Move: [diem on polkadot](https://docs.pontem.network), PoC finished
- Yatima: [pure functional language for web3](https://github.com/w3f/Open-Grants-Program/pull/463), application in progress

This RFP calls for a benchmarking effort to help inform newcomers about the choice of the best tool for writing application logic.
Apart from quantifiable metrics, we would like the outcome of this work to be a guide for developers, perhaps expanding on the aforementioned StackOverflow post. Depending on the outcome, the work might get integrated into our READMEs/wikis.

Before starting this effort, it might make sense to take a look at the official [runtime benchmarking docs](https://substrate.dev/docs/en/knowledgebase/runtime/benchmarking) to assess whether it can be leveraged in some way.

## Deliverables :nut_and_bolt:

* **Total Estimated Duration:** 4 weeks
* **Full-time equivalent (FTE):** 1
* **Total Costs:** 10,000 DAI

### Milestone 1 - Basic benchmarking

* **Estimated Duration:** 2 weeks
* **Costs:** 5000 DAI


| Number | Deliverable                | Specification                                                                                                                                                                                                                                                                       |
|--------|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1. | Devise performance metrics | List the quantifiable metrics that can be compared across different implementations, such as storage footprint and execution speed.                                                                                                                                                   |
|     2. | Pallets: basic read & write | Create a pallet which exposes simple methods for writing to storage and reading from on-chain storage. Should be implemented for basic types.                                                                                                                                           |
|     3. | `ink!`: basic read & write | As above, but for smart contracts                                                                                                                                                                                                                                                       |
|     4. | Benchmarking framework     | Create a set of tools that allows calling both the pallet's extrinsics and contract's public methods multiple times, measuring the execution time, impact on on-chain storage etc., to enable extraction of statistically meaningful data for performance comparison |

### Milestone 2 - Integrate native solidity & `solang`-compiled solidity

* **Estimated Duration:** 2 weeks
* **Costs:** 5000 DAI

| Number | Deliverable                           | Specification                                    |   |
|--------|---------------------------------------|--------------------------------------------------|---|
|     1. | "native" solidity: basic read & write | As per previous milestone                        |   |
|     2. | WASM-compiled solidity                | As per previous milestone                        |   |
|     3. | Adapt the benchmarking framework      | Include both flavours of solidity into the tools |   |
|        |                                       |                                                  |   |
|        |                                       |                                                  |   |

### Milestone 3 - More complex application logic

Apart from just reading & writing basic types, all the above implementations should be extended to include more complex logic. The scope is up to the implementers, but here are some ideas:
- cross-contract calls
- emitting events
- storage-agnostic logic (self-contained methods performing e.g. some heavy computation)

The cost is scope dependent.
