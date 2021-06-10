# Open Grant Proposal

* **Project Name:** UMC - Tokenscribe
* **Team Name:** UMC Labs
* **Payment Address:** 1KoTuo8c2YomLXPqLdrPVEiufSDyCwrNGC

## Project Overview :page_facing_up: 

### Overview

#### Introduction

Subscription is a common payment method existed for a long time since credit cards. In the blockchain age, DeFi is the edge of web3 tech to change the world. In the meanwhile, there is no secured subscription feature for users to subscribe to their memberships nor their virtual staffs on-chain.
As we know, the draft [EIP1337](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1337.md)  proposed a way to implement token subscription for [ERC20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)  tokens. But from the view of users, EIP1337 is not the secure way to implement token subscription.
This application is aimed to propose a specification of secured token subscription which is the key feature of UMC - Universal Membership Community.

#### Integration

The secured token subscription will be implemented with Ink!.

#### Team Interest

We are dapp developers and we want to design a subscription feature for our project to manage users' membership with the secured token subscription. Our project is aimed to build a universal membership network which is can be used for both on-chain and off-chain services, such as Shopping Mall Memberships.

### Project Details 

With EIP1337, all the subscription status-related information is managed by a subscription contract, which will expose the users to the risks just like the situation of subscription in the telecom age and the early age of the internet. Most scamming cases are let users subscribe to some uncertain subscriptions while users cannot cancel those subscriptions due easily.
The main idea is to track and manage the subscription in token contract rather than subscription contracts to achieve the goal of securing users' assets. 


#### Interface Specification

The standard methods of ERC20 should be implemented as part of the token with the subscription feature.

The following methods also should be implemented.

```
subscribe

- desc: subscribe the specific service.
- params: contract address, interval, extra data
- return: success
```

```
unsubscribe

- desc: unsubscribe the specific service.
- params: contract address, data
- return: success
```

```
subscriptionStatus

- desc: return the status of specific subscription.
- params: user address, contract address
- return: the status of subscription
```

```
subscriptionInterval

- desc: return the interval of specific subscription.
- params: user address, contract address
- return: the interval of subscription
```

```
executeSubscription

- desc: execute the subscription for a specific address if pass the check.
- params: user address
- return: success
```

```
validSubscriptions

- desc: return the list of current valid subscriptions.
- params: user address
- return: the list of current valid subscriptions
```

### Ecosystem Fit 

[EIP1337 Draft](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1337.md) is the only one proposed in EIPs for token subscription, but still not widly used since approved six monthes before.

[ERC20 with Ink!](https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs) is the sample code of ERC20 token in Ink!.

At the very beginning stage of Ink! and Polkadot ecosystem, it's good to add token subscription as the common interface for tokens.

## Team :busts_in_silhouette:

### Team members

* Gala - CTO/Project Lead  
* Davies - Developer  

### Contact
- Contact Name: Gala
- Website: 
  - https://github.com/umc-network
  - https://umc.network 
  - https://tokenscribe.network

### Legal Structure 
No Legal Entity

### Team's experience

Gala   
   -  Ex-Software Engineer in Glu  
   -  Mobile Game Developer  
   -  E-commercial Software Developer
   -  Dapp Developer  
   -  Over 8 years of experiences in Software Development

Davies  
   -  Ex-Software Engineer in Glu 
   -  Mobile Game Developer  
   -  E-commercial Software Developer
   -  Dapp Developer  
   -  Over 5 years of experiences in Software Development

### Team Code Repos
* Team: https://github.com/umc-network

## Development Roadmap :nut_and_bolt: 
### Overview
* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 2
* **Total Costs:** 0.3 BTC

### Milestone 1 — Implement Draft Specification 
* **Estimated Duration:** 3 months
* **Full-time Equivalent (FTE):** 2
* **Costs:** 0.3 BTC 

The draft specification and a demo will be provided.

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | The draft specification. |
| 1a. | Demo code repo | The demo code with Ink!. |
| 1b. | Tutorial | The tutorial of how to use. |
| 2. | Article | An article on media channels. |
| 3. | PSP | Submit a Polkadot Standards Proposal. |

## Future Plans

* Join Polkadot related events.  
* Publish articles on media channels to expose this specification.  
* Start another project based on this specification.  

## Additional Information :heavy_plus_sign: 

A draft idea of this specification was discussed with several other developers.
