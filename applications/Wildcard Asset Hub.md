# WILDCARD Asset Hub


- **Team Name:** PolyCrypt GmbH
- **Payment Details (USDC,DOT):** 12fxpnqQeRdph6xH8PJ71EFGiFhUavjbvd2at5vAnhLdzGsu 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 3



## Project Overview :page_facing_up:

A trustless multi-chain L2 enabling seamless NFT and asset transfers across Polkadot, Ethereum, and beyond.

### Overview


WILDCARD is a next-generation, trustless multi-chain L2 protocol designed to eliminate ecosystem lock-in for NFTs and fungible assets. It transforms gaming and web3 markets by offering gasless, near-instant transactions and a non-custodial marketplace for secure asset minting, transfers, and trading. As a blockchain-agnostic solution, WILDCARD simplifies secure token bridging, allowing creators to launch chain-independent collections, games, and web3 experiences effortlessly.

WILDCARD seamlessly integrates into the Polkadot ecosystem through the WILDCARD Pallet, enabling easy deposits and withdrawals of Polkadot assets across parachains and to/from external chains. By leveraging XCM, it enables asset interoperability across the entire Polkadot network through a single parachain while also extending connectivity to non-Substrate ecosystems

A critical next step for WILDCARD is Polkadot Asset Hub, which enhances asset management and interoperability within the network. Asset Hub's first-class interface for fungible and non-fungible assets provides an efficient, low-cost infrastructure for asset creation and transfers. Integrating with Asset Hub strengthens WILDCARD’s cross-chain liquidity and ensures faster, more scalable NFT movements across different blockchains.

Our core motivation is to bridge Polkadot and Ethereum, expanding access to NFTs and fungible assets while enhancing interoperability, scalability, and security across gaming, digital assets, and web3 services.
WILDCARD is committed to breaking the silos of isolated NFT ecosystems by enabling seamless onboarding and offboarding of assets between Substrate-based chains and external networks.
Through the use of Trusted Execution Environments (TEEs), WILDCARD ensures secure cross-chain operations and smooth integration with gaming platforms and traditional Web2 services, lowering the barrier to entry for external developers and users alike.

Unlike existing solutions like SnowBridge and XCM, which primarily focus on bridging fungible assets, WILDCARD is designed specifically for NFTs and is not limited to substrate-based ecosystems. Our use of Trusted Execution Environments (TEEs) enhances security, ensuring smooth and safe integration with gaming platforms.

**Roadmap & Milestones**
* 2020 – CommiTEE paper published (https://eprint.iacr.org/2020/1486)
* 2020 – ETHOnline 🚀 Hackathon Winner & Ethereum’s Impact Summit
* 2022 – Ajuna & PolyCrypt collaboration on W3F Grant
* 2023 – Publication of the CommiTEE protocol in EuroS&P
* 2023 – WILDCARD development kickoff (Polkadot Decoded), legal formation
* 2023 – MVP Milestone: NFT transfer on ETH Goerli ↔ Bajun Rococo
* 2024 – MVP Demo Milestone: NFT transfer on Bajun Rococo ↔ ETH Sepolia
* 2025 – Enhanced resilience & failure resistance supported by TrustChain EU Grant
* 2025 – Integration of Polkadot Asset Hub

With WILDCARD and Asset Hub, we’re paving the way for seamless asset movement across substrate-based and external ecosystems, unlocking new possibilities for NFT projects, gaming, and web3 innovation.


### Project Details

![](https://github.com/ssafai/temp/blob/0fe8f1aa4198faaa0a20d5a2da6025e9077c25ab/architecture.png)


***Architecture:*** The WILDCARD L2 ledger runs inside a TEE, tracking the full consensus of the various connected chains via chain-specific secondary TEEs, and extracts protocol-specific events (such as token deposits), producing corresponding wrapped tokens on the L2 ledger. An untrusted operator acts as a message relay between users and the TEE, and orchestrates the general service. User-hosted (1:n honesty/availability) watcher TEEs ensure that if the system freezes due to an outage, all chains will freeze on the same checkpoint, guaranteeing the system to always be in a consistent state. When the outage is resolved, the system restarts from the checkpoint it was frozen on. The above diagram shows the current state of development and the plans we have for mainnet maturity and beyond. The most significant additions will be increased redundancy for stronger availability guarantees and more systematic service orchestration, including an administration control panel and safe UI / SDK delivery strategy using IPFS (to protect users from being served malicious frontends) or similar.

![](https://github.com/ssafai/temp/blob/4952fbb97bd28e3c7f59453f37f610b7a6b11826/protocol.jpg)

***The bridging protocol:*** Tokens (fungible or non-fungible) get deposited onto the L2 ledger, remaining locked on the original chain. A wrapped token is issued on the L2 ledger for the same account that deposited it. We use a chain/type/collection descriptor on our L2 to track tokens from various chains. The wrapped token is then transferred to the destination account, which then issues an exit request. On the next epoch shift, the wrapped token is designated for withdrawal to the requested destination chain in the balance proofs issued by the L2 TEE. Next, the system waits for the finalisation of the finished epoch. Finalisation is achieved when we deem the balance proofs to be data-available to all users, which is determined through a challenge/response mechanism. Once the epoch is finalised, the user can redeem his balance proof to acquire a corresponding wrapped token on the destination blockchain (as a native collection with the same metadata as the original collection on the origin chain). Re-depositing a wrapped token onto the L2 will translate it back to the multi-chain asset descriptor referring to the original token. As opposed to native tokens, wrapped tokens get burned upon re-deposit, and withdrawal to the origin chain will unlock the original token.

If the operator fails to respond to a challenge to publish balance proofs, the system will freeze to the last finalised epoch to protect against malicious operation and to guarantee that users can always withdraw their funds. The watcher TEEs detect the freeze event and are authorised to propagate it across all connected chains (acting as single-purpose cross-chain oracles), so that it is guaranteed that the system halts in a consistent, well-defined state. The unfreeze protocol announces the L2 TEE’s restart (from the frozen epoch’s snapshot) on-chain, and after ensuring that only one TEE instance is running, the system resumes.

We also added a protocol to let us handle chain outages gracefully without causing the entire system to halt and freeze. As we plan to connect many chains to our system, this becomes a more probable risk we need to address in advance.

*Tech stack:* The initial codebase was mostly written in Go using the EGo toolset for writing TEE applications in Go. Since we reached general maturity of the project, we have started to migrate components to Rust for better performance and auditability. The core TEE only indirectly interacts with the various blockchains via the chain-specific TEEs that act as intermediaries and abstraction layer, as well as encapsulating third-party blockchain-specific code away from the core service, to reduce the attack surface. We ship a collection of web widgets and a typescript SDK to allow third-party developers to integrate WILDCARD into their dApps or websites.

*What do we not provide/implement*
* Our project will not include smart contract functionality directly on our L2. Our L2 is a pure asset management layer interconnecting various chains.
* We do not require users to buy a specific token to use our service. Fees can always be paid in a supported chain’s native currency.


### Ecosystem Fit
Polkadot currently offers various modules for NFT usage. Some are pallet-native, like the old pallet_unique and the new pallet_nfts, while others exist within EVM-based parachains. However, NFT ownership remains tightly bound to the ecosystem in which the asset is minted or issued. Currently, there is no solution that enables truly blockchain-agnostic NFT transfers between parachains,from the relay chain to a parachain or across different blockchain ecosystems (for example Ethereum). While solutions like XFM NFT may emerge for Substrate-based NFTs, our approach distinctly targets interoperability beyond the Substrate ecosystem, ensuring seamless NFT movement across diverse blockchain networks.

WILDCARD enables businesses, developers, and users to fully leverage NFTs by facilitating seamless cross-chain transfers. By adding Asset Hub compatibility/integration we simplify integration, enhance market accessibility, and unlock broader liquidity across parachains and external ecosystems.

Currently, NFT-based projects within the Polkadot ecosystem face structural limitations, as they remain tied to their specific parachains. This makes it challenging to access broader markets, integrate liquidity, or interact with external blockchain ecosystems. Asset Hub, a dedicated parachain for managing both fungible and non-fungible assets, represents a step toward addressing these challenges. By offering a standardized framework for NFTs, it provides a more structured approach to asset interoperability within Polkadot, though broader cross-ecosystem compatibility remains an ongoing area of development

With WILDCARD, we eliminate the barriers preventing NFTs from reaching new ecosystems. Our solution allows seamless off- and onboarding of assets—both fungible and non-fungible—between substrate-based chains and external ecosystems. By leveraging Asset Hub alongside WILDCARD, we enable NFTs to move across parachains efficiently and access global markets, including Ethereum and beyond.

This advancement ensures that NFT projects are no longer confined to their parachains, unlocking broader market access, increased liquidity, and greater adoption across multiple ecosystems.

Within the Polkadot Ecosystem, WILDCARD distinguishes itself through its use of Trusted Execution Environments (TEEs) to enhance asset accessibility. Unlike other projects in this space, such as SnowBridge &  XCM, which primarily focus on bridging fungible assets, WILDCARD broadens its scope to include a diverse array of asset types, notably focussing on non-fungible assets. This capability not only differentiates WILDCARD within the ecosystem but also facilitates smooth integration with gaming platforms, thereby solidifying its unique and pivotal role in the Polkadot network




## Team :busts_in_silhouette:

The PolyCrypt team consists of leading academic researchers in the off-chain space and experienced software developers of blockchain and cryptographic software. 

### Team members

*	Hendrik Amler (Co-founder, CEO, team and project management, @tinnendo). He holds a master's degree in Computer Science with a focus on IT security.
* Jens Winkle (Core Developer, Software Architect, TEE expert @DragonDev1906). He holds a Master's degree in IT security from TU Darmstadt. He has been working on WILDCARD at PolyCrypt since 2022, and before that wrote his master thesis about an aspect of WILDCARD.
*	Steffen Rattay (Core Developer, Software architect @RmbRT) has been working on WILDCARD since its inception in late 2020 and has been working on the Perun State Channel project since 2019 at PolyCrypt.
* Philipp Lehwalder (Researcher/PhD Student Applied Cryptography & Developer, @cryptphil)
* Sasan Safai (Project- and Product-Management) holds a master degree in business information systems and is responsible for delivering valuable products on time at PolyCrypt.
* Prof. Sebastian Faust (Co-founder, and research lead) is a full professor at the Computer Science department of Technical University of Darmstadt, where he leads the applied cryptography and blockchain lab. His main scientific contributions to the blockchain space are the co-invention of the concept of Proofs of Space (on which the cryptocurrency Chia is based), the first formal analysis of BIP32 wallets, and extensive work on off-chain protocols (co-inventing state channels and virtual channels). Sebastian Faust leads research at PolyCrypt and the protocols used in WILDCARD are based on his work.


We will continue to closely collaborate with Ajuna Network, leveraging their expertise in the gaming sector to drive innovation and enhance NFT and asset interoperability in the Polkadot ecosystem.


### Contact

- **Contact Name:** Hendrik Amler
- **Contact Email:** Hendrik@polycry.pt
- **Website:**  https://polycry.pt/

### Legal Structure

- **Registered Address:** : PolyCrypt GmbH, Hilpertstraße 31, 64295 Darmstadt, Germany
- **Registered Legal Entity:** : PolyCrypt GmbH, Handelsregister Darmstadt HRB 101219, VAT DE339864467
### Team's experience

The PolyCrypt team has extensive experience in applied cryptography and blockchain research as well as in software development. Our team members include the leading researchers on the WILDCARD and Perun State Channel research papers, which have been published at renowned conferences. Furthermore, our team includes experienced developers. Our team members are the main developers of WILDCARD and the go-perun library and therefore provide over 5 years of experience specifically in developing software in the blockchain space.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

- https://github.com/perun-network/perun-polkadot-backend


### Team Code Repos

- https://github.com/perun-network
- https://github.com/ajuna-network/ajuna-pallets/tree/develop/pallets/ajuna-wildcard


Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/tinnendo  
- https://github.com/DragonDev1906  
- https://github.com/RmbRT  
-	https://github.com/cryptphil  
-	https://github.com/darkfriend77 (Ajuna) 

### Team LinkedIn Profiles (if available)
- https://de.linkedin.com/company/polycrypt




## Development Status :open_book:

WILDCARD leverages Trusted Execution Environments (TEE) to build a blockchain-agnostic Layer 2 network. The technical foundation of WILDCARD was researched in 2020 as the  	[CommiTEE protocol](https://www.computer.org/csdl/proceedings-article/eurosp/2023/651200a429/1OFthuPKPLi)  and a prototype has been implemented under the name Erdstall: [Website](https://erdstall.dev/), [Technical Overview Slides](https://docs.google.com/presentation/d/1t-Xn8Zno8Hq-aidn-gIzJ3nujJsa4Zt79pWq8idLIuM/edit?usp=sharing), [SDK](https://github.com/perun-network/erdstall-ts-sdk), [Demo Marketplace](https://drive.google.com/file/d/1J0aVDjArTVZImI_VrFQkrZxEEdxogk3l/view?usp=drive_link). 

Capabilities of the current prototype
*	Ability to Bridge assets between Substrate-based parachains and Ethereum, allowing for seamless asset transfer in both directions. This is particularly beneficial for users operating across multiple games, ecosystems, and marketplaces.
*	Designed to facilitate gasless and instant transactions and trades, a feature that significantly reduces the cost & entry barrier for users engaging in blockchain games.
*	Trustless nature, achieved through user verification of executed code using remote attestation. This method ensures that the code running on WILDCARD is secure and has not been tampered with, thereby maintaining the integrity and trustworthiness of interactions.
*	WILDCARD’s technical foundation allows optimizing for privacy, if needed, for example by (partially) encrypting NFT metadata, entire transactions, or the resulting balance proofs (ownership).
*	The inclusion of a Typescript SDK for both Substrate and Ethereum enhances developer accessibility, enabling easier and more efficient integration of the solution into various projects such as games or marketplaces.
* Features agnostic design built with future extension in mind. This foresight allows for easy adaptation and incorporation of new chains, technologies, and innovations that may emerge in the blockchain space.




## Development Roadmap :nut_and_bolt:





### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 95000 USD
- **DOT %:** 50%)




### Milestone 1 - Chain Enclave (2½ months)
Create a backend for the chain-processing TEE that tracks the AssetHub consensus and extracts the EVM’s emitted events in a provably correct manner. Test that blocks are properly tracked and that events are correctly extracted/decoded.

**1 week:** 

- Set up a local AssetHub testnet, deploy Erdstall Solidity contracts on it, and create test tokens and test transactions.
  
**2¼ months:**
- Adapt the Substrate chain enclave to support EVM event decoding (likely not directly transferable 1:1 from the Ethereum chain enclave).
- Token metadata validation
- Modify existing substrate-enclave (consensus + wildcard-pallet) to make swapping out the pallet for the EVM-based contract easier (code-reuse).
- New substrate-evm-enclave (or modifying the existing substrate-enclave) that uses the solidity/evm pallet instead of the wildcard-pallet).
- Implement data (proof) fetching for contract events and needed storage slots (we already use state_getReadProof in the substrate-enclave).
- Combine substrate proof verification with ethereum proof verification + decoding (both exist already, but in separate enclaves)..
- Analyze and support AssetHub-specific characteristics / adjust the code accordingly.
- Component testing and quality assurance 

**Estimated duration: 2,5 months**
**FTE: 2**
**Costs: 50,000 USD**


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0|
| **0b.** | Documentation | We will provide inline documentation of the code for the chain enclave.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests using our existing test-suite |
| **0d.** | Docker | We’ll provide a Dockerfile to run just the chain enclave (data fetching + decoding) starting from a given block, running against a public testnet. This will not run in SGX but still executes the same code, demonstrating that we can follow the chain's consensus and decode contract events. It will not contain the Wildcard enclave itself, which requires additional setup and MS1 doesn’t contain everything needed to run  Wildcard with AssetHub. |
| **1.** | Binary | We will deliver an SGX binary that checks consensus of the chain, verifies proofs about the state of the contract and outputs events used for further processing in the existing CoreTEE |
| **2.** | Binary | We will deliver a binary that can fetch data and proofs from the chain and give them to the SGX binary for processing. The output of this binary is the event data as it is needed by the CoreTEE. |




### Milestone 2 - Support in CoreTEE and deployment on testnet (1½ months)
- Add support for the new chain enclave (MS1) to the core WILDCARD enclave and the TEE watcher code.
- Add frontend UI support for AssetHub in our TypeScript SDK.
- Test and deploy in our staging environment, connected to (public) testnet

**1 week:**
  
- Adapt the watcher so that it can understand the chain and issue token metadata proofs for tokens on this chain.

**1 week:**

- Modify the core enclave to support this new type of chain (including chain type, address formats, assigning a chain ID in the chain enum, etc.).

**1 month:**

- Adjust the TypeScript SDK:
- Add a new backend for AssetHub, re-using components from the substrate and ethereum backends where possible.
- Rework the Ethereum backend, to decouple the underlying chain architecture from the contract ABI to accommodate code reuse between the Ethereum and AssetHub backends.

**Estimated duration: 1,5 month**
**FTE: 2**
**Costs: 30,000 	 USD**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0|
| **0b.** | Documentation | We will provide inline documentation of the code for the chain enclave.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests using our existing test-suite |
| **0d.** | Docker | Deployment of the entire system is non-trivial (requiring an SGX capable CPU, the correct drivers and in the case of docker forwarding the corresponding devices), especially in the multi-chain case (multiple contracts, configs, secret key handling for multiple chains, …). Instead of a docker container we plan to deploy into a staging environment containing the enclaves, a front-end for interacting with the system and the contracts deployed on test chain(s). This staging environment can be used for testing and demonstrating the functionality and will likely be easier to setup and use than a Dockerfile, especially since there is no need to wait for the system to start and await finality.|
| **1**. | Binary | We will add the data fetching and the logic to run the SGX binary from MS1 as part of the Wildcard system (erdstall-runner; chain → CoreTEE) |
| **2.** | Binary | : We will add the required types (addresses, balance proof encoding, signatures, ...) to the CoreTEE to finish the enclave+runner side (CoreTEE → Users)  |
| **3.** | Binary | : We will add required transactions to the operator binary for interacting with AssetHub (instead of just passively reading state; CoreTEE → chain)  |
| **4.** | SDK/Libary | : We will extend the existing Wildcard TypeScript SDK to include support for Depositing from and withdrawing to AssetHub. (Users → chain)
 |


### Milestone 3 - Live Stability Testing and Bug Fixing, User Study (1 month)

**1 week:**
**This phase focuses on maturity, QA, and exploratory testing:**

- Stability Testing & QA
- Conduct live testing to assess system maturity and ensure stability.

**1 week:**
**Identify and fix critical bugs.**

- Perform exploratory testing, including stress tests and edge cases.
- Peer Review & Code Quality Assurance
- Conduct peer reviews to ensure code quality, maintainability, and adherence to best practices.

**2 weeks:**
**Real-World Integration & User Study:**

- Integrate AssetHub tokens into an Ajuna game for practical validation.
- Explore bridging tokens from other chains to AssetHub.
- Conduct a user study or collect feedback from early adopters to refine the experience.


**Estimated duration: 1 month**
**FTE: 2**
**Costs: 15,000 USD**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0|
| **0b.** | Documentation | We will provide inline documentation of the code for the chain enclave.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests using our existing test-suite |
| **0d.** | Docker | Deployment of the entire system is non-trivial (requiring an SGX capable CPU, the correct drivers and in the case of docker forwarding the corresponding devices), especially in the multi-chain case (multiple contracts, configs, secret key handling for multiple chains, …). Instead of a docker container we plan to deploy into a staging environment containing the enclaves, a front-end for interacting with the system and the contracts deployed on test chain(s). This staging environment can be used for testing and demonstrating the functionality and will likely be easier to setup and use than a Dockerfile, especially since there is no need to wait for the system to start and await finality.|
| **1.** | Report | Stability Testing & QA: Comprehensive Stability Test Report outlining system maturity, stability metrics, and identified vulnerabilities. |
| **2.** | Report | Code Quality Assurance Report summarizing peer review findings, issues identified, and actions taken to address them.|
| **3.** |Report |User Study:User Study Summary Report including feedback collected from early adopters, actionable insights derived, and recommended enhancements. |






## Future Plans

WILDCARD plans to offer flexible payment models for its L2 ledger, including per-transaction fees or freemium/tiered subscriptions. In the short to medium term, the focus is on expanding cross-chain connectivity (e.g. to Roll-Ups like Optimism), enhancing accessibility, and improving user experience (i.e. in gaming with Ajuna) to match Web2 standards. Long-term goals include integrating with the Web2 ecosystem and enabling user-hosted L3 TEE services with smart-contract-level trust.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

We have a long-standing working relationship with the Polkadot ecosystem and have already delivered multiple successful projects. For example, we previously collaborated with Ajuna on a grant to improve the NFT experience. You can find that submission here:  You can find our submission here: https://github.com/w3f/Grants-Program/blob/master/applications/perun_app_channels.md.
