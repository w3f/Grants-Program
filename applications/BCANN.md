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
  BCANN wants to be the ICANN of the blockchain world.

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

[architecture](https://drive.google.com/file/d/1fiNZ0lcrGKrpdtkaXBjIILGvdXk-NMdD/view?usp=sharing)

[how to work with DNS](https://drive.google.com/file/d/1KgIVgRHlRoEDsLtY5bhv3_5nPZjpO4-a/view?usp=sharing)

DNS Prodiver: We create a centralized prodiver to managing/modifying domain name through a traditional domain registrar.

There some centralized service need to implement for BCANN work with internet DNS .Decentralized domain name service is the future, but DNS is the infrastructure of the Internet, we need to be compatible with DNS, and give users enough time window to migrate to decentralized domain name service.

**Make the name as an NFT**
Every name is different, you can  transfer/trade/rental it when make it as an NFT. In the traditional domain name industry, transferability/tradability/leasability is the basic condition for the existence of the domain name trading market.And we have a future plan to develop an NFT name/subname market on chain.

#### Interface Specification

Main interface (Users can implement the Resolver by themselves for extension)
```
1. name registry
    /**
     * @dev Sets the record for a name.
     * @param name The name to update.
     * @param owner The address of the new owner.
     * @param resolver The address of the resolver.
     * @param ttl The TTL in seconds.
     */
    func setRecord(name, owner,resolver,ttl);

     /**
     * @dev Sets the record for a subname.
     * @param name The parent name.
     * @param label The hash of the label specifying the subname.
     * @param owner The address of the new owner.
     * @param resolver The address of the resolver.
     * @param ttl The TTL in seconds.
     */    
    func setSubnameRecord(name, label, owner, resolver, ttl); 

     /**
     * @dev Returns the resolver for the specified name.
     * @param name The specified name.
     * @return address of the resolver.
     */
    func resolver(name) return (resolver);

     /**
     * @dev Returns whether a record has been imported to the registry.
     * @param name The specified name.
     * @return Bool if record exists
     */
    func exists(name) return (bool) 

2. name resolver
   DnsResolver
    /**
     * Set one or more DNS records.
     * @param name the name for which to set the records
     * @param data the DNS wire format records to set
     */
   func setDNSRecords(name,data);
   
    /**
     * Obtain a DNS record.
     * @param name the name for which to fetch the record
     * @param fullname the fully-qualified name for which to fetch the record
     * @param resource the ID of the resource as per https://en.wikipedia.org/wiki/List_of_DNS_record_types
     * @return the DNS record
     */
    func dnsRecord(name, fullname, resource) return (data);

   AddrResolver
    /**
     * set a addr record.
     * @param name the name for which to set the records
     * @param fullname the fully-qualified name for which to fetch the record
     * @param the address of the coin type
     * @return the DNS record
     */
    func setAddr(name,coinType,addr);

    /**
     * Obtain a coin address record.
     * @param name the name for which to set the records
     * @param fullname the fully-qualified name for which to fetch the record
     * @return the coin address record
     */
    func addr(name,coinType) return (address);
   NameResolver
    /**
     * Sets the name associated with a BCANN name, for reverse records
     * May only be called by the owner of that name in the BCANN registry.
     * @param name The name to update.
     * @param nameVal The name value.
     */
    func setName(name,nameVal);

    **
     * Returns the name associated with a BCANN name, for reverse records.
     * @param name The BCANN node to query.
     * @return The associated name.
     */
    func name(name) return (nameVal);
   TextResolver
    /**
     * Sets the text data associated with a BCANN name and key.
     * May only be called by the owner of that name in the BCANN registry.
     * @param name The name to update.
     * @param key The key to set.
     * @param value The text data value to set.
     */
    func setText(name, key, value);

    /**
     * Returns the text data associated with a BCANN name and key.
     * @param node The BCANN node to query.
     * @param key The text data key to query.
     * @return The associated text data.
     */
    func text(name, string calldata key) return (text);
   
   PublicResolver:DnsResolver,AddrResolver,NameResolver,TextResolver
```
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
* **Full-time equivalent (FTE):**  2
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | MIT  |
| 0b. | Documentation | We will provide inline documentation of the code and basic tutorials, which will explain how to use name services|
| 0c. | Testing coverage | The code will have unit-test coverage (min. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Module design| The name/sub-name will enable NFT support for names transfer/rental services |  
| 2. | Customizable Resolver | We will implement methods to set up custom resolver|

We will implement the protocol at this milestone. The deliverable part includes:
a. Official website with project introduction
b. Source code and documentation of the protocol
c. Unit testing and test documentation
d. Test protocol deployed on the chain


### Milestone 2: Phase 1 of name services dapp 

* **Estimated Duration:** 4 weeks
* **Full-time equivalent (FTE):**  3
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.   | License       | Apache 2.0 |
| 0b.   | Documentation       |Documentation We will provide how to get a name/subname, how to use your name/subname for crypto address resolve |
| 0c.   | Testing Guide | We will provide users with a test name services, and users can get a 30-day test period for a  name/subname |
| 1. | ns dapp| We will implement a dapp to get/manage/transfer your name/subname. 

We will implement a dapp at this milestone. The deliverable part includes:
a. Dapp for get/manage/transfer your name/subname
b. Dapp for get/manage/transfer your name/subname for test purpose (free name/subname)

### Milestone 3: Phase 2 of name services dapp 

* **Estimated Duration:** 4 weeks
* **Full-time equivalent (FTE):**  3
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.   | License       | Apache 2.0 |
| 0b.   | Documentation |Documentation We will provide how to get a name/subname with a real internet domain, how to use your name/subname with internet domain name |
| 1. | ns dapp| We will implement a dapp to get/manage/transfer your name/subname with a real internet domain name. 

We will improve the dapp at this milestone. The deliverable part includes:
a. Buy a domain name package(a name on chain with a real internet domain name)
b. Manage/transfer your name(include name package)
c. Centralized synchronization service between name on chain and internet domain name
d. Centralized provider service for internet domain name

## Future Plans
 1. We will implement a name/subname NFT market which offer trading service & rental service
 2. We will create a mail system for name/subname which offer common mail service with crypto currency sending service   
