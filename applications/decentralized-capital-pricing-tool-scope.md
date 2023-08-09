# Decentralized Effervescent-Token Model and Capital Pricing Tool: Scoping study

- **Team Name:** Mark Van de Vyver [PhD](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=Search)
- **Payment Address:** 15WoVugRLfBAogS1FBmhzxVv8WZqZK1z4KKHALijTZfdVcCm (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up

This application is in draft status - seeking feedback on whether this topic is in the scope of a W3F grant.
If this topic is in the scope of W3F grants, additional milestone detail will be provided where indicated, and re-submitted.

### Overview

A scoping study for: A Blockchain capital pricing workbook template and documentation.
Prior related W3F Grant: [Token economics survey 2022](https://github.com/taqtiqa-mark/tokenomics-survey-2022/)

Together the workbook and user guide are intended to demonstrate how to:

1. design a (hypothetical) blockchain token with known (theoretical) equilibrium relations,
2. build a model the equilibrium token dynamics, and
3. construct a capital pricing model for the token.

The target audience is blockchain developers, analysts and users. The tool implementation will refer to Substrate components relay chain, parachain, solo-chain, on-demand chain. Otherwise it is blockchain agnostic.

#### Description

Design a hypothetical token with a known pricing relation to observable variables that influence the token value dynamics.
The token use case and design will strive to be consistent with the constraints and requirements described by [Cong, Lin William, Ye Li, and Neng Wang. “Tokenomics: Dynamic Adoption and Valuation.” The Review of Financial Studies 34, no. 3 (August 2020): 1105–1155.](https://doi.org/10.1093/rfs/hhaa089).
Implement a capital pricing workbook for the so designed token/coin.

The capital pricing framework will be the Black Zero-Beta capital asset pricing model (CAPM).

#### Motivation

Particular tokenomics can introduce different token users with conflicting interests. And [it is known](https://doi.org/10.1111/jofi.13192), under [different conditions](https://doi.org/10.1287/mnsc.2023.4756), such conflicts can lead to the token/platform breaking down.
However, currently there is zero help or guidance for developers create a token economy that does not have these vulnerabilities. Yet all the tools are provided to do create such vulnerable/fragile tokens.

This is a recipe for disasters.

This project establishes the scope of work required to develop a workbook and user guide to assist developers in creating a token economy that is not known to be vulnerable to breakdown.

There is a need for blockchain developers and users to have access to tools and documentation that allows them to explore the dynamics of a token, and to later verify those expectations using data from the blockchain.

There are two use cases: Pre-launch and post-launch

- Pre-launch - development tool:
  - Can you identify the productivity benefit that is driving your token value?
  - Are there proxy or real data that measure those things? Directly? Indirectly?
  - Is their use case compatible with the token requirements/assumptions?
  - Does the Substrate chain support the configuration required by the token design?
  - Do the developers understand the range of token price volatility to expect?
  - Do you and your users understand the 'best-estimate' timeframes required for your expected network effects to materialize?

- Post-launch - validation tool:
  - Are the proxy or real data consistent the intended use case?
  - Are users adopting the token as was expected pre-go-live?
  - Is the token price dynamics within the range expected pre-go-live?
  - Are the network effects and user adoption materializing as you expected?

Furthermore, it is common for capital costs to be calculated using a variant of the Capital Asset Pricing Model (CAPM). Specifically, a survey of CFOs by [Graham and Harvey (2001)](https://doi.org/10.1016/S0304-405X(01)00044-7) indicates that 73.5% of responding financial executives use the CAPM for capital budgeting. [Truong, Partington and Peat (2008)](https://doi.org/10.1177/031289620803300106) find that in Australia, 72% of responding financial executives use the CAPM for capital budgeting.

The workbook and user guide will assist developers and users in calculating a cost-of-capital estimate for their token design.

### Project Details

#### Draft scope

The workbook and user guide will assist developers building a blockchain token economy, by providing:

- an example (hypothetical) token design and use case;
- an adoption checklist of criteria to be met for the token model to be applicable;
- an example construction of a token state variable given the token design and use case;
- a simulated sample distribution of future token values;
- an example adoption curve for the token;
- an estimate of the discount rate for token expenditures;
- an estimate of the expected rate of return for the tokens under Black's Zero-Beta CAPM.

In addition, it is desireable this tool:

- be decentralized i.e. run on a user desktop, not a (centralized) web site;
p- be accessible to any developer, business analyst, regulator or like minded user tasked with developing or assessing a Substrate based blockchain token;
- be extendable by any user with minimal script/macro skills;

- Mockups/designs of any UI components:
  - Worksheets:
    - Charts: adoption curve (simulated), expected token value distributions (simulated), etc.
    - Riskless return data
    - State variable (model and construction)
    - Token dynamics
    - Benchmark portfolio construction
    - Zero-beta portfolio weight calculations
    - Token beta and expected return calculations
    - Token simulations: 1Yr, 3Yr, 5Yr
- Core functionality
  - Token expected return p.a. (a.k.a treasury/project discount rate)
  - Adoption curve (1, 3, and 5 years)
  - Token value distributions (1, 3, and 5 years)

- Technology stack
  - Public data providers
  - curl/wget, jq
  - Linux shell scripts, shellspec
  - Parquet/DuckDb/SQLite
  - LibreOffice

- Documentation:
  - Scripts
  - User Guide

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  - The tool and guide should be useful to any developer or analyst seeking to understand the design of a blockchain token.
  - The tool will provide outputs (e.g. discount rate) that serve as inputs to a blockchain treasury capital/project budgeting tool.
- Who is your target audience?
  - Developers, business analysts, regulators, users.
- What need(s) does your project meet?
  - Provides an example of how to construct a token/coin such that there is a known pricing relation that articulates the observable variables that influence the token value dynamics.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - No.
- Are there similar projects in related ecosystems
  - Not that I am aware of.

## Team :busts_in_silhouette

### Team members

- Mark Van de Vyver, [PhD](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=Search)

### Contact

- **Contact Name:** Mark Van de Vyver, [PhD](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=Search)
- **Contact Email:** <mark@taqtiqa.com>

### Legal Structure

- **Registered Address:** 9681 41st St NE, Saint Michael, MN 55376
- **Registered Legal Entity:** Begley Brothers Inc.

### Team's experience

- Mark Van de Vyver, [PhD](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=Search)
  Expertise is in financial economics, mathematical statistics and implementation in both domains.

  - Commercial:
    - CourseAccess - with John Chionglo (CA), circa 1997. University class scheduling, course grade and materials management web site. When `htc` and `idx` files were a thing. Used by Dr. David Walsh to manage Financial Management course. That is, 300+ students served from a (dual!) Pentium-Pro.
    - Taqtiqa - Solo, circa 2009-11. Rode the AWS and devops wave. Negotiated commercial and academic use license with NYSE.
    - [Participant](https://doi.org/10.1111/j.1835-2561.2002.tb00191.x) in the Investment and Financial Services Association (IFSA) debate on expensing employee stock options.

  - Technical:
    - Thesis topics: Generalized AutoRegressive Conditional Heteroskedasticity (GARCH) option pricing and derivation of the asymptotic distribution of the deviance statistic, and related functions (estimators).  Awarded Distinction. Examiners [Brockwell](https://web.archive.org/web/20230731032804/https://dl.acm.org/profile/81100472556), [Chiarella](https://doi.org/10.1016/j.jedc.2018.06.001), [Duan](https://web.archive.org/web/20230131093512/https://d.nuscri.org/profiles/duanjc/). Supervisor [Prof Ross Maller](https://web.archive.org/web/20230605043356/https://researchers.anu.edu.au/researchers/maller-ra).
    - Market microstructure; [Corporate Finance](https://doi.org/10.1111/j.1835-2561.2002.tb00191.x); Investment Management; [Econometrics](http://dx.doi.org/10.1111/1368-423X.t01-1-00090).
    - Wrote a distributed computing screen saver for thesis calculations. Deployed across 400+ student laboratory computers; Served from dual Pentium-Pro (Win/NT 3/4).
    - Rust; Ruby; Julia; Python; MPI/MPICH;

  - W3F:
    - Grant: [Token-economics survey (2022)](https://github.com/w3f/Grants-Program/blob/master/applications/tokenomics-survey-2022.md)
    - RFP: [Designing UpChain: a framework for securing Substrate runtime upgrades and Substrate network upgrades](https://github.com/w3f/Grants-Program/pull/1309)

### Team Code Repos

Personal

- <https://github.com/taqtiqa-mark>
- <https://github.com/bbros-dev>
- <https://github.com/taqtiqa>
- <https://github.com/BegleyBrothers>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/tatiqa/>

## Development Status :open_book

- [Token economics survey 2022](https://github.com/w3f/Grants-Program/blob/master/applications/tokenomics-survey-2022.md).
  - Selection of the token design described in [Cong, Lin William, Ye Li, and Neng Wang. “Tokenomics: Dynamic Adoption and Valuation.” The Review of Financial Studies 34, no. 3 (August 2020): 1105–1155.](https://doi.org/10.1093/rfs/hhaa089).

## Development Roadmap :nut_and_bolt

### Development Overview

- **Total Estimated Duration:**  3 months
- **Full-Time Equivalent (FTE):**  0.6 FTE
- **Total Costs:** 30,000 USD

If this topic is in the scope of W3F grants, additional detail will be provided.

### Milestone 1 — Token use case, design and model

- **Estimated duration:** 1 month
- **FTE:**  0.6 FTE
- **Costs:** 10,000 USD

If this topic is in the scope of W3F grants, required milestone detail will be provided.

- Document token design and (hypothetical) use case.
  - Identify required properties of the state variable specification.
  - Identify optional properties of the state variable specification.
- Prepare W3F grant application for implementation.
- Documentation.

### Milestone 2 — Token use case, design and model

- **Estimated duration:** 1 month
- **FTE:**  0.6 FTE
- **Costs:** 10,000 USD

If this topic is in the scope of W3F grants, required milestone detail will be provided.

- Identify required model development for an empirically measurable state variable.
- Identify required data for measurable state variable model and possible data sources.
- Identify required workbook structure and components.
- Identify required user guide structure and components.
- Prepare W3F grant application for implementation.

### Milestone 3 — Token use case, design and model

- **Estimated duration:** 1 month
- **FTE:**  0.6 FTE
- **Costs:** 10,000 USD

If this topic is in the scope of W3F grants, required milestone detail will be provided.

- Finalize required model development for an empirically measurable state variable.
- Finalize required data for measurable state variable model and possible data sources.
- Finalize required workbook structure and components.
- Finalize required user guide structure and components.
- Finalize W3F grant application for implementation.

## Future Plans

- W3F grant application for implementation
- W3F grant application for a DAO treasury capital budgeting tool.  This will assist teams and communities systematically and objectively evaluate treasury resources among competing applications.
- If user interest is sufficient, port relevant parts of the documentation and spreadsheet content to an applied tokenomics tutorial using the Open Web3 Stack.

## Additional Information :heavy_plus_sign

- [Truong, G., Partington, G., & Peat, M. (2008). Cost-of-Capital Estimation and Capital-Budgeting Practice in Australia. Australian Journal of Management, 33(1), 95–121.](https://doi.org/10.1177/031289620803300106)
- [Graham, J. & Harvey, C. 2001, ‘The theory and practice of corporate finance: Evidence from the field’, Journal of Financial Economics, vol. 60, pp. 187–243.]()

**How did you hear about the Grants Program?** Web3 Foundation Website

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Pior grants:
  - [Token economics survey 2022](https://github.com/w3f/Grants-Program/blob/master/applications/tokenomics-survey-2022.md)
