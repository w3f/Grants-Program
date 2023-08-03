# polkasearch.xyz

- **Team Name:** Aviraj Khare
- **Payment Address:** USDC(ERC20) Address: 0x123FfB2efB8D74D10d6B3a882A94531D99234B11
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Polkasearch.xyz aims to become a discovery platform where users can discover Grants, Bounties, Jobs, Tools, Educational material for Polkadot/Substrate, all under one roof.

**Grants:** Various DAOs can place their grant information on this website for free. They will have the CRM given by us or they can point user to external website if they wish for the user to submit grant application on their own end.

**Bounties:** Bounties are great way to outsource the work. You can list a task as a bounty and let developers apply for it in case it is technical bounty. A bounty is not only scoped to Technical development, it can be UI/UX, writing, etc. They can either use our CRM or can point bounty to external website.

**Jobs:** Various companies who are building on top of Polkadot ecosystem can place their jobs for free. They can either use our own CRM or they can point job to external portal of their own.

**Tools:** It's hard to find libraries, tools, packages on top of Substrate ecosystem. We aim to build and integrate directory of tools. User can filter tools according to their specification. User will be able to upload information regarding a tool on the website.

**Educational Material:** Get articles, educational videos, links of various substrate topics on the website. User will be able to upload tool/library name on the website.

### Project Details

#### Tech Stack

 - [Django](https://www.djangoproject.com/): We will be using Django as our Web framework.
 - Database: We will be using managed Postgresql database provided by `railway.app` infrastructure.
 - Wallet: We will be using polkadot{JS} extension wallet so that user can signup/login in the website by signing a message.

#### API Schema

 - `/`: home page, different for both authenticated and non-authenticated users.
 - `/login`: Used to login.
 - `/signup`: Used to signup.
 - `/signout`: Used to signout.
 - `/grants`: Used to see all the grants.
 - `/grants/<grant_slug>`: Used to look for a grant.
 - `/api/v1/grants/apply?grant=grant_slug`: Used to apply for a grant. Only candidate can use this.
 - `/grants/new`: Used to create a new grant.
 - `/bounties`: Used to view bounties.
 - `/bounties/<bounty_slug>`: Used to view a bounty.
 - `/api/v1/bounties/apply?bounty=bounty_slug`: Used to apply for a bounty. Only candidate can use this.
 - `/bounties/new`: Used to create a new bounty.
 - `/jobs`: Used to look for all the jobs.
 - `/jobs/<job_slug>`: Used to look for a specific job.
 - `/api/v1/jobs/apply?job=job_slug`: Used to apply for a job. Only candidate can use this.
 - `/jobs/new`: Used to create a new job.
 - `/tools`: Used to view all the tools, libraries, packages, etc.
 - `/tools/<tool_slug>`: Used to view a tool.
 - `/tools/new`: Used to create a new tool.
 - `/learn`: Used to view all the learning resources.
 - `/learn/<learn_slug>`: Used to view detail about a learning resource.
 - `/learn/new`: Used to submit a new educational material.

There are going to be **19** urls which means **19** HTML templates that would be rendered by Django.
There are going to be atleast **3** APIs which will be called by the frontend.

#### Primary Entities

Here we have **6** primary entities.

1. User: A user can either be a `candidate` or an `employer`. A candidate can apply for a job, bounty, grant. Candidate cannot create job, bounty, grant. Candidate can only submit a tool or educational material. An employer can create Grant, Bounty, Job. She can also submit tool, educational material. An employer cannot apply for job, bounty or grant.
2. Grant: A `grant` can only be created by an employer. A candidate or multiple candidates can apply for a grant.
3. Bounty: A `bounty` can only be created by an employer. A candidate or multiple candidates can apply for a bounty.
4. Job: A `job` can only be created by an employer. A candidate or multiple candidate can apply for a job.
5. Tool: Both candidate and employer can add a `tool`.
6. Learn: Both candidate and employer can add a `learning material`.

#### Designs

Designs of few pages.

1. ![Home Page](https://i.imgur.com/O5nd7q9.png)
2. ![Signup Page](https://i.imgur.com/2Tg5bAc.png)
3. ![Create a Job Page](https://i.imgur.com/2dIRPza.png)

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
We will become the discovery layer of Polkadot ecosystem.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Developers, writers, UI/UX, etc. all will be benifited by the project.
- What need(s) does your project meet?
Our project can provide user with earning opportunities, learning material and tools required to build on top of Substrate ecosystem.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?

  There is one project: https://earn.superteam.fun in solana ecosystem.
  In polkadot ecosystem, https://polkassembly.io/ and https://polkasearch.xyz have a few things in the intersection but our platform is more about providing opportunities to the end user in this ecosystem.

## Team :busts_in_silhouette:

### Team members

- Aviraj Khare

### Contact

- **Contact Name:** Aviraj Khare
- **Contact Email:** avirajkhare00@gmail.com

### Legal Structure

- **Registered Legal Entity:** About to get registered

### Team's experience

**Aviraj Khare:** Ex Gojek. Into Web3 space since 2016. Completed two grants of Web3 foundation.

### Team Code Repos

- https://github.com/avirajkhare00/ink-boxes
- https://github.com/avirajkhare00/ink-wizard

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/avirajkhare00

### Team LinkedIn Profiles (if available) 

- https://www.linkedin.com/in/avirajkhare00


## Development Status :open_book:

Currently working on CI(GitHub Actions) of this project to deploy on [Railway infrastructure](https://railway.app).

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** $10,0000 USD

### Milestone 1

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide the documentation on the README of the repository. If needed, we will create `docs` directory that would contain in-depth documentation. |
| **0c.** | Testing and Testing Guide | Models, Views and Forms will be covered by [`django.test`](https://docs.djangoproject.com/en/4.1/topics/testing/) module which is a sub-module of `unittest`. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Completion of basic CI/CD pipeline | We will be using GitHub Actions to deploy the site in [Railway's infrastructure](https://railway.app/) so that there could be more transparency. We will be creating different integration and production environment for the deployment so that more and more people could contribute in much seamless manner.
| 2. | Authentication | User can be authenticated either via traditional web2 username/password or via polkadot extension wallet, web3 based. |
| 3. | CRM for bounties | We will be creating this CRM using Django. Everyone can view a bounty, candidate can apply for bounty and employer can create bounty(ies). |
| 4. | CRM for jobs | We will be creating this CRM using Django. Everyone can view jobs, candidate can apply for a job or multiple jobs, employer can list a job or multiple jobs. |

### Milestone 2

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide the documentation on the README of the repository. If needed, we will create `docs` directory that would contain in-depth documentation. |
| **0c.** | Testing and Testing Guide | Models, Views and Forms will be covered by [`django.test`](https://docs.djangoproject.com/en/4.1/topics/testing/) module which is a sub-module of `unittest`. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will be publishing a blog about polkasearch on Medium and Polkadot forum. |
| 1. | CRM for Grant | We will be creating this CRM in Django. Users can view grant. Candidate can apply for a grant. Employer can create a grant. |
| 2. | Tools | A listing page and viewing page for tools. Any user can add a tool inside polkadot ecosystem, user just needs to signup. |
| 3. | Educational material | Any user can add new listing for educational meterial for polkadot ecosystem. Everyone can view the listing. |
| 4. | Add grants manually | Add atleast 5 grants manually to the platform from this list: https://substrate.io/ecosystem/projects/ |
| 5. | Add bounties manually | Explore bounties by contacting companies from this list: https://substrate.io/ecosystem/projects/ |
| 6. | Add Jobs manually | Add atleast 50 jobs |
| 7. | Add Tools manually | Add atleast 50 tools |
| 8. | Add Educational materials manually | Add atleast 50 educational materials |



## Future Plans

Please include here

- Creation of Discord Community.
- Creation of the socials for polkasearch.
- Reaching out to builders of Polkadot ecosystem to raise Jobs, Grants, Bounties, etc.
- Reaching out to candidates using various social channels providing them with opportunities.
- Already in talks with **SquareOne** team to push it into substrate builders program once we have some metric to show.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Searched on Google

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
I have completed ink-boxes and ink-wizard grant in the past. They are into active development.
- If there are any other teams who have already contributed (financially) to the project.
No
- Previous grants you may have applied for.
Ink Boxes and Ink Wizard, both are accepted and completed.
