# Blockchainia

- **Team Name:** Blockchainia
- **Payment Address:** 0xf246aede3d892234b52c9bb6f246ab0ac8c0491d (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview

### Overview

 Blockchainia delivers the benefits of digital ownership straight to gamers fingertips. Our infrastructure will enable developers to create games for gamers that decide to take ownership of their digital achievements. The Blockchainia library of pallets enables affordable pay-to-play games that forever immortalize gamings greatest moments on-chain. As an eventual competitive gaming metaverse, Blockchaina's ecosystem includes a community hosted online multiplayer infrastructure including a game engine that will interact directly with our gamechain for user moderated online gaming.

Our Milestone 1 open-source pallets will enable:
- a web based online multiplayer PvPvE first-person shooter (Player vs Player vs Environment (AI) Enemy)
- the engine that drives interactions between server and client
- a leader board that aggregates in-game earned on-chain statistics by week, month, and year.
 - air dropped NFTs earned by completing in game tasks and leader board achievements
 - environment enemies spawned from on-chain NFT assets that funnel spoils back to its owner's wallet
  - a player prompt to create a wallet upon exit or completion
  - community driven DAO that manages the online server infrastructure

Future milestones will include updates to:
- an evolving and expanding list of features through our open-source substrate pallet library
- Two games that use our pallets to share in game items between them
    - an evolving JRPG that explains our gamechains "lore"
    - an evolving arcade style online multiplayer PvPvE

While there are other gaming projects in the ecosystem, ours differs in various ways. First, we will break the stigma gamers associate with NFTs through a fun JRPG. Non-playable character "blocks" will explain their purpose as well as the metaverse they inhabit in their on-chain existence. However, not all is as it seems in the troubled world of Blockchainia. Players will make their way through seasonally released updates to uncover the deep lore, rescue these NPC blocks, and discover the fun that digital ownership brings to the future of gaming. The items and experience earned in this JRPG will be stored on-chain to the users wallet and available in our arcade PvPvE. We have acquired the URL Blockchainia.gg as the landing page for both of these games. 

Other similar projects in the ecosystem are Ajuna and Bajun.  We plan to build off of Ajuna's Layer 1 solution, and expand on their layer 2 and 3 solutions with our own side chain. 

 We differ in that we have the behavioral and marketing background to rapidly onboard users, as well as a product that can create a niche for itself in currently over-saturated market. Mark Zuckerberg tried and failed to create a metaverse with endless resources because he fails to realize the human utility of the technology of his time. We have the right team and the right vision to bring the metaverse to fruition, through a fair and economical value proposition that helped NBA Jam (Midway Games) earn 1 billion dollars to Jurassic Park's (Amblin Entertainment) 395 million in 1993, in quarters (.25USD). We believe we can minimize the cost to consumers by operating our sidechain at the lowest cost possible while allowing a DAO driven public server community to earn a reasonable fee for hosting the online multiplayer infrastructure of the games in our ecosystem. This fee will eventually approach a real market value which will add value to the various fungible tokens used throughout the ecosystem. 

We will create free-to-use Unity assets that compliment our tech stack to allow independent developers to duplicate our model and optionally distribute their games via our distribution architecture or use our reputation based, community moderated online-multiplayer infrastructure. 

## Project Details

### Architecture Diagram
![Blockchainia Architecture](https://github.com/eca20/Blockchainia-Pitch/blob/main/blockchainiadiagram.jpg?raw=true?raw=true "Blockchainia Architecture")

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

Our target audience includes game developers and gamers. Our initial target will focus on indie gamers who would like to remove the overhead realized by releasing their games through traditional distribution channels. Using our infrastructure, developers can release their game free-to-try. Developers will release an NFT collection of playable characters at the same time which grants players full access to decentralized features that will change the way gamers think about the accomplishments and items they earn in game. 

To do this, we will create or modify many existing parts of the Polkadot ecosystem, including browser wallets, chain browsers, and our own parachain optimized for handling real-time game events as on-chain transactions. Our project will have a touch point on almost all levels of the Polkadot stack. 

In future updates, we plan to develop a decentralized means of distribution that allows game developers to release directly to consumers. Our DAO-driven community will engage with developers and provide valuable feedback on desired features, games, and the direction of Blockchainia as a whole. 


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
Matt is an entrepreneur with over 10 years of sales and operational experience in the Computer Security and Blockchain industry. He holds a B.S. in Computer Forensics and Information Security, and as certifications in multiple levels of the web3 tech stack. 

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
We have begun development on a server authoritative online multiplayer game engine that allows for a dedicated server to interact with a game client and perform the prediction and interpolation to reduce perceived latency enough to allow for a seamless game play experience. We will be adding these repositories below over the next few weeks. When the game is in its first "playable" state we will begin experimentation with Ajuna's service layer for our on chain interactions, building on top of their service layer to implement our custom pallets and interact with a custom game chain. 


- https://github.com/eca20/BlockchainiaJRPG
- https://github.com/eca20/SubstratePlayGround
- https://github.com/eca20/Blockchainia-Pitch


 Development Roadmap :nut_and_bolt:

 ### Overview

 - **Total Estimated Duration:** Continuous
 - **Full-Time Equivalent (FTE):**  2
 - **Total Costs:** $25,000

 ### Milestone 1  — Basic MVP

 - **Estimated duration:** 15 weeks development 
 - **FTE:**  1 FTE
 - **Costs:** $25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. This project also includes creating  documentation to will allow our community to test and involve themselves in our multiplayer gaming infrastructure. We hope to receive and respond to feedback on this community documentation in Milestone 2.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. Unit tests will be written for relevant game server functionality. Unit tests will be written for the DeathToll pallet. In each guide (in each project's Github repo), we will describe how to run these tests. Manual integration testing will be through in-game functionality (i.e, Given an enemy is eliminated on server, the proper state functions are executed on chain, and the leader board updates through the in-game chain browser) |
| **0d.** | Docker | We will provide Dockerfiles that can be used to run and test all the functionality delivered with this milestone. This will include a deployable "Full Node" that encases both a game server and substrate node. These will interact with our game client and substrate parachain respectively. A successful MVP will allow a game client to register events on the game server (Server-Authoritative model), which is then written to the parachain ledger. Upon completion of the initial game "level", an "accolade" NFT will be deposited via ink! smart contract to the wallet that completed the required in-game tasks. |
| 1. | Substrate module: Game Engine Events | The Game Events Substrate module will contain functionality for asynchronously administering the the match between the game server and blockchain node.  It is likely that we will break this into multiple pallets, one for core gaming functionality, and one specific to the needs of the DeathToll game-type. The initial pallet features include functionality to create, administer, and write the outcome of a match to the chain, updating the wallets of all players with their earned experience (which is key to the economy of Blockchainia). This module will work on top of Ajuna's service layer to aggregate and marshall game state information relevant to tracked leader board statistics and write to chain. These events will include in game events like player eliminations, deaths, attacks attempted/missed, wins, and other in-game achievements in our continuously expanding list of features. Eventually, this list of configurable features will allow a server owner to run game types similar to those seen in other first-person shooters, like death match, hostage rescue, and capture the flag. The configurable nature of our servers will allow our community to self-explore and find a region of our community that suits their personal play style and temperament. 
| 2. | Unity Game Engine and Configurable Server/Client | We will embed our substrate based chain interactions into our game engine. While the game client and server communicate to drive game play, the game server will also publish certain events to the game chain via Ajuna's Service layer. Each of these processes will initially be deployable via docker container. The game server architecture will operate from a community driven DAO implemented with existing society and membership pallets available in the Substrate store. The value in the deliverable for the game/server lies in its online multiplayer architecture. We will use a server authoritative model embedded with our web3 backend via the substrate modules created in deliverable 1. We will layer these on top and alongside services provided by Ajuna to interact with our game chain. To start a match, the server must request that a "match" be created on chain via ink! smart contract after collecting a nominal fee from connected players. The server will also request the information necessary to spawn environment enemies in the game map from owned NFTs on chain at random. Lastly, players will spawn and game play will begin. In game events, such as when a player eliminates another player or environment enemy, will be written to chain. These streams of game commands which make up the packets sent by the client to the server are used to compensate for latency with methods like prediction and interpolation. Our engine will be similar to that used in Quake (id Software, Microsoft) and Half-Life (Valve, Sierra Studios), using various methods to compensate for latency and ensure a pleasant user experience, the key difference being that interactions leading to specific events will be logged to the chain. With this advancement in technology, Blockchainia will redefine how streamers and creators interact with their followers, and re-imagine how games can interact with a player. Gamings greatest moments will be immortalized on chain, allowing players the chance to engrave their accomplishments on web3's Stanley Cup, our eternal sliding time window leader board. Milestone 1 begins with a simple MVP to onboard users and test our engine before expanding on our functionality and appealing to a broader market. We will receive community feedback on how to fairly and equitably handle situations including server crashes and moderation of hacking and toxicity. This will lead to a code of conduct in deliverable 2 as we expand our features to include a map and item builder, as well as a strong in-game economy. We will also expand on a configurable set of features that affords future web3 game developers to configure our engine for their own games and expand on its features. 
| 3. | Unity Assets | Besides the NFT playable characters released in our games collections, all assets created by our team will be released free to use by other developers who would like to use our ecosystem to create their own games and mods. These will include wall and floor textures, doors, environment enemies, and other sprites used throughout our games. 

## Future Plans
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Oculus VR Port | We plan to port our PvPvE and JRPG to Oculus VR. This will be used to expand into a metaverse of gamers, lead by a community of streamers and industry leaders who moderate their servers and influence the direction of our development team through their position in our community DAO. 
| 2. | Front End Expansion| Our initial browser will be embedded into the game client itself. We plan to expand this to an iOS and Android apps for viewing leader boards, displaying accomplishments, and trading collectibles. 
| 3. | Community Expansion| Users who are invited to the DAO will be encouraged to run their own reputable server/node to grow their community and earn money from the pay-to-play architecture. Owners will create a hierarchy of moderators called "admins" that will ensure fair, fun, and competitive game play throughout our ecosystem. Owners/Servers who do not fulfill their commitments to the greater community will have their influence slashed.
| 4. | Automate integration testing | Automated integration tests for all game server/blockchain interactions.
| 5. | Substrate module: DeathToll Game Events Expansion| We will add new features to the DeathToll Game Events Substrate module in seasonal updates. The features added will be driven in part by the community that plays the game, in the form of the DAO created during Milestone 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / LinkedIn 