**PolkaArbitrage**
================================

- **Team Name:** Clara Hayes
- **Payment Address:** 16fHR2bMGpLD8nkicNxvQ1u6s3ArAUi7KLCnCVZS73jjFJ37
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

Project Overview :page\_facing\_up:
-----------------------------------

### Overview

**Tagline:** 

PolkaArbitrage is a real-time DeFi tool for Polkadot parachains, enabling users to capture arbitrage opportunities and monitor liquidation across Hydration, Moonbeam, and Acala, powered by XCM V5 for fast, efficient trading.

**Why:** 

With the flourishing development of DeFi within the Polkadot ecosystem, parachains such as Hydration and Moonbeam have emerged as pioneers of DeFi innovation, while the forthcoming launch of AssetHub smart contracts (supporting Solidity) will further propel ecosystem growth. Hydration’s Omnipool offers single-sided liquidity and high capital efficiency, Moonbeam’s StellaSwap, and Acala’s Defi and lending protocols enhance stability and leverage capabilities. These advancements signal an impending explosive growth for Polkadot DeFi, with Total Value Locked (TVL) and user engagement expected to significantly increase over the next 12-18 months. However, Polkadot’s multi-chain architecture presents challenges: price disparities among liquidity pools across parachains (e.g., Hydration, Moonbeam, Acala) make it difficult for users to accurately and promptly identify and capitalize on cross-chain arbitrage opportunities.
Currently, the Polkadot ecosystem lacks a real-time, accurate platform to showcase these arbitrage opportunities. For instance, the DOT/USDC pool price on Hydration may be lower than that on Moonbeam’s StellaSwap, yet users must manually query Subscan or parachain APIs, which is time-consuming and prone to missing fleeting opportunities. Moreover, cross-chain arbitrage involves XCM (Cross-Consensus Messaging), the complexity of which further impedes user participation. PolkaArbitrage is designed to address this pain point by providing real-time monitoring of parachain pool prices, delivering arbitrage opportunity notifications, and leveraging the upcoming XCM V5 (enabling more efficient cross-chain messaging and asset transfers) to facilitate rapid arbitrage.
PolkaArbitrage aims to offer Polkadot DeFi users a comprehensive solution, utilizing the Polkadot API for real-time price comparisons and WebSocket for opportunity notifications. Additionally, the tool will monitor the health factors of loans on Hydration and Acala, safeguarding arbitrage users against liquidations due to price volatility. Our goal is to enhance the competitiveness of Polkadot’s DeFi ecosystem, attract greater user participation in parachains such as Hydration, Moonbeam, and AssetHub, and drive TVL growth.

**brief description:**

- **Technology Stack**: PolkaArbitrage is built using TypeScript, Node.js, React, and Polkadot.js API, with WebSocket for real-time notifications and Vercel/Docker for deployment, ensuring scalability and accessibility across Polkadot parachains.

- **Functionality**: The tool monitors liquidity pool prices across Polkadot parachains (Hydration, Moonbeam, Acala) to identify arbitrage opportunities, executes trades via XCM V5 with a 0.1% fee (20% to Polkadot Treasury, 80% to team), and tracks loan health factors to prevent liquidations. A React frontend provides real-time dashboards and one-click trade execution.

- **Objective**: PolkaArbitrage aims to enhance Polkadot’s DeFi ecosystem by enabling users to capitalize on cross-chain arbitrage and safeguard against liquidation risks, boosting parachain TVL and user adoption while contributing to ecosystem sustainability through Treasury funding.

**Relation to Substrate/Polkadot/Kusama**:  
PolkaArbitrage is tightly integrated with the Polkadot ecosystem, utilizing the Polkadot.js API to monitor real-time prices across Substrate-based parachains (Hydration, Moonbeam, Acala) and execute arbitrage transactions via XCM V5, enhancing cross-chain DeFi efficiency. Deployed initially on Kusama testnets, it strengthens parachain interoperability and user engagement, driving Total Value Locked (TVL) growth. The tool’s 0.1% fee mechanism allocates 20% of revenue to the Polkadot Treasury to support ecosystem development, with 80% retained by the team for ongoing maintenance, aligning with Polkadot’s decentralized governance and sustainability goals.

**Why We Are Interested**:  
We are driven to enhance Polkadot’s DeFi ecosystem, inspired by Hydration and Moonbeam’s growth and XCM V5’s potential. With experience in DeFi, we aim to empower users with real-time arbitrage and liquidation monitoring, sustaining PolkaArbitrage via a 0.1% fee.

## Team
### Team members

- Name of team leader: Clara Hayes
- Names of team members: Clara Hayes

### Contact

- **Contact Name:** Clara Hayes
- **Contact Email:** ClaraHayes.dev@gmail.com

### Legal Structure

- **Registered Address:** None
- **Registered Legal Entity:** None

### Team's experience

I have been a web3 developer for 5 years and have developed unique expertise in Rust. Did my own contribution to Polkadot-Sdk.

### Team Code Repos

https://github.com/ClaraHayesDev/PolkaArbitrage

Development Roadmap :nut\_and\_bolt:
------------------------------------

### Overview

*   **Total Estimated Duration:** 4 months
*   **Full-Time Equivalent (FTE):** 1 FTE
*   **Total Costs:** 10,000 USD

### Milestone 1 — Data Integration and Arbitrage Detection

*   **Estimated duration:** 1 month
*   **FTE:** 1
*   **Costs:** 3,000 USD


|  Number | Deliverable                                                                                                                         | Specification                                                                                                                               |
|--------:|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Apache 2.0 |
| **1.** | Node.js backend with API endpoints   | Integrate APIs for Hydration (Omnipool), Moonbeam (StellaSwap), and Acala (AMM) using Polkadot.js API to fetch real-time pool prices. 
| **2.** |      TypeScript arbitrage                                                   | Develop arbitrage detection algorithm in TypeScript to compare prices across parachains and calculate profits (including 0.1% fee and estimated fee)        
| **3.** | Fee calculation logic  | Implement basic fee calculation logic (0.1% of output amount) and simulate fee collection in a mock wallet.                                                                            

### Milestone 2 — Frontend Development and Liquidation Monitoring

*   **Estimated duration:** 2 months
*   **FTE:** 1
*   **Costs:** 4,500 USD


|  Number | Deliverable               | Specification |
|--------:|---------------------------| ------------- |
| **0a.** | License                   | Apache 2.0 |
| **1.** | React frontend (deployed on Vercel) with arbitrage dashboard. | Build React frontend to display arbitrage opportunities (table: buy chain, sell chain, profit, 0.1% fee) and liquidation alerts.
| **2.** | Integrate wallets | Integrate Polkadot.js wallet (or Talisman) for user authentication and transaction signing via Polkadot.js API.       
| **3.** | Support XcmV4 and Xcmv5  | Enable one-click arbitrage execution (call parachain AMM via Polkadot.js) with fee deduction tracked in backend.
| **4.** | Test  | Test XCM V5 compatibility for cross-parachain arbitrage (e.g., Hydration  Moonbeam) using testnet endpoints.      

### Milestone 3 — Optimization and Testnet Deployment

*   **Estimated duration:** 1 month
*   **FTE:** 1
*   **Costs:** 2,500 USD

|  Number | Deliverable               | Specification |
|--------:|---------------------------| ------------- |
| **0a.** | License                   | Apache 2.0 |
|      1. | Optimized Node.js backend with WebSocket integration. | Optimize arbitrage algorithm to account for XCM V5 latency and minimize slippage using Polkadot.js API. |
|      2. | Fully functional React frontend       | Deploy full stack (Node.js backend, React frontend) to Hydration and Acala testnets using Github. |
|      3. | Deployment guide, user manual, and feedback summary. | Conduct community testing with Polkadot Forum users (10 users, 50 trades, 10 alerts) and gather feedback. |

Future Plans
------------

PolkaArbitrage initially targets AMM arbitrage across Polkadot parachains (Hydration, Moonbeam, Acala) using TypeScript, Polkadot.js API, and XCM V5, with a 0.1% fee (20% to Polkadot Treasury, 80% to the team). While addressing cross-chain arbitrage needs, our vision is to deepen integration within Polkadot’s DeFi ecosystem. If the first phase of PolkaArbitrage develops successfully, we plan to apply for additional W3F funding to support the following expansions:

1. **Lending Protocol Arbitrage**: Extending arbitrage to lending markets (e.g., Hydration, Acala), integrating automated collateral adjustments and liquidation protection to enhance arbitrage profitability.

2. **Meme Token Arbitrage**: Supporting Polkadot’s meme coin markets (e.g., on Moonbeam or AssetHub), enabling real-time arbitrage across parachain pools for volatile token trading.

3. **Support for Additional Parachains**: Broadening compatibility to more Polkadot parachains (e.g., Bifrost Finance, Phala Network, Centrifuge), leveraging XCM V5 for seamless arbitrage opportunities across a wider parachain network.

These enhancements aim to position PolkaArbitrage as a comprehensive DeFi arbitrage tool, boosting user adoption and TVL growth. 


