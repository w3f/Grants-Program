# DINFRA

- **Team Name:** Valletech AB
- **Payment Address:** bc1q9rw6km4h7fjgwxv5vwdxhzsnl8s9c8ryfhsu4a (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:


### Overview

DINFRA, decentralized infrastructure, is substrate orchestrated infrastructure, a decentralized alternative to public clouds.

Substrate allows us to create a specialized blockchain, which we see as the perfect blending between Custom Functionality, Decentralized Governance and Value/State tracking. 

Modern data-center technology is now software defined, API driven and hyper-convergent with capability to virtualize Compute, Storage and  Networking. Specialized network equipment is being replaced by virtualized services. There is also great availability of Open Source technologies covering all aspects of the modern data center.

DINFRA aims to create a Substrate blockchain to orchestrate hyperconvergence infrastructure in a democratic, decentralized, open/neutral and non technically opinionated way. 

Realizing DINFRA vision requires a viable strategy. This project represents the first phase of a three phase strategy in which an Open Source Minimum Viable Product is delivered for the purpose of developing, testing, generating awareness and gaining community support.

After delivering [Polkawatch](https://blog.polkawatch.app/introducing-polkawatch/), our analytic engine to measure decentralization of the substrate validation process, DINFRA is the natural next step for us to take in the Substrate Ecosystem. We have a track record contributing to Cloud automation stacks, we created [Privazio](https://www.privaz.io/) for small organizations to be able to fully automate their infrastructure and have used it to deliver Polkawatch for Polkadot and Kusama. We would like to start contributing to effective substrate infrastructure decentralization next.

For a complete presentation of DINFRA vision and strategy see this [Video Presentation](https://vimeo.com/800524188).

### Project Details

**Design Constraints**

We gave been part of the Dotsama community and that has allowed us to gain a better understanding of how it operates. Consequently, some key decisions have been taken that impact our choices of design and architecture:

* DINFRA must be open and non technically opinionated. Infrastructure providers must be able to offer their solutions via DINFRA without being forced into specific technologies or opinionated solutions. Furthermore, they should be able to offer their current infrastructure via DINFRA provided they have industry standard automation capabilities, which typically they do, with minimal effort.
* DINFRA must be decentralized and democratic adopting and following the practices that we see on Kusama and Polkadot for governance. 
* DINFRA must focus on the needs of our ecosystem first.

We consider these points a prerequisite for community acceptance and adoption. 

**Design Interfaces and Data Modeling**

DINFRA main responsibility will be to mediate between consumers and providers awarding "deployment descriptors" to "infrastructure providers" by means of consensus, collect balances accordingly, etc. 

From the previous constraints we deduce that we need lose typing of deployments descriptors, and DINFRA being able to distribute descriptors as opaque entities which don't need to be fully understood.

Infrastructure Providers should be able to self register on DINFRA with information about which types of descriptors they can serve, even register new types of Deployment Descriptors for their flavored solutions if they happen to have some differential in-house capability.

Deployment Descriptors will be able to represent things as diverse as a Helm Chart, Docker Compose, Cloud-Init user data, Subquery Project descriptor or IPFS cluster member profile. As long as each Provider registers their deployment capabilities properly, DINFRA must be able to route deployment requests to them.

Deployment descriptors will be specified in JSON with its type defined as a JSON Schema. This provides loose typing and flexibility to accommodate any deployment descriptor possible, besides the fact that JSON/YAML is a widely used already by most infrastructure platforms and solutions.

Note that Deployment descriptors won't be stored on chain but preimaged and backed on IPFS, as they are required during deployment. Secrets, whenever possible should be deduced from on-chain data preferably in the form of public keys.

**High Level Architecture**

DINFRA Architectural stack resembles pretty much a substrate stack under an infrastructure automation stack, like this:

![DinfraHLArch](https://user-images.githubusercontent.com/412837/225624664-f7cf0074-5fbd-4078-bd30-374b5e89ea42.png)


We make the active choice of not connecting infrastructure platform / automation stack directly to the blockchain, for example via its Offchain Worker Interface, but we introduce an intermediate component called "Chain Reactor."

The Chain Reactor is responsible for orchestrating infrastructure according to decisions taken on chain. The most prominent actions would be to deploy infrastructure as a descriptor is awarded or tear down infrastructure as a deployment reaches its termination.

In order to fulfill the constraints above, Chain Reactors must be easy to implement using any infrastructure automation stack on any suitable language, and it must be simple to do so. Whether Python/Ansible, Java/Cloustack, Go/Terraform, Go/Helm, Python/Juju, etc. Chain Reactors must rely on programming language-agnostic API specifications/tooling such as OpenAPI/swagger for generating stubs in any language that can be used as base for implementation. 

**Technology Stack Used**

In line with the strategy decided above, this project will focus on a minimal viable product while honoring the constraints and architecture above.

The components generated must also serve as "Reference Implementation" to community members willing to generate similar implementations for other infrastructure platforms or solutions.

The Stack for the current MVP will be made of:

- Apache CloudStack: As Infrastructure Platform
- Ansible / Python: As tooling for implementing a Chain Reactor.
- Substrate: For DINFRA Parachain
- Gitlab CD/CI: For Reference Implementation of Automated Testing and CI/CD.
- Docker Compose: For rapid development setup.
- Gitlab CD/CI: for End to end Itegration testing, to avoid regression when new Apache CloudStack versions are released.


**Scope**

Lots of the features that we pitch in our DINFRA [video presentation](https://vimeo.com/800524188) are left out of the scope of this phase. DINFRA opens a lot of exciting possibilities but it is important to remain in focus and deliver a MVP useful for development and bringing community awareness now.

**What DINFRA is not**

DINFRA is not an Infrastructure Provider for the Dotsama ecosystem, but rather a parachain designed to arrange deployments between infrastructure consumers an infrastructure providers in a decentralized way.

DINFRA may provide concrete infrastructure automation modules, but they will be open-source and infrastructure providers will be able to use them, modify them or utilize as reference implementation for their own.

DINFRA is not meant to deliver a company or venture but rather a decentralized community that follows Polkadot's governance model and serve our ecosystem first.

DINFRA will not become a way to just "open" infrastructure to the whole world. Blockchain features may be used for consumers to pick specific providers, providers to accept specific consumers even for consumers to manage their own infrastructure in a private way. Completely public infrastructure remains a valid use case but would benefit from on-chain features such as reputation, arbitrage, deposits, offenses, etc for it to be practically viable.

### Ecosystem Fit

As we can see with [Polkawatch](https://blog.polkawatch.app/introducing-polkawatch/), our infrastucture plays an important role in the level of effective decentralization of Substrate Validation process.

Our treasuries invest significant funds on infrastructure, for which our ecosystem counts with fantastic providers. However, it is becoming clear that our ecosystem needs strategic actions at infrastructure level. Some projects have already been started by our treasuries, a good example being the [Infrastructure Builders Program](https://ibp.network/).

DINFRA intents to provide an strategic approach to managing our ecosystem infrastructure using our biggest asset: Substrate itself.

On the other hand our ecosystem is investing significant effort on Decentralized Finance. A successful DINFRA parachain, used to arrange delivery of our own infrastructure, would channel significant resources becoming effectively a Web3 commodity: a currency that everybody in our community needs and uses, backed by real, tangible, infrastructure services. This would provide health to our DEFI community as DEFI is often criticized for baking tokens with tokens non of which are backed by "real" assets. Commodities play an important role in traditional economies and the same could apply to our ecosystem.

The target audience of DINFRA is therefore our Governance bodies, infrastructure providers, infrastructure consumers (Parachains, DAPPs, etc), and on the other hand substrate, UI and infrastructure engineers willing to contribute.

Regarding similar projects, on top of strategic programs launched by our treasuries there is also [ThreeFold](https://www.threefold.io). An impressive decentralized infrastructure venture which utilities substrate technology while not being formally part of our ecosystem. We had the pleasure to meet their friendly team during the last Sub0 conference in Portugal and their experience was instrumental in realizing that DINFRA is far from a technological-only challenge and needed key design constraints for it to be acceptable to our ecosystem: inclusive to current infrastructure providers, non technically opinionated, community governed, strategically designed to serve our community first, etc.

At a different level DINFRA is an attempt to orchestrate a set of independent providers that will appear to the consumer as a single entity. Effectively DINFRA could become a decentralized alternative to Public Clouds in the long term. Lessons learned from DINFRA could apply to other industries too. Any industry with an existing level of automation and many independent players could be orchestrated similarly

## Team :busts_in_silhouette:

### Team members

- Rafael del Valle López
- René Moser

### Contact

- **Contact Name:** Rafael del Valle Lopez
- **Contact Email:** rvalle@valletech.eu
- **Website:** https://valletech.eu

### Legal Structure

- **Registered Address:** Blåmesv. 26, 186-47 Vallentuna, Sweden
- **Registered Legal Entity:** Valletech AB,  Org. Num: 5590673694

### Team's experience


Rafael lives with his family in Sweden and has over 20 years experience creating Software Product, Services and Ventures. In the last years has started to contribute to Open Source projects in the Infrastructure field. A significant contribution to Open Nebula was the [Python Bindings](https://opennebula.io/pyone-python-bindings-for-open-nebula/), now part of the official distribution. More recently the [Privaz.io](https://privaz.io) project was created with the goal to facilitate the adoption of Private Clouds by small projects. Privazio is currently in use to deploy [Polkawatch](https://blog.polkawatch.app/introducing-polkawatch/), a Web3 Foundation project currently in production and backed both by Polkadot and Kusama treasuries. 

René Moser lives with his family in Switzerland and have been a software and systems engineer for over 20 years. René is co-author of [O'Reilly's "Ansible: Up & Running"](https://www.oreilly.com/library/view/ansible-up-and/9781098109141/) and longtime open source software developer and author of many Ansible Cloud Provider Automation integrations, such as Vultr, CloudStack, Exoscale, cloudscale.ch, Hetzner and became member of the Ansible Core Contributors Team. Furthermore, René is Apache Foundation CloudStack Project Management Committee member since 2015 and founded my own company [moser-systems.com](https://www.moser-systems.com/) with focus on "Cloud Automation, Scaling and Integration." currently delivering its flagship project [ngine.io](https://www.ngine.io/), a platform for cloud-agnostic services including autoscaling which has been released as open source software "[scalr](https://ngine-io.github.io/scalr/)".


René and Rafael met  during an open source collaboration to deliver new Apache CloudStack automation features.

### Team Code Repos

- https://gitlab.com/polkawatch/polkawatch
- https://github.com/ngine-io/scalr
- https://github.com/ngine-io/ansible-collection-cloudstack
- https://gitlab.privaz.io/privazio

### Team LinkedIn Profiles 

- https://www.linkedin.com/in/rvallel/
- https://www.linkedin.com/in/resmo/


## Development Status :open_book:

The project has not started formal implementation yet. However we have performed a viability check of required deliverables.

Most infrastructure deliverables belong to our domain of expertise per contributions made in the past to other open source projects, therefore is easy for us to ensure its viability. Intermediate interfaces don't have technical risk, they have important technical requirements when considering our project constraints but they are straight forward to deliver.

Substrate deliverables are newer to us and imply a learning curve, however the amazing resources put together by the community at [substrate.io](https://substrate.io/): the tutorials, test frameworks, etc have allowed us to verify their viability.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3.5 months
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 47.000 USD

### Milestone 1 — Infrastructure Provider SDK

- **Estimated duration:** 1.5 month
- **FTE:**  1
- **Costs:** 20.000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can test functionality, implement a Chain Reactor, etc. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Chain Reactor API | We will create the API for Chain Reactors using API technologies (OpenAPI or similar) that facilitate language-agnostic implementations. |
| 2. | Chain Reactor RI | We will implement a Chain Reactor Reference Implementation based on Apache CloudStack that can run against the Apache CloudStack Simulator to facilitate further development. The RI will be written in Python as programming language and Ansible as automation stack|
| 3. | Chain Reactor RI Test Suite | We will release a comprehensive set of Chain Reactor RI Unit tests that should serve as guideline for TDD of other implementations, implmented with Python. |
| 4. | CD/CI Chain Reactor RI | Gitlab Pipelines will be created for Chain Reactor Reference Implementation that must serve as guideline to other implementations |
| 5. | SSH Key Derivation | A viability study and implementation of converter of Substrate Account Keys into SSH Keys based on ed25519. Implemented with NodeJS|
| 6. | Substrate Deployment Descriptors | Documented Examples of Deployment Descriptors for the Chain Reactor RI will be provided that would spawn Substrate Nodes under DINFRA.|


### Milestone 2 — Substrate Parachain

- **Estimated duration:** 2 month
- **FTE:**  1
- **Costs:** 27,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can run, test and contribute to the DINFRA parachain. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | DINFRA Provider Pallet | It will allow for Accounts to register as providers, Providers to declare supported Deployment types and avilable capacity. Will Assign Deployments to Providers by simple means such as Round Robin, Random or Capacity Based. Implemented with Substrate/Rust.|
| 2. | DINFRA Subscription Pallet | It will represent a simple Subscription to pay for a deployment. Cost will be fixed per block. Deployments will be teared down when allocated Balance is consumed. Consumers will be able to cancel Subscriptions and any time, tearing down the deployment. Implemented with Substrate/Rust. |
| 3. | Chain Reactor Interface | A Substrate Interface will be created with Providers Chain Reactors so that Deployment Contracts can be Deployed and Teared Down. The interface will be based on standard Substrate interfaces OCW, RPC and/or sidecar service / REST |


## Future Plans

We intend to continue to our second phase in the plan as described in our video presentation. We will use the deliverables from this release to:

- Setup a DINFRA Test Network 
- Generate awareness in our community
- Allow the community to test the system
- Pitch and demo: Treasuries, Infrastructure Providers, Developers 
- Seek launching DINFRA with specific Dotsama use cases.

