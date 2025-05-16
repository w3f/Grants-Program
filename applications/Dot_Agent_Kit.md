# Dot Agent Kit

-  **Team Name:** Varmeta
-  **Payment Details:**
-  **DOT**: 1w3QVMmft6r49LqxYj8Akoqw45jAVoGRd2UD9c1JoZQe1Ha
-  **Payment**: 1w3QVMmft6r49LqxYj8Akoqw45jAVoGRd2UD9c1JoZQe1Ha (USDC)
-  **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2

## Project Overview :page_facing_up:

### Overview

The Dot Agent Kit will offer a modular set of plugins and tools that allow AI agents to interact with Polkadot’s relay chain and parachains. Key features include wallet creation, token transfers, advanced message encryption/decryption, and modules to boost Polkadot's TVL by enabling AI agents to assist users with staking. The toolkit is designed to be framework-agnostic, supporting multiple AI agent frameworks like [Eliza](https://github.com/elizaOS/eliza), [LangChain](https://github.com/langchain-ai/langchain), and others, ensuring broad applicability and adoption.

### Project Details

- **Programming Language**: TypeScript
- **Supported AI Frameworks**: Eliza, LangChain, and others

#### Core Features:

1. **Wallet Creation and Management** - Tools for AI agents to create and manage Polkadot wallets.
2. **Token Transfers** - Facilitate DOT and asset transfers across the Polkadot ecosystem (including crosschain transfers).
3. **Message Encryption and Decryption**:
- sr25519-AES - Combining Polkadot’s sr25519 with AES encryption.
- ed25519-AES - Using ed25519 with AES for secure messaging.
- ECDSA-AES - Supporting ECDSA-based encryption for broader compatibility.

![Message Encryption Flow](https://i.imgur.com/NKUsHX3.png)

4. **Polkadot Ecosystem Interaction** - Support for relay chain and parachain interactions.
5. **Staking Module** - Basic tools for AI agents to assist users with DOT staking:
- Read-only validator information and performance metrics
- Simple stake/unstake execution functions
- Balance and rewards monitoring
- Unbonding period tracking
6. **Framework Adapters** - Modular adapters for seamless integration with multiple AI agent frameworks (e.g., Eliza, LangChain, etc.).

### Ecosystem Fit

- **Fit in Ecosystem**: The kit integrates with Polkadot’s parachains and dApps, enabling AI Agents to enhance DeFi, governance, and cross-chain use cases.
- **Target Audience**: Parachain developers, dApp builders, and Web3/AI enthusiasts looking to create blockchain-enabled AI Agents.
- **Needs Met**: Simplifies AI + blockchain development, addressing the complexity and time cost of manual integration.
- **Evidence of Need**:
Forum discussions on Polkadot’s Discord (#dev channel, many discussed AI agent’s topic and use cases) highlight interest in AI-driven applications.
- **Similar Projects in Polkadot/Kusama/Substrate**: None identified. No toolkit exists for AI Agent + Polkadot integration, likely due to the niche intersection and lack of prior focus.
- **Similar Projects in Other Ecosystems**:
	- Solana Agent Kit (SendAI): An open-source toolkit integrating Solana blockchain into AI Agents. It’s widely used, with examples like Jupiter Swap Agents (automating token swaps), contributing to Solana’s DeFi TVL (per DeFiLlama, March 2025). A hackathon was also hosted by SendAI, saw over 400+ projects compete for $275,000+ prize pool on January 16, 2025. Solana AI Agent Kit: https://github.com/sendaifun/solana-agent-kit
	- Move AI Agent Kit (Aptos): A toolkit for Move-based chains, enabling AI Agents for DeFi and NFT use cases. LiquidSwap Agents (built with the kit) automate liquidity provision and staking, contributing to a 15% TVL increase on Aptos ($300M+, Feb 2025). Aptos AI Agent Kit: https://github.com/Metamove/move-agent-kit

## Team :busts_in_silhouette:

### Team members

- **Architect**: Tan Tran
- **Project Advisor**: Dung Pham, PhD
- **Software Engineer**: Thinh Nguyen
- **Software Engineer**: Ngoc Nguyen

### Contact

-  **Contact Name:** Stephen Ta
-  **Contact Email:** stephenta@var-meta.com
-  **Website:** var-meta.com

### Legal Structure

-  **Registered Address:** HL Tower, 6/82 Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi, Vietnam
-  **Registered Legal Entity:** Var Meta Technology Jsc.

### Team's experience

The team is made of experienced builders, various members are contributors to layer 1 SDKs and other core libraries.

Tan Tran is a seasoned Solution Architect with a decade of hands-on experience in software and blockchain development and proven leadership and management expertise in guiding and overseeing complex software projects, including wholesale and retail solutions and various blockchain projects on Cardano and Solana.

Dung Pham is a PhD in Statistics at Trinity College Dublin, Ireland. He has over ten years of experience as an AI engineer and researcher. His expertise lies in multimodal LLM, AI application design and development and scalable MLOps.

Thinh Nguyen has over 4 years of experience working on blockchain and SDK development across multiple blockchain networks: Polkadot, Solana, and Gno.land

Ngoc Nguyen has extensive software development experiences working on various open-source projects on blockchain: Sui, Solana, and Gno.land.

### Team Code Repos

- Dot Agent Kit: https://github.com/VAR-META-Tech/dot-agent-kit.git

### Team Github

- Varmeta: https://github.com/VAR-META-Tech
- Thinh Nguyen: https://github.com/thinhnx-var
- Ngoc Nguyen: https://github.com/thanhngoc541

## Development Roadmap :nut_and_bolt:

### Overview

-  **Total Estimated Duration:** 2 months
-  **Full-Time Equivalent (FTE):** 3
-  **Total Costs:** $30,000 USD
-  **DOT %:** 50%
-  **USDC %:** 50%

### Milestone 1 — Core Functionality

-  **Estimated duration:** 1 month
-  **FTE:** 3
-  **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Inline code documentation and a tutorial for each supported framework |
| **0c.** | Testing and Testing Guide | Comprehensive unit tests for core functions and a testing guide |
| **0d.** | Article | A published article explaining the project’s achievements |
| 1. | Plugin-dot Package | Polkadot module with node connection (WebSocket/HTTP, auto network switching), wallet management (sr25519/ed25519/ECDSA keys, import/export, address utilities), token transfer (DOT/parachain, balances, fees, cross-chain), and basic message encryption/decryption (wallet signing, formatting, key management). |
| 2. | sr25519-AES Package | Message encryption/decryption using combined sr25519 and AES |
| 3. | ed25519-AES Package | Message encryption/decryption using combined ed25519 and AES |
| 4. | ECDSA-AES Package | Message encryption/decryption using combined ECDSA and AES |

### Milestone 2 — Advanced Features and Framework Integration

-  **Estimated Duration:** 1 month
-  **FTE:** 2
-  **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Expanded documentation covering advanced features and framework-specific guides |
| **0c.** | Testing and Testing Guide | Additional tests for staking and framework adapters |
| **0d.** | Article | A follow-up article on advanced features and use cases |
| 1. | Staking Module | Basic tools for AI agents to assist with DOT staking, including read-only validator info and performance metrics, simple stake/unstake functions, balance and rewards monitoring, and unbonding period tracking. |
| 2. | Framework Adapters | Modular adapters for Eliza, LangChain, and at least one additional framework |

## Future Plans

Our vision is to ensure the Dot Agent Kit evolves into a robust and indispensable tool within the Polkadot ecosystem. Beyond the initial development phase, our long-term vision is to enhance the toolkit’s functionality and expand its utility, with a particular emphasis on integrating with DeFi platforms on Polkadot.

1.  **DeFi Integration**:
-   Token Swaps: Enabling AI agents to perform automated token swaps on decentralized exchanges (DEXs).
-   Lending and Borrowing: Equipping agents with tools to participate in lending pools or borrow assets from protocols.
-   Liquidity Provision: Allowing agents to provide liquidity to DeFi pools and earn rewards autonomously.
-   Yield Farming and Staking: Automating yield farming strategies and staking operations across parachains to maximize returns for users.

2.  **Cross-Parachain Interactions**:  
As Polkadot’s ecosystem of parachains continues to grow, we will enhance the toolkit to support cross-parachain communication and asset transfers. This will enable AI agents to operate seamlessly across multiple chains, unlocking new opportunities for interoperability within the network.
    
3.  **Ongoing Maintenance and Updates**:  
We are committed to keeping the toolkit aligned with the latest advancements in Polkadot, Substrate, and supported AI frameworks. This will involve regular updates to documentation, rigorous testing, and security audits to maintain reliability and performance.