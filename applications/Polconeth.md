# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.



* **Project Name:** Polconeth
* **Project Name:** Polconeth
* **Payment Address:** DAI Address: 0x3f91475fbd0c3d9c676d39af071691c1cf635f0b

## Project Overview 

### Overview

Polconeth will introduce [Connext](https://github.com/connext) into substrate and Polkadot. It will create state channels for EVM based balance transfer on Polkadot without transaction fee and it will also facilitate micro payments. In near future plan, Polconeth will also build state channels for Substrate based balance.

### Integration

Polconeth will integrate [Connext](https://github.com/connext) into a substrate pallet. Polconeth pallet together with EVM pallet/Frontier Layer could enable EVM based balance transfer in State Channel (Layer2) on Polkadot. 


### Project Details 

Import the *ConnextModal* component and configure the props

| Property | Type | Required | Description|
| ------------- | ------------- | ------------- | ------------- |
|showModal|	Boolean	|Yes|	When true, the modal is open.|
|onClose|	Function	|No|	Callback that is invoked when modal is closed.|
|onReady|	Function	|No|	Callback that is invoked when the modal is ready. The callback is invoked with params: { depositChannelAddress: string; withdrawChannelAddress: string; }|
|routerPublicIdentifier|	String	|Yes|	Public identifier of router which will support the swap. Please reach out to the Connext team to figure out which router to use if you are not running your own!|
|depositAssetId|	String	|Yes|	On EVM-based chains, the address of the token which will be deposited. For ETH (or the chain's native asset), use AddressZero.|
|depositChainId	|Number	|No|	ChainId of chain to deposit on. Use https://chainid.network for more info.|
|depositChainProvider|	String|	Yes|	Provider URL of EVM-based chain for deposit. Can be an Infura/Alchemy/etc URL or a node URL.|
|withdrawAssetId	|String	|Yes|	On EVM-based chains, the address of the token which will be withdrawn. For ETH (or the chain's native asset), use AddressZero.|
|withdrawChainId	|Number	|No|	ChainId of chain to deposit on. Use https://chainid.network for more info.|
|withdrawChainProvider	|String	|Yes|	Provider URL of EVM-based chain for withdrawal. Can be an Infura/Alchemy/etc URL or a node URL.|
|withdrawalAddress	|String	|Yes|	Address of account to withdraw to on withdraw chain.|


### Ecosystem Fit 
Polconeth state channels support EVM based balance and work on Plasma as well.

## Team 

### Team members
* Ken Shin, Blochain Engineer
* Charlie Wong, Full Stack Developer	

### Contact
* **Contact Name:** Ken Shin
* **Contact Email:** mmotoyatsu@gmail.com


### Legal Structure 
No legal Entity

### Team's experience
Ken has been a software Enginner for more than 10 years. In which, he dedicate 3 years to Blockchain area.

Charlie is a full stack developer. He has development experience in Crypto Exchange, Wallet, Mining Pools and DApps.

### Team Code Repos
https://github.com/polconeth




## Development Roadmap 
### Overview
* **Total Estimated Duration:** 8 weeks
* **Full-time equivalent (FTE):**  1.5
* **Total Costs:** 10,000 DAI

### Milestone 1 Example — Implement Substrate Modules 
* **Estimated Duration:** 8 weeks
* **FTE:**  1.5
* **Costs:** 10,000

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0. | License | Apache 2.0 / MIT / Unlicense |
| 1. | Documentation | We will provide a guide about the installation and configuration of Polconeth|
| 2. |  Test Code | Test code to ensure the functionality and robustness| 
| 3 | Polconeth Pallet | We will create a pallet to enable state channel transfer on Substrate chain|  
| 4. | Substrate chain | We will create a substarte chain which enables Polneth and EVM pallets|  
| 5. | Docker | We will provide a dockerfile to demonstrate the full functionality of our project|



## Future Plans
Integrate [Connext](https://github.com/connext) and also build state channels for Substrate based balances.


