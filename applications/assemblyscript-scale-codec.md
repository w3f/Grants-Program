
# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project:** SCALE Codec Implementation
* **Proposer:** [LimeChain](https://github.com/LimeChain)
* **Payment Address:**  
bc1q8x95fuz6t767ugkn2vnwlz3e0q2rwc4xw9ede4 (when it comes to payment, let’s test out the address with a small amount first)

## Project Description :page_facing_up: 

SCALE is a lightweight codec for binary serialization and deserialization used in Substrate. Currently there are Rust, Python, Golang, C++ and JavaScript  implementations of the codec. The goal of the project is to deliver AssemblyScript implementation as a separate library. 

The library will be required for encoding/decoding Polkadot Wasm Executor <> Wasm Runtime blob calls and more specifically:
- Wasm Runtime blob compiled from AssemblyScript parsing runtime function calls from the Wasm executor.
- Wasm runtime blob compiled from AssemblyScript calling the Polkadot Runtime Environment API (Host API).

The library is a prerequisite for an AssemblyScript framework that generates runtimes or any runtime implemented in AssemblyScript loaded into a Polkadot Host.

LimeChain is a blockchain-agnostic development company with a strong focus on developer tooling. We see Polkadot as an exciting technology and we hope to be able to help the developer community through various dev tools and implementations.
## Team :busts_in_silhouette:

* **Members:** Daniel Ivanov, Lyubomir Kiprov, Christian Vesselinov
* **LinkedIn Profiles:** [Daniel](https://www.linkedin.com/in/daniel-k-ivanov/), [Lyubomir](https://www.linkedin.com/in/lyubomir-kiprov/), [Christian](https://www.linkedin.com/in/chris-veselinov/);
* **Code Repos:** **[https://github.com/Daniel-K-Ivanov](https://github.com/Daniel-K-Ivanov); [https://github.com/bakasura980](https://github.com/bakasura980); [https://github.com/thcrnk](https://github.com/thcrnk)**
* **Website:** **[https://limechain.tech](https://limechain.tech)**
* **Legal Structure:** Legal Structure: LimeLabs Ltd., incorporated in Bulgaria, Dragan Tsankov 23A, 1113, Sofia, Bulgaria
* **Team's Experience:** 
Since 2017, LimeChain has worked on 50+ blockchain projects, including a strong track record of building developer tools for different protocols such as Ethereum, EOS, Aeternity and Corda. Some of the companies LimeChain has worked with are Celo, P&G, Raiffeisenbank, Status, Dapper Labs and Maker among others. The proposed developer team in particular also has experience with Substrate.

## Development Roadmap :nut_and_bolt: 

* **Total Estimated Duration:** 17 days
* **Full-time equivalent (FTE):** 1.5
* **Total Costs:** 1.181 BTC

### Milestone 1
* **Estimated Duration:** 17 days
* **FTE:** 1.5
* **Costs:** 1.181 BTC


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Implementing the Library |  Delivering a library that supports encoding/decoding the following types: fixed-width integers (signed and unsigned - 8, 16, 32, 64), bool, Big Int, Bool Array, Byte Array, Int Array, String Array, BigInt Array, Hash, Tuple. |  
| 2.  | Unit Tests |Provide unit tests for all of the supported types.|
| 3.  | Documentation |README file describing how to import, use and run tests for the library. |


## Additional Information :heavy_plus_sign: 
LimeChain hopes to become an important part of the Polkadot development ecosystem, supporting the network with different developer tools and integrations. AssemblyScript implementation of the SCALE Codec would be the company’s first project on Polkadot, and along with a potential AssemblyScript implementation, would drastically help our team in its onboarding with the tech stack while adding value to the developer community right away.

Although there are other implementations of the codec, each one of them serves different purposes. Each of these projects delivered the codec in different languages. We think that having AssemblyScript implementation of the codec will benefit the development of an AssemblyScript Runtime Generation framework.

- Are there any teams who have already contributed (financially) to the project? No
- Have you applied for other grants so far? Not in the Polkadot ecosystem. LimeChain has received and delivered on grants from The ETH Community Fund, Maker DAO and Aeternity.
 
