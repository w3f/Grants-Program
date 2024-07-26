# Burve Protocol

> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g., `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** Launch Labs Co., Ltd.
- **Payment Details:**
  - **DOT**: 1KxfCMkbZz2ueY3mkFGHzC55LgW6PuhqVGfJVPmhPdKWUEi
  - **Payment**: 1KxfCMkbZz2ueY3mkFGHzC55LgW6PuhqVGfJVPmhPdKWUEi (USDC)
- **Level 2**  


## Project Overview :page_facing_up:
### Overview
- Project Name: Burve Protocol
- Tagline: The AMM 3.0 that innovates bonding curves for fair, LP-less, unruggable, and instantly tradable token launches, flexible and streamlined unilateral liquidity management, and a more efficient DeFi ecosystem.

#### Brief Description
Burve Protocol is a cutting-edge AMM protocol designed to support a wide range of cryptocurrency use cases, from simple memecoin launches to sophisticated AMM solutions. Our protocol addresses the limitations of existing AMMs, such as initial liquidity challenges and potential manipulation, by integrating bonding curves inspired by S. De la Rouvier’s work. This allows for a more inclusive and efficient financial ecosystem, offering a seamless pathway for a token’s journey from creation and minting to exchange.

#### Integration with Substrate / Polkadot / Kusama
Burve Protocol leverages Substrate to build a robust, scalable, and interoperable solution within the Polkadot and Kusama ecosystems. By utilizing Substrate, we ensure that our protocol benefits from the security, scalability, and interoperability inherent in the Polkadot network. This integration allows Burve Protocol to connect with other parachains, fostering a more cohesive and efficient DeFi landscape.

#### Team's Motivation
Our team comprises strong believers in innovation, DeFi, and the power of mathematics. We trust that combining mathematical principles with blockchain technology can lead to greater and more efficient financial freedom. While AMM solutions like Uniswap and order book AMMs have advanced the DeFi revolution, they also have significant drawbacks. Issues such as initial liquidity challenges, liquidity depletion, and potential manipulation by vested entities have highlighted the need for improvement.

Inspired by the potential of bonding curves, as discussed in [S. De la Rouvier's blog post](https://medium.com/@simondlr/a-bonded-curation-community-247f14a6de04), our researchers saw an opportunity to create a more inclusive financial future. We aim to integrate bonding curves into a wider range of applications, providing a holistic solution for token creation, minting, and exchange. This vision led to the creation of Burve Protocol, where we strive to offer innovative solutions to the current limitations of AMMs, thereby fostering a more inclusive and efficient DeFi economy.

Currently, there is no similar solution in the Polkadot ecosystem. As an indispensable infrastructure for the ecosystem, we believe that the services we provide are necessary, efficient, and essential for users. We can genuinely bring more interactions, transactions, smart contract deployments, and more users to Polkadot.

### Project Details
#### UI
Our MVP is based on Solidity and is already live, and the Polkadot version will be developed based on the Substrate tech stack and Polkadot structure with the same UI. [Check UI here](https://app.burve.io/).
#### Core API
**Launch**:
- Call the factory contract's `deployTokenWithHooks`.
#### Swap:
1. **Buy:** `mint` via the router contract.
2. **Sell:** `burn` via the token contract.
3. **Swap:** `swap` via the router contract.
**Update Token**:
1. **Info:** `setMetadata` via the token contract.
2. **Taxes, etc.:** `setProjectTaxRateAndTreasury` via the token contract.
#### Data Model
- Token Model
- Transaction Model
- User Model
#### Tech Stack: EVM Parallel Chain
- [Substrate](https://substrate.io/vision/substrate-and-polkadot/) Framework
- Parachain
**Contracts**:
- **Solidity**: Implementation of smart contracts on the chain.
**GraphQL**:
- **GraphQL**: Data query and statistical services.
**Frontend**:
- **React + SDK**: Data display and interaction between users and contract
#### Core components to be deployed
- **Connect Web3 Wallet**: Users link their Web3 wallet.
- **Interact with Contracts via Frontend**: Users interact with contracts through the front end.
- **Launch Various Types of Tokens**: Users can launch multiple types of tokens.
- **Buy or Sell Tokens**: Users can buy or sell tokens.
- **Update Token Information**: Users can update token information.
- **Request Token and Statistical Data via GraphQL**: Users can request token data and statistics through the front end using GraphQL.
#### Our research
- Our research paper on Bonding Curve and Burve Protocol was first presented at the EBES Conference, April 18-20, 2024, Berlin, Germany. Read [the Whitepaper here](https://burve.io/papers/Whitepaper_BurveLabs.pdf).
#### Expectation
- We will not limit users to use the app except those in OFAC countries.

### Ecosystem Fit
**Where and how does your project fit into the ecosystem?**
Burve Protocol fits into the Polkadot/Substrate/Kusama ecosystem as a versatile automated market maker (AMM) protocol designed to support a broad range of crypto use cases. Our protocol is open to all users, allowing anyone to create tokens and freely exchange them with anchor tokens. Specifically, we target blockchain projects, communities, key opinion leaders (KOLs), and general crypto users within the ecosystem.

**Who is your target audience?**
Our target audience includes:
- Blockchain projects seeking efficient token creation and exchange solutions.
- Crypto communities aiming to grow and empower themselves through fair token launches.
- Key Opinion Leaders (KOLs) who want to engage their followers with unique token offerings.
- General crypto users looking for easy token creation and trading opportunities.
- Parachains in the Polkadot ecosystem need services to maximize their use cases, enabling more users to onboard, interact with their chains, and increase on-chain transaction volume.
**What need(s) does your project meet?**
Burve Protocol addresses several key needs:
- Easy creation of memecoins and any governance tokens.
- LP-less (liquidity pool-less), unruggable, fair, and instantly tradable token launches.
- Empowerment of community growth through token launches.
- Enhancement of Polkadot ecosystem DOT utility.
**How did you identify these needs?**

The need for fair token launches and community empowerment is evident from recent trends in the crypto market. The success of Bitcoin ordinals and Solana memes, both achieving over 100 times user growth, highlights the demand for fair launch platforms. 

For small projects, token launches are crucial for securing basic funding and growing their communities. Traditional ICOs are often out of reach due to size and volume requirements, and IDOs require initial liquidity, which small projects cannot afford. Thus, they need an alternative funding method that Burve Protocol provides.

For larger projects, enhancing token utility is a persistent challenge. Despite commercial success, such as Uniswap's revenue reaching $3.602 billion in April 2024, token prices may not reflect this success (e.g., Uniswap's UNI token price is around $9 now, down from over $42 in 2021). This gap underscores the need for better utility enhancement mechanisms, which Burve Protocol aims to address.

Communities can also benefit by launching their memecoins or governance tokens to facilitate growth and transition to DAOs.
**Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**
While there are launchpad projects in the Polkadot ecosystem, none offer the unique features of Burve Protocol. Our innovative use of bonding curve theory provides a fair, LP-less, unruggable, and effective token launch solution, alongside a unilateral liquidity management DEX solution.

**Are there any projects similar to yours in related ecosystems?**
In related ecosystems, similar needs are partially addressed by projects like Uniswap and Balancer, which focus on providing liquidity pools and decentralized exchanges. However, these projects do not fully tackle the initial liquidity challenges and manipulation risks that Burve Protocol aims to solve with its unique approach to bonding curves and fair token launches.


## Team :busts_in_silhouette:

> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members
- Patrick (Co-Founder)
- AK (Co-Founder)
- Carl, Wurst, Kari, and other core-Contributors

### Contact
- **Contact Name:** Burve Help
- **Contact Email:** info@burve.io
- **Website:** https://burve.io/

### Legal Structure
- **Registered Address:** Sea Meadow House, P.O. Box 116, Road Town, Tortola, British Virgin Islands
- **Registered Legal Entity:** Launch Labs Co, Ltd.

### Team's experience
Our team comprises seasoned professionals with extensive backgrounds in both Web2 tech and Web3 blockchain sectors. Below, we highlight the key team members and their relevant experiences, alongside some noteworthy projects they have contributed to:
**Patrick (Co-Founder)**
- Former core-team member of a Binance-listed Project.
- Formerly worked at Meta and then at Litentry
- Alumnus of the University of Alberta.
**AK (Co-Founder)**
- Former core-team member of a Binance-listed Project.
- Co-founder of DIN, a BinanceLabs-invested Project
- Holds a PhD in Economics and a Master's Degree in IT.
- Experiences in Google and UC Berkeley.
**Carl, Wurst, and more (Core Contributors)**
- Former core developers in Binance-listed Projects.
- Experience from Tencent, Audi, and Hong Kong University.

**Previous Grant Applications**
Both Web3Go and Litentry have applied for Web3 Foundation Grants, DIN (prev. Web3Go and Litentry, with [Web3Go Technology PTE. LTD](https://sg.linkedin.com/company/web3go-technology-pte-ltd) and [Litentry Technology Gmbh](https://www.linkedin.com/company/litentry/) respectively. No current Burve Protocol team members have individually applied for a Web3 Foundation grant, so this is our first time filling out Web3 Foundation Grants. Still, we have valuable insights from our involvement in similar projects.

### Team Code Repos
- https://github.com/BurveProtocol/burve-contracts
- https://github.com/BurveProtocol/burve-graph

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.
- Patrick: https://github.com/pxc23
- AK: https://github.com/akburve

### Team LinkedIn Profiles (if available)
- Patrick: https://www.linkedin.com/in/patrickcajinacortez/
- AK: https://www.linkedin.com/in/alvis-kaiser-69952341/


## Development Status :open_book:
- Our research paper on Bonding Curve and Burve Protocol was first presented at the EBES Conference, April 18-20, 2024, Berlin, Germany. Read [the Whitepaper here](https://1657845912-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6RiyXfoC1Jp6FAmPYnBh%2Fuploads%2FfKqzixWxk15OgcKC8Glo%2FWhitepaper_BurveLabs.pdf?alt=media&token=93679f85-4e5b-490c-a2ed-ebecb6e46385).
- [Burve Version 1.0](https://burve.medium.com/unlock-fairness-burve-protocol-version-1-0-launching-in-february-2024-c6f9666f28ae) and [Burve Version 2.0](https://medium.com/@burve/burve-protocol-v1-1-unveiled-expanding-horizons-with-fomo-voting-and-enhanced-token-flexibility-98ddbaa4b9ec)
- [Burve Version 1.0 interface](https://v1-app.burve.io/)
## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):**  2,5
- **Total Costs:** 30,000 USD

### Milestone 1 Example — Smart Contract Implementation and Product Launch
- **Estimated duration:** 2.5 month
- **FTE:**  2,5
- **Costs:** 18,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
|      1.| Smart Contract Implementation  | Complete the development and deployment of a smart contract using Polkadot and Substrate frameworks. The smart contract is available for access within the provided GitHub repository. |
|      2. | Product Launch | Deploy and launch the smart contract on Acala and Statemine Parachains using Substrate.|
|      3. | HODL Mode Support  | Implement HODL mode allowing users to set tokens’ linear or exponential curve parameters for token launch. |
|      4. | Features Implementation | Integrate key features into the smart contract, including pre-mint, scheduled trading option, selectable anchor tokens (DOT, USDT, and proposed anchor tokens by Polkadot users), community FOMO or FUD vote, and fixed/adaptive max supply setting option. |
|      5. | Factory and Bonding Curve Smart Contracts | Develop factory smart contract and bonding curve smart contract for Polkadot's parachain.|
|      6. | Security Audits  | Conduct 2x third-party security audits to ensure the smart contract's reliability and security.|


### Milestone 2 Product Feature Enhancement and Growth

- **Estimated Duration:** 1.5 month
- **FTE:**  2,5
- **Costs:** 12,000 USD

| Number | Deliverable   | Specification |   
| -----: | ----------| ----------------|
|      1 | Burve API for Trading Routing| Launch the Burve API for trading routing on Polkadot.  |
|      2 | LOL Mode Support | Implement LOL mode where users do not need to set parameters; once a $33k market cap is reached, the token will automatically migrate to popular DEX(s) on Polkadot to create an LP and achieve a 3x to 5x price increase. |
|      3 | TG Bot Integration  | Develop a TG bot for tracking and managing token launches, sales, and purchases in Polkadot. |


## Future Plans
### Long-Term Maintenance and Development Financing

To ensure the long-term sustainability and continuous development of our project, we have established a robust financial strategy based on multiple revenue streams:

- **Protocol Fees from Burve Launchpad:** Our primary source of revenue will be the protocol fees charged on transactions. For the HODL Token, we will collect 1% of the transaction volume, while for the LOL Token, we will collect between 1% and 2% of the transaction volume. These fees will provide a steady income stream, directly tied to the platform’s usage and success.
- **Liquidity Fees:** By providing liquidity in decentralized exchanges and liquidity pools, we will earn liquidity fees. This not only supports the platform’s financial health but also contributes to the stability and efficiency of the token ecosystem.
- **SDK Fees:** We will monetize our Software Development Kit (SDK) by charging a 5% fee on the revenue generated by users who integrate our SDK into their applications. This incentivizes widespread adoption and integration of our technology while generating additional revenue.

This diversified approach to revenue generation ensures that we have the necessary financial resources to maintain and enhance our platform over the long term.

### Short-Term Plans: Use, Enhancement, and Promotion

**Project Outreach:**
- We plan to enhance project outreach through strategic collaborations with the Polkadot Foundation and the Polkadot Ecosystem.
- Engaging key opinion leaders (KOLs) and influencers to promote our project within the crypto community.
- Implementing community education programs to raise awareness and understanding of our platform’s unique features and benefits.

### Long-Term Plans and Intentions

**Continuous Feature Updates:**
- We are committed to continuous feature updates to ensure a smooth user experience and to foster innovation in DeFi within our platform.
- Regularly incorporating user feedback to improve and expand our platform's functionality.

**Collaboration and Integration:**
- Collaborating with other projects within the Polkadot ecosystem to ensure interoperability and enhance our platform’s capabilities.
- Exploring partnerships with emerging projects to integrate new technologies and features that align with our vision.

**Sustained Innovation and User Engagement:**
- Maintaining a focus on sustained innovation to keep our platform at the forefront of the crypto space.
- Implementing long-term user engagement strategies to build a loyal and active community around our platform.

By leveraging these strategies, we aim to ensure the long-term success and sustainability of our project, continually enhancing its value proposition for all stakeholders involved.


## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDT/USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDT))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.
- Our co-founders have experience in Web3 Foundation funded projects, one is a core member of Litentry, and another is the ex-co-founder of DIN (ex-Web3Go), so they know of the program.
- Burve Protocol is based on Burve team's [academic research](https://burve.io/papers/Whitepaper_BurveLabs.pdf) on bonding curve theories and then implemented in the crypto space, so as a launchpad, it is innovation-driven with a user-friendly interface.
