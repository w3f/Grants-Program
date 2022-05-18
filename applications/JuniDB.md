* **Project Name:** JuniDB
* **Team Name:** Uddug
* **Payment Address:** 0xc45eAd98E95D1962133d9c15847e2EA4E16dfD0b

## Project Overview :page_facing_up:

### Overview

It's a very highload action to store large amounts of data on-chain. The most-common and useful solution for decentralised apps is to use IPFS as a data storage and store on-chain only hashes. Our team inspired by the OrbitDB will focus on the scalability, decentralised, easy-learning solution for substrat developers that want to manipulate big amounts of data easily.
#### Key advantages

* **Usability** - just integrate and code
* **Security** - built-in encryption
* **Scaling** - ready for changes and big data

#### Available  storage data types

* **Key-value** - simple key-value storage
* **Hash** - hash storage like Redis hash

#### Motivation

Working a lot with blockchain technologies, our team found that it’s data-driven, and thus there are rapidly growing interests in integrating them for more secure and efficient data storage and sharing.We are convinced that blockchain technologies change the world, and have been working hard to create more transparent solutions. We designed and built core infrastructure for decentralised projects.

We have been observing and learning Substrate technologies and find Polkadot as the best ecosystem for us to join depending on technology and strong market position. We believe that our protocol will be useful for other projects in the Polkadot ecosystem. 

### Project Details
Substrate pallet provides a configurable database module allows to store and  manipulate a big amount of data. Pallet works as an offchain worker and connect data between blockchain and ipfs via offchain::worker.

#### Encryption module
Built-in encryption module allows to create a secure database and encrypt all data before its uploading to the database with user account keys. With enabled encryption only account users have access to the database. Data could be decrypted via Web-application after receiving. Module is based on asymmetrical cryptography and uses an account public key to encrypt data on the blockchain side and a private key to decrypt data on the client side.

We plan to make it based on ed25519 crypto scheme and use [ecies-ed2551](https://github.com/phayes/ecies-ed25519) crate to implement encryptions on backend side. 

![scheme A](https://i.postimg.cc/gJds3kj9/encryption.png)

- receive data by RPC request
- Encrypt data by account public key
- Insert encrypted data into ipfs via offfchain::ipfs
- Insert received ipfs hash into storage

![scheme B](https://i.postimg.cc/Y9h66G7s/decryption.png)

- catch request to get data by RPC request
- get ipfs hash from storage
- fetch encrypted data from ipfs via offchain::ipfs
- receive encrypted data in RPC response 
- decrypt data using user account private key via app ddecryption module

#### Technical stack

* **Rust** - main language

* **Substrate** - blockchain framework

* **Substrate-front-end-template** - web-app template

* **Offchain::ipfs** - substrate-ipfs bridge

* **IPFS** - data storage

* **ecies-ed25519** - encryption crate

#### Public Methods
* **KeyValueInit(name)** - initialise new keyValue database
* **KeyValueSet(key, value)** - set given value in keyValue database
* **KeyValueGet(key)** - get value for given key
* **KeyValueDel(key)** - delete value from keyValue database
* **KeyValueAll()** - fetch all values from keyValue database

* **HashInint(name)** -  initialise Hash database
* **HashCreate(hashName)** - create new empty cash
* **HashSetField(hash, field, value)** - set hash field with given value
* **HashGetField(hash, field)** - get hash field
* **HashDelFied(hash, field)** - delete field from hash
* **HashAll(hash)** - get all hash fields

#### Storage
* **Data Map** - mapping ipfs hashes and data keys
* **Key-value** - database meta info

#### Scheme 1. Palett structure
![scheme C](https://i.postimg.cc/Hn1nkxGD/pallet.png)

##### Data uploading

- Rpc/wss request to pallet to insert data
- Validating data based on database schema
- Formatting data
- Encrypted (if needed)
- Store to ipfs via offchain::ipfs
- Retrieving ipfs hash with data
- Store ipfs hash into pallet storage

##### Data retrieving
- RPC/wsss request to pallet to fetch get data
- Validating data query
- Get ipfs hash from storage
- Fetch data from ipfs via offchain::ipfs
- Return data object in response

#### Scheme 2. Interaction with Substrate
![scheme D](https://i.postimg.cc/1zzJvmjQ/scheme.png)

#### Infrastructure
Testing substrate nodes with offchain::orbitDB pallet orchestrated by kubernetes cluster deployed on GCP.
#### Ci/Cd
Ci/Cs organized by github actions
#### Frontend
Simple SPA web application powered by react and polkadot.js. Using for testing purposes.

### Ecosystem Fit 

Pallet is suitable for substrate developers and strives to become a complex solution for data storage and manipulation.

We expect that the project will be useful for the Web3 community.


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

Team range of experience begins from developing small scaled websites up to complex blockchain architectures. Our projects are diverse, but all of them share the need to have a software solution for humans.


### Team Code Repos

http://github.com/andskur/

http://github.com/uddugteam/

### Commits 
https://github.com/uddugteam/thc-node/commits/master

### Related domain 
https://thc.uddug.com/

## Development Status :open_book:

We have already developed the pre-alfa pallet for **Trusted Health Council** [(https://github.com/uddugteam/thc-node)](https://github.com/uddugteam/thc-node). 

Link to initial pull request (https://github.com/uddugteam/General-Grants-Program/blob/master/grants/speculative/trusted_health_consul.md).

Link to 2nd pull request
(https://github.com/uddugteam/Open-Grants-Program/blob/master/applications/ML-as-a-service.md).


## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 4 months
* **Full-Time Equivalent (FTE):**  2.5 FTE
* **Total Costs:** 28 000 USD

### Milestone 1 

* **Estimated Duration:** 1 month
* **FTE:**  2.5
* **Costs:** 7 000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | License: GNU GPL v3 |
| 0b. | Documentation | Documentation of the code and a basic tutorial describing how the software can be used and tested. |
| 0c. | Testing Guide | Complex quality assurance for all platform features. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that explains the functionality of the proposed pallet in this milestone. |
| 1. | Substrate ML pallet | Basic database layout implementation with key-value data storage |  
| 2. | Web application | Interacting with blockchain + form with fields to manipulate with data. Based on the substrate-front-end-template |  
| 3. | Docker image| We will provide a dockerfile to demonstrate the full functionality of testing Substrate chain with integrated Database pallet. |


### Milestone 2  

* **Estimated Duration:** 1 month
* **FTE:**  2.5 
* **Costs:** 7 000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | License: GNU GPL v3 |
| 0b. | Documentation | Documentation of the code and a basic tutorial describing how the software can be used and tested. |
| 0c. | Testing Guide | Complex quality assurance for all platform features. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that explains the functionality of the proposed pallet in this milestone. |
| 1. | Update [offchain::ipfs](https://github.com/rs-ipfs/substrate) | We will coordinate with equilibrium.co to update offchain::ipfs to the latest Substrate version via PR to the existing repository |
| 2. | Docker image| We will provide a dockerfile to demonstrate the full functionality of testing Substrate chain with integrated Database pallet. |

### Milestone 3  

* **Estimated Duration:** 1 month
* **FTE:**  2.5 
* **Costs:** 7 000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | License: GNU GPL v3 |
| 0b. | Documentation | Documentation of the code and a basic tutorial describing how the software can be used and tested. |
| 0c. | Testing Guide | Complex quality assurance for all platform features. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that explains the functionality of the proposed pallet in this milestone. |
| 1. | Substrate pallet | Implement an encryption module to allow encrypt and decrypt needed data out of the box. |  
| 2. | Web application | Update web application to interact with the encryption system. |  
| 3. | Docker image| We will provide a dockerfile to demonstrate the full functionality of testing Substrate chain with integrated Database pallet. |

### Milestone 4

* **Estimated Duration:** 1 month
* **FTE:**  2.5 
* **Costs:** 7 000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | License: GNU GPL v3 |
| 0b. | Documentation | Documentation of the code and a basic tutorial describing how the software can be used and tested. |
| 0c. | Testing Guide | Complex quality assurance for all platform features. Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article | We will publish an article that explains the functionality of the proposed pallet in this milestone. |
| 1. | Substrate pallet | Add hash data storage to the pallet. Update rpc module to interact with new data storage. Database optimizations. |  
| 2. | Web application | Update web application with new data storage rpc. |  
| 3. | Docker image| We will provide a dockerfile to demonstrate the full functionality of testing Substrate chain with integrated Database pallet. |

## Future Plans

Further development (adding new data storages, indexing system, concurrency queries) 

Community engagement

Also we want to realise this idea and integrate it as the core part of our project in the healthcare sphere “Trusted Health Council”.  We have reached agreements with medical institutes in the field of further development of the project concept such as belgium "University of Antwerp" and russian "Pirogov Medical University" on the further development of the project, in particular, providing access to their databases, as well as the creation of specialized departments on the basis of institutes for the innovative development of universities, promotion, participation in healthcare exhibitions and advisors.

## Additional Information :heavy_plus_sign:

The development of the prototype and initial research have been started with the personal funds. We have tried for a General Grant first, and decided to start with an Open grant Program relying on recommendation. Also we have applied for the Substrate Builders Programm and  have proceeded with a general interview to iterate around steps going forward. We have also opened a dialogue with Blockchers & IPFS.
