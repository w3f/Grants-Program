# Open Grant Proposal

* **Project:** Liqum

* **Proposer:** denchik37

* **Payment Address:** 1MyBN3TY5dUGY8PtVoT1au2CsycCzcRiXX 

### Brief Description

**Liqum** is a business process protocol that facilitates collaboration between decentralized services in the Polkadot ecosystem, as well as the outside world. It allows stakeholders to agree on the workflow, and ensure that its participants interact with each other according to the same rules every time.

The centerpiece is a process model in BPMN 2.0 standard that defines all the tasks to be performed by humans and machines. The flowchart is compiled into a dynamic data structure representing the process and its instances. Once published on-chain, it controls consistent, trustless, and real-time workflow execution. Technically, we are orchestrating interaction between users, off-chain systems, and most importantly parachains.

The state changes with every piece of work performed. Smart contracts automatically assign the right jobs to the right resources. Permissioned visibility into transactions allows activity monitoring and reporting.

### Good for Ecosystem

We are seeking to capitalize on Polkadot's native interoperability and allow buildling automated value chains, where the outcome of an interconnected busines process is greater than the sum of isolated services participating in it.

Each member of the ecosystem can perform a specific task in a process orchestrated across the decentralized network, e.g. confirm a verifiable claim, issue a credit in stablecoin, or whatever utility they can provide. The main beneficiary is the end user though, profiting from increased operations efficiencies.

### Substrate / Polkadot Integration

We aim to create a process execution engine on top of Substrate. The key idea is to generate ink! smart contracts capable of interpreting a BPMN process model, represented as a space-optimized data structure, that can be dynamically modified at any time.

Each set of smart contracts embodies control flow logic, data structure state, and specific external user defined tasks & scripts, that are compiled directly from a BPMN model. Then, we extract compilation artifacts, such as element indexes, their respective encoded types, and condition tables. Smart contracts are initialized through Polkadot apps api and linked together by their respective AccountId's. Together, they form an executable process representation.

At this stage we are building an on-chain part of the project, while we have other far-reaching plans too.

### Why Interested

Denis has been discovering and automating business processes for the last 5 years. One of the most common problems is a technological disconnect between different parties trying to collaborate. In the conventional centralized world, it is solved with forcing one party into the infrastructure of the other; or by custom and direct integration; or via trigger-event services like Zapier. None of this is scalable.

Blockchain environment removes the need for a middleman, while processes can be defined in universally understood notation as autonomously functioning models. Together these facts create an enormous opportunity to make interaction and coordination between distributed parties more efficient.

## Team

* **Code Repos:** https://github.com/Liqum/rust-onchain-execution-engine/

* **Website:** https://liqum.io

* **Team Members:**

* Aleksey Gnatovskyi, Software Engineer, [GitHub](https://github.com/alekspickle), [LinkedIn](https://www.linkedin.com/in/aleksey-gnatovskyi-31b15a131/)
* Arsen Kondratiev, Software Engineer, [GitHub](https://github.com/iorveth), [LinkedIn](https://www.linkedin.com/in/arsen-kondratiev-031801172/)
* Denis Igin, Business Development, [LinkedIn](https://www.linkedin.com/in/denisigin/)

* **Legal Structure:**

The business is registered as Sole Proprietorship. We might change the incorporation structure and jurisdiction with the first institutional investor.

* **Team's Experience:**

**Aleksey** is a software engineer with hands-on experience building on Substrate. Additionally, he specializes in Rust, NodeJs, Python, and React, with over two years of development experience with these technologies. Some examples of the work include:

* Dothereum project development (porting runtime block producing [from babe to aura](https://github.com/dothereum/dothereum/tree/aura)) when it was active.
* One of core developers of [PolkaHub](https://github.com/akropolisio/polkahub-monorepo) hosting for easier parachain/substrate-based node deployment ([CLI](https://github.com/akropolisio/polkahub-cli), [backend](https://github.com/akropolisio/polkahub-backend)).

**Arsen** is a Rust developer with over a year of experience in blockchain & backend domains. One of the recent projects involved successful requirements definition, architecture design, and code of Cost per Action and Statistic Collector infrastructure backends in Rust for cluster of DAPs, based on Tron and EOS platforms. The actual commits and the name of the project cannot be disclosed due to NDA restrictions. Example of work:

* Utxo based, bitcoin-like blockchain, implemented in Rust - [ritcoin](https://github.com/iorveth/ritcoin) (purely for educational purposes)

**Denis** has 20+ years of entrepreneurial and management experience: 2 companies and 3 startups launched, had 1 exit, hundreds of websites / systems developed, active member of local venture and blockchain community.

## Development Roadmap 

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  1.5

There are 2 developers and 1 project manager on this project, each working on it half time, or 12 hours per day total at 40 USD hourly rate.

* **Total Costs:** ₿3.00 (three bitcoins)

### Milestone 1

* **Estimated Duration:** 1 month
* **FTE:** 1.5
* **Costs:** ₿1.00 (one bitcoin)

Deliverables: Common process operations, i.e.

* **BPMN Interpreter**: Encodes the semantics of the BPMN language and controls that the execution adheres to the standard. It is implemented as a single process-agnostic contract that interprets the logic of the process models by querying / updating process perspectives from / into Interpreter Flow and Interpreter Data structures.

* **Interpreter Flow**:  Describes the control-flow perspective of the workflows, i.e. an order in which instructions are executed. It contains process model structures, as well as their elements (task, event, gateway, etc.) and relations. Supports sub-processes.

* **Interpreter Data**: A hierarchy of smart contracts formed from the nodes for each process / sub-process instance, that store its state and keep a reference to the related Interpreter Flow node.

* **Data Factories**: Handles smart contracts’ instantiation. The Data Factories, linked to a sub-process in the Interpreter Flow hierarchy, must define how to instantiate the smart contract of the corresponding Interpreter Data node.

### Milestone 2

* **Estimated Duration:** 1 month
* **FTE:** 1.5
* **Costs:** ₿1.00 (one bitcoin)

Deliverables: Process specific rules, i.e.

* **Data & Scripts**: Describes the data management perspective of the workflows, i.e. information created, manipulated, and used while performing the work. It contains data and operations from a particular process model, while the values are conditioned and scoped to its instance. It extends Interpreter Data and is used by external actors to access data and execute tasks. Actor permissions are verified via Resource Access Control, and if he can perform the task, the process data and state are updated. For that, the corresponding Interpreter Data node invokes the BPMN Interpreter, that in turn interacts with the related Interpreter Flow nodes.

* **Resource Access Control**: Describes the resource perspective of the workflows, i.e. entities capable of doing the work. Handles the user access control and resource allocation for a task. Supports dynamic role assignment to process actors, that can be extended to restrict not only the execution of tasks, but also to control the operations / updates on the Interpreter Flow and Interpreter Data structures, as an authorization mechanism for process modification.

### Milestone 3

* **Estimated Duration:** 1 month
* **FTE:** 1.5
* **Costs:** ₿1.00 (one bitcoin)

Deliverables: On-chain and off-chain communication, i.e.

* **Event Log**: Manages interactions with external applications and actors, as specified by the process model, and validates the data they provide. Enables interaction with off-chain monitors that listen for events, such as change of state in a process.

* **Interchain Bridge**: Implements interactions with other applications in Polkadot network, that are exposed as services, with the help of XCMP.

Each milestone will be delivered together with documentation, tutorials, examples, and a Docker container, that allow checking that the code functions as described above.

## Additional Information 

We researched the subject matter and conducted a feasibility study to shape the system architecture. The development work has been under way for some time too, but it turned out to take extensive time and effort, hence the need for financial support. Initial project development is self-funded. We have applied for generic Web3 grant, but have not been issued it.

There are several other projects that aim to build workflow engines:

* [LTO Network](https://lto.network)
* [Statebox](https://statebox.org)
* [Caterpillar](https://arxiv.org/abs/1808.03517)
* [Unibright](https://unibright.io)
* [Monax](https://monax.io)
* [Agreements Network](https://agreements.network)
* [Quanopt](http://quanopt.com)

The decentralized BPM market is still in its early stage. Some players are tackling traditional use cases, such as contract management. Our strength is that we are looking for composability, i.e. combining utility from different blockchain services, something very unique in the current competitive landscape.
