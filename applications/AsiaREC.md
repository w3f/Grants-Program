# AsiaREC - hourly matching tool on chain

> [!NOTE]
> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g., `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://grants.web3.foundation/docs/process) on how to submit a proposal.

- **Team Name:** AsiaREC Limited
- **Payment Details:** 13sSPVKmPe9aJLMnTWQeucbj7rP8zy53qwsWawbiZ7ZEbo7o
  - **DOT**: For the **DOT** 13sSPVKmPe9aJLMnTWQeucbj7rP8zy53qwsWawbiZ7ZEbo7o
  - **Payment**: For the **USDC** 13sSPVKmPe9aJLMnTWQeucbj7rP8zy53qwsWawbiZ7ZEbo7o
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):**  3

> [!IMPORTANT]
> *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide the name and/or pull request of said grant on the first line of this section.

### Overview

Please provide the following:

- AsiaREC: Building a bridge between China’s clean energy market and global standards using blockchain-based hourly-matched RECs.
- AsiaREC is a Hong Kong-based non-profit building a granular certificate (GC) registry to bring hourly matched renewable energy certificates (RECs) to China, following the EnergyTag Standard. Our first pilot was completed in May 2025 with Wanhua, and a second completed in August 2025 with Midea (both large SOEs). We now plan to integrate with Energy Web infrastructure to issue timestamped, verifiable certificates under Configuration 3 of the EnergyTag standard. AsiaREC enables Chinese RECs (GECs) to be layered with hourly generation and consumption data, increasing transparency, trust, and Carbon Border Adjustment Mechanism (CBAM) readiness.  
- China is the largest source of renewable energy and emissions globally. A trusted and granular REC system will be essential to scale corporate climate claims, meet CBAM and RE100 obligations, and unlock carbon finance. AsiaREC exists to ensure global standards can function in the China context, starting with granular RECs. We have the opportunity to enable the decarbonization of the largest and one of the dirtiest grids in the world. The neutrality and decentralization of Polkadot is critical to gaining trust from international stakeholders who currently do not trust opaque Chinese REC systems.
- This pilot introduces transparent, auditable energy certificate data from China to global markets via Energy Web. In this pilot, Energy Web’s Green Proofs infrastructure will serve as the core blockchain system for issuing, storing, and matching timestamped renewable energy data in line with the EnergyTag Configuration 3 standard. 
  - Data Anchoring: Hourly generation data from the China Southern Grid and consumption data from the participating corporate buyer will be validated by AsiaREC and anchored onto Energy Web’s decentralized ledger, ensuring tamper-proof provenance. 
  - Granular Certificate Issuance: Energy Web will be used to issue Granular Certificates representing hourly-matched clean energy attributes, with metadata including timestamps, generator IDs, consumer IDs, and matching results. These GCs will be automatically retired and linked to their associated retired GECs.
  - Matching & Verification: Energy Web’s APIs will enable automated matching of generation and consumption data, producing verifiable records that can be queried by stakeholders.
  - Transparency & Auditability: All certificate and matching records will be recorded in a way that allows independent verification through Energy Web’s public explorer tools, giving global stakeholders confidence in the accuracy and authenticity of the claims.
- Ant Blockchain Integration: Ant Blockchain is being used in energy markets in China and has a vast amount of IoT devices already deployed that capture the energy consumption data. Our long-term vision is to connect AsiaREC to China’s national grid data layer via this cross-chain setup, offering decentralized access to clean energy data. This is not in scope for this pilot however we have already had discussions with Ant Chain. After a successful first tranche of pilots on this MVP, AsiaREC will kick off the second phase of development which will deepen integration with China’s grids through Ant Chain and also GEC registry. During phase 2 we will become production grade, fully accredited and recognized by EU regulators for the purposes of CBAM reporting. Our goal is to establish an APC Granular Certificate (GC) Alliance with corporates that we run pilots with. This APAC GC Alliance will fund AsiaREC until we are self-sustaining, but a second grant may be required to supplement any funding shortcuts. 

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- AsiaREC has a web2 MVP that we have conducted two pilots on. We can give the team a demo anytime. 
- Pitch deck: https://docs.google.com/presentation/d/1d9-ouTszOlTf6rAN5wrF9vz9-D7goV4VpjiSG7oBCAI/edit?slide=id.p1#slide=id.p1
- Architecture of AsiaREC Config 3 China Market Hourly Matching Platform on Energy Web Infra: https://docs.google.com/presentation/u/1/d/1enk7QsmVFh-wXQtUpsL0FqyBBWV7tg37/edit?slide=id.p1#slide=id.p1
- This pilot will be using Configuration 3 of the Energy Tag Standard and we will tailor it for the China Market (primarily processing data for cross border transfer). This will not be a general purpose regsitry that can be applied to any market, although we will be able to reuse components of what we build here for a broader product.

- Design a database infrastructure and system architecture capable of handling a vast increase in meter data collection, EAC issuance, and hourly transactions. Ensure systems can reliably track and manage EACs and can be transferred between accounts down to the Wh level.
- Design user interface (and backend) elements and good front user experiences allowing registry users to switch between hourly and monthly EAC viewing and management.
- Implement the EnergyTag scheme and API standard, ensuring interoperability with other market participants and secure endpoints through industry-standard mechanisms to manage authorized third-party interaction with registry data.
- Develop a permissions system controlling levels of data access and modification granted to various third-party entities (asset owners, beneficiaries, authorized third-parties, utilities, etc.) for more granular account management.
- Predictive hourly model to identify data anomalies and level of confidence for issuance. Implementation of data correction logic in case of errors.

### Ecosystem Fit

AsiaREC sits at the intersection of public chain infrastructure, climate data, and cross-border compliance tooling. Our pilot bridges the opaque Chinese clean energy data systems with the transparent, public infrastructure that ecosystems like Polkadot offer. We will be building on the Energy Web parachain and bring an Energy Tag accredited solution to the Polkadot ecosystem. 

The target users of AsiaREC are: Energy consumers (e.g., multinationals with factories in China), Power generators, Carbon market infrastructure builders, Developers building ESG/impact verification dApps, Governments and ESG auditors seeking verifiable energy data.
AsiaREC meets the following needs for the above users:
- Power consumers: allows them to track and offset their energy consumption on an hourly basis, giving them insights to adjust operations to reduce their carbon footprint. This will also allow them to meet the reporting requirements and significantly reduce costs imposed on them by regulations like CBAM and national ETS.
- Power Generators: hourly matched GCs give them power generators incentives to supply renewable energy during the horse when the grid needs it the most, because if they are able to generate GCs during hours they are needed the most, supply & demand will cause the price to increase. Power generators are also dealing with intermittency and volatile power prices, sometimes negative. So a robust certificate market will allow them to cover costs and become economically viable without the government subsidies. 
- Carbon Market Infrastructure Builders: will be able to use our data to make critical decisions that continue to drive decarbonization of the grid. 
This also has the potential to act as a tool for governments and regulatory bodies to directly monitor the progress and compliance to their regulations. Organizations like the EU to enforce CBAM and RE100. 

There are no other projects doing this in the Polkadot ecosystem. 


## Team :busts_in_silhouette:

### Team members

- Jeff Huang, Founder: Jeff is the founder of both AEX & AsiaREC, having worked 15 years in cross-border M&A, joint ventures, and the US futures exchanges like ICE, CCX, and NYSE.
- Sam Greenwood, Interim CEO: transitioned into web 3 during his MBA at HKU ('21), after working for Rio Tinto in government relations. Post MBA he has worked as a product manager and consultant in blockchain.
- Derek Meng, CTO: Mr. Meng worked at the Dalian Commodity Exchange, focusing on specialized business tasks for the trading system. And Experienced in crypto, green energy marketing.
- Qian Wu CSO: Ms Qian Wu is Partner in Oliver Wyman’s Beijing office, with 20 years consulting experience in climate change and sustainability. She is specialised in corporate net zero strategy, clean-tech investment and supply chain resilience. 

### Contact

- **Contact Name:** Sam Greenwood
- **Contact Email:** sgreenwood@asiarec.org
- **Website:** www.asiarec.org

### Legal Structure

- **Registered Address:** RM A, 12/F, 300 LOCKHART ROAD , Wan Chai, Hong Kong 
- **Registered Legal Entity:** AsiaREC Limited

### Team's experience

The team has deep experience and expertise in the carbon markets, sustainability, and blockchain space. Jeff Huang, has been working at globally leading carbon exchanges including the Chicago Climate Exchange, Intercontinental Exchange (ICE) and is a national thought leader within carbon & power markets in China. Derek has developed trading infrastructure, which will be critical for the trading of the GCs through his time working at Dalian Futures Exchange. Qian has over 20 years experience working in global carbon markets contributing to the establishment and implementation of the various carbon initiatives through her role as a consultant and expert. Sam has completed various web 3 projects as a product manager and consultant including, a web credential verification system, NFT loyalty platform, and interoperability bridge to name a few. 
We are also partnering up with Granular Energy, an Energy Tag accredited registry that has a production grade solution. AsiaREC will customize their solution for the China market and deploy it on Energy Web Infrastructure. This will give Energy Web & Polkadot the first Energy Tag accredited solution for the China market


### Team Code Repos

N/A

### Team LinkedIn Profiles (if available)

Jeff Huang: linkedin.com/in/jeffhuangcarbon
Sam Greenwood: linkedin.com/in/samuelgreenwoodhk
Qian Wu https://www.linkedin.com/in/wuqian/ 



## Development Status :open_book:

N/A

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

> [!CAUTION]
> If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** 4 Months
- **Full-Time Equivalent (FTE):**  10
- **Total Costs:** 96,000 USD 
- **DOT %:** 75%

### Milestone 1 — Product Development

- **Estimated duration:** 2 month
- **FTE:**  10
- **Costs:** 81,000 USD

> [!NOTE]
> **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can register an account, upload consumption/generation data, and perform the matching of their GECs to the energy consumption.  |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.  |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains how power generators/retailers can onboard their customers to track the generation & consumtion on an hourly basis. The article will be written in Enlgish and Mandarin and published on LinkedIn and WeChat to reach both onshore and international users.|
| 1. | EnergyWeb Consulting | We will be working closely with the Energy Web team throughout the execution of this grant and will leverage their expertise to ensure our product for the China market is able to integrate smoothly into their parachain and tap into their ecosytem |


### Milestone 2 Example — Pilot Project Execution

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Pilot Project Execution | AsiaREC will execute 5-10 pilot projects with strategic partners to establish an 'APAC Granular Certificate Alliance' that will promote the Energy Tag Standard in Asaia. We will also engage policy makers in China and the EU to audit our product & pilots and adopt AsaiREC as an acceptable tracking system to meet regulatory obligations. |


## Future Plans

To date, AsiaREC is funded through grants from Cyberport and other Hong Kong Government funding schemes. After this grant, we plan to be funded through the corporate members of the APAC GC Alliance and eventually become self-sustaining through our revenue model of registry fees (ie. annual account, issuance/matching, and retirement fees). The current grants and funding schemes we are taking advantage of are the following:
Cyberport Incubation Program: https://www.cyberport.hk/en/entrepreneurship/cyberport_incubation_programme/
Green Fintech PoC Program: https://greenfintechpoc.cyberport.hk/
Web3 PoC Program: https://www.web3poc.cyberport.hk/
PolyU’s International Future Challenge: https://www.polyu.edu.hk/kteo/entrepreneurship/international-future-challenge/?sc_lang=en 
 
To give you an idea of previous pilots that we have completed, please see our write up on the Wanhau Case study ( https://energytag.org/projects/china-first-hourly-matched-pilot/ ) and the Midea Case study ( https://energytag.org/projects/china-first-hourly-matched-ppa/ ).  We plan on running multiple pilots like these cited above on the MVP that we build on Energy Web infrastructure. Each pilot will be highlighted by strategic partners globally and domestically in the China market. Eventually we will partner with large SOEs and become accredited by Energy Tag so that we have international recognition and can be promoted by industry leaders like RE100 and GHG Protocol. We also plan to do a large marketing campaign around the COP 30 conference. We believe the best way to gain market adoption is through continuing to run these pilots and educate the market on the benefit of GCs. Through these pilots AsiaREC will form a GC Alliance that is committed to growing the adoption of GC tracking across the Greater China region. These SOEs and AsiaREC users have a strong incentive to promote GCs because it will act as a tool to reduce the costs imposed on them by CBAM and other regulatory requirements. 

Our long term plan is to establish AsiaREC as a neutral GC registry for all of Asia through establishing a cross industry GC Alliance. This will act as a Polkadot-powered trust layer for clean energy markets in APAC and support China's clean energy exporters in meeting global requirements like CBAM, GHG Protocol, and RE100. We believe AsiaREC will help Hong Kong turn into a global carbon markets hub and the government will increasingly support us as we continue to make progress. Eventually we will need to trade these Granular Certificates and even set up a futures market for them, similar to the GC Trading Alliance in the US.

While we are developing the MVP and running the initial pilots on Energy Web infrastructure, we remain open to building a solution directly on the Polkadot SDK that is tailored for the Greater China region if Energy Web proves not to be the best long-term fit. Testing Energy Web allows us to run fast, low-risk pilots while also preparing our team to engage more deeply with the Polkadot ecosystem. In the longer term, we plan to launch our own tokenized market for standardized Granular Certificates (GCs), enabling efficient trading, settlement, and liquidity provisioning across Asia. This token will serve as the foundation for scaling the China REC market and integrating it with regional and global REC markets.


## Referral Program (optional) :moneybag:

- **Referrer:** Polkaport East, (Max Rebol) 
- **Payment Address:** Polkadot/Kusama (USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDC))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation from the PolkaPort East team. 
