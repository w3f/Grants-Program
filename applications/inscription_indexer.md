# Inscription Indexer

- **Team Name:** DOTA TEAM
- **Payment Address:** 0xAa552A24659AbB63817cC3ba6AEE770922640653 (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

Inscriptions represent not only a different form of technology but also a unique mode of thinking. They may find extensive applications in social networking and GameFi, among other domains.

Moreover, sending a memo while the remaining storage and computation reside off-chain could potentially enable users to enter the blockchain space at lower costs.

This is a social experiment worth trying.
### Overview

Dota is the first inscription project released by the Polkadot ecosystem. Its extremely fair and innovative minting method has once again brought Polkadot to the attention of the crypto community, driving the development of more inscription projects. Many subsequent projects have adopted this fair minting method.

Polkadot lacks smart contracts but boasts an extremely high TPS, making it entirely worthwhile to conduct more social experiments within its ecosystem. Inscriptions are one such experiment. This will bring new users and markets, as well as revenue to more PoS node validators, while also enriching the treasury.

Inscriptions should have unified and widely applicable standards, including the scope and method of on-chain data resolution, which determine the scalability of the inscription protocol. This project provides Dota with a highly scalable indexer based on the dot-20 protocol. Similar to the ERC20 protocol, developers can quickly build their own DeFi products on top of this protocol. The current marketplace for Dota is being built according to a framework similar to OpenSea and is currently under development.

We hope that this indexer will be widely used by more development teams and incorporated into our development efforts. The AIWeb3DAO team is one such team that is adopting this indexer and bringing us more meaningful insights. In the future, the functionality of this indexer will continue to become richer and incorporate more protocols, becoming the most widely used inscription standard in the Polkadot ecosystem.

Using this indexer, whether on any parachain or the main chain of the Polka ecosystem, one can quickly build their own inscription platform. The uniformity and standardization of the protocol make interaction possible and make technical communication between different development teams more efficient. This is very meaningful.

### Project Details

- lang: `Python`, `nodejs`

- `api server` A web service based on FastAPI, providing basic indexer interfaces externally, such as querying account balances, viewing the number of holders, and so on.
- `db` The indexer's database, where all indexer data is stored. It determines the table structure of the index and provides relevant APIs.
- `crawler` The indexer's sole source of data is to fetch on-chain data based on the dot-20 protocol and then parse and filter it.
- `dot-20` The specific code implementation of the dot-20 protocol.
- `indexer` The core part of the indexer, orchestrating the operation of various components.
- `account` A ledger based on Sparse Merkle Trees, where the tick balances of all users are stored. Validating the accuracy of the ledger only requires providing the Merkle root corresponding to each block height externally.
- `smt-mysql-db` A Python package for using MySQL as a permanent storage database for Sparse Merkle Trees

### Ecosystem Fit

We are poised to become the new standard for Polkadot inscription project indexers. 
Any developer, team, or even enthusiasts of inscriptions can swiftly deploy their own inscription platform using this project, 
which can be used on any public chain within the Polkadot ecosystem. A unified inscription indexer standard benefits everyone.

In the Polkadot ecosystem, Dota has the most holders among inscription projects, 
which is undeniable. This also implies that Dota's indexer has the greatest potential to become the standard for inscription indexers in the Polkadot ecosystem, 
and is more likely to be seen and used by more teams. It also means more developers will participate in joint construction, 
the protocol will be continuously supplemented and improved, more people will join testing and usage, and the code will be more secure.

There are other inscription projects in the Polkadot ecosystem, and they may even have their own excellent protocols, 
but we are different. We have found that their indexers support a relatively narrow range of on-chain transactions, 
mainly remark_with_event. In contrast, our support range is broader, covering batch, multi-signature, and delegation, 
which makes the use cases of inscriptions more comprehensive. Under different combinations of calls in batch_all, 
sending a memo to the chain can also interact with the chain simultaneously. In the future, system-level inscription parachains can be created (currently, the Dota team also plans to do so).

The dot-20 protocol carried by the Dota indexer enables the rapid creation of more ERC20-based products.
## Team :busts_in_silhouette:

### Team members

- `jyaymusk`
- `octavei`,  `MockBL`, `lanyou`, `DOTADurial`

### Contact

- **Contact Name:** jyaymusk
- **Contact Email:** jyaymusk@proton.me
- **Website:** https://dota.fyi/

### Legal Structure

- **Registered Address:** Room 203, Building 10, Chuangye Road, Xixiangtang District, Nanning City, Guangxi Zhuang Autonomous Region, China.
- **Registered Legal Entity:** N/A

### Team's experience
- `jyaymusk` Graduated from the National University of Singapore with a Master's degree in Finance. 7 years of experience in the blockchain industry.
- `DOTADurial` 8 years of experience in the blockchain industry, with roles as an investor and product manager.
- `octavei` 5 years experience in substrate development. Familiar with Ethereum and EOS smart contracts. Have done many blockchain projects.
  > Thank you to `octavei` for his outstanding work, providing technical guidance and early-stage development in the Dota project.
- `MockBL` Full-stack engineer with 7 years of experience in the blockchain industry, specializing in social, gaming, and DeFi products.
- `lanyou` Software Test Engineer
### Team Code Repos
- https://github.com/DOTA-DOT20/dota-indexer
- https://github.com/DOTA-DOT20/dota-indexer-db
- https://github.com/DOTA-DOT20/dota-indexer-crawler

- https://github.com/octavei/
- https://github.com/jyaymusk/
- https://github.com/MockBL/
- https://github.com/DOTADurial

## Development Status :open_book:
- https://github.com/DOTA-DOT20/dota-indexer
- https://github.com/DOTA-DOT20/dota-indexer-db
- https://github.com/DOTA-DOT20/dota-indexer-crawler


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  5
- **Total Costs:** 24000USD

### Milestone 1 - An indexer based on the Python language

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 10000 USD

|  Number | Deliverable              | Specification                                                                                                                                                                                                                                 |
|--------:|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                  | Apache 2.0                                                                                                                                                                                                                                    |
| **0b.** | Documentation            | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                   | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
|      1. | dot-20  Standard           | Writing the DOT-20 Protocol Standard                                                                                                                                                                                                          |
|      2. | dot-20                   | Implementation of the DOT-20 Protocol: Python Package                                                                                                                                                                                         |
|      3. | crawler                  | A Python package for fetching DOT-20 related transactions on Substrate chain                                                                                                                                                                  |
|      4. | db                       | A Python package for the data table structure and related APIs involved in the indexer                                                                                                                                                                                                              |
|      5. | indexer                  | The core code of the indexer, integrating various components to complete the entire functionality of the indexer.                                                                                                                                                                                                                      |

### Milestone 2 - Storing User Tick Balances with Sparse Merkle Trees

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 6,000 USD
- 
|  Number | Deliverable               | Specification                                                                                                                                                                                                                                 |
|--------:|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Apache 2.0                                                                                                                                                                                                                                    |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
|1. | account                   | To design the account structure and store the account balances in a Sparse Merkle Tree                                                                                                                                                                                                                   |
| 2. | smt-mysql-db              | A Python package for using MySQL as a permanent storage database for Sparse Merkle Trees                                                                                                                                                      |
|3. | api server                | A FastAPI-based web service providing basic data query interfaces, such as user balance.                                                                                                                                                                                                           | 


### Milestone 3 - Indexer based on the Node.js language.
- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD
- 
|  Number | Deliverable               | Specification                                                                                                                                                                                                                                 |
|--------:|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Apache 2.0                                                                                                                                                                                                                                    |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
|      1. | dot-20 | Implementation of the dot-20 protocol, a Node.js package.                                                                                                                                                                                                                    |
|      2. | crawler | A Node.js package for fetching dot-20 related transactions on a Substrate chain.                                                                                                                                                                                                             |
|      3. | db | A Node.js package outlining the data table structure and data APIs involved in an indexer.                                                                                                                                                                                                              |
|      4. | indexer | The core code of an indexer, integrating various components to complete the entire indexing process.                                                                                                                                                                                                                      |


## Future Plans

- If marketplace development is completed, with the ability to support long-term maintenance and development of the project through transaction fees.
- Currently, some community developers have joined to collaborate on the development, and they hope that the indexer can be used in their own projects. 
More developers are expected to join in the future.
- The team aims to implement more protocols in the indexer, such as NFT-related protocols, to enrich its functionality. 
This will enable the indexer to meet the needs of social and gamefi domains and be widely applied in other fields.

## Referral Program (optional) :moneybag:

- **Referrer:** [JimYam](https://github.com/w3f/Grants-Program/pull/1050)
- **Payment Address:** 0x2c738f52A6BC738d556095A79b9fc49359fE0159(USDT)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**   
personal recommendation
