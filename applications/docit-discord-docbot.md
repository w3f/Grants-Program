# docIT bot Integration for Polkadot & Kusama

- **Team Name:** DocIT
- **Payment Address:** 0x9D3A7eb80D98a5a63AAf75Cb95Fd71c56a56b363 (DAI)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

- **Tagline:** "Converse with Polkadot & Kusama Documentation"
- **Description:** We propose "docIT," a Discord bot designed to provide users with a conversational interface to access Polkadot & Kusama's documentation and repositories. Harnessing the latest Large Language Models (LLMs), docIT aims to interconnect Polkadot & Kusama's essential GitHub repositories, documentation, articles, and forums.
- **Integration:** Our bot will seamlessly integrate with the Polkadot & Kusama ecosystems, providing a bridge between users and essential technical resources.
- **Interest:** Our team recognizes the growth and active community of Polkadot & Kusama. By enhancing accessibility and user experience, we aim to further foster community growth and developer engagement.

### Project Details

- **UI Components:** The primary interface will be via Discord, with potential expansion to other chat platforms in the future. Happy to integrate with Element if needed.
- **Data Models/API:** We'll use OpenAI's GPT to interpret user queries and fetch relevant documentation sections.
- **Technology Stack:** OpenAI for language processing, Node.js for backend operations, and Discord API for bot integration.
- **Documentation:** Comprehensive documentation will cover bot interactions, command structures, and integration processes.
- **Prior Work:** Our team has previously developed chatbots for other blockchain platforms, demonstrating our expertise.
- **Limitations:** The bot will focus on documentation retrieval and won't handle transactional or wallet operations.

### Ecosystem Fit

- **Fit:** docIT serves as a bridge between the Polkadot & Kusama communities and their respective documentation.
- **Target Audience:** Developers, enthusiasts, and newcomers within the Polkadot & Kusama ecosystems.
- **Needs Met:** Streamlined access to technical resources and improved community engagement.
- **Similar Projects:** While there are bots for community management, none focus on documentation retrieval for Polkadot & Kusama.

## Team :busts_in_silhouette:

### Team members

- Nigel Alford (owner/developer)

### Contact

- **Contact Name:** Nigel Alford
- **Contact Email:** ngalford@gmail.com
- **Website:** https://docIT.cc

### Legal Structure

- **Registered Address:** N/A

### Team's experience

Our team has experience in blockchain technology, having developed tools for blockchains like Ethereum and Tezos. Notably, our Tezos-based chatbot and NFT Marketplace was widely adopted by its community. Nigel Alford has been a web developer for 10+ years.

### Team Code Repos

- https://github.com/mrnigelalford/docit-discord
- https://github.com/mrnigelalford

### Team LinkedIn Profiles 

- https://www.linkedin.com/in/nigelalford

## Development Status :open_book:

Our team has laid the groundwork for the bot, with a prototype demonstrating basic interactions. We've also conducted preliminary research into Polkadot & Kusama's documentation structures.

### Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 weeks
- **Full-Time Equivalent (FTE):** 3
- **Total Costs:** 8,000 USD

## Backend Development

### Requirements
Language: Typescript | Node.js
Database: Supabase | self-hosted docker files
Hosting location: Digital Ocean
Scaling: Increased instance sizes will be utilized. If needed, will setup shared instances across VMs to balance load.
CI/CD: Github Actions into Digital Ocean
All secrets stored in environment variables
Data Sources: Documentation, primary repo, open to pulling chat history or other sources if needed.

## UI Development
App will front to Discord Bot
Commands: Direct mention docIT with a question. DocIT will respond in a thread with response. All additional communications can exist in a threaded conversation.
Happy to create more commands or interactions if needed.

### Pre-Implementation

Before diving into the milestones, we will collaborate with the Polkadot teams. Our goal is to understand their needs deeply, pinpoint areas of concern, and determine where our bot can provide the most value. The insights from these sessions will guide our choice of data sources for the following milestones.

### Milestone 1 — Implementation of Data Sources 

- **Estimated duration:** 2 weeks
- **FTE:** 2
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Data Crawling | Extracting relevant data from the identified sources. |
| **0c.** | OpenAI Embeddings | Create embeddings using OpenAI, indexing them for efficient search on user queries. |
| **0d.** | Hallucination Mitigation | Techniques to reduce and eliminate hallucinations from bot responses. |
| **0e.** | Deployment | Make the bot production-ready and deploy it to Circle's Discord page. |

**End state:** A fully functional, production-ready bot, vetted and approved by the Customer/Community Support teams, and actively deployed on Circle's Discord page.


## Future Plans

Short-term, we plan to refine and expand the bot's capabilities based on community feedback. Long-term, we envision integrating docIT with other platforms and becoming the go-to solution for documentation retrieval in the blockchain space.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

- Our team has already built a foundational prototype.
- We have collaborated with the Tezos community on a similar initiative.
- This is our first grant application for the Web3 Foundation.