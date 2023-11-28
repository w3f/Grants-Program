# WeTEE Network

- **Team Name:** WeTEE DAO
- **Payment Address:** 13Zsmt8cKKVLWTBLHC68d6jNG5cpi7ghFPGgG35gmpwqaxrz(USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

#### Background

With the development of Web3, more and more applications will be directly deployed on chain, or partially store business data on chain.  

These applications mainly use a front-end / back-end separation architecture, that is, the applications consist of a user interface and a backend built by smart contracts. In theory, any type of application can run on a network with smart contract functionality, but at the same time, these applications also need to compromise for the relatively scarce computing resources on the decentralized network and the high latency in processing business data.  

![WeTEE-To-Polkadot](https://raw.githubusercontent.com/wetee-dao/chain/main/docs/images/Grant/WeTEE-To-Polkadot?raw=true)

On the other hand, Web2 has a vast number of applications and a mature technology architecture system. When application developers migrate their Web2 applications to Web3, they are faced with challenges such as addressing the compatibility problem between application and chain, handling application deployment issues, dealing with privacy concerns regarding application business data, and figuring out how to update applications to fix security vulnerabilities.  

In a nutshell, the familiar Web2 application development and deployment paradigms currently lack viable alternatives in the Web3 domain. This gap will likely hinder the emergence of Web3 applications and delay the progression of the Web3 application market.  

#### Current Problems

- Web2 applications are typically deployed in a centralized manner, making business data prone to machine scanning.  
- After Web2 applications are adapted to smart contracts, there will be a significant performance overhead and they will face network congestion.  
- There is a risk of leakage of application business privacy data, resulting in financial losses for individuals and institutions.  
- Smart contracts have inherent limitations and face restrictions in supporting private data, GameFi, AI, metaverse, etc.  
- Web3 lacks software infrastructure similar to Web2, which cannot meet the diverse deployment requirements of Web3 applications.  

#### WeTEE Project

WeTEE is a decentralized application deployment platform integrated with a Trusted Execution Environment (TEE).  

WeTEE consists of blockchain networks and multiple confidential computing clusters, collectively providing an efficient decentralised solution for confidential computing.  

Thread-level confidential container service providers need to provide hardware devices that support Intel SGX, and they are required to use IPv4 / IPv6 to access the Internet.  

1. At this stage, Substrate is mainly used as the blockchain framework to implement application deployment and billing-related smart contract functions.  
2. After the application is deployed, its workload will be safeguarded by hardware protection to prevent data leakage. Even confidential computing providers will not be able to access the data.  
3. It integrates with the existing cloud native toolchain for developers, typically requiring no code modifications, and in special cases, only a small amount of code modification is needed.  
4. Developers can view information such as the resource usage and health status of applications in the Web interface provided by WeTEE.  

#### WeTEE Solutions

WeTEE's technological approach is an all-encompassing solution incorporating a number of leading-edge technologies, striving to deliver the most superior and secure services across all facets such as the hardware layer, encryption layer, application layer, data layer, and user layer. Its design perspective ranges from considering fundamental hardware compatibility to enhancing user experience on the front-end, demonstrating unique design considerations and processes, resulting in a solution that is not only dependable but also highly feasible in practice.  

![WeTEE-Solutions](https://github.com/wetee-dao/chain/blob/main/docs/images/Grant/WeTEE-Solutions.png?raw=true)

1. **In the hardware layer:**  
    WeTEE utilizes K3S / K8S technology to abstract underlying hardware disparities, effectively isolating compatibility issues caused by hardware variances. Concurrently, by leveraging Intel SGX, it establishes a confidential computing environment, ensuring a sufficient level of security and trust for the application's hardware operating environment.  
2. **In the encryption layer:**  
    WeTEE fully capitalizes on the characteristics of TEE, establishing Worker nodes for confidential computations. These nodes can be deployed and validate confidential microservices on the original K3S / K8S, ensuring the system's security and scalability.  
3. **In the chain management layer:**  
    WeTEE builds a high-performance decentralized organizational account, decentralized finance, and on-chain confidential computing management function by using Substrate technology. This enables WeTEE to not only serve individual developers but also provide enterprise-level services for DAO organizations' applications.  
4. **In the application deployment layer:**  
    WeTEE integrates the K3S / K8S cloud-native tech stack, inheriting agile, stable, resilient, and easily scalable features. Such a framework makes it easier to deploy complex business applications, while also supporting their updates and iterations, aiming at further eliminating potential application vulnerabilities.  
5. **In the data management layer:**  
    WeTEE adopts the "TEE Confidential Injection" approach, generating encrypted replicas among the server nodes to prevent accidental data loss, thus ensuring the security of business data.  
6. **In terms of the user experience:**  
    WeTEE provides an intuitive Web UI interface, making it easy for application developers to deploy and monitor their applications.  

### Project Details

#### Documentations

- WeTEE Product PPT: [PPT Link](https://raw.githubusercontent.com/wetee-dao/chain/f01744e08489b3c9ac6c9c61c0c3cc3e396a3302/docs/deck/weteeBP%20(%20ENG%20).pdf)  

WeTEE has streamlined the development of blockchain applications, reduced the complexity of development, and expedited the transition from Web2 to Web3.  

Developers can leverage WeTEE to effortlessly implement the separation architecture between on-chain and off-chain applications at an extremely low cost, while maintaining the original business logic, making the integration and application of blockchain technology more accessible. Cutting-edge technologies such as intelligent compilation, hybrid operation, and data layering have been integrated into WeTEE, enabling it to effectively address the core issues of deploying applications in a blockchain environment.  

![WeTEE-Overview](https://github.com/wetee-dao/chain/blob/main/docs/images/Grant/WeTEE-Overview.png?raw=true)

WeTEE allows developers to bypass the need for putting considerable time and energy into comprehending and conforming to blockchain technology, hence enabling them to swiftly concentrate on the essential function development of applications, significantly escalating development productivity.  

In the cryptocurrency world, data privacy has persistently been under the spotlight. The data privacy safeguarding mechanism utilized by WeTEE assures the security of user data throughout the computing and storing processes, ensuring user privacy rights, which brings about enhanced customers' trust in the product.  

Additionally, WeTEE adjusts the performance efficiency of both on-chain and off-chain operations to allow for faster transaction handling, thus delivering a smooth user experience and easing user interaction. Equally, WeTEE grants applications the ability for efficient iterations thereby better accommodating market variability and changes in user requirements, ensuring sustained competitive advantage for the application.  

WeTEE incorporates an intelligent compiler that possesses auto code analysis capabilities. This compiler can deeply parse the codes of Web2 applications and astutely identify the compilable sections related to business logic. WeTEE will extract these parts of code and automate its compilation into TEE application containers, improving application performance while ensuring security. The main features of the WeTEE intelligent compiler are as follows:  

![WeTEE-Deploy](https://github.com/wetee-dao/chain/blob/main/docs/images/Grant/WeTEE-Deploy.png?raw=true)

1. **Backs Major Web Development Languages:**  
    Including but not limited to Rust, Go, JavaScript, Python, C, etc.  
2. **Code Analysis Support:**  
    Facilitates static and dynamic code analysis and extracts the compilable sections.  
3. **Auto Compilation:**  
    Compilable code runs through automatic compilation in accordance with pre-set WeTEE strategies, eliminating the need for manual intervention.  
4. **Code Compilation Log:**  
    Upon completion of compilation, a detailed log will be generated, allowing developers to review the compilation process.  

WeTEE establishes a hybrid runtime for applications, functioning as middleware to enable seamless interaction between Web2 frontend and on-chain smart contracts backend. The main features of WeTEE hybrid runtime include:  

1. **Simplified Off-Chain Interface Calls:**  
    Developers can easily facilitate off-chain calls through the interface, reducing interaction costs between the application and the chain.  
2. **Mapping of Business Logic On-Chain:**  
    In face of complex application business logic, WeTEE can automatically manage its on-chain execution mapping relationships.  
3. **Private Data Off-Chain Processing:**  
    When processing data involving privacy, WeTEE will utilize off-chain computing power within the platform for privacy computations.  
4. **Scalable Computing Power:**  
    The platform's off-chain computing power, used to handle compute-intensive tasks, can be expanded to compensate for any lack of on-chain computing power.  
5. **Chain Interaction Encapsulation:**  
    The hybrid runtime encapsulates the interaction logic with the chain, allowing frontend to interact with the chain transparently, reducing privacy data leakage.  

When an application is processed by the WeTEE intelligent compiler and operates successfully within the WeTEE platform, developers typically do not have to worry about the application's running status. Nevertheless, as an application deployment platform, WeTEE still provides customers with essential and accurate application link tracking and monitoring capabilities, as well as timely fault warning and diagnostic abilities, ensuring the healthy operation of applications. The primary features of WeTEE's automated monitoring include:  

![WeTEE-Monitor](https://github.com/wetee-dao/chain/blob/main/docs/images/Grant/WeTEE-Monitor.png?raw=true)

1. **Resource Monitoring:**  
    Regular gathering and statistics of key metrics such as CPU load, memory usage, storage space utilization, etc.  
2. **Network Monitoring:**  
    Regular network status probes to perceive network changes.  
3. **Chain Status Monitoring:**  
    Regular monitoring and inspection of interactive data on the chain.  
4. **Application Health Monitoring:**  
    Regular monitoring of application response time, abnormal logs, and other metrics.  
5. **Anomaly Behavior Monitoring:**  
    Based on generic anomaly behavior monitoring models, evaluate application behavior and report abnormal behaviors.  
6. **Status Alert:**  
    Alerts will be triggered when the application's resource usage is about to exceed the threshold or when abnormal behaviors occur in the application.  
7. **Fault Review:**  
    When an application experiences abnormal operation or crashes, WeTEE can provide application logs and other data, aiding in fault review and diagnosis.  

When application developers need to update their applications to provide new features or security patches, they can fully leverage the hot update mechanism provided by WeTEE for rapid application updates. WeTEE's hot update mechanism adopts the common hot update solution for current cloud-native applications, and has the following main features:  

![WeTEE-Settings](https://github.com/wetee-dao/chain/blob/main/docs/images/Grant/WeTEE-Settings.png?raw=true)

1. **Code Hot Update:**  
    After the application code is updated, it will be automatically compiled and pushed online, reducing application downtime.  
2. **Seamless Experience:**  
    The user side can be insensitive to application updates, improving user experience.  
3. **Development Paradigm:**  
    Compatible with and supports cloud-native development habits. Application developers can continue to use familiar tools and processes.  
4. **Change Flexibility:**  
    The hot update mechanism has extended the decentralized application update method, improving the adaptability and timeliness of the application.  

WeTEE deeply comprehends the potential challenges brought by decentralized application (DApp) development and deployment, and thus independently designs a feature to achieve seamless integration and easy deployment of DApps and Web2 applications. This feature not only automates many tedious operational tasks but also ensures the stability and efficiency of deployment. The key features of WeTEE's DApp one-click deployment function include:  

1. **One-click Deployment:**  
    With just a single operation, it can automatically deploy smart contracts on-chain and initiate off-chain services.  
2. **DApp SDK:**  
    Provides a smart contract SDK for application developers, enabling rapid communication between on-chain and off-chain.  
3. **Elastic Expansion:**  
    Equipped with the ability to sense application resource usage, it dynamically adjusts the application's resource quota according to preset policies.  
4. **Application Assurance:**  
    In the event of application failure detection, it will automatically handle the situation in accordance with the application emergency plan and attempt fault recovery.  

Currently, WeTEE's application management mechanism will use a democratic-centered governance mechanism similar to Polkadot OpenGov to govern the network.   

WeTEE replaces the board with DAO and uses a reputation voting system for on-chain decision-making, allowing more people to participate in the chain governance and thus promoting better community development. You can participate in or supervise the WeTEE project research and development, and alter chain parameters by voting.  

#### Technology Stack

![WeTEE-Technology-Stack](https://github.com/wetee-dao/chain/blob/main/docs/images/Grant/WeTEE-Technology-Stack.png?raw=true)

WeTEE implements a mainstream industry layered architecture design to accurately isolate on-chain and off-chain data, with a specific emphasis on optimizing the security storage strategy for off-chain data. The primary advantage of this layered architecture is its ability to determine the optimal storage and processing solutions for diverse types of data, guaranteeing data safety and privacy, and achieving efficient resource utilization and management.  

- **On-chain Core Data:**  
    Within this layered architecture, on-chain data primarily comprises essential transaction details and key state updates. With the non-alterable and decentralized characteristics of the blockchain, WeTEE ensures that all pertinent data is impeccably recorded on the blockchain, thereby enhancing the transparency of business processes in applications and offering key support to ensure data authenticity and completeness.  
- **Off-chain Data Encryption:**  
    Considering the storage needs of certain sensitive user data and a large amount of supplementary data, WeTEE has designed an encrypted storage solution for off-chain data. This encryption scheme employs hardware encryption techniques like Intel SGX / AMD SEV, ensuring that encrypted data retains integrity and offers error tolerance and recovery capabilities, significantly reducing the risk of data leakage.  
- **Data Access Control:**  
    Simultaneously, while sensitive data is encrypted, WeTEE also incorporates proof of data ownership and stringent data access control mechanisms. By utilizing refined data access control policies, unauthorized access can be effectively prevented, thereby further securing the safety of private data.  

Through the above design, WeTEE's layered architecture, using distributed storage and dynamic scaling technology, effectively reduces storage costs. At the same time, the strict access control and encryption techniques significantly minimize the risk of information leakage, achieving efficient and safe storage for off-chain blockchain data.  

### Ecosystem Fit

Within the existing Polkadot ecosystem, there is a discernible gap for requisite application deployment service platforms suited for Web 2.5. This gap is precisely where WeTEE presents its competence - by enabling application developers to expedite the development and deployment of diverse Web 2.5 applications. This accelerates the extension of Polkadot's application realms across a plethora of industries, notably within the sectors of social media, entertainment and finance.  

Web 2.5 applications play a pivotal role in attracting a broader spectrum of Web 2 users towards the growing Polkadot ecosystem. With the expansion of these user bases, Polkadot is not only gaining traction in numerical terms but it also represents a movement towards a more balanced and decentralized internet model.  

In addition, these Web 2.5 applications are potential catalysts for introducing a multitude of new commercial models in the Polkadot ecosystem. This can have a dual effect of fostering Polkadot's growth, as well as collaborating with traditional industries for shared advancements. As such, WeTEE's role in aiding application development projects is a substantial step towards increasing Polkadot's industry footprint.  

## Team :busts_in_silhouette:

### Team members

- Team leader
  - BaiL - Senior Full-stack Development Engineer
- Team members
  - Nomad - Senior Product Manager

### Contact

- **Contact Name:** BaiL
- **Contact Email:** bai@asyou.me
- **Website:** [WeTEE](https://www.wetee.app)

### Legal Structure

- **Registered Address:** Wickhams Cay Ⅱ, Road Town, Tortola, VG1110, British Virgin Lslands
- **Registered Legal Entity:** WETEE LIMITED

### Team's experience

- BaiL  
  - 12-years full stack software development experience  
  - Solid knowledge and experience with various programming language i.e. Go,Dart,Javascript,Rust  
  - Blockchain & Substrate enthusiast  

- Nomad
  - 3-years UI/UX design experience  
  - 8-years senior product management experience, leading multiple Linux and Cloud-based products  
  - United nations sustainable development goals certificate Product Manager (UCPM) / Lean Product Manager (UCLPM)  

### Team Code Repos

- Blockchain node：https://github.com/wetee-dao/chain  
- Worker operator：https://github.com/wetee-dao/worker  
- Entry of libos： https://github.com/wetee-dao/libos-entry  

## Development Status :open_book:

We have accomplished the implementation of organization accounts and decentralized governance features based on Substrate-supported smart contracts. These accounts and governance functions accommodate tasks such as the management of organizational assets and voting-based decision making. Consequently, this establishes a transparent and verifiable method of governance for organizations.  

At the current stage, we are focused on establishing the first version of the on-chain cloud deployment platform for the project. Through Docker and Kubernetes related technologies, this module can automatically deploy smart contracts and back-end services to the blockchain with one click and invoke the computing resources of decentralized servers.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3.5 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 21,000 USD

### Milestone 1 — Build the On-Chain Module

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache License 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 01. | Substrate module: worker | This pallet provides modules for the registration and staking of miner nodes, as well as accepting proof-of-work data and detailed file hashes and addresses from miners, and also provides withdrawal functions for miners, as well as closure (which can only be executed if all services have already stopped/migrated), and also provides channels for users to complain about miner nodes.<br /> 1. Worker cluster register <br /> 2. Worker cluster mortgage <br /> 3. Worker cluster upload proof of work data <br /> 4. Worker cluster withdrawal <br /> 5. Worker cluster stop <br /> 6. Worker cluster report |
| 02. | Substrate module: app | This pallet provides users with the function of deploying and updating applications, as well as an interface for topping up applications. Users can prepay for the operation of the application, and miners can only unlock the fees paid by users after uploading proof of work.<br />1. TEE app create <br /> 2. TEE app update <br /> 3. TEE app set settings <br /> 4. TEE app recharge <br /> 5. TEE app stop |
| 03. | Substrate module: task |This pallet provides users with the function of deploying and updating periodic/temporary tasks, where users can set the execution time and cycle of tasks. It also provides an interface for users to recharge their applications, allowing them to prepay for the operation of the application. Miners can only obtain revenue after uploading proof-of-work for single-task work.<br /> 1. TEE task create <br /> 2. TEE task update <br /> 3. TEE task set execute settings <br /> 4. TEE task recharge <br /> 5. TEE task stop |

### Milestone 2 — Build the Worker Module

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache License 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 01. | TEE Image build guide | We will provide documentation to help programmers understand and execute compiling existing web2 programs into deployable mirrors on Wetee. Currently we provide documentation for compiling via Ego and Gramine. |
| 02. | App Example | We will provide example programs to help programmers understand and execute compiling existing web2 programs into deployable mirrors on Wetee. Currently we provide Examples in Golang, Python, C, C++, and Rust. |
| 03. | Worker K8S Operator |The k8s worker acts as a trusted controller in the wetee network. It securely stores deployment states, including manifests and defined secrets. Based on the manifests, the Worker uses remote attestation to authenticate the trusted execution environments of applications. <br /> 1. K8S Operator run in SGX <br /> 2. Listen to Wetee Node State <br /> 3. Worker cluster register <br /> 4. Worker cluster mortgage <br /> 5. Worker cluster withdrawal <br /> 6. Worker cluster stop |
| 04. | Worker App Deploy |The application controller of the miner node is responsible for pulling settings from the chain and synchronizing them into the k8s/k3s cluster to complete application deployment/update.<br />1. TEE app create <br /> 2. TEE app update <br /> 3. TEE app set settings <br /> 4. TEE app recharge <br /> 5. TEE app stop |
| 05. | Worker Task Deploy |Miner node task controller, responsible for executing assigned tasks, uploading execution logs, and synchronizing to the chain.<br />1. TEE task create <br /> 2. TEE task update <br /> 3. TEE task set execute settings <br /> 4. TEE task recharge <br /> 5. TEE task stop |

### Milestone 3 — Worker Proof

- **Estimated duration:** 1.5 month
- **FTE:** 2
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache License 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant. (Content, language and medium should reflect your target audience described above.) |
| 01. | Worker remote attestation as proof of work | Remote attestation module, users can use it to check the confidential running status of the application in real time. The module will automatically generate worker proof and synchronize the hash of the remote proof file to the chain. Users or challengers can verify the verification status of the worker through the proof file.<br />1. Worker cluster remote attestation service <br /> 2. Worker upload remote attestation as proof of work |
| 02. | Worker log as proof of work | Synchronize the log of application running through libos to worker, and synchronize the hash file to the chain to prove the correctness and stability of program execution, users can view the application log to determine the status of program execution.<br />1. Worker cluster upload app log of app as proof of work |
| 03. | Worker monitoring as proof of work |Through libos, synchronize the resource usage status of the application to the worker, and synchronize the hash and resource usage data of the file to the chain. The chain will calculate the resources of the application and issue rewards for the worker.<br />1. Worker cluster upload app monitoring of app as proof of work |

## Future Plans
When you express interest in the future development of WeTEE, our team is deeply encouraged, as your support leads us to believe that our code and products will achieve meaningful and valuable results.

This grant will allow us to focus on developing core features, laying a reliable business foundation for WeTEE. Upon reviewing the outcomes of our submitted grant, you will be able to easily verify WeTEE's core business using the documentation guidance and Docker examples provided by WeTEE.

The R&D of WeTEE can be divided into three major stages, each of which contains several small R&D stages or iterative cycles:
• Core R&D stage
• User experience optimization stage
• Ecosystem construction stage

During the current core development stage, WeTEE will concentrate all research and development resources on WeTEE's own development, including on-chain workers, apps, tasks, as well as K3S/K8S operators relevant to physical servers, app deployment models, task deployment models, and worker attestation models.

Once this part is completed, WeTEE will spend a small amount of time to reorganizing the code and conducting a retrospective on the completed work, after which the development will move into the next phase of core research and development.

At this stage, the R&D content mainly includes the WeTEE test/main network, the WeTEE Dapp SDK, accessing the Polkadot mainnet using CoreTime, as well as the WeTEE monitoring system and the WeTEE Web user interface.

After completing this stage of development, WeTEE will invite seed users to conduct usability testing and user acceptance testing, and operational work will be carried out in accordance with the requirements of WeTEE DAO. Following initial user feedback, targeted fixes and optimizations will be implemented to address any issues within WeTEE.

The following will enter the third phase of core R&D, which is also the last core R&D phase in the current planning. In this phase, WeTEE will dynamically allocate R&D resources to the ‘blockchain-related’ or ‘hardware-related’ fields based on user and market feedback.
• Blockchain-related:
    ◦ Integrate https://github.com/paritytech/frontier and support wallet applications such as Metamask
    ◦ Improve the multi-language version of the SDK to help users better integrate accounts and business between Web2 apps and Web3 DApps
    ◦ Improve the decentralized collaboration system of WeTEE, allowing WeTEE users to view the status of application clusters and application deployment events at any time
• Hardware-related:
    ◦ Compatibility with AMD SEV confidential solution
    ◦ Compatibility with Intel TDX confidential solution
    ◦ Performance optimization of confidential computing, distributed storage, and network for server K3S/K8S.

## Additional Information :heavy_plus_sign:

The subproject DTIM of WeTEE won the first prize at the [Polkadot Hackathon 2023 Summer](https://dorahacks.io/hackathon/polkadot-hackathon-2023-summer/results).  
