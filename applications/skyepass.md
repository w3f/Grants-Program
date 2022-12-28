# SkyePass

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Team Name:** SkyeKiwi Team
* **Payment Address**: 0xa5E4E1BB29eE2D16B07545CCf565868aE34F92a2
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/212#issuecomment-1173601830)

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

SkyePass is a decentralized and customizable identity management software. On the surface, it is a decentralized, open source and modern password manager.

### Product Details

As a long-term password manager software user myself, I have been really frustrated of the services like LastPass, 1Password for either lack of functionalities or the idea of storing ones entire digital identity on their corporate servers. Existing open-source solutions are too technically complicated to use.

At the very basis of it, a password manager is no more than an encrypted database, an APP and a browser extension to interact with the database.

Therefore, our team create a new password manger software that has pretty and intuitive UI/UX, fully decentralized (i.e. our team own no backend servers) and hackable by providing an open API for people to develop extensions with.

Users who signup will first create a blockchain wallet and have the mnemonic (and a master password) as their sole identity credentials (pretty standard blockchain wallet stuff). Later, each database instance is called a `vault` (standard name for all password managers) and they are light-weight file based databases ([lowDB](https://github.com/typicode/lowdb) seems to be a great choice). User can be given options to choose the encryption behavior of their database. By default, the vault will be split into some pieces with a Shamir's secret sharing mechanism.

For instance, for a simplest sharing schema, when the vault is created to be shared with 2 other family members, the vault will be split into 4 parts (we call them `horcrux`, for those who do not know [the Harry Potter reference](http://harrypotter.shoutwiki.com/wiki/Horcrux#:~:text=A%20Horcrux%20is%20a%20powerful,one%20is%20to%20true%20immortality.) ) with a minimum quorum of 2 to be decrypted. One piece will be sent to IPFS without encryption, the other 3 pieces will be encrypted by each member's public key and be sent to IPFS. An NFT will be minted for the owner. The ID of the NFT will be the `vault ID` and the NFT's URI will be a metadata piece that only the owner can change as exampled below:

```json
{
    "pieces": 4,
    "quorum": 2,
    "nounce": 18,
    "owner": "5Ef9ES1SLQZU4KucGsjvs8qexvppQFmDgHiqoqVptJ9nZDeu",
    "members": [
        "5EKj6S1SLQZU4KucGsjvs8qexvppQFmDgHiqsdsdtJ9nZ123",
        "5EJK1S1SLQZjkLKucGsjvs8qekdjpQFmDgHiqoqVptJ9nZ978"
    ],
    "unencrypted_cid": "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",
    "encrypted_cids": [
        {
            "cid":       "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",
            "member": "5EKj6S1SLQZU4KucGsjvs8qexvppQFmDgHiqsdsdtJ9nZ123"
        },{
            "cid":       "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",
            "member": "5EJK1S1SLQZjkLKucGsjvs8qekdjpQFmDgHiqoqVptJ9nZ978"
        }, {
            "cid":       "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",
            "member": "5Ef9ES1SLQZU4KucGsjvs8qexvppQFmDgHiqoqVptJ9nZDeu"
     }]
}
```

The reason why we design such mechanism serves 3 purposes.

1. Reserve the capacity for advanced users to create more complicated sharing schema.
    * For instance, a user can create a vault and assign trustee to take over one's estate when the user passes away. The user can split the vault to 5 `horcrux` and set the minimum decryption quorum to 3. 2 pieces encrypted with the user's own public key, 1 piece encrypted with a trustee A's public key, 1 piece encrypted with another trustee B's public key and 1 last piece to the user's lawyer. In event of death, A and B can go to the lawyer and decrypt the vault and inherit the user's digital identities.
    * A team can create a vault that requires 2 members to decrypt a vault, or require the owner's piece to decrypt a vault etc.
2. Because the historical metadata states are all stored on the blockchain, it is not hard to rebuild the change history of the vault.
3. Make it easier to check the integrity of the vault and recover the vault.
4. Leave the option open for future commercial projects to offer zero-knowledge vault backup service.

To manage access for users, we assume two common roles: `write` and `read` and, of course, `owner`. Because each time when the database is updated (i.e. new password saved), the IPFS CID will be updated, managing access is easy. The owner can add the member's address to be `approved` to change the URI in the smart contract and be responsible to update all CIDs when a client is updating the database. While those who have a `horcrux` but not in the `approved list` in the smart contract, they cannot update the database because they cannot update the metadata.

So far, we have discussed a system to securely create, share and manage a minimalism decentralized file-based database. Our team believe there are more we can do with the database file itself and that's why we are calling SkyePass hackable. If we think about blockchain wallet applications, they are web applications that store some private keys and call APIs like `Web3.js`. Taking inspiration from Ledger, we believe if we expose some APIs for developers to make extensions(like the idea of Applications for Ledger), we can make a password manager infinitely interesting. Because the vault is shareable to others, users can share a whole workspace to others will all sensitive information included. These extensions can be made both in a desktop applications or a browser extension.

Some ideas we have had so far:

* `Crypto Wallet`: shared hot wallet. The owner of the vault can install an `Ethereum` extension and store the private key with it. And, of course, DApp browsers.
* `SSH Login Tool`: a whole team can share login credential to their server effortlessly.
* `Shared Phone Number`: a shared Google account that registered on `Google Voice` can be stored, and the whole family can receive verification code for services.

### Password Manager & an Identity Management Solution

Based on some thinking of the basis nature of NFTs. We believe that a password manager is an ideal medium to deliver tokenized digital identities. Therefore, we think each username-password-OTP combination as an atomic token, a vault as a collection of these identities, and an `extension` as a service injected with an identity.

* If we assume all identity tokens have two states: "public identity" or "private identity". A public handle is the public identity of a user. (i.e. a twitter handler, a Github handle or a Venmo handle etc. ) Therefore, we are building a solution to link to one's public off-chain profiles. Also, we can implement a ENS-like or `@username` style handle system.
* Therefore, simple sharing behavior (i.e. share my spotify account to my girlfriend) can take two forms: if she has an account with this password manager, simple `@her`, set some rules for using this password(or not) and press share. If she has not, a one time sharing link will be sent, her browser will generate an ephemeral key pair, and that ephemeral key pair will be used to encrypted the entry and send the encrypted password entry over and make it self-destruct soon.
* For teams or families, they are using a shared identity. They can link their profiles and get a handle like `@team`, while the team will use some secret sharing schema for privilege management.

For more on this, please refer to `Future Plan/Integrated Identity Solution` section.

### Ecosystem Fit

I don't think there are anything like SkyePass so far, both within the Substrate community or all blockchain communities. The reason that Substrate will be an ideal platform for SkyePass is because the flexibility the framework offers. We plan to deploy 4 smart contracts:

* Contract 1: A NFT contract that issues an NFT token for vault creator, store metadata of the vault and manage permission to update the vault. (the `vault metadata contract`)

* Contract 2: A NFT contract that generate an NFT token that represents an atomic digital identity to users (the `atomic digital identity contract`)

* Contract 3: A generalized handle system (an ENS-like system) on a Substrate-based chain that issue user handle ownership NFTs (the `substrate identity handle contract`)

* Contract 4: An identity control smart contract that verify and store off-chain user handle(s), in compliment to the `substrate identity handle contract` (the `off-chain identity linkage contract`)

From all smart contract platforms, we choose the Substrate stack for development because:

* When more customizations are needed, we won't be limited by the platform. The option to develop a parachain is still available.
* Because these identity management smart contract is designed to be more generalized, we have the option to deploy them on different chain. For instance, we can deploy contract 1 and 2 to a faster/less secure/low tx cost focused parachain. While, contract 3 & 4 to a secure and relatively more decentralized parachain. Most likely we will not mess with Bridging of the Substrate stack but the option is still open for future.

For `extensions`: we plan to host a Github public repo as described in `Milestone 2`

### UI/UX Mockup

![MacBook Pro - 5](https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l2kl90j31c00u0ac0.jpg)

![MacBook Pro - 1](https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l4ozqkj31c00u0dl4.jpg)

![MacBook Pro - 2](https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l3k86lj31c00u0431.jpg)

![MacBook Pro - 4](https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l5w0ujj31c00u0tc0.jpg)

![MacBook Pro - 3](https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l6q8c4j31c00u0778.jpg)

### Cross-Comparison with Other Password Managers

We have not included all popular ones. These are just ones we have actually used.

|                                      | SkyePass | 1Password | LastPass | NordPass | RememBear | KeePass |
| ------------------------------------ | -------- | --------- | -------- | -------- | --------- | ------------------------------------ |
| Release Year | 2021 | 2006 | 2008 | 2019 | 2018 | 2003 |
| Zero-Knowledge Vault                 | Yes | Yes | Yes | Yes | Yes |Yes|
| Product Type                         | Opensource | Commercial | Commercial | Commercial | Commercial |Opensource|
| Account & Vault Metadata             | Stored On Blockchain | Corporate Servers | Corporate Servers | Corporate Servers | Corporate Servers |Local by default|
| Decentralized                        | Yes | No | No | No | No |Kind of|
| 2FA Login Protection                 | No | Yes | Yes | Yes | No |N/A|
| Shared Vault                         | Yes | Yes | No | No | No | Kind Of                      |
| Custom Sharing Schema | Yes & expose APIs to do so | Yes. With Business accounts | No | No | No |With plugins|
| Intuitive & Morden UI/UX             | Intuitive and Beautiful | Good but Not Intuitive | Intuitive But not so Beautiful | Intuitive and Beautiful | Intuitive and Astonishing; Possibly the Best |Old, professional users only|
| Fill Web Forms & Websites Auto Login | Yes | Yes | Yes | Yes | Yes |with plugins|
| Password Strength Report             | Not by default but open for plugins | Fantastic | Good | OK | OK |No|
| Digital Legacy                       | Yes! | No | Yes | No | No |NO|
| Import From Browsers                 | Not Now. Will be Supported after Beta Release | Yes | Yes | Yes | Yes |With plugins|
| Extensibility                        | Core Feature! | No | No | No | No |Yes!|

## Team :busts_in_silhouette:

### Team members

* Song Zhou (Full stack developer) <https://github.com/RoyTimes>
* Zoe Sun (Lead Designer)
* ... More to be hired

### Contact

* **Contact Name:** Song Zhou (song.zhou@ponder.capital)

### Legal Structure

* No legal entity yet

### Team's experience

Besides private work for companies that cannot be shared, Song developed a simple server-less React.js Blog system(can be seen on his Github profile); a private event participation checkin application, based on Ethereum smart contract, React.js for frontend, Coda.io API and a Telegram bot for administration.

### Team Code Repos

* <https://github.com/skyekiwi/skyepass>

## Development Roadmap :nut_and_bolt:

### Overview

* **Total Estimated Duration:** 16 weeks
* **Full-time equivalent (FTE):**  2.5 FTE
* **Total Costs:** $28,500

### Milestone 1 — PoC

* **Estimated Duration:** 3 Weeks

* **FTE:**  2

* **Costs:** 6480 DAI (2 FTE * 35 Hours per week * 3 Weeks * $38 Hourly Wage. Of course, I'll be surprised if we will actually work less than 50 hours per week.)

| Number | Deliverable       | Specification                                                |
| ------ | ----------------- | ------------------------------------------------------------ |
| 0a.    | License           | Apache 2.0                                                   |
| 0b.    | Documentations    | A guideline of how to run and test all functionalities described below. |
| 1.     | Smart Contract    | The core smart contract that store IPFS hash, generate unique vault ID and implement access management. <br/>We are using ink! and the smart contract development suite maintained and developed by [Patract Labs](https://patract.io/) for developing environment, unit testing and deployment. |
| 2.     | Client Side PoC   | 1. Local data storage schema and adapters with lowDB <br/>2. IPFS (add, cat, pin) on the Infura IPFS nodes; <br/>3. ECIES encryption & decryption with [eccrypto](https://github.com/bitchan/eccrypto) <br/>4. Shamir secret sharing with a simplest 4/2 schema powered by audited lib [Secrets.js](https://github.com/grempe/secrets.js) <br/>5. A full run down of the process (from a user creating a vault, add in some password items, to the encryption, publish to IPFS, interact with a local blockchain, to access management when sharing with two other users)<br/>6. Unit testing for most of these functionalities |
| 3.     | Client Side UI/UX | an simple Electron UI/UX not wired up with logic yet         |

### Milestone 2  — Desktop App & Browser Extension

* **Estimated Duration:** 10 Weeks / **Est. Start Early 2022**

* **FTE:**  4

* **Costs:** 22,020 DAI

| Number | Deliverable                                    | Specification                                                |
| ------ | ---------------------------------------------- | ------------------------------------------------------------ |
| 0a.    | License                        | Apache 2.0                                                   |
| 0b.    | Developer Resource/API Documentation/Community | - A comprehensive API spec documentation <br/>- Riot group for support, suggestions and questions<br/> |
| 0c.     | **Security Auditing**                          | Audited by a trusted 3rd party                               |
| 1.     | Desktop App/Browser Extension                  | Create an open Github repo for `extensions`, build a management system for open PR of new integrations. The "marketplace" in the desktop app will pull a list of available integrations from the repo.  <br/>Support at least 2 password importing source<br/>Support unencrypted password exporting<br/>Add in support for browser extension to inject hot wallet like Metamask<br/>**Desktop App**<br/>A React.js + Electron App. The App will implement as close as possible to the graphic design (per 3). <br/>- Wallet Creation / Backup Phase / Create Master Password<br/>- Wallet Import / Signin<br/>- Autolock after timed inactivity or manually lock the App <br/>- Create/Share/Manage Vaults<br/>- Add/Update/Delete Password Items (with 2FA OTP support)<br/>- Add/Update/Delete Secure Note/Credit Card <br/>- Basic ETH wallet extension<br/>- Basic Polkadot wallet extension <br/> - Application Marketplace<br/>- sharing a single password item directly to another user<br/><br/>**Browser Extension** <br/>- Communication to Desktop Application<br/>- Auto-fill account/passwords<br/> <br/> |
| 2.     | Smart Contracts                                | All contract tested and audited and we will deploy the V1.0 contract to the appropriate parachains. |
| 4.     | Mobile Apps                                    | Draft up UI/UX designs for mobile apps.                      |

## Future Plans

We do plan to build a for-profit business and seek equity investments, but we believe that a good password manager should be a common goods.

#### For the core password manager

For local usage, that means no syncing between devices, no sharing with others, we think it would be absolutely ridiculous to charge people for that, because it basically does not cost us anything. However, for other use cases, on a public V1.0 launch, there can be cost related to IPFS storages and smart contract calls, but it is gonna be way cheaper than any other commercial products. I think it would be safe to assume a cost of \$2/year for one user with extra-heavy usage. For a team of 10 people, 1Password will charge (\$7.99 X 12 months X 10 users) \$960 per year. SkyePass will change this charging schema.We want to make the pricing as transparent as possible.

When a user, Alex, created a wallet/account and choose to go for "premium features" (i.e. syncing between devices, sharing with others etc.). We want to ditch the idea of "Alex's account at SkyePass" but to "Alex's account on a generic blockchain". Alex can fund her account either by transferring some funds from Coinbase or other crypto wallets, or we will hook up a credit card to crypto portal (like MoonPay). We are going to give Alex a simple estimation calculator of how much she would need to top-up per year based on how many devices of vaults she plans to create and share. Usually, for a typical user (add in 300 items, password, notes or credit cards, one vault for herself, one vault for the family and one vault for work), we would recommend somewhere about \$5 per year compare to a $40 bill I pay for a commercial alternative. A percentage (somewhere between 20% to 40%)of the inbounding funds will be taken to form a treasury. And, of course, we will show Alex how much she can save compare to commercial options. Alex has complete control over her account. She can send out the funds she holds other wallets when she wants. When she is sharing a vault with others, she can choose to send funds to other's account if she allows them to make changes to the vault.(Just in the same way when a team leader of a team handles all bills for a SaaS product).

In summary, we are giving the freedom back to our users and let them decide how they want to pay. We will design UX to make managing funds really easy like a commercial alternative.

#### Integrated Identity Solution

1. We plan to build an auction market for user handle on a Substrate-based public chain. (refer above in `More Potential For a Password Manager`)
2. We plan to build a market for trading digital identities.  
3. We plan to offer the identity solution in a consulting package for business teams.

#### Hardware Wallet Integration

We can also create a special version of SkyePass (or a special login method to use hardware wallet) to support only vault creation from hardware wallet.

#### Meta Transaction

One of the main reason that we choose Substrate/Polkadot is because we can choose a suitable chain to interact with smart contract calls fast and cheap. The option to develop commercial meta transaction or state channel solutions on Polkadot is still open for consideration.

#### Backup/Secret Keeping Nodes

Because we are building a Shamir secret sharing mechanism at our very core encryption schema, we can explore the idea of providing an optional, commercial and centralized backup nodes.

#### Marketplace

We allow and encourage our community members to build paid extensions on top of our APIs. One idea can be a subscription-based password watchtower service and like all platforms, we will take a percentage of the proceeding to the treasury.

#### Treasury

Treasury is built for those who contributes to the community: those who translate documentations, those who build extensions and those who contribute to the core code base. SkyeKiwi team will permanently hold 29% voting rights in decisions and 3 veto rights per calendar year, partners before the official launch will also be granted 20% voting rights. And we leave the rest to all other treasury contributors proportionally. These numbers or proposals are not final. We still have a lot to figure out.

## Additional Information :heavy_plus_sign:

* We have a simple PoC of the core encryption schema built up in a sandbox. UI/UX and other graphic resources are made.
* We have not applied for other grants yet.
