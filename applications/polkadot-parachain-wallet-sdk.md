# Open Grant Proposal

* Project: Polkadot ParaChains Wallet SDK
* Proposer: [ppcwallet](https://github.com/ppcwallet)
* Payment Address:  1CjtK8B7jpHYxiWqKXmY2EdzRikRe7viQ1

## Project Overview :

### Overview

Polkadot Parachain Wallet SDK supports all parachains of Polkadot ecology through multi-parachain docking technology.
The SDK function consists of two parts:
####1. Basic wallet functions:
Realize the generation of mnemonics, import mnemonics, private keys, token transfers, and collections.
####2. Implement injectweb technology based on js class library
seamlessly access all DAPPs of Polkadot ecology:
Realize wallet address injection, signature transaction interception, local offline signature, etc.


### Project Details

Developers integrate SDK in their own wallet project, configure rpc node access, connect to local offline storage of mnemonic words, connect to transfer signature protocol, and can access the centralized data module in their own project.
Users can create a Polkadot Parachain wallet address with one click to realize the transfer and collection function.
Enter the Polkadot ecological DAPP through webview and inject the SDK module into the DAPP page.
Users can participate in all Polkadot Parachain DAPPs by entering the URL. The SDK can call local offline signature by intercept DAPP page signature action. After the signature is issued to the node, the transaction hash is returned to the DAPP for processing subsequent logic.

![ppcwallet](https://raw.githubusercontent.com/ppcwallet-team/assets/master/ppcwallet.png?raw=true)

#### Common Scenarios
Any project and Any wallet developer can quickly access Polkadot ecosystem can use all Polkadot Parachain DAPP. Very sexy!

## Team :busts_in_silhouette:

### Team members

+ Jackin
+ Sam

### Team’s experience

+ Jackin, has over 10 years of experience in Development and Management, BitKeep Wallet Co-founder, DAPP Development Expert.
+ Sam, has more than 10 years of work experience, proficient in Java language, familiar with Android system architecture and related technologies, expert in Android platform UI design, familiar with the different Android SDK versions’ main features; and has a deep understanding of data encryption.


### Team Code Repos
* https://github.com/ppcwallet


## Development Roadmap :nut_and_bolt:

### Overview

* Total Estimated Duration: 6 weeks
* Full-time equivalent (FTE):  2
* Total Costs: 0.6 btc

### Milestone 1

* Estimated Duration: 6 weeks
* FTE:  2
* Costs: 0.6 btc

In this milestone, We will implement PPCWallet.

| Number | Deliverable                       | Specification                                                 |
| ------ | --------------------------------- | ------------------------------------------------------------ |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can import the protocol. |
| 0c. | Testing Guide | This milestone will have unit-test for all modules to ensure functionality. In the guide we will describe how to run these tests.|
| 1.     | Mnemonic module | Import the mnemonic words, the private key is locally encrypted and stored by the payment password, and the Polkadot chain address is generated at the same time. |
| 2.     | Signature transaction module |  Users enter payment address, transfer amount, and payment password to decode the mnemonic words locally and offline to sign and send the transaction. |
| 3.     | Inject DAPP module | Inject inject.js into the DAPP page through the webview, therefore, to realize the method of intercepting the signature transaction in the page, call the SDK for localized signature and send the transaction, obtain the transaction hash after success, and return the hash to the DAPP interface for subsequent logical processing. |

## Future Plans

+ In the future, we will continuously work on Polkadot ecological parachains, allowing users to quickly participate in the new Polkadot parachain ecosystem.
