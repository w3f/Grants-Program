# Substrate EVM Adapter

- **Team Name:** Dastanbek Samatov
- **Payment Details:**
  - **DOT**: 16FqwPZ8GRC5U5D4Fu7W33nA55ZXzXGWHwmbnE1eT6pxuqcT
  - **Payment**: 16FqwPZ8GRC5U5D4Fu7W33nA55ZXzXGWHwmbnE1eT6pxuqcT (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

This project aims to present an alternative approach to EVM compatibility for Substrate chains. The main goals are to improve developer experience and introduce an approach that requires the least amount of changes to the runtime and client. It does so by leveraging the best parts of multiple existing compatibility solutions and other awesome ecosystem tools.

The main components of the project are:

- a standalone ETH RPC adapter that will enable a partial EVM compatibility for Substrate chains
- a pallet responsible for bridging ETH RPC adapter with the Substrate chain

### Project Details

As stated above, main requirements are:

- provide opt-in partial or full EVM compatibility for Substrate chains
- minimal changes to the runtime and client

#### Rationale

In its essence, EVM compatibility means that a Substrate chain can be interacted with using Ethereum tools and workflows. It is obvious that EVM compatibility solutions are important for the ecosystem to attract more developers and users. Therefore, it is imperative to provide as many solutions as possible to cater to different needs and requirements.

Imagine being able to read the state of any Substrate chain using web3.js without making fundamental changes to the chain or tools. And what if we could extend this to *almost* full EVM compatibility (read and write) by adding a single pallet to the chain? This is basically what we aim to achieve with this project.

#### Substrate ETH-RPC Adapter

The cornerstone of this project is an adapter service that emulates an Ethereum RPC. It translates any incoming Ethereum JSON-RPC calls into their Substrate equivalent RPC calls in real-time, basically forwarding it to the local `smoldot` light client or remote Substrate RPC node. From the perspective of external tools, the adapter will look like a regular ETH RPC node. Adapter will implement the necessary mapping logic for the most essential Ethereum RPC calls like `eth_getBlockByNumber` and `eth_getStorageAt`, etc. For the sake of simplicity each pallet will be given a unique, deterministic address, much similar to precompiles in Frontier (probably a name of the pallet in byte form). However, unlike Frontier, there will be no need to write custom precompile for each pallet or embed an ETH RPC to Substrate client.

By default, the adapter runs an embedded light client to ensure fast access to the chain state. By going this route, we will avoid the need to run a full node or make any changes to the client itself. It will be possible to not run the light client and connect to a remote Substrate node instead, but users will have to be aware of latency issues and well-known security risks of trusting a remote node.

The list of supported RPC calls will be limited to the most essential ones, to keep the adapter lightweight and generic:

- `eth_chainId`
- `eth_getBalance`
- `eth_getCode` - some dummy code for all pallets
- `eth_call` (stateless, could be forwarded to either storage query or runtime API calls)
- `eth_blockNumber`
- `eth_getBlock*` (by number/hash, receipts, transaction count)
- `eth_gasPrice`
- `eth_getTransaction*` (by hash, by block, count, receipt)
- `eth_getLogs`
- `eth_getStorageAt` - similar to `eth_call`, but more generic and operates with raw keys
- `eth_subscribe` - only `newHeads` and `logs` for now

There has been some talk about reading the chain state of Substrate node using tools like Metamask or `web3.js`. And this is exactly what we will achieve by implementing this adapter. For tools that only need read access, be it for data analysis, explorers or other purposes, this module will be sufficient. Therefore, accomplishment of at least this part of the project will already meet the demands of some users.

#### Substrate EVM Adapter Pallet

The second part of the project is to provide both the read and write access to the chain. Unfortunately, due to some fundamental differences between Ethereum and Substrate chains, it is not possible to achieve this out of the box. This is why it is necessary to have at least `pallet-evm` to provide and some other module that verifies ECDSA signatures and has some account mapping logic. This pallet will loosely couple with `pallet-evm` to access the EVM runner, executing bytecode if necessary. And will utilise `frontier`'s `dispatch` [precompile](https://github.com/polkadot-evm/frontier/tree/master/frame/evm/precompile/dispatch) to dispatch FRAME calls originating from the ETH RPC adapter. This part of the project can be opt-in feature that can be added to the runtime if close to full EVM compatibility is desired.

For account mapping, we will follow the [approach](https://forum.polkadot.network/t/wrappedevm-eth-rpc-compatibility-layer/2775/6) of `Unique`: hashing `AccountId20` to get `AccountId32` and truncating `AccountId32` to get `AccountId20`. This way, users will have to first deposit to their corresponding, deterministic Substrate style accounts before interacting with the chain with their EVM style account.

This pallet will complete the full ETH RPC compatibility by enabling the write access to the chain. In other words, at least these RPC calls will be supported by ETH-RPC adapter:

- `eth_sendTransaction`
- `eth_sendRawTransaction`

#### Full flow

The following diagram is a high-level illustration of how the project will work:

![Untitled-2024-03-27-2305](https://github.com/dastansam/Grants-Program/assets/22231829/4a1be51b-17b0-43a4-b42f-6f5694d3911f)

#### Limitations and challenges

Some limitations arise from the fact that Substrate and Ethereum are fundamentally different. For example, transaction hashes are not unique in Substrate, dust accounts issue is handled in Substrate, but not in Ethereum, etc. Therefore, it should be noted that it is extremely difficult to provide "full" EVM compatibility. And during the course of the development, there will certainly be some decisions that won't align with true EVM experience. However, the goal is to provide a *good enough* compatibility that will be agnostic to the chain and tools used. Most importantly, in some cases it would be even better to default to Substrate-like behaviour, since Substrate was, in some sense, originally designed to fix some of the limitations that Ethereum still has.

#### Inspirations

In general, it was inspired by working with the current EVM compatibility solutions and the need to provide a more lightweight and flexible solution. But there are some notable [discussions](https://forum.polkadot.network/t/wrappedevm-eth-rpc-compatibility-layer/2775) and [questions](https://substrate.stackexchange.com/questions/8983/read-pallet-state-using-metamask) in the community that also gave some validations and inspirations to this project.

#### Tech stack

The project will be implemented completly in Rust. The ETH RPC adapter will be a standalone service that will be run as a separate process. The EVM adapter pallet will be a part of the Substrate runtime. There will be some other primitives and components included in the runtime that will make it easier to interact with the pallet.

DApp demo is a simple web application that will interact with the Substrate chain using the ETH RPC adapter. It will be written in JavaScript and will use `web3.js` to interact with the adapter.

### Ecosystem Fit

These are the existing solutions that aim to provide EVM compatibility for Substrate chains. The most notable ones are:

- **Frontier**: Offers full EVM compatibility by incorporating an EVM execution engine into the runtime and EVM RPC in the client. It demands significant changes to both the node and runtime, potentially introducing complexity and performance overhead.
- **`ethink!`**: Aims to add EVM [compatibility](https://sasha.ink/proposals/ethink-01/#stage-0-proof-of-concept--done) to `ink!` smart contracts. While innovative, it mainly focuses on a specific use case and does not provide a comprehensive solution for general EVM compatibility. It also requires embedding ETH RPC to the client. However, it is only similar to our project in how it uses a custom pallet as a middleman between the bytecode execution engine and EVM calls.
- **Polkamask**: A MetaMask snap designed to connect MetaMask with Substrate chains. Though it provides an easy-to-use solution for end-users, it relies on trusting an external plugin, raising concerns about security and trustlessness. It also doesn't provide a way to interact with the chain state outside of MetaMask.
- **Acala EVM+**: An EVM compatibility solution for Acala Network. It is important to note that, among other solutions, this one is the closest to what we aim to achieve, however, it is tailored to Acala Network and requires some changes to existing developer tools (custom `bodhi.js` instead of `web3.js`) to work. Moreover, it uses modified `pallet-evm`, rpc adapter only works with remote Acala node, and it has some additional runtime APIs, etc.

Our solution aims to use the best parts of these existing solutions while attempting to address some of their limitations. By providing a standalone ETH RPC adapter and an EVM adapter pallet, we offer a flexible and lightweight approach to EVM compatibility that can be easily integrated into any Substrate chain without imposing heavy requirements on the client and the runtime. By embedding the light client, we achieve faster and more reliable access to blockchain data, reducing latency and avoiding dependencies on external nodes. With a custom pallet that is loosely coupled with `pallet-evm`, we ensure keypair compatibility and a way to dispatch FRAME calls from the ETH RPC adapter. And most importantly, the goal is to be as generic as possible, so that it can be easily integrated into any Substrate chain.

## Team :busts_in_silhouette:

### Team members

- Dastanbek Samatov

### Contact

- **Contact Name:** Dastanbek Samatov
- **Contact Email:** dastanbeksamatov@gmail.com
- **Website:** https://dastansam.github.io/

### Legal Structure

- **Registered Address:** No registered entity
- **Registered Legal Entity:** No registered entity

### Team's experience

Dastanbek Samatov is a Rust Engineer with extensive experience in Substrate. For the past 3 years he has been working as a Protocol Engineer in various projects (all EVM compatible) in the Polkadot ecosystem. He periodically contributes to `polkadot-sdk`, active in the community and has contributed to several Web3 Foundation grants before. Some relevent links to projects and contributions:

- `Framework for Substrate Runtimes in AssemblyScript` - https://github.com/LimeChain/subsembly
- `Hyperfridge` - https://github.com/element36-io/ocw-ebics
- `ISO-8583 POC` - https://github.com/subclone/iso8583-chain
- `polkadot-sdk` - https://github.com/paritytech/polkadot-sdk/pulls/dastansam
- `Substrate StackExchange` - https://substrate.stackexchange.com/users/2005/dastansam

### Team Code Repos

- https://github.com/subclone/subeth

Team members:

- https://github.com/dastansam
- https://github.com/dastanbeksamatov

### Team LinkedIn Profiles (if available)

- https://linkedin.com/in/dastanbek-samatov

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 15 weeks
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 30,000 USDT

### Milestone 1 — ETH RPC Adapter

- **Estimated duration:** 6 weeks
- **FTE:**  1
- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up the adapter and connect it to the familiar developer tools. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | ETH-RPC Adapter | We will create a generic ETH-RPC Adapter service for Substrate chains. It will support the most essential ETH RPC calls to make it work with the existing tools. Main goals here will be ability to connect to Metamask, `web3.js`, read Substrate chain's pallets' state and support subscriptions. Adapter will have option of running local `smoldot` instance or connecting to remote RPC node. |
| 2. | Deno module | We will create a Deno module that can connect to Substrate chain as an ETH-RPC adapter + light client. |
| 3. | Javascript package | We will provide a javascript package that can connect to Substrate chain as an ETH-RPC adapter + light client. |
| 4. | End-to-end tests | We will provide comprehensive end-to-end tests for the adapter. |

### Milestone 2 — EVM Adapter Pallet

- **Estimated duration:** 9 weeks
- **FTE:**  1
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit and integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | I will publish an article that explains the complete lifecycle and future plans of the project |
| 1. | EVM Adapter Pallet | We will create a pallet that will be responsible for bridging the gap between the ETH RPC adapter and the Substrate chain. It will have the ability to dispatch FRAME calls, opt-in possibility to execute EVM bytecode, and handle account mapping. Another main responsibility of the pallet will be handling signature verification. Some parts of this pallet can be inspired from `frontier`'s pallet `pallet-ethereum` but needs refinement and some modification. |
| 2. | Substrate Node | We will create a Substrate node that has two runtimes: with and without the `pallet-evm`. Both will contain `evm-adapter` pallet, but only the one with `pallet-evm` will be able to execute EVM bytecode. This will demonstrate two main use-cases of this pallet. |
| 3. | MVP Demo DApp | We will provide a small EVM DApp that demonstrates the integration of the pallet and RPC adapter. This will be a basic web page that can sign and send custom extrinsic with Metamask, read the state of Substrate pallets. |
| 4. | `docker-compose` | We will provide a `docker-compose` file that will run the whole project. |

## Future Plans

In the future, we plan to explore if we can make the adapter pallet optional and have the account mapping and transaction converting logic completely in the RPC adapter. This will allow us to have even more lightweight and generic solution, however could present more challenges. We will explore the ways of securely sharing the same private key for two chains without sacrificing any benefits that the `evm-adapter` pallet offers, but this needs time for research.

## Additional Information

**How did you hear about the Grants Program?** 

I have previously worked on several grant projects (listed above) and generally have been part of Polkadot ecosystem for the last 4 years.
