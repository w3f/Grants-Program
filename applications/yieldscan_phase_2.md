# W3F Open Grant Proposal

* **Project Name:** YieldScan 
* **Team Name:** Find Signal PTE. LTD. 
* **Payment Address:** `0x8cdf9e28B5C49A80c039d68Fb5807Ed8EdE72E67` or `findsignal.eth`


## Project Overview :page_facing_up:

This is a follow-up grant for the previous successfully delivered [YieldScan grant](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/YieldScan.md) under [W3F's General Grants Program](https://github.com/w3f/General-Grants-Program/).


### Overview

Tagline: YieldScan - simplify staking experierence without trading off security over convenience. 


#### Brief Description of Project: 
YieldScan helps simplify staking experience on Polkadot and Kusama. 

A more detailed description of the problem and our solution is documented here in our [Medium launch post](https://medium.com/buidl-labs/no-brainer-staking-experience-for-polkadot-with-yieldscan-with-complete-control-over-your-funds-4f8c040740d5)


#### Relation to Polkadot and Kusama
We launched YieldScan publically in the first week of December 2020, and the platform has since then enabled over 130 users to stake + redistribute existing stake of 180,000+ KSM (approx. $81,106,200) and 700,000+ DOT (approx $28,497,000) using our platform's simple and cohesive UX as well as ability to recommend best set of validators basis user's preferences of risk. 

![](https://i.imgur.com/bTMjwkB.png)

---

A part of these users have shifted their stake from centralized exchanges to non-custodial wallets:
 - ![](https://i.imgur.com/UF9x4UG.png)
 - ![](https://i.imgur.com/KXKIs0a.png)

---

A glimpse of the positive word of mouth we have got from the community: 
![](https://i.imgur.com/QThn36U.png)

<br><br> 


#### Team Motivation: 
After launch, we sat down to listen to our users to understand what to build next. 

We were inspired by [Superhuman onboarding experience](https://www.google.com/search?q=superhuman+onboarding+experience&oq=superhuman+onboarding+experience&aqs=chrome..69i57.3691j0j1&sourceid=chrome&ie=UTF-8) and we thought that if an email client can onboard their users 1:1, crypto staking - which is like hundred times more complex process - should deserve a 1:1 onboarding. 

Therefore we onboarded like 20 users on Zoom and 50 users through chat and patiently listened to their feedback as well as smoothening out a bunch of nonobvious things in the flow. 

An example of a user onboarding session is [here](https://drive.google.com/file/d/11QkZOIOw41pvyNFujmUpLe4xoOMtPuOm/view) (shared with the permission of the user).

<br><br> 

After going through all user onboarding sessions and discussions with users on chat/telegram, we came to an understanding that in the path to increase adoption, the next critical constraint to solve is to onboard users to the best practises of how to go about staking. 

To gain a sense of the problem, the traction we have mentioned above is all through funds that were sitting inside Polkadot browser extension 😱. 

We believe that stakers shoudn't need to trade off security over convenience when they can have both with YieldScan. 

In that line of thought, we want to help stakers onboard to best practises by: 
1. Developing a wizard that helps user understand the why behind setting up distinct stash and controller account --> and them helping them do so.  
2. Recommend moving large asset holdings to hardware wallets.  
    - That means incorporating hardware wallet support into YieldScan
3. Combining point 1 and 2, a user will be able to use Ledger + distinct controller account to stake onto Polkadot and Kusama. 

<br><br> 

### Project Details

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
     - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FYieldScan%2FQUSoRPnKpS.png?alt=media&token=38ec368a-5985-4ba8-b99f-a91a71584b31)
     - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FYieldScan%2Fcl-OazIdXe.png?alt=media&token=58f210cb-51b3-4a7a-9009-0c0694571c9e)
     - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FYieldScan%2FOGgqADpFtW.png?alt=media&token=3e4b5da2-703f-472a-8342-d0db25a34cdc)


<br><br> 

### Ecosystem Fit

#### Where and how does your project fit into the ecosystem?
We simplify staking experience for Polkadot && Kusama. 

#### Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Users who are trying to participate in staking but finding it hard to do so. 

#### What need(s) does your project meet?
![](https://i.imgur.com/5lGQVmi.png)


#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
A similar project building in the space is [Kusama Validator Center](https://colm3na.github.io/kusama-validator-resource-center/). 

The difference that YieldScan provides is: 
* more empathatic UX to the end user 
* works for both Polkadot and Kusama. 
* loading time is near instant. 

<br><br> 

## Team :busts_in_silhouette:

### Team members

- Saumya Karan
- Sahil Nanda
- Prastut Kumar

### Contact

* **Contact Name:** Saumya Karan
* **Contact Email:** [karan@yieldscan.app](mailto:karan@yieldscan.app)
* **Website:** https://yieldscan.app/

### Legal Structure
**Registered Address:** 3 Fraser Street, #05-25 Duo Tower, Singapore (189352)
**Registered Legal Entity:** Find Signal Studio PTE. LTD. 


### Team's experience

We've been building within the Polkadot ecosystem for the past 1 year understanding user adoption problems in the ecosystem and solving a bunch of them with YieldScan. 

### Team Code Repos

- https://github.com/yieldscan

### Team LinkedIn Profiles

- [Saumya Karan](https://www.linkedin.com/in/skrn/)
- [Sahil Nanda](https://www.linkedin.com/in/sahil-nanda-8b1b88143/)
- [Prastut Kumar](https://www.linkedin.com/in/prastut/)

## Development Status :open_book:

- **Current live version:** https://yieldscan.app/
- **Current codebase:** https://github.com/yieldscan
- **Lo-fi designs:** (for new additions) https://www.figma.com/file/VnzlrH54Bosh9UR8xQy8Dj/Panda-Finance---Project-YieldScan---Low-fi?node-id=1%3A10087
- **Recommendation System Documentation** - https://docs.google.com/document/d/1ynmx3c_2hKoUXueJ5MT-gZ3ghFYJvynU6U4F_QRgHH8/edit#heading=h.gjdgxs

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 1.5 months 
* **Full-Time Equivalent (FTE):**  3
* **Total Costs:** 20,000 USD (payable in DAI)

---

**IMPORTANT NOTE:**
* Our deliverables will be built on [YieldScan Github Org](https://github.com/yieldscan) which contains fork of relevant repos that power YieldScan App from [BUIDL Labs](https://github.com/buidl-labs?q=yieldscan&type=&language=&sort=). 
* The original repos from BUIDL Labs are under GPL GNU V3 and the repos under YieldScan Org respect the original license and are continuing with the same license. 
* Additional context: we have spun off YieldScan into a seperate project from BUIDL Labs, though the core contributors remains the same. 

---

### Milestone 1 — Incorporate Distinct Controller and Ledger support into YieldScan


* **Estimated Duration:** 1.5 month
* **FTE:**  3
* **Costs:** 20,000 USD (payable in DAI)

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GNU GPL V3 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial (via Loom) that explains how a user can use YieldScan with Ledger |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 0d. | Article/Tutorial | We will be developing YieldScan Gitbook to start laying the foundation of comprehensive user facing documentation. Inside this we will be incorporating ledger staking documentation + videos. 
| 1. | Implement Controller Account Support | Implementation to detect account type (stash/controller) in the background and accordingly allow the user to stake through YieldScan. <br><br> **How to verify deliverable**: you will be able to use YieldScan with a different controller and stash account. 
| 2. | Implement Ledger Wallet Support | Integrating the wizard that walks the user through setting up Ledger + controller setup <br><br> **How to verify deliverable**: you will be able to stake using Ledger Wallet and leverage the built in recommendation system to select best validators onto Polkadot and Kusama.  
| 3. | Docker| We will deliver both backend and frontend docker images  |


## Future Plans

A lot of the crypto products today cater to active traders and holders. 
We want to build for the users who believe in passive wealth creation and long term holding. 

- In the near short term, we plan to start charging a small fee for helping user stake simply to sustainably fund development to reduce or diminish the reliance on taking grants. 

- After that we plan to build more value for stakers by: 
    - incorporating Trezor hardware wallet support through leveraging [this grant's work](https://github.com/w3f/Open-Grants-Program/pull/39)
    - merging [staking rewards calculator](https://github.com/w3f/staking-rewards-collector) into YieldScan dashboard so that it can help the user with compliance. 
    - incorporating [staking proxy module](https://github.com/w3f/General-Grants-Program/pull/419#issuecomment-808945782) so that users can delegate their nominations to smart managers. 
    - build more robust recommendation system + allow the ability to add custom recommendation systems in our core product flow. 
        - Eg: a user could choose from various different strategies by different people and stake basis risk/rward. 


## Additional Information :heavy_plus_sign:

- Are there are any teams who have already contributed (financially) to your project?
    - Web3 Foundation (previous grant)
    - Find Signal Studio PTE. LTD. for operational expenses after grant funding got exhausted. 
- Do you have a community of users or open-source developers who are contributing to your project?
    - We do have a community of users on [telegram](https://t.me/yieldscan) and [discord](https://discord.gg/5Dggqx8), but they do not directly contribute to our project.
