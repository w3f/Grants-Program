# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:** Blawgd
* **Team Name:** Shravan Shetty
* **Payment Address:** BTC, Ethereum (USDT/DAI) or Karura (kUSD) payment address. Please also specify the currency. (e.g. 0x8920... (DAI))
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1 

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

### Overview

Blawgd - censorship resitant blogging platform.

Blawgd is a blogging platform similar to twitter/koo but on the blockchain that protects the freedom of speech of the user. The user
cannot be censored or banned. The feed is just chronologically ordered so no external entity can artificially influence content like 
existing blogging platform.

We have a working prototype built using cosmos-sdk, we aim to create as many backend implementations as possible 
to keep up with blockchain technology. We want to create
an implementation in the substrate ecosystem.

We are interested in creating this project since we value our freedom of speech and so should everyone. We also fear
the amount of power modern social media platforms wield.

### Project Details

Our backend is simple and can be implemented using almost any blockchain/smart-contract as a backend. Our current backend is a cosmos blockchain built using cosmos-sdk.

We aim to have 2 client:
1. Browser rust client
2. Mobile flutter client

We have a working browser version at https://blawgd.com - browser extension wallet support is yet to be added. The clients are also light clients
which verify all data they recieve from the blockchain, this how we ensure our platform is censorship resitant.
We want to create a flutter app instead of webview app for better user experience, with the
flutter app the user experience will be exactly like using existing platforms since they do not have to deal with the extension.

To implement blogging platform on the blockchain certain trade offs had to be made:
1. Old posts are not stored on the network (they will be stored off chain by "providers").
2. Likes work differently, a like sends a coin from the user to the post author. A user can like a post multiple times sending multiple coins.
3. Users can repost multiple times. Old posts can be kept alive after deletion by reposts.
4. Search is not provided by the network (will be provided by "providers")
5. Notifications are not provided by the network (will be provided by "providers")
6. Recommendations are not provided by the network (will be provided by "providers")
7. Login mechanism may be drastically different than traditional login mechanisms.
8. Reads are free but any action that requires writes such as creating a new post or liking an existing posts require some coins to be paid as transaction fees. The transaction fee will vary based on the traffic of the network.

Providers are just entities that provide certain features without censorship gaurentees.

### Ecosystem Fit

Blawgd would be a blockchain application in the polkadot ecosystem focusing on users of existing blogging platforms.
Blawgd provides a neutral platform of communication that cannot be influenced by external entities.
Cannot find any project on the polkadot ecosystem that is similar to blawgd.

## Team :busts_in_silhouette:

### Team members
- Shravan Shetty

### Contact

* **Contact Name:** Shravan Shetty
* **Contact Email:** shravanshetty322@gmail.com
* **Website:** https://shravanshetty.net

### Legal Structure

* **Registered Address:** None
* **Registered Legal Entity:** None

### Team's experience

Shravan Shetty - developer with extensive experience in web development and moderate experience in blockchain

### Team Code Repos

* https://github.com/shravanshetty1/blawgd
* https://github.com/shravanshetty1

### Team LinkedIn Profiles (if available)

* https://www.linkedin.com/in/shravan-shetty-8927a9147/

## Development Status :open_book:

Current development status can be found at https://github.com/shravanshetty1/blawgd. The backend and the browser client prototype is built.

## Development Roadmap :nut_and_bolt:

Our development roadmap can be summarised to -
1. Creating a substrate based backend and integrating it with clients
2. Creating a flutter app

### Overview

* **Total Estimated Duration:** 4 months
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** 10,000 USD

### Milestone 1 — Creating a substrate backend and integrating it with clients

* **Estimated duration:** 2 months
* **FTE:**  2
* **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Substrate chain | Blawgd backends built using substrate |  
| 2. | Client integration | Client using substrate light client to verify queried data |  

### Milestone 2 — Flutter Application

* **Estimated Duration:** 2 month
* **FTE:**  2
* **Costs:** 5,000 USD


## Future Plans

The project is pretty simple, after we build the app our focus would be towards user acquisition.