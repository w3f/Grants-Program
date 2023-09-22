#  Polkadot js plus / Social Recovery Wallet

- **Team Name:** Polkadot js plus
- **Payment Address:** 0xa4Eff15578D1450912DED08c85679F453C45A710 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3


## Project Overview :page_facing_up:

 This is a proposal for the RFP titled [Social Recovery Wallet](https://github.com/w3f/Grants-Program/blob/master/rfps/open/social-recovery-wallet.md), and in other words a follow-up grant for providing Social Recovey in "[Plus:Polkadot js Plus Extension](https://github.com/w3f/Grants-Program/pull/778)"


# ![polkadot{.js} plus extension intro](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/intro.png)

### Overview

Polkadot js plus is Polkadot js extension, plus new features. It is a user-friendly wallet to interact with the Polkadot/Substrate based blockchains through a browser. It allows users to access their account(s), which can also be used to interact with decentralized apps.

We don't want to rebuild the wheel, we just want to perfect it, standing on the shoulders of giants like "polkadot js extension" and make it user-friendlier for users. The reason why we have decided to work on this project is every day user comments on social medias that complain "why the extension does not show the balance?", "It is too complicated for new/average users to work with", "It is too abstract", " why should we go to another web site to work with the extension?", " how could contribute to the crowdloans via extension?", and so on. Hence we started to work on the Plus extension to address such concerns/requests of the Polkadot community. Plus is based on Polkadot js extension, and get constantly updating with it. Both extensions can be run simultaneously, but with Plus you do not need to install the original extension, because Plus does whatever the original extension does even more.



At the currant state our extension has the following features available:
* Viewing balances (crypto/USD)
* Connecting to different endpoints
* Transfering funds
* Viewing transaction history
* Viewing an address as QR code
* Staking (Solo and Pool)
* Crowdloans 
* Governance 

Based on the [Social Recovery Wallet](https://github.com/w3f/Grants-Program/blob/master/rfps/open/social-recovery-wallet.md) RFP, proposed by David Hawig from W3F, we have decided to provide this feature in the Polkadot js Plus extension.

### Project Details

With the new functionality the token holders will be able to make their accounts Recoverable. Almost all required information will be saved on-chain, utilizing Substrate/Recovery-Pallet.

# ![polkadot{.js} plus extension make recoverable](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/socialRecovery/makeRecoverable.png)


and when you open the accounts page, a green shield icon indicates which account is already recoverable.
# ![polkadot{.js} plus extension recoverable icon](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/socialRecovery/accountPage.png)

      
Ther following features will be available as Social recovery wallet:
* making an account recoverable
* let users find their lost account Id using their on-chain identity (name, twitter, riot id, etc)
* removing recovery from an account
* initiating recovery for a lost account by a rescuer
* showing an alert for a lost account, for which the recovery is initiated
* let a lost account to close recovery and punish a malicious rescuer by gathering its deposit
* let on-chain friends to vouche for their friend's lost account
* let a rescuer account to claim recovery and set itself as a proxy of the lost account

After an account holder determined their friends and set recovery delay and threshold, can make the account recoverable by confirming it using the account password:

# ![polkadot{.js} plus extension confirm making recoverable](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/socialRecovery/confirmMakeRecoverable.png)


Similarly the user can remove recovery for a recoverable account using remove recovery tab:
# ![polkadot{.js} plus extension remove recovery](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/socialRecovery/removeRecovery.png)

To rescue a lost account, we have two identities, a rescuer and the lost account's friends, who can help to rescue the lost account:
# ![polkadot{.js} plus extension rescue tab](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/socialRecovery/recoverTab.png)

A rescuer should start by intiating the recovery process, but usually when you lost your account you hardly remember the acount Id, hence, it should be possible to find the lost account using it's on-chain identity:

# ![polkadot{.js} plus extension iniTiate recovery](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/socialRecovery/initiateRecovery.png)

When a malicious rescuer initiates the recovery for a lost account, we need to set an alert for the lost account, as can be seen below as a beating red shield . 

# ![polkadot{.js} plus extension red alert](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/socialRecovery/accoutPageWithRedAlert.png)

Therfore, the lost account can close the recovery to protect their account. 

# ![polkadot{.js} plus extension close recovery](https://raw.githubusercontent.com/Nick-1979/PolkadotJsPlusPictures/main/socialRecovery/closeRecovery.png)



There would be also modules for friends to send their vouches, enabling claim recovery by a rescuer, modules for canceling recovery, taking over the lost account (as recovered), and etc. Finally, in a successful recovery attempt, the rescuer account will act as a proxy of the lost account.

### Ecosystem Fit

Plus extension will be a user-friendly wallet to interact with the Polkadot/Substrate based blockchains through a browser. It allows users to access their Polkadot account(s), which can also be used to interact with decentralized apps. It is based on the original polkadot js extension, which injects a @polkadot/api signer into a page, along with any associated accounts. The social recovery feature is definitely a blockchain requirement and can stop the nightmare for many normal (non-technical) end users. 

#### The difference with polkadot.js extension
Polkadot.js extension is an official account management tool, but Plus extension will be not only an account management tool but also implements a series of common functions in Polkadot ecology, such as fund transfer, transaction histrory (including, send, recieve, bond, nominate, bond_extra, redeem, etc), easy staking, easy-to-operate on-chain governance modules, contribute to crowdloans, etc. This means that polkadot js plus can not only do what original extension does, but also independently complete the above mentioned functions, providing users with a one-stop experience, which polkadot.js extension does not have.

From the perspective of UI experience, polkadot js plus tries to not just be more user-userfriendlier but also consistent with the previous taste of the users, who are already familiar with the original polkadot js extension. We try to make the UI more attractive to users, and also support all the languages that are currently existd on the original extension.

#### Product direction and advantages
Analogous to MetaMask, browser extension wallets are convenient to interact with DApps. Plus is positioned as a browser extension wallet and has a first-mover advantage in the product direction. It focuses on the Polkadot ecosystem and enables more users to participate in the Polkadot ecosystem through customized and truly friendly interactive experience.


## Team :busts_in_silhouette:

### Team members

- [Kami Ekbatanifard](https://www.linkedin.com/in/ekbatanifard)
- [Morteza Chalaki](https://www.linkedin.com/in/mchalaki)
- [Mehran Pourvahab](https://www.linkedin.com/in/mehran-pourvahab)
- [Martin Azarbad](https://www.linkedin.com/in/mehranazarbad)
- [Amir Ekbatani](https://www.linkedin.com/in/amir-ekbatani-4b7399201)

### Contact

- **Contact Name:** Kami Ekbatanifard
- **Contact Email:** ekbatanifard@gmail.com
- **Website:** [www.polkadotjs.plus](http://polkadotjs.plus/)

### Legal Structure

Plus extension is maintained by Polkadot js Plus team, the following is our communication information.

- **Mailing Address:** I will pleased to offer such information in private.
- **E-mail:** ekbatanifard@gmail.com
- **Twitter:** [Polkadot js plus](https://twitter.com/PolkadotJsPlus), [ekbatanifard](https://twitter.com/ekbatanifard)
 
### Team's experience

We are a team of polkadot ecosystem enthusiasts that trying to make the polkadot most common needs much more accessible for end users. Kami has a Phd in software systems and works as a blockchain engineer and full stack developer, he has experince in developing applications mostly in private sources including centralized/decentralized crypto exchanges, NFT market on Ethereum utilizing filecoin, etc. He also has a research track which could be find listed [here](https://scholar.google.com/citations?user=pJ0HwqEAAAAJ&hl=en). Morteza, has a great resume in finantial systems and helps us as the CFO. Mehran is a blockchain reseacher, and helps us in more deep research in Polkadot ecosystem. Martin is a senior UX designer, and newly joined our team to help us improve the user experince of the extension. Amir is a test engineer, who helps to write different kinds of tests to ensure the smooth functioning of the extension.


#### Personal Code Repo:

- https://github.com/Nick-1979

### Team LinkedIn Profile

- https://www.linkedin.com/in/ekbatanifard
- https://www.linkedin.com/in/mchalaki
- https://www.linkedin.com/in/mehran-pourvahab
- https://www.linkedin.com/in/mehranazarbad
- https://www.linkedin.com/in/amir-ekbatani-4b7399201

## Development Status :open_book:

The current status of the implementation of Plus extension can be found [here](https://github.com/Nick-1979/polkadot-Js-Plus-extension/tree/socialRecovery2).

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 3 FTE
- **Total Costs: 45,900 USD

### Milestone 1 — Social Recovery

- **Estimated duration:** 3 month
- **FTE:**  3
- **Costs:** 45,900 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use each of the implemented functionalities. |
| 0c. | Testing Guide	| We will conduct unit test on all modules to ensure they can function properly. In this guide, we will describe how to run these tests.|
| 0d. | Article	| We will write an article or tutorial that explains the work principle as part of the grant.|
| 1. | Make recoverable | Making an account recoverable, help find friends using on-chain identity, and showing related alerts |  
| 2. | Rescue account | Enaling a rescuer account to recover a lost account during a sequence of actions with the hlep of social friends |  
| 3. | Friends vouches | Providing facilities for friends to easily vouch for a lost account |
| 4. | Takeover lost account | Providing facilities for the rescuer to be able to use the lost account as a proxy |


## Future Plans

We have some plans to extend Plus features on parachains, as an example one plan is adding light client as an endpoint to Plus extension, supporting XCMP, and Governance 2 will be other plans for feature.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  In the initial stage of Plus, we presented it to the core developers of the original polkadot js extension on Github, there they suggested to apply for W3F grants.
