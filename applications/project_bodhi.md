# Project Bodhi - A Composable & Innovative Stack for EVM on Substrate

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Team Name:** Acala
* **Payment Address:** BTC address: `1Q88PtW866r4bfv2eMphobP78QnsDrRKfY`

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

If this application in response to an RFP then please indicate this on the first line of this section.

### Overview

#### Background

It is clear to us that building a better, faster and cheaper Ethereum is not nearly enough. Just like Ethereum can do things Bitcoin can never do and subsequently inspired many new innovations, Substrate and Polkadot are categorically different from Ethereum that will empower many new types of innovations outside of the sandbox.

On a domain-specific chain like the Acala chain, there're many domain specific runtime optimizations. For example, there’re DeFi primitives, liquidity and users that can be tapped into, there are also innovations that are simply not possible on Ethereum - customizable economic policy, for example Acala’s Flex-Fee allows users to pay transaction fee with any supported tokens; native cross-chain capability; on-chain governance apparatus (no more locked funds); full upgradability (no more contract migrations) and more.

We’d love to have all of these and EVM compatibility.

#### Current Solution

Current solution i.e. Frontier in principle is to emulate the Ethereum node experience. It aims to implement the full set of Ethereum RPC and emulates Ethereum block production process. This allows existing Ethereum tools such as Metamask and Remix to work with a Frontier enabled node seamlessly.

Integrating Frontier have revealed the following challenges by their severity:

1. Confined inside the EVM Sandbox (High): users will need to use a Substrate wallet (e.g. Polkadot-js Extension) and Metamask at the same time if they ever want to taste the real power of Acala, Substrate or Polkadot for that matter. This is certainly a deal-breaker for us.
2. Making Nodes more Expensive (Medium-High): Substrate does not store transactions by hash nor historical events, nor does it provide any event filtering ability. Frontier injects special block importing logic, storing the transactions and events into an off-chain auxiliary store in order to power the query API required by Ethereum. This kind of goes against the goal to have a lightweight node to lower barriers for people from anywhere to run nodes which helps the network to be more decentralized.

#### Our solution - Project Bodhi: Composable & Innovative Stack for EVM on Substrate

![solution](https://drive.google.com/uc?id=1_tD0lZkvqbhrJNRW6aIVMV3AhBnBCBSz)

Project Bodhi offers these benefits

1. Full-stack composability: expose pallets API as EVM precompiled contracts
2. Single-wallet experience: emulate full Ethereum JS SDK client (bodhi.js)
3. Lightweight while Queryable: Substrate node + Indexer node
4. Iterate fast with Typescript
5. Revamped EVM economics

This solution can be very useful for any domain-specific chains that want to offer the full experience of runtime and Smart Contract.

### Project Details

We expect the teams to already have a solid idea about the project's expected final state.

Therefore, we ask the teams to submit (where relevant):

* Mockups/designs of any UI components
* API specifications of the core functionality
* An overview of the technology stack to be used
* Documentation of core components, protocols, architecture etc. to be deployed
* PoC/MVP or other relevant prior work or research on the topic

#### Details documentations of the project

- Project overview PPT [here](https://docs.google.com/presentation/d/1CfEFz3a5hLN2R-G25E32wNFTENVwRtO3m2JHTf5KJZI/edit?usp=sharing)
* Project brief & plan [here](https://docs.google.com/document/d/1iqkgei9RoXQnZlDp3IoSsnNDIylTCcBAB5RJJQeu0Ec/edit?usp=sharing)

#### PoC

We have completed a proof-of-concept to verify feasibility of the project [here](https://github.com/AcalaNetwork/evm-provider)

#### Technology Stack

- The SDK (bodhi.js): this will be a new provider SDK which gets injected into existing web3.js, and wraps around polkadot-js to do Ethereum and Substrate translations (transactions, RPC calls, weights to gas etc.). Written in Typescript.
* The Substrate Node: implement additional RPC to interact with EVM
* The Indexer server: integrate it with bodhi.js, EVM event logging etc. Current implementation [here](https://github.com/open-web3-stack/open-web3.js/tree/master/packages/indexer) which both Laminar and Acala testnets have been using.

#### Scope

There are a lot of work involved to get all of these into a product-ready state, which is what we always aiming for, but it'd be too big to fit into one single open grant. Therefore we have carved out a scope specifically for this grant, followed by details for future work.

**Grant Scope: Project Bodhi MVP**
The MVP scope involves
* building all necessary components for ERC20 playground
* integrate with an existing Ethereum project that is reasonably sophisticated and requires us to build address mapping between Substrate & EVM addresses
* integrate with one existing Ethereum deployment tool e.g. Waffle

Future development

1. Expose [orml-currencies](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/currencies) precompiles to EVM
2. Expose [orml-nft](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/nft) precompiles to EVM
3. Implement and integrate with Indexer Node
4. Integrate fully with Polkadot Extension
5. EVM economics: state renting, contract existential deposit, contract deployment economics
6. Replace Gas system with Weights system

### Ecosystem Fit

Nope, if so we'd be more than happy to leverage it than build it ourselves.

## Team :busts_in_silhouette:

### Team members

* Architect: Bryan Chen
* Product Manager: Bette Chen
* Runtime Developer: Shaun Wang
* Full-stack Developer: Nantian Duan
* Full-stack Developer: Ermal Kaleci

### Contact

* **Contact Name:** Bette Chen
* **Contact Email:** bette@acala.network
* [Acala Website](http://acala.network/)

### Legal Structure

* **Registered Address:** 105 Cecil Street #15-01, The Octagon, Singapore 069534
* **Registered Legal Entity:** ACALA PTE. LTD.

### Team's experience

The team is made of experienced Substrate builders, various members are contributors to substrate, polkadot-js and other core libraries.

Bryan Chen is an active contributor to substrate codebase, a Polkadot community ambassador, and substrate/polkadot lecturer. He's the architect and technical brainpower behind the Laminar & Acala project.

Bette Chen has more than a decade product/program/project management experience with background in Software Engineering and MBA from Otago and Duke. She's in charge of product and operation for Laminar & Acala.

Nantian Duan is a full-stack developer, who built DApps for ChainX and now Laminar exchanges, he also actively contributes to polkadot-js and other code-bases.

Ermal Kaleci is a full-stack developer. He's an award winning mobile application (e.g. healthcare app developer turned Substrate developer.

Shaun Wang has been contributing to several Polkadot ecosystem open source libraries, including Substrate, parity-common, type-metadata, etc.

### Team Code Repos

* SDK: <https://github.com/AcalaNetwork/bodhi.js>
* EVM: <https://github.com/AcalaNetwork/Acala/tree/master/modules/evm>

### Team LinkedIn Profiles

* <https://www.linkedin.com/in/bryan-chen-1ba8ba52/>
* <https://www.linkedin.com/in/bette-chen/>
* <https://www.linkedin.com/in/shaopeng-wang/>
* <https://www.linkedin.com/in/ermal-kaleci-98445287/>

### Team Github

* Bryan: <https://github.com/orgs/laminar-protocol/people/xlc>
* Bette: <https://github.com/orgs/laminar-protocol/people/bette7>
* Shaun: <https://github.com/orgs/laminar-protocol/people/shaopengw>
* Ermal: <https://github.com/orgs/laminar-protocol/people/ermalkaleci>
* Nantian: <https://github.com/orgs/laminar-protocol/people/aniiantt>

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  2FTE, the listed members would contribute to different deliverables based on their skill-set.
* **Total Costs:** 1.79 BTC

### Milestone 1 ERC20 Playground

* **Estimated Duration:** 1.5 month
* **FTE:**  2
* **Costs:** 0.79 BTC

Goal - Develop a web DApp & necessary components to allow users

1. input token name, symbol, supply amount and deploy new ERC20 tokens
2. input ERC20 address and query balances and allowance
3. make transfer / transferFrom / approve transaction

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and a tutorial that explains how a user can use the playground, and deploy their own ERC20 contracts |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 1. | SDK - bodhi.js: integrate | Integrate with one of an existing Ethereum JS library. e.g. ethers |  
| 2. | SDK - bodhi.js: translate | Translate Ethereum transactions to Substrate transactions; Translate some Ethereum RPC to Substrate RPC needed for the MVP|  
| 3. | Substrate pallet: modules-evm | Fork of pallet-evm from Substrate with necessary changes; Implements new RPC to allow SDK to emulate eth_estimateGas and eth_call |  
| 4. | Web DApp: ERC20 Playground | Implement the dapp |  
| 5. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.

### Milestone 2 Example — Additional features

* **Estimated Duration:** 1.5 month
* **FTE:**  2.5
* **Costs:** 1 BTC

Goal - Integrate with one existing Ethereum project

1. Be able to deploy & run e2e tests in Acala EVM
2. Make sure the SDK provided by the project works with minimal changes

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both inline documentation of the code and a tutorial that explains how the existing Ethereum project is deployed and benefits |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 1. | SDK - bodhi.js: deployment tool | Integrate with one of an existing Ethereum deployment and testing tool e.g. Waffle |  
| 2. | SDK - bodhi.js: Address mapping | Use module-evm-accounts to handle address mapping between Substrate & EVM addresses; Handles all Ethereum RPC used by project SDK |  
| 3. | Substrate pallet: module-evm-accounts | provide a two way mapping between Substrate accounts and EVM accounts so user only have deal with one account / private key |  
| 4. | Substrate pallet: modules-evm | Drop the gas price mechanism from Ethereum in favor of the weights mechanism from Substrate |  
| 5. | Integration | Deploy an existing contract and ensure it works e2e |  
| 6. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant.

## Future Plans

Our vision is to provide a composable and innovative stack for EVM on Substrate. We've seen the power of composibility in DeFi on Ethereum, and it's not limited to one domain. Meanwhile we also want to break-free from Ethereum constraints, and offer innovative economic models, fight scams, and improve usability. We're determined to make this next level unified experience happen on Substrate, through the the Project Bodhi stack. We are going to eat our own dog food to use it for Acala. And we believe it will be useful for most domain-specific parachains/parathreads who have custom runtime and also want to leverage smart contracts.

Future development

1. Expose [orml-currencies](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/currencies) precompiles to EVM
2. Expose [orml-nft](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/nft) precompiles to EVM
3. Implement and integrate with Indexer Node
4. Integrate fully with Polkadot Extension
5. EVM economics: state renting, contract existential deposit, contract deployment economics
6. Replace Gas system with Weights system

## Additional Information :heavy_plus_sign:

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:

* What work has been done so far?
  * we have done PoC to prove it's possible, evaluated edge cases and figured out to the full-scope for production ready development.
  * Project overview PPT [here](https://docs.google.com/presentation/d/1CfEFz3a5hLN2R-G25E32wNFTENVwRtO3m2JHTf5KJZI/edit?usp=sharing)
  * Project brief & plan [here](https://docs.google.com/document/d/1iqkgei9RoXQnZlDp3IoSsnNDIylTCcBAB5RJJQeu0Ec/edit?usp=sharing)
  * PoC code [here](https://github.com/AcalaNetwork/evm-provider)
* Are there are any teams who have already contributed (financially) to the project?
  * Just the Acala team
* Have you applied for other grants so far?
  * Acala has a grant from W3F for stablecoin. Founding members of Acala project, Laminar and Polkawallet also received grants for their respective projects.
