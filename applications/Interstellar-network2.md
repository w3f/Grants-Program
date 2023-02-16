# Interstellar - Wallet Phase 2


- **Team Name:** Interstellar
- **Payment Address:** TBD
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3


## Project Overview :page_facing_up:

**Follow-up of Interstellar- Wallet Phase 1**: Link to the application pull request: [w3f/Grants-Program#1354](https://github.com/w3f/Grants-Program/pull/1354)

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

![TTV overview drawio](https://user-images.githubusercontent.com/4605611/144742049-54d3a212-b471-4a69-9f44-adfb150814ca.png#gh-light-mode-only)

![TTV overview dark drawio](https://user-images.githubusercontent.com/4605611/144738926-e6f0db47-f7ff-4382-ae5d-251420e23a61.png#gh-dark-mode-only)



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

- **Total Estimated Duration:** 6.5 months
- **Full-Time Equivalent (FTE):** 2.5
- **Total Costs:** 97,000 USD


### Milestone 1 - Polkadot and Ethereum pallet signers

- **Estimated Duration:** 6 weeks
- **FTE:** 2.5
- **Costs:** 22,000 USD

|  Number | Deliverable                            | Specification                                                                                                                                                                                                                |
| ------: | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation                          | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up our stack and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide              | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                              |
| **0d.** | Docker                                 | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |  |  |  |
|      1. | Integritee pallet - Signer/Key Manager | We will create a pallet to manage signers associated with private key management                                                                                                                                             |
|      2. | Integritee pallet- Polkadot signer     | We will create a pallet to sign Polkadot transaction                                                                                                                                                                         |
|      3. | Integritee pallet - Ethereum signer    | We will create a pallet to sign Ethereum transaction                                                                                                                                                                         |
|      4. | Integritee pallet - submit transaction | We will create a pallet to send transactions to the appropriate network                                                                                                                                                      |


### Milestone 2 - Android pre-MVP wallet Polkadot/Ethereum

- **Estimated Duration:** 4 weeks
- **FTE:** 2.5
- **Costs:** 15,000 USD

|  Number | Deliverable               | Specification                                                                                                                                                                                                                |
| ------: | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up our stack and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                              |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |  |  |  |
|      1. | Android Wallet App        | We will update the current android app to handle Polkadot and Ethereum transaction                                                                                                                                           |
|      2. | upgrade pallets           | Mobile Registry and signers, will handle complete Polkadot and Ethereum transactions                                                                                                                                         |
|      3. | light security screen     | We will provide a less secure but very comfortable to read secure screen version - this version will be used later with our adaptive security framework                                                                      |

### Milestone 3 - iOS pre-MVP wallet Polkadot/Ethereum

- **Estimated Duration:** 4 weeks
- **FTE:** 2.5
- **Costs:** 15,000 USD

|  Number | Deliverable                 | Specification                                                                                                                                                                                                                |
| ------: | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                     | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up our stack and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide   | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                              |
| **0d.** | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |  |  |  |
|      1. | iOS Wallet App (TestFlight) | We will update the iOS app (port Jetpack compose to Swift UI) to handle Polkadot and Ethereum transaction                                                                                                                    |



### Milestone 4 - MVP iOS/Android with social recovery
- **Estimated duration:** 8 weeks
- **FTE:** 2.5
- **Costs:** 30,000 USD


|  Number | Deliverable                        | Specification                                                                                                                                                                                                                |
| ------: | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                            | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation                      | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up our stack and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide          | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                              |
| **0d.** | Docker                             | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |
| **0e.** | Article                            | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)                               |
|      1. | Substrate Module - social recovery | We will integrate social recovery pallet with our chain                                                                                                                                                                      |
|     2.a | Android Wallet                     | We will update android app to handle social recovery                                                                                                                                                                         |
|     2.b | iOS Wallet                         | We will update iOS app to handle social recovery                                                                                                                                                                             |
|      3. | Substrate Integritee chain         | POC to demonstrate instant onboarding and easy airdrop                                                                                                                                                                       |
|         |                                    |                                                                                                                                                                                                                              |

### Milestone 5 — Circuit Design Update/Optimization

- **Estimated duration:** 4 weeks
- **FTE:** 2.5
- **Costs:** 15,000 USD


|  Number | Deliverable                  | Specification                                                                                                                                                                                                                |
| ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                      | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation                | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up our stack and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide    | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                              |
| **0d.** | Docker                       | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |  |  |  |
|      1. | Garble Circuit pallet update | We will optimize the garbled circuit evaluation scheme to get better performance                                                                                                                                             |
|      2. | Display Circuit update       | We will modify the current display circuit to enable a smoother user experience more comfortable for the user when circuit is evaluated                                                                                      |


## Future Plans



### Potential Research project:

The issue that requires investigation is the increasing sophistication and effectiveness of targeted malware attacks, particularly those that utilize a 0-day vulnerability to establish a rootkit. This is a crucial matter to address as such attacks can cause significant harm to individuals and organizations.

Targeted attacks with rootkit capabilities are highly elusive, as an attacker with malware and root privileges can quickly disable any type of system or network monitoring. This is made even more challenging by the fact that the attacker has access to the entire system's resources and can alter the memory and code of any application. Furthermore, it is even more difficult to detect such attacks when the targeted application lacks root privileges, as the attacker has an advantage in terms of access and control.

Despite the challenges presented by rootkit-enabled targeted attacks, we think that our security and authentication framework (decentralized & distributed) can be used to design a real-time targeted attack detection that focuses on our transaction validation/sensitive operation session. This is made possible by our use of hardware protected signature on mobile and the computation privacy and protection of inputs of garbled circuit evaluation. By leveraging these advanced security measures, we can enhance our ability to detect and prevent targeted attacks, even those with rootkit capabilities.


**Research question/hypothesis**: Can we design an efficient and accurate machine learning (ML) malware detection model for rootkits, based on processor resource consumption during transaction validation sessions on mobile devices?

During the transaction validation session, we aim to maximize processor resource consumption by designing a task based on evaluating garbled circuits to create an unalterable cryptographic dataset. This dataset can be used to train a machine learning model to detect malicious resource usage patterns. The task-based approach can be fine-tuned to detect subtle variations in resource consumption and is more likely to identify malicious behavior as the usage patterns for evaluating garbled circuits are unique compared to other tasks. Moreover, garbled circuits provide privacy and protection for computation and inputs, making it challenging for attackers to mimic normal behavior and evade detection.

### Future security framework
The proposed system incorporates multiple security layers to increase the cost of targeted attacks on mobile user interface (UI) software.

The first layer focuses on the security of transaction confirmation, using features such as TUI and Android protected confirmation.

The second layer adds an additional layer of security through behavioral biometrics, such as keypad pressure and input timestamps, making it difficult for attackers to replicate the user's input. [99% proven success rate model]( https://book.interstellar.gg/TTVP.html#behavioral-biometric-roadmap)

The third layer uses garbled circuits to execute a recursive AES hashing function that maximizes resource consumption on the mobile processors: CPU, GPU, and ML engine. The evaluation of these circuits generates an unalterable secret sequence number, which is then embedded as a watermark in the frames displayed to the user. These frames are sent to nodes and regularly verified during the session, ensuring legitimate execution of the garbled circuits and limiting available resources for attackers.

The system could then set up an ML model to detect attack attempts, especially if the sequence numbers are correlated with behavioral biometric inputs. This system can be initiated during the launch of the mainnet to manage the ML learning phase and establish normal usage patterns during transaction validation sessions on various ARM-based mobiles, including their GPU and ML processors.

This proposed multi-layer security system is believed to effectively deter malicious actors. If attackers aim to exploit a highly expensive 0-day vulnerability or are unable to access information about the assets in the wallet, they are likely to target less secure wallets with more predictable returns in order to maximize their return on investment.

If the research hypothesis is confirmed, we think that a high success rate in detecting targeted attack attempts can be achieved with sufficient diverse datasets and model refinement through simulated attacks. [Bittensor](https://bittensor.com/) in the Polkadot ecosystem could be a promising candidate for implementing the ML models.

**Bug bounty program**: To encourage security researchers in conducting targeted attacks on our system. This will also train the model and improve its accuracy while also assisting developers in enhancing the system security framework.

**Potential research lead in the future**: The way the display circuit is configured/tuned can affect the user's cognitive load when reading the display (i.e. time for the brain to process visual information) changing its behavior to improve our ML model. It is also potentially a new type of behavioral biometric that could discriminate a real human from an ML model used by the attackers.

### Potential Guarantee fund backed by reinsurance service

Establishing a guarantee fund for individual and corporate users could be a sensible option given the level of security achieved by the system.

With the multi-layer security system described earlier, it is easy to enable users to securely provide their mobile device forensic data in a simple manner to verify potential claims.

### Some potential other improvements:

- Filecoin may allow for the backup and retrieval of private keys using Shamir Secret Sharing.

- Private scheme like stealth address can be added to the system

- Enhancement of distributed HSM based on TEE with hardware HSM module on some nodes







