# XCMSend

**Team Name:**
*Rust Syndicate x Decentration*

**Payment Address:** (USDT on polkadot)
15iN8aQnPuX4vjcovenu15EtnYfcwbtiXjeKGRN3KkkzNNtt

- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

- If the name of your project is not descriptive, a tag line (one sentence summary):
  
  XCMSend: make cross-chain transfers with ease with real-time status updates, all in one place. 

- A brief description of your project:
  
  XCMSend aims to be the seamless way to interface with chains via XCM, designed to provide an unbiased platform, and user-friendly cross-chain message transfers within the Polkadot ecosystem. Think 
  of a no-code layer to compose transactions.
   
- An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama:
  
  We are building a building a utility that interfaces with relay chain and parachains that have established HRMP channels, enabling cross chain transfers.
  
- An indication of why your team is interested in creating this project.
  
  We have experience working with xcm connecting parachains via hrmp, building Defi and Governance applications. We see the potency of XCM and are interested in building tools that improve the 
  experience for standard non-technical users as well as developers who want to build the next generation of XCM Dapps.


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?

  XcmSend is in the category of a utility/tool, which will make interacting with relay/parachains in relation to cross-chain, simple and painless.
  
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  
  Our target audience are users of polkadot/kusama and parachains which are enabled to make xcm tranfers. Within that userbase are developers such as ourselves who have certain pains when testing 
  our integrations. Those pains include composition and execution status updates, which is our initial focus, and which will benefit all, including the standard non-technical yet competent users. 
  
- What need(s) does your project meet?
 
  As of the present composition, sending asset transfers across distinct parachain connected networks remains a task that lacks inherent user-friendliness. A relatively modest array of decentralized 
  exchanges, including entities such as HydraDX and Polkaswap, are available to address this challenge. Notably, the proliferation of XCM adoption within the DotSama ecosystem is exhibiting a 
  notable and continuous expansion. We want a bring a a user-friendly way for anyone to send assets from one parachain to another. Opening up XCM transfers for everyone.

Xcm Adoption in the Dotsama ecosystem is growing and growing:

![](https://lh6.googleusercontent.com/Qj9NNiG_YQk__eaLh2Q_BOpuX7xe0uU19ipJ0fumFAMLAW2cjfI4PDNkqea0V30Dzsm_BdQJ0d536JyvbCuGn049489sFSu4SYjlcDaydQN-QRId9vwlYT4DRUIeKzAV3RLWOqcUoYd74m9S4a84AM0)

XCM Traffic chart from  2021/04/12 to 2023/05/07.

We want to enable everyone to be able to spin up their own ;lightweight instance of XCMSend and easily be able to send assets from one chain to another.

Data Source: 
Polkaholics: [https://github.com/colorfulnotion/substrate-etl](https://github.com/colorfulnotion/substrate-etl)

Replicate data:

```shell
$ git clone https://github.com/colorfulnotion/substrate-etl && cd substrate-etl

$ ./generateNetworksSummary

$ cat SUMMARY.md
```

_Note: If your getting curl connection timeout errors, we have added a pr to [fix this](https://github.com/colorfulnotion/substrate-etl/pull/10)._

**Why XCMSend?**

In a nutshell, XcmSend aims to simplify the process of xcm transaction curation and execution, as a non-partisan, open source project?

-   **Non-biased XCM Transfers**

Auto index of open XCM channels and lease slots - Allowing XCMSend to offer a broader section of destination and receiver chain options, unlike previous projects where source and destination chains are limited and cherry-picked by the responsible Team. With XcmSend we are letting the networks decide what the available transaction routes are. Promoting and utilizing the decentralized ecosystem of Dotsama.

-   **A Gateway for everyone into XCM**  
XCMSend is not only sending an asset cross-chain. It removes complexity from crafting XCM transfers and opens a world of possibilities for high-level/non-technical users, as well developers by being an important building stone for anyone that wants to utilize XCM in a hassle-free and high-level way.  

-   **Empower XCM Adoption**  
We want to open the doors to XCM for dapp developers, web2 projects and builders in a high-level way.


-   **Increase XCM transaction volume**

By enabling more users to utilize easy to send XCM asset transfers, our ambition is to take a good share of the growing XCM traffic.

-   **Not a DEX**

XCMSend does not manage liquidity pools, no limit orders, we only send assets from chain A to B with XCM.

**Non-custodial and user friendly**

- **The need for simplification and real-time updates**
  
XCM has a growing share of all transactions in the ecosystem. Composing calls is hard and time-consuming. Finding out the status of the execution can become a jigsaw puzzle. Here is where we are going to focus on improving the experience:

 - **Before sending:** By abstracting away the complex and painful process that goes into curating an xcm call. A user does not manually need to draft the extrinsics needed for a XCM Transfer, with XCMSend we want to bring a seamless DeFi experience for anyone that wants to send assets with XCM.

 - **At execution**: by providing real-time dynamic status updates when executing the call, all in one place.

In summary:

-   Make xcm calls in just a few clicks.
-   Get status updates across journey all in one plce. 
-   Easily test XCM asset transfers between chains
-   More liquidity to the ecosystem/empower DeFi users
-   Community owned and OpenSource with MIT License


#### What is XCMSend?

XcmSend is a public Xcm asset transfer app that is open source and serverless, which interfaces with blockchains, making it simple for users to send assets between chains.

"Does what it says on the tin". Powered by the XCM protocol, our platform simplifies the process of cross-chain transfers.

Anyone can create their own instance, and XCMSend.com will also host an official instance. 

#### Who will use XCMSend?

-  **(non-technical)Defi users and the average Joe** - Anyone can send one asset from one chain to another using XCMSend in a hassle-free way, allowing access to wide varierty of different assets on different chains.

-  **Web2 businesses and developers** - that want to interact with the dotsama ecosystem throw XcmSend's simplified xcm json api.

-  **Parachain teams** - With our ROC instance parachains that are connected to rococo/ROC will be able to test their xcm recieving implementations, verifying that tokens can be sent and receieved using an open channel.

-  **Third party teams/developers** - XcmSend will be under the MIT license, allowing anyone to clone, customize, deploy and modify XcmSend based on their needs.   

-   **Dapp Builders** - XCMSend empowers dapp developers to interact with a wide varierty of different assets on different connected chains. By providing an easy-to-use interface for XCM transfers, we are contributing to interoperability by allowing dApp developers to seamlessly exchange assets and data between different parachains networks. This can expand the reach and functionality of their dApps.



### **Project Details**

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components

**Mock interface:**

1: (V0)Send asset
![](https://lh3.googleusercontent.com/P-yFl3Mh6cyg5uXQJD8Q8J4f9K16JamfIV7Cwa8rY6H2jVAPIUoz8xl1uyiyf9BysMXK5d4_YoV53tpTjPHxzlVsJqGatk13KEoPijQWc1ziW15MbM-oSkxOVx791aAliAKjaBFTa_pQXqxBKryu2Qg)

2:  (V0) Transaction Broadcasted and Completed
![](https://lh6.googleusercontent.com/OcNgY37AQHfw1kpGPZiNoAnwM93wlgbURtPJc8Xa_6foezh_h5lA3u9DmmuQ49XJk2AksSgmnd40u6q39uhQTiktaIrF66Ws6AfbS1biJxuBZV1A8YgN5otnFGlrtDx6N0x15R7GRXwXs_f-CBf62OM)

3: (V1) Transaction Broadcasted and Completed
![](https://lh3.googleusercontent.com/d7Ce03UkdiNqylBQdfjnz1c-l5WXClpDeAfOtSeh9_9NBVUUWF95s2AN496yYOpAD7A9ui0iyc2tR31z4Roelpz5FvS-UzXQ_4LtlKmu7GCdR7U673d9EoRfyUhSxAiH9ZKwuik_jPUhbCV4gEC6f0g)

As XCM transactions are more complex than a simple balance transfer on a single chain, the average time of a transaction is higher and more “moving parts” means there is an increased chance for errors during the transaction life cycle. This is why it is pertinent that the user is informed of the transaction status. We will enable real-time dynamic updates. As shown in the above screenshots. V0 for Milestone 1 and V1 for Milestone 2.

- Data models / API specifications of the core functionality: Mockup designs of the interface can be found above.  

- An overview of the technology stack to be used
UI: React, Javascript, Typescript, Zustand state management, React Flow, Polkadot-js extension
API: Rust, Substrate utilities.

- Documentation of core components, protocols, architecture: We will provide user guides and documentation publicily linked from the main git repository. 

- PoC/MVP or other relevant prior work or research on the topic
- What your project is _not_ or will _not_ provide or implement
  - Like previously stated, XcmSend is not a DEX so we will not provide limit orders, trading one token for another with a market maker and/or orderbook functionality.

we will provide generic functionality where we can that covers multiple chains, however if there is a unique integration required for a parachain, this will be left out of these milestones. Where will be as explicit as possible about which chains we will support, however that support could be generalised to other chains. We will make simple for other projects to clone our project add their chains, then can their host that instance themselves and/or make a PR to XcmSend official repo. 
   

### **Legal Structure**

-   Registered Address: Vakhtang Gorgasali Street Nr 14, Office Door number 30, Tbilisi, Georgia
-   Registered Legal Entity: Rust Syndicate LLC

## **Team 👥**

### **Team's experience**

**Filip "flipchan" Kalebo** - Rust Syndicate  - Developer, DevSecOps, Previously worked on early stage Picasso chain, Edgeware Solo chain and recently “Uptest” that is funded by the Polkadot Treasury.

**Ramsey Ajram** - Decentration - Substrate Developer, Product, Frontend, took a parachain into production on Kusama, W3F funded for Supersig (pallet and UI) [https://subverse.decentration.org](https://subverse.decentration.org). Polkadot Blockchain Academy (PBA) Alumni.

**Ace Salazar** - Rust Syndicate  - Project coordination, Previous experience working on projects for the Rust programming language’s ecosystem.  

**JelliedOwl(Paul)** - Substrate based chain rpc provider, trusted community member, Moderator of the Polkadot Multisig.


### **Team Code Repos**

-   [https://github.com/uptest-sc/](https://github.com/uptest-sc/)
-   [https://github.com/decentration](https://github.com/decentration)
-   [https://github.com/kabocha-network/](https://github.com/kabocha-network/)
-   [https://github.com/flipchan](https://github.com/flipchan)

#### Proven Track Record:

The team has delivered previous projects in the substrate ecosystem:
- Flipchan migrated Edgeware from an old version of substrate to the new version, which required complex refactoring and storage migrations. 
- Based on the above experience, Flipchan was then grant funded by the polkadot treasury to build Uptest, a library to test runtime upgrades.
- Ramsey launched an experimental parachain on behalf of Edgeware called, Kabocha. 
- Decentration (lead by Ramsey) was grant funded by W3F to create tools to build decentralised orgs (pallet and UI) called Supersig.  

## **Contact:**

Contact name:

Filip Kalebo - Rust Syndicate

Contact email:

[blockchain@firosolutions.com](mailto:blockchain@firosolutions.com)

Contact name:

Ramsey - Decentration

Contact email:

[ramsey@decentration.org](mailto:ramsey@decentration.org)

https://decentration.org


## **Development Roadmap 🔩**

### Overview

- **Total Estimated Duration:** 8 weeks

- **Full-Time Equivalent (FTE):**  2 FTE

- **Total Costs:** 30 000 USD to be converted into USDT(on Polkadot)

**Milestone 1: XCM SEND MVP**

FTE: 2

Duration: 4 weeks

Costs: 15000 USD




| Number | Deliverable |Specification |
|--------------|-----------|------------|
| 0a.    |  License | MIT |
| 0b | Documentation | We will provide tutorials and usage examples of all features and milestones delivered. |
| 0c      | Testing and Testing Guide  | In our published documentation and articles we will cover the steps needed to test XCMSend       |
| 0d      | Docker  | We will publish a docker image that users can use to test XCMSend locally       |
| 0e      | Article  | We will publish an article that walks the end user hand in hand on how to use XCMSend       |
| 1      | XCMSend UI (MVP)  | Build the first version of the XCMSend UI which begins with sending crosschain assets transfers.        |
| 2      | Browser wallet integration  | Allowing support for some of the most used wallets in the dotsama ecosystem: Subwallet, Talisman, Polkadot.js and metamask by integrating [Subconnect](https://github.com/Koniverse/SubConnect)       |
| 3      | Rococo XCM Transfers | We will enable teleporting of assets across chains within the Rococo network. Such as ROC from Rococo to AssetHub.       |



Milestone 2:

FTE: 2

Duration: 4 weeks

Costs: 15000   


| Number | Deliverable |Specification |
|--------------|-----------|------------|
| 0a.    |  License | MIT |
| 0b | Documentation | We will provide tutorials and usage examples of all features and milestones delivered. |
| 0c      | Testing and Testing Guide  | In our published documentation and articles we will cover the steps needed to test XCMSend |
| 0d      | Docker  | We will publish a docker image that users can use to test XCMSend locally       |
| 0e      | Article  | We will publish an article that walks the end user hand in hand on how to use XCMSend       |
| 1      | Support 3 chains or more  | Support at least 3 different parachains as source chains to send assets from  |
| 2      | Json-rpc api  | We want to enable users to send XCM Transfers in a high level way and we will provide a basic api that can be used by client libraries, to seamlessly broadcast XCM asset transfers.       |
| 3      | Parachain discovery  | XCMSend will track which parachains are currently connected and filter the selection based on that. The lease times of each parachain needs to be accounted for as well.        |
| 4      | Auto index XCM channels  | Filter the options for source and destination chain based on the open channels that are available       |





## Future Plans:

-   We aim to build and maintain XCMSend publicly, after the first version of XCMSend is live and we have gathered enough community feedback. We plan on deploying a version for Kusama. Allowing parachains connected to Kusama to send assets using XCM. (And thereafter, Polkadot.)
-   For more experienced users we also want to add an “Advance” tab where the “power user” can customize the transaction after its needs.
-   This advanced tab may sprout into building a  low code app containing all substrate blockchains, pallets, and relevant APIs that can be dragged and dropped and connected into workflows to build the next generation of DApps (enabled by XCM and bridges).
-   Remark NFT integration
-   We also want to support Pallet-supersig, allowing DAO’s and groups to send XCM Transfers to and from pallet-supersig origins.

## **Additional Information ➕**

How did you hear about the Grants Program? The team is familiar with the web3 foundation from previous projects.
