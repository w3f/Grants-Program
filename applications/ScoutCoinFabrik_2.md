# Scout CoinFabrik
- **Team Name:** CoinFabrik (Nektra S.A)
- **Payment Address:** 0xf488039EDe6B38D7689fDCC6A9FC2dd0EF39D54e (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Scout: Security Analysis Tool

We are building an extensible open-source tool (or set of tools) to assist ink! smart contract developers detect common security issues and deviations from best practices. To improve coverage and precision, we will persist in research efforts on static and dynamic analysis techniques.

This tool will help developers write secure and more robust smart contracts.

Our interest in this project comes from our experience in manual auditing and our usage of comparable tools in other blockchains.


### Project Details

We have already conducted research work with the University of Buenos Aires to better comprehend the current status of analysis tools built for Rust, while foreseeing different lines of development.

We are currently working on tools to assist developers to apply best practices and to identify possible vulnerabilities.

### Ecosystem Fit

We believe we can bring value to the Polkadot / Kusama community by offering a tool to detect security bugs from a development perspective. By including this tool in their toolchain, ink! developers will be assisted to remove bugs in their code, raising the quality and security of their smart contracts.

## Team :busts_in_silhouette:

### Team members

- Ariel Wassbein, Head of Reaseach
- Valeria Caracciolo, Business Develpoment
- CoinFabrik's development and auditing team - when required.

### Contact

- **Contact Name:** Valeria Caracciolo
- **Contact Email:** valeria.caracciolo@coinfabrik.com
- **Website:** https://www.coinfabrik.com/ 

### Legal Structure

- **Registered Address:** Dr. Emilio Ravignani 2394, C1425 CABA, Argentina
- **Registered Legal Entity:** Nektra S.A.

### Team's experience
We are a research and development company specialized in Web3, with a strong background in cybersecurity. Founded in 2014, we have worked on over 180 blockchain-related projects, EVM based and also for Solana, Algorand, and Polkadot. Beyond development, we offer security audits through a dedicated in-house team of senior cybersecurity professionals, currently working on code in Substrate, Solidity, Clarity, Rust, and TEAL.

Our team has an academic background in computer science and mathematics, with work experience focused on cybersecurity and software development, including academic publications, patents turned into products, and conference presentations. Furthermore, we have an ongoing collaboration on knowledge transfer and open-source projects with the University of Buenos Aires.

### Team Code Repos

- https://github.com/CoinFabrik/web3-grant
- https://gitlab.com/coinfabrik-private/data/frecuencia-de-vulnerabilidades
- https://drive.google.com/drive/u/1/folders/1HoaL6EXX1Wky7e1SHYBY6oIZDGK2sgDD 

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/arielwaissbein/
- https://www.linkedin.com/in/valeriacaracciolo/ 


## Development Status :open_book:

We have been working on different aspects of the tool:
- Research on security analysis tools for Rust-based blockchains, applicable to ink! Smart contracts
- Listing common vulnerabilities, best practices, and enhancements related to smart contracts written in ink!
- Producing code examples and snippets of smart contracts showing the mentioned issues.
- Built a PoC (proof of concept) of a tool that identifies relevant security issues.

We briefly validated the idea of the development described in this application with David Hawig and Bhargav Bhatt from Web3 Foundation, who encourage us to apply for this grant.

We have finished the first milestone of this project ([Milestone 1 of ScoutCoinFabrik PoC](https://github.com/w3f/Grants-Program/blob/master/applications/ScoutCoinFabrik.md#milestone-1-proof-of-concept)), accomplishing all the deliverables listed in the milestone table.

Please note, however, that this milestone is the second grant associated with the same project: [ScoutCoinFabrik](https://github.com/CoinFabrik/web3-grant). The first grant focused on the tool’s PoC, and in this second grant we aim to develop a prototype.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 weeks
- **Full-Time Equivalent (FTE):**  5 FTE
- **Total Costs:** 30,000 USD

### Milestone 1: Prototype

- **Estimated duration:** 5 weeks
- **FTE:**  5
- **Costs:** 30,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | Documentation hosted on a separate webpage. |
| 0c. | Testing | Integration testing. Specific tests for every linting detector based on code examples and snippets of smart contracts. |
| 0d. | Docker | Does not apply at this stage. |
| 0e. | Article | We will upload a report summary to our blog. |
 **1.a** | Research and Development | Vulnerability examples. In addition to the [examples developed in Milestone 1 of ScoutCoinFabrik PoC](https://github.com/w3f/Grants-Program/blob/master/applications/ScoutCoinFabrik.md#milestone-1-proof-of-concept), we will develop more code examples and snippets of vulnerabilities, best practices, and enhancements related to smart contracts written in ink!. |
 **1.b** | Research and Development | Further example versions of [vulnerabilities developed in Milestone 1 of ScoutCoinFabrik PoC](https://github.com/CoinFabrik/web3-grant/tree/main/vulnerabilities). This step is geared to provide a wider set of examples, therefore improving our ability to measure the precision of our prototype and any other ink! vulnerability detection tool. |
 **2.a** | Development | Building a prototype that improves over the [development of Milestone 1 of ScoutCoinFabrik PoC](https://github.com/w3f/Grants-Program/blob/master/applications/ScoutCoinFabrik.md#milestone-1-proof-of-concept), detecting more classes of vulnerabilities and improving in precision on existing detectors. We are to build a prototype that can analyze Rust code to detect vulnerabilities in ink! smart contracts and possibly in pallets and other pieces of code. This builds over [this proof-of-concept tool](https://github.com/CoinFabrik/web3-grant) we've built and [delivered as part of a grant for the web3 foundation](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ScoutCoinFabrik-1.md) by: <br/> a) Moving from a proof-of-concept (PoC) tool to a robust tool that integrates with a popular IDE (VSCode), includes a CLI, etc, <br/> b) We will improve on the precision of the detectors we included in the PoC reducing the rate of false positives, and  <br/> c) We will add more detectors in order to have a reasonable coverage of the relevant security vulnerabilities that happen in smart contracts. |
 **2.b** | Development | Command line interface for the prototype. For this prototype, we want to develop a simple command line interface like the one used in other static analyzers from other blockchains (eg: [Slither](https://github.com/crytic/slither), [Rustle](https://github.com/blocksecteam/rustle)). <br/> In particular, we will develop the possibility to run the prototype on smart contract files or directories. <br/> The base command will be: `cargo scout file_name.rs` <br/> We will also include options for running subsets of detectors and triggering errors for CI/CD workflows. |
 **2.c** | Development | VSCode integration for the prototype. Our VSCode development will list security issues, highlight issues with squiggles and hover-over descriptions. We will seek compatibility of this development with other relevant ink! extensions such as [Ink! Analyzer](https://w3f.github.io/Grants-Program/applications/ink-analyzer#future-plans). |
 **3** | Evaluation | Prototype validation against a selection of projects deployed on testnet or mainnet in order to evaluate detector precision. Evaluation report and detector improvement. |


## Future Plans

(Our original plan was to apply for a 3 milestones grant, to reach a public release of the tool. But we were advised to apply for a shorter objective) After completing the PoC in our first milestone (Milestone #1), we are now applying for this second milestone to reach a tool prototype (Milestone #2). We envison a third milestone together with a public release (Milestone #3). Our mission is to continue to work on improving automated and assisted tools for finding security vulnerabilities and writing more secure code. Our objective is to help the Polkadot / Kusama community produce better and more secure code with these tools.

## Referral Program (optional) :moneybag: 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Richard Casey from Parity brought this program to our attention. Our inquiries were addressed by David Hawig and Bhargav Bhatt, who also gently advised us on this presentation.
