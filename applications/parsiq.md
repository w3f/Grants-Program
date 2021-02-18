# Open Grant Proposal
* **Project Name:** PARSIQ
* **Team Name:** PARSIQ
* **Payment Address:** 0x7581C8a016Dd2bB49d18375b30FE6dbb27F3f009 (DAI)

## Project Overview :page_facing_up: 

### Overview
PARSIQ is a monitoring and automation platform that bridges blockchains and off-chain, helping users make blockchain data easily consumable and actionable. We allow anyone to monitor blockchain events in real time  and set up triggers that if a type of event happens on the blockchain, the data is processed, transformed according to the user's conditional logic, enriched with off-chain data and then delivered to an app or device of choice for further actions. PARSIQ further extends the functionality of decentralized networks, allowing to apply if-this-then-that logic for real-time blockchain transactions at scale, with programmable off-chain reactions to those events.

The goal of this integration is to empower players in the Polkadot ecosystem to easily build monitoring and automation solutions (integrated with a variety of off-chain data providers, web services and apps) on our platform and as a result, save valuable time, save money and avoid complexities of monitoring events on the blockchain at scale. The PARSIQ solution is blockchain-agnostic and primed for blockchain interoperability which we believe makes it a good fit for Polkadot integration.

As a Blockchain agnostic company with superior expertise, we have integrated a number of different Blockchains and are now planning to add support for Polkadot and Kusama. We aim for adding the support to monitoring DOT transfers and other events happening on the DOT relay chain and with the ability to apply additional filters (i.e. by transfer amount) and data enrichment (i.e. market data, risk data, user data).

For those who want to run PARSIQ for Polkadot on premise - we will open source some of the PARSIQ components. For those who are seeking simplicity, we will provide a comprehensive way to integrate applications with Polkadot and Kusama via PARSIQ’s hosted solution. 
 
Since our solution has multiple levels of complexity, everyone including individuals, businesses, DeFi projects and traditional companies will be able to take advantage of its features. Our ultimate goal is to push forward the mass adoption of blockchain technology by providing the solution. We want to give everyone the ability to understand and manipulate blockchain data streams. With PARSIQ we are making it easier for everyone to integrate blockchain infrastructures into existing businesses with an additional layer of monitoring and automation for blockchain-specific asset management.

### Project Details 
PARSIQ has built similar architecture before. The most relevant example is the PARSIQ platform itself (product can be tested at portal.parsiq.net). It is already functional for BTC + forks, ETH + tokens among other blockchains. Brief overview of what solution we created for working with the Ethereum blockchain: Within PARSIQ we've created an instrumented version of Parity's EVM at opcode level and we got a lot of interesting events that are far more expressive than anything observed within blockchain even using Etherscan. Then we decided to formalize an event stream processing and created a DSL for it called ParsiQL - strongly typed language inspired by LINQ and ReactiveX. Then we designed an approach how to parse/filter/map/reduce sequences of strongly typed events in combination with indexed databases (thus allowing us easily filter events on basis of even 1M records containing e.g. addresses of interest and their attributes which are consumable within ParsiQL). Thus, we implemented an Activation engine that allows users automatically activate their triggers written in ParsiQL on the basis of user-managed datasets (via REST API) and provided arbitrary conditions. We even infer appropriate indexing of user datasets from WHERE-part conditions of ParsiQL code. Users can filter/map/reduce a strongly typed event-stream enhancing an intermediate data with 3rd-party data services like market prices, risk scoring, etc. And finally delivering it to the selected transport like web-hooks, different messengers (applying formatting template), AMQP, etc. From a technical perspective PARSIQ corresponds to a live product. It is polished and even monetized, which allowed us to validate our approach to the market.

We will split the Blockchain Integration process into 3 stages:

* **Blockchain Layer expansion**
* **Core services support**
* **Portal enhancements**

#### Blockchain Layer expansion
We take the most suitable for our stack and infra Blockchain client and patch it to turn it into an Instrumented Node. It allows plugging in this Instrumented Node to the Core services of our Platform to keep the Blockchain Activity based events circulating. Patching the client by forking it on a software level and editing the codebase is not the only way to get started and other approaches exist.

Polkadot Node itself provides a sufficient API to gather the Block data with related Events. We are introducing a new service that will have its own PARSIQ custom tailored API and will act as a proxy between the rest of PARSIQ Platform and Polkadot Node. Underneath mechanisms of this service will be combining the data from multiple related API calls to the Polkadot Node, like

* https://polkadot.js.org/docs/substrate/rpc/#getblockhash-blockhash-signedblock
* https://polkadot.js.org/docs/substrate/storage#events-veceventrecord

And in the context of monitoring DOT Transfers we will monitor specifically (at the level of new service)  for the data related to the **Balances** module and 8 related Events.

#### Core services support
##### Stream & Events
Our domain-specific programming language ParsiQL is based on the manipulation of Streams of Events (i.e. ETH Transfers, ERC-20/ERC-721/… Standards based Token Transfers) and every new Blockchain integration increases the amount of Streams our Users can have access to.

In order to add a Stream - we have to research what kind of data we have access to by polling Instrumented Node API or (in case of Polkadot - new Proxy-like service) and then find a way to organize its data into meaningful Streams, for example:

* for ETH Transfers - *Transfers*
* for ERC-20/ERC-721/… Standards based Token Transfers - *TokenTransfers*
* for BTC Transfers - *BitcoinTransfers*
* etc....

Similarly, for Polkadot and Kusama networks for DOT Transfers monitoring we are planning to add **PolkadotTransfers** & **KusamaTransfers** (with fields that we will find relevant for Users i.e. **from**, **to**, **amount** etc...). In order to accomplish that we will implement a specific library that will be taking pre-filtered yet raw data and transforming them into specific structures that later serve as a base for becoming the actual Events from given Streams (an example for Ethereum & Binance Smart Chain can be found here https://github.com/parsiq/block-tracer).

This Streams Users will use to attach to Smart-Triggers and power their Workflows.

##### User Data
We allow Users to store the User Data, where Users can place monitoring-related data at first (like addresses) and additional data also. Introducing new types for User Data is crucial, since Users willing to monitor Polkadot and Kusama will be operating with the Account addresses belonging to the network. For example,

* Ethereum - *eth.address* (Ethereum’s Externally Owned Account address or Smart Contract address)
![Ethereum User Data](https://i.imgur.com/So72Hyn.png)
* Bitcoin - *btc.address* (Bitcoin Account)
* etc...

For Polkadot and Kusama we plan to introduce **polkadot address** & **kusama address** (**dot.address** & **ksm.address** respectively) supported on different kinds of records (Primitive, Structs, Tables):
![Polkadot User Data](https://i.imgur.com/PmwTEKO.png)

##### Communications Channels
When Smart-Triggers Workflow gets executed, then finally it reaches to the point where the Resulting Event(s) is/are produced and ready for the delivery to the end User. It is necessary to support the Event delivery on as many Transports as possible. In this step, we will be seeking for possible Format Options to introduce, so that we (from the standpoint of PARSIQ Delivery services) could deliver the data to our non-tech Users in a readable or even enriched format.

* **dot** and **ksm** Format Options to be able to convert raw Planck (smallest unit) values to the familiar native currency (DOT or KSM)
* **polkascan** address formatter, so that we could have URLs to Polkascan address information instead of having just plain address

Again, introducing an example with Ethereum and Telegram (where both eth (to convert WEI into ETH) and etherscan (to have Etherscan link instead of plain/raw address) Format Options are used):
![Telegram Message from PARSIQ Bot](https://i.imgur.com/hzEvhFF.png)

#### Portal enhancements
And all this work that will be introduced in the internal mechanisms of PARSIQ Platform are wrapped up with introducing necessary updates and upgrades on the UI side of the Portal.

We plan to add the support for 

* PARSIQ Templates

![PARSIQ Template](https://i.imgur.com/s1scEch.png)

* Quick Monitoring Wizard

![Quick Monitoring Wizard](https://i.imgur.com/7MNO20N.png)

* User Data

### Ecosystem Fit 
There are not many direct competitors and certainly none to our knowledge that support Polkadot and Kusama chains. PARSIQ system is not querying the blockchain as a database of historical events, it is performing transformations on live streams of events (which are happening or about to happen) with automation triggers (push-based and reactive), user data and direct integrations with on- and off-chain apps, devices, web services. 
 
From a technical perspective we are advocating an approach that gets increasing traction in developer communities - operations on live streams of events. It is not simply an IFTTT, it's a whole ecosystem with pluggable data-sources, and ability to backtest your analytics expressed via ParsiQL - a high-level language compiled into lower-level streaming primitives (queries, queue orchestration, etc), that is available from our Web IDE, and the variety of delivery methods.
 
From a usage perspective: our main difference from our competitors is a dual strategy. We've seen the rise of Microsoft Access as a system where you can build your rather good (sic!) database WITHOUT ANY CODING, yet you can unleash its full power when you find yourself CODING using underlying scripting language. And we believe in that approach. Ability to build an analytics/reacting system without any coding, and then customize it in an arbitrary way using code - is our offering to users.
 
Additionally, our unique offering is dynamic monitoring sets that scale up to millions of addresses and fully managed by users via an API and real-time integrations with off-chain data providers (address risk databases, market data providers) as well as off-chain applications and web services to help users create the perfect triggerable workflows.


## Team :busts_in_silhouette:

### Team members
* Team leader: Alan Durnev
* Team members: Anatoly Ressin, Alexey Rehov, Simon Yakunin, Tom Tirman

### Contact
* **Contact Name:** Tom Tirman
* **Contact Email:** tom@parsiq.net
* **Website:** https://parsiq.net/

### Legal Structure 
* **Registered Address:** Registered Address: 3159 Tortola, Road Town British Virgin Islands
* **Registered Legal Entity:** Registered Legal Entity: PARSIQ Ltd.

### Team's experience
PARSIQ tech team consists of highly professional blockchain developers with substantial background in scalable data-structures and algorithms (references - https://mappost.eu & https://files.fm), smart-contract development and audit (references Civic.com Secure Identity Platform, Bitfury Exonum), network-tech (references NOIA.network, Mysterium.network), crypto-exchanges (references CoinMetro.com, Falconix). PARSIQ co-founder and chief blockchain architect Anatoly Ressin taught advanced computer science courses (including Compiler Design and Functional Programming) at Transport & Telecommunication Institute in Riga, Latvia for over 13 years.
PARSIQ team members also have wide experience in DevOps implementation: Multi-cloud deployments, pipeline automation, high-load systems (references - AirBaltic, Citadele Bank, NetCompany, Accenture, Blue Orange Bank). PARSIQ's analytics specialist is a creator of Graphdo.net - comprehensive financial data analytics engine for AML and Enhanced Due Diligence.

### Team Code Repos
* https://github.com/artazor
* https://github.com/Zorato
* https://github.com/artjoma
* https://github.com/syakunin
* https://github.com/klesun
* https://github.com/alan-parsiq
* https://gitlab.com/parsiq-public
* https://github.com/parsiq


### Team LinkedIn Profiles
* https://www.linkedin.com/in/anatolyressin/
* https://www.linkedin.com/in/alan-durnev-561914203/
* https://www.linkedin.com/in/alexey-rehov/
* https://www.linkedin.com/in/tommatta/
* https://www.linkedin.com/in/tom-tirman-42037917b/
* https://www.linkedin.com/in/andre-kalinowski/

## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 4
* **Total Costs:** 28 000 USD

### Milestone 1 - Blockchain Layer expansion
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 13 000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | GNU Lesser General Public License v2.1 |
| 0b. | Documentation | The open-sourced Platform and Polkadot interconnection service will have a README file with the general description, API, examples and instructions to run it |
| 0c. | Testing Guide | The description will also have instructions on how to run the tests | 
| 0d. | Article/Tutorial | On https://blog.parsiq.net/ we will have a general post about Polkadot Integration |
| 1. | Implement and open-source PARSIQ Platform and Polkadot/Kusama Nodes interconnection service | This service will stand between our Platform and Polkadot/Kusama Nodes and have a separate API to work with |  

### Milestone 2 - Core services support & Portal enhancements
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 15 000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | The mix of <ul><li>Proprietary</li><li>GNU Lesser General Public License v2.1 (for the open-sourced library for traversing API results received from the PARSIQ Platform and Polkadot interconnection service)</li></ul> |
| 0b. | Documentation | <ul><li>The ParsiQL documentation for the added Streams (i.e. PolkadotTransfers) will be added to the https://docs.parsiq.net/parsiql)</li><li>The library will have the description and examples</li></ul> |
| 0c. | Testing Guide | The open-sourced library will have tests and guides on how to run them | 
| 0d. | Article/Tutorial | <ul><li>On https://blog.parsiq.net/ we will have a general post about Polkadot Integration</li><li>https://docs.parsiq.net/parsiql/code-samples will have ParsiQL code samples monitoring DOT Transfers</li></ul> |
| 1. | Implement and open-source the library to work with Block Data received from the PARSIQ Platform and Polkadot/Kusama interconnection service API ||
| 2. | Structure the PolkadotTransfers \ KusamaTransfers Stream to be used within ParsiQL | Add a section for Polkadot & Kusama in https://docs.parsiq.net/parsiql/on-chain-streams/native-streams on the structure (type) of the Event from this Stream (+description) |
| 3. | Upgrade User Data, Communication Channels and Portal UI to support Polkadot & Kusama that from now can be completely used from PARSIQ Portal | This is a huge step, consisting of many deliverables. They are being connected with each other to have a working result. We will provide a Demo where the monitoring for  Polkadot and Kusama is done in real-time |


## Future Plans
It is important to note that after this integration we will have a strong foundation to keep adding other Polkadot Modules and Events on demand for Monitoring purposes. It will be done the way that Users could have problem-solving Smart-Triggers and Workflow Automations.

Within the scope of this application, PARSIQ will be adding support for the DOT and KSM chains. As part of our subsequent applications, we will be adding support for various substrate parachains. We have already contacted multiple teams who will be running the parachains and received additional validation from them.
