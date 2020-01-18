# Open Grant Proposal

* **Project:** [Polkastats](https://polkastats.io)
* **Proposer:** Colm3na
* **Payment Address:** BTC payment address. We don't accept payments for the program in other currencies at this stage. 

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

* **Code Repos:** [polkastats-v2](https://github.com/polkastats-v2), [polkastats-backend-v2](https://github.com/Colm3na/polkastats-backend-v2), [polkastats-v1](https://github.com/Colm3na/polkastats), [polkastats-backend-v1](https://github.com/Colm3na/polkastats-backend)

* **Website:** https://colmenalabs.org

* **Legal Structure:** Please provide the name and registered address of the legal entity executing the project. 

* **Team's Experience:** 

Team ColmenaLabs has a vast expertise in blockchain technologies, conducting Ethereum meetups since earlier 2016. ColmenaLabs is also one of the most active blockchain communities of the whole Iberian Peninsula (Spain + Portugal). Our previous blockchain experience has facilitated our landing in the Proof of Stake era, where we are participating so far with great success and good reputation on many projects. We have 2 winners of the Game of Stake Hackathon, we are validating on Kusama testnet and we support Polkadot testnets since PoC-1. 

Our latest contribution as well as the reason of this application is our new beloved child, [polkastats.io](https://polkastats.io)

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 3 months
* **Total Costs:** 3.3 BTC

### Milestone 1

Please add additional milestones in the same way. If possible, include a tutorial and a docker image for each milestone to make it easier for us to evaluate your software. 
* **Estimated Duration:** Duration of milestone 1 
* **Costs:** Amount of Payment in BTC for milestone 1


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Title of the deliverable | Please describe the deliverable here as detailed as possible |  
| 2.  | ... |...|  


1. Milestone: New backend v3
    1. MySQL -> PosgresSQL
    2. Crawlers
    3. Hasura API

2. Milestone: Frontend v3
    1. New graphs
    2. Polkadot browser extension
    3. Ledger

3. Milestone: Internationalization i18n

4. Milestone: Identity & Improvements of UX designs
    1. Identity
    2. UX 

5. Milestone: Monitorization for validators

### 1 New backend v3

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

### 2 Frontend

#### 2.1 New graphs

Our plan is to implement new validator graphs:

* Rewards
* Slashes
* Produced blocks
* Status (active or not)

#### 2.2 Polkadot browser extension

We will leverage the [Polkadot browser extension](https://github.com/polkadot-js/extension). The inclusion of this extension will facilitate the "per user" customization goal of milestone 4. It will also allow any other interaction with the blockchain from within polkastats platform.

#### 2.3 Ledger

Zondax has already develop the [Ledger Kusma app](https://github.com/Zondax/ledger-polkadot) and we do not hesitate that Juan Leni will make it work in Polkadot very soon. This component will add a valuable overall security improvement to the polkastats web app. 

### 3 Internacionalization (i18n)

To reach a broader public we will include an internacionalization module to Polkastats. The module will facilitate other languages to be included. Once the module gets ready we will incentivate those translations funding them with gitcoin.

### 4 Identity & Improvements of UX designs

#### 4.1 Identity
 
Polkastats needs to integrate identity module information for all accounts. The customization possiblilities of "per user" information is a very interesting feature. We will leverage the already implemented identity substrate module. This feature will permit the storage on the local DB of a small and responsive amount of data. At the same time, we would like to encourage this way the enrollment of validators and delegators in polkastats platform and the usage of identity module.

The UX in general needs to be improved. We have focused mainly on its functionality until now, leaving the usage easinness and the stetics aspects for later. This milestone will be outsourced for better results. 

### 5 Monitorization for validators

Our objective is to offer a free monitorizacion service for validators, so you can get alerts by email and/or telegram about your validator.

* Validator status change: (validating/intention/down)
* New nomination
* Removed nomination
* Nomination change
* Slash events
* Reward events

We are discussing about this feature, but maybe include a Telegram bot to susbcribe to the alerts.


##  License
 
Polkastats license is GNU General Public License v3.0

## Additional Information

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?
* Are there any other projects similar to yours? If so, how is your project different?

* What work has been done so far?

So far what we have built (mainly just Mario, Polkastats true father) is the block explorer itself with all the main features both for regular users and also validators, like visualization of each validator's node state, transactions, individual stakes, etc.
 
* Similar projects and differences:
 
Remarkably, the other (and earlier only) Polkadot block explorer out there is Polkascan, by which Polkastats has been undoubtedly heavily inspired.
 
Still, Polkastats brings in some nice specs that make it unique and, we also believe, better for certain kinds of use.
 
First of all, we find the interface to be much more user friendly.
 
