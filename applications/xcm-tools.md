# XCM Tools

* **Team Name:** [gmajor](https://github.com/gmajor-encrypt)
* **Payment Address:** 0xC3094f0ddce699a1Ad9Ef2621DF68Cd297a4c44F(USDC)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

RFPs [https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/xcm-tool.md](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/xcm-tool.md)

### Overview

XCM (Cross-Consensus Message) is a messaging format and language used to communicate between consensus
systems. [xcm-format](https://github.com/paritytech/xcm-format) (
Instruction, MultiAssets, MultiLocation...) are too complex, and no good tool exists. It has yet to be widely used.

XCM Tools is a tool and an SDK. This library is written in golang. It provides the following functions: sending xcm
messages, parsing xcm message instructions and getting the execution result of the execution after sending xcm.

### Project Details

I need to choose between two libraries to interact with
Substrate: [Go-Substrate-RPC-Client](https://github.com/centrifuge/go-substrate-rpc-client)
and [substrate-api-rpc](https://github.com/itering/substrate-api-rpc). Both libraries support querying the chain status,
but they have different features and limitations.

[Go-Substrate-RPC-Client](https://github.com/centrifuge/go-substrate-rpc-client) is an open-source library developed by Centrifuge. It also supports sending transactions.
However, it uses a static and strongly typed Scale Codec library that requires custom structs with Encoding/Decoding
methods for most types.

[substrate-api-rpc](https://github.com/itering/substrate-api-rpc) is another open-source library developed by Subscan. It uses a dynamic Scale Codec library that
supports serialization, deserialization, and backward compatibility for historical types. However, it does not support
sending transactions.

After comparing these libraries with other alternatives, I decided to use [substrate-api-rpc](https://github.com/itering/substrate-api-rpc) because of its flexible and
robust Scale Codec implementation. However, I still need to add the functionality of sending transactions to the library
myself.

1. Improve [substrate-api-rpc](https://github.com/itering/substrate-api-rpc), add extrinsic encode, sign transaction
   (sr25519, ed25519), and send transaction feature.
   Create pull request merge into [substrate-api-rpc](https://github.com/itering/substrate-api-rpc)
   and [scale.go](https://github.com/itering/scale.go)

2. Send xcm messages between relay chain and parachain and between parachain and parachain, support VMP(UMP & DMP),
   HRMP and supports the following methods

* `LimitedReserveTransferAssets`
* `LimitedTeleportAssets`
* `TeleportAssets`
* `ReserveTransferAssets`
* `Sent`

3. Get the execution result and the block_hash (block_num) of the execution after sending xcm

4. Parse xcm transaction instructions, deserialized encode the raw message into readable json

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  XCM developers or users who want to use XCM Feature. A solution is provided here. You can send and track your XCM
  transaction

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase,
  yourself)?
  wallet & explorer & parachain developer

- What need(s) does your project meet?
  Provide a solution for parachain and parachain, transactions between parachain and relaychain, xcm message parse, and
  xcm trans tracking. It can be easily integrated into the application of Golang or directly used as Tools.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

  [xcm-sdk](https://github.com/blockcoders/xcm-sdk), written in Javascript/Typescript, has to send the xcm feature.

  [xcm-tools](https://github.com/PureStake/xcm-tools) written in Typescript, a set of scripts to help XCM
  initialization, asset registration, and channel setup,

## Team :busts_in_silhouette:

### Team members

* gmajor

### Contact

* **Contact Name:** gmajor
* **Contact Email:** gmajorencrypt@gmail.com
* **Website:** <https://github.com/gmajor-encrypt>

### Legal Structure

individual

### Team's experience

I have many years of PHP development experience and nearly five years of blockchain development experience, familiar
with PHP, GOLANG, PYTHON, Nodejs, Rust

### Team Code Repos

- https://github.com/gmajor-encrypt/php-scale-codec
- https://github.com/gmajor-encrypt/php-substrate-api
- https://github.com/gmajor-encrypt/scale-codec-comparator
- https://github.com/gmajor-encrypt/sr25519-bindings

## Development Status :open_book:

Not yet

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 4.5 months
* **Total Costs:** 25000 USDC

### Milestone 1

Improve [substrate-api-rpc](https://github.com/itering/substrate-api-rpc)
and [scale.go](https://github.com/itering/scale.go), support signed & send transaction

* **Estimated duration:** 4 week
* **FTE:**  1
* **Costs:** 6000 USDC

| Number | Deliverable               | Specification                                                                                                                                                   |
|-------:|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                   | MIT or Apache 2.0                                                                                                                                               |
|    0b. | Documentation             | Simple documentation on how to use and how to test                                                                                                              |
|    0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                   |
|     1. | Sign message              | Add sr25519 & ed25519 sign message                                                                                                                              |  
|     2. | extrinsic encode          | [extrinsic.go](https://github.com/itering/scale.go/blob/master/extrinsic.go#L19) Add encode feature                                                             |  
|     3. | Send extrinsic            | Send transaction support, include ed25519&sr25519                                                                                                               |  
|     4. | Pull request              | Create pull request merge into [substrate-api-rpc](https://github.com/itering/substrate-api-rpc) and [scale.go](https://github.com/itering/scale.go)            |  

### Milestone 2

* **Estimated duration:** 9 week
* **FTE:**  1
* **Costs:** 10000 USDC

| Number | Deliverable               | Specification                                                                                                                                                   |
|-------:|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                   | MIT or Apache 2.0                                                                                                                                               |
|    0b. | Documentation             | Simple documentation on how to use and how to test                                                                                                              |
|    0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                   |
|     1. | Send UMP message          | support [UMP](https://wiki.polkadot.network/docs/learn-xcm-transport#vmp-vertical-message-passing) message send                                                 |  
|     2. | Send DMP message          | support [DMP](https://wiki.polkadot.network/docs/learn-xcm-transport#vmp-vertical-message-passing) message send                                                 |  
|     3. | Send HRMP message         | support [HRMP](https://wiki.polkadot.network/docs/learn-xcm-transport#hrmp-xcmp-lite) message send                                                              |  


### Milestone 3

* **Estimated duration:** 6 week
* **FTE:**  1
* **Costs:** 9000 USDC

| Number | Deliverable               | Specification                                                                                                                                                   |
|-------:|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                   | MIT or Apache 2.0                                                                                                                                               |
|    0b. | Documentation             | Simple documentation on how to use and how to test                                                                                                              |
|    0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                   |
|     1. | Parse xcm instructions    | Parse instructions raw data, support xcm format v1 & v2 & v3                                                                                                    |  
|     2. | Tracing transaction       | Support xcm format v1 & v2 & v3                                                                                                                                 |  
|     3. | Cli support               | Add command line tool to send message & parse xcm instructions && tracking transaction                                                                          |                                                                                                         |

## Future Plans

I have been maintaining [php-scale-code](https://github.com/gmajor-encrypt/php-scale-codec)
and [php-api-lib](https://github.com/gmajor-encrypt/php-substrate-api) for three years, and this application will also
be maintained continuously
