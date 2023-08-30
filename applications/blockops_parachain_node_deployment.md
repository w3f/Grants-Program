# Parachain One-Click Deployment

- **Team Name:** Blockops Network
- **Payment Address:**
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3,

## Project Overview :page_facing_up:
Blockops Network is on a mission to enhance the web3 expereince for developers and startups by making it extremely easy and cost-effectve for anyone to setup, maintain and monitor their blockchain node infrastructure.

Our proposal includes the introduction of a one-click setup feature for bootstrapping parachains and a build-as-a-service platform for Substrate developers, significantly enhancing the efficiency and reliability of the development process within the Polkadot ecosystem.

### Overview

**Why are we building Parachain One-Click Deployment?**

A major hurdle that developers and projects encounter is the complexity involved in setting up, managing and maintaining parachain networks outside of just creating Single Node Deployments. The conventional process for bootstrapping parachains is time-consuming and requires a high level of technical expertise. Components like observability, scalability and reliability of their networks are still areas that cause a lot of Parachains pains.

Also, substrate developers often lack efficient and responsive build-as-a-service or CI platforms to help them run faster build and test their smart contract codes effectively. Existing platforms often don't provide access to live networks or dedicated machines specifically optimized for blockchain development and testing. This often results in slower iteration times and less reliable smart contract code, creating a gap between development and deployment phases.

Furthermore, Parachains prefers deploying their infrastructure to Dedicated Servers instead of Public Cloud. However, the complexity and cost associated with this endeavor often pose significant challenges to them.

In the existing ecosystem of the Polkadot network, there is a lack of comprehensive, hassle-free, observability solution designed to track the performance of nodes in the Polkadot and Kusama networks.

At Blockops Network, we've spotted these gaps and we’re set to empower developers & startups easily setup and manage their nodes operations on Polkadot.

This application involve:

- The development of Parachain One-Click deployment for networks building on Polkadot chains to easily bootstrap their entire network and deploy their Parachain Networks on our on-demand Spot VPS.

- On-demand Build-as-a-Service Substrate/Polkadot CI process for developers to run quick build, test, and runtime simulations against live blocks with our Beefy onDemand VPS.

- Ongoing cost of maintaining Public RPC Nodes

## Challeneges Developers and Startups faces when building dApps
- Complexity: Web3 Infrastructure is intrinsically complex. Developers and startups grapple with several complexities
  - Infrastructure Management: Setting up multi-cloud, multi-region or bare metal environments Infrastructure and ensuring they are updated with new releases is no small feat.
  - Optimization and Planning: From planning node pools, migrating between cloud vendors, to ensuring the chosen solution is secure, cost-effective, and performant, the task-list is endless.
  - Network and Protocol Management: Generating new testnets, validating protocol technologies, and shipping new features require extensive resources.
  - Slashing and Offline Penalties: Blockchain networks penalize nodes for misbehavior or being offline, putting stake assets at risk.
  - Network Collapse: The potential for an entire blockchain network to fail presents a looming risk.
  - It is more effective for parachains to deploy their nodes on Dedicated Servers in addition to helping decentralization, however there is no effective way for anyone to deploy their nodes to Dedicated Servers without having to deal with the complexity of setting up bare metal servers

- Zero Observability Solutions: 
  - There’s little to no observability solutions for monitoring the state of these nodes to enhance better performance.
  - From setting up databases, caches, streams, orchestrations, alert systems, metrics, and tracking SLAs to managing and maintaining every possible client configuration, OS, and middleware, the workload is immense.

- Engineering Overheads:
  - The high cost of hiring talented engineers combined with the financial implications of high turnover rates puts additional strain on startups and development projects.
  - Talent Crunch: There's a limited supply of engineers globally, especially those proficient in blockchain and web3 technologies.

- Expensive: Managing all these resources if not properly done can be a financial wormhole for developers and startups


## The Solution Blockops Provides

1. One Click Parachain Deployment
   - Fully open sourced
   - Support all chains on Polkadot
   - Deploy to a Dedicated Servers (IBP inclusive) and Pay as You Use
   - Connect to multiple nodes instantly powering your blockchain application. 
   - Multiple instance of a node type running
   - Faster testing against live networks

2. Fast build-as-a-service for Substrate Developers: This platform would provide dedicated machines optimized for blockchain development, enabling developers to build and iterate their smart contract codes faster and test them against live networks. By enhancing the efficiency and reliability of the development process, this platform would help bridge the gap between development and deployment, facilitating a smoother transition from concept to execution.



### Project Details

**MVP links**

- Link to all Demo Videos [here](https://drive.google.com/drive/folders/1iD34GjFdFC5OV5xW5lon11l7o7BH8gav)
- Link to Blockops UI screenshots [here](https://docs.google.com/document/d/18jH50srFp_p86jeyaAuiO6Rbk2MwBjuiuAXXQHXmrk8/edit#heading=h.o1pb3iw6daw7)
- Link to MVP already built for Parachain Deployment [here](https://beta-app.blockops.network/login)

We have developed a one-click deployment feature for Parachains, Node Operators and Networks looking to setup robust Infrastructure on Polkadot.

This platform provides substrate developers with an effortless solution to easily bootstrap their entire network and deploy their Parachain Networks on a public cloud or Dedicated Servers situated within the geographic regions where the Infrastructure Builders' Programme (IBP) Provider services are available. This ensures that developers and enterprises can build faster and manage parachains easily.

The user interface and infrastructure set up for this project are largely complete and ready. To get a glimpse of the minimum viable product (MVP), you can the [website](https://beta-app.blockops.network/login).

**The System Overview**

This project consists of two main system:
- blockops-coreapi-service
- blockops-frontend-end

The blockops-coreapi-service built with nodejs and typescript is the backend service which integrates with the infrastructure allowing developers and parachain teams to try multiple chain configurations while setting up the parachains, as well as to choose different nodes to try and test for the best possibilities on the parachain.

The blockops-frontend-end connects to the blockops-coreapi-service and is built using typescript and next.js, creating a modern web dashboard. it provides a unique set of features allowing users to deploy nodes easily and it also provides users with a comprehensive overview of all essential metrics related to their nodes thereby ensuring real-time visibility into the performance nodes.

**Mockups and UI components**

The following are the mockups for high-level application operations, these are subject to change during product iterations. UI is purposely designed to be as simple as possible.

- Deploy A Parachain
<a href="https://ibb.co/ryQ57qF"><img src="https://i.ibb.co/BsfTzvc/Parachain-flow01.jpg" alt="Parachain-flow01" border="0"></a>

- Select A Network
<a href="https://ibb.co/d4VmpR4"><img src="https://i.ibb.co/MktB1mk/Parachain-flow02.jpg" alt="Parachain-flow02" border="0"></a>
- Create New Project
<a href="https://ibb.co/CmQwccg"><img src="https://i.ibb.co/Fmzhrr2/Parachain-flow03.jpg" alt="Parachain-flow03" border="0"></a>
- Select Cloud Provider
<a href="https://ibb.co/hXBf1Bd"><img src="https://i.ibb.co/1sr6JrX/Parachain-flow04.jpg" alt="Parachain-flow04" border="0"></a>

- Launch Configuration
<a href="https://ibb.co/3vFVSDX"><img src="https://i.ibb.co/ScmHVhT/Parachain-flow05.jpg" alt="Parachain-flow05" border="0"></a>

- Summary
<a href="https://ibb.co/3hvZQqF"><img src="https://i.ibb.co/Th13dS0/Parachain-flow06.jpg" alt="Parachain-flow06" border="0"></a>

  <a href="https://ibb.co/64QjQ5m"><img src="https://i.ibb.co/Vv6f68t/Parachain-flow07.jpg" alt="Parachain-flow07" border="0"></a>

- Active Networks
<a href="https://ibb.co/Y8NgnpH"><img src="https://i.ibb.co/P4rkXwq/Parachain-flow08.jpg" alt="Parachain-flow08" border="0"></a>

- UI Mockups of Blockops Monitoring Implementation

  <a href="https://ibb.co/9pKwqFs"><img src="https://i.ibb.co/NFD1L8Z/Monitoring-1.jpg" alt="Monitoring-1" border="0"></a>

  <a href="https://ibb.co/CPW1n1b"><img src="https://i.ibb.co/GHFxVxW/Monitoring-2.jpg" alt="Monitoring-2" border="0"></a>

  <a href="https://ibb.co/HKZfyN7"><img src="https://i.ibb.co/XWHrPyX/Monitoring-3.jpg" alt="Monitoring-3" border="0"></a>

**An overview of the technology stack to be used**

- Nodejs and Reactjs (backend and frontend framework)
- TypeSript (frontend and backend scripts)
- Golang
- Docker
- Kubernetes
- Pulumi
- Prometheus & Grafana


### Ecosystem Fit

- **Where and how does your project fit into the ecosystem?:** With the complexity involved in setting up, managing and maintaining parachain networks, this project with enable faster and easier parachain deployment making the technology more accessible and promoting rapid development and also provides dedicated optimized machines for substrate development.


- **Who is your target audience?:** Our target audience are dApps developers looking to bootstrap their parachains network and get started quickly and substrate developers substrate developers looking to build and iterate faster as well as test their smart contracts codes against live networks with Beefy built for purpose dedicated machines.

- **What need(s) does your project meet?:** This project will significantly enhance the efficiency and reliability of the development process within the Polkadot ecosystem.

- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?:** OnFinality has been a successful and proven model for only single node deployment. However Onfinality doesn't offer bootstrappable node deployments for parachains. There is currently no out of the box advanced analytics and proactive monitoring to ensure a production grade incident management of networks and nodes. From that perspective, we are a unique solution that combines both services and offers additional interests to our users.

## Team :busts_in_silhouette:

### Team members

- Adedayo Akinpelu - Team Lead: With a compelling 7-year journey in the web3 arena, Dayo has brought his expertise to roles such as Infrastructure Engineer at Flow Blockchain and Quidax Technologies, and Infrastructure Lead at Composable Finance.

- Marcelo Mendoca - Infrastructure Lead: Marcelo, a seasoned Site Reliability Engineer, has charted a dynamic journey within the web3 space, demonstrating his leadership acumen across Software Engineering, DevOps, and Site Reliability.

- Franklin Okpako - Devops & SRE: With over 5 years of experience under his belt, Frank has shown proficiency in the role of a DevOps Engineer. His extensive qualifications include Cloud Native Engineer, CKA, CKS, and AWS Certified DevOps Engineer-Professional.

- Calvin Puram - Devops & SRE: Skilled DevOps engineer with a track record of building scalable applications, optimizing systems, and implementing robust monitoring solutions.

- Oluwatimilehin Adesoji - Software Engineering Lead: Timilehin is a seasoned software engineer with 10+ years of experience building highly available and scalable systems. He is motivated to drive projects/businesses in every way possible through tech.

- John Etokhana - Product Design Lead: As a digital designer across visual identity development, interaction style and cross-platform preparation, John strives to continue his string of successes in the building, testing and refinement of user-centered digital interfaces and experiences.


### Contact

- **Contact Name:** Adedayo Akinpelu
- **Contact Email:** adedayo.akinpelu@blockops.network
- **Website:** https://blockops.network/

### Legal Structure

- **Registered Address:** 8 The Green, Ste A, Dover DE
- **Registered Legal Entity:** Blockops Network Inc

### Team's experience

- **Composable Finance**: Setup Networks for Composable Finance for all their chains (Dali, Picasso and Composable)
- **Polkadot & Kusama**: We have vast experience running RPC and Validator nodes on all Polkadot chains.
- **Flow Blockchain:** We have experience running Access Nodes and Consensus Nodes on Flow Blockchain
- We also run Self Managed Nodes (Bitcoin, Ethereum, USDC, USDT etc) for major crypto exchanges in Africa (e.g [Quidax](https://www.quidax.com))

Our team closely monitors the network, stays up to date with upgrades and governance decisions, and adjusts our nodes' configurations accordingly.

Through our experience with Polkadot, we have developed robust strategies to maximize our validator node's performance, optimize staking rewards, and ensure continuous participation in the network's consensus mechanism.

### Team Code Repos

- Frontend - https://github.com/blockops-sh/user-dashboard-client
- Backend -  https://github.com/blockops-sh/api-core-service
- Infrastructure - https://github.com/orgs/blockopsnetwork/repositories


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/haroldsphinx/
- https://www.linkedin.com/in/franklin-okpako/
- https://www.linkedin.com/in/calvin-puram/
- https://www.linkedin.com/in/oluwatimilehin-adesoji-36ab249a/
- https://www.linkedin.com/in/john-etokhana-497671119/



## Development Status :open_book:

Before applying for the Web3 Foundation Grant, the Blockops team has built a DevOps automation for Polkadot and other substrate chains. In our journey so far, we have:

- Launched API Service Beta for Polkadot chains (Polkadot, Kusama and Westend).
- Launched Dedicated Node Service Private Beta.
- Launched Data service for Polkadot Chains.
- Launched MVP for one-click deployment feature for Parachains, Node Operators and Networks looking to setup robust Infrastructure on Polkadot.

## Development Roadmap :nut_and_bolt:

For this proposal we focus on building and streamlining the process of setting up parachains through a one-click setup feature. This would dramatically reduce the time and technical expertise required to bootstrap a parachain network, making the technology more accessible to a broader range of users and accelerating the pace of development within the Polkadot ecosystem.


### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  5 FTE
- **Total Costs:** 30,000 USD.

### Milestone 1 Development of full blown parachain deployment feature

- **Estimated duration:** 1 month
- **FTE:**  14
- **Costs:** 53,400 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) set up parachains through a one-click setup. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Standalone Executable | Will provide standalone executable that start the GUI service and other corresponding |
| 0e. | Article | Using our PR channels, we will publish an article that explains the high-level overview of automation as part of the grant, followed by a set of extensive examples. |
| 1. | Initial Automation | Completion of the initial development phase of the platform. We will build the core GUI driven automation for one-click deployment feature for Parachains, Node Operators and Networks looking to setup robust Infrastructure on Polkadot |
| 2. | Node type support | Implement setup of all node types including Full node, Validator node, Boot node and Collator node for the respective relay chain and parachain |
| 3. | Bug Fixes | Testing of the application including functional, performance, and security testing  |




### Milestone 2 Monitoring

- **Estimated Duration:** 1 month
- **FTE:**  5
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) set up parachains through a one-click setup. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Standalone Executable | Will provide standalone executable that start the GUI service and other corresponding |
| 0e. | Article | Using our PR channels, we will publish an article that explains the high-level overview of automation as part of the grant, followed by a set of extensive examples. |
| 1. | Improve UX Dashboard | Detailed reports on node performance, including usage statistics, latency, and uptime. |
| 2. | Setup Dashboard | We will setup both standalone and customize dashboards that will log and give insight on operations perform by the different users |



## Future Plans

- We will frequently post on social media (Twitter, Medium, Youtube) to provide development news and video tutorials regarding our platform. We will also work with influencers, who can break down complex concepts and provide clear guidance to the mainstream users on how to use our platform.

- Our long term plan is to provide a suite of products that will allow users and enterprises to built and deploy use case or application specific parachains.



## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Web3 Foundation Website and personal recommendation.


- LinkedIn: [https://www.linkedin.com/blockops](https://www.linkedin.com/company/blockopssocials/mycompany/)
- Twitter: [https://twitter.com/blockopsnetwork](https://twitter.com/blockopsnetwork)
- Website: [https://blockops.network/](https://blockops.network/)
- Email: hello@blockops.network