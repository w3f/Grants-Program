# W3F Open Grant Proposal

> 🌏 This page is also available in [Chinese (中文)](./application-template-cn.md).
> 
> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
> 
> See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:**  Valois Protocol
* **Team Name:** Valar
* **Payment Address:** BTC or Ethereum (DAI) payment address. We don't accept payments for the program in other currencies at this stage. (e.g. 123mp123...)


> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
A network that aims to bridge other platforms (POLKADOT, TRON, ETHEREUM, BSC) in the safest general solution. 
This application is not in response to an RFP.

### Overview
Please provide the following:
Valois protocol aims to bridge the multicomplex platforms the likes of polkadot, ethereum, bsc, tron via cross-chain assets transfer and general remote chain call as well as providing privacy for polkadot ecosystem. It will also achieve the functionality of a private UI dapp (wallet) which will contain a swap functionality of tokens traded on all platforms. 
Valois protocol is built on substrate, with devlopement on progress. The valar team is extremely excited to use valois to mitigate nodes accross the entire world, implementing staking, in its wallet but also improving the ever growing blockchain, specifically polkadots ecosystem. OUR vision is to unite all platforms rather than competing with them. This will strengthen the vision of decentralisation as well as Valois.

### Project Details 
We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):
* Mockups/designs of any UI components
* Data models / API specifications of the core functionality
* An overview of the technology stack to be used
* Documentation of core components, protocols, architecture, etc. to be deployed
* PoC/MVP or other relevant prior work or research on the topic
* What your project is _not_ or will _not_ provide or implement
  * This is a place for you to manage expectations and to clarify any limitations that might not be obvious

### Ecosystem Fit 
Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:
* Where and how does your project fit into the ecosystem? Defi is still in its early stages, and cross chain between platforms is a necessity. We aim to be the leading protocol in providing a private and secure wallet that will adapt to bridge all platforms while also providing a liquidity and a staking platform via our wallet ( Valoiswallet - valswap) rewarding users. This will be the first of its kind on the polkadot ecosystem. 

## Team :busts_in_silhouette:

### Team members
* Alek Basderik lead 
* Sai Zheng - Blockchain Specialist
* Rykul Massingh - full stack developer

### Contact
* **Contact Name:** Alek Basderik
* **Contact Email:** valoisprotocol@gmail.com
* **Website:** in progress.

### Team's experience
Alek Basderik
Alek is an active marketer and promoter in the blockchain and everygrowing crypto industry  for over 5 years, and has been heavily involved with multimillion dollar defi companies including previously in early years being a Binance angel. 
Sai Zheng
Sai is adept at go, c++, soliditiy, javascript/java and rust. Sai has improved over the course of 5 yeats helping lead solid and large projects as well as educate the language to learning devs graduating from the university of technology in sydney. 
Rykul Massingh
Rykul is a full-stack developer with over 5 years experience in software development and technology management. He has plenty of experience in Software Architecture and currently focuses on blockchain development and cross-chain technologies.

### Team Code Repos
https://github.com/Valoisprotocol

## Development Roadmap :nut_and_bolt: 

This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that the scope of the work can fit within a three-month period and that teams structure their roadmap as 1 milestone ≈ 1 month. 

For each milestone,

* make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
To assist you in defining it, we have created a document with examples for some grant categories [here](../src/grant_guidelines_per_category.md).
* include the amount of funding requested _per milestone_.
* include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
* provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
* commit to providing Dockerfiles for the delivery of your project. 
* indicate milestone duration as well as number of full-time employees working on each milestone, and include the approximate number of days along with the cost per day.
* _Deliverables 0a-0d are mandatory_ and shall not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview
* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):** 2 fte
* **Total Costs:** 12,000 USD

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We will publish an article/tutorial/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)
| 1. | Substrate module: Valois | We will create a Substrate module that will cross chain bridging polkadot with BSC, ETH, and TRX, The bridge wil map ERC-20, Bep-20 and TRC-20 to polkadots ecosystem and provide a platform to liquidity swap via the valois wallet.   
| 2. | Substrate module: Stake | We will create a Substrate module that will allow staking on the UI created as well as integrate it on other platforms (wallet-application)  |  
| 3. | Substrate module: Valswap | We will create a Substrate module that will implement and allow users to directly swap tokens on ou application to be one of its firts on the polkadot ecosystem. | 4
| 4. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |




## Future Plans

In the first stage  our primary focus is to implement the valois module so that we have a fully functional cross chain amongst Ecosystems (DOT, ETH, TRX, BEP)
In the second stage we intend to have the UI fully functional both on the net and via android, ios and fully integrational for staking, and holding tokens 
lastly, our main  fully priority and goal is to lauch a private, efficient and smooth UI wallet that integrates cross funcitionlaity between Polkadot and other platforms. The UI will integrate a Valswap in its wallet allowing instant swaps at extremely low costs, fully operating on the polkadot ecosystem.

## Additional Information :heavy_plus_sign: 

we apologise on our previous pull request. it was not written correctly as it was not supposed to be in line with raze network at all. our method is totally different from theres. we are implementing two different methods and protocols.
