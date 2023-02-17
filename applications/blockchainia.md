# Name of your Project

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Blockchainia Project
- **Payment Address:** 
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

### Overview

The Blockchainia project is a decentralized game distribution and online multiplayer infrastructure. 

The project starts with the development a web3 connected Junior Role-Playing game (JRPG). As players (our eventual community) progress through seasonally released levels, their in game actions will be logged to our substrate built parachain. Our parachain will consist of open-source palettes that enable our game servers to interact with our parachain in real time, as part of a new web3 enhanced game type called "DeathToll". Our expanding pallets will be tested by the "seasonal" deliverables of the JRPG video game. In a new value proposition for consumers, the game will be downloadable for free. To play, you will need to purchase an NFT, which will represent an in-game playable character with unique attributes. Logging in with a wallet containing an NFT will allow you to connect to our online infrastructure and play our web3 enhanced games with a small pay-to-play and pay-to-continue fee. 

This project will involve creating an api for interactions between our off-chain game server and parachain. Custom pallets will relay real-time in-game events between the blockchain and off-chain worker. Off-chain servers must be authorized through a DAO that runs our parachain, which will ensure the integrity of those who host online competative gameplay. Community members who run servers will earn a portion of each players pay-to-play fee, a portion of which will pay the parachain overhead incurred by the server. 

This project will allow us to test our parachain and Unity created online multiplayer infrastructure. 

With the initial MVP, we can research in the nearby Business Research Center at the University of Pittsburgh. This research will allow us to create pallettes that encourage consumer engagement and interaction. With the data output from these studies and focus groups we can publish estimated potential earnings to entice other developers to use our infrastructure and distribution model. 

### Project Details

## Technologies Used

- We will be creating our infrastructure from available substrate pallettes, and creating pallettes for our custom parachain supporting our custom game features. 
- Unity as a means for Game and Server creation
- Gimp/Adobe Creative Suite - PixelArt for games, marketing materials

- We have created a game server and client in unity for a simple first-person shooter. We will use this to create the MVP game/parachain interaction that we will release for our proof-of-concept, before porting to Oculus VR. 

### Ecosystem Fit

Our target audience includes game developers and the general gaming community. We will develop a decentralized means of distribution that allows game developers to release directly to consumers. Our DAO-driven online gaming infrastructure will drive community engagement and provide free infrastructure for use by developers to take their games online. This  infrastructure will enable decentralized game distribution. There are no similar projects in the ecosystem's current gaming space. 

## Team :busts_in_silhouette:

### Team members

- Ed Anderson (eca20@pitt.edu)
- Will Chastka (wchastka@tepper.cmu.edu)
- Matt Dennis

### Contact

- **Contact Name:** Edmund Anderson
- **Contact Email:** eca20@pitt.edu
- **Website:** 

### Legal Structure

- **Registered Address:** 427 Amherst Ave. Moon Twp. PA 15108
- **Registered Legal Entity:** 

### Team's experience

Ed Anderson 
- Bachelor's degree in Computer Science, University of Pittsburgh
  - Capstone Research Project: PittCoin
- Previous Experience
  - 3 years software engineering on full stack of enterprise scale product
  - Former Researcher/Manager, Katz Business Research Center, University of Pittsburgh



### Team Code Repos

- https://github.com/eca20/Coursework/tree/main/PittCoin
- https://github.com/eca20/Coursework/tree/main/CS1699-Blockchain
- https://github.com/eca20/BlockchainiaJRPG

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/eca20
- https://github.com/bluedragonblockchain

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/edanderson4hire/
- https://www.linkedin.com/in/wchastka/


## Development Status :open_book:

- https://github.com/eca20/BlockchainiaJRPG
- https://github.com/eca20/Blockchainia-Pitch

I spoke with Bill Laboon lightly about the concepts behind the project, as he was the advisor on my capstone project at the University of Pittsburgh. That feedback inspired me to pursue the idea with a grant application. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 8 weeks development, 1 week market research
- **FTE:**  3 @ .23 FTE = .69 FTE (for 288 hours of estimated development) (estimating 12 hours/week/team member)
- **Costs:** $24,978 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one. 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Social Media | We will deploy a social media marketing campaign upon the successful development and testing of an MVP. This will include a social media campaign, building a discord community of evangelists, and marketing materials that describe our project to potential stakeholders and various customers of our ecosystem. 
| 1. | Substrate module: DeathToll Game Administration | We will create a Substrate module that will enable administration of game server and parachain interaction to create our online multiplayer infrastructure
| 2. | Substrate module: DeathToll Game Events | The DeathToll Game Events Substrate module will add functionality such as starting/ ending a game, start a round, eliminate a player, attack, etc, across server and blockchain  |
| 3. | Substrate parachain and Unity Game Server| Both DeathToll Modules of our custom chain will interact with with open-source scrips we create to control our Unity created game server.  Each of these processes will initially need to be deployable on the same machine via docker container, until appropriate configuration is added.
| 4. | A portion of this project will include creating the documentation that will allow our community to use our infrastructure. We have included the costs of some of the hardware for us to deploy to and performance test in this grant application, but it can be removed if necessary. 
| 5. | A completed and successfully tested MVP will allow us to run an in-person consumer research study in the Business Research Center at the Katz Graduate School of Business, University of Pittsburgh. We hope to make the case for funding from a Square One grant to support this market research. 


## Future Plans

- We plan to port these concepts to an online multiplayer Oculus VR arcade game. This will involve continuous seasonal expansion of our pallets with new features that add additional configuration to gameplay which can be combined to create new game types. While this may involve additional grant requests, our hope is that the idea is self sustaining once the mvp is release ready. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / LinkedIn

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
