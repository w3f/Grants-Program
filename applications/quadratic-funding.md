# Quadratic Funding Module

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Payment Address:** DAI, 0x69ecE265815B1F0357cc08c6b1C47F3785c3CB46

## Project Overview :page_facing_up:

> If this application in response to an RFP then please indicate this on the first line of this section.

This application is to solve the problem proposed in [On-chain Quadratic Funding (General-Grants-Program/rfp-proposal/on-chain-quadratic-funding.md)](https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/on-chain-quadratic-funding.md)

### Overview

> Please provide the following:
    * A brief description of the project.

Quadratic Funding is a common short name for [Constrained Liberal Radicalism algorithm (referred to as CLR in this proposal)](https://blogchains.org/wp-content/uploads/sites/4/2019/04/SSRN-id3243656.pdf) proposed by Vitalik Buterin 2018, and is a crowdfund matching mechanism for public goods, like open source. The authors of the paper summaries the mathematical idea as below.

_"Individuals make public goods contributions to projects of value to them. The amount received by the project is (proportional to) the square of the sum of the square roots of contributions received."_

The mechanism is a concrete proposal for making grassroots donations something much larger by proportionately matching more towards small donations compared to large ones. It has been efficiently funding projects in the Web3 ecosystem.

According to @Noc2 and @Swader in [the RFP](https://github.com/gitcoinco/quadratic-funding),
_[Gitcoin](https://gitcoin.co/) is currently using this mechanism to successfully fund and support public goods. However, Gitcoin's solution is centralized. The goal of the RFP is to develop a decentralized solution on top of [Substrate](https://github.com/paritytech/substrate), which can potentially be integrated into Kusama, Polkadot or any other Substrate-based chain as a pallet. The on-chain treasury could potentially sustainably fund the matching pool in the long-run. However, the Web3 Foundation would also be committed to fund a matching pool of the solution for initial test rounds._

> * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.

We will build a Substrate pallet in Rust.

> * An indication of why your team is interested in creating this project.

I have friends working at Gitcoin since 2018 and I'm a big fan of their work. I am already a Gitcoin user familiar of the CLR mechanism used in their grants, and think it's a great experiment trying to solve many real-world problems. Transparency has always been one of the highlights of blockchain, and by bringing a innovative and sophisticated funding mechanism on-chain will provide great utility to Polkadot ecosystem. The problem is challenging and fun to solve, and related to the DAO concept of my focus, therefore I decide to gear up and tackle the RFP.

### Project Details

> We expect the teams to already have a solid idea about the project's expected final state.
Therefore, we ask the teams to submit (where relevant):
    * Mockups/designs of any UI components
    * API specifications of the core functionality
    * An overview of the technology stack to be used
    * Documentation of core components, protocols, architecture etc. to be deployed
    * PoC/MVP or other relevant prior work or research on the topic

The project is divided into two milestones, substrate module and web application.

In the first milestone we will create a substrate module for the core CLR mechanism implementation, which will include struct, event, error code, and API function definitions. Then, we will build a substrate chain to host and demonstrate the module.

In the second milestone, we will create a web application interacting with Polkadot.js browser extension to demonstrate the use case of the developed module. The features of the web interface will be similar to today's Gitcoin web UI, however, rather than retrieving the matching donation calculation results from a centralized server, our UI will talk to our substrate chain directly. Upon sending a donating transaction, a user is guaranteed that his/her donation has been recorded in substrate storage and corresponding matching fund will be arranged by the chain.

A simple flow of the application is shown using below UML sequence diagram. Note that it only demonstrates the ideal case. Interruptions and error cases are omitted in the diagram.

[User flow diagram on Lucid Chart](https://lucid.app/lucidchart/b9eb3034-1615-443c-9e8c-948cbfcecaf1/view)

Diving deep into possible user scenarios, I find they are more complicated than initially thought. For example, we need to code a way to prevent collusion of two projects, one of which could possibly use the matching fund to vote for the other's application in order to get more funds. That said, we will start with the basic logic and address issues occurred on the way.

**Update #1**

We have completed the initial design of the web app wireframe, so I'm attaching it below. It contains two major pages, the Project Listing page and Project Detail page. The  goals of those pages are to clearly present details of participating projects, as well as the matching amount to individual donation. I personally like the user comments and on-chain transactions elements at the bottom of the second page. Not only does it create a plaza for individual donators to speak out, it also connects the donation activity to those voices, thus creating a strong sense of authenticity.

[Web app wireframe on Lucidchart](https://lucid.app/lucidchart/b50c73aa-55ac-4037-a43d-6623fc6bf977/view?page=0_0#)

### Ecosystem Fit

> Are there any other projects similar to yours? If so, how is your project different?

There are DAO projects such as PolkaDAO being built on Polkadot, providing utility for fund-raising of private companies. However, our focus is different. This project aims to provide an on-chain crowdfunding solution with a matching function. Specifically, it consists of two components, crowdfunding and matching donations.

1. **Crowdfunding**: Individuals crowdfund donations towards public goods (for example: open source software).
1. **Matching donations**: These individual contributions are ‘matched’ or ‘topped-off’ by a government, grants program, or private philanthropist.

Besides open-source program grant, the CLR mechanism can be applied to other crowdfunding for public goods, such as government electoral voting and non-profit funding. I have friends running an non-profit organization at Silicon Valley. My goal is to work with her to create the first real-world non-profit fundraising using CLR on Polkadot.

## Team :busts_in_silhouette:

### Team name

OAK Foundation

### Team members

* Name of team leader: Chris Li
* Names of team members: Xingyou Chen, Zhongwei Shi, Kangbin Ge

### Contact

* **Contact Name:** [Chris Li](https://www.linkedin.com/in/chrisli2046/)
* **Contact Email:** chris@oak.tech
* **Website:** <https://oak.tech>

### Legal Structure

Individuals

### Team's experience

> Please describe the team's relevant experience. If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.

I worked at Microsoft for 4 years as a senior protocol (API) engineer before taking the leap into blockchain 2017, and have accumulated great experience with smart contract and application development on Ethereum, EOS, and RSK. Here are my achievements and expertise.
* Implemented a prediction market dapp on Ethereum.
* Built games on EOS and ranked the top 10 by DappRadar & DappReview in daily volume for 6 months.
* Assembled an engineer team and built iOS & Android crypto wallets for the past 1.5 years.
* Very familiar with Bitcoin and Ethereum multi-signature, ENS, and Wallet Connect.

My strongest programing languages are C++ & C#, and have been ramping up on Rust since Fall 2020.

### Team Code Repos

* <https://github.com/OAK-Foundation/OAK-blockchain> (Blockchain in development)
* <https://github.com/OAK-Foundation/OAK-docs> (Developer documentation)
* <https://github.com/OAK-Foundation/quadratic-funding-pallet> (Quadratic Funding pallet)
* <https://github.com/OAK-Foundation/quadratic-funding-test> (E2E Quadratic Funding test cases using Polkadot.js)
* <https://github.com/OAK-Foundation/quadratic-funding-webapp> (The web application of Quadratic Funding)
* <https://github.com/OAK-Foundation/extension> (Open-source contribution to Polkadot.js extension)
* <https://github.com/OAK-Foundation/hackathon-2021-spring> (The demo project for Parity hackathon in Shanghai 2021)

### Update 2: UI Examples

UI demos of the team's previous work, which includes
* rWallet iOS app: production screenshots and example sketch source file
* RSK website: finalized design image and example sketch source file
* Forge Labs website: production screenshot
<https://drive.google.com/drive/folders/1nZPg4PmWSBxbfHuMyuAlw8UVXSybjTHG?usp=sharing>

### Team LinkedIn Profiles

* [Chris Li](https://www.linkedin.com/in/chrisli2046/)
* [Xingyou Chen](https://www.linkedin.com/in/xingyou-chen-283056205/)
* [Zhongwei Shi](https://www.linkedin.com/in/shi-zhongwei-b06573205/)
* [Kangbin Ge](https://www.linkedin.com/in/kangbin-ge-08a56b205/)

## Development Roadmap :nut_and_bolt:

> This section should break out the development roadmap into a number of milestones. Since the milestones will appear in the grant contract, it helps to describe the functionality we should expect, plus how we can check that such functionality exists in the product. Whenever milestones are delivered, we refer to the contract to ensure that everything has been delivered as expected.

### Overview

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  4 FTE
* **Total Costs:** 20,000 DAI

### Milestone 1 — Implement Substrate Modules

* **Estimated Duration:** 1.5 month
* **FTE:**  4
* **Costs:** 20,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains the usage of the API. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Tutorial | We will write tutorials on Medium that explains the work done as part of the grant.
| 1. | Substrate module: CLR | We will create a Substrate module that have below functionalities.<br />1. Project: create, cancel, contribute, withdraw<br />2. Proposal: create, vote, cancel, finalize, appeal<br />3. Functions should be able to interact with Polkadot Identity Module and filter participants based on their identity information.|  
| 2. | Substrate chain | Module CLR of our custom chain will be interacted with above defined functions through API |  
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 2 — Web Application (Dapp)

* **Estimated Duration:** 1 month
* **FTE:**  4
* **Costs:** 0 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can interact with the application with Polkadot.js browser extension. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Tutorial | We will write Medium tutorials that explains the work done as part of the grant.
| 1. | Application Implementation | We will incorporate the javascript library from the previous step and build a web application that interacts with our substrate chain. Note that the web is a separate product from polkadot.js.org/apps/#/rpc and will provide user friendly interface without necessary knowledge of API calls. |  
| 2. | Deployment Instructions | We will provide one-line runner for the web application so others could spin up the app easily. |

## Future Plans

> Please include the team's long-term plans and intentions.

In my opinion there are tons of things we can keep iterating on, but there are four important areas in terms of future development.

1. User Study. We should invite a group of beta users for trial and feedback after launch. According to @semuelle, a few questions should be answered in the study plan. For example,
    * How do we choose subjects? What is the target size?
    * What's the questionnaire for the users in the study?
    * How do we measure and make use of the results?

1. Sybil resistance. As development of this mechanism progresses to production, a number of challenges such as collusion and Sybil attack need to be addressed. Vitalik has proposed a method MACI, or [Minimal anti-collusion infrastructure](https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413) and a project [Governance OS Voting](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/nuclei_governance_os_voting.md) from Polkadot General Grant has been working on a solution. We will try our best to integrate those open source projects in order to fight against collusion.

1. Generalization of incentive protocol. The CLR mechanism, if proven, is one of many ways to conduct crowd-funding for public goods. Just as Substrate provides a framework for any kind of state transition machine, the donation-matching, or even broadly, incentive part should be generalized to easily adapt to other methods. Although new methods need to be coded into the substrate module, but as it evolves, the module will contain most common used methods for the council to choose from.

1. Reputation protocol integration. The incentive protocol layer sits on top of and relies on reputation protocol. Although the CLR can work without knowing the reputation of a wallet, a lot more advanced features will require a reputations system. For example, without reputation, the risk of cheating is minimum. Therefore, the incentive protocol needs a lot of heavy-lifting work, such as keeping tracking of the relationship of every wallet pair to prevent fraud. Ideally, there will be a reputation layer on Polkadot for our incentive protocol to build upon.

1. Fund dispensing. We have this idea to raise money for public goods, however, could we also improve the way we spend the money? With the transparency of blockchain, the delivery of the work is open to public for examination. By connecting the developer to the public directly, the product will dramatically reduce the work required from the traditional middleman and create a fair competition among developers.

1. Social experiment. The project is only valuable when put into real-world scenarios. It, along with Polkadot, are great exciting social experiments. I believe in beta and later production we will encounter challenges on both technical and philosophical sides. It will be an on-going effort to address those issues, and to improve the product as it's constantly put into test.

## Additional Information :heavy_plus_sign:

> Possible additional information to include:
>
> * What work has been done so far?

We have gone through all tutorials on substrate.dev, played around with the framework and are ready to start.
>
> * Are there are any teams who have already contributed (financially) to the project?

None

> * Have you applied for other grants so far?

No
