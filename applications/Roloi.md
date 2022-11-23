# Roloi

- **Team Name:** NeoPower
- **Payment Address:** 0x1f5CE2eDdaAAe75ff62729feE50F861bCDC0b62e (ETH Network -> **USDT**)
- **Level:** 2

## Project Overview :page_facing_up:

### **Overview**

Roloi is a real-time finance protocol that allows users to stream money from one wallet to another.

![1-stream](https://user-images.githubusercontent.com/101722282/172263099-2a4ab9fa-184a-43c7-ad70-adb1f9c8ae48.png)

A user only needs to configure a recipient, amount and end date to **create a stream**. Then, the recipient will see the available balance increase in real time.

#### <u>**Why money streaming?**</u>
***Time acts as a restriction for every money related operation***: Monthly salaries, daily price candles, weekly token airdrops, billing cycles for subscriptions, etc.

Some **problems** with this perception are:
1. Workers have to wait until **payday** to get their salary
    * :-1: money can run out throughout the month
2. Service subscriptions have a hard **billing cycle** 
    * :-1: There is no simple way to pause a subscription when not being used
3. Crypto projects apply **unlock dates** for token distribution 
    * :-1: People tend to dump the token on that date

In Latam, we are used to living in **unstable economies** with weak fiat currencies. In Argentina, we witness every day how people struggle to get to the end of month, from friends not being able to go out for a drink because they were short on cash to people having more than one job to pay the rent.

Blockchain technologies allow us to solve these problems with the **real-time finance** concept in a simple and secure way.

#### <u>**Polkadot Ecosystem**</u>
Roloi would be the first real-time finance DApp on Polkadot. It will enable many streaming features and encourage people to start thinking about **money as a “fluid” asset**. This brings up new ideas like **“salary stream”**, **“real-time subscriptions”** and **“streamable token distribution”**.

### **Project Details**

#### <u>**Demo**</u>
Roloi Demo Environment: [demo.roloi.money](https://demo.roloi.money/app).

You can also check our [Youtube Demo video](https://bit.ly/roloi-demo-video).

Roloi started as a protocol for the Terra ecosystem, our demo environment requires connecting a Terra wallet.

#### <u>**Screens**</u>
#### Dashboard

![2-demo-dashboard](https://user-images.githubusercontent.com/101722282/173199437-3ec1ac6c-33a7-4f62-bb6c-789fddf55754.png)

#### Stream creation

![3-demo-stream](https://user-images.githubusercontent.com/101722282/173199462-7999e4bc-d7a7-4c67-8708-05845b65b33d.png)
![4-demo-stream](https://user-images.githubusercontent.com/101722282/173199464-57cc0639-4087-45d9-bb2f-a75984583b65.png)
![5-demo-stream](https://user-images.githubusercontent.com/101722282/173199459-512fdf19-d9e5-4be1-942e-05190c73fe89.png)
![6-demo-stream](https://user-images.githubusercontent.com/101722282/173199460-234632e3-886a-432a-8e57-03b4ff8772fc.png)

#### <u>**Technology Stack**</u>
![7-tech stack](https://user-images.githubusercontent.com/101722282/173199614-0592b4ef-9f01-45d5-9f85-17659985a294.png)

The **UI** will be a **Next.js Progressive Web App (PWA)** that enables both support for desktop and mobile devices, providing a smooth user experience.

The current version of the **smart contract** was built using **Rust** and **CosmWasm**. We will migrate the smart contract to an **ink!** version.

#### <u>**Data models**</u>

Roloi’s smart contract provides the necessary features to stream tokens and withdraw from created streams.

The main model is the **“Stream”**:
* stream_id: u64;
* creator_wallet: Address;
* recipient_wallet: Address;
* original_amount: u128;
* current_amount: u128;
* start_date: u64;
* end_date: u64;

#### Methods

**create_stream**

<u>Input</u>
* recipient_wallet
* end_date
* funds

<u>Action</u>: updates contract storage with a new stream.

**recipient_stream_withdraw**

<u>Input</u>
* stream_id
* withdrawal_amount

<u>Action</u>: validates withdrawal request. If valid, returns funds to recipient.

### **Ecosystem Fit**

#### <u>**Project fit**</u>
Smart Contract DApp

#### <u>**Target audience**</u>
Own user base, including:
* Companies: paying salaries
* Crypto teams: distributing tokens
* Freelancers: receive payments
* Merchants: offering subscriptions
* Retail investors: trading strategies
* Mainstream users: fiat users (through external fiat ramps)

#### <u>**Solutions**</u>
* Real-time salary
* Service subscription management
* Token distribution strategy (real-time vesting)
* Automated trading strategies

#### <u>**Similar projects**</u>
* We haven’t found any other similar projects in the ecosystem
* We think there is an opportunity of collaborating with the [OAK network](https://oak.tech/) team, since their parachain is focused on payment automation and we could leverage that feature

## Team :busts_in_silhouette:

### **Team members**
* **Brian Sasbon** (Co-Founder & CEO) - [Linkedin](https://www.linkedin.com/in/briansasbon/)
* **Pablo Corrado** (Co-Founder & CTO) - [Linkedin](https://www.linkedin.com/in/corradopablom/)
* **Hernán Hermida** (CGO) - [Twitter](https://twitter.com/MilsteinmAb)

### **Contact**

* **Contact name**: Brian Sasbon
* **Contact email**: bsasbon@neopower.digital
* **Website**: https://www.neopower.digital/ 

### **Team's experience**
#### <u>**Founders**</u>

We are Brian and Pablo, **Software Engineers** with a Degree from the National Technological University (UTN) from Buenos Aires, Argentina, and have more than **10 years of experience** as developers for many different projects. We are currently working at a software factory from Buenos Aires as **Full-stack Developers** and **Team Managers** for US traditional finance clients like Morgan Stanley, Visa and JP Morgan.

5 years ago **we founded NeoPower**, our own software company to work for different clients building freelance teams of designers, developers and testers.

We work with different **web and mobile technologies** such as .NET, Java, Node.js, React, Angular, SQL, MongoDB. And different infrastructures including AWS and Azure.
We started our **crypto journey** more than 2 years ago by learning Solidity and then Rust to build smart contracts for different blockchains. 

#### <u>**CGO**</u>
**Hernán S. Hermida** (aka [Milstein](https://twitter.com/MilsteinmAb)) is a **DeFi enthusiast** who started his **crypto journey** more than 2 years ago. Currently he **hosts #DeFiSpace** a weekly Twitter Spaces cycle, with more than 25 episodes, interviewing builders from different multi-chain projects.

He is an active participant in many crypto communities such as [DeFi Argentina](https://twitter.com/DeFiArgentina) and [NFTamina](https://twitter.com/NFTamina). 

Hernán joined the Roloi team to help with the growth and networking strategy, leveraging his knowledge about DeFi and communities.

## Development Status :open_book:

### **Progress**

Roloi started its journey as a protocol for the Terra ecosystem. During 2 months we developed the first version of the platform.

We built a **first version** for the Terra ecosystem including UI and Smart contract.
* **CosmWasm Smart contract** deployed in Terra Testnet
    * Stream creation
    * Withdrawal from stream
    * Security and time validations
* **Next.js UI** deployed in a [demo environment](https://demo.roloi.money)
    * Landing page
    * Dashboard (mock)
    * Smart creation flow
    * Stream list (mock)

We also created a [Youtube Demo video](https://bit.ly/roloi-demo-video).

After the Terra ecosystem crashed, we decided to pivot and explore other opportunities.

### **Pivoting**
We decided to pivot and continue **building Roloi on Polkadot** since we believe that it’s the most beneficial decision for Roloi in the long term.

#### <u>**Smart contract**</u>
We are currently researching the ecosystem. We defined a strategy to migrate our Rust smart contract to Polkadot by building an **ink! smart contract**.

#### <u>**UI**</u>
We are working on creating our own UI abstractions to easily integrate any blockchain in Roloi. This includes:
* Connecting wallet
* Querying the blockchain
* Creating transactions
* Displaying metadata like icons and links

## Development Roadmap :nut_and_bolt:

### **Overview**

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 20,000 USD

### **Milestone 1 — Migration of smart contract from CosmWasm to ink!**

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | **License** | MIT |
| 0b. | **Documentation** | Our code will include inline documentation for each smart contract method. |
| 0c. | **Unit tests** | Core functions will be fully covered by unit tests to ensure functionality and robustness. |
| 1. | **Smart contract source code** | We will deliver the migrated version of the Roloi smart contract (ink! + Substrate). The following features will be included. |  
| 1a. | Create stream | Function that creates a stream by using a recipient wallet, an amount and an end date. The stream will have a unique ID and will store both the original balance and the current one (after withdrawals). |  
| 1b. | Withdraw from stream | Function that validates if the requested amount is available and, in that case, pays the amount to the recipient. |  
| 1c. | Get stream by ID | Function that returns the stream information. |  
| 2. | **Article** | Medium article explaining the development experience while migrating from CosmWasm to ink! |  

## Future Plans
![8-future plans](https://user-images.githubusercontent.com/101722282/173200843-b0df45e6-cf08-4665-bd5f-a4cff8cb2724.png)

Some features included in our **roadmap**:
* Yield strategies
    * Payer gets yield over the streamed amount by using strategies like liquid staking
* Stream management features such as pause, resume and cancel
* Private streams by using a mixer protocol
* QR Code payments
* Push notifications to mobile devices, notify about streaming activity
* Connect existing fiat ramps to onboard mainstream users
* Payroll management system to manage salaries and employees
* Recurrent payments
* Stream redirection: redirect available balance to a different wallet without withdrawing
* Trading automation: strategies like DCA

Our roadmap will vary depending on user and investors feedback. We will prioritize features needed in the Polkadot ecosystem.

## Additional Information :heavy_plus_sign:

### **Grants Program**
We heard about the Grants Program through Twitter, and through personal recommendations from Parity developers we decided to apply for an initial grant to start building our product on Polkadot.

### **NeoPower**
Web: https://www.neopower.digital/ 

**Roloi** is the first blockchain project from **NeoPower**, the software company we founded 5 years ago.

Our goal for NeoPower is to become a community-based Web3 focused company that provides:
* **Educational platform**: technology content in the form of twitter spaces, documentation, workshops and tutorials to onboard builders to Web3
* **Digital platform**: build teams to work on different projects and bring new ideas close to investors and ecosystems. We will leverage NeoPower’s experience and tools to easily provide a framework for builders to focus more on creating and less on methodology.

Investors supporting Roloi would also be supporting NeoPower to help onboard local talent to Web3.

At NeoPower we focus on Security and User Experience (UX) to build the best products.
