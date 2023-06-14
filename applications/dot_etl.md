# DOT-ETL

- **Team Name:** Davanti
- **Payment Address:** 16m9eMpB3BuPSXwjvdCY6z63pTuvdnv8FjmmH33ZkYPCr9XC
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

This proposal is in response to the following RFP:  [Analysis Website and Data Platform](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/analysis-website-and-data-platform.md)

The goal of the Dot-ETL project is to lower the friction required to conduct fine-grained and aggregated analysis of transactions on Polkadot network, via a framework to extract Polkadot transaction-level data to various offline formats: e.g. CSV / delimited, relational, columnar.  Furthermore, we intend to develop a framework to ETL Substrate to [Google BigQuery](https://cloud.google.com/bigquery), orchestrated via [Google Cloud Composer](https://cloud.google.com/composer).  

The Polkadot and Kusama ecosystems have nurtured a significant developer community, and hosts a number of well-known parachains spanning a diverse series of domains, including Defi lending / liquidity, DEXs, NFTs, RWAs and securitization, as well as identity and privacy applications.  While there has been a great deal of interest in developing on polkadot, there hasn't thus far been a simple means to query and visualize transaction-level data and aggregates. 

Dot-ETL will be similar in functionality to the [Ethereum ETL project](https://ethereum-etl.readthedocs.io/en/latest/). In the same way that the ETH-ETL offering Ethereum transaction data as a Public Dataset from Google has helped to establish higher TVL and adoption of the Ethereum network, the goal is that by making PolkaDot transactional data easily accessible without the majority of data engineering tasks that exist in extracting data in usable form from the blockchain will lead to greater development and interest for the protocol by mainstream users of platforms such as Google Cloud. Once data is supported and provided in this format, there are also other potential use cases that can expand adoption of PolkaDot data by the blockchain industry such as easily being able to host Chainlink oracles for this data and provide it in readily available form for a number of different cross-chain applications. The open nature of the google bigquery dataset would allow anyone to query and extract insights from on-chain activity via SQL, or even build visualizations on thedata. 

Upon successful completion of transaction activity on the Polkadot relay chain, we plan to expand to parachains within the Polkadot ecosystem, with a particular focus on Defi and RWAs.  We believe that providing focus on DeFi activity related to Real World Assets on Google Cloud is the most promising use of public data to attract attention to the ecosystem.

We also intend to publish guides on how to query and use the dataset (i.e. medium articles, github wikis, gitbook document site).   The source code for Dot-ETL will be made public through the Web3 foundation. 

The team has extensive technical background in backend software engineering and machine learning / data science, and domain knowledge in machine learning, financial services (both retail as well as institutional), lending, and quantitative risk management. Our expertise and extensive domain experience, particularly in real world usage of data in Fintech and DeFi, will allow for us to build with adoption and practical use in mind.

### Project Details
(Technical Details)

The Dot-ETL project will utilize prior work on the SubQuery project to index and source block/event/call data on the Polkadot blockchain.  The SubQuery project is already able to index and parse block / extrinsic(transaction) / event data on Substrate, persist into a postgres data schema, and serve queries on the data via GraphQL. 

Our ETL framework will consume the indexed data on a managed SubQuery node via GraphQL, and save to Google BigQuery in a format similar to existing blockchain-etl projects.  We plan to orchestrate this ETL to BigQuery via the Google Composer offering on GCP as Airflow DAGs, written in Python.  

The design of the ETL will allow for a varied series of output formats.  Users of the framework can choose to download the code and run their own copy of the ETL locally against the SubQuery node, or they can utilize the GCP BigQuery offering.  We expect most users of the ETL data to utilize the public offering.

The architecture and process of executing airflow pipelines within GCP composer are fairly well-documented.  We expect that the infrastructure / architectural components for Dot-ETL will be similar to standard deployments within GCP composer - we are unlikely to require anything truly bespoke.

The first milestone of the project will focus around blocks and extrinsics in Substrate, and will produce the following tables: blocks, extrinstics/transactions, events, balances.  Subsequent milestones will engage with parachains within the Polkadot / Kusama ecosystem, particularly those with Defi applications and RWAs (Real-World Assets).  **We believe that providing focus on DeFi activity related to Real World Assets on Google Cloud is the most promising use of public data to attract attention to the Polkadot ecosystem.**

We're still investigating the appropriate schema details that will capture data in the most useful /optimal way, but believe that the core tables / schema will be very similar to that of the [Ethereum ETL project](https://ethereum-etl.readthedocs.io/en/latest/).  

There are two main components of the project.  The first is the configuration of the SubQuery managed node that will index the components of Substrate that we are interested in. The second component is the Airflow DAG that will communicate with the SubQuery node via a GraphQL API.  The DAG will write updates to BigQuery tables.  This can be customized and extended further.

### Ecosystem Fit

Questions / Answers on Ecosystem Fit: 

**Q: Where and how does your project fit into the ecosystem?**

A: Our aim is to provide a foundational framework and approach to ETLing Substrate data into the GCP BigQuery cloud storage medium.  A robust illustrative example will allow others to build upon / extend the framework, and run and maintain the ETL process for general community use.  By transforming into GCP BigQuery, we hope to drastically lower the friction required for anyone to analyze and produce insights on the data (developers, analysts, investors, enthusiasts).  

**Q: Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?**

A: Everyone. By building a framework that will make data available in a way that can be queried via SQL, and in conjunction with a repository of query recipes and articles / guides / docs, we allow anyone with some base-level analysis interest to get up and running quickly.  Because transaction-level data will also be available in a standard data query format on Google cloud, it will be possible to create any number of dashboards and visualizations on third-party / cloud-based analytic tools.

**Q: What need(s) does your project meet?**

A: Analysis / Insights - ability for people (all audience types) to query transaction data at any granularity.  Putting this data into an approachable format opens the ability for users to create reports, visualizations, monitors and notifications.  Better visibility => more engagement / better understanding => stronger community. Most users of data don't have the data engineering skills or capacity to extract data of this form onto a platform like Google Cloud platform, while remaining highly adept at querying, analyzing and modeling this type of data on such a platform. The DOT-ETl project is meant to remove the major data engineering barrier that exists for these individuals to take advantage of the technological offerings Google Cloud platform in working with PolkaDot data.

**Q: Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem? If so, how is your project different?  If not, are there similar projects in related ecosystems?**

A: There is already a team that has created substrate-etl on Google BigQuery.   However, we believe there is value to creating redundancy by providing a competing approach to the problem.  Our approach differs in two ways (technically): (a) use of the SubQuery indexer, whereas the competing team utilized their own indexer (polkaholic), (b) use of google composer / airflow.

## Team :busts_in_silhouette:

### Team members

- Jonathan
- John

### Contact

- **Contact Name:** Jonathan Liang
- **Contact Email:** jonathan.h.liang@gmail.com
- **Website:** https://github.com/liangjh

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

The team has extensive technical background backend software engineering and machine learning / data science, and domain knowledge in machine learning, financial services (both retail as well as institutional), lending, and quantitative risk management (market trading risk as well as bank capital).

Jonathan has worked in both fintech in backend software engineering, as well as institutional financial firms (investment banks / hedge funds) in quantitative risk roles.  Please see Jonathan's [Github (liangjh)](https://github.com/liangjh) for some public examples of projects he has built in his free time (private repos also available, pls contact to discuss).  Jonathan is currently working on [Cascadius Finance](https://docs.cascadius.finance), a full-stack securitization protocol.

John served as Head of Data Science & Modeling in FinTech startups, where he led and built teams for over nine years. He also has led adoption and integration of blockchain technology for FinTech clients, namely the [partnership between Visa, Circle and Tala](https://www.forbes.com/sites/ninabambysheva/2021/05/05/visa-partners-with-fintech-startup-tala-to-drive-crypto-adoption-in-emerging-markets/?sh=2b225df77e49).  In addition he has notably worked with companies like JD.com, Baidu, Ford Motor Credit, Discover, and Synchrony in the development of machine learning models for financial application. He has regularly served as a thought leader and public figure for credit executives on the subject of machine learning, having spoken on multiple industry panels and at notable conferences such as Lendit Fintech, American Banker’s BankAI and the Marketplace Lending Summit. John has also achieved the level of Competitions Master from the Google owned company Kaggle, for his stellar and consistent performance in real world machine learning competitions. He has formerly reached the rank of one of the top 100 data scientists in the world for his performances with Kaggle.

### Team Code Repos

No team code repos at the moment.  Please see individual Github repos (below)

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/liangjh
- https://www.linkedin.com/in/johncandido/


## Development Status :open_book:

We are currently in research phase;  Development / coding has not started on this project yet.


## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 8 months
- **Full-Time Equivalent (FTE):**  0.25
- **Total Costs:** 26,000 USD

### Milestone 1 — ETL of Relay Chain + Google BigQuery Integration

- **Estimated duration:** 3-4 months
- **FTE:**  1
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can set up and run the ETL to load data from Dot to offline / queryable formats |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article and detailed documentation that explains how to set up the basic Dot-ETL (audience: developers, etc).  We will also publish a few articles introducing the public dataset, a repository of queries and tutorials for a broader audience to get running with the public dataset immediately. |
| 1. | Create SubQuery Managed Node | Utilize SubQuery framework to create a running indexer node on SubQuery's managed services, reading and indexing blocks on the Polkadot network (may involve a few iterations for testing) |
| 2. | Set up BigQuery Schema to pull transaction data | Finalize stored format in BigQuery (double ledger format) that transactional data will be transformed into |
| 3. | Airflow workflows to read SubQuery transaction updates | Read updates from SubQuery node via GraphQL queries and write to BigQuery on a periodic timeframe|
| 4. | Deploy Airflow to Google Composer | Staging and Prod deployment pipelines for Airflow to GCP Composer |
| 5. | Detailed documentation / developer guides | Write dev guides to address how to extend version 1 of this framework |


### Milestone 2 — ETLs for Selected Parachains, Extensions

- **Estimated Duration:** 3-4 months
- **FTE:**  1
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish articles 
| 1. | Outreach to RWA / Defi-focused Parachains | With milestone 1 completed, prioritize parachain data that is related to RWA given the more relevant use of analytics for that data in DeFi applications in order to help further grow interest in the PolkaDot ecosystem |
| 2. | Expansion on Milestone 1 | Milestone 1 focuses on a select core group of tables.  We plan to expand existing / built work and consume events and calls, the other two types of handlers built for SubQuery.  This includes changes to our managed SubQuery indexers, Airflow / Composer, and BigQuery table modifications. |
| 3. | Development: Basic Parachain ETL SDK | Create a simple / reference implementation of an SDK that Parachains can build on top of / extend if they wish to utilize the same path to deliver parachain-specific ETLs to GCP BigQuery |

## Future Plans

Our vision is to provide the framework which will power the go-to queryable data source for Substrate (polkadot / kusama) transactions - both for the main relay chain as well as for the respective parachains.   Users of Dot-ETL can either query the public Google BigQuery database directly or create their own index node for any purpose.  We expect the community to devise new use cases and applications for the underlying data.  

We intend to partner with / reach out to the following entities on the sponsorship / maintainance of the cloud-based query and storage formats (i.e. Google BigQuery):
- Polkadot and Web3 Foundation - 
- Google Cloud Team - 
- Blockchain-ETL (related to Google Cloud Team)

We also intend to seek integration for this data within the blockchain industry through potential oracle partnerships with protocols like Chainlink.

In the future we can also investigate the buildout of dashboards on the underlying data. This could involve some of the most widely used applications in the industry such as Dune Analytics and DeFi Llama. We also expect that the community may explore and utilize the data in new and novel ways and can help produce insights for the community.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

By recommendation from someone who was already familiar with the Polkadot / Substrate / Kusama projects, as well as the Web3 Foundation's grants program.  
