# Binary Merkle Tree

- **Team Name:** ALPHA LABS FZCO
- **Payment Address:** 0x503b14fCcbAD63A1d6054D07f8B4685dCf5db7c3 (USDT ERC20)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

This project aims to introduce binary merkle tree's as a first class citizen in substrate.  There is a large demand for the usage of binary merkle
tree's, especially in the context on zero-knowledge circuits where substrate's native patricia merkle tree is not well suited.  The demand
for the existence of binary merkle tree's can be evidenced by reviewing grant applications, many of which are implementing
their own binary merkle tree on top of substrates native patricia merkle tree.  This is an inefficient solution and not production ready.  This project
will introduce binary merkle tree's as a [child tree](https://github.com/paritytech/substrate/blob/master/primitives/storage/src/lib.rs#L239-L245) such 
that developers can create and interact with the binary merkle tree's via a runtime api.  We are interested in delivering binary merkle tree's such 
that we can utilise them in the future for zero-knowledge focused substrate projects.

### Project Details

This project will contain two primary technical deliverables.  The first of which is a binary merkle tree implementation that operates over a 
generic [HashDB](https://github.com/paritytech/trie/tree/master/hash-db).  The binary merkle tree implementation will include in-memory storage and
a recorder for recording tree accesses such that storage proofs can be created for inclusion in PoV blocks.  The second deliverable will be the 
integration of the binary merkle tree into substrate as a child tree.  All deliverables of this project will be implemented in rust and will be no_std
compatible such that they can be integrated into substrate core.

#### Binary Merkle Tree Library

In a similar fashion to the [Trie implementation](https://github.com/paritytech/trie/tree/master/trie-db) the Tree will be generic over the hasher used.
There will be two DB structs, one for read-only access (TreeDB) and one for read / write access (TreeDBMut).  The storage field within the TreeDBMut 
struct will be responsible for caching nodes in memory and also storing changes to nodes from inserts.  The changes will be committed to the db upon execution of 
the commit method.  The recorder will be responsible for recording access to tree nodes such that a storage proof can be constructed to include in PoV blocks.  

```rust
pub type DBValue = Vec<u8>;

pub struct TreeDB<'a, H: Hasher> {
    db: &'a dyn HashDB<H, DBValue>,
    root: &'a H::Out,
    depth: usize,
    recorder: Recorder
}

pub trait Tree<H: Hasher> {
    fn root(&self) -> &H::Out;

    fn depth (&self) -> usize;

    fn get_value(&self, index: usize) -> Result<Option<DBValue>, TreeError>;

    fn get_leaf(&self, index: usize) -> Result<Option<DBValue>, TreeError>;
  
    fn get_proof(&self, index: usize) -> Result<Option<Vec<usize, DBValue>>, TreeError>;
}

pub struct TreeDBMut<'a, H: Hasher> {
    db: &'a mut dyn HashDB<H::Out, DBValue>,
    storage: BTreeMap<usize, DBValue>,
    uncommitted: Vec<usize>,
    root: &'a mut H::Out,
    depth: usize,
    recorder: Recorder
}

pub trait TreeMut<H: Hasher> {
    fn root(&mut self) -> &H::Out;

    fn depth(&self) -> uszie;

    fn get_value(&self, index: usize) -> Result<Option<DBValue>, TreeError>;

    fn get_leaf(&self, index: usize) -> Result<Option<DBValue>, TreeError>;
  
    fn get_proof(&self, index: usize) -> Result<Option<Vec<usize, DBValue>>, TreeError>;

    fn insert_value(&mut self, index: usize, value: DBValue) -> Result<Option<DBValue>, TreeError>;
  
    fn commit(&mut self);
}

pub struct Recorder<H: Hasher> {
  nodes: Vec<H::Out>
}

pub trait RecorderT<H: Hasher> {
  fn record(&self, access: H::Out);
}
```

#### Binary Merkle Tree Substrate Integration

The following table specifies the files that will need to be modified in substrate to support the integration of the
binary merkle tree as a child tree.  As this is an internal additive change to substrate it will not require
modification of downstream repos.  This list represents our current understanding however it may not be comprehensive 
and is likely to change as we proceed with the integration.

|  File |
|-----|
|primitives/state-machine/src/trie_backend.rs| 
|primitives/state-machine/src/trie_backend_essence.rs|
 |primitives/state-machine/src/ext.rs|
 |primitives/state-machine/src/overlayed_changes|
 |primitives/state-machine/src/backend.rs|
 |primitives/state-machine/src/basic.rs|
 |primitives/state-machine/src/read_only.rs|
 |primitives/storage/src/lib.rs|
 |primitives/trie/src/storage_proof.rs|
 |primitives/trie/src/recorder.rs|
 |primitives/trie/src/cache|
 |primitives/io/src/lib.rs|
 |primitives/externalities/src/lib.rs|
 |primitives/runtime/src/lib.rs|
 |primitives/tasks/src/async_externalities.rs|
 |client/db/src/lib.rs|
 |client/db/src/storage_cache.rs|
 |client/api/src/backend.rs|
 |client/api/src/in_mem.rs|
 |client/api/src/proof_provider.rs|
 |client/chain-spec/src/chain_spec.rs|
 |client/network/sync/src/state.rs|
 |client/network/light/src/light_client_requests/handler.rs|
 |client/rpc/src/state/state_full.rs|
 |client/service/src/chain_ops/export_raw_state.rs|
 |client/service/src/client/client.rs|
 |frame/state-trie-migration/src/lib.rs|
 |frame/support/src/storage/child.rs|

##### Runtime Interface

The runtime will be able to access the binary merkle tree child storage via the following runtime interface.

```rust
#[runtime_interface]
pub trait BinaryMerkleTreeChildStorage {
    fn get_leaf(&self, storage_key: &[u8], index: usize) -> Option<Vec<u8>>;
  
    fn get_value(&self, storage_key: &[u8], index: usize) -> Option<Vec<u8>>;
  
    fn get_proof(&self, storage_key: &[u8], index: usize) -> Option<Vec<(usize, Vec<u8>)>>;
  
    fn set_value(&mut self, storage_key: &[u8], index: usize, value: &[u8]);
  
    fn clear(&mut self, storage_key: &[u8], index: usize);
  
    fn storage_kill(&mut self, storage_key: &[u8], _limit: Option<u32>);
    
    fn root(&mut self, storage_key: &[u8]) -> Vec<u8>;
}
```

### Ecosystem Fit

This project will introduce a new storage structure to substrate as a child tree.  This will enable any project that builds
with substrate to have the ability to work with binary merkle trees.  It will be particularly useful for zero-knowledge projects
that require the usage of a binary merkle tree.  The target audience for this project is any team that is developing with substrate.  
This project will satisfy the demand for access to binary merkle trees in substrate. As it stands there are no similar projects 
in the ecosystem however the demand for binary merkle trees is recognised.

## Team :busts_in_silhouette:

### Team members

- Francesco Risitano - Project Lead / Software Engineer
- Kin Chan (AKA: Simon Chan) - Software Engineer

### Contact

- **Contact Name:** Francesco Risitano
- **Contact Email:** francesco.risitano95@gmail.com
- **Website:** N/A

### Legal Structure

- **Registered Address:** Dubai Silicon Oasis, DDP, Building A2, Dubai, United Arab Emirates
- **Registered Legal Entity:** ALPHA LABS FZCO

### Team's experience

#### Francesco Risitano

Francesco found his passion for complex systems and programming during his particle physics research at CERN where he developed
a machine learning algorithm concerned with particle identification at the ATLAS detector. He then transitioned to industry where he
worked at a telecommunications company applying machine learning models at scale for broadband network assurance and recommendation engines.
Following this he worked at a consultancy where he was the technical lead responsible for architecting and engineering a highly scalable event streaming solution
for government. In this role he was responsible for managing a technical team of 12 members. He gained significant experience across
enterprise architecture, engineering, devops, testing and project management. He then started contributing to open source blockchain projects and found himself
a part-time (evenings / weekends) role building a data oracle. Following this he transitioned full time to blockchain development where he built reef chain,
an EVM compatible substrate based chain. He is also a Mina genesis founding member and participated in Mina's builders program to develop a POC layer 2 rollup based DEX. His
experience at Mina and REEF has fuelled his desire to bring more zero-knowledge technology to the substrate ecosystem and has now left his role at REEF
to focus on achieving this goal.

#### Kin Chan

Kin got his start in programming while modelling acoustic absorbers in MATLAB during his MEng dissertation at university. He then went on to work as a fulltime software engineer
at MirrorWeb, a web archiving startup, where he got his first taste and love for building complex distributed systems. He then moved
onto BJSS, an enterprise consultancy where he was placed on a project to build out the core systems for one of the world's largest online betting platforms and run a Golang bootcamp
alongside to train people how to write highly concurrent and effective code. At present, Kin is working as a senior software engineer at Vonage, a cloud communications provider,
where he is developing a brand new, highly scalable, cloud development platform, which is already being used by some high profile clients. As of late, Kin has redirected his focus
towards blockchain and has been developing DeFi arbitrage bots in his spare time. Over his career, Kin has worked on a wide range of novel solutions to complex problems and is always
looking to solve the next big challenge.

### Team Code Repos

- https://github.com/frisitano
- https://github.com/kinluek

### Team LinkedIn Profiles

- https://www.linkedin.com/in/francescorisitano/
- https://www.linkedin.com/in/si-chan-66860610a/


## Development Status :open_book:

The project has not started yet.  We have defined the requirements and designed the solution as described above in this note.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3.5
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 25,000 USDT

### Milestone 1 - Binary Merkle Tree Library

- **Estimated duration:** 1.5 month
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable                | Specification                                                                                                                                                                                                                                 |
| -----: |----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a. | License                    | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                          |
| 0b. | Documentation              | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide  | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| 0d. | Docker                     | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
| 1. | Binary Mekrle Tree Library | We will create a binary merkle tree library that operates over a HashDB backend and is generic over the hasher.  It will implement the interfaces as described above in this note.                                                            |


### Milestone 2 - Integration of binary merkle tree library into substrate

- **Estimated Duration:** 2 month
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable                              | Specification                                                                                                                                                                                                                                 |
| -----: |------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a. | License                                  | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                          |
| 0b. | Documentation                            | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide                | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                               |
| 0d. | Docker                                   | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                 |
| 1. | Binary Mekrle Tree Substrate Integration | We will integrate the binary merkle tree library into substrate such that it can be used as a child tree.                                                                                                                                     |


## Future Plans

- We will promote the module to substrate developers via discord, telegram and element.
- We are committed to maintaining the binary merkle tree library.
- We will use the binary merkle tree child tree in future zero-knowledge based projects

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
