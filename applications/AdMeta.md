# W3F Grant Proposal

- **Project Name:** AdMeta
- **Team Name:** AdMeta
- **Payment Address:**
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Advertising in Metaverse

AdMeta is a Metaverse advertisement platform that focuses on privacy-preserving. AdMeta uses DID to identify target groups for advertiser, and with the usage of zero-knowledge proof, AdMeta guarantees not to collect any user data. AdMeta builds billboard assets in Metaverse platforms like Decentraland, Bit.Country, to allow land holders to integrate our products easily.

In Polkadot and Kusama ecosystem, DID projects like Litentry are growing fast along with its related products. We have already discussed and agreed on our initial cooperation with Litentry. Also, we have contacted with Metaverse projects like Bit.Country, who shows great interests as well.

Unlike traditional ad platforms, who collect users sensitive data(e.g. location, browsing history) for advertising, AdMeta does not collect or store any user data per se. Instead, users voluntarily decide and control what data can be stored in TEE, and the stored data in TEE cannot be accessed by anyone except users themselves.

### Project Details

![AdMeta Demo - the floating billboard](https://user-images.githubusercontent.com/4738254/144754078-1877d8a5-8ef9-49ec-8ef5-f79496a689f0.png)

In the above image, the floating billboard is our prototype ad component built with decentraland SDK. Users who registered on our blockchain, and switched "Ad Display" option on (by default it's off) are able to see a customized ad content on this billboard while gaming in decentraland.

The content of this ad component is selected according to user's personal data and preference. Unlike centralized ad platforms, we don't store user's data on or database. Instead, it's stored on the TEE layer of blockchain, and by using zero-knowledge proof, the target group matching and selecting happen also in the TEE layer, which ensures that no private data are exposed during the whole process. Eventually, both user and publisher receive some amount of token as rewards from advertiser.

Our blockchain is built with Substrate, and the pallet-ad provides the functionality of advertisement proposal, storage and governance. The user pallet will connect to TEE-based external identity aggregation and DID service provided by Litentry (we have already the initial cooperation plan) to match ads with users data and preference.

#### Architecture:

![AdMeta Architecture](https://raw.githubusercontent.com/h4n0/gists/master/admeta/admeta_architecture.svg)

Advertisers can propose an ad with certain acceptance rule, e.g. link clicking, and also advertiser provides how many times the ads are displayed and converted, and how much they pay for each conversion. They need to pay the total price (the number of ad conversion \* price per conversion) while proposing the ad.

Councils shall approve or reject ad proposals according to the content of ads. Also, advertisers are evaluated on their behavior democratically.

Users can switch on the "Ad Display" option on AdMeta, so that users can get rewards by viewing and interacting with ads. By default, this option is off, which means users who haven't set up their AdMeta won't see any ads. Users can also provide their data for a better ad matching, by this means they will get more rewards.

Publishers can simply utilize our Ad Assets on any Metaverse platform and place it on their lands. Users also get rewards by a successful display conversion.

#### Technology Stack:

- Substrate
- Node.js
- 3D Model Design

### Ecosystem Fit

There are an increasing number of Metaverse related projects in Polkadot/Kusama ecosystem, however, the current Metaverse platforms still lack of infrastructures and applications, comparing to our current real life. We therefore build this for various Metaverse platforms.

Our target audiences can be Web3 projects, who are potential advertisers, Metaverse land holders, who are potential publishers, and Metaverse players, who are potential users.

Advertising is our natural needs in almost all social scenarios, and we meet this needs in Metaverse.

[Parami](https://parami.io/) builds Web3 ad platforms as well, and their scope is to build the DID and privacy layer by themselves. While we are focusing on the advertising functionality only, and the DID service will be provided by Litentry, who is more professional on this field and has already their products. Also, our ad platform is targeting only in Metaverse, not Web3.

## Team :busts_in_silhouette:

### Team members

Han Zhao - Core Dev and PM of Litentry Parachain Team, University of Stuttgart

Yue Xie - Digital Marketing Lead, King's College London

Shihao Zhao - Full Stack Dev of Litentry, University of Toronto

Hao Ding - VP of Litentry, Founder of Web3Go, University of Stuttgart

### Contact

- **Contact Name:** Han Zhao
- **Contact Email:** windzhaohan@gmail.com
- **Website:**

### Legal Structure

- **Registered Address:** No legal structure yet.
- **Registered Legal Entity:** No legal structure yet.

### Team's experience

Han is a core developer and project manager at Litentry, and he is one of the main developers who implemented the Litentry parachain from scratch. Litentry is an identity aggregation focused company in Polkadot ecosystem, and has got the Web3 Foundation grant since 2019.

Yue has more than 8 years experience of digital marketing, and she has a deep understanding and practice of various online marketing and advertising methods.

Shihao is a full stack developer at Litentry, who contributes a lot in Litentry and Web3Go web apps and backend apps.

Hao is the founder of Web3Go, VP of Litentry, who has a very solid practical experience on both blockchain and data science.

Note: Both Litentry and Web3Go mentioned above are Web3 granted project.

### Team Code Repos

- https://github.com/litentry/litentry-parachain
- https://github.com/litentry/litentry-pallets
- https://github.com/web3go-xyz/web3go

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/h4n0 Han Zhao
- https://github.com/Shihao66 Shihao Zhao
- https://github.com/Moehringen Hao Ding

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/zhaohan6
- https://www.linkedin.com/in/shihao-zhao-55752685/
- https://www.linkedin.com/in/hao-ding-msc-pmp-64411193/

## Development Status :open_book:

- https://github.com/AdMetaNetwork/admeta This is the AdMeta Substrate chain implementation. We already started to build the pallets mentioned in Milestone 1 below.
- https://github.com/AdMetaNetwork/admeta-webapp This is our web app repo according to Milestone 1. We already had a single page app with polkadot js API integrated now.
- https://github.com/AdMetaNetwork/admeta-decentraland This is a simple asset built with Decentraland SDK, and currently it's just for a demo purpose.
- https://admeta.network/ We also have the first version of our website.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 32,000 USD

### Milestone 1 — Substrate Chain with Impression Ad, Web App

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 12,000 USD

| Number | Deliverable                 | Specification                                                                                                                                                                                                                                                                                                  |
| -----: | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                     | GPLv3                                                                                                                                                                                                                                                                                                          |
|    0b. | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                  |
|    0c. | Testing Guide               | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                              |
|    0d. | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                  |
|    0e. | Article                     | We will publish an **article**/workshop that explains our advertising workflow as well as technical details.                                                                                                                                                                                                   |
|     1. | Substrate module: ad        | We will create a Substrate module that will allow advertiser to create impression ads, and with council's approval, this ad will be ready to be displayed. If ads are rejected by the council(e.g. illegal or pornographic content), the advertiser's proposal bond will be slashed and collected in treasury. |
|     2. | Substrate module: user mock | We will create a Substrate module that will first store users data on chain, to test and verify our logic. Also, user can update their data, control what data should be used, and these data are used to find the best matching ad for user.                                                                  |
|     3. | Substrate chain             | Module ad and user can be integrated into a substrate node, to enable users access of all approved ads, receive rewards, etc. This chain will integrate treasury, council, democracy and also other essential pallets, to build a full-featured blockchain.                                                    |
|     4. | Web App                     | We will create a web app, to let users easily interact with our substrate node. Users can claim rewards from viewing and clicking ads, and they can also configure their ad preferences and decide if they are willing to view ads or not.                                                                     |

### Milestone 2 — Implement User Data on TEE, Click Ads, and Decentraland AdMeta Asset

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 10,000 USD

| Number | Deliverable            | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -----: | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                | GPLv3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|    0b. | Documentation          | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    0c. | Testing Guide          | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|    0d. | Docker                 | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    0e. | Article                | We will publish an **article**/workshop that explains our advertising workflow as well as technical details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     1. | Substrate module: ad   | Additional to impression ads, we will expand our ads with click ads. Click ads are similar to impression ads, but it allows advertiser to provide an outbound URL and users will be redirected to this URL when they click the ad. This requires a generic code architecture to abstract the ad trait for both ad types, also the proposal bond, approval process of click ads will be different because of the increasing complexity.                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     2. | Substrate module: user | The mock user pallet will be replaced by a user pallet with usage of TEE and zero-knowledge proof. We are not planning to implement the whole TEE on our chain, instead, there are various TEE and DID providers on Polkadot ecosystem, and we will use their service to connect to our blockchain. We already have an initial cooperation plan with Litentry, who has their DID data stored on TEE.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     3. | Decentraland Ad Asset  | We will create a decentraland ad asset. This asset will be published and every land builder on decentraland will be able to use it, e.g. put it on the wall of the building, or stand it in front of the garden. While the display of ad content will be controlled by users who are passing by this ad, and by default, users won't see any ads, but only the default appearance set by the land owner. If users themselves switch on the ad feature and approach any ad asset, our blockchain will find the best match ad for this user and display it there. If user's behavior fulfills advertiser's requirement, e.g. clicking the link, this user is entitled to earn the reward provided by the advertiser. Meanwhile, the publisher, the land owner who places this ad asset, will also receive part of the reward due to a successful ad display. |

### Milestone 3 — Implement Acquisition Ads and Chrome Extension

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 10,000 USD

| Number | Deliverable           | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -----: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    0a. | License               | GPLv3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|    0b. | Documentation         | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                                                                                                                                                                                                                                                                                    |
|    0c. | Testing Guide         | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|    0d. | Docker                | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    0e. | Article               | We will publish an **article**/workshop that explains our advertising workflow as well as technical details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     1. | Substrate module: ad  | Furthermore, we will add an acquisition ad type. This is more complicated, and customizable ad type comparing to click and impression ad. Advertisers can define a complicated task as an acceptance condition. For instance, an NFT seller defines that only his specified NFT is bought by this user can be accepted as a successful conversion. Because this type is more beneficial to advertisers, the advertiser also have to pay some kind of fees when their ads are activated, no matter there are conversions or not. We therefore need to design a business model for this situation. |
|     2. | Decentraland Ad Asset | Because of our new ad type, the decentraland ad asset and our web app need to be updated according to the requirements.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     3. | Chrome Extension      | Besides our web app, we plan to have a Chrome extension to connect to our blockchain directly. Users who play on decentraland do not have to switch between our web app and the decentraland tab. Instead, the extension can easily handle other Metaverse platforms, and provide users a seamless experience.                                                                                                                                                                                                                                                                                   |

## Future Plans

We will cooperate and adapt our products with more Metaverse platforms, and also we will develop more creative and interactive ad types.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation
