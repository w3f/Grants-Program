# Cyclops Validator Dashboard

- **Team Name:** decentraDOT
- **Payment Address:** BTC: `36GRQ5h9L17fSDsbK59mpkYvsQuifatRpr`
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Cyclops keeps a watchful eye on your Polkadot validators, giving you a clear vision of their performance and rewards.

Cyclops aims to provide a comprehensive validator dashboard application for network validators. Cyclops will help validators to keep track of all their validators' performance and income, making it easier to manage and optimize their operations. With Cyclops, validators can access real-time data, view historical data, and receive notifications on key performance indicators, making it a vital tool for those who want to optimize their operations.

We became interested in building this project due to the popularity of our close-sourced proof of concept validator dashboard, available at [dashboard.decentradot.com](https://dashboard.decentradot.com). Currently our PoC product is monitoring over 80 validators for 50+ validator operators. We recognized the need for a similar open-sourced solution which supports parachain validators, and is developed in a future proof way.

Cyclops will provide a user-friendly interface for validators to monitor their nodes' performance, income, and network stats. The app will feature customizable alerts that notify validators of critical events, such as downtime or poor parachain performance.

### Project Details

![image](https://user-images.githubusercontent.com/34348870/219812406-f01a970c-616b-4feb-8d1c-ee14975a9f17.png)

#### PoC

![image](https://user-images.githubusercontent.com/34348870/219812313-94c0f79c-f5b9-42c2-a724-04c6cbfaccec.png)

We currently have an operational proof-of-concept [here](https://dashboard.decentradot.com).

Initially this PoC was developed as a passion project, only meant as a closed-source tool for monitoring our own validators. After much interest from other 1kv community members, we decided to create a simple registration module and allow other network operators to use our tool. Currently our PoC has over 50 active users, monitoring 80+ validators. Even though this PoC is currently functional, it was never built with the intention to become a public service, and much of the back-end code and database structure reflects this.

The front-end is fully developed using vanilla Javascript, and the back-end runs on a node-js server utilising SocketJS for data transfer. Because of this, the current dashboard is not future proof and is hard to maintain / add additional features. Adding support for parachain validators would require a full code refactor.


#### Front-end stack

- Angular
- Typescript
- SCSS
- jQuery
- Chart.js

The combination of Angular and TypeScript will provide a powerful toolset for building the front-end of Cyclops, allowing us to easily implement API features and manage data / requests.

#### Back-end stack

- Node-JS
- Express framework
- Subscan API
- coingecko API

Cyclops will use the Express Node framework for a custom middleware solution, fetching data from the Polkadot subscan API, processing it, and providing it to the frontend application. The middleware will also handle any necessary authentication and rate limiting that may be required.

#### Features

- Login & registration system
- Support for Polkadot and parachain validators
- Elected / waiting status information
- Daily income tracking
- Token price tracking
- Network ERA progress information
- 1kv statistics
- Stash balance tracking
- Per-session ERA point performance tracking
- Monthly income reports (PDF overview of all reward transactions, handy for TAX purposes)
    Reward date
    Amount
    Monetary value at time of payout
    Extrinsic hash
- E-mail alert system
    downtime
    poor performance

### Ecosystem Fit

#### Where and how does your project fit into the ecosystem?
Cyclops is an important addition to the Polkadot ecosystem as it addresses a key need for network validators. Validators are a critical part of any blockchain network, and they play a key role in securing the network, validating transactions. However, managing a large number of validators can be a complex and time-consuming task, and there is a need for tools that can help validators to manage their operations more efficiently.

Cyclops fits into the Polkadot ecosystem as a validator dashboard application that provides a comprehensive and user-friendly interface for validators to manage their operations. The application also provides detailed analytics and insights to help validators make informed decisions about their operations.

Cyclops complements other tools and services in the Polkadot ecosystem, such as Polkadot-JS, Polkadot telemetry, and Polkadot wallet applications.

#### Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Validator operators

#### What need(s) does your project meet?
We meet several critical needs for validators in the Polkadot ecosystem, including:

Efficient Validator Management: Validator management can be a complex and time-consuming task, especially for validators who are managing a large number of validators. Cyclops provides a user-friendly dashboard that allows validators to easily monitor and manage their validators' performance and income, enabling them to optimize their operations.

Real-Time Performance Monitoring: The Polkadot network is constantly evolving, and validators need to stay on top of performance metrics to ensure that their validators are operating effectively and efficiently. Cyclops provides real-time data on key performance indicators, enabling validators to quickly identify and address any issues.

Historical Data Analysis: Historical data analysis is critical for validators who need to understand their validators' performance over time. Cyclops provides historical data and detailed analytics, allowing validators to make informed decisions about their operations.

Notifications and Alerts: Validators need to stay on top of network events and changes that can impact their validators' performance and income. Cyclops provides notifications and alerts to help validators stay informed about critical events and make informed decisions about their operations.

#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
As far as I am aware, there are no similar projects on either Polkadot nor other blockchains. Grafana validator dashboards exist for Ethereum, though do not offer a similar level of insight and income management tools.

## Team :busts_in_silhouette:

### Team members

* Arthur Hoeke (team leader, full-stack developer) [linkedIn](https://www.linkedin.com/in/arthur-hoeke-170691103/)
* Johan Hoeke (UNIX SysAdmin) [linkedIn](https://nl.linkedin.com/in/johanhoeke)

### Contact

- **Contact Name:** Arthur Hoeke
- **Contact Email:** [admin@decentradot.com](mailto:admin@decentradot.com)
- **Website:** [decentradot.com](https://decentradot.com/)

### Legal Structure

- **Registered Address:** Kea boumanstraat 74, Tilburg, The Netherlands
- **Registered Legal Entity:** decentraDOT (KVK 85801925)

### Team's experience

#### Arthur Hoeke
Arthur Hoeke is a seasoned full-stack software developer with over 7 years of experience in developing web and software products. He has specialized in web development and blockchain technology and has a track record of working on various projects.

Arthur started his career in software development in 2016 and has since then been involved in developing a wide range of web applications and software applications. One of Arthur's notable projects was the development of a Zilliqa wallet app, a decentralized cryptocurrency wallet built on the Zilliqa blockchain. He played a key role in developing the app's architecture, designing the user interface, and implementing various security features to ensure the wallet's safety and security.

Arthur has also worked as a full-stack developer for the NFT platform Mintable, where he was responsible for developing various features for the platform, including the backend APIs, and the user interface.

#### Johan Hoeke
Johan Hoeke is an experienced Unix SysAdmin with over 16 years of experience working for Tilburg University in Holland. He is a highly skilled professional with a strong service-oriented mindset and an extensive background in problem-solving using open source solutions.

Johan is a Red Hat Certified Engineer (RHCE) and has a deep understanding of Unix-based systems, with expertise in system administration, security, network architecture, and high availability solutions.

### Team Code Repos

- https://github.com/ArthurHoeke?tab=repositories

### Team LinkedIn Profiles (if available)

- [Arthur Hoeke](https://www.linkedin.com/in/arthur-hoeke-170691103/)
- [Johan Hoeke](https://nl.linkedin.com/in/johanhoeke)


## Development Status :open_book:

We currently have a fully operational proof-of-concept, and have started with the UI-UX rework. Work on front and back-end will begin after the user-interface design has been completed.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** $26,000

### Milestone 1 Front-end — finish UI design in Figma and convert to HTML, Angular setup

- **Estimated duration:** 3 weeks
- **FTE:**  1
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide basic documentation about how to setup the project and generate a build. (eg. install node packages, et cetera)  |
| **0c.** | Testing and Testing Guide | Website design will corrospond to Figma design and be developed to HTML5 standards. |
| **0d.** | Docker | does not apply |
| 1. | Figma design | UI-UX design for Cyclops in Figma, containing screens for: login, register, dashboard, settings |
| 2. | HTML / SCSS | Convert Figma design into a website using HTML5 and CSS |
| 3. | Angular setup | Create the Angular project for Cyclops, include pages for website |


### Milestone 2 Back-end — Middleware API

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide basic documentation about how to self-host the express middle, setup database, setup e-mail smtp, subscan API key and API endpoints  |
| **0c.** | Testing and Testing Guide | We will provide an API-endpoint which tests all services (smtp, substrate API, database connection) and returns status |
| **0d.** | Docker | We will provide a dockerfile to demonstrate the API running on a local machine |
| 1. | Express API endpoints | Setup express and all required end-points |
| 2. | Database structure | Setup full database structure |
| 3. | SMTP functionality | Setup smtp functionality for e-mail alerts |
| 4. | Subscan API | Implement subscan API |

### Milestone 3 Release — Implement middleware into front-end

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will update our front-end documentation to reflect how to implement the back-end API |
| **0c.** | Testing and Testing Guide | We will host Cyclops on dashboard.decentradot.com for public testing and provide a basic guide on how to get started using the application |
| **0d.** | Docker | We will provide a dockerfile to demonstrate the full project running on a local machine |
| **0e.** | Article | We will publish an article on Medium which explains Cyclops and a basic setup guide |
| 1. | API Service | Create service in Angular to communicate with API |
| 2. | Display data | Fetch data from API and display on dashboard |
| 3. | Elected / waiting | Display elected / waiting status per validator |
| 4. | Reward tracking | Display daily income tracking |
| 5. | Token price tracking | Display token price data |
| 6. | ERA | Display network ERA progress information |
| 7. | 1kv statistics | Display 1kv statistics if applicable to selected validator |
| 8. | Stash | Stash balance tracking |
| 9. | PDF reports | Monthly PDF export functionality, overview of all reward transactions |
| 10. | E-mail alert system | Sent e-mail alert if validator is down |
| 11. | ERA point tracking | Per-session ERA point performance tracking |


## Future Plans

We are committed to supporting and promoting the project both in the short term and in the long term. In the short term, we intend to use, enhance, promote and support the project in the following ways:
Use: We will use Cyclops internally to monitor and manage our own validators, and to gain insight into the performance and income of our validators. This will allow us to optimize Cyclops accordingly.

Enhance: We will continuously work to enhance Cyclops by adding new features and improving existing ones. We will listen to feedback from our users and incorporate their suggestions into the project, ensuring that it remains a valuable tool for network validators.

Promote: We will promote Cyclops to the Polkadot community and beyond, through various channels including social media, forums, and other relevant communities. We will actively seek out new users and collaborators, and work to build a strong community around the project.

Support: We will provide support to our users through various channels including email and the 1kv Element chatroom. We will ensure that our users have a smooth experience with Cyclops, and that any issues are resolved quickly and efficiently.

## Referral Program (optional) :moneybag: 

Not applicable

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Web3 Foundation Website
