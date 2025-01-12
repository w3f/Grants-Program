# Boris Boarman. Web3 Grant Coach

- **Team Name:** Whatdahack?!
- **Payment Details:**
  - **DOT**: 15Jo7phBC16ydF1EzNdcVszzCxGec7KerSWwSQ8uDPDBtvV7 (Polkadot Relay Chain)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up: 

### Overview

Web3 space is well-known for fostering innovation, and existing crypto grant programs and funding options have given birth to many promising startups and initiatives.

However,

- the process of searching for, finding, and applying for the right crypto funding option is cumbersome and time-consuming for both applicants and reviewers.
- Applicants struggle with identifying suitable grants and preparing high-quality applications,
- while reviewers face the challenge of managing numerous submissions.
- To our research about 85% of proposals get rejections either because of irrelevance, poor quality, however reviewer's lack of domain competence and even nepotism among foundations members are among the most common reasons as well. 
- [This inefficiency](https://www.researchgate.net/publication/384437723_State_of_Web3_Grants_Report_2024) leads to missed funding opportunities for promising projects and teams
- and increased workloads for grant reviewers.

Solution: Boris Boarman - AI-agentic application streamlining the grant application and review process by 100 folds.

Use case 1: Idea Review and Evaluation
A proposal is checked against the knowledge base (RAG apppication) of all previous applications and tested by a trained LLM or real AI intellegence capable of evaluating an idea based on a numeric impact analysis approach and real market data. Feedback for improvement is provided, so a proposal can reach the scoring theashold and be eligable for funding. 

Use case 2: Relevant Grant Programs 
The AI assistant selects the best relevant and currently active funding options to finance the development of the project or initiative, reducing the efforts from days to minutes. 

Use case 3: Automated proposal generation
The AI assistant guides the user through a sequence of questions to collect enough information about the project and generates application documents (including the application form and project development calculation) following a foundation’s application structure and guidance.

### Project Details
- Project logo/mascot: ![image](https://europe1.discourse-cdn.com/flex013/uploads/lido/original/2X/8/822ebf0e310133b5b401ebf0bb9494a6eda05858.jpeg)
- Mockups/designs of any UI components: https://drive.google.com/drive/folders/1QpLKJmFSAIPPsO6HUDtNGikW4ca2T08r?usp=sharing

- An overview of the technology stack to be used:
Frameworks:
React.js: For building an interactive, dynamic UI.
Next.js (optional): For server-side rendering and SEO optimization.
Node.js with Express: For scalable, lightweight REST API development.
Python with FastAPI: If Python is preferred for handling AI-based scoring.

Wallet Integration:
Web3Modal or RainbowKit: For integrating wallets like MetaMask, WalletConnect, etc.
Libraries: ethers.js for blockchain interaction in the browser.

NLP Models:
OpenAI GPT Models: For proposal analysis and scoring.
Hugging Face Models: For fine-tuned, on-premise scoring.
InvestML: For impact analysis and projections. 

Blockchain Interaction:
ethers.js: For blockchain interaction.
Alchemy, Infura, or a self-hosted Ethereum node: For connecting to blockchain networks.

Smart Contract Deployment:
Hardhat or Truffle: For compiling and deploying Solidity smart contracts.
OpenZeppelin Libraries: For secure smart contract templates.

- Documentation of core components, protocols, architecture, etc. to be deployed: 
- MVP app workflow chart (https://drive.google.com/drive/folders/12sHqemCxZo5cIvbgOxINNwQrOVhZhTjL?usp=sharing)
- MVP system flow chart (https://drive.google.com/file/d/1oouexoTQZLyjf4khKHMfkRy7zSKitvGR/view?usp=sharing)

- PoC/MVP or other relevant prior work or research on the topic: https://bit.ly/boris-boarmanMVP

- Scope:
We have a numuch wider and bigger vision of the product covering more than these 3 use case, but we decided to start with the three mentioned above from importance and complexity to realize perspectives.

Grant Scope: Boris Boarman MVP
- Web application processing text based proposals with 7 scoring parameters (Problem, Feasibility, Impact/Value, Innovation/Competition, Scalability, Team profile, Milestones)
- Basic LLMs configuration for proposal text proccesing, sturcturing, scoring reasoning and recommendations for improvement
- RAG application with most popular crytpo foundations data for more accurate proposal processing and funding options recommendations
- PDF and DOCX file format proposal application generation

Future development
- Custom development of LLMs and unique case fine-tuning
- On-chain LLMs inference
- Sourcing on-chain foundations data on proposals, projects and team accounts
- Sourcing social media data
- LLM milestone review and approval
- On-chain project scoring and funds management
- Many more.


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

The project enhances the grant funding process by introducing an automated scoring system for evaluating proposals. It aligns with the ecosystem's goals of decentralized innovation by enabling transparent, data-driven decision-making for foundation grants.
As Polkadot and Kusama rely on community-driven development, the tool can serve treasuries, parachains, and DAOs, streamlining the funding pipeline for projects contributing to the ecosystem.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Both grant applicants (clear criteria and faster response times) and ecosystem managers (reduced administrative overhead). 

- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
"Communicating effectiveness is crucial for community support:
- There’s a strong focus on making the review process clear and involving the community in decision-making. By setting up structured timelines, using clear criteria, and including both insiders and community members in reviews, programs build trust and make sure the projects they fund are truly in line with what the ecosystem needs." [State of Web3 Grants]https://www.researchgate.net/publication/384437723_State_of_Web3_Grants_Report_2024)

"Many community-powered grant programs, which are based on token-holding, are still subject to issues with plutocracy and favoritism, as well as sybil attacks, and there’s a shift happening to either improving the horizontal distribution of the funding (introducing Quadratic Matching), or more expert driven, and thus more objective decision making (Neural Quorum Governance)." [State of Web3 Grants](https://www.researchgate.net/publication/384437723_State_of_Web3_Grants_Report_2024)

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

Gitcoin (for Polkadot):
Similarity: Focuses on grant funding but relies on community voting.
Difference: Boris Boarman automates scoring using AI reducing reliance on subjective voting.

Polkadot Treasury Proposal System:
Similarity: Evaluates funding proposals for ecosystem development. AI-generated summary helps to understand the essence of a proposal, but not the details which are essencial to evaluate.
Difference: Boris Boarman AI scores ideas/proposals by 7 parameters and helps to identify or/and fomulate real value to ecosystem.

Boris Boarman:
Combines AI-powered proposal writing, data validation and automated unbiased scoring reduce builders efforts on application and grant program managers and reviewers overhead to ensure fund usage aligns with programs objectives.

## Team :busts_in_silhouette:

### Team members

Roman Gorbunov, Developer and Founder
14 years of industry total experience, in web3 since 2016 developing various projects from cross-platform wallets with multi-asset support, nft-marketplaces, defi/defund infrastructure, proprietary blockchain projects and cloud-based fintech projects for Fortune 500 corporations and crypto native companies. Certified Software Product and Investment Manager.

https://www.linkedin.com/in/rgorbunov/
https://twitter.com/roma_gorbunov
https://github.com/imboogieman

Asim Abbas, Solutions Architect
Experienced Software Engineer, adept in bringing forth expertise in design, development, testing and maintenance of web and mobile apps. Proficient in various platforms and languages.

https://www.linkedin.com/in/asim0028/
https://x.com/_asim_abbas
https://github.com/asim0028/

### Contact

- **Contact Name:** Roman Gorbunov
- **Contact Email:** r.gorbunou@gmail.com
- **Website:** whatdahack.is

### Legal Structure

No Legal Entity

### Team's experience

We are a team of developers and researchers at the forefront of Robotic Process Automation (RPA) and blockchain solutions, leveraging cutting-edge Artificial Intelligence and Machine Learning tools with smart-contracts and other decentralized tech. With over 14 years of experience, we have developed dozens of web2, web3, SaaS, and API-based products. Since 2016, we have been involved in enterprise-level blockchain projects and decentralized applications (dApps) for crypto-native users.

Our current focus is on exploring how Large Language Models (LLMs) and decentralized accounting systems can enhance software development efficiency and investments into innovative ideas.One of our most exciting initiatives is the creation of Boris Boarman, a conversational assistant designed to navigate the expanding universe of alternative funding sources. Boris Boarman helps users explore opportunities like crypto foundation grant programs, bounties, and Requests for Proposals (RFPs). This innovative tool streamlines access to funding and resources, empowering developers and businesses to capitalize on new financial opportunities in the blockchain ecosystem.


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- POC/MVP: https://boris-boarman-main-app.dep.zsoft.link/
- Project repo: https://github.com/imboogieman/Boris-Boarman 
- links to social media discussion post: https://www.linkedin.com/posts/rgorbunov_innovate-uk-smart-grants-are-a-waste-of-time-activity-7246460462651891713-hx6V

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 2FTE, the listed members would contribute to different deliverables based on their skill-set.
- **Total Costs:** $60,399 USD for the whole project. [Detailed Estimation](https://docs.google.com/spreadsheets/d/1n4CuKghjtqOstTCBLnVJDUUf1dkN8EcZ)


### Milestone 1 — MVP 1.2, 7 parameters basic scoring

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 34,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License	| Apache 2.0 / GPLv3 / MIT |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use Boris Boarman to validate and score proposals. |
| **0c.** | Testing and Testing Guide |	Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.|
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.|
| 0e. | Article | We will publish an article that explains what was done/achieved as part of the grant. |
| 1. | Web App Graphic User Inerface | Main layout (chat, parameters sections, sessions), Problem Statement, Feasibility Plan, Innovation and Differentiation, Impact Potential, Team Profile, Milestones, Timelines, and Budget (Delivery Plan), Documentation download, User profile (registration, settings). |
| 2. | Open-source LLM model integration | We will integrate open-source LLM model and perform basic configuration to process user inputs following the project requirements. |
| 3. | Basic Scoring Model Implementation | We will design, develop a component, integrate and perform basic configuration for the Basic Scoring Model.|
| 4. | Web App MVP | We will implement the first version of the MVP processing text-based user inputs and text-based system outputs following the configuration of the components 2 and 3. |


### Milestone 2 — MVP 1.3, 7 parameters basic scoring

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 26,399 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License	| Apache 2.0 / GPLv3 / MIT |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use Boris Boarman to validate and score proposals. |
| **0c.** | Testing and Testing Guide |	Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.|
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.|
| 0e. | Article | We will publish an article that explains what was done/achieved as part of the grant. |
| 1. | Team profile component | Team profile generation, Team memebers skills analysis (net chart view). Editable through chat conversation with the system.|
| 2. | Value to ecosystem | Funding options recommendations (Impact, Added Value, Funding details).|
| 3. | Innovation and Differentiation | Basic competitive analysis. RAG component with foundational data DB for cheaper data processing.|
| 4. | Delivery Plan Component | Milestone delivery plan. Editable through chat conversation with the system. |
| 5. | Scoring Credits| We will implement the functionality allowing users to topup and track their account balance credits used for input processing and scoring.|
| 6. | Application documentation | We will implement the functionality allowing users to generate DPF and DOCX file formats documentation sourcing processed input.|


## Future Plans

- We have a bigger vision of the future functionality integrating real time data and computing LLM inference on-chain for better trunsparency. We will develop and fine-tuned custom built LLM and SLM for each of the paramaters for better accuracy. 

- As the tool solves a real problem widely existing among crypto foundations and we will aim to monetize it and make a self-sustainable project. 

- gitWe have collected a pool of test users among web3 community representatives. We have also agreement to feature our product in a couple of Youtube-shows.
