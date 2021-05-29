* **Project Name:** ML-as-a-service
* **Team Name:** Uddug
* **Payment Address:** 0xc45eAd98E95D1962133d9c15847e2EA4E16dfD0b

## Project Overview :page_facing_up:
### Overview
Blockchain and machine learning perfectly compliment each other and very much are the two pillars on which the future innovations are to be built. Blockchain developers and ML experts are continuously working to collaborate these futuristic technologies together. 

This project will design and implement a substrate pallet to obtain the strength of Machine Learning algorithms suitable for all substrate-base blockchains. 

Pallet will enable developers to enforce  offchain and onchain calculations:

1. Offchain workers useful for implementing a separate ML service and for offchain work with data and predictions (or other results).

2. Onchain workers [are] useful to provide full blockchain powered service whеre is data or any data pointers (ipfs hashes, etc.) become available only in blockchain. Onchain variation is too resource-intensive but useful for small chains and for testing proposals of POC projects.

#### Motivation
Working a lot with blockchain technologies, our team found that both technologies are data-driven, and thus there are rapidly growing interests in integrating them for more secure and efficient data sharing and analysis. We are convinced that blockchain technologies change the world, and have been working hard to create more transparent solutions. We have been observing and learning Substrate technologies and find Polkadot as the best ecosystem for us to join depending on technology and strong market position. We believe that our protocol will be useful for other companies in the Polkadot ecosystem. 

### Project Details
Substrate pallet provides a configurable machine learning module with allowance to make both on-chain and off-chain predictions based on machine learning algorithms. Module will be closely integrated with OrbitDb where dataset stored securely in IPFS given to users control over access to their predicted results and provided data.

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

### On chain worker

![scheme B](https://i.ibb.co/3rCw09r/scheme-1.png) 

1. Send Tx with new data for ML results (predictions)
- Tx validation
2. Waiting Tx confirmations
3. On chain Data handling
- Store data into onchain map storage
- Process ML algorithm with given user data and trained data model
4. Fire event with results for ML algorithms
5. Re-train model with new data

### Off chain worker

![scheme A](https://i.ibb.co/7JjL1f5/scheme-2.png) 

1. Send Tx with new data for ML results (predictions)
- Tx validation
2. Waiting Tx confirmations
3. Store user data
- Send data to offchain worker
- Store data into IPFS
- Store ipfs data hash into onchain storage map
4. Get ML results
- Fetch trained data model from ipfs via offchain worker
- Get ml results based on given data and trained data model
- Re-train and sage model into ipfs via offchain worker

### Ecosystem Fit 

Pallet suitable for substrate developers who need the power of a communal neural network for more secure and efficient data sharing and analysis.

Artificial Intelligence solutions will soon run on top of blockchains, increasing machine learning capability and even creating new financial products. Blockchain-AI convergence is inevitable because both deal with data and value. Blockchain enables secure storage and sharing of data or anything of value. AI can analyze and generate insights from data to generate value.

We make point to that project shall greatly expand the Polkadot community through attracting not only privacy-seeker individuals but also business partners such as research institutes, hospitals, etc.

## Team :busts_in_silhouette:

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

We have already developed the pre-alfa pallet for **Trusted Health Counsil** [(https://github.com/uddugteam/thc-node)](https://github.com/uddugteam/thc-node). There are we use Random Forest algorithms which allows to do classification and regression to test predicting diabetes or cancer.

Link to initial pull request (https://github.com/uddugteam/General-Grants-Program/blob/master/grants/speculative/trusted_health_consul.md).


## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  3 FTE
* **Total Costs:** 28 000 USD

### Milestone 1 — Proof of concept

* **Estimated Duration:** 1.5 months
* **FTE:**  3
* **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | License: GNU GPL v3 |
| 0b. | Documentation | Documentation of the code and a basic tutorial describing how the software can be used and tested. |
| 0c. | Testing Guide | Complex quality assurance for all platform features. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that explains the functionality of the proposed pallet in this milestone. |
| 1. | Substrate ML pallet | Generate predictions based on Random Forest algorithm, all the data stores on chain |  
| 2. | Web application | Interacting with blockchain + form with fields to upload user data into Ml pallet + handle event with prediction |  
| 3. | Docker image| We will provide a dockerfile to demonstrate the full functionality of testing Substrate chain with integrated ML pallet. |

### Milestone 2 Example — Production ready

* **Estimated Duration:** 1.5 month
* **FTE:**  3
* **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | License: GNU GPL v3 |
| 0b. | Documentation | Documentation of the code and a basic tutorial describing how the software can be used and tested. |
| 0c. | Testing Guide | Complex quality assurance for all platform features. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that explains the functionality of the proposed pallet in this milestone. |
| 1. | Substrate ML pallet | Implement all ML algorithms from smartcore lib + Integrate OrbitDb and add allowance to store data in IPFS + Data encryption module + Manage access to users predictions results and provided data |  
| 2. | Web application | Functionality to select current ML algorithm+ Flag to encrypt user data + Access to IPFS data by hash |  
| 3. | Docker image| We will provide a dockerfile to demonstrate the full functionality of testing Substrate chain with integrated ML pallet. |

## Future Plans

Implementing of validation module.
Also we want to realise this idea and integrate it as the core part of our project in healthcare sphere.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation.

We have reached agreements with medical institutes in the field of further development of the project concept such as belgium "University of Antwerp" and russian "Pirogov Medical University" on the further development of the project, in particular, providing access to their databases, as well as the creation of specialized departments on the basis of institutes for the innovative development of universities, promotion, participation in healthcare exhibitions and advisors.

### Other foundation
The development of the prototype and initial research have been started with the personal funds.
We have tried for General Grant first, and decided to start with Open one reliying on recommendation. Also we have applied for the Substrate Builders Programm and  have proceeded with general interview to iterate around steps going forward. We have also opened a dialogue with Blockchers & IPFS.
