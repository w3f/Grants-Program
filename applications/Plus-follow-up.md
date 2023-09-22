#  Polkadot js plus / Nomination pools

- **Team Name:** Polkadot js plus
- **Payment Address:** 0xa4Eff15578D1450912DED08c85679F453C45A710 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

This is an application for a follow-up grant for providing POOL STAKING in "[Plus:Polkadot js Plus Extension](https://github.com/w3f/Grants-Program/pull/778)".


# ![polkadot{.js} plus extension intro](https://github.com/Nick-1979/polkadot-Js-Plus-extension/blob/master/packages/extension-plus/docs/intro.png)

### Overview

Polkadot js plus extension, or for short Plus, is actually the original Polkadot js extension, plus some new features. It is a user-friendly wallet to interact with the Polkadot/Substrate based blockchains/parachains through a browser. It allows users to access their account(s), which can also be used to interact with decentralized apps.

We don't want to rebuild the wheel, we just want to perfect it, standing on the shoulders of giants like "polkadot js extension" and make it user-friendlier for users. The reason why we have decided to work on this project is every day user comments on social medias that complain "why the extension does not show the balance?", "It is too complicated for new/average users to work with", "It is too abstract", " why should we go to another web site to work with the extension?", " how could contribute to the crowdloans via extension?", and so on. Hence we started to work on the Plus extension to address such concerns/requests of the Polkadot community. Plus is based on Polkadot js extension, and get constantly updating with it. Both extensions can be run simultaneously, but with Plus you do not need to install the original extension, because Plus does whatever the original extension does even more.



At the currant state our extension has the following features available:
* Viewing balances (crypto/USD)
* Transfering funds
* Transaction history
* Viewing an address as QR code
* (Solo) staking
* Crowdloans 
* Governance 

Recently, Parity Technologies staking team released a new pallet, named **"Nominations pools"**, which will make **pool staking** available on Kusama, and Polkadot. Now, it is available on Westend, will be available on relay chains soon. Therefore, we have decided to be among the first to provide this new coming functionality for Dotsama community on Polkadot js plus extension.

### Project Details

With the new functionality the stakers on Kusama/Polkadot will have two options to stake their tokens, hence when click on easy staking in Polkadot js plus extension, solo or pool staking can be chosen.

# ![polkadot{.js} plus extension accounts](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/accounts.png)

# ![polkadot{.js} plus extension staking index](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/stakingIndex.png)

With Pool staking, stakers (delegators) with a small amount of tokens (e.g., 1 DOT) can pool their funds together and act as a single nominator. The earnings of the pool are split pro rata to a delegator's stake in the bonded pool.
        
Ther following features will be available in pool staking:
* auto vs manual staking (pool creation, join, nomination,etc.)
* unstaking (unbonding, claim payout, redeem)
* view own pool information (including pool name, Id, state, members Info, roles, and their accounts, reward/stash Id, and pool destroying)
* view nominations (including selected validators information, its nominators, actives, oversubscribeds, and ability to re-nominate)
* viewing pool staking general information (e.g., minimum to join/create, max pools, etc.)

Where a delegator can easily contribute in pool staking automatically, and confirm it by entering the account password:

# ![polkadot{.js} plus extension pool stake](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/poolStake.png)

# ![polkadot{.js} plus extension pool stake confirm](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/confirmPoolStake.png)

Similarly unstaking can be done, where unlocking bonds will be redeemable after a while depending on the chain:
# ![polkadot{.js} plus extension pool unstake confirm](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/confirmPoolUnstake.png)

Pools information along with its roles and accounts can be presented in pooltab:
# ![polkadot{.js} plus extension pool staking pool tab](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/poolStakingPoolTab.png)

The account(s) with root and nominator role can nominated validators for the deligated stashId, the nominated validators can be depicted in the nominations tab:
# ![polkadot{.js} plus extension pool staking nominations tab](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/poolStakingNominationsTab.png)

The general information that every staker/deligators needs to know can be summarized in info tab:
# ![polkadot{.js} plus extension pool staking info tab](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/poolStakingInfoTab.png)


There would be also modules for manual pool selection/creation, manual validator selection, pool details information including pool's members' information, etc.

### Ecosystem Fit

Plus extension will be a user-friendly wallet to interact with the Polkadot/Substrate based blockchains through a browser. It allows users to access their Polkadot account(s), which can also be used to interact with decentralized apps. It is based on the original polkadot js extension, which injects a @polkadot/api signer into a page, along with any associated accounts.

#### The difference with polkadot.js extension
Polkadot.js extension is an official account management tool, but Plus extension will be not only an account management tool but also implements a series of common functions in Polkadot ecology, such as fund transfer, transaction histrory (including, send, recieve, bond, nominate, bond_extra, redeem, etc), easy staking, easy-to-operate on-chain governance modules, contribute to crowdloans, etc. This means that polkadot js plus can not only do what original extension does, but also independently complete the above mentioned functions, providing users with a one-stop experience, which polkadot.js extension does not have.

From the perspective of UI experience, polkadot js plus tries to not just be more user-userfriendlier but also consistent with the previous taste of the users, who are already familiar with the original polkadot js extension. We try to make the UI more attractive to users, and also support all the languages that are currently existd on the original extension.

#### Product direction and advantages
Analogous to MetaMask, browser extension wallets are convenient to interact with DApps. Plus is positioned as a browser extension wallet and has a first-mover advantage in the product direction. It focuses on the Polkadot ecosystem and enables more users to participate in the Polkadot ecosystem through customized and truly friendly interactive experience.


## Team :busts_in_silhouette:

### Team members

- Kami Ekbatanifard

### Contact

- **Contact Name:** Kami Ekbatanifard
- **Contact Email:** ekbatanifard@gmail.com
- **Website:** Plus extension is currently maintained on [Github](https://github.com/Nick-1979/polkadot-Js-Plus-extension), no website has been created yet

### Legal Structure

Plus extension is maintained by Kami Ekbatanifard, and no company entity has been created yet, the following is our communication information.

- **Mailing Address:** I will pleased to offer such information in private.
- **E-mail:** ekbatanifard@gmail.com
- **Twitter:** [Polkadot js plus](https://twitter.com/PolkadotJsPlus), [ekbatanifard](https://twitter.com/ekbatanifard)
 
### Team's experience

Kami has a Phd in software systems and works as a blockchain engineer, he has experince in developing applications mostly in private sources including centralized/decentralized crypto exchanges, NFT market on Ethereum utilizing filecoin, etc. He also has a research track which could be find listed [here](https://scholar.google.com/citations?user=pJ0HwqEAAAAJ&hl=en). 


#### Personal Code Repo:

- https://github.com/Nick-1979

### Team LinkedIn Profile

- https://www.linkedin.com/in/ekbatanifard


## Development Status :open_book:

The current status of the implementation of Plus extension can be found [here](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/stakingPools).

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs: 15,300 USD

### Milestone 1 — Pool Staking

- **Estimated duration:** 3 month
- **FTE:**  1
- **Costs:** 15,300 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use each of the implemented functionalities. |
| 0c. | Testing Guide	| We will conduct unit test on all modules to ensure they can function properly. In this guide, we will describe how to run these tests.|
| 0d. | Article	| We will write an article or tutorial that explains the work principle as part of the grant.|
| 1. | Stake | Auto and manual pool staking will be available |  
| 2. | Unstake | Where members can unstake(unbound) thier funds (and redeem unbounded, and withdraw claimable as well) |  
| 3. | Pool | Join/Created pools information will be depicted, and it may be destroyed too|  
| 4. | Nominations | Where pools nominated validators are shown and pool's privileged users (roles) can nominate validators automaticaly or manually |  


## Future Plans

We have some plans to extend Plus features on parachains, as an example one plan is adding token swapping of Acala to Plus extension, supporting NFT on parachains like Efinity will be another plan for feature.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  In the initial stage of Plus, we presented it to the core developers of the original polkadot js extension on Github, there they suggested to apply for W3F grants.
