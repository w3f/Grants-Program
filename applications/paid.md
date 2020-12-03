# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** PAID Smart Agreements / DID Method based in the Standard W3C DID CORE, for Decentralized Identifiers (DIDs) / named proposal **DID:PAID**
* **Proposer:** [PAID Network](https://github.com/PAIDNetwork)
* **Payment Address:** BTC payment address. We don't accept payments for the program in other currencies at this stage. 

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
This Decentralized identifier is a development of its own for the PAID Network, to handle a standard Decentralized Identifier DID Method, for self-sovereign digital identity, verifiable credential and Proof of Citizenship for users of PAID Smart Agreements Protocol.

### Overview

This Decentralized identifier is a development of its own for the PAID Network, to handle a standard Decentralized Identifier DID Method, for self-sovereign digital identity, verifiable credential and Proof of Citizenship how two-step verification, within the W3C standard for Decentralized Identifiers, allowing to create a decentralized identifier, transparent and secure method of attestation of user data within a `chain of trust` scheme.

#### Technologies
* OpenLaw
* MDV
* XDV
* JSON SCHEMA
* JEXL
* ICAO TRIP

#### Integration with Substrate.io / PolkaDOT / Plasm Network

Our development channel consists of developing a runtime module, which allows the development of a private layer in the top of the transaction in the Substrate.io/PolkaDOT blockchain, which together with smart contracts specifically developed for managing the execution of the Specific Smart Agreements based on the Templates deployed in the Runtime Modules, and to be able to deploy a complete and flexible solution of Smart Agreements, supported in the case of Smart Contracts on the Plasm Network platform that allows the deployment of Smart Contracts in multiple EVM based in Solidity as in WebAssemble / Rust, facilitating future full migration to Substrate.io/PolkaDOT.


### Project Details 

![DID:PAID Identifier](./paid_protocol.png)

This image explains the process of build/register and verify **DID:PAID** Identifier, since of PAID Smart Agreements Protocol.

A DID Method / **DID:PAID** workflow looks like:

* User registers in PAID Network, creating his Wallet in Dapp, PAID-Wallet.

* User creates an template agreement or selected a pre existing template.
 
* If it is the first time that the user creates a Smart Agreements, a process of verification of credentials and Proof of Citizenship begins, Through the creation of a decentralized identifier **DID:PAID**,  for the attestation of the user's data and their legal residence.

* PAID Smart Agreements, takes the user's data and builds a JSON SCHEMA based on the VC MODEL standard of the W3C DID.

* Then the DID Resolver of the **DID:PAID**, based on the W3C DID Standard, validates through the MRTD standard (ICAO TRIP), the user's credentials loaded in the JSON Schema, which gives attestation of the user's data and generates a verifiable decentralized identity of the user.

* User adjusts the parameters and conditions of the selected template agreements, and creates an instance of the Smart Agreements appropriate to your particular requirement.

* Alice sends signed agreement used your **DID:PAID**, to Bob, which then executes the agreement request party signatures.

* Attestation and Verifiable credentials through the **DID:PAID** digital signatures of the parties, with the DID Resolver, based on the W3C DID Standard.

* Signed agreement based in ed25519 (native in PolkaDOT) is stored on chain and off chain and PAID Smart Agreements Protocol workflow is created, compiled and registered.

* On Contract execution, workflow is executed by a follow-up runtime module develop in Substrate.io, which whitelist allowed users.  

* Contracts calls that are integrated with oracles are called and allows, since runtime module:
    * Applies agreement terms (terms must be classify to numeric, similar to ML Classification).
    * Verify agreement terms subjects (Only supports token price subject in first release).


### Previous Work

- **XDV Technology**: Contains components to create digital signatures for documents using HD Wallet technology and integrates with Swarm (ethereum) and compatible with hardware modules that support PKCS#11 and PKCS#12. Links: https://app.xdv.digital/about/#/ (Spanish), https://app.xdv.digital/
- **MDV**: A Solidity state  machine and workflow engine, using optimized code with RLP encoding. Links: https://gist.github.com/molekilla/b85f1c9de63be3afacbfeca703bb3fe4 (Spanish)


### Ecosystem Fit 

Our project is different in that our team has had more than a year of experience with making wallets for blockchain dapps and then half a year with deep experience in DID, Swarm, IPFS and document signing, and libp2p form messaging, which are the bulk of tech experience as defined in OpenLaw. But our protocol takes it a bit further and uses oracles and Machine Learning to make it more automated and allows for hybrid scenarios, where a ML business logic can rank or tag a dispute and then it can be further review by an incentivized human arbitrator, allowing for consensus of a dispute, our protocol excels not only in the dispute/arbitrage, but also at transcribing using RLP instead of a Markup Language based ion JEXL.

Further along, by adding the latest in identity technology, with a standard of W3C DID METHOD develop for us (**DID:PAID**) allows us to delegate authority to smart contracts using the DID decentralized identity of the individual or smart contract.

Additionally, in the second stage it will allow identity verification through a Certification Authority such as Let's Encrypt, allowing to be part of a `chain of trust`, where each hardware and software component is verifiable through a private key and an X.509 certificate. Ensuring that the protocol can be an integral part of any verifiable end-to-end communication scheme or like is known `chain of trust`.

We believe that this project, although it is developed in two environments that allows a smooth migration of the same, in addition to taking advantage from day zero of the benefits of both platforms, where a runtime module was developed, for the handling of signatures, digital certificates based on ed25519 and the EVM384 in development on the Substrate.io platform, for the management of authentication based on the Zero Knowledge algorithm, which are currently not available on Ethereum, but on substrate.io, without losing the maturity already reached by solidity for the execution of contracts based on the templates that will be managed from the Smart Agreements Layer, on Substrate.io. In addition to in the future integrate services such as Oracles, and management of financial incentives within the DeFi Ecosystem.

## Team :busts_in_silhouette:

### Team members
* Rogelio Morrel
* Bradley Suira
* Alfredo Lopez
* Patricia Carrillo

### Team Website	
* [PAID Network](https://paidnetwork.com/)

### Legal Structure 
Please provide the name and registered address of the legal entity executing the project.

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

### Team Code Repos
* https://github.com/decent-bet/solido
* https://github.com/decent-bet/vuex-solido
* https://github.com/decent-bet/solido-repl
* https://github.com/decent-bet/solido-web-console
* https://github.com/decent-bet/solido-provider-web3
* https://github.com/decent-bet/solido-provider-thorify
* https://github.com/decent-bet/solido-provider-connex
* https://github.com/decent-bet/solido-cli
* https://github.com/decent-bet/solido-block-date-converter
* https://github.com/xdvplatform/odenplan-wallet
* https://github.com/xdvplatform/xdvplatform-wallet

### Team LinkedIn Profiles
* https://www.linkedin.com/in/rogelio-morrell-575aa51/
* https://www.linkedin.com/in/bradleysuira/
* https://www.linkedin.com/in/alfredolopez80/

## Development Roadmap :nut_and_bolt: 

PAID Network, foresees the development of the PAID Smart Agreements Protocol in three clearly defined stages

* **Milestone 1:** Development of a smart agreement template generator, which will be a Substrate.io runtime module, which allows the deployment of instances of that predesigned template with the specific data of the parties involved in the smart agreements. Additionally, a runtime module to execute actions in that Smart Agreement Template, based on the conditions defined by the parties signing the Smart Agreement, supplemented with Smart Contracts based in Solidity/Solang. Along with the Decentralized Identification System (DID based on the W3C standard) with a Credential Verification, based on the DID-CORE / VC-MODEL, called **DID: PAID**, and a two-step authentication option based in MTRD / ICAO TRIP, all this verifiable through a Certification Authority that generates a PKCS # 12 Certificate, the "chain of trust" for the Smart Agreement certification. All this based on Substrate.io or external modules and / or oracles that allow to increase the precision of the attestations of the data of the users.


### Overview
* **Total Estimated Duration:** 3 month
* **Full-time equivalent (FTE):**  Workload of an employed person ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
* **Total Costs:** 25K
* **BTC Address:** 3QcdnKnCAGnHRJJPQuBMmvQmJZY6GoT78C

### Milestone 1 Example — Implement Plasm Modules 
* **Estimated Duration:** 3 month
* **FTE:**  1
* **Costs:** 1.3 BTC

| Number |   Deliverable   | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicensed |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate Runtime Module and Plasm VM's. It will be possible to send and call test transactions and meta transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have proper unit-test coverage of 95% to ensure functionality and robustness. In the guide we will describe how to run these tests, And after this a Bounty policy for error detection. | 
| 1. | Substrate module: Builder Template and Instance of Smart Agreements | We will create a runtime module in substrate.io / PolkaDOT that will allow the creation of predesignated templates with the conditions (clauses) and events most common to the type of contract to which the template will be oriented, additionally, an instance of this template will be handled allowing its subsequent execution and follow-up of events in a way decentralized.  |  
| 2. | Substrate module (Privacy Layer): Builder Digital Signature in `Chain of Trust` | We will create a runtime module in substrate.io that will allow the verification by a Certification Authority of the digital signature based in standard PKCS 12 to be used by Smart Agreements users, allowing PAID Smart Agreements within a `Chain of Trust` scheme, where the entire system, both hardware and software is insured and verified. Which will integrate in the future Zero Knowledge verification schemes.|  
| 3. | External Module of Substrate | External support modules for the verification of credentials, proof of citizenship and utilities and services associated with the attestation of credentials in to **DID:PAID** Method. |
| 4. | Docker | We will provide a dockerfile to demonstrate the full functionality of our Protocol |


## Future Plans
Integrate **DID:PAID** method in the entire PAID Smart Agreement Protocol workflow, in PAID Network Services. And it includes the options for handling data verification by a Certification Authority (CA) like Let's Encrypt, for the **DID:PAID** decentralized identifier, allowing to generate a PKCS#12 Certificate and guarantee that the PAID Smart Agreements can be implemented within a `chain of trust` scheme. Additionally, the PAID Smart Agreements Protocol will integrate zero-knowledge verification schemes in the future.