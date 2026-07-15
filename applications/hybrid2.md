# Hybrid Indexer Follow-up

- **Team Name:** Jonathan Brown
- **Payment Address:** 0x36a7401F269555916a0243E586234D3Bbf5A0c36 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

This application is for a follow-up grant to the original Hybrid Block Explorer grant: https://github.com/w3f/Grants-Program/pull/1582

### Overview

![Hybrid Architecture](https://raw.githubusercontent.com/ethernomad/hybrid-diagram/main/hybrid.png)

The [original grant](https://github.com/w3f/Grants-Program/blob/master/applications/hybrid.md) for the Hybrid Block Explorer involved creating a [Rust library](https://github.com/hybrid-explorer/hybrid-indexer) that can be utilized to create an event indexer for any Substrate chain. A [Rust project](https://github.com/hybrid-explorer/polkadot-indexer/) to index all Polkadot-based chains was delivered. Additionally, a rudimentary [browser dapp](https://github.com/hybrid-explorer/hybrid-dapp) was produced to provide a user interface to query the index and load event details from the chain.

This follow-up grant application is specifically to improve the indexer component of the project.

### Project Details

Before the indexer can be used effectively by the Polkadot community, there are various improvements that need to be made:

#### Indexer Improvements

* Currently there are two indexer threads, one for indexing new finalized blocks, and one to index old blocks. This is unnecessarily complex. Combining these threads will make the codebase much simpler.

* The indexer needs to verify that it is indexing the correct chain. If it connects to the wrong endpoint or opens the wrong database, incorrect data would be present in the index.

* Terminal output needs to be improved with configurable levels of verbosity. Statistics need to be output in a regular time interval, not block interval.

* Error handling needs to be improved. Currently many error conditions are silently ignored. Exiting needs to be handled gracefully.

#### Reverse Batch Indexing

Currently when the indexer is indexing old blocks it starts at a specified block and works forward, eventually catching up with head. When the indexer is restarted it will resume where it left off.

Typically users are more interested in recent blocks. If a user is indexing on their own device it can take many hours or days for the batch indexer to catch up with head.

If the user wants to index from an earlier block, they have to re-index all the already indexed blocks.

The solution is for the batch indexer to always start indexing backwards from head and store in the database which spans of blocks have been indexed with which version of the indexer. 

The indexer currently trusts that new finalized blocks are delivered sequentially. The indexer needs to verify that no blocks have been ommitted. If a block has been omitted or the WSS connection is broken and reestablished then the batch indexing will need to restart from head.

#### Database Improvements

* Currently, the event parameter types that are available to be indexed are hardcoded in the indexer library. The API needs to be extended so that chain indexers can specify custom parameter types, beyond those in Substrate.

* In addition to indexing event parameters, the indexer can also index which variants of events have occurred. This is very useful. For example, the indexer can return all balance transfers that have occurred. This index is the largest because every event that occurs is a separate database entry. Making this index optional will greatly reduce the storage space for those users who do not need it.

* Hybrid uses the Sled database library. Tunables [cache_capacity](https://docs.rs/sled/latest/sled/struct.Config.html#method.cache_capacity) and [mode](https://docs.rs/sled/latest/sled/struct.Config.html#method.mode) should be exposed in the indexer.

#### WS API Improvements

* Currently, to receive status updates it is necessary to continually query the indexer. It should be possible to subscribe to status updates.

* It should be possible to query how much disk space is used for each index. This can be implemented using the following method: [size_on_disk](https://docs.rs/sled/latest/sled/struct.Db.html#method.size_on_disk).

* It is currently possible to subscribe to event searches. It needs to be possible to unsubscribe.

* A Rust library needs to be written to make it easier to query Hybrid indexes from Rust programs.

## Team :busts_in_silhouette:

### Team members

Jonathan Brown

### Contact

- **Contact Name:** Jonathan Brown
- **Contact Email:** jbrown@acuity.social
- **Website:** n/a

### Legal Structure

- **Registered Address:** (shared privately)
- **Registered Legal Entity:** n/a

### Team's experience

Jonathan Brown is the sole developer of Hybrid Indexer and dapp. 

### Team Code Repos

- https://github.com/hybrid-explorer/hybrid-indexer
- https://github.com/hybrid-explorer/polkadot-indexer
- https://github.com/hybrid-explorer/hybrid-dapp

- https://github.com/ethernomad

### Team LinkedIn Profiles (if available)

- n/a

## Development Status :open_book:

Work on the deliverables defined in this application has not started yet.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 12 weeks
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:**  10,000 USD

### Milestone 1 — Indexer Improvements

- **Estimated duration:** 3 weeks
- **FTE:** 1
- **Costs:** 2,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can specify chain identifying information and control logging verbosity. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Combine head and batch indexer threads | The codebase will be simplified by combining head and batch indexing into a single thread. |
| 2. | Check correct chain | The indexer will ensure that both the chain being indexed and the existing index database have the correct chain information.  |
| 3. | Improved logging | Verbosity level will be controlled by command line parameter. Statistics will be output with a regular time interval, not block interval. |
| 4. | Improved error checking | All error conditions in the codebase will be handled correctly. Exiting will be handled gracefully. |


### Milestone 2 — Reverse Batch Indexing

- **Estimated duration:** 3 weeks
- **FTE:** 1
- **Costs:** 2,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can declare starting blocks for updated indexers. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Index backwards | When the indexer starts it should always start indexing backwards from head. |
| 2. | Store indexed spans | The indexer should store in the database a record of which spans of blocks have been indexed with which version of the indexer and utilize this information to avoid redundantly indexing blocks multiple times. |
| 3. | Declare indexer start blocks | Each chain indexer can declare which block each version of the indexer should start from. Automatically re-index blocks after upgrading the indexer. |

### Milestone 3 — Database Improvements

- **Estimated duration:** 3 weeks
- **FTE:** 1
- **Costs:** 2,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can implement new indexes, omit the variant index and adjust database tunables. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Support additional indexes | Chain indexers will be able to define additional index parameter types that can be indexed. |
| 2. | Variant index optional | Variant indexing will be made optional. |
| 3. | Expose cache_capacity() and mode() | These Sled database parameters will be exposed on the command line. |

### Milestone 4 — WebSocket API Improvements

- **Estimated duration:** 3 weeks
- **FTE:** 1
- **Costs:** 2,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can subscribe to status updates, unsubscribe, query index storage space, and use the Hybrid Rust API. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** describing the improvements to the indexer. |
| 1. | Status subscription | It will be possible to subscribe to status updates. |
| 2. | Unsubscribing | It will be possible to unsubscribe from status updates and event parameter watching. |
| 3. | Report each index size | It will be possible to get a report of how much storage space is used by each index. |
| 4. | Rust API | A Rust library will be developed to make it easier for Rust applications to query Hybrid indexes. |

## Future Plans

- indexing block prior to V14 metadata (block #7,229,126 on Polkadot). See [issue](https://github.com/paritytech/subxt/issues/793#issuecomment-1386902010).

- desktop dapp - build a block explorer dapp in Rust

- support for tokens and nfts

- add support for ink! smart contracts with decentralized source code publishing

- maintain Hybrid as the most decentralized Substrate block explorer

- marketing
