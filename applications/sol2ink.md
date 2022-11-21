# Sol2Ink

- **Team Name:** [SuperColony](https://github.com/Supercolony-net)
- **Payment Address:** ERC 20 ADDRESS (USDT):
0xE1B19cE32866cDE87F8f59C7C2C5f90E093A6942 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

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

- **Markian Ivanichok** (СEO of Supercolony)
- **Toma Sadova** (Product Owner | Supercolony)
- **Sven Seven** (Head of Engineering | Supercolony)
- **Dominik Krížo** (Blockchain Developer | Supercolony)
- **Green Baneling** (Blockchain Core Rust Engineer)  


### Contact

* **Contact Name:** Toma Sadova
* **Contact Email:** toma.sadova@supercolony.net
* **Website:** [supercolony.net](supercolony.net)

### Legal Structure

* **Registered Address:** The registered office shall be in 16192 Coastal Highway, Lewes, Delaware 19958, County of
Sussex, USA. 
* **Registered Legal Entity:** SUPERCOLONY CORP.

### Team's experience

**Markian Ivanichok**  
CEO of Supercolony, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster. Since the beginning of this year, co-founded and led Supercolony, a Polkadot venture studio that is dedicated to building and creating of Polkadot’s ecosystem.

**Toma Sadova**  
Product Owner
Toma is a Product Owner of OpenBrush, Head of Education and the main organizer of the [the biggest WASM conference](https://wasm-conference.com/). Toma started her career when she was 14. Since then, Toma has gained a lot of experience in IT technologies, management, leadership and crypto. She switched 4 career paths and figured out that blockchain/crypto is her calling! 

**Sven Seven**  
Blockchain Developer
Software engineer with prod experience since 2015. Master degree Information Security. Has worked in finance, e-commerce, networking domains as full-stack dev. Programming languages are JS, Java, Python, Rust, C++ . Blockchain dev since 2021.

**Dominik Krížo**  
Blockchain Developer
Started programming own games at age of 15 as a hobby, then went to University studying informatics and object oriented programming, becoming an Android developer in 2018. In 2017 he started his crypto venture by investing in BTC and Ethereum and getting more knowledge regarding smart contracts and DeFi protocols during DeFi summer 2020. As a programmer, he wanted to know more behind the scenes of smart contracts, so he started to develop his own smart contract applications for Ethereum and then becoming a Rust and Ink! developer in Supercolony, since he believes that WASM with its benefits over EVM is the future of smart contract applications. As a part of his Android developer career, Dominik was working on porting of applications from C++ to Android/Java, for which he also worked on a tool to ease this process, describing the process of transformation of code base from one language to another in his bachelor's thesis.

**Green Baneling**  
Blockchain Core Developer  
Primary programming languages are: C++, Go, Rust

Finished the faculty of applied mathematics(Master degree). Participated in programming competitions during education. Has worked as a programmer for around 6 years.

Was a freelancer the first year, creating an application for IOS(Swift), creating modules for the desktop application on C++. After that, spent 2 years in a company which created software for TV devices(C++/ Haxe).  After which, for 3 years, worked on different blockchain projects(C++/Go/Rust/Solidity/Js).

### Team Code Repos

* https://github.com/Supercolony-net

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* https://github.com/sventime
* https://github.com/coreggon11
* https://github.com/xgreenx

### Team LinkedIn Profiles

* https://www.linkedin.com/in/mivanichok/
* https://www.linkedin.com/in/toma-sadova/
* https://www.linkedin.com/in/sven-seventimes/
* https://www.linkedin.com/in/dominik-krizo/

## Development Status :open_book:

The project development has not started yet, we have just tested a very simple prototype on our commercial projects, which is able to parse Solidity interfaces into Rust traits with Ink! usage.

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 20 weeks
* **Full-Time Equivalent (FTE):** 1-2
* **Total Costs:** 36,000 USD

### Milestone 1 — Implement	Sol2Ink cli tool for simple contract parsing

- **Estimated duration:** 8 weeks
- **FTE:**  1.5
- **Costs:** 36,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide a documentation for the user on how to use our tool for simplification of their process of transformation of Solidity code to Rust and Ink! code, along with inline documentation of code so the developers can better understand the processes in the backend |
| 1. | Sol2Ink CLI | A CLI application which will take a Solidity file as the input and produce a transformed Rust file with Rust and ink! code as the output |
| 2. | Integrate OpenBrush | Since OpenBrush is a tool to ease and fasten the smart contracts development in Ink!, we will add this library to the smart contracts generated by Sol2Ink |
| 3. | Website with guides | We will provide a website where we will compare a transformation of Solidity code into Rust and ink! code, along with issues which may occur (for example handling of Assembly blocks etc.). |

## Future Plans

After this grant, we plan to upgrade the parser to handle more complicated Solidity codebases (e.g. generalization, storage manipulation, delegate calls), parsing of whole projects (multiple files) with dependencies and making a web application of this tool. We also plan to maintain the project to keep up with new emerging ecosystem standards and listen to issues from community and update the tool to make the process of transformation a nicer experience for the developers and teams.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation
