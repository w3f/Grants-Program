# Open Grants Program <!-- omit in toc -->

<p align="center">
  <img src="./src/Open_Grants_Program.png" style="width:1300px";>
</p>

**:loudspeaker: Important:** The Web3 Foundation _Open Grants_ Program focuses on technology grants up to **USD 30k for initial grants** and **USD 100k for follow-up grants**, which are tracked **transparently** on GitHub and disbursed in **Bitcoin or DAI**.

**_This page is also available in [Chinese (中文)](./README_CN.md)._**

---

- [Introduction](#introduction)
  - [:clipboard: About](#clipboard-about)
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

## Introduction

As part of our commitment to promoting the Web3 ecosystem, we offer a comprehensive grants program focused on funding software development and research efforts related to Polkadot, Kusama and Substrate. For more information about the Web3 Foundation please visit the [About page](https://web3.foundation/about/) of our website.

### :clipboard: About

The Open Grants Program focuses on funding software development and research efforts related to **Polkadot, Kusama and Substrate**. It tries to achieve this while being:

- fully transparent,
- simple, and
- effective

The Web3 Foundation Open Grants Program focuses on technology grants up to **USD 30k for initial grants** and **USD 100k for follow-up grants**, which are tracked **transparently** on GitHub and disbursed in **bitcoin or DAI**. For larger grants, payments in other currencies and partly private submissions, please visit our [Web3 Foundation General Grants page](https://github.com/w3f/General-Grants-Program) on GitHub.

You can find a list of areas in the Web 3.0 Technology Stack that demand particular development [here](https://github.com/w3f/General-Grants-Program/blob/master/grants/polkadot_stack.md), as well as a list of previously accepted projects [here](https://github.com/w3f/Web3-collaboration/blob/master/grants/accepted_grant_applications.md).

Additionally the builders program [feedback board](https://feedback.parity.io/) may contain some useful ideas for grant projects.

### Team

#### W3F Grants Committee

The Committee consists of individuals who know the funding priorities of the Polkadot ecosystem. The committee evaluates grant applications and provides feedback on these applications.

In cases where a niche expert opinion is desirable, one of the committee members may request such a review.

- [Aeron Buchanan](https://github.com/aeronbuchanan)
- [Marcin Górny](https://github.com/mmagician)
- [Robert Hambrock](https://github.com/Lederstrumpf)
- [David Hawig](https://github.com/Noc2)
- [Bill Laboon](https://github.com/laboon)
- [Rouven Pérez](https://github.com/RouvenP)
- [Reto Trinkler](https://github.com/retotrinkler)
- [Björn Wagner](https://github.com/bjornwgnr)
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

Operations Team takes care of legal documents, invoicing and remittances.

- [Kasper Mai Jørgensen](https://github.com/KasperJor)
- [Rouven Pérez](https://github.com/RouvenP)

## :pencil: Process

1. **Application:**
   1. [Fork](https://github.com/w3f/Open-Grants-Program/fork) this repository
   2. In the newly created fork, create a **copy** of the [application-template.md](./applications/application-template.md). In other words: In the GitHub web interface, you need to create a new file and copy the content of the [application-template.md](./applications/application-template.md) inside the new file. _Don't change the template file directly!_
   3. Label the file as "project_name.md".
   4. Fill out the template with the details of your project. The more information you provide, the faster the review.
   5. Once you have completed the application, click on "Create new pull request". The pull request should only contain _one new file_ — the markdown file you created from the template.
   6. Sign off on the [terms and conditions](https://github.com/w3f/Open-Grants-Program/blob/master/src/T&Cs.md) presented by [claassistantio](https://github.com/claassistantio) as Contributor License Agreement (CLA). You might need to reload the pull request to see the comment by [claassistantio](https://github.com/claassistantio).
2. **Application Review:**
   1. The committee can (and usually does) issue comments and request changes on the pull request.
   2. The application is accepted when all requested changes are addressed, the terms and conditions have been agreed upon and one third of the committee approves your pull request.
3. **Milestone Delivery:**
   1. [Fork](https://github.com/w3f/Grant-Milestone-Delivery/fork) the [Grant Milestone Delivery](https://github.com/w3f/Grant-Milestone-Delivery) repo with the **same GitHub account, which you used to submit the application!**
   2. In the newly created fork, create a **copy** of the [milestone-delivery-template.md](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/milestone-delivery-template.md).
   3. Label the file as **`project_name_milestone_number.md`**.
   4. Fill out the [invoice form](https://forms.gle/QvsbeSA3ziuC9k9b9).
   5. Fill out the template with the details of your milestone including a **link to the initial pull request**.
   6. Once you have completed the application, click on "Create new pull request".
4. **Milestone Review:**
   1. Evaluators can (and usually do) issue comments and request changes on the pull request.
   2. Grants Evaluators will merge your pull request to accept the deliverable.
5. **Milestone Payment:**
   1. The Operations Team receives a notification once the delivery was accepted. As soon as feedback is provided by the evaluators, this feedback first needs to be resolved.
   2. Operations Team makes the payment to the Bitcoin or Ethereum address specified in the initial application. The exchange rate for BTC depends on the time of payment.

_The grant application can be amended at any time. However, this necessitates a reevaluation by the Committee._

Additionally, we try to enforce the [code of conduct](https://github.com/w3f/Open-Grants-Program/blob/master/CODE_OF_CONDUCT.md) and based on this may [block users](https://github.blog/2016-04-04-organizations-can-now-block-abusive-users/).

## :bulb: Help

### Additional information

| <img src="src/web.png?s=50" width="50"> | <img src="src/map.png?s=50" width="50"> | <img src="src/twitter.png?s=50" width="50"> | <img src="src/medium.png?s=50" width="50"> | <img src="src/like.png?s=50" width="50"> | <img src="src/reddit.png?s=50" width="50"> | <img src="src/youtube-play.png?s=50" width="50"> |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| [W3F Website](https://web3.foundation) | [W3F Forum](https://forum.web3.foundation) | [W3F Twitter](https://twitter.com/web3foundation) | [W3F Medium](https://medium.com/web3foundation) | [Polkadot Wiki](https://wiki.polkadot.network/en/) | [Web 3.0 Reddit](https://www.reddit.com/r/web3) | [W3F YouTube](https://www.youtube.com/channel/UClnw_bcNg4CAzF772qEtq4g) |

### Real-time conversation

We have Riot channels for real-time discussions on Web3 and Polkadot. Join the conversations.

- [Web3 Foundation](https://matrix.to/#/#web3foundation:matrix.org)
- [Polkadot Watercooler](https://matrix.to/#/#polkadot-watercooler:matrix.org)

## :rocket: Alternative Funding Sources

### Treasury

The treasury is a pot of on-chain funds collected through transaction fees, slashing, staking inefficiencies, etc. The funds held in the treasury can be spent on spending proposals. Both [Polkadot](https://polkadot.network/) and [Kusama](https://kusama.network/) offer everyone the opportunity to apply for funding via the treasury. See:

- [Treasury Wiki](https://wiki.polkadot.network/docs/en/learn-treasury)
- [Kusama Treasury Guide](https://docs.google.com/document/d/1p3UQUjph5t8TVaWnTkfrI5mE-BABnM9Xvtuhdlhl6JE/edit)
- [Polkadot Treasury Guide](https://docs.google.com/document/d/1IZykdp2cyQavcRyZd_dgNj5DcgxgZR6kAqGdcNARu1w/edit)

### General Grants Program

For larger grants, payments in fiat and partly private submissions, please visit our [Web3 Foundation General Grants page](https://github.com/w3f/General-Grants-Program) on GitHub.

### Other Grant Programs

Below is list of other grant programs in the polkadot/substrate ecosystem:

- [Darwinia Grants Program](https://docs.darwinia.network/docs/en/dev-bounty#grant-program)
- [Moonbeam Grants Program](https://moonbeam.network/community/grants/)
- [Edgeware Grants and Bounties](https://github.com/edgeware-builders/construction-projects)

## :information_source: License <!-- omit in toc -->

[Apache License 2.0](https://github.com/w3f/Open-Grants-Program/blob/master/LICENSE) © Web3 Foundation
