# Grant Management Webapp

- **Team Name:** Antier Solutions Pvt. Ltd.
- **Payment Address:** Fiat
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

This application is in response to the open RFP: https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/grant_management_webapp.md

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
- Project Dashboard: ![image_2023_05_25T13_03_13_705Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/57801170-bdf1-4a5f-aead-05b4c2c7402b)

- Project Details: ![image_2023_05_25T13_03_13_706Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/a2518aad-0d3c-4c39-a829-6b8d52f483b4)

- Team Dashbard: ![image_2023_05_25T13_03_13_710Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/db6dc265-b0f2-4d87-909b-9c71803821cb)

- Team Details (applications): ![image_2023_05_25T13_03_13_710Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/aaca6386-9f96-4f09-a93a-c3670662ffa9)

- Team Details (projects): ![image_2023_05_25T13_03_13_709Z](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/a63aa155-5e74-4fb1-adf5-cb395f609308)

- Application Dashboard: ![image_2023_05_25T13_03_13_703Z (1)](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/0dcb6be4-2e24-4a5a-975b-c6f0ace10f51)

The discussions, commit, and file changes pages will be designed same as they are shown on a PR in github. Approvals, reviews and rejections will be handeled in the discussions tab
- Application Details: ![image_2023_05_25T13_03_13_703Z (2)](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/117f4eff-a6a4-4782-905d-f4abc62ecd1e)

- Delivery Dashboard: ![image_2023_05_25T13_03_13_704Z (2)](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/16fd5ba0-a4de-47eb-a23a-624bed68177c)

- Delivery Details: ![image_2023_05_25T13_03_13_704Z (1)](https://github.com/lawmeskiviahs/Grants-Program/assets/60818312/cd96dc63-ed61-4f80-ab8b-16aa87337321)

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

There is no wallet support/oracle for treasury pallet in this application but these can be integrated upon further discussion.

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

- **Total Estimated Duration:** 8 weeks
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 10,000 USD

### Milestone 1  — Teams and Projects 

- **Estimated duration:** 8 weeks
- **FTE:**  3
- **Costs:** 10000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can browse through the application and perform github actions |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Frontend | We will provide dashboard and details pages for Projects and Teams with all details |
| 2. | Backend | Database integrations and data extractor will be implemented. i.e data from the md files on github will be processed and saved to the database using API |
| 3. | Backend | Github API integrations and web hooks will be implemented so that our application can listen to events and make necessary changes in the db |
| 4. | Data Base | DB schema implementation |


## Future Plans

We plan to deliver the following after receiving the Grants Committee's approval :

Oracle for treasury pallet integration is being researched meanwhile and also looking for decentrallised alternative for github. Upon further discussions with the grants committee we shall go ahead with this

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Grants Portal