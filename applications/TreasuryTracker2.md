# Treasury Tracker
- **Team Name:** Stake Plus Inc
- **Payment Address:** 0x06737F4137E244DBc46c6044E5051A66074F3f87
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Problem Statement
The community is engaging with collectives but lacks a solid budgeting system. There's also low participation in parachain governance, which increases the risk of council or treasury mishandlings. Combined with general misunderstandings and unclear details about ecosystem operations, it becomes challenging to allocate resources effectively or maintain financial transparency.

### Overview
TreasuryTracker offers analytics into the OpenGovernance referenda on Polkadot, Kusama, and any Polkadot SDK parachain or relaychain. Through charts, tables, and reports, users can access data on treasury funding and governance. The platform also monitors pallets, council memberships, and participation rates, allowing for early identification of potential vulnerabilities in chains.

We developed this project to give the community tools that facilitate active governance engagement, efficient treasury fund allocation, and greater ecosystem transparency.

### Project Details
- Website: https://treasurytracker.io/
- Github: https://github.com/stake-plus/treasury-tracker
- L1 Grant Request: https://github.com/w3f/Grants-Program/pull/1900
- L1 Grant Evaluation: https://github.com/w3f/Grant-Milestone-Delivery/pull/1026

#### Application Architecture
TreasuryTracker is developed using a blend of NodeJS, CakePHP, and MySQL/MariaDB, forming a platform that's scalable, responsive, and capable of processing intricate data sets for detailed analytics.

#### Features
- **Data Visualization**: Using a suite of tools like charts, tables, and interactive reports, complex data is made accessible and easily digestible for users.
- **Comprehensive Analytics**: Tools provide insights into OpenGovernance referenda across multiple chains, helping users understand treasury fund allocations and governance structures.
- **Chain Status**: Allows users to access real-time statuses of chains, with details on pallets, council memberships, and participation metrics, giving insights into the health and activity levels of various chains.

#### Development Roadmap
We're profoundly thankful to the Web3 Foundation for their support through the initial Level 1 grant. This grant was instrumental in shaping the TreasuryTracker and solidifying its Proof of Concept. With the foundational elements now established, our path forward is clear: transition from a Proof of Concept to a fully-realized, market-ready product. To achieve this, we're directing our focus on refining its capabilities, enhancing the user experience, and expanding its analytical reach to cover more chains and deliver even deeper insights.

### Ecosystem Fit
TreasuryTracker operates within the non-core infrastructure segment of the Polkadot and Kusama ecosystem, specifically targeting OpenGovernance referendums. Our platform's core function revolves around referenda that seek funds from the treasury. We emphasize automated data collection, in-depth analytics, and a sustained oversight mechanism for all treasury activities.

Our platform primarily serves:
- Token holders keen on understanding the long-term viability and ROI of treasury-funded initiatives.
- Active OpenGov participants desiring a concise overview of project types and associated funding allocations.
- Newcomers to the ecosystem looking for insights on past projects, their funding dynamics, and voting outcomes.

What sets TreasuryTracker apart is its commitment to filling gaps that other platforms have overlooked:
- We're one of the few, if not the only, platform focusing on detailed governance metrics, like tracking the number of councilors and identifying potential security vectors, filling a crucial informational void in the ecosystem.
- Bypassing the norm of charging each parachain separately for support, our approach leans on general-purpose coding. This means TreasuryTracker is adept at integrating with any relay or parachain operating on the polkadot-sdk, all through a simple configuration entry, presenting a scalable and cost-effective solution.

Comparatively, while platforms like doTreasury offer treasury statistics, they fall short in providing the broader analytical spectrum that we bring to the table. Similarly, platforms like the Grant Management Web Application RFP, though significant in their own right, are more W3F grants UI-centric and don't encompass the detailed analytics and insights we aim to deliver.

### Why Web3 Foundation Grant?
Our engagement with OpenGOV has made it clear: the community leans towards supporting complete, market-ready projects over early-stage concepts.

Given this, we're seeking the Level 2 grant from the Web3 Foundation. This grant will allow us to refine our project, ensuring it meets community standards. Once we've achieved this, we'll approach OpenGOV with a polished product, increasing our chances of gaining support for further development.

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

IBP Reference: https://github.com/orgs/ibp-network/repositories
Bluespottedfrog (Thomas T.), was responsible for design elements in the main website, wiki and monitor.

### Team LinkedIn Profiles (if available)

We no longer use LinkedIn but can provide CV privately if required.

## Development Status :open_book:

Following the successful completion of our Level 1 grant, we've made significant strides in setting up the base structure for TreasuryTracker. The accomplishments from the Level 1 grant phase include:

- **UI Development**: A prototype of the user interface was created based on carefully designed mockups, ensuring alignment with project goals.
  
- **On-Chain Data Integration**: We developed and tested functionalities to read on-chain data, paving the way for real-time tracking of referenda and treasury data.

- **Community Engagement**: Through in-depth research and community outreach, we gauged the needs of the ecosystem, identified existing solution gaps, and anticipated implementation challenges.

Building upon these foundational achievements, our ongoing collaborations with ecosystem partners like Polkassembly, Subsquare, and Ordum are yielding innovative approaches to proposal categorization. Together, we're designing a uniform categorization system that will standardize proposal classifications across platforms.

With the objective of this second grant, we aim to:

- **Expand Functionality**: We're gearing up to encompass Governance 1.0 referenda and motions into our analytical offerings.
  
- **UI & UX Enhancements**: With a focus on refining user experience, we're revamping the UI and optimizing chart elements. By generalizing charting logic, we're setting the stage for a more dynamic and responsive analytics interface.

- **Enhanced Security Logic**: A key component of our evolution will be integrating logic to assess the security posture of different parachains, providing users with crucial insights into potential vulnerabilities.

Our trajectory, shaped by the insights and progress from the Level 1 grant and guided by the aspirations for this grant, positions TreasuryTracker as a frontrunner in delivering unparalleled analytical capabilities in the Polkadot and Kusama ecosystems.

## Milestones

### Milestone 1 - Adding Governance 1.0 Support

- **Total Estimated Duration:** 2 month
- **Full-Time Equivalent (FTE):**  1.0
- **Total Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the application and its various features. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Governance 1.0 Implementation | Deliverables for the Governance 1.0 implementation in TreasuryTracker will encompass seamless integration of referenda and motions data, resulting in enriched analytics, comprehensive dashboards, and real-time tracking for users. |

#### Milestone 1 Feature Deliverables
- Implementation of Gov1 referenda and motions imported, categorized, and browseable as both refs and with analytics.
- Improved chains page showing other analytics:
  - Councilor Count: Display the current number of councilors for enhanced governance transparency.
  - Average Governance Participation: Show the average monetary participation ($ amount) in governance activities, providing insights into community engagement levels.
  - Collator Set Size: Reflect the size of the collator set, offering a snapshot of network security and decentralization.
  - Additional Information: Incorporate other relevant data points to offer users a comprehensive overview of each chain's status and activities.
- New network page highlighting key information about a particular network
  - Chain state information (# of councilors, # of collators, which pallets are active, etc)
  - A list of on-going and historical proposals
  - A general treasury overview for the network represented by categorized pie chart of spending and general treasury and democracy information

### Milestone 2 - UI Improvements 

- **Total Estimated Duration:** 4 month
- **Full-Time Equivalent (FTE):**  1.0
- **Total Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the application and its various features. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | UI Improvements | The UI Improvements deliverable will introduce a more intuitive design, streamlining user interactions and enhancing data visualization for a refined user experience on TreasuryTracker. |

#### Milestone 2 Feature Deliverables
- Improved Overview Page
  - Section showing supported chain information
  - Section showing news and information
  - Section showing new proposals
  - Section highlighting current social media
- Improved Analytics Page
  - Revamped responsive UI
  - A single control panel that allows users to select which features they want to dynamically generate charts
- Improved Referenda and Referendum pages
  - Various design element improvements giving the site a more production like feel
- Responsive framework so UI is viewable and accessible across multiple platforms (mobile, tablet, laptop, desktop)

## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** Web3 Foundation Website and personal recommendation 
