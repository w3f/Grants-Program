# Polkadot Open Source Grants Bounty<!-- omit in toc -->

- [Introduction](#introduction)
  - [Guidelines](#guidelines)
    - [Application Requirements](#application-requirements)
    - [Tips for Good Applications](#tips-for-good-applications)
  - [Project Ideas](#project-ideas)
  - [Support](#support)
  - [Curators](#curators)
- [Process](#process)
  - [1. Application](#1-application)
  - [2. Application Review](#2-application-review)
  - [3. Milestone Delivery and Payment](#3-milestone-delivery-and-payment)
  - [Changes to a Grant after Approval](#changes-to-a-grant-after-approval)
- [Help](#help)

## Introduction

The [Polkadot Open Source Developer Grants bounty](https://polkadot.polkassembly.io/bounty/59) supports individuals and small teams in developing open-source software for the Polkadot ecosystem. This initiative aims to initially fund up to 15 projects with grants of up to $30,000 USD (payable in DOT) each, focusing on those with a proven background in open-source software development. Projects can include proofs of concept, general-purpose libraries, or full-scale dApps that benefit the Polkadot ecosystem.

## Guidelines

Anyone is welcome to apply for a grant. Projects funded through our programs are broad in scope, but our focus lies on projects with a strong technical focus that demonstrably add value to the Polkadot ecosystem. Therefore, applicants will be expected to present a solid and compelling long-term roadmap. We also expect the application teams to have a thorough understanding of the technologies they are planning to use. Also note that:

- Grant payouts are **denominated in USD** and paid out after a milestone has been delivered and _successfully evaluated_. Payouts are made in DOT using the 7-day EMA price as listed by Subscan at the day of payout initiation without any top-up requests thereafter due to potential price movements.
- The program aims to efficiently fund software development that is beneficial for the Polkadot ecosystem as a whole. As such, we don't fund **tangential costs** such as business-oriented activities (marketing, business planning), events, outreach, hosting costs, or audits. 
- If work on a grant significantly falls behind **schedule**, grantees must notify the curators as soon as possible to map out an action plan. The curators maintain the right to cancel a grant if grantees fail to do so, are unresponsive to inquiries or the grant becomes technically obsolete.


### Application Requirements

Applications fall into one of two categories, open source projects and business-oriented projects. For pure **open source projects**, we expect the applicants to provide evidence of 

- the community expressing desire for such a project, for example by an active forum post or evidence of similar, successful projects in other ecosystems and
- experience in open source software development and community engagement initiatives.

For **business-oriented projects**, we require applicants to provide

- a robust business plan including a comprehensive market analysis documenting the target audience and their needs/pain points, market size and growth potential, trends, competitive landscape, and go-to-market strategy including customer acquisition, 
- a long-term roadmap that includes funding goals which outline your funding requirements, including the amount of funding needed, the timeline for securing funding and the proposed use of funds. This should include a detailed breakdown of costs, revenue projections and key milestones that will be achieved with the funding.

Additionally, _all_ grant applications must fulfill the following requirements:

- Code produced as part of a grant must be open-sourced, and it should also not rely on closed-source software for full functionality. Please refer to the list of OSI approved licenses for options.
- We do not award grants for projects that have been the object of a successful token sale.
- We do not fund projects that actively encourage gambling, illicit trade, money laundering, or criminal activities in general.
- The beneficiaries of the grant must successfully go through a KYC/KYB check during the application phase in order to be eligible.
- In addition to the information provided on your application, note that your project will need to comply with our delivery guidelines. In particular, we require all projects to create documentation that explains how their project works in detail. At a minimum, written documentation is required for funding. Tutorials or videos are also helpful for new users to understand how to use your product.

Finally, we take licensing and the right of all teams in and outside the ecosystem to be recognized for their work very seriously. Using others' work with no attribution or indication that this was not your own work as part of a milestone delivery will lead to immediate termination. Please reach out to us before submitting if you have any doubts on how to comply with a specific license and we'll be happy to assist.

In addition to the information provided on your application, note that your project will need to comply with our [delivery guidelines](https://github.com/PolkadotOpenSourceGrants/delivery/blob/master/delivery-guidelines.md). In particular, we require all projects to create documentation that explains how their project works. At a minimum, _written_ documentation is required for funding. Tutorials or videos are also helpful for new users to understand how to use your product.

### Tips for Good Applications

Generally, your project will have a better chance of being accepted if

- the focus of the application lies on the software that is being developed as part of the grant and less on a project/venture/operation. For the purpose of the application and delivery, think about how others benefit from your work.
- it presents a well-researched or tested concept, for which ideally you can show some prior work;
- you have tangible proof of how and to what extent the project is a benefit to the Polkadot ecosystem and its users;
- you can demonstrate that the project will be maintained after completion of the grant, be it through an obvious commitment to the technology from your side or additional funding sources;
- your team has proven experience with the relevant languages and technologies and/or a strong technical background;
- your application is rich in technical details and well-defined;
- you can present how your project stands out among competitors or implement technology that doesn't exist in the ecosystem yet.

Also, we expect the teams to already have a solid idea about the project's expected final state. Therefore, we recommend including as much information as possible about the current state of your project, relevant previous work, and the proposed architecture/work, such as

- Mockups/designs of any UI components
- Data models and/or API specifications of core functions
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or _will not_ provide or implement

## Support

The scope of the Open Source Developer Grants Bounty consists of funding and feedback on delivered milestones. This means that we do not provide hands-on support as part of a grant. If you have issues or questions about your grant or the processes around it, please reach out to us as described in the [Help](#help) section below.

## Curators

The curators consists of individuals who know the funding priorities of the Polkadot ecosystem and is responsible for evaluating grant applications and providing feedback on these.

 - Diogo Mendonca from [Ditavia](https://www.ditavia.com/)
 - Tommi Enenkel from [Alice und Bob](https://twitter.com/alice_und_bob)
 - Otar Shakarishvili from [JUST Open Source](https://www.justopensource.io/)
 - Luca von Wyttenbach from [Polimec](https://www.polimec.org/)
 - Sebastian Müller from [Web3 Foundation](https://web3.foundation/)

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
