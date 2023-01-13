# Validated Streams

- **Team Name:** [Comrade Coop](https://comrade.coop/)
- **Payment Address:** [0xAE8687d444511a595Cc1EAdbFc1dFe58eB639C5f](https://etherscan.io/address/0xae8687d444511a595cc1eadbfc1dfe58eb639c5f) (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Validated Streams is a consensus primitive that aims to simplify the process of creating decentralized reactive oracles by providing a mechanism for verifying the authenticity and veracity of the data being used.

In brief, we are providing a mechanism for proving the occurrence of events streamed from a custom application collocated with each of the validator nodes, facilitating developers of arbitrary off-chain applications in creating on-chain oracles sourced by those applications in a decentralized manner. To ensure the reliability and integrity of the data submitted on-chain, we require that at least two-thirds of the validators witness the event and confirm that it have indeed occurred off-chain.

By implementing Validated Streams on top of Substrate, we hope it could integrate with Substrate-based smart contracts, allowing developers to build more powerful and sophisticated applications that take advantage of features from both Validated Streams and Smart Contracts.

Validated Streams is a part of a grander vision of proactive blockchain applications that interact richly with the off-chain world while still remaining trustless and decentralized, that our team has been pushing for some years, and is now building piece-by-piece as we keep seeking the best ways to realize it.


### Project Details

![Diagram of Validated Streams, with Stream service ingesting events from an application, passing them to a gossip, which then leads to on-chain transactions, that, after block finalization, get forwarded back to the application. (validated-streams.drawio.png)](https://user-images.githubusercontent.com/5276727/211316562-ad73fdd0-0dec-4543-884e-fe60cb09ee7a.png)

A Validated Streams oracle proves the occurrence of off-chain events, after they have been witnessed by at least 2/3-s of its validators.

Each of validator is a Substrate node that has an attached trusted client. The client submits hashes representing events that have been witnessed locally. Since a malicious client could fabricate data or censor it instead of reporting to the validator, it is necessary that the operators of validators don't trust other validators (or thirdparties in general) with the task of witnessing events, but run their own trusted clients, perhaps even collocating them with the validator node.

To avoid swamping or stalling the chain with blocks containing as-of-yet-invalid events (especially in cases where trusted clients have just started witnessing an event), after receiving an event hash, the validator first gossips that hash, signed, to other validators (using Substrate's `sc_network_gossip` API). The event hash is submitted as an extrinsic only once it has been witnessed by 2/3 of the validators (weighted by stake).

Afterwards, the event is finalized through any of the usual on-chain mechanisms (such as GRANDPA), and once final, is considered proven by the Validated Streams oracle.

As it is possible for momentary disruptions or malfeasance of validators or off-chain services sourcing the data for events to cause the state recorded on-chain and the state existing off-chain to differ, we send the finalized event hashes back to the trusted clients, which can then, depending on the exact use case, use this information to, e.g. adapt its own state to on-chain proceedings, witness some form of correction to the finalized events, or report the discrepancy to its users/operators.

As noted on the diagram, we are planning to use [a gRPC protocol](https://github.com/comrade-coop/validated-streams/blob/main/proto/streams.proto) for the communication of hashes between the trusted client and the validator node, instead of the more usual JSON-RPC used throughout Substrate, since such an API would allow the final product to be immediately usable with a wider variety of commonly-used programming languages and software development frameworks, and we aim to make the final product as accessible as we can.

Do note that because the trusted client only ever submits hashes, a separate product (say, IFPS) would be required for it to retrieve the actual event contents.

We have implemented a [proof-of-concept implementation](https://github.com/comrade-coop/validated-streams) of Validated Streams as we've explored the Substrate API.

While the Validated Streams concept is generic enough to apply to some existing oracles and maybe even blockchains, we want to encapsulate it in a way that other developers could then use to implement their own blockchain solutions on top. As such, within the scope of this project we will not be creating a new blockchain/consensus network, but only a software package implementing the Validated Streams protocol on top of Substrate, plus the related documentation, tutorials, suggested deployment configurations, and the like. Developers would then be free to take that package and run their own chains validating the events they configure them to.

In addition, we find it important to note that Validated Streams as currently envisioned would only work in chains where the total number/weight of validators is known, such as proof-of-stake or private/consortium chains; further research might be able to lift that limitation in the future, but this is again outside the scope of this grant proposal.

### Ecosystem Fit

Creating reliable oracles can be challenging, as making a protocol, ensuring the accuracy of the data being used, and finding the validators to run one are all hard problems. While the Validated Streams abstraction doesn't automatically solve all of those problems, it allows developers to re-focus on providing validators with accurate data without needing to worry about creating a whole new protocol.

Once finished, Validated Streams could be used to create decentralized oracles that provide off-chain data to other parts of the Polkadot/Kusama ecosystem, such as blockchains or applications that connect to the network via Polkadot's interchain communication protocols, or just Substrate-based smart contracts in general. In that case, parachain and dApp developers would benefit from having another way to provide real-time data to smart contracts or to build decentralized applications that interact with the real world.

In addition, we see a use for Validated Streams in the creation of hybrid off-chain/on-chain applications, where developers use it to write traditional applications that are linked to a blockchain using a "validated" output "stream" of events. This can enable traditional application developers (such as ourselves, outside the Cooperative) to build applications that are more secure and trustworthy, as they can rely on the validation provided by the Validated Streams service.

And, finally, we see some potential use cases around sourcing data for decentralized AI models (where Validated Streams would allow for a single consensus dataset to be built and added to in real-time, without necessarily giving any centralized party a final vote on what's included), and the creation of decentralized news platforms (where parties contribute news stories or verify the accuracy of existing stories), but it is possible that both of those would require additional thought, research, and development before they can be realized.

There are existing projects similar to Validated Streams, many of which we've taken inspiration from.

A major one would be Chainlink. While both work on providing ways to create and use oracles, Chainlink is a standalone decentralized oracle network that integrates with a variety of blockchain platforms, while Validated Streams is a Substrate-based blockchain-building framework that can used by decentralized applications directly. Also, Chainlink uses a reputation-based system to ensure the reliability of the data being provided by its oracles, while Validated Streams uses a consensus mechanism based on concrete events being witnessed to ensure the accuracy of the data being used by oracles.

While a Chainlink Feed pallet already exists within the Polkadot / Kusama network, we hope that by offering something more directly based on top of Substrate, we might provide a viable alternative for developers who don't necessarily want to use Chainlink itself.

## Team :busts_in_silhouette:

### Team members

- Team leader: Bozhidar Marinov
- Team: Salih Houadef
- Advisors: Todor Kolev, Branimir Angelov

### Contact

- **Contact Name:** Bozhidar Marinov
- **Contact Email:** b.marinov@comrade.coop
- **Website:** https://comrade.coop/

### Legal Structure

- **Registered Address:** 47, "Cherni vrah" blvd, Sofia 1407, Bulgaria
- **Registered Legal Entity:** Comrade Cooperative

### Team's experience

Bozhidar has roughly 13 years of programming experience (started programming at 7) on a wide variety of projects, from web interfaces to games to backend systems to smart contracts. He was once a core developer of Godot Game Engine, actively interacting in the FOSS community and is currently a maintainer of Perper, a reactive microservice framework.

Salih is a recent college graduate with experience in creating various decentralized systems, in particular Blocksharp, a blockchain framework based on an actor model, used to complete his master's thesis on decentralized voting systems.

### Team Code Repos

- https://github.com/obecto/perper
- https://github.com/comrade-coop/apocryph
- https://github.com/comrade-coop/strongforce
- https://github.com/comrade-coop/wetonomy-strongforce
- https://github.com/comrade-coop/apocryph-dao
- https://github.com/revoltez/Blocksharp
- https://github.com/revoltez/RustNet
- https://github.com/revoltez/PBFTDemo
- https://github.com/revoltez/CypherBox
- https://github.com/revoltez/TokenSwap

**Team GitHub accounts:**

- Bozhidar Marinov: https://github.com/bojidar-bg
- Salih Houadef: https://github.com/revoltez

### Team LinkedIn Profiles (if available)

- Bozhidar Marinov: https://www.linkedin.com/in/bojidar-bg/
- Salih Houadef: https://www.linkedin.com/in/houadef-salih/

Advisors:
- Todor Kolev: https://www.linkedin.com/in/todor/
- Branimir Angelov: https://www.linkedin.com/in/branimirangelov/

### Google Scholar Profiles (only for research projects)

## Development Status :open_book:

The current prototype of the Validated Streams code lives in the https://github.com/comrade-coop/validated-streams repository. It's an initial draft that we used to figure out what we want to achieve and if it's possible to use Substrate for it. Now that we have this proof of concept, we are ready to go for a full implementation.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** 10,000 USD

### Milestone 1 — Implementation of Validated Streams gossip using Substrate's GossipEngine

- **Estimated duration:** 1.5 month
- **FTE:** 1
- **Costs:** 5,000 USD

While our initial prototype is roughly functional in terms of delivering witness signatures to other validators, it is currently doing that in a very hacked and insecure manner. For the first milestone, we are looking to change that to use Substrate's existing gossip, as well as clean up the code overall, while also getting some documentation and tests in order.

Once this milestone is complete, we expect that Validated Streams would be able to deliver its main functionality of validating events, though it might not be the most robust yet to real-world network connectivity issues (and perhaps even to some kinds of malicious interference).

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT (most of the code) / GPLv3 (any sections depending on Substrate Client) |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile and bash script that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate pallet: Validated Streams | We will create a Substrate pallet that will receive witnessed event extrinsics and communicate them to other Substrate pallets. <!-- Note: as we(/I) are not 100% familiar with Substrate pallet interactions, we cannot specify the exact API yet. We would, however, seek to implement best practices observed in other similar Substrate pallets. --> |
| 2. | Substrate module: Witnessed events gossip | The Witnessed events gossip module will implement part of the Validated Streams protocol as described above, gossiping signatures about event hashes witnessed by the validator node and submitting them to the Tx pool once enough signatures are collected. |
| 3. | Substrate module: Stream service | The Stream service module will allow applications to connect to the validator node as a "trusted client", witnessing events observed in the off-chain world and receiving receipts of completed events. |

### Milestone 2 — Implementation of block deferral for blocks that contain unvalidated events

- **Estimated Duration:** 1.5 month
- **FTE:** 1
- **Costs:** 5,000 USD

After refactoring our codebase and reworking the gossip protocol used, we would like to work on improving the behavior of the project in real-life conditions, by implement deferral for blocks that arrive before they have been fully witnessed and making any necessary adjustments after testing  and benchmarking the code in live settings.

Once this milestone is complete, we would consider the Validated Streams project functionally ready for incorporation in other projects.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT / GPLv3 (same as above) |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone, including Dockerfiles/scripts which set up simulated poor network conditions. |
| 0e. | Article | We will write up and publish an English article on our blog, making sure to link it on HN and relevant Reddit communities, that explains the Validated Streams project, how it works in brief, and how it can be used by developers to create decentralized oracles for their applications -- including brief notes on what to consider when actually deploying such an oracle. |
| 1. | Substrate module: Witnessed events block import | The Witnessed events block import module will defer blocks before handling them to GRANDPA until all witnessed events included in those blocks are confirmed by the Witnessed events gossip module -- as outlined above. |
| 2. | Real-life testing | We will test the Validated Streams code in a real network, documenting our results, and making adjustments to the code if any performance or reliability issues surface. |
| 3. | .NET client sample | We will deliver a .NET/C# sample application implementing an example trusted client that can be used by developers as a starting point for their own work. |

## Future Plans

Our team is interested in utilizing the Validated Streams project as a key component in the development of [Apocryph](https://apocryph.network), a novel (and, we hope, revolutionary) blockchain platform designed to support proactive smart contracts, or "agents", that are capable of autonomously communicating with each other and taking action without the express need for human(/centralized) input. There, the Validated Streams project would allow agents on a future Apocryph platform to react to real-world events as those occur.

In fact, we are currently exploring the possibility of building (and refining) our vision for Apocryph in a piecemeal fashion where we build each of the components that might be useful in other projects independently, before eventually combining them.

In the shorter term, we will strive to maintain the repository, bugfixing and perhaps even new features, after the grant is complete, especially if there is interest in the project from outside parties.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We found the grants program via GitHub Trending, while simultaneously discovering that Substrate would be a great fit for our project on accident. As that seemed like too good of a coincidence to pass up, we decided to apply.

While our coop organization has received a previous grant from Aragon Nest for an unrelated project, this is the first grant we are applying to in regards to the Validated Streams project.

We have worked on the code and vision for Apocryph for a few years now, ever since we noticed that many of our Cooperative's projects were facing very similar issues around moving data and organizing code--and deciding we could do better. While not all of our attempts in bringing it about have been successful, we have been slowly coming to better solutions, and hope that it will all click one day.
