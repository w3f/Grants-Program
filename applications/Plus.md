# W3F Grant Proposal

- **Project Name:** Plus: Polkadot js plus extension
- **Team Name:** Kami Ekbatanifard
- **Payment Address:** 0xa4Eff15578D1450912DED08c85679F453C45A710 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Plus extension will be a user-friendly wallet to interact with the Polkadot/Substrate based blockchains through a browser. It allows users to access their Polkadot account(s), which can also be used to interact with decentralized apps. It is actually polkadot js extention, plus some new features.
We don't want to rebuild the wheel, we just want to perfect it, standing on the shoulders of giants like "polkadot js extension" and make it user-friendlier for users.

The reason why we have decided to work on this project is every day user comments on social medias that complain "why the extension does not show the balance?", "It is too complicated for new/average users to work with", "It is too abstract", " why should we go to another web site to work with the extension", " how could contribute to the crowdloans via extension", and so on. That's why we've decided to work on Plus extension to address such concenrs/requests of the polkadot community.

### Project Details

The new functionalities, that will be added to the original polkadot js extension are:
- View balances
- Transfer funds
- Easy staking (auto stake/unstake/redeem funds and edit nominated validator list)
- Contribute in crowdloans
- View transaction history
- View an address as a QR code
- Governance (Referendums/Proposals voting, Treasury Tips, councils/motions )

The UI of the already implemented/woking functionalities are as follows:

#### Account page, which shows all accounts balances, and icon buttons to access some features:

![account page screen shot](https://github.com/Nick-1979/polkadot-Js-Plus-extension/raw/master/packages/extension-plus/docs/screenshots/accountsPage00.PNG)


#### Transfer funds pages, to enter/choose the recipient address, determine the transfer amount, and finally confirm transfer along with relevant alerts and tooltips:

![transfer add recepient page screen shot](https://bafkreig42fspwcrzzyk5f6gpvavicrqtkzn5oezbtxrgknnrzx6rgg2jva.ipfs.dweb.link)

![transfer add amount page screen shot](https://bafkreiak3kk3zmvc7xyesla5xxggekxszzwuks3ibq7j5wnqunazz6mv24.ipfs.dweb.link)

![transfer confirmation page screen shot](https://bafkreigjwuj2prhl2fggos3m2wwkiou5kwbsorlm6px6yt6j7jevos7cqe.ipfs.dweb.link)
 
 
 #### Staking pages, to stake, unskae, redeem, and even change your already nominated validators:
 
![staking page screen shot](https://bafkreihq2nszhn2qmb42wzq4r5pyiotxiyss7cjntdrcefgifjt7tifpfe.ipfs.dweb.link)

![staking confirmmation page screen shot](https://bafkreifv5linxp3p2zwxj4qkxhbjnk6qerxbyc6n2nk27jpmxhz3wytlyy.ipfs.dweb.link)


#### View transaction history:

 - The list of Transactions

![Transactions list page screen shot](https://bafkreieunhr4jwzlcq3p4xauga4pneaamglxurb6niavwouw6ifa5npfje.ipfs.dweb.link)
 
 - Details of a transaction

![transaction detail page screen shot](https://bafkreihs3netktz5wdyxr5lfytkq6om33xhzvk25zojwtuyhiqtg744rdi.ipfs.dweb.link)


#### The UI of under developement features:

##### Viewing the auction and its crowdloans on different relay chains (polkadot, kusama, and westend testnet) to contribute on:

![auction crowdloans search page screen shot](https://github.com/Nick-1979/polkadot-Js-Plus-extension/raw/master/packages/extension-plus/docs/screenshots/contributeInCrowdloans00.PNG)

![auction crowdloans page screen shot](https://github.com/Nick-1979/polkadot-Js-Plus-extension/raw/master/packages/extension-plus/docs/screenshots/crowdloans00.PNG)

![auction crowdloans confirmmation page screen shot](https://bafkreieo2ckh4zfztjxwhksimqwq3owhudmdfppd27hif4df22d4a4w7f4.ipfs.dweb.link)

##### Governance, including Democracy, Council and Treasury:

![Governance page screen shot](https://bafkreic6qtchnk6kh3atm5fmdofznj3lllcvzqkz3cykkok4xsoms337o4.ipfs.dweb.link)



### Ecosystem Fit

Plus extension will be a user-friendly wallet to interact with the Polkadot/Substrate based blockchains through a browser. It allows users to access their Polkadot account(s), which can also be used to interact with decentralized apps. It is based on the original polkadot js extension, which injects a @polkadot/api signer into a page, along with any associated accounts.


#### Competitive product analysis

Polkadot's browser extension wallet, the currently known competitors are Enzyme, Speckle OS, and Doter.

Enzyme and Speckle OS have very limited features and not been maintained for a long time over a year. Dotter also has very limitted capabilities, so that the functional modules achieved by Plus extension's first milestone have exceeded Doter (Recently, we have completed the first milestone), and more functional modules that will serve the Polkadot ecology will be implemented in the plan.

#### The difference with polkadot.js extension

Polkadot.js extension is an official account management tool, but Plus extension will be not only an account management tool but also implements a series of common functions in Polkadot ecology, such as fund transfer, transaction histrory (including, send, recieve, bond, nominate, bond_extra, redeem, etc), easy staking, easy-to-operate on-chain governance modules, contribute to crowdloans, etc. This means that polkadot js plus can not only do what original extension does, but also independently complete the above mentioned functions, providing users with a one-stop experience, which polkadot.js extension does not have.

From the perspective of UI experience, polkadot js plus tries to not just be more user-userfriendlier but also consistent with the previous taste of the users, who are already familiar with the original polkadot js extension. We try to make the UI more attractive to users, and also support all the languages that are currently existd on the original extension.

#### Product direction and advantages

Analogous to MetaMask, browser extension wallets are convenient to interact with DApps. Plus is positioned as a browser extension wallet and has a first-mover advantage in the product direction. It focuses on the Polkadot ecosystem and enables more users to participate in the Polkadot ecosystem through customized and truly friendly interactive experience.

#### How to maintain the wallet

In the near future, we will have someone in charge of maintaining the Plus extension, not only update it with the original polkadot js extension but also
fix bugs, and even improve the experience，to making Plus as close as possible to a mature browser extension in other ecosystems like MetaMask.

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
- **Twitter:** [ekbatanifard](https://twitter.com/ekbatanifard)
 
### Team's experience

Kami has a Phd in software systems and works as a blockchain engineer, he has experince in developing applications mostly in private sources including centralized/decentralized crypto exchanges, NFT market on Ethereum utilizing filecoin, etc. He also has a research track which could be find listed [here](https://scholar.google.com/citations?user=pJ0HwqEAAAAJ&hl=en). 


#### Personal Code Repo:

- https://github.com/Nick-1979

### Team LinkedIn Profile

- https://www.linkedin.com/in/ekbatanifard

## Development Status :open_book:

The current status of the implementation of Plus extension can be found [here](https://github.com/Nick-1979/polkadot-Js-Plus-extension).

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs: 10,000 USD

### Milestone 1 — Implement part 1 of functionalities

- **Estimated duration:** 2 month
- **FTE:**  1
- **Costs:** 7,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use each of the implemented functionalities. |
| 0c. | Testing Guide	| We will conduct unit test on all modules to ensure they can function properly. In this guide, we will describe how to run these tests.|
| 1. | Show balance and address as QRcode | We create view balance, to view your available and total balances in cryto and USD, also show your address as a QRcode |  
| 2. | Fund transfer | We create Transfer fund to transfer funds from one account to another |  
| 3. | Tranaction history | We create history where all transactions history can be viewd in different categories |  
| 4. | Easy staking | We create easy staking to stake, unstake, redeem funds, and nominate validators |  
| 5. | Crowdloan contribution | we create crowdloan contribution to view auctions, bids, and active/winner crowdloans on Polkadot and kusama, where contribution can be done easily |  


### Milestone 2 — part 2 of functionalities

- **Estimated Duration:** 1 month
- **FTE:**  1
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can use each of the implemented functionalities. |
| 0c. | Testing Guide	| We will conduct unit test on all modules to ensure they can function properly. In this guide, we will describe how to run these tests.|
| 0d. |Article	| We will write an article or tutorial that explains the work principle as part of the grant.|
| 1. | Referendums and Proposals | We create these functionalities to enable viewing and voting for referendums and proposals |  
| 2. | Council and Motions | Council members and motions can be seen in this part |  
| 3. | Treasury and Tips | We create Treasury to view/submit proposals and tips |  

## Future Plans

After we finish these 2 milestones, we will publish Plus extension to Chrome and Firefox browser addon market, we have some plans to extend Plus features on parachains, as an example one plan is adding token swapping of Acala to Plus extension, supporting NFT on parachains like Efinity will be another plan for feature.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  In the initial stage of Plus, we presented it to the core developers of the original polkadot js extension on Github, there they suggested us to apply for W3 grants.
