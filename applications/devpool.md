# DevPool by Ubiquity DAO

> - **Team Name:** Ubiquity Research
> - **Payment Address:** ubq.eth (DAI)
> - **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


> ### Overview

> Please provide the following:

> - If the name of your project is not descriptive, a tag line (one sentence summary).

DevPool is a crypto-native platform that organically sits on top of GitHub to optimally match developers with open tasks and get paid in crypto while automating management for distributed organizations and repository maintainers.

Ubiquity DAO https://github.com/ubiquity/

> - A brief description of your project.

DevPool is our tested in-house solution to efficiently buildup and run natively decentralized organizations (such as ours- Ubiquity DAO). The DevPool platform is integrated right in inside of Github as a GitHub Bot in order to augment productivity and streamline development management. The DevPool helps build projects more efficiently by incentivizing the right people at the right time to build by way of optimal job matching and financial incentives for contributions.

DevPool mechanics encourage horizontal scaling by taking an async-first approach. This allows infromation to flow seamlessly through the organization and works very well with timezone distributed teams all while improving developers' collaboration and community building.

The DevPool roadmap is quite extensive. The purpose of this grant is to accelerate specific components thereof as outlined below.
The scope of this grant is to further functional development of DevPool in order to provide a superlative task management and completion experience for distributed organizations in the future.

> - An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.

The DevPool is ubiquitous to all projects that utilize GitHub for their issues and task management. DevPool has the ability to touch and improve all projects on GitHub.

DevPool accelerates open source development and encourages building for all ecosystems. Including Polkadot, Substrate, and Kusama.

From the standpoint of the projects that are being developed on Polkadot, Substrate & Kusama, DevPool helps deliver faster development while doing so more efficiently with its contribute-to-earn productivity model within established developers' collaboration flows (filing issues, and working within pull requests with reviewers).

For developers, DevPool is the optimal freelance platform and at the same time the ability to discover and solve interesting technical issues.

> - An indication of why your team is interested in creating this project.

We believe our project will succeed because it is a necessary utility for most research-and-development focused, distributed crypto-native organizations.

We are creating a self-sustaining and self-growing infrastructure that helps build, enrich, and enhance the ecosystem and its participants with contribute-to-earn opportunities facilitated by Ubiquity DevPool.

DevPool was born from our existing needs to optimally develop our DAO. With in-house use, we proved the model based on the need and are able to give the right work to the right developers and in doing so optimize both the DAOs time-to-market as well as each individual developer’s strong points and preferences.

Both of these optimization points lead to a faster turnaround of a superior end product. Releasing DevPool to the public enables a huge marketplace full of opportunities for developers to earn more and become more involved in projects that interest them while allowing projects to be built faster by engaging the optimal talent at the right time.

> ### Project Details

> We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

You can see it all in action on our GitHub. Check merged pull requests under our repositories https://github.com/ubiquity to see the DevPool and UbiquiBot in action.

> - Mockups/designs of any UI components

> - Demo: [https://dao.ubq.fi/the-devpool](https://dao.ubq.fi/the-devpool)
> - Website: [https://ubq.fi/](https://ubq.fi/)
> - Twitter: [https://twitter.com/UbiquityDAO](https://twitter.com/UbiquityDAO)
> - Discord/Discourse/Community: [https://t.me/ubiquitydao](https://t.me/ubiquitydao)
> - Github: [https://github.com/ubiquity](https://github.com/ubiquity)
> - Technical/Economic Documentation:
[https://github.com/ubiquity/ubiquibot/discussions/1](https://github.com/ubiquity/ubiquibot/discussions/1)
[https://dao.ubq.fi/devpool](http://dao.ubq.fi/devpool)
> - Other: [https://t.me/UbiquityDevPool](https://t.me/UbiquityDevPool)

> - Data models / API specifications of the core functionality

The system uses only data available on GitHub.
UbiquiBot uses information about the priority and the estimated duration of the issue.
In addition, the address of the bounty hunter is required for payment.

> - An overview of the technology stack to be used

The system is fully integrated into GitHub and implemented as a GitHub application available in the marketplace [https://github.com/marketplace/ubiquibot](https://github.com/marketplace/ubiquibot)

UbiquiBot is developed with TypeScript, Supabase, GitHub Actions, Probot
[https://github.com/ubiquity/ubiquibot](https://github.com/ubiquity/ubiquibot)

The only smart contract we use in the system at this time is [Uniswap’s Permit2](https://github.com/Uniswap/permit2). It has received audits from [ABDK](https://github.com/Uniswap/permit2/blob/main/audits/ABDKAudit.pdf) and [Chainsecurity](https://github.com/Uniswap/permit2/blob/main/audits/Chainsecurity%20Audit.pdf).
The code is Open Source under MIT license.

> - Documentation of core components, protocols, architecture, etc. to be deployed

Documentation on the DevPool capabilities overview and roadmap discussion https://github.com/ubiquity/ubiquibot/discussions/1


> - PoC/MVP or other relevant prior work or research on the topic

Beta version is functioning in the active Ubiquity GitHub repositories and can be added to any other GitHub repository easily by adding our bot to your repository https://github.com/marketplace/ubiquibot

> - What your project is _not_ or will _not_ provide or implement

Since Ubiquity aims to create a project-agnostic experience, we do not need to narrow the project scope to specific ecosystems while excluding others. We are building a seamless platform that meshes into GitHub. As such every project that utilizes GitHub has the ability to benefit from our offering.

> Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):
> - The (future) tokenomics of your project
> - For non-infrastructure projects—deployment and hosting costs, maintenance or audits
> - Business-oriented activities (marketing, business planning), events or outreach

> ### Ecosystem Fit

> Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

> - Where and how does your project fit into the ecosystem?

Releasing DevPool to the GitHub ecosystem will create immense efficiencies for all marketplace participants within all ecosystems and projects. Developers will earn more and become more involved in projects that interest them. Projects will be built faster by applying the optimal talent at the right time. Managers will have efficient tools and reports into their project’s progress allowing them to optimize their time and resources in a way that was never available up until now.

> - Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

Our target audiences are 1. crypto-native, distributed organizations with active and open-source repositories on GitHub. 2. crypto-native developers. 3. crypto-native community members with technical know-how (you can earn from commenting and contributing information to issues.)

> - What need(s) does your project meet?

- From the maintainers side: recruiting and management of talent.
- From the talent's side: a marketplace of bounties that are easy to find and immediately contribute to while also allowing for instant cash-outs upon task completion.

> - Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

We have a first-mover advantage as there is no competitor deploying our model with organic GitHub integration.

There are many freelance platforms for developers, but none of them are leveraging:
1. Available natively on GitHub
2. Focused on crypto bounties
3. Crypto native organic community development

> ## Team :busts_in_silhouette:

> ### Team members

> - Name of team leader

アレクサンダー.eth https://github.com/pavlovcik

> - Names of team members

You can review the team here https://dao.ubq.fi/the-team

> ### Contact

> - **Contact Name:** Alvaro Machado
> - **Contact Email:** alvaro@ubq.fi
> - **Website:** [https://ubq.fi/](https://ubq.fi/)

> ### Legal Structure

> - **Registered Address:** Quijano Chambers, P.O. Box 3159, Road Town 3159, Virgin Islands (British), Postal Code VG1110
> - **Registered Legal Entity:** Ubiquity Research Ltd

> ### Team's experience

We strive to build valuable products and services for the crypto ecosystem.

Our team has deep and broad experience and skillsets. Our team is not only comprised of seasoned and exceptional developer minds but also business people from various backgrounds and varied prior entrepreneurial and corporate work. Our team members are innovators in numerous fields, have been published for their work, publish articles in international media, hold patents in various fields, and come from distinct educational backgrounds in Computer Science, Mathematics, Economy, and Law to name a few. Some hold terminal degrees in their fields.

> ### Team Code Repos

> - Ubiquity DAO GitHub: [https://github.com/ubiquity/](https://github.com/ubiquity/)
> - DevPool UbiquiBot [https://github.com/ubiquity/ubiquibot](https://github.com/ubiquity/ubiquibot)
> - DevPool Bounties Directory [https://github.com/ubiquity/devpool-directory/issues](https://github.com/ubiquity/devpool-directory/issues)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

> - [https://github.com/pavlovcik](https://github.com/pavlovcik)
> - [https://github.com/0xcodercrane](https://github.com/0xcodercrane)
> - [https://github.com/rndquu](https://github.com/rndquu)
> - [https://github.com/Steveantor](https://github.com/Steveantor)
> - [https://github.com/zgorizzo69](https://github.com/zgorizzo69)
> - [https://github.com/hashedMae](https://github.com/hashedMae)
> - [https://github.com/sergfeldman](https://github.com/sergfeldman)
> - [https://github.com/Draeieg](https://github.com/Draeieg)
> - [https://github.com/Hodlatoor](https://github.com/Hodlatoor)

> ### Team LinkedIn Profiles (if available)

> - [https://www.linkedin.com/in/sergfeldman/](https://www.linkedin.com/in/sergfeldman/)
> - [https://www.linkedin.com/in/alvaro-machado-15415a15b](https://www.linkedin.com/in/alvaro-machado-15415a15b)

> ## Development Status :open_book:

> If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

> - links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
> - academic publications relevant to the problem,
> - links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
> - references to conversations you might have had related to this project with anyone from the Web3 Foundation,
> - previous interface iterations, such as mock-ups and wireframes.

### Documentation

- Program overview can be found on our website: [https://dao.ubq.fi/devpool](https://dao.ubq.fi/devpool)
- Roadmap: [https://github.com/ubiquity/ubiquibot/discussions/1](https://github.com/ubiquity/ubiquibot/discussions/1)
- Readme: [https://github.com/ubiquity/ubiquibot/blob/development/README.md](https://github.com/ubiquity/ubiquibot/blob/development/README.md)
- Current tasks under development: [https://github.com/ubiquity/ubiquibot/issues](https://github.com/ubiquity/ubiquibot/issues)

### Demo

- We have a production testing environment available. Please look at the pinned issues, and feel free to interact with the bot on the demo (open) issue there [https://github.com/ubiquibot/production/issues/7](https://github.com/ubiquibot/production/issues/7)
- Unfortunately for the administrative controls/full experience you will need to add the bot to your own repository.
  - The bot is available to add from the GitHub Marketplace: [https://github.com/marketplace/ubiquibot](https://github.com/marketplace/ubiquibot)
  - Additional instructions for bot setup: [https://dao.ubq.fi/ubiquibot-setup](https://dao.ubq.fi/ubiquibot-setup)


> ## Development Roadmap :nut_and_bolt:

> This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

> Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.



> ### Overview

> - **Total Estimated Duration:** 3 months
> - **Full-Time Equivalent (FTE):**  4 FTE
> - **Total Costs:** 28,000


> ### Milestone 1 - Improve the bounty hunter experience

> - **Estimated duration:** 1 month
> - **FTE:**  3
> - **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide inline documentation |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | GitHub Issue | We will provide GitHub Issues as proof of functionality (this is functional as a deliverable because the bot runs inside of GitHub). We already built the capability for the bot to run automatically off of a GitHub Actions runner bundled within the source code repository, which can be cross referenced with the GitHub Issues as proof if needed. |
| 0e. | Article | We will publish an article that explains what was done as part of the grant. Completion of the tasks related to bounty hunters onboarding, for example: First Time Bounty Hunter Tutorial [https://github.com/ubiquity/ubiquibot/issues/228](https://github.com/ubiquity/ubiquibot/issues/228) Restrict assignment on lack of funds [https://github.com/ubiquity/ubiquibot/issues/264](https://github.com/ubiquity/ubiquibot/issues/264) |
| 1. | Substrate module: X | N/A |
| 2. | Substrate module: Y | N/A |
| 3. | Substrate module: Z | N/A |
| 4. | Substrate chain | N/A |
| 5. | Library: ABC | N/A |
| 6. | Smart contracts: ... | N/A |

> ### Milestone 2 - Prepare for partner integration & enhance security

> - **Estimated Duration:** 1 month
> - **FTE:**  3
> - **Costs:** 10,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide inline documentation |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | GitHub Issue | We will provide GitHub Issues as proof of functionality (this is functional as a deliverable because the bot runs inside of GitHub). We already built the capability for the bot to run automatically off of a GitHub Actions runner bundled within the source code repository, which can be cross referenced with the GitHub Issues as proof if needed. |
| 0e. | Article | We will publish an article that explains what was done as part of the grant. Completion of the tasks related to integrations, for example, Gnosis Safe Integration [https://github.com/ubiquity/ubiquibot/issues/274](https://github.com/ubiquity/ubiquibot/issues/274) |
| 1. | Substrate module: X | N/A |
| 2. | Substrate module: Y | N/A |
| 3. | Substrate module: Z | N/A |
| 4. | Substrate chain | N/A |
| 5. | Library: ABC | N/A |
| 6. | Smart contracts: ... | N/A |

> ### Milestone 3 - Complete refactoring of the basic flows and start onboarding new partners

> - **Estimated Duration:** 1 month
> - **FTE:**  3
> - **Costs:** 8,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide inline documentation |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | GitHub Issue | We will provide GitHub Issues as proof of functionality (this is functional as a deliverable because the bot runs inside of GitHub). We already built the capability for the bot to run automatically off of a GitHub Actions runner bundled within the source code repository, which can be cross referenced with the GitHub Issues as proof if needed. |
| 0e. | Article | We will publish an article that explains what was done as part of the grant. In 3 months we want to complete preparation and launch bounties from partner projects in the DevPool. All open issues can be viewed on GitHub [https://github.com/ubiquity/ubiquibot/issues](https://github.com/ubiquity/ubiquibot/issues) |
| 1. | Substrate module: X | N/A |
| 2. | Substrate module: Y | N/A |
| 3. | Substrate module: Z | N/A |
| 4. | Substrate chain | N/A |
| 5. | Library: ABC | N/A |
| 6. | Smart contracts: ... | N/A |


> ## Future Plans

> Please include here

> - how you intend to use, enhance, promote and support your project in the short term, and
> - the team's long-term plans and intentions in relation to it.

Offline:
Ubiquity DAO team members are very active around the world at various hackathons, builder events, VC communities and many web3 events. In the past few months we have attended all the main events in South Korea, Japan, Taiwan and upcoming events in Singapore and Bali. We are constantly building relationships with new projects as well as incumbents all across the space.

Online:
Partnering with online hackathons could work seamlessly to promote and leverage our model, as we already support globally distributed talent contributions, pricing tasks and paying out for them.

We have built the Ubiquity DAO telegram group to over 12,000 members and an active DevPool ecosphere on both GitHub and Telegram even though we are prelaunch. We feel the excitement around our project and are looking forward to its steady and ever increasing growth. Our members are very closely aligned with Crypto Twitter, developers, projects and founders.

We believe we are well situated to be a solid utility success story for the web3 community and would like the Web3 Foundation to officially be part of our journey.

> ## Referral Program (optional) :moneybag:

> You can find more information about the program [here](../README.md#moneybag-referral-program).
> - **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
> - **Payment Address:** BTC, Ethereum (USDC/DAI) or Polkadot/Kusama (USDT) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))

> ## Additional Information :heavy_plus_sign:

> **How did you hear about the Grants Program?** Web3 Foundation Website

> Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

> - Work you have already done.

The order of features that we implement in the bot is a function of how often the business problem is faced from the perspective of the repository maintainer. For example, most projects start with creating a new bounty. For me, filing a new issue and setting a price tag occurs several times most days. We made sure to focus on steamlining this process first. The next process to automate would be the next most frequent process from the perspective of a repository maintainer and so on.

### Highlights

The ultimate goal of the UbiquiBot is to financially incentivize every function a developer can perform related to getting high quality work done. This includes, but is not limited to:
- Closing an issue (bounty)
- Creating detailed issue specifications
- Adding comments to contribute research or feedback which helps to close an issue
- Reviewing a pull request in a timely manner

### Capabilities

- Automatic bounty price setting based on priority level and time estimate. This allows pricing to be set almost instantaneously and in a standardized way for each task, making it a fast and efficient process to keep track of, and financially incentivize tasks to be completed.
  - We have coarse time brackets for the time estimates. We are working on rolling out an extension to the UbiquiBot in partnership with Thales/Synthetix to crowdsource this time estimate information from the bounty hunters leveraging financial incentives to bet on the most accurate answer.
- Financial incentives to issue creators.
  - The more details that are included in the issue, the more the original poster is credited. All payouts can only occur after 1. the bounty is approved (authorized team member adds the `priority` and `time` labels to the issue) and 2. the bounty is closed as completed.
- Allowing bounty hunters to assign themselves to tasks, with the `/assign` command. This is faster than having to wait for a maintainer to manually assign the bounty hunter to the task.
- Limiting assigned tasks. We believe in focusing on one (or two if waiting on reviewers) task at a time. This is why the bot has a configurable amount of the number of tasks a bounty hunter can assign themselves to at any given time. This also helps to prevent bounty hunters from taking on more than they can handle.
- Automatic follow ups on issues that do not have activity in their associated pull requests. This ensures that meaningful updates are provided to the bounty issuer regularly. This is especially useful while there are many bounty hunters working on different issues at the same time for the maintainers to stay on top of everything.
- Automatic un-assignment if the bounty hunter fails to provide updates in time. This ensures that no tasks are taken and then forgotten about.
- `/wallet` command to register the bounty hunter's payment wallet.
- Automatic Payment Issuance:
  - The bounty hunter can claim their payment via a payment link posted as a comment by the bot once a bounty is accepted.
  - Because we use Uniswap's Permit2 implementation, the bounty hunter can claim their payment themselves at their convenience. The bounty hunter pays the payment gas fee.
  - Reduces overhead for the repository maintainer to stay on top of all owed payments for completed bounties.
  - We also have an audit dApp to stay on top of all the payments authorized by the bot. pay.ubq.fi/audit

### Other Benefits
- Full bot behavior customization with organization-wide defaults and repository-level configuration files.
  - Example configuration file https://github.com/ubiquibot/production/blob/main/.github/ubiquibot-config.yml
- The bot is open source and can be used by any repository by adding it to their repository from the GitHub marketplace https://github.com/marketplace/ubiquibot.
- The bot is currently free to use for everyone.
- The bot currently supports payments in any ERC20 token on Ethereum Mainnet and Gnosis Chain with more networks to be supported soon.
- Developer friendly command line style interface via GitHub comments includes assigning the bounty and registering the payment wallet.

### Coming Soon
- Bounty-developer automatic task matchmaking based on historically similar tasks solved. This is a feature we are currently working on and will be released soon.
- Leaderboards, experience points, and badges for bounty hunter performance. We plan to gamify the development experience to make it more fun and engaging for high performing developers.

### Development

Currently, we are looking for partners interested in long-term and sustainable growth of the DevPool.

More details can be found in the DevPool documentation and demo.

[https://github.com/ubiquity/ubiquibot/discussions/1](https://github.com/ubiquity/ubiquibot/discussions/1)

[https://dao.ubq.fi/the-devpool](https://dao.ubq.fi/the-devpool)

> - If there are any other teams who have already contributed (financially) to the project.

Ubiquity investors

- [https://www.animocabrands.com/](https://www.animocabrands.com/)
- [https://concave.lol/](https://concave.lol/)
- [https://meritcircle.io/](https://meritcircle.io/)
- [https://momentum6.com/](https://momentum6.com/)
- [https://ascensiveassets.com/](https://ascensiveassets.com/)
- [https://www.snackclub.gg/](https://www.snackclub.gg/)
- [https://www.csquared.vc/](https://www.csquared.vc/)
- [https://www.playventures.vc/](https://www.playventures.vc/)
- [https://www.369.io/](https://www.369.io/)
- [https://www.newtribe.capital/](https://www.newtribe.capital/)
- [https://bltzr.gg/](https://bltzr.gg/)

> - Previous grants you may have applied for.

Previously applied for the Optimism Grant
