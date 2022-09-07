# Open Grant Proposal
* **Project:** Polkadot Snap Made by Keystone Wallet Team
* **Proposer:** @aaronisme
* **Payment Address:** 3KL2HNETiLbLVbnGfpGZ6ZkyyaWUL6bfpt（BTC）
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Keystone (Previously Cobo Vault) is the official partner of MetaMask and Solflare wallet, and we are also the ONLY hardware wallet compatible with MetaMask mobile (demo video). 
Apart from our hardware wallet business unit, another major unit of ours is MetaMask Snaps Development. We are the first verified Snap developer of MetaMask building BitcoinSnap.
Keystone is dedicated to developing a so-called “Polkadot Snap” to help your team open up one of the biggest WEB3.O entrances - MetaMask, where users could continue exploring the Polkadot ecosystem with their familiar MetaMask Wallet. 
As always, we appreciate Polkadot's vision and try to scale with the team, by building the win-win Polkadot Snap, we believe it benefits both of us in a long term perspective.


### Project Details

Polkadot Snap is an “Snap Application” running on MetaMask. Polkdaot Snap will act as two ways for users. Firstly it will be the wallet adapter for Dapp developers. With it, the Dapp can interact with MetaMask for Polkadot. Secondly, The Polkadot Snap will be the wallet for Polkadot. It will provide functionality like transfer asset, stake token etc. 

We will use React, Mobx and Typescript for building this application.Considering Polkadot Snap is not completed yet, we put some samples of our BTCSnap for your reference.
- Alpha version of BTCSnap：https://btc.justsnap.io/
- Demo: https://www.youtube.com/watch?v=9B-nnnaFq0o
- BTCSnap Repo: https://github.com/KeystoneHQ/btcsnap


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
	- FIrst Polkadot Snap: Keystone aims to be the first Polkadot Snap developer and build the first open source Polkadot Snap for the Polkadot ecosystem.
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

- **Total Estimated Duration:** 4 months
- **Full-Time Equivalent (FTE):** 6 FTE
- **Total Costs:** 32k USD

### Milestone 1:
In Milestone one, we will develope the wallet adaptor based on MetaMask Snap. We will create the wallet adaptor for Polkadot. The are at least these things should be covered:
Building the snap application
Provider and js sdk which wrap the snap application which provide injected object for the Dapp developer.
Writing the documentation for the Dapp developer. 

After this milestone, we will open-source all the implementation code and examples.
Bascily, every dapp can use this wallet adapter to interact with MetaMask

To hit this milestone, one month full-time work is needed for our secure element firmware engineer (Sora - Frontend Engineer ), 0.5 month full-time work is needed for our QA engineer (Xia MengYun - QA Engineer). 
Grants are 10k USD.

### Milestone 2: 
In milestone two, we will develop the Polkadot Wallet. It will also use our snap and provide functionality like transferring asset. Staking etc. 

The Polkadot wallet we will build which will rely on Polkadot snap to interact with MetaMask. First We will design the new user interface to provide an good experience for the users. Second, we will build this wallet application. It will be our long-term supported product. 
To hit this milestone, two month full-time work is needed for all our dev/pm on the software side (Aaron Chen - CTO of Keystone, Zhang XiaoChun - Product Manager, Tian li - Software Engineer), 0.5 month full-time work is needed for our QA engineer & UI/UX designer (Xia MengYun- QA Engineer, Zhang XiaoChun - UX Designer). 
Grants are 22k USD.


## Future Plans

Once MetaMask merged its Snap function to the normal version, BTCSnap (developed by Keystone) will be promoted as one of top 3 Snaps on its main page where our snaps would get a huge exposure. In a short term, we plan to develop a series of snaps for different chains and make a “Snaps Bundle” upon our Bitcoin Snap where users could easily switch to different snaps for different chains in one place. In the long term, we’ll continue to build various snaps, not only for transactions, but also Defi, NFT, Game etc for different chains to enrich the Keystone Snaps ecosystem and obviously Polkadot will be one of our top priority.
