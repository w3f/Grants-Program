# Polkadot Open Source Grants Bounty<!-- omit in toc -->

- [Introduction](#introduction)
  - [Guidelines](#guidelines)
  - [Project Ideas](#project-ideas)
  - [Support](#support)
  - [Curators](#curators)
- [Process](#process)
  - [1. Application](#1-application)
  - [2. Application Review](#2-application-review)
  - [3. Milestone Delivery and Payment](#3-milestone-delivery-and-payment)
  - [Changes to a Grant after Approval](#changes-to-a-grant-after-approval)
- [Help](#help)
  - [Real-time Conversation](#real-time-conversation)

## Introduction

[Open Source Developer Grants](https://polkadot.polkassembly.io/bounty/59) support individuals and small teams in developing open-source software for the Polkadot ecosystem. This initiative aims to fund up to 15 projects with grants of up to $30,000 USD (payable in DOT) each, focusing on those with a proven background in open-source software development. Projects can include proofs of concept, general-purpose libraries, or full-scale dApps that benefit the Polkadot ecosystem.

### Guidelines

Anyone is welcome to apply for a grant. Projects funded through our programs are broad in scope, but our focus lies on strong **technical** projects that add value to the ecosystem. Teams apply publicly using an application template, where community members can comment and make change suggestions. Applications are accepted or rejected by the curators of this bounty based on the following criteria:
	
* The applications focus on open-source software development directly or indirectly beneficial for the Polkadot ecosystem. Acceptable licenses are The Unlicense, Apache, MIT, or GPL v3.
* Teams need to build solutions on or for the Polkadot Network, which are:
  * focused on implementing common good infrastructure and
  * not the issuer and/or the promoter of any token at the time of the application.
* Teams need to successfully undergo a KYC/KYB process.
* Each team can only receive one grant. 
* The technical development is unique and doesn’t already exist in the ecosystem. 
* Projects must not actively encourage gambling, illicit trade, money laundering, or criminal activities in general.
* The scope and funding amount of the project as a whole and each milestone are subject to discussion. Since grants are focused on software development, funding should closely follow the person-hours estimated for each milestone. 
* If an application is accepted, they can start working on the project. Payments are made once a milestone is delivered and successfully evaluated by one of the curators of the bounty. 

Generally, your project will have better chances to be accepted if:

- It presents a **well-researched** or tested concept, for which, ideally, you are able to show some prior work.
- You can demonstrate that the project will be **maintained** after completion of the grant, be it through an obvious commitment to the technology from your side, additional funding sources, or an existing business model.
- Your team has **proven experience** with the relevant languages and technologies and/or a strong technical background. You will be asked to provide the GitHub profiles of your team members as part of your application, which we will examine for past activity and code quality. Naturally, you can also link to projects on other platforms.
- Your application is **rich in technical details** and well-defined.
- You can clearly present how your project stands out among competitors or implements technology that doesn't exist in the ecosystem yet.

In addition to the information provided on your application, note that your project will need to comply with our [Guidelines for Milestone Deliverables](https://github.com/PolkadotOpenSourceGrants/apply/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md). In particular, we require all projects to create documentation that explains how their project works. At a minimum, _written_ documentation is required for funding. Tutorials or videos are also helpful for new users to understand how to use your product.

⚠️ We take licensing and the right of all teams in and outside the ecosystem to be recognised for their work very seriously. Using others' work with no attribution or indication that this was not your own work as part of a milestone delivery **will lead to immediate termination**. Please reach out to us before submitting if you have any doubts on how to comply with a specific license and we'll be happy to help.

We also try to enforce our [code of conduct](CODE_OF_CONDUCT.md) and, based on this, may [block users](https://github.blog/2016-04-04-organizations-can-now-block-abusive-users/).

### Project Ideas

An overview of existing projects in the Web 3.0 Technology Stack, along with broad project ideas we would potentially be interested in funding, can be found [here](https://wiki.polkadot.network/docs/build-open-source), as well as a list of previously accepted applications [here](https://github.com/PolkadotOpenSourceGrants/apply/blob/master/applications/index.md).

### Support

The scope of the Open Source Developer Grants Bounty consists of funding and feedback on delivered milestones. This means that we do not provide hands-on support as part of a grant. 

### Curators

The curators consists of individuals who know the funding priorities of the Polkadot ecosystem and is responsible for evaluating grant applications and providing feedback on these.

 - Diogo Mendonca from Ditavia
 - Tommi Enenkel from Alice und Bob
 - Otar Shakarishvili from JUST Open Source
 - Luca von Wyttenbach from Polimec
 - Sebastian Müller from Web3 Foundation

## Process

### 1. Application

   0. Please read our [guidelines](#guidelines) above to familiarize yourself with the scope and goals of the bounty.
   1. [Fork](https://github.com/PolkadotOpenSourceGrants/apply/fork) this repository.
   2. In the newly created fork, create a copy of the application template ([`applications/application-template.md`](applications/application-template.md)). If you're using the GitHub web interface, you will need to create a new file and copy the [contents](https://raw.githubusercontent.com/PolkadotOpenSourceGrants/apply/master/applications/application-template.md) of the template inside the new one. Make sure you **do not modify the template file directly**. 
   3. Name the new file after your project: `project_name.md`.
   4. Fill out the template with the details of your project. The more information you provide, the faster the review. 
   5. Once you're done, create a pull request. The pull request should only contain _one new file_—the Markdown file you created from the template.
   6. Our pull request template contains a checklist. You can leave it as is and tick the checkboxes once the pull request has been created. Please read through these items and check all of them.

### 2. Application Review

   1. The curators/reviewers can (and usually do) issue comments and request changes on the pull request.
   2. Clarifications and amendments made in the comments _need to be included in the application_. You may address feedback by directly modifying your application and leaving a comment once you're done. 
   3. The application will be accepted and merged or rejected after the curators have come to an agreement. Unless specified otherwise, the day on which it is accepted will be considered the starting date of the project, and will be used to estimate delivery dates.

### 3. Milestone Delivery and Payment

   Milestones are to be delivered on the [delivery](https://github.com/PolkadotOpenSourceGrants/delivery/) repository following the [process](https://github.com/PolkadotOpenSourceGrants/delivery#milestone-delivery-process) described therein.

### Changes to a Grant after Approval

- Accepted grant applications can be amended at any time. However, this _necessitates a reevaluation by the curators_. If your application has been accepted and, during development, you find that your project significantly deviates from the original specification, please open a new pull request that modifies the existing application. This also applies in case of significant delays.
- If your _delivery schedule_ significantly changes, please also open a pull request with an updated timeline.
- If your deliveries are significantly delayed, and we cannot get a hold of you, we will terminate the grant.


## Help

If you have any questions, feedback or concerns about this program, please open an issue on the application repository. One of the curators will get back to you as soon as possible. Alternatively, we have a Matrix channel for grant-related questions and activities. Head over there to ask grants-related questions, share your experience with other applications and grantees, or simply hang out: [Polkadot Open Source Developer Grants Program](https://matrix.to/#/#OSDGP:matrix.org)

## License<!-- omit in toc -->

[Apache License 2.0](LICENSE)
