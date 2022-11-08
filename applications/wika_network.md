# wika.network

* **Team Name:** Web Registry DAO
* **Payment Address:** 0xBfc8cDb5617eE0F83794156ABD7465730E125cE3 (USDT)
* **Level:** 2


## Project Overview :page_facing_up:


### Overview

#### Make the Internet a Better Place.

Our mission is to build a clean, public and non-intrusive blockchain registry to empower 
authors, search engines and recommendation systems that respect privacy and are 100% transparent.

- **Content Consumers** will be able to like their favorite pages and reward the authors and previous likers.

- **Authors** will register their ownership in one public decentralized database, and whether their content lives in youtube, 
facebook, medium or any other internet place, Wika users will be able to reward them directly.
 
#### Why?

Because there are too many Like buttons out there!

Each one generates data in private databases that are often used to optimize for advertisment or hidden agendas.

Our idea is pretty simple: why not a clean and transparent version of those?
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

But the damages are real at the person level: stolen personal information, fraud and identity theft; 
and this will seriously hurt the victims.

At the global level of society, when data is used unethically, that means discrimination, public opinion abuse, stock market manipulation, 
social network addictions, just to name a few we already know about; plus all the negative long term effects still to be learnt. 

Long story short: data protection and algorithmic ethics are great responsibilities 
centralized into a few powerful entities.
 
So why are we building this? Because we are engaged in solving this problem to make the internet a better place, 
and we believe that with blockchain technology and Polkadot ecosystem, 
we have all the necessary foundations and ingredients to succeed: 

- Trustless design.
- Decentralization.
- Transparency.
- Anonimity.
- Security.



 

### Project Details

* Social Smart-Contract:

    ![Economic Model](https://www.wika.network/img/how-it-works/wika_economy.png)

* Components:

    ![Architecture](https://www.wika.network/img/tech/architecture.png)

    - **Blockchain** 
      - Repo: [wika_node](https://github.com/randombishop/wika_node) 
      - TestNet node: wss://testnode3.wika.network:443
      - Telemetry: [telemetry.polkadot.io](https://telemetry.polkadot.io/#settings/Wika%20TestNet)
    
    - **Web App** 
      - Repo: [wika_app](https://github.com/randombishop/wika_app)
      - Live beta version: [app.wika.network](https://app.wika.network) 
    
    - **Browser Extension** 
      - Repo: [wika_browser_ext](https://github.com/randombishop/wika_browser_ext)
      - Documentation: [Test from source](https://www.wika.network/docs/contribute/test-browser-ext)
    
    - **Indexed Databases** 
      - Not started yet.
    
    - **Offchain API** 
      - Not started yet.
    
    - **Integrations** 
      - Not started yet.  
    
        
* UI design:
    - The web app and the browser extension are already 
    available to test the UI, iterate and improve the design.
    Follow the [Testing](https://www.wika.network/docs/contribute/test-browser-ext) guide to give it a try.

* Data models and code of the core functionality:
    - [Likes pallet](https://github.com/randombishop/wika_node/blob/master/pallets/likes/src/lib.rs)
    - [Owners pallet](https://github.com/randombishop/wika_node/blob/master/pallets/owners/src/lib.rs)
    
* Technology stack:
    - Blockchain: Substrate.
    - Web App: React JS.
    - Browser Extension: Pure JS, compatible both Chrome and Firefox.
    - Indexed databases: ETL written in NodeJS, data stored in Elastic Search (URL documents) and Neo4J (social network.) 
    - Offchain API: NodeJS web services.
    - Website and documentation: Docusaurus. 
    
* Documentation:
    - [Wika Website](https://www.wika.network/docs/intro)
 
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

* Main needs met by our blockchain: 
    - Webpage to Owner registry
    - Universal Like Button

* Other projects similar in the Substrate / Polkadot / Kusama ecosystem: 
    - Not found.

* LikeCoin seems to be a similar initiative built with Cosmos SDK, 
but we believe our design is simpler.


## Team :busts_in_silhouette:

### Team members

* Curtis Wilkerson
* Nabil Abdellaoui
* Reda Bendiar
* John Candido
* Doug Astor
* Thomas Cantrell


### Contact

* **Contact Name:** Curtis Wilkerson
* **Contact Email:** curtisawilk@gmail.com
* **Website:** www.wika.network

### Legal Structure

* **Registered Address:** 36 Stanwood Dr, K2G 2Z2 NEPEAN, Canada
* **Registered Legal Entity:** Web Registry DAO

### Team's experience

**Curtis Wilkerson** is a data scientist working in financial technology for 6 years. His focus has been credit & fraud modeling as well as building machine learning infrastructure in the fintech/financial inclusion space. 

**Nabil** is a self-taught software architect with 25 years experience 
coding in different programming languages and frameworks.

Code Jammer, Kaggle Master, from Java backends
to Data Science in R, Machine Learning Engineering in Python, front-ends in React-JS, 
he has a full-stack expertise shaped over the years 
by concrete business impact deliverables.

Blockchain is his latest passion and he is 
now learning Rust and Substrate to join the amazing train of DApps!    

**Reda** has +20 years experience in IT across 3 continents and dozens of technologies from perl to golang. 

In 2010, he co-founded a travel technology company, with API integration as its core product; 
where he aquired skills in architecture, backend, front-end developement, ops, team and project management. 

Hungry for discovering new grounds, on 2019, he joined a blockchain company focusing on multi-chain interoperabililty. 

Lately he has been working on a computer vision application to aquaculture, 
and he recently onboarded the rust boat to contribute to the Wika Network.

**John Candido** is managing partner of Nuovo Advisors, a consulting firm that specializes in the utilization of machine learning and blockchain to drive revenue for its partners. 

Notable partners have included companies such as PayPal, UPS, Honey and Tala. 

Most recently, John has worked to facilitate strategic partnerships such as the public announcement between Visa, Circle, Stellar and Tala for the development of innovative blockchain and data science initiatives. 

Prior to founding Nuovo, John served as Head of Data Science & Modeling at ZestFinance, where he led and built teams for over seven years. There he led on all of the startup’s major partnerships, most notably with companies like JD.com, Baidu, Ford Motor Credit, Discover, and Synchrony.  

John also regularly serves as a thought leader and public figure for credit executives on the subject of machine learning, having spoken on multiple industry panels and at notable conferences such as Lendit Fintech, American Banker’s BankAI and the Marketplace Lending Summit.


In his own words, **Doug Astor** is a degen!

Also, he is currently the admin of the Wika discord server.

**Thomas Cantrell** is a data scientist working in banking operations and regulatory compliance at Capital One for 6 years. His focus is primarily on operations predictive modeling, document-centric vision machine learning, and process automation. Outside of work, he enjoys experimenting with generative deep learning.
 
The above 6 members are the current owners of the multisig address recipient of this grant.


### Team Code Repos

* https://github.com/randombishop
* https://github.com/redben
* https://github.com/randombishop/wika_node
* https://github.com/randombishop/wika_app
* https://github.com/randombishop/wika_browser_ext
* https://github.com/randombishop/wika_website


### Team LinkedIn Profiles 

* https://www.linkedin.com/in/nabilabdellaoui/
* https://www.linkedin.com/in/reda-bendiar-20841120/
* https://www.linkedin.com/in/johncandido/
* https://www.linkedin.com/in/doug-astor-96b72750/
* https://www.linkedin.com/in/thomasocantrell/

## Development Status :open_book:

The [global roadmap](https://www.wika.network/roadmap) of this project consists of 3 phases:
1. Foundation
2. Building
3. Scaling

We are requesting this Grant in the context of phase 1 -Foundation- to:
 - Develop first versions of the indexed databases and offchain API, 
 to allow the front end to display recommendations, liked pages and owned pages. 
 This will have an important impact helping end-users understand and interact with the blockchain. 
 - Develop Integration libraries and guides for:
    - Plain old HTML/JS.
    - ReactJS framework.
    - WordPress CMS.  
 - Test, stablize and document the codebase developed so far.

By the end of the milestones detailed below, the Wika Blockchain Test Net should be ready for a substrate code review, 
then preparation for its graduation to mainnet.

 

## Development Roadmap :nut_and_bolt:



### Overview

* **Total Estimated Duration:** 3 Months
* **Full-Time Equivalent (FTE):**  1 FTE
* **Total Costs:** 15,000 USD

### Milestone 1 — Indexed Databases

* **Estimated duration:** 1 month
* **FTE:**  1
* **Costs:** 5,000 USD

Global success criteria:
* Fully dockerized ETL Service up and running in wika.network GCP environment against TestNet blockchain.
* Elastic Search front end running on https://esdb.test.wika.network, with documentation and a medium article detailing its fully reproducible deployment process.
* Neo4J front end running on https://graphdb.test.wika.network, with documentation and medium article detailing its fully reproducible deployment process.

Note: check out https://doc.subquery.network/ for related code.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **gituhb repo readme** that explains how to spin up database instances and sync them with a blockchain node. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. The **github  repo readme** we will also describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that packages the ETL service. |
| 0e. | Article | We will publish a series of **articles** that explain: - The design of this repo and showcases typical queries that can be run against Elastic Search and Neo4J. - Fully reproducible guide to deploy Elastic Search along the ETL. - Fully reproducible guide to deploy Neo4J along the ETL. |
| 1. | ETL | The ETL starts at the block number saved in the database and processes one block at a time. When done processing history, it will listen to new blocks and apply the same ETL. |
| 2. | ETL Elastic Search |  Elastic Search will store one document per URL with title and other meta information pulled from the web page.    |  
| 3. | ETL Neo4J | Neo4J will store one node per URL, one node per Account, Like relationships (edges) and Ownership relationships... |  
| 4. | ETL Error Recovery | The service should report errors to its admin recipient by email and gracefully keep retrying a certain number of times before stopping.  | 
| 5. | ETL Logging | Advanced monitoring is out of scope for this first version, but the service will write clean logs to report status. |  
| 6. | Configuration | Database endpoints are defined in a configuration file. The configuration file location has a default, and can also be changed using en environment variable. The ETL also allows to do Elastic Search only, Neo4J only, or both.  |  
| 7. | Example clients | Not part of the repo scope itself, but it will provide documentation on how to plug-in client tools. |  




### Milestone 2 — Offchain API

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 5,000 USD

Global success criteria:
* API is deployed on https://api.test.wika.network.
* API is consumed by the UI in app.wika.network.


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code, a **gituhb repo readme** that explains how to spin up the API endpoint, and also auto-generated API documentation in s standard format. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. The **github  repo readme** we will also describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that packages the API service. |
| 0e. | Article | We will publish an **article** that explains the design of this repo and showcases the deployed functions.) |
| 1. | list_url_by_liker(address) | List the URLs liked by input address. |
| 2. | list_url_by_owner(address) |  List the URLs owned by input address.    |  
| 3. | search(query) | Search URLs matching the query using domain, title and meta data |  
| 4. | recommend(address) | Generate a list of recommendations for a user  | 
 


### Milestone 3 — Integration Libs

* **Estimated Duration:** 3 months (expected to start work in December 2022 and be completed March 2023)
* **FTE:**  1
* **Costs:** 5,000 USD

Global success criteria:
* Easy to add the Wika Widget in a website using plain HTML/JS or ReactJS by following a Dev guide.
* Easy to add the Wika Widget to a WordPress website using a ready-to-go plugin.


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code, a **gituhb repo readme** that lists the available integrations and points to the guides. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. The **github  repo readme** we will also describe how to run these tests. |
| 0d. | Docker | Non Applicable to this project |
| 0e. | Article | We will publish an **article** that explains how authors can take advantage of the Wika Network and shows how to add it to their website.) |
| 1. | HTML+JS Integration | Add the Wika Like Button and balance to any website using plain HTML and JS. |
| 2. | ReactJS Integration | Add the Wika Like Button and balance to any ReactJS website using npm install wika-react and adding the component to React source. |
| 3. | WordPress Integration | Add the Wika Like Button and balance to a WordPress website using a WordPress plugin. |  








## Future Plans

The final goal of the Foundation phase is to reach 10,000 active users.

Please review our [Roadmap](https://www.wika.network/roadmap) 
for a high level view of our 3-phases plan. 

At the technical level, once we achieve the above milestones, 
we will be in a good position to start implementing governance aspects, audit and harden the codebase and grow the community.

We will also work next on a bridge to a DEX to create the means to ramp in and out the chain.

In parallel, we will also need to think more about the probably most important question of the design:
what is the incentive for end-users?

There are different components to answer that question:

1. Be generous.
2. Be against centralized obscure privacy-invasive systems.
3. Earn rewards.
4. Build a reputation.  

1, 2 and 3 are already designed for, while 4 is TBD; but as we build and grow the user base, 
we should have more data and a better understanding of this question.
 
In addition to the data, by having an open conversation in the community, 
we should converge to the optimal mix of those components and parameters.

An other interesting question is if we should implement a **Dislike Button** 
and what economic and social model could apply in that use case.

We can consider different models and run simulations to understand the possible patterns 
and risks that could emerge from the system.

In summary, we see the development of the foundations phase -and the near future- 
as an iterative process where we will learn from the community. 



## Additional Information :heavy_plus_sign:

**How we heard about the Grants Program?** 

Web3 Foundation Website 

**Context of our request**

Beyond the financial aspect of the grant, which will help motivate and reward contributors, 
one of our key objectives is to introduce our project to Web3 / Polkadot / Substrate communities.

Also, though  all team members have proven track records of expertise and success in their particular fields, 
we are aware that we are still "beginners" when it comes to blockchain and Substrate. 
As such, being able to present our project to a panel of experts, gather feedback and learn, would be fantastic for our team.

So if our Grant request were to be approved, 
it would generate the right connections; and we would be set up for success to improve our blockchain codebase and graduate to mainnet afterwards.

For these reasons, we are looking forward to starting a conversation with W3F, 
and as we learn, we are very open to re-visiting this request's scope and form together. 

   

