# Open Grant Proposal


* **Project Name:** Vera Defi Phase 1
* **Team Name:** Team Vera
* **Payment Address:** 0x94637b309B477388656B06f86A2604D202123583

## Project Overview :page_facing_up: 

### Overview

Please provide the following:
  * A brief description of the project.
  
Vera DeFi is a key component of Vera Protocol, a larger vision to build an open protocol that enables the  lending, borrowing and exchange of NFT assets on the blockchain by leveraging hash signatures of object scan,  NFC smart tags and decentralized oracles. As a Substrate-based  application, Vera DeFi smart contracts will manage unique asset identities, interest, and payment, enabling users to loan assets for token payout. 

  * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
  
  Core Smart contract components will be developed in Ink on substrate. We will research integrating oracles like paralink. 
  * An indication of why your team is interested in creating this project.
  
  Like how Bitcoin and Ethereum have enabled trustless decentralized payments of digital assets between strangers, our vision is to enable the trustless retail or exchange of physical goods and assets between strangers without reliance on a centralized marketplace. In light of recent censorships taken by Big Tech oligopolies, our mission is to be an alternative platform for decentralized, censorship-resistant digital commerce and DeFi applications both for digital and real-world assets and physical consumer goods. The Vera team looks forward to working closely with its community to build an ecosystem that empowers and rewards entrepreneurs, inventors, and producers of consumer goods and protect the fundamental human right to buy, sell, or trade property we create and own.

### Project Details 

* Mockups/designs of any UI components
https://balsamiq.cloud/sa6mpd1/pvn6rks/r5D27

* An overview of the technology stack to be used

![Vera Tech Stack](http://screenshot.studio/Mar06ZWQ4Mj.png)

* Documentation of core components, protocols, architecture etc. 

Asset Manager Ink Smart contract to manage the assets life cycle, [PoC](https://github.com/veraprotocol/defi) built and documented. 

![Transaction Flow](http://screenshot.studio/Mar06ZDhmZj.png)

* PoC/MVP or other relevant prior work or research on the topic
Built AssetManager Ink contract to manage life cycle of the loan
https://github.com/veraprotocol/defi 
* [ working demo  ](http://18.219.122.155/) deployed on substrate

[Video Demo](https://on-chain.io/media/veradefidemo1.mp4)

### Ecosystem Fit 
We are not aware of another project doing DeFi in the Polkadot ecosystem that also aims to link to real world assets.
## Team :busts_in_silhouette:

### Team members
* Denis Lam
* Michael Arbach	

### Contact
* **Contact Name:** Denis Lam
* **Contact Email:** denis@veraprotocol.org
* https://veraprotocol.org/


### Team's experience
Denis Lam: 
Denis began coding at age 6 and launched his first start up gig at age 14. He holds a B.E. in Engineering from University of California, Berkeley in Biotechnology, speaks 5 languages, and is a serial entrepreneur and full-stack product engineer. He has 10+ years cross-functional experience working with startups, Fortune enterprises, and venture capital funds and is passionate about working with firestarters to democratize access to products and services and disrupting the status quo. In his free time, he enjoys travel, mindfulness, playing piano, and empowering others to unleash their potential for good using technology.
 
Michael Arbach: 

- Built blockchain based security lending solution for one of the largest trillion dollar bank in the U.S.
- Blockchain code produced by Michael already moved  billions dollar worth of assets.
- 17 years professional software engineer, 5 years full time focus on blockchain.
- Code produced by michael is currently in production and serving millions of users.

Completed project 

* [bitrail.io](https://www.bitrail.io/)
* [https://gpk.market/market](https://gpk.market/market)
* http://wego.network
* KodakCoin
* Blockchain based IoT POC for Daikin
* iotblock.io

### Team Code Repos
* https://github.com/veraprotocol

### Team LinkedIn Profiles
* https://www.linkedin.com/in/denislam/

## Development Roadmap :nut_and_bolt: 


**This grant:** Phase one Asset Management Contracts and UI                  

**Future Grant:**  Oracles, Physical assets Authenticity, Pools          

**Long Term:**  More Advanced Instruments, Cross-Chain Support         


### Overview

Continue the development of the asset manager, build LoanManager, ExchangeManger
* **Total Estimated Duration:** 8 weeks
* **Full-time equivalent (FTE):**  1.5 FTE
* **Total Costs:**  6,000 DAI
### Milestone 1 — Build Vera DeFi V1
* **Estimated Duration:** 8 weeks 
* **FTE:**  1.5
* **Costs:** 6,000 USD/DAI



#### NFT Exchange
NFT decentralized non-custodial marketplace will facilitate P2P trading between sellers and buyers. The process will be controlled by the ExchangeManager contract. It will provide the following functionality: 

##### _createTrade_

    Input: 
        NFT address, the tokenID
        Address in which they want to get paid and the amount 
        Expiration date . 
    Output:
    Tx ID

This function will be used by sellers to list a new trade opportunity. 

When called, the user will be asked to approve the transaction, and the NFTs will be transferred to the smart contract . The function 	will generate a unique trade ID.

##### _Purchase_
    Inputs:
        Tx ID

This function will be called by buyers to perform a trade by sending  the trade ID. The function will get the tokens to pay with from them,  they need to approve them first, collect a fee, and send the rest to the seller. At the same time, it will send the NFTs to the buyer. The trade is then marked as completed.

##### _expireTrade_
	Inputs:
        Tx ID

This function can be called by a seller to expire a non fulfilled trade to recover their NFT token. 

##### _withdrawFees_

The administrator of the smart contract can call this function to withdraw fees.

##### _ListTrades_
    Inputs: None
    Outputs:
        List of available NFT for sale with details. 
        

![Exchange Transaction](http://screenshot.studio/media/defiselltx.jpg)

#### NFT Lending

NFT Lending functionality is provided by our AssetManager Smart contract. 

##### _listToken_

    Input: 
        NFT address, the tokenID
        Address in which they want to get paid and the amount 
        Loan duration
    Output:
        Tx ID

This function will be used by borrowers to list a new loan opportunity. 

When called, the user will be asked to approve the transaction, and the NFTs will be transferred to the smart contract as collateral. The function will generate a unique trade ID.


##### _lend_
    Inputs:
        Tx ID

This function will be called by investors to perform a trade by sending the trade ID. The function will get the tokens to pay with from them.


##### _withdraw_
    Inputs:
        Tx ID

This function will be called by borrower to pay back their loans with interest and get back the NFT

##### _cancleLoan_
    Inputs:
        Tx ID

This function will be called by the investor to get NFT from the smart contract when the borrower fails to pay back on time.

##### _expireLoan_
	Inputs:
        Tx ID

This function can be called by a borrower to expire a non fulfilled loan to recover their NFT token. 

##### _listLoans_
    Inputs: None
    Outputs:
        List of available NFT for sale with details. 

![Lending Transaction](http://screenshot.studio/media/defilendingtx.jpg)

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicensed |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 1. | NFT Lending | Continue the development of our PoC AssetManager contract in Ink to enhance the functionality to fully support the first phase of the user interface. Described above. |  
| 2. | ExchangeManager | Build exchange manager to enable non custodial buy/sell of NFT, described above. |  
| 3. | UI/Design | Design UI based on the phase [wireframe](https://balsamiq.cloud/sa6mpd1/pvn6rks/r5D27). |  
| 4. |User Interface | Build the UI on top of the smart contract functionalities and  based on the design |  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of the application |  
| 6. | Article | We will write an article or tutorial that explains the work done as part of the grant. |



## Future Plans
* Research and implement oracle integration
* Integration with physical devices to authenticate physical objects
* Build more sophisticated decentralized market place

## Additional Information :heavy_plus_sign: 
Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:
* What work has been done so far?
AssetManger was built in Ink to manage  ERC721 deposit and ERC20 loans. 
* Are there are any teams who have already contributed (financially) to the project?
Yes. Founders already invented in the project, founders are committed to keep investing in the project. 
* Have you applied for other grants so far?
No.

