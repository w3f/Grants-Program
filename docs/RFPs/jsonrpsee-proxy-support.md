# Socks5 proxy support for JsonRpsee 

:::caution
This Request for Proposals is currently considered **under development**, meaning one or more grants have been signed to address the topic. We might be interested in additional implementations, but it’s better to double check this with the grants team.
:::

* **Status:** [Under Development](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/jsonrpsee-proxy-support.md) 
* **Proposer:** flipchan   

## Project Description :page_facing_up: 

[JsonRpsee](https://github.com/paritytech/jsonrpsee) is an opensource Rust library used by several para and relay chain client libraries to connect to chains over ws or rpc. 

## Background story

Tor is a anonymization project that has been active for several years. By utilizing a traffic obfusication protocol to route data, it enables users to anonymize their internet traffic. Several blockchain projects leverage this technology to allow users to connect to nodes over tor, inputting the .onion address of the rpc provider.  

By providing a .onion address for a rpc/ws node, we can allow users to have more privacy by masking the origination of the request (the sender's ip address).   


Gavin Wood mentioned onion-routing as an important future feature on Decoded 2023:
![](https://lh4.googleusercontent.com/jVXYOtm4ORONGqAdtpj3tS4RUgpNJP3lAST_7byZOaT2FKzzGdvdVQOqf-2v1bhvWdniWuJDN2qBxkjYvMByqKXc9v6odzULbWla-sflQlEITA1hC34vCiumr3FKtpuaLo0xwfJNH_j9G-1O1RWki8k)

[In february 2023](https://forum.polkadot.network/t/privhost-public-polkadot-kusama-and-edgeware-nodes-with-tor-v3-onion-support/2093), a small public rpc provider was launched in order to provide .onion rpc endpoints for handful of chains in the ecosystem.     
Privhost was later listed on the [awesome-substrate list](https://github.com/substrate-developer-hub/awesome-substrate#products-and-services).


In order to connect to a .onion site, a user must pass it's connection through a tor socks5 proxy in order to resolve the .onion domain and connect.  


Several ecosystem projects want to add support for connecting to .onion, but are blocked due to JsonRpsee not having support for sock5 proxy.    


Third party pr's that are waiting for JsonRpsee to support socks5:
- [Fedimint #391](https://github.com/fedimint/fedimint/issues/391#issuecomment-1643878929)  
- [Uptest #15](https://github.com/uptest-sc/uptest/issues/15)   

On 4th of September of 2022 a [pr was created](https://github.com/paritytech/jsonrpsee/issues/870) to start the process of adding socks5 support for JsonRpsee.  
Noone has had time to fix this issue and implement this feature, therefor this RFP. 


## Motivation
-  Enable client libraries to connect to .onion rpc nodes.   


### Ecosystem projects that rely on JsonRpsee
-  [Subxt](https://github.com/paritytech/subxt)   
-  [Substrate](https://github.com/paritytech/substrate)  
-  [Subwasm](https://github.com/chevdor/subwasm)  
-  [Uptest](https://github.com/uptest-sc/uptest)   
-  [Subway](https://github.com/AcalaNetwork/subway)  

## Deliverables :nut_and_bolt:

* **Total Estimated Duration:** 4 weeks  
* **Full-time equivalent (FTE):**  4 weeks   
* **Total Costs:** 9000 USD(may be changed by the future team) 


### Milestone 1

Please add additional milestones in the same way: 
* **Estimated Duration:** Duration of milestone 1 
* **FTE:**  4 weeks
* **Costs:** 9000 USD(may be changed by the future team)


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 0a.  | License |	Apache 2.0 / MIT / Unlicense| 
| 0b.  | Documentation | Public documentation with implementation guides and sample code | 
| 0c.  | Testing Guide |Rust Unit tests| 
| 0d.  | Article |Article explaining how to utilize the socks5 support|   
| 1. | Middleware layer | In order to enable socks5 support, several modifications of the `WsTransportClientBuilder` needs to be implemented, described in [issue #1162](https://github.com/paritytech/jsonrpsee/issues/1162) |  
| 2.  | Socks5 support |enable a jsonrpsee client to proxy connections using a socks5 proxy |   


#### Demonstrations
-  Connect to a .onion rpc node with jsonrpsee.  
