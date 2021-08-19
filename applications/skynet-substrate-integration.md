# W3F Open Grant Proposal


* **Project Name:** Pallet for Decentralized Off-Chain Storage on Skynet
* **Team Name:** Skynet Labs
* **Payment Address:** BTC `39aFV1bfcxgjbYrWjgMs3A2fjM7bkKouhg`


## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Our intention is to build the initial parts needed for an integration with Skynet, allowing Substrate developers to make use of decentralized off-chain storage from any project using FRAME.

Skynet is a decentralized storage and web application platform built to use the Sia blockchain network for storage, but in a way that's accessible via the web and available to anyone, without concerning themselves with cryptocurrencies or special software. Skynet provides hosting of robust web-app frontends and storage of application data in a way where users retain control over their data and application data is interoperable between applications.

Off-chain storage is an important problem to solve for blockchain applications, and Skynet meets storage needs well on several fronts by providing:
- a decentralized architecture matching the ethos of blockchains themselves
- strong, cryptographic guarantees on immutable data
- mutable data using private keys for write access
- portals used to access data, allowing for either managed access or running your own software. (With managed access, users and developers don't have to integrate another cryptocurrency running on a separate chain into their architecture.)
- equal access to Skynet no matter what portal is used or how it is accessed

Our team wants to take on this project to expand the possibilities of what can be done with web3 applications and decentralized storage.

At this point, we have a JS SDK to easily expose Skynet in the browser to users, who can upload files and then store the unique URI (skylink) on-chain. Later, those can be retrieved and easily downloaded in the browser. We'd love to see developers building applications where blockchains themselves can interact more deeply with Skynet, writing data to Skynet, either for later access or for consumption by other web applications.

### Project Details


In its final form, the Skynet Pallet would allow projects built with Substrate FRAME to access any Skynet Portal on the network using off-chain workers in order to do the following on Skynet:

- Upload a file or directory and return the skylink for use by the runtime
- Download a skyfile to storage or for use by runtime
- Registry Read: read from Skynet's mutable data layer using public keys
- Registry Write: write to mutable storage, authenticated by signing using a private key
- Support any Skynet portal and portal account
- Support v2 Skylink compatability
- Interact with mutable SkyDB and MySky files
- Data Verification for all interactions with a portal, using storage proofs from the Sia network.
- Subscribing to registry entry changes (pending future Substrate development of long-running off-chain worker processes).

Communication with portals happens by utilizing portal HTTP APIs along with additional processing and cryptography on the client-side. Although Skynet interaction can appear to be merely REST-styled API requests, certain cryptographic tools are needed to 1) created well-formed requests and 2) verify the cryptographic proofs and signatures returned alongside HTTP responses. Without this additional tooling that requires "client-side" processing, most of Skynet's power is cutoff from the application.

In addition to this, decentralization is at the core of Skynet's ethos, so the Pallet must account for additional complexities over interacting with portal APIs that might not exist for a traditional API endpoint, including supporting portal accounts (similar to authorization), dealing with not-shared-in-common portals (where nodes could supply their own portal URL and API key), and porting our Skynet utility libraries to Rust to ensure full inoperability with browser javascript applications and creating and signing items like registry entries to enable SkyDB and Skylink v2 (allowing content updating for a constant URL which can point to immutable skyfiles). For greater clarity and flexibility, we will separate the pallet codebase from the library of helper utils.

---

_To be more specific on the functionality needing to be built out in Milestone 1:_

> Note: This work is implementing interaction with a pre-existing protocol, so much of the work will be porting code from our Javascript SDK to Rust in a way that feels ergonomic for Substrate developers.

#### Authentication & Portal Preference for HTTP Requests
- All below actions requiring interaction with a Skynet portal should be assumed to be interacting only with the preferred portal and using an authentication mechanism. (Currently we support only encrypted JWTs, but may extend to API keys too.)
- For example, repinning Skylinks requires a simple HTTP request with optional authentication.

#### Immutable Skyfiles
- Skyfile downloads are just HTTP GET requests.
- Skyfile uploads come in 2 varieties:
    - Small Files: Simple HTTP POST requests that return a skylink from the portal
    - Large Files: Orchestrated HTTP requests implementing the `tus` protocol for increasing reliability by retrying failed chunks.

#### Mutable Registry Entries

- Registry entries have a specific structure including a public key, data key (which together identify it for lookup), a revision number, data (limited to 70 bytes), and a signature signing the aforementioned using the public key's corresponding secret key.
- Reading registry entries involves making an HTTP GET request, then verifying the signature against the data (Key pairs and signatures all using `ed25519`).
- Writing registry entries involves creating a registry entry (getting the revision number can be done by first reading, or trusting you know the correct revision), and then signing the entry before making a POST request to the portal.
- Registry entries have a complicated concurrency model, so attention will need to be given to revision number usage and tracking.
- Registry entries are the core mutable primative for the rest of Skynet, including MySky, SkyDB, and Skylinks v2. The 70 bytes can be used to create custom data structures and is enough space to hold 2 Skylinks.

#### Skylinks v2

- For creating a Skylink v2, this is a coordination of getting or creating a Skylink to point at, converting the link from Base64 to a byte array, and writing this to a registry entry. This data field then acts like a pointer in the Skylink v2.
- Then a hash of the public key and data key is taken and encoded into a skylink format (combining with a version number) before encoding to Base64 to generate the v2 Skylink.
- Reading a Skylink v2 involves a GET request, which returns the data from the pointed to immutable Skylink (if the Skylink v2 points to another Skylink v2, if acts recursively until immutable file is resolved). The portal also returns a "proof" containing the chain of registry entries (each a Skylink v2) that need their signatures verified.

---------

For this grant, we seek the support of the Web3 Foundation for doing an initial build-out of Skynet functionality. The Skynet Labs team (formerly Nebulous, creators of the Sia blockchain network) have extensive experience in blockchain development, but have much less experience in Rust and the Polkadot ecosystems. We would view this as an opportunity to build out support for many of the Skynet primitives and utility functions while working to find the most developer friendly way of exposing those to applications building with Substrate.

For more information on Skynet and our SDKs, see our [support guide](http://support.siasky.net/) and our [SDK documentation](http://siasky.net/docs/).

### Ecosystem Fit

The most similar project in the ecosystem that we are aware of is the `offchain:ipfs` fork of Substrate that implements an ipfs node in Rust along with an example pallet.

IPFS has many differences in performance, ease-of-use, availability and infrastructure as compared to Skynet. The most critical to this conversation is that Skynet Web Portal take care of much of the overhead that an IPFS node would, but without equal data verifiability guarentees. Because of this, we do not intend to need to make modifications to Substrate core for integration, instead working from the perspective of a pallet, allowing for easier maintenance and community up-take in the long term.

Some use cases where we believe Skynet will be useful for Substrate devs:

- Chains where interaction focuses on client-side web apps
- Off-chain storage for NFTs
- On-chain referencing of user-generated-content
- Indirect communication for chain-external data (where another service can publish to skynet, to be consumed by the off-chain worker)
- Persistance of runtime data that isn't saved to storage
- Off-chain publishing of on-chain data

## Team :busts_in_silhouette:

### Team members

- **Leader**: David Vorick, _CEO | Skynet Labs_
- **Skynet Labs Team Members** including:
  - Chris Schinnerl
  - Peter-Jan Brone
  - Matthew Sevey
  - Daniel Helm
  - Marcin Swieczkowski
- **Skynet Labs Community Contributors**:
  - TBD
- **Polkadot Ecosystem Collaborators**:
  - TBD

### Contact

* **Contact Name:** Daniel Helm, _Developer Evangelist for Skynet Labs_
* **Contact Email:** daniel@siasky.net
* **Website:** https://siasky.net/

### Legal Structure

- **Registered Address:** 177 Huntington Ave Ste 1703, PMB 71942, Boston, Massachusetts 02115-3153 US
- **Registered Legal Entity:** Nebulous Inc.

### Team's experience

The Skynet Labs team (recently renamed from Nebulous) was responsible for the development and oversight of the Sia blockchain network and several projects in its ecosystem for many years. The team's most recent significant project is Skynet, a web-accessible decentalized storage protocol built to enable usage of Sia storage for users and developers without reliance on running any specialized software or obtaining any cryptocurrency. Skynet hosts over 200 community-created web apps, and has seen many signifigant partnerships and integrations.

### Team Code Repos

- https://gitlab.com/SkynetLabs/skyd
- https://github.com/SkynetLabs/skynet-webportal
- https://github.com/SkynetLabs/skynet-js

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/david-vorick-6758a66a/
- https://www.linkedin.com/in/peterjanbrone/
- https://www.linkedin.com/in/sevey/
- https://www.linkedin.com/in/dghelm/

## Development Status :open_book:

Preliminary research has been undertaken into the Polkadot ecosystem generally and substrate development specifically for the purposes of writing this proposal, along with coordinating with the Web3Foundation and Parity team member to make sure the the implementation plans and technical details were thorough and sensible. 

## Development Roadmap :nut_and_bolt:

### Overview
* **Total Estimated Duration:** 3 Months
* **Full-time equivalent (FTE):**  0.5 FTE ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
* **Total Costs:** $30,000

### Milestone 1 - Exploratory Skynet Immutable Off-Chain Storage Pallet (Immutable Data Functionality)
* **Estimated Duration:** 3 months
* **FTE:**  0.5 FTE
* **Costs:** $30,000


| Number | Deliverable                                       | Specification                                                                                                                                                                                                                                   |
| ------ | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                                           | MIT                                                                                                                                                                                                                                             |
| 0b.    | Documentation                                     | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use the pallet for basic off-chain functionality.                                                                                       |
| 0c.    | Testing Guide                                     | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests                                                                                                   |
| 0d.    | Sample Node & Frontend                            | We will document and provide a node and frontend for a trivial use case that integrates our pallet based off the Substrate Node Template and the Substrate Front End Template.                                                                  |
| 1.     | Skynet Off-Chain Worker Pallet (Skyfiles)         | We will create a pallet to interact with Skynet from an off-chain worker. For Milestone 1, this will include uploading and downloading immutable files from Skynet using content-addressable skylinks, tying these uploads to a portal account. |
| 2.     | Skynet Off-Chain Worker Pallet (Registry Entries) | Additional logic necessary to derive secret and public keys from a seed, construct registry entries, sign them and verify signatures. This is the core mutable primative needed for other mutable data.                                         |
| 3.     | Skynet Off-Chain Worker Pallet (Skylink V2)       | Building on registry entries, we will create the functionality to create and access v2 Skylinks. These are Skylinks that point to other Skylinks, which the portal resolves and returns the pointed to immutable skyfile.                       |
| 4.     | Skynet Off-Chain Worker Pallet (Repin)            | Expose the ability to request that a portal pin an already exisiting Skyfile by only passing the skylink.                                                                                                                                       |

### Future Milestone - Skynet Immutable Off-Chain Storage Pallet (Mutable Data Functionality)

> We intend to take the lessons learned from the first version of this pallet and extend Skynet functionality according to the needs of developers. What follows are some steps we would look to take outside of the scope of this grant.


| Number | Deliverable                                                   | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------ | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.     | Skynet Off-Chain Worker Pallet (SkyDB and MySky File support) | We will extend the pallet from milestone 1 to interact with the primatives built on Skynet's registry. This mutable storage layer acts as key-value database from which SkyDB and MySky files are constructed. This allows getting and setting arbitrary data and pointing to JSON files, encrypted files, and arbitrary skyfiles pointed to by consistent MySky file paths. These use public/private key combinations for access-control. This will also contain functionality for generating decryption and derivation keys that are interoperable with Skynet's MySky SDK. |
| 2.     | Skynet Off-Chain Worker Pallet (Verification)                 | We will extend the pallet from milestone 1 to allow for two important features: Verification of storage proofs for full end-to-end trustless infrastructure, and, pending Substrate's addition of long-running off-chain workers, subscribing to changes of SkyDB entries using Websockets. If this functionality is not yet in place for FRAME, we hope to work with core developers to prepare for implementing this functionality when the feature becomes available.                                                                                                      |

### Community engagement

Skynet has a very active developer community, and we'll be sure to create various content around the integration, including promotional write-ups and a highlight video as part of our SiaTV YouTube content. 

We engage general audiences and developer audiences with our outreach media, and we'd include content for each audience.

## Future Plans

Skynet Labs will continue to develop Skynet by furthering integrations with blockchain projects needing decentralized, off-chain storage and front-end hosting, while also supporting client-facing applications that fall outside of blockchain programming. Our goal is that the data for these use-cases becomes increasingly interoperable and empowers users to have control over their data. Our medium-term plans include a robust monetization ecosystem that builds on our client-side, fully decentralized identity solution MySky.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** - Parity & Web3 Foundation Representatives

No work outside preliminary research has been done on the pallet so far. Skynet Labs does have investors, but we have no other contributors or grants related to this specific project.
