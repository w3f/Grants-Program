# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** Semantic Eventflow Contracts
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

TextApproval: Model: Model_TextApproval, [#], Actor_Main
Model_TextApproval: Attribute: text, [status = '' OR status = sendBack]
text: required: 1 # mandatory text attribute entrance 
text: cardinality: 1 # only one meaning of text attribute is valid
text: mutable: 1  # may change the value by adding new
text: Permission: Author # Author actor holds the attribute entry rights
Model_TextApproval: Attribute: status, [text <> ''] 
status: cardinality: 1 
status: mutable: 1 
status: Permission: Manager # Manager actor holds the attribute entry rights 

Events format:

eid, BasicEvent: ValueType: Value, [condition], Actor
Special syntax is used, in the graph events are stored in a digit format;
eid: 1 - in condition link to the previous event;
eid: 2 - in condition it is defined that text can only be entered when the status value is undefined or has a value SendBack;
eid: 7 - in condition it is determined that the status can only be defined if there is a text;
Omitted demo attributes name and comment.

As a result of demo model execution, subject events are written into the graph:

TextApproval: Individ :Text approval example, [#], Actor_Main
Text approval example: text: Text for approval, [2], Author
Text approval example: status: SendBack, [3], Manager
Text approval example: text: Text for approval v2, [3], Author
Text approval example: text: Text for approval v3, [3] Author
Text approval example :status :Accept, [5], Manager 

### Ecosystem Fit 
Are there any other projects similar to yours? If so, how is your project different?

## Team :busts_in_silhouette:

### Team members
* Name of team leader
* Names of team members	

### Contact
* **Contact Name:** Full name of the contact person (e.g. John Brown)
* **Contact Email:** Contact email (e.g. john@duo.com)
* Website

### Legal Structure 
* **Registered Address:** Address of your registered legal entity, if available. Please keep it on one line. (e.g. High Street 1, London LK1 234, UK)
* **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

### Team Code Repos
* https://github.com/<your_repo_1>
* https://github.com/<your_repo_2>

### Team LinkedIn Profiles
* https://www.linkedin.com/<person_1>
* https://www.linkedin.com/<person_2>

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.
* Deliverables 0a-0d are mandatory and should not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research oriented and as such there is no code to test)

### Overview
* **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
* **Full-time equivalent (FTE):**  Workload of an employed person ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) (e.g. 2 FTE)
* **Total Costs:** Amount of Payment in BTC or DAI for the whole project. The total amount of funding needs to be below $30k for initial grants and $100k for follow-up grants at the time of submission. (e.g. 0.80 BTC)

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.75 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be coded for the first milestone) |  
| 2. | Substrate module: Y | We will create a Substrate module that will... |  
| 3. | Substrate module: Z | We will create a Substrate module that will... |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 2 Example — Additional features
...

## Future Plans
Please include the team's long-term plans and intentions.

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?
