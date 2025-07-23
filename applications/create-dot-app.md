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
npx create-dot-app
```

**🎯 Multiple Frontend Framework Support**
- React and Vue (1st phase)
- Next and Nuxt (2nd phase)

**Planned Templates**

- **Frontend Frameworks:** Svelte, SvelteKit, Solid, Remix
- **Backend Frameworks:** Hono, Elysia, Fastify, H3

Open to feedback for additional frameworks

**📦 Pre-configured Starter Templates**

SDK integrations:
- Basic wallet connection
- Read on-chain data (account balance)
- Subscribe to on-chain data (latest block number)
- Submit on-chain data (remark)
- Multi-chain connection (mainnet and testnet)

Framework integrations:
- Tailwind CSS (with additional icon and UI plugins)
- TypeScript
- ESLint plugin

**🔧 Multiple SDK Integration Choices**
For maximum flexibility and developer choice, each frontend framework template will offer two modern Polkadot API integration options:
- **PAPI (Polkadot API)** - The next-generation type-safe Polkadot API
- **Dedot** - A lightweight, modern TypeScript SDK for Polkadot

For example, React developers can choose between:
- `react-papi` - React template with PAPI integration
- `react-dedot` - React template with Dedot integration

This multiple-SDK approach ensures developers can work with their preferred API layer while maintaining the same frontend framework, offering templates like:
- `nextjs-papi`, `nextjs-dedot`
- `vue-papi`, `vue-dedot`, `nuxtjs-papi`, `nuxtjs-dedot`
- `svelte-papi`, `svelte-dedot`, `sveltekit-papi`, `sveltekit-dedot`

**🔧 Built-in Best Practices**
- Modern API integration with PAPI or Dedot SDKs (developer's choice)
- Wallet connection utilities (Polkadot.js extension, Talisman, SubWallet)
- TypeScript configurations optimized for Polkadot development

### Key Features
1. **Interactive Project Setup**: Guided CLI prompts for selecting frameworks, SDK preferences (PAPI vs Dedot), templates, and configurations
2. **Modular Architecture**: Clean separation between blockchain logic and frontend presentation with choice of modern API layers
3. **Developer Experience**: Hot reloading, type safety, and comprehensive documentation for both PAPI and Dedot integrations
4. **Multi-chain Support**: Templates compatible with Polkadot, Kusama, and custom Substrate chains across both SDK options
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
- Full-stack Developer at Koda.art - Currently contributing as a full-stack developer at Koda.art, a platform within the Polkadot ecosystem, where I have gained comprehensive experience with Polkadot.js API integration, Substrate chain interactions, modern frontend frameworks in blockchain applications, user experience design for Web3 applications, and production deployment and maintenance of dApps.

## Development Status

### Current Status
**Project Phase:** Active Development

The Create Dot App project is currently under active development. The core CLI infrastructure and template system are being implemented, with initial framework templates in progress.

**Repository:** https://github.com/preschian/create-dot-app

### Research & Preparation Completed
- Analysis of existing tools
- Evaluation of modern Polkadot APIs (PAPI vs Dedot)
- Frontend framework ecosystem assessment
- CLI architecture and template structure planning
- Received feedback. Details: https://polkadot-ux-bounty.notion.site/Create-Dot-App-22ce1c2781f3802d87a4c97d898f42e6

### Development Readiness
Starting from scratch provides advantages including clean architecture, incorporation of latest technologies, and avoiding legacy technical debt. All necessary technical knowledge and resources are in place to begin immediate development upon grant approval.

Development will commence with repository setup, CLI implementation, template creation, and comprehensive testing across all supported frameworks and SDK combinations.

## Development Roadmap

This section breaks down the development roadmap into milestones and deliverables for the Create Dot App CLI tool. The project focuses on creating a comprehensive scaffolding tool that supports multiple frontend frameworks with multiple SDK integration choices (PAPI and Dedot).

### Overview

- **Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2 FTE
- **Total Costs:** 10,000 USD

## Milestone 1: Core CLI Infrastructure & Initial Templates

**Estimated Duration:** 4 weeks

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT License - ensuring maximum compatibility and adoption for the developer tooling ecosystem |
| 0b. | Documentation | We will provide comprehensive **inline documentation** of the CLI code and a detailed **tutorial** that explains how developers can use the tool to scaffold new Polkadot projects, including examples for each supported framework and SDK combination |
| 0c. | Testing and Testing Guide | Core CLI functions and generated templates will be fully covered by comprehensive integration tests including template generation, wallet connection flows, and API integration validation. The guide will describe how to run these tests and validate template outputs |
| 0d. | Repository | We will provide a complete repository with all source code, tests, and examples that can be used to test and verify all milestone deliverables |
| 0e. | Article | We will publish an **article** explaining the motivation behind Create Dot App, how it addresses current ecosystem gaps, and a comprehensive guide for developers on getting started with the tool |
| 1. | CLI Core Framework | Interactive command-line interface with user prompts for framework selection, SDK choice (PAPI/Dedot), and template options |
| 2. | Template Engine | Flexible templating system that can generate projects based on user selections |
| 3. | React Templates | Complete React.js starter templates with both PAPI and Dedot integrations (`react-papi`, `react-dedot`), including wallet connection utilities and basic dApp structure with NFT items list functionality |
| 4. | Vue.js Templates | Complete Vue.js starter templates with both PAPI and Dedot integrations (`vue-papi`, `vue-dedot`), including wallet connection utilities and basic dApp structure with NFT items list functionality |
| 5. | NPM Package Distribution | Production-ready NPM package with proper versioning, dependency management, and automated publishing pipeline |

## Milestone 2: Extended Framework Support & Production Release

**Estimated Duration:** 4 weeks

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Next.js Templates | Complete Next.js starter templates with both PAPI and Dedot integrations (`nextjs-papi`, `nextjs-dedot`), including wallet connection utilities and basic dApp structure with NFT items list functionality |
| 2. | Nuxt.js Templates | Complete Nuxt.js starter templates with both PAPI and Dedot integrations (`nuxtjs-papi`, `nuxtjs-dedot`), including wallet connection utilities and basic dApp structure with NFT items list functionality |
| 3. | Integration Testing | Comprehensive integration tests for all generated templates, including deployment testing to major hosting platforms (Vercel, Netlify, and Cloudflare Pages) to ensure all templates work correctly in production environments |
| 4. | Docs Landing Page | Comprehensive documentation website with getting started guides |
| 5. | Community Tools | Contribution guidelines, template validation tools, and documentation for community members to add new templates or frameworks |

## Budget Breakdown

**Category:** Budget breakdown for a 2-month development period

| Category | Item | Cost (Monthly) | Duration | Total | Description |
| --- | ---- | --- | --- | --- | ---|
| Personnel | Full-Stack Developer | 5,000 USD | 2 months | 10,000 USD | Leading project development, implementing CLI tool, creating all framework templates, testing, and documentation |
| --- | --- | --- | **Total** | **10,000 USD** |  |

## Testing & Verification Strategy

**Template Validation:**
- Each generated template must successfully install dependencies
- All templates must compile without errors
- Wallet connection functionality must work across supported wallets
- Both PAPI and Dedot integrations must successfully connect to Polkadot/Kusama networks
- Deployment testing to major hosting platforms (Vercel, Netlify, and Cloudflare Pages)
- Cross-browser compatibility testing for wallet integrations

## Future Plans

- **Additional Framework Support**: Expand support to include Svelte, Preact, Solid, and Remix frameworks
- **Smart Contract Templates**: Add Solidity smart contract templates for PolkaVM integration
- **Mobile Development**: Explore templates for Expo and NativeScript (requires further research and feasibility analysis)

## Success Metrics

The project success will be measured through concrete adoption and quality metrics:

**Adoption Metrics:**
- Progressive user adoption from 5+ early users to 20+ active users successfully scaffolding projects
- GitHub community engagement with 10+ repository stars
- NPM package distribution and usage tracking
- Real-world deployments by at least 2 developers/creators to public endpoints

**Quality Metrics:**
- All generated templates meet production standards: responsive design, proper error handling, scalable architecture, and maintained wallet connections
- Comprehensive documentation and developer resources
- Automated CI/CD pipeline ensuring template quality and reliability
- Integration of community feedback from all development phases

## Additional Information

According to the [State of JavaScript 2024 survey](https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/#front_end_frameworks_ratios), React's dominance is showing signs of decline with decreasing interest and satisfaction metrics among developers, while alternative frameworks like Vue.js and Svelte are gaining momentum and maintaining higher satisfaction rates. This trend validates the importance of providing developers with diverse framework options beyond React-only solutions, making Create Dot App's comprehensive multi-framework support particularly relevant for the evolving JavaScript ecosystem.

Additionally, this project has received extensive feedback and validation from the Polkadot UX Bounty team. The detailed feedback and discussions can be found at [Create-Dot-App UX Bounty Review](https://polkadot-ux-bounty.notion.site/Create-Dot-App-22ce1c2781f3802d87a4c97d898f42e6).
