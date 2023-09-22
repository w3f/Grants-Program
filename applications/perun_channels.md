# Perun Channels

* **Team Name:** Perun@PolyCrypt
* **Payment Address:** 0x63DcE2cB0FeA77f4E55d01569583a40e17448B4b (DAI)

## Project Overview :page_facing_up:

### Overview

**Background.** Perun state channel technology enables fast and cheap transactions with arbitrary transaction logic on and across blockchains.
The technology is based on peer-reviewed research that has been published at top conferences and is being implemented in the form of the open-source library _go-perun_ written in Go.
One of its main features is its blockchain-agnostic design, which means that most parts of the library do not depend on a concrete blockchain implementation, but are rather implemented against abstract blockchain backend components. Currently the library comes with an Ethereum backend.

**Proposal.** We want to provide a Polkadot backend for the _go-perun_ library in the form of a Substrate Pallet and a corresponding client integration, thereby enabling Polkadot Blockchains to benefit from the Perun channel technology.
We view this as the first step towards enabling the full power of Perun channel technology.
In the future, we envision to provide cross-chain functionality for establishing channels between two Polkadot chains, and potentially in the further future even between a Polkadot chain and a non-Polkadot chain, such as Ethereum. We propose to release this work open-source under the Apache 2.0 license.

### Project Details

The _go-perun_ library is written in Go. At the core, it consists of a set of go packages whose relationships are visualized in the architecture diagram below and we will explain in the following. The library design follows the dependency inversion principle which means that many of the packages are defined as abstract interfaces that can be implemented depending on the given application context. This allows us to swap out the blockchain backend implementation of Ethereum for a backend implementation of Polkadot, or the communication layer from one that uses a simple TCP/IP dialer to one which is based on `libp2p` without having to change any of the other components.

#### Architecture of go-perun

In the following we give an overview of main packages and their functionality.
At the core of the library lies the `client` package, which represents a channel client and holds the core protocol logic. For communication with other clients, the client package uses the `wire` package, which is an abstract definition of the communication layer that is to be instantiated with a concrete implementation suitable for the given application context.
Furthermore, the client package interfaces with the `wallet` package and the `channel` package. The `wallet` package and the `channel` package lie at the core of any blockchain backend implementation. The `wallet` package provides functionality for account management and signature generation. The `channel` package provides the core data structures and functionality for interacting with the blockchain.
Besides that, the library contains the `persistence` package and the `log` package, which are abstractions for persistence and logging functionality whose implementations can be injected depending on the application context.

![go-perun Architecture](https://perun.network/static/perun-arch_polkadot.png)

In essence, implementing a Polkadot backend for _go-perun_ means implementing the `wallet` and `channel` abstractions for Polkadot.
On the one hand, this involves implementing off-chain functionality in Go as part of the core _go-perun_ library. On the other hand, it also involves implementing on-chain functionality in Rust as part of a Polkadot Substrate Pallet.
For communication between the off-chain and on-chain components we intend to use the Go Substrate RPC client.
In the following we give more detail on relevant components for this project.

* **Wallet abstraction.**
Implementing the wallet abstraction requires the implementation of the account type, the address type, and the wallet type.
This involves implementing off-chain signature generation for arbitrary data such that the signatures can be verified on-chain.

* **Channel abstraction.** Implementing the channel abstraction requires the implementation of the channel core types and the core channel functionality.
This involves implementing encoding and decoding of channel states off-chain and on-chain, and implementing the communication to the Polkadot Parachain nodes via the Go Substrate RPC client. The on-chain logic comprises channel deposit and withdrawal as well as the dispute logic. The implementation of the dispute protocol will need particularly extensive testing.

#### Protocol overview

We give a brief overview of the main channel protocols.

* **Opening.** Users open a channel between each other by first agreeing on an initial state and then depositing corresponding funds into the channel. Here and in the following, by agreeing we mean to provide a signature on the state.
* **Update.** Users update a channel state by mutually agreeing on an updated state.
* **Dispute.** If a final state of a channel cannot be agreed off-chain, a user registers a dispute by sending a mutually signed state to the blockchain.
A user can also overwrite an existing state dispute by providing a newer version of the state that is mutually signed within a designated refutation time period.
* **Settlement.** Users can settle the channel in two ways. In the collaborative case, they were able to agree on a final state off-chain and the settlement can be done without prior state dispute.
In the non-collaborative case, a final state could not be agreed on. In this case, users need to wait until the refutation time period has passed before they can settle the channel.
Once the channel is settled, the funds are redistributed according to the channel outcome.

#### Scope of current proposal

Due to the time and resource constraints of the grant format, we limit the scope of the current proposal to implementing the on-chain part of the Polkadot backend for payment channels.
This involves implementing a Substrate Pallet with the following:
* Data structures
  * `Params`: The immutable parameters defining a channel, i.e., the channel participants, the nonce, and the challenge duration.
  * `State`: The mutable state of a channel, i.e., the version counter, the balances, and the final flag.
  * `Deposits`: A mapping that describes the amount of funds deposited by channel and participant.
  * `StateRegister`: A mapping that holds the registered channel states by channel identifier.
* Functionality
  * `fn deposit(channel: ChannelId, asset: Asset)`: Deposits a given amount of assets into a channel.
  * `fn dispute(params: Params, state: State)`: Disputes a channel state on the blockchain.
  * `fn settle(params: Params, state: State)`: Settles a channel and distributes the funds according to the outcome.

The following aspects are **not covered** by this proposal and are subject to future applications:
* Off-chain component, i.e., the Golang component that connects the on-chain logic with the client logic.
* App channels, i.e., channels with arbitrary and enforceable transaction logic.
* Sub-channels or virtual-channels, i.e., channels that are funded off-chain from other channels.

In the further future we plan to extend the functionality towards channels across different Polkadot chains, and potentially even channels between a Polkadot chain and a non-Polkadot chain.

### Ecosystem Fit

**Where and how does your project fit into the ecosystem?**

**Peer-to-peer microtransactions.** Polkadot scales better than previous generation blockchains like Bitcoin or Ethereum, but there are limits to the scalability of Polkadot. For example, realizing pay-per-use applications may require the network to handle thousands of transactions per second. Moreover, in certain use cases (e.g., microtransactions) finality has to be instantaneous. This is where channel technology comes into play. With state channels, transactions can be offloaded from the network and performed peer-to-peer. Due to the support for generalized channels, _go-perun_ also offers the ability to realize arbitrary logic within a channel. For example, this can be used to build a real-time game with financial incentives, where based on the rules of the game and the game state, transactions between the players are performed.

**Fast and cheap cross-chain transactions.** Polkadot has already built in support for cross-chain transactions within the Polkadot network. However, these have to be routed over the relay chain, which may take some time and involve some transaction fee. Perun virtual channels enable a shortcut for sending transactions across networks. The idea is that if funds can be preallocated at liquidity pools in the respective networks, then users can deposit into the liquidity pool on one network, and withdraw from the liquidity pool on the other network. The channel technology provides the basis for this to happen conveniently and securely for all involved parties.

**Modularity.** The architecture of _go-perun_ makes extensive use of dependency inversion to allow for maximal modularity and useability in existing projects. For example, this allows for injecting the off-chain communication layer, the logging component, and the persistence component depending on the application context.

**Synergies.** Thanks to the blockchain-agnostic design, projects using _go-perun_ can benefit from synergy effects in the _go-perun_ ecosystem. When new blockchain backends are added to the framework, it becomes rather easy to also extend such projects to these new blockchains. For example, Bosch Research is developing a [dedicated state channels node](https://github.com/hyperledger-labs/perun-node/) that uses _go-perun_. Once a Polkadot backend exists, this node can be extended to also support Polkadot. As such, investing in a new blockchain backend for _go-perun_ also has the potential for secondary beneficial effects on the Polkadot ecosystem.

**Who is your target audience?**
**What need(s) does your project meet?**

We target the following user groups:

1) We target application developers that are in search of scaling their blockchain application even further, for example, in order to realize pay-per-use applications.
2) We target traders and other DeFi users that need a way to quickly transfer funds from one network to another.
3) We target developers of infrastructure projects, like exchanges or service providers that involve high transaction throughput.

**Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

We are aware of _cChannel-substrate_, which is a channel project on Polkadot by Celer. We differentiate ourselves from cChannel-substrate as follows:

1) _cChannel-substrate_: does not include a client implementation.
This means that the whole off-chain protocol implementation is still to be done on their side. _go-perun_: Thanks to the unique blockchain-agnostic design of _go-perun_, _go-perun_ features an abstract implementation of the off-chain protocols and only the blockchain-specific parts of the client need to be implemented.
2) _cChannel-substrate_: focuses on payment channels.
_go-perun_: provides generalized state channel functionality.
3) _cChannel-substrate_: does not allow transactions across chains.
_go-perun_: is designed for enabling cross-chain transactions in the future.

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
* **Website:** <https://polycry.pt/>, <https://perun.network/>

### Legal Structure

* **Registered Address:** PolyCrypt GmbH, c/o TU Darmstadt, Hochschulstraße 1, 64289 Darmstadt, Germany
* **Registered Legal Entity:** PolyCrypt GmbH, Handelsregister Darmstadt HRB 101219, VAT DE339864467

### Team's experience

Our team has extensive experience in applied cryptography and blockchain research as well as in software development. Our team members include the leading researchers on the Perun state channel research papers, which have been published at renowned conferences.
Furthermore, our team includes experienced developers. Our team members are the main developers of the _go-perun_ library and therefore provide over 2 years of experience specifically in developing software in the blockchain space.

### Team Code Repos

A collection of our repositories can be found at <https://github.com/perun-network/>.

Since mid 2020, the Perun Framework is a Hyperledger Labs project. The _go-perun_ library is available at <https://github.com/hyperledger-labs/go-perun> and the Ethereum smart contracts are available at <https://github.com/hyperledger-labs/perun-eth-contracts>.

### Team LinkedIn Profiles

Our company LinkedIn profile is available at <https://www.linkedin.com/company/perun-network/>.

## Development Status :open_book:

**Research:**
The foundation for Perun State Channels was laid in “Perun: Virtual Payment Hubs over Cryptocurrencies”, published at IEEE S&P 2019, <https://ieeexplore.ieee.org/document/8835315>, also available at  <https://eprint.iacr.org/2017/635>. This is one of the most prestigious academic conferences in IT Security.
An overview and summary of the research results is given in our white paper at <https://perun.network/pdf/Perun2.0.pdf>.

**Software:**
The main repository of the _go-perun_ library is at <https://github.com/hyperledger-labs/go-perun>.
It currently features an Ethereum blockchain backend and supports generalized state channels on a single backend.
In 2020, we joined the hyperledger foundation together with our industry partner BOSCH, with the goal of growing an open-source community around the Perun project.

## Development Roadmap :nut_and_bolt:

### Overview

The focus of this application is to provide the on-chain functionality  of the go-perun Polkadot backend in the form of a Substrate Pallet.
We plan to provide the corresponding off-chain functionality written Go in the context of a follow-up grant application.

* **Estimated Duration:** 3 months
* **Total Costs:** $29,999 USD

### Milestone 1 — Setup & Core Types & Channel opening

* **Estimated Duration:** 6 weeks
* **Costs:** $15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Setup | We provide a repository that forms the basis of our deliverables.
| 2. | Core Types | We provide the core data types, as specified in _Project Details_.
| 3. | Open/Deposit | We provide the channel opening (i.e., deposit) functionality as specified in _Project Details_.

### Milestone 2 — Channel disputes & settlement

* **Estimated Duration:** 6 weeks
* **Costs:** $14,999 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article or host a workshop that explains what was done as part of the grant.
| 1. | Dispute | We provide the channel dispute functionality as specified in _Project Details_.
| 2. | Settlement | We provide the channel settlement functionality as specified in _Project Details_.

## Future Plans

* We are working on building an open-source community around the Project. For this, we joined the Hyperledger foundation with Bosch as our enterprise partner.
* We are looking to extend our industry collaborations. As our library is written in Go, we envision that it is suitable also for resource constrained devices in the IoT space.
* We are considering using Perun channels for building a hub infrastructure that allows transferring liquidity between different networks quickly and cheaply. For that we are also considering applying for another grant.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
After Dieter Fishbein joined the Web3 Foundation, he reached out to Sebastian Stammler in June 2020 regarding grants, finally resulting in this application.

**Other project funding.**
The project is partially supported by the the German Ministry of Education and Science (BMBF) through a Startup Secure grant.
