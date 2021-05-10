# W3F Open Grant Proposal

* **Project Name:** UpLink
* **Team Name:** HypeLabs Inc.
* **Payment Address:** 3Fwmy2QHw1Xp7S956PMG9NKq1yngzRqGqf (BTC)

## Project Overview :page_facing_up:

### Overview

UpLink enables devices without Internet to connect to Substrate and Polkadot networks. The devices connect by establishing a local mesh network, using whatever connectiviy technologies are already available. This includes Bluetooth Classic, Bluetooth Low Energy, WiFi Direct, and Infrastructure WiFi. While connecting using these technologies, devices can forward content on behalf of each other, meaning that the content hops from device to device. One or more devices on the network can function as Internet relays, enabling disconnected devices to access the ledger.

<img src="https://user-images.githubusercontent.com/8101643/117965319-88c3ff80-b31a-11eb-84c5-8b38397ab8fe.png">
Figure 1. Illustration of a mesh network being used to provide a given Originator with Internet access after two hops. The Backend is where transactions are processed.

This submission aims at implementing an Android app that enables devices to act as requestors and proxies, in such a way that the requestor can borrow connectivity from the proxy to process transactions on a Substrate network. The app enables users to perform some actions, namely:

* Query their balances;
* Process transactions of funds.

### Project Details

HypeLabs proposes a solution in which a mesh network is established between devices that connect locally over Bluetooth and WiFi. Some of such devices act as Proxies, meaning that they can be used as Internet exit points for the rest of the network. This setup enables Internet access on devices that would otherwise not have it, either because they lack the necessary data plans or coverage.

<img src="https://user-images.githubusercontent.com/8101643/117962648-5fee3b00-b317-11eb-8afe-3871787c5183.png" height="250">
Figure 2. Illustration of a mesh network composed by Mesh Nodes, and how the network can connect with the Backend for the purposes of authorization and processing transactions.

A local mesh network enables an Originator to communicate with a Backend for the purposes of processing payments, by having the content hop from device to device (Mesh Nodes) until it reaches an Internet-connected Proxy. This occurs without any compromise of eavesdropping, interference, or other types of security hazards, given that none of the intermediary devices can read, interpret, modify, or forge the information exchanged.

The solution is thus composed of the following elements:

* An Originator, as the device that has the intention of requesting a transaction or some other service from the network;

* Several Mesh Nodes, giving support to the network and forwarding content on behalf of the Originator;

* One or more Proxy devices, being those the ones that are connected to the Internet at any given moment;

* A Relay Server, a network endpoint responsible for interpreting the requests.

The local network is governed by the Hype SDK, which maintains a mesh of devices, enabling them to forward content on behalf of each other. This network is maintained automatically, without the need for any form of user intervention, and provides all devices with secure links to the Backend.

The local network observes a set of properties commonly known as autonomic or self-CHOP properties. These guarantee that the network is easy to deploy and maintain, recovers from failure, optimizes content delivery to best-case scenarios, and is protected against security breaches and hazards.

Given a device with the intent of processing a transaction, it pushes an encrypted request on the network, assuming, thus, the role of an Originator. When that happens, the network relays content over multiple Mesh Nodes until it reaches any of the available Proxies. The Proxy, being in direct contact with the Backend, relays the encrypted content to a Relay Server. The Relay Server receives the content and executes the necessary instructions against the Transaction Server, effectively committing the transactions and necessary authorizations to a ledger.

When a transaction request occurs, the network cooperates to make it reach the Transaction Server, but also for the Transaction Server to respond back, giving indication to the Originator as to whether the transaction has succeeded.

#### Components

Mesh Nodes are devices running the UpLink App with an integration of the Hype SDK. Such nodes are active members of the mesh network and cooperate for Internet connectivity;

The UpLink App is an application that communicates with the Transaction Server to authorize and commit transactions;

The Relay Server is a cloud service that mediates networking protocols between the mesh network and the Server, enabling them to communicate. It also integrates the Hype SDK;

The Transaction Server is a consensus network built on Substrate;

#### Mesh Nodes

A Mesh Node is a device running the UpLink App implemented for Android 6.0 that integrates the Hype SDK. These modules are separated into three logic units, being those listed as follows:

<img src="https://user-images.githubusercontent.com/8101643/117962628-58c72d00-b317-11eb-8708-e003058f16e4.png" height="300">
Figure 3. Architecture of the UpLink App integrating the Hype SDK.

* The UpLink App implements all business logic. In the context of this project, that logic comprises of integrating and managing the Hype SDK, as well as encoding and decoding messages when communicating with the Relay Server;

* The Hype SDK is a dependency that manages the connectivity stack, with the exception of the Application and Presentation layers;

* The Radio Interfaces are software and hardware components exposed by the operating system for the purposes of direct-link communications, such as Bluetooth and WiFi. The Hype SDK interfaces these components with the operating system, mediating communications on behalf of the UpLink App.

A full integration of the Hype SDK requires the deployment of a Certification Server and an Authentication Server for which production grade implementations already exist. With this server pair, the Hype SDK can manage network access and guarantee that only selected devices are capable of joining the network, as well as guarantee the likes of encryption and other forms of security. The Hype SDK manages four distinct layers of the connectivity stack:

* The Session layer is responsible for automatically pairing the devices in links, while keeping all data securely encrypted between originators and destinations;

* The Transport layer addresses connection recovery and network optimizations such as best-path discovery, while segmenting data and assembling it back at the destination. This layer also performs error recovery, such as path redundancy and the recovery of messages that fail delivery;

* The Network layer does path discovery, looking for Internet access when an Internet exit point is available and managing routing. This involves being aware of the network’s topology and propagating network updates, effectively implementing healing properties into the network;

* A Driver is the specific implementation of a given transport (e.g. Bluetooth, WiFi) for a given operating system (i.e. Android).

The Radio Interfaces are operating system abstractions of the physical interfaces for Bluetooth, WiFi, and Internet transports and are managed by the Hype SDK.

#### Authentication Server

An Authentication Server governs access to the network by issuing and validating credentials for users in the network. This server is custom built for every deployment. In many instances, such servers already exist, and govern user logins, sessions, and other metainformation. The type of login is determined by the specific deployment, and how that login is performed is not bound by the Hype SDK in any way. In other words, implementations may use a password and email authentication pair, multi-factor authentication, or any other form of authentication that fits the project.

<img src="https://user-images.githubusercontent.com/8101643/117962565-464cf380-b317-11eb-8ee7-579285589999.png" height="250">
Figure 4. The Hype SDK is used to receive content from the mesh network, which consists of requests encoded in a custom protocol. These requests are translated by the server, resulting in direct API calls to the Substrate network.

This server dictates the rules of network access governance, by being queried by the Certification Server as to which users are valid and which are not. For those users that are deemed legitimate, this server issues a one-time-use Access Token, which is then used by the device (e.g. the authenticator) to request a digital certificate from the Certification Server. This process is described in more detail in the Certification Server section.

#### Certification Server

The Certification Server works in pair with the Authentication Server to enable devices to join the network. A device (Requestor) uses credentials (such as email and password) to authenticate against the Authentication Server. The Authentication Server validates those credentials and, in case of success, responds with an Access Token. This Access Token is passed to the Certification Server, which validates the Requestor using cryptography, and, in case of success, checks whether the Access Token is valid by querying the Authentication Server. If all credentials validate, the Certification Server issues a digital certificate, which the device (Requestor) can use to join the network. This digital certificate is securely stored on the device and used whenever the Mesh Node is looking to join the network. This process is illustrated in Figure 5.

<img src="https://user-images.githubusercontent.com/8101643/117968214-db52eb00-b31d-11eb-9a1a-4d62c98e364a.png" height="400">
Figure 5. Sequence diagram illustrating the process of how authentication is performed by a Requestor, when querying against the Certification Server. The Authentication Server is the one to govern access.

#### Transaction Server

The Transaction Server is a network built on Substrate. It exposes an API that requestors may consumer in order to query funds and process transactions.

#### Relay Server

The Relay Server is one of the most important components of the solution because it mediates communications between the Mesh Nodes and the Transaction Server. This endpoint guarantees that communications occurring within the network are end-to-end encrypted, effectively eliminating the possibility for man-in-the-middle attacks or erroneous data.

The server works by integrating the Hype SDK, effectively making it a Mesh Node that cooperates actively within the network. The Mesh Nodes send transaction requests to this unit, which leverages requests received from the mesh network through an interface with the Transaction Server, as illustrated in Figure 6. The implication for this, however, is the need to create a server port of the Hype SDK, linking the SDK’s core with the necessary native abstractions for the target environment.

<img src="https://user-images.githubusercontent.com/8101643/117968368-050c1200-b31e-11eb-816d-f0624e11f585.png" height="250">
Figure 6. The Hype SDK Server port is used to communicate with the mesh network and the business logic interfaces all communications with the Transaction Server.

The business logic for this unit consists of the implementation of a mediation protocol that receives requests from Mesh Nodes and interprets them into actual requests for the Transaction Server. In other words, this server implements an application layer protocol processor that enables the translation of requests coming from the mesh network in order to consume the Transaction Server’s API. This process is illustrated in Figure 7.

The implication of this is that the business logic is designed in such a way that only a selected set of API endpoints can be consumed, protecting the server from random requests coming from Mesh Nodes or other external entities.

<img src="https://user-images.githubusercontent.com/8101643/117962565-464cf380-b317-11eb-8ee7-579285589999.png" height="250">
Figure 7. The Hype SDK is used to receive content from the mesh network, which consists of requests encoded in a custom protocol. These requests are translated by the server, resulting in direct API calls to the Transaction Server.

Given its centralized nature, it is imperative that this server introduces redundancy, for the purposes of scale and uptime. This means that there are several replicas of this server running simultaneously, and that the number of requests that it is capable of supporting is not bound by any constraints of scalability, effectively introducing horizontal scalability.

### Ecosystem Fit

**Where and how does your project fit into the ecosystem?**

* UpLink's mission is to ensure smartphone users can purchase Internet access from other users. No payment systems, blockchain applications, and blockchain transactions can work without being connected to the Internet;
* UpLink will allow dapps to process transactions by renting an Internet connection. In addition, other Polkadot projects can use UpLink to expand their services to regions where the Internet is unreliable or expensive. 
* UpLink can help bank the unbanked by providing connectivity solutions to other De-Fi projects, ensuring the reliability of their products when they deploy in regions with low coverage.

**Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's user base, yourself)?**
* Dapps and wallet apps
* De-Fi projects 
* App developers

**Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**
* https://www.helium.com/
* https://gotenna.com/
* https://nodle.io/

**What makes us different from others?**

* Uplink’s mobile SDK has already been tested and currently being in use by customers;
* Hardware and Radio protocol agnostic, the SDK uses wireless technology available on the devices to form local networks;
* Interoperable, any type of device running on different OS and can connect autonomously and form local mesh (provided that they are using the same radio protocol).

## Team :busts_in_silhouette:

### Team members

* Carlos Lei Santos, CEO
* André Francisco, CTO
* Damaris Valero, Global Business Development
* Aldrin D'Souza, Business Developer
* Karolina Stawinska, Head of Partnerships

### Contact

* **Contact Name:** Carlos Lei Santos
* **Contact Email:** cl@hypelabs.io
* **Website:** https://hypelabs.io

### Legal Structure

* **Registered Address:** 3524 Silveside Road Suite 35B Wilmington, Delaware 19810-4929
* **Registered Legal Entity:** HypeLabs Inc.

### Team's experience

* Carlos Santos, HypeLabs CEO: Carlos is a developer, entrepreneur and technology enthusiast by heart. He studied Computer Science at Faculty of Sciences of University of Porto (FCUP) between 2011 and 2014. Before joining HypeLabs, he had 7 years of experience working as an IT manager providing assistance and working for companies such as IBM, BPI Bank, Banco Espirito Santo, Santander, CTT, Zon Telecommunications and Glintt. Nowadays, he is fully dedicated to his work as CEO, focused on management, networking, funding and working among the team improving the product, website and the brand.

* André Francisco, HypeLabs CTO: Since college, André dedicated himself to tech-related startups with great commitment. His alma mater is the University of Porto, where he studied Computer Science. He was the founder and first president of NuCC (Nucleus for Computer Science, an association for CS enthusiasts) for the University of Porto. Talks and workshops he gave include topics such as memory management, AI, general programming concepts and best practices, design patterns, and others. In the early days he participated in several programming contests with good results, including national finals. André was also team manager and lead organizer for the VideoJogos 2011 conference, in Porto. Formerly, he was a senior developer and researcher with nearly 20 years of experience in a wide variety of programming languages, platforms, and fields of study, including networking, AI, ML, natural and computer language processing, 3D graphics, web and app full stack development, and more. There, he was a researcher for CRACS, INESCTEC, PIC (Porto Interactive Center) under the LIFEisGAME and VERE projects, Yappy, and IJUP. He was also lead developer and maintainer of the OpenJelly project, dedicated to 3D graphics rendering, animations, and collision detection.

* Damaris Valero, Global Business Development: Damaris is a former entrepreneur with over 20 years of experience in business development. She founded a 15 year old independent production company headquartered in Miami and with offices abroad. Her fields of interest and expertise are business development and marketing strategy, with an emphasis on building and expanding companies globally. She is the author of the book “Branded Entertainment: Dealmaking Strategies & Techniques for Industry Professionals”. As a blockchain enthusiast and collaborator, she’s avid for the success of this fast growing global technology. Damaris is a builder of strategic partnerships with global and local partners, from government to telcos and companies that are looking to make a positive impact on connecting the world. Damaris is a content creator, director, writer and producer. She’s a creative leader on commissioned productions and development deals for new content ideas in multiple markets worldwide (Latin America and Europe).

* Aldrin D’Souza, Business Developer: Aldrin is passionate about building impactful businesses for the Next Billion User markets. He has a background in Telecommunications Engineering. Based in Canada, his expertise in understanding the potential of mesh networks and its product-market fit started as a former product manager and business analyst at RightMesh, where he conducted a successful ICO. Through his market research, he has implemented unique business models that harness the opportunities native to mesh networking.

* Karolina Stawinska, Head of Partnerships: Karolina has eight years of HR experience sourcing innovative startups and recruiting high performance leadership teams in 52 countries. Across her career, she worked with various multinationals, the European Parliament, United Nations agencies, international NGOs and leading accelerator programs including Founders Factory, China Start and the Kairos K50. Among her HR experiences she was responsible for recruiting and supporting a community of over 1,200 successful millennial entrepreneurs at the Kairos Society. Karolina enjoys bringing multiple stakeholders together at hackathons, co-creating solutions that have the potential to push the world forward. She has organised and judged various startup competitions. Karolina is a self-starter with a passion for people and discovering young talent. She possesses strong interpersonal, teamwork and cross-cultural communication skills through direct sales and leadership positions.

### Team LinkedIn Profiles

* Carlos Santos (https://www.linkedin.com/in/carlosleisantos/)
* André Francisco (https://www.linkedin.com/in/andr%C3%A9-francisco-6662b696/)
* Damaris Valero (https://www.linkedin.com/in/damaris-valero-23711619/)
* Aldrin D'souza (https://www.linkedin.com/in/aldrin-dsouza/)

## Development Status :open_book:

|        Module        |         Status        |
|:--------------------:|:---------------------:|
| Android App          | Templates Exist       |
| Session Layer        | Production            |
| Transport Layer      | Production            |
| Network Layer        | Production            |
| Drivers              | Production            |
| Relay Server         | Implementation Needed |
| Hype SDK Server Port | Implementation Needed |
| Certification Server | Production            |
| Authorization Server | Templates Exist       |

Some of the templates can be found on HypeLabs' [GitHub page](https://github.com/Hype-Labs). The Hype SDK can be downloaded from the [HypeLabs website](https://hypelabs.io/); the SDK is currently not open source, but the components used in the context of this project will be.

More technical information regarding the Hype SDK can be found in the SDK [WhitePaper](https://hypelabs.io/documents/Hype-SDK.pdf). HypeLabs is also the holder of patent [US10959157B2](https://patents.google.com/patent/US10959157B2/).

## Development Roadmap :nut_and_bolt:

|      Deliverable     |                                    Description                                   |
|:--------------------:|:--------------------------------------------------------------------------------:|
| Android App          | An Android app that implements the described functionality.                      |
| Authorization Server | A server that performs basic authentication.                                     |
| Hype SDK Server Port | A port of the Hype SDK for Linux.                                                |
| Relay Server         | A server that mediates communications between the app and the Substrate network. |

### Overview

This submission proposes the use of the grant for the development of a one-hop mesh network connectivity app and a relay server.

* **Total Estimated Duration:** 2945 Person Hours
* **Full-Time Equivalent (FTE):** 6
* **Total Costs:** $30.000 USD

### Milestone 1 — Android App

* **Estimated Duration:** 215 Person Hours
* **FTE:** 1
* **Costs:** $2,186 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | The code will be documented inline with a format that enables for quick docs generation, such as Doxygen. The project also includes a README file with general guidelines, onboarding information, and licensing. |
| 0c. | Testing Guide | The project will have a minimum test coverage of 50%. The testing process should be described in the README file. |
| 0d. | Article/Tutorial | The app includes an onboarding tutorial available to users, which is shown automatically on the first run. |
| 1. | Binary | The app will be available in binary form in the Android Play Store, available to everyone in the public. It can also be built from the public repository, since the app can be used as template for other developers that wish to integrate the tecnology. |
| 2. | Tutorial | The app shows a startup tutorial to showcase functionality. This will help users understand the gain they get, how to use the app, and the set of features. |
| 3. | Register/Login | The app enables users to register an account with given credentials. These credentials must be registered first in the authentication server, although future versions will enable registration through the app. |
| 4. | Account Management | The app enables users to query their account balances. This results in a direct query to the Substrate network, given the user's public address. |
| 5. | Transactions | The app enables users to register a request for a transaction of funds, which will be sent through the mesh to the Substrate network. |

### Milestone 2 — Authorization Server

* **Estimated Duration:** 148 Person Hours
* **FTE:** 1
* **Costs:** $1,508 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | The code will be documented inline with a format that enables for quick docs generation, such as Doxygen. The project also includes a README file with general guidelines, onboarding information, and licensing. |
| 0c. | Testing Guide | The project will have a minimum test coverage of 50%. The testing process should be described in the README file. |
| 0d. | Article/Tutorial | The onboarding processes will be described in the README file. |
| 1. | Deployment Processes | The project includes a Docker file to enable ease of deployment. |
| 2. | User Management | The server includes a simple user management dashboard. This dashboard will only be available to admin users, which are configured at deployment time. Users can be added, deactivated, and removed. |
| 3. | Credentials Validation | The server exposes an API endpoint to query for access tokens. The access token will be used during the authentication process to validate a certificate request. The Authentication Server consumes this endpoint when a device is looking for a digital certificate to join the mesh network. |

### Milestone 3 — Hype SDK Server Port

* **Estimated Duration:** 1924 Person Hours
* **FTE:** 4
* **Costs:** $19,598 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | The code will be documented inline with a format that enables for quick docs generation, such as Doxygen. The project also includes a README file with general guidelines, onboarding information, and licensing. |
| 0c. | Testing Guide | The project will have a minimum test coverage of 50%. The testing process should be described in the README file. |
| 0d. | Article/Tutorial | The onboarding processes will be described in the README file. |
| 1. | Slim Down | The Hype SDK will not be available in full for the initial version, but rather only a subset of its components. This version will include a single driver (Bluetooth Low Energy) for Android, cryptographic processes, authentication, and one-hop mesh networking. |
| 2. | Binary | The output for the build process is an SDK binary dependency that exposes an API that enables business logic to configure and manage communication links. This SDK can be integrated into the Relay Server to enable the server to act as a node on the network. |

In future versions, the port will run as a daemon.

### Milestone 4 — Relay Server

* **Estimated Duration:** 659 Person Hours
* **FTE:** 2
* **Costs:** $6,709 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | The code will be documented inline with a format that enables for quick docs generation, such as Doxygen. The project also includes a README file with general guidelines, onboarding information, and licensing. |
| 0c. | Testing Guide | The project will have a minimum test coverage of 50%. The testing process should be described in the README file. |
| 0d. | Article/Tutorial | The onboarding processes will be described in the README file. |
| 1. | SDK Dependency | The Relay Server integrates the Hype SDK server port, enabling it to behave as a node on the mesh network. This makes communication between the server and the devices possible under a peer-to-peer paradigm, which the Relay Server will translate into client/server calls to the Substrate network. |
| 2. | Business Logic | The Relay Server implements the business logic to propagate requests on the Substrate network. This consists of translating requests from the mesh network (propagated in a custom protocol) into calls to the Substrate network, effectively acting as a mediator. |

In future versions, the port will run as a daemon.

## Future Plans

* Full integration of the Hype SDK, with n-hop mesh networking capabilities;
* Support for other types of devices, such as iOS and IoT;
* Support for other types of transport channels such as LoRa;
* Integration with different (configurable) authentication systems;
* Implementation of analytics and monitoring tools;
* Introduce wallet management module in the HypeSDK;
* Implement Private and Public network configuration setting for Dapp developers;
* Research and design Proof of Relay incentivization mechanism to incentivize relayers;
* Implement BME model, where Data Users would burn their tokens to access underlying services;
* Elimination of the Relay Server middleman and full integration into Substrate;
* Build and promote Early Adopter Programs for Dapp developers;
* Launch and promote Testnet competition to test token economics;
* Partnership with OEMs and app partners.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website and personal recommendation.

