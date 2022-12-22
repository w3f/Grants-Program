# Polkadot contract wizard

- **Team Name:** Protofire
- **Payment Address:** 5FcEYNumroWcwyjeDtDVZALuCGmx94PjXnc9XzifHKTfU5Bf
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 

## Project Overview :page_facing_up:

This project is an application for a grant for a winning project on Web3-Blockchain tooling of the Polkadot hackathon.

### Overview

The polkadot contract wizard aims to be the project that provides the entry point for the next generation of web3 users, developers and non developers in the Polkadot ecosystem. It will achieve that goal by enabling new users creating their own contracts in a few clicks. We want to provide the possibility to artists to be able to create their own PSP34 contract for publishing their work. As artists they need to focus on what they do, so we make the access to smart contracts easy for them. We also expect people that have a great idea to be able to create their own token PSP22 for financing their idea. Those users don’t need to care about programming, but they need to be able to customize their smart contracts in a simple way with the support of the developer community around the world.

### Project Details

[Here](https://alongoni.github.io/polkadot-contract-wizard/#) you can find an example of what we already proposed. And [here](https://github.com/alongoni/polkadot-contract-wizard) is the repo containing what we already did.

This is the implementation we will have up and running after the completion of this grant:

 1.- Re-Develop mockup of the frontend interface

The development need to be focused on UX

There’s already a tool we can base our work on: https://wizard.openzeppelin.com/

Think the user can be an artist that need to create a new NFT token contract for publishing their own content

Think the user is a non technical person that has a great idea and need to create a new PSP22 for being able to finance it’s own project.

 2.- Re-Develop interface with no functionality based on the previous task result

Based on the mockup created in the previous step make it something usable

Need to be very careful about the Look and Feel

Don't forget the UX approach.

 3.- Add syntax highlighting to the code in rust for PSP22 at the beginning (this is already done in the current version)

We need to find a library that covers not only Rust language, but let’s have in mind Assembly Script will be required in the future, or any other language that has a transpiler and could be compatible with wasm.

Copy the PSP22 contracts from here: https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/token/psp22/psp22.rs

 4.- Compose the contracts based on the selection

All Rust contracts need to be composables based on the modifiers selected by the user.

The rs code of the modifiers is already here: https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp22/extensions

 5.- Add copy button the ability to copy the code generated (already done in the current version but need to be improved based on the UX analisys on point 1.-

Check the copied code is exactly the same as the generated code

 6.- Add download button the ability to generate the file and download it (same as previous point)

Check the downloaded file contains exactly what was generated in the UI

 7.- Add PSP34 functionality.

Include the PSP34 functionality

Base code and the extensions are already here: https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp34

 8.- Develop Add/Instance functionality, hardcoded to Canvas parachain in Rococo PSP22 base

At the very beginning we will need to deploy an instance in the same step. Even if the same contract was already created in the parachain.

Check documentation here: https://github.com/paritytech/canvas

The compiled file to upload will be the PSP22 base, nevermind the selection and can be hardcoded.

 9.- Compile code generated and deploy it Canvas parachain in Rococo

We will need to find a compiler to integrate in the UI for compiling the code that’s displayed in the interface.

Integrate the compiler to the UI, creating the compiled file and uploading it to create an instance of the contract.

If that is not possible, create a server endpoint for sending the code and get the compiled version.

 10.- Store a map containing addresses of contracts already deployed on each parachain for creating instances when possible

We need a map containing parachain (WS or name), type of the contract (PSP22 - base / PSP22- burnable / ) and the address already deployed.

Research what’s the best place to store this and what’s the most efficient way.

 11.- Add create instances when possible of already deployed contracts

Based on previous research implement the create instance instead of deploying every time

 12.- Create functionality to deploy on custom parachain adding WS information

Add the ability to select which parachain you want to deploy, show errors if fail to deploy or connect.

 13.- Add the ability of creating custom contracts, not only with the modifiers but adding the ability to write code using the interface.

At this point we need to be able to make changes in the code and be able to compile that code.

Add a warning if you want to change language from INK to ASK and vice-versa saying if you change language all custom changes will be lost.

#### We are going to make this work having in mind the rest of the items we already wrote in [this issue](https://github.com/alongoni/polkadot-contract-wizard/issues/1)

### Ecosystem Fit

As already said this project will help the entire ecosystem providing an entry level of users of a solution already build. This will allow them to start creating and using contracts form the standard in a very simple way. The main users for this can be artists or art curators that need their own contracts for their non fungible tokens. We are also expecting people from the community with great ideas that need to build their own token, even if they are migrating from other networks or if they want to start their project from scratch in Polkadot.

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

- **Estimated duration:** 1 month
- **FTE:**  1,5
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

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** BTC, Ethereum (USDT/USDC/DAI) or Polkadot/Kusama (aUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
