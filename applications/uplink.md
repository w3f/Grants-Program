# UpLink

* **Team Name:** HypeLabs Inc.
* **Payment Address:** 3Fwmy2QHw1Xp7S956PMG9NKq1yngzRqGqf (BTC)
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/424#issuecomment-1006435267)

## Project Overview :page_facing_up:

### Overview

UpLink is a project that proposes a decentralized and infrastructure-free approach to peer-to-peer connectivity. The system establishes local mesh networks between devices, enabling them to connect directly, cooperate, and relay content on behalf of each other. By cooperating, the devices spend resources, such as bandwidth, memory, and computational power. The consumption of the device’s surplus resources, however, creates an incentive for users to not cooperate, effectively hampering the network and reducing its reliability. UpLink introduces UpLink tokens (ULX), built on Substrate, which are used to reward users for the resources that are consumed by the network. This means that people can sell their internet to others and can use their devices as relay nodes, earning tokens in return.

This proposal focuses on one of the key components of that system: the creation of a binary peer-to-peer communication protocol that mimics Substrate’s API, enabling apps to communicate with Substrate without direct access to the Internet, through a proxy. This is illustrated in Figure 1, below. A given Requester is not connected to the Internet, and rather relies on a Proxy to access the ledger. The Proxy cooperates by relaying the requests and the responses, mediating the conversation between the two. The Relay Server handles the necessary cryptographic processes to decode and interpret the contents of the request, before relaying them to the Substrate Network.

![](https://user-images.githubusercontent.com/8101643/119384058-09d8aa80-bcbc-11eb-8934-7d4404a5d55c.png)
Figure 1. Illustration of a Proxy device cooperating with a given Requester for the purposes of communicating with the Substrate Network.

It’s notable that this constitutes a relaxation of the UpLink project in many ways. In its entirety, the UpLink project proposes an incentive-based multi-hop mesh network system built on Substrate, enabling devices to communicate peer-to-peer and be rewarded for their cooperation. This project, however, proposes the much simpler non-rewarded proxy alternative, which enables disconnected devices to process transactions on a Substrate network. Furthermore, it will work as a fundamental basis for the UpLink project, enabling the team to build upon this system towards its more complex counterpart. The following key differences can be highlighted:

1. The network can relay content only up to one hop, meaning that there’s no actual implementation of a mesh network;
2. It uses only Bluetooth Low Energy, instead of other connectivity technologies commonly available on the devices;
3. There’s no incentivization model in place, meaning that the Proxy will not be rewarded for its cooperation;
4. The Relay Server is separate from Substrate. In the final version of this project the UpLink App and Substrate Network can communicate directly, end-to-end, by integrating the necessary decoding logic directly into Substrate;
5. The Requester is only capable of consuming a selected subset of Substrate’s functions, namely querying account balance and processing transactions.

Note: HypeLabs previously submitted an aborted proposal [here](https://github.com/w3f/Open-Grants-Program/pull/412). This new proposal is a considerable revision of that one. No information therein is relevant for the purposes of this submission.

### Project Details

HypeLabs proposes a solution in which two Android devices connect locally over Bluetooth Low Energy in order to enable one of them to communicate with the UpLink network. The network is built on Substrate. The devices can act either as Requesters or Proxies; the former issues requests to the Substrate network, and the latter relays those requests and mediates the conversation. The setup is thus composed of the following elements:

* An Android app that is capable of assuming two roles:

  * A Requester is the device that is not connected to the Internet and has intentions of making API requests to the Substrate Network;

  * A Proxy is a second device that is connected to the Internet, and connects with the Requester in order to share connectivity;

* The Relay Server is a network endpoint responsible for interpreting and propagating requests made to the Substrate network;

* The Substrate Network is a Substrate deployment composed of an unspecified number of nodes.

The connection between the Requester and the Proxy is maintained automatically, without the need for any form of user intervention. This connection is secured, in the sense that the Proxy is not capable of eavesdropping, interference, or any other types of security hazards. This is true because the communication link between the Requester and the Backend is fully encrypted, meaning that the Proxy is not capable of tampering with the information.

#### Communication Protocol

The Requester and the Relay Server communicate over a custom protocol that is mediated by the Proxy. The protocol will closely resemble Substrate’s API one-to-one, meaning that it consists of a port of Substrate’s API to a binary network protocol that can be used in a peer-to-peer communication paradigm. This will enable devices to communicate directly with each other in a similar way that they communicate with Substrate, enabling all sorts of integrations to happen.

This protocol is to be designed and implemented within the context of this grant, and thus constitutes a deliverable. It is known, however, that the protocol uses a binary format for the sake of saving network bandwidth, especially when communicating over Bluetooth Low Energy, whose packet sizes are considerably small. It will also be implemented in Java, for the sake of reusability between the Android app and the Relay Server, given that the protocol must be implemented in both. For that reason, this deliverable will be in the form of a library, and can be added as a dependency to any Java project.

The protocol implements three functions, namely (1) querying a user’s balance on the Substrate network, (2) requesting the processment of a transaction between two users, and (3) the handshake for the two devices during the discovery stage. These functions are encoded differently in the protocol, meaning that each is represented through a different type of packet. With that in mind, it’s notable that each packet will include the specifications for the necessary arguments to execute the function, and thus to properly represent the Requester’s intent. The protocol will also include one additional packet for return value, which will indicate whether the function request executed successfully.

#### Bluetooth Low Energy Drivers

The solution uses Bluetooth Low Energy (BLE) in order to enable devices to communicate directly with each other. This includes managing the connectivity stack, such as device discovery (with automatic pairing) and buffered communications. The architecture for this is illustrated in Figure 2.

![](https://user-images.githubusercontent.com/8101643/119358753-d8061a80-bca0-11eb-9671-e90688d9f91c.png)
Figure 2. Architecture for the connectivity stack implemented for the Android app. The controller is shown on the left, while the model is shown on the right.

* A Driver aggregates an Advertiser and Brower, enabling consumers to managed both in a simple way;

* The Advertiser is responsible for publishing the BLE Service on the network and actively advertising the device for it to be found by others;

* The Browser scans the network for other devices matching the BLE service specification;

* The Adapter State Listener is a part of the controller’s lifecycle management, in the sense that it detects when the Bluetooth adapter is turned on and off, and makes the controller respond accordingly;

* The Device Bridge keeps track of found devices, and keeps a registry between Provider’s and Android's own native object representation. This bridge is used to lookup devices and respond to events;

* The BLE Service is a model specification for the Bluetooth Low Energy service, in the sense that it specifies what the service looks like and how it behaves;

* A Provider is an abstract representation of a device on the network;

* A Connector manages the connections between two devices, and is capable of both initiating and terminating a connection;

* A Channel is an abstract representation of the communication link, and is capable of both input and output;

* An Input Stream reads buffered input from the Bluetooth Low Energy adapter;

* An Output Stream writes buffered output to the Bluetooth Low Energy adapter.

This implementation consists of a Bluetooth Low Energy connectivity layer that manages the connectivity stack and all buffered I/O using native Android BLE frameworks. HypeLabs already maintains a production-grade implementation of such drivers, although those are deeply coupled with the Hype SDK, the company’s main product. For that reason, these drivers must be ported and isolated before being made available as a library dependency for other apps.

One important aspect of this setup is the fact that, after connecting, the devices perform a handshake. This handshake constitutes a negotiation process between the two devices, with the intent of exchanging meta configurations and status information. The information includes whether the devices are connected to the Internet, for the purposes of role selection, and it’s performed every time that this status changes. This handshake is performed in accordance with the Communication Protocol.

#### Android App

![](https://user-images.githubusercontent.com/8101643/119384023-004f4280-bcbc-11eb-95ae-64f2ed0abcb8.png)
Figure 3. Mockup for the Android app. The screen on the left enables users to see their balance and to request transactions, while the screen on the right provides verified confirmation of a transaction request.

The Android app enables users to manually request the implemented network functions. This app is simple in nature, since it is not the purpose of the project, but rather serves the purpose of testing and showcasing the network’s functions. Rather, other apps may implement the same functionality, simply by adding the implemented logic as a dependency, one that will be provided to the public in open source form and as a library dependency.

The app is written in Java and built with Gradle, as is common for Android.

#### Relay Server

The Relay Server receives, decodes, and interprets requests from any Requester. This process of decoding and interpreting requests can be understood as the server’s Business Logic, according to the illustration in Figure 4. For example, the Relay Server must decide what Substrate API endpoints to call and in what order. As a result of that process, the server redirects the requests to the Substrate Network, and mediates the communications with the Requester. All cryptographic challenges are forwarded between the two as well, meaning that the Relay Server is not capable of faking transactions, although it does have visibility over the operations that occur.

![](https://user-images.githubusercontent.com/8101643/119384655-f2e68800-bcbc-11eb-899b-04e447623dc3.png)
Figure 4. Architecture for the Relay Server, illustrating how a transaction request is relayed to the Substrate Network. Proxy devices query the Relay Server's API, which interprets the requests and propagates to the Substrate Network.

The Relay Server is to be implemented as an AWS Lambda function that can be called publicly. Given that this server also integrates the Communication Protocol, it will be implemented in Java. It is also composed of a full fledged CI/CD pipeline, implying that updates to the deployment are easy to process. Given its implementation in Lambda, this server will be horizontally scalable, and capable of processing many millions of transactions per second.

In future reviews, this logic should be optionally integrated directly into Substrate, with the intent of having Substrate and off-the-grid devices communicate end-to-end, without the need for mediators. However, due to the complexity of that endeavour, the Relay Server will replace that setup for an initial version.

### Ecosystem Fit

* UpLink's mission is to ensure smartphone users can purchase Internet access from other users. No payment systems, blockchain applications, or blockchain transactions can work without being connected to the Internet;

* UpLink will allow dapps to process transactions by renting an Internet connection. In addition, other Substrate projects can use UpLink to expand their services to regions where the Internet is unreliable or expensive;

* UpLink can help bank the unbanked by providing connectivity solutions to other De-Fi projects, ensuring the reliability of their products when they deploy in regions with low coverage.

UpLink is targeted at the following audiences:

* Dapps and wallet apps;
* De-Fi projects;
* App developers.

Other similar projects can be identified, namely:

* <https://www.helium.com/>
* <https://gotenna.com/>
* <https://nodle.io/>

UpLink can be distinguished from those projects because:

* UpLink can run on smartphones and IoT devices. The technology utilizes any radio protocol readily available on the devices to form a local network. There is no need for any additional infrastructure hardware to maintain the network or extend internet access to offline devices. Thus making the technology radio protocol and hardware agnostic;

* UpLink is interoperable, and any type of device running on different operating systems can connect autonomously to form local mesh networks, including Android, iOS, and various LoRa gateways. Operating System interoperability reduces the degree of fragmentation in the network and creates a unified network. As a result, anyone can access the Internet in the UpLink network;

* All local network level connections,  encryption, and protocol management, internet sharing features are autonomous, which do not require any user intervention—making it easier to use and adopt the technology.

## Team :busts_in_silhouette:

### Team members

* Carlos Lei Santos, CEO
* André Francisco, CTO
* Damaris Valero, Global Business Development
* Aldrin D'Souza, Product Manager
* Karolina Stawinska, Head of Partnerships

### Contact

* **Contact Name:** Carlos Lei Santos
* **Contact Email:** cl@hypelabs.io
* **Website:** <https://hypelabs.io>

### Legal Structure

* **Registered Address:** 3524 Silveside Road Suite 35B Wilmington, Delaware 19810-4929
* **Registered Legal Entity:** HypeLabs Inc.

### Team's experience

* Carlos Santos, HypeLabs CEO: Carlos is a developer, entrepreneur and technology enthusiast by heart. He studied Computer Science at Faculty of Sciences of University of Porto (FCUP) between 2011 and 2014. Before joining HypeLabs, he had 7 years of experience working as an IT manager providing assistance and working for companies such as IBM, BPI Bank, Banco Espirito Santo, Santander, CTT, Zon Telecommunications and Glintt. Nowadays, he is fully dedicated to his work as CEO, focused on management, networking, funding and working among the team improving the product, website and the brand.

* André Francisco, HypeLabs CTO: Since college, André dedicated himself to tech-related startups with great commitment. His alma mater is the University of Porto, where he studied Computer Science. He was the founder and first president of NuCC (Nucleus for Computer Science, an association for CS enthusiasts) for the University of Porto. Talks and workshops he gave include topics such as memory management, AI, general programming concepts and best practices, design patterns, and others. In the early days he participated in several programming contests with good results, including national finals. André was also team manager and lead organizer for the VideoJogos 2011 conference, in Porto. Formerly, he was a senior developer and researcher with nearly 20 years of experience in a wide variety of programming languages, platforms, and fields of study, including networking, AI, ML, natural and computer language processing, 3D graphics, web and app full stack development, and more. There, he was a researcher for CRACS, INESCTEC, PIC (Porto Interactive Center) under the LIFEisGAME and VERE projects, Yappy, and IJUP. He was also lead developer and maintainer of the OpenJelly project, dedicated to 3D graphics rendering, animations, and collision detection.

* Damaris Valero, Global Business Development: Damaris is a former entrepreneur with over 20 years of experience in business development. She founded a 15 year old independent production company headquartered in Miami and with offices abroad. Her fields of interest and expertise are business development and marketing strategy, with an emphasis on building and expanding companies globally. She is the author of the book “Branded Entertainment: Dealmaking Strategies & Techniques for Industry Professionals”. As a blockchain enthusiast and collaborator, she’s avid for the success of this fast growing global technology. Damaris is a builder of strategic partnerships with global and local partners, from government to telcos and companies that are looking to make a positive impact on connecting the world. Damaris is a content creator, director, writer and producer. She’s a creative leader on commissioned productions and development deals for new content ideas in multiple markets worldwide (Latin America and Europe).

* Aldrin D’Souza, Product Manager: Aldrin is passionate about building impactful businesses for the Next Billion User markets. He has a background in Telecommunications Engineering. Based in Canada, his expertise in understanding the potential of mesh networks and its product-market fit started as a former product manager and business analyst at RightMesh, where he conducted a successful ICO. Through his market research, he has implemented unique business models that harness the opportunities native to mesh networking.

* Karolina Stawinska, Head of Partnerships: Karolina has eight years of HR experience sourcing innovative startups and recruiting high performance leadership teams in 52 countries. Across her career, she worked with various multinationals, the European Parliament, United Nations agencies, international NGOs and leading accelerator programs including Founders Factory, China Start and the Kairos K50. Among her HR experiences she was responsible for recruiting and supporting a community of over 1,200 successful millennial entrepreneurs at the Kairos Society. Karolina enjoys bringing multiple stakeholders together at hackathons, co-creating solutions that have the potential to push the world forward. She has organised and judged various startup competitions. Karolina is a self-starter with a passion for people and discovering young talent. She possesses strong interpersonal, teamwork and cross-cultural communication skills through direct sales and leadership positions.

### Team LinkedIn Profiles

* Carlos Santos (<https://www.linkedin.com/in/carlosleisantos/>)
* André Francisco (<https://www.linkedin.com/in/andr%C3%A9-francisco-6662b696/>)
* Damaris Valero (<https://www.linkedin.com/in/damaris-valero-23711619/>)
* Aldrin D'souza (<https://www.linkedin.com/in/aldrin-dsouza/>)

## Development Status :open_book:

|         Module         |              Status              |
|:----------------------:|:--------------------------------:|
| BLE Drivers            | Port needed                      |
| Communication Protocol | Design and implementation needed |
| Relay Server           | Implementation needed            |
| Android App            | Templates exist                  |

Some of the templates for the Android App can be found on HypeLabs' [GitHub page](https://github.com/Hype-Labs).

The Communication Protocol is not yet designed, since one of the key requirements of it is that it matches closely with the Substrate API. This is an exercise that will be performed given the grant, creating as output the design and implementation for a peer-to-peer protocol that relates one-to-one with the Substrate API. For this initial implementation, only a subset of Substrate’s functions should be implemented, however.

The Bluetooth Low Energy (BLE) Drivers already exist and are used by HypeLabs extensively in production environments. These drivers are a component of the Hype SDK (HypeLabs’ main product) and need to be ported as an isolated binary dependency, since the Hype SDK will not be used for this project.

## Development Roadmap :nut_and_bolt:

|       Deliverable      |                                       Description                                       |
|:----------------------:|:---------------------------------------------------------------------------------------:|
| BLE Drivers            | An implementation of a peer-to-peer communication framework using Bluetooth Low Energy. |
| Communication Protocol | A binary peer-to-peer network protocol that mimics Substrate’s API and I/O arguments.   |
| Relay Server           | A server that mediates communications between the app and the Substrate network.        |
| Android App            | An Android app that implements the described functionality.                             |

Once the grant is obtained, the deliverables are to be met at the following times:

| Week |                                 Deliverables                                 |
|:----:|:----------------------------------------------------------------------------:|
| 1st  | None                                                                         |
| 2nd  | BLE Drivers (Implementation)                                                 |
| 3rd  | None                                                                         |
| 4th  | Communication Protocol (Architecture and Design), Android App (BLE Binaries) |
| 5th  | None                                                                         |
| 6th  | Relay Server (Functions)                                                     |
| 7th  | None                                                                         |
| 8th  | Android App (Binary)                                                         |

### Overview

This submission proposes the implementation of a binary peer-to-peer communication protocol that mimics Substrate’s API. This enables devices to communicate with Substrate even without Internet access, by relying on proxies.

* **Total Estimated Duration:** 1,984 Person Hours
* **Full-Time Equivalent (FTE):** 4
* **Total Costs:** $20,202 USD

### Milestone 1 — BLE Drivers

* **Estimated Duration:** 148 Person Hours, 2 weeks
* **FTE:** 1
* **Costs:** $1,508 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | The code will be documented inline with a format that enables for quick docs generation, such as Doxygen. The project also includes a README file with general guidelines, onboarding information, and licensing. |
| 0c. | Testing Guide | The project will have a minimum test coverage of 50%. The testing process should be described in the README file. |
| 0d. | Article/Tutorial | The onboarding processes will be described in the README file. |
| 1. | Implementation | This deliverable consists of existing Android BLE drivers that will be ported to an isolated library dependency. The delivery will be in both source and binary form, and distributed on GitHub and HypeLabs’ website. |

### Milestone 2 — Communication Protocol

* **Estimated Duration:** 962 Person Hours, 2 months
* **FTE:** 2
* **Costs:** $9,799 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | The code will be documented inline with a format that enables for quick docs generation, such as Doxygen. The project also includes a README file with general guidelines, onboarding information, and licensing. |
| 0c. | Testing Guide | The project will have a minimum test coverage of 50%. The testing process should be described in the README file. |
| 0d. | Article/Tutorial | The onboarding processes will be described in the README file. |
| 1. | Architecture and Design | The protocol will be designed before being implemented, implying the design of binary packet formats, a security evaluation, and performance profiling. This delivery will be in the form of a document, including the design, the security assessment results, and the profiling results. |
| 2. | Implementation | The implementation will be open source and available as a binary library dependency. The source code will be available on GitHub, and the distribution will be made available on HypeLabs’ website. |

### Milestone 3 — Relay Server

* **Estimated Duration:** 659 Person Hours, 1.5 Months
* **FTE:** 2
* **Costs:** $6,709 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | The code will be documented inline with a format that enables for quick docs generation, such as Doxygen. The project also includes a README file with general guidelines, onboarding information, and licensing. |
| 0c. | Testing Guide | The project will have a minimum test coverage of 50%. The testing process should be described in the README file. |
| 0d. | Article/Tutorial | The onboarding processes will be described in the README file. |
| 1. | Functions | The implementation will consist of a series of AWS Lambda functions that constitute the integration API. What functions those are will depend on the design of the Communication Protocol, since there’s a direct correlation between the API and the protocol. The functions will be available in source code form, on GitHub. |

### Milestone 4 — Android App

* **Estimated Duration:** 215 Person Hours, 1 Month
* **FTE:** 1
* **Costs:** $2,186 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | The code will be documented inline with a format that enables for quick docs generation, such as Doxygen. The project also includes a README file with general guidelines, onboarding information, and licensing. |
| 0c. | Testing Guide | The project will have a minimum test coverage of 50%. The testing process should be described in the README file. |
| 0d. | Article/Tutorial | The app includes an onboarding tutorial available to users, which is shown automatically on the first run. |
| 1. | BLE Binary | The first delivery for the app will be a binary with the BLE Drivers integrated, but without any form of relay. This will work for testing one-on-one connectivity using BLE, as well as initial UI and UX testing. |
| 2. | Binary | The app will be available in binary form in the Android Play Store, available to everyone in the public. It can also be built from the public repository, since the app can be used as a template for other developers that wish to integrate the technology. |

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
