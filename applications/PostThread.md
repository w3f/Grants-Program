# PostThread

- **Team Name:** PostThread
- **Payment Address:** Ethereum USDC (0x0722cD9e00D0a1350E038331FcDDf8d6867C3f7C) 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Please provide the following:

- PostThread is a web3 social media app that rewards it users instead of extracting from them. To do this we use blockchain economics that encourage users to post quality content and curate the platform.
- A brief description of your project.
- PostThread makes use of the Project Liberty parachain, Frequency. 
- An indication of why your team is interested in creating this project.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

Things that shouldn’t be part of the application (see also our [FAQ](../docs/faq.md)):
- The (future) tokenomics of your project 
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach

![frontpage](https://drive.google.com/uc?export=view&id=1cJ1ReF_t0EwGZq8ZA40tBfVg9m1cXr_F)

### Ecosystem Fit

We will be the first social media platform to build on the Frequency parachain, which just recently won their parachain auction. Future social media platforms will be able to benefit from whatever ecosystem we are able to develop there.

We are hiding all the crypto aspects of our project from the user in an attempt to attract non-crypto users to the platform and therefore Polkadot as a whole. We think social media could be a huge gateway to getting average users into crypto due to the current events we are all seeing go on at other major social media companies.

## Team :busts_in_silhouette:

### Team members

- Ian McCann
- Names of team members

### Contact

- **Contact Name:** Ian McCann
- **Contact Email:** mcian91@gmail.com
- **Website:** [PostThread.app](https://postthread.app/)

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

My partner and I have been developing web3 apps together since May 2022. We began with PostThread, but have also built a great NFT-to-NFT trading market, [BazaarMarket](https://bazaarmarket.xyz/) with a Pokemon inspired AI generated trading card NFT collection, [Diffemon](https://bazaarmarket.xyz/collection/diffemon) to go along with it. We also created [Unstable Labs](https://www.unstablelabs.app/), an AI text-to-image generator on NEAR protocol. As you can see we have a big imagination and a strong desire to build in web3.

Before our evolution into web3, Ian was a data scientist for 6 years and Paolo was a DevOps enginee. Ian's strong Python skills helped to deploy all of our projects smart contract functionality by taking advantage of the web3 and substrate python libraries. Paolo refined his UI/UX skilled throught our hackathons and has become an expert in NextJS. You can view his webpage [here](https://pulesdev.vercel.app/).

### Team Code Repos

- https://github.com/PostThread
- https://github.com/PostThread/PostThread-Polygon
- https://github.com/PostThread/PostThread-Polkadot
- https://github.com/PostThread/PostThread-EthGlobal

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/iamianM/
- https://github.com/pgrignaffini/

### Team LinkedIn Profiles

- https://www.linkedin.com/iamian/
- https://www.linkedin.com/paologrignaffini/

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/rfp-proposal) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

We began our project in May 2022 during the 2 week EthGlobal HackMoney hackathon. There my partner and I met and began brainstorming and created a rough concept of PostThread. We won "Best Use" of Worldcoin by rewarding users for verifying their humanity with their WorldCoin ID. We have stayed in contact with  them ever since and plan to help them bring WorldCoin to Polkadot and then implement it in our dapp. You can view that project page [here](https://ethglobal.com/showcase/postthread-o665n)

Next, we joined the Polkadot Hackathon: North America Edition and started our idea from scratch. We found Project Liberty and decided to build on their protocol. Since they were still in development at that time, we deployed with a locally hosted version of their parachain. PostThread won first place in our category as well as "The Best use of Crust". You can view that project page [here](https://devpost.com/software/postthread-uhgac6)

Lastly, we wanted to continue our work on PostThread, so we implement the Frequency parachain as a smart contract and retrofitted the backend to call it using the web3 library. This implementation had the biggest improvement in the UI as well. You can view that project page [here](https://devpost.com/software/postthread-gi7brt)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 30,000 USD

### Milestone 1 Example — Polkadot's Frequency Parachain Deployment

- **Estimated duration:** 2 months
- **FTE:**  2
- **Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | Automation | Write scripts that mint user assets from database to the Frequency parachain nightly |
| 2. | Airdrop | Implement token airdrop to reddit users  |
| 3. | Security | Improve security of storing user passwords and wallet private keys  |
| 4. | User Experience | Improve UI with more intuitive sign-up process and easier navigation  |
| 5. | UI Bugs | Work out edge case UI bugs through user feedback (family and friends) |
| 6. | Post Deployment | Ship regular updates addressing user feedback / suggestions


### Milestone 2 Example — User Acquisition 

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Metrics | Define key user metrics to look out for and create easy system to track them  |
| 2. | Chainlink Integration / Promotion | Implement Chainlink VRF in exchange for them tweeting to ~1 million followers about us |
| 3. | Airdrops | Promote Reddit airdrop and expand to other social media platforms (twitter first)  |
| 4. | Promotions | Implement referral program and sign-up token rewards. Create token reward "quests" for promoting the site and verifying account (i.e. linking to other social medias) |


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
