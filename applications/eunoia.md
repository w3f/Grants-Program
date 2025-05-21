# 📝 Name of your Project

## 🌟 Project Overview

**Tagline:**  
Eunoia is an AI-powered, multi-chain giving platform that combats charity fraud by providing real-time, on-chain donation transparency, low fees, and smart cause-matching agents.

**Eunoia in a Nutshell**  
- **Mission** – “Fix charity with code.” AI agents (Compass) route each donor to vetted causes and log every cent on-chain (Aptos → now Polkadot).  
- **Problem** – $7B/yr lost to fraud; 81% of donors distrust charities; legacy platforms take up to 5%.  
- **Solution** – Multi-chain donation contracts + real-time tracing + 0.20% optional fee.  
- **Status** – Aptos MVP live; ink! v6 draft contract; Polkadot SDK wired into React front-end; demo Loom online; won Polkadot prize at Consensus hackathon.  
- **Team** – 5 founders covering AI, full-stack, Rust/Web3, PM, finance; 12+ prior agents/contracts built; open-source repo public.

**Description:**  
Eunoia is an AI-powered, multi-chain giving platform fixing the broken charity system. We built Eunoia using smart AI agents called Compass that scan, rank, and recommend causes aligned with a donor’s values — all in real time. Every donation is tracked on-chain from wallet to charity to real-world spend, ensuring every penny is accounted for.

**Key Features:**  
- Radical Transparency  
- AI-Powered Matching  
- Direct Giving (no middlemen)  
- Ultra-Low Fees  
- Multi-Chain Support (Aptos + Polkadot)  
- Real-Time Impact Tracking  
- Secure and Verifiable

**Why Polkadot:**  
We’re deploying to **Moonbeam**, allowing DOT and native stablecoins to be sent directly to vetted charities. We’ll use **Subscan** for event indexing and **Plaza Hub** for donation stats. Future integrations may include **KILT** for charity verification and **XCM** for multichain routing.



- (Optional but **huge bonus points**): [1-min video pitch](https://www.ycombinator.com/video/)

### 🔍 Project Details

### Tech Stack  

💻 **Frontend:** (`eunoia_web`)
- Framework & Libraries: React (Hooks, Context API)
- UI Components: Material UI (MUI)
- API Communication: Axios
- State Management: React Context API, Component State
- Blockchain Interaction: 
  - Polkadot: `@polkadot/api`, `@polkadot/extension-dapp`


⚙️ **Backend:** (`eunoia_backend`)
- Framework: Django (Python)
- API: Django REST Framework
- Database: SQLite (development), PostgreSQL (production)
- Image Handling: Pillow
- CORS Handling: `django-cors-headers`
- AI/ML Integration:
  - Libraries: `sentence-transformers`, `scikit-learn`, `nltk`
  - Vector Database: FAISS or Pinecone

🔗 **Smart Contracts:** (`Polkadot Network`)
- Language: ink! (Rust-based eDSL)
- Smart Contract: `eunoia2`
- Features:
  - Charity registration
  - Donations in native tokens
  - Event emission: `DonateEvent`, `CharityRegisteredEvent`




### Demo  
- [Demo Video (Loom)](https://www.loom.com/share/712dbee1166144769c994e3c1ca12746?sid=3d42edec-e899-4bf7-a237-efde4cfce395)  
- [GitHub Repo](https://github.com/JY20/eunoia)

### API / Data Models  
- `/donate` – trigger contract  
- `/charities` – list charities  
- `/match` – Compass AI match scores

### Not Included  
- Not an NFT project or DAO  
- Not a pooled grant platform

(NEEDS TO BE DONE STILL: AI) 
- **AI in Tech Stack?:** sentence-transformers, sklearn  (What was used for AI Agents? OpenAI API)
- Documentation of core components, protocols, architecture, etc. to be deployed
- Mockups/designs of any UI components



### 🧩 Ecosystem Fit

**Where does this fit?**  
- “DeFi-for-good” layer on Moonbeam  
- First Polkadot-native donation protocol  
- Widget-ready for Plaza/Polkadot-Hub

**Target Audience**  
- Social-good DAOs  
- Civic donors  
- Underfunded nonprofits

**Need Met**  
- Transparent, traceable, low-fee donations  
- Real-time donor visibility and impact tracking

**Competitors?**  
None with Compass AI + smart contracts for charity.

**Why it doesn’t exist yet?**  
Social good ≠ DeFi yet; tech stack is complex (ink! + AI + full-stack).

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
- Alejandro Garcia

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/jimmy-yan-jy/
- https://www.linkedin.com/in/randyelh/
- https://www.linkedin.com/in/alexsalsali/
- https://www.linkedin.com/in/alejandrogarciapolo/

### Team Code Repos

- https://github.com/JY20/eunoia

Please also provide the GitHub accounts of all team members:

- https://github.com/JY20
- https://github.com/RandyHaddad
- https://github.com/asalsali 
- https://github.com/maestromaximo 

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

### Success KPIs
- Smart contract launched on Polkadot mainnet
- Web application launched 
- Compass AI launched
- 3 Charities onboarded
- 20 Unique donor wallets 
- 2 Marketing/Giving events
- Whitepaper and tutorials available for community

### Overview

- **Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1.5 (3 members x 50% part-time)
- **Total Costs:** $8,500 USD

> Note that deliverables 0a to 0d are mandatory. Please adapt their specification to your project.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can... |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an **article** that explains what was done/achieved as part of the grant. |
| 1. | Mainnet Smart Contract Launch| Deploy Eunoia on a Polkadot parachain (e.g. Moonbeam) with lastest smart contracts, users able to donate.|
| 2. | Mainnet UI + API Launch| Deploy Eunoia with all UI and APIs complete and launch for Polkadot mainnet, no errors during the user interaction.|
| 3. | Compass Launch| Compass AI agent is the tool to support users to find the charities to donate. It will be complete and launch along with the mainnet instance. User are able obtain charities matches, 80% correct matching rate.|
| 4. | Charities Onboarding| With our connections and over the hacakthon we had reached out few charities already. We want to complete the onboarding of them into Eunoia with the mainnet launched. Over 3 charties are onboarded on Eunoia platform.|
| 5. | Users Onboarding| After charities gets onboarded we will start working with universities, clubs, and organizations to promote the giving towards the causes. With over 20 users onboarded and donate towards causes.|
| 6. | Eunoia Documents| A lot of users will new to web3 giving platform (Eunoia). So we provide the documents including white paper and tutorials to guide these new users through. Whitepaper and tutorials documents are available to be viewed by the communtiy.|

### 💰 Budget Breakdown

Please provide a breakdown of your budget by milestone:

| Milestone | Deliverables | Cost (USD) | Estimated Completion |
| --- | --- | --- | --- |
| 1 | 0a, 0b, 1, 2, 3 | $5,000 | 1.5 months |
| 2 | 0c, 0d, 4, 5, 6 | $3,500 | 1.5 months |
| **Total** | | **$8,500** | **3 months** |

Resources
- 100 hrs smart contracts + UI development and launch =  100hrs * 25$/hr = $2,500
- 100 hrs AI agent + backend api development and launch =  100hrs * 25$/hr = $2,500
- 100 hrs business devevelopment, onboarding charities & users =  100hrs * 25$/hr = $2,500
- $1,000 for tools, domains, gas fees = $1,000
  - $200 for hosting APIs servers
  - $10 for domain
  - $50 for gas fees to onboard initital smart contract, users, and charities
  - $100 for AI tokens for the agents
  - $180 for dev tool subscription
  - $105 for X Premium subscription
  - $355 for marketing events (e.g merch, 1:1 donation matching)

## 🔮 Future Plans

- Expansion: Launch Compass AI for deeper personalization, partner with faith-based donor networks, integrate stablecoin off-ramps.
- Growth: Apply to Gitcoin, government, aptos grants, funding from universities to contiune the growth of the project.
- Vision: Become the go-to transparent giving layer across multichain ecosystems and go to platform for giving for causes.
- Goal: For this program we want to complete and launch Eunoia on mainnet, for the future our focus will be switching from product development to go to market strategies.

## ℹ️ Additional Information

- Built in 72 hours at Consensus EasyA Hackathon
- Won the Polkadot integration challenge
- Team has experience across blockchain, AI, product, and nonprofit ops
- We believe Eunoia is the first Web3-native platform purpose-built for radically accountable giving

"Charity is broken. We're fixing it with code."


