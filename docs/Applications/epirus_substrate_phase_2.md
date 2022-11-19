# W3F Grant Proposal


-   **Project Name:** Epirus Substrate Explorer - Phase II
-   **Team Name:** Web3 Labs Ltd
-   **Payment Address:** 0xc905c448db9942c662fcb1680f3ecfcd0592409c
-   **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

This is an application for a follow-up grant for the [Epirus Substrate Explorer](https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_explorer.md) that has been completed in the following delivery: https://github.com/w3f/Grant-Milestone-Delivery/pull/527


### Overview

The main objective of this phase is to build a Metadata Registry service whose functions are (1) to verify Wasm contract source code and (2) to generate and store contract metadata and serve it through an API.

We will also evolve the Squid Ink processor and Explorer UI, systems developed in the first grant, to connect to the Metadata Registry. The Squid Ink processor will be responsible for decoding contract messages and events using the metadata retrieved from the Metadata Registry. The Explorer UI will display the decoded data, the verification status and the verified source code.

### Project Details

The Metadata Registry is a standalone service exposing a web-based API to be used by other systems that implement these main features:

- Uploading of source code and reproducible build metadata for a given chain and code hash
- Building of source code according to reproducible build metadata and matching with on-chain pristine code for verification
- Building contract metadata descriptors from source code and reproducible build metadata
- Downloading contract artefacts by chain identifier and code hash

#### **Source Code Verification**

Block explorers supporting EVM smart contracts typically allow contract owners to upload source code for their contracts. Having the source code for a smart contract offers users insights into what the smart contract is doing under the hood, thus increasing transparency. However, the uploaded source code needs verification to ensure that no purposefully misleading source code is uploaded. In order to support this verification process, the ink! development team is implementing reproducible builds in ink! smart contracts (https://github.com/paritytech/cargo-contract/issues/525).

After discussions with the ink! team, we have determined that the process for verifying ink! smart contract source codes will be as follows:

* The user uploads the source code and `.contract` file to the Metadata Registry.
* The Wasm bytecode in the uploaded `.contract` file is matched against the bytecode stored on-chain.
* Using build information stored in the `.contract` file, we build the source code to generate a new `.contract` file.
* If the generated `.contract` file matches the uploaded `.contract` file, the contract is marked as verified.

**Security**

The Metadata Registry is a public service that allows users to upload compressed archives, in zip or tar.gz format, to reproduce the build of their smart contracts.

We will carefully consider the potential security risks and address them in the service design or by secure technology choice.

These are the identified main concerns of the service security:
- Prevent compression-related attacks (e.g. zip slip, recursive and non-recursive zip bombs)
- Cargo build sandboxing and access to required dependencies

**Web API**

Here is a draft of the Web API verbs.

| Method | Path | Description|
|--|--|--|
|`POST`| `/:chain_id/:code_hash`| Upload source code and metadata files using multi-part form data |
|`GET`| `/:chain_id/:code_hash`| Downloads contract information such as verification status and related resource paths. |
|`GET`| `/:chain_id/:code_hash/:resouce_path` | Download the file at resource path; this could be source code files or metadata files. |

**Mock-ups**

The view of the contract code page when the contract code has not been verified:
![Unverified Contract View](https://drive.google.com/uc?id=1SA9ybyDWAVZ-dlmB8gXbbxpOKt9pN1gA)

The view of the contract code page during the process of source upload:
![Unverified Contract Upload](https://drive.google.com/uc?id=1T4vF1y2BltQTtG_q8J7GNS1H-IPrvMi0)

View of contract code page for a verified contract code:
![Verified Contract View](https://drive.google.com/uc?id=1bVuSpXFeBFBUwua2b50ARn3ECL8efTyK)

More details of verified contract source codes:
![Verified Contract details](https://drive.google.com/uc?id=1e_cx-Tf_TzspFPp08qobL1Gt7OkqyCN4)

#### **Metadata Decoding**

Currently, Epirus Explorer displays the encoded information for contract interaction messages and events, as shown in the image below.

![Contract Encoded Data Display](https://drive.google.com/uc?id=1MG6OlJg5I6PeQ3wbB0wjyWIOKBFztHJG)

We need to decode these entities to make them informative for a user. We will use the metadata in the `.contract` file generated during [source code verification](#source-code-verification) to decode these messages and events.

As shown in the sequence diagram below, the decoding process will work as follows:
* On reception of contract messages and events, the Squid Ink processor resolves the contract metadata by chain identifier and code hash.
* The processor checks the local cache for a copy of the metadata.
* If the metadata does not exist in the cache, the processor will call the Metadata Registry to retrieve the relevant contract information. The Metadata Registry response should contain the path to the metadata file if the contract is verified. The processor then calls the Metadata Registry to download the metadata using the provided path.
*  If metadata is available, the processor decodes the incoming data with the abstract binary interface descriptor and updates the data entities.
* Finally, the indexer saves the entities into the database.

![Contrat Decode Sequence](https://drive.google.com/uc?id=1oKJgkg_Z17IpT3w8gTgd-EpZMvBNaJ06)

With the decoded data available, the Explorer UI can display contract messages and events with meaningful names and decoded parameters.

**Mock-ups**

This is how we envision the decoded contract data will look like:
![Contract Decoded Data](https://drive.google.com/uc?id=1oKFjNE-l7Wk1u29Fk6fVZJPF3ZTZf4be)

### Technology Stack

For the Metadata Registry, we will evaluate [srtool](https://github.com/paritytech/srtool) for the part of deterministic builds, and we will leverage it if it meets our needs. Source code and metadata files will be stored on the file system and served using NGINX with an optimised configuration. In the future, we can also support decentralised storage layers.

We plan to use [Fastify](https://www.fastify.io/), a project under OpenJS Foundation, for the web API because of its good performance, default security and smooth developer experience. 

We will continue using the [Subsquid](https://subsquid.io/) framework, Typescript and React.js for the Squid Ink processor and Explorer UI.

### Out of Scope

In the case of contract metadata being uploaded sometime after instantiation, there will be un-decoded messages and events. A re-indexing process needs to be triggered to decode these entities. Currently, the indexing engine does not support any easy way for re-indexation. We will need to analyse the current system and derive the best solution for this situation. Considering the time and effort required, we have decided to leave this feature for the future.

### Ecosystem Fit

Currently, there is a lack of a Wasm contracts-oriented explorer in the Substrate ecosystem. While general explorers such as Subscan and Polkascan are available, the support for Wasm contracts on these explorers is either limited or non-existent. There is no explorer which verifies Wasm contracts or displays decoded contract messages, two valuable features for users. Epirus Substrate Explorer aims to fill the gap and provide a better user experience when interacting with Wasm contracts on Substrate chains.

Additionally, the Metadata Registry will also be an independent service providing its capabilities to any explorer, or application, that wishes to access contract metadata and verified source codes. It will be comparable to [Sourcify](https://sourcify.dev/) in the Ethereum ecosystem. Such a service does not yet exist in Substrate.

On top of that, Epirus Substrate Explorer leverages existing solutions, such as SubSquid and srtools, which fosters synergy across the Substrate ecosystem.

## Development Roadmap :nut_and_bolt:

### Overview

-   **Total Estimated Duration:** 3 months
-   **Full-Time Equivalent (FTE):** 2 FTE
-   **Total Costs:** 75,000 EUR

### Milestone 1 - Source Code Verification

-   **Estimated duration:** 2 months
-   **FTE:** 2
-   **Costs:** 50,000 EUR
    
| Nº  | Deliverable | Specification
| :-- | :--         | :--
| 0a. | License     | Apache 2.0
| 0b. | Documentation | We will provide inline documentation of the code and a basic tutorial to explain how to upload contract source code and metadata to the Metadata Registry.
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests in the guide.
| 0d. | Docker        | We will provide a Dockerfile and Docker Compose file(s) to ease the deployment and execution of the system.
| 1.  | Metadata Registry | The delivery of the baseline Metadata Registry will include <ul><li>1. Metadata Registry Core</li><li>2. Metadata Registry API</li></ul>The source code will be in a public git repository.
| 2.  | Developer Tools | We will provide example scripts to help ease the process of bundling and compressing the required source code files.
| 3.  | Updated Explorer UI | The Explorer UI will support the display of verification status and source code, in addition to the UI for contract source upload.
| 4.  | Public explorer instance | A publicly accessible instance of the Explorer connected to a development network displaying verified source code and verification status.
    
### Milestone 2 - Decoding of Contract Messages and Events based on ABI Metadata

-   **Estimated duration:** 1 months
-   **FTE:** 2
-   **Costs:** 25,000 EUR
    
| Nº  | Deliverable | Specification
| :-- | :--         | :--
| 0a. | License     | Apache 2.0
| 0b. | Documentation | We will provide inline documentation of the code and update the tutorial.
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests in the guide.
| 0d. | Docker        | We will provide a Dockerfile and Docker Compose file(s) to ease the deployment and execution of the system.
| 1.  | Updated Squid Ink processor | The processor will connect to the Metadata Registry to retrieve contract metadata by chain ID and code hash, followed by decoding messages and events based on retrieved metadata.
| 2.  | Updated Explorer UI | The Explorer UI will support the display of decoded contract messages and events.
| 3.  | Public explorer instance | A publicly accessible instance of the Explorer connected to a development network displaying decoded contract messages and events.

## Team :busts_in_silhouette:

### Team Members

-   Marc Fornós
-   Xueying Wang
    

### Contact

-   **Contact Name:** Conor Svensson
-   **Contact Email:** [conor@web3labs.com](mailto:conor@web3labs.com) 
    

### Legal Structure

-   **Registered Address:** 7 Bell Yard, London, England, WC2A 2JR
-   **Registered Legal Entity:** Web3 Labs Ltd, CRN 10783824

### Team's Experience

The same team has worked on the delivery of the [first grant](https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_explorer.md#team-busts_in_silhouette).

### Team Code Repos

- https://github.com/web3labs/epirus-substrate

## Future Plans

With the baseline implementation of the Metadata Registry complete, there are many enhancements that can be built upon it. One such enhancement is to have different confidence indicators for verified contracts. Using the verification process outlined in the [Source Code Verification](#source-code-verification) section, we are only able to verify that the function of the code is the same as the uploaded source code. There is still the possibility for malicious actors to upload a "vandalised" source code with misleading function names and comments. We plan to circumvent this issue by allowing the user to sign the upload with his private key; source code uploaded and signed by the code owner will take prevalence over other uploaded sources. The contract code will also have the "signed by owner" badge, thus adding an additional layer of trust.

With the verified metadata available, we are able to recognise when a contract is implementing a well-known interface. This will allow Epirus Substrate Explorer, or any other application using the Metadata Registry, to display and group contracts based on the interface that they are implementing. It will be similar to how ERC-20, ERC-721 and ERC-1155 tokens are distinguished in EVM contracts. We plan to support [PSP-22](https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md) and [34](https://github.com/w3f/PSPs/blob/master/PSPs/psp-34.md) as standard contract-based token interfaces.

We also plan to support EVM-compatible contracts in Substrate chains. This phase involves adding capabilities to index and decode messages and events from the EVM pallet.

Lastly, we aim to improve scalability to handle large volumes of users and contracts. We will potentially switch from the current PostgreSQL to a distributed database such as CockroachDB. We also intend to add monitoring and scalable deployment infrastructure.

