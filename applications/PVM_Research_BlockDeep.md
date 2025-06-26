# Research Grant for Polkadot Hub Compatibility

- **Team Name:** BlockDeep Labs UG
- **Payment Details:**
  - **DOT**: 143T3YkKMVm7KY1zqwua3Ld2SRLxLyra794TrhHiDLrD1kjY
  - **Payment**: 143T3YkKMVm7KY1zqwua3Ld2SRLxLyra794TrhHiDLrD1kjY (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

We propose a focused research initiative to investigate the current limitations and incompatibilities between the Polkadot Virtual Machine (PVM) — [PolkaVM](https://github.com/paritytech/polkavm) — and the Ethereum ecosystem, particularly in the context of Solidity smart contract execution. This research will leverage the [Revive compiler](https://github.com/paritytech/revive), which compiles Solidity to PVM-compatible bytecode. Our objective is to systematically deploy a curated set of widely-used Solidity smart contracts onto the [PassetHub testnet](https://github.com/paseo-network/passet-hub).

During this process, we will document all compatibility issues, unexpected behaviors, and failures encountered during deployment and execution. Each identified issue will be filed in the [contract-issues repository](https://github.com/paritytech/contract-issues) to contribute to a shared knowledge base and help inform ongoing development of PVM and Revive. This research aims to provide practical feedback and accelerate the path toward seamless Ethereum compatibility within the Polkadot ecosystem.

### Project Details

We have selected a representative set of Ethereum dApps to evaluate how well PolkaVM supports Solidity smart contracts compiled via the `resolc` compiler. These dApps are chosen based on:

* Solidity versions 0.8.x and above
* Usage of popular development frameworks like Hardhat or Foundry

### Evaluation Process (3 days per dApp):

* **Environment Setup**: Prepare the original project with its native tooling and compile contracts normally.
* **Cross-Compilation Testing**: Use `resolc` to compile contracts for PolkaVM and compare outputs.
* **Functional Verification**: Run existing tests and deploy contracts locally to validate behavior under PolkaVM.
* **Issue Documentation**: Capture any build errors, runtime problems, or incompatibilities and analyze framework-specific nuances.

Findings will be systematically reported to guide improvements in PolkaVM’s Solidity support and tooling integration.

### Ecosystem Fit

This project directly supports the long-term goal of enabling seamless Ethereum compatibility within the Polkadot ecosystem. While PVM and the Revive compiler represent promising innovations for executing Solidity smart contracts natively on Polkadot SDK-based chains, their real-world compatibility with widely-used Ethereum contracts remains largely untested. By conducting systematic compatibility testing and reporting issues in a structured, developer-friendly format, this project will fill a critical gap between theoretical capabilities and practical usability. The outcomes will serve both core developers working on PVM/Revive and parachain teams interested in Ethereum compatibility. Our work complements other W3F-funded efforts around interoperability, runtime innovation, and developer tooling, and helps position Polkadot as a more attractive platform for Ethereum developers and dApp teams.

## Team :busts_in_silhouette:

BlockDeep Labs is a specialized research and development firm focused on the Polkadot and Substrate ecosystem. With deep expertise in blockchain architecture, runtime engineering, and developer tooling, our team has contributed to several impactful projects. Most recently, BlockDeep Labs has taken over the support and maintenance of the Polkadot JS suite from Parity Technologies, reflecting our trusted role in advancing the Polkadot ecosystem’s core infrastructure. Our team combines technical depth with practical experience in Substrate, Solidity, Rust, and cross-chain interoperability — making us uniquely positioned to lead this research effort into PVM and Solidity compatibility.

### Team members

- [Gautam Dhameja](https://www.linkedin.com/in/gautamdhameja/), Founder, BlockDeep Labs

### Contact

- **Contact Name:** Gautam Dhameja
- **Contact Email:** gautam@blockdeep.io
- **Website:** [blockdeep.io](https://www.blockdeep.io/)

### Legal Structure

- **Registered Address:** Margarete-Walter-Str. 8, D 10407 Berlin, Germany
- **Registered Legal Entity:** Blockdeep Labs UG

### Team's experience

BlockDeep Labs has deep technical expertise across the Polkadot, Substrate, and Ethereum ecosystems, with a strong track record of contributing to critical infrastructure and developer tooling. Our work spans high-impact projects such as [Epico](https://blog.blockdeep.io/epico-native-ethereum-compatibility-for-polkadot-sdk-383662e751e4), a native Ethereum compatibility layer for Polkadot SDK chains; [Libro](https://libro.blockdeep.dev/), a best practices guide based on in-depth analysis of 20+ Substrate projects; and [XCM Tracer](https://blog.blockdeep.io/introducing-xcm-tracer-a0889c1397ab), a debugging tool for cross-chain message flow in Polkadot. We also maintain the Polkadot JS suite. Importantly, we have been core technical contributors to the [Mythos Parachain](https://blog.blockdeep.io/bringing-mythos-to-polkadot-the-mythical-games-parachain-development-story-b6450374c3a2) — a production-grade Substrate-based chain focused on Web3 gaming infrastructure, digital asset management, and scalability. This hands-on experience with both enterprise-grade parachains and core developer tools makes us uniquely suited to drive research into Solidity compatibility on the PVM.

### Team Code Repos

- https://github.com/blockdeep/pallet-collator-staking
- https://github.com/blockdeep/otro
- https://github.com/blockdeep/exbrid
- https://github.com/paritytech/project-mythical

## Project Roadmap and Process :nut_and_bolt:

We’ve curated a list of Ethereum dApps and identified an efficient workflow to evaluate PolkaVM's compatibility and robustness using the resolc compiler.

### Filtering Criteria:

According to our previous tests and interaction with resolc and its functions, the selected dApps must meet the following criteria based on compatibility and relevance.

* Smart contracts use Solidity version ≥ 0.8.x
* Utilize either Hardhat or Foundry as their primary framework for compilation, testing, and deployment.

### Proposed Workflow (Per DApp):

#### Setup and Compilation

* Framework Setup & Compilation
* Compile the contracts using the original framework (Hardhat or Foundry)
* Cross-compile using resolc via PolkaVM

#### Testing

* Run unit tests (where available) in the original framework
* Identify gaps in resolc compatibility

#### Local Deployment

* Deploy contracts to a local node (e.g., Anvil/Hardhat)
* Verify functionality via basic interactions or available scripts

### Reporting

The following will be documented in detail:
* Compilation issues
* Runtime anomalies
* Incompatibilities between resolc and native compilers
* Notes on framework tooling (plugins, scripts, custom tasks)

## Cost Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** USD $27,000

## Milestones

The entire project will be delivered as a single milestone. Throughout the project duration, we will provide regular updates and maintain detailed documentation of all identified issues and findings.