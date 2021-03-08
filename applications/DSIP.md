# W3F Open Grant Proposal

> 🌏 This page is also available in [Chinese (中文)](./application-template-cn.md).
> 
> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
> 
> See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:** Decentralized stablecoin issuance platform
* **Team Name:** [DSIP Network](https://github.com/dsip-network)
* **Payment Address:** 0x03433b92eF68DC8b50E281491938cB62c8B4F570


> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 
### Overview

Despite the rapid growth of DEFI over the last year or so, high-quality assets from traditional financial markets are still not accessible to the DEFI market. There is still a big gap between DEFI and traditional financial markets.

DSIP hopes to build a set of decentralized and open stablecoin issuing platform by referring to the way of soft binding of USD DAI issued by MarkDAO and relying on Substrate, a new generation of blockchain basic tool.Any organization can issue stablecoins with soft binding of traditional financial assets through DSIP.These stablecoins can be tied not only to fiat coins, but also to the value of stocks, futures, precious metals, or even to a combination of assets.

Through the exchange between the issued stablecoins, a decentralized financial market anchoring the real financial market is established, thus breaking the gap between the decentralized financial market and the traditional financial market.Inject more and richer valuable assets into DEFI.For Poka Ecology in the DEFI field to provide a stronger competitiveness.

The original members of DSIP-Network have been working in the Internet, blockchain, and financial-related industries for many years.Having studied the Internet, blockchain and DEFI for a long time, we firmly believe that the future of DEFI lies in connecting with the real financial market and providing for the development of the real economy.

#### Integration

DSIP is developed on Substrate 3.0 and will in the future operate as a parallel chain on a Pokard.DSIP obtains off-chain price information through the parallel chain of the prophecy service through the docking of the relay chain, and connects with other parallel chains of DEFI through the relay chain to provide more digital assets for DEFI applications.DSIP will also support the !ink smart contract module, allowing third parties to further extend the system based on Ink.

### Project Details 
The whole DSIP system will be divided into five modules: Orcale, Multi-asset Management, Issue Protocol, Pledge Issue and Auction Clearing:

#### Orcale

DSIP network can know the price of external assets through the orcale, which provides data support for the issuance of stablecoin.In the test phase, the DSIP network will use OCW to realize the orcale.After its formal application, DSIP hopes to connect to the parachain of other orcale of Poka Ecology to obtain data.

#### Multi-asset Management

There will be multiple tokens on DSIP chain, and a multi-asset management module will be used to manage these assets.

There are five types of digital assets on the DSIPL chain:

1.  Main chain token (SIP);
2.  Off-chain assets (such as fiat currency, stocks, futures, etc., which are only used to identify the orcale and cannot be held)；
3.  Cross-chain assets (such as BTC, ETH, DOT, etc.);
4.  The stablecoin issued by the stablecoin project;
5.  Management tokens for the stablecoin project;

#### Issue Protocol

The issuing protocol is responsible for the definition and management of the issuing rules of the stablecoin.The early issue protocol is managed directly by the owner.In the formal application, democracy module will be introduced for management.

The content that needs to be defined in the stablecoin issuance protocol includes:

1.  The off-chain assets that are bound;
2.  The assets available for pledge and the pledge allocation include:

1.  Minimum pledge rate: when pledging to lend stablecoin, the pledge rate shall not be less than the minimum pledge rate;
2.  Liquidation pledge rate: when the pledge rate is less than the liquidation pledge rate, the liquidation is triggered;
3.  Restriction on the proportion of stablecoins issued: The upper limit on the proportion of stablecoins issued through this asset pledge to the total stablecoin issued;

#### Pledge Issue

Under the issue protocol, users can lend stablecoins by pledging specified digital assets, and the assets can be redeemed after the user returns the stablecoin.

When the market fluctuates and the price changes, the clearing mechanism will be triggered. Some of the assets pledged by users will be auctioned in order to repay loans and improve collateral rates.

![](https://github.com/dsip-network/graphics/blob/main/images/dsip-1.png?raw=true)

#### Auction Clearing

When a clearing occurs, the auction system will receive a clearing auction request.In order to maximize the protection of the user's pledged assets, the auction will consider selling only stablecoins that meet the reduced minimum pledge rate.

The auction process is as follows:

1.  According to the current price of the orcale down 10% to start bidding;
2.  If no one bids within 10 minutes, the price will be reduced by 1% until the price is reduced to 20% of the previous price.
3.  If none bids, the auction will fail and return, waiting for re-auction;
4.  If someone bids, they will wait for 10 minutes for others to bid. If no one raises the price within 10 minutes, the bid is successful.
5.  The minimum price increase is 0.5% each time;
6.  If the auction price is higher than expected, the number of lots will be reduced in order to reduce the total auction turnover.

![](https://github.com/dsip-network/graphics/blob/main/images/dsip-2.png?raw=truz)

### Ecosystem Fit 

There are many pioneers in stablecoin issuance. There are mainly two categories, one is the over-pledge to issue stablecoin, the other is the algorithmic stablecoin.

The typical representative of the over-pledged stablecoin issue is the aforementioned MakerDao.There are two main differences between DSIP and MakerDao:

1.  DSIP is a platform for issuing stablecoins, which can issue many different stablecoins;
2.  DSIP is based on independent main chain, which gives high priority to core business requests and can avoid systemic risk when block congestion occurs;

The difference between algorithmic stablecoin and DSIP is that DSIP requires a pledge while algorithmic stablecoin does not require a pledge.

Algorithmic stablecoins need to accumulate value consensus over a long period of time to achieve value stability. However, at present, algorithmic stablecoins are still difficult to be stable.After algorithmic stablecoin is widely accepted, DSIP can be upgraded to support algorithmic stablecoin in two ways:

1.  To absorb high-quality, widely recognized algorithmic stablecoin as a pledge asset;
2.  Provide an algorithmic stablecoin module that allows users to issue algorithmic stablecoins through DSIP;

## Team :busts_in_silhouette:

### Team members
- Tallone - Project Lead / Product Director
- Qiang - CTO
- Ming - Project Manager/Quality Supervisor

### Contact
* **Contact Name:** Tallone
* **Contact Email:** hezhiqun@gmail.com

### Legal Structure 
No Legal Entity

### Team's experience
**Tallone**
- Full-stack Developer
- Over 20 years of experiences in Product Development and Management
- Has plenty of experience in Software Architecture
- Currently focused on Blockchain Development and Cross-chain Technologies

**Qiang**
-   Over 13 years of experiences in Software Development
-   Chief Solution Architect in Tencent
-   Former Team Lead in IBM
-   Core Developer of Smart Cloud / HSLT
-   Code Contributor of KVM
-   Community Contributor in RedHat

**Ming**
- Over 10 years experience in QA team management
- Over 5 years project management experience
- Worked for Huawei, Baidu and Alibaba

### Team Code Repos
* https://github.com/dsip-network/

### Team LinkedIn Profiles
* [Tallone](https://www.linkedin.com/in/tallone-ho-84518a53/)
* [Qiang](https://www.linkedin.com/in/wang-qiang-aa6a2894/)
* [Ming](https://www.linkedin.com/in/%E6%98%8E%E6%98%8E-%E9%AB%98-960b75208/)

## Development Roadmap :nut_and_bolt: 



### Overview
* **Total Estimated Duration:** 8 weeks
* **Full-Time Equivalent (FTE):**  3 ETF
* **Total Costs:** 10,000 DAI

### Milestone 1 Example — Verify Production of Concepts (POC) and Implement Substrate Modules 
* **Estimated Duration:** 8 weeks
* **FTE:**  3
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | Documents containing the description of whole architecture design for DSIP Network. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 85%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | pallet_oracle | Oracle uses OCW to fetch asset prices from outside the chain and synchronize them to the chain. |  
| 2. | pallet_assets | Assets module realizes the management of a variety of Assets |  
| 3. | pallet_protocol | Protocol is used to define stablecoins.The pledge rate is monitored by OCW, and if the liquidation is triggered, the request is called to trigger the liquidation action |  
| 4. | pallet_pledge_issue | Realize the pledge to issue stablecoin and repay stablecoin, and redeem the pledged assets.Check the pledge rate and determine if liquidation is required. |  
| 5. | pallet_auction | The clearing auction module is used to implement the entire auction logic. |  
| 6. | Substrate chain | （1）The administrator calls pallet_protocol to create the stablecoin issuance protocol;（2）The user calls pledge_issue and transfers the pledge token;（3）The user calls pledge_issue to lend the stablecoin;（4）The user calls pledge_issue to repay the stablecoin loan;（5）The user calls pledge_isseu to redeem the pledge token;（6）Pallet_pledge_issue uses offchain_worker to detect the pledge rate of each borrower based on the quotation from Oracle. If the （7）clearing is triggered, the clearing interface is called.（8）Pallet_Auction confirms the subsequent processing of the auction task through on_finalize;（9）The user calls pallet_auction to participate in the auction; |  
| 7. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

## Future Plans
1.  Realize cross-chain transfer, support BTC, ETH and other assets cross-chain transfer;
2.  Identify orcale solutions, including self-developed or connected to third party relay chains;
3.  Implement the issuance of management tokens for the stablecoin project;
4.  Support the management function of the Stablecoin Issuance Management Committee to realize the decentralized management of Stablecoin issuance;
5.  Realize stablecoin insurance mechanism to avoid repayment risk in extreme market conditions;

## Additional Information :heavy_plus_sign: 
-   [https://github.com/dsip-network/](https://github.com/dsip-network/)
