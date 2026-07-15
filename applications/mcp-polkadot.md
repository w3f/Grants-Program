# Substrate MCP Server

> [!NOTE]
> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g., `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://grants.web3.foundation/docs/process) on how to submit a proposal.

- **Team Name:**
- **Payment Details:**
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 2
- **Status:** Terminated

> [!IMPORTANT]
> *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

`mcp-polkadot` is a proposal for a server that exposes on-chain state to AI agents via MCP. This is done by parsing Substrate's runtime metadata, generating MCP "Resources" from it, and providing an HTTP server running MCP, allowing AI agents to query on-chain data via Polkadot.js. This can serve any Substrate instance's state over MCP via a small, CLI-based webserver.

### Overview

[Model-Context Protocol (MCP)](https://www.anthropic.com/news/model-context-protocol) is an open protocol developed by [Anthropic](https://www.anthropic.com/) that defines standardized interactions between AI agents and external systems. It is used in many modern agents and tools, including Claude Desktop, OpenAI's SDK, Windsurf, and Cursor. This proposal aims to build a server that exposes on-chain state and runtime metadata for Substrate-based chains (like Kusama, BitTensor, Akash, etc) via Substrate's runtime metadata and MCP, allowing AI agents to interact with blockchain data more effectively.

A larger list of MCP-compatible servers and clients can be found at [awesome-mcp](https://github.com/appcypher/awesome-mcp-servers?tab=readme-ov-file).

### Project Details

`mcp-polkadot` will:

- Connect to a Substrate-based chain via Polkadot.js.
- Fetch the runtime metadata and decompose it into "Resources" available to MCP clients.
- Expose chain state and data through MCP's standardized "Resource" interface
- Implement MCP endpoints that return blockchain data in AI-consumable formats
- Provide TypeScript SDK for easy integration

Technical stack:

- TypeScript/Node.js for the server implementation
- [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) for MCP compliance
- Polkadot.js libraries for Substrate interaction
- CLI for easy deployment
- Docker for more testnet/production deployment

The scope of this grant will NOT:

- Work with parachains.
- Send extrinsics.
- Modify or extend the MCP protocol specification itself
- Build end-user applications beyond demonstration purposes

### Ecosystem Fit

This project fits into the Polkadot/Substrate ecosystem by enhancing the accessibility of blockchain data for AI systems. It addresses the following needs:

- Target audience: AI developers, Substrate/Polkadot developers, and teams building AI-enhanced blockchain applications
- Needs: Standardized AI-friendly access to Substrate blockchain data; easier integration between AI assistants and Substrate chains
- Identification: The growth of AI assistants and their ability to interact with structured data systems creates an opportunity to make blockchain data more accessible through standardized protocols like MCP

There are currently no similar projects in the Substrate/Polkadot ecosystem that specifically focus on Model-Context Protocol integration. This project aims to bridge Substrate projects with the latest technology in the AI and agent space.

## Team :busts_in_silhouette:

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

Jake Hemmerle is a software engineer with several years of experience with blockchain architecture and development. His background includes Substrate runtime development, cryptography engineering, and he has contributions to multiple open source projects, including Substrate and Matrix, as well as several Substrate-based projects, including Entropy and Astar Network.

- **Email:** jakehemmerle@gmail.com
- **GitHub:** https://github.com/jakehemmerle
- **LinkedIn:** https://www.linkedin.com/in/jakehemmerle/

## Development Status :open_book:

This project is in the initial planning phase. The concept builds upon:

- The [Model-Context Protocol specification](https://github.com/anthropics/anthropic-cookbook/tree/main/mcp), which defines standardized interactions between AI assistants and external systems
- The Polkadot.js libraries for Substrate chain interaction
- Existing knowledge and documentation about Substrate runtime metadata structure and chain state access

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1 FTE
- **Total Costs:** 10,000 USDC + 10,000 USD equivalent in DOT
- **DOT %:** 50%

### Milestone 1 — MVP

- **Estimated duration:** 2 month
- **FTE:** 1
- **Costs:** 10,000 USDC + 10,000 USD equivalent in DOT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide comprehensive documentation including: inline code documentation, setup and usage guides, and example usage scenarios of our tool with a simple standalone Substrate chain.|
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by unit tests and integration tests. We will provide a testing guide that explains how to run these tests and validate the MCP server functionality with the Substrate chain. |
| **0d.** | Docker | We will provide a Dockerfile, Docker Compose, and a CLI tool to easily spin up the MCP server connected to various Substrate chains. |
| 0e. | Article | We can publish an article (where?) explaining how to use `mcp-polkadot`, its basic architecture, and examples of AI assistants interacting with Substrate blockchains. |
| 1. | MCP Server Core | Implement the core MCP server that complies with the Model-Context Protocol specification, including the necessary endpoints, request/response handling, and server infrastructure. |
| 2. | Polkadot.js Integration | Integrate Polkadot.js libraries to connect to Substrate-based nodes, fetch their runtime metadata, and query their state. |
| 3. | Chain State Resource Implementation | Dynamically generate MCP "Resources" that expose Substrate chain state (storage items, constants, runtime information) via standardized MCP interfaces. |
| 4. | Example AI Assistant Integration | Develop example scripts and documentation showing how AI assistants can use the MCP server to query and interpret Substrate chain data. |

## Future Plans

This proposal aims to build a simple MCP interface for Substrate chains Future plans can include:

- supporting cross-parachain queries.
- supporting queries into smart contract state (eg. ink!, EVM)
- supporting multiple Substrate-chains through the same binary
- the construction and submission of extrinsics
- working with the community to identify and implement additional features and use cases
- promoting the project to AI developers to increase adoption and blockchain accessibility
- exploring commercial support options for teams building production applications
