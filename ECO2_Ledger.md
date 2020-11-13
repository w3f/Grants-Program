# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** ECO2 Ledger
* **Proposer:** nick-eco2
* **Payment Address:** 3P7RGReWYVmhg2nUMXR9Dhv5S95DzwwfUX 

## Project Overview
If this application in response to an RFP then please indicate this on the first line of this section.

### Overview

ECO2 Ledger is a public blockchain built on Substrate and aims to solve the problems in the global carbon trading market by using blockchain technology to digitize carbon assets, and to improve the liquidity and credibility of global carbon assets by taking advantage of blockchain’s characteristics such as decentralization, open-access and non-tampering.

### Project Details 

ECO2 Ledger’s Goals:

1. Expand the market base of the global carbon market
2. Provide decentralized governance of the global carbon market
3. Increase the frequency and speed of global carbon trading
4. Improve data transparency in carbon markets
5. Provide an application framework for programmable carbon credits

For further technical details, please see https://github.com/ECO2Ledger/eco2/blob/master/docs/interfaces.md

In order to achieve these objectives, ECO2 Ledger provides the following functions to specifically accomplish the application of blockchain technology in the carbon market:

1. Global Carbon Asset Database: After being certified by international standards (such as VCS, GS, and CDM), the carbon assets of emission reduction projects can be published on ECO2 Ledger. Unlike the closed carbon asset account systems that currently exist in the market, carbon assets on ECO2 Ledger are publically viewable and reviewed by a review committee on the blockchain. Once the carbon assets are on-chain, transnational and cross-regional trust issues can be solved, and the traceability of the blockchain also improves the credibility of carbon trading data. 

2. Corporate and Personal Carbon Accounts: At present, it is difficult for individuals to create their own accounts and own their own carbon assets within the current structure of the global carbon market. On ECO2 Ledger, accounts can be created for individuals and allow for the direct operation of the account including asset transfer and asset retirement (carbon offsetting). Enterprises can also make their own blockchain-based accounts on ECO2 Ledger, eliminating the fees that exist in traditional registry systems and allowing for less-restrictive carbon trading and carbon neutralization.

3. On-chain P2P Trading: When carbon assets data is imported to ECO2 Ledger, users can complete operations of carbon assets on-chain, realizing blockchain-based carbon trading. Transaction costs are minimal, improving the efficiency of trading, while transparent trading records can increase credibility.

4. On-chain Carbon Offsetting: Carbon neutralization is the most important purpose of carbon trading. Records of carbon neutralization (the offsetting of carbon emissions) are open and transparent, conducive to global climate governance. The offsets of individuals and enterprises on ECO2 Ledger can be made viewable for any and all to monitor and review. In addition, publically demonstrating carbon neutrality incentivizes and normalizes climate-friendly behavior, providing opportunities for environmentally-conscious publicity, increasing the willingness of others to participate in carbon neutrality, and reducing the doubts of effective climate action.

5. Applications of Programmable Carbon Assets: The use of carbon assets in the current carbon market system is limited to trading and offsetting. However, through the use of programmable carbon credits, emission reduction activity become more integrated into business models and the daily life of consumers. Carbon assets hosted on a blockchain like ECO2 Ledger can be used in applications such as paying for share bikes, paying for airline tickets across multiple carriers, or paying for extra packaging when shopping online. As economies become more sustainability-oriented and internet infrastructure is transformed through distributed ledgers, ECO2 Ledger offers a myriad of possibilities for the application of carbon assets in emerging digital economies that value carbon neutrality. 

6. Zero-Carbon Blockchain Network: The operation of ECO2 Ledger will consume electricity, resulting in carbon emissions. In their operation of ECO2 Ledger, the carbon emissions of users will be estimated and then neutralized through the use of carbon credits. For example, when executing a transaction, the fees accrued by users will be offset through the purchase of carbon assets on ECO2 Ledger. A dedicated pool of carbon assets for this purpose will be created on ECO2 Ledger, which can be viewable by all network participants. In addition, ECO2 Ledger will not use a Proof-of-Work consensus mechanism, but rather Nominated Proof-of-Stake, further reducing the energy requirements of the network.

### Ecosystem Fit 

The concept of ECO2 Ledger is related to ideas expressed in the DAO IPCI, as both projects seek to provide blockchain solutions for international carbon trading. However, ECO2 Ledger is more focused on providing individual access to carbon markets and creating a blockchain network that is carbon neutral.

ECO2 Ledger is also tangentially related to Energy Web Chain, a project that is building a public, enterprise-grade blockchain based on Polkadot and is focused on the energy sector, which is closely related to the carbon offset market.

## Team

### Team members

Neo Yu-yang Lin (CEO)
Guan Cheng-en (CTO)
Nicholas Manthey (Head of Research)

### Team Website

https://www.eco2.cc/ 

### Legal Structure 

ECO2 Foundation, LTD.
60 Paya Lebar Road, #08-55, Paya Lebar Square, Singapore 409051

### Team's experience

Guan Cheng-en (CTO) has over 13 years of software development experience including:
Senior Software Development Engineer, ASCH (2 years, 6 months)
Senior Software Development Engineer, SAP (6 years, 1 month)
Software Development Engineer, IBM (5 years,1 month)

Neo Yu-yang Lin (CEO) has 4 years and 6 months of experience in international carbon trading and reforestation project development in China.

Nicholas Manthey (Head of Research) has 2 years and 5 months experience conducting due diligence and business development in China's blockchain industry and 1 year and 5 months experience in international carbon trading and reforestation project development in China.

### Team Code Repos
https://github.com/ECO2Ledger/eco2 

### Team LinkedIn Profiles
https://www.linkedin.com/in/cheng-en-guan-0027b8165/
https://www.linkedin.com/in/neo-lin-0605/
https://www.linkedin.com/in/nicholas-manthey-8a3abb74/

## Development Roadmap

### Overview
* **Total Estimated Duration:** 33 weeks
* **Full-time equivalent (FTE):**  2
* **Total Costs:** 1.8

### Milestone 1
* **Estimated Duration:** 18 weeks
* **FTE:**  2
* **Costs:** 0.8 BTC

1. Registration of a carbon credit project: Register the details of the carbon credit project on-chain.

2. Registration of carbon credit assets: issue of carbon credits in a certain year under the name of existing carbon credit projects, and the total amount issued shall not exceed the number declared by the carbon credit projects.

3. Additional issuance and write-off of carbon credit assets: Additional issuance of existing carbon credit assets shall be conducted, and the total amount after additional issuance shall not exceed the declared amount of carbon credit projects. If transfering the remaining on-chain carbon credit assets off-chain, they can be written off (burned).

4. Carbon credit trading: Users can buy/sell carbon credit assets and check the history of transactions. The traded carbon credits will affect the balance of carbon credit assets in personal accounts.

5. Carbon neutralization: Use the carbon credit assets in personal account for carbon neutralization.

6. Transfer of carbon credit assets: transfer of carbon credit assets from one's own account or collect carbon credit assets transferred from others.

7. Test: The above functions are in line with the requirements.

### Milestone 2
* **Estimated Duration:** 7 weeks
* **FTE:**  2
* **Costs:** 0.5 BTC

1. On-chain governance module: including initialization and membership change of board of Governors, Foundation and Asset Review Committee.

2. Asset Review Module: The Asset Review Committee shall review the registration, issuance and destruction of carbon credit assets to ensure that there will be no double spending problem.

3. Supernode Election Module: election of 39 supernodes.

4. Standard Assets Registration Module: the registration and issuance of standard assets can be transferred without audit.

5. UI Visual Adjustment: Optimize process and page layout, improve transaction availability and ease of use.

6. Testing: The above functions are tested in accordance with the requirements.

### Milestone 3
* **Estimated Duration:** 8 weeks
* **FTE:**  2
* **Costs:** 0.5 BTC

1. Test Network: Set up the test network and invite relevant personnel to open test.

2. Test: Lead the test, analyze and solve the problems.

### Community engagement

As part of the Program, we require that you produce an article/tutorial and publish it (for example on [Medium](https://medium.com/)). It should explain your work done as part of the grant. 

Forthcoming article related to work done as part of this grant will be published on our website and medium.com and shared on our social media accounts (https://twitter.com/eco2_ledger; https://www.linkedin.com/company/eco2global/)

## Future Plans

ECO2 Ledger will be governed by its community once its mainnet is released. After mainnet launch, the ECO2 Foundation will continue to promote the use of ECO2 Ledger for carbon trading, encourage people and enterprises to use ECO2 Ledger to offset their CO2 emissions, and collaborate and support individuals and organizations that want to make decentralized apps that incorporate blockchain-based carbon credits.

## Additional Information

Work has been initiated within Milestone 1. The estimated time given above for Milestone 1 is the approximate time in which all tasks in Milestone 1 will be completed.

The ECO2 Foundation has not applied for other grants concerning the development of ECO2 Ledger.
