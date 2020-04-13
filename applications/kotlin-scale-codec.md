# Open Grant Proposal

* **Project:** kotlin-scale-codec
* **Proposer:** [TomKa](https://github.com/kotlin-scale-codec)
* **Payment Address:** bc1qcnzrwqdg9cy7u3e9r4kue5v245mn4pkgrym6xz 

## Project Description :page_facing_up: 

We are building a SCALE (Simple Concatenated Aggregate Little-Endian) data format in the programming language Kotlin. The client will be modeled after polkadot-js/api/types and polkadot-js/metadata. We want to lower the friction of using Kolin with Substrate and believe this will benefit the whole ecosystem. 

Currently, there are fewer Polkadot applications on the native mobile terminal. Kotlin is a cross-platform programming language. Many mobile applications use this language. Based on the Kotlin scale codec, it can help Polkadot develop the ecology on the mobile terminal.

## Team :busts_in_silhouette:

* **Members:** TomKa, Myoursky, WoeOm, YeLin
* **LinkedIn Profiles:** none
* **Code Repos:** https://github.com/kotlin-scale-codec/scale-codec
* **Website:**	after Milestone 1
* **Legal Structure:** Personal liability(Ye Lin | 106-2-11F Ruanjian Ave
                                                  Yuhuatai Qu, Nanjing Shi, Jiangsu Sheng
                                                  China
                                                  210022)
* **Team's Experience:** 


Tomka, YeLin have 6 years of mobile app (Android, iOS) development experience in java,kotlin,swift . The main areas of development are bastion machines and e-commerce apps.

[WoeOm](https://github.com/WoeOm) approximately has 3 years of javascript and 3 years of blockchain development experience, the main fields are Ethereum wallet, solidity contract and substrate .

[Myoursky](https://github.com/Myoursky) has 7 years Front-end development experience in finance and oa management;

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 13 weeks
* **Total Costs:** 1.3 BTC

### Milestone 1

* **Estimated Duration:** 3 weeks 
* **Costs:** 0.3 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Coded types | This deliverable includes the following types of polkadot-js/api/types integrated into Kotlin including unit tests: AbstractArray, AbstractInt, Base, BTreeMap, BTreeSet, Compact, Enum, HashMap, Linkage, Option, Result, Struct, Set, Tuple, Vec, Int, Raw, Uint, U8aFixed |  
| 2.  | Docs | Docs including a README that describes the milestone and explains how to run, test and contribute| 

### Milestone 2

* **Estimated Duration:** 6 weeks 
* **Costs:** 0.5 BTC


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1.  | Primitive types| This deliverable includes the following types of polkadot-js/api/types integrated into Kotlin including unit tests: AccountId, AccountIndex, AccountInfo, Address, Bool, Bytes, ... |  
| 2.  | Metadata | This deliverable includes the following types of polkadot-js/metadata integrated into Kotlin including unit tests: MetadataV0 - MetadataV11  |  
| 3.  | Docs | Docs including a README that describes the milestone and explains how to run, test and contribute| 


### Milestone 3

* **Estimated Duration:** 2 weeks 
* **Costs:** 0.4 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1.  | RPC Method| Wrapper around all JSON-RPC methods exposed by a Polkadot network client |  
| 2.  | Mocker | A Mocker have some simulated services to provide testing | 

### Milestone 4

* **Estimated Duration:** 2 weeks 
* **Costs:** 0.1 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1.  | Docs| The document contains a website with instructions for using codec types, Primitive types metadata |  
| 2.  | Website | A website introducing the future Polkadot ecosystem in kotlin development language| 


## Additional Information :heavy_plus_sign: 

* We're currently implementing a Polkadot wallet native app.
* We are considering adding swift language to implement SCALE codec.
 
