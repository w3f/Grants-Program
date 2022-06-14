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
| 3. | DAO Redesign | Complete Redesign and reimplementation of DAO pallet and front-end application. |  
| 4. | IPFS Design Document | Create Design for integration of Substrate with IPFS. |  
| 5. | CI/CD | Complete CI/CD pipelines and automated testing. |  
| 6. | Udot Wiki | Complete wiki documentation on how the open-source community can use the dApp to start digital organizations. Available at https://docs.universaldot.me |

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
| 5. | Front-end | Finalized React application with improved components and overall design | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 6. | Udot Wiki| Complete documentation on how the open-source community can use the implemented infrastructure to further **build** features. https://docs.universaldot.me/docs/build  | 

Complete Github User Story breakdown of the milestone to be updated [here] once Milestone 1 has been completed.


## Future Plans


- **Short term goal**: Successful launch of the mainnet application with complete feature set.
- **Long term goal**: Become a polkadot parachain.




## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

We intend to create a start-up company out of this project. 

Thus, the funds will be used to further expand the team and continue development on the existing product. 


## Additional Questions 

- **semuelle**: We have already funded a number of Substrate-IPFS integrations. Can you elaborate why/how the existing solutions don't work for you?
  
  >ANSWER: *We have investigated some of the Substrate-IPFS solutions in the following technical [spike](https://github.com/UniversalDot/universal-dot-node/issues/31). We have not ruled-out using existing solutions. However, we have to customize the IPFS integration to the context and use-case of our application.*
- **semuelle**: I don't understand how Tensorflow relates to the rest of the system. In the architecture diagram, there are Pallets blocks and a Tensorflow block, but no explanation of how they interact with another.
  
  >ANSWER:*The overall architecture was only focused on the components. For details on how Tensorflow interacts with the web app, please see the [following diagram](https://github.com/UniversalDot/documents/blob/master/designs/architecture/Tensorflow.drawio.png).*
- **semuelle**:Several of your deliverables are labeled as "redesign" or "improve", but without an explanation why the mentioned elements need to be redesigned and how. Given the size of the grant, I would like to see a lot more detail on that.
  > ANSWER: *The Substrate pallets will be improved with the following enriched data-models shown below. Furthermore, Additional extrinsics will be implemented related to creating, updating, deleting the data represented below. 
  In relation to the UI-Redesign of the DAO, we intend to create richer User experience based on the following [wireframes](https://drive.google.com/file/d/1anfrnnouibzRrksamzRWZKb3hvnZU4WF/view?usp=sharing).* 
- **semuelle**: Can you explain how the IPFS integration needs to be customised to the use case? AFAIK, there are existing general-purpose IPFS workers.
  > ANSWER: *Currently, the React app is hosted on our own servers. This is not desirable. What we are considering is to host the complete React App in IPFS. Thus, in addition to decentralised back-end(Substrate), the front-end will also be fully decentralised. In addition, there are items within the application that will have to stored in IPFS (such as Vision documents, Task Deliverables, etc.) We have to ensure that only permitted users have access to these documents, while the rest can only see respective IPFS hash.*
- **Noc2**: I agree with Sebastian regarding the IPFS integration. You should take a look at the existing implementations and see if you can potentially leverage this, see for example https://github.com/DanHenton/pocket-substrate/tree/ipfs-ocw We would only support it via grants, if you can specifically detail what you need to do. Also could you provide more information regarding the changes of the front-end? For example, do you have mock-ups for the changes etc.? And regarding Tensorflow how exactly will this be integrated/interact with the substrate chain? Or will this only work with the front-end?
  > ANSWER: *See the answer above to Semuelle regarding IPFS. One of the deliverables of the 1st milestone is IPFS Design Document. (See Article 4). Regarding, the UI-Redesign, we have the following [wireframes](https://drive.google.com/file/d/1anfrnnouibzRrksamzRWZKb3hvnZU4WF/view?usp=sharing) for the new User Experience. We have hired a designer to work on finishing the Redesign. The Tensorflow integration will only be integrated with the front-end application. Currently, we are showing random lists of tasks, organizations to users but with Tensorflow we will make better recommendations relevant to users and their interests/history.*
- **hakan-w3f**: I find the ML part of this project super valuable. Is the majority of the ML related work going to be integrating the ML stack with the rest of the architecture? I'm asking this because there are really good off-the-shelf recommendation models for TF.
  > ANSWER: *Yes. The majority of the related work is integrating Tensorflow within the current architecture. We have selected the universal-sentance-encoder: https://tfhub.dev/google/universal-sentence-encoder/4 as a model which provides semantic similarity between text for the initial implementation. In the future, the models will based on more sophisticated neural nets. If you know some great off-the-shelf tensorflow models, we will be happy to look into them.*
- **Noc2**: I have a few more questions/comments: Could you remove “Launch Mainnet with custom genesis configuration” and potentially the testnet from the deliverables? We usually don’t support the deployment via our grants program, since this is something that is mostly beneficial for you and your project and not for the entire ecosystem (like the open source code). Also would you be willing to reduce the price a little bit more? In my opinion, if you don’t plan to become a common good chain, more and more of the development should be covered by VCs, since our grants program also not necessarily looks into the business model etc. Btw. we would be more than happy to help you with finding potential VCs in case you are interested in this.
  > ANSWER: *I have update the deliverables. Instead of testnet/mainnet, we will provide wiki documentation on how the ecosystem could use the application and build further on it. Regarding price, I don't think I can reduce further. I am recruiting a team of developers to continue building the application further. Getting in touch with VC will be greatly beneficial at this point of time and your help is appreciated.*
- **semuelle**: I like the project in its current form and would like to see it expand. However, I don't support the application in its current form. I don't think the Tensorflow integration is useful for the ecosystem as it's a centralised service serving one frontend and one very specific use case and does not address any critical functionality. Serving suggestions based on keywords would achieve the same. The IPFS integration and pallet redesigns do not justify 27 person-months.
  > ANSWER: *Thanks for the feedback. There is also Tensorflow Federated: https://www.tensorflow.org/federated, where the models are not centralized on single server. This can be the next step of implementation of the project. Serving suggestions based on keywords is not sufficient since we plan to take into account personal history and user behavior into the recommendation model in the future. Our goal currently to incorporate all these technologies with minimal functionality, and continuously improve them as we go all long. If you think some of this functionality is critical to the success of the app, we can place more focus on that aspect.*
- **takahser**: In addition to my comments, I'm curious if you have something like a class diagram that provides a brief overview of the concepts you're using (e.g. task, organisation, dao, etc.) and how they relate to each other (e.g. organisation can have multiple tasks, etc.).
  > ANSWER: *Thank you for the corrections. I have updated the document based on your corrections. We have an entity relationship diagram on page 4 of our SRS document: I am including the link for convenience: https://drive.google.com/file/d/1HvYvb7N1A9uT_9UhrAq1mV38RtjyfVv-/view?usp=sharing Also, we describe the data model for each of the entities in more detail there.*
  
#### Profile Pallet

| Characteristic  | Description                                                                | Type                                        | Entry             |
|-----------------|----------------------------------------------------------------------------|---------------------------------------------|-------------------|
| AccountID       | Primary ID for a profile. One profile per AccountID                        | Pub key                                     | Automatic         |
| Username        | Personal description of profile                                            | String                                      | Manual, Mandatory |
| Interests       | Personal interests of the user. Can incorporate skills, preferences, etc.  | Array of Strings                            | Manual, Mandatory |
| Reputation      | Score of points that the User has earned                                   | Number                                      | Automatic         |
| Balance         | Cryptocurrency balance in the native chain coin                            | Number                                      | Automatic         |
| Portfolio       | User can showcase personal portfolio, additional description, etc          | String (may contain list of IPFS documents) | Manual, Optional  |
| Availability    | Hours per week the User is Available                                       | Number (approx. Or list of 10hr,20hr,30hr)  | Manual, Mandatory |
| Profile History | Previous work history of the User                                          | Array of Tasks                              | Automatic         |       

  
#### Task Pallet

| Characteristic | Description                                                                                                  | Type                                               | Entry             |
|----------------|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------|-------------------|
| TaskID         | Unique Identifier for each task                                                                              | Hash                                               | Automatic         |
| Title          | Task Title that describes the task                                                                           | String                                             | Manual, Mandatory |
| Requirements   | Definition that specifies the requirements of the task                                                       | String (RichTextEditor?: JSON-Strigify)            | Manual, Mandatory |
| Budget         | The budget for a task                                                                                        | Number                                             | Manual, Mandatory |
| Deadline       | Expected end time for the task                                                                               | Datetime                                           | Manual, Mandatory |
| Attachments    | Additional information that is relevant to a task.                                                           | File (Referenced by IPFS Hash)                     | Manual, Optional  |
| Keywords       | Few words used to filter the task (mainly used for the recommendation)                                       | Array of Strings                                   | Manual, Optional  |
| Feedback       | Comments that are added to the task. Intermediary steps of communication between the initiator and volunteer | String                                             | Manual, Optional  |
| Initiator?     | The User who created the task                                                                                | AccoundID                                          | Automatic         |
| Volunteer?     | The User who Volunteered for the task                                                                        | AccountID                                          | Automatic         |
| CurrentOwner   | The user who currently is working on the task and thus has ownership of it.                                  | AccountID                                          | Automatic         |
| Related        | Group of tasks that are related to the current task.                                                         | List of Tasks                                      | Manual            |
| Status         | The current status of the task                                                                               | Enum [Created, InProgress, Closed] To be expanded? | Automatic         |
| Created        | The time the task was created                                                                                | DateTime                                           | Automatic         |
| LastUpdated    | Time when the task has been updated                                                                          | DateTime                                           | Automatic         |
| Completed      | Time when the task was completed                                                                             | DateTime                                           | Automatic         |


#### DAO Pallet


| ID          | Unique identifier for an organization                                                                                                   | UUID or similar                | Automatic            |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|----------------------|
| Name        | The name of the organization                                                                                                            | String                         | Manual, Mandatory    |
| Description | Basic description regarding the organization, industry, and goals                                                                       | String                         | Manual, Optional     |
| Owner       | The account that owns the organization. The initial owner is the founder. Ownership should be able to be transferred to other accounts. | Account ID                     | Automatic, Mandatory |
| Vision      | Document that describes company Vision                                                                                                  | String (Hash to IPFS Document) | Manual, Mandatory    |
| Members     | Members that belong to an organization                                                                                                  | Array of AccountID             | Manual, Mandatory    |
| Tasks       | Tasks that belong to a certain Organization                                                                                             | Array of TaskID                | Manual, Mandatory    |
| Applicants  | Users that have applied to join to a certain organization                                                                               | Array of AccountID             | Automatic            |
| Created     | The date when the organization was created                                                                                              | DateTime, Block                | Automatic            |
| LastUpdated | The date when the organization had an update                                                                                            | DateTime, Block                | Automatic            |
| Properties  | Custom collection of properties that can be added.                                                                                      | An array of Objects            | Manual, Optional     |
|             |                                                                                                                                         