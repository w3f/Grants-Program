# drand in substrate

- **Team Name:** The Bacon Beacon
- **Payment Address:** USDC 0x1C9e0bcA759e5Ec09246f4795310789b12F65a59
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

We are planning to integrate the [drand](https://drand.love/developer/) client into substrate.

### Overview

Current sources of verifiable randomness in Substrate are limited, and developers need to rely on deriving randomness themselves, or by taking it from BABE.

The clear disadvantage of deriving randomness by the application developers is that all information on the blockchain is public. Resultingly, randomness is more likely to be predictable and gameable, especially on standalone Substrate chains.

On the other hand, BABE provides two sources of randomness: public and private.
Public randomness is derivied once per epoch, and is easily verifiable by hashing all the VRF outputs from the previous epoch. Unfortunately, it is only computed once per epoch.
Private randomness is computed by each validator in secret to determine when they'd produce blocks. It is published with each block, which is as often as is possible on a blockchain and is provably verifiable and secure. Unfortunately, the random values that the validators publish are known to these validators *hours* in advance.

Both of the above mentioned sources are internal: the randomness is derived from information *within* the network.
Another approach is to take randomness from an external source, if that source can be proven to be secure.

One such source is [drand](https://drand.love/about/) (decentralised randomness beacon), which allows the participants "to produce collective, publicly verifiable, unbiased, unpredictable random values at fixed intervals".

In this project, we want to enable any Substrate project to consume publically, verifiable randomness from drand.

### Project Details

Randomness needs to be retrieved from an HTTP API via a provider, which is itself either a member of the drand network, or a broadcaster of the randomness.
In either case, the pallet doesn't trust the provider blindly - instead, it can cryptographically verify the correctness of the randomness retrieved, by verifying it against the drand [chain randomness information](https://drand.love/developer/http-api/#chain-hash-info) contained in the Runtime. This chain intormation contains the network's well-known threshold public key, fixed interval for randomness generation, genesis time, and an initial random hash.

This chain randomness information and an optional [round](https://drand.love/developer/http-api/#chain-hash-public-round) 'checkpoint' can be set in the chain's `GenesisConfig`, allowing the network to immediately start using the randomness from the first block. If appropriate, the pallet can also contain a `UpdateOrigin` `Config` parameter, allowing the the beacon source to be modified by a trusted authority (eg. Council, Sudo, whitelisted account, etc) without a runtime update. Each round will be obtained via HTTP API calls made via an off-chain worker, and each round will be verified for cryptographic accuracy and timeliness before being consumable by the runtime.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

A: It will be a Substrate pallet, likely with one of the standardized randomness trait interface in it's `Config`, allowing it to be easily plugged into other pallets. It will also contain a standalone Substrate chain with the pallet, demonstraiting some concrete examples of how it can be used.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

A: Parachains and standalone Substrate chains, dapps (especially ones using ZKPs), and anyone wanting to consume public randomness.

- What need(s) does your project meet?

A: Providing verifiable, public randomness.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

A: Not that we're aware of.

## Team :busts_in_silhouette:

### Team members

- Bacon
- Ham

### Contact

- **Contact Name:** Bacon
- **Contact Email:** bacon.randomness.beacon@pm.me
- **Website:** N/A

- **Contact Name:** Ham
- **Contact Method:** Github issues/discussion or Session ID `05947ccb461b7e693282c71afea61ebe81e52abe8b99e03901d6e6c9af06f9ac51`
- **Website:** N/A

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

Both team members have practical experience in developing cryptographic protocols (3 years combined) and Rust (4 years combined). We have completed the basic substrate tutorials for the purpose of preparing for this project. Apart from this information, we would like to keep the team's profiles private.
We believe that the quality of the project delivery will bear witness to our claims.

### Team Code Repos

- https://github.com/random-bacon


## Development Status :open_book:

The public docs from [drand](https://drand.love/) serve best as technical introduction to what drand is, and how it can be integrated into existing projects. We will also use Github's Projects feature or Issues to create a backlog and task our progress publically.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1 FTE (2 x half-time)
- **Total Costs:** 28,000 USD

### Milestone 1: Create a Rust client library for drand

While there exists one [drand Rust client library](https://github.com/iprs-dev/drand-rs), it hasn't been updated in 2 years.

We will create a new Rust library that
- includes `no_std` support
- complies and works with the APIs outlined [here](https://github.com/drand/drand-client#api)
- verifies the cryptogrpahic randomness
- uses up-to-date dependencies
- has a set of tests for asserting proper functionality and reducing bugs from future updates

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide **inline documentation** alongside the code, a README explaining how it can be used, and a few examples demonstrating it's concrete usage. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. We will use standardized testing methods so tests can be pragmatically executed and updated by anyone. |
| 1. | Drand client library | We will build out a drand client library with the requirements mentioned in the Milestoke 1 overview.

### Milestoke 2: Build a Substrate pallet with a fully-featured/configured example chain

We will write a Substrate pallet that:
- implements the drand client library from Milestone 1
- allows for the configuration and modification of the drand chain randomness information
- utilized off-chain workers to fetch round information, and ensuring validator consensus about it
- verifies the round information for cryptographic accuracy and timeliness
- provides a pragmatic way for other pallets to source the randomness

We will also build an example Substrate node that:
- demonstrates a fully configured pallet-drand-client
- demonstrates an example pallet utilizing all of its features

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will create **dedicated documentation in the repo** of how to use the code and a basic **tutorial** that explains how a user can (example) spin up one of the Substrate nodes and interact with the chain in a way that utilized drand's randomness. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Example pallet | We will create a pallet that integrates the drand client library from Milestone 1, and write a sample pallet that uses its features (eg. return a message from a list of messages at random, based on the public randomness it retrieves via the API).
| 2. | Randomness verification | The pallet will be able to verify round randomness via the chain randomness information.
| 2. | Example chain | We spin up a testing chain to demonstrate how such a pallet works.


## Future Plans

Once randomness is available to Substrate developers, we would be interested to write a client that actually *participates* in the drand protocol.
It may make sense for a common-good parachain to participate as a member of [League of Entropy](https://en.wikipedia.org/wiki/League_of_entropy).
We recognize the lack of accountability and other issues that can arise with an anonymous team maintaining such an important and foundational ecosystem component like a common-good parachain,, and we are open to discussion solutions relating to the development and maintenance of it.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** https://medium.com/web3foundation/web3-foundation-grants-program-reaches-400-projects-milestone-1k-grant-applications-received-93a7d3a5f942

Thank you for your time. We're looking forward to discussing this project with you.
