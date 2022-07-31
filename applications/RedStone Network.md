# W3F Grant Proposal

- **Project Name:** Redstone Network
- **Team Name:** Redstone Network
- **Payment Address:** 0x24cfc36f699dacc5cb652630ddd894a8df658233 (BNB Smart Chain BEP20 USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

We are sincerely requesting a funding grant from the web3 Foundation to build a transaction firewall that will function as a last resort security barrier when user asset protection solutions fail. There have been several serious security incidents recently, including major asset losses due to the theft of private keys on the harmony and Robin bridges. In the blockchain world, having a mnemonic or private key for an account is equivalent to getting ownership of that address; when a hacker obtains a user's mnemonic or private key, he or she is able to take all the assets in a short period of time without any problem, a situation that obviously should not exist all the time. When this problem is not solved or alleviated, the Web3 world is full of uneasiness and suspicion, and this situation will make it difficult for the Web3 world to gain larger scale support and popularity.

The Redstone Network is a network of trigger circuits where users combine and arrange simple atomic trigger components according to certain rules and processes to eventually implement a series of automated operational circuits. We propose transaction firewall middleware that can function between any blockchain network, regardless of the cross-chain mechanism and network topology used to execute asset transfers, and regardless of the type of assets traded, we will construct a firewall of different security levels for users. With the help of triggers and machine learning technologies, we will provide users with passive defense and proactive alerting capabilities.

We will work with parallel chains in Polkadot/Kusama to build and deploy the firewall function to enable a higher level of security for parallel chain asset interactions within the ecosystem; in addition, we can work with project parties or wallets in other ecosystems to provide them with this unique defense mechanism, ultimately reducing the risk of asset security across the Web3 world.

### Project Details

For the transaction firewall functionality, Redstone Network will build a set of on-chain/off-chain trigger components and their implementations. In general, users will not be aware of the firewall's operation, and the firewall will truthfully notify users of potential security risks when there are triggered alarms on the chain.

#### Passive defense and active alarms
* We build a series of stateless atomic trigger components, including on-chain triggers (quantity trigger, time trigger, price trigger), off-chain triggers (mail trigger, discord trigger, slack trigger) and off-chain message interaction components, which are responsible for actively obtaining external information or pushing messages to a specified server.; 
* Analyze transaction characteristics and behavior, design transaction protocol analyze the transaction characteristics and behavior, design the transaction protocol, check whether the basic information and check information of the transaction match through protocol parsing, and initially determine the validity of the transaction; 
* according to the trigger and the transaction protocol, with the idea of social recovery and multiple signatures, formulate different security level trigger policies for users, including power grabbing mechanism, freezing mechanism and alarm mechanism.

#### Intelligent termination of transactions with evil address monitoring
The user-configured security scheme can effectively defend against known security problems, but not against unknown or unconfigured behaviors. By analyzing the transaction data recorded in the database under the chain, the transactions are analyzed according to the dimensions of transaction time, transaction frequency, transaction address, transaction direction, and transaction amount, and if the transaction behavior is different from the daily behavior, the meltdown mechanism will be triggered and alarmed; receiving the supervision instruction from a chain, the address that is doing evil and the derived address will be dynamically analyzed and the transaction meltdown mechanism will be triggered.

For the application scenario of transaction firewall, it is mainly divided into token assets and NFT assets. Users can choose the type of asset that needs to be configured with the firewall, either for a certain token, or to protect the account that issues NFT assets.

**Technology stack**
* Rust, Substrate
* Go, node.js

### Ecosystem Fit
This project will be developed, deployed and run based on the Substrate framework. Unlike other trigger projects, with the advanced features of OCW, we are able to provide users with an advanced on-chain alert push mechanism, which will help shorten the time for users to get critical information. At the same time, rooted in Polkadot/Kasuma ecology, as a parallel chain, the trigger interface on it will provide additional application features for all parallel chains, and with the help of relay chains, it can facilitate unique transaction defense capabilities for other parachains. We note that we are entering a completely new area that will provide an unprecedented protection experience for the blockchain space once our project is in actual operation.

## Team :busts_in_silhouette:

### Team members

-   Bin Guo
-   Li Smith
-   yiwei Shi
-   Leon

### Contact

-   **Contact Name:** Bin Guo
-   **Contact Email:** bin.guo@deeper.network

### Legal Structure
(we are in the process of registering the legal entity)
-   **Registered Address:** N/A
-   **Registered Legal Entity:** N/A

### Team's experience

**Bin Guo**  
- Over 9 years of experience in software development and project management, engaged in work related to blockchain and big data, and worked in a core research institution of State Grid (Fortune 500).
- Polkadot senior ambassador, Substrate Evangelist, and early participants in the Polkadot ecosystem.
- Github: https://github.com/AmadeusGB
- Email: amadeusgb123@gmail.com

**Smith Li**  
- Over 9 years of working experience in various aspects of computer programming.
- Worked in the blockchain industry for 3+ years,  a blockchain development engineer, familiar with polkadot, bitshares, fabric, etc.
- Hackathon winner as a team tech leader: Winners of Polkadot Hackathon 2022.
github: https://github.com/baidang201

**yiwei Shi**  
- Art and management background, worked for Hearst, MSN, responsible for market and product, more than one year of blockchain development experience, familiar with computer science, cryptography and different economic mechanisms, good at Go and Rust development。Hackathon winner as a team member: Winners of Polkadot Hackathon 2022
- Github : https://github.com/shiyivei
- Email : shiyivei@outlook.com

**leon**  
- Over 7 years of working experience in web development experience ande more than one year of blockchain development experience, familiar with FrontEnd, good at Js,Ts and Rust development.Hackathon winner as a team member: Winners of Polkadot Hackathon 2022
- github: https://github.com/walle233

### Team Code Repos
We have forked substrate-template repository code to implement on-chain triggers (quantity triggers, time triggers, price triggers) and off-chain triggers (email triggers, slack triggers) with the help of decentralized off-chain communication components, in addition, we have implemented a simple oracle machine。
- [difttt-node](https://github.com/difttt/difttt-node)
- [evm-proxy](https://github.com/difttt/evm-proxy)
- [slack-notify](https://github.com/difttt/slack-notify)
- [oracle_price](https://github.com/difttt/oracle_price)
- [frontend](https://github.com/difttt/frontend)

## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 20000 USD

### Milestone 1 Example — Multiple passive defense mechanisms, as well as on-chain and off-chain alerting mechanisms

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide **inline documentation** for the code and a **tutorial** for users on how to configure the in-chain passive defense step, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** to explain the concept, design and implementation of the design in Grant and how to use these features in the blockchain)
| 1. | Passive_Defense Module | Each transaction can be protected based on limit configuration, freeze configuration and power grab configuration. When configured to modify the cooldown time of the basic configuration, any attempt to modify before the cooldown time comes will not take effect. |  
| 2. | Active_Alarming Module | Saving user in-chain alerting configurations and invoking in-chain/off-chain alert triggers to send level-specific/event-specific alert messages. |  


### Milestone 2 Example — Intelligent meltdown mechanism, including abnormal trading meltdown, evil trading meltdown

- **Estimated Duration:** 2 month
- **FTE:**  2
- **Costs:** 12,000 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** explaining the concept, design and implementation of smart meltdowns and how to use these features in the blockchain)
| 1. | Analyzer Module | This module implements the transaction analysis function, where user transaction characteristics will be recorded and analyzed according to a counter, and uploaded to the blockchain when abnormal results appear in the analysis. Users can be alerted or directly melted down when potentially abnormal transactions occur, depending on their own security needs considerations. |  
| 2. | Tracker Module | This module implements a record of transactions within a certain time period, and when the power grabbing mechanism is triggered, any transfer address at that address can be set to be in a temporary frozen state within a certain time period. |  

## Future Plans

Conceptualizing the application with the trigger concept, implementing the transaction firewall first, and refining our design based on user feedback.
Implementation steps.
* develop on-chain/off-chain triggers for firewall requirements.
* refining the firewall design based on user feedback.
* implementing cross-chain transactions and providing transaction protection for cross-chain links.
* configure different levels of defense strategies based on implementation experience.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
How did you hear about the Grants Program? We heard about the Grants Program from the Web 3 Foundation Website, as well as personal recommendations from Polkadot community members.
