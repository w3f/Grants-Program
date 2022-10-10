# W3F Grant Proposal

- **Project Name:** Escrow Pallet
- **Team Name:** TwinP
- **Payment Address:** 0xd042e53e22e9f941ceba02f4adb9d1b32ef43675
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview 


### Overview

- We will build an Escrow pallet.
- The Escrow pallet will help the web3 communities to release funds easier.
- I will use substrate framework to build this pallet.
- My team is happy to create this project because they want to build something for the community.

### Project Details

We aim to build a Escrow pallet which will help communities to release funds easier to devs/teams.
I would like to explain the purpose of the project with a real example.
A developer wants to fix/develop a bug/feature.
He requested some funds and his proposal got approved.
Both of the parties (for ex: web3 community and contributor) sign an Escrow contract by defining the Web3 community address, the contributor address, the amount, the expiry date, and “take action days”.
“Take action days” would be some supplement time after the contract has ended for the Web3 to test/check if the bug/feature has been delivered correctly.
Once the contract is signed the Web3 funds will be locked into another address.
During the take action days Web3 can decide to:
1-Send the funds manually to the contributor 
2-Withdraw the funds because nothing was delivered
3-Do not take any action during the “take action days” and when these additive days are expired the contributor can withdraw the funds by himself. (This option would reduce the releasing fund steps by giving additional work to the contributor)

### Ecosystem Fit

- Substrate learners would have an Escrow pallet as example.
- Web3 companies who would like to release funds in a very easy way.

## Team

### Team members

- MSc Eljo Prifti - Rust developer and Rust community enthusiast.
- Ing Gerti Prifti - Rust developer

### Contact

- **Contact Name:** MSc Eljo Prifti
- **Contact Email:** elioprifti@gmail.com
- **Website:** https://www.linkedin.com/in/elioprifti/

### Legal Structure

- **Registered Address:**  We do not have any registered address
- **Registered Legal Entity:** We do not have any registered legal entity

### Team's experience

Hello, my name is Elio. I have a master's degree in computer science and I have more than 6 years experience as a professional software developer in Android/Java developer in the market. I have been deeply fascinated by blockchain and discovered Substrate. I have spent 1+ year learning/contributing to Rust/Substrate.
I am a contributor to the Substrate recipes repo,  taking it upon myself to upgrading Substrate “Kitchen Node” Recipes from v1 to v2, which took 5-6 months working in my spare time.


Hello, my name is Gerti. Over the last 5 years, I've been continuously working towards achieving clients' business goals through the application of IT technology. The collaborations I've had working in a few industries brought to life numerous products with an audience of thousands and even millions of users. The secret behind this success was creating an intuitive, visually attractive application customized to the needs of the target clientele.
In addition to the substantial experience working as a Java Enterprise, I've also gained a Master's Degree in Computer Science that has equipped me with a strong knowledge of the newest tools and technologies to create flawless products your clients will enjoy.
The last months I have been curious about Substrate/Rust, and I am learning it on my spare time.



### Team Code Repos

- https://github.com/JoshOrndorff/recipes/pull/471
- https://github.com/herou/recipes

### Team Github
- Eljo : https://github.com/herou
- Gerti: https://github.com/gertt

### Team LinkedIn Profiles (if available)

- MSc Eljo Prifti:  https://www.linkedin.com/in/elioprifti/
- Ing Gerti Priftihttps://www.linkedin.com/in/gertiprifti/

## Development Status

We would like to add this pallet to the Subtrate recipes repo.

- [Substrate recipes](https://github.com/herou/recipes) 

## Development Roadmap 

### Overview

- **Total Estimated Duration:** 3 months
- Full-Time Equivalent (FTE): 1 FTE
- **Costs:** $9,000 USDT


### Milestone 1 — Implement sign functionality

- Estimated Duration: 1 month
- FTE: 1
- Costs: $3,000 USDT


| Number | Deliverable                     | Specification                                                                                                                                              |
|-------:|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                         | Apache 2.0                                                                                                                                                 |
|    0b. | Documentation                   | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can sign an Escrow contract with another user. |
|    0c. | Testing Guide                   | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.          |
|    0d. | Docker                          | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                              |
|    0e. | Article                         | We will publish an **article** that explains how an Escrow contract can be created and how can it be used.
|    0f. | Benchmarking                    | Benchmarking will be provided for sign_contract.
|     1. | Substrate module: sign_contract | We will create a Substrate module that will sign an Escrow contract between two users.                                                                     |


### Milestone 2 — Implement send funds functionality

- Estimated Duration: 1 month
- FTE: 1
- Costs: $3,000 USDT


| Number | Deliverable                       | Specification                                                                                                                                           |
|-------:|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                           | Apache 2.0                                                                                                                                              |
|    0b. | Documentation                     | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can send funds to the contributor/receiver. |
|    0c. | Testing Guide                     | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.       |
|    0d. | Docker                            | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                           |
|    0e. | Article                           | We will publish an **article** that explains how an Escrow contract can be created and how can it be used.    
|    0f. | Benchmarking                      | Benchmarking will be provided for send_funds.
|     1. | Substrate module: send_funds      | We will create a Substrate module that will send funds to to the contributor/receiver                                                                                 |

### Milestone 3 — Implement Withdraw funds functionality

- Estimated Duration: 1 month
- FTE: 1
- Costs: $3,000 USDT


| Number | Deliverable                      | Specification                                                                                                                                     |
|-------:|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                          | Apache 2.0                                                                                                                                        |
|    0b. | Documentation                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how the funds holders withdraw.                  |
|    0c. | Testing Guide                    | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker                           | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                     |
|    0e. | Article                          | We will publish an **article** that explains how an Escrow contract can be created and how can it be used.
|    0f. | Benchmarking                     | Benchmarking will be provided for withdraw_funds.
|     1. | Substrate module: withdraw_funds | We will create a Substrate module that will withdraw the funds if nothing was delivered.                                                          |


## Future Plans

- In the future we may have several senders instead of one and we can also do that during "take action days" if 51% of senders do not want to release funding then the funds can be withdrawn.
