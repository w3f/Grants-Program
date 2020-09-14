# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Fractapp
* **Proposer:** CryptoBadBoy
* **Payment Address:** bc1q5h0fk4ys3crk6xjxhs8wmf0lles03tlzns90w3

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview

Please provide the following:
* A brief description of the project.

Fractapp is a messenger with a cryptocurrency wallet. Cryptocurrency address is hard to remember so users have a problem send cryptocurrency to another user. 
Fractapp creating a simple ecosystem for users. Users can send crypto in chats and use DApp chat-bots. Fractapp will be available on Android and IOS.

And we have old [DEMO](https://www.youtube.com/watch?v=cG5PAIVoqh0) for the hackathon.

* An indication of how you will integrate this project into Substrate / Polkadot / Kusama.

 The integration will involve creating a mobile app and a couple of backend services.

* An indication of why your team is interested in creating this project.

Polkadot is one of the most interesting blockchain platforms. We want to help users to just join in polkadot and wallet is the most important module in the platform. 

### Project Details 
We expect the teams to already have a solid idea about the project's expected final state.

Therefore, we ask the teams to submit (where relevant):
* Mockups/designs of any UI components

We will provide om request (InVision/Figma). Design made by 40%.

* An overview of the technology stack to be used

Golang, React Native


### Ecosystem Fit 
Similar projects: Luno/Polkawallet

We are creating a messenger with a cryptocurrency wallet. This will help the user to interact with each other without a complicated address. Users can exchange currency, use p2p smart-contracts, vote in the DAOs and etc via chat-bots.

## Team :busts_in_silhouette:

### Team members
* Elshan Dzhafarov
* Anastasiya Strashnikova

### Team Website	
* https://fractapp.com

### Legal Structure 
personal address will be provided via the invoice form

### Team's experience
Elshan Dzhafarov:
* Ex CTO at Ventuary DAO. Ventuary DAO received a grant from the Wave Platform. (https://medium.com/waves-lab/waves-grants-recipients-progress-2ade081d4ca0)
* Ex CTO at Neutrino Protocol. Neutrino Protocol is a protocol for creating the stablecoin. Neutrino USD is the most popular DApp on the Waves Platform. (https://neutrino.at / https://github.com/ventuary-lab/neutrino-contract)
* Co-author gravity protocol. (https://arxiv.org/abs/2007.00966)
* Open-source contributor gravity protocol. (https://github.com/Gravity-Tech)
* Winner of the hackathon "My country and blockchain", "Hack Moscow" in nomination from Health Nexus, "Spring Hack" in nomination from QIWI Blockchain. Prize-winner "Unblock Hackathon" and "Blockchain Founder Hackathon".

Anastasiya Strashnikova:
* Awesome designer at Fractapp


### Team Code Repos
* https://github.com/fractapp
* https://github.com/cryptobadboy

### Team LinkedIn Profiles
* https://www.linkedin.com/in/elshan-dzhafarov/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 3.5
* **Total Costs:** 1.2 BTC

### Milestone 1 — Wallet
* **Estimated Duration:** 1 month
* **FTE:**  1.5
* **Costs:** 0.44 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Creating wallet | Procedure for creating/importing a wallet |  
| 2. | Backup wallet | User can backup wallet one of method: google drive/encrypted file to phone/ display of seed phrase on the screen  |  
| 3. | Wallet details | User can see balance, transactions, transaction info   | 
| 4. | Documentation | A standalone document, describing usage |
| 5. | Unit-testing | Unit tests covering at least 75% of the code | 

### Milestone 2 — Profile
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.38 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Profile | Fractapp user profile |  
| 2. | Connect phone number/twitter/email | User can connect social for an account. Any users can search to find user by social. |  
| 3. | Push-Notification service for transaction | Push-Notification service notifies users about transactions.  |  
| 4. | Backend for profile storage | Golang backend for storing fractapp profiles. | 
| 5. | Docker | Docker image for backend and push-notification service |
| 6. | Documentation | A standalone document, describing usage |
| 7. | Unit-testing | Unit tests covering at least 75% of the code | 

### Milestone 3 — Chat
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.38 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Chat | Only payment chat (not have messages). Users will be able to send crypto by email/phone/twitter/nickname. |  
| 2. | Staking bot | First built in a chat-bot for staking. |  
| 3. | Documentation | A standalone document, describing usage |
| 4. | Unit-testing | Unit tests covering at least 75% of the code | 


## Future Plans
* Integration Bitcoin and Ethereum
* Messaging protocol on a substrate
* Api for creating DApp chat-bots  (User will be able to create own chat-bots)
* Creating popular DApp in chat-bots
* Group chats for DAO (If user have token then he can join the group)
* Decentralized voting in a groups
