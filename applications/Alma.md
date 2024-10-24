# Alma Network

- **Team Name:** Alma Team
- **Payment Details:**
  - **Payment**: 0x2C4FA172fba481eD30Df275184a713503C83D62d　（USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** Level 1

## Project Overview :page_facing_up:
### Overview

ALMA is a software and also a protocol with features as follows:
- It provides an identifier entity, which is uniquely assigned to a person, an organization, or objects, etc.
- It provides a function to recover keys and data while guaranteeing self-sovereign by using secret sharing.
- It provides a data entity called "instance", which has a selective disclosure function using zero knowledge proof.
- It provides a data format entity called "schema", which has a registration function and a sharing function to unify data formats.
- It provides a network entity called "region", where independency is guaranteed by defining and managing data, permissions, and users for each region.
- It provides an autonomous coupling function between regions. It combines loose and strong coupling, whether consortium or public, to address data loss and create trust.

### Project Details

I'll write more details in Lightpaper, but I'll give an overview of how
[Lightpaper](https://alma.gitbook.io/alma)

#### Technology Stack

![image](https://github.com/user-attachments/assets/9601dfeb-69c2-4405-b780-0adc8b7a62bf)
Figure 1: Technology stack of ALMA.

Figure 1 shows the technology stack of ALMA and elemental technologies in each layer. The roles of each layer are described as follows:

* Layer 1: **Basic storage layer**. It manages data encryption and storing method, etc.
* Layer 2: **Peer-to-peer connection layer**. It manages communication between ALMA nodes.
* Layer 3: **Entity layer**. It manages the business logic of ALMA (e.g., authority management and inter-region coupling, etc.).
* Layer 4: **Application ecosystem layer**. It manages user interface such as web front or mobile apps.

These layers are implemented using the technologies in Figure 1.

#### Fundamental Entities

![image](https://github.com/user-attachments/assets/7287dde2-f33a-410e-ab9c-a9e92df11fb7)
Figure 2: Relationship between entities (ID, schema and instance).

In ALMA, there are fundamental entities, i.e, identifier, schema, and instance. Data units called instances are passed between identities. The relationship between these entities are shown in Figure 2.

* **Identifier (ID)**: An identifier assigned uniquely in each region of ALMA. ID can be assigned to people, organization, and objects.
* **Schema**: A type definition of a set of data that is passed in a region of ALMA. IDs with schema definator role can define one.
* **Instance**: A data entity created by putting actual data into a schema. Instances are issued by a signer, owned by a holder, and verified by a verifier. Each of a signer, holder, and verifier has an ID.

#### Region

![image](https://github.com/user-attachments/assets/111d5ba6-bf29-482f-94d8-b712d83dea11)

ALMA's fundamental entities, such as IDs, schemata, instances, and nodes, are managed within a unit called "**region**". Each region has its own rule and governance. A region may be a centralized system, or a decentralized one. A region may allow anyone to register a new ID, or allow only specific people. In this respect, a region is comparable to a private network on the Internet.
A region is organized by multiple participant nodes. By using MPC, keys and data are distributed among the nodes in the region in a privacy-preserving manner. A node can select regions to join and contribute, and can belong to multiple regions.

### Ecosystem Fit
Although Alma network itself is not a blockchain but a decentralized system, it can be linked with Polkadot as storage and by linking assets. 
In addition, by storing various information associated with the wallet, it can contribute to making the system even more digitally meaningful.

## Team :busts_in_silhouette:

### Team members
- IGARASHI Taisei
- MATSUBARA Yuto
- UEDA Daiki
- TAKAGI Yuki
- ABE Motohiko

### Contact

- **Contact Name:** MATSUBARA Yuto
- **Contact Email:** vc.bara.yuto@gmail.com
- **Website:** [Your website](https://github.com/AlmaNetwork)

### Legal Structure

### Team's experience

- **IGARASHI Taisei**
  - **Education and Early Achievements**
    - Studied in the Department of Computer Science and Engineering at the **University of Aizu**.  
    - Won the Grand Prize at the JP HACKS hackathon hosted by the **University of Tokyo**.
  - **Blockchain Research and Development**
    - Completed a Master's thesis on blockchain and graduated with a focus on blockchain technology.
    - Worked at Solamitsu Corporation, contributing to the **Hyperledger/Iroha** proposal to the Linux Foundation.
    - Designed and developed a national payment currency system in collaboration with the **National Bank of Cambodia** (Central Bank).
  - **Web, Server, and Mobile Development**
    - Provided services in web, server, and mobile application development.
    - Contributed to projects such as **RoyaltyBank** and **kataru**, focusing on leveraging technology to create innovative solutions.

- **MATSUBARA Yuto**
  - **Freelance & Various Projects**
    - Began his engineering career working on a variety of web development projects.
    - Worked on freelance and contract-based projects, gaining experience in web frameworks, cloud infrastructure, and modern development practices.
  - **Blockchain Engineer**
    - Developed smart contracts and Inter-Blockchain Communication (IBC) protocols for a financial technology platform, contributing to the secure and efficient transfer of assets across blockchain networks.
  - **Vice President of Engineering (VPoE)**
    - Led the engineering team at a rapidly growing startup, overseeing technical direction, team development, and product delivery.
    - Successfully managed the development of a platform utilizing deposit-backed stablecoins, decentralized identity (DID), and verifiable credentials (VC).

- **UEDA Daiki**
  - **Education and Early Achievements**  
    - Graduated with a Master’s degree in Computer Science from **The University of Tokyo**, focusing on advanced topics in computing.
  - **Image Processing Product Developer**
    - Developed image processing products, contributing to innovative solutions in the field of digital imaging.
  - **DID/VC Product Developer**
    - Currently working on the development of **Decentralized Identity (DID)** and **Verifiable Credentials (VC)** products, driving forward the next generation of digital identity solutions.

- **ABE Motohiko**
  - **kataru Inc. (2024)**  
    - Specialized in Bitcoin/Lightning Network.
  - **Questry Co., Ltd. (2022-)**
    - Focused on EVM chains.
  - **FreakOut Holdings, Inc. (2018-2022)**
    - Worked on ad:tech technologies.
  - **SORAMITSU Co., Ltd. (Part-time) (2017-2018)**
    - Worked on private chain projects, specifically Hyperledger Iroha.


### Team Code Repos

- [https://github.com/AlmaNetwork/Alma](https://github.com/AlmaNetwork/Alma)

#### Team Member
- [https://github.com/MizukiSonoko](https://github.com/MizukiSonoko)
- [https://github.com/yutonano](https://github.com/yutonano)
- [https://github.com/uedadaiki](https://github.com/uedadaiki)
- [https://github.com/takagiy](https://github.com/takagiy)
- [https://github.com/motxx](https://github.com/motxx)


## Development Status :open_book:

We are now developing towards the release of the beta version, and we are continuously looking for new team members.


## Development Roadmap :nut_and_bolt:

### Phase 1: Initial Development and Community Engagement
Develop core features including Identifiers, Credentials, and Secret Sharing.
Implement ALMA region and asset management capabilities.

### Phase 2: Public Beta and Community Building
Launch a public beta version to a wider audience to test scalability and usability.
Develop comprehensive documentation and tutorials to assist new users and developers.

### Phase 3: Full Deployment and Widespread Adoption
Roll out the full version of ALMA with all features fully operational.
Establish a governance model to ensure sustainable development and community-driven decision making.

### Phase 4: Continuous Improvement and Future Innovations
Explore new technologies and features to keep ALMA at the forefront of digital identity and asset management.
Foster a global network of users and developers continuously contributing to the ALMA ecosystem.

### Overview

- **Total Estimated Duration:** 10 month
- **Full-Time Equivalent (FTE):**  8
- **Total Costs:** 8,000USD
- **DOT %:** None

### Milestone 1 — Initial Development and Community Engagement
- **Estimated duration:** 3 month
- **FTE:**  2
- **Costs:** 3,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Provide documentation for core features, including Identifiers, Credentials, and Secret Sharing. |
| **0c.** | Testing and Testing Guide | Unit tests for Identifier, Credential, and Secret Sharing functionalities. A testing guide will explain how to run the tests and ensure robustness. |
| **0d.** | Docker | Provide Dockerfile(s) for testing Identifier, Credential, and Secret Sharing features in ALMA. |
| **0e.** | Article | Publish an article that explains the core features of ALMA and how they can be used to create decentralized identity systems. |
| **1.** | Identifier Entity | Implement a unique identifier system for individuals and organizations. |
| **2.** | Credentials | Implement verifiable credentials that can be linked to identifiers. |
| **3.** | Secret Sharing for Key/Data Recovery | Implement a secret sharing mechanism that allows users to recover keys and data autonomously. |
| **4.** | Region and Asset Management | Implement basic ALMA region and asset management capabilities. |

### Milestone 2 — Public Beta and Community Building
- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 1,000 USD

 Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Update documentation with comprehensive tutorials and guides to help new users and developers onboard with ALMA. |
| **0c.** | Testing and Testing Guide | Provide public beta tests for scalability and usability, along with detailed testing guides. |
| **0d.** | Docker | Update Docker configuration to include the public beta version of ALMA with Identifier and Region features. |
| **0e.** | Workshop | Host an online workshop to introduce new users and developers to ALMA’s beta version and its core capabilities. |
| **1.** | Public Beta Launch | Release the public beta version of ALMA, enabling the community to test and provide feedback. |
| **2.** | Community Documentation | Develop comprehensive documentation and tutorials to assist new users and developers in understanding ALMA's ecosystem. |

### Milestone 3: Full Deployment and Widespread Adoption
- **Estimated duration:** 3 month
- **FTE:**  2
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Finalize documentation for all core features, including deployment guides for the full version of ALMA. |
| **0c.** | Testing and Testing Guide | Comprehensive testing for all core and extended ALMA features, with detailed testing instructions. |
| **0d.** | Docker | Provide Dockerfile(s) for full deployment testing of ALMA. |
| **0e.** | Article | Publish an article outlining the successful deployment of the full ALMA platform and its impact on decentralized identity systems. |
| **1.** | Full Version Launch | Roll out the full version of ALMA, including Identifier, Credential, Region, and Asset Management features, fully operational. |
| **2.** | Governance Model Implementation | Establish a governance model to ensure sustainable development and community-driven decision making for ALMA. |

### Milestone 4: Continuous Improvement and Future Innovations
- **Estimated duration:** 3 month
- **FTE:**  2
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Continuously update documentation with new features and technological innovations. |
| **0c.** | Testing and Testing Guide | Regularly perform testing and provide guides for any new features introduced to ALMA. |
| **0d.** | Docker | Maintain and update Docker environments to support continuous development and integration of new features. |
| **0e.** | Community Contribution | Foster a global network of users and developers who contribute to the ongoing development of ALMA, ensuring innovation. |
| **1.** | New Technologies Exploration | Investigate and integrate new technologies to keep ALMA at the forefront of digital identity and asset management. |
| **2.** | Global Community Building | Foster an active and engaged global network of users and developers to continuously expand and improve the ALMA ecosystem. |


## Future Plans

- Since all team members are working on this project as a side venture, we are able to keep engineering costs low. Our goal is to make this an open-source project, and we intend to seek funding through programs like this grant to support its development.

- We plan to develop the project in microservice units, enabling us to provide valuable libraries to the crypto industry. This modular approach will allow for easier integration and adoption within the broader ecosystem.

- Our long-term vision is to share this system with the world as an alternative to traditional blockchain and server infrastructures, offering a decentralized solution for a more sustainable future.Please refer to this section for more details:[Background](https://alma.gitbook.io/alma/alma-lightpaper/2.-background)


## Referral Program (optional) :moneybag:


## Additional Information :heavy_plus_sign:

I have no additional information to provide at this time. There has been no prior work done, no financial contributions from other teams, and I have not applied for previous grants.






