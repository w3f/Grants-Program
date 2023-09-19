# Browser based IDE for ink! Smart Contracts 

* **Status:** [Under Development 1](https://github.com/w3f/Grants-Program/blob/master/applications/ink-playground-ide-improvements.md), [Under Development 2](https://github.com/w3f/Grants-Program/blob/master/applications/sandox.md)
* **Proposer:** [David Hawig](https://github.com/Noc2)

## Project Description :page_facing_up:  

[ink!](https://github.com/paritytech/ink) is a domain-specific language for writing smart contracts in Rust and compiles to Wasm code. You can deploy ink! contracts on parachains that support the contracts pallet, as well as on stand-alone blockchains built with Substrate.

The goal of this RFP is to find teams that would like to maintain the browser-based ink! Playground for editing, compiling & sharing ink! smart contracts. [ink! Playground](https://ink-playground.substrate.io/), previously maintained by Parity, utilizes Typescript, React, Docker, and [Monaco Editor](https://microsoft.github.io/monaco-editor/). 

**Useful resources:**
- [ink!](https://use.ink/)
- ~~[ink-playground](https://ink-playground.substrate.io)~~ (no longer hosted)
- [GitHub ink-playground](https://github.com/paritytech/ink-playground)
- [GitHub: ink! Remix plugin](https://github.com/blockchain-it-hr/ink-remix-plugin)

## Deliverables

We recommend to initially apply for a [regular grant](https://github.com/w3f/Grants-Program#pencil-process) to fix the following issues and make the playground compatible with different versions of ink! as well as automatic updates:

- https://github.com/paritytech/ink-playground/issues/427
- https://github.com/paritytech/ink-playground/issues/197
- https://github.com/paritytech/ink-playground/issues/460
- https://github.com/paritytech/ink-playground/issues/428

After this we would sign a [maintenance grant](https://w3f.github.io/Grants-Program/docs/maintenance), which allows a more flexible structure and roadmap. The list of issues and features to be covered by the grant should be discussed with the previous maintainers and the community, but it is generally up to the applying team to come up with a milestone and delivery structure. 


