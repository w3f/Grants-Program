# Bridges Attestation Oracle

- **Team Name:** DIA Data
- **Payment Address:** 0xC13233bd20a7FcB1d7c2394AdE4857b778382264 Ethereum. Preferred currency - USDC (0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48).
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Decentralized, on-chain bridge attestation oracle for Polkadot using off-chain workers

Over the last few years, bridges have been the target of a number of high profile hacks. According to the [rekt.news](https://rekt.news/leaderboard/) 'hack leaderboard', 4 of the top 5 hacks in terms of USD value lost were attacks on bridges (total $2.2 billion lost amongst these 4 hacks). Despite many efforts to develop more robust and secure bridge architectures, there is no industry-wide tooling available for protocols to bolster their security in case a bridge is hacked. This is why we aim to to develop a decentralised, real-time bridge status update oracle that will help protocols in the Polkadot ecosystem protect their operations and customer funds.

![Bridge Attestaion Oracle Solution Overview](https://user-images.githubusercontent.com/103409771/224655563-dbd6dca4-839d-41a5-859e-fa74c8868f84.png "Attestation oracle architecture")

Our approach is to introduce on-chain verification of bridge balances on the Polkadot network using off-chain workers. The main idea behind this is that all dapps operating on Polkadot parachains will be able to integrate this security module, enabling them to trigger automated precautionary notifications and actions in case bridge balances unexpectedly drop. We achieve this by tracking bridges' locked asset vs issued assets across multiple chains. This allows us to calculate a collateral ratio, which protocols can use to define and trigger safety procedures in their code when the specified conditions are met.

The DIA team has already gained experience with collateral ratios, while creating fair value price feeds for Liquid Staked Tokens in the Polkadot ecosystem and beyond (more info [here](https://www.diadata.org/xlsd-liquid-staking-oracle/)). The bridge attestation oracle would be specifically designed for use in the Polkadot ecosystem. Being a crosschain oracle by nature, we perceive a significant benefit in the proposed solution, because using the collateral ratio in the determination of asset prices that use bridges to bring liquidity to multiple blockchains enables the calculation of fair value prices.

### Project Details

#### Architecture overview

The proposed project consists of a few core components that are to be developed.

First, an overview regarding the data structures needed to represent bridge states:

```
Asset:
    Address  string
    Chain    string
    Decimals uint
    Symbol   string
    Name     string
    
BridgeSet:
    LockedAssets  []Asset
    MintedAsset   Asset
    LockedAmounts []uint
    MintedAmount  uint

Bridge:
    Sets []BridgeSet
```

Note that `BridgeSet` is directional, so a bridge can hold a set twice in both directions if needed. By that, we can track minted and locked pairs in an omnidirectional way. Also note, that a `BridgeSet` mints one token but can access several locked assets on different source chains.

With these in mind, the following components are proposed:

1. An off-chain worker which reads bridge states: This component is used as an adapter between bridge states and the target parachain. It is used to read the amounts of locked assets from specified addresses (the bridge reserve addresses).
2. A token identification system which identifies matching tokens across multiple chains (i.e. both sides of each bridged asset). Identification requires  that for an asset at least the chain and the address are defined.

An example flow on the token identification within the proposed system could look like this:
1. Read bridge-locked tokens on multiple source blockchains with RPC calls.
2. Compute total amount of locked tokens by adding the values from the previous calls.
3. Determine the amount of issued tokens on the target network.
4. Perform calculation `MintedAmount - Sum([]LockedAmounts)`.
5. Output values of number of issued tokens, number of locked tokens and collateral ratio values.

All components will be available open-source to enable access to any dapp/protocol that intends to integrate this or further develop the components.
Also, a standard format (similar to the defined data structures above) will be developed to facilitate integrations of future bridges.

#### Technology stack

- Pallet & off-chain workers will be the main enabler of the entire solution, reflecting Polkadot's native feature of off-chain workers integrated with pallets.
  - Rust programming language will be used to develop the pallet and the off-chain worker.
- RPCs will be the main gateway for querying data from different chains. As RPCs represent single points of failure, they will be implemented using the following logic:
  - Only publicly available RPCs will be used to circumvent private key management hurdles for publicly accessible solutions. If technically possible, we would enable the pallet integrator to choose their own private RPCs, if they prefer this.
  - We will set-up a back-up system of at least 2 additional public RPCs in case one RPCs fails.
  - We will set-up backstops for generating collateral value in case at least one of the RPCs fail.

Hosting and infrastructure will be organized as follows:

The main repository will be available on Github. Pre-built instances of our container images will live in Docker Hub for everyone to download. We seek to implement a CI/CD system that automatically builds and publishes latest changes so that anyone can use the latest version with ease and integrate fetching the latest version in their automation flow as well. Due to the decentralized nature of the proposed architecture, only the token identification data needs to be hosted centrally. For that, we will either extend existing community directories or build our own, with hosting the resulting identification files on github as well.

We will also host documentation on how to use and participate in the system.

#### MVP

Our MVP will consist of four main parts:
1. The pallet providing collateral value that can be integrated by parachains
2. The documentation of integration
3. Integration of 3 bridges
4. Guidelines on integrating new bridges

#### Expectations

Team DIA will:
- Create the framework and open-source the library of this integration.
- Integrate 3 bridges for initial use. Further integrations will be open for submissions from contributors.

We will not:
- Cover a security audit as a part of MVP design.

### Ecosystem Fit (Requirements)

#### Overview

The Polkadot ecosystem is a natural fit for this solution for several reasons:
- Polkadot is a network of numerous parachains which utilize XCM for trustless and secure communication without relying on bridges. However, to achieve the vision of interoperability with external chains, bridge monitoring and attestation are necessary to establish trust and ensure the integrity of the transactions between the networks.
- The entire architecture of the product is tailored specifically to the Polkadot ecosystem due to it's unique ability of executing computational programs via off-chain workers.
- The tool adds significant value for a variety of Polkadot ecosystem actors - parachains, dapps, bridges, oracles and others.
- The tool aims to serve as a public good on Polkadot, therefore will benefit anyone that integrates it.

#### Target audience

We have identified our target audience as follows:
- Parachains are the target facilitator that will enable the adoption, but they also stand to benefit from integration themselves as the tool enables them to track bridges' security on a chain level.
- DeFi dapp developers (e.g., lending protocols) are the main beneficiaries. We expect to see most adoption from them, as they are the arbiters that enable bridged assets to be traded/staked or used however else and thus are most directly exposing their users' assets to these risks.
- Bridges can integrate the security module to create their own security processes. They will strongly benefit from having an independent third party tracker next to their own internal ones.
- Oracles will be able to use the collateral ratio for interchain asset pricing. In theory, native asset trading statistics can be bridged to synthetic asset in order to decrease manipulation risk.
- As the module will be fully open source, any other Polkadot ecosystem developer/team can integrate it for their use cases.

#### Meeting the needs

Bridge hacks are rare but painful because of the potentially high amount of funds that are constantly at risk / an attractive target for malicious actors. Therefore, the bridge attestation oracle will provide a live auditing tool for any actor in the Polkadot ecosystem that wants to make their operation more secure. 

In discussions with various ecosystem actors, the idea and architecture of the solution were presented with the goal of validating the problem and the potential solution. We received supportive feedback from all interviewees, and therefore decided to pursue the inititive further.

To verify the relevance of the idea we conducted interviews with several ecosystem participants, including 

- Acala
- Astar
- AstridDAO
- Interlay
- Pendulum
- StellaSwap


#### Similar projects

We were not able to identify any similar solution present in the market. Similar approaches can be attributed to:
1. Proof of Reserves oracles - developed by several oracle providers, these oracles track the amount of tokens in reserves and provide this information publicly.
2. Cross-chain messaging protocols - these have architectural similarity in that one could transmit bridge balances as a message, however there are several limitations to this approach:
  - They would act as a 2nd layer bridge (bridge for bridge balances) and are also prone to manipulation.
  - Gas fees would have to be paid on the origin chain, which causes potentially volatile costs required to run such operation, putting them at risk.
3. Real time alert providers for smart contract activities. Tools such as [Forta](https://explorer.forta.network/) allow to set-up monitoring and notifications for pre-determined smart contract activities. However, they do not offer a direct solution for bridge balance monitoring, which we aim to deliver.

As our proposed solution is different in nature, we do not perceive any of the existing approaches as real alternatives. Additionally, all of these solutions are commercially driven, while the bridge attestation oracle will serve as a public good.

#### Risks

- RPC manipulation risk - the solution will use RPC services to retrieve data from blockchains. Therefore, if someone manages to manipulate RPC data, the final value could be exploited. A potential mitigation could be to introduce connections to multiple RPCs simultaneously to reach a consensus.
- Contract migration risk - from time to time protocols may need to migrate or upgrade contracts. This could produce incosistent values. To avoid this,  direct communication channels with bridges can be set up and tracked to flag any changes on the smart contract level. This could be complemented with community based forum where contributors could also flag these migrations manually.
- Off-chain worker operational risk - the solution is developed on the assumption that off-chain workers can be trusted and will be maintained within the Polkadot ecosystem. However, upgrades, malfunctions or the unlikely event of discontinuation of off-chain workers poses a risk to the solution. In this case, migration to another off-chain computation platform could be a mitigation (e.g. Phala or Integritee).


## Team :busts_in_silhouette:

### Team

- Samuel Brack // Cofounder and CTO at DIA // [Github](https://github.com/kaythxbye) // [LinkedIn](https://www.linkedin.com/in/samuelbrack/)
- Philipp Pade // Lead Integrations Developer at DIA // [Github](https://github.com/jppade) // [LinkedIn](https://www.linkedin.com/in/jan-philipp-pade/)
- Nitin Gurbani // Senior Developer at DIA // [Github](https://github.com/nnn-gif) // [LinkedIn](https://www.linkedin.com/in/nitin-g-098229228/)
- Zygis Marazas // Product Lead at DIA // [LinkedIn](https://www.linkedin.com/in/zygimantas-marazas/)
- Paul Claudius // Cofounder and Business Development Lead at DIA // [LinkedIn](https://www.linkedin.com/in/paulclaudius/)
- Dillon Hanson // Business Development Manager at DIA // [LinkedIn](https://www.linkedin.com/in/dillonhanson/)


### Contact

- _**Contact Name:** Paul Claudius
- _**Contact Email:** paul.claudius@diadata.org
- _**Website:** https://www.diadata.org/

### Legal Structure

- _**Registered Address:** Baarerstrasse 10, 6300 Zug, Switzerland.
- _**Registered Legal Entity:** DIA e.V.

### Team's experience

Experience which will help to succesfully develop this project is listed below:

#### Development of a pallet for oracles

Team DIA has extensive experience in developing a pallet for Polkadot using off-chain workers. The pallet was developed to serve the purpose of accessing oracles natively by parachains. The documentation of the solution can be found [here](https://docs.diadata.org/documentation/oracle-documentation/oracle-structure/polkadot-offchain-worker).

#### Scraping Multichain bridge

Team DIA already did experiments with automatic bridged assets identification, therefore we already developed a [Multichain](https://multichain.xyz/) bridge scraper which maps out assets accross a variety of chains.

#### Development of collateral based values for nASTR, iBTC, stDOT, stETH, rETH, vKSM, kBTC

We recently launched xLSD - a product that tracks collateral values for liquid staked tokens

#### Established partnerships in oracle fields with Polkadot ecosystem parachains

We are already present in the Polkadot ecosystem and have developed oracles for a range of parachains and dapps, and integrated natively with a range of DEXs including:

- Moonbeam & Moonriver
  - Midas Capital
  - Mixbytes 
  - Orbiter One 
  - Raze Network
- Astar
  - Starlay 
  - SIO2 Finance 
  - Algem 
  - AstridDAO
  - Orcus Finance
  - Starfish Finance
  - Rikkei Finance
  - Arka Finance
  - Standard Protocol
- Pendulum
- Interlay
- Bifrost

DEX integrations:
- Beamswap (Moonbeam)
- Stellaswap (Moonbeam)
- Arthswap (Astar)
- Huckleberry (Moonriver)
- Solarbeam (Moonriver)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 - Core functionality

- **Estimated duration:** 1.5 months
- **FTE:**  1.5
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can intgrate the collateral value into their code, which will display the functionality. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that introduces to the solution with all the guidelines included. |
| 1. | Attestation oracle core: Off-chain worker | We will create an Off-chain worker as stated in the architecture overview section. |
| 2. | Attestation oracle core: Pallet | The entire solution will be made available as Pallet (described in architecture section). |
| 3. | Attestation oracle core: RPCs | We will set-up connections to RPCs of other chains with fallback functionality (at least 2 RPCs per chain). |
| 4. | Attestation oracle core: Collateral ratio calculation | The logic for calculating collateral ratio will be developed within the off-chain worker. |


### Milestone 2 — Bridge integrations

- **Estimated Duration:** 1.5 months
- **FTE:**  1
- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can integrate bridges collateralization value, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Bridge Integration: XCM | We will develop a module as part of the proposed solution that retrieves collateral information for assets bridged by the [XCM bridge contracts](https://github.com/paritytech/polkadot/tree/master/xcm). |
| 2. | Bridge Integration: Multichain | We will develop a module as part of the proposed solution that retrieves collateral information for assets bridged by the [Multichain bridge contracts](https://github.com/anyswap). |
| 3. | Bridge Integration: Interlay | We will develop a module as part of the proposed solution that retrieves collateral information for assets bridged by the [Interlay bridge contracts](https://github.com/interlay/interbtc). |


## Future Plans

We see a lot of potential for the future of the solution, these include:
-   Develop attestation for multichain Liquid Staked Tokens (e.g. aUSD).
-   Spin-off as independent solution (not a pallet).
-   Develop monitoring dashboards for researchers.
-   Create built-in notifications services.
-   Expand into any smart contract metrics tracking that allows users to define their own logic.
-   Introduce community driven governance for any changes and future directions of the solution.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** - personal recommendation
