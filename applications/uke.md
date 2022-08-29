# W3F Grant Proposal

> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Uke Messaging - PoC - Phase 1
- **Team Name:** Uke
- **Payment Address:** bc1qttjsaqr0m8sxm46wnfdupzpl6rjemts3uxsuu5
- **Level:** 1
- **Status:** [Terminated](https://github.com/w3f/Grant-Milestone-Delivery/pull/548#issuecomment-1230409529)


> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview


### Overview

Uke is a p2p, completely distributed messaging protocol.  It utilizes local cryptography and a Substrate blockchain instance to verify, send, and receive messages in real time - just like any other conventional messaging protocol, and can be used to construct messaging apps, or any other application in which real time messaging is needed.

Substrate is a key part of this solution, as **uke** essentially defies the need for any sort of traditional backend in favor of a **completely DLT based infrastructure.** 

Initially, the PoC for this phase will be messaging app, however key components will be built that will allow for many more applications in the future.  The eventual goal is a messaging protocol that can be implemented anywhere, and is not dependent on any one centralized backend.

The purpose of this messaging app is to have it entirely independent of any third party service for both messaging and users - a true representation of web3.

 There is more to uke than just peer to peer messaging - it’s to demonstrate a lot more can be created with DLT than just another cryptocurrency. Rather than exchange currency one another, uke aims to take those same concepts and apply them to data and messaging.

 Personally, I am passionate about bringing more value to web3 via this sort of application - something that can be used by people, but also in a wider context of businesses and confidential, secure messaging.


### Project Details


**Project Expectations & Goals**

The initial goal for this grant is to allow for the development of a PoC of this messaging protocol in the form of a mobile app.

In the future, as the protocol becomes more defined, the goal is to develop a suite of SDKs and docs centering around secure and confidential messaging for any use case - with Substrate and its extensive functionality being the core of the solution.


Uke has a few primary goals and standards to upkeep:

1. Privacy - each message sent is completely, and purely, peer to peer - no one else can intercept or decrypt the message.

2. Fault Tolerance / Reliability - By using DLT, we remove the need for a central server, meaning as long as an amount of nodes are kept online, users can still talk to one another.  This is especially useful in emergency scenarios, as users can even opt to run their own nodes to ensure 100% runtime.

3. Anonymity - since each user is essentially just a cryptographic key paired with an id, user’s can easily stay anonymous on and off chain if they so wish to choose.


**Technology Stack**

For the front end, Ionic will be used for all web, Android and iOS versions.

The backend will purely be DLT based - for this one, a Substrate instance will be run to send messages back and forth between accounts.


Below are the summarized languages / tech stack

- Typescript / Javascript
- Rust
- Ionic
- ink! (where applicable)

**High Level Architecture**

![](https://media.discordapp.net/attachments/922350668264652810/1006601101375721522/Screenshot_2022-08-09_at_12.32.44_PM.png?width=880&height=1022)


***As a general overview, each message will be a transaction, and each user is essentially merely an account on the blockchain.***

**Components**


*For the purposes of defining the Uke PoC / MVP, the initial functionality of both modules will be represented via an ink! smart contract. However, in the future, it is planned to become a full pallet as needs become more apparent.  If it is preferred for the initial implementation to be a pallet, then we can arrange that.*

1. **Human DNS Module / Contract (future pallet)**

Using Substrate allows for the use of an ink! Smart contract, which in this case is used for mapping cryptographic addresses to more human readable names, just like a DNS.  We call this the Human DNS, and essentially it maps unique, human readable ids to otherwise illegible addresses.

With this mapping of addresses, users can then look up other users and add them to their contacts, or write them a new message, or any other package of data in theory. 


2. **Account Rules Module / Contract (future pallet)**

Users can define rules for whether they wish to be contacted or not, and who can contact them.  They essentially can create whitelists to explicitly allow who is permitted to message that specific account, along with what data can be sent in the future.

This measure prevents a common issue with phone numbers, email, and even other apps - spam.  Using smart contracts ensures the rules are kept in place, and the user is safe from any malicious or unwanted messages. 

Each message is a transaction on the blockchain, which depending on the rulings, can be deemed valid or invalid.  In theory, one could set up their own Uke messaging network with very specific rulings in the future.


3. **Substrate Instance**

The Substrate Instance will allow for all messages to be propagated, as well as smart contracts to be deployed in a guaranteed environment.  

It's worth noting that I plan to implement the concept of *light clients* into each client-side instance, so as to provide 


4. **Uke Messaging App**

The eventual conclusion, and primary deliverable of this proposal is representing all of the aforementioned technology into an easy to use, hybrid mobile app that will be released for use.  This app can be used across either Kusama or custom Uke networks, whatever is deemed fit upon launch.

**Mockups and Design of PoC App**

*Keep in mind these are mockups, and are subject to change*

![](https://media.discordapp.net/attachments/922350668264652810/1006620707519729774/uke-collection2x.png?width=984&height=1022)


### Ecosystem Fit

The eventual goal is to provide a streamlined way to for the following in the Substrate / Polkadot ecosystem:

1. Provide a common, and easy to use identity solution
2. Provide a way to define account rules and filters in order to customize what transactions, messages, or accounts can interact with an account.
3. Provide an out-of-the-box confidential messaging protocol which can be used for many different usecases.

The target audience here is our own user-base eventually, but also developers through opensourcing all work done here along with documentation on how one can also setup their own messaging using our tools.

Currently, there is no standard for how one can build a dapp quickly, and that does something common. This can serve as a baseline for how a dapp can function without the use of cryptocurrency or the like.

What makes us different:

1. No traditional backends are used here. Everything is purely based off of Substrate, as shown in the architecture diagram.

2. In our designs, the use of DLT/blockchain is not shown - this is intentional, as it allows users to merely experience a secure messaging experience without the cumbersome interface

## Team 

### Team members

- Bader Youssef - Team Lead, Architect, and Fullstack Developer.

### Contact

- **Contact Name:** Bader Youssef
- **Contact Email:** ibnbassem@gmail.com

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

Bader has previously built over systems on both Ethereum and the NEM/Symbol blockchain - part of which you may see on his Github.  He mainly has focused on creating front-end applications and architecture around purely DLT architectures for multiple companies.  He is proficient in a number of programming languages and protocols, as well as general solution architecture for both low and higher level software.

Some notable projects include:


1. A PoC IoT device that logged sensor data directly to a blockchain.  This included a custom UART serial protocol to convert Arduino code to blockchain transactions.

2. Portable battery powered nodes, utilizing a Raspberry Pi. (I'd like to do this for Substrate as well!)

3. The nftize project, an app that allowed for anyone to convert a physical asset to a digital one with ease.

4. Implementing Shamir secret sharing for an "offline multi sig" and private key sharding model.

5. A supply chain tracking system in which crop from the US was tracked to Japan over a private NEM blockchain 
instance.

In his spare time, he also wrote many articles centered around using blockchain in practical and real world scenarios, which you may find here: https://iodlt.com/iodlt-blog/

He is also published on Hackernoon, with articles gaining some traction (plans to write more!): https://hackernoon.com/u/crackTheCode

If any more proof / material is needed, then it will be provided! 


### Team Code Repos

The eventual code regarding uke will reside in the following repository:

- https://github.com/Uke-Messaging

- Bader Youssef - https://github.com/CrackTheCode016

### Team LinkedIn Profiles (if available)

- Bader Youssef - https://www.linkedin.com/in/bader-youssef-975914159

## Development Status

There is currently a WIP repo that is being constructed in parallel with this proposal, which will be shared as soon as possible.  To clarify:

- The front end is mostly implemented for the mobile app, along with a login / signup system using polkadotjs.

- The initial architecture is all complete, with future plans for pallet development.

## Development Roadmap

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1 (one) for the duration of the project
- **Total Costs:** $9,000 USD

### Milestone 1 — Implement ink! Human DNS & Account Rules Contracts

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 4,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how anyone can submit the contract to a valid Substrate node, as well as how to properly run unit tests for the contract in question. |
| 0c. | Testing Guide | Both contracts will be unit tested to the maximum with proper documentation and justification. |
| 1. | Human DNS ink! Smart Contract | Fully functioning smart contract, queryable  that keeps a mapping of addresses to users, allowing for user IDs and accounts to be identified. |
| 2. | Account Rules ink! Smart Contract | Fully functioning smart contract which maps rules to registered accounts. Each account is either "opted in", or out.  Accounts can then set and define rules relating to who they wish to filter out from their messages. |




### Milestone 2 — Front-end completion, Substrate & polkadot.js integration into Ionic App

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 4,500 USD

...

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how anyone can build the Ionic project for iOS, Android, or web. |
| 0c. | Testing Guide | The front-end will contain a minimum of 50% unit test coverage, of which these will be covered in the guide. |
| 0d. | Article | We will write a full blog post on Hackernoon on how Uke was created, what powers it, and what exact work was completed on it (as well as future goals). |
| 1a. | Uke Ionic Application: Data Models | Create the appropriate data structures and models to represent users, accounts, and messages coming from a Substrate instance. |
| 1b. | Uke Ionic Application: Login and Signup Service | Usage of the `polkadot.js` SDK to create, store, and secure user account's locally.  Proper authentication guards will also be created for the Ionic application. |
| 1c. | Uke Ionic Application: Message Delivery & Configuration | Create the necessary services for messages to be retrieved, sent, and verified from a Substrate instance. |
| 1e. | Uke Ionic Application: In-App Notification System | A minimalistic notification system for notifying users of in-app events, such as received messages. |



## Future Plans

In the short term, I plan to begin marketting a beta program for this project in order to gain user feedback and viability. Based off of this, I will further the protocol as needed.

Short Term Goals

- Gather initial feedback for the app
- Immediate planning to streamline the protocol 
- Design `uke` SDK and developer docs for others to use
- Demonstrate uses of web3 beyond cryptocurrency

Longer Term Goals

- Develop Human DNS and Account Ruling Pallets for common Substrate use
- Develop appropriate modules for business use
- "Disappearing", or temporary secure messaging
- Optional payment integrations for users, if applicable
- Custom Substrate Uke network implementation for private or public use


## Additional Information

**How did you hear about the Grants Program?** 

I found it while exploring the Polkadot / Substrate ecosystem for development purposes.


- Work you have already done.

> I already have completed a significant part of the front end work, all that is needed is the Substrate and polkadotjs implementation.

- If there are any other teams who have already contributed (financially) to the project.

> None, this is an independent project.

- Previous grants you may have applied for.

> This is my first time applying to the Web3 grants program.

