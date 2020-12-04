# Open Grant Proposal

- **Project Name:** WRAPP3D.
- **Team Name:** SURGED FINANCE.
- **Payment Address:** 3LzE9MPSFJZ8jUrYtb4W1omphRu4m24ith.

## Project Overview

### Overview

Wrapp3d aims to bring Litecoin to Polkadot and further to Ethereum's ERC20 Standard Token by creating wrapp3d LTC Tokens by collatralizing Litecoins through 
a bridge module on Polkadot.

Litecoin, a fifth largest cryptocurrency in terms of market capitalization and daily trading volume exceeding $10 billion USD was created in 2011 by 
Charlie Lee on Bitcoin protocol. Though it is one of the most favorite cryptocurrency in the blockchain industry with wide acceptance and large community, it is 
still not able to create its place in decentralized finance. Protocol restrictions in Litecoin has limited it to the centralized exchanges. 

Tokenized Litecoin will help the blockchain in becoming more accessible as ERC20 is one of the most widely accepted token standard in the blockchain industry. It 
will further help Litecoin to actively reach hundreds of dapps that are being created on the platform and increase its use cases. 

### Project Details

In present time it is not possible for Litecoin holders to interact with Decentralized exchanges or finance platforms which are predominantly based on ERC20 
standands. If a person wishes to trade on DEX or DEFI platforms he is required to transfer his coins in Ethereum or other tokens in order to do so. Tokenization 
can solve this issue. 

WRAPP3D LTC SYSTEM

- Actors involved in creating Litecoin backed wrapp3d LTC
  - Initiator : User who wishes to convert LTC to wLTC or vice-versa
  - Vault : Custodian of Litecoins. 
  - Relayer : Parachains interacting and relaying messages between Litecoin parachains and ethereum parachain.
  - Smart Contract : ERC20 Smart contract that mints wLTC on receiving inbound LTC transaction confirmation from Relayer and in case of burning of wLTC transmit
  message to relayer for releasing Litecoin to user's Litecoin address.

- How this system functions?
  - LTC to wLTC
    * User with x Litecoins visit bridge interface and initiate a transfer of desired amount of Litecoin along with his ERC20 address where User desired to receive wLTC.
    * Bridge collators which are monitoring Litecoin chain confirms the receipt of Litecoin to the vaults and then relay the minting request of equivalent wLTC to 
    the smart contract along with the ERC20 address provided by the user. 
    * On receiving the message from parachain, smart contract mint the requested amount of wLTC and transfer it to the address provided. 
  - wLTC to LTC
    * User holding wLTC visit bridge interfave and initiate a burn request for wLTC in order to receive LTC on the address provided by the user. 
    * Bridge transfer the wLTC for burning and parachain relays the information upon receiving burn confirmation to release equivalent amount in LTC.
    * Relayer passes the message to the vaults holding Litecoins for release of funds to the address provided by the user. Vault intiate the transfer.

### Ecosystem Fit

- Bridges for couple of blockchains has been built in the past, ex. wBTC, renBTC and recently PolkaBTC which is currently under development.
- Litecoin bridge that will enable it to interact with other blockchains does not yet exist. 
- Creation of Wrapp3d Litecoin opens further opportunities for Litecoin to interact with other blockchains freely and in trustless environment. 
- Litecoin can be used and utilized in DEFI Platform enabling Litecoin holders to stake, yieldfram, lend, or trade on DEX & AMM
- Incentivization of relayers by earning Wrapping fees on every transaction.

## Team

### Team members

- Surged Finance Developers 
- Nicki - Bachelors in Computers applications, MBA
- Rajnish - UI & UX Designer
- Solidity.Finance - Advisors

### Contact

- **Contact Name: Surged Evans
- **Contact Email:** info@surged.finance
- https://surged.finance

### Legal Structure

- **Registered Legal Entity:** Limited Company.

### Team’s experience

We are an experienced team currently working on our project SURGED Finance (https://surged.finance) a defi platform for Swap, Lend & Margin Trade along with Staking
and yield farming. We have partnered with Solidity.Finance & Toshify.Finance who will be assisting us in technical development. Solidity.Finance are auditors of 
smart contracts and Toshify is another DEFI platform that is currently working on FastSwap, a DEX liquidity aggregator platform. 

### Team Code Repos

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 months.
- **Full-time equivalent (FTE):** 1.0.
- **Total Costs:** 1.5 BTC ($29000 equivalent).

### Milestone 1  — Infrastructure Development 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.5 BTC

| No. | Deliverable               | Specification |
| ----|-------------------------- | ------------- |
| 0a. | License                   | Apache/MIT |
| 0b. | Documentation             | Develop Github wiki providing detailed tutorial that explain how user can use Wrapp3d LTC bridge alongwith Architecture for creating this module. |  
| 1a. | Infrastructure Development|  |
| 1b. | Wrapp3d LTC Smart Contract| Code and deploy Wrapp3d Litecoin Smartcontract on ERC20 Standard including mint, burn, transfer, permissionless function.   |
| 1c. | Litecoin Parachain        | Development and deployment of LTC Parachain.  | 
| 2.  | Official Website          | Create official Website with detailed description & documentations of project.  |
| 3.  | Testnet deployment        | Once the basic infrastructure for the birdge is created, the project will start testing it on Testnet. |


### Milestone 2  — Alpha release on Testnet 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.5 BTC


| No. | Deliverable               | Specification |
| ----|-------------------------- | ------------- |
| 1.  | Testing Guide             | The guide contains detailed information to create testnet transactions.  |
| 2.  | Wrapp3d LTC Smart Contract| Minting/Burning/transferring wLTC transactions. |
| 3.  | Bridge Development        | Relaying message between Litecoin Parachain & Ethereum Parachain to interact to execute Minting/Burning/Transferring wLTC. |
| 4.  | Test                      | Support minting after receiving confirmations from Litecoin Parachain and transferring wLTC to Ethereum address. |
| 4a. |                           | Support Burning of wLTC to release Collatralized LTC. |
| 4c. | XCLAIM Design             | Testing XCLAIM design with wLTC Bridge Module. |
| 5.  | Bridge UI Development     | Develop and create Bridge UI on official website. |
| 6.  | Open Aplha for Public     | Open Alpha version for Public testing connecting Litecoin Testnet node and Ethereum Testnet. |
| 7a. | Documents                 | Alpha version user guide. Litecoin Testnet faucet, Eth Testnet faucet usage guide. |
| 7b. |                           | FAQs. |
| 8.  | Community Building        | Forum development for community to interact. |


### Milestone 3  — Mainnet Beta Release 
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0.5 BTC

| No. | Deliverable               | Specification |
| ----|-------------------------- | ------------- |
| 1.  | Audit                     | Auditing before deploying smart contracts on mainnet.  |
| 2.  | DAO Governance            | Create Decentralized Assets Organization to govern the Wrapp3d LTC ecosystem. |
| 3.  | Multisig for wLTC         | Multisig address to hold the ownership of wLTC smartcontract. |
| 4.  | Multisig for Bridge       |  |
| 5.  | Mainnet deploy            | After Audit, deploy contracts on mainnet. |
| 6.  | Mainnet Online            | Mainnet is released. Supports Minting/Burning/Transferring in realtime. |
| 7.  | Press Release             | Public Announcement and Press release with updates on mainnet release. |
| 8.  | Mainnet Open for Public   | Opens mainnet for public through official website. |
| 9.  | Community Building        | Further development of forum for community to interact. |
| 10. | wLTC On DEX & AMM         | Listing of wLTC on DEX & AMM such as Uniswap. |


## Future Plans

After successful release of wLTC, a trustless and asset backed wrapped version of Litecoin on ERC20 Standards using Polkadot, Surged Finance will create similar framework for zCash & BCH. Also Create TRC20 Standard trustless & asset backed Tokens of LTC, zCash & BCH. 

## Additional Information

After successful completion of Litecoin Bridge, we will be applying for another grant for development of zCash & BCH Bridge modules. 
