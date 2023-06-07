


# FiDi DotSight: Analytics Data Platform for DotSama

- **Team Name:** FiDi
- **Payment Address:** 14fptYf88mjarGJ3gAjhd8YH3Cefdgx4C8Jb6chvJXFszb2i (USDT / Polkadot)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

This project is a response to Keegan Quigley’s [RFP #1539](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/analysis-website-and-data-platform.md) inspired by Rob Habermeier’s Polkadot forum [post](https://forum.polkadot.network/t/dune-analytics-style-data-service-for-polkadot-kusama/271).

### Overview

We propose the development of FiDi DotSight, a platform designed to facilitate interactive on-chain analysis in the Polkadot and Kusama ecosystems. Think Dune for DotSama. FiDi will achieve this by providing a scalable platform that enables users to query on-chain metrics, integrate new protocols, and build beautiful custom dashboards with the power of Subsquid’s data archives. To accomplish this, FiDi, with Subsquid’s support, will offer a SQL-like interface for developers to associate existing and newly developed squids with a dashboard of their choice, along with a suite of default ready-to-use analytical dashboards for users to visualize on-chain data.

The ultimate goal of FiDi is to advance on-chain and portfolio analytics and accelerate data insights coverage across the Polkadot ecosystem. By creating a user-friendly platform that streamlines the process of building custom dashboards, FiDi aims to simplify the process of sharing powerful data visualizations with the community. FiDi is best positioned to deliver this level of data precision and analytics since the proposed scope is an organic extension of its portfolio tracking capabilities, and the upstream on-chain data is largely available as a result of the ongoing partnership and collaborative [expansion](https://medium.com/subsquid/subsquid-and-fidi-join-forces-to-bring-advanced-data-insights-to-web3-users-763094773676) with Subsquid.

DotSight will support other non-Polka L0s, too. Since FiDi and its upstream data are cross-chain from day one, DotSama users will be able to build analytical dashboards spanning data from multiple ecosystems, e.g., Ethereum + Polkadot or Avalanche + Polkadot et al. With Subsquid’s data and FiDi’s analytics, we aim to enable analysts and power users to interactively query high-quality data, create custom charts, and share metrics with others, further accelerating DotSama’s on-chain activity and the breadth of nuanced insights uncovered by its users. We aim to provide the Polkadot and Kusama ecosystems with a powerful tool for on-chain analysis that will serve the community for years to come.

### Project Details

#### Background #### 

[FiDi](https://fidi.tech/) is a portfolio tracker offering high-precision data for 100+ chains and 2k+ protocols. It’s a non-custodial and lightweight presentation layer on top of on-chain data. [Subsquid](https://subsquid.io/) is a full-stack blockchain indexing SDK and specialized data lakes (Archives) optimized for the extraction of large volumes of historical on-chain data. We’ve been [joining forces](https://twitter.com/subsquid/status/1628827848621555712) for a while to deliver the highest quality analytics to DotSama.

#### High-Level Architecture #### 

![FiDi DotSight Data Architecture](https://storage.googleapis.com/fidi-tech-static1/w3f/FiDi%20Data%20Interface%20Global.png "FiDi DotSight Architercture")

The key components include, i.e., from the user side to the data provider:
- Basic Analytical Primitives 
  - Functionality: a collection of default views available for data visualization
  - Audience: blockchain analyst
  - Technology Choice: modular React widgets that we will evolve towards a SaaS approach: more lightweight, embeddable, thematically customizable by data streams, and sharable externally widget; with optional web components.
- Custom User Views
  - Functionality: a customizable view tied to a SQL query or a pre-defined set of basic views
  -  Audience: blockchain analyst
  - Technology Choice: same as #1
- Developer UI and Data Interface
  - Functionality: an interface where the new view is created, and its metadata is specified
  - Audience: blockchain analyst or developer
  - Technology Choice: The UI’s basis is the same as #1;
  - (i). The user-defined SQL, GraphQL, and dashboard metadata will initially live in a public Github with CI/CD and merging logic automated. We will opt for storing all metadata in a distributed cloud database, i.e., GCP CloudSQL (PGSQL backend) or BigQuery, as the project evolves post-Milsetone 3.
  - (ii). The Data Interface will manifest as a typical stateless GCP microservice mimicking the rest of our data infrastructure, i.e., a Node.js service in the Google App Engine for the execution layer; and CloudSQL (PGSQL) and BQ for the data persistence and caching layers, respectively.
  - (iii). The Data Interface will have an external endpoint queryable by users willing to build on top of it and FiDI itself.
- Data Mixer
  - Functionality: provides a source of truth for any served data point regardless of the upstream provider; processes the queries
  - Audience: FiDi devs
  - Technology Choice: similar to the data interface and query engine, the mixer is a dedicated Node.js service running in GCP’s App Engine; it currently caches recent raw data (but not aggregates) in CloudSQL, and we’ll evolve the data layer into both caching (BQ) and historical data (CloudSQL) layers covering aggregates and raw data.
- Query Engine
  - Functionality: sanitizes and runs the user-specified queries and handles views production
  - Audience: FiDi and Subsquid devs
  - Technology Choice: same as #4;
  - (i). We will enable querying via SQL with blockchain-optimized syntax, e.g.,  by relying on TrinoSQL or Dune’s harmonizer; and in later releases - via a JavaScript native code and no-code options.
  - (ii). A typical Data Interface’s query passed to the engine will include a triplet of desired (UI Widget, Mapper, Data Source)
- Aggregates, Views, and Squids Databases
  - Functionality: persistent distributed storage for user-created and internal non-materialized views
  - Audience: FiDi and Subsquid devs
  - Technology Choice: data layer same as #4;
- GiantSquid [API](https://docs.subsquid.io/giant-squid-api/)
  - Functionality: direct access to the data lake via GraphQL
  - Audience: FiDi and Subsquid devs, and blockchain devs

**Technical Stack Overview**
- Frontend (Web):  we currently rely on [React](https://react.dev/) and [Typescript](https://www.typescriptlang.org/) and will look into transitioning to [Next.js](https://nextjs.org/) as a part of this proposal
- Backend: we currently leverage Typescript, Express, and [PostgreSQL](https://www.postgresql.org/). By Milestone 4, we'll also consider leveraging [Nest](https://nestjs.com/) if it fits the project's needs
- Data Layer: [GraphQL](https://graphql.org/) and RPC for upstream providers, PostgreSQL elsewhere
- Application Layer: [App Engine](https://cloud.google.com/appengine)
- Database Layer: GCP [CloudSQL](https://cloud.google.com/sql) and [BQ](https://cloud.google.com/bigquery)
- Serving layer: rest of GCP stack, i.e., CDN and Cloud Load Balancing
- For more, see also in-line comments above in the components overview


#### Analytical Primitives (Default Views) #### 

We will provide a versatile suite of analytical dashboards for users, including default, advanced, and customizable views. The following analytical primitives will be surfaced to developers as a part of this proposal:
- Default dashboard: Pie Chart
```
Sample Metrics: <title: string, balance: float, distribution: <Array<float>>, precision: int>
```
- Default dashboard: Single Metric
```
Sample Metrics: <title: string, metric: float, precision: int>
```
- Default dashboard: Assets List
```
Sample Metrics: <title: string, assets: <Array<string, float>>, precision: int>
```
- Advanced dashboard: Staking Rewards
```
Sample Metrics: see below
```
- Customized dashboard: On-Chain Metrics
```
Sample Metrics: see below
```
Default Dashboards: Pie Chart, List, and Metrics![FiDi Analytical Primitives](https://storage.googleapis.com/fidi-tech-static1/w3f/FiDi%20Analytical%20Primitives%20Default.png "FiDi Analytical Primitives")
Advanced Dashboard: Staking Rewards
![FiDi DotSight Advanced Staking Example](https://storage.googleapis.com/fidi-tech-static1/w3f/FiDi%20Advanced%20Staking.png "FiDi DotSight Advanced Staking Example")



#### Data Interface #### 

We will design and implement the data interface with a developer flow that will include the following steps:
* specifying an upstream data source, i.e., a Squid URI
* specification of metrics to stream
* aggregation logic
* schema mapping and morphing logic
* any external sources or other parameters

Developers will be able to deploy their new data schemas via git pull requests at the initial stages and, later, in a fully automated fashion, with the new dashboards going live after deployment. 

Additionally, developers will be able to extend the existing dashboards’ queries and augment them with any new data sources they’d see fit: first, as a Github-based form and purely through the UI at the later milestones.

![FiDi DotSight Data Interface](https://storage.googleapis.com/fidi-tech-static1/w3f/FiDi%20Data%20Interface.png "FiDi DotSight Data Interface")


#### User authentication/authorization ####

To ensure the security and privacy of our users, we will implement wallet-signed authentication as the initial method for contributors to engage with DotSight (See Tier 1). This approach will enable analytics developers to access new dashboards and protocol submissions, which will be reviewed by our team. Data querying and existing dashboard usage will remain public and will not require authentication.

This approach is incremental to our existing connect-the-wallet functionality, does not require any user authentication data stored on FiDi, and overall balances the privacy/security concerns with the user experience best.

In the future milestones and outside of the scope of this proposal, we plan to expand authentication methods to support a more diverse user population and role separation. Our roadmap includes Github OAuth (Tier 2) for dashboards and protocol deployment and other OAuth or verified email (Tier 3) for social functionality.
![FiDi DotSight Auth Protocol](https://storage.googleapis.com/fidi-tech-static1/w3f/FiDi%20DotSight%20Auth%20Protocol.png "FiDi DotSight Auth Protocol")

 #### From 0 to 1 #### 

We’ll rely on two parachains with sufficiently different key community metrics as our lighthouse use cases (see 4.a-c, Milestone 1). These will serve as a catalyst and feasibility demonstration for the analytics functionality. FiDi will later continue scaling to all other parachains in the DotSama ecosystem and, with Subsquid’s collaboration, incentivize both developers and users to contribute.

The success would be a  blockchain-level customized analytics dashboard with advanced analytics delivered to the community. The scope will include data interface development, specifying squid queries, data mapping, dashboard logic, and integration. We believe this will help us test developer flow, deliver analytics immediately useful to several sufficiently large parachains, spark the community interest toward building more custom views, and accelerate our future milestones. 


As the initial candidates for the advanced metrics, we’ve so far selected Astar and Moonbeam; however, we are open to the foundation’s feedback on whether an alternative approach is preferred. You can follow our current progress in the beta analytics [sample wallet](https://beta.app.fidi.tech/portfolio?wallet_id=WGGvXmacJdPLw5abykehBb8MjsvQGomiHA79W9niHAWpDUB).

Advanced Dashboard: Customized On-Chain Metrics
![FiDi DotSight Advanced dApp Staking Astar Example](https://storage.googleapis.com/fidi-tech-static1/w3f/FiDi%20DotSight%20dApp%20Staking%20Astar%20Wallet.png "FiDi DotSight Advanced dApp Staking Astar Example")

**Metrics Breakdown** (Milestones 1-2)
| Wallet-level metrics | dApp-level metrics |
| ----------- | ----------- |
| Balances, Rewards, Values | UAW |
| Free tokens | Historical new wallets per dAapp |
| Vesting | Historical  Transactions Number|
| EVM Deposits | Historical Volume | 
| dApp names | Historical balance per dApp |

**Language Agnostic Analytics**
Since DotSight aims to be a combination of presentation and querying layer on top of the higher-level metrics above, it will abstract away the smart contracts implementation details and functionality, i.e., EVM, non-EVM, Vyper, WASM, or others will be supported.

### Ecosystem Fit

As on-chain analysis becomes an increasingly important field, there is a growing need for a platform that enables users to access and query high-quality data easily. Our proposed project is an optimal fit for the Polkadot and Kusama ecosystems. The current options for querying data via GraphQL are limited to backend services such as Subquery and Subsquid; however, our proposed data interface will provide a user- and developer-friendly way to surface customized analytics, similar to Dune Analytics in the Ethereum community; however, with more flexibility, customization, and at a higher level of abstraction.

Our decentralized platform will enable analysts and power users to interactively query and visualize high-quality data, creating custom charts and visualizations to share metrics with others. By easing the process of building dashboards, sharing data visualizations, and integrating data providers, we will encourage projects to create custom dashboards to share data with the Polkadot & Kusama community.


## Team :busts_in_silhouette:

### Team members

* Roman Dovgopol — CTO, Architect
* Shaun Saylor — CEO, Product
* Anton Ryabov — Eng Lead, Developer
* Kirill Suvorov — Frontend Lead, Web/Mobile
* Finn Marten — Design Lead

### Contact

- **Contact Name:** Roman Dovgopol
- **Contact Email:** founders@fidi.tech
- **Website:** https://fidi.tech

### Legal Structure

**Registered Address:** 400 NW 7th Ave, #14310, Ft. Lauderdale, FL 33311, USA

**Registered Legal Entity:** FiDi Tech, Inc

### Team's experience

FiDi brings together a team of builders and venture-backed operators with expertise in distributed systems, web3, data analytics, science, and infrastructure engineering at the internet scale.

Anton leads FiDi’s engineering, particularly the data and backend infrastructure. Most recently, he has been an Engineering Manager supporting marketplace teams at Yandex. Anton’s key expertise is in data and distributed systems at scale.

Kirill leads FiDi’s mobile and NFT data development. Most recently, he has been a Senior SWE at Yandex, focusing on the front end. Kirill’s key expertise is in cross-platform mobile and web development at scale.

Roman is a venture-backed founder and engineering leader passionate about building great products. He previously led the data organization at Twitter, particularly Data Engineering, Science, ML, and Analytics – scaling the core of their ad tech and analytics at scale.

Shaun is a seasoned operator and engineering leadership recruiter. He previously supported product teams at Google, Twitter, and Meta, among others. Both Shaun and Roman are founders in the past.

Finn leads the design at FiDi and brings in his experience supporting creative work at Riot Games and Porsche Design. He also runs his own design agency, 0xsphere, where he challenges the boundaries of visual user experience in web3.

We all came together to found FiDi in 2022 with a mission to democratize access to data in web3, [initially](https://twitter.com/cryptofidi/status/1605927633728012288) as a portfolio tracker and, more recently, as a fully-fledged high-precision analytics platform. Our strengths lie in the ability to tackle complex technical challenges and deliver high-quality products for our users

### Team Code Repos
- [https://github.com/fidi-tech](https://github.com/fidi-tech)

### Team LinkedIn Profiles
- [https://www.linkedin.com/in/romandovgopol/](https://www.linkedin.com/in/romandovgopol/)
- [https://www.linkedin.com/in/shaun-fidi-2a973324a/](https://www.linkedin.com/in/shaun-fidi-2a973324a/)
- [https://www.linkedin.com/in/anton-ryabov-ab98241aa/](https://www.linkedin.com/in/anton-ryabov-ab98241aa/)
- [https://www.linkedin.com/in/finn-marten-16b792208](https://www.linkedin.com/in/finn-marten-16b792208)
- [https://www.linkedin.com/in/kirill-suvorov-93597863](https://www.linkedin.com/in/kirill-suvorov-93597863)

## Development Status :open_book:

The basis for the project has been established. FiDi today offers four default dashboards available for the community (one metric, three metrics, a pie chart, and an asset list) and a fully customizable [advanced analytics dashboard](https://beta.app.fidi.tech/portfolio?wallet_id=Zo7ZR8xMMSCmp7gWgp5gmmzRTwg1iaEXeghJVMeE6PRWCFz) currently under development and in open beta with ambassadors and core teams of several parachains. Subquid’s recent release of [GiantSquid API](https://docs.subsquid.io/giant-squid-api/overview/) makes surfacing metrics and deploying new squids intuitive for developers and L1 operators.

This proposal aims at delivering (a) a data interface connecting the squids’ query code and customized dashboards and (b) both streamlining and decentralizing the productionization of new analytics queries for the community by community.

All infrastructure deliverables belong to the teams’ domains of expertise and serve as a continuation of our previous track record. 

## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 4.5mos (~3.5mos left)
- **Full-Time Equivalent (FTE):**  3.5 FTE
- **Total Costs:** 25,000 USD

### Milestone 1 — Data Interface API

- **Estimated duration:** 1mo
- **FTE:**  4
- **Costs:** 7,500 USD

- Summary: This milestone covers a complete data interface connected to GiantSquid and FiDi dashboards. It also includes fully productionized custom Squids and FiDi views for Astar staking dApp analytics.
- Success: an open-sourced data interface as well as fully operational dashboards for two selected parachains

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0
| **0b.** | Documentation | We will provide documentation on every supported metrics class and an educational tutorial explaining the typical way to interpret the data, deploy a data interface configuration, and select the desired dashboard. |
| **0c.** | Testing | Core functions will be fully covered by a unit and integration tests suite to ensure robustness, deployment, and serving times. |
| **1a.** | GiantSquid data funneling | We will extend the existing data streaming infrastructure to support an arbitrary query to GS and user-built squids. |
| **1b.** | Data Aggregation module | We will provide support for user-specified (GraphQL or SQL) aggregation logic that would be inputed via the data interface and invoked at the streaming stage. |
| **1c.** | Off-chain sourced addresses support | We will provide rudimentary support for additional data materialization parameters, e.g., pricing via liquidity pool addresses. This will be extended to any off-chain data in an oracle-like fashion in future milestones. |
| **2a.** | Data Interface for developers | We will provide a configuration-based interface (initially via git pull requests, then automated in Milestone 2) with key specifications for the new views. We will leverage React and Typescript on the frontend and Typescript with Nest and PGSQL on the backend.
| **2b.** | Schema mapping and morphing | We will provide a configuration-based paradigm for specifying: the desired metrics mapping, aggregation logic, upstream GiantSquid URI, and desired materialized view.|
| **2c.** | Data interface: view construction | We will provide developers with the ability to select a desired analytical dashboard from the pre-selected collection (see five views explained in the architecture section; fully customizable views will make it to future milestones). These UI components will also be implemented via React and Typescript.|
| **2d.** | Data interface: Deployment | We will provide developers with the ability to schedule their customer view’s deployment (automatically at recurring times in the future milestones). The deployment action will be a UI module, and the propagation/consensus will occur via GitHub at first and via a PGSQL query in future milestones.|
| **3a.** | Dashboards: Default Analytical Views | We will integrate the default views, i.e., pie chat, 1/3-metrics view, and list of assets, with the data interface and make it available for the ad-hoc developer deployment. For 3a-c UI components, we will similarly rely on React + Typescript.|
| **3b.** | Dashboards: Advanced Staking View | We will integrate the advanced staking view, e.g., the dApps names, nominator TVLs, balances, rewards, and ranks, with the data interface and make it available for ad-hoc developer deployment. |
| **4a.** | Lighthouse use cases: Squids for Wallet-specific metrics |  We will implement new squids in GraphQL surfacing wallet-specific metrics for two parachains with the following metrics that need to be surfaced via GiantSquid: Free tokens, Vesting, EVM Deposits, and dApp names. |
| **4b.** | Lighthouse use cases: Squids for dApp-specific metrics | We will implement new squids in GraphQL surfacing wallet-specific metrics for two parachains with wallet-specific metrics for dApps: TVL change per dApp, Active (UAW) and net new wallets per dApp (x2), historical  Transactions / Volume / Balance per dApp (x3). |
| **4c.** | Lighthouse use cases: customized dApp views | As the first two use-cases, a feasibility proof and an accelerator, we will provide the community with a fully integrated customized dApp analytics dashboard leveraging the data interface (2a-2c), the advanced staking view (3b), and the data aggregation module (1a-1c).  |


### Milestone 2 — Views with Network- and dApp-level Metrics

- **Estimated Duration:** 1mo
- **FTE:**  2.5
- **Costs:** 5,000 USD

- Summary: This milestone covers support for essential metrics at the parachain and dApp level under each chain. Many would require custom squids built as a part of this scope.
- Success: developer UI supports views with newly sourced metrics.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0
| **0b.** | Documentation | We will provide documentation on every supported metrics class and an educational tutorial explaining the typical way to interpret the data, navigate the developer UI, specify the required metadata, deploy a data interface configuration, and select the desired dashboard. |
| **0c.** | Testing | Core functions will be fully covered by a unit and integration tests suite to ensure robustness, deployment, and serving times. |
| **1a.** | dApp-level signals: collator metrics | We will generalize prior work from Milestone 1 to span collator/nominator activity and make metrics such as uptime, block production rate, block processing time, rank/nominator rank, name, and value locked available in the views. For 1a-2a, the respective in GraphQL squid query and GiantSquid's code are also in scope; the UI components will be written in React + Typescript and the backend code in Typescript + Nest + PGSQL.|
| **1b.** | dApp-level signals: user activity | Additionally, the dApp-specific user activity metrics will be surfaced, e.g., UAW, net new wallets,  historical transactions, volume, and balance per dApp. Respective squid query and GS code are also in scope. |
| **2a.** | Network-level signals | We will generalize prior work from Milestone 1 to span L1-level metrics and activity made available in the developer UI, e.g., UAW per network, number of new wallets, adoption rates, unstaked tokens currently in wallets, tokens in circulation, and tokens staked or locked. Respective squid query and GS code are also in scope. |


### Milestone 3 — Developer UI & Automated View Deployment

- **Estimated Duration:** 1mo
- **FTE:**  2.5
- **Costs:** 5,000 USD

- Summary: This milestone covers a no-code option for developers to productionize new views on FiDi via specific squids on GiantSquid.
- Success: developer UI launched, and new users are able to productionize new views without any code.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0
| **0b.** | Documentation | We will provide documentation on every supported metrics class and an educational tutorial explaining the typical way to interpret the data, navigate the developer UI, specify the required metadata, deploy a data interface configuration, and select the desired dashboard. |
| **0c.** | Testing | Core functions will be fully covered by a unit and integration tests suite to ensure robustness, deployment, and serving times. |
| **1a.** | dApp-level signals: collator metrics | We will provide an intuitive web interface for specifying the desired metrics mapping, aggregation logic, upstream GiantSquid URI, and desired materialized view. The UI will be an extension of the one built in M2 and also leverage Typescript + React; and Nest + CloudSQL (PGSQL) + Typescript on the backend. |
| **1b.** | Online testing & deployment | We will provide an intuitive web interface for querying the new view for deployment and validating its configuration. The UI's part technology choices is same as 1a.|
| **2a.** | Deployment validation & View status | We will implement testing and validation layers to ensure the user-inputted configurations for newly spun-up views and GS queries are performant. We will surface the view “status,” e.g., up, down, missing data, and similar. |
| **2a.** | Automated and ad-hoc deployment | We will decouple the existing infrastructure to support ad-hoc and scheduled deployments for newly created views. The CI/CD and automation for 2a-b will rely on schedule App Engine workers. |

### Milestone 4 — Interactive SQL Query Engine for Views

- **Estimated Duration:** 1.5mos
- **FTE:**  4
- **Costs:** 7,500 USD

- Summary: This milestone covers a SQL editor as a new option for developers/users to productionize views on FiDi via specific squids on GiantSquid.
- Success: developer UI supports FiDi SQL-powered views.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0
| **0b.** | Documentation | We will provide documentation on querying methodology, e.g., functions, operators, data types, and statement reference; as well as an educational tutorial explaining the typical way to run the queries, associate them with the views, interpret the data, navigate the developer UI, and share the views. |
| **0c.** | Testing | Core functions will be fully covered by a unit and integration tests suite to ensure robustness, deployment, and serving times. |
| **0e.** | Article | We will publish an announcement article capturing the work completed in the grant along with the educational guides and success stories, enabling users to further leverage and expand DotSight’s functionality. |
| **1.** | FiDi SQL implementation | We will provide a query engine for blockchain data. Initially forked from [TrinoSQL](https://trino.io/) and/or [harmonizer](https://github.com/duneanalytics/harmonizer), we will extend the functionality to support variable views and embed GraphQL upstream queries. We'll simialrly rely on Typescript + Nest + CloudSQL (PGSQL) for the query engine's implementation. ![FiDi SQL Engine UI Example](https://storage.googleapis.com/fidi-tech-static1/w3f/FiDi%20SQL%20Engine.png "FiDi SQL Engine UI Example")|
| **2.** | SQL Editor View UI | We will augment the no-code view developed in Milestone 2 with SQL functionality allowing users to rehash the existing views as well as create new ones. The Editor UI will include the runner log, a tree of dependencies and suggested resources, and the editor interface itself. See the UI direction in the following wireframe:|
| **3.** | Advanced Querying Documentation | We will provide a comprehensive guide for optimizing the queries, both language- and database-specific, along with real-world examples |


## Future Plans
DotSight will provide a scalable, incentivized platform for developers to contribute to the Polkadot ecosystem's growth by integrating new protocols and on-chain metrics. We aim to continue extending the number of parachains with advanced analytics supported on FiDi, the breadth and depth of analytical dashboards, and the pre-developed squids available. 

For further development, we will also streamline the user/developer funnel to the point where simple SQL/GraphQL or no-code user flows suffice to seamlessly productionize and share new dashboards matching user needs. For the further go-to-market, we plan to attract content creators and crypto influencers by offering customizable portfolio views, analytical dashboards, and reward-based contributions to extend coverage and analytics on the platform. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
Via Subsquid founders - Marcel & Dmitry and the W3F staff - Sebastian & David.

**Follow Our Socials**
-   Twitter: [https://twitter.com/cryptofidi](https://twitter.com/cryptofidi "FiDi's Twitter")
-   Medium: [https://blog.fidi.tech/](https://blog.fidi.tech/ "FiDi's Medium")
-   Telegram: [https://t.me/+vxA51osvNrw5NGUx](https://t.me/+vxA51osvNrw5NGUx "FiDi's Telegram")
-   Discord: [https://discord.gg/fhaRzWZa2r](https://discord.gg/fhaRzWZa2r "FiDi's Discord")
- Github [https://github.com/fidi-tech](https://github.com/fidi-tech "FiDi's GitHub")
-   LinkedIn: [https://www.linkedin.com/company/cryptofidi/](https://www.linkedin.com/company/cryptofidi/ "FiDi's LinkedIn")