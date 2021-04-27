# Open Grant Proposal

* **Project Name:** Bifrost SALP (Slot Auction Liquidity Protocol)
* **Team Name:** Bifrost.Finance
* **Payment Address:** 0x3754Fd5eC997c07Ca528bb0bdCB0b4F5b93605dF

## Project Description

**Bifrost SALP (Slot Auction Liquidity Protocol) aims to release liquidity of contributions in Kusama/Polkadot crownloan through the issuance of derivatives.** This will greatly increase asset utilization and attract more prudent investors who do not want to lose opportunity costs to support the parachain slot auction, thereby accumulating more DOT/KSM lock-ups for the Polkadot/Kusama ecosystem.

Bifrost has designed two derivatives for users: vsToken (voucher slot token) and vsBond. The former is a fungible token, which represents a voucher of a user's contribution to a parachain auction. The voucher can be traded at any time or cooperated with vsBond for 1-to-1 peg redemption.

The latter is a token represents the auction reward and lease period of different parachains, which smooths out the problem of different reward strategies between parachains. Meantime, vsBond can execute transactions through Bifrost's built-in vsBond market, without having to consider liquidity issues. 

![img](https://github.com/bifrost-finance/bifrost/blob/develop/docs/0_qkdkvd0FYjPe1iIn.png)

Bifrost hopes to distinguish between a Token’s utility value and its equity in the simplest way through vsToken and vsBond. At the same time, vsToken will have strong liquidity as a contribution derivative.

**UI:Participate in the Crowdloan page in Bifrost**
![img](https://github.com/bifrost-finance/bifrost/blob/develop/docs/vstoken%20contribute.png)

Through SALP, it may benefit the following three roles in Polkadot ecosystem:

User: Derivatives enhance the user's control over opportunity costs, while the vsToken/vsBond helps contributors to determine the utility and equity of derivatives. Moreover, the high liquidity from integrating all parachain contributions may reduce the high discount costs by a separated single-parachain derivative pool.

Parachain projects: Projects that support the Bifrost SALP will have the advantage of attracting contribution, and will be more competitive in the parachain auction. In addition, the fierce competitive environment will promote the accelerated innovation of parachain projects.

Polkadot ecosystem: According to the concept of "flexible lock-up" of liquidity derivatives, more contributors willing to participate in Crowdloan through centralized services will be attracted to on-chain, weakening the controlling ratio of DOT/KSM by centralized institutions, makes parachain auction more decentralized. In addition, a high-locked asset ratio can promote the security of PoS chain, and derivatives will eliminate the negative effect of low circulating.

## Team members

### Core Team

- Lurpis (Co-Founder & CEO)
- Edwin (Co-Founder & CTO)
- Buffalo (System Architect)
- Jamie (Lead Developer)
- Herry (Developer)
- Carmen (Developer)
- Bonnie (Research & Marketing)
- Tyrone (Product Manager)

### Contact

* **Contact Name:** Ziqi Pan
* **Contact Email:** TyronePan@bifrost.finance

### Legal Structure 

* **Registered Address:** Craigmuir Chambers Road Town, Tortola, VG 1110 British Virgin Islands
* **Registered Legal Entity:** BIFROST GLOBAL LTD.

### Team experience

Through the construction of the Bifrost project, the team has accumulated nearly 14 months of development experience based on Substrate. It is a member of the Substrate Builders Program and Web3 Bootcamp. At the same time, it has obtained the Web3 Foundation Grant through EOS Bridge and has completed the first milestone acceptance. Ready to deliver the second milestone. Have rich practical experience on how to design pledge derivatives and how to provide liquidity for them.

- Lurpis is also CEO of Liebi technology; 5 Years of blockchain product and development experience; Sina Weibo early full-stack engineer;Leader of blockchain cross-border settlement in Ping++; Good at creating quality experiences product.
- Edwin has 10 Years of development experience in blockchain and finance; Rich experience in large-scale system architecture design; Former core engineer of Ankr; Substrate course instruct.
- Buffalo with more than ten years of experience in information technology, cryptography applications, and blockchain system research and development, and rich research and development experience in Hyperledger-Fabric, Quorum, Ethereum, Bitcoin and other systems.
- Jamie is Leader of bridge / contract / core runtime development; Former National Instruments Test and Development Engineer; Rich RUST development experience.
- Herry Ho earned her Master degree from Carngie Mellon University. In Aug 2020, after finishing her course from the one-plus training community, she teamed up with five other developers to take part in the Hackusma event, and won the second prize. Being an enthusiastic of Substrate technology, she is now a member of Polkadot Course Ambassadors and has been helping to popularize Substrate blockchain technology in China. She is now actively translating the Knowledge Base documentation into Chinese in substrate.dev website, as well as writing tutorials on her blogs.
- Carmen is Front-end software Engineer with 7 years of front-end development experience in Web and Hybrid mobile app development;1 year work experience of hyperledger fabric blockchain project;Rich experience in ES6,TypeScript + React/Next.js development and UI/UX page styling.
- Bonnie has 3 Years of blockchain operation experience;Good at using innovative operating system to promote project; Served Fidelity, providing fund dealing support for the APAC.
- Tyrone Bifrost Product Manager, graduated from the University of Glasgow with a master's degree in economics, Dissertation has conducted in-depth research on the new financial model of blockchain, and participated in the public course of blockchain technology and application by Professor Xiao Zhen of Peking University. 

### Team Website 

* [https://bifrost.finance](https://bifrost.finance)

### Team repository

* [https://github.com/bifrost-finance](https://github.com/bifrost-finance)

### Team Github Profiles

- [Lurpis](https://github.com/lurpis)
- [Edwin](https://github.com/ark930)
- [Buffalo](https://github.com/lvqinghao)
- [Jamie](https://github.com/Dengjianping)
- [Herry](https://github.com/herryho)
- [Carmen](https://github.com/carmencitaqiu)
- [Tyrone](https://github.com/wodlj1314)

## Project Architecture

Contributor conducting SALP through Bifrost is as follows:
1. Original Crowdloan Workflow
![img](https://github.com/bifrost-finance/bifrost/blob/develop/docs/polkadot%20plo%20interact.png)

2. Bifrost SALP Workflow
![img](https://github.com/bifrost-finance/bifrost/blob/develop/docs/bifrost%20plo%20interact.png)

## Technical solutions

Investor users participating in crowdloan through Bifrost will separate and decouple two types of Token assets: vsToken and vsBond.

### vsBond: a token represents parachain auction reward and vsToken 1:1 redemption

vsBond represents the specific parachain and its successful Lease Period. Therefore, the full name of vsBond is: vsBond+Parachain Project Name+Retirement Date, for example: vsBond-Bifrost-2022-06-01.

vsBond has two main attributes:

1. Contribution Reward: vsBond can be transferred to the corresponding parachain through XCMP, and then only the address holding vsBond needs to be identified as a contributor.

2. Combined with vsToken, vsToken can be redeemed 1:1 after slots retirement.
Therefore, vsBond can be regarded as a special product that contains Contribution Reward and 1:1 redemption. As an equity certificate, vsBond does not require high-liquidity transactions and can be sold through a buy-in-price form of pending orders in Bifrost vsBond market, without creating liquidity pools.

**UI:vsBond+vsToken 1:1 redemption interface**
![img](https://github.com/bifrost-finance/bifrost/blob/develop/docs/vstoken%20redeem.png)
**UI:vsBond market**
![img](https://github.com/bifrost-finance/bifrost/blob/develop/docs/vsbond%20market.png)

### vsToken: a fungible token that releases contribution liquidity

The function of vsToken enables contributors to sell the vsToken in exchange for the original Token before slots retirement, so as to achieve the purpose of releasing liquidity.
Unlike vsBond, vsToken is not tied to specific parachains and Slots. To this end, Bifrost designed two exchange pools to achieve the fungible of vsToken: 1-to-1 peg pool and Bancor pool (1: x, x <= 1). The specific exchange rules are as follows:
![img](https://github.com/bifrost-finance/bifrost/blob/develop/docs/vstoken%20and%20vsbond%20workflow.png)

1. If the user holds both vsBond and vsToken, and the parachain represented by vsBond has expired, they can participate in 1-to-1 peg pool and redeem Token at a price of 1:1.
2. If the user only has vsToken, he can participate in the Bancor pool and redeem the Token at a price of 1:x (x <= 1) (the user can only perform the redemption function normally when Bancor pool has remaining Token, or wait until No.3).
3. When the parachain retires, Relaychain will return the tokens to Bifrost, and the system will put all tokens into 1-to-1 peg pool, and draw 5% of balance of 1-to-1 peg pool into the Bancor pool every day.
4. The funds injected into the Bancor pool by the system will be gradually released in a linear and smooth mechanism, rather than all at once, to prevent unreasonable and large fluctuations in the exchange price of vsToken and Token. It is equivalent to the system using part of the token to continuously purchase vsToken held by the user.
5. The acceptance period of vsBond is 3 months to prevent some attackers from deliberately hoarding vsBond and unwilling to sell. If vsBond is lost, vsToken can still be used to redeem Tokens from the Bancor pool without worrying about the risk that vsToken cannot be redeemed.
6. As long as the exchange behavior of 1:x (x <= 1) occurs in the Bancor pool, the system (Bifrost) will inevitably make a profit, and this part of the profit will go to the treasury for community development or repurchase of BNC.

### Bancor algorithm

<img width = '550' src ="https://github.com/bifrost-finance/bifrost/blob/develop/docs/bancor%20algorithm.png"/>
In order to avoid the situation where the divisor is 0 during the calculation process, the system can set the initial virtual base values (BaseBalance and BaseSupply) for Balance and Supply. When the user exchanges Tokens, the specific amount is brought into the formula for calculation, and the result is subtracted from the initial base value, then you can get the final result. As shown in the figure below: the initial virtual base value of DOT is BaseSupply, and the price ratio of vsDOT to DOT is 1:1; when 3*BaseSupply (4*BaseSupply-1*BaseSupply) DOT is redeemed from the Bancor pool, The price ratio of vsDOT to DOT reaches 2:1. When the system is implemented, a suitable BaseSupply value can be selected to obtain a suitable price curve.

![img](https://github.com/bifrost-finance/bifrost/blob/develop/docs/bancor%20curve.png)

## Runtime modules
To implement the above mechanism, we will add the following modules to Substrate runtime of Bifrost:
1. Prepare SALP module
It contains the following features:
    - Parachain Registration: Registration of the parachain’s information and SALP-related arguments on Polkadot-Relaychain.
    - Investors Contribution: Investors sign to Bifrost SALP module to contribute their DOTs to support Parachain crowdloan, and get vsDOT/vsKSM.
2. Execute SALP module
It contains the following features:
    - Contribute DOTs: Contribute DOTs for parachains on Polkadot relay chain to support their Crowdloan.
    - Redeeming DOTs: When the bid fails or slot lease expires, contributors will receive the returned DOTs.
3. Asset module
It contains the following features:
    - Record contributions: vsToken represents the corresponding quantity of user's contribution.
    - vsBond represents the quantity of contribution that can be rewarded.
    - DOT-vsDOT or KSM-vsKSM Conversion (Bancor): When fund being retirement, vsDOT/vsKSM should be converted to DOT/KSM.
    - vsDOT+vsBond to DOT or vsKSM+vsBond to KSM Conversion.
    - vsBond Buy & Sell.

## UI Development

We will implement a basic frontend component in React + Javascript + Polkadot.js. This component can be incorporated into the implementing platform's User Interface.

### UI:User goals

1. Load the application in the browser
2. Sign in to polkadot.js extension
3. See vsToken interface
4. See slot auction status(Auction: ongoing, ending period, ended)
5. See project names, Lease period, Crowdloans, incentive token and price
6. Contribute to Crowdloans, add Contribution
7. Choose Amount to contribute
8. See all bids or only Bifrost supported
9. See my Contribution
10. See vsToken and vsBond
11. See vsToken Market Price and Bancor Price
12. Redeem/Lighting Redeem/Swap vsToken
13. See Weight Fee
14. Go to vsBond market, Sell vsBond
15. See my Contribution history
16. See Contribution of failed Bids
17. Execute redemption

## Security

investors contribute for parachains though Bifrost SALP by XCMP, so the security of user funds is guaranteed by XCMP. Parachain projects reward contributors in their own logical. For example: Alice can call Bifrost SALP module to contribute her DOT to parachain-A, Bifrost will release vsToken and vsBond to Alice. Parachain-A can easily find out Alice has vsBond on Bifrost though XCMP and reward her. If it is liner reward, the unreleased part is always locked and no one can embezzle it. It is as safe as being locked in the parachain itself.

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 3
* **Total Costs:** 9,000.00 DAI

##### Milestone 1 - Prepare SALP Development

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 3,000.00 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Parachain Register | Combined with the XCMP protocol, define the parachain data structure. Projects register crowdload on bifrost for the parachain auction. |  
| 2. | Contributor Deposit | Contributors transfer their assets of the relay chain to bifrost through cross-chain, Bifrost deposits users' assets DOT/KSM into the SALP module account of the selected project party, and SALP issues vsDOT/vsKSM as the deposit voucher for users. |
| 3. | UI/Functionality | UI design + UI layer writing. |

##### Milestone 2 - Execute SALP Development

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 3,000.00 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Bounding DOTs | Bifrost initiates a cross-chain contribution through a parachain account, raises funds for the project, and participates in the parachain auction. |
| 2. | Redeeming DOTs/KSMs | Parachain retires or fails on auction, bifrost redeem assets for users through cross-chain. |
| 3. | UI/Functionality | Data access, data layer coding and writing. |

##### Milestone 3 - Asset Development

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 3,000.00 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Token-vsToken Asset | We will complete basic functions of token/vsToken asset issuance, destruction, transfer, freezing, etc., and token-vsToken conversion based on real-time exchange rates. |  
| 2. | Exchange Pool and Bancor Pool | We will establish Exchange Pool and Bancor Pool in order to achieve the functions of vsTokens and vsBonds can be fully executed. | 
| 3. | vsBond Market | vsBond market will be able to buy or sell vsBonds as a pending order trading platform. |
| 4. | UI/Functionality | Data access, BUG Test, optimization and go live. |


### Technical Stack

- Programming language: Rust
- Framework: Substrate + FRAME
- Project template: Substrate Node Template
- Source control: Github or Gitlab
- CI/CD: Docker container based, with Runners or Actions
- Front-end: React + Polkadot.js

## Additional Information

The code related to the roadmap will be open source in the form of runtime and packaged into docker containers for acceptance. At the same time, this runtime will provide DOT and KSM liquidity for Polkadot and Kusama parachain slot auctions. Bifrost Finance will serve as the first parachain for this feature application. Regarding grant, we are happy to accept DOT.

##### What work has been done so far?

Bifrost has released the third version of the testnet. The mint, redeem and swap of staking derivatives have been completed in the testnet. Currently, the Bifrost testnet supports three types of derivatives: vKSM, vDOT, and vEOS. Holding staking derivatives (vToken) can indirectly participate in staking to obtain benefits, and staking derivatives can also trade at any time and transfer staking rights to avoid the loss of opportunity cost due to staking lockup. After research, Polkadot or Kusama auction parachain card slots have decentralized execution, predictable returns, and absolute principal security, which are similar to staking assets. So it can also solve the problems of equity transfer and lock-up opportunity cost for its casting derivatives.

Otherwise, Bifrost considered that Polkadot will bridge-up Ethereum in the future, so we deployed the ETH 2.0 staking derivative vETH, which provides a liquidity solution for users of Ethereum 2.0 who pledge deposit contracts. Our contract received 10,000 ETH of vETH mint on first day online, equivalent to $6 million, the campaign was a great success and far exceeded our expectations. In technical aspect, we removed the Sudo administrator authority before the formal deposit of ETH 2.0, to ensure that the deposit operation of ETH is confirmed by multiple parties and eliminate the unilateral risk of misbehavior by Bifrost team. At present, Bifrost vETH mint contract owner authority has transferred to the multisig contract, and the five parties InfStones, Ankr, DFG, LongHash Ventures and Bifrost jointly did multisig to manage private key for ETH 2.0 deposit operations. All multisig records will be saved on-chain and published in Bifrost Wiki.

##### Have you applied for other grants so far?

We have already delivered and achieved all milestones of our first EOS Bridge Grant.
