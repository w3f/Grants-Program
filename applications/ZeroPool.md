# Open Grant Proposal

- **Project:** [ZeroPool](https://zeropool.network)
- **Proposer:** snjax
- **Payment Address:** DAI ERC20: 0xb6F9F891497C0B72a8A817f3D3E3C721fca6f9CC

## **Project Description**

ZeroPool is the first fully anonymous solution for the Ethereum. One can deposit, withdraw, and make transactions inside the project. ZeroPool supports ERC20 and ERC721. We hide the whole graph of the transaction. Gas cost is pretty attractive in our solution (15-40k per transaction), because we are using optimistic rollup. 

All these points explain benefits for the community. True anonymity on the blockchain becomes possible with ZeroPool.

We are interested in cooperation with Web3 because we will be able to make zkSNARK and privacy technologies more attractive and clear for developers. Also, we will be able to attract more users and attention to our project.

Private transactions are a rather atypical development for blockchain. There are two differences from common dApps: our dApp needs to manage local client/browser-side database and zkSNARK prover requires heavy computational complexity. We need to optimize the solutions not only at the opcodes level and algorithms but also at a more high level, like interactions between all components (UI, cryptography, local database, blockchain). 

Here is a tech description, how our solution works: [State of Zeropool - scaling anonymous transactions for Ethereum](https://ethresear.ch/t/state-of-zeropool-scaling-anonymous-transactions-for-ethereum/6946). 

##  

## **Team members**

- Igor Gulamov / Applied cryptography, architecture, rust

https://github.com/snjax 

igor.gulamov@gmail.com

Igor is responsible for cryptography, architecture, coordination, and team management. Also, Igor is responsible for research and finding out the best way of adapting ZeroPool for Web3.

- Alexandra Gulamova / Business development, community, UX, administrative

Non-technical tasks for our interaction requires a separate person. All applications,  reports, coordination questions. Also, it is needed to follow up with the community to adopt and support this project. 

- Dmitry Vdovin Rust/wasm developer 

https://github.com/voidxnull 

Dmitry has experience in the development of wasm and rust applications, backend and microservices, interacting with the blockchain.

Rust/wasm developer is full-time, he is responsible for developing wasm part of the client-side application and also there are client-side bases among the tasks. It takes a lot of time and affords. 

- Samuele Landi Rust/blockchain developer

https://github.com/samuelelandi 

Samuele has experience in rust, blockchain, and polkadot development.

Rust/blockchain developer builds relayer and maybe some parts of the pallet, which is needed for cryptography adapting for the final product.

- Anton Pegov Frontend developer 

https://github.com/antonpegov 

Anton has experience in fronted (including fronted for Ethereum DApps).

We need a separate position for the frontend developer because the scope of skills of other team members does not imply strong frontend skills. Anton covers this scope giving time for others to work hard on the codebase. 

## **Team Website**

- https://zeropool.network

## **Team's experience**

Igor is the tech lead of the team. Igor is responsible for core parts such as ZeroPool architecture and SNARKs. 

Igor has great experience in research and product creations. He started as a researcher in physics at the same time he created some IT products for the b2b sector. Igor came to the blockchain as VP Eng in BANKEX Foundation and then became CTO there. Also, Igor has great experience in blockchain research (https://ethresear.ch/u/snjax/) and built [Fawkes-Crypto library](https://github.com/zeropoolnetwork/fawkes-crypto), providing development zkSNARKs as native applications in pure Rust. 

Dmitry has a strong experience in rust. He worked on different IT projects before. 

Anton is responsible for the frontend. He has perfect experience and skills in UX/UI. He worked for international IT companies. Also, he has experience in blockchain. He created a frontend for several dApps.

Samuel has great experience in IT. He worked in application-directed cryptography. So he has deep knowledge of encryption, communication protocols, and coder of original communication protocols for encrypted communications. Also, Samuel worked on several blockchain projects with Polkadot (Substrate), Ethereum, and Bitcoin.

Alexandra is responsible for product development and cooperation with other teams and companies.  Alexandra has great experience in IT projects and business development. Also, she is responsible for non-coding questions in the project. 

## **Team Code Repos**

- https://github.com/zeropoolnetwork
- https://github.com/snjax
- https://github.com/voidxnull 
- https://github.com/samuelelandi 
- https://github.com/antonpegov 

 

## **Team LinkedIn Profiles**

- https://www.linkedin.com/in/igorgulamov/<Igor Gulamov >
- [https://www.linkedin.com/in/alexandra-gulamova/](https://www.linkedin.com/in/alexandra-gulamova-a4102a57/)<Alexandra Gulamova>

## **Development Roadmap**

* **Total Estimated Duration:** 4 months
* **Full-time equivalent (FTE):**  3 FTE
* **Total Costs:** 63000 DAI

### Milestone 2 — Implement zkSNARK circuit and cryptography for private transaction

* **Estimated Duration:** 2 months
* **FTE:**  3
* **Costs:** 36000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 and MIT |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can sign, proof and verify the transactions. |
| 0c. | Testing Guide | We will build a testing environment to demonstrate functionality. Proved transactions could be verified in substrate pallet application (1) | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | zkSNARK circuit and cryptography library | We will create a library for proving and verifying private transactions, compatible with the substrate pallet |  


The solution is based on [Fawkes-Crypto](https://crates.io/crates/fawkes-crypto) library. We implement a join-split transaction with hidden inputs from a merkelized anonymity set. Also we are going to support spending, receiving and decryption keys, like in ZCash. 

The resulting software will be available to sign and prove, encrypt and decrypt transactions :

- deposits
- withdrawals
- transfers



### Milestone 3 — Implement private transactions contract for substrate pallet and client library

* **Estimated Duration:** 2 months
* **FTE:**  3
* **Costs:** 27000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 and MIT |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can execute private transactions on the substrate node. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 0d. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. 
| 1. | Substrate module: private transactions | We will deliver a working module, demonstrating private transactions in the substrate chain |    
| 2. | Wallet library: | The js&wasm wallet library will support interaction with the contract (perform transactions and view the state) from the frontend side. |
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |

The contract will support transfer, deposit, and withdrawal for multiple assets (DOTs, tokens, presented on the parachain). All transfers are private (balances, user accounts, asset types, transaction graph are hidden).


## **Future Plans**

- Trusted setup
- Audit
- Support assets from other para chains for private transfers

