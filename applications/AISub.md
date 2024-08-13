# AISub - Decentralized AI model operation and payment ecosystem

- **Team Name:** Polket
- **Payment Address:** 0xd35f9Ea14D063af9B3567064FAB567275b09f03D(ETH-USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Where did the idea come from?

**AISub** is to build a global, decentralized ecosystem for running and monetizing artificial intelligence models through the Polkadot blockchain. Our platform will enable users to easily access and utilize AI models without needing to understand the complexities of machine learning or manage cumbersome infrastructure. We aim to democratize AI technology, breaking the monopoly of the traditional AI sector, and allowing model creators, compute providers, and AI service consumers to freely collaborate, innovate, and receive fair compensation on our platform. By integrating resources and incentive mechanisms, we will drive the decentralization of the AI field, enabling everyone to participate in the development and use of AI with minimal barriers. This will unlock the full potential of AI and provide seamless, secure, and reliable AI services to users worldwide. The project will fully leverage the decentralized advantages of the Polkadot blockchain to ensure transparency, security, and cross-chain interoperability on the platform, ultimately realizing the democratization and widespread accessibility of AI models.

### Overview

- **Tagline:** Building a global, decentralized ecosystem for AI model execution and payment.
- **Project Description:** AISub is a platform built on the Polkadot blockchain that aims to integrate global AI models and computing resources, allowing users to easily access AI models without requiring a complex technical background. Through a decentralized incentive mechanism, model creators, compute providers, and third-party AI service buyers can fairly earn rewards. The platform supports both public and private models and uses decentralized assets on Polkadot for payments and revenue distribution, promoting the democratization and accessibility of AI technology.
- **Relation to Polkadot:** This project leverages Polkadot's cross-chain interoperability, decentralized security, and efficient transaction capabilities to enable decentralized AI model execution and payments. Through Polkadot, users can make payments using decentralized assets without relying on traditional payment channels.
- **Team Interest:** Our team is committed to making AI technology more accessible, enabling more people to benefit from AI. Polkadot’s decentralized nature and cross-chain technology provide the ideal technical foundation for this vision. Therefore, we aim to bring AI technology into the blockchain space through this project, driving the decentralization of AI development globally. Our core objectives are as follows:

#### Core Objectives
1. **Lowering the Barrier to AI Use:** Provide a simple and user-friendly interface and tools, enabling users to utilize AI models without needing specialized knowledge in machine learning.
2. **Decentralized Resource Integration:** Integrate global computing power and AI model resources through Polkadot's decentralized network to create a self-sustaining ecosystem.
3. **Incentive Mechanism:** Establish a clear incentive system to ensure that model creators, compute providers, and service buyers are fairly rewarded.
4. **Coexistence of Public and Private Models:** Allow model creators to choose whether to make their models public or private, meeting different user needs and privacy requirements.
5. **Cross-Chain Payments and Revenue:** Utilize Polkadot’s cross-chain interoperability to enable convenient payments and revenue distribution through decentralized assets.



### Project Details

![AISub Logo](https://raw.githubusercontent.com/AISubtrate/AIsubBuild/master/logo.jpg)

We have a clear vision of the expected final state of the project, and the following outlines the specific implementation details:

- **UI Design:** We will design a user-friendly web platform that allows users to browse, select, and invoke AI models. The initial UI components include a model marketplace, personal account pages, payment interfaces, and more.
- **Data Models/API Specifications:** The core functionalities of the platform will include model publishing interfaces, compute provisioning interfaces, and payment APIs. These interfaces will interact with on-chain data through Polkadot to ensure data security and transparency.
- **Technology Stack Overview:**
  - Backend: Rust, Substrate, Polkadot JS API, Golang (for example AI provider integration)
  - Frontend: Vue, Polkadot JS, Web3.js, Tailwind
  - Data Storage: IPFS (for model storage)
  - Network: Polkadot Mainnet
  - Protocol: We will encapsulate a gRPC protocol for AI providers/consumers, referred to here as the **AIStream Protocol**.
- **Core Component Documentation:** We will provide detailed technical documentation for each core component, including architecture design documents, API specifications, and development guides.
- **PoC/MVP:** We are currently in the PoC (Proof of Concept) phase and have implemented basic model uploading and invocation functionalities. In the upcoming iterations, we will add payment and revenue distribution features.
- **Project Limitations:** This project does not provide its own AI model development capabilities, focusing instead on model execution, payments, and resource integration.

![AISub_Timeline](https://raw.githubusercontent.com/AISubtrate/AIsubBuild/master/AISub_Timeline.jpg)

#### User Interface Product Overview

The design of the user interface (UI) on the AISub platform aims to provide an intuitive and comprehensive interface that allows users to easily manage and monitor their AI model usage. By integrating the `user-pallet` module, the user interface offers the following key features:

1. **Model Usage Query**:
  - Users can effortlessly view their history of AI model calls through the user interface. This feature not only shows the total number of model calls but also provides detailed information for each call, including timestamps and related parameters.
  - Users can filter and sort their usage records based on time periods, model types, and other criteria, enabling them to better understand their usage patterns and frequency.
  - Additionally, the platform offers detailed usage statistics, including model call success rates, response times, and resource consumption, helping users evaluate model performance and cost-effectiveness.

2. **Review Management**:
  - Users can view their reviews of the AI models they have used through the user interface. Each review is linked to a specific model call record, allowing users to reflect on their feedback for each experience.
  - The platform also supports immediate reviews after using a model, enabling users to rate and leave detailed feedback on their experiences. These reviews will be stored on-chain and used for future model optimization and recommendation algorithms.
  - Users can manage and edit their review records. If they have new insights about a particular review, they can modify or add to their feedback at any time.

3. **User Interaction and Feedback**:
  - The user interface is not just a query tool; it also provides various ways for users to interact with the platform. Users can submit their opinions and suggestions through the interface or seek support when encountering issues.
  - Additionally, the user interface includes a dedicated feedback section that allows users to view other users' reviews and feedback on the same model, helping them make more informed decisions.

4. **Personalized Recommendations**:
  - Based on user usage records and review data, the user interface automatically generates personalized AI model recommendations. The platform analyzes the user's historical usage, combined with model ratings and performance metrics, to recommend models that best meet their needs.
  - Users can also adjust the recommendation algorithm's preferences, choosing to prioritize high-performance models or cost-effective options, thereby achieving a more personalized recommendation experience.

5. **Model List Retrieval**:
  - Users can retrieve a list of available AI models through the user interface. Each model comes with detailed descriptions, including functionality, input format requirements, and estimated runtime, helping users make informed choices.
  - The model list supports various filtering criteria, such as model type, provider, and ratings, allowing users to quickly find the most suitable models for their needs.

6. **Model Execution and Result Retrieval**:
  - Users can initiate AI model execution requests directly from the user interface by following a specified JSON format. Users only need to input the required parameters, and the platform will automatically send the request to the blockchain and assign the appropriate model provider to handle it.
  - Once the model execution is complete, the user interface will automatically retrieve and display the results from the blockchain, ensuring transparency and data security throughout the process.
  - The platform offers real-time notifications, so users can be instantly notified when the model execution is complete and can view detailed execution results and related statistics.



#### Supplier Product Overview

![AISub_Timeline](https://raw.githubusercontent.com/AISubtrate/AIsubBuild/master/AISub_Supplierwork.jpg)


On the AISub platform, suppliers (model providers) can easily manage and publish their AI models through a specially designed interface and functional modules. Here are the key features available for suppliers:

1. **Create Model**:
  - Suppliers can create and publish new AI models through the platform. During model creation, suppliers need to provide detailed information about the model, such as model name, description, input/output format, intended use, etc.
  - The platform supports uploading model files or referencing external models via links, ensuring that suppliers can flexibly publish their model resources.
  - After creating a model, suppliers can choose whether to make it public (available to all users) or private (available to specific users only), catering to different application scenarios and privacy needs.
  - **When using open-source models**, suppliers must include the corresponding open-source license. This ensures compliance and respects the contributions of the open-source community. Suppliers must clearly specify the type of license used and upload the relevant license files to the platform during the model's publication.

2. **Create Version**:
  - To support continuous updates and improvements, the platform allows suppliers to create multiple versions of an already published model. Each version can have different enhancements and updates, with detailed records of the differences between versions.
  - When creating a new version, suppliers can describe the updates, improved features, and any changes that may impact model performance.
  - Users can choose to use a specific version of a model when invoking it, ensuring that they always have access to the version that best suits their needs.

3. **Pricing and Charging**:
  - Suppliers can set usage fees for their models. The platform offers various pricing strategies, allowing suppliers to set fees based on usage frequency, time, computational resources consumed, and other factors.
  - Suppliers can choose between fixed pricing or dynamic pricing models. Dynamic pricing allows for adjustments based on model demand and market conditions, enabling more flexible pricing strategies.
  - **When using open-source models**, suppliers must include the corresponding open-source license. This ensures compliance and respects the contributions of the open-source community. Suppliers must clearly specify the type of license used and upload the relevant license files to the platform during the model's publication.
  - All payments and revenue distributions will be handled through decentralized assets on the blockchain, ensuring transparency and security in transactions.

4. **Output Model Execution Results**:
  - After receiving a user's AI model execution request, suppliers can directly output the results to the blockchain through the platform.
  - The platform provides a standardized API, enabling suppliers to efficiently process model execution requests and securely and transparently deliver the results to users.
  - Suppliers can also review the model's execution logs and performance metrics, helping them analyze model performance and make continuous improvements based on user feedback.

5. **AIStream Protocol Integration**:
  - To simplify the onboarding process for suppliers, the platform offers the **AIStream Protocol**. With this protocol, suppliers can easily integrate with the AISub platform, focusing solely on processing AI run requests from users without worrying about complex on-chain data interactions.
  - Once registered, suppliers can use the AIStream Protocol to receive AI run requests from the platform and return the processed results to the blockchain, ensuring an automated and seamless integration process.
  - By leveraging the AIStream Protocol, suppliers can focus on their core business—running and optimizing AI models—while ensuring they automatically receive compensation as user demands are fulfilled.


### Membership Program Plan

![AISub_Timeline](https://raw.githubusercontent.com/AISubtrate/AIsubBuild/master/AISub_Member_System.jpg)


We are introducing a Membership Program as part of our platform, allowing users to subscribe on a monthly or yearly basis. Under this plan, members will have access to a selection of popular AI models included in the membership offering.

Additionally, we are introducing a new role on the platform: **Machine Supplier**. These providers, using the AIStream Protocol, can contribute computational power to the network without needing to manage or understand the specific AI models being used.

The membership fees collected will be distributed among all participants, including Machine Providers. Distribution will be based on several factors, including machine usage records, historical response performance, and user ratings, ensuring a balanced load distribution. Machines of the same tier will share the membership fees equally, encouraging fair and efficient use of resources.


### Ecosystem Fit

### Where and how does your project fit into the ecosystem?

 (AISub) will become an essential AI service platform within the Polkadot ecosystem, complementing existing infrastructure while adding new value through decentralized resource integration and a payment system. By focusing on AI model operation and payment within a decentralized framework, AISub enhances the ecosystem by providing a unique service that addresses the high entry barriers and centralization issues currently prevalent in AI technology.

### Who is your target audience?

Our primary target audience includes AI model developers, node operators providing computational resources, and third-party application developers seeking to leverage AI services through blockchain technology.

### What need(s) does your project meet?

- **Lowering the Barrier for AI Adoption**: AISub meets the demand for simplified AI access by providing a user-friendly platform that allows individuals without deep technical backgrounds to easily access and utilize AI models.
- **Decentralized Resource Integration**: The project enables a fair revenue model for resource providers, ensuring that those contributing AI models and computational power can earn rewards in a decentralized and transparent manner.

### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

No similar projects currently exist within the Polkadot ecosystem. While there are decentralized projects focused on computational resource integration, they typically do not specialize in AI model operation and payment. This uniqueness positions AISub as a distinctive and valuable addition to the ecosystem.

## Team :busts_in_silhouette:

### Team members

- **Zack Mai**: CEO. He once served as the development leader of cryptocurrency wallet system of [Bitbank](https://www.bitbank.com/). In his spare time, he has developed some open-source iOS projects, such as [Bitcoin Multisig wallet](https://github.com/zhiquan911/chance_btc_wallet) and [CHKLineChart](https://github.com/zhiquan911/CHKLineChart). Now he is responsible for the development of openwallet framework, which supports more than 70+ blockchain protocols.
- **Luka Liang**: System architect engineer. Now he is responsible for the back-end development of the openwallet.link enterprise-level digital-assets management system, and provides more than 70+ main chain assets and token asset custody services for digital financial companies.
- **Hoek Chen**: System development engineer. Now he is responsible for the development of the openwallet developer platform, which provides APIs to help developers quickly build cryptocurrency wallet applications.

### Contact

- **Contact Name:** Luka Liang
- **Contact Email:** kencani16@gmail.com
- **Web site:**(http://syz.ltd/)

### Legal Structure

- **Registered Address:** Zhongshan Meiju Industrial Park, 6th Floor, Building 9.
- **Registered Legal Entity:** Zhongshan Shangyuzhou Technology Co., Ltd.

### Team's experience

Our team has developed the [openwallet](https://github.com/blocktree) framework and redefines a wallet system model compatible with multiple blockchains. At the same time, we have build an openwallet developer platform, which integrates 70+ blockchain protocols, which greatly reduces the cost of developers and users.

Our team also uses the [openwallet developer platform](https://www.openwallet.cn  - ) to provide enterprises with blockchain-related development services, such as: cryptocurrency wallets, enterprise-level cryptocurrency management systems, multi-chain multisig wallet systems.

Our team also uses the [3w](https://3w.com), a decentralized system that seamlessly integrates traditional finance with digital assets, fiat currency, virtual credit cards, trust funds, and social networking features.

### Team Code Repos

- https://github.com/AISubtrate
- https://github.com/blocktree
- https://github.com/zhiquan911
- https://github.com/godaddy-x


## Development Status :open_book:

- We have established an initial **Substrate template chain** and completed the development of several key modules.
- The **frontend design** has begun, with preliminary layouts and interfaces created as the foundation for the user interface.
- We have integrated the **OpenAI API** as part of our service testing, using it as the core subject for our testing framework.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  4 FTE
- **Total Costs:** $30,000 USD

### Milestone 1 - Complete the text part AI interaction of AI Sub, as well as the construction and operation of the front-end page, and the demo of the supplier part.

- **Estimated duration:** 2 month
- **FTE:**  4
- **Costs:** 15,000 USD

| Number | Deliverable                                      | Specification                                                                                                                                                                                                                                 |
|-------:|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                                          | GPL-3.0                                                                                                                                                                                                                                       |
|    0b. | Documentation                                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
|    0c. | Testing Guide                                    | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                             |
|    0d. | Docker                                           | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
|     1. | pallet-user                                      | `record_usage_history()`: Record the user's history of using modules<br>`add_favorite_module()`: Add a module to the user's favorites<br>`get_usage_rate()`: Retrieve the usage rate of specific modules |
|     2. | pallet-supplier                                  | `register_supplier()`: Register a new supplier<br>`heartbeat()`: Implement supplier heartbeat check<br>`get_evaluation_history()`: Retrieve historical evaluations<br>`get_pool_rewards()`: Obtain pool rewards |
|     3. | pallet-currencies                                | `transfer()`: Transfer funds between accounts<br>`mint()`: Mint new currency tokens<br>`burn()`: Burn existing currency tokens<br>`get_balance()`: Retrieve balance for a specific account              |
|     4. | pallet-model                                     | `create_model()`: Create a new AI model (supplier only)<br>`create_model_version()`: Create a new version of an existing model<br>`initiate_model_execution()`: Start the execution of a model<br>`initiate_model_quotation()`: Start a model quotation order<br>`pay_for_model_order()`: Process payment for a model order<br>`generate_model_result()`: Generate and store the results of model execution |
|     5. | Vue front end: Initial page and text part AI interaction support | Complete the interaction between the front-end page and Polkadot using Polkadot JS, with priority given to implementing text chat and interaction with text type AI models.                                                                   |
|     6. | AI supplier demo: Text part                      | As an example of text type access for AI suppliers, the language is Golang.                                                                                                                                                                   |
|     7. | AIStream Protocol: Doc , goSDK ,tsSDK            | Protocol documentation for monitoring AISub usage and serving suppliers, as well as the corresponding Golang version of the SDK.                                                                                                              |



### Milestone 2 - Complete version: Includes image and video part of AI interaction, more extensive support for AIStream Protocol, more improved front-end, and membership module.

- **Estimated Duration:** 1.5 month
- **FTE:**  4
- **Costs:** 15,000 USD

| Number | Deliverable                                                       | Specification                                                                                                                                                                                                                                                                                                                            |
|-------:|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                                                           | GPL-3.0                                                                                                                                                                                                                                                                                                                                  |
|    0b. | Documentation                                                     | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                            |
|    0c. | Testing Guide                                                     | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                        |
|    0d. | Docker                                                            | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                            |
|     1. | pallet-member                                                     | `create_membership_plan()`: Create new membership plans (admin only)<br>`purchase_membership_plan()`: Allow users to purchase a membership plan<br>`join_membership_plan_as_supplier()`: Suppliers join a membership plan to offer their models<br>`join_membership_plan_as_machine_supplier()`: Machine suppliers join a membership plan to perform calculations for models and receive pool rewards |
|     2. | pallet-machine-supplier                                           | `create_machine_service()`: Create and register a machine service for running AI models<br>`penalize_slow_performance()`: Penalize machines for slow performance<br>`penalize_failure_to_run()`: Penalize machines that fail to run models as required |
|     3. | Vue front end: Initial page and image part AI interaction support | Support image type JSON input and output, can directly input images for editing                                                                                                                                                                                                                                                          |
|     4. | Vue front end: Initial page and video part AI interaction support | Support video type JSON input and output, can directly input videos or images for editing                                                                                                                                                                                                                                                |
|     5. | AIStream Protocol: Doc and ts-SDK                                 | Protocol documentation for monitoring AISub usage and serving members, as well as the corresponding Golang version of the SDK and TypeScript version of the SDK.                                                                                                                                                                         |
|     6. | AI supplier demo: Image part                                      | As an example of text and image type access for AI suppliers and machine suppliers, the language is Golang.                                                                                                                                                                                                                              |
|     7. | AI supplier demo: Video part                                      | As an example of video type access for AI suppliers and machine suppliers, the language is Golang.                                                                                                                                                                                                                                       |



When the milestones in the grant are completed, we will open source the entire project.
Our projects are open source based on GPL-3.0 license.

## Future Plans

### Future Plans

1. We also plan to develop a Flutter version of the application, enabling users to access our services on more devices and platforms.
2. We aim to integrate cross-chain functionality, allowing users to use a wider range of assets to purchase AI services, thereby enhancing the availability and convenience of our services.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Substrate website.
