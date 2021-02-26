# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** Semantic EventFlow Contracts
* **Team Name:** TSN (Trusted Semantic Network)
* **Payment Address:** 36y1czmyN8vpjVvzHkH2jUFv7PAWiqugYT

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview
 
#### Projects’ goal is the infrastructure deployment to create a trusted semantic layer for Event Flow models execution on the Polkadot parachain. 

Event Flow model - is a data structure using event semantics language to describe business logic algorithms or several actors interaction with a fixed number of conditions.  

The Event Flow model performs a function that was originally assigned to smart contracts.

Unlike smart contracts, which, in fact, are controllers written in typical or special programming languages, EventFlow models are composed of unified format records that describe the semantic context and conditional (causal) relationships of activity events.

EventFlow models and the data they generate are organized into a directed acyclic graph, the nodes of which are action event records and the edges are conditional links between them.

The structure of the graph is completely determined by EventFlow models that generate and validate the subject events that record the algorithms of transactions or business process steps.

No event can be attached to a graph outside the model. Unification of semantic vocabularies of basic models provides creation and support of a unified semantic space necessary for data exchange between independent models in the same subject area.

Creating and displaying models, graph navigation, and semantic search are implemented in a special user  client that creates interfaces with screen forms and generates subject events based on models.

The execution of event model algorithms is based on a dynamic dataflow architecture, transformed considering event semantics into EventFlow architecture.

EventFlow models interaction  are implemented on the event-driven principles using a directed acyclic graph as an event queue.

Semantic certainty of events in the graph allows for parallel asynchronous interaction of multiple independent (not conditionally linked) action models. 

The event graph is formed by network transactions and includes semantic dictionaries, EventFlow models, and actual events. The network consensus ensures that the graph is synchronized on nodes with validation of transactions  according to the models. Transactions can be processed in parallel during validation in the absence of dependencies between models

The advantages of semantic EventFlow models over standard smart contracts:
1. The ability to quickly create models by people who do not have programming skills: by simply listing events and setting conditions for their execution.
2. Simple organization of interaction between models written by independent users, thanks to the use of the same basic dictionaries.
3. Technical ability to adjust action models after their launch (subject to the rights to make changes).
4. System security against errors in digital agreements, since incorrect models are not accepted by controllers written by professional programmers, taking into account the verification of all possible ambiguities.

Semantic obviousness and human-readability of the action model text.
The ability to quickly create models by people who do not have programming skills: model contains a simple listing of events and setting conditions for their execution.
Simple organization of models interaction, written by independent users, due to the use of the same basic dictionaries. 
The technical ability to modify action models after their launch (subject to the availability of the rights to make changes).
The protection of the system against errors in digital agreements, since incorrect models are not accepted by controllers written by professional programmers, taking into account the verification of all possible ambiguities.
 
#### An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
Polkadot is seen as the most convenient platform available for implementing a trusted semantic infrastructure based on EventFlow architecture. The parachain Polkadot is seen as a base layer providing consensus synchronization of graphs across nodes. Controllers that validate event transactions and execute EventFlow models are created in the Runtime Module using FRAME (Framework for Runtime Aggregation of Modularized Entities). The event graph is formed by parachain network transactions stored in blocks. The user client contains controllers that provide: (1) events displaying, (2) building screen forms based on action models, and (3) generating events/transactions according to user actions.

#### An indication of why your team is interested in creating this project.
The need (market demand) for semantic models / contracts to create decentralized applications and digital agreements emerged when designing pilot projects on the Apla blockchain platform (https://github.com/AplaProject) in the UAE, India, Luxembourg, Russia (Gazprom Neft), etc. Event Semantics based business logic constructor was implemented in the project for the Emirate of Ajman. For the past six months, the team has been working on a prototype of the EventFlow engine for the Trusted Semantic Network implementation (https://trustedsemanticnetwork.com/) and a number of corporate projects (IT security). The Semantic EventFlow Contracts project, based on the Polkadot parachain, is seen by the team as an opportunity to provide network users with the ability to create secure semantic models for decentralized applications, as well an opportunity to further develop EventFlow technology. 

### Project Details 

The pilot version of the Polkadot parachain with EventFlow models will deliver:

1. Directed acyclic graph’s semantic dictionaries, models and subject events generation by the user client interface;
2. Consensus validation of transactions by models and recording events in blocks;
3. Automatic action models execution by the Runtime Module controller upon the contingent events fixation and writing the execution results to the block.

Typical use cases for EventFlow models in the pilot version:
1. Digital agreements, with events based validity confirmation (signed by several actors) with automatic resulting event generation when the specified conditions are met - the appearance of one or multiple relevant events in the graph;
2. Business processes creation and execution with roles based access and rights management; 
3. Messages (events) exchange according to specified algorithms between several actors.

Currently, local (without a network) prototype of the EventFlow engine has been created. Video at https://youtu.be/s2-BqGV_N4Y demonstrates: 
Executable model creation process and user actions that consists only of events sequence generation and recording it into the graph in a unified format. All necessary semantics is recorded in 32 basic events.

Software client builds screen forms based on the event model, converting user actions into events, verifies new events by model and adds them to the graph, controls model events execution conditions by the state of the graph, which ensures implementation of the application's business logic.
EventFlow model code presented on the video:

    1, TextApproval: Model: Model_TextApproval, [#], Actor_Main
    2, Model_TextApproval: Attribute: text, [status = '' OR status = sendBack]
    3, text: required: 1 # mandatory text attribute entrance 
    4, text: cardinality: 1 # only one meaning of text attribute is valid
    5, text: mutable: 1  # may change the value by adding new
    6, text: Permission: Author # Author actor holds the attribute entry rights
    7, Model_TextApproval: Attribute: status, [text <> ''] 
    8, status: cardinality: 1 
    9, status: mutable: 1 
    10, status: Permission: Manager # Manager actor holds the attribute entry rights 

1. Events format: `eid, BasicEvent: ValueType: Value, [condition], Actor`
2. Special syntax is used, in the graph events are stored in a digit format;
3. eid: 1 - in condition link to the previous event;
4. eid: 2 - in condition it is defined that text can only be entered when the status value is undefined or has a value SendBack;
5. eid: 7 - in condition it is determined that the status can only be defined if there is a text;
6. Omitted demo attributes name and comment.

As a result of demo model execution, subject events are written into the graph:

    1, TextApproval: Individ :Text approval example, [#], Actor_Main
    2, Text approval example: text: Text for approval, [2], Author
    3, Text approval example: status: SendBack, [3], Manager
    4, Text approval example: text: Text for approval v2, [3], Author
    5, Text approval example: text: Text for approval v3, [3] Author
    6, Text approval example :status :Accept, [5], Manager 

### Ecosystem Fit 
Since the emergence of Etherium, there have been many calls to make smart contracts human-readable and semantically unambiguous (Narasimha Kodihalli. Introducing the Semantic Blockchain in Capital Markets \\ Securities Finance Monitor, October 4, 2018. 


There even have been attempts to bring this idea to life (Kirik Semantic Smart Contracts, https://medium.com/miniapps-pro-token). However, the projects aimed to use semantics only at the stage of compiling the logic of the smart contract, followed by interpreting the text in one of the programming languages or compiling it into bytecode. 

Currently there are several projects trying to implement semantic verification of the smart contracts:
1. Grishchenko, I., Maffei, M., & Schneidewind, C. (2018). A Semantic Framework for the Security Analysis of Ethereum Smart Contracts. In International Conference on Principles of Security and Trust (pp. 243–269). Springer, Cham. doi:10.1007/978-3-319-89722-6
2. Hildenbrandt, E., Saxena, M., Rodrigues, N., Zhu, X., Daian, P., Guth, D., et al. (2018). KEVM: A complete formal semantics of the ethereum virtual machine. In Proceedings - IEEE Computer Security Foundations Symposium (pp. 204–217). doi:10.1109/CSF.2018.00022
3. Milorad Tosic, Nenad Petrovic. Semantic Approach to Smart Contract Verification \\ Facta Universitatis Series Automatic Control and Robotics 19(1):21-37. July 2020.

In our project the contract logic is fully implemented in EventFlow models, without going down to the level of Turing full programming languages.


## Team :busts_in_silhouette:

### Team members
* Alexander Boldachev
* [Frank Horrigan](https://github.com/Saurer)

### Contact
* **Contact Name:** Alexander Boldachev
* **Contact Email:** boldachev@gmail.com
* Website

### Legal Structure 
* **Registered Address:** none
* **Registered Legal Entity:** none

### Team's experience
Core team consists of developers of the Apla blockchain platform (https://github.com/AplaProject). The Apla project has developed a blockchain network, programming languages for smart contracts and interfaces, a software client with a complete IDE, and sidechains connections architecture. The team has implemented Pilot projects in the:
1. UAE (supply chain, aviation certificates register, commercial real estate lease platform);
2. India (land register, vehicle registration platform), 
3. Luxembourg (shareholder voting system), 
4. Russia (trading platform for Gazprom Neft), etc.
  

### Team Code Repos
EventFlow controller prototype code (check out https://youtu.be/s2-BqGV_N4Y) 

* https://github.com/Saurer/Aurora
* https://github.com/Saurer/Parallax

### Team LinkedIn Profiles
* https://www.linkedin.com/in/alexander-boldachev-21b65960/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  3 FTE
* **Total Costs:** 0.64 BTC)

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 3 month
* **FTE:**  3
* **Costs:** 0.64 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write a tutorial that explains how the EventFlow models work. 
| 1. | Substrate pallet: EventFlow models controller | We will create a Substrate pallet that will validate transactions according to the models specified in it, execute the model with the received events, write the result of the model execution into the graph. |  
| 2. | EventFlow User Client | We will create a EventFlow User Client that will query the current state of the model graph, build a screen interface based on a working model, validate data received from screen forms, form transactions in a chain, and supplement  the local version of the graph. |  
| 3. | Basic event ontology | We will create full-featured basic event ontology for creating models of typical interactions between counterparties and for business logic designing. |  
| 4. | Substrate chain | EventFlow models Controller and User Clients of our custom chain will interact in such a way: (1) The user creates agents interaction model in the client interface, defining entities, properties, actions and rights based on the genesis part of the graph; (2) EventFlow models Controller (pallet) validates the model and saves it in the graph; (3) Users with access rights to the model and its properties can interact with it using their clients to get results (essentially, what is shown in the demo video, but with a fixation of user actions in the parachain). |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain. |

## Future Plans
Team’s plan is to leverage EventFlow models implementation experience on the Polkadot parachain to create Trusted Semantic Network (https://trustedsemanticnetwork.com/) using the essential elements of the Polkadot (Networking components such as Libp2p, consensus engine and Wasm interpreter and virtual machine).

## Additional Information :heavy_plus_sign: 
None
