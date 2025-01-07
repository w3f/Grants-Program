# Polkadot Runtime Releaser

- **Team Name:** hack-ink
- **Payment Address:**
  - 156HGo9setPcU2qhFMVWLkcmtCEGySLwNqa3DaEiYSWtte4Y (AssetHub) USDC 50%
  - 156HGo9setPcU2qhFMVWLkcmtCEGySLwNqa3DaEiYSWtte4Y (Polkadot) DOT  50%
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Polkadot Runtime Releaser aka PRR.

Since last year, my work is mainly focused on the chain/node maintenance.
Runtime upgrade is a great feature for the Polkadot-SDK.
But there are lots of potential issues that could happen during the runtime upgrade.
Especially to the new teams, they might not have enough experience to handle it.

- How to setup a try-runtime CI?
- How to setup the release CI?
  - The log affects the runtime file size.
  - The rustc/OS version affects the compiled artifacts.
  - There are also some unclear things of the srtool.
    - E.G. https://substrate.stackexchange.com/questions/11686/getting-error-rust-nightly-not-installed-when-starting-an-srtool-container-to-bu​a
- How to host a wasm-override repository for the community?
  - Debug log WASM.
    - We always use `sp-api/disable-logging` in the release build, so no more detail logs in the general runtime.
    - We can enable the `sp-debug-derive/force-debug` in the debug build, so we can get more logs instead of `WASM stripped` (I think people often see this a lot while they are trying to get some debug log).
  - EVM tracing WASM.
    - For some EVM chains, they need to trace the EVM execution.

PRR's goal is to streamline the process of releasing a new runtime for the Polkadot-SDK-based chain. It provides a standard way to release a new runtime, including the CI setup, runtime upgrade notification, and wasm-override repository hosting.

### Ecosystem Fit

For any Polkadot-SDK-based chain, they could use PRR to release their runtime. It's a tool that could help them to release the runtime in a more standard way.

### Details(spec)

For PRR's utilization, the chain team requires two repositories: one for their code and another for the release.

Take `foo-network` as an example.
They should have two repositories, `foo-network/foo` and `foo-network/foo-runtime-overrides`.

`foo-network/foo` is the base Polkadot-SDK-based chain repository that everyone should have.

`foo-network/foo-runtime-overrides` is a new repository that PRR requires.
It will have 2 branches, `foo` and `bar` if they have 2 networks, `foo`(mainnet) and `bar`(canary network).
It will host the override WASMs and the release under the corresponding network branch.

PRR will supply these components, which will all be hosted in one repository.
- A specialized custom Docker image maintained by Hack-Ink for building Polkadot-SDK-based runtimes.
- A GitHub Action to response the try-runtime. (Users can comment something like `/bot try-runtime <network>` under a release PR to trigger this action.)
- A GitHub Action to build the release runtime.
- A GitHub Action to notify release repository there is a new release that release repository can start preparing the override WASMs.
- A tool to build and manage the override WASMs.
- A tool to inspect the basic information from the WASM file.

|   GitHub Action | Trigger                                            | Output                                                |
| --------------: | -------------------------------------------------- | ----------------------------------------------------- |
|     try-runtime | Comment `/bot try-runtime <network>` under the PR. | Bot will comment the try-runtime result under the PR. |
| Runtime release | Usually by tag, this can be configured by users.   | Build and release the runtime files.                  |
|   WASM override | Runtime release action will notify this action.    | Build and push the runtime files to the repository.   |

Each component will have a very detailed guide to help the chain team to set up.

## Team :busts_in_silhouette:

### Team members

- Xavier Lau

### Contact

- **Contact Name:** Xavier Lau
- **Contact Email:** x@acg.box
- **Website:** https://linktr.ee/aurevoirxavier

### Legal Structure

Personal. (no legal structure entry)

### Team's experience

[Xavier Lau](https://github.com/AurevoirXavier)

- Seven years of experience in Rust.
- Four years of experience in Substrate.
- Darwinia Network core developer, since 2019.
- Actively at [Substrate StackExchange](https://substrate.stackexchange.com/users/251/aurevoirxavier).
- Grants contributor, [Subalfred](https://github.com/hack-ink/subalfred), [Slothunter](https://github.com/hack-ink/slothunter).

### Team Code Repos

- https://github.com/hack-ink
- https://github.com/hack-ink/AiR
- https://github.com/hack-ink/array-bytes
- https://github.com/hack-ink/atomicalsir
- https://github.com/hack-ink/subalfred

Please also provide the GitHub accounts of all team members.
If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/AurevoirXavier

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/xavier-lau-b0655310a

### Overview

- **Total Estimated Duration:** 8 weeks
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 22,500 USD

### Milestone 1 Polkadot Runtime Releaser Tool Set

- **Estimated duration:** 8 weeks
- **FTE:**  1
- **Costs:** 22,500 USD

| Number | Deliverable            | Specification                                                                                                         |
| -----: | ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                | GPLv3                                                                                                                 |
|    0b. | Documentation          | There will be a guide to tell people how to use this and inline docs will cover core functionalities.                 |
|    0c. | Testing guide          | There will be a guide and a demo repository to tell the auditor how to run the tests. All components will be covered. |
|     1. | Docker image           | A well-maintained, long-term version Docker image for Polkadot-SDK-based runtime managed by Hack-Ink.                 |
|     2. | Try-Runtime CI         | Comment on a release PR and see the try-runtime result.                                                               |
|     3. | Release CI             | Build and release the deterministic runtime.                                                                          |
|     4. | WASM override tool     | It can build the specify feature WASM in one step and manage them well in the corresponding folder.                   |
|     5. | WASM override CI       | Listen for build requests from the release CI.                                                                        |
|     6. | WASM info inspect tool | Use it to inspect the WASM basic information and integrate the result into the release note.                          |
|     7. | Releases               | Publish on GitHub release and crates.io release.                                                                      |
|     8. | Workshop               | There will be a workshop repository for teams to learn how to setup the release pipeline step by step.                |

## Future Plans

- Keep connected with the community/parity and make it better.

## Additional Information :heavy_plus_sign:

Since every component is connected closely, I prefer to finish them all in one milestone for easy auditing and testing.

**How did you hear about the Grants Program?** GitHub.
