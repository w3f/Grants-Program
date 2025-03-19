# Prediqs: User-Generated Prediction Markets on Polkadot

- **Team Name:** Paff Studios Yazılım Donanım ve Ticaret Limited Şirketi
- **Payment Details:**
  - **DOT:** 12QfNqK4qLyDykfMj5y8TLHX7hX2mViBJ6YBywaZzQJSsVzB (DOT)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1

---

## Project Overview • :page_facing_up:

### Overview

**Prediqs** is a decentralized prediction market built on **Polkadot**. The platform allows users to create, trade, and participate in predictions across a wide range of topics, such as sports, politics, finance, and entertainment. By leveraging Polkadot's interoperability and scalability, Prediqs ensures efficient, secure, and low-cost interactions for users, creating a seamless experience.

Key features include:

- **User-Generated Predictions:** Users can create and manage their own prediction markets with customizable rules and parameters.
- **Decentralization:** Operates transparently on Polkadot, ensuring security and trust through distributed ledger technology.
- **Token Rewards:** PRD tokens reward users for successful predictions and incentivize participation. Smart contracts ensure fair token distribution.

**Polkadot's** tech stack enables efficient development, while its interoperability allows Prediqs to connect seamlessly with other parachains and dApps in the Polkadot ecosystem.

---

## Project Details

### Deliverables

- **License:** Apache 2.0 license ensuring open source compliance and contribution guidelines.
- **Mockups & UI Designs:** A Figma design file that includes user-friendly interfaces for market creation, participation, and token management. The mockups ensure seamless user experience.
- **Data Models & APIs:** Backend APIs and database structures for managing prediction events, trades, and token rewards. The data layer incorporates advanced query optimizations for real-time updates.
- **Technology Stack:**
  - **Smart Contracts:** Solidity for custom prediction logic, ensuring precise execution and flexibility.
  - **Frontend:** React.js + Polkadot-API integration for user interfaces.
  - **Backend:** Simple backend functions that enhances the functionality of Prediqs, that comes with a nice JSDoc for readability.
- **Documentation:** Comprehensive guides for developers and end-users, including:
  - Platform usage manuals.
  - SDK integration guides.
  - Smart contract APIs and examples.
- **Tests:** Comprehensive test suite for smart contracts and frontend components to ensure reliability and security.
- **Testing Guide:** Step-by-step instructions for running tests locally and validating functionality across different components.
- **Proof-of-Concept (PoC)/Minimum Viable Product (MVP):** Initial version of the platform with functionalities like market creation, participation, and token staking.

### Smart Contract Details

- Developed using **Solidity**, targeted to **PVM**, and initially deployed on **Westend Asset Hub**.
    
#### Overview of Smart Contracts in Prediqs

The smart contracts powering Prediqs are designed to ensure security, scalability, and flexibility. These contracts integrate seamlessly with Substrate's modular architecture, enabling advanced functionality and interoperability within the Polkadot ecosystem.

#### Core Components

1. **Market Creation Module:**
   - Allows users to create prediction markets with customizable parameters (e.g., event type, resolution criteria, and participation limits).
   - Validates market details to ensure compliance with platform rules and prevent fraudulent activities.

2. **Participation and Staking Module:**
   - Manages user participation, including token staking for predictions.
   - Ensures accurate tracking of staked amounts and user balances.

3. **Reward Distribution Module:**
   - Calculates and distributes rewards based on prediction outcomes.
   - Implements automated token transfers using on-chain validation mechanisms.
   - Ensures that reward distribution is tamper-proof and transparent.

4. **Fraud Detection and Security:**
   - Includes reentrancy attack prevention measures by utilizing checks-effects-interactions patterns.
   - Implements time locks for critical functions to reduce the risk of exploitation.
   - Provides real-time monitoring and auditing tools for contract performance.

---

## Main Features

### User-Generated Content

The platform enables users to contribute their own prediction markets, topics, and resolution mechanisms. By incorporating user-generated content, Prediqs empowers the community to:

- Create custom market categories tailored to specific interests.
- Define unique resolution rules for niche prediction scenarios.
- Participate actively in shaping the content available on the platform.

This feature enhances engagement and broadens the scope of prediction markets by allowing users to contribute their expertise and creativity.

### AI-Based Market Resolution

Prediqs integrates advanced AI algorithms to assist in market resolution by:

- Analyzing large datasets in real time to predict outcomes more accurately.
- Offering AI generated insights to improve decision-making for participants.
- Reducing bias in market outcomes by leveraging impartial AI based resolutions.
- Providing personalized market recommendations based on user preferences and past participation patterns.
- Implementing natural language processing to interpret complex market conditions and translate them into clear outcomes.
- Using machine learning models to detect anomalies in trading patterns that might indicate market manipulation.

The AI systems will continuously learn and adapt, ensuring that predictions and resolutions are based on the most reliable data. Our proprietary deep learning models analyze historical market performance alongside real-time external data sources to provide users with actionable intelligence that guides their prediction strategies.

### Oracle Integration

To ensure the accuracy and reliability of external data, Prediqs utilizes oracle services, which:

- Fetch real-world data to resolve prediction markets (e.g., election results, sports scores).
- Provide tamper-proof and decentralized verification of external events.
- Enable seamless interaction between on-chain prediction markets and off-chain data sources.

Oracles enhance trust and transparency, ensuring that market outcomes are determined fairly and securely.

### Infinite Scrolling UI

The platform's UI has been upgraded to include an **infinite scrolling feature**, which:

- Provides a seamless browsing experience for users by loading new markets dynamically as they scroll.
- Reduces page load times and improves performance by fetching content incrementally.
- Enhances user engagement and exploration by presenting content continuously.

This feature creates a modern, intuitive interface that encourages users to explore more markets without interruptions.

---



  ![](https://imgur.com/QI2ThKe.png)
  ![](https://imgur.com/qUuNt3c.png)
  ![](https://imgur.com/YcA1To1.png)

### Advanced Features

- **Cross-Chain Functionality:**
  - Supports communication with other parachains, enabling cross-chain prediction markets.
  - Utilizes Polkadot's XCM (Cross-Consensus Messaging) for seamless interoperability.

- **Upgradability:**
  - Supports future updates without disrupting the existing ecosystem.
  - Modular contract design allows individual components to be upgraded independently.

- **AI Predictive Analytics Dashboard:**
  - Provides users with AI-powered insights on market trends and potential outcomes.
  - Features visual representations of prediction probabilities and confidence intervals.
  - Offers sentiment analysis of market discussions to gauge community sentiment.
  - Empowers users with data-driven decision support for more informed predictions.


### Security Measures

- **Reentrancy Protection:**
  - Ensures that no external calls can manipulate contract states unexpectedly.
  - Incorporates strict validation and state management techniques.

- **Fraud Prevention:**
  - Implements advanced fraud detection algorithms to identify and mitigate malicious behavior.
  - Includes automated dispute resolution mechanisms for contested markets.
  - Leverages AI pattern recognition to identify suspicious trading patterns in real-time.

- **Audits and Bug Bounties:**
  - Conducts regular security audits by reputable firms.
  - Launches bug bounty programs to encourage community contributions toward platform security.

### Technical Implementation

- **Contract Testing:**
  - Comprehensive unit and integration tests are conducted to verify contract functionality.
  - Uses simulation environments to test real-world scenarios and edge cases.

- **Documentation:**
  - Detailed developer documentation is provided to facilitate integration and customization.
  - Includes step-by-step guides for deploying and interacting with contracts.

---

## Ecosystem Fit

### Problem Statement

Prediction markets are often centralized, costly, and limited in scope. Prediqs addresses these issues by offering a decentralized, user-driven platform built on Polkadot's robust infrastructure.

### Target Audience

- DApp developers.
- Prediction enthusiasts.
- Community-driven organizations.
- General users seeking an intuitive and cost-effective prediction platform.

### Evidence of Need

Surveys and market analyses highlight the growing interest in decentralized prediction markets. The current centralized models face scalability issues and lack transparency, making Prediqs' decentralized approach a significant improvement.

### What Makes Prediqs Different From Other Prediction Markets? 

Unlike existing platforms, Prediqs emphasizes **user-generated markets** and Polkadot's cross-chain capabilities. These ensure scalability and broader integration possibilities compared to siloed platforms. Our AI-powered analytics layer also provides users with intelligence and insights that are unavailable on competing platforms, creating a more informed and efficient prediction experience.

---

## Team • :busts_in_silhouette:

### Team Members

- **Berkehan Yusuf Ceylan** - CEO & Co-Founder ([LinkedIn](https://www.linkedin.com/in/berkehan-yusuf-ceylan-78b89517b/))
- **Atlas Deniz Akbulut** - COO & Co-Founder([LinkedIn]( https://www.linkedin.com/in/atlas-deniz-akbulut-5836831b3/))
- **Batuhan Hınçal** - CTO ([LinkedIn](https://www.linkedin.com/in/bthnhncl/), [GitHub](https://github.com/tougenrip))
- **Doruk Tan Karakaş** - Lead Developer ([LinkedIn](https://www.linkedin.com/in/doruk-tan-karaka%C5%9F-288720246/), [GitHub](https://github.com/DorukTan))
- **Bora Diler** - Developer ([LinkedIn](https://www.linkedin.com/in/bora-diler-1a075b270/))
- **Ömer Faruk Maraşlı** - Junior Developer ([LinkedIn](https://www.linkedin.com/in/omer-faruk-marasli/), [GitHub](https://github.com/OmerFarukMarasli))
- **Eylem Sena Özcan** - Art Director ([LinkedIn](https://www.linkedin.com/in/eylem-sena-%C3%B6zcan-394944246/))
- **Celal Gündoğdu** - Growth Hacker ([LinkedIn](https://www.linkedin.com/in/celal-g%C3%BCndo%C4%9Fdu-8359792b8/))

### Contact

- **Contact Name:** Berkehan Yusuf Ceylan
- Contact Email: [berkehan.ceylan@paffstudios.com](mailto:berkehan.ceylan@paffstudios.com)
- **Website:** [https://paffstudios.com](https://paffstudios.com)

### Legal Structure

- **Registered Address:** Çarşı Mahallesi Panaroma Sokak Rotamavi Rezidans 18/A Istanbul/Turkey 34909
- **Registered Legal Entity:** Paff Studios Yazılım Donanım ve Ticaret Limited Şirketi

### Team's Experience

Paff Studios is young group that combines expertise in blockchain development, smart contract design, and user experience. Previous projects include:

- Decentralized applications leveraging Substrate
- Full-stack blockchain integrations
- Polkadot parachain experiments

### Code Repository

- **GitHub**: [https://github.com/PaffStudios/prediqs](https://github.com/PaffStudios/prediqs)

---

## Development Roadmap • :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs:** $10,000 USD (DOT equivalent)

### Milestone 1 — Frontend Development and Documentation

- **Duration:** 2 weeks
- **FTE:** 2 FTE
- **Costs:** $5,000 USD (in DOT)

| Number  | Deliverable          | Specification                                                |
| ------- | -------------------- | ------------------------------------------------------------ |
| **1.** | License              | Apache 2.0                                                   |
| **2.** | Pitch Deck        | A pitch deck that explains the project in simple terms.                              |
| **3.**  | Mockups & UI Designs | A detailed figma file including UI elements and typography that's used throughout the project                  |
| **4.** | Basic Web Pages | A PoC web-pages of distinct features ( Such as discover, AI helper, etc.) |

### Milestone 2 — Smart Contract Writing

- **Duration:** 2 weeks
- **FTE:** 2 FTE
- **Costs:** $5,000 USD (in DOT)

| Number  | Deliverable          | Specification                                                |
| ------- | -------------------- | ------------------------------------------------------------ |
| **1.** | Wallet Connection    | Creating a simple **wallet connection** function             |
| **2.** | AI Integration       | Integration of **AI** into the 'Discover' page of PoC design |
| **3.** | Basic Smart Contract | Written in **Solidity**, a base smart contract that covers basic features (Market Creation / Resolution functions, Basic price calculation etc.) |
| **4.**  | Deploying the Contracts| Deploying the smart contracts to the **Westend Asset Hub** for testing |
| **5.**  | Basic Working Frontend | A functional frontend application with core user interface components connected to deployed smart contracts |



---

## Future Plans

- **Short Term:** Launch the platform on **Westend Asset Hub**, gather user feedback, refine features, and implement security features to protect against reentrancy and fraud attacks.
- **Medium Term:** Deploy on **Polkadot Asset Hub**, enhance AI capabilities with more advanced prediction models and user-specific insights.
- **Long Term:** Expand integrations with other parachains, introduce advanced market dynamics, and enable cross-chain prediction markets. Develop a comprehensive AI ecosystem that learns from market behaviors across multiple chains to provide increasingly accurate predictive tools.

---
## **Prediqs vs. Competitors: Detailed Comparison Table**

| **Attribute**               | **Prediqs (Polkadot)**                                                                 | **Zeitgeist (Polkadot)**                                  | **Polymarket (Ethereum/Polygon)**                         | **Oriole Insights (Polygon)**                             | **DexWin (Azuro Protocol)**                               | **Kalshi/PredictIt (Regulated)**                          | **PlotX (Ethereum/Polygon)**                              |
|-----------------------------|----------------------------------------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|
| **Blockchain**              | Polkadot (XCM-enabled cross-chain)                                                    | Polkadot/Substrate                                        | Ethereum (L1) + Polygon (L2)                              | Polygon                                                   | Ethereum/Polygon via Azuro                                | Ethereum (regulated)                                      | Ethereum + Polygon                                        |
| **Cross-Chain Support**     | ✅ **Multi-chain** (Ethereum, Polygon, Polkadot parachains via XCM)                    | ❗ Polkadot parachains only                                | ❌ Ethereum/Polygon only                                   | ❌ Polygon-only                                           | ❗ Ethereum/Polygon via Azuro                              | ❌ Single-chain                                           | ❌ Ethereum/Polygon only                                  |
| **Smart Contract Architecture** | Smart-Contract-based, optimized for prediction markets                          | Native Substrate modules                                  | EVM-based order-book model                                 | Simplified EVM contracts                                  | Peer-to-peer liquidity pools ("Liquidity Tree")           | Traditional EVM contracts                                 | AMM-based (constant-product formula)                     |
| **AI Integration**          | ✅ **Advanced Layer**:<br>- Real-time analytics<br>- Risk scoring<br>- Sentiment analysis<br>- Personalized market recommendations<br>- NLP for outcome interpretation<br>- ML-based market manipulation detection | ❌ None                                                   | ❌ No AI layer                                             | ❌ Basic trend analysis                                   | ❌ None                                                    | ❌ None                                                    | ❌ None                                                    |
| **Governance Model**        | ✅ **DAO-driven** (on-chain proposals + voting)                                       | Polkadot-native on-chain governance                       | Investor-controlled                                        | Limited community input                                   | Protocol-controlled updates                               | Centralized/regulatory oversight                          | Minimal on-chain governance                               |
| **User Experience**         | ✅ **Web2-Like**:<br>- Gamification (quests, leaderboards)<br>- Social logins<br>- Simplified onboarding | Technical UI requiring blockchain knowledge                                  | Complex order-book for advanced traders                    | Minimalist UI for rapid trading                           | Sports-focused UX with live odds                          | Traditional derivatives-like interface                    | AMM-based interface for casual traders                   |
| **Market Focus**            | **Broad**:<br>- Sports<br>- Finance<br>- Politics<br>- Social events                  | Community-driven events                                   | High-stakes politics/economics                             | Trending/short-term topics                                | **Niche**: Sports/gaming                                  | Regulated political outco<mes                              | Frequent, small-bet markets                               |
| **Liquidity Model**         | **Hybrid**:<br>- Liquidity pools<br>- Cross-chain incentives                              | On-chain liquidity aggregation                            | Order-book with deep liquidity                             | Simplified order-book                                     | Peer-to-peer liquidity pools                              | Centralized liquidity                                     | AMM-driven liquidity                                      |
| **Security Model**          | ✅ **Polkadot shared security** + DAO audits                                          | Polkadot's shared security                                | Ethereum/Polygon validators + UMA oracle                   | Polygon's PoS consensus                                   | Azuro Protocol security                                   | Regulatory compliance                                     | Ethereum/Polygon security                                 |
| **Development Speed**       | ✅ **Rapid**: Lightweight contracts + Polkadot SDK                                    | ❌ Slow (Substrate-native tooling)                        | Limited by Ethereum scalability                            | Basic EVM tooling                                         | Azuro Protocol integration                                | Regulatory hurdles                                        | Standard EVM development                                  |
| **Wallet Support**          | Nova Wallet, SubWallet, Talisman, Polkadot.js + social login                         | Polkadot.js, Talisman                                     | MetaMask, WalletConnect                                    | Polygon Wallet, MetaMask                                  | MetaMask, WalletConnect                                   | Traditional wallets + KYC                                 | MetaMask, TrustWallet                                     |
| **Adoption Metrics**        | ✅ **Funnel 25k+ users** (from our own sports AI platform)<br>DAO incentives                        | Polkadot-native community                                 | High liquidity but niche audience                          | Small-scale traders                                       | Sports/gaming niche                                       | Regulated user base                                       | AMM-focused traders                                       |
| **Key Advantage**           | Development speed due to smart-contract's                                                   | Polkadot-native security                                  | High-profile event liquidity                               | Speed for short-term bets                                 | Gasless sports markets                                    | Regulatory trust                                          | Instant AMM execution                                     |
| **Key Limitation**          | -                                                                                     | ❌ No AI, slow development                                 | ❌ High fees on Ethereum, no cross-chain                   | ❌ Single-chain, no advanced features                     | ❌ Narrow market scope                                     | ❌ Centralized, inflexible                                | ❌ No AI/cross-chain                                       |

---

## **Conclusion**  

**Prediqs** is positioned to lead the decentralized prediction market space by merging:  
- 🔗 **Cross-chain interoperability** (via Polkadot XCM).  
- 🧠 **AI-powered decision-making** for traders, featuring advanced machine learning models that analyze market trends, user behavior, and external data to provide actionable insights.  
- 🎮 **Gamification** to bridge Web2 and Web3 users.  
- ⚡ **PVM scalability** and sub-cent fees.  


## Additional Information • :heavy_plus_sign:

- **How did you hear about the Grants Program?** Recommendation from the Polkadot developer community.
- **Additional Information:** The team is passionate about creating tools that empower communities and democratize access to decentralized finance.
