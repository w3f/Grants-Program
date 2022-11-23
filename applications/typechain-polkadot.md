# Typechain-Polkadot

- **Team Name:** [SuperColony](https://github.com/Supercolony-net)
- **Payment Address:** ERC 20 ADDRESS:
0xE1B19cE32866cDE87F8f59C7C2C5f90E093A6942
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

Nowadays, when technologies are growing faster and faster, we should think about optimizations of different routine processes and making older stuff better. One of these optimizations is to make code typesafe that will be flexible in different situations.

When a smart contract is being written, front-end developer receives file representation of it in the format called Application Binary Interface (ABI). One ABI per each contract, new ABI for every update of a contract.

Information about how to interact with a contract (methods names, arguments & returns types etc.) is included in this ABI file. It is not quite human-readable, so extraction of that information becomes a challenge. We need to have correct type definitions for each contract in TypeScript.

Interaction with blockchain is done with polkadot.js library, which only has abstract definitions for the contract in use, thus users' code cannot be typesafe. And Typechain-Polkadot can change it.

### Project Details

Typesafe contracts' descriptions can be generated automatically by a script, taking a list of ABIs as an input, giving usable TS type definitions and even runtime code as its output.

Given, that a front-end developer needs to do this with every contracts update, such tool would save a lot of time and prevent mistakes of misusing smart contracts. It is installed as a package with built-in CLI.

When contracts descriptions come both with ABI and source code (`*.contract` files), our tool will provide means for deployment as well.


### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

There is a whole side to every project in the ecosystem - that is the front-end side of contract integration, - that will find use for Typechain-Polkadot during development process.

- Who is your target audience?

Our main target audience is front-end and smart-contract developers of Polkadot projects.

- What need(s) does your project meet?

Our project speeds up the front-end integration of Polkadot/Substrate/Kusama contracts. As well as brings type safety to developers' code, when dealing with contracts. For smart contract developers, it simplifies integration test writing.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

No, we are the first project of the kind in the ecosystem. However, in Solidity ecosystem, a simmilar project already exists: [Typechain](https://www.npmjs.com/package/typechain).


## Team :busts_in_silhouette:

### Team members

- **Markian Ivanichok** (СEO of Supercolony)
- **Toma Sadova** (Product Owner | Supercolony)
- **Green Baneling** (Blockchain Core Rust Engineer | Supercolony)
- **Alex Seleznov** (Front-End Developer | Supercolony)
- **Varex Silver** (Blockchain developer | Supercolony)

### Contact

- **Contact Name:** Toma Sadova
- **Contact Email:** toma.sadova@supercolony.net
- **Website:** [supercolony.net](https://supercolony.net/)

### Legal Structure

- **Registered Address:** The registered office shall be in 16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex, USA.
- **Registered Legal Entity:** SUPERCOLONY CORP.

### Team's experience

**Markian Ivanichok**
CEO of Supercolony, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster. Since the beginning of this year, co-founded and led Supercolony, a Polkadot venture studio that is dedicated to building and creating of Polkadot’s ecosystem.

**Toma Sadova**
Toma is Market Growth Lead, Product Owner of OpenBrush, and the main organizer of the [the biggest WASM conference](https://wasm-conference.com/). Toma started her career when she was 14. Since then, Toma has gained a lot of experience in IT technologies, management, leadership and crypto. She switched 4 career paths and figured out that blockchain/crypto is her calling!

**Green Baneling**
Blockchain Core Developer
Primary programming languages are: C++, Go, Rust

Finished the faculty of applied mathematics(Master degree). Participated in programming competitions during education. Has worked as a programmer for around 6 years.

Was a freelancer the first year, creating an application for IOS(Swift), creating modules for the desktop application on C++. After that, spent 2 years in a company which created software for TV devices(C++/ Haxe). After which, for 3 years, worked on different blockchain projects(C++/Go/Rust/Solidity/Js).

**Alex Seleznov**
Front-End Developer.
Has 5 years of experience in front-end development. Primarily working with React-based applications with Flux state management systems, written in TypeScript. Produced many modular solutions & dealt with NPM packaging. Latest experience is with projects on Polkadot blockchain.

**Varex Silver**
Blockchain Developer.

Student of Computer Science at the Kyiv National University of Taras Shevchenko. Participated in programming competitions of different stages in school since 2017 (C++).
Was a Backend developer(Go), Solidity developer(Solidity, Hardhat, Typescript), and now Blockchain developer(Rust, Typescript).


### Team Code Repos

- https://github.com/Supercolony-net

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/xgreenx
- https://github.com/alex-seleznov
- https://github.com/varex83

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/mivanichok/
- https://www.linkedin.com/in/toma-sadova/
- https://www.linkedin.com/in/alexandr-seleznov-04054b5b/
- https://www.linkedin.com/in/bogdan-ogorodniy/


## Development Status :open_book:

[The project](https://github.com/Supercolony-net/typechain-polkadot) is already a work-in-progress.


## Development Roadmap :nut_and_bolt:

### Overview

**We are describing a full roadmap of the TypeChainPolkadot here, with estimates. However, the funding we request at this stage is for Milestones 1**

Technical specifications can be found [here](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md).

* **Total Estimated Duration:** 8 weeks
* **Full-Time Equivalent (FTE):** 2
* **Total Costs:** 44,800 USD


### Current work - Scope of this Grant


#### Milestone 1 - MVP, first application and testing.

* **Estimated duration:** 8 weeks
* **FTE:**  2
* **Costs:** 44,800 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| 0a | License | MIT |
| 0b | Documentation | We will provide TypeScript code examples of this package in use (some can be already found [here](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#usage-examples)). As well, as inline documentation, JSDoc and its features description. |
| 1 | TS types | We will research & match types from ABI to TypeScript, compatible with [polkadot{.js} v8](https://polkadot.js.org) library. Separately, for methods' arguments and return values. Files with types definition will be generated. |
| 2 | Runtime code | Prepare output(its draft can be seen in [technical specification](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#generated-code-draft)) of runtime code with contracts' methods implementation. At this point we have minimal viable coverage of the ABI types, original methods' names, and general types for methods' options, without specifics for contract's [namespaces](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#namespaces). |
| 3 | Testing | Minimal coverage of PSP22 contract with integration tests. We will be testing correctness of the derived types of the arguments and return values. |
| 4 | NPM Packaging | Prepare the repository to work through CLI as a package. In TypeScript, as is, without translation to JavaScript. We will publish the package to [NPM repository](https://npmjs.com) and provide set-up instructions (i.e. for [installation](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#set-up), [input](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#input) & [output](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#output)). |


## Future Plans


#### Milestone 2 - Full coverage for ABIs’ types. Contracts deployment.

* **Estimated duration:** 8 weeks
* **FTE:**  2
* **Costs:** 44,800 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| 0a | License | MIT |
| 0b | Documentation | We will cover new-added features in documentation and usage examples. |
| 1 | Investigation | Broaden types definitions for methods arguments and return values (to full coverage). |
| 2 | Parser & generators modules | Design and implement a new parser module for ABI JSON to work with different versions of the ABI. Parser's output structure serves as an input for generators. Refactor, replace inlne generation with parser to generator flow. |
| 3 | Contract deployment | Support of parsing `*.contract` files. Provide means for contract deployment. |
| 4 | Testing | Full coverage of PSP22 contract with integration tests. Both for contract usage and deployment. We will be testing arguments' & return values' types correctness. |


#### Milestone 3 - Optimization. Improve type system of the generated code.

* **Estimated duration:** 6 weeks
* **FTE:**  2
* **Costs:** 33,600 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| 0a | License | MIT |
| 0b | Documentation | We will cover new-added features in documentation and usage examples. |
| 1 | Precise methods definitions | Refine definitions and bahavior of contracts methods (i.e. methods' arguments and returns), depending on namespace, call options and properties of the method, like `payable` & `mutable`. E.g. preamptive querying for transaction calls, controlled by a call options flag. |
| 2 | Methods' names | Format methods' names in the output from original `MethodTrait::method_name` to more user-friendly `methodName` naming scheme, while resolving overlap in formatted names. |
| 3 | Contract classes extension | Extend generated contract classes with useful properties, normally available on the contract (e.g. address, name, signer, etc.). Rely on usage experience in doing so. |
| 4 | IDE hints | Prepare generated code to have more informattive IDE hints, based on both JSDoc and output typesystem itself (if needed). Rely on usage experience in doing so. |
| 5 | NPM Package | Translate package's code to JavaScript upon deployment. Provide informattive CLI, when needed. Make sure to have a cross-platform CLI support. |


After this grant, we will be maintaining the project to keep up with new emerging ecosystem standards and also listen to issues from community and update the tool to make the process of transformation a nicer experience for the developers and teams.


## Additional Information :heavy_plus_sign:

We haven’t applied for any other grant programs for this project.

**How did you hear about the Grants Program?**

Have a number of approved applications:
- OpenBrush
- Sol2Ink
