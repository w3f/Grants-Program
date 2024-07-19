# BlokkFaucet

- **Team Name:** blokk by Apps with love AG
- **Payment Details:**
  - **DOT**: 13BXrKJVAamJwVYaKcHXvnUG24hpTtbAMbaPphTsEVsFi9Bh
- **Level:** 2

## Project Overview

> Play, earn, and fuel the Polkadot ecosystem.

This project builds a browser-based game secured by multiple OAuth providers and Cloudflare. Players can interact with the game and earn rewards through a faucet system. A secure .NET backend API manages the game logic, faucet transactions, and user data persistence using SQL Express databases. Transactions are facilitated through an external or self-hosted parachain node/API, integrating with the Polkadot ecosystem. The project will be periodically funded by automated or manual transfers from a sponsor wallet, ensuring a sustainable reward pool for players.

The project utilizes a parachain node/API to process game transactions within the Polkadot ecosystem. This allows for secure and transparent in-game transactions, potentially using Kusama for testnet deployments or Polkadot for the mainnet version.

We are passionate about creating a fun and engaging gaming experience while also introducing users to the power of blockchain technology through Polkadot. We believe this project has the potential to attract new users to the Polkadot ecosystem and increase parachain activity. We are interested in exploring innovative ways to leverage blockchain technology for gamification and user engagement.

### Project Details

Polkadot faucet which provides a browser game secured by several OAuth providers and Cloudflare. The game management and faucet transactions will be handled by a secured backend API written in .NET. The game, transactions, and keys will be persisted in SQL Express databases. Transactions between are done via an external or selfhosted parachain node/API. The faucet wallet will be filled through manual or automated transactions from the sponsor wallet after several time and faucet wallet standings.

#### Figma Mockups

![Fruit Ninja](https://github.com/user-attachments/assets/e42507ca-094d-4bd0-9ab5-72e74013c89d)
![Mining](https://github.com/user-attachments/assets/f0789d45-4186-4981-9a69-f6c377f526ca)

See [all screen mocks in Figma](https://www.figma.com/design/6C57eHkcYOL3gmOhg9Skv0/POW-Faucet-Game?node-id=1%3A27&t=QqnRK1Y0J9lNYL6o-1).

You can access a [clickable Figma prototype](https://www.figma.com/proto/6C57eHkcYOL3gmOhg9Skv0/POW-Faucet-Game?page-id=1%3A27&node-id=1-28&viewport=410%2C293%2C0.17&t=4JhvjAeBiVyBlpeo-1&scaling=min-zoom&starting-point-node-id=1%3A28).


#### Technology Stack

- .NET
- React
- Tailwind
- SQL Server Express
- polkadotjs or API

### Architecture Diagram

![Architecture](https://github.com/blokk-studio/w3f-grants-program/assets/137090776/e295f4a5-b953-4141-9958-f9f34a5bbb33)

### Ecosystem Fit

This project fits into the Polkadot ecosystem by:

- Encouraging User Adoption: The browser-based game with faucet rewards introduces users to Polkadot and its functionalities in a fun and interactive way.
- Increasing Parachain Activity: By utilizing a parachain for game transactions, the project contributes to the overall activity and network effect within the Polkadot ecosystem.

Target Audience:

- Primary Audience: This project targets everyday users who might be unfamiliar with blockchain technology but are interested in gamification and earning rewards.
- Secondary Audience: Developers interested in building similar game experiences on Polkadot can potentially leverage the project's codebase and architecture.

Needs Met:

- Low Barrier to Entry: The browser-based game with familiar OAuth logins provides a user-friendly experience for those new to blockchain technology.
- Gamified Learning: Players can learn about Polkadot concepts (like parachains and transactions) through an engaging gameplay experience.
- Incentivized Participation: The faucet system encourages users to interact with the game and explore the Polkadot ecosystem further.

Identifying Needs:

- While there isn't widely published research specifically on gamified blockchain education, there's growing evidence for the effectiveness of gamification in learning.
- The rise of Play-to-Earn games: The popularity demonstrates the potential for gamified platforms to attract users and incentivize participation.

Similar Projects:

There are no exact replicas of this project within the Polkadot ecosystem. However, some projects share similar goals.

This project focuses on:

- Direct integration with Polkadot: Players experience the functionalities of the Polkadot ecosystem through in-game transactions.
- Pure Browser-based Game: No additional software downloads are needed, making it more accessible to a wider audience.
- Focus on Polkadot Education: The game mechanics and rewards are designed to introduce users to Polkadot concepts.

Similar Projects in Other Ecosystems:

Blockchain ecosystems like Ethereum have seen a rise in Play-to-Earn games. However, these projects often have their own token economies and don't directly integrate with Polkadot's parachain infrastructure.

This project aims to bridge the gap by offering a fun and educational gaming experience specifically within the Polkadot ecosystem and fostering user adoption.

## Team

### Team Members

- Olivier Oswald (team leader)
- pcaversaccio, Stephan Klaus, Stefan Spieler, Rémy Böhler, Alessandro Pittori, more tba (team members)

### Contact

- **Contact Name:** Stephan Klaus
- **Contact Email:** stephan@blokk.studio
- **Website:** https://blokk.studio/

### Legal Structure

- **Registered Address:** Landoltstrasse 63, 3007 Bern, Switzerland
- **Registered Legal Entity:** Apps with love AG

### Team's Experience

Our team boasts a robust blend of blockchain and web development expertise. Rémy, our lead developer, brings years of experience in building websites, Web3 dApps, and browser-based games with a strong emphasis on user engagement. In addition to his extensive web development skills, Rémy also created a decentralized marketplace that earned the Best of Swiss Web Award in 2021. pcaversaccio, our lead blockchain engineer, has extensive experience in developing on the Ethereum network. He is also a long-standing white-hat hacker, contributing to the security and integrity of various blockchain projects.

### Team Code GitHub Repositories

- https://github.com/pcaversaccio
- https://github.com/ooswald
- https://github.com/stephan3000

- https://github.com/blokk-studio/assembly-smart-contract
- https://github.com/blokk-studio/hardhat-project-template-ts

### Team LinkedIn Profiles (If Available)

- https://www.linkedin.com/company/blokkstudio
- https://www.linkedin.com/in/oswald/
- https://www.linkedin.com/in/r%C3%A9my-b%C3%B6hler-3565921a3/
- https://www.linkedin.com/in/stephan-klaus-a3a90b50/

## Development Roadmap

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1,5 FTE
- **Total Costs:** 12,000 USD

### Milestone 1 — Research and Requirements Engineering

- **Estimated duration:** 2 weeks
- **FTE:** 1,5
- **Costs:** 2,400 USD

| Number | Deliverable     | Specification                                                                                                             |
| -----: | --------------- | ------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License         | Apache 2.0                                                                                                                |
|    0b. | Documentation   | The designs and requirements will be documented.                                                                          |
|    0c. | Testing Guide   | Core functionality will be covered by unit tests to ensure robustness.                                                    |
|     2. | Authentication  | I will create a module for OAuth user authentication that will uniquely identify users and make faucet sybil-resistant.   |
|     3. | User status     | I will create a module for checking whether user is eligible to receive free tokens.                                      |
|     4. | Faucet drip     | I will create a module that will send user free tokens if eligible.                                                       |

### Milestone 2 — Development

- **Estimated duration:** 4 weeks
- **FTE:** 1,5
- **Costs:** 4,800 USD

| Number | Deliverable     | Specification                                                                                                            |
| -----: | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
|    0a. | License         | Apache 2.0                                                                                                               |
|    0b. | Documentation   | The architecture and the designs will be documented.                                                                     |
|    0c. | Testing Guide   | Core functionality will be covered by unit tests to ensure robustness.                                                   |
|     1. | Authentication  | There will be an authentication flow to several OAuth providers implemented.                                             |
|     2. | Game            | We will implement a browser based game, which allows the user to receive free tokens by time or level achievement.       |
|     3. | User status     | We will build an API which checks if the user is allowed to receive free tokens.                                         |
|     5. | Transfer tokens | We will a service which sends free tokens to user if achivements reached and allowed to receive.                         |

### Milestone 3 — Testing

- **Estimated duration:** 2 weeks
- **FTE:** 1,5
- **Costs:** 2,400 USD

| Number | Deliverable     | Specification                                                                                                            |
| -----: | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
|    0a. | License         | Apache 2.0                                                                                                               |
|    0b. | Documentation   | The architecture and the designs will be documented.                                                                     |
|    0c. | Testing Guide   | Core functionality will be covered by unit tests to ensure robustness.                                                   |
|     1. | Modules testing | The core modules of the api will be unit tested to guarantee functionality and robustness.                               |
|     2. | Smoke tests     | We will smoke test the application to ensure the application works as expected.                                          |
|     3. | Load test       | We will also load test the application to ensure it is secured agains overload.                                          |

### Milestone 4 — Documentation and Deployment

- **Estimated duration:** 0,5 weeks
- **FTE:** 1,5
- **Costs:** 1,200 USD

| Number | Deliverable        | Specification                                                                                                            |
| -----: | ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
|    0a. | License            | Apache 2.0                                                                                                               |
|    0b. | Documentation      | The architecture and the designs will be documented.                                                                     |
|    0c. | Testing Guide      | Core functionality will be covered by unit tests to ensure robustness.                                                   |
|     1. | Tech documentation | Architecture and implementation will be documented inline as well as in a documentation file.                            |
|     2. | Usage documentaton | There will be a documentation how to use the faucet and game.                                                            |

### Milestone 5 — Community Engagement

- **Estimated duration:** 0,5 weeks
- **FTE:** 1,5
- **Costs:** 1,200 USD

| Number | Deliverable   | Specification                                                                                                            |
| -----: | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
|    0a. | License       | Apache 2.0                                                                                                               |
|    0b. | Article            | We will publish an **article** that explains how the faucet works, why it was created, and how it can be used by anyone. |
|    0c. | Content Creation | Develop engaging content like a blog post and a tutorial how to use the faucet and its benefits. Share this content across various platforms.                                                 |


## Future Plans

- In-Game Advertising and Sponsorships: We will explore integrating non-intrusive, relevant advertisements within the game and seek sponsorships from Web3 projects to generate revenue for ongoing maintenance and development.
- Partnerships and Collaborations: We want to partner with other Web3 projects, influencers, and platforms to cross-promote the website and reach new audiences.
- The team's Long-Term Vision: Gamified Education: We plan to expand the educational component of the game by incorporating more interactive tutorials and quests that teach players about blockchain technology, cryptocurrencies, and decentralized finance (DeFi).

## Additional Information :heavy_plus_sign:

We discovered the Grants Program through X. We've developed a clickable prototype (see Figma link above) and received positive feedback from initial user testing, prepared the grant application and designed the architecture.
