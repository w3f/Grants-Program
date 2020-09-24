# Open Grant Proposal

- **Project:** Tip or Donate KSM Embeddable Button
- **Proposer:** https://github.com/Shard-Labs
- **Payment Address:** bc1q5njhr3r0mgd398yvma75nv48g69c590a0f0zcx

## Project Overview

This application is in response to following RFP https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/ksm-tipping-button.md

### Overview

As proposed in the RFP we will make a standalone embedded "Tip or Donate KSM" button with customizable text by the website owner. The button's embedded code will sanitize the current URL, check if the a tip for the same URL already exist and is active. If avaliable and once clicked button will ask for permission to connect to PolkadotJS extension, offer to Propose Tip or Donate directly. If proposing tip it will inform the user of the funds needed to propose tip (transaction fee and deposit), check if the user is Council member and optionally allow him to attach a message. Once the tip is proposed the button will be disabled. If donating directly it will ask for amount and allow visitor to enter a custom note.

We will be using React.js and polkadot.js API.

Mockups:

![https://ipfs.io/ipfs/QmTgEHfyX7qJBNTvu5QYqeLsSVqPpkKTvY8e3Ea92eWRij?filename=Screenshot%202020-09-24%20at%2019.35.14.png](https://ipfs.io/ipfs/QmTgEHfyX7qJBNTvu5QYqeLsSVqPpkKTvY8e3Ea92eWRij?filename=Screenshot%202020-09-24%20at%2019.35.14.png)

![https://ipfs.io/ipfs/QmSXkWFnjVHSHDQ4sLdBXV3Q5fpncRCTwP2T97H6roTowq?filename=Screenshot%202020-09-24%20at%2019.36.12.png](https://ipfs.io/ipfs/QmSXkWFnjVHSHDQ4sLdBXV3Q5fpncRCTwP2T97H6roTowq?filename=Screenshot%202020-09-24%20at%2019.36.12.png)

![https://ipfs.io/ipfs/QmWR6SSer8y4MXDqsxXSkhdg9L6HCh628Kq46FSaQP26E3?filename=Screenshot%202020-09-24%20at%2019.36.24.png](https://ipfs.io/ipfs/QmWR6SSer8y4MXDqsxXSkhdg9L6HCh628Kq46FSaQP26E3?filename=Screenshot%202020-09-24%20at%2019.36.24.png)

## Team

### Team members

- Darko Macesic
- Ana Milic-Strkalj

### Team Website

- https://shardlabs.io

### Legal Structure

SHARD LABS d.o.o., Kroz Smrdečac 19 Split, Republic of Croatia

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
- **Full-time equivalent (FTE):** 2 month
- **Total Costs:** 1 BTC

### Milestone 1 — Design

- **Estimated Duration:** 1 week
- **Costs:** 0.25 BTC

| Number | Deliverable | Specification                                                                                                                                                               |
| ------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.     | Design      | Design for the embedded button and the functionalities; connecting to Polkadot/installing the extension, selecting the wallet, proposing/donating tip, final system remark. |

### Milestone 2 — Development

- **Estimated Duration:** 1 month
- **Costs:** 0.5 BTC

| Number | Deliverable                        | Specification                                                                                                                                                                                                                                                     |
| ------ | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.     | Embedded code                      | Removing the UTM, hashes, converting URL to bytes, checking if a tip for the same URL already exist and is active, if not the button is available.                                                                                                                |
| 2.     | Connecting to PolkadotJS extension | If none is present offer to install it. If allowed, a popup asking to select an account. If denied cancell all. Offer two options: propose tip or donate directly (text is customizable).                                                                         |
| 3.     | Propose tip                        | Inform user of the funds needed. If user is a Council member ask for amount and create a new Tip. If user is not a Council member create a new Tip entry. Allow user to attach a message. Disable button and link to tips page in treasurty after Tip is created. |
| 4.     | Donate directly                    | Ask user for amount to donate and allow him to enter a custom note.                                                                                                                                                                                               |

### Milestone 3 — User Testing

- **Estimated Duration:** 1 month
- **Costs:** 0.25 BTC

| Number | Deliverable  | Specification                                                             |
| ------ | ------------ | ------------------------------------------------------------------------- |
| 1.     | User testing | We will conduct a thorough user testing of the developed functionalities. |

## Additional Information

- Are there are any teams who have already contributed (financially) to the project? No.
- Have you applied for other grants so far? We have recieved funding and completed Ink! Remix plugin.
