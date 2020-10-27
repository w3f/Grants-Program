# Open Grant Proposal

* **Project:** Saito Gaming Protocol and Library
* **Proposer:** @trevelyan (David Lancashire)
* **Payment Address:** bc1qvx6wzyxsjw5yza5f7qj4mprzj4hl49q9js0d46


## Project Overview: Introduction to Saito

Saito is a data-network that allows developers to write web3 applications that run inside browsers. Our network is similar to a blockchain in the sense that it does not need an owner to pay for its servers. Where Saito differs from traditional blockchains is that it does not have miners or stakers or validators and does not have a permanent ledger.

This can make Saito confusing on first encounter. The network has some of the properties of a layer-one blockchain, but it is also a transient broadcast layer. Our community is building chat, email, gaming and other web3 applications, but these applications need to integrate with other blockchains when they want to add asset-transfer and smart contract functionality. When it comes to the rest of the blockchain space, Saito's role in the ecosystem is basically bringing the throughput and cryptographic tools to shoulder the burden of handling off-chain data flows, and generating fee-bearing transactions for other blockchains (or parachains) where permanent on-chain transactions are required.

Because of this, the most similar thing to SAITO in the cryptocurrency space is METAMASK. Both allow developers to write applications that run in web-browsers and use blockchains. The difference is that METAMASK relies on Infura to provide a network while SAITO provides one that pays for itself. The Saito approach is superior because it is an open network layer that cannot be privatized. And it elegantly pays for user-facing network infrastructure without the need for IFPs or corporate subsidies.

We believe that as Saito continues to grow developers will look at applications like the [Saito Arcade](https://saito.io/arcade) and embrace this method of developing web3 applications. To make Saito a true web3 platform, we need our platform to be able to interact with Polkadot and its parachains so that Saito applications can send-and-receive NFTs and other financial assets. To use the metamask analogy above, this is essentially the step where we add ETH support and our community starts to incorporate money-functions directly into their games and other applications.

This proposal outlines how we would like to accomplish this. Our goal is to increase the power of Saito as a metamask-layer by enabling our applications to interact with the non-transient ledgers provided by Polkadot and its parachains. To make sure this delivers value to the Polkadot ecosystem, we propose to start by integrating the gaming applications that are driving double-digit monthly growth on our platform. We believe this will be a win-win move. Polkadot will gain gaming traffic and transaction volume, while Saito users can start deploying parachains and transferring financial assets across them directly in their browsers.

### Overview

To accomplish this in a manner that will attract developers, we propose creating an open standard for the sort of web3 games that are driving growth in our community. To put this in context, about eighty percent of SAITO transaction volume is coming from online gaming, so this is a practical area where we can deliver transaction growth and developer attention to Polkadot. It also means bringing a new kind of gaming to the Polkadot network.

Most current "blockchain games" use blockchains to deposit and withdraw money, hold random number lotteries, or to manage NFTs that represent in-game assets (weapons, land, etc.). These use-cases require blockchains to serve as a holder of financial assets and are the sorts of use-cases where our community will need to deploy atop Polkadot. The standards for how assets are created and managed on-chain are best defined by POLKADOT developers and is not the sort of standard we are discussing.

The standard we are discussing involves how to define the language of game moves in sequence. To make this clearer, understand that in the games that developers are building on Saito, players broadcast moves to each other and execute them in parallel from a stack of gaming instructions that are kept synchronized via the metamask-like network. This approach eliminates the need for middlemen like Steam to connect users or control gameplay, while it enables cryptographic techniques like "mental poker"[^1][^2] to be used to ensure provably-fair deck shuffling, dice rolls and other core game functions.

We already have over a dozen sophisticated games that people can play on Saito that adopt this approach: sharing moves between players and executing them in parallel in the browser of each player. So our proposal starts with the creation of an open protocol for how game moves should be broadcast and executed in browsers, a protocol that will be immediately available for use in any number of web-to-native toolchains. This protocol (instantiated in a supporting library) will remove the need for developers to implement common techniques like deck-shuffling, random number generation, card deals and otherwise complicated tasks like simultaneous moves. Beyond that, the protocol will also define ways for developers to transfer in-game assets on Polkadot simply by broadcasting a game move containing an on-stack instruction.

In the next section we provide more details about the protocol standard and reference implementation. Section IV then outlines how we will deliver it in three stages spread across two months. Section V closes this proposal with examples of real applications that already exist - making it clear we are talking about solving practical problems that deliver applications that will be immediately able to interact with Polkadot and benefit from parachain deployment.

### Project Details 
The overarching goal of having a protocol and reference game library is simplifying Web3 game development by creating a standardized method for describing common game moves that can be executed in parallel on different user computers rather than in smart contracts managed by a central blockchain. The reference library is also needed so developers can build games with it directly or consult it as a reference tool when tackling similar problems or porting games between networks by developing competing reference implementations.

To make it clear what we are talking about and why it is important, let's start by describing a practical problem common to many games - the need to shuffle a deck of cards and deal them out to many players. In a typical game, this is handled by custom code or the use of closed game-engines that don't play nicely with the open web3 ecosystem.

In the stack-powered development method, a developer that wishes to have cards dealt to a player needs only add a single instruction to the game stack. This can be done by broadcasting the move to all other players in the game who add it to their respective stacks on receipt of the move. As an example, the following command instructs the game engine to DEAL a total of 5 cards from card deck 1 to player 2:

```DEAL 1 2 5```

When this command is executed in parallel on all player computers, the underlying game engine takes over, adding sub-moves to the stack that prompt players to send player 2 the necessary keys they need to decrypt the 5 cards they are pulling from the deck. Control then passes to the next instruction on the stack, which may prompt player 2 to select one of their newly issued cards, or perhaps discard two cards and then re-shuffle the deck. Each game is obviously unique: the point of the protocol (and supporting library) is to eliminate the need for developers to touch the underlying cryptography and let them focus on game-specific UI and logic.

The starting point for a robust gaming protocol / engine is:
*   shuffling cards (game assets)
*   dealing cards to players (private)
*   dealing cards to piles (public)
*   moving into a player turn
*   rolling-dice (secure random number)
*   simultaneous card-selection
*   simultaneous game moves
*   player alerts and log management

While the protocol can ultimately be ported to any language, the practical starting place is javascript (NodeJS) as browsers will provide the UI for most Web3 blockchain games, and this is what our developers are building and where they need integration with permanent ledgers like Polkadot and its parachains. So it makes sense to define the protocol broadly but provide a javascript version as the reference implementation.

Our libraries at Saito currently handle about half of these requirements. So the first part of our proposal involves implementing the remainder in a standardized javascript (NodeJS) implementation that is well-documented, has an intuitive API with non-ad-hoc naming conventions ("DEAL", "SHUFFLE", "ROLL") that is available under a flexible open-source license. To be clear, we are talking about the delivery not only of an abstract protocol but a game engine that implements it along with working code that allows players to play games using it. \

Once the basic game engine is in place, we will need to extend it to add commands that let developers programmatically handle blockchain / asset / NFT transfers within games as well as in-game moves. Just as the gaming protocol / library permits developers to trigger a deal or shuffle a deck, so must it support users making deposits, confirming receipt of assets and/or NFT tokens, transferring them to other players, or otherwise engaging with assets on external ledgers. This functionality is needed both within gameplay as well for industry-focused cases such as letting users prove that they have purchased a game or handling real-time payments to game publishers on game creation.

The protocol needs to support the following use cases that should be provided by permanent ledgers:
*   checking account balances
*   sending tokens to accounts
*   confirming receipt of tokens

Adding asset-transfer commands into the game engine will create a powerful backend that can be deployed across different parachains (no user or developer lock-in) and permit integration between asset-transfer networks and the high-throughput web 3.0 data services supported by the metamask-layer. This game library will abstract away everything that is difficult about on-chain game creation.

Our goal building this is encouraging third-party developers to roll out more games using open standards, raising awareness of the power of blockchains for on-chain gaming via the Web3 Foundation and taking part in the shift that is coming from centralized to decentralized gaming networks. Funding is sought to justify prioritizing resources on Polkadot integration and make sure we can devote the needed time to apply polish to the documentation and other developer-focused assets so the library/engine can be of use to external developers.

### Ecosystem Fit 
Saito is deeply committed to web3 and our stack is focussed firmly on helping make it simple for developers to bring truly decentralized applications, on line automomy and new business models to users. Adding the ability to interface with parachains, as a bridge to the Polkadot ecosystem opens up a world of financial and other tools to those developers, and provides developers working in or interested in the Polkadot ecosystem a fast simple way to get started.  Gaming is the perfect proving ground for this.

## Team :busts_in_silhouette:

### Team members
* David Lancashire
* Richard Parris
* Clayton Rabenda	

### Team Website
* https://saito.io/

### Legal Structure 
Proclus Technologies Limited.
1101 299QRC, 299 Queens Road Central, Hong Kong.

### Team experience
Saito's founders have both worked leading development and broader IT teams in China for over 10 years. The team has worked on projects in a variety of fields, and are all early 'cyrpto adopters'.

### Team Code Repos

#### Saito
* https://github.com/saito-lite

#### Non-Saito Crypto
* https://github.com/clayrab/snekCoin
* https://github.com/trevelyan/lighthouse

### Team LinkedIn Profiles
* https://www.linkedin.com/in/david-lancashire/
* https://www.linkedin.com/in/richard-parris-02b5a39/
* https://www.linkedin.com/in/clayton-rabenda-6ab9b39/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 8 Weeks
* **Full-time equivalent (FTE):**  1.5 FTE 
* **Total Costs:** 1.8 BTC

### Milestone 1 — Saito Polkadot API Module 
* **Estimated Duration:** 3 Weeks
* **FTE:**  1.5
* **Costs:** 0.9 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Saito Module | Polkadot module that allows Saito applications to connect to a Polkadot API access point to send / receive network Polkadot data. This module would be the equivalent of "metamask" application for all of the existing games and applications already running on Saito. It would run fully in-browser. |
| 2. | Documentation | Inline documentation and published how to guide. |
| 3. | Environment Build | Build and test environment containing Polkadot node and Saito Stack. <br />Test interoperability and benchmark performance. <br />Document configuration, deployment and management. |
| 4 | Tutorial | Developer tutorial showing how applications can integrate with Polkadot module on a base-level (i.e. without the need for use of the gaming API layer), making Polkadot a first-class citizen for all Saito Web3 applications and allowing all of them to send and receive payments in DOT. |
||||

**Details:**

The point of building this module first is to have a set of *local* API functions that the underlying game library can be instructed to call when it needs to query the external Polkadot chain. Relying on local interface simplifies the coding of the game library so that networking and chain-specific connection information can be abstracted away. This will keep the game library cross-chain portable and remove the need for the game library to handle networking code.

A side-benefit of building this module first is that Polkadot and parachain tokens become A-class citizens on the Saito network. Getting this module written and documented first allows all games and other (non-stack) developer applications to send and receive Polkadot.

A plug-and-play Saito module will also simplify building UI components and web applications for Polkadot that monitor or interact with the chain through an API-access point. Getting this functionality out first allows us to reach out to the Polkadot community with an immediately-useful solution for certain classes of Web3 application-development work. \


**Timeline Notes:**
Three weeks should be adequate for building and documenting this module, as well as putting together a tutorial demonstrating how independent Web3 modules can make API requests and check account balances, etc.

### Milestone 2 — Asset Transfers in Gaming Protocol
* **Estimated Duration:** 3 Weeks
* **FTE:**  1.5
* **Costs:** 0.9 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Protocol and Library Upgrade | Token-specific transfer instructions added to game engine / protocol.<br /> Code addig Stack-based instructions for applications adding the following common game mechanics:  <ul><li>player Y deposits assets</li><li>player Y sends assets to player X</li><li>player Y requests balance</li></ul> |
| 2. | Documentation | Inline and published documentation of library extensions. |
| 3. | Game | Provision of at least a single open-sourced game demonstrating the features. |
||||

**Details:**

Combine the previous API work with the game protocol work to add financial asset transfers and payment functionality into the underlying protocol and game engine. This will be entirely new functionality. It will allow developers to do things like check that payments have been made prior to gameplay or send and receive assets during play.

We suggest the creation of a "play-for-charity" game to demonstrate the required financial use-cases (players deposit tokens, players send those tokens to each other and in case of loss send the funds to a charity) without the need to worry about legal issues surrounding gaming. Another idea might be a game that requires players to submit proof-of-payment to be permitted to play the game. 

Regardless, this work is done last as it builds on the experience of both the initial Polkadot module, as well as the work expanding and systematizing the protocol. Since in some ways it is the most interesting part of the project, we also want to leave it for last so that the community will be aware of the work being done and ideally come in with suggestions on which games to port and which particular features to focus on first.

**Timeline Notes:**

We expect it to take about three weeks to do this work. A week is probably sufficient for the initial protocol and game library work. Add another two weeks to get a workable / fun game built that demonstrates the functionality.

### Community engagement

The Saito team will publish regular updates on developments and milestone completions. This project represents a great developer outreach opportunity for Saito, and to bring much anticipated features from the Polkadot ecosystem. There will be many opportunities to promote this to our growing community and specifically to developers working on Saito, and those in the Polkadot space.

More importantly Saito will seek out a partner project working on NFTs or other tokens on a parachain to colaborate on building a game in which these tokens are issued as prizes, trophies, in game assets, achievement badges or similar. This would cap off the work done as part of this grant, and set the stage for broader colaboration.


## Future Plans
Our hope is that this work continues well into the future, and that the Polkadot community embraces not only the sort of open source games that our community is producing, but the more flexible style of application design that comes from in-browser stack-based program execution instead of offloading everything into smart contracts.

Should it become apparent that a game protocol compliant substrate module could be valuable to Polkadot and the community, we would investigate building such. Either under a separate grant or in colaboration with the Polkadot community.

Our criteria for success is our ability to build community around feature-rich games. Our hope is that integration with Polkadot and other financial parachains brings value to Polkadot users, programmers, and our own gamers. We are happy to work with other chains and communities to bring their valuable features into our gaming environment. The shared goal is an open ecosystem that is more attractive than closed source competitors like Steam and the Apple Store.

Our criteria for failure would be spending a significant amount of our time building foundational tools that do not drive game development and community growth. We think this unlikely, as our own community is growing rather quickly and there is a clear need for Web3 games to integrate with asset-class blockchains and parachains.

## Additional Information :heavy_plus_sign: 

The Saito Project has seed support.

The images below are from playable games that are currently running on the Saito network (https://saito.io/arcade). In addition to building their own games, developers are able to start building payment functionality on top of these and other games immediately upon this project being completed.

Games generally available for play around the network include Chess, Wordblocks, Twilight Struggle, Red Imperium, Poker, President, Solitrio, Scotland Yard, Thirteen Days, Pandemic, and several others. Most games support anywhere from 2 to 8 players and take anywhere from 15 minutes to 6 hours of time to play through completion.

###Game Images

#### Twilight Struggle
![Twilight Struggle](https://org.saito.tech/wp-content/uploads/2020/10/twilight.png)

#### Poker
![Poker](https://org.saito.tech/wp-content/uploads/2020/10/poker.png)

#### Red Imperium
![Red Imperium](https://org.saito.tech/wp-content/uploads/2020/10/imperium.png)

#### Wordblocks
![Wordblocks](https://org.saito.tech/wp-content/uploads/2020/10/wordblocks.png)

## Notes

[^1]:
     https://en.wikipedia.org/wiki/Mental_poker

[^2]:
     https://apps.dtic.mil/dtic/tr/fulltext/u2/a066331.pdf