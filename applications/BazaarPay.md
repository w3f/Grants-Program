# BazaarPay – Decentralized On/Off-Ramp Infrastructure 



- **Team Name:** BazaarPay
- **Payment Details:** 13EGxhQmnQ3UfVoFtXRb1Arvh2c15PoDWLZqVLpwZv1iGhvY
- **[Level]:** 2 

## Project Overview :page_facing_up:
### Overview

In Nigeria and across much of Africa innovation often outpaces regulation. Builders are pushing the boundaries of what’s possible, even as the financial infrastructure struggles to keep up. As crypto adoption grows, restrictions on digital asset transactions have created a widening gap between what people need and what the system allows. Individuals want financial freedom. Businesses need flexibility. But the bridges between stablecoins and local currencies remain fragile, opaque, or entirely missing.
That’s the problem BazaarPay was designed to solve.
BazaarPay is a decentralized, backend infrastructure layer that makes moving between fiat and crypto seamless, secure, and compliant. Starting with Nigeria, where stablecoins are already more trusted than banks by many users. It is not a wallet. It’s not a consumer app. It’s the composable engine that developers, startups, and Web3 builders need to power real-world use cases: minting and burning stable fiat tokens like mNaira, managing FX logic, and integrating fiat flows into dApps without custodial risk.
Here’s what sets BazaarPay apart:

Mint/Burn Modules (Substrate FRAME): Issue stable fiat representations like ₦mNaira using verifiable, reserve-backed logic.

Off-Chain Workers: Fetch and aggregate FX rates, manage reserves, and sync liquidity conditions in real time.

Receipt Logic: Every transaction can be logged, traced, and audited on-chain for full transparency.

Composable APIs: Built so other developers can plug in — powering a broader ecosystem of fintech tools, wallets, and marketplaces.

Whether it’s a market woman who wants to accept digital payments, a developer building a peer-to-peer remittance app, or a fintech startup launching with stablecoin support — BazaarPay gives them the rails to do it safely, locally, and on-chain.
This is why we chose to build on Substrate. Its modular design, strong governance, and Polkadot connectivity allow African projects like ours to remain sovereign while still plugging into a global blockchain future.
There is no Substrate-native, Africa-focused on/off-ramp tool today. We see BazaarPay not as another product, but as foundational infrastructure — unlocking access, trust, and opportunity across the continent.

### Project Details

BazaarPay is not another stablecoin. Instead, it connects traditional bank systems to the Polkadot ecosystem using Substrate. Our approach blends the reliability of real-world finance with the transparency of blockchain giving developers a compliant, interoperable tool to build meaningful financial services for everyday users.

BazaarPay is designed with three key components:
Substrate-based stablecoin chain: This chain mints and burns stablecoins (like mNaira) pegged to actual bank account balances.
Bank integration module: A REST API that reads real-time bank data (incoming wires, balances, etc.) and triggers mint or burn actions.
Event processor: A syncing engine that monitors both the chain and banking rails, keeping everything in balance with reliable logs and accountability.
Our system allows any user to send fiat via wire transfer and receive a corresponding amount of stablecoin on-chain and vice versa. It’s like giving any smart contract a “bank account button” no wallets or exchanges needed.

### Mockups / UI Components
BazaarPay is purely backend infrastructure. As such, it does not include UI designs or user-facing components. Our approach allows developers to build intuitive, localized user experiences on top of a secure, composable backend layer. Frontend teams will access BazaarPay on/off-ramp engine functionality through documented APIs.

##  Architecture & Key Modules

 Component            | Function                                                                                        
 -------------------- | ----------------------------------------------------------------------------------------------- 
 `StableAsset Module` | Mints, burns, and tracks stablecoin balances tied to real-world reserves                        
 `LiquidityMonitor`   | Checks available fiat reserves and prevents overdraft minting                                   
 `OracleRateFeed`     | Brings live FX rates from APIs like Binance or Flutterwave into the chain via off-chain workers 
 `ReceiptRegistry`    | Logs every transaction for audit and transparency                                               
 `RoleManager`        | Controls permissions for minting and burning actions                                            

Off-chain workers act as the vital bridge between blockchain and real-world data. They:

* Pull reliable FX rates from trusted APIs and inject them into the chain
* Monitor fiat-side bank transactions to trigger mint events
* Confirm burn events and coordinate corresponding bank wire transfers
* Maintain data mappings between blockchain wallets and bank accounts
All components are modular by design, making it easy to expand into new markets, integrate with more banks, or support additional currencies. Off-chain workers fetch external data and ensure reliability and redundancy for FX inputs, serving as the real-time bridge between on-chain logic and traditional banking systems.

## Technology Stack

| Layer                | Stack                           | Purpose                                    |
| -------------------- | ------------------------------- | ------------------------------------------ |
| Blockchain Runtime   | Substrate FRAME (Rust)          | Handles mint/burn, FX data, access control |
| Off-chain Workers    | Rust (OCW)                      | Collects FX rates, monitors reserves       |
| Middleware/API Layer | Node.js + Express / Axum        | Exposes mint/burn endpoints, auth logic    |
| FX Data Sources      | Binance, Flutterwave, Chainlink | Feed FX data into on-chain logic           |
| Testing/Tooling      | Docker, Substrate Dev Chain     | End-to-end dev/test environment            |

**Data models** include:

* `DepositEvent`: `user_address`, `amount`, `tx_hash`
* `MintRequest`: `oracle_rate`, `fiat_equivalent`, `ref_id`
* `BurnRequest`: `amount`, `clue`, `requested_by`
* `FXRateSnapshot`: `rate`, `source`, `timestamp`
* `ReceiptProof`: `hash`, `tx_type`, `block_number`
While BazaarPay is pre-code, our team has laid strong groundwork:

* Architecture diagrams demonstrating wallet → rate → mint → burn flow
* Outlined all runtime and API specs
* Conducted interviews with fintechs, agents, and crypto traders to confirm real demand

This grant will bring BazaarPay to life on Substrate tailored for Polkadot and rooted in local needs.

### Ecosystem Fit

In places like Nigeria, the need for reliable and inclusive financial tools is more urgent than ever. Many people still lack stable access to traditional banks, face rapid currency fluctuations, and operate within unclear crypto regulations. Even as Web3 adoption grows, everyday users struggle to safely move money between digital assets and their local currency.

That’s exactly where BazaarPay steps in. Within the Substrate and Polkadot ecosystem, there’s currently no decentralized tool built for this kind of real-world interoperability. BazaarPay fills this critical gap enabling seamless, on-chain movement between stablecoins and currencies like the Naira. It’s secure, non-custodial, and built for the realities of African markets.

We’re not here to reinvent finance  we’re here to make it work better for more people. Our goal is to take the multi-step, often confusing process of exchanging crypto and fiat, and reduce it to one clear path: send money, mint stablecoin. Burn stablecoin, receive money. That’s it. No exchanges and complicated onboarding.

This also opens a powerful new use case: smart contracts that can interact with fiat directly. Imagine a user sends money to a contract via wire transfer and have it back into their bank account all through on-chain logic, no wallet needed. That’s the kind of simplicity that makes BazaarPay a game-changer for communities that have long been excluded from digital finance.

### Who BazaarPay Is For

BazaarPay is built for the people building real-world solutions. It’s designed with a clear focus on usability, compliance, and modularity giving developers the tools they need to bring real financial value to underserved markets.

It’s for fintech teams in Africa who want to build trustworthy and local-first payment systems without getting buried in regulatory or technical complexity.

It’s for Substrate teams looking to launch parachains that need native support for fiat currency flows something no other protocol currently provides.

It’s for developers creating P2P platforms, savings tools, or crypto wallets who want to give their users seamless access to stablecoins and bank rails, without central custody.

### The Problems We're Solving

BazaarPay was born out of real conversations with fintech founders, crypto agents, and everyday users more than 20 interviews in total.

In Africa, there are three big challenges standing in the way of reliable crypto-fiat interaction:

1. There are no decentralized on/off-ramps. Most people can’t safely convert between stablecoins and their local currencies like the Naira. The few options that do exist are centralized, inaccessible, or non-compliant. Here, stablecoins are 1:1 backed by bank balances.

2. FX rates are unreliable and fragmented. For users and developers alike, it’s hard to build financial products when exchange rate data isn’t stable or available. BazaarPay changes that by pulling live FX data on-chain from trusted sources.

3. There’s no backend infrastructure for compliant local fintech apps. Developers want to move fast but they’re blocked by compliance requirements, technical hurdles, and a lack of modular tools.
No Substrate-based solution currently offers a reliable path from fiat to chain and back again. We’re making that path accessible, verifiable, and easy to integrate.
Stablecoins issued through BazaarPay are fully backed by real-world reserves. Burn events trigger actual payouts. And exchange rates are updated regularly and stored for transparency.

##  What Makes BazaarPay Different

We took a close look at the Substrate and Polkadot ecosystem  and found no other project doing what BazaarPay does. 

| Project     | Focus                        | What’s Missing                           |
| ----------- | ---------------------------- | ---------------------------------------- |
| Acala       | DeFi and stablecoins         | No real-world FX or fiat integration     |
| Centrifuge  | Tokenized real-world assets  | Doesn’t support stablecoin mint/burn     |
| HydraDX     | Liquidity and AMM            | Lacks fiat bridges or FX modules         |
| Kylin/Phala | Oracle & private computation | Useful, but not solving local money flow |

Outside Polkadot, services like Ramp, MoonPay, and Transak are custodial and often blocked in African markets. Others like AjiraPay are centralized and lack transparency. Celo’s Mento protocol is promising but tied to its own chain.

BazaarPay is different:

* It’s **built entirely on Substrate** — native to the ecosystem
* It’s **non-custodial** — no middlemen, users stay in control
* It’s **backed by real FX rates**, not speculative values
* And it’s **designed to plug into real-world apps** with minimal friction
We believe the future of finance on the continent will be local, digital, and community led. 



## Team :busts_in_silhouette:

### Team members

- Samson Ajah - Founder/Team Lead
- Beatrice Ajah - Co-Founder/COO
- Paschal Ojezele - Finance & Compliance Lead

### Contact

- **Contact Name:** Samson Ajah
- **Contact Email:** Samsonajahj@gmail.com
- **Website:** Your website

### Legal Structure

- **Registered Address:** B120 Jos Street, Abuja.

### Team's experience

- Samson Ajah, brings over seven years of deep technical experience in blockchain engineering and product development. He led the growth of Trust AI from its earliest stage to a peak market capitalization of $40 million and has overseen the architecture and deployment of several audited smart contract systems. His expertise spans EVM-based chains, DeFi primitives, and reputation scoring systems all of which inform BazaarPay’s design as secure, scalable infrastructure.

- Beatrice Ajah has more than a decade of experience in business development and strategic partnerships, Beatrice has driven user growth, managed community-driven fintech campaigns, and co-founded CIP (Crypto Inheritance Protocol). She brings a strong track record of ecosystem engagement and operational strategy, including achieving a 30% growth in user adoption in previous roles.

- Paschal Ojezele: Brings years of expertise in regulatory compliance, financial operations standards within both fintech and banking environments. He ensures that BazaarPay’s infrastructure meets evolving financial regulations across African markets while maintaining its decentralized ethos.

No member of the team has previously applied for a Web3 Foundation grant under a different name or entity. However, we have followed the Polkadot ecosystem closely and are excited to contribute a truly local, utility-driven infrastructure to its growing global network.
### Team Code Repos
We are currently in the pre-code phase of the BazaarPay project. While we do not have a live repository yet for the core codebase, we have completed detailed architecture diagrams, module specifications, and integration workflows. The repository will be created upon grant approval and will be kept public for transparency and community collaboration.

Below are GitHub profiles for our core team members:

[https://github.com/](https://github.com/Onyiajah)
[https://github.com/](https://github.com/samson6702)

### Team LinkedIn Profiles (if available)

[https://www.linkedin.com/](https://www.linkedin.com/in/samson-ajah-10aa03217/)
[https://www.linkedin.com](https://www.linkedin.com/in/beatrice-ajah-1a4904159/)


## Development Status :open_book:

BazaarPay is in its early build phase. While no code has been written yet, we've invested time and care into shaping a solid foundation for development. Our architecture is ready, our technical roadmap is clear, and our team is aligned on the path ahead. You can view our drive document You can view our drive document [here](https://drive.google.com/file/d/1y0xn7MNyrleI_5FDVHdwfMpMoPygJGIS/view?usp=drivesdk).


### What We've Done So Far!

* **Designed our core architecture** using modular Substrate pallets for stablecoin minting, liquidity tracking, and FX rate syncing.

* **Completed detailed system diagrams** to show how users, wallets, FX sources, and our protocol will interact.

* **Validated the need through research**, including interviews with fintech founders, market vendors, and agents working in Nigeria's informal economy.

* **Engaged with mentors and accelerators** in the blockchain-for-Africa space to refine our approach.



This grant will allow us to move from concept to code starting with the core protocol and FX logic.

## Development Roadmap :nut_and_bolt:

### Overview

### Timeline: 3 months
### Team Effort: 2 full-time developers
### Grant Request: $25,000 USD (50% in DOT, 50% in USDC)



### Milestone 1 — Core Protocol & FX Integration

### Duration: 1 month
### Cost: $10,000 USD

| #  | Deliverable       | Details                                                                                                            |
| -- | ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| 0a | License           | MIT License                                                                                                        |
| 0b | Docs              | Rust code comments + beginner-friendly guide to set up and test mint/burn flow                                     |
| 0c | Tests             | Unit and integration tests + FX mocking scenarios                                                                  |
| 0d | Docker            | Dockerfile for running the node and feeding mock FX data                                                           |
| 1  | Stablecoin Pallet | Substrate pallet for minting, burning, and tracking a fiat-pegged token with built-in permissions and FX awareness |
| 2  | Liquidity Pallet  | Tracks reserves and works with off-chain workers to enforce mint/burn safety based on available funds              |
| 3  | FX Oracle Worker  | Pulls and aggregates exchange rates from APIs like Binance and Flutterwave and updates the chain every 30 minutes  |
| 4  | Chain Config      | Custom chain setup with ready-to-run permissions and demo state                                                    |
| 5  | JavaScript Bridge | Basic JS SDK to check balances and trigger minting from a wallet                                                   |
| 6  | Article           | Plain-language blog post explaining the why and how of FX minting in Africa                                        |



###  Milestone 2 — Wallet Monitoring & Transaction API

### Duration: 1 month
### Cost: $15,000 USD

| #  | Deliverable      | Details                                                                                                   |
| -- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| 0a | License          | MIT                                                                                                       |
| 0b | Docs             | Frontend-focused guides to help devs connect with the backend                                             |
| 0c | Tests            | End-to-end test suite with event simulations and API calls                                                |
| 0d | Docker           | Dockerfile updated with wallet monitoring tools included                                                  |
| 1  | Wallet Listener  | Rust microservice to detect deposits on chains like BNB or USDT and alert the system to start minting     |
| 2  | Conversion Queue | Queues confirmed deposits and matches them with FX rates to trigger mint actions on-chain                 |
| 3  | REST API         | REST endpoints (`/deposit`, `/withdraw`, `/fx-rate`) to simplify access to Substrate RPC                  |
| 4  | Admin UI         | Basic interface to test minting, reserve top-ups, and FX feed setup                                       |
| 5  | Integration Doc  | Markdown instructions on how third-party apps can use the JS SDK or REST API to access BazaarPay features |



## Future Plans

Once the core is in place, we’ll continue growing BazaarPay by:

* Launching our pilot with BazaarBit, our commerce partner app
* Expanding to serve Kenya, Ghana, and Francophone Africa
* Adding a plug-and-play SDK for fintech developers across the region
* Offering shared liquidity between local currencies
* Applying for follow-up grants to grow into a full parachain or multi-chain bridge hub

Our long-term goal is simple but ambitious: make fiat onboarding seamless, secure, and locally rooted so that anyone, anywhere, can move value with confidence.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Keegan Quigley recommended the program on a call with Beatrice Ajah and Samson Ajah.

