# Polkadot Snap Made by Keystone Wallet Team

* **Team Name:** Keystone Wallet Team
* **Proposer:** @aaronisme
* **Payment Address:** 3KL2HNETiLbLVbnGfpGZ6ZkyyaWUL6bfpt（BTC）
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
* **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/1166#issuecomment-1567918173)

## Project Overview :page_facing_up:

Keystone (Previously Cobo Vault) is the official partner of MetaMask and Solflare wallet, and we are also the ONLY hardware wallet compatible with MetaMask mobile (demo video). 
Apart from our hardware wallet business unit, another major unit of ours is MetaMask Snaps Development. We are the first verified Snap developer of MetaMask building BitcoinSnap.
Keystone is dedicated to developing a so-called “Polkadot Snap” to help your team open up one of the biggest WEB3.O entrances - MetaMask, where users could continue exploring the Polkadot ecosystem with their familiar MetaMask Wallet. 
As always, we appreciate Polkadot's vision and try to scale with the team, by building the win-win Polkadot Snap, we believe it benefits both of us in a long term perspective.


### Project Details

Polkadot Snap is a “Snap Application” running on MetaMask. Polkadot Snap will act in two ways for users. Firstly it will be the wallet adapter for Dapp developers. With it, the Dapp can interact with MetaMask for Polkadot. Secondly, The Polkadot Snap will be the wallet for Polkadot. It will provide functionality like transferring assets, staking tokens, etc.

We will use React, Mobx, and Typescript for building this application. Considering Polkadot Snap is not completed yet, we put some samples of our BTCSnap for your reference.
- Alpha version of BTCSnap：https://btc.justsnap.io/
- Demo: https://www.youtube.com/watch?v=9B-nnnaFq0o
- BTCSnap Repo: https://github.com/KeystoneHQ/btcsnap


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
	- First Polkadot Snap: Keystone aims to be the first Polkadot Snap developer and build the first open-source Polkadot Snap for the Polkadot ecosystem.
- User acquisition: As promised, BitcoinSnap will be officially recommended by MetaMask and we will drive traffic to Polkadot Snap through our BitcoinSnap so tens of millions of MetaMask users will get easier access to the Polkadot ecosystem. 
- Lower the threshold: No more other wallets are needed so less friction for users when they start exploring Polkadot.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- Our target audience will be 1) all the MetaMask users who want to explore the Polkadot ecosystem in a more efficient way. 2) all the Polkadot users who get used to the MetaMask wallet. 3) all the projects on Polkadot chain want to get users from MetaMask

- What need(s) does your project meet?
- Polkadot Snap will meet the needs: 1) Sign in one place for different blockchain transactions. 2) Lower barriers to enter the Polkadot ecosystem. 3) Users acquisition needs from different projects no matter whether they are deployed on Polkadot, Ethereum or other EVM chains.


- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
- No.


## Team :busts_in_silhouette:

### Team members

- Name of team leader: Lixin Liu, CEO
- Names of team members:
Aaron Chen, CTO
Bobby Wang, Head of BD
Truda Hamzik, Head of Communications
Jimmy cheung, Head of Design
Shaun Guo, Project manager
Bill Lee, Product manager

### Contact

- **Contact Name:** Bobby Wang
- **Contact Email:** bobby@keyst.one
- **Website:** N/A

### Legal Structure

- **Registered Address:** 19H MAXGRAND PLAZA, NO.3 TAI YAU STREET, SAN PO KONG,  KOWLOON,  HONGKONG.
- **Registered Legal Entity:** Yanssie HK Limited

### Team's experience


Keystone (previously Cobo Vault), the official partners of MetaMask and Solflare wallet, and we are also the ONLY hardware wallet compatible with MetaMask mobile (demo video). 
We have our mature flagship product which is Keystone hardware wallet. 
Apart from that, another major business unit is MetaMask Snaps development. We are the first verified Snap developer of MetaMask building BitcoinSnap (https://www.youtube.com/watch?v=oxkmissJbiM). This BitcoinSnap will be recommended by MetaMask when Snaps officially launch in a few months. 
Keystone is also the co-author of BIP-129 and EIP-4527, 
Keystone (previously as Cobo Vault) has applied for a grant, the project name was Cobo Vault, and the legal entity was Shanghai Nanqian Technology Co., Ltd.



### Team Code Repos
https://github.com/KeystoneHQ/btcsnap
https://github.com/KeystoneHQ/Keystone-cold-app

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

https://github.com/orgs/KeystoneHQ/people/aaronisme
https://github.com/orgs/KeystoneHQ/people/zhaomengru2015
https://github.com/orgs/KeystoneHQ/people/LiYanLance
https://github.com/orgs/KeystoneHQ/people/soralit

### Team LinkedIn Profiles (if available)

N/A

## Development Roadmap :nut_and_bolt:

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs:** 30k USD

### Milestone 1:

- **Total Estimated Duration:** 1 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 10k USD

In Milestone one, we will develope the wallet adaptor based on MetaMask Snap. We will create the wallet adaptor for Polkadot. The are at least these things should be covered:
Building the snap application
Provider and js sdk which wrap the snap application which provide injected object for the Dapp developer.
Writing the documentation for the Dapp developer. 

After this milestone, we will open-source all the implementation code and examples.
Bascily, every dapp can use this wallet adapter to interact with MetaMask

To hit this milestone, one month full-time work is needed for our secure element firmware engineer (Sora - Frontend Engineer ), 0.5 month full-time work is needed for our QA engineer (Xia MengYun - QA Engineer). 
Grants are 10k USD.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a dapp developer can use this library to use the MetaMask flask as the wallet for the user. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Demo | We will publish an demo to show how to use this library for the dapp developers |
| 0e. | Article | We will publish an article that explains how to use this wallet adaptor and MetaMask Flask to interact with Polkadot dapps. |
| 1. | js sdk | Building the snap application Provider and js sdk which wraps the snap application and provides an injected object for the Dapp developer. Writing the documentation for the Dapp developer. |

### Milestone 2: 

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs:** 20k USD

In milestone two, we will develop the Polkadot Wallet. It will also use our snap and provide functionality like transferring assets like DOT/KSM. Staking etc. 

Here is the feature list for this Polkadot Wallet. 
1. Users can use this wallet to manage their assets like DOT/KSM.
2. Users can use this wallet to track their transaction history.
3. Users can use this wallet to manage their NFTs.
4. Users can use this wallet to contribute the Crowdloans
5. Users can use this wallet to stake their DOT/KSMs.
6. This wallet will support both Polkadot and kusama chains.

The Polkadot wallet we will build which will rely on Polkadot snap to interact with MetaMask. First We will design the new user interface to provide an good experience for the users. Second, we will build this wallet application. It will be our long-term supported product. 
To hit this milestone, two month full-time work is needed for all our dev/pm on the software side (Aaron Chen - CTO of Keystone, Zhang XiaoChun - Product Manager, Tian li - Software Engineer), 0.5 month full-time work is needed for our QA engineer & UI/UX designer (Xia MengYun- QA Engineer, Zhang XiaoChun - UX Designer). 
Grants are 20k USD.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can manage their assets with this wallet application. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Application  | We will publish the wallet application that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article that explains how to use this application for the whole Polkadot community. |

## Future Plans

Once MetaMask merged its Snap function to the normal version, BTCSnap (developed by Keystone) will be promoted as one of top 3 Snaps on its main page where our snaps would get a huge exposure. In a short term, we plan to develop a series of snaps for different chains and make a “Snaps Bundle” upon our Bitcoin Snap where users could easily switch to different snaps for different chains in one place. In the long term, we’ll continue to build various snaps, not only for transactions, but also Defi, NFT, Game etc for different chains to enrich the Keystone Snaps ecosystem and obviously Polkadot will be one of our top priority.
