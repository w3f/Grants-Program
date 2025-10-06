# Athena: Predictive Complexity Model for Poseidon Cryptanalysis using Gröbner Basis Attacks
- **Team Name:** MeCuadra
- **Payment Address:** 0xea99B3C34aE77A8CC49aB8Ffc4a388ec882952B9 (ERC20 USDC)
- **Level:** 2
## Project Overview :page_facing_up:
### Overview
- **Tag line:** First empirically-grounded security model for Poseidon hash functions against Gröbner basis attacks
- **Brief description:** This research develops "Athena," a predictive complexity model for Poseidon cryptanalysis using Gröbner basis attacks. The project addresses a critical gap in security analysis for ZK-friendly hash functions, directly supporting the Ethereum Foundation's Poseidon Cryptanalysis Initiative.
- **Integration with Substrate/Polkadot/Kusama:** While Poseidon is primarily used in Ethereum, this research contributes to the broader zero-knowledge proof ecosystem that is increasingly important for Polkadot parachains and Substrate-based applications requiring efficient ZK-proofs.
- **Team interest:** As a Master's student in Mathematical Sciences with specialization in Cryptography at the University of Havana, I am passionate about advancing cryptographic security through rigorous mathematical analysis and empirical validation.
- **Research type:** This is academic research intended for publication in peer-reviewed venues, specifically targeting cryptographic conferences and journals.

### Project Details

**Problems to investigate:**
- Current security analysis of Poseidon hash functions lacks empirical validation of Gröbner basis attack complexity
- Theoretical complexity bounds for Gröbner basis attacks are often much higher than practical observations
- No predictive model exists to estimate attack costs based on Poseidon parameters (RF, RP, t)
- The Ethereum Foundation's Poseidon Cryptanalysis Initiative identifies this as a critical research gap

**Research questions/hypothesis:**
- **Primary Hypothesis:** The practical complexity of Gröbner basis attacks against Poseidon, measured by the regularity degree (Dreg), exhibits linear growth with the number of rounds
- **Research Questions:**
  1. How does the regularity degree scale with Poseidon parameters in practice?
  2. Can we develop a predictive model for attack complexity?
  3. What are the practical security margins for current Poseidon deployments?

**Methodology:**
1. **Systematic Experimental Analysis:** Implement the three-step Gröbner basis attack methodology (DRL computation → LEX conversion → univariate resolution)
2. **Empirical Data Collection:** Measure regularity degrees and computational costs across different Poseidon configurations
3. **Statistical Modeling:** Develop regression models to predict attack complexity based on round parameters
4. **Validation:** Test the model against the Ethereum Foundation's 40-bit security challenge

**Data collection and analysis procedures:**
- Use computational algebra systems (Magma/Sage) for Gröbner basis computations
- Implement high-performance Poseidon variants in Rust for efficient experimental validation
- Use Lean theorem prover for formal verification of mathematical properties and attack complexity bounds
- Measure regularity degrees, memory usage, and computation time for various Poseidon configurations
- Apply statistical analysis to identify scaling relationships
- Validate predictions against known attack results using both experimental and formal methods

**Expected results and verification:**
- **Deliverable 1:** Empirical complexity measurements for Poseidon variants
- **Deliverable 2:** Athena predictive model with mathematical formulation
- **Deliverable 3:** Validation against Ethereum Foundation challenge
- **Verification:** All code and data will be open-source, with detailed documentation for reproducibility

**Relevant related work:**
- Grassi et al. (2019): HADES design strategy for Poseidon
- Koschatko et al. (2024): Gröbner basis cryptanalysis of algebraic hash functions
- Ethereum Foundation (2024): Poseidon Cryptanalysis Initiative
- Canteaut et al. (2020): Security analysis of STARK-friendly hash functions

**Intended publication venue:**
- **Primary:** [Journal of the University of Havana](https://revistas.uh.cu/rcm/) (indexed in zbMATH Open, Google Scholar, and other academic databases)
- **Secondary:** Cryptology ePrint Archive
- **Timeline:** Submit to conferences within 6 months of completion, with additional publication in university journal

**What this project will NOT provide:**
- It will not provide business or commercial applications
- It will not include tokenomics or economic analysis

### Ecosystem Fit
- **Where does your project fit into the ecosystem?** This research directly supports the security of zero-knowledge proof systems used across the Polkadot ecosystem. As parachains increasingly adopt ZK-proofs for privacy and scalability, understanding the security of underlying hash functions becomes critical.
- **Target audience:** ZK-proof developers, parachain teams implementing privacy features, cryptographic researchers, and security auditors working with zero-knowledge systems.
- **What need(s) does your project meet?** Provides empirical security analysis for Poseidon, enabling informed decisions about parameter selection and security margins in ZK-proof applications.
- **Similar projects:** No similar projects exist in the Polkadot/Substrate ecosystem. Related work exists in Ethereum ecosystem but lacks the empirical focus and predictive modeling approach of this research.

## Team :busts_in_silhouette:
### Team members
- B.Sc Enmanuel Cabrera (Team Leader)
- M.Sc Frank Ernesto (Supervisor)
### Contact
- **Contact Name:** Enmanuel Cabrera
- **Contact Email:** manudevcabrera@gmail.com
- **X (Twitter):** https://x.com/manudev97
### Legal Structure
- **Registered Address:** Universidad de La Habana, Facultad de Matemática y Computación, Edificio Felipe Poey, San Lázaro y L, Vedado, Plaza de la Revolución, La Habana, Cuba, CP 10400
- **Registered Legal Entity:** Universidad de La Habana
### Team's experience
Enmanuel Cabrera is a Master's student in Mathematical Sciences with specialization in Cryptography at the University of Havana. He has published research on zk-SNARKs for blockchain developers in the journal "Ciencias Matemáticas" (Vol. 38, No. 2, 2024), demonstrating expertise in zero-knowledge proof systems and cryptographic implementations. His academic background includes advanced coursework in algebraic geometry, computational algebra, and cryptographic protocols.
**Previous publications:**
- ["zk-SNARK para desarrolladores blockchain"](https://revistas.uh.cu/rcm/article/view/10616) - Ciencias Matemáticas, Vol. 38, No. 2, 2024
### Team Code Repos
- https://github.com/me-cuadra
- https://github.com/manudev97/
### Team LinkedIn Profiles
- https://www.linkedin.com/in/manudev97
## Development Status :open_book:
This project builds upon my ongoing Master's thesis research at the University of Havana. I have already completed:
- **Comprehensive literature review** on Poseidon hash functions and Gröbner basis attacks
- **Initial research document** (available at [here](https://github.com/manudev97/athena/blob/main/docs/s1/athena.pdf))
- **Theoretical framework** for the Athena predictive model
- **Academic foundation** with peer-reviewed references and methodology
**Current progress:**
- Literature review and theoretical framework completed
- Research proposal and methodology established
- Initial experimental setup in progress
- Strong academic foundation with university supervision

## Development Roadmap :nut_and_bolt:

### Overview
- **Total Estimated Duration:** 12 months
- **Full-Time Equivalent (FTE):** 2.0
- **Total Costs:** 15,000 USD

### Milestone 1 — Experimental Setup and Initial Analysis
- **Estimated duration:** 3 months
- **FTE:** 2.0
- **Costs:** 3,750 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation/Tutorial | Complete setup guide for Gröbner basis computations with Magma/Sage, including Docker containers for reproducible experiments |
| **0c.** | Methodology | Detailed explanation of the three-step attack methodology and experimental procedures |
| **0d.** | Infrastructure | Docker containers with Magma/Sage, Rust development environment, Lean theorem prover setup, computational requirements documentation, and cloud computing infrastructure |
| **0e.** | Article | Research article explaining the experimental setup and initial complexity measurements for small-scale Poseidon variants |
| 1. | Experimental Framework | Complete implementation of the three-step Gröbner basis attack methodology |
| 2. | Rust Implementation | High-performance Rust implementation of Poseidon variants for experimental validation |
| 3. | Lean Formal Verification | Initial Lean proofs for mathematical properties and complexity bounds |
| 4. | Initial Measurements | Complexity measurements for Poseidon variants with small parameters (t=3, RF=2, RP=3-5) |
| 5. | Statistical Analysis | Preliminary analysis of complexity scaling with round parameters |

### Milestone 2 — Systematic Data Collection
- **Estimated Duration:** 4 months
- **FTE:** 2.0
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation/Tutorial | Comprehensive tutorial on reproducing all experimental results and statistical analysis |
| **0c.** | Methodology | Detailed statistical methodology for complexity analysis and model development |
| **0d.** | Infrastructure | Extended computational infrastructure with Rust implementations, Lean formal verification setup, performance monitoring, and data management systems |
| **0e.** | Article | Research article presenting systematic complexity measurements and initial scaling relationships |
| 1. | Comprehensive Dataset | Complete complexity measurements for Poseidon variants across parameter space |
| 2. | Statistical Models | Initial regression models for complexity prediction |
| 3. | Validation Framework | Methodology for validating predictions against known results |

### Milestone 3 — Athena Model Development and Validation
- **Estimated Duration:** 3 months
- **FTE:** 2.0
- **Costs:** 3,750 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation/Tutorial | Complete user guide for the Athena model with examples and case studies |
| **0c.** | Methodology | Full mathematical formulation of the Athena model with theoretical justification |
| **0d.** | Infrastructure | Production-ready Rust implementation with Lean formal verification, API documentation, and comprehensive testing suite |
| **0e.** | Article | Final research article presenting the Athena model and validation results |
| 1. | Athena Model | Complete predictive model for Poseidon attack complexity |
| 2. | Validation Results | Validation against Ethereum Foundation's 40-bit security challenge |
| 3. | Security Recommendations | Practical security guidelines for Poseidon parameter selection |

### Milestone 4 — Publication and Community Integration
- **Estimated Duration:** 2 months
- **FTE:** 2.0
- **Costs:** 2,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | Apache 2.0 |
| **0b.** | Documentation/Tutorial | Final documentation package with academic paper, technical report, and community resources |
| **0c.** | Methodology | Complete methodology documentation for academic publication |
| **0d.** | Infrastructure | Final infrastructure with all tools and data publicly available |
| **0e.** | Article | Academic paper submitted to cryptographic conference with acknowledgment of Web3 Foundation support |
| 1. | Academic Publication | Paper submitted to [RCM](https://revistas.uh.cu/rcm)/EPRINT/EUROCRYPT |
| 2. | University Journal Publication | Article published in Ciencias Matemáticas (Universidad de La Habana) |
| 3. | Open Source Release | Complete codebase and data published on GitHub |
| 4. | Community Presentation | Presentation at cryptographic conference or workshop |

## Future Plans
**Short-term plans:**
- Complete Master's thesis and defend successfully
- Publish research results in top-tier cryptographic conferences
- Publish additional article in Ciencias Matemáticas (Universidad de La Habana)
- Make all code and data publicly available for community use
- Present findings at international cryptographic conferences
**Long-term plans:**
- Continue research in cryptographic security analysis
- Develop additional tools for ZK-proof security analysis
- Collaborate with industry partners on cryptographic implementations
- Mentor future students in cryptographic research
## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** Web3 Foundation Website
**Additional information:**
- This research is conducted under the supervision of M.Sc Frank Ernesto at the University of Havana
- The project aligns with the Ethereum Foundation's Poseidon Cryptanalysis Initiative 2024-2026
- All findings will be published and made available to the community
- The research addresses a critical gap identified by the cryptographic community
- Previous work on zk-SNARKs demonstrates relevant expertise in zero-knowledge proof systems
