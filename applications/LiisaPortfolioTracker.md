# Polkadot NFT Portfolio Tracker by Liisa - MVP 

- **Team Name:** Liisa
- **Payment Address:** Fiat 04.01.2024, 11:55 PM GMT
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up: 

Liisa operates as a multi-chain NFT data analytics platform, engineered to empower collectors and investors in making proficient, data-driven decisions. 

This project consists of the development of a custom-built portfolio tracker, explicitly devised for NFTs within the Polkadot blockchain network, catering to the specificities of NFT investment strategies.

Within the Substrate/Kusama/Polkadot/Web 3 ecosystem, Liisa intends to emerge as a central supplier of granular NFT analytics, distinguishing itself with a user interface tailored to meet the specific requirements of NFT investors.

The portfolio tracker is designed to accommodate the diverse needs of a broad user base, ranging from active traders to long-term investors and collectors. It pioneers innovative metrics that drive the NFT infrastructure forward, thereby promoting a robust and data-enriched investment environment.




### Architecture

![Architecture New](https://github.com/LiisaNFT/W3F-Grants-Program/assets/139144686/5ded60b3-0409-44fb-a619-b47c0c6e7de7)


### Technologies

#### 1) Node.js

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. It allows developers to use JavaScript to write command line tools and for server-side scripting, enabling the development of fast and scalable network applications. Node.js is event-driven and non-blocking, which makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Within the context of the project, the following packages are used:
  - Axios: Axios is an npm package for making HTTP requests in Node.js, simplifying API calls.
  - pg: The "pg" package connects Node.js applications to PostgreSQL databases, enabling efficient data retrieval and manipulation.
  - Polkadot.js: Polkadot.js simplifies connecting and interacting with the Polkadot ecosystem
  - Squid SDK: Squid SDK is a set of tools and libraries to efficiently query the Archive data, transform, enrich and persist into the target store. Squid SDK projects are called squids.

#### 2) Bubble.io

Bubble.io is a visual development platform designed to democratize the process of creating web applications. It enables users, even without traditional coding skills, to build complex web applications through a user-friendly interface. Its features include visual programming capabilities, database management tools, a design editor, API integration, and hosting solutions. Essentially, Bubble.io is part of the no-code movement, which allows rapid digital product creation and innovation without requiring deep technical expertise.

#### 3) React.js

React.js, often simply called React, is an open-source JavaScript library developed by Facebook for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently. React operates on a virtual DOM, which optimizes rendering by minimizing direct manipulation of the actual DOM and by batching multiple changes together. This results in improved performance and a more seamless user experience. React's component-based architecture and its emphasis on declarative programming make it easier to understand, maintain, and scale applications.

### Components

#### 1) Data Source (Subsquid) 

The project aims to create a system to extract and process event data and metadata related to NFTs within the Polkadot ecosystem. The focus is on building flexible and modular data ingestion mechanisms to accommodate different APIs with minimal code changes, using Node.js components for reusability and scalability. 

To expedite development, the team will initially integrate with the Subsquid API, which is well-documented, robust and  opensource, and provides extensive data for selected protocols like Astar (ERC721, ERC1155, PSP34, PSP37), Basilisk (Uniques pallet), Efinity (ERC-721, ERC-1155), Moonbeam (ERC-721, ERC-1155) and Moonriver (ERC-721, ERC-1155). This initial integration will serve two main purposes: to quickly progress towards a working MVP and to serve as a practical example for future developers looking to extend the system with other data sources in the long term.

#### 2) Data Enrichment

Our backend serves as a vital nexus between supported blockchain protocols and valuable metrics we generate for user wallets and NFT collections. It involves three key activities: crafting and executing API queries, initiating timed triggers, and developing computational algorithms for metrics computation. We create and execute precise API queries to extract event data from Subsquid for protocols such as Astar (ERC721, ERC1155, PSP34, PSP37), Basilisk (Uniques pallet), Efinity (ERC-721, ERC-1155), Moonbeam (ERC-721, ERC-1155), and Moonriver (ERC-721, ERC-1155). This enables the continuous refresh of our system with recent blockchain events pertinent to the monitored NFT collections and user wallets. 

Our backend employs timed triggers to initiate queries to Subsquid at predefined intervals, ensuring we maintain an up-to-date snapshot of relevant blockchain events. Incoming event data, acquired via timed or event-driven triggers, is processed using specially designed computational algorithms. These algorithms generate key performance indicators (KPIs) and metrics for both user wallets and NFT collections, capturing the most essential insights. The calculated metrics are persistently stored in our database, ensuring their continuous availability for subsequent retrieval, analysis, and the provision of comprehensive insights into users' wallets and NFT collections.

All the code for data enrichment will be opensource so that more developers in the ecosystem can leverage our processes for retrieving NFT data from Subsquid API and wallets, as well as creating NFT metrics.

#### 3) Database 

We will be utilizing PostgreSQL as our database management system to store and manage all data. PostgreSQL is an advanced open-source relational database management system that offers a broad range of powerful features. As our choice of infrastructure provider, we will be deploying PostgreSQL on Google Cloud Platform (GCP).

#### 4) Frontend

We've chosen React.js for our frontend development, due to its open-source nature, and also with the intention of open-sourcing our own platform. This aligns with our commitment to enriching the Polkadot ecosystem, enabling more developers to leverage, adapt, and expand upon our work. React's component-driven approach ensures efficient and modular development, especially vital for our analytics platform. This decision guarantees adaptability for our MVP phase and scalability for expansive growth

#### 5) Bubble.io plug-ins

While our frontend for the Portfolio Tracker MVP will be developed using React.js, we recognize the importance of our broader platform's integration with Bubble.io. Hence, we will develop open-source plug-ins for Bubble.io, enabling connections to the selected wallets: Subwallet, Parity signer, Polkadot-js, Fearless wallet, Nova Wallet, and Talisman. These plug-ins, built using Node.js, will empower users to log in using their wallets and facilitate retrieving NFT ownership data for portfolio metrics computation. By open-sourcing these plug-ins, we aim to enhance the no-code community's access to the Polkadot ecosystem. Regarding the integration of React with Bubble.io plugins: While React itself doesn't natively support Bubble.io plugins, we can create a bridge using APIs or webhooks. 

### Ecosystem Fit

Upon delving deeper into the NFT portfolio tracking landscape within the Polkadot ecosystem, it's evident that while some platforms have incorporated NFT capabilities, they largely remain as extensions of their primary token and DeFi services. Our solution, on the other hand, is purpose-built for NFTs, offering a dedicated platform tailored for the nuanced requirements of NFT enthusiasts and investors.

As we look ahead, we're keen on forging strategic collaborations with NFT-centric parachains, such as Unique Network, and various NFT marketplaces. Such partnerships will not only amplify the Liisa portfolio tracker's functionality—through the integration of off-chain data—but also bolster their services by synergizing with our advanced analytical tools.

#### Similar projects:
- Nansen Portfolio
- De.Fi
- Coinstats

#### What makes us different is:
While platforms like Nansen and Coinstats have made significant strides in the broader crypto space, their focus is primarily on tokens, leaving Polkadot NFTs out of their purview. Meanwhile, the De.Fi platform's emphasis in this domain is still emerging. This observation underscores a distinctive opportunity in the Polkadot ecosystem: the need for a specialized NFT portfolio tracker, a niche we are poised to occupy.

In the absence of direct parallels, our differentiation can be better understood when juxtaposed with existing wallet services from a technical perspective.

Technical Differentiation:
1) Users receive an all-encompassing summary, highlighted by our unique Portfolio Scorecard, which evaluates liquidity, volatility, and NFT diversification.
2) Our platform goes beyond static visuals, offering dynamic filtering and sorting capabilities based on salient metrics such as sales and estimated value, resulting in a blend of technical robustness and user engagement.
3) Every NFT token is accompanied by a wealth of insights, ranging from its rarity rank within a collection to a meticulous activity log detailing all related transactions.
4) An aggregated perspective on NFT assets per collection is provided, supplemented with intuitive search features and dynamic filtering, presenting users with an innovative lens to evaluate collection performance.

In essence, our initiative pioneers novel metrics, visualization techniques, and deep dives into the NFT realm, setting a precedent in the Polkadot ecosystem.

## Team :busts_in_silhouette:

### Team members

- Bernardo Silva: Team Leader, Co-Founder & CEO at Liisa
- Paulo Peixoto: Lead Developer, Full-stack developer, Co-Founder & CTO at Liisa
- Kerim Caner Tümkaya: Backend developer, Data Engineer at Liisa
- Guilherme Leitão: Backend developer, Junior Developer at Liisa
- Alexandre Collignon: UX/UI designer, Head of Marketing & Community at Liisa

### Contact

- **Contact Name:** Bernardo Silva
- **Contact Email:** bernardo@liisa.io
- **Website:** www.liisa.io

### Legal Structure

- **Registered Address:** Rua José Henriques Coelho 3, 6C, 2770-103, Paço de Arcos, Lisboa, Portugal
- **Registered Legal Entity:** Vírgula Pragmática LDA, VAT: PT517151006


### Team's experience

#### Bernardo 
As Liisa's co-founder and CEO, Bernardo Silva leads a pioneering company leveraging big data for insightful NFT investor decisions. His leadership roots back to Deloitte, managing business consultations and cost-saving initiatives. His strategic role in an EU Digital Transformation Project and the launch of Portugal's largest Energy provider's loyalty program spotlight his tech project management prowess. His time at IKEA Portugal birthed a robust in-store capacity planning framework based on predictive analytics. An Industrial and Civil Engineering graduate, his focus lies in data-driven decision making in Web 3, with a proven ability in steering innovative projects and entrepreneurial initiatives.

#### Paulo
Paulo Peixoto, Co-founder and CTO of Liisa, is an experienced technical leader with a rich background in full-stack development and specialized proficiency in blockchain data APIs and stream APIs, having experience with EVM NFT data. His expertise has been instrumental in developing Liisa's NFT trading analytics platform, embedding AI into backend processes and extracting and analyzing both real-time and historical NFT data. Formerly at Rainplan, he spearheaded a team to design a unique platform connecting real estate owners with government incentives. His further technical acumen was demonstrated at Updone as a co-founder, where he designed and implemented a custom-made CRM. In his roles at Loxo, Remi, Hardcopy, and MyMedCard, Paulo improved app performance, amplified system analytics, and led solution development. With a CertHE in Banking, Corporate Finance, and Securities from the University of Bedfordshire, Paulo skillfully combines technical mastery with financial knowledge.

#### Kerim
Kerim Caner Tümkaya is an accomplished Senior Data Scientist at Liisa, specializing in leveraging AI models to extract valuable insights from NFT data. With a profound mastery of data science and a diverse technological skill set, Kerim excels in machine learning, data analysis, and Python programming. Additionally, he possesses advanced cloud engineering skills, effectively utilizing platforms such as Cloudera, GCP, and AWS. Throughout his career, Kerim has made significant contributions in the field of data science. Notably, at Hepsiburada, he applied his expertise in demand and risk modeling, while at Allianz Türkiye, he developed machine learning projects for the banking sector. Kerim's repertoire includes proficiency in Pyspark, Hive, Impala, SQL, R, and GCP, enabling him to tackle complex challenges across various industries.

#### Guilherme
Guilherme, Junior Backend Developer at Liisa, is a distinguished Computer Science graduate from Instituto Superior Técnico in Lisbon. He stands out with his exceptional academic performance, particularly in areas such as Object-Oriented Programming, Machine Learning, and Distributed Systems. His notable projects include implementing a multi-connection File System, a user-friendly crypto mobile app, and an online currency distributed system, demonstrating profound skills in Python, Java, and C/C++. His contribution to the development of Liisa's NFT trading analytics platform underpins his extensive expertise. Guilherme's versatility, combined with his commitment to every phase of project execution, emphasizes his exceptional technical competence.

#### Alexandre  
Alexandre Collignon is a professional with expertise in product design and experience in the NFT market. As the Head of Marketing and Community at Liisa, he engages with NFT traders daily and understands their needs and preferences. With a background in digital marketing and experience as a Digital and Technology Consultant at EY and Accenture, Alexandre brings a strategic and innovative approach to product design. He has led the development of AI-enabled platforms, resulting in efficiency gains for major industry players. Alexandre's past experiences in front-end development enhance his ability to create intuitive and engaging designs. With his understanding of the NFT market and experience as a trader, Alexandre aims to elevate Liisa's product design and deliver value to the community.


### Team Code Repos

Source codes will reside in
- https://github.com/LiisaNFT

For further reference
- https://github.com/paulogustavopeixoto
- https://github.com/guilhermeleitao2002
- https://github.com/kerimtumkaya
- https://github.com/alexcollignon

### Team LinkedIn Profiles 

- https://www.linkedin.com/in/bernardo-silva-631149161/
- https://www.linkedin.com/in/pauloassispeixoto/
- https://www.linkedin.com/in/kerim-caner-tumkaya/
- https://www.linkedin.com/in/guilherme-leit%C3%A3o-47bb27192/
- https://www.linkedin.com/in/alexandre-collignon/

## Development Status :open_book:

Our team has brought the first iteration of the portfolio tracker mockups to fruition (please see them below in the Mockups section).

In a proactive endeavor to understand and address the data-related challenges of building the MVP, we have exchanged several emails and engaged in multiple meetings with the Parity team. Through these communications, we ensured technical feasibility of the proposed approach and refined the data approach and mockups to better match the ecosystems' needs.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  2.25
- **Total Costs:** 30,000 USDC

### Milestone 1 — On-chain data collection, indexing and calculations

- **Estimated duration:** 2.5 months
- **FTE:**  2.5
- **Costs:** 17,000 USDC

| Number | Deliverable               | Specification |
| ------ | ------------------------- | ------------- |
| 0a.    | License                   | All code will be open-sourced under Apache 2.0 license. |
| 0b.    | Documentation             | Documentation includes Inline Code Documentation, Configuration Documentation, Readme file. Documentation on the modular design of Subsquid API calls is included. |
| 0c.    | Testing Guide             | The code will have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide, we will describe how to run these tests |
| 0d.    | Docker                    | Provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1a.    | Modular Subsquid API calls | Design and implement API queries to extract event data from the Subsquid API for the supported protocols and the respective token standards and/or pallets: Astar (ERC721, ERC1155, PSP34, PSP37), Basilisk (Uniques pallet), Efinity (ERC-721, ERC-1155), Moonbeam (ERC-721, ERC-1155) and Moonriver (ERC-721, ERC-1155). The design will be modular to allow easy replacement with different APIs. This will be developed using Node.js. |
| 1b.    | Timed-Triggers            | Establish timed triggers to initiate queries to the Subsquid API at predetermined intervals, subsequently refreshing the associated events database with the most recent data. This will be developed using Node.js on the main code and will use cronjobs on the cloud to set the triggers. |
| 1c.    | User-initiated Triggers   | Implement event-driven triggers that are activated upon user interactions with the application, specifically upon insertion of a wallet address. This will initiate Subsquid API queries and subsequently update the associated events database with the retrieved data. This will be developed using Node.js. |
| 2a.    | Open-sourced Computational algorithms | Design and implement computational algorithms that, upon activation of either event-driven or timed triggers and the consequent receipt of new event data, will produce key performance indicators (KPIs) and metrics for both user wallets and NFT collections. The calculated metrics will subsequently be stored persistently in the database for subsequent analysis and retrieval. This code will be open-sourced and developed using Node.js. |




### Milestone 2 — Portfolio tracker front-end implementation

- **Estimated Duration:** 2.5 month
- **FTE:**  2.0
- **Costs:** 13,000 USD

| Number | Deliverable                    | Specification                                                                                                                                                                                                                                                |
|-------:|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                        | Apache 2.0                                                                                                                                                                                                                                                  |
| 0b.    | Documentation                  | Documentation includes Inline Code Documentation, Configuration Documentation, Readme file                                                                                                                                                                  |
| 0c.    | Testing Guide                  | The code will have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide, we will describe how to run these tests                                                                                                              |
| 0d.    | Docker                         | Provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                        |
| 0e.    | Article                        | Write a Medium article that explains the work done as part of the grant.                                                                                                                                                                                    |
| 1a.    | Bubble.io wallet plugins       | Design and engineer custom Bubble.io plugins for the selected wallets. The plugins will be architected to integrate wallet log-in (signature) into our front-end application interface. The plugins will be published on the Bubble.io marketplace and made freely available to the wider developer community. Selected wallets: Subwallet, Parity signer, Polkadot-js, Fearless wallet, Nova Wallet, Talisman. This will be developed using Javascript. |
| 1b.    | Wallet address transmission    | Implement a front-end authentication module that captures and transmits wallet addresses from the user sign-in process to our backend. The transmission activates event-driven triggers, initiating Subsquid  API queries for relevant event data retrieval. This will be developed using Node.js and React.js.                                                                                                             |
| 2a.    | Dashboard Structure Implementation | Utilizing provided mockups as the architectural blueprint, implement the user interface for the application dashboard. This involves arranging key performance indicators (KPIs) and various data visualization elements according to the predefined design. This will be developed using React.js.                                                                       |
| 2b.    | Dynamic Dashboard Values       | Implement a real-time data binding mechanism that retrieves and displays updated portfolio data from the database, activated by event-driven triggers as defined in 1b. This will be achieved using a websocket client connected to our PostgreSQL Database.                                                                                      |

## Mockups

### Portfolio Overview

The homepage of the portfolio provides a quick and insightful summary of the user's NFT holdings, including key features such as:
- Overview Metrics: Displaying estimated portfolio value, revenue from NFT sales, spending on NFT purchases, realized profit-and-loss, and unrealized profit-and-loss;
- Portfolio Scorecard: Assessing liquidity, volatility, and diversification of the NFT portfolio;
- Portfolio Evolution Chart: Visualizing the historical value evolution of the NFT portfolio;
- Inventory Chart: Illustrating the relative value distribution of each NFT holding.
- Collection Highlights: Ranking collections in the user’s wallet based on top gainers, top losers, and recent purchases.

![Portfolio tracker #1 (1)](https://github.com/LiisaNFT/W3F-Grants-Program/assets/139144686/ae122745-4d96-4c2a-86af-a8bc8230f63a)

### NFTs page

The NFTs page offers users a technical and visually engaging interface to view their NFT collection:
- NFT Images: Displaying artwork and associated metadata for each token;
- Token Metrics: Showing estimated value, acquisition price, unrealized PNL, and 24-hour sales for each collection;
- Filtering and Sorting: Allowing users to sort and filter NFTs based on metrics like collection sales and estimated value.

![Portfolio_tracker_2_1](https://github.com/LiisaNFT/W3F-Grants-Program/assets/139144686/ca77234f-dba4-4ede-8860-981d958ba3fd)


### Individual item page

The individual item page allows users to delve into the comprehensive details of each NFT from their collection, providing a technical and in-depth analysis of the specific token.
- NFT Images: Showcasing artwork and associated metadata.
- Token Metrics: Providing estimated value, last sale price, unrealized PNL, acquisition date, and rarity rank within the collection.
- Historical Chart: Visualizing sales history and estimated value evolution over different timeframes.
- Activity Table: Logging all events related to the NFT, including sales, transfers, and minting.

![Portfolio tracker #3 (1)](https://github.com/LiisaNFT/W3F-Grants-Program/assets/139144686/9ce0f425-3e2e-4901-9bd5-d68817afc3b4)


### Collections page

The collections page provides users with an aggregated view of their NFT holdings by collection, allowing them to assess collection performance and its impact on their portfolio.
- Metrics per Collection: Includes NFTs owned, sales floor and % change for a timeframe, total invested value, estimated value, unrealized PNL, and collection volume.
- Filters and Sort: Users can compare values in native tokens or dollars, select timeframes, and sort the table by various metrics.
- Search: Quick search bar filters the table dynamically as the user types, facilitating collection analysis.
- This page offers a concise and efficient way for users to evaluate the performance and contribution of each NFT collection in their portfolio

![Portfolio tracker #4 (1)](https://github.com/LiisaNFT/W3F-Grants-Program/assets/139144686/12288478-21f2-4fab-9269-dfdc20693ed8)

## Future Plans

Immediate Plans in the timeline includes
- User testing and improvements to the portfolio tracker
- Integrating the portfolio tracker as part of the Liisa multi-chain NFT analytics platform
- Integrate NFTs from the supported protocols in the Liisa multi-chain NFT analytics platform

Our Roadmap includes
- User-defined alerts for NFT events
- Integration with NFT marketplaces for off-chain data querying, specifically marketplace listings and bids
- Integration of AI models for NFT valuations
- Development of a mobile application
- Integration of additional protocols
- Token tracking

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
From talking to the Parity Team

**What work has been done so far?**
We have developed and deployed the Liisa NFT analytics platform, currently supporting ETH and MATIC NFTs, including both off-chain and on chain data visualizations and KPIs

**Are there are any teams who have already contributed (financially) to the project?**
Yes, our Incubator and VC

**Have you applied for other grants so far?**
No 
