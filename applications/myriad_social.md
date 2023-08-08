# Myriad Social - Uncensorable, Decentralized Social Network

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Myriad Systems LTD.
- **Payment Address:** 0x89f547Ed40B8e921C566505Ccb71C69F398adbFF (USDT ERC-20)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

### Overview

Myriad Social is a social network that allows users to have their own platform without being controlled by a central authority. It is decentralized and censorship-resistant.


Our app is developed using the Myriad blockchain, specifically as an **[appchain that runs on the Octopus Network](https://oct.network/appchains)**. This provides several benefits. Firstly, it's censorship-resistant since there's no central control point. Secondly, it offers sovereign control as all data is kept in user-hosted instances with the freedom to host.

The product proposition of myriad is as follows:
- Myriad, a Federated Free Speech platform, empowers users to host their own social network and be a part of the Federation. By self-hosting, users can create their own server and invite others to join, enabling anyone to establish their own social network without depending on a central service.

- Myriad Social offers a decentralized alternative to current social media platforms. With their crowdsourced method of importing social media posts, users can follow individuals on centralized networks without needing an account on those networks. This allows for greater accessibility and diversity of content.

- With Myriad's Crypto Value Layer, users can gather posts from various social networks such as Twitter or Reddit and transfer them onto the blockchain. This transforms each post into a tipping wallet, enabling regular social media users to receive cryptocurrency for their content.

- Myriad Social is a social media platform that is run by both $MYRIA token holders and users, making it self-governing. Unlike traditional platforms, it operates in a decentralized manner, which means that the governance system is more democratic and fair, without being controlled centrally.

- At Myriad Social, our goal is to support the wider community by offering a range of pallets, services, and seamless integration options for federated social technologies. We strive to enhance the overall ecosystem and provide users with a more comprehensive experience.

At Myriad, we prioritize interoperability. Our blockchain is powered by Substrate, a framework developed by Parity Technologies for Polkadot. This choice allows for greater flexibility, as our blockchain can easily connect with other popular blockchains like Octopus, Kusama, and Polkadot.

In addition, Myriad has a federated architecture designed for modularity. This means that its components are extensible and can be treated like building blocks that can be assembled in any desired way.

Our ultimate objective at Myriad Social is to become the primary decentralized social media platform of the future. After launching in early 2022, we have completed the first and second phases of our product's development, and it is now available on Octopus Network as an **[appchain](https://oct.network/appchains)**. The Octopus project offers great flexibility as appchains can be deployed into a different ecosystem or live as their own blockchain. Additionally, Octopus Network supports protocols that **["graduate" from its network.](https://www.financemagnates.com/thought-leadership/octopus-network-poised-to-unleash-web3-gaming-even-in-the-darkest-of-markets/)** As the second appchain to go live on Octopus Network's ecosystem, Myriad has decided to level up and get embedded into the Kusama ecosystem to reach a wider audience.

As a parachain that lives in Kusama/Polkadot/Web3 Ecosystem, Myriad provides:
- A new decentralized social network with self-governance capability
- A complete documentation on how to upgrade an existing Octopus appchain or similar substrate-based chains to any Polkadot Ecosystem
- Multi wallet login using various providers

### Project Details

##### Architecture

The following is the architecture that has been deployed on Octopus Network as an appchain and will be deployed fully to Kusama as a parachain.

![](https://images.squarespace-cdn.com/content/v1/60b2163ddfad756d1d521252/1623264107593-ICJRAFRBW8KPAF614D4T/Tech+Stack-01.jpg?format=1000w)

##### User Interface Design

![](https://i.imgur.com/jHZHkcx.png)

![](https://i.imgur.com/y2bhz4W.png)

![](https://i.imgur.com/KodihXd.png)

![](https://i.imgur.com/63PvxKc.png)

##### Technologies

- GCP
- Kubernetes (GKE Cluster)
- NodeJS
- MongoDB
- Redis
- Bastion VM

##### Components

Myriad’s decentralization is organized into two layers — the **Myriad blockchain** and the **Myriad federation**. While each of these two layers is a network of cooperating computers that collectively constitute the Myriad platform, each individual layer provides something to the platform that the other cannot.

Myriad’s blockchain layer (composed of Myriad Nodes) is developed with the open-source Substrate blockchain platform and secures data that must be held strictly in global consensus, such as ownership, asset transfer, and global reputation. This includes things like Myria token balances, User’s global reputation scores, and NFT ownership.

Myriad’s federation layer (composed of Myriad Servers) allows for both scalability and data sovereignty which would not be possible in a pure-blockchain architecture. The federation servers store things like communities, posts, and experiences. This type of data is distinct from the hard-consensus data stored in the blockchain in a few significant ways — It can be high-volume, curated per server, and it’s not used in hard-consensus decisions (such as ownership transfer validation.)

It’s important to note that the same physical computer can be both a Myriad Node and a Myriad Server (although it need not be both.) These two protocols work together to provide the features of the Myriad platform as a whole. As a consequence of this dual-network architecture, the following things are made possible:
- Myriad Server Operators maintain complete data sovereignty — The network does not force Server Operators to host content they disagree with. This is not possible, for example, in a pure-blockchain architecture where a node
operator only has the binary choice to either host ALL data, or not run a node at all.
- Myriad Servers can scale to millions of Users by leveraging traditional horizontal scaling techniques (which is impossible with conventional blockchains by virtue of the scaling problem) while remaining fully decentralized and censorship-resistant by virtue of any person’s ability to operate a server that maintains their own community’s data.
- The social media experience can be seamlessly augmented by the ability to send and receive tokens, convert any post into an NFT (*future roadmap), or even automate the democratic governance of communities — all with the security properties of hard-consensus blockchains (such as ledger immutability and the unforgeability of digital signatures.)

### Ecosystem Fit

Myriad solves the problem where social media has become too controlled by big corporations. By providing a decentralized social media, Myriad allows users on Polkadot/Substrate/Kusama ecosystem to interact and host their own node instances.

- The target audience of this project is the general audience who are looking for an uncensorable and free social media with web3 capabilities
- The project allows builders on Substrate ecosystem to extend and build on top of the Myriad API
- Similar project: Subsocial. Key difference: Myriad Social is combining decentralization and federation, allowing the off-chain data of the social media to be fully owned by the community.

## Team :busts_in_silhouette:

### Team members

- Lead: Jean Daniel Gauthier (CEO)
- Pandu Sastrowardoyo (Cofounder)
- Gilang Bhagaskara (CTO)
- Serafica Alamanda (Product Manager)
- Irman NM (Lead Engineer & DevOps)
- Abdul Hakim (Blockchain Developer)
- Neka Arta Jaya (Full Stack Developer)
- Ruben Kristian (Full Stack Developer)
- Alvin Dimas (Full Stack Developer)
- Alexander (Full Stack Developer)
- Hildegard Lydia (QA Engineer)

### Contact

- **Contact Name:** Jean Daniel Gauthier
- **Contact Email:** ceo@myriad.social
- **Website:** https://myriad.social/about

### Legal Structure

- **Registered Address:** House of Francis, Room 303, lle Du Port, Mahe, Seychelles
- **Registered Legal Entity:** Myriad Systems LTD.

### Team's experience

The core team members of Myriad Systems consists of professional blockchain consultants with 6 years of experience building and designing blockchain solutions at Blocksphere Indonesia and BlockchainZoo. Some of the team members (Gilang, Serafica, Irman, Abdul Hakim, and Lydia) hold the Certified Blockchain Professional certification from EC-Council. Irman, Lydia, Neka, Alvin, and Ruben have over 8 years of programming experience, and Abdul Hakim have 3 years of RUST experience. Gilang is an entrepreneur, blockchain developer, researcher, teacher, mentor, with over 12 years of experience, and has a reputable influence in blockchain development communities in Indonesia.

Some interesting projects the team has been involved includes:
- **[Debio Network](https://www.debio.network/):** anonymous-first blockchain for medical and bioinformatics services and data
- **[Realitychain](https://www.realitychain.io/):** a multichain metaverse-as-a-service
- **[Nester City](https://www.nester.city/):** an arcitect-led NFT/metaverse project solving intellectual property and royalty issues of architecture designs

### Team Code Repos

- https://github.com/myriadsocial/myriad-node
- https://github.com/myriadsocial/myriad-web
- https://github.com/myriadsocial/myriad-api
- https://github.com/myriadsocial/myriad-federated
- https://github.com/myriadsocial/myriad-node-parachain

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/gilangbh
- https://github.com/irmannmal
- https://github.com/nekaartajaya
- https://github.com/alvin371
- https://github.com/rubenkristian
- https://github.com/abdulhakim2902
- https://github.com/RiXelanya
- https://github.com/hilyds

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/jean-daniel-gauthier
- https://www.linkedin.com/in/gilangbhagaskara/
- https://www.linkedin.com/in/irmannmal
- https://www.linkedin.com/in/neka-artajaya-90284524a
- https://www.linkedin.com/in/alvindimas
- https://www.linkedin.com/in/kristian-ruben-sianturi-b0716a216
- https://www.linkedin.com/in/abdulhakim2902
- https://www.linkedin.com/in/alexander-8414701b0
- https://www.linkedin.com/in/hildegard-lydia-84346214a

## Development Status :open_book:

- [Whitepaper](https://gateway.pinata.cloud/ipfs/QmX6QrGkqyFWaL9BgbYZcDT2MXoQJrhtLs8sCExJEhZVir)
- [UI/UX Prototype](https://miro.com/app/board/o9J_lOVU73o=/)
- [UI/UX Figma](https://www.figma.com/proto/8VD1J3sdmciKUL5kT3H9gd/Myriad-UI-(Revamp))
- [Federation](https://miro.com/app/board/uXjVODoOYow=/)
- [Infrastructure](https://miro.com/app/board/o9J_lm01Sy0=/)
- [Tipping Mechanism](https://miro.com/app/board/o9J_l3oi7sI=/)
- [API Architecture](https://miro.com/app/board/o9J_l4Pcors=/?share_link_id=269146707388)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** 30,000 USD

### Milestone 1 — Parachain setup

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | AGPL-3.0 license |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up the parachain and copy an Octopus appchain into the Rococo ecosystem.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Infrastructure Setup | We will fully replicate the current appchain of the Myriad Social web application running on Octopus Network to Polkadot ecosystem as a parachain in Rococo |
| 2. | Code Refactoring | The modules we implement during this milestone will interact in such a way that the Myriad Social website works with the same functionality as the current one that lives as an appchain on Octopus Network|
| 3. | Data Upgrade | We will fully upgrade the existing data from the Myriad Social web application running on Octopus Network to Polkadot ecosystem|

Myriad Social will create a parachain on Polkadot while maintaining a foothold in the NEAR ecosystem.

By maintaining the wallet selector for seamless switching between NEAR and Polkadot, we can expose our current community of NEAR users to Polkadot applications and their communities.


### Milestone 2 — Native Polkadot Currency and Wallet Integration

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | AGPL-3.0 license |
| **0b.** | Documentation | We will provide **documentation** of the app changes and **video guidance** of how to utilize native DOT currency inside the Myriad Social application environment. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Native Currency Integration | We will enable tokens native to the Polkadot ecosystem as a way of interacting inside our app for tipping and other upcoming features. |
| 2. | Wallet Integration | We will update the current wallet requirement to allow polkadot based wallet login into Myriad app.|

Myriad Social will utilize native tokens within Polkadot ecosystem within its app environment and incorporate their tokenomics, adding to the utility of the native tokens.

**Please note that Myriad Social has already enabled DOT as a tipping option within the Myriad application.*

Our additional work product with the granting of this grant would allow us to develop and offer more features for the token ecosystem community, such as:
 
- The ability for Myriad Users to unlock a Premium Post within Myriad using tokens native to the Polkadot ecosystem.
- The ability to utilize other standard tokens within the Polkadot ecosystem within the Myriad app.

### Milestone 3 — UI Revamp and Enhancement

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | AGPL-3.0 license |
| **0b.** | Documentation | We will provide **documentation** of the app changes and **video guidance** of how to use the new Myriad Social user interface |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Front end: New UI | We will update the UI that has the functionality: Polkadot setup, connection, and use user guide (Step by step tooltips), simplified transaction flow for tipping, and creating/revealing exclusive content), token on-ramp, simplified timeline discovery (Timeline search function, revamped layout, revamped flow), and first step guide for new users (Step by step tooltips) |
| 2. | B2B Features | We will implement multiuser timelines, multiuser accounts, and multiuser content metrics|
| 3. | Performance improvemment | We will do code refactoring and optimization in order to enhance app performance, ensuring a faster and smoother user experience.|
| 4. | Authentication improvement | We will implement Personal Access Token and Single Sign On using Myriad API |
| 5. | Additional Utility-driven Features| We will implement token-gated timelines, as well as token-gated access to content metrics |
| 6. | Backend: Mobile Wallet| We will implement Myriad connection to polkadot wallet on mobile (currently can only connect to Near wallet)|
| 7. | Backend: Improved algorithm| We will improve algorithm such as: Native import of embedding of additional platforms (Youtube, Twitch, web content), and refactoring of popularity ranking for timelines, posts and hashtags|
| 8. | Backend: Improved federated instance (Self-hosted Myriad Server) deployment| We will create additional, simplified documentation for instance deployment, as well as automated/semi-automated Linode instance deployment |
| 9. | Additional Clients| We will implement Polkadot integration within the Myriad Telegram bot as well as the Myriad Chrome Extension|



## Future Plans

- Myriad social intends to promote the upgrade process to our community in Telegram, Discord, and other social platforms, as well as working with Octopus to publish the activity in their official channels
- The team will continue working on the Phase 3 (NFT, Social Token, Chat, etc) in the newly deployed ecosystem

## Referral Program (optional) :moneybag: 

- **Referrer:** Husni Rizal (Polkadot Ambassador)
- **Payment Address:** 14tcZ9ibPGdMwb7XXE4QChgVuJU1xXTvDFpV3E1HpMajbBsH

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
We received an email invitation from a Parity representative to submit a grant proposal.

Myriad Social has performed fund raising activities, including a token sale on Skyward Finance in the NEAR Ecosystem, and has received financial backing from a couple private investors.