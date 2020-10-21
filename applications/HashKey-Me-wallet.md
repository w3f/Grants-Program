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

Our team will design UI for Polkadot/Kusama governance, staking and coin transfer. At same time, we will implement distributed key generation and distributed signing for Polkadot/Kusama, then we will integrate Polkadot/Kusama API into our application.

#### An indication of why your team is interested in creating this project.

Polkadot/Kusama is one of the most popular blockchain platforms, Our team is very enthusiastic about supporting such a world-class project. 


### Project Details

![](https://i.loli.net/2020/10/21/D8V4eZPasiuSLnO.jpg)

- Blockchain layer: HashKey Me wallet supported blockchain.
- Component layer: monitor blockchain event, trace tx status,  retrieve outer market data, threshold signature schemes(k-of-n schnorr ,k-of-n eddsa).
- FrontEnd layer: The front end supports IOS and Android,FrontEnd implement related business of the polkadot/kusama.

There are two roles in k-of-n threshold:
- Owner: have ownership of asset in the blockchain
- Providers: take participate in creating secret shares and signature

Ensure that the Owner keeps control over its assets, we introduce the following two requirements:
- No transaction can be made without the Owner participation.
- At any point in time the Owner can recover the full private key.

The provider can be deployed by the owner , or the owner can specify a trusted third-party deployment, HashKey me wallet will deploy a provider for owner.

![](https://i.loli.net/2020/10/21/WVuFQecCHg6zJpI.jpg)

Here is a sequence diagram of the nodes in the wallet

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

### UI

Here are some screenshots from our wallet application.For more information ,you can download our Android application, https://android-package.hk.ufileos.com/package/app-release.apk

![](https://i.loli.net/2020/09/23/RbeLkY7mtZXywWH.png)

![d76bf7a8-df97-4f49-aac9-13580cde1334.AC45F886-8334-466C-A15F-F20E905423F3](https://i.loli.net/2020/09/23/6jpXPk5IWmRynLq.png)


![](https://i.loli.net/2020/09/23/tUioezMaHQOLWrp.jpg)
![](https://i.loli.net/2020/09/23/8LI6xOyAn5QucEB.jpg)


### Ecosystem Fit

HashKey Me wallet would like to support for Kusama and Polkadot to IOS and Android. HashKey Me wallet has many registered users, it can help more users to get in touch with Polkadot/Kusama. With HashKey Me wallet, more users can  participate in Polkadot/Kusama ecology.


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
* **Total Costs:** 1.5 BTC


### Milestone 1 

* **Estimated Duration:** 1 weeks 
* **FTE:**  1
* **Costs:** 0.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | UI Desigin |UI Desgin for Polkadot/Kusama staking, governance and coin transfer |  
| 2. | integrated UI to application(IOS,Android)| set IOS/Android project structure|  
| 3. | Documentation| a basic tutorial that explians how a user can compile and run Andriod/IOS application|  


### Milestone 2 

* **Estimated Duration:** 3 weeks 
* **FTE:**  2
* **Costs:** 0.5 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | implement k-of-n eddsa | complicate k-of-n eddsa for server and client to generate eddsa private key | 
| 2. | implement k-of-n schnorr| complicate k-of-n schnorr for server and client to generate schnorr private key|  
| 3. | integrated k-of-n eddsa to IOS/Android| integrate k-of-n eddsa to cient|  
| 4. | integrated k-of-n schnorr to IOS/Android |integrate k-of-n schnorr to cient |  
| 5. | Unit tests| Integration of Unit tests for k-of-n eddsa/k-of-n schnorr generate private key and sign tx |  
| 6. | Documentation| show user how to integrate k-of-n eddsa/k-of-n schnorr to application, Provide detailed UML diagrams of k-of-n eddsa/k-of-n schnorr |  


### Milestone 3

* **Estimated Duration:** 2 weeks 
* **FTE:**  2
* **Costs:** 0.5 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | deposit/transfer coins| client  implements construct tx,sign tx,send tx. server implements trace tx status ,notify client if deposit tx is confirmed|  
| 2. | stake/nominate | provide ability for validators to stake and nominators to nominate validator|   
| 3. |goverance	| provide ability to vote  on proposals  |  
|4. | Unit tests | Integration of Unit tests for construct tx,sign tx,send tx  |
|4. | Documentation| provide detailed  UML diagrams of deposit/transfer ,stake/nominate and goverance  |

