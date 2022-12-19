# Polkastarter

- **Team Name:** Polkastarter
- **Payment Address:** 0x69367459A962FDF55a6aF0f9D5aB969548bc2b30

* **Status:** [Terminated](https://github.com/w3f/Grant-Milestone-Delivery/pull/124#issuecomment-855203619)

## Project Overview :page_facing_up:

### Overview

The Polkastarter protocol enables projects to raise capital in a decentralized environment by
facilitating cross-chain token pools and auctions. Polkastarter has already launched its MVP on
Ethereum, allowing teams to raise ETH at a fixed swap rate for their native token.

The Polkastarter team has already started working on bringing this protocol to Moonbeam to bring
these features to Polkadot and Kusama. The next phase that we want to pursue is a dashboard for
Parachain Lease Offerings. This dashboard will offer several benefits to teams and users:

- Teams will be able to instantiate their crowdloan.
- Users will be able to trust that they are not being scammed, i.e. that the proper functions are
  called.
- Users will always be able to reclaim their DOT/KSM after a parachain lease. As Polkastarter is
  non-custodial, users don't need to trust us to be live two years later to reclaim their DOT/KSM.

Polkastarter was created with the vision of generating a fair and safe environment for
cryptocurrency investors to participate in token swaps and other decentralised fundraising models.
Because Parachain Lease Offerings are going to move millions of funds in \$DOT, it's of most
importance to guarantee a simple and safe platform for both teams and investors to participate in
this process.

### Project Details

As we already have our MVP [live on Ethereum](https://www.polkastarter.com/), you can see the UI
theme by looking at the pools there. Our backend is built using Polkastarter JS, and we would expand
this to implement the backend needed for Polkadot/Kusama interaction.

#### Core Functionality

- Launch or Register PLO
  - Teams can create their crowdloan campaign by calling `crowdloan.create` with its parameters.
  - Teams who have already created their crowdloan can register it with Polkastarter with additional
    project information such as description, team bio and other notable sources of information that
    will help showcase the credibility of the project to the Polkastarter community.
- Contribute
  - Users can connect their wallet and contribute to any of the listed campaigns with the
    `crowdloan.contribute` function.
  - The crowdloan will have a page on Polkastarter that resembles the current pool UI with adapted
    parameters to the crowdloan architecture.
- Bid
  - Teams can use the raised funds to participate in auctions during the campaign's duration.
- Reclaim
  - If the campaign fails, or when the slot lease ends, users can reclaim their DOT/KSM with the
    `crowdloan.withdraw` function.
- Low Fidelity Mockups
  - [Crowdloans Index](https://drive.google.com/file/d/1gOy5sT9EMpmBKeJ826qlsQ-fNpdpNCrj/view?usp=sharing)
  - [Crowdloans Show](https://drive.google.com/file/d/1Fd7xViuwj2mhiCQyeQtOY-RTopBXSYm7/view?usp=sharing)
  - [Crowdloans Join](https://drive.google.com/file/d/16iW5WV0jFGmeyz7eQc0_SB-uR4o_dNM5/view?usp=sharing)

### Ecosystem Fit

There are several teams working on _custodial_ PLOs (Binance, Huobi, OKEx, etc.), but we don't know
of any other projects created a non-custodial dashboard. Having a custodian or dashboard aids in
preventing scams where projects ask users to _transfer_ DOT/KSM to their crowdloan, when in fact
users should interact with the Crowdloan logic. Using a custodian means that they handle the
contribution logic. However, because parachain slot leases can last up to two years, they also
introduce risk: namely, that the custodian will not exist and be able to reclaim the DOT/KSM
principal. Polkastarter is different because we provide the trust that users gain from interacting
with a known, consistent UI, but users use their own wallet and will be able to reclaim their
DOT/KSM in the future without trusting that Polkastarter will exist.

## Team :busts_in_silhouette:

### Team members

- Daniel Stockhaus
- Tiago Martins
- Rui Teixeira
- Miguel Almeida
- Henrique Caiano

### Contact

- **Contact Name:** Daniel Stockhaus
- **Contact Email:** daniel@polkastarter.com
- **Website:** <https://www.polkastarter.com/>

### Legal Structure

- **Registered Address:** Craigmuir Chambers, Road Town, Tortola, VG 1110, British Virgin Islands
- **Registered Legal Entity:** Dotstart Technologies Ltd

### Team's experience

- **Daniel Stockhaus:** A strategic digital leader with 20 years of innovative and dynamic
  eCommerce, B2C / B2B and blockchain expertise. Remarkable in leveraging resources, capabilities
  and relationships to transform enterprises and design scalable digital roadmaps. CEO of
  Polkastarter.
- **Tiago Martins:** Tiago was co-founder and CEO of one of the first project based online
  programming schools (Codeplace) reaching 100k students. Now CTO of Polkastarter. Main exp on Ruby
  and Javascript.
- **Rui Teixeira:** Rui is the CEO and Co-Founder of Bepro Network, a Code-as-a-Service protocol
  providing technology and support for blockchain-based gaming applications. Maintainer of
  Polkastarter JS. Main exp on Solidity and Javascript.
- **Miguel Almeida:** Miguel was the CTO and Co-Founder of Liquid Data Intelligence, an automated
  growth marketing SaaS for mobile apps with clients like Intercom. Now Head of Engineering at
  Polkastarter. Main exp on Ruby and Devops.

### Team Code Repos

- <https://github.com/polkastarter>
- <https://gitlab.com/polkastarter> (DAPP Source Code. Can grant access when requested.)
- <https://github.com/tiagom87>
- <https://github.com/Ruiub3i>
- <https://github.com/miguelcma>
- <https://github.com/hcaiano>

### Team LinkedIn Profiles

- <https://www.linkedin.com/in/danielstockhaus/>
- <https://www.linkedin.com/in/temmartins/>
- <https://www.linkedin.com/in/rui-dos-santos-teixeira/>
- <https://www.linkedin.com/in/henriquecaiano/>
- <https://www.linkedin.com/in/miguelcma/>

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-time equivalent (FTE):** 2 FTE
- **Total Costs:** 15,000 DAI

### Milestone 1 — Implement Substrate Modules

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 7,500 DAI

| Number | Deliverable       | Specification                                                                                                                                        |
| ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License           | Apache 2.0 / MIT / Unlicense                                                                                                                         |
| 0b.    | Documentation     | We will provide both inline documentation of the code and basic tutorials that explain how teams can create a campaign and how users can contribute. |
| 0c.    | Testing Guide     | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests.       |
| 1.     | Backend           | We will have the backend calls integrated to call the appropriate functions on Polkadot/Kusama.                                                      |
| 2.     | Wallet Connection | We will be able to connect to the Polkadot JS Extension wallet.                                                                                      |
| 3.     | UI                | We will have a primitive UI for teams and users to interact with.                                                                                    |

### Milestone 2 — Additional features

- **Estimated Duration:** 1 month
- **FTE:** 1
- **Costs:** 7,500 DAI

| Number | Deliverable | Specification                                                                         |
| ------ | ----------- | ------------------------------------------------------------------------------------- |
| 0a.    | Article/Tutorial  | We will write an article or tutorial that explains the work done as part of the grant.                                                               |
| 0b.    | Testing Guide  | We are gonna add a battery of quality assurance scenarios to define on what constitutes as a successful user flow. An example would be a user attempting to participate in a crowd loan.                                                               |
| 1.     | UI          | The UI will connect to Polkadot/Kusama/Westend mainnets for live functionality.       |
| 2.     | UI          | We will perform user testing to add final touches to the UI and launch to production. |

## Future Plans

Polkastarter plans to support a wide range of fundraising efforts in the Polkadot ecosystem. For our
PLO functionality, we plan to support the full parachain lifecycle, like bidding to extend slots and
users reclaiming their DOT/KSM at the end of a parachain slot lease. We will also expand the wallet
functionality so that users can connect other wallets, like Parity Signer and Ledger to the
interface.

## Additional Information :heavy_plus_sign:

- Work done so far: Production fundraising platform on Ethereum and started work with integration to
  Moonbeam.
- Polkastarter has not applied to other grants.
