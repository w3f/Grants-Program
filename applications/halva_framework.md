# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Halva
* **Proposer:** [Halva](https://github.com/orgs/halva-suite)
* **Payment Address:** 1837ca1w8WK9yfaVo5Lhgg4sENK2Tq3FgW

## Project Description :page_facing_up:

Halva is a toolchain for improving the experience of developing Decentralized Applications based on Substrate. It provides a high-level way to configure a development environment, interact with Substrate through external API and writing your test cases.

## Team :busts_in_silhouette:

* **Members:** Wintex
* **LinkedIn Profiles:** -
* **Code Repos:** https://github.com/orgs/halva-suite
* **Website:** https://wintex.pro/en/
* **Legal Structure:** individual
* **Team's Experience:**

Our team develops software about 10+ years and decentralized applications since 2017. We have a great experience with typescript, node.js, and testing frameworks.

## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 9 weeks
* **Full-time equivalent (FTE):** 1.5
* **Total Costs:** 3.28 BTC

### Milestone 1

Core functional for automated testing with Mocha and Chai.

* **Estimated Duration:** 5 weeks
* **FTE:** 1.5
* **Costs:** 1.82 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Configuration | Network config for interacting with many public & private networks, keyring config for initializing test accounts and chain spec parser |
| 2. | Core | Implement primitives, helpers for tests, a high-order function for a test-cases |
| 3. | Testing | Implement scripts for command `halva test`. It run JavaScript tests with pre-initialized accounts. |
| 4. | Documentations | Write documentations |

### Milestone 2

REPL for direct communication with Substrate's components.

* **Estimated Duration:** 2 weeks
* **FTE:** 1.5
* **Costs:** 0.73 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Core | Interactive console with API's methods |
| 2. | Tests | Write tests |
| 3. | Documentations | Write documentations |

### Milestone 3



* **Estimated Duration:** 2 weeks
* **FTE:** 1.5
* **Costs:** 0.73 BTC

The generator helps to kickstart a new project, provide a scaffold for new test-cases

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Core | Scripts for command `halva init` It initializes a new Halva project and examples. |
| 2. | Scaffolding | Generate a new empty test-case |

## Additional Information :heavy_plus_sign:

We've created a module for handy substrate chain spec configuration, based on a middleware using approach. Developers can use this module for fine-tuning of specification for different use-cases especially testing. Also, we've developed PoC of testing framework.