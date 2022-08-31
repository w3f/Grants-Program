# Name of your Project

- **Team Name:** The Bacon Beacon
- **Payment Address:** BTC 0x
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

We are planning to integrate the [drand](https://drand.love/developer/) client into substrate.

### Overview

Current sources of verifiable randomness in substrate are limited and application developers need to rely on deriving randomness themselves or by taking it from BABE protocol.

The clear disadvantage of deriving randomness by the application developers is that all information on the blockchain is public, and so the randomness is likely to be predictable and gameable.

On the other hand, BABE has two possible sources of randomness: public and private.
Public randomness is derivied once per epoch, and is easily verifiable by hashing all the VRF outputs from the previous epoch. Unfortunately, it is only computed once per epoch.
Private randomness is computed by each validator in secret to determine when they'd produce blocks. It is published with each block, which is as often as is possible on a blockchain and is provably verifiable and secure. Unfortunately, the random values that the validators publish are known to these validators *hours* in advance.

Both of the above mentioned sources are internal: they come from within the polkadot network.
Another approach is to take randomness from an external source, if that source can be proven to be secure.

One such source is drand (decentralised randomness beacon), which allows "to produce collective, publicly verifiable, unbiased, unpredictable random values at fixed intervals" (https://drand.love/about/). 

In this project we want to enable substrate projects to consume randomness from drand.

### Project Details

Randomness needs to be retrieved via an API to (currently external) provider, which is itself either a member of the drand network, or a broadcaster of the randomness.
In either case, the application shouldn't trust the provider blindly - instead, it can cryptographically verify the correctness of the randomness retrieved, by verifying it against a shared public key that it stores.

Concretely, the public key will be stored as part of the chain spec. We will provide a method to (securely) update such key in the future iteration of the project, which will be needed when the drand network changes its membership.

The API calls will be made via an off-chain worker and each random value will necessarily be verified before being consumed.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

A: It will be a substrate pallet and an example chain.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

A: Application developers wishing to consume public randomness.

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
- **Contact Email:** bacon@gmail.com
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

The public docs from [drand](https://drand.love/) serve best as technical introduction to what drand is and how it can be integrated into existing projects (here, substrate).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1 FTE (2 x half-time)
- **Total Costs:** 18,000 USD

### Milestone 1 Update client libraries

There exists one client library for drand in Rust: https://github.com/iprs-dev/drand-rs, but it hasn't been updated in 2 years.
We will either fork this library and modify it s.t.:
- add `no_std` support
- comply with the APIs outlined [here](https://github.com/drand/drand-client#api)
- dependencies are up-to-date
- expand/update the test suite

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)
| 1. | Client library | Update the client library as per description in Milestone 1

### Milestone 2 Example pallet

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)
| 1. | Example pallet | We will create an example pallet that integrates the above client library, and write a sample application that uses the randomness. It will return a message from a list of messages at random, based on the public randomness it retrieves via the API.
| 2. | Randomness verification | The pallet will verify the retrieved randomness.
| 2. | Example chain | We spin up a testing chain that allows to verify how such a pallet works.


## Future Plans

Once randomness is available to substrate developers, we would like to also write a client that actually *participates* in creating this randomness.
Perhaps Polkadot could have a parachain (not sure who'd fund it yet) that acts as a member of League of Entropy.
We would be open to developing such a parachain from the technical side.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** https://medium.com/web3foundation/web3-foundation-grants-program-reaches-400-projects-milestone-1k-grant-applications-received-93a7d3a5f942
