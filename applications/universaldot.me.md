# W3F Grant Proposal


- **Project Name:** universaldot.me 
- **Team Name:** UNIVERSALDOT FOUNDATION
- **Payment Address:**  12atHxpDhW8cU1wbBTLZsGqaKRyoRVZKFs (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3


## Project Overview :page_facing_up:

> *This application is a follow up grant to: https://github.com/w3f/Grants-Program/pull/714*


### Overview

Universaldot.me is a **freelancing decentralized application (dApp)** that allows individuals to create/complete tasks and organize themselves by creating geographically distributed organizations. As such, it intends to simplify the way people and organizations create contracts between one another. The layer of trust and transparency is provided by distributed blockchain infrastructure (**Substrate**). The foundation of the application has already been built with custom pallets functionality that provides the necessary business logic for creating a freelancing platform. This functionality needs to be further enriched with additional business logic, for which we are requesting funds to further build the solution.

In addition to enriching the blockchain business logic, we intend to redesign parts of the User Interface with a completely new User Experience. The UI should provide seamless interaction with the web application. More specifically, the React components related to the DAO need to be redesigned and further developed.

A major part of the next milestone also includes designing and implementing machine learning models using TensorFlow which will recommend tasks and organizations to individuals.

Universaldot.me intends to become a Polkadot Parachain in the future.


### Project Details



![Architecture Design](https://github.com/UniversalDot/documents/blob/master/designs/architecture/3Tier_Architecturev3.png?raw=true) 
Figure 1. Architecture Diagram

- [Software Architecture Document](https://drive.google.com/file/d/13C9IRIX49AjfZEB-MI9dXG3gX-cdTgBp/view?usp=sharing) 


- [Vision Document](https://github.com/UniversalDot/documents/blob/master/docs/UniversalDot_Vision.pdf) 

- [Presentation](https://github.com/UniversalDot/documents/blob/master/presentations/UNIVERSAL%20DOT%20FOUNDATION%20Problem_Solution%20.pdf)

- [Mockups/Preliminary Design](https://github.com/UniversalDot/documents/blob/master/designs/documents/UniversalDot%20Prototype.pdf)

- [Software Requirements Document](https://drive.google.com/file/d/1HvYvb7N1A9uT_9UhrAq1mV38RtjyfVv-/view?usp=sharing)

- [Milestone Definition Document](https://drive.google.com/file/d/1JUzlLnvOQ-SN3L4vk5sBUp39BWqUaM9G/view?usp=sharing)

- [Substrate Builder Program Pitch Presentation](https://drive.google.com/file/d/1pHe0E-YREhfPSlzErKzU4XUpHvH2bF-q/view?usp=sharing)


### Ecosystem Fit

*Where and how does your project fit into the ecosystem?*
- The dApp eventually aims to become a parachain on polkdot. 

*Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?*
- Users who want to create decentralized organizations and projects. 

*What need(s) does your project meet?*
- Easy creation of distributed projects.
- Easier organizations of people who have common vision.
- Guaranteed pay for work done using native tokens. 

*Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?*
- SubSocial due to the social networking similarity. 

*If so, how is your project different?*
    - Our dApp instead of creating small messages, will create tasks with specified requirements. 
    - The People who complete the tasks will be granted a reward. 
    - For very complex tasks, organizations are created.

*Similar projects in related ecosystems?*
  - GitCoin

## Team :busts_in_silhouette:

### Team members

- Igor Stojanov (Team Lead)
- Slave Atanasov 
- Vivek Pandya

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

Vivek Pandaya is a substrate developer who is contributing to several substrate based project. 
For universaldot.me, his main focus will be to implmenent and design additional substrate pallets.

Slave Atanasov is a front-end developer that currently works for a Italian subcontracting company Be. He is building application using React, Angular and other javascript based libraries. 
For universaldot.me, his responsibilities will be to create the App.js skeleton, React Components and improving User Experience.


### Team Code Repos

- https://github.com/UniversalDot
- https://github.com/UniversalDot/universal-dot-node
- https://github.com/UniversalDot/universal-dot-front-end

GitHub accounts of all team members. 

- https://github.com/JosephKnecht-lab 
- https://github.com/slaveatanasov
- https://github.com/vivekvpandya


### Team LinkedIn Profiles

- https://www.linkedin.com/in/igor-stojanov-96364ba/
- https://www.linkedin.com/in/slaveatanasov/


## Development Status :open_book:

We have already implemented MVP of the solution that includes the following:

- [Substrate Pallets](https://github.com/UniversalDot/universal-dot-node/tree/universal-develop/pallets)
- [React Front-End](https://github.com/UniversalDot/universal-dot-front-end/tree/universal-master/src)

The current MVP is available online at http://universaldot.me

The functionality already implemented can be found on Github Milestones: 
https://github.com/UniversalDot/universal-dot-node/milestone/1?closed=1
https://github.com/UniversalDot/universal-dot-front-end/milestone/2?closed=1

The Milestones Delivery conversations can be found at: 
https://github.com/w3f/Grant-Milestone-Delivery/pull/346
https://github.com/w3f/Grant-Milestone-Delivery/pull/396

The funding is requested to further scale up the team and development of additional features. 


## Development Roadmap :nut_and_bolt:

![Roadmap](https://github.com/UniversalDot/documents/blob/master/designs/architecture/Roadmap-2022.jpg?raw=true) 
Figure 2. Roadmap for 2022


### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  5 FTE 
- **Total Costs:** 97,000 USD

### Milestone 1 — (Release 0.7)

- **Estimated duration:** 3 months
- **FTE:**  4 FTE
- **Costs:** 47,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a external documentation of the new functionality |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **wiki** document that explains what was developed and how users can interact with the functionality.
| 1. | Improve Profile,Task, Dao pallets | Revamp pallets design with additional functionality.  |  
| 2. | Tensorflow Integration | Integrate Tensorflow components into the existing technology stack. |  
| 3. | DAO Redisign | Complete Redesign and reimplementation of DAO pallet and front-end application. |  
| 4. | IPFS Design Document | Create Design for integration of Substrate with IPFS. |  
| 5. | CI/CD | Complete CI/CD pipelines and automated testing. |  
| 6. | Substrate chain | Update testnet currently deployed at: wss://3lnc.l.time4vps.cloud:443 |  

Complete Github User Story breakdown of the milestone can be found [here.](https://github.com/UniversalDot/universal-dot-node/milestone/2)


### Milestone 2 — (Release 1.0)

- **Estimated duration:** 3 months
- **FTE:**  5 FTE
- **Costs:** 50,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a external documentation of the new functionality |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **wiki** document that explains what was developed and how users can interact with the functionality.
| 1. | IPFS integration | Substrate pallet Integration with IPFS.   |  
| 2. | Tensorflow Integration | Complete integration of Tensorflow with trained ML models. |  
| 3. | Docker Compose | Dockerize the whole stack (Docker Compose) |  
| 4. | Integration tests | Complete Integration Tests Suite with >90 test coverage. |  
| 5. | Front-end | Finilized React application with improved components and overall design | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 6. | Substrate chain | Launch Mainnet with custom genesis configration |  

Complete Github User Story breakdown of the milestone to be updated [here] once Milestone 1 has been completed.


## Future Plans


- **Short term goal**: Successful launch of the mainnet application with complete feature set.
- **Long term goal**: Become a polkadot parachain.




## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

We intend to create a start-up company out of this project. 

Thus, the funds will be used to further expand the team and continue development on the existing product. 