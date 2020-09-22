# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Graviton
* **Proposer:** DeFi-Evangelist
* **Payment Address:** 1BeRKVozn3X7wiByvYBryPWugFvvrp61ug

## Project Overview :page_facing_up: 

### Overview

  * A brief description of the project:
  
[Graviton](https://graviton.one/) is a decentralised liquidity network for interchain digital assets.

Graviton, a logical progression of the [Gravity protovol](https://gravity.tech) provides financial incentives and a governance framework for providers of cross-chain transfers and AMM liquidity for wrapped tokens. 
  
  * An indication of how we will integrate this project into Substrate / Polkadot / Kusama:

To extend the Graviton liquidity network onto the Polkadot ecosystem, we are planning to build a new parachain that connects Polkadot and other parachains with Gravity and its integrated target-chains, based on Parity Substrate with pBFT consensus managed by a set of [Gravity network validators (consuls)] (https://arxiv.org/pdf/2007.00966.pdf). This parachain will be integrated into the Gravity oracles/providers network to support a crosschain token transfer gateway (based on [SuSy protocol specification](https://arxiv.org/pdf/2008.13515.pdf)), which would allow for seamless cross-chain swaps via a separate user interface.  

  * An indication of why my team is interested in creating this project:
  
 We are currently working on [Gravity](https://gravity.tech/) and [Graviton](https://graviton.one/). According to [our research article](https://medium.com/gravity-protocol/susy-a-blockchain-agnostic-cross-chain-asset-transfer-gateway-protocol-based-on-gravity-9d5b1550e5f4), there is still a huge untapped potential for Parity/Polkadot tech to be applied to DeFi products.
  

### Project Details 

* Mockups/designs of any UI components:

UI mockups for the crosschain swap service: [SuSy gateway UI](https://www.figma.com/file/y67ljpuoDzt2Zv6NJRTeTm/Rabbit_Ex_figma?node-id=0%3A1)

* API specifications of the core functionality

![high level api spec](https://raw.githubusercontent.com/ventuary-lab/susy-ui/master/Screenshot%202020-09-22%20at%2005.17.47.png)

* An overview of the technology stack to be used

Go, Solidity, Parity Substrate, TypeScript, Vue.js, Parity Signer, Docker

* Documentation of core components, protocols, architecture etc. to be deployed

1. Gravity parachain based on Parity Substrate will become a target chain of [Gravity network](https://arxiv.org/pdf/2007.00966.pdf). Consuls (a dynamic set of pBFT-validators) will be pBFT validators for the Gravity parachain:

![targetchains and smart contracts](https://raw.githubusercontent.com/ventuary-lab/susy-ui/master/Screenshot%202020-09-22%20at%2005.27.47.png)

2. Crosschain gateways between the Gravity parachain and integrated networks (eth, tron, bsc, waves and etc) ([SuSy protocol](https://arxiv.org/pdf/2008.13515.pdf))

3. Gateway transfer fees and incentivisation model - [Graviton](https://arxiv.org/pdf/2009.05540.pdf)

![scheme of incentivisation of the Graviton protocol](https://raw.githubusercontent.com/ventuary-lab/susy-ui/master/Screenshot%202020-09-22%20at%2005.27.47.png)

4. On-chain smart contract mechanics:

[pulse consensus](https://raw.githubusercontent.com/ventuary-lab/susy-ui/master/Screenshot%202020-09-22%20at%2005.49.56.png)


* PoC/MVP or other relevant prior work or research on the topic:

Demo network PoC for Gravity: https://explorer.gravityhub.org/nebulae


### Ecosystem Fit 
Are there any other projects similar to yours? If so, how is your project different?

* Substrate/Ethereum Bridge - ChainSafe and Centrifuge were awarded a grant in W3F Grants
 - Graviton isn't just yet another eth-polkadot bridge. Instead of building on multipurpose chain-to-chain bridges, we are focusing on network infrastructure, mostly around assets and liquidity of wrapped tokens. SuSy protocol is simple and it can be implemented on-chain with almost any chain that supports smart contracts. In addition, we can use any existing (or planned) AMM LPs for its incentivisation mechanisms in all integrated chains, including Gravity parachain.


## Team :busts_in_silhouette:

### Team members
* Team Leader / Tech Lead:

Aleksei Pupyshev: [twitter](https://twitter.com/AlekseiPupyshev), [linkedin](https://www.linkedin.com/in/aleksei-pupyshev-23a70954/)

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
The Graviton project is being built by VenLab blockchain research & development team, founded by Aleksei Pupyshev in 2018. VenLab’s track record:

* “Mastering Web 3.0” online course for developers on [Stepik](https://stepik.org/course/54415/promo) and [Coursera](https://www.coursera.org/learn/mastering-web3-waves?#instructors)

~3k learners

~1k developers in [dev chat](https://t.me/waves_ride_dapps_dev)

* [Neutrino](https://neutrino.at/) [($USDN)](https://coinmarketcap.com/currencies/neutrino-usd/) - An algorithmic crypto-collateralized stablecoin (acquired by [WX](https://waves.exchange/))

~50mln$ Total Value Locked (TVL)

~7k dApp users

~30mln$ market cap & ~3mln$ volume

* [Gravity Protocol](https://medium.com/gravity-protocol) - A blockchain-agnostic oracles and cross-chain communication network

5 integrated chains so far

21+ reputable node operators 


### Team Code Repos
* https://github.com/ventuary-lab
* https://github.com/Gravity-Tech

### Team LinkedIn Profiles
* https://www.linkedin.com/in/aleksei-pupyshev-23a70954/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 3.5
* **Total Costs:** 1.8 BTC

### Milestone 1 — Gravity-Parachain
* **Estimated Duration:** 1 month
* **FTE:**  1.2
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Parity Substrate | Parity Substrate with dynamic set of validators from consuls (top-k most reputapable nodes) of gravity network |  
| 2. | Parachain Integration | Connection of chain based on substrate to polkadot/kusama network |  
| 3. | SuSy Gateway Integration Tests |  Crosschain gateway functionality within integration tests based on separate independent docker containers |


### Milestone 2 — Crosschain Swap Demo
* **Estimated Duration:** 1 month
* **FTE:**  1.1
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Parity Signer | Integration with Parity Signer |  
| 2. | Deployment into testnets | Transition of the gateway functionality from integration tests into the stable network |  
| 3. | Demo UI | Basic UI for manual testings of crosschain swaps |  


### Milestone 3 — Full-Functioning Crosschain Swaps & Single Sided AMM Liquidity Pool for wrapped tokens
* **Estimated Duration:** 1 month
* **FTE:**  1.2
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Full-Functioning Crosschain Swaps UI/UX | Production ready functionality of crosschain transfers between parahcain and gravity chains (eth, bsc, tron, waves)|  
| 2. | Single Sided AMM Liquidity Pool | Uniswap-Like pools without slippage with price based on data feed from oracles |
| 3. | Liquidity Mining | Liquidity Mining functionality for liquidity and transfer providers (gateway oracles) |

## Future Plans

A) multichain network of liquidity for wrapped tokens

B) interchain governance system for graviton network


