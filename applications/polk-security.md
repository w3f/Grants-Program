# PolkSecurity: User Account Access Analysis for Polkadot Wallets

- **Team Name:** PolkSecurity Team
- **Payment Details:** 
  - **DOT:** 5Ei1XfC53EZr7DEhYTk7KRAzneiVppyxz7mr3upQgQw58u7G
  - **Payment:** If fiat payment is available, we will provide details via email upon proposal approval.
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 

## Project Overview 


PolkSecurity is an innovative research project that aims to comprehensively analyze and enhance the security of user-facing protocols in the Polkadot ecosystem, with a specific focus on wallet interfaces. By leveraging advanced modeling techniques and rigorous security analysis, we aim to identify potential vulnerabilities, improve user experiences, and ultimately strengthen the overall security posture of Polkadot wallets.

Our project directly addresses the RFP for User Account Access Analysis, focusing on the following key objectives:

1. Formal modeling of account generation, access, backup, and recovery mechanisms for popular Polkadot wallets
2. Comprehensive security analysis, including detection of unauthorized access vulnerabilities and user lockout risks
3. Identification of redundancies in authentication processes
4. Proposal of user experience improvements without compromising security
5. Development of a systematic technique for modeling and analyzing account access, building upon the 'User Account Access Graphs' methodology

Our project will be conducted in close collaboration with the Web3 Foundation Research Team, ensuring alignment with the ecosystem's goals and standards.

## Project Details

This proposal presents a novel approach to analyzing and enhancing the security of Polkadot wallets, focusing on the complex user interactions involved in account management. Our methodology encompasses:

1. **Formal Modeling**: We will create detailed models of account lifecycle processes, including:
   - Account generation
   - Access mechanisms
   - Backup procedures
   - Recovery protocols

2. **Human-Centric Analysis**: Our models will explicitly incorporate human interactions, recognizing users as integral components of the security system.

3. **Comprehensive Security Analysis**: We will conduct an in-depth examination of popular Polkadot wallets, including but not limited to:
   - Polkadot-JS Browser Extension
   - subkey
   - Polkadot-JS UI
   - Parity Signer
   - Talisman

4. **Advanced Feature Analysis**: Our analysis will cover complex features such as:
   - Multi-signatures
   - Stashing
   - Proxies
   - Anonymous proxies

5. **Vulnerability Detection**: We will implement methodologies for:
   - Sound and complete detection of unauthorized access
   - Generation of minimal counterexamples for identified exploits
   - Assessment of user lockout risks

6. **Usability Improvements**: Based on our findings, we will propose enhancements to streamline user experiences without compromising security.

7. **Automated Analysis**: Where applicable, we will develop code and setup for automated security analysis of wallet interfaces.

## Ecosystem Fit

Our project addresses a critical need within the Polkadot ecosystem by focusing on the security of user interactions with wallets. While there are existing projects that focus on smart contract security or network-level protocols, our work specifically targets the often-overlooked human element in blockchain security.

The primary beneficiaries of this project will be:
1. End-users of Polkadot wallets, who will enjoy enhanced security and improved user experiences
2. Wallet developers, who can leverage our findings to strengthen their implementations
3. The broader Polkadot ecosystem, which will benefit from increased user trust and adoption

By improving the security and usability of wallet interfaces, we contribute to the overall robustness and user-friendliness of the Polkadot network, potentially attracting more users and developers to the ecosystem.

## Team 

### Team members

- Codingsh - Lead Researcher,  Computer Science specializing in Cryptography and Security


### Contact

- **Contact Name:** Codingsh
- **Contact Email:** codingsh@pm.me


### Team's experience

Our team brings together a unique blend of expertise in cryptography, security analysis, and human-computer interaction:

- Codingsh has over 15 years of experience in cryptographic protocol analysis and has contribute by building numerous web3 protocols, I'm building strategies and technologies against Sybils and the initial draft of the Gitcoin passport

### Team Code Repos

- https://github.com/developerfred


## Development Roadmap 

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 30,000 USD

### Milestone 1 - Formal Modeling and Initial Analysis

- **Estimated Duration:** 2 months
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide comprehensive documentation of our threat model, analysis scope, and detailed methodology. |
| **0c.** | Testing Guide | We will provide a guide on how to validate and test our formal models. |
| **0d.** | Docker | We will deliver a Dockerfile to reproduce our modeling environment. |
| 1. | Formal Models | We will develop and document formal models for account generation, access, backup, and recovery processes for at least 3 major Polkadot wallets. |
| 2. | Initial Security Analysis | We will conduct a preliminary security analysis of the modeled wallets, identifying potential vulnerabilities and areas for deeper investigation. |
| 3. | Research Update | We will provide a detailed report on our progress, initial findings, and any adjustments to our methodology based on these findings. |

### Milestone 2 - Comprehensive Security Analysis

- **Estimated Duration:** 2 months
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide detailed documentation of our analysis processes and findings. |
| **0c.** | Testing Guide | We will deliver a guide on how to reproduce our security analysis results. |
| **0d.** | Docker | We will provide a Dockerfile containing all necessary tools for our security analysis. |
| 1. | Comprehensive Analysis Report | We will deliver a detailed security analysis report covering all examined wallets, including findings on unauthorized access vulnerabilities, lockout risks, and usability issues. |
| 2. | Exploit Demonstrations | We will provide minimal working examples of any identified exploits, along with detailed explanations. |
| 3. | Automated Analysis Tools | We will develop and document any automated tools created for our security analysis process. |

### Milestone 3 - Recommendations and Final Report

- **Estimated Duration:** 2 months
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide comprehensive documentation of our recommendations and final conclusions. |
| 1. | Usability Improvement Proposals | We will deliver a detailed report on recommended usability improvements for wallet interfaces, based on our security analysis findings. |
| 2. | Final Research Paper | We will produce a comprehensive research paper summarizing our methodology, findings, and recommendations, suitable for academic publication. |
| 3. | Presentation Materials | We will create presentation materials (slides, demos) for disseminating our findings to the Polkadot community. |
| 4. | Engagement Report | We will provide a summary of our engagements with the Web3 Foundation teams, including how their feedback was incorporated into our work. |

## Future Plans

Upon successful completion of this project, we envision several potential avenues for future development:

1. Extending our analysis to other blockchain ecosystems, allowing for comparative studies
2. Developing a continuous monitoring system for wallet security in the Polkadot ecosystem
3. Creating educational materials for wallet developers to help them implement best practices in security and usability
4. Exploring the possibility of standardizing security analysis processes for blockchain wallets
5. Investigating the potential for a "PolkSecurity" certification program for Polkadot wallets that meet certain security and usability standards

We are committed to ongoing collaboration with the Web3 Foundation and the broader Polkadot community to ensure the long-term impact and relevance of our work.

## Additional Information 

**How did you hear about the Grants Program?** Web3 Foundation Website

Our team is deeply committed to enhancing the security and usability of blockchain technologies. We believe that by focusing on the critical interface between users and their digital assets - the wallet - we can significantly contribute to the broader adoption and trust in blockchain systems, particularly within the Polkadot ecosystem.

We are excited about the potential impact of this project and look forward to the possibility of collaborating with the Web3 Foundation to bring it to fruition. Our proposal directly addresses the RFP for User Account Access Analysis, and we believe our approach will provide valuable insights and improvements to the Polkadot wallet ecosystem.