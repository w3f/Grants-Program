# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** substrate-bip32
* **Team Name:** RioDeFi
* **Payment Address:** BTC or Ethereum (DAI) payment address. We don't accept payments for the program in other currencies at this stage. (e.g. 123mp123...)

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
If this application in response to an RFP then please indicate this on the first line of this section.

### Overview

The purpose of this project is trying to implement HD Wallet with rust for substrate. The wallet should support multiple secp256k1 based crypto currencies and particularly Ed25519 or SR25519. This wallet will allow anyone to generate Polkadot address in a format official hd wallet path like P//hard//soft (where P is mnemonic)

A standard setup for a wallet user is to provide a single seed(mnemonic) and uses the functions provide by this project to derive a tree of key pairs.

The master private/public pair is derived by gen_master_keys_from_seed and a parent level private_key can be used to derive next level public/private keys while parent public_key can only be used to derive next level public keys.

Wallet users can generate public/private keys by specifying a wallet path like P//hard//soft and each account of the wallet is bind to menemonic P. To ease the integration effort between wallet and other substrate applications, we will implemented it in rust with no-std config so that it can potentially run in a wasm environment (browser for example).

### Project Details 
We expect the teams to already have a solid idea about the project's expected final state.

Therefore, we ask the teams to submit (where relevant):
* Mockups/designs of any UI components
* API specifications of the core functionality
* An overview of the technology stack to be used
* Documentation of core components, protocols, architecture etc. to be deployed
* PoC/MVP or other relevant prior work or research on the topic

### Ecosystem Fit 
No similar work

## Team :busts_in_silhouette:

### Team members
* Sen Ni
* David Ding, Binker Cao, Yan Shen, Arik Zhou, Errance Liu	

### Contact
* **Contact Name:** Sen Ni
* **Contact Email:** phyrex@riodefi.com

### Legal Structure 
* **Registered Address:** Unit Level 9F(2), Main Office Tower, Financial Park Labuan, Jalan Merdeka, 87000 Federal Territory of Labuan, Malaysia
* **Registered Legal Entity:** RIODEFI INC.

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

### Team Code Repos
* https://github.com/<your_repo_1>
* https://github.com/<your_repo_2>

### Team LinkedIn Profiles
* https://www.linkedin.com/in/%E6%A3%AE-%E5%80%AA-626b8275/

## Development Roadmap :nut_and_bolt: 

This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions it should be clear how the project is related to Substrate and/or Polkadot. We recommend that the scope of the work can fit within a 3 month period and that teams structure their roadmap as 1 month = 1 milestone. 

For each milestone:
* Please be sure to include a specification of your software. Treat it as a contract - the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* Please include total amount of funding requested per milestone.
* Please note that we require documentation (e.g. tutorials, API specifications, architecture details) in each milestone. This ensures that the code can be widely used by the community.
* Please provide a test suite, comprising unit and integration tests, along with a guide on how to run these.
* Please commit to providing a dockerfiles for the delivery of your project. 
* Please indicate the milestone duration, as well as number of Full-Time Employees working on each milestone, and include the number of days along with their cost per day.
* Deliverables 0a-0d are mandatory and should not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research oriented and as such there is no code to test)
* 
# Road map of a BIP32 like substrate wallet.

1. Develop a standard BIP32 key generator from scrach.
   The newly implemented BIP32 library should be written in rust and can compile with no_std library. The reason of doing this is that we would like to compile int into wasm code so that it can also run as a web application. We start the library using secp256k1 so that we can test is using exsiting bip32 test suite.

2. Test it in a web environment.
   Once wasm-pack was installed via the following,
   `curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`

   We should be able to test the code using the following script:
   `wasm-pack test --chrome`

3. Replace the secp256k1 with sr25519. This requires us to integrate substrate's sr25519 package with this BIP32 style wallet. From this point, this package will no longer generate Bitcoin keys but substrate keys. (This mile-stone has not been achieved yet). After this stage we can deliver the cli command.

4. Providing an web user interface so that any substrate-ui can integrate our wallet in their web interface.



### Overview
* **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
* **Full-time equivalent (FTE):**  Workload of an employed person ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) (e.g. 2 FTE)
* **Total Costs:** Amount of Payment in USD for the whole project. The total amount of funding needs to be below $30k for initial grants and $100k for follow-up grants at the time of submission. (e.g. 1.000 USD)

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 1.000 USD

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide full inline documentation of the code. |
| 0c. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. All test vectors from bip32 specification will be implemented. In the guide we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Rust library: bip32 | We will create a Rust library implementing bip32 specification |  

### Milestone 2 Example — Additional features
...

## Future Plans
Please include the team's long-term plans and intentions.

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
* Are there are any teams who have already contributed (financially) to the project?
* Have you applied for other grants so far?
