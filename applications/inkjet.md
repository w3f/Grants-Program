# ink!jet

- **Team Name:** Parallel Polis
- **Payment Address:** Fiat USD 17.12.2023, 20:14 PST
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is *not* in response to an RFP nor a follow-up grant.

### Overview

**One liner:** VS Code Extension for Generative AI Assisted Smart Contract Development with Retrieval Augmented Generation

`Ink!jet` is a VS Code extension designed to use augmented generative AI with the intent of improving the development lifecycle of `ink!` smart contracts within the Polkadot ecosystem. Recognizing the technically intricate nature of smart contracts and the high level of expertise they demand, our project aims to simplify these complexities, thereby democratizing the creation process.

Existing generative AI have limitations in both the amount of `Rust` and `ink!` code in their training data. Our platform uses a retrieval-augmented generation pipeline with datasets of collected and generated `ink!` smart contracts to bridge this knowledge gap. Injecting vectorstore retrieved code into prompts, this system utilizes in-context learning to improve response quality. Our platform also offers an in-browswer IDE that users can use without the complications of setting up a local environment. Our goal is to enhance the productivity of existing developers through bootstrapping and assisted code interation, while simultaneously lowering the barrier of entry for new developers.

Our team's motivation for the project is twofold. First, we are supporters of decentralized technology and its potential to redefine the digital landscape. We believe that the future of blockchain depends on cross-chain interoperability, which places Polkadot at the center of this emerging need. Second, we are deeply intrigued by the potential of generative AI in software engineering. Our aim is to push the boundaries of what these AI models can achieve in novel contexts, such as the `ink!` programming language, and to explore solutions that empower developers to build within the decentralized ecosystem.

### Project Details

#### UI:

![Extension](https://github.com/yu-jeffy/ink-jet/blob/main/inkjet_extension.png)

The extension will be displayed in the primary/left sidebar of the VS Code window, replacing the file explorer when open. It will have vertically stacked sections, featuring a chat, chat settings, analysis, and templates. These will be resizable if the user wishes to view a certain section in a larger space.

The chat will be similar to the Copilot Chat feature, where the user can converse with our model, and have their prompts enhanced through the RAG pipeline. They can ask questions about documentation or general software engineering by directly messaging the model.

In order to provide coding suggestions, the user can select code within an open file and then ask a question to the model with the `@selected` keyword in the prompt. This will provide the question and the selected code to the model.

The response will be populated in the chat window. After the response is returned, the user will be asked if they wish for the response to be populated into their file. If they respond yes, the extension will replace the selected code with the response. We want to maintain asking permission in case the user wishes to retain their previous code, or code it themselves.

For the chat settings, we are opting to have them within the extension UI instead of in a separate settings tab. The settings may need to be adjusted many times for the user to find what works best, so we are prioritizing ease of access. This includes model temperature, top-k results from the RAG retrieval, and other OpenAI parameters.

Analysis will have a button and results. The button will take the current smart contract (must be open in VS Code current tab), and run it through CoinFabrik's Scout. If Scout is not installed, it will notify the user, and install it if they wish. After the vulnerability analysis is ran, the results will be displayed in the results part of this section.

Templates will have a simple dropdown, where the user can select a template to use. There will be a "Create" button, where when clicked, a new `.rs` file will be initiated in the current file directory with the template contract within it.


#### RAG - LLM Architecture

![architecture](https://jyu.llc/inkjet_arch.png)

#### Stack

We will be using the following technologies:
- Typescript/JS and Node.js (Electron Framework) for VS Code Extension
- Javascript for RAG-LLM pipeline
 - LlamaIndex and LangChain libraries for data loading, processing, embedding
 - LlamaIndex and LangChain libraries for vectorstore retrieval and LLM interaction with retrieval results
- Milvus and Weaviate for Vectorstore
- OpenAI text-embedding-ada-002 Model for Embeddings
- OpenAI for LLM (GPT-4-32k, GPT-4-1106-preview)
- ink!/Rust for Smart Contracts
- CoinFabrik Scout for Vulnerabiity Detection

#### ink! Smart Contract Vectorstore:

For our vectorstore dataset, we will source from a variety of areas. We will scrape the source code from verified contracts on ink!/WASM enabled chains, such as Astar and Aleph Zero. Github repos of example contracts will be scraped, such as [paritytech](https://github.com/paritytech/ink-examples/tree/main), [Astar WASM Showcase](https://github.com/AstarNetwork/wasm-showcase-dapps/tree/main), [Metis](https://github.com/patractlabs/metis), and others.

To compliment these examples, we will also scrape all ink! documentations available from the [ink! docs](https://use.ink/), [Substrate docs](https://docs.substrate.io/tutorials/smart-contracts/develop-a-smart-contract/), and others.

Additionally, we will use a barebones RAG-LLM pipeline with only documentation loaded to create generated examples through guided prompts. We divide our approach into categories and subcategories of smart contract purposes, including payments, transfers, lending, borrowing, vesting, escrow, NFTs, tokens, supply chain management, invoicing, real estate ownership, DAOs, decentralized identity, gaming mechanics, auctions, reputation systems, etc.

For each subcategory, we will generate at least 100 distinct examples, which should be sufficient for a diverse representation of the general purposes of smart contracts. Before adding each smart contract to the dataset, we will run, compile, test with CoinFabrik, and deploy to a local or testnet node to ensure functionality and security.

#### Relevant Work

Please see Development Status section.

#### What this project is NOT

We are not providing a for-profit product, and all usage will be free to any developers. The system and datasets will also be public, so developers can choose to host their own version of the system, with modifications if they please.

We are not providing full automation nor replacement for existing developers, this tool is designed to enhance the developement cycle and increase efficiency.

We are not claiming that this system is without fault. Though the system is aimed at mitigating errors and vulnerabilities, there is a degree of inherent randomness when using LLMs for code generation. We will provide stringent disclaimers and advice to users to rigorously test their code before deployment, and advocate for contract auditing.

### Ecosystem Fit

This project fits into the ecosystem as a developer tool. It is aimed at improving the smart contract development cycle through bootstrapping, assisted coding, and iterative feedback. 

The target audience are existing smart contract developers and those looking to start writing smart contracts.

As the programming language ink! is built on top of Rust, there exists some barriers of entry, for both Rust and ink!. 

Rust is a low level language, requiring manual management of memory and pointers. While the language has steady increases in adoption and high ratings, it remains challenging for those coming from other languages and especially new developers. In addition to this complexity, the ink! programming language introduces a handful of macros and does not rely on the standard `std` library. Moreover, managing environment variables are done with a different crate and the code is compiled into WASM instead of machine code.

Acknowledging these technical barriers, our tool aims to facilitate an easier transition towards developing in ink! through guided development. Those who already know Rust can easily step into ink! development, and have the differences in syntax explained. Those who already know ink! will be able to save time writing boilerplate and refining work-in-progress contracts. Users are continuously provided feedback on their code, which saves time spent searching documentation or posting on forums. 

At this point in time, current LLMs provide limited assistance due to the scarcity of Rust and specifically ink! code in their training data, and we aim to bridge this gap through our approach.

To the best of our knowledge, there are no existing projects that are similar at this time. In sole terms of in-browser ink! IDE's we identify the [ink! playground](https://github.com/paritytech/ink-playground) project, however we note that the deployment is not live.

## Team :busts_in_silhouette:

### Team members

Jeffy Yu

Maximilian Huber

Kevin Tang

### Contact

- **Contact Name:** Jeffy Yu
- **Contact Email:** jeff.yu@parallelpolis.llc
- **Website:** jyu.llc

### Legal Structure

- **Registered Address:** 656 W Nopal Ave Mesa, Arizona 85210
- **Registered Legal Entity:** Parallel Polis

### Team's Experience

We are a research collective conducting open source research on areas in blockchain, machine learning, artificial intelligence, and general software engineering.

Our team has an academic background in computer science, and work experience in blockchain development, machine learning, and full stack development. We are looking to bring our skills towards a project that can improve accessibility of the Polkadot developer ecosystem.

Jeffy Yu - Former full stack blockchain engineer at Paystand, a B2B payments company anchoring invoice records on the Ethereum blockchain. A member of the R&D team at Paystand, built a payment network in Rust supported by the Lightning Network to migrate invoicing towards decentralized solutions. Former full stack engineer at Lirn, a decentralized learning platform utilizing ERC-1155 tokens as educational certificates. Research Scientist at Parallel Polis, performing open-sourced technical studies on blockchain and artificial intelligence. Recently published work on Lightning Network topographies for closed payment systems, accessible [here](https://scholar.google.com/citations?user=zy7ZWqYAAAAJ&hl=en).

Maximilian Huber: Former full stack engineer at CollX Inc., experienced in building RAG retrieval systems and deploying generative AI for specific use cases. Experience building user-facing LLM-enabled applications.

Kevin Tang: Full stack engineer with primary experience in JavaScript and React.js, as well as experience in iOS-development at Priceline.com. Experience developing and maintaining systems in active deployment.

### Team Code Repos

- [https://github.com/yu-jeffy/audit.me](https://github.com/yu-jeffy/audit.me)
- [https://github.com/yu-jeffy/GreedLlama](https://github.com/yu-jeffy/GreedLlama)
- [https://github.com/yu-jeffy/PyArb](https://github.com/yu-jeffy/PyArb)
- [https://github.com/yu-jeffy/gpt-btc](https://github.com/yu-jeffy/gpt-btc)

### Team Github Accounts

- [https://github.com/yu-jeffy/](https://github.com/yu-jeffy/)
- [https://github.com/MaxHuber88](https://github.com/MaxHuber88)
- [https://github.com/tangk01](https://github.com/tangk01)

### Team LinkedIn Profiles

- [https://www.linkedin.com/in/jeffyyu/](https://www.linkedin.com/in/jeffyyu/)
- [https://www.linkedin.com/in/max-huber88/](https://www.linkedin.com/in/max-huber88/)
- [https://www.linkedin.com/in/tangk01/](https://www.linkedin.com/in/tangk01/)


## Development Status :open_book:

We have conducted extensive research on existing work and the overall feasibility of the project. Here are our findings:

To our knowledge at this time, there are currently three publications assessing the efficacy of LLMs for smart contract auto-completion and generation.
- [https://arxiv.org/abs/2308.02955](https://arxiv.org/abs/2308.02955)

This publication uses the base model without additional learning, and finds limited success, with security bugs and errors being frequent. We look to address this by providing additional context to prompts through our RAG system, which allows GPT-4 to perform in-context learning.

- [https://arxiv.org/abs/2311.10388](https://arxiv.org/abs/2311.10388)

This publication utilizes in-context learning with a retrieval system, similar to our approach. They focus solely on generating code comments, not on code itself. They find improved efficacy, which is promising as the design is similar to our system. 

However, their design is distinct from ours as they utilize CodeBert to create the embeddings, which has no Rust code in its training data. This makes it incompatible with ink! smart contracts. They also utilize an older model of GPT, GPT-3.5-turbo, which has been significantly outperformed by GPT-4 on coding benchmarks.

We aim to create an alternative system and while replicating their efficacy improvements, using an embedding model that supports Rust and a more recent GPT model, and extend functionality beyond code comment generation to smart contract code generation.

- [https://arxiv.org/abs/2309.09826](https://arxiv.org/abs/2309.09826)

This publication fine-tunes a GPT-J model on 2 million smart contracts, and tests if performance increases on writing code without security issues. While their methodology involved directly fine-tuning the model and updating the weights, and ours focuses on adding context through retrieval, the underlying concept of providing learning examples to improve performance remains similar. After the original fine-tuning, they find that insecure code was an issue in up to 70% of generations. After additional fine-tuning on vulnerable examples with vulnerability-constrained decoding, they were able to avoid insecure code generation up to 67% of the time. 

We have taken these findings into consideration, and will ensure that the contracts in our dataset are functional. CoinFabrik Scout will be utilized to mitigate vulnerabilities. Use of this tool prevents the need for cross-contamination of our functional smart contracts with vulnerable ones in the vectorstore, the separation of which would have required heavy manual code annotations and metadata tagging.

In terms of related work, we have [ongoing work](https://github.com/yu-jeffy/audit.me) studying the efficacy of vulnerability testing through RAG integrated LLMs on Ethereum Solidity smart contracts. In this study, we built a LangChain RAG-LLM pipeline, and created a vectorstore of 830 vulnerable Solidity smart contracts for retrieval. Results were promising, showing a 1.5x increased efficacy compared to [current literature](https://arxiv.org/abs/2306.12338). Using this as a proof of concept of RAG-LLM with smart contract data, we look to rebuild the pipeline towards the use case of authoring ink! smart contracts. We will construct a new pipeline from scratch, utilize LlamaIndex alongside LangChain, change the data processing and embedding methodology, and implement a much broader ink! smart contract dataset.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 3 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 — Core RAG-LLM Functionality

- **Estimated Duration:** 1 month
- **FTE:**  3
- **Costs:** 6,000 USD

|  Number  | Deliverable | Specification |
| -------: | ----------- | ------------- |
|  **0a.** | License | Open-sourced under Apache 2.0. |
|  **0b.** | Documentation | Code comments. Documentation for the prototype architecture and the setup process, explaining how a user can run a local instance of the prototype RAG system with our initial data. |
|  **0c.** | Testing Guide | Unit tests will be provided for the prototype, with a testing guide explaining how to run them. |
|  **0d.** | Docker | N/A |
|       1. | Initial Prototype | Development of a basic LlamaIndex RAG system prototype integrated with `GPT-4`, using sentence embeddings. User can interact with the pipeline through the command line, interfacing with `GPT-4` with fetched documents from `Milvus and Weaviate`|
|       2. | Data Collection | Collection of a small set of `ink!` smart contracts for initial embedding and retrieval testing. Smart contracts will be converted from `.rs` files to `JSON`, with identifying metadata. |
|       3. | Loading and Embedding Pipeline | Pipeline for loading in `ink!` smart contracts as `JSON` files, and generating embeddings to build the initial vector database. |
|       4. | Vector Database | `Milvus and Weaviate` database will be used to store embeddings from processed `ink!` smart contracts. |

### Milestone 2 — ink! Smart Contract Dataset

- **Estimated Duration:** 1 month
- **FTE:**  3
- **Costs:** 6,000 USD

|  Number  | Deliverable | Specification |
| -------: | ----------- | ------------- |
|  **0a.** | License | Open-sourced under Apache 2.0. |
|  **0b.** | Documentation | Code comments. Documentation on the vectorization of newly collected smart contracts and updating the vector database. |
|  **0c.** | Testing Guide | Unit tests for changes to loading and vectorization. Testing guide included for running these tests. |
|  **0d.** | Docker | N/A |
|       1. | Data Expansion | Collection and generation, categorization, and metadata tagging of `ink!` smart contracts to complete the dataset. Smart contracts will be locally compiled, tested with CoinFabrik Scout, and deployed to a local or testnet node to ensure functionality. Rigorous code commentation in the smart contracts to provide semantic context before vectorization. |
|       2. | Embedding Model | Replace default sentence embedding. Implement OpenAI's `text-embedding-ada-002` model, compatible with natural language and code processing. |
|       3. | Vector Database | Update the `Milvus and Weaviate` vector database to house the code-based embeddings of the complete dataset. |


### Milestone 3 — RAG-LLM Integration with Dataset, Efficacy Testing

- **Estimated Duration:** 1 month
- **FTE:**  3
- **Costs:** 6,000 USD

|  Number  | Deliverable | Specification |
| -------: | ----------- | ------------- |
|  **0a.** | License | Open-sourced under Apache 2.0. |
|  **0b.** | Documentation | Code comments. Documentation provided for the integration process, and usage instructions provided for the updated RAG system. |
|  **0c.** | Testing Guide | Unit tests updated to reflect changes in RAG system. Guide for testing the updated RAG system. |
|  **0d.** | Docker | N/A |
|       1. | RAG Integration | Integration of the new dataset and vector database with the prototype RAG system for improved retrieval. Modifiable parameters for queries, including temperature, top-k documents in retrieval, and token context size. |
|       2. | Query Handling | Updated query parsing and processing using new embedding model to improve smart contract code retrieval. Prompt rewriting of plaintext in user request to improve semantic search. |
|       3. | Testing Dataset | Create a dataset of prompts to test the output quality of RAG system, and if it generates vulnerabilities. |
|       4. | System Testing | Testing of RAG retrieval functionality with the testing dataset. Evalaute performance and efficacy for vulnerability-free code. |

### Milestone 4 — VS Code Extension Core Functionality

- **Estimated Duration:** 1 month
- **FTE:**  3
- **Costs:** 6,000 USD

|  Number  | Deliverable | Specification |
| -------: | ----------- | ------------- |
|  **0a.** | License | Open-sourced under Apache 2.0. |
|  **0b.** | Documentation | Code comments. VS Code Extension UI components and functionality documented. Instructions for use documented. |
|  **0c.** | Testing Guide | Guide on how to run tests on the VS Code extension. |
|  **0d.** | Docker 1 | N/A |
|       1. | UI/UX Design | Design and development of UI for VS Code extension. Extension will reside in primary sidebar, with multiple resizable sections. |
|       2. | VS Code Extension | Creation of the core VS Code extension functionality, including integration with our RAG-LLM pipeline, code selection access, and local file system access. This includes Chat and Chat Settings functionality. Analysis and Templates functionality will be scaffolded (see Milestone 5). |
|       3. | Usage Testing | Comprehensive testing to ensure the VS Code extension is responsive and stable. All parts of functionality will be tested. |

### Milestone 5 — Additional Features

- **Estimated Duration:** 1 month
- **FTE:**  3
- **Costs:** 6,000 USD

|  Number  | Deliverable | Specification |
| -------: | ----------- | ------------- |
|  **0a.** | License | Open-sourced under Apache 2.0. |
|  **0b.** | Documentation | Code comments. Documentation of additional features, including use cases and integration into the existing system. |
|  **0c.** | Testing Guide | Updated testing guide that includes all features of the application. |
|  **0d.** | Docker | NA |
|  **0e.** | Article | We will publish an **article** that showcases the development process, application use cases, application demo, and usage of the grant throughout the project cycle. |
|       1. | UI/UX Updates | Updated VS Code Extension to serve additional features in the application. Analysis and template section finished. Overall UI appearance polished. |
|       2. | Templates | Development of a template system for users to easily bootstrap building smart contracts. User can pick from a list of common use cases, and be provided a template smart contract to start with. |
|       3. | Smart Contract Analysis | A feature to run CoinFabrik Scout on the contract currently open in the IDE. Will install Scout if it is not installed locally. |
|       4. | Final Application Testing | System-wide testing of all features, ensuring full integration and operational stability. |
|       5. | Publishing | VS Code extension published to extension marketplace. |

## Future Plans

- We plan to set aside a significant portion of the grant funding towards ongoing OpenAI API costs and other hosting costs.
- We will secure additional funding as needed for these ongoing costs if there is substantial demand on the platform.
- We intend to maintain the platform while it is deployed, fixing any bugs or issues users find.
- We look to add additional features to the platform, including Solang support and contract deployment testing capabilities.
- We look to continuously improve the vectorstore, through gathering of more smart contract examples and vulnerability avoidance.
- We look to improve the vector search, such as optimizing semantic relations with code annotations in specific formats.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
