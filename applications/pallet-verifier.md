# Pallet Verifier

- **Team Name:** David Semakula
- **Payment Address:** 16AExTwdZnzJ4UDM1MeQ3cNuetTtFz1yrpYTaVqCNJtmeppK (AssetHub USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This application is a response to the [RFP for Static Analysis for Runtime Pallets][RFP].

[RFP]: https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Static-Analysis-for-Runtime-Pallets.md

### Overview

pallet-verifier is a tool for static analysis of [FRAME runtime pallets][FRAME] that are used for 
building [Substrate]-based blockchains.

[FRAME]: https://docs.substrate.io/learn/runtime-development/#frame
[Substrate]: https://docs.substrate.io/

#### Background

[FRAME pallets][FRAME] are modules that implement the business logic for the different use cases and features
that you might want to include in a blockchain [runtime].
This enables developers to easily create application-specific [Substrate]-based blockchain [runtime] environments
from a modular set of components.

[runtime]: https://docs.substrate.io/reference/glossary/#runtime

#### Objective

pallet-verifier aims to detect [common security vulnerabilities][vulnerabilities] found in FRAME pallets using 
[static program analysis][static-analysis] techniques like [data-flow analysis][data-flow], 
[abstract interpretation][abs-int] and [symbolic execution][symbex].

[vulnerabilities]: https://secure-contracts.com/not-so-smart-contracts/substrate/
[static-analysis]: https://en.wikipedia.org/wiki/Static_program_analysis
[data-flow]: https://en.wikipedia.org/wiki/Data-flow_analysis
[abs-int]: https://en.wikipedia.org/wiki/Abstract_interpretation
[symbex]: https://en.wikipedia.org/wiki/Symbolic_execution


### Project Details

#### Introduction

This stage of the project will focus on detecting [panics] and [arithmetic overflow/underflow] 
(and [lossy integer conversions][as-conversions-lossy]) in [dispatchable functions/extrinsics][call] of [FRAME pallets][FRAME]. 
However, other classes of security vulnerabilities (e.g. [insufficient or missing origin checks][origin-checks], 
[bad randomness][randomness], [insufficient unsigned transaction validation][validate-unsigned] e.t.c) 
will also be targeted in the future.

[panics]: https://secure-contracts.com/not-so-smart-contracts/substrate/dont_panic/
[arithmetic overflow/underflow]: https://secure-contracts.com/not-so-smart-contracts/substrate/arithmetic_overflow/
[as-conversions-lossy]: https://doc.rust-lang.org/reference/expressions/operator-expr.html#semantics
[call]: https://docs.rs/frame-support/latest/frame_support/pallet_macros/attr.call.html
[origin-checks]: https://secure-contracts.com/not-so-smart-contracts/substrate/origins/
[randomness]: https://secure-contracts.com/not-so-smart-contracts/substrate/randomness/
[validate-unsigned]: https://secure-contracts.com/not-so-smart-contracts/substrate/validate_unsigned/

#### Architecture

[FRAME] is a [Rust]-based [DSL (Domain Specific Language)][DSL], therefore, the source code representation that 
pallet-verifier will analyze is Rust's [MIR (Mid-level Intermediate Representation)][MIR]. This is because MIR is 
["a radically simplified form of Rust that is [ideal] for certain flow-sensitive [analysis]"][MIR] 
(see also [this][MIR-simple] and [this][MIRAI-MIR]).

[Rust]: https://www.rust-lang.org/
[DSL]: https://doc.rust-lang.org/rust-by-example/macros/dsl.html
[MIR]: https://rustc-dev-guide.rust-lang.org/mir/
[MIR-simple]: https://blog.rust-lang.org/2016/04/19/MIR.html#reducing-rust-to-a-simple-core
[MIRAI-MIR]: https://github.com/facebookexperimental/MIRAI/blob/main/documentation/WhyMir.md

As such, pallet-verifier will be built as a custom [rust compiler (rustc) driver][rustc-driver] which will use 
[MIRAI] as a backend for [abstract interpretation][MIRAI-abs-int] (and in the future, also as a 
[tag and taint analysis][MIRAI-tag] engine).

Additionally, our custom rustc driver will be distributed as a [custom cargo sub-command][cargo-sub-cmd]
(e.g. `cargo verify-pallet`) to allow for a seamless and familiar developer experience.

[rustc-driver]: https://rustc-dev-guide.rust-lang.org/rustc-driver.html
[MIRAI]: https://github.com/facebookexperimental/MIRAI
[MIRAI-abs-int]: https://github.com/facebookexperimental/MIRAI/blob/main/documentation/Overview.md#abstract-interpretation
[MIRAI-tag]: https://github.com/facebookexperimental/MIRAI/blob/main/documentation/TagAnalysis.md
[cargo-sub-cmd]: https://doc.rust-lang.org/cargo/reference/external-tools.html#custom-subcommands

#### MIRAI Integration

["MIRAI is an abstract interpreter for the Rust compiler's mid-level intermediate representation (MIR)"][MIRAI].

At this stage of the project, we'll use MIRAI to detect [panics] and [arithmetic overflow/underflow] 
(and [lossy integer conversions][as-conversions-lossy]).
However, as noted before, MIRAI also includes a [tag and taint analysis framework][MIRAI-tag] that can be used for 
applicable analyses in the future.

##### Panics

Finding potential panics (abrupt terminations) is one of [MIRAI's primary use cases][MIRAI-use].
MIRAI does this by performing a [path-sensitive][sensitivity] analysis. 
This means that given an [entry point][MIRAI-entrypoint], MIRAI ["will analyze all possible code paths that 
start from that entry point and determine if any of them can reach a program point where an abrupt runtime termination
will happen"][MIRAI-overview]. Notably, ["[this] use case generally requires no annotations"][MIRAI-use].

[MIRAI-use]: https://github.com/facebookexperimental/MIRAI/blob/main/README.md#who-should-use-mirai
[sensitivity]: https://en.wikipedia.org/wiki/Data-flow_analysis#Sensitivities
[MIRAI-entrypoint]: https://github.com/facebookexperimental/MIRAI/blob/main/documentation/Overview.md#entry-points
[MIRAI-overview]: https://github.com/facebookexperimental/MIRAI/blob/main/documentation/Overview.md

##### Arithmetic overflow/underflow (and lossy integer conversions)

MIRAI can detect potential [arithmetic overflow/underflow due to arithmetic operations][overflow-op-exp], 
if its [diagnostic level][MIRAI-how] is set to `library` or `paranoid` (i.e. `--diag=library|paranoid`), 
and either the rustc ["overflow-checks"] (i.e. `-C overflow-checks=true|on|yes|y`) or 
["debug-assertions"] (i.e. `-C debug-assertions=true|on|yes|y`) flag is enabled. 
This use case also generally requires no annotations, because when the aforementioned rustc flags are enabled, 
rustc automatically adds instructions for [dynamic overflow checking][overflow-rfc], which MIRAI can use 
to detect potential arithmetic overflow/underflow.

However, there's one exception, because [dynamic overflow checks are *not* added][overflow-rfc-design] 
([see also][overflow-rfc-remove-as]) for [`as` conversions (i.e. type cast operations)][as-conversions] e.g.
```rust
fn convert_with_overflow(val: u16) -> u8 {
    val as u8
}
```
Therefore, MIRAI *cannot* automatically detect arithmetic overflow/underflow (and [lossy conversions][as-conversions-lossy]) 
due to explicit [`as` conversions][as-conversions], even when the aforementioned MIRAI options and rustc flags are enabled.

As such, pallet-verifier will need to automatically add [annotations] that allow MIRAI to verify that all reachable 
`as` conversions are safe/lossless (or emit a warning otherwise).

[overflow-op-exp]: https://doc.rust-lang.org/reference/expressions/operator-expr.html#overflow
[MIRAI-how]: https://github.com/facebookexperimental/MIRAI/blob/main/README.md#how-to-use-mirai
["overflow-checks"]: https://doc.rust-lang.org/rustc/codegen-options/index.html#overflow-checks
["debug-assertions"]: https://doc.rust-lang.org/rustc/codegen-options/index.html#debug-assertions
[overflow-rfc]: https://rust-lang.github.io/rfcs/0560-integer-overflow.html
[overflow-rfc-design]: https://rust-lang.github.io/rfcs/0560-integer-overflow.html#detailed-design
[overflow-rfc-remove-as]: https://github.com/rust-lang/rfcs/pull/1019#issuecomment-88277675
[as-conversions]: https://doc.rust-lang.org/reference/expressions/operator-expr.html#type-cast-expressions
[annotations]: https://crates.io/crates/mirai-annotations

##### Adding MIRAI annotations automatically

At this stage of the project, pallet-verifier will only add [annotations] for verifying that integer `as` conversions 
don't overflow/underflow nor lose precision. 

The first step of this process is finding all integer `as` conversions that are either narrowing or lossy conversions 
(i.e. the range of the source type is not a subset of that of the final type e.g. an `as` conversion from `u16` to `u8`
or `u8` to `i8`). This will be done by implementing a [MIR visitor][MIR-visitor] that finds [`Rvalue`s][Rvalue] of 
the [`Rvalue::Cast(CastKind, Operand<'tcx>, Ty<'tcx>)`][Rvalue-cast] variant, and cast kind of 
[`CastKind::IntToInt`][CastKind], and comparing the source type to the final type.

Then, for the identified narrowing and lossy conversions, pallet-verifier will add [MIRAI `verify!`][MIRAI-verify] 
annotations with predicates that bound the operand within the range of the final type of the cast expression 
(e.g. for a `u16` to `u8` conversion, the predicate would be [`val <= u8::MAX`][u8-MAX] where `val` represents 
the operand of the type cast operation).

[MIR-visitor]: https://rustc-dev-guide.rust-lang.org/mir/visitor.html
[Rvalue]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/mir/enum.Rvalue.html
[Rvalue-cast]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/mir/enum.Rvalue.html#variant.Cast
[CastKind]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/mir/syntax/enum.CastKind.html
[MIRAI-verify]: https://docs.rs/mirai-annotations/1.12.0/mirai_annotations/macro.verify.html
[u8-MAX]: https://doc.rust-lang.org/std/primitive.u8.html#associatedconstant.MAX

###### Adding MIRAI annotations to MIR

pallet-verifier will add [MIRAI annotations][annotations] by [overriding][override-queries] rustc's 
[`optimized_mir` query][optimized-mir-query] (see also [this][MIR-optimizations] and [this][rustc-query]). 
This is notably ["the only query that can fetch non-local MIR"][optimized-mir-query] which will allow us to 
detect potentially lossy and overflowing/underflowing `as` conversions introduced by calls to third-party code/ dependencies. 
It's also notably the rustc query that MIRAI uses to get the MIR that it interprets (see [here][MIRAI-query-1] and 
[here][MIRAI-query-1]) for [similar reasons][MIRAI-MIR].

[override-queries]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_interface/interface/struct.Config.html#structfield.override_queries
[optimized-mir-query]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/ty/struct.TyCtxt.html#method.optimized_mir
[MIR-optimizations]: https://rustc-dev-guide.rust-lang.org/mir/optimizations.html
[rustc-query]: https://rustc-dev-guide.rust-lang.org/query.html
[MIRAI-query-1]: https://github.com/facebookexperimental/MIRAI/blob/a94a8c77a453e1d2365b39aa638a4f5e6b1d4dc3/checker/src/call_visitor.rs#L278
[MIRAI-query-2]: https://github.com/facebookexperimental/MIRAI/blob/a94a8c77a453e1d2365b39aa638a4f5e6b1d4dc3/checker/src/call_visitor.rs#L1246

However, this presents a challenge because MIRAI annotations are ordinarily exposed as [Rust declarative macros][macros] 
(e.g. [`verify!`][MIRAI-verify]), but [macro expansion] has already been completed (i.e. during [lexing and parsing]) 
by this stage of the compilation pipeline (i.e. [code generation]). 
So pallet-verifier will need to add [MIRAI annotations][annotations] using their equivalent MIR instructions 
as opposed to the typical declarative macros.

[macros]: https://doc.rust-lang.org/book/ch19-06-macros.html
[macro expansion]: https://rustc-dev-guide.rust-lang.org/macro-expansion.html
[lexing and parsing]: https://rustc-dev-guide.rust-lang.org/overview.html#lexing-and-parsing
[code generation]: https://rustc-dev-guide.rust-lang.org/overview.html#code-generation

Fortunately, MIRAI's declarative macros expand to relatively straight-forward calls to simple functions with 
[noop] bodies, that MIRAI treats as special [intrinsic/built-in][intrinsic] instructions during abstract interpretation 
(see [this][MIRAI-instrinsic-decl], [this][MIRAI-instrinsic-match] and [this][MIRAI-instrinsic-handle]). 
For example, the [`verify!`][MIRAI-verify] macro [expands to][MIRAI-verify-decl] a call to the 
[`mirai_verify` function][MIRAI-verify-fn] which is defined as follows in the [MIRAI annotations crate][annotations]:
```rust
pub fn mirai_verify(_condition: bool, _message: &str) {}
```
This makes it relatively straight-forward to retrieve the [`DefId`][DefId] of the target function 
(e.g. [`mirai_verify`][MIRAI-verify-fn]) and [use it to construct MIR for calling the function][MIR-fn-call], 
thus adding a MIR instruction equivalent to using the corresponding declarative macro (e.g. [`verify!`][MIRAI-verify]).

[noop]: https://en.wikipedia.org/wiki/NOP_(code)
[intrinsic]: https://en.wikipedia.org/wiki/Intrinsic_function
[MIRAI-instrinsic-decl]: https://github.com/facebookexperimental/MIRAI/blob/a94a8c77a453e1d2365b39aa638a4f5e6b1d4dc3/checker/src/known_names.rs#L18-L30
[MIRAI-instrinsic-match]: https://github.com/facebookexperimental/MIRAI/blob/a94a8c77a453e1d2365b39aa638a4f5e6b1d4dc3/checker/src/known_names.rs#L463-L475
[MIRAI-instrinsic-handle]: https://github.com/facebookexperimental/MIRAI/blob/a94a8c77a453e1d2365b39aa638a4f5e6b1d4dc3/checker/src/call_visitor.rs#L476-L659
[MIRAI-verify-decl]: https://github.com/facebookexperimental/MIRAI/blob/main/annotations/src/lib.rs#L845-L855
[MIRAI-verify-fn]: https://github.com/facebookexperimental/MIRAI/blob/main/annotations/src/lib.rs#L1179
[DefId]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_hir/def_id/struct.DefId.html
[MIR-fn-call]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/mir/syntax/enum.Operand.html#method.function_handle

###### Adding the MIRAI-annotations crate as a dependency

It's improbable that any of the FRAME pallets that pallet-verifier will be invoked on will include the 
[mirai-annotations crate][annotations] as a dependency, but we'll need it included as a dependency to allow us 
(and MIRAI) to use/access [`DefId`s][DefId] (and [related definition information][MIRAI-instrinsic-meta]) when 
adding (and interpreting) annotations as described in the previous section.

The process for *"silently"* adding the [mirai-annotations crate][annotations] (i.e. without modifying target 
FRAME pallet crates) will actually be relatively straight-forward, because:
- the [mirai-annotations crate][annotations] is essentially just a single relatively small 
  [`lib.rs`][MIRAI-annotations-src] file with [no dependencies][MIRAI-annotations-deps]
- pallet-verifier will be built as a custom [rustc driver][rustc-driver] and [cargo subcommand][cargo-sub-cmd] that 
  will also set itself as the [`RUSTC_WRAPPER`] when it's invoked by [cargo].

The process, in more detail, will work as follows: 
- first we'll compile the [`lib.rs`][MIRAI-annotations-src] file (or just its relevant content) as a library by 
  invoking `rustc` directly. 
- then, because pallet-verifier will be the [`RUSTC_WRAPPER`] when it's invoked, we can simply add an additional 
  [`--extern mirai_annotations=/path/to/compiled-artifact.rlib` argument][rustc-extern] to the arguments received 
  from [cargo] when invoking rustc on the target FRAME pallet.

[MIRAI-instrinsic-meta]: https://github.com/facebookexperimental/MIRAI/blob/a94a8c77a453e1d2365b39aa638a4f5e6b1d4dc3/checker/src/known_names.rs#L485-L487
[MIRAI-annotations-src]: https://github.com/facebookexperimental/MIRAI/blob/main/annotations/src/lib.rs
[MIRAI-annotations-deps]: https://github.com/facebookexperimental/MIRAI/blob/main/annotations/Cargo.toml#L16
[`RUSTC_WRAPPER`]: https://doc.rust-lang.org/cargo/reference/environment-variables.html#environment-variables-cargo-reads
[cargo]: https://doc.rust-lang.org/cargo/
[rustc-extern]: https://doc.rust-lang.org/rustc/command-line-arguments.html#--extern-specify-where-an-external-library-is-located


##### Identifying (and generating) tractable entry points

###### The generics challenge

[FRAME] is inherently a [generic] framework because it makes extensive use of [Rust generic types and traits][rust-generics], 
most notably for [defining the configuration and "dependencies"][frame-generics] of pallets using a `Config` trait and
the [`#[pallet::config]` attribute macro][pallet-config]. 
Additionally, generic types are used extensively when defining other entities, including in the [Origin] parameter for 
[dispatchable functions/extrinsics][pallet-call], which is typically declared as a generic associated type 
[`origin: OriginFor<T>`][origin-for].

This presents a challenge when performing analysis with MIRAI, because ["it is not possible for a generic or 
higher order function to serve as an entry point"][MIRAI-entrypoint]. This is because 
["it is necessary for MIRAI to resolve and analyze all functions that can be reached from an entry point"][MIRAI-entrypoint].

[generic]: https://en.wikipedia.org/wiki/Generic_programming
[rust-generics]: https://doc.rust-lang.org/book/ch10-00-generics.html
[frame-generics]: https://docs.substrate.io/learn/rust-basics/#generics-and-configuration-traits
[pallet-config]: https://docs.substrate.io/reference/frame-macros/#palletconfig
[Origin]: https://docs.substrate.io/build/origins/
[pallet-call]: https://docs.substrate.io/reference/frame-macros/#palletcall
[origin-for]: https://docs.rs/frame-system/latest/frame_system/pallet_prelude/type.OriginFor.html

###### Too many macro-generated entry points

Another challenge is the fact that when MIRAI is invoked with its default configuration using `cargo mirai`, 
it will attempt to analyze all entry points 
(i.e. ["[all] function[s] that can be called externally [... e.g.] public function[s] of a library crate"][MIRAI-entrypoint]).
In the context of a FRAME pallet, this essentially means MIRAI with attempt to analyze all functions with 
[`pub` visibility][rust-vis]. This ends up being a significant challenge for efficiency, and a cause of timeouts, 
because even a relatively [simple example pallet definition][scs-pallet] like the one used by the 
[Supercomputing Systems AG (SCS) team][scs-research-proposal] in the 
[previously completed research grant][scs-research-delivery] yields about ~300 entry points (i.e. public functions) 
after macro expansion (you can inspect the list of entry points by running 
`cargo clean && MIRAI_FLAGS="--print_function_names" cargo mirai`).

[rust-vis]: https://doc.rust-lang.org/reference/visibility-and-privacy.html
[scs-pallet]: https://github.com/scs/MIRAI/blob/Milestone1_Research/substrate-examples/pallet_template/src/lib.rs
[scs-research-proposal]: https://github.com/w3f/Grants-Program/blob/master/applications/sarp-basic-functionality.md
[scs-research-delivery]: https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/sarp-basic-functionality-milestone-1.md

###### The `TestExternalities` and `SubstrateHostFunctions` challenge

A typical solution to the above two challenges is to [analyze using only unit tests as entry points][MIRAI-entrypoint] 
by running `cargo mirai --tests`. This is because [unit tests][substrate-unit-tests] provide concrete types for 
all generic types and traits, and will typically be a manageable number for a single crate. 
This seems like a viable solution for our use case, since it's a standard best-practice for Substrate/FRAME developers 
to write [unit tests][substrate-unit-tests] for all dispatchable functions/extrinsics. 

However, here too we run into some challenges, presumably because the [`SubstrateHostFunctions`][substrate-host-fns]
and [`TestExternalities`][substrate-test-exts] implementation needed to run [unit tests][substrate-unit-tests] 
introduces too much complexity in the form [foreign functions][MIRAI-foreign-fns] for which MIRAI can't access MIR, 
combined with some [complex indirection][MIRAI-call-resolution], and so the analysis either aborts or timeouts.

Another efficiency concern for this approach is the fact that it's quite common for a unit test to exercise a 
single target function multiple times, or even for multiple unit tests to be written for a single function. 
However, while this is perfectly reasonable for unit testing, it's quite wasteful in an entry point for 
abstract interpretation.

[substrate-unit-tests]: https://docs.substrate.io/test/unit-testing/
[substrate-host-fns]: https://docs.rs/sp-io/latest/sp_io/type.SubstrateHostFunctions.html
[substrate-test-exts]: https://docs.rs/sp-io/latest/sp_io/type.TestExternalities.html
[MIRAI-foreign-fns]: https://github.com/facebookexperimental/MIRAI/blob/main/documentation/Overview.md#foreign-functions
[MIRAI-call-resolution]: https://github.com/facebookexperimental/MIRAI/blob/main/documentation/Overview.md#call-resolution

###### Finding tractable entry points

Since what prevents us from directly using [dispatchable function/extrinsic][pallet-call] definitions as 
entry points is the fact that they're [generic][rust-generics], while unit tests provide concrete implementations 
of the required generic types and traits, but introduce too much complexity presumably because of 
[foreign functions][MIRAI-foreign-fns] and [complex indirection][MIRAI-call-resolution] related to 
[`SubstrateHostFunctions`][substrate-host-fns] and [`TestExternalities`][substrate-test-exts] implementations.
A hybrid solution that uses the concrete types and arguments from unit tests to "specialize" direct calls to the 
[dispatchable functions/extrinsics][pallet-call] (i.e. bypassing calls to 
[`sp_io::TestExternalities::new(..).execute_with(|| { .. })`][substrate-exec-with], 
[`frame_system::GenesisConfig::default().build_storage()`][FRAME-build-storage] e.t.c) seems viable.

In fact, the viability of such a hybrid solution has already been successfully demonstrated in the 
[previously completed research grant delivery][scs-research-delivery] in which such a ["hybrid" entry point][scs-entrypoint] 
was manually implemented, and [configuring MIRAI to only analyze this entry point][scs-config] eliminated the 
timeouts and aborts that were otherwise experienced when MIRAI attempted to analyze all entry points as detailed 
[here][scs-pallet-report]. 

However, manually implementing these "hybrid" entry points is not scalable, so pallet-verifier will need to generate 
them automatically.

[substrate-exec-with]: https://paritytech.github.io/polkadot-sdk/master/sp_io/type.TestExternalities.html#method.execute_with
[FRAME-build-storage]: https://docs.rs/frame-system/latest/frame_system/pallet/struct.GenesisConfig.html#method.build_storage
[scs-entrypoint]: https://github.com/scs/MIRAI/blob/Milestone1_Research/substrate-examples/pallet_template/src/mirai.rs
[scs-config]: https://github.com/scs/MIRAI/blob/Milestone1_Research/substrate-examples/pallet_template/.cargo/config.toml#L2
[scs-pallet-report]: https://github.com/scs/MIRAI/blob/Milestone1_Research/substrate-examples/pallet_template/README.md

###### Generating tractable entry points automatically

The first step of this process is finding a function call for each [dispatchable function/extrinsic][pallet-call] 
(i.e. presumably via "specialized" calls of dispatchable functions in [unit tests][substrate-unit-tests]). 
This will be done by [retrieving][HIR-body-owners] the [`DefId`s][DefId] for all dispatchable functions, 
and then implementing a [MIR visitor][MIR-visitor] that finds [`Terminator`s][Terminator] of the 
[`TerminatorKind::Call { func, args, .. }`][Terminator-call] variant whose `func` operand matches/wraps 
the `DefId` of a dispatchable function.

Then, the concrete types and argument values used in the discovered "specialized" dispatchable function calls 
will be used to construct/generate tractable entry points (i.e. definitions of minimal public functions that 
make dispatchable calls similar to [this "hybrid" entry point from the previous research deliverable][scs-entrypoint]).

Note that, at this point we can emit a warning for any dispatchable functions for which no "specialized" call 
could be found (i.e. presumably because no unit tests are defined for it), or even abort with an error message, 
if no "specialized" calls are found for any of the dispatchable functions.

[HIR-body-owners]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/hir/map/struct.Map.html#method.body_owners
[Terminator]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/mir/terminator/struct.Terminator.html
[Terminator-call]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_middle/mir/syntax/enum.TerminatorKind.html#variant.Call

Switching our focus back to the generated tractable entry points, one challenge here is that we'll need [`DefId`s][DefId] 
for these generated tractable entry points (inorder to pass them to MIRAI for analysis), but `DefId`s are created 
during [HIR (High-Level Intermediate Representation)][HIR] lowering ([see also][HIR-lower]).

Fortunately, rustc's [query-based and demand-driven compilation model][rustc-query] means it has excellent support for
[incremental compilation/analysis][rustc-inc-comp-detail] ([see also][rustc-inc-comp]), this allows us to 
(strategically) add our generated entry points to the target FRAME pallet's "virtual" source code without needing to 
recompile any unrelated code.

Lastly, while adding our generated entry points, we'd prefer *not* to edit the target FRAME pallet's 
"actual" source code (i.e. no changes on disk), so our [custom rustc driver][rustc-driver] will use rustc's 
[`FileLoader` API][rust-file-loader] to [provide a custom `FileLoader`][override-file-loader] that feeds 
our generated entry points directly into the compiler (i.e. without modifying the FRAME pallet's 
"actual" source code on disk - hence the "virtual" phrasing in the last paragraph).

[HIR]: https://rustc-dev-guide.rust-lang.org/hir.html
[HIR-lower]: https://rustc-dev-guide.rust-lang.org/lowering.html
[rustc-inc-comp-detail]: https://rustc-dev-guide.rust-lang.org/queries/incremental-compilation-in-detail.html
[rustc-inc-comp]: https://rustc-dev-guide.rust-lang.org/queries/incremental-compilation.html
[rust-file-loader]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_span/source_map/trait.FileLoader.html
[override-file-loader]: https://doc.rust-lang.org/nightly/nightly-rustc/rustc_interface/interface/struct.Config.html#structfield.file_loader

##### Using MIRAI as a library

At this point, we've already detailed how we'll use [rustc] as a library via our custom [rustc driver][rustc-driver], 
in order to customize compilation and analysis to our target domain (i.e. analyzing [FRAME pallets][FRAME]). 
Similarly, a few considerations mean we'll need to use MIRAI as a library as well, to give us more flexibility 
in resolving a few domain-specific challenges related to analyzing [FRAME pallets][FRAME].

[rustc]: https://github.com/rust-lang/rust

It was noted in the [previously completed research grant delivery][scs-research-delivery] that the diagnostic level 
had to be set to `paranoid` (i.e. `--diag=paranoid`) for MIRAI to emit some expected warnings. 
However, the `paranoid` diagnostic level produces a lot of warnings ([by design][MIRAI-diag-level]), 
since it's maximally strict and so warns about ["any issue that may be an error"][MIRAI-how], by essentially disabling 
some of MIRAI's "normal" mechanisms for [reducing false positives][MIRAI-false-+], like 
["suppressing any diagnostics that *arise* within the standard library or third party code 
[... i.e. diagnostics that are [not] tied to source locations within the [current] crate]"][MIRAI-false-+].

[MIRAI-diag-level]: https://github.com/facebookexperimental/MIRAI/blob/a94a8c77a453e1d2365b39aa638a4f5e6b1d4dc3/checker/src/options.rs#L32
[MIRAI-false-+]: https://github.com/facebookexperimental/MIRAI/blob/main/documentation/Overview.md#reducing-false-positives

However, by examining the reported diagnostic from [the previous research delivery][scs-research-delivery] 
(see image below), we can make a few important observations:
- The primary span/location for the diagnostic is pointing to the [`frame_support` pallet][FRAME-support], 
  and specifically the [`frame_support::storage::with_storage_layer` function][FRAME-support-with-store], 
  which explains why this diagnostic is only emitted at the `paranoid` level (i.e. it's arising from a 
  third-party library as far as MIRAI is concerned).
- There are still some sub-diagnostics relating the primary diagnostic to the current crate 
  (i.e. the `note: related location ...` lines).

![SCS Research Warning](https://raw.githubusercontent.com/scs/MIRAI/Milestone1_Research/substrate-examples/pallet_template/UnsatisfiedPrecondition.png)

Armed with this information, we can use [cargo expand] to have a look at the final code (i.e. after macro expansion) 
for the target dispatchable function (i.e. the [`do_something` function][SCS-do-something]) below:
```rust
impl<T: Config> Pallet<T> {
    /// ...
    pub fn do_something(origin: OriginFor<T>, something: u32) -> DispatchResult {
        frame_support::storage::with_storage_layer(|| {
            let who = ensure_signed(origin.clone())?;
            Self::sarp_put_sensitive_value(&origin, something)?;
            Self::deposit_event(Event::SomethingStored {
                something,
                who,
            });
            Ok(())
        })
    }
    
    /// ..
}
```

Notice that [FRAME] wraps the user written body of the dispatchable function, with a call to 
[`frame_support::storage::with_storage_layer`][FRAME-support-with-store-docs], and presumably the [indirection] 
introduced by this [closure]-based invocation, combined with the complexity introduced by the way 
[procedural macros report call-site information][proc-macro-call-site] leads to MIRAI reporting the
[closure call inside the `frame_support::storage::with_storage_layer` function][FRAME-support-with-store] as the 
primary source location for the diagnostic.

[FRAME-support]: https://docs.rs/frame-support/latest/frame_support/
[FRAME-support-with-store]: https://github.com/paritytech/polkadot-sdk/blob/6c5a42a690f96d59dbdf94640188f5d5b5cc47e2/substrate/frame/support/src/storage/transactional.rs#L178
[cargo expand]: https://crates.io/crates/cargo-expand
[SCS-do-something]: https://github.com/scs/MIRAI/blob/Milestone1_Research/substrate-examples/pallet_template/src/lib.rs#L100-L109
[FRAME-support-with-store-docs]: https://docs.rs/frame-support/latest/frame_support/storage/transactional/fn.with_storage_layer.html
[indirection]: https://en.wikipedia.org/wiki/Indirection
[closure]: https://doc.rust-lang.org/book/ch13-01-closures.html
[proc-macro-call-site]: https://doc.rust-lang.org/proc_macro/struct.Span.html#method.call_site

Presumably, we can find ways of "fixing" this in MIRAI, while taking care *not* to introduce false positives in
other adjacent cases, but such a generic fix will likely be *non*-trivial. 
Nevertheless, such efforts will be pursued, but not as part of the scope of this grant application.

However, an alternative approach is to use our domain-specific knowledge to determine which diagnostics to 
either "suppress" or "promote", because, being a domain-specific tool, pallet-verifier will always "know" more 
about the analysis context than MIRAI. Therefore, our approach will be to integrate with MIRAI as a library. 
This will allow us to access [MIRAI's diagnostics buffer][MIRAI-diag-buffer] directly, and use our own custom filters 
to determine which diagnostics to emit based on: the reported primary location, reported related locations, 
and taking into account the behavior of FRAME macro generated code.

[MIRAI-diag-buffer]: https://github.com/facebookexperimental/MIRAI/blob/main/checker/src/crate_visitor.rs#L50

Another benefit of this approach is it can lead to some efficiency gains by bypassing some redundant work in MIRAI 
(e.g. [iterating over all body owners][MIRAI-find-def-id] to find the [`DefId`][DefId] of the target function, 
when pallet-verifier already knows the relevant `DefId` and so can just call 
[the `analyze_body` function][MIRAI-analyze-body] directly e.t.c).

[MIRAI-find-def-id]: https://github.com/facebookexperimental/MIRAI/blob/a94a8c77a453e1d2365b39aa638a4f5e6b1d4dc3/checker/src/crate_visitor.rs#L84-L132
[MIRAI-analyze-body]: https://github.com/facebookexperimental/MIRAI/blob/main/checker/src/crate_visitor.rs#L174

Lastly, another lever for reducing false positives (i.e. irrelevant warnings) related to 
[incomplete analysis due to missing MIR bodies][MIRAI-incomplete] for ["foreign functions"][MIRAI-foreign-fns] 
(e.g. standard library functions that aren't inlined, and system calls), is to add 
["summaries/foreign contracts"][MIRAI-contracts] for these ["foreign functions"][MIRAI-foreign-fns], 
thus making the analysis more precise. While this part of MIRAI is not that well documented, 
it's not that hard to figure out how to add these ["summaries/foreign contracts"][MIRAI-contracts] 
from the [existing examples][MIRAI-contracts] and [related utilities][MIRAI-contract-util], 
which actually show that these ["summaries/foreign contracts" can be defined outside MIRAI][MIRAI-summary-util], 
which certainly gives us more flexibility without having to modify MIRAI itself.

[MIRAI-incomplete]: https://github.com/facebookexperimental/MIRAI/blob/main/documentation/Overview.md#incomplete-analysis
[MIRAI-contracts]: https://github.com/facebookexperimental/MIRAI/blob/main/standard_contracts/src/foreign_contracts.rs
[MIRAI-contract-util]: https://github.com/facebookexperimental/MIRAI/blob/main/checker/src/utils.rs#L402-L413
[MIRAI-summary-util]: https://github.com/facebookexperimental/MIRAI/blob/main/checker/src/utils.rs#L373-L376

##### Benchmarking performance and accuracy

This stage of the project will create a simple benchmark to showcase the performance and accuracy metrics of 
pallet-verifier on a few production pallets (e.g. 3-5 pallets from [this list][FRAME-pallet-list]). 
For each pallet in the benchmark suite, we'll add *bad* variants of dispatchable functions by 
replacing proper error handling and safe arithmetic constructs with panicking and overflow/underflow-ing equivalents, 
while also keeping the *good* variants unedited. The benchmarks will then report execution time and ratio of 
true vs false positives for each dispatchable function, as well as aggregates for these metrics for 
the target pallets and the entire benchmark suite.

In general, we'll be motivated to reduce the amount of false positives (if any), and that could be viewed as 
["gaming the benchmark"][gaming]. However, for our use case, this will be desirable behavior as long as 
the fixes applied to remove/reduce the false positives are generic in nature 
(i.e. the fixes are applicable to any pallet, and *don't* just simply detect the presence of a specific pallet and 
adjust the behavior of the tool based on this knowledge).

[FRAME-pallet-list]: https://docs.substrate.io/reference/frame-pallets/
[gaming]: https://en.wikipedia.org/wiki/Gaming_the_system

##### Other considerations

Finally, an important consideration to keep in mind is that MIRAI
["is intended to become a widely used static analysis tool for Rust"][MIRAI-intro], and in the wider Rust ecosystem, 
it's quite common (and sometimes even reasonable) for functions to panic in cases when they're called with 
"problematic" arguments. 

Because of this, MIRAI makes a lot of effort to try to 
[suppress warnings that would be perceived as false positives][MIRAI-false-+] in the context of the wider Rust ecosystem. 
However, some of these warnings are legitimate bugs in the context of a blockchain runtime. 
A notable example of this is MIRAI's [precondition inference][MIRAI-precond-infer] which has the effect of 
suppressing warnings about possible panics if the panic is conditional on a parameter of the entry point e.g.
MIRAI will not report a panic from the code snippet below, even at the `paranoid` diagnostic level, 
if it's analyzed as an entry point.

```rust
pub fn hates_zeros(val: u8) {
    if val == 0 {
        panic!("I hate zeros!");
    }
}
```
Note however, that this is only problematic for our use case if it happens in an entry point. 
This is because when `hates_zeros` is not an entry point, the inferred precondition (i.e. `verify!(val != 0)`), 
will need to be satisfied by the function's callers. 

This particular behavior ends up not being an issue for our proposed architecture, because our entry points 
will be simple and artificially constructed with no parameters and no branching.

[MIRAI-intro]: https://github.com/facebookexperimental/MIRAI/blob/main/README.md#mirai--
[MIRAI-precond-infer]: https://github.com/facebookexperimental/MIRAI/blob/main/documentation/Decisions.md#precondition-inference

#### Technology Stack

[Rust] - will be used for implementing all components of pallet-verifier.

### Ecosystem Fit

[FRAME pallets][FRAME] are an [essential building block for composing Substrate-based blockchain runtimes][pallets-essential], 
therefore, as rightfully identified by the [RFP for Static Analysis for Runtime Pallets][RFP], tools like 
pallet-verifier that integrate directly into developer workflows, and detect and warn developers about potential 
security vulnerabilities in pallets are essential for improving security in the Polkadot/Substrate/Kusama ecosystem.

[pallets-essential]: https://docs.substrate.io/learn/architecture/#frame-libraries-for-the-runtime

## Team :busts_in_silhouette:

### Team members

- David Semakula [davidsemakula](https://github.com/davidsemakula)

### Contact

- **Contact Name:** David Semakula
- **Contact Email:** hello@davidsemakula.com
- **Website:** https://davidsemakula.com

### Legal Structure

I'll be working as an individual.

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

I'm an independent Software Engineer & Systems Architect with over 10 years of experience.

I'm the creator of [ink! analyzer] (a collection of modular and reusable libraries and tools for 
semantic analysis of [ink!] smart contracts). Notably, like [FRAME], [ink!] is also a Rust [DSL].
I also [independently contribute][r-a-contribute] to [rust-analyzer] (a Rust [compiler front-end] for IDEs).


I've previously worked as a technical lead on projects for [HubSpot], [Permobil], [Pressboard], [Grindery], 
[InboundLabs], [Tunga], [ButterflyWorks], [Telegraaf Media Groep (TMG)][TMG] and many more companies.

I hold a Bachelor of Science in Computer Science degree from [Makerere University, Kampala, Uganda][MUK].
You can find my full profile at https://davidsemakula.com.

[ink! analyzer] was previously funded by two Web3 Foundation grants (see [this][grant-1] and [this][grant-2]).

[ink! analyzer]: https://github.com/ink-analyzer
[ink!]: https://use.ink/
[r-a-contribute]: https://github.com/rust-lang/rust-analyzer/pulls?q=is%3Apr+author%3Adavidsemakula
[rust-analyzer]: https://github.com/rust-lang/rust-analyzer
[compiler front-end]: https://en.wikipedia.org/wiki/Compiler#Front_end
[HubSpot]: https://www.hubspot.com/
[Permobil]: https://www.permobil.com/
[Pressboard]: https://www.pressboardmedia.com/
[Grindery]: https://www.grindery.io/
[InboundLabs]: https://w.inboundlabs.co/
[Tunga]: https://tunga.io/
[ButterflyWorks]: https://www.butterflyworks.org/
[TMG]: https://www.telegraaf.nl/
[MUK]: https://cis.mak.ac.ug/
[grant-1]: https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md
[grant-2]: https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer-phase-2.md


### Team Code Repos

- https://github.com/davidsemakula
- https://github.com/ink-analyzer/ink-analyzer
- https://github.com/ink-analyzer/ink-vscode
- https://github.com/wamutech/wamu-rs
- https://github.com/wamutech/wamu-spec
- https://github.com/davidsemakula/substrate-vault
- https://github.com/mukutu-tech/mukutu-safe

### Team LinkedIn Profiles (if available)

- https://davidsemakula.com (I use my own website for my profile)


## Development Status :open_book:

A significant amount of research of internals of the related tools (i.e. [rustc] and [MIRAI]), as well as a review 
of the [previously completed research delivery by Supercomputing Systems AG (SCS)][scs-research-delivery], 
has been done to inform the proposed architecture of pallet-verifier, as described in detail in the 
[Project Details](#project-details) section above. 
Beyond this, no meaningful development has started for this project.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** ~4 months
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 30,000 USD

### Milestone 1 — rustc driver, cargo subcommand, basic MIRAI integration, and automatic tractable entry point generation

- **Estimated duration:** ~7-8 weeks
- **FTE:**  1
- **Costs:** 15,000 USD

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|--------:|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | MIT or Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **0b.** | Documentation             | I will provide detailed source documentation including [rustdoc] documentation, a document describing the design and high-level architecture of pallet-verifier (i.e. similar to the [project details](#project-details) section of this document), and a README file providing general information about the tool, installation and usage instructions, and links to other documentation and resources related to the tool.                                                                                                                                                                                                                                    |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive [UI tests] to ensure functionality and robustness. Additionally, a [benchmark suite that showcases the performance and accuracy metrics of the tool on 3-5 production pallets](#benchmarking-performance-and-accuracy) will be implemented. In the guide, I will describe how to run these tests and benchmarks.                                                                                                                                                                                                                                                                                          |
| **0d.** | Docker                    | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|      1. | Rust binary crate         | I will create a Rust binary crate that implements a custom [rustc driver][rustc-driver], [custom cargo subcommand][cargo-sub-cmd], basic [MIRAI] integration (i.e. excluding [automatic annotation capabilities](#adding-mirai-annotations-automatically)), and [automatic tractable entry point generation](#generating-tractable-entry-points-automatically) which will enable invoking pallet-verifier as a cargo subcommand (e.g. `cargo verify-pallet`) on [FRAME pallets][FRAME] to detect potential [panics] and [arithmetic overflow/underflow] due to arithmetic operations (i.e. excluding [`as` conversions/ type cast operations][as-conversions]). |

[rustdoc]: https://doc.rust-lang.org/rustdoc/what-is-rustdoc.html
[UI tests]: https://rustc-dev-guide.rust-lang.org/tests/ui.html#introduction

### Milestone 2 — MIR annotation capabilities and detecting arithmetic overflow/underflow (and lossy integer conversions) due to `as` conversions

- **Estimated duration:** ~7-8 weeks
- **FTE:**  1
- **Costs:** 15,000 USD

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|--------:|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | MIT or Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **0b.** | Documentation             | I will provide detailed source documentation including [rustdoc] documentation, a document describing the design and high-level architecture of pallet-verifier (i.e. similar to the [project details](#project-details) section of this document), and a README file providing general information about the tool, installation and usage instructions, and links to other documentation and resources related to the tool.                                                                                   |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive [UI tests] to ensure functionality and robustness. Additionally, a [benchmark suite that showcases the performance and accuracy metrics of the tool on 3-5 production pallets](#benchmarking-performance-and-accuracy) will be implemented. In the guide, I will describe how to run these tests and benchmarks.                                                                                                                                         |
| **0d.** | Docker                    | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     0e. | Article                   | I will publish an **article** that explains how pallet-verifier works, the security vulnerabilities it can detect, and how to use it to analyze [FRAME pallets][FRAME].                                                                                                                                                                                                                                                                                                                                        |
|      1. | Rust binary crate update  | I will update the Rust binary that implements pallet-verifier to support [adding the `mirai-annotations` crate as a dependency to FRAME pallets without editing `Cargo.toml`](#adding-the-mirai-annotations-crate-as-a-dependency), [adding MIRAI annotations to MIR](#adding-mirai-annotations-to-mir), and more specifically to support [automatically adding annotations for verifying that integer `as` conversions don't overflow/underflow nor lose precision](#adding-mirai-annotations-automatically). |

## Future Plans

In the short term, I will likely apply for follow-up funding for:
- improving or widening the scope of existing analyses e.g. detecting panics in [pallet/runtime hooks][pallet-hooks].
- adding analyses for more [vulnerability classes][vulnerabilities] and [insecure patterns] 
  (e.g. [insufficient or missing origin checks][origin-checks], [bad randomness][randomness], 
  [insufficient unsigned transaction validation][validate-unsigned] e.t.c).
- adding support for using other specialized static analysis tools as backends for specific analyses 
  (e.g. [symbolic execution engines][symbex]).

[pallet-hooks]: https://paritytech.github.io/polkadot-sdk/master/frame_support/traits/trait.Hooks.html
[insecure patterns]: https://docs.substrate.io/build/troubleshoot-your-code/#unsafe-or-insecure-patterns
[construct_runtime!]: https://docs.rs/frame-support/latest/frame_support/macro.construct_runtime.html

Additionally, an often noted disadvantage of building Rust static analysis tools based on [MIR] (and indeed plugging into the 
rust compiler in general), is the fact that rustc's APIs for [MIR] (or more generally rustc's internal APIs) 
are [unstable][rustc-driver]. 
There's an ongoing effort to address some of these issues in the form of the official 
[Stable MIR Librarification Project][stable-mir], however, this project is still relatively early, and at the moment, 
also still [unstable (i.e. pre-1.0)][stable-mir-plan]. 
Nevertheless, migrating pallet-verifier (and related tools like [MIRAI]) to the [stable MIR API][stable-mir], 
whenever it's ready, should be considered a long-term goal for the project.

[stable-mir]: https://github.com/rust-lang/project-stable-mir
[stable-mir-plan]: https://hackmd.io/XhnYHKKuR6-LChhobvlT-g?view#Requirements

Another related area of interest would be either extending the scope of the tool,
or creating a similar tool, to analyze [ink!] smart contracts using similar static analysis tools and techniques.

Finally, as the project is a public good, ultimately, the long term goal is to create a community of users, 
contributors and ecosystem partners who are invested in the project's long-term success because of its utility.

## Referral Program (optional) :moneybag:

N/A

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

Web3 Foundation Website.

I have also previously successfully applied for and completed two Web3 Foundation grants 
(see [this][grant-1] and [this][grant-2]) for [ink! analyzer] 
(a collection of modular and reusable libraries and tools for semantic analysis of [ink!] smart contracts).
