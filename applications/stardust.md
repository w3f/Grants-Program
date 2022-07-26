# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Derivative Powered Uncollateralized Stablecoin Research and Design
- **Team Name:** Stardust Labs Inc.
- **Payment Address:** 0xF3d5F194D9eF961a85a4d5be05EFda7B2B33005d (DAI, Ethereum Mainet)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

> ⚠️ _The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe._

## Project Overview :page_facing_up:

This proposal is in response to an RFP for an Uncollateralized Stablecoin (Specifically: https://github.com/w3f/Grants-Program/blob/master/rfps/uncollateralized-stablecoin.md).

### Overview

- A brief description of your project.

We are proposing a functionally different approach for an uncollateralized stablecoin. Extant uncollateralized stablecoin solutions are based on creating and burning an ERC20-style token. By monitoring exchange rates and managing the token supply, these uncollateralized stablecoins seek to balance supply and demand to peg the exchange rate to a reference currency. To date, none have achieved commercial success and the inherent limitations and flaws of this architecture are quickly becoming apparent even with a theoretically perfect implementation. This paper dives deeper into the current challenges (https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3952045), the first of which is a baseline support level of demand for operational stability which this RFP seeks to address.

Stardust Labs is proposing a fundamentally different approach that uses financial derivatives to programmatically and algorithmically generate a "synthetic" derivatives-based stablecoin that can be originated or settled on demand.

At a high level, the primary focus of stablecoins is risk mitigation. Modern commercially successful architectures derisk by having a centralized entity issue tokens based on physical reserves of the pegged currency held in custody. The primary problem here is trusting the custody of a centralized entity, a particular challenge considering most are cross-border, transnational companies with limited auditing and opaque balance sheets.

Our proposal is to utilize the latest advancements in decentralized finance to instead originate synthetic financial derivatives on demand. This securitized financial instrument would emulate the stability and utility of a stablecoin without requiring collateral or physical custody. In short, put-call parity allows the algorithmic construction of a synthetic financial instrument from perpetual contracts that effectively locks the value relative to the pegged currency at the risk free rate. By securitizing this construct into a token we can generate a synthetic stablecoin on demand as well as close them on demand as long as a perpetual contract can be accessed and decentralized markets maintain enough liquidity in the perpetual contract market.

- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.

What we are proposing is relatively unprecedented but there are promising signs. Angle Labs launched on Ethereum last year as an ERC20 token in order to provide a stablecoin pegged to the Euro. They term themselves "the first decentralized, capital efficient and over-collateralized stablecoin protocol" (https://www.angle.money/). Angle Lab's stablecoin is collateralized with Ethereum and more specifically over-collateralized to ensure safety. In July of 2021 they published a whitepaper indicating that they were going to deploy self-minted perpetual contracts as a tool to bring in additional collateral and protection against large price moves. These perpetuals provide additional outsourcing of risk in addition to directly increasing ETH collateral. 5 months ago, they raised $5M from a16z and others to explore the technology. Our proposed architecture would bring that attention and innovation to the Polkadot network. More importantly for the Polkadot ecosystem, our proposal is decentralized and truly uncollateralized as it manages risks entirely through derivatives, and can generate synthetic stablecoins between any arbitrary pairs provided there is a perpetual contract market with sufficient liquidity.

- An indication of why your team is interested in creating this project.

Stardust Labs is focused on developing foundational advancements in distributed ledgers that improve consumer and user safety. Our overall goal is to build safer, more efficient financial infrastructure for the public. While extant distributed ledger applications have largely solved the use case of peer to peer payments, extant implementations of stablecoins currently have challenges that limit their use or safety.

Stardust Labs is specifically drawn to this RFP as our team has extensive expertise in developing safe and efficient financial products for traditional commercial banks and specific subject matter expertise in decentralized finance and financial engineering. We ultimately believe an uncollateralized, independent stablecoin would have unprecedented utility in the space.

### Project Details

Historically stablecoins have been roughly one of two types. The first are asset-backed tokens controlled by centralized entities that maintain custody of physical assets. These assets could be fiat currencies, a basket of cryptocurrencies, or physical commodities. Examples of this are Tether (USDT), Gemini Dollar (GUSD), and Paxos Gold (PAXG). The second are algorithmically maintained ERC20 tokens that are actively minted or burned based on dex trading exchange rates to maintain parity.

The challenge with the former is that a user is implicitly trusting the centralized entity to maintain those assets with no guarantees. With the latter, it is easy to mint coins during periods of increasing demand, but it is very difficult to burn tokens during periods of decreasing demand.

Stardust labs recommends a fundamentally different approach. The primary utility of any stablecoin is mitigating the risk of future price movements. The past year has seen strong developments in decentralized financial markets and powerful tools for de-risking in the form of options and perpetual contracts. We can use these products and financial engineering to create a synthetic financial instrument that replicates the performance of a stablecoin on demand. As long as the underlying asset can reach a sufficiently liquid options pair, we can combine products to create a stable structure that ultimately results in a fixed future return in the pegged currency at the risk free rate thanks to put-call parity. If this relationship is broken, that mathematically means that a profitable risk-free arbitrage opportunity exists which should be very short-lived in efficient, open financial markets.

Defirate has a good in-depth explanation of both how perpetual contracts work and how they can be hedged to earn the nominal interest at the risk-free funding rate. (https://defirate.com/perpetual-contracts/)

Ultimately, our proposed stablecoin isn't a managed token or backed by an underlying asset. Instead, the stablecoin smart contract purchases and returns a tokenized, engineered bundle of options and perpetual contracts that, combined, ensure a stable price relative to the pegged currency in the future. We term this type of asset a 'synthetic' stablecoin, termed because it is the exact same process as building a synthetic option. In addition, this process is similar to securitization whereby several financial products are pooled to yield a purchasable interest-bearing security with a different risk-reward curve.

The astute reader will observe that constructing these synthetic options will incur a cost. However, the advent of flash loans and depository institutions like AAVE allow the capital in the smart contracts to be deployed to generate risk-free interest, allowing the stablecoin contract to offset the cost of purchasing these options. We envision the smart contract assessing either a transaction fee for origination or a penalty for early withdrawals where users have not held the synthetic stablecoin long enough for the interest to offset the contract purchase fees and transaction costs. Though it varies dramatically, Bitcoin futures seem to have a 3.69% risk-free rate (https://quantpedia.com/what-is-the-bitcoins-risk-free-interest-rate/), the risk free rates at Binance for Perpetual contracts (the funding rate) is 0.01% every 8 hours (or an annualized rate of 11.57%). Meanwhile, the fee to enter a perpetual ranges from 0.05%(dxdy) - 0.02% (Binance) so it is likely that these fees would be entirely covered by the interest payments on the overall stabilized value.

### Why Now & Risks

Ultimately this is only possible today thanks to both the recent advancements in decentralized finance, and more importantly the liquidity in the market. One of the outstanding risks to this stable coin is if liquidity quickly dries up. An example of the impact of liquidity shocks on securitized financial derivatives is best seen by the 2008 financial crisis. Unlike traditional financial markets however, positions are monitored in real-time and can be forcefully liquidated, preventing direct losses. However, there are fundamental limits on how much stability this construct or any uncollateralized stablecoin could absorb. One of the key outstanding questions, and the main exogenous risk that is currently unknown, is the strength of correlation between overall crypto prices, volatility, and its impact on the liquidity of decentralized financial markets.

One of the primary anticipated challenges is the lack of regulatory oversight in the markets and the ability of individual companies to offer arbitrary leverage ratios. For example, Binance is offering 125x leverage meaning some perpetual contracts are at risk of being forcibly liquidated even with less than a 1% price movement. (https://bitcoinist.com/binance-125x-leverage-sparks-criticism-from-community/) Our smart contract can simply repurchase another perpetual contract during liquidation, however a risk exists that market liquidity would dry up during periods of unprecedented volatility such as a major market crash. Without liquid markets with leveraged counter-parties willing to absorb the risk, the synthetic stablecoin would be forced to return the money to the user in the underlying currency at the price of the stable peg, having done its job, but at the same time being unable to offer continued stability.

Due to the use of options, perpetuals, and lack of human intervention, our proposed system is able to absorb far more volatility than algorithmically managed uncollateralized stablecoins. These implementations have strong negative feedback loops during periods of decreasing demand and, as of date, no robust solution for reducing supply. These struggles have caused many to fail even under benign conditions and these challenges will be dramatically amplified in the type of major market crash where liquidity in financial markets begins to dry up. At that point, the only efficient solution would be custodied collateralized assets by trustworthy centralized entities.

### Ecosystem Fit

A decentralized uncollateralized synthetic stablecoin has significant utility for decentralized financial applications and would be a transformative development beyond just the Polkadot ecosystem. In addition to providing a stable store of value that works synergistically with demand in the market, the smart contract mathematics are entirely fungible and can be set up for any arbitrary currency as the underlying asset and pegged currency provided a sufficiently liquid options market exists.

The primary target demographic and audience would be decentralized financial applications and any user who seeks a stable store of value that isn't dependent on a centralized third party, instead risk has been decentrally allocated to the participants on decentralized markets.

## Team :busts_in_silhouette:

### Team members

- Team Lead: Adit Patel
- Team Member: Theresa Garcia

### Contact

- **Contact Name:** Theresa Garcia
- **Contact Email:** theresa@stardustfunds.com
- **Website:** https://stardust.finance/

### Legal Structure

- **Registered Legal Entity:** Stardust Labs Inc. is a registered C-corp incoporated in Wyoming

### Team's experience

Adit is a technical expert on cryptography, distributed ledgers, financial markets, and new product development. He graduated Columbia in 2011 with a BSc in Applied Physics and a minor in Econ. During his time there, he took additional coursework focused on cryptography, statistics, and fundamental computer science. After graduating, he joined Capital One and quickly rectified the failing, newly launched small business brand. These efforts made him well known as the go-to analyst for successful new product development, strategy and launch. He was tapped to design and launch financial products for Hispanic consumers and tapped again to build Capital One’s B2B financial products. During his tenure there, Adit experienced first hand the hard learnings that lead to efficient risk mitigation in financial products and the intricacies of financial engineering. He has a decade of technical experience at the intersection of finance and technology.

Theresa has a particularly deep knowledge on the current dynamics, consumer sentiment and market opportunities of the distributed ledger ecosystem. She’s been personally involved with distributed ledgers and their commercial applications for 5+ years. She has successfully launched and commercialized multiple new products. Throughout her career, Theresa has repeatedly driven outsized results, helping launch multiple products from emotional education devices for children disguised as teddy bears to documentary streaming sites. In addition to multiple successful product launches as an employee, she has started and launched her own successful e-commerce business on her own from the ground up. There she developed her own products, stood up supply chains and manufacturers, created and executed international marketing campaigns and sales funnels, and managed employees all over the world to support her global operations, successfully growing her company from an idea to $70,000/month in sales.

Both Adit and Theresa are also full stack developers who have successfully deployed a crypto wealth management mobile to building their own blockchain binary.

Stardust Wealth iOS App: https://stardust.finance/app
Our test blockchain network: https://explorer.stardust.finance/

### Team Code Repos

- https://github.com/adit313/ (primary developer)
- https://github.com/enteraether

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/adit-patel/
- https://www.linkedin.com/in/the-theresa-garcia/

## Development Status :open_book:

- link to RFP: https://github.com/w3f/Grants-Program/blob/master/rfps/uncollateralized-stablecoin.md

- academic publications relevant to the problem: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3952045

- Information on put-call parity: https://en.wikipedia.org/wiki/Put%E2%80%93call_parity
  https://www.investopedia.com/terms/p/putcallparity.asp

## Development Roadmap :nut_and_bolt:

Through this grant proposal, we aim to provide a well-detailed analysis of the current state of industry for stablecoins, extant and historical stablecoin solutions including failures, and a summary of the current view by the US Federal Government. These materials will also be used to generate a well-defined framework for a derivatives based synthetic stablecoin capable of originating and closing positions.

### Overview

- **Total Estimated Duration:** 5 Weeks
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 10K

### Milestone 1 — State of the Industry on Stablecoins

- **Estimated duration:** 2 Weeks
- **FTE:** 2
- **Costs:** 5k USD

|  Number | Deliverable       | Specification                                                                                                                                                                                                                                                                                                                  |
| ------: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      0. | Rights            | All developed materials will be publicly accessible and public domain.                                                                                                                                                                                                                                                         |
|  **1.** | Research Goal     | We will provide an overview of the current state of the modern stablecoin ecosystem including a summary of demand and historical growth over time, industry size and a rough forecast of future growth, the largest existing players, and the main revenue and cost drivers for service providers.                             |
| **1a.** | Specific Coverage | Coverage will span [historical and current industry volumes](https://coinmarketcap.com/view/stablecoin/), [academic sources](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3952045), and [recent developments](https://blockworks.co/congressional-action-on-stablecoins-could-come-as-soon-as-this-month-source-says/). |

### Milestone 2 — Terra Collapse Deep Dive

- **Estimated duration:** 3 Weeks
- **FTE:** 2
- **Costs:** 5K USD

|  Number | Deliverable       | Specification                                                                                                                                                                                                                                                                                                                |
| ------: | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      0. | Rights            | All developed materials will be publicly accessible and public domain.                                                                                                                                                                                                                                                       |
|  **1.** | Research Goal     | Stardust will breakdown and perform a deep dive into the collapse and ultimate failure of Terra to maintain it's peg to USD.                                                                                                                                                                            |
| **1a.** | Specific Coverage | Specific deep dives at this time are an overall summary of events and the price changes in early May 2022, the large and consistent outflows from their lending protocol Anchor, the complete saturation of lending pools on Curve that contained UST, and finally the deployment of BTC reserves by the Luna Foundation Guard (LFG). |

## Future Plans

- We'll follow up with a future research grant on historic failures of stablecoins, a summary of articulated Federal Government viewpoints on stablecoins, and its potential impact on the future regulatory landscape. Our long-term vision is to build an understanding of the stablecoin infrastructure environment and then develop and deploy an improved version on the Polkadot Network.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
