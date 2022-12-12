# W3F Maintenance Grant Proposal

- **Project Code Name:** `wasm-opt` for Rust Maintenance
- **Team Name:** Common Orbit LLC
- **Payment Address:** (Ethereum DAI) 0x2de31E52E24Df0588C64B27657D4F75e5462adEf


## Project Overview :page_facing_up:

This is a followup to the [`wasm-opt` for Rust grant][wafr],
which [completed successfully][wafrc] on November 11.

[wafr]: https://github.com/w3f/Grants-Program/pull/1070
[wafrc]: https://github.com/w3f/Grant-Milestone-Delivery/pull/611



### Overview

`wasm-opt` for Rust is a project to create Rust bindings to [Binaryen's
`wasm-opt`][`wasm-opt`] tool. It allows creators of WebAssemly toolchains
written in Rust to directly optimize their WebAssembly output instead of
calling a 3rd-party non-Rust binary.

[`wasm-opt`]: https://github.com/WebAssembly/binaryen

It has been integrated into

- Ink!'s [`cargo-contract`](https://github.com/paritytech/cargo-contract/pull/766)
- Substrate's [`wasm-builder`](https://github.com/paritytech/substrate/pull/12280#issuecomment-1295079049)
- Stellar's [Soroban CLI](https://github.com/stellar/soroban-cli/pull/236)

This grant will primarily provide funding to update the `wasm-opt` crate
following new releases of Binaryen, after which we will also upgrade
`cargo-contract` and `wasm-builder`.

We will also fix some outstanding issues that were out of scope for the previous
grant, and respond to new bug reports and feature requests as they arrive.

This project should continue to be supported because it is part of the Substrate
and Ink! toolchains; the underlying Binaryen code receives approximately six new
releases yearly; and it will take effort to maintain the `wasm-opt` bindings as
the Binaryen code changes.


### Maintenance list

Please provide a list of the repo(s) that need maintenance and further development:

- https://github.com/brson/wasm-opt-rs


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
They have performed Rust work for Mozilla, Reddit, PingCAP, Solana, MobileCoin, Parity, Nervos, and the Web3 Foundation.
Both team members are maintainers of the [Rust in Blockchain](https://rustinblockchain.org/) newsletter.

The team has previously completed the [`wasm-opt` for Rust][wafr] grant under the same legal entity.


### Team Code Repos

- https://github.com/brson/wasm-opt-rs
- https://github.com/brson
- https://github.com/aimeedeer

### Team LinkedIn Profiles (if available)

N/A

## Development Status :open_book:

The project is functionally complete
and is expected to continue in maintenance-mode.
Its development was documented in a [blog post](https://brson.github.io/2022/10/26/creating-wasm-opt-rust-bindings-with-cxx).

Progress is tracked on the [issue tracker](https://github.com/brson/wasm-opt-rs/issues).


## Maintenance Responsibilities :nut_and_bolt:

The primary need for a maintenance grant is to update the crate
following new releases of Binaryen.

In both 2021 and 2022 there were six releases of Binaryen.
We already have experience with one upgrade that required approximately 10 hours of work.

Note that there has been a new release of Binaryen since the completion of the
previous grant. Upgrading to that release will be performed under this
maintenance grant.

Our responsibilities:

- Update and publish new versions of the `wasm-opt` crate when new versions of
  Binaryen are released.
- Submit PRs to upgrade `wasm-opt` in `cargo-contract` and `wasm-builder`
  when new versions are published.
- Fix reported bugs if possible and within budget.
- Implement minor feature requests if disirable and within budget.

Issues we want to fix:

- [Fix Unicode paths on Windows](https://github.com/brson/wasm-opt-rs/issues/40).
  This is the major outstanding bug, but it is a bug in upstream Binaryen.
  The maintainers of that project are open to patches fixing it.
  It is a major task, perhaps 20+ hours.
- [Unable to delete build-time symlink on Windows](https://github.com/brson/wasm-opt-rs/issues/116).
  This has been reported by the maintainer of a substrate chain.
  It requires investigation and possible upstream work in the `cxx` crate to fix.
- [Minor issues collected in milestone "M3"](https://github.com/brson/wasm-opt-rs/milestone/2).


### Overview

- **Start Date:** 2022/12/01
- **Sprint/Period Duration:** 4 weeks
- **Total Duration:** 1 year
- **Full-Time Equivalent (FTE):**  0.1
- **Max budget per sprint/period:** 6000 USD
- **Hourly rate:** 300 USD

We expect this project to require light maintenance,
that most months the full budget will not be required,
that some months may require no work.
The first few months will likely have above-average
activity as we resolve outstanding issues.

The monthly budget is calculated based on the following:

- 10 hours to upgrade Binaryen
- 300 USD / hour
- x2 for unforseen obstacles

This implies that a particularly difficult upgrade could exceed the monthly budget.
In such a case the work would spill over across multiple months,
and we might forego other maintenance work.


## Future Plans

We intend to upgrade the `wasm-opt` crate following new releases of Binaryen
for as long as the project remains funded.

We expect minor bug reports and feature requests,
but do not intend to make major changes to the project,
or introduce major new features.

We expect to continue to be involved in the Substrate / Ink! ecosystems, and to
make additional grant proposals related to WebAssembly, Ink!, and Substrate in
the future.


## Additional Information :heavy_plus_sign:

**How did you hear about the Maintenance Grants Program?** personal recommendation
