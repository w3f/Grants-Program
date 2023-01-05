# W3F Grant Proposal

- **Project Name:** Substrate IPFS Utilities
- **Team Name:** [TDSoftware](https://www.tdsoftware.de/)
- **Payment Address:** 0x8Db0972d9F40357526B879A002d60CCf6B4a8882
- **Level:** 3


## Project Overview

IPFS is a web3 solution to store and provide big-sized and not structured data. The datas address is based on it's content (CID: Content Identifier), which guarantees that the content or file isn't changed or manipulated in any way. The same CID will always point to the same content spread in the IPFS network. Currently there is no satisfying way of an integration for IPFS on Substrate blockchains. An example use case are NFTs (Non-Fungible Tokens): An NFT for instance might be linked to an external artwork (image, audio file, video file, ...) that is stored within IPFS.

### Problem

Currently, the easiest way to record IPFS CIDs on a Substrate-based blockchains, is to call an extrinsic and pass the IPFS CID as an input parameter to store it on chain. So two separate steps are necessary:

1. Add (artwork) file to IPFS to retrieve CID
2. Store CID for NFT on chain

Because this are two separate actions to be performed by a client, we cannot consider this to be secure.
In the second step we cannot verify that the previously uploaded content in the IPFS network is the correct wanted one.

In addition, there is no redirect feature on Substrate blockchains to request a file from IPFS via Substrate RPC.

### Solution

Provide a pallet implementation that allows clients to add files to IPFS and store the related CID on chain with one RPC. For instance when minting an NFT with a given artwork file.

In addition to that, the Substrate blockchain can offer an RPC API to read the file from IPFS too. Therefore a redirect feature needs to be implemented based on the PRG mechanism.
As it takes a few moments until an added file is available on the IPFS network thru public gateways, the local IPFS node can used to retrieve the file.


### Project Details

#### Previous Work

The implementation from [offchain_ipfs](https://github.com/rs-ipfs/substrate/tree/offchain_ipfs) provides a working local IPFS node and utilities to interact with that node. This upcoming project will use the existing IPFS node implementation and will add adjustments and more functionality as shown below. The current implementation especially misses a proper handling of the CID and has no redirect feature to fetch files from IPFS with Substrate. It also uses a signed extrinsic method to fetch files from IPFS: that is not necessary, because the file is public available.

#### Upload Utilities

In the first part, detailed research on the existing implementation is needed. The following things will be implemented or adjusted:

- Accepting bytes as an input parameter of an extrinsic to end up in IPFS
- Adding `&[u8]` or `[u8]` to the local IPFS node thru an off-chain worker
- Wait for the added file to be available thru a public IPFS gateway like ipfs.io
- Store CID information on chain
- After file is available thru public IPFS gateway, remove it from the on-chain storage
- Handling the CID version 0 and CID version 1
- Benchmarking on the extrinsic call to know the maximum size of bytes accepted

<p align="center">
    <img src="https://tdsoftware-dev.de/w3f-grant-program/ipfs-util-add-file.png" width="800" />
</p>


#### Read/Access Utilities

In the second part, the redirect and fetch feature will be provided based on a PRG mechanism. This will allow users to fetch the linked files from IPFS by requesting the Substrate blockchain. The second part includes:

- Implement RPC API for file redirect to public IPFS gateway
- Based on Post/Redirect/Get ([PRG](https://en.wikipedia.org/wiki/Post/Redirect/Get)) pattern for gRPC
- API will return HTTP status code 303, so that the redirect will change the HTTP method from POST to GET
- API will return the actual file location. String value with URL.
- Will redirect to public IPFS gateway. E.g. ipfs.io
- This feature is not limited to IPFS and can be used with any file server
- Developers can define the redirect location as CIDv0 or CIDv1.

<p align="center">
    <img src="https://tdsoftware-dev.de/w3f-grant-program/ipfs-util-prg.png" width="500" />
</p>


### Ecosystem Fit

The implementation helps people using IPFS with Substrate, this is a common scenario.
Especially for NFT products this solution is helpful to avoid external middleware implemetations taking action. Having the whole logic for minting NFTs with related content inside Substrate makes it easier to maintain and more secure.


#### Technology Stack

Blockchain

- Substrate
- Rust
- IPFS


## Team :busts_in_silhouette:

### Team Members

- Sascha Dobschal
- Antonio Yang
- Lasse Linnamäki
- Markus Fitzner

The team setup might change depending on the availability at TDSoftware. With 40+ employees, TDSoftware has various developers that might contribute to the project. In all probability the members listed above will attend.

### Contact

- **Contact Name:** Sascha Dobschal
- **Contact Email:** s.dobschal@tdsoftware.de


### Legal Structure

- **Registered Address:** Schlossgasse 20, 07743 Jena, Germany
- **Registered Legal Entity:** TDSoftware GmbH


### Team's experience

We have years of experience bringing ideas to life with a user-centered focus using blockchain and mobile technology. We have worked closely with many customers to implement their solutions and have already gained experience with blockchain technologies.
Our most relevant projects are, among others:

- SubIdentity (W3F Grant), Identity Directory for Substrate Chains
- Exchange for trading digital assets (Customer is a Top 200 Token of CMC)
- Token Swap WebApp (Customer is a Top 200 Token of CMC)
- [Blockchain, NFT Pallets & App](https://artists.niftymarket.com/) (In Development)

We look forward to contributing to the web3 ecosystem with an open-source project next.


### Team Code Repos

Source code will be in:

- https://github.com/TDSoftware

Team profiles:

- https://github.com/dobschal
- https://github.com/yanganto
- https://github.com/markusdent
  

### Team LinkedIn Profiles

- https://www.linkedin.com/company/tdsoftware-gmbh/mycompany/
- https://www.linkedin.com/in/dobschal/



## Development Status :open_book:

A concept and solution draft was created as part of this application and can be found in the Project Details chapter.

As described above, we will reuse the existing IPFS node implementation developed by: [offchain::ipfs](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/offchain_ipfs.md).
This solution is not handling the CID in a proper way. E.g. instead of returning the CID, it's just logging it out. It also provides the reading of the file thru an extrinsic. As the file is public on IPFS, that is not necessary.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 Months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 66,000 DAI

### Milestone 1 - Research and implementation of file upload feature

- **Estimated duration:** 1 Month
- **FTE:** 2
- **Costs:** 33,000 DAI

After the first research, the pallet implementation will be developed. The goal of milestone 1, is a fully working round trip (except the redirect feature). A web3 client, reading a file, calling an extrinsic and uploading the content of a file, will be developed. The CID information from IPFS will be stored in the pallet.  Please see the chapter above ("Project Details > Upload utilities") for details.

 Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can re-use the implementation. |
| 0c.    | Testing |    Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 0d. | Code | We will provide the whole code in a public GitHub repository. |
| 1. | Implementation of the IPFS upload extrinsic | The pallet implementation will be added, that takes bytes of a file as input parameters. Adjust the extrinsic method `ipfs_add_bytes` to trigger an event `IpfsAdd(CID)`.  |
| 2. | Implementation to retrieve CID and store it on chain | The off-chain worker needs to be extended. Data (bytes) received will be added to the local IPFS node via the IPFS offchain worker. Once added, it stores the CID on chain.  |
| 3. | Implementation of a web3 client | For testing and the use case of a tutorial, a web3 client with dedicated UI will be implemented. The client app can read the data from a file, call the implemented extrinsic and uploads the content in bytes to the Substrate node. |
| 4. | Benchmark and adjustments | To check the maximum accepted file size, a benchmarking is performed. The result should give some concrete limits that will be added to the implemetation. |

### Milestone 2 -  Implementation of the redirect/fetch file feature

- **Estimated Duration:** 1 Month
- **FTE:** 2
- **Costs:** 33,000 DAI

The goal of the second milestone is to implement the redirect/fetch utilities. A RPC request, based on a PRG mechanism, can be used to redirect to any file server, which is not limited to IPFS. If the file is not available thru a public IPFS gateway, the local node can be used to retrieve the file.

 Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can re-use the implementation. |
| 0c.    | Testing |    Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 0d. | Code | We will provide the whole code in a public GitHub repository. |
| 0e. | Article | We will write and publish a Medium article to spread the word and give developers an introduction to the project and how to use it. |
| 1. | Fetch File Implementation | Implement the logic that allows clients to fetch a file from IPFS with the Substrate node. E.g. `#[prg(name = "nft_getFileById")]` will be designed and developed that allows users to redirect a request, which returns `Result<String>`, to a file server. The PRG mechanism is used to provide a RPC API that can redirect to a file server. The existing IPFS "get file" extrinsic will be obsolet as we provide this new RPC API. |
| 2. | Web3 Client Extension | The web3 client will be extend to show the (PRG) redirect feature and retrieve corresponding files via a public IPFS gateway. |
| 3. | Local Node Fetch Implementation | Implement a file fetch RPC API, that returns the file from the local embedded IPFS node instead of the public IPFS gateway. This is helpful when waiting for the file to be available on the public IPFS gateway. |



## Additional Information :heavy_plus_sign:

This is our second application for an open-source project to innovate the web3 Ecosystem.
