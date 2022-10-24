# Dot Marketplace v2

- **Status:** Open
- **Project Name:** Dot Marketplace
- **Team Name:** Wow Labz
- **Payment Address:** 0xF13001401396AA866E8012f31fD939C7E83B8601 (USDT - ERC20)
- **Level:** 2

## Project Overview :page_facing_up:

### **Overview**

This is phase 2 of Dot Marketplace, which is a general-purpose decentralized marketplace created as a Substrate pallet.
- Here's a link to the [approved grant proposal for the first phase.](https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md)

- Dot Marketplace can be used by any decentralized project to float tasks and invite their community members to execute them for a reward. Its POC was developed during the Polkadot India Buildathon (2021).
- It would be directly integrated into Polkadot JS Apps, where such marketplaces could create bounties and tasks that community members could fulfill.
- The inspiration for Dot Marketplace emerged from our own needs while building Yoda - a protocol that facilitates decentralized app development leveraging open data. Dot Marketplace would be used to create data, services, and app marketplaces on Yoda, which would motivate us to maintain this project in the long run.

### **Project Details**

The current scope of work involves implementing a **decentralized court system** to resolve disputes in the marketplace and a **chat feature** between two users.

- The court is a functionality that delivers unbiased decisions and is driven by a jury.
- The jury is the participants already present on the chain
- The jury is selected based on some criteria
- The potential jurors are collected from the chain based on their past ratings and whether they have the expertise of the task in question
- Then the final jurors can nominate themselves to be part of the jury for a specific job after accepting the proposal
- All court cases are time-bound and are given 3 days (43,000 slots) in total
- The 3 days are divided into 2 parts:
    - Jury acceptance period (14,400 slots/1 day) - This is the period for the potential jurors to accept the jury duty
    - Voting period (28,800 slots/2 days) - This is the time for the jurors to cast their vote. One juror gets only one vote which can be in favor of the customer or service provider (worker)
- After concluding, all the jurors who participated in the case get a commission, which is based on the total cost of the entire task.
- In case of a tie or if no juror votes, the voting is carried out by the super juror, who will cast a vote based on the work submitted.
- A user can call the court on the unsatisfactory rating provided by either the customer or the worker.

The flow of the tasking pallet with decentralized court implementation


![Tasking-Court-Flow4 drawio](https://user-images.githubusercontent.com/58659064/154290137-741e7fb6-5aea-40dc-8b3b-71304e08ba79.svg)


Dot Marketplace is being built as a Substrate pallet. It would include boilerplate code that para-chain teams can customize as per their requirements. We believe this project has the potential to transform community participation, engagement, and governance in decentralized projects.

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
scripts
├── docker_run.sh
└── init.sh
pallets
├── pallet-chat
│   ├── Cargo.toml
│   ├── README.md
│   └── src
│       ├── benchmarking.rs
│       ├── lib.rs
│       ├── mock.rs
│       └── tests.rs
├── pallet-court
│   ├── Cargo.toml
│   ├── README.md
│   └── src
│       └── lib.rs
└── pallet-tasking
    ├── Cargo.toml
    ├── README.md
    └── src
        ├── benchmarking.rs
        ├── lib.rs
        ├── mock.rs
        └── tests.rs
runtime
├── build.rs
├── Cargo.toml
└── src
    └── lib.rs
```

The current focus is to enhance the existing Substrate pallet and allied code base to get a basic yet functional marketplace up and running.

### **Ecosystem Fit**

We believe this work could be helpful for any Polkadot para-chains/ para-threads interested in including a marketplace with an on-chain dispute resolution mechanism.

- Almost all para-chains/ para-threads would find motivation in encouraging their community members to contribute meaningfully to their roadmap. This can be achieved by utilizing a marketplace like Dot Marketplace where technical, marketing or governance-centric tasks can be published as bounties. And community members are invited to bid for and execute them.
- The on chain court will act as an dispute resolution mechanism between users involved in a task. A set of community members meeting a certain criteria get to be a part of the jury for the dispute and cast votes, based on which a decision is reached.
- To facilitate easier communication between a customer and a worker, a one-to-one chat feature is created as well.

## **Team 👥**

### **Team members**

- [**Amit Singh**](https://www.linkedin.com/in/startupamit/) [ Product Manager ]
- [**Roshit Omanakuttan**](https://www.linkedin.com/in/roshit/) [ Technical Architect ]
- [**Varun Gyanchandani**](https://www.linkedin.com/in/varunsays/) [ Backend Lead ]
- [**Loakesh Indiran**](https://www.linkedin.com/in/loakesh-indiran-8a2282140) [ Full Stack Developer ]
- [**Tejas Gaware**](http://www.linkedin.com/in/tejas-vijay-1430a3190) [ Backend Developer ]
- [**Praneeth Ratnagiri**](https://www.linkedin.com/in/praneeth-ratnagiri-772a43174/) [ Backend Developer ]

### **Contact**

- **Contact Name:** Amit Singh
- **Contact Email:** amit (dot) singh (@) wowlabz.com
- **Website:** [http://www.wowlabz.com](https://www.wowlabz.com/)
- **Project Website:** Dot marketplace website is under construction

### **Legal Structure**

- **Registered Address:** Wow Labz, 2Gethr Cowork, Tower B, Mantri Commercio, Outer Ring Rd, Bellandur, Bengaluru, Karnataka, India 560103
- **Registered Legal Entity:** Wow Internet Labz Private Limited

### **Team's experience**

Dot Marketplace is being built by the team at Wow Labz. Wow Labz is one of India's leading turnkey product development companies. Socialli Protocol has been conceptualized and is being produced by the team at Wow Labz. The team has previously built a decentralized storage protocol called Lake Network - [https://lakenetwork.io/](https://lakenetwork.io/) in addition to multiple dApps on Ethereum, Stellar, EOS, and Hyperledger.

A list of centralized apps published can be found [here](https://www.wowlabz.com/work/).

### **Team Code Repos**

- [https://github.com/orgs/WowLabz/projects](https://github.com/orgs/WowLabz/projects)
- [https://github.com/WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend)
- [https://github.com/WowLabz/tasking_frontend](https://github.com/WowLabz/tasking_frontend)
- [https://github.com/WowLabz/yoda_creator_economy_node](https://github.com/WowLabz/yoda_creator_economy_node)

## **Development Status 📖**

Dot Marketplace POC was conceptualized and developed during the Polkadot India hackathon. The roadmap listed below comprises new features that would help take the POC to a minimum viable product (MVP).  The first stage of the project involved creating user registration and marketplace based on a bidding system.

- Here's a link to the [approved grant proposal for the first phase.](https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md)
- We are in touch with Marcin and Raul from the Web 3 Grants and Treasuries team, respectively.

## **Development Roadmap** 🔩

****Overview****

* **Total Estimated Duration:** 3 Weeks
* **Full-Time Equivalent (FTE):**  3.36
* **Total Costs:** 24,305 USD


### **Milestone 1**

* **Estimated duration:** 1 week
* **FTE:**  2
* **PTE:**  2
* **Costs:**  8,325 USD  

The main deliverable for this milestone will be to migrate the existing application to substrate frame v2 and include the chat feature as a pallet for communication between a customer and a service provider to have a one-on-one conversation over the deliverables and timelines. The entire milestone covers the Rust/Substrate code implementation.

| Sr no. | Deliverable | Description |
| --- | --- | --- |
| 0a | License | Apache 2.0 |
| 0b | Documentation | We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of the tasking pallet. |
| 0c | Testing Guide | Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build. |
| 0d | Docker Image | The docker image will contain the entire tasking pallet Frame V2 version for anybody to just deploy it on their terminal without cloning the repo explicitly, it will be explained along with the commands for testing and running the image. |
| 1 | Migrate [Tasking Pallet](https://github.com/WowLabz/tasking_backend/blob/11ff1dfe620016d2943adc7b7a0ba60f2d6413cd/pallets/pallet-tasking/src/lib.rs) from FRAME v1 to FRAME v2 | The [existing Tasking Pallet](https://github.com/WowLabz/tasking_backend/blob/Phase1_Milestone3/pallets/pallet-tasking/src/lib.rs) will be migrated to FRAME v2 to account for the new features provided by the framework |
| 2 | Chat Pallet | Chat functionality is to be exposed and consumed between the customer and the service provider to ease communication and this will be integrated with the tasking pallet's frame v2 version |

### **Milestone 2**

* **Estimated duration:** 2 weeks
* **FTE:**  2
* **PTE:**  2
* **Costs:**  15,900 USD  


In continuation to previous work, this milestone involves the creation of an on-chain decentralized court to handle dispute resolution. Being a juror is one of the user incentives that can be achieved thanks to the rating module mentioned in the first phase of dot marketplace. The entire milestone covers the Rust/Substrate code implementation. The court process can be called at any one of the instances mentioned from points 1a to 1c below. The dispute logic is a function which will be called from two extrinsic. The additional dispute function for 1c will cover one case (at the moment- for example, the customer is not closing the task due to some reason. The worker gets the functionality to raise a dispute for this particular case). There can be more cases as such, which can be consumed and utilized for any use case. The functions for jury, which are court summon, dispute resolution time and other helpers, can be configured and managed for each use case.

| Sr no. | Deliverable | Description |
| --- | --- | --- |
| 0a | License | Apache 2.0 |
| 0b | Documentation | We will provide both inline documentation of the code and a tutorial that explains how a user can use DOT Marketplace and understand the flow of the tasking pallet. |
| 0c | Testing Guide | Functions will be covered by unit tests, the documentation will describe how to run these tests. We will also provide scripts to help deploy, run and test the build. |
| 0d | Docker Image | Docker image of the build will contain the entire code for court and tasking pallet, with all the dependencies to directly run the code|
| 1 | Decentralized Court Module | An on-chain decentralized court for dispute resolution within the ecosystem. |
| 1a | Disapprove Task  | In the case of a customer not being satisfied by the work submitted by the service provider (worker). A set of jurors is formed (court-summon) to resolve the dispute and pass a verdict. |
| 1b | Disapprove Rating | The customer or the service provider, once they have received their rating for a particular task and are not satisfied by it. |
| 1c | General Dispute | A general dispute function for cases that do not fall under the categories mentioned in 1a and 1b. |
| 2 | Jury | The chain specification of the testnet is modified to include more users with necessary specifications to be a part of the jury. The specifications include having average user rating above a certain threshold and being an expert in the field of the task. A list of potential jurors are notified and they have a period of one day to accept jury duty, with the maximum number of juors capped to 5 per dispute. |
| 3 | Voting module | Each juror can review the dispute and cast their vote which also includes their rating for both the customer and the worker. After a period of two days all the juror votes are counted and a winner is identified. |
| 4 | Escrow  | Single account for storing all the funds for transfer/exchange. Account for creating task, bidding for the task, transferring juror fees (if the court is summoned), transferring winner fees. |
| 5 | Scheduler | Custom event scheduler built based on block number to facilitate the waiting periods for jury acceptance and juror voting. |



### **Additional Project Details**

* Technology stack being used
  * Rust, Substrate, React, Python, centralised cloud storage

### **Future Plans** 
Future releases of the Dot Marketplace include:

| Phase | Feature | Description |
| --- | --- | --- |
| 3 | Milestone based submissions | Making provisions to breakdown a project into multiple configurable milestones to allow parallel or sequential execution |
| 4 | Decentralized Storage | Integration with IPFS or another decentralized storage platform |

###

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website, Polkadot India Buildathon 

* We have been working on this roadmap since we applied for the Web3 grant
