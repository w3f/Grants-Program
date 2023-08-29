# Tokenguard

  

*  **Team Name:** [Tokenguard.io](http://tokenguard.io/) (Block Solutions Sp z o.o.)

*  **Payment Address:** 0xa86d1302695a5e915fc54f2a18200337eacad082 (Ethereum ERC20 USDT)

* [**Level**](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels)**:** 2

  

## Project Overview 📄

  

This application is in response to the RFP [https://grants.web3.foundation/docs/RFPs/Under Development/analysis-website-and-data-platform](https://grants.web3.foundation/docs/RFPs/Under%20Development/analysis-website-and-data-platform).

  

### Overview

  

The existing challenge in the Polkadot & Kusama ecosystems is **the absence of a user-friendly on-chain analytics platform**. Currently, querying data through GraphQL and backend services like Subquery and Subsquid requires considerable effort. Creating compelling and visually attractive dashboards is almost impossible due to lack of tools that focus on end user experinece. As a result, power-users and builders face difficulties in interactively accessing high-quality data and creating custom visualizations for easy sharing.

  

  

To address this challenge, we propose an easy-to-use and efficient solution - an advanced data analytics tool designed to cater specifically to the needs of the Polkadot & Kusama ecosystems and related parachains. Our platform offers seamless data querying, simplifying the creation of customized charts and visualizations, **facilitating easy sharing of valuable insights and metrics within the**  **community.**

  

  

With the aim of ensuring extensive accessibility across the Substrate community and optimizing the functionality of our analytical tool, Tokenguard application places **a strong emphasis on refining the UX aspect**. This involves the development of an intuitive user interface (UI) and seamless frontend that effectively facilitates insights discovery.

  

  

### Project Details

  

To meet the expectations of Polkadot and Kusama community and the suggestions contained in the RFP, we propose a **comprehensive analytics tool consisting of**  **a query builder, visualization creator and dashboard composer for Polkadot & Kusama ecosystems** - the creation of which requires the implementation of the following areas:

  

  

1. Data model:
	- Creating a RAW data access that would categorize data depending on its depth:
		1. L0: Relay chains (Polkadot, Kusama)
		2. L1: Parachains
		3. L2: dApps & Smart Contracts
	- Creating a database of pre-transformed, comparable & curated metrics - each of the metric would be a pre-defined SQL query based on RAW data that is curated by Tokenguard team:
		1. User related metrics
		2. Activity related metrics
		3. Conversions related metrics
2. Metrics 
	- Creation:
		1. Allowing users to create their own SQL queries from scratch and save them.
		2. Allowing users to preview SQL query of each of the existing metrics at Tokenguard.
		3. Allowing users to copy, edit and save each of the existing metrics.
	- Collection:
		1. List of projects on different depths (L0, L1, L2)
		2. List of RAW tables available for these projects
		3. List of comparable metrics for these projects

4. Dashboards
	- Making it possible for people to create & share dashboards with their own metrics as well as Tokenguard curated metrics:
		1. Allowing for choosing how to display a metric (more than 10 types of visualizations available)
		2. Allowing for commenting dashboards
		3. Adding tags to dashboards
	- Creating a search engine for dashboards
5. Users
	- Creating a user subpage with a list of users' dashboards & metrics

  

  

### **Beta Version - existing Tokenguard features**

  

(You can access public version of Tokenguard app at [app.tokenguard.io](http://app.tokenguard.io/))

  

  

Over the course of six months, Tokenguard application was meticulously developed with the objective of creating a user-friendly analytics tool for the Substrate Ecosystem, without requiring any coding or SQL skills. Within this timeframe, we successfully produced a beta version of the app, which now offers essential on-chain analytics for various projects within the Polkadot ecosystem, such as Astar & Aleph Zero - our lovely customers.

  

  

#### **Features and designs:**

Dashboards overview - The overview of currently indexed and supported parachains:<br>
<img src="https://imagizer.imageshack.com/img924/1246/BK6CYe.png" width="800" border="0"><br><br>

Ecosystem metrics dashboards - The on-chain data is visually presented through charts that are categorized into the most significant and essential aspects:<br>
<img src="https://imagizer.imageshack.com/img923/2272/10xb78.png" width="800" border="0"><br><br>


Filtering - The ability to sort data based on the most useful indicators:<br>
<img src="https://imagizer.imageshack.com/img924/8639/9qncPN.png" width="800" border="0"><br><br>


Custom dashboard creator - The drag and drop feature allows users to create personalized dashboards tailored to their specific needs.<br>
<img src="https://imagizer.imageshack.com/img922/9135/yU5s5a.png" width="800" border="0"><br><br>


User activity analytics - A module that allows for an in-depth analysis of user behavior based on metrics such as DAU, MAU, retention or user segments.<br>
<img src="https://imagizer.imageshack.com/img924/8259/bLTEVH.png" width="800" border="0"><br><br>


**Technology Stack:**

* JavaScript, TypeScript, Python
* SQL, dbt, Airflow
* Kubernetes
* SubSquid
* BI analytics tools
* Cloud hosting and scalable infrastructure

### Maintenance

In order to maintain an on-chain analytical tool covering the entire ecosystem, it is necessary to index, store, maintain and process data from relay chains and nearly a hundred parachains with different pallets, the number of which is constantly growing.


We are in the process of working out the most optimal solution with the Parity team to cover the maintenance costs with the [Polkadot Data Alliance Parent Bounty (WIP)](https://docs.google.com/document/d/1fA5ARHy-frzgZC66rniKZ5o7CSbDvCTkS--kWaMzuMs/edit#), taking into consideration the following solutions:

* Indexing and storing the data in-house - which offers a high quality experience for the end-user due to possibility of pre-aggregating the data and working out the ETL process so that the data is displayed almost real-time.

* Using SubSquid archives - dependent on the SubSquid business model regarding its data distribution model in the future and possibility of accessing RAW data rather than GraphQL endpoint.

* Using substrate-etl - dependent on the quality and availability of the data. Currently the data has a significant delay, potentially decreasing the usability of the data. Additionally, due to the size of relay chains history, querying the data through BigQuery is extremely expensive.

The best model is yet to be decided with Polkadot Data Alliance and will be a matter of discussion after the PoC is designed and costs of each solution is known.

  
### Other Proposals Comparison

  

[RFP](https://grants.web3.foundation/docs/RFPs/Under%20Development/analysis-website-and-data-platform) has been partially addressed by other teams in the proposals [#1716](https://github.com/w3f/Grants-Program/pull/1716) [#1768](https://github.com/w3f/Grants-Program/pull/1768) [#1748](https://github.com/w3f/Grants-Program/pull/1748) [#1815](https://github.com/w3f/Grants-Program/pull/1815) and work is underway to solve it. Being aware of how wide and complex the area of data analysis is, in our solution, we wanted to refer to the issues and propose modules that have not yet been built, but will complement the ongoing work.

Compared to the following, Tokenguard in this proposal provides both a user-friendly no-code query editor and SQL query editor; visualization creator and dashboard composer - which UX / UI is designed in an accessible way, reaching a wide audience; sharing feature that allows for efficient sharing of created metrics and better data analysis.

While:
* [#1716](https://github.com/w3f/Grants-Program/pull/1716) - is an ETL tool that focuses on delivering the Polkadot ecosystem data to a wide audience using Google BigQuery service.

* [#1768](https://github.com/w3f/Grants-Program/pull/1768) - is an ETL tool focused on deep account analytics challenges.

* [#1748](https://github.com/w3f/Grants-Program/pull/1748) - is a data analytics tool that focuses on wallet profiling and tracking its investments and structure.

* [#1815](https://github.com/w3f/Grants-Program/pull/1815) - is a low-level SQL query editor and vizualization creator dedicated for data engineers and data scientists.


### Ecosystem Fit

In order to facilitate growth, Substrate ecosystem needs a vast and thriving environment of developers creating parachains, dApps and smart contracts. Each parachain and each smart contract generates thousands of transactions that store important technical and business insights. Each new growing dApp, with its own marketing & growth strategy, **brings in new active users to the ecosystem and venture capital money**. These insights are currently hard to discover and the ecosystem needs infrastructure tools that would make it easy for management teams and developers to uncover them, similarly as it is done in EVM environment with tools like Dune Analytics or Tenderly.

Tokenguard addresses the need of following audiences:


**Community:**
* Transparency & Credibility:
	* Access to data and on-chain insights is the basis for a community driven blockchain.
	* The ability to track and verify activity and growth in the parachains reinforces trust.
* Investment:
	* A tool that gives access to the performance of individual dApps and DeFi allows for a better assessment of the market situation in terms of investment.
	* Insights into data on developer activity and TVL allows to attract additional community members who want to invest in the ecosystem.
* Engagement:
	* A well-informed community is more likely to be involved in the building programs on a given chain and in ongoing activities.
	* Access to insights allows the community to actively promote chain in social media, at events and in ordinary media.

**Relay chains, parachains and dApps teams:**


* Marketing Improvements:
	* Off-chain to on-chain data correlation provides a deeper understanding of the marketing and PR efforts that contribute to the network’s growth
	* Developer engagement tracking allows to identify strategies that in fact encourage web3 creators to build within the ecosystem.
	* User segmentation and user behavior tracking allows to understand which protocols and dApps generate the most traffic for the network and what type of user affects its growth.
* More efficient Treasury Spending:
	* Tracking the KPIs and inflow of new users through dApps and on-chain projects financed through relay chains and parachains treasury grants.
	* Source of reliable data to support discussion and decisions during treasury votings.
* Strengthening Operations & Security:
	* Real-time monitoring and alerts enable the team to respond more effectively in the face of potential threats such as rug pulls.
	* Thanks to access to on-chain insights, such as a TVL in DeFi or a Smart Contract creation per developer, Tokenguard helps understand how to better optimize the operations of parachains for individual entities.

 
Tokenguard's public features and data are already being used by community users and projects like DotInsights ([https://dotinsights.subwallet.app/polkadot-report-q2-2023-en/](https://dotinsights.subwallet.app/polkadot-report-q2-2023-en/)):
<img src="https://imagizer.imageshack.com/img922/508/rymrP6.png" width="800" border="0">


## Team 👥
### Team members

  

* Kamil Gorski - CEO ([https://www.linkedin.com/in/gorskikamil/](https://www.linkedin.com/in/gorskikamil/))
* Jakub Rojek - CTO ([https://www.linkedin.com/in/jakub-rojek-dev/](https://www.linkedin.com/in/jakub-rojek-dev/))
* Damian Rolek - CDO ([https://www.linkedin.com/in/damianrolek/](https://www.linkedin.com/in/damianrolek/))
* Matt Saczewski - Business Development Manager ([https://www.linkedin.com/in/msaczewski/](https://www.linkedin.com/in/msaczewski/))
* Jacob Piorecki - UI/UX Designer ([https://www.linkedin.com/in/jacobpiorecki/](https://www.linkedin.com/in/jacobpiorecki/))
* Piotr Józefowicz - Backend Developer ([https://www.linkedin.com/in/piotr-jozefowicz-529669220/](https://www.linkedin.com/in/piotr-jozefowicz-529669220/))
* Adam Król - Backend Developer ([https://www.linkedin.com/in/adam-król-7b3a831b6/](https://www.linkedin.com/in/adam-kr%C3%B3l-7b3a831b6/))
* Krystian Trepczyński - Frontend Developer ([https://www.linkedin.com/in/krystiantrepczynski/](https://www.linkedin.com/in/krystiantrepczynski/))


### Contact
*  **Contact Name:** Matt Saczewski
*  **Contact Email:** [matt@tokenguard.io](mailto:matt@tokenguard.io)
*  **Website:** [tokenguard.io](http://tokenguard.io/)

  

### Legal Structure
*  **Registered Address:** Foksal 3/5 St., 00-366 Warsaw, Poland
*  **Registered Legal Entity:** Block Solutions Sp z o.o.

### Team’s experience
Tokenguard’s clients include Swiss Sygnum Bank, [Bitcoin.com](http://bitcoin.com/), Astar, Aleph Zero and many others recognizable brands. Each of cofounders has tremendous web3 experience - Damian was co-creating DeFi analytics platform Kasuria. Jacob was working at OpenLoyalty, helping web3 projects engage their users and Kamil created web3 security solutions, designing a security monitoring that served 30+ tokens.

### Team Code Repos
* [https://github.com/tokenguardio](https://github.com/tokenguardio)


## Development Status 📖
Tokenguard is currently developing the following features:
* Publicly accessible core analytics for Substrate communities, available at [https://app.tokenguard.io](https://app.tokenguard.io/)
* Ecosystem Analytics for [Astar](https://astar.network/) - paying customers
* Ecosystem Analytics for [Aleph Zero](https://alephzero.org/) - paying customers
* Ink! dApp analytics for [AZero ID](https://azero.id/), [ArthSwap](https://app.arthswap.org/), [Panjea](https://panjea.io/), [Interlock](https://www.interlock.network/) and others
* Partnership with [SubSquid](https://www.subsquid.io/)

### Current Traction & Testimonials ###
Our current business model focuses on offering growth analytics solutions for parachains & dApps and allowed us to validate both product and services through collaborations with notable parachains such as Astar and Aleph Zero. We believe that **delivering free of charge community analytics will further enhance discovery of growth insights within the whole ecosystem**, allowing it to win the race for leader's position in the web3 space.

Teams we cooperate with appreciate the flexibility and professionalism of our team:<br><br>
<img src="https://imagizer.imageshack.com/img924/640/oervBt.png" height="80" align="left" border="0">*We are happy to use Tokenguard, which offers Aleph Zero comprehensive on-chain user metrics and engagement data. Thanks to their analytics tool, we can make data-driven decisions and provide transparency to our community with easy-to-use dashboards.* <br>**Antoni Zolciak, CMO, Aleph Zero**<br><br>

<img src="https://imagizer.imageshack.com/img923/978/GjfFD0.jpg" height="80" align="left" border="0">*Tokenguard is the missing part for Astar ecosystem. Its analytics and tracking capabilities provide us with the crucial insights needed to understand on-chain activity and user behavior, allowing us to make data-driven decisions and optimize our strategies like never before.* <br>**Maarten Henskens, Head of Foundation, Astar Network**<br><br>



## Development Roadmap 🔩

Having a lot of experience in building web3 products, our team is aware that there are many challenges behind building a fully functional analytics platform similar to Dune for an ecosystem as vast and diverse as Polkadot & Kusama. We acknowledge the fact that a lot of questions need to be answered and W3F requirements need to be specified to fully estimate the cost of creating such a solution that will be **easily upgradable and basically - fun for users**. We therefore propose to split the work on the project into 2 grants / proposals:
* PoC and maintenance cost estimation
* Fully functional platform

This proposal is the first part that is solely focused on preparation of the PoC, defining the requirements of the final solution and estimating its production and maintenance costs. As an effect, we will be able to prepare a well thought out second proposal that will include all the expected features and cover all costs to deliver a user-engaging product.


### Overview
*  **Total Estimated Duration:** 2 months
*  **Full-Time Equivalent (FTE):** 1.5 FTE
*  **Total Costs:** 30,000 USD

  
### Milestone 1: Data and design for PoC
*  **Estimated duration:** 1 month
*  **FTE:** 1.5
*  **Costs:** 15,000 USD



| Number | Deliverable | Specification |
| ---| ---| --- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide inline documentation. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. We will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1.| Data and metrics | Indexing and storage of Polkadot and Kusama data:<br>1. Preparing SubSquid data processors,<br>2. Creating a preliminary design standard of common data model for relay chains and most common pallets,<br>testing tracking and collection of XCM data,<br>3. Creating metrics catalogue and measuring the cost of running it. |
| 2. | Core features UI | Creating UX / UI designs for core features:<br>1. A reusable frontend design for metrics creation in no-code paradigm,<br>2. A reusable frontend design for query composition using SQL,<br>3. A reusable frontend design for no-code dashboard composition.<br> |
| 3. | ETL infrastructure | Designing an ETL infrastructure that will allow to:<br>1. Process the relay chain data with low delay for public user access,<br>2. Automatically scale data warehouses responsible for storing user-designed queries and dashboards,<br>3. Semi-automatically modify data models required by relay / parachains updates.<br>Delivered as deployment files for scalable infrastructure in Kubernetes. |


### Milestone 2: PoC and maintenance
*  **Estimated Duration:** 1 month
*  **FTE:** 1.5
*  **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| ---| ---| --- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide inline documentation. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. We will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish a report on the PoC design that will thoroughly showcase all the work done and present a cost estimation of designing and maintaining a tool that has a Dune-like usability (or higher). |
| 1. | SQL querying and queuing engine PoC | Connecting data model and UI designs with an SQL querying engine allowing to visualize results of the queries in real-time:<br>1. SQL querying engine,<br>2. Queries queuing engine,<br>3. Clickable and fully usable PoC version of the SQL data delivery tool with selected metrics and RAW data available for Polkadot and Kusama.<br> |
| 2. | Additional features UI | Scaling capabilities discovery and measurement:<br>1. Complex query creation allowing to simultaneously collect data from different relay chains,<br>2. Visualization creator with different visualization types using external BI tools dependency,<br>3. Complex dashboard composer,<br>4. Dashboard sharing feature.<br> |
| 3. | Report & estimation | Detailed report on the PoC design and cost estimation of all the features mentioned in "Project details" as well as additional features requested by Web3 Foundation.<br><br>Detailed estimation of the maintenance cost of ETL process and backend operations of fully operational solution available for:<br>1. Relay chains<br>2. Parachains<br>3. dApps / tokens<br>With assumption of free access for community users with maximum processing time specified by Web3 Foundation. |

  
  
  

## Future Plans
### Analytics for Polkadot & Kusama ecosystems
The module implemented under this proposal lays the foundation for covering the entire Polkadot & Kusama ecosystem with accessible and user-friendly tool for on-chain insights and analysis. PoC of query builder, visualization creator, dashboard composer for Polkadot and Kusama Relay Chains enables further scaling of the analytical tool to the entire ecosystem.

The next steps will consist of a proposal to create a common dataset of metrics for each category of pallets/parachains; creating a more complex query builder, automated/semi-automated process of new parachain inclusion; automated/semi-automated process of user-requested tables aggregation; indexing and maintaining a database for the entire ecosystem (in cooperation with the Parity team).

### Making web3 grow
At the same time, continuing the current activities, Tokenguard will offer its services to provide private dashboards with advanced features to subsequent parachains in order to improve their marketing and operational activities.

With backing up of well-known web3 investors, Tokenguard is on its path to help web3 ecosystems and dApps understand their user behavior and focus on marketing & product strategies that deliver organic growth.

