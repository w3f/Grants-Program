# Dilithium-3 Substrate Pallet

- **Team Name:** Lukasz Biernat (Realm)
- **Payment Address:** 15ykeGHyzchFuS7Hxo8y3Jf94UqC8LMeuokEfLQxmp2gkuuU (DOT - Polkadot)
- **Level:** 3

## Project Overview 📄

### Overview

**Dilithium-3 Substrate Pallet** brings NIST-standardized post-quantum cryptography to the Polkadot ecosystem.

Dilithium-3 (ML-DSA-65, FIPS 204) is a lattice-based digital signature scheme selected by NIST as the primary post-quantum signature standard. While quantum computers capable of breaking ECDSA/EdDSA are still years away, the "harvest now, decrypt later" threat means blockchain transactions signed today could be forged retroactively once quantum computers mature.

We've already implemented Dilithium-3 signature verification in our Realm blockchain (C++/CUDA). This grant will port our implementation to a reusable Rust Substrate pallet, enabling any Polkadot parachain to adopt post-quantum security.

### Project Details

#### Technical Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    dilithium3-substrate                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐    ┌─────────────────┐                    │
│  │  pallet-        │    │  dilithium3-    │                    │
│  │  dilithium3     │───▶│  core           │                    │
│  │                 │    │                 │                    │
│  │  - verify()     │    │  - Pure Rust    │                    │
│  │  - batch_verify │    │  - no_std       │                    │
│  │  - storage      │    │  - SIMD optim   │                    │
│  └─────────────────┘    └─────────────────┘                    │
│           │                                                     │
│           ▼                                                     │
│  ┌─────────────────────────────────────────┐                   │
│  │           Substrate Runtime              │                   │
│  │                                          │                   │
│  │  - Transaction verification             │                   │
│  │  - Bridge message validation            │                   │
│  │  - Multi-sig with PQ security           │                   │
│  └─────────────────────────────────────────┘                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Core Components

1. **`dilithium3-core`** - Pure Rust implementation
   - `no_std` compatible for WASM runtime
   - SIMD optimizations where available
   - Constant-time operations (side-channel resistant)
   - Full FIPS 204 compliance

2. **`pallet-dilithium3`** - Substrate integration
   - `verify_signature()` - Single signature verification
   - `batch_verify()` - Optimized batch verification
   - `register_pq_key()` - On-chain PQ public key storage
   - Configurable via runtime constants

#### API Specification

```rust
// Core verification (dilithium3-core)
pub fn verify(
    public_key: &[u8; 1952],
    message: &[u8],
    signature: &[u8; 3293],
) -> Result<(), Dilithium3Error>;

pub fn batch_verify(
    public_keys: &[[u8; 1952]],
    messages: &[&[u8]],
    signatures: &[[u8; 3293]],
) -> Result<(), Dilithium3Error>;

// Pallet extrinsics
#[pallet::call]
impl<T: Config> Pallet<T> {
    /// Verify a Dilithium-3 signature on-chain
    #[pallet::weight(T::WeightInfo::verify_signature())]
    pub fn verify_signature(
        origin: OriginFor<T>,
        public_key: BoundedVec<u8, ConstU32<1952>>,
        message: BoundedVec<u8, T::MaxMessageLength>,
        signature: BoundedVec<u8, ConstU32<3293>>,
    ) -> DispatchResult;
    
    /// Register a post-quantum public key for an account
    #[pallet::weight(T::WeightInfo::register_pq_key())]
    pub fn register_pq_key(
        origin: OriginFor<T>,
        public_key: BoundedVec<u8, ConstU32<1952>>,
    ) -> DispatchResult;
}
```

#### Performance Targets

| Operation | Target | Notes |
|-----------|--------|-------|
| Single verify | < 2ms | CPU reference |
| Batch verify (100) | < 150ms | Amortized |
| Key registration | < 1ms | Storage write |
| WASM overhead | < 20% | vs native |

#### Prior Work

We have a working implementation in our Realm blockchain:
- **Language:** C++ with CUDA acceleration
- **Performance:** 56,000 TPS on testnet (GPU-accelerated)
- **Status:** Testnet running, trading UI functional
- **Repo:** https://github.com/empyrealm/chain (will be made public)

This grant ports the **CPU reference implementation** to Rust/Substrate.

### Ecosystem Fit

**Where does this fit in the Polkadot ecosystem?**

Post-quantum security is an inevitable upgrade for all blockchains. By providing a ready-to-use Substrate pallet, we enable:
- Parachains to opt-in to PQ signatures
- Bridge protocols to verify PQ-signed messages
- Multi-sig wallets with quantum-resistant keys
- Future-proofing of high-value transactions

**Target audience:**
- Parachain developers wanting PQ security
- Bridge builders (Realm ↔ Polkadot)
- Security-focused DeFi protocols
- Enterprise/institutional users

**What need does this fill?**

Currently, no production-ready Dilithium-3 implementation exists for Substrate. The `pqcrypto` crate exists but isn't optimized for blockchain use cases (no batching, no `no_std`, no pallet integration).

**Similar projects:**
- `pqcrypto` - Generic PQ crypto library (not Substrate-specific)
- None in Polkadot ecosystem with pallet integration

## Team 👥

### Team members

- **Lead:** Lukasz Biernat - Solo founder, full-stack blockchain developer

### Contact

- **Contact Name:** Lukasz Biernat
- **Contact Email:** empyrealm@proton.me
- **Website:** https://realm.software

### Legal Structure

- **Registered Address:** Will provide upon grant approval (KYC process)
- **Registered Legal Entity:** Individual / Sole Proprietor

### Team's Experience

**Realm Blockchain (2024-present)**
- Built post-quantum L1 blockchain from scratch in C++
- Implemented Dilithium-3 signatures with CUDA GPU acceleration
- Achieved 56,000 TPS on testnet with 25ms finality
- Full-stack: consensus (Mysticeti DAG-BFT), execution, networking, SDK, trading UI

**Relevant Technical Skills:**
- C++ (10+ years), Rust (3+ years)
- CUDA/GPU programming
- Cryptography implementation
- Blockchain consensus mechanisms

### Team Code Repos

- https://github.com/empyrealm/dilithium3-substrate (This project - will be populated)
- https://github.com/empyrealm/exchange (Trading UI - TypeScript/React)
- https://github.com/empyrealm/ui (Component library)

### Team LinkedIn Profiles

- https://www.linkedin.com/in/lukasz-biernat-616b92379/

## Development Status 📖

**Current status:** We have a working Dilithium-3 implementation in C++.

**Research references:**
- NIST FIPS 204: https://csrc.nist.gov/pubs/fips/204/final
- Dilithium specification: https://pq-crystals.org/dilithium/
- Our implementation reference: CRYSTALS-Dilithium reference code

**What exists:**
- ✅ Dilithium-3 keygen, sign, verify (C++)
- ✅ GPU batch verification (CUDA)
- ✅ Integration with BLAKE3 hashing
- ✅ Working blockchain testnet

**What this grant produces:**
- Rust port of verification logic
- Substrate pallet wrapper
- Comprehensive test suite
- Documentation and examples

## Development Roadmap 🔩

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1
- **Total Costs:** $100,000 USD

### Milestone 1 — Core Rust Implementation

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** $35,000 USD

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Inline rustdoc + README with usage examples |
| 0c. | Testing Guide | Instructions for running test suite |
| 0d. | Docker | Dockerfile for reproducible builds |
| 1. | dilithium3-core crate | Pure Rust Dilithium-3 implementation, `no_std` compatible |
| 2. | Verification function | `verify(pk, msg, sig) -> Result<(), Error>` |
| 3. | Batch verification | `batch_verify()` with early-exit optimization |
| 4. | Test vectors | NIST KAT (Known Answer Tests) compliance |
| 5. | Benchmarks | Criterion benchmarks for all operations |

### Milestone 2 — Substrate Pallet

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** $35,000 USD

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Pallet integration guide |
| 0c. | Testing Guide | Integration test instructions |
| 0d. | Docker | Docker compose for local testnet |
| 1. | pallet-dilithium3 | Substrate pallet wrapping dilithium3-core |
| 2. | Extrinsics | `verify_signature`, `register_pq_key`, `batch_verify` |
| 3. | Storage | PQ public key registry per account |
| 4. | Events | `SignatureVerified`, `PqKeyRegistered` |
| 5. | Weights | Benchmarked weight functions |
| 6. | Example runtime | Substrate node template with pallet integrated |

### Milestone 3 — Documentation & Security

- **Estimated duration:** 1 month
- **FTE:** 1
- **Costs:** $30,000 USD

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Full API documentation |
| 0c. | Testing Guide | Security testing guide |
| 0d. | Article | Medium/blog post announcing the pallet |
| 1. | Security analysis | Constant-time verification, side-channel review |
| 2. | Integration guide | Step-by-step parachain integration |
| 3. | Bridge spec | Protocol specification for PQ-secured bridges |
| 4. | Example: Realm bridge | Demo bridge contract using the pallet |
| 5. | Video tutorial | 10-minute integration walkthrough |

## Future Plans

**Short-term (post-grant):**
- Launch Realm mainnet with Dilithium-3 consensus
- Deploy Realm ↔ Polkadot bridge using this pallet
- Seek security audit from reputable firm

**Long-term:**
- GPU-accelerated verification as optional Substrate host function
- Additional PQ algorithms (Kyber for key exchange, SPHINCS+ for stateless sigs)
- Become the standard PQ crypto library for Polkadot ecosystem

**Funding:**
- This grant funds initial development
- Future grants for bridge implementation, GPU acceleration
- Potential VC funding for Realm mainnet launch

## Additional Information ➕

**How did you hear about the Grants Program?**
Web3 Foundation website and ecosystem research.

**Previous grants:**
None - this is our first Web3 Foundation application.

**Other funding:**
Self-funded to date. No VC, no token sale.

**What makes this unique:**
- We've already built working Dilithium-3 verification (not starting from scratch)
- Real-world tested in our blockchain (not theoretical)
- Focus on practical integration (pallet, not just library)
- Path to production bridge (Realm ↔ Polkadot)

---

## Appendix: Dilithium-3 Parameters

| Parameter | Value |
|-----------|-------|
| Security Level | NIST Level 3 (~128-bit post-quantum) |
| Public Key Size | 1,952 bytes |
| Signature Size | 3,293 bytes |
| Secret Key Size | 4,032 bytes |

## Appendix: Realm Testnet Stats

| Metric | Value |
|--------|-------|
| TPS (GPU batch verify) | 56,000 |
| Block Time | 25ms |
| Finality | Single-slot |
| Signature Algorithm | Dilithium-3 (FIPS 204) |
| Hash Algorithm | BLAKE3 |
| Consensus | Mysticeti DAG-BFT |
