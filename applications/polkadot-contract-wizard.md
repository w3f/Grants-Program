# Polkadot Contract Wizard

- **Team Name:** Protofire
- **Payment Address:** 0xD662E05ce522B3861b70FC376F60bF50E200abfA (USDC - Ethereum network)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 

## Project Overview :page_facing_up:

This project is an application for a grant after getting [the first prize on Polkadot Hackathon LATAM](https://polkadothackathonlatam.com/proyecto-inner/LactobaciloGG). 

We firmly believe that web3 has to be easy to use, this project is based on that premise and from the mock-up developed in the hackathon, we are going to take the next steps to make this experience frictionless.

### Overview

The Polkadot Contract Wizard aims to be the project that provides the entry point for the next generation of web3 users, developers and non developers in the Polkadot ecosystem. It will achieve that goal by enabling new users creating their own contracts in a few steps. We want to provide the possibility to anyone to be able to create their own smart contracts as a tool for their work. The users need to focus on what they do, so we make the access to smart contracts easy for them. They don’t need to care about programming, but they need to be able to customize their smart contracts in a simple way with the support of the developer community around the world.

### Project Details

[Here](https://alongoni.github.io/polkadot-contract-wizard/#) you can find our first approach of the contract wizard. And [here](https://github.com/alongoni/polkadot-contract-wizard) is the repo containing what we already did.

We learned from this experience that this kind of implementations are not friendly enough to non technical users, so we decided to do something about it.

We plan to use the following tech stack in the latest stable version: React, Next.js, MUI, PolkadotJS wallet extension, Docker, Git.

These are the steps that will be done to implement the proposed solution:

#### <a name="step1"></a>1.-  Redesign frontend interface (in progress)

The development needs to be focused on making a better user experience.
There are already some tools that we can use as a reference. E.g: https://mintplex.xyz/, https://www.coinvise.co/

#### User Personas

- A non-technical user that needs to create a new NFT contract for publishing his own content or needs to create a new Token for being able to finance his own project.

- A developer that wants to bootstrap a quick template of a standard contract (based on [PSP](https://github.com/w3f/PSPs)) with different features.

If we want to onboard more people to Polkadot Ecosystem and achieve mass adoption we need to make the user experience easier.

We have already started with a [prototype](https://www.figma.com/proto/XhwRgBUg7oSDncX0w1byfV/Contract-Wizzard?node-id=1%3A3&viewport=-714%2C541%2C0.39&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3) on Figma.

![Figma Prototype Contract Wizard](https://gcdnb.pbrd.co/images/RgPC3fQshqt8.png "Polkadot Contract Wizard Design")

#### <a name="step2"></a>2.- Develop the interface based on the previous task result

Based on the mock-up created in the previous step make it something usable.

We need to be very careful about the look and feel.

For the login we will use PolkadotJS wallet.

The user will be guided step by step to create the contract he needs. At the end, the generated smart contract code is displayed with the possibility to copy and download it.

#### <a name="step3"></a>3.- Compose the contract based on the selection.

All the contracts need to be composable based on the modifiers selected by the user:

PSP22:

    - Modifiers: Metadata, Mintable, Burnable, Wrapper, FlashMint, Pausable, Capped.

    - Security modifiers: Ownable, Access Control, Access Control Enumerable, None. 

PSP37

    - Modifiers: Batch, Metadata, Mintable, Burnable, Enumerable.

    - Security modifiers: Ownable, Access Control, Access Control Enumerable, None. 

PSP34

    - Modifiers: Metadata, Mintable, Burnable, Enumerable.

    - Security modifiers: Ownable, Access Control, Access Control Enumerable, None. 

At first, we will only use OpenBrush contracts than can be found here: https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token

#### <a name="step4"></a>4.- Add syntax highlighting to the displayed smart contract code.

At first, the syntax hihlighter will only be used for Rust programming language.

To allow compatibility with future plans we will research for a library that covers not only Rust, but can also be used with AssemblyScript or any other language that is compatible with WASM.

#### <a name="step5"></a>5.- Create a service that allows on demand contract compilation and deployment.

In order to allow users to only instance the smart contracts, we will have to deploy the smart contracts first. We'll build a backend service that receives the generated code and compiles it. Once the contract is deployed, we will store the code hash so that it can be used later.

We need a map containing the parachain, type of the contract, the modifiers used and the code hash of the deployed contract.
E.g: (Contracts Rococo - PSP22 - [burnable,mintable] => "CODE HASH")

Research what’s the best place to store this and what’s the most efficient way.

At first, it will only be done in Contracts Parachain on Rococo Testnet

Check documentation here: https://substrate.io/developers/rococo-network/

#### <a name="step6"></a>6.- Develop Instance functionality.

Once the user has finished defining the functionality of the contract, the associated code hash from the previous step is obtained.
Now, the user is able to fill the required fields of the contract constructor in order to instance it succesfully.

### Ecosystem Fit

**Polkadot Contract Wizard aims to be a bridge between people with great ideas and the entire Polkadot Ecosystem.**

This project will help providing a solution for all type of users to create standard smart contracts such as tokens, NFTs, etc in a very simple way.

## Team :busts_in_silhouette:

### Team members

The project will be led by Diego Torres, protofires field CTO
Our Developer will be Henry Palacios
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
- https://github.com/henrypalacios
- https://github.com/alongoni
- https://github.com/DiegoTorresborda

### Team LinkedIn Profiles

- linkedin.com/in/henrydpalacios
- linkedin.com/in/agustinlongoni
- linkedin.com/in/diego-torres-borda-94b70912

## Development Status :open_book:

As explained in step 1 of project details section, our first approach was a contract wizard similar to the one built by OpenZeppelin on Ethereum.
- [Link](https://polkadothackathonlatam.com/proyecto-inner/LactobaciloGG) to project presented on Polkadot Hackathon LATAM.

After that, we realized that if we wanted our tool to be useful for all types of users, we needed to redesign the UX and add further functionalities.
- We are already working on a [prototype](https://www.figma.com/proto/XhwRgBUg7oSDncX0w1byfV/Contract-Wizzard?node-id=1%3A3&viewport=-714%2C541%2C0.39&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3) of how the proposed project will work. 
## Development Roadmap :nut_and_bolt:

Described in project details.

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 28,000 USD

### Milestone 1 — UI and Code Generation

- **Estimated duration:** 3 months
- **FTE:**  2
- **Costs:** 21,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can generate its own smart contracts. |
| **0c.** | Testing and Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a docker container with current milestones deliverables to easily run the application. |
| 1. | Redesign frontend interface | The functionality to be implemented corresponds to [step 1](#step1) of the Project Details section. |
| 2. | Develop the interface based on the previous task result | The functionality to be implemented corresponds to [step 2](#step2) of the Project Details section. |
| 3. | Compose the contract based on the selection | The functionality to be implemented corresponds to [step 3](#step3) of the Project Details section. |
| 4. | Add syntax highlighting to the displayed smart contract code | The functionality to be implemented corresponds to [step 4](#step4) of the Project Details section. |

### Milestone 2 — Smart Contracts Deployment and Instantiation functionality

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 7,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can instantiate a smart contract. |
| **0c.** | Testing and Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a docker container with current milestones deliverables to easily run the application. |
| 0e. | Article | We will publish an article that explains what we have achieved building this project and how this will impact the ecosystem . |
| 1. | Create a service that allows on demand contract compilation and deployment. | The functionality to be implemented corresponds to [step 5](#step5) of the Project Details section. |
| 2. | Develop Instance functionality | The functionality to be implemented corresponds to [step 6](#step6) of the Project Details section. |

## Future Plans

After the completion of this project, we would love to broaden its scope.

**Multiple Chains**
- Provide a set of tools that will allow users to connect to parachains which implement the contracts pallet.

**Custom contracts**
- Add the possibility of creating custom contracts, not only with the modifiers but adding the ability to write code using the interface.
- Compile the generated code and deploy it to different parachains.
- Following the comments made on the [pull request](https://github.com/w3f/Grants-Program/pull/1413#pullrequestreview-1234970716), our approach will be based on the [ink-playground](https://github.com/paritytech/ink-playground) in order to integrate writing custom code and compiling it.

**Social Interaction**
- Create an account to store information.
- Save your created smart contracts.
- Be able to share them with the community and ask for help.
- Provide assistance to other community members.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website


