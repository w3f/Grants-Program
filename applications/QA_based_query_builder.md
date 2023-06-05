# Q&A-based Query Builder for data analysis

- Team Name: Eiger
- Payment Address: Fiat 24.05.2023, 16:50 UTC+3
- [Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels): 3

## **Project Overview**

The Polkadot ecosystem is rich in block explorers, but one thing that is missing is the ability to actively explore the relay chain and its parachains. This hinders the expansion of Polkadot as a widespread solution for interoperability between blockchains. We are applying with a solution in response to [this RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/analysis-website-and-data-platform.md).

We live in a data-driven world, and blockchain economies are not insulated from that; they follow the same rules. We all need data to make better decisions, whether of a financial, technological, or ideological nature. At the moment, the only tools that provide deep blockchain data analyses are [Messari](https://messari.io/dashboard) and [Nansen](https://www.nansen.ai/), but which unfortunately are still products aimed at expert users like financial investors.

Tools for the common good like block explorers often have a helpful and easy-to-use UI, but they are too limited in their own nature and cannot help make sound investment decisions, as they are not built for that but purely to have a superficial look at the blockchain state or verify transactions were executed correctly. We have BigQuery and indexers, but no platform on the net is actually making good use of the data provided by those tools.

We want to propose a tool that changes the status quo, makes use of all available data, and puts it at the fingertips of layman people who want to make informed decisions but have no technological or programming knowledge. The idea is to create a user interface which will build an SQL `SELECT` query, based on a series of closed-choice questions.

## **Team**

### **Contact**

- **Contact Name**: Daren Tuzi
- **Contact Email**: [daren@eiger.co](mailto:daren@eiger.co) (Founder & CEO of Eiger)
- **Website:** [Eiger.co](http://eiger.co/)

### **Legal Structure**

- **Registered Address**: Linnankatu 3 A 24, 20100 Turku, Finland
- **Registered Legal Entity**: Eiger Oy

### **Team’s Experience**

Web3 promises to upgrade the very foundations of our society – from money, finance, and governance to media, gaming, and science. To deliver on that promise, decentralised technologies are to be integrated into the everyday experiences of billions of people. For engineering, this is a mountain of a challenge.

Eiger was founded to develop infrastructure for web3 mass adoption. We help technology companies improve and integrate the core technologies of web3 to meet the climbing demands for scaling and performance.

We currently employ 25+ senior web3 engineers across the globe and work with some of the most ambitious organisations in the industry, including Forte, Aleo, and XRP Labs, to name a few.

### **Team Members**

- **Łukasz Jan Niemier** ([GitHub](https://github.com/hauleth), [LinkedIn](https://www.linkedin.com/in/niemier), [🌐](https://hauleth.dev/)) is a Software Engineer at Eiger, with an extensive Erland and Elixir development experience and some Rust experience. Worked on wide range of projects, from healthcare and e-commerce to Web3. Author of few patches for the Elixir and Erlang runtimes as well some tools for BEAM ecosystem. Member of the Erlang Ecosystem Foundation Observability Working Group, OpenTelemetry Maintainer. In the past involved in `rust-num` project and Octavo crypto library for Rust.
- **Paul Dann** ([GitHub](https://github.com/giddie), [LinkedIn](https://uk.linkedin.com/in/pauldann), [Twitter](https://twitter.com/giddie)) is a Software Engineer at Eiger. Great fan of open source, Domain-Driven Design and Hexagonal Architecture. In his teens he was into OS design and assembly language, earned a degree in AI & Computer Science, after which he went on to specialise in full-stack web development, tooling, and server administration. He also has experience as CTO / Tech Lead at a small startup building a smart charging system for electric vehicle fleets.

### Team Code Repos

As mentioned in the Teams section, Eiger already has extensive experience developing large infrastructural projects. Some chosen examples:

- The SnarkOS for Aleo, the privacy-focused smart contract L1 platform going into production this summer. [GitHub Repo](https://github.com/AleoHQ/snarkOS)
- OrbitDB is a distributed, p2p, serverless database. [GitHub Repo](https://github.com/orbitdb/orbit-db)
- The Rust implementation of IPFS, now archived. [GitHub Repo](https://github.com/rs-ipfs/rust-ipfs)
- Ziggurat - A Network protocol testing framework for ZCash, XRP, and Algorand. Notably, critical network vulnerabilities were found and reported to the core teams. [GitHub Repo](https://github.com/runziggurat)

## Development status

There are few block explorers available on the web, but none of them has active analysis tools. 

[Subscan](https://polkadot.subscan.io/) is probably the most complete block explorer out there: it shows all chains’ data, including the Polkadot relay chain, Kusama, and all active parachains, together with some metrics you may [choose](https://polkadot.subscan.io/tools/charts), but unfortunately neither the metrics nor the data subset may be customised. It does expose an API, but that cannot be used by someone without programming knowledge. It is also true that it is not a complete data source for parachains, as the access to it for parachains is paid. 

A step forward from them is [Dune Analytics](https://dune.com/), which is a well-known tool used for interactive data analysis, with lots of dashboards already compiled and shared. The only downside of Dune, from the point of view of the average internet user, is the requirement for the user creating queries to know SQL, and to learn it you would have to go through several tutorials, while your goal is to actually get started on data analysis.

As for Polkadot, [Web3Go](https://web3go.xyz/#/home/main) is the only analytics tool around. Started in 2021, yet it is still in its early stages but it promises to deliver a data querying and visualisation tool for Substrate chains. To-date it has not delivered much, and even if it does, SQL will still be an entry barrier.

We don’t want to reinvent the wheel, so we shall use well known indexers as data sources. By referring to the [data analytics tool](https://wiki.polkadot.network/docs/build-data) available on the official Polkadot documentation, we see some indexers and data sources from which we may choose, e.g. [Subsquid](https://www.subsquid.io/) and [SubQuery](https://subquery.network/). Another possible choice is [Covalent](https://www.covalenthq.com/), with the only caveat that it is closed source.

We will also take into consideration data warehouses like [Substrate ETL](https://github.com/colorfulnotion/substrate-etl), or [Substrate API Sidecar](https://paritytech.github.io/substrate-api-sidecar/dist/), although the decision of which tool will be the source of data will be up to the final implementation.

## **Development roadmap**

- **Start Date:** We are ready to start work within 4 weeks from approval
- **Total Duration:** 8 weeks
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 96 000 USD

Each milestone includes a block of features which stand by themselves and which are in increasing order of relevance and marketability. The development will be divided in two phases.

The whole infrastructure will be built with Elixir, which is the best choice for large amounts of requests and distributed systems. Another advantage of this ecosystem is that for the UI part we may use Live Phoenix, instead of having to reach for Javascript thus increasing complexity. We may decide to use [Rust FFI](https://doc.rust-lang.org/nomicon/ffi.html) to improve performance at some chosen points, provided it will give non negligible benefits.

Queries may get very large very soon, and take a computational toll on the infrastructure. To avoid spam and similar behaviours, a fee scheme or more in general an economic incentive should be put into place (together with a free tier option maybe), fees which may fund a pool handled by the Polkadot community. The implementation will include at least basic optimisation features like caching and database key indices.

### First milestone: Questions-based Query Builder CLI-based

- **Estimated Duration:** 4 weeks
- **FTE:** 2 FTE
- **Costs:** 48 000 USD

This phase will deliver a CLI program which builds a query based on a series of questions **it asks the user, which is the simplest way of implementing the logic required by our tool without the need of an UI. This way users may do simple aggregation without writing any code or possessing any specialistic coding knowledge. Some examples of data queries the user might want to have answered by the tool:

1. Which transactions from May to June were done from address 0xA to the contract at 0xB?
2. Which transactions belong to blocks mined by miner X? Which ones were made between Date1 and Date2?
3. Which transactions on parachain Y were made between Date1 and Date2?
4. Which blocks were mined on Polkadot or Kusama with more than X transactions?
5. Which blocks were mined between Date1 and Date2 on Moonbeam?

From this series of questions we can identify a pattern which can translate these words into something like SQL. Using a correspondence logic similar to the example below, we can map specific questions asked from the user to corresponding SQL logic:

| Statement | Options | Operator |
| --- | --- | --- |
| Object | Transactions / Blocks | Get |
| Origin (Tx only) | Address: 0x .. | From |
| Destination (Tx only) | Address: 0x .. | To |
| Miner (Bk only) | Address: 0x .. | Mined By |
| Time | DateTime | Between Date1 and Date2 |
| Amount | Float (tokens) | EqualTo, GreaterThen, LesserThan |
| Gas cost | Float (tokens) | GasEqualTo, GasGreaterThen, GasLesserThan |
| On chain | Polkadot, Kusama, Parachain (*) | On |
| Group by | Chain, Miner, Origin, Dest, Amount/gas cost ranges | GroupBy |

The matching logic may and should be expanded as required by the user base. With this in place, a user will be able to use a question-based **query builder to extract information from the blockchain. As an example, the first query from the list earlier would be created through the following process:

- Q: Which entities would you like to retrieve? (Blocks, Transactions)
A: Transactions
- Q: Which origin address?
A: 0xA
- Q: Which destination address?
A: 0xB
- Q: Between what dates (or times)? (0: Genesis)
A: 01-05-2023, 31-06-2023
- Q: Tx Amount?
A: Any
- Q: Gas cost?
A: Any
- Q: On which chain?
A: Any

This should ensure a practical way for layman users to create custom (enough) data subsets for further analyses.

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 and MIT |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user may use the CLI to compose interactively. |
| 0c. | Testing | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness.  |
| 0d. | Testing Guide | In the guide, we will describe how to run tests from the previous point. |
| 1. | CLI tool for query composition | Using the given data source, it will be possible to compose a query and filter the dataset without programming knowledge. |

### Second milestone: UI-based query builder and optimisation

- **Estimated Duration:** 4 weeks
- **FTE:** 2 FTE
- **Costs:** 48 000 USD

The CLI implementation will be translated to a UI process, using Phoenix LiveView, where any user may build a query more or less advanced, suited to their own needs. In order to reduce costs, the deliverable will be an engineering build, with the fundamental elements needed for all the functionalities included to work, without sacrificing good UX principles. 

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 and MIT |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user may use the UI to find some basic and some more advanced metrics. |
| 0c. | Testing | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| 0d. | Testing Guide | In the guide, we will describe how to run tests from the previous point. |
| 1. | UI-based process for composing queries | A user will be able to compose their own query, with a question-based process. |
| 2. | Basic tutorials | Write ups on how to do some simple operations |

## Future plans

After having completed this first step by building a solid product with basic features and gathering some community feedback, we would like to apply for a follow-up grant which will improve this platform with support for detailed statistics on chosen quantities, DeFi-focused metrics, governance data analysis (as described in another [RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/data_analysis_tools.md)), and educational material, in addition to eventual improvements and bug fixes. The end result should be a tool essentialy like Dune Analytics.

## Additional Information

**How did you hear about the Grants Program?**

We learned about it when looking at open RFPs by the web3 foundation on their website.

We wanted to get back up to date on what is happening in the Polkadot ecosystem, and working on grants, specifically RFPs, has been a great way to do so.

Looking to apply to other RFPs currently open as well.
