# Open Grant Proposal

**Subscript:** Substrate smart contact written in `AssemblyScript`

* **Project:** Subscript
* **Proposer:** [synote](https://github.com/synote)
* **Payment Address:**  bc1qzv5ljrt0sngjjnn25s4jzsu7qtts5d74cq8tz5

## Project Overview :page_facing_up:

We are intergrating AssemblyScript into substrate smart contract which is similar to parity's ink. It involve buillding substrate contract runtime api, builtin modules, and development sdk. we name the language and sdk as `Subscript`.

### Overview

**Subscript** is a smart contract language written in AssemblyScript for substrate based chain. We will provide essential substrate api and builtin tools to support contract development.

Similar to parity ink, `Subscript` is built on top of  AssemblyScript and follow all AssemblyScript syntax. Subscript is more like a development kit with some builtin module and tools. As assemblyscript is easy to interact with TypeScript and JavaScript, `Subscript` is much more friendly for dapp developers.

### Project Details

**Subscript** is designed as standard AssemblyScript with builtin contract api. First of all, `Subscript` libray  will provide  basic `contract` pallet runtime api access.

* contract runtime envionment
* contract `memory` management
* state storage access, set and get value by key.
* `event` data generation and storage

The `Subscript` library also add support for contract interaction utilties, including:

* contract metadata generator
* basic data structure: dynimic array, map, list,
* user struct storage layout
* `account` and  `balance` interface 
* contract call abstraction
* builtin utility fuctions

The package will provide contract template and intergation tool with substrate node. 

There is no plan for `EVM Pallet` support.

### Ecosystem Fit
Some of the function of `Subscript` are similar to LimeChain's work of AssemblyScript Runtime, but they are  made for different scenario. LimeChain AssemblyScript Runtime focus on building substrate runtime with wasm compiled from AssemblyScript. It involves building all the substrate runtime environment entry with AssemblyScript and other basic library. `Subscript` aims to implement all the substrate smart contract low level interface with AssemblyScript. `Subscript` also add support for basic contract lib and project template for easy development.  We may benefit  previous work from LimeChain such as `SCALE`codec, runtime entry implemention.

## Team :busts_in_silhouette:

### Team members
* Symon Ho: Fullstack developer Leading consensus R&D and engineering in multichain system. Prior to that, developer of openstack project,  engaged in performance tools and  monitoring  system for cloud platform.
* Ice Min: 10+ years experience in c/c++ development, real time database products and digital currency transaction platform products expert. Developer of BitCoin and Ethereum wallet.

### Team Website
* https://github.com/slickup

### Team's experience

We implemented the fruitchain consensus integrated with ethereum, and used pbft to provide finalization in blockchain system.  Fruitchain mainnet launched in 2019 and privide 500+ TPS for transaction validation.

We alse engaged in smart contract tools interaged with vyper for contract audit and testing. 

### Team Code Repos
* https://github.com/slickup/subscript
* https://github.com/ascontract/subscript

## Development Roadmap :nut_and_bolt:

We only provide **milestone1**  here for contract runtime api implementation. Full milestones are list in the [general grant repo](https://github.com/slickup/General-Grants-Program/blob/master/grants/speculative/subscript_lang.md)

### Overview
* **Total Estimated Duration:** 2 month
* **Full-time equivalent (FTE):**  2
* **Total Costs:** 2 btc

### Milestone 1  — Implement smart contract low level api
* **Estimated Duration:** 2 month
* **FTE:**  2
* **Costs:** 2 btc

In this milestone, all the basic substrate contract runtime api will be implemented in AssemblyScript. This stage will deliver a AssemblyScript package which provide encapsulation of current substrate contract api. With the AS api, contracts can be compiled to wasm and deployed on substrate contract node. We may benefit from the reference implemention of parity Ink and provide similar api.

The AS package will cover the following substrate contract api:

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Testing | This milestone will have unit-test for all the following runtime api impemented. We will mock most of the contract runtime api to simulate host functions. Integration test will be delivered in next milestone. |
| 0c. | Documentation | We will provide both inline documentation of all the sdk api and  basic code example that show how developers use the api. |
| 1. | contract runtime environment | contract builder and execution to initailize the contract code |
| 2. | core types | add core component: AccountId, Balance, Hash, Block |
| 2. | storage access | contract low level storage read and write with key |
| 3. | object packing utilty | Provide user-defined data structure packing and unpacking method to storage access. |
| 4. | memory manipulation | Implement memory make and getter, setter |
| 5. | contract event generation | Generate event from contract call |
| 6. | contract call method | Provide method for make contract call. |
| 7. | hash utility | Make digest of encoded input to generate hash image |
| 8. | `SCALE` codec | Builtin codec functions to serialize and deserialize input. We may directly use LimeChain `as-scale-codec` implementation. |
| 9. | example for demonstration | Provide  ERC20 contract example to test on substrate node |

## Future Plans

After the `Subscript` presentation , we may make our effort to bring more  tool for contract development.

A simulated contract sandbox similar to ganache is needed to debug and test contract.

We may add more intergated tool and IDE packge for contract developer.

## Additional Information

We expect any developer who is interested in AssemblyScript smart contract join us and build efficient framework.