# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.



* **Project Name:** Polconeth
* **Project Name:** Polconeth
* **Payment Address:** DAI Address: 0x3f91475fbd0c3d9c676d39af071691c1cf635f0b

## Project Overview 

### Overview

Polconeth will introduce [Connext](https://github.com/connext) into substrate and Polkadot. It will create state channels for EVM based balance transfer on Polkadot without transaction fee and it will also facilitate micro payments. In near future plan, Polconeth will also build state channels for Substrate based balance.

### Integration

In the 1st milestone, we'd like to package the server-node in the image and integrate APIs into off-chain workers. 

If the delivery of 1st milestone is workable and adoptable, we're going to convert Connext smart contract logic into substrate modules in the 2nd milestone.

### Project Details 

On functionality side, Vector of Connect is very similar with cChannel of Celer to fulfill layer-2 channel transfer requirements.

However, Connext is more production ready on cross-chain transfer and micro-payments while Celer is focusing more on gaming. Besides, Connext has more implementations.

Server-node， which uses docker to package up core logic and exposes http and gRPC interfaces.

Browser-node, which is distributed via npm and exposes a typescript/javascript interface.

Routing node, where you forward transfers between different channels. This way, peers can transfer to each other without needing channels directly to one other, but instead by "hopping" value across many different channels through the network. Routing nodes run server-node with an automated module - a router - to forward transfers.

Configuration of *ConnextModal* component 

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
* **Total Estimated Duration:** 12 weeks
* **Full-time equivalent (FTE):**  2
* **Total Costs:** 12,000 DAI

### Milestone 1 API Integration 
* **Estimated Duration:** 4 weeks
* **FTE:**  2
* **Costs:** 4,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0. | License | Apache 2.0 / MIT / Unlicense |
| 1. | Documentation | We will provide a guide about the depolyment and configuration of Polconeth|
| 2. | Test Code | Test code to ensure the functionality and robustness| 
| 3. | Rest API Client | We will implement the [rest-api-client](https://github.com/connext/rest-api-client) into the off-chain worker|  
| 4. | Substrate chain | A substrate chain integrated with Connext API to demonstrate the functionalities|  
| 5. | Docker | We will provide a dockerfile in which we will also package a connext server node|


### Milestone 2 State Channel module 
* **Estimated Duration:** 8 weeks
* **FTE:**  2
* **Costs:** 8,000

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0. | Documentation | A doc to specify the state channel an how it is integrated with substrate as a module|
| 1. |  Test Code | Test code to ensure the functionality and robustness| 
| 2. | Polconeth Module | We will convert [Connext contract](https://github.com/connext/vector/tree/main/modules/contracts/src.sol) logic into Substrate module. |  
| 3. | Substrate chain | A Substarte chain with Polconeth module for demo.|  
| 4. | Docker | The docker image of the project. |




## Future Plans
Integrate [Connext](https://github.com/connext) and also build state channels for Substrate based balances.


