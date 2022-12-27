# Ruby Substate Client

* **Team Name:** UNI-ARTS
* **Payment Address:** 0xE7188c7e225D473eE9D99108482Af54952d71527 (USDT)
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/613#issuecomment-1122685293)

## Project Overview :page_facing_up:

### Overview

Ruby Substate Client will support a efficient way to interface with substrate chain with ruby.

This library will provide convenience methods to deal with SR25519, ED25519 sign and verify message.

Encode/Decode the chain message, submit the sign message to chain by rpc.

Through this grant, we hope to

1. SR25519, ED25519 support.

2. Submit sign extrinsics to chain.

### Project Details

1. Develop SR25519 gem.

2. Develop rpc gems inlcude submit extrinsics and batch submit extrinsics.

#### Apis

* SR25519.keypair_from_seed(seed)
* SR25519.sign(message, keypair)
* SR25519.verify(address, message, signature_result)
* ED25519.keypair_from_seed(seed)
* ED25519.sign(message, keypair)
* Ed25519.verify(address, message, signature_result)
* RbSubstrateClient.submit_sign_extrinsics(params, keypair)
* RbSubstrateClient.utility_batch_submit(params, keypair)

#### Technology stack

* [ruby lang](https://www.ruby-lang.org/) 2.7
* [ruby on rails](https://rubyonrails.org/) 6.1, web framework

### Ecosystem Fit

### Similar projects

<https://github.com/polkascan/py-substrate-interface>

## Team :busts_in_silhouette:

### Team members

* Xuxiaohu: full-stack developer
* Tuminfei: architecture and blockchain consultant

### Contact

* **Contact Name:** Xuxiaohu
* **Contact Email:** xxh2611@gmail.com

### Legal Structure

* **Registered Address:** 3 FRASER STREET #05-25 DUO TOWER SINGAPORE (189352)
* **Registered Legal Entity:** UNI-ARTS FOUNDATION LTD.

### Team's experience

The team is familiar with Ethereum and Substrate development.

**Xuxioahu** Technical expert in blockchain and web development,  has been using golang development since 2015 and ruby development since 2010. Has experiences of EVM smart contract technology and  blockchain browser.

**Tuminfei** is the architecture and blockchain consultant of Uniscan team. He has rich experience in the field of software development, especially in blockchain. He has implemented many projects as a leader. He is familiar with the development of Ethereum and Substrate. He is also a major maintainer of the UniArts chain.

### Team Code Repos

* <https://github.com/uni-arts-chain/sr25519>
* <https://github.com/uni-arts-chain/rb_substrate_client>

## Development Status :open_book:

Much of the technology is already implemented [app.uniarts.network](https://app.uniarts.network/). But now the code is in the project, not written as a library. and it needs more tests. We expect that we can refactor, reuse and generalize existing code. write gems to help other ruby developers.

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 4 weeks
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 8,000 USD

### Milestone 1 — SR25519/ED25519 sign verify message

* **Estimated duration:** 2 weeks
* **FTE:**  2
* **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that run the code, which will show how the new functionality works. |
| 0c. | api | We will provide SR25519.keypair_from_seed(seed), SR25519.sign(message, keypair), SR25519.verify(address, message, signature_result), ED25519.keypair_from_seed(seed), ED25519.sign(message, keypair), ED25519.verify(address, message, signature_result)
| 0d. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0e. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |

### Milestone 2 — Submit sign extrinsics

* **Estimated Duration:** 2 weeks
* **FTE:**  2
* **Costs:** 5,000 USD

| Number | Deliverable           | Specification                                                |
| -----: | --------------------- | ------------------------------------------------------------ |
|    0a. | License               | MIT                                                          |
|    0b. | Documentation         | 1. We will provide both **inline documentation** of the code. |
|    0c. | api | We will provide RbSubstrateClient.submit_sign_extrinsics(params, keypair), RbSubstrateClient.utility_batch_submit(params, keypair)
|    0d. | Testing Guide         | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0e. | Docker                | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. <br />And, It will be used to run the server. |

## Future Plans

* Support load the key from json file
* Support load custom_types
