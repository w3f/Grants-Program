# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

## Project Overview :page_facing_up: 
> If this application in response to an RFP, then please indicate this on the first line of this section.

### Overview

Gluon Wallet is a Taas (Trust-as-a-Service) application that provides hardware crypto wallet services to crypto users. Our design goal an all-in-one private key manager to MultiSig-enabled blockchains. 
Features:
- Passwordless to users. Users won't take responsibility for backup mnemonic phrases.
- Social disaster recovery when a user lost all authentication devices.
- Private keys managed by Gluon over TEA network are randomly distributed and encrypted by hardware protected modules. No single point of failure.
- Tolerance of up to 1/3 nodes gets compromised without losing or leaking secret.
- Users only need to submit a transaction to Gluon. Gluon takes over the rest to sign and commit blockchain.
- Leverage popular biometric technologies in mobile devices to get better user experiences without compromise security.

Gluon itself is built into a WebAssembly module that is loaded and run inside the T-rust framework. They are both TEA projects. Gluon is an application (We call TeaLeaf), T-rust is a framework (We call TeaTree). T-rust contains layer1 and layer2. Layer1 is a blockchain that is powered by Substrate. Layer2 is a particularly designed mini OS, and a bunch of WebAssembly modules runs on wasm runtime powered by [WaSCC](wascc.dev). 
![relationship tea](https://cdn-images-1.medium.com/max/1120/1*2O7WDwTwH4DlIr4zbOMxng.png)


Gluon serves all Polkadot ecosystem dApps and other blockchains as an entry point (portal). Gluon is transparent to other client chains, so there is no integration needed. 

We design and develop Gluon because
- Lower the barrier to dApps' end users, improve their user experiences.
- Protect users' crypto assets.
- Demonstrate the potential of Substrate and TEA project.

>Please provide the following:
>  * A brief description of the project.
>  * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
>  * An indication of why your team is interested in creating this project.

### Project Details 

#### Unique features of Gluon

From a users point of view, Gluon works as if it is a hardware wallet with a few differences:
- Traditional hardware wallet is just one single hardware secure module (HSM), but Gluon is a group of thousands of HSM running consensus together to protect clients' assets. (Every TEA Mining Node is an HSM, which can be considered a hardware wallet)
No matter if it is BTC, ETH, or DOT, Users will not get the private key or mnemonic phrases after the address is created. 
- User need both a Polkadot extension and a Gluon mobile app to access his Gluon account sign.
- User can transfer authentication factor (such as upgrading mobile phone)
- If a user lost both his computer (web auth) and his phone, social recovery can still protect his crypto assets and recover all crypto assets to his new account.
- User only needs to submit a transaction, then Gluon will submit the signature to the client blockchain directly. The user doesn't need to submit the signed transaction to the blockchain manually. 

#### How private keys are protected by Gluon

By default, Gluon generates 2/3 MultiSig addresses for users. The three private keys are called P1, P2, and P3. P1 is stored in the user's mobile phone, while P2 and P3 are controlled by Gluon consensus. Gluon-controlled P2 and P3 are immediately split into pieces using Shamir Secure Sharing Schema right after generated. The split pieces are distributed to replicas of many TEA Nodes. TEA nodes are HSM (Hardware Secure Module). You can consider commonly used hardware wallets are special-purpose HSM but TEA nodes are general-purpose HSM that can do much more. The secret will never expose outside of hardware protected TEA node's RAM, nor saved to any storage media persistently. When the secret is used to sign a transaction from an authorized user, it will be reconstructed and sign inside a VRF selected TEA node under both hardware protection and remote attestations from a consensus called Proof of Trust (PoT). Due to the randomness, no one knows which TEA node stored which Shamir pieces of which secret. No one can protect which TEA node will be selected or is working on generating or rebuilding a secret. The randomness can be verified by other TEA nodes or substrate-runtime logic at both runtime and future audits. 

P2 and P3 are all controlled by Layer1 (a Substrate blockchain) runtime logic. Among them, P2 is associate with the user's 2FA. We use the Polkadot web extension for now. P3 is associate with user's social recovery accounts. P3 is only used to recover user assets when the user lost P1. (users only store P1 in their phone, so P1 is the only key that could be lost). That means the user can assign some friends as "social recovery accounts." If K of N accounts signs the "recovery transaction," P3 will be used along with P2 to transfer the user's assets to his new account.

P1 is stored in the user's Gluon mobile app. P1 will never be exposed to the outside of this phone even when upgrading to a new phone. However, Gluon doesn't require the user to take the responsibility to backup mnemonic phrases. When upgrading the phone, the Gluon app can transfer P1 securely to a new phone without exposing it to the network. If the user lost the phone, there is no way to restore P1 because there are no backup mnemonic phrases. But the user won't lose any assets because use P1 alone cannot move any assets. As mentioned above, Gluon can transfer all assets to his new account by running a social recovery process. 

![p1 p2 p3](https://miro.medium.com/max/770/1*ZiybeIlsdZsmZV6z0x1SAQ.png)

#### User experiences

From the end user's point of view, Gluon is a mobile app and a web extension. The end-user needs to install the Polkadot web extension on his browser to visit any dApp sites to generate transactions to be signed. He also needs to install a Gluon mobile app as a decentralized 2FA (not the traditional centralized 2FA). 

Users can go to the Gluonwallet.com website or any other compatible dApp to create a transaction. Web extension will generate a transaction like a QR code on the web page. Users use Gluon mobile app to scan this QR code, verify the transaction details then fingerprint-unlock the partial signing on the phone. Now users have completed their work. Once the phone sends the partial signature to the Gluon network, TEA nodes will reconstruct P2 using the Shamir algorithm to complete the 2nd partial signature. Once two partial signatures are complete, they are committed to the client blockchain to continue processing the transaction. 

#### Relationship between Gluon and T-rust

From miners' point of view, Gluon is a dApp that runs on top of the T-rust framework. When compiling the source code, a WebAssembly file "gluon.wasm" is generated. This wasm file is loaded to the miner's TEA node by adding Gluon.wasm file hash in his TEA node's manifest file. Miners can load this wasm module from IPFS directly without manually compile. Once "gluon.wasm" is loaded into TEA runtime, this TEA node becomes a TEA hardware wallet capability provider. 

Gluon.wasm handles crypto wallet related logic only. All other consensuses, security, network, hardware validation happens in the T-rust framework.

![relationship tea](https://cdn-images-1.medium.com/max/1120/1*2O7WDwTwH4DlIr4zbOMxng.png)

#### Gluon and T-rust's root of trust and PoT (Proof of Trust) consensus
T-rust is a layer2 trusted computing solution on top of a Substrate-based blockchain (layer1). Unlike most blockchain which root of trust comes from cryptography and consensus, T-rust introduced hardware root-of-trust as the 3rd dimension. Unlike most other blockchains that make consensus on the result, T-rust makes consensus on the proof of trust comes from hardware TPM chips. Using hardware RoT makes the consensus much efficient than many blockchains. T-rust can run complex or privacy-sensitive computations, which not likely possible in other blockchains. Distributed storage of private keys needs both privacy and complex computing. So Gluon is an ideal dApp running on top of T-rust. Both Gluon and T-rust are two TEA Projects.

![root of trust](https://cdn-images-1.medium.com/max/1120/1*5cLoCE4mLRw7hhDjcuaAxA.png)

#### How other blockchains or dApps integrate with Gluon

For other blockchains, there is nothing that needs to be done when integrating with Gluon. Gluon is transparent to other client blockchains. Gluon is virtually a client who commits the signed transaction and listen to block events. Gluon needs to run a few light clients as gateways to those client blockchains. 

#### UI mockups




#### Technology stack to be used

Gluon wasm module is pretty straightforward. It is written in RUST, build into the WebAssembly wasm module. 
On the other hand, T-rust is pretty complicated.

##### TEA's four pillars

![four pillars](https://github.com/tearust/tea-docs/raw/main/res/s8.jpg)
In general, TEA is based on four technologies: 
- Substrate: This is layer 1 of T-rust. It runs PoT consensus and the immutable storage of hashes from hardware chips. Blockchain is the source that the software root of trust comes from.
- IPFS: This is the file system and network layer of T-rust. All public code and data are stored in IPFS, but all secrets are kept inside TEA modules (the HSM).
- Trusted Computing: This is where the hardware root of trust comes from. We used the TPM chips inside the TEA module (HSM) as evidence of PoT.
- WebAssembly: All running executable code is in wasm format and runs inside of secure wasm runtime except our OS, runtime, and system providers. 

90% of the source code is written in Rust. 6% in JS, 4% in Golang. 

For more detail on the TEA project and T-rust framework, please go to teaproject.org.

#### Prior works and demo

Gluon is a dApp and a wasm module running on top of T-rust. We currently do not have the Gluon demo running (but it will be soon). We do have another demo app showing the capability of the T-rust framework.
This demo is a Tensorflow image recognization running on Substrate blockchain. 
Here is the video link

> Click to play the demo video
[![](https://github.com/tearust/tea-docs/raw/main/res/start-demo-video.jpg)](https://youtu.be/6GYwrITSfJo "")

There is another video introduction to the TEA project.

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

TEA Project starts in the year 2019. Most of the team members were ex-developers for Elastos blockchain. The idea originally came to the team leader Kevin Zhang 7 years ago when he was working as the CTO of iHealthLabs. Utilize patients' health data for scientific research yet prevent health data breach is always a big problem. He tried to solve this problem using blockchain but realized the existing blockchain technologies are far too slow to practical. Finally he decide to solve this problem by adding an additional root of trust beside existing blockchain cryptography + consensus. That is the hardware root of trust. TEA uses existing mature Trusted Computing technologies to turn commonly used computer into special mining machine to provide trusted computing service to client blockchains. Besides the existing Tensorflow demo app on TEA, making a practical crypto wallet can demonstrate how TEA can do better. So we start the Gluon Wallet. The longer version of the full story can be found on team leader Kevin Z's [Sweeping Monk Medium Blog] (https://pushbar.medium.com/0-of-n-cover-letter-of-the-trusted-webassembly-runtime-on-ipfs-12a4fd8c4338)

### Team Code Repos
* https://github.com/tearust
* https://github.com/tearust/gluon
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

Below we provide an **example roadmap**. In the descriptions, it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

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
* **Total Estimated Duration:** 3.5 months
* **Full-time equivalent (FTE):**  2.5 FTE
* **Total Costs:** 0.5 BTC

### Milestone 1 Example — Web app and mobile app pairing
* **Estimated Duration:** 4 Weeks
* **FTE:**  2.5 FTE
* **Costs:** 0.25 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Gluon Website and Web Portal Framework | The gluonwallet.com website. Homepage, documents, web app menu structure |
| 1 | Milestone1 feature list and test instruction | features: User can create Gluon account, pair Gluon mobile App to the web portal. |
| 2 | Test docker-compose | Tester can run TEA simulator to run locally to test completed features |
| 3 | Source code on GitHub | Anyone can download, build and run local testing environment |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 0.1 | Add faucet page | user can add free test token to account to start testing |
| 1.1 | User portal web page | Search user public profile by user Polkadot address. All information is open public from the blockchain. Users can see pairing mobile app id. This is the feature in milestone 1 |
| 1.2 | Pairing web UI | This is the web UI to start mobile app pairing |
| 2.0 | Mobile app framework | Gluon mobile app framework. We will add features one by one |
| 2.1 | Pairing mobile UI, scan QR code to start | After mobile app installed, Scan web pairing page to start pairing |
| 2.2 | Mobile user profile page | After pairing, showing user profile. The same as WebUI user profile content |
| 3.0 | Gluon substrate pellet: Pairing/Unpairing API | Add mobile app pub id to existing Gluon account. Pair the mobile to this user |
| 3.1 | Gluon substrate pellet: Search API | Search user public information |

### Milestone 2 - Generate BTC asset
* **Estimated Duration:** 4 Weeks
* **FTE:**  2.5 FTE
* **Costs:** 0.25 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Testable features | User can generate BTC address |
| 1 | Update test instruction | update with new features |
| 2 | Source code | |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 1.0 | Add a "generate BTC asset" page on web UI | user can trigger create new BTC address. Input (k,n) and other parameters |
| 1.1 | List user assets on web UI | When successful generated BTC address, it will show on web UI |
| 2.0 | Add a "generate BTC asset" page on mobile app | users scan the QR code on web UI. Review all tx parameters. Fingerprint unlock to commit tx to layer-1 blockchain |
| 2.1 | List user assets on mobile app | When successful generated BTC address, it will show mobile app |
| 2.2 | Mobile app | Generate P1 |
| 3.0 | Substrate pellet: Create "generate BTC asset" task | Layer 1 verify user auth, create a task in the blockchain so that layer-2 can handle |
| 4.0 | Gluon wasm module (TeaLeaf) | Select delegator and executor |
| 4.1 | Gluon TeaLeaf | Executor generate BTC address with 2/3 MultiSig. P2 and P3|
| 4.2 | Gluon TeaLeaf | Split and distribute P2 and P3 to replica (pinners) |
| 4.3 | Gluon TeaLeaf | Response to Layer 1 |
| 4.4 | Layer1 | Update user assets |

### Milestone 3 - Sign BTC transaction
* **Estimated Duration:** 4 Weeks
* **FTE** 2.5 FTE
* **Cost:** 0.25 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Testable features | user send BTC transfer transaction. Gluon sign the transaction and send to BTC |
| 1 | Update test instruction | update with new features |
| 2 | Source code | |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 1.0 | Gluon TeaLeaf | BTC SPV light node in layer2 to communicate with BTC chain |
| 2.0 | Web Portal | Create BTC transaction page |
| 3.0 | Mobile app | Scan, verify BTC transaction and send to layer 1 |
| 3.1 | Mobile app | Partial sign tx |
| 4.0 | Gluon TeaLeaf | Executor find pinners then reconstruct P2 |
| 4.1 | Gluon TeaLeaf | sign tx using P2. Send two signatures to SPV light node |
| 5.0 | Layer 1 | Settle payment distribution |
 
### Milestone 4 - Phone upgrading and social recovery
* **Estimated Duration:** 4 Weeks
* **FTE** 2.5 FTE
* **Cost:** 0.25 BTC

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

 Gluon is a full-featured demo application for the TEA project once the TEA project is ready. So far, there are a few limitations that we are working on.

 - TEA modules are running on a software simulator at this moment. In the final product, it only runs on HSM so that it can be protected by hardware. The simulators are only allowed running in the test chain, not in the production chain.
 - Besides BTC, we will support ETH and all Polkadot ecosystem chains
 - Gluon layer1 is now sharing the T-rust main chain. We will move Gluon's blockchain to a sidechain run parallel with T-rust's chain. T-rust chain runs parallel with Polkadot main chain. 
 - When XCMP is ready, we will use XCMP instead of our current WebSocket API.
 - Retire our facade interface service. Use off-chain workers instead.

Most items in this to-do list are part of the TEA Project plan. When TEA is ready, most of the features are completed too.

## Additional Information :heavy_plus_sign:

We started the TEA project in 2019 under the radar until recently released to the public. We believe the TEA project could be a large project and the backend services platform for a new type of dApps. These dApps can beyond the limit of traditional blockchain technologies. Gluon is just one demo app to test the water. Once we honor gets granted, we will start looking for investors and hire a CEO and more developers to join us. We hope to maintain a long term and close relationship with the Polkadot community. 
