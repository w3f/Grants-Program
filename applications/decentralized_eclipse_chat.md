# W3F Grant Proposal

- **Project Name:** EclipseChat
- **Team Name:** PriftiTeam
- **Payment Address:** 0xd042e53e22e9f941ceba02f4adb9d1b32ef43675
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview


### Overview

- We will build a decentralized communication system.
- People can exchange sms between each other in safe mode.
- Keep track of all sms.
- The system can be used by B2B, B2C, C2C.

### Project Details

We aim to build a decentralized communication system that will help businesses/clients to communicate.
We will use substrate node template to build our pallet.

Pallet name: EclipseChatPallet

Methods:

1- register_address(address, nickname)
-> This method will save its address and nickname.

2- check_nickname(nickname) 
-> This method will check if nickname exist or not.

3- send_invitation(from, to) 
-> This method will send and invitation to start the communication.

4- accept_deny_invitation(from, to) 
-> This method will accept or deny the invitation to make the communication or not.

5- send_sms(from, to) 
-> This method will send a sms from one address to another.

6- get_sms(from, to) 
-> This method will get a list of sms.

7- get_all_channels(from) 
-> This method will get all the channel.

8- search_address(from) 
-> This method will search for any address registered.

9- delete_channel(from, channel id) 
-> This method delete the channel related with.


Our idea is to create a suitable communication platform that is tailored to the needs of each individual user. Every user will have the freedom to chousing his level of privacy and to decide if he wants to be identified or use the software in total anonymity.
The communication will be direct between the two users without having the necessity of a server that can store an save the communication. Later on, the creation of Groups can be added as well.

### Ecosystem Fit

- Businesses and clients who would like to make a communication between each other. 

## Team
### Team members
- MSc Redian Prifti - Product owner
- Eng Gerti Prifti - Substrate/Rust developer with proven experience

### Contact

- **Contact Name:** MSc Redian Prifti
- **Contact Email:** redianprifti01@gmail.com
- **Website:** https://www.linkedin.com/in/redi-prifti-9b516a40/

- **Contact Name:** Eng Gerti Prifti
- **Contact Email:** gertiprifti@gmail.com
- **Website:** https://www.linkedin.com/in/gertiprifti/

### Legal Structure

- **Registered Address:**  We do not have any registered address
- **Registered Legal Entity:** We do not have any registered legal entity

### Team's experience

Hello, my name is Redian Prifti and I am a Civil Engineer. I have a demonstrated experience in the field of project management and project development of about ten years.
Recently I have been very attracted to Web 3.0 and the opportunities that it can offer. The freedom of choosing the decentralization and the security that offers Web 3.0 are the main characteristics that I like the most.
We have decided to assemble a small Team and try to develop our idea of a different communication platform.
Off course, I´m not a developer but I intend to bring my experience in the management and development of a project.

Hello, my name is Gerti. Over the last 5 years, I've been continuously working towards achieving clients' business goals through the application of IT technology. The collaborations I've had working in a few industries brought to life numerous products with an audience of thousands and even millions of users. The secret behind this success was creating an intuitive, visually attractive application customized to the needs of the target clientele.In addition to the substantial experience working as a Java Enterprise, I've also gained a Master's Degree in Computer Science that has equipped me with a strong knowledge of the newest tools and technologies to create flawless products your clients will enjoy.For the last few years, I have been curious about Substrate/Rust, and I am learning it in my spare time.
### Team Code Repos

- https://github.com/gertt/Invoice
- https://github.com/herou/EscrowPallet

### Winner of a small grant to build an Escrow system on top of substrate
Deliver everything on time and meet all the requirements
- https://github.com/w3f/Grants-Program/pull/1094 - Winner of Grant Level 1
- https://github.com/herou/EscrowPallet - Source code
- https://github.com/w3f/Grant-Milestone-Delivery/pull/599 - Milestone 1
- https://github.com/w3f/Grant-Milestone-Delivery/pull/566 - Milestone 2 and 3

### Winner of a small grant to build an Invoice system on top of substrate
Deliver everything on time and meet all the requirements
- https://github.com/w3f/Grants-Program/pull/1276 - Winner of Grant Level 1
- https://github.com/gertt/Invoice - Source code
- https://github.com/w3f/Grant-Milestone-Delivery/pull/695 - Milestone 1
- https://github.com/w3f/Grant-Milestone-Delivery/pull/701 - Milestone 2
- https://github.com/w3f/Grant-Milestone-Delivery/pull/704 - Milestone 3

### Team Github

- Gerti: https://github.com/gertt
- Redian : https://github.com/rediPrifti

### Team LinkedIn Profiles
- Eng Gerti Prifti: https://www.linkedin.com/in/gertiprifti/
- MSc Redian Prifti: https://www.linkedin.com/in/redi-prifti-9b516a40/


## Development Status
We would like to use the Substrate template node
- [Substrate node template](https://github.com/substrate-developer-hub/substrate-node-template)

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 months
- Full-Time Equivalent (FTE): 2 FTE
- **Costs:** $30,000 USDT


### Milestone 1 — Implement register_address, check_nickname, send_invitation  functionality

- Estimated Duration: 1 month
- FTE: 2
- Costs: $10,000 USDT

| Number | Deliverable                     | Specification                                                                                                                                                 |
|-------:|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                         | Apache 2.0                                                                                                                                                    |
|    0b. | Documentation                   | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how register_address, check_nickname, send_invitation works. |
|    0c. | Testing Guide                   | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.             |
|    0d. | Article                         | We will publish an **article** that explains how the communication system works.                                                                              
|    0e. | Benchmarking                    | Benchmarking will be provided for register_address, check_nickname, send_invitatio.                                                                           
|    0f. | Substrate module: create_invoice | We will create a Substrate module that will create an register an address, check for a nickname and send an invitation.                                       |


### Milestone 2 — Implement accept_deny_invitation, send_sms, get_sms functionality

- Estimated Duration: 1 month
- FTE: 2
- Costs: $10,000 USDT

| Number | Deliverable                       | Specification                                                                                                                                         |
|-------:|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                           | Apache 2.0                                                                                                                                            |
|    0b. | Documentation                     | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how accept_deny_invitation, send_sms, get_sms works. |
|    0c. | Testing Guide                     | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.     |
|    0d. | Article                           | We will publish an **article** that explains how the decentralized communication system works.                                                        
|    0e. | Benchmarking                      | Benchmarking will be provided for accept_deny_invitation, send_sms, get_sms works.                                                                    
|    0f. | Substrate module: show_all_invoices      | We will create a Substrate module that will accept or deny an invitation, send a sms and get all sms.                                                 |

### Milestone 3 — Implement get_all_channels, search_address, delete_channel  functionality

- Estimated Duration: 1 month
- FTE: 2
- Costs: $10,000 USDT


| Number | Deliverable                      | Specification                                                                                                                                            |
|-------:|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                          | Apache 2.0                                                                                                                                               |
|    0b. | Documentation                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how get_all_channels, search_address, delete_channel works |
|    0c. | Testing Guide                    | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.        |
|    0d. | Article                          | We will publish an **article** that explains how the decentralized communication system works.                                                           
|    0e. | Benchmarking                     | Benchmarking will be provided for get_all_channels, search_address, delete_channel works.                                                                   
|    0f. | Substrate module: pay_invoice | We will create a Substrate module that will geta alla channels, search for address and  delete the channel.                                              |


## Future Plans

- Building front-end using android/ios/react to interact with pallet via RPC.
