# Polkadot Data platform with deep indexed data and staking reports

- **Team Name:** [P2P.ORG](http://p2p.org/) Validator
- **Payment Address:** 0xE22211Ba98213c866CC5DC8d7D9493b1e7EFD25A (USDC)
- **Level:** 2

## Project Overview :page_facing_up:

Current proposal is the solution from [P2P.org](http://P2P.org) for the problem described in [Analytics Website/Data Platform](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/analysis-website-and-data-platform.md) RFP.

### Overview and Ecosystem Fit

Implementation of the data-driven culture was a huge boosting for web2 which allowed the fin-tech industry to speed up the decision-making and the development of new products, also decrease the financial fraud and provide flexible risk-management. 

Dune analytics success and arising 15+ Dune-like platforms are the evidence that data analysis tools are especially acute for web3 today and the demand for community driven data insights continue to grow. 

[P2P.org](http://P2P.org) is one of the biggest validators that is participate in more than 40 POS chains. That is why the need of data, monitoring, performance analysis are the core problems in decision making for us. We’ve started to develop our data function from using external platforms such as Dune but soon we found out that there is no such platform or platforms that could help with even the most common challenges according to data needs:

- **data covering**: no Polkadot data and off-chain data about deFi protocols such as Chainlink;
- **absent of the streaming** doesn’t allow to receive the data close-to-real time which makes it unacceptable for pro-reactive tasks such as performance monitoring;
- **threshold for entering analytics**: we have high skilled data analyst who can work with any data but for business people it is impossible to get answer about new metric very quick.

Solving these problem internally we understood that our experience and data insights could be helpful for crypto community, especially in new projects such as new cosmos chains where there are not so many users and the economy has just started to evolve. We can help new project with data-driven shilling and go deeper with data-analysis in the chains that we already covered by existing data platforms.

According the web3 fund need from RFP Polkadot ecosystem needs:

- extract on-chain data and transform it to be available for SQL querying by data analysts
- provide public access through query engine to build data sets on-top of indexed data
- provide UI interface for building dashboards on-top of data sets to visualize data insights for decision makers

We saw some teams that already building such solutions for the RFP and want to describe our key features which could provide the best user experience according to our vision:

- modular architecture allows you
    - to use any indexer such as Subsquid, Subquery or custom indexer (Mbelt in [P2P.org](http://P2P.org) case)
    - to use any database as a DWH for storing public data (in current RFP we will use BigQuery as DWH)
    - to customize ETL process for any indexer/DWH solution via [Airflow](https://airflow.apache.org/) DAGs
    - to customize the solution for real-time data enrichment process via direct streaming to DWH
- dashboard with sli/slo for data quality of ETL pipeline - we provide transparent and clear data quality metrics to estimate the quality of ETL
- [P2P.org](http://P2P.org) infrastructure (P2P RPC for indexation)

### Potential users

We define the users of the platform as data people who generates insights from the data to support data-driven base for decision makers. These people have:

- tech skills to write SQL queries
- basic statistics to define calculate and estimate metrics for the business
- expertise of the particular domain (such as NFT, particular deFi)

Current state of Dune platform (as the Leader of the market) is about 20k users. Dune is focusing on Ethereum data and DeFi in Ethereum ecosystem. Current number of active wallets in Ethereum is 400k. So, we see that current state of the crypto industry demonstrates a high proportion of data-people to all token holders with is 5%. 

We believe that in case of mass adoption we will not see this proportion but we need to involve more people still. Our global vision for this problem is to provide ability to work with the data without SQL knowledge. That is why we develop Kolmo - AI assistant.

![](https://github.com/bigslimdogg/web3_pic/blob/3a0406565507ada022e57797adf8258edf1e50e3/ai_assistant.png)

Our concern is that we can first attract users from the Polkadot ecosystem, which hasn’t been covered by the current data-platforms. After that we are going to provide an innovative opportunity to enter in data-driven decisions without SQL skills.

**Free usage**

The only limitation for all users is number of TB for free executing of SQL query. We would be able to charge users for executing more data.

### Project Details

We already mentioned modular architecture as key feature of the solution. The next chapter will describe it deeply.

**Modular architecture**

![](https://github.com/bigslimdogg/web3_pic/blob/3a0406565507ada022e57797adf8258edf1e50e3/architecture.png)

Indexing & ETL module consist of:

- indexer which is Software to extract the data
- orchestration service: you can use any source to receive the data from RPC and write it to any DWH

DWH module is analytical data base which stores all the data and provides public access. It consist of:

- raw layer which is simply the response from indexer - structured/decoded data from RPC nodes
- domain layer which is the reports and data-marts that were written by the users. By default we would provide the “staking domain data” with the data marts about staking

UI module consist of forking existing BI tool with the ability:

- get access to DWH data (both layers)
- interface to write the query
- execute the SQL statement
- save and store SQL statements (provided by users manually) to use it for visualizing
- BI interface to build charts and dashboards on-top of DWH data

**Tech stack**

| module | component | solution | tech stack | comment |
| --- | --- | --- | --- | --- |
| Indexing & ETL | indexer | Mbelt | js | We already develop the indexer for web3 RFP. It can extract all data like Subquery but more over it can extract data about staking process.
We also share sli/slo for indexer and our experience showed that currently it is the best solution according to data quality and flexible enough to support custom needs like staking. |
|  | orchestration | [Airflow](https://airflow.apache.org/) | python | flexible, popular ETL orchestration |
| DWH | raw layer + domain layer | bigQuery | cloud sql | current solution is DWH agnostic but we are using bigQuery |
| UI | forked BI tool | forking [Superset](https://github.com/apache/superset) | - backend: python
- frontend: rest | - auth in the box
- already has all functions to write, save, execute query and build dashboards
- open-source
- flexible role-model
- audit of logs for security
- ability to make dashboards public |

**Data schema**

Raw layer (indexer’s data) which is MBELT data scheme described here: https://github.com/p2p-org/polkadot-profit-transformer/blob/main/db/000001_init.sql

The solution comes with the second layer of data which is data marts layer.

There are two ways to create report based on raw layer:

- via BI where the query will be store as request to DWH
- PR with data mart that should be re-calculated every time

Second option is for popular/the most important reports which are accepted by admin users (p2p.org DWH team).

Initially the solution will contain reports about staking in Polkadot/Kusama/Evm parachains:

- active set of validators per epoch
- stake amount between nominator and validator for every epoch
- total validator stake per epoch
- the validator commission for all active validators
- the public identity of validator
- the rewards (tokens, rewards points) earned by nominator with particular validator per epoch
- total rewards (tokens, rewards points) earned by nominator per epoch
- total rewards (tokens, rewards points) earned by validator per epoch
- ability to calculate APR/APY on top of this reports

**Data quality**

Polkadot SLI (based on history for internal consumption):

- Block processing mean time: 1073 msec (min - 238 msec, max- 35 sec)
- Mean latency between block in RPC node to block in database: ~ 18 сек (min - 13 sec, max 99 sec)
- Blocks processed correctly in first attempt (others are fixed automatically): ~ 99%
- Staking SLI: 100% (no problems detected)

Parachains sli:

- Block processing mean time: 914 msec (min - 81 msec, max- 98 sec)
- Mean latency between block in RPC node to block in database: ~ 95 сек (min - 12 sec, max 240 sec)
- Blocks processed correctly in first attempt (others are fixed automatically) ~ 96%
- Staking SLI: 95%

We also have an SLI [dashboard here](https://reports.p2p.org/superset/dashboard/124/?native_filters_key=hx3xwFAW7LaoWw6vWbB6eY7JD3BOjObbcgnwy_BkExJw20nkHu2NtfTYLkDe22Kl), but thresholds used in this dashboard were set by internal team and could be different for final public solution.

## Team :busts_in_silhouette:

### Team members

- Developers:
    - Ivan Safronov (developer of Mbelt)
    - Artem Kiselev (team lead of indexation team in P2P.org)
- DWH engineers:
    - Kovalev German - (data engineer)
    - Kamalov Sergey (team lead of DWH team in P2P.org)
- Product owner: Kotenko Nick

### Team Code Repos

Indexer: [Mbelt](https://github.com/p2p-org/polkadot-profit-transformer/tree/mbelt3/prod)

Public DWH: “p2p-data-platform” in bigQuery you can find in public access though bigQ console

### Team's experience

We believe that proposed product can bring not only a new user experience for validators and NO managers but also provide true decentralization with the performance improvement. P2P.org has long-term experience in more then 25 blockchains since 2018. We can bring the high level expertise to help new participants perform better by providing recommendations on-top of the core solution.

Our data chapter is successfully implementing data-driven culture in [P2P.org](http://P2P.org) during 2 years. 

1. Our developers have vast experience in data-indexation ([Mbelt](https://github.com/p2p-org/polkadot-profit-transformer/tree/mbelt3/prod), Cosmos chains indexer for Agoric);
2. Data engineers support external and internal solutions for Data warehouse with more than 200 TB of on-chain data;
3. Data analyst with developers are finishing new stacking flow solution with Delegators’s custom dashboards which are build on-top of DWH.

### Contact

- **Contact Name:** Nick Kotenko
- **Contact Email:** [nikolay.kotenko@p2p.org](mailto:nikolay.kotenko@p2p.org)
- **Website:** [p2p.org](http://p2p.org/)

## Development Status :open_book:

Current solution from [P2P.org](http://P2P.org) has already implemented:

- mbelt indexer as open-source solution
- private Polkadot datasets
- private [Superset](https://github.com/apache/superset) without public user’s access and public auth
- dashboard with sli/slo for ETL of the platform

We suggest proposal with 1 milestone to:

1. copy Mbelt data (raw indexed data) to public
2. provide public dataset about staking (example user’s domain data/reports)
3. fork [Superset](https://github.com/apache/superset) for public usage
4. provide staking dashboards (example user’s domain data/reports)
5. wrapping to end-2-end open-source solution: indexer deploy + orchestration + DWH connector + BI tool

### Overview

- **Total Estimated Duration:** 1.5 month
- **Full-Time Equivalent (FTE):** 200 FTE hours [100 USD/hr]
- **Total Costs:** $20,000

### Milestone 1 — Forked Superset with indexed data

- **Estimated duration:** 1.5 month
- **FTE:** 3.5
- **Costs:** 20,000 USD


| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide a documentation page about how to launch docker’s files for ETL (indexer + orchestration), DWH connection, launching UI (BI tool). |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to run indexer locally, set up data base (DWH), and run BI. |
| 1. | Develop the ETL component | The result of developing ETL component contains the docker with Mbelt (indexer) and [Airflow](https://airflow.apache.org/) with DAGs to write indexer’s output into DWH (data base). |
| 2. | Publish DWH data | Our goal for publishing data is: providing raw (indexer’s data) data into public bigQ project with the ability to query and use this data for public users. The chains are Polkadot, Kusama, EVM parachains. We would also provide reports about staking on top of raw data in chains above. The additional result is SLI/SLO dashboard of ETL process to provide more transparency for users. |
| 3. | Forking [Superset](https://github.com/apache/superset) | Forking Superset will allow us to modify sign-in page to provide new users to join. We will make some changes on UI side to improve user’s experience such as: Main page modifications to make it dash-oriented, Dashboard tab & Chart tab modification to provide user-friendly filters, SQL lab tab modification to make it more useful to search for sources, User’s settings modification to exclude useless bottoms  |


## **Future plans**

The functionality that we want to test and implement out of scope the RFP development:

- materialized views for user
- upload user’s off-chain data
- anchor modeling as data layer for analysts
- AI assistant implementation (closed-source)
- community driven fine-tuning of the AI assistant

## **Referral Program (optional) 💰**

Not applicable****

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

Web3 Foundation Website and previous grants: [Multiblockchain ETL](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/Multiblockchain%20ETL.md)

**How did you hear about the Grants Program?** 

Web3 Foundation Website and previous grants: [Multiblockchain ETL](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/Multiblockchain%20ETL.md)
