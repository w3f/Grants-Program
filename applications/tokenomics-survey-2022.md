# Substrate Tokenomics: The state of (rational) play

- **Team Name:** Mark Van de Vyver [PhD(Dist)](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=Search)
- **Payment Address:** To be provided (e.g. 0x8920... (DAI))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

A survey of some economic models used to develop Substrate (Dotsama) blockchain/token economies.
The literature reviewed will be from the rational expectations equilibrium (a.k.a. no-arbitrage) approach to economic analysis.

- Description:
  The decision making of Substrate developers (and other stakeholders) is assisted if a hypothetical/proposed token-economy can be described by reference, or analogy, to a known working/successful token-economy. Absent an existing implementation, developers are left to invent a token-economy, try to adapt an existing non-blockchain experience to a blockchain, or try to adapt non-blockchain ideas to a blockchain.
- This project provides a survey to help think through various choices and their trade-offs, it does not offer the answer to any particular token-economy design question. It does so by reviewing the current state of play, as it is described in: a) Published research, b) Working papers, c) Blockchain whitepapers.
- Substrate (Dotsama) integration:
  I aim to provide a creative synthesis of existing token-economy research rather than a catalogue of recent articles.
  Specifically, the central features and concerns across Dotsama Token-Economy networks will be identified.
  Ultimately, the reader should learn something about the features of the token-economies of Dotsama networks and understand how some of the issues raised by the token-economy research are addressed by the Dotsama networks token-economy designs, while others are not. Descriptions and explanations will be made in terms centered around the content of specific pivotal papers or pivotal ideas.
  Summary tables will highlight the key differentiating characteristics of different Dotsama blockchain network token-economies.
  Existing economic models/frameworks that encompass current Dotsama token-economy implementations as special cases will be identified.
  Pior and recent token-economy research, that has yet to be implemented in Dotsama blockchain networks, will be canvassed.
- Motivation:
  A Substrate/Dotsama project we are developing envisions the use of Substrate relay and Parachains in such a manner that our (imagined) token use is, apparently, novel. The state of play in token-economics appears to be a debate [around staking and inflation](https://forum.polkadot.network/t/should-parachains-have-staking-inflation/806). A search of docs.substrate.io for "tokenomics" and "token-economics" returns no results. We had expected a reference to, or high-level summary of, the token-economies of parachains elected to the Polkadot relay chain.  Ideally, we hoped to find high level descriptions of some token-economy features that are enabled by the distinct features of Substrate and its pallets, possibly with links to case studies or other resources. This survey article will provide some of that information.  Inclusion of any of this information in Substrate/Dotsama documentation is out of scope.

## Project Details

### Mockups/designs of any UI components

This project is research oriented and as such there are no UI components to test.

### Technology stack

LaTeX (incl. build scripts), PDF, HTML.

### PoC/MVP

One of the elements will be summary tables, using attributes such as these:

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

Another component of this research is creating a token-categorization (questionnaire(s) or decision tree) that will aid/inform the specification of a token-economy. Nonetheless, there are already schemes that are useful even at this early stage. Such as these [Token Types (Burnie, Burnie and Henderson (2018))](https://doi.org/10.5195/ledger.2018.121):

- fuel-tokens: "underpin generic blockchain applications". I refine this definition as follows: The token yield is defined or modeled such that it provides holders with incentives to act for the purpose of ensuring the blockchain has the desired features/characteristics.
- transaction-tokens: "act as a cash substitute"
- voucher-tokens: "exchanged for a predefined asset". I include goods or services.

Effectively the objective is to arrive at a survey of current state of token-economy development, that forms the basis of a more forward looking "tokenomics", and a practical example aimed at Dotsama/Substrate developers without any formal training in economics.  These are intended as a future projects.

### Out of scope

- Crypto currencies/stable coins.
- Proof-of-work vs Proof-of-stake considerations, e.g. [Blockchain economics](https://scholar.princeton.edu/sites/default/files/markus/files/blockchain_paper_v7a.pdf).
- Governance considerations, e.g. trust and reputation.
- Game theory, behavioral economics/finance.
- Empirical inference of token-economy attributes from time-series or cross-sectional regression analysis.
- A review of the general economic modeling literature i.e. not related to blockchains.
- Substrate/Dotsama documentation.
- Verifying the network token-economy has been implemented as specified in the network whitepaper.
- Verifying the network whitepaper assumptions are a reasonable/plausible description of the network participants.

#### Crypto-Currencies

Their prevalence means the decision to exclude cryptocurrencies warrants some explanation.
Equilibria are generally explicitly constructed (which proves existence) using conjectured properties of the dividends (or an equivalent) from the economic activity. Specifically, a price is the present-value (i.e. discounted for time and non-diversifiable risk), of all future dividends. Since the dividends of fiat currencies are zero this approach does not work. While there are workarounds, they, being particular, are not of interest in the more general setting we wish to bring to light.
This decision is not indiscriminate nor superficial, so analysis such as ["A model of cryptocurrencies"](https://www.nber.org/system/files/working_papers/w26816/w26816.pdf) is within the scope of this project.

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  - Research into the design of a token-economy and survey of Polkadot token-economies.
- Who is your target audience?
  - Dotsama/Substrate Relay and Parachain developers.  Industry analysts/advisors (media and investors).
- What need(s) does your project meet?
  Developers and analysts need to understand the choices/trade-offs available when developing their token-economy.
  The set of modeling choices we canvas is defined by the exiting literature, both theoretical and applied (network whitepapers).
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
- academic publications relevant to the problem:
  One of the products from this research will be such a listing under three categories:
  - Published articles
  - Working papers
  - Polkadot parachain whitepapers
  The current (incomplete) list of research to be investigated is:
  - A Taxonomy of Blockchain-Based Systems for Architecture Design
  - An Economic Analysis of Blockchains
  - Assets on the blockchain: An empirical study of Tokenomics
  - Bitcoin: Economics, technology, and governance.
  - Bitcoins as an Investment or Speculative Vehicle? A First Look.
  - Blockchain and the Economics of Crypto-tokens and Initial Coin Offerings
  - Blockchain Disruption and Smart Contracts
  - Blockchain, Bitcoin, and ICOs: a review and research agenda
  - Blockchains, Real-time Accounting, and the Future of Credit Risk Modeling
  - Economic Simulation of Cryptocurrencies and Their Control Mechanisms
  - Interdependencies between Mining Costs, Mining Rewards and Blockchain Security
  - Redeemable Platform Currencies
  - Some simple bitcoin economics
  - Some Simple Economics of the Blockchain
  - Sustainable Growth and Token Economy Design: The Case of Steemit
  - The Blockchain Folk Theorem
  - The Blockchain Folk Theorem
  - The Economics of BitCoin Price Formation
  - The Economics of Distributed Ledger Technology for Securities Settlement
  - The nature of the firm
  - The token’s secret: the two-faced financial incentive of the token economy
  - Token-based platform finance
  - Tokenomics: Dynamic Adoption and Valuation
  - Understanding token-based ecosystems – a taxonomy of blockchain-based business models of start-ups
  - Valuation of Loyalty Tokens
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues:
  - [Tokenomics: Grant models](https://forum.polkadot.network/t/tokenomics-grant-models/1266)
- references to conversations you might have had related to this project with anyone from the Web3 Foundation
  There have been no conversations related to this project with anyone from the Web3 Foundation.
- previous interface iterations, such as mock-ups and wireframes:
  This project is research oriented and as such there are no mock-ups and wireframes to test.

## Development Roadmap :nut_and_bolt:

### Milestone 1 — Data gathering & Polkadot Networks

- **Estimated duration:** 6 weeks
- **FTE:**  1
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a.    | License                   |  Creative Commons Attribution 4.0 International License (article), Dual Apache 2 or MIT License (code) |
| 0b.    | Documentation             | We will provide both **PDF** and **HTML** versions of the working paper. |
| 0c.    | Testing and Testing Guide | Milestone 1 is research oriented and as such there is no code to test. |
| 0d.    | Docker                    | Milestone 1 is research oriented and as such there is no Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.    | Article                   | We will publish an **working paper** as indcated above. |
| 0e.2   |  - Dotsama Economies      | What are the central features and concerns across Dotsama Token-Economy networks? |
| 0e.3   |  - Structural Models      | What are the structural approaches to creating a Token-Economy? |
| 0e.4   |  - Reduced Form Models    | What are the reduced form approaches to creating a Token-Economy? |
| 1.     | Substrate modules         | Milestone 1 is research oriented and as such there is no Substrate module or chain functionality to implement. |
| 2.     | Substrate chain           | Milestone 1 is research oriented and as such there is no Substrate chain functionality to implement. |
| 3.     | Library                   | Milestone 1 is research oriented and as such there is no JS library that will implement the functionality described. |
| 4.     | Smart contracts           | Milestone 1 is research oriented and as such there is no ink! smart contracts that will implement the functionality described. |

### Milestone 2 — Outline Article

- **Estimated duration:** 6 weeks
- **FTE:**  1
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a.    | License                   |  Creative Commons Attribution 4.0 International License (article), Dual Apache 2 or MIT License (code) |
| 0b.    | Documentation             | We will provide both **PDF** and **HTML** versions of the working paper. |
| 0c.    | Testing and Testing Guide | Milestone 2 is research oriented and as such there is no code to test. |
| 0d.    | Docker                    | Milestone 2 is research oriented and as such there is no Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.    | Article                   | We will publish an **working paper** as indcated above. |
| 0e.2   |  - Partial Equilibrium Models | What token-economy features do the partial equilibrium approaches address? |
| 0e.3   |  - General Equilibrium Models | What token-economy features do the general equilibrium approaches address? |
| 1.     | Substrate modules         | Milestone 2 is research oriented and as such there is no Substrate module or chain functionality to implement. |
| 2.     | Substrate chain           | Milestone 2 is research oriented and as such there is no Substrate chain functionality to implement. |
| 3.     | Library                   | Milestone 2 is research oriented and as such there is no JS library that will implement the functionality described. |
| 4.     | Smart contracts           | Milestone 2 is research oriented and as such there is no ink! smart contracts that will implement the functionality described. |

### Milestone 3 — Finalize Article

- **Estimated Duration:** 6 weeks
- **FTE:**  1
- **Costs:** 18,000 USD

Finalize the flow-chart/decision-tree that will help developers place their token in the following contexts:

- Token Type
- Model Type
- Economy Type
- Sector Type
- Production Type
- Monetary Type

Finalize the literature survey.
Synthesize the descriptions of the Polkadot Parchain networks in the context of the existing token-economics literature.
Identify implementation opportunities suggested by the current literature.
Identify unexplored approaches to creating a Token-Economy, and any known issues.
Promote the working paper, incorporate feedback.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a.    | License                   |  Creative Commons Attribution 4.0 International License (article), Dual Apache 2 or MIT License (code) |
| 0b.    | Documentation             | We will provide both **PDF** and **HTML** versions of the working paper. |
| 0c.    | Testing and Testing Guide | Milestone 3 is research oriented and as such there is no code to test. |
| 0d.    | Docker                    | Milestone 3 is research oriented and as such there is no Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.    | Article                   | We will publish an **working paper** as indcated above. |
| 0e.1   |  - Introduction           | Place the topic in perspective and motivate non-specialist readers. |
| 0e.2   |  - Dotsama Economies      | What are the central features and concerns across Dotsama Token-Economy networks? |
| 0e.3   |  - Structural Models      | What are the structural approaches to creating a Token-Economy? |
| 0e.4   |  - Reduced Form Models    | What are the reduced form approaches to creating a Token-Economy? |
| 0e.5   |  - Partial Equilibrium Models | What token-economy features do the partial equilibrium approaches address? |
| 0e.6   |  - General Equilibrium Models | What token-economy features do the general equilibrium approaches address? |
| 0e.7   |  - Future Directions      | What are unexplored approaches to creating a Token-Economy? |
| 0e.8   |  - Summary                | Where are we and where to next? |
| 1.  | Substrate modules         | Milestone 3 is research oriented and as such there is no Substrate module or chain functionality to implement. |
| 2.  | Substrate chain           | Milestone 3 is research oriented and as such there is no Substrate chain functionality to implement. |
| 3.  | Library                   | Milestone 3 is research oriented and as such there is no JS library that will implement the functionality described. |
| 4.  | Smart contracts           | Milestone 3 is research oriented and as such there is no ink! smart contracts that will implement the functionality described. |

## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
  - The research article may be accepted for publication, but this is a fraught/political process and should not be considered a deliverable.
  - The results will be sent to blockchain websites, bloggers and posted to the Polkadot forum.
  - The working paper will be posted to [SSRN (e.g. FEN - Cryptocurrency Research eJournal)](https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=3839004), [IDEAS](https://ideas.repec.org/), [Arxiv (q-fin.GN)](https://arxiv.org/list/q-fin.GN/recent)
- the team's long-term plans and intentions in relation to it.
  - Engage in a more forward-looking/positive analysis of how to design a token-economy, addressing any gaps identified in this review.
  - Create a practical "how-to design a Dotsama/Substrate token-economy" series aimed at developers without any relevant economics/finance background.
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
