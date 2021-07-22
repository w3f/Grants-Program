# W3F Open Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:** Project 1001 - MVP - Phase 1
* **Team Name:** Uniwrap/1001 Group
* **Payment Address:** 0x173553c179bbf5af39D8Db41F0B60e4Fc631066a (USDT)


> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

Project 1001 is a combination of wordToWorld and Uniwrap, and is also an experiment with NFTs and DeFi. It creates a very interesting game for users to play. It transforms spoken words into dynamic NFT stories in real-time using speech recognition and natural language processing. Users can generate stories with NFT models, the generated story is an NFT / a group of NFTs. A user who has the story could bid to exhibit it on a piece of land to the whole world.

|project 1001|wordtoworld|
|---|---|
|[!["1001"](https://img.youtube.com/vi/IfLEJZKqxoQ/0.jpg)](https://www.youtube.com/watch?v=IfLEJZKqxoQ)|[![wordToWorld](https://img.youtube.com/vi/yrz_y5HF_0s/0.jpg)](https://www.youtube.com/watch?v=yrz_y5HF_0s)|


Project 1001 as a part of Substrate / Kusama / Web 3 Ecosystem

### Project Details

#### Features
* Speech interactive: let a bird fly just by saying "The bird is flying!", 1001 visualize a dynamic world according to users' spoken words.
* Composable NFT story: NFTs from different networks could be integrated together into one story, the story itself as grouped NFTs could be used in multiple DeFi cases like lending, staking, or as an IDO permission.
* DIY unique characters: Make your own characters by composing different body parts, see them come to life right away in your story.
* Rentable land for stories: There are various lands for renting and telling stories. Users can bid for exhibiting their story for the land, and the story will be recorded in "world history".
 
|marketplace|story exposure|
|---|---|
|![marketplace-creation](https://wordtoworld.s3.eu-central-1.amazonaws.com/marketplace.png)|![story display](https://wordtoworld.s3.eu-central-1.amazonaws.com/land_view_small.png)|
 
|land economy|model editor|
|---|---|
|![land-renting](https://wordtoworld.s3.eu-central-1.amazonaws.com/marketplace_land_renting.png)|![model editor](https://wordtoworld.s3.eu-central-1.amazonaws.com/model-editor.png)|
 
 
#### Token Usages
In the game, the system token is used in all the cases involved with the economy, specifically:
* A story could be minted as an NFT on different lands with system token.
* The story elements like Action, Emoji, Sounds could be exchanged as NFT on the marketplace.
* A story on different lands outputs different stories, and the land could be bought or rented with system token, so that a story could be displayed on the land.
* Our model editor enables users to easily create models in 1001 and models could be minted as an NFT with system token as fee.
 
Here is the flow of the token economics with KSM as the system token for example.
 
![token economics](https://wordtoworld.s3.eu-central-1.amazonaws.com/1001flow.png)


### Ecosystem Fit

According to our research, we are the first project to build an NFT game on Substrate, and we hope to create a new era of NFT+DeFi.

The 1001 project could make NFTs more interactive, add exposure, and enable NFT creation just by speaking by non-tech and non-art users, the created NFT could be further used in the internal DeFi scenarios, so it could greatly extend the NFT usability on Polkadot/Kusama.


## Team :busts_in_silhouette:

### Team members

* Xinyue Yang - Team Lead
* Leo Yang - Team technical Lead
* Alex - Team fullstack technical engineer


### Contact

* **Contact Name:** Leo Yang
* **Contact Email:** uniwrapxyz@gmail.com
* **Website:**

### Team's experience

[Xinyue Yang](http://xinyue.de/), is the lead designer. is the founder of [wordtoworld.io](wordtoworld.io), the project is an extension of her bachelor’s and master’s project at Kunsthochschule Berlin Weissensee, she joined DesignFarm Berlin, a design-in-tech accelerator in Berlin Germany in October 2020. Her Bachelor project “Scribbling Speech” turns real-time speech into animated drawings. It was [featured by Google Experiment](https://experiments.withgoogle.com/scribbling-speech) (AI collection) and was exhibited at Google I/O 2019 video tent.
She continued this topic and did my Master’s project “Word to World”, which visualizes the spoken words into dynamic 3D animations. It opens up a new interactive experience of story-telling, and she decided to found a startup and develop a speech-interactive product for parents and kids to tell stories.

Leo Yang, is the lead technical, he is the founder of [UniWrap](https://uniwrap.io/), which enables users to mint a group of token assets into NFTs and jointly participate in DeFi services. He has many years of software development experience and is a decentralized technology believer and a DeFi native. He has developed many successful Defi protocols, and participated or led the development of blockchain projects such as the chains and exchanges. He has rich project development experience in Bitcoin, Ethereum, Substrate, Nervos and other chains.

Alex, is the fullstack technical engineer, he has 7 year of software development experience. He has  developed many successful  Cross-Chain Dapps such as exchanges and contracts IDE. He has rich project development experience on large Cross-Chain projects.

### Team Code Repos

* https://github.com/uniwrap-protocal
* https://github.com/softlipaschara
* https://github.com/buildtrust
* https://github.com/captainalexyz

## Development Roadmap :nut_and_bolt:

* **Estimated duration:** 3 month
* **FTE:**  3.5 FTE
* **Costs:** 30,000 USD

#### Roadmap
We will need to complete the NFT minting and composing logic, the land buying and renting logic, and the game with Unity in the next 4 months. At that time we will be able to have a playable mobile app game. Model Editor and DeFi utility will come in the second phase.

#### Disclaimer
The currently 1001 team has no overlap with the wordToWorld team except Xinyue. In 1001 the team will create a new open-source game with an open source language processing engine.

#### Contribution to the ecosystem
The 1001 project could make NFTs more interactive, add exposure, and enable NFT creation just by speaking by non-tech and non-art users, the created NFT could be further used in the internal DeFi scenarios, so it could greatly extend the NFT usability on Polkadot/Kusama.

### Deliverables

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basictutorial that explains how mint/buy/lend project 1001 NFT with story and models. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains  the work done as part of the grant. |
| 1a. | Pallet module: 1 | Create the assets pallet for models, story and assets. 1 Week |
| 1b. | Pallet module: 2 | Complete RMRK2.0 compatible pallet development. 1 Week |
| 1c. | Pallet module: 3 | Enable model and story transfer, creation, enable compose different models into a story. 1 Week | 
| 1d. | Wallet module | Connect the wallet creation with the game login process. 1 Week | 
| 1e. | Frontend module: 1 | Generate the basic world of the game in Unity. 2 Weeks | 
| 1f. | Frontend module: 1 | Bind the in-game story creation with on-chain extrinsics. 2.5 Weeks |
| 2a. | Land module: 1 | Adding land as NFT into protocol, enable story placed into land.  1.5 Weeks | 
| 2b. | Land module: 2 | Enable land lending and land auction. 1 Week |
| 2c. | Land module: 3 | Integrate the story creation. 2 Weeks |  
| 3a. | Integrate phase: 1 | Bind the in-game story creation and land lending with on-chain extrinsics. 2 Weeks |
| 3b. | Integrate phase: 2 | Create tutorial for play in the app, and create stories. 1 Week |
| 3c. | Integrate phase: 3 | Deliver a iOS app on TestFlight which could be download and play. 1 Week |

So the total duration will be 12 weeks, which is approximately 3 months. We will use Rust for pallets code, Ink! for smart contracts and Unity/Typescript for frontend UI.

## Additional Information :heavy_plus_sign:
