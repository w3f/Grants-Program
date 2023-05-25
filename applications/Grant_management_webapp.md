# Grant Management Webapp

- **Team Name:** Antier Solutions Pvt. Ltd.
- **Payment Address:** 1XhNxALoCmXF86aiwZtdDJspjWZBiRX9UfbJ4jQsWN15eSu (DOT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is in response to the open RFP: https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/grant_management_webapp.md

### Overview

The Grant Management Web Application is a comprehensive software solution designed to streamline and enhance the process of managing grants. It aims to provide w3f and other grant-making institutions with a centralized platform to efficiently handle grant applications, evaluation, tracking, reporting, and overall administration. By reducing the number of clicks, the web application will enable better navigation of data, better UI, greater ease and effectiveness in the grant management process.

### Project Details

#### Key Features:

- Organised relevant data.
- Github API integration to carry out relevant actions.

Technical Architecture

![Grant Management Webapp(draft 2)-Technical Architecture](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/e6c62984-9c63-4bfa-809d-c6436d4bf607)

- Mockups/designs of any UI components
![Grant Management Webapp(draft 2)-DB final draft](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/b4c23d65-b52c-475c-a1cb-27533976d9f6)

- This is a place for you to manage expectations and to clarify any limitations that might not be obvious

#### Core Components:

1. Front-End:
- UI
- Back-End API Integrations
2. Back-End:
- Front-End API Integrations
- Github API Integrations
- Database API Integration
- Cron Job
- Data Extractor - Service that extracts data from the MD files for storage
- Web Hook Handler - Service that will listen to events and then handle the respective functionality
3. Database

Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):
- The (future) tokenomics of your project 
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach

### Technology Stack

- Front-end: HTML5, CSS3, JavaScript (React)
- Back-end: Node.js (Express.js)
- Database: MongoDB
- Authentication and Authorization: Github (github apps)
- Cloud Hosting: Github Marketplace

### Ecosystem Fit

The W3F grants program is growing by the day. It is quite a hassle for the grants committee to browse the Grant Program Repositories. This application aims to achieve two things: 1. Consolidate releveant information from the Grant Program Repos; 2. Provide Github Actions functionality to deal with the process of the Grant Program within the app itself.

## Team :busts_in_silhouette:

### Team members

- Kulwinder Singh
- Shaivik Semwal

### Contact

- **Contact Name:** Karan Chopra
- **Contact Email:** karan.chopra@antiersolutions.com

### Legal Structure

- **Registered Address:** E-221, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160059
- **Registered Legal Entity:** Antier Solutions Pvt. Ltd.

### Team's experience

- Antier is a thought-to-finish partner for customers in their blockchain journey. We advise and consult our clients on blockchain technologies and tailor solutions utilising our powerful blockchain ecosystem. We help customers experiment and deploy proof-of-concepts on blockchain technologies and incrementally expand to scale to production releases. Our thought leaders regularly educate customers, partners, CXOs on the power of blockchain for today and tomorrow.
- Workdone by Antier in Substrate ecosystem
1. Antier worked on the validator and nominator apps for substrate based blockchains to offer a unique and better user experience .
2. We have also worked on creating an optimised and homogenised design focused on improving the navigation, information architecture, user flow tasks, content design and graphic elements for a seamless and easy browsing experience.
3. We have customised the default reward mechanism in the staking pallet of the substrate chain by integrating the sustainability and reliability score(which is calculated by ESG scores and Uptime of the validators repectively) of the validators in the current reward system.
4. We were able to run EVM and WASM machines natively in the substrate chain so that the chain will be able to support both EVM(Metamask, Remix, Web3.js, etc) and WASM(WebAssembly target, INK framework, etc) tooling.
5. We were able to replicate the whole polkadot ecosystem(Relay chain, Parachains, XCM), Where parachains are use case specific chains and communicate through XCM protocol with each other.

- Our team has been proactively participating in the Substrate Stack exchange and we ask/answer question related to ink!, Substrate, parachain. We rank in the top 6% people in the Substrate Stack Exchange. 

- Profiles of our team:
1. https://substrate.stackexchange.com/users/2372/arunjot-singh
2. https://substrate.stackexchange.com/users/2281/amit-kumar-yadav
3. https://substrate.stackexchange.com/users/354/shubham-gupta

- Our organisation is the technical partner for 5ire chain: https://5ire.org/

- Our team has worked on multiple IDE which include an EVM compatible IDE for solidity, IDE for WASM contracts for ink! based smart contracts. The EVM IDE is live and the link is : https://ide.5ire.network/

### Team Code Repos

- Kulwinder Singh https://github.com/kulwindersingh-ant
- Shaivik Semwal https://github.com/lawmeskiviahs

### Team LinkedIn Profiles (if available)

- Kulwinder Singh https://www.linkedin.com/in/kulwinder-singh-394384130
- Shaivik Semwal https://www.linkedin.com/in/shaivik-semwal-468a13202


## Development Status :open_book:

A minimal POC has been made wherein the basic github actions were successfully tested.
Things tested in POC:
1. Created issue in a repo
2. Fetch list of issues in a repo.
3. how to use responses.
4. Get PR list to a repo
5. Get PR by number
6. Merge a PR
7. Get comments on a PR
8. Update a comment on PR
9. Add comment on PR

- POC (code)- [ghApi](https://github.com/lawmeskiviahs/ghApi)
- POC (tested on) [helloGhpi](https://github.com/lawmeskiviahs/helloGhapi)
- [Github API Ref](https://docs.google.com/spreadsheets/d/1RWB4XAMFj-tKU4nXEDN0ZUXXmVq1gLpEMqFp_WRPthg/edit?usp=sharing)

Github provides REST API for a lot of github actions. The link to the API docs is [here](https://docs.github.com/en/rest?apiVersion=2022-11-28)

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone. You can refer to details provided in previous sections.) |
| 2. | Substrate module: Y | The Y Substrate module will... |
| 3. | Substrate module: Z | The Z Substrate module will... |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5. | Library: ABC | We will deliver a JS library that will implement the functionality described under "ABC Library" |
| 6. | Smart contracts: ... | We will deliver a set of ink! smart contracts that will...


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

...


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Grants Portal
