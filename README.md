# Polkadot Fast-Grants Programme<!-- omit in toc -->

- [Introduction](#introduction)
  - [Guidelines](#guidelines)
    - [Application Requirements](#application-requirements)
    - [Tips for Good Applications](#tips-for-good-applications)
  - [Support](#support)
  - [Curators](#curators)
- [Process](#process)
  - [1. Application](#1-application)
  - [2. Application Review](#2-application-review)
  - [3. Milestone Delivery and Payment](#3-milestone-delivery-and-payment)
  - [Changes to a Grant after Approval](#changes-to-a-grant-after-approval)
- [Help](#help)

## Introduction

The Polkadot Fast-Grants Programme provides funding for early-stage builders on Polkadot. This initiative aims to fund projects with grants of up to $10,000 USD (in DOT) each. The goal is simple: anyone who wants to build on Polkadot can get initial funding to do so.

The Fast-Grants Programme is:

- **Fast**
- **Retroactive**
- **Milestone-based**:
- **Low-risk**
- **First point of contact**

## Guidelines

Anyone is welcome to apply for a fast-grant. We are looking for projects with high growth-potential (users, revenue, transactions) that can continue past the Fast-Grants, e.g. by raising VC funding, or joining one of the downstream grants programmes. While all types of projects will be considered, priority will be given to:

- Projects building on Plaza/Polkadot Hub
- Games
- DeFi applications

Note that:

- Grant payouts are **denominated in USD** and paid out after a milestone has been delivered and _successfully evaluated_. Payouts are made in DOT using the 7-day EMA price as listed by Subscan at the day of payout initiation without any top-up requests thereafter due to potential price movements.
- Grants are capped at **$10,000 USD per application** with a maximum of **$15,000 USD per project** (in exceptional cases where additional funding is needed).
- Each milestone is capped at **$5,000 USD**.
- Solo developers (1-person teams) are eligible for funding.

### Application Requirements

All grant applications must fulfill the following requirements:

- Code produced as part of a grant must be open-sourced.
- Applications must clearly specify what the funds will be spent on, and must fund tangible costs (e.g. hours spent on a project, hosting services, or infrastructure providers).
- Milestones must be delivered within 3 months, or they will be considered undelivered by default.
- Partial delivery of milestones is not acceptable.

### Tips for Good Applications

Your project will have a better chance of being accepted if:

- You provide clear details on what you're building and how it benefits the Polkadot ecosystem
- You have a clear plan for continuing development after the fast-grant
- Your application includes specific, achievable milestones
- You demonstrate technical capability and understanding of the technologies you'll use

## Support

The scope of the Fast-Grants Programme consists of funding and feedback on delivered milestones. This means that we do not provide hands-on support as part of a grant. If you have issues or questions about your grant or the processes around it, please reach out to us as described in the [Help](#help) section below.

## Curators

The curators have deep, sector-specific experience across the Polkadot and builder ecosystems. These are the key decision-makers:

- [Otar Shakarishvili](https://www.linkedin.com/in/otarshakarishvili/) (Project Advisor and Governance Specialist at JUST Open Source, ex-Parity Project Manager)
- [Sacha Lansky](https://www.linkedin.com/in/alexander-sacha-lansky/) (Developer Relations at WebZero, ex-Parity Engineering)
- [Flavio Bianchi](https://www.linkedin.com/in/flbi/) (Polimec Foundation Council Member, Polimec Marketing and BD)
- [Phil Kwok](https://linkedin.com/in/philip-k-building) (Co-Founder of EasyA and the EasyA x Polkadot University)
- [Dom Kwok](https://www.linkedin.com/in/dom-k-b73381100/) (Co-Founder of EasyA and the EasyA x Polkadot University)

## Process

### 1. Application

   0. Please read our [guidelines](#guidelines) above to familiarize yourself with the scope and goals of the programme.
   1. [Fork](https://github.com/PolkadotFastGrants/apply/fork) this repository.
   2. In the newly created fork, create a copy of the application template ([`applications/application-template.md`](applications/application-template.md)). If you're using the GitHub web interface, you will need to create a new file and copy the contents of the template inside the new one. Make sure you **do not modify the template file directly**. 
   3. Name the new file after your project: `project_name.md`.
   4. Fill out the template with the details of your project. The more information you provide, the faster the review. 
   5. Once you're done, create a pull request. The pull request should only contain _one new file_—the Markdown file you created from the template.
   6. Our pull request template contains a checklist. You can leave it as is and tick the checkboxes once the pull request has been created. Please read through these items and check all of them.

### 2. Application Review

   1. The curators/reviewers can (and usually do) issue comments and request changes on the pull request.
   2. Clarifications and amendments made in the comments _need to be included in the application_. You may address feedback by directly modifying your application and leaving a comment once you're done. 
   3. Applications will be reviewed as quickly as possible, with approvals as fast as 3 working days (though in some cases it may take up to 10 working days).
   4. The application will be accepted and merged or rejected after the curators have come to an agreement by simple majority. Unless specified otherwise, the day on which it is accepted will be considered the starting date of the project, and will be used to estimate delivery dates.

### 3. Milestone Delivery and Payment

   Milestones are to be delivered as pull requests on the delivery repository following the process described therein. Key points:

   1. Milestone evaluation will be completed within 14 days.
   2. If a milestone is not accepted, the applicant will get one chance to fix the deficiencies and resubmit the milestone within 14 days.
   3. Payments will only be made after successful milestone delivery.

### Changes to a Grant after Approval

- Accepted grant applications can be amended at any time. However, this _necessitates a reevaluation by the curators_. If your application has been accepted and, during development, you find that your project significantly deviates from the original specification, please open a new pull request that modifies the existing application. This also applies in case of significant delays.
- If your _delivery schedule_ significantly changes, please also open a pull request with an updated timeline.
- If your deliveries are significantly delayed, and we cannot get a hold of you, we will terminate the grant.

## Help

The curators will regularly be available to answer questions via [this public chat room](https://t.me/+WWETkbjk_WAwYjVk) (Telegram group). This will enable prospective applicants to ask questions before they submit their project applications to the Fast-Grants Programme.

## License<!-- omit in toc -->

[Apache License 2.0](LICENSE)
