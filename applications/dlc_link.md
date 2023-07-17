# DLC.Link

- **Team Name:** DLC-Link, Inc.
- **Payment Address:** Eth: 0x82DC89AB1798418a38A17Fe7a619d90b76D4cD8a (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

Although Bitcoin is the largest digital asset, it does not support smart contracts. Today, it’s not possible to take a loan on Bitcoin without first transferring it to a custodian or a bridge. Custodian failures and bridge hacks, however, have led to over $140Bn in losses to date.

DLC.link implements an MIT invention (Discreet Log Contracts) that makes it easy for app developers to integrate native Bitcoin. Our platform locks Bitcoin into an on-chain escrow, from where it can be controlled by Ethereum and other smart contract chains. This “trustless bridge” enables lending, trading, derivatives and more.

DLCs were invented at MIT by Tadge Dryja, the co-creator of the Lightning network but only became feasible with Bitcoin's Taproot upgrade in Nov 2021. However, the DLC specification has been extremely hard to implement and as such has not seen widespread adoption. It is simply too difficult for protocols to implement it without a platform in place.

Our platform implements:
* A simple wallet integration library, so popular third-party Bitcoin wallets can sign DLC transactions.
* Smart contract libraries on various platforms. These give smart contract developers a simple fast way to support native Bitcoin from within their web3 decentralized applications. For Substrate, we intend to implement a pallet.
* An Attestor application which can easily be run by third-party service providers to add security and resilience to the system.
* Developer tooling such as a Health Monitor system, backcheckers and integrated private key vaults.

By integrating with the Substrate framework, our infrastructure would be able to utilize the shared security and interoperability of the Polkadot and Kusama networks. This would enable us to serve developers building on Polkadot to create applications that move native Bitcoin.

Our team is deeply interested in this project as we see the potential for DLCs to revolutionalize cross-chain communication. Our aim is to increase the accessibility and adoption of DLCs, thereby giving Bitcoiners more ways to utilize their assets and bringing Bitcoin liquidity to other chains.

### Project Details

Core components of the platform are as follows:

#### Blockchain DLC Listeners
Listeners monitor smart contracts on blockchains, primarily focusing on "dlc-manager" contracts. They run on Heroku as node applications, and require secure key management due to their ability to write to the blockchain and send commands to the Attestors.

#### Backchecker
Backchecker is an application for querying past blockchain events and identifying any missed by the Listeners. It runs as a node application on Heroku and currently doesn't require private key management due to its read-only capability.

#### The Attestor Layer
The Attestor network announces new DLC events and attests outcomes based on smart contract data from other blockchains. Attestors require careful private key management and the network design minimizes collusion risks through multi-Attestor signing and random Attestor selection.

#### Cloud Storage System for CETs
This system holds Contract Execution Transactions (CETs) awaiting an attestor signature. It's a simple CRUD application with a Postgres database, running in Amazon's container system, and does not require private key management.

#### Health Monitor
The Health Monitor checks the operational state of each service and alerts the engineering team of any issues. It runs in Heroku and holds a Discord token for alert dispatch.

<img src="https://uploads-ssl.webflow.com/64087094e6561d4eb2f8a8ef/6490267e63a93ea201a187fb_DLC.Link_TechnicalFlow.png" alt="DLC.Link Technical Flow" width="65%">

### DlcManager Contract Main Functions
Functions implemented are as follows:

#### `createDLC`
- Called by a compatible protocol contract
- A random UUID is generated for the DLC
- A `CreateDLC` event is emitted, which is picked up by the Listeners

#### `postCreateDLC`
- Called by the Listeners after successful Announcement creation on the Attestors
- This function calls back into the ProtocolContract to finalize the creation flow
- `PostCreateDLC` is emitted for the Listeners to hear

#### `setStatusFunded`
- Called by the Listeners after BTC has been successfully locked in the DLC on the Bitcoin blockchain
- Also has a callback into the protocol contract
- `SetStatusFunded` event is emitted

#### `mintBtcNft`
- Requests the minting of a BtcNft, which represents a DLC on Ethereum

#### `postMintBtcNft`
- Similarly to the create- post-create flow, this provides a callback after successful minting

#### `closeDLC`
- Starts the closing flow, it expects an outcome to be supplied: a value between 0-10000 (representing 0 - 100.00) with two decimals precision
- This outcome is sent to the Attestor Layer to sign off on the Attestation

#### `postCloseDLC`
- Listener calls it, provides a callback after successful attestation

#### `getBTCPriceWithCallback`
- This function will get the latest BTC price from a Chainlink Pricefeed. This can be used for additional logic before/during a DLC closing flow: see our example contracts for potential use-cases.

#### `getAttestors`
- This function provides the connection between the DlcManager and the AttestorManager contract. It returns a certain, user-defined number of Attestor node’s information from the other contract. These will be used during the creation of the DLC.

## PoC/MVP with Arcade.xyz

To see a video example of our alpha in action, [see this video](https://twitter.com/DLC_Link/status/1655314173834715137?s=20).


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

#### Where and how does your project fit into the ecosystem?
Our project enables any parachains or applications that have integrated our pallet to accept native Bitcoin deposits, and to control the movement of Bitcoin via smart contract logic. Integration increases TVL by enabling applications such as stablecoin loans against Bitcoin, trading Bitcoin and ordinals/BRC-20s, and accepting Bitcoin deposits for investment and insurance pools. Due to the tremendous market cap of Bitcoin (over $500Bn currently), the TVL gain could be huge for protocols and chains that take advantage of this feature.

#### Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
Our target audience includes parachain developers, dApp developers, wallet developers, entrepreneurs and anyone seeking Bitcoin deposits for their applications. We aim to provide essential tooling components and implementation solutions to ensure safe and positive integration experiences.

#### What need(s) does your project meet?
We introduce the ability to enable native Bitcoin deposits and facilitate the movement of native Bitcoin within the ecosystem. This can be used by protocols directly, or can be integrated into on a parachain level. For example, Moonbeam is interested in integrating DLC.link to help attract Centrifuge to support their parachain. By integrating DLC.Link into Moonbeam, they could offer Centrifuge native Bitcoin deposits.

#### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem? If so, how is your project different?
Our project can also complement existing solutions like Interlay's Bitcoin bridge. Interlay provides a bridge that enables users to swap, lend, and borrow against Bitcoin on Polkadot. However, their architecture requires a separate validator network, whereas DLCs are secured by the full power of the Bitcoin network. By integrating DLCs into their infrastructure, Interlay could attain security benefits and could extend their services to perform operations directly on native Bitcoin. 

However, our project could also be considered competitive with Interlay as well. By integrating into protocols, we provide alternative ways to earn yield on Bitcoin without relying on the Interlay bridge. In either case, we seek to expand the range of options available for Bitcoin holders to benefit from DeFi on Substrate & Polkadot.

## Team :busts_in_silhouette:

### Team members

- Aki Balogh, CEO
- Jesse Eisenberg, CTO
- Developers: Robert Tera, Daniel Puskas, Rok Rupnik

### Contact

- **Contact Name:** Aki Balogh
- **Contact Email:** aki@dlc.link
- **Website:** [DLC.Link website](https://www.dlc.link/)

### Legal Structure

- **Registered Address:** 24 Dartmouth St, North Andover MA 01845
- **Registered Legal Entity:** DLC-Link, Inc.

### Team's experience

Please describe the team's relevant experience:

* Aki is a VC-turned-entrepreneur who previously built a company achieving over $5Mn ARR in the AI content optimization space.
* Jesse grew up in Silicon Valley, where he worked at Pivotal and was an early Twitter employee through their MoPub acquisition. He moved to Budapest 5 years ago to work on startups, and lives there full-time.
* Robert, Daniel and Rok are friends of Jesse. They've worked on startups together in the past

We have not applied for Web3 Foundation grants in the past. However, we have received grants from Chainlink and Stacks. These grants enabled DLCs on Ethereum (in Solidity) and Stacks chain (in Clarity).
* [DLC.Link Receives Chainlink Community Grant to Bridge Chainlink Oracle Data to Discreet Log Contracts (DLCs) On the Bitcoin Network](https://blog.chain.link/dlc-link-chainlink-grant-bitcoin-discreet-log-contracts/)
* [DLC.link: Bitcoin-native, non-custodial transactions](https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/289)
* [Builder Spotlight: DLC.Link](https://stacks.org/builder-spotlight-dlclink-founder)


### Team Code Repos

For an overview of public repos, please see: [Installation and Setup](https://docs.dlc.link/architecture/installation-and-setup)

GitHub accounts of all team members:
* Aki: [Akibalogh](https://github.com/Akibalogh)
* Jesse: [sosaucily](https://github.com/sosaucily)
* Robert: [scolear](https://github.com/scolear)
* Daniel: [Polybius93](https://github.com/Polybius93)

### Team LinkedIn Profiles (if available)

* Aki: [https://www.linkedin.com/in/akibalogh](https://www.linkedin.com/in/akibalogh)
* Jesse: [https://www.linkedin.com/in/jesses16](https://www.linkedin.com/in/jesses16/)
* Robert: [https://www.linkedin.com/in/robert-tera](https://www.linkedin.com/in/robert-tera/)
* Daniel: [https://www.linkedin.com/in/%C3%A1d%C3%A1m-d%C3%A1niel-pusk%C3%A1s-2b57641a2](https://www.linkedin.com/in/%C3%A1d%C3%A1m-d%C3%A1niel-pusk%C3%A1s-2b57641a2/)
* Rok: [https://www.linkedin.com/in/rok-rupnik-si/](https://www.linkedin.com/in/rok-rupnik-si/)


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here.

Videos on DLC.Link:
- [What are DLCs?](https://youtu.be/HWSmeEQaRc0)
- [Wallet integration](https://youtu.be/c9RDzi2WZYc)
- [All videos](https://www.youtube.com/@dlc-link)

For a more detailed overview, read:
- [The original DLC whitepaper](https://adiabat.github.io/dlc.pdf)
- [Our Lightpaper](https://docs.dlc.link/lightpaper)
- [Docs Page](https://docs.dlc.link)

## Development Roadmap :nut_and_bolt:

**Overview**
| Total Estimated Duration | Full-Time Equivalent (FTE) | Total Costs    |
|--------------------------|---------------------------|----------------|
| 2 months                 | 2                         | 25,000 USD     |

### Milestone 1 — Attestor Setup
| Estimated Duration | FTE | Costs     |
|--------------------|-----|-----------|
| 2 weeks            | 1   | 5,000 USD |

**Deliverables:**
| Number | Deliverable                                                  |
|--------|--------------------------------------------------------------|
| 1      | License: MIT                                                 |
| 2      | Attestor Application: We will add Polkadot support to our Attestor network, and will test it with the Bitcoin wallets that we currently support (Xverse and Hiro). |
| 2a     | Documentation: We will provide documentation on how to set up and run Attestor nodes for Polkadot, to make them available to the broader community. |
| 2b     | Testing: The Attestor will be tested for both code quality and for easy setup and use in production. |
| 2c     | Docker: A Dockerfile will be provided for testing all the functionality delivered with this milestone. |

### Milestone 2 — Substrate Pallet Development
| Estimated Duration | FTE | Costs      |
|--------------------|-----|------------|
| 6 weeks            | 1   | 15,000 USD |

**Deliverables:**
| Number | Deliverable                                                  |
|--------|--------------------------------------------------------------|
| 1      | License: MIT                                                 |
| 2      | Substrate Pallet: We will develop a Substrate pallet that makes it easy for developers to integrate native Bitcoin into their Substrate-based projects. |
| 2a     | Developer Tooling: Tools such as a Health Monitor system, backcheckers, and integrated private key vaults will be deployed to Polkadot as well. |
| 2b     | Testing and Testing Guide: Comprehensive unit tests will be provided for the Substrate pallet. We will also describe how to run these tests in a guide. |
| 2c     | Docker: We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 2d     | Documentation: We will provide both inline documentation of the code and a tutorial on how users can integrate our Substrate pallet into their own projects. |

### Milestone 3 — One Integration with a Polkadot Protocol
| Estimated Duration | FTE | Costs      |
|--------------------|-----|------------|
| 1 month            | 1   | 5,000 USD  |

**Deliverables:**
| Number | Deliverable                                                  |
|--------|--------------------------------------------------------------|
| 1      | License: MIT                                                 |
| 2      | Integration with Polkadot Ecosystem: We will integrate DLC.link with one protocol in the Polkadot ecosystem, making it possible for developers to bring Bitcoin liquidity into their Polkadot and Substrate projects. |
| 2a     | Pallet Implementation: The Substrate pallet created in the previous milestone will be used for this implementation. |
| 2b     | Testing and Testing Guide: A final round of comprehensive unit tests will be provided, along with a guide on how to run these tests. |
| 2c     | Docker: We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 2d     | Documentation: We will provide comprehensive documentation on the full functionality of DLC.link and how it can be integrated into the Polkadot ecosystem. This will include how-to guides, tutorials, and sample use cases. |
| 3      | Promotional Article: We will publish a marketing article explaining what we've achieved with the grant, the features and benefits of DLC.link, and how it can be used within Polkadot. |

## Future Plans

**Short-term Plans:**

1. **Project Usage and Enhancement:** Following the completion of the project, we aim to stay active in the Polkadot community. We plan to have an active voice around DLCs and to meet more chains building with Polkadot and Parity.

2. **Promotion and Marketing:** We will aggressively promote DLC.link across various channels, such as crypto communities, conferences, social media, blogs, and blockchain events. Our goal is to increase awareness of our project within the Polkadot ecosystem and beyond.

3. **User Support:** We will establish a responsive and robust support system for our users. This will include comprehensive documentation, a Discord channel for support, and regular updates to address any concerns or issues they might face.

**Long-term Plans:**

1. **Long-term Maintenance and Support:** We intend to provide long-term maintenance and support for the DLC.link project. This includes regularly updating the libraries and tools as per the advancements in the Bitcoin and Polkadot ecosystems, and swiftly resolving any issues that users may encounter.

2. **Support for Ordinals:** One of our key long-term plans is to enable support for ordinals locked in DLCs. This will facilitate cross-chain ordinal trading and lending, expanding the range of financial services that can be built using our platform.

3. **Continued Decentralization of the Attestor Network:** As we grow, we will continue to decentralize our attestor network, adding more independent attestors and improving the resilience and security of the network. We believe this is critical for the longevity and trustless nature of our platform.

4. **Collaboration and Partnerships:** We will seek to establish partnerships with other projects within the Polkadot and Bitcoin ecosystems. Collaborating with other teams will enable us to create synergies that enhance the functionalities of our project and expand its user base.

5. **Contribution to the Ecosystem:** We intend to make DLC.link a valuable and integral part of the Polkadot and Bitcoin ecosystems. Our goal is to contribute to the growth of these ecosystems by bringing additional liquidity and functionalities, and by participating in ecosystem-wide events, initiatives, and governance.

## Referral Program (optional) :moneybag: 

**Referrer:** Nico Morgan and Coleman Maher

**Payment Address:** (Parity employees are not eligible)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Referral from Longhash VC

**See Also**

[Chainlink Grant Awarded](https://blog.chain.link/dlc-link-chainlink-grant-bitcoin-discreet-log-contracts/)

[Stacks Grant](https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/289)
