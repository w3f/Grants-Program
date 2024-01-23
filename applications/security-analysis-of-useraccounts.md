# User Account Access Security Analysis for Wallets


- **Team Name:** Zime
- **Payment Address:** Fiat Jan 23, 2024, 11:15 AM EST
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

This application is in response to the RFP: [User Account Access Security Analysis for Wallets](https://grants.web3.foundation/docs/RFPs/user-account-access-analysis)

### Overview

This proposal outlines a comprehensive security analysis of popular Polkadot wallets (Polkadot-JS Browser Extension, Parity Signer, Talisman, etc) aiming to fortify the gateway to user assets and foster a more safe and user-friendly ecosystem.

Polkadot's advanced account access features, including multi-signatures, proxies, account-abstraction and social recovery mechanisms, offer unprecedented flexibility and control. However, the inherent complexity of these mechanisms can create unintended security pitfalls and introduce vulnerability. Inadequate UI/UX, intricate user interactions, and potential vulnerabilities or loopholes in underlying implementations can expose user accounts to unauthorized access, lock-out risks, and user experience challenges.

This project goes beyond simply identifying vulnerabilities. We aim to provide actionable solutions and technical enhancements for a more secure yet easy to use Polkadot wallet ecosystem. 



### Project Details

####  Research Objectives

Currently, we have a rough idea of what our multi-layered analysis & research will encompass:

#### 1. Objective 1: Formalize and Analyze Account Access:
- Employ User Account Access Graphs (UAGs) (as mentioned [here](https://people.inf.ethz.ch/rsasse/pub/AccountAccessGraphs-CCS19.pdf)) to formally model account generation, access, backup, and recovery mechanisms in popular wallets like Polkadot-JS Browser Extension, subkey, and Talisman.
- Analyze model outputs to identify potential vulnerabilities and understand user interaction patterns impacting security.
  
#### 2. Objective 2: Evaluate Security of Implementations and Protocols:
- Utilize automated scanners and fuzzers to discover vulnerabilities in wallet software codebases and underlying blockchain protocols.
- Conduct manual code reviews to identify logic flaws and security weaknesses not detected by automated tools.

#### 3. Objective 3: Assess Server-Side Infrastructure Security:
- Investigate potential security weaknesses in server infrastructure interacting with wallets, focusing on data security, access control, and communication protocols.
- Analyze server-side logs and event data to identify suspicious activity and potential attack vectors.

#### 4. Objective 4: Balance Security and Usability:
- Analyze user interactions and feedback to understand usability challenges that compromise security practices.
- Based on the security analysis findings, propose intuitive and user-friendly access control methods and security features that optimize user experience without compromising security.

#### Methodology

1. For formal modeling we’ll use the User Account Access Graphs (UAGs) as described in this [Paper](https://people.inf.ethz.ch/rsasse/pub/AccountAccessGraphs-CCS19.pdf) to analyze the security and recoverability of a user's account setup.
2. We’ll conduct comprehensive threat modeling exercises to identify potential attack vectors and assess their feasibility and impact. We’ll also be using automated scanners & fuzzers to detect anomalous behavior of wallets.
3. We will also conduct interviews with avid polkadot users who have used or faced issues with using proxies or social recovery mechanisms. From this we’ll identify usability issues, and gather feedback on security features.
4. We will actively collaborate with the Web3 Foundation for ongoing guidance, validation of findings, and alignment with Polkadot security best practices.

#### Expected Results

We would provide 3 different documents (2 analysis reports) & open-source code we use to perform analysis. 

#### 1. Threat Model and Analysis Scope Document:
Within the first few weeks, we’ll provide a foundational document outlining the identified threat models, the scope of our analysis encompassing wallets like Polkadot-JS Browser Extension, subkey, Polkadot-JS UI, Parity Signer, Talisman, etc., and the chosen methodologies for each research objective. This document represents the first phase of risk assessment.

#### 2. Security Analysis Report:
Within the first month, we will also deliver a report that'll deeply elaborate on the detected vulnerabilities across all layers (UI, implementations, protocols, server-side) related to account generation, access, back-up, and restoring mechanism. The rough breakdown of the report would be: 
1. Sound and complete detection of unauthorized access vulnerabilities: A detailed inventory of potential security breaches we find, allowing for immediate prioritization and mitigation.
2. Minimal counterexamples for potential exploits: Concise demonstrations of exploitable weaknesses, acting as blueprints for patching critical security gaps.
3. User lockout risk assessment and mitigation strategies: Identifying potential scenarios for user lockouts and providing strategies to minimize such risks.

#### 3. Usability & Security Improvement Report:
In the following month, we will provide a dedicated report that will translate security findings into practical suggestions for optimizing user experience without compromising security. It will focus on:
1. Recommendations for specific security enhancements and implementations: A concrete roadmap outlining steps to strengthen wallet's defenses against identified vulnerabilities.
2. User-friendly security enhancements: Proposing intuitive ways to implement robust security features seamlessly integrated with the user experience & interface.

#### 4. Open Source Models & Code:
We want to foster collaboration and benefit the broader community, hence at the end of our project  we'll share:
1. Developed Models: Models for formalizing and analyzing different wallets, empowering others to build upon our work.
2. Automated Analysis Code: Any code created during the project, fostering continuous improvement and innovation.

### What your project is *not* or will *not* provide or implement

**This project will not:**
1. Implement security fixes: Our role is to identify and prioritize vulnerabilities; the responsibility for implementing recommended mitigations rests with individual wallet developers or other teams.
2. Go beyond wallet vulnerabilities: We won't be digging deep into all server intricacies or attempting full-fledged pentesting beyond the critical server aspects directly interacting with wallets. Identifying and prioritizing wallet vulnerabilities remains our core focus.


### Ecosystem Fit

By safeguarding the gateways to user assets, this project strengthens the very foundation of the Polkadot ecosystem. Our comprehensive analysis and actionable recommendations will enable wallet developers to address critical vulnerabilities, enhancing user trust and confidence. Streamlined access control and intuitive security features developed through our findings will improve user experience, attracting wider adoption and fostering a more vibrant Polkadot community.


## Team :busts_in_silhouette:

### Team members

- Name of team leader: Arsalaan Alam
- Names of team members: Arsalaan Alam & Krishanu Dhar & some security consultants. 

### Contact

- **Contact Name:** Arsalaan Alam
- **Contact Email:** arsalaanalamcollege@gmail.com

### Legal Structure

- **Registered Address:**  No registered entity
- **Registered Legal Entity:**   No registered entity

### Team's experience

We are a team of two talented full-stack web3 developers and have been in the web3 ecosystem for the past 3 years. Our main domain is privacy & security and we have been developing solutions for enhancing privacy for decentralized solutions since a while. 

Arsalaan is a sophomore at university studying computer science and is a full-stack web3 developer. Krish is a full-time storage & data security engineer by profession. We both have a lot of full-time experience of development and programming. 

Fun-fact: The combined number of hackathon victories for both of us is over 20.

### Team Code Repos

- Arsalaan - https://github.com/Arsalaan-Alam
- Krish - https://github.com/ronykris

### Team LinkedIn Profiles (if available)

- Arsalaan - https://www.linkedin.com/in/arsalaan-alam-375b281bb/
- Krish - https://www.linkedin.com/in/krishanu-dhar
  

## Development Status :open_book:

Not Commenced.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 10 weeks
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 29,000 USD

### Milestone 1 Example — Literature Review and Data Collection

- **Estimated duration:**  4-6 weeks
- **FTE:**  2 
- **Costs:** 15,000 USD



| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | 	Apache 2.0 |
| **0b.** | Documentation | We will document our whole research and provide articles at the end which will explain all the steps towards a safer wallet access mechanism for Polkadot Users.  |
| **1.** | Threat Model and Analysis Scope Document| Within the first month, we’ll provide a foundational document outlining the identified threat model, the scope of our analysis encompassing wallets like Polkadot-JS Browser Extension, subkey, Polkadot-JS UI, Parity Signer, Talisman, etc., and the chosen methodologies for each research objective. This document represents the first phase of risk assessment. |
| **2.** | Security Analysis Report | In the second month, we will deliver a comprehensive report delving deep into detected vulnerabilities across all layers (UI, implementations, protocols, server-side) related to account generation, access, back-up, and restoring mechanisms. |
| **2a.** | Sound and complete detection of unauthorized access vulnerabilities | We'll provide a detailed inventory of potential security breaches we find, allowing for immediate prioritization and mitigation. |
| **2b.** | Minimal counterexamples for potential exploits | We'll provide concise demonstrations of exploitable weaknesses in the form of examples, acting as blueprints for patching critical security gaps. |
| **2c.** | User lockout risk assessment | We'll identify potential scenarios for  temporary user lockouts and provide strategies to minimize such risks. |



### Milestone 2 Example — Data Analysis

- **Estimated Duration:** 4-6 Weeks
- **FTE:**  2
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | 	Apache 2.0 |
| **0b.** | Documentation | We will document our whole research and provide articles at the end which will explain all the steps towards a safer wallet access mechanism for Polkadot Users.  |
| **1.** | Usability & Security Improvement Report | We will provide a dedicated report that will translate security findings into practical suggestions for optimizing user experience without compromising security. |
| **1a.** | Security Recommendations for Infrastructure| We'll provide recommendations for specific security enhancements and implementations through a concrete roadmap that will outline steps to strengthen wallet's infra against identified vulnerabilities.|
| **1b.** | Security recommendations on the UX | We'll propose intuitive ways to implement robust security features based on the user-feedback that can directly be integrated with the user experience & interface. |
| **2.** | Open Source Models & Code| We want to encourage collaboration and benefit the broader community, hence at the end of our project we'll share: |
| **2a.** | Developed Models | We'll share the models for formalizing and analyzing different wallets, empowering others to build upon our work. |
| **2b.** | Automated Analysis Code | We'll share any code created during the project for automated analysis of Polkadot systems , fostering continuous improvement and innovation |


## Future Plans

Our long-term vision extends beyond securing individual wallets. We aim to evolve into a comprehensive security resource for the entire Polkadot ecosystem, where we will research about emerging threats in smart contracts, cross-chain interactions, and beyond.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** N/A
- **Payment Address:** N/A

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

