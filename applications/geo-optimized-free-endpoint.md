# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Geo Optimized Free Endpoint from OnFinality
* **Proposer:** https://github.com/ianhe8x
* **Payment Address:** bc1qmm3esqr57farn2dextdvhjs962wx08fecsxs90 

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
This application is in response to an RFP we received regarding the demand of a free polkadot/kusama endpoint for the community in China Mainland.

### Overview
We, [onfinality](https://onfinality.io), is a saas platform who provides infrastructure services for polkadot community. We have released our beta version of api service which is free for everyone in the community to use, as long as the usage is within our free tier.

Even so, our service is single-regioned and located in Tokyo, which doesn't fully meet the requirement. Now with this grant, we can upgrade our infrastructure to multi cloud and multi region so that we can extend the free api service to China. 

The endpoint we provide won't change, so our user can have a seamless experience. If the request is from China, we will route the request to our cluster in China intelligently.

In addition to that, we will include a cli tool to this grant which user can use to diagnose which region their requests are served from as well as a simple benchmark comparing different endpoints.
 
### Project Details 
#### New Clusters
We will compare several cloud providers and establish one or more clusters to serve polkadot/kusama endpoint . 

The new cluster will be a kubernetes cluster same as our other clusters. 

Even though our system is designed to support multi-cluster, there will be some extra work to do to adapt the current service with an extra cluster.

#### Geo Routed DNS
We will use a Geo Routed DNS to route end-users requests based on their geo location.

#### UI
UI will keep same as currently we have at app.onfinality.io. The new cluster is behind dns and transparent to end user.

#### Diagnose Tool
We will open source a tool. Our user can use it to 
* check the service cluster's region
* check api-service's availability
* benchmark endpoints

### Ecosystem Fit 
I'm not aware of similar projects' existence.

## Team :busts_in_silhouette:

### Team members
* Ian He
* James Xu

#### Partime members
* James Bayly


### Team Website	
* https://www.onfinality.io

### Legal Structure 
OnFinality Ltd, New Zealand

### Team's experience
We've built onfinality which is a sass platform for blockchain teams and user to launch nodes and get access to endpoint of a lot range of blockchain protocols.
We have supported a lot of polkadot ecosystem projects including Acala, Darwinia, Plasm, Edgeware.   

### Team Code Repos
* https://github.com/onfinality-io

### Team LinkedIn Profiles
* https://www.linkedin.com/in/yin-he-7a266345/
* https://www.linkedin.com/in/zhexu/
* https://www.linkedin.com/in/james-bayly/

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.

### Overview
* **Total Estimated Duration:** 1.5 month
* **Full-time equivalent (FTE):**   
* **Total Costs:** Amount of Payment in BTC for the whole project. The total amount of funding needs to be below $30k at the time of submission.

### Milestone 1 New Cluster 
* **Estimated Duration:** 1 month
* **FTE:**  1.25
* **Costs:** 1.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | More Cluster| We will add at least one cluster of different region on top of our existing service cluster |
| 2. | Endpoints | Each region that we provide Polkadot and Kusama endpoints will have their own sub-domain so user can chose specifically which region to use |
| 3. | Statistics | Usages among all regions will be collected and show in our web console for user to inspect |
| 4. | Free Tier | We offer a free tier for starters to use our service, usages across all regions will be accumulated together. |
| 5. | Tutorial | We will publish a tutorial in our knowledge base as well as an announcement via our medium account |

### Milestone 2 Geo Optimized DNS and Diagnose Tool
* **Estimated Duration:** 2 weeks
* **FTE:**  0.5
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | DNS | For each protocol we provide an endpoint which will route user's requests to the closest cluster to them.|
| 2. | Diagnose Tool | A cli tool can be used to inspect which cluster user is routed to. And can also be used to perform some simple benchmark tests. |

### Community engagement

We will post in medium of our achievements.

## Future Plans
* We will create a Service Status Page to expose the availability of our service.
* The extra clusters will act as a failover plan when any cluster is out of service.

## Additional Information :heavy_plus_sign: 
