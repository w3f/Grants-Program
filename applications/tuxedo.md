# Tuxedo

- **Team Name:** Off-Narrative Labs
- **Payment Address:** 0x5a335908df9D2C47304338E3b744579Ed7C6a64d (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 :baby_chick:

## Project Overview :page_facing_up:

Develop Substrate runtimes based on the UTXO model.

### Overview

Tuxedo is a framework for developing Substrate runtimes based on the Unspent Transaction Output (UTXO) model. The letters utxo are contained in the word tuxedo, hence the name.

In the broader blockchain space, there are essentially two models for creating state machines, or runtimes, as they are known in the Substrate ecosystem. Those two models are the **Account System** as seen in Ethereum, Polkadot, and others, and the **UTXO System** as seen in Bitcoin, Monero, Cardano, and others. Currently the defacto way to write Substrate runtimes is with FRAME, which is based on the account system, and any project wishing to build on the utxo system is left to write a runtime from scratch or find a home in another ecosystem. Tuxedo would be a couterpart to FRAME based on UTXOs rather than accounts.

Tuxedo would make the UTXO model more visible and accessible in the Substrate ecosystem and begin to create a diversity of runtime frameworks in addition to FRAME, a trend that we hope will continue beyond Tuxedo itself.

### Project Details

The primary advantage of UTXOs is that they are highly parallelizable. This fits well in Polkadot's multichain ecosystem where parachains execute and communicate asynchronously, and will be an even bigger advantage if (hopefully when) DAG based chains become popular, a trend that is already kicked off with projects like Aleph Zero, and many others outside the Polkadot ecosystem, including Hedera Hashgraph, Nano, and Casper Labs.

The UTXO data model is relatively well established by Bitcoin as well as research from IOHK in their [Abstract Model](https://eprint.iacr.org/2018/469.pdf)  and [Extended UTXO Model](https://files.zotero.net/eyJleHBpcmVzIjoxNjc1MjAwMTAwLCJoYXNoIjoiYTVhYmY4NjdiY2E2YzdkNTNjODkwNWNmZDZhYmM5MjAiLCJjb250ZW50VHlwZSI6ImFwcGxpY2F0aW9uXC9wZGYiLCJjaGFyc2V0IjoiIiwiZmlsZW5hbWUiOiJDaGFrcmF2YXJ0eSBldCBhbC4gLSAyMDIwIC0gVGhlIEV4dGVuZGVkIFVUWE8gTW9kZWwucGRmIn0%3D/ddc74b205ca4890fe1d87770bee15dd5a82bfed1ad8f84217cbf407686958498/Chakravarty%20et%20al.%20-%202020%20-%20The%20Extended%20UTXO%20Model.pdf). Our primary tasks would be to implement this in Rust and expose a standard API for chain developers to build on. This is analogous to the API exposed by FRAME System and the Pallets built on top.

Our core data types follow similarly, to the IOHK research cited above. The primary differences are that we do not assume a native cryptocurrency and rely on Tuxedo **Pieces** (analogous to FRAME Pallets) to provide the validation logic, rather than the UTXOs themselves.

```rust
/// A UTXO transaction specifies some inputs to be consumed, and some new outputs to be created.
struct Transaction {
  /// The inputs refer to currently existing unspent outputs that will be consumed by this transaction
  inputs: BTreeSet<Input>,
  /// Similar to inputs, Peeks refer to currently existing utxos, but they will be read only, and not consumed
  peeks: BTreeSet<Input>,
  /// The new outputs to be created by this transaction.
  outputs: Vec<Output>,
}

/// A single output of a transaction which has an owner and some associated data
struct Output {
  /// The address that owns this output. Based on either a public key or a Tuxedo Piece
  owner: Address,
  /// The data associated with this output. In the simplest case, this will be a token balance, but could be arbitrarily rich state.
  data: Vec<u8>,
}

/// A single input references the output to be consumed or peeked at and provides some witness data, possibly a signature.
struct Input {
  /// A previously created output that will be consumed by the transaction containing this input.
  output: OutputId,
  /// A witness proving that the output can be consumed by this input. In many cases including that of a basic cryptocurrency, this will be a digital signature.
  redeemer: Vec<u8>,
}
```

The core of the API exposed developers who create Tuxedo Pieces, will roughly follow this trait. We expect this will have to get more specific as our development shows us what we haven;t yet considered.

```rust
/// The API of a Tuxedo Piece
trait TuxedoPiece {

  /// The type of data stored in Outputs associated with this Piece
  type Data;

  /// The validation function to determine whether a given input can be consumed.
  fn validate(transaction: Transaction, input: Input) -> bool;
}
```

This grant does not strive to create the entire rich ecosystem of Tuxedo pieces that we hope to eventually be developed on top of Tuxedo. Rather it strives to create the core of the Tuxedo system and a few of the most important and exemplary pieces. Specifically, we strive to develop the analogs to FRAME Executive, FRAME System, Pallet Balances, and Pallet Transaction Payment.

### Ecosystem Fit

Tuxedo is a framework for writing Substrate runtimes. Substrate is the toolkit for building virtually all parachain nodes as well as many standalone blockchains. As such, Tuxedo provides a richer set of options to runtime developers, and hopes to attract teams to the Substrate / Polkadot ecosystem who may have otherwise gone elsewhere.

The primary users of Tuxedo will be parachain and runtime developers who will use Tuxedo directly to structure their runtimes. Of course, the user base will trickle downstream as well to users of those parachains that choose to build with Tuxedo. However, chain users will use Tuxedo only indirectly.

There are no projects like this in the Substrate ecosystem, although they do exist in the broader blockchain space; Cardano being the most notable example.

While it fulfills a similar role, Tuxedo is not intended to compete with FRAME, but rather to compliment it, by welcoming projects that fit naturally with the utxo model into the Substrate ecosystem, as FRAME does for projects that fit the accounts model.

## Team :busts_in_silhouette:

### Team members

- Joshy Orndorff https://github.com/JoshOrndorff
- Andrew Burger https://github.com/coax1d

### Contact

- **Contact Name:** Joshy Orndorff
- **Contact Email:** joshyorndorff at proton dot me
- **Registered Address:** The address you'll use in the invoices

### Team's experience

Joshy entered the Substrate ecosystem in 2019 as part of the Substrate Developer Hub team. There he created and hosted the weekly Substrate Seminar, and contributed significantly to the Substrate Recipes. In 2020, he moved to the Moonbeam team where he was a core developer. While at Moonbeam, Joshy wrote the [Nimbus consensus engine](https://github.com/PureStake/nimbus/) which is used in several production parachains, and helped pioneer the technique whereby EVM contracts can interact with native Substrate pallets. In 2022, Joshy began contributing to the Polkadot Blockchain Academy, teaching in both Cambridge and Buenos Aires.

Andrew entered the Substrate ecosystem from a curiosity point of view back in June 2021. From there he learned blockchain and Substrate via documents and tinkering in his off time after work. In December 2021 received a fulltime job for a venture builder to build a parachain to eventually connect to Polkadot. Andrew graduated from the first Polkadot Blockchain Academy cohort in 2022 in Cambridge. After Cambridge Andrew moved on from the venture builder to dive into education in the Polkadot Ecosystem by instructing and developing course curriculum for the Polkadot Devcamp #2 online. For Andrew's current work he is contracting as an instructor at the Polkadot Blockchain Academy for Parity Technologies lecturing and creating educational content for Blockchain Fundamentals(Specifically lecturing on UTXO vs Accounts models), Substrate, and XCM modules. Also Andrew is doing Rust Core development work for the Integritee Parachain. Andrew shares a passion for allowing blockchain developers the ability to build upon the UTXO model in Substrate. 


Joshy and Andrew met in Cambridge in 2022 at the first Polkadot Blockchain Academy. There Andrew chose the Frameless UTXO Project cited above as his final project.


## Development Status :open_book:

The team has done previous work on this topic:
* Joshy [maintained](https://github.com/JoshOrndorff/utxo-workshop/tree/joshy-update-deps-may-2022) the Substrate UTXO Workshop code as part of the Substrate Developer Hub team, and has continued to maintain it out of personal interest even years after leaving that team.
* Andrew [ported](https://github.com/coax1d/utxo-frameless/) this code to work _without FRAME_ as part of the Polkadot Blockchain Academy.

The development so far has focused specifically on the crypto_currency_ use case, whereas this grant proposes to generalize the code to be a framework for broader runtime logic development.

As teaching staff at the Polkadot Blockchain Academy in Buenos Aires, Joshy and Andrew found themselves, on two occasions, in conversations with other teaching staff in which it was noted that a diversity of runtime development frameworks would make the Substrate ecosystem stronger and attractive to a broader development base. This idea was supported by Kian Paimani and Shawn Tabrizi among others.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 9 weeks
- **Full-Time Equivalent (FTE):**  1.5 FTE (Joshy and Andrew will both work roughly three quarters time on this)
- **Total Costs:** $30,000 (USD)

### Milestone 1 — Tuxedo Core and Cryptocurrency Piece

- **Estimated duration:** 3 weeks
- **FTE:**  1.5
- **Costs:** 10,000 USD

Split the existing FRAMEless UTXO project into the generic Tuxedo core, and the first Tuxedo piece which represents a cryptocurrency.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up the example node and transfer tokens |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Tuxedo Core | We will create the core of the Tuxedo System, analogous to FRAME Executive and FRAME System |
| 2. | Token Piece | We will create the first Tuxedo piece that serves as a cryptocurrency, analogous to Pallet Balances |
| 3. | Tuxedo Node Template | We will create a Substrate node with the runtime built with Tuxedo and including the Token piece. Together this will represent a bitcoin-like token (not PoW though, only the token logic is bitcoin-like) |

### Milestone 2 — Wallet and Multisig

- **Estimated Duration:** 3 weeks
- **FTE:**  1.5
- **Costs:** 10,000 USD

Create the second Tuxedo piece, and a user-facing wallet

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up the example node and transfer tokens |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | User Wallet | We will create a CLI wallet that users can use to track their tokens in a Tuxedo-based cryptocurrency. This makes the example node actually useable by common users who are curious to explore but not yet ready to dig into the code. The wallet will be written in Rust and communicate with Substrates jsonrpsee endpoint. |
| 2. | Multisig Piece | We will expand the ecosystem of Tuxedo pieces by creating a multisig wallet. In addition to making the Tuxedo ecosystem a bit more complete, this also demonstrates to future piece developers how to couple pieces. |

### Milestone 3 — Full Docs and Tutorial

- **Estimated Duration:** 3 weeks
- **FTE:**  1.5
- **Costs:** 10,000 USD

Fully document the Tuxedo paradigm, existing pieces, CLI wallet, and provide a tutorial for runtime developers

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up the example node and transfer tokens |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Full written and Video Tutorial | With a node template, piece template, and user-facing wallet now complete, we can get serious about user and developer documentation. We will create a full written tutorial and video walkthough that covers how to build and run the Tuxedo Node Template, and send tokens around with the wallet. We will then dive into how to add the multisig piece to your runtime, and how to develop your own simple piece starting from the piece template. |
| 1. | Piece Template | We will create the template Tuxedo Piece analogous to the FRAME pallet template. This will allow runtime developers to have a concrete starting place when building their own utxo based Substrate runtimes. |


## Future Plans

Being a framework for runtime development, we plan to continue developing the ecosystem of Tuxedo Pieces including Pieces for NFTs, Governance Mechanisms, Proof of Stake, and even smart contracts.

Joshy has long had a vision of a UTXO based smart contract language based on the pi calculus. With Tuxedo core complete, it will be possible to develop such a contracting platform.

The UTXO model allows concurrent processing of unrelated transactions (those that do not compete to consume any inputs). It would be exciting to extend Substrate itself to support a DAG structure rather than a linear chain to take advantage of this ability, although the feasibility of this extension has not yet been studied.

## Additional Information :heavy_plus_sign:

The team has been in the Substrate ecosystem for a long time, so we have heard of the grants program in many ways. From colleagues, grant recipients speaking highly the program, and grant recipients looking for help understanding Substrate.
