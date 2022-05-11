# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Setheum HighEnd LaunchPad Crowdsales Module
- **Team Name:** Setheum Labs
- **Payment Address:** 3NaU6UHe9MQyb5d2mFS49DJqaWMsuw7NKd (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

Please provide the following:

Teams and projects that are just getting started launching their products would need to raise funds and even sell their tokens to the public. They need community backed by token holders of their token, that is the crowd so that they could have a strong start. By creating a crowdfunding campaign that ends with their project Tokens getting sold to the public, they can raise funds and sell their tokens to the public.

We happen to be working on a similar product in Setheum, providing the High-End LaunchPad (HELP) Protocol to do just that for the projects building/deploying their tokens on Setheum as smartcontracts contracts.

Therefore, to raise funds ourselves, we are developing this pallet for the Substrate Community to benefit from it, and for us to raise funds from the Web3 Foundation General Grants Program.

The idea is to use the grant program to raise funds for deploying our dedicated Setheum Network nodes to go live.

### Project Details

There are four participants in a LaunchPad Crowdsales Protocol, the Campaign Creator, the Campaign Beneficiary, the Crowd/Contributors, and the Governance Council.

* The Campaign Creator is the person who creates the campaign and the project.
* The Campaign Beneficiary is the person who receives the funds raised.
* The Crowd/Contributors are the people who contribute to the campaign.
* The Governance Council is the people who manage the campaign and the protocol.

**How the protocol Works**

![Screenshot from 2022-01-23 13-31-41](https://user-images.githubusercontent.com/15086345/150666483-3f9a07b3-2e76-46f9-97f9-729679c03f1c.png)
The HighEnd LaunchPad Protocol lets teams/projects/campaigns achieve two (2) major goals at once, it raises money, and and sell their tokens to the public.
The protocol uses `MultiCurrency` to let the Campaign Creator choose which currency to raise/sell their tokens for. Therefore,  Campaign Creator can choose to raise funds in any currency available on the chain.

There is a `goal` that is set by the Campaign Creator, the beneficiary of the fund and the Period (campaign period - amount of blocks a campaign should stay active) of the campaign and other information that describes the campaign.

**The Lifecycle of a Campaign**

A Launchpad Campaign has three stages in its lifecycle, they are as follows:

1. **Pre-Funding/Proposal Stage**: The Campaign Creator creates the campaign and sets the Period/TimeCap and HardCap. In this stage, the Campaign Creator must submit the proposal to the Governance Council along with a `SubmissionDeposit` required by the protocol.

2. **Waiting Stage**: The Campaign waits for the appropriate time to start the Campaign. The Protocol has a `WaitingPeriod` that is set on runtime, and all campaigns have to wait for that period to start.

3. **Funding/Active Stage**: The Campaign can raise funds and sell their tokens to the public in this stage. If the `goal` is reached before the `period` to end the campaign, the campaign will be ended and the funds will be available for the public to claim and the raised funds for the Campaign Beneficiary or Creator to claim.

**Campaign Ctegories**

**A Successful Launchpad Campaign**

A successful Launchpad Campaign is one that has raised the `goal` and has sold their tokens to the public. Once the `goal` is reached, the Campaign is considered successful.

**A Failed Launchpad Campaign**

A failed Launchpad Campaign is one that has not raised the `goal` and has not sold their tokens to the public. Once the `goal` is not reached and the `period` to end the campaign has ended, the Campaign is considered failed and the campaign allocation of tokens is available for the Campaign Creator to claim refund and the raised funds are also available for the Crowd/Contributors/buyers to claim refunds all only before the `RetirementPeriod` of the campaign.

#### Prior work

The initial implementation of the project which was intended as a deliverable for this grant was initiated a few days ago and made sure that the project was working as expected, before the application is to be submitted to the Grants Program to avoid large design & implementation ammendments during the grant deliverance.
    We are working on the [Setheum node Implementation](https://github.com/Setheum-Labs/Setheum).

#### Technology Stack

The substrate pallet is written in rust based on the `FRAME` Substrate framework. The pallet types in `types.json` are generated in `JSON`, and the Test Node will be a fork of the `Setheum Node` based on the `substrate-node-template`, the node leverages the `ORML` stack for a lot of functionalities especially `Multi-Currency` functionalities. And the GUI to be used in the tutorial is a custom `React.JS` app utilising `Polkadot.JS`.

#### Non-Goals

I muat be very clear that we are not intending to implement the Setheum HighEnd LaunchPad Proocol as is described in our Whitepaper. Rather, this is only a stepping stone towards those goals. This will only implement a simple launchpad crowdsales substrate pallet. While we intend to implement this protocol in Setheum, it is not yet ready for production and might currently have unknown issues, therefore this does not represent the final state of what is intended to go into production on our main chain implementation, and we do not intend the current implementation to have the robust functionalities of a production-level launchpad platform. This will instead only result in an initial test network for evaluation purposes.

### Ecosystem Fit

- Our project fits in the DEFi chain realm of the ecosystem.
- Our target audience is DeFI, and bridging Parachain;
- It meets the needs of Ethical DeFi governed as Shari'ah Compliant DeFi Blockchain.
- There are other projects similar to Setheum in the substrate/Polkadot/Kusama ecosystem, like Acala that supports DeFi and there is the FRAME simple-crowdfund pallet that is a part of Substrate FRAME providing a simple crowdfunding mechanism, our pallet provide crowdsales mechanisms. But as for the Halal Ethical DeFi governed as Shari'ah Compliant DeFi, I have not come across similar projects in the ecosystem.
Setheum is different in its core governance principle such that it serves as a Halal Ethical DeFi governed as Shari'ah Compliant DeFi network. And it has plans for embedded on-chain Flashloans running in an on-chain `Flashloans-Virtual-Machine` similar to the EVM (but not turin complete) just for executing isolated flashloan transactions. We also differ in the Stablecoin stability mechanism in Setheum, which is an elastic Algorithmic-Stablecoin-Stability mechanism provided by the SERP (Setheum Elastic Reserve Protocol). We also differ in that we have 2 stablecoins and 4 other tokens which all serves a different purpose in the ecosystem.

## Team :busts_in_silhouette:

### Team members

- Muhammad-Jibril B.A.

### Contact

- **Contact Name:** Muhammad-Jibril B.A.
- **Contact Email:** jbashir52@gmail.com
- **Website:** https://setheum.xyz

### Legal Structure

Not set up yet.
### Team's experience

I am building the Setheum Network project and all related code works in the organisation. I have a Computer Science degree (currently in my final year of study) and I have been working on Setheum for a few years now. And will be launching this year by God's grace.
I have been an active programmer in a few more programming languages and frameworks. I have been working and learning on the Substrate/Polkadot/Kusama ecosystem for a few years now.

I have previously applied for this grant about 10 months ago (then TERMINATED, the best thing that happened to me) when I (Muhammad-Jibril BA.) was very new to FOSS and both Rust & Substrate. And Setheum has evolved a lot since then, and so have I learnt a lot from the Substrate community and from trial and error in building Setheum from a beginner in rust to current status. All thanks to God and thanks to the Web3 Foundation.

### Team Code Repos

- https://github.com/Setheum-Labs
- https://github.com/Setheum-Labs/Setheum
- https://github.com/Setheum-Labs/launchpad-crowdsales

- https://github.com/JBA-Khalifa

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/muhammad-jibril

## Development Status :open_book:

We have started development of this specific protocol in [this repository](https://github.com/Setheum-Labs/launchpad-crowdsales). And posted a Medium article on the design concept of the protocol and its proposed final/production state [here](https://medium.com/setheum-labs/help-highend-launchpad-setheums-ido-crowdfunding-protocol-36c43566c927). We have also created some GitHub [Milestones](https://github.com/Setheum-Labs/launchpad-crowdsales/milestones) and [issues](https://github.com/Setheum-Labs/launchpad-crowdsales/issues) to track the progress of the development.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 weeks;
- **Full-Time Equivalent (FTE):**  1.2
- **Total Costs:** 7,700 USD;

### Milestone 1 Example — Implement Substrate Modules

- **Estimated duration:** 1 month
- **FTE:**  1.2
- **Costs:** 7,700 USD (BTC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d | CI/CD | Automate build and tests with GitHub Actions. |
| 0e. | Article/Tutorial | We will publish an **article** that explains what was done/achieved as part of the grant and a short tutorial on how it works in a demo node. |
| 1. | Substrate module: launchpad-crowdsales | We will create a Substrate module that will allow teams/individuals/projects to raise funds through a crowdsales launchpad where they can sell their tokens to the public in a token sales event fashion similar to an ICO. |  
| 2. | Types Generation | We will create a `types.json` file that defines the types in the `launchpad-crowdsales` Substrate module. |
| 3. | Demo node | The Pallet will be added to a demo substrate node fork of Setheum node |
| 4. | Docker file | Provide a docker file with the demo chain that demonstrates this project |
| 5. | CLient API | Provide a custom Client API for interacting with the pallet |
| 6. | Simple UI | Provide a simple UI for interacting with the pallet |
| 7. | Benchmarking | Add benchmarking to the pallet |

## Future Plans

- We intend to continue the development of this protocol as highlighted in our whitepaper and in this protocol's development milestones. We intend to support a `launchpool` that lets successful launchpad campaigns access to bootstrapping their token directly into the Setheum DEX (SetSwap) and let LPs provide liquidity to the pools with LP Launchpool incentives and LaunchPad commissions. We are planning on introducing a `soft_goal` and a `hard_goal` for launchpad crowdsales as well as a `MaxProposalsCount` and a `MaxCampaignsCount` that will limit the number of campaigns and proposals that can be running simultaneously in the protocol. And we intend to add a `RejectionReason`/`rejection_reason` field to the `Proposal` structure that will allow the council to specify a reason for rejection of a proposal to more accurately inform the campaign creator on issues with their proposal and an insight on how it may be solved. We also plan to add a `MinContributors` field to the `Campaign` structure that will allow the council to specify the minimum number of contributors required to start the campaign. We also plan to support `pause_campaign()` to let the Council pause an ongoing active campaign and `resume_campaign()` to let the Council resume a paused campaign, to provide robust governance and to prevent abuse of the protocol. And more features like integrating ERC20s and integrating to Setheum's upcoming QMA-Flashloans protocol as described in our whitepaper...
- The team plans and intends to integrate this protocol into the Setheum DEX (SetSwap) and the Setheum Network. We will also be launching some of the first ERC20s to be listed on the SetSwap in Setheum through this protocol.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** personal recommendation.

- We have already built the Setheum Node 1.0 and will be launching it as soon as we get the grant funds. And we will be building a Polkadot Parachain Bridge to connect the Setheum Network to Polkadot in the future for full interoperability.
- We are fully self-funded but will be commencing an on-chain Private Sales right after genesis.
- Because the design of Setheum was constantly changing (until recently when it was finalised), we decided to put our private investors on hold until we had a stable design & implementation (which we now do).
- I have previously applied for this grant about 10 months ago (then TERMINATED, the best thing that happened to me) when I (Muhammad-Jibril BA.) was very new to FOSS and both Rust & Substrate. And Setheum has evolved a lot since then, and so have I learnt a lot from the Substrate community and from trial and error in building Setheum from a beginner in rust to current status. All thanks to God and thanks to the Web3 Foundation.
- The Substrate demo node we are using is a fork of the `Setheum Node` with a `GPL-3.0 License`, while the pallet has an `Apache-2.0 License`.
