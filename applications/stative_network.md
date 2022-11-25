# Stative Network

- **Team Name:** Stative Network
- **Payment Address:** bc1qgtt8x0w5z08mtkypg8369avgymp0v0zx52wgcr (BTC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#baby_chick-level-2):** 2

## Project Overview :page_facing_up:

The Stative Network will be a L1 multi-asset stablecoin blockchain.

The vision of Stative is to create a base layer for a truly decentralized monetary system for web3.

Based on Stative dApps will be able to easily build web3-native applications for exchange and store of value, where users heavily profit from best UX, risk-diversification, value-protection and staking.

We are planning to build Stative in Substrate as a Polkadot parachain with a Kusama Testnet.

Our team has extensive experience in all relevant fields relevant to building such a large-scale project from ground up.Our expertise is especially in blockchain development, regulation / compliance and financial markets.

### Project Details

The "Stative" ("stable" + "native") Network will consist of one first-of-its-kind native stablecoin token "NST" per supported reserve currency (USD, EUR, ...) and one native governance token called Stative "STA".

The most important components of the network are:

![Overview of most important components of the Stative Network](https://github.com/royaleenterprises/media/blob/main/components.png?raw=true)

The NSTs will be minted by locking protocol external stablecoins like USDT, USDC, etc. in the respective bridge. Consequently, the NSTs will be backed by aggregated sets of external stablecoins and effectively diversifying the risk among all locked stablecoins. Besides this risk-diversification, users would also benefit from the simple UX of native stablecoins within supported dApps / ecosystems and exchangeability between all locked stablecoins, as well as the other NSTs and the protocols governance token.

The governance token Stative "STA" can be minted by natively swapping against the NSTs. STA is also inflationary through staking and the inflation rate shall be determined and maintained by the Stative DAO. STA shall, in general, have a speculative price action while introducing the innovative concept of a dynamic floor-price.

Since STA can - besides the inflation resulting from staking - only be minted by locking an NST, and NSTs can only be minted by locking protocol external stablecoins, the market will prevent the STA price to fall below the level of locked, protocol-external stablecoins within the Stative Network, effectively giving STA an intrinsic value.

STA will also hedge your risk between all connected fiat currencies and thus protocol external stablecoins. Consequently, holding STA, you are hedging against global inflation by diversifying between major fiat currencies and while staking against protocol internal inflation, while gaining the chance for moderate yields through staking and the speculative pricing secured by the floor-price.

The Stative DAO will govern the protocol by proposing and voting on the development roadmap, new NSTs, supported protocol-external stablecoins, protocol inflation, etc.. Effectively making the DAO the web3 world bank.

#### Project architecture

Here is how we currently see the network’s architecture and component’s interfaces:

![Overview Stative Network Architecture](https://github.com/royaleenterprises/media/blob/main/architecture.png?raw=true)

Based on this, Stative will offer the base functionality for web3-native

1. checking accounts in each major fiat currency (NSTs) and
2. savings accounts with floor-price protection and yield potentials from staking and speculative pricing.

![Overview Stative Network Functionalities](https://github.com/royaleenterprises/media/blob/main/functionalities.png?raw=true)

The Stative NSTs or the network as a whole are not supposed to compete or even replace any of the existing or future stablecoins but to be a convenience and security layer to enable the best UX for exchange of value / payments and store of value in web3.

![Comparison Stablecoins](https://github.com/royaleenterprises/media/blob/main/stablecoins.png?raw=true)

Although we do see significant advantages of our solution over existing implementations,
the Stative Network and its DAO intend to be a fully decentralised base layer for a web3-native, trustless monetary system on top of those protocol-external stablecoins.

We are aware that this is a very large-scale project, but we are highly motivated and eager to take on this challenge and in succeeding substantially contribute to the stablecoin space as one of the backbones of web3.

#### Roadmap

The current preliminary roadmap for the project consists of the following items:

1. Research & Concept - completed
2. Lightpaper - completed
3. Technical & Regulatory Feasibility including SWOT
4. MVP, minting and burning xUSD including frontend
5. Legal & Regulatory Setup
6. Public Kusama Testnet
7. Security Audits by Certik and other firms
8. Parachain building using Substrate
9. Validator Network Launch
10. Kick-off DAO
11. Mainnet Launch
12. Bug Bounty Program
13. Grant Program
14. Implement further NSTs

After we have already completed the first two items of the preliminary roadmap, this grant application focuses on the item 2. Please see the below section "Development Roadmap" for a detailed explanation of the specific milestones we are planning to complete this item.

### Ecosystem Fit

As stated in the project overview, we are planning to build Stative in Substrate as a Polkadot parachain with a Kusama Testnet and thus deeply integrated into the Polkadot and Kusama ecosystem.

![Stative Network Ecosystem Fit](https://github.com/royaleenterprises/media/blob/main/ecosystem.png?raw=true)

The target audience of the Stative Network are mainly dApps looking to integrate the best UX for exchange of value, payment, and store of value or investment. There might also be other parachains and blockchain infrastructure developers interested in Stative, as the network offers endless possibilities with ETH-like functionality combined with stablecoin stability and topped with improved usability, diversified risk and truly global, yet trustless exchangeability.

The USPs of the Stative Network are

- Best exchange of value:
  - First-of-its-kind native stablecoins for each reserve currency.
    - Risk-diversified
    - Stablecoin-backed
    - Over-collateralized
    - Non-algorithmic
- Best store of value:
  - Non-stable governance token
    - Risk diversification over all locked stablecoins in all supported reserve currencies
    - Protocol-internal inflation-protection through staking
- Best stablecoin DEX:
  - Easy and trustless exchangeability between all stablecoins in all reserve currencies
    - Backed into the core layer of the portocol

Within the Polkadot and Kusama ecosystem, Acala is a decentralised, multi-collateral, crypto-backed stablecoin on Polkadot and Kusama.

Other than Acala, Stative plans to offer native stablecoin tokens (NSTs) on each relevant fiat base currency and not just USD. Unlike Acala, those NSTs are not supposed to compete with or even replace existing stablecoins, but much rather be a convenience and security layer to enable the best UX for exchange of value / payments and store of value in web3. In addition, Stative’s NSTs are backed by stablecoins instead of non-stable crypto assets like DOT, KSM, BTC or ETH in the case of aUSD.

Adding to this more stable risk-profile, the Stative NSTs applies an innovative concept of risk-diversification. The governance token STA introduces a first-of-its-kind concept of a dynamic-floor-price, giving STA an actual intrinsic value. Finally, the Stative Network will be a truly global stablecoin DEX for easy and trustless exchangeability between all stablecoins in all reserve currencies. All of this will be under trustless governance of the Stative DAO, effectively becoming the first web3 world bank.

We are currently not aware of any projects covering a comparable scope outsidethe Polkadot and Kusama ecosystem.

Consequently, we see a strong competitive edge in the cooperation for both the Polkadot and Kusama ecosystem and the Stative Network.

## Team :busts_in_silhouette:

### Team members

- Sergio Martins Pereira - Architecture & Technology
- Miguel Cienfuegos - Development & Research
- Christian Grafenauer - Privacy & Blockchain Development
- Kai H. Kuljurgis - Strategy & BizDev
- Alireza Siadat - Regulation & Compliance
- Gaspar Haznagy - Brand & Product Design
- Vincent Jay Lionheart - BizDev & Growth & Community
- Chris Grundy - Growth & Community
- Eric Holst - Growth & Community

### Contact

- **Contact Name:** Sergio Martins Pereira
- **Contact Email:** sergio@stative.network
- **Website:** <https://stative.network>

### Legal Structure

- **Registered Address:** Hasenstr. 17, 37697 Lauenförde, Germany
- **Registered Legal Entity:** royale enterprises UG (haftungsbeschränkt)

### Team's experience

As stated in the initial overview, our team has extensive experience in all relevant fields relevant to building such a large scale project from ground up, especially blockchain development, regulation, compliance and financial markets.

The team’s track record includes building and operating one of the first regulated crypto investment platforms in Germany, significant input to European regulatory measures (MiCa), supporting the Polkadot ecosystem or working with Binance, Coinbase, IBM and PwC.

Sergio & Kai are currently mainly working as co-founders and CTO & CEO of Germany’s first and oldest platform for retail crypto savings plans and index-based investment
[coindex.de](https://www.coindex.de). Its a company that involved heavy-lifting in terms of technological, regulatory and business development work within the crypto and fintech world. Coindex has been successfully launched in 2021 and continues to strive. Due to surrounding themselves with a strong team for operative work, Sergio and Kai can pursue new endeavors.
The initial idea for the Stative Network arose from a feature discussion for a stablecoin index for coindex. After developing the concept, they managed to find like-minded people to join the team to apply for the grant.
Besides coindex, Sergio and Kai have been active entrepreneurs in the blockchain and crypto space since 2017 with respective experience, network, and a reputation as solid and successful but understatement-focused founders.

Miguel is an engineer and computer scientist with a research background in artificial intelligence and immersive technologies. He has worked as lead developer and head of engineering on different start-ups. He has been active in the crypto space since 2020 and has been involved in the planning, designing, and developing blockchain infrastructures for several projects.

Christian is a computer scientist with several years of experience as a full-stack developer and privacy engineer. He has worked for IBM as Senior Blockchain Architect, is acting as consumer representative for the German Standardization Institute (DIN) in blockchain related ISO and CEN standardization committees and is advising various projects on blockchain and privacy related issues. He has written several papers about privacy and blockchain, where the most popular "Privacy by Blockchain Design" has been quoted 73 times by numerous IEEE and ACM papers and the European Commission in their Blockchain Study. Furthermore, he has also been invited to present his findings by the German Ministry of Economics and Energy, the German Datenschutzstiftung ("Data protection foundation") for the Datentag ("Data day") in 2022 and other prominent events.

Alireza is Partner with international law firm Simmons & Simmons and considered as one of the most experienced experts on crypto and especially stablecoin regulation in Germany and Europe. He is involved in many web3 and DAO projects and has substantially contributed to the upcoming markets in crypto assets (MiCA) regulation.

Gaspar Haznagy is a designer and creative strategist with extensive experience in conceptualizing and creating appealing designs and user experiences for digital companies and fintechs.

Vincent is a Vice Chair in the European Union Marie Curie grants program and a Polkadot ambassador. He has been working with crypto companies in business development, growth, and community since 2017. He has extensive experience in business collaborations among crypto companies and in producing content, organizing online AMAs and offline meetups.

Chris has been working professionally in the crypto space since 2015, when he took over Marketing at Bitbond, an innovative peer-to-peer Bitcoin lender. In 2019 he worked on Germany’s first regulated Security Token Offering. Since then, he has led the regional marketing activities at Selfkey, Binance and Coinbase. He is now the General Manager for the DACH-Region at Shares.io.

Eric has been a Blockchain technology consultant, speaker, market developer, generalist, and community manager since 2017. He worked at the first Blockchain consultancy boutique, Crypto Monday magazine, was co-initiator of the crypto assets conference, co-creator of the North Rhine-Westphalia Blockchain association, global community manager at a crypto broker and currently for the conference organizer Blockchance.

All the team members currently have other main jobs or engagements, which is why at this early stage in the project, we can all just contribute our resources part-time. We are, however, planning to shift more and more of our resources to Stative moving forward in the project and once the required funds to cover our expenditures and salaries are available.

### Team Code Repos

- <https://github.com/royaleenterprises>

Source codes will (mainly) reside in:

- <https://github.com/royaleenterprises/stative-network>

Repos for further components of this application:

- <https://github.com/royaleenterprises/stative-wxusd>
- <https://github.com/royaleenterprises/stative-wsta>
- <https://github.com/royaleenterprises/stative-bridge-eth-xusd>
- <https://github.com/royaleenterprises/stative-bridge-eth-sta>

Team member’s github profiles and project references:

- <https://github.com/soxocx>
- <https://github.com/migcien>
- <https://github.com/kkug3l>
- <https://github.com/coindex>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/sergiomartinspereira>
- <https://www.linkedin.com/in/miguelcienfuegos>
- <https://www.linkedin.com/in/christian-grafenauer>
- <https://www.linkedin.com/in/kaikuljurgis>
- <https://www.linkedin.com/in/cgrundy>
- <https://www.linkedin.com/in/gasparhaznagy>
- <https://www.linkedin.com/in/vincentlionheart>
- <https://www.linkedin.com/in/eric-holst-36343824>

## Development Status :open_book:

Stative will be a standalone native DPoS blockchain connected to Polkadots Relaychain using a parachain concept. Stative would benefit from the pooled security, governance, and overall scalability of the heterogeneous sharding approach of the network, while still being independent.
Parachain validators guarantee that each parachain follows its unique rules and can pass messages between shards in a trust-free environment. This allows parties to complete cross-chain transactions via the Relay Chain using Cross-Consensus Message Format (XCM).
XCM is used to natively access the integration of Chainlinks decentralised oracle network on a dedicated parachain. In addition, XCM is one of the options (the others being smart contracts and other higher-order networks like XCLAIM) to enable Statives native trustless cross-chain bridges.
Using this data Stative can ensure correct exchange rates and backing for its several native stablecoins.
Having Rust & Substrate at its core, Stative can also run arbitrary smart contracts with explicit support for Ethereum’s smart contracts (EVM) natively with the same API/RPC interface and use widely popular browser extensions such as Metamask. Ethereum addresses can be mapped directly to and from Stative accounts.
The planned architecture and tech stack are:

![Overview Stative Network Tech Stack](https://github.com/royaleenterprises/media/blob/main/techstack.png?raw=true)

## Development Roadmap :nut_and_bolt:

This grant application focuses on the following item of the project’s preliminary roadmap shown in the project overview above: `2. Technical & Regulatory Feasibility`

### Overview

- **Total Estimated Duration:**
  - 2 months for 2a (consecutive)
  - 1.5 months for 2b (consecutive)
  - 1.5 months for 2c (consecutive)
  - 3 months for 2d (in parallel to technical feasibility)
  - Total of 8 months work volume, to be completed in 5 months with parallelization
- **Full-Time Equivalent (FTE):**
  - Average of 0.5 FTE (1.0 FTE during parallelization)
  - As stated under "Team experience", the team currently has other main jobs or engagements and can consequently invest only limited amounts of time - we will do our best to invest as much time as possible to progress as fast as possible. The team is prepared and looking forward to switching to the project full-time in the future.
- **Total Costs:**
  - 6,000 USD for 2a
  - 4,500 USD for 2b
  - 4,500 USD for 2c
  - 9,000 USD for 2d
  - Total of 24,000 USD

### Milestone 2a. Technical Feasibility - Basic functionality

- **Estimated duration:** 2 month
- **FTE:** 0.5
- **Costs:** 6,000 USD
  - Annual salary for calculation 72,000 USD
  - (72,000 / 12 \* 2 months) \* 0.5 FTE = 6,000 USD

| Number | Deliverable                   | Specification                                                                                                                                                                                                                                                                                                                                                                                     |
| -----: | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                       | MIT                                                                                                                                                                                                                                                                                                                                                                                               |
|    0b. | Documentation                 | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                                                                                     |
|    0c. | Testing and Testing Guide     | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                                                                   |
|    0d. | Docker                        | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                        |
|    0e. | Article                       | We will publish an **article** on our bloq showcasing the achievements created in this grand application. Further, this includes snippets from the documentation to give interested reader a good starting point.                                                                                                                                                                                 |
|     1. | Dockerfile (Base Environment) | Setup & configure a basic Substrate environment w/ final consensus & governance rules. This step includes the basic Dockerfiles, which we will extend and use the other steps, to spin up a local two node system.                                                                                                                                                                                |
|     2. | Substrate module: Quote       | Connect Chainlinks parachain to retrieve oracle prices for XUSD substrate module (MS2b.1) as well as STA substrate module (MS2c.1) using an implementation of Chainlinks substrate module. This module will digest raw pricing data and calculate normalized weighted pricing data. The final deliverable here is a Substrate module (incl. updated `src`, Dockerfile, documentation & tutorial). |

### Milestone 2b. Technical Feasibility - Stable Token XUSD

- **Estimated duration:** 1.5 month
- **FTE:** 0.5
- **Costs:** 4,500 USD
  - Annual salary for calculation 72,000 USD
  - (72,000 / 12 \* 1.5 months) \* 0.5 FTE = 4,500 USD

| Number | Deliverable                                      | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -----: | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                                          | MIT                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|    0b. | Documentation                                    | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                                                                                                                                            |
|    0c. | Testing and Testing Guide                        | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                                                                                                                          |
|    0d. | Docker                                           | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                                                               |
|    0e. | Article                                          | We will publish an **article** on our bloq showcasing the achievements created in this grand application. Further, this includes snippets from the documentation to give interested reader a good starting point.                                                                                                                                                                                                                                        |
|     1. | Substrate module: XUSD                           | Implement XUSD substrate module (assets, balances, tx, fees) uses Quote module pricings (MS2a.2). This includes the stablecoin calculation logic (blueprint for all other XEUR, XGBP, ...). The final deliverable here is a Substrate module (incl. updated `src`, Dockerfile, documentation & tutorial).                                                                                                                                                |
|     2. | Substrate smart contract (Ink): XUSD-Swap-Brdige | Implement the XUSD bridge smart contract for the Stative Network using Substrates contract module w/ _ink!_. This bridge contract will in the beginning only work with USDT withdrawals. Further stable coins will be added in the future. Allows to bridge-swap XUSD from STA to USDT on ETH. Allows to bridge XUSD (STA) to WXUSD (ETH). The final deliverable here is a Substrate module (incl. updated `src`, Dockerfile, documentation & tutorial). |

### Milestone 2c. Technical Feasibility - Governance Token STA

- **Estimated duration:** 1.5 month
- **FTE:** 0.5
- **Costs:** 4,500 USD
  - Annual salary for calculation 72,000 USD
  - (72,000 / 12 \* 1.5 months) \* 0.5 FTE = 4,500 USD

| Number | Deliverable                                     | Specification                                                                                                                                                                                                                                                                                                                           |
| -----: | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                                         | MIT                                                                                                                                                                                                                                                                                                                                     |
|    0b. | Documentation                                   | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                           |
|    0c. | Testing and Testing Guide                       | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                         |
|    0d. | Docker                                          | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                              |
|    0e. | Article                                         | We will publish an **article** on our bloq showcasing the achievements created in this grand application. Further, this includes snippets from the documentation to give interested reader a good starting point.                                                                                                                       |
|     1. | Substrate module: STA                           | Implement STA substrate module (assets, balances, tx, fees) uses Quote module pricings (MS2a.2). This step includes the inflationary floor price calculation logic. In the beginning only XUSD can be locked to mint STA. The final deliverable here is a Substrate module (incl. updated `src`, Dockerfile, documentation & tutorial). |
|     2. | Substrate smart contract (Ink): STA-Swap-Brdige | Implement the STA bridge smart contract for the Stative Network using Substrates contract module w/ _ink!_. Allows to bridge STA (STA) to WSTA (ETH). The final deliverable here is a Substrate module (incl. updated `src`, Dockerfile, documentation & tutorial).                                                                     |

### Milestone 2d. Technical Feasibility - Regulatory Feasibility

- **Estimated duration:** 3 month
- **FTE:** 0.5
- **Costs:** 9,000 USD
  - Annual salary for calculation 72,000 USD
  - (72,000 / 12 \* 3 months) \* 0.5 FTE = 9,000 USD

| Number | Deliverable                                     | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -----: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     1. | Legal opinion NSTs, STA and the Stative Network | Detailed legal opinion on NSTs, STA and the Stative Network w.r.t. to existing and upcoming, international regulations like MiCAR, TOFR and all AML & CFT requirements with the goal to design all native tokens as well as the network and related entities in a way, so the goal of a maximum decentralisation, best UX and widest adoption - also for regulated crypto asset service providers - is enabled while involved parties are not facing legal threads. |
|     2. | Design for corporate structure                  | Create a design for a corporate structure for the DAO and other required entities applying the learnings from the legal opinion in accordance with the above stated goals while enabling legal security for all involved parties.                                                                                                                                                                                                                                   |
|     3. | Token design                                    | Create a token design and specification of functionalities applying the learnings from the legal opinion in accordance with the above stated goals to enable maximum decentralisation, best UX and widest adoption - also for regulated crypto asset service providers while enabling legal security for all involved parties.                                                                                                                                      |
|     4. | Fundraising Setup                               | Identify applicable ways of non-grant based, external funding for the project and prepare required documents and processes to execute those instruments.                                                                                                                                                                                                                                                                                                            |
|     5. | Blog post                                       | Write an in-depth blog post on the learnings and derive a template for setting up decentral projects like Stative Network.                                                                                                                                                                                                                                                                                                                                          |

## Future Plans

Our vision is to create a base layer for a truly decentralised monetary system for web3.
We know that this is a very large endeavour, but we are highly motivated and eager to take on this challenge and in succeeding substantially contribute to the stablecoin space as one of the backbones of web3. We are of the strong belief that stablecoins will be one of the drives of the new adoption wave of web3, which only further adds to our motivation in realising the whole project.

With this grant we are planning to complete 1 of the items of the preliminary roadmap of the project. In case we are able to prove technical and regulatory feasibility, we will immediately apply for a follow-up grant with the web3 Foundation, with the plan to intensify the cooperation with the Polkadot and Kusama network, as we believe it is one of the most powerful ecosystems in the web3 space.
Since we are envisioning Stative Network as a parachain, we are besides the Polkadot / Kusama / Substrate community also looking to make use of the existing parachain’s communities moving forward.
Having said that, we will also kick-off our own community. But mainly prioritise on building our own ecosystem with a focus on reputable strategic advisors, validators and B2B / B2B2C business development partners.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

We received an introduction to Irina Karagyaur (Polkadot Head Ambassador for Western Europe) from a shared contact. Irina then connected us to Robin Ejsmond-Frey (Parity Lead Account Manager), who after an initial assessment forwarded us to Nicholoas and Mideg of SquareOne. The two of them suggested the Grants Program as a next step for Stative.

**What work has been done so far?**

- Project landing page: <https://stative.network>
- Gitbook setup: <https://docs.stative.network/introduction/overview>
- Project short intro: <https://docs.google.com/document/d/1yXyDuO1kOOz8zEqIPW_7DPMWAM6m38jZ74RvOmulqPo/edit?usp=sharing>
- Project lightpaper: <https://drive.google.com/file/d/1BhykSl6vdOa0QMoq3CvFSbyxcnruFueb/view>

**Are there any teams who have already contributed (financially) to the project?**

Just the Stative team.

**Have you applied for other grants so far?**

No.
