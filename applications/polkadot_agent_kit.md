# Polkadot Agent Kit

- **Team Name:** Elastic Labs (https://elasticlabs.org/) - Core contributors of [OpenGuild Community](https://openguild.wtf).
- **Payment Address:** 
  - **DOT**: 15NL11ZoE9KUY54VWUzC3mawgzsQ2UcniXKSAFUa1hC8vnKd (Elastic Labs Multisig)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview

### Overview

[Polkadot Agent Kit](https://github.com/elasticlabs-org/polkadot-agent-kit) is an open-source library provides developers with a set of tools to build AI Agents that interact autonomously with the Polkadot SDK-based networks.

- Main repository: https://github.com/elasticlabs-org/polkadot-agent-kit
- Telegram Chatbot Polkadot Agent: https://github.com/elasticlabs-org/polkadot-agent-kit/tree/main/examples/telegram-bot

### Motivation & Ecosystem Fit

Polkadot is widely recognized for its powerful cross-chain capabilities and secure transaction infrastructure. However, interacting with these features—especially through XCM and cross-chain asset transfers—often requires navigating a complex and fragmented developer experience.

Executing a simple asset transfer across parachains or from Polkadot to another chain can involve multiple intricate steps, making it difficult for developers and users to integrate these capabilities into their applications smoothly.

Not only that, with its complexity in different runtime architecture & network configuration, each Polkadot SDK-based networks requires a different way to interact with.

With these challenges in mind, the Polkadot Agent Kit was created to simplify development and reduce the complexity of interacting with Polkadot SDK-based networks through autonomous, agent-driven capabilities.

### Key Features

Below are the high-level overview of the library features, a detailed breakdown of each feature and the plan for development is listed in the later sections:

- **_Secure wallet management_**: Mnemonic-derived wallets or Proxy-based, Multisig-based.

- **_Cross-chain interactions and queries_**: Primarily built on top of the two protocols XCM & ISMP. Below are common use cases of agent kits:
  - Seamlessly multi-hop transfer across parachains and the relaychain.
  - Interact with different DeFi protocols in the Polkadot ecosystem.
- **_Basic local chain transactions_**
  - (e.g. Query balances, mint new asset & NFTs).
- **_Third-party integrations including:_**

  - **_Social clients_**: Seamlessly integrates with third-party social clients to distribute the agentic feature easier.
    - Telegram, Discord, Twitter.
  - **_Agent Interoperability_**: Expand the features of AI agents by integrating with External Context Providers (ECP), enrichs the knowledge base of the agent built with this library.
    - MCP Server, Langchain Actions, Google A2A.

## Project Details

Our team has successfully finished the initial phase of the Polkadot Agent Kit, which can be found and used in the repository: https://github.com/elasticlabs-org/polkadot-agent-kit

### Installation Guide

Ensure your NodeJS environment is at least v23.9.0:

```
pnpm i @polkadot-agent-kit/sdk
```

### Features

#### Multiple Substrate Network Connections

Polkadot Agent Kit uses [Polkadot API](https://github.com/polkadot-api/polkadot-api) as the core client library to set up the connection with Substrate-based chains. You can discover [the list of supported chains in the library codebase](https://github.com/elasticlabs-org/polkadot-agent-kit/blob/main/packages/common/src/chains/supported-chains.ts).

```typescript
// By importing the SDK, Polkadot API descriptors are automatically initalized.
import { PolkadotAgentKit } from "@polkadot-agent-kit/sdk";

// Create an agent - no initialization needed.
const agent = new PolkadotAgentKit({
  privateKey: process.env.PRIVATE_KEY,
  chains: [
    { name: "westend", url: "wss://westend-rpc.polkadot.io" },
    {
      name: "polkadot_assethub",
      url: "wss://statemint.api.onfinality.io/public-ws",
    },
    {
      name: "paseo_hydradx",
      url: "wss://pas-rpc.stakeworld.io",
    },
  ],
});

// Initialize the specific single connection in the list of chains.
const connection = await agent.getConnection("westend");
```

#### Key Types and Mnemonic Support

The Polkadot AI Agent Kit now supports both Sr25519 and Ed25519 key types with dynamic configuration, as well as mnemonic phrase key generation.

#### Key Type Configuration

You can specify which key type to use when creating your agent:

```typescript
// Create an agent with Sr25519 keys
const agent = new PolkadotAgentKit({
  privateKey: process.env.PRIVATE_KEY,
  keyType: "Sr25519", // Use Sr25519 for signing (default is Ed25519)
  chains: [{ name: "westend", url: "wss://westend-rpc.polkadot.io" }],
});
```

#### Mnemonic Phrase Support

You can now create an agent using a mnemonic phrase instead of a raw private key:

```typescript
// Create an agent from a mnemonic phrase
const agent = new PolkadotAgentKit({
  mnemonic: "word1 word2 word3 ... word12", // Your 12 or 24 word mnemonic
  derivationPath: "", // Optional derivation path (default: '')
  keyType: "Sr25519", // Optional key type (default: Ed25519)
  chains: [{ name: "westend", url: "wss://westend-rpc.polkadot.io" }],
});
```

#### Using Both Key Types and Delegation

You can mix key types and use both private keys and mnemonics with delegation:

```typescript
// Advanced configuration with different key types
const agent = new PolkadotAgentKit({
  // Main account with mnemonic
  mnemonic: "word1 word2 word3 ... word12",
  derivationPath: "//0",
  keyType: "Sr25519",

  // Delegate account with private key
  delegatePrivateKey: "0x1234...",
  delegateKeyType: "Ed25519",

  // Or delegate with mnemonic
  // delegateMnemonic: 'word1 word2 word3 ... word12',
  // delegateDerivationPath: '//1',
  // delegateKeyType: 'Sr25519',

  chains: [{ name: "westend", url: "wss://westend-rpc.polkadot.io" }],
});
```

#### Using the agent to execute with onchain actions

The Polkadot Agent Kit abstracts complex blockchain interactions into simple prompts. Instead of manually constructing transactions and handling network-specific logic, developers can trigger powerful on-chain actions with a single line of code:

```typescript
await agent.prompt("Vote Proposal #123 on OpenGov");
await agent.prompt("Transfer 10 DOT from Asset Hub to Coretime Chain");
await agent.prompt("Mint an NFT on Asset Hub");
await agent.prompt("Stake 100 DOT on a DeFi protocol");
```

Under the hood, the agent parses natural-language instructions, identifies the correct transaction type, constructs the necessary extrinsics, handles signature authorization (via Proxy/Multisig if needed), and submits the transaction to the network — all autonomously.

Without the Polkadot Agent Kit, developers must manually interact with the Polkadot.js API, construct extrinsics, manage wallets, and handle network-specific encoding.

Here’s an example of how you'd implement the same actions manually:

```typescript
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";

// Connect to a Hydradx node on Polkadot Relaychain.
const provider = new WsProvider("wss://statemint.api.onfinality.io/public-ws");
const api = await ApiPromise.create({ provider });

// Create a wallet from mnemonic phrase.
const keyring = new Keyring({ type: "sr25519" });
const account = keyring.addFromUri("your mnemonic here");

// Transfer 10 DOT from Asset Hub to Coretime Chain (requires XCM call)
await api.tx.xcmPallet.limitedReserveTransferAssets(
  {
    V3: {
      parents: 0,
      interior: {
        X1: {
          Parachain: <Coretime_Parachain_ID>,
        },
      },
    },
  },
  {
    V3: {
      fun: {
        Fungible: <amount>,
      },
      id: {
        Concrete: {
          parents: 0,
          interior: 'Here',
        },
      },
    },
  },
  {
    V3: {
      parents: 0,
      interior: {
        X1: {
          AccountId32: {
            id: <destination_account_id_as_bytes>,
            network: 'Any',
          },
        },
      },
    },
  },
  0,
  {
    Unlimited: null,
  }
).signAndSend(account);
```

Now imagine how many lines of code needed to replicate the same functionalities of the below agent prompt:

```typescript
await agent.prompt(
  "Transfer 10 DOT from Asset Hub to Hydration, swap to USDT with
  Omnipool and deposit USDT to Bifrost to provide liquid staking."
);
```

Polkadot Agent Kit is all about developer experience!

## Architecture

| Package    | Path               | Description                                                                                   |
| :--------- | :----------------- | :-------------------------------------------------------------------------------------------- |
| **Common** | `packages/common*` | Defines RPC endpoints, chain configurations, API interfaces, and types shared across the SDK. |
| **Core**   | `packages/core`    | Implements on-chain and off-chain functions used internally by the LLM package.               |
| **LLM**    | `packages/llm`     | Provides tools and action calls for integrating with large language models (LLMs).            |
| **SDK**    | `packages/sdk`     | Main developer-facing SDK. Exposes APIs from Common, Core, and LLM for external use.          |

## Technology Stack

1. **_Blockchain Interaction:_** Using Polkadot API (PAPI) for querying Polkadot SDK-based chains and submitting transactions.
2. **_Cross-chain protocols integrations:_** [XCM](http://docs.polkadot.com/develop/interoperability/intro-to-xcm/), [ISMP](https://github.com/polytope-labs/ismp), [PVQ](https://github.com/open-web3-stack/PVQ). To avoid reinventing the wheels, we plan to work with [`ParaSpell`](https://paraspell.github.io/) team to provide a seamless integrations.
3. **AI Layer & External Context Provides (ECPs):** Leverage the existing LangChain framework for natural language processing, enhanced with a custom tools to expand agent's capabilities. On the other hand, provide an option to integrate with ECPs (MCP Client/Server, A2A-compliant agents, Langchain actions).
4. **DevOps:** Docker for containerized deployment, GitHub Actions for CI, and Vitest for unit testing and e2e testing. This stack ensures compatibility with the Polkadot ecosystem while providing a robust foundation for new features.

## Team :busts_in_silhouette:

### Team Members

- Tin Chung ([Github](https://github.com/chungquantin) / [Website](https://www.chungquantin.com)):
  - **Project Role**: General Manager
- Dustin Ho ([Github](https://github.com/CocDap))
  - **Project Role**: Lead Engineer
- Andrew Chau ([Github](https://github.com/chauanhtuan185)):
  - **Project Role**: Engineer

### Contact 📞

- **Contact Name:** Tin Chung
- **Contact Email:** [tin@openguild.wtf](mailto:tin@openguild.wtf)

### Legal Structure

- **Registered Address:** No legal structure yet.
- **Registered Legal Entity:** No legal structure yet.

### Team’s Experience

- Tin Chung ([Github](https://github.com/chungquantin) / [Website](https://www.chungquantin.com)):
  - **Background**:
    - Polkadot Blockchain Academy Wave 5 Graduate.
    - Core blockchain engineer of a parachain team on Polkadot.
    - Currently leading developer relation function of the OpenGuild (Polkadot SEA) community.
    - 3+ years experience working with blockchain technology: Bitcoin Lightning Network, Solana, Ethereum & Polkadot.
    - Experienced with contribution to OSS in Polkadot ecosystem: `ink!`, `pop-cli`, `polkadot-sdk` and more.
- Dustin Ho ([Github](https://github.com/CocDap))
  - **Background**:
    - PBA-X Graduate 2025 
    - Core engineer at blockchain layer-1 using Polkadot SDK 
    - 4+ years experiences with blockchain technology: Polkadot, Near, Solana, Ethereum, ...
- Andrew Chau ([Github](https://github.com/chauanhtuan185)):
  - **Background**:
    - PBA-X graduate
    - Ex Backend Engineer at Walless | Open-source wallet on multi-chain
    - 2+ years experience working with blockchain technology: Solana, Ethereum
    - 2+ years experience working with LLM and AI: LangChain, Tensorflow, PyTorch

### Team Code Repo

- https://github.com/elasticlabs-org/polkadot-agent-kit

### Team github accounts 🧑‍💻

- [Tin Chung](https://github.com/chungquantin)
- [Dustin Ho](https://github.com/CocDap)
- [Andrew Chau](https://github.com/chauanhtuan185)

### Team LinkedIn Profiles 🧑‍🎓

- [Tin Chung](https://www.linkedin.com/in/chungquantin/)
- [Dustin Ho](https://www.linkedin.com/in/dung-dinh-880bb0219/)

## Development Status :open_book:

- Core Functionality: A command-line interface (CLI) for creating agents that interact with Polkadot Ecosystem via the Polkadot API, leveraging LangChain for natural language processing.
- Integration: Connection to Polkadot testnets (e.g., Westend) and mainnets
- Status: As of March 31, 2025, the repository has been tested with ~100 daily transactions on testnets, demonstrating stability for basic use cases.
- Version: 1.0.0-alpha . Available on npm package . Link: https://www.npmjs.com/package/@polkadot-agent-kit/sdk

- Codebase: https://github.com/elasticlabs-org/polkadot-agent-kit

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 30,000 USD
- **DOT %:** 60%

### Milestone 1 — Core SDK with XCM Capabilities

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 9,000 USD

|  Number | Deliverable                                                                                                                                                    | Specification                                                                                                               |
| ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                                                                                                                                        | MIT                                                                                                                         |
| **0b.** | Documentation                                                                                                                                                  | Documentation Page + Quickstart tutorial.                                                                                   |
| **0c.** | Testing and Testing Guide                                                                                                                                      | Unit tests + E2E tests guide + CI pipeline.                                                                                 |
|     1a. | Migrate to ParaSpell      | Migrate from raw XCM implementation to use ParaSpell as the underlying XCM library.                                         |
|     1b. | Multi-hop XCM Transferring | Support multi-hop asset transferring via XCM between parachains (reserve transfers) and parachain to relaychain (teleport). |
|     1c. | Transact                                                                                                                                                       | Support XCM transact to allow agent sending runtime calls cross-chain.                                                      |
|      2. | Agentic XCM integration-texts codebase                                                                                                                         | Thorough test coverage for XCM functionalities                                                                              |

### Milestone 2 — DeFi Integrations & External Context Providers

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 10,000 USD

|  Number | Deliverable                                     | Specification                                                                                               |
| ------: | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                         | MIT                                                                                                         |
| **0b.** | Documentation                                   | API reference + advanced guide                                                                              |
| **0c.** | Testing and Testing Guide                       | Integration/stress tests + guide                                                                            |
|     1a. | Agentic DeFi Tools: Hydration                   | Support swapping on Hydration                                                                               |
|     1b. | Agentic DeFi Tools: Bifrost                     | Support minting vDOT                                                                                        |
|     1c. | Agentic DeFi Tools: Relaychain Nomination Pools | Support Nomination Pool staking on Relaychain                                                               |
|     2a. | Host a Model Context Protocol (MCP) server      | Compatible with the structure required of MCP protocol to easily set up a MCP server on top of the library. |
|     2b. | Convertible to Lanchain tools                   | Easily convert the langchain tools                                                                          |

### Milestone 3 — Agent Kit Playground & Examples

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 10,000 USD

|  Number | Deliverable               | Specification                                                    |
| ------: | ------------------------- | ---------------------------------------------------------------- |
| **0a.** | License                   | MIT                                                              |
| **0b.** | Documentation             | Full API reference site + SDK docs                               |
| **0c.** | Testing and Testing Guide | Extended test suite + user guide                                 |
|      1. | Playground App            | Browser application allows developers to play with the agent kit |
|      2. | Replit Examples           | Add examples to run the agent kit on Replit                      |

## Future Plans

Polkadot Agent Kit aims to become the go-to open-source toolkit for developers building agentic applications on Polkadot SDK-based networks. After completing milestones, we intend to have a follow-up proposal to Web3Foundation for:

### Expand Functionality:

- Auditting & Security Analysis.

- Pop Agent Kit CLI - Allows developers to initialize the agent kit starter code base easily.
- Support multiple LLM models - Consider migrating the codebase to LiteLLM to support more LLM models.
- Eliza OS compabitibility - Allows developers to integrate the Polkadot Agent Kit as Eliza OS plugin.
- Options to deploy AI agents: Vercel AI SDK Deployment & PHALA TEE Deployment (This will need to be reconsidered in the future).

### Potential Ecosystem Integrations:

- Hydration
- Apillon
- PolkaAssembly

### Developer onboarding and distribution (additional scope - voluntary):

- Launch comprehensive documentation, quick-start guides, and interactive demos to lower the barrier to entry for new developers.
- Utilize OpenGuild as a distribution platform through online/offlines workshop, collaborate with Polkadot’s flagship events to distribute/promote the kit.
- Introduce open-source bounties at OpenGuild’s meetups to incentivize developers to build agentic applications using the kit, increase mindshare.
