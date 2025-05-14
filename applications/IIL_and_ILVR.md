# The Implied Impermanent Loss and Implied LVR

- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1
- **Team Name:** Implied Risk Team

## Project Overview :page_facing_up:


### Overview
We propose developing a forward-looking, option-implied measure of risk for liquidity providers (LPs) on decentralized exchanges (DEXs), focusing on impermanent loss and loss-versus-rebalancing (LVR). Using traded option prices, our metric—applicable across major token pairs like—captures real-time market expectations and volatility. This “VIX for DeFi” would enable professionalized market-making, risk-based dynamic fees, and hedging strategies. We aim to collaborate on real-time integration into your platform, enhancing liquidity efficiency, stability, and user education.

Our project integrates directly with Polkadot's ecosystem by leveraging Substrate to build a decentralized solution for measuring liquidity risk. We will utilize Polkadot's interoperability features to ensure cross-chain functionality, allowing our risk measure to be applied to multiple token pairs across different decentralized platforms. Substrate's modularity will enable us to create custom modules for calculating risk, while Kusama’s experimental environment will allow for fast iteration and testing of the solution before deployment on Polkadot. By using Substrate's smart contract capabilities, we will provide users with real-time risk metrics that are fully decentralized and integrated into the broader Polkadot ecosystem.

Our team is driven by a shared goal of improving the transparency and stability of decentralized finance (DeFi). With our combined background in finance, mathematics, and blockchain development, we recognized the lack of sophisticated risk management tools for liquidity providers in DEXs. Impermanent loss and rebalancing risks are major pain points for LPs, and our solution aims to address these challenges by providing a predictive, real-time risk measure. We are excited about creating a tool that can professionalize market-making and improve liquidity provision by offering more accurate risk assessments. This aligns with our mission to enhance the efficiency of DeFi markets, reduce volatility, and ultimately increase user participation and trust in decentralized finance.

### Project Details


The core functionality relies on APIs to collect data. Specifically, the project uses the Amberdata API to access cryptocurrency derivative trading platform data, which is crucial for calculating implied impermanent loss and loss-versus-rebalancing. Additionally, data related to liquidity pools is accessed via The Graph. The data models will need to integrate information from these APIs to provide real-time risk assessments for liquidity providers.

The project utilizes Amberdata for accessing derivative pricing data, and The Graph for pool data. The integration with Substrate and Polkadot/Kusama is expected to ensure decentralized functionality and real-time risk monitoring, enhancing the liquidity provision process.

The project focuses on calculating real-time risk for liquidity providers using a risk-neutral option-implied valuation model. The core components include the optimization framework for measuring impermanent loss and loss-versus-rebalancing. The architecture will likely include smart contracts deployed on Polkadot or Kusama to manage liquidity risk data, along with the integration of Amberdata for price feeds and The Graph for liquidity pool data.

Our current working papers, on which this proposal is built, 
- Yield Farming for Liquidity Provision (https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4422213)
- Implied Impermanent Loss: A Cross-Sectional Analysis of Decentralized Liquidity Pools (https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4811111)
- Decentralized and Centralized Options Trading: A Risk Premia Perspective (https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4822783)
got presented at various conferences. 


Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):

- The (future) tokenomics of your project
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach

### Ecosystem Fit

This project fits into the Polkadot and Kusama ecosystem by providing a real-time, forward-looking risk metric for liquidity providers, which complements the growing set of DeFi primitives developed within Substrate-based parachains. The project introduces a novel, option-implied measure for impermanent loss and loss-versus-rebalancing, which can be computed for a wide range of token pairs including BTC, ETH, and Stablecoins. These risk measures can be integrated into the ecosystem's dApps or dashboards to help users make more informed decisions when providing liquidity. In this sense, the metric could serve a role similar to that of the VIX in traditional finance, but tailored for DeFi liquidity provisioning

The main audience includes developers and teams working on decentralized exchanges, AMMs, and liquidity tools in the Polkadot/Kusama environment. It also targets analytics and UI developers who want to incorporate risk metrics into their products, as well as liquidity providers looking for tools to evaluate or hedge their exposure. In addition, researchers and academics studying decentralized liquidity mechanisms may benefit from the framework and empirical findings.

The need for this type of metric arises from the inherent risks in providing liquidity in decentralized markets, particularly the challenge of impermanent loss. Unlike backward-looking approaches, this project uses option-implied information extracted from traded option prices, providing a forward-looking view that is more robust in volatile market environments. These needs were identified through the academic work on which the project is based, specifically the three working papers that have been presented at conferences: Yield Farming for Liquidity Provision, Implied Impermanent Loss, and Decentralized and Centralized Options Trading. These studies offer both theoretical and empirical support for the importance of real-time risk assessment in DeFi.

To our knowledge, no existing project in the Polkadot or Kusama ecosystem currently implements a similar approach using option-implied information for liquidity risk. While some platforms offer analytics for LPs, they typically do not provide real-time, risk-neutral measures based on derivative markets. The uniqueness of this project lies in its quantitative methodology and potential to directly inform liquidity provision, dynamic fee mechanisms, and hedging strategies. In other ecosystems, similar goals are being pursued, but usually without integrating derivative market data. Therefore, this project fills a gap by bringing rigorous financial modeling into the decentralized liquidity space on Polkadot and Kusama.

## Team :busts_in_silhouette:

### Team members

- Lorenzo Schoenleber
- Andrew Papanicolaou

### Contact

- **Contact Name:** Lorenzo Schoenleber
- **Contact Email:** lorenzo.schoenleber@carloalberto.org
- **Website:** https://sites.google.com/view/lorenzo-schoenleber/menu

### Team's experience
- Prof. Dr. Lorenzo Schoenleber is an Assistant Professor in Finance at the Collegio Carlo Alberto and the University of Turin. He obtained his PhD at the Frankfurt School of Finance. He is also associated with the Fintech & Digital Finance Chair at Paris Dauphine University. His area of specialization is empirical asset pricing (option-implied information) and DeFi (Yield Farming).
- Prof. Dr. Andrew Papanicolaou is an associate professor in the Department of Mathematics at North Carolina State University (NCSU). His PhD is in applied mathematics from Brown University. His research interests are computational finance and stochastic systems for control and optimization. The applications of this work include financial data analysis and the challenges associated with these highly complex data sets. My background is in probability theory and nonlinear filtering.


## Development Status :open_book:
Our current working papers, on which this proposal is built, 
- Yield Farming for Liquidity Provision (https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4422213)
- Implied Impermanent Loss: A Cross-Sectional Analysis of Decentralized Liquidity Pools (https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4811111)
- Decentralized and Centralized Options Trading: A Risk Premia Perspective (https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4822783)
got presented at various conferences. 

## Development Roadmap :nut_and_bolt:
Dates - Project stage 
- 06-08/2025 – Accessing, preparing, and processing spot and option data via the Amberdata API 
- 08-09/2025 – Accessing liquidity pool data using The Graph
- 09-12/2025 – Developing the mathematical optimization framework to replicate V3 type of pools and LVR 
- 01-02/2026 – Programming and numerically solving the optimization framework  
- 02-06/2026 – Live implementation of the code to calculate the measure in real time
- 07-08/2026 – First White paper draft


### Overview

- **Total Estimated Duration:** 14 months
- **Total Costs:** 10,000 USD

We want to emphasize that any amount of sponsorship or donation would be beneficial for us since we are trying to request funding from different funding sources to realize this project.


### Milestone 1 

- **Estimated duration:** 2 months
- **Costs:** 6.000 USD

### Milestone 2 

- **Estimated duration:** 1 months
- **Costs:** 1,000 USD

### Milestone 3

- **Estimated duration:** 3 months
- **Costs:** 0 USD

### Milestone 4

- **Estimated duration:** 2 months
- **Costs:** 0 USD

### Milestone 5

- **Estimated duration:** 4 months
- **Costs:** 2,000 USD

### Milestone 6

- **Estimated duration:** 2 months
- **Costs:** 1,000 USD

## Future Plans

After the grant, the project will continue through academic collaboration between the proposing researchers and their institutions. The development will be maintained through open-source contributions and ongoing research activity related to decentralized finance and liquidity provision. The project aims to publish its methodology and results in a peer-reviewed academic journal, thereby enhancing its scientific credibility and visibility.

In the short term, the core focus will be to implement and deploy the real-time risk measure based on option-implied data, and to make it available for integration into decentralized platforms. The team is open to displaying the results on front ends of DEX protocols and believes that a forward-looking risk measure can improve liquidity provision practices and enable more strategic market-making.

For long-term sustainability, the proposal mentions the intention to seek funding from various sources. This includes sponsorship, academic research support, and potential cooperation with DeFi platforms interested in integrating the risk metrics. The team emphasizes that any amount of sponsorship would be beneficial, underlining their intention to combine different funding streams to support the project’s future development and use.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
