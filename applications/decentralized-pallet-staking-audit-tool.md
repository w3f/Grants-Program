# Decentralized pallet-staking Audit Tool

- **Team Name:** Mark Van de Vyver [PhD](https://www.student.uwa.edu.au/course/award-verification-service?family=van+de+vyver&family_partial=on&given=mark&search=Search)
- **Payment Address:** 15WoVugRLfBAogS1FBmhzxVv8WZqZK1z4KKHALijTZfdVcCm (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is in draft status - seeking feedback on whether this topic is in the scope of W3F grant.
If this topic is in the scope of W3F grants, additional milestone detail will be provided where indicated, and re-submitted.

### Overview

A decentralized tool to allow business analysts, regulators and users to confirm the proper functioning of a program of 1) staking rewards and 2) token dilution.

#### Description

The initial implementation of the tool targets `pallet-staking`. Polkadot staking rewards will be used as a PoC.

#### Motivation

[The silent 25% change in Polkadot staking rewards when the runtime was upgraded to v9340 (Jan 13/14 2023)](https://forum.polkadot.network/t/change-in-stake-rewards-rate-2023-jan-13-and-14/2387).

There are some contradictions between public descriptions of the staking rewards available, and the rewards paid.
Specifically, [this page](https://wiki.polkadot.network/docs/learn-staking-advanced#inflation) suggests expecting staking returns of **at least 20%** when the staking level is 50% or lower:

![image](https://github.com/taqtiqa-mark/Grants-Program/assets/1468258/62574b51-ef5e-4e76-bcb3-20bb645c6eef)

While [this page](https://polkadot.network/features/staking/) shows the current, realized, staking return is **less than 16%**, for a staking level of 44%:

![image](https://github.com/taqtiqa-mark/Grants-Program/assets/1468258/0083e19d-503b-4288-8cfa-8e873906aa58)

This suggests there is a need for an audit tool that allows a user to articulate their understanding of the state of the runtime of a relaychain. And then verify those expectations are met using data from the blockchain.

In addition, it is desireable this tool:

- be decentralized i.e. run on a user desktop, not a (centralized) web site;
- be accessible to any business analyst, regulator or like minded user tasked with validating and/or monitoring the performance/state of a relaychain;
- be extendable by any user with minimal script/macro skills;
- store data such that it is accessible outside of the tool.

### Project Details

- Documentation
  - Collate
    - `pallet-staking`, `pallet-staking-reward-curve`, and `pallet-session` descriptions and details
    - Various Wiki [descriptions](https://wiki.polkadot.network/docs/maintain-guides-validator-payout) and [details](<https://wiki.polkadot.network/docs/learn-staking-advanced#inflation>)
    - W3F [documentation](https://research.web3.foundation/Polkadot/overview/token-economics)
    - StackExchange posts:
      - [here](<https://substrate.stackexchange.com/questions/5353/how-are-rewards-in-dot-calculated-from-the-era-points-earned-by-validators-in-po>)
      - [here](https://substrate.stackexchange.com/questions/2015/how-to-obtain-the-staking-amount-for-non-active-validators)
  - Synthesize
  - Distill
- Mockups/designs of any UI components:
  - ![image](https://github.com/taqtiqa-mark/Grants-Program/assets/1468258/9ffa467a-8610-49f3-939f-55e2fcf8ac1e)
  - Worksheets: Status, Charts, Dilution, Yield
- Core functionality
  - Token aggregate issuance growth vs inflation
    - Active nominators/validators
    - Inactive nominators/validators
    - Unstaked holders
  - Diluted vs undiluted holdings/positions
    - Active nominators/validators
    - Inactive nominators/validators
    - Unstaked holders
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

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  - The tool should be useful to any user seeking to validate the staking reward and non-staking dilution policies of a relaychain.
- Who is your target audience?
  - Business analysts, regulators, users.
- What need(s) does your project meet?
  - Provides evidence about the state of the staking reward and non-staking dilution policies of a relaychain.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - No
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

- W3F Grant: [Token economics survey (2022)](https://github.com/w3f/Grants-Program/blob/master/applications/tokenomics-survey-2022.md)
- W3F RFP: [Designing UpChain: a framework for securing Substrate runtime upgrades and Substrate network upgrades](https://github.com/w3f/Grants-Program/pull/1309)

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
- **Full-Time Equivalent (FTE):**  0.2 FTE
- **Total Costs:** 16,000 USD

### Milestone 1 — Spec. research, data scripts and tests

- **Estimated duration:** 1 month
- **FTE:**  0.2 FTE
- **Costs:** 4,000 USD

| Number  | Deliverable                | Specification |
| -----:  | -----------                | ------------- |
| **0a.** | License                    | Dual Apache 2.0, MIT |
| **0b.** | Documentation              | Collate `pallet-staking`, `pallet-staking-reward-curve`, and `pallet-session` descriptions and details. Various Wiki [descriptions](https://wiki.polkadot.network/docs/maintain-guides-validator-payout) and [details](<https://wiki.polkadot.network/docs/learn-staking-advanced#inflation>). W3F [documentation](https://research.web3.foundation/Polkadot/overview/token-economics). StackExchange posts: [here](<https://substrate.stackexchange.com/questions/5353/how-are-rewards-in-dot-calculated-from-the-era-points-earned-by-validators-in-po>) and [here](https://substrate.stackexchange.com/questions/2015/how-to-obtain-the-staking-amount-for-non-active-validators). English language, markdown format.|
| **0c.** | Testing & Guide            | Data ETL test framework scaffolding. In the user guide, we will describe how to run these tests. |
| **0d.** | Docker                     | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.     | User Guide                 | We will publish a document that explains how to use the audit tool. English language, markdown format (Overleaf).|
| 1.      | Draft user guide: Skeleton | User guide structure. English language, markdown format (Overleaf). |
| 1.      | Draft workbook: Skeleton   | Workbook structure. English language, OpenOffice/LibreOffice format. |

### Milestone 2 — Spec. research, data scripts and tests

- **Estimated duration:** 1 month
- **FTE:**  0.2 FTE
- **Costs:** 4,000 USD

| Number  | Deliverable                 | Specification |
| -----:  | -----------                 | ------------- |
| **0a.** | License                     | Dual Apache 2.0, MIT |
| **0b.** | Documentation               | Synthesize collated staking/dilution documentation. English language, markdown format.|
| **0c.** | Testing and Testing Guide   | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.     | User Guide                  | We will publish a document that explains how to use the audit tool. English language, markdown format (Overleaf).|
| 1.      | Draft user guide: Skeleton  | User guide structure. English language, markdown format (Overleaf). |
| 1.      | Draft user guide: Dashboard | Dashboard descriptions. English language, markdown format (Overleaf). |
| 1.      | Draft user guide: Data ETL  | Data script descriptions. English language, markdown format (Overleaf). |
| 1.      | Draft user guide: Testing   | Test script descriptions. English language, markdown format (Overleaf). |
| 1.      | Draft workbook: Skeleton    | Workbook structure. English language, OpenOffice/LibreOffice format. |
| 1.      | Draft workbook: Dashboard   | Workbook dashboard sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.      | Draft workbook: Data ETL    | Workbook data sheets structure. English language, OpenOffice/LibreOffice format. |

### Milestone 3 — Audit workbook and user guide

- **Estimated duration:** 1 month
- **FTE:**  0.2  FTE
- **Costs:** 4,000 USD

| Number  | Deliverable                 | Specification |
| -----:  | -----------                 | ------------- |
| **0a.** | License                     | Dual Apache 2.0, MIT |
| **0b.** | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide   | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.     | User Guide                  | A **document** that explains how to use the audit workbook. English language, PDF format (Overleaf). |
| 1.      | Draft user guide: Skeleton  | User guide structure. English language, markdown format (Overleaf). |
| 1.      | Draft user guide: Dashboard | Dashboard descriptions. English language, markdown format (Overleaf). |
| 1.      | Draft user guide: Data ETL  | Data script descriptions. English language, markdown format (Overleaf). |
| 1.      | Draft user guide: Staking   | Staking descriptions. English language, markdown format (Overleaf). |
| 1.      | Draft user guide: Dilution  | Dilution descriptions. English language, markdown format (Overleaf). |
| 1.      | Draft user guide: Testing   | Test script descriptions. English language, markdown format. |
| 1.      | Draft workbook: Skeleton    | Workbook structure. English language, OpenOffice/LibreOffice format. |
| 1.      | Draft workbook: Dashboard   | Workbook dashboard sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.      | Draft workbook: Data        | Workbook data sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.      | Draft workbook: Staking     | Workbook staking logic. English language, OpenOffice/LibreOffice format. |
| 1.      | Draft workbook: Dilution    | Workbook dilution logic. English language, OpenOffice/LibreOffice format. |

### Milestone 4 — Audit workbook and user guide

- **Estimated duration:** 1 month
- **FTE:**  0.2 FTE
- **Costs:** 4,000 USD

| Number  | Deliverable                      | Specification |
| -----:  | -----------                      | ------------- |
| **0a.** | License                          | Dual Apache 2.0, MIT |
| **0b.** | Documentation                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide        | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                           | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.     | User Guide                       | A **document** that explains how to use the audit workbook. English language, PDF format (Overleaf). |
| 1.      | Finalized user guide: Dashboard  | Dashboard descriptions. English language, markdown format (Overleaf). |
| 1.      | Finalized user guide: Data ETL   | Data script descriptions. English language, markdown format (Overleaf). |
| 1.      | Finalized user guide: Staking    | Staking descriptions. English language, markdown format (Overleaf). |
| 1.      | Finalized user guide: Dilution   | Dilution descriptions. English language, markdown format (Overleaf). |
| 1.      | Finalized user guide: Testing    | Test script descriptions. English language, markdown format (Overleaf). |
| 1.      | Finalized workbook: Dashboard    | Workbook dashboard sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.      | Finalized workbook: Data         | Workbook data sheets structure. English language, OpenOffice/LibreOffice format. |
| 1.      | Finalized workbook: Staking      | Workbook staking logic. English language, OpenOffice/LibreOffice format. |
| 1.      | Finalized workbook: Dilution     | Workbook dilution logic. English language, OpenOffice/LibreOffice format. |
| 1.      | Finalized workbook: Charts       | Workbook charts. English language, OpenOffice/LibreOffice format. |

## Future Plans

- We intend this tool to be used to monitor Polkadot and possibly other main-nets.
- Possible extensions are:
  - Kusama
  - Token flows to a treasury account
- If user interest is sufficient, port the data ETL scripts to OpenOffice macros.

## Additional Information :heavy_plus_sign

**How did you hear about the Grants Program?** Web3 Foundation Website

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Prior art:
  - PoC Data gathered in the course of identifying [the unannounced Polkadot staking rewards change when the runtime was upgraded to v9340 (Jan 13/14 2023)](https://forum.polkadot.network/t/change-in-stake-rewards-rate-2023-jan-13-and-14/2387).
- Pior grants:
  - [Tokeneconomics survey 2022](https://github.com/w3f/Grants-Program/blob/master/applications/tokenomics-survey-2022.md)
