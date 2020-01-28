# Open Grant Proposal

* **Project:** [Polkastats](https://polkastats.io)
* **Proposer:** Colm3na
* **Payment Address:** BTC : 3982fvdPfs1hHUF7BYc2GbaU3LdfN4Ruzg

## Project Description :page_facing_up: 

Polkastats project is a WebApp that displays interesting and diverse information of live Substrate based blockchains. It consumes the data from its own database, what makes it fast and responsive. At the same time, the Polkastats backend feeds the database with the different blockchain events.

Polkastats project serves very useful information for validators and delegators alike. In most of cases, information shown by Polkastats is not available in any other place, whereas sometimes the information, if repeated, is presented in a more usable manner.

Polkastats is natively integrated into Substrate / Polkadot networks. We run several full nodes to keep the service online.
Furthermore, it is safe to state that this project has already found a place at the community's heart. The number of visitors has been constantly increasing since Polkastats launch back in august and it is talked about in the different communication channels. Also, Polkadot has been at the center for Polkastats since its conception, so there is no doubt left about their intertwinement.

ColmenaLabs team has always been looking for the best way to contribute to blockchain projects we consider the most interesting.
Thus, we already boast of a long history of collaborations with Polkadot. 

We have translated into Spanish the Polkadot web, the wiki and a bunch of education materials. We have conducted many meetups and workshops "spreading the word" about Polkadot all over our country. We are active in PolkaDAO and have Polkadot ambassadors in our team.

## Team :busts_in_silhouette:

* **Members:** Mario, Ana, Wimel, Fredy
* **LinkedIn Profiles:** [Mario](https://www.linkedin.com/in/mariopinouceda/), [Ana](https://www.linkedin.com/in/anagutjor/), [Wimel](https://www.linkedin.com/in/angelsvq/), [Fredy](https://www.linkedin.com/in/alfredoluque/)

* **Code Repos:** This Grant repos [polkastats-v3](https://github.com/Colm3na/polkastats-v3), [polkastats-backend-v3](https://github.com/Colm3na/polkastats-backend-v3), Former repos: [polkastats-v2](https://github.com/Colm3na/polkastats-v2), [polkastats-backend-v2](https://github.com/Colm3na/polkastats-backend-v2), [polkastats-v1](https://github.com/Colm3na/polkastats), [polkastats-backend-v1](https://github.com/Colm3na/polkastats-backend)

* **Website:** https://colmenalabs.org

* **Legal Structure:** Colmena Labs, Calle el Aceitunillo, 9, Local, 6B, 41930 Bormujos, Sevilla. 

* **Team's Experience:** 

Team ColmenaLabs has a vast expertise in blockchain technologies, conducting Ethereum meetups since earlier 2016. ColmenaLabs is also one of the most active blockchain communities of the whole Iberian Peninsula (Spain + Portugal). Our previous blockchain experience has facilitated our landing in the Proof of Stake era, where we are participating so far with great success and good reputation on many projects. We have 2 winners of the Game of Stake Hackathon, we are validating on Kusama testnet and we support Polkadot testnets since PoC-1. 
Our latest contribution as well as the reason of this application is our new beloved child, [polkastats.io](https://polkastats.io)

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 3 months
* **Total Costs:** 3.35 BTC

### Milestone 1: New backend v3

In this milestone we want to refactor our backend to be more resilient, scalable and efficient.
The use of PosgresSQL will help us to have a little bit faster and reliable backend and to implement Hasura.
We'll build new crawlers that work in subscription mode and let us work more like a full block explorer.
Implementing Hasura will bring us table subscriptions and the power of GraphQL to query the contents of the new backend database.

* **Estimated Duration:** 6 weeks
* **Costs:** 1.35 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | MySQL -> PosgresSQL | Refactor database schema and migrate to PosgresSQL |  
| 2. | Crawlers | Refactor/develop crawlers to fill the new schema |  
| 3. | Hasura backend | Implement the new Hasura backend |

Deliverables in this milestone will be dockerized. We will also include a README to run the development container. The container will include the PosgresSQL, the Crawlers and Hasura.

#### 1.1 MySQL -> PosgresSQL

We'll move our database server from MySQL to PostgreSQL (which is a requirement of the new Hasura backend and will perform better with large databases).

This step includes a refactor of the current database schema.

#### 1.2 Crawlers

Our plan is to improve our crawlers, and move the current synchronous information fetching to a subscription based way. 

We are going to make them with NodeJS. All data we crawl will be stored into our DB, where we will keep it safely to then display it and make statistics or process it in any way useful for Polkastats users.

We are going to improve the crawlers for the following data:

##### Blocks:

Extract and store information of all blocks in our database is our first priority.

* Crawler 1: This crawler get susbcribed to new blocks and store their metadata in the database.
* Crawler 2: This crawler fetch and store the information of the blocks between genesis and the first that we have data.
* Crawler 3: This crawlers checks the integrity of the block database by iteration over all stored blocks, filling the gaps (caused by a server restart or node problem) and logging any founded problem. 

##### System events:

* Crawler 1: This crawler get susbcribed to new blocks and store their events metadata in the database.
* Crawler 2: This crawler fetch and store the information of the events of the blocks between genesis and the first that we have data.
* Crawler 3: This crawlers checks the integrity of the events database by iteration over all stored blocks, filling the gaps (caused by a server restart or node problem) and logging any founded problem.

##### Validators:

We need to figure out how to extract the slashes and rewards and store in database.

##### Nominators:

We need to figure out how to extract the slashes and rewards and store in database.

##### Accounts:

We need to fetch and store identity and balances information about all the active accounts to easily integrate it in PolkaStats.

##### Phragmen:

We need to modify the https://github.com/kianenigma/offline-phragmen and phragmen crawler in order to fetch phragmen algorithm information about intention and validators.

#### 1.3 Hasura API

Hasura is going to be our API solution. Hasura is an "instant, realtime GraphQL API over Postgres", built to be really easy to deploy and use. It is reliable and GraphQL is undeniably a step forward in how we talk to APIs and how we use them.
 
Hasura already comes with Postgres integrated, and this is the DB will be using to store all data. At the same time, it already provides us with a GraphQL API in place so we can easily query for our stored data. So solved the question of both DB and API in one single go.
 
[Hasura's GitHub](https://github.com/hasura/graphql-engine)
 
The new API will allow us to expose a very interesting building block for new Polkadot dapp builders and validators. The API will be open and free for those who want to use our curated data and build their own sites and apps. For that purpose it will include a reasonable documentation.

### Milestone 2: new frontend v3

In this milestone we will focus on migrate the frontend to use GraphQL queries to our new Hasura backend server, implement internacionalization and develop new frontend features.

* **Estimated Duration:** 4 weeks
* **Costs:** 1 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Migrate frontend | Migrate current frontend to use new backend features |  
| 2. | Internationalization i18n | Translate PolkaStats Platform to at Spanish language |  
| 3. | New UI features | Implement new features using the new poweful backend | 

Deliverables in this milestone will be dockerized. We will also include a README to run the development container. The container will include the new frontend. New frontend will be feeded by the backend develped in milestone 1 and will include the new UI features of mileston 2.

#### 2.1 Migrate frontend

We need to migrate the frontend to use GraphQL queries to our new Hasura backend server.

#### 2.2 Internacionalization (i18n)

To reach a broader public we will include an internacionalization module to Polkastats. The module will facilitate other languages to be included. Once the module gets ready we will incentivate those translations funding them with gitcoin.

#### 2.3 New UI features

##### 2.3.1 Phragmen algorithm

Our plan is to focus on the possibilities of the phragmen algorithm:

* Explain it better to users
* Implement phragmen results for intentions
* Implement phragmen results for nominators

##### 2.3.2 New graphs

Our plan is to implement new validator graphs:

* Rewards
* Slashes
* Produced blocks
* Status (active or not)

### Milestone 3: Polkadot browser extension and Ledger integration

In this milestone we'll implement key components to allow our users to interact with Kusama and Polkadot blockchains using PolkaStats platform.

* **Estimated Duration:** 4 weeks
* **Costs:** 1 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Polkadot browser extension | Allow nominators to stake using PolkaStats and Polkadot browser extension |  
| 2. | Ledger | Allow nominators to stake using PolkaStats and Ledger |

Deliverables in this milestone will be dockerized. We will also include a README to run the development container. The container will serve a frontend ready to be connected to Polkadot browser extension and if the Ledger kusama app.

#### 3.1 Polkadot browser extension

We will leverage the [Polkadot browser extension](https://github.com/polkadot-js/extension). The goal is to allow nominators to operate using PolkaStats platform and Polkadot browser extension.

#### 3.2 Ledger

Zondax has already develop the [Ledger Kusma app](https://github.com/Zondax/ledger-polkadot) and we do not hesitate that Juan Leni will make it work in Polkadot very soon. The goal is to allow nominators to operate using PolkaStats platform and Ledger hardware wallet.


##  License
 
Polkastats V3 license is Apache license version 2.0

## Additional Information

* What work has been done so far?

So far what we have built (mainly just Mario, Polkastats true father) is the block explorer itself with all the main features both for regular users and also validators, like visualization of each validator's node state, transactions, individual stakes, etc.

* Are there are any teams who have already contributed (financially) to the project?

ColmenaLabs has been sponsoring and covering all expenses related to the project from the begining.

* Have you applied for other grants so far?

No.

* Are there any other projects similar to yours? If so, how is your project different?

Some features of polkastats could be found on other projects such us polkascan and the wonderfull polkadot.js.org/apps
That being said, we consider that polkastats has its own public and space in Polkadot ecosystem.

* Similar projects and differences:
 
Remarkably, the other (and earlier only) Polkadot block explorer out there is Polkascan, by which Polkastats has been undoubtedly heavily inspired.
Still, Polkastats brings in some nice specs that make it unique and, we also believe, better for certain kinds of use.
First of all, we find the interface to be much more user friendly.
 
