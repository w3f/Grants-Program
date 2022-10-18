# Open Grant Proposal

* **Project Name:** ChainEducation
* **Team Name:** ChainEducation Team
* **Payment Address:** Bitcoin Address: bc1qtr9993ch6zlr29j5c22zzax57h62x5gj24wtxk
* **Level:** 2

## Project Overview :page_facing_up: 

### Overview

ChainEducation is a decentralized platform where anyone can upgrade their web3 skills from hands on tutorials.
They will be able to earn certificates as NFT once they complete a course.
Platform will also create their profile so that they can showcase it to the community. They can add their projects and achievements too.
Educators can create their classroom, they can upload as many courses in a classroom.
Students can get them enrolled in a classroom. For every achievement, they will earn achievement NFT.
Students can rate and review the courses too.
Instructors can create a paid course too, if any student purchases a course, on whatever price they will purchase will directly go to the instructor of the course.

### API Spec

```
 - [GET] / -> Home Page
 - [GET] /login -> Login Page
 - [GET] /signup -> Signup Page
 - [GET] /toc -> Terms and Conditions Page
 - [GET] /privacy-policy -> Privacy Policy Page
 - [GET] /about-us -> About Us Page
 - [GET] /contact-us -> Contact Us page
 - [GET] /community -> Community Page
 - [GET] /job-board -> Job Board Page
 - [GET] /profile -> User Profile
 - [GET] /account -> User Account Settings
 - [GET] /dashboard -> User's Dashboard
 - [GET] /api/v1/tracks -> Get All Courses
 - [GET] /api/v1/{course_uuid} -> Get A Course
 - [GET] /api/v1/{course_uuid}/{chapter_slug} -> Get A Chapter
 - [POST] /api/v1/tracks/new -> Create a new Course
 - [POST] /api/v1/{course_uuid}/new -> Create a new Chapter
 - [GET] /api/v1/{course_uuid}/reviews -> Get reviews of a Course
 - [POST] /api/v1/{course_uuid}/reviews/new -> Create a new review for a coursed
```

### Simillar platforms
 - https://buildspace.so/solidity
 - https://learnweb3.io/
 - https://www.web3.university/

### How our platform will be unique?
 - None of the above platform provides hands-on tutorial on Substrate ecosystem and Rust. We will cover both of them.
 - Creators can earn with our platform if anyone buys their course. This will also act as marketing of our platform since creator will promote her platform our her social media.
 - We will be giving achievement and course completion NFTs.

### Mockups

1. ![Signup Page](https://i.imgur.com/btVmach.png "Signup Page")
2. ![Tracks Page](https://share.balsamiq.com/c/v1QAdj5DkCqmpPwsmVd8qC.png "Tracks Page")
3. ![Learn development on Substrate](https://share.balsamiq.com/c/hRKNoiyejFzP6tm7cbdtS1.png "Learn development on Substrate")

## Team :busts_in_silhouette:

### Team members
* Muskan Marwah, Co-Founder
* Aviraj Khare, Co-Founder

### Contact
* **Contact Name:** Aviraj Khare
* **Contact Email:** avirajkhare00@gmail.com

### Legal Structure 
* **Registered Legal Entity:** Not yet registered

### Team's experience
* Muskan Marwah: 6years flying experience as flight attendant. Started development in Rust and Solidity.
* Aviraj Khare: Founder & CTO, ChainEducation, Ex Gojek, worked in web3 space from 2016 to 2019. Created a Decentralized exchange on top of the 0x protocol as a Whitelabel solution. From 2019-21 worked in the Gojek infrastructure team.

### Team Code Repos
* https://github.com/avirajkhare00
* https://github.com/muskanmarwah1


### Team LinkedIn Profiles
* https://www.linkedin.com/in/avirajkhare00/

## Development Roadmap :nut_and_bolt: 

# Overview

## Grant level
Level 2: Up to $30,000, 3 approvals

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 14 weeks
* **Total Costs:** 30,000 USD

### Milestone 1

* **Estimated Duration:** 5 weeks 
* **Costs:** 10,000 USD


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) deploy our smart contracts and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in Jest to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Articles | We will publish a series of tutorials along with online workshops within our discord community so that we can educate our users the use of this platform. |
| 0. | Creation of smart contracts using Ink. | These smart contracts will be responsible to distribute tokens to user once they unlock and achievements. Also, they will be responsible to mint achievement, milestone and course completion NFTs. IPFS will store key attributes of user profile. We will be using **erc20** token: https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs and **erc721** token to mint smart contract: https://github.com/paritytech/ink/blob/master/examples/erc721/lib.rs. |
| 1. | Creation of smart contracts using Ink. | Smart contract would be required to send achievments NFT who complete the course. This action would be triggered from the backend once user hits any milestone or completes her course. |
| 2. | The DOT token | We will be using **DOT** token which is native to Polkadot platform to drive the platform so that users can buy the course and tokens will directly go to the creator's account. Creators can earn using this platform. |


### Milestone 2

* **Estimated Duration:** 3 weeks 
* **Costs:** 10,000 USD


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can run the frontend code, which will show how the new functionality works. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in Jest to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. We will serve our frontend via NGINX as our reverse proxy. |
| 0e. | Articles | We will publish a series of tutorials along with online workshops within our discord community so that we can educate our users the use of this platform. |
| 0. | UI development | We will be using **NextJS** which is on top of **React** to develop frontend of our educational platform. It will be served via Netlify. Profile of user will show achievement NFTs, certificates, profile, wallet information. Data that needs to be manually added is: Name, Past Experience, Skills. Please check wireframes given in this page. |

### Milestone 3

* **Estimated Duration:** 3 weeks 
* **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can run the backend code which will be written in Django, which will show how the new functionality works. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in Jest to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Articles | We will publish a series of tutorials along with online workshops within our discord community so that we can educate our users the use of this platform. |
| 0. | Database Modelling | Database modelling of all the first class entities.|
| 1. | API Design | High level API design.|
| 2. | User Authentication and Authorization | Building auth for the backend.|
| 3. | Course upload system | Development of course upload system and infra so that instructors can create and upload the course.|
| 4. | Student rating and review system | Development of review and rating system so that students can review a course.|
| 5. | API and Infrastructure | We are building our backend using Django which is written in **Python** due to it's strong ORM support. We will be using DRF(Django Rest Framework) to build the API layer. We will be using **py-substrate-api** library to communicate with Blockchain.|

* Our progress can be tracked here on this trello board: https://trello.com/b/mAEuIivn/product-development

## Additional Information :heavy_plus_sign: 

* We're currently implementing it in substrate ecosystem.
