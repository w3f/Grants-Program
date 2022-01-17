# W3F Grant Proposal

* **Project Name:** Substrate Polywrapper
* **Team Name:** Polywrap DAO + ChainSafe
* **Payment Address:** 0x85D81Ab61Fe16CDcaeF2Ca556ED4577A51b9b07C (USDC preffered)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3 

## Project Overview :page_facing_up:

### Overview

For this proposal, we'll be developing:
1. **Substrate Core Polywrapper:** Polywrapper in Rust that enables users to interact with substrate-based chains using any language on any platform.
2. **Token Balance Interface:** Polywrap standard interface that defines common functionality for all pallets supporting "balances".
3. **Balances Implementation Wrapper:** An implementation of the "Token Balance" interface that interacts with the [Balances pallet](https://github.com/paritytech/substrate/tree/master/frame/balances)'s ABI.
5. **[Pallet ABI -> Polywrapper] Codegenerator:** A code generator that generates Polywrap code based on a Pallet's ABI (leveraging the [chain's metadata](https://github.com/paritytech/substrate/pull/8615)).
6. **Developer Documentation:** Documentation showing developers how they can use the Balance wrapper, implement their own Balances implementation, and generate Polywrappers from pallet ABIs.

**About Polywrap:**
Polywrap is a dev toolchain that enables easy integration of Web3 protocols into any application. It makes it possible for software on any device, written in any language, to read and write data to Web3 protocols.

https://polywrap.io/#/

### Project Details

Polywrapper will be written in Rust and compiled to WASM so that it can be used by developers to call substrate methods by simply invoking graphql calls. We will deploy Substrate Polywrapper to the IPFS.

Project heavily relies on the Polywrap toolchain and Polywrap team support.

### Ecosystem Fit
* **Where and how does your project fit into the ecosystem?**
  
  Polywrap will allow polkadot dapp developers to integrate protocol logic into dapps in a simple, familiar way, regardless of their implementation language.

  Additionally it will enable a new "standardization layer" for dapps developers to use, enabling the aggregation of multiple similar-but-different chains. The first standard interface we'll be developing for this grant will be the "token balance" interface. We will create an implementation of this interface for the [Substrate Balance Pallet](https://github.com/paritytech/substrate/tree/master/frame/balances).


* **Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?**

  Our initial target audiences are dapp/wallet developers, as well as the broader web3 developer ecosystem since Polywrap is architected in a chain-agnostic way. We'll be working with the [Talisman](https://talisman.xyz/) team to ensure the work we're doing aligns with their wallet's needs. We've already had preliminary conversations with them, and they're excited to work with the software we build for this grant.
  
  Additionally the Talisman team has confirmed that, if this Polywrap integration suites their needs like they/we think it will, they are willing to help contribute to the codebase(s) going forward along with ChainSafe and the Polywrap DAO.

* **What need(s) does your project meet?**
  
  Polywrap meets the needs of dapp developers who want a simple way to integrate protocol logic into their dapps.  The Polywrap integration experience should be extremely familiar to any develop who has integrated a Web 2.0 API.  The dapp dev simply needs to add the Polywrap client into their dapp, and then they will be able to send GraphQL queries to an endpoint to execute protocol functions.
  
  Additionally, as previously stated, we've noticed that in the multi-para-chain future there is a need for another layer of standardization. This is because pallet ABIs may be different amongst multiple chains, but be effectively serving the same purpose (Tokens, AMMs, Profiles, Governance, etc). With Polywrap developers can create standard interfaces that can be implemented in many different ways, depending on the pallet being used. The dapp developer simply uses the standard interface methods/types, and doesn't have to care about the implementation details of the chain/pallet. We feel that this goes hand-in-hand with the ["enriched metadata & typeinfo"](https://github.com/paritytech/substrate/pull/8615) feature that was recently merged.
  
  Lastly, it's worth noting that polywrappers can be downloaded and executed at run-time due to the security and portability of WebAssembly. This means that dapps using the "Token Balance" interface can potentially update themselves without having to be rebuilt, dynamically supporting new chains as they come online.

* **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

  There are not other projects solving the integration issue today at the SDK layer. As previously mentioned, the ["enriched metadata & typeinfo"](https://github.com/paritytech/substrate/pull/8615) PR solves the introspection problem at the chain-level, but there is more to do farther down the integration pipeline at the dapp level. This is where Polywrap will help.
## Team :busts_in_silhouette:

### Team members

* Matthias Seitz - Team Lead
* Tianyi Zhang
* Willes Lau

### Contact

* **Contact Name:** Marin Petrunić
* **Contact Email:** marin@chainsafe.io
* **Website:** https://chainsafe.io/

### Legal Structure

* **Registered Address:** 251 Spadina Ave, Unit 204, Toronto, Ontario, Canada
* **Registered Legal Entity:** ChainSafe Systems Inc.

### Team's experience

ChainSafe is a global leader in blockchain protocol and infrastructure solutions for Web 3.0. The firm encompasses top engineering talent from around the world. The company is architecting official client implementations on Ethereum 2.0 (“[Lodestar](https://github.com/ChainSafe/lodestar)”), Polkadot (“[Gossamer](https://github.com/ChainSafe/gossamer)”), Filecoin (“[Forest’’](https://github.com/ChainSafe/forest)), a [Rust implementation of the Mina Protocol](https://github.com/ChainSafe/mina-rs), and many more.

ChainSafe rounds out their deep Web 3.0 portfolio with undertakings into product development via their privacy-first file storage solution [ChainSafe Files](https://app.files.chainsafe.io/), the [ChainSafe Gaming SDK](https://github.com/ChainSafe/web3.unity), as well as their flagship product [ChainBridge](https://github.com/ChainSafe/ChainBridge).


### Team Code Repos

* https://github.com/ChainSafe
* https://github.com/ChainSafe/gossamer
* https://github.com/ChainSafe/PINT
* https://github.com/ChainSafe/chainlink-polkadot
* https://github.com/polywrap

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* https://github.com/mattsse
* http://github.com/clearloop
* https://github.com/willeslau

### Team LinkedIn Profiles (if available)

* https://www.linkedin.com/in/matthias-seitz-a49378211/
* https://www.linkedin.com/in/tianyi-zhang-2277191a3/

## Development Status :open_book:

- Academic publications relevant to the problem
    - Documentation: [https://docs.polywrap.io/](https://docs.polywrap.io/)
- Links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
    - Blog Post - Polywrap: Improving how dApps Integrate with Uniswap v2
        - [https://blog.polywrap.io/p/uniswap-v2](https://blog.polywrap.io/p/uniswap-v2)
- References to conversations you might have had related to this project with anyone from the Web3 Foundation
    - In July, Rohan Joseph, a member of the Parity ecosystem growth team reached out to Jordan, one of the original developers, to learn more about the Polywrap technology
    - In August, the Polywrap team met with Rohan and also his coworker, Surag Sheth, to go over the Polywrap tech.  The Polywrap team also learned more about the W3F Grants Program and the benefits of applying
    - After this meeting, Rohan connected the Polywrap team to Marcin from the W3F.
    - In an email to Marcin, Kevin from the Polywrap team asked ChainSafe can work on the Polkadot <> Polywrap integration, and whether the Level 3 application would work.
        - Marcin let us know to just submit the application which will be reviewed
- Progress on the project:
    - 13 slide deck showing progress: [https://www.canva.com/design/DAEp9ePJUQ0/HaHaeo5uC3ERY0iyuLPHMw/view?utm_content=DAEp9ePJUQ0&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent](https://www.canva.com/design/DAEp9ePJUQ0/HaHaeo5uC3ERY0iyuLPHMw/view?utm_content=DAEp9ePJUQ0&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent)
    - Core toolchain with CLI support: [https://github.com/polywrap/monorepo](https://github.com/polywrap/monorepo)
    - Rust support (pending review): [https://github.com/polywrap/monorepo/pull/523](https://github.com/polywrap/monorepo/pull/523)
    - Polywrap Hub - the web3 aggregator (in progress): [https://github.com/polywrap/hub](https://github.com/polywrap/hub)

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 2.5 months
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 220 000$
* **Start Date:** 28. February 2022

### Milestone 1 - Substrate Core Polywrapper

* **Estimated duration:** 1 month
* **FTE:**  2
* **Costs:** 110 000$

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can interact with polywrapper |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests and e2e tests using polywrap recipes json tests |
| 1. |Substrate Core Polywrapper | Described below |  

##### Substrate Core Polywrapper
- Bootstrap polywrapper project using w3/cli
- Write graphql schema for substrate core methods:
    - author_submitExtrinsic
    - chain_getBlockHash
    - chain_getHeader
    - chain_getFinalizedHead
    - chain_getBlock
    - state_getStorage
    - state_queryStorage
    - state_queryStorageAt
    - state_getMetadata
    - state_getRuntimeVersion
    - system_properties
- Implement graphql schema methods in rust using Polywrap http plugin
- Deploy polywrapper to ipfs

### Milestone 2 — Substrate Balances Polywrapper & Token Balance Interface

* **Estimated duration:** 3 weeks
* **FTE:**  2
* **Costs:** 55 000$

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can interact with polywrapper |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests and e2e tests using polywrap recipes json tests |
| 1. | "Token Balance" Standard Interface | Described below |  
| 2. | Substrate Balances Polywrapper | Descibed below |  

#### "Token Balance" Standard Interface
- Bootstrap polywrap interface project using w3/cli
- Write graphql schema for the following methods:
    - transfer - send funds to target account
    - balance - returns balance of given account
- Deploy interface to ipfs

##### Substrate Balances Polywrapper
- Bootstrap polywrapper project using w3/cli
- Implement graphql schema for the "Token Balance" interface described above
- Implement graphql schema methods in rust using Substrate Core Polywrapper
- Deploy polywrapper to ipfs

### Milestone 3 — Codegenerator + Developer Documentation

* **Estimated duration:** 3 weeks
* **FTE:**  2
* **Costs:** 55000$

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can interact with polywrapper |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests and e2e tests using polywrap recipes json tests |
| 1. | Developer documentation | Documentation showing developers how they can use the Balance wrapper, implement their own Balances implementation, and generate Polywrappers from pallet ABIs. |  
| 2. | [Pallet ABI -> Polywrapper] Codegenerator | Described below |  

##### [Pallet ABI -> Polywrapper] Codegenerator
- Giving a pallet's ABI
- Generate Polywrap code that can be used to easily encode/decode types when interacting with the pallet

Example of generating Polywrapper for Ethereum based on ABI: https://github.com/nerfZael/abi-to-wrap

## Future Plans

We hope that with this work complete, a team like Talisman will be able to continuing using the tooling we've developed to fully realize their vision of having a fully featured multi-para-chain wallet.

The work created by this grant will be stewarded by the ChainSafe & Polywrap DAO teams, as well as the Talisman team if they decide to build upon what we've created.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation