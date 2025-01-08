# Hydrapad.com

- **Team Name:** Hydrapad
- **Proposal Category:** Polkadot Substrate Integrations
- **Individual or Entity Name:** Matthew Lopez
- **Payment Address:** 12xpxZCvzFyMqA2qsE77GYMJZqjRt1usRfSuiRbYgv7ujozk (DOT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

### Project Overview :page_facing_up:

#### Intro

**Dear Grants Committee,**
We are excited to submit our grants application for the development and integration of Hydrapad on the Polkadot substrate. Hydrapad is a decentralized presale launchpad platform specifically designed to streamline the fundraising process for Web3 startups. By leveraging the unique capabilities of Polkadot, our platform will offer a seamless, transparent, and secure environment for startups to raise capital while providing investors with greater confidence in their investments. This integration will not only enhance the efficiency of fundraising but also promote the growth and adoption of Web3 technologies in a decentralized ecosystem.

#### Project Ideation & Details

Hydra Launchpad is integrated with top tier security features with Bonded Curve Presale Contract with live trading for users & investors. A Bonded Curve Presale Launchpad differs from a Normal Presale Launchpad primarily in how the token price behaves during the presale and the mechanics of token distribution. While both types of launchpads help raise funds for blockchain projects by allowing early investors to buy tokens before they are listed publicly, their key difference lies in the pricing model, investors benefits and incentive structure.
We aim to build Hydrapad on the Polkadot Substrate framework, leveraging the scalability, interoperability, and security of Polkadot to provide a seamless experience for both project creators and investors. Our platform addresses key pain points in blockchain fundraising for startups, investors, and developers.

#### Product Scope

- **Presale Launchpad:** A simple and intuitive interface for startups to create, manage, and customize presales for their tokens, enabling projects to raise funds in a decentralized manner while ensuring transparency and fairness.

- **Polkadot/Substrate:** Hydrapad will be built on the Polkadot Substrate framework to ensure scalability, security, and interoperability with other parachains. The unique benefits of Substrate, including modularity and upgradability, allow us to deliver a flexible, secure, and future-proof platform.

- **Bonded Curve Mechanism:** The bonded curve will ensure a fair pricing structure during token presales. The curve dynamically adjusts the price based on the quantity of tokens sold, incentivizing early participation while maintaining price stability and reducing manipulation.

- **Live Token Trading:** Investors can trade presale tokens in real-time, allowing for instant liquidity during the presale phase, providing a market-driven approach that benefits both the startup and the investor.

- **Security and Transparency:** Hydrapad ensures transparency through decentralized smart contracts that govern token sales, reducing risks of fraud and increasing user trust. All transactions are verifiable and auditable on the blockchain.

- **Interoperability with Polkadot:** Fully integrated into the Polkadot ecosystem, Hydrapad allows seamless interaction with other parachains, offering a decentralized, cross-chain environment for presales and token launches.

- **Token Creation:** Startups can easily create custom tokens for their projects directly through the Hydrapad platform. This feature enables the creation of tokens with predefined tokenomics, facilitating the setup of presales in a seamless and user-friendly manner.

- **Token Locking:** Projects and investors can lock tokens for a defined period, enhancing trust and preventing early sell-offs. Token locking can be applied to both presale funds and tokens issued during the presale phase, ensuring long-term commitment from the project team and investors.

- **Portfolio Management for Users:** Users can manage and track their investments and token holdings in a comprehensive portfolio dashboard. This feature will provide real-time updates on presale participation, token performance, and overall portfolio value, making it easier for users to monitor their assets.
Airdrops: Hydrapad allows users to easily conduct token airdrops as part of their marketing and community-building strategies. This feature allows projects to distribute tokens to a targeted group of users, helping to build momentum and reward loyal supporters.

- **Secure Liquidity Management:** Hydrapad incorporates secure liquidity management tools, enabling projects to provide liquidity pools for their tokens and ensuring that tokens are readily available for trading. This feature also allows projects to manage the liquidity of presale funds in a secure, transparent manner, ensuring proper token flow and liquidity during the presale phase.

#### Problem Statement

Many startups face challenges when raising initial capital, especially in decentralized ecosystems where token presales can be manipulated by large investors or whales. Traditional presale methods suffer from inefficiencies, such as front-running and unequal access to token allocations. Moreover, investors are often uncertain about the token pricing mechanisms and their long-term value.

- **Liquidity Issues:**
Traditional presales often lack liquidity, as tokens are locked until later stages. Our platform allows live trading of presale tokens, providing liquidity and flexibility to investors.

- **Volatile Pricing:**
Presale token prices can be unpredictable and manipulated. We solve this with a bonded curve pricing model that gradually adjusts token prices based on supply and demand, ensuring fairness and stability.

- **Fees/cost:**
Early fundraising can be costly for startups building their own project. Our platform ensures low to No fees for presale creation and scalable transactions, making presales more accessible.

- **Lack of Transparency:**
Many investors face trust issues in presales. Our transparent bonded curve model ensures fair pricing, fostering trust among participants.

#### Solution & Benefits to the Polkadot Ecosystem

- **Decentralized Capital Raising:** 
The Bonded Curve Presale contract is a trustless and decentralized way to raise funds. It eliminates the need for centralized authorities or intermediaries, empowering project creators to directly raise funds from their community. 

- **Global Accessibility:**
Anyone with an internet connection can participate in these presales, providing global access to Web3 fundraising. This democratizes the ability for users to support and invest in projects regardless of geographic location.

- **Building Communities Around Projects:** 
The contract encourages community-driven participation, as early backers are rewarded with lower prices and a stronger stake in the project’s success. This builds an invested community around the project that has both financial and reputational incentives to see it succeed. 

- **Integration with DeFi:**
The contract integrates seamlessly with DeFi protocols like Uniswap and Balancer, which are foundational to the Web3 ecosystem. By creating liquidity pools post-presale, the project ensures that tokens have immediate utility and market value, fostering broader DeFi adoption. 

#### Automatic Liquidity Pool Creation 

- **Ensuring Liquidity:**
One of the major challenges in DeFi projects is liquidity. The contract automatically wraps the ETH raised and pairs it with the presale token to create a liquidity pool on decentralized exchanges. This feature ensures that the token is tradable immediately after the presale ends, providing liquidity to the market and enabling price discovery. 

**No Control Over Funds by the Creator (No Centralized Control)**

- **Presale Funds Are Secure:**
In a typical rug pull, the project creator retains control over the raised funds and may drain them at any time. In this contract, the funds raised (in ETH) are not directly controlled by the project creator; rather, they are securely handled by the contract itself. 

- **Automatic Fees and Refunds:** 
The presale includes automated functions for fee collection, token distribution, and refunds. If the presale fails (e.g., fundraising target is not met), users can automatically reclaim their ETH in proportion to their contribution, preventing the project creator from absconding with the funds. 

![Product Architecture](https://i.ibb.co/jGCPMNX/Screenshot-590.png)

#### KPIs for Impact Estimation:
We believe that our Dapp integration will bring measurable value to both our platform and your ecosystem. Key performance indicators (KPIs) to estimate the impact include:

- **Transaction Volume:** Volume-based metrics such as the Total Gross Transaction Volume (GTV) and send/receive transaction volume on the platform.

- **User Growth:** We project to onboard 100,000 active users by the end of Year 1, including investors and project teams, driving adoption of Neo network for presale transactions.

- **Liquidity and Trading Activity:** We are expecting that new projects launch will lead to increased trading volume and liquidity within your ecosystem.

**Why we want to build on Polkadot**

- Polkadot’s unique multi-chain framework offers an unparalleled advantage in terms of interoperability. With its relay chain and parachains, Polkadot enables seamless communication between different blockchains. For a bonded curve launchpad, where assets and liquidity need to be bridged across various ecosystems, Polkadot’s cross-chain capabilities are a natural fit. This ensures we can facilitate broader participation and integration with different blockchain communities, making our platform more accessible and scalable.

- Substrate's modular framework allows us to customize the blockchain layer according to our needs, especially as we design a bonded curve mechanism for our launchpad. Substrate’s flexibility in governance, consensus mechanisms, and runtime modules makes it easy to tailor the platform's features while maintaining high performance. This adaptability means we can innovate rapidly and efficiently.

- Polkadot’s parachains can scale independently, enabling our project to grow alongside the broader ecosystem. By utilizing Polkadot’s infrastructure, we can ensure that our launchpad can handle increased transaction volumes as our user base and features expand, without compromising performance or decentralization.

#### Technology Stack

- Blockchain: Polkadot, Substrate, ink! smart contracts, Oracles (Chainlink/ Band)
- Frontend: React.js, Polkadot.js API, Polkadot.js Wallet
- Backend: Node.js, PostgreSQL, Redis, GraphQL/REST API
- Infrastructure: Substrate Nodes, IPFS
- Security: SSL, Polkadot's security model, smart contract audits
- DevOps: GitHub Actions.
- Monitoring: Mixpanel

**Technical Details: Smart Contract Language and Integration on Polkadot**

For the smart contract component of the launchpad, we will use Ink!, which is a Rust-based programming language designed for writing WebAssembly (Wasm) smart contracts on Substrate-based chains. Ink! is highly optimized for Substrate and enables us to deploy smart contracts directly on Polkadot parachains, ensuring both security and performance. It's well-suited for our use case because it allows us to build flexible complex logic, while also taking advantage of the native Polkadot parachain infrastructure for scalability and cross-chain functionalities.

- By integrating with parachains, we can ensure cross-chain liquidity and asset transfers, which are crucial for a launchpad that needs to interact with multiple ecosystems (e.g., different token standards, DEXs, or other decentralized projects).

- For cross-chain communication, we plan to utilize XCMP (Cross-Chain Message Passing) to facilitate trustless interactions between parachains or the Polkadot relay chain.

- By using Wasm smart contracts (via Ink!) and Substrate’s native architecture, our launchpad will benefit from the security and performance optimizations of Polkadot and Substrate. Ink! contracts are executed in the Polkadot runtime environment, ensuring that they inherit the security guarantees and consensus mechanisms of Polkadot and its parachains.

- The substrate runtime also ensures that our smart contracts are highly efficient and can be executed in a gas-efficient manner, reducing unnecessary costs for users interacting with the launchpad.

- Polkadot’s ecosystem provides future-proof integration with other blockchain ecosystems, and through its bridges (e.g., with Ethereum, Bitcoin, or Cosmos), our launchpad could potentially support token sales, liquidity pools, and other activities across various blockchain networks. This is a critical advantage of building on Polkadot, as it aligns with our goal of creating a highly interoperable launchpad.

#### Team members: 

The Hydrapad team is composed of experienced blockchain developers, Community Builders and entrepreneurs with a strong background in web3 ecosystem.

1. Matthew Lopez
2. Angela Tomas (Steffens) 

#### Contact

- **Contact Name:** Matthew Lopez
- **Contact Email:** hello@hydrapad.com
- **Website:** https://hydrapad.com

#### Legal Structure

- **Registered Legal Entity:** Hydrapad operates under White Hat DAO LLC.
- **Registered Address:** PO Box 852, Long Island Rd Majuro, Marshall Islands MH 96960
- **Entity Type:** Non-Profit DAO LLC.
- **Registery of Legal Entity Check:** https://registry.midao.org/public-registry/
- **Registration Number:** 10056-24

#### Team's experience

1. Angela Stefans is a blockchain developer with 5+ years of experience in Rust, Solidity, and WASM, specializes in scalable dApps and smart contracts. He has led successful projects, trained developers, and focuses on leveraging blockchain for community empowerment and innovative DeFi solutions. Previously worked at Unlock Protocol.

2. Matthew Lopez is a blockchain strategist skilled in ecosystem growth and community adoption. He specializes in creating sustainable models for scalable blockchain solutions. With extensive experience in education, hackathons, and financial inclusion, he bridges emerging technologies with underserved region

#### Team Code Repos

- https://github.com/orgs/HYDRAPAD-LAUNCHPAD/

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/orgs/HYDRAPAD-LAUNCHPAD/people/wonderwomancode - Angela Steffens
- https://github.com/hydrapad - Matthew Lopez

#### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/wonderwomancode/

#### Development Status:

- https://github.com/HYDRAPAD-LAUNCHPAD/hydrapad This is the Hydrapad Frontend implementation. (Currently for EVM) Polkadot Integration coming soon.
- https://github.com/HYDRAPAD-LAUNCHPAD/hydrapad-smart-contracts-EVM This is Hydrapad EVM compitable Solidity Contract, However Polkadot Substrate Contract will be written in ink! smart contracts (for WASM) or pallet-based solutions. (Coming soon). 

#### Development Roadmap:

Polkadot Substrate Integration, Web App

- Product Functionalities can be viewed at: https://hydrapad.com (Currently on EVM)
- Total Estimated Duration: 3 months
- Full-Time Equivalent (FTE): 4 FTE

------------------------
- Milestone 1 –  Research & Design (Completed)

Finalize the project architecture and design, Research bonding curve mechanisms and presale dynamics, Collaborate with Polkadot ecosystem developers for integration strategies.

- Milestone 2 – Initial Platform integration for Polkadot Substrate (Duration 5 weeks) by Jan 30th 2025

Development of functionalities for front-end user interface and backend infrastructure for Polkadot.

- Milestone 3 – Contract Development & Security Audits(5 weeks) by Feb 30th 2025

Develop the bonded curve mechanism into the presale contract, Factory Contract development for Token Creation, Regular Presale Contract, Locking/Vesting Contract, Airdrops Contract, Conduct initial tests with selected partners and projects.

- Milestone 4 – Testnet & Mainnet Launch (by March 15th 2025)

Finalize platform for mainnet launch, Focus on user acquisition, education, and community building, Host a series of AMAs and events to promote Hydrapad and educate the ecosystem about bonded curve presale models.

------------------------


| Number | Deliverable                 | Specification                                                                                                                                                                                                                                                                                                  |
| -----: | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                     | MIT/Apache-2 dual-license                                                                                                                                                                                                                                                                                                        |
|    0b. | Documentation               | We will offer comprehensive support for users by providing both inline documentation within the code and a straightforward tutorial. The tutorial will guide users through the process of spinning up one of our Substrate nodes and executing test transactions. This hands-on example will demonstrate how the new functionality works, helping users to quickly understand and interact with the system.                                                                  |
|    0c. | Testing Guide               | Core functions will be thoroughly covered by unit tests to ensure both functionality and robustness. The guide will include detailed instructions on how to run these tests, allowing users to easily verify the correctness and reliability of the system. This will provide an additional layer of confidence and transparency, ensuring that the implementation meets the highest standards of quality.                                                                                                                                                              |
|    0d. | Docker                      | We will provide a Dockerfile (or set of Dockerfiles) that can be used to easily test all the functionality delivered with this milestone. This will enable users to quickly set up a consistent testing environment, ensuring that they can validate the new features and functionality in an isolated and reproducible manner. The Dockerfile(s) will simplify the process of testing, making it more accessible and efficient for developers and testers alike.                                                                                                                                                                                                  |
|    0e. | Article                     | We will publish an article or workshop that provides an in-depth explanation of our advertising workflow, along with detailed technical insights. This resource will walk users through the entire process, from the high-level overview to the underlying technical aspects, helping them understand how the workflow is structured and how it can be leveraged effectively.                                                                                                                                                                                                   |
| **Milestone 1:** | **Project Architecture, Bonded Curve Mechanism Research, Polkadot Ecosystem Integration Strategy** (Completed)                  | Finalized platform design, focusing on integrating with Polkadot Substrate, Detailed research on bonded curve mechanisms for presale dynamics, Collaboration with Polkadot ecosystem developers to define integration strategy.                                                                                                                                                                                                                           |
| **Milestone 2:**| **Initial Platform Integration for Polkadot Substrate.** Duration: 5 weeks (Completion by Jan 30, 2025)          | **Frontend Integration:** Initial integration of frontend user interface with Polkadot, using Polkadot.js API. **Backend Infrastructure Setup:** Backend integration for managing presale data and token mechanics using Polkadot Substrate. **Core Functionality:** Implement token creation and presale management systems on Polkadot. **User Testing and Feedback:** Initial tests with a select group of users to validate platform functionality and address any issues.                                                                                                                  |
|**Milestone 3:**|  **Contract Development & Security Audits** Duration: 4 weeks (Completion by Feb 30, 2025) | **Bonded Curve Presale Contract:** Development of the presale contract using Substrate-based smart contracts (ink!). **Factory Contract for Token Creation:** A contract enabling startups to create tokens for their presale events. Presale, Locking, Vesting & Airdrop Contracts: Development of smart contracts for managing presale events, token locking, token vesting, and airdrops. **Security Audits:** Third-party audits of all smart contracts to ensure safety and security. **Testnet Deployment:** Deployment of contracts on the testnet and internal tests for contract functionality and security.                                                                                                                             |
| **Milestone 4:** | **Testnet & Mainnet Launch**  Duration: 2 weeks (Completion by March 15, 2025) | **Testnet Launch:** Final testing of platform and contracts on the testnet, involving select projects to ensure smooth functionality. **Mainnet Launch:** Full deployment of the platform on the Polkadot mainnet with live presales. User Acquisition & Community Building: Launch of marketing campaigns, AMAs, and events to build the community around Hydrapad. Documentation & Tutorials: Detailed documentation, including a tutorial for presale creation and platform usage. **User Dashboard:** Launch of a user dashboard to manage investments, presales, and tokens.
                                                                                        

#### Funding Request

We are requesting a grant of $30000 for integration & development on Polkadot Substrate.

#### This funding will cover the following:

- Development Costs: Smart contract development. 5x Contracts ($12000).
- Front-end and back-end Integration for Polkadot Substrate ($5000).
- Security audits ($8000).
- Operational Costs: Server hosting, platform maintenance ($3000).
- Promotion and Partnerships: Growing the Hydrapad brand and establishing partnerships with early-stage startups and projects ($2000).

#### Future Plans

Hydrapad aims to transform the blockchain fundraising landscape, positioning itself as the ultimate platform for startups seeking capital through presale events. Leveraging Polkadot Substrate’s scalability and interoperability, Hydrapad is committed to providing a secure, user-friendly, and decentralized ecosystem for both startups and investors. The future of Hydrapad will focus on growth, innovation, security, and community involvement, with a vision to become the leading launchpad for blockchain projects.

**Platform Expansion and Ecosystem Growth**
- Cross-Chain Integration
A significant part of Hydrapad's future lies in its ability to integrate with multiple blockchain ecosystems. Polkadot’s interoperability allows Hydrapad to connect with Ethereum, Binance Smart Chain, Solana, and other blockchain networks. This expansion will enable startups to raise funds from a global, multi-chain pool of investors, enhancing liquidity and exposure for presale projects.

- Innovative Token Launch Models
Hydrapad will refine its presale model by incorporating diverse tokenomics. This includes dynamic pricing based on supply-demand curves, fixed price auctions, and token vesting to ensure long-term sustainability and reduce risks of token dumping. Such innovations will create a fairer and more flexible environment for both investors and developers.

**User Empowerment and Decentralized Governance**
- DAO Integration for Governance
Hydrapad will integrate a Decentralized Autonomous Organization (DAO), empowering its community to influence decision-making processes. Community members will vote on which projects to list, fee structures, and even platform upgrades. This decentralized approach ensures that the platform remains aligned with user interests, promoting transparency and inclusivity.

- Community-Centric Features
The platform will also focus on community engagement by introducing features like referral programs, educational resources, and staking incentives. By providing tools to engage users, Hydrapad will foster a loyal and active community that drives the platform’s growth and long-term success.

**Security and Transparency**
- Smart Contract Audits
Security is critical in DeFi. Hydrapad will partner with industry-leading auditing firms like CertiK and Quantstamp to conduct regular audits of its smart contracts, ensuring the safety of investor funds and preventing potential vulnerabilities.

- Fair Distribution Mechanisms
To reduce risks such as Sybil attacks and front-running, Hydrapad will implement advanced algorithms that ensure fair presale participation. Real-time data transparency for each presale event will be available to investors, providing assurance on how funds are raised, token distribution, and overall project integrity.

**Sustainability and Long-Term Viability**
- Revenue Diversification
To secure its financial future, Hydrapad will diversify its revenue model. This includes platform fees on successful presales, premium listings for enhanced visibility, and staking opportunities for platform token holders. These measures will ensure a sustainable and scalable business model.

- Environmental Initiatives
Hydrapad will explore solutions to minimize its environmental footprint, such as using Layer-2 solutions to reduce energy consumption and partnering with carbon offset programs. This focus on sustainability will make the platform more appealing to environmentally conscious users and projects.

**Global Expansion and Institutional Adoption**
- Global Reach
Hydrapad aims to expand globally by offering multi-language support and localized payment systems. This will make it easier for startups worldwide to raise capital while ensuring that investors can participate in presales from any region. The platform will also comply with local regulatory standards to ensure legal certainty and accessibility.

- Institutional Partnerships
Hydrapad plans to attract institutional investors, venture capital firms, and blockchain accelerators. These partnerships will enhance the platform’s credibility and provide startups with greater access to funding. Hydrapad’s transparent, secure, and decentralized environment will appeal to institutional players seeking efficient blockchain-based fundraising mechanisms.

#### Additional Information :heavy_plus_sign:

We aim to foster a more open, dynamic, and fair environment for both project creators and investors in the Web3 ecosystem. It offers decentralized fundraising with a transparent mechanism, flexible participation, and a fair exit strategy for participants, all of which enhance the overall adoption and growth of decentralized finance (DeFi) projects and web3 space.

**How did you hear about the Grants Program?** 
- Personal recommendation

We are confident that, with your support, Hydrapad has the potential to drive adoption and deliver long-term value to the Polkadot ecosystem. Should you have any questions or require additional documentation, please don't hesitate to reach out. Thank you for considering our application.

Kind regards,

Hydrapad Team

hello@hydrapad.com

