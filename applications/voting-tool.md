# Voting Tool

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

A current limitation is, that the tool is tied to Notion, but if we would change the database to, for example, Postgres or MongoDB, then it wouldn't connect to Notion properly, and our DAO is using Notion extensively. We wouldn't want to use a second app for proposal management. There are multiple solutions here, one is to create an extension that will add an overlay above OpenGov, instead of Notion, so we wouldn't experience it as using one more app, or we could switch to a database like Postgres, develop a front end for the tool, and probably somehow bridge that to Notion, for communities that prefer Notion.  

### Ecosystem Fit

We originally developed this tool to ourselves, because before this, voting on proposals took about 10-20 minutes instead of 1-2 minutes, as we needed to vote on every proposal individually. Also, it would be more expensive, because we would need to create 10-20 transactions, instead of only one, this can be a significant amount of money.

Our target audience is mainly small or recently created DAOs, together with the Notion templates that Spectra created, this forms a starter pack. We handed over this starter pack to 7 DAOs in a regional gathering, in Warsaw. To our knowledge, one of them, Bohemia Fam, aka the Czechish DAO has actively adopted the tool and continues to use it.

Similar tools in the ecosystem: 
 - Permanence DAO’s Telegram bot: Their Telegram bot handles proposal evaluation via Telegram. It uses AI to summarize comments. It does not do batch voting.
 - ChaosDAO’s Discord bot: TODO
 - Trustless Core’s Google Sheets: requires many manual actions, compared to our solution.

## Team

- **Team Name:** Hungarian Polkadot DAO
- **Contact Name:** Peter Ott
- **Contact Email:** o.peter.33@tutanota.de
- **Website:** https://polkadothungary.net/

### Team members
 - Peter Ott
 - [Vonyi]

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ottpeter/

### Team Code Repos

This is a DAO, that's main activity is not software development. We are part of Decentralized Voices Program 4. The tool was originally developed by Vonyi, and now it's mainly developed by me (Peter).

- https://github.com/ottpeter/
- https://github.com/send4t/

### Team's experience

Peter - Full Stack software developer with 4 years of professional development experience and 10 years in the cryptocurrency space, specializing in TypeScript applications. Previously won a price in the DAO Track at Polkadot Championship, demonstrating expertise in decentralized governance solutions. Has hands-on experience with decentralized technologies including IPFS and Swarm, combining deep blockchain knowledge with practical development skills.

Our other team members are not software developers, Vonyi has high technical knowledge, for example, he started developing the original (Vercel) app, and he is maintaining polkadothungary.net. The other team members are very good at community building, Spectra created the Notion templates, which we are using to organize our activity within the DAO, Zsófi is working at PBA. We are the multi-talent team, and we experimented this tool on ourselves at first.

## Development Status

The MVP is ready, it can be found here: https://github.com/ZelmaCorp/VotingTool

There is a forum discussion about this tool, it can be found here: https://forum.polkadot.network/t/status-update-on-the-development-of-a-notion-based-voting-tool-for-emerging-communities-and-smaller-daos-active-in-opengov/13469/1

[probably insert flowchart here]

## Development Roadmap

**Milestone 1**: (done) Possible to fetch proposals from OpenGov, possible to cast votes to Mimir, and the app will update the status of the proposal in Notion

**Milestone 2**: TODO OpenGov overlay, or Telegram bot, etc


This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected. Below, we provide an **example milestone** with mandatory (0a to 0e) and example deliverables. 

### Overview

- **Estimated Duration:** 1 month (excluding past work)
- **Full-Time Equivalent (FTE):**  2.4
- **Total Costs:** 22,400 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can start using the tool |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. See the [delivery guidelines](https://github.com/PolkadotOpenSourceGrants/delivery/blob/master/delivery-guidelines.md#testing-guide) for details. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**that explains what was done as part of the grant). |
| 1. | Express backend that does proposal fetching | We will create an Express up, that is able to fetch proposals from OpenGov, and insert them into Notion |
| 2. | Mimir integration | We will extend the Express app, to work together with Mimir, for batch voting |
| 3. | Telegram? | We will create a Telegram integration, so users can handle referendas through Telegram |
| 4. | OpenGov overlay? | We will create an extension, so Notion is not needed, all actions can be done through OpenGov |

### Budget Breakdown (Example, please adapt)

| Category | Item | Cost | Amount | Total | Description |
| --- | ---- | --- | --- | --- | ---|
| Personell | Full-Stack Developer | 10,000 USD | 2 FTE | 20,000 USD | doing majority of the development work |
| Personell | Document writer & tester | 6,000 USD | 0.4 FTE | 2,400 USD | creating documentation & manual testing  |
| --- | --- | --- | **Total** | **22,400 USD** |  |


## Future Plans

Please include here

- how you intend to finance the project's long-term maintenance and development,
- how you intend to use, enhance, and promote your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Additional Information

Together with Vonyi, we got 500-500 USD from PIF, for the early stages of the development.
