# SubSMT

- **Team Name:** farcloud-labs
- **Payment Address:** 0xd08aD17A0336b52099ae54C81E668aeBfB3c968e(USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:
On-chain resources are precious, and more and more teams, especially L2, 
need to put data and calculations off-chain, and Merkel trees are used more frequently.
Sparse Merkle trees are widely used in blockchains, and have been used hundreds of thousands of times in the Ethereum community. 
Polkadot uses the rust language as its development language, and the implementation of sparse Merkel trees currently lacks a unified solution. 
Especially in substrate and ink, if there is an implementation template for sparse Merkle trees, 
it will greatly save the community's development time and avoid repeated development. 
This project will do just that.
### Overview

- tags `rust, substrate, ink, sparse-merkle-tree, rocksdb, paritydb`
- Provides a substrate-based pallet, an ink-based smart contract and an off-chain data backend.
- Sparse Merkle trees are widely used in blockchain technology solutions and can be used to store data and verify data integrity, 
reducing the computing and storage pressure of the chain. We noticed that there is currently only the MMT solution in substrate, 
and sparse Merkle trees should also be provided to allow community developers to have more choices and avoid repeated development.
The sparse Merkle tree follows a strict and complete binary path, which can better obtain the root in advance when the data has not been updated
(This is very useful to prevent off-chain data inconsistency after the blockchain transaction is rolled back),
and verify the non-existence of data, and the structure of the Merkle tree rarely changes when data is updated, and related operations are all log(n), etc. 
It has almost perfect balance and stability, allowing more possibilities in algorithms and providing more functions.
It is a Merkle tree solution that is well worth adopting.

### Project Details
#### technology stack
language: `rust, substrate, ink`.
1. Sparse Merkle tree and data backend implemented in rust.
2. Pallet for verifying sparse Merkle root.
3. Verify sparse Merkle tree root, ink contract.

#### What your project is *not* or will *not* provide or implement
For the specific off-chain implementation of the sparse Merkle tree, 
we will not reinvent the wheel and directly use [https://github.com/nervosnetwork/sparse-merkle-tree](https://github.com/nervosnetwork/sparse-merkle-tree), 
but we may make necessary changes to it. such as in smart contracts, 
resources are precious, so use the algorithm that consumes the least Gas as much as possible, and for example, change some of its code to be compatible with substrate. 
Here’s to thanking them for their great work. 
On-chain, we use the most intuitive and gas-saving verification method to meet the gas-saving needs of all teams.

In orbiter's Ethereum smart contract, we originally planned to use [https://github.com/nervosnetwork/sparse-merkle-tree](https://github.com/nervosnetwork/sparse-merkle-tree) directly,
but later found that there are much serialization and verification algorithm levels that do not meet our needs to consume the least Gas. 
This is also the reason why we provide this project for the Polkadot community to use. This will prevent community developers from having to do something like this repeatedly.


### Ecosystem Fit

SubSMT serves projects that require off-chain storage and then on-chain verification of data integrity. 
This project is suitable for teams that want to use sparse Merkel trees and is also the best choice. 
In the Polkadot ecosystem, the only implementation of Merkle tree is MMT. This is an urgent need for sparse Merkle trees with a large user base. 
With this unified solution, community tools are further improved and the development ecosystem is further prosperous, 
which greatly helps developers save more time. 

Our goal is to create a Polkadot eco-friendly sparse Merkle tree solution based on rust, substrate and ink, not other languages. Developing 
based on rust will be beneficial to the use of ecological projects because it has greater compatibility. 
And many zero-knowledge proofs use languages similar to rust or use rust directly, which can be used by them in the future.

## Team :busts_in_silhouette:

### Team members

* YanOctavian
* octavei

### Contact

- **Contact Name:** octavei
- **Contact Email:** octavei@proton.me

### Legal Structure

- **Registered Address:** No. 6, Jiusi Team, Renlian Village, Laren Town, Du'an Yao Autonomous County, Guangxi, China.
- **Registered Legal Entity:** N/A

### Team's experience
* `YanOctavian` worked in the Ethereum L2 cross-chain bridge Orbiter team, responsible for decentralized sequencer development and decentralized client submitter development. He has 3 years of rust development experience and 5 years of blockchain smart contract development experience.
* `octavei` 4 years experience in substrate development. Familiar with Ethereum and EOS smart contracts. Have done many blockchain projects.
> There are also some people whose identities are not disclosed and who do not participate in development, but will provide basic help, such as contract security reviews and technical opinions. At the same time, they will not benefit from the grant of this project. They all have extensive experience in blockchain contracts. Thank them here.

### Team Code Repos

- https://github.com/farcloud-labs/submitter
- https://github.com/farcloud-labs/subsmt
- https://github.com/farcloud-labs/sparse-merkle-tree

***
- https://github.com/YanOctavian
- https://github.com/Octavei


## Development Status :open_book:

- https://github.com/farcloud-labs/subsmt

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 10000 USD

### Milestone 1 - SMT pallet, SMT ink smart contract, and backend base on rocksdb.

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 7,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                 |
|--------:|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Apache 2.0                                                                                                                                                                                                                                    |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 | 
|      1. | rust crate: SMT-api       | Basic APIs based on rocksdb, such as new verify_root method, update, insert and get_futrue_root, etc.                                                                                                                                         |
|      2. | Substrate module: SMT     | We will create a Substrate module that will verify Merkle root.                                                                                                                                                                               |
|      3. | Smart contracts(ink): SMT | We will deliver a set of ink! smart contracts that will will verify Merkle root.                                                                                                                                                              
|      4. | backend                   | backend, used for permanent storage(based on rocksdb) of off-chain data and provision of rpc services.                                                                                                                                        |
|      5. | network                   | A basic network with SMT pallet and contract pallet for testing smart contracts and SMT pallet functions.                                                                                                                                     | 
> It also includes some changes to the hash algorithm and the selection of data serialization and deserialization algorithms, as well as the testing of these parts, which do not need to be included in the milestone work because some of them have been completed before.

### Milestone 2 - backend base on parity-db and common backend.
- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 3,000 USD

|  Number | Deliverable                    | Specification                                                                                                                                                                                                                                 |
|--------:|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                        | Apache 2.0                                                                                                                                                                                                                                    |
| **0b.** | Documentation                  | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide      | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| **0d.** | Docker                         | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
| **0e.** | Article                        | We will publish an **article** that explains How SubSMT works                                                                                                                                                                                 |                                                                                                  
|      1. | rust crate: smt-paritydb-store | Sparse merkle tree parity-db store implementation                                                                                                                                                                                             |
|      2. | paritydb-store-api             | Basic APIs based on smt-paritydb-store, such as new verify_root method, update, insert and get_futrue_root, etc.                                                                                                                              |
|      3. | common-backend                 | A backend compatible with smt-rocksdb-store and smt-paritydb-store                                                                                                                                                                            |

## Future Plans
- On-chain implementation of more functions besides verifying Merkel root.
- Provide more permanent storage solutions off-chain, not just rocksdb and parity-db.
- Compatible with EVM, allowing it to be used in smart contracts on parallel chains such as moonbeam.

## Referral Program (optional) :moneybag:

- **Referrer:** [JimYam](https://github.com/w3f/Grants-Program/pull/1050)
- **Payment Address:** 0x2c738f52A6BC738d556095A79b9fc49359fE0159(USDT)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation.

