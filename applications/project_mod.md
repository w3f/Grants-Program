# Open Grant Proposal

* **Project:** mod
* **Proposer:** entropycode
* **Payment Address:** 14NfiR8FaS3jCdbTpLfoTgPpn9TckAsnYz

## Project Description :page_facing_up: 

Substrate Module: Feedback  
Rust and JS CLI Tools: create-extrinsic(.js), sign-transaction-extrinsic(.js), mod

Mod is a rust tool for developing applications that utilize substrate. Existing tools target browser and RPC environments whereas Mod is to accompany the development of native applications and automation. Mod includes a command-line interface, documentation and an example application. The example application is a substrate module that enable software communities to suggest and vote for software features to be included in any project.

Whereas we feel that the Feedback module and CLI tool provided by this project will be very useful, the principle objective of this project is educational. By supplying code in both JS and Rust, as well as JS with rust bindings, developers exploring the code and tutorial will have many examples for developing their own tools.

At the conclusion of this project a developer will be able to compile and use the mod CLI, build their own feedback node, and use the CLI to create, sign and submit transactions.

Note: Previous code can be found [here] and [here].

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
| 1. | feedback module | tutorial: how to interact with node via CLI |
| 2. | feedback module | tutorial: how to interact with node via polkadot.js |
| 3. | feedback module | rustdocs, make available as pallet |
| 4. | sign-transaction-extrinsic.js | update to use Rust bindings |
| 5. | create-extrinsic.js | bug fixes and updates |
| 6. | create-extrinsic | Rust version of create-extrinsic.js |
| 7. | create-qr.js | generate QR code and hex from CLI for extrinsic |
| 8. | docs | update documentation |
| 9. | docker | Docker image |

The CLI tools can be used for generating and signing extrinsics and submitting transactions. In this milestone we update sign-transaction-extrinsic.js tool to use native rust code via bindings, implement the create-extrinsic tool in rust, and introduce a new CLI tool which generates a QR code and hex for the extrinsic.

Note: The rust native bindings in this milestone are important because projects may have prior code in javascript. Such projets will be able to keep using their javascript code, while making use of rust for operations like signing, or perhaps later, direct execution of their runtime.

A tutorial is provided that covers interacting with the Feedback substrate module via the CLI tools and via polkadot.js.

The developer will be able create/sign/submit a transaction from command line, while watching the status of the chain from polkadot.js.

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

In this milestone we will transition the CLI tools to be based on rust (no JS). The mod tool will be created with the functionality of the other two tools. However, instead of read extrinsic extras from an input file, the mod tool will connect to the node to check the module and method against the latest node metadata.

```
# draft; command line examples
mod extrinsic create poll ... > ./extrinsic
mod extrinsic sign ./key ./extrinsic
mod extrinsic create poll ... | mod extrinsic sign ./key
```
 
## Additional Information :heavy_plus_sign: 

The initial version of this project is a substrate module and CLI tool. The CLI tool is JS-based and used for creating and signing extrinsics.
