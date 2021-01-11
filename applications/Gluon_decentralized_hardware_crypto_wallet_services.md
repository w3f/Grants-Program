# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** Gluon - Decentralized Hardware Crypto Wallet Services
* **Team Name:** TEA Project
* **Payment Address:** bc1qztagzeez5ke6s2z6tkac0smuv2fu74wz2ptc5f

> *The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
> If this application is in response to an RFP, please indicate this on the first line of this section.

### Overview

Leaking or losing private keys are the primary concerns of most blockchain users. Gluon uses a new approach to prevent such issues. 

Gluon is a TaaS (Trust-as-a-Service) application that provides hardware crypto wallet services to crypto users. Our main goal is to create an all-in-one private key manager for MultiSig-enabled blockchains. 

Features:
- Passwordless; users won't have to take responsibility for backup mnemonic phrases.
- Social disaster recovery is available for users who have lost all their authentication devices.
- Private keys managed by Gluon over the TEA network are randomly distributed and encrypted by TEA Nodes, which are hardware secure modules (HSM); it is a no-fail process.
- Tolerance of up to 1/3 compromised or failure nodes.
- Users only need to submit a transaction to Gluon and it will take over signing and committing blockchain.
- Leverages popular biometric technologies in mobile devices to attain better user experiences without compromising security.

Gluon itself is built into a WebAssembly module that is loaded and ran inside the T-rust framework (they are both TEA projects). Gluon is an application (we call TeaLeaf); T-rust is a framework (we call TeaTree). T-rust contains layer1 and layer2; Layer1 is a blockchain that is powered by Substrate while Layer2 is a particularly designed mini OS along with many WebAssembly modules that run on wasm runtime powered by [WaSCC](wascc.dev). 


Gluon serves all Polkadot ecosystem dApps and other blockchains as an entry point (portal); it is transparent to other client chains so there is no integration needed. 

We designed and developed Gluon in order to:
- Lower the barrier to dApps' end users; improve user experiences.
- Protect users' crypto assets.
- Demonstrate the potential of Substrate and TEA project.

>Please provide the following:
>  * A brief description of the project.
>  * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
>  * An indication of why your team is interested in creating this project.

### Project Details 

#### Unique features of Gluon

From a users point of view, Gluon works just like a hardware wallet, but with a few differences:
- A traditional hardware wallet is just one single hardware secure module (HSM), but Gluon is a group of thousands of HSM running consensus together to protect clients' assets. (Every TEA Mining Node is an HSM which can be considered as a hardware wallet)
Regardless of if it is BTC, ETH, or DOT, users will not be able to get the private key or mnemonic phrases until after the address is created. 
- Users need both a Polkadot extension and a Gluon mobile app to access their Gluon account.
- Users have the ability to transfer authentication factors from one device to another.
- If users lose both their computer (web auth) and phone, social recovery can still protect and recover their crypto assets to their new accounts. 
- Users only need to submit a transaction; Gluon will submit the signature to the client blockchain directly so that manual work is not needed.

#### How private keys are protected by Gluon

By default, Gluon generates 2/3 MultiSig addresses for users. The three private keys (secret) are called P1, P2, and P3. P1 is stored in the users' mobile phone, while P2 and P3 are controlled by Gluon consensuses. They are immediately split into pieces using [Shamir Secure Sharing Schema](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing) right after generation. The split pieces are distributed to replicas of many TEA Nodes. TEA nodes are HSM (Hardware Secure Module). One can consider commonly used hardware wallets as special-purpose HSM, but TEA nodes are a general-purpose HSM that can do much more. The secret will never be exposed outside of hardware-protected TEA node's RAM, nor saved to any storage medias persistently. When the secret is used to sign a transaction from authorized users, it will be reconstructed and signs transactions inside a VRF selected TEA node under both hardware protection and remote attestations from a consensus called Proof of Trust (PoT). Due to the randomness, no one will ever know which TEA node stores which Shamir pieces of which secret. No one can predict which TEA node will be selected or is working on generating or rebuilding the secret. The randomness can be verified by other TEA nodes or substrate-runtime logic at both runtime and future audits. 

P2 and P3 are all controlled by Layer1 (a Substrate blockchain) runtime logic. Among them, P2 is associated with the users' 2FA. We are using the Polkadot web extension at the moment. P3 is associated with a users' social recovery account but is only used to recover assets when users lose P1. (Users can only store P1 on their phones, so P1 is the only key that could be lost). This means users can assign friends as "social recovery accounts." If K of N accounts sign the "recovery transaction," P3 will be used along with P2 to transfer user assets to their new account.

P1 is stored in the users' Gluon mobile app. P1 will never be exposed beyond the phone even when upgrading devices. However, Gluon doesn't require users to take responsibility to backup mnemonic phrases. When upgrading to a new phone, the Gluon app can transfer P1 securely to the new device without exposing it to the network. If users lose their phones, there is no way to restore P1 because there are no backup mnemonic phrases. Losing or the leak of P1 does not lead to a loss of assets, as one can use P2+P3 for recovery and bad actors would need two keys to access assets in the case of a leak. As mentioned above, Gluon can transfer all assets to one's new account by running a social recovery process. 

![p1 p2 p3](https://miro.medium.com/max/770/1*ZiybeIlsdZsmZV6z0x1SAQ.png)

#### User experiences

From the end user's point of view, Gluon is a mobile app and a web extension. The end-user needs to install the Polkadot web extension on their browser to visit any dApp sites to generate transactions to be signed. They also will need to install a Gluon mobile app as a decentralized 2FA (not the traditional centralized 2FA). 

Users can go to the Gluonwallet.com website or any other compatible dApp to create a transaction. The web extension will generate a transaction like a QR code on the web page. Users will use the Gluon mobile app to scan this QR code, verify the transaction details, then fingerprint-unlock the partial signing on the phone. Once the phone sends the partial signature to the Gluon network, TEA nodes will reconstruct P2 using the Shamir algorithm to complete the 2nd partial signature. Once two partial signatures are complete, they are committed to the client blockchain in order to continue processing the transaction. 

#### Relationship between Gluon and T-rust

From the miners' point of view, Gluon is a dApp that runs on top of the T-rust framework. When compiling the source code, a WebAssembly file "gluon.wasm" is generated. This wasm file is loaded to the miner's TEA node by adding Gluon.wasm file hash to their TEA nodes' manifest file. Miners can load this wasm module from IPFS directly. Once "gluon.wasm" is loaded into TEA runtime, this TEA node becomes a TEA hardware wallet capability provider. 

Gluon.wasm only handles crypto wallet related logic. All other consensuses, security, network, and hardware validation happens in the T-rust framework.

![relationship tea](https://cdn-images-1.medium.com/max/1120/1*2O7WDwTwH4DlIr4zbOMxng.png)

#### Gluon and T-rust's root of trust and PoT (Proof of Trust) consensus
T-rust is a layer2 trusted computing solution on top of a Substrate-based blockchain (layer1). Unlike most blockchain, whose root-of-trust comes from cryptography and consensus, T-rust introduces hardware root-of-trust as the third dimension. Unlike most other blockchains that make consensus on the result, T-rust makes consensus on the proof of trust that comes from hardware TPM chips. Using hardware RoT makes the consensus much more efficient than many blockchains. T-rust can run complex or privacy-sensitive computations, which are not likely possible in other blockchains. Distributed storage of private keys needs both privacy and complex computing, so Gluon is an ideal dApp running on top of T-rust. Gluon and T-rust are two TEA Projects.

![root of trust](https://cdn-images-1.medium.com/max/1120/1*5cLoCE4mLRw7hhDjcuaAxA.png)

#### How other blockchains or dApps integrate with Gluon

For other blockchains, there is nothing that needs to be done when integrating with Gluon; Gluon is transparent to other client blockchains. Gluon is virtually a client who commits the signed transaction and listens to block events. Gluon needs to run a few light clients as gateways to these client blockchains.

For other dApps, integrating with Gluon is as sample as adding one js API. This js API does three things:
- Gathering input transaction details and show in a QR code.
- Sending the hash of transaction and client_id in a TEA transaction to the TEA blockchain. 
- Listen to the events from the TEA blockchain. 

#### UI mockups

![typical workflow](https://github.com/tearust/gluon-docs/blob/master/res/typical-workflow.png?raw=true)

The diagram above shows a typical UI workflow, which is signing a DOT transaction. 

Users start a task from the web browser. It could be the Gluon web portal or any dApps' website embedded with our js API. A hash of the transaction detail is sent to Gluon TeaLeaf. A QR code is shown on the web page for the paired Gluon mobile app to scan. 

After scanning the QR code, the Gluon mobile app shows the transaction's detail for users to confirm visually. Users approve this transaction by fingerprinting. If there is an additional 2FA (MFA) applied, the passcode should then be entered. 

Gluon mobile app partially signs the transaction using P1. Both the signature and transaction details are sent to Gluon TeaLeaf to continue.

Gluon TeaLeaf takes over the rest of the task by reconstructing P2 and signing. Finally, Gluon TeaLeaf sends the signature by P1 and P2 to Bitcoin light node to complete the transaction. 

Both the web UI and the mobile app will receive the event of a completed task.

All other tasks are pretty much the same workflow.

#### Technology stack to be used

T-rust is a bit more complicated.

##### TEA's four pillars

![four pillars](https://github.com/tearust/tea-docs/raw/main/res/s8.jpg)
In general, TEA is based off of four technologies: 
- Substrate: This is layer 1 of T-rust. The blockchain runs consensus on Proof-of-Trust, and immutably stores, processes, and verifies PoT (the hashes from the hardware chips).
- IPFS: This is the file system and network layer of T-rust. All public code and data are stored in IPFS but all secrets are kept inside TEA modules (the HSM).
- Trusted Computing: This is where the hardware root of trust comes from. We use the TPM chips inside the TEA module (HSM) to generate Proof of Trust.
- WebAssembly: All running executable code is in wasm format and runs inside of secure wasm runtime except for our OS, runtime, and system providers. 

90% of the source code is written in Rust. The other 6% is written in JS, and the remaining 4% in Golang. 

For more detail on the TEA project and T-rust framework, you may visit teaproject.org.

#### Prior works and demo

Gluon is a dApp and a wasm module running on top of T-rust. We currently do not have the Gluon demo running (but it will be available soon). We do have another demo app showing the capability of the T-rust framework.
This demo is a Tensorflow image recognization running on Substrate blockchain. 
Here is the video link:

> Click to play the demo video
[![](https://github.com/tearust/tea-docs/raw/main/res/start-demo-video.jpg)](https://youtu.be/6GYwrITSfJo "")

Here's another video introduction to the TEA project:

> Click to play the introduction video
[![](https://github.com/tearust/tea-docs/raw/main/res/blog/WX20201215-115720@2x.png)](http://www.youtube.com/watch?v=-NgR3ySWwXg "")

> Therefore, we ask the teams to submit (where relevant):
> * Mockups/designs of any UI components
> * API specifications of the core functionality
> * An overview of the technology stack to be used
> * Documentation of core components, protocols, architecture, etc. to be deployed
> * PoC/MVP or other relevant prior work or research on the topic


### Ecosystem Fit 
Are there any other projects similar to yours? If so, how is your project different?

There are many existing crypto wallets in the market. They either store the private keys on client devices (phone, hardware wallet) or centralized servers. There are quite a few wallets in Web3 applications. For example: [bdwallet](https://github.com/tearust/Open-Grants-Program/blob/master/applications/bdwallet.md), or [subwallet](https://github.com/tearust/Open-Grants-Program/blob/master/applications/subwallet.md)

Gluon has a very decentralized approach. We do not store the original keys anywhere. Instead, we use the TEA project's decentralized trusted computing infrastructure to scramble, store, reconstruct private keys. This approach prevents users from losing or leaking their keys. 

A few crypto wallets outside of the Polkadot ecosystem are a little bit similar to ours.

[ZenGo](https://zengo.com/security/) provides "passwordless" but still require centralized servers to store encrypted secrets. We do everything decentralized.

[Recovery pellets](https://github.com/paritytech/substrate/tree/master/frame/recovery) is not a wallet but a Substrate pellet with the social recovery idea. We did not know it until we search for a similar project just now. 

[Ledger](https://www.ledger.com/) or [Trezor](https://trezor.io/) are hardware wallets. We do not sell hardware wallet units to end-users. We provide Trust-as-a-Service instead.

## Team :busts_in_silhouette:

### Team members
* Name of the team leader: Kevin Zhang
* Names of team members: 
- William Zhang
- Jacky Li
- Raindust Yan
- Zehua Jiang
- Lex Pablo

### Contact
* **Contact Name:** Kevin G. Zhang  
* **Contact Email:** kevin.zhang.canada@gmail.com
* **Web site:** teaproject.org  gluonwallet.com

### Legal Structure 
* **Registered Address:** 4006 Hastings Park Ct, San Jose, CA 95136 U.S.A.
* **Registered Legal Entity:** Elk Insight LLC.

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

The TEA-Project started in the year 2019. The idea originally came to the team leader, Kevin Zhang, seven years ago when he was working as the CTO of iHealthLabs. Utilizing patients' health data for scientific research while preventing health data breaches has always been a prominent problem. He initially tried to solve the dilemma using blockchain, but realized that the existing blockchain technologies were far too slow to be practical. He then decided to add an additional root of trust alongside existing blockchain cryptography + consensus. This is the hardware root of trust. TEA uses existing mature Trusted Computing technologies to provide secure computing services to client blockchains, without requiring specialised CPU features such as Phala's (TEE) Intel SGX CPU or Bitcoin's ASIC CPU. Besides the existing Tensorflow demo app on TEA, making a practical crypto wallet can demonstrate how TEA can do better, so they started the Gluon. The full story of the project can be found here: [Sweeping Monk Medium Blog] (https://pushbar.medium.com/0-of-n-cover-letter-of-the-trusted-webassembly-runtime-on-ipfs-12a4fd8c4338)

### Team Code Repos
* https://github.com/tearust/Gluon_Actor
* https://github.com/tearust/Gluon_Pellet
* https://github.com/tearust/gluon-docs
* https://github.com/tearust/tea-docs

### Team LinkedIn Profiles
* https://www.linkedin.com/in/kevingzhang/
* https://www.linkedin.com/in/zhijun/
* https://www.linkedin.com/in/jacky-li-4039747b/
* https://www.linkedin.com/in/mingzhi-yan-7544b9203/
* https://www.linkedin.com/in/zehua-jiang-7494a8203/
* https://www.linkedin.com/in/lex-pablo-a638941ba/

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below, we provided an **example roadmap**. In the descriptions, it should be clear how the project is related to Substrate and/or Polkadot. We recommend to fit the scope of the work within a 3 month period and for teams to structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as a number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.
* Deliverables 0a-0d are mandatory and should not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research-oriented and as such there is no code to test)

### Overview
* **Total Estimated Duration:** 4 months
* **Full-time equivalent (FTE):**  2.5 FTE
* **Total Costs:** 0.7 BTC

### Milestone 1 Example — Web app and mobile app pairing
* **Estimated Duration:** 4 Weeks
* **FTE:**  2.5 FTE
* **Costs:** 0.125 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Gluon Website and Web Portal Framework | The gluonwallet.com website; homepage, documents, and web app menu structure |
| 1 | Milestone1 feature list and test instruction | features: Users can create Gluon accounts and pair the Gluon mobile App with the web portal. |
| 2 | Test docker-compose | Testers can run TEA simulator to run locally in order to test completed features |
| 3 | Source code on GitHub | Anyone can download, build, and run local testing environments |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 0.1 | Add faucet page | users can add free test tokens to accounts to start testing |
| 1.1 | User portal web page | Search user public profiles by users' Polkadot address. All information is open public from the blockchain. Users can see pairing mobile app id. This is the feature in milestone 1 |
| 1.2 | Pairing web UI | This is the web UI to start mobile app pairing |
| 2.0 | Mobile app framework | Gluon mobile app framework. We will add features one by one |
| 2.1 | Pairing mobile UI, scan QR code to start | After the mobile app is installed, scan web pairing page to start pairing |
| 2.2 | Mobile user profile page | After pairing, show user profile. This is the same as the WebUI user profile content |
| 3.0 | Gluon substrate pellet: Pairing/Unpairing API | Add mobile app pub id to existing Gluon account. Pair the mobile to this user |
| 3.1 | Gluon substrate pellet: Search API | Search user public information |

### Milestone 2 - Generate DOT asset
* **Estimated Duration:** 4 Weeks
* **FTE:**  2.5 FTE
* **Costs:** 0.125 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Testable features | User can generate DOT addresses |
| 1 | Update test instruction | update with new features |
| 2 | Source code | |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 1.0 | Add a "generate DOT asset" page on web UI | user can trigger create new DOT address. Input (k,n) and other parameters |
| 1.1 | List user assets on web UI | When successful generated DOT address, it will show on web UI |
| 2.0 | Add a "generate DOT asset" page on mobile app | users scan the QR code on web UI. Review all tx parameters. Fingerprint unlock to commit tx to layer-1 blockchain |
| 2.1 | List user assets on mobile app | When successful generated DOT address, it will show mobile app |
| 2.2 | Mobile app | Generate P1 |
| 3.0 | Substrate pellet: Create "generate DOT asset" task | Layer 1 verify user auth, create a task in the blockchain so that layer-2 can handle |
| 4.0 | Gluon wasm module (TeaLeaf) | Select delegator and executor |
| 4.1 | Gluon TeaLeaf | Executor generate DOT address with 2/3 MultiSig. P2 and P3|
| 4.2 | Gluon TeaLeaf | Split and distribute P2 and P3 to replica (pinners) |
| 4.3 | Gluon TeaLeaf | Response to Layer 1 |
| 4.4 | Layer1 | Update user assets |

### Milestone 3 - Sign DOT transaction
* **Estimated Duration:** 4 Weeks
* **FTE** 2.5 FTE
* **Cost:** 0.225 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Testable features | user send DOT transfer transaction. Gluon sign the transaction and send to DOT |
| 1 | Update test instruction | update with new features |
| 2 | Source code | |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 1.0 | Gluon TeaLeaf | DOT SPV light node in layer2 to communicate with DOT chain |
| 2.0 | Web Portal | Create DOT transaction page |
| 3.0 | Mobile app | Scan, verify DOT transaction and send to layer 1 |
| 3.1 | Mobile app | Partial sign tx using P1. Send the P1 signature to DOT light node|
| 4.0 | Gluon TeaLeaf | Executor find pinners then reconstruct P2 |
| 4.1 | Gluon TeaLeaf | Sign tx using P2. Send the P2 signatures to DOT light node |
| 4.2 | Gluon TeaLeaf | DOT light node send signature and transaction to DOT main chain |
| 5.0 | Layer 1 | Settle payment distribution |
 
### Milestone 4 - Phone upgrading and social recovery
* **Estimated Duration:** 4 Weeks
* **FTE** 2.5 FTE
* **Cost:** 0.225 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Testable features | User upgrade new phone and transfer P1 from old phone to new phone. Use social recovery to keep assets and transfer to a new account in case of lost web and mobile app |
| 1 | Update test instruction | update with new features |
| 2 | Source code | |
| 3 | Video tutorial | Full user's manual |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 1.0 | layer1 | Add social recovery API |
| 2.0 | Web Portal | Create social recovery page |
| 3.0 | Mobile app | Social recovery if initiated from phone |
| 3.1 | Mobile app | Scan QR code to confirm friends recovery request |
| 4.0 | Gluon TeaLeaf | Suspend old P2 P3 |
| 4.1 | Layer1 | Suspend old account activity during the recovering process |
| 4.2 | Gluon TeaLeaf | Generate a new account to accept assets |
| 5.0 | Layer1 | Verify all social recovery confirmation, transfer assets to new account |
 
## Future Plans

 Gluon will be a full-featured demo application for the TEA project once it is ready. So far, there are a few limitations that we are working on.

 - TEA modules are running on a software simulator at the moment. In the final product, it will only run on HSM so that it can be protected by hardware. The simulators are only allowed to be running in the test chain, not in the production chain.
 - Besides DOT, we will all Polkadot ecosystem chains.
 - Gluon layer1 is currently sharing the T-rust main chain. We will move Gluon's pallet to a sidechain run parallel to T-rust's chain. T-rust's chain runs parallel to Polkadot's main chain. 
 - We wll retire our facade interface service and use off-chain workers instead.
 - Shamir Secret Sharing Schema has [Shortcomings](https://blog.keys.casa/shamirs-secret-sharing-security-shortcomings/). We have used randomness and hardware protection to minimized the impact. However, we never stop exploring the possibilities; we've done some research on existing SMPC and FHE algorithms such as BLS Signature Schema, but none of them are practical at the moment. We are looking forward to new higher performance algorithms to remove the need to reconstruct the secret for signing.

Most items in this to-do list are part of the TEA Project plan. When TEA is ready, most of the features will be available too.

## Additional Information :heavy_plus_sign:

We started the TEA project in 2019. It has been under the radar until recently, when it was released to the public. We believe the TEA project could grow large and become the backend service platform for new type of dApps. These dApps can go beyond the limit of traditional blockchain technologies. Gluon is just one of the many possible demo apps. Once our honor gets granted, we will start looking for investors and hire a CEO along with more developers to join us. We hope to maintain a long term and close relationship with the Polkadot community. 
