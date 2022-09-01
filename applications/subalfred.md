# Subalfred
- **Team Name:** hack-ink
- **Payment Address:** 156HGo9setPcU2qhFMVWLkcmtCEGySLwNqa3DaEiYSWtte4Y (Polkadot)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview
Your Substrate Alfred takes all good care of you.

`subalfred`'s goal is to become an all-in-one Substrate development toolbox.
It provides a bunch of tools to help people develop on Substrate.

### Project Details
`subalfred` could help the developers more comfortable playing with Substrate.

Currently, it provides:
- check
  - runtime
    - check storage changes
    - check version changes
  - check runtime pallets std feature enable status
- convert
  - ascii to hex
  - bytes style conversion
  - bytes to hex
  - hex to bytes
- hash
  - blake2-128
  - blake2-128-concat (default)
  - blake2-256
  - blake2-512
  - twox64
  - twox64-concat
  - twox128
  - twox256
  - keccak256
  - keccak512
  - sha2-256
- key
  - public key to SS58 address
  - SS58 address to SS58 address
  - show SS58 prefix
  - list all the SS58 addresses on different networks of the public key
  - detect if the address is pallet id, para id or sibling id
  - calculate Polkadot-XCM sovereign address
- get
  - runtime upgrade happened on which block height
- state
  - check the differences between two state
  - export the chain state
  - fork-off the chain state
  - override the chain state from b to a
- storage-key
  - calculate the storage prefix from the given pallet/item name
- workspace
  - update all the workspace members version to the given version

### Ecosystem Fit
- Where and how does your project fit into the ecosystem?
  - A CLI tool is written in Rust that Substrate developers can use anywhere.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - I encourage all the Substrate developers to try this tool. I believe there must be at least one feature that benefits them.
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

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/AurevoirXavier

### Team LinkedIn Profiles (if available)
- https://www.linkedin.com/in/xavier-lau-b0655310a

## Development Status :open_book:
> [GitHub](https://github.com/hack-ink/subalfred), [Documentation](https://subalfred.hack.ink)

I have already finish a lot of jobs. It's actively developing.

There are three parts:
- [CLI](https://github.com/hack-ink/subalfred/tree/main/src/bin/subalfred): The command line interfaces.
- [Core Libraries](https://github.com/hack-ink/subalfred/tree/main/src/subalfred): The core libraries.
- [Substrate Minimal Libraries](https://github.com/hack-ink/subalfred/tree/main/substrate-minimal): Some Substrate library's re-implementations reduce the unnecessary dependencies as much as possible.

### Overview
- **Total Estimated Duration:** 3 weeks
- **Full-Time Equivalent (FTE):**  0.5 FTE
- **Total Costs:** 30,000 USD in DOT

### Milestone 1 — Implement the skeleton and part of the features
- **Estimated duration:** 1 week
- **FTE:**  0.5
- **Costs:** 25,500 USD

In this milestone, I'll implement all the features that I put in the [project details].
Once enter the milestone 2, I'll update the [project details].
| Number | Deliverable   | Specification                                                                                                                             |
| -----: | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
|     1. | License       | GPLv3                                                                                                                                     |
|     2. | Features      | `check`, `convert`, `hash`, `key`, `get`, `state`, `storage-key`, `workspace`, and all the subcommands of them. 15 commands, 31 features. |
|     3. | Unit tests    | A unit tests set cover all the public functions.                                                                                          |
|     4. | Documentation | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user interact with the CLI.         |
|     5. | Release       | Linux, macOS, Windows prebuilt binaries, and crates.io release.                                                                           |

[project details]: #project-details

### Milestone 2 — Extra features
- **Estimated Duration:** 1 week
- **FTE:**  1
- **Costs:** 3000 USD

| Number | Deliverable                 | Specification                                                                                                                     |
| -----: | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|     1. | License                     | GPLv3.                                                                                                                            |
|     2. | Update tracking feature     | List the companions that you need to do from substrate/cumulus/frontier/parity-bridges-substrate.                                 |
|     3. | Update dependencies feature | Update the substrate/cumulus/frontier/parity-bridges-substrate dependencies in one command.                                       |
|     4. | Unit tests                  | A unit tests set cover all the public functions.                                                                                  |
|     5. | Documentation               | I will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user interact with the CLI. |
|     6. | Release                     | Release Linux, macOS, Windows prebuilt binaries on GitHub, and crates.io.                                                         |

### Milestone 3 — Provide Changes GitHub Actions
- **Estimated Duration:** 1 week
- **FTE:**  1
- **Costs:** 1500 USD

| Number | Deliverable    | Specification                                                                            |
| -----: | -------------- | ---------------------------------------------------------------------------------------- |
|     1. | License        | GPLv3                                                                                    |
|     2. | GitHub Actions | Each check feature's corresponding GitHub Actions. And update tracking's GitHub Actions. |
|     5. | Release        | Release on GitHub and add to GitHub Actions market.                                      |

## Future Plans
- Keep connected with the community/parity to provide more useful tools.

## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.
From my team, Darwinia Network.
