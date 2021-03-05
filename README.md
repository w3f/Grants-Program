# Open Grants Program <!-- omit in toc -->

<p align="center">
  <img src="./src/Open_Grants_Program.png" style="width:1300px";>
</p>

**:loudspeaker: Important:** The Web3 Foundation Open Grants Program focuses on technology grants up to **USD 30,000 for initial grants** and **USD 100,000 for follow-up grants**, which are tracked **transparently** on GitHub and disbursed in **Bitcoin or DAI**. For larger grants, payments in other currencies and partly private submissions, please see our [General Grants Program](https://github.com/w3f/General-Grants-Program).

:earth_asia: **_This page is also available in [Chinese (中文)](./README_CN.md)._**

---

- [:wave: Introduction](#wave-introduction)
  - [Requirements](#requirements)
  - [Team](#team)
    - [W3F Grants Committee](#w3f-grants-committee)
    - [W3F Grants Evaluators](#w3f-grants-evaluators)
    - [W3F Operations Team](#w3f-operations-team)
- [:pencil: Process](#pencil-process)
- [:bulb: Help](#bulb-help)
  - [Additional information](#additional-information)
  - [Real-time conversation](#real-time-conversation)
- [:rocket: Alternative Funding Sources](#rocket-alternative-funding-sources)
  - [Treasury](#treasury)
  - [General Grants Program](#general-grants-program)
  - [Other Grant Programs](#other-grant-programs)

## :wave: Introduction

As part of our commitment to promoting the Web3 ecosystem, we offer comprehensive grants programs focused on funding software development and research efforts related to **Polkadot, Kusama and Substrate**. For more information about the Web3 Foundation please visit the [About page](https://web3.foundation/about/) of our website.

The Open Grants Program tries to achieve the above while being:

- fully transparent,
- simple, and
- effective.

### Guidelines

Anyone is welcome to apply for a grant. Projects funded through our programs are broad in scope, but our focus lies on strong technical projects that add value to the ecosystem.

Generally, your project will have better chances to get accepted if:
- It presents a **well-researched** or tested concept, for which ideally you are able to show some prior work.
- You can demonstrate that the project will be **maintained** after completion of the grant, be it through an obvious commitment to the technology from your side, additional funding sources or an existing business model.
- Your team has **proven experience** with the relevant languages and technologies and/or a strong technical background. We ask you to provide the GitHub profiles of all team members as part of your application and will examine these for past activity and code quality. Naturally, you can also link to projects on other platforms.
- Your application is **rich in technical details** and well-defined.
- You can clearly present how your project stands out among competitors or implements technology that doesn't exist in the ecosystem yet.

Additionally, it must fulfill the following requirements:
- All code produced as part of a grant must be **open-sourced**, and it must also not rely on closed-source software for full funcionality. We prefer Apache 2.0 but the GNU GPL v3 license or Unlicense are also acceptable. 
- We do not award grants to teams that have successfully conducted a token sale or otherwise launched their own token unless there is a clear reason for it. If this applies to you, make sure to clearly present your case and explain why you cannot self-fund this project in your application.
- Lastly, we do not provide funding for gambling-related projects.

You can find a list of areas in the Web 3.0 Technology Stack that demand particular development [here](https://github.com/w3f/General-Grants-Program/blob/master/grants/polkadot_stack.md), as well as a list of previously accepted projects [here](https://github.com/w3f/Web3-collaboration/blob/master/grants/accepted_grant_applications.md). Additionally, the builders program [feedback board](https://feedback.parity.io/) may contain some useful ideas for grant projects.

### Team

#### W3F Grants Committee

The Committee consists of individuals who know the funding priorities of the Polkadot ecosystem. The committee evaluates grant applications and provides feedback on these applications.

In cases where a niche expert opinion is desirable, one of the committee members may request such a review.

- [Aeron Buchanan](https://github.com/aeronbuchanan)
- [Gautam Dhameja](https://github.com/gautamdhameja)
- [Marcin Górny](https://github.com/mmagician)
- [Robert Hambrock](https://github.com/Lederstrumpf)
- [David Hawig](https://github.com/Noc2)
- [Sebastian Müller](https://github.com/semuelle)
- [Aleixo Sánchez](https://github.com/alxs)
- [Reto Trinkler](https://github.com/retotrinkler)
- [Benjamin Weiß](https://github.com/BenWhiteJam)
- [Gavin Wood](https://github.com/gavofyork)

#### W3F Grants Evaluators

Evaluators are individuals able to evaluate the technology delivered as a result of the Open Grants Program. The committee decides about the evaluators and has the right to add or remove evaluators (supermajority needed).

- [Marcin Górny](https://github.com/mmagician)
- [Robert Hambrock](https://github.com/Lederstrumpf)
- [David Hawig](https://github.com/Noc2)
- [Sebastian Müller](https://github.com/semuelle)
- [Aleixo Sánchez](https://github.com/alxs)

#### W3F Operations Team

The Operations Team takes care of legal documents, invoicing and remittances.

- [Kasper Mai Jørgensen](https://github.com/KasperJor)
- [Rouven Pérez](https://github.com/RouvenP)

## :pencil: Process

1. **Application:**
   1. [Fork](https://github.com/w3f/Open-Grants-Program/fork) this repository
   2. In the newly created fork, create a **copy** of the application template ([`applications/application-template.md`](./applications/application-template.md)). If you're using the GitHub web interface, make sure you create a new file and copy the content of the template inside the new file. _Don't change the template file directly!_
   3. Label the file as `project_name.md`.
   4. Fill out the template with the details of your project. The more information you provide, the faster the review. Additionally to the information provided on the template, note that your project will need to comply with our [Guidelines for Milestone Deliverables](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).
   5. Once you have completed the application, click on "Create new pull request". The pull request should only contain _one new file_ — the markdown file you created from the template.
   6. Sign off on the [terms and conditions](https://github.com/w3f/Open-Grants-Program/blob/master/src/T&Cs.md) presented by the [CLA assistant](https://github.com/claassistantio) as Contributor License Agreement. You might need to reload the pull request to see the comment by the assistant.
2. **Application Review:**
   1. The [Committee](#w3f-grants-committee) can (and usually does) issue comments and request changes on the pull request.
   2. The application is accepted when all requested changes are addressed, the terms and conditions have been agreed upon and one third of the committee approves your pull request.
3. **Milestone Delivery and Payment:**
   1. Milestones are to be delivered on the [Grant Milestone Delivery](https://github.com/w3f/Grant-Milestone-Delivery/) repository. You can find the delivery process [here](https://github.com/w3f/Grant-Milestone-Delivery#mailbox-milestone-delivery-process).

The grant application can be amended at any time. However, this _necessitates a reevaluation by the Committee_. If your application has been accepted and, during development, you find that your project significantly deviates from the original specification, please open a new pull request that modifies the existing application.

Additionally, we try to enforce the [code of conduct](https://github.com/w3f/Open-Grants-Program/blob/master/CODE_OF_CONDUCT.md) and based on this may [block users](https://github.blog/2016-04-04-organizations-can-now-block-abusive-users/).

## :bulb: Help

### Additional information

| <img src="src/web.png?s=50" width="50"> | <img src="src/twitter.png?s=50" width="50"> | <img src="src/medium.png?s=50" width="50"> | <img src="src/like.png?s=50" width="50"> | <img src="src/reddit.png?s=50" width="50"> | <img src="src/youtube-play.png?s=50" width="50"> |
| :-: | :-: | :-: | :-: | :-: | :-: |
| [W3F Website](https://web3.foundation) | [W3F Twitter](https://twitter.com/web3foundation) | [W3F Medium](https://medium.com/web3foundation) | [Polkadot Wiki](https://wiki.polkadot.network/en/) | [Web 3.0 Reddit](https://www.reddit.com/r/web3) | [W3F YouTube](https://www.youtube.com/channel/UClnw_bcNg4CAzF772qEtq4g) |

### Real-time conversation

We have Element channels for real-time discussions on Web3 and Polkadot. Join the conversation.

- [Web3 Foundation](https://app.element.io/#/room/#w3f:matrix.org)
- [Polkadot Watercooler](https://app.element.io/#/room/#polkadot-watercooler:web3.foundation)

## :rocket: Alternative Funding Sources

### Treasury

The treasury is a pot of on-chain funds collected through transaction fees, slashing, staking inefficiencies, etc. The funds held in the treasury can be spent on spending proposals. Both [Polkadot](https://polkadot.network/) and [Kusama](https://kusama.network/) offer everyone the opportunity to apply for funding via the treasury. See:

- [Treasury Wiki](https://wiki.polkadot.network/docs/en/learn-treasury)
- [Polkadot Treasury Guide](https://docs.google.com/document/d/1IZykdp2cyQavcRyZd_dgNj5DcgxgZR6kAqGdcNARu1w)
- [Kusama Treasury Guide](https://docs.google.com/document/d/1p3UQUjph5t8TVaWnTkfrI5mE-BABnM9Xvtuhdlhl6JE)

### General Grants Program

For larger grants, payments in fiat and partly private submissions, please visit our [Web3 Foundation General Grants page](https://github.com/w3f/General-Grants-Program) on GitHub.

### Other Grant Programs

Below is a list of other grant programs in the polkadot/substrate ecosystem:

- [Darwinia Grants Program](https://docs.darwinia.network/docs/en/dev-bounty#grant-program)
- [Moonbeam Grants Program](https://moonbeam.network/community/grants/)
- [Edgeware Grants and Bounties](https://github.com/edgeware-builders/construction-projects)

## :information_source: License <!-- omit in toc -->

[Apache License 2.0](./LICENSE) © Web3 Foundation
