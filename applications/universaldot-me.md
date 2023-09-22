# universaldot.me

- **Team Name:** UNIVERSALDOT FOUNDATION (https://universaldot.foundation)
- **Payment Address:**  12atHxpDhW8cU1wbBTLZsGqaKRyoRVZKFs (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 



## Project Overview :page_facing_up:



### Overview

##### Executive summary
A freelancing decentralized application (dApp) that allows individuals to create/complete tasks and organize themselves by creating geographically distributed organizations.

##### Brief Description
The creation of Bitcoin allowed for easy exchange of digital tokens of value. Currently, value is created in the real world, and exchanged in the digital world. Our dApp allows for digital creation of value in addition to digital exchange of value.

This dApp will be developed using Substrate. New pallets will create the business logic layer which will allow users to directly interact with each another using tasks. A basic front-end application will be developed as reference.

To be even more concrete, our project improves on the concept of bounties within Polkadot, in the following ways...
- Better UI experience that abstracts out all necessary blockchain knowledge.
- No council approval. Tasks can be created/completed without intermediary.

In addition to the above mentioned points, [universaldot.me](https://universaldot.me) will also have the following features:
- Creation of User profiles with basic metadata. 
- Creation of Organizations with native tokens.
- Transfer of intellectual property through task creation/completion.


The team believes that this dApp will enable an new digital infrastructure for creating digital businesses. 


### Project Details

#### Architecture

![Architecture Design](https://github.com/UniversalDot/documents/blob/master/designs/architecture/3Tier_Architecture.drawio.png?raw=true) 


- [Vision Document](https://github.com/UniversalDot/documents/blob/master/docs/UniversalDot_Vision.pdf) 


- [Presentation](https://github.com/UniversalDot/documents/blob/master/presentations/UNIVERSAL%20DOT%20FOUNDATION%20Problem_Solution%20.pdf)


- [Mockups/Preliminary Design](https://github.com/UniversalDot/documents/blob/master/designs/documents/UniversalDot%20Prototype.pdf)

- Technology stack
  - React, 
  - Substrate
  - IPFS

- This project _will provide:_
  - At least 3 new custom pallets with unit tests
  - At least 3 different React Modules with unit tests
  - Substrate Node with at least 2 running VPS instances (Testnet/Mainnet) . 
  - Custom genesis configuration
  - Basic React App with custom theming(SCSS)
  - Docker image hosted on docker hub
  - Source code published under Apache 2.0 License
- This project _will NOT provide:_
  - Integration with IPFS 
### Ecosystem Fit


 Where and how does your project fit into the ecosystem?
- The dApp eventually aims to become a parachain on polkdot. 

Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- Users who want to create decentralized organizations and projects. 

What need(s) does your project meet?
- Easy creation of distributed projects.
- Easier organizations of people who have common vision.
- Guaranteed pay for work done using native tokens. 

Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
- SubSocial due to the social networking similarity. 
  If so, how is your project different?
- Our dApp instead of creating small messages, will create tasks with specified requirements. 
- The People who complete the tasks will be granted a reward. 
- For very complex tasks, organizations are created.
  Similar projects in related ecosystems?
  - GitCoin

## Team :busts_in_silhouette:

### Team members

- Igor Stojanov (Team Leader)
- Wendell Muntslag van Amzink (Team Member)
- Slave Atanasov (Team Member)

### Contact

- **Contact Name:** Igor Stojanov
- **Contact Email:** info@universaldot.foundation
- **Website:** https://universaldot.foundation

### Legal Structure

- **Registered Address:** Kennedyplein 200, Eindhoven, 5611 ZT, Eindhoven, The Netheralands
- **Registered Legal Entity:** UNIVERSALDOT FOUNDATION

### Team's experience

Igor Stojanov is a software architect with 7+ years experience in designing and developing software applications. He has worked at Philips, Signify in the domain of software engineering. Also, has worked for a Dutch blockchain start-up TYMLEZ, which created a proprietary blockchain platform on top of [BigchainDB](https://www.bigchaindb.com/). 
For universaldot.me, his main focus will be on creating the overall solution architecture and developing pallets in Substrate. 

Wendell Muntslag van Amzink is a developer with more than 20+ years of software development experience. He has vast knowledge of front-end development with different JavaScript frameworks such as Angular and React. 
For universaldot.me, his main focus will be toward CI/CD, Docker, and React.

Slave Atanasov is a front-end developer that currently works for a Italian subcontracting company Be. He is building application using React, Angular and other javascript based libraries. 
For universaldot.me, his responsibilities will be to create the App.js skeleton, React Components and improving User Experience.


### Team Code Repos

- https://github.com/UniversalDot
- https://github.com/UniversalDot/pallets 
- https://github.com/UniversalDot/universal-dot-node

GitHub accounts of all team members. 

- https://github.com/JosephKnecht-lab 
- https://github.com/wendellmva
- https://github.com/slaveatanasov

### Team LinkedIn Profiles

- https://www.linkedin.com/in/igor-stojanov-96364ba/
- https://www.linkedin.com/in/wendellmva/
- https://www.linkedin.com/in/slaveatanasov/

## Development Status :open_book:

[Current Mock-Up Prototype](https://www.figma.com/proto/IjP67xRNbuaqlzLXrHOcGh/UniversalDot-Prototype-Final?node-id=103%3A3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=103%3A3)

Pallets Implementation
https://github.com/UniversalDot/pallets

Substrate Node:
https://github.com/UniversalDot/universal-dot-node

Front-End:
https://github.com/UniversalDot/universal-dot-front-end




## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  2.5 FTE
- **Total Costs:** 35,000 USD

### Milestone 1  — Design/Infrastrucutre/Substrate Modules

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **video tutorial** that explains how a user can create profiles, tasks and organization. This will demonstrate basic functionality. |
| 0c. | Testing Guide | Unit tests for each pallet. We will include documentation on how to run tests. (Using Mocks) |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an medium/blog **article** that explains the main features of our dApp.
| 1. | Substrate module: Profile | We will create a Substrate module that will create user profiles with some metadata such as reputation, interests. See [Additional Information](#additional-information)  |  
| 2. | Substrate module: Task | We will create a Substrate module that will enable users to create and publish tasks. These tasks will have task requirements and promised reward. See [Additional Information](#additional-information) |  
| 3. | Substrate module: DAO | We will create a Substrate module that will create organization which will collect different tasks and users. See [Additional Information](#additional-information) |  
| 4. | Substrate chain (testnet)| Modules will be deployed to the substrate runtime and will run on a testnet network. |  

### Milestone 2  — UI Implementation/support Pallets?/ Reference dApp

- **Estimated duration:** 2 months
- **FTE:**  2,5
- **Costs:** 17,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 
| 0b. | Documentation | We will provide **inline documentation** of the code. This documentation will be build with _rust doc_ and published on designated subdomain to be easily accessible by the community. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the repo description, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **User Manual** that explain how to interact with the application.
| 1. | React module: Profile | We will create a React module that will display blockchain information from Substrate Profile Pallet via RPC. The user will be able to input, delete this data from the UI. |  
| 2. | React module: Task | We will create a React module that display task information and will enable users to assign tasks. |  
| 3. | React module: DAO | We will create a React module that will enable user to create decentralized organizations. |  
| 4. | App module | We will create a React skeleton app with basic theming for the application. This app will contain all new modules mentioned above. |
| 5. | Substrate chain (mainnet)| Launch mainnet comprised of new substrate modules together with React modules.  |

...


## Future Plans


In the short term we expect the enhance the functionality of the product using Substrate Builders Program.

We expect to launch a native token from a treasury account. The native coin will be a utility token, and each token will represent unit value of work done (tasks completed on the network).

In the long run, we expect to become Polkadot Parachain.


## Additional Information
Use Case Diagram
![Architecture Design](https://github.com/UniversalDot/documents/blob/master/designs/architecture/Use-Case.drawio.png?raw=true)


Additional Requirement: Each pallet will be provide Weight Estimation for each extrinsic using Benchmarking.

Bellow are provided minimal requirements/implementation details for each pallet. 


Note: The final version _may_ contain more storage items and functions.

Profile Pallet
```
HashMap Profile <Key: AccountID, value: profile> 

profile: {  
  owner:
  balance:
  interests:
  reputation
}

RPC Methods: 
create_profile(origin: OriginFor<T>, interests: Vec<u8>) -> DispatchResult
update_profile((origin: OriginFor<T>, interests: Vec<u8>) > DispatchResult
delete_profile((origin: OriginFor<T>) > DispatchResult 
```
Task Pallet
```
HashMap Task <Key: hash, value: task> 

task: {
  creator:
  requirements:
  budget:
  state:
}

RPC Methods:
create_task(origin: OriginFor<T>, requirements: Vec<u8>, budget: u32) -> DispatchResult
start_task(origin: OriginFor<T>, task_id: T::Hash) -> DispatchResult 
finish_task(origin: OriginFor<T>, task_id: T::Hash) -> DispatchResult

```

DAO Pallet
```
HashNMap Profile

RPC Methods:
create_organization(origin: OriginFor<T>, name: Vec<u8>) -> DispatchResult
add_member(origin: OriginFor<T>, AccountID) -> DispatchResult
remove_member(origin: OriginFor<T>, AccountID) -> DispatchResult
add_task(origin: OriginFor<T>, AccountID) -> DispatchResult
```
**How did you hear about the Grants Program?** Web3 Foundation Website

