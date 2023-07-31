# CoinFabrik On Ink Integration Tests
- **Team Name:** CoinFabrik (Nektra S.A)
- **Payment Address:** 0xf488039EDe6B38D7689fDCC6A9FC2dd0EF39D54e (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

CoinFabrik has successfully accomplished two previous grant milestones for the development of [Scout](https://coinfabrik.github.io/scout/), an open source bug-detection tool for ink! targetted to developers and smart contract auditors.

We have completed a [Proof of Concept](https://github.com/CoinFabrik/web3-grant ) and a [Prototype](https://github.com/CoinFabrik/scout ).

During these iterations, we encountered certain challenges, especially while developing fuzzing detectors. These challenges included limitations in integration tests and differences with the ink! E2E testing environment. Specifically, we faced difficulties when working with functions in integration testing related to cross contract calls, storage, gas usage, and delegatecall.

With this grant, our objective is to conduct a comprehensive analysis to identify any other missing functionalities in integration tests, and to propose and develop new testing features based on our findings. 

Our intention is to `flatten the anvil` of ink! integration testing. With a properly flattened anvil, quality tools can be built.

### Project Details

As mentioned before, we have already identified a number of E2E functionalities that are not present in integration tests.

For example:
- A different implementation of storage in integration testing vs E2E testing. The same storage limitations present in E2E should also be present in integration testing.
- Inability to perform delegatecall in integration tests. 
- Inability to perform cross contract calls in integration tests.
- Gas consumption is not integrated.
- Address inconsistencies. Alice and Bob addresses differ between integration and E2E tests environments.

This list is not exhaustive, as it simply highlights some difficulties we encountered while conducting integration tests for vulnerability examples during the development of detectors for our static analyzer, [Scout](https://github.com/CoinFabrik/scout). 

The overall advantage of integration tests is that, since they are performed off-chain, they are significantly faster than E2E tests, which imply compiling and deploying the smart contract to a Substrate node. We believe that having a complete set of functionalities for integration tests will allow developers to thoroughly test their code more quickly. Particularly, we believe the impossibility to perform cross contract calls in integration tests is a limitation for developers trying to quickly assess interactions across different contracts. This can be done through E2E tests, but it takes more time.

Our proposal is to begin our work by making a full review of the current functionalities of integration tests and E2E tests. From this revision, we will assemble a comparative table, identifying differences and proposing improvements and missing developments to be made for integration tests. For specific cases where the enhancement or missing functionality is clear, and the implementation of the enhancement is deemed feasible, code examples could be provided to show the current limitations of integration tests. 

Furthermore, we need to thoroughly analyze the complexity and feasibility of generating the necessary tests. The analysis we just mentioned will allow us to better understand which improvements will truly be possible to develop. This includes listing the missing functionalities in integration tests that are available for E2E testing, analyzing the feasibility of their implementation, and prioritizing their development order.



### Ecosystem Fit

Having a comprehensive set of functionalities available for integration tests would bring numerous benefits to the entire community, including improved reliability, code quality and maturity, and faster feedback loops.

In the context of fuzzing detectors, integration tests are useful during their development in order to identify fuzzing parameters, and they are quicker than E2E tests. We learned this while working on fuzzing detection techniques during the [Proof of Concept of Scout](https://github.com/CoinFabrik/web3-grant), which we performed in collaboration with [researchers from the University of Buenos Aires](https://lafhis.dc.uba.ar/home). We believe that, having a complete set of functionalities for integration tests would be useful for other teams working in the development of fuzzing detectors for ink! smart contracts (e.g: [Fuzzland](https://github.com/w3f/Grants-Program/blob/master/applications/FuzzLand.md) team developing [Ityfuzz](https://github.com/fuzzland/ityfuzz), [Klevoya](https://github.com/w3f/Grants-Program/blob/master/applications/klevoya_fuzzer.md ) team).

## Team :busts_in_silhouette:

### Team members

- Ariel Wassbein, Head of Research.
- Diego Kelyacoubian, Head of Program Management.
- Valeria Caracciolo, Business Development.
- CoinFabrik's development and auditing team.


### Contact

- **Contact Name:** Valeria Caracciolo
- **Contact Email:** valeria.caracciolo@coinfabrik.com
- **Website:** https://www.coinfabrik.com/ 

### Legal Structure

- **Registered Address:** Dr. Emilio Ravignani 2394, C1425 CABA, Argentina.
- **Registered Legal Entity:** Nektra S.A.

### Team's experience
We are a research and development company specialized in Web3, with a strong background in cybersecurity. Founded in 2014, we have worked on over 200 blockchain-related projects, EVM based and also for Solana, Algorand, and Polkadot. Beyond development, we offer security audits through a dedicated in-house team of senior cybersecurity professionals, currently working on code in Substrate, Solidity, Clarity, Rust, and TEAL.

Our team has an academic background in computer science and mathematics, with work experience focused on cybersecurity and software development, including academic publications, patents turned into products, and conference presentations. Furthermore, we have an ongoing collaboration on knowledge transfer and open-source projects with the University of Buenos Aires.

As well, CoinFabrik has been providing Quality Assurance as a service to development teams, accumulating valuable expertise in the field for a considerable period of time. Our clients highly appreciate this service, and as a result, we are eager to expand our capabilities to the ink! ecosystem.


### Team Code Repos

- https://github.com/CoinFabrik
- https://github.com/CoinFabrik/scout
- https://github.com/CoinFabrik/web3-grant

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/arielwaissbein/
- https://www.linkedin.com/in/diego-kelyacoubian-5417613/ 
- https://www.linkedin.com/in/valeriacaracciolo/  


## Development Status :open_book:

We have already identified some improvements to be made in integration tests, with different levels of complexity:
- Alice and Bob's addresses should match: Feasible.
- The storage in the integration environment should have the same limitations as in the blockchain environment (end-to-end): Feasible.
- Delegate call: Ability to use delegate call in integration tests: Complex, yet feasible.
- Contract-to-contract calls: To be evaluated.
- Gas usage: To be evaluated.


We validated the idea of the analysis and development described in this application with Sam Ruberti from the ink! Ecosystem and David Hawig from Web3 Foundation, who encouraged us to apply for this grant.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 weeks
- **Full-Time Equivalent (FTE):**  2.5 FTE
(0.25 Project Manager,
0.25 Tech Lead,
1 Full time Sr. Rust Developer,
1 Full Time SemiSr. Rust Developer)
- **Total Costs:**  U$D 40,500


### Milestone 1: Analysis
- **Estimated duration:** 2 weeks
- **FTE:**  2.75
- **Costs:** U$D 13,500

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| 0a. | License | MIT
| 0b. | Documentation | Create a comprehensive report that compares the functionalities of integration tests and E2E (End-to-End) tests. The report's focus is to identify what can be accomplished in E2E tests but not in integration tests, as well as any inconsistencies. If applicable, we will provide suggestions that are not covered by either test type.
| 0c. | Testing and Testing Guide | No tests will be produced at this stage.
| 0d. | Docker | Does not apply at this stage.
| 0e. | Article | We will prepare a summary report and publish it on our blog https://blog.coinfabrik.com/ 
 **1** | Analyze | Study and compare Integration and E2E (End-to-End) tests in ink!.
 **2** | Evaluate | Assign a complexity level to each finding based on the difficulty of implementing the missing or enhanced functionality.
 **3** | Estimate | Indicate which tests shall be developed during the next milestone delivery. If the allocated time for the next milestone is insufficient, we may consider requesting an extension for this grant.



### Milestone 2: Execution
- **Estimated duration:** 4 weeks
- **FTE:** 2.75
- **Costs:** U$D27,000

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| 0a. | License | MIT
| 0b. | Documentation | We will update our previous report. This includes the current status of identified use cases.
| 0c. | Testing and Testing Guide | We will develop the missing functionalities identified, and submit a pull request to the corresponding repository. The newly developed functionalities will be documented and a testing guide will be included.
| 0d. | Docker | Does not apply at this stage.
| 0e. | Article | We will publish an updated report in our blog at https://blog.coinfabrik.com/.
 **1** | Develop | Build the necessary improvements and missing tests for the identified use cases outlined in the first milestone.
 **2** | Analyze and Estimate | If applicable, suggest additional tests for this or next milestones.



## Future Plans

We have two projects in mind:
1. Research and develop an advanced testing automation solution for ink! smart contracts.
2. Improve our open source bug-detection tool [Scout](https://coinfabrik.github.io/scout/)
## Referral Program (optional) :moneybag: 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Richard Casey from Parity brought this program to our attention, and we have already successfully delivered two applications as a result.

During our inquiries for this application, we briefly consulted Sam Ruberti from the ink! Team and David Hawig from the Web3 Foundation. Their encouragement motivated us to proceed with this presentation.

