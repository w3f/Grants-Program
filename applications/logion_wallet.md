# Open Grant Proposal

* **Project Name:** logion wallet - a wallet you can trust 

* **Team Name:** logion  

* **Payment Address:** 0x3bf8D93Bbe15c002a2c731D5139077aA1c7002Cd - logion.ETH - GoLion srl - BCE 0684.722.109 - Belgium


## Project Overview  

### Overview

The logion decentralized wallet is an integral part of logion network.

**logion network** is a public blockchain managed by legal officers that provides a decentralized and legal guarantee for all digital assets and digital transactions. 

Bringing legal protection to digital assets and digital transactions is a fundamental requirement to let non-insiders people trust the new Web3 applications and run decentralized operations with trustworthy - verified and protected - content. This could have a significant impact on mass adoption.

This legal protection is brought by the decentralization of legal officers' capabilities put at the service of the blockchain ecosystem and the digital economy. 

* Data verification and certification: Certify and check content, digital assets and data, thus authenticating and providing a guarantee, enforceable in 150+ countries.	

* Protection, confidentiality : Protect document, assets and critical data under a strict legally binding confidentiality and access rules.		

* Escrow: Offer digital assets escrow and oversee critical transactions when required by law.

* Proof: Draw up Judicial Officer's report, usable as conclusive evidence with a time stamp in case of claim, front a court of justice.

These state-appointed legal officers, clearly identified by the logion network, are generally bound by a legal regime and strict rules well known for a long time.

**logion wallet** is a decentralized wallet, highly secured by legal officers with privacy, asset protection, escrow, multi-signature and institutionalized social recovery by design.

The logion wallet provides access to legal protection for:

* Digital assets: its on-chain character offer to the digital assets it contains a direct link to the intrinsic legal protection provided by logion legal officers (LLO).

* Digital transactions: it enables user identification and access to the legal protection provided by logion legal officers on all digital transactions with referenced content on the logion network.

In practice, two wallet functionalities can be used to demonstrate the utility of a legal protection on the possession of digital assets and the execution of digital transactions: 
* Asset recovery
* Multisig


#### Asset recovery 

Holding digital assets represents huge responsibilities. 

Within the blockchain world, losing access to its wallet due to a lost private key, JSON file or recovery phrase is a common occurrence. This also happens when the wallet user is physically unable (disability or death) to provide his or her access to a relative. 
Because it is necessary to use private information or file to access blockchain-wallet, its securisation is absolutely essential to not losing access to the digital assets it manages.
 
A social recovery functionality grants the right to trusted individuals, guardians - logion legal officers in our case - chosen by the user, to restore access to his wallet. Hence, if the wallet user loses the precious access, (s)he can call upon his or her legal officers who will strictly verify conditions and after would authorize the transfer of the lost funds from the lost wallet to a new wallet. 
 
logion wallet social recovery functionality provides the user with a guarantee of permanent and legally secure access to his or her digital assets. 
 
#### Multisig 

The legal protection brought by logion legal officers can also be combined with multisignature functionality. 
 
The idea of a multisig wallet is to require the signature of several key pairs held by one or several keyholder(s) to authorize a transaction. In general, it does not require all co-signers to sign the transaction (m -of-n type); m being the number of co-signers required to sign a valid transaction and n, the total number of signatories.
 
This specific configuration prevents two issues: 
* Access to the wallet by bad actors: a single compromised access is not enough, you need several.
* Loss of access for good actors: they don't have temporary access to their wallet and they need an urgent transaction. logion could be a solution to authorize the execution of the transaction.
  
logion wallet co-signers being logion legal officers, the wallet user benefits from a legal protection on the execution of any specific transaction(s) operated from his or her wallet.
 
This legal-grade security is provided by the full on-chain traceability of the signatures of logion co-signers being legal officers. Backed by their regulated profession, any unfortunate operation is prevented by possible penal pursuits. 

### Project Details

logion decentralized wallet aims at securing any kind of token that can be exchanged using Polkadot's Cross-Chain Message Passing (XCMP). It essentially consists in a Web-based user interface connecting to logion's Substrate-based chain and a set of decentralized off-chain services (see Architecture section for a detailed description).

The access to the tokens is guaranteed, even in case of partial or complete loss of credentials, thanks to an on-chain recovery process triggered by trusted parties (the logion legal officers).
Moreover, it is possible for a beneficiary to gain access to an account in the case where the initial owner becomes unavailable (because of death or another predefined reason). The process is based on the `recovery` FRAME pallet.

In addition, it will be possible to protect tokens from unwanted transfers (e.g. in case of stolen credentials) by requiring multiple signatures (one by the owner or a beneficiary, and one or several logion legal officers).
The process will be implemented by FRAME's `multisig` pallet.

While above processes are well known and already implemented, they require off-chain logic to implement KYC processes and store confidential data that must not be published on-chain. At the same time, it is important that the off-chain logic remains as decentralized as possible.

This is the reason why the millestones have been organized in this way. First, the base of the Wallet, then all the off-chain logic which is necessary to enforce the logion process before completing with the multi-sig option.

Finally, logion aims at making them accessible to the largest public. A particular effort is therefore invested on user experience.
This is where the contribution of Logion's product/tech team lies in.

Here are a few screenshots illustrating the look and feel of the Web application:

1. The login screen:

![grant-onboarding](https://user-images.githubusercontent.com/883394/137144056-d3a07352-e6e7-4892-b92a-f9a29b6866e4.png)

2. The screen enabling the user to choose its legal officers:

![grant-protection](https://user-images.githubusercontent.com/883394/137144060-62282bcf-1b2d-4964-9da1-c7c1e2622ed1.png)

3. The legal officer's screen showing pending protection requests:

![grant-protection-management](https://user-images.githubusercontent.com/883394/137144063-2aaddab0-dc7b-4ee7-9987-d44bdeab7f49.png)

4. The screen telling the user that its account is protected (i.e. recoverable with the help of its legal officers):

![grant-protected](https://user-images.githubusercontent.com/883394/137144059-65ef0c09-cc1b-4b00-9c85-a6c45c55ad72.png)

5. The overview of a user's account balances:

![grant-transactions](https://user-images.githubusercontent.com/883394/137144067-4778f0b7-7f8a-4081-ba45-14ba73e7c71c.png)

##### Architecture

The logion network is organized as a permissioned peer-to-peer (P2P) network. Only nodes owned by logion legal officers can join. Users connect to and interact with the network using a Web application.

A node directory service enables wallet users to choose the node they want to connect to. The list of authorized nodes is managed on-chain. The directory service reads it from there and links it to additional information about the legal officer actually managing each node.

By choosing a node, a wallet user actually selects the legal officer he/she trusts. A wallet user will share confidential data only with the legal officers he/she trusts because those data will be stored in the legal officer's private database, whose content is not shared across the network.

Fault tolerance is achieved by storing encrypted backups of the private database into a private IPFS cluster.
Therefore, it is possible for a node owner to rebuild his/her node entirely just by plugging a new server
to the logion network.
The backup process consists in storing regular snapshots and very frequent deltas.
Each new stored snapshot triggers the deletion of older snapshots and deltas.

Each logion node runs

* a Substrate service,
* IPFS/IPFS cluster services,
* a private database service,
* a logion off-chain service.

Except for the Substrate node and the logion off-chain service, the other services are not accessible directly from
outside of the node. Indeed, the database and IPFS are used to store confidential data. The logion off-chain
service acts as a gateway granting access to the data stored in the database and IPFS only to authorized users through
a REST API.

Below figure illustrates the architecture of the logion network.

![Logion architecture](https://user-images.githubusercontent.com/883394/135598896-2ed3de2a-55ed-448d-b036-57193314a41d.png)

Note that there are 2 overlay networks inside of the logion network:

* the Substrate-based blockchain,
* the IPFS cluster.

Both networks are permissioned.

##### Technologies

* [Substrate](https://substrate.dev/) - [Rust](https://www.rust-lang.org/)-based modular framework for building 
  blockchains
* [Polkadot JS](https://polkadot.js.org/) - JavaScript SDK for Substrate client code and browser extension for account
  keys management
* [PostgreSQL](https://www.postgresql.org/) - relational database for implementing the private database
* [IPFS](https://ipfs.io/) - decentralized file storage for storing database backups
* [IPFS cluster](https://cluster.ipfs.io/) - automated data availability and redundancy on IPFS
* [TypeScript](https://www.typescriptlang.org/) - programming language used for logion's web application and
  off-chain service

##### Components

* **Node directory**  
  The node directory enables a user to select a logion node based on information about the legal officer
  operating it. The service reads the list of authorized nodes from the logion chain. Additional data are submitted
  by the node owners via a REST API. Submissions are authenticated by verifying that the submitter actually owns the
  authorized node.

* **logion substrate node**  
  Logion uses a regular Substrate 3.0 node with, among others, 2 FRAME pallets installed:
  [recovery](https://substrate.dev/docs/en/knowledgebase/runtime/frame#recovery) and
  [multisig](https://substrate.dev/docs/en/knowledgebase/runtime/frame#multisig).

* **logion off-chain service**  
  The logion off-chain service exposes a REST API used by the logion Web application (see below).
  The off-chain service enables the creation of protection requests by the wallet users. 
  Once the request is accepted by the legal officer, the user may enable the recovery on-chain. A protection request
  may also be a recovery request, in which case it provides the address on which a recovery process should be executed.
  When a legal officer accepts a recovery request, potentially after executing a kind of KYC, he/she also vouches
  on-chain for the recovery (see
  [documentation of recovery pallet](https://substrate.dev/rustdocs/latest/pallet_recovery/index.html)).
  Finally, the logion off-chain service maintains a cache of all movements on a user's account enabling effective 
  querying and exploration.

* **logion Web application**  
  The logion Web application is used by both wallet users and legal officers. It enables a smooth communication between
  them in order to organize an account's protection and recovery or the need of multiple signatures for the transfer of
  tokens. Account keys are managed with Polkadot JS's browser extension for increased security and interoperability.

##### Ecosystem Fit
 
To understand the contribution of logion to the DotSama ecosystem, we have to think in three steps:

1. The blockchain technology brings trust by protecting the data and transactions through hashes it stores.
2. Polkadot brings to the blockchain ecosystem the most robust platform for security, scalability, project diversification through parachains and innovation.
3. logion brings to the Polkadot blockchain ecosystem a solution to trust data and transactions referred by the hashes it stores, before it processes them.

logion brings to the blockchain cross-border & decentralized legaltech services, with a blockchain of nodes owned by legal officers.
These Judicial Officers will make their real-world competencies available for the development of the decentralized web.

**For mass adoption, legal and economic security of such new environments and regulatory requirements, it makes complete sense!**

The possible use cases are various and we are developing several ones at the moment, the first being the wallet.

Blockchain and tokens belong togheter (cryptos, NTF...). This new economy is growing with more and more encouraging signs coming from authorities, regulators.
So the challenges and the number of users increase. In all cases, security will become a major concern. Not only from an IT point of view but rather as a global goal to make users more comfortable about the daily use of their digital assets.

With its reputation, its particular features, the logion wallet could contribute to this need for security and serve:
- Corporate / Institutionnal investors
- Private investors
- Daily users
- Exchange...

Outside of DotSama, you could find similarities with Argent but in our ecosystem, there is no known equivalent.
  

## Team :busts_in_silhouette:

### Product Team members

* David Schmitz - Community Leader (Tech and Legal), Substrate Runtime Developer, Polkadot Head Ambassador, logion founder, Metaverse (NFG)

* Gérard Dethier - Distributed & critical system expert, Backend Software architect, logion co-founder  

* Benoit Devos - Mission critical projects, Frontend Software architect, Senior Software developer, logion co-founder 

* Elie Auvray - Product Officer, Open source & privacy lead, logion co-founder

 

### Contact 

* **Contact Name:** David Schmitz 

* **Contact Email:** david@logion.network 

* **Website:** https://logion.network/ 

  

### Legal Structure 

* **Registered Address:**  

B-4040 Herstal, rue d’Abhooz 31 (AP Business Center)

* **Registered Legal Entity:**  

GoLion srl - BCE 0684.722.109
  

### Product Team's experience

David Schmitz is a legal-tech profile (Law, Management, IT studies) and entrepreneur in blockchain since 2016.
He has taken part in several certification trainings in Solidity, Substrate and contributed to some projects in Waves, in DeFi on Ethereum.
This last experience has given birth to the logion network.
In addition to logion, David is very active in the development of community through Polkadot Francophonie and WalChain.

Gérard Dethier is a software architect, full stack developer and solution designer with a history of working
within complex environments and in the IT department of various sectors, such as banking, ticketing and energy supply.
He is skilled in methodologies like Domain-Driven Design (DDD), microservices, Agile and tools like Java and ReactJS.
Gérard has got a Ph.D. in distributed systems and co-authored a patent (pending) in the field of distributed ledger
technologies. He is the author of [Pousse-Café](https://www.pousse-cafe-framework.org/), a framework enabling the 
efficient and scalable implementation of complex business processes.

Benoit Devos is a freelance senior software engineer, with a long experience (20+) in various sectors like utilities, air traffic
management, telecom, where he was tasked to develop robust, maintainable, testable applications. Database, modelling,
and OO design are part of his expertise area.

Elie Auvray is a seasoned software entrepreneur (20+ years of international experience, lived in San Francisco), passionate 
about technology - blockchain since 2015 -, privacy, open source and product strategy. 
Before logion, Elie was the former co-founder and CEO of Jahia Solutions Group SA, an open-source Digital Experience Platform provider 
with a successful funding of $25M from a global $8B private equity firm, Invus, in 2015. 
Coming from a law background (Tech contract, Paris Pantheon Assas University lecturer), Elie created his first software startup at 22.

### Team Code Repos

Source codes of logion ecosystem developments will reside in 

* [Logion's GitHub organization](https://github.com/logion-network)

GitHub accounts/relevant organizations of team members:

* [Gérard's account](https://github.com/gdethier)
* [Pousse-Café organization](https://github.com/pousse-cafe)
* [Benoit's account](https://github.com/benoitdevos)
* [David's amateur account](https://github.com/BEdasc)

### Team LinkedIn Profiles

* David Schmitz - [https://www.linkedin.com/in/davschmitz](https://www.linkedin.com/in/davschmitz)

* Gérard Dethier - [https://www.linkedin.com/in/gerarddethier](https://www.linkedin.com/in/gerarddethier)

* Benoit Devos - [https://www.linkedin.com/in/benoitdevos](https://www.linkedin.com/in/benoitdevos)

* Elie Auvray - [https://www.linkedin.com/in/elieauvray](https://www.linkedin.com/in/elieauvray)


## Development Status :open_book:

The development of logion's wallet started in March 2021. The account protection and recovery processes are
implemented (off-chain and on-chain) and ready to be used.

All relevant source code has been published in
[logion's GitHub organization](https://github.com/logion-network).

Logion's mission statement has been published in the form of a [Medium article](https://medium.com/logion/with-blockchain-human-involvement-is-dead-long-live-human-decentralized-involvement-with-logion-ccd0f97bfa1d) the 8th of July 2021.

logion's [Web site](https://logion.network/) will be reviewed before the end of October 2021.

We also communicate via twitter and LinkedIn.
However, we are still quite discreet because our team is small and has limited financial resources.


## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 10 months
* **Full-Time Equivalent (FTE):** 2 (average) / alternating
* **Total Costs:** 42 K$

### Introductory note

We chose to start the development from our own resources in order to properly set our strategy and to show concretely what we are doing and what our future contribution could be.

### Milestone 1 — Implement account protection and recovery

* **Estimated duration:** 6 months
* **FTE:** 1
* **Costs:** 24k USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Documentation on how to run the wallet is available in the README of published repositories (see below) and formalized in [this docker compose file](https://github.com/logion-network/logion-test/blob/v0.1.0/docker-compose.yml): it describes a simple single-node local setup for testing purpose. |
| 0c. | Testing Guide | Each component comes with a set of unit and integration tests. However, this milestone is more about delivering a user experience. It is therefore advised to instantiate logion locally and use the Web application to execute the protection and recovery processes. This can be easily done using Docker Compose and [logion test](https://github.com/logion-network/logion-test), a project enabling the easy deployment of logion for testing. The processes to execute are described in the README [here](https://github.com/logion-network/logion-test#account-protection) and [here](https://github.com/logion-network/logion-test#account-recovery). Logion test version [0.1](https://github.com/logion-network/logion-test/releases/tag/v0.1.0) must be used. The Docker images to use have tag `grant1-milestone1` (see [here](https://github.com/logion-network/logion-test#usage)). |
| 0d. | Docker | We provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 1. | Logion node | We deliver logion's Substrate node version 0.1.0 including the recovery pallet in its runtime. The node is based on Substrate Node Template v3.0. The code (Rust) is hosted [here](https://github.com/logion-network/logion-node). [This file](https://github.com/logion-network/logion-node/blob/v0.1.0/runtime/src/lib.rs) describes logion's runtime configuration. |
| 2. | Off-chain service | We deliver the version 0.1.0 of companion off-chain service handling protection requests (the first step for a wallet user before being able to actually get the protection of legal officers) through a REST API implemented in Node.JS/TypeScript. The code of the off-chain service is available [here](https://github.com/logion-network/logion-backend-ts). The controller implementing the REST resources for protection request handling is defined in [this file](https://github.com/logion-network/logion-backend-ts/blob/v0.1.0/src/logion/controllers/protectionrequest.controller.ts). Unit tests are located in [this file](https://github.com/logion-network/logion-backend-ts/blob/v0.1.0/test/unit/controllers/protectionrequest.controller.spec.ts). Note that most resources require the caller to be authenticated. The authentication "protocol" is described [here](https://github.com/logion-network/logion-backend-ts/blob/v0.1.0/doc/Authentication.md) and implemented using resources defined in [this file](https://github.com/logion-network/logion-backend-ts/blob/v0.1.0/src/logion/controllers/authentication.controller.ts). Tests are [here](https://github.com/logion-network/logion-backend-ts/blob/v0.1.0/test/unit/controllers/authentication.controller.spec.ts). |
| 3. | Web application | We deliver logion's Web application (React/TypeScript) version 0.1.0 which enables the execution of the process described at point 0c. The code is available [here](https://github.com/logion-network/logion-wallet). |

### Milestone 2 — Implement node directory

* **Estimated Duration:** 1.5 month
* **FTE:** 1
* **Costs:** 6k USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Documentation will be included in the README of the published repository. |
| 0c. | Testing Guide | The node directory service will come with a set of unit and integration tests. It will also be included in our [logion test project](https://github.com/logion-network/logion-test) (see Milestone 1). As a result, it will be possible to test the integration of the new component in a locally running logion infrastructure. From a user experience perspective, there should be no difference. However, when inspecting the requests issued by the app, it will be clear that the list of available legal officers is loaded from the node directory. The Docker images to use for testing will have tag `grant1-milestone2`. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a Medium article to communicate to the Polkadot/blockchain community that logion is developing its decentralized wallet secured by legal officers, having an insititutional social recovery functionality already implemented.  |
| 1. | Node directory | The source code of the node directory, a Node.JS service written in TypeScript, will be published in a yet-to-create repository of Logion's GitHub organization. The goal is to have a service matching the specifications given in the Components section. |
| 2. | Web application | Logion's Web application (React/TypeScript) will use the list coming from the node directory instead of a hardcoded list currently. |

### Milestone 3 — Implement distributed backup

* **Estimated Duration:** 1.5 month
* **FTE:** 1
* **Costs:** 6k USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Documentation will be included in [the README of off-chain service's repository](https://github.com/logion-network/logion-backend-ts#readme). |
| 0c. | Testing Guide | [logion test project](https://github.com/logion-network/logion-test) (see previous milestones) will include the deployment of IPFS services. It will also include a couple of scripts enabling the simulation of a node's failure and recovery. The Docker images to use for testing will have tag `grant1-milestone3`. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Distributed backup | Encrypted backups of the database will be stored in the IPFS cluster as described above in the paragraph about fault tolerance in the Architecture section. Configuration (for PostgreSQL) and/or scripts (Bash) needed to actually enable this will be published in the [off-chain service's repository](https://github.com/logion-network/logion-backend-ts). [logion test](https://github.com/logion-network/logion-test) will expose IPFS configuration (additional services in the Docker Compose file). |

### Milestone 4 — Multisig service

* **Estimated Duration:** 1.5 month
* **FTE:** 1
* **Costs:** 6k USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Documentation will be included in [the README of the wallet repository](https://github.com/logion-network/logion-wallet#readme) and a use-case will be added to the README of [logion test](https://github.com/logion-network/logion-test#readme). |
| 0c. | Testing Guide | logion test should be used to instantiate locally a logion infrastructure. The procedure to follow in order to test multisig is described in logion test's README. The Docker images to use for testing will have tag `grant1-milestone4`. |
| 0d. | Docker | We will provide a Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 1. | Web application | The multisig feature as part of our [Web application (React/TypeScript)](https://github.com/logion-network/logion-wallet). It will essentially consist in the possibility for a wallet user to request the creation of a multisig address with a legal officer. The signatures of the regular user and the legal officer will then be required to transfer tokens out of this account. Such transfers will always be created by the regular user and counter-signed by the legal officer. |
| 2. | Off-chain service | The multisig feature in the form of REST resources and a model in logion's [off-chain service (TypeScript)](https://github.com/logion-network/logion-backend-ts). |

## Future Plans

Beyond the improvements that could be brought to the service, the most important challenge could be to find a solution to **provide our wallet to the whole DotSama ecosystem.** For this, we need an access to the relay chain, at least, in the Kusama environment first.

The wallet logion could then be used to secure all the digital assets of DotSama.

It should also be available for nominators with the stacking function enabled.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Web3 Foundation Website / Medium / Announcement by another team / personal recommendation (all of these)
