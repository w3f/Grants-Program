# create-substrate-app

- **Team Name:** Philoniare Team
- **Payment Address:** 14AZk92CKjovm4tDvzE9XsjGz3HNeeV2tmnbYitAqyweWoRp (UDSC) 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview
### Overview

- CLI for Substrate DApp creation
- This project is the `create-substrate-app` CLI tool, designed to streamline the initial setup of Substrate-based applications. It offers scaffolding templates for popular frontend frameworks (React, Vue, Angular) and enables developers to easily select their desired target chain (Substrate, Polkadot, Kusama).
- Integration to Substrate:
  - The `create-substrate-app` tool is built specifically for the Substrate ecosystem, aiding developers in rapidly setting up the foundations of their dApps.
  - It directly leverages the flexibility of Substrate by allowing developers to choose their target chain and providing the framework for chain-specific interactions.
  - By making Substrate development more accessible, it indirectly promotes the growth and adoption of Polkadot and Kusama.
- Why we are interested:
  - Our team recognizes the potential of Substrate but believes the initial development experience could be smoother. This tool aims to lower the barrier to entry for building on Substrate.
  - We want to accelerate dApp development within the Substrate ecosystem by providing a convenient and standardized starting point.
  - We believe a robust and flexible scaffolding tool can attract more developers from various backgrounds, strengthening the networks within the Polkadot/Kusama space.

### Project Details

API:
```sh
npx create-substrate-app [project_name]
```
Options:
1. Choose a frontend framework (React, Vue, Angular)
2. Choose a target chain (Polkadot, Kusama, Astar)

- An overview of the technology stack to be used: TypeScript versions of scaffolding templates for React, Vue and Angular

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  - Category: **Developer Tooling**
  - Position: Streamlines the initial stages of Substrate-based dApp development by providing a structured starting point and automating boilerplate setup.
  - Integration: Works in tandem with the core Substrate framework and the Polkadot/Kusama ecosystem facilitating easier onboarding of Web2 developers. 
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - Primary: Dapp developers new to Substrate, or experienced developers looking to rapidly prototype Substrate projects.
  - Secondary: Frontend developers within existing Substrate teams wanting standardized project structures.
- What need(s) does your project meet?
  - Lowers Barrier to Entry: Reduces the initial learning curve and complexity associated with setting up a Substrate project, especially for those unfamiliar with the framework's specifics.
  - Standardization: Promotes consistent project structures and best practices within the Substrate development community.
  - Efficient Development: Saves time by automating project scaffolding and integration of frontend frameworks with chain selection
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
  - Questions on how to get started with building a Substrate dApp are frequently asked in the Substrate Technical chat and on Stack Overflow. There is a clear desire and need for a steamlined tooling, inspired by the popular `create-react-app`. 
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - There are fragmented repos that can be found on Github, but they're mostly on React and need references to a private repo. By adding this global CLI command, we can easily share project scaffolding on tutorials and documentation.  

## Team
### Team members

- Name of team leader: Tuguldur Baigalmaa
- Names of team members: Tuguldur Baigalmaa

### Contact

- **Contact Name:** Tuguldur Baigalmaa
- **Contact Email:** tgldr0511@gmail.com
- **Website:** https://philoniare.com/about

### Legal Structure

- **Registered Address:** None
- **Registered Legal Entity:** None

### Team's experience

I have been a web2 developer for 7 years and have maintained web3 js libraries like [terra.js](https://terra-money.github.io/terra.js/)

### Team Code Repos

https://github.com/philoniare/pba-final-project

https://github.com/philoniare/

### Team LinkedIn Profiles (if available)

- https://linkedin.com/in/tuguldurb


## Development Status

There's already an [existing template](https://github.com/substrate-developer-hub/substrate-front-end-template). We will be building on top of this template and adding more features to it.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 4,550 USD

### Milestone 1 - Full CLI functionality

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 3,500 USD

|  Number | Deliverable                           | Specification                                                                                                                                                   |
|--------:|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  **0.** | License                               | Apache 2.0                                                                                                                                                      |
|      1. | TypeScript React Front-End Template   | Create a modified version of React template with TypeScript                                                                                                     |
|      2. | TypeScript Vue Front-End Template     | Create a TypeScript version of Vue Front-End Template                                                                                                           |
|      3. | TypeScript Angular Front-End Template | Create a TypeScript version of Angular Front-End Template                                                                                                       | 

### Milestone 2 - Global npm command

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 1,050 USD

|  Number | Deliverable                           | Specification                                                                                                                                                   |
|--------:|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | Documentation Site                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) call the CLI                      |
| **0b.** | Testing and Testing Guide             | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0c.** | Article                               | We will publish an **article**/workshop that explains how to run the CLI (what was done/achieved as part of the grant).                                         |
|      1. | Published Global CLI command          | Publish the CLI command to npm registry                                                                                                                         |                                                                                                      


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
