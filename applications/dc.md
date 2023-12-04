# DC

- **Team Name:** dcnetio
- **Payment Address:** 12T38itAqWK2szqSBC598cy7QvQDWHsm1D33PfhkSyCqQbvm(USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

- DC: Decentralized Cloud
- DC is a DePIN,We will build a decentralized network infrastructure for developers very convenient to develop decentralized applications with their Web2.0  development experience.And the user experience of using DApps based on DC is just like using the Apps based on Web2.0.
- We provide developers with a complete gRPC interface and client SDK to enable rapid integration with the DC network services for the development of DApps.
- The DC network is primarily divided into two main components: DCStorage and DCChain. DCStorage offers decentralized cloud service functionalities for DApps, while DCChain provides consensus services for the entire DC network. It is a public blockchain developed on Substrate. We have primarily developed a Pallet called DCNode on top of Substrate to provide consensus services for the DC network. DCStorage relies on the network consensus provided by DCChain to offer data consistency and reliability for decentralized services to users.
- Our development of the DC network based on Substrate is primarily driven by the following reasons: 1. We are believers in decentralization and firmly believe that it will become mainstream; 2. Users should have control over their own data, with all applications or platforms merely serving as tools; 3. To enable users of current web2.0 to seamlessly use web3.0 DApps with zero barriers; 4. To allow developers who are accustomed to developing centralized applications to create DApps with user experiences that rival those of centralized applications, without needing to understand blockchain or other decentralized underlying technologies.

### Project Details

- The development of the DC network start at the end of 2019. It has now entered the final debugging stage, and we plan to release the public test network at the End of December 2023.
- The DC network provides a rich set of decentralized basic services for DApps, including decentralized file storage services, decentralized database storage services, decentralized storage of user blogs and comments,subscription Routing Service, account and password login services similar to Web2.0, and real-time communication routing services between users. This allows developers to focus on business logic development, and even eliminates the need to understand blockchain technology.
- The DC network is divided into two main parts: DCChain and DCStorage. DCChain is a public chain developed based on Substrate. We  developed a pallet called DCNode on the basis of Substrate to provide consensus services for the entire DC network. DCStorage is a decentralized cloud service node, and all code runs in Intel's SGX Enclave, using remote attestation to ensure that the code running on the node is trustworthy. It  has the following functions: providing decentralized cloud services for DApp; submitting data that needs to form a consensus to DCChain instead of users; supervising other DCStorage nodes based on the consensus on DCChain; responsible for providing storage reliability monitoring and active backup services for the data stored on the node to ensure that there are at least five copies of data in the network to ensure data security; using the available storage space owned by the user as a credential, the DCStorage node verifies the legality of each user's operation and is responsible for submitting the result data of the user's operation to the chain, avoiding the need for users to wait for each operation to be chained, and achieving real-time response for users during use.
- DCChain and DCStorage can both undergo upgrades through on-chain governance, allowing the entire ecosystem to evolve autonomously.
- The DCChain will focus solely on providing consensus services for the DC ecosystem and will not support developers deploying smart contracts on the chain. However, we will strive to integrate the DC network as a parallel chain into Polkadot. If developers need to, they can call various features on other parallel chains through cross-chain messages；
- The DCStorage's data exchange is primarily based on the IPFS protocol.
- To facilitate developers in quickly developing DApps, we provide a set of client SDKs. Developers can develop DApps just like developing Web2.0 applications without the need to understand blockchain technology or the underlying technology of the DC network. They only need to refer to the SDK interfaces mentioned by the DC network to quickly develop DApps. Combined with DCStorage's service client SDK, DApps can provide decentralized file storage, decentralized database access, peer-to-peer communication between users, and other services.
- We provide developers with a complete set of DApp independent development environments based on Docker. Developers can develop and debug DApps in the local development environment. Once the development is completed, they only need to switch the DApp's access to the blockchain from the development environment to the DC mainnet in order to publish it on various app markets for users to download and use.
- During the use of DApps based on the DC network, there is minimal interaction with the blockchain (most interactions are handled by DCStorage). This ensures that the user experience is consistent with that of centralized applications based on Web2.0. Users do not need to understand blockchain technology and can use DApps in the same way as Web2.0 applications without being aware of digital assets.
- The Web3 ecosystem needs Web2 functionality that keeps the underlying system decentralized.
  
### Ecosystem Fit

- The DC network focuses on providing decentralized cloud service infrastructure and complete Web3.0 application solutions. By significantly reducing the technical barriers for developers, we aim to encourage more developers to participate in the development of Web3.0 applications. Additionally, Web3.0 apps developed on the DC network can fully retain the user experience and usage habits of Web2.0, effectively eliminating the barriers for ordinary users to use Web3.0 applications. This allows more users to access Web3.0 applications, thereby promoting the development of the Web3.0 ecosystem.
- The DC network itself focuses solely on the construction of decentralized cloud services. In order to ensure the performance and purity of its functions to the greatest extent, it does not provide smart contract functionality. However, we are working to integrate the DC network as a parallel chain into Polkadot. If developers need to, they can access various distinctive features on other parallel chains through cross-chain access. Our goal is to introduce more daily applications with non-financial attributes (such as storage, blogging, social networking, and IoT access) as Web3.0 applications. When these applications require financial attributes or other distinctive functionalities, they can call the functionalities on other chains within the Polkadot ecosystem through XCMP messaging.
- In general, we aim to onboard the majority of current Web2.0 users into the Polkadot ecosystem. At the same time, we will also need the distinctive features of various parallel chains within the Polkadot ecosystem to better provide more comprehensive decentralized services for developers and users of applications based on the DC network.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Onexie
- Names of team members: lanhaidong, wangqin, huangfeng, jiangsongyue, wangfan, tangzhaochen

### Contact

- **Contact Name:** onexie
- **Contact Email:** <dcloudnetwork@gmail.com>
- **Website:** <https://www.dcnetio.cloud>

### Legal Structure

- **Registered Address:**  N/A
- **Registered Legal Entity:**  N/A

### Team's experience

We are a stable technical team. Initially, we mainly provided custom development of various web and mobile applications for clients. During this process, we have accumulated rich experience in Web2.0 development. We deeply understand the needs of Web2.0 developers and the usage habits of users in the Web2.0 environment.

### Team Code Repos

- <https://github.com/dcnetio/dcmanager>
- <https://github.com/dcnetio/dcchain>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- <https://github.com/onexie>
- <https://github.com/sandyjrust>
- <https://github.com/yimengyuanyun>
- <https://github.com/peakhuang>

## Development Status :open_book:

We have now completed the main logic development and are undergoing testing. We expect to finish internal testing in December 2023 and officially launch the external test network.

## Development Roadmap :nut_and_bolt:

### Roadmap Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 5
- **Total Costs:** $100,000 (payable in Polkadot-USDC)

### Common Deliverables

It should be assumed that, unless specified otherwise, each deliverable also includes proper testing (e.g. deliverable (0c)) and documentation of the item, including manual testing, unit testing, and benchmarking.

The following items are mandatory for each milestone:

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |  

Additionally, outside the scope of the specified milestones, we also intend to formalize the ideas in this proposal within a whitepaper. We will publish this whitepaper on our website and other media channels.

### Milestone 1 Complete internal testing

- **Estimated duration:** 2 month
- **FTE:** 5
- **Costs:** 50,000 USD

Goal: Complete internal testing.After the completion of internal testing, we will fully open source the code repositories for dcchain, dcstorage, dcmanager, and provide relevant documentation.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | DCChain | DCChain is a public chain developed based on Substrate, mainly providing consensus services for the DC ecosystem, store user account information, file and database information, cloud service space subscription information, DApp registration information, and node information on the chain. At the same time, DCChain is responsible for distributing profits to contributors to the DC ecosystem and is responsible for the inflation of the entire ecosystem's tokens. In this phase, we will complete the functional testing and open source it to the public. |
| 2. | DCStorage | DCStorage is a decentralized cloud service node program that runs in a TEE environment. It utilizes the consensus services provided by DCChain to connect nodes and form a decentralized cloud service network, providing services such as data storage for DApps, file storage, database storage, and message routing. The program itself is developed in Go and compiled based on [ego](https://github.com/edgelesssys/ego), using Intel SGX's Remote Attestation to ensure that the node program is not maliciously modified. In this phase, we will complete the functional testing and open source it to the public. |
| 3. | DCManager | DCManager is a maintenance tool for DC network services, which helps users to deploy node programs on hardware devices with one click, and maintains and tracks services such as DCChain and DCStorage. In this phase, we will complete the functional testing and open source it to the public. |
| 4. | MobileSDK | MobileSDK provides a complete set of development tools for all DApps. Developers can develop DApps like developing Web 2.0 applications without the need to understand blockchain technology, just by referring to the interfaces provided by the SDK. In this phase, we will provide a complete mobile SDK library, including support for iOS and Android. |

### Milestone 2

- **Estimated duration:** 1 month
- **FTE:** 5
- **Costs:** 30,000 USD

Goal: Improve the development of MobileSDK and provide a debugging environment to facilitate DApp developers in development and debugging.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | MobileSDK | Enable MobileSDK to be compiled into dynamic libraries that support Windows, MacOS, and Linux platforms, so that DApp developers can quickly develop desktop applications. |
| 2. | Debug_env | Based on Docker deployment, a development debugging environment can be set up to deploy the entire DC test network locally for development and debugging. Once DApp development is completed, developers can simply switch the blockchain address to that of the official DC network for access. |

### Milestone 3

- **Estimated duration:** 2 month
- **FTE:** 5
- **Costs:** 20,000 USD

Goal: Officially release the public beta of the DC network; provide comprehensive project documentation for participants to reference; develop and release the first DApp for user experience, and for other developers to reference.
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | DC | Establish a milestone to package and release DCChain, DCStorage, and DCManager. |
| 2. | Documents | This includes cloud service node operation documents, validator operation documents, DApp development assistance documents, economic whitepapers, and technical whitepapers. |
| 3. | First DApp on DC | Publish the DApp on the Apple Store and Google Play for user experience, and open-source the code for developers to reference. |

## Future Plans

- Establish an application reward program to attract more developers to participate in development and promote the ecological development.
- Join into the Polkadot ecosystem to introduce more users to the existing Polkadot ecosystem, and use Polkadot's cross-chain capabilities to introduce more functions to the DC ecosystem.
- Establish the DC Ecological Foundation to provide more support for the development of the DC ecosystem.
- Establish a community for the DC ecosystem to provide more support for the development of the DC ecosystem.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

When I was applying for a prefix for DCChain from ss58-registry, during the communication on Element with daniel_cb, he recommended it to me.
