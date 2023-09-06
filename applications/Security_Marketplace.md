# Security Marketplace

- **Team Name:** Antier Solutions
- **Payment Address:** 1XhNxALoCmXF86aiwZtdDJspjWZBiRX9UfbJ4jQsWN15eSu (aUSD)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:
The proposal is in response to the  RFP : [Decentralised Security marketplace](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/decentralized-security-marketplace.md).

### Overview

The envisioned project aims to develop a decentralized security marketplace platform much to the liking of similar existing platforms like [hackenproof](https://hackenproof.com/) and [Immunefi](https://immunefi.com/), with its unique value propositions being the aim to reward users for submitting full-blown security/Functional audits instead of individual vulnerabilities.

Our envisioned platform will be a hybrid model that combines smart contract functionality with a centralized server to optimize gas fees. We understand that paying gas fees for small transactions can cause hesitation among users and thus have come up with a solution that optimizes the platform's operation by shifting its peripheral features off-chain while retaining its decentralized nature through the use of smart contracts for implementation of its core functionality such as escrow and governance.

The proposed platform will be designed to provide an incentivized system that rewards auditors for submitting comprehensive audit reports on schedule while also punishing those who fail to do so.

Our platform is also envisioned to feature a reputation system that allows auditors to build and maintain their reputations based on their past auditing records. The reputation system will act as a measure of trustworthiness for auditors while facilitating the project creators in the selection process of the right auditors for their projects. Moreover, users who have earned enough reputation will be entitled to the Arbiter role, which allows them to vote in support of or against a submitted audit based on whether it meets all of the scope requirements as outlined in the project description for a share of validation fees.

### Project Details

**Technical Diagram**

![Technical Architecture](https://github-production-user-asset-6210df.s3.amazonaws.com/106224868/241970938-b0e0fda7-83bb-4001-97e2-66546db2eeb5.png)


**Pre Script:**

1)  The below lifecycle is not a blueprint or final version of the
    project, but instead, a basic outline to depict the thinking
    process involved in the proposal.

2)  The mathematical figures are by no means final
    and will be concluded once the production is underway after
    carefully considering the market situation.

Here is an envisioned lifecycle of a project on our platform.

1. Users will begin their journey on our platform by registering on our sign-up page.
2. Users can then proceed to our login page and then the dashboard after completing the validation process there.
3. Users can be broadly classified as :
   Patrons: Users, generally the owners of big platforms that wish to avail of the auditing services.
   Auditors: Users that are willing to offer their auditing services on the platform.
   Arbiters: Trusted community members that will review the auditor’s work and verify the auditor’s claim for rewards.
4. The dashboard can be used to access all the available Projects offered by patrons on the platform, the user from there can create a post (Audit Request)
   for their project, bid for already existing projects, or switch to the arbiter's dashboard if authorized.
5. The patron can create a post which will entail:
   A) Project Status: Whether the project is active, pending, retrieved, completed, awaiting validation, or expired. Will be active by default on creation.
   B) Type of Audit: Whether it includes Smart Contract Audit or penetration testing or Performance testing. Patrons can choose multiple tags. This will help
   auditors in sorting through the projects to find the project they wish to assess for auditing.
   C) Project description: A description of the working of a project by owners/developers to aid auditors, can consist of document links.
   D) Github link to the Project.
   E) Offered Amount: The maximum amount offered for a successful audit, value in terms of stablecoins/USD pegged tokens.
   F) Audit Expectations: Any expectations the project developers/owners might have from the auditors such as including suggestions, checking test coverage/quality,
   expected deadline, and scope of the audit. Arbiters will evaluate the auditor’s work on its basis.
6. The Patron will have to add the promised amount to the escrow contract at the very time of posting.
7. To elaborate on project status, The initial status of any project that will be posted will be active by default and hence, will be open to offers from auditors on the platform.
   Retrieved would mean that the project was retrieved by the project’s patrons, the status of a project can only be turned to retrieved if it's in active status, and the option of retrieving will be made unavailable in any other status.
   Pending would mean that an auditor has been commissioned and that the audit is underway.
   Awaiting Validation would mean, the submitted auditing report is currently being scrutinized by Arbiters to ascertain it meets the pre-defined scope.
   If for some reason an offer is not met even after two weeks of the expected deadline, the project will be marked expired.

   ![Project Lifecycle](https://github-production-user-asset-6210df.s3.amazonaws.com/106224868/241969866-5024f3da-94a2-4efc-a436-963c70249fc6.png)

8. An auditor can bid on projects they want to audit. A bid includes a proposed deadline they can complete the project in and an amount they wish to get in exchange for the project.
   Auditors, just like any user can view all the posts and decide which one they wish to make a bid on. They can filter through the list of projects for a particular range of amounts, or for a specific Audit type.
9. At a time, a new Auditor can only work on 1 active project. This means that a new user can make multiple bids (Limited to 5 at a time) but once one of them is accepted, his other bids will be retrieved and he cannot bid on other projects until he finishes the active audit.
10. As the auditor matures on the platform, Their active audit limit will be increased by 1 for every 3rd successful audit they deliver although this will be capped at 7. So an auditor can
    never have more than 7 simultaneously active audits ongoing at a time.
11. The Bids made by auditors will be publicly visible and patrons can decide on whom they wish to delegate the job to based on their offers and their profiles.
12. The user profiles will be stored off-chain in a central database allowing users to edit them as they please and keep their feats and experiences updated. This will include a unique username, a bio where they can mention their previous experiences with auditing, links to their socials, and sample audit reports. An optional KYC can be done to verify identity.
    This feature will be particularly important for auditors to eliminate identity theft and impersonation threats to reputable security companies and/or well-known individual auditors. Hence helping project creators while deciding on which offer to accept.
13. Once the project’s patron accepts one of the listed bids, the project is marked pending, and the selected auditor is notified on their profile and their email address about the start of the auditing process.
    Patron can not withdraw the amount at this stage. The auditor will be given a buffer of 12 hours to accept the job assuming that he has taken that much time to check the mail or website notification.
14. The auditor commissioned with the project will then have till the proposed deadline to submit a successful audit. They can upload the audit in pdf format to the platform. There will be a penalty
    for late submission of the audit which will be a certain amount of the decided amount for submission later than the deadline to 1 week and an increased penalty for the second week. After two weeks
    the project’s status will automatically be turned to expired, The commissioned auditor will be given a negative point, and the project’s patron will be refunded the whole amount.
15. The submitted Audit report will then be sent to the patron which he can accept, in which case after subtraction of the platform fee, the promised amount will be sent to the auditor.
16. In case, the patron isn’t satisfied with the audit report, the dispute will then be handled by randomly selected active arbiters who will vote for or against the audit report by judging it against
    the expectations of the patron specified at the start of the audit.
17. In case, the submitted project is downvoted by 5 arbiters for the first time, a deadline extension of 1 day will be granted to the auditor at no penalty (for any altercations that can be quickly
    made to the report), a 6-day extension will be granted the second time around at certain percentage of penalty (for major scope misses). If the audit report is downvoted for the third time, the
    project status will be marked as expired, and the project creators can retrieve the whole staked amount. The auditor commissioned will be given a negative review on-chain.
18. If 5 of the arbiters are satisfied with the audit report, then the patron will have no option but to accept the report and the promised amount will be transacted to the auditor after subtracting
    the platform fee and
19. The auditors will get platform Points along their profile based on their actions, for every:
    1 successful audit completion: 1XP point (Increases with more and more audits)
    1 unsuccessful audit: -3XP points (Adds up)
21. The point system is designed to help patrons identify reputable members of the community as well as alert them of newcomers and bad elements. Once a user hits a -6XP rating, he cannot bid anymore
    on the platform.
22. The proposed platform will charge a certain amount as a platform fee and the arbiter’s commission, the remaining funds will be transferred to the auditor’s wallet address connected to their profile.



The peripheral components in the above-suggested platform such as user
profiles, projects posted(not yet completed), and KYC procedure will be
carried out with the help of Back-end Services, and the data will be
stored in a centralised database to facilitate users to change and
update their profiles at will whereas, The core functionalities such as
escrow, auditing achievements, and records will be stored in a
decentralised manner using smart contracts developed with !ink.

The Data in the model will be stored either in the centralised database
or on the blockchain and hence no data will be lost even if the server is
shut for some unforseen reason.

**Proposed TechStack**
-	BackEnd : NodeJs
-	FrontEnd : ReactJS using Astar.js
-	Smart Contracts : !ink

**WireFrames**

![Login Page]( https://github.com/viswatejay/RFP/assets/106224868/38a52e06-cdf9-4090-8c67-afe8796638ba )

---

![SignUp Page]( https://github.com/viswatejay/RFP/assets/106224868/820530e5-0976-49b2-8351-efb86314a21c )

---

![OTP Verification Page]( https://github.com/viswatejay/RFP/assets/106224868/ee1ddb45-cc59-4979-b4a1-e3785174b3e2 )

---

![ Dashboard Page ]( https://github.com/viswatejay/RFP/assets/106224868/40cf5cb4-5d6e-4573-9223-851f82ab40a5 )

---

![ Detail Page ]( https://github.com/viswatejay/RFP/assets/106224868/8845baea-fc9c-480a-93d7-7692c9c59020 )

---

![ Profile Page ]( https://github.com/viswatejay/RFP/assets/106224868/92b8b522-41b4-4ac9-9485-39f493056eea )

---

![ Profile-MyAudits Page]( https://github.com/viswatejay/RFP/assets/106224868/48c2b803-a68b-4613-9344-850d668f0ca4 )

---

![ Profile-PendingAudits Page]( https://github.com/viswatejay/RFP/assets/106224868/853c43b2-f3e9-4c30-91b8-6da00650c6ba )

---

![ Create Post Page ]( https://github.com/viswatejay/RFP/assets/106224868/44caf541-f311-41e3-b415-e009bcdbe37c )

### Ecosystem Fit

  - The escrow smart contract will be developed in a platform-agnostic manner which will make it beneficial for future use cases.
  - The negative badge mapping can be used by other platforms in the ecosystem to create a bot blacklist.
  - The platform helps project owners in the ecosystem to find auditors/whitehats and vice versa.

## Team :busts_in_silhouette:

### Team members

- Ankit Bhatia
- Parth Chaudhary
- Niketan Saini
- Nitin Sharma
- Vishant Mittal
- Shubham Aswal
- Abhishek Dhiman

### Contact

- **Contact Name:** Ankit Bhatia
- **Contact Email:** ankit.bhatia@antiersolutions.com
- **Website:** https://www.antiersolutions.com/

### Legal Structure

- **Registered Address:** E-221, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160059
- **Registered Legal Entity:** Antier Solutions Pvt. Ltd.

### Team's experience

Antier solutions entered the blockchain domain in 2016, Back when one bitcoin was not even a 1000$. The path from back there
to where we stand currently has blessed our organization not only with rewards but also with an abundance of experience.
Our Smart contract Auditing team is led by some of the most experienced and competitive developers of the organization as well as the ecosystem.
The team is well-experienced in both the development side as well as the debugging side of an SDLC and has an eye for the bugs as well as respect
for standards which, we believe, makes us a perfect fit to be the practitioner of this RFP.

Here are some of the feats, achievements our organisation boasts of:

1) Developed validator and nominator apps for substrate-based blockchains.
2) Customised default reward mechanism in the staking pal of the substrate chain by integrating the sustainability and
   reliability score of the validators in the current reward system.
4) Integrated EVM and WASM-based virtual machines natively in the substrate chain so the chain could support both EVM(Metamask,
   Remix, Web3.js, etc) and WASM(WebAssembly target, INK framework, etc) tooling.
5) Replicated whole polkadot ecosystem(Relay chain, Parachains, XCM), Where parachains are use case specific chains and communicate
   through XCM protocol with each other.
6) Developed several NFT Marketplace contracts both decentralized and hybrid across various blockchains such as [Hungama](https://heftyverse.xyz/),
   [SkodaVerse](https://www.skoda-auto.com/world/skodaverse), [Fanverse](https://www.fan-verse.io/) just to name a few.
7) Developed many DeFi projects across multiple blockchains such as [Shido, Staking](https://dex.shido.io/staking-page), [Shido, Perpetuals](https://perp.shido.io/), [YSL](https://ysl.io/), [Lithium](https://lithium.ventures/) and many more.
8) We have also developed an Asset Tokenization solution based on ERC3643 on EVM, Aptos & Provenance chain for some of the renowned Financial Institutions. The    
   asset classes tokenized are Real Estate, Securities, Private Equity, and commodities such as Gold. Can't share the platform details, as we are under strict NDA.
9) We are also developing some in-house Web3 solutions such as Relayer Hub for meta-transactions, Decentralized Token Bridge, a multi-sig solution like Gnosis-safe  
   and we are actively researching and developing in areas such as multi-party Computation (MPC), Account Abstraction (AA, ERC4337), zk proofs and many more.


- Our team has also been proactively participating in the Substrate Stack exchange and we ask/answer question related to ink!, Substrate, parachain. We rank in the top 6% people in the Substrate Stack Exchange.

- Profiles of our team:
1. https://substrate.stackexchange.com/users/2372/arunjot-singh
2. https://substrate.stackexchange.com/users/2281/amit-kumar-yadav
3. https://substrate.stackexchange.com/users/354/shubham-gupta


### Some Live Sites:

- https://ysl.io/nft
- https://heftyverse.xyz/
- https://www.fan-verse.io/
- https://dex.shido.io/staking-page
- https://perp.shido.io/
- https://www.skoda-auto.com/world/skodaverse
- https://collective-vault.planetinverse.com/


### Team LinkedIn Profiles

- https://www.linkedin.com/in/ankit-bhatia-b6833370/
- https://www.linkedin.com/in/niketan-saini-5a26a0177/
- https://www.linkedin.com/in/shubham-aswal-528462130/
- https://www.linkedin.com/in/nitin-sharma-9b00b6188/
- https://www.linkedin.com/in/parth-chaudhary-b5220a257/
- https://www.linkedin.com/in/abhishek-dhiman-6368a2187/
- https://www.linkedin.com/in/mittalv/


## Development Status :open_book:

Awaiting Response. 

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 12-14 weeks
- **Full-Time Equivalent (FTE):**  4,5
- **Total Costs:** 29,920 USD

### Milestone 1 — UI/UX designs, Smart Contracts & Backend Services

- **Estimated duration:** 7-8 weeks
- **FTE:**  5
- **Costs:** 19,320 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1 | UI/UX | We will deliver complete UI/UX designs. |
| 2 | Reputation Token Contract| This will be a non-transferrable token smart contract(Soul Bound Token) that will serve as auditors' reward and as proof of reputation points after the successful completion of an Audit.  |
| 3 | Escrow Contract| This will be a master contract where all tokens will be managed by patrons and distributed to the Auditors after the successful closure of the Audit.This contract will also store all hashes of the audit reports. Which can be retrieved even when the platform goes down.  |
| 4 | Arbiter's voting Contract| This contract will have specific arbiters for every audit thread where they can participate in the voting. |
| 5 | Node Services | We will deliver the backend services for login , sign up, 2FA and Profile creation |



### Milestone 2 — Application & Deliveries

- **Estimated Duration:** 5-6 weeks
- **FTE:**  4
- **Costs:** 10,600 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e** | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1 | Node Services | We will deliver the remaining back end services including Post creation and Bidding system. |
| 2 | Front End | We will deliver the completely functional DApp integrated with the Smart contracts and backend services. The working application will have all the 9 pages as per the wireframes and above mentioned. The application will be deployed on the provided servers. |



## Future Plans

- As mentioned earlier, Our organization plans to serve as the Arbiters in the early stages of
  the platform's deployment untill reliable auditors emerge on the platform who have been actively
  contributing to the community to make this process decentralised in true sense.

## Referral Program (optional) :moneybag: 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Through RFP Portal.
