# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Private ownership public Medical Data Chain
- **Team Name:** Marvsai Team
- **Payment Address:** 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview
A blockchain API built on Substrate with a level of encryption built into smart contracts written for Ink!/ WebAssembly.
The plan is to integrate ID verification and data storage through a substrate api eliminating the need for 
integrating security and storage for every application that that wishes to use this new parachain module, providing both anonymity and data sharing capability. We want to make data a first class citizen of the Polkadot ecosystem.
Unlike centralized health platforms, we don't store patients health records on a database. Instead, it's stored on a layer of the blockchain, with anonymous tags such that no user identified private data would be exposed 
during the whole process. To encourage adoption , both users and publishers of health can receive some amount of token as rewards from any sponsor on the platform. This would be determined in subsequent phases of the project.

Initially the user would be our own health app. An NFT based data exchange infrastructure for data ownership and medical data submission. The api would be public so that any other apps such that deal with medical data can use this parachain.
 Our teams' relevance to this proposal is years of research and development on medical data and expertise of data collection extraction and analysis with domain experts.
Further Dr Salman Marvasti has mutliple years experience working with blockchain technologies both for cross border fintech as well as for data analysis through storing all the chains data in AWS Neptune and AWS Aurora API based databases.
[A general introduction to data sharing can be found in our notion blog](https://www.notion.so/Why-we-need-a-blockchain-for-health-data-1080c5b727964721822650972c28cab2).

### Overview

Please provide the following:

Project Name Medical Stats and AI or MARVSAI - we are developing an app where users store any medical documents from various clinics through scanning with camera app, using propriatory ai and automatic data extraction.
We would like to standardize storage of this data on the blockchain.
We intend to provide a reusable parachain with medical data api ready for use by anyone within the Polkadot ecosystem.
- This proposal is for creation of medical specific blockchain API to securely store the data collected by our and other apps . The api will be open and allow users to maintain ownership while remaining public.
- A heath focused blockchain through substrate we are proposing should be standardized as an API layer for substrate
- An indication of why your team is interested in creating this project.  
  Many patients use clinics worldwide, but they face difficulty or redundant duplicate tests when visiting a new clinic. It is inconvenient and many cases not practical to carry data over from clinic to clinic especially worldwide.  
  In addition one of our team was a user of a medical data as part of a GSK Welcomme trust funded PhD.  
  Dr Ali Marvasti's research with medical data made evident the need for such a project and the total uselessness of existing   
  solutions like MedicalChain and Binance Health such that NHS and other health systems could also theoretically connect.   
  Sample screen of users view of how the data will be presented in our implementation can be seen here https://docs.google.com/presentation/d/1XEQ6qtTLwkmc6JgtpytEUJqhh1behskOWh3s4uE1cXw/edit?usp=sharing
### Project Details

Data models
We propose to store encrypted natively and only allow owners of NFT to decrypt these details via the smart contract. 
However initially the binary data may be encrypted outside of the blockchain through a third party service.
As part of this proposal we intend to develop a smart contract that is deployed for each user to the chain with the users medical data.
- The data 
  - Medical ID - consisting of HASH And JSON details which are encrypted and optional only the ID reference is required. The decryption native the the parachain and requires ownership of NFT. 
  - ID are verified by special validation addresses linked to special trusted organizations  on the parachain
  - ID verification is for users of data to require which authorities they accept. Initially it will be us or other organization we work with like the NHS in the UK.
| hashID | health system id | dob (o)| sex(o) | blood type(o) |
|--------|----------------------|-----|-----|------------|
|        |                      |     |     |            |

| hashID | SignedVerifier |
|--------|----------------|
|        |                |
|        |                |
|        |                |



  - Medical documents consisting of ID HASH and encrypted JSON of the following details: 

        Type  - ultrasound - xray etc
        Detail
        Date
        Place

| Hash (Account) | Type       | Detail           | Date    | Place   | Result | Link to BLOB                                   |
|----------------|------------|------------------|---------|---------|-------|:-----------------------------------------------|
|   0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2             | Ultrasound | liver sonography | 1-1-20  | Ukraine | normal | native::xjslfdjl                               |
|   0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2             | Xray      | Chest            | 1-30-20 | London  | pneumonia | external:https://wwww.marvsai.com/xkjdslkdjslk |



- Medical Lab Document - date format US

| Hash (Account) | Type           | Detail      | Date    | Result   |    Link to BLOB    |
|----------------|----------------|-------------|---------|----------|-----|
|        0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2        | Blood          | creatinine  | 1-1-20  | 1/2 mm/l |  native::xjslfdjl      |
|        0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2        | Urine          | bacteria    | 9-30-20 | Negative |   native::xjslfdjl     |
|       0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2         | Histopathology | Skin Legion | 4-30-20 | Melanoma |  native::xjslfdjl      |
 
- Permission to access Binary data (BLOB internal or external)

| AccountHash                                | Permission to Access Binary data               |
|--------------------------------------------|------------------------------------------------|
| 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | native::xjslfdjl                               |
| 0x8e1013fa606c6fcbcd3eff057e5b320b0c5f72e2 | external:https://wwww.marvsai.com/xkjdslkdjslk |

These two types of account access will differ in the at access permission to external account will need to be provided by a dedicated bridging service which internally runs a HSM or Hardware Secure Module.

Addition of MSAI parachain webassembly smart contract for effecient encryptyion and decryption if necessary 
although in the first instance encryption maybe provided off chain through the bridge.
Storage of NFT
- An overview of the technology stack to be used
- Image: ![](img/component.png)
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP we have built backend services using Google GCP and need to now integrate with the Polkadot chain
What we will provide :
App connecting to the Polkadot chain with storage on the blochchain of hash and encryption keys to medical data.
Ultlimately when the correct modules are written we intend to store the entire medical data on a sidechain. 
- What we will not provide
  - Data extraction will be a separate project that we may or may not deliver with this
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious
  Data storage for images on chain will be a difficult and may be placed securely on IPFS. The API will be public but our UI and APP will not be.

### Ecosystem Fit

The deliverables described above are intended to be used by any substrate based project that would like to leverage encrypted data stored on the blockchain and shared via NFT
tokens. This project makes secure data storage more accessible to developers within the substrate ecosystem. 
The project is a real useful application of web3 technologies which we intend to build on Polkadot if we receive funding
The project is intending to design and develop a parachain so that we do not have to rely on private chains or limited blockchains catering just for the healthcare environment.
The project is intending to show that PolkaDot can scale by having patients in each region have their own MarvSai sidechains made possible with the pluggable nature of Polkadot.
Target audience would initially be our own app but can be any health provider. Ultimately consumers will benefit , particularly health patients who travel in multiple jurisdictions (e.g. Ukranians who arrive in UK have no medical history and it is difficult to carry and validate scans from different countries)
Target audience is any healthcare data silo and any health patients who can contribute their data and earn ERC20 like tokens on this chain.
- What need(s) does your project meet?
Specialising public blockchain for exchange of health data and creation of the backbone fabric of a federated healthcare system.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
Not that we know of
No project has been able to create a public health blockchain as it is either too slow or for data privacy
Medicalchain
BNB Chain all projects dead in the water either because they use a private unscalable chain or use public blockchains which are too expensive to use at scale.

## Team :
Marvsai team www.marvsai.com

### Team members
Core:
- Dr Salman Alim Marvasti --  Experienced Finance and Blockchain Senior Developer currently at Blockchain.com
- Dr Ali Marvasti -- Consultant Neurologist - NHS , Cambridge University
- Dr Atefeh Alihossieni - Internal Medicine Specialist - Medical App Design Baan Clinic- Millway medical practice
Advisory
- Dr Luke Riley - Blockchain post doc and Innovation labs head at Quant Network
- Rahim Lalani CEO Text services and contract app development company in Pakistan 
### Contact

- **Contact Name:**Salman Marvasti
- **Contact Email:** salman_marvasti@yahoo.co.uk
- **Website:** marvasi.com

### Legal Structure

- **Registered Address:** Ibrandnewdirect Flat 903, E14 OBN 
- **Registered Legal Entity:**Ibrannewdirect LTD

### Team's experience

Dr Ali Marvasti is an AI specialist PhD candidate at UCL and a practicing neurologist with Python coding skills
- He is author of open source tools for seminology https://github.com/thenineteen/Semiology-Visualisation-Tool
Dr Salman Marvasti is a senior IT graduate from Imperial College and 

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
- https://www.linkedin.com/in/ali-alim-marvasti-1a846855/
- https://www.linkedin.com/in/rahim-lalani-9823691/
## Development Status :open_book:
- data extraction is proprietary
- app started to be developed
- required api for blockchain developed 

## Development Roadmap :nut_and_bolt:

- Development of backend

- 1- Basic Blockchain parachain detailed design
  - Milestone one basic API layer design integration with elements of configuring Substrate for new parachain with smart contract facility and verification of structured data (10000 USD )
  - Development of reusable mechanism for storing data on chain through API service that connects to the Polkadot node (10000 USD)
  - 
  2- Configuration of subtrate based parachain with a binary data storage layer (40K USD 1 man year)
  - development of backend mock based on substrate and Polkadot or other blockchain tech
  - Connection of app directly to node infrastructure provider to provide non-custodial functionality (10000 USD)
  - Development of data access NFT smart contract -- smart contract depending on substrate functionality we incorporate based on 
  3- Ink! or other smart contract language based NFT to control encryption to and from the data storage layer
  4- testing on Kusama 
  - Development of example scripts for interaction with new parachain based on docker files (10000 USD)
  - Development of reference APP based on customisation of Alphawallet or other suitable wallet for the new Polkadot parachain 6 months (50000)

### Overview

- **Total Estimated Duration:** 1.5 years for MVP parachain
- **Full-Time Equivalent (FTE):** 3 
- **Total Costs:** 500 000 of which some will be covered by founders Requested amount in USD for the whole project min 100,000 USD till MVP stage. 

### Milestone 1 Example — Implement basic parachain Substrate Chain API

|     Number | Deliverable | Specification                                                                                                                                        |
|-----------:| ----------- |------------------------------------------------------------------------------------------------------------------------------------------------------|
|        0a. | License | Apache 2.0                                                                                                                                           |
|        0b. | Documentation | [Link to why healthcare decentralised](https://www.notion.so/Why-we-need-a-blockchain-for-health-data-1080c5b727964721822650972c28cab2)              |
|        0c. | Testing Guide | Each epic describes testing opportunities.  [ 1. Create a health blockchain](https://trello.com/c/LZ3c4K3T/3-create-basic-parachain-with-useful-api) |
|        0d. | Docker | Access will be granted after several iterations                                                                                                      |
|        0e. | Article | Press release will be prepared a few weeks before the official rollout of the network. The link to the article will be sent when ready               | 
|            |             |                                                                                                                                                      |
- 
- **Estimated duration:** 4 month
- **FTE:**  1
- **Costs:** 40,000 USD
* API design of substrate blockchain with native data structures outlined above
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |


### Milestone 2 Example — Implement blockchain linked native storage layer

- **Estimated Duration:** 3 months
- **FTE:**  1.5
- **Costs:** 50,000 USD

| 1. | Substrate module: sidecar encryption and IPFS | Create a node sidecar service that links to the substrate parachain node using the RPC api and provides NIST capable encryption and redirection |  
| 2. | Substrate module: API extection |Allow the sidecar service to extend the default Substrate api with the additional needed functionality|  
| 3. | Kusama based testing : | We will deploy the Substrate module for integration and performance testing of the parachian using Locust |  

### Milestone 3 Example — Implement sample Andriod app

- **Estimated Duration:** 3-6 months
- **FTE:**  2
- **Costs:** 10,000 USD

| 1. | App structure: X | We will create a Substrate module for NFT based storage of hash against the KV pairs defined above |  
| 2. | Connection to the substrate module: Y | We will create a Substrate module that will... |  
| 3. | Substrate module: Z | We will create a Substrate module that will... |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |



## Future Plans

Extension module to connect to NHS app and other health systems around the work.
Already negotiated with NHS Heal app team
Offchain bridger for faster processing in case of trusted thirdparties
Promotion through parternships with private and public clinics 
Promotion will be through coin giveaways on the side chain once accepted on Kusama or mainnet Polkadot or alternative chain.

## Additional Information :heavy_plus_sign:
** References: https://www.nature.com/articles/s41746-019-0211-0.pdf
**How did you hear about the Grants Program?** Web3 Foundation Website 

This is an ambitious project but with your help we will be able to deliver the frontend and make the changes needed to the backend to support these medical usage of web3
