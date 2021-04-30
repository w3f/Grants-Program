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
   BCANN is a protocol of assigned names & numbers & crypto-currency addresses for multi-chain.

### Background
  DNS is the infrastructure of the Internet,an efficient resource addressing method.

  But DNS has some common problems like below


     1.Domain name hijacking   
     2.DNS cache pollution   
     3.DDOS attack   

     Decentralized DNS can solve those problems of centralized domain names through distributed ledger：


     1.High security level same as BTC/ETH/DOT,the private key is the only way to manage domain name
     2.Prevent DNS cache pollution by distributed ledger for Name Services 
     3.DDOS can not attack all decentralized name service nodes
  
  
  There are some decentralized DNS projects, such as Namecoin, ENS, etc. These projects solve many central service problems, but the boundary of the blockchain makes DNS unable to act on the blockchain outside of itself.
  
   The Polkadot cross-chain ecosystem breaks the boundaries between the blockchain and makes it possible for the deentralized DNS, and that's why we created this project.

### Project Details 

[architecture](https://drive.google.com/file/d/1eD3fqQ0p7osblX1x-iW3hPLhIWG3R4Lv/view?usp=sharing)

The BCANN protocol will allow parachains to quickly obtain the complete functions of decentralized domain names through the Polkadot parachain module, and meet the needs of developers on the parachain for the name services's functions.


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

There is a [deeper.network](https://github.com/w3f/Open-Grants-Program/blob/master/applications/deeper_network.md) project that includes decentralized DNS. There are several diferences worth highligting:

*Deeper's dDNS focuses on supporting it's DWEB , BCANNN focuses on decentralized name services for blockchain ecosystem, which includes dDNS and crypto-currency address pointing service.

There is a [ens](https://ens.domains/) project. There are several diferences worth highligting:

*ENS is a smart contract deployed on ETH,BCANNN is the infrastructure of the parachain, which will be released as a substrate runtime module library. 


There is a [Nicks Module](https://github.com/paritytech/substrate) project. There are several diferences worth highligting:

*Nicks Module is a module that keep track of account names on-chain.BCANN provides a complete domain name service and address mapping service.
 

There is a [substrate-names](https://github.com/xaya/substrate-names/) project. There are several diferences worth highligting:

*Substrate-names, like NameCoin, only provides key-value style name services. BCANN provides complete domain name/subdomain name service and address mapping service.

There is a [substrate-name-service](https://github.com/hskang9/substrate-name-service) project. There are several diferences worth highligting:

*Support of Substrate-name-service for subdomains is not good enough, and only supports IPV4. This is just a sample project and the updating has been stopped. BCANN provides complete domain name/subdomain name service and address mapping service.

Name services is an infrastructure for blockchain ecosystem. In the blockchain world, the human-readable name is the effective identification for hash, addresses, and other items, which improves the usability. 

Usage scenarios:


    a. Human-readable identity for decentralized social media   
    b. Human-readable identity for decentralized email   
    c. Human-readable identity for the address to send asset  
    d. domain name for decentralized web
    e. Human-readable identity for decentralized storage file locations   
  
BCANNN will create a name service protocol on polkadot parachain. As a basic protocol of the name service, BCANNN will have built-in support for name/subname registry and resolver,and it shall support existing blockchain domain names, such as .eth, .luxe, etc., through adapter contract. That means users can use BCANNN as a common resolver for all blockchain domain to query/update name services records.


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
  Full stack engineer with 12+ years of experience  
  7 years of experience in the blockchain industry  
  4 years of  experience in smart contract   
  2013~2014 RippleChina.cn's CTO  
  2014~2016 fullcoin.com exchange's CTO  
  2016~2018 19800.com exchange CEO & CTO  
  2018~2020 azex exchange CEO   

Chak Zhou :  
  Full stack engineer with 10+ years experience  
  4 years of experience in the blockchain industry  
  2 years of experience in smart contract development     
  2010~2014 Senior engineer of Travel e-commerce  
  2014~2016 Senior engineer of cross-border e-commerce  
  2017~2018 19800.com exchange CTO  
  2018~2020 azex exchange CTO 

Andy An :  
  Senior engineer engineer with 10 + years experience  
  2 years of experience in the blockchain industry  
  2 years of experience in smart contract 
  2010~2016 Senior engineer of alipay  
  2016~2018 Senior engineer of 19800.com exchange  
  2018~2020 Senior engineer of azex exchange  

We come from a long-term cooperation team, we have 5+ years experience in blockchain industry, like blockchain technology , smart contract development, We have 2+ years of experience in researching on the ens project.

## Development Roadmap 
### Overview
* **Total Estimated Duration:** 12 weeks
* **Total Costs:** 10,000.00 DAI

### Milestone 1: Initial implementation, name service registry and name resolver
* **Estimated Duration:** 4 weeks
* **Full-time equivalent (FTE):**  2
* **Costs:** 5,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | MIT  |
| 0b. | Documentation | We will provide inline documentation of the code and basic tutorials, which will explain how to use name services|
| 0c. | Testing coverage | The code will have unit-test coverage (min. 90%) to ensure functionality and robustness. We will describe how to run these tests in the guide.| 
| 1. | Module design| The name/sub-name will enable NFT support for names transfer/rental services |  
| 2. | Customizable Resolver | We will implement methods to set up custom resolver|

We will implement the protocol at this milestone. The deliverable part includes:
a. Official website with project introduction
b. ParaChain frame source code, protocol introduction document and module deployment document
c. Unit testing and test documentation


### Milestone 2: Example of name services dapp 
 [mock-ups for milestone 2](https://org.modao.cc/app/4447109c463ec3a36043cb54e1edd7fafcc01c2c?simulator_type=device&sticky)
* **Estimated Duration:** 4 weeks
* **Full-time equivalent (FTE):**  3
* **Costs:** 5,000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.   | License       | Apache 2.0 |
| 0b.   | Documentation       |We will provide documentation on how to get a name/subname, and how to use your name/subname for crypto address resolve |
| 0c.   | Testing Guide | We will provide users with a test name services, and users can get a 30-day test period for a name/subname |
| 1. | ns dapp| We will implement a dapp to get/manage/transfer your name/subname. 

We will implement a dapp at this milestone. The deliverable part includes:
a. Dapp for getting/managing/transferring your name/subname
b. Dapp for getting/managing/transferring your name/subname for test purpose (free name/subname)

## Future Plans
 
 1. We will create a mail system for name/subname which offers common mail service with crypto currency sending service   
 2. We will create a BCANN parachain for each parachain as the superset of the registry data, it can provide developers with one-stop domain name registry and resolve services
