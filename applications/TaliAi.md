# Name of your Project

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Tali AI 
- **Payment Address:** 0xce6BF74d6B9D998E5f44364899DaBe3cb3bA8497
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

We propose to build a specialized Discord bot (and or widget that lives on docs page) for Polkadot that will use the latest technology around LLM’s (Large Language Models) to import Polkadot's Github repos, documentation, video content and Discord Q&A’s to provide an interface for Polkadot users/developers to ask questions in natural language.

The idea is to provide another member to Polkadot's DevRel team, reducing support hours on Discord and a path of triage for commonly asked questions (making the team and users get answers quicker).


### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

Tali works by ingesting various data sources associated with a project, including documentation, articles, YouTube videos, tutorials, and Q&A's. This data is then stored in a vector database and can be queried against.

When the Tali is asked a question responses typically take between 30-40 seconds, with the timing largely dependent on OpenAI. We're transitioning to a self-hosted approach to bypass any bottlenecks. Our ultimate goal is to reduce the wait time to just 10 seconds. Consider our current process as a funnel: the topmost part is Information Retrieval (IR), followed by several zero-shot prompts that eventually lead to the answer.

Specifically, we store the document embeddings in a vector database and perform a hybrid search to pull documents upon receiving a query. Beyond querying the data repositories, we conduct a web search and generate dynamic documents from the results. We subsequently rank and quality control each document, selecting the most relevant ones. This refines the initial database/web query. Finally, we synthesize the top documents before delivering a response to the user. We aim to introduce fine-tuning for every part of the pipeline in the future.


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

The core of technical Web3 projects depends on a healthy ecosystem of developers using the protocols. Developers learn how to use the various projects through inspecting developer docs and Github repositories. As expected, the documentation doesn’t cover everything and a team of people are needed to provide “front line” support to those building / using the protocol.

Enter Developer Relations, a team tasked with being the first human interface with protocols who provide 2 critical roles for the project: building developer communities & tracking product market fit.

The issue that often arises is a lack of human capital to be able to deal with the number of requests & questions that populate a DevRel teams day.

We propose to provide a solution that will enable the Polkadot DevRel team to be able to focus on what they do best: solving unique customer problems and building trust in the protocol. By providing a bot that can answer previously asked questions it will enable DevRel to become more effective and in turn provide higher quality support to end users.

## Team :busts_in_silhouette:

### Team members

-Ali Agha
-Tenzin Rose


### Contact

- **Contact Name:** Ali Agha
- **Contact Email:** Ali@trytali.com
- **Website:** tryTali.com

### Legal Structure

- **Registered Address:** 611 South DuPont Highway,  Ste 102,  #316
Dover, DE 19901
- **Registered Legal Entity:** Tali AI LLC 

### Team's experience

Ali Agha

Ali Agha is a technologist and entrepreneur with a focus on decentralized solutions. With his previous venture, Olypsis Technologies, Ali provided Web3 consulting services for countless startups and major companies like IBM and Thomson Reuters. Ali first became engaged in the blockchain space in 2015 when he discovered bitcoin. Since that time he has dedicated his career to creating a more fair and just world through the power of decentralization.

Github: https://github.com/OlypsisAli

Twitter: https://twitter.com/iamAliAgha

Tenzin Rose

Tenzin Rose is an entrepreneur and full-stack developer with a background in cloud infrastructure sales. He’s worked with startups / enterprises globally, helping them deploy projects successfully & drive revenue. His current passions are web development, all things Ethereum and getting to grips with the moon math in ZKP.

He’s worked previously on many interesting projects including building out zkGiving, an app that enables people to donate privately to charities of their choice.

Github: https://github.com/niznet89
Projects: https://www.m00nlink.xyz/tenzin
Twitter: https://twitter.com/tenzin_rose

### Team Code Repos

- https://github.com/niznet89
- https://github.com/OlypsisAli

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/niznet89
- https://github.com/OlypsisAli

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ali-agha/
- https://www.linkedin.com/in/tenzinrose/


## Development Status :open_book:
We currently have deployed bots for Lens Protocol and Balancer. 

Please see a video demo here: 
https://drive.google.com/file/d/1Ezn-iA8843hq2xGgq5fJh5sgiQ4gCA8W/view?usp=drive_link

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
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

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Referral Program (optional) :moneybag: 

You can find more information about the program [here](../README.md#moneybag-referral-program).
- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** BTC, Ethereum (USDC/DAI) or Polkadot/Kusama (USDT) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.