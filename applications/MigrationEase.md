- **Team Name:** Zondax AG
- **Payment Address:**   DOT/AssetHub address 1fN87Fgj5BUhezFgbLiGbXTMrBVggnmYBX9anzMBky8KaJ5
- **[Level]**: 3

## Project Overview :page_facing_up:

The recent release of the new  [Ledger Application for Polkadot](https://zondax.ch/blog/all-in-one-polkadot-app-is-here-2) delivers significant advantages by consolidating multiple substrate-based chains into a unified, secure Ledger application. This marks a major improvement for users managing assets across the Polkadot ecosystem.

However, migrating funds from older Ledger-based accounts to this new application remains challenging for many users. The issue is not with the Ledger app itself, but with the lack of a user interface that could guide them through the migration process. 

The migration process is today still largely manual. This complexity creates barriers for users who want to adopt the new Polkadot Universal app but struggle with the current migration workflow.

This project aims to simplify the migration process, making it more accessible to the broader Polkadot community.

The application will allow users to connect their Ledger devices and guide them step-by-step through the migration process. The application will indicate which accounts or apps can be migrated immediately, and which ones may not yet be eligible for migration, offering transparency and reducing confusion.

### Overview

The primary goal of this project is to create an intuitive, user-friendly interface that simplifies the migration process for Polkadot and Parachain Ledger users. 

This web application will allow connecting  Ledger devices, automatically display accounts eligible for migration, and assist users through the migration process in a secure and clear manner. 

### Project Details
#### Technology and Languages

Frontend
Next.js
MUI
Typescript
Ledger Integration Libraries

Backend
Integrating indexing infrastructure / APIs 

### Ecosystem Fit

Zondax is a growing and distributed team with experience and projects for more than 50 blockchains. Zondax has been contributing to the Substrate ecosystem since 2018-2019. The team has received and completed a large number of W3F grants and currently maintains most Ledger apps for the ecosystem.

## Team :busts_in_silhouette:

### Team members

- 1 x Fullstack Engineer 
- 1 x Frontend Engineer
- 0.5 x Project Manager
- 0.2 x DevOps Support

### Contact

- **Contact Name:** Juan Leni and Ainhoa Aldave
- **Contact Email:** juan.leni@zondax.ch / ainhoa.aldave@zondax.ch
- **Website:**  zondax.ch

### Legal Structure

Legal structure
Zondax AG
Dammstrasse 16
Zug 6300
Switzerland
UID CHE-491.796.576

### Team's experience

Over the last few years, Zondax has been involved in a large number of projects for most of the key players in the blockchain industry. Our team includes experts in most blockchain aspects, from cryptography to data and protocol engineering. 
### Team Code Repos

Most of our contributions to the blockchain ecosystem can be found in our GitHub organization [zondax](https://github.com/zondax)


## Development Status :open_book:

Not initiated. 

## Development Roadmap :nut_and_bolt:

## Technical Scope:


### Milestone 1  Initial UI & Basic Functionality

In this milestone, we will deliver a minimal user interface (UI) that allows users to connect to a Ledger hardware device and interact with their accounts with the objective to facilitate the Migration process from old accounts to the new Polkadot generic app.  

The core features include:
- **Connect to Ledger Hardware Device**: Users will be able to securely connect their hardware wallets when using the polkadot generic and migration apps previously developed by Zondax.
- **Scan and View Accounts**: The app will scan the connected devices and display all relevant accounts, allowing users to view their account balances.
- **Balance Overview**: Users can easily check the balance of their accounts, including unstaked/available funds.
- **Transfer and Account Management**: For accounts that are not locked (e.g., due to staking or other restrictions), users will be able to transfer accounts and send funds. This will include the transfer of NFTs. 

### Milestone 2  Advanced Flows and Improvements

In this milestone, we will extend the functionality of the application by introducing advanced account management and support for additional flows. Key deliverables include:

- **Facilitated Staking/Unstaking**: The application will facilitate the staking and unstaking process, providing users with a simplified flow to stake or unstake their assets and informing them about at what stage they’re able to initiate the account migration process. Additionally, the app will streamline workflows for handling common asset locks associated with voting and delegations. It will also support a visual guide for handling other common locks tied to standard pallets, assisting users through a manual unlock process when needed. 
- **Kusama, AssetHub and 5 Parachain Support**: The app will support interactions with up to 5 parachains, this will be done as a reference, extensibility is described in the following point.
- **People chain support**: the application will facilitate specific actions on the People chain, such as removing identity and transfer of unreserved funds. 
- **Simplified Management of proxies, multisig and decision deposits**: the application will include workflows for managing proxies, multisig accounts and decision deposit reserves, making these processes more user-friendly.
- **Configuration and Documentation**: We will provide a standardized configuration and documentation so compatible parachains can provide parameters, logo and other information to contribute to the current application.
- **Enhanced User Experience**: Optimized flows and improved waiting time display for transactions, specifically when dealing with Kusama’s AssetHub and parachains.

### Milestone3  Maintenance and improvements 

Ongoing maintenance and operation of the application for a period of 12 months. 
We will cover all costs for the operation of the website, we can provide monitoring information similar to checkly.

Modifications and updates to ensure optimal performance and address any issues
Includes maintenance of the Migration Ledger App without the addition of new features.
Continue support for features that are moved from the relay chain to Asset Hub: staking, OpenGov, balances.  

It does not include technical support for parachains teams. 

### Overview

- **Total estimated workload:** 2 months
- **Delivery time:**: 3 months 
- **Full-Time Equivalent (FTE):**  2.7 FTE
- **Total Costs:** 87'000 USDT
- **DOT %:** Percentage of Total Costs to be paid in (vested) DOT = 50%

### Milestone 1  Initial UI & Basic Functionality

- **Estimated workload:** 1 month 
- **Delivery time:**: 1.5 months 
- **FTE:**  2,7
- **Costs:** 37'500 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT |
| **0b.** | Documentation | We will provide a inline documentation of the code and   inline documentation of the code and a basic tutorial |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article/Tutorial |Initial article/tutorial explaining the project and how to use the web application |
| 1. | PoC code| General structure |
| 2a. | Code| Connect to Ledger Hardware Device |
| 2b. | Code| Scan and View Accounts  |
| 2c. | Code| Balance Overview |
| 2d. | Code| Transfer and Account Management |

### Milestone 2  Advanced Flows and Improvements

- **Estimated workload:** 1 month 
- **Delivery time:**: 1.5 months 
- **FTE:**  2,7
- **Costs:** 37'500 USDT

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT |
| **0b.** | Documentation | We will provide a inline documentation of the code and   inline documentation of the code and a basic tutorial |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article/Tutorial | We will publish the final article/tutorial explaining the project and how to use the web application |
| 1. | PoC code| General structure |
| 2a. | Code| Facilitated Staking/Unstaking |
| 2b. | Code| Kusama AssetHub and 5 Parachain Support  |
| 2c. | Code| Simplified Management of proxies, multisig and decision deposits  |
| 2d. | Code| Standardized configuration and documentation |
| 2e. | Code| Enhanced User Experience |

### Milestone3  Maintenance and improvements 

- **Estimated workload:** 1 month 
- **Delivery time:**: 12 months 
- **FTE:**  0,3 
- **Costs:** 12'000/ USDT - We request a payment of $3k per quarter.

Maintenance and operation for 12 months

## Future Plans

Depending on the traffic and feedback from the community, we may extend functionality beyond this current contract.

## Additional Information :heavy_plus_sign:

Zondax has been contributing to the Polkadot ecosystem for several years, and has successfully completed several grants. 
