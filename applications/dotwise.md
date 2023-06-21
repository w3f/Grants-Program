# Dotwise - Analytics Website/Data Platform - RFP

- **Team Name:** Tolga Yaycı
- **Payment Address:** [0xa632439DE1592936fbA3368053eaafd491443493](https://etherscan.io/address/0xa632439DE1592936fbA3368053eaafd491443493) (USDC, Ethereum (ERC20))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This is a response for the [Analytics Website/Data Platform](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/analysis-website-and-data-platform.md) RFP.

### Overview

![logo](https://github.com/tolgayayci/Grants-Program/assets/40897846/b8d20b5f-dd67-436a-8066-04aebf674a97)

Dotwise aims to develop a user-friendly platform for on-chain analysis in the Polkadot & Kusama ecosystems, inspired by the utility and design of Dune Analytics which is popular in the Ethereum community. The platform will facilitate easy exploration and querying of blockchain data via backend services such as Subquery, using GraphQL. The key feature of this platform will be its capability to let users create, share, and customize dashboards for data visualization and interpretation.

### Project Details

- Mockups/designs of any UI components

  **Home Page**
  
  ![homepage](https://github.com/tolgayayci/Grants-Program/assets/40897846/b2100e98-827d-4f49-a6c7-78f64c148ed1)

  **Queries:** Query is core feature of the platform. Users will be able to create on-chain queries with the Subquery API via Dotwise Core API.

  ![query](https://github.com/tolgayayci/Grants-Program/assets/40897846/59c8acc9-8460-4743-bd12-8daf67d78551)

  **Visualizations:** Users will be able to create visualizations with the queries and visualize the data with the built-in visualization tools.

  **Dashboards:** Dashboards are the main showcase page of the platform. Dashboards has some widgets to display such as queries, visualizations, tables, images, and text. Drag and drop feature will be available for the widgets.
  
  ![dashboard](https://github.com/tolgayayci/Grants-Program/assets/40897846/527d4f0f-c0c0-4044-96f3-a9a8f820d2ed)

  **P.S:** This mockups designed for inspiration. The final design can be different from this mockups.

- Data models / API specifications of the core functionality

  **Core API:** Dotwise Core API will be developed with [Fast API](https://fastapi.tiangolo.com/) and it will be used for core functionalities. It will be used by the frontend and backend services.

  **SubQuery API:** SubQuery API will be used for querying the data from the Substrate-based networks.
  
  As foundational I can index data with below handlers that SubQuery provides.

  - **Block Handlers:** With block handlers, we can define a function that will be executed for each and every block in the network. The mapping function can extract specific data from the block and perform operations on it, such as filtering, transforming, or aggregating the data. This enables us to index and organize block-related data according to our requirements.

  - **Event Handlers:** Events are occurrences or incidents that happen within the blockchain network, such as a transfer of tokens, a contract creation, or a governance vote. Event handlers allow us to specify filter criteria to match specific events and then execute a mapping function on those events. This enables us to extract relevant information from events and perform additional processing or indexing.
  
  - **Call Handlers:** Calls refer to extrinsic actions or transactions that modify the state of the blockchain. With call handlers, we can define filter criteria to match specific extrinsic calls and then execute a mapping function on those calls. This allows us to process and index data related to specific transactions or actions performed on the network.

  **Core steps to index data with SubQuery:**

  1 - Create a GraphQL schema for the Dotwise data model (transactions, governance, etc.)
  
  2 - Update the manifest file to include the GraphQL schema
  
  3 - Create a mapping function for each handler (block, event, call)
  
  4 - Deploy the SubQuery project to a SubQuery Node (local or remote)
  
  5 - Query the data using the GraphQL API of the SubQuery Node
  
  6 - Save the GraphQL query results to the database (PostgreSQL)

  **Data Types**

  **Transaction Data:** This includes the sender and receiver addresses, transaction value, gas price, timestamp, and more. By indexing all transactions, users can explore historical transaction trends, perform address-specific queries, and analyze gas prices.

  **Governance Data:** This includes the proposal ID, proposal type, proposal status, proposal description, voting results, and more. By indexing all governance proposals, users can explore historical governance trends, perform proposal-specific queries, and analyze voting results.

  **Staking Data:** This includes the staker address, staked amount, staking status, and more. By indexing all staking transactions, users can explore historical staking trends, perform address-specific queries, and analyze staking rewards.

  **NFT Data:** This includes the NFT ID, NFT owner, NFT metadata, and more. By indexing all NFT transactions, users can explore historical NFT trends, perform address-specific queries, and analyze NFT metadata.

- An overview of the technology stack to be used

![overview](https://github.com/tolgayayci/Grants-Program/assets/40897846/14942536-6b29-4e72-a0d6-4f6a5ced7e82)

  **BACKEND**

  **Subquery:** Subquery is a tool for building custom data indexes for Polkadot, Kusama, and other Substrate-based networks. It is a great tool for building custom data indexes. It provides a great developer experience with many built-in features such as GraphQL support, TypeScript support, and Substrate support. It also has a great community and ecosystem with many plugins and tools.

  **Fast API:** FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. That is fully compatible with OpenAPI 3.0 (formerly known as Swagger). It is a great tool for building APIs with Python.

  **PostgreSQL:** PostgreSQL is a powerful, open-source object-relational database system. It is a great tool for storing data.

  **FRONTEND**

  Next Js
  
  Vercel
  
  Tailwind CSS
  
  Jest (Testing)

- Documentation of core components, protocols, architecture, etc. to be deployed
  - General Guides & Documentation
  - Test Coverage Reports

- What your project is _not_ or will _not_ provide or implement
  - There isn't any support for parachains that SubQuery doesn't support
  - GraphQL based queries not supported, only SQL

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

  Polkadot ecosystem doesn't have a solution like Dune Analytics and this projects aims start to fill this gap. Users can explore and analyze the data on the Polkadot & Kusama networks with custom queries and visualizations easily and share their queries or dashboards with the community.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

  Who needs to query and visualize Polkadot on-chain data easily is target base of Dotwise.

- What need(s) does your project meet?

  - Users should be able to query and visualize the data on the Polkadot & Kusama networks easily. 
  - Users can create graphql queries using the built-in query builder.
  - Users who are not familiar with GraphQL can use the built-in query builder to create queries just use the select boxes and input fields easily.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  
  No, there isn't any similar project in the Polkadot ecosystem but there is developing solutions about data analysis as my knowledge. So if there will be any good data source ı can rich the my data sources and make the platform more useful.

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

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/tolgayayci
  
## Development Status :open_book:

Some of the mockups and tech stacks has been prepared as mentioned above. I made detailed research about and waiting to start project as soon as possible. There isn't any available codebase right now.

## Development Roadmap :nut_and_bolt:

### Overview

This RFP is planned as 2 milestones, it will be completed in three months.

- **Total Estimated Duration:** ~3 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** $30,000

### Milestone 1 — Backend

- **Estimated duration:** 1,5 months
- **FTE:**  1
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how backend architecture works.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | SubQuery Integration | I will integrate SubQuery, into the backend of the project. This will allow users to search, filter, and aggregate data in a more efficient manner. Users just need to select attributes on UI to write a query with SubQuery via Core API. |
| 2. | Database Integration | I will integrate PostgreSQL to store queries, visualizations, some stats and so more. |
| 4. | Core API | The platform will offer an API that allows to gather, retrieve, and update project-related data. The use of FastAPI will help to ensure high performance and easy integration with other components. |
| 5. | Analytics | I will integrate monitoring solutions to forecast backend system like Grafana. |
| 6. | Authentication | Users can authenticate with their wallet or social accounts like Google. |

### Milestone 2 - Frontend

- **Estimated duration:** 1,5 months
- **FTE:**  1
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how frontend functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Tutorial | I will provide a tutorial about platform. |
| 1. | Home Page - **Dashboards** | The home page will showcase a collection of dashboards. Dashboards are modular pages that can contain a variety of elements, including queries, visualizations, text, images, and more. |
| 2. | Home Page - **Queries** | The home page will also showcase a collection of individual queries that users can explore and utilize. |
| 3. | Dashboard Page - **Details** | Individual dashboard pages will show detailed views of each dashboard, including all their included elements such as queries and visualizations. |
| 4. | Dashboard Page - **Create Dashboard Module** | Users will be able to create their own dashboards through an intuitive interface. They can add different types of elements (like queries, visualizations, text, images) to the dashboard. |
| 5. | Dashboard Page - **Edit Dashboard Module** | Users will be able to edit existing dashboards, including adding, removing, or rearranging elements. |
| 6. | Queries Page - **Details** | The queries page will show detailed information about individual queries, including their results and any visualizations associated with them. |
| 7. | Queries Page - **SQL Editor** | Users will be able to create their own queries using a built-in editor. |
| 8. | Queries Page - **Create Queries Module** | Users will be able to create their own queries with sql editor|
| 9. | Queries Page - **Edit Queries Module** | Users will be able to edit their existing queries, adjusting parameters or modifying the query itself. |
| 10. | Profile Page - **Dashboards Showcase Module** | On a user's profile page, their created dashboards will be showcased for other users to view and utilize. |
| 11. | Profile Page - **Queries Showcase Module** | Similarly, the user's created queries will also be showcased on their profile page. |
| 12. | Settings Page - **Edit Profile Module** | Users will be able to edit their profile information, such as their name, profile picture, and other personal details. |
| 13. | Share - Dashboards & Queries | Users will be able to share dashboards and queries with others. This could be via a shareable link that can be sent to others, or through integration with social media platforms. |
| 14. | Star - Dashboards & Queries | Users will be able to 'star' or favorite dashboards and queries. This functionality will allow users to quickly access their most frequently used or favorite dashboards and queries from a dedicated section or page. |
| 15. | Search | Users will be able to search through the dashboards and queries on the platform. The search functionality will allow users to find specific dashboards or queries based on keywords or filters. |

## Future Plans

In order to address the complex data processing challenges on Polkadot, I will develop Dotwise as a foundational platform leveraging the capabilities of SubQuery. Currently, Dotwise is limited to utilizing SubQuery for data processing. However, I have plans to enhance the platform's efficiency by incorporating additional data sources in the future.

One promising initiative that could significantly contribute to this upgrade is the Polkadot Data Alliance or another solutions just developing right now. After Dotwise v1 is completed, I will conduct a thorough investigation into finding effective data solutions.

After the initial stable release of the platform, I plan to launch a strong promotional campaign across various channels to increase awareness and adoption. I believe the support and assistance from the Web3 Foundation will be invaluable in this endeavor. Together, we can ensure that the base solution of Dotwise adequately addresses the needs of the Polkadot ecosystem, serving as a basic version of Dune Analytics.

Once the platform gains traction and demonstrates success, I will focus on further enhancing Dotwise by incorporating new and advanced features. This commitment to continuous improvement will ensure that Dotwise remains at the forefront of providing valuable insights and data analysis capabilities to its users.

## Referral Program (optional) :moneybag:

- **Referrer:** -
- **Payment Address:** -

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** I am a grantee of the Web3 Foundation Grants Program

