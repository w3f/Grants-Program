# Myriad Social - Uncensorable, Decentralized Social Network

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.
- **Team Name:** Myriad Systems LTD.
- **Payment Address:** 0x89f547Ed40B8e921C566505Ccb71C69F398adbFF (USDT ERC-20)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
## Project Overview :page_facing_up:

### Overview

Myriad Social is a decentralized, censorship-resistant social network that enables users to host their own social network without centralized control.

Our application is built on top of the Myriad blockchain (currently as **[an appchain running on Octopus Network](https://oct.network/appchains)**), which gives it a number of advantages. Firstly, it is censorship-resistant, as there is no central point of control. Secondly, it allows sovereign control, as all data is stored within user-hosted instances with freedom to host.

The product proposition of myriad is as follows:
- Federated Free Speech: Myriad allows users to host their own social network and be part of the Federation. With self-hosting, users can set up their own server and invite others to join. This makes it possible for anyone to create their own social network, without having to rely on a central service.

- Decentralize Other Social Networks: Current social media posts are centralized. Myriad Social decentralizes them. Myriad Social's crowdsourced mechanism of importing social media posts means that Myriad Social users can follow people on centralized social networks without having an account there.

- Crypto Value Layer: Myriad  gives users the ability to aggregate posts from other social networks like Twitter or Reddit and import them into the blockchain. This effectively turns each post into a tipping wallet, allowing mainstream social media users to receive cryptocurrency for their content.

- Own the platform: Myriad Social is a self-governing social media platform that is powered by $MYRIA token holders and users. This decentralized structure allows for a more democratic and fair governance system that is not centrally controlled.

Myriad is built to be interoperable. Our blockchain uses Substrate, a blockchain framework behind Polkadot made by Parity Technologies. Using Substrate allows Myriad to be more flexible, because it’s compatible with a multitude of other blockchains such as Octopus, Kusama, and Polkadot.

On top of that, Myriad uses a federated architecture that was built with modularity in mind, meaning that all of the components of Myriad are extensible and treated like a bunch of building blocks that can be assembled any way you’d like.

Myriad Social has a long term goal of being used as the main decentralized social media platform of the future. Since its launch in early 2022, our team has completed the development of the product's first and second phases and is now live in Octopus Network as an **[appchain](https://oct.network/appchains)**. With the flexibility that the Octopus project offers, appchains can be migrated into a different ecosystem or live as its own blockchain, and Octopus Network supports protocols deciding to **["graduate" from its network.](https://www.financemagnates.com/thought-leadership/octopus-network-poised-to-unleash-web3-gaming-even-in-the-darkest-of-markets/)** As such, Myriad, as Octopus Network's second appchain to go live on their ecosystem, decides to transform and migrate into the Kusama ecosystem to reach a broader audience.

As a parachain that lives in Kusama/Polkadot/Web3 Ecosystem, Myriad provides:
- A new decentralized social network with self-governance capability
- A complete documentation on how to migrate/upgrade an existing Octopus appchain or similar substrate-based chains to any Polkadot Ecosystem
- Multi wallet login using various providers

### Project Details

##### Architecture

The following is the architecture that has been deployed on Octopus Network as an appchain and will be migrated fully to Kusama as a parachain.

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
- **[Debio Network](https://www.debio.network/):** Anonymous-first blockchain for medical and bioinformatics services and data
- **[Realitychain](https://www.realitychain.io/):** a multichain metaverse-as-a-service
- **[Nester City](https://www.nester.city/):** a multichain metaverse-as-a-service

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

- **Estimated duration:** 2 month
- **FTE:**  3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | AGPL-3.0 license |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up the parachain and migrate an Octopus appchain into the Rococo ecosystem.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Infrastructure Migration | We will fully migrate the current appchain of the Myriad Social web application running on Octopus Network to Polkadot ecosystem as a parachain in Rococo |
| 2. | Code Migration and Refactoring | The modules we implement during this milestone will interact in such a way that the Myriad Social website works with the same functionality as the current one that lives as an appchain on Octopus Network|
| 3. | Data Migration | We will fully migrate the existing data from the Myriad Social web application running on Octopus Network to Polkadot ecosystem|

### Milestone 2 — Native Polkadot Currency and Wallet Integration

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | AGPL-3.0 license |
| **0b.** | Documentation | We will provide **documentation** of the app changes and **video guidance** of how to use the new Myriad Social user interface |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Native Currency Integration | We will enable DOT as a way of interacting inside our app for tipping and other upcoming features. |
| 2. | Wallet Integration | We will update the current wallet requirement to allow polkadot based wallet login into Myriad app.|

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
| 1. | Front end: New UI | We will enhance the current interface by making it more intuitive for our users, emphasizing the core features of Myriad and aligning with the new Polkadot based ecosystem. |
| 2. | Back End: Improve Algorithm | We will update our algorithm to provide a better way to get trending timelines and hashtags so that user can discover current popular timelines/posts/tags, rather than those that have been in the spotlight for some time.|
| 3. | Performance improvemment | We will do code refactoring and optimization in order to enhance app performance, ensuring a faster and smoother user experience.|

## Future Plans

- Myriad social intends to promote the migration process to our community in Telegram, Discord, and other social platforms, as well as working with Octopus to publish the activity in their official channels
- The team will continue working on the Phase 3 (NFT, Social Token, Chat, etc) in the migrated ecosystem on Kusama

## Referral Program (optional) :moneybag: 

- **Referrer:** Husni Rizal (Polkadot Ambassador)
- **Payment Address:** 14tcZ9ibPGdMwb7XXE4QChgVuJU1xXTvDFpV3E1HpMajbBsH

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We got the email from a Parity representative to submit a grant proposal.

Previously Myriad Social have done a fund raising and token sale on the Octopus/Near protocol ecosystem, as well as having the financial contribution from a couple private investors. The token $MYRIA is live on Near ecosystem using their token standard and will be migrated into a substrate token.