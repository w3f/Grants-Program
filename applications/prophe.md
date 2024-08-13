# Prophe

- **Team Name:** Prophe Technologies
- **Payment Details:**
  - **DOT**: 1HeknZ9XE1FkL5GLGg72vjsXLABjVHXuuZE4d412xuxynkE
  - **Payment**: USDC- 14d6Z7GJnxzUw8K1AWELMC6Ptnvgkgort9RnFc5DPVYCK9sT 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):**  2 


## Project Overview :page_facing_up:



### Overview

Please provide the following:

- Prophe is a blockchain-focused toolset that makes project management a breeze.
- Prophe is a leading-edge platform for managing blockchain projects, offering essential tools for developers and dapps. With features like smart contract analysis, transaction simulation, and real-time alerting, Prophe ensures project success and efficiency. 
-  Prophe offers advanced reporting tools and data visualization options powered by Polkadot Indexers. Users can generate detailed reports and visualize data through graphs, charts, and interactive elements, facilitating better interpretation of complex data and informed decision-making.
-  Our team is deeply interested in creating this project because we recognize the transformative potential of blockchain technology in modernizing and optimizing financial transactions. By developing Prophe, we aim to provide a comprehensive and cutting-edge toolset that empowers developers, dapps, and financial institutions to leverage blockchain's capabilities efficiently and effectively.  By creating Prophe, we aim to bridge the gap between the complexities of blockchain technology and the needs of developers and financial institutions. Our goal is to deliver a platform that not only enhances project management but also drives innovation and efficiency in the blockchain space.



### Project Details


1. Mockups/designs of UI components
https://www.figma.com/design/4SiGenSrJg9JQ0amn4HWMv/PROPHE.P?node-id=2809-11652&t=ShjSrann25tsdoBl-0

2. Data models / API specifications of the core functionality
Key Entities:

User

id: unique identifier
email: for notifications
monitored_contracts: list of contract addresses
monitored_wallets: list of wallet addresses


Contract

address: unique identifier
abi: contract ABI for parsing events
monitored_events: list of event names to watch


Event

id: unique identifier
contract_address: foreign key to Contract
event_name: name of the event
parameters: JSON object of event parameters
timestamp: when the event occurred


Wallet

address: unique identifier
monitored_transactions: types of transactions to watch (e.g., incoming, outgoing, specific token transfers)
balance_threshold: optional, for balance change alerts


Transaction

id: unique identifier
wallet_address: foreign key to Wallet
type: transaction type (e.g., incoming, outgoing, token transfer)
amount: transaction amount
token: token type (if applicable)
timestamp: when the transaction occurred



API Endpoints:

POST /api/contracts

Add a new contract to monitor


POST /api/events

Add a new event to watch for a contract


GET /api/events

Fetch recent events for a contract


POST /api/wallets

Add a new wallet to monitor


GET /api/wallets/{address}/transactions

Fetch recent transactions for a wallet


POST /api/wallets/{address}/alerts

Set up alerts for specific wallet activities


POST /api/notifications

Set up notification preferences


GET /api/dashboard

Fetch overview data for user dashboard



3. An overview of the technology stack to be used

Frontend: Next.js with Tailwind CSS
Backend: Node.js
Database: Convex DB
Blockchain: Polkadot / Ink smart contracts
APIs: Polkadot.js API
Cloud Services: AWS Lambda
Containerization: Docker
Indexing: Polkadot Node/Indexer

4. Documentation of core components, protocols, architecture, etc. to be deployed
Architecture Overview:
a. User Interface (Next.js + Tailwind CSS)

Handles user input for contract addresses, wallet addresses, and events
Displays parsed event and transaction data
Manages notification preferences
Provides dashboard for monitoring overview

b. Backend Server (Node.js)

Processes user input
Interacts with Polkadot node/indexer
Manages subscriptions to smart contract events
Monitors wallet addresses for specified activities
Parses SCALE-encoded data using Polkadot.js API
Stores parsed data in Convex DB

c. Event Listener (Node.js)

Monitors Convex DB for new event and transaction insertions
Matches events and transactions against user-specified criteria
Detects relevant wallet transactions and balance changes
Triggers AWS Lambda function for notifications

d. AWS Lambda Function

Receives event and transaction data from Event Listener
Sends off-chain notifications to users (e.g., email)

e. Convex DB

Stores user data, contract information, wallet information, parsed events, and transactions
Provides real-time data synchronization

f. Docker
Containerizes the application for consistent deployment

you can find the link to our architectural document -
 https://docs.google.com/document/d/1fG6jKvaVQySdvmLzHliUQiwlTDAWX5MHSNd5L_BhouU/edit?usp=sharing
    

### Ecosystem Fit


- Developer Tools
- Whether building parachains, creating dApps, managing projects, or analyzing blockchain data, Prophe keeps you in sync with Polkadot's pulse.
- Prophe appears to meet the following needs:
   Real-time monitoring of smart contract events on Polkadot
  Wallet activity tracking for Polkadot addresses
  Off-chain notifications for blockchain events
  User-friendly interface for blockchain data monitoring
  Customizable alerts for specific blockchain activities


How did you identify these needs?
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - Blockchair , a public analytic tool with less personalized data and doesnt have offchain alerts like email , discord bots e.t.c. 
  - Prophe has more user-friendly interface, broader range of monitored activities, and unique off-chain notification system
  - It also uses  Convex DB for real-time synchronization, so developers will be at the fronteline of what happens on-chain
- Are there any projects similar to yours in related ecosystems? Yes,  Tenderly on Ethereum network

## Team :busts_in_silhouette:


### Team members

- Oluwaseun Sanyaolu
-  Eniola Ajibode

### Contact

- **Contact Name:** Prophe Team
- **Contact Email:** info@prophe.xyz
- **Website:** www.prophe.xyz

### Legal Structure

- **Registered Address:** 22, Jacob street , Yaba Lagos State, Nigeria
- **Registered Legal Entity:** Prophe Technologies LTD

### Team's experience

Oluwaseun Sanyaolu  ( Technical Architect / Fullstack Engineer ) - 

A seasoned full-stack engineer with a background in cyber security , he has a track record of building products from 0 to 1. With over 7 years of experience , He has dedicated his past 5years  to collaborating with founders and nascent teams, assuming the role of a technical lead or consultant . In his career so far , He built a AI SPORTS BETTING PREDICTOR (fela.ai) ,  a beat marketplace that allows you test the beat with a realistic voice with AI (Waves) and a tool that helps UX researchers build better products ( Research kit )

Eniola Ajibode ( Product Designer ) -

is a digital product designer with over 4 years of experience in building digital solutions for businesses.  He contributed as a key-team player  at Trality , where he designed algorithmic  charts for trading bots.  Additionally, Eniola worked with Luminovo, where he streamlined design processes, improved user experience  that helped reduced the complexity of monitoring, quoting and procuring PCBA.


### Team Code Repos

- https://github.com/prophexyz/Prophe-infra

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/prophexyz
- https://github.com/seunsanyaa

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/seunsanyaa/
- https://www.linkedin.com/in/eniolaajibode/


## Development Status :open_book:

- https://docs.google.com/document/d/1fG6jKvaVQySdvmLzHliUQiwlTDAWX5MHSNd5L_BhouU/edit?usp=sharing
- https://www.figma.com/design/4SiGenSrJg9JQ0amn4HWMv/PROPHE.P?node-id=2809-11652&t=ShjSrann25tsdoBl-0

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  3FTE
- **Total Costs:** 28,500 USD
- **DOT %:** 50%

### Milestone 1  — Frontend Development and Framework Setup

- **Estimated duration:** 3 weeks
- **FTE:**  2
- **Costs:** 6,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT 
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can add smart contract or wallet address they wish to monitor.
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the ReadME file, we will describe how to run these tests as well as quality assurance and A/B testing will be done and dashboard will be available at www.app.prophe.xyz.
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Frontend Implementation | We will ensure both mobile and desktop views are fully functional and responsive.


### Milestone 2  —  Data Indexing, Visualization and Infrastructure setup

- **Estimated Duration:** 2 months
- **FTE:**  2
- **Costs:** 22,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT 
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user canadd smart contract or wallet address they wish to monitor.
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the ReadME file, we will describe how to run these tests as well as quality assurance and A/B testing will be done and dashboard will be available at www.pkdt.prophe.xyz.
| **0d.** | Docker | We will provide a Dockerfile(s) that will include CI/CD pipelines for seamless integration and deployment that can be used to test all the functionality delivered with this milestone.
| 0e. | Article | We will publish an **article**/workshop that explains the database architecture and a system architecture on how data is being fetched and returned offchain .
| **1.** | Database design  | Set up of schemas on convexDB for efficient storage and retrieval of contract or wallet data
| **2.** | Data Indexing Framework | We will develop a comprehensive framework for analyzing smart contracts or wallets deployed on  polkadot/substrate and ensure the framework / Database  meets project requirements and provides actionable insights. .
| **3.** | Smart Contract/Wallet Analysis Framework |  Implement tools and use Indexing services (Subquery or Subsquid) for assessing real-time data, performance, and functionality of smart contracts.
| **4.** | Lambda functions |  Develop and deploy Lambda functions for an alert system focused on email delivery.






## Future Plans

We're committed to making this project sustainable for the long haul. Here's how we plan to keep things running smoothly:

We're actively seeking grants from Polkadot ecosystem foundations. These folks have been super supportive of innovative projects like ours.
We're considering a token model. A chunk of these tokens will go straight into development and maintenance. It's like our own little savings account for the project.
We're reaching out to established projects for potential partnerships. Two heads (and wallets) are better than one, right?
For our power users, we're thinking about a subscription model. This could cover some premium features or cater to enterprise needs.
We love the idea of a community fund or DAO. It's a great way to get everyone involved in supporting the project.

To keep the revenue flowing, we're looking at a few different streams:

Premium API access for our high-volume users
Consulting services for those tricky custom integrations
We're cooking up some advanced analytics tools that we think will be worth their weight in gold
And who doesn't love a good hackathon? We're planning to host some sponsored events to get developers excited about our platform

Short-Term Goals: Getting Off the Ground
We've got big plans for the near future:

We're gearing up to launch a beta version. We can't wait to hear what users think and where we can improve.
We're working on integrations with some of the coolest Polkadot projects out there. The more connected we are, the better.
Security is a top priority, so we're setting up a bug bounty program. Find a bug, get a reward!

We know documentation can be a drag, but it's so important. We're putting a lot of effort into creating guides, tutorials, and even some video content to help everyone get up to speed.
And of course, we're all about community. We'll be all over social media, forums, and events. Keep an eye out for us at blockchain conferences - we love chatting about what we're building!
The Long Game: Where We're Headed
We're dreaming big for the future:

We want to support all the Substrate-based chains out there, not just Polkadot.
We're keeping our finger on the pulse of user needs and tech advancements. As things evolve, so will we.
DeFi, NFTs, whatever comes next - we want to be ready for it all.

We're not just building a tool; we're nurturing an ecosystem. We want to see a thriving open-source community around our project. Our goal is to become the go-to indexing solution in the Polkadot world and beyond.
Enterprise-Grade Features: We Mean Business
We know organizations have specific needs, and we're here to meet them:

We're building robust access controls and multi-user management. No more sharing logins!
Security and compliance are top priorities. We're implementing enterprise-grade measures to keep everything locked down tight.

And for all you data nerds out there (we say that with love), we're working on some pretty sweet analytics and reporting tools. Customizable dashboards, predictive models - the works.
For the Developers: Our SDK Plans
We love our devs, so we're putting a lot of effort into creating a top-notch SDK:

We're starting with JavaScript, but Python and Rust are on the roadmap.
Consistency is key, so we're making sure the API design is smooth across all languages.
We're big believers in "show, don't tell," so expect plenty of code examples and extensive documentation.

We're also planning regular workshops, Q&A sessions, and we're setting up a dedicated developer forum. We want to create a space where our community can share ideas, contribute, and grow together.
Our Team: The Folks Making It Happen
We've got a stellar team working hard to bring this vision to life:

Our lead developer is the architect behind it all, keeping our tech stack cutting-edge.
We've got frontend and backend specialists making sure everything runs smoothly and looks great.
Our blockchain experts are deep in the Polkadot ecosystem, optimizing every integration.

On the business side, we've got folks dedicated to forging partnerships, spreading the word, and making sure our community is thriving.
Looking Ahead: Our Roadmap
We're excited about what's coming up:

In the next 3-8 months, we'll be launching our beta and getting our JavaScript SDK out there.
Within a year and a half, we're aiming to support Python and Rust, roll out some advanced simulation features, and lock in partnerships with major Polkadot projects.
Long-term, we want to be fully integrated with all major Substrate-based chains and start exploring other blockchain ecosystems.




## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Twitter


