# W3F Grant Proposal

- **Project Name:** Perun App Channels
- **Team Name:** [Perun](https://perun.network)@[PolyCrypt](https://polycry.pt)
- **Payment Address:**  0x308Ca526B009e10Ef0482C38A3370BFb44A32908 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3


## Project Overview :page_facing_up:

This proposal is a follow-up to the [Perun Payment Channels Pallet](https://github.com/w3f/Grants-Program/blob/master/applications/perun_channels.md) and its [integration with the Perun SDK](https://github.com/w3f/Grants-Program/blob/master/applications/perun_channels-integration.md).
With these two completed grant projects, Perun's two-party payment channels are now available within the Polkadot ecosystem.

We now propose to extend the feature set of Perun Channels on Polkadot by enabling so-called *app channels*.
App channels allow to program arbitrary transaction logic into the channel and thereby enable scalable off-chain transactions for more complex use cases.
More precisely, app channels allow to enforce channel state transitions according to an arbitrary transition logic defined at channel opening, even if there is no full off-chain consensus.

For example, game developers such as [Ajuna Network](https://ajuna.io) are interested in app channels for realizing latency-sensitive gaming logic on top of a blockchain backend.
Another use case for app channels is realizing a custom swap logic for buying digital goods as demonstrated in our Ethereum-based project [perun-credential-payment](https://github.com/hyperledger-labs/perun-credential-payment).

We have seen a growing demand for gaming applications within the web3 ecosystem and hope to provide a benefit to the web3 gaming developer community currently struggling with latency issues. We have partnered with Ajuna Network for writing this grant to combine PolyCrypt’s technical expertise in state channel technology with the real requirements of the gaming infrastructure provider Ajuna Network.

### Overview

**Background.** [Perun state channels](https://perun.network/wp-content/uploads/Perun2.0.pdf) enable fast and cheap transactions with arbitrary transaction logic on and across blockchains.
They are based on peer-reviewed research that has been published at top conferences and is being implemented in the form of the open-source library [*go-perun*](https://github.com/perun-network/go-perun) written in Go. One of the library's main features is its blockchain-agnostic design, which means that the core library components do not depend on a concrete blockchain implementation, but are rather implemented against abstract interfaces.
This allows to integrate arbitary blockchain backends with the go-perun library. Currently, we have backends for Ethereum, Cosmos, and Polkadot. The development of the Polkadot backend was supported by the Web3 Foundation.

[Ajuna Network](https://ajuna.io) develops a decentralized gaming platform, that closes the gap to the traditional gaming industry by integrating the worlds leading game development engines with blockchain. One goal is to minimize the latency in game interactions to provide a user experience, without compromising on gameplay. The substrate integration with unity has also been supported by Web3 Foundation Grants.

**Proposal.** We propose to enable app channels for the Perun Polkadot backend in a way that the technology can later be integrated with the Ajuna platform.
Further, we plan to build a demonstrator that shows how to develop a simple game (e.g., “Connect Four” or "Tic-tac-toe") using Perun app channels.
We propose to release this work open-source under the Apache 2.0 license.

Below we show an overview of the involved components.
The Go-Perun client contains the Perun protocol logic and the logic for interacting with the Perun Pallet deployed on a Polkadot Parachain.
The Perun Pallet implements the on-chain component of the Perun protocol.
The Ajuna Pallet represents the app registry that contains the game logic used by the app channels.

![Perun App Channel Components](https://perun-network.github.io/static/perun/polkadot/perun-polkadot-ajuna.png)

### Project Details

#### Architecture of *go-perun*

The _go-perun_ library is written in Go. It consists of a set of go packages whose relationships are visualized in the architecture diagram below and we will explain in the following. The library design follows the dependency inversion principle which means that components are defined as abstract interfaces that can be instantiated as needed for a given application environment.
In particular, *go-perun* supports different blockchain backends and we have already implementations for Ethereum, Cosmos, and Polkadot with different sets of features available.
For Polkadot, the feature set is currently limited to two-party payment channels and we want to extend it to support app channels, which have customizable transaction logic.

At the core of the *go-perun* library lies the `client` package, which holds the channel client and an implementation of the channel protocols. For communication with other clients, the client package uses the `wire` package, which is an abstract definition of the communication layer that is to be instantiated with a concrete implementation suitable for the given application context.
Furthermore, the client package interfaces with the `wallet` package and the `channel` package. The `wallet` package and the `channel` package lie at the core of any blockchain backend implementation. The `wallet` package provides functionality for account management and signature generation. The `channel` package provides the core data structures and functionality for interacting with the blockchain.
Besides that, the library contains the `persistence` package and the `log` package, which are abstractions for persistence and logging functionality whose implementations can be injected depending on the application context.

![go-perun Architecture](https://perun.network/static/perun-arch_polkadot.png)

#### Current state of implementation

A [state](https://github.com/hyperledger-labs/go-perun/blob/9349d86249e080d3fc93d8d5ac82197a0c07f0d0/channel/state.go#L32) in *go-perun* is represented as a data structure as below.

```go
type State struct {
  // ID is the hash of the channel parameters and uniquely identifies the channel.
  ID ID
  // Version is the channel state's version counter and defines what is the latest state.
  Version uint64
  // Allocation is the current allocation of channel assets.
  Allocation
  // Data is the app-specific data.
  Data Data
  // IsFinal indicates that the channel is in its final state.
  IsFinal bool
}
```

The channel [parameters](https://github.com/hyperledger-labs/go-perun/blob/9349d86249e080d3fc93d8d5ac82197a0c07f0d0/channel/params.go#L60) are immutable and have the following data structure.

```go
type Params struct {
	// ChallengeDuration in seconds during disputes
	ChallengeDuration uint64
	// Parts are the channel participants
	Parts []wallet.Address
	// App identifies the application that this channel is running. It is
	// optional, and if nil, signifies that a channel is a payment channel.
	App App
	// Nonce is a random value that makes the channel's ID unique.
	Nonce Nonce
}
```


The `App` field in the parameters and the `Data` field in the state are app channel specific.
The `App` field holds the unique application identifier which the Pallet will use to determine the state transition logic.
The `Data` field can be used to maintain arbitrary app-specific state.

In the current version of the [Polkadot Pallet](https://github.com/perun-network/perun-polkadot-pallet/blob/master/src/types.rs), we started with payment channels only, which is why it does not include the `App` field in the parameters and the `Data` field in the state.

```rust
pub struct Params<Nonce, PK, Seconds> {
	pub nonce: Nonce,
	pub participants: Vec<PK>,
	pub challenge_duration: Seconds,
}

pub struct State<ChannelId, Version, Balance> {
	pub channel_id: ChannelId,
	pub version: Version,
	pub balances: Vec<Balance>,
	pub finalized: bool,
}
```

Furthermore, the Perun client has an app-channel specific method [`client.ForceUpdate`](https://github.com/hyperledger-labs/go-perun/blob/9349d86249e080d3fc93d8d5ac82197a0c07f0d0/client/adjudicate.go#L193), which will tell the client to enforce a channel update according to the app state transition logic in the case where there is no full off-chain consensus. The rules are implemented in the form of a valid transition function that defines what is a valid transition from one state to the next for the given actor. Below is an example for the case of Ethereum.

```
function validTransition(
	Channel.Params calldata params,
	Channel.State calldata from,
	Channel.State calldata to,
	uint256 actorIdx
) external pure;
```

To enable the force update logic on the client side, the blockchain backend needs to implement the `Progress` function, which is currently not the case for the [Polkadot backend](https://github.com/perun-network/perun-polkadot-backend/blob/1cf5c72ae46f387cacdf7083ca38da44db8ddfab/channel/pallet/adjudicator.go#L140).
A corresponding function must also be implemented on the Pallet as, for example, done in [Perun's Ethereum contract](https://github.com/hyperledger-labs/perun-eth-contracts/blob/abd762dc7d3271f797e304d8bb641f71f8c5c206/contracts/Adjudicator.sol#L184).
Furthermore, an interface must be defined that allows the Perun contract to interact with the valid transition logic that is defined in a different contract deployed by the app developer.

#### Scope of current proposal

As hinted above, we need to extend the Perun Pallet and the corresponding go module to support app channels.
We also want to build a demonstrator that shows how a simple game (e.g., *Connect Four*, *Tic-tac-toe*) can be played in an app channel with blockchain-backed assets at stake.

For the [**Pallet**](https://github.com/perun-network/perun-polkadot-pallet) the following must be done.

- Extend the Pallet's parameter definition to include a field holding an app identifier that can later be dereferenced by the Pallet.
- Extend the Pallet's state definition to include a field for the app data.
- Design a method for dereferencing an app identifier to a corresponding call to a valid transition function.
- Implement a `fn progress(cur: State, next: State)` function that allows forced execution.
- Extend the tests.

Below we show an updated version of the Pallet's state diagram with app channels enabled. Changes are highlighted in red.

![Perun App Channel State Diagram](https://perun-network.github.io/static/perun/polkadot/perun-polkadot-state-diagram.png)

For the [**Go module**](https://github.com/perun-network/perun-polkadot-backend) the following must be done.

- Implement the app identifier type.
- Extend the encoding and decoding of paramters to include the app identifier.
- Extend the encoding and decoding of a state to include app data.
- Implement the `Progress` function.
- Extend the tests.

For the **new demonstrator** this involves the following.

- Implement the game logic as part of a Polkadot pallet.
- Implement the game logic as part of an off-chain application.
- Implement a client application that provides an interface to playing the game.

### Ecosystem Fit

*Who is your target audience?*

- We target game developers and game studios that are looking for low latency user interactions as well as scaling their blockchain games even further in the Substrate ecosystem.
- We target developers of other applications and infrastructure projects, like exchanges or service providers that involve high transaction throughput and the off-chain execution of arbitrary logic.

*What needs does your project meet?*

**Low-latency.** Gaming applications can greatly benefit from low-latency transactions that go-perun can provide. With the proposed solution we estimate to lower the latency by a factor of 240 for substrate based chains and a factor of 10 for currently available layer 2 solutions such as Ajunas Trusted Execution Environment (TEE). The reduction in latency closes the gap to the traditional gaming industry and offers newgame designs and interactions being possible in a blockchain environment. 

**Flexibility.** With app channels, it is possible to execute arbitrary logic off-chain within a Perun channel. This can be used for many different use cases such as running a game logic within a channel or executing complex trading logic.

**Synergies.** PolyCrypt and Ajuna Network are interested in jointly advancing the state of art of state channels on Polkadot to leverage it for gaming applications. Ajuna Network is interested in integrating state channels into their existing infrastructure which allows other gaming developers in the ecosystem to leverage low-latency transactions. A showcase for a particular gaming application demonstrates the potential of the technology.

## Team :busts_in_silhouette:

### Team members

The PolyCrypt/Perun team consists of leading academic researchers in the off-chain space and experienced software developers of blockchain and cryptographic software. The team members include:

- **Prof. Sebastian Faust** (Co-founder, research lead) is a full professor at the Computer Science department of Technical University of Darmstadt, where he leads the applied cryptography and blockchain lab. He has published more than 60 academic papers in cryptography and blockchain technologies at leading venues for research in IT Security and Cryptography. He frequently serves in program committees of prestigious conferences including Eurocrypt, IEEE S&P and NDSS. For his work he received multiple awards including the Eurocrypt’14 best paper award and the DFG/FNP Copernicus prize 2020. His main scientific contributions to the blockchain space are the co-invention of the concept of Proofs of Space (on which the cryptocurrency Chia is based), the first formal analysis of BIP32 wallets, and extensive work on off-chain protocols. The latter includes the development of the Perun off-chain protocols published in a series of works at IEEE S&P, Eurocrypt and ACM CCS. These publications form the mathematical foundations for the Perun software development project that is currently funded by a BMBF grant for founding high-tech companies in the IT Security space. Sebastian Faust leads research at PolyCrypt and the protocols used in go-perun are based on his work.
- **Hendrik Amler** (Co-founder, CEO, team and project management, @tinnendo)
- **Dr. Matthias Geihs** (Software architect, researcher, @matthiasgeihs) currently leads the development of the go-perun library. He holds a PhD in Computer Science from TU Darmstadt and previously worked as an IT Security Specialist at Deutsche Börse Group.
- **Steffen Rattay** (Core Developer, @RmbRT)
- **Norbert Dzikowski** (Core Developer, @ndzik)
- **Philipp Lehwalder** (Developer, @cryptphil)

The Ajuna Network team consists of experienced software developers of blockchain and gaming software. The team members include:

- **Cedric Decoster** (Co-founder, CEO) Cédric has been a software engineer and solution architect for over 20 years and worked on enterprise applications in the Swiss banking sector. In his spare time, he has worked passionately on various blockchain and gaming projects for years. Cédric holds a bachelor’s degree in computer science.
- **André Schneider** (Co-founder, COO) André is a computer scientist who worked for the past 20 years in consulting, business analytics and finance positions in the Swiss banking and consulting sector. Next to his work, André is a passionate game developer and gamer. He holds degrees in computer science and banking & finance.
- **Nicholas Douzinas** (Co-founder, business development) Nicholas is an experienced entrepreneur and business development executive. After working at Deutsche Bank and GSK, Nicholas transitioned to the startup world and founded (crypto) companies on his own. He holds master’s degrees from Cass Business School and Imperial College London.
- **Eric Lim** (Senior Developer, Substrate, @cowboy-bebug)
- **Andy Bell** (Senior Developer, Substrate, @andyjsbell)
- **Jean Seong Bjorn Choe** (Senior Developer, C#/C++, @rnilva)
- **Dimitris Paxinos** (Senior Developer, C#/C++, @dimitrispaxinos)

### Contact

- **Contact Name:** Matthias Geihs
- **Contact Email:** matthias@perun.network
- **Website:** [polycry.pt](https://polycry.pt) , [perun.network](https://perun.network)

### Legal Structure

- **Registered Address:** PolyCrypt GmbH, c/o TU Darmstadt, Hochschulstraße 1, 64289 Darmstadt, Germany
- **Registered Legal Entity:** PolyCrypt GmbH, Handelsregister Darmstadt HRB 101219, VAT DE339864467

### Team's experience

The Perun team has extensive experience in applied cryptography and blockchain research as well as in software development. Our team members include the leading researchers on the Perun state channel research papers, which have been published at renowned conferences. Furthermore, our team includes experienced developers. Our team members are the main developers of the go-perun library and therefore provide over 2 years of experience specifically in developing software in the blockchain space.

Please see the section *Team members* for more details.

### Team Code Repos

- https://github.com/perun-network
- https://github.com/ajuna-network

See the section *Team members* for GitHub handles.

### Team LinkedIn Profiles

- https://www.linkedin.com/company/perun-network/
- https://www.linkedin.com/company/ajuna-network/

## Development Status :open_book:

### Perun

**Research.** The foundation for Perun State Channels was laid in “Perun: Virtual Payment Hubs over Cryptocurrencies”, [published at IEEE S&P 2019](https://ieeexplore.ieee.org/document/8835315), also available at [ePrint](https://eprint.iacr.org/2017/635). This is one of the most prestigious academic conferences in IT Security. An overview and summary of the research results is given in our [white paper](https://perun.network/wp-content/uploads/Perun2.0.pdf).

**Software.** The go-perun library is available at https://github.com/perun-network/go-perun. It features protocols for ledger channels, app channels, and virtual channels. There currently exist backends for Ethereum, Cosmos, and Polkadot, with different sets of features enabled.

### Ajuna

Lightpaper of Ajuna Network: [Ajuna Lightpaper](https://docsend.com/view/s/mg5y7nh3674xjqck).

Software development for Ajuna Network is at https://github.com/ajuna-network.

*SubstrateNetApi* is written in NETStandard2.0 to provide maximum compatibility for Unity3D.
Important This API is for the major release Substrate v3.0/0.9 – Apollo 14, for releases monthly-2021-10 and newer please refere to the Ajuna.NetApi
https://github.com/ajuna-network/SubstrateNetApi 

*Ajuna.NetApi* which was formerly called SubstrateNetApi is written in NETStandard2.0 to provide maximum compatibility for Unity. The substrate node finally exposes the type definitions in the metadata, enabling the API to be generated from scratch. That feature implied a refactoring of the implemented type logic.
https://github.com/ajuna-network/Ajuna.NetApi

*Ajuna .NET API Extension* for substrate test node:
https://github.com/ajuna-network/Ajuna.NetApiExt.

*Ajuna ASP .NET Core Extensions* to easily implement RESTful services using Substrate storages:
https://github.com/ajuna-network/Ajuna.AspNetCore.

*Ajuna Service Layer module* to easily implement substrate storage services:
https://github.com/ajuna-network/Ajuna.ServiceLayer.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** $90,000 USD

### Milestone 1 — Pallet Extension

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 30,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that describes the new functionality. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 1. | App identifier and data | We will extend the channel parameters to include an optional app identifier and the channel state to include an app data field. We will adapt existing code and tests to accomodate the changes.
| 2. | App registry | We will create an app registry abstraction that will be used for dereferencing `validTransition` calls to the respective application logic. For testing, we will need to implement a simple app registry as part of a pallet. We plan to coordinate with Ajuna to ensure that the app registry abstraction can later be integrated with their platform.
| 3. | Progress function | We will implement functionality for enforcing an app state transition without full off-chain consensus. This will require adapting the channel state machine and therefore also the existing Pallet state variables and functions. A corresponding new event type must be added.

### Milestone 2 — Backend Extension

- **Estimated duration:** 1.5 months
- **FTE:**  2
- **Costs:** 22,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that describes the new functionality. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 1. | Update backend | We will update the Polkadot backend to ensure that it is compatible with the latest release of go-perun.
| 2. | App identifier and data | We will extend the channel parameter encoding and decoding to include the app identifier. We will extend the channel state encoding to include an app data field. We will adapt existing code and tests to accomodate the changes.
| 3. | Progress function | We will implement the `Progress` function for the Polkadot backend so that it satisfies the client protocol requirements. We will adapt the event handler functionality to cope with the new event type.

### Milestone 3 — Demonstrator

- **Estimated duration:** 2.5 months
- **FTE:**  2
- **Costs:** 37,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that describes the new functionality. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article or hold a workshop that explains what was done as part of the grant. |
| 1. | Pallet game logic | We decide which game to showcase (e.g., "Connect Four", "Tic-tac-toe"). We will implement the on-chain game logic as part of a Pallet. This requires implementing the game rules and a method for decoding and encoding the game state onto a channel's app data field.
| 2. | Off-chain game logic | We will implement the off-chain game logic as part of a Go module that implements Go-Perun's `App` interface. This includes mirroring the game rules and state encoding used on-chain.
| 3. | Game client | We will implement a game client that allows users to play the chosen game with blockchain-backed assets using a Perun app channel. The client shall be written in Go using the Go-Perun SDK and have a command line user interface. We plan to coordinate with Ajuna to ensure that the game client is designed in a way such that it can later be ported to C# and be integrated with the Ajuna platform.


## Future Plans

With respect to integration into the game developer space, we plan to build a C# client to make Perun Channels accessible to even more developers.
If it is beneficial to the ecosystem a rust client will be added to the roadmap.

For the Perun library, we plan to further extend the set of supported blockchains.
We also focus on enabling interoperability between the supported blockchains.

The Perun project joined the Hyperledger Foundation in 2020 with the goal of building an open source community around the project, which is an ongoing process.

The vision of Ajuna Network is to lower the gap towards the traditional gaming industry by using and integrating different layer approaches and aggregating them into a single blockchain gaming infrastructure, which abstract the underlying technology as much as possible for the player, but maintains essential needs for games, like privacy, speed and compley game logic, while not comromising on gameplay.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Back in 2020, Dieter Fishbein motivated the Perun team to apply for a grant.
Since then, we have successfully completed two grant projects with the Web3 Foundation.

**Other project funding.**
The Perun project receives funding from the German Ministry of Education and Science (BMBF) through the *StartUpSecure* grants program.
