# 📝 ink! AIDE

## 🌟 Project Overview

- **Tagline:** AI-powered web IDE for ink! contracts, inspired by Remix and built for the AI era.
- This project is a web-based IDE tailored for the ink! smart contract language. It enables developers to write, test, compile and deploy contracts with the help of AI-based code generation, vulnerability detection, and a documentation RAG chat assistant.
- The project directly supports the Polkadot ecosystem by strengthening the developer tooling for ink!, the smart contract language for Substrate-based chains.
- I'm passionate about improving developer experience and have already shipped a similar project for the Move ecosystem. I believe ink! needs the same love—especially as we enter a new era of AI-assisted development.

### 🔍 Project Details

- **Tech Stack:** Typescript, React/NextJs, ink!, LLM APIs, Substrate testnet deployment tools, RAG pipelines with ink! documentation.
- **Architecture:** Frontend IDE (React/Nextjs), Backend services for code execution & AI APIs, compiler layer.
- **PoC/MVP:** While we haven’t built for the ink! ecosystem yet, we’ve completed and won a few hackathon projects in the Move ecosystem, where we learned valuable AI pipelines and UI patterns that will help us pull this off for ink!.


### 🧩 Ecosystem Fit

- The project fits into Polkadot's dev tooling layer—making ink! development more accessible and AI-native.
- **Target audience:** Developers exploring ink!, especially Solidity/Web3 devs looking to transition; web2 developers who are new to smart contract development and need an approachable way to get started; and experienced ink! devs who want a faster workflow with AI-assisted code generation and lightweight vulnerability checks for quick sanity testing.
- **Needs met:** Easy onboarding, faster contract prototyping, real-time auditing, better documentation access.
- **Similar Projects:** [Substrate Playground](https://github.com/paritytech/substrate-playground) and [ink! Playground](https://github.com/use-ink/ink-playground) were earlier efforts in this space. However, both are now unmaintained and were built before the rise of AI/LLM-assisted development.
- **Differentiation:** This project brings modern AI assistance and RAG documentation search to ink! for the first time.

## 👥 Team

- **Team Name:** ink! AIDE
- **Contact Name:** John (JS MAXI)
- **Contact Email:** [jsmaxi666@gmail.com]
- **Website:** [https://github.com/jsmaxi](https://github.com/jsmaxi)

### Team members

- John

#### LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/j-s-4b489a32b/](https://www.linkedin.com/in/j-s-4b489a32b/)

### Team Code Repos

- https://github.com/jsmaxi/move-playground-onchain

- https://github.com/jsmaxi/move-ai-agent

**GitHub Account:**

- https://github.com/jsmaxi

### Team's experience

- 8+ years in software (web2 & web3), winner of multiple hackathons (ETH, BNB, Movement, Other)
- Recent winner of Movement Labs hackathon for AI-powered Move playground (similar to this project)
- Deep familiarity with LLMs, RAG, smart contracts, and frontend infra

## 📊 Development Status

- No code has been written yet for the ink! IDE itself, but the architecture, feature set, and user experience are already well-mapped based on Remix, prior projects, and general feedback.

- We’ve previously built two hackathon projects in the Move ecosystem that explored similar ideas of AI-assisted smart contract development:

  - [Aptos Hackathon – Move AI Agent](https://github.com/jsmaxi/move-ai-agent)  
    🖥️ Demo: https://move-ai-agent-production.up.railway.app/

  - [Movement Labs Hackathon – Move Playground Onchain](https://github.com/jsmaxi/move-playground-onchain)  
    🖥️ Demo: https://move-playground-onchain-production.up.railway.app/

- While Move is Rust-based, it doesn't share the same contract model or tooling as ink!. However, the underlying AI pipelines—such as prompt engineering, retrieval-based context building, and UI/UX patterns for AI interactions—are transferable and proven. These techniques helped us implement LLM-powered code generation, lightweight auditing, and RAG-enabled doc chat during the hackathons.

- With the time and support from this grant, we’re confident we can apply these learnings to build a much more refined, production-quality version for the ink! ecosystem.



## 📅 Development Roadmap

### Overview

- **Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1 solo developer 
- **Total Costs:** $10,000 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation and a basic tutorial showing how to write, compile, and deploy ink! contracts in the IDE |
| 0c. | Testing and Testing Guide | We will include unit tests where applicable. Smart contract examples will also include basic unit tests. A testing guide will explain how to run and verify all tests |
| 0d. | Article | Blog post outlining progress and lessons learned with live demo link |
| 1. | ink! IDE Core |  IDE UI, compile to wasm, deploy to testnet, error display, file manager |
| 2. | AI Agent & RAG | LLM-based code generator, audit agent, RAG chatbot with ink! docs |

### 💰 Budget Breakdown

| Milestone | Deliverables | Cost (USD) | Estimated Completion |
| --------- | ------------ | ---------- | -------------------- |
| 1 | ink! IDE Core | $5,000 | 4 weeks |
| 2 | AI Agent & RAG | $5,000 | 4 weeks (by June 10, 2025) |
| **Total** | | **$10,000** | **2 months** |

## 🔮 Future Plans

This fast grant will lay the groundwork for building a production-grade developer tool for the ink! ecosystem. It will allow us to build a fully functional proof of concept that demonstrates key features like smart contract editing, deployment, AI-assisted code generation, and basic vulnerability detection—all with a strong focus on developer experience.

The project is being developed during the timeline of the [**ink!ubator hackathon – your gateway to ink!ubator 2.0**](https://github.com/use-inkubator/Ecosystem-Grants), which runs from **2025/03/12 to 2025/06/12**. Both milestones are scheduled to be completed within that period, making it a strong candidate for inkubator submission as well.

After the initial version is completed, the plan is to apply for the **ink!ubator 2.0 Ecosystem Grant**, which offers up to $60,000 in funding for projects focused on developer infrastructure and tooling. This will help take the IDE from proof-of-concept to production-ready—with polished features, ongoing maintenance, and deeper integration with the Polkadot ecosystem.

Once the proof of concept is complete, this project will also be a strong candidate for follow-on support through programs like the [**Aleph Zero Public Goods Grants**](https://alephzero.org/ecosystem-funding-program), helping it grow into a widely adopted tool for the community.

We are planning to enable deploying to Hub when it becomes available. For now we will deploy to an arbitraty parachain.

Long term, the vision is for this to become the go-to IDE for ink! development, used by both newcomers and experienced developers. With solid AI tooling, a friendly UX, and meaningful security checks, it aims to lower the barrier to entry while improving productivity and confidence across the board.
