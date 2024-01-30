# Decentral ML
- **Team Name:** Seed Intelligence Limited
- **Payment Address:** Fiat 03.01.2024, 04:04
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This is a new funding application and is not in response to an RFP, nor a follow-up grant.

### Overview

One-liner: A Polkadot protocol for decentralised federated machine learning and collective governance.

Project Description:
DecentralML introduces decentralised federated machine learning (DFML), governed by collective consensus to the Polkadot ecosystem. Our goal is to provide a robust framework for AI model developers, organisations, and applications, enabling decentralised ownership of models while ensuring privacy and scalability. With node or on-device training protecting privacy, the ability to pool training data, collaborative AI training, and "collective" governance controls, DecentralML may transform the field of machine learning for state-of-the-art AI models (think LLMs and more) with transparent governance.

Integration with Substrate / Polkadot / Kusama:
DecentralML is built upon the Substrate framework, and leverages the Tensorflow's Federated Machine Learning library enabling seamless integration into the Polkadot ecosystem. By leveraging Substrate's flexible and modular pallet architecture, we can shortcut a lot of the overhead needed to create a chain that has a dynamic collective consensus governance approach for things like AI model weights and other safety measures along with higher level controls for licensing of the entire models, jurisdiction training rules and other multi-territorial controls.  

The project aims to be as open and flexible as possible to integrate with other project with an innovative "bring your own" (BYO) token staking economy (faciliated by Pallets such as Balances, Grandpa, Ink! etc). 

We hope for active engagement from the wider Polkadot developer network once the project is complete or even during its development. We strongly believe that this project holds the potential to transform and advance the entire AI industry.

Team Motivation:
Our team is driven by the urgent need to challenge the dominance of centralised corporates like Facebook, OpenAI, Microsoft, etc, in the field of AI model development. These companies have built powerful models that require significant computing power and data, are not environmentally efficient, limit access to AI capabilities and, potentially, create a safety threat to humankind. We believe that these models could not only be statistically improved if they were decentralised, but also may improve power usage efficiency and reduce safety concerns by being transparently controlled by humankind on-chain, rather than a select number of corporations.

Our second motivation as Livetree involves a solution for our AI tasks, such as video processing, speech-to-text, facial recognition, scene detection, and content recommendations. We currently solve these challenges using centralised model solutions and would like to transition to a decentralised model. For further demonstrations or information on Livetree, feel free to download the free Livetree app and try speech-to-text or contact us. We will gladly provide instructions on how you can try the AI models within our app and provide the raw AI JSON processing results for object detection, landmark recognition, speech-to-text, and other AI processor outputs.

We are passionate about decentralisation and see the limitations of centralisation in terms of quality of the models, data ownership, privacy, and safety control. This has fueled our motivation to decentralise these models and create a decentralised federated machine learning module.


### Project Details

We have made significant progress in integrating TensorFlow's Federated Machine Learning (FML) library within a decentralized Polkadot Substrate environment. This innovative approach combines the power of decentralized machine learning with the robustness of Polkadot's governance and consensus mechanism. The key objectives of our project can be summarised as follows:

1. Personal data privacy: Our approach ensures that the model is trained on the local node or device, with only the model inferences synchronised through consensus. This preserves privacy as private data never leaves the device/node, protecting user data and maintaining confidentiality.

2. Improved model quality: By enabling a diverse set of nodes to contribute to the training process, our decentralized approach allows for a wider range of data inputs. This results in better model insights and intelligence that may surpass current centralised models, leading to more accurate, comprehensive and widely available models.

3. Safety and governance: The governance of consensus built within the Polkadot Substrate framework enables open collective voting on crucial aspects such as model weights, jurisdictional usage, costs, and model selection. This provides a transparent and secure environment for the future AI collective society to make informed decisions and ensures the safety and reliability of the models.



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
  - Mathias Ciliberto

 We have also made contact with wider related field researchers: 
[Dr. Philip Treleaven](http://www0.cs.ucl.ac.uk/staff/P.Treleaven/)  | [Dr Jonathan M M Hall](https://drjonathanmmhallfrsa.wordpress.com/) | [Jesse C. Cresswell](https://scholar.google.ca/citations?user=7CwOlvoAAAAJ&hl=en)


### Contact

- **Contact Name:** Ashley Turing
- **Contact Email:** at@livetree.com
- **Livetree App:** <https://livetree.page.link/8jP9>


### Legal Structure

- **Registered Address:** Freda St, London, UK
- **Registered Legal Entity:** Seed Intelligence Limited

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
|      1. | Data Management Implementation |  DecentralML, aims to establish a system of on-chain incentives and charges for the four key parties involved in the model's training and utilization. These parties are defined as: <br/><br/>i) <b>Model Engineers</b>: These are the data scientists, mathematicians, and computer scientists who develop and refine the models. <br/>ii) <b>Data Annotator</b>s: These users enrich the model by providing labels and annotations. <br/>iii) <b>Data Contributors</b>: These users enhance the model by adding gradients. <br/>iv) <b>Clients</b>: These are the licensors of the model who may wish to use the model for commercial, contribution or educational purposes.<br/><br/>Our initial step in this process involves storing the "Master" model in a decentralized storage system. This DecentralML "PUT" method will be parameterized, allowing for the selection of different storage types (e.g., 1=IPFS, 2=Another storage type). We will abstract the data management to support pluggable data storage implementations and will implement IPFS initially. Note: In the future, we would like to support different decentralised storage types to test for update speed, retrieval and caching (see [Decentralised data options for polkadot](https://wiki.polkadot.network/docs/build-storage))<br/><br/>The "Model Creator" initiates the upload by calling DecentralML methods using the Substrate Python Client library. Initially, uploading the "Master Model" and defining the "Training" parameters. These parameters include but are not limited to the following:<br/>1. The staked pool payable amount is sent by the "Model Creator" and stored on-chain as either DOT (or relevant compatible coin). These assets will ultimately be used to incentivize Data Contributors, Model Engineers, and Data Annotators.<br/>2. The percentage of the pool allocated to the Data Contributors, Model Engineers, and Data Annotators. <br/>3. The charges for Model Engineers to download the model. <br/>4. The charges for Licensors of the model to download it.<br/><br/>These DecentralML parameters will be set using the Python client library by the "Model Creator". The method will return a global unique identifier for the model.|
|      2. | Federated Learning Consensus | We will write the core of rewarding "Data Contributors". Our focus will be on supporting Google's [TensorFlow's Federated Learning](https://www.tensorflow.org/federated) implementation, given its widespread client support and the substantial commercial funding it has received for development. However, we acknowledge the limitations of this approach, particularly in relation to the [ProxyModel approach](https://github.com/layer6ai-labs/ProxyFL), and we may consider modifying TensorFlow's core FL libraries in future releases to incorporate the ProxyModel approach. In terms of specific deliverables we plan on developing two DecentralML methods:<br/><br/>1. <i>defineDataContributors([clientId], [walletaddress])</i>: This method, called by the Model Creator (MC), identifies the "Data Contributors" who are eligible to train the model. The clientId is generated by the TensorFlow FL library. It is the MC's responsibility to manage and develop the relevant Client specific applications using TensorFL client libraries. This method is expected to be called before the "Client Selection" step outlined in the "Implementation > Federated Learning Consensus" section of this application. In this context, DecentralML serves as an auditing and reward mechanism for the Data Contributors.<br/>2. <i>rewardDataContributors([clientIdArray],[0-1])</i>: This method, also called by the MC, rewards the Client for their data contribution. We anticipate this function being called after step 4, Model Aggregation, once the MC has determined a score (defined as the second parameter, ranging from 0-1). This score represents a percentage of the remaining "Data Contributors Pool" defined during the initial upload of the "Master Model". The method then allocates the assets to the Data Contributors' wallet. The advantage of this approach is that it requires minimal modifications to the TensorFlow FL library. Instead, we focus on rewarding and providing transparency for each set of gradients passed by the client, thereby incentivizing the client to contribute data to the model.<br/><br/>We will also add additional administrative methods as needed, such as the ability to upload the associated Client gradients and query the allocation on-chain.


### Milestone 2 — Collective Economy and Client Interface 

- **Estimated duration:** 4 weeks
- **FTE:** 2.5
- **Costs:** 15,000 USD


|  Number | Deliverable                  | Specification                                                                                                                                                                                                                |
| ------: | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                      | APACHE 2                                                                                                                                                                                                                     |
| **0b.** | Documentation                | We will provide both a **Gitbook with basic tutorial** and **inline documentation** of the code that explains how a user can (for example) work with governance and stake against a model and how the client interface works. |
| **0c.** | Testing and End-to-end (e2e) Testing Guide    | Comprehensive unit tests to ensure core functionality and robustness of code. Instructions on how to run the  tests will be included. End-to-end federated learning test  using the MNIST dataset for classification                                                              |
| **0d.** | Docker                       | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                |  |  |  |
| **0e.** | Robust Incentivisation Scheme                       | In response to the feedback received, we will implement a random role assignment mechanism as part of our example game logic. We also see the value in having some flexibility in role assignments, similar to the VBFL paper. This will be configurable using the strategy pattern, thereby addressing the "game theory" concerns. As in the VBFL paper, at every communication round, each device will be randomly appointed as one of the three roles defined as follows: (1) "Data Contributors" can occasionally take on the role of "machine learning worker," as described in the VBFL paper. (2) The role of "model validator" will be an extension of our existing validation processes. This role will employ advanced validation techniques like k-fold and stratified sampling to ensure the integrity and accuracy of model training. This role can be dynamically assigned as with the "machine leanring worker" and "blockchain miner" roles, adding an extra layer of robustness. (3) The "blockchain miner" role will be responsible for incorporating validated models into the blockchain.  |  |  |  |
|      1. | Collective Economy      | We plan to establish governance mechanisms related to the selection and training of models, specifically for Data Annotators and Model Engineers.<br/><br/>For Model Engineers, we will implement the following logical methods:<br/><br/>1. listMasterModels: This method returns a report listing the modelGUID, modelName, usageType, usageTypeCost, and costTokenAccept.<br/> 2. getMasterModels(licenseUsage, quantityOfPaymentCoins): This method takes the type of usage and the payable amount for that usage, returning the master model. It operates on an element of trust, with users expected to pay the appropriate amount based on the associated licensing (MIT, Apache, etc. defined on-chain for the model). While we don't anticipate this being a problem for this grant, future releases may include more sophisticated whitelists or permissions.<br/> 3. listModelEngineers(modelGUID): This method returns a list of Model Engineer (ME) wallet addresses approved to call the collectiveApprovesModel method.<br/> 4. modelEngineerUpdate(modelGUID, model, senderWalletAddress): Anyone can send their version of the model, which will be stored on-chain for review and approval. We may add more permissions to this method but the idea is to keep it as open as possible.<br/> 5. listModelEngineerUpdates(modelGUID): This method returns a report listing the senderWalletAddress, model version, block number, and updateID.<br/> 6. collectiveApprovesModel(updateID, collective member or MC sender address, reward percentage:0-1): This method approves the model to replace the "Master" model and awards the Model Engineer a percentage (defined in the parameter 0-1) from the Model Engineer pool.<br/>7. addCollectiveMember(modelGUID, walletAddress): This method adds collective members to the approval list so updates to the model by MEs can be approved. Future expansions may support issues like jurisdiction, licensing, usage, as well as parameter settings for algorithm selection and more.<br/><br/>For Data Annotators, we will implement similar logical methods:<br/><br/>1. `uploadDataForAnnotation(image, text, sound, testQuestionnaire:questionText, answerType, questionId, answerPoints:numberPointsRewarded, batchParameters)`: This method allows collective members to provide data that requires annotation. The solution design records the answer types as columns and the questions as rows, enabling a wide variety of annotation questions to be modelled depending on the model requirement.<br/>2. `getDataAnnotationQuestionnaire(modelGUID)`: This method returns a list of required data annotations and associated questionnaire information with data types as columns, offering flexibility to build a wide variety of dApps that could harness and offer various rewards to DAs.<br/>3. `submitDataAnnotationForReward(modelGUID, questionId, answer)`: This method implements a simple validation test for the submitted annotated data, with the potential for more sophisticated game theory algorithms to validate DA submissions in the future.<br/>4. `reportDataAnnotationAwards(modelGUID)`: This method returns a report of pending and allocated rewards.
|      2. | Client Interface     | We will focus on utilising Substrate api-client libraries, particularly the Python library. We won't be developing a user interface for Data Annotators or any other specific targetted party. Instead, our attention will be on integrating a Python library, which could potentially be used with applications like Jupyter Notebooks and other machine learning tools in the future. It's important to note that we anticipate commerical "Clients" will use the 'getMasterModel' method, as outlined in the Collective Economy section above.  |