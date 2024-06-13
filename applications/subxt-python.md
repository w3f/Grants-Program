# `subxt-python`

- **Team Name:** Tuguldur Baigalmaa
- **Payment Address:** 14AZk92CKjovm4tDvzE9XsjGz3HNeeV2tmnbYitAqyweWoRp (UDSC - Asset Hub), 14AZk92CKjovm4tDvzE9XsjGz3HNeeV2tmnbYitAqyweWoRp (DOT - Polkadot)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

- `subxt-python` is a one-to-one wrapper library of the official `subxt` library, built with [PyO3](https://github.com/PyO3/pyo3)
- Subxt is a powerful library that enables developers to interact with Substrate-based blockchains, such as Polkadot and
Kusama, by providing a user-friendly and type-safe API. By creating a Python wrapper for `subxt`, this project will
make it easier for Python developers to integrate their applications with Substrate-based networks. Python is one of
the most popular programming languages, known for its simplicity, versatility, and extensive ecosystem. Providing a
Python interface to Substrate will lower the entry barrier for Python developers, allowing them to build and deploy
applications on Polkadot and Kusama more easily. 
- The `subxt-python` wrapper will integrate seamlessly with the existing Substrate infrastructure. It will leverage the
features and functionalities provided by the subxt library, ensuring compatibility and consistency with the Substrate
framework. Python developers will be able to interact with Substrate nodes, query chain state, submit transactions, and
subscribe to events using familiar Python syntax and conventions. By exposing the full functionality of `subxt` to Python
developers, this project will contribute to the growth and adoption of the Substrate ecosystem. It will enable Python
developers to build a wide range of applications, such as wallets, explorers, tools, and dApps, on top of
Substrate-based networks like Polkadot and Kusama.
- Interest in creating this project:
  - We believe that `subxt-python` will have a significant impact on the adoption and usability of Substrate. It could
  also be used for advanced on-chain data analysis. Right now, it's challenging for the community to learn the Rust language in
  order to derive useful actionable insights from on-chain data. It's also challenging to build indexers that DApp
  developers could use for their specific applications or to build a scanner for a specific use case.

### Project Details

- API: One-to-one mapping of the existing [subxt library](https://docs.rs/subxt/latest/subxt/index.html)
- An overview of the technology stack to be used:
  - PyO3 - The framework to create Python bindings for the Rust code. Why a wrapper and not native Python implentation?
    - PyO3 is explicitly designed for creating Python extensions from Rust code, making it ideal for wrapping existing
      Rust libraries. Less maintenance on the Python side and future updates from the `subxt` library will be easier to
        integrate to keep the library up-to-date. 
    - Bindings generally have minimal overhead, meaning that the Python wrapper can closely match the speed of the
    native `subxt` library. Native Python implementation will be significantly slow. 
    - It allows maintaining the type safety guarantees offered by `subxt` Rust implementation
- Documentation of core components:
  - **Client**: main entry point for interacting with a Substrate node. Establishes a connection to the Substrate node using
  the provided configuration and allows sending requests and receiving responses.
  - **Storage**: provides a way to interact with the storage of a Substrate runtime. Allows querying storage values using
  the generated storage API. Developers can retrieve storage items, decode the stored data, and subscribe to storage
  changes.
  - **Extrinsics**: construction and submission of extrinsics to the Substrate node. Developers can sign and submit
  extrinsics, either as signed transactions or unsigned transactions.
  - **Events**: allows subscribing to runtime events and receiving notifications when specific events occur. Developers can
  define event handlers and react to events in real-time.
  - **Subscription and Streaming**: supports real-time subscriptions and streaming of data from the Substrate node.
  Developers can subscribe to storage changes, events, or other real-time updates and receive them as a stream of data.
  This would enable building reactive and event-driven applications on top of Substrate.
- What the project is *not* or will *not* provide or implement:
    - The Python wrapper complements, not replaces, the `subxt` library. Parity's `subxt` remains the primary and most
    up-to-date source for Substrate interactions.
    - Potential performance overhead compared to native `subxt`. Optimization might be a future goal but not an initial
    priority.
    - While the goal is to make the library friendly for Python developers, it might initially heavily reflect the
    structure of the Rust `subxt` library. Additional Pythonic interfaces could be developed in later stages. 


### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
  - Serves as a bridge between the Python developer community and the Substrate ecosystem, allowing Python developers
  to easily build and integrate applications with Substrate-based networks. `subxt-python` leverages the existing
  `subxt` Rust library and provides a Python wrapper around it using PyO3. This allows Python developers to benefit
  from the features and functionality of `subxt` while working in their preferred language.
- Who is our target audience?
  - Python developers interested in building applications that interact with Substrate-based blockchains.
  - Developers working on parachains, dApps, wallets, or UI projects who want to use Python for their development stack.
  - Researchers and data analysts who want to query and analyze data from Substrate-based networks using Python.
  - Existing Python-based projects or organizations looking to integrate with Substrate/Polkadot/Kusama ecosystems.
- What need(s) does the project meet?
  - Provides a Python interface for interacting with Substrate-based blockchains, enabling Python developers to build
  and integrate applications easily.
  - Allows Python developers to leverage the extensive Python ecosystem and libraries for data analysis, machine
  learning, and other use cases in conjunction with Substrate-based blockchains.
  - Facilitates the adoption and growth of the Substrate/Polkadot/Kusama ecosystem by attracting Python developers and
  expanding the developer base. Existing Substrate teams could leverage Python developers to build their projects. 
- How did we identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
  - An analysis of the Substrate/Polkadot/Kusama ecosystem reveals a lack of mature and actively maintained Python
  libraries for interacting with Substrate-based blockchains, indicating a gap that `subxt-python` aims to fill.
  - There's about 104 questions on [substrate stackexchange](https://substrate.stackexchange.com/search?q=python) 
    signaling the need for Python support in the Substrate ecosystem.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - Yes, there is a project called [py-substrate-interface](https://github.com/polkascan/py-substrate-interface) which
  is a Python library for interacting with Substrate-based blockchains. `subxt-python` is built on top of the subxt Rust
  library, leveraging its features, performance, and type-safe API. It provides a one-to-one mapping of `subxt`'s
  functionality to Python allowing developers to quickly iterate on their projects. `subxt-python` benefits from the
  active development and maintenance of `subxt`, ensuring compatibility with the latest Substrate versions and features.
- Are there any projects similar to yours in related ecosystems?
  - In the Ethereum ecosystem, there are Python libraries like [web3.py](https://web3py.readthedocs.io/en/stable/) and
  [eth-brownie](https://github.com/eth-brownie/brownie) that provide similar functionality for interacting with
  Ethereum-based blockchains. These libraries have gained significant adoption and have proven to be valuable tools for
  Python developers working with Ethereum.

## Team
### Team members

- Name of team leader: Tuguldur Baigalmaa
- Names of team members: Tuguldur Baigalmaa

### Contact

- **Contact Name:** Tuguldur Baigalmaa
- **Contact Email:** tgldr0511@gmail.com
- **Website:** https://philoniare.com/about

### Legal Structure

- **Registered Address:** None
- **Registered Legal Entity:** None

### Team's experience

I have been a web2 developer for 7 years, web3 Rust developer for over 2 years and have developed unique expertise in both Python and Rust. I have previously
worked on on-chain data analytics and saw the need for this project to come to fruition as an avid Python user. 

### Team Code Repos

https://github.com/philoniare/pba-final-project

https://github.com/philoniare/

### Team LinkedIn Profiles (if available)

- https://linkedin.com/in/tuguldurb


## Development Status :open_book:

Currently in proposal stage. Development has not started yet. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 10,000

### Milestone 1 — Basic functionality of client, storage and extrinsics (PyO3 Wrapper Development)

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 6,000 USD

| Number | Deliverable               | Specification                                                                                                                                                                                                                              |
| -----: |---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Apache 2.0                                                                                                                                                                                                                                 |
| **0b.** | Documentation             | We will provide both inline documentation of the code and a basic tutorial that explains how a user can install subxt-python, connect to a Substrate node, and perform basic operations such as querying storage, submitting extrinsics, and subscribing to events. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                            |
| 0e. | Article                   | We will publish an article that explains the motivation behind subxt-python, its core features, and how it benefits the Substrate/Polkadot/Kusama ecosystem by providing a Python interface for interacting with Substrate-based blockchains. The article will be targeted towards Python developers and the Substrate community.                                            |
| 1. | Project Setup             | Set up the project structure, development environment, and continuous integration (CI) pipeline for the subxt-python library.                                                   |
| 2. | PyO3 Bindings             | Implement the core PyO3 bindings for the subxt library, exposing the essential types and functions to Python. This includes bindings for the subxt::Client, subxt::RuntimeApi, and other key components.                                                                                                                                                                                                             |
| 3. | Client Functionality       | Expose the functionality of the subxt::Client to Python, allowing users to connect to a Substrate node, retrieve the runtime metadata, and perform basic operations such as querying the chain state and submitting extrinsics.                                                                                                                                                                                                             |
| 4. | Storage API           | Implement the Python bindings for the subxt storage API, enabling users to query storage values, decode the stored data, and subscribe to storage changes using Python.                                                                                                         |
| 5. | Extrinsics API              | Develop the Python bindings for the subxt extrinsics API, allowing users to construct, sign, and submit extrinsics to the Substrate node using Python.                                                                                                                                           |
| 6. | Error Handling      | Implement proper error handling and exception propagation in the PyO3 bindings, ensuring that errors from the Substrate node are translated and raised as appropriate Python exceptions.                                                                                                                                                                                 

### Milestone 2 — Subscriptions, Streaming, Documentation, Examples and Guides

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 4,000 USD

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                                                                                                              |
|--------:|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                 |
| **0b.** | Documentation             | We will provide comprehensive API documentation for subxt-python, detailing all the available classes, methods, and functions. The documentation will include usage examples, parameter descriptions, and expected return values. Additionally, we will create guides and tutorials that cover various use cases and demonstrate how to integrate subxt-python with other Python libraries and frameworks. |
| **0c.** | Testing and Testing Guide | We will expand the test suite to cover the new functionality introduced in this milestone. The testing guide will be updated to include instructions on running the tests and any additional testing requirements.                                                                                                                                                                                         |
|     0e. | Article                   | We will publish an article that showcases the advanced features of subxt-python, such as subscription handling, event streaming, and real-time updates. The article will highlight the benefits of using subxt-python for building event-driven and real-time applications on Substrate-based blockchains.                                                                                                 |
|      1. | Subscription API          | Implement the Python bindings for the subxt subscription API, allowing users to subscribe to storage changes, runtime events, and other real-time updates using Python.                                                                                                                                                                                                                                    |
|      2. | Streaming Support         | Develop the necessary functionality to support streaming of data from the Substrate node to Python. This includes handling WebSocket connections, processing incoming data, and providing a convenient API for users to consume the streamed data.                                                                                                                                                         |
|      3. | Documentation Website     | Set up a dedicated documentation website for subxt-python using Sphinx. The website will host the API documentation, guides, tutorials, and code examples.                                                                                                                                                                                                                                                 |
|      4. | Example Scripts           | Develop a set of example Python scripts that demonstrate the key features and usage patterns of subxt-python.                                                                                                                                                                                                                                                                                              |
|      5. | Integration Guides        | Create integration guides that show how to use subxt-python with popular Python framework - Flask. These guides will help developers integrate subxt-python seamlessly into their existing Python projects.     
|      6. | Published pypi package        | Publish the Python package to PyPi so that it can be easily installed with a simple pip command     

## Future Plans

- Develop an additional Pythonic API that is more idiomatic to Python developers
- Optimize the library for performance and efficiency to be on par with the native `subxt` library
- Explore the integration of subxt-python with other popular Python libraries and frameworks in the data science, machine learning, and web development domains.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** PBA

- Previous grant:
  - `create-substrate-app`
    - [Proposal](https://github.com/w3f/Grants-Program/pull/2227)
    - [Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/1146)
    - [Published library](https://www.npmjs.com/package/create-substrate-app) (already in active use by the community)
