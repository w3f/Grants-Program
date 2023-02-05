# W3F Grant Proposal

- **Project Name:** EclipseChat
- **Team Name:** PriftiTeam
- **Payment Address:** ETH Address (USDC) 0xd042e53e22e9f941ceba02f4adb9d1b32ef43675
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

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

1- register_address(address, nickname) -> This method will save an address and nickname in the storage.

2- check_nickname(nickname) -> This method will check if the nickname exists or not. Return true or false.

3- send_invitation(from, to) -> This method will send an invitation to start the communication. A structure will be created containing the sender address, receiver address, invitation flag, and the list of messages they will exchange with each other.

4- accept_deny_invitation(from, to) -> This method will make the receiver accept or deny the invitation to make the communication happen or not.The invitation flag would be true/false.


Our idea is to create a suitable communication platform that is tailored to the needs of each individual user. Every user will have the freedom to chousing his level of privacy and to decide if he wants to be identified or use the software in total anonymity.
The communication will be direct between the two users without having the necessity of a server that can store an save the communication. Later on, the creation of Groups can be added as well.

### How to deal with GDPR
- Encrypt personal data: Encrypt personal data stored on the blockchain to help prevent unauthorized access.
- Provide access and control: Provide users with access to their personal data, and allow them to control how it is used. This includes the right to delete or export their dat

### Why did we choose to build a chat system using Blockchain? 

Building a chat app using blockchain technology can have several benefits, such as increased security, privacy, and decentralization. 
Here are some benefits of building a chat app using blockchain:
- Security: Blockchain technology provides a secure and decentralized way to store and transfer data, which can help to prevent data breaches and unauthorized access to user data.
- Privacy: Chat apps built on blockchain can provide users with more control over their data, as they can choose to encrypt their messages or store them in a secure, decentralized manner.
- Decentralization: By using blockchain technology, a chat app can become more decentralized, which can reduce the risk of single points of failure and increase the reliability of the app.


### Ecosystem Fit

- Businesses and clients who would like to make a communication between each other. 

## Team
### Team members
- MSc Redian Prifti - Product owner
- MSc Eljo Prifti - Team Leader
- Eng Gerti Prifti - Substrate/Rust developer with proven experience

### Contact

- **Contact Name:** MSc Redian Prifti
- **Contact Email:** redianprifti01@gmail.com
- **Website:** https://www.linkedin.com/in/redi-prifti-9b516a40/

- **Contact Name:** Eng Gerti Prifti
- **Contact Email:** gertiprifti@gmail.com
- **Website:** https://www.linkedin.com/in/gertiprifti/

- **Contact Name:** MSc Eljo Prifti
- **Contact Email:** elioprifti@gmail.com
- **Website:** https://www.linkedin.com/in/elioprifti/

### Legal Structure

- **Registered Address:**  We do not have any registered address
- **Registered Legal Entity:** We do not have any registered legal entity

### Team's experience

Hello, my name is Redian Prifti, and I am a Civil Engineer. I have a demonstrated experience in the field of project management and project development of about ten years.
Recently I have been very attracted to Web 3.0 and the opportunities that it can offer. The freedom of choosing the decentralization and the security that offers Web 3.0 are the main characteristics that I like the most.
We have decided to assemble a small Team and try to develop our idea of a different communication platform.
Off course, I´m not a developer, but I intend to bring my experience in the management and development of a project.

Hello, my name is Gerti. Over the last 5 years, I've been continuously working towards achieving clients' business goals through the application of IT technology. The collaborations I've had working in a few industries brought to life numerous products with an audience of thousands and even millions of users. The secret behind this success was creating an intuitive, visually attractive application customized to the needs of the target clientele.In addition to the substantial experience working as a Java Enterprise, I've also gained a Master's Degree in Computer Science that has equipped me with a strong knowledge of the newest tools and technologies to create flawless products your clients will enjoy.For the last few years, I have been curious about Substrate/Rust, and I am building using it in my spare time.

Hello, my name is Elio. I have a master's degree in computer science and I have more than 6 years experience as a professional software developer in Android/Java developer in the market. I have been deeply fascinated by blockchain and discovered Substrate. I have spent 1+ year learning/contributing to Rust/Substrate.
I am a contributor to the Substrate recipes repo,  taking it upon myself to upgrading Substrate “Kitchen Node” Recipes from v1 to v2, which took 5-6 months working in my spare time.

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
- Eljo : https://github.com/herou

### Team LinkedIn Profiles
- Eng Gerti Prifti: https://www.linkedin.com/in/gertiprifti/
- MSc Redian Prifti: https://www.linkedin.com/in/redi-prifti-9b516a40/
- MSc Eljo Prifti:  https://www.linkedin.com/in/elioprifti/


## Development Status
We would like to use the Substrate template node
- [Substrate node template](https://github.com/substrate-developer-hub/substrate-node-template)

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 months
- Full-Time Equivalent (FTE): 2 FTE
- **Total Costs:** $10,000 USDC


### Milestone 1 — Implement register_address, check_nickname functionality

- Estimated Duration: 1 month
- FTE: 2
- Costs: $3,3333 USDC

| Number | Deliverable                     | Specification                                                                                                                                               |
|-------:|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                         | Apache 2.0                                                                                                                                                  |
|    0b. | Documentation                   | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how register_address, check_nickname works. |
|    0c. | Testing Guide                   | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.           |
|    0d. | Benchmarking                    | Benchmarking will be provided for register_address, check_nickname, send_invitatio.                                                                         
|    0e. | Substrate module: register_address, check_nickname| We will create a Substrate module that will create an register an address, check for a nickname and send an invitation.                                     |


### Milestone 2 — Implement send_invitation functionality

- Estimated Duration: 1 month
- FTE: 2
- Costs: $3,3333 USDC

| Number | Deliverable                       | Specification                                                                                                                                         |
|-------:|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                           | Apache 2.0                                                                                                                                            |
|    0b. | Documentation                     | We will provide both **inline documentation** of the code and a basic **tutorial** that explains send_invitation works. |
|    0c. | Testing Guide                     | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.     |
|    0d. | Benchmarking                      | Benchmarking will be provided for accept_deny_invitation, send_sms, get_sms works.                                                                    
|    0e. | Substrate module: send_invitation | We will create a Substrate module that will accept or deny an invitation, send a sms and get all sms.                                                 |

### Milestone 3 — Implement accept_deny_invitation functionality

- Estimated Duration: 1 month
- FTE: 2
- Costs: $3,3333 USDC


| Number | Deliverable                      | Specification                                                                                                                                            |
|-------:|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                          | Apache 2.0                                                                                                                                               |
|    0b. | Documentation                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how accept_deny_invitation works |
|    0c. | Testing Guide                    | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.        |
|    0d. | Article                          | We will publish an **article** that explains how the decentralized communication system works.                                                           
|    0e. | Benchmarking                     | Benchmarking will be provided for get_all_channels, search_address, delete_channel works.                                                                   
|    0f. | Substrate module: accept_deny_invitation | We will create a Substrate module that will geta alla channels, search for address and  delete the channel.                                              |


## Future Plans

- Future development and maintainable will come by adding these methods in the future: 
send_sms, get_sms works, get_all_channels, search_address, delete_channel
