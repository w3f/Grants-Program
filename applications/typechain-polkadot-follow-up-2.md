# Typechain-Polkadot Follow-up-2

# [Typechain-Polkadot](https://github.com/727-Ventures/typechain-polkadot)

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

This Grant is a follow-up to the previous grants, [first grant](https://github.com/w3f/Grants-Program/blob/master/applications/typechain-polkadot.md) and [second grant](https://github.com/w3f/Grants-Program/blob/master/applications/typechain-polkadot-follow-up.md).
In this grant, we aim to integrate event subscription, allow users to create their plugins and expand the tool into more packages so the users can alo use different parts of the application alone if needed.

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
- **Dominik Krížo** (Head of Engineering | 727.ventures)
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

**Dominik Krížo**
Head of Engineering

Started programming own games at age of 15 as a hobby, then went to University studying informatics and object oriented programming, becoming an Android developer, eventually switching to work in web3. Dominik played a crucial role in the OpenBrush and Sol2Ink development and is currently developing the ink! smart contracts tools as part of Brushfam.

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

- [https://github.com/coreggon11](https://github.com/coreggon11)
- [https://github.com/varex83](https://github.com/varex83)
- [https://github.com/Artemka374](https://github.com/Artemka374)

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/mivanichok/](https://www.linkedin.com/in/mivanichok/)
- [https://www.linkedin.com/in/fedor-lebed-b8520b1a8/](https://www.linkedin.com/in/fedor-lebed-b8520b1a8/)
- [https://www.linkedin.com/in/dominik-krizo/](https://www.linkedin.com/in/dominik-krizo/)
- [https://www.linkedin.com/in/bogdan-ogorodniy/](https://www.linkedin.com/in/bogdan-ogorodniy/)
- [https://www.linkedin.com/in/artem-fomiuk-31249b226/](https://www.linkedin.com/in/artem-fomiuk-31249b226/)

## Development Status :open_book:

[The project](https://github.com/727-Ventures/typechain-polkadot) is already a work-in-progress.

## Development Roadmap :nut_and_bolt:

### Overview

We have decided to describe a full roadmap of a Typechain here, with estimates. However, the funding we request at this stage is for milestone 3.

* **Total Estimated Duration:** 8 weeks
* **Full-Time Equivalent (FTE):** 2.5
* **Total Costs:** 56,000 USD

## Previous work

### [Grant #1](https://github.com/w3f/Grants-Program/pull/992)

### [Grant #2](https://github.com/w3f/Grants-Program/pull/1368)

## Current work - Scope of this grant
### Milestone 1 - High-level improvements, flexibility and simplifying of usage

- **Estimated duration:** 8 weeks
- **FTE:** 2.5
- **Costs:** 56,000 USD


| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| 0a. | License | MIT | 
| 0b. | Documentation | We will cover new-added features in documentation and usage examples. | 
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. | 
| 0e. | Article | We will publish an article that explains how to integrate the typechain library into a project and describes the types of connection options (directly or via compiler). | 
| 1. | User-defined plugins | We will provide an opportunity for users to make their plugins, for instance, how to use parsed types, adding new fields and so on. | 
| 2. | Subscribing to events | We will research and subscribe to events the contract emits, which will be handy for developers. |
| 3. | Typechain-compiler | The tool will be easy for big projects to compile Rust code and generate Typechain definitions. It’ll be helpful for TDD when users can write code and develop everything in one CLI command instead of generating a typechain-code file by file. In plans, we want to make a wrapper for running user scripts (like hardhat run) and also functionality to initialize the environment for typechain usage |
| 4. | Openbrush integration tests | We will test typechain on openbrush integration tests to ensure everything is working correctly and is easy to use. |
| 5. | typechain/types package | We will make a separate package for types that typechain use to reduce the usage of the same code and separate static code from generated code. |

## Future work

After this grant, we will maintain the project to keep up with new emerging ecosystem standards, listen to community issues, and update the tool to make the transformation process a more excellent experience for the developers and teams.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Have a number of approved applications:

- OpenBrush
- Sol2Ink
- Typechain-polkadot (Milestone 1, 2)
