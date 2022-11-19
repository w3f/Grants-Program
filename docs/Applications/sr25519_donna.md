# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** sr25519-donna
* **Proposer:** [terencege](https://github.com/TerenceGe)
* **Payment Address:** 3CL4h6PDZRM8yWyqFyShJJdPdYVQWF7pQL

## Project Description :page_facing_up:

Please provide the following:
  * A brief description of the project.
  This is a pure C implementation of polkadot’s key derivation and signing algorithm. The goal is to fully compatible with the original rust version.

  [schnorrkel](https://wiki.polkadot.network/docs/en/learn-cryptography) plays a key role in polkadot's ecosystem, but currently it only has rust implementation officially. Although rust is popular in blockchain industry, there are still large amount of projects (such as trezor and trust wallet) are using C/C++. Porting rust in some platform (such as ios) is not frictionless, also some embeded systems require extra effort to remove std of rust to reduce bundle size. There should be a C version that implements all the features the rust versions has, at the same time, more easier to integrat into existing (C/C++)project.

  * An indication of why this project is good for the ecosystem.
  For those C/C++ projects in the industry, if they want to support polkadot, it's more convenient to use this library instead of the rust version.
  * An indication of why your team is interested in creating this project.
  When I'm buiding an native mobile wallet which will support polkadot, for some reasons, apple's infastructre dose not support rust very well, so I start to build the C version of the schnorrkel lib.

## Team :busts_in_silhouette:

* **Members: Terence Ge
* **LinkedIn Profiles:** https://www.linkedin.com/in/terence-ge-4a146185/
* **Code Repos:** https://github.com/TerenceGe/sr25519-donna
* **Legal Structure:** Individual
* **Team's Experience:** Working in blockchain industry since 2013, author of BitPortal wallet (https://bitportal.io/), former BTCC exchange engineer, have rich experence of buiding crypto currency exchange and wallet.
* **Team's previous work links:** [cryptoolkit](https://github.com/TerenceGe/cryptoolkit), [bitportal-wallet](https://github.com/TerenceGe/bitportal-wallet)

## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 4 weeks
* **Total Costs:** 0.6 BTC

### Milestone 1

* **Estimated Duration:** 2 weeks
* **Costs:** 0.3 BTC


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | keypair creation | create keypair form seed |
| 2. | keypair derivation | support soft/hard deriving keypair |
| 3. | sign/verify message | support signing/verifing messages |
| 4. | random number generator | provide default random number generator and allow users to use their custom version |
| 5. | curve operation | take advantage of ed25519-donna's curve operations, support both 32bit and 64bit operations |
| 6. | add documentation | add documentation of installing or integrating these features |

### Milestone 2

* **Estimated Duration:** 2 weeks
* **Costs:** 0.3 BTC


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | vrf sign if less | support verifiable random function signing operation |
| 2. | vrf verify | support verifiable random function verifing operation |
| 3. | unit test | provide unit test for vrf siging and verifing |
| 4. | add documentation | add documentation of installing or integrating vrf features |

## Additional Information :heavy_plus_sign:
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
There are some features already implemented, although need some improvement, you can check the repo here https://github.com/TerenceGe/sr25519-donna
* Are there any other projects similar to yours? If so, how is your project different?
Sr25519_port Implementation by usetech-llc - which only have the sign/verify features. https://github.com/usetech-llc/sr25519
We will support all the features the rust version have, including HDKD, VRF and MulSig.
