# Futur & Fusion Protocols

- **Team Name:** Relai Network
- **Payment Address:** 15ZybdjAomB2gYWzY9mC1iPCK72zKCuJ14jZmjQ8FsFXphmV (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Futur-Fusion Protocol

In the current digital landscape, the app store ecosystem grapples with challenges, primarily attributed to the dominance of major players like Apple's App Store and Google's Play Store. This concentration of power sparks concerns about anti-competitive practices, high developer fees, and a lack of user control entrenched in enclosed platforms and proprietary policies.

However, these challenges serve as potential catalysts for innovation, especially considering regulatory changes in major regions that hint at the possibility of alternative stores. Surveys indicate a growing consumer appetite for privacy protections, web3 integration, and community governance, values inherent in decentralized solutions.

Enter the Relai Network, positioned as a catalyst for reshaping this landscape and addressing these challenges. It recognizes the need for a new smartphone era that prioritizes enhanced user privacy and security. Operating on privacy-focused systems, these devices provide a secure alternative, diverging from the intrusive data practices characteristic of traditional smartphones and other devices.

Simultaneously, in acknowledgment of the proven utility of Web3 technologies, the network seamlessly integrates these principles into the mobile experience. By fostering the development of Web3-capable devices, the network propels the adoption of decentralized technologies. This intelligent synthesis of Web3-capable devices with privacy-focused operating systems establishes a powerful synergy, enabling users to fully embrace the benefits of the decentralized web with enhanced privacy.

The [Relai Network](https://relai.network/) is not only committed to reimagining app distribution and development while ensuring privacy but also to subtly advancing the widespread adoption of Web3. This commitment marks the dawn of an era defined by user-centric, secure, and decentralized interactions.

### Project Details

In line with the overarching vision of the Relai Network, the project unfolds as a comprehensive solution, seamlessly integrating mobile operating systems and establishing cutting-edge hardware partnerships for the next generation. This strategic approach comprises two vital components:

**1. Futur Protocol:**

**Objective:** Creating a decentralized app store to establish a transparent, user-centric app distribution ecosystem, leveraging the power of blockchain technology.

**Benefits:** Empowering developers, reducing fees, eliminating censorship, and fostering innovation, thereby expanding user choice in the app ecosystem.

**2. Fusion Protocol:**

**Objective:** Tackling privacy concerns and optimizing mobile devices for smooth web3 experiences.

**Features:** The Fusion Protocol proposes a collaborative approach with OEMs (phone manufacturers) to embed essential elements such as privacy-focused operating systems (e.g., GrapheneOS, PureOS, ...) and integrated security modules (Vaults, TEE, Secure Enclaves, ...) by default. These modules are designed for managing wallets and sensitive data.

**Benefits:**

**Collaborative Privacy-Focused Ecosystem:**
Phones manufactured through this partnership would offer a complete privacy-centric ecosystem, embedding privacy-focused OS (like GrapheneOS, ...) alongside the decentralized and privacy-focused app distribution of the FuturStore. Additionally, it opens the possibility of white-label devices by the Relai Network.

**Seamless Web3 Experience and Enhanced Security:**
Users gain more options for securely interacting with decentralized applications while effectively managing their assets. This ensures a user-friendly and secure experience within the evolving landscape of web3 technologies.

#### Components

- **Relai Network:** A Substrate-based blockchain serving as the host for the Futur and Fusion protocols, along with additional components planned for subsequent phases.

- **Futur Protocol:** A suite of pallets responsible for managing the fundamental logic of the app store within the RELAI network.

- **Futur Store Mobile App:** The mobile application designed for accessing the app store.

- **Futur Store Console:** A web application portal facilitating app submission and lifecycle management within the Futur Store ecosystem.

- **Storage Layer:** The layer dedicated to storing validated APKs securely.

- **SAST/DAST Module:** A component for Static and Dynamic Analysis, conducting security scans on submitted APKs, initially interfacing with the MobSF: Mobile Security Framework Web API.

- **Fusion Protocol:** A suite of pallets integral to the Fusion Protocol, focusing on managing OEMs or Device Manufacturer partners associated with the protocol.

- **Fusion Console:** A web application portal tailored for OEM partners involved in the Fusion Protocol.

- **Fusion Marketplace:** The marketplace dedicated to the Fusion protocol, facilitating interactions and transactions within the ecosystem.

- **OS Catalog:** A repository consolidating references to open-source, privacy-focused Operating Systems intended for use by protocol partners. This includes "De-Googled Android AOSP" variants (such as GrapheneOS, /e/ Foundation, LineageOS), "Linux Phone OS" options (Ubuntu Touch, PostmarketOS, PureOS)

- **SAST/DAST Module:** Static and Dynamic Analysis component for scanning submited apks for checking security (initially interfacing with
 [MobSF: Mobile Security Framework](https://github.com/MobSF/Mobile-Security-Framework-MobSF) Web API).



### Ecosystem Fit

The Relai Network will integrates into the Polkadot ecosystem, positioning itself as an indispensable component by adopting Substrate as its foundational framework. This strategic choice ensures not only scalability, security, and but also facilitates ease of customization. Devices generated through the Fusion protocol are designed for compatibility with chains and Dapps within the DotSama ecosystem and beyond.

The target audience for the Relai Network is diverse and includes:

- Web3 Users
- Apps and Games Developers
- OEMs (Original Equipment Manufacturers) or  Device Manufacturers
- Mobile App/Games Users
- Users of Mobile Apps and Dapps

Here is a diagram of the project

![Figure 1-1](https://raw.githubusercontent.com/RELAI-Network/docs/main/archi/architechture.jpg?raw=true)

## Team :busts_in_silhouette:

### Team members
- Mor GUEYE

### Contact

- **Contact Name:** Mor GUEYE
- **Contact Email:** gueyemor2009@gmail.com
- **Website:** [relai.network](https://relai.network/)

### Legal Structure

- **Registered Address:** Sicap Mbao, Dakar Senegal
- **Registered Legal Entity:** Ridone Technologies.

### Team's experience

Mor is a seasoned software engineer with over a decade of experience in the field. He has been involved in numerous projects related to web2 and web3 development. On Web3 side, he has contributed to Polkadot ecosytem projects such as Ternoa and Pendulum chain.

### Team Code Repos

| Domain | Repo |
| - | - | 
| Relai Network chain | https://github.com/RELAI-Network/relai-network |
| Futur Protocol Runtime Modules | https://github.com/RELAI-Network/futurprotocol |
| Futur Store app | https://github.com/RELAI-Network/FuturStore |
| Futur Console | https://github.com/RELAI-Network/FuturStore-console |
| Fusion Protocol Runtime Modules | https://github.com/RELAI-Network/fusion-protocol |
| Fusion Console | https://github.com/RELAI-Network/fusionconsole |
| Fusion Marketpalce | https://github.com/RELAI-Network/fusionmarketplace |
| AI Models Hub | https://github.com/RELAI-Network/ai-models |

## Development Status :open_book:

The project is splitted into phases:

1. Phase 1: Foundation
2. Phase 2: Building
3. Phase 3: Expansion

This current application focuses on putting in place the Futur Protocol which comprised of: 

- **Futur Protocol Runtime Modules**
- **Futur Console**
- **FuturStore Mobile app**
- **SAST/DAST Module**
- **Storage Layer**


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1,5 Months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 7,000 USD

### Milestone 1 — Futur Protocol

- **Estimated duration:** 1,5 month
- **FTE:**  1
- **Costs:** 7,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a **gituhb repo readmes** that explains how to deploy mobile app on the FuturStore. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. The **github  repo readme** we will also describe how to run these tests. |
| 0d. | Articles |Articles explaining the FuturStore stack will be published. There will be article for FuturStore users and also for App developers wanting to submit apps on the store. |
| 1. | FuturStore Mobile app | A **Flutter** mobile app store, displays catalog of  published apps. Users can browse and install available apps. |
| 2. | Futur Protocol Runtime modules | Suite of pallets that will contain the logic of the Futurstore |
| 2.a | DevRegistry Pallet | Manages the registration of developers with functionnalities like: RegisterDev,... |
|  | - |  RegisterDev : extrinsic |
| 2.b | AppRegistry Pallet | functionnalities: Submit, Publish, Unpublish, Update, Download, Review and SetStoreRegistrationFee.**metadata** :title, description, category, tags, free/paid, price,apk location, metadata links|
|  | - |  DownloadApp : extrinsic |
|  | - |  SubmitApp : extrinsic |
|  | - |  PublishApp : extrinsic |
|  | - |  UnPublishApp : extrinsic|
|  | - |  DeleteApp  : extrinsic |
|  | - |  ReviewApp : extrinsic |
|  | - |  SetStoreRegistrationFee : extrinsic |
|  | - |  SubmitScan : function - off-chain worker (communicate with **SAST/DAST Module**)|
|  | - |  FetchScanResults : function - off-chain worker (communicate with **SAST/DAST Module**)|
| 3 | SAST/DAST Module | [MobSF: Mobile Security Framework](https://github.com/MobSF/Mobile-Security-Framework-MobSF) web API for Static and Dynamic Analysis module for scanning submitted apps. Integrated through off-chain workers. If no issues found the app get's published to the app store |
| 4 | Futur Console | Web portal for app developers for app submission and management (similar to google play console); **Angular or Flutter Web** |




## Future Plans

The next step will be the Fusion protocol and after achieving those 2 milestones representing the  foundations and  serving as the bedrock for initiating governance features, fortifying the codebase,  expanding the community. This will also set the stage for a range of advancements and expansions that are on RELAI Network roadmap such as: 

* Decentralized Computing and Storage:
* White-Labeling and Private Enterprise Stores:
* Peer-to-Peer Payments:
    * Enables direct profits for developers.
    * Bypasses high commissions from major platforms.
* Phone White Labeling for Fusion Protocol:
    * Ventures into phone white labeling partnerships.
    * Enhances user choices in decentralized mobile devices.
* AI Support:
    * Utilizes AI for marketplace management.
    * Incentivizes AI marketplaces contributing to protocol development.
* In-Store Advertising:
    * Introduces user-centric advertising with privacy in mind.
    * Enhances targeted advertising for a symbiotic developer-user relationship.
* Extension of Fusion Protocol:
    * Envisions diversification beyond smartphones.
    * Includes Smart TVs, Smartwatches, and innovative gadgets.
    * Enhances privacy and security across various devices.
    * Paves the way for a holistic, interconnected ecosystem of privacy-focused technologies.