# Polkadot Contract Wizard

- **Team Name:** Protofire
- **Payment Address:** 5FcEYNumroWcwyjeDtDVZALuCGmx94PjXnc9XzifHKTfU5Bf
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 

## Project Overview :page_facing_up:

This project is an application for a grant after getting [the first prize on Polkadot Hackathon LATAM](https://polkadothackathonlatam.com/proyecto-inner/LactobaciloGG). 

We firmly believe that web3 has to be easy to use, this project is based on that premise and from the mock-up developed in the hackathon, we are going to take the next steps to make this experience frictionless.

### Overview

The Polkadot Contract Wizard aims to be the project that provides the entry point for the next generation of web3 users, developers and non developers in the Polkadot ecosystem. It will achieve that goal by enabling new users creating their own contracts in a few clicks. We want to provide the possibility to anyone to be able to create their own smart contracts as a tool for their work. The users need to focus on what they do, so we make the access to smart contracts easy for them. They don’t need to care about programming, but they need to be able to customize their smart contracts in a simple way with the support of the developer community around the world.

### Project Details

[Here](https://alongoni.github.io/polkadot-contract-wizard/#) you can find our first approach of the contract wizard. And [here](https://github.com/alongoni/polkadot-contract-wizard) is the repo containing what we already did.

We learned from this experience that this kind of implementations are not friendly enough to non technical users, so we decided to do something about it.

These are the steps that will be done to implement the proposed solution:

 **1.-  Redesign frontend interface (in progress)**

The development needs to be focused on making a better user experience.
There are already some tools that we can use as a reference. E.g: https://mintplex.xyz/ , https://wizard.openzeppelin.com/

#### User Personas

- A non-technical user that needs to create a new NFT contract for publishing his own content or needs to create a new Token for being able to finance his own project.

- A developer that wants to bootstrap a quick template of a standard contract (based on [PSP](https://github.com/w3f/PSPs)) with different features.

If we want to onboard more people to Polkadot Ecosystem and achieve mass adoption we need to make the user experience easier.

We have already started with a [prototype](//TODO) on Figma.

 **2.- Develop the interface based on the previous task result**

Based on the mock-up created in the previous step make it something usable.

We need to be very careful about the look and feel.

The user will be guided step by step to create the contract he needs. At the end, the generated smart contract code is displayed with the possibility to copy and download it.

 **3.- Compose the contract based on the selection.**

All the contracts need to be composable based on the modifiers selected by the user.

At first, we will only use OpenBrush contracts than can be found here: https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token

 **4.- Add syntax highlighting to the displayed smart contract code.** 
 
At first, the syntax hihlighter will only be used for Rust programming language.

To allow compatibility with future plans we will research for a library that covers not only Rust, but can also be used with AssemblyScript or any other language that is compatible with WASM.

 **5.- Deploy all possible combinations of smart contracts.**

In order to allow users to only instance the smart contracts, we will have to deploy the smart contracts first. Once each of them is deployed, we will store the code hash so that it can be used later.

We need a map containing the parachain, type of the contract and the modifiers used (PSP22 - base / PSP22- burnable) and the code hash of the deployed contract.

Research what’s the best place to store this and what’s the most efficient way.

At first, it will only be done in Rococo Testnet //TODO
Check documentation here: https://github.com/paritytech/canvas

 **6.- Develop Instance functionality.**

Once the user has finished defining the functionality of the contract, the associated code hash from the previous step is obtained.
Now, the user is able to fill the required fields of the contract constructor in order to instance it succesfully.

### Ecosystem Fit

**Polkadot Contract Wizard aims to be a bridge between people with great ideas and the entire Polkadot Ecosystem.**

This project will help providing a solution for all type of users to create standard smart contracts such as tokens, NFTs, etc in a very simple way.

## Team :busts_in_silhouette:

### Team members

The project will be led by Diego Torres, protofires field CTO
Our Developer will be TODO
And the UI/UX expert is Agustin Longoni

### Contact

- **Contact Name:** Diego Torres Borda
- **Contact Email:** diego@protofire.io
- **Website:** [protofire.io](https://protofire.io/)

### Legal Structure

- **Registered Address:** 1607 Ponce de Leon Avenue, GM-06, San Juan, PR, 00909
- **Registered Legal Entity:** Altoros LLC (DBA Protofire)

### Team's experience

Protofire has proven expertise in building decentralized infrastructure, protocols, applications, and developer platforms to accelerate growth of network’s ecosystems. By delivering hands-on coding and contributions, Protofire specializes in supercharging developer adoption, bootstrapping, and network usage
We are not only a dev shop company, but we create long term partnerships with the projects we are part of, building and working as ambassadors for the community. We believe in the projects and also participate by running nodes and taking the validator or staker roles.

### Team Code Repos

- https://github.com/protofire/filecoin-CID-checker
- https://github.com/protofire/moonbeam-web-core
- https://github.com/protofire/solhint
- https://github.com/protofire/eth-cli
- https://github.com/protofire/blockchain-learning-path
- https://github.com/protofire/maker-governance-dashboard
- https://github.com/protofire/omen-exchange
- https://github.com/protofire/kyber-pool-master-proxy-contract

GitHub accounts of team members.

- https://github.com/alongoni
- https://github.com/ElvisKrop
- https://github.com/DiegoTorresborda

### Team LinkedIn Profiles (if available)

- linkedin.com/in/agustinlongoni
- linkedin.com/in/nikita-zasimuk
- linkedin.com/in/diego-torres-borda-94b70912

## Development Status :open_book:

- [link](https://polkadothackathonlatam.com/proyecto-inner/LactobaciloGG/usuario-single/) to project presented on Polkadot hackathon LATAM

## Development Roadmap :nut_and_bolt:

TODO//

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 2 month
- **FTE:**  2
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone. You can refer to details provided in previous sections.) |
| 2. | Substrate module: Y | The Y Substrate module will... |
| 3. | Substrate module: Z | The Z Substrate module will... |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5. | Library: ABC | We will deliver a JS library that will implement the functionality described under "ABC Library" |
| 6. | Smart contracts: ... | We will deliver a set of ink! smart contracts that will...


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

...


## Future Plans

After the completion of this project, we would love to broaden its scope.

**Custom contracts**
- Add the possibility of creating custom contracts, not only with the modifiers but adding the ability to write code using the interface.
- Compile the generated code and deploy it to different parachains.

**Social Interaction**
- Create an account to store information.
- Save your created smart contracts.
- Be able to share them with the community and ask for help.
- Provide assistance to other community members.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
