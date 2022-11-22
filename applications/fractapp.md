# Fractapp

* **Proposer:** CryptoBadBoy
* **Payment Address:** 3HrP78rbmafpfBsU49LCpywYrNcscnKd76

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

Please provide the following:

* A brief description of the project.

Fractapp is a messenger with a cryptocurrency wallet. Cryptocurrency address is hard to remember so users have a problem send cryptocurrency to another user.
Fractapp creating a simple ecosystem for users. Users can send crypto in chats and use DApp chat-bots. Fractapp will be available on Android and later IOS.

And we have old [DEMO](https://www.youtube.com/watch?v=cG5PAIVoqh0) for the hackathon.

* An indication of how you will integrate this project into Substrate / Polkadot / Kusama.

 The integration will involve creating a mobile app on Expo (React Native) and backend services.

* Mobile App:
  * Non custodial wallet for Polkadot and Kusama (creating, backup, wallet details, transaction info)
  * Payment chat is a chat for only send cryptocurrency. These milestones haven't support messages in chats. But we will add messages later.
  * Chat-bots for DApp

* Backend services:
  * Push-Notification service is a service which will notify a user about received transactions
  * Profile service is a service that stores not public information about the user (Nickname, Twitter, Email, Phone Number).

* CBI (Chat-Bot interface):

CBI is the interface between Fractapp and your chat-bots. It can be summarized in the following algorithm:

1. To call the bot, the user must send a request to start.
2. Bot service must return the user interface (button name, image, and trigger name)
3. The user clicks a button and sends the request with the trigger name to the chat-bot service.
4. Chat-bot processes the user's request by the trigger name.. If the user doesn't need to make a choice then the service returns the transaction which the user will sign.
5. User signs or cancels transactions.

Example, Decentralized Exchange Bot (exchange DOT <-> KSM):

1. User sends a request to start.
2. Chat-Bot returns response with 2 buttons: DOT, KSM
3. User chooses DOT
4. Chat-Bot returns the text-editor element to the user
5. User sends a request with text (amount)
6. Chat-Bot returns transaction (transaction calling Exchange DApp)
7. User signs and sends transaction

* An indication of why your team is interested in creating this project.

Polkadot is one of the most interesting blockchain platforms. We want to help users to just join in polkadot and wallet is the most important module in the platform.

### Project Details

We expect the teams to already have a solid idea about the project's expected final state.

Therefore, we ask the teams to submit (where relevant):

* Mockups/designs of any UI components

<https://elshandzhafarov326555.invisionapp.com/overview/Fractapp---cryptocurrency-wallet-with-messenger-ckeyvvuh70t3j01bx5mg6e7b0>

* An overview of the technology stack to be used

Golang, React Native, Polkadot, Kusama

### Ecosystem Fit

Similar projects: Luno/Polkawallet

We are creating a messenger with a cryptocurrency wallet. This will help the user to interact with each other without a complicated address. Users can exchange currency, use p2p smart-contracts, vote in the DAOs and etc via chat-bots.

## Team :busts_in_silhouette:

### Team members

* Elshan Dzhafarov
* Anastasiya Strashnikova

### Team Website 

* <https://fractapp.com>

### Legal Structure

personal address will be provided via the invoice form

### Team's experience

Elshan Dzhafarov:

* Ex CTO at Ventuary DAO. Ventuary DAO received a grant from the Wave Platform. (<https://medium.com/waves-lab/waves-grants-recipients-progress-2ade081d4ca0>)
* Ex CTO at Neutrino Protocol. Neutrino Protocol is a protocol for creating the stablecoin. Neutrino USD is the most popular DApp on the Waves Platform. (<https://neutrino.at> / <https://github.com/ventuary-lab/neutrino-contract>)
* Co-author gravity protocol. (<https://arxiv.org/abs/2007.00966>)
* Open-source contributor gravity protocol. (<https://github.com/Gravity-Tech>)
* Winner of the hackathon "My country and blockchain", "Hack Moscow" in nomination from Health Nexus, "Spring Hack" in nomination from QIWI Blockchain. Prize-winner "Unblock Hackathon" and "Blockchain Founder Hackathon".

Anastasiya Strashnikova:

* Awesome designer at Fractapp

### Team Code Repos

* <https://github.com/fractapp>
* <https://github.com/cryptobadboy>

### Team LinkedIn Profiles

* <https://www.linkedin.com/in/elshan-dzhafarov/>

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
| 6. | Distributing | We will provide .apk files for Android |

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
| 8. | Distributing | We will provide .apk files for Android |

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
| 5. | Distributing | We will publish on Google Play and F-Droid  |

## Future Plans

* Apply to App Store
* Integration Bitcoin and Ethereum
* Messaging protocol on a substrate
* Creating popular DApp in chat-bots
* Group chats for DAO (If user have token then he can join the group)
* Decentralized voting in a groups
