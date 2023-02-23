# Blockchainia

- **Team Name:** Blockchainia
- **Payment Address:** 0xf246aede3d892234b52c9bb6f246ab0ac8c0491d (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

The Blockchainia project is a decentralized game distribution and online multiplayer infrastructure. 

 As players (our eventual community) progress through seasonally released levels, their in game actions will be logged to our substrate built parachain (or parathread, we are still doing R&D to see what works best for economy and the end user experience). Our parachain will consist of open-source palettes that enable game servers to interact with parachains in real time. We are creating a web3 enhanced online multiplayer game alongside this project to showcase the features a decentralized game-iverse allows. Our expanding pallets will be tested by the "seasonal" deliverables of our online multiplayer video game. In a new value proposition for consumers, the game will be downloadable for free. Players will be required to purchase an NFT to server as their in-game avatar. Logging in with a wallet containing an NFT will allow you to connect to an online infrastructure to play  web3 enhanced games with a nominal pay-to-play and pay-to-continue fee. 

This project will involve creating an api for interactions between our off-chain game server and parachain. Custom pallets will relay real-time in-game events between the blockchain and off-chain worker. Off-chain servers must be authorized through a DAO that runs our parachain, which will ensure the integrity of those who host online competative gameplay. Community members who run servers will earn a portion of each players pay-to-play fee, a portion of which will pay the parachain overhead incurred by the server. 

This project will allow us to test our parachain and online multiplayer infrastructure to prepare for market research.

With a successful initial MVP, we can perform market research in the nearby Business Research Center at the University of Pittsburgh. This research will allow us to create pallettes that encourage consumer engagement and interaction. With the data output from these studies and focus groups we can publish estimated potential earnings to entice other developers to use our infrastructure and distribution model. 

### Project Details

#### Technologies Used

- Rust
- Substrate
- Node.js
- C#
- Unity IDE
- Adobe Creative Suite - Pixel art for games, marketing materials

### Ecosystem Fit

Our target audience includes game developers and gamers. We will develop a decentralized means of distribution that allows game developers to release directly to consumers. Our DAO-driven online gaming infrastructure will drive community engagement and provide free infrastructure for use by developers to take their games online. This infrastructure will enable and encourage decentralized game distribution. 

## Team :busts_in_silhouette:

### Team members

- Ed Anderson (eca20@pitt.edu)
- Will Chastka (wchastka@tepper.cmu.edu)
- Matt Dennis (oopmatt@gmail.com)

### Contact

- **Contact Name:** Edmund Anderson
- **Contact Email:** eca20@pitt.edu
- **Website:** https://github.com/eca20

### Legal Structure

- **Registered Address:** 906 Yetta Ave. Pittsburgh, PA 15212
- **Registered Legal Entity:** Edmund Casey Anderson

### Team's experience

Ed Anderson 
Ed has three years of software engineering experience developing and renovating the full stack of an enterprise scale system. He holds a B.S. in Computer Science from the University of Pittsburgh, where his Capstone requirement included implementing a MVP token concept, PittCoin, which relied on a bounty-program to connect students to community-sourced homework solutions, the tokens earned from which could be exchanged for extra credit from their professors. He also has five years of experience as the creator and manager of the Katz Business Research Center, during which he oversaw the implementation and successful completion of over one thousand market research and consumer behavior studies and focus groups. 

Matt Dennis
Matt is an entrepreneur with over 10 years of sales and operational experience in the Computer Security and Blockchain industry. He holds a B.s. in Computer Forensics and Information Security, and as certifications in multiple levels of the web3 tech stack. 

Will Chastka
Will has a passion for gaming, ever since his first gaming console, a sega Saturn, playing virtual fighter 2 and Shinobi Legends, to Starcraft and DOTA. His passion for crypto extends decentralized finance, gaming, and many other applications. He previously held position as Community and Marketing Manager for CyrptoAquatics NFT project, and holds a Master's in Business administration from the University of Pittsburgh and a M.S. in Business Analytics from Carnegie Mellon University. 

We plan to leverage all of our experience and industry connections to build a heavily engaged community to gain market share through exploiting an emerging niche in the market with improved technology, our parachain. 

### Team Code Repos

- https://github.com/eca20/Coursework/tree/main/PittCoin
- https://github.com/eca20/Coursework/tree/main/CS1699-Blockchain
- https://github.com/eca20/BlockchainiaJRPG
- https://github.com/eca20
- https://github.com/bluedragonblockchain

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/edanderson4hire/
- https://www.linkedin.com/in/wchastka/


## Development Status :open_book:

- https://github.com/eca20/BlockchainiaJRPG
- https://github.com/eca20/SubstratePlayGround
- https://github.com/eca20/Blockchainia-Pitch


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 12 weeks development for initial grant
- **FTE:**  1-2 FTE
- **Costs:** $24,978 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Social Media | We will deploy a social media marketing campaign upon the successful development and testing of an MVP. This will include a social media campaign, building a discord community of evangelists, and marketing materials that describe our project to potential stakeholders and various customers of our ecosystem. 
| 1. | Substrate module| DeathToll Game Administration | We will create a Substrate module that will enable administration of game server and parachain interaction to create our online multiplayer infrastructure
| 2. | Substrate module: DeathToll Game Events | The DeathToll Game Events Substrate module will add functionality such as starting/ ending a game, start a round, eliminate a player, attack, etc, across server and blockchain  |
| 3. | Unity Game/Server | Both DeathToll Modules of our custom chain will interact with with open-source scrips we create to control our Unity created game server.  Each of these processes will initially need to be deployable on the same machine via docker container, until appropriate configuration is added.
| 4. | Community Documentation | A portion of this project will include creating the documentation that will allow our community to use our infrastructure. We have included the costs of some of the hardware for us to deploy to and performance test in this grant application, but it can be removed if necessary. 
| 5. | Market Research | A completed and successfully tested MVP will allow us to run an in-person consumer research study in the Business Research Center at the Katz Graduate School of Business, University of Pittsburgh. We hope to make the case for funding from a separate Square One grant to support this market research. 


## Future Plans

- We plan to port these concepts to an online multiplayer Oculus VR arcade game. This will involve continuous seasonal expansion of our pallets with new features that add additional configuration to gameplay. Various configurations will come together to create new community driven game types. While this may involve additional grant requests, our hope is that the idea is self sustaining once our MVP is release ready. The web3 enhanced online multiplayer game will be developed to showcase the creative ways web3 can enhance the gaming experience at a lower price point than gamers have grown accustomed to from current distribution channels. 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / LinkedIn 