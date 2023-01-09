# Interstellar - Wallet Phase 1

>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** Interstellar
- **Payment Address:**  Ethereum - 0xc5C54DcD7b76b3B26ab4a02f191338F31aD732f6 (ETH)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

“The blockchain ecosystem needs an easy to use interface with hardware wallet security to reach the mass market.”

The main pain points of non-custodial wallet solutions still are:

- **User experience**  [Can an easy to set-up wallet be an efficient customer acquisition tool for DeFi players?](https://medium.com/@jlleleu/can-be-an-easy-to-set-up-wallet-an-efficient-customer-acquisition-tool-for-defi-players-8600812fe01e)  
- **Security** [Are cryptocurrency wallets more at risk than ever?](https://medium.com/@jlleleu/are-cryptocurrency-wallets-more-at-risk-than-ever-cf1ce9725de7)

> We think that current wallet solutions slow down the DeFi adoption.

Interstellar is a novel non-custodial peace of mind mobile wallet with a hardware security level. Based on a Substrate blockchain and SubstraTEE/IntegriTEE workers.

**We can now provide the same hardware security level as hardware wallets with only a mobile and a blockchain**

![Grant-Scheme-White (1)](https://user-images.githubusercontent.com/4605611/145108720-becb76be-6c16-46c8-af69-7e953e5a166d.png#gh-dark-mode-only)

![Grant-Scheme-Black (3)](https://user-images.githubusercontent.com/4605611/145108818-6f8b6158-6c27-4f0d-a104-9d2469c73636.png#gh-light-mode-only)

**Thanks to Trusted User Interface TUI on mobile and Trusted Execution Environment on both mobile and blockchain nodes**

Because TUI is not yet avalaible on all mobile devices we use a Garbled Circuit/Visual Cryptography scheme which provides an alternative that will be complementary down the road to mitigate potential flaws in TUI.

![Iphone-Android-TUI-White (1)](https://user-images.githubusercontent.com/4605611/145201585-5d106219-e51e-44d3-8c1b-95fe99e71455.png#gh-dark-mode-only)

![Iphone-Android-TUI-Black (1)](https://user-images.githubusercontent.com/4605611/145201886-30bafb07-fc1c-4dc0-acf9-f0e9f163fa66.png#gh-light-mode-only)

#### Features

- **Hardware security Level** - TEE on nodes and mobiles (incl. TUI), garbled circuits and visual cryptography secure interface
- **Just download an app** - no registration, PIN, password, passphrase, private key or any secret to store or remember
- **Multichain Wallet** - securely store and interact with native cryptocurrency coins and tokens from multiple blockchains
- **Confirm a transaction with ONLY ONE SCREEN** - no SMS to wait for, no additional 2FA app to use, no QR code to scan

- **Up to 1,000,000 tps** - no tps limit due to slow consensus, thanks to IntegriTEE layer 2 based on hardware enclave technology
- **Social Recovery Service** - leverages the existing Substrate pallet and a novel decentralized autonomous recovery service

> We hope that we will be able to provide a response to the related RFP in the following phases

- **Features to securely send coins with social network messages (even to persons with no-wallet)** - explained in [Can an easy to set-up wallet be an efficient customer acquisition tool for DeFi players?](https://medium.com/@jlleleu/can-be-an-easy-to-set-up-wallet-an-efficient-customer-acquisition-tool-for-defi-players-8600812fe01e)

#### Our solution is designed to support blockchain and DeFi mass market adoption with

- **A decentralized key & asset management service** where the user’s privates keys and signature programs are stored and executed in TEE nodes
- **A decentralized Trusted Transaction Validation protocol** that leverages TEE and TUI features on mobile, combined with One Time Garbled Circuits and Visual Cryptography to provide a **Trusted Authentication and Trusted UI layer** on user devices

The **Interstellar - Wallet Phase 1** W3F Grant Proposal focuses on two of the core components of the Interstellar solution:

- A Substrate Off-Chain Worker OCW Garbled Circuit Factory GCF to manage an external garbled circuit generator service (designed to be used by Substrate developers regardless of the Interstellar solution)
- An implementation of the Trusted Transaction Validation protocol in Substrate pallets to demonstrate the usage of GCF within a Substrate framework and with a mobile  Garbled Circuit evaluator client

Following are other use cases of the Garbled Circuit Factory:

- Every schemes  based on Garbled Circuit generators and evaluators
- Multi Party Computation MPC protocol (when Oblivious Transfer OT will be managed in pallets)
- Proof of history of legitimate computation with reusable Garbled Circuit (Interstellar ongoing research: Detection of adverse code execution during short transaction sessions - work in progress)
- Post Quantum encryption and signature scheme implementations (NIST candidate examples)

### Project Details

#### [Detailed documentation](https://docs.google.com/document/d/1RTPx4EeA0Ek33f-8_Dj7p-qjzBp6VqLrrXNhIrwvFWI/edit?usp=sharing) on the project

- **OCW Garbled Circuit Factory**
- **Transaction Validation protocol pallets (including mobile registry)**
  - **Transaction Validation Screen Technology (Trusted/Secure UI)**
  - **Mobile client GC evaluator**

#### Garbled Circuit Factory **previous work**

The team has already developed a strong authentication solution with circuits based on JustGarble implementation <https://cseweb.ucsd.edu/groups/justgarble/> that we customized with Free XOR and Half Gates and other specific improvements for our needs (pre-computation of our Visual Cryptography Circuits).
We achieved a production ready platform with significant performance on the logic circuit and garbled circuit production with AES-NI. The whole pipeline uses optimized memory management and avoids serialization/deserialization of the different circuit formats: HDL->non-garbled->garbled.

------------

```shell
1 ./circuit_display_gen_bench -nb_circuits_to_generate=5000
2 display_size : 360,154,50,590
3 time in s : 28.1261 s
4 circuits_per_hour : 639975
```

![1844c95c-1b74-4987-8466-4ba14da41ff3 (Custom)](https://user-images.githubusercontent.com/4605611/141327055-ea10f548-d6d2-4b1a-af2e-a059f2f67673.png)

```
5,65 ms per circuits on a Processor 11th Gen Intel(R) Core(TM) i7-11800H @ 2.30GHz, 2304 Mhz, 8 Core(s), 16 Logical Processor(s)
```

--------------------------

#### Technology stack

- VHDL
- C/C++
- Java/Kotlin/Swift
- gRPC
- Rust/Substrate
- IPFS

### Ecosystem Fit

> Where and how does your project fit into the ecosystem?

This project is the first phase of a wallet project. Although, we think that our Trusted Transaction Validation protocol could bring a novel approach to address UX/UI security issues regardless of other features of our frictionless wallet.
We designed our validation transaction protocol to benefit to other wallets or Dapps. We think it could also be complementary down the road to mobile light clients like Substrate Connect (check **Future Plans** section).
  
![TTV overview overview drawio](https://user-images.githubusercontent.com/4605611/144742049-54d3a212-b471-4a69-9f44-adfb150814ca.png#gh-light-mode-only)

![TTV overview overview dark drawio](https://user-images.githubusercontent.com/4605611/144738926-e6f0db47-f7ff-4382-ae5d-251420e23a61.png#gh-dark-mode-only)

>Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

We want to target Dapp providers in the DeFi ecosystem with developer tools to integrate our solution with their Dapps. We think that our value proposition should be attractive to them.
At the same time we want to target newcomers with a Robinhood wallet for Defi that includes an average dollar cost feature.
> What need(s) does your project meet?

The need for a wallet to be simpler to set-up and use, as well as the need for higher security to address the growing malware/banking trojan threats.

> Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

Math Wallet and Gluon are close to our solution.

We think that we could bring a better user experience, security and performance, thanks to a highly scalable layer 2 based on SubstraTEE:

- Math Wallet is based on MPC that requires heavier computation resources. They also envision smartcards with a screen for their users. It's comparable to our level of security, but more expensive, cumbersome to use, less flexible and more complex to deploy than our solution.

- Gluon QR code based transaction confirmation that requires 2 screens is more cumbersome for the user. Moreover, this scheme is already exposed to banking trojans with overlay capabilities*. Although their TPM based approach could be complementary down the road to TEE, to mitigate potential future flaws on Intel SGX.

> *see: A high level attack  description on solutions that use QR code for transaction confirmations [Are cryptocurrency wallets more at risk than ever?](https://medium.com/@jlleleu/are-cryptocurrency-wallets-more-at-risk-than-ever-cf1ce9725de7)

## Team :busts_in_silhouette:

### Team members

- Name of team leader:
- Jean-Luc Leleu
- Names of team members:
- Nathan Prat
- Eliot Leleu
- Jean-Louis Hoenen
- Aude Bourdouxhe
- Philippe Salats (advisor)

### Contact

- **Contact Name:** Jean-Luc Leleu
- **Contact Email:** jeanluc.leleu@protonmail.com
- **Website:** <https://www.interstellar.gg/>

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A - we are still in the process of establishing a legal entity.

### Team's experience

[Team deck](https://docs.google.com/presentation/d/1AuM5YO4ysFqoj3uquQ46NJIprDSaALZrqUqAef-ITns/edit?usp=sharing)

We are now multiple security and fintech  entrepreneurs, security researchers, patents fillers who turned open-source developers and blockchain enthusiasts.

### Team Code Repos

- <https://github.com/Interstellar-Network>

- <https://github.com/nathanprat>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/jlleleu/> Jean-Luc Leleu

- <https://www.linkedin.com/in/nathan-prat/> Nathan Part

- <https://www.linkedin.com/in/eliotjfl/> Eliot Leleu

- <https://www.linkedin.com/in/jlhoenen/> Jean-Louis Hoenen

- <https://www.linkedin.com/in/aude-bourdouxhe-40656b28/> Aude Bourdouxhe

- <https://www.linkedin.com/in/philippesalats/> Philippe Salats (advisor)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  11
- **Total Costs:** 47,000 USD

### Milestone 1 — Implement GCF Substrate modules

- **Estimated duration:** 1 month
- **FTE:**  2.2
- **Costs:** 9,400 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can create and set-up a VHDL Master File, launch Garbled Circuit generation and get the resulted garbled circuit cid on IPFS and associated GC metadata i.e to check one-time code.  |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant. (Content, language and medium should reflect your target audience described above.)  |  
| 1. | GCF Substrate Interface | GCF external service interface to interact with the following Substrate modules and IPFS. |  
| 2. | Substrate module: GCF CFG | We will create a Substrate GCF configuration pallet that will store GCF encrypted configuration information on chain (including cid of master circuit file, master key and other security parameter to ensure security of circuit production.  |  
| 3. | Substrate GCF CFG CLI| A CLI to set-up  GCF configuration pallet. |
| 4. | Substrate module: OCW GCF | We will create an OCW pallet that will control and interact with GCF external service - Launch GC production and get resulted GC cid on IPFS. |  

### Milestone 2 — GC Management in Substrate modules and Transaction Validation protocol use case (first part)

- **Estimated Duration:** 1 month
- **FTE:**  2.2
- **Costs:** 9,400 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can manage garbled circuit cid in pallets, with a transaction validation use case example.   |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant. (Content, language and medium should reflect your target audience described above.)  |  
| 1. | Substrate module OCW GCP  | We will create an OCW GC provider to interact with a GC evaluator/IPFS client.  |  
| 2. | Substrate module: Authenticator| We will create a Substrate Authenticator  pallet that will implement the Transaction Validation protocol to manage GC evaluator and IPFS client.|  
| 3. | Substrate GCP CLI| A CLI to request GC cid for evaluation. |
  
### Milestone 3 — Transaction Validation protocol with  mobile use case (second part)

- **Estimated Duration:** 1 month
- **FTE:**  2.2
- **Costs:** 9,400 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can manage garbled circuit cid in pallets. with a transaction validation use case example with mobile GC evaluators.   |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant. (Content, language and medium should reflect your target audience described above.)  |  
| 1. | Mobile Client (android 1.a/iOS 1.b) | We will create android and iOS mobile clients with GC evaluators and IPFS light clients to manage Transaction Confirmations. |  
| 2. | Substrate module Mobile Registry | We will create a Substrate Mobile Registry pallet to deal with mobile clients (android/iOS) and mobile public Keys and signature verifications. |  
| 3. | Substrate module: Authenticator with mobile | We will add mobile features to Substrate Authenticator/Transaction Validation Mngt  pallet.|  

### Milestone 4 — Integration with SubstraTEE/IntegriTEE

- **Estimated Duration:** 1 month
- **FTE:**  2.2
- **Costs:** 9,400 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can manage garbled circuit cid in pallets with a transaction validation use case example in TEE environment with SubstraTEE.  |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains what was done/achieved as part of the grant. (Content, language and medium should reflect your target audience described above.)  |  
| 1. | Substrate modules Authenticator port in TEE | We will migrate Authenticator in SubstraTEE/IntegriTEE workers. |  
| 2. | Substrate module Mobile Registry port in TEE | We will migrate a part of the Mobile Registry pallet in SubstraTEE/IntegriTEE workers. |  


### Milestone 5 — GCF Garbling service part in TEE (amended)

- **Estimated Duration:** 6 weeks
- **FTE:**  2.2
- **Costs:** 9,400 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT  |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can manage GCF garbling service part  in IntelSGX  |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will write and share (not officially publish as we are still in stealth mode) an **article** that explains what was done/achieved with the grant. (Content, language and medium should reflect your target audience described above.)  |  
| 1. | replacement of JustGarble (GPL) with Swanky/Fancy-Garbling (MIT)| In order to use a TEE framework we need a non-GPL garbling scheme code | 
| 2. | part of GCF external service in TEE | We will migrate the circuit garbling service part in TEE/Intel SGX| 
| 3. | android client garbled circuit evaluation updated | we will update the evaluator on android with the Fancy-Garbling scheme|
  

> **notes regarding this change:**

>1: We have decided to let the creation of the Master/Configuration logical circuit part managed by ocwCircuit outside of TEE because api_circuit is not critical from a security standpoint in our use case.So, we have no reason to manage it within a TEE.
>  
>2-3: We replaced the GPL code of JustGarble by Fancy-Garbling because we can't use GPL licence with a TEE framework. Fancy-Garbling is a classic garbling scheme using a different circuit file format and mainly design for multi-party-computation use cases. So, the change slightly impacts circuit garbling performance. As a consequence we aim at proposing a slight refactoring of the code to ensure performance optimization in a follow-up grant to achieve performance at least comparable to JustGarble. Potentially adding a permutation based garbling scheme like the one used by JustGarble if required.




## Future Plans

>How we intend to use, enhance, promote and support your project in the short term:

- We aim to create a user community and get in talks with Dapp and especially DeFi players with a tailored value proposition for them
- Game Theory inspired Tokenomics paper
  - Continuous Liquidity Pool (native cross-chain swaps)
  - Seignorage
  - Quadratic Voting

- Wallet MVP launch with basic features including Social Recovery and Key management service (potential following grant application submissions)

- Garbled Circuit Evaluator in WASM to enable its use on browser and nodes - Transaction Validation variants on browsers
- Improvement of our Visual Cryptography scheme by reintroducing full Visual Cryptography frames to display characters, figures and images. This should increase the complexity, cost and resources required for an attack
- Potential research grant on our real-time malware detection scheme
- Add Oblivious Transfer OT in our pallet to enable the usage of MPC with our GCF
- Add behavioural biometric feature

> Medium-term plan

- Bounty to crack our transaction validation protocol when both Android protected confirmation and detection of adverse code execution will be deployed

- Continuous Liquidity Pool (like THORChain but with higher security and performance that leverages TEE/MPC/TTS + Trusted Transaction Validation protocol with multisig options (mobiles + yubikey) for validators and large liquidity owners

- Seignorage mechanism by creating synthetic assets (like UST on the Terra blockchain)

- Quadratic Voting/Funding features to incentivize the CLP and Seignorage functions and address potential future use cases

>The team's long-term plans and intentions in relation to it.

- Include a TEE layer 2 to manage a Root of trust based on full HSM hardware (with YubiHSM type of solution) to provide a 3 tier distributed HSM capability

- Investigate potential integration with Substrate Connect to increase the security and flexibility of our solution with potential additional on-chain/off-chain data/features at mobile/browser level

![3T Distributed HSM overview drawio](https://user-images.githubusercontent.com/4605611/144741459-3776d2a7-a64b-40f8-b8a9-98abd590e452.png#gh-light-mode-only)

![3T DHSM overview dark drawio](https://user-images.githubusercontent.com/4605611/144741651-ff9f0bb0-91cb-4b76-8f0e-097395303723.png#gh-dark-mode-only)

- Research on other human brain decryption capabilities (like Visual Cryptography, Audio Cryptography, etc...): the long term goal is to increase our capabilities to differentiate bots with IA capabilities from real humans ([Review of the use of human senses and capabilities in cryptography](https://www.sciencedirect.com/science/article/pii/S1574013720304408))

## Additional Information :heavy_plus_sign:

> **How did you hear about the Grants Program?**

- We are following the Polkadot ecosystem since its early stage

> Others

- We have just started a conversation with a team working in stealth mode on a massive blockchain project that is interested in our solution
