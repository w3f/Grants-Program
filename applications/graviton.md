# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Graviton
* **Proposer:** DeFi-Evangelist
* **Payment Address:** 1BeRKVozn3X7wiByvYBryPWugFvvrp61ug

*The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview

  * A brief description of the project:
  
Graviton - a decentralised liquidity network for interchain digital assets
Graviton gives financial incentivization and governance framework for cross-chain transfers providers and AMM liquidity providers of wrapped tokens.
  
  * An indication of how we will integrate this project into Substrate / Polkadot / Kusama:

We gonna build a new gravity-parachain based on parity substrate with pBFT consensus managed by same set of [gravity network validators] (https://arxiv.org/pdf/2007.00966.pdf) and integrate this parachain into the gravity oracles/providers network with an implementation of crosschain-transfer gateway ([susy protocol](https://arxiv.org/pdf/2008.13515.pdf)).

  * An indication of why my team is interested in creating this project:
  
  We're working on [gravity](https://gravity.tech/) and [graviton](https://graviton.one/) crosschain DeFi projects now. According to [our research article](https://medium.com/gravity-protocol/susy-a-blockchain-agnostic-cross-chain-asset-transfer-gateway-protocol-based-on-gravity-9d5b1550e5f4) there is still huge unresolved potential of Parity/Polkadot tech to be practically implemented in DeFi products.
  

### Project Details 

* Mockups/designs of any UI components:

Drafted UI mockups for crosshcain swaps service - [SuSy gateway UI](https://www.figma.com/file/y67ljpuoDzt2Zv6NJRTeTm/Rabbit_Ex_figma?node-id=0%3A1)

* API specifications of the core functionality

![high level api spec](https://raw.githubusercontent.com/ventuary-lab/susy-ui/master/Screenshot%202020-09-22%20at%2005.17.47.png)

* An overview of the technology stack to be used

Go, Solidity, Parity Substrate, Type Script, Vue.js, Parity Signer

* Documentation of core components, protocols, architecture etc. to be deployed

1 - Gravity parachain based on Parity Substrate will become a target chain of [gravity network] (https://arxiv.org/pdf/2007.00966.pdf). Consuls (dynamic set of pBFT-validators) will also be pBFT validators for gravity-parachain:

![targetchains and smart contracts](https://raw.githubusercontent.com/ventuary-lab/susy-ui/master/Screenshot%202020-09-22%20at%2005.27.47.png)

2 - Crosschain gateways between gravity-parachain and integrated networks (eth, tron, bsc, waves and etc) ([susy protocol](https://arxiv.org/pdf/2008.13515.pdf))

3 - Gateway transfer fees and incentivisation model - [graviton](https://arxiv.org/pdf/2009.05540.pdf)

![scheme of incentivisation of the Graviton protocol](https://raw.githubusercontent.com/ventuary-lab/susy-ui/master/Screenshot%202020-09-22%20at%2005.27.47.png)

4 - On-chain smart contract mechanics:

[pulse consensus](https://raw.githubusercontent.com/ventuary-lab/susy-ui/master/Screenshot%202020-09-22%20at%2005.49.56.png)


* PoC/MVP or other relevant prior work or research on the topic:

https://explorer.gravityhub.org/nebulae


### Ecosystem Fit 
Are there any other projects similar to yours? If so, how is your project different?

1. Bifrost  (Wave 5) 
 
 - website doesn’t work/github closed

2. Substrate/Ethereum Bridge - ChainSafe and Centrifuge were awarded a grant in W3F Grants

 - graviton isn't just yet another eth-polka bridge. Instead of focusing on multipurpose chain-to-chain bridges we're focusing on network infrastructure, mostly around assets and liquidity of wrapped tokens. SuSy protocol is very simple, and it can be implemented on-chain in almost every chain (with smart contracts support). Also we can use any existing (or planned) AMM LPs for its insentivisation mechanisms in all integrated chains (including gravity-parachain).


## Team :busts_in_silhouette:

### Team members
* Team Leader / Tech Lead:

Aleksei Pupyshev - [tw](https://twitter.com/AlekseiPupyshev), [li](https://www.linkedin.com/in/aleksei-pupyshev-23a70954/)

* Names of team members:

Ilya Sapranidi (researcher), Shamil Khalilov (front-end), Ilya Teterin (blockchain), Regina Chernyavska (design)


### Team Website	
Team:
* https://venlab.dev/

Tech/Dev:
* https://gravity.tech/
* https://graviton.one/

### Legal Structure 
Aleksei Pupyshev - individual entrepreneur license (Russia)

### Team's experience
The Graviton project is being built by VenLab blockchain research & development
team, founded by Aleksei Pupyshev in 2018. VenLab’s track record:

“Mastering Web 3.0” online course for developers on [Stepik](https://stepik.org/course/54415/promo) and [Coursera](https://www.coursera.org/learn/mastering-web3-waves?#instructors)
~3k learners
~1k developers in [dev chat](https://t.me/waves_ride_dapps_dev)

[Neutrino](https://neutrino.at/) [($USDN)](https://coinmarketcap.com/currencies/neutrino-usd/) - An algorithmic crypto-collateralized stablecoin (acquired by [WX](https://waves.exchange/))

~50mln$ Total Value Locked (TVL)
~7k dApp users
~30mln$ market cap & ~3mln$ volume

[Gravity Protocol](https://medium.com/gravity-protocol) - A blockchain-agnostic oracles and cross-chain communication network

5 integrated chains so far
21+ reputable node operators 


### Team Code Repos
* https://github.com/ventuary-lab
* https://github.com/Gravity-Tech

### Team LinkedIn Profiles
* https://www.linkedin.com/in/aleksei-pupyshev-23a70954/

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of the software. The level of detail must be enough so that we are able to verify that the software meets the specification.
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.

### Overview
* **Total Estimated Duration:** Duration of the whole project
* **Full-time equivalent (FTE):**  Workload of an employed person ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
* **Total Costs:** Amount of Payment in BTC for the whole project. The total amount of funding needs to be below $30k at the time of submission.

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.75 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be coded for the first milestone) |  
| 2. | Substrate module: Y | We will create a Substrate module that will... |  
| 3. | Substrate module: Z | We will create a Substrate module that will... |  
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 2 Example — Additional features
...

### Community engagement

As part of the Program, we require that you produce an article/tutorial and publish it (for example on [Medium](https://medium.com/)). It should explain your work done as part of the grant. 

Normally, we ask you to submit the write-up upon the completion of your grant, although for larger projects it might make sense to publish multiple articles after the completion of different milestones.

## Future Plans
Please include the team's long-term plans and intentions.

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?
