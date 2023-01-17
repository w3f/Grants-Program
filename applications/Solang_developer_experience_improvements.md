# Solang developer experience improvements.

- **Project Name:** Solang Maintenance

- **Contributor Name:** Salaheldin Soliman

- **Payment Details:** USDT (ERC20)

- **Address**: 0xf19d225a4b7dc1fcc53fbdad5a3d87bce53af3c6

- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Solang compiles Solidity smart contracts to Substrate and Solana targets. An in-depth overview of Solang's purpose and motivation can be found at https://hyperledger.github.io/hyperledger-hip/HIPs/solang.html.

### Solang Improvement Project Details

The aim of this project is to improve Solidity developer experience on Substrate chains through undertaking the following two milestones:

- [lmprove debug buffer usage](https://github.com/hyperledger/solang/milestone/5):

  - The debug buffer can be used by the smart contract as a way to communicate with the developer during runtime, e.g. for printing messages or displaying the return code of API calls into the runtime environment. Currently, the debug buffer lacks any kind of structure, which can make for an awkward debugging experience. The goal is to use a JSON data structure within the debug buffer. This makes its usage more human friendly and even allows front-end tools to parse the content of the debug buffer in a defined way.

  - Currently, runtime errors are lost. Solang inserts an `unreachable` instruction, causing nothing more than a regular `trap` in case of runtime errors (like arithmetic overflows, failed assert statements, etc..). The aim here is to output the runtime error in the formatted debug buffer, so that a developer knows what went wrong (this doesn't even happen in Ethereum's Solc currently). The line number of the solidity source file in which that error is encountered will be displayed as a further improvement.

  - The debug buffer is not something meant to be used in production deployments (pallet contracts does not even support this in production setups). However, at the time of writing, `solang` does not have any means to omit all code generation related to the debug buffer. This results in (potentially a lot of) wasted gas. So another goal of this milestone is to implement a CLI flag for the compiler that effectively turns all logic related to debug printing into No-Op.

- [Solang projects](https://github.com/hyperledger/solang/milestone/6):

  - At the time of writing, the only way to configure the compiler's behavior is to use CLI flags and options. An ever-growing list of compiler options (like optimization flags) and possible runtime configuration options is making this more and more awkward. This information can be provided to the compiler via a `TOML` file, similar to what we see in other languages (e.g. `Cargo.toml`).

  - To make this work, the compiler will need to implement functionality to parse its options out of such a `TOML` file. Additionally, some tooling should be implemented to help our users working with it. The first one will be a new sub-command `solang new`, which generates a new "Project" containing `Solang.toml` file with sensible defaults as well as some Solidity [flipper example](https://github.com/hyperledger/solang#simple-example) contract. Naturally, the `new` subcommand provides some configuration options itself, like specifying the project name or runtime target.

  - A further issue addressed here is that a Solidity developer using Solang currently has no way to tell the compiler some information like contract authors and version. Since this information is needed for metadata generation, it is just populated with some non-meaningful default value. As a consequence, at the time of writing, `solang` users need to edit the metadata file manually after each and every compilation.

  - Another improvement is for specifying the runtime target configuration. As-is, developers only have some low-level options like specifying the `address` and `balance` (`value`) size used by the runtime. A better solution would be able to provide high-level representations of currently deployed on-chain runtime configurations and the compiler will take care of the rest. For instance, providing a target configuration of "Substrate version `X`" or "pallet contract nodes version `Y`" will inform the compiler to generate contracts compatible with the default configuration of pallet contracts in substrate version `X` or contacts node version `Y` respectively. Other possible options for the user should be to just directly specify the parachain, e.g. `Rococo` or `Shiden` (randomly named examples).

### Ecosystem Fit

**Who is your target audience and how does your project fit into the ecosystem?**

We still have a long way to go in terms of developer experience with Solidity on Substrate based chains. Although Solang as a compiler itself can be considered a huge step towards attracting solidity developers to the Polkadot/Kusama ecosystems: The Solidity developer experience on Ethereum far exceeds that of "Solidity Contracts on Substrate", caused by our inferior tooling and debugging story. The mentioned improvements are some immediate measures to address that. This grant will benefit any substrate parachain looking to leverage the possibility of using Solidity for their own good, as it will help level the developer experience for Solidity developers regardless whether they target Ethereum or Substrate.

## Contributor :busts_in_silhouette:

### Contact

- **Contact Name:** Salaheldin Soliman

- **Contact Email:** salaheldin_sameh@aucegypt.edu

### Relevant Experience

Worked on Solang as part of the [Hyperledger Mentorship Program](https://wiki.hyperledger.org/display/INTERN).

1. Implemented [array bounds checks optimization](https://solang.readthedocs.io/en/latest/code_gen_options.html#array-bound-checks-optimization).
2. Implemented [multiplication overflow detection during runtime](https://github.com/hyperledger/solang/pull/988).
3. Implemented [constant overflow detection during compilation](https://github.com/hyperledger/solang/pull/1024#ref-commit-baaa425).
4. Improved [Solang's parser resilience](https://github.com/hyperledger/solang/pull/1068).

### Github Handle

- https://github.com/salaheldinsoliman

### LinkedIn Profile

- https://www.linkedin.com/in/salaheldinsoliman/

## Development Status 📖

This project is a part of larger repository: [Hyperledger Solang](https://github.com/hyperledger/solang). Solang is a Solidity compiler for Solana and Substrate, a formal documentation for the repo can be found at https://solang.readthedocs.io/en/latest/.

There was no formal research done on the topic, but it can be noted that Solidity developer experience on Substrate chains is falling behind Ethereum's. Discussions with Solang's owner [Sean Young](sean@mess.org) and maintainer [Cyrill Leutwiler](cyrill@parity.io) , from Parity, have further solidified this statement. The above-mentioned tasks are a further step to alleviate this, through giving Solidity devs a smoother experience creating and debugging his contracts via Solang.

## Development Roadmap 🔩

### Overview

- **Start Date:** December 20, 2022

- **Estimated Duration:** 6 Months + 1 month spare.

- **Sprint/Period Duration:**
  First period(milestone): 4 months
  Second period(milestone): 3 months
  Grace period(Time allocated for events that are not pre-calculated, like emergencies or unexpected work): 1 month

- **Full-Time Equivalent (FTE):** 0.5 FTE (20h per week)
- **Total Costs:** $5,000

### Milestone 1: Improve debug buffer usage

- **Time Estimate**: 4 months
- **FTE (Full time Equivalent)**: 0.5
- **Cost:** 3,000 USD

|  Number | Deliverable                                                                                                        | Specification                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0a.** | License                                                                                                            | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                   |
| **0b.** | Documentation                                                                                                      | I will provide both **inline documentation** of the code and some basic instructions of how a Solidity developer can utilize the debug buffer. I will also provide **documentation** of the newly added runtime errors.                                                                                                                                                                                      |
| **0c.** | Testing and Testing Guide                                                                                          | I will add unit tests to [Solang's Substrate integration tests](https://github.com/hyperledger/solang/tree/main/integration/substrate). The tests will ensure that the output of the omitted debug buffer is as expected(regarding prints, API calls, runtime errors and overall structure). Also, I will make sure that running Solang's test suite via `cargo test --workspace` produces no failing tests. |
| **0d.** | Docker                                                                                                             | There will be no independent DockerFiler for this milestone, because Solang has its own DockerFile, which can be used to test the mentioned functionalities.                                                                                                                                                                                                                                                 |
|      1. | [Use structured data in the debug buffer](https://github.com/hyperledger/solang/issues/1048)                       | Completing this issue will result in a well structured debug buffer.                                                                                                                                                                                                                                                                                                                                         |
|      2. | [Print execution errors in the debug buffer](https://github.com/hyperledger/solang/issues/1083)                    | Now that the debug buffer is well structured, runtime errors can be inserted in it for the user to debug.                                                                                                                                                                                                                                                                                                    |
|      3. | [Execution errors to be passed with source file and line number](https://github.com/hyperledger/solang/issues/972) | Instead of having an arbitrary error emitted on the debug buffer, the line number of the instruction will be inserted so that the dev will have an easier debugging experience.                                                                                                                                                                                                                              |
|      4. | Bug Fix                                                                                                            | Fix [Bug: Substrate Integration tests fail to compile with -g](https://github.com/hyperledger/solang/issues/1051)                                                                                                                                                                                                                                                                                            |

### Milestone 2: Implement [Solang projects](https://github.com/hyperledger/solang/milestone/6):

**Time Estimate:** 2 months
**FTE (Full time Equivalent):** 0.5
**Cost:** 2,000 USD

|  Number | Deliverable                                                                    | Specification                                                                                                                                                                                                                                                                                                                                               |
| ------: | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                                                        | Apache 2.0                                                                                                                                                                                                                                                                                                                                                  |
| **0b.** | Documentation                                                                  | I will provide both **inline documentation** of the code and some basic instructions of how a Solidity developer can utilize the command `solang new` and the `Solang.toml` file to provide compiler configuration                                                                                                                                          |
| **0c.** | Testing and Testing Guide                                                      | I will add unit tests to [Solang's Substrate intergation tests](https://github.com/hyperledger/solang/tree/main/integration/substrate). The tests will ensure that the generated contract runs as expected on the configured chain. The tests will also ensure other information like contract author and version are correctly inserted the `Solang.toml`. |
| **0d.** | Docker                                                                         | There will be no independent DockerFiler for this milestone, because Solang has its own DockerFile, which can be used to test the mentioned functionalities.                                                                                                                                                                                                |
|     0e. | Article                                                                        | I will write a blog post that describes the two milestone, the target audience would be Solidity developers who want to try out Substrate.                                                                                                                                                                                                                  |
|      1. | Implement [Solang projects](https://github.com/hyperledger/solang/milestone/6) | The functionalities mentioned under `Solang Improvement Project Details: Solang Projects` will be delivered.                                                                                                                                                                                                                                                |

### Assurance That the Current Project Owners Are Willing to Review/Accept Your Contributions:

Discussions with project owner [Sean Young](sean@mess.org) and maintainer [Cyrill Leutwiler](cyrill@parity.io) resulted in that the issues presented above would be reviewed and merged.

## Current and Future Plans

- Improve Substrate developer experience via the above-mentioned tasks
- Continue improving Solang till maturation from the Substrate side.
- Possibly develop an IDE based on Solang that matches Ethereum's Remix

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Recommendation from Solang's maintainers [Sean Young](sean@mess.org) and [Cyrill Leutwiler](cyrill@parity.io)
