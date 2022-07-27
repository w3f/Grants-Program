# W3F Grant Proposal

- **Project Name:** `wasm-opt` for Rust
- **Team Name:** Common Orbit LLC
- **Payment Address:** (Polkadot aUSD) 143W7CfR2R1dbATX3RVtrYfDXUMju1ua9pQh9B3DpLsuuB5M
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2




## Project Overview :page_facing_up:

### Overview

This project makes the [`wasm-opt`] tool more accessible to Rust programmers.
`wasm-opt` is a [WebAssembly] optimizer and is required by most software toolchains that
produce WebAssembly binaries.

[`wasm-opt`]: https://rustwasm.github.io/book/reference/tools.html#wasm-opt--a-hrefhttpsgithubcomwebassemblybinaryenrepositorya
[WebAssembly]: https://webassembly.org/

This project is to package `wasm-opt` as a cargo crate,
so that it can be installed by typing

> `cargo install wasm-opt`

Additionally, it will provide a Rust API so that toolchain developers may,
if they desire, call `wasm-opt` programmatically,
so that their users are not required to manually install the tool.

`wasm-opt` is a part of the [binaryen] toolset, written in C++.
It is almost universally required by all toolchains that compile to WebAssembly.
It is required by Parity's [`cargo-contract`] tool for [ink!] development.

[binaryen]: https://github.com/WebAssembly/binaryen
[`cargo-contract`]: https://github.com/paritytech/cargo-contract
[ink!]: https://github.com/paritytech/ink

**This tool can not be aquired in the way Rust programmers expect &mdash; with `cargo install`.**
Installation of the tool is system-dependent.
Many system package managers have some version of it,
in some cases an old version;
or it can be downloaded in binary form for most platforms, from GitHub,
in which case it has to be extracted and added to the environment `PATH` variable in an ad-hoc way.

In [our personal experience][wasmexp], aquiring this tool was a minor, but needless, barrier, to programming with [ink!].

[wasmexp]: #appendix-the-wasm-opt-installation-experience

In the course of this grant `cargo-contract` will receive pull requests
to optionally enable both the following:

1) recommend installation via `cargo install wasm-opt`
2) use `wasm-opt` via API and not require installation.




### Project Details

Note that although `wasm-opt` comes from the binaryen suite of tools,
this project is only focused on `wasm-opt`.
All other binaryen tools are out of scope.
If this project is successful and there is demand,
future work can extend the technique to the rest of binaryen.

This project is technically straightforward.
The main complication is that within `cargo` it is not possible to install binaries that were not produced
directly by the Rust compiler.
This means that it is not possible to simply build `wasm-opt` in a build script, then have `cargo` install it.

This is the basic approach we will take, for the executable:

- a `wasm-opt-sys` crate builds the C++ code for `wasm-opt`
- the C++ source is built with only the C++ compiler all Rust users will have installed,
  no CMake or other build-system dependency
- the C++ `wasm-opt` source is minimally-patched to export its `main` function with C ABI to be called from Rust
- a `wasm-opt` crate contains a tiny Rust module that calls the C `wasm-opt` main function

We have prototyped the project sufficiently to believe the described approach will succeed.

For the library bindings:

- `wasm-opt-sys` will export low-level Rust bindings with the help of one
  of the common C++-integration crates, likely `cxx`
- `wasm-opt` will provide an idiomatic Rust wrapper that exposes the necessary `wasm-opt` options programmatically

We will also deliver the following:

- Full README and API documentation
- Basic regression tests for the binary and library
- CI for the platforms
  - `aarch64-apple-darwin`
  - `aarch64-unknown-linux-gnu`
  - `i686-pc-windows-msvc`
  - `i686-unknown-linux-gnu`
  - `x86_64-apple-darwin`
  - `x86_64-pc-windows-msvc`
  - `x86_64-unknown-linux-gnu`
- Pull requests adding optional support for the `wasm-opt` crate to
  - `cargo-contract`, the ink! build tool
- One blog post about the tool and its development, at https://brson.github.io




### Ecosystem Fit

This project is immediately useful to all Rust developers that build for wasm.

It is more specifically useful to developers of Rust-based toolchains that target wasm,
and most specifically the `cargo-contract` tool used to compile ink! programs.
It is probably relevant to authors of Substrate runtimes as well,
though we do not have that experience yet.


#### Prior Work and Alternatives

There are existing [Rust bindings for binaryen][brs].
As-is they don't provide a route to installing `wasm-opt` via cargo.
It is unclear if they provide the APIs needed to expose `wasm-opt` programmatically,
though they probably do.
These bindings appear to rely on CMake to build.
We do not expect to use them directly, but may reference them during development.

[brs]: https://github.com/pepyakin/binaryen-rs

The [`cargo-wasi`] tool takes a [different strategy][cws] to acquiring `wasm-opt`.
It automatically downloads the `wasm-opt` binary, presumably from the official releases.
Other wasm toolchains like `cargo-contract` could follow a similar strategy,
possibly by extracting the existing logic from `cargo-wasi`.

[`cargo-wasi`]: https://github.com/bytecodealliance/cargo-wasi
[cws]: https://bytecodealliance.github.io/cargo-wasi/wasm-opt.html#which-wasm-opt-executed





## Team :busts_in_silhouette:

### Team members

- **Team lead:** [Brian Anderson](https://github.com/brson)
- **Team member:** [Aimee Zhu](https://github.com/aimeedeer)

### Contact

- **Contact Name:** Brian Anderson
- **Contact Email:** andersrb@gmail.com
- **Website:** https://brson.github.io

### Legal Structure

- **Registered Address:** 16192 Coastal Highway, Lewes, Delaware 19958
- **Registered Legal Entity:** Common Orbit LLC

### Team's experience

The team lead is one of the original authors of the Rust programming language,
with 12 years of Rust experience.
They have performed Rust work for Mozilla, Reddit, PingCAP, Solana, MobileCoin, Parity, and Nervos.
Both team members are maintainers of the [Rust in Blockchain](https://rustinblockchain.org/) newsletter.

### Team Code Repos

- https://github.com/brson/wasm-opt-rs
- https://github.com/brson
- https://github.com/aimeedeer

### Team LinkedIn Profiles (if available)

N/A




## Development Status :open_book:

https://github.com/brson/wasm-opt-rs

We have created the initial project layout and investigated the feasibility of building the binaryen codebase using only the [`cc`] crate,
as well as the feasibility of trivially calling the `wasm-opt` `main` function from Rust as described.

[`cc`]: https://docs.rs/cc/latest/cc/

We have reserved the `wasm-opt` and `wasm-opt-sys` crate names on crates.io.




## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3-4 months
- **Full-Time Equivalent (FTE):**  0.4
- **Total Costs:** 30,000 USD

This will be a part time effort.
I have divided this into two logical milestones,
though in reality the work will overlap.


### Milestone 1 — Proof of Concept

- **Estimated duration:** 1-2 month
- **FTE:**  0.4
- **Costs:** 15,000 USD

During this phase we will prove the concept and produce a `wasm-opt` Rust binary and API.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT / Apache-2.0 |
| 0b. | Documentation | Basic README. |
| 0c. | Testing Guide | Manual smoke testing on Linux, Windows, and MacOS, x86_64 and ARM. |
| 0d. | Docker | Docker is not required for this project. |
| 1. | `wasm-opt` binary | Produce a `wasm-opt` binary that can be built by cargo but is otherwise identical to stock `wasm-opt`. |
| 2. | APIs | Write an idiomatic, but possibly incomplete, Rust API for loading wasm, optimizing it, and writing it again. |


### Milestone 2 — Integration

- **Estimated duration:** 1-2 month
- **FTE:**  0.4
- **Costs:** 15,000 USD

During this phase we will prepare the project for production and integrate it with `cargo-contract`.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT / Apache-2.0 |
| 0b. | Documentation | Full README and API docs. |
| 0c. | Testing Guide | Basic integration tests for both binary and library. |
| 0d. | Docker | Docker is not required for this project. |
| 0e. | Article | Publish a technical blog post about how the project was developed and indicating it is available for use. |
| 1. | APIs | Ensure the APIs expose all the `wasm-opt` options, and can be easily integrated into tools like `cargo-contract`. |
| 2. | `cargo-contract` integration | Submit a PR to `cargo-contract` that integrates the `wasm-opt` crate. |
| 3. | CI | Set up CI for all indicated platforms. |




## Future Plans

Upon completion of this project we will pursue a maintainence grant
to supply hourly funds for maintenance of this project.
We expect maintenance to be minimal,
primarily updating the code and making new releases to match upstream binaryen releases,
and responding to issue reports.

We are interested in pursuing a pure-Rust alternative to `wasm-opt` with a limited
focus of quickly shrinking wasm binaries.

We expect to pursue additional projects related to ink! and Substrate.




## Appendix: The `wasm-opt` installation experience

Upon calling `cargo-contract build` without `wasm-opt` installed
the build errors with this long explanation:

```
ERROR: wasm-opt not found! Make sure the binary is in your PATH environment.

We use this tool to optimize the size of your contract's Wasm binary.

wasm-opt is part of the binaryen package. You can find detailed
installation instructions on https://github.com/WebAssembly/binaryen#tools.

There are ready-to-install packages for many platforms:
* Debian/Ubuntu: apt-get install binaryen
* Homebrew: brew install binaryen
* Arch Linux: pacman -S binaryen
* Windows: binary releases at https://github.com/WebAssembly/binaryen/releases
```

Despite the effort to explain how to install this tool,
following the instructions on our system resulted in an old version of `wasm-opt`
and `cargo-contract` produced a new error:

```
ERROR: Your wasm-opt version is 91, but we require a version >= 99.

If you tried installing from your system package manager the best
way forward is to download a recent binary release directly:

https://github.com/WebAssembly/binaryen/releases

Make sure that the `wasm-opt` file from that release is in your `PATH`.
```

This actually did about the best that could be expected to help us
get set up, and we did end up downloading the binary tarball,
extracting it, and modifying our path.
But the experience could be better.
