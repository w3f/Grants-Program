# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Kagome-light
- **Team Name:** Soramitsu
- **Payment Address:** 5FTitUZWAz9a1LC3neYDfHvDF6RAc6BxYipTR7jFMafXqNJk (aUSD)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

<!-- If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.
 -->
 
Following up on our work on the  [KAGOME](https://github.com/soramitsu/kagome) client we are interested in implementing a light-client version of it. 

 
### Overview

<!-- Please provide the following:

- If the name of your project is not descriptive, a tag line (one sentence summary).
- A brief description of your project.
- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.
- An indication of why your team is interested in creating this project. -->

There are currently three implementations of full clients; ([Substrate](https://github.com/paritytech/substrate), [KAGOME](https://github.com/soramitsu/kagome), and [GOSSAMER](https://github.com/ChainSafe/gossamer)). However, there is only one light client ([smoldot](https://github.com/paritytech/smoldot)). 

As Substrate positions itself as a [light-client first solution](https://substrate.io/technology/flexible/), we have identified the need for another light-client implementation.

Light clients are an important way to verify the state of full clients, without additional trust on a single entity. They therefore maintain chains of block headers containing merkle proofs of the actual blockchain state, as well as justifications containing information about the current authority set.

Another beneficial feature of light clients is their low hardware requirements, which allows them to be executed even from a browser, which substancially improves the UX. To achieve this, the client should be WASM compilable.

### Project Details

<!-- We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious -->

#### Scope

* Networking layer – Implementation of networking protocols using cpp-libp2p in order to interact with other clients:
    * `/dot/light/2` – protocol to fetch information about the state
    * `/dot/block-announces/1` – protocol to listen to announcements of new blocks
    * `/dot/sync/warp` – protocol to sync missing block headers and their justifications
    * Other default protocols provided by cpp-libp2p out of the box include: kademlia, ping, identify
* HeadersStorage – storage for block headers fetched from other clients, as well as justifications proving finality of such headers
* AuthorityTracker – keeps track of authority changes by processing block header's digests containing scheduled changes of network authorities
* RPC – json-rpc implementation over the http protocol in order to query and verify state

#### Technology stack

* Language: C\++23
* Libraries:
    * [cpp-libp2p](https://github.com/libp2p/cpp-libp2p/) – networking layer, that will be adapted to be compilable into WASM
    * [Emscripten](https://github.com/emscripten-core/emscripten) – compiler from C++ into WASM using LLVM and Binaryen
    * [scale-codec-cpp](https://github.com/soramitsu/scale-codec-cpp) – C++ implementation of a compact codec used to encode/decode networking messages 
    * [libjson-rpc-cpp](https://github.com/cinemast/libjson-rpc-cpp/) – json-rpc implementation in C++
    * [level-db](https://github.com/google/leveldb) – database layer. For NPM package [node version](https://www.npmjs.com/package/nosql-leveldb) of this database could be binded instead
* Dependency manager:
    * [Hunter](https://github.com/cpp-pm/hunter)


### Ecosystem Fit

<!-- Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems? -->

As there is an [increased interest](https://twitter.com/Web3foundation/status/1523967582562398209) from the Web3 foundation to have more client implementations, our team is willing to create a new implementation of a light client for Polkadot, Kusama, and other substrate-based chains.

So far, there is only one light client implementation(smoldot). By bringing a C++ based implementation to the stage, we both attract the C++ developer community to contribute to the Web3 ecosystem, and at the same time, decrease ecosystem vulnerabilities by introducing alternative implementations, which can be extremely useful if the original implementation has issues. Additionally, by also supporting other substrate-based chains such as Kusama, the potential scope of C++ developers becoming interested in these technlogies can increase greatly.

## Team :busts_in_silhouette:

### Team members

* Kamil Salakhiev ([Linkedin](https://www.linkedin.com/in/kamil-salakhiev/), [Twitter](https://twitter.com/kamil_abiy)) – Team lead, C++ developer
- Artem Iurin ([Linkedin](https://www.linkedin.com/in/artem-iurin-881269229/)) – Lead C++ developer
- Ruslan Tushov ([Linkedin](https://www.linkedin.com/in/ruslan-tushov-5b4581240/)) – C++ developer, cryptographer, frontend developer
- Alexander Krutikov ([Linkedin](https://www.linkedin.com/in/akrutikov/)) – Tech lead, C++ developer

### Contact

- **Contact Name:** Kamil Salakhiev
- **Contact Email:** kamil@soramitsu.co.jp
- **Website** soramitsu.co.jp

### Legal Structure

- **Registered Address:** c/o Diego Compostella, Oberneuhofstrasse 5, 6341 Baar, Switzerland
- **Registered Legal Entity:** Soramitsu Helvetia AG

### Team's experience

<!-- Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.
 -->

Our team is composed of highly skilled engineers, their previous experience includes working on, and successfully implementing the following projects:
* [KAGOME](https://github.com/soramitsu/kagome) – C++ implementation of Polkadot Host supported by [Web3 Foundation grants](https://github.com/w3f/Web3-collaboration/blob/master/grants/grants.md)
* [FUHON](https://github.com/filecoin-project/cpp-filecoin) – [C++ implementation of Filecoin network protocol](https://filecoin.io/blog/posts/announcing-filecoin-implementations-in-rust-and-c/)
* [Cpp-Libp2p](https://github.com/libp2p/cpp-libp2p/) – official implementation of libp2p – a modular, upgradable network stack providing convenient interface for networking layer in p2p networks
 
 
### Team Code Repos

- https://github.com/soramitsu/
- https://github.com/soramitsu/kagome
- https://github.com/filecoin-project/cpp-filecoin
- https://github.com/libp2p/cpp-libp2p/

### Team github accounts

- https://github.com/kamilsa
- https://github.com/ortyomka
- https://github.com/turuslan
- https://github.com/sanblch

### Team LinkedIn Profiles

- https://www.linkedin.com/in/kamil-salakhiev/
- https://www.linkedin.com/in/artem-iurin-881269229/
- https://www.linkedin.com/in/ruslan-tushov-5b4581240/
- https://www.linkedin.com/in/akrutikov/

## Development Status :open_book:

<!-- If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes. -->

Our work will be based on the [KAGOME](https://github.com/soramitsu/kagome) which is a Polkadot Host written in C++. The team has already conducted an initial research, of which parts could be reused, although there are other aspects that should be reimplemented from the ground up.

Our team has also conducted preliminary [research](https://github.com/turuslan/cpp-libp2p/tree/wasm-demo/example/05-wasm-gossip) in order to identify a WASM compilation tool (emscripten) as well as the possibility of its usage, for example, to compile cpp-libp2p library into WASM and execute from browser.

## Development Roadmap :nut_and_bolt:

<!--
This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,

- make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
- include the amount of funding requested _per milestone_.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables 0a-0d are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

-->

KAGOME-light will be implemented in several stages. In order to accomplish this, the following functionality will be developed:

* Header syncing using [WarpSync](https://spec.polkadot.network/#sect-warp-sync)
* Support for several RPC calls. The main objective is for KAGOME-light to behave as a trusted proxy, one that does not contain the full blockchain state, however, it can query full clients in order to get and verify storage entries using light client protocol:
    * [GetStorage](https://docs.5ire.org/docs/substrate/rpc/#getstoragechildkey-prefixedstoragekey-key-storagekey-at-hash-optionstoragedata)
    * [GetReadProof](https://docs.5ire.org/docs/substrate/rpc/#getreadproofkeys-vecstoragekey-at-blockhash-readproof)
* WASM compatability (nodejs first)

To implement an MVP, we have one milestone planned. Further work is described in the Future plans section.

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** $50000

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how users can run the light client, request storage, and prove it.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure accurate functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Docker file that can be used to test all the functionality delivered within this milestone. |
| 0e. | Article | We will publish an **article** that explains what was done as part of the grant.
| 1. | Libp2p WASM mode | We will rewrite or adapt several parts of cpp-libp2p to make it compilable into WASM.|
| 2. | Substream protocols | We will implement the `/dot/light/2` and `/dot/sync/warp` protocols. The first will provide the oportunity to retrive data from a remote node and prove it with trie storage. The second will provide a fast sync process, due to sync only headers where the authority set changes. We will also reuse other protocols such as `/dot/block-announces/1` for fetching block header announcements and `/dot/sync/1` for fetching justifications|
| 3. | Kagome WASM adaptation | We will adapt several part of Kagome to work with WASM. We will need to rewrite the AuthorityManager, Block Header Storage, and JSON RPC server. As a result, anyone will be able to obtain an NPM package to run in the Node.js environment|
| 4. | BlockStorage | We will adapt block storage to only store block headers and corresponding block justifications|
| 5. | Multithreading simulation | It is currently not possible to maintain several threads in WASM, therefore multithreading parts will be replaced with asynchronous calls|
| 6. | RPC | We will only support several calls: GetReadProof and GetStorage. |
| 7. | Node | We will connect WASM(Kagome) with the main JS part by compiling binary using emscrpiten. |

<!--| 4. | Storage | As we aim to run our light client in browser, leveldb storage will be replaced with index db one |-->

## Future Plans

<!--
Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.
-->

In terms of future plans, we will add more RPC support to make the light client better and more functional to users. 
Moreover, we want to run our solution in a browser to make it more user-friendly for end-users.

### Full browser support

At the end of the current MVP implementation, we will be able to compile KAGOME-light in WASM and execute it in the Node.js environment. However, in order to execute it in  a browser, we will need to limit browser's local storage size, which is capped at 5MB. 

However, even if we only sync headers from the Polkadot network, this will be much larger than 5MB. To overcome such an issue, we will introduce a simillar approach to smoldot's ;
*  Our NPM package will be able to use chainspec containing some of the most recent finalized block headers that we trust and perform a warp-sync with them.

Such an approach may bring up a question about the feasibility of **trusting** such chainspecs. To comment on that:
1. Using a chainspec containing blocks more recent than the genesis block header is not worse than using the genesis block itself, if we trust the producer of such a chainspec
2. Using a recent block actually protects the light client against long range attacks, where a group of 2/3rds of colluding validators can decide to create more than one chain and refuse to reveal it until after they have unbonded their DOTs

To simplify the UX, we may implement a browser extension simillar to substrate-connect.

### Runtime execution

Runtime execution could be needed to validate transactions received by the light client. However, to do so, part of  the blockchain state might be needed. Therefore, it will be needed to implement fetching of the necessary state for transaction validation on the light client side.

### BLS signatures support

As it was explained during the recent [ZKSummit](https://www.youtube.com/watch?v=UaPdDYarKGY&list=PLj80z0cJm8QFnY6VLVa84nr-21DNvjWH7&index=19) by Alistair Stewart, it is not very efficient in terms of storage space to store all the signatures of validators that signed off the block. As we want to keep storage size as small as possible, support of BLS signatures may reduce the storage size even further by implementing the [apk-proofs](https://github.com/w3f/apk-proofs) library in C++

### Full polkadot js compatibility

We will adapt the remaining RPC documented in [psp](https://github.com/w3f/PSPs/blob/master/PSPs/drafts/psp-6.md) to work with the light client. Most of RPCs would need to interact with a full-sync node in order to fetch information that is missing in the light client,such as: block body, blockchain state,etc.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Via Twitter and through personal recommendation 

<!-- Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for. -->

**About SORAMITSU Co., Ltd.**

SORAMITSU is a Japanese fintech company with expertise in developing blockchain-based solutions for digital asset and identity management. Our mission is to use blockchain to promote innovation to solve pressing societal challenges.

SORAMITSU is the developer of and major contributor to the open-source blockchain platform [Hyperledger Iroha](https://www.hyperledger.org/blog/2022/05/19/new-long-term-support-version-of-hyperledger-iroha-creates-on-ramp-for-v2-adoption), which is tailored for enterprise and public-sector use. Part of the Linux Foundation's Hyperledger Project, the Iroha blockchain's flexible permissions system and scalable, performant architecture suit it to digital asset and identity management in high-traffic, multi-stakeholder environments.

Utilizing blockchain, SORAMITSU has developed a digital currency for the [National Bank of Cambodia](https://www.nbc.org.kh/english/), an identity verification system prototype for Bank Central Asia in Indonesia, among others. We have also conducted proof-of-concept tests for several major Japanese enterprises, and are active contributors to open source projects, such as the [SORA cryptoeconomic system](https://sora.org/), the [Polkaswap DEX](https://polkaswap.io/), and the DeFi wallet, [Fearless Wallet](https://fearlesswallet.io/).

Based on these experiences, SORAMITSU aims to deploy cutting-edge technology on a global level in order to expedite financial inclusion and health, mitigate economic inefficiencies, and contribute to economic growth and development
