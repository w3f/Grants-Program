# Kumulus Cloud

- **Team Name:** Relai Network
- **Payment Address:** 15ZybdjAomB2gYWzY9mC1iPCK72zKCuJ14jZmjQ8FsFXphmV (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Kumulus Cloud Marketplace

This application serves as a follow-up grant  of the previous work [Futur Protocol](https://github.com/w3f/Grants-Program/pull/2168). This current project, titled Kumulus Cloud, stands as an important component in the Relai Network, specifically functioning as its decentralized compute and storage layer.

In this iteration of the project, we aim to establish and validate the efficacy of a decentralized infrastructure for compute and storage. To achieve this, we are leveraging a marketplace model similar to that of the [Akash Network](https://akash.network/) protocol, which has demonstrated significant success in decentralized cloud services. The marketplace approach allows us to harness a wide array of distributed resources, thereby enhancing scalability, redundancy, and data sovereignty across the network.

See this article explaing [the Rise of Decentralized Compute
](https://akash.network/blog/the-rise-of-decentralized-compute/)

This application marks the initial phase in realizing the Relai Network's vision for its Decentralized Compute pillar. Serving primarily as a Proof of Concept (PoC), it is not only crucial for validating the fundamental components and principles but also acts as the foundational infrastructure upon which the Futur Protocol and other related components—both internal and external—will be built.

### Project Details

The project is based on a crucial component called [Kata Containers](https://katacontainers.io/), which combine the speed and efficiency of traditional containers with the robust security features of virtual machines.
Kata Containers is defined as following in the official website

>Kata Containers is an open source community working to build a secure container runtime with lightweight virtual machines that feel and perform like containers, but provide stronger workload isolation using hardware virtualization technology as a second layer of defense.

 Utilizing `Kata Containers` allows us to enhance the security and isolation of our containerized workloads without sacrificing the performance benefits associated with containerization.

Key features of Kata Containers include:

- **Security**: Kata Containers enhance security by running each container within its own dedicated and isolated kernel. This isolation is supported by using multiple hypervisors, which significantly reduces the risk of malicious attacks or breaches that could compromise the containerized workloads.

- **Compatibility**: One of the standout features of Kata Containers is their compatibility with existing container ecosystems. They work seamlessly with popular platforms like Docker and Kubernetes, facilitated by the kata-runtime, which replaces the default container runtime to integrate smoothly without disrupting existing operations.

- **Performance**: Despite their enhanced security features, Kata Containers deliver consistent performance comparable to traditional Linux containers. This performance is maintained across various architectures, ensuring that users do not have to compromise on speed or efficiency for added security.

- **Simplicity**: Kata Containers simplify the architecture required for secure containerization. They eliminate the need for nested containers within VMs, which can degrade performance and complicate management. This simplicity is critical in maintaining the speed and agility of container-based deployments.

In addition to the aforementioned features, Kata Containers are particularly significant for the Relai Network, especially as we expand our suite of protocols. The implementation of Kata Containers is not just about  bringing marketplace capabilities via Kumulus Cloud but is also integral to the functionality of other network components, such as the existing Futur Protocol and the upcoming Fusion Protocol.

Here is a diagram of how Kata works 

![Figure 1-1](https://raw.githubusercontent.com/RELAI-Network/docs/main/archi/kata.png?raw=true)


#### Components of Kumulus Cloud

- ** Kumulus Runtime Modules:** Substrate modules representing the backbone of the decentralized cloud computing marketplace handling the logic for resource management such as leasing/renting compute, heartbeat checking, etc..

- ** Kumulus Provider stack:** A suite includes software and/or scripts designed to install, configure, and run `Kata Containers` to be served in the marketplace.

- ** Kumulus Console:**  Web app console to facilitate the deployment, management, and monitoring ressources on Kumulus for both providers and container users.
here are simple [wireframes](https://docs.google.com/presentation/d/19exzcRMxv5_4vFF5lSqEGOR2io1qieqk78wKxzQePT0/edit?usp=sharing)


Here is a diagram of Kumulus Stack and Relai Blockchain integration



![Figure 1-1](https://raw.githubusercontent.com/RELAI-Network/docs/main/archi/kumulus-archi.png?raw=true)

A simplified diagram of resource listing as well as leasing by compute providers and users.

![Figure 1-1](https://raw.githubusercontent.com/RELAI-Network/docs/main/archi/kumulus-list-lease.png?raw=true)


### Ecosystem Fit

Kumulus Cloud audience is wide and include :

- Components of Relai Network such as  Futur Protocol, Fusion Protocol,...
- Polkadot Ecosystem projects
- Traditional web2 and web3 projects.

Another diagram of who Kumulus will serve

[Figure 1-1](https://raw.githubusercontent.com/RELAI-Network/docs/main/archi/kumulus-eco.png?raw=true)

## Team :busts_in_silhouette:

### Team members
- Mor GUEYE
- Bienvenu Agbavon: [github](https://github.com/bienvenuelisis/)

### Contact

- **Contact Name:** Mor GUEYE
- **Contact Email:** gueyemor2009@gmail.com
- **Website:** [relai.network](https://relai.network/)

### Legal Structure

- **Registered Address:** Sicap Mbao, Dakar Senegal
- **Registered Legal Entity:** Ridone Technologies.

### Team's experience

**Mor** is a seasoned software engineer with over a decade of experience in the field. He has been involved in numerous projects related to web2 and web3 development. On Web3 side, he has contributed to Polkadot ecosytem projects such as Ternoa and Pendulum chain.

**Bienvenu** is a fullstack developer but also a UI craftsman and have worked in several projects web and mobile projects and is taking care of the UI side on Relai Network. 

### Team Code Repos

| Domain | Repo |
| - | - | 
| Relai Network blockchain | https://github.com/RELAI-Network/relai-network |
| Futur Console | https://github.com/RELAI-Network/futur-console-react |
| Futur Store app | https://github.com/RELAI-Network/futurstore-app |
| Kaggu Ebook Reader | https://github.com/RELAI-Network/kaggu |
| Backend Functions | https://github.com/RELAI-Network/relai-fn |
| Kumulus | https://github.com/RELAI-Network/kumulus |

### Overview

- **Total Estimated Duration:** 1,5 Months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 10000 USD

### Milestone 1 — Futur Protocol

- **Estimated duration:** 1,5 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **gituhb repo readmes** that explains how to deploy mobile app on the FuturStore. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. The **github  repo readme** we will also describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Articles |Articles explaining the Kumulus stack will be published. |
| 1. | Kumulus Runtime Runtime modules | Suite of pallets that will contain the logic of the Kumulus Cloud Marketplace |
| 1.a | **Resource Management Pallet** | Manage the listings of compute resources by providers.|
|  | `create_listing(resource_details)` |Allows a provider to list a new resource with details such as compute capacity, lease duration options, and pricing. |
|  | `remove_listing(resource_id)` |Allows a provider to remove a listing from the marketplace.|
| 1.b | **Lease Agreement Pallet** | Handle the creation and management of lease agreements between providers and users.|
|  | `create_lease(resource_id, lease_terms)` | Initiate a lease agreement based on a specific resource and terms (like duration and price agreed upon). |
|  | `terminate_lease(lease_id)` | Terminate an existing lease, either at the end of the term or prematurely based on specified conditions. |
| 2. | Kumulus Console | Web portal for compute providers and app developers. it represent the marketplace where provider can manage (lease,...) their compute resources and  developer can purchase compute powers and manage their containers|
| 3. | Kumulus Provider Software | Software stack (Scripts, Kata Containers installers, wrappers,... ) to be installed and run by the providers on the machine(or VM) they want supply compute from. It will also include heartbeat mechanism for healthcheck of leased resources and report on console backend |

## Future Plans
- Implement Fusion protocol MVP
- Migrate Futur protocol backend to Kumulus on next iterations.
- R&D about decentralization to Kumulus style of decentralized cloud service
- Improvement(including futur plans announced on first grant application)
- Expansion
