# Open Grant Proposal

* **Project:** mod
* **Proposer:** entropycode
* **Payment Address:** 14NfiR8FaS3jCdbTpLfoTgPpn9TckAsnYz

## Project Description :page_facing_up: 

Mod is a command line interface (CLI) tool that can be used for creating and signing extrinsics. CLI tools are useful for non-graphical use-cases such as network operations, continuous integration and automation. Mod is implemented in the Rust programming language.

Note: This project begins with an extrinsic creation and a signing tool that is already implemented in JavaScript.

## Team :busts_in_silhouette:

* **Members:** Belsy Yuen, Alex Leverington
* **LinkedIn Profiles:** https://www.linkedin.com/in/belsy https://www.linkedin.com/in/alexleverington
* **Code Repos:** https://github.com/entropycode
* **Website:**	https://entropylabs.com.hk
* **Legal Structure:** Entropy Labs Limited (HK)
* **Team's Experience:** Team has previously developed applications and tools for Substrate and Ethereum.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):**  2.0
* **Total Costs:** $30k

### Milestone 1

* **Estimated Duration:** 3-6 weeks
* **FTE:**  2
* **Costs:** 1.75 BTC (15000 US)

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | create-extrinsic | rust implementation of create-extrinsic.js |
| 2. | mod | list: output list of modules/methods |
| 3. | tutorial | interacting with substrate |
| 4. | docker | Docker image |

In this milestone we implement the create-extrinsic tool in rust. The create-extrinsic tool can be used together with a compatible signing tool in order to create a signed transaction extrinsic. The mod CLI is initially implemented to be able to connect to a node and list its modules and methods. A tutorial is provided that covers interacting with an example substrate module via the CLI tools.

```
# example commands
mod list # Connect to node via RPC and list supported modules/methods
create-extrinsic ./ext.json | ./some-signing-tool 0x...
```

### Milestone 2

* **Estimated Duration:** 3-6 weeks
* **FTE:**  2
* **Costs:** 1.75 BTC (15000 US)

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | sign-transaction-extrinsic | rust impl of create-signed-transaction.js |
| 2. | mod | extrinsic create |
| 3. | mod | extrinsic sign |
| 4. | mod | update rustdocs, create and tutorial |
| 5. | docker | Docker image |

In this milestone the create-signed-transaction.js tool will be implemented in rust. Following this, the mod tool will be updated to include the functionality of the other two tools.

Notably, create-extrinsic and create-signed are implemented separately, as we presume that not all extrinsics require a signature. If appropriate, the functionality of these two tools can therefore be implemented in their own crates. This way the mod tool can then implemented with the two crates as a base.

```
# draft; example command line interface
mod extrinsic create poll ... > ./extrinsic
mod extrinsic sign ./key ./extrinsic
mod list
```
 
## Additional Information :heavy_plus_sign: 

Previous code https://github.com/entropycode/w3f-m1-cli, https://github.com/entropycode/w3f-m1-runtime.
