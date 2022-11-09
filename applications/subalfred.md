# Subalfred
- **Team Name:** hack-ink
- **Payment Address:** 0xccd79b2b77e71292924e85de130bfb1c03d94522 (Ethereum)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview
`subalfred`'s goal is to become an all-in-one Substrate development toolbox.

It provides a bunch of tools to make the developers feel more comfortable while playing with Substrate.

### Project Details
Check the [Subalfred Book](https://subalfred.hack.ink).

### Ecosystem Fit
- Where and how does your project fit into the ecosystem?
  - A CLI tool is written in Rust that Substrate developers can use anywhere.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - I encourage all the Substrate developers to try this tool.
    I believe there must be at least one feature that benefits them.
- What need(s) does your project meet?
  - Improve the experience for Substrate developers.
  - Speed up the debug/development process.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - Some features are unique and some features are similar to the other projects.
  - If so, how is your project different?
    - [`subalfred key`](https://subalfred.hack.ink/user/cli/key.html) vs [Subscan format transform tool](https://polkadot.subscan.io/tools/format_transform)
      - Can be use offline.
      - Use official [ss58-registry](https://github.com/paritytech/ss58-registry) as dependency directly.
      - Detect the key type automatically.
      - Accept `ParaId(u32)` as input.
      - Accept `PalletId([u8; 8])` as input.
    - [`subalfred state export`](https://subalfred.hack.ink/user/cli/state.html#export) vs [fork-off-substrate](https://github.com/maxsam4/fork-off-substrate)
      - Use Rust instead of JS. No variable size limitation, easily export large chain state.
      - Use WS/Rust/Async. Faster, max speed up to 20k pairs per second.
    - [`subalfred rpc`](https://subalfred.hack.ink/user/cli/rpc.html) vs `curl`
      - More concise syntax.
  - If not, are there similar projects in related ecosystems?
    - No.

## Team :busts_in_silhouette:

### Team members
- Xavier Lau

### Contact
- **Contact Name:** Xavier Lau
- **Contact Email:** xavier@inv.cafe
- **Website:** https://linktr.ee/aurevoirxavier

### Legal Structure
Personal. (no legal structure entry)

### Team's experience
[Xavier Lau](https://github.com/AurevoirXavier)
  - Six years of experience in Rust.
  - Three years of experience in Substrate.
  - Darwinia Network core developer, since 2019.
  - Actively at [Substrate StackExchange](https://substrate.stackexchange.com/users/251/aurevoirxavier).

### Team Code Repos
- https://github.com/hack-ink
- https://github.com/hack-ink/array-bytes
- https://github.com/hack-ink/cloudflare-bypasser
- https://github.com/hack-ink/codewars
- https://github.com/hack-ink/unescaper

Please also provide the GitHub accounts of all team members.
If they contain no activity, references to projects hosted elsewhere or live are also fine.
- https://github.com/AurevoirXavier

### Team LinkedIn Profiles (if available)
- https://www.linkedin.com/in/xavier-lau-b0655310a

## Development Status :open_book:
> [GitHub](https://github.com/hack-ink/subalfred), [Subalfred Book](https://subalfred.hack.ink)

There are three parts:
- [CLI](https://github.com/hack-ink/subalfred/tree/main/src/bin/subalfred) components.
- [Core libraries](https://github.com/hack-ink/subalfred/tree/main/src/subalfred).
- [Substrate minimal libraries](https://github.com/hack-ink/subalfred/tree/main/substrate-minimal),
  some Substrate libraries's re-implementations reduce the unnecessary dependencies as much as possible.

### Overview
- **Total Estimated Duration:** 8 weeks
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 30,000 USD in Ethereum USDC

### Milestone 1 — Polish the existing features and add more new features
- **Estimated duration:** 5 weeks
- **FTE:**  1
- **Costs:** 24,000 USD

| Number | Deliverable                        | Specification                                                                                                                              |
| -----: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
|    0a. | License                            | GPLv3                                                                                                                                      |
|    0b. | Documentation                      | I'll document every `pub` function and a basic tutorial that explains how a user interact with Subalfred.                                  |
|    0c. | Testing guide                      | Core functions will be fully covered by unit tests to ensure functionality and robustness. Simply run `cargo test` under the project root. |
|     1. | Core: check features               | I'll finish the this features, which is use for checking Substrate runtime runtime-benchmarks/std/try-runtime features enable status.      |
|     2. | Core: use paritytech/ss58-registry | I'll make PR to paritytech/ss58-registry to support my custom logic, and setup the dependabot to update ss58-registry automatically.       |
|     3. | Core, CLI: override runtime code   | I'll make it able to override the runtime code while fork-off the chain state.                                                             |
|     3. | Core, CLI: rpc                     | I'll finish the this features, user could use this command to send the RPC call to the Substrate node.                                     |
|     4. | CLI: JSON output                   | I'll make `key` command provides JSON output.                                                                                              |a
|     5. | CLI: stable Rust toolchain         | I'll rewrite the subcommand parts in procedure macro to remove the unstable Rust features usage.                                           |
|     6. | CLI: `--at` accept block number    | I'll make the `--at` arg accept block number input, instead of a block hash only. Any command with `--at` arg will be updated.             |
|     7. | Releases                           | Linux, macOS, Windows prebuilt binaries, and crates.io release.                                                                            |

### Milestone 2 — Add more new features
- **Estimated Duration:** 2 week
- **FTE:**  1
- **Costs:** 4000 USD

| Number | Deliverable               | Specification                                                                                                                              |
| -----: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
|    0a. | License                   | GPLv3                                                                                                                                      |
|    0b. | Documentation             | I'll document every `pub` function and a basic tutorial that explains how a user interact with Subalfred.                                  |
|    0c. | Testing guide             | Core functions will be fully covered by unit tests to ensure functionality and robustness. Simply run `cargo test` under the project root. |
|     1. | License                   | GPLv3.                                                                                                                                     |
|     2. | Core, CLI: track-updates  | List the companions that you need to do from substrate/cumulus/frontier/parity-bridges-substrate.                                          |
|     3. | Core, CLI: update-subdeps | Update the substrate/cumulus/frontier/parity-bridges-substrate dependencies in one command.                                                |
|     4. | Releases                  | Release Linux, macOS, Windows prebuilt binaries on GitHub, and crates.io.                                                                  |

### Milestone 3 — Provide checks' GitHub Actions
- **Estimated Duration:** 1 week
- **FTE:**  1
- **Costs:** 2000 USD

| Number | Deliverable                            | Specification                                                                                  |
| -----: | -------------------------------------- | ---------------------------------------------------------------------------------------------- |
|    0a. | License                                | GPLv3                                                                                          |
|    0b. | Documentation                          | I'll provide the inline documentation.                                                         |
|    0c. | Testing guide                          | I'll provide a GitHub Actions setup example and describe how to check the result.              |
|     1. | GitHub Actions: check runtime features | I'll provide a GitHub Actions, which could check the runtime features status while developing. |
|     2. | GitHub Actions: check runtime storage  | I'll provide a GitHub Actions, which could check the runtime storage changes while developing. |
|     3. | GitHub Actions: check runtime version  | I'll provide a GitHub Actions, which could check the runtime version changes while developing. |
|     4. | Release                                | Release on GitHub.                                                                             |

## Future Plans
- Keep connected with the community/parity to provide more useful tools.

## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.
From my team, Darwinia Network.

As I said, `subalfred`'s goal is to become an all-in-one Substrate development toolbox.
I browsed Substrate's issues and was active on Substrate StackExchange,
and discuss with other developers to know what do they need while developing on Substrate.
Currently, I have already implemented some of them and plan to do more.
So, I hope all these features can be a part of this grant.

According to your suggestions.
I'll document every public functions, and write unit tests for them.
There are around 30+ features.
Please note this is a part of milestone 1.

I'd love to convert these milestone to issues on the [repository](https://github.com/hack-ink/subalfred).
It will be much easier to track the status.

### Amending
- Remove **0.d** from milestone **1** and **2**. Because I realize that it is much easier for you to test this with a simple `cargo test` command. So, I decide to use **cargo** instead of **docker**. [Discussion](https://github.com/w3f/Grant-Milestone-Delivery/pull/615#issuecomment-1308480639)
