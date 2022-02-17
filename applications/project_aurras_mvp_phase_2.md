# W3F Grant Proposal

- **Project Name:** Project Aurras - MVP - Phase 2
- **Team Name:** HugoByte AI Labs Private Limited
- **Payment Address:** 18axrB6cfmaUs7thCKzPQmRekYiAvQi5QX (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This is an application for a follow-up grant: https://github.com/w3f/Grants-Program/pull/163

### Overview

Aurras is a middleware that acts as an event processor and a low code workflow orchestration platform. Aurras is being pitched as a next-generation system for enabling decentralized push notification. This middleware solution listens to events from blockchain applications and propagates them to a registered pool of MQTT brokers. The broader architecture consist of parachain from which the middleware listens for the events.

Aurras as a part of Substrate / Kusama / Polkadot / Web 3 Ecosystem
* A core part of Decentralized Push Notification Architecture
* Can be used for business-critical and production-grade IoT devices to listen to events from blockchain
* Can be used with microservices across industry verticals
* Can be expanded to get integrated with data analytics, knowledge visualization, and machine and deep learning (ML/DL) algorithms

### Project Details

#### Architecture
![](https://storage.googleapis.com/hugobyte-2.appspot.com/architecture.jpeg)

#### Technologies

1. [Apache OpenWhisk](https://openwhisk.apache.org) is an open source, distributed Serverless platform that executes functions (fx) in response to events at any scale. OpenWhisk manages the infrastructure, servers and scaling using Docker containers. The OpenWhisk platform supports a programming model in which developers write functional logic (called Actions), in any supported programming language, that can be dynamically scheduled and run in response to associated events (via Triggers) from external sources (Feeds) or from HTTP requests
2. [Apache Kafka](https://kafka.apache.org) is an open-source distributed event streaming platform. Kafka works well as a replacement for a more traditional message broker. Message brokers are used for a variety of reasons (to decouple processing from data producers, to buffer unprocessed messages, etc.). In comparison to most messaging systems, Kafka has better throughput, built-in partitioning, replication, and fault-tolerance which makes it a good solution for large scale message processing applications.
3. [Tackle box](https://robcxyz.github.io/tackle-box/) is a declarative DSL for building modular utilities and code generators. Tool is plugins based and can easily be extended by writing additional hooks or importing external providers creating a web of interoperable CLIs.
4. Docker 
5. Rust  
6. Go

#### Components

**1.Event Sources (Substrate Event Feed)**  
This is the source for events from the blockchain and the events will be sent to the OpenWhisk system. The MVP event source will be implemented using [polkadot-js/api](https://github.com/polkadot-js/api). For the actual implementation, we will be using a custom version of the substrate archive. Substrate archive will be indexing the blocks and an event actor will be decoding the events and data from the block and posting them to the OpenWhisk system. 

The indexer will use a NoSQL database to store the last indexed block and metadata. Using the substrate indexer as our event source will help us in solving many challenges ranging from fault tolerance to scalability to uniquely identifying multiple events with the same payload within a single block. The indexer will be connected to a substrate-based chain and RocksDB where the chain data is stored. When a new block is produced by the chain, the indexer collects the raw blocks from the RocksDB and sends it to the event actor. The event actor processes the block. The block data is decoded using the parity scale codec and mapped with the data types provided to the runtime. Once the event is decoded, the event actor posts a trigger to the event trigger manager.  

**2.Event Trigger Manager**  
Event trigger manager is composed of multiple actions including using a database to store trigger URLs and their respective auths, and Kafka provider, consumer and producer. Once the event manager receives an event from the event feed, this data is produced to a topic. The feed action in the trigger manager lets the user hook into the system. That is,  once an event is indexed to a particular topic, it can invoke a particular action. While creating the workflow, users can choose the event trigger as feed and provide necessary parameters from which chain it should be listening to and from which block it should start listening.

Under the hood, a feed action is invoked with create lifecycle, which accepts the mandatory parameters the lifecycle, auth, trigger name, and other optional parameters of the event source. The feed action invokes the related actions of creating the entry in the database, adding to the Kafka consumer group, etc. The next component in the event trigger manager is a persistent connection to Kafka where it is used to produce and consume the stream of data. Once data is received in Kafka, the event trigger manager invokes the action to check the consumer groups for that particular topic and if found any, the trigger for the users under that particular group is invoked, which in turn invokes the workflow action.  

**3.Workflow Composer**  
The workflow composer is at the heart of Aurras and is responsible for composing and deploying the necessary workflows. It consists of an async Rust library to compose multiple triggers, a deployment configuration generator, providers for Tackle Box, several operators, macros and a whisk deployment tool.

To create a workflow, the only necessary input is the YAML configuration file. The composition, direction of flow, triggers and actions are laid out in the YAML file. This YAML is parsed using Tackle Box, which in turn composes it into a wasm which can be deployed to openwhisk. Once deployed to a namespace, each workflow will have a unique workflow id.

Workflow configuration comprises the input URL of workflow tasks, the sequence of processing tasks, and argument structure. Arguments must match the task input parameters.
 
**4.Web API Gateway and Backend Service**   
This is the end-user facing component that enables easy and intuitive usage of Aurras. This final component is has a backend application that provides user registration, workflow registration and workflow management. Users can also easily create, select or manage workflows along with providing the necessary input parameters.  

### Ecosystem Fit

* https://github.com/playproject-io/datdot-service
* https://github.com/open-web3-stack/guardian

Similar projects
* https://github.com/PipedreamHQ/pipedream
* https://github.com/snakemake/snakemake
* https://github.com/aelassas/Wexflow

What makes us different is

As a part of the Web 3 Community and Ecosystem
* First class support to connect blockchains
* Deployment and definition of workflows will be done through easy-to-write YAML configuration.
* Workflow tasks can be written in multiple languages - NodeJS, Go, Java, Scala, PHP, Python, Ruby, Ballerina, .NET and Rust (We prefer and recommend WASM compatible Rust)
* First class support to MQTT Endpoints.  

## Team :busts_in_silhouette:

### Team members

* Muhammed Irfan K - CTO & Co-Founder - HugoByte AI Labs
* Hanumantappa Budihal - CIO, Project Manager & Solutions Architect, DevOps - HugoByte AI Labs	
* Shreyas Kura Subramanya - Development Team Lead - HugoByte AI Labs

### Contact

- **Contact Name:** Muhammed Irfan K
- **Contact Email:** muhammedirfan@hugobyte.com
- **Website:** https://hugobyte.com

### Legal Structure

- **Registered Address:** HugoByte AI Labs Private limited, 1st & 2nd Floor, IBIS Hotel, Hosur Road, Bommanahalli, Bengaluru, Karnataka, India, 560068
- **Registered Legal Entity:** HugoByte AI Labs Private limited, CIN: U72900KA2020PTC140106

### Team's experience

**Muhammed Irfan K**  
Muhammed Irfan K is a strategic thinker and implementer of innovative ideas with an emphasis on educating and bringing back privacy to the people. Having co-founded HugoByte AI Labs and serving as its CTO, he envisions a world where AI is open, distributed and democratized by building a decentralized infrastructure and policy framework to regulate it. He has extensive experience in designing and building Highly Scalable Enterprise Architecture, leading high-impact teams, Full-Stack Development, Microservices and Machine Learning.

**Hanumantappa Budihal**  
Hanumantappa Budihal is the Chief Information Officer and Solutions Architect at HugoByte AI Labs. He has worked for 4 years as an Application Developer and Azure DevOps Engineer. He is adept at designing, describing and managing the solution engineering for specific business problems by finding the best tech solution by analysing all possibilities. He is proficient in defining features, phases, and solution requirements. He is currently invested in decentralising the blockchain space and is working on the enhancement of the Blockchain Transmission Protocol to achieve it. 

His technical skills include ML, AI ,Blockchain, .NET Core Framework, Azure DevOps, SQL Developer, ASP .NET MVC, REST Web API, WPF, Microsoft Azure, Cognitive Services, Algorithms Design for a complex business requirement, and Watson Discovery, with good knowledge of Application Architecture and Design pattern implementation and data analysis skills. He has also worked on cognitive application development using various IBM Bluemix services such as Conversation, Natural language understanding, Watson discovery, and has developed chatbots using Api.ai and Microsoft bot framework. As a testimony to his exemplary technical skills, he is now pursuing his MTech in computer science at IIT Madras.

**Shreyas Kura Subramanya**  
Shreyas is an experienced software developer with great zeal in implementing solutions in the software domain. He is skilled in Blockchain, smart contracts, ethical hacking, RUST and GOlang. He currently is the Development Team Lead at HugoByte AI Labs and is instrumental in driving the team to great success. He obtained his Bachelor's degree focused in Computer Science from Bapuji Institute of Engineering & Technology, Davanagere. 
 
### Team Code Repos

- https://github.com/hugobyte
- https://github.com/HugoByte?q=aurras
- https://github.com/MuhammedIrfan
- https://github.com/HanumantappaBudihal
- https://github.com/shreyasbhat0

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/muhammed-irfan-k
- https://www.linkedin.com/in/hanumantappa-budihal/
- https://www.linkedin.com/in/shreyas-ks/

## Development Status :open_book:

#### Article
- https://medium.com/hugobyte/completion-of-aurras-mvp-a-middleware-for-the-web3-ecosystem-ee4f666be6aa

#### Documentation
- https://docs.aurras.hugobyte.com/

#### Codebase
- https://github.com/HugoByte/aurras
- https://github.com/HugoByte/aurras-deployment-docker-compose
- https://github.com/HugoByte/aurras-event-feed-substrate-js
- https://github.com/HugoByte/aurras-deployment-kubernetes


## Development Roadmap :nut_and_bolt:

### Overview

- **Description** Development of Project Aurras - MVP - Phase 2 
- **Total Estimated Duration:** 240 Person Days
- **Full-time equivalent (FTE):** 4
- **Total Costs:** 38400 USD 

### Milestone 1 — Workflow Composer - Part 1

- **Estimated Duration:** 30 Working days
- **FTE:** 4 
- **Costs:** 19200 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | Documentation includes Inline Code Documentation, Composer Configuration Documentation, Readme file |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide we will describe how to run these tests|
| 1a. | Workflow Composer: Rust Openwhisk Client Library | Minimal Implementation to Openwhisk Rust Client |
| 1b. | Workflow Composer: Composer | Wrapper Library to integrate plugging operators and Openwhisk Client |
| 1c. | Workflow Composer: Pipe | Interface to connect other operators and tasks |
| 1d. | Workflow Composer: structured YAML file | A YAML with a predefined structure to configure the workflow composer. |
| 1e. | Workflow Composer: Concat Operator | Operator interface to merge two flows. |
| 1f. | Workflow Composer: Map Operator | Operator to map the inputs to the outputs of each type. |
| 2   | Predefined boiler plate | Predefined Rust code for flow generation. |
| 3a. | Flow Provider for Tackle Box |Create the necessary hooks for the workflow |
| 3b. | Task Provider for Tackle Box | Generate Rust code with structure for the given arguments |
| 3c. | Workflow Provider for Tackle Box  | Interface to connect other operators and tasks |  


### Milestone 2 Workflow Composer - Part 2

- **Estimated Duration:** 17 Working days
- **FTE:**  4
- **Costs:** 10880 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | Documentation includes Inline Code Documentation, Operator Documentation, Flow design, Readme file |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 1a. | Workflow Composer: Flow Macro | There are of three types of flow: init, pipe and terminator. The init is used to create the first task in the workflow and the terminator is used to create the last task. The pipe method is used to create other tasks that accept inputs and are dependent on other tasks. |
| 1b. | Workflow Composer: Derive Macro(s) | Derive macros for tasks in a workflow: invoking OpenWhisk action, invoking OpenWhisk trigger, invoking smart contracts. The tasks are structs, based on a generic format that would include name, inputs and endpoints and macros add functionalities for the tasks |


### Milestone 3 Example — Web API/Backend

- **Estimated Duration:** 13 Working days
- **FTE:**  4
- **Costs:** 8320 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | Documentation includes Inline Code Documentation, Operator Documentation, API doc, Readme file |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article | We will write a Medium article that explains the work done as part of the grant. |
| 1a. | Web API: Workflow Registration | API Exposed as a part of workflow deployment, Workflow will be registered and made available to specific namespace |
| 1b. | Web API: User Registration | Basic User Registration API to register user to the system |
| 1c. | Web API: User Workflow Management | User to select workflow and provide argument values, Pause Workflow, Delete Workflow |
| 2. | Example User Stories | User stories to demonstrate the capabilities of Functional MVP |


## Future Plans

Immediate Plans in the timeline Includes
* Develop full fledge system
* Implement Custom Version of Substrate Archive
* Add more operators
* Add Analytics and Monitoring  
* MQTT Endpoints  
* Decentralized push notification  

Our Roadmap includes
* Decentralized Pub/Sub Network to replace Apache Kafka in Aurras
* WASI Runtime for Openwhisk

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Previous grant: https://github.com/w3f/Grants-Program/pull/163
