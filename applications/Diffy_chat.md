# Diffy messenger

- **Team Name:** BelSoft
- **Payment Address:** Polkadot (Statemint):	 14nQH1ZTDkRxLWdCWbSZjRGrBJpXgj4m2RRZDtQZExPP73K (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:
This application complies with a potentially interesting project “Private instant messenger that uses on-chain identity” mentioned in [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source) page in the “Social Networking” section.

## Project Overview :page_facing_up:

A lot of sensitive data is meant to be transferred between parties in a secure way, but most of the centralized messengers and mail agents, even secured ones, have a common point of vulnerability - a centralized database/backend that stores all the data and manages connections. Meanwhile, some entities or even industries as a whole have demand for secured private channels for exchanging messages, e.g. medical institutions, that exchange sensitive data with patients or with other market players.

The aim of this project is to develop a secured decentralized messenger that doesn’t store data on a centralized backend and uses personal Polkadot wallet credentials for chatting initiation and messaging. 

### Project Details

P2p channels between users will be set using WebRTC. We will develop a Substrate pallet for exchanging [SDP offers](https://datatracker.ietf.org/doc/html/rfc2327). For address discovery of NAT users we will use any public [STUN server](https://datatracker.ietf.org/doc/html/rfc8445).
All messages between users will be encrypted with user’s public keys, so only receiving user could decrypt his messages using his private key of his Polkadot wallet.
Also, the pallet will include a “contacts” feature: a user will be able to tie names to wallet addresses and organize his contacts in a common way.

![image](https://user-images.githubusercontent.com/126072104/220610232-0b9a4033-97cc-44ba-8948-a610b2b0c4bf.png)

### Ecosystem Fit

The Diffy chat dapp is very in demand in areas where it is crucial to protect personal and other critical data from unauthorized access during interaction or communication between counterparties. The target audience is very wide: from medical institutions providing telemedicine services to remote financial services and corporate channels for transmitting sensitive information between remote divisions.

In the [Open Source Polkadot Stack](https://wiki.polkadot.network/docs/build-open-source) we see the [Uke Protocol Pallet](https://github.com/Uke-Messaging/uke-pallet) project, that provides functionality to perform basic messaging and identity assignment to users on a given Substrate chain. Unlike Uke Protocol, Diffy chat dapp won’t use a blockchain for sending and storing entire messages as in case of mass use this feature will dramatically clog the blockchain with unnecessary information like "hello" messages. Our dapp will use a blockchain just for authorization purposes, p2p connection initiation and for personal encryption keys. History backup feature can be available on later stages of the project by storing files locally or in IPFS with putting just a hash sum in a blockchain.

## Team :busts_in_silhouette:

### Team members

- Max Remov, managing partner at BelSoft Dev d.o.o
- Alexey Vexin, CEO at BelSoft Dev d.o.o
- Dmitrii Shevchenko, CTO at BelSoft Dev d.o.o
- Nikita Orlov, Teamlead at BelSoft Dev d.o.o
- Alexander Plekhanov, Middle full stack developer at BelSoft Dev d.o.o
- Valeriy Tetevin, Senior full stack developer at BelSoft Dev d.o.o

### Contact

- **Contact Name:** Alexey Vexin
- **Contact Email:** vexin@belsoft.rs
- **Website:** https://www.belsoft.rs

### Legal Structure

- **Registered Address:** Kneza Mihaila 33, sprat 2 , Stari Grad , 11000 Beograd , Srbija
- **Registered Legal Entity:** Belsoft Dev DOO Beograd

### Team's experience

Max Remov is a business and personality transformation expert, executive and visionary, innovation instigator across telecom, retail, chemistry, pharma. Participates in several crypto initiatives.

Alexey Vexin is product owner and project manager with 10+ years of experience in managing complicated telecoms and IT projects in Telco, Utilities and Governmental sectors with deep focus on business process management. Led dozens of federal scaled projects for IT systems implementation and industry scaled technology development, standardization and implementation.

Dmitrii Shevchenko is a TechLead engineer with 10+ years of experience in developing and integrating IT, networking, security and blockchain solutions. Involved in implementation of highly reliable industrial solutions and development of FinTech and DeFi applications.

Nikita Orlov, ETH Waterloo 2019 hackathon prize-winner, is a TechLead engineer with over 8 years of experience in development and integration of fault-tolerant high-loaded SaaS IT solutions including relevant experience in blockchain solutions.

Alexander Plekhanov is a full stack software developer with over 5 years of experience including blockchain-based projects, enterprise solutions for fintech, call-centers, government services. Recent time mostly focused on smart-contracts development.

Valeriy Tetevin is a programming engineer with over 8 years of experience in cloud-native applications. He also has strong knowledge of microservices architecture and back-end development for high-loaded applications.

### Team Code Repos

- https://github.com/1db1
- https://github.com/StringNick
- https://github.com/SealTV

### Team LinkedIn Profiles (if available)

- [Max Remov](https://www.linkedin.com/in/remov)
- [Alexey Vexin](https://www.linkedin.com/in/alexey-vexin-800a4068/)
- [Nikita Orlov](https://www.linkedin.com/in/nikita-orlov-aa6910186/)
- [Alexander Plekhanov](https://www.linkedin.com/in/alexander-plekhanov/)
- [Valeriy Tetevin](https://www.linkedin.com/in/sealtv/)

## Development Roadmap :nut_and_bolt:

We plan to execute 3 deliverables in two milestones:
- a Substrate pallet for chat initiation;
- a DOTRTC library for p2p transport implementation with test html pages for message passing;
- a web-messenger dapp MVP with polkadot wallets authorisation.

The project will be supported by a team of 2 developers, 1 UI/UX designer, 1 DevOps engineer and 1 QA.

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  3,5 FTE
- **Total Costs:** 30,000 USDT

### Milestone 1 — Design and development of a pallet and a DOTRTC library

- **Estimated duration:** 1,5 months
- **FTE:**  2
- **Costs:** 16,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how the developed features work. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure new functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Diffy chat pallet | We will develop a pallet (using Rust) which will include event handling to send and approve WebRTC offers for chat initiation. |
| 2. | DOTRTC library | We will develop a DOTRTC library (with JS) for p2p transport implementation using a parachain with Diffy chat pallet. This library will include an API for organizing p2p communication, methods for splitting packets into chunks (and reassemble on the receiver’s end). For secure messaging between two participants a e2e encryption using the rs25519 algorithm will be implemented in the DOTRTC library (a sender will encrypt outgoing messages with recipient’s public key so only the recipient could decrypt them with his private key). |
| 3. | HTML test page | We will deliver an HTML test page for DOTRTC library testing (setting a p2p channel between 2 users using the DOTRTC library). |

### Milestone 2 — A web messenger MVP development

- **Estimated duration:** 1,5 months
- **FTE:**  1,5
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how the new dapp works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article | We will publish an **article** that explains what was achieved, how to use the new Dapp and what benefits what are the benefits of using the system |  
| 1. | Contacts list feature | We will develop a contact list feature allowing users to tie real names to contact’s wallet addresses and store them encrypted in a blockchain. Encryption and decryption will be carried out on the frontend. | 
| 2. | Web messenger dapp MVP | A web messenger dapp (written on JS) with authorization via Polkadot.js keys, p2p messaging using developed DOTRTC library and contacts list: a user will be able to start a conversation with someone on his contacts list. A web dapp MVP mockup is shouwn below and the basic user logic is as follows. To establish a chat User A sends a short 1st message to User B (limited to 50 symbols as it is written into the blockchain). This message is sent with the connection request. When User B is on-line he receives this message with connection request and accepts it: automatically for users on his contact list and manually for requests from unknown users (connection request can be declined as well).| 

![Diffy_chat mockup](https://user-images.githubusercontent.com/126072104/223709096-ccec2425-f3ac-4c8f-853f-d3656a8c29c5.jpg)

## Future Plans

In the next stages of the project we plan to implement new fundamental features like:
- offline messaging;
- group chats (p2mp);
- sending/receiving files;
- chats backup feature.

These should be developed under later stages of the project.
