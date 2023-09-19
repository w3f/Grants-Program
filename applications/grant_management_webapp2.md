# Grant Management Webapp
- **Team Name:** Antier Solutions Pvt. Ltd.
- **Payment Address:** Fiat
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
## Project Overview :page_facing_up:
This application is a follow-up for [Grant Management Webapp](https://github.com/lawmeskiviahs/Grants-Program/blob/master/applications/Grant_management_webapp.md).
### Overview
The Grant Management Web Application is a comprehensive software solution designed to streamline and enhance the process of managing grants. It aims to provide w3f and other grant-making institutions with a centralized platform to efficiently handle grant applications, evaluation, tracking, reporting, and overall administration. By reducing the number of clicks, the web application will enable better navigation of data, better UI, greater ease and effectiveness in the grant management process.
### Project Details
#### Key Features:
- Organised relevant real-time data.
- Github API integration to carry out relevant actions.
Technical Architecture
![technical_architecture](https://github.com/w3f/Grants-Program/assets/60818312/8dff934c-1bb6-414a-b58e-1dd70b03afd9)
- A private chatbox for the committee to have discussions will be implemented for every application and delivery. This chatbox will be in the detail page of all the applications and deliveries.
### Core Components:
#### Front-End:
1. UI:
- Application/Delivery listing pages:![application_delivery_listing](https://github.com/w3f/Grants-Program/assets/60818312/3bb1a873-d6c7-4dfd-9ef6-3e722c704fda)
- Application Details Page:![application_detail_page](https://github.com/w3f/Grants-Program/assets/60818312/958afd2f-c6f2-4a73-ac8b-10ed08b90cfb)
- Deliveries Details Page:![deliveries_detail_page](https://github.com/w3f/Grants-Program/assets/60818312/76e78774-3a98-45cf-9708-7d0c47e882b5)
2. Back-End API Integrations
#### Back-End:
1. Front-End API Integrations
2. Github API Integrations
3. Database API Integration
4. Web Hook Handler - Service that will listen to events and then handle the respective functionality
#### Database
![db_schema](https://github.com/w3f/Grants-Program/assets/60818312/80a9a16c-790f-4974-8e75-b480255261f3)
### Technology Stack
- Front-end: HTML5, CSS3, JavaScript (React)
- Back-end: Node.js (Express.js)
- Database: MongoDB
- Authentication and Authorization: Github (github oAuth)
### Ecosystem Fit
The W3F grants program is growing by the day. It is quite a hassle for the grants committee to browse the Grant Program Repositories. This application aims to achieve two things: 
1. Consolidate releveant information from the Grant Program Repos
2. Provide Github Actions functionality to deal with the process of the Grant Program within the app itself.
## Team :busts_in_silhouette:
### Team members
- Rahul Saharan (Team Lead)
- Jatin Sehgal (Frontend)
- Shweta Saini (Backend)
- Shaurya Awasthi (Tester)
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
### Team Code Repos
- [Rahul Saharan](https://github.com/rahulsaharan10)
- [Jatin Sehgal](https://github.com/JatinAntier)
- [Shweta Saini](https://github.com/shweta432)
- [Shaurya Awasthi](https://github.com/shauryaawasthi)
- [Amit Kumar Yadav](https://github.com/Amit191kumar)
### Team LinkedIn Profiles
- [Rahul Saharan](https://in.linkedin.com/in/rahul-saharan-80035b186)
- [Jatin Sehgal](https://www.linkedin.com/in/jatin-sehgal-694b1776/)
- [Shweta Saini](https://www.linkedin.com/in/shweta-s-14b613212)
- [Shaurya Awasthi](https://www.linkedin.com/in/shaurya-awasthi/)
## Development Status :open_book:
- The development has been continued on the same repository as the [previous one](https://github.com/antiers-solutions/gmw-backend/). 
## Development Roadmap :nut_and_bolt:
### Overview
- **Total Estimated Duration:** 8 weeks
- **Full-Time Equivalent (FTE):**  4 FTE
- **Total Costs:** 22000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can browse through the application and perform github actions |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Frontend | We will provide dashboard and details pages for Applications and Deliveries with all details |
| 2. | Backend | Github API integrations and web hooks will be implemented so that our application can listen to events and make necessary changes in the db|
| 3. | Data Base | DB schema implementation |

## Future Plans

Oracle for treasury pallet integration is being researched meanwhile and also looking for decentrallised alternative for github. Upon further discussions with the grants committee we shall go ahead with this.

## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** Grants Portal