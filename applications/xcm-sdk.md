# Cross-Consensus Messaging Software Development Kit

- **Team Name:** Blockcoders
- **Payment Address:** Ethereum (USDT/USDC/DAI) 0x0B7144E7960Ac666A6AD6B38Fe65C2fe96E65994
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 


## Project Overview :page_facing_up:

XCM SDK is a tool that provides an interface to send XCM messages for Substrate based blockchains. This library is written in Typescript so it can be imported in a whole new set of applications or dApps that use Javascript/Typescript engines such as Node. 

The idea of this project is to have fast way to send XCM messages between the relay chain and the parachains without having to use Rust-written tools or other platforms/applications. 

This project is focused on the Polkadot ecosystem but it can be used in any other Substrate-based blockchain that uses the XCM pallet.

Blockcoders is a team that is always contributing to blockchain projects to help the growth of the ecosystem.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  - It provides a solution for all those who are interested in sending xcm messages from a project in typescript. It is a key tool to integrate this messaging format in applications.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - Mainly developers who are interested in creating applications/tools that need to send this type of messages since this sdk facilitates the integration of xcm messaging.
- What need(s) does your project meet?
  - This sdk provides a fast and easy way to send xcm messages. Being written in typescript allows more developers to access this type of messaging without the need to use the polkadot.js browser or libraries that are written in Rust.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - There are other tools for sending xcm messages but none like the one proposed here. The rest of the tools are Rust libraries, applications like polkadot.js.org among others. This SDK is focused on being able to access these features from projects written in Javascript/Typescript.

## Team :busts_in_silhouette:

### Team members

- Jose Ramirez
- Fernando Sirni
- Ruben Gutierrez

### Contact

- **Contact Name:** Jose Ramirez
- **Contact Email:** jose@blockcoders.io
- **Website:** http://blockcoders.io/

### Legal Structure

- **Registered Address:** Bouchard 705, Buenos Aires Argentina
- **Registered Legal Entity:** Blockcoders

### Team's experience

Our team has been contributing with different projects in blockchain for a few years, building APIs, SDKs and developer tools. Our goal is to continue to drive the crypto space forward by investing intellectual capital into projects, participating actively to help shape the ecosystems we believe in.

### Team Code Repos

- https://github.com/blockcoders
- https://github.com/blockcoders/ink-substrate-explorer-api
- https://github.com/blockcoders/nestjs-ethers
- https://github.com/blockcoders/harmony-marketplace-sdk
- https://github.com/blockcoders/near-rpc-providers
- https://github.com/athenafarm/athena-vault-contracts
- https://github.com/athenafarm/athena-sdk

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/0xslipk
- https://github.com/fersirni
- https://github.com/RubenGutierrezC

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/jarcodallo/
- https://www.linkedin.com/in/fernando-sirni-1931ba122/
- https://www.linkedin.com/in/rubengutierrezc/

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 month
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 30000 USD

### Milestone 1 - Support for XCM messages

- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:** 20,000 USD

In this milestone the focus is on creating a new sdk to send xcm messages between the relay chain and parachains. The main idea is to create an interface that can handle all the xcm messages that are available in the polkadot.js library. The sdk will be written in typescript and will be able to be used in any project that is written in javascript or typescript.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to configure the environment and send xcm messages. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 1. | Create Messages Types | Definition of all messages types that can be sent via xcm supported by Polkadot API. We are gonna support all the types listed on out [research document](https://github.com/blockcoders/xcm-grant-research). |  
| 2. | Send XCM messages | Creation of an interface to send XCM messages using the types defined in (1) and the Polkadot API |  
| 3. | Testing | Achieve a testing coverage of the functionalities above 90% |


### Milestone 2 - Add support for other xcm messages

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 USD

This milestone is entirely about adding support for pending xcm messages not covered on milestone 1. Using generics and typescript interfaces we will be able to add support for new messages without having to change the code.

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **english** and **spanish** versions of the documentation. This will cover step by step how to send all kind of xcm messages. |
| 0c. | Testing Guide | Unit test and end to end tests will cover the core functions to ensure everything works as expected. The documentation will have an example on how to run these tests. |
| 0d. | Article | We will post an article on Twitter and Reddit for both english and spanish speakers communities.
| 1. | CLI tool | Build an interactive command line tool to generate and send XCM message. |
| 2. | Add support for new messages | Add support to send XCM messages using a format that it's not defined on the Polkadot API. Using generics the send function allows the body to be defined by the user. |
| 3. | Testing | Achieve a testing coverage of the functionalities above 90% |

## Future Plans

We plan to share our expertise creating workshops online, handling all relevant forums and social networks.

## License

Apache license version 2.0
