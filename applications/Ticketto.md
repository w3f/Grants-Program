# The Ticketto Protocol

- **Team Name:** *Kippu*
- **Payment Address:** `15p2xZhmfVaSp8wQ1EFooFnpo2DnZB16NSDeKAEcQfNEXr1y` (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

*Kippu aims to build a protocol to securely issue, sell/resell, transfer tickets, and get/grant access to events.*

The event ticketing industry has long been fraught with challenges hindering organizers and attendees. Issues such as ticket fraud, scalping, and a lack of transparency in pricing and distribution have consistently plagued traditional ticketing systems. Additionally to those challenges, minor, independent events struggle with the high costs and complexities of accessing sophisticated ticketing solutions quickly, securely, and scalably. The need for an innovative approach to address these persistent issues is evident.

Kippu aims to build a protocol to solve these problems by leveraging a widely used technology: NFTs. This led to the designing and creation of The Ticketto Protocol, a definition of how to address these use cases in a decentralised way.

To make this a reality, we plan to close the gaps between the current landscape and the desired state, while increasing the adoption through a platform that helps users connecting to the protocol.

### Project Details

**Link to the protocol document:** [The Ticketto Protocol][doc:ticketto_protocol].

![Overview of the protocol][img:ticketto_overview]

Ticketto (チケット, means ticket) is a protocol to enable use cases for ticketing solutions over existing NFTs. This solution doesn't intend to reinvent the wheel, or extend existing protocols related to non-fungibles, but to take the best of the features already out there and wrap around to provide use cases in a consistent manner to developers and users.

As part of our prior research (previous to formal protocol documentation), a mock illustrating what a potential implementation of the [`mark_attendance`][gh:ticketto_call_mark_attendance] call might look like in the future is available on [GitHub][gh:libticketto_mock_attendance_pallet].

#### What this project is not

- Definitely, not a reinvention of the NFTs protocol, or `pallet-nfts`.
- An implementation of the end-user applications to connect with the protocol. However, we'd like to showcase a couple of UI mockups to indicate how that might look like.

  ![List Events/Tickets at Kippu][img:kippu_mockups_events] ![Get Event/Ticket info at Kippu][img:kippu_mockups_ticket] ![Access QR Code][img:kippu_mockups_qr]

### Ecosystem Fit

We believe in use cases that drive adoption to the community, while being able to be used on similar use cases.

As part of the future roadmap (beyond this project, that'll help us to build a nice MVP and validate the protocol itself), we've seen potential to build a pallet extension for `pallet-nfts` so system chains (such as Asset Hub) and other parachains as well can benefit from extended use cases, such as: buying and selling using `fungibles` assets, and extend the model for auctions (that can be included in future versions of the protocol).

## Team :busts_in_silhouette:

> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- **Pablo Andrés Dorado Suárez**: Team Leader
- **Mateo Contreras Castellanos**: Software Engineer

### Contact

- **Contact Name:** Pablo Andrés Dorado Suárez
- **Contact Email:** <hola@pablodorado.com>
- **Website:** <https://github.com/kippurocks>

### Team's experience

Pablo is a 10+ years experience software engineer, PBA Alumn (Wave 3), with experience as Runtime Engineer at [Virto Network][gh:virto]. Also, he has contributions on several tools available to the ecosystem (like `sube`, `libwallet` — now part of [VirtoSDK][gh:virto_sdk], or [`valor`][gh:virto_valor]), [`polkadot-sdk`][gh:polkadot_sdk] and has given minor contributions on tooling for the Polkadot Fellowship ([RFCs Referenda Bot][gh:rfcs-bot]) and several infrastructure providers ([`ibp-monitor`][gh:ibp_monitor])

Mateo, a seasoned full-stack software engineer with over 5 years of experience, has served as the Chief Technology Officer (CTO) at Nocturnal, specializing in solutions for events and nightlife. He brings his expertise in full-stack development to various projects, including ecommerce and digital transformation. Mateo has worked as a Software Engineer for platforms such as Workrise, The Arena Group, and torre.ai. His primary focus is on optimizing the core products to deliver the best experience for both users and clients.

### Team Code Repos

- <https://github.com/kippurocks/ticketto>
- <https://github.com/kippurocks/kippu-node>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- <https://github.com/pandres95>
- <https://github.com/jmcontreras10>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/pandres95>
- <https://www.linkedin.com/in/mateo-contreras-59875311a/>

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** 10,000 USD

### Milestone 1 — PoC / Core Functionality

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code, basic **tutorial** that explains how a user can execute actions within the protocol, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone in a local testing node. |
| 0e. | Article | We will publish an **article** that explains the design process behind Ticketto, and how developers can implement their own ticketing systems using this system |
| 1. | Smart Contract: Attendances | We will create a ink! smart contract that evaluates the criteria for a **ticket holder** to be granted access to an *event* based on the restrictions and policies imposed on the *ticket*, as well as the current *attendances* recorded on the *ticket* |

### Milestone 2 — Ticketing Marketplace

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code, basic **tutorial** that explains how a user can execute actions within the protocol, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone in a local testing node. |
| 1. | Smart Contract: Tickets | We will create a ink! smart contract to allow **organisers** for minting and putting tickets for sale, and **ticket holders** to sell/resell and securely transfer tickets. |

## Future Plans

- In a followup proposal, we intend to expand the protocol to easily onboard **event organisers** and wrap the necessary operations to create *events*.
- In the future, we plan to expand this as a set of substrate modules, as this would give us more granular control.
- We intend to build a new pallet extension of `pallet-nfts` to benefit other parachains from our breakthroughs in NFTs marketplace interactions.
- The team might be interested in further contributing to maintenance projects for extending tools that can help the community overall (i.e. [`polkadart`](https://github.com/leonardocustodio/polkadart)).

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Polkadot Blockchain Academy / Web3 Foundation Website

[img:ticketto_overview]: https://bafybeigz42pndiopluq7fi356tmfxyhshevnywfs4ppvyode7bh3lyhrfe.ipfs.nftstorage.link/
[doc:ticketto_protocol]: https://github.com/KippuRocks/ticketto/blob/main/PROTOCOL.md
[gh:ticketto_call_mark_attendance]: https://github.com/KippuRocks/ticketto/blob/main/PROTOCOL.md#commands
[gh:libticketto_mock_attendance_pallet]: https://github.com/KippuRocks/libticketto/blob/feat/on-chain-emulation/examples/iriguchi/lib/chain/pallets/ticket.ts#L83
[img:kippu_mockups_events]: https://bafkreicwzh7sgstewgxuhs3igd5vfj2o4dsavivyyanuunp46d6gkxv7q4.ipfs.nftstorage.link/
[img:kippu_mockups_ticket]: https://bafkreib5jinu2ryw436brwcxlbnwerm2mwcsowukz3pksw6but6otrxdni.ipfs.nftstorage.link/
[img:kippu_mockups_qr]: https://bafkreierdwzq5tj4u32n3elvzlyl7ux5izuqknfpscqdhxltulucpltwpe.ipfs.nftstorage.link/
[gh:virto]: https://github.com/virto-network
[gh:virto_sdk]: https://github.com/virto-network/virto-sdk
[gh:virto_valor]: https://github.com/virto-network/valor
[gh:polkadot_sdk]: https://github.com/paritytech/polkadot-sdk/pulls?q=is%3Apr+author%3Apandres95+
[gh:rfcs-bot]: https://github.com/pandres95/fellowship-referenda-bot
[gh:ibp_monitor]: https://github.com/ibp-network/ibp-monitor/
