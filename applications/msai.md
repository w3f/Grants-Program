# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** MarvSai File Chain
- **Team Name:** Marvsai Team
- **Payment Address:** 0x8f1013fa606c6fcbcd3eff057e5b320b0c5f72e2
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1, 2 or 3

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview
A blockchain that integrated the principle of DID as well as IPFS and were the currency of the validators is the amount of patient records they have.
NFT based data exchange infrastructure for data ownership and medical data submission for use in research.
We anticipate participation incentivization via built in token and use of 
Data Extraction engine built as part of our PhD.

### Overview

Please provide the following:

- Medical Stats and AI- users scan documents and submit with dr records via an app that will be developed on marvsai.com
- Create a blockchain interoperability layer for health data that is siloed worlwide
- A heath focused blockchain can be a parachain of polkadot
- An indication of why your team is interested in creating this project.
Limitations reached in  Dr Ali Marvasti's research with medical data showed how needed such a technology is and how totally unusable the current solutions like MedicalChain and Binance Chain medical are.
 In addition we had Rahim Lalani health project through which we have 50 thousand patient records now recorded on traditional database with permissions to put the data securely on blockchain.
 

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
a
- Data models / API specifications of the core functionality
Submit response of data file 
Storage of NFT
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP we have built backend services using Google GCP and need to now integrate with the polkadot chain
What we will provide :
App connecting to the polkadot chain with storage on the blochchain of hash and encryption keys to medical data.
Ultlimately when the correct modules are written we intend to store the entire medical data on a sidechain. 
- What we will not provide
  - Data extraction will be a separate project that we may or may not deliver with this
  
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious
  Data storage will be a difficult task and we may need to use commercial solution like AWS cloudstorage or other technologies 
  which are commercial and thus expensive requiring further funding

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

  The project is a real useful application of web3 technologies which we intend to build on polkadot if we receive funding
The project is intending to design and develop a parachain so that we do not have to rely on private chains or limited blockchains catering just for the healthcare environment.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

  Health patients who travel in multiple jurisdictions (e.g. Ukranians who arrive in UK have no medical history and it is difficult to carry and validate scans from different countries)
Target audience is any healthcare data silo and any health patients who can contribute their data and earn ERC20 like tokens on this chain.
- What need(s) does your project meet?
Specialising public blockchain for exchange of health data and creation of the backbone fabric of a federated healthcare system.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
Not that we know of
  No project has been able to create a public health blockchain as it is either too slow or for data privacy
  Medicalchain
  BNB Chain.

## Team :

### Team members

- Dr Salman Alim Marvasti --  Experienced Finance and Blockchain Senior Developer currently at Blockchain.com
- Dr Ali Marvasti -- Consultant Neurologist - NHS , Cambridge University
- Dr Atefeh Alihossieni - Internal Medicine Specialist - Medical App Design Ban Clinic
- Dr Luke Riley - Blockchian post doc and Innovation labs head at Quant Network
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
If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/thenineteen/Semiology-Visualisation-Tool
- https://github.com/SalmanMarvasti/ResearchCode
- https://github.com/SalmanMarvasti/CryptonCapital

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


## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.
For each of these milestone except work on the backend will nneed to be done for Andriod, IOS and Web for complete coverage of our user demographics.
- development of backend

- Milestone one basic home development with login and backend connection (10000 USD per platform)
- Development of capture screen ( needs to be optimised for vairious cameras and ai preprocessing for sending clean image to backend propriatory data extraction engine) (30000 USD)
- Development of calendar timeline screen
- development of backend mock based on substrate and Poladot or other blockchain tech
- Connection of app direclty to node infrastructor provider to provide non-custodial functionality
- Development of custodial functionality for added value (storage / security of private keys to be done by a custodial backend service)
- Development of data marketplace backend -- smart contract or custodial depending on substrate functionality

- make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
- include the amount of funding requested _per milestone_.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 1 year
- **Full-Time Equivalent (FTE):** 3 
- **Total Costs:** 500 000 of which sum will be covered by founders Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Implement Substrate Modules

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 8,000 USD
* Andriod app integrate with  PolkaJs
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 4,000 USD

| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone) |  
| 2. | Substrate module: Y | We will create a Substrate module that will... |  
| 3. | Substrate module: Z | We will create a Substrate module that will... |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  



## Future Plans

Excention module to connect to NHS app and other health systems around the work.
Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

This is an ambitious project but with your help we will be able to deliver the frontend and make the changes needed to the backend to support these medical usage of web3