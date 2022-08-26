# W3F Grant Proposal

- **Project Name:** Nomis
- **Team Name:** The Nomis Team
- **Payment Address:** 0xD587404cd28Bf4eE059ac84a6B7C0219d05EA6CF (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

#### **Inspiration**
We build Nomis to crush one of the most significant barriers to entry and adoption of DeFi which are over-collateralized loans. Today mainstream borrowers are either not using DeFi lending due to its unattractiveness as a financial product comparing to bank lending, or taking over-collaterized loans with unfair collaterals and APR.

In other words, today's DeFi loans suck:
- ﹥125% collateral scares away mainstream borrowers from DeFi loans;
- Collateral liquidation terms are tricky and make it even more unattractive;
- No personalized terms even if a user has 'good' on-chain history.

Over-collateralized lending and lack of customized reputation-based terms are the huge problems that needs to be solved to bring mainstream borrowers to DeFi and get closer to mass adoption. Our long-term vision is to allow one to borrow capital using one’s on-chain reputation as a form of collateral (best cace scenario), or at least provide better terms.

#### **Solution**
Nomis is an open-source protocol that helps DeFi developers both to build better on-chain solutions and use cases, and to balance already existing high-TVL protocols. Every lending/borrowing platform will be able to create extremely customized loan terms for borrowers by using Nomis API.

Nomis is designed to be a multi/cross-chain solution and offer the most robust financial snapshot of a potential borrower by hiring hierarchy analysis as a scoring method. At the moment we have MVPs on [Ethereum](http://nomis.cc), [Solana](https://sol.nomis.cc), and [Polygon](https://polygon.nomis.cc).

As far as we aspire to build multi-chain solution and offer the most robust financial snapshot of a potential borrower, we are extremely interested in developing Nomis on top of Polkadot enabling developers to create better DeFi solutions on top of Polkadot. We aspire to bring banking services to underserved populations by providing them with an opportunity to build solid on-chain reputation and borrow crypto (instead of fiat and its limitations for underserved populations) with more attractive initial terms (collateral factor, APR, liquidation terms). 

### Project Details

We want to build MVP for Polkadot, and API & Documentation for Polkadot developers.
You can find more information about the algorithm, team and its previous experience in our [whitepaper](https://artemshtlv.notion.site/e859b9e3bae6412fb99d6119a8d2e5a4#983f0507df904460aaaf7ef95e847798)

#### **UI Development**
- **UI Examples**: you can find working prototype for ETH wallets and UI for end-users [here](http://nomis.cc). API & Documentation for Polygon and Solana is [here](https://api.nomis.cc/swagger/index.html). UI for the Polkadot project will be the same.
- **List frameworks & tools for development & testing**: ASP Net Core 6, .jQuery, Docker, docker-compose.

#### **Backend Development**
- **Languages & frameworks**: .Net 6, ASP Net Core 6, EF Core, NodeJS.
- **Current database requirements**: no database needed for the project development. For the further steps we will hire Postgres.
- **Host**: VPS, cloud-ready.
- **Scaling**: Nomis is a stateless service, we can scale it only by adding nodes.
- **CI/CD**: Github Actions.

### Ecosystem Fit

1. Nomis will help Polkadot to grow its MAD as developers can be interested to build unique DeFi DApps on Polkadot using Nomis API, as it provides them with opportunity to extremely customize initial customer terms and offers (lending/borrowing) on a case-by-case basis.
2. Nomis will help Polkadot and its ecosystem to grow TVL and MAU as a result of on-chain acquisition of mainstream borrowers who are interested in the DeFi solutions mentioned above.

Currently Nomis have no competitors on Polkadot. Although, Nomis brings two crucial competitive advantages vs other credit scores such as Chainscore (NEAR), RociFi (Polygon), Spectral Finance (Ethereum), Project Galaxy and TrueFi (Multichain), etc. to the table:
  1. Nomis is an open-source solution that helps web3 developers leverage credit scores building better on-chain products and communities.
  2. Nomis offers the most robust financial snapshot of a potential borrower by hiring hierarchy analysis as a scoring method (today) and AI-based mathematical model trained on the initial terms and default data (tomorrow).

## Team :busts_in_silhouette:

### Team members

**Fedor**, CTO
- PhD in CS
- Solidity & Rust developer
- 8 patents’ holder (neural networks)
- Ex. custom L1 blockchain solution

**Alex**, CEO
<br /> [LinkedIn](https://cz.linkedin.com/in/alexander-barabash/) • [Telegram](https://t.me/alexbarab) <br />
- MSс in Mathematics and Economics
- 5-year C-level experience
- 15-year experience in neural networks
- Ex. GoRecruit — employee scoring SaaS for HR

**Arty**, CPO
<br /> [Twitter](https://twitter.com/ArtemShatilov) • [LinkedIn](https://www.linkedin.com/in/artemshatilov/) • [Telegram](http://t.me/artemshtlv) <br />
- MSc in International Business Development
- 4-year experience of PM/UI/UX in crypto
- Ex. KickCity — web3 event dapp on Ethereum
- TON Hackathon Awardee

**Nick**, Lead Developer
- Degree in CS
- .NET developer
- Active open source contributor
- 4 times blockchain hackathons awardee

### Contact

- **Contact Name:** Vitalii
- **Contact Email:** vitalii@nomis.cc
- **Website:** https://nomis.cc

### Legal Structure

- **Registered Address:** Nad zatáčkou 506/6, 10700 Praha, Czechia.
- **Registered Legal Entity:** Lobinex, spol. s r.o.

### Team's experience

We are the right team to build a best-in-class credit score solution as we have solid tecnhical capability in place. Our spike is 15-year+ experience and 8 patents in neural network research and deveopment. Moreover, [every cofounder](https://artemshtlv.notion.site/e859b9e3bae6412fb99d6119a8d2e5a4#8d6d2b96fa994dcf84ac142217d9ca77) has a track record in developing and commercializing IT- and blockchain-related products such as Kickcity (web3 event/ticketing platform on Ethereum), GoRecruit (employee scoring SaaS for HR), and L1 blockchains.

### Team Code Repos

[https://github.com/Nomis-cc](https://github.com/Nomis-cc)

## Development Status :open_book:

We are ready-to-go full-time as fast as the sufficient amonut of grant funding will be received.

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

Our goal is to allow one to borrow capital using one’s on-chain reputation as a form of collateral (best cace scenario), or at least provide better terms. Although, the long-term vision for Nomis goes far beyond credit scoring for DeFi. In the future, other dApps will use Nomis Score as a wallet qualifier for making job offers, adding in whitelists, offering special marketing terms, or just for inviting to a private party, etc.

We plan to make Nomis self-sufficient by hiring one of the B2B or Web3 business models and GTMs. 

**How did you hear about the Grants Program?** Web3 Foundation Website
