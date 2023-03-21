# Blockchainia

- **Team Name:** Blockchainia
- **Payment Address:** TBD (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview

### Overview

The Blockchainia project is a decentralized game distribution and online multiplayer infrastructure. 

 As players (our eventual community) progress through seasonally released levels, their in-game actions will be logged to our substrate built parachain (or parathread, we are still doing R&D to see what works best for our end-user experience). Our parachain will consist of open-source palettes that enable game servers to interact with parachains in real-time. We are creating a web3 enhanced online multiplayer game alongside this project to showcase the features a decentralized game-iverse allows. Our expanding pallets will be tested by the "seasonal" deliverables of our online multiplayer video game. In a new value proposition for consumers, the game will be downloadable for free. Players will be required to purchase an NFT to serve as their in-game avatar. Logging in with a wallet containing an NFT will allow you to connect to an online infrastructure to play web3-enhanced games with a nominal pay-to-play/pay-to-continue fee. 

This project will involve creating an api for interactions between our off-chain game server and parachain. Custom pallets will relay real-time in-game events between the blockchain and off-chain worker. Off-chain servers must be authorized through a DAO that runs our parachain, which will ensure the integrity of those who host online competative gameplay. Community members who run servers will earn a portion of each players pay-to-play fee, a portion of which will pay the parachain overhead incurred by the server. 

This project will allow us to test our parachain and online multiplayer infrastructure to prepare for market research.

With a successful initial MVP, we can perform market research in the nearby Business Research Center at the University of Pittsburgh. This research will allow us to create pallets that encourage consumer engagement and interaction. With the data output from these studies and focus groups we can publish estimated potential earnings to entice other developers to use our infrastructure and distribution model. 

While there are other gaming projects in the ecosystem, ours differs in various ways. Our pay-to-play gaming infrastructure will funnel our currency from end-users, through server owners which pay a fee to our parachain to connect to the network and access the ledger. Events unique to our architecture include spawning AI enemies from ink! smart contract created NFTs. These enemies will earn in-game currency for its owner by completing in-game tasks, like eliminating players. This encourages users not only to purchase an NFT to play the game, but also to earn back the tokens they spend to play the game. Each AI environment enemy in our game will be owned as an NFT on our blockchain. This will drive our economy and community. 

We will create free-to-use Unity assets that compliment our tech stack to allow independent developers to duplicate our model and optionally distribute their games via our distribution architecture or use our reputation based, community moderated online-multiplayer infrastructure.

## Project Details

### Architecture Diagram
![Blockchainia Architecture](https://github.com/eca20/Blockchainia-Pitch/blob/main/Blockchainia.drawio.png?raw=true "Blockchainia Architecture")

#### Technologies Used

- Rust
- Substrate
- ink! Smart Contracts
- Node.js Front End
- C#
- Unity
- Adobe Creative Suite 
- Blender

### Ecosystem Fit

Our target audience includes game developers and gamers. We will develop a decentralized means of distribution that allows game developers to release directly to consumers. Our DAO-driven online gaming infrastructure will drive community engagement and provide free infrastructure for use by developers to take their games online. This infrastructure will enable and encourage decentralized game distribution. 

## Team 

### Team members

- Ed Anderson (eca20@pitt.edu)
- Will Chastka (wchastka@tepper.cmu.edu)
- Matt Dennis (oopmatt@gmail.com)

### Contact

- **Contact Name:** Ed Anderson
- **Contact Email:** eca20@pitt.edu
- **Website:** https://github.com/eca20

### Legal Structure

- **Registered Address:** 502 W 7th St, Suite 100, Erie, PA 16502
- **Registered Legal Entity:** Blockchainia LLC

### Team's experience

#### Ed Anderson 
Ed has three years of software engineering experience developing and renovating the full stack of an enterprise scale system. He holds a B.S. in Computer Science from the University of Pittsburgh, where his Capstone requirement included implementing a MVP token concept, PittCoin, which relied on a bounty-program to connect students to community-sourced homework solutions, the tokens earned from which could be exchanged for extra credit from their professors. He also has five years of experience as the creator and manager of the Katz Business Research Center, during which he oversaw the implementation and successful completion of over one thousand market research and consumer behavior studies and focus groups. 

#### Matt Dennis
Matt is an entrepreneur with over 10 years of sales and operational experience in the Computer Security and Blockchain industry. He holds a B.s. in Computer Forensics and Information Security, and as certifications in multiple levels of the web3 tech stack. 

#### Will Chastka
Will has a passion for gaming, ever since his first gaming console, a sega Saturn, playing virtual fighter 2 and Shinobi Legends, to Starcraft and DOTA. His passion for crypto extends decentralized finance, gaming, and many other applications. He previously held position as Community and Marketing Manager for CryptoAquatics NFT project, and holds a Master's in Business administration from the University of Pittsburgh and a M.S. in Business Analytics from Carnegie Mellon University. 

We plan to leverage all of our experience and industry connections to build a heavily engaged community to gain market share through exploiting an emerging niche in the market with improved technology, our parachain. 

### Team Code Repos

- https://github.com/eca20/Coursework/tree/main/PittCoin
- https://github.com/eca20/Coursework/tree/main/CS1699-Blockchain
- https://github.com/eca20/BlockchainiaJRPG
- https://github.com/eca20
- https://github.com/oopmatt

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/edanderson4hire/
- https://www.linkedin.com/in/wchastka/


## Development Status
We have started created a Unity game, but in C#. We are converting these scripts to Rust in the most performant way possible. 
We have performed most of the RnD necessary to use our NFT images as in-game "prefabs" in unity, so that a players in-game avatar matches their purchased NFT characters image and custom variations. Our economics and go to market strategy to drive community engagement are complete, and we are ready to being creating the most optimal end-user experience for a testable minimum viable product. 
We plan to work in an agile/scrum setting to provide seasonal (3-4 month) updates to our games and servers. These changes will require updates to our substrate pallets as we add community demanded gaming functionality. We will use lean/six sigma concepts, a well as test-driven development and various other methodologies to ensure we provide fast, meaningful updates to our growing community. 

These repos include our R & D work, although we have not begun development on our first iteration of the MVP. We will be starting two projects from scratch, the Blockchainia blockchain, and the DeathToll vide game, for Milestone 1. These repos will include all necessary documentation to run and test our functionality.

- https://github.com/eca20/BlockchainiaJRPG
- https://github.com/eca20/SubstratePlayGround
- https://github.com/eca20/Blockchainia-Pitch


 Development Roadmap :nut_and_bolt:

 ### Overview

 - **Total Estimated Duration:** Continuous
 - **Full-Time Equivalent (FTE):**  2
 - **Total Costs:** $25,000

 ### Milestone 1  — Basic MVP

 - **Estimated duration:** 13 weeks development 
 - **FTE:**  .97 FTE
 - **Costs:** $25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. This project also includes creating  documentation to will allow our community to test and involve themselves in our multiplayer gaming infrastructure. We hope to receive and respond to feedback on this community documentation in Milestone 2.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. Unit tests will be written for relevant game server functionality. Unit tests will be written for the DeathToll pallet. In each guide (in each project's Github repo), we will describe how to run these tests. Manual integration testing will be through in-game functionality (i.e, Given an enemy is eliminated on server, the proper state functions are executed on chain, and the leader board updates through the in-game chain browser) |
| **0d.** | Docker | We will provide Dockerfiles that can be used to run and test all the functionality delivered with this milestone. This will include a deployable "Full Node" that encases both a game server and substrate node. These will interact with our game client and substrate parachain respectively. A successful MVP will allow a game client to register events on the game server (Server-Authoritative model), which is then written to the parachain ledger. Upon completion of the initial game "level", an "accolade" NFT will be deposited via ink! smart contract to the wallet that completed the required in-game tasks. |
| 1. | Substrate module: DeathToll Game Events | The DeathToll Game Events Substrate module will add functionality for starting/ending a "match"", start and end a "round", eliminate a player, score a point, complete a "task". Tasks examples include "move through a defined space", eliminate an AI enemy, retrieve an item, etc. This deliverable will include unit tests and instructions in the git repository. It is highly likely that we will break this into two pallets, one for core gaming functionality, and one specific to the needs of the DeathToll game-type. 
| 2. | Unity Game/Server | Both DeathToll Modules of our custom chain will interact with with open-source scripts we create to control our Unity created game server.  Each of these processes will initially be deployable via docker container.

## Future Plans
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Oculus VR Port | We plan to port the game  to an online multiplayer Oculus VR arcade game. This will involve continuous seasonal expansion of our pallets with new features that add additional configuration to game play. Various configurations will come together to create new community driven game types. While this may involve additional grant requests, our hope is that the idea is self sustaining once our MVP is release ready. The web3 enhanced online multiplayer game will showcase the creative ways web3 can enhance the gaming experience at a lower price point than gamers have grown accustomed to from current distribution channels. 
| 2. | Front End Expansion| Our initial browser will be embedded into the game client itself. We plan to expand this to an iOS app and web3 browser for viewing leader boards and accolades or trading collectibles. 
| 3. | Community Expansion| Users who are invited to the DAO will be encouraged to run their own reputable server/node to grow their community and earn money from the pay-to-play architecture. Fair game play will be enforced by server moderators called "admins". Servers which decline in reputation will lose revenue and influence within the DAO.
| 4. | Automate integration testing | To keep our development cycle lean and free from waste, we want to create automated integration tests for all game server/blockchain interactions.
| 5. | Substrate module: DeathToll Game Events Expansion| We will add new features to the DeathToll Game Events Substrate module in seasonal updates, like 3-4 months in length. The features added will be driven in part by the community that plays the game, in the form of the DAO created during Milestone 2. We will use existing pallets to implement the DAO. 
| 6. | Community DAO|  We will use existing pallets to implement a DAO that can add and remove members, vote on feature expansion and development direction, and earn earn "reputation" points. To run a DAO-authorized server, you must stake your reputation points, which can be forfeited after a successful vote by the DAO, triggered by a threshold of members for behavior deemed detrimental to the community. If you no longer have the reputation points to run a server, your server will not be able to communicate with the chain. the more reputation points you hold, the more servers you can run. 
## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / LinkedIn 