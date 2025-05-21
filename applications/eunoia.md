# 📝 Name of your Project

## 🌟 Project Overview

Please provide the following:

- If the name of your project is not descriptive, a tagline (one sentence summary)
```
Eunoia is an AI-powered, multi-chain giving platform that combats charity fraud by providing real-time, on-chain donation transparency, low fees, and smart cause-matching agents.
```
- A brief description of your project
```
Eunoia is an AI-powered, multi-chain giving platform fixing the broken charity system. Every year, over $7B is lost to fraud, mismanagement, and opaque middlemen in the giving space. Traditional platforms charge up to 5% in fees, while 81% of donors report a lack of trust in nonprofits. Eunoia changes that by putting radical transparency at the core of giving.

We built Eunoia using smart AI agents called Compass that scan, rank, and recommend causes aligned with a donor’s values — all in real time. Donors simply describe what matters to them, and our agents handle the rest. Every donation is tracked on-chain from wallet to charity to real-world spend, ensuring every penny is accounted for.

Built initially on Aptos for fast, low-cost transactions and now expanding to Polkadot for its interoperability and cross-chain asset transfers, Eunoia ensures maximum transparency and accessibility for charities and donors worldwide. Smart contracts manage donations, fund distributions, and auditing, while our AI infrastructure filters, verifies, and optimizes cause matching based on donor preferences and impact data.

Key features include:

Radical Transparency: All donations and fund flows recorded on-chain

AI-Powered Matching: Agents match donors with causes in real time

Direct Giving: No middlemen — funds go straight to verified charities or recipients

Ultra-Low Fees: 0.20% optional “Amplify Impact” fee to fund platform growth

Multi-Chain Support: Currently on Aptos and Polkadot, with more coming

Real-Time Impact Tracking: Donors track their funds' journey and outcomes instantly

Secure and Verifiable: Auditable smart contracts and verified recipient wallets

Eunoia empowers small orgs, field workers, and missionaries who are often overlooked by large platforms while restoring donor trust with verifiable, on-chain proof of impact.
```
- An indication of how your project relates to / integrates into Polkadot
```
Our team is more familiar with Rust, making our project naturally compatible with Polkadot’s ecosystem and developer tooling. This not only streamlines development for us but also opens access to thousands of users within the Polkadot network. By integrating with Polkadot, we enable users to donate any Polkadot-native assets, such as DOT, to charitable causes. Every donation will be transparently tracked on-chain, ensuring accountability and trust.
```
- An indication of why your team is interested in creating this project
```
```
- (Optional but **huge bonus points**): [1-min video pitch](https://www.ycombinator.com/video/)

### 🔍 Project Details

We expect applicants to have a solid idea about the project's expected final state. Therefore, please submit (where relevant):

- An overview of the technology stack to be used
```
💻 Frontend (`eunoia_web`)
- Framework & Libraries: React (Hooks, Context API)
- UI Components: Material UI (MUI)
- API Communication: Axios
- State Management: React Context API, Component State
- Blockchain Interaction: 
  - Polkadot: `@polkadot/api`, `@polkadot/extension-dapp`
⚙️ Backend (`eunoia_backend`)
- Framework: Django (Python)
- API: Django REST Framework
- Database: SQLite (development), PostgreSQL (production)
- Image Handling: Pillow
- CORS Handling: `django-cors-headers`
- AI/ML Integration:
  - Libraries: `sentence-transformers`, `scikit-learn`, `nltk`
  - Vector Database: FAISS or Pinecone
🔗 Blockchain Integration (`Polkadot Network`)
- Language: ink! (Rust-based eDSL)
- Smart Contract: `eunoia2`
- Features:
  - Charity registration
  - Donations in native tokens
  - Event emission: `DonateEvent`, `CharityRegisteredEvent`
```
- Documentation of core components, protocols, architecture, etc. to be deployed
- Any PoC/MVP or other relevant prior work or research on the topic
- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- What your project is *not* or will *not* provide or implement
  - This is a place for you to manage expectations and clarify any limitations

### 🧩 Ecosystem Fit

Help us locate your project in the Polkadot landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Polkadot ecosystem?
  - If so, how is your project different?
  - If not, why might such a project not exist yet?

> **Note**: We prioritize projects building on Plaza/Polkadot Hub, games, and DeFi applications, though all types of projects will be considered.

## 👥 Team

- **Team Name:** Eunoia
- **Contact Name:** Jimmy Yan
- **Contact Email:** jimmyyan1337@gmail.com
- **Website:** https://github.com/JY20/eunoia

### Team members

- Jimmy Yan
- Randy Haddad
- Alex Salsali

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/jimmy-yan-jy/
- https://www.linkedin.com/in/randyelh/
- https://www.linkedin.com/in/alexsalsali/

### Team Code Repos

- https://github.com/JY20/eunoia

Please also provide the GitHub accounts of all team members:

- https://github.com/JY20
- https://github.com/RandyHaddad
- https://github.com/asalsali 

### Team's experience

Please describe the team's relevant experience, including any previous blockchain projects or contributions to the ecosystem.

```
Our team brings a well-rounded mix of expertise in Web3, AI, and product management, backed by real-world experience in startups and nonprofit projects. Randy, an AI Engineer from McGill University, specializes in machine learning and natural language processing. Alex, a Product Manager from the University of Waterloo, offers product strategy and user experience insight. Jimmy, a Web3 Engineer, full-stack developer, and founder of Trivex (a DeFi platform on Starknet) — leads blockchain development. Together, the team has collectively built over 12 agents, smart contracts, and impact-driven applications. Fluent in eight languages and bonded by a shared passion for innovation (and Chick-Fil-A runs), this team thrives at the intersection of technology, social good, and decentralized systems.
```

## 📊 Development Status

If you've already started implementing your project, please provide a link and a description of the code. Otherwise, please provide some documentation on the research and other work you have conducted before applying.
```
We’ve already built an MVP version of our application during the EasyA Hackathon, which you can view (https://github.com/JY20/eunoia). While full Polkadot integration wasn’t completed during the hackathon due to recent upgrades to ink! v6, we successfully developed draft smart contracts and integrated the Polkadot SDK with our client web application. The smart contract integration is our next priority, and we plan to complete this during the program by deploying to testnet and then launching the application on mainnet.
```

## 📅 Development Roadmap

This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, please describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality.

**Important notes:**
- Each milestone is capped at **$5,000 USD**
- Milestones must be delivered within **3 months** of approval
- The maximum grant amount is **$10,000 USD** per application (up to **$15,000 USD** per project in exceptional cases)
- You will only receive payment after successful milestone delivery

### Overview

- **Estimated Duration:** Duration of the whole project (maximum 3 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project
- **Total Costs:** Requested amount in USD for the whole project (maximum $10,000 USD)

> Note that deliverables 0a to 0d are mandatory. Please adapt their specification to your project.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can... |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article** that explains what was done/achieved as part of the grant. |
| 1. | Feature X | We will create a feature that will... (Please describe in detail) |
| 2. | Feature Y | The Y feature will... (Please describe in detail) |
| 3. | Feature Z | The Z feature will... (Please describe in detail) |

### 💰 Budget Breakdown

Please provide a breakdown of your budget by milestone:

| Milestone | Deliverables | Cost (USD) | Estimated Completion |
| --- | --- | --- | --- |
| 1 | Features X, Y | $5,000 | 1.5 months |
| 2 | Feature Z | $5,000 | 1.5 months |
| **Total** | | **$10,000** | **3 months** |

Make sure you show clearly what the funding is going towards (e.g. 30 hours of a full time employee at $X / hour).

## 🔮 Future Plans

Please include:

- How you intend to continue development after the Fast-Grant
- Any plans for seeking additional funding (other grants, VC funding, etc.)
- Your vision for the project's growth and impact in the Polkadot ecosystem

## ℹ️ Additional Information

Here you can add any additional information that you think is relevant to this application, such as:

- Work you have already done
- If there are any other teams who have already contributed to the project
- Other funding you may have applied for

Remember that the Fast-Grants Programme is designed as a first step for promising projects. We're looking for projects that can continue to grow beyond this initial funding.
