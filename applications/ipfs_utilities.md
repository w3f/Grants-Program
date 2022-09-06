# W3F Grant Proposal

- **Project Name:** Substrate IPFS Utilities
- **Team Name:** [TDSoftware](https://www.tdsoftware.de/)
- **Payment Address:** 0x8Db0972d9F40357526B879A002d60CCf6B4a8882
- **Level:** 3



## Project Overview

This application is about the utilities of Substrate within IPFS.


### Overview

IPFS is a web3 solution to store and provide big-sized and not structured data. The datas address (index) is based on it's content, which guarantees that the content or file isn't changed or manipulated in any way. Currently there is no satisfying way of an integration for IPFS on Substrate blockchains.

Currently, the easiest way to record IPFS CIDs on a Substrate-based blockchain, is to call an extrinsic and pass the IPFS CID as an input parameter to store it on chain. The CID is often related to some non-fungible token (NFT), and becomes a metadata of the token.
In NFT scenario, it would need much more affairs to the validation process on the chain side, if the developer wants to make sure and trust the input CID will point to the corresponding file on the chain.  Besides that, the CID is listed via gRPC as a string field, it can not be a presented event if the browser already supports IPFS.

This project will follow a different approach. The upload and linking of a file to an NFT e.g. can be done by clients thru one extrinsic. On upload of a file with the IPFS pallet, the pallet will return the ticket id immediately. Once the file is uploaded to IPFS, the CID of the file on IPFS will be stored on chain. The ticket id and CID both can be used to fetch the file via RPC call. While the upload to IPFS is processing, a cache logic can already provide the file based on the ticket id. Once the CID is retrieved and the file is available on IPFS, the cache can be cleared and all fetch requests are redirected to IPFS.


### Project Details

#### Example: NFT with IPFS hosted file

This is a draft on how to integrate the IPFS util with an NFT. The upload process is async as it takes some time. During upload a ticket id links to the processed file. Once uploaded the CID is used.

![](https://tdsoftware-dev.de/w3f-grant-program/ipfs-util-components.png)

#### Upload utilities
In the first part, detailed research is needed to upload data to IPFS, including:
- Accepting bytes as an input parameter of extrinsic
- Uploading `&[u8]` or `[u8]` to IPFS thru an off-chain worker
- Storing CID information on chain
- Handling the CID version 0 and CID version 1
- Benchmarking on the extrinsic call to know the maximum size of bytes can work 


#### Read/access utilities
In the second part, the redirect and fetch feature will be provided based on the gRPC mechanism. This will allow users to fetch the linked files from IPGS. The details are listed:
- Accept a function with `Result<String>` as return value, and take the content of String as the location to redirect
- Developer can define the redirect location as CIDv0 or CIDv1.
- Base on Post/Redirect/Get ([PRG](https://en.wikipedia.org/wiki/Post/Redirect/Get)) pattern
- The return code is HTTP 303 See Other
- E.g. a user can `#[prg(name = "nft_getFileById")]`


### Ecosystem Fit

The implementation helps people using IPFS with substrate, this is a common scenario.
People fork substrate and try to solve this in [offchain_ipfs](https://github.com/rs-ipfs/substrate/tree/offchain_ipfs),
but it is based on a two years old substrate version, and not actively updated.


#### Technology Stack 

Blockchain
- Substrate
- Rust
- IPFS


## Team :busts_in_silhouette:

### Team members

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

We will reuse as much as possible the existing developed approach from: [offchain::ipfs](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/offchain_ipfs.md).
This solution is not handling the CID in a proper way. E.g. instead of returning the CID, it's just logging it out. It also provides the reading of the file thru an extrinsic. As the file is public on IPFS, that is not necessary.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 Months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 89,440 DAI

### Milestone 1 - Research and final implementation of file upload feature

- **Estimated duration:** 1 Month
- **FTE:** 2
- **Costs:** 44,720 DAI

After the first research, the pallet implementation will be developed. The goal of milestone 1, is a fully working round trip (except the redirect feature). A web3 client, reading a file, calling an extrinsic and uploading the content of a file, will be developed. The CID information from IPFS will be stored in the pallet, then the uploaded file is verified by other IPFS tools.

 Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can re-use the implementation. |
| 0c.    | Testing |    Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 1. | Implement IPFS upload extrinsic | The pallet implementation will be added, that allows to upload bytes of files to IPFS. The data will be cached to provide it during processing. This will return a ticket id for the file. Once uploaded the CID is available too. |
| 2. | Implement client | The web3 client app can read data from file, call extrinsic and upload the content in bytes. |
| 3. | Verification | Verify the file uploaded and store the CID on chain. |

### Milestone 2 -  PoC implementation on redirect part

- **Estimated Duration:** 1 Month
- **FTE:** 2
- **Costs:** 44,720

The goal of the second milestone is to redirect utilities of Substrate. A gRPC request can be based on a PRG mechanism to redirect to any file server, which is not limited by IPFS. A cache will be added to allow fetching the file, when the upload to IPFS is still in progress.

 Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a developer can re-use the implementation. |
| 0c.    | Testing |    Core functions will be covered by unit tests as far as reasonably applicable to ensure functionality and robustness. In the documentation, we will describe how to run these tests. |
| 0d. | Code | We will provide the whole code in a public GitHub repository. |
| 0e. | Article | We will write and publish a Medium article to spread the word and give developers an introduction to the project and how to use it. |
| 1. | Implement Fetch File | E.g. `#[prg(name = "nft_getFileById")]` will be designed and developed that allows users to redirect a request, which returns `Result<String>`, to a file server. |
| 2. | Implement Cache | Implement a file cache, that returns the file if upload to IPFS is still in progress. |



## Additional Information :heavy_plus_sign:

This is our second application for an open-source project to innovate the web3 Ecosystem.
