# W3F Grant Proposal

- **Project Name:** Sol2Ink
- **Team Name:** [727.ventures](https://github.com/727-Ventures)
- **Payment Address:** ERC 20 ADDRESS (DAI):
0x352F779203202c99699CdA8cc95adF06CcC8abEf 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

This is a follow-up application for our [first milestone](https://github.com/w3f/Grants-Program/blob/master/applications/sol2ink.md)

### Overview

The goal of this project is to ease the way to Polkadot (Ink!) ecosystem
for the current Solidity smart contract developers and dapps written
in Solidity. Since the ecosystem is relatively new, it may be
discouraging and time-consuming for developers and teams to rewrite
whole existing code bases of their smart contract applications into a
different language (Rust, Ink!).

This project aims to accelerate this process by transpiling existing
Solidity code into Rust and ink! code, while considering existing
standards of these languages and ecosystems. Some of the points which
are the most time-consuming while doing such transformation are for
example rewriting the headers of functions (position of type and name
identifiers), different behavior of common data types, as well as
usage of different primitive types, and many more. If a developer
decides to use Sol2Ink, it is still needed for them to check the
generated code and correct some issues which may not be handled well
by the program, but the first step of transforming the code base is
completed and already has saved the developer a lot of time. A simple
prototype that was already tested by our developers, which handles
only interfaces for now (since it is very simple to transform those),
can already decrease the time of rewriting some extensive interfaces
into Rust and Ink! from one hour to ten minutes, after correcting
small issues, which the prototype did not consider yet.

### Project Details

Sol2Ink will take the code of an existing smart contract (or existing
smart contract application) and transpile the code from Solidity into
Rust. Since it is a smart contract application, it will also use Ink!
implementations to make it a deployable smart contract application.
While doing this, the developer will have an option to use existing
standards and PSPs, one example may be optional usage of OpenBrush
standards (e.g. if there is a call to the ERC-20 interface inside
the contract being transformed, the program will use the PSP-22
interface from OpenBrush to do the same call). The next step (where
Rust applications differ from Solidity applications) is to use the
correct file structure in the transformed application, and Sol2Ink
will handle this as well.

This way, we can divide the details of Sol2Ink into a roadmap:

- Implement	Sol2Ink cli tool for simple contract parsing

The user will give Sol2Ink the
code they want to transform into Ink! and Rust, Sol2Ink will
transpile this code and output the Rust/Ink! code in a new file.

- Create	documentation and a website with guides on how to use Sol2Ink

Users will better understand
the processes behind the code transpilation and will be more aware of
possible issues which may emerge while using Sol2Ink.

- Sol2Ink	upgrade focused on the ability to parse complex smart contract	applications

The user will be able to give Sol2Ink their whole Solidity project, Sol2Ink will transpile the code and output the Rust/Ink! code in files with a comprehensive file structure. At this stage, Sol2Ink should be able to handle generalization or multiple file dapps in a single step

- Integration	of parsing dependencies and PSP usage option

One problem may emerge with
generalization, which exists in Solidity but does not exist in Rust.
We can solve this with traits, and this milestone will be focused on
a more efficient way of handling such cases.

- Sol2Ink	web application interface

More user-friendly way of using Sol2Ink, with a better user experience and without the need of downloading additional tools.

- Maintenance	and integration of new ecosystem standards and updates

The ecosystem is growing each day, each day new standards and tools emerge. Our product aims to give the best results, and we need to keep up with the ecosystem to fulfill this goal.

### Ecosystem Fit

- Where	and how does your project fit into the ecosystem?

As there are many products already existing within the Solidity
ecosystem, which aim to live in the Polkadot/Ink! ecosystem as well,
we think that a lot of processes linked with such transformation are
repetitive and time-consuming and can be done faster with such
transpiler as Sol2Ink aims to be. Therefore we think, that such a
transpiler may speed up the development process for teams
transforming Solidity code bases into Rust and Ink!, and also ease
the way into this ecosystem for new Ink! developers who want to
transform their existing Solidity solutions.

- Who	is your target audience (parachain/dapp/wallet/UI developers,	designers, your own user base, some dapp's userbase, yourself)?

Solidity developers looking to transform applications into Rust and Ink!.

- What need(s) does your project meet?

Our project is a tool that will fasten the development process of
transforming existing Solidity projects into Rust and Ink!.

- Are	there any other projects similar to yours in the Substrate /	Polkadot / Kusama ecosystem?

We know about [Solang](https://github.com/hyperledger-labs/solang), which is a similar project to Sol2Ink, but
Solang is used for the transition between Solidity and WASM, while Sol2Ink will be a transpiler to readable and editable source code, we are
not aware of such projects in the Dotsama ecosystem.
We are also aware of [Sol2Ligo](https://github.com/madfish-solutions/sol2ligo), which is a transpiler from Solidity to Ligo, which should help with migration to Tezos.

## Team :busts_in_silhouette:

### Team members

- **Markian Ivanichok** (СEO of 727.ventures)
- **Fedor Lebed** (Head of Operations | 727.ventures)
- **Nameless Endless** (Blockchain Developer | 727.ventures)
- **Dominik Krížo** (Blockchain Developer | 727.ventures)
- **Green Baneling** (Blockchain Core Rust Engineer | 727.ventures)  


### Contact

* **Contact Name:** Fedor Lebed
* **Contact Email:** fedor.lebed@727.ventures
* **Website:** [727.ventures](727.ventures)

### Legal Structure

* **Registered Address:** The registered office shall be in Coastal Building, Wickham’s
Cay II, P. O. Box 2221, Road Town, Tortola, VG1110, British Virgin Islands.
* **Registered Legal Entity:** Seven2seven Ventures Ltd

### Team's experience

**Markian Ivanichok**  
CEO of 727.ventures, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster.

**Fedor Lebed**  
Head of Operations
Fedor is the head of operations at Brushfam, a portfolio company of 727. ventures which is developing the ink! Smart contracts tools.
Fedor invested in mining pools from 15 years old. He has a background in product management, working with international software products for Tier-1 markets.

**Nameless Endless**  
Blockchain Developer
Became interested in programming at the age of 16. At this time, he tried web development and created a website. Then decided to go to University to study system programming and object-oriented programming. Most often, he used C and C++ languages. Nameless likes innovations of web3 technologies and believes in the potential of Rust language and WASM standard for smart contracts.

**Dominik Krížo**  
Blockchain Developer
Started programming own games at age of 15 as a hobby, then went to University studying informatics and object oriented programming, becoming an Android developer in 2018. In 2017 he started his crypto venture by investing in BTC and Ethereum and getting more knowledge regarding smart contracts and DeFi protocols during DeFi summer 2020. As a programmer, he wanted to know more behind the scenes of smart contracts, so he started to develop his own smart contract applications for Ethereum and then becoming a Rust and Ink! developer in , since he believes that WASM with its benefits over EVM is the future of smart contract applications. As a part of his Android developer career, Dominik was working on porting of applications from C++ to Android/Java, for which he also worked on a tool to ease this process, describing the process of transformation of code base from one language to another in his bachelor's thesis.

**Green Baneling**  
Blockchain Core Developer  
Primary programming languages are: C++, Go, Rust

Finished the faculty of applied mathematics(Master degree). Participated in programming competitions during education. Has worked as a programmer for around 6 years.

Was a freelancer the first year, creating an application for IOS(Swift), creating modules for the desktop application on C++. After that, spent 2 years in a company which created software for TV devices(C++/ Haxe).  After which, for 3 years, worked on different blockchain projects(C++/Go/Rust/Solidity/Js).

### Team Code Repos

* https://github.com/727-Ventures

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* https://github.com/o-tsaruk
* https://github.com/coreggon11
* https://github.com/xgreenx

### Team LinkedIn Profiles

* https://www.linkedin.com/in/mivanichok/
* https://www.linkedin.com/in/toma-sadova/
* https://www.linkedin.com/in/dominik-krizo/

## Development Status :open_book:

[The project](https://github.com/Supercolony-net/sol2ink) is already in release `1.0.0`.

## Development Roadmap :nut_and_bolt:

### Overview

**We have decided to describe a full roadmap of an Sol2Ink here, with estimates. However, the funding we request at this stage is for milestone 2.**

* **Total Estimated Duration:** 10 weeks
* **Full-Time Equivalent (FTE):** 2-2.5
* **Total Costs:** 60,000 USD


### Previous work

### Milestone 1 — Implement	Sol2Ink cli tool for simple contract parsing

- **Estimated duration:** 8 weeks
- **FTE:**  1.5
- **Costs:** 36,000 USD
- **Delivery status:** [Delivered](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/sol2ink-delivery.md)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide a documentation for the user on how to use our tool for simplification of their process of transformation of Solidity code to Rust and Ink! code, along with inline documentation of code so the developers can better understand the processes in the backend |
| 1. | Sol2Ink CLI | A CLI application which will take a Solidity file as the input and produce a transformed Rust file with Rust and ink! code as the output |
| 2. | Integrate OpenBrush | Since OpenBrush is a tool to ease and fasten the smart contracts development in ink!, we will add this library to the smart contracts generated by Sol2Ink |
| 3. | Website with guides | We will provide a website where we will compare a transformation of Solidity code into Rust and ink! code, along with issues which may occur (for example handling of Assembly blocks etc.). |


### Current work - Scope of this Grant


### Milestone 2 — Upgrade focused on complex Smart contract applications parsing

- **Estimated duration:** 10 weeks
- **FTE:**  2-2.5
- **Costs:** 60,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will enhance both the inline documentation as well as the website with guides to reflect new features implemented in this milestone |
| 0c. | Testing and Testing guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. Documentation will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Website with guides | We will enhance the existing guides to reflect new features implemented in this milestone; The website with guides is something like an enhanced documentation, the inline documentation just describes the functions of the program, the guides go deeper into how it works, and it also contains a tutorial for usage of Sol2Ink |
| 2. | Split contract into traits | Currently all logic and storage is in one contract file. This upgrade will generate traits for each contract that the contract is using, splitting logic and storage into separate traits. This will also nicely handle inheritance of Solidity smart contracts |
| 3. | Sol2Ink transpiler update | We will update the transpiler to deal with code which it currently does not support or parses incorrectly |
| 3a. | Functions with value | Support calls with value transferring |
| 3b. | Chained selectors | Fix parsing of chained selectors |
| 3c. | Updating structs inside of a mapping | Fix how Sol2Ink rewrites fields of a structure inside a mapping |
| 3d. | Modifiers | Fix some occassions where parsing of a modifier causes the output code to be uncompilable (for example if there is a function call as a modifier argument |
| 3e. | Fix bugs | Fix many small bugs which can occur, after this a more complex contracts (e.g. Uniswap) can be fully covered with Sol2Ink |
| 4. | Library parsing | We will implement the parser for Solidity libraries; currently Sol2Ink only looks for definition of a contract or an interface, since libraries must be handled in a different way, meaning that there is no problem in parsing of Solidity code of a library, but the output code of a Solidity library must be handled in a different way, which is the goal of this deliverable |
| 5. | Handling dependencies and generalization | This will be implemented via traits |
| 6. | Multi-file project parsing | This will be implemented via traits |

## Future Plans

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0. | Article | We will publish an article which explains the advantages of using Sol2Ink |
| 1. | Handle Solidity specific cases | Delegate calls, assembly code, try/catch blocks etc. |
| 2. | Sol2Ink web application | Web app for an even easier work with Sol2Ink  |
| 3. | Maintenance | Keeping up with new ecosystem standards, fixing issues from community |

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation
