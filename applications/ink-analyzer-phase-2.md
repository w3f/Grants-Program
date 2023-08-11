# ink! Analyzer (Phase 2)

- **Team Name:** David Semakula
- **Payment Address:** 0x5c1D926f62B61C9cf62167474111385ff7393c61 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

This application is for a follow-up grant for ink! Analyzer.
- [Previous grant application](https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md)
- [Previous merged PR](https://github.com/w3f/Grants-Program/pull/1615)

### Overview

ink! analyzer is a collection of modular and reusable libraries and tools for semantic analysis of [ink!](https://use.ink/) smart contract code.

#### Objective

ink! analyzer aims to improve [ink!](https://use.ink/) language support in [integrated development environments (IDEs)](https://en.wikipedia.org/wiki/Integrated_development_environment), [source code editors](https://en.wikipedia.org/wiki/Source-code_editor) and other development tools by providing modular and reusable building blocks for implementing language features (e.g. diagnostic errors, quick fixes, code completion suggestions, code/intent actions and hover content e.t.c) for the [ink! programming language](https://use.ink/) which is used for writing smart contracts for blockchains built on [Substrate](https://substrate.io/).

#### Problem

ink! is an [Embedded Domain Specific Language (eDSL)](https://wiki.haskell.org/Embedded_domain_specific_language) that you can use to write [WebAssembly](https://webassembly.org) based smart contracts in the [Rust](https://www.rust-lang.org/) programming language.
In fact, ["ink! is just standard Rust in a well-defined "contract format" with specialized `#[ink(…)]` attribute macros"](https://use.ink/getting-started/creating-an-ink-project). 

This allows ink! developers to leverage Rust tooling like [clippy](https://doc.rust-lang.org/clippy/), [cargo](https://doc.rust-lang.org/cargo/), [crates.io](https://crates.io/) and excellent IDE/code editor support via [rust-analyzer](https://rust-analyzer.github.io/) and [IntelliJ Rust](https://www.jetbrains.com/rust/).

However, relying on only generic Rust language support in IDEs, code editors and other development tools has some significant limitations for the developer experience including:
 
- No language support (e.g. diagnostic errors/warnings and quick fixes) for ink!'s domain specific semantic rules for smart contracts (e.g. exactly one `#[ink(storage)]` struct, at least one `#[ink(message)]` method and the same for `#[ink(constructor)]`, ink! attributes should be applied to items of the correct type e.t.c).
- Inconsistent editor experience with issues like no code completion and/or hover content for some ink! attribute arguments (e.g `#[ink(payable)]`) because [macro expansion/name resolution and trait resolution are hard problems for generic IDE/code editor tools](https://rust-lang.github.io/compiler-team/working-groups/rls-2.0/#scope-and-purpose) (see also [https://rust-analyzer.github.io/blog/2021/11/21/ides-and-macros.html](https://rust-analyzer.github.io/blog/2021/11/21/ides-and-macros.html)).
- No language support (e.g. go to definition, find references and rename/refactor) for [ink! specific syntax like paths in ink! attribute argument values (e.g. `env` values)](https://github.com/paritytech/ink/blob/v4.2.1/crates/ink/ir/src/ast/mod.rs#L19-L25).  

#### Solution

To solve the above challenges and improve ink! language support in IDEs, code editors and other development tools, ink! analyzer created two main components: 
- [A modular domain-specific semantic analysis library for ink!](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer) built on a resilient and lossless parser.
- A [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) [implementation](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server) built on top of the aforementioned semantic analysis library.

These two components can be reused to add ink! language support to multiple IDEs, code editors and other development tools.

In particular, a large number of IDEs and code editors support LSP servers either via configurable LSP clients or robust LSP client libraries/APIs/modules, including [Visual Studio Code, Visual Studio, Vim / Neovim, Emacs, Atom, Sublime Text, Acme, Lapce, Eclipse and many more](https://microsoft.github.io/language-server-protocol/implementors/tools/).

This project makes it relatively easy for:
- Users to enable ink! language support for their IDE, code editor or other development tool if it has either a native/built-in or third-party LSP client that can be configured to launch an LSP server using an executable command (i.e. the path to an [installed ink! Language Server binary](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server#installation)) and can use stdio (standard in/standard out) as the message transport. 
- Developers to either build extensions/plugins/integrations that add ink! language support to any tool with robust LSP client libraries/APIs/modules, or add first-class ink! language support to an existing LSP client (e.g. an open-source extension/plugin/integration).

In addition to [distributing compiled ink! Language Server (`ink-lsp-server`) binaries for a few platforms](https://github.com/ink-analyzer/ink-analyzer/releases),
ink! analyzer additionally distributes a [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer) that ships with a bundled ink! Language Server as a showcase and [reference implementation](https://github.com/ink-analyzer/ink-vscode) for the latter use case.

The latter option typically provides a better user experience as the user doesn't have to manually install (and update) the ink! Language Server as it can be bundled by the extension/plugin/integration.

For IDEs, code editors and other development tools that don't have robust LSP client libraries/APIs/modules, extensions/plugins/integrations can either implement their own LSP client middleware or use the semantic analyzer directly.

This stage of the project will:

- Improve ink! language support features across all components by adding:
  - Quick fixes for diagnostics that include recommendations.
  - ink_e2e macro support (i.e diagnostics, quickfixes, completions, code actions and hover content).
  - Commands and code/intent actions for creating an ink! project and code stubs for ink! entities.
  - Go to definition, find references and rename/refactor support for path-based ink! attribute argument values (e.g.  `env` values).
  - Diagnostics that verify that the value of `env` is `impl Environment` as well as quick fixes and code/intent actions to `impl Environment` for the target item where necessary.
  - Inlay hints and signature help/parameter hints for ink! attribute arguments.
  - Code/intent actions for "flattening" ink! attributes.
- Implement a plugin for the [IntelliJ Platform](https://www.jetbrains.com/opensource/idea/) that will add ink! language support to all [IntelliJ platform-based IDEs (e.g. IntelliJ IDEA, Android Studio, PyCharm, Webstorm, PhpStorm, CLion, Rider, GoLand and RubyMine)](https://plugins.jetbrains.com/docs/intellij/intellij-platform.html#ides-based-on-the-intellij-platform).

The IntelliJ plugin will also serve as a reference implementation for leveraging ink! analyzer components to add ink! language support to IDEs and code editors that neither natively support LSP servers nor have robust first-party LSP client libraries/APIs/modules.
However, other developers will still be encouraged to leverage the core ink! analyzer components to add ink! language support to their preferred IDE, code editor or other development tool.

#### Observation

In the context of smart contracts and the blockchain ecosystem, [static code analysis](https://en.wikipedia.org/wiki/Static_program_analysis) tends to be closely associated with security and vulnerability detection.
This project uses the narrower term "semantic analysis" because its primary goal (at this stage) is to improve ink! language support in IDEs, code editors and other development tools. 
Therefore, for now, ink! analyzer will not provide any features related to security and vulnerability detection. 
However, such functionality will be added in the future.

### Project Details

#### Architecture Diagram

![ink! Analyzer - LSP based Architecture Diagram](https://davidsemakula.com/static/images/ink-analyzer/w3f/architecture.png "ink! Analyzer - LSP based Architecture Diagram")
*Figure 1: ink! Analyzer - LSP based Architecture Diagram*

#### Architecture Components

##### 1. [Semantic Analyzer](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer)

The semantic analyzer is responsible for parsing the smart contract code, analyzing it based on ink!'s semantic rules for smart contracts and returning semantic information for other components to consume. 

It is written in [Rust](https://www.rust-lang.org/) and uses rust-analyzer's [ra_ap_syntax](https://docs.rs/ra_ap_syntax/latest/ra_ap_syntax/) crate for generating the syntax tree of the smart contract code that it analyzes.

It uses [ra_ap_syntax](https://docs.rs/ra_ap_syntax/latest/ra_ap_syntax/) instead of other Rust parsing and syntax tree libraries because ink! analyzer has similar [design goals](https://github.com/rust-lang/rust-analyzer/blob/master/docs/dev/syntax.md#design-goals) to rust-analyzer.
The most important being that parsing should be:
- resilient (even if the input is invalid, parser tries to see as much syntax tree fragments in the input as it can).
- lossless (even if the input is invalid, the tree produced by the parser represents it exactly).

As a concrete example, while ink!'s [ink_ir](https://docs.rs/ink_ir/latest/ink_ir/) crate includes syntax tree and intermediate representation (IR) modules, it uses [syn](https://docs.rs/syn/latest/syn/) as its parser.
[Syn](https://docs.rs/syn/latest/syn/) however, (being ["geared toward use in Rust procedural macros"](https://docs.rs/syn/latest/syn/)) [assumes "that all input to it is well-formed"](https://github.com/rust-lang/rfcs/pull/2256#issuecomment-353753261).
So for the ink!/Rust code snippet below that contains only one invalid line, [syn](https://docs.rs/syn/latest/syn/) simply returns an error while [ra_ap_syntax](https://docs.rs/ra_ap_syntax/latest/ra_ap_syntax/) still generates a lossless syntax tree with errors represented by "error nodes", thus allowing analysis to still be performed on the rest of the valid code.
```rust
#[ink::contract]
mod flipper {

    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    bad statement; // This is an invalid line
}
```
This makes [syn](https://docs.rs/syn/latest/syn/) (and by extension ink!'s [ink_ir](https://docs.rs/ink_ir/latest/ink_ir/) crate) unsuitable for our IDE/code editor use case.

##### 2. [Language Server](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server)

The language server implements the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) and acts as a backend that provides language support features like diagnostic errors, code completion suggestions, code/intent actions and hover content to IDEs, code editors and other development tools.
It uses the semantic analyzer as the engine for providing ink! language support features by:
- translating LSP requests into semantic analyzer interface calls.
- translating semantic analysis results into corresponding LSP types.

It can be reused by multiple IDEs, code editors and other development tools that support LSP servers either via native/built-in LSP clients or third-party LSP client extensions/plugins/integrations.

It is written in [Rust](https://www.rust-lang.org/) and uses:
- rust-analyzer's [lsp-server](https://docs.rs/lsp-server/latest/lsp_server/) crate to handle LSP protocol handshaking and parsing messages
- the [lsp-types](https://docs.rs/lsp-types/latest/lsp_types/) crate for LSP type definitions.

##### 3. Extension/Plugin/Integration

Extensions/plugins/integrations add ink! language support to a specific IDE, code editor or development tool by communicating with the language server running as a separate process using the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) via [JSON-RPC](https://www.jsonrpc.org/).

Only a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer) is currently [implemented](https://github.com/ink-analyzer/ink-vscode).
The VS Code extension is written in [TypeScript](https://www.typescriptlang.org/) using VS Code's [extension API](https://code.visualstudio.com/api) and [language server client library](https://www.npmjs.com/package/vscode-languageclient).

This stage of the project will additionally implement an IntelliJ Plugin which will be written in [Kotlin](https://kotlinlang.org/) using the [IntelliJ Platform SDK](https://plugins.jetbrains.com/docs/intellij/welcome.html).

#### Technology Stack

[Rust](https://www.rust-lang.org/) - is used for implementing the semantic analyzer and language server components.

[TypeScript](https://www.typescriptlang.org/) - is used for implementing the VS Code extension.

[Kotlin](https://kotlinlang.org/) - will be used for implementing the IntelliJ Plugin.

### Ecosystem Fit

This project provides building blocks for improving ink! language support in IDEs, code editors and other development tools thus improving the developer experience for ink! smart contract developers.
It additionally already implements an extension for VS Code, [one of the most popular code editors for developers](https://survey.stackoverflow.co/2022/#section-most-popular-technologies-integrated-development-environment), that also serves as a showcase and reference implementation for using ink! analyzer components to add ink! language support to IDEs and code editors with [robust first-party LSP client libraries/APIs/modules](https://www.npmjs.com/package/vscode-languageclient).

This stage of the project will additionally implement a plugin for the [IntelliJ Platform](https://www.jetbrains.com/opensource/idea/) that will add ink! language support to all [IntelliJ platform-based IDEs (e.g. IntelliJ IDEA, Android Studio, PyCharm, Webstorm, PhpStorm, CLion, Rider, GoLand and RubyMine)](https://plugins.jetbrains.com/docs/intellij/intellij-platform.html#ides-based-on-the-intellij-platform)
which are among [the most popular IDEs for developers](https://survey.stackoverflow.co/2022/#section-most-popular-technologies-integrated-development-environment).
This plugin will also serve as a reference implementation for leveraging ink! analyzer components to add ink! language support to IDEs and code editors without robust first-party LSP client libraries/APIs/modules.

I'm not currently aware of any similar projects in the Substrate / Polkadot / Kusama ecosystem.
However, for [Solidity](https://docs.soliditylang.org/en/v0.8.19/) and the [Ethereum](https://ethereum.org/) ecosystem, there are:
- many IDE and code editor extensions/plugins/integrations (e.g. [this](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity), [this](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) and [this](https://marketplace.visualstudio.com/items?itemName=AckeeBlockchain.tools-for-solidity) for [Visual Studio Code](https://code.visualstudio.com/) and [Solidity plugin for IntelliJ](https://plugins.jetbrains.com/plugin/9475-solidity)), 
- a few language server implementations (e.g. [this](https://github.com/NomicFoundation/hardhat-vscode/tree/development/server) and [this](https://ackeeblockchain.com/woke/docs/devel/language-server/) which are both used by their respective VS Code extensions)
- a [compiler frontend/semantic analyzer](https://github.com/NomicFoundation/slang) being built specifically for "code analysis and developer tooling" (i.e. IDEs, code editors, linters e.t.c) with [similar goals for editing experience as rust-analyzer and ink! analyzer](https://medium.com/nomic-foundation-blog/slang-rethnet-2ad465fd7880).

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
I've worked as a technical lead on projects for [HubSpot](https://www.hubspot.com/), [Permobil](https://www.permobil.com/), [Pressboard](https://www.pressboardmedia.com/), [Grindery](https://www.grindery.io/), [InboundLabs](https://w.inboundlabs.co/), [Tunga](https://tunga.io/), [ButterflyWorks](https://www.butterflyworks.org/), [Telegraaf Media Groep (TMG)](https://www.telegraaf.nl/) and many more companies.
I hold a Bachelor of Science in Computer Science degree from [Makerere University, Kampala, Uganda](https://cis.mak.ac.ug/).
You can find my full profile at [https://davidsemakula.com](https://davidsemakula.com).

### Team Code Repos

- [https://github.com/davidsemakula](https://github.com/davidsemakula)
- [https://github.com/ink-analyzer/ink-analyzer](https://github.com/ink-analyzer/ink-analyzer)
- [https://github.com/ink-analyzer/ink-vscode](https://github.com/ink-analyzer/ink-vscode)
- [https://github.com/wamutech/wamu-rs](https://github.com/wamutech/wamu-rs)
- [https://github.com/wamutech/wamu-spec](https://github.com/wamutech/wamu-spec)
- [https://github.com/davidsemakula/substrate-vault](https://github.com/davidsemakula/substrate-vault)
- [https://github.com/mukutu-tech/mukutu-safe](https://github.com/mukutu-tech/mukutu-safe)

### Team LinkedIn Profiles (if available)

- https://davidsemakula.com (I use my own website for my profile)

## Development Status :open_book:

I've delivered implementations of the [semantic analyzer](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer), [language server](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server) and [VS Code extension](https://github.com/ink-analyzer/ink-vscode) in the first W3F grant application for this project:
- [First grant application for ink! analyzer](https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md) and [merged PR](https://github.com/w3f/Grants-Program/pull/1615)
- Semantic analyzer deliveries
  - [First delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ink-analyzer-milestone-1.md)
  - [Second delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ink-analyzer-milestone-2.md)
- [Language server delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ink-analyzer-milestone-3.md)
- [VS Code extension delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ink-analyzer-milestone-4.md)

The VS Code extension is published in the VS Code Marketplace at [https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer](https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer).

ink! analyzer has also been added to the official ink! documentation portal at [https://use.ink/getting-started/ink-analyzer](https://use.ink/getting-started/ink-analyzer) (under "Third Party Tools and Libraries").

You can find a full list of available resources in the [introductory blog post for ink! analyzer](https://analyze.ink/blog/introducing-ink-analyzer#diving-deeper).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** ~11.75 months
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 84,400 USD

### Milestone 1 — IntelliJ Plugin: Setup and [feature parity with existing VS Code extension](https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md#milestone-4--visual-studio-code-extension)

- **Estimated duration:** ~6-7 weeks
- **FTE:**  1
- **Costs:** 12,800 USD

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|--------:|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | GPL-3.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **0b.** | Documentation             | I will provide inline source documentation and a README file (published on [Github](https://github.com/) and the [Jetbrains plugin marketplace](https://plugins.jetbrains.com/)) providing general information about the plugin, instructions for installing and using the plugin and links to other documentation and resources related to the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive integration tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **0d.** | Docker                    | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|      1. | IntelliJ Plugin           | I will create a IntelliJ Plugin that supports the ink! language support features provided by existing VS Code extension, the language server and semantic analyzer as outlined in milestones [1](https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md#milestone-1--semantic-analyzer-setup-and-diagnostics), [2](https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md#milestone-2--semantic-analyzer-code-completion-suggestions-codeintent-actions-and-hover-content), [3](https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md#milestone-3--language-server) and [4](https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md#milestone-4--visual-studio-code-extension) of the previous grant application (i.e diagnostic errors for ink! semantic rules, code completion suggestions for ink! attributes and arguments, code/intent actions for adding relevant ink! attributes and arguments and hover content as documentation for ink! attributes and arguments). |

### Milestone 2 — Semantic analyzer: Quick fixes, ink_e2e macro support, project creation command and code stubs code/intent actions

- **Estimated duration:** ~5-6 weeks
- **FTE:**  1
- **Costs:** 10,800 USD

|  Number | Deliverable                                                                     | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                |
|--------:|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                                                         | MIT or Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **0b.** | Documentation                                                                   | I will provide detailed source documentation including rustdoc documentation that will be published to [docs.rs](https://docs.rs/) and a README file (published on [Github](https://github.com/), [crates.io](https://crates.io/) and [docs.rs](https://docs.rs/)) providing general information about the library, instructions for installing and using the library and links to other documentation and resources related to the library. |
| **0c.** | Testing and Testing Guide                                                       | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.                                                                                                                                                                                                                                                                               |
| **0d.** | Docker                                                                          | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                                                 |
|      1. | Rust crate update: Quick fixes for diagnostics that include recommendations     | I will update the semantic analyzer crate to provide an interface that accepts ink! smart contract code as input and returns quick fixes for diagnostics that include recommendations e.g order of attributes, missing ink! attributes, missing ink! entities, unsatisfied Rust item invariants for ink! entities.                                                                                                                           |
|      2. | Rust crate update: ink_e2e macro support                                        | I will update the semantic analyzer crate to return diagnostics, quickfixes, completions, code actions and hover content for the ink_e2e macro via the existing interfaces for all the aforementioned features.                                                                                                                                                                                                                              |
|      3. | Rust crate update: Command for creating a new ink! project with a contract stub | I will update the semantic analyzer crate to provide an interface that accepts a name as input and returns an ink! smart contract code stub similar to those created by `cargo contract new`.                                                                                                                                                                                                                                                |
|      4. | Rust crate update: Code/intent actions for adding code stubs for ink! items     | I will update the semantic analyzer crate to provide an interface that accepts ink! smart contract code and a cursor position as input and returns code stubs for ink! items e.g storage, constructors, messages, events, trait definitions, chain extensions, storage items e.t.c.                                                                                                                                                          |

### Milestone 3 — Semantic Analyzer: Inlay hints, signature help/parameter hints and attribute "flattening"

- **Estimated duration:** ~3-4 weeks
- **FTE:**  1
- **Costs:** 6,800 USD

|  Number | Deliverable                                                                    | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                |
|--------:|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                                                        | MIT or Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **0b.** | Documentation                                                                  | I will provide detailed source documentation including rustdoc documentation that will be published to [docs.rs](https://docs.rs/) and a README file (published on [Github](https://github.com/), [crates.io](https://crates.io/) and [docs.rs](https://docs.rs/)) providing general information about the library, instructions for installing and using the library and links to other documentation and resources related to the library. |
| **0c.** | Testing and Testing Guide                                                      | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.                                                                                                                                                                                                                                                                               |
| **0d.** | Docker                                                                         | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                                                 |
|      1. | Rust crate update: Inlay hints for ink! attribute argument values              | I will update the semantic analyzer crate to provide an interface that accepts ink! smart contract code as input and returns inlay hints for relevant ink! attribute argument values  (e.g `u32` or `_` for selector, `u32` for extension values, `&str` that's a valid Rust identifier for namespace, `&str` that's a comma separated list for keep_attr, path for env e.t.c).                                                              |
|      2. | Rust crate update: Signature help/parameter hints for ink! attribute arguments | I will update the semantic analyzer crate to provide an interface that accepts ink! smart contract code and a cursor position as input and signature help/ parameter hints for relevant ink! attribute arguments.                                                                                                                                                                                                                            |
|      3. | Rust crate update: Code/intent actions for "flattening" ink! attributes        | I will update the semantic analyzer crate to provide an interface that accepts ink! smart contract code and a cursor position as input and returns code/intent actions for "flattening" relevant ink! attributes and arguments (e.g converting 2 `#[ink(message)]` and `#[ink(payable)]` annotations applied to the same method into a single `#[ink(message, payable)]` annotation).                                                        |

### Milestone 4 — Semantic Analyzer: Go to definition, find references and rename/refactor support for path-based ink! attribute argument values and diagnostics, quick fixes and code/intent actions for `env = E: impl Environment`

- **Estimated duration:** ~5-6 weeks
- **FTE:**  1
- **Costs:** 10,800 USD

|  Number | Deliverable                                                                                                                                                                                       | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                |
|--------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                                                                                                                                                                           | MIT or Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **0b.** | Documentation                                                                                                                                                                                     | I will provide detailed source documentation including rustdoc documentation that will be published to [docs.rs](https://docs.rs/) and a README file (published on [Github](https://github.com/), [crates.io](https://crates.io/) and [docs.rs](https://docs.rs/)) providing general information about the library, instructions for installing and using the library and links to other documentation and resources related to the library. |
| **0c.** | Testing and Testing Guide                                                                                                                                                                         | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.                                                                                                                                                                                                                                                                               |
| **0d.** | Docker                                                                                                                                                                                            | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                                                 |
|      1. | Rust crate update: Go to definition support for path-based ink! attribute argument values                                                                                                         | I will update the semantic analyzer crate to provide an interface that accepts ink! smart contract code and a cursor position as input and returns the location where the item resolved by the path is defined.                                                                                                                                                                                                                              |
|      2. | Rust crate update: Find references support for path-based ink! attribute argument values                                                                                                          | I will update the semantic analyzer crate to provide an interface that accepts ink! smart contract code and a cursor position as input and returns locations where the item resolved by the path is used.                                                                                                                                                                                                                                    |
|      3. | Rust crate update: Rename/refactor support for path-based ink! attribute argument values                                                                                                          | I will update the semantic analyzer crate to provide an interface that accepts ink! smart contract code and a cursor position as input and returns the text edits for renaming the item resolved by the path across the workspace.                                                                                                                                                                                                           |
|      4. | Rust crate update: Diagnostics that verify that the value of `env` is `impl Environment` as well as quick fixes and code/intent actions to `impl Environment` for the target item where necessary | I will update the semantic analyzer crate to provide an interface that accepts ink! smart contract code as input and returns the diagnostics for `env` values whose target item isn't `impl Environment` as well as quick fixes and code/intent actions to `impl Environment` for the target item where necessary.                                                                                                                           |

### Milestone 5 — Language Server: Updates

- **Estimated duration:** ~6-7 weeks
- **FTE:**  1
- **Costs:** 12,800 USD

|  Number | Deliverable                                            | Specification                                                                                                                                                                                                                                                                                                                                                                                                                          |
|--------:|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                                | MIT or Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **0b.** | Documentation                                          | I will provide detailed source documentation including rustdoc documentation that will be published to [docs.rs](https://docs.rs/) and a README file (published on [Github](https://github.com/), [crates.io](https://crates.io/) and [docs.rs](https://docs.rs/)) providing general information about the crate, instructions for installing and using the crate and links to other documentation and resources related to the crate. |
| **0c.** | Testing and Testing Guide                              | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.                                                                                                                                                                                                                                                                         |
| **0d.** | Docker                                                 | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                                           |
|      1. | Rust binary crate update: ink! Language Server updates | I will update Rust binary crate that implements the Language Server Protocol to support features added to the semantic analyzer in milestones 2, 3 and 4 above.                                                                                                                                                                                                                                                                        |

### Milestone 6 — Visual Studio Code Extension: Updates

- **Estimated duration:** ~3-4 weeks
- **FTE:**  1
- **Costs:** 6,800 USD

|  Number | Deliverable                           | Specification                                                                                                                                                                                                                                                                                                                                                        |
|--------:|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                               | GPL-3.0                                                                                                                                                                                                                                                                                                                                                              |
| **0b.** | Documentation                         | I will provide inline source documentation and a README file (published on [Github](https://github.com/) and the [VS Code marketplace](https://marketplace.visualstudio.com/vscode)) providing general information about the extension, instructions for installing and using the extension and links to other documentation and resources related to the extension. |
| **0c.** | Testing and Testing Guide             | Core functions will be fully covered by comprehensive integration tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.                                                                                                                                                                                                |
| **0d.** | Docker                                | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                         |
|      1. | Visual Studio Code Extension: Updates | I will update the Visual Studio Code Extension to support the ink! language support features added to the language server and semantic analyzer in milestones 2, 3, 4 and 5 above.                                                                                                                                                                                   |

### Milestone 7 — IntelliJ Plugin: Updates #1

- **Estimated duration:** ~5-6 weeks
- **FTE:**  1
- **Costs:** 10,800 USD

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                                                           |
|--------:|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | GPL-3.0                                                                                                                                                                                                                                                                                                                                                 |
| **0b.** | Documentation             | I will provide inline source documentation and a README file (published on [Github](https://github.com/) and the [Jetbrains plugin marketplace](https://plugins.jetbrains.com/)) providing general information about the plugin, instructions for installing and using the plugin and links to other documentation and resources related to the plugin. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive integration tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.                                                                                                                                                                                   |
| **0d.** | Docker                    | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                            |
|      1. | IntelliJ Plugin: Updates  | I will update the IntelliJ Plugin to support the ink! language support features added to the semantic analyzer in milestones 2 above.                                                                                                                                                                                                                   |

### Milestone 8 — IntelliJ Plugin: Updates #2

- **Estimated duration:** ~6-7 weeks
- **FTE:**  1
- **Costs:** 12,800 USD

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                                                           |
|--------:|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | GPL-3.0                                                                                                                                                                                                                                                                                                                                                 |
| **0b.** | Documentation             | I will provide inline source documentation and a README file (published on [Github](https://github.com/) and the [Jetbrains plugin marketplace](https://plugins.jetbrains.com/)) providing general information about the plugin, instructions for installing and using the plugin and links to other documentation and resources related to the plugin. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive integration tests to ensure functionality and robustness. In the guide, I will describe how to run these tests.                                                                                                                                                                                   |
| **0d.** | Docker                    | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                            |
|     0e. | Article                   | I will publish an **article** that introduces all the new and/or updated features and components of ink! analyzer, including the new IntelliJ Plugin and updates to the VS Code extension, the language server and the semantic analyzer.                                                                                                               |
|      1. | IntelliJ Plugin: Updates  | I will update the IntelliJ Plugin to support the ink! language support features added to the semantic analyzer in milestones 3 and 4 above.                                                                                                                                                                                                             |

## Future Plans

I will publish the IntelliJ plugin to the [Jetbrains plugin marketplace](https://plugins.jetbrains.com/) and also publish updates to the VS Code extension to the [VS Code marketplace](https://marketplace.visualstudio.com/vscode).
I will additionally share both plugins/extensions along with the code and documentation for all ink! analyzer components in Substrate / Polkadot / Kusama ecosystem developer communities.

In the short-term, I will likely apply for follow-up funding for:
- adding security and vulnerability detection related static code analysis.
- adding more features and maintaining existing components.
- adding new reusable components for tools that don't support LSP.

As the project is a public good, the long-term goal is to create a community of users, contributors and ecosystem partners who are invested in the project's long-term success because of its utility.

## Referral Program (optional) :moneybag: 

N/A

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

Web3 Foundation Website.
