# Horizon Finance

<br />

- **Team Name:** Quezar Labs
- **Payment Address:** 12uAV9D6TJBjeFFDJJyAD8Rzkdu7JhsSgdufcXctnkYdvBKU (USDC)
- **Level:** 2

<br />

## Project Overview 📄

<br />

### Overview

<br />

Horizon Finance aims to make XCM transfers more user friendly for DotSama users.  We want to make the experience of doing XCM transfers as smooth as swapping tokens on Uniswap.

We will do this by building a good user experience for all things surrounding an XCM transfer like wallet selection, network/parachain selection, amount inputs etc. This is covered more in-depth under the project details section. 

<br />

**Why is it needed?** 

Dotsama ecosystem has low level tools for XCM transfers, but there isn't a single interface with good UI/UX for users to perform XCM transfers. XCM transfers are the backbone of the dotsama ecosystem. A lot of development has been done recently to facilitate these transfers easily at infra level. Hence many low level tools like the xcm pallet & the asset transfer API have been deployed. However, these tools aren’t being utilised to give a good user experience to the dotsama users when it comes to making XCM transfers. 

<br />

**Why do we want to build it?** 

We are interested because we see an opportunity for a genuine value addition to the overall ecosystem. 

Here’s a snapshot containing rough approximation on the volume of value transfer taking place via the [194 active XCM channels](https://polkadot.subscan.io/xcm_dashboard). The total number of XCM transfers done till date is nearing 500k at the time of writing this proposal. 

These are the numbers for a nascent technology in an emerging blockchain ecosystem. With more improvements in the XCM pallet, more parachains supporting XCM transfers and an increase in overall adoption of Polkadot network, these numbers would go up exponentially. 

And so will the inconvenience. A good user experience would make the process less cumbersome for these users. And it will also help less experienced users, who aren’t able to make use of XCM transfers yet.

<img width="1440" alt="dolpha stats" src="https://github.com/QuezarHQ/Grants-Program/assets/24296199/4468c19d-3c64-4754-9781-76b14d220ed2">

<br />

### Project Details

<br />

The product will be designed keeping in the mind the issues a DotSama user faces when making a XCM transfer.

<br />

**Key features:**

- **Multi-wallet support**
    - the user can select amongst various wallets available in the dotsama ecosystem.
- **Relay chain selection**
    - the user can select between the relay chains ie Polkadot or Kusama networks
- **Parachain selection**
    - the user can select a destination parachain from a list of all available options on the selected relay network
- **Asset selection**
    - the user can select an asset to transfer from a list of available assets in their wallet
- **Destination address**
    - the user can enter the destination parachain address in a user friendly way.
    - They can use both, an address specific to the destination address or a base network address which would then be automatically converted into the appropriate destination chain address based on the selected destination parachain
- **Amount**
     - the user can enter the amount of asset to be transferred in a user friendly way.
     - This would be considering the representation of the selected asset both in their lower & higher denominations based on the selection asset.
     - For eg 1 dot = 10^10 planks, but 1 KSM = 10^12 planks. Similarly, 1 PEN = 10^18 planks.
     - This UI component will be designed  by taking all of these nuances into account.

<br />

**Additional features:**

- **Intimate the user of things that will lead to a failed transaction**
    - Like low amount of asset being transferred, XCM channel not available for the transaction to go through or low balance for gas fee to be paid
    - Help users with information on the XCM channels that are active, & the XCM channels which are yet to become active
- **Show a summary of the entire transaction before the user initiates it**
    - Including details like source chain & address, destination chain & address, asset to be transferred, the amount that will be transferred from source & the amount that will be deposited at the destination, expected gas fee for the transaction
- **Show a list of XCM transfers done by the user via the platform**
    - Each transaction will contain all of the details associated with an XCM transfer (as detailed above) along with the transaction status, success or failure (along with the reason for failing)
    - The user can check the status and other details of an XCM transfer they initiated recently, along with any other XCM transfer they did from within the platform earlier.

<br />

**Tech stack (tentative)**

- For UI implementation ⇒ React framework (NextJS)
- For backend server implementation ⇒ Rust & SQLite
- For interfacing with dotsama elements ⇒ Asset transfer API, XCM pallet, talisman connect and other relevant dotsama tooling as needed.

<br />

**High level architecture overview**

<img width="1011" alt="horizonfinance architecture" src="https://github.com/QuezarHQ/Grants-Program/assets/24296199/ee344062-8aa5-4db5-ab2a-2b0292a1c344">

<br />
<br />

**What we won’t provide**

On a longer timeframe, we want Horizon finance to be a self-sustaining project and not be dependent on Web3 foundation or Polkadot Treasury for funding it’s continuous improvement & maintenance. Since it’s not a protocol that’ll have network effects & the product research, design & execution will be our only MOAT, and therefore we intend on keeping it closed source for now. 

We are open to suggestions & feedback from the community on this aspect of the proposal.

<br />

### Ecosystem Fit

Horizon finance is a UI layer for XCM transfers, built on top of the existing low level tools like asset transfer API & XCM pallet already available in the ecosystem.

The aim is to give users a refined user experience for making cross chain transfers that is on par with what is available in other ecosystems in the form of products like Bungee Exchange, Wormhole Portal,  Leap Wallet (Bridge interface), Squid Router etc. 

Our target audience is the entire dotsama community like core team, developers, general users, dapps etc. As we have already mentioned the stats above, we think that the total volume of these transactions would only increase exponentially as the entire dotsama ecosystem moves towards mainstream adoption. 

There are some similar projects in the ecosystem, but their primary focus isn’t on XCM transfers. Since these products aren’t specifically designed keeping in the mind the challenges that a user faces while making an XCM transfer, they give a very poor experience besides giving limited options. 

Talisman, Subwallet & Nova have a UI to make XCM transfers but:

- The availability of existing channels & assets is fragmented.
- Each of these support different kinds of XCM channels & assets.
- Each of these has their own UI, and hence has it’s own learning curve.
- This adds a lot of overhead as the user would need to maintain multiple wallets as per the availability of the XCM channels & asset support associated with a particular wallet.

Horizon finance would be one stop platform for all active XCM channels and all possible assets. 

We not only intend to solve the current challenges associated with utilising the lower level tools associated with making cross chain transfers within the dostsama ecosystem, but we also intend to keep identifying such gaps and solve for them as these lower level tools gets better over time. 

<br />

## Team 👥

<br />

### Team members

- Saumay Agrawal (Tech lead)
- Prayag Desale (Product Manager)
- 1 designer (yet to onboard)
- 1 full-stack developer (yet to onboard)

<br />

### Contact

- **Contact Name:** Saumay Agrawal
- **Contact Email:** hi@quezar.xyz
- **Website:** https://quezar.xyz/

<br />

### Legal Structure

- **Registered Address:** 143 CECIL STREET, #19-04A GB BUILDING, SINGAPORE (069542)
- **Registered Legal Entity:** Quezar Labs PTE LTD.

<br />

### Team's experience

- Saumay Agrawal
    - 7+ years of experience in software R&D across various startups & research labs.
    - 4+ years of experience in building products/services/tooling for various web3 orgs like Solana, Livepeer, Filecoin, Celo, ICP & Mina.
    - Previously led tokenomics design for a gamefi venture on Solana
- Prayag Desale
    - 3+ years experience in web3 space as a Product Manager
    - 6+ years experience in general software development and SaaS space
    - DeFi degen by nature, active across Polkadot, Ethereum, Cosmos, Solana and other L2s

No one has applied for a web3 grant before from our team. 

<br />

### Team Code Repos

- Saumay Agrawal - https://github.com/Saumay-Agrawal
- Prayag Desale - https://github.com/prayagd

<br />

### Team LinkedIn Profiles (if available)

- Saumay Agrawal - https://www.linkedin.com/in/saumayagrawal/
- Prayag Desale - https://www.linkedin.com/in/prayag-desale-8092339a/

<br />

## Development Status 📖

Currently in prototype stage. 

A prototype is already live @ [horizonfinance.xyz](http://horizonfinance.xyz) 

It allows the user to make a raw XCM transfer. Here’s a short demo - https://www.loom.com/share/acfc37931d3c4bcc9a2187005ae3250d?sid=198cbe5c-1e73-4d89-a14a-ea08f73f5732

<br />

## Development Roadmap 🔩

<br />

### Overview

- **Total Estimated Duration:** 3.5 months
- **Full-Time Equivalent (FTE):** 3 (1 Product lead, 1 Tech lead, 0.5 Designer, 0.5 Full-stack developer)
- **Total Costs:** 30,000 USD

<br />

### Milestone 1 — Refined XCM transfer functionality with bare bones UI

- **Estimated duration:** 2 months
- **FTE:** 3
- **Costs:** 20,000 USD

This milestone aims at:

- Research & Development for refining the XCM transfer user flow in current UI
- Design of high-fidelity mockups

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide a demo video demonstrating the usage of UI, and walkthrough of progress made during this milestone.  |
| 1. | Research | Curate a list of possible asset transfers by researching on the list of active XCM channels & available assets. Also curate a list of intricacies associated with each parachain (like difference in addressing methodologies) & each asset (like different decimal denominations) |
| 2. | Refine the XCM transfer user flow in current UI | Integrate talisman-connect for multi-wallet support. Add ability to switch between Polkadot & Kusama relay chains. Add dropdowns for selecting destination chain & assets based on available options. Provide a much more user friendly way to enter amount of tokens to be transferred based on the selected destination chain & asset. Give an indication of estimated gas fee & time for transaction confirmation. Avoid transaction failure by validating the data input by user against various heuristics |
| 3. | High fidelity design mockups | Create a design system that is on par with the modern UI design practises |

<br />

### Milestone 2 Example — Full product goes live & beta testing

- **Estimated duration:** 1.5 months
- **FTE:** 3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Unlicense |
| 0b. | Documentation | We will provide relevant tutorial guides & demo videos about how to use the application |
| 0e. | Article | We will publish an article detailing the work done under this grant.  |
| 1. | Enhanced UI | Implementing the design system created in previous milestone |
| 2. | Transaction history | Add functionality to view a list of XCM transfers done previously along with relevant metadata |
| 3. | Testing | Test the application internally as well as with the members of dotsama ecosystem. Onboard community members, take their feedback & suggestions. Implement bug fixes & minor updates accordingly |

<br />

## Future Plans

If the product finds some traction, we have plans of including some kind monetisation model to finance the long-term efforts needed for maintaining & improving the product. 

In terms of core product features, we plan on including some additional convenience features like a Horizon Finance UI plugin for other dapps, so that they can include this functionality within their dapps. We also plan on aggregating bridges to other ecosystem directly within our UI. 

Beyond the above, we also plan on rolling out an Android & iOS version of the product as well for the mobile users. 

<br />

## Referral Program (optional) 💰

NA

<br />

## Additional Information ➕

Prayag has been working with Pendulum as Product Manager for a while now. He has been a DotSama user himself and understands the pain of doing XCM transactions. He’s also aware of the available solutions and their fallbacks. So the overall understanding of the dotsama ecosystem & issues around making XCM transfers he’d be bringing to the product design process, would be really very practical.
