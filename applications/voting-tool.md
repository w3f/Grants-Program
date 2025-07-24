# OpenGov Voting Tool

## Project Overview

This is a tool that helps small-medium DAOs in OpenGov voting by automating proposal management and voting process.

We have been using the Voting Tool in Decentralized Voices Program for Cohorts 3 and 4. In our view, the voting tool has been extremely helpful, it shortens our internal decision-making process while preserving the trustlessness of our votes, as we are still voting via a multisig.

### Project Details

The project started as a Vercel app that generates an RSS feed from the proposals, that can be consumed by Notion.
 
Later it was completely redesign into an Express app. **The app does the following**:
 - periodically checks OpenGov for new or updated proposals
 - inserts new proposals into Notion, or updates an existing proposal
 - (the proposal is manually evaluated in Notion)
 - there is a `/send-to-mimir` endpoint that will send `ReadyToVote` proposals into *Mimir*
 - in *Mimir*, we can cast or vote to the proposals in a batch transaction. *Mimir* worked together with us on this
 - the app is also periodically checking if the transaction is on-chain, it is using a `readyToVote.json` file to know which proposals to look for
 - if a vote about a proposal is on-chain, it will update Notion, and remove that proposal ID from the `readyToVote.json` file

These are the **external systems**, that we are interacting with:
 - Polkadot/Kusama relay chain
 - Subscan
 - Mimir
 - Notion
 - CoinGecko

A current limitation is, that the tool is tied to Notion. In Milestone 2, we will switch to SQLite. That will make it possible to connect subsequent front ends as well. Most likely we will keep Notion as a legacy option for now.

### Ecosystem Fit

We originally developed this tool to ourselves, because before this, voting on proposals took about 10-20 minutes instead of 1-2 minutes, as we needed to vote on every proposal individually. Also, it would be more expensive, because we would need to create 10-20 transactions, instead of only one, this can be a significant amount of money.

Our target audience is mainly small or recently created DAOs, together with the Notion templates that Spectra created, this forms a starter pack. We handed over this starter pack to 7 DAOs in a regional gathering, in Warsaw. To our knowledge, one of them, Bohemia Fam, aka the Czechish DAO has actively adopted the tool and continues to use it.

Similar tools in the ecosystem: 
 - *Permanence DAO’s Telegram bot*: Their Telegram bot handles proposal evaluation via Telegram. It uses AI to summarize comments. It does not do batch voting.
 - *ChaosDAO’s Discord bot*: ChaosDAO works perfect for bigger DAOs with 20+ members with social trust between them. But the owner of Discord server can do force vote. Our tool due to nature of Notion also allows this but the votes are casted from a proxy controlled by a multisig. So even if someone force submits a vote the multisig members can decide to reject it.
 - *Trustless Core’s Google Sheets*: requires many manual actions, compared to our solution.

## Team

- **Team Name:** Hungarian Polkadot DAO
- **Contact Name:** Peter Ott
- **Contact Email:** o.peter.33@tutanota.de  LESZ EMAIL CIMUNK
- **Website:** https://polkadothungary.net/

### Team members
 - Peter Ott
 - [Vonyi]

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ottpeter/

### Team Code Repos

This is a DAO, that's main activity is not software development. We are part of Decentralized Voices Cohort 4. The tool was originally developed by Vonyi, and now it's mainly developed by me (Peter).

- https://github.com/ottpeter/
- https://github.com/send4t/

### Team's experience

Peter - Full Stack software developer with 4 years of professional development experience and 10 years in the cryptocurrency space, specializing in TypeScript applications. Previously won a price in the DAO Track at Polkadot Championship, demonstrating expertise in decentralized governance solutions. Has hands-on experience with decentralized technologies including IPFS and Swarm, combining deep blockchain knowledge with practical development skills.

Other team members include Vonyi who has deep technical knowledge, for example, he started developing the original (Vercel) app, and he is maintaining *polkadothungary.net*. The other team members are very good at community building, Spectra created the Notion templates, which we are using to organize our activity within the DAO, Zsófi is working at PBA. We are the multi-talent team, and we experimented this tool on ourselves at first.

## Development Status

The MVP is ready, it can be found here: https://github.com/ZelmaCorp/VotingTool

There is a forum discussion about this tool, it can be found here: https://forum.polkadot.network/t/status-update-on-the-development-of-a-notion-based-voting-tool-for-emerging-communities-and-smaller-daos-active-in-opengov/13469/1

[probably insert flowchart here]

## Development Roadmap

**Milestone 1**: (done) Possible to fetch proposals from OpenGov, possible to cast votes to Mimir, and the app will update the status of the proposal in Notion

**Milestone 2**: OpenGov overlay exists, it is using an SQLite database, instead of Notion. All the functionalities work that used to work with the Notion-version.

### Overview

- **Total Estimated Duration:** 2 month
- **Full-Time Equivalent (FTE):**  2.5
- **Total Costs:** 23,000 USD

### Milestone 1: Notion updater and Mimir integration

- **Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1.25
- **Total Costs:** 11,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can start using the tool |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. Integration tests will be also implemented, to test external services for API change or other error. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**that explains what was done as part of the grant). |
| 1. | Express backend that does proposal fetching | We will create an Express app, that is able to fetch proposals from OpenGov, and insert them into Notion |
| 2. | Mimir integration | We will extend the Express app, to work together with Mimir, for batch voting |

### Milestone 2: OpenGov Overlay

- **Estimated Duration:** 1 month
- **Full-Time Equivalent (FTE):**  1.25
- **Total Costs:** 11,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can start using the tool |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. Integration tests will be also implemented, to test external services for API change or other error. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**that explains what was done as part of the grant). |
| 1. | SQLite database | We will switch from Notion to an SQLite database. Most likely we will keep Notion as a legacy option |
| 2. | OpenGov overlay | We will create an extension, so Notion is not needed, all actions can be done through OpenGov |

### Budget Breakdown (Example, please adapt)

| Category | Item | Cost | Amount | Total | Description |
| --- | ---- | --- | --- | --- | ---|
| Personell | Full-Stack Developer | 10,000 USD | 2 FTE | 20,000 USD | doing majority of the development work |
| Personell | Document writer & tester | 6,000 USD | 0.5 FTE | 3,000 USD | creating documentation & manual testing  |
| --- | --- | --- | **Total** | **23,000 USD** |  |


## Future Plans

We will maintain this tool, as we are using it ourselves as well, so small improvements will continuously happen.

We will probably add other front ends, apart from the OpenGov overlay, as the app now has an SQLite database, to which we can connect from other front ends as well.

If API structure will change do to the upcoming AssetHub migration, we will follow that, and we will adjust the software to be in sync with the new API / API response.

## Additional Information

Together with Vonyi, we got 500-500 USD from PIF, for the early stages of the development.
