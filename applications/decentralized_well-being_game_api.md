# Project Overview

## Project Name

Decentralized Well-being Game API

## Team Name

Health Hero

## Payment Address

0xc7ad868f9b421dabf7cdaa0e6c508ff74e2f1cfd (USDT)

## Overview

### Introduction

Well-being engagement is up and rising. With a more health-conscious generation of users, they are wanting to experience health engagement in different areas of their lives. Health Hero, as a digital health engagement company, seeks to grow a well-being focused game API that engages developers with health-related development tools. With more people now working remotely, health engagement has never been more important. Healthcare is a multi-billion dollar industry that still struggles with delivering tools to consumers to engage with their health in their own way. IoT, omnichannel, chatbots, and other interactive interfaces are just a few to mention for the opportunities surrounding the use of Health Hero&#39;s Game API.

### Project Details

The Health Hero Game API provides the opportunity for developers to build games, apps, and features using well-being data endpoints that are centered around steps and fitness data. The play-to-earn approach of the API endpoints, allows the users to earn points in different areas such as XP (Experience Points), HP (Hero Points), Levels, Life, Star Power, badges, and parcels of land that ultimately rewards the user with digital assets (collectibles/NFTs) that are valued in Polkadot currency and Using State Channels to send out the payouts to users from the treasury based on their authentic health data.


API specifications of the core functionality

1. Endpoints will provide the following data:
  1. IoT data: step trackers, to include Google Fit, Apple Health, Garmin, Fitbit, Peloton, Headspace, Calm, and more.
  2. Activity data
  3. Gamification data points such as XP, HP, levels, life, star power
  4. Smart contracts customization based on health data engagement

## Ecosystem Fit

**Where and how does your project fit into the ecosystem? / What need(s) does your project meet?**

With the growing need of well-being engagement tools, a major pain point is the lack of shareability, access, and implementation of wellness-related features into games, apps, and other online applications. From the users&#39; perspective, the delivery of gamification and rewards is also poorly present in today&#39;s games and apps ecosystems. Not only would the developers be able to create and build apps off of our API, but they will have the tools necessary to create customized smart contracts that will deliver a unique and evolving experience to the users based on their own health engagement within the app or game the developers created. These smart contracts will be used against the minting of personalized collectibles that will evolve with a series of attributes (XP, HP, levels, etc.) which are then translated into earnings (play-to-earn) for the users.

**Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp&#39;s userbase, yourself)?**

- Game developers

- Blockchain engineers

- Cryptocurrency developers

- In-house

- Game artists

**Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

- At the moment, there are no other projects similar to ours in any ecosystem.

## Team

### Team Members:

Team Leaders:

- Umair Azhar (CTO)

- Anthony Diaz (CEO)

Team Members:

- Angel Leon (Product and UX)

- Jon Izquierdo (Senior Full Stack Engineer)

### Contact

Contact Name:

- Anthony Diaz (CEO)

Contact Email:

- anthony@gohealthhero.com

Website:

- gohealthhero.com

##Legal Structure

**Registered Address**

- Health Hero, Inc, 548 Market St, Suite 15351, San Francisco, CA 94104

**Registered Legal Entity**

- Health Hero, Inc

### Team&#39;s experience

- Mr. Diaz has over a decade of experience in leadership in healthcare, global product and platform development, and digital consumer engagement. Repeat founder. People leader that commands an uncanny sense of global business and brings global products to life that generate profit.

- Mr. Azhar is a software engineer with over 7 years of experience. Mr. Azhar has a passion for back-end development with great instinct for reflecting code on user interfaces and user experience, Artificial Intelligence, machine learning, innovative technologies, and development operations. Strong leader with a tactical vision on integrating latest technologies into highly complex products. Mr. Azhar has driven development efforts for large teams of engineers and has an acute eye for security, product, and technology architecture

- Mr. Leon is a U.S. Navy veteran, product, operations, and innovation leader overseeing teams that manage revenue, strategy, business, partnerships, information technology, product management, policy, security, workplace resources, and other cross-functional operations. Angel&#39;s passion is on how to operationalize and productize integration technologies, patterns, best practices, and user interfaces. His experience includes a decade+ years in health IT, working with a wide spectrum of customers, including IDNs, payers, life sciences companies, and software vendors, with the goal of improving outcomes and reducing costs by aggregating and analyzing clinical, claims, and cost data.

### Team Code Repos

- Umair Azhar: [https://github.com/iumairazhar](https://github.com/iumairazhar)

### Team LinkedIn Profiles

- Umair Azhar: [https://www.linkedin.com/in/umair-azhar-a72259206/](https://www.linkedin.com/in/iumairazhar/)

- Angel Leon: [https://www.linkedin.com/in/angelgleon/](https://www.linkedin.com/in/angelgleon/)

- Anthony Diaz: [https://www.linkedin.com/in/adiaz123/](https://www.linkedin.com/in/adiaz123/)

---

## Development Status

## Development Road Map

### Milestone 1 - Exposing Game API endpoints

Estimated Duration

- 4 weeks

FTE

- 2

Costs

- $25,000 USD

### Purposed Diagram
![Architecture  Diagram](https://gohealthhero-production.s3.amazonaws.com/Web3.png)

### State Channels Implementation
![State Channels (2)](https://user-images.githubusercontent.com/44548958/144947081-88d681a9-e9c7-419d-96b0-8ec68fda6687.png)


| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a | License | Apache License 2.0 |
| 0b | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can run a local instance and / or fetch metrics using the application. |
| 0c | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e | Press Release | We will create a press release to inform the audience. |
| 1a | Ink Contract Development | A contract with all required functions for service written in ink!                                                               In our ecosystem, smart contracts will be utilized in a variety of ways within the platform such as: To store user data smart contracts will need to be used via state channels for all aspects of the relationship between the data store and the user. Fitness games within the Ecosystem will utilize smart contracts to pay out and reward winners or games and challenges. A multi-signature smart contract will hold all DAO funds and payout based on milestones reached. Users will be rewarded for logging and tracking well-being through simple actions such as taking a picture of food, logging breakfast via smartwatches, or through slack. |
| 1b | Services Implementation | API for developers to: 1. store user data to Postgres Database 2. serve API to users to collect the Health Data 3. interact with the Smart Contract 4. Written in Rust/TypeScript5. Rust/TypeScript unit tests|
|1c| State Channels| We will be implementing Perun Polkadot Pallet as a part of our Ink Smart Contract and will use RUST language for the backend implementing these state channels.These channels will allow us to make transactions to the users for their payouts from the treasury based on their authentic health data. As state channels will be established between treasury and users to handle frequently occurring transactions for their payouts
