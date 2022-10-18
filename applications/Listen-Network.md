# W3F Grant Proposal
***

* **Project Name:** Listen Network
* **Team Name:** LISTEN-TEAM
* **Payment Address:** 0x08A7876db92b07057E12fAF29AA3CCF33b5aAe3D (USDT ERC20)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Overview
We will build the largest cross-chain peer-to-peer social platform in polkadot ecology, where you can freely use any infrastructure in polkadot Ecology in the future.
The functionality of other parallel chain projects can also be used, which we will complement in the future with cross-chain implementation.
At present, we build our products in the chat function mode like WeChat, but we add voice social function, which is a bit like clubhouse at the same time.
Our goal is to let everyone who is familiar with polkadot ecology stop here, and let everyone who is not familiar with polkadot ecology enter the whole polkadot ecology from here.

## Project Details
### Background

We think SocialFi will be the next blockchain, just like Twitter and facebook were in Web 2.0. 
People rely as much on social interaction in the virtual world as they do on air and sunlight in the real world. 
In just a few years, we have exploded such blockchain hotspots as DeFi, NFT, and GameFi. 
This wave is unstoppable and has overturned the blockchain and the world outside the blockchain. 
However, the impact of this phenomenon product is always limited, because people will find that the products and applications seem to be missing something and not tightly connected, 
if added to it will make a complete difference. That's right, social connections. Whether it is a community or a product, blockchain cannot leave the power of users. 
Only when users are closely connected and spend more time in the communication and exploration of blockchain products can this industry have unlimited possibilities. 
Blockchain should not only have DeFi, but also the underlying products to maintain user relations. The customer relationship is the oil without which no product can go anywhere. 
polkadot Ecosystem, there are many project parties, are doing their own things, but like us, there are few focus on user relationship, not only DeFi and various smart contract platform, 
so we decided to create Listen Network.

### project Features
> The following according to the development plan, in accordance with the time sequence to talk about the specific functions of the product
1. **The development phase of the base module on the chain**
At this stage, we first need to realize the development of several important functional modules on the chain. For example, Room module is responsible for the management of voice groups. Multi-asset module allows users to use more tokens of parallel chain projects or self-minted DAO tokens on Listen Network, as well as multi-asset cross-chain transfer. 
Of course, we will use some modules of acala for multi-asset management.
They have done an excellent job and we thank them for their contribution to the community, although we will make some changes; We will use NFTS for Listen Network. This is due to users' special requirements for avatars and platform rights. We will support them as soon as possible
Support the NFT free selling function, in this stage, we will create the NFT-SELL module; We attach great importance to the on-chain identity of users. We will introduce modules such as LNS to enable users to transfer money according to the LNS name, and ID module based on the LNS domain name and NFT module to enable users to have unique on-chain identity.
Finally, complete module testing and some work needed to be done in the early stage of development, such as providing docker and so on.
2. **Mobile App development**
At this stage, I mainly focus on APP design and development. The APP should implement the following functions: chat and mutual friend, basic management of voice room, social recovery, allowing users to freely distribute their token candy in the group, NFT buying and selling functions, etc.
In short, the on-chain functions to be achieved in step 1 above should be provided in the APP. At this stage, Room management will be upgraded on the chain, so that users can truly realize the transactions in the decentralized and autonomous room, and every user will have a fair chance to participate in room management. We will launch Room DAO

3. **Product social scope expanded and data privacy protection**
At this stage, our product is already in production and has users. We're going to look at more features like stranger networking, like a free speech module,
And explore more monetization models in social products to make them sustainable. Of course, the most important is the protection of user privacy data, 
which is currently planned to be implemented using TEE and ipfs.
The encrypted storage function allows users to independently decide the use of user data, making peer-to-peer chat more secure and reliable.

## Ecosystem Fit
The product is meaningful, and after two years of prototyping and design, our team has a deeper understanding of social products. We believe that once it is successful, it will become a polkadot ecological social network with the highest user stickiness like WeChat and Twitter
Products. We believe that there are other eco-products out there, such as SubsocialX, but they are very limited in their functionality. What we're trying to do is connect all the products of polkadot Ecology, like acala, like phala, and more projects,
Get them to interact. They don't need to think about how to maintain their current user base and how to have more users, or care about what their users can do together, we can help them very well. Listen Network is free and users can decide almost anything.
## Team
### Team members
* JimYam
* Irish-bee
* pkwei
* xiang zi
* askmama
> Other members, it is not convenient to disclose information, the team is about 20 people in total
### Team's experience
* **JimYam** has been engaged in blockchain chain development for 5 years and is passionate about blockchain industry innovation. Currently, he is the main developer of LISTEN parallel chain team. Having worked in Tencent for 3 years, he has unique insights into social products. He has been following polkadot ecological development since Substrate1.0.
* **Irish-bee** Big data engineer, worked in a number of unfamiliar chat software companies, responsible for processing big data, very experienced. He also wrote the early code for Listen Network.
* **pkwei** The well-known UI designer will be responsible for the design of Listen Network's APP and NFTS.
* **xiang zi** He have done a lot of blockchain community work, and I am good at maintaining user relations and have rich experience in the accumulation of the number of users
* **askmama** Alibaba senior engineer, currently out to start a business

### Contact
* **Contact Name:** JimYam
* **Contact Email:** transxask1@gmail.com
### Legal Structure
* **Registered Address:** N/A
* **Registered Legal Entity:** N/A
### Team Code Repos

- [https://github.com/listenofficial/listen-parachain](https://github.com/listenofficial/listen-parachain)

### Development Status

- [https://github.com/listenofficial/listen-parachain](https://github.com/listenofficial/listen-parachain)

***

## Development Roadmap
### Overview
* **Total Estimated Duration:** 5 months
* **Full-Time Equivalent (FTE):** 10FTE
* **Total Costs:** 24k USD
### Milestone 1 — Implement Room, Sell-NFT, LNS, ID modules.
* **Estimated duration:** 2 month
* **FTE:** 4
* **Costs:** 8000 USD

| Number | Deliverable     | Specification                                    |
|-------:|-----------------|--------------------------------------------------|
|    0a. | License         | APACHE2.0, GPL3                                  |
|    0b. | Documentation   | Write Document for each module                   |
|    0c. | Testing         | Write test code for each module                  |                                                                                                                                       |
|    0d. | Comment         | Provide detailed comments for each module        |
|    0e. | docker          | Lets users launch the Listen Network node with one click                        |
|    0f. | Benchmarking    | Write Benchmarking code for each module          |
|     1. | room pallet     | Responsible for the basic management of the room, such as creating the room, dissolving the room, inviting others in, kicking people out of the group, etc         |
|     2. | sell nft pallet | It is responsible for providing the user NFT buying and selling function, where users can buy their favorite NFTS and sell the avatars they don't use for a while     |
|     3. | LNS pallet      | The Listen Network domain name function allows users to transfer money based on domain names           |
|     4. | id pallet       | The unique id of the user, the credentials of the real user                                  |
|     5. | other pallets   | acala's currencies and other related multi-asset modules as well as cross-chain transfer modules enable multi-asset management and cross-chain transfer |
### Milestone 2 - UI design, APP development， Room DAO
* **Estimated duration:** 2 month
* **FTE:** 4
* **Costs:** 8000 USD

| Number | Deliverable       | Specification                                                |
|-------:|-------------------|--------------------------------------------------------------|
|    0a. | Documentation     | Provide documentation for using App                          |
|    0b. | Testing           | Complete all module tests                                    | 
|     1. | APP design        | Complete the page design of the basic functions of the APP and the design of the official NFT                                   |
|     2. | APP development   | Chat and exchange of friends, basic management of voice rooms, social recovery, enabling users to freely distribute their token candy in groups, NFT buying and selling functions, etc |
|     4. | Room DAO          | Combined with daos on the chain, every room can realize real decentralization                                 |
|     5. | UI design and development of Room Dao | Design the UI of DAO and develop DAO-related APP functions                                      | 

### Milestone 3 - TEE, ipfs, Socializing with strangers
* **Estimated duration:** 1 month
* **FTE:** 2
* **Costs:** 8000 USD
* 
| Number | Deliverable               | Specification                                 |
|-------:|---------------------------|-----------------------------------------------|
|    0a. | Documentation             | Provide documentation for using App           |
|    0b. | Testing                   | Complete all module tests                     | 
|     1. | Socializing with strangers | Add the stranger discovery function in the APP and recommend strangers to users                      | 
|     2. | speech module             | It's a bit like Twitter, where you can speak freely, but because of the peculiarities of online speech, there may be AI involved in filtering and partially centralized processing | 
|     3. | TEE                       |           Encrypts the data to be encrypted                     |
|     4. | ipfs                      | ipfs storage of encrypted user data                    |

## Future Plans

We need more talent to do things, and we will do more global talent recruitment in the future. Especially in the area of legal support,
We need a more professional legal team to solve the legal issues that may be involved in the use of products. But for now, what we're going to do
It is to push the product technology as fast as possible, let the product take shape, and accumulate some loyal users. The user's data belongs to the user, is our eternal concept, is the bottom line of the product.
At present, there are many teams working on blockchain Social, and we are constantly seeking innovation to adapt to the needs of the market. We may also carry out some timely development
Adjust if needed. In a word, we are a young, energetic and innovative team, and we can do great things.

## Additional Information :heavy_plus_sign:
* **How did you hear about the Grants Program?**

    Announcement by another team
