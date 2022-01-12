# W3F Grant Proposal


- **Project Name:** ORI (Onchain Risk Intelligence)
- **Team Name:** SyntiFi
- **Payment Address:** 0x5E89f8d81C74E311458277EA1Be3d3247c7cd7D1 (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):**
  2

## Project Overview :page_facing_up:

The main issue in fighting financial crime is that traditional and
crypto financial institutions manage their own Anti Money Laundering
(AML) processes independently. These same institutions continue to
invest enormous resources in INTERNAL systems to fight financial crime
and fulfill regulatory requirements. Yet, financial crime occurs
across institutions and jurisdictions in both crypto- and fiat
worlds. Closer collaboration between the market players is
fundamental, but privacy regulations and banking secrecy rules prevent
data sharing. The result is an industry on the verge of a revolution
that still relies on regulatory processes of the last century. The
blockchain technology solves some of these problems by providing a
secure and reliable ledger to all stakeholders. SyntiFi is here to
close the gap and provide on-chain tools to investigate and monitor
financial transactions stored across-chains.


### Overview

SyntiFi is actively developing ORI, an On-chain Risk Intelligence
tool to fight and prevent financial crime. We do believe that with the
great power of decentralized finance comes the great responsibility of
ensuring that no financial crime, money laundering or terrorist
financing is taking place. For this reason, some crucial capabilities
of our tool is made available open source. In this grant we ask for
support to add Polkadot to our growing ecosystem of chains and tokens.

### Project Details

In a nutshell this project is composed of two main steps:
	
1. the implementation of a Job to crawl and index the Polkadot
       chain and persist the information according to the ORI data
       model (Token, Block, Account and Transaction);
2. and the development of a REST API with resources to query the
       indexed chain, trace the coin and rate a given account
       according to some AML metrics.

The tool is implemented in Java and uses the micro-service framework
Quarkus, as well as the Spring Jobs for the crawler. Up until now we 
were indexing directly on ElasticSearch but we are currently changing 
it to use Postgresql as persistency layer together with ElasticSearch 
for an efficient search (more precisely we use a hibernate-elastic-search 
module to facilitate the sync between the SQL DB and Elastic Search). 

Additionally we could have decied to use any of the already available 
indexers for the different chains. The issue is that these indexers are 
often storing the whole information of the blocks and merkle trees, but 
we just need a smaller portion of that. For this reason we decided to 
create our own, simple crawler, to index just what we need and replicate 
that for the different chains. We believe that in doing so we can facilitate
the integration of other chains into the system.

ORI also comes with a front-end implemented in React. The further
development/improvement of the front end is **NOT** part of this
proposal.

For more details please check our Git repository:
[ORI](https://www.github.com/syntifi/ori)

### Ecosystem Fit

Following compliance rules and ensuring that no financial crime is
taking place is paramount to the success of any DeFi application. In
fact, governments are starting to tighten regulatory requirements for
Crypto related transactions. According to
[Reuters](https://www.reuters.com/technology/eu-tighten-rules-cryptoasset-transfers-2021-07-20/)
, “Companies that transfer BTC or other crypto-assets must collect
details of senders and recipients to help authorities crack down on
dirty money, EU policymakers proposed on Tuesday in the latest efforts
to tighten regulation of the sector. The law, which is one of the
recommendations of the inter-governmental watchdog, the Financial
Action Task Force (FATF), already applies to wire transfers.
Providing anonymous crypto-asset wallets will also be prohibited, just
as anonymous bank accounts are already banned under EU anti-money
laundering rules.”

That being said, we do believe that applications on Polkadot could use
an open source tool such as ORI to facilitate the job of their
compliance team when fulfilling regulatory requirements.

## Team :busts_in_silhouette:

### Team members

- Andre Bertolace 
- Remo Stieger
- Alexandre Carvalho

### Contact

- **Contact Name:** Andre Bertolace 
- **Contact Email:** andre@syntifi.com 
- **Website:** www.syntifi.com

### Legal Structure

- **Registered Address:** Baarerstasse 10, 6300 Zug 
- **Registered Legal Entity:** SyntiFi GmbH

### Team's experience

Andre is an entrepreneur with an engineering background who acquired
over 15+ years of experience in the financial industry in several
positions and institutions but always in a quantitative analyst,
trader or developer role. He founded a fintech start-up delivering
financial data analytics to Wealth and Asset managers.

Remo has 15+ years of financial markets experience having worked in
investment banking where he held various leading positions at global
financial institutions. Remo has previously co-founded a technology
start-up solving legal and technological challenges of inheriting
digital assets leveraging a blockchain-based ecosystem.

Alexandre is an electrical engineer with more than 15 years working in
IT. His focus has been on enterprise software development, acting as
solution architect, software engineer and developer in both private
and public sector. Alexandre works with a team of diverse specialties
building strategic systems while implementing DevOps practices and
infrastructure. As a self-learner, he is always experimenting with new
and emerging tech.

### Team Code Repos

- https://github.com/syntifi
- https://github.com/syntifi/ori
- https://github.com/syntif/casper-sdk
- https://github.com/syntif/near-java-api

Please also provide the GitHub accounts of all team members. If they
contain no activity, references to projects hosted elsewhere or live
are also fine.

- https://github.com/AB3rt0
- https://github.com/AB3rtz
- https://github.com/oak

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/andre-bertolace-87983426/
- https://www.linkedin.com/in/remostieger/ 

## Development Status :open_book:

ORI is an active/ongoing project. Please take a look at
[ORI](https://github.com/syntifi/ori) for the latest development. At
the moment, we are on the process of finalizing a front-end and a
dashboard as well as refactoring the back end code.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1.5 FTE 
- **Total Costs:**  49'500 USD

### Milestone 1 — Index the Polkadot chain 

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 20'500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **low-level/inline documentation** of the code and a basic **tutorial** that explains how a user can crawl the Polkadot Chain and populate the database for later use. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Polkadot Crawler Job | We will create an Spring batch job to crawl the Polkadot chain and populate the transaction/account tables in our indexed Database |  
| 2. | Polkadot Updater Job | We will create an Spring batch job to update the transaction/account tables in our indexed Database with the latest transactions in the Polkadot network |  

### Milestone 2 — REST API to query the Indexed chain 

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 12'500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **low-level/inline documentation** of the code and a basic **tutorial** that explains how a user can crawl the Polkadot Chain and populate the database for later use. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Data model | Block, Account and Transaction POJO models |  
| 2. | API endpoint: *account/* | GET and POST method to list accounts and create a new account |  
| 3. | API endpoint: *account/hash/{hash}* | GET and DELETE method to retrieve and remove an specific account given the hash |  
| 4. | API endpoint: *block/* | GET method to list blocks currently in the system |  
| 5. | API endpoint: *block/hash/{hash}* | GET and DELETE method to retrieve and remove an specific block given the hash |  
| 6. | API endpoint: *block/parent/{hash}* | POST method to add a new block given the parent block hash |  
| 7. | API endpoint: *transaction/* | GET method to list transactions currently in the system |  
| 8. | API endpoint: *transaction/account/{account}* | GET method to list the transactions for a given the account |  
| 9. | API endpoint: *transaction/hash/{hash}* | GET method to retrieve a transaction given the transaction hash |  
| 10. | API endpoint: *transaction/hash/{hash}* | DELETE method to remove a transaction given the hash |  
| 11. | API endpoint: *transaction/incoming/account/{account}* | GET method to list the incoming transactions to the given account |  
| 12. | API endpoint: *transaction/outgoing/account/{account}* | GET method to list the outgoing transactions from the given account |  
| 13. | API endpoint: *block/{hash}/from/{from}/to/{to}* | POST method to add a new transaction registered on the given block hash from an account to another account|  

### Milestone 3 — REST API to trace the coin 

- **Estimated duration:** 1 month
- **FTE:**  1.5
- **Costs:** 16'500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **low-level/inline documentation** of the code and a basic **tutorial** that explains how a user can crawl the Polkadot Chain and populate the database for later use. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a **blog entry** highlighting the addition of another Chain to the group of chains covered by ORI. |
| 1. | API endpoint */score/{account}* | GET method to retrieve the certain AML scores (structuring over time, unusual outgoing volume, unusual behavior score and flow through score) for a given account |  
| 2. | API endpoint */trace/back/{account}* | GET method to trace back the origin of the coin given a date/time and an account |  
| 3. | API endpoint */trace/forward/{account}* | GET method to trace forward the destination of the coin given a date/time and an account |  


## Future Plans

- Short-term: add the major chains and tokens to ORI (BTC, ETH, ...)
- Mid-term: run the platform as a service for DeFi apps that need
  compliance tools

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

