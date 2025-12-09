# QSN Post-Quantum Bridge for Polkadot

- **Team Name:** Quantum Sharded Network
- **Payment Details:** 
  - **DOT**: (Polkadot AssetHub address to be provided)
  - **Payment**: 60% in vested DOT, 40% in USDC
- **Level:** 2 🐤

## Project Overview 📄

### Overview

**One-liner:** A trustless cross-chain bridge connecting Polkadot to QSN with NIST-standardized post-quantum cryptographic protection against "harvest now, decrypt later" attacks.

QSN Post-Quantum Bridge enables secure asset transfers between Polkadot and QSN blockchain, wrapping DOT tokens with Dilithium3 quantum-resistant signatures. This is the first bridge implementation using NIST-standardized post-quantum cryptography (FIPS 204/203/205) to protect Polkadot ecosystem assets.

**Why Polkadot?**

Polkadot's vision of heterogeneous multi-chain architecture aligns perfectly with QSN's cross-chain interoperability goals. As quantum computing advances threaten current cryptographic standards, Polkadot ecosystem needs quantum-resistant infrastructure. Our bridge provides this critical security layer using production-ready NIST algorithms.

**Motivation:**

Our team has been building quantum-resistant blockchain infrastructure since 2023. With NIST finalizing post-quantum standards in August 2024 (Dilithium3, Kyber1024, SPHINCS+), we believe the Polkadot ecosystem should be among the first to implement this protection. The "harvest now, decrypt later" threat is real — adversaries can store encrypted blockchain data today and decrypt it when quantum computers become available.

### Project Details

#### Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           QSN POST-QUANTUM BRIDGE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌──────────────┐         TRUSTLESS          ┌──────────────────────────┐  │
│   │   POLKADOT   │◄───────────────────────────►│         QSN              │  │
│   │   Network    │     Lock-and-Mint           │      Blockchain          │  │
│   └──────┬───────┘                             └────────────┬─────────────┘  │
│          │                                                  │                │
│          │                                                  │                │
│   ┌──────▼───────┐                             ┌────────────▼─────────────┐  │
│   │  DOT Token   │                             │   wDOT (Wrapped DOT)     │  │
│   │  (Native)    │                             │   Dilithium3 Protected   │  │
│   │  secp256k1   │                             │   NIST FIPS 204          │  │
│   └──────────────┘                             └──────────────────────────┘  │
│                                                                              │
│   ┌──────────────────────────────────────────────────────────────────────┐  │
│   │                      SECURITY COMPONENTS                              │  │
│   │                                                                        │  │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │  │
│   │  │ Light Client│  │  Threshold  │  │   Merkle    │  │   Quantum   │   │  │
│   │  │  Verifier   │  │  Signatures │  │   Proofs    │  │  Signatures │   │  │
│   │  │  (Grandpa)  │  │  (BLS 2/3)  │  │  Inclusion  │  │ (Dilithium3)│   │  │
│   │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │  │
│   └──────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### Technology Stack

| Layer | Technology | Description |
|-------|------------|-------------|
| **Core Language** | Rust | Memory-safe systems programming |
| **PQC Library** | pqcrypto-dilithium | NIST FIPS 204 implementation |
| **Polkadot SDK** | subxt 0.35+ | Light client & RPC interface |
| **Consensus** | BFT + PoS | Instant finality (3s blocks) |
| **Storage** | RocksDB | Persistent state with MPT |
| **API** | JSON-RPC 2.0 | 150+ methods, EVM compatible |

#### Post-Quantum Cryptography Details

QSN implements NIST-standardized algorithms (finalized August 2024):

| Algorithm | Standard | Purpose | Key Size | Signature Size |
|-----------|----------|---------|----------|----------------|
| **Dilithium3** | FIPS 204 | Digital signatures | 1,952 bytes | 3,293 bytes |
| **Kyber1024** | FIPS 203 | Key encapsulation | 1,568 bytes | 1,568 bytes |
| **SPHINCS+** | FIPS 205 | Hash-based addresses | 64 bytes | 7,856 bytes |

**Hybrid Signature Scheme:**

```rust
pub enum UniversalSignature {
    Ed25519(Ed25519Signature),         // 64 bytes - classical
    Dilithium3(Dilithium3Signature),   // 3,293 bytes - quantum-safe
    Hybrid {
        classical: Ed25519Signature,   // Backward compatibility
        quantum: Dilithium3Signature,  // Future-proof security
    },
}
```

**Quantum Protection Threshold:**
- Transfers ≥ 1,000 tokens: Dilithium3 signature required
- Smart contract deployment: Always Dilithium3
- Bridge operations: Always Hybrid (Ed25519 + Dilithium3)

#### Bridge Flow: DOT → wDOT

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         DEPOSIT FLOW (DOT → wDOT)                            │
│                                                                              │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌────────┐ │
│  │  User   │────►│ Polkadot│────►│  Light  │────►│  QSN    │────►│ wDOT   │ │
│  │  sends  │     │  Lock   │     │ Client  │     │ Verify  │     │ Minted │ │
│  │  DOT    │     │ Contract│     │ Proof   │     │ & Mint  │     │ (PQC)  │ │
│  └─────────┘     └─────────┘     └─────────┘     └─────────┘     └────────┘ │
│                                                                              │
│  Time:  0s          12s           24s            27s            30s         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Verification Steps:**
1. **GRANDPA Finality Proof** — Verify Polkadot block finality
2. **Merkle Inclusion Proof** — Verify transaction in block
3. **Threshold Signature** — 2/3 relayer signatures (BLS)
4. **Quantum-Safe Minting** — wDOT with Dilithium3 protection

#### Bridge Flow: wDOT → DOT

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        WITHDRAWAL FLOW (wDOT → DOT)                          │
│                                                                              │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌────────┐ │
│  │  User   │────►│  QSN    │────►│Threshold│────►│ Polkadot│────►│  DOT   │ │
│  │  burns  │     │  Burn   │     │ Signing │     │ Release │     │Released│ │
│  │  wDOT   │     │   TX    │     │ (51/100)│     │ Contract│     │  ✓     │ │
│  └─────────┘     └─────────┘     └─────────┘     └─────────┘     └────────┘ │
│                                                                              │
│  Time:  0s          3s            ~30s           ~60s           ~90s        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### API Specification

**Bridge RPC Methods:**

```json
// Get supported chains
{
  "method": "bridge_getSupportedChains",
  "params": [],
  "result": [
    {
      "chain_id": 200,
      "chain_name": "Polkadot",
      "enabled": true,
      "min_confirmations": 2,
      "wrapped_token": "wDOT",
      "decimals": 10,
      "quantum_protection": "Dilithium3"
    }
  ]
}

// Get deposit address
{
  "method": "bridge_dot_getDepositAddress",
  "params": ["qsn_recipient_address"],
  "result": {
    "polkadot_address": "1...",
    "min_deposit": "1000000000",
    "bridge_fee_bps": 30
  }
}

// Check deposit status
{
  "method": "bridge_getDepositStatus",
  "params": ["0x_polkadot_tx_hash"],
  "result": {
    "status": "Minted",
    "confirmations": 2,
    "qsn_tx_hash": "0x...",
    "quantum_signature": "0x..." 
  }
}
```

#### Existing Infrastructure

**Live Networks:**
- 🌐 **Testnet**: https://node.qsnchain.com/testnet/ (Chain ID: 99991)
- 🔍 **Explorer**: https://qsnscan.io
- 📖 **Documentation**: https://qsnchain.com/docs

**Operational Bridges (5 live):**

| Source Chain | Wrapped Token | Status | Quantum Protection |
|--------------|---------------|--------|-------------------|
| Bitcoin | wBTC | ✅ Live | Dilithium3 |
| Ethereum | wETH | ✅ Live | Dilithium3 |
| BSC | wBNB | ✅ Live | Dilithium3 |
| Polygon | wMATIC | ✅ Live | Dilithium3 |
| TON | wTON | ✅ Live | Hybrid (Ed25519 + Dilithium3) |
| **Polkadot** | **wDOT** | 🔨 **This Grant** | Dilithium3 |

**Core Metrics:**
- Block time: 3 seconds
- Instant finality (BFT consensus)
- 150+ JSON-RPC API methods
- Full EVM compatibility (MetaMask supported)

#### What This Project Will NOT Deliver

To manage expectations:
- ❌ Parachain deployment (future milestone)
- ❌ XCM integration (requires parachain first)
- ❌ Mobile wallet (separate project)
- ❌ Custodial services

### Ecosystem Fit

**Where does this fit?**

QSN Post-Quantum Bridge fills a critical gap in Polkadot's security infrastructure. While Polkadot has excellent interoperability (XCM, bridges), none currently offer quantum-resistant cryptography at the protocol level.

**Target Audience:**
1. **Security-conscious DeFi users** — Protecting high-value cross-chain transfers
2. **Institutional investors** — Compliance with future quantum-safe requirements
3. **Research institutions** — Testing PQC in production environments
4. **Polkadot ecosystem projects** — Adding quantum protection to their assets

**Needs Addressed:**

| Need | Evidence |
|------|----------|
| Quantum threat mitigation | NIST urging migration by 2030, NSA by 2035 |
| "Harvest now, decrypt later" protection | Blockchain data is permanent and public |
| Standards compliance | FIPS 204/203/205 finalized August 2024 |
| Cross-chain asset security | $2B+ lost to bridge hacks in 2022-2024 |

**Similar Projects:**

| Project | Approach | Differentiation |
|---------|----------|-----------------|
| **QRL** | Full PQC blockchain | Not EVM compatible, no bridges |
| **IOTA 2.0** | Winternitz OTS | Single-use signatures only |
| **Ethereum PQC Research** | Research phase | Years from production |
| **QSN (Ours)** | Production-ready | NIST standards, 5 live bridges, EVM compatible |

**Unique Value Proposition:**
1. ✅ **NIST-standardized** — Not experimental algorithms
2. ✅ **Production-ready** — 5 bridges already operational
3. ✅ **Native protocol-level** — Not smart contract tokens
4. ✅ **EVM compatible** — Seamless developer experience

## Team 👥

### Team Members

- **Vahe** — Founder & Lead Developer

### Contact

- **Contact Name:** Vahe
- **Contact Email:** [to be provided]
- **Website:** https://vaheweb.xyz

### Legal Structure

- **Registered Legal Entity:** [To be provided during KYC]

### Team's Experience

Vahe has 5+ years of experience in blockchain development and cryptography:

- **QSN Blockchain** — Designed and implemented multi-VM architecture (EVM + TVM + QVM), BFT consensus, and post-quantum cryptography integration
- **Bridge Development** — Built 5 operational cross-chain bridges with different verification mechanisms (SPV, Light Client, Merkle proofs)
- **Security Research** — Comprehensive security audits, achieving 96% attack resistance in penetration testing
- **System Administration** — Production deployment on Linux infrastructure with high availability

**Technical Expertise:**
- Languages: Rust, Solidity, TypeScript, Python
- Blockchain: EVM, TVM, Custom VM development
- Cryptography: Post-quantum (Dilithium, Kyber, SPHINCS+), classical (Ed25519, secp256k1, BLS)
- Infrastructure: Docker, Kubernetes, RocksDB, PostgreSQL

### Team Code Repos

- **QSN Blockchain**: https://github.com/qsn-network/qsn-core (to be open-sourced)
- **Documentation**: https://github.com/qsn-network/docs
- **SDK**: https://github.com/qsn-network/qsn-sdk

### Team LinkedIn Profiles

- [To be provided]

## Development Status 📖

**Current State:** Production testnet with 5 operational bridges

**Existing Work:**

1. **QSN Core Blockchain**
   - BFT + PoS consensus with instant finality
   - Multi-VM execution (EVM, TVM, QVM)
   - Post-quantum cryptography integrated at protocol level
   - 150+ JSON-RPC API methods

2. **Bridge Infrastructure**
   - Lock-and-Mint / Burn-and-Release mechanism
   - Light client verification for each supported chain
   - Threshold signatures (FROST for Bitcoin, BLS for others)
   - Operational bridges: BTC, ETH, BNB, MATIC, TON

3. **Documentation**
   - Comprehensive API documentation
   - Bridge RPC specification
   - Architecture documentation
   - Whitepaper (English & Russian)

**Research & Prior Work:**
- Analysis of NIST PQC competition finalists
- Implementation of hybrid signature schemes
- Performance optimization for Dilithium3 verification
- Security audit with 96% attack resistance

## Development Roadmap 🔩

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 1.5
- **Total Costs:** $30,000 USD

### Milestone 1 — Polkadot Light Client Integration

- **Estimated duration:** 1 month
- **FTE:** 1.5
- **Costs:** $10,000 USD

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline documentation, setup guide, architecture docs |
| **0c.** | Testing Guide | Unit tests with >80% coverage, integration test suite |
| **0d.** | Docker | Dockerfile for testing environment |
| 1. | Polkadot Light Client | Rust implementation using `subxt` library for connecting to Polkadot RPC, subscribing to finalized blocks, and verifying GRANDPA finality proofs |
| 2. | Block Header Sync | Module to sync and store Polkadot block headers with merkle root verification |
| 3. | Transaction Proof Verification | Implement merkle inclusion proof verification for Polkadot transactions |
| 4. | RPC Interface | JSON-RPC methods: `bridge_dot_getChainInfo`, `bridge_dot_getLatestBlock`, `bridge_dot_verifyProof` |

### Milestone 2 — wDOT Token & Bridge Contract

- **Estimated duration:** 1 month
- **FTE:** 1.5
- **Costs:** $10,000 USD

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | wDOT token specification, bridge contract docs |
| **0c.** | Testing Guide | Token transfer tests, minting/burning tests |
| **0d.** | Docker | Updated Docker with bridge components |
| 1. | wDOT Native Token | Protocol-level wrapped DOT token with Dilithium3 signature protection, 10 decimals |
| 2. | Deposit Processing | Lock detection on Polkadot → mint wDOT on QSN with quantum signature |
| 3. | Withdrawal Processing | Burn wDOT on QSN → threshold-signed release on Polkadot |
| 4. | Bridge RPC Methods | `bridge_dot_getDepositAddress`, `bridge_dot_initiateWithdrawal`, `bridge_dot_getWrappedBalance` |
| 5. | Event System | WebSocket events for deposit/withdrawal status updates |

### Milestone 3 — Security, Testing & Documentation

- **Estimated duration:** 1 month
- **FTE:** 1.5
- **Costs:** $10,000 USD

| Number | Deliverable | Specification |
|--------|-------------|---------------|
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Complete API docs, user guide, security considerations |
| **0c.** | Testing Guide | End-to-end test suite, stress testing results |
| **0d.** | Docker | Production-ready Docker Compose setup |
| **0e.** | Article | Technical blog post about PQC bridge implementation |
| 1. | Security Audit | Internal security review with documented threat model |
| 2. | Rate Limiting | Protection against DoS, transaction limits |
| 3. | Testnet Deployment | Public testnet with wDOT bridge operational |
| 4. | SDK Updates | JavaScript/TypeScript SDK with bridge methods |
| 5. | Integration Example | Sample dApp demonstrating DOT↔wDOT transfers |

## Future Plans

**Short-term (6 months after grant):**
- Mainnet deployment of DOT bridge
- Additional bridges: Kusama (wKSM), Avalanche (wAVAX)
- Performance optimization for high throughput

**Long-term:**
- Parachain deployment on Polkadot
- XCM integration for native interoperability
- DAO governance for bridge parameters
- Partnership with Polkadot ecosystem projects

**Sustainability:**
- Bridge fees (0.3%) for operational costs
- Validator staking rewards
- Ecosystem grants and partnerships
- Potential enterprise licensing for PQC technology

## Referral Program (optional) 💰

- **Referrer:** [To be filled if applicable]
- **Payment Address:** [To be filled if applicable]

## Additional Information ➕

**How did you hear about the Grants Program?**

Through research into blockchain ecosystem grant opportunities and Web3 Foundation documentation.

**Work already done:**
- ✅ QSN blockchain with BFT consensus (operational)
- ✅ Post-quantum cryptography integration (Dilithium3, Kyber1024, SPHINCS+)
- ✅ 5 cross-chain bridges (BTC, ETH, BNB, MATIC, TON)
- ✅ 150+ JSON-RPC API methods
- ✅ Block explorer (qsnscan.io)
- ✅ Comprehensive documentation

**Other financial contributions:**
- Self-funded development to date
- No other grants received for this specific work

**Previous grant applications:**
- First application to Web3 Foundation
- Preparing applications to Ethereum Foundation ESP and other ecosystems

---

**Links:**

| Resource | URL |
|----------|-----|
| Website | https://qsnchain.com |
| Testnet RPC | https://node.qsnchain.com/testnet/ |
| Explorer | https://qsnscan.io |
| Whitepaper | https://qsnchain.com/whitepaper/QSN_Whitepaper_EN.pdf |
| GitHub | https://github.com/qsn-network |
| Documentation | https://qsnchain.com/docs |
