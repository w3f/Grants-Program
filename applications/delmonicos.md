# Delmonicos

> This document is referenced in the terms and conditions and therefore needs to contain all the required
> information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open
> Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a
> proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Team Name:** Lumena
* **Payment Address:** DAI(ERC20) 0x8cbc9b6191c1bba1652d51ae73f7c15f485a1c72.
* **Payment address for Milestone 3:** DAI(ERC20) 0x8c810c87124c836802412dbbc42c5d6a8027dffc

*The above combination of your GitHub account submitting the application and payment address will be your unique
identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

#### A blockchain based EV charging platform initiated by [Lumena](https://www.lumena.tech) ####

*This application is not in response to an RFP.*

> Why Delmonicos ?
> Delmonico's is a **chain** of restaurants in U.S. where the notables liked to go, among them Nikola Tesla. Tesla
> worked every day from 9:00 a.m. until 6:00 p.m. or later, with dinner at exactly 8:10 p.m., at Delmonico's
> restaurant. So Delmonico's is a **chain** with Tesla going in it. An ideal codename for such a project. :blush:

### Overview

The goals of the project is to develop and deploy an infrastructure dedicated to the supervision of charging station,
strongly coupled with a micro-payment infrastructure. The technical requirements of the solution are the following :

* It must be very **secure**. Especially, only allowed people and computers should be able to interact with charging
  stations. Payments must fulfill latests security constraints especially regarding DSP2.
* It must be as **cheap** as possible to operate. The challenge is to meet the security requirements without having
  additonal costs or having to rely on external third-party.
* It must be **easy to deploy**.
* It must be **easily scalable**. Other parties should be able to join the networks without compromising the security
  of the infrastructure.

Taking into account the above-mentioned constraints, we have chosen to base our solution on blockchain technology, for
the following reasons :

* It is secure by design and **quasi impossible to hack** if carefully used and implemented.
* It allows **strong authentication** through the use of wallets
* It allows **secured delivery versus payment**. Each payment can be related to a dedicated delivery of service and the
  proofs of the delivery can be stored in case of dispute.
* The **trustless** nature of the technology allows adding new network participants without compromising the security of
  other participants.
* The deployment can be easy and secured if **each charging station is also a network node**.

The reasons why we chose Substrate/Polkadot are :

* By having nodes with a dedicated purpose, we will be able to optimise the footprint of the node in order to deploy it
  to charging stations, that have limited available resources
* We can choose the most suitable consensus mechanism and especially combine POA on the parachain with PoS on the relay
  chain.
* We have the flexibility to chose between multiple target topologies. E.g. one parachain for all energy providers on
  the platform, or one parachain by energy provider.
* The composability of the FRAME architecture allows us to reuse existing pallets (e.g. identity, membership, contracts,
  ...) while being able to add our own specific pallets.
* Since we have connections to multiple interfaces (payments, charging power, mobile apps) the offchain features of
  Substrate will alllow us to handle the connection with external sources in both directions in a secure manner.

Lumena is creating this project because it is a startup studio focused on innovative technologies and especially
blockchain. Our goal is to create new generation of services in collaboration with industry partners. We have a well
structured process in order to decide if we create a company or not. The following schema details this process :

![Lumena Process Description](https://github.com/lumena-tech/delmonicos/blob/main/w3f-grant-submission/lumena_process.png?raw=true)

For Delmonicos, we are currently in phase two where we have to develop a POC of the platform, in order to address risks
and to show the feasibility of the project. If we can fund this phase and if the results are positive, we'll create a
company dedicated to develop and sell the platform. We are applying for the 30k$ Open Grant Program from w3f that will
definitely allow us to do these two phases.

### Project Details

The following schema describes the overall architecture of the project.
![Delmonicos architecture](https://github.com/lumena-tech/delmonicos/raw/main/w3f-grant-submission/delmonicos.jpg)

* Mockups/designs of any UI components : We have not yet realized mockups nor UI design. We will connect existing
  supervision platform to a back-end API. We will also have a mobile app with an embedded wallet to validate charging
  sessions.
* API's specifications of the core functionality : not yet defined.
* An overview of the technology stack to be used. Rust for the blockchain development with substrate and very probably
  Ink! to be able to easily inject new rules. React on the front-end. Mobile app will be developed natively, starting
  with ios. The non blockchain back-end will be developed in Rust with actix-web for the http API. We will start by
  developing a blockchain front-end similar to substrate-node-ui-template.
* Documentation of core components, protocols, architecture etc. to be deployed
* PoC/MVP or other relevant prior work or research on the topic. Current work is located
  at <https://github.com/lumena-tech/delmonicos>
  
#### Data Management

We don't plan to store private data on-chain. Only figures regarding the Kwh consumed for charging sessions and
corresponding price. Otherwise, proofs will be stored on-chain (e.g. proof of consent of starting a charging session,
proof of consent of bank account debit, ...). Proofs will mainly consist in hash of structured data signed by
external actors.

We will take care of being GDPR compliant. Private data will be stored of chain. The detailed design of data
management will be decided during the development of the project. We already have experience in developing GDPR
compliant blockchain based system for identity by having heavily contributed to the development of [OnchainId](https://tokeny.com/onchainid/).
[API documentation](http://docs.onchainid.com/).

### Ecosystem Fit

At that stage, we are not aware of any similar projects. The fact that charging stations themselves would be
blockchain nodes is a real innovation. We are currently talking with 2 solid players in the market around this
technology that would be a breakthrough:

* A solid French manufacturer of charging station that would be keen to propose simpler and cost effective
  micropayment solution
* A Historic car manufacturer that would be keen to facilitate access to its large network of customers (B2C and B2B)
  by providing easy and accessible payment solution to the future EV driver.

With both of them, that are demonstrating solid interest, we would be able to engage POC and even Spin off, should
we be successful in the current phase.

## Team :busts_in_silhouette:

### Team members

* Fabrice CROISEAUX
* Michel ONFRAY
* Antoine DETANTE
* Franck LEGARDEUR

### Contact

* **Contact Name:** Fabrice CROISEAUX
* **Contact Email:** fabrice.croiseaux@lumena.tech
* Website: <https://www.lumena.tech>

### Legal Structure

* **Registered Address:** 2 rue Maurice Barrès, 57000 METZ FR
* **Registered Legal Entity:** Lumena

### Team's experience

* Fabrice CROISEAUX is CEO of InTech, a company dedicated to software development, and a subsidiary of POST
  Luxembourg. Fabrice is chairman of [Infrachain](https://infrachain.com/) and is involved into multiple projects
  based on blockchain. Among them : <https://tokeny.com/>, <https://ibisa.network/>, <https://www.fundsdlt.net/>, or
  <https://en.mysardines.com/>. He acts as a technology and/or strategy advisor, but also as architect or developer.
  Here is a small personal project he has recently developed in Rust : <https://github.com/fcroiseaux/icsmerge>.
  More information on this page : <https://fabrice.io>
* Michel ONFRAY is Managing Director of is own business: "La Compagnie du Diamantaire", he advises high-potential
  technology
  company project leaders on the road to success. He also assists Grand Nancy Innovation in structuring its
  incubation offer and team training. Michel is also Managing Director of Lumena. He will help in building the
  company that will be created following these developments, especially on the fund raising side.
* Antoine DETANTE is a former employee of InTech and has started his own business as a freelance Software Architect and
  Developer. He is an experienced Blockchain architect, mainly on Ethereum, but he as also already "played" with
  Substrate. He is the lead architect and developer of the above mentioned project Ibisa and My Sardine. Here are
  some sample public repos : <https://github.com/adetante/deconz-sp>, <https://github.com/adetante/explorer-besu-plugin>,
  <https://github.com/intech-id/collexi-rollup>.
* Franck LEGARDEUR is the founder and president of ZEENCO (Zero Emission ENergy COmpany), and has a solid experience
  in the EV infrastructure. He was the Managing Director of France & South of Europe of [EVBox](https://evbox.com/fr-fr/)
  before becoming Managing Director of [ZeBorne](https://zeborne.com/fr-fr/accueil). He is now deploying solution
  for B2B and B2C customers all over France. He will act as the product owner on this project.

### Team Code Repos

* <https://github.com/Delmonicos/charger-node>

### Team LinkedIn Profiles

* <https://www.linkedin.com/in/fcroiseaux/>
* <https://www.linkedin.com/in/michel-onfray-464918b7/>
* <https://www.linkedin.com/in/adetante/>
* <https://www.linkedin.com/in/franck-legardeur-a05577/>

## Development Roadmap :nut_and_bolt:

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in
the grant contract, it helps to describe the functionality we should expect, plus how we can check that such
functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that
everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate
and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their
roadmap as 1 month = 1 milestone.

For each milestone:

* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be
  enough to later verify that the software meets the specification. To assist you in defining it, we created a document
  with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each
  milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project.
* Please indicate the milestone duration, as well as number of Full-Time Employees working on each milestone, and
  include the number of days along with their cost per day.
* Deliverables 0a-0d are mandatory and should not be removed, unless you explicitly specify a reason within the
  PR's `Additional Notes` section (e.g. Milestone X is research oriented and as such there is no code to test)

### Overview

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  1 FTE
* **Total Costs:** 29.400 USD

### Milestone 1 Implement charger module (pallet)

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 9.800 USD (28 men/days x 350 $/men/day)

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Substrate module: Identity | Choose an existing [Identity](https://github.com/paritytech/substrate/tree/master/frame/identity) module to start from, integrate it with the project |  
| 2. | Substrate module: Membership | Integrate existing [Membership](https://github.com/paritytech/substrate/tree/master/frame/membership) module to start from, integrate it with the project |  
| 3. | Substrate module: Contracts | Integrate [Contracts](https://github.com/paritytech/substrate/tree/master/frame/contracts) module in order to support Ink! smart contracts. Smart Contracts will be used to implement flexible and scalable tariff schemes. |
| 4. | Substrate module: Charger | We will create a Substrate module (pallet) that will be connected to the charger interface and will collect charging sessions information. At this stage, the module will only listen to events coming from the charger and collect data coming from the charger. The Off-Chain worker architecture will be used to interact with the charger hardware. We will simulate the hardware at this stage. |  
| 5. | Substrate chain | Modules Identity and Charger of our custom chain will interact so that the information of who has accepted and completed a charging session will be store on the blockchain, signed by the charging station and by the user. |  
| 6. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 2 Implement user connection and implement payment module

* **Estimated Duration:** 1 month
* **FTE:**  1,5
* **Costs:** 14.700 USD (42 men/days x 350 $/men/day)

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Substrate module: Identity | Adapt [Identity](https://github.com/paritytech/substrate/tree/master/frame/identity) module with the required information that are needed for charging purpose |  
| 2. | Substrate module: Membership | Implement [Membership](https://github.com/paritytech/substrate/tree/master/frame/membership) module check if the connected user has subscribed to the service or is allowed to initiate one time payment by his bank, using SEPA Instant payment or SEPA Mandate. |  
| 3. | Substrate Tariff Smart Contract | Develop a first simple tariff smart contract with a fixed price by KWh.  |
| 4. | Substrate module: Payment | We will create a Substrate module (pallet) that will initiate payment to the bank when the charging session is finished and the total price is known. The Off-Chain worker architecture will be used to interact with the charger hardware. We will simulate the hardware at this stage. |  
| 5. | Substrate module: Charger | The Charger Module will evolve in order to be able to initiate command on the charging station (starting a session or stopping a session). |
| 6. | Substrate chain | All Modules will interact to handle a first simple use case where an authorized user is detected, initiate and complete a charging session. Payment is initiated by the charging station to the bank. |  
| 7. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 3 Integration of a node inside a real hardware and finalise the Proof of Concept

* **Estimated Duration:** 1 month
* **FTE:**  0,5
* **Costs:** 4.900 USD (14 men/days x 350 $/men/day)

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Substrate chain | The node will be compiled to be executable inside the charging station. |  
| 2. | Admin Front-End | Implement a basic admin front end that allows the configuration of a charging station, and the deployment of a Tariff scheme as a smart contract  |  
| 3. | User Front-End | Implement a first simple -Front-End connected to a wallet (mobile or not) in order to authenticate the user and validate the acceptance of the charging session. |
| 4. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain with a charging station simulator. |
| 5. | Demo | We will provide a video demonstrating a demo of the working solution. |

## Future Plans

If this phase is successful, we will create a company dedicated to the development, marketing and selling of the
solution. First step will be to find investors (coming from industry or VCs). Future developments will include :

* The ability to automatically detect who is trying to charge his EV, based on the location of the station and on
  the location of users, choosing the closest user.
* A fully working production ready mobile app with an embedded wallet to identify and authenticate users, being
  compliant with RDPG and ideally EIDAS for signature. Being EIDAS compliant will probably not be possible at short
  term because the current regulation doesn't take into account blockchain specificities. We will nevertheless
  integrate concepts described in the following document : [SSI eIDAS Legal Report. How eIDAS can legally support digital identity and trustworthy DLT-based transactions in the Digital Single Market](https://joinup.ec.europa.eu/sites/default/files/document/2020-04/SSI_eIDAS_legal_report_final_0.pdf)
* A payment module that will be compliant with DSP2. Our goal is to develop a reusable module that interact with
  banks to prove that the acount owner has given his consent to initiate payment from his account. Here we can
  leverage the security of the blockchain to comply with PISP constraints. Opportunities are well described [here](https://worldline.com/en/home/knowledgehub/blog/2018/january/PSD2-and-instant-payment-what-are-the-opportunities-for-e-merchants.html).
* Capability to add innovative possibilities via Ink! Smart Contracts. e.g. variable pricing depending on the load
  of the energy network, pricing could be determined by consensus, charging session reservations, etc...

## Additional Information :heavy_plus_sign:

We are convinced that this project has a huge potential to solve the majority of problems or paint points that EV
users are facing regarding charging their vehicule. This is typically a domain where blockchain technology is the ideal
technology by allowing the secure digitalisation of assets (charging power, money and identity) and the secure
conversion of value between these assets. Our potential partnerships with actors mentioned above will give us direct
access to the market.
