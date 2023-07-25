# Liberland Blockchain - the Judiciary

- **Team Name:** Liberland Blockchain Team
- **Payment Address:** fiat or, possibly, BTC
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Follow-up on Liberland Grant Application [pull request: Create liberland #831; a623bb28f2c9ce9609bf46e0e5801cda6e55aa47] 

### Liberland Blockchain

We are Liberland, the world's freest country. Currently, we are settling the physical land and developing our blockchain. 

Liberland Blockchain is a sovereign blockchain founded and supported by Liberland which provides the first set of use cases. The codebase is a fork of Substrate/Polkadot, with MIT license. Liberland does not claim ownership of the blockchain or related materials.

Functionalities such as trading and DeFi projects are permissionless by default while some critical functionalities such as country politics are permissioned and require KYC.

The next blockchain milestone is translating traditional contract, dispute resolution and judiciary functionalities into the Web3 realm, synergizing the virtues of centralized and decentralized models.

This milestone implements the quintessential element of all governance systems - the judiciary. We seek to enable dispute resolution within this blockchain ecosystem.

### Overview

#### Project Overview

The Liberland Judiciary is developing an on-chain system capable of acting on behalf of a party without their explicit permission in pre-determined ways with mutual consent given in advance.

While cryptocurrencies have successfully managed to build a parallel financial system, other uses of the technology remain rare 
because its hard to represent the real world or enforce contracts onchain. 
This anarchic decentralization is at the same time a great benefit but also a big limitation of blockchain technology.

This limitation needs to be solved in order to run a country on the blockchain.

Liberland solves this through courts acting as on-chain oracles providing data and judgements to contracts.

Everything in Liberland is done through contracts. While 'a social contract' is forced and implied in other countries,
it is explicit and voluntary in Liberland.

 - A citizen is a person who signed and fulfills the criteria for a 'citizenship contract',
which gives voting rights to the citizen but also allows courts to punish the citizen for breaking the law.

 - A Liberland company is an entity that has signed and fulfills the criteria for a 'company contract' which gives it
the rights and protections of the Liberland ecosystem, which can be taken away and company closed for breaking the law.
 
 - Any custom contract with conditions that cannot be tokenized, for example onchain health insurance contracts.

Judiciary is capable of interpreting intent behind actions within the blockchain. 
Empowered to enforce contracts, this entity exercises authority particularly in situations where malicious or bad faith intentions are identified. 
By introducing a virtual judiciary, questionable actions can be evaluated and, if necessary, nullified.

This architecture enhances the breadth of on-chain business activity,
facilitating enforcement of traditional contract agreements and enabling partial algorithmic execution. 
In effect, this approach instills confidence that transactions, whether off-chain or on-chain, offline or online, will be enforced. 
It offers an authoritative entity to resolve any disputes arising from the obligations agreed upon by the parties involved.

- Develop a 'court as a smart contract oracle' system to enable execution of traditional verbose contracts on-chain. This allows the imposition of sanctions as dictated by law or the contract itself in the event of a dispute.
- Implement norms, laws and contract templates to regulate the system's operations and promote good practices.
- Retain recognizable courtroom processes.
- Develop a market for judges and attorneys, and seed it with professionals ready to be hired.
- Enable traditional businesses to operate on-chain.
- Use the system for criminal cases in Liberland.



### Project Details

#### Hybrid Contracts

Major part of the project is refactoring current functionality into contracts that can be opted in and out of.

These are hybrid contracts, part code where code is law and part traditional text contract where law is law.

The intention is to handle the pyhsical world in addition to  web3 tokens, for example with hybrid contracts to build a house
where payments and disputes are handled on chain, and the judge can be the oracle deciding if the house has been built
properly in case of dispute.

Hybrid Contracts need to
 - Keep smart contract functionalities
 - Handle real-world data
 - Handle traditional contract clauses (text)
 - Choose jurisdiction
 - Handle disputes
 - Enforce code and text 'clauses'


Components of a hybrid contract
 - Self executing (smart) clauses
 - Traditional text clauses
 - jurisdiction when in dispute mode
 - Parties that signed the contract
 - Change in behaviour when in dispute mode
 - Execution when in dispute mode
 - Cancellation clause
 - Collateral (can be another contract)

Note that these contracts can basically be anything, we just outline the most common ones used in Liberland.

##### Example - citizenship contract

A citizen in Liberland is a person who signed and fulfills the criteria of the 'Citizenship contract'

To qualify, one needs to stake at least 5000LLM (which can act as collateral), be approved (KYCd) by the Ministry of Interior and follow the laws of Liberland.

If the conditions are met and contract is signed, the citizen gains the right to
 - run a validator
 - participate in politics
 - veto legislation
 - obtain a Liberland passport
 - Account recovery (optional)

Some of these rights are conditional while some are permanent. 

For example. if the citizen falls under 5000 staked LLM, the right to apply for congress is lost, but the right to use the passport is not affected.

The condition for 5000 LLM and the corresponding political rights are handled programmatically.

Other conditions however are handled by humans. 

Since the citizenship contract is under the jurisdiction of Liberland, courts are given pre-defined execution power when in dispute mode.

If the citizen is accused of breaking the law, the contract enters 'dispute mode'. 
If the court finds the citizen guilty, they may decide to order the citizen to pay for the damages. If the citizen cannot pay, the contract allows the court to unstake the citizens LLM to cover the costs.

If for example the citizen was proven to be hacking the validator, the right to run a validator might be taken away.

#### Default 'dispute mode'

In general, if all the parties of the contract agree to execute some contract clause, the contract will allow it.

However, dispute mode can be triggered by a party. In a dispute mode, the contract can change behaviour and gives execution power to the judge.

For example, if the contract was normally making payments every month, dispute mode may stop this until the judge or the parties resolve the dispute.

A judge needs to be defined, either pre-defined in the contract or appointed with agreement by both parties.

After the off-chain judicial process, the judge then executes the decisions on the contract.

In most cases, the services of the judge will need to be paid for.

##### Default Dispute Process

When all parties reach a consensus on selecting a judge the dispute can continue. The judge is ideally pre-defined in the contract itself.

The judge selection can be explicit (specific judge) or implicit ("letting the system decide"). 
For example, a contract can say that any judge in Liberland(or German, or US etc...) jurisdiction or a specific private court can take the case. 
In that case the legal organization selects the judge to handle the dispute.

The process is designed to be quick and cost-effective, happens off chain, and only the final decision is recorded on-chain.

Depending on the judge and jurisdiction, the details of the judicial process may vary and are irrelevant for this grant.


##### Appeal

The default contract waits a period of time until the judges decision about a dispute are executed. 
This allows to trigger the appeal process which happens in the backup jurisdiction at the expense of the appealer.


#### Enactment of Awards

As part of dispute resolution, one party might have to pay the other. In addition, the judges have to be paid for their services.

##### The Optimal Circumstance
A contract or a case has sufficient collateral to cover any additional payments in the final verdict and the court costs. 
In this scenario, the collateral is used for the execution of the judgement. 
A third party, like an insurance company may handle collateral in which case the collateral provider might be a different contract in itself with its own rules.

##### Case with Insufficient Collateral
###### Seizing politipooled LLM
If an individual's staked LLM is collateral, involuntary unstaking of the owing party's staked LLM will be triggered as defined in the citizenship contract.

###### Enforcement Beyond the Chain
In instances where aforementioned methods cannot enforce the judgement, the awarded sum will be incorporated into a conventional contract or appended as a supplement if the dispute is contract-related.
This contract, endorsed by both parties, holds legitimacy outside of Liberland, akin to any other contract. It can be presented to an enforcement agency for execution, even against the unwilling party's resistance.
Note that this is just an explanation of the process and doesn't represent a deliverable for the grant.

#### Edge Cases

##### Unresponsive judge
If the judge is unresponsive for a long period of time, the backup jurisdiction is activated. 
If there is no backup, the dispute can only be resolved by both parties agreeing (signing the same transaction) on the contract

#### Marketplace of judges and jurisdictions

We will build a registry system for jurisdictions and judges so that contracts can easily search for the right one 
based on parameters such as location, reputation, experience, cost etc.

While Liberland will maintain its own registry, the system is decentralized so anyone can start their own.


#### Contract builder

To expand the usage we will build an easy to use contract builder that suggests best practices and allows adding pre-built clauses.

For example, jurisdiction clause, monthly payment if no dispute clause, cancellation clause, insurance provider clause and so on.

There are 90+ businesses in Liberland and the exact implementation details of the contract builder will be discovered in the process of migrating them on-chain.

##### Example clauses
###### Periodic payment clause
Intended for contracts handling employment, renting, ongoing services, memberships etc...

Tokens from party A will go to party B every time period (week, month, X number of blocks...) 
as long as the contract is not in dispute mode.
The tokens that are paid can come directly from the 'main' account of the person, which in Liberland is usually KYCd.

###### Delict liability clause
Intended to ensure payment in case of delict/crime as part of citizenship contract.

Staked LLM from party A can be unstaked for the benefit of party B, triggerable only by Liberland judges/courts.

###### Insurance provider clause
Intended to handle third party insurance providers and guarantors.

In case a payment needs to be made from party A to party B, and the party A is unable to pay, insurance wallet C will
automatically pay. 

Insurance wallet C can be insurance provider to many contracts and be liable for much more than its wallet balance.
Choosing reliable insurance providers is important.

###### Traditional plaintext clause
Intended to handle real world conditions.

Traditional plaintext clause contains text representing traditional human contract clauses relating to the real world such as 
  - The house will be built
  - The rented car must be returned undamaged
  - Employee must come to work every day
  - Murder is illegal

###### Variables tracking clause
Some clauses rely on data that needs to be inputted and behave differently based on that data/variables.

For example, some project has milestones and some clause is triggered on each milestone, or

employee can skip coming to work 10 days in a year without penalty, so every time this happens it can be recorded on the contract or

as part of apartment rental contract, the utility costs vary so exact payment amount changes every month.

Parties can change this data, but a dispute mode can be triggered if the parties disagree about the change.

###### Pallet and assets integration
Contracts may interact with other assets and pallets.

Payment can be made in assets from the assets pallet.

Companies can trigger payout of profits that goes to wallets proportionally based on held stock.

###### Jurisdiction clause
Intended to handle jurisdiction/judge selection.

In case of dispute, the defined judge/court gets execution power over certain clauses instead of the parties themselves.

###### Trigger dispute clause
Intended to handle triggering dispute mode and start the judicial process.

Disputes can be triggered either manually or when some algorithmic clause fails (for example payment isnt made). 
It is possible to dispute only specific clauses and not the entire contract.
When in dispute mode, some clauses behave differently. Dispute can be resolved either by both parties agreeing to resolve it
or by the defined judge.

### Technical Integration with other pallets

#### Option 1: runtime asks contract what to do
Quick but intermediary solution
Instead of originating actions from the contract, we can originate from the runtime. Pallet then asks contract what should happen and executes.

For example. We define a set of methods:

```rust
enum RuntimeAction {
    Transfer(NativeOrAssetId, AccountId, AccountId, Balance),
    TransferWithInsuranceFallback(NativeOrAssetId, AccountId, AccountId, AccountId, Balance),
    SlashStakedLLM(AccountId, AccountId, Balance)
}
```

Then instead of calling the smart-contract directly, judge calls pallet-contracts-registry.
Contracts registry asks the smart-contract what to do, does some checks (whether the action is for contract signer) and executes it.

Upsides:
* No chain extensions
* Info about judges, parties and signatures already present in the contracts-registry, so access control is easy
* Smart contracts will be easy to write - just import one enum and return specific variant from a function.

Downsides:
* Smart contracts still won't be able to access any citizenship/llm/assets info, nor truly own assets, 
so it's not possible for other people to innovate with stuff like DAOs or DeFi.


#### Option 2: chain extension(s)

The alleged security problem with current assets chain extensions is that smart-contracts can do anything in the assets pallet on behalf of whoever called the smart contract.
But it doesn't have to be that way - we can simply restrict the chain extension to be only able to act on behalf of the contract.
So we'd develop 2 Chain Extensions:
1. Safe Assets Chain extension, which allows contracts to receive and transfer arbitrary pallet-assets, 
but only those owned by them (or explicitly preapproved in assets pallet)
2. Liberland extension, which:
  * provides current info about staked LLM (& maybe identity & registries in the future)
  * allows slashing staked LLM
  * allows taking LLD & assets directly from someone elses account


Upsides:
* Flexible - allows arbitrary smart contracts to actually hold and manage assets. Opens lots of possibilities.

Downsides:
* Encoding/decoding all data passed between contracts and runtime must be done manually, there're 3 layers in between, it's much harder to get security right,
* Smart contracts that use Chain Extensions are PITA to implement,
* Will take much longer to implement.
* The Liberland Chain Extension will need some additional layer of integration with contracts-registry, 
to make sure that whatever contract is trying to do is done to someone that actually signed the contract.

### Ecosystem Fit

#### Project Ecosystem Fit


- **Where and how does your project fit into the ecosystem?**

The integration of a 'court as a smart contract oracle' will enable the execution of traditional, worded contracts on-chain,
thereby expanding the scope of on-chain business activity.
By translating traditional dispute resolution and judiciary functionalities into Web3, it will introduce a new layer of trust and security to blockchain transactions.
The Liberland Blockchain will be a significant addition to the Polkadot ecosystem as our pallets and practices can be used directly or in other parachains,
allowing more organizations to operate and do business using the polkadot ecosystem. We are connected to the dotsama ecosystem through SORA.

- **Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?**

Liberland justice system, Liberland entrepreneurs, anyone else who wants to run complex contracts and dispute resolution on chain


- **What need(s) does your project meet?**

Traditional dispute resolution, judiciary and traditional business functionalities in Web3. 
It allows  the execution of traditional contracts on-chain and facilitating enforcement of traditional contract agreements. 
It introduces a entity capable of interpreting intent behind actions within the blockchain and regulating transactions, 
especially in situations where malicious or bad faith intentions are identified.

In addition, it is the judiciary of the country of Liberland, fulfiling one part of the liberlander ambition to attain statehood, namely, to be able to appoint judges and to resolve cases of those who wish to live under Liberland' jurisdiction.

- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**
  - **If so, how is your project different?**
  - **If not, are there similar projects in related ecosystems?**

Upon a comprehensive review of the solutions currently available within the Polkadot Ecosystem, we have found that none of these proposals or existing systems align directly with the unique functionality and objectives of our proposed solution. The two proposals that bear the closest resemblance to our initiative are the SaaS3 Court and the DOT Marketplace. However, upon closer examination, these systems diverge significantly from our approach in several key areas.

 **[SaaS3 Court](https://github.com/SaaS3-Foundation/saas3-dao/tree/main/pallets/court)**: This proposal outlines a jury-based judiciary system specifically designed for the blockchain. However, it lacks the comprehensive legal framework that our solution offers, as it does not aim to establish a full-fledged jurisdiction or nation-state. Its primary focus is to implement a judiciary system on the blockchain, where jurors are compensated in tokens based on the outcomes of certain cases. This system, while innovative, does not encompass the breadth of legal considerations that our solution addresses.

**[DOT Marketplace](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase3_Milestone3/pallets/pallet-tasking/src/lib.rs)**: This proposal presents a general marketplace that could potentially offer judicial and legal services, contingent on market demand. However, its scope is both broader and more specific than our solution. While it is not a specialized judicial solution, it is also too narrowly focused on marketplace and task functions to present a significant competitive threat. Notably, it does not explicitly propose a meta-system to handle disputes arising within the marketplace.

In light of these observations, we believe that our solution does not compete with either the SaaS3 Court or the DOT Marketplace. Instead, we see potential opportunities for collaboration with these initiatives. Our unique approach to providing a comprehensive legal framework on the blockchain sets us apart and positions us to address a distinct set of challenges and needs within the Polkadot Ecosystem.

As of the time of writing, there are no known projects within the Substrate/Polkadot/Kusama ecosystem that offer the same combination of features as the Liberland Blockchain project. We are the first country to run its government (and judiciary) on the blockchain. But besides that, the unique aspect of this project is the integration of a 'court as a smart contract oracle' that enables the execution of traditional contracts on-chain and the introduction of a entity capable of interpreting intent behind actions within the blockchain. The entire world of traditional contracts is currently barred entry into the blockchain world, and we are attempting to forge a key allowing that huge, majority part of the world economy to come into the Polkadot ecosystem.


## Team :busts_in_silhouette:

### Team members

- Dorian Stern-Vukotic, Senior Developer
- Kacper Zuk, Senior Developer

### Contact

- **Contact Name:** Dorian Štern Vukotić
- **Contact Email:** [dorian.sternvukotic@gmail.com ]
- **Website:** [Liberland](www.liberland.org)

### Legal Structure

- **Registered Address:** 3/F, Chinachem Tower, 34-37 Connaught Road Central, Hong Kong
- **Registered Legal Entity:** Liberland Limited

### Team's experience

Our team has extensive experience in developing blockchain solutions. We have been working on the Liberland Blockchain, a layer 1 public blockchain owned by coin and token holders. All team members individually have 7+ years of software engineering experience with 1+ years experience with blockchain technologies, primarily Substrate, Rust and Solidity.

### Team Code Repos

- [Liberland GitHub](https://github.com/liberland/liberland)

### Team LinkedIn Profiles (if available)

- [Dorian Stern-Vukotic](https://www.linkedin.com/in/djstern)
- [Kacper Zuk](https://www.linkedin.com/in/kacperzuk/)

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- **academic publications relevant to the problem:**
1. [**BLOCKCHAIN'able JUDICIARY: BLOCKCHAIN, ARTIFICIAL INTELLIGENCE, INTERNET OF THINGS and JUDICIAL SYSTEM (ONE)**](https://www.amazon.com/BLOCKCHAINable-JUDICIARY-BLOCKCHAIN-ARTIFICIAL-INTELLIGENCE/dp/1703687477) by Ismail Mohammed; This book discusses how modern technology can be used to ease complications of legal process issues and procedures.
2. [**Stanford Journal of Blockchain Law & Policy**](https://stanford-jblp.pubpub.org/): This journal publishes articles and essays related to blockchain law and policy. Some recent articles include:

3. [**On-Chain DAO Governance and Decentralized Regulation**](https://www.ssrn.com/index.cfm/en/maxplancklawrps/max-planck-luxembourg-res/) by Max Planck Institute Luxembourg for Procedural Law.

4. [**Cryptocurrency and the Family Courts - Some International Experiences**](https://financialremediesjournal.com/content/cryptocurrency-and-the-family-courts-some-international-experiences.4fc550f56143411ca515055b2ce2872d.htm) – by Financial Remedies Journal
This article discusses how cryptocurrency is being dealt with in family court cases in England.,
- **links to your research diary, blog posts, articles, forum discussions or open GitHub issues:** [development JIRA](https://liberland.atlassian.net/jira/software/projects/BLOCKCHAIN/boards/2),
- **contact with Web3 Foundation:** conversation with Seraya Takahashi from 26-07-2023

- ### **Links**
[Github](https://github.com/liberland)
[Docs](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/)
[Testing guide](https://docs.google.com/document/d/1ntrT6bafTD2LfXUG9QLxOieogXELn9icN1y__EGfZ98/edit#heading=h.yfda4shb4ggs)
[Blockchain website](https://liberland.org/blockchain)
[Project website](https://liberland.org)
[Mainnet explorer](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Fmainnet.liberland.org#/)
[Mainnet frontend](https://blockchain.liberland.org/signin)
[Testnet explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftestchain.liberland.org%2F#/explorer)
[Testnet frontend](https://testnet.liberland.org)
[Metaverse](https://liberverse.net/)
[Liberland Marketplace](https://market.ll.land/)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  4 FTE
- **Total Costs:** 30 000 USD.

### Milestone 1 Simple Process

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation |  **Inline documentation** of the code and a **tutorial** to spin up a Liberland nodes and test how the new functionality works. |
| **0c.** | Testing and Testing Guide | Unit tests and testing guide. |
| **0d.** | Docker | Dockerfile(s) that can be used to test the functionality in this milestone. |
| 0e. | Article | Publish an **article**/workshop that explains the functioning of the judiciary and its impact on the Polkadot environment |
| 1. | Substrate: Simple judiciary | Traditional plaintext contracts on chain that can be signed by parties and registered judges |
| 2. | Substrate: Hybrid contracts | Expanding smart contract solutions to support plaintext clauses, courts as oracles, work with other pallets such as LLM |
| 3. | Substrate: Default contracts | Develop default contracts for common business, rental and insurance uses |
| 4. | Frontend| We will deliver a basic frontend to operate the new substrate modules |


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1-3 month
- **FTE:**  1,5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | **Inline documentation** of the code and a **tutorial** to spin up a Liberland nodes and test how the new functionality works. |
| **0c.** | Testing and Testing Guide | Unit tests and testing guide. |
| **0d.** | Docker | Dockerfile(s) that can be used to test the functionality in this milestone.
| 1. | Contract insurace |  Develop default insurance contracts that can be used as collateral provider in other contracts |
| 2. | Substrate module: Judiciary Market | Module that gathers on-chain data to facilitate the operation of the marketplace of judges to be used as judges and jurisdictions in contracts|
| 3. | Contract builder | Easy to use frontend interface to build hybrid contracts by adding pre-built smart and traditional clauses, define jurisdictions, handle collateral, handle dispute mode etc. |
| 4. | Contract dispute appeals and edge cases| Develop default contract clauses that handle appeals and edge cases when in dispute mode |
| 5. | Frontend| Judiciary Marketplace, Insurance and contract builder frontend |
| 6. | Integration with other pallets| We will choose either a simple (new pallet) or proper (chain extension) integration of contracts with other pallets and implement it |


## Future Plans

- Liberland is a country that is currently establishing its control over the land.
- This system will become the obligate judiciary for the country's citizens and anyone who want to do business with the country.
- We are also setting up a system of promotion for the Liberland Blockchain
- The judiciary will be a big part of that
- We will also connect to 3rd party services, enabling the operation of the judiciary with their platforms
- After the success of our first Liberland Blockchain/ Polkadot conference, we will keep organizing more.

### Judiciary development future plans
- Upgrade contract builder frondend that deploys a hybrid smart/traditional contract with defined juridistictions
- Upgrade escrow functionality to adapt for use with insurance companies, allowing partial escrow etc
- Integration with the company, land and asset registry pallets to allow full legal support for on chain assets
- Setup default company hybrid contracts to support shareholders in preparation for the Liberland stock market
- Bridge more tokens so that contracts can support BTC, USDT, ETH, DOT etc...
- Instantiate a new chain with these functionalities as a parachain on Polkadot/Kusama
- Citizenship and e-resident contracts
- Delict law support


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

- **Work you have already done**: We have set up the Level 1 Liberland Blockchain, and have already received and utilized a grant from Web3 Foundation for it. The blockchain currently handles the political process, stores legislature and handles vetoes, uses assets as political token, has company, land and other asset registries, and is integrated into the Liberland metaverse
- **Other teams**: We are grateful for the help of the [Neti Blockchain Development Company](https://neti-soft.com/) They have contributed greatly to the development and we expect them to remain with us for the development of the judiciary.
- **Previous Grants**: Liberland Blockchain Level 2 Grant: accepted and paid out.
