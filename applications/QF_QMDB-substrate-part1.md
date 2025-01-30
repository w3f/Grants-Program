# Substrate - QMDB Core Integration for Substrate Storage Enhancement

- **Team Name:** Quantum Fusion
- **Payment Details:** 
  - **DOT:** 5DNqyUcanQhL5Fy2TpzDAc8Ac6DcYt8sjpLFBgv7kuWmaLXc
  - **USDC:** 12K97oseeBxoWnyYRU3DJkxKTiDGFBh1pK4jLyuUJzYHkqdD
  - Tax number: PT312117116
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

We are focusing on QMDB integration as the proof storage engine within Substrate (https://github.com/QuantumFusion-network/spec/issues/16). 
This is the first step of our blockchain state storage research and optimisation  -  https://github.com/QuantumFusion-network/spec/issues/13

### Project Details

Technology stack:
- RUST language for QMDB integration with Substrate
- DevOps tools for deployment and monitoring

Documentation:
- Core components and architecture documentation to be developed
- Integration specifications and API documentation
- Performance benchmarking methodology

Research and PoC:
- https://github.com/QuantumFusion-network/spec/issues/16
- https://qfnetwork.xyz/litepaper

What this project will not provide:
- Full prefix search functionality
- Production-ready indexing solution
- Advanced iterator implementation

### Ecosystem Fit

- **Target Audience:** All parachains for this iteration. We are avoiding the problem of migration as it won't be helpful for Polkadot L1 at this moment.
- **Project Fit:** Polkadot’s focus on modular and scalable blockchain infrastructure makes it an ideal candidate for advanced storage optimisations like QMDB integration. By enhancing storage efficiency, this proposal aligns with Polkadot’s long-term vision of high-performance, decentralized systems.
- **Similar Projects:** 

## Team :busts_in_silhouette:

### Team members
- Team Lead: Vas Soshnikov
- Team Member: Andrew Orlov

### Contact
- **Contact Name:** Vas Soshnikov
- **Contact Email:** vasiliy.soshnikov@gmail.com
- **Website:** https://qfnetwork.xyz

### Legal Structure
- **Registered Address:** Travessa Eugenia Brandao de Melo 273A, Santa Cruz, Madeira, Portugal
- **Registered Legal Entity:** Private Entrepreneur Sergei Cherepanov, PT312117116

### Team's experience
Previous Polkadot grants:
- https://github.com/kaonone/polkahub-monorepo
- https://substrate.io/ecosystem/projects/polkahub/

### Team Code Repos
- https://github.com/QuantumFusion-network
- https://github.com/andor0
- https://github.com/dedok

### Team LinkedIn Profiles
- https://www.linkedin.com/in/andrei-orlov-7263a482/
- https://www.linkedin.com/in/vas-soshnikov-76722783/

## Development Status :open_book:

Currently in initial development phase with:
- Project planning completed
- Initial research conducted
- Basic integration testing started

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 7 weeks
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 30,000 USD
- **DOT %:** 50%
- **USDC %:** 50%

### Milestone 1 — QMDB Core Integration

- **Estimated Duration:** 3 weeks
- **FTE:** 2
- **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Comprehensive inline documentation and integration tutorial |
| **0c.** | Testing Guide | Unit tests coverage with detailed testing guide |
| **0d.** | Docker | Dockerfile for testing all milestone functionality |
| 1. | QMDB Storage Traits | Implementation of basic QMDB storage traits without iterators and prefixes |
| 2. | Key Operations | Implementation of key-based search/insert/delete operations |
| 3. | API Compatibility | Substrate storage API compatibility layer |
| 4. | Prototype | Working prototype integrated with Substrate |

### Milestone 2 — Storage Enhancement and Testing

- **Estimated Duration:** 2 weeks
- **FTE:** 2
- **Costs:** 9,000 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Updated documentation with deployment guidelines |
| **0c.** | Testing Guide | Extended testing coverage |
| **0d.** | Docker | Updated Docker configurations |
| 1. | Storage Indexing | Development of storage indexing mechanism (in-memory B-Tree or sorted sparse list) |
| 2. | Performance Testing | Initial benchmarking implementation |
| 3. | Integration Tests | Comprehensive integration test suite |

### Milestone 3 — System Testing

- **Estimated Duration:** 1 week
- **FTE:** 2
- **Costs:** 4,500 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Testing documentation and guides |
| **0c.** | Testing Guide | System test specifications |
| **0d.** | Docker | Testing environment in Docker |
| 1. | Full System Testing | Complete Substrate test suite execution |
| 2. | Performance Validation | Comprehensive benchmarking results |
| 3. | Test Reports | Detailed testing reports and analysis |

### Milestone 4 — Deployment and Optimization

- **Estimated Duration:** 1 week
- **FTE:** 2
- **Costs:** 4,500 USD

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Final documentation and deployment guides |
| **0c.** | Testing Guide | Production deployment guide |
| **0d.** | Docker | Production-ready Docker configuration |
| **0e.** | Article | Technical article about QMDB integration benefits |
| 1. | DevNet Deployment | Implementation deployed on QF DevNet |
| 2. | Monitoring Setup | Integration of monitoring and alerting system |
| 3. | Performance Optimization | Final optimization and benchmarking

## Future Plans

Our long-term strategy is outlined in https://qfnetwork.xyz/litepaper, focusing on:
- Continuous development and maintenance
- Integration with the broader Polkadot ecosystem
- Enhancement of QMDB capabilities

## Additional Information :heavy_plus_sign:

Previous grants experience includes:

1. PolkaHub Project:
   - https://github.com/kaonone/polkahub-monorepo
   - https://substrate.io/ecosystem/projects/polkahub/
   - Successfully completed and deployed

2. Previous contributions to Polkadot ecosystem:
   - Implementation of deployment tools
   - Development of substrate modules
   - Infrastructure optimization projects

Our team has demonstrated strong technical expertise and successful delivery through these previous grants, showing our capability to execute complex technical projects within the Polkadot ecosystem.

