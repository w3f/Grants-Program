# DelightfulDOT

- **Team Name:** Coong Crafts (formerly Coong Team)
- **Payment Address:** 15GJvMYDXXU5Xr795kP5VdsfccWS7Hcug5smWjN6gEELvWaT (AssetHub - USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### 1. Overview
Dapps have always been a very important part of any blockchain ecosystem, it is where users can connect and interact with blockchain nodes. Given the complex nature of interacting with Substrate-based blockchains, in order for developers to focus on the business logic, a middle layer between dapps and blockchain nodes to facilitate the connections & interactions is always an essential part of the ecosystem and this is where `@polkadot/api` comes in.

`@polkadot/api` has done a great job in helping applications connect to networks in an easy and effortless way by abstracting away all the complexities of connecting with a Substrate-based blockchain and scale-codec serialization process under the hood. But through development experience, benchmarking and profiling, we found out that `@polkadot/api` has a relatively high memory consumption, which might not be problematic for dapps that only connect to one or a few networks, but for dapps that need to connect to dozens or even hundreds of networks at the same time, it’s a problem which might create a great impact on the overall user experience (e.g: a wallet app or portfolio app needs to connect to a large number of networks to fetch users’ balances & assets or to listen to on-chain events).

- If we enable all 100+ Substrate networks on SubWallet, it could increase the memory consumption to over a GB of RAM.
<img width="680" alt="subwallet-high-memory-consumption" src="https://github.com/sinzii/Grants-Program/assets/6867026/bc517115-9f49-44c4-ba86-434f48cece84" />

- Talisman is having their own solution for connecting to networks and fetching balances effectively without relying on `@polkadot/api` ([@talismn/balances](https://github.com/TalismanSociety/talisman/tree/dev/packages/balances)**,** [@talismn/api](https://github.com/TalismanSociety/api)).
- We ran [a NodeJS script](https://github.com/sinzii/delightfuldot-poc/blob/main/src/benchmarks/benchmark_connect_multiple_endpoints.ts) that connects to 100 substrate-based network endpoints to fetch balances for an account using `@polkadot/api`, and the average memory consumption is over 800MB. More details about the benchmark results could be found [here](https://github.com/sinzii/delightfuldot-poc/tree/main#memory-consumption-benchmark-result).

As we’re heading toward a multi-chain future, there will absolutely be more parachains, parathreads or solochains built on Substrate to come, and users might have assets spreading over dozens or hundreds of networks. With that, we do see the need of connecting to a large number of networks at the same time effectively and efficiently, Coong Crafts propose to build `delightfuldot`, an alternative solution to `@polkadot/api` to address this issue in contributing to the whole effort of paving the way to a multi-chain future of the Polkadot & Kusama ecosystem.

### 2. Project Details

**2.1. Why does `@polkadot/api` has a high memory consumption?**

We ran memory profiling for a [NodeJS script](https://github.com/sinzii/delightfuldot-poc#profiling) to connect to Polkadot network to see how much memory `@polkadot/api` consume during the bootstrapping process (initialization). Below are captures of the results:
- Result of `Allocation sampling` profiling via Google Dev Tools
<img width="680" alt="image" src="https://github.com/sinzii/Grants-Program/assets/6867026/455221f4-2dfb-459d-9186-12df5e4745fc" />

- Result of `Allocation instrumentation on timeline` profiling via Google Dev Tools
<img width="680" alt="image" src="https://github.com/sinzii/Grants-Program/assets/6867026/8f259f40-42b0-452a-8fb8-ff86fbce1e9a" />

From the results, we can see that the memory consumption from `Metadata` and its type system is relatively high. As we looked into the source code itself, we found out that `@polkadot/api` has its own types and structure for every piece in the metadata, during the decoding process it will create types for all of the pieces in the metadata hierarchy/structure which result in the lot of `Type` objects and a big `Metadata` object ([`PortableRegistry` is a part of the Metadata](https://github.com/polkadot-js/api/blob/319535a1e938e89522ff18ef2d1cef66a5af597c/packages/types/src/interfaces/metadata/v14.ts#L43-L47))

We tried to build a [small proof of concept alternative solution](https://github.com/sinzii/delightfuldot-poc/tree/main/src/poc) using [`scale-ts`](https://github.com/paritytech/scale-ts) (now `subShape`) for scale-codec encoding/decoding to do the same functionality and the memory consumption has improved noticeably.
<img width="680" alt="image" src="https://github.com/sinzii/Grants-Program/assets/6867026/dd6940e0-84a0-49cb-a4ee-9a055356bcba" />

Going further, instead of connecting to 1 network, this time we tried to connect to 20, 50, and 100 network endpoints to fetch balances for an account using `@polkadot/api` and our PoC solution for comparison, and as we can see from the [benchmark result](https://github.com/sinzii/delightfuldot-poc#memory-consumption-benchmark-result), the memory consumption of our PoC solution is significantly smaller. More details about the benchmarking could be found in [our PoC repository](https://github.com/sinzii/delightfuldot-poc#benchmark-memory-consumption-when-connecting-to-multiple-network-endpoints).

**2.2. Design Goals & Approach**

_**2.2.a. API style similar to `@polkadot/api`**_

`@polkadot/api` is currently using an [easy-to-use and intuitive API style](https://polkadot.js.org/docs/api/start/basics#metadata) (e.g: `api.query.system.account(address)` to query account balance, or `api.consts.[pallet_name].[constant_name]` to access constants of a pallet ...).

So we decided to use the same API style so that users don’t have to learn new syntax when switching to using `delightfuldot` and making the migration progress easier.

_**2.2.b. Less overhead evaluation**_

During the bootstrapping process, `@polkadot/api` will try to register all possible type definitions ([ref1](https://github.com/polkadot-js/api/blob/319535a1e938e89522ff18ef2d1cef66a5af597c/packages/types/src/create/registry.ts#L193), [ref2](https://github.com/polkadot-js/api/blob/319535a1e938e89522ff18ef2d1cef66a5af597c/packages/types/src/create/registry.ts#L571)) and expose all available methods/props after decoding the metadata retrieved from a network ([ref](https://github.com/polkadot-js/api/blob/master/packages/api/src/base/Decorate.ts#L253)). This would help make the API execution faster but at the same time make the bootstrapping process longer and increase the overall memory consumption. Secondly, most of the dapps only use a few APIs and types (e.g: fetching balances, transfer balances or assets ...), so the registration of all of APIs and types would be unnecessary in most cases.

`delightfuldot`'s approach is to perform API evaluation and execution on the fly, which is at the time an API is called, `delightfuldot` will check if the API is existed or not, register all necessary types (and cache those types if possible for later usage), execute the API and then handle the response.

For example, upon calling `api.query.system.account('5xxxxx...')` to fetching balances for an account, `delightfuldot` will do the following steps:
 - Check if the pallet named `System` is existed in the metadata, else throw an error.
 - Check if the storage entry named `Account` is existed in the pallet `System` in the metadata, else throw an error.
 - Gather all the necessary information to perform a storage query through an RPC `state_getStorage` like input types, output type, calculate storage entry hash …
 - Execute RPC `state_getStorage` with the calculated storage entry hash
 - Decode the response with the output type and return the decoded data.

Unlike `@polkadot/api` where the first 2 steps are already done in the bootstrapping process. We believe that our approach would help speed up the bootstrapping process and reduce the overhead memory consumption. We archived this by using a [proxy technique](https://github.com/sinzii/delightfuldot-poc/blob/14eab8195c02fb6c48300812572437edd11ca707/src/poc/delightfuldot.ts#L82-L92), you could find more in detail about it in the PoC repository.

_**2.2.c. Caching**_

Metadata has always been an important part of any Substrate-based blockchain, it’s where we can find all information about on-chain functionalities (pallets, storage, extrinsics, constants, …), but it takes time to encode the metadata retrieved from networks and take space in the memory to store all of the information after decoding the metadata.

Since Metadata is only updated through runtime upgrades, so `delightfuldot` will cache the decoded metadata information in the device’s storage (localStorage, IndexedDB, …) and only check to update it on runtime upgrade. This would also help speed up the bootstrapping process and reduce memory consumption since the metadata is now stored on the device’s storage.

One drawback of this approach is that access speed to storage would be a bit slower than to memory, but given the benefits of the approach, we believe the tradeoffs are acceptable.

**2.3. Vision**

We set a vision for `delightfuldot` to become an essential part of Polkadot & Kusama ecosystem, so dapps can leverage its utilities to connect to and interact with hundreds of networks quickly and smoothly without having to think about memory consumption.

This proposal is asking for a grant to support the first development phase of `delightfuldot` for the foundational modules with core functionalities. More details are in the upcoming section.

**2.4. Foundational modules with core functionalities**

This step, we aim to lay out all the necessary foundational pieces of the library and put all of them together to form the core functionalities, including:

- New type system built on top of `scale-ts` (now `subShape`) with less memory consumption while at the same time can easily switch to use `@polkadot/api`'s type system for easy migration from existing dapps.
- A metadata parser with abilities to decode & encode Metadata using scale-codec. In the scope of this grant, we plan to support the latest version of metadata which is v14.
- Ability to execute RPCs to a Substrate-based node
    - Each blockchain has its own custom list of supported RPCs, in the scope of this grant we plan to implement the supported RPCs of [Polkadot](https://polkadot.js.org/docs/polkadot/rpc) & [Kusama](https://polkadot.js.org/docs/kusama/rpc) networks.
    - Support registering custom RPCs, so developers can easily add custom RPCs for their custom substrate node.
- Ability to execute Runtime APIs
    - Similar to RPCs, each substrate-based blockchain has its own list of supported Runtime APIs, so in the scope of this grant, we plan to implement the supported Runtime APIs of [Polkadot](https://polkadot.js.org/docs/polkadot/runtime) and [Kusama](https://polkadot.js.org/docs/kusama/runtime) networks.
    - Support registering custom Runtime APIs
- With the format of Metadata V14, on-chain functionalities are exposed through pallet’s definitions including pallet’s constants, storage entries, extrinsic calls, events & errors. We plan to support abilities to:
    - Inspect pallet’s constants (similar to `@polkadot/api` APIs to inspect [constants](https://polkadot.js.org/docs/polkadot/constants))
    - Inspect pallet’s events & errors (similar to `@polkadot/api` APIs to inspect [events](https://polkadot.js.org/docs/polkadot/events) & [errors](https://polkadot.js.org/docs/polkadot/errors))
    - Execute pallet’s storage queries (similar to `@polkadot/api` APIs to execute [storage queries](https://polkadot.js.org/docs/polkadot/storage))
    - Sign and submit extrinsics (similar to `@polkadot/api` APIs to [sign & submit extrinsics](https://polkadot.js.org/docs/polkadot/extrinsics))

The work will be focused on building APIs to facilitate interactions with Substrate-based blockchain nodes, therefore we'll leverage existing solutions for creating, managing & signing keys in `@polkadot/keyring` package as well as other cryptography & utility functions in `@polkadot/util-crypto`, `@polkadot/util`.

**2.5. Tech Stacks**
- TypeScript
- scale-ts (now subShape), rxjs
- Helpful packages from `@polkadot/api`, `@polkadot/common`

### Ecosystem Fit
`delightfuldot` fits perfectly in the Polkadot & Kusama ecosystems as it provides a solution to a critical issue faced by dApps that need to connect to and interact with hundreds of networks efficiently & effectively. Any dApps (e.g wallet apps, portfolio apps, ...) that need to connect to a large number of networks can benefit from `delightfuldot`'s utilities.

We as the maintainer of [Coong Wallet](https://grants.web3.foundation/applications/coong_wallet) see that `delightfuldot` is a stepping stone to the next development phase of Coong Wallet with more & more useful features in which Coong Wallet would need to connect to a large number of Substrate-based networks to fetching & syncing information.

Aside from `@polkadot/api`, [`capi`](https://github.com/paritytech/capi) is another project to help craft interactions with Substrate-based blockchain, but at the time of writing this proposal, it’s going through a big restructuring, we’re not sure what would it look like until its shape be more concrete. Overall we don’t see any noticeable projects that are trying to solve the same problems as us.

## Team :busts_in_silhouette:

### Team members

- Thang X. Vu (Team Leader)
- Tung Vu

### Contact

- **Contact Name:** Thang X. Vu
- **Contact Email:** thang@coongcrafts.io

### Legal Structure

N/A yet

### Team's experience

Coong Crafts is a small team set out with a mission to bring Web3 closer to the world. We previously completed a grant to build [Coong Wallet](https://grants.web3.foundation/applications/coong_wallet) ([PR](https://github.com/w3f/Grants-Program/pull/1387)), a website-based wallet solution to address the inconsistent wallet experience on mobile & desktop and bring a new approach to onboard new users to Polkadot & Kusama ecosystem.

### Team Code Repos

Project repositories will be hosted at https://github.com/CoongCrafts

Team members
- Thang X. Vu - https://github.com/sinzii
- Tung Vu - https://github.com/1cedrus

## Development Status :open_book:

- We have been in research the `@polkadot/api` project to learn how it works under the hood as well as doing benchmarking & profiling to figure out why it has a high memory consumption.
- We have been building a [proof-of-concept solution](https://github.com/sinzii/delightfuldot-poc/tree/main/src/poc) in an attempt to address the memory issue and saw a [clear/good improvement](https://github.com/sinzii/delightfuldot-poc/tree/main#memory-consumption-benchmark-result).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4.5 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 — Foundational modules with core functionalities

- **Estimated duration:** 3 months
- **FTE:**  2
- **Costs:** 17,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to install `delightfuldot` and interact with Substrate-based networks. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Core functionalities | We'll build the following features for the library:<br/> - New type system built on top of `scale-ts` <br/> - A Metadata parser for the Substrate Metadata V14 <br/> - RPC APIs: Support default RPC APIs for Polkadot and Kusama networks & ability to add custom RPC APIs <br/> - APIs to inspect pallets' constants <br/> - APIs to execute pallets' storage queries <br/> - APIs to inspect pallets' events & errors |
| 2. | Publish to npm | We'll package and publish the library to npm, so developers can install and start using it.


### Milestone 2 - More core functionalities

- **Estimated Duration:** 1.5 months
- **FTE:**  2
- **Costs:** 13,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to sign & submit extrinsics via `delightfuldot` and the migration process from `@polkadot/api` to `delightfuldot`  |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | More core functionalities | We'll continue to build core functionalities for the library: <br/> - APIs to create Extrinsics payload, sign and submit Extrinsics as well as the ability to keep watching for Extrinsic status after submission. <br/> - Runtime APIs: Support default runtime APIs for Polkadot and Kusama networks & ability to add custom Runtime APIs

## Future Plans

Next steps for `delightfuldot` are:
- Support APIs to interact with Smart Contract
- Support older/newer versions of Metadata
- Support more [RPC](https://polkadot.js.org/docs/substrate/rpc) and [Runtime](https://polkadot.js.org/docs/substrate/runtime) APIs
- XCM utilities
