# Vanguard

- **Team Name:** Veridise
- **Payment Address:** Ethereum: 0x0f8a5076a56b7ECD761562551FAd11DF631447B2 (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/1069#issuecomment-1693802667)

## Project Overview :page_facing_up:

### Overview

Decentralized Finance (DeFi)  is taking off at a very rapid pace, and smart contracts running on the Polkadot ecosystem are starting to entirely revolutionize the landscape of modern commerce.  However, as with any technological revolution, this transformation ushers new security challenges that must be tackled head on: Because financial transactions are *automatically* executed by DeFi apps, bugs and security vulnerabilities in these programs can —and currently *do—* lead to significant amounts of financial loss. For example, over the past year alone, there have been repeated occurrences of so-called “flash loan attacks”, which exploit contract logic to manipulate the price of valuable assets, such as tokens, to obtain a purchase price well below its actual market value. In fact, according to many estimates, *over 1.3 Billion dollars* worth of funds have been stolen in the year 2021 alone, all because of some underlying software vulnerability.  If such numbers are not staggering enough,  add to this the fact that smart contracts are immutable once deployed: this means that there is no way to fix the vulnerability  post-deployment even *after* the problem has been discovered.

This is exactly why it is so crucial to ensure that the smart contracts on the Polkadot ecosystem are free of security vulnerabilities and that they function as intended *before* they are deployed on a distributed ledger. Here, at Veridise, our mission is to ensure the correctness of modern DeFi applications through state-of-the-art technology based on cutting edge formal verification research. 

Because many DeFi apps suffer from a common set of vulnerabilities (e.g., arithmetic overflows, flash loan vulnerabilities, transaction order dependence etc), a key component of the Veridise toolchain is a static analyzer, called Vanguard, for detecting such common vulnerabilities in ink! contracts. Because Vanguard is based on a technique called abstract interpretation, it is guaranteed to report a vulnerability if one exists (among the vulnerability types checked by Vanguard). 

### Project Details

Vanguard is a static smart contract analysis framework written in C++. It runs a suite of vulnerability detectors, prints visual information about contract details, and provides an API to easily write custom analyses. Vanguard enables developers to find vulnerabilities, enhance their code comprehension, and quickly prototype custom analyses. The Veridise team has been designing the product vision of the Vanguard for quite some time. We will go over the project details and provide references below for more in-depth context. 

*Static Analysis via Abstract Interpretation.* At a high level, most static analyzers are based on a paradigm known as “abstract interpretation”. Just as a regular *interpreter* for a programming language executes the program on *some specific* input, an *abstract interpreter* symbolically executes the program over *sets of inputs*. 

To make this discussion more concrete, consider a simple function F that takes an integer x and returns x*2 (let’s assume unbounded integers for the purposes of this discussion). A regular interpreter can tell us that F will return 2 when executed on 1 and that it will return 4 when executed on 2 etc. However, when we do abstract interpretation, we can ask questions about what F returns on entire *sets* of inputs. For example, an abstract interpreter can tell us that F will return a value in the range [2, 10] when x is in the range [1, 5] or that the return value of F is always an even integer for any input x.

So, how can an abstract interpreter do that? The key idea is to define the semantics of the programming language over some underlying *abstract domain*, where each element in the domain represents *a set of inputs*. Again, the best way to understand this concept is to contrast it against a standard interpreter for a programming language. We can think of an interpreter as a program that takes as input a mapping M from variables to concrete values and a code snippet S and produces a new mapping M’ from variables to values, as depicted below:

<img src="https://miro.medium.com/max/1400/1*HIophexilX7SeMT3wEhO-w.png" alt="drawing" width="600"/>

The idea behind an abstract interpreter is exactly the same except that it operates over *abstract values,* which are elements of an underlying so-called *abstract domain.* For instance, an abstract value could be an interval of the form [a, b] denoting a set of integers x such that a ≤ x ≤ b. Then, just a standard interpreter executes the program over a concrete input, an abstract interpreter executes the program over such abstract inputs: 

<img src="https://miro.medium.com/max/1400/1*IhNvOZShQjmvNZ1SyqaWJw.png" alt="drawing" width="600"/>


So what does it mean to execute a statement over abstract values? Let’s try to understand that through an example (again, assuming mathematical integers). Consider a statement like x = y+z, and suppose that our abstract values are intervals of the form [l, u]. If we know that y is in the range [a, b] and z is in the range [c, d], we can conclude that x is in the range [a+c, b+d]. This is precisely what we mean by *abstractly (symbolically) executing* a given statement! Now, how can we leverage abstract interpretation to detect smart contract vulnerabilities?

*Reentrancy Detection.*  One of the oldest DeFi attacks (responsible for the DAO Hack of 2016) is caused by “reentrancy”, which occurs when  a contract invokes a function of another contract before it finishes updating any necessary contract state (such as a contract variable tracking refunds). Since the target contract can invoke functions in the source contract (hence the name “reentrancy”), this will cause the vulnerable contract to use stale values. This, in turn, can allow an attacker to access resources that they don’t have any claim to. Commonly, such an attack is used to withdraw more funds from a contract than they actually have, as illustrated below:

<img src="https://miro.medium.com/max/1400/1*b9zTnJ7CRQgIE1du0WezIg.png" alt="drawing" width="600"/>


How to detect them: Such reentrancy vulnerabilities can be detected by statically checking that no storage variables are updated after an external function is called. In particular, the static analyzer needs to compute  which function calls can be made at every program point and which variables are updated. Then, if there exist two program points L1 and L2 such that (1) L1 can execute before L2, (2) L1 can invoke an external function, and (3) L2 can write to a storage variable, then there is a possible vulnerability in the code. It is worth noting that reentrancy vulnerabilities cannot be checked in a sound way using syntactic pattern matching — e.g., storage variables may be updated in subtle ways due to pointer aliasing and external functions may be called in non-obvious ways (e.g., through other function calls).

For more information, please refer to the following resources:
- Veridise Whitepaper [here](https://veridise.com/wp-content/uploads/2022/05/white-paper.pdf)
- Veridise Docs [here](https://veridise.medium.com/)


### Ecosystem Fit

It is well-known that bugs in blockchain ecosystem can have catastrophic consequences. As it stands today, the security landscape within the Polkadot ecosystem is not as mature as other ecosystems such as Ethereum. This is due to insufficient security tooling infrastructure in the ecosystem. Currently, the Polkadot ecosystem does not have the static analysis, symbolic execution, and other security tooling products as other major blockchains. By building the static analysis tooling products for ink! contracts, the Polkadot security landscape is hardened by utilizing the expertise from the Veridise team.

The target audience of the Vanguard analyzer are web3 developers who require a tool to ensure the robustness and security of their applications. Using the technical capabilities that Veridise provides, our project will meet the needs of the Polkadot community to harden their own ink! contracts away from commmon vulnerabilities such as DoS, ToD, Reentrancy, flashloan attack, and many others.

To the best of our knowledge, there is no comprehensive security tooling product for ink! contracts. The best option that the developers have is to leverage Linting rules that are supported by ink! 3.0. It is well-known that linting rules can only handle local and shallow patterns and they are completely insufficient for expressing common but serious vulnerabilities such as flashloan and reentrancy attacks. The only similar one is the Slither tool for Solidity. However, Vanguard differs from the Slither project in multiple ways. First, Slither can only support Solidity. On the other hand, Vanguard is language-agnostic and can easily support different versions of ink! language. Second, according to the results from our recent research paper, by evaluating both tools on the entire smart contracts from Etherscan, Vanguard significantly outperforms Slither in terms of both false positives and false negatives. 


## Team :busts_in_silhouette:

### Team members

- Yu Feng
- Jon Stephens
- Ben Mariano

### Contact

- **Contact Name:** Yu Feng
- **Contact Email:** yu@veridise.com
- **Website:** www.veridise.com

### Legal Structure

- **Registered Address:** 7109 Midwood Pkwy, Austin TX, USA, 78736
- **Registered Legal Entity:** Veridise INC.

### Team's experience

Founded by a team of well-known professors and researchers from academia, Veridise's cofounders collectively have over 30+ years of experience in formal verification, program analysis, and security. Veridise develops cost-effective security audits tooling products for dApps, regardless of the programming language they are implemented in or what blockchain platform they run on.  Leveraging our expertise in automated program analysis, Veridise provides state-of-the-art solutions for ensuring security of decentralized finance applications. If you’re interested in learning more information, please consider visiting our prior [research](https://veridise.com/#research).


### Team Code Repos

- https://github.com/veridise
- https://github.com/Veridise/Vanguard
- https://github.com/Veridise/libBlockchain

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/fredfeng
- https://github.com/stephensj2
- https://github.com/bmarwritescode

### Team LinkedIn Profiles (if available)

- https://fredfeng.github.io/
- https://stephensj2.github.io/
- https://bmarwritescode.github.io/

## Development Status :open_book:

Before applying for the Web3 Foundation Grant, the Veridise team conducted the following research:

- Published a research paper at the top-one security conference (Oakland'22) [here](https://www.computer.org/csdl/proceedings-article/sp/2022/131600b235/1A4Q46YLRrq)
- Published a [blog post](https://medium.com/veridise/detecting-smart-contract-vulnerabilities-with-static-analysis-f362c0671f57) about the technique behind Vanguard
- The focus for Vanguard will be automatic detecting common vulnerabilities on ink! contracts
- Spoke with David Hawig and Alberto Navarro from the Parity team regarding the development of Vanguard and the Web3 Grant application



## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**  2 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 30,000 USDC. 

### Milestone 1 — Implement Core Vanguard Framework

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 15,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the high-level overview of Vanguard as part of the grant, followed by a set of extensive examples.
| 1. | Basic infrastructure | We will build the basic infrastructure that is shared by all incoming detectors, including callgraph, alias analysis, and data-flow analysis.  |  
| 2. | Taint analysis | Many detectors can be reduced to static taint analysis. We will implement it as part of the core analysis |  
| 3. | Generic Vanguard API | Design and implement the generic API that will be extended by 3rd-party developers |  
| 4. | Basic Detectors | Implement basic detectors based on the core framework, including transaction order dependency, DoS, and uninitialized storage variables. |  



### Milestone 2 — Implement Common Vulnerability Detectors

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 15,000 USDC

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | In our medium website, we will publish an **article** that explains the functionality and usage of those detectors using real-world examples from the Polkadot ecosystem.
| 1. | Design unused-state detector | Unused-state variables can potentially increase the attack surface. We will implement a detector to identify unused-state variables   |  
| 2. | Improve Flashloan Detector | The current flashloan detector only works for very specific situations. It relies on someone calling balanceOf and tracks the taint to a transfer. I think that we can come up with a more generic version of the flashloan detector. |  
| 3. | Pay without Withdraw Detector | Add a detector that looks for contracts that will lock funds by having a payable function with no way of withdrawing the token.  | 
| 4. | Evaluation on ink! contracts | Coordinate with the Parity community to collect a curated list of ink! [contracts](https://github.com/paritytech/awesome-ink) that will be used to evaluate the effectiveness of Vanguard. |  




## Future Plans


- We will promote the project by giving talks in the community, writing tutorials and videos.
- We will also work closely with the developers and clients of the Parity ecosystem for getting feedback and refine our project.
- Our long-term plan is to make the tool become one of the default auditing tools for the Parity ecosystem.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Parity team / personal recommendation.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Our team collectively has over 30+ years experience in formal methods and static analysis, which setups the foundation of the project: https://veridise.com/#research
