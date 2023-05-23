# Eden

- **Team Name:** Eden
- **Payment Address:** 0xB906Bfc370C7b529DC3855851E852d8F2D6dE5ff (USDT/DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview
Connection as a Service (CaaS): the Next Era of Social with AIGC OpinionNFT

Eden is a social platform that invented OpinionNFT, tradable elements of social graph that allows users to freely customize their online identity and social experience – just like lego blocks. Our AI algorithm SageMint predictively generates OpinionNFTs based on users’ Twitter profiles. By turning web2 footprints into web3 social assets, Eden unlocks unprecedented connectivity, convenience and value for all users.  

Eden has concluded the 1st round of closed Beta between March 6th and April 2nd with over 200 users from EthDenver 2023 – with 7-day retention rate (March 7-14) of over 17% and average screentime of over 16 min/day.  

Eden is founded by Columbia dropouts and MIT PhD. The team includes serial entrepreneurs with 2 successful acquisitions (Google & undisclosed family office), work experience at Google, McKinsey and Ogilvy, and designer of NFT series with $200+ million TTV. Eden is currently raising the seed round that is estimated to close by May 2023. Eden is ranked 30 out of 8000 in a16z’s incubator program and ranked #1 worldwide in Gitcoin’s Global Web3 Social Competition.


### Project Details

You can access our webapp mockup [here](https://www.figma.com/proto/5MdgAX7tCuyUgsn1I8rH5P/EDEN-UIUX?page-id=6063%3A33672&type=design&node-id=6063-34445&viewport=829%2C-99%2C0.07&scaling=min-zoom&starting-point-node-id=6063%3A33977) and our browser plugin mock up [here](https://www.figma.com/proto/5MdgAX7tCuyUgsn1I8rH5P/EDEN-UIUX?page-id=406%3A608&type=design&node-id=5842-33225&viewport=-7926%2C-22644%2C0.37&scaling=min-zoom&starting-point-node-id=5842%3A33225&show-proto-sidebar=1)

**Key API/Models:**
- GPT-4 API
- Twitter API v2
- Stable Diffusion

**SageMint:**
- SageMint is our patent-pending technology that integrates GPT-4 API into our Reinforcement Learning from Human Feedback (RLHF) model. See below:
![image](https://private-user-images.githubusercontent.com/91774998/239710666-d8ca4215-3a89-421e-8794-23199a838b89.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg0NjE5ODgyLCJuYmYiOjE2ODQ2MTk1ODIsInBhdGgiOiIvOTE3NzQ5OTgvMjM5NzEwNjY2LWQ4Y2E0MjE1LTNhODktNDIxZS04Nzk0LTIzMTk5YTgzOGI4OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDUyMFQyMTUzMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yODc4OTcwMTIzNDNlNWUyMjMyY2M3MzEwZjk5ZTNhZTgzZDVhYmNjMDQ5ZmEzNWQyMmNhYzMxYzgyZWNhZWU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.U0rUq4yY4WngkR82Le7GSXDKRzfjC8UEYl_mXyapx6Q)

**Tech Stack Overview:**
- Front-end: Next.js
- Back-end: Node.js, Prisma, PostgreSQL
- Hosted On: Vercel
- Key NFT Standards: ERC-4907 & ERC-721

**User Journey:**

All social media platforms limit us to one fixed social graph (think Instagram, Facebook, Twitter). As a result, you have layers and layers of social relations (colleagues, friends, close friends, families, bosses, etc.) that limit your expression to content of the largest common denominator. To put simply, we feel more and more restricted in our online presence and social media is getting more and more fake. 

Now with Eden, you can have unlimited possibilities of mixing and matching different element of social graphs to create varied social experiences. We capitalise on the inherent social nature of NFT and invented something called OpinionNFT. It is a tradable element of your social graph that represent part of your identity (your beliefs, opinions, interests, views, etc.) and unlock social connections with same NFT holders, allowing you to specifically any showcase any aspect of your identity and connect with any kind of link-minded people you want. 

This is revolutionary because OpinionNFT being a tradable element of your social graph is potentially the bedrock of the next era of social media. It personifies any elements of your identity and allows you to connect with the world in unlimited ways possible. This will eventually bring unprecedented level of liquidity to your social graph improve the productivity of your online social life.

**Key Functionality**
1. User Management: manage each user profile through both web2 social media data and on-chain data.
2. Twitter API Call: requesting user data including following, follower, liked tweet, commented tweet, tweet, and activity. (all public data)
3. GPT-4 API Call: analyze user data and generate corresponding OpinionNFTs for each profile.
4. AI Art Generation: generate graphics for each OpinionNFT based on analyzed output from GPT-4.
5. OpinionNFT Creation: passively generate OpinionNFTs for each user without users having to perform any actions.
6. One-click NFT Collection: collect OpinionNFT through the browser plugin.

_Funtionality below are not part of the deliverable in the grant duration._
- Web 2.9 Social Experience: see other users' OpinionNFT and interact through the plugin without having to leave Twitter.
- Posting: allow users to post, like, and comment based on OpinionNFT.
- Social Graph Customization: automatically build users' connections based on mutual OpinionNFT holdings.
- NFT Transaction: buy, sell, and mint OpinionNFTs in our webapp.


**Pitch Deck Provided Upon Request**


### Ecosystem Fit

**Ecosystem**\
Our team's long term vision is dedicated to bringing mass adoption of web3 through leading the next paradigm of social. We resonate a lot with YC's mission of "building a product people actually want." So frankly speaking, we did not start our journey based on a pre-decided option for a desired blockchain. But we soon realized that Polkadot is the perfect solution for us due to its L0 nature and its goal in building "true interoperability." 

We're not putting too much emphasis on our particular token design, what we really valued is building fun and useful NFTs that have cross-chain compatibility. NFTs that can be collected in one chain but also sufficiently manifested in another. Building and deploying Eden on Polkadot is essentially our way of building an easilly accessible gateway into web3 for our users. From here, they can signup for Eden with their Twitter account, have our SageMint algorithm generate NFTs for them, and collect them at zero cost with AA wallets. 

**Target Audience**\
In our early stages, we are planning to target the **college crypto degens on Twitter**. This is a very specific group that accounts for about 7 million potential users. We are targeting this group of users because they are vocal, expressive, and have a strong willingness to try novel products. We also have a very specific user acquisition strategy shared in our pitch deck. 

**Needs**\
Broadly speaking, social products are not meeting a niche pain point / demand particular users have (i.e. dogwalking, food delivery, cab services), they're rather creating values by presenting a better solution on the supply side to overcome the existing products. 

This is precisely what Eden is doing, using AI powered algorithm to generate creative yet accurate and personalized OpinionNFTs for users. With these NFTs, users are no longer strained to a single social graph organized by specific, point-to-point followings/followers. Users no longer have to share the most acceptable rather than real views because for each of their posts, they know exactly which group of users are seeing it. It unlocks infinite possibilities as it allows users to freely customize their social graphs, to mix and match OpinionNFTs just like lego blocks. 

**Similar Projects**\
There are no existing teams building a similar product on Substrate/Polkadot/Kusuma. But there are web3 social products like Lens on Polygon, Farcaster on Eth, Nostr not on a particular chain but supports the Bitcoin network. There are also social protocols like rss3 and utility tools like Mask Network. 

We have designed our UX (powered by AA, rentable NFT, and browser plugin) in a way that minimizes uses' entry barrier and cost of learning about our product. We believe the biggest problem with the current world of web3 social is that they are all built in a "fundamentalist" manner: purely imposing the concept of ownership without giving users the past benefits of connectivity and convenience they received from web2 social media. This in turn creating more information silos, preventing mass adoption. 

## Team :busts_in_silhouette:

### Team members

- Nolan Li, Team Leader
- Mike Hu, Product Lead
- Chengfeng Mao, Tech Lead
- Jodi Tang, Design Lead
- Khalil Mouline, Marketing Lead

### Contact

- **Contact Name:** Mike Hu
- **Contact Email:** mike@0xeden.com
- **Website:** https://edenpredict.vercel.app/

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

Nolan: Columbia undergrad dropout (IR + Philosophy), previously founded UFriend Media, one of the largest digital marketing agency in SEA (acquired by Shareholder of SGX). 

Mike: Columbia undergrad dropout (CS + History), previously mobile UGC platform Ark during freshmen year, 2000+ DAU. 

Mao: PhD at MIT, previously founding member at Cask Data (acquired by Google), SDE at Google and Yahoo!. Holds BS.CS from UIUC and MS.CS from Carnegie Mellon University. 

Jodi: undergrad at RISD, previously designer Vayner Media and Ogilvy, designer behind VeeFriends NFT series ($200mm+ TTV). 

Khalil: founder of #1 marketing agency on Binance, raised over $21mm for previous client, currently working full-time at Eden.


### Team Code Repos

- https://github.com/Edenverse

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/Ali-Aizaz
- https://github.com/ecfm
- https://github.com/pathmaker525
- https://github.com/mikehasa
- https://github.com/AnthonyJHizon

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/limuhan/
- https://www.linkedin.com/huyuxuan/
- https://www.linkedin.com/cmao/
- https://www.linkedin.com/joditang/
- https://www.linkedin.com/khalil-mouline-318619166/


## Development Status :open_book:

We successfully pivoted and iterated multiple times, advancing from our original idea of building a meritocracy-based network state based on Prediction Market. 

Below is our original roadmap from Sept 2022:
Sept 2022: Team building, figma mockup 
Oct - Dec 2022: Full UI and web development
Q1 2023: Open Beta 1.0
Q2 2023: Product Launch

We followed our initial roadmap until early this year and we finished developing the web-app for prediction market. You can access the webapp at: https://edenpredict.vercel.app/

*Please contact mike@0xeden.com for access account. 

We recently concluded the 1st round of closed Beta between March 6th and April 2nd with over 200 users from EthDenver 2023 – with 7-day retention rate (March 7-14) of over 17% and average screentime of over 16 min/day.  

We pivoted early this year and started to focus on OpinionNFT, an social asset we invented that is a tradable element of user's social graph. You can think of it like lego blocks of your social graph and identity online. Each OpinionNFT unlocks you to a specific group of mutual NFT holders and you have the freedom to customize what your social experience look like. 

We have incorporated GPT-4 model into our algorithm and users will be able to log-in with their twitter account to have OpinionNFTs generated for them. With further technical backings of Account Abstraction technology, users don't even have to signup for a wallet or sign any smart contracts. The entire experience is just like a web 2 product. 


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 15 Weeks
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 - SageMint: Twitter API Integration

- **Estimated duration:** 2 weeks
- **FTE:**  1
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both documentation of the code and a basic tutorial that explains how to access SageMint API for user profile |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Twitter API module in SageMint | Integrate Twitter API into our own SageMint algorithm. Have TwitterAPI accurately generate requested User's profile, following, liked_tweet, followers, tweets. |
| 2. | Account Data Management | To maximize API usage efficiency and build up our own database, record each requested userdata into our own database.  |
| 3. | Account Data Management | When pulling an API request from our server, always scan our own server first, if duplicated then only initate API request for new content.  |
| 4. | Account Data Management | Format userdata according to 4096 Token limit (as per GPT-4). |

### Milestone 2 — SageMint: GPT-4 Integration & Fine-Tuning

- **Estimated Duration:** 3 weeks
- **FTE:**  2
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both documentation of the code and a basic tutorial that explains how to access SageMint API for OpinionNFT Prompts |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | GPT-4 module in SageMint | Integrate GPT-4 API into SageMint Algorithm. |
| 2. | OpinionNFT Generation Module (Text) | Setup algorithm to use pre-recorded prompts and specific temperature, frequency, P, presence, and length limit. |
| 3. | OpinionNFT Generation Module (Image-Prompt) | Build NFT title and image prompt instruction generation algorithm. |
| 4. | Fine-tuned Text-based SageMint | Test algorithm so that it can:
| 4a. | Fine-tuned Text-based SageMint | 1. Read multiple chunks of profile (from 1-99 bulk of 4096 Token texts) |
| 4b. | Fine-tuned Text-based SageMint | 2. Analyze user's profile to comprehend user's interest in topics, people, and content |
| 4c. | Fine-tuned Text-based SageMint | 3. Generate 9 OpinionNFT titles and image description |
| 4d. | Fine-tuned Text-based SageMint | 4. Turn image description into human-readable art generation instruction.

### Milestone 3 — SageMint: Graphic & NFT Generation

- **Estimated Duration:** 5 weeks
- **FTE:**  4
- **Costs:** 7,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both documentation of the code and a basic tutorial that explains how to access SageMint API for full OpinionNFT generation |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Stable Diffusion module in SageMint | Setup stable diffusion on our own local servers and build pre-set prompts for our branding and theme. |
| 2. | NFT Art System | Design Art Style (borders, background, card design) for OpinionNFT. |
| 3. | OpinionNFT Generation Module (Graphic) | Develop OpinionNFT art generation algorithm with pre-defined negative prompt, CFG, steps, and guidance scale. |
| 4. | Fine-tuned SageMint | Integrate algorithm into SageMint to be able to generate OpinionNFT directly from GPT-4 output.  |

### Milestone 4 — Demo Integration and NFT Deployment

- **Estimated Duration:** 1 week
- **FTE:**  3
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both documentation of the code and a basic tutorial that explains how to access Eden's product demo |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | OpinionNFT Standard | Develop custom NFT models (taking inspiration from ERC-721 and ERC-4907 standards) on Substrate. This will involve defining the structure of the NFT metadata, the ownership rules, and any additional functionality that allow users to temporarily gain ownership to NFTs (aka rentable standards) |
| 2. | OpinionNFT Deployment | Implement the custom NFT model on the Substrate blockchain and deploy it to the Westend testnet. |
| 3. | Demo Integration | Integrate the NFT functionality into our demo platform with Polkadot JS API. |

### Milestone 5 — Browser Plugin Development and Beta

- **Estimated Duration:** 4 weeks
- **FTE:**  3
- **Costs:** 4,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both documentation of the code and a basic tutorial that explains how to access and use Eden. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains the fundamentals of SageMint and the fundamentals of Eden. Article will focus primarilly on progress made during the 5 milestones described in this file. |
| 1. | UIUX Development | Develop UIUX for browser plugin. |
| 2. | Eden Demo | Develop browser plugin FE and integrate it with Polkadot JS API and upload to Chrome Extension Store. |
| 3. | Beta Launch | Integrate SageMint into browser plugin front-end; demo QA. |
| 4. | Alpha 1 | Release Browser plugin for testing through QuestN incentive. |
| 5. | Alpha 2/Beta 1 | Browser plugin testing through selected web3 community (<5000 community members). |


## Future Plans
Short Term (Within 2 Quarters of Beta Launch):
- Development of webapp.
- Cross-chain OpinionNFT compatibility.
- SageMint iteration, improvement, and model fine-tuning. 

Long Term (Post 2 Quarters of Beta Launch):
- Mobile version (Mobile Browser & app)
- Prediction Market integration
- OpinionNFT co-creation feature


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** \
Web3 Foundation Website

**Notes**
- We are actively raising our seed round of funding and we're open to any recommendations/introductions from the w3f team! 
- If you have any questions or would like to learn more from us, you can always reach us at: mike@0xeden.com or nolan@0xeden.com


