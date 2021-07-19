# W3F Open Grant Request


* **Project Name:** Wika Network
* **Team Name:** Wika Network
* **Payment Address:** 0x1Ac0eEe3C9485590aa9bf9CE8f438A6195FE1A85 (USDT)



## Project Overview :page_facing_up:


### Overview

#### Make the Internet a Better Place.

Our mission is to build a clean, public and non-intrusive blockchain registry to empower 
autors, search engines and recommendation systems that respect privacy and are 100% transparent.

- **Generous Internet Users** will be able to like their favorite pages and reward the authors and previous likers.

- **Internet Content Authors** will register their ownership in one public decentralized database, and whether their content lives in youtube, 
facebook, medium or any other internet place, Wika users will be able to reward them directly.
 
#### Why?

Because there are too many Like buttons out there!

Each one generates data in private databases that are often used to optimize for advertisment or hidden agendas.

Wika's idea is pretty simple: why not a clean and transparent version of those?
It could be used on any platform, with a genuine mission to improve the internet and recommend quality content.
  
Having worked as Data Scientists and Engineers in the AI space, 
we recognize the power of ML and its risks, and we believe regulations will always be one step behind 
the evolution of software systems and artificial intelligence applications. 
From our experience, the only real user data protection comes from the ethics -and also the expertise- of the teams designing the systems. 

So internet users are actually putting a great deal of trust 
into the teams building their social networks and handling their data.

Sometimes, those teams fail, by accident, incompetence, or bad intention; 
a couple of stories will pop-up in tech news; the responsible company will be fined;
and some users might even get a coupon or free services if they manage to go through a tricky claim process.

Usually, lawyers are the most fortunate actors in those stories, 
because they are the happy few taking the biggest cut of all the money flowing from the investigation and trial phases
all the way to the settlement and money distribution time.

Ironically enough: most of the users, the actual victims, 
will probably not even notice nor understand what happened to their data.

But the damages are real at the person level: stolen personal information will feed fraud and identity theft, 
and this will seriously hurt the victims.

And when data is used unethically, that means discrimination, public opinion abuse, stock market manipulation, 
social network addictions, just to name a few we already know about; plus all the negative long term effects still to be learnt. 

Long story short: data protection and algorithmic ethics are great responsibilities 
centralized into a few powerful entities.
 
So why Wika Network? Because we are engaged in solving this problem to make the internet a better place, 
and we believe that with blockchain technology and Polkadot ecosystem, 
we have all the necessary foundations and ingredients to succeed: 

- Trustless design.
- Decentralization.
- Transparency.
- Anonimity.
- Security.



 

### Project Details

* Social (Smart) Contract:
    ![Economic Model](https://www.wika.network/img/how-it-works/wika_economy.png)

* Components:

    ![Architecture](https://www.wika.network/img/docs/tech_architecture.png)

    - **Blockchain** Repo [wika_node](https://github.com/randombishop/wika_node) 
    | TestNet: [wss://testnode3.wika.network:443](https://telemetry.polkadot.io/#settings/Wika%20TestNet)
    | Documentation: N/A
    
    - **Web App** Repo [wika_app](https://github.com/randombishop/wika_app)
    | Live beta version:[app.wika.network](https://app.wika.network) 
    | Documentaton: N/A
    
    - **Browser Extension** Repo [wika_browser_ext](https://github.com/randombishop/wika_browser_ext)
    | Documentaton: [Test from source](https://www.wika.network/docs/contribute/test-browser-ext)
    
    - **Indexed Database** Not started yet.
    
    - **Offchain API** Not started yet.
    
    - **Polkaswap Bridge** Not started yet.
    
    - **Like Buttton Integrations** Not started yet.  
    
        
* UI design:
    - The web app and the browser extension are already 
    available to test the UI, iterate and improve the design.
    Follow the [Getting Started](https://www.wika.network/docs/guides/getting-started) guide to give it a try.

* Data models and code of the core functionality:
    - [Likes pallet](https://github.com/randombishop/wika_node/blob/master/pallets/likes/src/lib.rs)
    - [Owners pallet](https://github.com/randombishop/wika_node/blob/master/pallets/owners/src/lib.rs)
    
* Technology stack:
    - Blockchain: Substrate.
    - Web App: React JS.
    - Browser Extension: Pure JS, compatible both Chrome and Firefox.
    - Indexed databases: ETL written in NodeJS, data stored in Elastic Search (URL documents) and Neo4J (social network.) 
    - Offchain API: NodeJS web services.
    - SORA/Polkaswap Bridge: Substrate.
    - Website and documentation: Docusaurus. 
    
* Documentation:
    - [Current state](https://www.wika.network/docs/intro)
 
* PoC:
    - [Blockchain TestNet](https://telemetry.polkadot.io/#list/Wika%20TestNet) deployed.
    - [Web App](https://app.wika.network/) deployed.
    - [Browser Extension](https://github.com/randombishop/wika_browser_ext) can be installed from source.
    
* What Wika Network _is_ vs is _not_:
    - **IS:** Wika Network main product is the blockchain until we reach 
    a fully decentralized governance and maintenance process.
    
    - **IS:** Wika Network also comes with a web app and a browser extension. 
    Ultimately, we hope that alternatives will emerge with different approaches, 
    but until then, we will commit to building the front-end tools to facilitate 
    understanding, onboarding and interacting with the blockchain with the best UX. 
  
    - **IS NOT:** We will also be developing offchain indexed databases and APIs, 
    a recommender system prototype, 
    plugins for website developers, and other tools as our idea evolves. 
    But we think of those as simple PoC implementations to kick-start 
    all the components of the future ecosystem and test their interactions.
    
   
    

### Ecosystem Fit

* The blockchain side is developed using Substrate, 
with the intention to become a Kusama/Polkadot Parachain in the future.

* The front-end relies on the polkadot-js extension to manage signatures.

* The spirit of the design and architecture is minimalism: 
implement one simple registry and social contract, and plug to other ecosystem components to grow the capabilities.

* Target audience: internet users familiar with Polkadot wallet and blockchains, 
with the desire to make a positive contribution and protect their data.
(This will be the core community, 
then it should spread from this niche to a broader audience by educating and convincing more users.)

* Main needs met by Wika blockchain: 
    - Webpage to Owner registry
    - Universal Like Button

* Other projects similar to Wika in the Substrate / Polkadot / Kusama ecosystem: not yet.
LikeCoin seems to be a similar initiative built with Cosmos SDK, 
but we believe our design is simpler.


## Team :busts_in_silhouette:

### Team members

* Nabil Abdellaoui
* Reda Bendiar
* Doug Astor
* John Candido

### Contact

* **Contact Name:** Nabil Abdellaoui
* **Contact Email:** nabil.abdellaoui@expr-research.com
* **Website:** www.wika.network

### Legal Structure

* **Registered Address:** Creation in progress...
* **Registered Legal Entity:** Creation in progress...

### Team's experience

**Nabil** is a self-taught software architect with 25 years experience 
coding in different programming languages and frameworks.

Code Jammer, Kaggle Master, from Java backends
to Data Science in R, Machine Learning Engineering in Python, front-ends in React-JS, 
he has a full-stack expertise shaped over the years 
by concrete business impact deliverables.

Except when it comes to blockchain, but that's his latest passion and he is 
now learning Rust and Substrate to join the amazing train of DApps!    

**Reda** Reda has +20 years experience in IT across 3 continents and dozens of technologies from perl to golang. 

On 2010, he co-founded a travel technology company, with API integration as its core product; 
where he aquired skills in architecture, backend, front-end developement, ops, team and project management. 

Hungry for discovering new grounds, on 2019, he joined a blockchain company focusing on multi-chain interoperabililty. 

Lately he has been working on a computer vision application to aquaculture, 
and he recently onboarded the rust boat to contribute to the Wika Network.


### Team Code Repos

* https://github.com/randombishop
* https://github.com/redben
* https://github.com/randombishop/wika_node
* https://github.com/randombishop/wika_app
* https://github.com/randombishop/wika_browser_ext
* https://github.com/randombishop/wika_website


### Team LinkedIn Profiles (if available)

* https://www.linkedin.com/in/nabilabdellaoui/
* https://www.linkedin.com/in/reda-bendiar-20841120/

## Development Status :open_book:

The [global roadmap](https://www.wika.network/roadmap) of this project consists of 3 phases:
1. Foundation
2. Building
3. Scaling

We are requesting this Grant in the context of phase 1 -Foundation- to:
 - Develop first versions of the indexed database and offchain API.
 - Develop Integration libraries and guides for:
    - Plain old HTML/JS.
    - ReactJS framework.
    - WordPress CMS.  
 - Test, stablize and document the codebase developed so far.

By the end of the milestones detailed below, the Wika Blockchain Test Net should be fully operational, 
documented, and the project ready to graduate to its Main Net.

 

## Development Roadmap :nut_and_bolt:



### Overview

* **Total Estimated Duration:** 4 Months
* **Full-Time Equivalent (FTE):**  1.0 FTE
* **Total Costs:** 20,000 USD

### Milestone 1 — Indexed Databases

* **Estimated duration:** 1 month
* **FTE:**  1
* **Costs:** 5,000 USD

Global success criteria:
* ETL Service + Elastic Search + Neo4J up and running in wika.network GCP environment against TestNet blockchain.
* ES front end running on https://esdb.test.wika.network
* Neo4J front end running on https://graphdb.test.wika.network


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **gituhb repo readme** that explains how to spin up database instances and sync them with a blockchain node. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. The **github  repo readme** we will also describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that packages the ETL service. |
| 0e. | Article | We will publish an **article** that explains the design of this repo and showcases typical queries that can be run against Elastic Search and Neo4J.) |
| 1. | ETL | The ETL starts at the block number saved in the database and processes one block at a time. When done processing history, it will listen to new blocks and apply the same ETL. |
| 2. | ETL Elastic Search |  Elastic Search will store one document per URL with title and other meta information pulled from the web page.    |  
| 3. | ETL Neo4J | Neo4J will store one node per URL, one node per Account, Like relationships (edges) and Ownership relationships... |  
| 4. | ETL Error Recovery | The service should report errors to its admin recipient by email and gracefully keep retrying a certain number of times before stopping.  | 
| 5. | ETL Logging | Advanced monitoring is out of scope for this first version, but the service will write clean logs to report status. |  
| 6. | Configuration | Database endpoints are defined in a configuration file. The configuration file location has a default, and can also be changed using en environment variable. The ETL also allows to do Elastic Search only, Neo4J only, or both.  |  
| 7. | Example clients | Not part of the repo scope itself, but it will provide documentation on how to plug-in client tools. |  




### Milestone 2 — Offchain API

* **Estimated Duration:** 2 weeks
* **FTE:**  1
* **Costs:** 2,500 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **gituhb repo readme** that explains how to spin up database instances and sync them with a blockchain node. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. The **github  repo readme** we will also describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that packages the ETL service. |
| 0e. | Article | We will publish an **article** that explains the design of this repo and showcases typical queries that can be run against Elastic Search and Neo4J.) |
| 1. | ETL | The ETL starts at the block number saved in the database and processes one block at a time. When done processing history, it will listen to new blocks and apply the same ETL. |
| 2. | ETL Elastic Search |  Elastic Search will store one document per URL with title and other meta information pulled from the web page.    |  
| 3. | ETL Neo4J | Neo4J will store one node per URL, one node per Account, Like relationships (edges) and Ownership relationships... |  
| 4. | ETL Error Recovery | The service should report errors to its admin recipient by email and gracefully keep retrying a certain number of times before stopping.  | 
| 5. | ETL Logging | Advanced monitoring is out of scope for this first version, but the service will write clean logs to report status. |  
| 6. | Configuration | Database endpoints are defined in a configuration file. The configuration file location has a default, and can also be changed using en environment variable. The ETL also allows to do Elastic Search only, Neo4J only, or both.  |  
| 7. | Example clients | Not part of the repo scope itself, but it will provide documentation on how to plug-in client tools. |  

Global success criteria:
* ETL Service + Elastic Search + Neo4J up and running in wika.network GCP environment against TestNet blockchain.
* ES front end running on https://esdb.test.wika.network
* Neo4J front end running on https://graphdb.test.wika.network



### Milestone 3 — Integration Libs

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 5,000 USD

...



### Milestone 4 — Test, debugging and documentation of full suite or repositories

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 5,000 USD

...




## Future Plans

Please include here

* how you intend to use, enhance, promote and support your project in the short term, and
* the team's long-term plans and intentions in relation to it.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

