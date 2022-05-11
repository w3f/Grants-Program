Open Grant Proposal of Polkadot-Dart

* **Project:** Polkadot-Dart

* **Proposer:** Michael So

* **Payment Address:** 3PbhNyWhiSTwb58fc5uYhg2mV2vJ34KwAJ

* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/125#issuecomment-946479942) 

  

## Project Overview :page_facing_up: 

### Overview

Dart has advantages in native development. 

Dart is a computer programming language developed by Google, which is used in the development of web, server, mobile apps and the IoT. Dart is an object-oriented, class-defined, single-inheritance language. Dart is a general programming language developed by Google, which was later recognized as a standard by ECMA (ECMA-408). It is used to build web, server, desktop and mobile applications. Its syntax is similar to C language and can be translated into JavaScript, interfaces, mixins, abstract classes, reified generics, optional typing and sound type system .

Dart is very positive for Polkadot. Currently [Polkadot-JS](https://github.com/polkadot-js) (hereinafter referred to as JS API) provides developers with a complete JS API for interacting with the Polkadot. Both Web and App can call JS API. But the problem is that in App development and design, developers must provide a built-in browser interface on the front end, and then use JavaScript to implement JS API calls. The web is embedded in the app, which will cause the front-end page to load slowly, the development framework is not easy to maintain, and the native functions cannot be fully invoked.

Flutter and Dart are born for cross-platform applications development. As Dart is using in the development of Flutter, we propose that using Dart language to develop tools for Polkadot/Substrate will be a better solution.

As a new framework, there are not many blockchain SDKs suitable for Flutter. Ethereum provides [web3dart](https://github.com/simolus3/web3dart), which is a relatively complete Dart implementation. It contains important features such as JSON RPC encapsulation, offline signature, ABI encoding and decoding, and its goal is to provide a dart version of web3.js, which can meet the needs of most Flutter applications to connect to the Ethereum blockchain.

Similarly, we also found that there is currently no Polkadot SDK suitable for the development of the Flutter framework, although we have seen that some members of the community use `Flutter/Dart` to implement some wallets or some scattered tools, which is not a complete interactive implementation. For example, encoding and decoding, crypto standards, api design, etc., should all follow the design of Polkadot-JS and be completely migrated to the Dart language.

Similar to [polkaj](https://github.com/emeraldpay/polkaj) (Java version), we will develop the Dart version and name it `Polkadot-Dart`.


### Project Details 
To complete the porting, we follow the project structure of `Polkadot-JS`. 

There are some differences between `Dart` and `Javascript`, and the project needs to be compatible. For example, The "wasm" compiled by Rust-lang is used in `Polkadot-JS` . As for dart, we use `dart:ffi` for communication. All Rust-native libraries will be compiled to `.so` for Linux/Android system, `.a` or `.framework` for iOS/MacOS, and `.dll` for Windows.

And for the `extension` packages, we must realize that it is only available for `WebApp` based on JavaScript browsers. As for Dart/Flutter, we have to find another way to interact with `WebApp` and  have other solutions for `JavaScript app/Dapp`, please refer to [Pocket4D WIKI](https://github.com/Pocket4D/Pocket4D-Wiki) .

Therefore, we defined Dart project like `Polkadot-JS` .

| Polkadot-JS                | Polkadot-Dart |
| -------------------------- | ------------- |
| **wasm**                   | Rust bindings |
| `@polkadot/wasm`           | crypto        |
| **common**                 |               |
| `@polkadot/utils`          | utils         |
| `@polkadot/util-crypto`    | util_crypto   |
| `@polkadot/keyring`        | keyring       |
| `@polkadot/networks`       | networks      |
| `@polkadot/x-fetch`        | * not needed  |
| `@polkadot/x-randomvalues` | * not needed  |
| `@polkadot/x-textdecoder`  | * not needed  |
| `@polkadot/x-textencoder`  | * not needed  |
| **api**                    |               |
| `@polkadot/api-contract`   | api_contract  |
| `@polkadot/api-derive`     | api_derive    |
| `@polkadot/api`            | api           |
| `@polkadot/metadata`       | metadata      |
| `@polkadot/rpc-core`       | rpc_core      |
| `@polkadot/rpc-provider`   | rpc_provider  |
| `@polkadot/typegen`        | * not needed  |
| `@polkadot/type-known`     | * not needed  |
| `@polkadot/types`          | types         |


#### Technology Stacks

Dart/Flutter, Rust


### Ecosystem Fit 

Similar projects: 
* [Web3dart](https://github.com/simolus3/web3dart)
* [polkaj](https://github.com/emeraldpay/polkaj)
* [Dart-scale-codec](https://github.com/nbltrust/dart-scale-codec)
* [Substrate-sign-flutter](https://github.com/hanwencheng/substrate_sign_flutter) 

We have created `Polkadot-Dart`, which, combined with Flutter framework, can greatly reduce the barrier to participation for cross-platform developers, as well as reduce the complexity of cross-platform application development and maintenance. In addition, the cross-platform experience of Polkadot-Dart's users is also improved.


## Team :busts_in_silhouette:

### Team members

* Michael So
* Zhongdan Wei

### Team Website	

* https://pocket4d.io (In progress)
* https://firestack.one

### Legal Structure 

SHANGHAI NIEPAN INFORMATION TECHNOLOGY CO., LTD., a startup company focusing on blockchain development in China.

### Team's experience

* Michael So, founder of FireStack, Serial entrepreneur.  He devoted to blockchain for many years, leading token investment, wallet, blockchain game platform and other projects, and has accumulated rich experience in blockchain theories and practice.
* Zhongdan Wei, front-end architect, proficient in Flutter. As a leading member in Hellobike, he led the team to develop the Mobike Applications and makes it easy and fast to add flutter to existing mobile applications.


### Team Code Repos

* https://github.com/Pocket4D/p4d-rust-binding (Will be renamed after proposal is accepted)

### Team LinkedIn Profiles

None.

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 5 months
* **Full-time equivalent (FTE):**  5.3
* **Total Costs:** 1.48 BTC

### Milestone 1 — Porting `common` and `wasm`

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.56 BTC

| Number | Deliverable     | Specification                                  |
| ------ | --------------- | ---------------------------------------------- |
| 0      | Licence         | MIT                                            |
| 1      | bindings/crypto | Rust binding and implements `@polkadot/wasm`   |
| 2      | util_crypto     | Porting and implements `@polkadot/util-crypto` |
| 3      | utils           | Porting and implements `@polkadot/utils`       |
| 4      | keyring         | Porting and implements `@polkadot/keyring`     |
| 5      | network         | Porting and implements `@polkadot/network`     |
| 6      | tests           | Unit tests for deliverables above              |

### Milestone 2 — Porting `api`

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.00 BTC

| Number | Deliverable  | Specification                                   |
| ------ | ------------ | ----------------------------------------------- |
| 0      | migration     | migrate all existing code to Null Safety        |
| 1      | rpc_core     | Porting and implements `@polkadot/rpc`          |
| 2      | rpc_provider | Porting and implements `@polkadot/rpc_provider` |
| 3      | metadata     | Porting  `@polkadot/metadata`                   |

### Milestone 3 — Porting `api`

* **Estimated Duration:** 1.5 month
* **FTE:**  1
* **Costs:** 0.00 BTC

| Number | Deliverable  | Specification                      |
| ------ | ------------ | ---------------------------------- |
| 0      | types        | Porting `@polkadot/types`          |
| 1      | api_derive   | Porting  `@polkadot/api-derive`    |
| 2      | api_contract | Porting  `@polkadot/api-contract`  |
| 3      | api          | Porting  `@polkadot/api`           |
| 4      | tests        | Unit tests for deliverables above  |
| 5      | pub.dev      | Publish to pub.dev for v1.0.0-dev1 |

### Milestone 4 — Publishing

* **Estimated Duration:** 1.5 month
* **FTE:**  1.3
* **Costs:** 0.92 BTC

| Number | Deliverable    | Specification                        |
| ------ | -------------- | ------------------------------------ |
| 0      | tests          | Integration tests for all milestones |
| 1      | documentations | Documentations for all packages      |
| 2      | pub.dev        | Publish to pub.dev for v1.0.0        |


### Community Engagement

We are buiding our community on https://www.yuque.com/?language=en-us and newsletters will be regularly updated soon.

## What has been done so far?

### Milestone 1

| Status  | Number | Deliverable     | Specification                                  |
| ------- | ------ | --------------- | ---------------------------------------------- |
| &#9745; | 0      | Licence         | Apache 2.0                                     |
| &#9745; | 1      | bindings/crypto | Rust binding and implements `@polkadot/wasm`   |
| &#9745; | 2      | util_crypto     | Porting and implements `@polkadot/util-crypto` |
| &#9745; | 3      | utils           | Porting and implements `@polkadot/utils`       |
| &#9745; | 4      | keyring         | Porting and implements `@polkadot/keyring`     |
| &#9744; | 5      | network         | Porting and implements `@polkadot/network`     |
| &#9745; | 6      | tests           | Unit tests for deliverables above              |


## Future Plans

### Maintainance
1. Keep following the upgrade of `Polkadot-JS` and `Substrate`, and supporting latest upgrades as soon as possible.
2. Seperate the rust/dart binding libs and other implementations to serveral packages, the native binding libs should be minimize and stable for long term, just like `@polkadot/wasm` does. And we should be focusing on upgrading the features.

### Products and ecosystems
1. We have a plan of making a wallet app, using `Polkadot-Dart` as its main dependency, which has been communicated with many parachains, to prepare for linking into `Parachains` and lowering the threshold for users to use. 
2. We also have another substrate-based project called [Pocket4D](https://github.com/Pocket4D/), combining `Polkadot-Dart` and other components, we plan to build a new decentralized network. And `Polkadot-Dart` will be one of our client side core dependency.
3. The main purpose of this lib is to co-operate with ecosystem partners, especially `Parachains`, we need to build and test with them and fit their needs.


## Additional Information ➕
### Are there are any teams who have already contributed (financially) to the project?
No.

### Have you applied for other grants so far?
[Pocket4D](https://github.com/w3f/General-Grants-Program/pull/340)
