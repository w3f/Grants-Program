

---

Tagline
AIXS Token — powering decentralized AI model hosting and monetization across the Polkadot ecosystem.
Brief Description
AIXS is a cross-platform token infrastructure designed to enable decentralized hosting, monetization, and interoperability of AI models. It provides a secure, scalable, and compliant framework for AI vendors to deploy models, manage access, and receive payments using Web3-native mechanisms. AIXS integrates with Polkadot through smart contracts, parachain interoperability, and Substrate-based modules to support confidential inferencing, trusted execution environments (TEEs), and tokenized access control.
Relation to Substrate / Polkadot / Kusama
AIXS will be deployed as a Substrate-based module and smart contract on a Polkadot parachain. It leverages Polkadot’s cross-chain messaging (XCM) for interoperability between AI model vendors and consumers, and integrates with Kusama for early-stage experimentation and testing. Confidential computing and TEEs will be supported via integrations with Substrate pallets and off-chain workers.
Team Interest
Our team is passionate about democratizing access to AI and enabling secure, decentralized monetization of models. We believe Polkadot’s modular architecture and cross-chain capabilities are ideal for building a scalable AI hosting infrastructure that respects privacy, compliance, and performance.

---

Project Details
UI Mockups / Designs
• AIXS Dashboard: Vendor onboarding, model upload, access control, and analytics.
• Consumer Portal: Model discovery, usage tracking, and token payments.
• Admin Console: Governance, compliance, and audit logs.
Data Models / API Specs
• Model Registry: Metadata, versioning, access policies.
• Token Payment API: Streamed payments via Superfluid/Sablier.
• Inference API: Secure model invocation with encrypted payloads.
Technology Stack
• Frontend: React + TypeScript
• Backend: FastAPI + Python
• Blockchain: Substrate, Ink! smart contracts, Polkadot parachain
• Confidential Computing: Intel SGX / AMD SEV via TEEs
• Cloud: Azure, AWS, GCP (Terraform-based deployment)
• Payments: Superfluid, Sablier, AIXS token
Documentation
• Architecture diagrams
• Smart contract specs
• TEE integration protocols
• API documentation
• Governance and compliance modules
PoC / MVP
• MVP deployed for AI model hosting with tokenized access
• Integration with Superfluid for streaming payments
• TEE-based confidential inferencing prototype
• GitHub repo with smart contracts and deployment scripts
Limitations
• AIXS does not provide model training infrastructure
• No tokenomics or speculative financial instruments
• No hosting or maintenance costs covered by this grant
• No marketing or business planning activities included

---

Ecosystem Fit
Fit in the Ecosystem
AIXS serves as a decentralized infrastructure layer for AI model hosting and monetization. It complements existing parachains by enabling AI-as-a-Service capabilities, secure inferencing, and tokenized access control.
Target Audience
• AI model vendors
• Dapp developers
• Parachain teams needing AI capabilities
• Researchers and data scientists
• Privacy-focused enterprises
Needs Met
• Secure hosting of AI models
• Tokenized access and monetization
• Confidential inferencing
• Compliance with HIPAA, FDA, Safe AI Act
Evidence of Need
• Scientific articles on confidential AI
• Forum discussions on decentralized AI hosting
• Case studies on AI model monetization challenges
• Market demand for privacy-preserving AI inferencing
Similar Projects in Polkadot Ecosystem
• Phala Network: Focused on confidential computing, but not AI-specific
• Crust Network: Decentralized storage, not tailored for AI model hosting
Differentiation:
• AIXS focuses on AI model monetization and inferencing
• Integrates token streaming and access control
• Built for compliance-heavy use cases (healthcare, finance)
Similar Projects in Other Ecosystems
• Ocean Protocol: Data monetization, not model hosting
• SingularityNET: AI marketplace, lacks TEE integration and compliance focus
Why AIXS is Unique:
• Built on Polkadot for modularity and interoperability
• Focused on secure, compliant AI model hosting
• Tokenized access with streaming payments

---

Team 👥
Team Members
• Team Leader: Vladimir Lialine
• Team Members:
    • Backend Lead: [Name]
    • Smart Contract Developer: [Name]
    • DevOps Engineer: [Name]
    • Compliance Advisor: [Name]
Contact
• Contact Name: Vladimir Lialine
• Contact Email: vladimir@honeypotz.net
• Website: https://honeypotz.net
• LinkedIn: https://linkedin.com/in/vlad-lialine
Legal Structure
• Registered Address: 42 Hirschmattstrasse, Lucerne LH 6003
• Registered Legal Entity: Honeypotz GmbH
Team Experience
• Developed multiple SaaS platforms including:
    • SAAS AI Factory: Multi-tenant AI SaaS launcher
    • QUANTUMSAFE BIOEDGE: Quantum-resilient AI platform
    • My AI Tutor: AI-powered education platform
    • Honeypot Farm: Cybersecurity honeypot deployment
• Experience with Substrate, TEEs, confidential computing, and tokenized systems
• Previous grant applications: None yet submitted to W3F



# Name of your Project

> [!NOTE]
> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g., `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://grants.web3.foundation/docs/process) on how to submit a proposal.

- **Team Name:** Legal name of your team (e.g. JsonCorp)
- **Payment Details:**
  - **DOT**: For the **DOT** compensation, please provide a Polkadot address (e.g. 15oF4...).
  - **Payment**: For the **USDC** portion of the payment, please provide a Polkadot AssetHub address and the currency (e.g. 15oF4... (USDC)). 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1, 2 or 3

> [!IMPORTANT]
> *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide the name and/or pull request of said grant on the first line of this section.

### Overview

Please provide the following:

- If the name of your project is not descriptive, a tagline (one sentence summary).
- A brief description of your project.
- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.
- An indication of why your team is interested in creating this project.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is *not* or will *not* provide or implement
  - This is a place for you to manage expectations and clarify any limitations that might not be obvious


Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):

- The (future) tokenomics of your project
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different? Please identify and assess any projects addressing the same need and explain how your project is distinct. Feel free to include applicable research data, statistics, or metrics.
  - If not, please indicate why such a project might not have been possible, successful, or attempted. 
- Are there any projects similar to yours in related ecosystems? 

## Team :busts_in_silhouette:

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Name of team leader
- Names of team members

### Contact

- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email (e.g. john@duo.com)
- **Website:** Your website

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/{your_organisation}/{project_1}
- https://github.com/{your_organisation}/{project_2}

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/{team_member_1}
- https://github.com/{team_member_2}

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/{person_1}
- https://www.linkedin.com/{person_2}


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://grants.web3.foundation/docs/rfps) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

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

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

> [!NOTE]
> **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#documentation) for details. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#testing-guide) for details. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language, and medium should reflect your target audience described above.) |
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone. You can refer to details provided in previous sections.) |
| 2. | Substrate module: Y | The Y Substrate module will... |
| 3. | Substrate module: Z | The Z Substrate module will... |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5. | Library: ABC | We will deliver a JS library that will implement the functionality described under "ABC Library" |
| 6. | Smart contracts: ... | We will deliver a set of ink! smart contracts that will...


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

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

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
