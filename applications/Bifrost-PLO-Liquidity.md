# Open Grant Proposal

* **Project Name:** Bifrost PLO Liquidity
* **Team Name:** Bifrost.Finance
* **Payment Address:** 0x3754Fd5eC997c07Ca528bb0bdCB0b4F5b93605dF

## Project Description
Bifrost is a parachain that provides liquidity for staking and collateral assets. It is positioned as the defi protocol in the Polkadot ecology. Based on the development of substrate, the parachain slot will be auctioned. Staking is the first kind of asset for Bifrost to unlock liquidity. Users can enjoy staking rewards and liquidity both through Bifrost protocol by mint vToken in PoS.

Bifrost plans to provide KSM/DOT liquidity for the Kusama/Polkadot parachain slot auction, because of the limited number of Parachain Slots, the initial price of parachain slots are expected to be expensive, and projects who need to lease parachain will conduct the Parachain Lease Offering (PLO) to gain their fund advantage in the slot auction. Therefore, a large number of KSMs/DOTs will be locked into the parachain slot auction, and users who contribute their KSM/DOT into parachian crownloan are willing to face a period of time (6-24 months if the parachain wins) that their KSM/DOT cannot be redeemed, which means users will not be able to trade the assets and take the oppotunity cost that the lock-up period without staking rewards. 

However, currently users can participate in the parachain slot auction through Bifrost by this proposal, and obtain the corresponding vsDOT (Voucher Slot DOT) or vsKSM to unlock liquidity. vsKSM/vsDOT is fungible asset that represents all parachains' contributors KSM/DOT, with winner parachain's crowdloan rewards and the derivative is tradable. When users deposit KSM/DOT for a parachain's crownloan throught Bifrost protocol, they can get vsDOT/vsKSM and a certification that vertify the holder of certification can obtain the parachain's rewards, but vsDOT/vsKSM and certifications are not tradable yet until the parachian project wins the auction. If the project lose, those vsDOT/vsKSM and certifications will be eliminated automatically. When users want to cash out their lock-up KSM/DOT after the parachian wins the action, they can sell vsDOT or vsKSM on market with market price. Or they can hold it until the parachain slot expired, and redeem their original assets by certifications. 

The trade modules like Balancer, Uniswap, or Zenlink will be deployed in advance, and vsDOT/vsKSM will be the second type of collateral assets' derivative supported by Bifrost Finance.

![131611297852_ pic_hd](https://user-images.githubusercontent.com/72777624/105987528-5b3fa700-60d9-11eb-99b0-e46406414389.jpg)

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

## Technical solutions
In this solution, Bifrost provides an intermediate abstraction layer between investors, parachain projects, and the Polkadot relay chain, providing investors with better financial tools and flexibility, and also providing parachain projects Standardized and configurable PLO tools help parachain projects to better crownloan for parachain slots and enrich the ecosystem of the entire Polkadot community.

- Investers: DOT, KSM token holders, parachain users and investment institutions are all potential investors in the parachain slot auction.
- Parachain: Need to auction parachain slots, access polkadot or kusama relay projects.
- Bifrost: Through decentralized provision of vsDOT or vsKSM derivatives, the middle layer protocol that unlocks the liquidity of the parachain slot auction。
- Polkadot/Kusama: Relay chain that has parachain slots and released for auction winners.

Bifrost team will communicate and cooperate with potential parachain projects. Their Investors will transfer DOT/KSM to the Bifrost parachain and send transactions to call the mint-function integrated in Bifrost-Runtime to generate vsDOT/vsKSM. Bifrost's design goal is to become a parachain of Polkadot and/or Kusama. Bifrost collects investors' DOT/KSM and votes on other parachain candidates on behalf of investors. Bifrost Team does not have the rights and cannot control the DOT/KSM from investor users, and these funds will be automatically/decentralizedly kept and controlled by Bifrost-Parachain's code.

The Bifrost Parachain can be treated as an ordinary investor, just like Alice, Bob, Bonding a part of the funds (DOT/KSM), and voting on Parachain A, Parachain B... From this point of view, Bifrost is only a PLO Contributor for other Parachain projects, but Bifrost's funds are from other investors.

And how we make vsToken fungible under different unbonding periods? During vsToken minting, vsDOT/vsKSM and Expire-Date-For-ParachainXXX-Token (the certification of a parachain's contribution) will be generated at the same time. vsDOT is fungible, and vsKSM is also fungible, but the Expire-Date-For-ParachainXXX-Token and Expire-Date-For-ParachainYYY-Token corresponding to different periods and different parachains are different, and not fungible with each other. When the ParachainA slot expires, the relay chain will return part of the DOT/KSM to Bifrost, and any user holding vsDOT/vsKSM and Expire-Date-For-ParachainA-Token will be able to redeem the corresponding DOT/KSM. If a user only has vsDOT/vsKSM, but does not have Expire-Date-For-ParachainA-Token, he will not be able to perform the redemption operation, but he can choose to sell vsDOT/vsKSM, or buy Expire-Date-For-ParachainA-Token to perform the redemption operation.

Users who hold Expire-Date-For-ParachainA-Token, and when ParachainA runs normally as a parachain, they will receive the reward from ParachainA, which will be handled by ParachainA-Team and ParachainA-Runtime code.

For vToken tradable, the Balancer DEX module and other third-party modules such as Zenlink are integrated in Bifrost Runtime,, and vsToken (vsDOT/vsKSM) will be traded in these DEX. In addition, Bifrost as a DeFi protocol will also integrate other DeFi applications into Bifrost Runtime, Bifrost team is still doing further exploration. vToken, vsToken and Expire-Date-For-ParachainXXX-Token will run in these DeFi applications. For instance, vToken also can be over-collateralized in defi applications like Acala, loan aUSD and buy vToken again, and the user is actually doing leverage for vToken, because each vToken correspond staking reward, so the user can get leverage staking reward.



### Runtime modules
To implement the above mechanism, we will add the following modules to Substrate runtime of Bifrost:
1. Prepare PLO module
It contains the following features:
    - Parachain Registration: Registration of the parachain’s information and PLO-related arguments on Polkadot-Relaychain.
    - Investors DOTs Deposit: Investors Give Bifrost the capabitlity of bounding their DOTs to support Parachain PLO, and get vsDOT/vsKSM.
2. Execute PLO module
It contains the following features:
    - Bounding DOTs: Bounding DOTs for parachains on Polkadot relay chain to support their PLO.
    - Redeeming DOTs: When the PLO fails or slot lease expires, contributors will receive the returned DOTs.
2. Asset module
It contains the following features:
    - Record Certifications: The certifications represent the corresponding quantity of user's contribution, parachains will reward users who hold contributions. Bifrost records these contribution holders, in order that keep their right to redeem 1:1 KSM/DOT after the fund being retirememt.
    - DOT-vsDOT or KSM-vsKSM Conversion: When fund being retirement, vsDOT/vsKSM should be converted to DOT/KSM.

### Workflow
- Investors participate in the parachain slot auction process
![171611737050_ pic](https://user-images.githubusercontent.com/72777624/105987911-e5880b00-60d9-11eb-8557-0f46c8c7f121.jpg)

- Investors use Bifrost to participate in the parachain card slot auction process with liquidity
![181611737079_ pic_hd](https://user-images.githubusercontent.com/72777624/105987978-ff295280-60d9-11eb-8adc-23058f51b605.jpg)

### Security
Investors use XCMP to transfer DOTs to the Bifrost platform, so the security of user funds is guaranteed by XCMP. Parachain projects that require PLO also use XCMP to deposit rewards asset on the Bifrost platform. For example: Alice transfer her DOT in relay chain to the Bifrost parachain through the XCMP cross-chain function, and then ALice can call the function provided by the Bifrost platform to bind ParachainA. Her rewards will be released linearly in time. The unreleased part is always locked and no one can embezzle it. It is as safe as being locked in the parachain itself. Parachain projects can also choose to release deposit rewards (contributor rewards) parachains themselves, it depends on the utility of XCMP at that time.

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 3
* **Total Costs:** 1.5 BTC

##### Milestone 1 - Prepare PLO Development
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Parachain Register | Combined with the XCMP protocol, define the parachain data structure. Projects register crowdload on bifrost for the parachain auction. |  
| 2. | Contributor Deposit | Contributors transfer their assets of the relay chain to bifrost through cross-chain, Bifrost deposits users' assets DOT/KSM into the PLO module account of the selected project party, and PLO issues vsDOT/vsKSM as the deposit voucher for users. |

##### Milestone 2 - Execute PLO Development
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Bounding DOTs | Bifrost initiates a cross-chain contribution through a parachain account, raises funds for the project, and participates in the parachain auction. |
| 2. | Redeeming DOTs/KSMs | Parachain retires or fails on auction, bifrost redeem assets for users through cross-chain. |

##### Milestone 3 - Asset Development
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Token-vsToken Asset | We will complete basic functions of token/vsToken asset issuance, destruction, transfer, freezing, etc., and token-vsToken conversion based on real-time exchange rates. |  

## Additional Information
The code related to the roadmap will be open source in the form of runtime and packaged into docker containers for acceptance. At the same time, this runtime will provide DOT and KSM liquidity for Polkadot and Kusama parachain slot auctions. Bifrost Finance will serve as the first parachain for this feature application. Regarding grant, we are happy to accept DOT.

##### What work has been done so far?
Bifrost has released the third version of the testnet. The mint, redeem and swap of staking derivatives have been completed in the testnet. Currently, the Bifrost testnet supports three types of derivatives: vKSM, vDOT, and vEOS. Holding staking derivatives (vToken) can indirectly participate in staking to obtain benefits, and staking derivatives can also trade at any time and transfer staking rights to avoid the loss of opportunity cost due to staking lockup. After research, Polkadot or Kusama auction parachain card slots have decentralized execution, predictable returns, and absolute principal security, which are similar to staking assets. So it can also solve the problems of equity transfer and lock-up opportunity cost for its casting derivatives.

Otherwise, Bifrost considered that Polkadot will bridge-up Ethereum in the future, so we deployed the ETH 2.0 staking derivative vETH, which provides a liquidity solution for users of Ethereum 2.0 who pledge deposit contracts. Our contract received 10,000 ETH of vETH mint on first day online, equivalent to $6 million, the campaign was a great success and far exceeded our expectations. In technical aspect, we removed the Sudo administrator authority before the formal deposit of ETH 2.0, to ensure that the deposit operation of ETH is confirmed by multiple parties and eliminate the unilateral risk of misbehavior by Bifrost team. At present, Bifrost vETH mint contract owner authority has transferred to the multisig contract, and the five parties InfStones, Ankr, DFG, LongHash Ventures and Bifrost jointly did multisig to manage private key for ETH 2.0 deposit operations. All multisig records will be saved on-chain and published in Bifrost Wiki.

##### Have you applied for other grants so far?
We have obtained EOS Bridge Grant and completed the acceptance of the first phase milestone. The second phase milestone has been developed and we are preparing for the delivery of the second phase milestone.