# AI Internet-Meritocracy

- **Team Name:** Victor Porton's Foundation
- **Payment Details:**
  - **DOT**: 5CA83TWiEgH71mgPiduG8itCJe7KjKYFrmou9HQ3TwF94SXh
  - **Payment**: 5CA83TWiEgH71mgPiduG8itCJe7KjKYFrmou9HQ3TwF94SXh (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

The app asks AI, what portion of the global GDP a user is worth, and pays them the proportional share of funds.

The app can pay user's salary in DOT token, also GLMR token will be added.

The project appeared a response to my ["scientific covery"](https://science-dao.org/scientific/): I discovered ordered semigroup actions and related stuff (that's a very big discovery: I estimate it as half of the world economy in 30 years), but the system failed to publish it. I haven't received a science degree due to religious discrimination in Russia, and have no salary. I want all scientists to have salaries and to receive publication grants. This project will also spread money for software like Gitcoin, but with [certain advantages](https://science-dao.org/better-than-gitcoin/).

Academia is severely outdated (it produces not only discoveries, but also coveries) and [is a discrimination amplifier](https://science-dao.org/academia/) and therefore must be replaced by an app, with an impartial intellect as a judge.

I hope to surpass Gitcoin and Giveth combined in the amount of funds transferred.

### Project Details

App demo video:

[![App demo](https://img.youtube.com/vi/afvcLhTwHxQ/0.jpg)](https://www.youtube.com/watch?v=afvcLhTwHxQ)

App's live demo (not 24h x 7 days): https://socialism.fly.dev

It is a Node.js/Prisma/OpenAI/React Web application. I am going to rewrite it as a Motoko/ZenDB/Join Proxy/OpenAI/React ICP blockchain application in the future, to have a non-custodial wallet.

It can use both batch (untested) and non-batch mode mode of OpenAI, thanks to my algorithm that stores AI and other operations as a directed graph in the database and executes it step-by-step.

This system does queries to OpenAI as on the following diagram:

![workflow](https://science-dao.org/wp-content/uploads/2025/09/AI-flow-full-3.png)

That is, it asks the AI about the user's salary several times and reviews the submission about possible prompt injection attacks several times.

The user is identified by connecting OAuth accounts such as GitHub, ORCID, etc. In the case of duplicate accounts they are automatically merged.

The following are limitations:
* It is not yet battle-tested against prompt injection and AEO attacks. Probably, at this stage we will need manual review of leading accounts.
* AI used is non-deterministic, so salary sizes may fluctuate.
* The current version isn't on-chain and thus uses a custodial wallet.

See also about [security measures to avoid stealing funds](https://science-dao.org/security/).

I am going to host in on fly.io, with a PostgreSQL DB. This DB allows scaling by replication. But now it's non a proper time to think about scaling problems, because in the future it anyway will be rewritten to use ICP blockchain instead of Node.js and PostgreSQL.

### Ecosystem Fit

The project makes users holders of Polkadot tokens. This will force users to install a Polkadot wallet. It is directly useful for Polkadot, especially because most recipients will be technical developers, so growing Polkadot developers ecosystem.

The target audience are:
- donors
- scientists (including myself)
- free software developers (including myself)

The project meets the need of fair financing of **all** scientists (including non-PhDs) and free software developers, because: a. they need salaries; b. we need to promote of R&D products (especially under-represented ones, like scientific coveries).

The need is explained in such articles as:
- [Scientific Coveries and Why We Need a New Occupation — Science Marketers](https://science-dao.org/scientific/)
- [Does Super-Human AI Solve the Problem of Scientific “Coveries” — and What We, Humans, Can Do](https://science-dao.org/human-ai/)
- [The Illusion of Progress in General Topology — And the Case for Merit-Based Science](https://science-dao.org/general-topology/) (a case study)
- [How Does Economy of Monopolies Work in Science](https://science-dao.org/science-monopolies/)

To best of my knowledge, there are no similar projects. Well, Giveth AI is somehow similar.

Advantages over Gitcoin/Giveth/Manifund/… grants: No need to manually create a description of each grant and review them manually, no project rejections, no need for verifying conforming to the rules for each grant. It takes into account even smallest projects of a user (that if they are many, may form a majority of the user’s income). No long pause before paying. We can pay every week or even more often. No users not donating due to being confused over the topic (like: ordered semicategory actions) of a grant. No dependencies on the “commercial business” of somebody advertising their grants in different media, but equal funding opportunities for everybody: rich and poor. It is an experiment in a potentially better free software and DeSci funding method than GitCoin/Giveth grants.

Such a project hasn't been created previously due to appearance of powerful AI only in recent time. 

## Team :busts_in_silhouette:

### Team members

- Victor Lvovich Porton
- Faysal Mohammad Riyad

### Contact

- **Contact Name:** Victor Lvovich Porton
- **Contact Email:** porton.victor@gmail.com
- **Website:** https://science-dao.org/meritocracy/

### Legal Structure

- **Address:** 14425 60th St North, Suite: 46431, Clearwater FL. 33760
- **Registered Legal Entity:** Victor Porton's Foundation

### Team's experience

Victor Porton has several YoE in both Node.js/TypeScript and React and many years in SQL.

Victor Porton developed such software as [XML Boiler](https://github.com/vporton/xml-boiler), some [foundational D libraries](https://github.com/search?q=owner%3Avporton+lang%3Adlang&type=repositories) and foundational Rust libraries, multiple blockchain apps and core blockchain contributions.

Faysal Mohammad Riyad - Video editing and Digital marketing specialist. "Hi, I'm Faysal. I have been doing Digital Marketing related work with expertise for last 6 years. I love doing Youtube promotion, Youtube Marketing, Youtube SEO, Youtube Ads, Google Ads, Facebook Ads, Facebook Marketing, video SEO, Instagram Marketing, Pinterest Marketing, Social media design, Social media Marketing, Social media Management, related work in and take these as my profession. I have completed various projects with great care and skill."

### Team Code Repos

- https://github.com/vporton

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/victor-porton
- https://www.linkedin.com/in/faysal-mohammad-riyad-b01447343/

## Development Status :open_book:

A preliminary [Node.js/Prisma/React app](https://github.com/vporton) was developed in 23 days. It still need some fixes and tweaking and security review.

Next follow some relatively minor tweaks and future rewriting into an ICP blockchain fully on-chain dapp.

* [This paper](https://science-dao.org/economic-formation/) has been submitted to an economics academic journal.
* [App's homepage](https://science-dao.org/meritocracy/)
* [Blog](https://science-dao.org/category/ai-internet-meritocracy/)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 15,000 USD
- **DOT %:** 50

### Milestone 1 — Bug fixes

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can donate or receive salary. |
| **0c.** | Testing and Testing Guide | I will ask the AI to provide a test for each core component. For this, the AI will be first asked to replace naive code by a dependency-injected one, for testing AI calls without actual calls. Testing will use an actual database. More human-led testing is expected after the release, because to improve testing we need first employ more developers what requires the project to run in production. I will explain in the documentation how to run tests. Some manual testing will be recorded in a video. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Bug fix | Connect with BitBucket and GitLab |
| 2. | Bug fix | After failed login, the button text is "Try again". Thus the name of the button is not shown. |
| 3. | Bug fix | Inefficient checking for whether all dependencies are COMPLETE. |
| 4. | Bug fix | Remove tasks after finishing. |
| 5. | Bug fix | Missing deleting user data. |
| 6. | Bug fix | Bitcoin integration should not use Wallet API. |
| 7. | Bug fix | Don't show a hint, if KYC/AML didn't pass. |
| 8. | Feature | Funds for individual countries, disbursed, when the user migrates. |
| 9. | Feature | Ability to re-onboard a user, especially if his/her account was empty. |

### Milestone 2 — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can donate or receive salary. |
| **0c.** | Testing and Testing Guide | I will ask the AI to provide a test for each core component. Testing will use an actual database. More human-led testing is expected after the release, because to improve testing we need first employ more developers what requires the project to run in production. I will explain in the documentation how to run tests. Some manual testing will be recorded in a video. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Feature | Against prompt injection add random strings to output and JSON labels. |
| 2. | Feature | GLRM payments |
| 3. | Feature | Require to check liveliness every 2 months (provided that the salary is not zero), to avoid dead users. |
| 4. | Feature | Always run prompt randomization as non-batch, because its cost is low. |
| 5. | Feature | Delete disconnected accounts, when disconnect, not in Cron. |
| 6. | Feature | Don't allow worth assessment, when only KYC and/or Ethereum connected. |
| 7. | Feature | More than one email per user. |

### Milestone 3 — Additional features 2

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can donate or receive salary. |
| **0c.** | Testing and Testing Guide | I will ask the AI to provide a test for each core component. Testing will use an actual database. More human-led testing is expected after the release, because to improve testing we need first employ more developers what requires the project to run in production. I will explain in the documentation how to run tests. Some manual testing will be recorded in a video. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | I will publish an **article** that explains how to use the software both for international science financing and government science financing. |
| 1. | Feature | Logging displayed at `/logs` is excessive. Remove supefluous data. |
| 2. | Feature | Allow the user to delay distribution to them, to decrease gas spendings. |
| 3. | Feature | User email(s) should be passed to AI. |
| 4. | Feature | Do KYC/AML only after the user is assigned a salary, to minimize the amount of money spent on KYC. |
| 5. | Feature | Less info on homepage. |
| 6. | Feature | Show all blockchains before loading balances and gas prices. Obtain them in parallel. |
| 7. | Feature | Polkadot secret key both from secret URL and menmonic should be supported. |

## Future Plans

- long-term maintenance and development will be financed with donations and grants, later (when it's rewritten as an ICP blockchain fully on-chain app) I will form a DAO,
- in short terms, the project will gather donations thanks I pay $200/month to a Bangladesh SEO,
- long term plans involve an [international treary for financing science](https://science-dao.org/treaty/) and getting big grants from private foundations.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** https://bizthon.com/builder-grants

I discovered ordered semigroup actions. it by all heuristic signs as important as group theory (discovered in 19 century). In other words, it is like half of world economy or even more. Just one not properly marketed discovery slows world economy by several times. We will have a great growth after financing wide publication of all neglected scientific discoveries and software.
