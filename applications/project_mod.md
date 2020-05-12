# Open Grant Proposal

* **Project:** mod
* **Proposer:** entropycode
* **Payment Address:** 14NfiR8FaS3jCdbTpLfoTgPpn9TckAsnYz

## Project Description :page_facing_up: 

Substrate Module: Feedback  
Rust and JS CLI Tools: create-extrinsic(.js), sign-transaction-extrinsic(.js), mod

Mod is a rust tool for developing applications that utilize substrate. Existing tools target browser and RPC environments whereas Mod is to accompany the development of native applications and automation. Mod includes a command-line interface, documentation and an example application. The example application is a substrate module for software communities to suggest and vote for software features to be included in any project.

The Feedback module and CLI tool provided by this project will be useful for developers and network operators. At the conclusion of this project a developer will be able to compile and use the mod CLI, build their own feedback node, and use the CLI to create, sign and submit transactions.

 By supplying code in both JS and Rust, as well as JS with rust bindings, developers exploring the code and tutorial will have many examples for developing their own tools.

Note: Previous code https://github.com/entropycode/w3f-m1-cli, https://github.com/entropycode/w3f-m1-runtime.

## Team :busts_in_silhouette:

* **Members:** Belsy Yuen, Alex Leverington
* **LinkedIn Profiles:** https://www.linkedin.com/in/belsy https://www.linkedin.com/in/alexleverington
* **Code Repos:** https://github.com/entropycode
* **Website:**	https://entropylabs.com.hk
* **Legal Structure:** Entropy Labs Limited (HK)
* **Team's Experience:** Team has previously developed software and tools for Substrate and Ethereum.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):**  2.0
* **Total Costs:** $30k

### Milestone 1

* **Estimated Duration:** 3 weeks
* **FTE:**  2
* **Costs:** 1.75 BTC (15000 US)

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | sign-transaction-extrinsic.js | update to use Rust bindings |
| 2. | create-extrinsic.js | bug fixes and updates |
| 3. | create-extrinsic | Rust version of create-extrinsic.js |
| 4. | create-qr.js | generate QR code and hex from CLI for extrinsic |
| 5. | feedback module | rustdocs, make available as pallet |
| 6. | feedback module | brief tutorial: how to interact with node via CLI |
| 7. | feedback module | brief tutorial: how to interact with node via polkadot.js |
| 8. | docker | Docker image |

The CLI tools can be used for generating and signing extrinsics and submitting transactions – this is done by reading extrinsic data from a json file.

In this milestone we update sign-transaction-extrinsic.js tool to use native rust code via bindings, implement the create-extrinsic tool in rust, and introduce a new CLI tool which generates a QR code and hex for the extrinsic.

The rust native bindings in this milestone are intended for projects that have prior code in javascript. Such projets will be able to keep using their javascript code, while making use of rust for operations like signing, or perhaps later, direct execution of a runtime.

The developer will be able create/sign/submit a transaction from command line, while watching the status of the chain from polkadot.js. A tutorial is provided that covers interacting with the Feedback substrate module via the CLI tools and via polkadot.js.

### Milestone 2

* **Estimated Duration:** 3 weeks
* **FTE:**  2
* **Costs:** 1.75 BTC (15000 US)

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | sign-transaction-extrinsic | Rust version of create-signed-transaction.js |
| 2. | mod | combined functionality of other tools |
| 3. | mod | metadata functionality |
| 4. | mod | crate and rustdocs |
| 5. | feedback module | update tutorial and docs |
| 6. | docker | Docker image |

The mod tool will be implemented, in rust, with the functionality of the other two tools. However, rather than reading extrinsic data from a file, the mod tool will allow developers to connect to the node to check the call against the latest node metadata. The tool will also be able to fetch (rpc) or load (file) metadata and list details of modules and methods.

In this milestone we will transition the CLI tools to be based on rust.

```
# draft; example command line interface
mod extrinsic create poll ... > ./extrinsic
mod extrinsic sign ./key ./extrinsic
mod extrinsic create poll ... | mod extrinsic sign ./key
mod metadata list ./metadata
```
 
## Additional Information :heavy_plus_sign: 

The initial version of this project is a substrate module and CLI tool.
