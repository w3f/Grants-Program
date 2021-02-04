# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

> This page is also available in [Chinese (中文)](./application-template-cn.md).

* **Project Name:** Gridlokr
* **Team Name:** Polkalokr
* **Payment Address:** DAI - 0xA300c5A5d6eDEb20263085D54394f180FC74958D

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview

The Polkalokr team is currently working on the development of its initial product line; Gridlokr. At a high-level, Gridlokr provides users with the ability to lock tokens into smart contracts and define token release models. The three key products within this product line include:

* Team Lokr - Lock team tokens into a transparent smart contract.  This will give investors and token holders peace of mind knowing that the tokens cannot freely enter circulation

* Investor Lokr - Lock seed, VC and pre-sale customer tokens into a transparent smart contract that will release tokens based on a pre-agreed schedule.

* Liquidity Lokr - Tokens locked into liquidity pools for a pre-defined time.

Gridlokr is designed to help projects garner trust from investors and their communities.  Locking team and investor tokens into transparent smart contracts will provide token holders confidence that ‘new’ tokens cannot freely enter circulation. Also, the ability to lock tokens into liquidity pools through a smart contract will assure token holders that, should they wish to trade their tokens on decentralized exchanges, they can do so without the risk of liquidity being pulled before they can execute their swaps.

#### How we plan to use Polkadot, Kusama & Substrate

There are many weaknesses of Ethereum, especially high transaction costs, and low scalability. Thus, an implementation based on the Polkadot network and its cross-chain interoperability is a better solution for the blockchain ecosystem.

We view the Substrate framework to be the leading way to build blockchains at this moment in time. It is only natural to build on something that is gaining good traction and making a positive change to the blockchain ecosystem.

We will use the substrate framework to build a series of smart contracts to allow us to run our core functionality on multiple parachains. We are exploring the financial viability of owning our own parachain, but will initially deploy our code to third-party parachains.  As our transactional volume grows, we envisage a move to a dedicated parachain will eventually become inevitable to help keep our network fees to a minimum.

We will deploy our smart contracts on the Rococo test net as it presents an ideal environment to test functionality, performance, and security. We will migrate to parachains within the Kusama and Polkadot networks as they become available.

Our smart contracts will be designed to support ERC-20 and new token issuance protocols within the cross-chain ecosystem.  We will be taking advantage of the cross-chain interoperability that Polkadot offers through the use of Polkadot bridges and bridge parachains. We are also closely tracking the progress of other DOT-based projects who are building products that would be complemented by Polkalokr’s smart contract offering, such as token issuance projects who could benefit from our token locking functionality.

#### Why we are interested in this project?

Both of the co-founders are technologists at heart and have been involved in blockchain for over four years, from trading and investing in the comfort of our living rooms to setting up offshore mining farms in ice-cold data centers in Iceland, to managing a private fund for family and friends and to even running complimentary crypto classes to our local community - blockchain is in our blood.

We have taken a view that if we are really to make this project a success, we will need to dedicate 100% of our effort to achieve this aim.  As a result, we have resigned from our former posts, leased an office, and are now living and breathing Polkalokr.

Despite being proficient within the blockchain/cryptocurrency space, we too have been on the receiving end of rug pulls and exit scams which is why we decided to build a project that helps provide legitimate projects with a way to demonstrate their commitment and legitimacy to protect investors.

We believe that locking tokens is a great way to demonstrate commitment to a project and help prevent scams. Though many projects promise this, it doesn’t always happen. We want to remove the middleman and allow governance through code. Whilst this alone does not address all of the problems in the crypto space, we believe it is a step in the right direction.  In a space where regulation is ‘grey’, we need to be the beacons of light to help to set the standard.

### Project Details 

We have found that many of the existing blockchain projects prioritise pushing out code and functionality over taking a human-centered approach in designing their products and services. There are more than enough case studies proving the case for blockchain’s place in the modern world. We feel the next step is building products and services that make it easier for mass adoption. 

Polkalokr’s co-founders have previously co-founded a digital agency and understand the significant advantages a well-thought-out UI and UX can provide over potential competitors. We intend to allocate a portion of our own capital towards funding a team of best-in-class service designers. 

By taking a customer-focused approach, we can make a difference in the blockchain space and help enable blockchain adoption from the traditional markets. Once the detailed product specifications have been finalised, our design team will focus on developing a cutting-edge UX and UI using atomic design principles that will help complete the delivery of our vision.

Initial UI mockups will be produced during design workshops that will be conducted alongside development. Currently, our initial brand guidelines are complete and an initial version of our interface mock-ups is available on our website: https://polkalokr.com. 

However, please note that the images are only representational. The actual UI will be output from design workshops and will likely bear little resemblance to these initial designs.

#### Our Core Details

Programming Language of choice: ink!

Our smart contract will make of ink! to develop smart contracts for use within the FRAME Contracts Pallet. Our product line will be supported by the following objects and methods.

Gridlokr supports 3 types of locking transactions:

`LockTypes: 0, 1, 2`

`0: Team Lokr`
`1: Investor Lokr`
`2: Liquidity Lokr`

To create a new lock, we initiate the `CreateLock` function on our smart-contract. This takes the following parameters.

`string addresses[]` - An array of addresses, from and to. Allows for multiple recipient addresses.

`int lockType` - Determines the type of lock. Team Lokr, Investor Lokr or Liquidity Lokr.

`datetime lockTo` - date to lock to

`string currencyToLock` - the shorthand name of currency to be locked i.e “eth” or “dot”.

`decimal amount` - Integer value of the amount to be locked. 

`Object lockStrategy` - Simple locking strategy to be used.

The lockStrategy object will keep crucial details of the number of tokens to go to each address on release and the release dates.

`CreateLock(addresses[], lockType, toDate, currencyToLock, amount, lockStrategy)`

This function will generate an address where tokens will be locked using:

`GenerateLockingAddress()`

The CreateLock Function will then send tokens from the connected wallet address to the newly generated locking address(unique smart contract address). This will be done using the following function: 

`GetTokensAndLock(addresses[], currencyToLock, amount)`

Polkalokr will index locking addresses and tokens data and initiate a release function periodically to ensure tokens are released to relevant recipient addresses if the right criteria for token release are met.

`ReleaseToken(addresses[], currencyToUnlock, amount)`

We will map this functionality to a series of available APIs that will be used by our own Gridlokr website platform and in the future be made available for other businesses to make use of. 

Recipient addresses can be changed at a future stage.

`UpdateRecipientAddress(contractAddress, addresses[])`

This will look at the contract address holding the locked tokens, and update relevant stored data with the new recipient address details.

User data collected from our front-end APIs will be processed internally and result in the creation of ‘smart contracts’ via our APIs.  The diagram below depicts the Gridlokr logical data flow:

 

![ALT](https://img1.wsimg.com/isteam/ip/e6d8a875-9cc1-4215-986c-e9f6da07ba52/Gridlokr%20v0.3.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25 "diagram")

 

Our technology stack will be driven by the idea of MACH, microservices, API-first, Cloud-native and headless.

We will run the Gridlokr product line on grid.polkalokr.com this will be a headless CMS-driven application, that uses client side javascript to connect to Cloud-native serverless functions, message queues and more via APIs.

We will use substrate to build out our smart contracts, and use the scripting capabilities to deploy smart contracts via a DevOps process. 

### Ecosystem Fit 

Our closest competitor is Trustswap. They have developed token locking capabilities on the Ethereum network. Polkalokr differs in a few ways:

* First on Polkadot and Kusama ecosystems by building using the Substrate framework  
* Our products will be compatible with substrate-built parachains
* The core capabilities we are planning to offer extend far beyond any competitor in the space
* We are taking a customer-focused approach and will focus on delivering a simple UX/UI that lowers the technical barrier of entry into the crypto space

Vesting Module, built on the Substrate framework, provides a simple means for placing a linear release on an account’s locked balance.  Whilst this offers some of the capabilities that we intend to build for Gridlokr and provides a degree of validation that our end goal is technically achievable, the limitations of the Vesting module do not offer sufficient flexibility for our use case.

## Team :busts_in_silhouette:

### Team members
* Imran Ashfaq - CEO / Vision Owner
* Anis Ahmed Chohan - CTO / Solution Architect
* Lead Tester to be assigned
* Mid-Weight Smart contract dev to be assigned
* Senior Designer: Maccy Adalid

### Contact
* **Contact Name:** Imran Ashfaq
* **Contact Email:** imran@polkalokr.com
* https://polkalokr.com

### Legal Structure 
* **Registered Address:** 20-22 Wenlock Road, London, England, N1 7GU.
* **Registered Legal Entity:** Polkalokr Ltd.

### Team's experience
Our past development work has been subject to NDA and we are unable to share it. However our teams profiles are available on our website and their detailed work history is available via LinkedIn profiles provided below.

### Team Code Repos
* https://github.com/Polkalokr/Open-Grants-Program
* https://github.com/Polkalokr/gridlokr-smart-contract

### Team LinkedIn Profiles
* https://www.linkedin.com/in/imranashfaq/
* https://www.linkedin.com/in/anischohan/
* https://www.linkedin.com/in/maccyadalid/

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  2.5
* **Total Costs:** 18000 DAI

### Milestone 1 Document, Build, Test & Deploy
* **Estimated Duration:** 3 month
* **FTE:**  2.5
* **Costs:** 18000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | License | Apache 2.0 |
| 2. | Documentation |  We will provide both inline documentation of the code and a basic tutorial that explains how a user can execute the code via our front-end.  Users will be provided with transactions IDs that they can look-up to confirm the success |
| 3. | Testing Guide | The code will have integrated-test coverage (min. 70%) to ensure functionality and robustness. In the guide, we will describe how to run these tests.  The remaining test coverage (~30%) will focus on ensuring front-end integration to the code, via our APIs, is functioning as planned | 
| 4. | Article/Tutorial | We will release a medium article and tutorials that help users use our service and developers understand how our smart contract works. | 
| 5. | SmartContract: Gridlokr | We will create a smart contract that will run the following functions:-|
| 5a. ||CreateLock(addresses[], lockType, toDate, currencyToLock, amount, lockStrategy)|
| 5b. ||GenerateLockingAddress()|
| 5c. ||GetTokensAndLock(addresses[], currencyToLock, amount)|
| 5d. ||ReleaseToken(addresses[], currencyToUnlock, amount)|
| 5e. ||UpdateRecipientAddress(contractAddress, addresses[]) |  
| 6. | User Interface | We will design, and develop a simple interface that demonstrates smart contract functionality |
| 7. | PSP | We will write up a proposal for the PSP iniative. |  

## Future Plans
Long-term, we have a series of additional products that we aim to deliver in-line with our project road map.  We aim to go to market with each of these products upon completion of testing and eventually make them available to enterprise customers via our APIs.

## Additional Information :heavy_plus_sign: 
We have not applied for any other grants, however, may look to reach out to parachain projects in the near future.  We will also be reaching out to projects who we feel will benefit from our solution and can add value (development/integration) to our project.
 
