# W3F Grant Proposal

- **Project Name:** Nomis
- **Team Name:** Nomis
- **Payment Address:** 0xD587404cd28Bf4eE059ac84a6B7C0219d05EA6CF (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

Nomis is an on-chain protocol based on a mathematical prediction and AI model enabling protocol users with a favorable on-chain credit score to borrow crypto with a fair collateral and APR on a case-by-case basis. On the other hand, Nomis is an open-source protocol that helps web3 developers both building new on-chain solutions and use cases, and balancing already existing high-TVL protocols.

We are going to land our protocol on top of Polkadot to make it possible for developers to create better DeFi solutions.

We strive to give an access to capital for a sufficiently broader group of people around the world, who can’t afford (or don’t want to go with) >125% collateral, but at the same time has a good credit score based on her on-chain history.

### Project Details

Nomis is at the MVP stage now. Our prototype is able to calculcate your ETH wallet's credit score based on on-chain data available. Please feel free to [test it](https://nomis.cc/).
_PS Nomis Credit Score of Vitalik's wallet is 73.73% :)_

To be clear in our roadmap let’s see our plan step by step.
  1. Data extraction from the protocol & initial parameters calculation;
  2. Credit score calculation via Nomis' AI-algorithm; Web3 login connection to boost UX;
  3. API & documentation development.

You can find more information about the algorithm, team and its previous experience in our [whitepaper](https://artemshtlv.notion.site/e859b9e3bae6412fb99d6119a8d2e5a4#983f0507df904460aaaf7ef95e847798). You can also visit our [Github repository](https://github.com/fc-ha/Nomis.ETH).

### Ecosystem Fit

1. Nomis will help Polkadot to grow its MAD as developers can be interested to build unique DeFi DApps on Polkadot using Nomis credit score, as it provides them with opportunity to extremely customize initial customer terms and offers (lending/borrowing) on a case-by-case basis. which is getting more and more adoption.
2. Nomis will help Polkadot and its ecosystem to grow TVL and MAU as a result of on-chain acquisition of mainstream borrowers who are interested in the DeFi solutions mentioned above.

Currently Nomis have no competitors on Polkadot. Although, Nomis brings two crucial competitive advantages vs other on-chain credit scores such as Chainscore (NEAR), RociFi (Polygon), Spectral Finance (Ethereum), Project Galaxy and TrueFi (Multichain), etc. to the table:
  1. Nomis is an open-source solution that helps web3 developers leverage credit scores building better on-chain products and communities.
  2. Nomis offers the most robust financial snapshot of a potential borrower hiring hierarchy analysis as a scoring method.

## Team :busts_in_silhouette:

### Team members

- Alex Barabash, CEO
- Fedor Cherepanov, CTO
- Arty Shatilov, CPO
- +7 mathematicians & developers ready-to-go full-time as grant fundings will be approved
[Team description link](https://artemshtlv.notion.site/e859b9e3bae6412fb99d6119a8d2e5a4#8d6d2b96fa994dcf84ac142217d9ca77)

### Contact

- **Contact Name:** Vitalii
- **Contact Email:** vitalii@nomis.cc
- **Website:** https://nomis.cc

### Legal Structure

- **Registered Address:** Nad zatáčkou 506/6, 10700 Praha, Czechia.
- **Registered Legal Entity:** Lobinex, spol. s r.o.

### Team's experience

The team has experience in developing and commercializing AI- and crypto-related projects such as KickCity (web3 event DApp on Ethereum) and GoRecruit (employee scoring SaaS for HR). Moreover, our spike is 15+year experience in neural networks.

### Team Code Repos

https://github.com/fc-ha/Nomis.ETH

### Team LinkedIn Profiles (if available)

[Alex Barabash, CEO](https://cz.linkedin.com/in/alexander-barabash/ru?trk=people-guest_people_search-card)<br />[Arty Shatilov, CPO](https://www.linkedin.com/in/artemshatilov/)

## Development Status :open_book:

We are at the MVP stage now. The previous steps are (1) initial documentation and whitepaper development, (2) proof-of-concept.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 4
- **Total Costs:** $50,000

### Milestone 1 — On-chain data and transaction history extraction from Polkadot (via API) and basic attribute calculation
- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):** 4
- **Total Costs:** $15,000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide documentation which will describe each input. |
| 0c. | Testing Guide | One can verify her wallet’s inputs by inserting wallet address on the landing page. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Inputs preparation (extraction + basic calculation) | We will extract both wallet data and wallet transactions using the explorer API:<br />- WalletAge = time since the first transaction;<br />- TotalTransactions = number of transactions;<br />- MinTransactionTime = minimum interval between transactions;<br />– MaxTransactionTime = maximum interval between transactions;<br />- AverageTransactionTime = average interval between transactions;<br />- WalletTurnover = total volume of all the transactions;<br />- LastMonthTransactions = number of transactions in the previous month;<br />- TimeFromLastTransaction = time since the last transaction. |  
| 2. | Landing page with calculated attributes | We will combine all the data extracted from the protocol on a landing page. One can see her on-chain inputs by inserting wallet address here. |  


### Milestone 2 — Credit score calculation via Nomis' AI-algorithm; Web3 login connection to boost UX
- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):** 4
- **Total Costs:** $15,000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | One can easily check the parameters and their values which are used to calculate their Nomis score on [the page like that](https://nomis.cc). Moreover, we will provide documentation which will describe how the model works. |
| 0c. | Testing Guide | One can verify her wallet’s score by inserting wallet address on the landing page. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Code for credit score calculation | To develop the on-chain Nomis score we will hire mathematical methods (neural networks and regression models) to build a custom mathematical model for the data extracted. <br />*Top blockchains have sufficient differences in their APIs. Moreover, every blockchain has its own data structure and data sets available to extract, so we should develop a data extraction solution as well as mathematical model from scratch for every chain. |  
| 2. | Web3 UI | We will develop UI so it will be easy for end-users to connect wallets and check their Nomis scores. |  


### Milestone 3 — Nomis API & documentation development
- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):** 4
- **Total Costs:** $20,000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide documentation which will describe how to use API. |
| 0c. | Testing Guide | We will publish Swagger UI. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains how (1) DeFi developers may use Nomis score API, (2) chain-users may get their Nomis score. |
| 1. | API for credit score calculation | We will develop API for DeFi developers —everyone will be able to build dApps on-top of Nomis score and create highly customized lending/borrowing offers for end-users on a case-by-case basis. | 


## Future Plans

In the future, we are going to make Nomis self-sufficient hiring the business model based on fee-charging (1%) per API usage.

The long-term vision for Nomis goes far beyond credit scoring for DeFi. Other dApps will use Nomis Score as a wallet qualifier for making job offers, for adding in whitelists, for offering special marketing terms, or just for inviting to a private party. 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
