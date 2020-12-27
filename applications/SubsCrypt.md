# Open Grant Proposal

* **Project Name:** SubsCrypt
* **Team Name:** OxyDev
* **Payment Address:** 


## Project Overview :page_facing_up: 
**SubsCrypt** is a BaaS(Blockchain as a service) for developers to facilitate the integration of their subscription methods on the PolkaDot blockchain using a smart contract. A dashboard panel for admins to gather useful business data of their subscribed users(by protecting users' privacy) and a dashboard panel for users to manage all their subscriptions in one place.

### Overview
**SubsCrypt** focuses on solving a traditional problem on both the user and the developer side. Developers will no more be worried about the privacy of and maintaining the customers' database and payment mechanism. Using **SubsCrypt**, they can integrate Web3 in their service to benefit from blockchain in a developer-friendly way(minimum time and expertise resource). Users will also enjoy the privacy that they can preserve and the all-in-one platform to manage their subscriptions in different services. By making all these procedures easy, we can help small online businesses to enjoy the benefits of **Web3** and to only focus on their service, which will hopefully lead to mass-adoption of **Web3**

We have been developing on different web3 technologies, but none could satisfy our customization requirements. By using Substrate, we can customize our parachain so it can fit our needs(we are also willing to continue our project to be a PolkaDot parachain)

Assume a scenario that Alice is a user of a service that provides monthly subscription for milk delivery(called Milkryption). Milkryption has a monthly and yearly subscryption method and they use **SubsCrypt** on their website (first they submit their method on our contract in our website, then they can use our API), so if Alice ever has used our service so far, she will only need to connect his wallet and subscript to the Milkryption using a trigger contract method(she will send some encrypted data that is encrypted with her key and also service provider key and then she will share that key with the service provider to have access to her data in the contract) but if that's her first time to ever use **SubsCrypt**, she has to also sign-up in the contract. Alice now can anytime request for a refund of remaining days of her service directly from the contract. Alice will hopefully use our service in several websites and now she can go to our website and manage his subscriptions(refunding or renewing) in one place. 


In our country, we have a lot of restrictions and censorship. We are suffering from Iran's government's Strict policies and getting banned from universal communities and worldwide payment (e.g., PayPal and visa card) all because we are Iranian.
Two months ago, our team started this idea to resolve these limits and connect our people worldwide. We will now announce our project as a service on blockchain to spread this type of freedom to the world.
Besides, this, we have experience in developing different backend services and Dapps, and we came to the conclusion that our platform can help developers to migrate from web2 to web3 and also help users by enhancing their user experience to use web3 websites(they only need to use a wallet for registration, and our login procedure can be handled without wallet)

<!-- pros:
1. Blockchain benefits
2. All-in-one solution to manage subscription mechanism in services that help users to manage their ser
vices in on platform without privacy problems(User dashboard for users to check their status)
3. minimizing development effort for developers to integrate subscription and payment into their service(providing a RestAPI for developers to easily interact with blockchain)
4. minimizing the fees -->

### Project Details 
* Mockups/designs of any UI components
One of the most important aspects of our service is UI/UX, and we are all aware of the difficulties of web3 usage for the majority of people, so we will provide a UI component that can be integrated into the websites and also a webpage that has an invoice to pay( developers can choose whichever method that suits them better). We are also planning to design a user/developer dashboard that will retrieve necessary data from the blockchain

* An overview of the technology stack to be used  
As we explained, we want to provide a service that will fit into different stacks with minimum effort so that we will implement our side of this service with the following stack:
- User/developer Dashboard (Front) => Vue.js and RPC API to contract
- Smart Contract => Rust and Ink on edgeware
- UI integration components => ES6 and purejs library
- Backend high-level API to connect to smart contract => Django, node.js for this milestone

### Ecosystem Fit 
As we have been searching for similar ideas in the blockchain ecosystem, we found EIP1337 that has a similar idea, but the implementation is low level, and it does not help either developers or users have a smooth subscription platform.

## Team :busts_in_silhouette:

### Team members
* Name of team leader
    Saber Zafarpoor (Product manager & Blockchain Designer)
    Hadi Esna (CTO & Blockchain Designer)
* Names of team members	
    Ahmad Salimi(Software Engineer)
    Alireza Ilami(Data Analyst)
    Sepehr Kianian(Front-End developer & Blockchain developer)
    Amir Sadra Abdolahi(Front-End developer & Blockchain developer)
    Yasaman Shad(Graphic Designer & UX)
    ...(we will hire blockchain researchers and UI developers to enhance the quality)


### Contact
* **Contact Name:** Saber Zafarpoor
* **Contact Email:** szafarpoor@ce.sharif.edu
* https://oxydev.ir


### Team's experience
**OxyDev** consists of young enthusiast students/developers who graduated or undergraduates at #1 university of Iran (Sharif University of Technology) trying to make web3 easier to use and integrate into real-world services. We have developed several Defi projects in Tron and Ethereum Ecosystem and expanded our team to make venturous leaps to play our roles in making a more user-friendly world in the next generation of Web(Web3). We have done several projects of web2 that make our team aware of the pros and cons of web2. 

### Team Code Repos
* https://github.com/oxydev
* Our previous projects can not be publicly announced(NDA)

### Team LinkedIn Profiles
* https://www.linkedin.com/in/szafarpoor/
* https://www.linkedin.com/in/ahmadsalimi/
* https://www.linkedin.com/in/hadiesnaashari/
* https://www.linkedin.com/in/alirezailami/

## Development Roadmap :nut_and_bolt: 
We will divide our project into four milestones. For the first milestone, we will implement our smart contract can be deployed to a substrate chain using ink! Which is a smart contract substrate pallet. The second and third milestones will be implemented in parallel. The last milestone will be connecting the components to work seamlessly together.
**There will be three ways to connect to our smart contract:**
1. Using a Polkadot{.js} wallet to interact with the contract(state of the contract can be modified in this scenario)
2. Using our RestAPI backend or third party library to retrieve data from the contract (state of the contract can not be modified in this scenario)
3. Using any customized client to interact with the contract

**First milestone**: we will design(it is almost done right now) and implement our smart contract, and we will also design XD files of UI, and we will write our white-paper in this milestone(including the test unit).

**Second milestone**: we will implement the UI Dashboard(Vue.js) and UI modules(ES6 and pure js) regarding our XD design in the previous milestone.

**Third milestone**: Implementing our RestAPI backend in Node.js to provide an API layer to interact with our contract(it is optional to use this API), we will also implement our third-party libraries for Django and node.js to interact with our backend and implement the required functionality to make the integration for developers easier(including test unit).



### Overview
* **Total Estimated Duration:** 9 weeks
* **Full-time equivalent (FTE):** 5
* **Total Costs:** 1.1 BTC

### Milestone 1 — Smart Contract and whitepaper
* **Estimated Duration:** 3 weeks
* **FTE:**  3
* **Costs:** 0.3 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Unlicense |
| 1. | Contract Implementation | we will implement the contract and deploy it to a test net.
| 1.1 | Contract code | implementation of contract |
| 1.2 | High-level API | we will provide an API of contract |
| 1.3 |  Documentation | full documentation of API that explains how to connect to and use it.
| 1.4 | Testing Guide | The code will have unit-test coverage (100%) to ensure functionality and robustness. In the guide, we will describe how to run these tests | 
| 2. | Article | We will write an article or tutorial that explains the work done in this milestone as part of the grant.
| 3. | Design Front-End component | design UI and UX of front-end component with adobe xd.
| 4. | white-paper | full description of roadmap and technical specification of this project |  

### Milestone 2 — UI
* **Estimated Duration:** 5 weeks
* **FTE:**  2
* **Costs:** 0.3 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | UI Dashboard | A dashboard to manage user's subscriptions and also refund them|  
| 1.1 | UI Dashboard for users | A dashboard to manage user's subscriptions and also refund them|  
| 1.2 | UI Dashboard for admins | A dashboard to manage user's customers and create a coupon or see related charts, etc. |  
| 3. | ES6 Module for developers | Developers can use this module to integrate our service into their websites| 
| 3.1 | Implementation of ES6 Module for developers | we will write an ES6 Standard module| 
| 3.2 | Documentation of ES6 Module | We will provide both inline documentation of the code and a basic tutorial that explains how a developer can integrate our module into their projects| 
| 4. | Unit Test | We will provide unit tests to cover our ES6 Module|


### Milestone 3 — Back-end libraries
* **Estimated Duration:** 6 weeks(parallel with milestone 2)
* **FTE:**  3
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Backend RestAPI | we will provide a RestAPI to facilitate the connection to blockchain. it will be used to check the subscription or retrieve any data from the contract. |
| 1.1 | Backend RestAPI Implementation | we will provide a RestAPI to facilitate the connection to blockchain. it will be used to check the subscription or retrieve any data from the contract. |
| 1.2 | Backend RestAPI Documntaion | A fully comprehensive documentation to use our RestAPI |
| 1.3 | Backend RestAPI Unit test | The code will have unit-test coverage (100%) to ensure functionality and robustness.|
| 2. | Third Party libraries | We will provide some library to make integration of our service easier in different backend stacks by connecting to our Backend RestAPI|  
| 2.1 | Django Library | A high-level library to use our service in Django| 
| 2.2 | Django Library documentation | A fully comprehensive documentation to use our library| 
| 2.3 | Django Library Unit test | The code will have unit-test coverage (100%) to ensure functionality and robustness| 
| 2.4 | Node.js Library | A high-level library to use our service in Node.js| 
| 2.5 | Node.js Library documentation | A fully comprehensive documentation to use our library| 
| 2.6 | Node.js Library Unit test | The code will have unit-test coverage (100%) to ensure functionality and robustness| 


## Future Plans
when we finish this project successfully, then we will try to make our substrate pallet to become a standalone blockchain, and if everything goes well, we will try to be a PolkaDot parachain.

<!-- ## Additional Information :heavy_plus_sign:  -->

<!-- Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far? -->
