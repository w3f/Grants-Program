# W3F Grant Proposal

- **Project Name:** Ziggurat: The Network Testing and Stability Framework
- **Team Name:** Equilibrium.co
- **Payment Address:** 0x4126272ba14f7a124b1b98633678e0e5f87ec478 (ETH)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

A *Ziggurat* is a rectangular stepped tower that uses precise measurements to ensure that each foundation can support the layers above.

<img width=250 src="https://fluttering-gem-83c.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F19f1ca79-e447-45c7-862f-a03407b298f2%2Fziggurat.png?table=block&id=cc56a3d3-226b-4abe-88db-253cd0612d88&spaceId=743670a8-ce5b-4425-8e24-b3390add5bc1&width=380&userId=&cache=v2" />

This metaphor can be applied to network testing by defining three layers:

1. *Conformance:* adhering to the network protocol
2. *Performance:* healthy throughput under pressure
3. *Resistance:* withstanding malicious behavior

**Ziggurat**, by Equilibrium, is a set of tools that allows node developers to test these three layers extensively and ensure that each new release does not introduce bugs, performance bottlenecks, or security flaws.

This work started with the ZCash network, and now we would like to expand it to the Polkadot network. While we would like to keep this grant formally focused on Polkadot, these tools (in theory) should be compatible with any Substrate-based chain.

### Project Details

Ziggurat currently exists as a [command line tool] but this scope of work
will expand that into CI/CD pipelines, as well as a web-based UI.

For ease of review, a sample test is included here:

```Rust
#[tokio::test]
async fn handshake_responder_side() {
    // ZG-CONFORMANCE-001

    // Spin up a node instance.
    let mut node = Node::new().unwrap();
    node.initial_action(Action::WaitForConnection)
        .start()
        .await
        .unwrap();

    // Create a synthetic node and enable handshaking.
    let synthetic_node = SyntheticNode::builder()
        .with_full_handshake()
        .build()
        .await
        .unwrap();

    // Connect to the node and initiate the handshake.
    synthetic_node.connect(node.addr()).await.unwrap();

    // This is only set post-handshake (if enabled).
    assert!(synthetic_node.is_connected(node.addr()));

    // Gracefully shut down the nodes.
    synthetic_node.shut_down();
    node.stop().await.unwrap();
}
```

For examples of the type of behavior and properties Ziggurat tests for,
see the [Test Index]. **Please note that Ziggurat is a **black box** testing framework and we do not intend to perform any direct work on Polkadot's underlying node infrastructure.**

[Test Index]: https://fluttering-gem-83c.notion.site/Test-Index-fb608539ee7140cea1b2cee70abd9ebf
[command line tool]: https://github.com/eqlabs/ziggurat

### Technology Stack

#### The Test Runner
Ziggurat uses the Rust programming language to create very detailed network-only node implementations for our target networks. Within Rust, we have adopted the tokio ecosystem (bytes, tokio-util, tracing etc.)

#### CI Integration
The technology stack here is unfortunately determined by third-party vendors such as GitHub or GitLab. We will work within these constraints but keep touchpoints minimal during the integration to mitigate as much lock-in as we can.

#### Web-based User Interface
We have not yet determined which framework we will build our UI in, but it will likely be chosen from one of the following: Python/Django, Rust/Rocket, React, or Remix.

### Ecosystem Fit

The Ziggurat tooling is for node developers to test and improve their network implementation(s).

Networking is an often (perhaps the most) overlooked component of the entire Web3 stack of technologies, and understandably so: it can be complex, unpredictable, and frustratingly opaque.

Additionally, inefficient network implementations can contribute to wasteful energy consumption, particularly if the network packets are too frequent and/or too heavy in size.

Ziggurat offers a custom lightweight node implementation, streamlined to test your networking layer.

This comes with many benefits:

- *Flexibility* - The custom nodes can be written "from scratch" - not relying on external dependencies on underlying libraries, and can therefore test behavior that is "out of bounds"
- *Developer Experience* - the custom nodes can generally be spun up and torn down very quickly, which can be helpful in large-scale topology tests. Our current `pea2pea` benchmarks shows a node can be ready in 120us, using as little as 3-18kB of base RAM and ~21kB of RAM per connection.
- Plus, the node can be easily customized further, e.g. holding necessary state for more complex testing.
- *Capabilities beyond testing* - The custom nodes will also be utilized in the network crawler and could potentially have other use cases beyond that.

While Ziggurat is not a generalized panacea, it is the first steps toward more foundational network tooling and already has a proven track record of guiding node developers toward mitigation.

## Team :busts_in_silhouette:

### Team members

- Mark Henderson
- Lukasz Jedrzejczyk
- Niklas Long
- Tuomas Mäkinen

### Contact

- **Contact Name:** Mark Henderson
- **Contact Email:** mark@equilibrium.co
- **Website:** https://equilibrium.co

### Legal Structure

- **Registered Address:** Linnankatu 3 A 24, 20100 Turku, Finland
- **Registered Legal Entity:** Equilibrium Group Oy

### Team's experience

[Equilibrium](https://equilibrium.co) is a software consultancy and venture studio with a mission to further privacy and decentralization.
Our clients include StarkWare, ZCash, Aleo, Protocol Labs, The Ethereum Foundation, The Web3 Foundation, and quite a few more. Our expertise is deeply technical, and we also employ economists and expert cryptographers to deliver results beyond the bounds of software development.

Much of our recent work has involved the design and testing of  peer-to-peer networks in both familiar (e.g. libp2p) and customized contexts. Our impact typically falls into three categories:

**Bugfixing**
- detecting vulnerabilities using dedicated fuzz tests
- squashing memory leaks
- detecting and squashing blocking operations in asynchronous contexts

**Implementation**
- creating alternative implementations of network protocols
- creating lightweight network integration tests
- simplifying existing implementations, suggesting protocol improvements

**Profiling**
- creating integration-level benchmarks
- detecting and investigating memory/CPU spikes
- introducing/increasing parallelism where applicable

We build systems using what we believe is the best technology and, more often than not, that includes the Rust programming language. Our team members actively contribute to projects such as Rust IPFS and Interledger-rs as well as ecosystem tools such as the rust compiler and Clippy.

Furthermore, Equilibrium has a taste for graphic and product design, seen in the execution of [Vanilla], the [XRPL Hooks Playground], and the [Equilibrium.co] site itself.

Equilibrium has received two previous grants from the Web3 Foundation, for [offchain::ipfs] and PolkaFS research.

[Equilibrium.co]: https://equilibrium.co
[XRPL Hooks Playground]: https://xrpl-hooks-ide.vercel.app/develop
[Vanilla]: https://vanilladefi.com/
[offchain::ipfs]: https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/offchain_ipfs.md

### Team Members

- **Lukasz Jedrzejczyk** has followed the development of Rust since before it became stable in 2015 and has been a proactive contributor to the Rust compiler and its StackOverflow community. He has participated in the development of multiple peer-to-peer nodes belonging to blockchains and other distributed systems, usually concentrating on the network layer. Notable examples are Rust IPFS and Aleo.
- **Niklas Long** deeply cares about open source, distributed systems and data privacy. He has been on the Aleo Core Team since late 2020, mostly overhauling, testing and profiling their network; is the author of Ziggurat and an active contributor to Rust IPFS.
- **Tuomas Mäkinen** has long experience from various large scale distributed infrastructures with complex networking setups. He's a mix of software engineer and an SRE with broad experience from Go and more recently Rust. Latest contributions include a PoC solution for bridging Aleo and Solana.
- **Mark Henderson** is the VP of Engineering at Equilibrium. He has led the team starting with the original Rust IPFS grant in late 2019, through engagements with many of the largest names in Web3, and is now circling back to finish the critical work the team started with the original Ziggurat proposal. Core contributor to OrbitDB, Rust IPFS, and Ziggurat.

### Team Code Repos

- https://github.com/eqlabs
- https://github.com/eqlabs/ziggurat
- https://github.com/eqlabs/pathfinder

Team members:

- https://github.com/ljedrz
- https://github.com/niklaslong
- https://github.com/tuommaki
- https://github.com/aphelionz

### Team LinkedIn Profiles

- [Lukasz Jedrzejczyk](https://www.linkedin.com/in/ljedrz)
- [Niklas Long](https://www.linkedin.com/in/niklaslong)
- [Tuomas Mäkinen](https://www.linkedin.com/in/tuomas-m%C3%A4kinen-72a68a3)

## Development Status :open_book:

[Ziggurat] is an existing tool that is both used and respected by the core developers at Electric Coin Company and The ZCash Foundation. Its use last year led to the disclosure of over half a dozen security vulnerabilities, and at least twice as many bugs. The zcashd project, the Zebra project, and the ZCash network in general are better off for this work - we would simply like to expand its benefits to other blockchain networks, like Polkadot.

For detailed information on this implementation, see the [Ziggurat manual].

Beyond expanding the test suite itself, the team will add new functionality to Ziggurat: CI support, and network crawler, and a web-based GUI. This tooling would further streamline development and allow us to look beyond a single node's networking interfaces.
We will then use the data collected for analysis in terms of node centrality, clustering, island formation, and overall performance.

Additionally, David Hawig suggested we apply for a grant in recent conversations.

[Ziggurat]: https://github.com/eqlabs/ziggurat
[Ziggurat manual]: (https://fluttering-gem-83c.notion.site/The-Ziggurat-Manual-88f6ab7d85774c5fb1bc12bcd64bf700)

## Development Roadmap :nut_and_bolt:

This project has several clear activities / deliverables.

### 1. Pre-flight Checks

Collaborate with the Polkadot node devs to determine the final requirements, and do any necessary setup / housekeeping on the node

- Starting with Equilibrium's baseline spec, we will work with the node developers to finalize the specification, including test scenarios, potential new RPC endpoints, and the output format.
- Perform initial repository setup and housekeeping

### 2. Develop Test Suite
Create a suite of black box tests for conformance to spec, performance bottlenecks, and resistance to malicious actors

- Start at the lowest level of network activity
- Move through the network protocol piece by piece to ensure conformance to spec
- Introduce a networking-only test node for "black box" coverage
- Introduce stress testing and enhanced fuzzing
- Introduce tests for malicious behavior, such as:
  - Sending messages with flipped bits or other corruption
  - Spawning a vast amount of connections or reconnecting many times
  - Spamming messages

### 3. CI Integration

Work the above test suite into continuous integration, to run against any future releases of Polkadot

- Ensure that Ziggurat is flexible and configurable enough to run in a CI/CD context
- Generate basic HTML output from Zigurrat runs to be displayed from the CI/CD UI

### 4. Create network crawler

Use our existing lightweight node implementation that only includes the networking portion of the protocol in order to map the network topology (and other relevant data) for analysis

- Extend the test-driven subset of the network protocol (if needed)
- Create a node designed specifically to crawl the Polkadot network
- Introduce runtime logs and, possibly, means of interactive introspection via RPC or similar

### 5. Create web-based UI
Create a web application that encapsulates all feasible Ziggurat features.

- Collect relevant data from both Ziggurat nodes and crawlers
- Introduce endpoints exposing that data to be consumed by GUI clients
- Implement a front-end based either on CI integration or "front door" user login

### 6. Ziggurat-as-a-Service, closed beta
Once the team is confident in the new UI based tooling, they will invite members of the Web3, Polkadot, and Kusama team to log in to the web application and try it out.

- Instrument the front-end with analytics and observability
- Invite a small group of people to test the front-end
- Collect feedback from the user group

### Overview

- **Total Estimated Duration:** Six months
- **Full-Time Equivalent (FTE):**  4 FTE
- **Total Costs:** $372,000

All milestones will have similar deliverables, see the table below the list of milestones.

### Milestone 1 — Pre-Flight Checks

- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** 90,000 USD

### Milestone 2 — 33% Completion

- **Estimated duration:** 2 months
- **FTE:**  4
- **Costs:** 94,000 USD

### Milestone 3 — 66% Completion

- **Estimated duration:** 2 months
- **FTE:**  4
- **Costs:** 94,000 USD

### Milestone 4 — 100% Completion

- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** 94,000 USD

### Milestone Deliverables

Each milestone will include a progress report with the following
deliverables, to cover the grant requirements.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | Progress Report | May be in the form of an email, markdown file, blog post, whichever is most approproate for the time and context. |
| 0b. | Documentation | Documentation will be diligently updated and maintained as the codebase progresses and tests are written. |
| 0c. | Testing Guide | We will provide developer-level guidelines for running the test suite, as well as running the crawler and UI in a development environment. |
| 0d. | Docker | We will provide and update Dockerfiles as appropriate for e.g. Zigurat, the Crawler, and the UI. |
| 0e. | PR (case by case) | When appropriate, we will work with the W3F to publish articles and/or social media posts regarding our findings |
| 0f. | Security Disclosures | Though we will disclose these as soon as they are discovered, they are included here as a digest. We will follow W3F guidelines for responsible disclosures.  |

## Future Plans

One we have the Ziggurat service up and running, we will continue to add new features that could potentially include (but not be limited to):

- Network Layer Auditing: More formalized processes
- "Continuous" features, such as continuous testing, fuzzing, and overall network health monitoring
- Additional exposure and coverage of other L1/L2 networks, and bridges between them

The above list is of course non-exhaustive and more ideas will emerge over time and as development progresses.

Additionally, we are aiming to find sustainable business models for continuing the ziggurat work long-term.

Currently we are exploring three directions:
- On-going maintenance grants
- Staking rewards from validation with foundation delegation
- Security audits and networking related work

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

David Hawig encouraged us to apply, as we are previous recipients who have successfully delivered.