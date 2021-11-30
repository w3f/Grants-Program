# W3F Grant Proposal

* **Project Name:** PolkaBox 
* **Team Name:** Balloon Box Technology Inc.
* **Payment Address:**  
* - bc1qz36smg7zg9d2de7qurj9a49fetemavta39a9zp (BTC) 
* - 0x3ffA0e66091742a867430D140E36826c06ba19Be (ETH)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

![](https://github.com/BalloonBox-Inc/polkadot-analytics/blob/main/UI%20diagrams/logo_black.png)

 
## Project Overview :page_facing_up:

### Overview

PolkaBox is an open data platform that enriches blockchain data by (1) visualizing Polkadot on-chain data, (2) interpreting it relative to external factors (off-chain data from public APIs), and (3) generating predictions around key token metrics from the aggregation of the two. The platform offers a transparent analysis of the parachain transactions generated in the Polkadot ecosystem. Concurrently, our platform fetches real-world off-chain data (e.g., news feeds, election campaigns, Reddit, Tweets, crypto media, weather, COVID-19, WHO, etc.) and leverages Machine Learning models to gauge the market sentiment on a given chain or asset. PolkaBox seeks to be the first robust aggregator of on-chain and off-chain data for Polkadot. Finally, the goal is to publish developer-friendly APIs for anyone to build on top of PolkaBox using raw and/or enriched data to tackle real-world problems.
 
### Project Details

We are a team of software engineers and data scientists who love using data to breathe life into products. As such, the goal of this project is to add several layers of data to Polkadot to help the world answer interesting questions such as “How has Covid-19 or a ‘third wave’ affected the amount of staked DOT?” or “How does a US president losing interim elections affect the price of DOT? Or any currencies moving on bridges or chains?”
Our project, PolkaBox is an open platform + dashboard for creating a huge lake of on-and off-chain data, ingesting this with typical ML libraries i.e. Random forest classification, and applying these modules to provide predictive answers to complex questions, all displayed graphically and beautifully. In addition to this, it only makes sense to bake in a block explorer and some typical data visualization one might expect including bridge GDP, chain TVL, etc.
 
#### Architecture

![](https://github.com/BalloonBox-Inc/polkadot-analytics/blob/main/images/PolkaBox_architecture.png)

#### Infrastructure Components
1. **Nodes**: PolkaBox needs to provide near-real-time analytics both to visualize and to access programmatically. For this reason, we’ll set up and maintain our own nodes to maintain a public record as a participant without relying on 3rd party APIs for the raw blockchain data. The nodes will be built on Raspberry Pi 4 (8GB) computers (per node) and managed in Dockerized environments with the hardware installed on-site. These nodes will all be open-sourced.


3. **Database**: PostgreSQL database for storing blockchain + external data


5. **External Data Sources**: A combination of WebSocket connections and web scraping tools for assessing public records. PolkaBox will have several services running on near-real-time schedules to retrieve, clean, format, and store data from external sources. The goal is to keep these APIs public to make the intelligence in the entire dashboard open-sourced as anyone can then fork the PolkaBox and spin it up. 


7. **APIs**: Python (Django) + webhook framework with public APIs that can be used. APIs will be monitored for usage and throttled based on developer token limits + whitelisted IP addresses.


9. **Analytics Modules**: Python developed functions for performing machine learning using popular, well-supported libraries such as SciKit-Learn, PyTorch, etc. The analytics modules will have a full ETL pipeline setup for ingesting data based on CRON jobs defined by the individual modules, i.e., a news-reader may update daily and blockchain data every 5 seconds.


11. **Dashboard**: Next.js + React + Typescript + Prisma + Cypress (testing) developed dashboard. Fully open-sourced which visualizes the data with limited capacity, i.e. some prediction modules may be baked into the dashboard, e.g. staking pool yield or liquidity fluctuation whereby other modules in the dashboard would be user-triggered and data-dependent, e.g. predict DOT token price based on US government election results.
 
### Ecosystem Fit

Throughout this application, we define ‘Market Sentiment’ to be the general prevailing attitude of investors towards a financial market. 

* **PolkaBox in Polkadot Ecosystem**

    PolkaBox seeks to build a platform to give visibility to parachain transactions in the Polkadot network. Additionally, our platform will aggregate external data sources (RSS feeds, COVID-19, Weather, Coinbase, etc.) to the native Substrate data, so that we can inform the Polkadot/Kusama ecosystem of its public reputation in the media and let on-chain transactions dialogue with the current market sentiment. Thus, PolkaBox will play an important role in the Polkadot network both as a prediction tool and as a market sentiment analysis tool, pursuing “less trust, more truth”. Our project will prioritize the tokens of the Polkadot ecosystem. 
 
* **Target Audience**

    Our target audience consists of users interested in understanding why and how market sentiment impacts on-chain events within the Polkadot ecosystems (e.g., anomalies, whales investors, sudden market drops ensuing from political unrest, etc.). These users include the entire Polkadot/Kusama/Substrate community (and beyond) who want to investigate: (a) the mediatic reputation of the ecosystem; (b) its resilience to off-chain events. Our audience also comprises all crypto traders who want to leverage our market sentiment analysis as well as our prediction tools as a supplement to the technical candlestick financial analysis and to inform their investments. Lastly, our audience extends to all users (who are not necessarily traders or investors but could be business owners, retailers, etc.) interested in event predictions. Our platform will allow them to analyze crowd behavior as a prediction of financial market stability.  
 
* **Use Cases** 

    Our platform allows users to visualize parachain transaction data, analyze it, and interpret it in light of market sentiment and current affair news. 
 
    Our primary goal is to give visibility to parachain transactions data. In this way, we fulfill the widespread use case for the numerous users in the Polkadot ecosystem who want to monitor their transactions and contextualize them among other transactions in the network. At the same time, our parachain-focus showcases the cross-chain composability which is a unique characteristic of the Polkadot network. A platform like PolkaBox makes the public aware of Pokladot’s blockchain interoperability. We believe that investor awareness of Polkadot’s cross-chain composability incentivizes more cross-chain transactions, while also bringing the community a step closer to large-scale blockchain adoption.
     
    PolkaBox is designed to be suited for market sentiment investigation. Our project has a focus on real-world events’ impact on the Polkadot ecosystem. For example, an investor would consult our platform to detect the general market sentiment for an asset of choice. Knowing the market sentiment allows investors to establish when is the best time to open and close their market position. This is true both for traders in the Polkadot/Kusama space, as well as for any crypto and fiat currency trader, who gauges whether a market is bullish or bearish before appointing their preferred asset to invest in.
 
    Our project also investigates crowd behavior and an influencer on price trends. How is the rush for Christmas shopping redirecting consumers’ spending into non-fungible soft commodities instead of crypto assets? How was the trustworthiness of a crypto asset impacted by the latest Tweet of the US President? How has the last WHO Public Health Order on COVID-19 affected the volatility of Polkadot native assets? Since our platform integrates diverse external data sources, PolkaBox will be able to pinpoint the real-world variables that prices are most susceptible to. 
 
    Finally, our platform provides quantifiable metrics to measure the health and trustworthiness of parachains (quantified in terms of TVL, block heights, transaction counts) and tokens inside the Polkadot ecosystem. What is the perceived trustworthiness of different tokens? How does given trustworthiness fluctuate from a day-to-day basis? What is the correlation between the collective sentiment and the parachain TVL, or asset volatility? The aggregation and analysis of external news feed in PolkaBox will leverage infographics to answer these and more questions. 


* **Similar Projects**

    We have compiled a list of the most similar data analysis platforms. The table below compares them feature by feature.

    ![](https://github.com/BalloonBox-Inc/polkadot-analytics/blob/main/images/PolkaBox_uniqueness.png)

    There are numerous successful data analysis projects as well as explorers both inside and outside the Polkadot ecosystem. Every project has a specific focus: DeFi predictions, multi-chain block exploration, event tracking. But currently, there is no Polkadot-based platform that aggregates off-chain metrics through public APIs. We want to elevate the unique design of Polkadot, as a network that connects heterogeneous blockchain shards, and we are eager to explore how this novel ecosystem is shaped by real-life events like political elections, public health orders, and public opinion. We think the community needs an evaluative tool to identify what off-chain events are shaping the Polkadot network. We also think that such understanding can best inform the future growth of the Polkadot ecosystem as a whole. Through PolkaBox we strive to build such a tool.

    Comparison with projects outside of the Polkadot ecology. Into The Block’s battle horse is predictive analytics but lacks Polkadot assets and news feed analysis. Messari accounts for media influence on the crypto markets but lacks prediction products and Polkadot assets. Similarly, Sanbase has the advantage of having a comprehensive behavior analysis, aggregating 3 metrics: trading volume, social volume (i.e., the count of coin mentions on crypto social media), and on-chain volume. Unfortunately, this platform focuses solely on descriptive analytics, rather than predictive analytics. PolkaBox will address both. Lastly, we also considered Cryptomood (not featured in the table above), a Mobile App provider of analytics of crypto markets sentiment. Although the App aggregates 50K news outlets and blogs analyzing 3000+ coins, they feature no prediction tool nor are they endemic to the Polkadot ecosystem. More than that, Cryptomood is a centralized, private, pay-per-use service, which lacks transparency and is at risk of being operated in the dark. 

    Comparison with projects inside of the Polkadot ecology. Polkascan, Polkastats, and Subscan are Polkadot-based block explorers. They purely feature on-chain data but they have no tool to interpret and relate given data to off-chain events. They also don’t feature any predictions, which, on the other hand, is the battle horse of X Predict Market, a prediction market that focuses on community and sociability. Unfortunately, the latter also lacks the integration of off-chain data to generate predictions.

    What differentiates us is that PolkaBox will be the first project in the Polkadot ecology to aggregate granular parachain data with off-chain public APIs. We will also be the first Polkadot project with a focus on market sentiment.
 
## Team :busts_in_silhouette:
### Team members
* Michael Brink
* Matteo Mortelliti
* Yuchen Lin
* Mayllon Miranda
* Irene Fabris
* Hongbin Lin
* Yoon Kim
 
### Contact
- **Contact Name:** Michael Brink
- **Contact Email:** michael@balloonbox.io 
- **Website:** https://www.balloonbox.io/
 
### Legal Structure
- **Registered Address:** Business Centre Office, 404-999 Canada Pl #1, Vancouver, BC V5T 1G8
- **Registered Legal Entity:** Balloon Box Technology Inc. 
 
### Team's experience
All team members of PolkaBox are from BalloonBox, a FinTech company specialized in building industry-agnostic data science solutions from design through launch. Our team is experienced in software engineering (fintech/payments/blockchain/trading) and data science projects (ML models/data visualization/big data). Our team members have full stack proficiency across a range of languages and frameworks including Python, C++, Java, Javascript (React/Next/Angular), and other object-oriented and development languages. 


Our team consists of the following roles:

- Product Architect (Full product architecture) 
- Full Stack Engineer (Core framework and dashboard)
- Designer (Web application)
- Backend Engineer (APIs, database structure, DevOps)
- Data Scientist (x2) (Analytics modules design + build)
- Product Manager (Community, articles, GitHub house-keeping, managing public PRs)

### Team Code Repos
- https://github.com/BalloonBox-Inc BalloonBox official repository
- https://github.com/MichaelBrink Michael Brink
- https://github.com/mattdm3 Matteo Mortelliti
- https://github.com/yul761 Yuchen Lin
- https://github.com/m3mayllon Mayllon Miranda
- https://github.com/irene-bbox Irene Fabris
- https://github.com/BalloonBox-Hongbin Hongbin Lin
- https://github.com/yoon-bbox Yoon Kim
 
### Team LinkedIn Profiles 
- https://www.linkedin.com/in/michael-brink-680b3767/ Michael Brink
- https://www.linkedin.com/in/matteo-mortelliti/ Matteo Mortelliti
- https://www.linkedin.com/in/foggysalmon/ Yuchen Lin
- https://www.linkedin.com/in/mayllon-miranda-8aa9b0163/ Mayllon Miranda
- https://www.linkedin.com/in/irenefabris/ Irene Fabris
- https://www.linkedin.com/in/hongbinlin/ Hongbin Lin
- https://www.linkedin.com/in/imyoonkim/ Yoon Kim
 
## Development Status :open_book:
We have completed the planning of the product prototype and the design of the UI diagram. Check the following link:

https://github.com/BalloonBox-Inc/polkadot-analytics/tree/main/UI%20diagrams

We have created a deployment and usage how-to-article describing the deliverable of our first and secomd milestones. Check the following link:

https://docs.google.com/document/d/1aLSm9HK-3YtwjXKLh_KPRL75P8t8zleEMNInyZl445k/edit?usp=sharing
 
## Development Roadmap :nut_and_bolt:
### Overview
- **Total Estimated Duration:** 3 months 
- **Full-Time Equivalent (FTE):**  4.5
- **Total Costs:** 49,000 USD 
 
### Milestone 1 - Hosted-Node, Database
- **Estimated duration:** 1 month
- **FTE:**  5.5
- **Costs:** 20,000 USD
 
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide **inline documentation** of the code. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Node Set up | We will set up a Polkadot node to index and retrieve endemic Polkadot data and store it dynamically in a data lake. | 
| 2. | Endpoints | We will create a set of GET endpoints with limited usage from the database (to be used by the dashboard). |

 
### Milestone 2 - APIs
- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** 15,000 USD
 
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide **inline documentation** of the code.|
| 0c. | API Documentation | We will provide hosted API docs with a prebuilt collection and environment
| 0d. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0e. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | APIs Module | We will build several public APIs to fetch off-chain data. The data sources and their corresponding docs and limitations will be published in an API readme file. | 
| 2. | Data Ingestion/Storage | Set up external data ingestion and storage + public API endpoints for accessing external data in isolation. |
| 3. |  UI Module: General WebApp  | Develop a web application for our platform infrastructure. We will design the landing page implementing a drop-down menu linked to 3 dashboards organizing data thematically.  |
| 4. |  Support more Kusama Tokens  |  We’ll integrate data for KSM, KAR, MOVR, KMA tokens.  | 

 
### Milestone 3 - Feature Engineering, Website, Dashboards
- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** 14,000 USD
 
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic video **tutorial** that explains how users can navigate the platform, the data dashboard, and its primary tiles. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains the concept and vision of PolkaBox. | 
| 1. |  3 Data Boards  | Build the front end and UX/UI of the platform: design 3 interactive dashboards for three different projects in the Polkadot ecosystem. Our planned projects are: DeFi tracking (blocks, transactions, log events), Market Sentiment Analysis (news feed, fear/greed gauge), Prediction (price). We provided UI diagrams for each of the 3 dashboards.  Although the project topic might change, the number of dashboards is fixed. |
| 2.  | Filter Module | Implement global filters for the dashboards, including filter by time granularity, blockchain, asset, etc. |
| 3. | Platform Navigation Tools | Implement a search tool to filter selected news articles by pertinent hot word. |
| 4. | DeFi Tracking Module | Create a dashboard visualizing on-chain data. include dashboard tile of chain GDP, Plotly Sankey plot for deposited and withdrawn assets by volume, donut plot of chain GDP breakdown by asset.  |
| 5. | Sentiment Analysis Module | Deploy Python’s modules TensorFlow, PyTorch, Scikit-Learn to perform a news sentiment analysis of aggregated API data (tokenize, normalize, stemming, lemmatize) and determine investor’s attitude (greed/stalemate/fear) on DOT (native currency) in the Polkadot ecosystem. Include a gauge chart for market sentiment visualization. The sentiment analysis will be constrained to a maximum of 5 news sources. |
| 6. | Predictive Analysis Module | Aggregate raw data (blockchain and external), run ML model on historical price trend and market sentiment data, and cast price prediction for a maximum of the tokens in Polkadot ecosystem, i.e. the top 10 tomen by TLV, such as, DOT, LINK, KSM, etc.  |
| 7. |  Benchmark  | Provide a short commentary comparing the performance of our predictive algorithms with two other prediction models in the Polkadot/Kusama ecosystem, e.g., comparison with https://github.com/w3f/Grants-Program/blob/master/applications/XPredictMarket.md  |
| 8. | UI Module: refine WebApp | Improve functionality and aesthetics, layout, and UI feedback (e.g., icon badge, modal alerts) | 
| 9. |  File Processing  | Implement in our platform file operation services such as dashboard tile download, table download, and page download as pdf or csv file. |

 
 
 
## Future Plans

1. **APIs**

    - Provide more endpoints for rich data and not just raw data
    - Keep API documentation well maintained and create a Postman collection for ease of use 
    
2. **External Data Sources**

    - Add more off-chain data sources (this will be an ongoing, never-ending endeavor. At the same time, we recognize that growing the database indefinitely would incur cloud fees so funds provision will be made for tech expenses. We plan to throttle the public APIs initially to avoid too much traffic once public. We plan on using Github donations to keep the public database open and maintained as we see a lot of interest and value in providing rich data via an easy-to-use API alongside blockchain data


3. **Analytics Models**

    - Optimize models (bootstrap models, operations research heuristics on model stacking)
    - Provide a broader range of modeling based on key questions or metrics i.e. 
        - Linear regression (single or multi-variate) for prediction continuous variables
        - Logistic regression (boolean target variables) for predicting events
        - Classification for predicting situational outcomes
        - Clustering (KNN vs GMM) for understanding underlying similarities or differences 
          
4. **Nodes / chains**
    - Support more blockchains to provide a side-by-side comparison with similarly sized chains and communities

5. **Dashboard**
    - Add more features, visualizations, and UI enhancements, e.g.
        - Features: user toggles/sliders for data manipulation, export to CSV/JSON ability
        - Visualizations: drill down ability, chart types, interactive plots (time-series data)
        - UI enhancements: dark mode, 100% mobile-responsive, themes
 
 
## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We heard through the Web3 Foundation Webpage.

**Have you ever applied for other grants?** Yes, we have applied for another grant to fund this project proposal. We are waiting for approval. 
