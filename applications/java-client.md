# Open Grant Proposal

* **Project:** polkadot-java-client
* **Proposer:** splix
* **Payment Address:**  bc1qce0nvef6txyahe9xvrdjavvw7qemzvhyp4ux55

## Project Description :page_facing_up: 

We propose the creation of a Java client library to access Polkadot based networks. 
Witch is the main target of JVM based server-side applications. 
Java, and JVM in general, are the de-facto standard platform used by an enterprise or large-scale internet services. 
It's critical to have a JVM based client library to get adoption by enterprises. 

We have extensive experience with booth blockchain, including Polkadot, and Java technologies. 
As an example, we previously created a Java library for Ethereum called Etherjar https://github.com/emeraldpay/etherjar, and a have some implementation of Polkadot protocol in JVM with the project Moonbeam https://github.com/emeraldpay/moonbeam. 
We want to continue our work and create a JVM library targeting the Polkadot.

Please note that a full-featured client library is usually being involved during the whole lifetime of the target system (i.e., Polkadot).
Therefore, as a result of the current project, we expect to build only an initial implementation, which should meet most of the current critical needs by a Java developer.
But over the following months, maybe even years, the library is going to be developed with advanced features.

The main target is server-side Java 11, which is the current LTS release (2018-2023) of Java. 
But in addition, we want to leave a possibility to support older versions and/or Android.

The library is going to be released under the Apache 2 license. 
Build artifacts are going to be published to a publicly accessible Maven repository, with Javadoc and documentation in the Github repo and/or on the company website.  

## Team :busts_in_silhouette:

* **Members:** Igor Artamonov
* **LinkedIn Profiles:** https://www.linkedin.com/in/igorartamonov/
* **Code Repos:** https://github.com/splix, https://github.com/emeraldpay
* **Website:**	https://emeraldpay.io
* **Legal Structure:** ETCDEV GmbH, Zug, Switzerland 
* **Team's Experience:** About 20 years of mostly Java experience, 5 years of blockchain experience

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  0.8 
* **Total Costs:** 4.2 BTC

### Milestone 1

Initial domain specific model, types and encoding.

* **Estimated Duration:** 1 month 
* **FTE:** 0.8
* **Costs:** 1.4 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | SS58 encoding | Java class to encode/decode with SS58 |  
| 2. | SCALE coded | Java class to encode/decode with SCALE |
| 3. | Base types | Java classes to hold and operate Address, Hash, and DOT |
| 4. | Documentation | A standalone document, describing usage |  

### Milestone 2

Client for HTTP JSON RPC.

* **Estimated Duration:** 1 month 
* **FTE:** 0.8
* **Costs:** 1.4 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | HTTP Client | A Java wrapper around standard HTTP JSON RPC, to read current state needed by a typical service |
| 2. | Example App | An example app that accesses a node and prints the current status to the console |
| 3. | Documentation | A standalone document, describing usage |

### Milestone 3

Modules to read and create extrinsic

* **Estimated Duration:** 1 month 
* **FTE:** 0.8
* **Costs:** 1.4 BTC

| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | schnorrkel/sr25519 module | Wrapper around Rust crypto library |  
| 2. | Signing and signature validation module | Java classes to sign data or verify an existing signature |
| 3. | Example App | An example app to create and broadcast an extrinsic |
| 4. | Documentation | A standalone document, describing usage |   
 
