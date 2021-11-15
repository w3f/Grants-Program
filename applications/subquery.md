
# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** SubQuery
* **Proposer:** https://github.com/ianhe8x
* **Payment Address:** bc1qmm3esqr57farn2dextdvhjs962wx08fecsxs90 

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview
Almost every substrate project has a need to process and query data. 
SubQuery is a open-source tool to provide a complete solution to this problem and will become core infrastructure for the Polkadot ecosystem.
We expect it to solve how to Extract, Transform, Persist, and Query data intially, and then how to Connect and Present data in the future.

SubQuery is NOT an ETL tool, the persisted data is minimized and shaped from the perspective of how it will be used.

SubQuery aims to support all substrate-compatible networks.  

### Project Details 
In this proposal, we provide a complete workflow to create a live data query system. 

#### Step #1: Create a SubQuery project
1. use `@subql/cli` tool we provide to create a SubQuery project
    * it is written in typescript
    * user needs to config the project, define a schema and implement mapping functions
2. use `@subql/cli` to generate types from the given schema
3. use `@subql/cli` to compile and pack the SubQuery project

#### Step #2: Run an indexer
Prerequisites
* A Postgres database
* Non-archive full node. If storage query is used, then an archive node is required to extract chain data. [OnFinality](https://onfinality.io/api_service) provides an archive node with a generous free tier that should be more than able to cover most cases. 
* A moderately powerful computer to run an indexer in the background

Then start our `@subql/node` with the path of local SubQuery project as arguments, `@subql/node` will handle the rest.

#### Step #3: Run a Query Service
We do have plan for a custom built graphql query service `@subql/query`, but in this stage we will use [Harura](https://hasura.io) to do the job.

#### Components
Npmjs Packages to published:
* `@subql/cli`
* `@subql/node`

### Ecosystem Fit 
* [Hydra](https://github.com/Joystream/hydra)
* [substrate-graph](https://github.com/playzero/substrate-graph)
* other ETL projects

The original intentions are different and that leads to different technical decisions.
* These two projects are both created by a substrate-based blockchain team in order to fulfill the needs of their own chains in the beginning and then adapted into standalone projects.
* The motivation of us is to make a tool that solves query demands of all substrate blockchains right from the start. We also plan to then provide a full managed and hosted service to lower the barriers of entry further.

The differences:
1. Secure execution of mapping functions are not a top concern for them, but is a hard requirement for us and will be supported in the proposal.
2. We don't want to depend on 3rd party libraries in the core code of the project, libraries such as warthog used by Hydra.
3. API access within the mapping functions will be supported
4. Our proposal aims for OLTP, and allowing customisation of indexing process which are different from ETL like projects. The outcome of indexed data is that it is shaped for the need of its specific usecase, and be consumed by browser and mobile apps. 

## Team :busts_in_silhouette:

### Team members
* Sam Zou: Project manager
* Ian He: Team leader
* Jay Ji: Fullstack developer

#### Partime members
* James Bayly: Marketing and Partnerships

### Team Website	
* https://onfinality.io

### Legal Structure 
OnFinality Limited, New Zealand

### Team's experience
We are the team behind OnFinality which is an infrastructure SaaS platform for blockchain teams and users to launch nodes and gain access to a large range of blockchain protocols. Our mission is to help Polkadot/Substrate developers build the next generation of dApps.

We have supported many Polkadot ecosystem projects already including Acala, Darwinia, Plasm, and Edgeware.

Ian He led a team and won 2nd price in the substrate hackathon in Hangzhou 2019.    

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
* **Total Costs:** 1.75

### Milestone 1
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 1.2 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | `@subql/cli` | We will create `@subql/cli` that helps to generate types, builds, and packs the SubQuery project. To be specific, mapping functions will be compiled from .ts to .js and will be packed into a single tarball file together with project manifest and GraphQL schema |
| 2. | `@subql/node` | We will create `@subql/node` that can load a SubQuery project and index the specified blockchain. |
| 2.1 | `@subql/node` | will support block handler `async function handlerFn(block: SignedBlock): Promise<void>`, call handler `async function handlerFn(extrinsic: Extrinsic): Promise<void>` and event handler `async function handlerFn(event: EventData): Promise<void>` from the SubQuery project that user provided.|
| 2.2 | `@subql/node` | The call handler will support `module` and `call_name` filter. The event handler will support `event_name` filter |
| 2.3 | `@subql/node` | We will use vm2 to create an isolated scope to execute mapping functions, and we will provide additional NetworkPolicy configs to strengthen the security further when run it in K8s.|  
| 3. | Deploy | We will generate a dockercompose file and Kubernetes deploy YAMLs |
| 4. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can create, run and serve their SubQuery project. |
| 5. | Testing | Unit tests and integration tests for `@subql/cli` and `@subql/node` |

### Milestone 2
* **Estimated Duration:** 2 weeks
* **FTE:**  2
* **Costs:** 0.55 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | `@subql/cli` | A subcommand will be added to `@subql/cli` that can create a scaffold of a SubQuery project, including a series of step-by-setp interactions that guides the user to complete customisation of the project.yaml and create handlers of selected type. The generated SubQuery project will have sufficient code comments and instructions in README.md so people can easily understand and start working with it. |
| 2. | `@subql/node` | `@polkadot/api` will be accessible within the mapping functions and we will patch the API instance that be injected in the scope to lock storage queries to current processing block so that the indexing result will be deterministic. |
| 3. | Deploy | We will provide a dockercompose file and Kubernetes deploy YAML |
| 4. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can create, run and serve their SubQuery project. |
| 5. | Examples | We will list and provide new users access to example SubQuery projects |
| 6. | Testing | Unit tests and integration tests for @subql/cli and @subql/node |


### Community engagement

We will publish a series of articles on Medium and videos demonstrating the usage of this tool too. We will engage with users in our community on Telegram.

## Future Plans
* With the help of this tool, anyone can create and run queries easily. But there're still issues for when a user wants to consume the query service in production, our intention to close this gap by providing a hosted service. 
* In regard to functionality, we also plan to support SubQuery composition and data subscription for users that use our hosted service.
* Smart contracts including Solidity and ink! support are in our future roadmap.
* We are intending to reach out to all major chain explorer teams and engage with the community to see how our service can benefit it.

## Additional Information :heavy_plus_sign: 
