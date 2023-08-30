# Decentralized pallet-staking Audit Too
- **Team Name:** Mark Van de Vyver [PhD](https://www.student.uwa.edu.au/course/award-verification-service?family=vyver&family_partial=on&given=mark&given_partial=on&search=Search)
- **Payment Address:** 15WoVugRLfBAogS1FBmhzxVv8WZqZK1z4KKHALijTZfdVcCm (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

A decentralized tool (Excel/OpenOffice workbook) to allow developers, journalists/bloggers, business analysts, regulators and users to confirm the proper functioning of a program of

1. staked token rewards, and
1. non-staked token dilution.

- Brief description: A Excel/OpenOffice workbook that validates the staking metrics of a relay chain.
- Substrate / Polkadot / Kusama integration: The workbook will be submitted to the [pallet-staking](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/staking) repository.  The implementation will be Polkadot specific, but the workbook structure and detail will be extensible by other developers as they implement a staking program.
- Motivation: See [below](#motivation).

#### Description

The tool (Excel/OpenOffice workbook) targets `pallet-staking`. Polkadot staking rewards will be used as a PoC of how users of the staking pallet can create an audit tool.  The workbook will be dual Apache 2.0 & MIT licensed, so developers are free to adapt and extend it as they see fit.  As a decentralized tool, apart from trying to escape the surveillance business models, I will provide an Excel/OpenOffice/LibreOffice workbook.

The idea is that a relay chain that uses pallet-staking distributes their implementation of this tool as part of their toolchain.
This tool/workbook treats the running code or blockchain data as the source of truth. Under this premise, user inputs to the workbook are flagged as incorrect.

##### Pallet Integration

The workbook, containing the Polkadot PoC, will be submitted to the [pallet-staking](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/staking).  If that PR is declined, the github repository for this project will be available.

##### Quality Assurance

The data ETL scripts will be tested using [bats (Bash automated testing system)](https://bats-core.readthedocs.io/en/stable/).
The worksheets will have internal consistency checks. An example summary of such checks is:

<img src="https://user-images.githubusercontent.com/1468258/264204197-7046bb12-6d91-4093-9a85-5157bd56a5b3.png" width="200" height="100">

#### Motivation

[The silent 25% change in Polkadot staking rewards when the runtime was upgraded to v9340 (Jan 13/14 2023)](https://forum.polkadot.network/t/change-in-stake-rewards-rate-2023-jan-13-and-14/2387).

There are some contradictions between public descriptions of the staking rewards available, and the rewards paid.
Specifically, [this page](https://wiki.polkadot.network/docs/learn-staking-advanced#inflation) suggests expecting staking returns of **at least 20%** when the staking level is 50% or lower:

<img src="https://github.com/taqtiqa-mark/Grants-Program/assets/1468258/62574b51-ef5e-4e76-bcb3-20bb645c6eef" width="200" height="100">

While [this page](https://polkadot.network/features/staking/) shows the current, realized, staking return is **less than 16%**, for a staking level of 44%:

<img src="https://github.com/taqtiqa-mark/Grants-Program/assets/1468258/0083e19d-503b-4288-8cfa-8e873906aa58" width="200" height="100">

This suggests there is a need for an audit tool that allows a user to articulate their understanding of the state of the runtime of a relaychain. And then verify those expectations are met using data from the blockchain.

In addition, it is desireable this tool:

- be decentralized i.e. run on a user desktop, not a (centralized) web site;
- be accessible to any journalist/blogger, business analyst, regulator or like minded user tasked with validating and/or monitoring the performance/state of a relaychain;
- be extendable by any user with minimal script/macro skills;
- store data such that it is accessible outside of the workbook.

### Project Details

- Documentation
  - Collate
    - `pallet-staking`, `pallet-staking-reward-curve`, and `pallet-session` descriptions and details
    - Various Wiki [descriptions](https://wiki.polkadot.network/docs/maintain-guides-validator-payout) and [details](<https://wiki.polkadot.network/docs/learn-staking-advanced#inflation>)
    - W3F [documentation](https://research.web3.foundation/Polkadot/overview/token-economics)
    - StackExchange posts. Examples:
      - [here](<https://substrate.stackexchange.com/questions/5353/how-are-rewards-in-dot-calculated-from-the-era-points-earned-by-validators-in-po>)
      - [here](https://substrate.stackexchange.com/questions/2015/how-to-obtain-the-staking-amount-for-non-active-validators)
  - Synthesize
  - Distill
- Mockups/designs of any UI components:

  | Component         | Mockup  |
  |-------------------|-------------------|
  | Dashboard | <img src="https://github.com/taqtiqa-mark/Grants-Program/assets/1468258/9ffa467a-8610-49f3-939f-55e2fcf8ac1e.png" width="200" height="100"> |
  | Table of Contents | <img src="https://github.com/taqtiqa-mark/Grants-Program/assets/1468258/c15646a5-ce34-442e-8620-9f55205fbe1d.png" width="200" height="100">|
  | Documentation | <img src="https://user-images.githubusercontent.com/1468258/264206866-01654299-89a0-4ce1-86e4-9b954d3bfe42.png" width="200" height="100"> |
  | Keys | <img src="https://github.com/taqtiqa-mark/Grants-Program/assets/1468258/d694eb4d-9f05-4455-894b-842870e53897" width="200" height="100"> |
  | Setup | <img src="https://github.com/taqtiqa-mark/Grants-Program/assets/1468258/0b4e7d76-facc-4e12-ac83-98073df4ffd2" width="200" height="100"> |

  - Worksheets: Status, Charts, Dilution, Yield
- Core functionality
  - Token aggregate issuance growth vs inflation
    - Active nominators/validators
    - Inactive nominators/validators
    - Unstaked
  - Diluted vs undiluted holdings/positions
    - Active nominators/validators
    - Inactive nominators/validators
    - Unstaked
- Data models / API specifications of the
  - Draft PoC Parquet schema

```
{
  "fields": [
    {
      "name": "account",
      "data_type": "Utf8",
      "nullable": true,
      "dict_id": 0,
      "dict_is_ordered": false,
      "metadata": {}
    },
    {
      "name": "amount",
      "data_type": "UInt64",
      "nullable": true,
      "dict_id": 0,
      "dict_is_ordered": false,
      "metadata": {}
    },
    {
      "name": "block_timestamp",
      "data_type": "Int64",
      "nullable": true,
      "dict_id": 0,
      "dict_is_ordered": false,
      "metadata": {}
    },
    {
      "name": "event_id",
      "data_type": "Int64",
      "nullable": true,
      "dict_id": 0,
      "dict_is_ordered": false,
      "metadata": {}
    },
    {
      "name": "era",
      "data_type": "Utf8",
      "nullable": true,
      "dict_id": 0,
      "dict_is_ordered": false,
      "metadata": {}
    },
    {
      "name": "validator_stash",
      "data_type": "Utf8",
      "nullable": true,
      "dict_id": 0,
      "dict_is_ordered": false,
      "metadata": {}
    }
  ],
  "metadata": {}
}
```

- Technology stack
  - subscan.io, curl/wget, jq
  - Linux shell scripts, shellspec
  - Parquet/DuckDb/SQLite
  - LibreOffice
- Documentation of:
  - Scripts
  - User Guide

### Out of scope

- Analysis, verification or correction of any game theoretic claims.
- Analysis, verification of fitness for purpose.
- Changes to code (test cases and code comments are in scope).
- Changes to chain configuration settings.
- Type consistency between the implementation and the Workbook.

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  - The tool should be useful to any user seeking to validate the staking reward and non-staking dilution policies of a relaychain.
- Who is your target audience?
  - Blockchain/crypto-coin journalists/bloggers, business analysts, regulators, users.
- What need(s) does your project meet?
  - Provides evidence about the state of the staking reward and non-staking dilution policies of a relaychain.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - No
- Are there similar projects in related ecosystems
  - Not that I am aware of.

## Team :busts_in_silhouette

### Team members

- Mark Van de Vyver, [PhD](https://www.student.uwa.edu.au/course/award-verification-service?family=vyver&family_partial=on&given=mark&given_partial=on&search=Search)

### Contact

- **Contact Name:** Mark Van de Vyver, [PhD](https://www.student.uwa.edu.au/course/award-verification-service?family=vyver&family_partial=on&given=mark&given_partial=on&search=Search)
- **Contact Email:** <mark@taqtiqa.com>

### Legal Structure

- **Registered Address:** 9681 41st St NE, Saint Michael, MN 55376
- **Registered Legal Entity:** Begley Brothers Inc.

### Team's experience

- Mark Van de Vyver, [PhD](https://www.student.uwa.edu.au/course/award-verification-service?family=vyver&family_partial=on&given=mark&given_partial=on&search=Search)
  Expertise is in financial economics, mathematical statistics and implementation in both domains.

  - Commercial:
    - CourseAccess - with John Chionglo (CA), circa 1997. University class scheduling, course grade and materials management web site. When `htc` and `idx` files were a thing. Used by Dr. David Walsh to manage Financial Management course. That is, 300+ students served from a (dual!) Pentium-Pro.
    - Taqtiqa - Solo, circa 2009-11. Rode the AWS and devops wave. Negotiated commercial and academic use licenses with NYSE.
    - [Participant](https://doi.org/10.1111/j.1835-2561.2002.tb00191.x) in the Investment and Financial Services Association (IFSA) debate on expensing employee stock options.

  - Technical:
    - Thesis topics: Generalized AutoRegressive Conditional Heteroskedasticity (GARCH) option pricing and derivation of the asymptotic distribution of the deviance statistic, and related functions (estimators).  Awarded Distinction.
      - Supervisor: [Prof Ross Maller](https://web.archive.org/web/20230605043356/https://researchers.anu.edu.au/researchers/maller-ra).
      - Examiners:
        - [Prof Peter Brockwell](https://web.archive.org/web/20230731032804/https://dl.acm.org/profile/81100472556),
        - [Prof Charl Chiarella](https://doi.org/10.1016/j.jedc.2018.06.001),
        - [Prof Jin-Chuan Duan](https://web.archive.org/web/20230131093512/https://d.nuscri.org/profiles/duanjc/).
    - Market microstructure; [Corporate Finance](https://doi.org/10.1111/j.1835-2561.2002.tb00191.x); Investment Management; [Econometrics](http://dx.doi.org/10.1111/1368-423X.t01-1-00090).
    - Wrote a distributed computing screen saver for thesis calculations. Deployed across 400+ student laboratory computers; Served from dual Pentium-Pro (Win/NT 3/4).
    - Rust; Ruby; Julia; Python; MPI/MPICH;

  - Post-Doctoral Research Positions:
    - Financial Engineering Group, Centre of Advanced European Studies and Research. Bonn, Germany.
    - Centre of Expertise in Computational Finance, Cooperative Research Centre for Technology-Enabled Capital Markets, University of Technology, Sydney.

  - Open Source:
    - HTTP://GITHUB.COM/BEGLEYBROTHERS/IGNITE.CHEF - Chef Library Cookbook to manage Weaveworks Ingite.
    - HTTP://GITHUB.COM/BEGLEYBROTHERS/OCIX - Cross compile toolchains in Open Container Initiative images.
    - HTTP://GITHUB.COM/JLENV - Robust Julia version and environment management: Bash and Chef.

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

- [The unannounced Polkadot staking rewards change when the runtime was upgraded to v9340 (Jan 13/14 2023)](https://forum.polkadot.network/t/change-in-stake-rewards-rate-2023-jan-13-and-14/2387).

## Development Roadmap :nut_and_bolt

### Development Overview

- **Total Estimated Duration:**  4 months
- **Full-Time Equivalent (FTE):**  0.8 FTE
- **Total Costs:** 75,000 USD

### Milestone 1 — Spec. research, data scripts and tests

- **Estimated duration:** 1 month
- **FTE:**  0.8 FTE
- **Costs:** 25,000 USD

| Number  | Deliverable                 | Specification |
| -----:  | -----------                 | ------------- |
| **0a.** | License                     | Dual Apache 2.0, MIT |
| **0b.** | Documentation               | Collate `pallet-staking`, `pallet-staking-reward-curve`, and `pallet-session` descriptions and details. Various Wiki [descriptions](https://wiki.polkadot.network/docs/maintain-guides-validator-payout) and [details](<https://wiki.polkadot.network/docs/learn-staking-advanced#inflation>). W3F [documentation](https://research.web3.foundation/Polkadot/overview/token-economics). StackExchange posts: [here](<https://substrate.stackexchange.com/questions/5353/how-are-rewards-in-dot-calculated-from-the-era-points-earned-by-validators-in-po>) and [here](https://substrate.stackexchange.com/questions/2015/how-to-obtain-the-staking-amount-for-non-active-validators). English language, markdown format.|
| **0c.** | Testing & Guide             | Data ETL test framework scaffolding. In the user guide, we will describe how to run these tests. |
| **0d.** | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.     | User Guide                  | We will publish a document that explains how to use the audit tool. English language, markdown format (Overleaf).|
| 1.a     | Draft user guide: Skeleton  | User guide structure. English language, markdown format (Overleaf). |
| 1.b     | Draft user guide: Dashboard | Dashboard descriptions. English language, markdown format (Overleaf). |
| 1.c     | Draft user guide: Data ETL  | Data script descriptions. English language, markdown format (Overleaf). |
| 1.d     | Draft user guide: Testing   | Test script descriptions. English language, markdown format (Overleaf). |
| 1.e     | Draft workbook: Skeleton    | Workbook structure. English language, OpenOffice/LibreOffice format. |
| 1.f     | Draft workbook: Dashboard   | Workbook dashboard sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.g     | Draft workbook: Data ETL    | Workbook data sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.h     | Documentation issues & PRs  | Open and engage in documentation related issues and PRs. The scope is to align any documentation with the code. |
| 1.i     | Implementation issues & PRs | Open and engage in implementation related issues and PRs. These will be limited to test cases and code comments.|

### Milestone 2 — Audit workbook and user guide

- **Estimated duration:** 1 month
- **FTE:**  0.8 FTE
- **Costs:** 20,000 USD

| Number  | Deliverable                 | Specification |
| -----:  | -----------                 | ------------- |
| **0a.** | License                     | Dual Apache 2.0, MIT |
| **0b.** | Documentation               | Synthesize collated staking/dilution documentation. English language, markdown format.|
| **0c.** | Testing and Testing Guide   | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.     | User Guide                  | A **document** that explains how to use the audit workbook. English language, PDF format (Overleaf). |
| 1.a      | Draft user guide: Skeleton  | User guide structure. English language, markdown format (Overleaf). |
| 1.b      | Draft user guide: Dashboard | Dashboard descriptions. English language, markdown format (Overleaf). |
| 1.c      | Draft user guide: Data ETL  | Data script descriptions. English language, markdown format (Overleaf). |
| 1.d      | Draft user guide: Staking   | Staking descriptions. English language, markdown format (Overleaf). |
| 1.e      | Draft user guide: Dilution  | Dilution descriptions. English language, markdown format (Overleaf). |
| 1.f      | Draft user guide: Testing   | Test script descriptions. English language, markdown format. |
| 1.g      | Draft workbook: Skeleton    | Workbook structure. English language, OpenOffice/LibreOffice format. |
| 1.h      | Draft workbook: Dashboard   | Workbook dashboard sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.i      | Draft workbook: Data        | Workbook data sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.j      | Draft workbook: Staking     | Workbook staking logic. English language, OpenOffice/LibreOffice format. |
| 1.k      | Draft workbook: Dilution    | Workbook dilution logic. English language, OpenOffice/LibreOffice format. |
| 1.l      | Documentation issues & PRs  | Open and engage in documentation related issues and PRs. The scope is to align any documentation with the code. |
| 1.m      | Implementation issues & PRs | Open and engage in implementation related issues and PRs. These will be limited to test cases and code comments.|

### Milestone 3 — Audit workbook and user guide

- **Estimated duration:** 1 month
- **FTE:**  0.8 FTE
- **Costs:** 20,000 USD

| Number  | Deliverable                 | Specification |
| -----:  | -----------                 | ------------- |
| **0a.** | License                     | Dual Apache 2.0, MIT |
| **0b.** | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide   | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1.a     | Finalized user guide: Dashboard  | Dashboard descriptions. English language, markdown format (Overleaf). |
| 1.b     | Finalized user guide: Data ETL   | Data script descriptions. English language, markdown format (Overleaf). |
| 1.c     | Finalized user guide: Staking    | Staking descriptions. English language, markdown format (Overleaf). |
| 1.d     | Finalized user guide: Dilution   | Dilution descriptions. English language, markdown format (Overleaf). |
| 1.e     | Finalized user guide: Testing    | Test script descriptions. English language, markdown format (Overleaf). |
| 1.f     | Finalized workbook: Dashboard    | Workbook dashboard sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.g     | Finalized workbook: Data         | Workbook data sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.h     | Finalized workbook: Staking      | Workbook staking logic. English language, OpenOffice/LibreOffice format. |
| 1.i     | Finalized workbook: Dilution     | Workbook dilution logic. English language, OpenOffice/LibreOffice format. |
| 1.j     | Finalized workbook: Charts       | Workbook charts. English language, OpenOffice/LibreOffice format. |
| 1.k     | Documentation issues & PRs  | Open and engage in documentation related issues and PRs. The scope is to align any documentation with the code. |
| 1.l     | Implementation issues & PRs | Open and engage in implementation related issues and PRs. These will be limited to test cases and code comments.|
| 1.m     | Staking Pallet PR           | Open and engage in PR to add this tool to the Staking Pallet. |

### Milestone 4 — Final milestone review, scope creep

- **Estimated duration:** 1 month
- **FTE:**  0.5 FTE
- **Costs:** 10,000 USD

| Number  | Deliverable                      | Specification |
| -----:  | -----------                      | ------------- |
| **0a.** | License                          | Dual Apache 2.0, MIT |
| **0b.** | Documentation                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide        | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                           | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.     | User Guide                       | A **document** that explains how to use the audit workbook. English language, PDF format (Overleaf). |
| 1.a     | Reviewed user guide: Dashboard   | Dashboard descriptions. English language, markdown format (Overleaf). |
| 1.b     | Reviewed user guide: Data ETL    | Data script descriptions. English language, markdown format (Overleaf). |
| 1.c      | Reviewed user guide: Staking     | Staking descriptions. English language, markdown format (Overleaf). |
| 1.d      | Reviewed user guide: Dilution    | Dilution descriptions. English language, markdown format (Overleaf). |
| 1.e      | Reviewed user guide: Testing     | Test script descriptions. English language, markdown format (Overleaf). |
| 1.f      | Reviewed workbook: Dashboard     | Workbook dashboard sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.g      | Reviewed workbook: Data          | Workbook data sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.h      | Reviewed workbook: Staking       | Workbook staking logic. English language, OpenOffice/LibreOffice format. |
| 1.i      | Reviewed workbook: Dilution      | Workbook dilution logic. English language, OpenOffice/LibreOffice format. |
| 1.j      | Reviewed workbook: Charts        | Workbook charts. English language, OpenOffice/LibreOffice format. |
| 1.k      | Documentation issues & PRs       | Open and engage in documentation related issues and PRs. |
| 1.l      | Implementation issues & PRs      | Open and engage in implementation related issues and PRs. |
| 1.m      | Staking Pallet PR                | Open and engage in PR to add this tool to the Staking Pallet. |

## Future Plans

- We intend this tool to be used to monitor Polkadot. The workbook possibly can be extended to other main-nets.  The ease or difficulty of such extensions depend on the staking/slashing logic the main-net implements.
- Possible extensions are:
  - Kusama
- If user interest is sufficient, port the data ETL scripts to OpenOffice macros.

## Additional Information :heavy_plus_sign

**How did you hear about the Grants Program?** Web3 Foundation Website

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Prior art:
  - PoC Data gathered in the course of identifying [the unannounced Polkadot staking rewards change when the runtime was upgraded to v9340 (Jan 13/14 2023)](https://forum.polkadot.network/t/change-in-stake-rewards-rate-2023-jan-13-and-14/2387).
- Pior grants:
  - [Tokeneconomics survey 2022](https://github.com/w3f/Grants-Program/blob/master/applications/tokenomics-survey-2022.md)
