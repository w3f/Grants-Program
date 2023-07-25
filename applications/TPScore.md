# TPScore

- **Team Name:** TPScore
- **Payment Address:** 0xa8E10a8E6EEfB7175fB529b24e1a0b8DdBD29510 (USDC)
- **Level:** 1

## Project Overview :page_facing_up:

This application is in response to the RFP [Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md)

### Overview

TPScore simplifies TPS Data Analysis for non-technical users in the Polkadot Ecosystem.

TPScore aims to provide non-technical users in the Polkadot ecosystem with an accessible and user-friendly platform for analyzing TPS (Transactions per Second) data. Our goal is to bridge the gap between technical intricacies and user-friendly visualization, empowering individuals to make informed decisions about blockchain adoption, investment, and development.

Adoption levels and community engagement are vital indicators of a blockchain's success. They directly impact the attractiveness of a network and its potential for growth. While social media followers, media coverage, and developer activity are commonly considered metrics, the true measure of adoption lies in TPS. TPS is a robust metric that correlates with the economic activity on a blockchain, making it a crucial parameter for understanding and evaluating different chains.

When users choose a blockchain for investment or development purposes, conducting a thorough analysis of each chain is essential. Polkadot's unique architecture and scalability prospects, with its interconnected parachains, offer a vast ecosystem of possibilities. However, determining the TPS of Polkadot and its 40+ parachains is currently a complex task that requires technical knowledge and data analytics expertise. This creates a significant barrier for non-technical users and even presents challenges for those with technical know-how, as gathering TPS data for multiple parachains can be time-consuming.

TPScore aims to simplify the process of TPS analysis by providing an intuitive and user-friendly analytics website. We remove the need for users to perform complex ETL (Extract, Transform, Load) work or possess specialized data analytics skills. Our platform presents TPS numbers for the Polkadot Relay chain and parachains in a readily understandable format, accessible to anyone. We empower individuals to effortlessly access and compare TPS data across different parachains, enabling them to make informed decisions regarding investments, project selection, and engagement within the Polkadot ecosystem.

### Project Details

The final state of the project will consist of two key components:

1. ETL System: This component will be responsible for fetching data from the blockchain, transforming it, and storing it in a relational database.

2. User Interface (UI) with data visualizations: The UI will provide a user-friendly interface to access and analyze TPS data. It will include visually appealing and informative visualizations of the data, reducing users barier to understanding blockchain metrics.

The initial version of TPScore, which will serve as a POC, will cover the Relay chain and 38 parachains. The UI interface will be designed to be accessible on both desktop and mobile devices, ensuring a seamless user experience across various platforms.

To fetch blockchain data, we will leverage two methods:
1. Subscan API ([list of parachains accessed with Subscan API](https://github.com/its-a-setup/tpscore/blob/main/parachain_info/subscan_parachains.json))
2. Public endpoints ([list of parachains accessed by public endpoints](https://github.com/its-a-setup/tpscore/blob/main/parachain_info/endpoint_parachains.json))

#### 1. ETL System

We will retrieve blockchain data using either the [Subscan API](https://support.subscan.io/#introduction) or connect to the public endpoints of parachains using the [Substrate interface library](https://pypi.org/project/substrate-interface/1.0.3/).

To ensure streamlined and efficient data processing, we will leverage Apache Airflow.

To calculate the average TPS, we will take the number of transactions within the last 100 blocks. We will fetch raw data at regular intervals of every 10 minutes. This raw data will then undergo processing within Airflow's DAGs using Python Operators, ensuring efficient data transformation and preparation.

Finally, the processed data will be stored in a MySQL database to be later picked up by Next.js framework.

#### 2. User Interface (UI) with data visualizations

We will use Next.js as our full-stack framework. It allows us to both retrieve data from MySQL database and render React app on a server.

To visualize data, we will use a simple and concise UI: the grid of cards with the blockchain's name and TPS. We expect one common use case: users go to our website and scan through all chains to find a desired one. So we will simplify this process by adding handy sorting and filtering.

#### Architecture 

![Architecture diagram](https://raw.githubusercontent.com/its-a-setup/tpscore_grant/main/static/architecture.png)

#### Database schema

![](https://raw.githubusercontent.com/its-a-setup/tpscore_grant/main/static/db_schema.png)

#### UI Design

##### Desktop Design

![Desktop UI design](https://raw.githubusercontent.com/its-a-setup/tpscore_grant/main/static/desktop_main_screen.png)

##### Mobile Design

![Mobile UI design](https://raw.githubusercontent.com/its-a-setup/tpscore_grant/main/static/mobile_main_screen.png)

#### Technology stack
1. Apache Airflow
2. Python + Data Analysis Libraries
3. Next.js & React

#### Out of scope details 

During this stage, our focus will be solely on the Polkadot ecosystem, and we won't be providing coverage for the Kusama ecosystem. This decision allows us to concentrate on testing the market fit of our Proof of Concept (POC) within the Polkadot network.

Additionally, we will exclude a specific set of parachains from our analysis ([out of scope parachains](https://github.com/its-a-setup/tpscore_grant/blob/main/parachain_info/out_of_scope_parachains.json)). These parachains are either not yet live on the mainnet or lack a public endpoint for data access.

### Ecosystem Fit

Our project addresses a critical gap within the Polkadot ecosystem by providing comprehensive data visualization and analysis tool. Currently, obtaining data from Substrate-based blockchains relies on block explorers that offer a limited set of metrics or require technical skills to access and transform raw data from parachain endpoints. Recognizing this challenge, we aim to simplify the life of Polkadot ecosystem users with easy access to sophisticated network metrics for analyzing network parameters and comparing blockchains.

Our target audience comprises advanced blockchain users who seek convenient access to comprehensive network metrics but lack the technical expertise or time to perform complex analyses independently. We understand their need for intuitive tools that enable efficient evaluation of blockchain networks, helping them to make informed decisions.

As of the time of this application, no tools exist for checking TPS across the Polkadot Relay chain and parachains. However, there are 2 similar projects, [ETHTPS](https://ethtps.info/) and [RealTPS](https://realtps.net/), which focus on the Ethereum and other layer-1 networks. The presence of these projects indicates the existence of user needs and market fit. Unfortunately, both of these projects do not cover Polkadot ecosystem and fall short in terms of user-friendliness, highlighting the need for improvement in its UI design. 

## Team :busts_in_silhouette:

### Team members

- Ilya Andreev
- Nikita Grechino

### Contact

- **Contact Name:** Ilya Andreev
- **Contact Email:** tpscore.engineering@gmail.com

### Legal Structure

- **Registered Address:** no registered address
- **Registered Legal Entity:** no registered entity

### Team's experience

**Ilya Andreev** has 4+ years of experience in product management, out of which 3 years were spent in P&G focusing on the management and development of Big Data solutions. He has been in the blockchain industry for 3+ years with more than a year working full-time in one of the startups in the DotSama ecosystem. 

**Nikita Grechino** is a Fullstack engineer with more than 5 years of experience. He has been working in the blockchain space since early 2022, focusing on the development of the front-end interface for crypto trading platforms.

### Team Code Repos

- https://github.com/its-a-setup
- https://github.com/fromaline

## Development Status :open_book:

This project is a response to RFP [Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md)

Up until now, our primary focus has revolved around two key objectives:
1. Finding product-market fit
2. Ensuring credible API/endpoints availability for the Polkadot ecosystem

#### 1. Finding product-market fit

Max TPS has long been a core indicator of blockchain performance and speed.  Numerous articles and blogs compare the maximum TPS of different networks, highlighting its significance ([Article 1](https://academy.binance.com/en/glossary/transactions-per-second-tps), [Article 2](https://www.analyticsinsight.net/top-10-cryptocurrencies-with-a-high-transaction-speed-in-2022/), [Article 3](https://medium.com/codex/cardano-solana-polkadot-fantom-and-telos-vs-the-clock-d439aa73e4a2), etc.). However, max TPS is often based on theoretical calculations rather than real network utilization, making real-time TPS measurement a more valuable alternative. Notably, projects like [ETHTPS](https://ethtps.info/) and [RealTPS](https://realtps.net/) already track TPS outside the Polkadot ecosystem, indicating a growing interest in real-time TPS tracking.

#### 2. Ensuring credible API/endpoints availability for the Polkadot ecosystem


We have successfully identified methods to retrieve data from the Polkadot Relay chain and 38 parachains. We will utilize the [Subscan API](https://support.subscan.io/#introduction) or connect to the public endpoints of parachains using the [Substrate interface library](https://pypi.org/project/substrate-interface/1.0.3/). It is important to note that locating functional parachain endpoints may be challenging for average blockchain users, as there is no centralized source providing all parachain endpoints. Moreover, certain parachains lack public endpoints and will be excluded from this POC. However, we may consider including them in future versions by directly engaging with the respective parachain teams. 

For a detailed list of the parachains accessed through the Subscan API, parachain endpoints, and the out-of-scope parachains, please refer to the provided [link](https://github.com/its-a-setup/tpscore_grant/tree/main/parachain_info)

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 2 months 
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 10,000 USD

### Milestone 1 - ETL System

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3|
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**.
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Database schema | We will implement the schema in MySQL database. |
| 2. | Airflow DAGs  | We will create Airflow DAGs for data gathering and calculation of TPS metrics. |


### Milestone 2 — User Interface (UI) with data visualizations

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains how to use TPScore product and how it was build. |
| 1. | Data access | We will access the MySQL database from our Next.js app and process data on the server to make the client as lightweight as possible. |
| 2. | UI | We will build UI according to the designs and test it thoroughly under different conditions. |


## Future Plans

Our primary goal for this project is to develop a POC and validate our assumptions regarding its market fit and appeal to Polkadot users. If we receive a positive response from the community, we intend to dedicate more time and resources to further develop the project.

In future versions, we have identified several potential features to consider:

1. Including support for Polkadot parachains that are currently out of scope for the POC by directly engaging with the respective parachain teams.
2. Incorporating historical data and visualizations to observe the TPS dynamics of specific parachains or the relay chain over time.
3. Expanding the project to include data from the Kusama Relay chain and its associated parachains.
4. Enabling easy comparisons by incorporating data from other non-Substrate-based blockchains.
5. Extending the project beyond TPS tracking to include other valuable parachain-related data that is typically challenging to retrieve without technical expertise.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

We learned about it via Web3 Foundation Website. We've been closely monitoring the DotSama ecosystem for more than a year, we've read documentation, tested various projects/parachains, and participated in staking. After getting a deeper understanding of the technology and the ecosystem we decided to test our own idea and build a POC of a data analytics website for the Polkadot ecosystem. 

This application is a logical next step in our continued interest in Substrate-based chains and Polkadot in particular.