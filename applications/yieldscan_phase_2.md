**Project Name:** YieldScan
**Team Name:** Panda Finance
**Payment Address:** `bc1q6wf835ajgj2cr4x6eferqxyapek9an6jrl7vmc`

# Project Overview
This is a follow-up grant for the previous successfully delivered [YieldScan grant](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/YieldScan.md) under [W3F's General Grants Program](https://github.com/w3f/General-Grants-Program/).

The proof-of-concept for our goal --- i.e. simplifying the staking experience for Polkadot --- was a success both in terms of volume moved on-chain as well as from the community we have been able to boostrap. 

Since it's launch in the first week of December, YieldScan has enabled over 130 users to stake + redistribute existing stake of 180,000+ KSM (~$81,106,200) and 700,000+ DOT (~$28,497,000) using our recommendation algorithm.  

We believe YieldScan is an important lego block in the overall Polkadot ecosystem to get more retail users shifting their assets from CEX to self-custody. See more below under "Ecosystem Fit".

Now, we're looking to scale this to a broader audience, namely:

1. hardware wallet users
2. stakers in the entire Polkadot ecosystem, not just Kusama and Polkadot networks (for example, Edgeware)

## Overview
**Tagline:** Built to simplify and manage staking in Polkadot universe. 

Sub-goals: 
1. Help nominators follow best staking practises whilst minimizing cognitive load. 
2. Help validators with good on-chain metrics get better distribution of nominators through our recommendation system. 

## Details
### Project scope:
- **Ledger onboarding UX**
    - **Context**
      - There's a lot of details related to staking which aren't obvious to a new user.
      - YieldScan already abstracts such details to streamline staking for software wallet users, but ledger users are left out.
  - **Problem**
      - Some of these details (like bond and nominating being separate steps) CANNOT be abstracted for ledger users due to lack of support for batch transactions. However, this shouldn't deny them access to an equally streamlined experience.
      - Some details can be abstracted, but shouldn't -- like having separate stash and controller when you have access to a cold-storage hardware wallet.
  - **Solution**
      - A combination of abstraction + education
      - We've created the lo-fi for an onboarding flow for ledger users which guides them through the staking process and allows them to stake using YieldScan's recommendations
          - This retains some cognitive load to ensure that hardware wallet users who were looking for security are guided through the best practices.
      - [See designs](https://www.figma.com/file/VnzlrH54Bosh9UR8xQy8Dj/Panda-Finance---Project-YieldScan---Low-fi?node-id=1%3A10087)
          ![](https://i.imgur.com/LaiXKJJ.png)

  - **Demand:**
                    ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FYieldScan%2FQUSoRPnKpS.png?alt=media&token=38ec368a-5985-4ba8-b99f-a91a71584b31)
                    ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FYieldScan%2Fcl-OazIdXe.png?alt=media&token=58f210cb-51b3-4a7a-9009-0c0694571c9e)
                    ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FYieldScan%2FOGgqADpFtW.png?alt=media&token=3e4b5da2-703f-472a-8342-d0db25a34cdc)
                    
- **Dynamic integration of substrate-based networks**
    - **Context**
        - Currently, YieldScan only has support for Polkadot and Kusama i.e. it's not modular. For any other substrate-based network to leverage YieldScan's UX, they need to either fund third-party developers, take out significant time/effort to integrate their protocol into YieldScan or rely on us to do it for them.
    - **Problem**
        - New and existing networks which use the substrate staking module run into the same UX complexity problem as Polkadot and Kusama, making it difficult for nominators to participate in their protocols.
            - **Example:** 
                - [Edgeware funded a third-party developer for integration of YieldScan](https://github.com/edgeware-builders/construction-projects/blob/main/active/src/yieldscan-integration.md)
                - Even though Edgeware funded this team, due to rapid development and non-customizable nature of YieldScan, the integration doesn't work at the moment. 
        - Also, not all new protocols start with a huge on-chain treasury war-chest  to be able to afford such development in their early stages but every protocol would need a good staking experience to bootstrap initial traction. 
        - The surface area for staking investments within the Polkadot ecosystem looks limited to users. Listing more substrate-based networks would increase accessibility and the surface area for investing. Thereby increasing activity within the ecosystem.
            - **Example:**
                ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FYieldScan%2FVr14hcCOiJ.png?alt=media&token=47758a2d-f143-4494-999d-e09bbb407ccf)
    - **Solution**
        - Dynamic integration of new substrate-based protocols to YieldScan.

### Ecosystem fit
- Since it's launch in the first week of December, YieldScan has enabled 180,000+ KSM (~$81,106,200) and 700,000+ DOT (~$28,497,000) in staking volume.
![](https://i.imgur.com/bTMjwkB.png)

- It currently has more than 130 users with over 27,000 KSM (~$12,474,000) and 308,000 DOT (~$12,474,000) in "AUM" (for the lack of a better word).
- A part of these users have shifted their stake from centralized exchanges to non-custodial wallets:

![](https://i.imgur.com/UF9x4UG.png)
 
---
![](https://i.imgur.com/KXKIs0a.png)


# Team
## Team members
- Saumya Karan
- Sahil Nanda
- Prastut Kumar
## Contact
**Contact Name:** Saumya Karan
**Contact Email:** [karan@yieldscan.app](mailto:karan@yieldscan.app)
**Website:** https://yieldscan.app/
## Legal Structure
**Registered Address:** 3 Fraser Street, #05-25 Duo Tower, Singapore (189352)
**Registered Legal Entity:** Find Signal Studio PTE. LTD. 

## Team's experience
We've been building within the Polkadot ecosystem for the past 1 year understanding user adoption problems in the ecosystem and solving a bunch of them with YieldScan. 

### Code repos
- https://github.com/yieldscan

### LinkedIn Profiles
- [Saumya Karan](https://www.linkedin.com/in/skrn/)
- [Sahil Nanda](https://www.linkedin.com/in/sahil-nanda-8b1b88143/)
- [Prastut Kumar](https://www.linkedin.com/in/prastut/)

# Development Status
- **Current live version:** https://yieldscan.app/
- **Current codebase:** https://github.com/yieldscan
- **Lo-fi designs:** (for new additions) https://www.figma.com/file/VnzlrH54Bosh9UR8xQy8Dj/Panda-Finance---Project-YieldScan---Low-fi?node-id=1%3A10087
- **Recommendation System Documentation** - https://docs.google.com/document/d/1ynmx3c_2hKoUXueJ5MT-gZ3ghFYJvynU6U4F_QRgHH8/edit#heading=h.gjdgxs

# Development Roadmap
### Overview
* **Total Estimated Duration:** 2.5 months
* **Full-Time Equivalent (FTE):**  3
* **Total Costs:** 30,000 USD (payable in BTC)

---

**IMPORTANT NOTE:**
* Our deliverables will be built on [YieldScan Github Org](https://github.com/yieldscan) which contains fork of relevant repos that power YieldScan App from [BUIDL Labs](https://github.com/buidl-labs?q=yieldscan&type=&language=&sort=). 
* The original repos from BUIDL Labs are under GPL GNU V3 and the repos under YieldScan Org respect the original license and are continuing with the same license. 
* Additional context: we have spun off YieldScan into a seperate project from BUIDL Labs, though the core contributors remains the same. 
---

### Milestone 1 — Dynamic integration of substrate-based networks

In this milestone we will refactor our backend and frontend to be able to support different substrate based networks. 

The reason this milestone is a precursor to Ledger support milestone is to get testing environment (testnet) integrated into YieldScan codebase. 



* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 12,000 USD (payable in BTC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNU GPL 3
| 0b. | Documentation | We will be using Gitbook to document how can any network incorporate into YieldScan |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | The Gitbook documentation will suffice as core material for documentation. 
| 1. | Crawlers | Refactor [crawlers](https://github.com/yieldscan/yieldscan-backend-crawler) to add support for different substrate based networks. <br><br> Crawlers include: <ul><li>Risk score calculation for different validators</li><li>Estimated staking returns calculation for different validators</li><li>Fetching and storing historic data into our database</li><li>Fetching and storing council members</li><li>Fetching and storing ongoing session and era network staking data</li></ul>  |
| 2. | API |  Refactor Express [API gateway]((https://github.com/yieldscan/yieldscan-backend-api)) to support multiple networks. |
| 3. | Refactor Frontend | Refactor and modularise frontend components to add multiple networks support. <br><br> This involves all the components listed [here](https://github.com/yieldscan/yieldscan-frontend/tree/master/components).  |
| 4. | Add Rococo and Edgeware for demo/testing | We will be adding Rococo testnet and Edgeware support for demo/testing. |
| 5. | Docker| We will provide a dockerfile to demonstrate the full functionality of our backend and front end |



### Milestone 2 — Design and Implement Ledger Onboarding UX 

Designing and implementing a walk-through user-flow on YieldScan to improve staking experience for ledger users.

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 12,000 USD (payable in BTC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNU GPL V3 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial (via Loom) that explains how a user can use YieldScan with Ledger |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We will be incorporating ledger staking documentation in to YieldScan Gitbook itself. 
| 1. | Low Fidelity Ledger Onboarding Design | Already done, see designs [here](https://www.figma.com/file/VnzlrH54Bosh9UR8xQy8Dj/Panda-Finance---Project-YieldScan---Low-fi?node-id=1%3A10087). |
| 2. | Low to High Fidelity Ledger Onboarding Design | Converting low to high fidelity designs and finalizing the user-flow for ledger onboarding |
| 3. | Integrating Ledger onboarding | Integrating the design changes for Ledger onboarding on YieldScan frontend. |
| 4. | Docker| We will update the previous docker image for frontend created in milestone 1 with code merges from milestone 2 delivery  |


### Milestone 3 — Improving the recommendation algorithm.


* **Estimated Duration:** 2 week
* **FTE:**  1
* **Costs:** 6000 USD (payable in BTC)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNU GPL V3 |
| 0b. | Documentation | We will update our [previous documentation](https://docs.google.com/document/d/1ynmx3c_2hKoUXueJ5MT-gZ3ghFYJvynU6U4F_QRgHH8/edit#heading=h.gjdgxs) with the new changes that will be added. |
| 0c. | Testing Guide | Core functions that power the recommendation system will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We will incorporate the overall recommendation system to YieldScan Gitbook. The idea here is that anyone will be able to propose feedback/changes to it via Gitbook. 
| 1. | Recommendation algorithm Improvement | This involves improving the recommendation algorithm further as per community/users feedback for handling cases like validators randomly increasing their commision to 100% and other such cases. |
| 2. | Docker| We will update the previous docker image for backend created in milestone 1 and 2 with code merges from milestone 3 delivery.  |


# Future plans
- In the short term, we plan to make staking within the Polkadot ecosystem more accessible to all users and charge a small fee for it to sustainably fund development going forward. 
- In the long term, we intend to be a one-stop portfolio management solution for the Polkadot ecosystem.

# Additional Information
- Are there are any teams who have already contributed (financially) to your project?
    - Web3 Foundation (previous grant)
    - Find Signal Studio PTE. LTD. for operational expenses after grant funding got exhausted. 
- Do you have a community of users or open-source developers who are contributing to your project?
    - We do have a community of users on [telegram](https://t.me/yieldscan) and [discord](https://discord.gg/5Dggqx8), but they do not directly contribute to our project.
