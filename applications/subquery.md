# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** SubQuery
* **Proposer:** https://github.com/ianhe8x
* **Payment Address:** bc1qmm3esqr57farn2dextdvhjs962wx08fecsxs90 

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview
Almost every substrate project has a need to process and query data. 
SubQuery is a open-sourced tool to fill the blank of this area as a complete solution and should be core infrastructure for the Polkadot ecosystem.
We expect it to cover how to Extract, Transform, Persist, and Query data in the beginning and how to Connect and Present data in the future.

### Project Details 
In this proposal, we provide a complete workflow to create a live data query system. 

#### Step #1: Create a subquery project
1. use `@subql/cli` tool we provide to create a subquery project
    * it is written in typescript
    * user needs to config the project, define a schema and implement mapping functions
2. use `@subql/cli` to generate types from the given schema
3. use `@subql/cli` to compile and pack the subquery project

#### Step #2: Run an indexer
Prerequisites
* Indexer requires an archive node to extract chain data from
* A postgres database

Then start our `@subql/node` with the path of local subquery project as arguments, `@subql/node` will handle the rest.

#### Step #3: Run a Query Service
We do have plan for a custom built graphql query service `@subql/query`, but in this stage we will use [Harura](https://hasura.io) to do the job.

#### Components
Npmjs Packages to published:
* `@subql/cli`
* `@subql/node`

### Ecosystem Fit 
* [Hydra](https://github.com/Joystream/hydra)
* [substrate-graph](https://github.com/playzero/substrate-graph)
The original intentions are different and that leads to different technical decisions.
* These two projects are both created by a substrate-based blockchain team in order to fulfill the needs of their own chains in the beginning and then they adapted them into standalone projects.
* The motivation of us is to make a tool that solves query demands of all substrate blockchains right from the beginning. We also plan to then provide a hosted solution to lower the barriers of entry further. 

The differences:
1. Secure execution of mapping functions are not top concerns for them, but is a hard requirement for us and will be supported in the proposal.
2. We don't want to depend on 3rd party libs in the core code of the project, libs such as warthog used by Hydra.
3. Api access within the mapping functions will be supported

## Team :busts_in_silhouette:

### Team members
* Sam Zou: Project manager
* Ian He: Team leader
* Jay Ji: Fullstack developer

#### Partime members
* James Bayly

### Team Website	
* https://onfinality.io

### Legal Structure 
OnFinality Limited, New Zealand

### Team's experience
We are people behind OnFinality which is an infrastructure saas platform for blockchain teams and user to launch nodes and get access to endpoint of a large range of blockchain protocols.

We have supported many Polkadot ecosystem projects already including Acala, Darwinia, Plasm, Edgeware.

Ian led a team and won 2nd price in the substrate hackathone in Hangzhou 2019.    

### Team Code Repos
* https://github.com/onfinality-io

### Team LinkedIn Profiles
* https://www.linkedin.com/in/sam-zou-5b8169a/
* https://www.linkedin.com/in/yin-he-7a266345/
* https://www.linkedin.com/in/qiang-ji-58aab276/
* https://www.linkedin.com/in/james-bayly/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 1.5 month
* **Full-time equivalent (FTE):**  2
* **Total Costs:** 1.8

### Milestone 1
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 1.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | @subql/cli | We will create a npm package that can generate types, build and pack the subquery project. |
| 2. | @subql/node | We will create a npm package that can load a subquery project and index the specified blockchain. |
| 2.1 | @subql/node | will support block handler, call handler and event handler |
| 2.2 | @subql/node | will execute mapping functions in a sandbox executor one way or another. |  
| 3. | Deploy | will provide a dockercompose file and kubernetes deploy yamls |
| 4. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can create, run and serve their subquery project. |

### Milestone 2
* **Estimated Duration:** 2 weeks
* **FTE:**  2
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | @subql/cli | We will create a npm package that can create scalffold of a subquery project. |
| 2. | @subql/node | `@polkadot/api` will be accessible within the mapping functions and in the meantime we will make our best effort to keep the indexing result deterministic. |
| 3. | Deploy | will provide a dockercompose file and kubernetes deploy yamls |
| 4. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can create, run and serve their subquery project. |
| 5. | Examples | Example subquery projects |


### Community engagement

We will publish a series of articles on Medium and videos demonstrating the usage of this tool too. We will engage with users in our community on Telegram.

## Future Plans
* With the help of this tool, anyone can create and run queries easily. But there're still issues for when a user wants to consume the query service in production, our intention to close this gap by providing a hosted service. 
* In regard to functionality, we also plan to support subquery composition and data subscription for users that use our hosted service.
* Smart contracts including solidity and ink! support are in our future roadmap.
* We are willing to reach all the chain explorer teams and see how our service can benefit them.

## Additional Information :heavy_plus_sign: 
