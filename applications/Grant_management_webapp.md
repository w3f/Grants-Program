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

![Grant Management Webapp(draft 2)-Technical Architecture (1)](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/e24b6156-b755-40ae-bc09-624c75e860fc)

- Mockups/designs of any UI components

### Core Components:

#### Front-End:
1. UI:
- Project Dashboard: ![image_2023_05_25T11_55_21_620Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/e3d77c8d-cb18-4391-9ad0-54b4cb049f54)
- Project Details: ![image_2023_05_25T11_55_21_622Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/7a03cc76-3d06-450e-948c-73ab3455d2ac)
- Team Dashbard: ![image_2023_05_25T11_55_21_634Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/091507b1-7f0f-45cd-a40f-76f29c3c7141)
- Team Details (applications): ![image_2023_05_25T11_55_21_610Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/5d6feb69-a729-4253-8650-30bd70fda1c8)
- Team Details (projects): ![image_2023_05_25T11_55_21_608Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/bbd1213a-6baf-49bd-ba1a-2400aed6f807)
- Application Dashboard: ![image_2023_05_25T11_55_21_612Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/ed4c43c1-559e-49cb-a3a9-7b3c15584529)
- Application Details: ![image_2023_05_25T11_55_21_614Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/62e11368-8198-4d69-849e-5ed47cba2e22)
- Delivery Dashboard: ![image_2023_05_25T11_55_21_616Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/b4ad8609-87da-415e-9650-cb057f9e65fb)
- Delivery Details: ![image_2023_05_25T11_55_21_618Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/159e0989-d88f-4ca3-af01-d7dc34cc23fe)
2. Back-End API Integrations

#### Back-End:
1. Front-End API Integrations
2. Github API Integrations
3. Database API Integration
4. Cron Job
5. Data Extractor - Service that extracts data from the MD files for storage
6. Web Hook Handler - Service that will listen to events and then handle the respective functionality

#### Database
![Grant Management Webapp(draft 2)-DB final draft (1)](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/f133eaba-caca-4ceb-add4-8268d08226a7)

### Things not included in the project:
There is no payment gateway or wallet support in this application but these can be integrated upon further discussion.

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

- Kulwinder Singh (Backend)
- Shaivik Semwal (Frontend)
- Aanchal Kathuria (Tester)

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
- [Github API Ref Sheet](https://docs.google.com/spreadsheets/d/1RWB4XAMFj-tKU4nXEDN0ZUXXmVq1gLpEMqFp_WRPthg/edit?usp=sharing)

Github provides REST API for a lot of github actions. The link to the API docs is [here](https://docs.github.com/en/rest?apiVersion=2022-11-28)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 12 weeks
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 18,000 USD

### Milestone 1  — Teams and Projects 

- **Estimated duration:** 6 weeks
- **FTE:**  3
- **Costs:** 9000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can browse through the application and perform github actions |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Frontend | We will provide dashboard and details pages for Projects and Teams with all details |
| 2. | Backend | Database integrations and data extractor will be implemented. i.e data from the md files on github will be processed and saved to the database using API |
| 3. | Data Base | DB schema implementation |

### Milestone 2 Example — Applications and Deliveries

- **Estimated duration:** 6 weeks
- **FTE:**  3
- **Costs:** 9000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can navigate through the data and perform github actions |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | Frontend | We will provide dashboard and details page for the remaining tabs i.e Applications and Deliveries |
| 2. | Backend | Github API integrations and web hooks will be implemented so that our application can listen to events and make necessary changes in the db |

## Future Plans
 We may add payment gateways and wallet support so that payments can be handled using the application itself and make it truly the complete package to carry put the Grants Program more efficiently and effectively.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Grants Portal
