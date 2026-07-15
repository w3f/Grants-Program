# Spacewalk: a Stellar bridge

- **Team Name:** Pendulum
- **Payment Address:** [0x41826C59a853969DA6B819130E1c32A9fd7c94ba](https://etherscan.io/address/0x41826C59a853969DA6B819130E1c32A9fd7c94ba#tokentxns) (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/749#issuecomment-1740030612)

## Project Overview :page_facing_up:

### Overview

Spacewalk is a bridge between Substrate-based parachains and [Stellar](https://stellar.org) which enables asset transfers to and from Stellar. This grant application is for developing the _Spacewalk protocol and pallet_. The Spacewalk bridge is built by the team behind the [Pendulum](http://pendulumchain.org) network (an upcoming parachain that connects fiat tokens from across multiple blockchain ecosystems).

### Project Details

Spacewalk bridge is developed to be a decentralized and trustless bridge to Stellar. This bridge enables two main activities:

- **Deposit**: bridge any Stellar asset to Substrate-based chains. The tokens of the source asset are transferred to some dedicated **vault** in Stellar where they are locked. The bridge then mints wrapped tokens in the target chain and transfers them to the recipient account.
- **Withdrawal**: bridge wrapped tokens in Substrate-based chains to Stellar. First, the user instructs the bridge to burn wrapped tokens in the Substrate-based chain. Afterwards, an appropriate vault unlocks tokens and transfers them to some target account.

Stellar is not smart contract capable – therefore we follow the recommendation laid out in the [Polkadot documentation](https://wiki.polkadot.network/docs/learn-bridges#via-higher-order-protocols) and base our bridge design on XCLAIM, which is based on the following four core features:

- Implement a chain relay for Stellar in the bridge pallet
- Employ collateralization in order to ensure that the vault exhibits good behavior
- Ensure that the economic value of the collateral exceeds the value of the vault
- Enable a decentralized network of vaults

XCLAIM has been implemented and further improved by [Interlay](https://interlay.io/) for the open source Bitcoin bridge _interBTC_. Spacewalk is based on the interBTC implementation. It differs from interBTC as follows:

- Currently Stellar does not use Merkle trees inside its blocks. Therefore, there is no efficient way to prove that a transaction is included in a block given only the block header – a prover would require to complete the complete set of transactions instead of a Merkle path.
- Stellar does not employ Nakamoto consensus but a custom consensus algorithm called [Stellar Consensus Protocol](https://www.stellar.org/papers/stellar-consensus-protocol). For that reason it is not possible to infer from sequences of block headers alone which sequence is valid – for Nakamoto consensus this is simply the sequence with the highest amount of work.
- Stellar supports custom assets: every account holder can create new assets and mint their own tokens. Spacewalk supports to bridge any Stellar asset to the Substrate chain. This implies that the Spacewalk pallet can dynamically create and mint new assets that are not known beforehand.

The first two differences imply that there is no efficient way to implement an SPV client and a chain relay for Stellar. Spacewalk will address this by replacing the chain relay with an oracle for Stellar.

**Architecture**

![Stellar Bridge Web3 Grant(5)](https://user-images.githubusercontent.com/15174476/150945211-31393eef-9e86-425d-921a-a48e3fd7af70.png)

The architecture of the bridge consists of the following components:

- **Vaults**: this is a set of escrow accounts used to lock assets in Stellar. Their behavior is defined in XCLAIM and interBTC. In Spacewalk they have an additional property: each vault has an allow list of assets that it can lock and support for bridging operations between Stellar and the Substrate chain. This allow list is implemented through [trustlines](https://developers.stellar.org/docs/issuing-assets/anatomy-of-an-asset/#trustlines) of the Stellar account. There can be at most 1000 supported assets per vault due to limitations in Stellar. Stellar users initiate a deposit by sending tokens to an appropriate vault, which they request from the bridge pallet prior to the deposit. Likewise vaults will unlock and send tokens back to Stellar accounts during a withdrawal. Every vault needs to lock a certain amount of DOT or KSM (or related) tokens as collateral with the bridge pallet. These tokens are slashed in case the vault misbehaves.
- **Bridge Pallet**: this is the main component of the Spacewalk bridge that implements all logic on the side of the Substrate-based chain. Its behavior is based on interBTC. It is particularly responsible for minting tokens during deposits and burning tokens during withdrawals. It is able to support any Stellar asset by employing the [Tokens](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/tokens) and [Currrencies](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/currencies) pallets of the Substrate Open Runtime Module Library. The storage of the bridge pallet maintains the complete state that is required for the bridge to work correctly. This state contains (among others): the account ids of the vaults, the asset allow lists of each vault and book keeping information about the state of the Stellar network.
- **Stellar Oracle**: is a decentralized system that provides information about the state of the Stellar network to the bridge pallet. In interBTC this is implemented through a Bitcoin chain relay. However, for reasons explaned above we cannot implement a chain relay for Stellar in the same way. The Stellar oracle is trustless and reliable and its functionality is based on specific unique aspects of Stellar:
  - The Stellar network has multiple levels of tiers, where the nodes in _Tier 1_ enjoy the highest level of trust of its peers. There are currently 23 Tier 1 nodes; this set and its structure is rather static and only changes rarely. It only ever changes through a voting process. We will incorporate complete information about the Tier 1 network in the bridge pallet.
  - Every Stellar node has a static signing key pair and signs messages that it gossips to the network. Particularly, every node announces through a signed message that a block has been finalized. The decentralized oracle will forward these signed messages from Tier 1 nodes to the bridge pallet. This way the bridge pallet can reliably infer what Stellar blocks are finalized.

**Out of scope**

The following aspects are out of scope of the current proposal and subject to future applications:

- Stellar protocol updates that are required to implement a chain relay/light client/simplified payment verification for Stellar as a Substrate pallet

### Ecosystem Fit

The Spacewalk bridge is the first bridge between the Stellar network and the Polkadot/Kusama ecosystem, which opens up a flow of stable tokens from the Stellar network into the Polkadot/Kusama ecosystem and, simultaneously, allow any Substrate-based blockchains to implement a direct Stellar bridge.

As part of the Pendulum goal of bringing as much fiat-based token liquidity to the parachain ecosystems, Spacewalk plays a central role. Furthermore, the entire community can benefit from this bridge by innovating on the open source code.

Currently, we are not aware of any projects in the Substrate/Polkadot/Kusama ecosystem that are building a bridge to the Stellar network, but similar bridges are being built for Ethereum layer 2 networks, such as the [Newscrypto](https://bridge.newscrypto.io/) bridge between Polygon and Stellar.

## Team :busts_in_silhouette:

### Team members

- Meinhard Benn, Chairman
- Dr. Torsten Stüber, CTO
- Gonza Montiel, Full stack engineer

### Contact

- **Contact Name:** Erasmus Hagen
- **Contact Email:** erasmus@satoshipay.io
- **Website:** [pendulumchain.org](https://pendulumchain.org/)

### Legal Structure

- **Registered Address:** The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, St. Lucia.
- **Registered Legal Entity:** Pendulum Development Ltd.

### Team’s experience

Meinhard Benn

- Involved in blockchain since 2011
- One of the first miners of the Ethereum network
- SatoshiPay developed one of the first payment channels in Bitcoin

Dr. Torsten Stüber

- Ph.D. in theoretical Computer Science
- 7 year academic researcher and lecturer in
  - formal languages, automata theory, complexity theory, computational logic, natural language processing, machine learning, cryptography
- author of a [WASM cryptography library](https://github.com/TorstenStueber/TweetNacl-WebAssembly)

Eng. Gonzalo Montiel

- Computer Science Engineer
- Degree orientation in production systems and automation
- 10 years in the software industry as: Core/backend developer, technical Leader, team manager
- 1 year as researcher in computer vision

### Team Code Repos

- [https://github.com/pendulum-chain](https://github.com/pendulum-chain)
- [https://github.com/pendulum-chain/pendulum](https://github.com/pendulum-chain/pendulum)
- [https://github.com/pendulum-chain/pendulum-prototype](https://github.com/pendulum-chain/pendulum-prototype)

Members:

- [https://github.com/gonzamontiel](https://github.com/gonzamontiel)
- [https://github.com/TorstenStueber](https://github.com/TorstenStueber)

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/meinhard/](https://www.linkedin.com/in/meinhard/)
- [https://www.linkedin.com/in/torstenstueber/](https://www.linkedin.com/in/torstenstueber/)
- [https://www.linkedin.com/in/gonzamontiel/](https://www.linkedin.com/in/gonzamontiel/)

## Development Status :open_book:

A single-node prototype of the bridge has been developed. See the link:

- [Prototype bridge GitHub repo](https://github.com/pendulum-chain/pendulum-prototype)

A detailed bridge concept is currently being researched (described in this grant application)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 Months
- **Full-Time Equivalent (FTE):** 0.5
- **Total Costs:** 30,000 USD

### Milestone 1 – Multi asset support

- **Estimated duration:** 1 month
- **FTE:** 0.5
- **Costs:** 3,000 USD

| Number | Deliverable              | Specification                                                                                                                                                                          |
| -----: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                  | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                   |
|    0b. | Documentation            | We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge. |
|    0c. | Testing Guide            | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                      |
|    0d. | Article                  | We will publish an article that explains how we extend interBTC to support multiple Stellar assets and that provides an overview of the upcoming milestones of the protocol.           |
|     1. | Protocol specification   | The protocol will describe how vaults need to behave in order to support multiple Stellar asset.                                                                                       |
|    2a. | Multi asset deposit      | Add support for a deposit operation involving any possible Stellar asset.                                                                                                              |
|    2b. | Multi asset withdrawal   | Add support for a withdrawal operations involving any possible Stellar asset.                                                                                                          |
|    2c. | Stellar asset allow list | 1) Allow vaults to register the set of allow listed Stellar assets with the Spacewalk pallet. 2) Allow users to query vaults and their supported assets from the Spacewalk pallet.     |

### Milestone 2 – Stellar oracle

- **Estimated duration:** 2 months
- **FTE:** 1
- **Costs:** 12,000 USD

| Number | Deliverable              | Specification                                                                                                                                                                                                              |
| -----: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                  | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                       |
|    0b. | Documentation            | We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge.                                     |
|    0c. | Testing Guide            | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                          |
|    0d. | Article                  | We will publish an article that explains the completed Spacewalk protocol and pallet that we built as part of the grant.                                                                                                   |
|     1. | Protocol specification   | The protocol will specify how the Stellar oracle behaves and what messages it forwards to the bridge pallet.                                                                                                               |
|     2. | Stellar oracle consensus | The bridge pallet processes information received from the oracle, which comprises signed messages from Tier 1 Stellar nodes. This is used to reliably find consensus about finalized Stellar blocks and incoming deposits. |

### Milestone 3 – Multi asset collateral management

- **Estimated duration:** 2.5 months
- **FTE:** 1
- **Costs:** 15,000 USD

| Number | Deliverable              | Specification                                                                                                                                                                          |
| -----: | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                  | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                   |
|    0b. | Documentation            | We will provide both inline documentation of the code and a basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge. |
|    0c. | Testing Guide            | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                      |
|     1. | Protocol specification   | The protocol will describe how vaults need to behave in case of vault liquidations involving multiple Stellar assets.                                                                  |
|     2. | Monitoring of collatoral | The bridge pallet monitors whether vaults need to be liquidated. This requires to take all locked tokens for every supported token of a specific vault into account.                   |



## Future Plans

This application covers the open source Spacewalk pallet and API/protocol definition. A fully functioning instance of a Spacewalk bridge will be implemented in parallel for Pendulum. With close connections in the Stellar ecosystem, Pendulum will encourage participation in the bridge network through key partnerships.

The Spacewalk project grows beyond the first version alongside the community of users and open source contributors, as we have seen interest in both the Stellar and Substrate communities for such a bridge. Pendulum itself will be the first use case for the bridge and will naturally justify further investment in maintenance and expansion.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

**Any other grants?** The Pendulum prototype was supported with a grant from the Stellar Development Foundation.
