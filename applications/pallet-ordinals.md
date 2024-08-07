# Pallet Ordinals

- **Team Name:** Subbit Lab
- **Payment Details:**
  - **DOT**: 16kpKy3HY46c7rDLN34RAcr49o5TLq9om1sZBCR119NEN23P
  - **Payment**: DOT
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

It is widely recognized that the Rune protocol has become the mainstream standard for Bitcoin assets. However, the Rune protocol relies on centralized indexing systems. We propose to implement a port of the Rune indexer on Substrate, enabling the parachains within the Polkadot ecosystem to achieve decentralized indexing of Rune UTXOs. This would facilitate integration with the Substrate <<>> BTC bridge and decentralized Rune explorer.

### Overview

This project builds a utility substrate pallet to index RUNE UTXOs of bitcoin. It allows any parachains or substrate solochains to index RUNE UTXOs in their runtime using offchain worker.

### Project Details

First, we port the original Rune-related offchain storages to the Substrate runtime:
```
    #[pallet::storage]
    #[pallet::getter(fn outpoint_to_rune_balances)]
    pub type OutPointRuneBalances<T: Config> = StorageMap<
        _,
        Twox64Concat,
        OutPointValue,
        BoundedVec<RuneBalance, T::MaxOutPointRuneBalancesLen>,
        OptionQuery,
    >;

    #[pallet::storage]
    #[pallet::getter(fn rune_id_to_rune_entry)]
    pub type RuneIdToRuneEntry<T: Config> =
        StorageMap<_, Blake2_128Concat, RuneId, RuneEntry, OptionQuery>;

    #[pallet::storage]
    #[pallet::getter(fn rune_to_rune_id)]
    pub type RuneToRuneId<T: Config> = StorageMap<_, Blake2_128Concat, u128, RuneId, OptionQuery>;

    #[pallet::storage]
    #[pallet::getter(fn transaction_id_to_rune)]
    pub type TransactionIdToRune<T: Config> =
        StorageMap<_, Blake2_128Concat, TxidValue, u128, OptionQuery>;

    #[pallet::storage]
    #[pallet::getter(fn height_to_block_hash)]
    pub type HeightToBlockHash<T: Config> =
        StorageMap<_, Blake2_128Concat, u32, [u8; 32], OptionQuery>;

    #[pallet::storage]
    #[pallet::getter(fn highest_block)]
    pub type HighestHeight<T: Config> = StorageValue<_, (u32, [u8; 32]), OptionQuery>;

```
Then, a key `index_btc_block` procedure is implemented within this pallet to resolve btc blocks following the Rune protocol.
We use substrate offchain worker to request BTC JSON-RPC server to periodically fetch btc blocks. And a merkle validation will be applied for each btc block headers before resolving in case the RPC server is malicious.

We estimate the total storage size of all Rune UTXOs since the behaving of BTC mainnet will be less than 3G. That is acceptable for most Substrate-based chains.

### Ecosystem Fit

As a standard Substrate pallet, this project is applicable to Polkadot/Kusama parachains or any independent chains built on Substrate. Particularly for Bitcoin Layer 2 networks constructed using Substrate, this tool can provide these chains with a natively integrated Rune indexer, eliminating the need to rely on centralized oracles. Additionally, this tool can be utilized in conjunction with cross-chain bridges, offering native support for Rune assets across chains.

## Team :busts_in_silhouette:

### Team members

- Su Xiaotao
- Tsunoda

### Contact

- **Contact Name:** Su Xiaotao
- **Contact Email:** substratenowhere@protonmail.com
- **Website:** https://github.com/subbitlab

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

We are friends and we both previously worked for a commercial bank in China. Unfortunately, we didn't do much web3 contributions in the past due to our past working experienses. But we've been learning Substrate for a half year and now we've become a full-time web3 team:)

### Team Code Repos

- https://github.com/subbitlab/pallet-ordinals
- https://github.com/subbitlab/substrate-ord-template

- https://github.com/aa3ron
- https://github.com/TsunodaSony

### Team LinkedIn Profiles (if available)

N/A

## Development Status :open_book:

We've already started our work and some core components have been done. Please refer our github link to check the progress.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 12,000 USD
- **DOT %:** 100%

### Milestone 1 PoC version

- **Estimated duration:** 1 month
- **FTE:** 2,2
- **Costs:** 8,000 USD

|  Number | Deliverable               | Specification                                                                                                                                                              |
|--------:|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | MIT                                                                                                                                                                        |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can start a substrate node to index Rune UTXOs and query them. |
| **0c.** | Testing and Testing Guide | We will fully compare the Rune UTXOs in runtime storage with existing Rune explorer at each block for testing.                                                             |
| **0d.** | Docker                    | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                 |
|      1. | **crate: ordinals**       | **We will port some original data structures of [ord](https://github.com/ordinals/ord) which is licensed under `CC0-1.0` to `no_std`.**                                    |
|      2. | pallet-ordinals           | The PoC version of this pallet which is the main part of this grant applyment.                                                                                             |
|      3. | Substrate-ord-template    | A simple Substrate chain with runtime composed of the pallet-ordinals to demonstrate the decentralized Rune indexer. A btc rpc server is required.                         |


### Milestone 2 Release version

- **Estimated Duration:** 1 month
- **FTE:** 1,2
- **Costs:** 4,000 USD

|  Number | Deliverable               | Specification                                                                                                                                                              |
|--------:|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | MIT                                                                                                                                                                        |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can start a substrate node to index Rune UTXOs and query them. |
| **0c.** | Testing and Testing Guide | We will fully compare the Rune UTXOs in runtime storage with existing Rune explorer at each block for testing.                                                             |
| **0d.** | Docker                    | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                 |
|      1. | pallet-ordinals           | We will refactor some code and publish the release version to [crates.io](https://crates.io) as a library.                                                                 |
|      2. | Substrate-ord-template    | A simple Substrate chain with runtime composed of the pallet-ordinals to demonstrate the decentralized Rune indexer. A btc rpc server is required.                         |


## Future Plans

- Maintain this project to keep update with the official ordinal indexer
- Try to implement a bridge between substrate and btc
- Try to implement a btc layer2 based on substrate integrating with this tool and the bridge mentioned above

## Referral Program (optional) :moneybag:

- **Referrer:** N/A
- **Payment Address:** N/A

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation

Here you can also add any additional information that you think is relevant to this application but isn't part of it already:

We are a new team and just went into the web3 world. After an half-year self-education, We realized that Substrate is a powerful framework and then decided to build stuff over it.

