# Open Grant Proposal

* **Project:** mod
* **Proposer:** entropycode
* **Payment Address:** 14NfiR8FaS3jCdbTpLfoTgPpn9TckAsnYz

## Project Description :page_facing_up: 

Substrate Module: Feedback
CLI Tools: create-extrinsic(.js), sign-transaction-extrinsic(.js), mod

Mod is a tool for developing applications that utilize substrate. Existing tools target browser and RPC environments whereas Mod is to accompany the development of native user-facing applications. Mod includes a command-line interface, documentation and an example application. The example application is a substrate module that enable software communities to suggest and vote for software features to be included in any project.

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
| 0. | feedback module | tutorial: how to interact with node via CLI |
| 0. | feedback module | tutorial: how to interact with node via polkadot.js |
| 0. | feedback module | pallet creation and rustdocs |
| 0. | create-signed-transaction.js | update to use Rust bindings |
| 0. | create-qr.js | generate QR code and hex from CLI for extrinsic |
| 0. | JS CLI tool | update docs for CLI tool |
| 0. | docker | Docker image |

The CLI tools can be used for generating and signing extrinsics and submitting transactions. In this milestone we will update create-signed-transaction.js tool to use native rust code via bindings; this begins the transition of the tools to rust. A new CLI tool is introduced which generates a QR code and hex for the extrinsic.

We also provide a tutorial that covers interacting with the Feedback substrate module via the CLI tools and via polkadot.js.

### Milestone 2

* **Estimated Duration:** 3 weeks
* **FTE:**  2
* **Costs:** 1.75 BTC (15000 US)

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0. | Rust CLI Tools | create-extrinsic, sign-transaction-extrinsic |
| 0. | mod | functionality of other tools |
| 0. | mod | metadata functionality |
| 0. | mod | crate and rustdocs |
| 0. | feedback module | update tutorial and docs |
| 0. | docker | Docker image |

In this milestone we will transition the CLI tools to be based on rust (no JS). The mod tool will be created with the functionality of the other two tools. Additionally, the mod tool will allow developers to download or read module metadata.


```
# draft: mod: command line examples
mod metadata list
mod extrinsic create
mod extrinsic sign
```

 
## Additional Information :heavy_plus_sign: 

The initial version of this project is a substrate module and CLI tool. The CLI tool is JS-based and used for creating and signing extrinsics.
