# QueryWeb3

- **Team Name:** QueryWeb3
- **Payment Details:**
  - **DOT**: 15SXUVLizxWtMpYx7eambqqH9Bi942WZdT4wDH89GTXfkeso
  - **Payment**: 15SXUVLizxWtMpYx7eambqqH9Bi942WZdT4wDH89GTXfkeso , Currency ( USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

- **Tagline**: The most valuable BI and efficient AI-powered information service platform in the Polkadot ecosystem.
- **Brief Description**: QueryWeb3 aims to address the fragmentation of information and data across various projects within the Polkadot and Kusama ecosystem. By aggregating data, we improve information retrieval and transaction efficiency, enhance user experience, and increase user satisfaction.
- **Integration with Substrate/Polkadot/Kusama**: Our platform aggregates and analyzes data from the Polkadot and Kusama ecosystem, providing users with timely and integrated valuable information.
- **Team Interest**: Our team is passionate about leveraging both BI and AI to solve the challenges of fragmented information in the blockchain ecosystem. By integrating advanced BI and AI technologies, we aim to enhance the overall user experience and efficiency, providing users with timely, valuable insights and data-driven decision-making capabilities.


### Project Details

Use Case 1: QueryWeb3 

- Business Description：By consolidating all underlying data from the Polkadot and Kusama ecosystem chains (including transaction volume, transaction count, DEX trading data, TVL and so on) into foundational BI data, and aggregating activity data, document data, technical code, funding data, TG data, DC data, X data, media data, and video data related to the Polkadot ecosystem into a database, we can use AI to extract user intent and provide timely information feedback.

- Business flow
![business flow for queryweb3](https://github.com/Query-Web3/product/blob/main/business%20flow/queryweb3_with_ai_businessflow.png)
- **User Roles**: Polkadot users

![queryweb3](https://github.com/Query-Web3/product/blob/main/UI/queryweb3_with_AI.png)


Use Case 2: Yield Query

- Business Description：allows users to query snapshots of various chains within the Polkadot ecosystem (e.g., Polkadot, Kusama, Hydration, Bifrost, etc.) on any given day. Users can search for all asset types (RWA or DeFi) and all yield types (staking, farming), including all tokens (DOT, KSM, HDT, vDOT, vKSM, BNC, etc.). The query results will list the TVL (Total Value Locked), 24-hour trading volume, and the number of transactions for each token or currency pair.  Additionally, based on these query results, our platform can display the top 10 yield rates in the Polkadot ecosystem, the top 10 chains by TVL, and various visual representations such as line charts, pie charts, or other graphical formats. This information is designed to provide investors and operators with valuable insights for making informed investment and operational decisions.

- Data process: Extract DEFI yield data through the APIs of various blockchains into MySQL and other databases, then process and organize it into multidimensional data suitable for BI, and store it in MySQL.

- Business flow
![Business flow for yield query](https://github.com/Query-Web3/product/blob/main/business%20flow/YieldQuery_businessflow.webp)

- User Roles: Polkadot users including investors, operators, data analysts, technical personnel, and media personnel.

![Yield query](https://github.com/Query-Web3/product/blob/main/UI/Yield%20query.webp)

Use Case 3: Vol & Txns Query

- Business Description：allows users to query transaction volume, transaction count, and token trading volume data for any chain within the Polkadot ecosystem over a specified time period. Users can analyze this data across various time cycles, such as daily, weekly, monthly, quarterly, semi-annual, and annual cycles. The query results will include year-over-year (YoY) and month-over-month (MoM) metrics and so on .Additionally, based on these query results, our platform can generate reports showing the top 10 chains by transaction volume (or transaction count, YoY, MoM、QoQ) for a specific period, as well as trend line charts and other visual representations over a given time frame. This enables users to understand the current state and development trends of each chain within the Polkadot ecosystem. For example, users can observe whether the monthly transaction volume or transaction count has increased or decreased over the past year. This information helps users understand the status and trends of various chains within the Polkadot ecosystem, identify chains with investment potential or risks, and make informed investment and operational decisions.

- data process: Initially, extract data from APIs like Subscan, Hydration, Bifrost and so on for DOT, KSM, Hydration, and Bifrost, process it into multidimensional BI data, and save it to MySQL to form the data source.

- Business flow ： the same as use case 2

- **User Roles**: Polkadot users including investors, operators, data analysts, technical personnel, and media personnel.

![Vol&Txns query](https://github.com/Query-Web3/product/blob/main/UI/vol%26txns%20query.webp)


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Our target audience includes parachain/dapp/wallet/UI developers, designers, our own user base, and users of other dapps within the ecosystem.

- What need(s) does your project meet?
QueryWeb3 meets the need for timely and integrated information from the Polkadot ecosystem, addressing issues such as finding high-yield financial products, getting timely feedback on information queries, tracking major wallet movements, and identifying airdrops and NFT rewards.

- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.


**Similar Projects**:

- If there are similar projects, we will identify and assess them, explaining how QueryWeb3 is distinct. If no similar projects exist, we will indicate why such a project might not have been possible, successful, or attempted.

There are no projects entirely similar to ours, although some have partial similarities, making our BI+AI QueryWeb3 project unique. Here are two examples:

1. **Subscan in the Polkadot Ecosystem**: They offer the following services:
    - **Blockchain Data Queries**: Comprehensive queries on Polkadot and its ecosystem, including block information, transaction records, and account balances.
    - **Transaction and Event Tracking**: Users can track the transaction history and events of specific addresses in real-time.
    - **Asset Management**: Detailed information on various assets, including transfer records and current balances.
    - **Governance and Proposals**: Displays governance proposals and voting situations in the Polkadot network.
    - **Statistical Analysis**: Provides network statistics, helping users analyze the network's health.
    
    QueryWeb3 provides BI+AI services based on these data points, offering multi-dimensional BI reports and statistical analysis. This includes identifying investment opportunities through top transaction volumes and trends. Currently, no project in the Polkadot community achieves this level of analysis. Additionally, users can query which DeFi pools offer the highest returns, enabling efficient investment and staking. Our BI data also feeds into AI, aggregating various project data in the Polkadot ecosystem to solve information asymmetry and data fragmentation issues, serving investors, operators, and media in the Polkadot community.
    
2. **DEX Screener in the Ethereum Ecosystem**: They offer the following services:
    - **Real-time Data Analysis**: Provides real-time data on prices, liquidity, market cap, and trading volume.
    - **Charts and Trend Analysis**: Supports TradingView charts for technical analysis.
    - **Multi-Chain Data Aggregation**: Tracks data from over 80 blockchain networks, covering thousands of DEX trading pairs.
    - **Personalization Features**: Users can set alerts, create watchlists, analyze trends, and trade directly on the platform.
    - **Cross-Chain Analysis Tools**: Provides data analysis tools across multiple DEX and blockchain networks, helping users make more informed trading decisions.
    
    QueryWeb3 is similar to DEX Screener in some respects. We process base trading information and volume into BI data, offering multi-dimensional, varied granularity, and different perspective charts and trend analyses. We also use AI searches to solve information asymmetry in the Polkadot ecosystem, improving user value discovery efficiency and reducing trading costs.
    

In summary, unlike Subscan and DEX Screener, Subscan provides basic information search services, and DEX Screener mainly offers DeFi information services. However, QueryWeb3 excels in dimensions, depth, perspective, and scope. QueryWeb3 aggregates various data within the Polkadot ecosystem and processes basic data into BI reports, offering direct application value for users, investors, and project operators. The QueryWeb3 project is crucial and irreplaceable in the current Polkadot ecosystem.

## Team :busts_in_silhouette:

> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Product Manager: RogerLe
    
    Entered the blockchain industry in 2017 as a long-term value investor. Have been holding Polkadot since its auction in 2017 and continuously increasing the position.
    
    3 years of BI consulting at Huawei, with successful BI business system solutions, methodologies, and practical business experience.
    
    4 years of technical development, 8 years of product management，worked at Infosys for several years.
    
    Awarded third place in the National Graduate Business Competition “Peak Moment” (strategy, product design, marketing, R&D, finance), serving as the team leader.
    
    Independently developed quantitative trading strategies.
    
    Resilient, pursuing lifelong growth, with a diverse knowledge structure: Bachelor’s degree in Computer Science and Master’s degree in Economic Philosophy.
    
    Other link: [RogerLe🦄🦍 (@lechangxu) / X](https://x.com/lechangxu)

- Names of team members
- **Community Operations & Technical Advisor:** Dr cao
    
    actively participated in several parachain projects as CM, ambassadors, founder of AIWeb3, leads the most vibrant Chinese community within the Polkadot ecosystem, and also renowned for its active Chinese content creators.
    
    He is one of the most engaged users, investors, and YouTubers in Polkadot eco (verified by Mythical, check the tweet here: https://twitter.com/cao_lab/status/1781750280117510518).
    
    Dr. Cao has also developed Discord and Telegram bots for AIWeb3 and various parachain Chinese communities.

- **Backend Developer:** YanOctavian
    
    5 years Senior Polkadot eco-developer and 7 years Ethereum eco-developer;
    
    Proficient in public chain development;
    
    He has extensive practical experience in the blockchain field and is involved in most areas of public chain development, including rollup and zero-knowledge proof.
    
    Rich experience in project management and team leadership.
    
    He has worked on prestigious teams such as orbiter.
    
    Currently working at SuperEx, helping them build their own public chain using polkadot eco-technology.
    
    An avid amateur AI enthusiast, I believe AI technology will bring great changes to web3.

- **Full-Stack Developer:** BinX
    
    12 years experience in front, familiar with the react/vue/flutter/nestjs/fastapi conventional technology stack;
    
    Familiar with javascript/python/Java/dart language, understands rust;
    
    Familiar with web3 Dapp development;
    
    Proficient in Polkadot.js, with experience in developing multiple wallets and Dapps.

### Contact

- **Contact Name:** RogerLe
- **Contact Email:** lechangxu@gmail.com
- **Website:** https://queryweb3.com/

### Legal Structure

- **Registered Address:** 3118 Yindu Road, Minhang District, Shanghai, China
- **Registered Legal Entity:** N/A

### Team's experience

Please see the Team members‘introduction

### Team Code Repos

- https://github.com/Query-Web3

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/Query-Web3/backend
- https://github.com/Query-Web3/frontend
- https://github.com/Query-Web3/database

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/lechangxu

## Development Status :open_book:

Under construction

### Overview

- **Total Estimated Duration:** 4.5 months
- **Full-Time Equivalent (FTE):**  60
- **Total Costs:** 30,000 USD
- **DOT payment:** 50% of total costs.
### Milestone 1 Build a DeFi index and data backend.

- **Estimated duration:** 1.5 month
- **FTE:**  25
- **Costs:** 12,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will be publishing an article on the Polkadot community, AIweb3 community, as well as on X and Telegram to update everyone on our progress and work. |
| 1. | DEFI indexer | Responsible for ETL (Extract, Transform, Load) tasks, parsing and storing relevant data according to the operational rules of each DEX or DEFI product on each blockchain (starting with Bifrost, Acala, Hydration, Moonbeam, and adding more chains later). |
| 2. | Facts table and dimensions table.|Based on BI data, establish DEFI data fact tables and dimension tables. |
| 3. | Data backend. | Build a data backend based on MySQL, GraphQL, and FastAPI to provide external data APIs.|


### Milestone 2 Web and BI development.

- **Estimated Duration:** 1 month
- **FTE:**  20
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will be publishing an article on the Polkadot community, AIweb3 community, as well as on X and Telegram to update everyone on our progress and work. |
| 1. | staking indexer | Perform ETL (Extract, Transform, Load) operations on staking-related data from the Polkadot chain and store it in the database. |
| 2. | Web service | Develop an official website and provide data query functionality to implement the features mentioned in case 2. |
| 3. | BI development | Based on Superset, enable users to perform more multidimensional data queries and visualizations. |


### Milestone 3 Big data service

- **Estimated Duration:** 1 month
- **FTE:**  15
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will be publishing an article on the Polkadot community, AIweb3 community, as well as on X and Telegram to update everyone on our progress and work.|
| 1. | Big data backend. | A big data backend based on Kafka, Spark, and Flink, enabling more timely user requests. |
| 2. | BI query | Conduct secondary development with Chat2DB, enabling users to perform intent-based queries. |

...


## Future Plans

### Financing Long-Term Maintenance and Development

To ensure the long-term sustainability of QueryWeb3 and provide public goods for the Polkadot ecosystem, we plan to implement the following measures:

- **Partnerships and Sponsorships**: Collaborating with key stakeholders within the Polkadot and Kusama ecosystem to secure funding and sponsorship deals.
- **Grants and Funding**: Considering support from the Polkadot or KSM treasury and applying for grants from the Web3 Foundation and other blockchain-focused funding bodies to support continuous development.
- **Community Crowdfunding**: Conducting community crowdfunding campaigns to engage and support the project's long-term development by attracting passionate users and developers.

### Short-Term Use, Enhancement, and Promotion

In the short term, we aim to rapidly iterate on our platform to enhance its functionality and user experience. Our focus includes:

- **User Feedback Integration**: Actively soliciting and incorporating user feedback to ensure our platform meets the needs of our community.
- **Marketing and Outreach**: Utilizing targeted marketing campaigns and participating in industry events to raise awareness about QueryWeb3, and expanding our influence through cooperation with communities like AIweb3.
- **Feature Expansion**: Continuously adding new features and improving existing ones to provide more value to our users, such as advanced data visualization tools and real-time alerts.
- **Data Integration and AI Services**: Using BI to integrate data and provide better AI services, offering users timely value discovery, investment information, and operational insights.

### Long-Term Plans and Intentions

Looking ahead, our team has ambitious goals for QueryWeb3:

- **Become the Go-To Information Hub**: Establish QueryWeb3 as the most reliable and comprehensive BI and AI-powered information service platform in the Polkadot ecosystem.
- **Expand Ecosystem Integration**: Deepen our integration with the Polkadot and Kusama ecosystems by adding support for more parachains and external data sources.
- **Innovative Solutions**: Leverage cutting-edge technologies like machine learning and advanced analytics to provide predictive insights and automate complex data queries.
- **Community Building**: Through this BI+AI data platform, address information asymmetry and data fragmentation issues, continuously serving the Polkadot ecosystem community users to enhance Polkadot's core competitiveness.

By executing on these plans, we aim to create a robust and invaluable resource for the Polkadot and Kusama ecosystems, enhancing overall user experience, improving information retrieval, and driving greater efficiency in transactions and decision-making processes.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** weimeme
- **Payment Address:** 152SFecVuA1X6ii1CGTzQWyq4xUMQXHD67TtDJyFNiRyujms (Assethub USDC)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
