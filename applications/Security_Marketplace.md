# Security Marketplace

- **Team Name:** Antier Solutions
- **Payment Address:** 1XhNxALoCmXF86aiwZtdDJspjWZBiRX9UfbJ4jQsWN15eSu (aUSD)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:
The proposal is in response to the  RFP : [Decentralised Security marketplace](../docs/RFPs/Open/decentralized-security-marketplace.md).

### Overview

The envisioned project aims to develop a decentralized security marketplace platform much to the liking of similar existing platforms like [hackenproof](https://hackenproof.com/) and [Immunefi](https://immunefi.com/), with its unique value propositions being the aim to reward users for submitting full-blown security/Functional audits instead of individual vulnerabilities.

Our envisioned platform will be a hybrid model that combines smart contract functionality with a centralized server to optimize gas fees. We understand that paying gas fees for small transactions can cause hesitation among users and thus have come up with a solution that optimizes the platform's operation by shifting its peripheral features off-chain while retaining its decentralized nature through the use of smart contracts for implementation of its core functionality such as escrow and governance.

The proposed platform will be designed to provide an incentivized system that rewards auditors for submitting comprehensive audit reports on schedule while also punishing those who fail to do so.

Our platform is also envisioned to feature a reputation system that allows auditors to build and maintain their reputations based on their past auditing records. The reputation system will act as a measure of trustworthiness for auditors while facilitating the project creators in the selection process of the right auditors for their projects.Moreover, users who have earned enough reputation will be entitled to the Arbiter role, which allows them to vote in support or against a submitted audit based on whether it meets all of the scope requirements as outlined in the project description for a share of validation fees.

### Project Details

Technical Proposal:

**Pre Script:**

1)  The below lifecycle is not a blueprint or final version of the
    project, but instead, a basic outline to depict the thinking
    process involved in the proposal.

2)  The mathematical figures mentioned below (Such as platform fees,
    deadline before the expiration of an accepted offer, Percentage
    deduction on delayed submission, and more ) are by no means final
    and will be concluded once the design phase is underway after
    carefully considering the market situations.

Here is an envisioned lifecycle of a project on our platform.

1)  An interested party registers on our platform and creates a project,
    a project in the current context refers to creating a post. A post
    will comprise of:

    a.  Project Status(Active, Pending, Retrieved, Completed, awaiting
	validation, or expired, Will be Active by default).

    b.  Type of Project (DEx, NFT Marketplace, ERC20, others, etc. This
    	will be particularly helpful for auditors to filter through to
    	the type of smart contracts they wish to work with).

    c.  Project Description(A description of the working of a project by
    	owners/Developers to aid auditors, can consist of document
     	links).

    d.  Github link to the smart contracts. (Self-explanatory)

    e.  Offered amount ( the max amount offered for successful audit,
    	value in terms of Stablecoins/ USD pegged coins ).

    f.  Audit Expectations (Any expectations the project owners might
      	have from the auditors such as including suggestions, Checking
      	test cases coverage/quality, expected deadline, and scope of
     	the audit)

2)  To elaborate on project status, The initial status of any project
    that will be posted will be active by default and hence, will be
    open to offers from auditors on the platform. Retrieved would mean
    that the project was retrieved by the project owners, the status
    of a project can only be turned to retrieved if it's in active
    status, and the option of retrieving will be made unavailable in
    any other status. Pending would mean that an auditor has been
    commissioned and that the audit is underway. Awaiting Validation
    would mean, the submitted auditing report is currently being
    scrutinized by Arbiters to ascertain it meets the pre-defined
    scope. If for some reason an offer is not met even after two weeks
    of the expected deadline, the project will be marked expired.

3)  Upon successful submission of a project, The specified Offered
    amount will be locked in the escrow contract, Project owners can
    pay in pre-determined stablecoins through Metamask or
    WalletConnect. Project creators can withdraw all their amounts by
    turning the project status to retrieved as long as no offer has
    been accepted by them, it will not be possible in later stages.

4)  Auditors on our platform will see the post in the list of Active
    Projects and can show their willingness to audit the project by
    submitting a corresponding offer, An auditor can initially make an
    offer to only 1 project, this limit, however, will be incremented
    by 1 after every 3 successful audits completed, The maximum limit
    will be 5. The offer will comprise of following components:

    a.  Proposed Deadline.

    b.  The proposed cost for audit (can not exceed the maximum amount
      	offered by Project creators)

5)  The Offers made will be publicly visible to everyone and the project
    creators can decide upon whom they wish to delegate the job to
    based on their offers and their profiles.

6)  The user profiles will be stored off-chain allowing users to edit
    them as they please and keep their feats updated. This will
    include a unique username, a bio where they can mention their
    previous experiences with auditing, links to their socials and
    links to their sample audit reports, and an optional KYC to verify
    their identity. This feature will be particularly important for
    auditors as it will eliminate identity theft and impersonation
    threats to reputable security companies and/or well-known
    individual auditors. Hence helping project creators while deciding
    on which offer to accept.

7)  Once Project owners accept one of the listed offers, The project is
    marked Pending, and the selected auditor is notified on their
    profile as well as through an email to make sure they are aware of
    their progress. There will also be an 'Accept Job' link in the
    attached email leading to their platform profile where they can
    click on the button to officially accept the commission and begin
    the timer for the requested audit. The Auditor will have 24 hrs to
    accept the commission before it expires.

8)  The auditors will also have the option to request project creators
    for a deadline extension at specified or no rebate stating the
    cause, however, it's completely up to project owners to accept or
    decline the request.

9)  The auditor commissioned with the project will then have till the
    proposed deadline to submit a successful audit. They can upload
    the Audit in pdf format to the platform. There will be a penalty
    for late submission of the audit which will be 5% of the decided
    amount for submission later than 1 day to 1 week after the
    deadline ends, and 10% for submission later than 1 week to 2 weeks
    after the deadline. After two weeks the project's status will
    automatically be turned to expired, The commissioned auditor will
    be given a negative badge and the project creator will be refunded
    the whole amount.
  
10) In case, the submitted project is downvoted by 5 Arbiters for the
    first time, a deadline extension of 1 day will be granted to the
    auditor at no penalty ( For any altercations that can be quickly
    made to the report ), a 6-day extension will be granted the second
    time around at 5% penalty (For major scope misses) If the audit
    report is downvoted for the third time, the project status will be
    marked as expired, and the project creators can retrieve the whole
    staked amount. The auditor commissioned will be given a negative
    badge.

11) The auditors will get platform badges along their profile based on
    their actions: for example For every offer submitted in multiple
    of 10 will be given a badge (10 offers made, 20 offers made, 50
    offers made), For every successfully submitted Audit, a star badge
    or a count corresponding to their profile. There will also be
    negative badges for auditors who could not deliver their audits
    successfully to beware the project owners next time they make an
    offer. Every positive badge will be minted as NFT consisting of
    details of audits conducted in its metadata, for every negative
    badge, a mapping will be updated in the contract corresponding to
    the auditor's address to save gas.

12) A Voting system will be in place, and only after 5 Arbiters have
    voted in favor of the audit submitted, will the status be changed
    to completed. The proposed platform will charge 3% as (a server /
    Platform Fee ) and 2% Arbiters Commission, the remaining funds
    will be transferred to the auditor's wallet address connected to
    their profile.

13) Protocol developers can serve as the Arbiters in the early stages of
    the platform's deployment and as reliable auditors emerge on the
    platform who have been actively contributing to the community, The
    roles can be renounced/granted accordingly. Arbiters will be paid
    2% of the total commission, distributed among 5 validators for the
    easy work of scope affirmations.

14) The number of Arbiter roles granted by the platform will depend upon
    the traffic generated by the platform, more roles can be granted
    to ensure faster validation in a high-traffic environment and vice
    versa.

The peripheral components in the above-suggested platform such as user
profiles, projects posted(not yet completed), and KYC procedure will be
carried out with the help of Back-end Services, and the data will be
stored in a centralised database to facilitate users to change and
update their profiles at will whereas, The core functionalities such as
escrow, auditing achievements, and records will be stored in a
decentralised manner using smart contracts developed with !ink.


### Ecosystem Fit

  - The escrow smart contract will be developed in a platform agnostic manner which will make it beneficial for future use cases.
  - The negative badge mapping can be used by other platforms in ecosystem to create a bot blacklist .
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
for standards which, we believe, makes us a perfect fit to be the practicioner of this RFP.

Here are some of the feets, achievements our organisation boasts of:

1) Developed validator and nominator apps for substrate based blockchains .
2) Customised default reward mechanism in the staking pal of the substrate chain by integrating the sustainability and
   reliability score of the validators in the current reward system.
4) Integrated EVM and WASM based virtual machines natively in the substrate chain so the chain could support both EVM(Metamask,
   Remix, Web3.js, etc) and WASM(WebAssembly target, INK framework, etc) tooling.
5) Replicated whole polkadot ecosystem(Relay chain, Parachains, XCM), Where parachains are use case specific chains and communicate
   through XCM protocol with each other.
6) Developed several NFT Marketplace contracts both decentralized and hybrid across various blockchains such as [Hungama](https://heftyverse.xyz/),
   [SkodaVerse](https://www.skoda-auto.com/world/skodaverse), [Fanverse](https://www.fan-verse.io/) just to name a few.
7) Developed many DeFi projects across multiple blockchains such as [Shido, Staking](https://dex.shido.io/staking-page), [Shido, Perpetuals]
   (https://perp.shido.io/), [YSL](https://ysl.io/), [Lithium](https://lithium.ventures/) and many more.
8) We have also developed Asset Tokenization solution based on ERC3643 on EVM, Aptos & Provenance chain for some of the reknowned Financial Institutions. The    
   asset classes tokenized are Real Estate, Securities, Private Equity, Commodities such as Gold. Can't share the platform details, as we are under strict NDA.
9) We are also developing some in-house Web3 solutions such as Relayer Hub for meta-transactions, Decentralized Token Bridge, a multi-sig solution like Gnosis-safe  
   and we are actively researching and developing in areas such as Multi Party Computation (MPC), Account Abstraction (AA, ERC4337), zk proofs and many more.


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
- **Full-Time Equivalent (FTE):**  7
- **Total Costs:** 48,700 USD

### Milestone 1 Example — Initial research and design phase

- **Estimated duration:** 2-3 Weeks
- **FTE:**  1,5
- **Costs:** 4,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Technical Documentations | We will provide both **Architectural level Documentation** of the code and a **Contract level Documentation** that explains in absolute detail how our proposed project will work.|
| **0c.** | One Solution Architect & One Technical Business Analyst | 


### Milestone 2 Example — Development of Smart Contracts, APIs & Interactive Front-end

- **Estimated Duration:** 6-7 Weeks
- **FTE:**  4,5 incuding 2 Smart Contract, 2 Front-end, 2 Back-end developers
- **Costs:** 30,600 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Smart contracts | We will provide all the **smart contracts** as mentioned/discussed in the technical Documentations. |
| **0c.** | Back-End APIs | We will turn in all the **Node APIs** as mentioned/discussed in the technical Documentations. |
| **0d.** | Front end builds | We will finish the development of front end and turn it into the interactive **Front-End**. |

### Milestone 3 Example — Protocol Integration & Testing

- **Estimated Duration:** 4 weeks development + 2 weeks UAT/testing phase
- **FTE:**  2 Front-end developers
- **PTE:**  2 Quality analysts
- **Costs:** 13,600 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Smart-contract test scripts | We will finish the e2e testing of smart contracts and turn in the Test Scripts. |
| **0c.** | Node Test scripts | We will finish the e2e testing of node services and turn in the Test Scripts. |
| **0d.** | Front end Test Scripts | We will finish the e2e testing of front end and turn in the Test Scripts. |

## Future Plans

- As mentioned earlier, Our organization plans to serve as the Arbiters in the early stages of
  the platform's deployment untill reliable auditors emerge on the platform who have been actively
  contributing to the community to make this process decentralised in true sense.

## Referral Program (optional) :moneybag: 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Through RFP Portal.
