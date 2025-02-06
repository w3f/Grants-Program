# Decentralized Data Annotation Platform (DAP)

- **Team Name:** Train AI Group
- **Payment Details:**
  - **DOT**:16PDdKmaQzqHEKRob87vEsjHS4p9hHV7AcmTnai7hFVkchcr
  - **Payment**: In case of payment in **USDC**: 16PDdKmaQzqHEKRob87vEsjHS4p9hHV7AcmTnai7hFVkchcr
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1, 2 or 3
  Level 2

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide the name and/or pull request of said grant on the first line of this section.

### Overview

**Tagline**

Empowering AI Development with Decentralized, Data Annotation Services on Polkadot.

**Brief Description**

The **Decentralized Data Annotation Platform (DAP)** is a blockchain-powered service built on Polkadot, designed to provide high-quality, privacy-preserving data annotation for AI development. The platform connects AI companies and researchers with annotators who perform tasks like labeling images, tagging text, or categorizing audio. Annotators earn rewards for their work, while data providers receive accurately annotated datasets to train and improve AI models. By leveraging Polkadot's interoperability and scalability, DAP ensures a transparent, fair, and efficient annotation process, while advanced cryptographic tools like zero-knowledge proofs (ZKPs) protect data privacy and verify annotation quality.

**Integration into Polkadot**
DAP integrates into the Polkadot ecosystem by:
Utilizing Substrate for building custom blockchain logic and smart contracts.
Leveraging Polkadot's parachain architecture for scalability and cross-chain interoperability.
Using Polkadot's native token (DOT) for rewards and transactions, with potential integration of other parachain assets.
Employing off-chain workers for secure, privacy-preserving data processing.
**Team Motivation**
Our team is passionate about creating ethical, decentralized solutions for AI development. We believe that data annotation is a critical yet often overlooked component of AI, and we aim to empower annotators while ensuring data privacy and fairness. By building on Polkadot, we can create a scalable, interoperable platform that aligns with the Web3 vision of user-owned data and decentralized ecosystems.

### Project Details

**Mockups/Designs**  
[View on Figma](https://www.figma.com/design/hOT2QVypSyJk9El7GHeAcb/Polkadot-DAP?m=auto&t=ZByXTVY9jPKJAxXG-1)

**Data Models / API Specifications**

**Data Model:**

- **Dataset**: Contains metadata about the dataset (e.g., type, size, annotation guidelines).
- **AnnotationTask**: Represents a single annotation task, including task ID, annotator ID, and status.
- **Reward**: Tracks rewards earned by annotators, including payment status and transaction hash.

**API Specifications:**

- `submitAnnotation(taskId, annotationData)`: Submits an annotation for a specific task.
- `verifyAnnotation(taskId, zkpProof)`: Verifies the quality of an annotation using zero-knowledge proofs.
- `distributeReward(annotatorId, amount)`: Distributes rewards to annotators via smart contracts.

**Technology Stack**

- **Blockchain**: Substrate (Polkadot SDK) for smart contracts and on-chain logic.
- **Storage**: IPFS or Crust Network for decentralized data storage.
- **Cryptography**: Zero-knowledge proofs (ZKPs) for privacy-preserving verification.
- **Frontend**: Express.js for the annotator and data provider interfaces.
- **Backend**: Node.js for off-chain computation and API management.
- **AI Tools**: Federated learning for AI-assisted annotation suggestions.

**Core Components**

- **Decentralized Storage**: Encrypted datasets stored on IPFS or Crust Network.
- **Annotation Engine**: AI-assisted tools for efficient annotation.
- **Smart Contracts**: Manage task assignment, reward distribution, and dispute resolution.
- **Verification Layer**: ZKPs for privacy-preserving quality assurance.
- **Interoperability Module**: Enables cross-chain data sharing and integration with other parachains.

**PoC/MVP**

- **PoC**: A working prototype demonstrating task assignment, annotation submission, and reward distribution using Substrate and IPFS.
- **MVP**: A functional platform with basic annotation tasks (e.g., image labeling) and ZKP-based verification.

**What DAP Is Not**

- DAP is currently **not** a data marketplace for buying and selling raw data.
- DAP does **not** handle tokenomics or governance beyond reward distribution.
- DAP is **not** a centralized AI training platform; it focuses solely on annotation services.

### Ecosystem Fit

**Where and How Does DAP Fit into the Ecosystem?**  
DAP addresses the growing need for high-quality, ethically sourced data in AI development. It integrates into the Polkadot ecosystem as a decentralized service layer for data annotation, complementing existing parachains and dApps focused on AI, data storage, and privacy.

**Target Audience**

- **AI Companies and Researchers**: Need annotated datasets for training AI models.
- **Annotators**: Individuals (gig workers) or communities seeking flexible, rewarding annotation work.
- **Web3 Developers**: Building privacy-focused AI applications on Polkadot.

**Needs Addressed**

- **High-Quality Data Annotation**: AI models require accurately labeled data, which is often expensive and time-consuming to produce.
- **Data Privacy**: Traditional annotation platforms centralize data, raising privacy concerns.
- **Fair Compensation**: Annotators are often underpaid and lack transparency in earnings.

**Evidence of Need**

- **Scientific Articles**: Studies highlight the importance of data quality in AI model performance (e.g., _"Data Quality for Machine Learning"_ by Sculley et al.).
- **Forum Discussions**: Polkadot and Web3 communities have expressed interest in decentralized AI solutions.
- **Case Studies**: Centralized annotation platforms like Amazon Mechanical Turk face criticism for low wages and lack of transparency.

**Similar Projects in Polkadot/Kusama**

- **Ocean Protocol**: Focuses on data monetization but does not provide annotation services.
- **KILT Protocol**: Offers decentralized identity solutions but does not address data annotation.

**Differentiation**  
DAP is unique in its focus on data annotation as a service, combining privacy-preserving technologies (e.g., ZKPs) with Polkadot's interoperability. Unlike Ocean Protocol, DAP does not monetize raw data but instead provides a platform for annotators and AI developers to collaborate ethically.

**Similar Projects in Related Ecosystems**

- **Labelbox (Centralized)**: A popular annotation platform but lacks decentralization and privacy features.
- **Hive (Blockchain-Based)**: Focuses on AI training but does not specialize in annotation services.

DAP stands out by leveraging Polkadot's strengths to create a decentralized, privacy-first annotation platform that addresses the limitations of both centralized and blockchain-based alternatives.

## Team :busts_in_silhouette:

### Team members

- **Team Leader**: Mike Boutin
- **Researcher/Project Manager**: Emmanuel Isitor
- **AI/ML Engineer**: Ivan Malyshev
- **Frontend Developer**: Alex Bilozor
- **UX/UI**: Nikki

### Contact

**Contact Name**  
Emmanuel Isitor  
**Contact Email**  
sunasunday111@gmail.com  
**Website**  
[https://github.com/emmanueleclipse](https://github.com/emmanueleclipse)

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

**Mike Boutin**

- **Role**: Full-Stack JavaScript Developer
- **Experience**: 15 years of expertise in full-stack development, with a passion for innovative technologies and software solutions.
- **Skills**: Proficient in JavaScript, React, React-Native, Node.js, and HTML5 game development.  
  Mike brings a wealth of experience in building scalable, user-friendly applications. His expertise in JavaScript and React is instrumental in developing the platform’s frontend and ensuring a seamless user experience.

**Ivan Malyshev**

- **Role**: Blockchain Developer
- **Experience**: 10 years of in-depth experience in blockchain development, specializing in decentralized applications and secure blockchain systems.
- **Skills**: Expertise in Rust, C, and C++, with a strong focus on building robust and secure blockchain solutions.  
  Ivan’s deep knowledge of blockchain technology and programming languages like Rust will be critical for developing the platform’s smart contracts and ensuring its security and scalability.

**Emmanuel Isitor O**

- **Role**: Blockchain Researcher
- **Experience**: 8 years of experience as a blockchain researcher, with a focus on decentralized systems and cryptographic protocols.  
  Isitor’s research expertise guides the platform’s design, ensuring it leverages the latest advancements in blockchain technology and cryptography, such as zero-knowledge proofs (ZKPs) and privacy-preserving mechanisms.

**Alex Bilozor**

- **Role**: Front-End Developer
- **Experience**: 5 years of experience specializing in front-end development, with a focus on creating intuitive and responsive user interfaces.  
  Alex works on the development of the platform’s frontend, ensuring it is visually appealing, user-friendly, and optimized for performance across devices.

**Nikki**

- **Role**: UI/UX Designer
- **Experience**: Expertise in user interface (UI) and user experience (UX) design, with a focus on creating engaging and intuitive designs for web and mobile applications.  
  Nikki designed the platform’s user interface, ensuring it is both aesthetically pleasing and easy to navigate. Her work will be critical in creating a seamless experience for annotators and data providers.

### Team Code Repos

- https://github.com/{your_organisation}/{project_1}
- https://github.com/{your_organisation}/{project_2}

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/{team_member_1}
- https://github.com/{team_member_2}

### Team LinkedIn Profiles (if available)

https://www.linkedin.com/in/emmanueleclipsewebsite/

## Development Status :open_book:

**MVP in Progress**

- UI/UX design and most frontend completed.
- Backend development underway, transitioning to traditional authentication (Google login, email/password).

**Frontend Repository**: [Mikael-Frontend](https://github.com/Train-AI-Group/Mikael-Frontend/)  
**Backend Repository**: [Backend Node.js](https://github.com/Train-AI-Group/backend-nodejs/)  
**Frontend Live Demo**: [Mikael-Frontend Demo](https://mikael-frontend.vercel.app/)

---

**Research and Prior Work**

**Ethical and Practical Challenges of Data Annotation**

- **"Exploring the Complex Ethical Challenges of Data Annotation"** (Stanford HAI)

  - Link: [Read Article](https://hai.stanford.edu/news/exploring-complex-ethical-challenges-data-annotation)
  - **Relevance**: This article delves into the ethical dilemmas surrounding data annotation, such as bias, consent, and fair compensation. It underscores the need for platforms like DAP that prioritize transparency, fairness, and user control.

- **"The Challenge of Data Annotation in Deep Learning—A Case Study on Whole Plant Corn Silage"** (MDPI Sensors)
  - Link: [Read Case Study](https://www.mdpi.com/1424-8220/22/4/1596)
  - **Relevance**: This case study highlights the practical challenges of data annotation in specialized domains, such as agriculture. It emphasizes the need for scalable and domain-specific annotation solutions, which DAP aims to provide.

**AI and Data Annotation**

- **"Large Language Models for Data Annotation: A Survey"** (arXiv)

  - Link: [Read Survey](https://arxiv.org/html/2402.13446v1)
  - **Relevance**: This survey explores the use of large language models (LLMs) for automating data annotation tasks. It provides insights into how DAP can integrate AI-assisted tools to improve annotation efficiency while maintaining human oversight.

- **"The Hidden Costs of Data Annotation"** (Analytics Vidhya)

  - Link: [Read Blog Post](https://www.analyticsvidhya.com/blog/2023/12/what-is-data-annotation/)
  - **Relevance**: This blog post discusses the financial and operational challenges of data annotation, including the costs of manual labor and quality control. It reinforces the need for cost-effective and scalable solutions like DAP.

- **"Why Data Annotation is the Backbone of AI"** (Medium)
  - Link: [Read Article](https://medium.com/@lewis.areosis/why-data-annotation-is-the-backbone-of-ai-6a72a694db43)
  - **Relevance**: This article emphasizes the foundational role of data annotation in AI development. It highlights the importance of high-quality annotations for training accurate models, which aligns with DAP’s mission.

---

**Prototype/Mockups**

- **Prototype (Frontend UI)**: [Mikael-Frontend Demo](https://mikael-frontend.vercel.app/)
- **Mockups**: [View on Figma](https://www.figma.com/design/hOT2QVypSyJk9El7GHeAcb/Polkadot-DAP?m=auto&t=ZByXTVY9jPKJAxXG-1)

## Development Roadmap :nut_and_bolt:


### Overview

**Total Estimated Duration**: 2 months  
**Full-Time Equivalent (FTE)**: 3 FTE  
**Total Costs**: $30,000 USD  
**DOT Allocation**: 50% (15,000 USD in vested DOT)

### Milestone 1 Annotation Interface Development

**Estimated Duration**: 3 weeks  
**Full-Time Equivalent (FTE)**: 2  
**Costs**: $12,000 USD

**Objective** Develop a user-friendly interface for annotators and data providers.

| Number  | Deliverable                   | Specification                                                                                                                                                                                          |
| ------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0a.** | **License**                   | Apache 2.0 / GPLv3 / MIT / Unlicense. See the delivery guidelines for details.                                                                                                                         |
| **0b.** | **Documentation**             | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up the annotation interface and perform basic tasks.                                      |
| **0c.** | **Testing and Testing Guide** | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                        |
| **0d.** | **Docker**                    | We will provide a Dockerfile(s) that can be used to test the annotation interface.                                                                                                                     |
| **1.**  | **Frontend Interface**        | - Built with React.js or similar framework. <br> - Allows annotators to view, accept, and complete tasks. <br> - Provides data providers with a dashboard for dataset uploads and progress monitoring. |
| **2.**  | **Backend System**            | - Manages tasks, annotations, and user accounts. <br> - Integrates with blockchain for task assignment and reward tracking.                                                                            |
| **3.**  | **AI-Assisted Tools**         | - Pre-labeling and auto-suggestion features. <br> - Lightweight ML models for real-time assistance.                                                                                                    |
| **4.**  | **Documentation**             | - User guide for annotators and data providers. <br> - Developer documentation for frontend and backend systems.                                                                                       |

### Milestone 2: Core Blockchain Infrastructure

- **Estimated Duration:** 3 weeks
- **FTE (Full-Time Equivalent):** 3
- **Costs:** $12,000 USD

**Objective:** Set up foundational blockchain infrastructure for task management and rewards.

| Number  | Deliverable                    | Specification                                                                                                                                                            |
| ------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0a.** | **License**                    | Apache 2.0 / GPLv3 / MIT / Unlicense. See the delivery guidelines for details.                                                                                           |
| **0b.** | **Documentation**              | We will provide both inline documentation of the code and a basic tutorial that explains how to set up the Substrate-based blockchain and interact with smart contracts. |
| **0c.** | **Testing and Testing Guide**  | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.          |
| **0d.** | **Docker**                     | We will provide a Dockerfile(s) that can be used to test the core infrastructure.                                                                                        |
| **1.**  | **Substrate-Based Blockchain** | Set up a Substrate-based blockchain for managing annotation tasks and rewards.                                                                                           |
| **2.**  | **Smart Contracts**            | Implement smart contracts for task assignment, reward distribution, and dispute resolution.                                                                              |
| **3.**  | **Decentralized Storage**      | Integrate with IPFS or Crust Network for secure, decentralized data storage.                                                                                             |
| **4.**  | **API Documentation**          | Provide technical specifications for the blockchain and smart contracts. Deliver API documentation for developers to interact with the platform.                         |

### Milestone 3: Quality Assurance and Verification

- **Estimated Duration:** 2 weeks
- **FTE (Full-Time Equivalent):** 3
- **Costs:** $6,000 USD

**Objective:** Set up foundational blockchain infrastructure for task management and rewards.

| Number  | Deliverable                      | Specification                                                                                                                                                   |
| ------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | **License**                      | Apache 2.0 / GPLv3 / MIT / Unlicense. See the delivery guidelines for details.                                                                                  |
| **0b.** | **Documentation**                | We will provide both inline documentation of the code and a basic tutorial that explains how to use the quality assurance and verification features.            |
| **0c.** | **Testing and Testing Guide**    | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | **Docker**                       | We will provide a Dockerfile(s) that can be used to test the quality assurance and verification features.                                                       |
| **0e.** | **Article**                      | We will publish an article/workshop that explains the development and achievements of the Decentralized Data Annotation Platform (DAP) on Polkadot.             |
| **1.**  | **Consensus Mechanism**          | Implement a cross-verification system for annotations to ensure accuracy. Include incentives for high-quality annotations.                                      |
| **2.**  | **Zero-Knowledge Proofs (ZKPs)** | Develop privacy-preserving verification of annotation quality using ZKPs. Ensure data security and compliance with privacy regulations.                         |
| **3.**  | **Dispute Resolution System**    | Build a smart contract-based system for resolving disputes between annotators and data providers. Ensure transparency and fairness in the resolution process.   |
| **4.**  | **Documentation**                | Provide quality assurance guidelines for annotators. Deliver verification process documentation for developers and users.                                       |

...

## Future Plans

**Long-Term Maintenance and Development**  
To ensure the long-term sustainability of the Decentralized Data Annotation Platform (DAP), we plan to adopt a multi-faceted financing strategy:

- **Grant Funding**: Continue applying for grants from organizations like the Web3 Foundation, Polkadot Treasury, and other blockchain-focused initiatives to fund ongoing development and maintenance.
- **Revenue Model**: Introduce a small platform fee for data providers and AI companies using the platform. These fees will be reinvested into platform maintenance, feature development, and community incentives.
- **Tokenomics (Future)**: While not part of this grant application, we may explore a utility token model in the future to incentivize participation, governance, and ecosystem growth.
- **Partnerships**: Collaborate with AI companies, research institutions, and blockchain projects to secure funding and expand the platform’s use cases.

---

**Short-Term Plans**  
In the short term, we will focus on:

- **Platform Launch**: Deploy the MVP on Polkadot’s testnet and gather feedback from early users (annotators and data providers).
- **Community Building**: Engage with the Polkadot and AI communities through forums, social media, and webinars to promote the platform and onboard users.
- **Feature Enhancements**: Iterate on the platform based on user feedback, adding features like advanced AI-assisted tools, multi-language support, and integration with additional parachains.
- **Partnerships**: Partner with AI startups, academic institutions, and data providers to pilot the platform and demonstrate its value.

---

**Long-Term Vision**  
Our long-term vision for DAP is to become the go-to platform for ethical, decentralized data annotation in the AI industry. We aim to:

- **Expand Use Cases**: Support a wide range of annotation tasks, including image labeling, text tagging, audio transcription, and video analysis.
- **Cross-Chain Integration**: Leverage Polkadot’s interoperability to integrate with other blockchains and data marketplaces, enabling seamless data sharing and collaboration.
- **Global Reach**: Build a global community of annotators, particularly in underserved regions, to provide fair and flexible work opportunities.
- **AI Ecosystem Growth**: Position DAP as a critical infrastructure layer for AI development, enabling the creation of high-quality, ethically sourced datasets.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](https://grants.web3.foundation/docs/referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDC))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

**How Did You Hear About the Grants Program?**  
We learned about the Web3 Foundation Grants Program through:

- The Web3 Foundation website and official announcements.
- Discussions on Polkadot’s Element (formerly Riot) channels.
- Recommendations from other teams in the Polkadot ecosystem.

---

**Work Already Done**

- **Research**: Conducted extensive research on data annotation workflows, blockchain integration, and privacy-preserving technologies.
- **Prototype**: Developed a working prototype demonstrating task assignment, annotation submission, and reward distribution using Substrate and IPFS.
- **MVP in Progress**: UI/UX design and most frontend completed. Backend development underway, transitioning to traditional authentication (Google login, email/password).

---

**Contributions from Other Teams**  
Currently, the project is self-funded by the core team. We have not received financial contributions from other teams or organizations.
