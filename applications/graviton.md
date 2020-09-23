# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** Graviton
* **Proposer:** DeFi-Evangelist
* **Payment Address:** 1BeRKVozn3X7wiByvYBryPWugFvvrp61ug

## Project Overview :page_facing_up: 

### Overview
  
[Graviton](https://graviton.one/) - a decentralised liquidity network for interchain digital assets. Graviton gives financial incentivization and governance framework for cross-chain transfers providers and AMM liquidity providers of wrapped tokens.

Graviton infrastructure is represented by three products:

- Cross-chain tokens gateway service ([SuSy Gateway](https://medium.com/gravity-protocol/susy-a-blockchain-agnostic-cross-chain-asset-transfer-gateway-protocol-based-on-gravity-9d5b1550e5f4))
- Single sided liquidity service for wrapped tokens
- Liquidity incentivisation network & governance portal

We're founders and core devs of tokenless oracles protocol - [Gravity](https://arxiv.org/pdf/2007.00966.pdf). The protocol itself is aiming to be a blockchain-agnostic solution. [Graviton](https://graviton.one/) - is an application on top of gravity network designed to increase user experience with wrapped tokens, gateways and bring an incentivisation for gateways oracles and AMM liquidity providers in the target chains.


### Reason for an application
Polka tech (Substrate / Polkadot / Kusama) will be integrated into gravity network as a targetchain (and depositchain). We believe that there will be more DeFi services on Polka/Kusama chains in upcoming months/years and we'd like to start building our own services in them too.

In a frame of this grant application we want to develop two things which are core components for graviton project:

_**- polka/kusama cross-chain transfers gateway infrastructure and service**_

(chains: polka/cusama <-> tron, binance smart chain (bsc), waves)

_**- on-chain single sided liquidity service for wrapped tokens**_

P.S.: We're not experts in Polka tech yet, so we can't propose comprehensive tech explanation of how exactly integration and ssAMM service will look like. Also, there aren't much functionality with parachains working in Polka or Kusama networks at the moment, so we're expecting some dependencies from release dates or trade-offs between final properly designed solution and temporary solutions.


### Project Details 
We're goin to start from creation of Parity Substrate based gravity-substrate-chain with pBFT consensus, with validators represented by gravity consuls ([most reputapable nodes](https://arxiv.org/pdf/2007.00966.pdf)). SYSTEM-SC and NEBULA-SC will be deployed on gravity-substrate-chain. SuSy gateway (via decentralized oracle - gravity) will be deployed too.

This temporary solution will be an infrastructure for building gateway and single sided liquidity AMM service for wrapped tokens.
This temporary solution will work untill Kusama/Polka chains will start supporting parachains in mainnets.

When it will become possible we'll make a hardfork of gravity-substrate-chain to change consensus and validators making this chain as a parachain of Kusama/Polka networks ("gravity-substrate-chain -> gravity-parachain" (GSC -> GPC) migration).

Even before mainnet launch we'll make this migration in testnet.

Mockups:
Drafted UI mockups for crosshcain swaps service - [SuSy Gateway UI](https://www.figma.com/file/y67ljpuoDzt2Zv6NJRTeTm/Rabbit_Ex_figma?node-id=0%3A1).

Working demo:
Existing testnet demo for Waves->Ethereum chains - [crosschain swaps demo service](https://susy.gravity.tech/swap)

Tech stack:
Go, Rust, Solidity, Parity Substrate, Type Script, Vue.js, polkadot{.js}, Docker

### Protocols Details 

* GSC - gravity-substrate-chain (v0)
* GPC - gravity-parachain (v1)

- To implement token transfer gateways we'll implement [SuSy](https://arxiv.org/abs/2008.13515) protocol between GSC/GPC chain and Binance Smart Chain (BSC) (or/and another chain integrated into gravity net: Tron, Ethereum, Waves):

![SuSy LU->IB flow](https://raw.githubusercontent.com/ventuary-lab/images/master/graviton/susy-flow.png)

- Core on-chain/off-chain functionality of the gateway will be done via [gravity network protocol](https://arxiv.org/pdf/2007.00966.pdf):

![Gravity-Flow](https://raw.githubusercontent.com/ventuary-lab/images/master/graviton/gravity-flow.png)

- Gravity is a decentralized oracle represented by gravity nodes/oracles which are participating into pulse consensus. 
Pulse consensus hase 2 steps of data verification.
I. (off-chain) Commit-Reveal step:

![Gravity-Pulse CR step](https://raw.githubusercontent.com/ventuary-lab/images/master/graviton/gravity-pulse-cr.png)
 
II. (on-chain) Augmented Threshold Signature step:

![Gravity-Pulse AV step](https://raw.githubusercontent.com/ventuary-lab/images/master/graviton/gravity-pulse-av.png)

- SuSy crosschain gateway is an implementation of USER-SC contarcts on both chains as LU (lock/unlock) or IB (issue/burn) port application secured by dynamically assembled subset of gravity oracles:

![Gravity-SC](https://raw.githubusercontent.com/ventuary-lab/images/master/graviton/gravity-smartcontracts.png)

- To bring liquidity and better UX for users for wrapped tokens on destination chains we have to build/support/incentivise AMM services on destination chains (especially single sided liquidity AMM LPs):

![Graviton Liquidity Mining Flow](https://raw.githubusercontent.com/ventuary-lab/images/master/graviton/graviton-lm.png)


Research papers:
- [Gravity Protocol](https://arxiv.org/abs/2009.05540)
- [SuSy Protocol](https://arxiv.org/abs/2008.13515)
- [Graviton Liquidity Network](https://arxiv.org/abs/2007.00966)

### Ecosystem Fit 
There are several projects in the Polka ecosystem similar with graviton:

"Bifrost - A parachain designed for staking liquidity (Wave 5)" and "Substrate/Ethereum Bridge - ChainSafe and Centrifuge were awarded a grant in W3F Grants"
 
Similarities:
- token bridge based on multiple signings

Differences:
- EOS-Polka bridge or ETH-Polka bridges atm. Gravity will bring all integrated chains simultaneously after GSC/GPC implementation.
- No service infrastructure on targetchains (nebula-sc or user-sc lego flexible structure).
- Gravity validators and signers are managed by p2p reputation scores.
- Graviton is also single sided AMM service within the targetchain.

Graviton isn't just gateway for polkador/kusama nets. Graviton infrastructure is represented by three products:

- Cross-chain tokens gateway service ([SuSy Gateway](https://medium.com/gravity-protocol/susy-a-blockchain-agnostic-cross-chain-asset-transfer-gateway-protocol-based-on-gravity-9d5b1550e5f4)).
- Single sided liquidity service for wrapped tokens.
- Liquidity incentivisation network & governance portal.


## Team :busts_in_silhouette:

### Team members

Team Lead / Tech Lead:
Aleksei Pupyshev - [twitter](https://twitter.com/AlekseiPupyshev), [linkedin](https://www.linkedin.com/in/aleksei-pupyshev-23a70954/)

Team members:
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

~3k learners, ~1k developers in [dev chat](https://t.me/waves_ride_dapps_dev)

* [Neutrino](https://neutrino.at/) [($USDN)](https://coinmarketcap.com/currencies/neutrino-usd/) - An algorithmic crypto-collateralized stablecoin (acquired by [WX](https://waves.exchange/))

~50mln$ Total Value Locked (TVL), ~7k dApp users, ~30mln$ market cap & ~3mln$ volume

* [Gravity Protocol](https://medium.com/gravity-protocol) - A blockchain-agnostic oracles and cross-chain communication network

5 integrated chains so far, 21+ reputable node operators


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
| 1. | polkadot{.js} | Integration with polkadot{.js} |  
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


