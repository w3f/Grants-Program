# Afloat Tax Infrastructure Polkadot Integration

- **Team Name:** Afloat Inc.
- **Payment Address:** bc1q0aghk8qufzwpmrp5nfyu9r7dh3yynmphk7rhjj
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Overview

[Afloat](https://stayafloat.io/#/) is one of the first real-use cases of blockchain technology in the accounting industry. It enables the fractional buying and selling of tax credits that historically have been inefficient, opaque, and centralized. It has already processed tax credits ranging in orders from $2K -$70k USD.

Afloat was built on a private Ethereum clone but wants to migrate to Polkadot due to its technology, identity management, and community. Parachains like Kilt and their identity services would be crucial at validating government roles and professional certifications like accountants and institutional sellers.

## Project Details

### Background

A common tax credit is for land preservation. The inhabitants of a geographic area recognize that their shared quality of life may be positively impacted if more land was preserved rather than developed. If the owner of land property in that area agrees to preserve land, they may be eligible to receive a tax credit in an amount associated with the value of the land property. However, some owners of tax credits do not have enough tax liability to take full advantage of the reward. Because of this, a number of states allow credits to be transferred. State transferable tax credits are typically bought and sold at a discount.

Historically, the tax credit industry’s transfer process has been deeply inefficient. Due to a lack of trust between buyers and sellers, accountants and lawyers act as middlemen. This added financial and procedural cost creates an entry barrier for the majority of taxpayers into the tax credit market. What remains is a tight-knit group of wealthy buyers, sellers, and policymakers.

### Product

[Afloat](https://stayafloat.io/#/) uses blockchain technology to add trust and liquidity to the market, allowing smaller fractional shares of tax credits to be transferred. So far, Afloat has facilitated the transfer of over $500,000 worth of tax credits between multiple buyers and sellers, 90% with whom Afloat anticipates an ongoing relationship. One of the platform’s sellers is an international company with over 10,000 employees, and the value of tax credits purchased per buyer has so far ranged between less than $2,000 and over $70,000.

With the ability to tap into a market sector that knows nothing about blockchain or cryptocurrency, Afloat has the potential to lay the foundation to onboard traditional companies into the Polkadot ecosystem beyond using only Afloat. We have 120 active users, many of which are CPAs (public accountants) and represent a network of taxpayers (credit buyers and sellers). We purposefully haven't had any marketing campaigns and have been cautious with growth so far. As of April 15, 2022, we have successfully processed more than twice the total number of tax credits processed in 2021. We had a large batch of users enroll in December 2021 (end of tax year) and material increase (4x) year over year.

Having started in the US, Afloat, Inc., a Wyoming company, is compliant with existing federal, state, and local regulations and takes care of the entire transfer process with the following functions:

- Uploading proof of tax credit ownership
![Image](https://user-images.githubusercontent.com/7217054/159963378-b850c316-aa28-46ea-9a87-2e184de57a0d.png)

- Linking a US bank account
![Image](https://user-images.githubusercontent.com/7217054/159963375-a06565dc-9f19-4aa9-8e31-a6223aa2cef8.png")

- Fiat integration using Dwolla, a third party company
- Placing buy and sell limit orders on blockchain

![Image](https://user-images.githubusercontent.com/7217054/159963749-d7e2ef89-fac0-4f4c-a823-9dd3a4e9d263.png)

- Algorithmic matching overlapping full or partial orders in a ”pending” status while waiting for government approval

![Image](https://user-images.githubusercontent.com/7217054/159963752-dc5f9323-1d07-4bc5-b309-ab2147ff71b8.png)

- Autopopulate tax forms with blockchain data (Afloat supports five of thirty-six US tax forms)
- Completion of government paperwork and money transfer after government approval

Tax credits, as a socioeconomic tool, are very similar to concepts found in the Substrate, Polkadot, Kusama (dotsama) ecosystem, where the tokenomics are decided by participants through a governance process designed to maximize the benefit for the network. For example, the network will:

1. "mint or burn DOTs in order to reward the nodes that run the consensus protocol, to fund the treasury, to control the inflation rate, etc."
2. "[ensure] DOTs also play a role in slashing protocols designed to disincentivize attacks or adversarial behaviors,"
3. "let DOT holders express their opinion in governance decisions",  and
4. "decide which projects are allocated a parachain slot".

### Migration

Initially we will run on a standalone chain as a pallet. This provides the most latitude and flexibility. The initial phase is primarily focused on function, usability, and ensuring the core asset type design is secure and composable. It also includes existing user and asset migration. We will have a one-time process per user to teleport their account and assets. Most likely, we will not teleport any orders or redemptions currently in process. They would close out on the old platform, and users would create new ones after they migrate.

We did not include any scope or fund request in the proposal related to the migration work. The scope of the w3f proposal is focused on building the open source components. These will be available for the community, and Afloat will be an implementation of them. Making the pallets and tooling as general purpose as possible should help with reusability, for us and other projects.

To handle fractional tax credits in Substrate we are using "fruniques". That is our name for *FRactional UNIQUES*. It'll be compatible with the Uniques pallet and eventually with RMRK as well. It allows the user to spawn a new NFT from an existing NFT, repeatedly, while specifying an associated amount. The integrity of the total quantity must remain intact, along with metadata, but each of these NFTs can be priced, transferred, and redeemed individually.

An earlier implementation of this used a fungible token to represent the parts of the tax credit, but we've found that fractional NFTs fit the mental model a bit better and more ergonomically in existing tools. A user is buying a "thing", see that thing in their wallet, where they may hold 7 of them. Holding various quantities of 7 different fungible tokens seemed to increase the complexity more than necessary. This is a design element we frequently brainstorm on though. In a future release, it may be useful to have fruniques support both use cases.

This proposal covers the migration or creation of the following:

1. User onboarding (set and verify identity with gatekeeper parameters) and slides.
2. Sign and Login with email.
3. Originate and configure a tax credit and create sales orders for tax credits.
4. Support for encrypted files attached to tax credits.
5. Sell the entire or a fraction of the tax credit to interested buyers using fruniques pallets.
6. Ability for buyers to place buy orders.
7. Asset redemption workflow (tax credits require a 'redemption specialist').
8. Launch materials, videos and speaking arrangements.

### Workflow

![Image](https://user-images.githubusercontent.com/7217054/160020369-b64ae31d-8cc5-49ce-8c4d-82dea85546cf.png)

## Ecosystem Fit

Afloat serves tax payers that want to buy and/or sell tax credits. These users will benefit by Polkadot's improved security and by gaining compatibility for liquidity. Polkadot will benefit from the influx of non-technical users into the ecosystem. Tax Credits trade with a heavy discount to face value, and Polkadot participants will likely want to hold them during that lifespan even if they aren't the final redeemer. If a 5-year expiration credit is priced at $0.60-to-the-dollar by its impatient originator, it could be purchased via a more patient market maker to perhaps be sold at $0.90 in year 3 or 4, just as an example.

The secondary target audience are the community of developers that will benefit by leveraging the open source components and integrations with tax credit fruniques.

### Community

As the perfect technology for record-keeping, blockchain makes a lot of sense for accountants. Afloat not only wants to bring its infrastructure to Polkadot but also bring Polkadot into the accounting community with the following:

#### Continuing Education for CPAs

Afloat’s founder and current CEO [Louise Reed](https://www.linkedin.com/in/louisewreed/) has given talks at a number of CPE conferences, where CPAs receive continuing education credits to maintain their licenses each year. Introducing her to Web 3 infrastructure would allow her to speak about it at CPA conferences, especially to other CPAs looking for classes covering new and interesting topics and ideas.

#### Crypto Clients

Working in a historically conservative industry, CPAs are starting to feel the push from blockchain/crypto clients to accept the new technology and are now being forced to help with risk mitigation (alongside lawyers).

#### Sellers

Typically, sellers of tax credits are large international businesses, which are usually slow with internal changes. However, familiarity with the tax credit market paves the way for an easier introduction to a new technology.

#### Buyers

Introducing programming/blockchain/crypto taxpayers to tax savings by way tax credits would bring new customers to a marketplace that has a strong history of centralization, opacity, and insularity.

#### Bridging Communities

Afloat would naturally bridge two opposing communities: accounting, the most trusted and conservative industries, and blockchain, one of the most innovative industries. By association with such a trusted industry, blockchain would receive credibility in the eyes of the general public while also modernizing accounting with new and better processes.

#### Natural Use Case

There is a huge educational and technological divide in the learning curve for accountants when it comes to blockchain, but Afloat adds an easy and natural way to learn.  Most people, including CPAs and businesses, tend to understand only what they can see and experience, and Afloat brings tangibility to an otherwise intangible industry.

#### Speaking arrangements

Louise Reed is scheduled to speak at the following Certified Public Accountant Societies.

| Date of Talk | CPA Society | Location |
| -----------: | ----------- | -------- |
| 5/26/2022    | NC          | Greensboro |
| 8/24/2022    | GA          | Atlanta |
| 9/26/2022    | VA (+ VA Tech) | Roanoke |
| 11/17/2022   | VA (+ VA Tech) | Virginia Beach |

## Team :busts_in_silhouette:

### Team members

- Louise Reed - CEO and founder
- Max Gravitt - Architect
- Jose Maria Gayosso - UI Developer
- Erick Casanova - Blockchain Engineer
- Abel Yanez - Substrate Developer

### Contact

- **Contact Name:** Louise Reed
- **Contact Email:** louise@stayafloat.io
- **Website:** <https://stayafloat.io/#/>

### Legal Structure

- **Registered Address:** 6118 Saint Andrews Lane, Richmond, VA 23226
- **Registered Legal Entity:** Afloat, Inc.

### Team's experience

With a master's degree in physics from Duke University and a Master of Accounting from the University of North Carolina at Chapel Hill, Louise W. Reed has been a CPA for fifteen years and has grown a successful private practice that specializes in working with small businesses. In the spring of 2018, Louise conceptualized and founded Afloat to allow her clients to have the same tax opportunities traditionally found in only the largest of CPA firms. Under her leadership, Afloat built the current application (private ethereum clone) with an in-house team and successfully launched in 2021. [Awards](https://stayafloat.io/#/media)

Afloat is partnering with Hashed Systems DAO LLC, a substrate development team with years of experience building blockchain applications. They have worked on substrate and Polkadot since spring 2021. Their developers completed Brian Chen's course and have experience running substrate chains and have significant experience working with the Uniques, Identity and Node-authorization pallets. Additional relevant experience below:

[Hypha DAO](https://dho.hypha.earth/#/): Smart contracts and front end development that enables the creation of flexible roles, assignments and contributions with recurring payments. Design and implement a graph data layer to improve web application performance. Design and build a [Double Entry accounting](https://us02web.zoom.us/rec/share/eRqiBvq-dsV0L_hEjW5e8DWNYQlUn2bLhI8-86jkRVwdXiN3TiD5edym17ubCd9R.QhKQw_Byy0t5_8SW?startTime=1647371674000) (Passcode: .V$C#Br2) plattform that streams wallet activity, supports token price history, reporting and currency conversion.

[SEED](https://joinseeds.earth/): Smart contract and mobile development that capture the project's constitution, enable voting on proposals and basic identity management like reputation, vote history etc. Design and build a PWA token swaps app. Design and build a basic [Economic Simulator](https://seeds-sim.hypha.earth/dashboard) that enables voters to understand the economic impact of policy changes.

### Relevant profile links

- Louise Reed CPA website: <https://louisereedcpa.com/>
- Louise Reed LinkedIn: <https://www.linkedin.com/in/louisewreed/>
- Abel on Github: <https://github.com/amatsonkali>
- Jose Maria on Github: <https://github.com/jmgayosso> and Gitlab: <https://gitlab.com/jmgayosso>
- Hashed website: <https://hashed.io/>
- Erick on GitHub: <https://github.com/tlacloc>

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 13 weeks
- **Full-Time Equivalent (FTE):**  2 FTE (across 5 contributors)
- **Total Costs:** 46,200 USD

#### Languages

- All pallets will be developed in Rust.
- The custodial/persistence partner backend will be developed in Nodejs, with a slight possibility of porting it to Rust.
- The front end will be Angular, with a possibility that it will be migrated to Vuejs.

### Milestone 1 — User onboarding (set and verify identity with gatekeeper parameters) and slides

- **Estimated duration:** 5 weeks
- **FTE:**  2
- **Costs:** 17,675 USD
(5 contributors)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone.|
| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |
| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects |
| 1. | Set Profile and Upload KYC Materials | User onboarding web client for uploading identity details in a privacy preserving manner. Data will be encrypted and only accessible by 1) the user, 2) a pre-specified KYC administrator account, and 3) a persistence partner/custodian that the user or app administrator selects. |
| 2. | KYC Admin | KYC administrator screen for viewing and approving new user (market participant) requests. We plan to use the existing `registrar` process on the Identity pallet. UI is in Angular, with a small chance we may migrate it to Vuejs |
| 3. | Slides |1-3 additional presentation slides for Louise W. Reed, CPA’s currently scheduled talks at CPA conferences regarding blockchain, cryptocurrency, triple-entry accounting and transferring state tax credits.  The additional slides will be added to address why Afloat sees value in being supported by Polkadot’s ecosystem|

### Milestone 2 — Originate and configure a tax credit and create sales order for tax credits

- **Estimated duration:** 4 weeks
- **FTE:**  2
- **Costs:** 14,140 USD
(5 contributors)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone.|
| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |
| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects
| 1. | Originate Tax Credit | Web client for onboarding new tax credits as NFTs, appropriate metadata persisted using the Uniques and likely Statemint specifications. |
| 2. | Upload Confidential Documents | This feature allows for NFT originators to upload encrypted files attached to tax credits. The files will be accessible only by the user and the application administartor. |
| 3. | Tax Credit verification | MVP Tax Credit pallet, compatible with the prebuilt Uniques pallet (and/or RMRK), will support data validation rules by jurisdiction and tax credit type. The user will be able to save a draft of their tax credit if they need to identify more IRL steps to fix discrepancies. It's like a 'tax credit compiler'. |
| 4. | List for Sale | Ability for Tax Credit (NFT) owners to assign a price and list it for sale.|

### Milestone 3 — Sell the entire or a fraction of the tax credit to interested buyers using fruniques pallets

- **Estimated duration:** 2 weeks
- **FTE:**  2
- **Costs:** 7,070 USD
(5 contributors)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone. |
| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |
| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects
| 1. | Order Part of an NFT | Web client and pallet support for fractionalizing a Tax Credit NFT. Users may specify the % and/or direct amount for the order. Rust and Angular/Vuejs |
| 2. | Complete/Confirm Order | Sell the entire or a fraction of the tax credit to interested buyers using fruniques pallets. Rust and Angular/Vuejs |
| 3. | Order Settlement | Ensure the marketplace correctly calculates appropriate commissions and fees. Calculations will be in Rust, displayed in application using Angular/Vuejs |

### Milestone 4 — Redeem the tax credit and confirm redemption and freeze/burn asset on-chain

- **Estimated duration:** 2 weeks
- **FTE:**  2
- **Costs:** 7,070 USD
(5 contributors)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone.|
| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |
| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects
| 1. | Approve Redemption Specialists | Pallet and web client for onboarding and approving/enrolling Tax Credit Redemption Specialists. These are experts that know how to perform appropriate steps to migrate a tax credit IRL. Approval will be handled by marketplace administrator initially, by the community eventually. |
| 2. | Request Redemption | Pallet and web function/form for requesting redemption, optionally from a specific Redemption Specialist or system will choose. |
| 3. | View materials and Redeem | Pallet support and web client for Redemption Specialist to review the encrypted tax credit materials and confirm that off-chain IRL redemption has been completed. Redemption completion will be approved by owner and Redemption specialist. |
| 4. | Asset Manager | Once part or all of a tax credit NFT is redeemed, the Tax Credit Asset Manager(s) will be able to lock, freeze, and/or burn the NFT. |
| 5. | Launch Materials | Launch materials, videos and speaking arrangements for Louise are already in queue.|  

## Future Plans

### Immediate Use

All Afloat users will be migrated to the substrate application and benefit from the identity and security enhancements. Afloat will gain access to the full substrate ecosystem and vice versa.

### Next Phases

This proposal covers Afloat migration of the current functionality. Below are future phases that expand it:

#### Phase 2

User scenarios:

- Registration/approval of new appraisers,
- Request appraisal of NFT,
- Appraise NFT,
- Review and compensate appraiser

Web client for:

- NFT creator to request judgment and grant access to Asset Grader(s)
- Asset Grader to review materials and provide judgment

#### Phase 3

User scenarios:

- More advanced ordering and pricing models,
- Candle auctions,
- Improved compatibility with more jurisdictions.

#### Phase 4

- Provide API access and referral program for tax industry participants. (e.g. allow existing systems and networks to seamlessly integrate)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Raul Romanutti recommended the program on a call with Louise Reed, Max Gravitt and Augusto Lara on March 21st, 2022.

### Additional Context

#### State Tax Credit Breakdown

Currently, forty-one states offer tax credits designed to incentivize economically and socially desirable behavior, like historic structure rehabilitation, land preservation and film production.

- Linking a US bank account

![Image](https://user-images.githubusercontent.com/7217054/160020375-0e360e26-17f9-4856-8266-1e95b76efc7c.png)

Thirty-four of those states allow the producers of these credits to be incentivized even if they do not have enough state income to fully utilize the credits and/or need the cash flow to further expand the incentivized behavior.  

![Image](https://user-images.githubusercontent.com/7217054/160020372-8190f4aa-81aa-4b0e-ae1b-d92eb031df5b.png)

Blockchain Friendly State Breakdown

![Image](https://user-images.githubusercontent.com/7217054/160020643-84313880-4e0b-4942-8b1a-7278eb7aa219.png)

<https://www.investopedia.com/news/majority-us-states-are-still-acknowledge-cryptocurrencies/>
