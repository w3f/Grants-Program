# ISO-8583 implementation

- **Team Name:** Dastanbek Samatov
- **Payment Address:** 0xc42D0562BB4e53f5e9D888df35e1B91eA0f19cC3 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

This application is in response to the [ISO-8583 RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/ISO_8583.md).

### Overview

ISO-8583 PoC implementation for Substrate.

In this project I aim to implement the proof of concept for the ISO-8583 standard in Substrate. The implementation will be based on the extensive research done by [Adit Patel](https://github.com/adit313) in the following [repository](https://github.com/adit313/ISO8583-Blockchain-Integration-Plan).

I've already worked on the similar project for [EBICS standard](https://github.com/element36-io/ocw-ebics). I can leverage the knowledge gained from that project and research done by Adit Patel to implement the ISO-8583 standard in Substrate.

### Project Details

To fully imitate the ISO-8583 standard, I have divided this PoC project into two parts: infrastracture and blockchain. Infrastracture components are responsible for imitating the flow of the ISO-8583 message from the merchant to the PCIDSS compliant gateway. Blockchain components are responsible for further processing of the ISO-8583 message and settling the transactions/messages on the Substrate chain.

Below is the implementation plan in a deeper technical detail from Adit Patel's research:

![Implementation plan](https://github.com/dastansam/Grants-Program/assets/88332432/8b832448-9095-4846-95ea-ccaebe5e52a5)

#### Infrastracture

For this part, the implementation will consist of the following components:

- **Merchant**: A hybrid web application, i.e can be used to either make the payment directly on Substrate chain, guaranteeing instant settlement, or via debit/credit card. It will consist of a mock marketplace and main work will be done on the payment checkout window. Depending on the payment method, the application will then send the payment request to the corresponding payment processor.
- **Payment processor (Stripe, Visa, Mastercard)**: The payment processor will be imitated by a web server that will accept the payment request from the merchant, compose the ISO-8583 message and send it to the gateway. It will maintain the offchain ledger (database).
- **PCIDSS Compliant Gateway (Oracle Company)**: The gateway is the first part of the centralized oracle. It will be mocked by a message broker that will process the incoming ISO-8583 messages from the traditional network and pools them for the offchain worker to query. It is also responsible for maintaining an up-to-date record of the offchain and on-chain ledger, validating messages, keeping track of chain events and composing new messages in case there is a mismatch between the two ledgers.

For the above componenets, there are already some open source projects that can be used. Namely:

- [ISO-8583 implementation in Javascript](https://github.com/zemuldo/iso_8583): I will use this library in mock web server and the merchant application. Opted for this library since it seems to be well maintained and documented (the Rust version has the last commit from 2019).
- [RabbitMQ](https://www.rabbitmq.com/): I will use RabbitMQ as a message broker for the gateway. It is a well known and widely used message broker. It also has a [Rust client](https://github.com/jgallagher/amiquip)

And for the merchant app, below are the mockups of payment checkout window:

![Card payment](https://github.com/dastansam/Grants-Program/assets/88332432/ee5e870a-1992-4d74-b6da-288b615f50e2)

![Payment on-chain](https://github.com/dastansam/Grants-Program/assets/88332432/f4412bf4-b2c3-4407-866a-6ebbd948ac35)

![Successfull checkout](https://github.com/dastansam/Grants-Program/assets/88332432/64e6d9bc-54af-4848-a6db-226bc8eebd96)

#### Blockchain

On the blockchain side, there were three key components that were proposed in the research:

- A centralized oracle
- ERC-20R smart contract
- Substrate chain

However, from my previous experience building the EBICS PoC and generally as a more experienced Substrate developer, I believe the first two components can be simplified to:

- **An offchain worker (OCW)**: It will act as a second part of the oracle, i.e it will query for the ISO-8583 messages from the gateway and will send them to the Substrate chain. The only way for the chain to receive the ISO-8583 messages will be through the OCW. This will ensure that the chain is not spammed with unnecessary messages and will also allow us to hide sensitive information like account numbers and authorization codes.
- **Pallet**: pallets are more flexible and a lot easier to implement and maintain than smart contracts. It will implement the ERC-20R standard and will settle the transactions on the Substrate chain.

#### Challenges

One of the main challenges for this project is the reversability of transactions in the ISO-8583 standard. The standard allows for the reversal of transactions in case of a dispute. This is not a problem for the traditional payment networks since they are centralized and can easily reverse the transaction. Although, ERC20-R standard has a `revert` function, it becomes complicated when we try to get back the funds that are already spent. I will have to do more research on this topic and will try to come up with a solution.

#### Inspirations

EBICS PoC implementation offers some insights and inspiration, however, the ISO-8583 standard is a lot more complex and will require a lot more robust and complex infrastructure. Similarly, on the blockchain side, the reversability of transactions will pose a great challenge. Therefore, large parts of the blockchain components will need to be rewritten from scratch or significantly refactored in best case.

### Ecosystem Fit

A quote from Adit Patel here:

> Supporting international standards would smooth the connection between crypto and traditional financial institutions and is a [go to market strategy for several competing projects](https://www.cryptopolitan.com/iso-20022-compliant-crypto-list/). While those efforts are focused on the newer ISO-20022, not ISO-8583, there is significant value in being the first blockchain to support traditional banking infrastructure and dislodge incumbent networks such as SWIFT or Visa/Mastercard.

## Team :busts_in_silhouette:

### Team members

- Dastanbek Samatov

### Contact

- **Contact Name:** Dastanbek Samatov
- **Contact Email:** dastanbeksamatov@gmail.com
- **Website:** https://dastansam.github.io/

### Legal Structure

- **Registered Address:** No registred entity
- **Registered Legal Entity:** No registred entity

### Team's experience

Dastanbek Samatov is a Software Engineer with more than 3 years of experience. For the past 2 years he has been working as a Rust/Substrate Engineer focusing on parachain development and also has been involved with several Web3 Foundation grant projects in the past (some of them as lead developer):

- `SCALE Codec in AssemblyScript` - https://github.com/LimeChain/as-scale-codec
- `Substrate Runtime in AssemblyScript` - https://github.com/LimeChain/as-substrate-runtime
- `Framework for Substrate Runtimes in AssemblyScript` - https://github.com/LimeChain/subsembly
- `OCW EBICS` - https://github.com/element36-io/ocw-ebics

### Team Code Repos

- https://github.com/subclone/iso-8583-chain-template
- https://github.com/subclone/payment-processor

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/dastanbeksamatov

### Team LinkedIn Profiles (if available)

- https://linkedin.com/in/dastanbek-samatov

## Development Status :open_book:

This application is in response to the [ISO-8583 RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/ISO_8583.md).

The implementation is inspired from the previous [research](https://github.com/adit313/ISO8583-Blockchain-Integration-Plan) project for this RFP.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 28,000 USD

### Milestone 1 Infrastructure Part

- **Estimated duration:** 2 month
- **FTE:**  1
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up the whole infrastructure components. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Merchant App | I will create a React application that will mock the merchant. The app will be connected to the Substrate chain with `PolkadotJs` and users will be able to directly pay using an on-chain extrinsic. Web app will also handle necessary balance checks by querying chain to early return invalid transactions. Users will also have an option to use their mock plastic cards. |
| 2. | Payment Processor | I will create a NodeJs server that will receive payment requests from merchant app, compose the ISO-8583 message and send it to the gateway. This server will also be responsible for keeping the offchain ledger, similar to how traditional networks currently operate. |
| 3. | PCIDSS Compliant Gateway | I will create a message broker service that will serve as a centralized oracle gateway. It will process and pool incoming messages from the mock payment processor. Oracle will maintain a constant connection to Substrate chain, to ensure the validity of messages in the pool before they are consumed. For example, if there is a transfer from Alice to Bob, oracle will ensure that `Alice` has enough funds both offchain and on-chain, `tx_id` of transfer is not already on-chain, etc. It will also include mechanisms to ensure the message is being consumed by genuine offchain worker and not some other malicious *consumer*. For this step, some basic cryptographic authentication method will be used. |
| 4. | Makefile | I will create a Makefile that will provide commands to ease testing, running and maintaining the project |


### Milestone 2 Blockchain Part

- **Estimated Duration:** 2 months
- **FTE:**  1
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | I will publish an article that explains the complete lifecycle and future plans of the project |
| 1. | Substrate Chain | I will create a Substrate chain forked from `substrate-node-template`. |
| 2. | Offchain Worker | I will write an offchain worker logic that queries PCIDSS compliant gateway for ISO-8583 messages, processes them and dispatches extrinsics to the chain. |
| 3. | ERC-20R Pallet  | I will create a pallet that implements the `ERC-20R` interface. It will be responsible for processing incoming message from the offchain-worker. It will perform security checks, maintain the ledger and control the issuance of the tokens. |
| 4. | Integration tests | I will add end-to-end tests with Javascript and `zombienet` |
| 5. | Makefile | I will create a Makefile that will provide commands to ease testing, running and maintaining the project |

## Future Plans

In case of successful PoC, I plan to continue working on this project to address some of the pain points of the PoC:

- **Reversability**: look for more decentralized ways to guarantee reversability of the transactions, maybe with somewhat similar mechanism to slashing
- **Decentralization of Oracles**: look for more decentralized ways of message processing by using decentralized oracles, maybe look for the direction of zero-knowledge proofs

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

I have previously worked on several grant projects (listed above) and generally have been in Polkadot ecosystem for more than 3 years.
