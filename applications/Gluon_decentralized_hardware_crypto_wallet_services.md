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

Gluon is a TaaS (Trust-as-a-Service) application that provides hardware crypto wallet services to crypto users. Our main goal is to create an all-in-one private key manager for Polkadot ecosystem blockchains. 

Features:
- Passwordless. Users won't have to take responsibility for backup mnemonic phrases. Social recovery is available for users who have lost all their authentication devices.
- Gluon manages Schnorr Multisig Keys that are randomly distributed and encrypted by hardware-secure-modules (HSM). We call them TEA nodes.
- Users only need to submit a transaction to Gluon, and it will take over the signing and committing to blockchains.
- Leverages popular biometric technologies in mobile devices to attain better user experiences without compromising security.

Gluon is built into a WebAssembly module loaded and ran inside the T-rust framework (they are both TEA projects). Gluon is an application (we call TeaLeaf); T-rust is a framework (TeaTree). T-rust contains layer1 and layer2; Layer1 is a blockchain built using Substrate, while Layer2 is an exceptionally designed mini OS along with WebAssembly modules that run on wasm runtime powered by [WaSCC](https://wascc.dev). Gluon also contains layer1 and layer2. Layer1 is a Substrate pellet running inside Tea Layer1 blockchain, and layer2 is a set of WebAssembly actors running in every TEA node's TeaRuntime. 

Gluon serves all Polkadot ecosystem dApps and other blockchains as an entry point (portal); it is transparent to other client chains. There is no integration needed. 

We designed and developed Gluon to:
- Lower the barrier to blockchain end-users; improve user experiences.
- Protect users' crypto assets.
- Demonstrate the potential of the Substrate framework and TEA project.

>Please provide the following:
>  * A brief description of the project.
>  * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
>  * An indication of why your team is interested in creating this project.

### Project Details 

#### Unique features of Gluon

From a users point of view, Gluon works just like a hardware wallet, but with a few differences:
- A traditional hardware wallet is just one single hardware secure module (HSM), but Gluon is a group of potentially thousands of HSM running consensus together to protect clients' assets. (Every TEA Mining Node is an HSM which can be considered as a hardware wallet)
- Users need both a Polkadot extension and a Gluon mobile app to access their Gluon account as 2FA. 
- Users can transfer authentication factors from one device to another without backing up and restoring mnemonic phases.
- If users lose both their computer (web auth) and phone (mobile auth), social recovery can still protect and recover their new accounts' crypto assets. 
- Users only need to submit a transaction then Gluon will submit the signature to the client blockchain without further user interaction.

#### Key distribution and protection

![p1 p2 p3](https://raw.githubusercontent.com/tearust/gluon-docs/d5526500c3a27deaa36fc0c0e4a2f2b8e18b1c60/res/Gluonwallet_p123.svg)

Gluon generates Polkadot accounts for users using the 2-out-of-3 Schnorr Threshold Multsig Algorithm implemented by Schnorrkel. The account public key is aggregated from the 3 key pairs while the private keys are kept by 3 individual parties. They are called P1, P2, and P3.

Among them, P1 is a single sign key stored in the users' mobile phones. Both P2 and P3 are Schnorr multisig keys. Gluon owns P2 for additional security policy control, while Guardians (assigned by the User) owns P3. 

P2 is a Schnorr threshold multisig key, which means instead of a single signer, a group of signers control P2. For example, we call them key-pieces such as P2-1, P2-2, P2-3, and so on. They are separately generated and stored by different TEA nodes. Multiple TEA nodes distribute the private key of each signer as the replica. We do not allow a single TEA node to hold more than one key piece of any P2 to prevent any TEA node has enough key-pieces to reach the multisig threshold. This policy also guarantees better distribution of key-pieces over TEA nodes. The signature algorithm is implemented by Schnorrkel too.

P3 is also a Schnorr threshold multisig key but each key-pieces owned by different guardians. Users need to assign their friends or legal entities as guardians. K of n guardians could sign the social recovery transaction to restore a user's account if it lost its P1. This process is called [Social Recovery](https://www.parity.io/social-recovery-on-substrate/). 

P1 is stored in the users' Gluon mobile app. P1 will never be exposed beyond the phone, even when upgrading devices. However, Gluon doesn't require users to take responsibility to backup mnemonic phrases. When upgrading to a new phone, the Gluon app can transfer P1 securely to the new device without exposing it to the network. If users lose their phones, there is no way to restore P1 because there are no backup mnemonic phrases. Lost or being hacked of P1 does not lead to a loss of assets, as one can use P2+P3 for recovery, and bad actors would need two keys to access crypto assets in the case of a leak. As mentioned above, Gluon can transfer all assets to one's new account by running a social recovery process. 

#### Hardware Secure Module

TEA nodes are HSM (Hardware Secure Module). One can consider commonly used hardware wallets as special-purpose HSM, but TEA nodes are a general-purpose HSM that can do much more. The secret will never be exposed outside of hardware-protected TEA node's RAM nor saved to any storage media persistently. When transferring secrets between TEA nodes (for example, distributing replica), every TEA nodes will run Remote Attestation before an end to end encryption and send. When using P2 co-signing a transaction, the TEA Node will query the layer1 blockchain to verify the signing conditions first and then sign the transaction inside HSM. No secret leaves the HSM except the digital signature. Each co-signer sign using its holding key-piece to a signature-piece. These signature-pieces get aggregated in layer-1 blockchain to become a single signature. As long as the number of co-signers reaches the threshold, this signature can pass verification by Polkadot. 

#### Access control logic

Polkadot allows unlocking User's DOT based on 2 of 3 mutisig from P1 P2 and P3. Gluon has no control over P1 (owned by the User) and P3 (owned by the User's friend - guardians). If a user no longer trusts Gluon, it can ask its guardians to sign P3 along with its P1, and the User still has full control over its assets. If a user lost its P1, it could create a new P1 then recover its assets by running the social recovery process by P2 and P3. If a user wants to update its guardians' list, it can create a new P3 since P1 and P2 are available. 

P1 is stored in users' mobile apps. Gluon mobile app uses general mobile security protections to protect P1. Such as Biometric ID, Symmetric encryption (6 digits user input passcode), Hardware security chip for some particular model when available. P1 along won't be more secure than other modern crypto wallet mobile apps. That's why we have additional P2 and P3 to protect the User's crypto assets.

P2 is the only key owned by Gluon. When a user requests to sign a transaction, each TEA node that holds a key-piece will run authentication logic separately. The authentication logic includes 

- Verifying web and mobile 2FA. The User has to submit a signing request using both the Polkadot browser extension and Gluon mobile app. 
- For spending transactions, verify the daily limit or other constraints set by the User in layer1. For example, when the User claims loss of P1 and sets its assets in the Social Recovery frozen period, Gluon will suspend the request. 
- For social recovery transactions, verify the guardians' signature follow the predefined logic. For example, suppose a user lost both their computer and mobile phone (all 2FA). In that case, additional requirements apply to social recovery processes such as time window, sequence, or geolocation to mitigate phishing attacks.  

Given such logic run on the Gluon Pellet (on-chain) and Gluon Wasm Actors (off-chain), in the future, we can easily add more complex logic without on-chain limitations. 

P3 is only used for Social Recovery. Because of Schnorr Mutisig Algorithm, the guardians' list never exposes in the clear on the blockchain. Even the guardians themself won't know they are selected guardians or know other guardians in the same group. There is little chance for guardians to collude and sign P3 without the User's permission. 

#### User experiences

From the end user's point of view, Gluon is a mobile app and a web extension. The end-user needs to install the Polkadot web extension on their browser to visit any dApp sites to generate transactions to be signed. They also will need to install a Gluon mobile app as a decentralized 2FA (not the traditional centralized 2FA). 

Users can go to the Gluonwallet.com website or any other compatible dApp to create a transaction. The web extension will generate a transaction like a QR code on the web page. Users will use the Gluon mobile app to scan this QR code, verify the transaction details, then fingerprint-unlock the partial signing on the phone. Once the phone sends the partial signature to the Gluon network, TEA nodes will multisign the same tx using P2. Once two partial signatures are complete, they are aggregated and committed to the client blockchain to continue processing the transaction. 

#### Relationship between Gluon and T-rust

From the miners' point of view, Gluon is a dApp that runs on top of the T-rust framework. When compiling the source code, a WebAssembly file "gluon.wasm" is generated. This wasm file is loaded to the miner's TEA node by adding Gluon.wasm file hash to their TEA nodes' manifest file. Miners can load this wasm module from IPFS directly. Once "gluon.wasm" is loaded into TEA runtime, this TEA node becomes a TEA hardware wallet capability provider. 

Gluon.wasm only handles crypto wallet related logic. All other consensuses, security, network, and hardware validation happens in the T-rust framework.

![relationship tea](https://cdn-images-1.medium.com/max/1120/1*2O7WDwTwH4DlIr4zbOMxng.png)

#### Gluon and T-rust's root of trust and PoT (Proof of Trust) consensus
T-rust is a layer2 trusted computing solution on top of a Substrate-based blockchain (layer1). Unlike most blockchain, whose root-of-trust comes from cryptography and consensus, T-rust introduces hardware root-of-trust as the third dimension. Unlike most other blockchains that make consensus on the result, T-rust makes consensus on the proof of trust that comes from hardware TPM chips. Using hardware RoT makes the consensus much more efficient than many blockchains. T-rust can run complex or privacy-sensitive computations, which are not likely possible in other blockchains. Distributed storage of private keys needs both privacy and complex computing, so Gluon is an ideal dApp running on top of T-rust. Gluon and T-rust are two TEA Projects.

![root of trust](https://cdn-images-1.medium.com/max/1120/1*5cLoCE4mLRw7hhDjcuaAxA.png)

#### How other blockchains or dApps integrate with Gluon

There is nothing that needs to be done for other blockchains when integrating with Gluon as long as the client blockchain supports Schnorr Multisig.  Gluon is transparent to other client blockchains. Gluon is virtually a client who commits the signed transaction and listens to block events. Polkadot will support off-line Schnorr Multisig very soon.

For other dApps, integrating with Gluon is as simple as adding one js API. This js API does three things:
- Gathering input transaction details and show in a QR code. Prompt the User to scan this QR code using Gluon mobile app. 
- Sending the hash of transaction and client_id in a TEA transaction to the TEA blockchain. 


#### UI mockups

![typical workflow](https://github.com/tearust/gluon-docs/blob/master/res/typical-workflow.png?raw=true)

The diagram above shows a typical UI workflow, which is signing a DOT spending transaction. 

Users start a task from the web browser. It could be the Gluon web portal or any dApps' website embedded with our js API. A hash of the transaction detail is sent to Gluon TeaLeaf. A QR code is shown on the web page for the paired Gluon mobile app to scan. 

After scanning the QR code, the Gluon mobile app shows the transaction's detail for users to confirm visually. Users approve this transaction by fingerprinting and six digits wallet passcode.

Gluon mobile app partially signs the transaction using P1. Both the signature and transaction details are sent to Gluon TeaLeaf to continue.

Gluon TeaLeaf takes over the rest of the task by verifying and signing using P2. Finally, Gluon TeaLeaf sends the signature by P1 and P2 to Polkadot to complete the transaction. 

The User will receive the confirmation event of a completed task.

All other tasks are pretty much the same workflow.

#### Technology stack to be used

T-rust is a bit more complicated.

##### TEA's four pillars

![four pillars](https://github.com/tearust/tea-docs/raw/main/res/s8.jpg)
In general, TEA is based on four technologies: 
- Substrate: This is layer 1 of T-rust. The blockchain runs consensus on Proof-of-Trust, and immutably stores, processes, and verifies PoT (the hashes from the hardware chips).
- IPFS: This is the file system and network layer of T-rust. All public code and data are stored in IPFS, but all secrets are kept inside TEA modules (the HSM).
- Trusted Computing: This is where the hardware root of trust comes from. We use the TPM chips inside the TEA module (HSM) to generate Proof of Trust.
- WebAssembly: All running executable code is in wasm format and runs inside secure wasm runtime except for our OS, runtime, and system providers. 

90% of the source code is written in Rust. The other 6% is written in JS and the remaining 4% in Golang. 

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

Gluon has a very decentralized approach. We do not store the original keys anywhere. Instead, we use the TEA project's decentralized trusted computing infrastructure to scramble, store, and multisign. This approach prevents users from losing or leaking their keys. 

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

The TEA-Project started in the year 2019. The idea originally came to the team leader, Kevin Zhang, seven years ago when working as the CTO of iHealthLabs. Utilizing patients' health data for scientific research while preventing health data breaches has always been a major problem. He initially tried to solve the dilemma using blockchain but realized that the existing blockchain technologies were far too slow to be practical. He then decided to add the root of trust alongside existing blockchain cryptography + consensus. This is the hardware root of trust. TEA uses existing mature Trusted Computing technologies to provide secure computing services to client blockchains without requiring specialized CPU features such as Phala's (TEE) Intel SGX CPU or Bitcoin's ASIC CPU. Besides the Tensorflow demo app on TEA, making a practical crypto wallet can demonstrate how TEA can do better, so they started the Gluon. The full story of the project can be found here: [Sweeping Monk Medium Blog] (https://pushbar.medium.com/0-of-n-cover-letter-of-the-trusted-webassembly-runtime-on-ipfs-12a4fd8c4338)

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

> This section should break out the development roadmap into several milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below, we provided an **example roadmap**. In the descriptions, it should be clear how the project is related to Substrate and/or Polkadot. We recommend to fit the scope of the work within a 3 month period and for teams to structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include the total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as a number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.
* Deliverables 0a-0d are mandatory and should not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research-oriented and as such there is no code to test)

### Overview
* **Total Estimated Duration:** 5 months
* **Full-time equivalent (FTE):**  2.5 FTE
* **Total Costs:** 28k USD

### Milestone 1 Example — Web app and mobile app pairing
* **Estimated Duration:** 4 Weeks
* **FTE:**  2.5 FTE
* **Costs:** 5.6k USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Gluon Website and Web Portal Framework | The gluonwallet.com website; homepage, documents, and web app menu structure |
| 1 | Milestone1 feature list and test instruction | features: Users can create Gluon accounts and pair the Gluon mobile App with the web portal. |
| 2 | Test docker-compose | Testers can run TEA simulator to run locally to test completed features |
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

### Milestone 2 - Phone upgrading and social recovery
* **Estimated Duration:** 4 Weeks
* **FTE** 2.5 FTE
* **Cost:** 5.6k USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Testable features | User upgrade new phone and transfer P1 from old phone to new phone. Use social recovery to keep assets and transfer to a new account in case of lost web and mobile app |
| 1 | Update test instruction | update with new features |
| 2 | Source code | |
| 3 | Video tutorial | Full User's manual |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 1.0 | layer1 | Add social recovery API |
| 2.0 | Web Portal | Create social recovery page |
| 3.0 | Mobile app | Social recovery if initiated from phone |
| 3.1 | Mobile app | Scan QR code to confirm friends recovery request |
| 4.1 | Layer1 | Suspend old account activity during the recovering process |
| 4.2 | Gluon TeaLeaf | Generate a new account to accept assets |
| 5.0 | Layer1 | Verify all social recovery confirmation, transfer assets to new account |
 
### Milestone 3 - Generate DOT asset on test net
* **Estimated Duration:** 4 Weeks
* **FTE:**  2.5 FTE
* **Costs:** 5.6k USD
Prerequisites: 
This milestone require Schnorrkel threshold signature issue https://github.com/w3f/schnorrkel/issues/11 completes. 

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Testable features | User can generate DOT addresses |
| 1 | Update test instruction | update with new features |
| 2 | Source code | |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 1.0 | Add a "generate DOT asset" page on web UI | user can trigger create new DOT address. Input (k,n) and other parameters |
| 1.1 | List user assets on web UI | When successfully generated DOT address, it will show on web UI |
| 2.0 | Add a "generate DOT asset" page on mobile app | users scan the QR code on web UI. Review all tx parameters. Fingerprint unlock to commit tx to layer-1 blockchain |
| 2.1 | List user assets on mobile app | When successfully generated DOT address, it will show mobile app |
| 2.2 | Mobile app | Generate P1 |
| 3.0 | Substrate pellet: Create "generate DOT asset" task | Layer 1 verify user auth, create a task in the blockchain so that layer-2 can handle |
| 4.0 | Gluon wasm module (TeaLeaf) | Select delegator and executor |
| 4.1 | Gluon TeaLeaf | Executor aggregates public key from initial pinners |
| 4.2 | Gluon TeaLeaf | Delegator verify and response to Layer 1 |
| 4.3 | Gluon TeaLeaf | Suspend old P2 P3 when a social recovery task in progress|
| 5.0 | Layer1 | Create Schnorr multisig test chain | 
| 5.1 | Layer1 | Update user assets |

### Milestone 4 - Sign DOT transaction on testnet
* **Estimated Duration:** 4 Weeks
* **FTE** 2.5 FTE
* **Cost:** 5.6k USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Testable features | User send DOT transfer transaction. Gluon sign the transaction and send it to test chain |
| 1 | Update test instruction | update with new features |
| 2 | Source code | |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 1.0 | Gluon TeaLeaf | DOT SPV light node in layer2 to communicate with DOT chain |
| 2.0 | Web Portal | Create DOT transaction page |
| 3.0 | Mobile app | Scan, verify DOT transaction, and send to layer 1 |
| 3.1 | Mobile app | Partial Sign tx using P1. Send the P1 signature to DOT light node|
| 4.0 | Gluon TeaLeaf | Executor find pinners and organize them to multisign tx individually |
| 4.1 | Gluon TeaLeaf | Executor verify and aggregates signatures. Send the P2 signatures to test net |
| 5.0 | Layer 1 | Settle payment distribution |
 
### Milestone 5 - Migrate to real hardware and test on Polkadot
* **Estimated Duration:** 4 Weeks
* **FTE** 2.5 FTE
* **Cost:** 5.6k USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0 | Testable features |  All logic runs on Polkadot mainnet |
| 1 | Update test instruction | update with new features |
| 2 | Source code | |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 1.0 | All modules | Migrate to AWS Nitro enclave and Integration test |
| 2.0 | Web Portal | User's manual, instruction |
| 3.0 | Documents | Integration API for 3rd party |

## Future Plans

 Gluon will be a full-featured demo application for the TEA project once it is ready. So far, there are a few limitations that we are working on.

- Integrate with [Parsec](https://github.com/parallaxsecond/parsec). Parsec can be an abstract layer between TeaRuntime and security-related hardware. It makes TEA agnostic to different hardware platforms. It may increase the adaption of TEA. 
 - Besides DOT, we will all Polkadot ecosystem chains and other Schnorr signature compatible chains.
 - We will retire our facade interface service and use off-chain workers instead.
 - Besides hardware protection and Schnorr Multisig algorithm, we open eyes to SMPC and FHE algorithm such as BLS Signature Scheme. 

Most items in this to-do list are part of the TEA Project plan. When TEA is ready, most of the features will be available too.

## Additional Information :heavy_plus_sign:

We started the TEA project in 2019. It has been under the radar until recently when it was released to the public. We believe the TEA project could grow large and become the backend service platform for a new type of dApps. These dApps can go beyond the limit of traditional blockchain technologies. Gluon is just one of the many possible demo apps. Once our honor gets granted, we will start looking for investors and hire a CEO and more developers to join us. We hope to maintain a long term and close relationship with the Polkadot community. 
