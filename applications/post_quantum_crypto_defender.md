# Web3 Foundation Grant Application

## Project Overview

- **Project Name:** Post-Quantum Crypto Defender
- **Team Name:** PQ Security Labs
- **Payment Address:** (твой Solana или Ethereum адрес — можно указать позже)
- **Level:** 1

## Project Description

We are building open-source Rust tools for hybrid post-quantum cryptography, combining current blockchain standards (ed25519/secp256k1) with NIST PQC algorithms (Falcon-512, Dilithium). The project includes:

1. A working CLI tool for hybrid key generation, signing, and verification
2. Crypto-agility layer for pluggable post-quantum algorithms
3. Key migration and rotation utilities

The tools help wallets, dApps, and validators prepare for quantum computing threats ("Harvest Now, Decrypt Later") and major protocol upgrades.

## Problem Statement

Quantum computers (via Shor's algorithm) threaten current elliptic curve signatures (ECDSA, EdDSA) used in all major blockchains. Most ecosystems lack crypto-agility and production-ready migration tools. Polkadot/Substrate (written in Rust) needs post-quantum tooling to remain secure in the coming decade.

## Solution

We provide a practical Rust library and CLI with:

- Hybrid signatures: ed25519/secp256k1 + Falcon-512/Dilithium
- Simple commands: `generate`, `sign`, `verify`, `info`
- Open-source (MIT license)
- CI/CD pipeline with tests

## Technical Details

**Current State (Working Prototype):**

- 22+ commits, active GitHub repository
- Fully functional CLI with 4 commands
- Key sizes: private 1313 bytes, public 929 bytes, signature 730 bytes
- Built with Rust, `falconed`, `clap`, `hex`

**GitHub:** https://github.com/pissapisa500-debug/post-quantum-web3-security

## Roadmap (Milestones)

| Milestone | Duration | Deliverables | Amount |
|-----------|----------|--------------|--------|
| **M1** | 4 weeks | Complete Rust library with hybrid signatures + unit tests | $4,000 |
| **M2** | 4 weeks | Substrate/Polkadot integration example + documentation | $3,000 |
| **M3** | 4 weeks | Security audit preparation, CI/CD improvements, v1.0 release | $3,000 |

**Total Requested:** $10,000 USD (Level 1)

## Team

**Members:** Single independent Rust developer (can expand team after funding)

**Background:**
- 5+ years experience in systems programming
- Strong cryptography focus
- Working prototype already delivered (proof of work available)

**Code repository:** https://github.com/pissapisa500-debug/post-quantum-web3-security

## Why Web3 Foundation?

1. Polkadot/Substrate is built in Rust — our exact tech stack
2. Web3 Foundation actively funds cryptography and developer tooling
3. Level 1 grants ($10k) are designed for independent developers like us
4. No corporate entity required — we are crypto-native builders

## Future Plans

- Integrate with Substrate's signature framework
- Add support for more NIST PQC algorithms
- Maintain as open-source public good
- Seek follow-up funding for Level 2 grant after successful delivery

## Additional Information

- **Open-source license:** MIT
- **Proof of Work:** Working CLI tool with 22+ commits, CI/CD passing
- **Relevance to Polkadot:** Rust-native, can be directly integrated into Substrate-based chains