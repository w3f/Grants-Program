# DAOsign

- **Team Name:** DAOsign 
- **Payment Address:** 13s3c37rwrZfa8WQcZPdqE1zi1hGAguf2TWfWMr8f5aLBrg
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:


### Overview

DAOsign is a decentralized platform for agreements and policies with publicly verifiable and authorized cryptographic proofs and Governance Automation, designed for DAOs. 
Traditional methods of signing agreements, such as paper-based systems or legacy e-signatures, are prone to fraud and lack transparency, and offer no solution for verification of the signer's identity or signer’s authority to execute the agreement. Instead these systems rely on costly legal proceedings for enforce agreements. 

DAOsign provides publicly verifiable cryptographic proofs; secure, transparent and automated processing of complex Agreements and Policies. 

Furthermore, DAOsign provides robust Governance and Policy Builder platform to provide governance, workflow automation and controls for organization policies and procedures.
### Project Details
A project goal is to store Agreements Proofs on Polkadot chain using Ink! smart contracts. 


Deliveries include DAOsign platform with an ability to:
- create agreements including generating using ChatGPT
- add and remove signers and observers of different levels of anonymity
- allow signing the documents with further storing of signature proofs on Astar testnet blockchain.


**Core DAOsign components:**

<img width="902" alt="Screenshot 2023-05-27 at 16 51 43" src="https://github.com/Burmenska/Grants-Program/assets/3983591/e6e3e78d-edf4-4d50-a298-e01210d75963">


**Technical design:**

Proofs are implemented in the EIP-712 standard and adjusted to ink! ecosystem. Proofs digned using user’s EVM private key. 
We are supporting this standard in Ink! smart contract to be able to verify the signature in ink! smart contract. 
Also, we are implementing an adjusted EIP-2771 standard to allow Agreement Signers gas-free delegation to publish proof on-chain.
EIP-712 standard will be used for proofs, adaptation means that user data is converted to a binary bit; we use its hash (serialization vs deserialization)
And EIP-2771 standard - to securely send the proof and receive it.
So that EVM standards will be adapted to ink! ecosystem requirements. 
Example (interfaces) of the smart contracts can be found here https://github.com/DAOsign/daosign-smart-contracts  (Solidity version).


Detailed storyboard can be found here: https://consideritdone.storiesonboard.com/m/PUCLDvQC4kKwoRJ8kbm3MA .

Architectural diagram:

<img width="805" alt="Screenshot 2023-05-28 at 23 30 53" src="https://github.com/Burmenska/Grants-Program/assets/3983591/54c8708d-e180-46f3-9a78-b7121de133d3">

### Ecosystem Fit

DAOsign fit the Governance category and since, Polkadot and Kusama are designed to be community-driven networks that allow for decentralized governance. DAOsign can fit into this ecosystem by providing a platform for DAOs to manage their decision-making processes in a decentralized manner.
Our target audience is not only DAOs, but also all the companies, who have a need to deal with the agreement/policies management including the use case for managing Grants, that was presented to you during our introdution call.
Competitors analysis can be found here: https://docsend.com/view/sbexkxn5su3ahdg8 . Particularly in Substrate / Polkadot / Kusama ecosystems we are not aware about any tools, that provide exactly the same functionality. 


## Team :busts_in_silhouette:

### Team members

- Team Leader, Founder: Eugene Fine https://github.com/ConsiderItDone,
- Solution Architect: Ramil Amerzyanov https://github.com/ramilexe
- Blockchain / Tech lead: Misha Kushka https://github.com/kushkamisha
- Director of Buisiness development and Partnerships: Oleksandra Burmenska https://github.com/burmenska



### Contact

- **Contact Name:** Eugene Fine
- **Contact Email:** eugene@daosign.org
- **Website:** daosign.org

### Legal Structure

- **Registered Address:** ILLINOIS LIMITED LIABILITY CORPORATION, US
- **Registered Legal Entity:** DAOSIGN, LLC

### Team's experience
**Eugene Fine:** CEO, Founder
Background: 
Over 20 years of building, scaling, and managing technology organizations. Past experience:
- CTO for https://www.explorersurgical.com 
- tech leadership contribution to https://bird.coach
- tech advisor and facilitator for polywrap.io
to name a few.
Also, Eugene is a founder at consideritdone.tech and daosign.org

**Ramil Amerzyanov:** Solution Architect, CTO
Background: 
12+ years in building complex enterprize solutions (all SDLC aspects), including 7+ years in Blockchain industry.
Past projects include:
- contribution to Ethereum  standards development
- tech leadership for https://docsend.com/view/fjrvjtyzgm7wgrkj projects

**Oleksandra Burmenska:** Director of Business Development and Partnerships
Background:
Engineering, MBA, and Psychology diplomas. Over a decade of experience in IT: development and managerial positions, last five years focused on the Blockchain industry. 
Experience with enterprises and startup companies, scaling teams, and building blockchain products.
Previous blockchain projects include:
- successfully managed ICOs during 2017-2019 (example: Õpet – Medium ) 
- contribution to Polywrap, NEAR, Axelar, GnosisSafe, Avalanche ecosystems
- contribution to nodle.com ecosystem: managing the block explorer development (before it moved to Subscan), leading the Landslide - Avalanche subnet development,etc. 

**Misha Kushka**: Tech Lead and Blockchain Developer
Background: 6+ years of professional experience as a developer, 4+ years of professional experience in the Blockchain field, 4+ years experience as a lead

### Team Code Repos

- https://github.com/ConsiderItDone
- https://github.com/DAOsign

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- [Eugene Fine](https://github.com/ConsiderItDone)
- [Ramil Amerzyanov](https://github.com/ramilexe)
- [Oleksandra Burmenska](https://github.com/Burmenska)
- [Misha Kushka](https://github.com/kushkamisha)

### Team LinkedIn Profiles (if available)

- [Eugene Fine](https://www.linkedin.com/in/eugenefine/)
- [Ramil Amerzyanov](https://www.linkedin.com/in/ramil-amerzyanov/)
- [Oleksandra Burmenska](https://www.linkedin.com/in/oleksandra-burmenska/)
- [Misha Kushka](https://www.linkedin.com/in/mkushka/) 


## Development Status :open_book:

We are currently working on a tech demo (kind of a pre-beta version) and non-blockchain version of DAOsign is available here: https://testnet.daosign.org

## Development Roadmap :nut_and_bolt:

## Overview

* **Total Estimated Duration:** 2 months
* **Full-Time Equivalent (FTE):** 2 FTE
* **Total Costs:** 48,100 USD

### Milestone 1 - Smart Contract Development

* **Estimated Duration:** 6 weeks
* **FTE:**  2
* **Costs:** 40,300 USD


| Number | Deliverable               | Specification                                                                                                                                                                                                                                                             |
|-------:|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                   | Apache 2.0                                                                                                                                                                                                                                                                |
|    0b. | Documentation             | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use DAOsign Smart Contract developed in ink! for proof verification.                                                                                              |
|    0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                           |
|    0d. | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                             |
|    0e. | Article                   | We will publish an **article** that explains what was done as part of the grant. And we will publish a series of articles that explains how DAOsign works from a high-level perspective. The content of the articles will be consistent with the functions at this stage. |
|     1. | Smart Contracts           | DAOsign Smart Contract repo that includes following components: Agreement Contract, EIP712/EIP2771 standard implementation on Ink!. These smart contracts can be deployed to any substrate chain with contracts-pallet.                                                   |                                                                                                                                                                                                                                           |
|     2. | Gas Relayer               | Off-chain component for transaction relaying                                                                                                                                                                                                                              |


### Milestone 2 - DAOsign Application integration

* **Estimated Duration:** 2 weeks
* **FTE:**  2
* **Costs:** 7,800 USD


| Number | Deliverable                     | Specification                                                                                           |
|-------:|---------------------------------|---------------------------------------------------------------------------------------------------------|
|    0a. | License                         | Apache 2.0                                                                                              |
|    0b. | Documentation                   | We will provide both inline documentation of the code and a basic tutorial that explains how a user can |
|    0c. | Testing Guide                   | Core functions will be fully covered by unit tests to ensure functionality and robustness.              |
|     1. | DAOsign Ink! JS SDK             | We will publish a npm/yarn package with the logic how to interact with Smart Contract from JS           |
|     2. | DAOsign Application Integration | Integrate DAOsign application using SDK                                                                 |



## Future Plans

After the `ink!` version of the DAOsign protocol stack is fully tested, we would like to implement a `pallet` version for Polkadot ecosystems. Anyone who is integrating it can communicate with other ecosystems conveniently.

Add support for multi-chain proof verification using [XCM](https://wiki.polkadot.network/docs/learn-xcm) and [IBC](https://ibcprotocol.org/) protocols. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

By recommendation of Richard Casey from Parity.
