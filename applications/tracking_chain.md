# Tracking Chain

- **Team Name:** Federico Cicciarella
- **Payment Address:** 15ofeBpTMQ7MNbqViRRRbkVz2y3eQt8SCgBy6yVVfsTKhMn2 (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

During this time, I have had the opportunity to work with several companies that wanted to adopt blockchain technology. However, I have observed that they often face challenges that hinder their adoption, mainly due to the following reasons:

 - Difficulties integrating legacy software with blockchain, such as dealing with long confirmation times or scalability issues when handling a large number of transactions. I have personally spoken with clients who need to handle over a million transactions per year, with peaks of thousands of requests per minute.

 - Concerns regarding wallet security, custody, accounting management, and the purchase of tokens for transaction fees.

 - Challenges in querying the blockchain to retrieve or interpret transactions over time, lacking a user-friendly interface.
 
 - High cost of using the blockchain (those who are not familiar with the blockchain world have heard of ethereum and how much it costs to do operations on it)

There is a significant market potential for smart contracts, such as tracking the lifecycle of a product or certifying the immutability of sensitive files, among other use cases. While these challenges may seem trivial, integrating existing and well-tested software with experimental projects like blockchains (this is the common thinking of web2 companies) often leads to insurmountable issues, resulting in project abandonment.

Our project offers an intuitive and user-friendly tool to simplify blockchain integration for all businesses.

We are aware of the interest expressed by various companies in using blockchain technology, and we want to demonstrate how easy and advantageous it is to integrate blockchain into their business processes.

We aim to convey that adopting blockchain is no longer a complex and costly process but can be accomplished effortlessly with our intuitive tool, leveraging the scalability capabilities of Polkadot and its Parachains.

Our ultimate goal is to help companies embrace the benefits offered by blockchain, opening the doors to a new way of doing business. We firmly believe that our project can be a turning point for widespread adoption of blockchain in the corporate sector, simplifying the integration process and providing a seamless and positive experience.

We have already scheduled several demos with our clients, including one that has requested a demonstration of how to support a high number of transactions launched within a short timeframe and how to effectively manage them.

The client's request highlights the importance of efficient transaction management in a high-volume blockchain environment.

Furthermore, we will illustrate our transaction management strategies that enable fair and optimized resource allocation, avoiding overload issues and ensuring a continuous flow of operations.

### Overview

To address these challenges, I have decided to create a web application specifically designed for companies and users who are eager to venture into the world of blockchain. The application aims to bridge the gap between "Web2" and "Web3" by providing a simple API call to feed data into smart contracts, with an immediate response providing a unique identifier.

To achieve this, I am developing a microservices architecture capable of handling millions of requests and scaling to accommodate peak traffic. Over the years, I have gained significant experience in building such systems, including a web application that processed tens of thousands of daily orders (including data-heavy files like photos for immediate printing) and effectively scaled during peak periods (e.g., the holiday season).

My plan involves creating an endpoint that can be accessed from Web2, exclusively responsible for collecting data values to be inserted into a smart contract. Currently, I am focusing on storing key-value pairs; however, I intend to dynamically handle more complex cases in the future. In this way, the Web2 user will be relieved of any concerns regarding the bottleneck presented by the blockchain, as their task will already be completed (which we address through our bridge development), we can manage an unlimited number of requests per second, ensuring a smooth user experience. Upon successful transaction completion, we will send a registration notification to the customer, including all relevant onchain transaction data. Additionally, we will provide a graphical tool enabling users to verify their transactions onchain, ensuring transparency and data correctness.

The application will handle all the necessary infrastructure setup for transaction transmission, including endpoint creation, failed transaction recovery, private key security, among others. The customer's role will be to select the appropriate smart contract type and chain for deployment, based on their future needs. For instance, in the future, certain data inputs may generate NFTs representing the final products, which could be utilized in other contexts through interoperability. Please note that this initial idea will not be present in the alpha version. Furthermore, we can leverage interoperability to store data in backup smart contracts created on secondary blockchains in case the primary chain faces congestion or other issues.

### Project Details

The project will consist of 9 microservices, each with a well-defined task.

![TrackingChainSchema](https://github.com/TrackingChains/TrackingChain/assets/58514549/919aebe1-c0d6-4cbf-bb02-097920863a37)  

![StepTracking](https://github.com/TrackingChains/TrackingChain/assets/58514549/f8f4c074-7bb3-4231-8a02-367b7e781b89)

1. Triage API:
   - Purpose: Receives tracking requests, consults the registry, and associates a destination smart contract with each request based on a Profile.
   - Scalability: Can scale by increasing endpoints during high load periods due to no concurrency access issues.

2. Aggregator Pool Worker:
   - Purpose: Moves tracking requests from Triage to the Pool after pre-filtering.
   - Scalability: Cannot scale due to concurrent access management but can handle large workloads efficiently.

3. Tx Generator Worker:
   - Purpose: Sends transactions on-chain for tracked items in the Pool.
   - Behavior: Doesn't wait for transaction responses, only saves the returned Hash.

4. Tx Watcher Worker:
   - Purpose: Monitors tracked items in the Pool with associated transactions for finalization.
   - Outcome: Inserts successful transactions into the transaction Registry; performs recovery actions for failed transactions.

5. Frontend Admin:
   - Purpose: Manages the creation of associated accounts.

6. Frontend Monitor:
   - Purpose: Monitors and manages tracking statuses in various states.

7. Frontend Registry:
   - Purpose: Provides a user-friendly visualization of all tracked codes with direct links for on-chain verification.
   
8. Web Application:
   - Purpose: Give the possibility to enter or view the status of onchain traced codes. (it will be fundamental for the demo that will have to lead us users to use the blockchain).
   
9. Tx Monitor Worker:
   - Purpose: Monitor the status of transactions to proceed with any automatic actions or to launch alerts in the event of transactions that cannot be managed automatically. 

### **Overview of the technology stack to be used**
We are planning on using a combination of blockchain technology, cloud services, and front-end development tools to build a performant, secure, and user-friendly platform.

**Blockchain Layer:**
- **Smart Contracts**: Ink! and Solidity version for store the tracking values.

**Backend Layer:**
- **.Net**: For our backend services, we'll use C#
- **Sql Server**: As for the database, we will be using Sql Server. Actually the system is designed to support almost all relational databases. https://learn.microsoft.com/en-us/ef/core/providers

**Frontend Layer:**
- **Asp.Net MVC**: These libraries will be used for interacting with the API from our frontend application.

### Ecosystem Fit

I plan to develop a WASM version, integrating the SubstrateGaming https://github.com/SubstrateGaming library developed by Ajuna and EVM smart contracts (C# will be utilized with the Nethereum library https://nethereum.com/ for interaction with compatible EVM networks).

To ensure user authenticity, all smart contracts and wallets created on various chains will integrate with Kilt, associating a digital identity with each user utilizing the smart contract to certify data ownership.

## Team :busts_in_silhouette:

### Team members

- Federico Cicciarella

### Contact

- **Contact Name:** Federico Cicciarella
- **Contact Email:** federico.cicciarella@gmail.com
- **Website:** [Linkedin](https://it.linkedin.com/in/federicocicciarella)


### Team's experience

My name is [Federico Cicciarella](https://it.linkedin.com/in/federicocicciarella), and I have been a Microsoft .Net (C#) developer for almost 20 years. In recent years, I have developed a strong interest in the blockchain, particularly in the use of Polkadot ecosystem (I am actively involved in Ajuna and Moonbeam as an ambassador, in Astar where I participate in the Ink! Academy and the Italian community).

Over the years, I have gained significant experience in building such systems, including a web application that processed tens of thousands of daily orders (including data-heavy files like photos for immediate printing) and effectively scaled during peak periods (e.g., the holiday season).

I'm working on a project for a censorship-resistant decentralized video platform.

### Team Code Repos

- https://github.com/TrackingChains/TrackingChain
- https://github.com/TrackingChains/EVMTrackingChain
- https://github.com/TrackingChains/InkTrackingChain
- https://github.com/FedeC87p

### Team LinkedIn Profiles (if available)

- https://it.linkedin.com/in/federicocicciarella

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6.5 month
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 16.200 USD

### Milestone 1 — Basic functionality

- **Estimated duration:** 3 month
- **FTE:**  1
- **Costs:** 8.500 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide a basic **tutorial** that explains how a user can configure the data entry for create profile for to associate the tracking requests to a smart contract transaction. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how to use. |
| 1. | API: Triage | Written in Asp.Net, The Triage API acts as the gateway between the "Web2" world, which receives the Tracking requests, and the "Web3" world, where these requests will be saved. To do this it will verify that the incoming request is compatible with one of the profiles associated in the configuration, if so it will save the request in the Triage (and return an Guid to client) which will then be processed by the next service. In case the incoming request does not match any profile, it will be rejected. The Triage operation does not involve any concurrent processing, allowing for seamless scalability. It can accept requests simultaneously or even create multiple endpoints. The API expects a POST call with the following data: field Code used as a Key in the smart contract, field valueData used as one of the elements of the Value and the field Category that will be used to associate a profile with Tracking |
| 2. | Aggregator Pool Worker | Written in C#,The Aggregator Pool Worker will used to transfer processable data from Triage that has no time dependencies into the Pool. A transaction is transferable when there is no pending Transaction with same Profile to be completed in the pool |
| 3. | Tx Generator Worker | Written in C#,The Tx Generator Worker Worker will used to take data from Pool and make a transaction on onchain via smartcontract. In this case each worker instance takes one of the transactions entered into the pool and will process it by calling the selected smartcontract (this selection of smartcontract has already been made by Triage). Once the transaction has been made, it will save the HASH of the Tx so that it can be used by the next service. This service supports both (Ink! and EVM) TrackingChain smart contracts. The selection of the version of the smart contract to use will be given by the profile that was associated in the Triage phase |
| 4. | Tx Watcher Worker | Written in C#,The Tx Generator Worker Worker will used to check all Tx pending for finalized (or failed) status. Each worker instance takes a pending transaction and through the hash it will verify if it has been finalized successfully. This service supports both (Ink! and EVM) TrackingChain smart contracts. The selection of the version of the smart contract to use will be given by the profile that was associated in the Triage phase |
| 5. | API: Registry | Written in C#,Provide API for check the status of each Tracking request. Wich Guid of tracking request is possibile to watch the status of transaction. For example, the API will tell if the Tracking is in Trigae/Pool/Pending/Complete status and will provide all the times with which it moved from one status to another, as well as the onchain transaction information (gas used, hash tx. ..) |
| 6. | Web Application | Written in Asp.Net MVC pages for manage the insert tracking and views. A web interface from which it will be possible through a simple form to select the fields required to make a request towards the triage. |
| 7. | Ink! Smart contracts. | We will deliver a set of Ink! smart contracts that will able to track the key values. In particular, it will take care of saving in a dictionary key-value formed by a "Key" byte32 and the "Value" a list of bytes. A get call will also be available, which given a "Key" byte32 returns the entire "Value" list of Bytes saved over time, also providing the block number in which the transaction was carried out. It will also include the C# function that the "Tx Generator Worker" service will have to do to write onchain and the read call that will be used by the "Tx Watcher Worker" service. The implementation will partially reuse the [C# SubstrateGaming library](https://github.com/SubstrateGaming) |
| 8. | EVM Smart contracts | We will deliver a set of EVM smart contracts that will able to track the key values. In particular, it will take care of saving in a dictionary key-value formed by a "Key" byte32 and the "Value" a list of bytes. A get call will also be available, which given a "Key" byte32 returns the entire "Value" list of Bytes saved over time, also providing the block number in which the transaction was carried out. It will also include the C# function that the "Tx Generator Worker" service will have to do to write onchain and the read call that will be used by the "Tx Watcher Worker" service. The implementation will partially reuse the [C# Nethereum library](https://nethereum.com/) |

### Milestone 2 — FrontEnd UI

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 1.500 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide a basic **tutorial** that explains how a user can use a frontend to easily configure profile and usage. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how to use. |
| 1. | Frontend Admin Tools | Written in Asp.Net MVC, The frontend for manage all configuration like smart contract used, wallet used, profile association. |
| 2. | Frontend Transaction Monitor | Written in Asp.Net MVC, The monitor to watch all tracking request. A graphical tool that allows you to display the status of all queues on screen. For example showing how many Triage there are, how many Pending, how many failed transactions. Including the detail of each single Tx within the Triage, Pool, pending and Registry |
| 3. | Frontend Registry | Written in Asp.Net MVC, The frontend for user friendly graph of specific product tracked onchain. For each value Key will be show all data Values insured and in wich block/time was performed |

### Milestone 3 — Monitor and Recovery functionality

- **Estimated duration:** 1.5 month
- **FTE:**  1
- **Costs:** 4.500 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide a basic **tutorial** that explains how watch the transaction status and use recovery tool for failed transactions. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how to use. |
| 1. | Tx Generator/Watcher Worker | It will be improved to handle any errors that may arise and to retry the process for a configurable number of times. Once the maximum number has been exceeded, it will go into error status and the Watcher will manage the next phase which may be an attempt to re-enter the transaction again starting from the pool or put it definitively in permanent error status so as to be able to process the subsequent elements that were pending of the completely of the Transaction failed |
| 2. | Tx Recovery/Monitor Worker | Written in C#, The Tx Recovery/Monitor Worker will used to managed all transaction in failed status. It takes care of trying to re-process any transactions that have ended in error. in case of a new error, the transaction will be cancelled. It will also take care of generating alerts to be sent by email whenever a something goes wrong |
| 3. | Tx Cleaner Worker | Written in C#, The Tx Cleaner Worker will used to delete all transactions in status Completed from the Triage, PEnding and Pool to make the database lighter, The history will be present in the Registry |
| 4. | Tx Unlocker Worker | Written in C#, The Tx Unlocker Worker will used to to unlock any transactions left Unlocked due to unhandled errors or system crashes that cause a server restart. (very remote hypothesis but very important to manage in order not to lead to a block of all transactions due to unmanaged Unlocks) |
| 5. | Frontend Admin Tools | Improvements to decide which failed Tx's to try to reprocess or mark them as permanently failed and possibility of marking as Aborted the Tx present in the Triage but not yet in Pool status |

### Milestone 4 — Ink Generation Call Improvement

- **Estimated duration:** 3 weeks
- **FTE:**  1
- **Costs:** 1.700 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide a basic **tutorial** that explains how configure the transaction with this improvement enable. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how to use. |
| 1. | Tx Generator Worker | Improvement to wait for the transaction to be finalized in order to skip the "Tx Watcher Phase" (this mode will be an option present in the configuration) it's will also allow for better support for chains that don't have access to subscans. To achieve this we will listen via socket in order to wait for the finalization of the generated Tx |

## Future Plans

- Present the demo to customers and onboard our first major customer.
- Continue meetings with customers interested in entering the web3 and onboard other customers.
- Participate in events to be able to demonstrate how our demo works, also showing the portfolio of customers who have already chosen to use it.
- Integration DID with Kilt
- Resolve all open [issues](https://github.com/TrackingChains/TrackingChain/issues)
- Continue development of other features
  - Dynamic smart contract data instead of single key-value pairs
  - Support message bus (like RabbitMQ)
  - Use a dedicated database for each individual component
  - Support complex case of triage profile
  - Migrate to Dot Net Core 8 and AOT where supported
  - Improve security of sensitive data (like private key)
  - Improve Frontend Registry pages
  - Tool for massive Triage call
  - Implement any improvements requested by users
  - Improve Frontend Admin Tools (dynamic creation smartcontract, chainstatus monitor...)

## Referral Program (optional) :moneybag: 

- **Referrer:** Patrizia De Bella
- **Payment Address:** BTC, Ethereum (USDC/DAI) or Polkadot/Kusama (USDT) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** I've been actively following polkadot for a few years, I'm an ambassador for some projects including Ajuna, Moonbean and I'm part of Astar Ink! Academy

1. Work you have already done
   - Starting in June 2023 to developing the project's code. Over the past year, we've been offering our product to potential customers, gathering valuable feedback along the way. These inputs guided us in creating the current version of the product, which we presented through an engaging demo and which piqued the interest of many customers.
2. If there are any other teams who have already contributed (financially) to the project.
   - No, all "Future Plans" will be covered by new clients or carried forward by me.
3. Have you applied for other grants so far?
   - No
