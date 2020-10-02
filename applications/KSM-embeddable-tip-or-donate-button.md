# Open Grant Proposal

- **Project:** Tip or Donate KSM Embeddable Button
- **Proposer:** https://github.com/Shard-Labs
- **Payment Address:** bc1q5njhr3r0mgd398yvma75nv48g69c590a0f0zcx

## Project Overview

This application is in response to following RFP https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/ksm-tipping-button.md

### Overview

As proposed in the RFP we will make a standalone embedded "Tip or Donate KSM" button with customizable text by the website owner. The button's embedded code will sanitize the current URL, check if the tip for the same URL already exists and is active. If available and once clicked button will ask for permission to connect to PolkadotJS extension, offer to Propose Tip or Donate directly. If proposing a tip, it will inform the user of the funds needed to propose a tip (transaction fee and deposit), check if the user is a Council member and optionally allow him to attach a message. Only Council members are allowed to propose the amount once the tip has been created. Once the tip is proposed the button will be disabled. If donating directly it will ask for an amount and allow visitor to enter a custom note.

Considering the request for this implementation not slowing down the websites and several performance test from different sources exhibiting Svelte as the optimal choice performance-wise we are strongly considering using Svelte as a development framework. Before committing to that decision we will conduct the performance tests ourselves and decide if it is the optimal solution. We will be using polkadot.js API.

Mockups:

![Connect to Polkadot](https://i.imgur.com/ige90GF.png)

![Select a wallet](https://i.imgur.com/pQ1yaAE.png)

![Propose a tip/Donate](https://i.imgur.com/6TJircc.png)

## Team

### Team members

- Darko Macesic
- Ana Milic-Strkalj

### Team Website

- https://shardlabs.io

### Legal Structure

SHARD LABS d.o.o., Kroz Smrdečac 19 Split, Croatia

### Team's experience

We have experience in several private and open source projects. Most notable and relatable to the proposal:

- Ink! Remix plugin https://github.com/Shard-Labs/ink-remix-plugin
- Zokrates https://github.com/Zokrates/ZoKrates https://github.com/Shard-Labs/zokrates-remix-plugin
- Sourcify https://github.com/ethereum/sourcify

### Team Code Repos

- https://github.com/Shard-Labs
- https://github.com/dark64
- https://github.com/anamst

### Team LinkedIn Profiles

- https://www.linkedin.com/in/darko-macesic/
- https://www.linkedin.com/in/ana-mili%C4%87-%C5%A1trkalj-473b28192/

## Development Roadmap

### Overview

- **Total Estimated Duration:** 2 months
- **Full-time equivalent (FTE):** 2 weeks
- **Total Costs:** 1 BTC

### Milestone 1

- **Estimated Duration:** 3 weeks
- **Costs:** 0.25 BTC

| Number | Deliverable                        | Specification                                                                                                                                                                              |
| ------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|        |
| 1.     | Embedded code                      | Removing the UTM, hashes, converting URL to bytes, checking if a tip for the same URL already exists and is active, if not the button is available.                                        |
| 2.     | Connecting to PolkadotJS extension | If none is present, offer to install it. If allowed, a popup asking to select an account. If denied, cancel all. Offer two options: propose tip or donate directly (text is customizable). |

### Milestone 2

- **Estimated Duration:** 1 month + 1 week
- **Costs:** 0.5 BTC

| Number | Deliverable     | Specification                                                                                                                                                                                                                                                                                                                                                                                 |
| ------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|        |
| 1.     | Propose tip     | Inform user of the funds needed for tip proposal (deposit and transaction fee). If user is a Council member ask for the amount and create a new Tip. If user is not a Council member create a new Tip entry without specifying the amount (only Council members are allowed to do so). Allow user to attach a message. Disable button and link to tips page in treasury after Tip is created. |
| 2.     | Donate directly | Ask the user for amount to donate and allow him to enter a custom note.                                                                                                                                                                                                                                                                                                                       |
| 3.     | Testing         | We will conduct testing of the developed functionalities on Westend testnet.                                                                                                                                                                                                                                                                                                                  |  |

## Additional Information

- Are there are any teams who have already contributed (financially) to the project? No.
- Have you applied for other grants so far? We have received funding and completed Ink! Remix plugin.
