# Open Grant Proposal

* **Project:** Substrate Graph
* **Proposer:** 2075
* **Payment Address:** bc1qq0pz4r3mehdeqfy9nmextq0pmvku2rukwkgv5z 

## Project Description :page_facing_up: 

* A compact indexer for @paritytech substrate based nodes providing a graphql interface.
* Interacting, archiving and querying transactions on blockchain nodes can become expensive. An indexer provides unified access to historic data. Parsing and creating complex interfaces with this data is cumbersome when using REST, GraphQL offers the latest and greatest to query, subscribe and mutate data leading to efficient data structures and therefore hopefully cleaner code and better (D)Apps.

## Team :busts_in_silhouette:

* **Members:** Marco Bahn
* **LinkedIn Profiles:** https://www.linkedin.com/in/marcobahn
* **Code Repos:** https://github.com/2075, https://github.com/playzero
* **Website:**	https://gamedao.co, https://one.io
* **Legal Structure:** ONE.IO GmbH, Sihlquai 131, CH-8003 Zurich, Switzerland 
* **Team's Experience:** more than 2 decades of small to large scale project, product and ventures in relevant verticals, like technology, finance, automotive, videogames

## Development Roadmap :nut_and_bolt: 

![Schema](https://github.com/playzero/substrate-graph/blob/master/doc/stack-basic.png)

* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):** 0.6 ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
* **Total Costs:** 1.5 BTC

### Milestone 1
Create Dockerfiles from substrate-archive, sync with aubstrate-archive maintainers.
Create initial stack for custom substrate nodes and polkadot/kusama/westend nodes.

* **Estimated Duration:** 2 weeks
* **FTE:**  0.6
* **Costs:** 0.5

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Dockerfiles | Create dockerfiles for substrate-archive |  
| 2.  | Docker-Compose | Create Docker-Compose to fire up an indexer |

### Milestone 2
Create example frontend querying via graphql. Sync docs and examples

* **Estimated Duration:** 2 weeks
* **FTE:**  0.6
* **Costs:** 0.5

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 3.  | Frontend | Create Example frontend based on Node-Template-Frontend |
| 4.  | Docs | Create Documentation |

### Milestone 3
Create Helm Charts to deploy to K8s. 

* **Estimated Duration:** 2 weeks
* **FTE:**  0.6
* **Costs:** 0.5

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 5.  | Helm Charts | Create Helm Charts to deploy the stack to K8s |
| 6.  | Dashboard | Monitoring Dashboard |

## Additional Information :heavy_plus_sign: 
The stack relies heavily on substrate-archiver, a parity project providing index data to a postgres db and on Hasura GraphQL, which provides schema generation and a user interface.
For a complete demo of K8 deployment, a Kubernetes cluster might be necessary.

Possible additional information to include:
* What work has been done so far? Beta version already works: ([Substrate Graph]https://github.com/playzero/substrate-graph)
* Are there are any teams who have already contributed (financially) to the project? No.
* Have you applied for other grants so far? Swift Scale ( not completed yet )
* Are there any other projects similar to yours? If so, how is your project different? GraphNode -> Ethereum
* The team's long-term plans and intentions with this project. USe it as part of GameDAO and other projects we are working on to bring videogames at scale onto substratge and polkadot.
 
