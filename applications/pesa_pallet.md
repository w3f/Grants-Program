# Open Grant Proposal

* **Project:** PESA - On-ramp/off-ramp to crypto/local currencies for Polkadot 
* **Proposer:** [jdoshi1](https://github.com/jdoshi1)
* **Payment Address:** 3K37k6BQ1JwAczAyNzckS4cGRqhpL6UgYJ

## Project Overview :page_facing_up: 

PESA is a decentralized cross-chain mobile money protocol that enables anyone to buy, sell, send, receive, lend, borrow - crypto, and mobile money (i.e. tokenized minutes, data, WiFi) globally using a phone number.

### Overview

The goal of this project is to make telecom and financial services open and accessible to all. Anyone with a mobile phone can utilize PESA to:
  * Access carrier-independent voice, text, data & WiFi (mobile money) 
  * Send/receive crypto and mobile money to/from any phone number 
  * Buy/sell crypto and mobile money using a phone number
  * Lend, borrow, crypto assets using a phone number

PESA is structured as a decentralized carrier and acts as a mobile money system. The traditional mobile money systems like [m-pesa][1] use phone numbers to uniquely identify users. Similarly, PESA uses tokenized phone numbers. A phone number is universal across chains and mapped to respective wallet addresses.

PESA aims to serve as an on-ramp/off-ramp to crypto/local currencies for the Polkadot users, applications, and developers. This is enabled by allowing users to purchase tokenized voice, text, data and WiFi credits using credit card, cryptocurrencies and eventually cash. To achieve this, we can either create our own Substrate-based blockchain or Parachain or work with Parachains like Plasm, Moonbeam, Acala, etc.


### Project Details 

As a first step, we are proposing creating a pallet to perform Phone Number to Address resolution, reverse resolution, and execute transactions such as send & receive - crypto tokens, mobile money (i.e. tokenized minutes, data and WiFi) using phone numbers. 

#### PESA pallet

The goal of PESA pallet is to resolve the phone number to an address and allow the phone number to execute transactions - send, receive. It will be extensible to allow more functionality like lend & borrow, etc. Furthermore, it will be beneficial to dapps building financial systems (DeFi) including allowing unbanked users to onboard onto the system by just using a phone number.

#### Interface and Design

The PESA pallet will expose the following callable functions:

`register` - allows the user to register a Phone Number to its address

`resolve` - allows any user to resolve a Phone Number to an address

`reverse_look_up` - allows the user to look up Phone Number from an address. Provided the owner of the phone number/address opted to make it public.

`transfer` - allows the owner of the Phone Number/address to transfer ownership of the Phone number to another address.

`send` - allows the owner to send tokenized mobile money (i.e. mins, data and wifi)  and other tokens built on the parachain(s) using the Phone Number

Mockups of PESA Dapp 

* Register Phone number with wallet address
  
  ![Register](https://cdn.discordapp.com/attachments/486098447410266112/766581062062702602/Screen_Shot_2020-10-16_at_1.14.08_AM.png)

* Verify Phone number ownership
  
  ![Verify](https://cdn.discordapp.com/attachments/486098447410266112/766581059923738694/Screen_Shot_2020-10-16_at_1.15.35_AM.png)

* Send transaction

  ![Send](https://cdn.discordapp.com/attachments/486098447410266112/766581053937942528/Screen_Shot_2020-10-16_at_1.39.04_AM.png)


### Ecosystem Fit 

All web and mobile wallets like Airgap and Polkawallet can use PESA pallet to resolve phone numbers and access other pallet functions mentioned above. DeFi applications can also use the pallet to allow users to access financial services using a phone number.

## Team :busts_in_silhouette:

### Team members

* Suruchi Gupta (Founder & CEO)
* Jinesh Doshi (Engineering head)
* Leo Anbarasan M (Tech Lead/ Lead developer)

### Team Website	
* https://wificoin.com (PESA website WIP)

### Legal Structure 

Wificoin, a Delaware C corporation, 3165 Olin Ave, San Jose, CA 95117. We also have “Wificoin Foundation” incorporated in Panama. 

### Team's experience

The team has extensive experience building and shipping web, mobile apps, and DevOps tools. Suruchi and Jinesh are co-founders and both hold a Masters in Computer Science. Prior to founding Wificoin, Suruchi was a full stack developer and Tech Lead at Juniper Networks. Jinesh in his most recent role is a Senior Developer at Salesforce, building DevOps tools. Leo has been building web2 applications for the last 12+ years. 

In the last year, Wificoin has built a pay-as-you-go, mobile-first carrier (a precursor to the decentralized carrier), that offers on-demand voice, text, data, and WiFi globally without needing to swap sim cards. Today, Wificoin users can access the internet on mobile via LTE eSIM in 45 countries (soon 113 countries), on the ground at 68M+ hotspots in 180 countries, on flights at 5000+ airplanes on 37 airlines (55% market penetration). In addition, users can call and text in 200 countries and get local phone numbers in US & Canada (soon 10 countries). Wificoin apps have been featured as a #1 Top grossing app in the Travel category several times. Over 11M credits (proxy for token) have been consumed by users. 

The team has also integrated with Telecom operators like AT&T, Claro, etc.

### Team Code Repos
* No public repos to share yet.

* Apps in App store & Play store:

  Wificoin - [iOS](https://apps.apple.com/us/app/wificoin-gogo-inflight-wifi/id1444024115), [Android](https://play.google.com/store/apps/details?id=co.wificoin.app)
  
  Hoom - [iOS](https://apps.apple.com/lr/app/hoom-second-line-phone-number/id1508691693), [Android](https://play.google.com/store/apps/details?id=io.hoom.app)


### Team LinkedIn Profiles
* https://www.linkedin.com/in/guptasuruchi/
* https://www.linkedin.com/in/jineshdoshi2610/
* https://www.linkedin.com/in/leo-anbarasan-m-2b0b3a71/


## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** 2.5 months
* **Full-time equivalent (FTE):** 3
* **Total Costs:** 2 BTC

### Milestone 1 - Implement Substrate Pallet "PESA"
* **Estimated Duration:** 1.5 months
* **FTE:**  1.5
* **Costs:** 1 BTC

| Number | Deliverable            | Specification          |
|--------|------------------------|------------------------|
| 1.     | Substrate pallet: PESA | 1. Pallet is expose a function called register to allow caller to register the phone number to their wallet address<br>2. Pallet will allow users to perform Phone Number to address look up.                                 |
| 2.     | Create a dapp          | Create a custom chain with the Pesa pallet and a dapp to allow users to enter a phone number and associate that with the owner's wallet address. Users will be able to perform address lookup by providing a phone number.   |
| 3.     | Unit tests             | The code will have proper unit-test coverage to ensure functionality and robustness. Readme will provide details on how to run the tests.                                                                                          |
| 4.     | Dockerfile             | Provide a docker image with a substrate node using our pallet.  |
| 5.     | Documentation          | We will provide both inline documentation of the code and a basic tutorial that explains how a user can interact with the substrate runtime to call the Pesa pallet’s APIs.                                                   |

### Milestone 2 — PESA pallet send, receive tokens using phone number and reverse lookup
* **Estimated Duration:** 1 month
* **FTE:**  1.5
* **Costs:** 1 BTC

| Number | Deliverable            | Specification          |
|--------|------------------------|------------------------|
| 1.     | PESA pallet - send, receive and reverse lookup functions | 1. Pallet will allow users to send and receive tokens using phone number instead of using complex hash.<br>2. Pallet will allow users to perform reverse resolution address to Phone number if the users opted to allow during set operation.               |
| 2.     | Demo of the above functionalities using a web dapp       | Dapp showing these features                                                                 |
| 3.     | Dockerfile                                               | Provide a docker image with a substrate node using our pallet.                              |
| 4.     | Unit Tests and Documentation                             | Provide documentation and steps to run the substrate node with Pesa pallet and how to use web dapp to interact with it.                                                                                                                                         |


### Community engagement

The tutorials and Documentation that we provide will be published as articles in Medium and other social media platforms with due mention about Web3 grant.

We also intend to engage community by providing grants in our tokens to add more support and improve our codebase.

## Future Plans

Our goal is to make telecom and financial services open and accessible to all. So we plan to continually increase the services that can be accessed using phone numbers (for eg: lend, borrow), aiming to unlock access to advanced financial services for the unbanked as well. 

## Additional Information :heavy_plus_sign: 

We are going to use this pallet for building a borderless mobile money system but anyone can extend it to support address resolution for other non-fungible tokens.  

[1]: https://www.vodafone.com/what-we-do/services/m-pesa
