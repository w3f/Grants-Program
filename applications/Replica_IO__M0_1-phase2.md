# Replica_IO

- **Team Name:** Replica_IO
- **Payment Details:**
  - **DOT:** 1DyFkpva5ntXSNC2waRnxnbtqubnL4hNToxn7EQoU43vANT
  - **Payment:** Fiat (bank details shared on 2024-03-27 11:43:06 +0100)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

[Replica_IO](https://replica-io.dev/) is about making a breakthrough in designing and implementing distributed protocols for the future of decentralized computing! 🚀

The purpose of this project is to advance computing by making highly reliable distributed systems more practical to implement. The goal is to develop a well-supported and widely used state-of-the-art framework for building distributed replication mechanisms.

### Project Details

The framework will provide a carefully designed collection of primitives, components, tools, and guidelines for developing core mechanisms of fault-tolerant distributed systems, such as state machine replication. Sensibly chosen principles guide the process of designing and implementing generic components, such as consensus or various kinds of broadcast. These components get constructed out of the corresponding protocol logic, more simple components, and fundamental primitives, such as asynchronous communication or timer abstractions. Unified means of combination ensure great composability of the elements. Fine modularity together with built-in capabilities for tracing and controlling execution enable effective debugging, validation, and analysis. Powerful and convenient tools allow effectively utilizing those features. Clear guidelines help using the framework properly by explaining its features on simple, easy-to-follow examples.

### Ecosystem Fit

The project's emphasis on developing a framework for building practical distributed replication mechanisms aligns well with Substrate's goal of providing developers with modular and extensible components, enabling them to craft highly customizable and scalable blockchain solutions. The framework will empower developers to create blockchain networks that are not only highly secure and resilient but also optimized for performance and scalability by facilitating integration of advanced consensus protocols into Substrate. This will ensure that Substrate remains at the forefront of blockchain technology, attracting developers seeking to leverage the platform's capabilities for building innovative decentralized applications.

Having explored 14 code bases of notable protocol implementations, I find the ways distributed protocols are implemented quite unsatisfactory. Even for an engineer experienced in implementing this kind of protocols, most of the the code bases were fairly hard to comprehend and follow. There are many causes for that accidental complexity, which I expand on in the [blog post concluding the first exploration phase](https://replica-io.dev/blog/2024/03/04/on-implementation-of-distributed-prtocols). With such amount of accidental complexity in the code base, making even a relatively small change, e.g. applying a simple fix to address a major issue discovered later, can [reportedly](https://www.youtube.com/watch?v=c4BQ7v-CQfk&t=296s) take months of work. So it is very hard to further improve, adapt, or reuse such implementations.

I think we can do much better. I think we should not waste our efforts reinventing the wheel over and over again and repeating mistakes. Builders better focus on implementing the functionality specific to their solutions without having to figure out how to approach implementing the tricky but critically important distributed protocols, which are notoriously complex and remarkably hard to get right. There should be a framework that solves the problem of implementing distributed protocols once and for all, a framework reach with easy-to-use, reliable primitives and components that can be taken as is or mixed and matched as needed, a framework that guides towards robust and understandable code, a framework that supports analyzing, monitoring, testing, and debugging protocol implementations, a framework that is reasonably efficient and can be easily integrated into various environments. The Replica_IO project is about creating such a framework.

The framework is to be designed for an open-ended space of possible applications. One of the possible areas of use could be for facilitating integration of advanced consensus protocols into Substrate.

## Team :busts_in_silhouette:

### Team members

- [@sergefdrv](https://github.com/sergefdrv)

### Contact

- **Contact Name:** Sergey Fedorov
- **Contact Email:** sergey@replica-io.dev
- **Website:** https://replica-io.dev

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

#### Sergey Fedorov

I began working as a software engineer back in 2009. First 7 years, I was mostly focused on developing low-level system software: I worked with such things as Linux kernel, microcontrollers, hardware emulation, and trusted execution.

In August 2016, I moved to Germany and joined the [Security Group](https://neclab.eu/research-areas/security) at [NEC Laboratories Europe](https://neclab.eu/) in Heidelberg, where I first got into research and development in the areas of blockchain, distributed and decentralized systems. I became absolutely excited about this, and since then, I keep expanding my knowledge and experience in that area, in particular, designing and implementing distributed protocols.

In April 2022, I left NEC and [joined](https://research.protocol.ai/blog/2022/sergey-fedorov-joins-consensuslab-as-a-research-engineer/) the [ConsensusLab](https://research.protocol.ai/groups/consensuslab/) Group at [Protocol Labs](https://protocol.ai/). I worked with Protocol Labs, doing research and open-source software engineering in the area of scalable decentralised consensus, until February 2023.

In March 2023, I decided to start the [Replica_IO](https://replica-io.dev/) project, something that I've been thinking about for years, but never managed to find room for. With this project, I want to make a breakthrough in how distributed systems are designed and implemented in practice.

Here are some relevant open-source projects I worked on:
- [Interplanetary Consensus (IPC)](http://fil.space/#components) - a framework to enable on-demand horizontal scalability of Filecoin blockchain. My main contribution was redesign and implementation of the atomic cross-chain transaction execution protocol in Rust.
- [Mir](http://github.com/filecoin-project/mir) - a framework for implementing, debugging, and analyzing distributed protocols. My main contribution was implementation of the checkpointing mechanism, protocol garbage collection, basic mechanism for reproducible testing with simulated time.
- [MinBFT Hyperledger Lab](http://github.com/hyperledger-labs/minbft) - an implementation of MinBFT consensus protocol as a pluggable software component. I was the main author, contributor, and maintainer of the project.

You can find more details about my working experience on [my LinkedIn profile](https://www.linkedin.com/in/sergefdrv/en/) (please note recommendations there).

### Team Code Repos

- https://github.com/replica-io/replica-io

GitHub accounts of team members:

- https://github.com/sergefdrv

### Team LinkedIn Profiles

- https://www.linkedin.com/in/sergefdrv/en/

## Development Status :open_book:

The project is in early (research) stages, namely [state-of-the-art exploration](https://github.com/replica-io/replica-io/issues/7). The first phase of the exploration was about exploring some notable implementations of distributed protocols; it has been recently concluded with a [long-read blog post](https://replica-io.dev/blog/2024/03/04/on-implementation-of-distributed-prtocols) (and a [companion video](https://youtu.be/Q6wW8NqtpGw)).

This work is being done in the scope of milestone [M0.1](https://github.com/replica-io/replica-io/milestone/1) of the [project's roadmap](https://replica-io.dev/about#-roadmap), which is about coming up with the key ideas concerning the core principles that will guide the process of designing and implementing generic components within the framework. Of particular interest are the matters of structure and notation supporting composability in concurrency and communication mechanisms, as well as effectively controlling nondeterminism.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 9 weeks
- **Full-Time Equivalent (FTE):** 1.0 FTE
- **Total Costs:** 19,500 USD

### Milestone M0.1 phase 2 — Exploration of frameworks for implementing distributed protocols

Within the scope of this milestone, I plan to complete the second phase of the systematic state-of-the-art research, namely exploring selected existing frameworks for implementing distributed protocols in order to learn from the prior attempts to solve the problem of implementing distributed protocols, analyze their approaches, and take the best techniques and ideas from there. I will summarize the findings [on the project's wiki](https://github.com/replica-io/replica-io/wiki/State-of-the-art-exploration) and, by the end of the phase, publish a blog post (with a companion video) sharing all the observations and conclusions in detail.

I plan to accomplish the following tasks (tracked on GitHub in [this umbrella issue](https://github.com/replica-io/replica-io/issues/7)):

 - [#19](https://github.com/replica-io/replica-io/issues/19): Explore Mir, a framework for implementing, debugging, and analyzing distributed protocols; summarize the findings (~1w, already in progress)
 - [#30](https://github.com/replica-io/replica-io/issues/30): Explore Atlas, a modular framework for building BFT/CFT protocols and applications; summarize the findings (~1w)
 - [#20](https://github.com/replica-io/replica-io/issues/20): Explore Babel, a Java framework for developing distributed protocols; summarize the findings (~1w)
 - [#40](https://github.com/replica-io/replica-io/issues/40): Explore DiStaL, a DSL framework for implementing fault-tolerant distributed algorithms; summarize the findings (~1w)
 - [#41](https://github.com/replica-io/replica-io/issues/41): Explore PSync, a framework for writing and verifying high-level implementations of fault-tolerant distributed algorithms; summarize the findings (~1w)
 - [#22](https://github.com/replica-io/replica-io/issues/22): Explore Disel, a framework for implementation and compositional verification of distributed systems and their clients in Coq; summarize the findings (~1w)
 - [#23](https://github.com/replica-io/replica-io/issues/23): Explore Verdi, a Coq framework to implement and formally verify distributed systems; summarize the findings (~1w)
 - [#28](https://github.com/replica-io/replica-io/issues/28): Conclude exploration of frameworks for developing distributed protocols; publish a blog post (with a companion video) sharing all the observations and conclusions in detail (~2w)

The main objective is to analyze the existing frameworks in order to understand how to create a better, more practical one. Of particular interest are the matters of structure and notation supporting composability in concurrency and communication mechanisms, as well as controlling nondeterminism.

Apart from being important for the framework development, these results would also benefit the future development of Substrate. For example, the findings will help find better ways to implement alternative consensus protocols in Substrate, or, if desired, to restructure existing implementations to make them more maintainable. In the long term, once the framework is ready, it could be used to implement all sorts of alternative consensus protocols, analyze them, verify their correctness, and subsequently integrate them into Substrate.

For each of the explored frameworks, the findings will be summarized in an overview and added to the project's wiki on GitHub. The final conclusions will be published in a detailed blog post with a companion video.

- **Estimated duration:** 9 weeks
- **FTE:**  1.0
- **Costs:** 19,500 USD

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                             |
| ------: | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                   | CC-BY-4.0 (docs) / Apache 2.0 (code)                                                                                                                                                                                                                      |
| **0b.** | Documentation             | For each of the explored frameworks, the findings will be summarized in an overview and added to the [project's wiki on GitHub](https://github.com/replica-io/replica-io/wiki/State-of-the-art-exploration).                                              |
| **0c.** | Testing and Testing Guide | N/A                                                                                                                                                                                                                                                       |
| **0d.** | Docker                    | N/A                                                                                                                                                                                                                                                       |
|     0e. | Article & Video           | The final conclusions will be published in a detailed blog post with a companion video on the project's website. (It will be similar to [the one for the first phase](https://replica-io.dev/blog/2024/03/04/on-implementation-of-distributed-prtocols).) |

## Future Plans

The project has a long [roadmap](https://replica-io.dev/about#-roadmap), which I plan to continue working towards. After the second exploration phase is concluded (this grant proposal), I plan to move on to the last phase of [the state-of-the-art exploration](https://github.com/replica-io/replica-io/issues/7), namely exploring some potentially related concepts, approaches, and techniques worth looking into. Once the initial exploratory stage is over, it will be time to come up with key ideas concerning the core principles that will guide the process of designing and implementing generic components within the framework (milestone [M0.1](https://github.com/replica-io/replica-io/milestone/1)). Then those ideas will be developed into clearly formulated concepts (milestone [M0.2](https://github.com/replica-io/replica-io/milestone/2)), their feasibility will be verified with code (milestone [M0.3](https://github.com/replica-io/replica-io/milestone/3)). After that, prototype, MVP, and production versions of the framework will be developed and released (milestones  [M1](https://github.com/replica-io/replica-io/milestone/4),  [M2](https://github.com/replica-io/replica-io/milestone/5), and  [M3](https://github.com/replica-io/replica-io/milestone/6)). The framework will continuously evolve and expand, and at some point become a de facto standard for implementing critical fault-tolerant systems, providing a growing collection of easy-to-use reliable and efficient distributed replication mechanisms.

For the next few steps, I plan to apply for follow-up grants. Later, I consider seeking for continuous funding through Polkadot’s on-chain treasury, Polkadot Technical Fellowship, or alternative sources.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

There is a pending grant application to Ethereum Foundation's Ecosystem Support Program for this project. I'll inform all involved parties in case one of the applications gets close to approval. Otherwise, the project has been self-funded so far.
