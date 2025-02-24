# Atlas Research

- **Team Name:** Atlas Research
- **Payment Details:** 5Fno2a4C1tBEX1iibtGrPdEceMyBK6bDVvQpUnDkJxBDFph6
- **Level:** 1

## Project Overview :page_facing_up:

![image](https://github.com/user-attachments/assets/1e23c45a-3629-4e7c-aeb4-2f53fad34db4)

Atlas Research merges code notebooks and paper-writing tools into a single platform, allowing users to:

Upload academic papers (PDFs).
Convert those PDFs into Markdown/LaTeX so that large language models (LLMs) can parse the math, methodology, and references.
Generate an implementation plan in a Jupyter Notebook (cell-by-cell).
Seamlessly develop and run code (e.g., Python for quantitative research or smart-contract analysis).
Iterate quickly with AI assistance.

Key Feature: An automated PDF-to-Jupyter AI pipeline that helps users transform papers such as academic DeFi market-making research or on-chain data analysis for Polkadot—directly into runnable code, bridging the gap between theory and implementation.

### Project Details

Live Beta: https://atlas-research.io (1,500+ signups)

Select Users:

Sasha Stoikov (author of seminal works on market making)
Charles Albert-Lahalle (Polytechnique)
Many other notable data scientists, quant researchers, and academics

In the Polkadot/Kusama ecosystem, Atlas Research can be a powerful ally for onboarding, creating libraries and accessing source code to get up and running fast:

Prompt the notebook to fetch on-chain data for DOT or other Polkadot ecosystem tokens.
Use AI to propose strategies or run analyses on staking rewards, governance participation, or trading volumes.
Maintain a single environment for capturing research notes, code, and final write-ups.

### Ecosystem Fit

Atlas Research unlocks faster, more transparent, and more collaborative research in the Polkadot ecosystem by:

Streamlining development of on-chain data analyses and research around Polkadot-based strategies.
Supporting novices and advanced developers alike in quickly prototyping ideas or replicating complex academic research on Substrate-based chains.
Open-sourcing the AI-generated implementations of cutting-edge research, thus contributing to the broader Web3 knowledge base.

Ease of creating and testing Polkadot data libraries or a library of example notebooks that the community can fork right away.

Target Users & Actual Users
- Quant Finance Professionals building reproducible trading algorithms and data-driven analyses in tradfi, cex or defi
- Data Scientists and Machine Learning Engineers who need to prototype, analyze data, and keep track of experiments and relevant literature.
- Students & Professors working on research papers, theses, or dissertations.
- Myself for building my trading systems

Needs
1. **Reduced Context Switching**
    - No need to juggle separate PDF viewers, code editors, or LaTeX writing tools. Everything is in one environment.
2. **Faster Iteration**
    - Generate code, see immediate results, fix errors with AI assistance, and update references in real time.
    - Edits to the manuscript or code can happen side-by-side.
3. **Improved Organization**
    - Link references, notes, and code cells so that knowledge doesn't get lost in a clutter of separate applications.
    - A single place to store, tag, and retrieve relevant files.
4. **Greater Reproducibility & Transparency**
    - Every step of the research process (from data analysis to final paper) is recorded.
5. **Enhanced Collaboration**
    - Once the environment is shareable or placed under version control, team members can see each other's notes, code updates, and references in context.

Email from power users on how they will use the product:

"Hello Mark, I see that you are progressing.
Do you think it is possible you give me an evaluation licence for 3 months? I would like to try and give you feedback to make it evolves.

I have different projects that could lever on that, including a review of academic papers I would like my group at Polytechnique to do, similar to the one done by Oxford https://www.linkedin.com/posts/oxford-man-institute-of-quantitative-finance_ominews-feb25-activity-7295064100802306049-41Er but dedicated to AI x Finance. I think atlas could be the front end of this review so that the papers will be « runnable » for your users, and easy to get as a list for the rest.

What do you think?
I have two students who could work at that.

Kind regards
Charles-Albert"

Cursor and Overleaf are competitors, but are not in the web3 space. With Atlas Research, we have the best AI integrated jupyter notebook, the prime dev tool used by millions of data scientists.
We pair this with a research pane along side in which markdown files, PDFs, Whitepapers, LaTeX files can interact with each other (through linking)

## Team :busts_in_silhouette:


### Team members

Mark Windsor – Founder & Developer

### Contact

- **Contact Name:** Mark Windsor
- **Contact Email:** markwindsorr@atlas-research.io
- **Website:** https://atlas-research.io https://markwindsor.ca

### Legal Structure

- **Registered Address:** 101 Topsail Pond Rd St. John's, NL, A1L2H2 CA
- **Registered Legal Entity:** rupee-collector LLC, EIN: 38-4229106

### Team's experience

Mark Windsor
- Multi-disciplinary software developer (front-end, back-end)
- Product designer, marketer
- Researcher & retail algorithmic trader
- Built Atlas Research from scratch, focusing on bridging AI and research tools

Will go to the ends of the earth (literally) to deliver value
to customers

### Team Code Repos

- https://github.com/atlas-finance-io

We plan to open source the AI-generated implementations of advanced research in crypto & Web3—once approved by authors—in the above repository.

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/markwindsorr/

## Development Status :open_book:

- Beta is out with 1500+ sign ups at https://atlas-research.io. The PDF to Notebook Conversion is still in development and why I am looking for grants as this pipeline is costly, uses a combination of o1 api and claude sonnet so looking to cover some of those costs.
- There will be a notebooks repo in which upon authors permission to open source (which most are since the papers are publicly available on Arxiv), we have a collection of cutting edge research in web3 development, algorithmic trading and other areas of computational research

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 10,000 USD
- **DOT %:** 50%

### Milestone 1 — Polkadot Integration + PDF Pipeline (Estimated 1 Month)

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
|---------|-------------|----------------|
| 0a | License | The code for the deliverables will be released under MIT. |
| 0b | Documentation | • We will provide inline documentation for all modules, especially focusing on the Polkadot data integration.<br>• A tutorial in our GitHub repo explaining how to pull on-chain DOT or Kusama data into an Atlas Jupyter Notebook and run basic analyses. |
| 0c | Testing & Guide | • Full coverage of unit tests for the Polkadot data retrieval features and the PDF-to-Markdown pipeline.<br>• A short testing guide (in the README) describing how to run the tests and verify basic functionality (e.g., verifying that PDF parsing is correct, that Polkadot data is fetched properly). |
| 0d | Docker | • A Dockerfile that sets up the environment for local testing (includes required libraries for PDF parsing, AI integration stubs, Polkadot APIs). |
| 1 | PDF-to-Markdown Core | • Implement the core pipeline to convert PDFs (with LaTeX formulas) into Markdown so that they can be effectively parsed by LLMs.<br>• Store the conversion logic and relevant code in an open-source repository (atlas-finance-io/pdf2md). |
| 2 | Polkadot Data Retrieval | • Implement connectors to Polkadot ecosystem data (e.g., Subscan, on-chain RPC endpoints, or other third-party APIs).<br>• Provide example Jupyter notebooks that demonstrate pulling historical price or on-chain metrics for DOT, KSM, or other Substrate-based tokens. |
| 3 | AI-Assisted Notebook Generation | • Integrate a basic prompt-based interface that uses the PDF-to-Markdown output to produce a step-by-step Jupyter Notebook outline.<br>• Show at least one example for on-chain data analysis, e.g. exploring Polkadot staking data and generating visuals. |
| 4 | Basic Front-End Integration | • Incorporate the new pipeline into the beta platform (web UI at atlas-research.io), enabling users to upload PDFs and convert them within the UI. |
| 5 | Milestone Report | • Provide a written report or short article explaining how to use the new Polkadot integration and PDF pipeline, aimed at researchers. Publish it on atlas-research.io or Medium. |

### Milestone 2 — Advanced Pipeline + Community Notebooks (Estimated 1 Month)

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 5,000 USD

| ID | Category | Description |
|---|---|---|
| 0a | License | Continued MIT licensing for all new code. |
| 0b | Documentation | • Update existing docs with new capabilities (e.g., advanced PDF parsing, AI error-correction flow)<br>• Provide advanced tutorials for AI-driven research in the Polkadot ecosystem (multi-step queries, advanced analytics) |
| 0c | Testing & Guide | • Expand test coverage to advanced AI orchestration features (e.g. handling more complex math, large references sections)<br>• Guide describing how to replicate a full research workflow: from PDF import → code generation → data retrieval → final results |
| 0d | Docker | • Updated Docker image including advanced modules (e.g., a modular approach for swapping different LLM endpoints) |
| 1 | Enhanced PDF Pipeline | • Expand the pipeline to handle edge cases: references, large LaTeX sections, footnotes, multi-column layouts, etc<br>• Provide robust fallback mechanisms to ensure minimal errors in conversion |
| 2 | Advanced AI Flow | • Introduce an AI error-correction flow: if a generated code cell fails, the system automatically re-prompts the LLM with error logs to produce a corrected version |
| 3 | Sample Polkadot-Kusama Notebooks | • Publish 3-5 advanced research notebooks under an open-source license showing real use-cases: staking yield analysis, cross-chain data queries, Polkadot price forecasting, etc<br>• Encourage community submission of new notebooks (through GitHub PRs) |
| 4 | Community Sharing | • Implement a "public notebooks" repository integrated with Atlas Research UI, so that Polkadot ecosystem developers can quickly share or fork research notebooks |
| 5 | Final Report/Article | • Publish a concluding blog post or short paper detailing the entire pipeline's functionality, how it benefits Polkadot ecosystem research, and how the community can contribute (with screenshots, best practices, and example code) |

## Future Plans

Long-Term Maintenance

Freemium Model: Our platform has a free tier allowing open-source and academic usage, sustained by subscription plans for power users.
Community Contributions: We will grow a library of community-submitted Polkadot research notebooks.
Ongoing Development: Continued improvements to AI-based PDF conversion, better integration with other Substrate-based chains, and expansions to handle custom data sources.

Near-Term Focus

Open-Source Promotion: We will actively share Polkadot-specific notebooks and encourage contributions on GitHub.
Academic Outreach: Demonstrate the pipeline to my academic network, I regularly talk to some of the most respected researchers in the quant finance field and will engage my community in developing on the polkadot ecosystem.

Long-Term Vision

Position Atlas Research as the go-to AI-driven environment for all Web3 development workflows, bridging academic research and real-world implementation Polkadot included

## Referal Program

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

- Pitch Deck: https://drive.google.com/file/d/1f04of4UziRqMpEjwyszJ2C8KZb_-MACf/view?usp=sharing
- Twitter account: https://x.com/atlas_res
- I've applied to the ChainGPT directly before this. For demo purposes, here is me giving a demo to Sasha Stoikov: https://drive.google.com/file/d/1c_zxF2vAQ2XR7kzlsd4swQdPmuKgLnGF/view?usp=sharing
- I've been accepted into the Nvidia inception program and have recieved 10k up to 100k in AWS credits, but I'm seeking funds for the PDF to Notebook conversion as each conversion requires multiple LLM steps where open ai's o1 model api is quite expensive.
