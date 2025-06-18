<p align="center"> <img src="https://github.com/user-attachments/assets/a6dcd231-63b3-492d-b3d5-42c15c321a6e" alt="Eunoia Logo"/>

## 🌟 Project Overview

**Tagline:**  
> **Eunoia is a full-stack AI giving platform, rebuilding charity from the ground up using blockchain transparency and intelligent agents.**

**Description:**  
Most startups sell AI tools to existing incumbents, but following YCombinator's ["full-stack AI"](https://www.ycombinator.com/rfs) approach, we're creating a new kind of charity platform entirely run by AI agents and decentralized smart contracts.

Our AI agents, **Compass**, autonomously scan, rank, and recommend causes aligned with a donor’s values — all in real time. Every donation is tracked on-chain from wallet to charity to real-world spend, ensuring every penny is accounted for.

**Eunoia in a Nutshell**  
- **Mission** – “Fix charity with code.” AI agents (Compass) route each donor to vetted causes and log every cent on-chain (Aptos → now Polkadot).  
- **Problem** – $7B/yr lost to fraud; 81% of donors distrust charities; legacy platforms take up to 5%.  
- **Solution** – Multi-chain donation contracts + real-time tracing + 0.20% optional fee.  
- **Status** – Aptos MVP live; ink! v6 draft contract; Polkadot SDK wired into React front-end; demo Loom online; won Polkadot prize at Consensus hackathon.  
- **Team** – 4 founders covering AI, full-stack, Rust/Web3, PM, finance; 12+ prior agents/contracts built; open-source repo public.

**Key Features:**  
- Radical Transparency  
- AI-Powered Matching  
- Direct Giving (no middlemen)  
- Ultra-Low Fees  
- Multi-Chain Support (Aptos + Polkadot)  
- Real-Time Impact Tracking  
- Secure and Verifiable

**Why Polkadot:**
Our team is more familiar with Rust, making our project naturally compatible with Polkadot’s ecosystem and developer tooling. This not only streamlines development for us but also opens access to thousands of users within the Polkadot network. By integrating with Polkadot, we enable users to donate any Polkadot-native assets, such as DOT, to charitable causes. Every donation will be transparently tracked on-chain, ensuring accountability and trust.

**Why Eunoia:**

We built Eunoia because donors deserve more than a 'thank you' — they deserve proof. One of our team members (Alex) watched a close family member get scammed while trying to adopt. They lost $10,000, and the agency misused over $400,000 in total. In the end, the family had to go to Rwanda themselves to complete the adoption with just $600 and a lawyer.

That story stuck with us. Eunoia makes sure that money meant to help actually helps. We track donations from wallet to impact, with smart contracts and AI agents doing the work in between. Whether it’s field missionaries or underfunded nonprofits, we make every cent count — and make it verifiable.


**The Pitch Video & Pitch Deck**  
[1-min video pitch](https://youtube.com/shorts/vuppID_Ak6A)

[The Pitch Deck](https://www.canva.com/design/DAGnhs6JB-Y/XFQtLITEDRy6iL1UmWYzxg/view?utm_content=DAGnhs6JB-Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h68a12e566b)



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


### 🧩 Ecosystem Fit And Long Term Values

Eunoia is a pioneering "DeFi-for-good" giving protocol, uniquely positioned to enhance the Polkadot ecosystem by addressing key challenges, expanding user adoption, and introducing innovative features. Below is an outline of how Eunoia contributes to the ecosystem and long-term value to Polkadot.

## 1. Driving User Adoption Through Simplified Interfaces
Polkadot faces challenges with declining user bases and transaction volumes, largely due to complex interfaces that deter new users. Eunoia tackles this by:
- **Simplifying Access**: Integrating Web2.5 payment solutions, allowing users to donate via familiar Web2 payment methods or Web3 crypto payments. Eunoia handles crypto conversions, ensuring seamless delivery to charities.
- **User-Friendly Design**: Offering a widget-ready interface compatible with Polkadot-Hub, making it easy for users to engage with the platform without navigating complex DeFi protocols.
- **Outcome**: By lowering the entry barrier, Eunoia attracts a broader audience, including civic donors and non-crypto-native users, boosting Polkadot’s overall user base and transaction activity.

## 2. Pioneering a Polkadot-Native Giving Protocol
As the first Polkadot-native giving platform, Eunoia fills a critical gap in the ecosystem:
- **Unique Positioning**: Unlike Web2 charity platforms reliant on payment processors with high fees and administrative overhead, Eunoia leverages Polkadot’s ink! smart contracts for transparent, low-fee, and traceable donations.
- **Real-Time Impact Tracking**: Donors gain visibility into their contributions’ impact, fostering trust and encouraging repeat engagement.
- **Outcome**: Eunoia establishes Polkadot as a hub for social-good DeFi, attracting purpose-driven users and organizations to the ecosystem.

## 3. Leveraging AI for Enhanced Functionality
Eunoia’s integration of Compass, an AI agent for curating and matching verified charities, sets it apart from competitors:
- **No Direct Competitors**: No other platform combines AI-driven charity verification with Polkadot’s smart contract capabilities, offering a unique value proposition.
- **Enhanced Match**: AI-driven curation ensures donors are matched with verified nonprofits that align with their preferences, improving the donation experience and efficiency.
- **Outcome**: This innovative feature positions Polkadot as a leader in blending AI and blockchain for social impact, drawing attention from developers and organizations exploring similar integrations.

## 4. Supporting Social-Good DAOs and Nonprofits
Eunoia targets social-good DAOs, civic donors, and underfunded nonprofits, addressing their specific needs:
- **Tailored Solutions**: Provides a low-fee, transparent platform for donations, directly benefiting underfunded organizations.
- **Community Building**: By onboarding charities and fostering donor engagement, Eunoia creates a vibrant community within Polkadot, encouraging long-term participation.
- **Outcome**: Strengthens Polkadot’s ecosystem by aligning it with socially impactful initiatives, attracting mission-driven users and organizations.

## Conclusion
Eunoia adds long-term value to Polkadot by:
- Simplifying user onboarding with Web2.5 payments and intuitive interfaces.
- Establishing a first-of-its-kind donation protocol with low fees and transparent tracking.
- Integrating AI to enhance trust and functionality.
- Supporting social-good initiatives that attract diverse users

By increasing user engagement, transaction volume, and ecosystem visibility, Eunoia positions Polkadot as a leading blockchain for social impact and DeFi innovation.

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

Our team brings a well-rounded mix of expertise in Web3, AI, and product management, backed by real-world experience in startups and nonprofit projects. Randy, an AI Engineer from McGill University, specializes in machine learning and natural language processing. Alex, a Product Manager from the University of Waterloo, offers product strategy and user experience insight. Jimmy, a Web3 Engineer, full-stack developer, and founder of Trivex (a DeFi platform on Starknet) — leads blockchain development. Together, the team has collectively build over 12 agents, smart contracts, and impact-driven applications. Fluent in eight languages and bonded by a shared passion for innovation (and Chick-Fil-A runs), this team thrives at the intersection of technology, social good, and decentralized systems.


## 📊 Development Status

We’ve already built an MVP version of our application during the EasyA Hackathon, which you can view (https://github.com/JY20/eunoia). While full Polkadot integration wasn’t completed during the hackathon due to recent upgrades to ink! v6, we successfully developed draft smart contracts and integrated the Polkadot SDK with our client web application. The smart contract integration is our next priority, and we plan to complete this during the program by deploying to testnet and then launching the application on mainnet.

### Current Status
- Aptos MVP live  
- ink! v6 smart contract drafted  
- Moonbase Alpha integration underway  
- MIT License live in GitHub repo


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

| Milestone | Key Deliverables | Cost (USD) | ETA |
|-----------|------------------|------------|-----|
| **1** | 0a - License • 0b - Documentation • 1 - ink! Smart Contract (testnet → mainnet) • 2 Wallet-connected UI | **$2,900** | Month 1 |
| **2** | 3 -  Compass AI agent • Backend APIs (matching & search) | **$2,600** | Month 2 |
| **3** | 0c - Testing + Guide • 0d - Article • 4 - Charity Onboarding • 5 - User Onboarding • 6 - Whitepaper & Tutorials | **$3,000** | Month 3 |
| **Total** | — | **$8,500** | **3 months** |

---

#### 🧮 Resource Allocation (by milestone)

| Milestone | Task Description | Hours | Rate ($/hr) | Cost ($) | Additional Expenses | Total Amount ($) |
|-----------|------------------|-------|-------------|----------|---------------------|------------------|
| **1** | Ink! smart contract development (testnet) | 60 | 25 | 1,500 | - | - |
| | Fixing and updating smart contract for mainnet | 20 | 25 | 500 | - | - |
| | UI development | 20 | 25 | 500 | - | - |
| | Hosting (cloud services for testnet) | - | - | - | 200 | - |
| | Testnet gas fees | - | - | - | 150 | - |
| | Domain registration | - | - | - | 50 | - |
| **Milestone 1 Total** | | 100 | - | 2,500 | 400 | **2,900** |
| **2** | AI model development for Compass AI | 60 | 25 | 1,500 | - | - |
| | Backend setup for APIs (AI model integration) | 20 | 25 | 500 | - | - |
| | Deployment of API backend, AI model, and database to cloud | 20 | 25 | 500 | - | - |
| | AI inference credits (cloud-based AI processing) | - | - | - | 100 | - |
| **Milestone 2 Total** | | 100 | - | 2,500 | 100 | **2,600** |
| **3** | Testing and quality assurance | 20 | 25 | 500 | - | - |
| | Onboarding charities (reach outs, board meetings, integration setup) | 60 | 25 | 1,500 | - | - |
| | Content creation (brand building, social media posts, marketing campaigns) | 20 | 25 | 500 | - | - |
| | Marketing campaigns and events | - | - | - | 200 | - |
| | X Premium subscription (for enhanced visibility) | - | - | - | 200 | - |
| | Merchandise (promotional materials) | - | - | - | 80 | - |
| | Additional gas fees (mainnet transactions) | - | - | - | 20 | - |
| **Milestone 3 Total** | | 100 | - | 2,500 | 500 | **3,000** |
| **Grand Total** | | 300 | - | 7,500 | 1,000 | **8,500** |

>### Notes
>- **Hourly Rate**: All development, testing, and content creation tasks are billed at $25/hour.
>- **Additional Expenses**: Include non-labor costs such as hosting, gas fees, domain registration, AI inference credits, marketing, X Premium subscription, merchandise, and extra gas for transactions.
>- **Milestone Breakdown**:
  >   - **Milestone 1**: Smart contract development, UI, and infrastructure setup for testnet and mainnet.
  >   - **Milestone 2**: AI model development, backend API setup, and cloud deployment.
  >   - **Milestone 3**: Testing, charity onboarding, content creation, and marketing efforts.
>- **Why this split?**  
>     -  Front-loads core infrastructure (Milestone 1), isolates the AI differentiator (Milestone 2), and reserves verification + go-to-market tasks for Milestone 3.  


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


