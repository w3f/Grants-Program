# Name of your Project

- **Team Name:** GreenVerse
- **Payment Address:** 13K7ob6hDeSgUHLR9z7HLffTmyBoDc1tugSKxcSUdd2osoCa(USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 

## Project Overview :page_facing_up:


### Overview

GreenVerse partners with eco-conscious brands to gamefy green actions, rewarding users with tokens to truly incentivize sustainability engagement.

GreenVerse is an innovative platform that combines gamification with sustainability, empowering users to take tangible actions towards a greener future. By offering diverse eco-friendly challenges, a rewarding point system, and a vibrant community of like-minded individuals, GreenVerse makes it rewarding for users to adopt sustainable habits and celebrate their environmental achievements. With impact tracking features and strategic partnerships with environmental organizations and eco-conscious brands, GreenVerse provides users with the tools and support they need to make a real difference in the world. 

Our team is deeply passionate about this project due to our co-founders' extensive background in both the renewable energy sector and Web3 technologies. With a wealth of experience in renewable energy and a deep understanding of the potential of Web3, we recognize the transformative power of combining these realms and also we are uniquely positioned to drive meaningful change in sustainability engagement. 

### Project Details

GreenVerse introduces a new business model where collaboration with brands committed to genuine environmental impact drives user engagement through token incentives, a pioneerring approach in the sustainability realm. By partnering with brands aligned with our mission, we offer users tangible rewards in the form of tokens for eco-friendly actions, setting a new standard for incentivizing environmental stewardship. This model not only fosters meaningful partnerships but also empowers users to make a real difference while earning rewards. 

We decide to construct our blockchain using Substrate due to its adaptable and modular design, which aligns perfectly with the requirements of the GreenVerse blockchain. Specifically, in terms of on-chain logic design and module interactions, we believe Substrate offers the ideal solution for implementing the entire protocol. Furthermore, integrating Polkadot wallets into our mobile apps is essential, and we're pleased to find existing solutions available, sparing us the effort of building everything from the ground up.

#### Architecture


Our objective is to construct a Substrate-based blockchain to record and manage all users' environmentally friendly activities. Additionally, we aim to generate on-chain proof and certificates for brands demonstrating their contributions to the green revolution, quantified by precise CO2 reduction amounts and the number of participants involved.

<img src="https://raw.githubusercontent.com/h4n0/gv/main/GreenVerse_Flow.png" width="900" />

#### Mobile Apps

The GreenVerse mobile apps serve as the primary interface for end users to engage with our blockchain, allowing them to claim rewards upon completing challenges and tasks. By enabling users to install and utilize our mobile apps, we are able to access their daily activities by using native SDKs of Apple Health or Google Health Connect. Users can easily aggregate their daily activities and send it to our blockchain when they take part in challenges. Once we've verified users eligible for rewards, they can claim their corresponding incentives directly through the app.

Our roadmap includes expanding support for a variety of environmentally friendly activities, such as opting for paper bags and packages over plastic ones, utilizing electric vehicles and e-scooters. We're exploring innovative methods, including AI and bar/QR code recognition, to validate users' activities. Additionally, we will collaborate with e-bike and e-scooter sharing platforms to verify eco-friendly trips. Expect to see more exciting features and initiatives integrated into our apps in the near future.

<p float="left">
  <img src="https://raw.githubusercontent.com/h4n0/gv/main/GV_app_0.jpg" width="300" />
  <img src="https://raw.githubusercontent.com/h4n0/gv/main/GV_app_1.jpg" width="300" /> 
  <img src="https://raw.githubusercontent.com/h4n0/gv/main/GV_app_2.jpg" width="300" />
</p>

### Ecosystem Fit

GreenVerse will be built on Substrate and later plan to onboard Polkadot/Kusama parachain. As a sustainable gaming platform, GreenVerse leverages the interoperability and scalability features of Substrate and the Polkadot ecosystem to allow existing users and projects to interact and collaborate with us easily.

Target audience:
- Eco-conscious individual users in Polkadot ecosystem
- Polkadot native projects and Web2 brands who cares about sustainability 
- Environmental organizations
- 3rd party green data providers

For eco-conscious users, there is a significant need for encouragement to maintain green actions as part of their daily routine. GreenVerse provides incentives and rewards to motivate users and reinforce sustainable behaviors, turning eco-friendly practices into engaging and rewarding experiences. For brands, there is a lack of effective means to incentivize individuals to adopt green behaviors and showcase their environmental initiatives. GreenVerse offers brands a platform to promote their green ambitions, engage with a community of environmentally conscious consumers, and integrate web3 technology into their sustainability efforts, providing a novel and impactful way to drive positive change.

There has so far been no similar project found within the Polkadot ecosystem. One project in other eco-system that shares similarities is StepN, which incentivizes users to adopt healthy lifestyle habits through gamification and rewards. While StepN focuses on physical activity and health, GreenVerse distinguishes itself by addressing environmental sustainability specifically. GreenVerse gamifies eco-friendly behaviors and engages users in environmental conservation efforts through partnerships with brands, organizations, and community-driven initiatives.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: 
Yvonne 
- Names of team members:
Aaron C, 
Will Z,
Shawn W

### Contact

- **Contact Name:** Yvonne
- **Contact Email:** yvonne@greenverse.network 
- **Website:** https://www.greenverse.network/

### Legal Structure

- **Registered Address:** Will provide privately
- **Registered Legal Entity:** Will provide privately

### Team's experience

Yvonne brings profound experience in the renewable power industry, where she has played a pivotal role in establishing and strengthening global brand images across diverse international markets. With a deep-rooted passion for sustainability and a keen understanding of the renewable energy landscape, Yvonne has dedicated her career to making a tangible impact in the sustainability sector.

Aaron used to be founding protocol developer at Litentry, and he participated the design and implementation of Litentry parachain from scratch. Litentry is an identity aggregation focused company in Polkadot ecosystem, and has got the Web3 Foundation grant since 2019.

Aaron is also the main developer of AdMeta, the decentralized advertising protocol, which has received and completed the Web3 Foundation grant since 2022.

Will used to be a backend developer at Litentry, and currently studying at the University of Melbourne. He has over 5 years of Web3 and finance related development experience.

Shawn is a full stack developer at Litentry, and he has over 6 years experience of Web3 frontend and smart contract development.


### Team Code Repos

https://github.com/GreenVerseNetwork/greenverse-node
https://github.com/GreenVerseNetwork/greenverse-app

- https://github.com/hermione6
- https://github.com/h4n0
- https://github.com/Shihao66 
- https://github.com/wxd56987

## Development Status :open_book:


- We've started to build the GreenVerse Substrate node after we did some investigation of the possible obstacles of our blockchain implementation. We use the official node template to get started.
- We also created a Flutter repo as our mobile apps code base, to build the single source of both iOS and Android apps. We checked the relevant libs from Flutter and had an general idea that our milestones are technically doable.
- Also we built our website to demonstrate our ideas.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**  7 months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:**  26,000 USD

### Milestone 1 — Basic functionality

- **Estimated duration:** 3 month
- **FTE:**  3
- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how GreenVerse works and how it helps contribute to the green transition. |
| 1. | Substrate module: daily | Develop a Substrate module enabling users to log their daily activities. Participants meeting daily activity targets will earn tokens as rewards. Each day features a predetermined total reward, distributed among eligible users by dividing the total reward amount by the number of qualifiers. Initially, activity options include walking and biking. |
| 2. | Substrate chain | Substrate module daily will be integrated into a substrate node, running as a solo chain, to enable users to submit their daily activities and receive rewards through our mobile app. This chain will integrate treasury, council, democracy and also other essential pallets, to build a full-featured blockchain. |
| 3. | Mobile App (iOS/Android) | We will build mobile applications for iOS and Android, which serves as the UI for client interactions. The application shall have features:
||| 3.1 connecting the existing polkadot wallet to our blockchain network. |
||| 3.2 starting/accepting challenges.  |
||| 3.3 accessing users' activity data from Apple Health/Google Health Connect. |	
||| 3.4 the interface to display the percentage of completion for a challenge. |
||| 3.5 claiming rewards of a completed challenge.  |


### Milestone 2 — Additional features

- **Estimated Duration:** 4 month
- **FTE:**  3
- **Costs:** 14,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | GPLv3  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how GreenVerse works and how it helps contribute to the green transition. |
| 1. | Substrate module: brand | Develop a Substrate module enabling eco-conscious brands to establish customized campaigns, complete with promotional metadata and targeted rewards for participants. Brands have the flexibility to define specific criteria participants must meet to qualify for rewards, such as completing 10km of walking and 50km of biking within a month. Rewards are distributed using the native token and may optionally include digital or physical coupons or goodies. |
| 2. | Substrate module: certificate | Develop a Substrate module dedicated to generating certificates for brands upon completion of their campaigns. These certificates will detail the number of participants involved and the total distance they collectively encouraged users to walk or bike. |
| 3. | Substrate chain | Substrate module brand and certificate will be integrated into the existing substrate node. |
| 4. | Mobile App (iOS/Android) | Additional features shall be added:
||| 4.1 starting/accepting brand challenges.  |
||| 4.2 claiming rewards of a completed brand challenge.  |
||| 4.3 the interface to display the percentage of completion for a challenge. |
||| 4.4 generating certificates for brands upon completion of their campaigns, showcasing the total walking and biking kilometers they motivated users to achieve. Additionally, the certificates will highlight the total CO2 emissions avoided through these activities. |


## Future Plans

In our future roadmap, we envision expanding the capabilities of our app to support additional environmentally friendly activities, as outlined in the Mobile Apps section. 

Furthermore, we intend to introduce features enabling NGOs and other partners to join our network, facilitating the verification of users' activities. 

Additionally, we will add features that allow NGOs to list green products through which users and brands can offset their carbon emissions on chain.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** https://github.com/Moehringen of Web3Go
- **Payment Address:** 15rHWUgpzHHhoxCLJZJB2SfWtd22LDALQMX7CKtcL5U8gcFU (USDT)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  Personal recommendation 

