# Uke Protocol PoC & App (revised)

> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** Uke
- **Payment Address:** bc1qttjsaqr0m8sxm46wnfdupzpl6rjemts3uxsuu5
- **Level:** 1

### DISCLAIMER

This is grant proposal is very similar to one I had submitted previously. This was due to it being terminated, which you may [view here.](https://github.com/w3f/Grant-Milestone-Delivery/pull/548)  

I have since severely changed the design of the protocol / project to provide a pallet-based architecture henceforth bringing more value. I realized the other proposal was not sustainable anyways (contract-based architecture), and this future-proofs and brings more value to the ecosystem as a whole.

I hope mitigate any sort of conflict as interest as there was before.  Please let me know if this is sufficient!

## Project Overview

### Overview

The Uke Protocol is a p2p, completely distributed messaging protocol.  It utilizes local cryptography and a Substrate blockchain instance to verify, send, and receive messages in real time - just like any other conventional messaging protocol, and can be used to construct messaging apps, or any other application in which real time messaging is needed.

Substrate is a key part of this solution, as **uke** essentially defies the need for any sort of traditional backend in favor of a **completely DLT based infrastructure.**

Initially, the PoC for this phase will be messaging app, however key components will be built that will allow for many more applications in the future.  The eventual goal is a universal messaging protocol that can be implemented anywhere, and is not dependent on any one centralized backend.

The purpose of this messaging app is to have it entirely independent of any third party service for both messaging and users - a true representation of web3.

There is more to uke than just peer to peer messaging - it’s to demonstrate a lot more can be created with DLT than just another cryptocurrency. Rather than exchange currency one another, uke aims to take those same concepts and apply them to data and messaging.

I am passionate about bringing more value to web3 via this sort of application - something that can be used by people, but also in a wider context of businesses and confidential, secure messaging.

### Project Details

**Project Expectations & Goals**

The initial goal for this grant is to allow for the development of a PoC of this messaging protocol in the form of a mobile app.

In the future, as the protocol becomes more defined, the goal is to develop a suite of SDKs and docs centering around secure and confidential messaging for any use case - with Substrate and its extensive functionality being the core of the solution.

Uke has a few primary goals and standards to upkeep:

1. **Privacy** - each message sent is completely, and purely, peer to peer - no one else can intercept or decrypt the message.

2. **Fault Tolerance / Reliability** - By using DLT, we remove the need for a central server, meaning as long as an amount of nodes are kept online, users can still talk to one another.  This is especially useful in emergency scenarios, as users can even opt to run their own nodes to ensure 100% runtime.

3. **Anonymity** - since each user is essentially just a cryptographic key paired with an id, user’s can easily stay anonymous on and off chain if they so wish to choose.

**Technology Stack**

For the front end, Ionic will be used for all web, Android and iOS versions.

The backend will purely be DLT based - for this one, a Substrate instance will be run to send messages back and forth between accounts.  A custom pallet to interact and properly store messages in Substrate storage will be developed to do so.

Below are the summarized languages / tech stack

- Typescript / Javascript
- Rust
- Ionic

**High Level Architecture**

![](https://media.discordapp.net/attachments/922350668264652810/1027258529108721704/Screenshot_2022-10-05_at_12.38.31_PM.png)

***As a general overview, each message will be a signed extrinsic, and each user is essentially merely an account on the blockchain.***

**Components**

*For the purposes of defining the Uke PoC / MVP, the initial functionality of the uke pallet will only handle messaging and message storage.  However, in the future, it is planned to implement further functionality, such as a more robust identity registrar and account filter system.*

1. **UKE PALLET**

Using Substrate allows for the creation of a custom pallet, which will have two primary functions for this PoC:

- Handle message transmission and conversation storage (via a few key `StorageMaps` for managing active and ongoing conversations).

- Basic identity mapping (`register()` function to allow for a mapping of `BoundedVec<u8>` to `AccountId` for easy lookup).

The messages will be stored and read from the Substrate storage via a common `StorageMap` for the time being.  Functionality will be included to retrieve the conversation state without having to load all messages as well.

In order to identity unique conversations, an ID (`convo_id`) is used to retrieval the correct conversation between two particular users. This id is generated by hashing the sender and recipient addresses to create a unique, yet deterministic way to identity conversations in storage.

For identifying each user, a mapping for cryptographic addresses to more human readable names will also be created within the pallet. It essentially it maps unique, human readable ids to otherwise illegible addresses.

With this mapping of addresses, users can then look up other users and add them to their contacts, or write them a new message, or any other package of data in theory.

2. **Substrate Instance**

The Substrate Instance will allow for all messages to be propagated, consensus to take place, as well as smart contracts to be deployed in a guaranteed environment as needed.  

3. **Uke Messaging App**

The eventual conclusion, and primary deliverable of this proposal is representing all of the aforementioned technology into an easy to use, hybrid mobile app that will be released for use.  This app can be used across either Kusama or custom Uke networks, whatever is deemed fit upon launch.  The app will encrypt messages on the client side, where the encrypted text will be stored within the Substrate node.

**Mockups and Design of PoC App**

*Keep in mind these are mockups, and are subject to change*

![](https://media.discordapp.net/attachments/922350668264652810/1019031136103579748/uke-collection2x.png?width=1180&height=1226)

### Ecosystem Fit

The eventual goal is to provide a streamlined way to for the following in the Substrate / Polkadot ecosystem:

1. Provide a common, and easy to use identity solution
2. Provide an out-of-the-box, flexible, and confidential messaging protocol which can be used for many different usecases.

The target audience here is our own user-base eventually, but also developers through opensourcing all work done here along with documentation on how one can also setup their own messaging using our tools.

Currently, there is no standard for how one can build a dapp quickly, and that does something common. This can serve as a baseline for how a dapp can function without the use of cryptocurrency or the like.

What makes us different:

1. No traditional backends are used here. Everything is purely based off of Substrate, as shown in the architecture diagram.

2. In our designs, the use of DLT/blockchain is not shown - this is intentional, as it allows users to merely experience a secure messaging experience without the cumbersome interface.

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

In his spare time, he also wrote many articles centered around using blockchain in practical and real world scenarios, which you may find here: <https://iodlt.com/iodlt-blog/>

He is also published on Hackernoon, with articles gaining some traction (plans to write more!): <https://hackernoon.com/u/crackTheCode>

If any more proof / material is needed, then it will be provided!

### Team Code Repos

The eventual code regarding uke will reside in the following repository:

- <https://github.com/Uke-Messaging>

- Bader Youssef - <https://github.com/CrackTheCode016>

### Team LinkedIn Profiles (if available)

- Bader Youssef - <https://www.linkedin.com/in/bader-youssef-975914159>

## Development Status

There is currently a WIP repo that is being constructed in parallel with this proposal, which will be shared as soon as possible.  To clarify:

- A working pallet is currently in place for sending and receiving messages.

- The front end is mostly implemented for the mobile app, along with a login / signup system using polkadotjs & the Keyring APIs.

- The initial architecture is all complete, with pallet development very active.

## Development Roadmap

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1 (one) for the duration of the project
- **Total Costs:** $9,000 USD

### Milestone 1 — Implement Uke Pallet for Basic Message Storage & Identity Functionality

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** $4,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how anyone can deploy the pallet in their own Substrate node, as well as properly run unit tests for the Uke pallet. |
| 0c. | Testing Guide | The pallet will be unit tested to the maximum with proper documentation and justification. |
| 0d. | Docker |We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Uke Pallet | Fully functioning pallet that allows for the transmission and storage of user conversations as well as a basic global identity mapping. |
| 1a. | Uke Pallet - Conversation Storage | Store conversations and messages in the Substrate node. |
| 1b. | Uke Pallet - Basic Identity Scheme | Store a mapping of user addresses to usernames for readability and easy user lookup. |

### Milestone 2 — Front-end completion, Substrate & polkadot.js integration into Ionic App

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** $4,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how anyone can build the Ionic project for iOS, Android, or web. |
| 0c. | Testing Guide | The front-end will contain a minimum of 50% unit test coverage, of which these will be covered in the guide. |
| 0d. | Docker |We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will write a full blog post on Hackernoon & Medium on how Uke was created, what powers it, and what exact work was completed on it (as well as future goals). |
| 1a. | Uke Ionic Application: Data Models | Create the appropriate data structures and models to represent users, accounts, and messages coming from a Substrate instance. |
| 1b. | Uke Ionic Application: Login and Signup Service | Usage of the `polkadot.js` SDK to create, store, and secure user account's locally.  Proper authentication guards will also be created for the Ionic application. |
| 1c. | Uke Ionic Application: Message Delivery & Configuration | Create the necessary services for messages to be retrieved, sent, and verified from a Substrate instance. |
| 1e. | Uke Ionic Application: In-App Notification System | A minimalistic notification system for notifying users of in-app events, such as received messages. |

## Future Plans

In the short term, I plan to begin marketing a beta program for this project in order to gain user feedback and viability. Based off of this, I will further the protocol as needed.  

Short Term Goals

- Gather initial feedback for the app
- Immediate planning to streamline the protocol
- Design `uke` SDK and developer docs for others to use
- Demonstrate uses of web3 beyond cryptocurrency

Longer Term Goals

- Develop separate Identity, Account Filter, & Messaging Pallets for common Substrate use.
- Implement a encrypted pub-sub protocol directly into the Substrate node.
- Develop client-side appropriate modules for business use
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

> I have applied once, and the [grant was terminated](https://github.com/w3f/Grant-Milestone-Delivery/pull/548) due to the code being too similar to another repo.  This has been recitifed, and I have embarked on creating a completely original pallet, with any engineering inspirations behind it being cited as needed.
