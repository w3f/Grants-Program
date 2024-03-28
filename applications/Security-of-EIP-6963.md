# Evaluating the security and privacy of EIP-6963 (Multi-Injected Provider Discovery)


- **Team Name:** PriFi Labs Inc.
- **Payment Address:** TBD
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

EIP-6963 (Multi-Injected Provider Discovery) introduces an alternative discovery mechanism to `window.ethereum` for discovering multiple injected Wallet Providers in a web page. Throughout our preliminary research, we have found that wallets and dApps that use EIP-6963 are susceptible to various potential security vulnerabilities, specifically with rogue wallets. 

In this project, we aim to analyze the security and privacy dimensions of the new standard through the development of a series of proof-of-concept demonstrations targeting various potential attacks. This comprehensive evaluation will enable us to assess the vulnerability of widely-used wallets and decentralized applications (dApps) within the Polkadot ecosystem to these identified threats. Further, we plan to devise a variety of mitigation strategies and provide actionable recommendations to safeguard against these vulnerabilities. Our ultimate goal is to affirm the effectiveness of our approach by disseminating our findings in an academic publication.


### Project Details

At present, wallet providers that offer browser extensions are required to inject their Ethereum providers (EIP-1193) into the same `window.ethereum` object. This practice leads to conflicts for users who install multiple browser extensions. EIP-6963 (Multi-Injected Provider Discovery) proposes a new method for identifying multiple injected Wallet Providers on a webpage through the use of JavaScript's window events. This allows DApps to reliably connect with all installed wallets on a user's browser, aiming to improve the user experience by resolving conflicts that arise from having multiple wallet providers injected into the same window object. 

In the context of an undegraduate course called [Blockchain and Decentralized Applications](https://thierrysans.me/CSCD71/), three students from University of Toronto were tasked to evaluate the security and privacy of this new standard as a final project. Through their preliminary research, they were able to demonstrate that a rogue wallet extension can infect a user's computer through dApps using EIP-6963. For instance, when the list of wallets is shown, it is possible to pollute the list of wallets with multiple fake wallets or impersonate existing, trusted wallets such as MetaMask. Additionally, when a user chooses a wallet to connect to, the other wallets might be able to eavedrop transactions compromising the user's privacy. 

This proposal seeks to extend the preliminary research by implementing various attack scenarios targeting EIP-6963. Our objectives are twofold: firstly, to evaluate the susceptibility of prevalent wallets and dApps within the Polkadot ecosystem to these security threats, and secondly, to formulate strategies for mitigating such vulnerabilities.

We propose to structure the project into three distinct milestones, each designed to progressively advance our understanding and response to the security challenges posed by EIP-6963. These milestones are as follows:

- Milestone 1: Implementation of Attack Vectors
In this initial phase, we aim to develop and execute a series of attack simulations targeting vulnerabilities within dApps, specifically through the exploitation of rogue wallet extensions. These attack vectors, some of which are highlighted within the EIP-6963 standard itself, will focus on compromising the security and integrity of dApps. Preliminary efforts by the student team have already yielded significant insights into these vulnerabilities, setting a solid foundation for further exploration (refer to the Development Status section for more details).

- Milestone 2: Transaction and User Action Eavesdropping
The second milestone will focus on the implementation of a sophisticated attack strategy where a rogue wallet extension eavesdrops on transactions and user actions directed to a selected wallet. This phase aims to uncover the potential for unauthorized access and data capture, posing serious privacy and security risks to users.

- Milestone 3: Academic Paper Composition
The culmination of our research efforts will be the drafting of an academic paper. This document will encapsulate our findings, methodologies, and proposed solutions to the security vulnerabilities identified in the previous milestones. The paper aims to contribute valuable insights to the broader academic and technological communities, fostering awareness and prompting further innovation in blockchain security.

Our project will produce the following key deliverables:
- Development of code to simulate the identified attack vectors.
- A comprehensive report detailing the vulnerability of widely-used wallets and dApps in the Polkadot framework to these security threats.
- A suite of recommendations aimed at fortifying against these vulnerabilities.
- An academic paper summarizing our findings.

The students who initiated this research have committed to advancing their study as part of an undergraduate master thesis. Funding for this proposal will be directed towards supporting their thesis work.

### Ecosystem Fit

We have identified at least two wallets in the Polkadot ecosystem that have already implemented EIP-6963: [Talisman](https://www.talisman.xyz/) and [Enkrypt](https://www.enkrypt.com/). Our goal is to evaluate whether wallets are vulnerable to the attacks identified in our study. If so, our plan is to work with the developers to find ways to mitigate those vulnerabilities.  

In addition, other Polkadot wallets, such as Fearless Wallet and PolkaGate, are likely working on implementing EIP-6963 as we speak. Our goal is to provide them with an actual test suite to evaluate their solution and concrete recommendtions to prevent these known vulnreabilities.

## Team :busts_in_silhouette:

### Team members

Project Supervisors:
- **Thierry Sans** is an Associate Professor in Computer Science at the University of Toronto Scarborough (previously at Carnegie Mellon University). He has 15 years of experience in Academia and his expertise is in computer security and data protection.
- **David Liu** has a Bachelor in Computer Science from the University of Toronto. He has built and managed over 40 blockchain projects. His expertise is blockchain full-stack development, business planning, and operations.

Students:
- **Nikhil Lakhwani** is an undergraduate student in Computer Science at the  University of Toronto, with an extensive experience on Web design and Frontend development. Nikhil has worked on one of our previous grant. 
- **Mitravasu Prakash** is an undergraduate student in Computer Science at the University of Toronto, with over three years of experience in full-stack development.
- **Kourosh Jaberi** is an undergraduate student in Computer Science at the  University of Toronto, with over three years of experience in software development.

### Contact

- **Contact Name:** Thierry Sans
- **Contact Email:** thierry.sans@utoronto.ca
- **Website:** [Thierry Sans](https://thierrysans.me/)

### Legal Structure

In 2022, we have founded the company PriFi Labs Inc. that designs trustless solutions to help businesses and users to have enhanced protection on Web3.

- **Registered Address:** 135 Edgewood Ave. Toronto, M4L 3H3, Ontario, Canada
- **Registered Legal Entity:** PriFi Labs Inc.

### Team's experience

Through PriFi Labs, we have successfully completed two noteworthy grants:

- **The Locker**, $75K from the Secret Network Foundation (completed in February 2023) 
- **ZK-Team**, $30K from the Ethereum Foundation (completed in January 2024) 

#### The Locker: A Decentralized Mnemonic Backup System for Non-Custodial Cryptocurrency Wallets

The Locker is a dApp on Secret Network that allows you to protect and backup any of your mnemonic passphrases (or any other secret text) directly on the blockchain confidentially and recover it whenever you need. 

The final product is available here: https://locker.prifilabs.com/

The results have been published as an academic paper (peer-reviewed) that appeared in the 15th International Symposium on Foundations & Practice of Security (FPS'22):
https://locker.prifilabs.com/The-Locker-whitepaper.pdf

#### Zk-Team: Privacy-Preserving Account-Abstraction for Teams on EVM chains

ZK-Team is a privacy-preserving smart account that enables organizations to share ownership of accounts among team members while upholding their individual privacy. By leveraging zero-knowledge proofs and Ethereum’s Account Abstraction (ERC-4337), our solution enables team members to send transactions from the same smart account without revealing their identities to the blockchain. Additionally, the organization that owns the smart account can assign different allowances to each of its users without disclosing any information that would compromise the identity of these users and the privacy of the transactions.

The final product is available here: https://www.npmjs.com/package/@prifilabs/zk-team

The results have been submitted as an academic paper to a peer-reviewed conference. The paper is still under review but can be shared privately upon request. 

### Team Code Repos

- PriFi Labs: https://github.com/prifilabs
- Thierry Sans: https://github.com/ThierrySans
- David Liu: https://github.com/liuzimin
- Nikhil Lakhwani: https://github.com/lakhwani
- Mitravasu Prakash: https://github.com/Mitravasu
- Kourosh Jaberi: https://github.com/kouroshjaberi11/

### Team LinkedIn Profiles

- Thierry Sans: https://www.linkedin.com/in/thierry-sans-0a281227/
- David Liu: https://www.linkedin.com/in/davidliu134/
- Nikhil Lakhwani: https://www.linkedin.com/in/nlakhwani/
- Mitravasu Prakash: https://www.linkedin.com/in/mitravasu-prakash/
- Kourosh Jaberi: https://www.linkedin.com/in/kourosh-jaberi/

## Development Status :open_book:

The starting point of our research was the vulnerabilities that were identified in the standard EIP-6963 such as:
 
- Prototype Pollution of Wallet Provider objects
- Wallet Imitation and Manipulation
- Prevent SVG Javascript Execution
- Prevent Wallet Fingerprinting

In their preliminary work, the students have been able to implement attacks for the first two vulnerabilities. Their results have been presented as part of their final project. All materials can be found here:

- Summary: https://docs.google.com/document/d/1n_ndqPb0wuDCh3FsTAtcDWalBXi8mE0dPiUv5lQ3cPs/edit
- Presentation slides: https://docs.google.com/presentation/d/1rt6no7bwUbVo1WFgOYc9Duqk0cxbwHYVuD3PCduRKLg/edit#slide=id.gf63018c972_0_11812
- Source code: https://github.com/kouroshjaberi11/Multi-Wallet-Injection-project

Moreover, students have conducted a literature review that includes the following notable publications related to wallet security:

- [Security Aspects of Cryptocurrency Wallets](https://dl.acm.org/doi/10.1145/3596906) by Sabine Houy, Philipp Schmid, Alexandre Bartel
- [Security, Privacy, and Decentralization in Web3](https://arxiv.org/abs/2109.06836) by Philipp Winter, Anna Harbluk Lorimer, Peter Snyder, Benjamin Livshits
- [Smart Wallets on Blockchain—Attacks and Their Costs](https://link.springer.com/chapter/10.1007/978-981-15-1301-5_51) by 
Akshay Pillai, Vishal Saraswat & Arunkumar V.R.
- [Characterizing Cryptocurrency-themed Malicious Browser Extensions](https://dl.acm.org/doi/abs/10.1145/3570603) by Kailong Wang, Yuxi Ling, Yanjun Zhang, Zhou Yu, Haoyu Wang, Guangdong Bai, Beng Chin Ooi, Jin Song Dong
- [Attainable Hacks on Keystore Files in Ethereum Wallets—A Systematic Analysis](https://link.springer.com/chapter/10.1007/978-3-030-34353-8_7) by Purathani Praitheeshan, Yi Wei Xin, Lei Pan, Robin Doss 
- [Pitfalls of open architecture: How friends can exploit your cryptocurrency wallet]() by Thanh Bui, Siddharth Prakash Rao, Markku Antikainen, Tuomas Aura

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 Months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 30,000 USD 

### Milestone 1 - Security

- **Estimated duration:** 1 month
- **FTE:**  1 FTE
- **Costs:** 10,000 USD

**Objective:** To identify and demonstrate proof-of-concept attacks for four specific vulnerabilities related to EIP-6963, focusing on rogue wallet extensions, wallet provider object pollution, wallet imitation, and manipulation, and other related security threats.

**Activities:**
- Develop a test environment and Docker set up for simulating the interaction between dApps, wallet providers, and users.
- Design and execute attacks based on identified vulnerabilities, such as spoofing wallet providers, injecting malicious scripts, or exploiting protocol weaknesses.

**Deliverables:**

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide a detailed report of each designed attack, including methodology, tools used, and vulnerability exploited. |
| **0c.** | Testing and Testing Guide | We will provide a comprehensive testing guide for replicating the attacks in a controlled environment. |
| **0d.** | Docker | We will provide a Docker environment setup for running and testing the attack simulations. |
| **1.** | Attack Simulation Code Repository | We will deliver a repository of code for the simulated attacks, demonstrating vulnerabilities, available for community review and educational purposes. |
| **2.** | Security Recommendations Report | We will deliver a report highlighting a set of recommendations for mitigating identified security threats, tailored for both wallet developers and dApp developers within the Polkadot ecosystem. |


### Milestone 2 - Privacy

- **Estimated duration:** 1 month
- **FTE:**  1 FTE
- **Costs:** 10,000 USD

**Objective:** To explore and demonstrate how a rogue wallet extension could eavesdrop on transactions and user actions, compromising user privacy and data integrity.

**Activities:**
- Develop a rogue wallet extension prototype that demonstrates the ability to eavesdrop on transactions and user actions.
- Evaluate the impact of such privacy breaches on users and the broader ecosystem.

**Deliverables:**

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide a report detailing the rogue wallet attack and the implications for users, including a set of privacy-enhancing recommendations and best practices for wallet and dApp developers to prevent eavesdropping and safeguard user data. |
| **0c.** | Testing and Testing Guide | We will provide a comprehensive testing guide to help developers and researchers replicate and understand the privacy attack using the provided rogue wallet extension prototype. |
| **0d.** | Docker | We will provide a Docker environment setup to facilitate the testing of the rogue wallet extension and its impact on privacy. |
| **1.** | Rogue Wallet Prototype | We will deliver a code repository containing proof-of-concept code for the rogue wallet extension. |

### Milestone 3 - Academic Paper

- **Estimated duration:** 1 month
- **FTE:**  1 FTE
- **Costs:** 10,000 USD

**Objective:** To compile the research findings, methodologies, and proposed solutions into a comprehensive academic paper suitable for submission to a peer-reviewed conference (e.g. CCS'24, SBC'24, ESORICS'24).

**Activities:**
- Synthesize the research conducted in the previous milestones, emphasizing key findings, attack methodologies, mitigation strategies, and their potential impact on the Polkadot ecosystem.
- Conduct a thorough literature review to position the paper within existing research on blockchain security and privacy.
- Draft the paper, incorporating feedback from team members, project supervisors, and possibly external reviewers for accuracy and relevance.

**Deliverables:**
| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide Documentation of the research findings, methodologies, and proposed solutions, prepared for academic publication. |
| **0c.** | Testing and Testing Guide | We will provide a testing guide which includes a description of the methodologies used for research, including how the findings can be replicated or tested by others. |
| **0d.** | Docker | We will provide a Docker environment setup for any simulations or tests related to the academic research, if seen fit. |
| **0e.** | Academic Paper | We will deliver an academic paper suitable for submission to a peer-reviewed conference focusing on blockchain technology. This paper will explore the project's findings, and focus on security and privacy considerations. |


## Future Plans

This research aims to deepen our comprehension of the threats associated with the new EIP-6963 standard. By gaining a comprehensive understanding of these vulnerabilities, we will be positioned to achieve two key objectives:
- Develop a benchmark to assess the vulnerability of wallets to these attacks.
- Create a security library designed to assist developers of decentralized applications in mitigating these threats within their applications.