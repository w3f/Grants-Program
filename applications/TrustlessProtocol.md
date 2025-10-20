# **Trustless Protocol: Zero-Knowledge-Based Trustless Wallet Infrastructure on Polkadot**

## **Team Information**

**Team Name**: Trustless Protocol\
**Payment Details**:

-   **DOT Address**: 12mikVBsdEqZmS82YGK7s1cKxh2M6nC6BggfAYTWswRH3qtw

-   **USDC Address**: 12mikVBsdEqZmS82YGK7s1cKxh2M6nC6BggfAYTWswRH3qtw

-   **Level**: 1

## **Project Overview**

### **Tagline**

Trustless Protocol A Zero-Knowledge-Based Distributed Wallet
Infrastructure for Secure, Non-Custodial Key Management on Polkadot

### **Brief Description**

Trustless Protocol is a zero-knowledge (ZK)-based wallet architecture
that enables users to maintain non-custodial wallets without exposing
private keys. Leveraging Zero-Knowledge Proofs (ZKP) and Distributed Key
Generation (DKG), the system establishes a truly trustless security
model. Users can prove ownership of their wallets through cryptographic
proofs rather than private keys, mitigating risks associated with single
points of failure and server-side attacks. integration with cex: private
keys are stored in the cex enclave, and account owners who make
transactions will provide zk-proof, which will then be confirmed by
nodes, and cex can become a node.

**unique value:**

-   Terminology Consistency:

    -   "Ephemeral DKG," "Zero Key Persistence," and "Trustless
        > Architecture" are used consistently and describe your
        > project's unique innovations.

    -   Suitable for branding new technologies.

-   Modular Description

    -   Each folder zk/, dkg/, nodes/, etc. has a precise and
        > easy-to-understand explanation this is great for technical
        > readers.

-   Technical Transparency

    -   Specifying dependency libraries (arkworks, axum,
        > security-framework, etc.) demonstrates clarity of
        > implementation and research credibility.

-   Unique Security Flow

    -   "Ephemeral key per transaction + automatic destruction" is a
        > very strong concept that is rarely implemented in such detail.

    -   Suitable for development as a Trustless MPC / TSS hybrid model.

**Node Participation Model Node Requirements\
**To become an active Trustless Node within the network, participants
must meet the following criteria:

1.  **Stake DOT tokens** --- Nodes are required to lock a certain amount
    > of DOT as collateral to ensure honest participation and alignment
    > with network security goals.

2.  **Computational capability** --- Nodes must possess adequate
    > computing power to perform Distributed Key Generation (DKG),
    > Zero-Knowledge proof verification, and off-chain validation tasks
    > efficiently.

**Consequences\
** To maintain integrity and reliability across the Trustless Node
Network:

1.  **Slashing for dishonest behavior:** Any node found attempting to
    > manipulate or falsify proofs will be subject to slashing,
    > resulting in partial or full loss of their staked DOT.

2.  **Inactive node removal**: Nodes that remain offline or inactive
    > beyond a defined threshold will be automatically removed from the
    > active registry and lose their eligibility for rewards until
    > reactivation.

**Rewards and Incentives\
**Participating nodes and delegators are rewarded for their contribution
to the network's trustless infrastructure:

1.  **Reputation Points** Active nodes accumulate points that reflect
    > their reliability, uptime, and verification accuracy.

2.  **Network Trust** Nodes with consistent performance gain higher
    > trust rankings, improving their chances for delegation and
    > ecosystem recognition.

3.  **Delegated Staking** Regular users can delegate their DOT to
    > trusted nodes to earn staking rewards or network points without
    > operating computational infrastructure.

Trustless Protocol introduces an *Ephemeral Distributed Key Generation
(eDKG)* a novel mechanism that eliminates persistent key material from
the entire system lifecycle. Unlike traditional MPC/TSS models, all
cryptographic operations occur on temporary polynomial shares that
self-destruct post-signing, enabling absolute forward secrecy and a true
trustless execution environment.

### **Integration into Polkadot**

The project will be implemented as a Substrate-based module, functioning
as a runtime extension or off-chain worker service for parachains
seeking to adopt trustless signing or privacy-preserving wallet
mechanisms. It will utilize Polkadot's off-chain workers, cross-chain
message passing (XCM), and Substrate cryptographic primitives
(sr25519/ed25519) to align with our ZK-based wallet architecture.

### **Motivation**

The growing multi-chain ecosystem highlights the need for a genuinely
trustless wallet security solution. Current wallet protocols often rely
on \"trusted\" models, which present significant vulnerabilities.
Trustless Protocol addresses this gap by providing an infrastructure
layer that enables parachains, EVM-compatible chains, wallets, and
developers to integrate ZK-based signing and trustless node validation,
enhancing security and privacy.

## **Project Details**

### **Technology Stack**

-   Language: Rust

-   Framework: Substrate (for node runtime)

-   Cryptographic Libraries: arkworks-rs (ZKP), threshold-crypto,
    > sr25519 primitives

-   ZK Proof Framework: ark-bls12-381, ark-groth16

-   Off-Chain Components: Trustless Node (DKG + Proof Validation Layer)

-   API Layer: JSON-RPC compatible API for proof submission and
    > validation

### **Proof of Concept (PoC) / Minimum Viable Product (MVP)**

An initial version developed in Rust for Ethereum includes:

-   Proof generation and verification using arkworks.

-   Key splitting via DKG with node sharing.

-   Secure enclave integration (macOS prototype).

The Polkadot version will refactor this into a Substrate-compatible
module with a proof verifier and node registry system.

### 

### 

### 

### 

### **Core Architecture**

![Trustless Protocol Architecture](https://drive.google.com/uc?export=view&id=1QhS1_5n9yNElrK5bHujhMLntTavkvJkF)

### **Ecosystem Fit**

#### **Role in Polkadot**

Trustless Protocol strengthens Polkadot's security layer by enabling
wallets and parachains to operate without directly storing private keys.
It serves wallet providers, parachain privacy layers, and DeFi
developers aiming to secure proof-based transactions.

#### **Target Audience**

-   Parachain developers

-   Wallet developers

-   DeFi protocol developers and users

-   Privacy researchers

-   Polkadot users

-   Large enterprises and institutions

#### **Needs Addressed**

-   Elimination of single points of failure in key management.

-   Enablement of ZK-based authentication and proof-of-ownership for
    > on-chain operations.

#### **Comparison with Existing Projects**

Trustless Protocol architecture has fundamental differences compared to
conventional wallets such as Externally Owned Accounts (EOA),
Multi-Party Computation (MPC), and multisignature wallets.

In conventional wallet architecture, the transaction authorization
process still relies on one or more entities that persistently store or
manage private keys. Although some approaches, such as MPC or multisig,
attempt to reduce the risk of a single point of failure, these systems
still leave elements of trust in certain parties or the infrastructure
that runs them.

In contrast, Trustless Protocol is designed to completely eliminate the
need for trust in any party (trustless by design). Private keys in this
system are ephemeral they are only formed temporarily during the
transaction process and are automatically destroyed after the
transaction is complete. The entire transaction validation process is
carried out through a cryptographic proof mechanism, rather than through
authorization based on key storage or third-party servers.

Thus, Trustless Protocol presents a new paradigm in wallet security by
making the transaction process completely autonomous, distributed, and
trustless.

## **Team**

### **Team Members**

**Team Leader**: Singgih Brilian Tara

-   **Email**: singgihbrilian.tara06@gmail.com

-   **GitHub**:
    > [[https://github.com/TarasBrilian]{.underline}](https://github.com/TarasBrilian)

-   **LinkedIn**: Not provided

-   **Website**: Not provided

### **Legal Structure**

-   **Registered Address**: Yogyakarta, Indonesia

-   **Registered Legal Entity**: Not provided

### **Team Experience**

Singgih is an experienced smart contract and backend developer in the
Web3 space, with expertise in building DeFi in ethereum ecosystems. i'm
developed a many project for hackathon and won several hackathons,
developing tokenized funding rate for secondary market futures, and fix
rate lending protocol CLOB bassed.

Related project:

-   [[https://www.hackquest.io/projects/Centuari]{.underline}](https://www.hackquest.io/projects/Centuari)

-   [[https://dorahacks.io/buidl/25458]{.underline}](https://dorahacks.io/buidl/25458)

## **Development Status**

-   **Existing Code**: Prototype ZK wallet for Ethereum (Rust-based).

-   **Core Research**: Zero-knowledge proofs for signature validation,
    > DKG implementation, and trustless verification models.

-   **Goal**: Port and refactor into a Substrate-based system with
    > trustless node validators.

## **Development Roadmap**

### **Overview**

-   **Total Estimated Duration**: 8 weeks

-   **Full-Time Equivalent (FTE)**: 1

-   **Total Costs**: USD 10,000

-   **DOT Payment Percentage**: 50%

### **Milestone 1: Methodology, Infrastructure, and Environment Setup**

-   **Estimated Duration**: 2 weeks

-   **FTE**: 1

-   **Costs**: USD 4,000

  ----------------------------------------------------------------------------
  **No**   **Deliverable**   **Specification**
  -------- ----------------- -------------------------------------------------
  0a       License           MIT

  0b       Documentation     High-level architecture documentation and ZK
                             methodology whitepaper

  0c       Testing Guide     Initial testing plan for proof generation and DKG
                             simulations

  0d       Docker            Local testing environment for proof module

  1        Infrastructure    Create Substrate node skeleton for Trustless
           Setup             Module

  2        Benchmark         Define proof generation benchmarks and
           Definition        performance metrics

  3        Experiment Setup  Setup plan for trustless node simulation
           Plan              environment
  ----------------------------------------------------------------------------

### **Milestone 2: Implementation Phase**

-   **Estimated Duration**: 3 weeks

-   **FTE**: 1

-   **Costs**: USD 4,000

  -----------------------------------------------------------------------------
  **No**   **Deliverable**   **Specification**
  -------- ----------------- --------------------------------------------------
  0a       Documentation     Developer guide for ZK module and proof validator

  0b       Testing Guide     Unit tests for ZK proof validation logic

  0c       Docker            Containerized Substrate node with working proof
                             validator

  1        Trustless Module  Implement proof verification and DKG process in
                             Substrate

  2        Proof RPC         JSON-RPC endpoint for proof submission

  3        Integration Test  Local testnet verification of ZK-proof submission
  -----------------------------------------------------------------------------

### **Milestone 3: Trustless Node Development**

-   **Estimated Duration**: 3 weeks

-   **FTE**: 1

-   **Costs**: USD 2,000

  -----------------------------------------------------------------------------
  **No**   **Deliverable**   **Specification**
  -------- ----------------- --------------------------------------------------
  0a       Article           Publish article explaining trustless node
                             architecture

  0b       Testing Guide     Integration tests for multi-node DKG

  1        Node Registry     On-chain registry system for participating
                             trustless nodes

  2        Off-Chain Worker  Implement proof validation off-chain worker

  3        P2P Node          Minimal prototype allowing external users to join
           Prototype         as trustless nodes
  -----------------------------------------------------------------------------

## **Future Plans**

-   building a team

-   Implementation of Email for Wallets

-   Mass Adoption Focus: Develop an SDK to enable wallets and parachains
    > to integrate Trustless Protocol, and integration with the CEX
    > platform

-   Cross-Chain Bridge: Build a trustless bridge for interoperability
    > with blockchains like Ethereum and Solana using ZK-proof
    > mechanisms

-   Public Testnet Launch: Launch the Trustless Node Network(CLI) as a
    > public infrastructure with open validator participation

-   Community Expansion: Collaborate with Polkadot wallets such as
    > Talisman, SubWallet, or Nova for integration

## **Additional Information**

### **Source of Grants Program Awareness:** [[https://github.com/preschian]{.underline}](https://github.com/preschian) 

Referral program: -

**Previous Work** Developed a prototype ZK wallet in Rust compatible
with Ethereum.
