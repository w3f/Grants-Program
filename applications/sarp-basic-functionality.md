# SARP - A Static Analysis Tool for Runtime Pallets

- **Team Name:** Supercomputing Systems AG (SCS)
- **Payment Address:** 0xd24622311a22470353bd21d9bcd9e02ba0cfebbe (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

This application is a response to the RFP [Static Analysis for Runtime Pallets](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Static-Analysis-for-Runtime-Pallets.md)

### Overview

[Runtime Pallets](https://docs.substrate.io/learn/runtime-development/) are modules for writing the business logic of blockchains in [Substrate](https://github.com/paritytech/substrate) (a Rust framework for building blockchains). These are usually concise pieces of standalone code with relatively few dependencies and clear specifications, hence tractable targets for performing static analysis and verification. The code quality of a runtime pallet is crucial, as even minor defects can result in major exploits like DoS attacks or the stealing of funds by a malicious party. A static code analysis can help to automate the auditing processes and prevent introduction of defects throughout the software life-cycle.

Therefore we would like to develop a tool - SARP (Static Analysis tool for Runtime Pallets) to perform static analysis with reasonable soundness guarantees. In particular, we would like to target vunerability classes that are detectable using dataflow analysis techniques like *tag analysis* and *taint analysis*.

Our team has no prior knowledge in static code analysis, but has a good understanding of substrate and Rust.

### Project Details

We will base our work on [MIRAI](https://github.com/facebookexperimental/MIRAI/) and extend it with checks on substrate pallets. For details see the [Development Roadmap](#development-roadmap-nut_and_bolt)

### Ecosystem Fit

The tool will help any team developing substrate pallets. It can further be integrated in the CI pipelines of the teams, providing a continuous quality check on the pallet code.

In the long term it could be interesting to connect the work done here with the new emerging auditing DAOs (like [Fuzzland](https://github.com/w3f/Grants-Program/blob/master/applications/FuzzLand.md) or [QRUCIAL DAO](https://github.com/w3f/Grants-Program/blob/master/applications/QRUCIAL_DAO.md)).


## Team :busts_in_silhouette:

### Team members

- Sabine Proll: Project Lead
- Bigna Härdi: Developer
- Edith Chevrier: Developer
- Thomas Niederberger: Developer

### Contact

- **Contact Name:** Sabine Proll
- **Contact Email:** Sabine.Proll@scs.ch | info@scs.ch
- **Website:** https://www.scs.ch

### Legal Structure

- **Registered Address:** Technoparkstrasse 1, 8005 Zürich, Switzerland
- **Registered Legal Entity:** Supercomputing Systems AG

### Team's experience

Supercomputing Systems AG is a contractor with 130 engineers, working in the fields of software, electronics and system design. Profound know-how, solid methodological competence as well as efficient project management are the foundation of our success. Within the company we have a team of 5 blockchain developers, who have experience in the Polkadot ecosystem.

Our blockchain team has been a contributor to the ecoysystem since 2019. We started with grants from the Web3 Foundation to build the basis for [Integritee](https://github.com/integritee-network) (see our grants from waves [1](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/substrate_sgx_proposal.md), [3](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/substrate-api-client.md) and [5](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/SubstraTEE-extension-pack1.md)). After that, our team has worked for Integritee and Encointer as a contractor. Recently the team received grants from the Kusama treasury for maintaining and improving the [substrate-api-client](https://github.com/scs/substrate-api-client), see our proposals for [Nov 22 - Jan 23](https://kusama.subsquare.io/referenda/referendum/26) and [Feb 23 - Apr 23](https://kusama.subsquare.io/referenda/referendum/88).

### Team Code Repos

The team has mainly worked on the following repositories

- [Substrate Api Client](https://github.com/scs/substrate-api-client)
- [Integritee Worker](https://github.com/integritee-network/worker)
- [Encointer Sidechain](https://github.com/encointer/community-sidechain)

Github accounts of the team members

- https://github.com/masapr
- https://github.com/haerdib
- https://github.com/echevrier
- https://github.com/Niederb


### Team LinkedIn Profiles

- https://www.linkedin.com/in/sabine-proll-5a7118153
- https://www.linkedin.com/in/bigna-h%C3%A4rdi-736bb21a9
- https://www.linkedin.com/in/edith-chevrier-90233297
- https://www.linkedin.com/in/thomas-niederberger-6057b71a7

## Development Status :open_book:

We will base our work on [MIRAI](https://github.com/facebookexperimental/MIRAI) and the RFP [Static Analysis for Runtime Pallets](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Static-Analysis-for-Runtime-Pallets.md)

We have not started to work on this.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 0,5 months
- **Full-Time Equivalent (FTE):** 0,8 FTE
- **Total Costs:** 10.000 USD




#### Vulnerability Classes
For this project we want to address the following vulnerability classes:

* [incorrect origin](https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/incorrect-origin/description.md) of dispatchable functions. 
* [unsigned transaction](https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/unsigned-transaction/description.md) validation.


### Milestone 1 - Research

- **Estimated duration:** 0,5 months
- **FTE:** 0,8 FTE
- **Costs:** 10.000 USD

In milestone 1 we want to investigate how the above stated [vulnerability classes](#vulnerability-classes), can be detected by extending MIRAI. 

#### Deliverables

| Number | Deliverable                 | Specification                                                                                                                                                                                   | 
|--------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                     | MIT                                                                                                                                                                                             |
| 0b.    | User Documentation                                   | We will provide a basic **tutorial** that explains how to use the tool on a substrate pallet.                                                      |
| 0c.    | Testing and Testing Guide                            | A first set of tests will be provided, together with a testing guide, that describes how to run them.                                                                                   |
| 1.     | Prototype Code              | Prototype code to approach the above two stated vulnerability classes.                                                                                                                           | 
| 2.     | Documentation | Technical documentation <ul><li>describing the approach we plan to implement in milestone 2, incl. its limitations. </li><li>with (interesting) examples of the vulnerability classes.</li></ul> | 
| 3.     | Engagement                  | Engage with teams at Web3 Foundation and Parity for prioritization.                                                                                                                             |


## Future Plans

The next steps for the tool would be to:

1. Implement a first simple version of the tool, together with tests and documentation. 
2. Improve the usability, by providing
   * means to surpress warnings
   * a comprehensive user tutorial, incl. documentation on the risks of each vulnerability
3. Add more features including checks on the following vulnerability classes:
   * tracking bad randomness: ensure bad randomness does not leak into sensitive functions.
   * detect panics statically to avoid potential DoS attacks: these include [unsafe arithmetic operations](https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/arithmetic-overflow/description.md), access outside bounds, assertion failures, etc.
   * tracking unsanitised input leakage for sensitive functions.

Once we have a tool with a good feature set and basic usability features, we want to promote it to the Polkadot developers. Once the tool is in use, we hope to receive feedback on further features and improvements by the developers.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
We have previously received grants by the Web3 Foundation for other projects (substratee and substrate-api-client).