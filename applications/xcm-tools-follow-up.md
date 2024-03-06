# XCM Tools follow-up

* **Team Name:** [gmajor](https://github.com/gmajor-encrypt)
* **Payment Address:** 12ENNVUJwkoGvdq45jLaMgNv8e3oBd5asaUFL4GjdYHnAVm3(AssetHub USDC)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

RFPs [https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/xcm-tool.md](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/xcm-tool.md)

### Overview

XCM (Cross-Consensus Message) is a messaging format and language used to communicate between consensus systems.

After https://github.com/paritytech/polkadot-sdk/pull/2522 was merged, the polkadot ecosystem evolved from cross-chain interaction
between parachain to cross-chain interaction between ethereum and polkadot.

Therefore, this proposal is an extension of [xcm-tools](https://github.com/gmajor-encrypt/xcm-tools) to improve the
practicability of this package further and increase support for xcm v3 and ethereum bridge support.

### Project Details

1. Support XCM v3, support the setTopic instruction.(https://forum.polkadot.network/t/xcm-upgrade-to-v3/4690)
   After the xcm V3 upgrade, messageId will be used as a credential for message tracking, which is different from using
   message_hash(blake2_256(message)).
   The xcm-tools will use a messageId as the credential for message tracking.

2. Add send bridge xcm messages to bridgeHub Support

    * `transfer_assets`

3. Get the result after cross-chain and the block_hash (block_num) of the execution after sending xcm

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  XCM developers or users who want to use the XCM Feature. A solution is provided here. You can send and track your XCM
  transaction

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase,
  yourself)?
  wallet & explorer & parachain developer

- What need(s) does your project meet?
  Provide a solution for parachain and parachain interaction,between polkadot and ethereum, transactions between parachain and relaychain,
  xcm message parse, and the xcm txn tracking. It can be easily integrated into the application of Golang or directly used as Tools.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  No

## Team :busts_in_silhouette:

### Team members

* gmajor

### Contact

* **Contact Name:** gmajor
* **Contact Email:** gmajorencrypt@gmail.com
* **Website:** https://github.com/gmajor-encrypt

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
- https://github.com/gmajor-encrypt/xcm-tools

## Development Status :open_book:

Not yet

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 5 week
* **Total Costs:** 9,000 USDC

### Milestone 1

* **Estimated duration:** 4 week
* **FTE:**  1
* **Costs:** 9,000 USDC

| Number | Deliverable               | Specification                                                                                                                                                   |
|-------:|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                   | Apache 2.0                                                                                                                                                      |
|    0b. | Documentation             | Simple documentation on how to use and how to test                                                                                                              |
|    0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                   |
|     1. | Xcm V3 support            | Tracing transaction update, support message topicId                                                                                                             |  
|     2. | Bridge Tracing support    | Support tracing Ethereum \<=\> substrate bridge message sent result                                                                                               |  
|     3. | Send bridge message       | Support assetHub send to ethereum through bridgeHub                                                                                                             |
|     4. | Cli support               | Add command line tool to send message from polkadot => Ethereum                                                                                                 |

## Future Plans

The xcm protocol is constantly being updated, and I will continue to maintain this tool to make it more convenient for
users to use.