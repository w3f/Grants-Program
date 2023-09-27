# GrantMaster: Web3 Grants Management Application

- **Team Name:** Zaniyar Jahany
- **Payment Address:** 0xFCFDB7351Da159B8f53217be2a671dDa943735fc (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

This application is in response to the RFP [Grant Management Web Application](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/grant_management_webapp.md).

### Overview

This project aims to create a comprehensive web application for managing grant applications (and deliveries in a possible follow-up grant) for the W3F Grants Program, based on data in the GitHub repositories. I will provide an interactive and user-friendly interface for easier navigation for the W3F grant committee. This includes a crawler for easy extraction and calculation of relevant data, a REST API for accessing said data as well as a web-based frontend with a modern look & feel.

As a passionate developer in the field of blockchain and decentralized projects, I recognize the value that transparency and organization bring to grant management. I'm excited to create a tool that enhances the process for the Web3 Foundation.

### Project Details

The following components will be included in the GrantMaster:

- Crawler: I will provide an efficient crawler that is resilient to failure and fetches the data from GitHub that is neccessary for the scope of this project.
- API: I will provide a comprehensive and efficient API.
- UI/UX components: Detailed designs can be found [here](#wireframes) for Grants Page, Grant Details, Teams, and Stats.
- Tech Stack: The web app will use a React (TypeScript) frontend that comes in [ant design](https://ant.design/docs/react/introduce), Node.js (TypeScript) crawler, Node.js (TypeScript) REST API and a MongoDB database. I'll use Mongoose to enforce the [db schema](#db-schema). For GitHub interaction, I'll use GitHub's REST API.

#### DB Schema

The database schema is organized into several TypeScript interfaces representing the essential entities involved in the GrantMaster application. These interfaces are a rough draft of the structure of data I'll be working with and how that data will be represented in the mongodb database.

Please note that these interfaces are subject to change and refinement as the project progresses and more specific needs or requirements are identified. However, it is important to emphasize that such changes are expected to be additive in nature. This means that while additional attributes might be included to these interfaces as needed for the completeness and accuracy of the data representation, no existing attributes are anticipated to be removed. So, you can consider these as the minimum set of data that will be stored and managed in the system.

```TypeScript
interface Grant {
  name: string;
  level: number;
  paymentAddress: string;
  githubPRs: string[];
  applicationLink: string;
  applicationDoc: string;
  status: string;
  lastUpdated: Date;
  committeeApprovals: string[];
  committeeRejections: string[];
  milestones: Milestone[];
  totalCosts: number;
  totalFTE: number;
  totalDuration: number;
}

interface Milestone {
  name: string;
  grantName: string;
  duration: number;
  FTE: number;
  costs: number;
  deliverables: Deliverable[];
  codeRepos: string[];
  license: string;
  githubPrs: string[];
  deliveryLink: string; // Scope: follow-up grant
  deliveryDoc: string; // Scope: follow-up grant
  evaluations: Evaluation[];
}

interface Deliverable {
  name: string;
  number: string;
  description: string;
  specification: string;
}

interface Team {
  name: string;
  teamMembers: TeamMember[];
  grants: Grant[];
  contactName: string;
  contactEmail: string;
  website?: string;
  registeredAddress?: string;
  registeredLegalEntity?: string;
  codeRepos: string[];
}

interface TeamMember {
  name: string;
  linkedin?: string;
  github?: string;
}

// Scope: follow-up grant
interface Evaluation {
  author: string;
  link: string;
  doc: string;
}
```

For the actual implementation of the database the [Mongoose npm package](https://www.npmjs.com/package/mongoose) will be used.

#### Data Synchronization Approach
The data synchronization is designed to seamlessly update the applications (and deliveries, as part of a possible follow-up grant), making sure we're always working with the most current information. This process will be executed using a combination of a configurable crawler and GitHub Actions.

**GitHub Actions**

I will deliver a set of GitHub actions that triggers the crawler whenever new comments, pull requests, or PR reviews are added.

**Configurable Crawler**

To support and complement the push-based system facilitated by GitHub Actions, I will also employ a configurable crawler. The crawler will be responsible for selectively updating specific applications (or deliveries, as part of a possible follow-up grant). Furthermore, the crawler will parse the data from GitHub Actions for incremental updates. This ensures a scalable system that doesn't need to process entire datasets for minor updates, enhancing the efficiency of our data synchronization strategy.

### Ecosystem Fit

The project fits into the ecosystem by enhancing the grant management process for the Web3 Foundation, thus contributing to the growth and development of the Dotsama ecosystem. The target audience is the Web3 Foundation grant committee and other similar grant programs. The project meets the need for efficient grant management and transparency.

As per my knowledge, no similar projects exist within the Dotsama ecosystem.

## Team :busts_in_silhouette:

### Team members

- Zaniyar Jahany

### Contact

- **Contact Name:** Zaniyar Jahany
- **Contact Email:** jaha@zhaw.ch
- **Website:** https://www.MetaRoom.City

### Legal Structure

- **Registered Address:** No registred entity
- **Registered Legal Entity:** No registred entity

### Team's experience

Zaniyar Jahany is a Senior science associate at ZHAW (university of applied science in Zürich) in the field of Augmented Reality and Blockchain at the Industry 4.0 Lab. Beside his research at the university he is one of the co-founders of https://swissDAO.space, the biggest Web3.0 builder community in Switzerland and the founder of https://MetaRoom.city, a swiss-made decentral, self-owned, self-hosted Metaverse for everyone which builds on top of todays web2.0 ecosystem, and enables web3.0 functionallity.

### Team Code Repos

- https://github.com/Zaniyar/plant2earn/

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/zaniyar-jahany-a5224387/


## Development Status :open_book:

This application is in reply to the RFP [Grant Management Web Application](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/grant_management_webapp.md).


### Wireframes

Here are some rough Lo Fi wireframes:

![Crawler](https://github.com/Zaniyar/plant2earn/assets/4472438/0dc2a196-777e-418f-838c-d8664be3596d)
![Deliveries](https://github.com/Zaniyar/plant2earn/assets/4472438/ba8d6de7-8351-4a37-b266-569e2cf55565)
![Grants](https://github.com/Zaniyar/plant2earn/assets/4472438/9a697d9b-74c0-4593-a769-e1991d87a737)
![Stats](https://github.com/Zaniyar/plant2earn/assets/4472438/1075c353-2610-41f4-8839-f06e4d8f583c)
![Teams](https://github.com/Zaniyar/plant2earn/assets/4472438/ec9e1117-7a40-4521-9c4f-eb5ce71a692a)


To get a feeling how the page will look like, I prepared this Hi Fi wireframe. Keep in mind that some details are missing, due to limitations in the wireframing framework:

![image](https://github.com/Zaniyar/plant2earn/assets/4472438/f9082c64-bf5d-4e7b-8050-b52d03aeb151)


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  0.6 FTE
- **Total Costs:** 10,000 USD

### Milestone 1 — Development of API and Grant Frontend

- **Estimated Duration:** 2 months
- **FTE:**  0.6
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the application and its various features. |
| **0c.** | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. I will provide a guide describing how to run these tests. |
| **0d.** | Docker | I will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | I will publish an **article** that explains the development process, the challenges faced and how I overcame them, and the functionalities of the GrantMaster application. |
| 1. | Crawler & REST API | I will develop a configurable crawler and a REST API that facilitates interaction with the [Grants-Program GitHub repository](https://github.com/w3f/Grants-Program). The crawler will update specific applications or deliveries on demand through the web UI (see [Data Synchronization Approach](#data-synchronization-approach) chapter). |
| 2. | GitHub Actions | GitHub Actions will be used to trigger updates in the application whenever new comments, pull requests, or PR reviews are added on GitHub (see [Data Synchronization Approach](#data-synchronization-approach) chapter). |
| 3. | Frontend Module: Grants Page | I will develop a Grants Page that will display all the grants in a tabular format. Grants will be searchable by team name, application name as well as full text search. They will be filterable and sortable by pull request status, github label, last updated timestamp, number of approvals & rejections of committee members and all this data will also be displayed in the table. The table will be customizable and attributes will be hidable by the user. It will include all grants - both active and inactive. |
| 4. | Frontend Module: Grant Details | I will create a Grant Details module that displays detailed information about a specific grant when clicked on in the Grants Page. This will include any parsable data, such as team name, level, payment address, team members, legal entity, milestones and their related info (duration, FTE, costs), etc. in a structural manner. In case an application is not fully parsable, the affected attributes will hold an indication. Finally, the application document will be displayed and the links for any related PRs will be displayed. |
| 5. | Frontend Module: Teams | This module will present all teams involved in the grants in a concise and searchable manner. |
| 6. | Frontend Feature: Grants Committee Lense | This feature will allow a user experience that is optimised to a specific grants committee member. The committee member will be able to provide his username (using simple textbox without authentication) and they'll be able to see in which pull requests for grants applications and amendments they've participated and how long it's been since they last commented on it. I think this will be useful for priorizing grant application reviews. |

## Future Plans

I'm planning to implement the following milestone as part of a possible follow-up grant.

#### Additional Milestone — Development of API and Grant Frontend

- **Estimated Duration:** 2 months
- **FTE:**  0.6
- **Costs:** 11,600 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the application and its various features. |
| **0c.** | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. I will provide a guide describing how to run these tests. |
| **0d.** | Docker | I will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | I will publish an **article** that explains the development process, the challenges faced and how I overcame them, and the functionalities of the GrantMaster application. |
| 1. | Crawler & REST API | I will extend the previously developed configurable (see [Data Synchronization Approach](#data-synchronization-approach) chapter) crawler and REST API to facilitate interaction with the [Grant-Milestone-Delivery GitHub repository](https://github.com/w3f/Grant-Milestone-Delivery/). |
| 2. | GitHub Actions Integration | I will integrate GitHub Actions to trigger updates in the application for new comments, pull requests, or PR reviews in the Grant-Milestone-Delivery repository (see [Data Synchronization Approach](#data-synchronization-approach) chapter). |
| 3. | Frontend Module: Deliveries Page | I will develop a Grant Deliveries Page that will display all the deliveries in a tabular format. They will be searchable by team name, application name as well as full text search. They will be filterable and sortable by pull request status, github label, last updated timestamp. It will include all deliveries - both active and inactive. Also, the deliveries will be included in the team and grant pages that were delivered in M1. |
| 4. | Frontend Module: Stats | A Stats module will be developed to provide statistics about the grant applications and deliveries. |


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation