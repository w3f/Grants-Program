# Tokenomics Scoping Review: Annotated Bibliography

- **Team Name:** Mark Van de Vyver [PhD(Dist)](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=Search)
- **Payment Address:** 15WoVugRLfBAogS1FBmhzxVv8WZqZK1z4KKHALijTZfdVcCm (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

A annotated bibliography of rational expectations equilibrium (a.k.a. no-arbitrage) economic models used to develop blockchain/token economies, as well as the tokenomics of Polkadot Parachains.

This is a survey, hence limited to topics the existing literature addresses. Within the scope of the deliverables, I am not committing to solving any particular token-economy design question.
The report/working paper will be posted to [SSRN (e.g. FEN - Cryptocurrency Research eJournal)](https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=3839004), [IDEAS](https://ideas.repec.org/), [ResearchGate](https://www.researchgate.net/publication/373739562_Tokenomics_Scoping_Review_Annotated_Bibliography).

- Description:
  The decision making of developers (and other stakeholders) is assisted if a hypothetical/proposed token-economy can be described by reference, or analogy, to a known working/successful token-economy. Absent an existing implementation, developers are left to invent a token-economy, try to adapt an existing non-blockchain experience to a blockchain, or try to adapt non-blockchain ideas to a blockchain.
- This project provides a annotated bibliography to help think through various choices and their trade-offs. It does so by reviewing the current state of play, as it is described in: a) published general-blockchain research, b) Polkadot whitepapers. It does not offer the answer to any particular token-economy design question.
- With general Token-Economy networks in mind, I aim to provide a annotated bibliography of existing general-blockchain token-economy research.
  For practical context, the central features and concerns across Polkadot Parachain Token-Economy networks will be identified.
  Ultimately, the reader should learn something about those features of the token-economies of Polkadot Parachain  networks and understand how some of the issues raised by the general-blockchain token-economy research are addressed by Polkadot Parachain token-economy designs, while others are not.
  Summary tables will highlight the key differentiating characteristics of different Polkadot Parachain  network token-economies.
- Motivation:
  A project we are developing envisions the use of the [Open Web3 Stack](https://github.com/open-web3-stack) relay and Parachains in such a manner that our (imagined) token use is, apparently, novel. The state of play in Polkadot Parachain token-economics appears to be a debate [around staking and inflation](https://forum.polkadot.network/t/should-parachains-have-staking-inflation/806). A search of docs.substrate.io for "tokenomics" and "token-economics" returns no results. We had expected a reference to, or high-level summary of, the token-economies of parachains elected to the Polkadot relay chain.  Ideally, we hoped to find high level descriptions of some token-economy features that are enabled by the distinct features of the [Open Web3 Stack](https://github.com/open-web3-stack) and its pallets, possibly with links to case studies or other resources. This annotated bibliography will provide some of that information.

## Project Details

### The problem

A search of docs.substrate.io for "tokenomics" and "token-economics" returns no results. We had expected a reference to, or high-level summary of, the token-economies of parachains elected to the Polkadot relay chain.  Ideally, we hoped to find high level descriptions of some token-economy features, possibly with links to case studies or other resources. This annotated bibliography will provide some of that information.  Inclusion of this information in any documentation is out of scope.

### Research questions/hypothesis

This project provides a annotated bibliography to identify relevant research, it does not offer the answer to any particular token-economy design question. It does so using: a) published general-blockchain research, b) Polkadot whitepapers.

### The Methodology

The annotated bibliography component of this exercise will be closest to a "Scoping Review", see Grant MJ, Booth A. [A typology of reviews: an analysis of 14 review types and associated methodologies](https://doi.org/10.1111/j.1471-1842.2009.00848.x). Health Info Libr J. 2009 Jun; 26(2):91-108. Review. PubMed PMID: 19490148.

Extract from Table 1 of Grant, M.J. and Booth, A. (2009):

| Description | Search | Appraisal | Synthesis | Analysis |
| ----------- | ------ | --------- | --------- | -------- |
|  Preliminary assessment of potential size and scope of available research literature. Aims to identify nature and extent of research evidence (usually including ongoing research) | Completeness of searching determined by time/scope constraints. May include research in progress | No formal quality assessment | Typically tabular with some narrative commentary | Characterizes quantity and quality of literature, perhaps by study design and other key features. Attempts to specify a viable review |

Each section of the report/working paper will be developed using some subset of the following iterative process (Tsafnat, G., Glasziou, P., Choong, M.K. et al. [Systematic review automation technologies](https://doi.org/10.1186/2046-4053-3-74), Syst Rev 3, 74 (2014))

- Review reporting guidelines, best practice handbooks, and training modules [preparation stage]
- Formulate question and decide on review type [preparation stage]
- Search for previous published literature [preparation stage]
- Develop and test search strategies [preparation stage]
- Review search strategies [preparation stage]
- Execute search [retrieval stage]
- De-duplicate data/information [retrieval stage]
- Screen title and abstracts [screening stage]
- Retrieve full-text articles [retrieval stage]
- Screen articles in full-text [screening stage]
- Search for grey literature (preprints, working papers) [retrieval stage]
- Quality assessment and data/information extraction [synthesis stage]
- Citation chasing [retrieval stage]
- Update database searches [retrieval stage]
- Synthesize data/information [synthesis stage]
- Manuscript development [write-up stage]

### The data collection and analysis procedures

#### Published articles

The initial source of the published research will be the top-6 articles selected by the grantee, using the commercial research databases available from the State Library of New South Wales by operationalizing the following inquiry, "Refereed articles on block-chain token-economics using rational expectations equilibrium (a.k.a. no-arbitrage) arguments/analysis, ranked by journal impact factors". This initial source may be adjusted at the grantees discretion based on his expertise.  The selection process will be fully described and documented.

#### Polkadot Parachain whitepapers

These are from projects that are Polkadot-Parachains as at 19 December 2022.

### The expected results

The objective is to arrive at a scoping review of current state of token-economy development.

One of the elements will be summary tables, using attributes that arise naturally within a Rational Expectations Equilibrium framework, such as the following:

- Network
- Token
- Token Type
- Model Type
- Economy Type
- Sector Type
- Production Type
- Monetary Type
- Agent Utility
- Economic Sectors
- Rate Curves
- Riskless Rate
- Risk Premium
- Market Rate
- Borrow/Lend
- Lender of Last Resort

Another component of this research is creating a token-categorization questionnaire or decision tree that will aid/inform the specification of a token-economy. Nonetheless, there are already schemes that are useful even at this early stage. Such as these [Token Types (Burnie, Burnie and Henderson (2018))](https://doi.org/10.5195/ledger.2018.121):

- fuel-tokens: "underpin generic blockchain applications". I refine this definition as follows: The token yield is defined or modeled such that it provides holders with incentives to act for the purpose of ensuring the blockchain has the desired features/characteristics.
- transaction-tokens: "act as a cash substitute"
- voucher-tokens: "exchanged for a predefined asset". I include goods or services.

The grants team, and any reader could reproduce the data analysis by applying the token-categorization questionaire to a parachain they are familiar with and compare their classification with the submitted result.

### Relevant related work

- [A typology of reviews: an analysis of 14 review types and associated methodologies](https://doi.org/10.1111/j.1471-1842.2009.00848.x)
- [Systematic review automation technologies](https://doi.org/10.1186/2046-4053-3-74)
- [Token Types (Burnie, Burnie and Henderson (2018))](https://doi.org/10.5195/ledger.2018.121)

### Intended venue for results publication and the timeline for publication

The report/working paper will be posted to [SSRN (e.g. FEN - Cryptocurrency Research eJournal)](https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=3839004), [IDEAS](https://ideas.repec.org/), [ResearchGate](https://www.researchgate.net/publication/373739562_Tokenomics_Scoping_Review_Annotated_Bibliography).

### Out of scope

- Crypto currencies/stable coins.
- What is considered a security and what is not.
- Proof-of-work vs Proof-of-stake considerations, e.g. [Blockchain economics](https://scholar.princeton.edu/sites/default/files/markus/files/blockchain_paper_v7a.pdf).
- Governance considerations, e.g. trust and reputation.
- Game theory, behavioral economics/finance.
- Empirical inference of token-economy attributes from time-series or cross-sectional regression analysis.
- A review of the general economic modeling literature i.e. not related to blockchains.
- Verifying the network token-economy has been implemented as specified in the network whitepaper.
- Verifying the network whitepaper assumptions are a reasonable/plausible description of the network participants.
- Inclusion of any of this information in any project documentation.

#### Crypto-Currencies

The prevalence of crypto-currencies means the decision to exclude them warrants some explanation.
Equilibria are generally explicitly constructed (which proves existence) using conjectured properties of the dividends (or an equivalent) from the economic activity. Specifically, a price is the present-value (i.e. discounted for time and non-diversifiable risk), of all future dividends. Since the dividends of fiat currencies are zero this approach does not work. While there are workarounds, they, being particular, are not of interest in the more general setting we wish to bring to light.

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  - Research into the design of a token-economy and survey of Polkadot token-economies.
- Who is your target audience?
  - Blockchain developers.  Industry analysts/advisors (media and investors).
- What need(s) does your project meet?
  Developers and analysts need to understand the relevant literature available when developing their token-economy.
  The literature we canvas both theoretical (refereed articles) and applied (network whitepapers).
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  No
  - If not, are there similar projects in related ecosystems?
    No

## Team :busts_in_silhouette:

### Team members

- Mark Van de Vyver [PhD(Dist)](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=Search)

### Contact

- **Contact Name:** Mark Van de Vyver [PhD(Dist)](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=Search)
- **Contact Email:** mark@taqtiqa.com

### Legal Structure

- **Registered Address:** 9681 41st St NE, Saint Michael, MN 55376
- **Registered Legal Entity:** Begley Brothers Inc.

### Team's experience

Research interests

- Time series analysis of price series and pricing model performance.
- Market Microstructure theory and empirical studies.
- Option pricing and real options/asset pricing.

The University of Western Australia (1994-2003):
Postgraduate and undergraduate teaching and research supervision. Portfolio Management, Corporate Finance and Derivatives Securities. Co-developed (with Prof R. Maller and Prof A. Szimayer) the University’s joint Undergraduate and Postgraduate Degrees in Mathematics and Finance.

The University of Sydney (2003-2008):
Postgraduate and undergraduate teaching and research supervision. Advanced Asset Pricing, Corporate Finance, Investments and Advanced Portfolio Management

#### Publications

- [Order imbalance period by period](https://www.researchgate.net/publication/228464696_Order_imbalance_period_by_period), 2008, Asli Ascioglu, Thomas H. Mcinish (Wunderlich Chair) and Mark Van de Vyver
- [Testing for reduction to random walk in autoregressive conditional heteroskedasticity models](https://doi.org/10.1111/1368-423X.t01-1-00090), December 2002, Econometrics Journal, Claudia Kluppelberg, Ross Maller, Mark Van de Vyver, Derick Wee
- [How Might Companies Value Esos?](https://doi.org/10.1111/j.1835-2561.2002.tb00191.x), March 2002, Australian Accounting Review, Ross Maller, Rosemary Tan, Mark Van de Vyver

### Team Code Repos

Personal

- https://github.com/taqtiqa-mark
- https://github.com/bbros-dev
- https://github.com/taqtiqa
- https://github.com/BegleyBrothers

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/tatiqa/

## Development Status :open_book:

- links to improvement requests for proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal):
  - [Designing UpChain: a framework for securing Substrate runtime upgrades and Substrate network upgrades](https://github.com/w3f/Grants-Program/pull/1309)
- As requested, I have adjusted the source of the research to eliminate myself as the source of bias in the collection of research papers.
- academic publications relevant to the problem:
  One of the products from this research will be such a listing under these categories:
  1. Published articles: As requested, to eliminate bias (and constrain budget) in the collection of research papers, the initial source of the published research will be the top-6 articles provided by the State Library of New South Wales information search service in response to the following query, "Refereed articles on block-chain token-economics using rational expectations equilibrium (a.k.a. no-arbitrage) arguments/analysis, ranked by journal impact factors"
  2. Polkadot Parachain whitepapers: These are from projects that are Polkadot-Parachains as at 19 December 2022.
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues:
  - [Tokenomics: Grant models](https://forum.polkadot.network/t/tokenomics-grant-models/1266)
- references to conversations you might have had related to this project with anyone from the Web3 Foundation
  There have been no conversations related to this project with anyone from the Web3 Foundation.
- previous interface iterations, such as mock-ups and wireframes:
  This project is research oriented and as such there are no mock-ups and wireframes to test.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 0.2 FTE
- **Total Costs:** 10,000 USD

### Milestone 1 — Data gathering & Polkadot Networks

- **Estimated duration:** 1 month
- **FTE:**  0.2
- **Costs:** 3,000 USD

Initial analysis of the Parachain tokenomics.
Initial flow-chart/decision-tree development that will help developers place their token in the following contexts:

- Token Type
- Model Type
- Economy Type
- Sector Type
- Production Type
- Monetary Type

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Creative Commons Attribution 4.0 International License (article), Dual Apache 2 or MIT License (code) |
| **0b.** | Documentation/Tutorial | We will provide both **artifacts documentation** of the deliverables and a basic **tutorial** that explains how a user can (for example) execute the code included or can visualize data or use any artifacts included. |
| **0c.** | Methodology | Detailed explanation of how the results were achieved and how to reproduce/verify the results. |
| **0d.** | Infrastructure | We will provide the list of all infrastructure requirements (text editors with proper versions, software packages, data packages, etc) that can be used to verify the deliveries with this milestone. LaTeX for article production. |
| **0e.** | Article | We create a **draft article** (with source code), in the English language. There will be an acknowledgement "This work was supported by a research grant from the Web3 Foundation. The analysis and opinions expressed are the authors and do not reflect the opinions of the Web3 Foundation." |
| **0e.1**   |  - Appendix: Methodology    | As described in the methodology section above |
| **0e.2**   |  - Section: Polkadot Parachains      | Initial Parachain summary |
| 1. | List of academic papers | Collect published and network papers, as described in the methodology section above |
| 2. | Data to be extracted from the papers | As described in the methodology section above |
| 3. | Analysis procedures | As described in the methodology section above |

### Milestone 2 — Outline Article

- **Estimated duration:** 2 month
- **FTE:**  0.2
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Creative Commons Attribution 4.0 International License (article), Dual Apache 2 or MIT License (code) |
| **0b.** | Documentation/Tutorial | We will update both **artifacts documentation** of the deliverables and a basic **tutorial** that explains how a user can (for example) execute the code included or can visualize data or use any artifacts included. |
| **0c.** | Methodology | Update the detailed explanation of how the results were achieved and how to reproduce/verify the results. |
| **0d.** | Infrastructure | We will update the list of all infrastructure requirements (text editors with proper versions, software packages, data packages, etc) that can be used to verify the deliveries with this milestone. LaTeX for article production. |
| **0e.** | Article | We will send a **draft article** (with source code), in the English language. There will be an acknowledgement "This work was supported by a research grant from the Web3 Foundation. The analysis and opinions expressed are the authors and do not reflect the opinions of the Web3 Foundation."|
| **0e.1**    | Article                   | We will publish an **working paper** as indicated above. |
| **0e.2**   |  - Section: Published models    | Initial annotated bibliography |
| **0e.3**   |  - Section: Polkadot Parachain Economies | Parachain summary updated with references to published models |

### Milestone 3 — Finalize Article

- **Estimated Duration:** 2 month
- **FTE:**  0.2
- **Costs:** 4,000 USD

Finalize the flow-chart/decision-tree that will help developers place their token in the following contexts:

- Token Type
- Model Type
- Economy Type
- Sector Type
- Production Type
- Monetary Type

Finalize the annotated bibliography.
Promote the working paper, incorporate feedback.
The report/working paper will be posted to [SSRN (e.g. FEN - Cryptocurrency Research eJournal)](https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=3839004), [IDEAS](https://ideas.repec.org/), [ResearchGate](https://www.researchgate.net/publication/373739562_Tokenomics_Scoping_Review_Annotated_Bibliography).

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Creative Commons Attribution 4.0 International License (article), Dual Apache 2 or MIT License (code) |
| **0b.** | Documentation/Tutorial | We will update both **artifacts documentation** of the deliverables and a basic **tutorial** that explains how a user can (for example) execute the code included or can visualize data or use any artifacts included. |
| **0c.** | Methodology | Update the detailed explanation of how the results were achieved and how to reproduce/verify the results. |
| **0d.** | Infrastructure | We will update the list of all infrastructure requirements (text editors with proper versions, software packages, data packages, etc) that can be used to verify the deliveries with this milestone. LaTeX for article production. |
| **0e** | Article | We will update a **draft article** (with source code), in the English language. There will be an acknowledgement "This work was supported by a research grant from the Web3 Foundation. The analysis and opinions expressed are the authors and do not reflect the opinions of the Web3 Foundation."|
| **0e.1**   |  - Section: Introduction           | Place the topic in perspective and motivate non-specialist readers.  Text and tables where relevant/appropriate. |
| **0e.2**   |  - Section: Published models    | Update annotated bibliography |
| **0e.3**   |  - Section: Polkadot Parachains | Parachain summary updated with references to published models |
| **0e.4**   |  - Appendix: Methodology  | The research methodology.  Text and tables where relevant/appropriate. |
| **0e.5**   |  - Section: Summary                | Where are we and where to next? |
| 1. | Feedback | Collect published, working and network papers, as described in the methodology section above |
| 2. | Publish | The working paper will be posted to [SSRN (e.g. FEN - Cryptocurrency Research eJournal)](https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=3839004), [IDEAS](https://ideas.repec.org/), [ResearchGate](https://www.researchgate.net/publication/373739562_Tokenomics_Scoping_Review_Annotated_Bibliography) |

## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
  - The working paper will be posted to [SSRN (e.g. FEN - Cryptocurrency Research eJournal)](https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=3839004), [IDEAS](https://ideas.repec.org/),[ResearchGate](https://www.researchgate.net/publication/373739562_Tokenomics_Scoping_Review_Annotated_Bibliography).
- the team's long-term plans and intentions in relation to it.
  - W3F Grant Proposal to implement and document one token model as an example/template of building a blockchain on the W3F [Open Web3 Stack](https://github.com/open-web3-stack) having known 'on-paper' coin characteristics.
  - Create RFP's addressing pallet functionality gaps that are identified in the course of the above.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

- Work underway:
  - Literature collation
  - Type definitions
- If there are any other teams who have already contributed (financially) to the project.
  - None
- Previous grants you may have applied for.
  - None
