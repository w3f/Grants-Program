# Swush Dex Aggregator

- **Team Name:** Swush Labs
- **Payment Details:**
    - **DOT:** [Polkadot address] 124C7vfXbvBausfviN3ydZjj4voxPyEwmnJDuNJ9y4kU3ETN
    - **Payment (USDC/USDT):** [Polkadot AssetHub address - USDC] 124C7vfXbvBausfviN3ydZjj4voxPyEwmnJDuNJ9y4kU3ETN
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

### **Swush: A Unified DEX Aggregator for Polkadot’s Cross-Chain Ecosystem**

**The Case for a DEX Aggregator**

As the cross-chain asset and network grows, users increasingly need efficient, cross-chain asset trading. Yet, within Polkadot’s ecosystem, users face several significant challenges:

- **Fragmented Liquidity:** Assets and liquidity are spread across Polkadot’s parachains like Hydration, Moonbeam and Asset Hub, making it difficult for users to find optimal trading routes and rates.
- **Complex Cross-Chain Transfers:** Users must navigate multiple interfaces and steps to perform cross-chain transactions, which discourages adoption and limits liquidity flow.
- **Underutilized Potential of Asset Hub:** Positioned as a central liquidity hub, the Asset Hub is ideally suited for cross-chain aggregation, but current solutions don’t fully capitalize on this potential.

A **DEX aggregator** directly addresses these issues by connecting to multiple decentralized exchanges (DEXs) and liquidity sources, allowing users to access the best swap rates, lowest fees, and minimal slippage for their trades. Within Polkadot, an aggregator can unify these scattered resources into a single, user-friendly interface, making DeFi more accessible and enhancing overall ecosystem liquidity.

### **Swush: A Solution Aligned with Polkadot’s Vision**

<img src="https://github.com/user-attachments/assets/84090aea-7633-413f-a512-fe610388d50a" alt="Image description" width="960" height="580" />

**Swush** is a **DEX aggregator** built on Polkadot Asset Hub, specifically to meet the needs of Polkadot’s cross-chain DeFi users. By leveraging cross-chain messaging (XCM), and aggregating assets from multiple parachains, Swush allows users to swap assets seamlessly across the ecosystem with minimal friction.

Key features include:

- **Optimized Route Selection:** Real-time analysis of liquidity and fees ensures users receive the most cost-effective swap routes.
- **User-Friendly Cross-Chain Swaps:** A simplified interface abstracts complex cross-chain steps, making transfers straightforward.
- **Centralized Liquidity Access:** By aggregating from Polkadot’s Asset Hub and other parachains, swush maximizes the utility of existing liquidity pools.


### Ecosystem Fit

We published a initial research on current state of DEX aggregation and cross-chain transfers in ecosystem [here](https://www.notion.so/DEX-Aggregator-for-Asset-Hub-10ca0d44e13d8040ae48d2ec6f5f9a9a?pvs=21) .

**Why a DEX Aggregator matters to the Polkadot Ecosystem**

Our DEX aggregation thesis aligns closely with Rob's vision for the [evolution of AssetHub "Plaza"](https://www.rob.tech/blog/plaza/), where he emphasizes its current ability to scale to thousands of TPS, with even greater potential in the future. With [smart contract support](https://forum.polkadot.network/t/contracts-on-assethub-roadmap/9513) anticipated on Polkadot AssetHub by the end of December, we expect a surge in DApps and users. This growth will naturally create a demand for liquidity on AssetHub as these users and applications scale.

A similar success story can be seen with the Jupiter DEX aggregator on Solana, which has greatly improved trading efficiency by aggregating liquidity across multiple DEXs, offering users the best prices with minimal slippage. I’ve shared some [key statistics](https://www.notion.so/Jupiter-on-Solana-A-Success-Story-10da0d44e13d80aea29dc771f76b67a6?pvs=21) that demonstrate Jupiter's impact on Solana.

On a related note, cross-chain DEX solutions are gaining momentum. we recently came across a research paper by [LiquiSpell](https://www.frontiersin.org/journals/blockchain/articles/10.3389/fbloc.2024.1413840/full), a novel protocol unifying liquidity across multiple parachains within the Polkadot ecosystem. Other cross-chain DEX solutions like [Chainflip](https://chainflip.io/) and [Squid router](https://www.squidrouter.com/) on the Axelar Network are designed to connect major blockchain networks like Ethereum, Layer 2s, Solana, and others. [Hyperbridge](https://hyperbridge.network/) is also seeing traction and indicate a growing interest in seamless cross-chain liquidity.

Teams like Velocity Labs are advancing AssetHub integration beyond the Polkadot ecosystem, focusing on areas such as CEXs, onramps, and oracles. Their recent announcement regarding [AssetHub integration for custodians](https://medium.com/velocity-labs/improving-user-experience-for-polkadot-assets-the-ultimate-guide-for-custodians-706800a540b6) is an encouraging development.

**Where and How swush Fits into the Polkadot Ecosystem**

Swush fits as a DEX aggregator on Polkadot Asset Hub, addressing the need for efficient, cross-chain asset swaps. By aggregating liquidity from various parachains and optimizing routes, swush  helps users access the most cost-effective and time-efficient paths for asset exchanges. This supports Polkadot’s vision of a unified, interoperable blockchain ecosystem by simplifying cross-chain DeFi activities.

 **Target Audience**

- **Primary Users:** General users in the Polkadot ecosystem looking for efficient asset swaps.
- **Developers & DApp Builders:** Parachain developers and dApp builders seeking cross-chain liquidity solutions for their own applications.
- **DeFi Traders:** DeFi users within the Polkadot and Kusama networks who rely on optimized routing for swaps to reduce costs and increase transaction efficiency.

 **Problem(s) Addressed**

As outlined in the **The Case for a DEX Aggregator,** Polkadot’s ecosystem faces challenges mentioned below. **Swush** tackles these issues with a clear, user-centric approach:

- **Liquidity Aggregation Across Parachains:** By unifying liquidity from Polkadot’s parachains like Hydration, Moonbeam, and Asset Hub, swush provides users with optimized, cross-chain trading routes and cost-effective swap rates.
- **Streamlined Cross-Chain Transactions:** swush simplifies complex multi-step transactions into a single, user-friendly interface, reducing friction and making cross-chain interactions accessible to all users.
- **Enhanced Utility for Asset Hub:** With its aggregation model, swush fully leverages the Asset Hub’s capacity, positioning it as a key liquidity hub and aligning with Polkadot’s vision of a unified, interoperable DeFi ecosystem.

 **Existing Similar Projects in Polkadot/Kusama**

A cross-chain DEX Aggregator doesn't exist yet in the ecosystem as per our research. While other DEXs exist in Polkadot, such as **Hydration** or **StellaSwap**, they focus more on liquidity pools and swaps within their ecosystems rather than a cross-chain aggregation solution.

 **Similar Projects in Other Ecosystems**

- **Jupiter(Solana)** : We published some key stats [here](https://www.notion.so/Jupiter-on-Solana-A-Success-Story-10da0d44e13d80aea29dc771f76b67a6?pvs=21).
- **1inch (Ethereum):** A popular DEX aggregator on Ethereum that uses liquidity aggregation and route optimization to lower swap costs.
- **Thorchain (Cross-Chain):** Focuses on native cross-chain asset swaps. Swush takes a similar approach but uses Polkadot’s cross-consensus messaging (XCM).

**The Case for Growth**

The success of our DEX aggregator is closely tied to the adoption and growth of the **Plaza** within the Polkadot ecosystem. For a DEX aggregator on Plaza to reach its full potential, it will require strong traction and active participation from various ecosystem players.

Several development teams have already expressed interest in building on Plaza, pending the launch of smart contract support, which will be essential for Plaza’s functionality. However, the immediate demand for a DEX aggregator will depend on Plaza’s initial adoption rate and traction among parachains and users.


### Project Details

![Screenshot 2024-11-05 034439](https://github.com/user-attachments/assets/c7997621-c916-441b-98d9-b43b3618f837)


 **UI Mockups/Designs**

- UI features include
    - **Swap Interface:** Allows users to initiate and confirm cross-chain swaps with input fields for asset selection, swap amount, slippage tolerance, and fee breakdown.
    - **Wallet Connection:** Seamless integration with popular wallets like Polkadot.js and Talisman.
    - **Transaction History:** View of past transactions, including swap details, fees, and timestamps.
    - **Notification System:** Real-time alerts on transaction statuses (success, pending, or failure).
- **Mockups and UI Designs:** Our ongoing work at figma [here](https://www.figma.com/design/kWunXnESHS2wN4xBESBikE/Untitled?node-id=0-1&t=axXKrqgd5AFmmKkX-1). We are still in process of finalizing the design as we intend to evolve it more and make as UX friendly as possible. 

 **Technology Stack**

- **Frontend:** Next.js and React
- **Backend:** Node.js with TypeScript to handle core logic, API integrations, and cross-chain messaging.
- **Database:** MongoDB or PostgreSQL to store user transaction history and application metadata.
- **Blockchain Integration:** Polkadot.js API to enable wallet connections, XCM transactions, and interaction with DEXs across Polkadot’s parachains.
- **DevOps:**  CI/CD with GitHub Actions for efficient development workflows.

 **Core Components & Architecture**


- **Asset Storage on Polkadot Asset Hub**
We plan to store all assets, including parachain tokens such as HDX(Hydration) and GLMR(Moonbeam), as foreign assets on the Polkadot Asset Hub. The Asset Hub provides a unified repository where native tokens, parachain assets, and bridged tokens can be securely registered, managed, and operated.
    - More info on Assets at [Asset Hub](https://wiki.polkadot.network/docs/build-integrate-assets)

![](https://github.com/user-attachments/assets/e5c1abf0-effd-480d-b1bb-f7810220530b)

- **Cross-Chain (XCM) APIs and DEX Swap Integration:**
    - Integrates cross-chain messaging (XCM) to transfer assets from the Asset Hub to a parachain (e.g., Hydration) for swapping. After the swap on the parachain, assets are returned to the Asset Hub, allowing users to access parachain liquidity while keeping assets on the Asset Hub.
    - Polkadot Asset Hub’s Asset APIs to enable real-time asset balances, rates, and integration of Asset Hub assets in cross-chain swaps.
![](https://github.com/user-attachments/assets/a885b892-f231-46ea-aca9-cf126e4f2d64)



- **Slippage Control and Protection:**
    - Implementation of slippage control, allowing users to set a maximum slippage tolerance for their swaps. This ensures that users are protected against drastic price changes during the transaction execution process.
- **Real-time Rate and Fee Updates:**
    - Implementation of real-time updates for swap rates and transaction fees.
- **Optimized Routing**
    - Automated route optimization to ensure that users are always getting the most cost-efficient swap by comparing fees, quote price and slippage across various DEXes(e.g. Polkadot Asset Hub DEX and Hydration DEX)

![Untitled-2023-12-14-2209](https://github.com/user-attachments/assets/3d549de6-3f80-4fce-afce-556a9e66cf43)



## Team :busts_in_silhouette:

### **Team members**

**Name of team leader:**
- Anwesh Nayak (@muddlebee)

**Names of team members:**
- Arnav Nayak

### **Contact**
- **Contact Name:** Anwesh Nayak
- **Contact Email:** [anweshknayak@gmail.com](mailto:anweshknayak@gmail.com)

### **Legal Structure**
- **Registered Address:** NA
- **Registered Legal Entity:** NA

### **Team's experience**

I have around 5 years of experience in full stack development. Previously worked as a tech lead at B2B fintech firm. Also, previously was a polkadot ambassador and the community manager/moderator of the official polkadot/kusama discord. I have been contributing to the ecosystem since 2 years. Also participated in Thousand Contributors Programme by w3f and have been adding suggestions/improvements across the w3f github projects(polkodot-wiki).

Also wrote a comprehensive tutorial to get started with Polkadot using the polkadot-js API (https://polkadotjs-developer-hub.gitbook.io/)

**Arnav**, our lead designer has 3.5 years of experience in product, UI/UX design and management.

### **Team Code Repos**

https://github.com/swush-labs/

### **Team Profiles (if available)**

- https://github.com/muddlebee
- https://www.linkedin.com/in/arnav-nayak-321595141/

## Development Status :open_book:
We have added all our research work at [Ecosystem Fit section](#ecosystem-fit). \
Our initial UI which we created is hosted [here](https://swush-labs.github.io/swush-me-app/), but we plan to iterate as per the designs shared at [Project Details](#project-details).

## Development Roadmap :nut_and_bolt:

### Overview[](https://grants.web3.foundation/applications/typink#overview-1)

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 1.5
- **Total Costs:** 25,000 USD
- **DOT %:** 50%

### **Milestone 1: Foundational Development & Simulation Environment**

- **Time: 1.5 - 2 months**
- **FTE:**  1.5
- **Costs:** 9000 USD

### **Initial Proof of Concept (POC):**

- **Basic Functional UI (Responsive Design):**
    - Creation of a responsive user interface (UI) that will serve as the primary interaction layer. The UI will include swap functionality, wallet connection, and real-time asset balances of user.
- **Wallet Integration:**
    - Integration of Web3 wallets (e.g., Polkadot.js, Talisman) for seamless user authentication, transaction signing, and balance viewing.
- **Simulated Testing Environment:**
    - Setup of a simulated testing environment to replicate real-world conditions. This will include mock wallets for swap visualizations, allowing developers to test various swap scenarios and edge cases (e.g., low liquidity, high fees).
        - Mock multiple networks  (Polkadot Asset Hub and parachain)
        - Liquidity pools for asset swaps
        - Cross-chain asset swapping
        - Route optimization to find the most cost-efficient swap
        - Final Aggregation and Testing Simulation
- **Basic Notification System:**
    - Development of a notification system to provide users with real-time feedback on transaction status.
- **User Profiles:**
    - Implement user profiles to store settings (e.g.. preferred slippage tolerance).
      

| Number | Deliverable | Specification |
| --- | --- | --- |
| **0a.** | License | GPLv3  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** |
| **0c.** | Testing and Testing Guide | Tutorial that explains how to test all deliverables of this milestone. Core functions for this milestone will be tested with **Simulated Testing Environment** as mentioned above. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article for the work done. |
| 1. | **Basic Functional UI (Responsive Design)** | (as mentioned above) |
| 2. | **Wallet Integration** | (as mentioned above) |
| 3. | **Simulated Testing Environment** | (as mentioned above) |
| 4. | **Basic Notification System** | (as mentioned above) |
| 5. | **User Profiles** | (as mentioned above) |


### **Milestone 2: Advanced Features**
- **Time: 2-2.5 months**
- **FTE:**  1.5
- **Costs:** 16000 USD

### **Features:**

- **Cross-Chain (XCM) APIs and DEX Swap Integration:**
    -  Integrates cross-chain messaging (XCM) to transfer assets from the Asset Hub to a parachain (e.g., Hydration) for swapping. After the swap on the parachain, assets are returned to the Asset Hub, allowing users to access parachain liquidity while keeping assets on the Asset Hub.
    - Polkadot Asset Hub’s Asset APIs to enable real-time asset balances, rates, and integration of Asset Hub assets in cross-chain swaps.

- **Slippage Control and Protection:**
    - Implementation of slippage control, allowing users to swap assets below maximum slippage tolerance set in User Profiles(Milestone 1). This ensures that users are protected against drastic price changes during the transaction execution process.
- **Real-time Fee Updates:**
    - Implementation of real-time updates for swap rates and transaction fees. This will involve pulling live data from Asset Hub and parachain DEX.
- **Multi Asset Pair Swap**
    - Support swaps between asset pairs not present in liquidity pools (e.g., MYTH/USDC when only DOT/USDC and DOT/MYTH are available).
- **Optimized Routing**
    - Automated route optimization to ensure that users are always getting the most cost-efficient swap by comparing fees, quote price and slippage across various DEXes(e.g. Polkadot Asset Hub DEX and Hydration DEX)
- **Advanced Simulated Testing Environment:**
    - Comprehensive testing of the entire DEX aggregator, including functionality and performance. This will involve simulating testing transaction reliability across multiple chains, and ensuring the stability of the platform under different scenarios (e.g., high transaction volume, fluctuating slippage).
- **User Transaction History:**
    - Implementation of user transaction history, enabling users to view their past swaps.

Note: for parachain DEX integration we will do for Hydration only as of now. 

 

| Number | Deliverable | Specification |
| --- | --- | --- |
| **0a.** | License | GPLv3  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** |
| **0c.** | Testing and Testing Guide | Tutorial that explains how to test all deliverables of this milestone. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article for the work done. |
| 1. | **Cross-Chain (XCM) APIs and DEX Swap Integration** | (as mentioned above) |
| 2. | **Slippage Control and Protection** | (as mentioned above) |
| 3. | **Real-time Fee Updates** | (as mentioned above) |
| 4. | **Multi Asset Pair Swap** | (as mentioned above) |
| 5. | **Optimized Routing** | (as mentioned above) |
| 6. | **Advanced Simulated Testing Environment** | (as mentioned above) |
| 7 | **User Transaction History** | (as mentioned above) |


## Future Plans

- **Long-term Maintenance and Development Funding:**
    - With our estimated budget, we plan for the platform to be self-sustainable for maintenance and further development until it achieves product-market fit (PMF).
    - Should we see significant user traction after Plaza’s full launch, especially with smart contract support, we will seek additional funding.
- **Short-term Strategy:**
    - Our initial focus is on a beautiful UX and strong branding to build user confidence in our platform. We recognize that trust-building will take time, as users may be cautious initially. To attract new users, we plan to launch NFTs and incentive programs that encourage engagement and usage.
- **Long-term Vision:**
    - Establish Swush as a trusted platform and cross-chain transaction hub for Polkadot.
    - Achieve self-sustainability through revenue streams such as trading fees. Since cross-chain transfers incur some fees, we’re also exploring additional revenue streams.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 
