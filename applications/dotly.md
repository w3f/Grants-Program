# DOTLY: Revolutionizing Polkadot Account Statistics

- **Team Name:** justmert
- **Payment Address:** [0xf5412558d977915D56d8B4d3773871142d379E74](https://etherscan.io/address/0xf5412558d977915D56d8B4d3773871142d379E74) (USDC, Ethereum (ERC20))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

The growth of Polkadot, leading blockchain platform, presents a challenge for users in understanding and tracking their account activities. Existing solutions lack intuitive and engaging tools to present comprehensive statistics, leaving users with limited insights into their impact within the ecosystem.

DOTLY is an innovative application that addresses this problem head-on. By providing a user-friendly platform with visually captivating and interactive displays, DOTLY transforms Polkadot account statistics into an informative and ingsightful experience. Users gain access to a wide range of statistics, including account overviews, balance and extrinsic histories, badges, and action insights. DOTLY goes beyond numbers by incorporating visually appealing charts.

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

DOTLY targets a diverse range of individuals within the Polkadot ecosystem, including existing Polkadot account owners seeking a comprehensive solution to track and understand their on-chain account activities, new users looking for an intuitive onboarding experience, and ecosystem enthusiasts interested in monitoring their involvement with pursuing badges.

**Impact**

- **Comprehensive Account Insights**: DOTLY offers users comprehensive statistics and insights about their Polkadot accounts, including total transfers, transaction rates, balance summaries, and more. By providing this deep level of visibility, DOTLY enables users to make informed decisions, optimize their engagement, and monitor their progress within the ecosystem.

- **Uniqueness**: While there may be block explorers offering Polkadot ecosystem account statistics, such as balance history (and not much else), DOTLY differentiates itself through its focus on user experience, and rich charts/insights.


## Team :busts_in_silhouette:

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

## Development Status :open_book:

API scheme, technical stack and mockups are ready for development.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 10,000 USD

### Milestone 1 - Frontend and Backend

- **Estimated duration:** 2 months
- **FTE:**  1 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT  |
| **0b.** | Documentation | I will provide both **inline documentation** of the code and a basic **set-up** page that explains how a user can run frontend/backend repositories of the project in their local environment. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, I will describe how to run these tests. |
| **0d.** | Docker | I will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | I will publish an article that explains the charts/widgets in DOTLY and publish it with ecosystem. |	
| 1. | Search Page | Implement search page that allows users to search for an account by address in Polkadot ecosystem. |
| 2. | Overview Page | Implement overview page that displays  brief stats, parachain balance pie, parachain balance list, weekly transaction rate widgets. |
| 3. |  Overview Page - Brief Stats | Implement an endpoint for brief stats widget that displays summaries like, total transfers sent\received, time with Polkadot, extrinsic count, nonce, role, tags, display name, twitter, web, Judgements, email (if these are exists) etc.   |
| 4. |  Overview Page - Parachain Balance Pie | Implement an endpoint for balance pie widget that displays **three** pie charts. The first pie chart will show parachain that account address has balance. The second pie displays distribution of balance like Transferrable balance, Locked balance etc. and the third pie chart will show sub-distribution balance of the first pie chart selection like Election Lock, Democracy Lock, etc. | 
| 5. |  Overview Page - Parachain Balance List | Implement an endpoint for balance list widget that displays list of parachains with respective balance summary of account address. | 
| 6. |  Overview Page - Weekly Transaction Rate | Implement an endpoint for weekly transaction rate widget that is the number of transactions account have sent over the past 7 days. |
| 7. | Stats Page | Implement stats page that displays balance history, transaction history, top 5 senders/receivers, incoming/outgoing transfer, staking/pool reward history widgets. |
| 8. |  Stats Page - Balance History | Implement an endpoint for balance history widget that shows DOT balance change over time on account using chart. |
| 9. |  Stats Page - Transaction History | Implement an endpoint for relationship chart widget that shows relationship with different accounts. It can show most frequent accounts that user has interacts with. |
| 10. |  Stats Page - Top Senders/Receivers | Implement an endpoint for top senders/receivers widget that lists top senders and receivers (transfer) of the account. |
| 11. |  Stats Page - Incoming/Outgoing Transfer Widget | Implement an endpoint for top incoming/outgoing transfer widget that displays count of incoming/outgoing transfers over time with two line charts. |
| 12. | Stats Page - Staking/Pool Reward History | Implement an endpoint for staking/pool reward widget that displays count of staking/pool reward over time with a line chart. |
| 13. | Extrinsics Page | Implement an extrinsics page that displays extrinsics count history, extrinsics success rate, top interacted modules/calls, action insight widgets. |
| 14. | Extrinsics Page - Extrinsics Count History | Implement an endpoint for extrinsics count history widget that displays count of extrinsics over time with a line chart. |
| 15. | Extrinsics Page - Extrinsics Success Rate | Implement an endpoint for extrinsics success rate widget that displays success rate of extrinsics on pie chart. |
| 16. | Extrinsics Page - Top Interacted Modules/Calls  | Implement an endpoint for top interacted modules/pallets and calls widget. Top interacted calls will be listed based on selection of module. |
| 17. | Extrinsics Page - Action Insight | Implement an endpoint for action insight widget that displays two pie charts and one line chart. The first pie chart will show count distribution of modules user interacte with (such as balances), and the second pie chart will show count distribution of calls (such as transfer, transfer_keep_alive etc.) based on selected module. The line chart will show that call's count over time. |
| 18. | Badges Page | Implement badges page that displays badges widget. |
| 19. | Badges Page - Badges | Implement an endpoint for badges widget. It will return all badges that user has achieved and yet to achieve. For example a badge will look like this: "Join the party! - Perform a token transfer". |
| 20. | Google Analytics Integration | Integrate Google Analytics to track user interactions. |
| 21. | Share Feature | Make every widget on the pages shareable. |


## Future Plans

Altough DOTLY is initially focused on Polkadot, it offers detailed balance overview on parachains that user has balances. I plan to expand its capabilities to include other networks within the Polkadot ecosystem, such as Kusama and other parachains. Users can change parachain to see their stats in other parachains as well just like parachain explorers. This will allow users to track and analyze their activities across multiple interconnected networks, providing a comprehensive view of their participation in the wider Web3 ecosystem. 

Also I am planning to add quests that incentivize users to perform certain actions. Altough this is done by badges (for now) that are awarded to users, quests are a bit different. For example I can incentivize users to swap in X protocol, or stake in Y protocol, or provide liquidity in Z protocol. This will be a great way to increase user engagement and participation in the Polkadot ecosystem. The rewards for quests can be DOT, KSM, NFTs, etc. and can be provided from respective X, Y, Z  protocol/tools. This feature is not included in the proposal since it adds complexity to the project and it will take more time to implement. 


## Referral Program (optional) :moneybag:

- **Referrer:** -
- **Payment Address:** -

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

I am **grantee** of Web3 Foundation Grants Program.
