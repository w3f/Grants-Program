# BlockPublisher

- **Team Name:** Reaudito
- **Payment Details:**
  - **DOT**: 162QCGd1unek7Guieaxuoekf1oVN3RCg2fbxjwhRVMZ7H4cG
  - **Payment**: Payment in **USDC or USDT**, Polkadot AssetHub address 162QCGd1unek7Guieaxuoekf1oVN3RCg2fbxjwhRVMZ7H4cG

- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Overview
#### Decentralized Publishing of News, Journals, and Books

The advent of blockchain technology has the potential to transform the publishing industry in several ways. By leveraging decentralized networks and cryptographic techniques, blockchain-based publishing solutions can offer a more efficient, transparent, and accessible system for authors, publishers, and readers alike.

### Project Details

Key Features of Blockchain-Based Publishing:

- Decentralized Price Discovery: Blockchain-based platforms can facilitate decentralized price discovery, allowing readers to directly support authors by contributing to a community-driven funding pool. This approach ensures that authors receive fair compensation for their work, while readers have greater control over the content they consume.
- Subsidized Articles through Taxes: By implementing a token-based system, blockchain-based publishing platforms can introduce a novel approach to subsidizing articles. A small portion of the token's value can be allocated to support authors, making high-quality content more accessible to readers.
- Free Staking Coin for Enhanced Accessibility: To further promote open access and sustainability, blockchain-based publishing platforms can introduce a free staking coin. This coin can be used to purchase articles, remove paywalls, or access premium content, making it more convenient for readers to engage with published works.
- Open Access and Paywall Removal: The free staking coin can also be used to make articles open access or remove paywalls entirely. This approach can increase readership, promote knowledge sharing, and support the dissemination of high-quality research and content.

## Make the content Open Access Model

### Pasword Sharing:
Sharing passwords for encrypted files is problematic, in P2P systems. One approach is to store the hash of the password in the blockchain and use Zero Knowledge Proof.

### Secure Article Purchase:
When a buyer purchases an article, they will pay double or 1.5 times the price. The money will remain in escrow, a secure and tamper-proof storage solution, until the buyer has proven they have access to the article.

### Zero-Knowledge Proof:

To facilitate this, a zero-knowledge proof system will be used. In this system, the buyer must prove to the network that they possess the correct password, without revealing the password itself.

### Per-Article Fee and Open Access:

A per-article fee will be chosen from a list of tips provided. The money fund for the article will remain in escrow until the price discovery process is complete. If the article receives additional money from taxes, it will be released from escrow and article is made open access to the public.


## Price discovery

The price discovery process is achieved through the adaptation of the [Shivarthu protocol](https://github.com/reaudito/shivarthu/blob/main/docs/shivarthu/Shivarthu.md) or schelling game. In the new modified version, as schelling game requires more computation for large number of jurors, drawing rounds are done offchain using zero knowledge proof ([an example code.](https://github.com/reaudito/anonymous-account-crates)


### Ecosystem Fit

Build on substrate, it will become parachain in Kumama or Polkadot


## Team

### Team Members
- Amiya Ranjan Behera
- Ipsita Pradhan
- Tanushree Behera


### Contact
- Contact Name: Amiya Ranjan Behera
- Contact Email: amiyatulu@gmail.com


### Team's experience

Amiya Ranjan Behera is a full stack developer with 12 years of experience in software development.
Has experience in substrate, rust, reactjs, leptos python and also in building mobile apps in react native and tauri.

Ipsita Pradhan (Ph.D), is a GIS analyst and developer, and has two year experince in rust, substrate, polkadot, and leptos.

Tanushree Behera (B.Ed) has one and half year experinece in rust, substrate, polkadot and leptos.

### Team Code Repos

- https://github.com/orgs/reaudito/repositories

### Overview
- **Total Estimated Duration:** 1 and Half Yeards
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50% Dot

## Milestone:


Milestone 1:

- Substrate Template Development:

Develop Substrate templates for price discovery, article storage, and staking coin management.
Implement and test the Substrate templates to ensure seamless integration with the overall system.


- **Estimated duration:** 8 month
- **FTE:**  1,3
- **Costs:** 10,000 USD

Milestone 2:

- Leptos UI Development:

Design and develop a user-friendly UI for article upload, viewing, and interaction with the Substrate templates using Leptos.
Integrate the Leptos UI with the Substrate templates to enable a seamless user experience.

- **Estimated duration:** 6 month
- **FTE:**  1,3
- **Costs:** 10,000 USD

Milestone 3:

- Zero-Knowledge Proof (ZKP) Integration:

Develop a ZKP system for secure article purchasing, ensuring that buyers can prove ownership of the article without revealing the password.
Integrate the ZKP system with the Substrate templates and Leptos UI to enable secure and private article purchasing.

- **Estimated duration:** 6 month
- **FTE:**  1,3
- **Costs:** 10,000 USD
