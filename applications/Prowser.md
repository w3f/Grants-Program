# Prowser

> [!NOTE]
> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g., `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://grants.web3.foundation/docs/process) on how to submit a proposal.

- **Team Name:** Kunaal Gadhalay
- **Payment Details:**
  - **DOT**: For the **DOT** compensation, please provide a Polkadot address (e.g. 15oF4...).
  - **Payment**: In case of payment in **USDC**, please provide a Polkadot AssetHub address and the currency (e.g. 15oF4... (USDC)).
  - **Fiat**:  In the case of **fiat** payment, please share your bank account privately with grants@web3.foundation via your contact email (see below) and list here the date and time of your email (e.g. Fiat 24.12.1971, 11:59). 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1, 2 or 3

> [!IMPORTANT]
> *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide the name and/or pull request of said grant on the first line of this section.

### Overview

A web browser that integrates Polkadot network capabilities and crypto mining/staking requires a multi-layered architecture. This solution prioritizes speed, security, and seamless blockchain integration.

The development will be using Javascript/TypeScript for core logic development. 


### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

A web browser that integrates Polkadot network capabilities and crypto mining/staking requires a multi-layered architecture. This solution prioritizes speed, security, and seamless blockchain integration.

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- The project is a simple user focused application (DApp) that enables users to earn rewards for time they spend via the browser.
- Polkadot Users. Anyone that browses the Web. 
- It helps create a lightweight application that helps users leverage Blockchain technology into their Web operations. 
- I have conducted extensive research, and on a comprehensive gap analysis using identification methodologies have been able to identify a market requirement.
- Several projects in the ecosystem intersect with user incentives, staking, or browser-based engagement, but none directly replicate the model of a Web browser that mines/stakes Polkadot (DOT) and Kusama (KSM) based on browser usage.
- **Brave Browser (Basic Attention Token - BAT)**  
   - **Similarity**: Brave rewards users with BAT tokens for viewing privacy-preserving ads, which can be converted to other cryptocurrencies or fiat.
- **Polkadot.js Wallet/Extension**  
   - **Similarity**: Enables users to manage and stake DOT/KSM.  
   - **Difference**: Polkadot.js is a wallet/utility tool, not a browser that passively rewards users for usage. Your project merges browsing and staking into a single user experience.
- **Bitfari (Decentralized Ad Network on Polkadot)**  
   - **Similarity**: Incentivizes users for engaging with ads.  
   - **Difference**: Bitfari is a decentralized ad platform, not a browser, and does not involve staking or mining DOT/KSM.

## Team :busts_in_silhouette:

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Kunaal Gadhalay

### Contact

- **Contact Name:** Kunaal Gadhalay 
- **Contact Email:** kunaalgadhalay93@gmail.com
- **Website:** Your website

### Legal Structure


### Team's experience
I have experience with developing open source projects. Have a few developments that have been deployed in python, npm, man etc...
Develop packages and fullstack applications alike. 

https://www.npmjs.com/package/pendeck

https://pypi.org/project/NLP-SQL/

### Team Code Repos

- https://github.com/kunaalhere/Private-Blockchain [Not yet deployed as a package on npm] 
- https://github.com/kunaalhere/MultiAuth-laravel

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/kunaalhere/

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/gadhalaykunaal


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

https://github.com/kunaalhere/Prowser

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

> [!CAUTION]
> If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** FIAT

### Milestone 1  — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 10,000 USD

> [!NOTE]
> **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language, and medium should reflect your target audience described above.) |
| 1. | An operable application on the Polka Blockchain. |
| 2. | A Readme explaining the operations of the project. |


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language, and medium should reflect your target audience described above.) |
| 1. | A Wallet Addition. |
| 2. | A comprehensive Readme file. |


## Future Plans

- Grow user base and market the program for use.
- Long Term Maintenance plans based on fund availability. 
- 
## Referral Program (optional) :moneybag:

You can find more information about the program [here](https://grants.web3.foundation/docs/referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDC))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / personal recommendation 

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
