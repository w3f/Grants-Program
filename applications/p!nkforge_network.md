* # General Grant Proposal

  * **Project:** P!nkForge Network
  
  ## Project Overview :page_facing_up: 
  P!nkForge Network is trying to build a liquidity bootstrapping protocol which is comprised of diverse fundraising mechanism and liquidity providing for the parachain/parathread. 
  
  The protocol will be built as a parachain in Kusama and Polkadot to help foster the ecosystem start-up projects in fundraising and instant token swap.
  
  ### Overview
  
  #### Problem statement
  Here are three common problems, two of them referred to current fundraising model, another one is about parathread economics in Kusama/Polkadot:
  1. A crack between fundraising and token exchange.
     
      Projects that did an ICO or private sale for fundraising usually are hard to find a place for the token swap. For now, the solution would be going to a centralized exchange with an expensive IEO fee or uniswap with large-amount deposit for the kick-off liquidity, both are costly. 
  
  2. Manual migration from ERC20 token to mainnet token.
  
      Considering that lots of projects did the fundraising at an idea/whitepaper stage, the team would issue an ERC20 token as a voucher. After couple of years you may migrate the ERC20 tokens to the mainnet if the project goes well.
       Some even set a limited window period for the migration, if you missed it, your tokens turn useless.
      
  3. Instant token swap of parachain currencies.
      Parathread is a significant component of the Kusama/Polkadot ecosystem. A fact we know about the parathread economics is that the collators may be paid in local parathread currency while the Relay Chain transacts with KSM/DOT only.
      And now no built-in price finding mechanism and instant token swap market exist in Polkadot ecosystem.
      
  #### How to solve
  To solve the previous problems, this project need to realize these three features:
  1. General and flexible fundraising models
  2. An instant token swap market like Uniswap
  3. A seamless and low-cost liquidity providing mechanism
  
  
  > Uniswap, as we know, is a peer-to-peer decentralized cryptocurrency exchange that allows users to trade ERC20 tokens, and it works well despite its simplicity.
  
  What we want to do is a one-stop bootstrap protocol. First it provides diverse fundraising models for the project, and then motivates the community to contribute a `locked` initial liquidity (so the team is able to spend more fund in building the project safely), last creates a uniswap-like market for instant token swap.
      
  ### Project Details 
  To achieve the goals above, this project needs two major subsystems:
  
  - An instant token swap market, we call it `P!nkSwap`
  - A fundraising platform, we call it `P!nkCombinator`
  
  #### 1. Fundraising Platform
  To fulfill different teams' needs, we will support mutiple fundraising mechnism at first place such as the dutch auction, sealed-bid auction, candle auction, etc.
  And also, the teams are allowed to initialize the liquidity pools with customed rules, encouraging the community to lock their KSM/DOT and projects' local tokens for a period of time in the pools.
  
  For instance, this encouragement can be combined with a lockdrop event. In the traditional lockdrop, the users lock their KSM/DOT to get free tokens. While in `P!nkCombinator`, if the user continue to lock their tokens, this would be taken as an `add_liquidity` action. As a result, the users will not only get the free tokens but also 'locked' LP tokens which enables them to share the exchange fee during the locking period.
  
  
  #### 2. Instant token swap market
  After the liquidity pool has been set up, users are able to swap tokens. That means collators can swap their transaction fees and block rewards instantly to KSM/DOT to ensure that this block-wrap service is profitble.
  
  Users can also do the parachain slot crowdfunding for the project they support through `P!nkSwap`. Below is the details of this process:
  
  - Current slot auction crowdfunding
  
     End users specify the locking duration and transfer their KSMs/DOTs to a submodule account mapping to a specific parachain. They will be incentivized by the parachain they support, respectively.
  ![traditional](https://ftp.bmp.ovh/imgs/2020/09/8918b31bb3f6411b.jpg)
  
  - Slot auction crowdfunding with this platform
  
     End users will add_locked_liquidity(ksm_amount, parachain_tokens_amount, parachain_index, start_slot, end_slot) in this platform, within this add_locked_liquidity function it will atomically evoke the crowdfunding.contribute function to auctually crowdfund for the parachain safely.
  
     And in this fundraising platform, the end-users who call the add_locked_liquidity function will lock their KSMs/DOTs in the liquidity pool to continuously share the token-swap fees proportionally.
  
     In the future, we will come up with more economic incentives for the crowdfunding through on-chain governance.
  ![new](https://ftp.bmp.ovh/imgs/2020/09/c73ff01e205245ce.jpg)
  
  
  
  ### Ecosystem Fit 
  Not yet.
  
  ## Team :busts_in_silhouette:
  - Experienced in developing the Polkadot-related applications/protocols, the core team of P!nkForge comes from the project of Polkadot explorer - Polka.io, displayed in the forum of web3 foundation: https://forum.web3.foundation/t/teams-building-on-polkadot/67.
  
  
  ### Team members
  * Mason Lu, Founder of Polka.io
  * Tower Wang, Substrater: https://github.com/towerWang
      Have 2-year smart contract developement and 1-year substrate dev experience. 
  * Snoopy Su, front-end dev: https://github.com/snoopy1412
      The core front-end developer of https://evolution.land with 5-year+ front-end experience.
  
  ### Team Website	
  coming soon
  
  ### Legal Structure 
  
  Individuals.
  
  ### Team Code Repos
  * https://github.com/towerWang/pinkswap
  
  
  ## Development Roadmap :nut_and_bolt: 
  
  ### Overview
  * **Total Estimated Duration:** 10 weeks
  * **Full-time equivalent (FTE):**  Workload of an employed person ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
  * **Total Costs:** 2.8 BTC
  ### Milestone 1 - Run a PoC Testnet $20k 
  * **Estimated Duration:**  4 weeks
  * **FTE:**  2 FTE
  * **Costs:** 1 BTC
  
  In this stage, we will deliver a basic functional web app and a maintainable testnet.
  
  #### Deliverables
  | Number | Deliverable                 | Specification                                                |
  | ------ | --------------------------- | ------------------------------------------------------------ |
  | 0a.    | License                     | Apache 2.0 / MIT / Unlicense                                 |
  | 0b.    | Documentation               | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
  | 0c.    | Testing Guide               | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
  | 1      | Substrate module: UniswapV2 | [spec doc](https://hackmd.io/6Gp8yViGRH27ofHnloln_A?view=)   |
  | 2      | Web app                     | connected to the chrome wallet: polkadotjs and its functions includes creating tokens(testnet), token lists, token swaps, add liquidity, remove liquidity, etc. |
  | 3      | Testnet                     | Run a Testnet which could be monitored in telemetry          |
  | 4      | Article                     | An intro article on medium about the project                 |
  
  
  ### Milestone 2 - Make as a parachain/parathread
  * **Estimated Duration:** 4 weeks
  * **FTE:**  2 FTE
  * **Costs:** 1 BTC
  
  In the M2 stage, we will focus on becoming a parachain/parathread, bridging in KSM/DOT or stable coins in Polkadot/Kusama so the project teams and end users can have some meaningful explores.
  
  #### Deliverables
  | Number | Deliverable                  | Specification                                                |
  | ------ | ---------------------------- | ------------------------------------------------------------ |
  | 0a.    | License                      | Apache 2.0 / MIT / Unlicense                                 |
  | 0b.    | Documentation                | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
  | 0c.    | Testing Guide                | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
  | 1      | Substrate module: PDOT/PKSM  | A module which could bridge in KSM/DOT as collaterals to issue equivalent assets: PKSM/PDOT |
  | 2      | Substrate module: Auction    | A custom and modular auction module pallet which will at least include dutch auction and candle auction |
  | 3      | Web app                      | home page with additional app functions: issuing PDOT/PKSM   |
  | 4      | Parachain/parathread Testnet | A rococo parachain/parathread                                |
  | 5      | Community                    | New tele/discord groups, new twitter/medium/wechat account   |
  | 6      | Video                        | A demonstration video about how to use the P!nkswap          |
  
  ### Milestone 3 - Integrate the auction and swap subsystems
  * **Estimated Duration:** 3 weeks
  * **FTE:**  1.5 FTE
  * **Costs:** 0.8 BTC
  -  Introduce multi-token transaction payment
      basic functionalities
      - enable the transaction fees could be paid with multiple tokens
      - add governance to maintain a transaction fee token list
      - first iteration on the bonding curve
  
       **Deliverables**
       - Code update
       - A workable video
       - A new interface for users to operate
  
  #### Deliverables
  
  | Number | Deliverable                        | Specification                                                |
  | ------ | ---------------------------------- | ------------------------------------------------------------ |
  | 0a.    | License                            | Apache 2.0 / MIT / Unlicense                                 |
  | 0b.    | Documentation                      | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
  | 0c.    | Testing Guide                      | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
  | 1      | Substrate module: DAICO            | An integration pallet which could glue and smooth the auction and swap parts to make it complete |
  | 2      | Substrate module: multi-tx-payment | A Substrate module that will enable to pay the transaction fee with multiple tokens |
  | 3      | Substrate chain                    | Modules uniswap, general-auction & multi-tx-payment of our custom chain will work together to form a platform for fundraising and smooth token swap |
  | 4      | Web app                            | additional functions: auction page includes creating tokens, custom auction mode, how to tranform into the swap stage |
  
  
  
  ### Community engagement
  
  Definitely, P!nkForge project is and will be a community based porject, team member will be the one in community. We will get community involved by creating our P!nk Forum, discord group, telegram group, Medium account.
  
  And their will be several ways to incentivize community to engage into P!nk test token Forging and token swapping.
  
  On each milestone completion, P!nk will publish artcile to give a write-up.
  
  
  ## Future Plans
  
  The long term plan for P!nkForge is to be the most robust and simple way on Forging tokens and Swapping tokens as what has done by UNI on Ethereum, but further beyond it a little. 
  
  P!nk team believe that further beyond a little and one step by step is the way to create community-wise useful product to both contribute the Polkadot and the community.
  
  ## Additional Information :heavy_plus_sign: 
  
  * What work has been done so far?
  
    The substrate based code has been under development.
    
    Community account has been prepared but not released.
    
    Project website has been registered and will be pubilshed soon.
  
  * Are there are any teams who have already contributed (financially) to the project?
  
    So far there is a team in Polkadot escosystem would like to financially contribute to P!nkForge, but we are still on hold for this contribution.
  
  * Have you applied for other grants so far?
  
    So far no. But 1 year before, we would have been applied for Polka.io explorer grant.
