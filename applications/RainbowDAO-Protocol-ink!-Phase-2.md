# W3F Grant Proposal



- **Project Name:** RainbowDAO Protocol ink!  Phase 2
- **Team Name:** Rainbowcity Foundation
- **Payment Address:** 0xC2dA4D5813978BbC43d81e905dE6C98767526EdF (DAI)
- **[Level]** 2 



## Project Overview :page_facing_up:

It is an application for a follow-up grant. The [initial grant](https://github.com/w3f/Grants-Program/pull/680) covered the first and second milestones:
- [RainbowDAO-Protocol-ink!-Phase1 Milestone 1 delivery report](https://github.com/w3f/Grant-Milestone-Delivery/pull/334)
- [RainbowDAO-Protocol-ink!-Phase1 Milestone 2 delivery report](https://github.com/w3f/Grant-Milestone-Delivery/pull/384)


In November 2021, we applied for the first grant of Web3 Foundation and had completed two milestones of the grant in April, 2022. Our tech team has tremendously progressed with the assistance of W3F Grants team, whether it is on the encoding ability or about the product logics. Thus, we'd like to take this opportunity to thank each member of the team for their generous help.

After one month preparation, we have decided to apply for the second grant which also belongs to the DAO infrastructure product development. The smart contract language is still ink! , which is also part of the RainbowDAO protocol.

RainbowDAO Protocol is a multi-chain DAO infrastructure service protocol, providing all kinds of DAO infrastructure facilities and Web3 tools-kits for various DAO organizations on different chains. To better serve all types of DAO organizations, we have built a complete set of DAO infrastructure technical lines focusing on the whole DAO ecosystem, including eight categories of more than 30 independent Web3 tools-kits.

These eight categories comprise of DAO Organizational Management System, DAO Token Management System, DAO Personnel Management System, DAO Voting and Proposal Management system, DAO Financial and Vault Management system, DAO Fund raising Management System , DAO Marketing and Contributions Management System and DAO ecological tool management system. 

The eight ecosystems contain thirty independent management modules, each of which is an independent Web3 tools system. All modules make up the complete DAO infrastructure technical lines and each module can independently function or can be freely combined with one another through smart contracts. Therefore, all types of DAO organizations' demand has been met in terms of unified features as well as diversity needs and this makes our DAO organizations flexible as Lego come true.

Here we use the Ink! version of RainbowDAO Protocol. In the first grant, we have completed the core of RainbowDAO Protocol, which are protocol level and DAO factory level. Anyone can create and manage their own DAO organization using our DAO factory template and achieve the creation and management of departments. As a result, we continue to upgrade the RainbowDAO Protocol with more comprehensive modules. These modules are DAO tool products and designed to serve all types of DAO organizations, making them more compatible with diverse tools, fulfilling their governance needs and diversifying their organization and fund management.

For our second grant, we plan to develop two different types of DAO tools,  DAO Multi-signature Committee and DAO NFT Bank, both of which are written in Ink!. They can be both part of RainbowDAO Protocol to serve all types of DAO organizations and be utilized as independent products or modules. Eventually all these products will be deployed on all WASM supported para-chains within Polkadot ecosystem.


### Overview


In RainbowDAO Protocol ink! Phase 2, we will develop two different DAO tools, DAO Multi-signature Committee and DAO NFT Bank with their main functions as follows: 


- #### DAO Multi-Signature Committee System


The DAO multi-signature management committee system is mainly for voting and fund proposal application of the multi-signature committee organized by DAO. It contains two parts: the first is the election process of the DAO multi-signature management committee; the second is the fund proposal application process.


- #### DAO NFT Bank System

DAO NFT Bank System can deposit ERC20 tokens into banks for lock-up, and can obtain NFT rewards with ERC721 attributes. In this way, the circulation of ERC20 tokens can be controlled and the currency price can be increased.


### Project Details


- #### DAO Multi-Signature Committee System

##### 1. Why develop this DAO tool ?

DAO multi-signature management committee system is based on the need of governance over various types of DAO organizations. As is known to us that governance is the core work of DAO organizations, how to carry out governance is a huge challenge for every DAO organization. Should we adopt referendum or just authorize a group of people in governance?

Inspired by that, we created the DAO multi-signature management committee system. We believe that the overall governance of DAO must be decentralized and referendum is not required in everything, so we chose to authorize a multi-signature management governance committee for governance. By establishing various types of multi-signature committees with different responsibilities, the whole task will be broken down into many steps, and the authorized multi-signature management committee will handle specific affairs and receive the supervision of all community members. We believe this will be the direction of the most efficient DAO governance.

Therefore, we developed this DAO multi-signature management committee system with mainly two functions: the first is the election process of the DAO multi-signature management committee; the second is the fund proposal application process.


##### 2. How does it work ?


The DAO multi-signature management committee system is mainly for voting and fund proposal application of the multi-signature committee organized by DAO. It contains two parts:

(1) The voting election function of the DAO multi-signature committee. Different from DAO multi-signature wallet system, its multi-signature manager is not designated, but elected by voting. It has a complete process of candidate registration, voting, announcement of voting results and impeachment of committee members to elect members of the multi-signature management committee in a public way through a series of strict and standard processes;

(2) The elected multi-signature management committee is responsible for the fund approval of the multi-signature vault. Any eligible governance token holder can initiate proposals to the multi-signature vault to apply for funds for community governance. We have a complete funding proposal approval process.

##### 3. What is the product Logic diagram of this DAO tool?

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/03-Logic-diagram-of-Multi-Sign-Management-Committee.png)


DAO multi-signature management committee election and proposal application process

#####  ⑴ Establishment procedures

Any wallet can create a multi-signature DAO management committee and bind the corresponding governance tokens. Holders of the governance tokens can elect the multi-signature committee members through referendum and the multi-signature committee members can manage the funds in its treasury.

#####  ⑵DAO multi-signature management committee election qualification

We impose certain restrictions on the candidates of the election from two aspects. First, candidates must hold a certain amount of governance tokens, and second, they must pay a certain amount of campaign deposit.

Example:
① Hold 10,000 governance token RBD;
② Pay 1,000 RBD as election deposit ;

#####  ⑶ Candidate registration

Once the multi-signature committee election smart contract is activated, candidates can register within the next 14 days. The overall number of candidates needs to reach 30, otherwise the voting date will be postponed until the number hits 30. All relevant numbers here can be set when the contract is initialized.

#####  ⑷ Voting weight

When the committee election smart contract is activated, a snapshot of block height at that time will be taken to calculate the number of governance tokens held by each person. One coin equals one vote as the base of votes for this election and for the approval of subsequent proposals until the next election begins.

#####  ⑸ Voting delegation

After the committee election smart contract is activated and the block height determined, all community members can access voting delegation and obtain official votes. Everyone must first make a voting delegation before vote. 

There are two forms of voting delegation:
① Entrust yourself to exercise your own voting rights;
② Delegate to others and let them vote on your behalf. Such delegation can be withdrawn voluntarily.

#####  ⑹ Vote execution

① When all 30 candidates are in place, the smart contract gets activated for voting ;
② Those who have completed the voting delegation start voting;
③ The voting duration is 7 days. Multiple choices is allowed in voting and votes can be given to different candidates separately;
④ Vote can be withdrawn before the end of the voting and can revote for another candidate. But once the voting period ends, no vote can be changed;
⑤ After voting, the candidates with the top 13 votes will initially obtain the committee seats, and then enter the voting publicity period.

##### ⑺ Voting announcement

① After voting, the top 13 candidates will experience publicity period for 3 days;
② During the publicity period, all community members with voting rights can re-examine these 13 candidates. If they think that any one of them has seriously deviated from the community rules, they can vote against the candidate. The number of votes also depends on voting delegation and disperse voting is allowed;
③ If one candidate's disapproval rating exceeds 20% of the total number of votes, this candidate will be vetoed and replaced by the 14th candidate and no publicity period is needed;
④ After 7-day publicity, 13 members of the foundation will be officially elected, they will manage the entire community governance fund.

#####  ⑻ Impeachment process of multi-signature management committee members

The members of the multi-signature committee work under the principle of openness, fairness and justice, receiving  supervision from the entire community. They safeguard the overall interest of the community. However, the possibility cannot be ruled out that some members might steal community funds or do something harmful to the interest of the group. Once that misconduct is discovered, impeachment can be initiated by community members.

In order to avoid malicious impeachment, community members who initiate impeachment need to pay 1,000 governance tokens as deposit.
The person who initiates the impeachment can only impeach one member at a time. If the impeachment is successful, the initiator can get a reward of 5 times the impeachment deposit from the deposit of the foundation members; otherwise the deposit of the initiator will be taken as foundation funds.

An impeachment lasts 7 days. There is only one option in the vote because those who disagree to impeachment do not need to participate in the vote. All the delegated vote is the total base. If more than 20% of the votes agree with the impeachment, the impeachment succeeds; otherwise, the impeachment fails.

If the impeachment is successful, the initiator can get a reward of 5 times the impeachment deposit from the deposit of the foundation members; otherwise the deposit of the initiator will be taken as foundation funds.

If one committee member is successfully impeached, the committee seat will be takend by the candidate in line of voting until the next round of committee election begins.

#####  ⑼ Types of proposals

Users with governance tokens can apply to the multi-signature committee for activity fees in the form of proposals.
Applicant requirement: holding at least 5,000 governance tokens;
Applicant deposit: 5% of the application amount, the deposit will be returned if the application is successful; otherwise it will be taken away and put into the multi-signature account.

#####  ⑽ Fund fee application process

Governance token holders who meet the requirements can initiate proposals, apply for community governance fees and pay deposits. The fee application is reviewed and managed by 13 multi-signature management managers. The voting duration is 3 days. If 7 of the 13 people agree to pass the proposal, then the proposal is passed and enters the proposal publicity period. If not, the deposit will be deducted. The publicity period is 7 days. During publicity, all community members with voting rights can vote against this proposal. If the number of veto accounts for more than 20% of the total voting weight, the proposal will be terminated, and if the proposal is rejected during the publicity period, the deposit will not be deducted. If not rejected, the proposal enters the implementation period.

In the proposal application report, the proposal applicant can set the installment duration and pay the fees in stages.
For example, the entire proposal implementation can be divided into 4 stages. The proposal applicant needs to submit an implementation report on how many days each stage lasts, what percentage of the fees needs to be paid and so on whenever one stage is over. The report will be reviewed by the fund multi-signature committee for 3 days.

The fund multi-signature committee will review the implementation process. If the committee approves the implementation of the proposal, then no action is needed. If the committee believes that the implementation goes against the description of the application, they can veto the proposal. If 7 of the 13 people vote against the proposal, then the proposal won't be passed and the remaining fees will not be released. Proposal applicants can continue to submit the implementation report and apply for review. Each stage can be reviewed for up to three times. If the implementation of one stage passes the review, the applicant will receive the fees for the next stage. If it fails to pass the review three times in a row, the remaining fees will not be released, the proposal will be officially terminated. That is a complete fee application process.

##### 4. What is the UI of this DAO Multi-Signature Committee System?


1-initialization


![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/1-initialization.png)



2-global-governance-system

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/2-global-governance-system.png)

3-Committee

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/3-Committee.png)

4-Member-List

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/4-Member-List.png)

5-Committee-Voting-Details

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/5-Committee-Voting-Details.png)

6-Committee-Impeachment

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/6-Committee-Impeachment.png)

7-committee-vote

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/7-committee-vote.png)

8-Financial-Details

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/8-Financial-Details.png)

9-Initiate-Proposal

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/9-Initiate-Proposal.png)

10-Proposal-Details-Voting-Period

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/10-Proposal-Details-Voting-Period.png)

11-Proposal-Details-Publicity-Period

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/11-Proposal-Details-Publicity-Period.png)


12-Proposal-Details-In-Progress


![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/12-Proposal-Details-In-Progress.png)

13-Proposal-Details-Completed

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/Multi-signature-Management-Committee/13-Proposal-Details-Completed.png)





- ####  DAO NFT Bank System



##### 1. Why develop this DAO tool ?

In all types of DAO organizations, the hedging management of governance Token is a vitally important job. How to guide the community members to hedge Tokens is a critical module in terms of the liquidity of the governance Token management. As many governance Tokens lack a hedging system, when the flow of Token becomes greater and greater, the actual value of Token will continue to decrease to lead to the final failure of the whole project. With this inspiration and to tackle the problem, we designed and developed a DAO NFT Bank System that can guide the community members to hedge Tokens. This is the first application scenario of the system.


DAO NFT Bank System has another application scenario that enables hedging when a new project initializes and the initial coins are distributed to all VC and seed users. In this way, we cam make it happen that the respective ERC20 Tokens can be deposited into our NFT Bank system with a relative hedging date and an NFT certificate. These NFT certificates are considered the initial investing proof. This can completely solve the pivotal hedging issue the initial investors have, which is also the second important application scenario of this Bank system.

##### 2. How does it work ?

DAO NFT Bank System is one of the DAO infrastructure products developed by the RainbowCity Foundation, providing the governance Token hedging banks and NFT motivation system for all of the DAO organizations. This system is designed to lock position of governance Token. NFTs can be rewarded based on the position locking timing and amount. Simply it means that one can deposit ERC20 governance tokens into the hedging bank to get the NFT certificate in the form of ERC721, which is categorized into financial NFT. The rewarded NFT certificates are the equivalent of ERC20 Token deposit receipts. In the future, the NFT deposit receipt holders can withdraw the relative ERC20 governance Tokens by the time of validity.


Meanwhile, in order to guarantee the liquidity of the deposited ERC20 governance Tokens, we developed an NFT mortgage and loan market and an NFT transfer market for NFT deposit receipts. The NFT mortgage and loan market can get loans from the market by pledging the NFT deposit receipts. The NFT certificates can be cashed in the NFT transfer market by transferring the ownership.


##### 3. What is the product Logic diagram of this DAO tool?

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/02-Logic-diagram-of-DAO-NFT-Bank.png)



⑴  Create an ERC Token using the ERC20 factory and set basic information such as Token name, circulation, logo, decimals etc.

⑵  Create a DAO NFT bank with bank's name, mortgaged governance Token address, time set-up of the mortgage and NFT's title.

⑶   NFT badge contains information as follows: NFT serial No., NFT initial creator, NFT current holder, NFT lock-position time, NFT whole governance badge name, NFT whole governance badge quantity, lock-position end time, lock-position remaining days, withdrawal button.

⑷   Pledge governance Tokens and create an NFT badge: choose deposit amount, choose deposit duration, complete NFT badge.

⑸  To get the liquidity during the mortgage period, we can pledge the NFT badges in the mortgage and loan market to get borrow certain amount of money.

⑹   Loaning orders contain information as follows: loan Token, loan amount, loan period, loan start time, estimated payment date, remaining days, loan rates, loan actual interests and payback. 

⑺   To get the liquidity during mortgage, one can sell their NFT badges in the transfer market.

⑻   The transfer market orders contain information as below: order serial No., NFT serial No., NFT initial creator, NFT current holder, NFT set time, NFT expiry date, unlock remaining time, NFT transfer price, whole Token amount and transfer fees.

⑼   Anyone can buy the available NFTs through the transfer market and gain tokens included in this NFT. As soon as the hedging date expires, one can get withdraw the token from the bank with the NFT lock-position badge.


##### 4. What is the UI of this DAO NFT Bank System?


0-Create-NFT-Bank-1

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/0-Create-NFT-Bank-1.png)



1-Create-NFT-Bank-2


![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/1-Create-NFT-Bank-2.png)

2-Bank


![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/2-Bank.png)

3-Bank-Pledge


![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/3-Bank-Pledge.png)

4- My-loan-information


![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/4-My-loan-information.png)


5-My-Borrowing-Information-Order1

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/5-My-Borrowing-Information-Order1.png)

6-My-Borrowing-Information-Order2

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/6-My-Borrowing-Information-Order2.png)

7- have-lent

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/7-have-lent.png)

8- Borrowing-Market

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/8-Borrowing-Market.png)

9-Token-Transfer-Market-Purchase

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/9-Token-Transfer-Market-Purchase.png)

10-Screening

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/10-Screening.png)

11-Token-Transfer-Market-Sale

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/11-Token-Transfer-Market-Sale.png)

12-Sale-Popup

![image](https://raw.githubusercontent.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/main/UI/DAO-NFT-Bank/12-Sale-Popup.png)



### Ecosystem Fit



- Where and how does your project fit into the ecosystem?

  
    - Our products are expected to be deployed on various parachains of Polkadot ecology in the form of Dapp smart contracts. Our goal is to deploy on 100 parachains in the next three years. Be the infrastructure for DAOs on these 100 parachains.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

   - First, for ourselves, we will initiate our independent project RainbowDAO based on RainbowDAO Protocol ink! in good time, committed to the creation of DAO infrastructure, and truly serve the Polkadot DAO ecosystem.

   - Second, any project party who wants to create a project based on Substrate / Polkadot / Kusama. Because our protocol  exists in the form of a smart contract, allowing anyone to use it. Therefore, any project party can refer to, modify or directly deploy our code to provide DAO infrastructure for the entire Polkadot ecosystem. We treat all participants with a completely open attitude.

   - Third, any parachain builder can directly adopt our code and deploy it on their parachain to provide DAO infrastructure for the project parties on their parachain.

   - Fourth, when RainbowDAO Protocol ink! is deployed on a large scale in the Polkadot ecosystem in different ways, any type of DAO can use our protocol to create their DAO, and help them operate and manage their own DAO to the greatest extent.  

- What need(s) does your project meet?


Provide DAO infrastructure and web3 tool suite for various types of DAO. 

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

We found that there are already DAO infrastructure-based projects in the Polkadot ecosystem, such as subDAO and dorafactory. At the same time, there are also a large number of related projects in the Ethereum ecosystem, such as aragon and DAOstack focusing on the DAO framework, gnosis-safe focusing on the management of  multi-signature wallets, and snapshot platform Snapshot focusing on off-chain voting. Compared with these existing projects, RainbowDAO Protocol ink! can handle more complex DAO governance and collaboration. Our protocol  itself is more extensible, more flexible, more vital, creative and innovative. 



## Team :busts_in_silhouette:

### Team members

We have an experienced and powerful development team of 11 members. Here, we briefly introduce the members of our development team.

- RainbowKun: Team leader, Chief Architect, Product Manager，the overall builder of the Rainbowcity concept. The founder of the Rainbowcity Foundation, a strong believer and supporter of Satoshi Nakamoto and Bitcoin. He is fully committed to the construction of web3 ecology and Bit Civilization.
- Ivan Vian: Technical team leader, Full-stack developer, Rust and solidity full-time developer,10 years of technical experience, 5 years of blockchain development experience.
- Harris Wong: R&D team leader, Full-stack developer, Rust and solidity full-time developer,8 years of technical experience, 4 years of blockchain development experience.
- Alexunder: Full-stack developer, Rust and solidity full-time developer, 6 years of technical experience, 3 years of blockchain development experience.
- Dickenson: Full-stack developer, Rust and solidity full-time developer, 5 years of technical experience, 3 years of blockchain development experience.
- Sylvanus: Full-stack developer, Rust and solidity full-time developer, Senior front-end development engineer,5 years of technical experience, 2 years of blockchain development experience.
- Lawrence: Full-stack developer, Rust and solidity full-time developer ,4 years of technical experience, 2 years of blockchain development experience.
- Michael: Full-stack developer, Rust and solidity full-time developer, Senior front-end development engineer,4 years of technical experience, 2 years of blockchain development experience.
- Jasper: Assistant Product Manager, assist the architect in the planning and design of blockchain products, with 2 years of product design experience.
- Peke: Junior developer, new scholar of blockchain technology,Rust and solidity full-time developer, 2 years of technology development experience, 6 months of blockchain development experience.
- Echo: Chief UI designer, front-end designer, chief designer of various products of Rainbowcity. 5 years of senior design experience.


### Contact

- **Contact Name:** RainbowKun
- **Contact Email:** Rainbowcitykun@gmail.com
- **Website:** http://www.rainbowdao.io/ 

### Legal Structure

- **Registered Address:** 5001 Beach Road #07-37 Golden Mile Complex Singapore 199588.
- **Registered Legal Entity:** RAINBOWCITY FOUNDATION LTD.

### Team's experience

We have a full-time team of more than 20 people, including 11 full-time development teams, mainly Ethereum ecological development. Since 2019, under the leadership of RainbowKun, our team has prepared the Rainbowcity project entirely with our own funds. Rainbowcity is committed to building a digital city-state based on token economy and community governance. The core idea of Rainbowcity is DAO. We hope to build Rainbowcity into a trillion-dollar super-economy through 10 years of development, and create a virtual city-state based on the blockchain, and create a free state that adheres to the spirit of bitcoin, and to create a new civilization for mankind.

Rainbowcity is a DAO, and the design of the entire project is centered on DAO. In 2020 and 2021, the main work of our team is to design the Rainbowcity  project and develop Rainbowcity DAO. In the past, we focused on the Ethereum market and built the entire ecosystem of Rainbowcity on the Ethereum main chain and L2 network in the form of smart contracts. Therefore, our team mainly develops RainbowcityDAO smart contracts based on solidity.

After various investigations, we chose the Polkadot ecosystem created by Dr. Gavin Wood .  As we learn more about Dr. Gavin Wood, we find that Substrate and Polkadot are our best choices.

At the same time, inspired by the relationship between Substrate and Polkadot, we have also adjusted the product structure. The original Rainbowcity was an independent project, an independent DAO, and our development was also based on this DAO.

All our development needs are the needs of the project itself, and these DAO tools cannot meet the general needs of other DAOs. Inspired by the relationship between Substrate and Polkadot, we decided to abstract the product that was originally only applicable to RainbowcityDAO and make it applicable to various DAOs. This is why we launched RainbowDAO Protocol ink! today. 

In order to quickly integrate into the Substrate and Polkadot ecosystem, we decided to participate in the grant application of the web3 foundation to start our Polkadot journey. Through the grant application of the web3 foundation, participants in the entire Polkadot ecosystem can have a more systematic understanding of our development philosophy and future vision. We hope to use the grant platform as our first step to integrate into the Polkadot ecosystem, show our strength and our grand vision step by step, and become a part of the Polkadot ecosystem. 


### Team Code Repos

- https://github.com/RainbowcityFoundation/RainbowcityDAO
- https://github.com/RainbowDAO

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/RainbowcityKun
- https://github.com/ivanvian
- https://github.com/HarrisWongg
- https://github.com/Alexunderlett
- https://github.com/Dickensonn
- https://github.com/sylvanusVen
- https://github.com/lawrenceAigo
- https://github.com/michaelHookon

### Team LinkedIn Profiles (if available)

- No

## Development Status :open_book:

### Press Release about RainbowDAO Protocol

1.Rainbowcity Foundation announces official launch of DAO infrastructure project

https://ambcrypto.com/rainbowcity-foundation-announces-official-launch-of-dao-infrastructure-project/

2.Rainbowcity Foundation Launches RainbowDAO Protocol in Gitcoin Grant 12 

https://cryptopotato.com/rainbowcity-foundation-launches-rainbowdao-protocol-in-gitcoin-grant-12/

3.Rainbowcity Foundation Announces the Official Launch of DAO Infrastructure Project RainbowDAO Protocol in Gitcoin Grant 12

https://u.today/press-releases/rainbowcity-foundation-announces-the-official-launch-of-dao-infrastructure-project

4.The 2021 DAO Global Hackathon ended and the RainbowDAO team won three awards! 

https://finance.yahoo.com/news/2021-dao-global-hackathon-ended-174200673.html?.tsrc=fin-srch

5.The 2021 DAO Global Hackathon ended and the RainbowDAO team won three awards!

https://apnews.com/press-release/kisspr/technology-philanthropy-singapore-baae13a7c821e4e7bcf0dc6c62de0b91

6.RainbowDAO is the champion of Metaverse Hackathon in DAO tool track 

https://ambcrypto.com/rainbowdao-is-the-champion-of-metaverse-hackathon-in-dao-tool-track/

7.Web3 Foundation Grants — Wave 12 Recipients 

https://medium.com/web3foundation/web3-foundation-grants-wave-12-recipients-7e2b6bfb69be

8.Multi-chain DAO infrastructure protocol RainbowDAO receives a Web3 Foundation grant 

https://medium.com/rainbowcity/multi-chain-dao-infrastructure-protocol-rainbowdao-receives-a-web3-foundation-grant-143e9fac63bd

9.Multi-Chain DAO Infrastructure Protocol RainbowDAO Receives a Web3 Foundation Grant 

https://coincodex.com/article/13686/multi-chain-dao-infrastructure-protocol-rainbowdao-receives-a-web3-foundation-grant/

## Development Roadmap :nut_and_bolt:


In the first phase of our overall development, we mainly completed the basic framework part of the RainbowDAO protocol. The first part is the protocol layer of the RainbowDAO protocol itself, and the second part is the RainbowDAO factory contract, which is used for the construction of the DAO Factory. Both parts are basic functions. When our first phase is completed and the RainbowDAO protocol can operate normally, we will develop various extension modules.

Therefore, in our second grant, we focused on developing two extended functions, which are also used as two independent DAO tools, namely DAO Multi-Signature Committee System and DAO NFT Bank System. We are also developing these two systems as two separate milestones. A milestone completes a DAO tool.


### Overview

- **Total Estimated Duration:**  10 weeks
- **Full-Time Equivalent (FTE):** 5
- **Total Costs:** 45000 USD

### Milestone 1 

- **Estimated duration:** 6 weeks
- **FTE:**  3
- **Costs:** 25,000 USD

For the first milestone, we focused on developing DAO Multi-Signature Committee System. 

In this milestone, we mainly completed the document design, UI design, smart contract development, and front-end file development of this system, so that this DAO tool can be used normally and serve various types of DAO organizations.

| Number | Deliverable                    | Specification                                                |
| -----: | ------------------------------ | ------------------------------------------------------------ |
|    0a. | License                        | Apache 2.0                                                   |
|    0b. | Documentation                  | We will provide both inline documentation of the code and a basic tutorial that explains how a user can deploy our smart contract and experience specific innovative features. |
|    0c. | Testing Guide                  | Core functions will be  covered by unit tests to ensure. |
|    0d. | Docker                         | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
|    0e. | Article                        | We will publish an article in our medium introducing the various functions of the DAO Multi-Signature Committee System. |
|     1. | wireframes | We will provide wireframes  of this DAO Multi-Signature Committee System,We hope to fully demonstrate the functional logic of this product through wireframes. |
|     2. | Frontend files | We will provide front-end files and deployment tutorials for this DAO Multi-Signature Committee System.The front-end file(s) will interact with ink! smart contracts to make DAO Multi-signature Committee System complete, including the creation of multi-signature governance committee, members managing the whole selection process and the application of vault capital proposal. We will also add the detailed front-end deployment tutorials to let developers conveniently deploy the file(s) to ultimately make the interaction with Ink! smart contracts possible.  |
|     3. | ink! Contracts: | We will provide the complete ink! smart contracts of this DAO tool product, covering the main product logic according to the logical architecture diagram, which is also the main work of this milestone. |
|     4. | demo video | We will provide a demo video of this DAO tool product, showing its basic functions in the form of video. |


### Milestone 2 

- **Estimated Duration:** 4 weeks
- **FTE:**  2
- **Costs:** 20,000 USD


For the second  milestone, we focused on developing DAO NFT Bank System. 

In this milestone, we mainly completed the document design, UI design, smart contract development, and front-end file development of this system, so that this DAO tool can be used normally and serve various types of DAO organizations.

| Number | Deliverable                    | Specification                                                |
| -----: | ------------------------------ | ------------------------------------------------------------ |
|    0a. | License                        | Apache 2.0                                                   |
|    0b. | Documentation                  | We will provide both inline documentation of the code and a basic tutorial that explains how a user can deploy our smart contract and experience specific innovative features. |
|    0c. | Testing Guide                  | Core functions will be  covered by unit tests to ensure. |
|    0d. | Docker                         | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
|    0e. | Article                        | We will publish an article in our medium introducing the various functions of the DAO NFT Bank System. |
|     1. | wireframes | We will provide wireframes  of this  DAO NFT Bank System,  We hope to fully demonstrate the functional logic of this product through wireframes. |
|     2. | Frontend files | We will provide front-end files and deployment tutorials for this DAO NFT Bank System.The front-end file(s) will interact with ink! smart contracts to make DAO NFT Bank System complete, including initiating DAO NFT Bank, creating NFTs credentials, transfering and staking NFT credentials to loan.  We will also add the detailed front-end deployment tutorials to let developers conveniently deploy the file(s) to ultimately make the interaction with Ink! smart contracts possible. |
|     3. | ink! Contracts: | We will provide the complete ink! smart contracts of this DAO tool product, covering the main product logic according to the logical architecture diagram, which is also the main work of this milestone. |
|     4. | demo video | We will provide a demo video of this DAO tool product, showing its basic functions in the form of video. |


## Future Plans


- Follow the steps to develop a series of DAO infrastructure smart contracts to provide infrastructure services for the entire DAO ecosystem of Polkadot.

- Start to create the RainbowDAO community and continue to promote the core ideas of the RainbowDAO protocol in various media.

  

## Additional Information :heavy_plus_sign:-

**How did you hear about the Grants Program?**

Through the official website of the Web3 Foundation.

- Wheter there are any other teams who have already contributed (financially) to the project.

This project is independently developed by our team.

- Previous grants you may have applied for.

This is the 2nd grant of the Web3 Foundation that we have applied for.
