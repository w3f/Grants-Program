# Dot Marketplace v3

- **Status:** Open
- **Project Name:** Dot Marketplace
- **Team Name:** Wow Labz
- **Payment Address:** 0xF13001401396AA866E8012f31fD939C7E83B8601 (USDT - ERC20)
- **Level:** 2

### Overview

Links To Previous Approved Grants:
- [Phase 1](https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md)
- [Phase 2](https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md)

This is phase 3 of Dot Marketplace, which is a general-purpose decentralized marketplace created as a Substrate pallet.

- Dot Marketplace can be used by any decentralized project to float tasks and invite their community members to execute them for a reward. Its POC was developed during the Polkadot India Buildathon (2021).
- In the previous phases we have built a decentralised bounty platform and a decentralised court for dispute resolution. More details can be found on the respective grant proposals shared above.


### Project Details

The current scope of work involves **milestone-based submissions** in which a project is divided into multiple configurable milestones(min 1 and max 5) to allow parallel or sequential execution.

- Each project must have at least one milestone and can have a maximum of five milestones (configurable)
- Each milestone has its independent bidding system where multiple workers can place their bids
- The publisher can select a bid as per the requirement and ratings of the worker and other criteria that can be added to a user account.
- A worker can bid for multiple milestones of a single project based on their expertise.
- A project reaches completion only if all milestones in the project are completed and approved by the publisher.
- In our current implementation all milestones are independent, hence they can be completed and approved by the publisher irrespective of the overall project status.
- Based on the requirements, a publisher can add more milestones to a project even after it is pushed to the market, provided the total number of milestones does not exceed 5 (configurable)
- Decentralized IPFS Storage for project materials using NFTStorage Provider. Each material will have a unique CID that can be accessed by both Publisher and Worker.
- Advance Search by task tags, ids & title.
- The [decentralized court](https://github.com/WowLabz/dot-marketplace-v2) implemented in phase 2 is functional for each milestone of a project
- All of the above features will be updated as a new feature for the existing marketplace pallet. Similarly, the selekatal UI will be updated to showcase the same.
- A new file server written using the rocket framework will be provided for the integration with IPFS (using NftStorage). 

The flow of tasking pallet with milestone based submission

![Tasking-Court-Flow4 drawio](https://user-images.githubusercontent.com/66478092/190300655-1d2085b3-b728-4ced-8238-f262a9c5c5f8.png)


### **Repository Hierarchy**

```bash
node
├── build.rs
├── Cargo.toml
└── src
    ├── chain_spec.rs
    ├── cli.rs
    ├── command.rs
    ├── lib.rs
    ├── main.rs
    ├── rpc.rs
    └── service.rs
pallets
├── pallet-chat
│   ├── Cargo.toml
│   ├── README.md
│   └── src
│       ├── benchmarking.rs
│       ├── lib.rs
│       ├── mock.rs
│       └── tests.rs
└── pallet-tasking
    ├── Cargo.toml
    ├── README.md
    └── src
        ├── benchmarking.rs
        ├── lib.rs
        ├── mock.rs
        ├── utils.rs
        └── tests.rs
runtime
├── build.rs
├── Cargo.toml
└── src
    └── lib.rs
```

The current focus is to enhance the existing Substrate pallet and allied code base to get a basic yet functional marketplace up and running.

### **Ecosystem Fit**

We believe this work could be helpful for any Polkadot parachains/parathreads interested in including a marketplace with on-chain dispute resolution.

- Almost all parachains/parathreads would find motivation in encouraging their community members to contribute meaningfully to their roadmap. This can be achieved by utilizing a marketplace like Dot Marketplace, where technical, marketing, or governance-centric projects can be published as bounties. And community members are invited to bid for and execute them.
- A milestone-based submission will enhance the functionality of the marketplace and provide a more comprehensive user experience for both the worker and the publisher.
- The on-chain court will act as a dispute resolution mechanism between users involved in a project. A set of community members meeting specific criteria get to be a part of the jury for the dispute and cast votes, based on which a decision is reached.
- To facilitate easier communication between a customer and a worker, a one-to-one chat feature is also created.

## **Team 👥**

### **Team members**

- [**Amit Singh**](https://www.linkedin.com/in/startupamit/) [ Product Manager ]
- [**Roshit Omanakuttan**](https://www.linkedin.com/in/roshit/) [ Technical Architect ]
- [**Loakesh Indiran**](https://www.linkedin.com/in/loakesh-indiran-8a2282140) [ Full Stack Developer ]
- [**Tejas Gaware**](http://www.linkedin.com/in/tejas-vijay-1430a3190) [ Backend Developer ]
- [**Rajat Petwal**](https://www.linkedin.com/in/rajat-petwal-947440197/) [ Backend Developer ]

### **Contact**

- **Contact Name:** Amit Singh
- **Contact Email:** amit (dot) singh (@) wowlabz.com
- **Website:** [http://www.wowlabz.com](https://www.wowlabz.com/)
- **Project Website:** [Dot marketplace website](https://dotmarketplace.co/)

### **Legal Structure**

- **Registered Address:** Wow Labz, 2Gethr Cowork, Tower B, Mantri Commercio, Outer Ring Rd, Bellandur, Bengaluru, Karnataka, India 560103
- **Registered Legal Entity:** Wow Internet Labz Private Limited

### **Team's experience**

Dot Marketplace is being built by the team at Wow Labz. Wow Labz is one of India's leading turnkey product development companies. The team is also building Socialli - an interoperable metaverse protocol on Polkadot. Additionally the team at Wow Labz has built [Polkadot India](https://www.polkadotindia.org/) - a 15,000+ community of polkadot enthusiasts predominantly from the Indian region. The team has previously built a decentralized storage protocol called Lake Network - [https://lakenetwork.io/](https://lakenetwork.io/) in addition to multiple dApps on Ethereum, Stellar, EOS, and Hyperledger.

A list of centralized and decentralised apps published can be found [here](https://www.wowlabz.com/work/).

### **Team Code Repos**

- [https://github.com/orgs/WowLabz/projects](https://github.com/orgs/WowLabz/projects)
- [https://github.com/WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend)
- [https://github.com/WowLabz/tasking_frontend](https://github.com/WowLabz/tasking_frontend)
- [https://github.com/WowLabz/yoda_creator_economy_node](https://github.com/WowLabz/yoda_creator_economy_node)
- [https://github.com/WowLabz/dot-marketplace-v2](https://github.com/WowLabz/dot-marketplace-v2)

## **Development Status 📖**

- Here's a link to the approved grant proposal for the [first phase](https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md) and [second phase](https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md)
- We are in touch with @takahser and @Rouven from the Web 3 Grants and Treasuries team, respectively.

## **Development Roadmap** 🔩

****Overview****

* **Total Estimated Duration:** 2.0 Months
* **Full-Time Equivalent (FTE):** 2.39
* **Total Costs:** 29,925 USD


### **Milestone 1**

* **Estimated duration:** 3.0 weeks
* **FTE: 1**
* **PTE: 2**
* **Costs:** 12,725 USD

The main deliverable for this milestone is to facilitate the creation of a project that can accommodate multiple milestones that may or may not depend on each other. These functionalities will be implemented as an upgrade to the existing marketplace pallet.

| Sr no. | Deliverable | Description |
| --- | --- | --- |
| 0a | License | Apache 2.0 |
| 0b | Documentation | We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet. |
| 0c | Testing Guide | Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build. |
| 0d | Docker Image | Docker image of the build |
| 1 | Project Structure | The existing application only allows one milestone per project. Phase 3 modifies it to allow a publisher to add multiple milestones under the same project. |
| 2 | Multiple Bidders| Multiple bidders can now bid for the same milestone, and the publisher can choose one worker based on the bidder ratings |
| 3 | Escrow  | Multiple subaccounts are created for a project to account for each milestone and make it easier to store all funds for transfer/exchange. |

### **Milestone 2**

* **Estimated duration:** 2.0 weeks
* **FTE:** 1
* **PTE:** 2
* **Costs:** 9,225 USD


In continuation to previous work, this milestone involves the creation of an on-chain decentralized court to handle dispute resolution. Each milestone can go into a dispute on the same scope as mentioned in the second phase of dot marketplace. The other milestones in a project are not affected by the dispute of one of the milestones. The court pallet will be upgraded to support these new features.

| Sr no. | Deliverable | Description |
| --- | --- | --- |
| 0a | License | Apache 2.0 |
| 0b | Documentation | We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet. |
| 0c | Testing Guide | Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build. |
| 0d | Docker Image | Docker image of the build |
| 1 | Decentralized Court Module | An on-chain decentralized court for dispute resolution within the ecosystem. |
| 1a | Disapprove Milestone  | In the case of a customer not being satisfied with the work submitted by the service provider (worker). A set of jurors is shortlisted (court summon) to resolve the dispute and pass a verdict. |
| 1b | Disapprove Rating | The customer or the service provider, once they have received their rating for a particular milestone and are not satisfied with it. |
| 1c | General Dispute | A general dispute function for cases that do not fall under the categories mentioned in 1a and 1b. |
| 2 | Voting module | Each juror can review the dispute and cast their vote, which also includes their rating for both the customer and the worker. After two days, all the juror votes are counted, and a winner is identified. |
| 3 | Frontend App  | Supporting frontend UI to test the aforementioned functionality. |

### **Milestone 3**

* **Estimated duration:** 3.0 weeks
* **FTE:** 1
* **PTE:** 2
* **Costs:** 7975 USD


The main deliverables in this milestone are to use decentralized IPFS based storages to store all the files realated to tasks & advanced search. A file server integrated to nft storage will provided, using rocket framework & the search feature will be an update to the makerplace pallet. The skeletal UI will also be updated to showcase all the new features in Phase3.

| Sr no. | Deliverable | Description |
| --- | --- | --- |
| 0a | License | Apache 2.0 |
| 0b | Documentation | We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of tasking pallet. |
| 0c | Testing Guide | Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build. |
| 0d | Docker Image | Docker image of the build |
| 1 | Decentralized Storage  | All tasks related docs will be stored on a decentralized IPFS platform. |
| 2 | Advanced Search  | Search based on task progress, tags, tasks or milestone id's. |
| 3 | Frontend App  | Supporting frontend UI to test the aforementioned functionality. |
| 4 | Website  | Dedicated one-page website for Dot Marketplace. |
| 5 | Article | Website article showing motivation behind phase 3 of dot marketplace and how to make the best use of it. |

### **Additional Project Details**

* Technology stack being used
  * Rust, Substrate, React, Python, centralized cloud storage

### **Future Plans**

This is the last phase in our current roadmap. Post this we would focus on partnerships with chains on the dotsama ecosystem for integrating DotMarketplace as their native bounty management tool (this work has already started). If future, if the traction is great, we could create a fresh proposal for an excellent UI or integrate DotMarketplace within PolkaJS Apps itself with native support for multiple tokens besides DOT.

###

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website, Polkadot India Buildathon

* We have been working on this roadmap since we applied for the Web3 grant
