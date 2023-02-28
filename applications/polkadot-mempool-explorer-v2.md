# polkadot-mempool-explorer-v2

  

  

-  **Team Name:** NA

  

-  **Payment Address:** TBD

  

-  **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

  

  

## Project Overview :page_facing_up:

  

Mempool Explorer enables Polkadot ecosystem members to monitor pending transactions across several parameters and gain meaningful insights.

  

  

**Follow-up of Mempool Dashboard - Version 1**

  

- Link to the phase 1 project: [medium](https://medium.com/protofire-blog/monitoring-pending-transactions-in-polkadot-with-mempool-explorer-36e88e8a41ed)

  

  

However the project was created by a different team, Protofire. Currently it's not in working condition, the provided link https://mempool.dot.protofire.io/ doesn't work anymore.

  

  

### Overview

  

Version 2 of mempool dashboard, is a tool to monitor pending transactions in Polkadot, Kusama, Westend, Rococo and you can add your customized network.

  

  

**Current issues with the initial implementation**

  

version 1 of the mempool dashboard is not in working condition. I took this opportunity to revive the project and create a next version of the original project by fixing the current issues, creating a new UI to enhance user experience and readability and improvements to the API.

  

  

My first task was to understand the codebase, identify the current issue and provide a fix for it. After applying a few patches I was able to restore back to the original state, however still with few issues.

  

  

**Noteable issues**

  

- [proper balance amount was not displayed correctly](https://github.com/muddlebee/polkadot-mempool-explorer/issues/4)

  

- [docker scripts not working](https://github.com/muddlebee/polkadot-mempool-explorer/issues/1)

  

- [enhance caching logic](https://github.com/muddlebee/polkadot-mempool-explorer/issues/5)

  

- [feature to view accounts/txn details not working properly across different networks](https://github.com/muddlebee/polkadot-mempool-explorer/issues/6)

  

- lack of proper code documentation ( it was difficult for me to understand the codebase initially )

  

  

and set of exhaustive open issues https://github.com/muddlebee/polkadot-mempool-explorer/issues

  

track of patches/fixes done till date - https://github.com/muddlebee/polkadot-mempool-explorer/commits/dev

  

We have fixed majority of the issues already.

  

  

**What's in version 2**

  

  

- new UI for desktop and mobile view [figma link](https://www.figma.com/file/2EIEKQXfpI6wBldxQ18h6Q/Polkadot-work?node-id=0:1&t=aWz2emO8pIhjWyP5-1)

  

- fix the existing issues

  

- enable CI/CD deployment to the hosted servers and fix docker scripts

  

- series of tutorials on polkadot-js APIs

  

Currently there's a lack of proper tutorials/education materials for anything polkadot-js API related stuff other than the official docs. I would like to create an extensive tutorial on how to consume polkadot-js APIs (more details in Milestone section).
  

  

why create a separate set of tutorials?

  

- currently the [polkadot JS docs](https://polkadot.js.org/docs/api) is difficult for beginners with zero or less technical knowledge about the polkadot architecture to understand properly.

  

- easy to learn and develop using polkadot JS APIs/SDKs as compared to substrate in Rust

  

  

### Project Details

  

Github: https://github.com/muddlebee/polkadot-mempool-explorer

  

API : /api folder

  

Frontend: /web folder

  

  

API uses nodejs on top of polkadot js API

  

Frontend uses React to render the transaction blocks in the UI

  

  

**Note** We already have done 50% of the proposed work, and its live in the url below

  

[mempool-ui](http://139.84.168.166:3000/#/main)

  

  

### Technology stack

  

  

- javascript, nodejs, react

  

- polkadot js API

  

- docker

  

  

### Ecosystem Fit

  

Solution that would allow members of the Polkadot ecosystem to monitor information related to pending transactions.

  

More details has been published in the phase 1 delivery report [medium](https://medium.com/protofire-blog/monitoring-pending-transactions-in-polkadot-with-mempool-explorer-36e88e8a41ed)

  

  

Tutorials for polkadot JS APIs will help educate folks who are not expert in Rust/Substrate and want to adopt JS first approach first. We have many examples of live webapps integrating polkadot JS APIs like wallets, tools etc.

  

  

## Team :busts_in_silhouette:

  

  

### Team members

  

#### Name of team leader:

  

- Anwesh Nayak (@muddlebee)

  

#### Names of team members:

  

- Arnav Nayak

  

- Dikhyant Krishna

  

  

### Contact

  

  

-  **Contact Name:** Anwesh Nayak

  

-  **Contact Email:** anweshknayak@gmail.com

  

  

### Legal Structure

  

  

-  **Registered Address:** NA

  

-  **Registered Legal Entity:** NA

  

  

### Team's experience

  

I have around 5 years of experience in full stack development. Currently work as a tech lead at B2B fintech firm. Also a polkadot ambassador and the community moderator of the official polkadot/kusama discord. I have been contributing to the ecosystem since last year. Also participated in Thousand Contributors Programme by w3f and have been adding suggestions/improvements across the w3f github projects.

  

  

**Arnav**, our lead designer has 2 years of experience in product design prior to that used to work as a architect with few years of experience.

  

  

**Dikhyant**, frontend developer has around 2 years of experience in web development, creating UI out of design specs.

  

  

### Team Code Repos

  

  

- Currently hosted here https://github.com/muddlebee/polkadot-mempool-explorer

  

will move to a separate github repo once grant is approved

  

  

### Team LinkedIn Profiles (if available)

  

  

- <https://www.linkedin.com/in/anweshnayak/> Anwesh Nayak

  

  

- <https://www.linkedin.com/in/arnav-nayak-321595141/> Arnav Nayak

  

- <https://www.linkedin.com/in/dikhyantkrishnadalai/> Dikhyant Krishna

  

  

## Development Roadmap :nut_and_bolt:

  

  

### Overview

  

  

-  **Total Estimated Duration:** 7-8 weeks
  

-  **Full-Time Equivalent (FTE):** 3

  

-  **Total Costs:** 9000 USD

  

  

### Milestone 1

  

#### version 2 of mempool dashboard and polkadot js API tutorials


  

-  **Estimated Duration:** 7-8 weeks

  

-  **FTE:** 3

  

-  **Costs:** 9000 USD

   
|  Number | Deliverable                            | Specification                                                                                                                                                                                                                |
| ------: | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation                          | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to view pending transactions in dashboard |
| **0c.** | Testing and Testing Guide              | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                              |
| **0d.** | Docker                                 | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |  |  |  |
|      1. | new UI for desktop and mobile view and fix existing issues|                                                                                                                                            |
|      2. | enhance the APIs and fix existing issues                                                                                                                                                                        |
|      3. | enable CI/CD | spin up a server instance for hosting the backend and deploying the frontend at github pages                                                                                                                                                     |
  | 4a | polkadot js API tutorials             | We will provide both **inline documentation** of the code and a series of **tutorial** that explains how to run sample examples |
| 4b | Graphics/Illustrations | Illustrations wherever required to explain complex topics
| 4c | Publish tutorials online  | Use a technical documentation tool to publish the tutorials online 

Sample tutorials
- https://github.com/muddlebee/polkadot-js-beginner-series
- https://rust-unofficial.github.io/too-many-lists/index.html


Chapters overview

  

1. Explain the basics of polkadot architecture

2. Role of polkadot JS API, substrate and how to interact with the live blockchain

3. How to fetch the metadata, and what are the metadata of the blockchain? https://polkadot.js.org/docs/api/start/basics

4. What's the purpose of polkadot js console and how to use it? https://polkadot.js.org/apps/#/

5. Explain transaction lifecycle, and how to perform transactions through the API

and more .....

Overall goal it to curate a series of tutorials to build the concepts of polkadot blockchain.
  

#### Cost breakup

Design - 1500 USD

Frontend - 1500 USD

API/backend - 2500 USD

CI/CD setup + server costs/maintenance - 500 USD

polkadot js API tutorials - 3000 USD
  

  

  

## Future Plans

  

  

### Version 2 of polkadot JS tutorials

  

- Create a extensive and expanded set of tutorials covering most of the [polkadot JS APIs](https://polkadot.js.org/docs/api/)

  

- Make it good enough so it can be integrated and added over to the education repo at w3f https://github.com/w3f/w3f-education

  

- Expand the goal of education through quality content

  

- Add good explanatory graphics to explain the basic concepts