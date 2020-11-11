# Open Grant Proposal

* **Project:** The Olympus Protocol
* **Proposer:** [olympusprotocol] (https://github.com/olympusprotocol)
* **Payment Address:** bc1qqmaddyfejargdwqsdc9t2340296p7cu95m9spg 

## Project Overview :page_facing_up: 
Olympus is a currency and finance protocol built on substrate, which uses rules-based market operations to regulate the supply of the backed currency token DEN. Olympus will offer sustainable staking rewards from market operation profitability and access to easy-to-use decentralized financial services.

### Overview
**Olympus** is a decentralized finance protocol built around the currency token DEN. DEN are floating-rate (unpegged) tokens   backed by $1. Supply is managed via supply operations, which occur via the logic of the Supply Manager which buys and burns tokens when they trade below $1 and mints and sells tokens above $1. These purchases and sales are carried out through the protocol Automated Market Maker (AMM), which provides an arbitrage (a discount/premium on market price) to encourage liquidity. Policy constants of the Supply Manager are consensus-based and controlled via the governing Decentralized Autonomous Organization (DAO). Market operations, given they occur, always produce profits which are distributed to holders via rebase. 

We intend for Olympus to run on its own Parachain on the Polkadot network. The bond posted for the Olympus Parachain will be funded via time-locked staking (2 years), which will receive a slightly higher portion of market operation profits. If the bond cannot be funded, the protocol will run on Parathreads or possibly as a series of smart contract on Acala or another Parachain. Our initial testnet and protocol configuration will be built on Kusama and ported onto Polkadot for the mainnet launch.

The goal of the Olympus protocol is to create a truly autonomous currency system, with its own policy and value detached from the legacy financial system. This is in response to the crypto industry's growing reliance on fiat stablecoins, which are a good interim solution to volatile currency in the Decentralized Finance market but should not be adopted long-term, since they are merely an extension of legacy finance and their values are controlled by the policies of permissioned central banks.

### Project Details 
The final state of the network will have the following features:
* Market Operations controlled by Supply Manager carried out through protocol AMM
* Staking contract with dual-custody of reserves and choice of reserve asset
* Olympus DAO, controlling Treasury funds and policy constants

Additionally, our team will offer its own product, the Olympus Platform, that provides access to easy-to-use defi services and strategies for DEN stakers. However, anyone will be able to offer their own services through the protocol.

This grant application is intended to fund only the first of these features, market operations and the supply manager. This will allow us to launch with a Federation-controlled Treasury, and continue to build and decentralize with a live token and an active community.

Market operations are carried out via a protocol-native Automated Market Maker (AMM). The AMM is perpetually rebalanced to track the market price of DEN while maintaining the protocol-mandated discount rate. This discount rate provides an arbitrage to market participants to incentivize liquidity for the protocol. The balance of the AMM is calculated as follows:
  DEN : USD = (100 * Daily Mint) DEN : (100 * Daily Mint * Market Price * (1 - Discount)) USD 
If, for example, daily mint = 1,000 DEN, price = $1.50, and discount rate = 3%, the pool would have a balance of 100,000 DEN : 147,000 USD. At that size, the purchase of 1,000 DEN (daily mint), brings the pool to 99,000 DEN: 148,700 USD, which makes the price approximately $1.50 (the market price). The discount effectively shrinks in response to purchases until the pool reaches parity with the market price.
https://ibb.co/kqdFxvG

The supply manager carries out the mint/burn calculations and funds/rebalances the AMM. The mint/burn calculation is as follows:
  Given f = market price / reserve price
  * If f > 1, mint and sell ((supply * f) / 365) * Protocol Inflation Constant
  * If f < 1, purchase and burn ((supply / f) / 365) * Protocol Deflation Constant
The inflation/deflation constants are set at the protocol level, initially by the team and ultimately by the DAO. These serve to scale buy/sell pressure up and down as desirable. Lower constants mean less pressure, more volatility, and greater appreciation and market operation profit potential.
The Supply Manager relies on market price data, which is provided via the integration of a Chainlink Oracle.
The Supply Manager serves as the treasury hot wallet, holding some amount of reserves needed for operations.
https://ibb.co/tXyJ9Dn

### Ecosystem Fit 
We see two projects in the Polkadot ecosystem that are taking on similar issues: Acala and Sora.

Sora is the most similar project in theory; like Olympus, they are focused on introducing central bank models to their protocol to create a real digital currency. However, they take a very different approach, valuing their token via a liquidity bonding curve whereas we use a floating-rate backed currency with premium-driven market operations. These approaches should yield different results, and we look forward to growing and innovating alongside the Sora project.

Acala has stronger similarities in practice. One of the longer-term goals for, and the main service to be offered by Olympus is  provisioning access to decentralized financial services. This is also one of the main goals of Acala, and they have made great progress in initializing the Polkadot DeFi ecosystem to allow this. We expect to build heavily off of Acala, utilizing their AMM implementation, as well as swaps and pools. We also see an interesting potential partnership utilizing their Homa Protocol to tokenize staked DEN. A whole slew of financial products can be created in this way, i.e. LDEN-LDOT, a yielding DEN account using yielding LDOT as the underlying, or LDEN-aETH, a yielding DEN account using ETH provided to an Aave pool as the underlying.

## Team :busts_in_silhouette:

### Team members
* Gray Troxell (Full-Time, Founder, CEO, Game Theory/Policy Designer, Community Leader)
* Daniel Bara (Full-Time, Founder, CFO, Development Financial Manager, Investor Outreach/Relations)
* Adrian Bara (Part-Time, CTO, Development Manager, Architecture)
* Alex Pavyluk (Part-Time, Development Liason)
* Artem Zaitsev (Full-Time, Development Team Leader)
* Nax Heinrich (Advisor, Game Theory/Policy Design)
* JP Casteras-Schnappes (Legal Advisor, US/Abroad Regulatory Management)

### Team Website	
* https://www.olympusprotocol.org/

### Legal Structure 
We will soon be incorporated in Singapore.

### Team's experience
Please describe the team's relevant experience.  If the project involves development work, then we'd appreciated if you can single out a few interesting code commits made by team members on their past projects. For research-related grants, references to past publications and projects in a related domain are helpful.  

Gray Troxell
* Over 4 years experience investing and trading in digital assets.
* Development experience with Solidity, Rust, NodeJS, Javascript, and Swift.
* Formal training in Economics and game theory from the University of Washington in Seattle.
* Passionate about decentralizing global currency and governance

Daniel Bara
* Over 25 years experience in technology entrepreneurship.
* Commodity trading contractor for Louis Dreyfus Commodities since the late 90's.
* Co-founder of Prediction Labs, a market technology and consulting company.
* Experience in crypto markets since 2012.

Adrian Bara
* Over 30 years experience in financial services, including with Accenture Group in multiple countries and at Santander in the UK.
* Worked on many projects for large banks, credit card companies and insurers in the UK including Barclays, Lloyds, HSBC, Prudential, Canada Life and Visa Europe
* Bachelor’s Degree in Computer Science from Instituto Tecnológico Buenos Aires.

Artem Zaitsev
* CTO of Idealogic, a team of experts focused on full-cycle development.
* Head blockchain developer on more than six projects.
* R3 Corda Certified Developer.
* Bachelor's Degree in Computer Science from Kirovohrad National Technical University.

### Team Code Repos
* https://github.com/olympusprotocol/olympus

### Team LinkedIn Profiles
* https://www.linkedin.com/in/baradaniel/
* https://www.linkedin.com/in/gray-troxell-a0a0361bb/
* https://www.linkedin.com/in/adrian-bara-27ba942/
* https://www.linkedin.com/in/artem-zaitsev-b65825137/


## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 8 Weeks
* **Full-time equivalent (FTE):**  3 
* **Total Costs:** 2 BTC

MS 1 |               | - - - - - - - - - - - |
MS 2 | - - - - - - - - - |               | - - - - - - - - - - - - - |
Week |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |

### Milestone 1 — Implement Protocol Automated Market Maker
* **Estimated Duration:** 3 Weeks
* **FTE:**  2.5
* **Costs:** 0.4 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a full tutorial that explains how to interact and trade with the protocol AMM |
| 0c. | Testing Guide | The code will have proper unit-test coverage (>90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Substrate module: Contracts | Implementation of Ink smart contract pallet. Smart contracts will create a functioning Automated Market Maker. Pool is one-way for users; they can only take trades as counterparty to protocol (sell when protocol is buying, buy when protocol is selling) |
| 2a. | Contract: Swap | We will create a swap function to allow trades to occur (counterparty to protocol only) |  
| 2b. | Contract: Add Liquidity | We will create a function to add liquidity to the pool (protocol only) | 
| 3.  | Docker | A docker container that will also run on CI to test the deliverables of the milestone | 
| 4.  | Repository | Repository including a README that describes the milestone and explains how to run, test and contribute |

### Milestone 2 — Implement Token Chain with Supply Manager
* **Estimated Duration:** 6 Weeks
* **FTE:**  3.5
* **Costs:** 1.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how the supply manager calculates mints and burns, and how intended orders are carried out through the AMM. |
| 0c. | Testing Guide | The code will have proper unit-test coverage (>90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Substrate module: orml | We will use the orml pallet for a multi-token configuration (DEN and USD) |
| 2. | Substrate module: Oracle | We will implement an oracle which pulls market price data for calculations |  
| 3. | Substrate module: Scanner | We will create a scanner that pulls the current supply of the token |  
| 4. | Substrate module: Mkt Op Calcs | We will create a Substrate module that calculates the appropriate number of tokens to buy or sell on a given day based on market price and supply |  
| 5. | Substrate module: Rebalancer | Uses tokens from mint, and funds from treasury, to maintain proper balance of protocol AMM.
| 6. | Substrate chain | Modules work together to calculate the correct number of tokens to buy or sell in a day, based on market price and on-chain supply data, and fund the protocol AMM so that purchases/sales may occur |  
| 7.  | Docker | A docker container that will also run on CI to test the deliverables of the milestone | 
| 8.  | Repository | Repository including a README that describes the milestone and explains how to run, test and contribute |

### Community engagement
We plan to write several pieces about the protocol. They include, but are not limited to:

* Initial observations from testnet dynamics, and the economics behind Olympus (Medium)
* Insights from testnet model and the ideal initial policy state (Academic Paper)
* Comparison of Potential Future Currency Systems and their Implications (Academic Paper)
* Full Olympus User and Investor Guide (at mainnet/token launch) (Medium)
* Olympus Reserve Walled Garden Dynamic and its Use in Yield and Lending Strategies (Medium)
* Ideal processes of monetary policy management in a DAO structure (Medium or Paper)
* Implications and Uses of a Decentralized Sovereign Wealth Fund (Medium or Paper)

## Future Plans
Future Protocol Development will focus on the following:
* Rebasing/Protocol Profit Distribution
* Staking
  * Reserve asset dual-custody and choice
  * Protocol profit distribution in native reserve assets
  * Access to DeFi services with reserves, creation of DEN from yield
* DAO
  * Control of policy
  * Control of treasury & mint
  * Control of dSWF
  * Control of protocol upgrades
* Cross-chain Transactions
  * Automated withdrawal/conversion of reserve assets

**Open Source Development Opportunities**
The provisioning of DeFi services will be completely open when staking and reserves are live. We will build a framework for connecting to the protocol and structuring contracts, which can be used by any developer to offer services to Olympus stakers.
Our team also plans to build an independent solution, the Omega platform, which will provide access to lending/LP opportunities, vaults, insurance, and more via web and mobile clients.

All work done on the protocol will be completely open source and available for developers to build off of. Transparency is an important attribute of a trustworthy currency authority and system, and therefore it aligns with our values to make all of our code and governance activities open on github and within our community chats.

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

* What work has been done so far?
  White paper and conceptualization are complete, high-level architecture has been designed, and development roadmap has been created. Development is expected to begin very shortly.
* Are there are any teams who have already contributed (financially) to the project?
  Our founding team has covered all costs accrued thus far out-of-pocket. We have an investor on the sidelines who will cover any shortfall that may arise between the use of this grant and our next source of funding, whether that be the General Grants program or a VC-led seed round.
* Have you applied for other grants so far?
  No, although we have spoken with two funds and the Parity Builders Program, which we strongly intend to join.
* How can I get involved?
  Anyone looking to get involved is more than welcome to reach out to team@olympusprotocol.org. Telegram groups and community creation/outreach will occur once the testnet is in use and we are preparing to launch. Investors should wait for this time, at which a token sale will occur and new tokens will become available for purchase from the protocol AMM.