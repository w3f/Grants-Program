# NFT 2.0 

- **Team Name:**  [727.ventures](https://github.com/727-Ventures)
- **Payment Addresses:** 
ERC 20:   0x352F779203202c99699CdA8cc95adF06CcC8abEf
Polkadot: 16FVZ2qVefqbr2zcEGVojEQBgx3nb8GqQCdjKiaq2nSs33T8
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3


## Project Overview :page_facing_up:

### Overview

Web3 is an emerging fast growing tech sector. Being a tech sector its growth largely depends on the growth of its infrastructure. In blockchain world standards (ERC20, ERC721 NFT, etc) are the heart of the infrastructure. Therefore it is highly likely that the growth of a standard would give a rise to the whole ecosystem. 

We would like to suggest growing NFT to a totally new level. Being a base standard, NFT should be in the same time simple and sophisticated. Since it’s a base standard it should be kept simple, but as in controversy to f.e. FT which is essentially just a number, NFT should be much for sophisticated. 

In the current landscape majority of projects use `Erc721`, which we believe is largely outdated and limited. While some of developers already see NFT as something more then an image, an image is still the root property of `Erc721`. 
For proper DApp development, and each project introduces new primitives
and features. It makes interoperability between different NFT projects
more complicated.

This document describes the new vision for NFT and defines the standard
interfaces for interaction with it.

### Project Details

Our goal is to define and implement an extensible NFT standard, which will unify and standardize all NFT use cases defining their own new extensions for specific use cases. 

The standard targets the Polkadot as the primary platform, so it uses the style of this ecosystem - default encoding and decoding `SCALE`; Rust-based interfaces; XCM in mind.
But other ecosystems can adopt this standard inspired by the same features/ideas/goals.

The standard takes into account features already invented by different projects.
The standard will gather them together, make them more generic,
and treat them as extensions of the NFT. It will also have its own features
to support cross-chain compatibility, provide API for extension management,
and define rules for future additions to the standard.

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

To cover thrilling, undiscovered use cases and fill the Polkadot ecosystem with new great projects, the standard is using the style of this ecosystem. When adopted, it will find a use and ease the development process for numerous ecosystem members.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our target audience is dapp developers.

- What need(s) does your project meet?

The new upgradable and extendable NFT standard will change the way the dApps are developed, and open up the world of tremendous possibilities for developers, eliminating the need for projects to introduce their own features and thus making interoperability between them easier.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

 We are aware that other great similar projects are being developed in the ecosystem. In fact, the NFT 2.0 will gather features from different projects, as well as contain its own ones, so that community members can use an adopted standard, focusing on their projects rather than spending time on inventing new features.

## Team :busts_in_silhouette:

### Team members

**Markian Ivanichok** (СEO of 727.ventures)

**Green Baneling** (Blockchain Core Rust Engineer | 727.ventures)

**Dominik Krížo** (Blockchain Developer | 727.ventures)

### Contact

- **Contact Name:** Markian Ivanichok
- **Contact Email:** markian@727.ventures
- **Website:** [727.ventures](727.ventures)

### Legal Structure

- **Registered Address:** The registered office shall be in Coastal Building, Wickham’s
Cay II, P. O. Box 2221, Road Town, Tortola, VG1110, British Virgin Islands.
- **Registered Legal Entity:** Seven2seven Ventures Ltd

### Team's experience

**Markian Ivanichok**  
CEO of 727.ventures, Blockchain entrepreneur, Software Engineer.  
Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster. Later, co-founded 727.ventures, the Polkadot venture studio that is dedicated to building and creating of Polkadot’s ecosystem.

**Green Baneling**  
Blockchain Core Developer  
Primary programming languages are: C++, Go, Rust
Finished the faculty of applied mathematics(Master degree). Participated in programming competitions during education. Has worked as a programmer for around 6 years.
Was a freelancer the first year, creating an application for IOS(Swift), creating modules for the desktop application on C++. After that, spent 2 years in a company which created software for TV devices(C++/ Haxe).  After which, for 3 years, worked on different blockchain projects(C++/Go/Rust/Solidity/Js).

**Dominik Krížo**  
Blockchain Developer  
Started programming own games at age of 15 as a hobby, then went to University studying informatics and object oriented programming, becoming an Android developer in 2018. In 2017 he started his crypto venture by investing in BTC and Ethereum and getting more knowledge regarding smart contracts and DeFi protocols during DeFi summer 2020. As a programmer, he wanted to know more behind the scenes of smart contracts, so he started to develop his own smart contract applications for Ethereum and then becoming a Rust and Ink! developer in , since he believes that WASM with its benefits over EVM is the future of smart contract applications. As a part of his Android developer career, Dominik was working on porting of applications from C++ to Android/Java, for which he also worked on a tool to ease this process, describing the process of transformation of code base from one language to another in his bachelor's thesis.

### Team Code Repos

* https://github.com/727-Ventures
Openbrush, sol2ink, typechain

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* https://github.com/xgreenx

### Team LinkedIn Profiles (if available)

* https://www.linkedin.com/in/mivanichok/

## Development Status :open_book:

The standard is already in development.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 10 weeks
- **Full-Time Equivalent (FTE):** 2.5
- **Total Costs:** $63.000

### Milestone 1 E

- **Estimated duration:** 10 weeks
- **FTE:**  2.5
- **Costs:** $63.000

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant. (Content, language and medium should reflect your target audience described above.) |
| 1. | Proposal for NFT 2.0 standard | We will create a new PSP for NFT 2.0 and optimize it to reflect possible requested changes and improvements. |
| 2. | Implement the NFT 2.0 standard | We will implement the NFT 2.0 standard once the PSP is accepted as part of Openbrush. |
| 3. | Implement cross-chain compatibility of the standard | We will implement the cross-chain compatibility of NFT 2.0. |
| 4. | Implement the first extensions of the standard | We will implement the initial extensions for NFT 2.0 defined in the PSP proposal. |
| 5. | Implement examples | We will implement the examples of usage of this standard as well as its extensions. |

## Future Plans

Current plans for the future include standardizing new emerging extensions used by different implementations of this standard, as well as keeping up with emerging requests fulfilling the needs of the users of this standard.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation
