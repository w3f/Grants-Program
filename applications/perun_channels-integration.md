# W3F Grant Proposal

* **Project Name:** Perun Channels - Integration with go-perun
* **Team Name:** PolyCrypt/Perun
* **Payment Address:** 0x308Ca526B009e10Ef0482C38A3370BFb44A32908 (DAI)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3


## Project Overview :page_facing_up:

This proposal is a follow-up on our [first proposal](https://github.com/w3f/Grants-Program/pull/437), which resulted in a [Substrate Pallet](https://github.com/perun-network/perun-polkadot-pallet) that implements the Perun smart contract logic for Polkadot.

We now propose to integrate the Perun-Polkadot on-chain logic with the [go-perun library](https://github.com/hyperledger-labs/go-perun).
The go-perun library implements the Perun client protocols and provides an abstract, simple, and secure interface for working with Perun Channels on any supported blockchain backend.
Through the integration, Perun Channels on Polkadot will become accessible.

**Structure.** We start with a general overview of the Perun project and an architectural overview of the go-perun library.
We then set the scope of the current proposal.

### Overview

**Background.** Perun state channel technology enables fast and cheap transactions with arbitrary transaction logic on and across blockchains.
The technology is based on peer-reviewed research that has been published at top conferences and is being implemented in the form of the open-source library _go-perun_ written in Go.
One of its main features is its blockchain-agnostic design, which means that most parts of the library do not depend on a concrete blockchain implementation, but are rather implemented against abstract blockchain backend components.
Currently, we have an Ethereum backend and we recently implemented the on-chain logic for a Polkadot backend supported by a Web3 Foundation Grant.

**Proposal.** To reach the goal of a full Polkadot backend for _go-perun_, we propose to provide a backend connector that connects the Polkadot on-chain logic with the client protocol logic contained in go-perun, thereby making Perun channels on Polkadot usable via the go-perun client interface.
We propose to release this work open-source under the Apache 2.0 license.


**Outlook.** We currently focus on two-party single-asset payment channels between users on the same Polkadot chain.
For the future, we consider adding state channel functionality, multi-asset support, multi-party support, and cross-chain functionality for establishing channels between two Polkadot chains.
In the further future, we envision supporting channels even between a Polkadot chain and a non-Polkadot chain, such as Ethereum.

### Project Details

The _go-perun_ library is written in Go. At the core, it consists of a set of go packages whose relationships are visualized in the architecture diagram below and we will explain in the following. The library design follows the dependency inversion principle which means that many of the packages are defined as abstract interfaces that can be implemented depending on the given application context. This allows us to swap out the blockchain backend implementation of Ethereum for a backend implementation of Polkadot, or the communication layer from one that uses a simple TCP/IP dialer to one which is based on `libp2p` without having to change any of the other components.

#### Architecture of go-perun

In the following we give an overview of the main packages and their functionality.
At the core of the library lies the `client` package, which represents a channel client and holds the core protocol logic. For communication with other clients, the client package uses the `wire` package, which is an abstract definition of the communication layer that is to be instantiated with a concrete implementation suitable for the given application context.
Furthermore, the client package interfaces with the `wallet` package and the `channel` package. The `wallet` package and the `channel` package lie at the core of any blockchain backend implementation. The `wallet` package provides functionality for account management and signature generation. The `channel` package provides the core data structures and functionality for interacting with the blockchain.
Besides that, the library contains the `persistence` package and the `log` package, which are abstractions for persistence and logging functionality whose implementations can be injected depending on the application context.

![go-perun Architecture](https://perun.network/static/perun-arch_polkadot.png)

In essence, creating a Polkadot backend for _go-perun_ means implementing the `wallet` and `channel` abstractions for Polkadot.
On the one hand, this comprises an on-chain component written in Rust that provides the necessary smart contract logic.
On the other hand, this comprises an off-chain component written in Go that acts as a gateway from the abstract protocol implementation of go-perun to the smart contract logic running on the blockchain.
Once these components are implemented, Perun Channels on Polkadot are accessible via the go-perun library.
The [Perun Developer Tutorial](https://labs.hyperledger.org/perun-doc/go-perun/index.html#developer-tutorial) explains how go-perun can be used for realizing simple and secure micro-transactions over any supported blockchain backend.

#### Scope of current proposal

The focus of the current proposal is the off-chain component that makes Perun Channels on Polkadot accessible via the go-perun library.
Concretely, we will provide Polkadot-specific implementations of the Wallet abstraction and the Channel abstraction that provide the functionality described below.
In particular, we provide a translation middleware between the abstract adjudication logic of _go-perun_ and the concrete smart contract logic running on a Polkadot chain.
The Polkadot on-chain component has been the subject of a preceding Web3 Foundation Grant and is available at [perun-polkadot-pallet](https://github.com/perun-network/perun-polkadot-pallet).

- **Wallet abstraction**: Provides tools for account management and signature generation. Implemented using [go-subkey](https://github.com/vedhavyas/go-subkey) and [go-substrate-rpc-client](https://github.com/centrifuge/go-substrate-rpc-client).
  - [`type Wallet interface`](https://github.com/hyperledger-labs/go-perun/blob/1fc30ba43eaae379ed5c566bdcf79edafc598b88/wallet/wallet.go#L21): Represents a set of accounts.
    - `func Unlock(Address) (Account, error)`: Unlocks a wallet account.
  - [`type Account interface`](https://github.com/hyperledger-labs/go-perun/blob/1fc30ba43eaae379ed5c566bdcf79edafc598b88/wallet/account.go#L18)
    - `func Address() Address`: Returns the account address.
    - `func SignData(data []byte) ([]byte, error)`: Signs a byte array.
  - [`type Address interface`](https://github.com/hyperledger-labs/go-perun/blob/1fc30ba43eaae379ed5c566bdcf79edafc598b88/wallet/address.go#L29): Represents an account address.
    - `func Encode(io.Writer) error`: Encodes the address.
    - `func Decode(io.Reader) error`: Decodes an address.
  - [`type Backend interface`](https://github.com/hyperledger-labs/go-perun/blob/1fc30ba43eaae379ed5c566bdcf79edafc598b88/wallet/backend.go#L26): Provides utilities for the wallet abstraction.
    - `func DecodeAddress(io.Reader) (Address, error)`: Decodes an address.
    - `func DecodeSig(io.Reader) (Sig, error)`: Decodes a signature.
    - `func VerifySignature(msg []byte, sign Sig, a Address) (bool, error)`: Verifies a signature.
- **Channel abstraction**: Represents the middleware between the abstract adjudication logic of _go-perun_ and the smart contract logic running on the blockchain. Implemented using [go-substrate-rpc-client](https://github.com/centrifuge/go-substrate-rpc-client).
  - [`type Backend interface`](https://github.com/hyperledger-labs/go-perun/blob/1fc30ba43eaae379ed5c566bdcf79edafc598b88/channel/backend.go#L29): Provides utilities for the channel abstraction.
    - `func CalcID(*Params) ID`: Calculates the channel identifier from the parameters.
    - `func Sign(wallet.Account, *Params, *State) (wallet.Sig, error)`: Creates a signature for a given channel state.
    - `func Verify(addr wallet.Address, params *Params, state *State, sig wallet.Sig) (bool, error)`: Verifies a signature for a given channel state.
    - `func DecodeAsset(io.Reader) (Asset, error)`: Decodes an asset identifier.
  - [`type Adjudicator interface`](https://github.com/hyperledger-labs/go-perun/blob/1fc30ba43eaae379ed5c566bdcf79edafc598b88/channel/adjudicator.go#L38): Provides functionality for calling the on-chain adjudication logic.
    - `func Register(context.Context, AdjudicatorReq, []SignedState) error`: Registers channel state on-chain.
    - `func Withdraw(context.Context, AdjudicatorReq, StateMap) error`: Withdraws channel funds on-chain.
    - `func Subscribe(context.Context, *Params) (AdjudicatorSubscription, error)`: Creates an on-chain event subscription.
  - [`type AdjudicatorSubscription interface`](https://github.com/hyperledger-labs/go-perun/blob/1fc30ba43eaae379ed5c566bdcf79edafc598b88/channel/adjudicator.go#L105): Provides functionality for consuming relevant on-chain events.
    - `func Next() AdjudicatorEvent`: Reads the next event.
    - `func Err() error`: Returns a subscription error.
    - `func Close() error`: Closes the subscription.
  - [`type Funder interface`](https://github.com/hyperledger-labs/go-perun/blob/1fc30ba43eaae379ed5c566bdcf79edafc598b88/channel/funder.go#L27): Provides functionality for on-chain channel funding.
    - `func Fund(context.Context, FundingReq) error`: Transfers funds to a given channel on-chain.

The following aspects are **out of scope** of the current proposal and subject to future applications:

- App channels, i.e., channels with arbitrary and enforceable transaction logic.
- Multi-asset channels, i.e., channels that hold a variety of asset types.
- N-party channels, i.e., channels with an arbitrary number of participants.
- Sub-channels or virtual-channels, i.e., channels that are funded off-chain from other channels.

In the further future we plan to enable channels between Polkadot chains, and to explore the possibility of establishing channels to users on other networks.

### Ecosystem Fit

#### Where and how does your project fit into the ecosystem?

**Peer-to-peer microtransactions.** Polkadot scales better than previous generation blockchains like Bitcoin or Ethereum, but there are limits to the scalability of Polkadot. For example, realizing pay-per-use applications may require the network to handle thousands of transactions per second. Moreover, in certain use cases (e.g., microtransactions) finality has to be instantaneous. This is where channel technology comes into play. With state channels, transactions can be offloaded from the network and performed peer-to-peer. Due to the support for generalized channels, _go-perun_ also offers the ability to realize arbitrary logic within a channel. For example, this can be used to build a real-time game with financial incentives, where based on the rules of the game and the game state, transactions between the players are performed. Other projects have already indicated interest in channel technology for that purpose, see [this thread](https://github.com/w3f/Grants-Program/issues/503).

**Fast and cheap cross-chain transactions.** Polkadot has already built in support for cross-chain transactions within the Polkadot network. However, these have to be routed over the relay chain, which may take some time and involve some transaction fee. Perun virtual channels enable a shortcut for sending transactions across networks. The idea is that if funds can be preallocated at liquidity pools in the respective networks, then users can deposit into the liquidity pool on one network, and withdraw from the liquidity pool on the other network. The channel technology provides the basis for this to happen conveniently and securely for all involved parties.

**Modularity.** The architecture of _go-perun_ makes extensive use of dependency inversion to allow for maximal modularity and useability in existing projects. For example, this allows for injecting the off-chain communication layer, the logging component, and the persistence component depending on the application context.

**Synergies.** Thanks to the blockchain-agnostic design, projects using _go-perun_ can benefit from synergy effects in the _go-perun_ ecosystem. When new blockchain backends are added to the framework, it becomes rather easy to also extend such projects to these new blockchains. For example, Bosch Research is developing a [dedicated state channels node](https://github.com/hyperledger-labs/perun-node/) that uses _go-perun_. Once a Polkadot backend exists, this node can be extended to also support Polkadot. As such, investing in a new blockchain backend for _go-perun_ also has the potential for secondary beneficial effects on the Polkadot ecosystem.

#### Who is your target audience? What need(s) does your project meet?

We target the following user groups:

1) We target application developers that are in search of scaling their blockchain application even further, for example, in order to realize pay-per-use applications.
2) We target traders and other DeFi users that need a way to quickly transfer funds from one network to another.
3) We target developers of infrastructure projects, like exchanges or service providers that involve high transaction throughput.

#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

We are aware of *cChannel-substrate*, which is a channel project on Polkadot by Celer. We differentiate ourselves from cChannel-substrate as follows:

1) *cChannel-substrate*: does not include a client implementation.
This means that the whole off-chain protocol implementation is still to be done on their side. *go-perun*: Thanks to the unique blockchain-agnostic design of _go-perun_, _go-perun_ features an abstract implementation of the off-chain protocols and only the blockchain-specific parts of the client need to be implemented.
2) *cChannel-substrate*: focuses on payment channels.
*go-perun*: provides generalized state channel functionality.
3) *cChannel-substrate*: does not allow transactions across chains.
*go-perun*: is designed for enabling cross-chain transactions in the future.

## Team :busts_in_silhouette:

PolyCrypt is a Spin-Off from the Technical University of Darmstadt, resulting from years of blockchain research under the name of Perun, under which the team is well-known in the Ethereum space. PolyCrypt was founded in Q4 2020.

### Team members

The PolyCrypt/Perun team consists of leading academic researchers in the off-chain space and experienced software developers of blockchain and cryptographic software. The team members include:

* **Prof. Sebastian Faust** _(Co-founder, research lead)_ is a full professor at the Computer Science department of Technical University of Darmstadt, where he leads the applied cryptography and blockchain lab. He has published more than 60 academic papers in cryptography and blockchain technologies at leading venues for research in IT Security and Cryptography. He frequently serves in program committees of prestigious conferences including Eurocrypt, IEEE S&P and NDSS. For his work he received multiple awards including the Eurocrypt’14 best paper award and the DFG/FNP Copernicus prize 2020. His main scientific contributions to the blockchain space are the co-invention of the concept of Proofs of Space (on which the cryptocurrency Chia is based), the first formal analysis of BIP32 wallets, and extensive work on off-chain protocols. The latter includes the development of the Perun off-chain protocols published in a series of works at IEEE S&P, Eurocrypt and ACM CCS. These publications form the mathematical foundations for the Perun software development project that is currently funded by a BMBF grant for founding high-tech companies in the IT Security space. Sebastian Faust leads research at PolyCrypt and the protocols used in _go-perun_ are based on his work.
* **Sebastian Stammler** _(Co-founder, Co-CEO, technical lead, @sebastianst)_ is the technical lead at PolyCrypt. He has studied mathematics at TU Darmstadt and the University of Cambridge and has subsequently worked as a mathematician in quantitative finance at Ernst & Young in Frankfurt, Germany. He then joined a software development startup for one year, finally starting a PhD in computer science at TU Darmstadt in the field of secure multi-party computation, which he is about to complete. While at TU Darmstadt, he joined the Perun team in 2019 to lead the initial development of the `go-perun` framework, which then saw its first release in December 2019.
* **Dr. Matthias Geihs** _(software architect, researcher, @matthiasgeihs)_ currently leads the development of the _go-perun_ library. He holds a PhD in Computer Science from TU Darmstadt and previously worked as an IT Security Specialist at Deutsche Börse Group.
* **Hendrik Amler** _(Co-founder, Co-CEO, team management, @tinnendo)_
* **Steffen Rattay** _(Developer, @RmbRT)_
* **Oliver Tale-Yazdi** _(Developer, @ggwpez)_
* **Norbert Dzikowski** _(Developer, @ndzik)_
* **Philipp Lehwalder** _(Developer, @cryptphil)_
* **Sasan Safai** _(Co-founder, business development)_
* **Prof. Stefan Dziembowski** _(Co-inventor of Perun, Head of Cryptography Research Group at University of Warsaw)_

### Contact

* **Contact Name:** Sebastian Stammler, Matthias Geihs
* **Contact Email:** seb@perun.network, matthias@perun.network
* **Website:** https://polycry.pt/, https://perun.network/

### Legal Structure

* **Registered Address:** PolyCrypt GmbH, c/o TU Darmstadt, Hochschulstraße 1, 64289 Darmstadt, Germany
* **Registered Legal Entity:** PolyCrypt GmbH, Handelsregister Darmstadt HRB 101219, VAT DE339864467

### Team's experience

Our team has extensive experience in applied cryptography and blockchain research as well as in software development. Our team members include the leading researchers on the Perun state channel research papers, which have been published at renowned conferences.
Furthermore, our team includes experienced developers. Our team members are the main developers of the _go-perun_ library and therefore provide over 2 years of experience specifically in developing software in the blockchain space.

### Team Code Repos

A collection of our repositories can be found at https://github.com/perun-network/.

Since mid 2020, the Perun Framework is a Hyperledger Labs project. The _go-perun_ library is available at https://github.com/hyperledger-labs/go-perun and the Ethereum smart contracts are available at https://github.com/hyperledger-labs/perun-eth-contracts.

The on-chain component of Perun Channels on Polkadot is available at https://github.com/perun-network/perun-polkadot-pallet.

### Team LinkedIn Profiles

Our company LinkedIn profile is available at https://www.linkedin.com/company/perun-network/.

## Development Status :open_book:

**Research:**
The foundation for Perun State Channels was laid in “Perun: Virtual Payment Hubs over Cryptocurrencies”, published at IEEE S&P 2019, https://ieeexplore.ieee.org/document/8835315, also available at  https://eprint.iacr.org/2017/635. This is one of the most prestigious academic conferences in IT Security.
An overview and summary of the research results is given in our white paper at https://perun.network/pdf/Perun2.0.pdf.

**Software:** 
The main repository of the _go-perun_ library is at https://github.com/hyperledger-labs/go-perun.
It currently features an Ethereum blockchain backend and supports generalized state channels on a single backend.
In 2020, we joined the hyperledger foundation together with our industry partner BOSCH, with the goal of growing an open-source community around the Perun project.

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 6.5 months
* **Total Costs:** 60,000 USD

### Milestone 1 — Wallet Abstraction

* **Estimated duration:** 1.5 months
* **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Wallet abstraction | We provide an implementation of the wallet abstraction for Polkadot. The details are given in *Project Details*. |


### Milestone 2 — Channel Abstraction

* **Estimated Duration:** 2.5 months
* **Costs:** 25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Channel abstraction | We provide an implementation of the channel abstraction for Polkadot. The details are given in *Project Details*. |


### Milestone 3 — End-to-end tests

* **Estimated Duration:** 1 month
* **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a developer can use Perun channels on Polkadot, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | End-to-end tests | We provide end-to-end tests that test the interplay between the new components. |


### Milestone 4 — Improve Pallet

* **Estimated Duration:** 0.5 months
* **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Weight estimation | Currently, [perun-polkadot-pallet](https://github.com/perun-network/perun-polkadot-pallet) functions have a dummy constant weight. We will provide reasonable weight estimations, e.g., using [benchmarking](https://substrate.dev/docs/en/knowledgebase/runtime/benchmarking). This will require adapting our test setup. |
| 2. | Code Coverage | We provide code coverage results and add a code coverage badge to [perun-polkadot-pallet](https://github.com/perun-network/perun-polkadot-pallet). |


### Milestone 5 — CLI Demo

* **Estimated Duration:** 1 month
* **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article or workshop that explains what was done as part of the grant. |
| 1. | CLI Demo | We provide a Perun Polkadot CLI Demo similar to [perun-eth-demo](https://github.com/perun-network/perun-eth-demo). The demo  lets users experiment with the technology and send payments between each other via a Perun Channel on Polkadot. |


## Future Plans

* **Open source.** We are working on building an open-source community around the project. For this, we joined the Hyperledger foundation with Bosch as our enterprise partner.
* **Collaboration.** We are looking to extend our collaborations. As our library is written in Go, we envision that it is suitable for resource constrained devices in the IoT space and for high-performance applications.
* **Perun Network.** We consider building a liquidity network that enables fast and cheap asset swaps across a variety of blockchains.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
After Dieter Fishbein joined the Web3 Foundation, he reached out to Sebastian Stammler in June 2020.

**Other project funding.**
The Perun project is supported by the German Ministry of Education and Science (BMBF) through a Startup Secure grant.
