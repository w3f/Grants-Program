# Create Dot App

## Project Overview

### Project Summary
Create Dot App is a command-line interface (CLI) tool designed to streamline the development process for Polkadot-based decentralized applications (dApps). Similar to popular scaffolding tools like `create-react-app` or `create-next-app`, this tool enables developers to quickly bootstrap new Polkadot projects with pre-configured templates and best practices.

### Problem Statement
Currently, developers entering the Polkadot ecosystem face significant barriers when starting new projects:
- **Complex Setup Process**: Setting up a new Polkadot dApp requires extensive configuration of dependencies, blockchain connections, and development environments
- **Scattered Resources**: Developers must manually research and integrate various tools, libraries, and patterns
- **Inconsistent Project Structure**: Lack of standardized project templates leads to inconsistent codebases and development practices
- **High Learning Curve**: New developers spend considerable time on boilerplate setup rather than focusing on core application logic
- **Limited Framework Options**: While `npx create-polkadot-dapp` exists as a scaffolding tool, it is currently heavily limited to React-based projects only, leaving developers who prefer other modern frontend frameworks (Vue.js, Svelte) without suitable starter options

### Solution Overview
Create Dot App addresses these challenges by providing a comprehensive, framework-agnostic alternative to the existing `create-polkadot-dapp` tool. While the current solution serves React developers well, Create Dot App expands the ecosystem support to include multiple popular frontend frameworks, ensuring that developers can work with their preferred technology stack.

**🚀 One-Command Setup**
```bash
npx create-dot-app my-polkadot-app
```

**🎯 Multiple Frontend Framework Support** *(Key Differentiator)*
- React.js with TypeScript
- Vue.js with TypeScript  
- Svelte with TypeScript
- SvelteKit (Svelte-based)
- Next.js (React-based)
- Nuxt.js (Vue-based)

**📦 Pre-configured Starter Templates**
Each framework will include multiple SDK integration options:
- Basic wallet connection dApp
- NFT items list

**🔧 Dual SDK Integration Options**
For maximum flexibility and developer choice, each frontend framework template will offer two modern Polkadot API integration options:
- **PAPI (Polkadot API)** - The next-generation type-safe Polkadot API
- **Dedot** - A lightweight, modern TypeScript SDK for Polkadot

For example, React developers can choose between:
- `react-papi` - React template with PAPI integration
- `react-dedot` - React template with Dedot integration

This dual-SDK approach ensures developers can work with their preferred API layer while maintaining the same frontend framework, offering templates like:
- `vue-papi`, `vue-dedot`
- `svelte-papi`, `svelte-dedot`  
- `sveltekit-papi`, `sveltekit-dedot`
- `nextjs-papi`, `nextjs-dedot`
- `nuxtjs-papi`, `nuxtjs-dedot`

**🔧 Built-in Best Practices**
- Modern API integration with PAPI or Dedot SDKs (developer's choice)
- Wallet connection utilities (Polkadot.js extension, Talisman, SubWallet)
- TypeScript configurations optimized for Polkadot development

### Key Features
1. **Interactive Project Setup**: Guided CLI prompts for selecting frameworks, SDK preferences (PAPI vs Dedot), templates, and configurations
2. **Modular Architecture**: Clean separation between blockchain logic and frontend presentation with choice of modern API layers
3. **Developer Experience**: Hot reloading, type safety, and comprehensive documentation for both PAPI and Dedot integrations
4. **Multi-chain Support**: Templates compatible with Polkadot, Kusama, and custom substrate chains across both SDK options
5. **Production Ready**: Optimized build configurations and deployment guides for each framework-SDK combination

### Target Audience
- **Multi-Framework Developers**: Developers who prefer Vue.js, Svelte, or other modern frameworks beyond React
- **New Polkadot Developers**: Developers transitioning from other blockchain ecosystems who want to use their familiar frontend tools
- **Web2 Developers**: Frontend developers looking to build their first blockchain application with their preferred framework
- **Hackathon Participants**: Teams needing to quickly prototype Polkadot-based solutions using diverse technology stacks
- **Educational Institutions**: Universities and bootcamps teaching blockchain development across multiple frontend frameworks
- **Enterprise Teams**: Companies building internal tools or client solutions on Polkadot with specific technology requirements

### Expected Impact
- **Reduced Time-to-Market**: From hours of setup to minutes
- **Lower Barrier to Entry**: Simplified onboarding for new developers
- **Ecosystem Growth**: More applications and developers joining Polkadot
- **Code Quality Improvement**: Standardized patterns and best practices
- **Community Building**: Shared templates and collaborative development

## Team

- **Team Name:** dot-app
- **Contact Name:** Preschian Febryantara
- **Contact Email:** preschian27@gmail.com
- **Website:** https://github.com/preschian

### Team members

- Preschian Febryantara: [Linkedin](https://www.linkedin.com/in/preschian-febryantara/) - [Github](https://github.com/preschian)

### Team's experience

- 5+ Years Web Development Experience: Extensive background in modern web development with comprehensive full-stack development skills
- Fullstack Developer at Koda.art - Currently contributing as a fullstack developer at Koda.art, a platform within the Polkadot ecosystem, where I have gained comprehensive experience with Polkadot.js API integration, substrate chain interactions, modern frontend frameworks in blockchain applications, user experience design for Web3 applications, and production deployment and maintenance of dApps.

## Development Status

### Current Status
**Project Phase:** Pre-Development / Planning Stage

The Create Dot App project is currently in the initial planning phase. Development has not yet commenced, allowing for a fresh start with clear objectives based on current ecosystem needs.

### Research & Preparation Completed
- Analysis of existing tools
- Evaluation of modern Polkadot APIs (PAPI vs Dedot)
- Frontend framework ecosystem assessment
- CLI architecture and template structure planning

### Development Readiness
Starting from scratch provides advantages including clean architecture, incorporation of latest technologies, and avoiding legacy technical debt. All necessary technical knowledge and resources are in place to begin immediate development upon grant approval.

Development will commence with repository setup, CLI implementation, template creation, and comprehensive testing across all supported frameworks and SDK combinations.

## Development Roadmap

This section breaks down the development roadmap into milestones and deliverables for the Create Dot App CLI tool. The project focuses on creating a comprehensive scaffolding tool that supports multiple frontend frameworks with dual SDK integration options (PAPI and Dedot).

### Overview

- **Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 0.5 FTE
- **Total Costs:** 30,000 USD

## Milestone 1: Core CLI Infrastructure & Initial Templates

**Estimated Duration:** 4 weeks

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT License - ensuring maximum compatibility and adoption for the developer tooling ecosystem |
| 0b. | Documentation | We will provide comprehensive **inline documentation** of the CLI code and a detailed **tutorial** that explains how developers can use the tool to scaffold new Polkadot projects, including examples for each supported framework and SDK combination |
| 0c. | Testing and Testing Guide | Core CLI functions and generated templates will be fully covered by comprehensive integration tests including template generation, wallet connection flows, and API integration validation. The guide will describe how to run these tests and validate template outputs |
| 0d. | Repository | We will provide a complete repository with all source code, tests, and examples that can be used to test and verify all milestone deliverables |
| 0e. | Article | We will publish an **article** explaining the motivation behind Create Dot App, how it addresses current ecosystem gaps, and a comprehensive guide for developers on getting started with the tool |
| 1. | CLI Core Framework | Interactive command-line interface with user prompts for framework selection, SDK choice (PAPI/Dedot), and template options. Includes project name validation, directory creation, and dependency management |
| 2. | Template Engine | Flexible templating system that can generate projects based on user selections, with variable substitution, file copying, and package.json configuration |
| 3. | React Templates | Complete React.js starter templates with both PAPI and Dedot integrations (`react-papi`, `react-dedot`), including wallet connection utilities and basic dApp structure with NFT items list functionality |
| 4. | Vue.js Templates | Complete Vue.js starter templates with both PAPI and Dedot integrations (`vue-papi`, `vue-dedot`), including wallet connection utilities and basic dApp structure with NFT items list functionality |

## Milestone 2: Extended Framework Support & Production Release

**Estimated Duration:** 4 weeks

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Next.js Templates | Complete Next.js starter templates with both PAPI and Dedot integrations (`nextjs-papi`, `nextjs-dedot`), including wallet connection utilities and basic dApp structure with NFT items list functionality |
| 2. | Svelte Templates | Complete Svelte starter templates with both PAPI and Dedot integrations (`svelte-papi`, `svelte-dedot`), including wallet connection utilities and basic dApp structure with NFT items list functionality |
| 3. | SvelteKit Templates | Complete SvelteKit starter templates with both PAPI and Dedot integrations (`sveltekit-papi`, `sveltekit-dedot`), including wallet connection utilities and basic dApp structure with NFT items list functionality |
| 4. | Nuxt.js Templates | Complete Nuxt.js starter templates with both PAPI and Dedot integrations (`nuxtjs-papi`, `nuxtjs-dedot`), including wallet connection utilities and basic dApp structure with NFT items list functionality |
| 5. | Integration Testing | Comprehensive integration tests for all generated templates, including end-to-end testing of wallet connections, API integrations, and cross-framework compatibility validation |
| 6. | NPM Package Distribution | Production-ready NPM package with proper versioning, dependency management, and automated publishing pipeline |
| 7. | Community Tools | Contribution guidelines, template validation tools, and documentation for community members to add new templates or frameworks |

## Budget Breakdown

**Category:** Budget breakdown for a 2-month development period

| Category | Item | Cost (Monthly) | Duration | Total | Description |
| --- | ---- | --- | --- | --- | ---|
| Personnel | Full-Stack Developer | 15,000 USD | 2 months | 30,000 USD | Leading project development, implementing CLI tool, creating all framework templates, testing, and documentation |
| --- | --- | --- | **Total** | **30,000 USD** |  |

## Testing & Verification Strategy

**Template Validation:**
- Each generated template must successfully install dependencies
- All templates must compile without errors
- Wallet connection functionality must work across supported wallets
- Both PAPI and Dedot integrations must successfully connect to Polkadot/Kusama networks

**CLI Testing:**
- Interactive prompts must handle all user input scenarios
- Error handling for invalid project names and existing directories


## Future Plans

- **Additional Framework Support**: Expand support to include Preact, Solid, and Remix frameworks
- **Smart Contract Templates**: Add Solidity smart contract templates for PolkaVM integration
- **Mobile Development**: Explore templates for Expo and NativeScript (requires further research and feasibility analysis)

## Additional Information

I am currently working full-time at Koda.art, a Polkadot NFT marketplace on AssetHub. This hands-on experience with production Polkadot applications provides deep insights into developer pain points and ecosystem needs that directly inform this project.
