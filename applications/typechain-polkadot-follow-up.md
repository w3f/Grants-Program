# Typechain grant #2

# [Typechain-Polkadot](https://github.com/Supercolony-net/typechain-polkadot)

- **Project Name:** [Typechain-Polkadot](https://github.com/727-Ventures/typechain-polkadot)
- **Team Name:** [727.ventures](https://github.com/727-Ventures)
- **Payment Address:** ERC 20 (DAI):
0x352F779203202c99699CdA8cc95adF06CcC8abEf
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

Nowadays, when technologies are growing faster and faster, we should think about optimizing different routine processes and making older stuff better. One of these optimizations is to make code typesafe that will be flexible in different situations.

When a smart contract is being written, the front-end developer receives its file representation in the Application Binary Interface (ABI) format. One ABI per each contract, a new ABI for every contract update.

Information about how to interact with a contract (methods names, arguments & returns types, etc.) is included in this ABI file. It is not relatively human-readable, so extracting that information becomes a challenge. We need to have correct type definitions for each contract in TypeScript.

Interaction with blockchain is done with the polkadot.js library, which only has abstract definitions for the contract in use. Thus users' code cannot be typesafe. And Typechain-Polkadot can change it.

This Grant is a follow-up to the previous grant, [W3F Grant Proposal](https://github.com/w3f/Grants-Program/pull/992)..
We have decided to add a new tool that will help developers easily integrate typechain to their projects. It will also be compatible with Redspot (if redspot was used for compiler projects, you could just leave most of the things).
We have some updates on our team, so check them out. And also, we did more work on Milestone 1 than we thought, so now it'll be easier to add new features to the project, so we considered to reestimate our time.

### Usage of Typechain-compiler

```
    npx typechain-compiler --config config.json

```

Also, you can set some additional arguments like `--noCompile`, `--noTypechain`, `--release`

Config interface will be something like this:

```
export interface Config {
    projectFiles: string[]; // Path to all project files, everystring in glob format
    skipLinting : boolean; // Skip linting of project files
    artifactsPath : string; // Path to artifacts folder, where artifacts will be stored it will save both .contract and .json (contract ABI)
    typechainGeneratedPath : string; // Path to typechain generated folder
}

```

### Project Details

Typesafe contracts' descriptions can be generated automatically by a script, taking a list of ABIs as an input, giving usable TS type definitions and even runtime code as its output.

Given that a front-end developer needs to do this with every contract update, the such tool would save a lot of time and prevent mistakes of misusing smart contracts. It is installed as a package with built-in CLI.

When contract descriptions come both with ABI and source code (`*.contract` files), our tool will provide means for deployment as well.

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

There is a whole side to every project in the ecosystem - that is, the front-end side of contract integration - that will find a use for Typechain-Polkadot during the development process.

- Who is your target audience?

Our main target audience is front-end and smart-contract developers of Polkadot projects.

- What need(s) does your project meet?

Our project speeds up the front-end integration of Polkadot/Substrate/Kusama contracts. As well as brings type safety to developers' code when dealing with contracts. For smart contract developers, it simplifies integration test writing.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

No, we are the first project of the kind in the ecosystem. However, in the Solidity ecosystem, a similar project already exists, [Typechain](https://www.npmjs.com/package/typechain).

## Team :busts_in_silhouette:

### Team members

- **Markian Ivanichok** (СEO of 727.ventures)
- **Fedor Lebed** (Head of Operations | 727.ventures)
- **Green Baneling** (Blockchain Core Rust Engineer | 727.ventures)
- **Varex Silver** (Blockchain developer | 727.ventures)
- **Artem Lech** (Blockchain developer | 727.ventures)

### Contact

- **Contact Name:** Fedor Lebed
- **Contact Email:** [fedor.lebed@727.ventures](mailto:feder.lebed@727.ventures)
- **Website:** [727.ventures](727.ventures)

### Legal Structure

* **Registered Address:** The registered office shall be in Coastal Building, Wickham’s
Cay II, P. O. Box 2221, Road Town, Tortola, VG1110, British Virgin Islands.
* **Registered Legal Entity:** Seven2seven Ventures Ltd

### Team's experience

**Markian Ivanichok**
CEO of 727.ventures, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster.

**Fedor Lebed**
Fedor is the head of operations at Brushfam, a portfolio company of 727. ventures which is developing the ink! Smart contracts tools.
Fedor invested in mining pools from 15 years old. He has a background in product management, working with international software products for Tier-1 markets.

**Green Baneling**
Blockchain Core Developer
Primary programming languages are: C++, Go, Rust

Finished the faculty of applied mathematics(Master's degree). Participated in programming competitions during education. Has worked as a programmer for around six years.

Was a freelancer the first year, creating an application for IOS(Swift), and creating modules for the desktop application on C++. After that, I spent two years in a company that created software for TV devices(C++/ Haxe). After which, for three years, working on different blockchain projects(C++/Go/Rust/Solidity/Js).

**Varex Silver**
Blockchain Developer.

Student of Computer Science at the Kyiv National University of Taras Shevchenko. Participated in programming competitions of different stages in school since 2017 (C++).
Was a Backend developer(Go), Solidity developer(Solidity, Hardhat, Typescript), and now Blockchain developer(Rust, Typescript).

**Artem Lech**
Blockchain Developer.

Student of Applied Mathematics at the Kyiv National University of Taras Shevchenko. Started programming in 2016 and participated in a lot of Ukrainian and international competitions of competitive programming. Worked as a lecturer of algorithms at the school of competitive programming and as Intern Backend Engineer (Rust). Now works as Blockchain Developer on Polkadot Blockchain (Rust, Typescript).

### Team Code Repos

- [https://github.com/727-Ventures](https://github.com/727-Ventures)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- [https://github.com/xgreenx](https://github.com/xgreenx)
- [https://github.com/varex83](https://github.com/varex83)
- [https://github.com/Artemka374](https://github.com/Artemka374)

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/mivanichok/](https://www.linkedin.com/in/mivanichok/)
- [https://www.linkedin.com/in/toma-sadova/](https://www.linkedin.com/in/toma-sadova/)
- [https://www.linkedin.com/in/bogdan-ogorodniy/](https://www.linkedin.com/in/bogdan-ogorodniy/)
- [https://www.linkedin.com/in/artem-fomiuk-31249b226/](https://www.linkedin.com/in/artem-fomiuk-31249b226/)

## Development Status :open_book:

[The project](https://github.com/727-Ventures/typechain-polkadot) is already a work-in-progress.

## Development Roadmap :nut_and_bolt:

### Overview

We have decided to describe a full roadmap of a Typechain here, with estimates. However, the funding we request at this stage is for milestone 2.

## Previous work

### Milestone 1 - MVP, first application and testing.

- **Estimated duration:** 8 weeks
- **FTE:** 2
- **Costs:** 44,800 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| 0a     | License  | MIT |
| 0b     | Documentation | We will provide TypeScript code examples of this package in use, inline documentation, JSDoc, and the description of its features. |
| 1 | TS Types | We will research & match types from ABI to TypeScript, compatible with polkadot{.js} v8 library. Separately, for methods' arguments and return values. Files with types definition will be generated. | 
| 2 | Runtime Code | Prepare output(its draft can be seen in [technical specification](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#generated-code-draft)) of runtime code with contracts' methods implementation. At this point we have minimal viable coverage of the ABI types, original methods' names, and general types for methods' options, without specifics for contract's namespaces.
| 3 | Testing | Minimal coverage of PSP22 contract with integration tests. We will be testing correctness of the derived types of the arguments and return values. |
| 4 | NPM Packaging | Prepare the repository to work through CLI as a package. In TypeScript, as is, without translation to JavaScript. We will publish the package to NPM repository and provide set-up instructions (i.e. for installation, input & output). |

## Current work - Scope of this grant

### Milestone 2 - Full coverage for ABIs’ types. Contracts deployment.

- **Estimated duration:** 7.5 weeks
- **FTE:** 2.5
- **Costs:** 52,500 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| 0a | License | MIT |
| 0b | Documentation | Cover new-added features in documentation and usage examples. Prepare generated code to have more informative IDE hints based on TSDoc and the output type system (if needed). |
| 1 | Investigation & Refactoring | Broaden types definitions for methods arguments and return values (to full coverage). Also, refactor project structure to monorepo for future development | 
| 2 | Parser & generators modules | Design and implement a new parser module for ABI JSON to work with different versions of the ABI. Parser's output structure serves as an input for generators. Refactor, replace inline generation with the parser to generator flow. |
| 3 | Contract deployment | Add availability to deploy contracts with `Constructors` field, using `*.contract` files.
| 4a | Contract classes extension | Extend generated contract classes with valuable properties ordinarily available on the contract (e.g., address, name, signer, etc.). Also, provide the ability to change signer and contract address easily without creating a new contract manually. |
| 4b | Methods' names | Format methods' names in the output from the original `MethodTrait::method_name` to a more user-friendly `methodName` naming scheme while resolving overlap in formatted names. |
| 5 | Testing | Complete coverage of PSP22 contract with integration tests. Both for contract usage and deployment. We will be testing arguments' & return values' types' correctness. |
| 6 | Article | We will publish an article that explains features of Typechain, how to use it in projects |
| 7 | Branding | Make logotype for typechain and better README |

## Future work

### Milestone 3 - High-level improvements, flexibility and simplifying of usage

- **Estimated duration:** 8-12 weeks
- **FTE:** ?
- **Costs: -**


| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| 0a | License | MIT | 
| 0b | Documentation | We will cover new-added features in documentation and usage examples. | 
| 1 | User-defined plugins | We will provide an opportunity for users to make their plugins, for instance, how to parse types or what generated code will look like. | 
| 2 | Subscribing to events | We will research and subscribe to events the contract emits, which will be handy for developers. |
| 3 | Typechain-compiler | The tool will be easy for big projects to compile Rust code and generate Typechain definitions. It’ll be helpful for TDD when users can write code and develop everything in one CLI command instead of generating a typechain-code file by file. In plans, we want to make a wrapper for running user scripts (like hardhat run) and also functionality to initialize the environment for typechain usage |
| 4 | Openbrush integration | We will test typechain on openbrush integration tests to ensure everything is working correctly and is easy to use. |
| 5 | typechain/types package | We will make a separate package for types that typechain use to reduce the usage of the same code and separate static code from generated code. |
| 6 | Article | We will publish article that explain how to connect it to the project and describe the types of connection options (directly or via compiler) |

After this grant, we will maintain the project to keep up with new emerging ecosystem standards, listen to community issues, and update the tool to make the transformation process a more excellent experience for the developers and teams. We are going to work on integration with the Swanky project.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Have a number of approved applications:

- OpenBrush
- Sol2Ink
- Typechain-polkadot (Milestone 1)
