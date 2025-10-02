# Name of your Project

> [!NOTE]
> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g., `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://grants.web3.foundation/docs/process) on how to submit a proposal.

- **Team Name:** swen usa llc
- **Payment Details:**
  - **DOT**: "12F4tc8yuGc5pZsbbPNS4TEwpDr7td8rMvnVyPQFxQnskqTk".
  - **Payment**: "12F4tc8yuGc5pZsbbPNS4TEwpDr7td8rMvnVyPQFxQnskqTk". 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):1

> [!IMPORTANT]
> *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide the name and/or pull request of said grant on the first line of this section.

### Overview
Tagline:
Build fast and break things: a toolkit for going from concept to launch quickly.

Project Description:
Fundation is a set of modules that empowers developers to build decentralized applications (dApps) rapidly on the Polkadot ecosystem.

Integration with Polkadot/Kusama:
The primary goal of Fundation is to simplify dApp development on top of Asset Hub and rollups, significantly reducing development time.

Team's Motivation:
While building my first dApp on Polkadot, Stake2Build, over a year and a half ago, I realized how far behind the ecosystem was in front-end and web developer tooling. Although many improvements have been made since then, I believe this tool will still be of great benefit to the community by addressing these ongoing challenges.

### Project Details
Technology Stack:
Core Stack: Next.js
UI: Tailwind CSS, shadcn/ui
Database: IndexedDB and SQLite
API: Polkadot.js API

Proof of Concept (PoC)/MVP:
Website: https://www.fundation.dev/
MVP: https://www.fundation.dev/login

Mockups/UI Designs:
I have posted numerous videos on my X (formerly Twitter) page showcasing updates and ideas. You can view them here: https://x.com/swenw31.

### Ecosystem Fit
Fundation is positioned on the front-end side of the development stack.

### Target Audience:
Our target audience includes small-scale developers, participants in hackathons, and teams looking to kickstart their projects quickly.

### Needs Met:
The project aims to lower the barrier to entry for new developers, thereby expanding the Polkadot developer pool.

### Needs Identification:
The need for better developer tooling and a faster time-to-market has been a recurring topic within the Polkadot community for some time. Multiple projects are attempting to solve this, and I believe Fundation will be a valuable addition to these efforts.
### Comparison with Similar Projects:
- Apillon: A Polkadot-focused Web3 platform offering UI and API integration for parachain services.

- Thirdweb: An Ethereum/EVM-focused platform with SDKs and smart contract tools, targeting games and creator platforms.

- Magic: An Ethereum-based authentication tool using passwordless logins, not a full DApp solution.
  - If so, how is your project different? Please identify and assess any projects addressing the same need and explain how your project is distinct. Feel free to include applicable research data, statistics, or metrics.
  - If not, please indicate why such a project might not have been possible, successful, or attempted. 
- Are there any projects similar to yours in related ecosystems? 

Differentiation:
Fundation is open-source and self-hostable, prioritizing ease of use and flexibility. Unlike Apillon or Thirdweb, it doesn’t rely on third-party services. This ensures developers retain full control over their work and can adapt it freely without waiting for external updates.

## Team :busts_in_silhouette:

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members
Victor Stallone Peck (Swen) 

### Contact
- Team Name: Fundation
- Contact: Victor Stallone Peck (Swen) 
- Email: swenpeck@outlook.com
- Website: https://www.fundation.dev/
- Team Members: Victor Stallone Peck (Solo Developer)
- Code Repos: github.com/swenthebuilder


### Legal Structure

- **Registered Address: "1389 SW 12th Ave , pompano beach florida 33069"
- **Registered Legal Entity:SWENUSA LLC

### Team's experience
I have been involved in the Polkadot ecosystem for some time, but only recently decided to engage more actively. Fundation was initially intended as an internal tool for my own dApp development. However, seeing a greater need within the community, I am now seeking funding to develop it for a broader audience.

In addition to this project, I recently started a new initiative called the BuildOnDot community on X. While separate from this grant, its goal is to help new developers feel more comfortable and connected within the Polkadot ecosystem.


### Team Code Repos

- github.com/swenthebuilder

## Development Status :open_book:

I have been documenting my progress, including concepts and mock-ups, through regular updates on X.
Personal Updates: https://x.com/swenw31
BuildOnDot Community: https://x.com/i/communities/1934658730303373790
I will be adding more formal mock-ups for the mini-dApps soon, which will be built to showcase the functionalities of Fundation.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

> [!CAUTION]
> If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested.
- **DOT %:** Percentage of Total Costs to be paid in (vested) DOT (≥ 50%)

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 2 month
- **FTE:**  0,5
- **Costs:** 10,000 USD

> [!NOTE]
> **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | base module comption| Authentication, Dynamic Blockchain API, UX Refinement.  |
| 0b. | Documentation & code releash |Detailed documentation and public code release. |


## 📅 Development Roadmap // Budget Breakdown 

### Milestone 1: Base Module Functionality
- Includes: Deliverables 0a & 0b
- Duration: 1 month
- Cost: $10,000
### Deliverables:
- Authentication: Complete wallet-based signup/login, plus social login, email, and passkey options.
- Dynamic Blockchain Asset Retrieval: Simplified asset fetching—developers select chains/tokens, and Fundation handles the rest.
- UX Refinement: Streamlined chain connections/disconnections and overall design polish.
- Code Optimization: Readable code with inline comments explaining functionality.
- Documentation: An overview, in-depth technical details, and a getting-started tutorial.

...


## Future Plans

Please include here

- how you intend to finance the project's long-term maintenance and development,
- how you intend to use, enhance, and promote your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](https://grants.web3.foundation/docs/referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDC))

## Additional Information :heavy_plus_sign:
Additional Information
Concepts and mock-ups will be provided as they are developed.

<img src="https://raw.githubusercontent.com/swenthebuilder/PapiNextjsBasic/refs/heads/main/nftconcept.jpeg" alt="nftconcept" width="400"/>
<img src="https://raw.githubusercontent.com/swenthebuilder/PapiNextjsBasic/refs/heads/main/Nftdapp.png" alt="NftDapp" width="400"/>
basic layout custom icons and graphics will be made later
<img src="https://raw.githubusercontent.com/swenthebuilder/PapiNextjsBasic/refs/heads/main/opengov.png" alt="Opengov" width="400"/>


**How did you hear about the Grants Program?** Web3 Foundation Website / 
keegan@web3.foundation

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.