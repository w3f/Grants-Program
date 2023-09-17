# Apophenia (Oracle) Parachain

- **Team Name:** Subslice
- **Payment Address:** _(DOT - RelayChain)_ 12YJb3uLibc5qGWHncP4A47NYuJ5eDyTSq7iWyNJMmM4NGdN
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

<!-- If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section. -->

### Overview

The main goal of the Apophenia project is to be a trustless oracle chain available to the Dotsama ecosystem.

Apophenia achieves oracle functionality by providing a set of modules that can be used to register and consume data from a variety of external sources. These are organized in the form of ["feeds"](#feeds).

Essentially, this means:
- [Registering new feeds](#feed-registration) (aka. sources)
- [Consuming data](#feed-consumption) from a registered feeds via XCM or chain events.
- A staking / slashing mechanism to ensure the game-theoretic elements of the process

We are PBA alumni and noticed the lack of oracle primitive in this ecosystem, and then decided to fix that.

<!-- Please provide the following:

- If the name of your project is not descriptive, a tag line (one sentence summary).
- A brief description of your project.
- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.
- An indication of why your team is interested in creating this project. -->

### Project Details

<!-- We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious


Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):
- The (future) tokenomics of your project 
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach
 -->

#### Quick Concepts

##### Feeds

A feed is a source of data and is a foundational primative on Apophenia. A feed's metadata includes all the information necessary for an offchain worker to fetch the information over HTTP.

##### Feed Registration

A feed can be registered by anyone. The registration process is simple: the client (i.e. actor account creating the feed) provides the following:

1. Feed Topic: an identifier of the feed's context (ex: `dot_usd_price`)
2. Description (optional)
3. Source: data location (ex: an HTTP/S URL)
4. Path: the specific path to parse within the response object
5. Method: a supported way with which to get the data (ex: TEE Contracts or Offchain Worker)

> Note: The use of a topic is to allow for multiple feeds to be registered for the same context. For example, there could be multiple feeds for the `dot_usd_price` topic, each with a different source and/or method.

Registering a feed generates a unique key that can be used to consume the feed.

Registering a feed may also require a deposit (stake), which can be used to slash the feed if it is found to be malicious.

##### Feed Consumption

A feed can be consumed via RPC calls currently, however, the addition of an XCM interface is of high priority in the roadmap. 

The consumption process is simple, the client (i.e. actor account consuming the feed) provides the following:

1. Feed Topic: an identifier of the feed's context (ex: `dot_usd_price`)
2. Feed Key (optional): the ID of the feed to consume from (ex: `...`)
3. Aggregation (optional): the aggregation method to use (ex: `median`). This can be used to aggregate multiple feeds into a single value.

> Note: Topics are also used to determine if a certain feed is returing values which are out of the expected range. For example, if a feed is returning a value that is too high or too low compared to the median, it can be flagged as invalid. This can be used to prevent malicious actors from manipulating the data and apply slashing.

#### Architecture

The main components of the Apophenia architecture are:

- **Oracle Pallet**
- **Feed Registry Pallet**
- **Oracle Client**
- **Oracle Offchain Worker**
- **TEE and Smart Contract Pools** (stretch)

![Apophenia Architecture](https://github.com/subslice/oracle-parachain/blob/main/images/Paraxiom%20Pallets%20Overview.png?raw=true)

### Ecosystem Fit

There exists a need for a native Oracle solution within the DotSama ecosystem. Apophenia aims to fill this gap.

The target audience includes parachains, smart contracts and individual accounts can register new feeds and request data from them.

While there are pallets and integrations within some Parachains currently (ex: Dia on Astar or Chainlink's pallet), it remains an added complexity for the end user. Apophenia aims to provide a simple and easy to use solution for all, especially chains within the system.

Apophenia also aims to provide data aggregation functionality to increase both data quality and security. This is a feature that can make Apophenia a unique solution.

In regards to alternatives, we have observed that most of the [projects under Oracle are inactive](https://wiki.polkadot.network/docs/build-open-source). For those that are active, here's a quick comparison:

* **interBTC**: Specialized for Bitcoin quotes, we intend to be a generalized oracle solution instead.
* **Bridgestate**: It's focused on collateralization values of bridges.
* **Tellor**: A full fledged solution which we are ultimately building towards, however, as it stands the consumer parachains need to be EVM compatible, have smart contracts enabled and install a separate pallet to gain oracle functionality. In our case, simply using XCM queries is sufficient to gain full functionality. We intend to use similar game-theoretic and statistical techniques to validate data across different feeds.
* **Laminar**: Data has to be actively pushed from external sources, triggered offchain. Overall it's a pallet to be included. Overall it contains some of the same restrictions as DIA and Chainlink.
* **DIA**: current solution available on Astar as ink! smart contracts. Like Laminar, data is pushed on-chain by centralized (and usually manually verified) offchain services.
* **Acurast**: It's a multi-chain decentralized execution layer which provides a way register and run an arbitrary script (in Javascript) on the Acurast network. In that sense, it's more comparable to Phala Network and other TEE generalized solutions. While this can be used to create Oracle, it doesn't solve the problem with a data science approach.
* **Chainlink Pallet**: It's a pallet to be included in other parachains. It's a good solution, but it's not native to the DotSama ecosystem. Another note to add is that the last commit was 2 years ago.

Ultimately, our goal is to provide a **native** oracle solution to the DotSama ecosystem as a parachain, which can be accessed by any other parachain or account. Many projects mentioned above have a multi-ecosystem goal, while we want to provide the best solution for DotSama.

## Team :busts_in_silhouette:

### Team members

- Arthur Franco Moreira: Rust Engineer, Backend Developer
- Faisal Al Tameemi: Architect, Rust Engineer, Full Stack Developer

### Contact
- Subslice: [subslice.com](https://subslice.com)
- Arthur Franco Moreira: afm2@duck.com
- Faisal Al Tameemi: faisal.al.tameemi@gmail.com

### Legal Structure

- **Registered Address:** Freelancer Hub Floor 1 (FL.H-01819), AFZ Building 1, Ajman, UAE
- **Registered Legal Entity:** MINDSET LABS - F.Z.E (incorporated and registered in Ajman free zone with license number 32292)

### Team's experience

- Arthur Franco Moreira has a mathematical background and 4+ years of software engineering, ranging from implementing portfolio optimization techniques, to backend web development and blockchain development. In the last 1.5 years, Arthur has been working as Rust and Substrate developer, working for a Brazilian payments company that uses a Substrate-based solochain.

- Faisal Al Tameemi is a Technologist, an Educator, and an Entrepreneur. He is passionate about the intersection of Entrepreneurship, Engineering, and Psychology to craft successful products. Having held various positions, he brings a depth of technical knowledge combined with a business acumen. Currently, he is focused on building decentralized systems and applications in web3.

As the **Subslice** team, we have partenered after the Polkadot Blockchain Academy to tackle interesting projects for the Dotsama ecosystem. In May 2023 we won the **Astar Challenge for best Wasm dApp** in the _Encode x Polkadot Spring 2023 Hackathon_ with the [GameSlice project](https://github.com/subslice/game-theory).

<!-- Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. 

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here. -->

### Team Code Repos

- https://github.com/subslice
- https://github.com/a-moreira
- https://github.com/FaisalAl-Tameemi

### Team LinkedIn Profiles

- https://www.linkedin.com/in/a-moreira
- https://www.linkedin.com/in/faisalaltameemi/

## Development Status :open_book:

<!-- If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be: -->

We have already started implementing our ideas in the [Apophenia repository](https://github.com/subslice/Paraxiom) (previously called Paraxiom).

We have a Github project with some of the next steps [here](https://github.com/orgs/subslice/projects/2/views/1).

Our current, but still incipient, improvement proposals are mainly described in the Apophenia repo itself, along with some notes we have been taking [here](https://github.com/subslice/notes/blob/main/Apophenia/General%20Notes.md).


## Development Roadmap :nut_and_bolt:

<!-- This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected. -->

<!-- Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.** -->

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  1,5 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 - Basic functionality

- **Estimated duration:** 2 months
- **FTE:**  1,5
- **Costs:** 10,000 USD

<!-- > :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.  -->

Most of the work in this milestone has been started and can be seen in the repositories we listed above.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **1.** | Pallet Registry | A pallet responsible for registring and recording relevant information about new feeds |
| **2.** | Pallet Oracle | A pallet that holds main logic for getting feed data, aggregating data and delivering it to end users. |
| **3.** | Offchain workers | Integrate regular OCW as *one* of the offchain solutions. |

### Milestone 2 - XCM Integration

- **Estimated Duration:** 2 months
- **FTE:**  1,5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **1a.** | XCM request-response model - Part A (request) | Implement `query_feed()` extrinsic which is triggered via an XCM `Transact` instruction. It receives a `feed_key`, `validation_threshold`, `expiry_threshold` as arguments. The metadata of the already registered feed should contain all other details specifying where the data is fetched from. The XCM message sender should also specify a `ReportTransactStatus` instruction. |
| **1b.** | XCM request-response model - Part B (response) | Send a `QueryResponse` XCM instruction to the data requester containing the fetched or cached data from the specified `feed_key`. The response object will contain a `value` and `validation_threshold`. |
| **2.** | Implement offchain data validation | Design and implement an anamoly detection algorithm to ensure that offchain workers are providing valid data and protect against malicious or invalid data (known attack vector in off-chain workers). |
| **3a.** | E2E tests - RPC | We will have E2E tests using RPC calls|
| **3b.** | E2E tests - XCM | We will have E2E tests using XCM. |
| **3c.** | E2E tests - Attack Vectors | Create a test suite simulating off-chain workers attach vectors (malicious / invalid data). |

### Milestone 3 - Staking / Slashing

The last milestone is dedicated to implementing the staking / slashing mechanism for the oracle system.
 
- **Estimated Duration:** 2 months
- **FTE:**  1,5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **1**.| Aggregation | Implement statistically sound aggregation methods so we can integrate them in the slashing mechanism. |
| **2.** | Design and implement Staking / Slashing mechanism | Research and implement game-theoretic ways of making the oracle system safe. |
| **3.** | Design and implement fee structures | Add a fee structure that takes into account all the features mentioned above. |
| **4.** | Tutorials and Showcase | Create online media to showcase the usage of the project as well as prepare in-person presentations for the DotSama community. |


## Future Plans

As Subslice, our primary focus lies within the DotSama ecosystem, where we are actively engaged in various development initiatives. Our core belief centers around our capacity to introduce solutions that can significantly enhance the usability and adoption of Polkadot/Kusama. We intend to achieve this objective by conceiving and executing utility-driven projects, which is why we have a keen interest in developing a native oracle solution within this ecosystem.

In an ideal scenario, oracles should operate with complete autonomy, but attaining this level of autonomy requires a monumental effort. It is worth noting that Polkadot presently boasts one of the most advanced governance systems in the blockchain sphere, which serves as a great source of inspiration for us. In our future plans, we aspire to leverage such governance structures to establish a genuinely decentralized oracle system. While existing solutions like ChainLink are commendable, they still exhibit a significant degree of centralization.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Recommendation from Joshua and Santiago, from The Substrate Builders Program.
