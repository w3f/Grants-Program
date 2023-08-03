# Polkadot Analytics Platform

- **Team Name:** MOBR Systems
- **Payment Address:** 0x10F40DE77B7D2cDEe35De46B521e0c93bA9C3b36 (USDC ERC20)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

This proposal is aligned to the [RFP: Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/data_analysis_tools.md). 

Our R&D roadmap was conceived and kick-started before the creation of this RFP, which was presented to us during the course of our previous [research grant](https://github.com/w3f/Grants-Program/pull/1420). Nevertheless, we believe the proposed application (Polkadot Analytics Platform) is aligned with the RFP's requirements and main goals. Both aim at providing data analysis in a way that advanced non-technical users can consume, without requiring programming skills. 

This proposal is a follow-up grant application for the project [A Knowledge-Oriented Approach to Enhance Integration and Communicability in the Polkadot Ecosystem](https://github.com/w3f/Grants-Program/pull/1420)

<br>

### Overview

> Tag line

Empowering the Polkadot community with a comprehensive analytics platform that provides natural language querying, supported by formal knowledge representations, and customizable dashboards for holistic data analyses.

<br>

> A brief description of your project.

The Polkadot Analytics Platform aims at building a comprehensive data analysis and visualization tool for the Polkadot ecosystem. The platform will allow users to retrieve and analyze data from various Polkadot-related sources (e.g., different parachains and components such as browser wallets), aligned with the POnto ontology [1, 2, 3]. Users will be able to specify their queries using a controlled natural language (CNL), and the platform will provide a query engine to process these queries. Additionally, the platform will provide a UI to support constructing queries and visualizing informative artifacts that represent query results. As well as support for composing customizable dashboards using these artifacts.

[1] POnto source code: https://github.com/mobr-ai/POnto

[2] POnto documentation: https://www.mobr.ai/ponto

[3] POnto scientific paper:  https://github.com/mobr-ai/POnto/raw/main/deliverables/milestone3/article.pdf  

<br>

> An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.

The Polkadot Analytics Platform will use the Substrate blockchain framework and Polkadot ecosystem components to extract, store, structure and process data in order to present it in a user-friendly manner. It will leverage the POnto ontology to enable efficient knowledge organization and retrieval. A CNL querying engine will facilitate natural language queries on the ecosystem's data, making it accessible to a broader target audience.

<br>

> An indication of why your team is interested in creating this project.

Our team is committed to research and develop Web3 technologies, supporting the growth of the Polkadot community. By building the Polkadot Analytics Platform, we aim to provide valuable insights, enhance user experience, and enable seamless data exploration for developers, users, and stakeholders. We are enthusiastic about creating user-centric solutions and pushing the boundaries of knowledge-oriented approaches in the blockchain space.

<br>

### Project Details

> Mockups/designs of any UI components

Figure 1 presents an overview of how the Polkadot Analytics Platform main components are integrated with its UI and how users can interact with it. 

The user interaction begins with building a query in a controlled natural language format in the platform. For example, the user may enter a query like "How many transactions happened between July 4th and 8th in the Moonbeam parachain?". 

The platform utilizes NLP mechanisms to parse the query and extract key entities, relationships, and actions mentioned. This step involves understanding the user's intent and mapping it to the corresponding concepts in the POnto ontology. This mapping helps establish a semantic understanding of the user query and allows for effective retrieval. 

The results are structured as informative artifacts, enriched with charts to enhance the user's understanding. The summarized query results are presented to the user through a dashboard UI where they can analyze the queried data, refine their queries, and further explore the insights provided. 

Users have the opportunity to provide feedback or refine their queries based on the presented results. The platform may incorporate user feedback to the knowledge base, enhancing future query processing and improving the system's performance and relevance.

The platform comprises information extraction processes capable of constructing the knowledge base with Polkadot’s ecosystem data, aligned with the POnto ontology. The platform architecture and its components are detailed in the next sections.


![PAP_overview](https://github.com/rbrandao/Grants-Program/assets/779451/329b068c-50ec-4ed5-9ad6-5f1acb2bb99a)
Figure 1 - Mockup of how the Polkadot Analytics Platform main components are integrated with its UI.

<br>

> Data models / API specifications of the core functionality

Data model will reflect the POnto structure. Extracted data will be transformed and injected in a triplestore database. 

The API specifications will provide a standardized way for users to interact with the Polkadot Analytics Platform, allowing them to query specific data, create visualizations, and manage their dashboards effectively. The API will be designed to interact with the knowledge base (i.e. underlying triplestore database), allowing users to access and query the data based on the POnto ontology. The endpoints will provide information about ontology entities (e.g., blocks, extrinsics, etc.), querying support, dashboard setup, informative artifacts, and others.

<br>

> An overview of the technology stack to be used

**Data processing**: Python and Apache Airflow
**Triplestore database**: Apache Jena and Fuseki
**Knowledge representation and querying**: OWL, RDF and SPARQL
**Information extraction, NLP, and other backend pipelines**: Python, NLTK
**UI and client-side integration**: Node.js, JavaScript, and Angular/React
**Interaction with relay chains and parachains**: Substrate interfaces like Polkadot{.js} 

<br>

> Documentation of core components, protocols, architecture, etc. to be deployed

The platform's architecture (see Figure 2) will follow a modular and scalable design to accommodate future expansions and improvements. 

![qe_arch_wbg](https://github.com/rbrandao/Grants-Program/assets/779451/b27ee779-514d-445d-8195-a345d8a04e70)
Figure 2 - Polkadot Analytics Platform architecture.

The architecture includes the following core components:

====
Client layer

API: This component structures an API for external applications to interact with the platform.

Frontend: This component offers a user-friendly interface for users to create and execute queries, visualize data, and manage their dashboards.

====
Engine layer

Controlled Natural Language (CNL) Engine: This component will define the controlled natural language grammar and syntax that users can use to query the data based on the POnto ontology. CNL Engine parses natural language queries and assists query completion.

Query Engine: The query engine uses the CNL engine to get a structured query to retrieve the corresponding data from the triplestore database.

Informative Artifacts Engine: Informative artifacts will be created based on query results or on query specification, representing visualizations such as strings, tables, line charts, bar graphs, or other data visualizations.

Dashboard Engine: This component will allow users to create, customize, and manage their dashboards by integrating and composing multiple informative artifacts.

====
Data layer

Data Extraction: This component foresees data extraction workflows to deal with the dynamicity of various data sources within the ecosystem. The component will be responsible for extracting data from the Polkadot ecosystem, according to the entities defined in the POnto ontology, including blocks, transactions, and other relevant information. 

Knowledge Management: This component comprises the mechanisms to build and maintain the knowledge representation according to the data extracted and aligned with the POnto ontology, ensuring structured representation and organization. It also comprises the triplestore database where the knowledge representation will be stored.

====
Ecosystem layer

The Polkadot ecosystem has in its core a decentralized network of interconnected blockchains (aka Parachains), and it consists of multiple components. Each component generates data related to blocks, transactions, events, and other relevant information. The proposed platform will interact with the available tools, libraries and SDK to access and manage ecosystem data.

<br>

> PoC/MVP or other relevant prior work or research on the topic

Prior to this application, the team has conducted scientific research to create an ontology  [1, 2, 3, 4] that represents the main concepts and relationships of the Polkadot Ecosystem. This ontology will support the building of the proposed data analysis platform.

[1] POnto source code: https://github.com/mobr-ai/POnto

[2] POnto documentation: https://www.mobr.ai/ponto 

[3] POnto scientific paper:  https://github.com/mobr-ai/POnto/raw/main/deliverables/milestone3/article.pdf 

[4] Grant Application - A Knowledge-Oriented Approach to Enhance Integration and Communicability in the Polkadot Ecosystem:  https://github.com/w3f/Grants-Program/pull/1420

<br>

> What your project is _not_ or will _not_ provide or implement

This project is not focused on tokenomics, marketing, or business-oriented activities. It will not involve creating tokens or launching a separate business venture.

<br>

  > This is a place for you to manage expectations and to clarify any limitations that might not be obvious

The Polkadot Analytics Platform is an analytics tool. While it will provide valuable data insights, it is not designed to be used as a trading tool and will not offer financial advice or recommend investment strategies.

<br>

### Ecosystem Fit

> Where and how does your project fit into the ecosystem?

The Polkadot Analytics Platform fills a critical gap in the ecosystem by providing users with a comprehensive analytics solution. It integrates with Substrate to access blockchain data and aligns it with the POnto ontology. The CNL querying engine enhances user experience by enabling natural language-based queries. The provision of customizable dashboards and informative visualization artifacts enhances data communication, making it easier for users to track key metrics, monitor trends, and construe valuable insights.

<br>

> Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

The proposed platform has a broad target audience, including developers, designers, analysts, researchers, and users within the Polkadot ecosystem. We aim to support both technical and non-technical users, providing easy access to meaningful data insights.

<br>

> What need(s) does your project meet?

The Polkadot Analytics Platform addresses the need for comprehensive and accessible data within the ecosystem. It enhances data integration, querying, and visualization, enabling users to gain deeper insights into the Polkadot ecosystem.

<br>

> Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?

To the best of our knowledge, there are no projects in the ecosystem that provide a holistic and human-centered approach to ease data access and analysis similar to our proposed platform. We are aware of three projects tackling the RFP referred to in this proposal ([PR 1716](https://github.com/w3f/Grants-Program/pull/1716/), [PR 1768](https://github.com/w3f/Grants-Program/pull/1768/), [PR 1837](https://github.com/w3f/Grants-Program/pull/1837/)). However, none of them combines in a broad knowledge-oriented approach, a CNL querying engine, and composable informative artifacts as an integrated analytics platform for Polkadot. 

The Polkadot Analytics Platform stands out by integrating knowledge-oriented approaches, formal ontology, and natural language querying to provide an intuitive and efficient analytics experience. Its composable informative artifacts enable users to create customized dashboards tailored to their specific analysis needs. The proposed platform enables both technical and non-technical users to access data and perform deep analysis.

<br>

## Team :busts_in_silhouette:

### Team members

> Name of team leader:

**Dr. Marcio Moreno**, marcio@mobr.ai, Co-Founder, Research Scientist and CEO at MOBR Systems (https://www.mobr.ai). 

<br>

> Names of team members

**Dr. Rafael Brandao**, rafael@mobr.ai, Co-Founder, Research Scientist and COO at MOBR Systems (https://www.mobr.ai). 

<br>

### Contact

- **Contact Name:** Rafael Brandao
- **Contact Email:** rafael@mobr.ai
- **Website:** https://www.mobr.ai

### Legal Structure

- **Registered Address:** Av Paulista, 1106 Sala 01 / ANDAR 16 - Bairro: Bela Vista, Sao Paulo - SP CEP 01310914
- **Registered Legal Entity:** MOBR SYSTEMS LTDA

<br>

### Team's experience

The applicants were co-authors of the POnto ontology previously funded by the W3F [1, 2, 3]. The previous research grant [4] was delivered by MOBR, their co-founded tech startup. Before founding their company, both applicants worked as Research Scientists at IBM for 7 years. Earlier, Dr. Moreno (LinkedIn on [5]) was a postdoctoral researcher at CWI (Centrum Wiskunde & Informatica) in the Netherlands, and worked at the Pontifical Catholic University of Rio (PUC-Rio) in Brazil. Dr. Brandão (LinkedIn on [6]) worked at the TecGraf Institute, from PUC-Rio, during his doctoral studies. The team has published multiple research papers and patents, their background includes Web3, AI, Knowledge Engineering, Distributed and Decentralized Systems, Multimedia and Hypermedia Systems, Human-Centered Computing, among other research topics. 

[1] POnto source code: https://github.com/mobr-ai/POnto

[2] POnto documentation: https://www.mobr.ai/ponto 

[3] POnto scientific paper:  https://github.com/mobr-ai/POnto/raw/main/deliverables/milestone3/article.pdf 

[4] Grant Application - A Knowledge-Oriented Approach to Enhance Integration and Communicability in the Polkadot Ecosystem:  https://github.com/w3f/Grants-Program/pull/1420

[5] Dr. Moreno LinkedIn profile: https://linkedin.com/in/marcio-moreno-phd-598a459a/ 

[6] Dr. Brandao LinkedIn profile: https://linkedin.com/in/rafaelrmb/ 

For a complete list of peer-reviewed published papers and granted patents, please visit the following google scholar links
- Marcio Moreno, PhD: https://scholar.google.com/citations?user=PfdmrPUAAAAJ

- Rafael Brandao, PhD: https://scholar.google.com/citations?user=3ta0InEAAAAJ

<br>

### Team Code Repos

MOBR Systems:
- https://github.com/mobr-ai

Our personal repos:
- https://github.com/mfmoreno
- https://github.com/rbrandao


### Team LinkedIn Profiles (if available)

- https://linkedin.com/in/marcio-moreno-phd-598a459a/
- https://linkedin.com/in/rafaelrmb/


## Development Status :open_book:

> links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),

This proposal is aligned to the [RFP: Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/data_analysis_tools.md). 

Our R&D roadmap was conceived and kick-started before the creation of this RFP, which was presented to us during the course of our previous [research grant](https://github.com/w3f/Grants-Program/pull/1420). Nevertheless, we believe the proposed application (Polkadot Analytics Platform) is aligned with the RFP's requirements and main goals. Both aim at providing data analysis in a way that advanced non-technical users can consume, without requiring programming skills. 

<br>

> academic publications relevant to the problem,

https://arxiv.org/pdf/2308.00081.pdf

<br>

> references to conversations you might have had related to this project with anyone from the Web3 Foundation,

Medium publications about the Polkadot Analytics Platform initiative:
https://medium.com/@mobrsys/unlocking-the-future-of-distributed-ledger-data-analysis-a-step-forward-with-polkadot-4ba21e56bc34 


We had the following conversations:

- Feedback from diogo@web3.foundation during his evaluation [1] led us to the Polkadot forum, where we found interesting discussions [2,3] regarding analytic tools and similar desired features. 
- Feedback from sebastian@web3.foundation regarding our competency questions and the SQL queries already existent in the Substrate-ETL project. We will investigate these queries, to address as many as possible as defined in a deliverable in Milestone 1.
- As part of our roadmap in our previous research grant, we had a collab session with participants from the W3F grants team. We created a set of activities in Mural, engaging with domain experts to inspire a discussion around POnto modeling, as well as to gather their view around a prospective data analysis tool and its requirements.

[1] https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/MOBR-Knowledge-Oriented-Framework_2_dsm-w3f.md 

[2] https://forum.polkadot.network/t/dune-analytics-style-data-service-for-polkadot-kusama/271 

[3] https://forum.polkadot.network/t/select-from-polkadot/2593/7 

[4] https://github.com/w3f/Grant-Milestone-Delivery/pull/931

<br>

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**

We expect to conclude the proposed project in 8.5 months

- **Full-Time Equivalent (FTE):**

FTE ≈ 0.85

Two PhDs each dedicating about 79 days of work (158 days in total) during an 8.5 months project. Considering 22 days of work per month, we have 187 days of work in 8.5 months, with an FTE of approximately 0.85.

- **Total Costs:** 

The total budget requested is US$ 79500 for two PhDs dedicating about 79 days of work during an 8.5 months project. Considering the average PhD daily rate of US$500 to design and develop a project.

<br>

### Milestone 1 — Knowledge-Base bootstrap

In this milestone, the focus is on constructing the foundation of the analytics platform by creating a knowledge base. The goal is to define and implement the base components for the dev environment that will be the basis for the proposed platform. This includes evolving with POnto to address queries from the [Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/data_analysis_tools.md) RFP and the Substrate-ETL project. An initial KB component (including triplestore database and basic API endpoint) will be developed to handle operations over POnto entities.

- **Estimated duration:** 1 month
- **FTE:**  0,9
- **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation/Tutorial | Documentation of the new version of the POnto Ontology, as well as the KB API.  |
| **0c.** | Testing and Testing Guide | Testing the KB API. A guide on how to query the KB. |
| **0d.** | Docker | Docker image for the KB Bootstrap. |
| **0e.** | Article | Medium post about the proposed platform roadmap and what we achieved so far. |
| **1.** | POnto Evolution | New version of POnto ontology, addressing aspects from RFP and Substrate-ETL. |
| **2.** | KB Bootstrap | Python code with KB endpoints that interact with Jena triplestore database through fuseki-server. Implementation of an initial API to handle knowledge representation. Along with, scripts to inject the knowledge representation required to bootstrap the KB. |


### Milestone 2 — Semantic ETL workflows

The primary objective of this milestone is to structure and develop processing workflows to gather raw data from the Polkadot Ecosystem. The knowledge base will dynamically maintain a formal representation of extracted data aligned with the POnto ontology. 

- **Estimated Duration:** 2 months
- **FTE:**  0,8
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation/Tutorial | Detailed documentation of the ETL process workflows.  |
| **0c.** | Testing and Testing Guide | Testing the information ETL process. A guide on how to verify the correctness of injected knowledge. |
| **0d.** | Docker | Docker images for the ETL workflows. |
| **0e.** | Article | We will write a medium post with an overview of semantic ETL workflows and their tasks. |
| **1.** | ETL pipelines | The workflows to extract, transform and load will be implemented using Apache Airflow, and will handle data |
| **2.** | Data Extraction | Extraction scripts to gather data from various Polkadot-related sources using Substrate interfaces |
| **3.** | Ontology Alignment | Scripts to perform ontology alignment with the extracted data as entities in the POnto ontology. |
| **4.** | Knowledge Injection | Scripts to inject knowledge aligned with the POnto ontology. |


### Milestone 3 — Controlled Natural Language (CNL) Engine

In this milestone, the project will develop a controlled natural language (CNL) specification that leverages the POnto ontology. CNL is a simplified form of natural language designed to be easily understood by both humans and machines. The CNL specification will allow users to interact with the Polkadot Analytics Platform using natural language queries, making the platform more user-friendly and accessible.

- **Estimated Duration:** 2 months
- **FTE:**  0,8
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation/Tutorial | We will provide comprehensive documentation for the CNL specification, explaining the grammar, syntax, and semantics of the language. The documentation will include examples to illustrate the CNL's application in querying Polkadot ecosystem data.  |
| **0c.** | Testing and Testing Guide | We will include a testing suite to ensure the correctness of the CNL implementation. The testing guide will provide instructions on how to run these tests and verify the accuracy of the CNL query specification. |
| **0d.** | Docker | We will create a Docker image that will allow users to easily set up and use the CNL tests. |
| **0e.** | Article | We will publish an article on medium explaining the CNL specification, its benefits, and its integration with the Polkadot ecosystem. |
| **1.** | CNL Grammar | Define the formal grammar for the Controlled Natural Language, specifying the rules for constructing valid CNL queries. |
| **2.** | CNL Syntax | Describe the syntax of the CNL, including the structure of queries and the allowed expressions and keywords. |
| **3.** | CNL Semantics | Explain the semantics of the CNL, detailing how queries are interpreted and translated into structured queries on the Knowledge Base. |
| **4.** | Query Examples | Provide a set of practical examples illustrating how to write CNL queries. |
| **5.** | CNL Query Validator | Develop a validator that checks the syntactic and semantic correctness of CNL queries, providing helpful feedback to users. |

### Milestone 4 — Query Engine

This milestone focuses on the development of a query engine to support the execution of CNL-based queries on the knowledge base. The query engine will be responsible for processing user queries, retrieving relevant data from the knowledge base, and providing users with query results.

- **Estimated Duration:** 6 weeks
- **FTE:**  0,93
- **Costs:** 15,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation/Tutorial | Provide comprehensive documentation for the Query Engine, explaining its components, and how to use it to execute CNL queries and retrieve data from the Polkadot ecosystem.  |
| **0c.** | Testing and Testing Guide | Implement tests to ensure the correctness of the Query Engine. The testing guide will outline the steps to run the tests and validate the Query Engine. |
| **0d.** | Docker | Create a Docker image for the Query Engine component, enabling easy deployment and usage. |
| **0e.** | Article | Publish an article on medium describing the Query Engine, its capabilities, and its integration with the CNL and Polkadot ecosystem. |
| **1.** | Query Engine | Implement the logic for executing CNL queries by translating them into SPARQL queries to fetch data from the Knowledge Base. |
| **2.** | Querying API | Implementation of endpoints to handle user queries. |

### Milestone 5 — Visualization

The final milestone focuses on delivering a UI where users will be able to integrate multiple informative artifacts to compose their custom dashboards, facilitating personalized data exploration and analysis.

- **Estimated Duration:** 2 months
- **FTE:**  0,81
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation/Tutorial | Documentation for creating and managing informative artifacts, explaining their structure, and how users can compose dashboards using these artifacts. |
| **0c.** | Testing and Testing Guide | Implement tests to ensure the correctness of informative artifacts and their integration with the Query Engine. The testing guide will explain how to run these tests. |
| **0d.** | Docker | Create a Docker image that includes the necessary components to manage and visualize informative artifacts and dashboards. |
| **0e.** | Article | Publish an article on medium detailing the concept of informative artifacts, their significance in the context of the project, and how users can leverage them to create custom dashboards. |
| **1.** | Informative Artifact Definition | Define the structure and metadata for informative artifacts, specifying how data is represented and visualized. |
| **2.** | Dashboard Composition | Develop endpoints that allow users to combine multiple informative artifacts to create custom dashboards. |
| **3.** | Visualization Libraries Integration | Integrate data visualization libraries with the project to enhance the quality and diversity of informative artifacts. |
| **4.** | Dashboard UI | Design and implement a web-based interface for users to interact with and compose their dashboards and informative artifacts. |


## Future Plans

> how you intend to use, enhance, promote and support your project in the short term, and
> the team's long-term plans and intentions in relation to it.

The platform could be leveraged and monetized via additional funding applications or a SaaS subscription model (monthly fee payments and a free tier with limited capabilities). Such a model enables a continuous maintenance and evolution of the platform afterwards.

In the short term, we will actively engage with the Polkadot community to gather feedback and improve the proposed platform's usability.

Our long-term vision is to make the Polkadot Analytics Platform a central hub for data insights and analytics within the Polkadot ecosystem. We aim to continuously enhance the platform, integrate with new data sources, and expand its capabilities based on user feedback and evolving ecosystem requirements. Additionally, we plan to explore opportunities to collaborate with other projects in the ecosystem to create a more interconnected and data-driven Web3 ecosystem. 

By achieving the proposed roadmap, we are confident that the Polkadot Analytics Platform will be a valuable tool for the Polkadot community, enhancing data-driven decision-making and fostering the growth and adoption of the Polkadot ecosystem. We are excited to contribute to the Web3 evolution and support the broader vision of decentralized, interconnected, and knowledge-driven blockchain networks.


## Additional Information :heavy_plus_sign:

> Work you have already done.

Prior to this application, the team has conducted scientific research to create an ontology  [1, 2, 3, 4] that represents the main concepts and relationships of the Polkadot Ecosystem. This ontology will support the building of the proposed data analysis platform.

In addition, we have WiP assets being developed in our recently founded [startup](https://mobr.ai).

We also previously developed a technology that became widely adopted within IBM Research. It is a toolset to deal with knowledge engineering and ontology construction. 

[1] POnto source code: https://github.com/mobr-ai/POnto

[2] POnto documentation: https://www.mobr.ai/ponto 

[3] POnto scientific paper:  https://github.com/mobr-ai/POnto/raw/main/deliverables/milestone3/article.pdf 

[4] Grant Application - A Knowledge-Oriented Approach to Enhance Integration and Communicability in the Polkadot Ecosystem:  https://github.com/w3f/Grants-Program/pull/1420

[5] https://github.com/ibm-hyperknowledge 

[6] https://ibm-hyperknowledge.github.io/possibility-link-demo-iswc2022/ 

<br>

> Previous grants you may have applied for.

https://github.com/w3f/Grants-Program/pull/1420
