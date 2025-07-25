# Preparing Polkadot's pallet_balances for Formal Verification using the Inference Framework

- **Team Name:** Inferara Corp. Ltd.
- **Payment Address:** 13zmwfLi7SSVeFsWybmPNEu7awsZzfn29cTAMLbh2baG7CLa (DOT & USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1


## Project Overview :page_facing_up:

### Overview
Research potential ways to integrate formal verification into the development process of Polkadot, starting with `pallet_balances`.

- A brief description of your project.
  
This project is an R&D initiative to further secure Polkadot and subsequent parachains. With the recent increase in discussions of stablecoins across all ecosystem, we observed the benefit of gaining mathematical assurance for the safety of functions within `pallet_assets` for future integration of Circle’s CCTP (Cross Chain Transfer Protocol).
Since pallets are an essential part of the Polkadot infrastructure, we want to take a deep look at exactly how the current logic functions. `pallet_balances` is used by every token on Polkadot. Within `pallet_balances`, the `fungible` traits are what will be researched specifically.
We plan how to apply our Rocq-based framework [Inference](https://github.com/Inferara/inference-language-spec/blob/main/README.md) to Polkadot’s fungible trait set.
Adaptation of the `fungible` trait set for formal verifications within our non-deterministic WASM framework will enable complete trait extraction with validated semantic mapping ready for formal specification.

- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.
  
 Inference is designed as a domain‑specific formal specification language. By blending conservative procedural syntax with novel semantics of controllable non-determinism, it aims to let developers write formal specifications in a way that resembles writing unit tests. Designed with bearing similarities to classical imperative language in mind, Inference can be quickly understood and used by existing Polkadot developers. Through intermediate representation of purposefully extended WASM, such specifications are supposed to be translated into Rocq theories, allowing computer-assisted formal verification in a state-of-the-art interactive theorem prover. Inference seeks to bridge the gap between theorem proving and practical application development in blockchains. This approach provides a way to integrate formal verification into the development process of Polkadot projects.

- An indication of why your team is interested in creating this project.

Our team always has security in mind as the most important part of any infrastructure, chain, or protocol. As mentioned in the previous section, we plan to make theorem proving more accessible for Web3 development.

Due to the powerful capabilities of the Polkadot ecosystem, we would like to highlight its strengths by applying our non-deterministic approach to formal verification. By being an open-source project, we hope it will be the starting point to inspire more development and research opportunities for the Polkadot ecosystem.

We want to enable more developers and researchers to explore formal verification by mitigating the common hindrances.

- An indication if your project is academic research, i.e., intended to be published in an academic peer-reviewed venue, or a technical one, to be published as a technical report on the internet.

The research will be published as a techincal report on the internet with a dedicated github repository including documentation and source code.



### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- The problem(s) that you want to investigate, and why these are important.

The Polkadot ecosystem, with its complex, parachain architecture, faces significant challenges in ensuring the correctness and security of its runtime logic, consensus mechanisms, and cross-chain interactions. Traditional testing and auditing methods, while useful, are insufficient to guarantee the absence of critical vulnerabilities. However, existing formal verification methods impose a steep learning curve, requiring developers to master complex mathematical logic just to comprehend formal specifications—let alone write or verify them. This creates a significant barrier to adoption, to the point that no one even considers it because of a major inhibiting effect on the speed of development.

To address this challenge, this research proposes a novel verification paradigm where specifications are expressed in an imperative style, closely resembling traditional unit tests. By shifting from declarative formal logic to test-like specifications, the approach aims to make formal verification more intuitive and accessible for Polkadot developers. The goal is to enhance security without sacrificing productivity, enabling rigorous correctness guarantees for key components such as NPoS consensus, parachain interoperability, and on-chain governance—while minimizing the need for deep expertise in formal methods.

- Research questions/hypothesis.
  
Can Polkadot’s fungible trait set—a core component of the asset management system—be formally specified in an imperative, test-like manner without sacrificing mathematical rigor?

Our hypothesis is that by redefining formal specifications as controllably non-deterministic assertions mirroring unit tests, developers can definitively state key properties (e.g., conservation of supply, secure transfers, and correct access control) while avoiding the complexity of mathematical descriptions. This work will evaluate whether such an approach can achieve practical adoption by encoding the `fungible` trait’s logic in an **Inference verification framework**, and paving the road to **computer-assisted check of compliance** with desired invariants.

The outcome could set a precedent for scalable, developer-friendly verification across Polkadot’s runtime modules.

- The methodology that will be applied.
  
This research will apply the under-development **Inference DSL framework**—a specification language with unit-test-like syntax—to formal verification of Polkadot's `fungible` trait. The methodology focuses on:

1. **Formal Modeling**: Developing a comprehensive formal model of the `fungible` trait's core operations (`transfer`, `mint`, `burn`) and their invariants (supply conservation, authorization rules) using the DSL's imperative style.
2. **WASM Compilation**: Compiling these specifications into specialized WASM modules that incorporate controlled non-determinism to model para-virtual branching.
3. **Validation**: Rigorously validating that the compiled WASM artifacts correctly encode the intended behavior through systematic example-based testing and verification.

The WASM modules will serve as formal foundations for future **Rocq-based deductive reasoning**, though their theoretical formalization falls outside the current scope. In the next stages, this work will demonstrate how Polkadot's runtime developers can leverage novel verification ideas to write intuitively comprehensible specifications while maintaining a path to full formal verification.
  
- The expected results and how they would be double-checked by the grants team (reproducibility of the data analysis).

  **Expected Results**:
  - WASM modules enabling future verification.
  
  **Reproducibility**:
  - Open-sourcing all specifications and WASM modules.
  - Providing step-by-step guides for the grants team to confirm correspondence between WASM modules and `fungible` traits.

- Research for relevant related work or declare how the literature review will be conducted.

   **Related Work**:
  - Existing formal verification tools for blockchain (e.g., **K-framework, TLA+, CertiK**).
  - Prior work on imperative-style formal methods (e.g., **Dafny, F***).
  - Polkadot-specific runtime security research (e.g., **FRAME security audits**).

  **Literature Review Methodology**:
  - Systematic review of academic papers (IEEE, ACM) and industry reports (Web3 Foundation, Parity).
  - Comparative analysis of existing Polkadot verification efforts vs. our proposed approach.





- Intended venue for results publication and the timeline for publication.
  
  **Publication Venues**:
  - **Academic**: *IEEE S&P Blockchain Workshop, ACM CCS* (if theoretical contributions are substantial).  
  - **Industry**: *Polkadot Research Portal, Substrate Developer Hub*.



### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

Our research project is a security enhancement to the Polkadot ecosystem. As a research endeavor, it doesn't directly interact with users or the community like a typical DApp or development tool would. Instead, its value is that it will enhance the overall robustness of the Polkadot ecosystem. Although the initial goal of this proposal is to prepare the ground for a specification of `fungible` trait to illustrate semantic mapping between traits and the WASM model, with continued research, it allows for more impactful results. Through the continued research this proposal enables, it could lead to even more significant advancements and potential improvements for security enhancements.

This could include potential findings of unexpected code behavior or bugs through further completed formal verification. 

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

The main target audiences are protocol researchers and developers within the Polkadot ecosystem.  For researchers, it includes those who are already familiar with formal verification, as well as those who are interested in starting while benefiting from a less steep learning curve.


- What need(s) does your project meet?
  
Our project focuses on the need to explore additional formal verification methods to further enhance the security of Polkadot. This is a novel approach, complicated but of great benefit for Polkadot to stay innovative.

- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.

For the needs of formal verification, there have been many things we have identified as needs. In regard to this research project, we originally identified these needs through observations of the Polkadot forum. While reading about the [Business Development update](https://forum.polkadot.network/t/a-polkadot-hub-launch-update-from-business-development-group-april-2025/12361), we observed the future goals, specifically related to `pallet_assets`. What began as a regular observation on the status of [Polkadot Hub](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs) turned into further exploring the Polkadot SDK docs from Paritytech.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  
No.

  - If not, are there similar projects in related ecosystems?

Similar Projects in related ecosystems

https://pruvendo.com/ - Formal specification and Deductive formal verification

https://formal.land/ - Similar Rust-based formal verification

[Certora](https://www.certora.com/) - As Certora’s Verification Language (CVL) and Prover are tightly coupled with Solidity, it would be easier to recreate something similar from the ground up instead of trying to adapt its existing tools if used outside of the Ethereum ecosystem.


Another core difference between Inferara and Certora is the level of abstraction behind core mathematical formalism. Certora has a more classical approach to rule-based invariant checking that roughly corresponds to first-order logical statements. It somewhat limits the expressive power of spec, as more complex properties sometimes are hard to state in such restrictive semantics, but allows automated proof generation by SMT-solvers. We, on the other hand, are trying to build a language that would allow imperative-like equivalent of higher-order logic formulas (much more expressive), targeting computer-assisted (not fully-automated) proving techniques.


## Team :busts_in_silhouette:

### Team members

- Name of team leader
  
  Georgii Plotnikov (Rust Lead)

- Names of team members

  Maxim Savchenko (Formal Methods Lead, PhD in mathematics)


### Contact

- **Contact Name:** Georgii Plotnikov
- **Contact Email:** georgii@inferara.com
- **Website:** [Inferara.com](https://inferara.com)

### Legal Structure

- **Registered Address:**
  
〒810-0041 日本 福岡県福岡市 中央区大名2-6-11 
  
  810-0041 2-6-11 Daimyo, Chuo-ku, Fukuoka-shi, Fukuoka, Japan

- **Registered Legal Entity:**  
  
Inferara Corp. Ltd.

### Team's experience

**Georgii Plotnikov**

Writing code since 2013\
Developing Web3 since 2022\
Started [Inferara](https://inferara.com) in Jan 2024\
[St. Petersburg Polytechnic University](https://english.spbstu.ru/), Mathematical modeling of information systems, MS.


**Maxim Savchenko**\
Researcher since 2005\
MSU Algorithmic Languages, MS\
[St Petersburg University](https://english.spbu.ru/), [Influence of additional information asymmetry on the solutions of non-antagonistic games](https://disser.spbu.ru/zashchita-uchenoj-stepeni-spbgu/882-savchenko-maksim-alekseevich.html), PhD\
[Mathnet Publications](https://www.mathnet.ru/php/person.phtml?option_lang=eng&personid=147678)




### Team Code Repos

- https://github.com/Inferara/tree-sitter-inference
- https://github.com/Inferara/inference-language-spec
- https://github.com/Inferara/inf-wasm-tools
- https://github.com/Inferara/merkle-tree-wasm-spec


Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/0xGeorgii
- https://github.com/Keyholder


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/0xgeorgii/

### Google Scholar Profiles (Or other research indexer profile, ex. Researchgate)

- [Mathnet Publications](https://www.mathnet.ru/php/person.phtml?option_lang=eng&personid=147678)

## Development Status :open_book:

If you've already started working on your project or it is part of a larger project, please provide a link and a description of the research here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- We have provided several code repositories in the previous section
- Our papers are available on our website [here](https://www.inferara.com/en/papers/)
- Blog post titled: [New Approach to Formal Verification Methods for Combating Vulnerabilities in Smart Contracts](https://www.inferara.com/en/blog/new-approach-to-formal-verification-smart-contracts/)


## Development Roadmap :nut_and_bolt:

### Overview
- **Total Estimated Duration**: 1 Month
- **Full-Time Equivalent (FTE)**: 1.25 FTE
- **Total Costs**: $10,000
- **DOT%**: 50%

### Milestone 1 of 1 
- **Estimated duration**: 1 month
- **FTE**:  1.5
- **Costs**: 10,000 USD

| Number | Deliverable             | Specification                                                                                                |
|--------|-------------------------|--------------------------------------------------------------------------------------------------------------|
| 0a.    | License                 | MIT.                                                                                                         |
| 0b.    | Documentation           | We will provide informative documentation on our research process and findings.                              |
| 0c.    | Reproducibility         | We will provide step-by-step verification guides for the grants team to independently validate results.      |
| 0d.    | Article Information     | An article that will include test-like fungible trait specifications & WASM modules.                         |
| 0e.    | Final Research Article  | We will publish a detailed research article that explains our research findings and results.                 |




## Future Plans

Please include here

- How you intend to use, enhance, and promote your project in the short term

We will continue to share our progress and interesting discoveries during the research.

- How do you intend to finance the project's long-term maintenance and development?

We anticipate that this research will pave the way for further exploration into implementing a theorem catalog and fully applying our verification methodology to Polkadot, thereby enabling a clear path to implementation verification.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

Personal recommendations by @bhargavbh & @takahser

- Previous grants you may have applied for.
  
We have not applied for any other Polkadot/Kusama grants.
