# Legion

- **Team Name:** Deadends
- **Payment Details:**
  - **DOT**: 1ZRpbpxBZDvieukwzNgqQW1A7kr4o46yPi2nVREDgUAMZZ9
  - **Payment**: 1ZRpbpxBZDvieukwzNgqQW1A7kr4o46yPi2nVREDgUAMZZ9 (USDC)
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1 🐣

## Project Overview :page_facing_up:

### Overview

Legion – Passwordless, zero-knowledge authentication for Web3 and Polkadot applications.

Brief Description

Legion is a fully client-side, zero-knowledge authentication toolkit that allows users to log in without usernames, passwords, or server-stored secrets. Authentication is performed using a Halo2 proof generated in WebAssembly, combined with a hardware-bound WebAuthn key for device security. Legion ensures that the server learns only that “a valid user authenticated,” without being able to determine which user or device was involved.

Legion provides developers with a simple SDK to integrate ZK-based login into dApps, wallets, parachain dashboards, or Web2 applications. It includes a WASM prover, a Rust verifier, Merkle-tree based anonymity sets, device identity trees, and reproducible reference implementations.

Relation to Substrate / Polkadot / Kusama

Legion is designed to bring privacy-preserving, passwordless authentication to applications built in the Polkadot ecosystem. It can serve as:

* A drop-in authentication layer for parachain dashboards, staking portals, governance interfaces, and other Substrate-based UIs,

* A trusted-setup-free identity primitive suitable for Polkadot’s future ZK-focused direction (particularly regarding Kusama’s ongoing ZK experimentation),

* A developer tool that allows builders to integrate modern ZK authentication without needing deep cryptographic expertise, lowering the barrier to privacy adoption across the ecosystem.

As Polkadot moves toward stronger privacy, zero-knowledge infrastructure, and user-owned identity, Legion provides foundational authentication components that can be extended to DID systems, access control, cross-chain identity, and on-chain verification primitives.

Why This Project

Current authentication models, passwords, OAuth tokens, centralized identity providers are incompatible with the principles of decentralization and user sovereignty. At the same time, zero-knowledge systems are often complex, slow, or impractical for everyday integration.

Legion was created to solve these problems by:

demonstrating that zero-knowledge login can be practical, private, and user-friendly, giving developers a simple toolkit to adopt ZK authentication without advanced cryptography skills, providing users with an identity system that is fully local, self-sovereign, and privacy-preserving, and contributing a reusable primitive that can strengthen Polkadot’s ecosystem-wide commitment to decentralized identity and privacy.

Our goal is to make Polkadot one of the first major ecosystems with a production-ready, zero-knowledge authentication standard that protects users without introducing friction.

### Project Details


Legion is a client-side zero-knowledge authentication toolkit that allows users to authenticate without usernames, passwords, or server-stored secrets. The current prototype includes a working WebAssembly Halo2 prover, a Rust-based verifier, user and device Merkle trees, blind registration, WebAuthn-based device binding, and an end-to-end authentication flow with session protection.

Below we provide the required components in accordance with the Web3 Foundation’s expectations.

---

### **User Interface / UX Flow**

Although Legion is primarily a cryptographic infrastructure tool, it includes a minimal UI demonstrating the entire authentication lifecycle:

#### **1. Registration Screen**
Users generate a 24-word recovery phrase. The client derives the credential hash, creates a WebAuthn hardware key, and performs blind registration with the server. The browser triggers a WebAuthn biometric prompt (TPM / Secure Enclave). A device-specific, non-exportable key is created and linked to the user tree.
<img width="1903" height="854" alt="image" src="https://github.com/user-attachments/assets/2bc8f408-3fa4-40eb-bdaf-02abf46a3aa9" />

#### **3. Login Screen**
Users authenticate by touching their fingerprint sensor. The UI displays progress of WASM proof generation, proof size, and time estimates.
<img width="1919" height="1015" alt="image" src="https://github.com/user-attachments/assets/e0462aa6-0cb8-4588-9d60-779e073331f1" />

#### **4. Session Status Screen**
Once authenticated, the screen shows session validity, device identity, and a button to revoke the device.
<img width="1919" height="1017" alt="image" src="https://github.com/user-attachments/assets/edb5dd6b-b5aa-4d82-bbab-1b3c54d2f05d" />

Overview of the prototype is also available on YouTube: 
<a href="https://youtu.be/nvvHuDyxeIA">YouTube Link</a>

---

### **Architecture 🏗**

Legion follows a three-layer architecture designed for privacy, portability, and minimal server trust.

#### **1. Client (Browser + WASM Prover)**
Handles all sensitive operations:
- BIP-39 credential derivation  
- Blake3 + Poseidon hashing  
- Merkle tree path computation  
- Halo2 proof generation  
- WebAuthn biometric verification  
- Nullifier creation  
- Linkability tag creation  
- IndexedDB storage for Merkle trees  

This ensures that user identity and secrets never leave the device.

#### **2. Server (Rust / Axum Verifier)**
Performs:
- ZK proof verification  
- Challenge generation and validation  
- Nullifier replay protection  
- Session token creation  
- Device revocation checks  
- Persistence with RocksDB  
- Session/cache management with Redis  

The server learns only that “a valid user authenticated,” not which user or device.

#### **3. Storage Layer**
- **Redis:** Session tokens, linkability tags  
- **RocksDB:** User Merkle tree, device trees, nullifier history  

<img width="2816" height="1536" alt="legion-arch" src="https://github.com/user-attachments/assets/1917d6dd-6158-4954-8c99-594b676100ce" />

## Technology Stack 💻

- Rust (Halo2 / PLONK)
- WASM, BIP-39, Poseidon Hash, Blake3 Hash
- Merkle Trees (User Tree & Device Tree)
- Ring Signatures, WebAuthn Level 2
- JavaScript (Vanilla JS)
- IndexedDB
- Axum (Rust)
- Redis, RocksDB
- Docker
- Nginx


### Ecosystem Fit 🌿

There are currently no general-purpose, zero-knowledge authentication frameworks in the Polkadot ecosystem. Existing login methods rely on wallets or centralized authentication, which reveal account identities and limit privacy-critical applications such as anonymous governance or public-sector digital voting.

Legion fills this empty space by providing a client-side, passwordless, anonymous ZK authentication layer that can be integrated into parachain dashboards, wallets, dApps, or governance interfaces. Unlike standard wallet login, Legion allows a user to prove they are authorized without revealing which user they are, making it suitable for private governance, private access control, and even government-scale anonymous voting systems.

While identity-related tools exist (e.g., Polkadot.js extension, DID projects), they do not offer anonymous authentication or Halo2-based proofs bound to hardware devices. Legion focuses specifically on developers who need strong, privacy-preserving authentication without deep cryptography knowledge.

Our target audiences include parachain teams, dApp developers, wallet developers, and organizations needing private login for governance, enterprise access, or anonymous digital voting. Legion enables these applications to adopt zero-knowledge authentication simply and securely across the Polkadot and Kusama ecosystem.

## Team :busts_in_silhouette:

### Team members

- Nantha Bala - Project Core Dev.

### Contact 📞

- **Contact Name:** Nantha Bala Ponmudi
- **Contact Email:** nantha.ponmudi@gmail.com
- **Website:** https://nantha.dev/

### Legal Structure 

- **Registered Address:** No legal structure yet.
- **Registered Legal Entity:** No legal entity yet.

### Team's experience 🔎

- Nantha is the creator and core developer of Legion. He has designed and implemented the entire system, including the Halo2 circuit, WebAssembly prover, WebAuthn hardware binding, Merkle-tree architecture, and the session-security layer. His work focuses on practical zero-knowledge authentication, browser-based proving performance, and developer-friendly security tooling.

- He has spent the past year researching passwordless authentication models, decentralized identity, and privacy-preserving login systems, and has built Legion as a complete working prototype demonstrating that ZK authentication can be fast, usable, and fully client-side. The project includes a Rust verifier, WASM prover, SDK components, and an integrated deployment workflow.

### Team Code Repos 📚

- https://github.com/Deadends/legion

### Team github accounts 🧑‍💻

- https://github.com/Deadends/  Nantha

### Team LinkedIn Profiles 🧑‍🎓

- https://www.linkedin.com/in/nantha-bala-629458219/

## Development Status :open_book:

- https://github.com/Deadends/legion This is the repository for Legion, which already includes a functioning zero-knowledge authentication pipeline: WASM prover, Rust verifier, Merkle-tree based anonymity sets, nullifier tracking, and hardware-bound WebAuthn authentication. Users can register, generate proofs locally, and authenticate fully client-side without exposing identity. The prototype works end-to-end; however, the current implementation is not yet optimized, not fully documented, and lacks structured SDK components and polished UI, which will be completed during the milestones.


## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

### Overview

- **Total Estimated Duration:** 1 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 10,000 USD
- **DOT %:** 50%

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD

Number | Deliverable | Specification
------|-------------|--------------
0a. | License | MIT
0b. | Documentation | Inline documentation of all modules + complete setup instructions for prover, verifier, WebAuthn, local storage, SDK usage, and integration flow.
0c. | Testing Guide | Unit + integration tests for prover, verifier, Merkle proofs, nullifier logic, device binding, and client-side security flows; guide on how to run tests.
0d. | Docker | Dockerfiles for verifier, Redis, and a minimal demo client for easy local testing.
0e. | Article | Technical article outlining Legion’s design, zero-knowledge authentication model, WASM proving constraints, and developer integration guidelines.
1 | Secured Client-Side Storage & Events | Hardened client-side logic for Merkle tree persistence, key derivation, device binding, and event handling with integrity checks, anomaly detection, and encrypted storage.
2 | Prover Stability Improvements (WASM) | Refactor Halo2 WASM prover for stability, clearer module boundaries, predictable memory usage, consistent error handling, and SDK-friendly APIs.
3 | WebAuthn Device Binding | Implement and validate hardware-bound authentication (TPM/Secure Enclave) with biometric prompts integrated into the Legion auth flow.
4 | Legion Rust SDK | Publish `legion-auth-sdk` offering reusable utilities for Substrate developers: hashing, Merkle verification, session checking, proof verification wrapper, and integration helpers.
5 | Minimal Reference Implementation | A small demo application showing registration, device binding, ZK login, and session flow using the refactored prover and Rust SDK.
6 | WASM Compatibility & Performance Report | Research report covering browser/WASM limitations, mobile/desktop compatibility, proving time benchmarks, memory constraints, and recommended circuit optimizations.
7 | Security & Threat Model Documentation | Formal documentation covering threat models, replay prevention, nullifier mechanics, device anonymity sets, session security, and paths toward future on-chain verification.




## Future Plans 🔭

In the short term, Legion will continue to evolve into a stable, well-documented, developer-ready authentication toolkit for the Polkadot ecosystem. After completing the first milestone, the next stage will focus on improving performance, expanding device compatibility, and preparing the core components for optional on-chain verification.

**Long-term maintenance and financing:**  
Legion will remain fully open-source. After the initial milestone, ongoing development will be supported through a combination of follow-up Web3 Foundation grants, optional Open Collective community funding, and applications to external programs such as Google’s Advanced Web Apps Fund. These sources would allow the project to grow sustainably without depending on token sales or proprietary licensing. As adoption increases, integrations with parachain teams and enterprise deployments can also contribute to long-term support.

**Short-term enhancements (post-Milestone 1):**
- Extend SDK documentation and add example integrations for Substrate-based dashboards and dApps.  
- Conduct deeper performance profiling to identify bottlenecks in the prover and reduce total proving time.  
- Expand browser/device compatibility testing, particularly for Android/iOS environments.  
- Produce an implementation roadmap for multithreaded WASM/WebGPU support, where feasible.
- Develop a healthy open-source contributor ecosystem around Legion, including documentation improvements, community discussions, and early integration partners to strengthen long-term sustainability and adoption.

**Breaking WASM limitations and preparing for on-chain verification:**  
While browser limitations currently prevent a fully optimized, multithreaded Halo2 prover, future milestones will explore progressive approaches including circuit simplification, SIMD/wasm-opt optimization, worker-based parallelism, and hybrid proving strategies. In parallel, Legion will define verifiable public inputs and a minimal on-chain verifier design for parachains that may wish to support native ZK authentication in the future.

**Long-term vision:**  
Legion aims to evolve into a battle-tested, foundational authentication primitive for decentralized applications across the Polkadot ecosystem. As the system matures, the roadmap includes:

- **Optional on-chain verification pallets** for Substrate projects, enabling parachains to verify ZK authentication proofs natively and support fully decentralized login flows.
- **Cross-device synchronization mechanisms** allowing users to securely bind and manage multiple hardware identities while preserving zero-knowledge anonymity.
- **Support for lightweight mobile proving**, including progressive optimizations and exploration of browser/WASM capabilities to improve proving times on constrained devices.
- **Integration with privacy-focused identity frameworks** emerging in Kusama’s ZK initiatives, positioning Legion as a core building block for next-generation decentralized identity.
- **Professional third-party audits** of the Rust crates, Halo2 circuits, cryptographic flows, and SDKs to ensure high assurance and correctness in real-world deployments.
- **Adversarial review and reverse-engineering efforts**, engaging security specialists to actively attempt to break the system and identify weaknesses before production adoption.
- **Structured bug bounty and vulnerability discovery programs**, supporting continuous hardening and ecosystem participation in strengthening Legion’s security posture.
- **A standardized, passwordless, privacy-preserving login protocol**, designed to serve as a long-term authentication standard for Polkadot, replacing centralized credential models entirely.


## Additional Information :heavy_plus_sign:

I discovered the Grants Program through the official Web3 Foundation website while researching ecosystem funding opportunities.

- The project already has a functional prototype demonstrating end-to-end zero-knowledge authentication in the browser using Halo2, WASM, WebAuthn, and Merkle-based anonymity sets.  
- No external teams or organizations have financially contributed to the project so far; all development has been self-funded.  
- This is my first application for a Web3 Foundation grant.  
- The repository and initial implementation are already public and open-source, including prover, verifier, WebAuthn integration, and a working local demo. 
