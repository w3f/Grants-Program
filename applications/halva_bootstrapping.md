# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Halva [Bootstrapping and Scaffolding]
* **Proposer:** [Halva](https://github.com/halva-suite/halva)
* **Payment Address:** 1837ca1w8WK9yfaVo5Lhgg4sENK2Tq3FgW

## Project Description :page_facing_up:

We want to automate the process of bootstrapping a new project using the Halva framework. To do this, we add the cli commands `halva-cli init` and` halva-cli create`. In the basic case, `halva-cli init` adds the file `halva.js` and adds the directory with sample tests`/tests` for standard pallets to the substrate project's directory. The command `halva-cli create` deploys new code from template e.g` halva-cli create test Token` creates a new test case `/tests/Token.ts`

## Team :busts_in_silhouette:

* **Members:** Wintex
* **LinkedIn Profiles:** -
* **Code Repos:** https://github.com/orgs/halva-suite
* **Website:** https://wintex.pro/en/
* **Legal Structure:** individual
* **Team's Experience:** Our team develops software about 10+ years and decentralized applications since 2017. We have a great experience with typescript, node.js, and testing frameworks.

## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 2 weeks
* **Full-time equivalent (FTE):** 1.5
* **Total Costs:** 0.728 BTC

### Milestone 1

* **Estimated Duration:** 2 weeks
* **FTE:** 1.5
* **Costs:** 0.728 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Command `init` | Create a new Halva project within the existing substrate project directory or creating new substrate project with initialed halva within |
| 2. | Command `create` | Helper to create new test-cases |
| 3. | Testing | Write unit-tests for implemented functions |
| 4. | Examples | Update [halva-test-example](https://github.com/halva-suite/halva-test-example) |
| 5. | Tutorial | Write step by step tutorial and publish it |
| 6. | Documentations | Write documentations for both commands |
