# W3F Open Grant Proposal

* **Project Name:** ML-as-a-service
* **Team Name:** Uddug
* **Payment Address:** 0xc45eAd98E95D1962133d9c15847e2EA4E16dfD0b

## Project Overview :page_facing_up:
### Overview
Current pallet allows the use of Machine Learning algorithms directly in substrate-based blockchains.
#### Integration
We designed the substrate pallet to obtain the strength of Machine Learning algorithms for all substrate-base blockchains.
#### Motivation
We are convinced that blockchain technologies change the world, and have been working hard to create more transparent solutions. We have been observing and learning Substrate technologies and find Polkadot as the best ecosystem for us to join depending on technology and strong market position. We believe that our protocol will be useful for other companies in the Polkadot ecosystem.
### Project Details

Substrate pallet that will provide a configurable machine learning module with allowance to make on-chain predictions based on ML algorithms. Module will be closely integrated with OrbitDb - all dataset will be stored securely in IPFS and users can control access to their predictions results and provided data.

### Technical stack

**Rust** - main language

**Substrate** - blockchain framework

**OrbitDB** - database

**IPFS** - data storage

**Smartcore** -  Rust machine learning library

### Public Methods

* **make_prediction** - generate prediction based on given data and chosen model

* **update_dataset** - update dataset with new given IPFS hash

* **update_algorithm** - update chosen ML algoritm

### Storage

* **predictions** - map, store person's id and hashes to encrypted predictions results in ipfs

* **dataset** -  hash, hash to encrypted dataset in ipfs

* **algorithm** - hash, ML algorithm for use

### Infrastructure
Testing substrate node with ml pallet orchestrated by kubernetes cluster deployed on GCP.

### Ci/Cd
Ci/Cs organized by github actions

### Frontend
Simple SPA web application powered by react and polkadot.js. Using for testing purposes.

## Team :busts_in_silhouette:

### Repository Hierarchy + Directories

### Team members

**Tech lead, backend:** Andrew Skurlatov 

https://www.linkedin.com/in/andrew-skurlatov/

**Head of product:** Mike Manko 

https://www.linkedin.com/in/mikhail-manko-97a491a2/

**Product design:** Anuar Zhumaev 

https://www.linkedin.com/in/yxorama/

**DevOps:** Ivan Podcebnev 

https://www.linkedin.com/in/naykip/

**Data Science:** Constantine Czerniak 

https://www.linkedin.com/in/%D1%81czerniak/

**Frontend:** Nikita Velko 

https://www.linkedin.com/in/nikichv/              


### Contact

**Contact Name:** Mikhail Manko

**Contact Email:** ms@uddug.com


### Legal Structure

**Registered Address:** PO301650, RUSSIA,  UL. OVRAZHNAYA, D. 35, S. TETYAKOVKA, NOVOMOSKOVSKIJ R-N, OBL. TUL'SKAYA.

**Registered Legal Entity:** PE SKURLATOV ANDREY ALEKSEEVICH

### Team's experience

Core of our team is of united, like-minded professionals with solid experience. We are constantly evolving our capabilities to help software technology companies to do more with less: develop software solutions faster and ensure high quality within time constraints, with fewer resources, and lower costs. We combine proven methodologies, business domain knowledge and technology expertise of skilled software professionals to deliver highly optimized solutions and services across a wide range of industry domains.

Team range of experience begins from developing small scaled websites up to complex blockchain architectures. Our projects are diverse, but all of them share the need to have a software solution for human.


### Team Code Repos

http://github.com/andskur/

http://github.com/uddugteam/

### Commits 
https://github.com/uddugteam/thc-node/commits/master

### Related domain 
https://thc.uddug.com/
 

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

* links to improvement proposals or [RFPs](https://github.com/w3f/General-Grants-Program/tree/master/rfp-proposal) (requests for proposal),
* academic publications relevant to the problem,
* links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
* references to conversations you might have had related to this project with anyone from the Web3 Foundation,
* previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):** 3
* **Total Costs:** $28 000
* **License:** GNU GPL v3

### Milestone 1 - Proof of concept
* **Estimated Duration:** 1.5 months
* **FTE:**  3
* **Costs:** $14 000

1. We will create a Substrate pallet that will provide a configurable machine learning module with allowance to make on-chain predictions based on Random Forest ML algorithm. All data will be stored directly on chain.
2. We will create a web application for testing with new components for interacting with the database.
3. The code will have proper unit-test coverage to ensure functionality and robustness.
4. We will provide complex quality Assurance for all platform features.
5. We will update our Docker image with a new version of testing Substrate chain, demonstrating its functionality.
6. We will provide both inline documentation of the code and a basic tutorial describing how the software can be used and tested.

### Milestone 2 - Producaiton ready
* **Estimated Duration:** 1.5 months
* **FTE:**  3
* **Costs:** $14 000

1. We will update Substrate pallet that will provide all ML algorithms from smartcore lib. Module will be closely integrated with OrbitDb - all dataset will be stored securely in IPFS and users can control access to their predictions results and provided data.
2. We will update web application for testing with new components for interacting with the database.
3. The code will have proper unit-test coverage to ensure functionality and robustness.
4. We will provide complex quality Assurance for all platform features.
5. We will update our Docker image with a new version of testing Substrate chain, demonstrating its functionality.
6. We will provide both inline documentation of the code and a basic tutorial describing how the software can be used and tested.

## Future Plans

Integration with one of our project - [Trusted Health Consul](https://docs.google.com/document/d/1BcmZDwZ0bJpfC78lgPgaQfQKRVvAZvedemAx6EeZzfs/edit?usp=sharing)

## Additional Information :heavy_plus_sign:

We have already developed the pre-alfa pallet for the project in health care production (Trusted Health Consul).

### Other foundation
We have tried for General Grant first, and decided to start with Open one after recommendation. Also we have applied for the Substrate Builders Programm and  have proceeded with general interview to iterate around steps going forward. And we are planning to start discussion with Blockchers.
