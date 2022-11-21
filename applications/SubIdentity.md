# SubIdentity

- **Team Name:** [TDSoftware](https://www.tdsoftware.de/)
- **Payment Address:** 0x8Db0972d9F40357526B879A002d60CCf6B4a8882
- **Level:** 2

## Project Overview :page_facing_up:

This application is in response to the [RFP: Substrate Identity Directory](https://github.com/w3f/Grants-Program/blob/master/rfps/identity-directory.md).

### Overview

SubIdentity is a fully client-side web application build with Vue.js in Typescript. The application enables searching of on-chain identities by any identity field in a substrate-based chain that implements the identity pallet. Search results are displayed in a list view. By choosing an identity from the list or providing the address of the on-chain account in a link, it is possible to right away see a human readable representation of the identity. A direct interaction with this account, such as sending tokens, is possible.

### Project Details

The project begins with a design and concept phase, which ensures that the greatest possible benefit is achieved with the application. SubIdentity will be component based, flexible and easily extendable. The responsive design ensures high accessibility on different devices such as mobile phones or desktop computers. The focus is on performance and usability to ensure the best possible user experience. The applications theme (color and branding) can be customized easily by configuring parameters. The final project phase includes manual and automated quality assurance (QA) with Selenium and the creation of unit tests.

#### Search View

The search view includes an input mask for the search term, the option to select a chain and to connect your own endpoint. After searching for the entered term, the list view is displayed.
![](https://tdsoftware-dev.de/subidentity/home.png)

#### List View

The list view displays all identities that the search parameter entered in the search mask matches any of their identity fields. Clicking on an identity in the list view takes the user to the detailed identity view.

![](https://tdsoftware-dev.de/subidentity/search-results.png)

#### Identity View

The detailed identity view contains available data of an on-chain identity in a beautiful card design that is adjustable. Cards can be closed and reordered as desired by the user. If provided, an avatar is displayed next to all metadata available in the identity entry. Tokens can be send from the detailed view directly to the on-chain account.
![](https://tdsoftware-dev.de/subidentity/profile-details.png)

#### Technology Stack 
- polkadot{.js}
- Vue.js with Vuex and the Vue Router
- TypeScript
- webpack
- Babel - for backwards compatibility in older Browsers
- Jest - for unit tests
- ESLint
- SASS (SCSS)

### Ecosystem Fit

This project is meant to provide an Identity Directory for all substrate-based chains, that implement the Identity pallet. 

Similar Project
  - https://github.com/Shard-Labs/identity-hub/tree/main/src

What makes us different
  - easily extendible solution as it is component based
  - focus on high performance and usability
  - fully responsive UI
  - manual and with Selenium automated QA during development

## Team :busts_in_silhouette:

### Team members

- Sascha Dobschal
- Anika Oertel
- Markus Fitzner
- Toni Frotscher
- Sosan Neikbeen

### Contact

- **Contact Name:** Sascha Dobschal
- **Contact Email:** s.dobschal@tdsoftware.de

### Legal Structure

- **Registered Address:** Schlossgasse 20, 07743 Jena, Germany
- **Registered Legal Entity:** TDSoftware GmbH

### Team's experience
We have years of experience in bringing ideas to life with a user-centered focus using blockchain and mobile technology. We have worked closely with a large number of customers to implement their solutions and therefore have already gained experience with blockchain technologies.
Our most relevant projects are among others:
- Exchange for trading digital assets (Customer is a Top 200 Token of CMC)
- Token Swap WebApp (Customer is a Top 200 Token of CMC)
- [Blockchain, NFT Pallets & App](https://artists.niftymarket.com/) (In Development)

We look forward to contributing to the web3 ecosystem with an open source project next.

### Team Code Repos

Source code will be in:
- https://github.com/TDSoftware

Team profiles:
- https://github.com/dobschal
- https://github.com/a-oertel
- https://github.com/markusdent
- https://github.com/frotscher
- https://github.com/sosan-neikbeen

### Team LinkedIn Profiles

- https://www.linkedin.com/in/dobschal/
- https://www.linkedin.com/in/anika-oertel-128237223/

## Development Status :open_book:

[RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/identity-directory.md)

A concept and initial design was created as part of this application and can be found in the Project Details chapter.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** 49500 DAI

### Milestone 1 — Design and Implementation of the Basic Application

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:**  16500 DAI

A basic application with a responsive design is developed which supports querying by address and identity fields. A user can query identities from Polkadot or Kusama. When a search returns multiple results a list view is displayed. If there is only one search result or one identity is selected from the list view, a detailed identity view is displayed.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the application. |
| 0c.	| Testing |	Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 1. | Concept and design | We will create a high-fidelity, responsive, pixel perfect design for a search, a list view and a detailed identity view |  
| 2. | Implement logic for querying identities | Implement logic to receive identities from a substrate-based chain implementing the Identity pallet |
| 3. | Implement UI for search and list view | Build UI with Vue.js |  
| 4. | Implement UI for detailed identity view| Build UI with Vue.js | 

### Milestone 2 - Offline mode and performance improvement

- **Estimated Duration:** 1 month
- **FTE:**  3
- **Costs:** 16500 DAI

 A user can query identities from Polkadot, Kusama or provide his own node endpoint. The application can be hosted on IPFS and a backend is developed in order to improve performance.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and update the basic **tutorial** that explains how a user can use the application. |
| 0c.	| Testing |	Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 1. | Implement offline mode | Enable a user to connect to a local node and fetch identities from there |
| 2. | Implement UI for node selection |  Enable a user to select the node from the UI |
| 3. | Implement URL param logic | URL Parameters can specify which cards are visible and in which order |
| 4a. | Performance improvement | Focus on improving the web applications performance to maximize usability e.g. by storing fetched information from a local node to IPFS if a users pinata key was provided |
| 4b. | Backend Development | Implement backend with e.g. Node.js to increase performance through indexing; Provide an API for frontend |
| 4c. | Consume API | Use the provided API in frontend to increase performance |


### Milestone 3 - Implementation of default plugins and direct interaction

- **Estimated Duration:** 1 month
- **FTE:**  3
- **Costs:** 16500 DAI

A flexible, expandable and component-based application is developed, that supports the following default plugins: basic info, governance, treasury and validator. It is possible to directly interact with the underlying account by sending tokens to it.  Manual and automated quality assurance is done.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and update the basic **tutorial** that explains how a user can use the application. |
| 0c.	| Testing |	Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 0d.	| Article	| We will publish an article that explains what was done as part of the grant. |
| 1a. | Implement logic for default plugins - backend | Implement logic to get information for default plugins governance, treasury and validator on backend, provide API for frontend |
| 1b. | Implement logic for default plugins - frontend | Implement logic to to get information for default plugins governance, treasury and validator; Consume provided API |
| 2. | Implement components for displaying default plugins | Implement UI for displaying default plugins |
| 3. | Implement logic for sending tokens| Implement logic to get balance of current account and make a transaction to displayed identity; consider transaction fees; use an open protocol (e.g. wallet connect) to establish a secure connection to a wallet |
| 4. | Implement UI for sending tokens| Implement UI for sending tokens, including a button to trigger a transaction, an input field and a display of balances and fees | 
| 5. | Quality Assurance | Manual and automated QA |

## Future Plans

After we have provided a flexible, expandable and component-based application with the above-mentioned functions as part of milestones 1, 2 and 3, the development of further components as plugins could follow, as suggested in the [RFP](https://github.com/w3f/Grants-Program/blob/master/applications/substrate-identity-directory.md) in the Additional Plug-in Ideas chapter.
In addition, TDSoftware can undertake maintenance tasks as part of a maintenance grant.

## Additional Information :heavy_plus_sign:

This is our first application for an open source project to innovate the web3 Ecosystem.
