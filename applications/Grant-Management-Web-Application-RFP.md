# Grant Management Web Application

- **Team Name:** Tolga Yaycı
- **Payment Address:**  [0xa632439DE1592936fbA3368053eaafd491443493](https://etherscan.io/address/0xa632439DE1592936fbA3368053eaafd491443493) (USDC, Ethereum (ERC20))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:

This is a response for the [Grant Management Web Application](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/grant_management_webapp.md) RFP.

### Overview

The grant management app is a powerful platform that integrates with GitHub to fetch relevant data. Built using FastAPI, it offers a range of features such as application and grant management, statistics tracking, and more. Users can efficiently manage and track grant applications, oversee awarded grants, and monitor progress. The app provides valuable insights through statistical analysis, allowing stakeholders to make data-driven decisions. With its seamless integration of GitHub data, the app streamlines the grant management process, enhances collaboration, and ensures effective grant allocation and monitoring.

### Project Details

- Mockups/designs of any UI components

  Currently, there are no mockups or designs available, but I will be utilizing Tailwind CSS and Next.js to design the user interface (UI). While being aware of various protocol grant systems, I will create a unique UI that differentiates itself from this RFP document. The primary focus will be on simplicity, ensuring that users can access all the necessary information within 2-3 clicks. Although detailed designs are not yet available, I will strive to develop an intuitive and user-friendly interface that provides a seamless experience for users.

- Example API specifications & **API Playground**

![FastAPI](https://github.com/tolgayayci/Grants-Program/assets/40897846/532cfcf8-c522-49a4-bb48-3987afd70476)

- An overview of the technology stack to be used

  - Fast API **(OAS3)**
  - GitHub Rest API
  - Mongo DB
  - Next.js
  - Tailwind CSS

- Documentation of core components, protocols, architecture, etc. to be deployed
  - Core **API Playground**
  - General Guides & Documentation
  - Test Coverage Reports

- PoC/MVP or other relevant prior work or research on the topic
  - As a grantee of many protocols I am aware of the many grant systems and while designing I will put my experiences in the project.
  
- What your project is _not_ or will _not_ provide or implement
  - Oracles and pallets doesn't included as stated in RFP document.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  - W3F has a great grant management system but there is no web application for this system. This project suits this need as stated in RFP.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - W3F, Polkadot, Kusama, Substrate developers and grant applicants.
  - Platforms who will use this system for their own grant management system.
- What need(s) does your project meet?
  - API Specification & Playground
  - Easy to use UI
  - Fast Setup for any platform
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
    - There is no similar project in the ecosystem but there are applications for this RFP. I think my project is cost effective and has detailed structure as stated in milestones with similar features. You can have a look for my UI perspective to Awesome Polka, I will design the UX of this projects as better as I can.

## Team :busts_in_silhouette:

### Team members

- Tolga Yaycı

### Contact

- **Contact Name:** Tolga Yaycı
- **Contact Email:** [tolgayayci@protonmail.com](mailto:tolgayayci@protonmail.com)
- **Website:** [LinkedIn](https://www.linkedin.com/in/tolgayayci/)

### Legal Structure

- **Registered Address:** -
- **Registered Legal Entity:** -

### Team's experience

As a full-stack developer with 2 years of experience, I have honed my skills in software development, with a focus on dApp development in the past year. I have a deep interest in the Web3 and NFT space and have put my skills to the test by creating a number of relevant applications. In addition to my experience, I have developed detailed React and Next.js projects, further enhancing my ability to build robust and scalable web applications.

In addition to my technical skills, I have also been actively involved in the wider tech community. I have served as a Chainlink Community Advocate, Aave Turkey Community Manager, and Founding Chair of Gazi University ACM Student Chapter. My previous role as a Microsoft Learn Student Ambassador has also given me the opportunity to share my knowledge and experience with others. I have set of experiences and skills and particularly in the areas of full stack software development and community management.

Also I developed Awesome Polka for W3F and now working on user base and marketing.

### Team Code Repos

- https://github.com/tolgayayci

### Team LinkedIn Profiles

- https://www.linkedin.com/in/tolgayayci

## Development Status :open_book:

I have commenced working on the project, focusing on the development of the core API and the modification of endpoints. I will carefully determine the endpoints and structure the schema based on the requirements outlined in this proposal. Once completed, I will conduct thorough testing to ensure the reliability and functionality of the API. Additionally, I will create detailed documentation for the endpoints, giving priority to those with extensive coverage.

Upon concluding the API development phase, I will publish the playground and integrate the API into the frontend of the project. At this stage, I will refrain from providing excessive details, as I have already included comprehensive explanations in the milestones section.

## Development Roadmap :nut_and_bolt:

This RFP is planned as 2 milestones, it will be completed in two months.

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 10,000 USD

### Milestone 1 - Backend Development

- **Estimated duration:** ~1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up Rest API, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | I will publish an article that explains the backend system structure and how that works. |
| 1. | Core API Development | **Architecture Design:** I will carefully design the overall structure and architecture of the API, considering factors such as scalability, security, performance, and ease of maintenance. I will identify the appropriate technologies, frameworks, and patterns to use, ensuring the API meets industry best practices and aligns with the organization's development standards. <br><br> **Endpoint Development:** I will implement the API endpoints based on the defined functionality and business logic. Each endpoint will be carefully crafted to handle requests, process data, and generate appropriate responses. I will consider factors such as input validation, error handling, and authentication/authorization mechanisms to ensure the API is secure and reliable. |
| 2. | API Documentation & Playground | The documentation serves as a detailed reference guide, offering clear instructions on how to integrate with core API, including information about endpoints, request/response formats, authentication methods, error handling, and any additional parameters or options available. It aims to provide developers with a complete understanding of how to effectively utilize core API within their applications. <br/><br/> In addition to the documentation, I provide a playground environment that allows developers to experiment and interact with the API in a sandboxed environment. The playground offers an intuitive interface where developers can make test requests, preview responses, and observe the behavior of different API endpoints and parameters. It serves as a valuable tool for developers to quickly validate their integration and explore the capabilities of core API before implementing it. |
| 3. | Database Integration | I will design and implement the necessary data models and database structures to store and retrieve the relevant information required by the API. |
| 4. | PolkaFlow Stats API Integration | This API provides comprehensive and detailed insights into development activities on GitHub. To offer a concise overview while evaluating deliveries, I have integrated this API and curated simplified development statistics. |

### Milestone 2 - Frontend Development

- **Estimated Duration:** ~1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up Rest API, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Applications Page | This page is a central hub within the grant management web application that displays all the submitted grant applications. It provides a comprehensive view of all applications received by the organization or agency. On this page, users can review, track, and manage the status of each application throughout the grant lifecycle. It typically includes relevant details such as applicant information, proposal summaries, submission dates, and current progress. Users may also have the ability to sort, filter, and search for specific applications based on various criteria.  |
| 2. | Grants Page |  It serves as a centralized platform for managing and tracking the grants that have been successfully awarded to applicants. On this page, users can view details about each approved grant, including the recipient organization or individual, the awarded amount, project descriptions, and any specific terms or conditions associated with the grant. The Grants page provides administrators and grant managers with an overview of the funded projects and enables them to monitor the progress, compliance, and reporting requirements for each grant.  |
| 3. | Teams Page| Teams and their submissions, applications and accepted proposals can be viewed quickly on this page. |
| 4. | Deliveries Page| It serves as a central hub for monitoring and recording the progress and completion of deliverables specified in grant agreements. On this page, users can view the status of each delivery, including important details such as delivery dates, recipients, associated documents, and any required documentation or verification. The Deliveries page helps ensure accountability and transparency by providing a comprehensive overview of the progress and successful fulfillment of grant-related obligations. |
| 5. | Stats Page| The Stats page in a grant management web application provides users with concise statistical data and visualizations related to grants, enabling them to assess key metrics and make informed decisions. |
| 6. | Delivery Stats Page (PolkaFlow API)| It offers key metrics and visualizations that depict the performance and progress of grant-funded deliveries in technical manner. An user can observe github development stats basically in delivery page with this API thanks to PolkaFlow. I took necessary permissions to use that API from its developer. |

## Future Plans

Needs to be discussed with the Web3 Foundation can be added to the project, W3F team and other platforms who benefits this workflow can easily use this application for their grant management workflow.

## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** -
- **Payment Address:** -

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** I am a grantee of the Web3 Foundation Grants Program
