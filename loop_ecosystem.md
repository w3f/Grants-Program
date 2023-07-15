# Loop

- **Team Name:** Loop Ecosystem Team
- **Payment Address:** To be defined 

## Project Overview :page_facing_up:
### Overview
- Ecosystem of exchangeable loyalty programs and rewards for frictionless user experience.
- Loop is a transformative project that aims to overhaul the fragmented loyalty programs industry by building an interoperable ecosystem on the Polkadot/Substrate blockchain. Utilizing smart contracts and Non-Fungible Tokens (NFTs), Loop enables various merchants' loyalty programs to collaborate, providing consumers with a simple, practical, and flexible user experience.
- Through a singular virtual wallet, users can participate in numerous loyalty programs, use rewards to secure discounts from any participating merchant, exchange rewards with other users, or convert rewards into cash. Loop aims to address a prevalent issue in both the Web2 and Web3 landscapes: the lack of cooperation and interoperability among different brands' loyalty programs. This not only makes reward redemption more convenient for customers but also helps reduce the substantial liabilities that unclaimed rewards pose on merchants' balance sheets.
- Despite some Web3 projects like ShopNext (Binance) and Lolli (Bitcoin) working on loyalty programs and rewards, none have addressed the issue of interoperability, marking Loop's unique value proposition within the Substrate, Polkadot, and Kusama ecosystem.

### Project Details
1. **Smart Contract System:** This system will be responsible for managing loyalty programs, rewards issuance and redemption, rewards exchange, and cash conversion.
2. **NFTs for Rewards:** Each reward point will be represented as an NFT, making it easily transferable and exchangeable across different loyalty programs.
3. **User Interface:** We'll create a user-friendly frontend interface where customers can view their rewards from different loyalty programs, exchange rewards, and convert rewards into cash. It will also feature an integrated virtual wallet.
4. **Merchant Interface:** A separate interface for merchants will be developed for managing their loyalty programs, viewing customer reward details, and facilitating reward redemption.

Our project directly integrates with Substrate by leveraging its advanced modular system to create the required functionalities. We are committed to this project due to our team's deep interest in enhancing customer loyalty programs' efficiency and potential.

### Loop is designed with two distinctive features in mind:
1. **Web2-Friendly Solution:** Loop aims to onboard users who are not familiar with the concept of wallets or digital currencies by offering a Web2-friendly solution. Users can log in using traditional methods like OAuth, and their assets are managed on secure, server-side wallets. This design reduces barriers to entry for less tech-savvy users, widening Loop's potential user base.
2. **Cross-Chain Compatibility:** As the project matures, Loop plans to introduce cross-chain compatibility using communication protocols like Polkadot's Cross-Chain Message Passing (XCMP), allowing the platform to interact with other blockchains and share information. This feature aims to diversify Loop's ecosystem, bringing in a wider range of users and merchants.

### **User Interface**
**1. Wallet:** In the wallet section, users will be able to visualize and manage their accumulated points from all the different loyalty programs available. Each program will be clearly represented, ideally by using recognizable brand logos for quick and easy identification. There will also be a display of the points each user holds in their account per brand, as well as an approximate cash value for these points, to ensure transparency and clarity.
Design:
- The wallet would take inspiration from best-in-class mobile banking and crypto wallets, with a clear balance visible at the top of the screen. Below this, a user would see a scrollable list of loyalty points, sorted by amount, with the ability to search for a specific brand.
- Each entry in the list would show a brand logo, total points available, and their cash equivalent value.
- There will be a summary at the top showing the total number of brands and the total value of all the points combined.

**2. Exchange:** In the exchange section, users can convert their points to rewards or cash, use the accumulated points to get discounts in any of the brands within the platform, or exchange available points with other users. The page will feature the exchange rates for each type of point, a section where users can specify the amount they want to exchange, and an action button to confirm the exchange.
Design:
- The exchange area will display a list of available points for conversion, including the brand and the conversion rate to other points or cash.
- Selecting a specific point would open a form where the user can choose the type and quantity of points to convert or exchange.
- A summary of the transaction, including all fees and the total amount to be received, will be shown before the user confirms the exchange.
- For peer-to-peer transactions, there will be an option to choose a user from the contact list or enter a wallet address manually.

**3. Merchant Dashboard:** Merchants will have a dashboard where they can see how their loyalty program is performing. They can adjust settings, manage rewards, and see the redemption history.
Design:
- The dashboard will display key metrics like total active users, total points issued, and total points redeemed. These metrics will be displayed in an easy-to-understand graphical format.
- There will be options to adjust the settings of the loyalty program, such as the point per purchase ratio, redemption threshold, and any special promotions.
- The redemption history will show a list of all redeemed points with details like user ID, amount redeemed, and timestamp.

In terms of design language, we'll aim for a clean and modern look, focusing on ease of use and simplicity. The choice of colours and fonts will be chosen to ensure good readability and an appealing aesthetic. The design process will follow the principles of responsive design to ensure a smooth experience across different devices. This is a high-level overview and the actual design process may involve changes based on user feedback and iterative testing.

### API specifications of the core functionality
Loop will have three core data models:
1. **User Profile**: This will store data like username, hashed password, email address, and loyalty points of each brand. Each user will be associated with a unique wallet address.
2. **Merchant Profile**: This model will hold data like business name, contact details, and details about the loyalty program like points per purchase and redemption rates.
3. **Transaction History**: This will keep a record of all transactions, with fields for sender, receiver, transaction amount, timestamp, and transaction type (redeem, exchange, earn).

Our API will have several endpoints to interact with these models. For instance, we'll have endpoints for creating new users or merchants, fetching user profiles, fetching or updating loyalty points, initiating transactions, etc. All of these APIs will adhere to RESTful standards and will use JSON for data interchange.

### **Data Models**
1. **User:** This table records the personal details of a user. Fields include, but not limited to:
    - **`user_id`**: Unique identifier, primary key.
    - **`username`**: Unique username selected by the user. Used for logging in along with password.
    - **`password_hash`**: Encrypted password for security reasons.
    - **`email`**: User's email address for communication and password recovery.
    - **`registered_on`**: Timestamp for when the user registered.
    - **`last_logged_in`**: Timestamp for the user's last login.
2. **Merchant:** This table records information related to the merchants. Fields include, but not limited to:
    - **`merchant_id`**: Unique identifier, primary key.
    - **`merchant_name`**: Name of the merchant/business.
    - **`registered_on`**: Timestamp for when the merchant registered
    - **`contact_details`**: Contact details for the merchant [internal use].
3. **Loyalty Program:** This table records information related to each loyalty program. Fields include, but not limited to:
    - **`loyalty_program_id`**: Unique identifier, primary key.
    - **`merchant_id`**: Foreign key, referencing the merchant who owns the loyalty program.
    - **`loyalty_points_ratio`**: The ratio of spend to points in the loyalty program.
    - **`conversion_rate`**: The conversion rate of points to currency.
    - **`created_on`**: Timestamp for when the loyalty program was created.
4. **Wallet:** This table records the accumulated points of each user from different loyalty programs. Fields include, but not limited to:
    - **`wallet_id`**: Unique identifier, primary key.
    - **`user_id`**: Foreign key, referencing the user who owns the wallet.
    - `w**allet_address**`: Wallet blockchain address.
    - **`loyalty_to_wallet`**: ManyToMany key, referencing the associated loyalty programs.
5. **Loyalty to wallet:** This table records details for each loyalty program a user wallet has entered. Fields include, but not limited to:
    - **`points`**: The number of points from the associated loyalty program.
    - `l**oyalty_program**`: Foreign Key, connecting to a loyalty program.
    - **`updated_on`**: Timestamp for the last update to the wallet points.
    - **`created_on`**: Timestamp for when the user entered the program.
6. **Transaction:** This table records details of each transaction made on the platform. Fields include, but not limited to:
    - **`transaction_id`**: Unique identifier, primary key.
    - **`sender_wallet_id`**: Foreign key, referencing the user who sent the points.
    - **`receiver_wallet_id`**: Foreign key, referencing the user or merchant who received the points.
    - **`loyalty_to_wallet`**: Foreign key, referencing the associated loyalty program.
    - **`points_transferred`**: The number of points transferred.
    - **`timestamp`**: Timestamp for when the transaction occurred.

### **API Specifications**
1. **User-related API endpoints:**
    - POST **`/users/register`**: Register a new user. Takes in parameters like **`username`**, **`password`**, and **`email`**. Returns the newly created **`user_id`** and **`wallet_address`** if successful, along with a success message. In case of failure, returns an appropriate error message.
    - POST **`/users/login`**: Authenticate a user. Takes in parameters like **`username`** and **`password`**. Returns an authentication token and **`user_id`** if the credentials are valid. In case of failure, returns an appropriate error message.
    - GET **`/users/{user_id}/wallet/{wallet_id}`**: Get the details of all the user's wallets (if no wallet id provided). Returns a JSON object with all **`wallets`** objects and for each all the **`Loyalty to wallet`** objects associated with that wallet. If **`user_id`** is invalid or doesn't exist, or the authenticated user is not allowed to retrieve this information returns an appropriate error message.
2. **Merchant-related API endpoints:**
    - POST **`/merchants/register`**: Register a new merchant. Takes in parameters like **`merchant_name`**. Returns the newly created **`merchant_id`** and a success message if successful. In case of failure, returns an appropriate error message.
    - POST **`/merchants/{merchant_id}/loyaltyProgram`**: Create a new loyalty program for the merchant. Takes in parameters like **`loyalty_points_ratio`** and **`conversion_rate`**. Returns the newly created **`loyalty_program_id`** and a success message if successful. If **`merchant_id`** is invalid or doesn't exist, returns an appropriate error message.
    - GET **`/merchants/{merchant_id}/loyaltyProgram`**: Get the details of the merchant's loyalty program. Returns a JSON object with **`loyalty_program_id`**, **`loyalty_points_ratio`**, and **`conversion_rate`**. If **`merchant_id`** is invalid or doesn't exist, returns an appropriate error message.
3. **Transaction-related API endpoints:**
    - POST **`/transactions/transfer`**: Transfer points from one user to another, or from a user to a merchant. Takes in parameters like **`sender_id`**, **`receiver_id`**, **`loyalty_program_id`**, and **`points_transferred`**. Returns the **`transaction_id`** and a success message if successful. In case of failure, returns an appropriate error message.
    - GET **`/transactions/{transaction_id}`**: Get the details of a specific transaction. Returns a JSON object with **`sender_id`**, **`receiver_id`**, **`loyalty_program_id`**, and **`points_transferred`**. If **`transaction_id`** is invalid or doesn't exist, returns an appropriate error message.

Again, all interactions with the API will be secured using best practices such as HTTPS encryption and JWT for user authentication. Additionally, rate-limiting will be implemented to prevent abuse of the API. Error handling will be robust to provide clear, understandable error messages to the user or developer.

### **Overview of the technology stack to be used**
We are planning on using a combination of blockchain technology, cloud services, and front-end development tools to build a performant, secure, and user-friendly platform.

**Blockchain Layer:**
- **Substrate Framework**: The Substrate framework is a modular platform for building blockchains and will form the backbone of our project. Substrate offers flexibility and ease of development due to its modularity and its Rust-based runtime environment. It provides a set of libraries and tools that abstract away the complex parts of blockchain development.
- **Polkadot/Kusama**: We plan to launch our project on Polkadot or Kusama ecosystem, which are multi-chain networks that allow different blockchains to interoperate in a shared security model. It will allow us to tap into the liquidity, security, and interoperability features of these networks.
- **Smart Contracts**: We will be using the Ink! language to develop smart contracts for our platform. Ink! is a Rust-based language designed for writing secure and efficient smart contracts on the Substrate framework.

**Backend Layer:**
- **Python**: For our backend services, we'll use Python, a versatile high-level language known for its simplicity and readability. Python's broad range of libraries and frameworks, including Flask, Django, celery, web3.py, etc… make it an ideal choice for web server development.
- **PostgreSQL**: As for the database, we will be using PostgreSQL, a powerful, open-source object-relational database system that provides strong consistency while handling a high volume of concurrent transactions.
- **Redis**: A caching layer with Redis will be used for caching frequent queries and reducing the database load.
- **RabbitMQ**: RabbitMQ will be used as a message-broker service to handle inter-service communication.

**Frontend Layer:**
- **ReactJS**: For the user-facing frontend, we will be using ReactJS, a popular JavaScript library for building user interfaces. React is widely known for its efficiency, flexibility, and intuitive programming model.
- **Redux**: To manage application state, we will use Redux, a predictable state container for JavaScript apps.
- **Web3.js/Polkadot.js**: These libraries will be used for interacting with the blockchain from our frontend application.

**DevOps/Cloud Infrastructure:**
- **Docker**: To ensure that our application runs consistently across different environments, we will be using Docker for containerization.
- **Kubernetes**: For orchestrating and managing our Docker containers, we'll use Kubernetes, a popular, open-source container-orchestration system.
- **AWS/Google/Azure Cloud**: The whole application would be hosted on a cloud platform such as AWS or Google Cloud.
- **CI/CD Tools**: Continuous integration and continuous deployment will be managed by tools like Jenkins or CircleCI.

The above stack is designed to leverage state-of-the-art technologies that promote robustness, scalability, and efficient development. It is by no means fixed and may be adapted based on the evolving needs of the project and advancements in technology.

### **Documentation of core components, protocols, architecture**
1. **Core Components**
    - **User Interface**: This is the gateway for the users to interact with our platform. The UI is designed to be user-friendly, responsive, and intuitive. It will allow users to manage their accounts, view and redeem rewards, and transact within the ecosystem.
    - **Smart Contracts**: These are self-executing contracts with the terms of the agreement directly written into lines of code. They govern the rules of the ecosystem such as rules for token issuance, redemption, exchange, and transfer. These are designed with security and efficiency in mind and are responsible for maintaining trust in the ecosystem.
    - **API Server**: This is the bridge between the front-end application and the blockchain. Built using Python, it communicates with the Substrate node and exposes an interface for the front-end to interact with the blockchain.
    - **Blockchain Node**: Built using the Substrate framework, the node is the fundamental building block of our blockchain. It hosts the ledger, verifies transactions, executes smart contracts, and participates in the network consensus.
2. **Protocols**
    - **Inter-Blockchain Communication (IBC)**: This protocol enables communication between our blockchain and other chains in the Polkadot or Kusama network. It enables us to tap into the liquidity and user base of other chains.
    - **Application Programming Interface (API)**: We will use REST/GraphQL APIs for client-server communication.
    - **OAuth 2.0/ JWT**: These protocols will be used for user authentication and authorization.
3. **Architecture**
    - **Modular Blockchain**: The Substrate-based blockchain is inherently modular. This design enables us to customize our chain by adding or modifying modules (called pallets in Substrate) without affecting the underlying blockchain protocol.
    - **Microservices Architecture**: Our backend server will follow the microservices architecture, where each service is self-contained and implements a single business capability. This design allows for better scalability and separation of concerns.
    - **Front-End/Back-End (FE/BE) separation**: We will employ a clear separation between the front-end and the back-end services. This design enables us to scale and update the two parts independently.
    - **Layered Security**: We will employ a layered approach to security, including protocols like SSL/TLS for secure data transmission, encrypted storage of sensitive data, secure smart contract development practices, and rigorous testing.
    - **Data-Driven**: The architecture will also support data analytics, with data warehousing and business intelligence capabilities to help make informed decisions about business direction based on user behaviour and transaction data.

The above details are a high-level overview and specifics might change based on the design decisions made during the development process. However, the goal is to design an efficient, secure, and scalable system that offers a seamless experience to users and businesses alike.

### **PoC/MVP or other relevant prior work or research on the topic**
Our project is currently in its early stages. We have an in-depth understanding of our concept and have been conducting extensive market research to ensure we are meeting a real need within the loyalty rewards sector.

In collaboration with our technical partner, Qubitz, a Portugal-based startup specializing in Web3 technologies, we plan to begin the development of a Proof-of-Concept (PoC). Our PoC aims to demonstrate the core functionality of Loop, including the creation, redemption, and exchange of loyalty tokens via smart contracts, as well as setting up the basic Substrate nodes. Qubitz's team of skilled developers and their deep understanding of blockchain, smart contracts, and decentralized technologies will be instrumental in realizing this project.

In the subsequent stages, we will refine our designs and features to develop an MVP (Minimum Viable Product). The MVP will include features such as user account management, integration with payment processors, and multi-program support, among others. The PoC and MVP stages are critical in our development process as they will help us test, iterate, and perfect our solution before full-scale implementation.

The team's prior work and research have primarily focused on understanding the intricacies of the loyalty rewards industry, studying existing solutions, and identifying gaps that Loop could fill. We have also been learning from the technical and operational challenges faced by similar projects in the crypto and DeFi space.

Furthermore, our association with Qubitz ensures that we stay updated with the latest developments in the broader crypto and DeFi space. Their expertise guarantees a cutting-edge technological infrastructure for the Loop ecosystem, contributing significantly to the successful execution of our project.

### **What your project is not or will not provide or implement**
1. **Cryptocurrency Exchange Services**: While our platform will involve the use of blockchain technology and NFTs to facilitate the exchange of loyalty rewards, we will not be offering cryptocurrency exchange services. Our focus is solely on the digitization and exchange of loyalty points, not on facilitating the buying and selling of various cryptocurrencies.
2. **An Independent Loyalty Program**: Loop is a platform designed to integrate and facilitate the interoperability of existing loyalty programs. We are not a standalone loyalty program and we do not issue our own loyalty rewards. Our role is to facilitate the exchange of rewards between different programs, not to compete with them.
3. **Guaranteed Financial Gain**: As a platform for exchangeable loyalty programs and rewards, Loop does not provide any assurances or guarantees of financial gain or return on investment. Any value derived from the platform will be based solely on the worth of the loyalty rewards being traded.
4. **Regulatory Oversight**: We are a technology platform, not a financial institution. As such, we will not be responsible for ensuring compliance with financial regulations or providing oversight on the financial activities of our users. This responsibility lies with the loyalty programs and merchants that partner with us.
5. **Non-Blockchain Technology Services**: Although we aim to integrate with existing loyalty programs, we will not provide services related to traditional loyalty program technologies. Our focus is on the application of blockchain technology and smart contracts.
6. **Comprehensive Customer Support for Individual Loyalty Programs**: While we will certainly offer technical support for the use of our platform, we will not be equipped to provide comprehensive customer support for all the individual loyalty programs that integrate with our system. Users will need to contact the respective loyalty program for specific inquiries or concerns about their rewards or account status.
7. **Privacy or Anonymity Features**: Loop is designed to provide a seamless user experience for loyalty rewards exchange, but it does not offer anonymity or enhanced privacy features that are common in certain sectors of the blockchain space. User data will be handled with respect to the individual privacy policies of the loyalty programs involved.

By outlining these limitations, we aim to provide clear and transparent communication about what users can expect from our platform, thereby preventing any misunderstandings or unmet expectations.


### Ecosystem Fit
1. **Where and how does your project fit into the ecosystem?**
Loop is a platform that brings interoperability to the world of brand loyalty programs. It is a cross-chain project built using the Substrate framework, designed to connect with the Polkadot and Kusama networks. The uniqueness of our project is in leveraging the power of smart contracts and NFTs to enable seamless exchange and redemption of loyalty rewards across different programs. This way, we foster an ecosystem where different loyalty programs can cooperate, significantly reducing the number of unredeemed rewards and thus reducing potential balance sheet liabilities for companies.
2. **Who is your target audience?**
Our primary target audience includes the end-users of loyalty programs (the consumers), the brands that offer these loyalty programs, and merchants seeking an effective and flexible way to manage their loyalty schemes. Additionally, developers interested in extending or integrating with our platform are part of our audience too. We also target parachain and Dapp developers in the Polkadot/Substrate/Kusama ecosystem who can benefit from incorporating our solutions into their projects.
3. **What need(s) does your project meet?**
Our project addresses the need for interoperability among various loyalty programs. Today, many loyalty rewards go unredeemed due to a lack of flexibility in their use. We address this problem by creating a single platform where users can exchange, redeem, or even cash out these rewards. This gives value back to consumers while also helping businesses reduce their unredeemed rewards liabilities.
4. **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**
To the best of our knowledge, there are no projects within the Substrate, Polkadot, or Kusama ecosystem that focus on enabling interoperability between different loyalty programs using blockchain technology. While there are no direct counterparts in the Substrate/Polkadot/Kusama ecosystem, there are projects in the wider blockchain world that tackle loyalty rewards, such as ShopNext on Binance and Lolli which uses Bitcoin. However, none of these projects offer the degree of interoperability and flexibility that Loop does. Our platform not only allows for the exchange and redemption of rewards across multiple loyalty programs but also enables these rewards to be converted into cash or transferred to other users.

Loop represents an exciting use case of blockchain technology, promising to transform the loyalty rewards industry by introducing unprecedented levels of flexibility and convenience for consumers and businesses alike. We envision a future where loyalty rewards are not left unredeemed but are actively used to encourage customer loyalty and engagement.


## Team :busts_in_silhouette:

### Team members
- Andre Meira
- Qubitz - blockchain and Software Development (represented by Vitor Ferreira)

### Contact
- **Contact Name:** Andre Filipe Mendes Meira
- **Contact Email:** afmmeira@gmail.com
- **Website:** Not yet available

### Legal Structure
- **Registered Address:** Not yet available
- **Registered Legal Entity:** Not yet available
- 
### Team's experience
Our team holds vast experience in blockchain development and customer experience optimization, with key contributions to a variety of projects in these fields.

### Team Code Repos
- TBD

### Team LinkedIn Profiles (if available)
- Andre Meira - [https://www.linkedin.com/in/andré-meira-cefa-527421a0](https://www.linkedin.com/in/andr%C3%A9-meira-cefa-527421a0)
- Vitor Ferreira - https://www.linkedin.com/in/vrubenf/
- Qubitz - https://www.linkedin.com/company/qubitzblockchain/

## Development Status :open_book:
We are in the early stages of development, focusing on designing the smart contract system and the preliminary user and merchant interfaces.

## Development Roadmap :nut_and_bolt:

### Overview
- **Total Estimated Duration:** The development of Loop is planned over an eight-month period
- **Full-Time Equivalent (FTE):**  4 FTE
- **Total Costs:** The estimated cost of the project is $80,000 USD, covering design and architecture, smart contract development and NFTs implementation, user and merchant interface development, cross-chain compatibility implementation, as well as testing, documentation, and deployment. The project has been broken down into six detailed milestones
  
### Milestone 1 — Design & Architecture
- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Mapping out the system design and architecture | The first phase of the project will entail mapping out the complete system design and architecture. This involves understanding user requirements, designing data models, defining system specifications, and creating a roadmap for the subsequent development process. The team's focus will be on crafting an architecture that ensures optimal performance, reliability, and scalability, while allowing for seamless integration with various loyalty programs. |

### Milestone 2 — Smart Contract Development & NFTs Implementation
- **Estimated Duration:** 2 month
- **FTE:**  4
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Smart contracts and NFTs | Once the design and architecture have been established, the team will focus on the development of smart contracts for the loyalty reward ecosystem. This phase will involve creating smart contracts for various operations, including exchange, redemption, and transfer of loyalty points. Also, the team will implement the NFT functionality, which will enable the representation of loyalty points as unique tokens that can be easily tracked and traded across different loyalty programs. |

### Milestone 3 — User Interface Development with Web2 Friendly Solution
- **Estimated Duration:** 2 month
- **FTE:**  3
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | User Interface | The third phase will involve the development of the user interface (UI). The objective is to create an intuitive, responsive, and user-friendly interface that can be easily navigated by both crypto-savvy and non-crypto users. The team will also ensure the platform is Web2-friendly, enabling users to interact with the platform without the need to have a wallet. This will be achieved by integrating technologies such as Magic.link to provide passwordless login and transactions. |

### Milestone 4 — Merchant Interface Development
- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Merchant Interface | Following the development of the user interface, the team will proceed to develop the merchant interface. This interface will provide merchants with the tools necessary to manage their loyalty programs on the platform, including adding or removing loyalty programs, managing loyalty points, and tracking customer activity. |

### Milestone 5 — Cross-Chain Compatibility Implementation
- **Estimated Duration:** 1 month
- **FTE:**  3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Cross-chain compatibility | In the fifth milestone, the team will work on implementing cross-chain compatibility to allow other blockchain networks to interact with the Loop platform. This is crucial for the scalability of the project, as it allows users to transact with various loyalty programs regardless of the blockchain network they belong to. The team will integrate with networks such as Ethereum, Binance Smart Chain, and other Substrate-based chains. |

### Milestone 6 — Testing, Documentation & Deployment
- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains what where the steps followed to develop and deploy the Loop Ecosystem. |
| 1. | Testing, Documentation and Deployment | The final phase will involve testing all components of the system, documenting the system's design and operation, and finally deploying the system to the mainnet. Rigorous testing will be performed to ensure system integrity and the secure operation of smart contracts. Comprehensive user guides and API documentation will be provided for users and developers, respectively. The successful deployment of the platform will be the culmination of this eight-month development journey, marking the official launch of Loop. |

## Future Plans
The vision of Loop is to revolutionize the loyalty rewards space by creating an ecosystem where loyalty programs from different merchants are interoperable, resulting in a seamless and flexible user experience. Our future plans are both ambitious and strategic, aiming to position Loop as a market leader in the loyalty rewards space. We have structured these plans into short-term and long-term objectives as follows:

### **Short-Term Objectives**
In the immediate future, our main objective is to establish a strong foundation for Loop. This involves the following steps:
1. **User Acquisition:** We aim to grow our user base by launching targeted marketing campaigns and leveraging strategic partnerships. We believe that offering a unique value proposition of exchangeable loyalty programs will attract users who are tired of the conventional, fragmented loyalty system.
2. **Merchant Partnerships:** We intend to establish partnerships with merchants of varying scales - from local businesses to multinational corporations. This will enhance the diversity of our loyalty programs, providing our users with an array of options to earn and redeem their rewards.
3. **Platform Enhancement:** We will continually refine and improve our platform based on user feedback and market trends. This includes improving the platform's user interface, optimizing smart contracts, and implementing new features that enhance the user experience.
4. **Community Engagement:** We aim to build a vibrant community around Loop. This includes regular communication with our users through various channels, hosting events, and continually engaging with our community to gather feedback and ideas for improvement.

### **Long-Term Objectives**
For the long term, our vision extends beyond the initial platform development and involves the following strategies:
1. **Cross-Chain Interoperability:** We aim to make Loop compatible with multiple blockchain networks. We believe this is crucial for the scalability of our platform, as it allows users to engage with various loyalty programs regardless of the blockchain network they are based on.
2. **Expansion of Merchant Network:** We plan to grow our network of partner merchants not only in terms of quantity but also in diversity, covering various sectors like retail, hospitality, travel, and more. This would offer our users a wide range of options where they can earn and redeem their loyalty points.
3. **Global Market Penetration:** We aim to make Loop a global platform. While we will start in specific regions due to regulatory and strategic reasons, we intend to expand globally, making Loop available to users and merchants around the world.
4. **Research and Innovation:** We will continually invest in research and development to explore new technologies and trends that can enhance our platform. This includes investigating emerging technologies like Layer 2 solutions, decentralized finance (DeFi) integration, and more.
5. **Sustainable Development:** We are committed to building Loop sustainably. This involves ensuring the platform is economically viable, socially inclusive, and environmentally friendly. For instance, we aim to implement energy-efficient blockchain technologies to minimize our carbon footprint.

In conclusion, our future plans for Loop are to create a vibrant, global ecosystem of exchangeable loyalty programs. We believe our short-term and long-term plans align with our vision of making loyalty programs more user-friendly, diverse, and inclusive. We are excited about the journey ahead and are committed to achieving our vision of revolutionizing the loyalty rewards space.


## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** BTC, Ethereum (USDC/DAI) or Polkadot/Kusama (USDT) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
