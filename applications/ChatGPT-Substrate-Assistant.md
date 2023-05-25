# ChatGPT Substrate Assistant: Text-to-SQL interfaces to Substrate + XCM Big Data (SXBD)

- **Team Name:** Colorful Notion, Inc.
- **Payment Address** `0xEaf3223589Ed19bcd171875AC1D0F99D31A5969c`
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Abstract :page_facing_up:

Colorful Notion proposes to enhance Polkaholic.io with the ChatGPT API, making it easy for non-technical users to query Substrate-etl chain activity using plain English.

## Project Overview :page_facing_up:

[Substrate-etl](https://github.com/colorfulnotion/substrate-etl) is a large-scale index of Polkadot/Kusama chains' raw data on [Google BigQuery Public Datasets](https://console.cloud.google.com/bigquery/analytics-hub/exchanges/projects/974572213039/locations/us/dataExchanges/substrate_18804f88005),
developed by [Colorful Notion](https://colorfulnotion.com).
It includes blocks, extrinsics, events, XCM, and XCM transfers. Users with a Google Cloud account can utilize BigQuery SQL
to query recent data across the entire Polkaverse.
However, SQL interfaces require significant learning and knowledge of table schemas, which can be challenging for non-technical
users.  Furthermore, different SQL dialects (e.g., BigQuery SQL, MySQL, PostgreSQL) further complicate the process.

[ChatGPT](https://chat.openai.com/), developed by OpenAI, is a Large Language Model (LLM) conversational model released in Fall 2022.
It can answer both general-purpose and highly technical questions. The ChatGPT's LLM is capable of understanding natural language
as well as SQL, accessible through the OpenAI API. By using ChatGPT's text-to-SQL capabilities, users can input queries in plain
English and receive the corresponding SQL code.

For example, given a prompt of:
```
### Postgres SQL tables, with their properties:
#
# Employee(id, name, department_id)
# Department(id, name, address)
# Salary_Payments(id, employee_id, amount, date)
#
### A query to list the names of the departments which employed more than 10 employees in the last 3 months
SELECT
```

the ChatGPT API generates a *text-to-SQL* completion of:

```
SELECT d.name
        FROM Department d
        INNER JOIN Employee e ON d.id = e.department_id
        INNER JOIN Salary_Payments sp ON e.id = sp.employee_id
        WHERE sp.date > NOW() - INTERVAL '3 months'
        GROUP BY d.name
        HAVING COUNT(*) > 10
```

Given a well-put together prompt, the LLM is able to piece together INNER JOINs and GROUP BY and HAVING, using the Postgres SQL dialect.


Colorful Notion has conducted exploratory research using the ChatGPT API and believes it is possible to achieve
"prompt engineering" in the context of Polkaholic.io.  Here is a mockup of how we envision an "ChatGPT Substrate Assistant" working:

****[SCREENSHOT]****

Internal to the above UI, is a PROMPT containing both _system-generated component_ (derived from the context) and a _user-generated component_ to the prompt:
```
Given the following schema and CSV data sample from the BigQuery table "substrate-etl.polkadot_enterprise.calls":

relay_chain,para_id,id,block_hash,block_number,block_time,extrinsic_hash,extrinsic_id,extrinsic_section,extrinsic_method,call_id,call_index,call_section,call_method,call_args,call_args_def,root,leaf,fee,fee_usd,weight,signed,signer_ss58,signer_pub_key,lifetime
polkadot,2035,phala,0xcee4e0ff2b686700f4aa84e8ec7b7bcadfda94dc02da0046e78f66c9bb66b278,2600503,,0x0eea03b00fc6f8b1e1ae36c0708dfa3a3a02d58e0b7dbee2c30d257b5f15d86a,2600503-10,proxy,proxy,0-0,0x0304,utility,forceBatch,,,false,false,,,,true,42i6juXxTt5Jk78f4xHPqss8uQiaK6m97vM9dyoUXmudmCxq,0x5c853cd26cf06bc9021c013fcb02c677787d0c176f80481b8fd319117a8b3d2b,
kusama,2004,khala,0x3d5bd4373855d50fa40a38f64f17f8ef0f47b7c20c4fab8485e550296e9f2448,3939260,,0x2d1a1596f8a9324dc6c604a84e747d1de6f10d8dfb2662739a11f14c3deeb388,3939260-9,proxy,proxy,0-0-0,0x5d0d,phalaStakePoolv2,startComputing,,,false,true,,,,true,42ifo3BEBp4PoUna2Ceuyymc3RJXYdBSQ91LPyJcFwJZaWZn,0x5cf481db78b923ae000a18294278c2edbe34713dafda8189b6f80d93a0f00c19,
...

Write a SQL Query to ***find the exact number of balance transfers in the last 4 hours which exceed 1 dollars in fees***
```

The user-generated component is just the component in bold:
```
find the exact number of balance transfers in the last 4 hours which have fees exceeding 1 dollar
```

Given the above prompt, the ChatGPT API can generate a _correct_ text-to-SQL mapping of:

```
SELECT COUNT(*) as num_transfers
FROM `substrate-etl.polkadot_enterprise.calls`
WHERE call_section = 'balances'
AND call_method = 'transfer'
AND TIMESTAMP_SECONDS(block_time) BETWEEN TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 4 HOUR) AND CURRENT_TIMESTAMP()
AND fee_usd > 1.0
```

This SQL can be immediately mapped to a data table, with both the underlying ChatGPT API prompt and generated SQL inspectable for data analysts to use in their project.

By combining user-generated prompts with system-generated data (such as CSV, schema, and dialect) in the context of a multichain block explorer, it is possible to generate
effective SQL queries for substrate-etl that can be subsequently used inside business intelligence tools like Dune Analytics, Apache Superset, and Google Looker.
The generated SQL queries can be immediately mapped to data tables, allowing data analysts and blockchain engineers to inspect and utilize them in their projects.

This proposal aims to:

* Implement prompt engineering within the context of a multichain block explorer.
* Collect corpora on resolution failures and invite user feedback to improve the system.
* Make it easy for new users to generate prompts and allow data analysts to quickly find utility with substrate-etl data.

It is important to note that 100% success cannot be guaranteed, as underspecified prompts or requests for more information
may not be mapped into SQL. However, with iterative improvements based on user input and feedback, text-to-SQL processes can be
improved over time. The Substrate community is expected to be forgiving of initial failures, understanding that prompt engineering requires refinement.

### Project Details

This project involves front-end and back-end engineering:

#### Front-End UI.

We will add a "ChatGPT Substrate Assistant" to a subset of polkaholic.io pages (minimum 8 out of 15).  We list out 15 pages and a sample query we expect to be able to resolve with some prompt engineering:

- [Chains page](https://polkaholic.io/) "Which chains had the highest percentage growth of active users month over month in the last 2 months?"
- [Chain page](https://polkaholic.io/blocks/polkadot) "Find me what swap transactions I did in the last hour"
- [Block page](https://polkaholic.io/block/polkadot/15666391) "Can you find any Arthswap related events in this block"
- [Extrinsic page](https://polkaholic.io/tx/0xbd5565ececb54ea552b7394a1d051fba1a1b2644c504b385fecceecc94bf2f11) "Show me all the calls related to this extrinsic, ordered by USD value?"
- [Transaction page](https://polkaholic.io/tx/0x806a78fb8d4acd91f746919b5d1dcb7aae6e05b1827373c5e2df52e298d73e88) "Show me all the events related to this transaction that have the word swap in their ABI"
- [Account page](https://polkaholic.io/account/Enva2sTeKTRi7JSvdaXVYJFuTdq6DyhTnrhXAWRWc7oWTw9?group=overview&chainfilters=all) "Show me top 5 chains and top 10 pallets I have been using"
- [Address page](https://polkaholic.io/address/0x78780645558fCD99ecF16Eab8b023E1B447910E8#evmtxs) "Who were the top 10 primary users of this contract in the last 7 days"
- [Extrinsic / Call Search](https://polkaholic.io/extrinsics/polkadot/staking/validate) "What is the sum of conviction voting for proposal 303?"
- [Event Search](https://polkaholic.io/events/0/balances/Withdraw) "What were top 100 largest withdrawals on May 24 2023"
- [EVM Contract page](https://polkaholic.io/address/0x27eFb9c886807B614E13774092086bE6d7dc72ac#evmtxs) "Who were the top 10 primary users of this contract in the last 7 days"
- [XCM Assets page](https://polkaholic.io/xcmassets) "Show me the average number of holders of BNC each month in the last 12 months."
- [XCM Transfers page](https://polkaholic.io/xcmtransfers?xcmType=xcmtransfer) "Show me all the XCM Transfers exceeding $1,000,000 USD"
- [XCM page](https://polkaholic.io/xcmmessages) "Show me which chains used XCM version v3 in the last 30 days, and when they first started using v3"
- [Spec versions page](https://polkaholic.io/specversion/kusama/9381) "Show me which chains are using the xtokens pallet"
- [Chain log page](https://polkaholic.io/chainlog/polkadot) "Show me the top 10 days with the most daily active users"


The purpose of the "ChatGPT Substrate Assistant" is to provide users interact with Substrate blockchain data.

***Key Features:***

1. *User Prompt*: The assistant allows users to supply their prompt in a manner similar to the ChatGPT interface.

2. *Hourglass Feedback*: Users will receive hourglass-type feedback during the response generation process. This feedback will typically last between 5 to 15 seconds, considering both ChatGPT and BigQuery.

3. *Readable Response*: Users will be able to view the response in a clear and usable format. Initially, this will be presented as a simple data table (refer to the screenshot above for an example).

4. *Transparency*: The assistant provides visibility into the underlying BigQuery SQL and ChatGPT API prompt call that generated the response.

5. *User Feedback*: Users can provide feedback on the generated response by using thumbs-up or thumbs-down indicators.

6. *Query Favorites*: Users have the option to mark any query as a favorite. Additionally, they can view highly favorited queries.


#### Backend Engineering

For each page where the "ChatGPT Substrate Assistant" is enabled, the following enhancements will be implemented:

1. *Generating ChatGPT API Call*: The system will generate a suitable ChatGPT API call by combining the user-generated prompt with the system-generated prompt.

2. *Setting up Session Context*: A "session" context will be established to handle sequences of queries. This context will ensure a seamless flow of conversation and improve user experience.

3. *Logging Results*: The assistant will log both successful interactions and failures. This logging system will provide valuable insights into the performance and effectiveness of the assistant.

4. *Recording User Feedback*: User feedback will be actively recorded. This will enable continuous improvement of the assistant based on user input and preferences.

By implementing these enhancements, the ChatGPT Substrate Assistant will become more efficient, reliable, and user-friendly, leading to an enhanced overall user experience.

### Ecosystem Fit

The Substrate ecosystem comprises a diverse range of projects, each offering various substrate pallets. These pallets generate a significant amount of call, event, and storage data, which can be challenging for everyday users to comprehend. Although block explorers attempt to simplify the data, they usually address only the most common inquiries and present the information in raw tables. Users who want to filter and group data based on specific attributes are left to their own devices, often requiring complex procedures. Systems like Dune rely on "Dune Wizards" to create intricate SQL queries, design charts, and create dashboards. However, this creates a perpetual dependency for users.

To date, there has been no connection between large-scale Web3 datasets, particularly those in Substrate, the largest multichain ecosystem, and LLMs.
## Team :busts_in_silhouette:

### Team members / Contact

- **Contact Name:** Sourabh Niyogi / Michael Chung
- **Contact Email:** sourabh@colorfulnotion.com / michael@colorfulnotion.com
- **Website:** https://polkaholic.io

### Legal Structure

- **Registered Address:** 55 E 3rd Ave, San Mateo, CA 94401, USA
- **Registered Legal Entity:** Colorful Notion, Inc.

### Team's experience

Key engineers Sourabh Niyogi and Michael Chung have developed Polkaholic.io since Fall 2021 and substrate-etl since December 2022.
Prior to building Polkaholic.io, Sourabh and Michael worked in decentralized social networking protocol development + privacy-preserving contact tracing (Wolk),
mobile advertising real-time bidding algorithm design and analytics (CrossChannel/MdotM).
Sourabh has founded social + web advertising startups (Social Media Networks) in the SF Bay and spent time doing computational cognitive science and machine vision research at MIT.
Michael hails from UC Berkeley with a degree in statistics and economics and leads indexing.

We will work with an LLM engineer with significant experience with prompt engineering specifically for approximately 20-30% of the allotted FTE hours (100-150 hours).

### Team Code Repos

- [substrate-etl](https://github.com/colorfulnotion/substrate-etl)
- [Polkaholic.io](https://github.com/colorfulnotion/polkaholic)
- [XCM Global Asset Registry](https://github.com/colorfulnotion/xcm-global-registry)
- [Sourabh Niyogi](https://github.com/sourabhniyogi) | [Michael Chung](https://github.com/mkchungs)

## Development Status :open_book:

* Summer 2022: Released Polkaholic.io, a fully working Substrate-first multichain block explorer.
* Fall 2022: Increased XCM Transfers Coverage, Improved UI + API based on feedback from users.  Added EVM/WASM support.
* Winter/Spring 2023: Developed substrate-etl and XCM Global Asset Registry.  Drafted [Bounty Proposal: Substrate + XCM Big Data (SXBD)](https://docs.google.com/document/d/1ryC6dxcd9tiQsB7KiCc2BY_TwBJ5jKloGfCyVAGCkKo/edit).
* May 2023: Google included Polkadot + Kusama in [Google Public Datasets](https://cloud.google.com/bigquery/public-data).



## Development Roadmap :nut_and_bolt:

While Natural language interfaces are pervasive, to the best of our knowledge, user generated prompts have not been collected in the context of a multichain block explorer.
While many test cases are easily generated by us, it is impossible for us to anticipate the full range of user generated prompts.  We expect to review all unique prompts for failures that could be improved.

Milestone 1 will be considered proof-of-concept where prompt generation will be done by Colorful Notion and a small group of whitelisted testers.  To ensure controlled data collection and positive
user experience, we will invite everyone to "Join Waitlist" so that user feedback can be collected and acted on in a controlled way.  Rather than do all 16 sections, we will focus on 8 sections which appear to yield good results.
Logging of all activity to monitor for (a) repeat users; (b) users providing "thumbs up" / "thumbs down" (page specific) (c) resolution failures will be important setup for Milestone 2.

Milestone 2 will be considered alpha testing where increased number of users will be invited to test the ChatGPT assistant while improvements are made to address "thumbs down" or resolution failures.
During this time, we expect to compare multiple LLM engines (GPT 3.5 vs 4.0 etc.) and platforms (Bard vs ChatGPT) and address specific tables/views outlined in RFPs.

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 400 FTE hours [125 USD/hr]
- **Total Costs:** 85,000 USD [75,000 USD for FTE, 10,000 USD for ChatGPT + BigQuery]

### Milestone 1 — Core UI + Prompt engineering for 8 Assistant

- **Estimated duration:** 10 weeks
- **FTE:**  300 FTE hours [125 USD/hr]
- **Costs:** 42,500 USD [5,000 USD allocated for BigQuery + ChatGPT]

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNUv3 - ChatGPTAssistant class class within polkaholic.io repo  |
| 0b. | Documentation | Provide **inline documentation** of prompt generation in an ChatGPTAssistant class |
| 0c. | Testing Guide	| README linking to 8 pages (see Project Details) with 5 representative user prompts |
| 1.  | Front End Engineering | UI Development of 8 "ChatGPT Assistant" placements |
| 2.  | Backend Engineering   | Prompt Engineering for 8 placements; rate limited usage of ChatGPTAssistant |
| 3.  | Dashboard Publication | Superset dashboard showing user feedback and redacted queries (no account / address information) |

Colorful Notion will choose 8 suitable placements (minimum) out of 16 based on prompt engineering.

### Milestone 2 — Iteration on prompt engineering based on user feedback; Additional

- **Estimated duration:** 10 weeks
- **FTE:**  300 FTE hours [125 USD/hr]
- **Costs:** 42,500 USD [5,000 USD allocated for BigQuery + ChatGPT]

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNUv3 - ChatGPTAssistant class within polkaholic.io repo |
| 0b. | Documentation   | Provide technical report / blog post summarizing learnings in prompt engineering for blockchain data, referencing dashboard, successes and failures of LLM models, common user issues |
| 1.  | Front End Engineering | Session support, Hourglass feedback, Stop generation, Additional 4 placements |
| 2.  | Backend Engineering   | Session support, improved prompt engineering |
| 3.  | Indexing support | Updated indexing to support account-related questions |
| 4.  | Dashboard Update | Superset dashboard showing user feedback and redacted queries as a function of LLM Engine / Platform |

During this period, Colorful Notion will add additional indexing to address account-related questions raised in [W3F's RFP for Data Analysis Tools](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md):

1. [Account page] Which transactions/accounts were responsible for the reserved balance in an account?
2. [Account page] What modules currently depend on consumers, providers, and sufficients reference counters for a certain account, and which transactions introduced/removed those references?
3. [Account page] Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track, taking into account indirect delegations too (e.g. Account A delegates to Account B which delegates to Account C)?

Based on LLM technology availability and costs (and within the 10K USD budget allocated), Colorful Notion seeks to collect data for different LLM engines and LLM platforms: Google Bard, Microsoft Azure, and compare user feedback, especially for all cases where failures (no text-to-SQL, SQL errors, thumbs down) are observed.

## Future Plans

Colorful Notion seeks to be a self-sustaining Web3 business supported by paid subscriptions covering multichain blockchain analytics.

A successful outcome of this work is to demonstrate that non-technical users can answer complex questions about blockchain activity without knowledge of SQL.

If this outcome is achieved, we hope to do follow on work in:
* _chart generation_ within widely used BI tools (Apache Superset, Google Looker), which are very close to the technology.  For example, "show me a **bar chart** showing xcm teleport fees for all polkadot chains in 2023 "
* _extrinsic generation_ within the block explorer.  For example, "show me multiple ways for me to exchange my NODL asset for USDC" and then "ok, I choose the 2nd option, selling 100 NODL"
In both cases the output concerns targeting a highly structured dialect of BI tools or chain spec version.

10,000 USD is provisioned over 20 weeks to cover the cost of BigQuery + ChatGPT.  At the conclusion of Milestone 2, any waitlists will be removed and any unused amounts will be made available for the general public until May 24, 2024, provided that Polkaholic/substrate-etl is supported by the SXBD parent bounty.

Further support can be supported by W3F in follow on support, or within the context of the [Bounty Proposal: Substrate + XCM Big Data (SXBD)](https://docs.google.com/document/d/1ryC6dxcd9tiQsB7KiCc2BY_TwBJ5jKloGfCyVAGCkKo/edit)
It is hoped that similar to commercial products "ChatGPT Plus", the outcomes of this may be sufficiently rich to support a paid SaaS subscription for use of higher quality LLM models (larger windows, token inputs for schema input).

## Additional Information :heavy_plus_sign:

This proposal is in response to the following RFPs + forum posts:
* [Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md) requesting that "The tools should NOT demand that users need to know or learn technical query languages such as SQL, GraphQL, or any other."
* [Analytics Website/Data Platform](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/analysis-website-and-data-platform.md) and [Dune Analytics Style Data Service for Polkadot / Kusama](https://forum.polkadot.network/t/dune-analytics-style-data-service-for-polkadot-kusama/271)
