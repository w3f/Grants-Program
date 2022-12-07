# W3F Grant Proposal

- **Project Name:** Decentralized Invoice
- **Team Name:** TwinP
- **Payment Address:** 0xd042e53e22e9f941ceba02f4adb9d1b32ef43675
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview


### Overview

- We will build a decentralized invoice system.
- Business and clients can pay and create invoices.
- Keep track of create/pay invoices.
- The system can be used by B2B, B2C, C2C.

### Project Details

We aim to build a decentralized invoice system that will help businesses/clients create/pay bills for given services.
We will use substrate node template to build our pallet.

Pallet name: InvoicePallet

Methods:

1- create_invoice(amount, from  // It is optional, reason (msg is option), to) 
-> This method will create an invoice that should be paid.

2- show_all_invoices(from)
-> This method will show: Date, from, to, amount and status. Status can be to be Awaiting Payment/Payed

3- pay_invoice(to)
-> send the amount to the receiver and change the status of invoice from Awaiting Payment to Payed

A similar product has been made by Request Network. They do have some products and one of them is similar 
to the one I would like to build: https://create.request.network/
They have used ethereum and solidity and we are gonna use substrate and rust.


### Ecosystem Fit

- Businesses and clients who would like to create and pay invoices.

## Team
### Team members
- MSc Eljo Prifti - Substrate/Rust developer with proven experience. Contributor to substrate open source repositories.
- Eng Gerti Prifti - Substrate/Rust developer with proven experience

### Contact

- **Contact Name:** MSc Eljo Prifti
- **Contact Email:** elioprifti@gmail.com
- **Website:** https://www.linkedin.com/in/elioprifti/

### Legal Structure

- **Registered Address:**  We do not have any registered address
- **Registered Legal Entity:** We do not have any registered legal entity

### Team's experience

Hello, my name is Elio. I have a master's degree in computer science and I have more than 6 years of experience as a professional software developer in the Android/Java developer in the market. I have been deeply fascinated by blockchain and discovered Substrate. I have spent 1+ year learning/contributing to Rust/Substrate.I am a contributor to the Substrate recipes repo,  taking it upon myself to upgrade Substrate “Kitchen Node” Recipes from v1 to v2, which took 5-6 months working in my spare time.

Hello, my name is Gerti. Over the last 5 years, I've been continuously working towards achieving clients' business goals through the application of IT technology. The collaborations I've had working in a few industries brought to life numerous products with an audience of thousands and even millions of users. The secret behind this success was creating an intuitive, visually attractive application customized to the needs of the target clientele.In addition to the substantial experience working as a Java Enterprise, I've also gained a Master's Degree in Computer Science that has equipped me with a strong knowledge of the newest tools and technologies to create flawless products your clients will enjoy.For the last few years, I have been curious about Substrate/Rust, and I am learning it in my spare time.
### Team Code Repos

- https://github.com/JoshOrndorff/recipes/pull/471
- https://github.com/herou/recipes


### Winner of a small grant to build an Escrow system on top of substrate
Deliver everything on time and meet all the requirements
- https://github.com/w3f/Grants-Program/pull/1094 - Winner of Grant Level 1
- https://github.com/herou/EscrowPallet - Source code
- https://github.com/w3f/Grant-Milestone-Delivery/pull/599 - Milestone 1
- https://github.com/w3f/Grant-Milestone-Delivery/pull/566 - Milestone 2 and 3

### Team Github

- Eljo : https://github.com/herou
- Gerti: https://github.com/gertt

### Team LinkedIn Profiles
- MSc Eljo Prifti: https://www.linkedin.com/in/elioprifti/
- Eng Gerti Prifti: https://www.linkedin.com/in/gertiprifti/

## Development Status
We would like to use the Substrate template node
- [Substrate node template](https://github.com/substrate-developer-hub/substrate-node-template)

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 months
- Full-Time Equivalent (FTE): 2 FTE
- **Costs:** $10,000 USDT


### Milestone 1 — Implement create_invoice functionality

- Estimated Duration: 1 month
- FTE: 2
- Costs: $3,333 USDT


| Number | Deliverable                     | Specification                                                                                                                                     |
|-------:|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                         | Apache 2.0                                                                                                                                        |
|    0b. | Documentation                   | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how create_invoice works.                        |
|    0c. | Testing Guide                   | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Article                         | We will publish an **article** that explains how the decentralized invoice system works.                                                          
|    0e. | Benchmarking                    | Benchmarking will be provided for create_invoice.                                                                                                 
|    0f. | Substrate module: create_invoice | We will create a Substrate module that will create an invoice.                                                                                    |


### Milestone 2 — Implement show_all_invoices functionality

- Estimated Duration: 1 month
- FTE: 2
- Costs: $3,333 USDT


| Number | Deliverable                       | Specification                                                                                                                                    |
|-------:|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                           | Apache 2.0                                                                                                                                       |
|    0b. | Documentation                     | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how show_all_invoices works.               |
|    0c. | Testing Guide                     | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Article                           | We will publish an **article** that explains how the decentralized invoice system works.                                                         
|    0e. | Benchmarking                      | Benchmarking will be provided for show_all_invoices.                                                                                             
|    0f. | Substrate module: show_all_invoices      | We will create a Substrate module that will show all the invoices.                                                                               |

### Milestone 3 — Implement pay_invoice functionality

- Estimated Duration: 1 month
- FTE: 2
- Costs: $3,333 USDT


| Number | Deliverable                      | Specification                                                                                                                                     |
|-------:|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                          | Apache 2.0                                                                                                                                        |
|    0b. | Documentation                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how pay_invoice works                            |
|    0c. | Testing Guide                    | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Article                          | We will publish an **article** that explains how the decentralized invoice system works.                                                          
|    0e. | Benchmarking                     | Benchmarking will be provided for pay_invoice.                                                                                                    
|    0f. | Substrate module: pay_invoice | We will create a Substrate module that will pay an invoice.                                                                                       |


## Future Plans

- Building front-end using React to interact with pallet and using metamask/polkadot wallet to create/pay/show invoices.
