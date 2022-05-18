# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** xtokens - XCM Implementation for Fungible Assets
* **Team Name:** Acala
* **Payment Address:** `1Q88PtW866r4bfv2eMphobP78QnsDrRKfY`

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
We are creating a XCM Implementation for Fungible Assets - xtokens.

### Overview
Polkadot Cross-Consensus Message Format (XCM) is a generic message format that is very flexible but loosly defined. Therefore, we need to provide an implementation of required use case e.g. cross-chain transfer, for parachains to be interoperable with the same context, namely send/receive fungible assets between parachains, and between relay chain and parachains. We have developed an implementation guide, as well as a reference implementation `xtokens` that has been used by Acala, Laminar, Plasm, and HydraDX successfully completing cross-chain fungible token transfers on Rococo parachain testnet. We are supporting many more projects including Moonbeam, Centrifuge, PolkaBTC, Darwinia, Kilt, Crust and Snowfork to implement this and enable our chains to be composable with each other. 

We believe all chains on Polkadot/Kusama shall be composable with each other, from exchanging values to exchanging and altering states. The cross-chain fungible asset implementation is the first step towards this goal. 

### Project Details 
We have already delivered the work we outlined in a PoC state, we will continue the development to meet the `best practice` outlined in the implementation guide at a production-grade standard, and this grant is applied partially in retrospect.

Below are deliverables:
* XCM Fungible Asset Implementation Guide that outlines fungible asset design considerations and discussions, serving as a draft `best practice`. (see [here](https://github.com/open-web3-stack/open-runtime-module-library/discussions/385))
* A reference implementation of cross-chain fungible assets - xtokens PoC (see xtokens [here](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens) and xcm-support [here](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xcm-support))
* A detailed documentation for other parachains to use these pallets, configure cross-chain assets, open HRMP channels on Rococo to test the cross-chain transfer etc. (see docs [here](https://wiki.acala.network/build/development-guide/composable-chains))
* Further develop xtokens to implement parachain and fungible asset identifier to handle asset conversion, assetId conversion, and multi-location conversion etc in a more generic and extensible way as described in the [implementation guide](https://github.com/open-web3-stack/open-runtime-module-library/discussions/385)
* We will contribute the `xtokens` code to the [orml (open-runtime-module-library)](https://github.com/open-web3-stack/open-runtime-module-library) so anyone can use and further extend it.

### Ecosystem Fit 
This is another common-good implementation that would be useful to any parachains who want to send and receive fungible assets from other parachains, as well as send/receive relay chain token between relay chain and parachain. We have tackled many XCM and HRMP caveats while implementing `xtokens`, which would save much time for many other projects and accelerate innovations on top of cross-chain value exchange. We also foresee this work will inspire more collaboration and discussion within the parachain ecosystem, and could also inspire similar development for non-fungible assets.

We are not aware of other implementations at this stage, but hope to inspire more.

## Team :busts_in_silhouette:

### Team members
* Shaun Wang (Lead Developer)
* Bryan Chen (Architect)
* Bette Chen (Product Manager)	

### Contact
* **Contact Name:** Bette Chen
* **Contact Email:** bette@acala.network
* [Acala Website](https://acala.network/)

### Legal Structure 
* **Registered Address:** 462 Crawford Lane #02-39 Singapore 190462
* **Registered Legal Entity:** ACALA PTE. LTD.

### Team's experience
The team is made of experienced Substrate builders, various members are contributors to substrate, polkadot-js and other core libraries.

Shaun Wang has been contributing to several Polkadot ecosystem open source libraries, including Substrate, parity-common, type-metadata, etc. He has worked extensively on launching Acala on Rococo testnet, implementing xtokens, helping various teams installing xtokens and successfully completing cross-chain transfers. 

Bryan Chen is one of the most active contributors to substrate codebase outside of Parity, a Polkadot community ambassador, and substrate/polkadot lecturer. He's the architect and technical brainpower behind the Laminar & Acala project.

Bette Chen has more than a decade product/program/project management experience with background in Software Engineering and MBA from Otago and Duke. She's in charge of product and operation for Laminar & Acala.

### Team Code Repos
* xtokens: https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens
* xcm-support: https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xcm-support

### Team Github
* Shaun: https://github.com/orgs/laminar-protocol/people/shaopengw
* Bryan: https://github.com/orgs/laminar-protocol/people/xlc
* Bette: https://github.com/orgs/laminar-protocol/people/bette7

### Team LinkedIn Profiles
* https://www.linkedin.com/in/bryan-chen-1ba8ba52/
* https://www.linkedin.com/in/bette-chen/
* https://www.linkedin.com/in/shaopeng-wang/

## Development Roadmap :nut_and_bolt: 


### Overview
* **Total Estimated Duration:** 2 month
* **Full-time equivalent (FTE):**  1.5 FTE
* **Total Costs:** USD 25k (Payable in BTC)

### Milestone — Implement xtokens PoC
* **Estimated Duration:** 1 month
* **FTE:**  1.5
* **Costs:** USD 15k 

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how to use xtokens |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Substrate module: `xtokens` | We will create a Substrate module that will handle cross-chain Account and balance transfers: transfer relay chain token e.g. DOT, transfer parachain tokens to parachain etc.|  
| 2. | Substrate module: `xcm-support` | We will create a Substrate module that will provide support functionalities for XCM e.g. convert relay chain decimals to parachain decimals, supports multi-currency, and converts relay chain currencyId to parachain etc. |  
| 3. | Support parachain installing xtoken | We will support other parachains to install and test cross-chain fungible token transfer using xtoken, by providing necessary documentation, direct technical support, and trouble shooting. |  
| 4. | Article/Tutorial | We will write a tutorial that explains the work done as part of the grant. | 

### Milestone — Further Implement `xtokens` according to the XCM Fungible Asset Implementation Guide
* **Estimated Duration:** 1 month
* **FTE:**  1.5
* **Costs:** USD 10k 

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how to use xtokens |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Substrate module: `xtokens` | We will extend `xtokens` to include parachain fungible asset multi location mapping with parachainId as the namespace (in PoC it's just string identifiers), Asset Transactor to handle fungible asset balances and operations, Location Conversion to map multi-location and accountId, AssetId Conversion to map foreign multi-asset to native parachain assetId/currencyId and vice versa|  
| 2. | Substrate module: `xcm-support` | We will extend `xcm-support` to support the added operations from #1 |  
| 3. | Article/Tutorial | We will write a tutorial that explains the work done as part of the grant. |

## Future Plans
This is only the beginning of shaping up specific use cases of XCM, we will continue to improve fungible asset implementations so its generic enough for most if not all parachains. This work is likely to inspire non-fungible asset implementations, and we'd also be keen to contribute further as well. 

## Additional Information :heavy_plus_sign: 

Possible additional information to include:
* The `xtokens` PoC has been implemented on multiple parachains on Rcococ, Plasm was the first amongst them, and [here](https://medium.com/acalanetwork/the-first-successful-cross-chain-messaging-passing-xcmp-transaction-on-polkadot-testnet-eb36af2ad8c3?source=collection_home---4------1-----------------------) is the article describing it. 
* Are there are any teams who have already contributed (financially) to the project? Just Acala.
* Have you applied for other grants so far? Yes, we have a grant for stablecoin that has been completed. We also have a grant for a Substrate composable EVM, of which the first milestone has been delivered. 
