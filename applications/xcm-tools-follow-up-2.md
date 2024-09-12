# XCM Tools follow-up-2

- **Team Name:** [gmajor](https://github.com/gmajor-encrypt)
- **Payment Details:**
    - **DOT:** 12ENNVUJwkoGvdq45jLaMgNv8e3oBd5asaUFL4GjdYHnAVm3
    - **Payment:** 12ENNVUJwkoGvdq45jLaMgNv8e3oBd5asaUFL4GjdYHnAVm3 (AssetHub USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

RFPs [https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/xcm-tool.md](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/xcm-tool.md)

### Overview

XCM (Cross-Consensus Message) is a messaging format and language used to communicate between consensus systems.

In the past two proposals, support for ordinary DMP, UMP, HRMP, XCM V3/V4, and snowBridge (Ethereum bridge) has been completed. This proposal is a continuation of the previous proposals.

1. Add feature for the Polkadot \<=\> Kusama bridge(https://wiki.polkadot.network/docs/learn-guides-dot-ksm-bridge), including  message sending and message tracking.
2. Message tracking needs to be adjusted after the recent messageQueue pallet upgrade, and this proposal will also adjust message tracking.
3. Update the mainnet configuration of the Ethereum Bridge.

### Project Details

1. Add feature for the Polkadot \<=\> Kusama bridge(https://wiki.polkadot.network/docs/learn-guides-dot-ksm-bridge), including cross-chain transfers of native tokens and foreign tokens, as well as message tracking. Message tracking includes tracking messages from the initiating chain and the receiving chain.
2. Due to the removal of the **dmpQueue** and **xcmpQueue** pallets, message tracking needs to be adjusted. This proposal will adjust message tracking accordingly.
3. The Ethereum Bridge has opened the Polkadot \<=\> Ethereum bridge in runtime [1002004](https://bridgehub-polkadot.subscan.io/runtime?version=1002004). This proposal will update the configuration of this bridge.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  XCM developers or users who want to use the XCM Feature. A solution is provided here. You can send and track your XCM transaction.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's user base, yourself)?
  Wallet & explorer & parachain developer.

- What need(s) does your project meet?
  Provide a solution for parachain and parachain interaction, between Polkadot and Ethereum, transactions between parachain and relay chain, XCM message parsing, and XCM transaction tracking. It can be easily integrated into applications using Golang or directly used as a tool.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  No.

## Team :busts_in_silhouette:

### Team members

- gmajor

### Contact

* **Contact Name:** gmajor
* **Contact Email:** gmajorencrypt@gmail.com
* **Website:** https://github.com/gmajor-encrypt

### Legal Structure

Individual

### Team's experience

I have many years of PHP development experience and nearly five years of blockchain development experience, familiar with PHP, GOLANG, PYTHON, Nodejs, Rust.

### Team Code Repos

- https://github.com/gmajor-encrypt/php-scale-codec
- https://github.com/gmajor-encrypt/php-substrate-api
- https://github.com/gmajor-encrypt/scale-codec-comparator
- https://github.com/gmajor-encrypt/sr25519-bindings
- https://github.com/gmajor-encrypt/xcm-tools

## Development Status :open_book:

I have researched the Polkadot \<\> Kusama bridge.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 Weeks
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 5,000 USDt

### Milestone 1

* **Estimated duration:** 3 weeks
* **FTE:** 1
* **Costs:** 5,000 USDt

| Number | Deliverable                      | Specification                                                                                                                                                   |
|-------:|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                          | Apache 2.0                                                                                                                                                      |
|    0b. | Documentation                    | Simple documentation on how to use and how to test                                                                                                              |
|    0c. | Testing and Testing Guide        | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker                           | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                   |
|     1. | Polkadot \<=\> Kusama message send | Support Polkadot \<=\> Kusama cross-chain message sending                                                                                                         |  
|     2. | Message tracking                 | Adjust message tracking after the recent messageQueue pallet upgrade                                                                                            |
|     3. | Ethereum Bridge update           | Update the mainnet configuration of the Ethereum Bridge                                                                                                         |
|     4. | CLI support                      | Add a command-line tool to send messages from Polkadot => Kusama                                                                                                |

## Future Plans

There are currently many configuration items. I will add a configuration file in future updates to make it easier for users to use. The CLI will also be adjusted to an interactive command-line tool.
