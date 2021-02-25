# Open Grant Proposal


* **Project Name:** Vera Defi Phase 1
* **Team Name:** Team Vera
* **Payment Address:** 0x94637b309B477388656B06f86A2604D202123583

## Project Overview :page_facing_up: 

### Overview

Please provide the following:
  * A brief description of the project.
Vera DeFi is a key component of Vera Protocol, a larger vision to build an open protocol that enables the peer-to-peer lending, borrowing and exchange of physical assets on the blockchain by leveraging hash signatures of object scan,  NFC smart tags and decentralized oracles. As a Substrate-based lending application, Vera DeFi smart contracts will manage unique asset identities, interest, and payment, enabling users to loan assets for token payout.

  * An indication of how you will integrate this project into Substrate / Polkadot / Kusama.
  Core Smart contract components will be developed in Ink on substrate. We will research integrating oracles like paralink. 
  * An indication of why your team is interested in creating this project.
  Like how Bitcoin and Ethereum have enabled trustless peer-to-peer payments of digital assets between strangers, our vision is to enable the trustless retail or exchange of physical goods and assets between strangers without reliance on a centralized marketplace. In light of recent censorships taken by Big Tech oligopolies, our mission is to be an alternative platform for decentralized, censorship-resistant digital commerce and DeFi applications for real-world assets and physical consumer goods. The Vera team looks forward to working closely with its community to build an ecosystem that empowers and rewards entrepreneurs, inventors, and producers of consumer goods and protect the fundamental human right to buy, sell, or trade property we create and own.

### Project Details 

* Mockups/designs of any UI components
https://balsamiq.cloud/sa6mpd1/pvn6rks/r5D27

* An overview of the technology stack to be used
* ![Vera Tech Stack](http://screenshot.studio/Feb24N2FlYz.png)
* Documentation of core components, protocols, architecture etc. to be deployed

Asset Manager Ink Smart contract to manage the assets life cycle 
![Transaction Flow](http://screenshot.studio/Feb24YjM4OT.png)
* PoC/MVP or other relevant prior work or research on the topic
Built AssetManager Ink contract to manage life cycle of the loan
https://github.com/veraprotocol/defi 
Deployed on substrate 
http://18.219.122.155/?rpc=ws%3A%2F%2F18.219.122.155%3A9944#/explorer 


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
 
Michael Arbach: Michael is a business-oriented full-stack software architect and engineer with a 17-years track record building high-performance software solutions for Fortune 500 enterprises using emerging technologies such as blockchain technology in the U.S, Japanese and South Pacific markets. Code produced by Michael is currently in production and has processed billions of dollars in transactions and securities exchange volume. Today, some of the largest banks and organizations in the U.S. rely on software built by Michael and his team to power millions of users across various applications.

Completed project 

* bitrail.io
* http://wego.network
* KodakCoin
* Blockchain based IoT POC for Daikin
* iotblock.io

### Team Code Repos
* https://github.com/veraprotocol

### Team LinkedIn Profiles
* https://www.linkedin.com/in/denislam/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 8 weeks
* **Full-time equivalent (FTE):**  1.5 FTE
* **Total Costs:**  12,000 DAI
### Milestone 1 — Build Vera DeFi V1
* **Estimated Duration:** 8 weeks 
* **FTE:**  1.5
* **Costs:** 12,000 USD/DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 1. | AssetManager | WContinue the development of our PoC AssetManager contract in Ink to enhance the functionality to fully support the first phase of the user interface. |  
| 2. | UI/Design | Design UI based on the phase 
[wireframe](https://balsamiq.cloud/sa6mpd1/pvn6rks/r5D27). |  
| 3. |User Interface | Build the UI on top of the smart contract functionalities and  based on the design |  
| 4. | Docker | We will provide a dockerfile to demonstrate the full functionality of the application |  
| 5. | Article | We will write an article or tutorial that explains the work done as part of the grant. |



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
Yes. Founders already invented in the project. 
* Have you applied for other grants so far?
No.
