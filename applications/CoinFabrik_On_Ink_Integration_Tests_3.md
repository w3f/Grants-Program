# CoinFabrik On Ink Integration Tests 3
- **Team Name:** CoinFabrik (Nektra S.A)
- **Payment Address:** 0xf488039EDe6B38D7689fDCC6A9FC2dd0EF39D54e (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

We have discovered that integration tests for ink! contracts lack some of the functionalities, or present implementation differences, when compared to E2E testing. 

Integration tests run significantly faster than E2E (end-to-end) tests. If a full range of functionalities were provided, it could reduce testing and QA times. 

Our intention is to `flatten the anvil` of ink! integration testing. With a properly flattened anvil, quality tools can be built.


### Project Details

We have conducted a comprehensive analysis to identify any missing functionalities in integration tests and implementation differences with E2E tests, and to propose and develop new testing features based on our findings. This analysis was carried as part of two previous grants ([link1](https://github.com/w3f/Grant-Milestone-Delivery/pull/998), [link2](https://github.com/w3f/Grant-Milestone-Delivery/pull/1043)). As part of the latter grant, we have developed and resolved the issues with some of the functions with implementation differences or missing implementations: `default_accounts()`, `set_contract_storage()` and `instantiate_contract()`.

With this new grant, our objective is to implement our findings. Specifically, we aim to address functions in integration testing that have missing implementations or show differences when compared to e2e tests. We will add our contributions into the [ink! project repository](https://github.com/paritytech/ink ) following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md).


### Ecosystem Fit

Having a comprehensive set of functionalities available for integration tests would bring numerous benefits to the entire community, including improved reliability, code quality and maturity, and faster feedback loops.

Integration tests are useful during their development and they are quicker than E2E tests. We learned this while working on fuzzing detection techniques during the [Proof of Concept of Scout](https://github.com/CoinFabrik/web3-grant), which we performed in collaboration with [researchers from the University of Buenos Aires](https://lafhis.dc.uba.ar/home). We believe that having a complete set of functionalities for integration tests would be useful for other teams working in the development of ink! smart contracts.

## Team :busts_in_silhouette:

### Team members

- Ariel Wassbein, Head of Research.
- Valeria Caracciolo, Business Development.
- CoinFabrik's development and QA teams.


### Contact

- **Contact Name:** Valeria Caracciolo
- **Contact Email:** valeria.caracciolo@coinfabrik.com
- **Website:** https://www.coinfabrik.com/ 


### Legal Structure

- **Registered Address:** Dr. Emilio Ravignani 2394, C1425 CABA, Argentina
- **Registered Legal Entity:** Nektra S.A


### Team's experience

We are a research and development company specialized in Web3, with a strong background in cybersecurity. Founded in 2014, we have worked on over 200 blockchain-related projects, EVM based and also for Solana, Algorand, and Polkadot. Beyond development, we offer security audits through a dedicated in-house team of senior cybersecurity professionals, currently working on code in Substrate, Solidity, Clarity, Rust, and TEAL.

Our team has an academic background in computer science and mathematics, with work experience focused on cybersecurity and software development, including academic publications, patents turned into products, and conference presentations. Furthermore, we have an ongoing collaboration on knowledge transfer and open-source projects with the University of Buenos Aires.

As well, CoinFabrik has been providing Quality Assurance as a service to development teams, accumulating valuable expertise in the field for a considerable period of time. Our clients highly appreciate this service, and as a result, we are eager to expand our capabilities to the ink! ecosystem.


### Team Code Repos

- https://github.com/CoinFabrik
- https://github.com/CoinFabrik/on-ink_implementations
- https://github.com/CoinFabrik/on-ink-integration-tests 
- https://github.com/CoinFabrik/scout  
- https://github.com/CoinFabrik/web3-grant 

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/arielwaissbein/
- https://www.linkedin.com/in/valeriacaracciolo/  


## Development Status :open_book:

We have identified and analyzed 24 functions exposed for their usage in integration and E2E tests in the file [env_access.rs](https://github.com/paritytech/ink/blob/master/crates/ink/src/env_access.rs) of the ink! repository.  We documented these functions and provided test cases comparing their behaviour in integration and end-to-end tests. This analysis can be found in our [analysis repository](https://github.com/CoinFabrik/on-ink-integration-tests).

Of these 24 functions, 4 functions showed behaviour differences when comparing their implementations for integration and e2e tests, 9 showed missing implementations for integration tests and the remaining 11 functions showed a consistent implementation across both environments.

In the table below, we provide the status of each function after the developments and analysis made in our previous milestones.

**Table 1: Status of functions exposed in integration and e2e testing environments.**
| Issue Number | Function                  	| Implemented Integration Tests | Implemented E2E Tests | Status                                                               	|
|--------------|-------------------------------|-------------------------------|----------------------------------|--------------------------------------------------------------------------|
| 1        	| default_accounts()        	| Yes                       	| Yes                          	| Implementation Difference Corrected. [Pull request performed](https://github.com/paritytech/ink/pull/1955).         	|
| 2        	| set_contract_storage()    	| Yes                       	| Yes                          	| Missing limitation on Integration Testing Implemented. [Pull request performed](https://github.com/paritytech/ink/pull/1961). |
| 3        	| invoke_contract_delegate()	| No                        	| Yes                          	| Missing Function Implementation on Integration Testing.              	|
| 4        	| invoke_contract()         	| No                        	| Yes                          	| Missing Function Implementation on Integration Testing               	|
| 5        	| gas_left()                	| No                        	| Yes                          	| Missing Function Implementation on Integration Testing. Unfeasible Implementation. |
| 6        	| set_code_hash()           	| No                        	| Yes                          	| Missing Function Implementation on Integration Testing.              	|
| 7        	| instantiate_contract()    	| No. [Pull request performed](https://github.com/paritytech/ink/pull/1963).   | Yes                          	| Missing Function Implementation on Integration Testing Performed. [Pull request performed](https://github.com/paritytech/ink/pull/1963). |
| 8        	| caller_is_origin()        	| No                        	| Yes                          	| Missing Function Implementation on Integration Testing.              	|
| 9        	| code_hash()               	| No                        	| Yes                          	| Missing Function Implementation on Integration Testing.              	|
| 10       	| own_code_hash()           	| No                        	| Yes                          	| Missing Function Implementation on Integration Testing.              	|
| 11       	| call_runtime()            	| No                        	| Yes                          	| Missing Function Implementation on Integration Testing. Unfeasible Implementation. |
| 12       	| caller()                  	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|
| 13       	| transferred_value()       	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|
| 14       	| weight_to_fee()           	| Yes                       	| Yes                          	| Implementation Difference.                                           	|
| 15       	| block_timestamp()         	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|
| 16       	| account_id()              	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|
| 17       	| balance()                 	| Yes                       	| Yes                          	| Implementation Difference.                                           	|
| 18       	| block_number()            	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|
| 19       	| minimum_balance()         	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|
| 20       	| terminate_contract()      	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|
| 21       	| transfer()                	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|
| 22       	| hash_bytes()              	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|
| 23       	| hash_encoded()            	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|
| 24       	| ecdsa_recover()           	| Yes                       	| Yes                          	| Ok. No difference observed in testing.                               	|

In this milestone, we will develop the remaining functions that either lack implementations in integration tests or exhibit differences in implementation when compared to E2E tests. However, we will make exceptions for `gas_left()` and `call_runtime()`, as our analysis has deemed implementing these functions in integration tests unfeasible.

**Observations for function `weight_to_fee()`:**

For the function `weight_to_fee()`, we have observed in the [milestone report of our previous grant delivery](https://github.com/CoinFabrik/on-ink-integration-tests/blob/milestone-on-ink-integration-tests-2/assets/On-Ink-Integration-Tests-2-Milestone-Report.pdf) and in the provided [test case](https://github.com/CoinFabrik/on-ink-integration-tests/tree/main/test-cases/weight-to-fee) that the value obtained in e2e tests is fixed at 0 and cannot be modified. This incorrect behaviour of `weight_to_fee()` in E2E tests is also observed in paritytech/substrate-contracts-node.

We have reviewed the function `weight_to_fee()` and found that it has multiple implementations. This complexity makes it challenging to identify which implementation is responsible for the E2E tests, especially given that the large size of the runtime significantly slows down debugging.

To address this issue, we will submit an initial report to the ink! development team in the first week of this milestone and collaborate to devise an implementation plan. If we deem a resolution feasible, we will include it as part of this milestone.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 weeks
- **Full-Time Equivalent (FTE):**  4 FTE (0.50 Project Manager, 0.50 Tech Lead, 1 Full time Sr Rust Developer, 1 Full Time SemiSr Rust Developer, 1 Full Time QA Specialist)
- **Total Costs:**  30,000 USD

### Milestone 1: Execution
- **Estimated duration:** 4 weeks
- **FTE:** 4
- **Costs:** 30,000 USD

| Number | Deliverable | Specification |
| ----- | ----------- | ------------- |
| 0a. | License | MIT
| 0b. | Documentation | We will write a comprehensive report that compares the functionalities of integration tests and E2E (End-to-End) tests. This report will focus on the the functions to be implemented in this milestone, corresponding to issues `3-invoke_contract_delegate()`, `4-invoke_contract()`, `6-set_code_hash()`, `8-caller_is_origin()`,  `9-code_hash()`, `10-own_code_hash()`, and `17-balance()`.<br/><br/>In the first week of this milestone, we will contact the ink! development team to provide an initial report on `14-weight_to_fee()`, documenting our efforts to identify the source of its implementation issues and seeking collaboration to assess the feasibility of resolving them. We will document any progress and implementations related to `14-weight_to_fee()` in our final milestone report.<br/><br/>We will document any additional work that was required in order to ensure consistency between integration and e2e tests.<br/><br/>If applicable, we will suggest additional tests outside of the scope of this milestone. Particularly, for functions declared outside of the `env_access.rs` file, but that could be related to integration or e2e testing.
| 0c. | Testing and Testing Guide | The newly developed functionalities will be documented and tested following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md). A testing guide will be included. 
| 0d. | Docker | Does not apply at this stage.
| 0e. | Article | We will publish an updated report summary in our blog at https://blog.coinfabrik.com/.
 **1** | Development | We will implement the missing functionalities or resolve implementation differences for function issues `3-invoke_contract_delegate()`, `4-invoke_contract()`, `6-set_code_hash()`, `8-caller_is_origin()`,  `9-code_hash()`, `10-own_code_hash()` and `17-balance()`.<br/<br/>We will also make the necessary changes to address the issues highlighted in our initial report on `14-weight_to_fee()`, provided that these changes are deemed feasible during our discussions with the ink! development team.<br/><br/>All these implementations or modifications will be pushed into the [ink! project repository](https://github.com/paritytech/ink)  following existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md).<br/><br/>If applicable, we will develop additional tests or make ad hoc improvements to the ink codebase necessary for the completion of this milestone. Particularly for functions declared outside the `env_access.rs` file that might be related to integration or end-to-end testing.
**2** | Quality Assurance| We will adhere to existing [contribution guidelines](https://github.com/paritytech/ink/blob/master/CONTRIBUTING.md) and add necessary tests to integrate the new implemented or corrected functions to the  [ink! project repository](https://github.com/paritytech/ink).


## Future Plans

Moving forward, we have two projects in mind:
- Research and develop an advanced testing automation solution for ink! smart contracts.
- Improve our open source bug-detection tool [Scout](https://coinfabrik.github.io/scout/ ).
   
## Referral Program (optional) :moneybag: 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Richard Casey from Parity brought this program to our attention, and we have already successfully delivered two applications as a result.

During our inquiries for this application, we briefly consulted Sam Ruberti from the ink! Team and David Hawig from the Web3 Foundation. Their encouragement motivated us to proceed with this presentation.

