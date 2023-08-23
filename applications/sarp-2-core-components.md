# SARP - Core Components

- **Team Name:** Supercomputing Systems AG (SCS)
- **Payment Address:** 0xd24622311a22470353bd21d9bcd9e02ba0cfebbe (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

This is the follow up to our initial [research proposal](https://github.com/w3f/Grants-Program/blob/master/applications/sarp-basic-functionality.md), that we delivered [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/880). The goal of this work package is to implement a first version of SARP (Static Analysis Tool for Runtime Pallets) with two core components: mocking of substrate functions and an annotations generator.

### Overview

[Runtime Pallets](https://docs.substrate.io/learn/runtime-development/) are modules for writing the business logic of blockchains in [Substrate](https://github.com/paritytech/substrate) (a Rust framework for building blockchains). These are usually concise pieces of standalone code with relatively few dependencies and clear specifications, hence tractable targets for performing static analysis and verification. The code quality of a runtime pallet is crucial, as even minor defects can result in major exploits like DoS attacks or the stealing of funds by a malicious party. A static code analysis can help to automate the auditing processes and prevent introduction of defects throughout the software life-cycle.

Therefore we would like to develop a tool - SARP (Static Analysis tool for Runtime Pallets) to perform static analysis with reasonable soundness guarantees. In particular, we would like to target vunerability classes that are detectable using dataflow analysis techniques like *tag analysis* and *taint analysis*.

Our team has a good understanding of substrate and Rust. We are still getting started on the topic of static code analysis.

### Project Details

Our work is based on [MIRAI](https://github.com/facebookexperimental/MIRAI/), it extends it with checks on substrate pallets. For details see the [Development Roadmap](#development-roadmap-nut_and_bolt)

### Ecosystem Fit

The tool will help any team developing substrate pallets. It can further be integrated in the CI pipelines of the teams, providing a continuous quality check on the pallet code.

In the long term it could be interesting to connect the work done here with new emerging auditing DAOs (like [QRUCIAL DAO](https://github.com/w3f/Grants-Program/blob/master/applications/QRUCIAL_DAO.md)).


## Team :busts_in_silhouette:

### Team members

- Sabine Proll: Project Lead & Developer
- Thomas Niederberger: Developer
- Bigna Härdi: Developer
- Edith Chevrier: Developer

### Contact

- **Contact Name:** Sabine Proll
- **Contact Email:** Sabine.Proll@scs.ch | info@scs.ch
- **Website:** https://www.scs.ch

### Legal Structure

- **Registered Address:** Technoparkstrasse 1, 8005 Zürich, Switzerland
- **Registered Legal Entity:** Supercomputing Systems AG

### Team's experience

Supercomputing Systems AG is a contractor with 130 engineers, working in the fields of software, electronics and system design. Profound know-how, solid methodological competence as well as efficient project management are the foundation of our success. Within the company we have a team of 5 blockchain developers, who have experience in the Polkadot ecosystem.

Our blockchain team has been a contributor to the ecoysystem since 2019. We started with grants from the Web3 Foundation to build the basis for [Integritee](https://github.com/integritee-network) (see our grants from waves [1](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/substrate_sgx_proposal.md), [3](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/substrate-api-client.md) and [5](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/SubstraTEE-extension-pack1.md)). After that, our team has worked for Integritee and Encointer as a contractor. Recently the team received grants from the Kusama treasury for maintaining and improving the [substrate-api-client](https://github.com/scs/substrate-api-client), see our proposals for [Nov 22 - Jan 23](https://kusama.subsquare.io/referenda/referendum/26) and [Feb 23 - Apr 23](https://kusama.subsquare.io/referenda/referendum/88), [May 23 - Jul 23](https://kusama.polkassembly.io/referenda/182). Also, we successfully delivered the [first milestone for SARP](https://github.com/w3f/Grant-Milestone-Delivery/pull/880).

### Team Code Repos

The team has mainly worked on the following repositories

- [SARP - Milestone 1 delivery](https://github.com/scs/MIRAI/tree/Milestone1_Research/substrate-examples)
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

In a first research project we investigated, if MIRAI can be used for static code analysis of substrate pallets. For this we did a proof of concept on two cases: 
- Check of [incorrect origin](https://github.com/scs/MIRAI/blob/Milestone1_Research/substrate-examples/pallet_template/README.md) in the [substrate node template](https://github.com/substrate-developer-hub/substrate-node-template/tree/e0c480c0f322d0b0d1b310c93fa646fc0cfdd2df/pallets/template)
- Validation of [unsigned transactions](https://github.com/scs/MIRAI/blob/Milestone1_Research/substrate-examples/offchain-worker/README.md) for substrate's [offchain worker example](https://github.com/paritytech/substrate/tree/ea9ce4c0af36310c0b0db264ab12cf4766b83750/frame/examples/offchain-worker)

The overall conclusion was, that it is best to run the analysis only on the newly written pallet code, but not on the code generated by substrate's macros. The full documentation of our findings can be found [here](https://github.com/scs/MIRAI/tree/Milestone1_Research/substrate-examples).


## Development Roadmap :nut_and_bolt:



### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 0.8 FTE
- **Total Costs:** 100'000 USD

In our previous work, we found the following problems:

1. **Crashes and timeouts of MIRAI** Certain pieces of substrate code lead to crashes of MIRAI. In other cases, parts of the code are not analyzed/do not produce warnings, because MIRAI runs into a timeout before reaching this code.

2. **Complexity due to substrate macros** The main reason for crashes and timeouts, was caused by substrate macros, adding a lot of complexity to the code in the background. Ideally SARP only analyzes the newly written code of a pallet.

3. **Invasiveness of tag analysis** The code we wrote in our PoC is very invasive and changes the code of the pallet. This is not practical for end-users. Ideally the user doesn't need to change anything on their code, or at least the changes should be very simple.

To approach these issues, we plan to implement two core features in SARP:

1. **Mock substrate functions**, that increase the complexity, to improve 1. and 2.
2. **Automatically generate annotations and checks**, that are needed for the control flow analysis, to improve 3.

The planned workflow of the tool is:
1. Create a copy of the analyzed pallet. 
2. For the copy:
   1. Adjust dependencies, so that the mocked substrate libraries are used
   2. Add annotations and checks, needed for the analysis
3. Run MIRAI on the adjusted copy.

#### Vulnerabilities
The tool will cover the following cases of vulnerabilities:
- [incorrect origin](https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/incorrect-origin/description.md) of dispatchable functions 
<br>We will provide documentation, example and tests for the described case of enforcing a custom origin type.
- [unsigned transaction](https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/unsigned-transaction/description.md) validation
 <br>We will provide documentation, example and tests for enforcing checks on all input parameters into a function. Specifically for the case of validating unsigned transactions, but not limited to this. 

We plan to do a detailed analysis on interesting vulnerabilities in the [future](#future-plans).



### Milestone 1 - Basic Setup & Mocking of Substrate Libraries
- **Estimated duration:** 2 months
- **FTE:**  0.7
- **Costs:** 47'000 USD

With the first milestone we want to do the basic setup of the project, integrate a first set of substrate mocks and deliver a first runnable tool.

| Number | Deliverable                 | Specification                                                                                                                                                                                                       | 
|--------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                     | MIT                                                                                                                                                                                                                 |
| 0b.    | User Documentation          | We will provide a basic **tutorial** that shows how the tool can be used on an example pallet, for which we will provide the code.         |
| 0c.    | Testing and Testing Guide   | 	Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                    |
| 0d.    | Docker                                               | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                       |
| 1.     | Tool                        | A first version of SARP, that runs the above described workflow, without the annotations generator. The tool will cover the described [vulneraribilities](#Vulnerabilities). Annotations need to be added manually. | 


### Milestone 2 - Annotations Generator
- **Estimated duration:** 1.5 month
- **FTE:**  0.8
- **Costs:** 37'000 USD

In the second milestone we implement the annotations generator (needed for step 2.ii. of the workflow process).

| Number | Deliverable                 | Specification                                                                                                                                                                                              | 
|--------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                     | MIT                                                                                                                                                                                                        |
| 0b.    | User Documentation          | We will provide a basic **tutorial** that shows how the tool can be used on an example pallet, for which we will provide the code.                                                                                                       |
| 0c.    | Testing and Testing Guide   | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                            |
| 0d.    | Docker                                               | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                              |
| 1.     | Tool                        | We will implement an annotations generator and integrate it in SARP. The annotations generator will cover annotations needed for the described [vulneraribilities](#Vulnerabilities). | 


### Milestone 3 - Complete Tool with Documentation
- **Estimated duration:** 0.5 month
- **FTE:**  1
- **Costs:** 16'000 USD

In the final milestone we finetune the tool, making sure it runs on productive pallet code and write the final documentation. 

| Number | Deliverable                 | Specification                                                                                                                                                                                                                                                                                                                                      | 
|--------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                     | MIT                                                                                                                                                                                                                                                                                                                                                |
| 0b.    | User Documentation          | We will provide a basic **tutorial** that shows how the tool can be used on an example pallet, for which we will provide the code.                                                                                                                                                                                                                                                  |
| 0c.    | Testing and Testing Guide   | Each check, that the tool can perform, will be covered by comprehensive unit tests to ensure functionality and robustness. In the testing guide, we will describe how to run these tests.       <br/> The tests will further include running SARP on 5 pallets from the [frame pallets](https://github.com/paritytech/substrate/tree/master/frame) |
| 0d.    | Docker                                               | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                      |
| 1.     | Tool                        | We will finetune SARP, with the help of real world examples. The real world examples we will be taken from [substrate's frame pallets](https://github.com/paritytech/substrate/tree/master/frame).                                                                                                                                     | 
| 2.     | Documentation               | Technical documentation of the tool, incl. reasoning on the design decisions.                                                                                                                                                                                                                                                                      | 



### Limitations

#### Mocking 
Static code analysis, in its nature, is a problem of exponential time complexity. As such, it needs good heuristics to deliver useful results. Our strategy is to mock the library code, that adds the most complexity and is used the most. For this delivery we plan to take an educated guess, on what to mock. Naturally this will not cover all cases. Especially with this first version, we expect that there will be many cases, where a vulnerability is not found or a false positive is returned. 

Due to this limitation, we commit ourselves to 5 working real world examples, taken from the [frame pallets](https://github.com/paritytech/substrate/tree/master/frame). That means, the analysis will not crash and provide only few false positives. Note, that this is currently not possible, due to the induced complexity by the substrate macros.

#### Annotations Generator
The annotations generator will generate the needed annotations for the examples we provide for the described [vulnerabilities](#vulnerabilities). We expect, that there will be situations, where the user has to add annotations themselves.


## Future Plans


1. Specify and prioritize vulnerabilities for roadmap. 
</br> For this we plan to engage with Web3 Foundation / Parity and auditing companies such as [OtterSec](https://osec.io/) or [FYEO](https://www.fyeo.io/).
3. Improve the usability, by providing
   * means to surpress warnings
   * a comprehensive user tutorial, incl. documentation on the risks of each vulnerability
4. Add more features including checks on more vulnerability classes.

Once we have a tool with a good feature set and basic usability features, we want to further promote it to auditors and developers.

Alongside the roadmap for substrate pallets, we plan to investigate, if the same approach can be applied to ink! smart contracts.


## Additional Information :heavy_plus_sign:

With our work in the previous grant, we deliberately invested into this project, as static code analysis was not our area of expertise. Our investment was two-fold: we used a lower hourly rate to calculate the cost and put in more effort than planned when implementing the project. With this package we increased the hourly rate and plan to stick closer to the estimated work effort.