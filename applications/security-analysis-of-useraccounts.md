# User Account Access Security Analysis for Wallets


- **Team Name:** Zime
- **Payment Address:** Fiat (Jan 23, 2024, 11:15 AM EST)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

This application is in response to the RFP: [User Account Access Security Analysis for Wallets](https://grants.web3.foundation/docs/RFPs/user-account-access-analysis)

### Overview

This proposal outlines a comprehensive security analysis of popular Polkadot wallets (Talisman, Subkey, Polkadot JS, Nova Wallet, Subwallet) aiming to fortify the gateway to user assets and foster a more robust and user-friendly ecosystem.

Polkadot's advanced account access features, including multi-signatures, proxies, account-abstraction and social recovery mechanisms, offer unprecedented flexibility and control. However, the inherent complexity of these mechanisms can create unintended security pitfalls and introduce vulnerability. Inadequate UI/UX, intricate user interactions, and potential vulnerabilities or loopholes in underlying implementations can expose user accounts to unauthorized access, lock-out risks, and user experience challenges.

This research project would also serve as the bachelor thesis of Arsalaan Alam who is studying computer science at [Plaksha University](https://plaksha.edu.in/), India. The output research paper would also be submitted to [ACM CCS 2024](https://www.sigsac.org/ccs/CCS2024/call-for/call-for-papers.html) in the second review cycle.

### Project Details

####  Research Objectives

#### 1. Objective 1:  Extending UAAGs to Formally Model Polkadot Wallet Access:

This objective focuses on creating a detailed and accurate representation of popular Polkadot wallets, incorporating both technical aspects and human interaction elements:

- **Account Generation:** We will employ User Account Access Graphs (UAAGs) (as mentioned [here](https://people.inf.ethz.ch/rsasse/pub/AccountAccessGraphs-CCS19.pdf))to formally model the account creation process across chosen wallets (Talisman, Subkey, Polkadot JS, Nova Wallet, Subwallet), emphasizing key generation, storage, and protection strategies.

- **Access Management:** We will scrutinize user authentication and authorization procedures, identifying potential vulnerabilities involving multi-signatures and anonymous proxies.

- **Backup & Recovery Mechanisms:** We will evaluate the effectiveness and security of backup and recovery systems employed by each wallet.

  
#### 2. Objective 2: Analyze Security Vulnerabilities and User-Centric Issues:

Building upon the previous established models, this objective focuses on identifying and mitigating security vulnerabilities on the user side. We will conduct a multi-pronged security analysis encompassing:

- **Unauthorized Access Prevention:** Employ both automated and manual techniques to detect weaknesses that could enable unauthorized access, particularly those exploiting multi-signature features or anonymous proxies.
- **User Lockout Mitigation:**  Identify and assess potential scenarios where legitimate users might get locked out due to security measures or technical errors, proposing preventive solutions.
- **Streamlined Authentication:** Analyze authentication processes for redundancies that hinder user experience while maintaining robust security.


### What your project is *not* or will *not* provide or implement

**This project will not:**

1. Implement security fixes: Our role is to identify and prioritize vulnerabilities; the responsibility for implementing recommended mitigations rests with individual wallet developers or other teams.

2. Go beyond wallet analysis:. We would not be attempting full-fledged pentesting.  Our core focus remains on extending UAAGs to understand polkadot wallet access-control functionalities

### Ecosystem Fit

By safeguarding the gateways to user assets, this project strengthens the very foundation of the Polkadot ecosystem. Our comprehensive analysis and actionable recommendations will enable wallet developers to address critical vulnerabilities, enhancing user trust and confidence. Streamlined access control and intuitive security features developed through our findings will improve user experience, attracting wider adoption and fostering a more vibrant Polkadot community.


## Team :busts_in_silhouette:

### Team members

- Name of team leader: Arsalaan Alam
- Names of team members: Arsalaan Alam & Krishanu Dhar (+ [advisors](https://plaksha.edu.in/faculty-details/dr-tapas-pandit) from Plaksha University). 

### Contact

- **Contact Name:** Arsalaan Alam
- **Contact Email:** arsalaanalamcollege@gmail.com

### Legal Structure

- **Registered Address:**  (provided privately)
- **Registered Legal Entity:**   (provided privately)

### Team's experience

We are a team of two talented full-stack web3 developers and have been in the web3 ecosystem for the past 3 years. Our main domain is privacy & security and we have been developing solutions for enhancing privacy for decentralized solutions since a while. 

Arsalaan is a sophomore at university studying computer science & math and is a  fullstack web3 developer, programmer, cybersec enthusiast & also aspires to get into academia. Arsalaan has been building & contributing to projects in web3 for the last 3 years. He has participated in over 30 hackathons and won 20 of them. 
.Krish is a full-time storage & data security engineer by profession. We both have a lot of full-time experience of development and programming. 

The paper would serve as the bachelor thesis of Arsalaan Alam and would be advised by Krish and [math & cryptography professors at Plaksha University](https://plaksha.edu.in/faculty-details/dr-tapas-pandit).


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

- **Total Estimated Duration:** ~3 Months (paper to be submitted to CCS by April 28th)
- **Full-Time Equivalent (FTE):**  0.75
- **Total Costs:** 22,000 USD

### Milestone 1 

- **Estimated duration:**  ~3 Months
- **FTE:**  0.75
- **Costs:** 22,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | 	Apache 2.0 |
| **0b.** | Documentation | Document describing the threat model, scope of the analysis, and description of the approach/methodology used.  |
| **1.** | Research Paper| This would be an academic paper and the main deliverable. In this paper we wil extend UAAGs to formally model account generation (scrutinizing key management and potential privacy risks), access control (evaluating multi-sig and anonymous proxy vulnerabilities), and backup/recovery mechanisms (identifying weaknesses that hinder restoration or expose data).  |
| **2.** | Analysis Report | This analysis report leverages insights from adapted UAAG models to uncover sound and complete detection methods for unauthorized access. It provides minimal reproducible exploit examples when applicable, further assessing user experience by analyzing both temporal and definitive lockout risks and proposing mitigation strategies. Stepping beyond mere vulnerability identification, the report leverages security analysis findings to recommend specific usability improvements that streamline authentication processes without compromising security.|
| **3.** | Code | All the code we write for automated analysis will be made public to foster Open-Source collaboration. If we come up with different or abstracted versions of formalizing, we'll make those methods public too :) |
| **4.** | Engagements | We will actively collaborate with the Web3 Foundation for ongoing guidance, validation of findings, and alignment with Polkadot security best practices & specifics. |

## Future Plans

We plan to become a big contributor to the whole Polkadot ecosystem. We'll do our best to improve the ecosystem as well as the community through our both technical and non-technical endeavours!

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

