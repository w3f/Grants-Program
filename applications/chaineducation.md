# Open Grant Proposal


*  **Project Name:** ChainEducation

*  **Team Name:** ChainEducation Team

*  **Payment Address:** Bitcoin Address: bc1qtr9993ch6zlr29j5c22zzax57h62x5gj24wtxk

*  **Level:** 2


## Project Overview :page_facing_up:

### Overview

ChainEducation is a decentralized platform where anyone can upgrade their web3 skills from hands on tutorials.

They will be able to earn certificates as NFT once they complete a course.

Platform will also create their profile so that they can showcase it to the community. They can add their projects and achievements too.

Educators can create their classroom, they can upload as many courses in a classroom.

Students can get them enrolled in a classroom. For every achievement, they will earn achievement NFT.

Students can rate and review the courses too.

Instructors can create a paid course too, if any student purchases a course, on whatever price they will purchase will directly go to the instructor of the course.

We are also working on our own Job Board where users can find Web3 jobs with ease.

### Motivation
We believe that Web3 education is broken. If we search on the internet, we only find getting started tutorials. It's very hard to find complete in-depth tutorials. We intent to change it. We are introducing ChainEducation to the world where anyone would be able to aquire Web3 skills. Since educators are going to get paid in order to create course, they will be motivated enough to create in-depth course.

### Ecosystem Fit
 -   Where and how does your project fit into the ecosystem?
Our ecosystem arms users with the knowledge to create dApps and Blockchains on top of Substrate ecosystem.
 -   Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Anyone who wants to learn how to create Smart Contracts on top of Ink or create their own Blockchain on top of Substrate ecosystem are our target users.
  

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

### User Journey
 - User registers on top of our platform.
 - They head over to the tracks page and choose a track.
 - They choose the first lesson and start to learn.
 - Users will be able to clear doubt on our Discord community.
 - They complete a course.
 - Once they complete a course, they get NFT certificate stating that they completed the course.
 - Once user is equipped with the knowledge, they can register themselves on our Job Board to get a Job.
  

### Simillar platforms

- https://buildspace.so/solidity

- https://learnweb3.io/

- https://www.web3.university/

  

### How our platform will be unique?

- None of the above platform provides hands-on tutorials on Substrate ecosystem and Rust. We will cover both of them.

- Creators can earn with our platform if anyone buys their course. This will also act as marketing of our platform since creator will promote her platform our her social media.

- We will be giving achievement and course completion NFTs.

- We are also working on our own Job Board where users can find Web3 jobs with ease.


### Website Designs

1. ![Home Page](https://i.imgur.com/sUvhJbb.png  "Home Page")

2. ![About Us Page](https://i.imgur.com/hNWkqOK.png  "About Us Page")

3. ![Instructor Page](https://i.imgur.com/YcLxf2q.png  "Instructor Page")

4. ![Tracks Page](https://i.imgur.com/8s4JwuB.png "Tracks Page")


## Team :busts_in_silhouette:

### Team members

* Muskan Marwah, Co-Founder

* Aviraj Khare, Co-Founder

### Contact

*  **Contact Name:** Aviraj Khare

*  **Contact Email:** avirajkhare00@gmail.com


### Legal Structure

*  **Registered Legal Entity:** Not yet registered

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

*  **Total Estimated Duration:** 11 weeks

*  **Total Costs:** 20,000 USD

### Milestone 1

*  **Estimated Duration:** 8 weeks

*  **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) deploy our smart contracts and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in Jest to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Articles | We will publish a series of tutorials along with online workshops within our discord community so that we can educate our users the use of this platform. |
| 0. | Creation of smart contracts using Ink. | These smart contracts will be responsible to distribute tokens to user once they complete the course. We will be using **erc20** token: https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs and **erc721** token to mint smart contract: https://github.com/paritytech/ink/blob/master/examples/erc721/lib.rs. |
| 1. | Creation of smart contracts using Ink. | Smart contract to store all the tracks. A track will have multiple courses. A course will have multiple lessons. Video of a lesson will go inside IPFS and it's hash will be stored inside a smart contract. A course will have multiple reviews. Smart contract will also store user's information weather user is an instructor or a student. |

### Milestone 2

*  **Estimated Duration:** 3 weeks

*  **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can run the frontend code, which will show how the new functionality works. |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in Jest to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. We will serve our frontend via NGINX as our reverse proxy. |
| 0e. | Articles | We will publish a series of tutorials along with online workshops within our discord community so that we can educate our users the use of this platform. |
| 0. | Homepage | We will be building v2 of our homepage using NextJS. Our homepage will provide all the relavent information. It will contain list of top courses along with it's rating and reviews. A video on how to use this platform. |
| 1. | Signup Page | This page displays signup page. |
| 2. | Login Page | This page displays login page. |
| 3. | Profile Page | This will be user's profile page. It will contain Education, Work Experience of a person. Also, user can choose to showcase all the Course Completion NFTs user is having. |
| 4. | Tracks Page | This page displays all the learning tracks. |
| 5. | Course Page | This page displays information of a perticular course. |
| 6. | Lesson Page | This page displays specific lesson. |
| 7. | Terms and Conditions Page | This page displays terms and conditions. |
| 8. | Privacy Policy Page | This page displays Privacy Policy. |
| 9. | About Us Page | This page displays About Us page. |
| 10. | Contact Us Page | This page displays Contact Us page. |
  

* Our progress can be tracked here on this trello board: https://trello.com/b/mAEuIivn/product-development


## Additional Information :heavy_plus_sign:

  

* We're currently implementing it in substrate ecosystem.