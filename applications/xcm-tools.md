# XCM Tools

* **Team Name:** [gmajor](https://github.com/gmajor-encrypt)
* **Payment Address:** 0xC3094f0ddce699a1Ad9Ef2621DF68Cd297a4c44F(USDC)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

RFPs [https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/xcm-tool.md](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/xcm-tool.md)

### Overview

XCM (Cross-Consensus Message) is a cross-chain message between parachain and relaychain because the xcm format (
Instruction, MultiAssets, and MultiLocation) are too complex, and no good tool exists. It has yet to be widely used.

XCM Tools is a tool and an SDK. This library is written in golang. It provides the following functions: sending xcm
messages, parsing xcm message instructions, getting the execution result of the execution after sending xcm

### Project Details

We only have two libs to choose from, and some functions still need to be included.

[Go-Substrate-RPC-Client](https://github.com/centrifuge/go-substrate-rpc-rient)
Centrifuge's open source and supports transaction and chain status queries. Scale Codec is a static type. Types analysis
many
require users definition, and lack of support for Metadata V14 Types
[Substrate-API-rpc](https://github.com/itering/substrate-api-rpc), [scale.go](https://github.com/scale.go))
Subscan open source, support chain status query, Scale Codec supports dynamic types, good serialization, and back-order
functions. But lack the function of transaction sending.
After comparison, I chose [Substrate-API-rpc](https://github.com/tering/substrate-api-RPC) as dependence, but because of
the lack of the function of sending transactions, I also need to change dependence.

1. Improve [substrate-api-rpc](https://github.com/itering/substrate-api-rpc), add extrinsic encode, transaction
   signature (sr25519, ed25519), and send transaction function

2. Send xcm messages between relay chain and parachain and between parachain and parachain, support VMP(UMP & DMP) and
   HRMP

* LimitedReserveTransferAssets
* LimitedTeleportAssets
* TeleportAssets
* ReserveWithdrawAssets
* LimitedReserveWithdrawAssets
* Execute
* Sent

3. Get the execution result and the block_hash (block_num) of the execution after sending xcm

4. Parse xcm transaction instructions, deserialized encode the raw message into readable json

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  XCM developers or users who want to use XCM Feature. A solution is provided here. You can send and track your XCM transaction

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

* **Total Estimated Duration:** 4 months
* **Total Costs:** 24000 USDC

### Milestone 1

Improve [substrate-api-rpc](https://github.com/itering/substrate-api-rpc), support signed & send transaction

* **Estimated duration:** 3 week
* **FTE:**  1
* **Costs:** 6000 USDC

| Number | Deliverable      | Specification                                                                                       |
|-------:|------------------|-----------------------------------------------------------------------------------------------------|
|    0a. | License          | MIT                                                                                                 |
|    0b. | Documentation    | Simple documentation on how to use and how to test                                                  |
|     1. | Sign message     | Add sr25519 & ed25519 sign message                                                                  |  
|     2. | extrinsic encode | [extrinsic.go](https://github.com/itering/scale.go/blob/master/extrinsic.go#L19) Add encode feature |  
|     2. | Send extrinsic   | Send transaction support, include ed25519&sr25519                                                   |  
|     3. | Testing          | Including all the unit tests mentioned above                                                        |

### Milestone 2

* **Estimated duration:** 1.5 month
* **FTE:**  1
* **Costs:** 10000 USDC

| Number | Deliverable       | Specification                                                                                         |
|-------:|-------------------|-------------------------------------------------------------------------------------------------------|
|    0a. | License           | MIT                                                                                                   |
|    0b. | Documentation     | Simple documentation on how to use and how to test                                                    |
|     1. | Send ump message  | support [UMP](https://wiki.polkadot.network/docs/learn-xcm#vmp-vertical-message-passing) message send |  
|     2. | Send dmp message  | support [DMP](https://wiki.polkadot.network/docs/learn-xcm#vmp-vertical-message-passing) message send |  
|     3. | Send hrmp message | support [HRMP](https://wiki.polkadot.network/docs/learn-xcm#hrmp-xcmp-lite) message send              |  
|     4. | Github action     | Auto test when comparator commit code                                                                 |  
|     5. | Testing           | Including all the unit tests mentioned above                                                          |

### Milestone 3

* **Estimated duration:** 4 week
* **FTE:**  1
* **Costs:** 8000 USDC

| Number | Deliverable            | Specification                                                                          |
|-------:|------------------------|----------------------------------------------------------------------------------------|
|    0a. | License                | MIT                                                                                    |
|    0b. | Documentation          | Simple documentation on how to use and how to test                                     |
|     1. | Parse xcm instructions | Parse instructions raw data, support xcm format v1 & v2                                |  
|     2. | Tracing transaction    | Support xcm format v1 & v2                                                             |  
|     3. | Cli support            | Add command line tool to send message & parse xcm instructions && tracking transaction |  
|     4. | Github action          | Auto test when comparator commit code                                                  |  
|     5. | Testing                | Including all the unit tests mentioned above                                           |

## Future Plans

XCM v3 will be released this year, and I will support xcm v3 later.
