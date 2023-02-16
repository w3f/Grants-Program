# Polkadot wallet connector aggregator for DApps

- **Team Name:** Maze2 SA
- **Payment Address:** 0xb8f6b3b3b0d3bbfb46e0d34b9d7706d0941062c8 Ethereum (USDT)
- **Level:** 1


## Project Overview

This proposition answers the "wallet-aggregator-library RFP #1465" 1st phase (research): [https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/wallet-aggregator-library.md](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/wallet-aggregator-library.md).

### Overview

- **What:** A Polkadot wallet aggregator connector for dapps running on Polkadot (Substrate / Polkadot / Kusama) to allow DApp developers to easily integrate all known wallet browser extensions. 
- **Why:** While working on our opensource wallet and different DApps, we saw that connection in DApps, is a weak point of the Web3 ecosystem.
- **Scope:** Technical research in order to deliver technical specifications for a Polkadot Wallet Aggregator.

### Project Details

#### Objective

Confirm the technical viability and create detailed technical specifications for the most elegant way to provide this Polkadot wallet aggregator connector feature for dapps. 

#### Possible approaches

We will perform a research to find all current viable implementations connecting to Polkadot DApps (such as [polkaswap.io](https://polkaswap.io/#/wallet) and [kodadot.xyz](https://kodadot.xyz/)). We will then evaluate how practical and viable these solutions are and take these into account when providing our suggestion for specifications.

Most likely, our research will confirm that the approach of creating 2 different plugins working together on the same principle as wagmi / rainbow-kit makes most sense in the following interaction:


1. Wagmi-like SDK Library : like wagmi it would be a the low level interaction for devs who just need the react hook to communicate with the different walets (wagmi example : [wagmi.sh](https://wagmi.sh/)).
2. Rainbowkit-like Modal library:  It would use the wagmi-like library, but adding all ui / ux components to be integrated easily by DApp front-end developers (rainbow-kit example : [rainbowkit.com](https://www.rainbowkit.com/)).


To summarize we will:
1. Perform deeper research of existing solutions on Polkadot
2. Document existing solutions on Polkadot, rate their viability and reusability of their open-source components
3. Determine which solution the Wagmi/Rainbowkit or newly found solution based on our research is best
4. Write a report on our suggested solution
5. Write detailed technical specifications of our recommended solution for a Polkadot wallet aggregator connector for dapps.


#### List of wallets identified and to be integrated in the research

**Desktop**

Our preliminary research pointed out these initial wallets to be tested :

- Enkrypt (seems to use same logic as polkadot{.js}
- polkadot{.js}
- SubWallet
- Fearless Wallet
- Talisman
- CLV Wallet
- Ledger

> **Note:** More wallets might be identified and added to the list when performing the in depth research.


**Mobile**

In our preliminary research, we did not find a “wallet connect” equivalent for the Polkadot environment. 

> :exclamation: **Important:** If and when a wallet connect feature will be available on Polkadot, it will be necessary to implement it in our library in order to allow any Polkadot wallet that implements the “wallet connect” feature to connect the wallet through QRcodes displayed Dapps (or an applink on mobile).


### Ecosystem Fit

- Connecting easily to DApps with a wallet is a key component of any blockchain ecosystem. Rainbow-kit is providing this feature on the ethereum ecosystem but this essential feature is currently missing on Polkadot, slowing down Polkadot user adoption and development of DApps.
- This project will help to integrate easily the most known Polkadot wallets in any DApp running on the polkadot environment.
- It will be used by all DApp front-end developpers to simplify the integrations of wallet connection and blockchain interactions in order to focus on the work specific to their DApp's front-end.

## Team

### Team members

- Team leader/Project manager: Tobias Kuster
- Researcher & specification writer: Gilles Hemmerlé, Olivier Bitsch and Aram Sukiasyan

### Contact

- **Contact Name:** Tobias Kuster
- **Contact Email:** tobias@maze2.ch
- **Website:** https://maze2.ch

### Legal Structure

- **Registered Address:** 
    Route de la Galaise 34, 1228 Plan-les-Ouates
- **Registered Legal Entity:** 
    Maze2 SA

### Technical Team's experience

* **Gilles Hemmerlé**
    * Co-developed a first version of the sesame wallet in order to be ready for Alephium's mainnet launch and allow users to subscribe to cloud-mining services and follow their mining rewards **(Grant Alephium)**
    * Co-developed sezame-wallet application v2 that improved the coingrig open-source API in order to add Aventus' blockchain integration **(Grant Aventus)**
    * Lead developer of a DApp for an NFT collection (launch planned mid-March 23rd), tried multiple wallet implementations (including rainbow-kit). The rainbow-kit implementation having some blocking issues, I ended up rewriting a basic approach on top of wagmi to support different ethereum compliant wallets.
    * Development of KYC platform for a private financial company in Geneva
    

* **Olivier Bitsch**
    * Developed digital assets aggregator for multimillion Geneva based FINMA regulated crypto investment fund
    * Co-developed and managed a private exchange platform for a private financial company in Geneva
    * Co-developed the first sesame wallet application during the Alephium mainnet launch. Developed payment system and deployed the environment with hundreds of GPUs to help users to mine DAY-1 on the alephium PoW blockchain.
    * Co-developed and managed the development of the sezame-wallet application v2 and performed research/proof of concept for open source SDK to quickly bootstrap our wallet v2
    * Co-developed and managed the integration of the Aventus on our open-source wallet **(Aventus Grant)**

* **Tobias Kuster**
    * Team leader on [Airdrop.com](https://airdrop.com) platform growing userbase on Telegram over a period of 7 months (project is currently on hold until v2)
    * Team leader/project management on an NFT project (name to be disclosed under NDA) including construction of parcel on Decentraland Metaverse.
    * Team leader Sesame wallet v1 and Sezame v2. 
    * Team leader and point of contact for grants (**Aventus Grant** and **Alephium Grant**).

* **Aram Sukiasyan**
    * Co-developed a private exchange platform for a private financial company in Geneva

> **Note:** This is our first application for a web3 Grant. We have received Grants from other organisations in the past such as Alephium and Aventus ([Aventus grant](https://www.aventus.io/aventus-network-announces-results-of-latest-governance-proposal/)) for their blockchain integration in our open source wallet.

### Team Code Repos

Maze2 repositories:

- https://github.com/maze2-org/sezame-wallet
- https://github.com/maze2-org/sezame-sdk

Member's personal github addresses:

- Gilles Hemmerlé: https://github.com/gilles-hemmerle
- Olivier Bitsch: https://github.com/olivierb2
- Tobias Kuster: https://github.com/Tobiask-iabsis 
- Aram Sukiasyan: https://github.com/lazymak3r


### Team LinkedIn Profiles (if available)

- Gilles Hemmerlé: https://www.linkedin.com/in/gilleshemmerle/
- Olivier Bitsch: https://www.linkedin.com/in/olivier-bitsch-aa130969/
- Tobias Kuster: https://www.linkedin.com/in/tobiaskuster/
- Aram Sukiasyan: https://www.linkedin.com/in/aramsuqiasyan/


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 13 days
- **Full-Time Equivalent (FTE):** 0,5 FTE
- **Total Costs:** 10k USDC

### Milestone 1 - Research

- **Estimated duration:** 10 days
- **FTE:** 0,5
- **Costs:** 7,692 USDC

The 1st milestone consist of doing research and create a document which list all found wallets and which will be compatible with our library.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | GPLv3.
| **0b.** | Documentation/Tutorial | Document each wallet that could be compatible with our wallet with code snippets. |
| **0c.** | Methodology | Go to each wallet official documentation to check how they work for authentication and blockchain communication to ensure how easily it is to integrate in a common library. |
| **0d.** | Infrastructure | We will be delivering a document that will not require any infrastructure. |
| **0e.** | Article | The document will detail wallet per wallet if they will be compatible with our library. |


### Milestone 2 Writing technical specs of the recommended solution

This second milestone is about to generate a technical specification of the recommended solution.

- **Estimated Duration:** 3 days
- **FTE:**  0,5
- **Costs:** 2,308 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | GPLv3
| **0b.** | Documentation/Tutorial | Writing a technical documentation which list the react hooks that the library will need to be complete |
| **0c.** | Methodology | Check the wagmi.sh documentation and check what is relevant to keep for the Polkadot ecosystem. We will try to meet the wagmi implementation as much as possible to make it easier for developers to use the library if they already know how to use wagmi. We will also figure out is it would be feasible to fork wagmi.sh to make it support Polkadot environment. |
| **0d.** | Infrastructure | We will be delivering a document that will not require any infrastructure. |
| **0e.** | Article | The document will detail all the wagmi-like hooks to be implemented by the library. |

## Future Plans

Once we deliver the solution research and technical specifications, we intend on following up with another Grant for the development of the Polkadot wallet aggregator connector for dapps.

Our long term objective is to promote these opensource libraries to be a key component of the DOT ecosystem providing one more step towards main adoption of web3 technology.



## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
Web3 Foundation Website 
