# Research feasibility of a Go Runtime

- **Team Name:** [LimeChain](https://github.com/LimeChain)
- **Payment Address:** eth:0x1F7683228Ee9Bc65335374eA5c92B81C74131404 (USDC/USDT/DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

The Internet is designed to be, has been, currently is, and will always be a network of networks. What this means for us, users, is that no-matter who we are,
what we want to do, and what clients we use - we can connect with others through the Internet. Furthermore, different communities, geographically and culturally divided,
can still benefit from each other because of the inclusive, “non-maximalist” attitude of the Internet. Unlike Bitcoin, the Polkadot Network tries explicitly to support these values.

> “Polkadot is in many respects the biggest bet in this ecosystem against chain maximalism.” - Dr. Gavin Wood

A lot of effort has been put on the protocol level to make Polkadot interoperable and capable of hosting a variety of parachains, third-party chains (Bitcoin, Ethereum, etc.),
and even computer networks in general, as long as they abide by the specification. However, as of now, no massive strides have been made towards realizing this variation on the
implementation level (except for Host implementations). If Polkadot strives to be truly the chain of chains, it needs to properly address both levels.

The Polkadot architecture is divided into two parts: Host and Runtime. While there are several choices presented to users regarding the Host implementation
([gossamer](https://github.com/ChainSafe/gossamer), [kagome](https://github.com/soramitsu/kagome), [polkadot](https://github.com/paritytech/polkadot), [smoldot](https://github.com/paritytech/smoldot)),
there really are only two options for the runtime: either start from scratch, which is not ideal in most cases, or utilize the power of Substrate. For many people, especially for those whose expertise
is not in computer networking/blockchain technology, this really leaves them with a single option - Substrate.
**Although great, Substrate is not ideal for newcomers. Rust is well-known to have a steep learning curve and, by inference, so does Substrate, even though great effort has been put to simplify the framework.**

In summary, the lack of diversity and ease of use of Polkadot Runtimes is a barrier that stops Polkadot from living up to its full promise and the Polkadot community should as a whole address this problem.
The history of software engineering has taught us many times that by bringing diversity and ease of use to the field, an explosion of innovation follows.

> “Polkadot should also be the biggest bet against implementation maximalism.” - LimeChain Team

### Project Details

#### Research

**The ultimate/end goal is implementing a Polkadot Go RelayChain Runtime**, however, it will be technically challenging to go for the direct implementation without abstracting components into different modules.
Given that a modularised approach is taken, the practical goal would be to formalise those modules into a framework that can be reused by other developers.
**In order to be able to develop a framework for Go Runtimes, we need to clear out Go-related technological challenges first. This proposal is about R&D aimed at those challenges.**

Go is a modern, powerful, and fast programming language focused on simplicity (abiding by the KISS principle: "Keep It Simple, Stupid") and gaining a lot of popularity among software developers nowadays.
It is future-proof and stable, being backed by Google and used in many of their software. It has great support for network programming. **All of these reasons make Go an ideal candidate for implementing
an alternative framework for blockchain development targeted at newcomers.** Furthermore, the waters have already been tested! [Gossamer](https://github.com/ChainSafe/gossamer) is a recent effort towards implementing a comprehensive
Polkadot Host in Go, which should make implementing the Runtime easier. It is arguable that other frameworks for building Blockchain networks (e.g Cosmos) have gained significant adoption due to the lower barrier for entry (compared to Rust).

### Ecosystem Fit

The lack of diversity and ease of use of Polkadot Runtimes is a barrier that stops Polkadot from living up to its full promise and the Polkadot community should as a whole address this problem.
The history of software engineering has taught us many times that by bringing diversity and ease of use to the field, an explosion of innovation follows.

## Team :busts_in_silhouette:

### Team members

- Daniel Ivanov
- Radosvet Mihtarski
- failfmi

### Contact

- **Contact Name:** Christian Veselinov, Zhivko Todorov
- **Contact Email:** chris@limechain.tech, zhivko@limechain.tech
- **Website:** https://limechain.tech

### Legal Structure

- **Registered Address:** Bulgaria, Dragan Tsankov 23A, 1113, Sofia, Bulgaria
- **Registered Legal Entity:** LimeLabs Ltd.

### Team's experience

At LimeChain, we feel confident in and have a lot of development hours invested building [Runtime from scratch](https://github.com/LimeChain/as-substrate-runtime) and evolving it into fully capable [frameworks for building Substrate Runtimes](https://github.com/LimeChain/subsembly).
We have extensive experience in building developer tooling, specifically within Rust/WebAssembly ([matchstick](https://github.com/limeChain/matchstick/)). Other infrastructure projects that we are contributors to is Hedera Hashgraph.
LimeChain’s team has been integrating an EVM within the Hedera networks as-well as being sole technical partner of [Cudos network](https://github.com/CudoVentures) (based on Cosmos) which recently had their genesis mainnet release.
All of this emphasizes that the knowledge/expertise of the company spans across the major blockchain stacks - Substrate/EVM and Cosmos.

- https://github.com/LimeChain/subsembly
- https://github.com/LimeChain/subsembly-core
- https://github.com/LimeChain/as-scale-codec
- https://github.com/LimeChain/as-substrate-runtime

### Team Code Repos

- https://github.com/LimeChain

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/daniel-k-ivanov
- https://github.com/radkomih
- https://github.com/failfmi

### Team LinkedIn Profiles (if available)
- https://www.linkedin.com/in/daniel-k-ivanov/
- https://www.linkedin.com/in/radosvet-m


## Development Status :open_book:

So far, in our research process, we have come across technical challenges that Go faces regarding the Polkadot specification.
There are a couple of issues related to how Go translates to the expected Wasm from the Polkadot specification:
- The toolchain for WebAssembly MVP is limited.
    - The Wasm runtime described in the Polkadot specification targets WebAssembly MVP, with very domain-specific API. The official Go compiler does not support Wasm for non-browser environments 
  (read more [1](https://github.com/golang/go/issues/31105), [2](https://substrate.stackexchange.com/questions/60/what-is-gossamer-and-how-does-it-compare-to-substrate/89#89)) and the only options is using [TinyGo](https://github.com/tinygo-org/tinygo). 
  The runtime is expected to expose some linker specific globals (`__heap_base`, `__data_end`) - [read more](https://github.com/tinygo-org/tinygo/issues/2045), but TinyGo does not support that out of the box.
- Managing memory externally is not supported and not a good fit for Go/TinyGo
    - By specification, the Wasm runtime does not include a memory allocator, it is expected to import memory from the host and rely on host imported functions for all heap allocations. TinyGo has GC and manages its memory by itself. So it can’t work directly on systems where the host wants to manage the memory.
  Theoretically, it might be possible to add support for it in TinyGo, but it will require a lot of effort in the long term, the support would be limited and performance might be unsatisfactory. To support an automatic memory management, the GC proposal would be handy. 
  But the Wasm runtime supports only WebAssembly MVP currently, and the [GC proposal](https://github.com/WebAssembly/gc/blob/main/proposals/gc/Overview.md) is under development.
- The standard library support in TinyGo is limited
    - The `reflect` package is [not fully supported](https://github.com/tinygo-org/tinygo/pull/2640) in TinyGo. The SCALE serialization logic relies on that package, and we also might need it to implement for the Metadata API.

## Development Roadmap :nut_and_bolt:

Described below are the steps we think are necessary to get a deep understanding of how the current technical challenges we have found so far can be overcome:
1. Go internals, runtime, memory allocation, garbage collection 
   1. Get a deep understanding of how internals, runtime, memory allocation and garbage collection works in Go.
2. WebAssembly GC proposal
   1. Thoroughly research the GC proposal for WebAssembly, such as its design and progress so far.
3. Research [TinyGo](https://github.com/tinygo-org/tinygo) or alternative compiler toolchain in Go for the following addition of:
   1. How it works
   2. Features support
   3. Wasm support
4. Build a PoC
   1. Manual memory allocator, Go compiler Runtime implementation
5. Propose a specification, based on the previous steps

### Overview

- **Total Estimated Duration:** 8 working weeks
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** $44,800

### Milestone 1 — Research feasibility of a Go Runtime

- **Estimated duration:** 8 working weeks
- **FTE:** 2
- **Costs:** $44,800

This milestone will 

| Number | Deliverable   | Specification                                                                                                                                                                |
|-------:|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License       | Apache 2.0                                                                                                                                                                   |
|    0b. | Documentation | We will provide Markdown documentation of the whole research, explaining the necessary steps needed to resolve the technical challenges for Polkadot Runtime implementation. |
|    0c. | Testing Guide | We will provide a testing guide of the PoC manual memory allocator via FFI                                                                                                   |
|    0d. | Docker        | We will provide a Dockerfile(s) that can be used to test the PoC.                                                                                                            |
|     1. | Research      | We will start our research with  Go internals, runtime, memory allocation and garbage collection.                                                                            |
|     2. | Research      | We will continue our research with the WebAssembly GC proposal - check progress so far.                                                                                      |
|     3. | Research      | We will go through intensively TinyGo or an alternative compiler toolchain.                                                                                                  |
|     4. | Research      | We will try building a PoC, including a manual memory allocator, and a Go compiler Runtime implementation.                                                                   |
|     5. | Documentation | We will provide Markdown documentation, based on the previous steps.                                                                                                         |

## Future Plans

Having this research will give us clear understanding of how the technical challenges that Go has for Polkadot Runtime implementation can be resolved.
By resolving them, Go will become an alternative language to Rust for Polkadot Runtime implementation.


## Additional Information :heavy_plus_sign:

LimeChain has been a long-time contributor to the Substrate ecosystem mainly focused on developer tooling. Due to our involvement in the space, we are working with various clients, developing smart contracts and working on parachains.


