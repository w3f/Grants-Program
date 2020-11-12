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

Even though our system is designed to support multi-clusters, there will be some extra works to do to adapt the current service with an extra cluster.

#### Geo Routed DNS
We will use a Geo Routed DNS to route end-users requests based on their geo location.

#### UI
UI will keep same as what we currently have at app.onfinality.io. The new cluster is behind dns and transparent to end user.

#### Diagnose Tool
We will open source a tool. Our user can use it to 
* check the service cluster's region
* check api-service's availability
* benchmark endpoints

### Ecosystem Fit 
I'm not aware of similar projects' existence.

## Team :busts_in_silhouette:

### Team members
* Sam Zhou
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

Also we have supported a lot of polkadot ecosystem projects including Acala, Darwinia, Plasm, Edgeware.   

### Team Code Repos
* https://github.com/onfinality-io

### Team LinkedIn Profiles
* https://www.linkedin.com/in/sam-zou-5b8169a/
* https://www.linkedin.com/in/yin-he-7a266345/
* https://www.linkedin.com/in/zhexu/
* https://www.linkedin.com/in/james-bayly/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 1.5 month
* **Full-time equivalent (FTE): 2
* **Total Costs:** 2

### Milestone 1 - New Cluster 
* **Estimated Duration:** 1 month
* **FTE:**  2.5
* **Costs:** 1.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | More Cluster| We will add at least one cluster of different region on top of our existing service cluster |
| 2. | Endpoints | Each region that we provide Polkadot and Kusama endpoints will have their own sub-domain so user can chose specifically which region to use |
| 3. | Statistics | Usages among all regions will be collected and show in our web console for user to inspect |
| 4. | Free Tier | We offer a free tier for starters to use our service, usages across all regions will be accumulated together. |
| 5. | Terraform | Script we used to establish the infrastructure |
| 6. | Tutorial | We will publish a tutorial in our knowledge base as well as an announcement via our medium account |

### Milestone 2 - Geo Optimized DNS and Diagnose Tool
* **Estimated Duration:** 2 weeks
* **FTE:**  1
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | DNS | For each protocol we provide an endpoint which will route user's requests to the closest cluster to them.|
| 2. | Diagnose Tool | A cli tool can be used to inspect which cluster user is routed to. And can also be used to perform some simple benchmark tests. |

### Community engagement

We will post in our medium account of our achievements.

## Future Plans
* We plan to create a Service Status Page to expose the availability of our service.
* The extra clusters will act as a failover plan when any cluster is out of service.

## Additional Information :heavy_plus_sign: 
