# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** Gluon Wallet 
* **Team Name:** TEA Project
* **Payment Address:** BTC payment address. We don't accept payments for the program in other currencies at this stage. (e.g. 123mp123...)

> *The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
> If this application in response to an RFP then please indicate this on the first line of this section.

### Overview

Gluon Wallet is a Taas (Trust-as-a-Service) application provides hardware crypto wallet services to crypto users. Our design goal a all-in-one private key manager to MultiSig-enabled blockchains that can
- Passwordless to users. User doesn't take responsibility to backup mnemonic phrases.
- Crypto assets do not get lost when user lost computer and/or phone.
- Private keys managed by Gluon over TEA network are randomly distributed and encrypted by hardware protected modules. No single point of failure.
- Tolerance of up to 1/3 nodes get compromised without losing private keys.
- Users only need to submit transaction to Gluon. Gluon takes over all the rest to sign and commit blockchain.
- Leverage popular biometric technologies in mobile devices to get better user experiences without compromise security.

Gluon itself is built into a WebAssembly modules that loaded and run inside T-rust framework. They are both TEA projects, Gluon is application, T-rust is framework.
![relationship tea](https://cdn-images-1.medium.com/max/1120/1*2O7WDwTwH4DlIr4zbOMxng.png)

T-rust is built on Substrate. Gluon is dApp on top of T-rust. Polkadot ecosystem users do not need to store multiple keys to log into multiple chains, they can simple use Gluon as the all-in-one portal for single-sign-on (SSO).

>Please provide the following:
>  * A brief description of the project.
>  * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
>  * An indication of why your team is interested in creating this project.

### Project Details 

#### Unique features of Gluon

From user's point of view, Gluon works as if it is a hardware wallet with a few differences:
- Traditional hardware wallet is just one single hardware secure module (HSM) but Gluon is a group of thousands of hardware secure modules running consensus together to protect clients' assets. (Every TEA Mining Node is an HSM, which can be considered a hardware wallet)
- No matter it is BTC, ETH or DOT, after the address is created, user will not get the private key nor mnemonic phrases. 
- User need both a Polkadot extension and a Gluon mobile app to access his Gluon account sign.
- User can transfer authentication factor (such upgrading mobile phone)
- If user lost both computer (web auth) and phone (mobile phone), social recovery can still protect user's crypto assets and recover all of assets to user's new account.
- User only need to submit transaction and Gluon will submit signature to other blockchain directly. User doesn't need to manually submit signed transaction to blockchain. 

#### How private keys are protected by Gluon

By default, Gluon gneerates 2/3 MultiSig address for users. The three private keys are called P1, P2 and P3. P1 is stored in user's mobile phone while P2 and P3 are controlled by Gluon consensus. For Gluon controlled P2 and P3, after Gluon generated the private keys (secret) then immediately split them using Shamir Secure Sharing Schema. The split pieces are distributed to replicas of many TEA Nodes. TEA nodes are HSM (Hardware Secure Module). You can consider common used hardware wallets are special purpose HSM but TEA nodes are general purpose that can do much more. The secret will never expose outside of hardware protected TEA node's RAM, nor saved to any kind of storage media persistently. When the secret is used to sign a transaction from an authorized user, it will be rebuilt and sign inside a VRF selected TEA node under both hardware protection and remote attestations from a consensus called Proof of Trust (PoT). Due to the randomness, no one knows which TEA node stored which Shamir pieces of which secret. No one can protect which TEA node will be selected or is working on generating or rebuilding secret. The randomness can be verified by other TEA nodes or substrate-runtime logic at both runtime and later audit. 

P2 and P3 are all controlled by Layer1 (a Substrate blockchain) runtime logic. P2 is associate with user's 2FA. We use Polkadot web extension for now. P3 is associate with user's social recovery accounts. P3 is only used to recover user assets when user lost P1. That means user can assign some friends as "social recovery accounts". If K of N accounts sign the "recovery transaction", P3 will be used along with P2 to transfer user's assets to new account.

P1 is stored in user's Gluon mobile app. P1 will be never exposed to outside user's phone. However, Gluon doesn't require user to take the responsibility to backup mnemonic phrases. In case of upgrading phone, P1 can transfer securely to new phone without expose to network. If user lost the phone, there is no way to restore P1 because there is no backup mnemonic phrases. But user won't lose any assets because use P1 alone cannot move any assets. As mentioned above, by running a social recovery process Gluon can then transfer all assets to new account. 

![p1 p2 p3](https://miro.medium.com/max/770/1*ZiybeIlsdZsmZV6z0x1SAQ.png)

#### User experiences

From end user's point of view, Gluon is a mobile app and a web extension. The end user need to install Polkadot web extension on his browser to visit any dApp sites to generate transaction to be signed. He also needs to install a Gluon mobile app as decentrazlied 2FA (not the traditional centralized 2FA). 

User can go to Gluonwallet.com website or any other compatible dApp to create a transaction. Web extension will generate a transaction like a QR code on web page. User need to use Gluon mobile app to scan this QR code, verify the transaction details then fingerprint unlock the partial signing on the phone. Now the end user has completed his work. Once the phone send the partial signature to the Gluon network (the blockchain and layer2 network), TEA nodes will rebuild other private key using Shamir algorithm to complete the 2nd partial signature. Once two partial signature are complete, they are committed to target blockchain.

#### Relationship between Gluon and T-rust

From miners' point of view, Gluon is a dApp runs on top of T-rust framework. When compile the source code, a WebAssembly file "gluon.wasm" is generated. This wasm file is loaded to miner's TEA node by adding wasm hash in his TEA node's manifest file. Miners can load this wasm module from IPFS directly without manually compile. Once "gluon.wasm" is loaded into TEA runtime, this TEA because a TEA hardware wallet capability provider. 

Gluon.wasm handles crypto wallet related logic only. All other consensus, security, network, hardware validation happens in T-rust framework.

![relationship tea](https://cdn-images-1.medium.com/max/1120/1*2O7WDwTwH4DlIr4zbOMxng.png)

#### Gluon and T-rust's root of trust and PoT (Proof of Trust) consensus
T-rust is a layer2 trusted computing solution on top of a Substrate-based blockchain (layer1). Unlike most blockchain which root of trust comes from cryptograph and consensus, T-rust introduced hardware root-of-trust as the 3rd dimension. Unlike most other blockchains that make consensus on the result, T-rust makes consensus on the proof of trust comes from hardware TPM chips. This makes the consensus much efficient than many blockchains. T-rust can run complex or privacy-sensitive computation which not likely possible in other blockchain. Distributed storage of private key need both privacy and complex computing. So Gluon is an ideal dApp running on top of T-rust. Both Gluon and T-rust are two TEA Projects.

![root of trust](https://cdn-images-1.medium.com/max/1120/1*5cLoCE4mLRw7hhDjcuaAxA.png)

#### How other blockchains or dApps integrate with Gluon

For other blockchains, there is nothing need to be done when integrate with Gluon. Gluon is transparent to other client blockchains. Gluon is virtually a client who commit signed transaction and listen to block events. Gluon need to run a few light clients as gateways to those client blockchains. 

#### UI mockups




#### Technology stack to be used

Gluon wasm module is pretty straightforward. It is written in RUST, build into WebAssembly wasm module. 
On the other hand, T-rust is pretty complex.

##### TEA's four pillars

![four pillars](https://github.com/tearust/tea-docs/raw/main/res/s8.jpg)
In general, TEA is based on four technologies: 
- Substrate: This is the layer 1 of T-rust. It runs PoT consensus and the immutable storage of hashes from hardware chips. This is where the software root of trust comes from.
- IPFS: This is the file system and network layer of T-rust. All public code and data stored in IPFS, but all secret store insie TEA modules (the HSM).
- Trusted Computing: This is where the hardware root of trust comes from. We used the TPM chips inside the TEA module (HSM) as evidence of PoT.
- WebAssembly: All running executable code are in wasm format. We do not allow any code running outside of secure wasm runtime except to our OS, runtime, and system providers. 

90% of the source code is written in Rust. 6% in JS, 4% in Golang. 

For more detail on TEA project and T-rust framework, please go to teaproject.org

#### Prior works and demo

Gluon is a dApp and a wasm module running on top of T-rust. We currently do not have Gluon demo running (but will be soon). We do have another demo app showing the capability of T-rust framework.
This demo is a Tensorflow image recognization running on Substrate blockchain. 
Here is the video link

> Click to play the demo video
[![](https://github.com/tearust/tea-docs/raw/main/res/start-demo-video.jpg)](https://youtu.be/6GYwrITSfJo "")

There is another video introduction to TEA project.

> Click to play the introduction video
[![](https://github.com/tearust/tea-docs/raw/main/res/blog/WX20201215-115720@2x.png)](http://www.youtube.com/watch?v=-NgR3ySWwXg "")

> Therefore, we ask the teams to submit (where relevant):
> * Mockups/designs of any UI components
> * API specifications of the core functionality
> * An overview of the technology stack to be used
> * Documentation of core components, protocols, architecture etc. to be deployed
> * PoC/MVP or other relevant prior work or research on the topic


### Ecosystem Fit 
Are there any other projects similar to yours? If so, how is your project different?

## Team :busts_in_silhouette:

### Team members
* Name of team leader
* Names of team members	

### Contact
* **Contact Name:** Kevin G. Zhang  
* **Contact Email:** kevin.zhang.canada@gmail.com
teaproject.org  gluonwallet.com

### Legal Structure 
* **Registered Address:** 4006 Hastings Park Ct, San Jose, CA 95136 U.S.A.
* **Registered Legal Entity:** Elk Insight LLC.

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

### Team Code Repos
* https://github.com/<your_repo_1>
* https://github.com/<your_repo_2>

### Team LinkedIn Profiles
* https://www.linkedin.com/<person_1>
* https://www.linkedin.com/<person_2>

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.
* Deliverables 0a-0d are mandatory and should not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research oriented and as such there is no code to test)

### Overview
* **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
* **Full-time equivalent (FTE):**  Workload of an employed person ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) (e.g. 2 FTE)
* **Total Costs:** Amount of Payment in BTC for the whole project. The total amount of funding needs to be below $30k at the time of submission. (e.g. 0.80 BTC)

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.75 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be coded for the first milestone) |  
| 2. | Substrate module: Y | We will create a Substrate module that will... |  
| 3. | Substrate module: Z | We will create a Substrate module that will... |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 2 Example — Additional features
...

## Future Plans
Please include the team's long-term plans and intentions.

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?
