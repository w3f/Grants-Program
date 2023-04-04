# Interstellar - Wallet Phase 2


- **Team Name:** Interstellar
- **Payment Address:** Fiat 04.04.2023, 22:42
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

**Follow-up of Interstellar- Wallet Phase 1**: Link to the application pull request: [w3f/Grants-Program#734](https://github.com/w3f/Grants-Program/pull/734). Amendment: [w3f/Grants-Program#1354](https://github.com/w3f/Grants-Program/pull/1354)

### Overview

**The FTX collapse highlights the importance of self-custody for the Web3 ecosystem**.

Currently, there are only two categories of self-custodial wallets available: Hot Wallets and Cold Wallets. Both options come with significant trade-offs and are not well-suited for providing blockchain access to the general public.

To address the most crucial issues faced by current wallet options - User Experience and Security - a new type of wallet is required.

Typically, when we think about accessing the blockchain through a cold wallet, we expect a complicated user experience.
Interstellar aims to change this perception through a new approach and technology.

We strongly believe that securely linking and registering access device security components with a blockchain-based autonomous system is an extremely powerful concept. It can provide a future-proof solution for addressing the current security, usability, and privacy issues associated with current **centralized** non-custodial wallet software.

In terms of security, this approach utilizes the current and future mobile device security capabilities by implementing a secure distributed protocol. It addresses the current lack of third-party protection and management while also adding the necessary decentralized backend services to enhance security against evolving cyber threats.

Regarding usability, this approach simplifies the user experience by adding transparent services like Instant Onboarding.

Privacy can also be addressed using methods such as stealth addresses and other private schemes.

Additionally, implementing this approach increases the overall system's auditability, potentially enabling the management of a guarantee fund to aid users in case of issues.

Furthermore, this approach can enable new types of recovery schemes that would be impossible without a secure decentralized autonomous system backend.


A **highly secure and convenient wallet system** is necessary to combat cyber threats and ensures larger adoption.

Our solution transforms mobile devices into cold wallets, with private keys protected at the hardware level:

- Secure Element on mobile for proxy private keys associated with transaction requests and confirmations.
- Trusted Execution Environment (TEE) on nodes for private keys associated with assets.

This hardware security, combined with a Trusted Transaction Validation Protocol, offers robust protection against state-of-the-art malware, including banking Trojans, and prepares for future targeted attacks.

Interstellar is more than a wallet, we have designed **a novel secure access layer for web3** managed with a blockchain that register mobile hardware/secure elements/TEEs to protect transaction with a strong multifactor authentication (based on hardware and software computation privacy scheme i.e. garbled circuit).

Using a blockchain for the management of multi-chain transactions offers extra security and auditability features and dramatically increase convenience for the user:

- **Instant Access to Web3 services**, without any wallet set-up.
- **Trusted beneficiaries/contacts**, with destination public keys stored only on the blockchain nodes.
- **Adaptive Security**, allowing users to personalize the security level based on theirs need i.e. transaction amount to trigger validation, chose number of recovery options, etc.
- **Transaction auditability**, extra auditability security layer.
- **Social Recovery** ideally based on Polkadot pallet.

In the medium/long term (see future plan for more details):

- **A novel hardware-based recovery (through NFC/BLE) to further enhance security and convenience**, i.e. just a tap on your mobile with your NFC device to trigger the recovery process.

- **ML real-time Malware detection model** based on proof of legitimate software execution protection that increases the model accuracy (potential research project to address targeted attacks)
- **User inputs verification** based on behavioral biometric model (proven with 99% accuracy) that can be correlated with ML detection model.


This approach achieves a **highly secure level for newcomers to easily onboard web3**, and serves as an **alternative to hardware wallets for crypto veterans**.

Our technology has the potential to disrupt the hardware wallet, smart contract wallet, and even hot wallet markets.


### Project Details


A short video on the Interstellar solution (click on the following image)

[<img src="https://user-images.githubusercontent.com/4605611/219366911-21d3868c-a11c-4af4-b5d9-19fea22f368c.png" width="50%">](https://clipchamp.com/watch/nwzybRger1x "Interstellar Video: 55")
- Designs of UI components
https://book.interstellar.gg/Mobile_App.html

- Documentation of core components
https://book.interstellar.gg/

####  Architecture Overview
![Architecture overview](https://book.interstellar.gg/fig/Architecture-mobile-L1-L2-Signers.svg "architecture L1 L2 signer")
#### TTVP Detailed
![TTVP Detailed](https://book.interstellar.gg/fig/Transaction_Validation_Module.svg "TTVP detailed")


#### Technology stack

- VHDL
- C/C++
- Java/Kotlin/Jetpack Compose/Swift/Swift UI
- gRPC
- Rust/Substrate
- IPFS


### Ecosystem Fit

At parisDOT<sup>.comm</sup> we had a fantastic opportunity to present our project to the leading teams in the Polkadot Parachain community. And the feedback we received was nothing short of extraordinary. Our solution, which aims to provide both hardware security and user-friendliness in a wallet solution, struck a chord with the teams.

Their positive response is a testament to the importance of a solution that addresses this critical need in the Polkadot ecosystem and beyond. The teams were not only impressed with our solution, but they were also eager to put it to the test as soon as it becomes available.

This is a major market fit milestone for us, and we're thrilled to have the support of such influential players in the Polkadot community. We're dedicated to delivering a solution that meets their expectations and contributes to the continued growth and success of the Polkadot ecosystem.

We are in active conversations with some of the teams we met there, and continuously have new discussions with new teams also beyond the Polkadot ecosystem. So far, everyone is impressed and enthusiastic about the solution.


## Team :busts_in_silhouette:


### Team members
- Name of team leader:
- Jean-Luc Leleu
- Names of team members:
- Nathan Prat
- Eliot Leleu

- Philippe Salats (advisor)

### Contact

- **Contact Name:** Jean-Luc Leleu
- **Contact Email:** jll@interstellar.gg
- **Website:** <https://www.interstellar.gg/>


### Legal Structure

- **Registered Address:** 61 rue de Lyon, Paris, France
- **Registered Legal Entity:** Interstellar SAS

### Team's experience
We are now multiple security and fintech entrepreneurs, security researchers, patents fillers who turned open-source developers and blockchain enthusiasts.


### Team Code Repos

- <https://github.com/Interstellar-Network>

- <https://github.com/nathanprat>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/jlleleu/> Jean-Luc Leleu

- <https://www.linkedin.com/in/nathan-prat/> Nathan Part

- <https://www.linkedin.com/in/eliotjfl/> Eliot Leleu


- <https://www.linkedin.com/in/philippesalats/> Philippe Salats (advisor)


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2.5
- **Total Costs:** 30,000 USD

### Milestone 1 — New Garbling scheme

- **Estimated duration:** 4 weeks
- **FTE:** 2.5
- **Costs:** 15,000 USD


|  Number | Deliverable                  | Specification                                                                                                                                                                                                                |
| ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                      | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation                | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up our stack and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide    | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                              |
| **0d.** | Docker                       | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |  |  |  |
|      1. | Garble Circuit pallet update | We will rewrite the garbled circuit evaluation scheme to target at least **60 fps** through parralelization, caching and likely with an efficient [1.permutation-based garbling scheme: see 4.5](https://www.cs.fsu.edu/~tvhoang/thesis.pdf) optimized for performance or a [2.new garbling scheme](https://www.esat.kuleuven.be/cosic/publications/article-3351.pdf) that could potentially require lower computation cost per gate|




### Milestone 2 — Circuit design optimization and light security screen

- **Estimated duration:** 4 weeks
- **FTE:** 2.5
- **Costs:** 15,000 USD


|  Number | Deliverable                  | Specification                                                                                                                                                                                                                |
| ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                      | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation                | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up our stack and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide    | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                              |
| **0d.** | Docker                       | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |  |  |  |
|      1. | Display Circuit update       | We will modify the current display circuit to enable a more comfortable user experience by decreasing the cognitive load needed for the user to read the screen. - likely by adding specific sub-circuits to manage a set of probabilities of displaying segments for each frame, then fine tuned segments ON/OFF per frame to improve readbility
|      2. | Light security screen     | We will provide a less secure but very comfortable to read secure screen version using fading with less blinking (link)  - this  non-screenshot proof version will be used later with our adaptive security framework                                                                      |







