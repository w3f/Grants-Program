# **EdgeSnap**

- **Team Name:** SoloCon
- **Payment Address:** 14XNJmoUzkvmh9cYoqG4axBRR4BWzWRbnFP79oiZgKu7V9bz (USDT/USDC, Polkadot AssetHub multisig)
- **Level:** 3

## **Project Overview 📄**

### **Overview**

EdgeSnap serves as a pivotal Metamask Snap Store for all the Substrate chains, aligning with the vision of a multi-chain future without relying on multiple extensions. This initiative addresses a critical missing element in the substrate ecosystem by offering a unified and streamlined wallet experience for the end-users.

The current Metamask Snaps Directory offers one stop solution for all the Snap apps of different chains but it doesn't have a functionality to utilize the installed Snap apps for even a bare minimum functionality like transfer of the native tokens. This UX gap is something EdgeSnap is looking to fill by providing the install functionality through the Snap Store and the functionality to utilize the Snap apps through the Interactive UI at one place.

With 103 Substrate chains currently in the ecosystem, our goal is to develop and maintain the Snap Apps for each one of them. Moreover, we commit to assisting developers across the ecosystem in making their protocols Snap-compatible, fostering a more interconnected and user-friendly Substrate Ecosystem.

### **Project Details**

**Flow chart:**
![EdgeSnap](https://github.com/ShankarWarang/Grants-Program/assets/17768359/1388e8ac-bb82-49a5-9045-66a5739f247f)

The EdgeSnap portal is segregated into two core components, namely the **Snap Store** and the **Interactive UI**. Users can access the 'Snap Store' to install the Universal Snap app or the individual chains' Snap apps as per their preference. The Universal Snap app is developed with power users in mind so they can explore the whole Polkadot/substrate ecosystem with just one Snap app. However, users who are looking to interact with a few specific chains can install the individual snap apps corresponding to those chains. In the later development stage, we are looking to add RPC switchers for individual snap apps.

Upon installing the Universal Snap app or any of the individual Snap apps, users can access the 'Interactive UI'. The Interactive UI offers basic functionalities like checking balance/address/public key, transferring the native token, and tracking recent transaction logs for all the substrate chains in one place.

**What's left to be done:**

- Support for [all the Polkadot/Kusama parachains and solochains](https://docs.google.com/spreadsheets/d/1rfB3q5fYGtFMJX0UJQgmvT66srMaWShzEUDV-RFKUzU/edit?usp=sharing).
- Develop custom npm packages (substrate-snaps, metamask-substrate-adapter, metamask-substrate-types)
- Compilation flow changes for creation of individual chains' snap apps (alongside the existing Universal Snap app)
- UI changes for individual RPC switchers and compiling flow changes for corresponding precompiled snap apps
- UX and UI enhancements based on the feedback.
- Docs and walkthrough creation

**What's done(MVP):**

- Support for 3 additional chains already included
- Unified the snap installation and interaction UIs.
- Basic UI layout designing and development done
- Switched from deprecated packages (snaps-ui and snaps-types to snaps-sdk)
- The MVP is deployed on: [https://edgesnap.vercel.app](https://edgesnap.vercel.app/)

### **Ecosystem Fit**

In addition to serving as the Substrate ecosystem's Snap Store, It also offers an intuitive user interface with fundamental operations.

Developed for production-level Relay chains, commercial Parachains, Common-good/ System Prachains, and Solochains, along with their respective protocols. The vision is to provide a single-stop service for the entire Substrate Ecosystem.

Metamask Snap App for Polkadot and Kusama is already out but it is not usable for other substrate chains (not even the AssetHub or BridgeHub). While some chains may have developed their own Snap app, the process of forking, auditing, and maintaining such applications independently can be resource-intensive. Pooling these efforts together through EdgeSnap not only saves considerable time and resources but also fosters a more efficient and collaborative standard for the whole Substrate ecosystem.

## **Team** 👥

### **Team members**

- [Shankar Warang](https://www.linkedin.com/in/shankar-warang/)
- [C. Gagan Babu](https://www.linkedin.com/in/c-gagan-babu-0903b01b6/)
- [Pranav C Pawar](https://www.linkedin.com/in/pranavchandrakantpawar/)
- [Raj Raorane](https://www.linkedin.com/in/raj-raorane-45b2b4166/)
- [Rama Vats](https://www.linkedin.com/in/rama-jha/)
- [Ashutosh Sahu](https://www.linkedin.com/in/zerom/)

### **Contact**

• **Contact Name:** Shankar Warang

• **Contact Email:** shankar@edgeware.community

• **Alternative Contact Email:** gagan@edgeware.community

• **Telegram:** @gmeister7

### **Legal Structure**

We do not have a legal structure as we are contributors to a DAO.

### **Team's experience**

- Over the past two years, we as solo contributors have been contributing to the Edgeware ecosystem across both technical and non-technical domains. From managing/updating the substrate runtime, core infra, ecosystem tools/apps, overseeing ledger upgrades to steering operations, business development, community engagement, social media management, and PR/strategy. Our multifaceted expertise has been consistently demonstrated and acknowledged by the Edgeware community through on-chain treasury proposals. With a wealth of experience, our team is well-equipped to expertly handle the proposed deliverables, ensuring a smooth and successful execution without any hiccups.
- The project came into existence during the EthForAll 2023 Hackathon, where contributors joined forces to contribute to its development. Subsequently, the project achieved success by winning the ConsenSys-sponsored track, highlighting its merit and utility.
- The contributors have been consistently engaged in numerous events and hackathons organized by EthGlobal and IBW, showcasing our commitment to active participation and continuous involvement in the blockchain community.

### **Project Code Repos**

- [https://github.com/edgeware-network/EdgeSnap/](https://github.com/edgeware-network/EdgeSnap/)
- [https://github.com/edgeware-network/substrate-snap](https://github.com/edgeware-network/substrate-snap)
- [https://github.com/edgeware-network/metamask-substrate-adapter](https://github.com/edgeware-network/metamask-substrate-adapter)
- [https://github.com/edgeware-network/metamask-substrate-types](https://github.com/edgeware-network/metamask-substrate-types)

**Members Code Repos**

- [https://github.com/ShankarWarang](https://github.com/ShankarWarang)
- [https://github.com/gagan7gb](https://github.com/gagan7gb)
- [https://github.com/pranavcpawar](https://github.com/pranavcpawar)
- [https://github.com/Raj-RR1](https://github.com/Raj-RR1)
- [https://github.com/ramavats](https://github.com/ramavats)
- [https://github.com/Z3R0M](https://github.com/Z3R0M)

## **Development Status 📖**

We have successfully achieved a fundamental Minimum Viable Product(MVP) that vividly showcases the operational framework of EdgeSnap featuring both the core components, Snap Store and Interactive UI.

##

## **Development Roadmap 🔩**

**Short Summary**

Through this grant, we intend to develop EdgeSnap from its current MVP stage to a comprehensive and fully supported project, tailored to meet the needs of all the Substrate chains. Our commitment extends beyond mere development - for the initial 9 months after complete development and integration, we will not impose any maintenance fees.

Furthermore, we are dedicated to offering integration services for all upcoming Substrate chains, fostering inclusivity and sustainability within the broader Substrate ecosystem.

The evolution from product to product as a service is the end goal for EdgeSnap. After milestone 1, we will start adding and/or will be keen to assist different [Ecosystem dApps](https://polkadot.network/ecosystem/dapps/) to add Snap support.

### **Overview**

- **Total Estimated Duration:** 3 Months
- **Full-Time Equivalent (FTE):** 2.4
- **Total Costs:** 120,000 USDT
- **Upfront** : 18,000 USDT

### **Milestone 1 | Complete Back-end Flow**

- **Estimated duration:** 1 Month
- **FTE:** 2.4
- **Costs:** 45,000 USDT

This implementation will showcase the working dynamics and final UI for a limited number of chains, providing users with a complete overview of the anticipated end product. We will also evaluate the UX flow and make iterative improvements based on the feedback received through different channels.

| Number | Deliverable | Specification |
| --- | --- | --- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use EdgeSnap portal to install snap app of their preferred chain(s) and how/where they can use it. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Articles & Cohort | We will publish 2 **articles**, one explaining the EdgeSnap in a nutshell and the other one explaining why we decided to evolve the EdgeSnap to the broader substrate ecosystem. We will also host a weekly public Cohort program inviting the maintainers of different Polkadot ecosystem dApps to add Snap compatibility. |
| 1. | Custom npm packages | Develop substrate-snaps, metamask-substrate-adapter and metamask-substrate-types based on current Polkadot&Kusama-only implementation by ChainSafe. |
| 2. | Compilation flow changes | Add support to compile individual chains' snap apps alongside the default Universal Snap app. The Snap Store is already ready to link the precompiled individual Snap apps to corresponding chains. While in the current MVP all Install buttons are linked to the Universal Snap app temporarily. |
| 3. | UI changes | Add an RPC switcher element corresponding to each chain under Snap Store. This will need the individual Snap apps to be precompiled in parallel for all the added RPCs. |
| 4. | Feedback collection & analysis | Collect feedback from different devs and users to improve the UI/UX flow further. |

###

### **Milestone 2 | First batch Integration**

- **Estimated Duration:** 1 month
- **FTE:** 1.8
- **Costs:** 28,500 USDT

In milestone 2, we are looking to achieve seamless integration of approximately half of the total Substrate chains.

| Number | Deliverable | Specification |
| --- | --- | --- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide **inline documentation** for newly integrated chains. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Cohort | We will continue hosting a weekly public Cohort program inviting the maintainers of different Polkadot ecosystem dApps to add Snap compatibility. |
| 1. | Chains' Integration | Do integration for approx half (45-55) of the total chains. {Only the relaychains, parachains and solochains available on polkadot-js will be integrated.} |
| 2. | Weekly Dev Cohort | Public process of adding Snap compatibility in different Polkadot ecosystem dApps. Can be hosted on Discord or any platform with similar functionalities. |
| 3. | Feedback collection & analysis | Collect feedback from different devs and users to improve the UI/UX flow further. |

###

### **Milestone 3 | Final batch Integration**

- **Estimated Duration:** 1 month
- **FTE:** 1.8
- **Costs:** 28,500 USDT

In milestone 3 we are looking to complete integration for all of the Substrate chains.

This will also follow up with 9 months of maintenance and assistance to ecosystem protocols with no additional costs.

| Number | Deliverable | Specification |
| --- | --- | --- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide **inline documentation** for newly integrated chains. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article & Cohort | We will publish an **article** explaining the full-fledged functionalities of EdgeSnap along side the elaboration on the milestones of this W3F grant. We will also continue hosting a weekly public Cohort program inviting the maintainers of different Polkadot ecosystem dApps to add Snap compatibility. |
| 1. | Chains' Integration | Do integration for the rest half of the total chains. {Only the relaychains, parachains and solochains available on polkadot-js will be integrated.} |
| 2. | Weekly Dev Cohort | Public process of adding Snap compatibility in different Polkadot ecosystem dApps. Can be hosted on Discord or any platform with similar functionalities. |
| 3. | Feedback collection & analysis | Collect feedback from different devs and users to improve the UI/UX flow further. |

## **Future Plans**

- Add support for newer chains.
- Integration support for all substrate ecosystem projects.

## **Additional Information ➕**

Edgeware is the oldest substrate chain. So the contributors of Edgeware DAO are quite familiar with Web3Foundation Grants.

- If there are any other teams who have already contributed (financially) to the project?

  - No.

- Previous grants you may have applied for?

  - This will be the first grant.

## **Acknowledgments**

- We used the snap app developed by Chainsafe(no direct affiliation) for Polkadot and Kusama to develop a custom port for Edgeware in the EthForAll Hackathon and won the Consensys sponsored track: [https://devfolio.co/projects/edgesnap-3cc5](https://devfolio.co/projects/edgesnap-3cc5)
