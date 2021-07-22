# W3F Open Grant Proposal

* **Project Name:** Yatima
* **Team Name:** [Yatima Inc](https://github.com/yatima-inc/yatima).
* **Payment Address:** 3N2bLsFX6UtJ3MXdnVvm87dHaQTPutDiqA

## Project Overview :page_facing_up:

### Overview

* Summary: A lambda-VM and programming language for Substrate chains, with
  on-chain formal verification and IPFS package management.

* Description: Yatima is a dependently typed functional programming language
  implemented in Rust featuring substructural types, metaprogramming, and
  content addressing via IPFS.

* Relevance to Substrate: The language core, including parsing, elaboration,
  serialization/deserialization, typechecking, evaluation, etc. can compile to
  Substrate compatible WASM (`no_std` via Substrate's [`sp_std` standard library](https://docs.rs/sp-std/3.0.0/sp_std/index.html)), and thus can be
  utilized within a Substrate Pallet.

* Our interest: In order for decentralized technologies to gain widespread
  adoption, users have to trust that the infrastructure they are using is safe,
  and that they are not just replacing counterparty risk with technical risk. We
  believe that functional programming and formal proofs offer a possible path
  towards increasing the safety and reliability of all software, not just in
  blockchain.

### Project Details

Many blockchain projects are exploring strongly-typed functional programming as
a paradigm for writing smart contracts and DApps. Examples include [Cardano's
Plutus](https://developers.cardano.org/en/programming-languages/plutus/overview/), [Tezos' Michelson](https://wiki.tezosagora.org/learn/smartcontracts/michelson), [Kadena's Pact](https://github.com/kadena-io/pact) and [Digital Asset's DAML](https://daml.com/). The type safety and
composability of functional programs make them an exciting option for
writing high-assurance smart contracts.

Yatima aims to help develop the functional programming ecosystem on Substrate
and the Polkadot ecosystem. We have developed a graph-based runtime for the Yatima language
with fully lazy evaluation, sharing, and whole program optimization. This runtime could also 
be targeted by other functional languages. The Yatima runtime is
similar in many respects to Haskell Core, or the [GRIN
IR](https://grin-compiler.github.io/) but is implemented in deterministic
`no_std` Rust, which allows it to run virtually anywhere, including the web,
WASM blockchains, or even embedded systems (in theory).

Yatima also implements a powerful dependent and substructural type-system,
similar to Idris 2. This enables formal verification and theorem proving
(although crucial features for practical proving such as inference and tactics
are not yet implemented). Proofs allow for many useful optimizations in the area
of smart contracts, such as static detection of arithmetic overflow or division
by zero errors, or tracking of resources and permissions via an effect system.
Furthermore, since Yatima can be implemented in itself, there is a possiblity of
having on-chain trustless proof verification.

Lastly, Yatima implements content-addressing, allowing all programs and packages
to be serialized into IPLD objects and shared over the peer-to-peer IPFS network
(or via libp2p).

#### Deliverables

- A `sp_ipld` crate for interacting with IPFS CID, Multihash and IPLD based on
  [`ipfs-rust/libipld`](https://github.com/ipfs-rust/libipld), but which is
  Substrate pallet compatible. This is a necessary dependency for Yatima Core,
  but is an independent deliverable that could be useful for many other
  Substrate projects.

- A `sp_im` crate for creating immutable datastructures, based on
  [`bodil/im-rs`](https://github.com/bodil/im-rs), but which is
  Substrate pallet compatible. This is a necessary dependency for Yatima Core,
  but is an independent deliverable that could be useful for many other
  Substrate projects.

- A `sp_yatima` crate integrated with `sp_ipld`, `sp_im` and `sp_std` that
  packages the `yatima_core`
  [crate](https://github.com/yatima-inc/yatima/tree/main/core) and a
  `yatima-node` repository based on the
  [`substrate-node-template`](https://github.com/substrate-developer-hub/substrate-node-template)
  showcasing how `sp_yatima` can be imported into a Substrate Node as a pallet.

This proposal does *not* include in its scope:
  - Implementing a smart contract eDSL in Yatima.
  - Integrating "effectful" features like contract deployment, calling or
    compatiblity with `pallet_contracts`.

We would plan to propose the above for follow-up work upon satisfactory
completion of the above deliverables.

### Ecosystem Fit

* Where and how does your project fit into the ecosystem?

Yatima fits into the Substrate ecosystem in a few ways:

1. The runtime can be used like a functional VM that could potentially be targeted by a
   variety of other functional programming languages, including Plutus, Pact,
   Simplicity, etc.
2. The Yatima language itself can be called from within Rust, and potentially
   can integrate with `ink` as a kind of lightweight functional evaluator or
   garbage collector for pure expressions, with `ink` or `pallet_contracts`
   handling calling conventions and effects. This would be similar to the
   relationship between JS and WASM on the web.
3. The Yatima typechecker can be embedded in a contract and exposed as an
   on-chain verifier or prover.
4. In the future, Yatima could handle effects and contract calls itself,
   and can become a fully viable smart contract language.
5. Eventually there could be Yatima-based parachains with entirely different
   models for how smart contracts should interact.

* Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our target audience is smart contract and parachain developers.

* What need(s) does your project meet?

One of the strengths of a heterogeneous blockchain ecosystem like Substrate /
Polkadot / Kusama ecosystem is the ability for radically different approaches to
coexist and provide value to one another. Other systems have more of a
requirement for a single execution environment. So while in the long run we hope
to execute on our ambition of "better living through FP", even in the short run
the existence of an interoperable FP option will showcase one of the key
Substrate innovations in this space.

Additionally, Yatima is designed in a modular way, so that different components
and dependencies can provide value to other projects, such as `sp_im`, `sp_ipld` libraries,
or the graph-reduction runtime.

* Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  * If so, how is your project different?
  * If not, are there similar projects in related ecosystems?

  I am not aware of similar projects in the Substrate ecosystem but would be
  excited to connect with anyone doing something related!

  In other ecosystems projects with some degree of overlap are:

  1. [Plutus](https://developers.cardano.org/en/programming-languages/plutus/overview/)
  2. [Idris2](https://github.com/idris-lang/Idris2)
  3. [Pact](https://github.com/kadena-io/pact)
  4. [Kind](https://github.com/uwu-tech/Kind) (formerly Formality)
  5. [Unison](https://www.unisonweb.org/)

## Team :busts_in_silhouette:

### Team members

* Name of team leader: John Burnham
* Names of team members 
  - Gabriel Barreto
  - Anders Sorby
  - Sam Burnham
  - Caden Haustein

### Contact

* **Contact Name:** John Burnham
* **Contact Email:** john@yatima.io
* **Website:** https://github.com/yatima-inc/yatima

### Legal Structure

* **Registered Address:** 118 Parker St, Newton MA 02459, USA
* **Registered Legal Entity:** Yatima Inc.

### Team's experience

John and Gabriel have been working on designing functional programming languages
together for over 2 years and previously coauthored the Formality language,
which was supported by an Ethereum Foundation Grant (which John presented on at [Devcon5](https://www.youtube.com/watch?v=3XUKQX4nN8w))

Prior to that, John worked on Tezos where he created and led initial development
of the [Morley Framework](https://gitlab.com/morley-framework), as well as
creating the [TZIP standards process](https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-1/tzip-1.md). 
Before that, John cofounded tlon.io. He was a Thiel Fellow in 2011 and dropped out of
Dartmouth College.

Gabriel previously worked at the Ethereum Foundation and received his Master in
Math at the Federal University of Bahia (Salvador, Brazil), where his
dissertation was titled "On the Category of Deductive Systems".

Anders is a full stack and machine learning engineer by background, and
received his Masters in Applied Physics and Mathematics from the Norwegian
Institute of Science and Technology.

Sam recently graduated from the Rensselaer Polytechnic Institute with a degree
in Computer Engineering. He has previously worked on embedded systems in Rust
and C including industrial HVAC controllers at enverid.com.

Caden is the creator of the [mlatu functional concatenative programming
language](https://github.com/mlatu-lang/mlatu). He is interning at Yatima Inc
for the summer.

### Team Code Repos

* https://github.com/yatima-inc
* https://github.com/yatima-inc/yatima
* https://github.com/yatima-inc/introit
* https://github.com/yatima-inc/sp-ipld
* https://github.com/yatima-inc/yatima-haskell-prototype

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* https://github.com/johnchandlerburnham
* https://github.com/gabriel-barrett
* https://github.com/Anderssorby
* https://github.com/samuelburnham
* https://github.com/brightly-salty

### Team LinkedIn Profiles (if available)

Please email john@yatima.io for team member CVs.

## Development Status :open_book:

### Yatima Rust implementation

* https://github.com/yatima-inc/yatima

The language is still pre-alpha, but is rapidly nearing it's first numbered
alpha version. A brief overview of the current state of the implementation:

The [`core`](https://github.com/yatima-inc/yatima/tree/main/core) subcrate
contains the deterministic `no_std` language core:
- nom parsers for the core syntax
- A Rust quasiquotation macro that allows yatima to be used as a functional
  eDSL directly in Rust. We implement much of the type-system this way.
- a typedef syntax sugar for generating raw core self-type lambda-encoded
  datatypes. The syntax:

  ```
  type List (A: Type) {
    Nil
    Cons A (List A)
  }
  ```

  Is actually non primitive and generates the raw terms:

  ```
  def List : ∀ (0 A: Type) -> Type
    = λ A => @List.self ∀
      (0 P: ∀ (self: (List) A) -> Type)
      (& Nil: P (data λ P List.Nil List.Cons => List.Nil))
      (& Cons: ∀ (_: A) (_: (List) A)
        -> P (data λ P List.Nil List.Cons => List.Cons _ _))
    -> P List.self

  def List.Nil : ∀ (0 A: Type) -> List A
    = λ A => data λ P List.Nil List.Cons => List.Nil

  def List.Cons : ∀ (0 A: Type) (_: A) (_: List A) -> List A
    = λ A _ _ => data λ P List.Nil List.Cons => List.Cons _ _
  ```

  This lambda encoding construction is too arcane to be user-facing, even in
  the core language, but it is extremely powerful on a theory level, and is
  what allows Yatima to implement dependent types in a fraction of the
  code length of e.g. the language core of Idris2.
- the λ-DAG based evaluator, with a typechecking version and a runtime
  version (where non-runtime relevant type information is erased). This uses
  extensive `unsafe` Rust due its heavy use of raw-pointers, doubly-linked-lists
  ([`core/dll.rs`](https://github.com/yatima-inc/yatima/blob/main/core/src/dll.rs)).
- The serialization system to embed Yatima terms, definitions and packages into
  [IPLD](ipld.io). The system is compatible with the `go-ipfs` reference
  implementation so that content-ids (CIDs) computed by the `core` match the
  CIDs once an object is uploaded to ipfs
- Exposed Rust primitive and operations, such as signed and unsigned ints,
  BigInt, Text (from our fork of
  [`ropey`](https://docs.rs/ropey/1.3.0/ropey/index.html) rather than String)

The [`utils`](https://github.com/yatima-inc/yatima/tree/main/utils/src) subcrate
contains the REPL, the file parser, the ipfs client, and other pieces of
infrastructure that cannot be `no_std`. Our vision is that different platforms
will have different implementations of this `utils` crate.

We currently have `sp_im` and `sp_ipld` subcrates for our ports of the `im`
and `libipld` libraries to a `no_std + sp_std` setting. These are currently
being factored out into their own repositories.

The [`web`](https://github.com/yatima-inc/yatima/tree/main/web) subcrate
contains a very rough prototype of a web repl.

### Yatima Standard Library

* https://github.com/yatima-inc/introit

The Yatima standard library is in its early stages, but contains definitions for 
a variety of different datatypes, such as `vector`, `b_tree`, preliminary work
on theorem proving structures like a propositional equality type
([equal.ya](https://github.com/yatima-inc/introit/blob/main/equal.ya)), as well
as a bare-bones port of the Haskell `megaparsec` parser combinator library
([parsec.ya](https://github.com/yatima-inc/introit/blob/main/parsec.ya)). 

In `vector.ya` we can see an example of using proofs to show that we can always
take the head of a non-empty `Vector`:

```
type Vector (A: Type): ∀ (ω k: Natural) -> Type {
   Nil: Vector A Natural.Z,
   Cons (0 k: Natural) (x: A) (xs: Vector A k): Vector A (Natural.S k),
}

def Vector.head (0 A: Type) (k: Natural) (a : Vector A (Natural.S k)): A
  = ((case a) (λ k' self => ∀ (Equal Natural (Natural.S k) k') -> A)
    (λ e => Empty.absurd A (Natural.Z_isnt_S k e))
    (λ k x xs e => x))
    (Equal.Refl Natural (Natural.S k))
```

The parser library is particulary interesting due the combination of dependent
types with parsers allowing for lifting of parse errors to type errors, and thus
allowing for metaprogramming constructs or macros to be defined directly in the
Yatima base language:

```
⅄ Parser.parsed Char (Parser.char 'f') "f"
'f'
: Parsed Char (Parser.run Char (Parser.char 'f') (State.init "f"))
⅄ Char.eql 'f' (Parser.parsed Char (Parser.char 'f') "f")
#Bool.true
: Bool
⅄ Char.eql 'f' (Parser.parsed Char (Parser.char 'f') "a")
Type Error: Type Mismatch from 1:15 to 1:55 in bafk2bzacectxsdnlokzhsmqxklxxc2qmhhz4hro2wh7dmsx6lwmqdv4xwwq4m
• Expected: #Char
• Detected: ...
```

### Yatima Haskell prototype

* https://github.com/yatima-inc/yatima-haskell-prototype

This is an early experimental version of the language built to test ideas
around combining self-types with Quantitative Type Theory, and whether the
content addressing with IPFS was viable in that context. We include it here to
illustrate how a language like Yatima can be built in an existing functional
language (with its own runtime), using higher-order abstract syntax (HOAS).
This is how we plan to implement Yatima in itself once the language is more
mature.

### sp_ipld and sp_im

We have prototypes of the `sp_ipld` and `sp_im` repositories here:

* https://github.com/yatima-inc/sp-ipld
* https://github.com/yatima-inc/sp-im

These have some initial functionality, but are lacking significant features,
test-coverage, and documentation. However, what exists is sufficient to
demonstrate that these libraries can be built in a `no_std` context using the
`sp_std` library.

### Relevant Papers and prior art
- Yatima's core reduction machine is based on the λ-DAG technique described in
  [Bottom-up β-reduction](https://www.ccs.neu.edu/home/wand/papers/shivers-wand-10.pdf).
- Yatima's approach to inductive datatypes is based on [Self Types for Dependently Typed Lambda Encodings](https://homepage.divms.uiowa.edu/~astump/papers/fu-stump-rta-tlca-14.pdf).
- Yatima's quantitative types are based on [Syntax and Semantics of Quantitative Type Theory](https://bentnib.org/quantitative-type-theory.pdf).
- Many aspects of the language, particularly its libraries and type-equality
  algorithm, are adapted from the authors' previous work on [The Formality proof language](https://github.com/moonad/Formality-tmp).

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):** 4
* **Total Costs:** 29,999 USD

### Milestone 1 - Implement sp_ipld: A Substrate Pallet compatible IPLD library

* **Estimated duration:** 3 weeks
* **FTE:**  2
* **Costs:** 7,500 USD

| Number | Deliverable                      | Specification                                                                                                                                                                                                    |
| -----  | -----------                      | -------------                                                                                                                                                                                                    |
| 0a.    | License                          | MIT                                                                                                                                                                                                              |
| 0b.    | Documentation                    | We will enhance inline documentation, and write a tutorial on how to import and use `sp_ipld` in Substrate.                                                                                                      |
| 0c.    | Testing Guide                    | We will extend existing `libipld` unit tests with more coverage, add `quickcheck` property tests and integration tests with `go-ipfs` for ensuring CID compatibility                                             |
| 0d.    | Nix                              | We will provide a .nix expression which can immutably build this crate and all tests                                                                                                                             |
| 1a.    | Substrate module: `sp_ipld`      | We will create a Substrate module based on `ipfs-rust/ipld` that will allow for serializing and deserializing IPLD objects via the `dag-cbor` codec and computing IPFS CIDs which are compatible with `go-ipfs`. |
| 1b.    | `dag-json` feature               | We will implement the `dag-json` codec for the `sp_ipld` module, as well as a textual JSON format                                                                                                                |
| 1c.    | Substrate module: `sp_cid`       | We will implement a documented `no_std` version of the `ipfs-rust/ipld` dependency `multiformats/cid`                                                                                                            |
| 1d.    | Substrate module: `sp_multihash` | We will implement a documented `no_std` version of the `ipfs-rust/ipld` dependency `multiformats/rust-multihash`                                                                                                 |
| 1e.    | Substrate module: `bytecursor`   | We will implement a documented `no_std` drop-in replacement library for the `std::io::Read` `std::io::Write` based serialization/deserialization functions used by `ipfs-rust/ipld`                              |

### Milestone 2 - Implement sp_im: A Substrate Pallet compatible immutable datastructures library

* **Estimated duration:** 3 weeks
* **FTE:**  2
* **Costs:** 7,500 USD

| Number | Deliverable               | Specification                                                                                                                                                                                    |
| -----  | -----------               | -------------                                                                                                                                                                                    |
| 0a.    | License                   | MIT                                                                                                                                                                                              |
| 0b.    | Documentation             | We will enhance inline documentation, and write a tutorial on how to import and use `sp_im` in Substrate.                                                                                        |
| 0c.    | Testing Guide             | We will port existing `im` tests to `quickcheck`, and add additional unit tests where appropriate                                                                                                |
| 0d.    | Nix                       | We will provide a .nix expression which can immutably build this crate and all tests                                                                                                             |
| 1.     | Substrate module: `sp_im` | We will create a Substrate module that will allow for creating and manipulating performant immutable datastructures such as cons-lists, vectors based on rrb trees and maps/sets based on btrees |

### Milestone 3 - Implement sp_yatima: A Substrate Pallet Yatima module

* **Estimated Duration:** 6 weeks
* **FTE:**  2
* **Costs:** 14,999 USD

| Number | Deliverable                   | Specification                                                                                                                             |
| -----  | -----------                   | -------------                                                                                                                             |
| 0a.    | License                       | MIT                                                                                                                                       |
| 0b.    | Documentation                 | We will provide inline documentation, write a tutorial on the language itself, and a tutorial to import and use `sp_yatima` in Substrate. |
| 0c.    | Testing Guide                 | We will extend existing unit, property and integration tests where appropriate.                                                           |
| 0d.    | Nix                           | We will provide a .nix expression which can immutably build this crate and all tests                                                      |
| 1.     | Substrate module: `sp_yatima` | We will create a Substrate module that will allow for parsing, typechecking and evaluating Yatima language expressions                    |
| 2.     | Repository: `yatima-node`     | We will create a fork of the `substrate-node-template` that imports `sp_yatima`                                                           |


## Future Plans

If this initial project is successful, we plan to apply for a follow-up grant to
add side-effects and smart contract eDSL features to Yatima. We would like
Yatima to be an option for developers who wish to use functional programming to
develop smart contracts.

We also intend to implement a Substrate chain using the Yatima runtime, and to
explore the possibility of integrating with Kusama and Polkadot via a bridge,
parathread or parachain.

Additionally, we would like to explore other applications of Yatima, including
developing the web environment further, and exploring frontend application
development, possibly via a model like https://seed-rs.org/. Another possible
area of exploration would be to integrate with the [lunatic
runtime](https://github.com/lunatic-solutions/lunatic), which uses WASM modules
to provide Erlang style lightweight processes (green threads). There is some
indication that content addressing is a good fit for this, given the work Unison
has done on distributed systems.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

* Whether there are any other teams who have already contributed (financially) to the project.

Previous work on Yatima and predecessor projects has been supported by grants
from the Ethereum Foundation and the IOTA Foundation.
