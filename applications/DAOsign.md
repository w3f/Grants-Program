# DAOsign


> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** DAOsign 
- **Payment Address:** 13s3c37rwrZfa8WQcZPdqE1zi1hGAguf2TWfWMr8f5aLBrg
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:


### Overview

DAOsign is a decentralized platform for agreements and policies with publicly verifiable and authorized cryptographic proofs and Governance Automation, designed for DAOs. 
Traditional methods of signing agreements, such as paper-based systems or legacy e-signatures, are prone to fraud and lack transparency, and offer no solution for verification of the signer's identity or signer’s authority to execute the agreement. Instead these systems rely on costly legal proceedings for enforce agreements. 

DAOsign provides publicly verifiable cryptographic proofs; secure, transparent and automated processing of complex Agreements and Policies. 

Furthermore, DAOsign provides robust Governance and Policy Builder platform to provide governance, workflow automation and controls for organization policies and procedures.
### Project Details
A project goal is to store Agreements Proofs on Polkadot chain using Ink! smart contracts. 
Proofs are implemented in EIP-712 standard and signed using user’s EVM private key. We are supporting this standard in Ink! smart contract to be able to verify signature.
Also, we are implementing EIP-2771 standard to allow Agreement Signers gas-free delegation to publish proof on-chain.

Deliveries include DAOsign platform with an ability to:
- create, edit and generate agreements/policies using ChatGPT 3.5
- add and remove signers/observers of different levels of anonymity
- allow signing the documents with further storing of signature proofs on Polkadot blockchain.
Core DAOsign components: 
<img width="902" alt="Screenshot 2023-05-27 at 16 51 43" src="https://github.com/Burmenska/Grants-Program/assets/3983591/e6e3e78d-edf4-4d50-a298-e01210d75963">

Technical design:

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

**Overview**

Total Estimated Duration: 2 months
Full-Time Equivalent (FTE): 4 FTE
Total Costs: 48,100 EUR

Milestone 1 - Smartcontracts
Total Costs: 40,300 EUR

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | TBD |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can upload/generate the agreement, add signers/observers and complete the signature process with storing signature proofs either in test or mainnet, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains how does DAOsign users can create agreements and store them in Polkadot test- or mainnet. It will be published in our Medium, Linkedin, Twitter and Discord channels. Apart of that, we will regularly publish grant development status on our social media. 
| 1. | Smart Contracts | Agreement Contract |
| 2. | Smart Contracts | EIP712 standard implementation on Ink! |
| 3. | Smart Contracts | EIP2771 standard implementation on Ink! |
| 4. | Smart Contracts | Delegate call using EIP2771 |



Milestone 2 - Application integration
Total Costs: 7,800 EUR

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | TBD |
| 1. | Application Integration| Application Private Key Management |
| 2. | Application Integration | DAOsign app integration |



## Future Plans

Our team plans to contribute to the Polkadot ecosystem through:

Announcing Early Adopters Program and working closely with DAOs to help them integrate DAOsign.
Enhance our tutorials and supplementary materials to better support users and developers.
Expanding DAOsign functionality according to the roadmap.

## Referral Program (optional) :moneybag: 


- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** BTC, Ethereum (USDC/DAI) or Polkadot/Kusama (USDT) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / **personal recommendation **/ etc.

By recommendation of Richard Casey from Parity.
