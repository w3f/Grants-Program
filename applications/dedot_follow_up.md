# Dedot Follow-up

- **Team Name:** Coong Crafts
- **Payment Details:**
  - **USDC**: 1nfu5pgjDzn2ozcBHVdAbGCvVyWRshVhtSixo61vx9sLrvD
  - **DOT**: 1nfu5pgjDzn2ozcBHVdAbGCvVyWRshVhtSixo61vx9sLrvD
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 3

## Project Overview :page_facing_up:

This proposal is a follow-up application of [our first W3F grant](https://github.com/w3f/Grants-Program/pull/1907) for Dedot (formerly DelightfulDOT), which was successfully delivered.

### Overview

[Dedot](https://dedot.dev/) is a next-generation JavaScript client for [PolkadotSDK](https://github.com/paritytech/polkadot-sdk)-based blockchains, designed to address the complexities and overhead developers often encounter when building applications in the Polkadot ecosystem. Since finalizing our first proposal, we have continuously enhanced Dedot by adding more features & integrations such as:
- Support Metadata V15 & exposing fully typed Runtime Apis while still maintain the backward compatibility with Metadata V14,
- Integrating [new JSON-RPC specifications](https://paritytech.github.io/json-rpc-interface-spec/introduction.html) while also keeping the support for legacy JSON-RPC.
- Enabling support for fully typed ink! smart contract interactions, integrating with Smoldot allowing dapps to connect smoothly connect with networks via light client, etc...

This progress so far underscores the practical need for a robust, developer-friendly library that remains closely aligned with ongoing protocol changes, with this follow-up proposal, we intend to build on the foundations of Dedot by further refining its features and future-proofing it against forthcoming network developments. Our goal is to make the library more resilient, easy to integrate, and flexible, we believe Dedot will continue serving as a high-quality, go-to solution for JavaScript and TypeScript developers in the Polkadot ecosystem.

### Project Details

We propose to continue improve & adding more features & integrations into Dedot:

#### 1. Client API Improvements
 
We plan to improve the current current Client APIs ([DedotClient](https://github.com/dedotdev/dedot/blob/main/packages/api/src/client/DedotClient.ts) & [LegacyClient](https://github.com/dedotdev/dedot/blob/main/packages/api/src/client/LegacyClient.ts)), which is built on top of both new & legacy JSON-RPC specs.
- [ChainHead API](https://paritytech.github.io/json-rpc-interface-spec/api/chainHead.html) Enhancements
  - Shared operations for parallel requests to the same on-chain resource (e.g., system events): This helps reduce bandwidth usage and avoids repeating work when different requests need access to the same data.
  - Automatic resubscription after reconnecting to a node: At the moment, subscriptions don’t automatically recover when the connection is lost and then restored. Supporting this will make dapps more reliable in these situations, so developers don’t have to manually handle resubscriptions.
- Transaction API Improvements
  - Better [SignerOptions](https://github.com/dedotdev/dedot/blob/ffd825052f48fdaeb26e4a66fc38cbec8f6a9580/packages/types/src/extrinsic.ts#L7-L21) for signing transactions:
    - Add support for custom asset type on chains using the [`ChargeAssetTxPayment`](https://github.com/paritytech/polkadot-sdk/blob/98c6ffcea6794d338514cf9bd84446d2f276cb63/substrate/frame/transaction-payment/asset-tx-payment/src/lib.rs#L174-L180) extension, allowing devs to define which assets can be used to pay fees.
    - Allow customization of signing block hash/number, transaction mortality, ... providing developers with greater flexibility when constructing transactions.
  - Default support for TransactionExtension (SignedExtension) that don’t require external input when creating transactions.
    - For example, here is a list of [known extensions](https://github.com/dedotdev/dedot/tree/main/packages/api/src/extrinsic/extensions/known) supported by Dedot. If the connected network requires a different extension that doesn’t need external data or input, Dedot can support it internally—eliminating the need for developers to define a new explicit extension when initializing clients.
  - Convenient chaining methods for transaction handling, such as: `untilBestChainBlockIncluded`, `untilFinalized`
    - For example, if developers need to submit a transaction and wait until it is finalized
      ```ts
        const client = await DedotClient.new(new WsProvider('wss://...')))
        client.tx.system.remark('Hello W3F')
            .signAndSubmit(alice, { signer }, ({ status }) => {
              if (status.type === 'Finalized') {
                // Do something when the transaction is finalized
              }
            })
      ```
    - With the chaining methods, it will be much more convenient to do so:
      ```ts
        const client = await DedotClient.new(new WsProvider('wss://...')))
        await client.tx.system.remark('Hello W3F')
            .signAndSubmit(alice, { signer })
            .untilFinalized();
        // Do something when the transaction is finalized
      ```

#### 2. `archive_*` prefixed JSON-RPC Integration

The [archive_* JSON-RPC methods](https://paritytech.github.io/json-rpc-interface-spec/api/archive.html) are set to [stabilize](https://forum.polkadot.network/t/stabilizing-the-archive-rpc-v2-methods/12058) soon, making it possible for developers to query historical blockchain data more easily. This unlocks a wider range of use cases like historical analysis and indexing—without relying on legacy JSON-RPC endpoints or building custom solutions.

We plan to:
- Improve the [`.at`](https://github.com/dedotdev/dedot/blob/ffd825052f48fdaeb26e4a66fc38cbec8f6a9580/packages/api/src/client/DedotClient.ts#L191-L197) method to accept finalized block hashes to create a SubstrateClient at a specific finalized block in the past allowing Storage Queries or Runtime Api executions, etc...
- Support [`.entries`](https://github.com/dedotdev/dedot/blob/ffd825052f48fdaeb26e4a66fc38cbec8f6a9580/packages/types/src/generic.ts#L110-L115) storage queries for finalized block hashes by falling back to archive JSON-RPCs when needed.
- Enable storage queries using `.pagedKeys` and `.pagedEntries` for working with large storage efficiently with pagination.

```ts
const client = await DedotClient.new(new WsProvider("wss://..."));

const finalizedBlockHash = '0x...';
const clientAt = client.at(finalizedBlockHash);

// fetch all nft item entries
await clientAt.query.nfts.item.entries()

// fetch a page of 10 nft item keys
await clientAt.query.nfts.item.pagedKeys({ pageSize: 10, startKey: '0x...' })

// fetch a page of 10 nft item entries
await clientAt.query.nfts.item.pagedEntries({ pageSize: 10, startKey: '0x...' })
```

#### 3. Metadata V16

The [new Metadata V16](https://github.com/paritytech/frame-metadata/blob/main/frame-metadata/src/v16.rs) introduces significant updates to the structure of metadata for Extrinsics, Pallets, and Runtime APIs. Supporting Metadata V16 lays the groundwork for upcoming features such as the new Transaction Format V5 and pallet view functions.

#### 4. New Transaction Format (v5)

Polkadot recently introduced the new [Transaction Format V5](https://github.com/paritytech/polkadot-sdk/pull/3685), which includes a more general transaction structure (without a signature) and updated terminology: Transaction (formerly Extrinsic) and Transaction Extension (formerly Signed Extension), now with [versioning support](https://github.com/polkadot-fellows/RFCs/pull/99).

We plan to update Dedot to fully support these changes while maintaining backward compatibility with the existing Extrinsic V4 format. This will help ensure Dedot stays aligned with evolving on-chain transaction standards.

#### 5. Pallet View Function
 
Another upcoming feature that’s set to be stabilized soon is [Pallet View Functions](https://github.com/paritytech/polkadot-sdk/pull/7960) ([Forum Discussion](https://forum.polkadot.network/t/wasm-view-functions/1045)). These are read-only functions that allow access to a pallet’s state from both inside and outside the runtime. They aim to provide a stable interface for querying pallet state without relying on direct storage access while evolving alongside the runtime.

Planned works:
- Organize view functions under a dedicated namespace, e.g: `client.views.[pallet].[function_name]`
- Automatically generate types and APIs for view functions when running [`dedot chaintypes`](https://docs.dedot.dev/cli#dedot-chaintypes) CLI
- Implementing execution and subscription to view functions

#### 6. Smoldot Integration Improvements

Currently, dapp developers can connect to networks using the Smoldot light client in Dedot via the [SmoldotProvider](https://docs.dedot.dev/clients-and-providers/providers#smoldotprovider). To make integration with Smoldot even smoother and more developer-friendly, we plan to introduce the following improvements:
- A **Smoldot WebWorker script**: Provide a ready-to-use WebWorker setup for running Smoldot in a separate thread. This helps avoid performance issues when the main thread is also handling other CPU-intensive tasks in the dapp.
- `@dedot/chain-specs` package: Offer a built-in collection of chain specs for known networks, so developers don’t need to fetch them from external sources when setting up Smoldot connections.

#### 7. `@dedot/chaintypes` Improvements

`@dedot/chaintypes` is a key package that provides ready-to-use Types and APIs for several well-known chains, allowing developers to quickly integrate them into their projects without manual setup. We run a scheduled job twice a day to check for runtime upgrades on supported networks and automatically regenerate the corresponding types and APIs. Developers simply need to update this package to stay in sync with the latest runtime changes.

Planned improvements:
- Add support for more networks to expand the list of available chaintypes.
- Enhance the regeneration process for known chains:
  - Add a fallback mechanism (to a different endpoint) in case the generator fails to connect to a network.
  - Streamline and automate the versioning and publishing process. Each release will include a clear summary of changes, making it easier for developers to track runtime updates.

### Ecosystem Fit

Dedot plays an important role in the Polkadot/Substrate ecosystem by offering a modern & easy-to-use APIs for interacting with on-chain features or ink! smart contracts. While there are other libraries in the ecosystem, Dedot aims to stand out by focusing on ease of use, lightweight, and offering excellence dapp development experience in Polkadot ecosystem. 

By continually aligning with the official protocol changing, and community developments, Dedot ensures developers can quickly capitalize on new features without wrestling with complex or outdated tooling.

## Team :busts_in_silhouette:

### Team members

- Thang X. Vu (Team Leader) - https://github.com/sinzii
- Tung Vu - https://github.com/1cedrus

### Contact

- Contact Name: Thang X. Vu
- Contact Email: thang@coongcrafts.io

### Legal Structure

- N/A

### Team's experience

Coong Crafts is a small team set out with a mission to bring Web3 closer to the world. We previously completed grants to build open source projects for Polkadot ecosystem:
- [Typink](https://grants.web3.foundation/applications/typink): a fully type-safe React hooks library designed to accelerate ink! dApp development.
- [Dedot](https://grants.web3.foundation/applications/delightfuldot): a next generation Javascript Client for Polkadot & Substrate.
- [Coong Wallet](https://grants.web3.foundation/applications/coong_wallet): a website-based wallet solution to address the inconsistent wallet experience on mobile & desktop and bring a new approach to onboard new users to Polkadot & Kusama ecosystem.

### Team Code Repos

Project repositories will be hosted at https://github.com/dedotdev/dedot

## Development Status :open_book:

As mentioned in the overview, we’ve been actively expanding Dedot with new features and integrations to keep it aligned with the fast-moving Polkadot ecosystem. This includes:
- Supported Metadata V15 along with full exposure to Runtime APIs.
- Integrated the [latest JSON-RPC specification](https://paritytech.github.io/json-rpc-interface-spec/introduction.html).
- Supported seamless integration with ink! contracts, making it easier for dapp developers to interact with smart contract logic in a type-safe and developer-friendly way.
- Supported the Smoldot light client, enabling secure on-chain access directly from the browser.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4.5 months
- **Full-Time Equivalent (FTE):**  1.5 FTE
- **Total Costs:** 45,000 USD
- **DOT %:** 50%

### Milestone 1: Client Improvements

- **Estimated duration:** 1.5 months
- **FTE:**  1.5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code as well as **online documentation** related to changes in this milestone on https://docs.dedot.dev |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | Client API Improvements | We'll deliver improvements as described in [Client API Improvements](#1-client-api-improvements)  |
| 2. | `archive_*` JSON-RPC V2 Integration | We'll deliver the integration as described in [`archive_*` JSON-RPC V2 Methods](#2-archive_-prefixed-json-rpc-integration) |
| 3. | Support Metadata V16 | We'll deliver the support for new metadata as described in [Metadata V16](#3-metadata-v16) |


### Milestone 2: New Features & Integrations

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code as well as **online documentation** related to changes in this milestone on https://docs.dedot.dev |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 1. | New Transaction Format (v5) Integration | We'll deliver the integration and support for [new Transaction Format V5](#4-new-transaction-format-v5)  |
| 2. | Pallet View Function | We'll deliver the view functions as described in the [Pallet View Function](#5-pallet-view-function) |


### Milestone 3: Other Integrations & Improvements

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code as well as **online documentation** related to changes in this milestone on https://docs.dedot.dev |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Article | We will publish an article to introduce Dedot's latest features & integrations |
| 2. | Smoldot Integration Improvements | We'll deliver new improvements as described in [Smoldot Integration Improvements](#6-smoldot-integration-improvements) |
| 3. | `@dedot/chaintypes` Improvements | We'll deliver new improvements as described in [`@dedot/chaintypes` Improvements](#7-dedotchaintypes-improvements) |


## Future Plans

- Continue to adopt latest changes
- XCM Utilities
- Compact Metadata
