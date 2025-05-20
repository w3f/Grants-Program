# 📝 stampika

(Known as Sutanpu in EasyA Consensus 2025)

## 🌟 Project Overview

- stampika lets travellers mint NFT stamps from real-world visits through NFC Tags - building digital identity while helping sites engage and track visitors
- The 2 key stakeholders of our project would be the users (travellers) and organisations (tourism board, landmark owners).

- We would like to bring the social experience at the end of travels where people share where they have been with friends and families online. Users would be to view other people’s stamps and when they have collected them as they are publicly on the blockchain.

- An NFC Sticker Tag would be placed at landmarks and users would be able to scan the NFC Tag and instantly claim a stamp, similar to a proof-of-location. We would then provide organisations with information of when users visit, allowing them to obtain more data points for boosting visits.

- We will be deploying the Stamp Contracts (Modified ERC721) on Polkadot Hub and sponsor users with their gas fees through our backend. This will help with onboarding masses to Polkadot as we would only be using blockchain under the hood, abstracting away the complicated part of blockchain.

- This project aligns with the team’s core values of encouraging activity and movement. In a world where AI-driven productivity increasingly reduces the human need for traditional work, there’s been a noticeable long-term shift in investment toward the entertainment and experience economy. At the heart of this trend lies a paradox: as technology accelerates, so does the human longing for nature, authenticity, and offline experiences. That’s precisely the space we’re targeting.

- Pitch Deck: https://www.canva.com/design/DAGnogxARvE/EC2ZigywHsxXm7_VCZytMA/edit

### 🔍 Project Details

Mobile UI
| Empty Home Page  | Full Home Page  | Social Page  | Profile Page  |
|---|---|---|---|
|  ![Empty Home Page](https://i.imgur.com/PNWVr7l.png) |![Full Home Page](https://i.imgur.com/r9vDTqQ.png)   |  ![Social Page](https://i.imgur.com/z1Lq4MW.png) |  ![Profile Page](https://i.imgur.com/OQwEGHw.png) |

We demonstrate a working prototype here: https://www.youtube.com/watch?v=pzqG57ep1mI

- Tech Stack

  - Landing Page: NextJS, TailwindCSS
  - Application: React Native, Privy, RNR UI
  - Backend: NestJS, Viem, Supabase
  - Contracts: Hardhat, Solidity

- Architecture
  - We will have the following repositories `contracts`, `backend`, `frontend` and `landing-page`
  - NFC scans from the mobile app will be handled by the frontend, which makes an API call to the backend to mint an NFT on chain.
 
We will be working on abstracting blockchain as much as possible.
 
We will not include the data analysis dashbaord and related endpoints for the Tourism Boards in this Fast Grant and will leave that as future work. 

### 🧩 Ecosystem Fit

stampika is an application is built on Polkadot Hub. It is designed for avid explorers and travel enthusiasts who delight in visiting landmarks—whether on domestic adventures or overseas getaways. Inspired by traditions such as Japan’s iconic stamp-collecting culture, where travelers collect physical stamps in notebooks, stampika brings this experience into the digital age.

stampika addresses the need for:

- **Proof of Location & Attendance**: Tourism companies can leverage stampika to authenticate a user’s visit to specific landmarks. This is particularly valuable for implementing loyalty programs or gamified travel experiences, where visitors earn rewards for exploring multiple locations.
- **Actionable Visitor Insights**: By capturing scan data, stampika channels anonymized travel patterns and behavior to relevant organizations. These insights can inform marketing strategies, optimize tourist flows, and support cultural and urban planning efforts.

There aren’t any similar projects in the Polkadot Ecosystem (referencing https://parachains.info/#projects). We believe that this is one of the pioneer efforts to apply Web3 to the tourism industry. This could be due to the fact that this project is quite dependent on our business development efforts and the fact that NFC libraries are not as easy to work with in the past.

## 👥 Team

- **Team Name:** stampika
- **Contact Name:** Wei Rong Chu
- **Contact Email:** chuweiron18@gmail.com
- **Website:** https://github.com/wr1159/stamply

### Team members

- Charlyn Kwan Ting Yu
- Kai Jie Leow
- Kyoeun Kim
- Wei Rong Chu

#### LinkedIn Profiles (if available)

- https://www.linkedin.com/in/charlyn-kwan-20651a233/
- https://www.linkedin.com/in/sg-leow-kai-jie/
- https://www.linkedin.com/in/kyoeun-kim/
- https://www.linkedin.com/in/wei-rong-chu/

### Team Code Repos

Team GitHub

- https://github.com/wr1159/stamply

Individual GitHub

- https://github.com/charkty/
- https://github.com/kaijie0102
- https://github.com/kyoeun-kim
- https://github.com/wr1159/

### Team's experience

We are all final year School of Computing students from National University of Singapore. Collectively, we have won prizes at 7 hackathons in the past. 3 of our members are part of NUS Overseas College, a very selective programme from NUS that provide opportunities for studnets to intern in start-up companies in leading entrepreneurial hotspots across the world - in our case, it’s Toronto.

Our team has also worked for Web3 companies like CoinGecko, Mavennet while also contributing to open source blockchain repositories like Cosmos-sdk.

## 📊 Development Status

We developed a prototype Android Mobile App at EasyA Consensus Hackathon. stampika can now only scan NFC tags, send a request to our backend, which mints an NFT on the Polkadot Hub chain.

## 📅 Development Roadmap

### Overview

- **Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 2 (4 x 0.5)
- **Total Costs:** $10,000 USD

| Number | Deliverable                                            | Specification                                                                                                                                                                                                                                                                      |
| ------ | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                                                | GPLv3                                                                                                                                                                                                                                                                              |
| 0b.    | Documentation                                          | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can create an account and start collecting stamps.                                                                                                                     |
| 0c.    | Testing and Testing Guide                              | Core functions will be fully covered by tests to ensure functionality and robustness. In the guide, we will describe how to run these tests on the application.                                                                                                                    |
| 0d.    | Article                                                | We will publish an **article** on our website that explains what was done/achieved as part of the grant.                                                                                                                                                                           |
| 1.     | Branding Design + UI Revamp                            | We will create a branding guide for stampika and revamp UI, creating components according to our new design system.                                                                                                                                                                |
| 2.     | Landing Page                                           | We will create a landing page according to the brand design to introduce stampika and its features. This will be the front of our project and will be shared to other people who are interested in our project.<br><br>\- Features of stampika<br>\- Waiting List subscription<br> |
| 3.     | Mobile App Development                                 | We will work on creating a more scalable mobile app, both for IOS and Android. We faced some Build issues due to version mismatch while integrating with Privy, hence we plan to re-setup the mobile app.                                                                          |
| 4.     | User Management System<br>(With Gmail and Wallets)<br> | We will integrate Privy into our application to allow users to login and seamlessly create a blockchain address for them. Users will also be able to add their name, age and other information in the settings. <br><br>\- Gmail Login<br>\- Other Wallets<br>                                                                                |
| 5.     | Designing NFC Sticker Stamps                           | We will design and produce our custom NFC Sticker Stamps with our branding similar to below<br><br><br><img src="https://nfctagify.com/cdn/shop/files/STICKER_BIG_R.jpg" width="350"/>|
| 6.     | Integrate Social Timeline                              | The social timeline feature will allow users to view stamps other people have collected.<br><br>This will be integrated with our backend system.<br><br>\- Stamps Collected Database<br>\- Optional Collection Message on post<br>                                                 |
| 7.     | Integrate Friends Feature                              | This feature will build on top of the Social Timeline feature where users can now add friends and make their account private so their stamps are only shared with other friends.<br><br>\- Friend Requests<br>\- Private Account Feature<br>                                       |
| 8.     | Publish Test Application                               | We will publish the application on TestFlight iOS and Google Play Console or available as an .apk file.<br><br>Users will be able to download a beta version of the app.<br>                                                                                                       |
| 9.     | Pilot Testing with Mississauga Authorities             | This is where we will work with landmarks in Mississauga (where the team is currently based) and integrate stampika with landmarks + allowing users to test out the full application flow.<br><br><br>                                                                             |

### 💰 Budget Breakdown

Please provide a breakdown of your budget by milestone:

| Milestone | Deliverables          | Cost (USD)  | Estimated Completion |
| --------- | --------------------- | ----------- | -------------------- |
| 1         | 0a, 0b, 1, 2, 3, 4, 5 | $5,000      | 1.5 months           |
| 2         | 0c, 0d, 5, 6, 7, 8, 9 | $5,000      | 1.5 months           |
| **Total** |                       | **$10,000** | **3 months**         |

- 260 hours of Software Development work at $25 / hour = $6,500
- 100 hours of Business Development work at $25 / hour = $2,500

### Additional Costs
- iOS Developer Pass $100
- Google Play License $25
- Hosting Server Fees $250
- Custom NFC Tags $100
- Transport Fees to Landmark Partners $525

Total = $10,000

## 🔮 Future Plans

- Development
  - After completing the pilot testing in Mississauga, the team would be relocating back to Singapore where we will work on acquiring more users and landmarks in Singapore.
  - We will integrate a data analytics dashboard for tourism boards that collaborate with us to provide them more information
- Vision for Polkadot
  - After we onboard new users, we could introduce them to other parts of the ecosystem provided that the projects are aligned with the vision of stampika - For example, NFT Marketplace.
- Additional Funding
  - National University of Singapore (NUS) Venture Initiation Program (SGD$10k)
  - As NUS Students, we plan to submit and pitch our project to gain backing of our University

## ℹ️ Additional Information

EasyA Consensus Hackathon 2025 Achievements

- Polkadot (Build Track): 1st Place
- Forte: 3rd Place

The project is fresh out of EasyA Consensus Hackathon. We focused intensely on the stampika for the whole 3 days and we are looking to take it to the next level
