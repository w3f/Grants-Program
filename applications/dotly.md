# DOTLY: Revolutionizing Polkadot Account Statistics

- **Team Name:** justmert
- **Payment Address:** [0xf5412558d977915D56d8B4d3773871142d379E74](https://etherscan.io/address/0xf5412558d977915D56d8B4d3773871142d379E74) (USDC, Ethereum (ERC20))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up

### Overview

The growth of Polkadot, leading blockchain platform, presents a challenge for users in understanding and tracking their account activities. Existing solutions lack intuitive and engaging tools to present comprehensive statistics, leaving users with limited insights into their impact within the ecosystem.

DOTLY is an innovative application that addresses this problem head-on. By providing a user-friendly platform with visually captivating and interactive displays, DOTLY transforms Polkadot account statistics into an informative and entertaining experience. Users gain access to a wide range of statistics, including account overviews, balance and extrinsic histories, badges, and action insights. DOTLY goes beyond numbers by incorporating unified scores, level systems, and visually appealing charts.

With DOTLY's intuitive interface, users can understand their account activities at a glance. DOTLY aims to bridge the gap between account statistics and user accessibility, empowering Polkadot account holders to maximize their potential and contribute to the growth and success of the network.

### Project Details

**Mockups**

| Overview Page | Stats Page |
| ------------- | ----------- |
|![Overview](https://github.com/justmert/dotly/assets/37740842/520060fa-899a-4d28-9599-649843a7df43) |![Stats](https://github.com/justmert/dotly/assets/37740842/6f4bba33-6ccc-40e6-9a5f-437530db3dbb)|

| Extrinsics Page | Badges Page |
| ------------- | ------------- |
|![Extrinsics](https://github.com/justmert/dotly/assets/37740842/1b5d36e1-6933-4991-bb71-bea1fc202940)| ![Badges](https://github.com/justmert/dotly/assets/37740842/556bea7d-99d0-49cc-bc34-30751dc609c4) |

---

<br>

**Technical Scheme**

![technical_scheme](https://github.com/justmert/dotly/assets/37740842/80de9ebd-729c-450f-aec7-ced758636329)

---

<br>

**API Scheme**

![fast_api](https://github.com/justmert/dotly/assets/37740842/079cce64-2f6a-4906-8cee-0518aadf1f25)

---

<br>

**Technical Stack**

- Frontend: NextJS, Tailwind CSS, Apache ECharts
- Backend: Python, Fast API
- Integrations: Google Analytics


### Ecosystem Fit

**Target audience**

DOTLY targets a diverse range of individuals within the Polkadot ecosystem, including existing Polkadot account owners seeking a comprehensive solution to track and understand their on-chain account activities, new users looking for an intuitive gamified onboarding experience, and ecosystem enthusiasts interested in monitoring their involvement with pursuing badges.

**Impact**

- **Comprehensive Account Insights**: DOTLY offers users comprehensive statistics and insights about their Polkadot accounts, including total transfers, transaction rates, balance summaries, and more. By providing this deep level of visibility, DOTLY enables users to make informed decisions, optimize their engagement, and monitor their progress within the ecosystem.

- **Uniqueness**: While there may be block explorers offering Polkadot ecosystem account statistics, such as balance history (and not much else), DOTLY differentiates itself through its focus on user experience, gamification elements, and rich charts/insights.

- **Gamification and Motivation**: DOTLY incorporates gamification elements, such as unified scores and level systems, which motivate users to actively participate and explore the Polkadot ecosystem. By gamifying the account tracking process, DOTLY encourages users to complete quests to get a sense of achievement and progression within their account journey.

## Team :busts_in_silhouette

### Team members

- Mert Köklü - Project Owner

### Contact

- **Contact Name:** Mert Köklü
- **Contact Email:** <kklumert@gmail.com>
- **Website:** <https://github.com/justmert>

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** Individual

### Team's experience

**Mert Köklü**

Acted as an ambassador of many organizations including ACM, Microsoft and NVIDIA as Certified Instructor. In the Web3 space, he co-manage the AAVE Turkey Community and advocate for The Graph. Was working with AI video pipelines at an NVIDIA distributor company in Turkey before getting involved with blockchain.

Develops ecosystem tools and applications with various tech stacks. AAVE, W3F, Flow and Filecoin grantee with an accepted multiple projects and now developing open-source, user-friendly applications that add value to the DOT ecosystem.

### Team Code Repos

- <https://github.com/justmert/eco-flow-frontend> (PolkaFlow Frontend - <http://polkaflow.xyz/>)
- <https://github.com/justmert/eco-flow-backend> (PolkaFlow Backend)
- <https://github.com/justmert/aave-graphql-doc> (Aave GraphQL Documentation Website - <https://www.aaveql.org/> )
- <https://github.com/justmert/aave-graphql-editor> (Aave GraphQL Editor Website)
- <https://github.com/justmert/peer-cli> (Peer CLI: Swiss Army Knife for the IPFS)
- <https://github.com/justmert/Aave-API-Telegram-Bot> (Aave API Telegram Bot)
- <https://github.com/justmert/chainweb.py> (Kadena Chainweb Python Bindings)

**Github Account**

- <https://github.com/justmert>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/mertkoklu/>

## Development Status :open_book

API scheme, technical stack and mockups are ready for development.

## Development Roadmap :nut_and_bolt

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 20,000 USD

### Milestone 1 - Backend

- **Estimated duration:** 1 month
- **FTE:**  1 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **set-up** page that explains how a user can run frontend/backend repositories of the project in their local environment. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Backend: Overview Page - Score Widget | Implement an endpoint for score widget that displays account activity score based on activity equation. For example an equation can based on weighted sum of following scores: Outgoing Transfer (+10), Incoming Transfer (+2), Extrinsics Call (+5) and much more.  |
| 2. | Backend: Overview Page - Level Widget | Implement an endpoint for level widget that displays account level based on account badges and scores. |
| 3. | Backend: Overview Page - Brief Stats | Implement an endpoint for brief stats widget that displays summaries like, total transfers sent\received, time with Polkadot, extrinsic count, nonce, role, tags, display name, twitter, web, Judgements, email (if these are exists) etc.   |
| 4. | Backend: Overview Page - Balance Pie | Implement an endpoint for balance pie widget that displays two pie charts. The first pie chart will show distribution of balance like Transferrable balance, Locked balance etc. and the second pie chart will show sub-distribution balance of the first pie chart selection like Election Lock, Democracy Lock, etc. | 
| 5. | Backend: Overview Page - Weekly Transaction Rate | Implement an endpoint for weekly transaction rate widget that is the number of transactions account have sent over the past 7 days. |
| 6. | Backend: Stats Page - Balance History | Implement an endpoint for balance history widget that shows DOT balance change over time on account. |
| 7. | Backend: Stats Page - Transaction History | Implement an endpoint for relationship chart widget that shows relationship with different accounts. It can show most frequent accounts that user has interacts with. |
| 8. | Backend: Stats Page - Top 5 Senders/Receivers | Implement an endpoint for top 5 senders/receivers widget that lists top 5 senders and receivers (transfers) of the account. |
| 9. | Backend: Stats Page - Incoming/Outcoming Transfer Widget | Implement an endpoint for top incoming/outcoming transfer widget that lists displays count of incoming/outcoming transfers over time with two line charts. |
| 10. | Backend: Stats Page - Staking Reward History | Implement an endpoint for staking reward widget that displays count of staking reward over time with a line chart. |
| 11. | Backend: Extrinsics Page - Extrinsics Count History | Implement an endpoint for extrinsics count history widget that displays count of extrinsics over time with a line chart. |
| 12. | Backend: Extrinsics Page - Extrinsics Success Rate | Implement an endpoint for extrinsics success rate widget that displays success rate of extrinsics on pie chart. |
| 13. | Backend: Extrinsics Page - Top Interacted Modules/Calls  | Implement an endpoint for top interacted modules/pallets and calls widget. Top interacted calls will be listed based on selection of module. |
| 14. | Backend: Extrinsics Page - Action Insight | Implement an endpoint for action insight widget that displays two pie charts and one line chart. The first pie chart will show count distribution of modules user interacte with (such as balances), and the second pie chart will show count distribution of calls (such as transfer, transfer_keep_alive etc.) based on selected module. The line chart will show that call's count over time. |
| 15. | Backend: Badges Page - Badges | Implement an endpoint for badges widget. It will return all badges that user has achieved and yet to achieve. For example a badge will look like this: "Join the party! - Perform a token transfer". |


### Milestone 2 - Frontend

- **Estimated duration:** 1 month
- **FTE:**  1 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Frontend: Search Page | Implement a search page that allows users to search for an account by address in Polkadot ecosystem. |
| 2. | Frontend: Overview Page | Implement an overview page that displays account activity score, account level, brief stats, balance pie, weekly transaction rate widgets. |
| 3. | Frontend: Stats Page | Implement a stats page that displays balance history, transaction history, top 5 senders/receivers, incoming/outcoming transfer, staking reward history widgets. |
| 4. | Frontend: Extrinsics Page | Implement an extrinsics page that displays extrinsics count history, extrinsics success rate, top interacted modules/calls, action insight widgets. |
| 5. | Frontend: Badges Page | Implement a badges page that displays badges widget. |
| 6. | Frontend: Google Analytics Integration | Integrate Google Analytics to track user interactions. |
| 7. | Frontend: Feature | Make every widget on the pages shareable. |

## Future Plans

While DOTLY is initially focused on Polkadot, we plan to expand its capabilities to include other networks within the Polkadot ecosystem, such as Kusama and other parachains. This will allow users to track and analyze their activities across multiple interconnected networks, providing a comprehensive view of their participation in the wider Web3 ecosystem.

Besides, there are some deeper features that is not included in this proposal. Like using unsupervised learning algorithms to perform segmentation analysis that will unearth insights into how user interact with Polkadot environment. This will show behavioral patterns of users like how they use Polkadot, what they do, what they like, repetitive actions, etc. 

Based on above segmentation analysis, we can create a database consists of segmentation analysis of most active wallets to further create a recommendation system that will recommend users to use Polkadot in a better way.


## Referral Program (optional) :moneybag

- **Referrer:** -
- **Payment Address:** -

## Additional Information :heavy_plus_sign

**How did you hear about the Grants Program?**

I am **grantee** of Web3 Foundation Grants Program.
