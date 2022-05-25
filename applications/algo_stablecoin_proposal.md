# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Algorithmic Stablecoin Design and Proof of Concept
- **Team Name:** Stardust Labs Inc.
- **Payment Address:** 0xF3d5F194D9eF961a85a4d5be05EFda7B2B33005d (DAI, Ethereum Mainet)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ _The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe._

## Project Overview :page_facing_up:

This proposal is in response to an RFP for an Algorithmic Uncollateralized Stablecoin (Specifically: https://github.com/w3f/Grants-Program/blob/master/rfps/uncollateralized-stablecoin.md).

### Overview

- A brief description of your project.

On completion of our deep dive into extant stablecoins and a deep dive into the failure modes of current projects, notably IRON, Terra, Neutrino, Basis Cash, Empty Set Dollar, and others, we've identified the primary challenges and have a design template for a resilient algorithmically managed stablecoin.

In short, the weakness of an algorithmic stablecoin is their inability to manage contractions in demand. This has invariably led to a "death spiral" or a run on the coin that quickly causes hyperinflation, completely collapsing the price of the coin. A key component of any successful design will be reversing this incentive and creating a strong incentive to break the "race to the exit" dynamic.

A key component to a successful design is to base the utility of the system on something that has stable, consistent demand. Terra made Luna the native token of their network thinking that would create consistent demand. Unfortunately, Terra never took off as its own network and 75% of all demand was just for Anchor, a single first party app on the network with a subsidized interest rate. This made the demand unstable and resulted in the collapse of the price of Luna and Terra once Anchor demand contracted.

We are proposing an architecture that functions exclusively through open market operations. When the price of the stablecoin exceeds $1 it directly mints and purchases assets to bring the price down to the $1 peg. These newly purchased assets (the seigniorage profits) are sent to a decentralized treasury. The treasury automatically deploys the assets onto the capital markets and uses the interest generated to create a stable, reliable base for the system. Bond coin holders receive excess interest every period in order to compensate them for holding the risk of a depeg event. Stablecoin holders can always convert their tokens to bond coin tokens at parity value. If stablecoin demand contracts, the treasury size also proportionally contracts, freeing up liquidity for these newly minted bond coins.

This is a highly summarized and condensed version of the proposed architecture which we will break down in full in Milestone 1, a design document highlighting the detailed operations of each individual aspect of the network.

Ultimately, this architecture accomplishes five main goals;

First, Improved Stability. As the treasury interest is a reliable, consistent source of revenue it creates a solid level of demand that can serve as a stable base.

Second, Death Spiral Resistant. It breaks the dynamics that create a "death spiral" as exiting the system by burning bond tokens also stops users from receiving future interest payments, concentrating the payments amongst the remaining bond token holders.

Third, Strongly Decentralized. It replaces centralized control and actions with decentralized open market operations. This tightly couples market forces and the overall function of the network further ensuring resiliency and removing the need for human intervention.

Fourth, Liquidity Efficient. As assets come into the treasury, they are ready to be deployed directly back onto the markets as borrowable assets ensuring that this stablecoin is far more liquidity efficient and creative than extant solutions.

Fifth, Self-Recovering. If the treasury falls below the overall market cap of the stablecoin for any reason, as long as the treasury continues its automatic capital deployments, it will eventually recover due to the fact that capital can always be deployed for a non-zero, positive risk-free interest rate, whereas the stablecoin market cap has a 0% interest rate.

A key note is that Treasury funds are not considered collateral. There is no ability to directly redeem stablecoins for treasury assets, instead the process moves through the bond coin first as they are the users that are ultimately absorbing the risk for gain.

- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.

A decentralized algorithmically managed stablecoin is considered the holy grail of crypto at the moment. Terra before its demise demonstrated the incredible market demand for a stable, valid project. Launching a successful design would quickly catalyze the growth of the Polkadot ecosystem. In addition, the multi-token nature of the treasury, with the ability to borrow tokens from all different parachains is a great utility and well suited to Polkadot's multi-chain architecture.

- An indication of why your team is interested in creating this project.

Stardust Labs is focused on developing foundational advancements in distributed ledgers that improve consumer and user safety. Our overall goal is to build safer, more efficient financial infrastructure for the public. While extant distributed ledger applications have largely solved the use case of peer-to-peer payments, extant implementations of stablecoins currently have challenges that limit their use or safety.

Stardust Labs is specifically drawn to this RFP as our team has extensive expertise in developing safe and efficient financial products for traditional commercial banks and specific subject matter expertise in decentralized finance and financial engineering. We ultimately believe an uncollateralized, independent stablecoin would have unprecedented utility in the space and with the demise of Terra, there is a clear market opportunity.

Stardust has performed a deep dive into the collapse and utility of stablecoins over the past 2 months and is well positioned to deliver an improved architecture.

### Project Details

![Summary Diagram](https://github.com/adit313/StablecoinProposal/blob/main/StablecoinDiagram.png?raw=true)

Unlike all extant multi-coin algorithmic models, stable coins can no longer be minted by bondcoin holders, (here illustrated as removal of step 0). Instead, our smart contract is directly integrated into the network, if the price on the open market for the stablecoin ever exceeds $1, the smart contract mints new tokens and purchases assets with the new tokens increasing supply(Here illustrated as step 1). These new assets are immediately stored in the treasury (Step 2).

The treasury is a complex smart contract for automatic, algorithmically driven capital deployment. The Treasury takes in two parameters from the network, a target reserve deployment (ex. 90%) and an excess size (ex. 140%). The Treasury sets and updates its dynamic APR rate automatically to ensure that it is loaning out its target deployment. In this example, if less than 90% of reserves are deployed it will automatically reduce the APR for each token until it hits 90% deployment. If deployment is in excess of 90%, then the smart contract algorithmically, and automatically increases the APR until deployed assets come down to the 90% ratio. These returns are stored in the treasury until it hits a certain size. Once it exceeds the excess size multiplied by the market cap of the stablecoin, the excess is sent to the interest pool. (Here illustrated as step 4)

The interest pool accumulates funds that are not deployed into the market, but are instead staged for deployment to the bond holders. Bond holders can claim a proportion of these stored funds at any time by burning their tokens for an equivalent % of the total interest pool. I.e. (10% of all bond tokens can be burned for 10% of the interest pool). This gives the bond tokens a material non-zero intrinsic value at any given moment. (Illustrated here as Step 5)

Normally however, the interest pool accumulates interest up until a certain point, at which point it makes dividend distribution to the bond token holders. (Step 6)

If at any time the stable coin drops below $1, it can be redeemed at parity value for bond tokens. This is what provides the backing to the stablecoin supply. (Step 7) It is important to note here that because the tokens are burned when redeemed, this shrinks the overall market cap of the stable coins, lowering the effective total required in the treasury, and therefore releasing some funds to the interest pool if the treasury was at capacity.

Not illustrated: The treasury, if it falls below the excess, claws back assets from the interest pool. The treasury has the ability to make uncollateralized, interest free loans from the stablecoin smart contract, which it can then loan out at a fixed interest rate. This functionality is not designed for long-term use, but more as a tool if the system needs to perform an emergency liquidity injection into the market for very short-term demand. (Note this is VERY complex economically and designed to function primarily as a way to control the interest rate of the stablecoin currency, similar to how central banks control overall USD interest rates. Due to its complexity, it must be a carefully managed process that is entrusted to the bondholders as it cannot be automated.)

### Why Now & Risks

The failure of Terra has opened a gap in the market for an algorithmically managed stablecoin. While over the next few months demand will likely be suppressed, in the medium-term, demand will return for a decentralized algo stablecoin much as demand for Terra existed even after the failure of IRON, a token that employed the same model as Terra.

This specific system was built after careful study of the failure modes of previous solutions and relies on a pre-established liquid financial ecosystem. For example, a large treasury deploying assets requires sophisticated asset managers looking to borrow a significant amount of capital. Open market operations require DEXs, with significant liquidity and oracles with accurate prices. Keeping a well-diversified treasury portfolio to mitigate risk also requires wrapped assets from other chains and bridges to transfer those assets.

Conversely these are also risks regarding the liquidity and functioning of the decentralized financial ecosystem. If decentralized finance was to disappear or become illiquid it would have a material impact on the ability of the treasury to deploy funds. Furthermore, demand for borrowing could dry up and asset values in the treasury could collapse, making the payback period excessively long. Our best prevention plan for this is to ensure the treasury is well diversified in both types of assets and over a significant time duration, i.e., buying into the assets over a long period of time thereby averaging the price peaks and valleys. Furthermore, careful consideration and control of the excess amounts will allow the system to absorb significant risk before requiring a rebuilding period. However, there is a risk that crypto as an entire asset class is either outlawed or completely abandoned.

### Ecosystem Fit

A decentralized uncollateralized synthetic stablecoin has significant utility for decentralized financial applications and would be a transformative development beyond just the Polkadot ecosystem.

The primary target demographic and audience would be decentralized financial applications and any user who seeks a stable store of value that isn't dependent on a centralized third party, instead risk has been allocated to the participants on decentralized markets.

## Team :busts_in_silhouette:

### Team members

- Team Lead: Adit Patel
- Team Member: Theresa Garcia

### Contact

- **Contact Name:** Theresa Garcia
- **Contact Email:** theresa@stardustfunds.com
- **Website:** https://stardust.finance/

### Legal Structure

- **Registered Legal Entity:** Stardust Labs Inc. is a registered C-corp incorporated in Wyoming

### Team's experience

Adit is a technical expert on cryptography, distributed ledgers, financial markets, and new product development. He graduated Columbia in 2011 with a BSc in Applied Physics and a minor in Econ. During his time there, he took additional coursework focused on cryptography, statistics, and fundamental computer science. After graduating, he joined Capital One and quickly rectified the failing, newly launched small business brand. These efforts made him well known as the go-to analyst for successful new product development, strategy and launch. He was tapped to design and launch financial products for Hispanic consumers and tapped again to build Capital One’s B2B financial products. During his tenure there, Adit experienced firsthand the hard learnings that lead to efficient risk mitigation in financial products and the intricacies of financial engineering. He has a decade of technical experience at the intersection of finance and technology.

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

- Previous work performed for the Web3 Foundation on Stablecoins: https://github.com/adit313/State-of-the-Stablecoin-Industry

- Previous work performed for the Web3 Foundation on Terra's Collapse: https://github.com/adit313/TerraDeepDive

## Development Roadmap :nut_and_bolt:

Through this grant proposal, we aim to provide a well-detailed design document that will allow any developer to understand and implement this proposal along with the economic incentives and mathematics that back the proposal. Furthermore, for Milestone 2 we will provide a proof of concept of the stablecoin coded in an Ink! Smart Contract on the Polkadot network, or a network of the committee's choosing.

### Overview

- **Total Estimated Duration:** 10 Weeks
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 50K

### Milestone 1 — Design Document

- **Estimated duration:** 3 Weeks
- **FTE:** 2
- **Costs:** 10k USD

|  Number | Deliverable       | Specification                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      0. | Rights            | All developed materials will be publicly accessible and public domain.                                                                                                                                                                                                                                                                                                                                             |
|  **1.** | Deliverable       | We will provide a detailed design document that will allow any developer to implement and deploy a stablecoin with our recommended architecture. This document will not only contain the technical details, but also a breakdown of the economic incentives and mathematics that sustain the model along with a deep dive into stress tests and failure modes.                                                     |
| **1a.** | Specific Coverage | Deliverable will be a PowerPoint with clear market graphics and charts that outline the following: An overview of weakness in previous models, a summary of the objectives and design considerations this proposal achieves, overall network and dynamics step-by-step, performance and dynamics under demand contractions and a breakdown of the financial mathematics and economics that underpin this proposal. |

### Milestone 2 — Proof of Concept (Stage 1)

- **Estimated duration:** 3 Weeks
- **FTE:** 2
- **Costs:** 20K USD

|  Number | Deliverable               | Specification                                                                                                                                                                                                                                                                                                             |
| ------: | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      0. | Rights                    | All developed materials will be publicly accessible and public domain.                                                                                                                                                                                                                                                    |
|  **1.** | Bondcoin Smart Contract   | This Ink! Smart Contract will contain the token dynamics for the bondcoin token and the global variables.                                                                                                                                                                                                                 |
| **1a.** | Specifics                 | This Ink! Smart Contract will contain the hash of account ids and balances, basic ERC20 functions, the ability to initiate a burn to claim interest pool assets, and the ability to change global variables.                                                                                                              |
|  **2.** | Stablecoin Smart Contract | This Ink! Smart Contract will contain the token dynamics for the stablecoin token.                                                                                                                                                                                                                                        |
| **2a.** | Specifics                 | This Smart Contract will contain the token dynamics for the stablecoin smart contract. Specifically, the hash of account ids and balances, basic ERC20 functions, the ability for users to initiate a burn to get bondcoins at parity value, and the ability to mint new tokens when prices exceed $1 on the open market. |

### Milestone 3 — Proof of Concept (Stage 2)

- **Estimated duration:** 4 Weeks
- **FTE:** 2
- **Costs:** 20K USD

|  Number | Deliverable                  | Specification                                                                                                                                                                                                                                                         |
| ------: | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      0. | Rights                       | All developed materials will be publicly accessible and public domain.                                                                                                                                                                                                |
|  **1.** | Treasury Smart Contract      | This Ink! Smart Contract will contain the token dynamics for the Treasury.                                                                                                                                                                                            |
| **1a.** | Specifics                    | By far the most complex of all the smart contracts, this contract will allow users to borrow funds from the treasury pool with an algorithmically managed APR storing interest up to the excess amount and redirecting the rest to the interest pool.                 |
|  **2.** | Interest Pool Smart Contract | This Ink! Smart Contract will contain the token dynamics for the interest pool.                                                                                                                                                                                       |
| **2a.** | Specifics                    | This Ink! Smart Contract will hold the pool of tokens in preparation for distribution. It will contain the function to either make divided payments when it is filled to capacity or to have Bondcoin tokens redeemed for an equivalent % of the stored assets. pool. |

## Future Plans

- This proof of concept will be relatively limited in functionality, unaudited, and not ready for commercial or production deployment. It is designed primarily to give the Web3 foundation a feel for the technical aspects and functioning of an algorithmically managed stablecoin and lay the ground work for a full production build.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
