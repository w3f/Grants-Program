# [Profond.ai](http://Profond.ai) - No Code Builder for artists and developers to build, validate, and scale their dApp.

- **Team Name:** Profond AI, Corp.
- **Payment Address:** 0x92710b669eA59b348cfbe6dcA8682DAabfB5f06A (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

[Profond.ai](http://profond.ai/) is web3 tools to help developers and creators to build, validate, and scale their dApps. We provide smart contract builder (NFT and token), analytic, and indexer. 

We’re focusing on emerging chain and we aim to onboard millions of developers by making it easier onboarding for users to create smart contracts.

### Project Details

We’re inspired by [Pagoda.co](http://Pagoda.co), no code builders in the Near Ecosystem. It provides:

1. No Code Builder: Create smart contracts for Token and NFT
2. Indexer (coming soon): To help successful projects and enterprises scale their dApp.
3. Analytics (coming soon): Data analytics for smart contracts, covering volume, users, transactions, and gas fees.
4. API Analytics (coming soon): To get data from analytics.

Currently, we’re building MVP for users to create NFT and Token. Analytics, API and Indexer is still under development.

We’re planning to add more parachains from Polkadot and Kusama to our platform. Here’s our current MVP: [http://console.profond.ai/](http://console.profond.ai/)

<img width="1728" alt="Create NFT Collection" src="https://user-images.githubusercontent.com/81077632/232679169-a0c4e372-10d0-4dae-8cd0-ad134c69f89d.png"/>

<img width="1727" alt="NFT Tools" src="https://user-images.githubusercontent.com/81077632/232679206-2d43c455-5a3b-4742-b371-7ac949c3b2cf.png"/>
NFT Tools, currently require users to manually upload the collection via NFT-Up, we’re working to make it drag&drop

![Untitled (2)](https://user-images.githubusercontent.com/81077632/232679334-a4c46b51-14e5-4be9-8c56-99a4c32152b2.png)
Token/Coin tools. We’re looking at the example when we creating 1 million XOIN token (see “Coin Minting” section)

<img width="1529" alt="Analytics" src="https://user-images.githubusercontent.com/81077632/233577845-2255131f-b7d8-4137-85f6-56998987d694.png"/>
Example of smart contract analytic. In this image, we’re doing analytic on marketplace.paras.near.

### Ecosystem Fit

We aim to launch on Polkadot and Kusama, here’s what problem we’re trying to solve:

- For creators, creating a smart contract for their NFTs and tokens is hard. Especially in relatively new WASM smart contracts like ink! .
- For UI developers, blockchain development is too complex. Furthermore, each chain has its own complexity.
- Limited tooling for Polkadot and Kusama ecosystem.
- For emerging chain, we help them create smart contract templates.

## Team :busts_in_silhouette:

### Team members

- CEO & Founder: Adhiguna Mahendra
- Product Lead & Founder: Ekki Rinaldi (Ekki)
- Full-stack Developer & Founder: Rizky Irfianto (Irfi)
- Database Engineer & Founder: Bagas Prakasa
- Full-stack Developer: Ade Yusup
- Smart Contract Engineer: Amajid Sinar (Jedi)
- Business Development: Vincent Salaka

### Contact

- **Contact Name:** Ekki
- **Contact Email:** ekki@profond.ai
- **Website:** https://profond.ai

### Legal Structure

- **Registered Address:** 2810 North Church Street, Wilmington, Delaware 19802
- **Registered Legal Entity:** Profond AI, Corp.

### Team's experience

Our founders we’re building the biggest NFT marketplace in the Near ecosystem (Paras NFT Marketplace) and recently integrated with Astar Network. As builder and part of NFT community, we understand what builders need (especially FE engineer) and for artist who want to launch their on NFT. Our team led by tech veteran who had experience working in Silicon Valley, Adhiguna Mahendra, with 20+ years of experience.

We helped grow the NEAR NFT ecosystem by contributing to NFT with open-source projects such as NFT smart contract standard, marketplace smart contract, vesting smart contract, and so on as you can see on the project’s repo: [https://github.com/parasHQ/](https://github.com/parasHQ/)

Here’s our recent works:

Paras Launchpad: [https://launchpad.paras.id/](https://launchpad.paras.id/) - NFT Launchpad in Astar using ink!

Arkana Raffler: [https://arkana.gg/](https://arkana.gg/)

Pipapo Ticketing System: [https://pipapo.io/](https://pipapo.io/)

### Team Code Repos

- [https://github.com/emarai](https://github.com/emarai)
- [https://github.com/ekkirinaldi](https://github.com/orgs/profondHQ/people/ekkirinaldi)
- [https://github.com/bagasprakasa](https://github.com/bagasprakasa)
- [https://github.com/internnos](https://github.com/internnos)
- [https://github.com/adeyusupp](https://github.com/adeyusupp)

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/adhigunamahendra/](https://www.linkedin.com/in/adhigunamahendra/)
- [https://www.linkedin.com/in/bagasprakasa/](https://www.linkedin.com/in/bagasprakasa/)
- [https://www.linkedin.com/in/irfianto/](https://www.linkedin.com/in/irfianto/)
- [https://www.linkedin.com/in/amajidsinar/](https://www.linkedin.com/in/amajidsinar/)
- [https://www.linkedin.com/in/ekkirinaldi/](https://www.linkedin.com/in/ekkirinaldi/)
- [https://www.linkedin.com/in/vincentsalaka/](https://www.linkedin.com/in/vincentsalaka/)
- [https://www.linkedin.com/in/adeyusupp/](https://www.linkedin.com/in/adeyusupp/)

## Development Status :open_book:

PoC → Here’s our current MVP [http://console.profond.ai/](http://console.profond.ai/)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** $10.000

### Milestone 1 — No code smart contract builder

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide documentation page on how to create NFT (PSP34) and FT (PSP22) smart contract with our interface. API documentation for project settings will also be provided.  |
| 0c. | Testing and Testing Guide | All functions will be covered with full integration test, testing guide will also be provided. |
| 0d. | Article | We will publish an article that explains the no code builder |
| 1. | No Code NFT Creation (ink!) | Allows users to create NFT collection smart contract (PSP34) using ink! in one of WASM supported Parachains. User will be able to login with Polkadot Wallet (SubWallet, polkadot.js, Talisman) and then deploy smart contract with provided code hash. The code hash will be uploaded using selected templates from OpenBrush PSP34 Smart contract. We are abstracting the technical details from users, users just need to upload NFT images, set metadata, and pay gas fee to deploy the smart contract. We will be using useInkathon for wallet and transaction, Next.Js for frontend framework, and OpenBrush for smart contract templates.  |
| 2. | No Code Fungible Token Creation (ink!) | Allows users to create NFT collection smart contract (PSP34) using ink! in one of WASM supported Parachains. User will be able to login with Polkadot Wallet (SubWallet, polkadot.js, Talisman) and then deploy smart contract with provided code hash. The code hash will be uploaded using selected templates from OpenBrush PSP22 Smart contract. We are abstracting the technical details from users, users just need to set metadata and pay gas fee to deploy the smart contract. We will be using useInkathon for wallet and transaction, Next.Js for frontend framework, and OpenBrush for smart contract templates.   |
| 3. | Project Management Module | Allows users to create more than one projects. We are using NestJS for backend framework. |
| 4. | Multichain Integration | Allows users to choose between Polkadot Parachains and Kusama |

### Milestone 2 Example — Analytics and API

- **Estimated Duration:** 1 month
- **FTE:** 2
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide documentation page on how to create basic NFT collection (PSP34) using our no-code builder and creating a fungible token (PSP22).  |
| 0c. | Testing and Testing Guide | All functions will be covered with full integration test, testing guide will also be provided. |
| 0d. | Article | We will publish an article that explains the analytics and API usage |
| 1. | Analytic Functionality | Add on-chain analytic for the smart contract. |
| 2.  | REST API Service | API for users to get the data analytic. |

## Future Plans

Experimenting in business model. We have two kind of ideation we want to validate:

1. Indexer service, providing RPC for dApp to cut their operational costs
2. Royalties enforcement for each NFT created.

On top of that, we aim to onboard more emerging chains and big chains like Solana and Ethereum.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
