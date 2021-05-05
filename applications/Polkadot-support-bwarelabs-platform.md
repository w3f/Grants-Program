# W3F Open Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:** Decentralized API Platform - Polkadot Support
* **Team Name:** Bware Labs 
* **Payment Address:** 0xaf6Efb25e15A5A847547F55F94E74F8a61f3Db34

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

Bware Labs' main product is a Decentralized API Platform that provides on-demand, decentralized API access for some of the most important networks in the crypto space. The platform features an application layer that integrates full nodes from third-party providers and exposes API endpoints (RPC, REST, Websockets, GraphQL) to consumers via an easy-to-use web interface. Node providers will need to stake BWR tokens to join the platform and will get a part of the rewards coming from subscription plans paid by API consumers. The tokens stacked by third party node providers can be subjected to slashing if their nodes underperfom. Bware Labs deploys a node integrity protocol and a BSC-based payment system to make this possible.
Currently, our MVP only supports Ethereum and Binance Smart Chain. and we plan on adding Polkadot to the supported network list, which is the purpose of this application to the Web3 Foundation Open Grant. We believe that all the blockchain networks should benefit from the same level of tooling and ease of access as Ethereum does, and consider Polkadot to be one of the most solid projects in the blockchain world at the moment. We think that providing easy access to its network for developers, wallet providers and exchanges could be beneficial in increasing the network's adoption.


#### Benefits of Bware Labs' Decentralized API platform
- Access to blockchain is provided in a decentralized manner;
- For the first time, full node owners are incentivized to deploy and maintain nodes thus supporting their respective networks;
- Our integrity protocol and monitoring system combined with a slashing mechanism will guarantee reliability and up-time;
- Reduced cost and time for API consumers 

### Project Details

- Mockups/design can be found [here](https://www.sketch.com/s/d97e5724-7866-4b52-b304-8d69e1276a6b/a/DPwq53y)
- Documentation can be found [here](https://docs.bwarelabs.com/)
- Technology stack
    - Frontend: Web3, React, TypeScript, VanillaJS, Firebase, Jest, Cypress
    - Backend: Python, Ansible, Prometheus, Nginx, Kubernetes(k8s), Solidity, Redis, Kafka
- MVP currently supporting ETH and BSC can be found [here](https://app.bwarelabs.com)

#### Scope
The project scope is to offer API endpoints, on demand, for the most important projects in the crypto space. We aim to do that by incentivizing full node owners and encouraging them to provide access to their servers via our platform, where end-users can purchase multi-tiered subscriptions to create and use API endpoints. The subscription fees will be split between Bware Labs, as the platform provider, and third-party node providers, based on the utilization of their nodes. To ensure uptime and good behaviour of the nodes, the third party providers are required to stake an amount of Bware tokens, which can be slashed if the node underperforms, as assessed by the Bware protocol. In this manner, the end-users are supported in accessing high-quality services, while the node providers receive a fair reward for the utilization of their nodes.

#### Grant scope

- Add support for Polkadot on the platform (Functional and UI)
- Deploy and maintain Polkadot full nodes until we reach the decentralization phase
- Include Polkadot into the subscription plans when deploying the payment system
- Implement an integrity protocol and monitoring system for Polkadot nodes
- Start accepting third party full node providers into the platform



### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

* Where and how does your project fit into the ecosystem?

Bware Labs Decentralised API is a utility platform coming to support developer needs for quick and reliable blockchain access.

* Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

The target audience consists of Wallet Providers, Dapp developers, exchanges, and other parties interested in obtaining access to various blockchains.

* What need(s) does your project meet?

The project solves both time and cost issues for API consumers who need access to the Polkadot blockchain. Our platform will eliminate the need of deploying and maintaining your own full node by offering the same level of reliability, up-time, and latency as hosting one's own node (except for the case where your own full node would be hosted on-premise).

* Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

Yes, there is a project which is due to launch soon on Polkastarter called PinkNode

  * If so, how is your project different?

While they are offering nodes as a service and APIs using their own infrastructure in a centralized manner we are planning to build an ecosystem where node owners can participate with their servers and get rewards, thus offering a decentralized API and infrastructure

  * If not, are there similar projects in related ecosystems?

## Team :busts_in_silhouette:

### Team members

Our entire team can be found on the Bware Labs website [here](https://bwarelabs.com/team/)

### Contact

* **Contact Name:** Radu Enoiu
* **Contact Email:** radu@bwarelabs.com
* **Website:** https://bwarelabs.com/

### Legal Structure

* **Registered Address:** Craigmuir Chambers, Road Town, Tortola, VG 1110, British Virgin Islands, registered under registration number 2058271, represented by the director Flavian-Costin Manea (CEO)

* **Registered Legal Entity:** Bware Labs Ltd

### Team's experience

The BwareLabs team consists of mostly engineers and technical people with solid computer science backgrounds and experience acquired working for companies like Fitbit, Ericson, Google, 888Poker, Luxoft, Intel, and many others.

Most of our core team benefits from vast blockchain experience acquired working for other blockchain companies such as Ankr, where the team had the chance to investigate, build and integrate nodes (validators or full nodes) for a large list of the most important blockchain projects out there, such as ETH, BSC, most of the Substrate based networks like Polkadot, Kusama, Darwinia or Stafi, and many others including Elrond, Avalanche and Matic.


### Team Code Repos

* https://github.com/bwarelabs/dapi-app
* https://github.com/bwarelabs/endpoint-generator

Our repos are currently private but we can provide access to persons interested in checking them out.


### Team LinkedIn Profiles

* https://www.linkedin.com/in/maneaflavian/
* https://www.linkedin.com/in/alexandru-minulescu-376b1459/
* https://www.linkedin.com/in/anca-ecaterina-chirila-4144ba38/
* https://www.linkedin.com/in/radu-enoiu-b76b566a/
* https://www.linkedin.com/in/matei-popp-76776115a/
* https://www.linkedin.com/in/alexandru-catalin-filip-bb2809184/
* https://www.linkedin.com/in/marius-nita-a06449103/
* https://www.linkedin.com/in/raul-olteanu-b01363199/
* https://www.linkedin.com/in/dragosbostan/
* https://www.linkedin.com/in/silviu-daniel-gae-6b109a121/

## Development Status :open_book:


The work for the Decentralized API platform is currently in progress with its free plan already deployed and functional. However, the Polkadot integration, which is the scope of this grant application, is not currently implemented and is next on our development roadmap.


## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 6 Months
* **Full-Time Equivalent (FTE):**  Milestone 1 - 1.5 FTE
Milestone 2 - 2 FTE
* **Total Costs:** 23,000 USD

### Milestone 1 - Integrate Polkdot Network into the Decentralized API Platform

* **Estimated Duration:** 1 month 
* **FTE:**  1.5
* **Costs:** 3000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Will include platform usage tutorial on https://docs.bwarelabs.com, RPC and WSS API usage examples for Polkadot, code documentation |
| 0c. | Testing Guide | Testing plan will be provided after the first milestion along with performance tests for latency and rate-limiting  done with Apache Jmeter |
| 0d. | Article/Tutorial | An article about the Polkadot integration will be published on Bware Labs Medium space at https://medium.com/bware-labs
| 1. | Full Node Deployment | The team will deploy and sync a minimum of three full nodes for the Polkadot Network and add monitoring and alerting using Prometheus|  
| 2. | Infrastructure integration | A Nginx load balancer will be deployed for the Polkadot full nodes, rate limiting will be set |  
| 3. | Backend integration | Backend support for exposing Polkadot endpoints will be implemented, users will be granted access to a maximum of one Polkadot endpoint per wallet, database schema will be updated |  
| 4. | Frontend integration | The platform's UI will be updated to add Polkadot in the list of supported networks |  
| 5. | Testing | We will perform both manual testing as well as performance testing in terms of supported traffic, latency, and rate-limiting - test results will be documented and provided |


### Milestone 2 — Payment system and decentralization


* **Estimated Duration:** 5 months
* **FTE:**  2
* **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Will include platform usage tutorial with subscription plans differences explained on https://docs.bwarelabs.com, RPC and WSS API usage examples for Polkadot, code documentation |
| 0c. | Testing Guide | Testing plan will be provided after the first milestion along with performance tests for latency and rate-limiting  done with Apache Jmeter, unit test code coverage at least 30% |
| 0d. | Article/Tutorial | An article about the Polkadot integration will be published on Bware Labs Medium space at https://medium.com/bware-labs
| 1. | Implement payment system | The team will implement BSC payment system based on BWR tokens that should be realeased by this time |  
| 2. | User subscriotion plan functionality | A backend management system of subscription plans and user permissions will need to be implemented to handle different user needs |  
| 3. | Auto scaling | Auto-scaling will need to be implemented to make sure the full-nodes provided by Bware Labs at this stage (before decentralization) are able to serve the number of requests coming from subscribers|  
| 4. | Frontend updates | The platform's UI will be updated to integrate payment plans and subscription management for users|  
| 5. | Integrity protocol development | The team will implement an integrity protocol that ensures full node providers good behaviour and includes checks for being in sync with Polkadot network, up-time and latency within selected thresholds|  
| 7. | Slashing mechanism | A slashing system will be implemented from the beggining to guarantee full node providers compliance |  
| 8. | Develop UI for node providers | Bware Labs will implement and deploy an UI from where node providers can manage their accounts, stake tokens or verify and claim rewards |
| 9. | Testing | We will perform both manual testing as well as performance testing in terms of supported traffic, latency, and rate-limiting - test results will be documented and provided |

...



## Future Plans

Please include here

* how you intend to use, enhance, promote and support your project in the short term, and
* the team's long-term plans and intentions in relation to it.

We are planning to raise funds by releasing a token in order support the platform development and infrastructure hosting and once we have reached decentralization we’ll work on adding support for other major networks like Kusama, Avalanche or Solana.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

We have heard about the foundation a long time ago via Twitter and we decided to apply after checking the website and some medium articles

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

* Work you have already done.
* Wheter there are any other teams who have already contributed (financially) to the project.
* Previous grants you may have applied for.
