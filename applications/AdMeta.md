# AdMeta

- **Team Name:** AdMeta
- **Payment Address:** 0x1D346c4F0732674a1fc69b4bAFBa854F53353C35 (ERC20 USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Advertising in Metaverse

AdMeta is a Metaverse advertisement platform that focuses on privacy-preserving. AdMeta uses a TEE-based DID service to identify target groups for advertisers, and with the usage of TEE, AdMeta guarantees not to collect any user data. AdMeta builds multiple forms of ad assets (e.g. billboards, wall paintings) in Metaverse platforms like Decentraland, Bit.Country, to allow land holders to integrate our products easily. Qualified conversions let both users and publishers get rewards from advertisers.

In Polkadot and Kusama ecosystem, DID projects like Litentry are growing fast along with its related products. We have already discussed and agreed on our initial cooperation with Litentry. Also, we have contacted with Metaverse projects like Bit.Country, who shows great interests in cooperation as well.

Unlike traditional ad platforms, who collect users sensitive data(e.g. location, browsing history) for advertising, AdMeta does not collect or store any user data per se. Instead, users voluntarily decide and control what data can be stored in TEE, and the stored data in TEE cannot be accessed by anyone except users themselves.

### Project Details

![AdMeta Demo - the floating billboard](https://user-images.githubusercontent.com/4738254/144754078-1877d8a5-8ef9-49ec-8ef5-f79496a689f0.png)

In the above image, the floating billboard is our prototype ad component built with decentraland SDK. Users who registered on our blockchain, and switched "Ad Display" option on (by default it's off) are able to see a customized ad content on this billboard while gaming in decentraland.

The content of this ad component is selected according to user's personal data and preference. Unlike centralized ad platforms, we don't store user's data on or database. Instead, it's stored on the TEE layer of blockchain, and the target group matching and selecting happen also in the TEE layer, which ensures that no private data are exposed during the whole process. Eventually, both user and publisher receive some amount of token as rewards from advertiser.

Our blockchain is built with Substrate, and the pallet-ad provides the functionality of advertisement proposal, storage and governance. The user pallet will connect to TEE-based external identity aggregation and DID service provided by Litentry (we have already the initial cooperation plan) to match ads with users data and preference.

#### Architecture

![AdMeta Architecture](https://raw.githubusercontent.com/h4n0/gists/master/admeta/admeta_architecture.svg)

**Advertisers** can propose an ad with certain acceptance rule, e.g. link clicking, and also advertiser provides how many times the ads are displayed and converted, and how much they pay for each conversion. They need to pay the total price (the number of conversions \* price per conversion) while proposing the ad. Each ad display has a unique ID, which is generated while creating the proposal. A Merkle tree are built with all these unique IDs, and the root of Merkle tree will be stored in on-chain storage. A qualified conversion gives the participated user this UID, with which the user can claim for rewards.

**Councils** shall approve or reject ad proposals according to the content of ads. Also, advertisers are evaluated on their behavior democratically.

**Users** can switch on the "Ad Display" option on AdMeta, so that users can get rewards by viewing and interacting with ads. By default, this option is off, which means users who haven't set up their AdMeta won't see any ads. Users can also provide their data for a better ad matching, by means of this they will get more rewards.

**Publishers** can simply utilize our Ad Assets on any Metaverse platform and place it on their lands. Users also get rewards by a qualified display conversion.

#### Technology Stack

- Substrate
- Node.js
- 3D Model Design

### Ecosystem Fit

There are an increasing number of Metaverse related projects in Polkadot/Kusama ecosystem, however, the current Metaverse platforms still lack of infrastructures and applications, comparing to our current real life. We therefore build this for various Metaverse platforms.

Our target audiences can be Web3 projects, who are potential advertisers, Metaverse land holders, who are potential publishers, and Metaverse players, who are potential users.

Advertising is our natural needs in almost all social scenarios, and we meet this needs in Metaverse.

[Parami](https://parami.io/) builds Web3 ad platforms as well, and their scope is to build the DID and privacy layer by themselves. While we are focusing on the advertising functionality, and the DID service will be provided by Litentry, who is more professional on this field and has already their products. Also, our ad platform is targeting on Metaverse, not Web3.

## Team :busts_in_silhouette:

### Team members (In order of joining time)

Han Zhao - Core Dev and PM of Litentry Parachain Team. University of Stuttgart

Yvonne Xie - Digital Marketing Lead. King's College London

Shihao Zhao - Full Stack Dev of Litentry. University of Toronto

Hao Ding - VP of Litentry, Founder of Web3Go. University of Stuttgart

Dr. John Wu - Core Dev of Litentry Parachain Team. The University of Tokyo

### Contact

- **Contact Name:** Han Zhao
- **Contact Email:** windzhaohan@gmail.com
- **Website:** <https://admeta.network/>

### Legal Structure

- **Registered Address:** No legal structure yet.
- **Registered Legal Entity:** No legal structure yet.

### Team's experience

Han and John are core developers as well as project managers at Litentry, and both of them are main developers who implemented the Litentry parachain from scratch. Litentry is an identity aggregation focused company in Polkadot ecosystem, and has got the Web3 Foundation grant since 2019.

Yvonne has more than 8 years experience of digital marketing, and she has a deep understanding and practice of various online marketing and advertising methods. She also initialized this idea of combining advertisement and privacy preserving, to archive the goal of data protection.

Shihao is a full stack developer at Litentry, who contributes a lot in Litentry and Web3Go web apps and backend apps.

Hao is the founder of Web3Go, VP of Litentry, who has a very solid practical experience on both blockchain and data science.

Note: Both [Litentry](https://www.litentry.com/) and [Web3Go](https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md) are Web3 granted projects.

### Team Code Repos

- <https://github.com/litentry/litentry-parachain>
- <https://github.com/litentry/litentry-pallets>
- <https://github.com/web3go-xyz/web3go>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- <https://github.com/h4n0> Han Zhao
- <https://github.com/Shihao66> Shihao Zhao
- <https://github.com/Moehringen> Hao Ding

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/zhaohan6>
- <https://www.linkedin.com/in/shihao-zhao-55752685/>
- <https://www.linkedin.com/in/hao-ding-msc-pmp-64411193/>

## Development Status :open_book:

- <https://github.com/AdMetaNetwork/admeta> This is the AdMeta Substrate chain implementation. We already started to build the pallets mentioned in Milestone 1 below.
- <https://github.com/AdMetaNetwork/admeta-webapp> This is our web app repo according to Milestone 1. We already had a single page app with polkadot js API integrated now.
- <https://github.com/AdMetaNetwork/admeta-decentraland> This is a simple asset built with Decentraland SDK, and currently it's just for a demo purpose.
- <https://admeta.network/> We also have the first version of our website.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 12,000 USD

### Milestone 1 — Substrate Chain with Impression Ad, Web App

- **Estimated duration:** 6 month
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

## Future Plans

The next step is to have sensitive data stored in TEE. Also, we will build more ad types, like click ads and acquisition/action ads. Meanwhile, we will implement a Chrome extension to simplify the claim process, and an Ad asset on Decentraland(or other Metaverse platform) to enable land holders to use our ad assets conveniently.

In a long run, we will cooperate and adapt our products with more Metaverse platforms, and also we will develop more creative and interactive ad types.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation
