# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
> 
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Static Resource Analysis for Substrate Pallets
- **Team Name:** ChainSecurity
- **Payment Address:** Payment details are communicated privately
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

Unlike blockchains such as Ethereum, fees in Substrate are not metered during runtime execution of transactions, but defined programmatically through the so called *weights functions*. A weight function summarizes execution time and the reads and writes to storage that an entry point makes. Critically, the weight function is a trusted code, and if such a function severely underestimates the computational cost of a transaction, then the Substrate chain becomes vulnerable to denial of service attacks.

Moreover, implementing weights functions is an error-prone task. A major difficulty that we would like to address with this proposal, is that to implement weights functions, pallet developers need to correctly reason about the worst-case resource consumption of pallet entry points. We propose to create a research prototype tool for static worst-case resource analysis of Substrate pallets. As input, the tool will receive the Rust source code of a pallet and an entry point of the pallet. The output will be a symbolic expression that bounds from above the resource usage of the entry point as a function of its inputs. The analyzed resources will be the storage reads and writes and virtual time defined by a cost model on Rust operations. The project itself is part of our long-term goals to build static analysis tools for smart contract development.

### Background

As any concurrent system, blockchains need to allocate computational resources for the execution of user requests (transactions). In the permissionless setting, anyone can submit transactions, opening the system to denial of service attacks by untrusted actors. To prevent such attacks, permissionless systems place limits on how much resources a user can consume. In systems such as web sites, limits are typically quotas assigned to network addresses. However, attackers could employ various methods to relatively cheaply take control over enough addresses to launch a successful attack.  Blockchain systems usually take a different approach, according to which all users pay a fee upfront for each request. That fee should cover the costs of the resources spent, but also be high enough to make denial of service attacks prohibitively expensive.

To determine the right fee amount, the system needs to estimate how much resources does a transaction execution consume. This requires the definition of a *resource metric*, and a mechanism to calculate the metric. Metrics could be real resources such as execution time, or virtual resources such as the "gas" of Ethereum. A popular mechanism for calculating the metric is to directly meter the resource usage during execution. The execution proceeds as long as the fee payed upfront covers the metered resources. Metering is a generic mechanism, but it adds its own runtime overhead, and produces the full resource usage only after execution. An alternative, employed by the Substrate framework, is to let the developers program a specialized function that calculates the metric (called the *weight* in Substrate) for a specific entry point. Of course, the whole point of the function is to calculate the metric without incurring (much) overhead, in which case we have traded the genericity of direct metering for a calculation that can be done cheaply and in-advance.

### Motivation

Substrate is the main framework for developing Polkadot parachains, and it is expected that these parachains will be updated frequently. Together with the realistic threat of blockchains being attacked without a direct financial benefit, but the indirect one of harming one blockchain for the benefit of another (see [blockchain wars](https://www.coindesk.com/markets/2019/12/12/hold-tight-here-come-the-blockchain-wars/)), Polkadot is facing an uphill battle to ensure that each parachain isn't able to hurt the relaychain. Only an automated way to ensure that the weight function is correct can ensure both rapid innovation and security in this regard.

However, deriving a correct weight function of an entry point is a non-trivial and error-prone process. The developer has to: (1) analyze the worst-case behaviors of the entry point in question; (2) write specialized benchmarks for these behaviors; (3) run the benchmarks and derive the weight function from the results. Naturally, one wants to automate these steps as much as possible. Substrate already has a benchmarking tool that runs benchmarks and collects the statistics (execution time, number of reads and writes to storage) that are needed to derive the weight function. This proposal focuses on the first point: statically analyzing worst-case behaviors of the code

Ideally, a static analysis would be able to derive the weight function itself.  Because weights account for execution time, this implies that the static analysis needs to bound the worst-case execution time. This is known as "worst-case execution time estimation" (WCET for short) and is a well-established field of research.[^wcet-survey] WCET analyses combine traditional techniques (e.g., flow analysis) with hardware models, in order to reason about actual execution times. Reasoning about hardware itself is challenging enough, and WCET analyses also face other difficulties. To estimate real time, one needs to analyze the low-level machine code that the source code compiles to. This code contains implementation details (e.g., concrete data structures instead of abstract data types) that obfuscate information needed to reason about execution time. Such challenges put extra limits on the class of programs that can be analyzed precisely. For example, WCET analyses traditionally focus on programs whose loops iterate a fixed (known in advance) number of times. For Substrate, real time estimation is even more difficult, because pallets do not compile to a fixed hardware architecture, but to WebAssembly, which is an intermediate language, that later gets compiled (either ahead of time or just in time) or even interpreted.

An alternative to WCET is to give up on estimating real execution time, and instead define and estimate a virtual time or more generally any resource that accounts for time and possibly other costs. A virtual resource could be defined more simply (e.g., no hardware models), defined at the source level, thus abstracting away low-level implementation details, and therefore, analyzed more simply. Of course, this approach relies on the assumption that the later transformations of the source code (e.g., compilation) do not change/worsen the asymptotic resource consumption of the program. Virtual resources are employed in traditional complexity analysis, and moreover are already standard in the blockchain space, e.g., Ethereum has the "gas" virtual resource. Moreover, automated static analysis for such kind of resources (*static resource analysis*) is also a well-established field which we can draw techniques from (e.g., [^michelson-cost-analysis][^user-definable-resource][^difference-constraints][^cost-analysis-object-oriented][^compositional-recurrence-analysis][^denotational-cost-semantics][^hoare-time][^types-with-potential][^unifying-type-theory]). That is why, in this proposal we shall be pursuing worst-case analysis of virtual resources (e.g., virtual time) and not real resources (e.g., real execution time).

[^wcet-survey]: Reinhard Wilhelm, Jakob Engblom, Andreas Ermedahl, Niklas Holsti, Stephan Thesing, David Whalley, Guillem Bernat, Christian Ferdinand, Reinhold Heckmann, Tulika Mitra, Frank Mueller, Isabelle Puaut, Peter Puschner, Jan Staschulat, and Per Stenström. 2008. The worst-case execution-time problem—overview of methods and survey of tools. *ACM Trans. Embed. Comput. Syst.* 7, 3 (May 2008), 36:1-36:53. DOI:https://doi.org/10.1145/1347375.1347389

[^michelson-cost-analysis]: Víctor Pérez, Maximiliano Klemen, Pedro López-García, José Francisco Morales, and Manuel Hermenegildo. 2020. Cost Analysis of Smart Contracts Via Parametric Resource Analysis. In *Static Analysis* (Lecture Notes in Computer Science), Springer International Publishing, Cham, 7–31. DOI:https://doi.org/10.1007/978-3-030-65474-0_2)

[^user-definable-resource]: Jorge Navas, Mario Méndez-Lojo, and Manuel V. Hermenegildo. 2009. User-Definable Resource Usage Bounds Analysis for Java Bytecode. *Electronic Notes in Theoretical Computer Science* 253, 5 (December 2009), 65–82. DOI:https://doi.org/10.1016/j.entcs.2009.11.015

[^difference-constraints]: Moritz Sinn, Florian Zuleger, and Helmut Veith. 2015. Difference constraints: an adequate abstraction for complexity analysis of imperative programs. In *2015 Formal Methods in Computer-Aided Design (FMCAD)*, 144–151. DOI:https://doi.org/10.1109/FMCAD.2015.7542264

[^cost-analysis-object-oriented]: Elvira Albert, Puri Arenas, Samir Genaim, German Puebla, and Damiano Zanardini. 2012. Cost analysis of object-oriented bytecode programs. *Theoretical Computer Science* 413, 1 (January 2012), 142–159. DOI:https://doi.org/10.1016/j.tcs.2011.07.009

[^compositional-recurrence-analysis]: Azadeh Farzan and Zachary Kincaid. 2015. Compositional recurrence analysis. In *2015 Formal Methods in Computer-Aided Design (FMCAD)*, 57–64. DOI:https://doi.org/10.1109/FMCAD.2015.7542253

[^denotational-cost-semantics]: Norman Danner, Daniel R. Licata, and Ramyaa Ramyaa. 2015. Denotational cost semantics for functional languages with inductive types. *SIGPLAN Not.* 50, 9 (August 2015), 140–151. DOI:https://doi.org/10.1145/2858949.2784749

[^hoare-time]: Maximilian P. L. Haslbeck and Tobias Nipkow. 2018. Hoare Logics for Time Bounds. In *Tools and Algorithms for the Construction and Analysis of Systems* (Lecture Notes in Computer Science), Springer International Publishing, Cham, 155–171. DOI:https://doi.org/10.1007/978-3-319-89960-2_9

[^types-with-potential]: Jan Hoffmann. 2011. *Types with potential: polynomial resource bounds via automatic amortized analysis*. epubli-Verl, Berlin.

[^unifying-type-theory]: Vineet Rajani, Marco Gaboardi, Deepak Garg, and Jan Hoffmann. 2021. A unifying type-theory for higher-order (amortized) cost analysis. *Proc. ACM Program. Lang.* 5, POPL (January 2021), 27:1-27:28. DOI:https://doi.org/10.1145/3434308

### Project Details

The goal of the project is to design and implement a research prototype that statically analyzes the resource usage of Substrate pallets, more specifically, pallets coded in the Rust programming language. Given a pallet and an entry point, the analysis should extract a symbolic expression that bounds from above the worst-case resource usage of the entry point. The analysis should support a fragment of Rust enough to analyze the following standard Substrate pallets:

* `balances`,

* `identity`,

* `vesting`,

* `multisig`,

* `utility`.

The implementation will need (at least) the following components:

* a cost model (defining the analyzed resource) that at accounts for (virtual) time spent and possibly for other resources, such as bits read or written to storage.

* a well-defined fragment of Rust to be supported;

* an abstract domain for worst-case resource estimation, e.g.,
  
  * a resource-aware extension to Rust's type system ([^unifying-type-theory][^towards-automatic][^sized-types-inference][^inferring-cost-equations]), or
  
  * a resource-aware Hoare-logic (see [^hoare-time][^a-fistful-of-dollars][^amortized-with-separation-logic]), and such that
  
  * the abstract domain should leverage Rust's type system as much as possible;

* a modular analysis algorithm for the chosen abstract domain;

* auxiliary analysis to help with precision, e.g., interval analysis, and also to deal with Substrate's idiosyncrasies, such as the heavy use of macros, definition of storage fields through custom types, etc.;

* a specification of the relevant parts of the Rust standard library and Substrate. 

A standard challenge to every static analysis is the precise analysis of loops and recursion. Our analysis will target precision only for a limited number of loop/recursion patterns. Another challenge would be to simultaneously handle higher-order functional and imperative features (see, e.g., [^functional-imperative][^complexity-higher-order]). Here, we will again aim to support enough patterns to cover our target pallets. Similarly, we shall not aim to support the full Rust language, but a fragment sufficient for the targeted pallets.

We plan to implement the static analysis algorithm on top of the `rustc` compiler. The tool shall be runnable as a `cargo` plugin.

The project is strictly about developing a research prototype. The prototype will provide only a basic user experience through a command-line interface, and no integration with IDEs/text editors.  In the future, the prototype could grow into a production tool. (Nonetheless, note the inherent limitations to static analysis coming from undecidability.  Even production ready tools can be improved indefinitely.) 

[^sized-types]: John Hughes, Lars Pareto, and Amr Sabry. 1996. Proving the correctness of reactive systems using sized types. In Proceedings of the 23rd ACM SIGPLAN-SIGACT symposium on Principles of programming languages (POPL ’96), Association for Computing Machinery, New York, NY, USA, 410–423. DOI:https://doi.org/10.1145/237721.240882

[^sized-types-inference]: Martin Avanzini and Ugo Dal Lago. 2017. Automating sized-type inference for complexity analysis. *Proc. ACM Program. Lang.* 1, ICFP (August 2017), 43:1-43:29. DOI:https://doi.org/10.1145/3110287

[^inferring-cost-equations]: Pedro B. Vasconcelos and Kevin Hammond. 2005. Inferring Cost Equations for Recursive, Polymorphic and Higher-Order Functional Programs. In *Implementation of Functional Languages* (Lecture Notes in Computer Science), Springer, Berlin, Heidelberg, 86–101. DOI:https://doi.org/10.1007/978-3-540-27861-0_6

[^towards-automatic]: Jan Hoffmann, Ankush Das, and Shu-Chun Weng. 2017. Towards automatic resource bound analysis for OCaml. In *Proceedings of the 44th ACM SIGPLAN Symposium on Principles of Programming Languages* (POPL 2017), Association for Computing Machinery, New York, NY, USA, 359–373. DOI:https://doi.org/10.1145/3009837.3009842]

[^a-fistful-of-dollars]: Armaël Guéneau, Arthur Charguéraud, and François Pottier. 2018. A Fistful of Dollars: Formalizing Asymptotic Complexity Claims via Deductive Program Verification. In *Programming Languages and Systems* (Lecture Notes in Computer Science), Springer International Publishing, Cham, 533–560. DOI:https://doi.org/10.1007/978-3-319-89884-1_19

[^amortized-with-separation-logic]: Robert Atkey. 2011. Amortised Resource Analysis with Separation Logic. *Logical Methods in Computer Science* Volume 7, Issue 2, (June 2011). DOI:https://doi.org/10.2168/LMCS-7(2:17)2011

[^functional-imperative]: Weihao Qu, Marco Gaboardi, and Deepak Garg. 2019. Relational cost analysis for functional-imperative programs. *Proc. ACM Program. Lang.* 3, ICFP (July 2019), 92:1-92:29. DOI:https://doi.org/10.1145/3341696

[^complexity-higher-order]: James Avery, Lars Kristiansen, and Jean-Yves Moyen. 2010. Static Complexity Analysis of Higher Order Programs. In *Foundational and Practical Aspects of Resource Analysis* (Lecture Notes in Computer Science), Springer, Berlin, Heidelberg, 84–99. DOI:https://doi.org/10.1007/978-3-642-15331-0_6

### Ecosystem Fit

The static analysis tool targets developers of Substrate pallets written in Rust, trying to help with the implementation of weight functions. The main benefit of such a tool is to give confidence to pallet developers that their weights functions are correct, that is, that the weights function mitigate denial of service attacks. As a side effect it can potentially hint the presence of errors. Moreover, such a tool can also be very useful when auditing Substrate chains, notably during onboarding or upgrading of a Polkadot parachain. To the best of our knowledge, there are no such tools for Substrate. There are similar tools for other ecosystems, e.g., Perez et al. 2020[^michelson-cost-analysis] implement a tool for gas analysis of Tezos smart contracts (at the Michelson level).

## Team :busts_in_silhouette:

ChainSecurity is an established blockchain security company with a proven track record in finding [critical security vulnerabilities](https://medium.com/chainsecurity/constantinople-enables-new-reentrancy-attack-ace4088297d9), [innovative research](https://files.sri.inf.ethz.ch/website/papers/sp20-verx.pdf) and tool development ([1](https://github.com/eth-sri/securify2), [2](https://chainsecurity.com/polpatrol-validator-for-polkadot-runtimes/)). Our mission is to make the blockchain space secure and trustworthy for people, companies, and governments alike.

ChainSecurity is proudly independent and fully self-owned by its security experts from the renowned universities ETH Zurich, EPFL Lausanne and others. We are trusted by 100+ blockchain companies and established corporations with security audits and services. We have secured complex systems for top blockchain clients, such as decentralized finance (DeFi) projects, and multinational organizations, such as banks and industrial consortia. Some examples of our work can be found [here](http://chainsecurity.com/audits/).

### Team members

The ChainSecurity team consists of a world-class team of blockchain security engineers. The Static Resource Analysis for Substrate Pallets project will be executed by Dr. Dimitar Dimitrov and Simon Perriard. Dimitar is a researcher in the field of program analysis (see profile below) and has been awarded the prestigious [ETH Medal for outstanding doctoral theses](https://inf.ethz.ch/news-and-events/spotlights/2020/11/eth-medal-doctoral-thesis.html) from ETH Zurich, which ranks [among the best](https://inf.ethz.ch/department/awards-rankings/rankings.html) universities for computer science globally.

- Dr. Dimitar Dimitrov
- Simon Perriard

### Contacts

- **Technical Matters:** Dr. Dimitar Dimitrov [<dimitar.dimitrov@chainsecurity.com>](mailto:dimitar.dimitrov@chainsecurity.com)
- **Legal Matters:** Matthias Egli [matthias.egli@chainsecurity.com](mailto:matthias.egli@chainsecurity.com)

### Legal Structure

- **Registered Address:** Dufourstrasse 43, 8008 Zurich, Switzerland
- **Registered Legal Entity:** Decentralized Security AG

### Team's experience

ChainSecurity in collaboration with ETH Zurich has developed on the first static analyzers for EVM, [Securify](https://github.com/eth-sri/securify2). Another collaboration with ETH Zurich resulted in [VerX](https://verx.ch/), the first verifier of Ethereum smart contracts that supported the verification of several smart contracts connected together. The team was further involved in creating a validator for Polkadot runtimes ([1](https://chainsecurity.com/polpatrol-validator-for-polkadot-runtimes/)) which was supported through a Web3 Foundation grant.

### Team Code Repos

- [ChainSecurity - GitHub](https://github.com/ChainSecurity)
- [ChainSecurity/scilla_static_checker](https://github.com/ChainSecurity/scilla_static_checker)

#### Individual Profiles

- [Dr. Dimitar Dimitrov - Google Scholar](https://scholar.google.com/citations?user=pxzF6o0AAAAJ)
- [Simon Perriard - GitHub](https://github.com/simon-perriard/)

### Team LinkedIn Profiles

- [Dr. Dimitar Dimitrov](https://www.linkedin.com/in/dimitar-dimitrov-b9a829200/)
- [Simon Perriard](https://www.linkedin.com/in/simonperriard)

## Development Status :open_book:

We are at a very early design stage. Some exploratory code can be found at [simon-perriard/saft](https://github.com/simon-perriard/saft).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  10 months
- **Total Costs:** Cost details are communicated privately

### Milestone 1 — A Rudimentary Prototype

- **Estimated duration:** 2 months
- **FTE:**  3
- **Costs:** Costs communicated privately

| Number | Deliverable             | Specification                                                                                                                                     |
| ------:| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                 | MIT                                                                                                                                               |
| 0b.    | Documentation           | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the prototype.                |
| 0c.    | Testing Guide           | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.    | Docker                  | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                        |
| 1.     | Cost Model              | We will define a rudimentary cost model for a fragment of Rust or Rustc's HIR/MIR.                                                                |
| 2.     | Specification Formalism | Define a simplified method for specifying the cost of components such Rust structs and functions.                                                 |
| 3.     | Library Specification   | We will specify the costs of a fragment of the Rust standard library and Substrate framework.                                                     |
| 4.     | Rudimentary Analysis    | We will implement a rudimentary static resource analysis that supports code free of loops, recursion, or user-defined higher-order functions.     |

### Milestone 2 — Formalize the Analysis

- **Estimated duration:** 2 months
- **FTE:**  4
- **Costs:** Costs communicated privately

| Number | Deliverable           | Specification                                                                                                                                          |
| ------:| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0a.    | License               | MIT                                                                                                                                                    |
| 0b.    | Documentation         | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the prototype.                     |
| 0c.    | Testing Guide         | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.      |
| 0d.    | Docker                | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                             |
| 1.     | Operational Semantics | We will extract a core calculus that corresponds to the supported fragment of the Rust language and define its operational semantics.                  |
| 2.     | Abstract Semantics    | We will formalize the analysis as an abstraction of the operational semantics of the calculus (either in Galois connection style or as a type system). |
| 3.     | Prove Correctness     | We will prove the correctness of the analysis.                                                                                                         |
| 4.     | Refactor Tool         | We will refactor the tool to match the formalization of the analysis.                                                                                  |

### Milestone 3 — Basic Loops and Higher-Order Functions

- **Estimated duration:** 2 months
- **FTE:**  3
- **Costs:** Costs communicated privately

| Number | Deliverable                           | Specification                                                                                                                                                                                                    |
| ------:| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                               | MIT                                                                                                                                                                                                              |
| 0b.    | Documentation                         | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the prototype.                                                                               |
| 0c.    | Testing Guide                         | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                |
| 0d.    | Docker                                | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                                       |
| 1.     | Identify Patterns in Standard Pallets | We will extract looping patterns and patters of higher-order functions from Substrate's standard pallets.                                                                                                        |
| 2.     | Extend the Analysis                   | We will extend the formal analysis previously developed to support the the extracted patterns.                                                                                                                   |
| 3.     | Implement the Extension               | We will implement the extended analysis in the prototype previously developed, and also implement any prerequisite analyses needed, such as interval analysis, or integrating a solver for recurrence relations. |
| 4.     | Technical Report                      | We will compile a technical report about the project, that includes details about the implementation, as well as the previously developed formalization.                                                         |

## Future Plans

The aim of this project is to develop an proof of concept with a command line interface. In the future we plan to extend the proof of concept to a more complete tool, and possibly integrate it into rust-analyzer and Visual Studio Code. Possible extensions would be to include models that predict real time from virtual time[^early-execution], and static profiling[^static-profiling-general][^static-profiling-transformational].

[^static-profiling-general]: P. Lopez-Garcia, M. Klemen, U. Liqat, and M. V. Hermenegildo. 2016. A general framework for static profiling of parametric resource usage*. *Theory and Practice of Logic Programming* 16, 5–6 (September 2016), 849–865. DOI:https://doi.org/10.1017/S1471068416000442

[^static-profiling-transformational]: R. Haemmerlé, P. López-García, U. Liqat, M. Klemen, J. P. Gallagher, and M. V. Hermenegildo. 2016. A Transformational Approach to Parametric Accumulated-Cost Static Profiling. In *Functional and Logic Programming* (Lecture Notes in Computer Science), Springer International Publishing, Cham, 163–180. DOI:https://doi.org/10.1007/978-3-319-29604-3_11

[^early-execution]: Peter Altenbernd, Jan Gustafsson, Björn Lisper, and Friedhelm Stappert. 2016. Early execution time-estimation through automatically generated timing models. *Real-Time Syst* 52, 6 (November 2016), 731–760. DOI:https://doi.org/10.1007/s11241-016-9250-7

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We have been past receipients of a Web3 grant.
