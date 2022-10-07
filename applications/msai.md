# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Medical Data Para Chain
- **Team Name:** Marvsai Team
- **Payment Address:** 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview
### Overview
Many patients use multiple clinics worldwide, but they face difficulty moving patient records, thus they have to take redundant duplicate tests. It is inconvenient and impractical to carry data folders over particularly between countries.  
To solve this problem we gathered a team of doctors and Eegineers and designed an application. Our project was evaluating data storage on blockchain such that we can establish trust with multiple medical centers.
We could not find any easy way to integrate our application, see references in the end of this document.

We want an easy-to-use infrastructure for healthcare applications by customiinge a blockchain Pallet to be able to store information from applications like Epic Systems Mychart. The data should be distributable accessible and auditable.
Essentially we would like to implement something similar to w3c Solid pod but integrated with a blockchain node Substrate node that can be used by all healthcare applications.
Integrating application specific security and storage for every program is a major pain point which is not addressed by blockchains.
A combination of a Substrate blockchain, because of its modularity and Solid pod like api [5] would provide the security, decentralisation and immutable record keeping that is needed to make healthcare interoperable.
To make this feasible it needs to be split into stages initially using a smart contract developed in Ink! - WebAssembly which records ownership and access [1] to a data pod with a similar API to Solid PODs [4].

ID verification and data enhancement could be integrated through a Sidecar and or Pallet approach allowing other app developers within the ecosystem to reuse the chain without needing their own backend. 
For a simpler initial design we would enhance the off chain worker storage api[6]. Distributed data could be verified as authentic by having a secure hash stored on the chain [4].
With trust being established by the blockchain layer, any blockchain node that provides faulty data as verified through smart contract hashes will be kicked out and forfiet their staking in the parachains native token.
We also propose specific data format for anonymous tags such that no user identified private data would be exposed
during the whole process. 
The initial user of this parachain would be our own EMR application where users store any medical documents with automated information extraction, along with authenticated GPDR opt out.
Sample screen of users view of how the data will be presented in our implementation can be seen[here](https://docs.google.com/presentation/d/e/2PACX-1vR5uQkX9I_UdCQwDQpNUkyaIQKtYWfY0_ZhDLQHSxdeybF8QqbaYKNQ6j0obcg5BRhEjSmgI3NkhnhP/pub?start=false&loop=false&delayms=3000&slide=id.p1). 

Such a platform would allow game theory incentives and smart contract based marketplaces for data trading to encourage adoption of the reference application. 

Our team has years of research and development on medical data along with senior blockchain developers working with IT capable PhD accredited medical doctor(s). Data collection extraction and real time scaling is also part of Dr S Marvasti's and Dr Mahdi Ghandi's resume .
Furthermore, Dr Marvasti has multiple years experience working with blockchain technologies including ZKP both for cross border fintech and for data analysis through AWS Neptune and AWS Aurora API based databases.
This is a phased plan with part of the design to be implemented in this first phase, with each phase being usable.
in summary benefits of blockchain for this data includes
* Decentralised: Data ownership is not lost to any central authority and access is controlled through secure  NFT like smart contract
* Incentive to participate: various mechanisms  could be developed as smart tokens or native token of the parachain linked to DOT.
* Users:  publishers of health can receive some amount of token as rewards from any sponsor on the platform. 
* Public: The api and parachain would be public so that any other apps such that deal with medical data can use this parachain. 
* The detailed API and openAPI specifications for GRPC and or REST will be documented as part of this proposal.
### Project Details

Data models

We propose to store data encrypted at client side using the Pod api implemented as a simple database on top of the off chain worker local storage. The data would be anonymous at the storage layer and
encrypted with access to ID available only to owner(s) of the NFT controlled via a smart contract. 
This is made possible by our extension to the Off chain worker storage API such that each node that stores data checks if request is coming with a valid signature proving ownership of an account that has the NFT created by the account holder. The distributed smart contract will keep a record of data hashes and account owners as per the reference publication in Nature.
Later we could add functionality to decrypt data at the smart contract level once access to an HSM or secure key storage becomes native to the chain.  
Thus, in this first phase the data may be encrypted outside the blockchain through the Sidecar container service which we will specify and provide a reference implementation.
- The data 
  - Medical ID - consisting of HASH And JSON details which are encrypted and optional; only the secure hash of an ID reference is required. The decryption will be handled by dedicated service which will be open sources to run alongside the Substrate node. 
  - ID are verified by special validation addresses (See diagram) linked to special trusted organization addresses on the parachain
  - ID verification is for users of data to require which authorities they accept. Initially it will be us or other organization we work with like the NHS in the UK.

| HashID | Health system id | DOB (o) | Sex | blood type(o) |
|--------|------------------|---------|-----|---------------|
|        |                  |         |     |               |

| HashID Public Address                      | SignedVerifier          |
|--------------------------------------------|-------------------------|
| 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | MSAI_LTD_HASH_SIGNATURE |
|                                            |                         |
|                                            |                         |

  - Medical documents consisting of ID HASH and encrypted JSON of the following details: 

| Hash (Account)(s)                          | Type       | Detail           | Date    | Place   | Result    | Link to BLOB                                   | SH1 data integrity hash |
|--------------------------------------------|------------|------------------|---------|---------|-----------|:-----------------------------------------------|-------------------------|
| 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | Ultrasound | liver sonography | 1-1-20  | Ukraine | normal    | native::xjslfdjl                               | 12jlklxlx               |
| 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | Xray       | Chest            | 1-30-20 | London  | pneumonia | external:https://wwww.marvsai.com/xkjdslkdjslk | 49jhdfjoeolfn           |

- Medical Appointment 

| Hash (Account)(s)                          | Appointment Type  | Detail       | Date    | Clinic       | Notes     | Link to BLOB                                   | SH1 data integrity hash |
|--------------------------------------------|-------------------|--------------|---------|--------------|-----------|:-----------------------------------------------|-------------------------|
| 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | Specialist Doctor | Hematologist | 1-1-20  | CLIN_THR_XXA | normal    | native::xjslfdjl                               | 12jlklxlx               |
| 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | Fertility Clinic  | IVF          | 1-30-20 | CLIN_LON_BBA | pneumonia | external:https://wwww.marvsai.com/xkjdslkdjslk | 49jhdfjoeolfn           |

- Hash Based Routing Clinic Codes

| Signer Account                             | Clinic Code  | Kademlia Routing Hash |
|--------------------------------------------|--------------|-----------------------|
| 0x9f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | CLIN_THR_XXA | Nodesis_1_10_11       |
| 0x9f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | CLIN_LON_BBA | Nodeids_10_11_12      |
|                                            | CLIN_LON_BBA |                       |
|                                            | CLIN_LON_BBA |                       |


- Medical Lab Document: Lab documents from date format US

| Hash (Account)                             | Type           | Detail      | Date    | Result   | Link to BLOB     |
|--------------------------------------------|----------------|-------------|---------|----------|------------------|
| 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | Blood          | creatinine  | 1-1-20  | 1/2 mm/l | native::xjslfdjl |
| 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | Urine          | bacteria    | 9-30-20 | Negative | native::xjslfdjl |
| 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | Histopathology | Skin Legion | 4-30-20 | Melanoma | native::xjslfdjl |
 
- Permission Table : to access Binary data (BLOB internal or external) can only be written to by Authorized Addresses (Verifier address) enforced through smart contract

| AccountHash                                | Accounts Allowed Read Permission | Data link to Binary (encrypted) Image data     |
|--------------------------------------------|----------------------------------|------------------------------------------------|
| 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | [HASHID1, HASHID2]               | Pod::xjslfdjl                                  |
| 0x9e1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | [HASHID3, HASHID4]               | external:https://wwww.marvsai.com/xkjdslkdjslk |

These two types of data storage access will differ in the that access permission to external storage (pod) account will need to be provided by a dedicated bridging service which internally runs a HSM or Hardware Secure Module.

Addition of MSAI parachain webassembly smart contract for efficient encryption and decryption if necessary 
Storage of NFT
Effecient storage of above tables as JSON


### An overview of the technology stack to be used
- Parachain Scaling:  ![component](https://marvsai.com/img/component.png)
- Each parachain node will be an IPFS like Solid Pod by extending the Off chain Worker local storage API
- Nft representing medical data and access/ownership:  ![component](https://marvsai.com/img/nft_Deploy.png) 
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP we have built backend services using Google GCP and need to now integrate with the Polkadot chain
What we will provide :
App connecting to the Polkadot chain with storage on the blochchain of hash and encryption keys to medical data.
Ultimately when the correct modules are written we intend to store the entire medical data on a sidechain. 
- What we will not provide
  - Data extraction will be a separate project that we may or may not deliver with this
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious
  Data storage for images on chain will be a difficult and may be placed securely on IPFS. The API will be public but our UI and APP will not be.

### Ecosystem Fit

The deliverables described above can be generalized but are intended to be used by any project that would like to leverage encrypted data stored on the blockchain ( via NFT).
Off chain worker local storage provides a good start but it is incredibly difficult to integrate it into a health app and provide smart contract verified hash from authorized 'verifiers'.
So what we are proposing is Polkadot to fund an example application with the necessary extensions and wasm smart contracts that can then be used by any health application.
Integrating this layer of storage with NFT smart contracts makes storage more accessible for developers within the Substrate ecosystem. 
Our proposed system will be usable by any application or system where they deal with health data and get user opt-in thus contributing to demand for the Polkadot ecosystem.

The project is a practical application of web3 technologies which we intend to build wit Polkadot.
Additional benefits include proving Polkadot's scalability as the number of users on the parachain grows by for instance spliting records by region and having a parachain per region as illustrated in our component diagram.
Ultimately consumers will benefit especially if we can attract bigger player like MyCharts (Epic Systens) to also use the shared blockchian as a verifiable, standardized method of sharing data.
- What need(s) does your project meet?
Specialising public blockchain for storage and exchange of health data making it easy to use the off chain worker local storage with encyrption and smart contract verified data integrity via hashes as described in [1]. 
- This allows the creation of a federated healthcare system. There are many clinics with independent apps but no simple way to sharing without loosing control over the data.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
Not that we know of;
No project has been able to create a public health blockchain as it is either too slow or ineffective data privacy
e.g 
- Medicalchain - dead in the water either because they use a private unscalable chain no different to current data silos. Furthermore, there is no incentive mechanism to participate in the ecosystem.
- BNB Chain all projects 
- Binance Health -  (more commercial pump and dump than substance) using Binance smart chain that is both expensive and unscaleable being a copy of Ethereum such that NHS and other health systems could also theoretically connect. 
- Solid pods could be considered as solving a similar problem though without a public append only ledger which reduces traceability and auditability of data access.

## Team :
Marvsai team www.marvsai.com
Our App is under construction.

### Team members
Core:
- Dr Salman Marvasti --  Experienced Finance and Blockchain Senior Developer currently at Blockchain.com
- Dr Atefeh Alihossieni - Internal Medicine Specialist - Medical App Design Baan Clinic- Millway medical practice
- Rahim Lalani CEO Text services and contract app development company in Pakistan

####  Advisory:
- Dr Mehdi Ghandi - Senior FPGA AI developer
- James Isilay - Cognism AI founder and CEO
- Dr Ali Marvasti -- Consultant Neurologist  and PhD candidate - NHS , Cambridge University 
- Dr Ali Marvasti's research with medical data made evident that even if an application is developed that could scan and store all the data there is no reliable standard to store it in a decentralised manner.
    The existing projects are not beneficial for real life situation.

### Contact

- **Contact Name:**Salman Marvasti
- **Contact Email:** marvasti@marvsai.com
- **Website:** marvsai.com

### Legal Structure

- **Registered Address:** Marvsai Ltd Flat 903, 262 Poplar High Street E14 OBN 
- **Registered Legal Entity:** MarvsAI LTD Registered in England and Wales

### Team's experience
- Dr Salman Marvasti is a senior software developer with blockhchain since 2015
- Dr Atefeh Alihosieni is a medical physician with extensive experience with Patient systems at Baan Clinic and Millway Medical Practice London
- Dr Mehdi Ghandi is an AI production expert at Microsoft who is advising us on scaling our solutions
- Rahim Lalani runs and manages an App and Development outsourcing team in East Asia.
- Dr Ali Marvasti is an AI specialist PhD candidate at UCL and a practicing neurologist with Python coding skills . He is author of open source tools for seminology https://github.com/thenineteen/Semiology-Visualisation-Tool
- Dr Yasmin Nouri - ex World Bank director blockchain emerging tech
### Team Code Repos

- https://github.com/thenineteen/Semiology-Visualisation-Tool
- https://github.com/SalmanMarvasti/ResearchCode
- https://github.com/SalmanMarvasti/CryptonCapital
- https://github.com/Luker501/SmartContractInteractions

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/SalmanMarvasti/
- https://github.com/thenineteen/

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/marvastisalman/
- https://www.linkedin.com/in/atefeh-alihoseini-a3850a202/
- https://www.linkedin.com/in/mahdi-ghandi-3410114/
- https://www.linkedin.com/in/rahim-lalani-9823691/

## Development Status :open_book:

### in this proposal
- Preliminary study of Substrate features completed
- NFT based contract developed for Solidity but tobe rewritten in Rust/INK
- Api for blockchain to be developed based on Solid
- A standard blockchain layer/ data storage layer and smart contract
### outside this proposal
- App UI design and development has been started

## Development Roadmap :nut_and_bolt:
### Preface
- Development of backend
Summary 
- 1- Basic Blockchain parachain build using current available Pallets
  -  API design specifications (OpenAPI) combined with Substrate features based on Solid Pod encryption api Linked with smart contract facility
  - Integration of Identity validation mechanism : Use pallet-identity or other method of assigning identity signers that provide added value to NFT generated from users health data (As fake data has no value)
  2- Configuration of Subtrate Off chain worker storage with the extra features needed for secure healthcare
  - Documented encryption API
  - Consensus based on hash of local storage to dedicated storage nodes (similar to SOlid Pod)
  - NFT smart contract default template-- Template contract that will be deployed by default and interfaced with the Off chain worker
  3- Testing on Kusama 
  - Development of example scripts for interaction with new parachain based on docker files 

### Overview

- **Total Estimated Duration:** 0.5 years for MVP parachain
- **Full-Time Equivalent (FTE):** 2 
- **Total Costs:** 30 000 for these two initial stages 

### Milestone 1— New parachain with Substrate Off chain worker storage API configured with the features described above
- 
- **Estimated duration:** 3 months
- **FTE:**  2
- **Costs:** 25,000 USD
#### Part A
| Number | Deliverable                            | Specification                                                                                                                                                                                                                                                                                                                            |
|-------:|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                                | Apache 2.0                                                                                                                                                                                                                                                                                                                               |
|    0b. | Documentation                          | The extended API will be documented                                                                                                                                                                                                                                                                                                      |
|    0c. | Testing Guide                          | Each epic describes testing opportunities.  [ 1. Create a health blockchain](https://trello.com/c/LZ3c4K3T/3-create-basic-parachain-with-useful-api) 2. Create openapi specifcations for reading and writing data to and from the NFT smart contract (Depends on blockchain nft tech used) .                                             |
|    0d. | Docker                                 | A dockerized setup of the parachain will be provided after several iterations when we have a working secure application against a customised subtrate blockchain with extended off chain worker local storage                                                                                                                            |
|    0e. | Article                                | Press release will be prepared a few weeks before the official rollout of the network. The link to the article will be sent when ready                                                                                                                                                                                                   | 
|    1a. | Node Repo                              | Complete the deployment of the basic public chain with example  storage of a native DB format through the off chain worker local storage API.                                                                                                                                                                                            |
|    2a. | Create New Substrate Pallet            | [ 1. Create demo application](https://trello.com/c/LZ3c4K3T/3-create-basic-parachain-with-useful-api) New parachain with smart contract facility through creation of a dedicated Pallet                                                                                                                                                  |                                                                                                                                                        |
|    3a. | Extend with Storage Pod API            | Basic data storage API (with OpenAPI specifications) built on top of OFW adding some of the functionality of Solid pods                                                                                                                                                                                                                  |
|    4a. | Built in health tailored WASM contract | NFT smart contract default template-- Built in smart contract on the subtrate chain - written in Ink! or other webassembly language that supports NFTs and ERC721 level in addition to ownership authentication:                                                                                                                         |
|    4b. | Add ID Validation to Pallet            | Integration of Identity validation mechanism :Built in method of assigning identity signers based on the described schema. THe schema is stored in a ink smart contract native to the Health substrate parachain. This built in smart contracts provides added value to NFT generated from users health data (As fake data has no value) |
|    5a. | Extend Off chain worker Data Pallet    | Implementation Off chain worker encryption and decryption module that can authorize decryption when verified by a smart contract                                                                                                                                                                                                         |
|    5b. | Data Validation on store               | Validation check every data stored on node against a hash must have a corresonding entry in template smart contract. In this first instance data storage will be assumed to be trusted as long as parachain node operator is trusted and hashes match the blockchain smart contract                                                      |
|    6a. | Example with new api                   | Document Off chain encryption decryption API and create                                                                                                                                                                                                                                                                                  |
- **Estimated duration:** 1 months
- **FTE:**  1
- **Costs:** 5,000 USD
### Milestone 2 - More complete example application
| Number | Deliverable                      | Specification                                                                                                                                                                                                                                                                                |
|-------:|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                          | Apache 2.0                                                                                                                                                                                                                                                                                   |
|    0b. | Documentation                    | [Link to why healthcare decentralised](https://www.notion.so/Why-we-need-a-blockchain-for-health-data-1080c5b727964721822650972c28cab2)                                                                                                                                                      |
|    0c. | Testing Guide                    | Each epic describes testing opportunities.  [ 1. Create a health blockchain](https://trello.com/c/LZ3c4K3T/3-create-basic-parachain-with-useful-api) 2. Create openapi specifcations for reading and writing data to and from the NFT smart contract (Depends on blockchain nft tech used) . |
|    0d. | Docker                           | A dockerized setup of the application will be provided after several iterations. That is  when we have a working application against a customised subtrate blockchain with extended off chain worker local storage                                                                           |
|    6b. | Local Cluster Deployment         | Deploy full demo application on the test Subtrate chain setup on our network that reads and writes encrypted medical data into the preformated data structure documented above.                                                                                                              |
|    7a. | Example application with new api | Example command line application that uses the off chain worker extensions developed as part of mileston one showing control of data and reliability under three scenario - node failure, node recovery and encryption.                                                                      |


## Future Plans
- Full implementation of w3 solid pos API
- Adding Homomorphic Encryption (HE) is an emerging technique that allows data
to be processed in encrypted form Extension module to connect to NHS app and other health systems around the work.
- Offchain bridger for faster processing in case of trusted thirdparties
- Promotion through partnerships with private and public clinics 
- Fully distribute storage of the off chain worker

## Additional Information :heavy_plus_sign:
## References:
[1] https://www.nature.com/articles/s41746-019-0211-0.pdf
[2] C. Gentry, “Fully homomorphic encryption using ideal lattices,” in Proceedings of the
41st annual ACM symposium on Theory of Computing (STOC), pp. 169–178, 2009
[3] https://medium.com/@hashedhealth/on-building-better-healthcare-ecosystems-bd009d5b1190
[4] https://molid.readthedocs.io/en/latest/programmatic-start.html#construct-an-absolute-uri
[5] https://solidproject.org/
[6] https://docs.substrate.io/reference/how-to-guides/offchain-workers/offchain-local-storage/
**How did you hear about the Grants Program?** Web3 Foundation Website 

This is an ambitious project but with your help we will be able to make the changes needed to the backend to support these medical usage of web3
