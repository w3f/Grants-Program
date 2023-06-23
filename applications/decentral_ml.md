# Decentral ML
- **Team Name:** Livetree Community Ltd
- **Payment Address:** 0xC852e933FBB719b607A96D73b033b3523Be04374 (Ethereum USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):**2

## Project Overview :page_facing_up:

This is a new funding application and is not in response to an RFP, nor a follow-up grant.

### Overview

One-liner: A Polkadot protocol for decentralised federated machine learning and collective governance.

Project Description:
DecentralML introduces decentralised federated machine learning (DFML), governed by collective consensus to the Polkadot ecosystem. Our goal is to provide a robust framework for AI model developers, organisations, and applications, enabling decentralised ownership of models while ensuring privacy and scalability. With node or on-device training protecting privacy, the ability to share data training between organisations (nodes), collaborative AI training, and "collective" governance controls, DecentralML may transform the field of machine learning for state-of-the-art AI models (think LLMs and more) with transparent governance.

Integration with Substrate / Polkadot / Kusama:
DecentralML is built upon the Substrate framework, and leverages learnings from Tensorflow's Federated Machine Learning library enabling seamless integration into the Polkadot ecosystem. By leveraging Substrate's flexible and modular pallet architecture, we can shortcut a lot of the overhead needed to create a chain that has a dynamic collective consensus governance approach for things like AI model weights and other safety measures along with higher level controls for licensing of the entire models, jurisdiction training rules and other multi-territorial controls.  

The project aims to be as open and flexible as possible to integrate with other project with an innovative "bring your own" (BYO) token staking economy (faciliated by Pallets such as Balances, Grandpa, Ink! etc). 

We hope for active engagement from the wider Polkadot developer network once the project is complete or even during its development. We strongly believe that this project holds the potential to transform and advance the entire AI industry.

Team Motivation:
Our team is driven by the urgent need to challenge the dominance of centralised corporates like Facebook, OpenAI, Microsoft etc in the field of AI model development. These companies have built powerful models that require significant compute power and data, are not environmentally efficient, limit access to AI capabilities and, potentially, create a safety threat to humankind. We believe that these models could, not only be statistically improved if they were decentralised, but also may improve power usage efficiency and reduce saftey concerns by being transparently controlled by humankind on-chain, rather than a select number of corporations.

Our second motivation as Livetree, involves a solution for our AI tasks such as video processing: speech-to-text, facial recognition, scene detection and content recommendations. We currently solve these challenges using centralised model solutions and would like to transition to a decentralised model. For further demonstrations or information on Livetree, feel free to download the free Livetree app and try speech-to-text or contact us. We will gladly provide instructions on how you can try the AI models within our our app and provide the raw AI JSON processing results for object detection, landmark recognition, speech-to-text and other AI processor outputs.

We are passionate about decentralisation and see the limitations of centralisation in terms of quality of the models, data ownership, privacy, and safety control. This has fueled our motivation to decentralise these models and create a decentralised federated machine learning module.


### Project Details

We have made significant progress in integrating TensorFlow's Federated Machine Learning (FML) library within a decentralized Polkadot Substrate environment. This innovative approach combines the power of decentralized machine learning with the robustness of Polkadot's governance and consensus mechanism. The key objectives of our project can be summarised as follows:

1. Personal data privacy: Our approach ensures that the model is trained on the local node or device, with only the model inferences synchronised through consensus. This preserves privacy as private data never leaves the device/node, protecting user data and maintaining confidentiality.

2. Improved model quality: By enabling a diverse set of nodes to contribute to the training process, our decentralized approach allows for a wider range of data inputs. This results in better model insights and intelligence that may surpass current centralised models, leading to more accurate, comprehensive and widely available models.

3. Safety and governance: The governance of consensus built within the Polkadot Substrate framework enables open collective voting on crucial aspects such as model weights, jurisdictional usage, costs, and model selection. This provides a transparent and secure environment for the future AI collective society to make informed decisions and ensure the safety and reliability of the models.



####  Architecture Overview

#####  Logical Components

![Logical architectural components](https://cdnlt.com/decentralML/LogicalArchitecture.svg)


**Data Management**: Blockchain-based encrypted data storage system that ensures immutable data storage and securely provides data access via protocols and apis.

**Federated Learning Consensus**:Implements federated learning algorithms like Federated Averaging or Secure Aggregation for collaborative model training across distributed nodes.

**Collective Economy**: Implements decentralized governance using a collective model, to enable decision-making amongst participants to vote on model updates, protocol changes, network parameters, reputation systems, model licensing, nodes lists and incentive mechanisms to encourage active node participation, discourage malicious behavior, and reward contributors.

**Model Deployment**: Model serving frameworks (e.g., TensorFlow Serving, PyTorch Lightning) for deploying trained models for production usage, including monitoring tools and frameworks for tracking model performance, latency, and resource utilisation.

**Client Interface**: This component acts as a facade providing a universal interface to the deployed models and other aspects of the system for a range of DevTools, SDKs, and user interfaces.


#####  Implementation

**Data Management**: Current implementation uses IPFS, however, as part of the grant we plan to make this modular so other dentralised and, potentially, distributed storage systems (such as HDFS) might be dynamically utilised.

**Federated Learning Consensus**: Implements the federated learning process which involves multiple stages:
1. Client Selection: Selecting a subset of clients or nodes themselves to participate in each round of model training. 
2. Model Distribution: Distributing the initial model or updated model parameters to the selected clients.
3. Local Model Training: Clients perform model training on their local data using the received model parameters.
4. Model Aggregation: Aggregating the updated model parameters from the clients to generate a node model update. 
5. Model Update Application: Applying the node model update via consensus to the  global model.

Nodes are rewarded for successfully improving the model. This happens at "Model Update Application" stage whereabouts the global model is segregated into training, testing and results data partitions. The application of the node gradient update should result in the testing partition. If the results when compared to the testing partition prove successful then the node is awarded tokens in order to pay for the required resources—processors, memory, storage, and network bandwidth used to perform the federated learning. As part of this grant we will introduce token staking so any Polkadot compatible token can be used enabling the framework to support external token ecomonies. 

**Collective Economy**: By submitting and voting on proposals—referenda—the DecentralML community can determine what models should be trained, the thresholds for node rewards per model, clients eligible for training, and other ownership and training specifics. These include but are not limited to jurisdicational licensing fees for model deployment and other safety measures such as weights or algorithms related to the model. 

**Model Deployment and Client Interface**: The ability to interact with the models and chain will be limited to a simple Javascript/Typescript set of interfaces primarily for model submission, and parameterisation through governance.    


#### Technology stack

- Python/TensorFlow
- Rust/Substrate
- IPFS



### Ecosystem Fit

The team has engaged with core members of the Polkadot team who have shown keen interest in the convergence of federated ML and decentralization. Through active discussions with key technical leads, we have identified immense potential to revolutionise the field of artificial intelligence using the Substrate framework and the Polkadot's developer network. Our goal is to democratise and decentralise AI models development by introducing decentralised federated machine learning, surpassing the capabilities of centralised entities. With privacy protection at the core, industries ranging from healthcare to creator and social networks can benefit from our solution. 

To our knowledge, there are currently two AI-related projects in the Substrate/Polkadot/Kusama ecosystem: DeepBrainChain and BitTensor. DeepBrainChain focuses on decentralised GPU server compute, while BitTensor offers a marketplace for ranked models. DecentralML brings decentralised federated machine learning to the ecosystem, making it an exciting addition to the Polkadot ecosystem.

## Team :busts_in_silhouette:


### Team members
- Name of team leader:
- Ashley Turing
- Names of team members:
- Dr Jamie Ward
- Isak Grimsson

 We have also made contact with wider related field researchers: 
[Dr. Philip Treleaven](http://www0.cs.ucl.ac.uk/staff/P.Treleaven/)  | [Dr Jonathan M M Hall](https://drjonathanmmhallfrsa.wordpress.com/) | [Jesse C. Cresswell](https://scholar.google.ca/citations?user=7CwOlvoAAAAJ&hl=en)


### Contact

- **Contact Name:** Ashley Turing
- **Contact Email:** at@livetree.com
- **Livetree App:** <https://livetree.page.link/8jP9>


### Legal Structure

- **Registered Address:** 301 Kingsland Rd, Haggerston, London, E8 4DS, UK
- **Registered Legal Entity:** Livetree Community Ltd

### Team's experience
The team consists of computer science academics and software engineers, including Dr. Jamie Ward, a senior lecturer in machine learning at Goldsmith's University, Isak Grimson, a computer science graduate specialising in machine learning research, and Ashley Turing, an experienced computer software engineer with expertise in blockchain technologies.


### Team Code Repos

- <https://github.com/livetreetech/DecentralML>

- <https://github.com/IsakGrimsson>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/ashley-turing/> Ashley Turing

- <https://www.linkedin.com/in/jamieward/> Jaime Ward

- <https://www.linkedin.com/in/isakgrimsson/> Isak Grimsson


## Development Status :open_book:

The current whitepapers for BitSensor and DeepBrainChain
- [BitSensor](https://drive.google.com/file/d/1VnsobL6lIAAqcA1_Tbm8AYIQscfJV4KU/view)
- [DeepBrainChain](https://www.deepbrainchain.org/assets/pdf/DeepBrainChainWhitepaper_en.pdf)


Here are key publications in the field of decentralised federated machine learning:

- [Federated Learning: The Pioneering Distributed Machine Learning and Privacy-Preserving Data Technology](https://ieeexplore.ieee.org/abstract/document/9755189)
- [A novel decentralized federated learning approach to train on globally distributed, poor quality, and protected private medical data](https://www.nature.com/articles/s41598-022-12833-x)
- [Decentralized federated learning through proxy model sharing](https://www.nature.com/articles/s41467-023-38569-4)



## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2.5
- **Total Costs:** 30,000 USD

### Milestone 1 — Federated Learning Consensus & Data Management Implementation

- **Estimated duration:** 4 weeks
- **FTE:** 2.5
- **Costs:** 15,000 USD


|  Number | Deliverable                  | Specification                                                                                                                                                                                                                |
| ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                      | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation                | We will provide both a **Gitbook with basic tutorial** and **inline documentation** of the code that explains how a user can (for example) upload and train a model, this will show how the federated machine learning functionality works. |
| **0c.** | Testing and Testing Guide    | Unit test will comprehensively cover core functions ensuring both functionality and robustness. In the Gitbook, we will describe how to run these tests.                                                              |
| **0d.** | Docker                       | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |  |  |  |
|      1. | Data Management Implementation | We will abstract the data management to support pluggable data storage implementations. We would like to cater  with different decentralised storage types to test for update speed, retrieval and caching. We have thus far examined IPFS however would also investigate other potential solutions  [Decentralised data options for polkadot](https://wiki.polkadot.network/docs/build-storage)|
|      2. | Federated Learning Consensus | We will rewrite the core of the decentralised federated machine learning module. This will include examining two approaches both the [ProxyModel approach](https://github.com/layer6ai-labs/ProxyFL) and rexamining Google's implementation via [TensorFlow's Federated Learning](https://www.tensorflow.org/federated)|




### Milestone 2 — Collective Economy and Client Interface 

- **Estimated duration:** 4 weeks
- **FTE:** 2.5
- **Costs:** 15,000 USD


|  Number | Deliverable                  | Specification                                                                                                                                                                                                                |
| ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                      | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation                | We will provide both a **Gitbook with basic tutorial** and **inline documentation** of the code that explains how a user can (for example) work with governance and stake against a model and how the client interface works. |
| **0c.** | Testing and Testing Guide    | Comprehensive unit tests to ensure core functionality and robustness of code. Instructions on how to run the  tests will be included.                                                              |
| **0d.** | Docker                       | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |  |  |  |
|      1. | Collective Economy      | We will implement governance pertaining to the election and training of models, as well as, parameter settings for training. This may include the use of the Collective pallet depending on how best to solve problems like jurisdiction, licensing, usage, as well as parameter settings for algorithm selection and so on. In addition, we plan to also implement a token staking to enable any XCM compatible token to be staked against the training of a submitted model. 
|      2. | Client Interface     | The scope will be limited to extending Substrate's api-client libraries, We do not anticipate creating a UI for it rather focusing on a library integration for potential furture targets such as Jupyter Notebooks and other machine learning development tools.  |