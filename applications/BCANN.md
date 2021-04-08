# W3F Open Grant Proposal

> 🌏 This page is also available in [Chinese (中文)](./application-template-cn.md).
> 
> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
> 
> See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/#pencil-process) on how to submit a proposal.

* **Project Name:** BCANN ( The blockchain system for Assigned Names And Numbers )
* **Proposer:** Witter Lee
* **Payment Address:** 0x4575f459F79B6ed5Dd644aBCc64affCc4c680DE3


## Project Overview :

### Overview
  BCANN wants to be the icann of the blockchain world.

  DNS is the infrastructure of the Internet,a efficient resource addressing method.

  But DNS has some common problems like below：


     1.Domain name hijacking   
     2.DNS cache pollution   
     3.DDOS attack

   Decentralized DNS would solve these problems of centralized domain names through distributed ledger：


     1.High security level same as BTC/ETH/DOT,the private key is the only way to manage domain name
     2.Prevent DNS cache pollution by distributed ledger for Name Services 
     3.DDOS cannot attack all decentralized name service nodes
  
  
  There are some decentralized DNS projects, such as NameCoin, ENS, etc. These projects solve many central service problems, but the boundary of the blockchain makes DNS unable to act on the blockchain outside of itself.
  
  The Polkadot cross-chain ecosystem breaks the boundaries of the blockchain and makes it possible for the decentralized DNS, the infrastructure of the blockchain world. that's why we build this project.


### Project Details 

[architecture](https://drive.google.com/file/d/1UOiDbTQKF-MkzXloaOCWcnGUdCgARjaA/view?usp=sharing)

### Ecosystem Fit 

There is a [deeper.network](https://github.com/w3f/Open-Grants-Program/blob/master/applications/deeper_network.md) project which include Decentralized DNS. There are several diferences worth highligting:

* BCANNN focus on decentralized name services for blockchain ecosystem 

There is a [ens](https://ens.domains/) project. There are several diferences worth highligting:

* BCANNN can work with internet DNS 
* BCANNN can work on Polkadot like a cross-chain version of ENS

Name services is an infrastructure for blockchain ecosystem. The human-readable  name is the effective identification of hash/addresses etc. in the blockchain world, which can improve usability. 

Usage scenarios:


    a. Human-readable identity for decentralized social media   
    b. Human-readable identity for decentralized email   
    c. Human-readable identity of the address to sent asset   
    d. domain name for decentralized web
    e. Human-readable identity for decentralized storage file locations   
  
BCANNN will be the infrastructure of polkadot & blockchain. BCANNN is a module that run on the parachain that supports smart contracts.

BCANNN will create a name service protocol on polkadot parachain. As the basic protocol of the name service,BCANNN will have built-in support for name/subname registry and resolver,and support existing blockchain domain names, such as .eth, .luxe, etc., through adapter contract. That means Users can use BCANNN as a common Resolver for all blockchain domain to query/update name services records.



## Team :busts_in_silhouette:

### Team members
* Witter Lee
* Chak Zhou
* Andy An

### Contact
* **Contact Name:** Witter Lee
* **Contact Email:** lwt@msn.cn

### Legal Structure 
- No.2588 Hongmei South Road, Minhang District, Shanghai
- Shanghai Blockchain Network Technology Co., Ltd.

### Team's experience
Witter Lee :  
  Full stack engineer with 12+ years experience  
  7 years of experience in the blockchain industry  
  4 years of smart contract development experience  
  2013~2014 RippleChina.cn's CTO  
  2014~2016 fullcoin.com exchange's CTO  
  2016~2018 19800.com exchange CEO & CTO  
  2018~2020 azex exchange CEO   

Chak Zhou :  
  Full stack engineer with 10+ years experience  
  4 years of experience in the blockchain industry  
  2 years of smart contract development experience  
  2010~2014 Senior engineer of Travel e-commerce  
  2014~2016 Senior engineer of cross-border e-commerce  
  2017~2018 19800.com exchange CTO  
  2018~2020 azex exchange CTO 

Andy An :  
  Senior engineer engineer with 10 + years experience  
  2 years of experience in the blockchain industry  
  2 years of smart contract development experience  
  2010~2016 Senior engineer of alipay  
  2016~2018 Senior engineer of 19800.com exchange  
  2018~2020 Senior engineer of azex exchange  

We come from a long-term cooperation team, we have many years blockchain industry experience such as blockchain technology , smart contract development experience, We have 2+ year of research on the ens project.

## Development Roadmap 
### Overview
* **Total Estimated Duration:** 12 weeks
* **Total Costs:** 30,000.00 DAI

### Milestone 1: Initial implementation, Name Service Registry and Name Resolver
* **Estimated Duration:** 4 weeks
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | MIT  |
| 0b. | Documentation | We will provide inline documentation of the code and basic tutorials, which will explain how to use name services|
| 0c. | Testing coverage | The code will have unit-test coverage (min. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Module design| The name/sub-name will enable NFT support for names transfer/rental services |  
| 2. | Customizable Resolver | We will implement methods to set up custom resolver|  

### Milestone 2: Phase 1 of name services dapp 

* **Estimated Duration:** 4 weeks
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.   | License       | Apache 2.0 |
| 0b.   | Documentation       |Documentation We will provide how to get a name/subname, how to use your name/subname for crypto address resolve |
| 0c.   | Testing Guide | We will provide users with a test name services, and users can get a 30-day test period for a  name/subname |
| 1. | ns dapp| We will implement a dapp to get/manage/transfer your name/subname. 

### Milestone 3: Phase 2 of name services dapp 

* **Estimated Duration:** 4 weeks
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.   | License       | Apache 2.0 |
| 0b.   | Documentation |Documentation We will provide how to get a name/subname with a real internet domain, how to use your name/subname with internet domain name |
| 1. | ns dapp| We will implement a dapp to get/manage/transfer your name/subname with a real internet domain name. 

## Future Plans
 1. We will implement a name/subname NFT market which offer trading service & rental service
 2. We will create a mail system for name/subname which offer common mail service with crypto currency sending service   
