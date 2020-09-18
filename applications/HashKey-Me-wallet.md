# Open Grant Proposal

* **Project:** HashKey Me Wallet
* **Proposer:** gcc2ge
* **Payment Address:** 16StvMU4XpgGm1E5TMM6sXzrKJPRkgvgeV

## Project Description 

### Overview
#### A brief description of the project.

HashKey Me wallet is a smart wallet for Polkadot ecology and HashKey Me wallet is a keyless wallet based on TSS (Threshold Signature Scheme), it is designed around ease-of-use and security. 
- ease-of-use : Participating in blockchain governance such as voting and staking just need on click the button ,HashKey Me wallet do the complex  operations for users . HashKey Me wallet also integrate many Dapps.
- security : HashKey Me wallet implement TSS ,it provide enhanced security by distributed key generation and distributed signing. HashKey Me wallet free user from saving private key.

#### An indication of how you will integrate this project into Substrate / Polkadot / Kusama.

HashKey Me wallet would like to support for Kusama and Polkadot to IOS and Android. HashKey Me wallet has many registered users, it can help more users to get in touch with Polkadot/Kusama. With HashKey Me wallet, more users can  participate in Polkadot/Kusama ecology.

#### An indication of why your team is interested in creating this project.

Our team will design UI for Polkadot/Kusama governance, staking and coin transfer. At same time, we will implement distributed key generation and distributed signing for Polkadot/Kusama, then we will integrate Polkadot/Kusama API into our application.

### Project Details
![](https://i.loli.net/2020/09/18/Y3e5tFJ6lZdCbgo.jpg)

- Database layer: synchronize blockchain data to elastic search ,provide api for upper layer to search.
- Component layer: monitor blockchain event, trace tx status,  retrieve outer market data, threshold signature schemes(2p,schnorr ,2p-eddsa),[#42 PR](https://github.com/w3f/Open-Grants-Program/pull/42)  has detailed information on tss.
- Business layer:  the specific business related on polkadot 
- Message & RRC layer: provide api for frontend application, push latest event from blockchain  to frontend.
- FrontEnd layer: IOS and Android application

![](https://i.loli.net/2020/09/18/lqSjPKIinJ9QLwb.jpg)
- Client：
  1. Generate shared private key
  2. construct tx,sign tx,send tx
  3. query balance,query tx record
  4. stake,nominate
- Blockchain Node
  1. Query：Balance,Account nonce、Block Height,Block number,Transaction,Genesis Hash
  2. Broadcast transaction
- Server
  1. Generate shared private key
  2. push notification service
  3. Monitor blockchain ledger,Parse blockchain ledger
  4. Provide GRPC API 


### Ecosystem Fit
Polkadot/Kusama is one of the most popular blockchain platforms, Our team is very enthusiastic about supporting such a world-class project. 



## Team 

* **Members:** Daniel Wu, Putin Liu, Nathan Qin
* **LinkedIn Profiles:** https://www.linkedin.com/in/gcc2ge/, https://www.linkedin.com/in/putin-liu-pmp-662b6043/
* **Code Repos:** https://github.com/HashKeyHub
* **Website:**	 https://me.hashkey.com/en/
* **Legal Structure:**  HASHKEY DIGITAL ASSET GROUP LIMITED
* **Team's Experience:** Daniel wu has been working on blockchain development for 4 years, he has published two books on blockchain development.

## Development Roadmap 

* **Total Estimated Duration:** 6 weeks
* **Full-time equivalent (FTE):**  3
* **Total Costs:** 2.5 BTC


### Milestone 1

* **Estimated Duration:** 1 weeks 
* **FTE:**  1
* **Costs:** 0.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | UI|UI for Polkadot/Kusama governance and coin transfer |  

### Milestone 2

* **Estimated Duration:** 1 weeks 
* **FTE:**  1
* **Costs:** 0.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | DOT/KSM DKG| support DOT/KSM distribute key generation |  

### Milestone 3

* **Estimated Duration:** 1 weeks 
* **FTE:**  1
* **Costs:** 0.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | DOT/KSM distribute signing| support DOT/KSM tx distribute signing |  

### Milestone 4

* **Estimated Duration:** 1 weeks 
* **FTE:**  1
* **Costs:** 0.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | deposit/transfer coins| support DOT/KSM deposit and transfer |  


### Milestone 5

* **Estimated Duration:** 1 weeks 
* **FTE:**  1
* **Costs:** 0.25 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | stake/nominate | provide ability for validator to stake and nominator to nominate validator|   


### Milestone 6

* **Estimated Duration:** 3 weeks 
* **FTE:**  1
* **Costs:** 0.25 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. |goverance	| provide ability to vote and deposit on proposals  |  
  



