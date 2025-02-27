# opentgov

<img src="https://opentgov.com/img/logo.png" alt="opentgov logo" width="100"/>

## Project Overview

*Empowering voters to engage with OpenGov by using Telegram.*

Opentgov is a full Telegram wrapper for OpenGov pallet.
It allows users to:

- find all the proposals in one place with all the important infos.
- discuss with other tokens holders and directly communicate with token holders.
- vote on any proposals, without signing a single transaction directly from Telegram using Governance proxies.

The MVP had been built during OneBlock+ Polkadot Asia hackathon. Since reaching the hackathon's final, this project evolved in a self-hosted direction that I'm presenting to you today.

This project integrates two particularly interesting aspects of the DOT ecosystem:

- First the OpenGov pallet, allowing you to vote with/without conviction on proposals you're interested in.
- Second the Governance proxy, allowing you to having a delegated account solely capable of voting, without being able to transfer your funds.

The combination of those 2 aspects of Polkadot in addition to a messaging app could really faciliate the participation to the Decentralzied Treasuries.

Personally, I sincerely believe that decentralised treasury is one of the best aspects of the DOT ecosystem. The OpenGov pallet is extremely powerful and also deployed on several chains. It allows us to be extremely forward thinking in terms of on-chain governance. That's why I am currently very active on several parts of the OpenGov field and really interested in building this tool.

- I am the biggest delegator on Moonbeam network and an active member of the Governance Guild there (1.6M GLMR delegated).
- I am active in two DAOs that received a delegation from Decentralized Voices. I'm an active DAO contributor on ChaosDAO and I recently co-founded Le Nexus.

### Project Details

OpentGov is a tool that let users discuss and vote on OpenGov proposals by using Telegram. To do so, we are simplifying the user experience from governance proxy creation to extrinsic signing abstraction.

The project is made of 3 different yet complimentary components.

- A Telegram group fetching every proposals and displaying all the relevant informations in a clean way. Each proposal has its own channel, allowing people to directly ask question to the submitters. Its backend is hosted on a VPS using a Node.js backend.
- A self-hosted Telegram bot written in Node.js that uses your governance proxy key to receive voting commands and perform extrinsic signing.
- A clean front-end built using Express & Nuxt where you can follow the opengov activity.

#### Links

[- Demo Video](https://youtu.be/wJlao-N8hS0?si=IitVva-pqYEO52xt&t=151)

[- Demo Website](https://opentgov.com)

[- Demo Telegram Group](https://t.me/opentgov)

[- X account](https://x.com/opentgov)

[- Hackhaton Pitchdeck](https://docs.google.com/presentation/d/1FI8S-IR1fqjmPzIvPLbv_OnJ0DNwR4ac-76htlK64Zg/edit?usp=sharing)

**Mockups:**

#### Telegram Group

<img src="https://i.ibb.co/WvdXKpmX/phone-portrait.png" alt="telegram view" width="200"/>

#### MVP Technical architecture

<img src="https://i.ibb.co/ccNdp092/diagram-black.png" alt="architecture" width="500"/>

#### Front-end display

<img src="https://i.ibb.co/dshmnY2R/Capture-d-e-cran-2024-10-16-a-18-04-54.png" alt="website" width="500"/>

Unlike the version developed during the hackathon in December 2024, this version of opentgov will not manage/store seeds for each user. Each person will have the ability to create their own wallet and bot using the extensive documentation and later on the self-installation tool.

This choice is both technological and philosophical. It removes any centralised part and reinforces the participative aspect of governance. It should respect self-custodial principles while insuring a smooth as possible UI.

### Ecosystem Fit

Opentgov could easily find its place in the ecosystem, as several chains have implemented the OpenGov pallet: Polkadot, Kusama, Hydration and BiFrost.

In addition, this tool is solving a crucial problem: participation in the governance of Polkadot is currently too complex.

This is not an opinion, but a fact, based on the following data:

- +$160M in the treasury
- 0.72% average vote turnout.
- Less than 1% of the token are used to decide the protocol’s evolution
- 1500 participants each month vs 1.3 million DOT holders

I do believe this low turnout is the result of 3 main factors:

- Fragmented inefficient interfaces,
- Various, often closed, discussion groups
- and a complexe and long voting process

That's why leveraging a blockchain-friendly messaging app such as Telegram could definitely improve the participation of regular users/holders to the treasury.

Also, with the emergence of several DAOs in the ecosystem, having such a tool for collective voting would also be really interesting.

When I announced the project on my [personal x account](https://x.com/mar1dev/status/1848632061508174110), I received a lot of optimistic reaction to this solution.

Note: the recent limitations announced by Telegram regarding the restrictive usage of their application solely impact telegram apps and not bot as described here.

## Team

- **Team Name:** opentgov
- **Contact Name:** Marin
- **Contact Email:** mar1dev @ pm.me
- **Website:** [GitHub](https://github.com/mar1) / [X account](https://x.com/mar1dev)

### Team members

Marin Enault

### Team Code Repos

- [GitHub](https://github.com/mar1)
- [Project Repo](https://github.com/mar1/polkadot-hackathon-2024/tree/main/bangkok/07-opentgov)

### Team's experience

This project is the work of a single fullstack developer, in charge of the development and implementation of the components.

On the development side, I've been active in Polkadot (and before on Kusama) for over 4 years now. I've won a hackathon (Polkadot Prodigy Europe) for a cross-chain carbon credits offsetter and reached the final of OneBlock+ Asia with the current project.

I am a Polkadot Academy Alumni from the Hong Kong cohort.

I co-founded [SaoMai Games](https://saomaigames.com), a game studio that publishes and develops games for Moonbeam and Polkadot. These include The Great Escape and Pinkdrop. We received the support of several actors in the ecosystem and successfully conducted opengov's proposals.

I'm the biggest [Opengov delegator on Moonbeam](https://delegate.moonbeam.network/) and a member of the Grant Committee.

I'm active in 2 DAOs that currently have the DV delegation. I recently co-founded LeNexus, a french-speaking DAO, representing Polkadot online and IRL. I am a also a long time ChaosDAO contributor

## Development Status

The initial development of this product was achieved during OneBlock+ Asia hackathon. The MVP that had been developed was using a centralized solution to store the seeds of the governance proxies in order to use a single bot for everyone.

After carefully discussing with the W3F, Polkabiz and some community members, I decided to pivot the idea and to make it a fully open-source platform, allowing anyone to easily set-up your own telegram bot based on your governance proxy on which you have full-custodiality.

The former repository on GitHub includes the website frontend & the telegram bot handling extrinsic signing through TG API. It is a working MVP but I am now asking for a grant to be capable of making it production ready.

It includes the development and imrpovement of the self-host backend, deployment of the official automated group and integral documentation about the tool. It will later on be updated to a new version (milestone 2) that will bring a multi-chain support and an easier CLI for the entire bot setup.

## Development Roadmap

The development will start with the adaptation of the existing code for self-custody of the governance proxy. You will be able to vote on telegram on any proposals on Polkadot, using a governance proxy without signing extrinsic. You'll have your voting history stored in a local json file. Everything will be self-hosted.

Then, I will emphasize on documentation to make the process as smooth as possible. It means hence the code and the UI are friendly enough, I'll spend a lot of time writing a proper documentation on how to setup your own opentgov bot. This will be published on a revamped website.

In a second time, I will allow the usage of the bot on several networks (Kusama, Hydration, Bifrost). This cross-chain capabilities should enhance the utility of this tool by allowing any substrate-based chain with OpenGov pallet to be implemented.

Finally, I will create a CLI tool that faciliates the setup of the bot without having to master the doc or adapting the code. It will be the final development of this grant. Once this is done, Polkadot ecosystem's users will have an easy to setup, trustless, telegram Bot to participate in the OpenGov on several chains.

### Overview

- **Estimated Duration:** 3
- **Full-Time Equivalent (FTE):**  1
- **Total Costs:** 15 000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and an **in-depth documentation** that explains how a user can create a telegram bot, create a governance proxy and start voting using opentgov |
| 0c. | Testing | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| 0d. | Repo | We will provide a repository that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains what is opentgov and how to start using it |
| 0f. | Social Media Presence | The @opentgov X account will be used to gather a community of voters. The telegram group will gather a community of voters. |
| 1. | Production stage | Milestone 1 will include the functional MVP to vote on Telegram using your own Governance Proxy in a self-custodial way. It will come with a detailed documentations explaining how to create a governance proxy & setup the bot. |
| 1a. | Front-end | Milestone 1 will include a minimalist and clean front-end hosted at opentgov.com to display relevant informations about latest and hottest proposals. |
| 1b. | Telegram Group | Milestone 1 will include the creation of an automated telegram group with 1 channel per proposal. This place thanks to Telegram UX capabilities will allow efficient discussion between participants. |
| 1c. | Back-end | Milestone 1 will include the a full self-hosting node.js backend to start voting on proposals directly through telegram with the conviction integrated. |
| 1d. | Documentation | Milestone 1 will include an exhaustive documentation about how to setup a telegram bot, creating a governance proxy and launching a node program easily. |
| 2. | Multi-chain & CLI | The Milestone 2 will include the integration of several chains of the DOT ecosystem in addition to Polkadot. It will also come with a CLI tool that will make the setup of the bot even easier than on M1. |
| 2a. | Substrate Extension | The Milestone 2 will include the capability for the back-end to handle at least 2 other chains part of the Polkadot Ecosystem. |
| 2b. | Command Line Installer | The Milestone 2 will include the creation of a simple installer. This update will enhance largely the accessibility of the tool for a broader adoption. |
| 2c. | Feedback collection | The Milestone 2 will include the creation of an user experience survey post-deployment. The goal is to collect feedbacks and improve UX in an upcoming update. |

### Budget Breakdown

| Category | Item | Cost | Amount | Total | Description |
| --- | ---- | --- | --- | --- | ---|
| Personel | Full-Stack Developer | 13,000 USD | 1 FTE | 13,000 USD | Developing (frontend and backend) and deploying the project according to the milestones. |
| Personel | Technical Writing | 2,000 USD | 1 FTE | 2,000 USD | Writing an entire documentation covering telegram bot setup, governance proxy creation and overall project usage. |
| --- | --- | --- | **Total** | **15,000 USD** |  |

## Future Plans

This project has several ways of monetizing itself.

First as a common goods open-source project, it could seeks for treasury support if the tool was adopted by token  holders.

It could also use a premium model for DAOs looking for an efficient collective voting tool. The voting mechanism could be then applied to multisig for a small fee.

If the telegram group had a massive success, ads could also be integrated in order to generate a web2 type of revenues.

Additionally a pay-to-pin feature could be implemented in order to make your message more visibile to the broader opentgov's community on the telegram group.

This project has a very small burn rate and could easily be viable for long-term sustainability. Updates be required as the migration to AH of the OpenGov pallet is already planned.

## Additional Information

This projects reached the finals of the OneBlock+ Asia Edition in Bangkokg in December 2024. It made us eligible for the travel bounty.

There is no real competitors at the moment that mixes efficiently opengov and a wide-used messaging app.

In a context of streghtening the Polkadot's community while working towards a better management of the decentralized treasury, Opentgov appears as a tool with a potential product market-fit.
