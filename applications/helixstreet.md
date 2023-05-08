# helixstreet Module

- **Team Name:** helixstreet
- **Payment Address:** bc1qvu2mjjm602rqshwkspy2v7a6wke529uzkucnej
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/820#issuecomment-1442461748)

## Project Overview :page_facing_up:


### Overview

helixstreet is a project to extend the use of Blockchain technology to genomics. helixstreet chose substrate as technology to implement a pallet to store a Merkle tree hash of genomic raw sequencing data. Relationsships ( ancestry ) can be documented in the blockchain based on relationships between genomic data. Currently we are planning to implement helixstreet as parathread.

Ancestry data and personal genomic relationships are today stored centralized. helixstreet's approach allows the representation of ancestry data in a decentralized manner.


### Project Details

The project is in this stage just a pallet.

### Ecosystem Fit

The project extends the use of Polkadot ( or Kusama ) to a whole new use case. helixstreet would be an application specific parathread. It solves the problem of ownership of genomic data and the the human desire to conduct genealogical research without a central authority.

## Team :busts_in_silhouette:

### Team members

- Thomas Deisen

### Contact

- **Contact Name:** Thomas Deisen
- **Contact Email:** thomas.deisen@helixstreet.io
- **Website:** https://helixstreet.io

### Legal Structure

- **Registered Address:** None
- **Registered Legal Entity:** None

### Team's experience

Master in Computer Science / Founder of several companies / self education in Genomic Sequencing Technology and Variant Calling

### Team Code Repos

- https://github.com/helixstreet


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/thomasdeisen


## Development Status :open_book:

We started the project: https://github.com/helixstreet

## Development Roadmap :nut_and_bolt:

N/A

### Overview

- **Total Estimated Duration:** 1
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 1000 USD

### Milestone 1 Example — Implement Substrate Modules

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 1000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. The docker image will not include sequencing data. |
| 0e. | Article | We will publish an **article**/workshop that explains what was achieved as part of the grant. |
| 1. | Substrate module: genomics | We will create a Substrate module that will store the merkle hash of genomic sequencing raw data. | 
| 2. | Program to generate Hashtree | We will creates a hash tree for all reads of the DNA probe. The script should calculate for every Read of every Chromosome a hash and create a Merkle tree to reduce storage. Furthermore the script should store a vector ( or the main root ) of the root hashes automatically in the Blockchain assigned to the private key. A flag is needed to distinguish between entries made by a machine ( e.g. Sequel II ) or by the identified owner of the DNA raw data ( the private key of the human being represented by the sequencing data ). The program will be realized in rust. | 




## Future Plans

The pallet is gradually expanded to document the relationship to other public keys. There is also the possibility of working together with HiFi sequencing manufacturers ( e.g. PACB ) who could store genomic footprints directly from the machines in the blockchain. Longterm we plan to develop a healthcare ecosystem in the blockchain based on genomic data.

Selling any private data is completely out of scope of this project. The focus is to keep private DNA data private. The purpose of the project is to enable all the possibilities of owning his own DNA ( firstly ancestry research ) without revealing the whole data ( zero knowledge processing). When the raw data goes through the process of variant calling ( DeepVariant / open source variant caller / https://github.com/google/deepvariant  ) groups of variants will additionally be stored in the blockchain. Scope of the grant is a genomics pallet with the described basic functionality, which should be adaptable and extensible.





## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

The project is a very long term project. Parallel to the Blockchain and decentralized governance development there is actually a game changing shift in the sequencing technology (SMRT Long Read Sequencing ) based on the availability of HiFi sequencing which allows the sequencing of human DNA ( and other species ) in a reference grade level quality.
