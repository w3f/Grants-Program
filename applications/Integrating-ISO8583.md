# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Integrating ISO-8583 
- **Team Name:** Stardust Labs Inc.
- **Payment Address:** 0xF3d5F194D9eF961a85a4d5be05EFda7B2B33005d (DAI, Ethereum Mainet)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

> ⚠️ _The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe._

## Project Overview :page_facing_up:

### Overview

- A brief description of your project.

This proposal is in [response to the ISO-8583 RFP, that aims to make it easy and possible for the traditional finance industry to leverage substrate and ink! smart contracts to interact with ISO 8583 in various ways](https://github.com/w3f/Grants-Program/blob/master/rfps/open/ISO_8583.md). While it seems the original RFP was primarily for a straightforward techincal implementation, the actual implementation of ISO-8583 on a distributed, permissionless architecture has several unsolved challenges. This grant proposal is to research and develop acceptable solutions to those challenges or at the very least provide the Web3.0 Foundation with a comprehensive view of the options and tradeoffs.

- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.

Supporting international standards would smooth the connection between crypto and traditional financial institutions and is a [go-to-market strategy for several competing projects](https://www.cryptopolitan.com/iso-20022-compliant-crypto-list/). While those efforts are focused on the newer ISO-20022, and not ISO-8583, there is significant value in being the first blockchain to support traditional banking infrastructure and dislodge incumbent networks such as SWIFT or Visa/Mastercard.

- An indication of why your team is interested in creating this project.

I've built credit card infrastructure before during my role as an analyst at Capital One and believe I can bring some experience from traditional finance to this problem. At the very least I can call out the details and complex logistics that others without might miss. 

### Project Details

[ISO-8583](https://en.wikipedia.org/wiki/ISO_8583) is the international standard for card based payments and transactions. It's used everywhere from ATMs to Merchant point of sale terminals. Supporting international standards could help smooth the connection between crypto and traditional financial institutions. [Further simplifying matters is](https://crates.io/crates/iso8583) [that several rust crates exist](https://github.com/rkbalgi/iso8583_rs) [supporting the packing and unpacking of ISO-8583 data streams.](https://docs.rs/i8583/latest/i8583/)

At first glance, it seems like one could easily just integrate these packages to achieve the goals of the RFP, namely:
- (Java) APIs or packages that make it possible for the traditional finance industry to integrate a substrate-based ISO 8583 solution into their existing tech stack.  
- Proof of concepts, potentially leveraging the unique [Off-Chain Features of Substrate](https://docs.substrate.io/v3/concepts/off-chain-features/) that show the advantages of using ISO 8583 together with Substrate.  
- Efficient on-chain representation of the ISO 8583 syntax 

Unfortunately, the logistics of actually implementing ISO-8583 compliant infrastructure on blockchains is unintuitvely complex. At a minimum, 3 major issues exist that must be addressed.

**Security**
ISO-8583 datastreams [reveal far too much information to ever be publically exposed](https://neapay.com/post/iso8583-atm-pos-crypto-api-integration-coinbase-binance_102.html). Here neapay proposes using ISO-8583 to connect to Coinbase to purchase crypto. However you can see that once the datastream is unpacked, the user's financial details are immediately revealed. Unpacking data is a trivial process that has no security, ISO-8583 data is not encrypted. Of note is the exposed primary account number (F02_PAN: 9876 5000 0030 6082). Most people would recognize this number faster as their credit card number. While it is possible, and implemented in practice, to transfer the data securely between two, trusted centralized servers using [Diffie Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange), research is needed to construct a way to place ISO-8583 data on-chain securely, if it is even possible. There are also laws about retaining this information for a fixed period of time, for example, [Minnesota, a US state mandates that this information is deleted within 48 hours of reciept](https://www.revisor.mn.gov/statutes/cite/325E.64) which is at odds with the enduring, provable structure of a blockchain. 

**Transaction Reversals**
Outside of simple purchases, one of the most common messages communicated over ISO-8583 are [chargebacks.](https://en.wikipedia.org/wiki/Chargeback) [About 0.6% of all transactions are ultimately recalled, though it varies by industry.](https://shiftprocessing.com/chargeback-statistics/) ISO-8583 was designed to handle this process seamlessly and has a reserved MTI code for all chargebacks and reversals (x4xx). Unfortunately, modern blockchains by design are irreversible. From the original [introduction of Satoshi Nakamoto's white paper](https://bitcoin.org/bitcoin.pdf). 
> While the system (traditional finance) works well enough for most transactions, it still suffers from the inherent weaknesses of the trust based model. Completely non-reversible transactions are not really possible, since financial institutions cannot avoid mediating disputes. The cost of mediation increases transaction costs, limiting the minimum practical transaction size and cutting off the possibility for small casual transactions, and there is a broader cost in the loss of ability to make non-reversible payments for nonreversible services. With the possibility of reversal, the need for trust spreads.

Supporting ISO-8583 functionality would require building a new token standard, or making changes to the operation of the blockchain to allow reversible transactions. A solution highlighted in the original bitcoin white paper is automatic escrow accounts, but research would be needed to identify the best way to implement these accounts or if there are better solutions.
 
**Authorizations and Privilages**
This leads to another major challenge. In traditional banking, the users are not equal. Certain entites such as the issuing bank or network can make decisions unilaterally without recourse. An example of this would be the aforementioned chargeback or transaction reversals which can be performed by the issuing bank or network for any reason. Blockchains operate on an equivalent peer model, and it is an open question as to how to authorize a super user and who should maintain super user priviliages over the entire network.  

For Milestone 1 we aim to deliver a robust implementation proposal with solutions to these challenges. While likely no the intent of the RFP, significant foundational reserach has to be done into the feasibility of integrating ISO-8583 with Substrate (or even blockchains in general). These challanges have significant risks and may prove unfeasible. For example, it is possible that it is ultimately too risky to store ISO-8583 data on-chain or even expose it to nodes. While we do not aim to make such determinations during Milestone 1, we will provide a detailed documentation of the major challenges, options for addressing these challenges, and the major tradeoffs. We will also try to summarize what others have done in this space.

### Ecosystem Fit

Supporting international standards would smooth the connection between crypto and traditional financial institutions and is a [go to market strategy for several competing projects](https://www.cryptopolitan.com/iso-20022-compliant-crypto-list/). While those efforts are focused on the newer ISO-20022, not ISO-8583, there is significant value in being the first blockchain to support traditional banking infrastructure and dislodge incumbent networks such as SWIFT or Visa/Mastercard.

## Team :busts_in_silhouette:

### Team members

- Adit Patel

### Contact

- **Contact Name:** Adit Patel
- **Contact Email:** adit.patel@stardustfunds.com
- **Website:** https://stardust.finance/

### Legal Structure

- **Registered Legal Entity:** Stardust Labs Inc. is a registered C-corp incoporated in Wyoming

### Team's experience

Adit is a technical expert on cryptography, distributed ledgers, financial markets, and new product development. He graduated Columbia in 2011 with a BSc in Applied Physics and a minor in Econ. During his time there, he took additional coursework focused on cryptography, statistics, and fundamental computer science. After graduating, he joined Capital One and quickly rectified the failing, newly launched small business brand. These efforts made him well known as the go-to analyst for successful new product development, strategy and launch. He was tapped to design and launch financial products for Hispanic consumers and tapped again to build Capital One’s B2B financial products. During his tenure there, Adit experienced first hand the hard learnings that lead to efficient risk mitigation in financial products and the intricacies of financial engineering. He has a decade of technical experience at the intersection of finance and technology and has built and implemented financial products including credit cards before.

### Team Code Repos

- https://github.com/adit313/

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/adit-patel/

## Development Status :open_book:

- link to RFP: https://github.com/w3f/Grants-Program/blob/master/rfps/open/ISO_8583.md

## Development Roadmap :nut_and_bolt:

Through this grant proposal, we aim to provide a well-detailed analysis and implementation plan for incorporating ISO-8583 with Substrate.

### Overview

- **Total Estimated Duration:** 4 Weeks
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 10K

### Milestone 1 — ISO-8583 Implementation Plan Research

- **Estimated duration:** 4 Weeks
- **FTE:** 1
- **Costs:** 10k USD

|  Number | Deliverable       | Specification                                                                                                                                                                                                                                                                                                                  |
| ------: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      0. | Rights            | All developed materials will be publicly accessible and public domain.                                                                                                                                                                                                                                                         |
|  **1.** | Research Goal     | A well-detailed analysis and implementation plan for incorporating ISO-8583 with Substrate with solutions or options for the outstanding challenges.                             |
| **1a.** | Specific Coverage | We will deep dive into the outstanding challenges related to security, reversibility, and authorization. As part of this, we will cover some industry security standards such as PCIDSS compliance and it's applicability, though this is not legal advice or intended to be legal advice. For each of these three challenges we will attempt to provide either a well developed solution or options with careful detailed tradeoffs for the Web3.0 Foundation team to select from. |

## Future Plans

- We think it is more important at this stage to have a robust implementation plan before attempting to build. If the plan is feasible and acceptable to the Web3.0 team, we will follow up with another grant for implementation.  

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** [Previous Grantee](https://github.com/adit313/Grants-Program/blob/master/applications/stardust.md)
