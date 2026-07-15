# TreasuryTracker

- **Team Name:** Stake Plus Inc
- **Payment Address:** 0x06737F4137E244DBc46c6044E5051A66074F3f87
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Problem Statement

The community is plunging into collectives without any established budgeting mechanisms. This absence of financial oversight is compounded by misunderstandings and a general lack of clarity concerning the specifics of different operations within the ecosystem. Without a clear grasp of current spending on categorized requests, it's impossible to set up appropriate budgets, resulting in a lack of control and potential misallocation of resources.

### Overview

TreasuryTracker is an innovative analytics portal designed to provide comprehensive insights into the OpenGovernance referenda on Polkadot and Kusama. Through intuitive charts, tables, and reports, the platform aims to track, analyze, and present vital data, allowing the community to understand areas of treasury funding and obtain a holistic overview of the governance process.

Our interest in creating this project comes from a shared vision of providing the community with the tools needed to actively engage in the governance process, ensure efficient utilization of treasury funds, and create a more accountable and transparent ecosystem.


### Project Details

#### Mockups/Designs of UI Components

Mockups have been created to display essential features, including interactive charts, tables, and reporting tools. The main dashboard will include an intuitive navigation menu and provide visualizations of various metrics related to the OpenGovernance referenda on Polkadot and Kusama. 

Within the following grant, we plan to implement following two analytics:

- A Weekly Cumulative Overview: Tracking New Referenda by Project Categories

![1](https://raw.githubusercontent.com/stake-plus/Grants-Program/master/assets/pic%201.png)

- A Weekly Overview Of Approved Referenda Relative to Referenda Tracks and Requested DOT Fundings

![2](https://raw.githubusercontent.com/stake-plus/Grants-Program/master/assets/pic%202.png)



The following examples are mockups of the future platform functionality and are NOT part of this grant. They present the prior research and the work showing the long-term vision for the platform and guide development beyond the initial phase, ensuring alignment with the defined goals after delivering a functional platform.

The summary table with all relevant data will be available to download in several formats.


- A Weekly Overview Of OpenGov Referenda Status and Referenda Tracks

![3](https://raw.githubusercontent.com/stake-plus/Grants-Program/master/assets/pic%203.png)

- A Weekly Overview Of OpenGov Referenda Results %

![4](https://raw.githubusercontent.com/stake-plus/Grants-Program/master/assets/pic%204.png)

- Example of future extended analytics

![5](https://raw.githubusercontent.com/stake-plus/Grants-Program/master/assets/pic%205.png)

Figma mock ups of the website

![Figma1](https://raw.githubusercontent.com/stake-plus/Grants-Program/master/assets/figma1.png)
![Figma2](https://raw.githubusercontent.com/stake-plus/Grants-Program/master/assets/figma2.png)


#### Core Components, protocols, architecture

The governance website is built using Node.js for the backend and CakePHP for web application. Data is managed with MySQL or MariaDB, while the front-end utilizes JavaScript libraries like Chart.js and jQuery. 

- [Database Specification](https://github.com/stake-plus/Grants-Program/blob/master/assets/database_specification.pdf)

![System Architecture](https://github.com/stake-plus/Grants-Program/blob/master/assets/architecture.png)

### Ecosystem Fit

TreasuryTracker fits within the non-core infrastructure category of the Polkadot and Kusama ecosystem, with a specialized focus on OpenGovernance referendums. In particular, the platform focuses on referenda that are seeking funds from the treasury offering automated data collection, analytics, and long-term oversight over treasury activities.

The target audience for our platform includes token holders interested in the long-term success and ROI of treasury-funded projects, active OpenGov participants seeking an overview of the types of projects and amount of funding allocated and the new projects requiring oversight over similar past projects, their funding, and voting success.

While there are no projects in the ecosystem that address treasury components and provide the same level of analytics as our proposed platform, there are a few with related functionalities:

- [doTreasury](https://www.dotreasury.com/dot/)  focuses solely on treasury statistics, lacking the wider analytical range that our project aims to offer
- [Grant Management Web Application RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/grant_management_webapp.md) are focused on the W3F grants UI and are not including the analytics component our platform intends to deliver.



## Team :busts_in_silhouette:

### Team members

- Tom S.
- Thomas T.
- CoinStudio

### Contact

- **Contact Name:** Tom S.
- **Contact Email:** tom@stake.plus
- **Website:** https://stake.plus

### Legal Structure

- **Registered Address:** 254 Chapman Rd, Ste 208 #8779, Newark, Delaware 19702 USA
- **Registered Legal Entity:** Stake Plus Inc

### Team's experience

With over two decades of combined experience, we have honed our expertise in web2 application development, encompassing significant data-warehousing initiatives and front-end projects like a billing system for an FTTH ISP. Our entrepreneurial journey includes the successful launch and subsequent acquisition of four startups.

### Team Code Repos

Company:
- https://github.com/stake-plus

Team:
- https://github.com/senseless
- https://github.com/Bluespottedfrog

Reference: https://github.com/orgs/ibp-network/repositories

### Team LinkedIn Profiles (if available)

We no longer use LinkedIn but can provide CV privately if required.

## Development Status :open_book:

At the current stage of the project, extensive research and preparatory work have been carried out to lay the foundation for successful grant application. Below is a detailed description of the work conducted before applying for the grant:

UI Mockups and Functionality:
Prior to the proposal, careful planning and design were undertaken to create UI mockups that accurately represent the intended functionality of the platform. These mockups serve as a guide for the development process, ensuring that user experience and visual aesthetics align with the project's objectives and future plans.

On-Chain Data Reading:
Initial testing and development of functions for reading on-chain data have been performed. This represents a crucial step in achieving the project's goals, as it allows for accurate and real-time retrieval of referenda and treasury data directly from the blockchain.

Research and Community outreach:
Comprehensive research has been conducted to understand the needs of the community, the gaps in existing solutions, and the potential challenges in implementing the project.



## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1.25
- **Total Costs:** 10,000 USD

### Milestone 1 Example � Basic functionality 

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the application and its various features. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains what was done/achieved as part of the grant |
| 1. | Backend Development | A node module that allows the CakePHP framework to pull the relevant data directly from the blockchain via WSS/RPC. |
| 2. | Frontend Development | A CakePHP framework that interacts with database contents rendering some pages and providing API results to portions of the javascript elements for dynamic rendering.  |
| 3. | Integration and Testing | The final milestone is focused on integrating the backend with the frontend, and conducting extensive testing to ensure everything functions as intended. |

### Features Included

- Referenda Details: Covering aspects like ID, Proposal Title, Proposer's ID, Address, Origin track, Project Category, Proposal URL, and Status.
- Financial Insights: Offering information on the Payment Schedule, Requested Amounts (in DOT and USD), Received Amount in USD, and financial variances such as the Difference in USD and Reimbursements.
- Voting Statistics: Provides a deep dive into Referenda Submission dates, Start and End dates, the dynamics of Votes (Aye, Nay, Total), Votes Casted and Delegated, and their consequential distribution percentages. Moreover, it delves into the Final Vote Results and the Controversy Index.
- Voter Analysis: Incorporates a broad range of data, from numbers of Voters for Aye, Nay, and Abstain to metrics about Voter delegation, distribution, and final results.
- Time-Defined Data: An organized view according to Quarters, Months, and Weeks for when Referenda were Submitted, Began, and Concluded.


## Future Plans

The TreasuryTracker analytics portal is set to bring a significant change to how OpenGovernance data is tracked, analyzed, and presented. However, the development of a proof of concept (POC) under this grant proposal represents only the first phase in our strategic roadmap for the platform. We have a comprehensive set of short and long-term plans intended to maximize the potential of this project:

### Short-Term Plans

After delivering a working POC, we plan to work on extensive user feedback collection and rigorous testing to further enhance and refine the platform. We aim to make necessary modifications and improvements based on this feedback to ensure the platform aligns with the needs and expectations of the community. Promotion and support will be crucial at this stage, and we intend to conduct extensive outreach to raise awareness about the project and encourage its use among our target audience.

### Long-Term Plans

As for the long-term vision, we plan to further expand the data collected and the analytical capabilities of the platform. This expansion will provide a broader range of data analytics. A particular focus will be put on enhancing the user interface and overall user experience inspired by our existing graphical mockups. The focus will be on presenting platform data in a more modern and user-friendly UI to enhance user interaction and understanding. This redesign process will prioritize clarity, ease-of-use, and intuitive navigation to best serve the platform's diverse audience.

In addition to the live analytics side, we're exploring the idea of producing periodic reports (e.g., quarterly or annually) that provide a comprehensive review of the OpenGovernance referenda on Polkadot and Kusama networks. These reports can serve as invaluable resources for the community, giving in-depth insights into trends and significant happenings in the ecosystem.

Ultimately, our goal is to make TreasuryTracker a go-to platform for all OpenGovernance data analysis and reporting needs. As the platform grows and matures, we'll continue to identify and explore new opportunities to further its reach and impact within the Polkadot and Kusama ecosystems.

### Additional Features

- Project Management Factors: This would encompass the Proposed Timeline, detailed Milestones and Deliverables, Start and End Dates, and an updated Current Status.
- Social Engagement Metrics: This would capture the Number of Comments, Likes, and Shares associated with each proposal, complemented by Sentiment Analysis for deeper insights.
- Evaluation Factors: Here, we would look at the Implementation Success, the punctuality of On-Time Delivery, Deviations from the initial Proposal, and the existence of an Audit Report and External Reviews. Moreover, we'd highlight any Corrective Actions taken post-review.
- Proposer's History and Feedback: Incorporating a history of Previous Proposals by the Proposer, Inter-Proposal Dependencies, and any Feedback Given to the Proposer.
- Team and Geographical Data: Offering deeper insights into Team Information, the Proposer's Country or Region, and potential Secondary Effects of the proposal.
- Risk Management: Highlighting Identified Risks and the Responses or strategies to mitigate said risks.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website and personal recommendation 