# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Widelens
- **Payment Address:** 0xf8DC054d3c112913f4a14e83279228988d9DA053 ETH
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ _The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe._

## Project Overview :page_facing_up:

### Overview

Please provide the following:

Widelens is a space where the community can educate, explore, and connect with each other. Striving to be the facebook of Web3.

A decentralized application where users can monitor NFT transactions of ETH Addresses they follow (Contracts and Wallets) which will simulate twitter feed type timeline of all the addresses they are following. Users will be able to explore upcoming/past NFT collections and educate themselves about them based on their transaction's stats and collection profile. In addition, widelens offers a portfolio manager for users with accounts.

## An indication of why your team is interested in creating this project.

We believe widelens is the bridge that connects people who aren't Web3 savvy to Web3 world by introducing a UI/UX experience simliar to the applications that they use daily.

### Project Details

![img](https://raw.githubusercontent.com/josephriosIO/widelens-images/main/homepage.png)
![img](https://raw.githubusercontent.com/josephriosIO/widelens-images/main/top-collections.png)
![img](https://raw.githubusercontent.com/josephriosIO/widelens-images/main/explore.png)
![img](https://raw.githubusercontent.com/josephriosIO/widelens-images/main/collections.png)
![img](https://raw.githubusercontent.com/josephriosIO/widelens-images/main/profile-sidebar.png)
![img](https://raw.githubusercontent.com/josephriosIO/widelens-images/main/users-profile.png)
![img](https://raw.githubusercontent.com/josephriosIO/widelens-images/main/users-transactions.png)
![img](https://raw.githubusercontent.com/josephriosIO/widelens-images/main/users-collections.png)
![img](https://raw.githubusercontent.com/josephriosIO/widelens-images/main/mobile-view.png)

#### Frontend

- Svelte/Sveltekit/Typescript
- TailwindCSS

#### Backend

- NodeJS/Typescript
- Express
- MongoDB
- EtherScan API
- Alchemy API

- What your project is _not_ or will _not_ provide or implement
  Widelens is not a marketplace and will not provide a place to sell or buy NFTs but allow users to sell via Openseas/Looksrares API

## Team :busts_in_silhouette:

### Team members

- Joseph Rios = Co Founder/ Engineer
- Nico Herrera = Co Founder/ Engineer

### Contact

- **Contact Name:** Joseph Rios
- **Contact Email:** j@widelens.io
- **Website:** (Production link) https://widelens.io

### Legal Structure

N/A

### Team Code Repos

Private Repo
https://widelens.io

- https://github.com/josephriosIO
- https://github.com/nico-herrera

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/josephriosdev
- https://www.linkedin.com/nicoherreradev

## Development Status :open_book:

Currently in development

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 Months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 50,000 USDC

### Milestone 1 — Basic UI Skeleton

- **Estimated duration:** 2 Weeks
- **FTE:** 2
- **Costs:** 10,000 USDC

0b.	Documentation	We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.
0c.	Testing Guide	Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.

| Number | Deliverable          | Specification                                                     |
| -----: | -------------------- | ----------------------------------------------------------------- |
|    0a. | License              | Apache 2.0                                                        |
|    0b. | Documentation        | Document all APIs created and how to setup development servers.   |
|    0c. | Testing              | Add Jest testing on frontend with storybooks and Jest testing on backend |
|    0d. | Docker               | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.   |
|    0b. | Article              | Publish article about widelens and how it will benefit the polkadot community   |
|     1. | Frontend Svelte Repo | Start skeleton of the UI                                          |
|     2. | Backend Repo         | Create the structure on how the backend routes will be structured |
|     3. | Production Build     | Be able to see a production version of widelens                   |

### Milestone 2 — Business logic

- **Estimated duration:** 2 Month
- **FTE:** 2
- **Costs:** 30,000 USDC

| Number | Deliverable                  | Specification                                                                                                                                                                                                                           |
| -----: | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     1. | Creating all frontend routes | develop the UI for the homepage, explore page, profiles, etc.                                                                                                                                                                           |
|     2. | Create all consumable APIs   | Use APIs such as etherscan and NFT transactions to get data of each address, create a DB for users using metamask as the login, create helper functions to help frontend take the load off the client, the first chain will be added polkadot |
|     3. | Production                   | Registering domain, setting up frontend server (vercel) and backend server (digitalocean)                                                                                                                                               |

### Milestone 3 — Polishing

- **Estimated duration:** 2 weeks
- **FTE:** 2
- **Costs:** 10,000 USDC

| Number | Deliverable  | Specification                                    |
| -----: | ------------ | ------------------------------------------------ |
|     1. | QA           | Bug sweeps from the UI to API issues             |
|     2. | UI Polishing | Polish UI/UX to ensure excellent user experience |

## Future Plans

- More customizable portfolio manager
- More Social media aspects (commenting, PMs, etc)

## Additional Information :heavy_plus_sign:

We have finished Milestone 1 and are in 50% through milestone 2.
