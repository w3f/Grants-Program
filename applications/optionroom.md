# Open Grant Proposal

* **Project Name:** OptionRoom
* **Payment Address:** 0xFc9DEbe471D08BD8F0D539ecF3D2258f86a511ef

## Project Overview :page_facing_up: 

### Overview
  OptionRoom is a user governed oracle and forecast protocol built on Polkadot.
  We're going to build the project on Substrate after successfully launching on the Ethereum network. Our on-chain governance will be implemented on Polkadot
  We want to add value to the crypto and Polkadot ecosystem by implementing a prediction market protocol with user incentives and filling gaps in the current oracle solutions available by introducing an oracle as a service solution where oracle requests are solved by governance.


### An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
- We want to offer the first truly limitless prediction markets solutions on Polkadot, powered by owr governance to access data not accessible through traditional oracles and external data sources.
- OaaS solution for other projects that need human oracle data solutions, other projects can build on top of our oracle to have access to a wider variety of data (see point 1), we are also planning to use identity verification protocols to establish a reputation system in different fields (ensurance, sports, politics, finance), to ensure that our clients receive quality data from reputable sources
- Usage of synthetic assets/stablecoins as collateral for our prediction market pools (aUSD as an example)
- We will add a substrate chain to be used by our governance voters. 
- We will be using moonbeam to bridge our ERC20 tokens.
- We will be using ink to create our smart contracts.

### Project Details
Our whitepaper, contains documentation of core components and all the detailed struture of our project.
OptionRoom Whitepaper: https://github.com/OptionRoom/OptionRoom-Whitepaper/blob/main/OptionRoom_Whitepaper.pdf

**Technology stack**: Our main application is under developement using React, the application will be served by AWS infrastructure to provide the most stability and maintainability to users.

### Ecosystem Fit 
Our project has 2 main components:

* Oracle:
    Our approach to the oracle is based on community voting and does not require any external data sources to acquire data, it’s completely community-based (human oracle). We can complement the other oracles by supplying data they can’t access, such as certain types of verification (news, insurance claims).
* Forecast Market:
    Currently there are a few forecast market projects on the market but most of them have failed to acquire an active user-base and community. We want to add value to the Polkadot ecosystem by introducing a truly limitless forecast market protocol where the forecast marketplace is governed by the community. The choices and markets are not limited to a certain structure and initially verified by our governance to make sure we only list high-quality markets. Our incentive mechanism will ensure that our honest protocol participants are rewarded and bad actors are punished. All the protocol fees go back to the protocol in form of buy-back mechanisms providing a sustainable long-term incentive model. We aim to make the forecast market creation and participation easy, intuitive, and seamless by putting heavy resources into UI/UX development.


## Team :busts_in_silhouette:
* [Marsel Adawi](http://www.linkedin.com/in/marsel-adawi): Software Developer with 5 years of experience, 3 years experience in blockchain development. Full time trading/arbitrage bot developer for the past 3 years
* [Tareq Doufish](https://www.linkedin.com/in/tareq-doufish-2270279): Senior developer and team lead with more than 15 years of experience. Co-founded PinchPoint, a mobile gaming company for four years. Previous work: World Bank, Milan innovicy, and Tailormed
* [Wajed Afaneh](https://www.linkedin.com/in/wajedafaneh/): Senior technical team lead with +10 years of experience in Systems design & Architecture, Previously: Harri, Via, Argus, and HighCon
* [Nasser Najjar](https://www.linkedin.com/in/nasser-najjar/): Senior team lead with more than 18 years of experience in software development. Worked as a developer for multi-national companies: INTEL, Mellanox, Microsoft and others

### Contact
* **Name:** Marsel Adawi
* **Email:** marsel@optionroom.finance
* **Website:** [optionroom.finance](https://www.optionroom.finance)

### Legal Structure 
* **Registered Legal Entity:** OR TECHNOLOGY LIMITED

## Development Roadmap :nut_and_bolt: 

ROOM is planned to be unlocked and trade-able in January 2021. OptionRoom is planning to launch COURT mining in March 2021. Protocol launch is scheduled to be in early Q2 2021 on Etherium in addition to smart contract audits and reward reduction phase. OptionRoom is planned to be ported to Polkadot in Q3/Q4 2021 depending on the timeline of synthetic asset solutions in the Polkadot ecosystem.

* **Q4 2021:
* Governance launch
* Forecast market launch
* OaaS launch

### Overview
* **Total Estimated Duration:** 3 Months
* **Full-time equivalent (FTE):**  3 FTE
* **Total Costs:** 15k DAI

### Milestone 1: Porting the OptionRoom protocol
* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 5k DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Governance | Implementing Governance on Substrate. |
| 2. | Forecast market | Porting Forecast market protocol. Including the creation of proposal pools and options tokens. |
| 3. | Docker Container | We will provide a docker container |

### Milestone 2: Porting the Oracle as a service and user incentives
* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 5k DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Oaas | Implementing Oracle as service with Substrate. |
| 2. | User incentives | Implementation of user incentives with Substrate. |

### Milestone 3: Web UI, Documentation & Tutorials
* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 5k DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.
| 1. | Provide our Web UI | Convert mockups into working websites and connect them to full nodes using polkdotjs API |
| 2. | API Documentation | Documentation of APIs |
| 3. | User Tutorial | A Simple tutorial on how to create proposals and how to vote |

## Future Plans
We aim to retain and grow our current community base while having them honestly participate in our protocol. We aim to develop and explore more product launches on the OptionRoom protocol such as polls, dispute resolution mechanisms, decentralized surveys and curated lists - these all fall under the current ground base of OptionRoom’s architecture.
