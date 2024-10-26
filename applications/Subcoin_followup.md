# Subcoin

- **Team Name:** Individual
- **Payment Address:**
    - **DOT**: 12uXLCZZkprwRBhfmhTXdfQE8faQwgNpS76wwmnEbgDwWB9e
    - **USDT**: 12uXLCZZkprwRBhfmhTXdfQE8faQwgNpS76wwmnEbgDwWB9e
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This is a follow-up grant of https://github.com/w3f/Grants-Program/pull/2304, aiming to fully implement the vision of Bitcoin Fast Sync outlined in the initial grant.

### Overview

In the previous grant, Subcoin encountered challenges in the Substrate framework that prevented fast sync to the Bitcoin network's tip. The primary objective here is to address these limitations, enabling users to sync to the tip of the Bitcoin chain efficiently using fast sync with standard hardware.

Additionally, we will develop a dedicated tool to download the UTXO set snapshot compatible with Bitcoin Core from the Subcoin P2P network directly, utilizing state sync functionality. This tool will address limitations in Bitcoin Core Fast Sync, enhancing decentralization by reducing reliance on trusted snapshot providers, thereby attracting more Bitcoin ecosystem users to Subcoin.

**Relevance to Substrate & Polkadot**

This grant will expand Substrate's capabilities, benefiting not only projects across the Polkadot ecosystem but also Polkadot itself in the long run.

**Motivation**

Without this follow-up grant, Decentralized Bitcoin Fast Sync cannot reach its full potential. This follow-up work is essential to Subcoin’s success and usability.

### Project Details

**Key Deliverables**

- Full Bitcoin Fast Sync: A public bootstrap node that is synced to the tip of the Bitcoin network will be deployed, enabling new nodes to perform decentralized Bitcoin fast sync to the latest state of Bitcoin with common hardware.
- crate `subcoin-snapcake`: Provides a CLI tool (essentially an ephemeral Subcoin node) to download the UTXO set snapshot from the Subcoin P2P network without the need of running a regular full Substrate node.

**Non-Goals**

Efforts such as addressing the OOM issue will be contributed to the Substrate framework, but PRs are not guaranteed to be merged within this grant’s timeline (depending on the review process), we are committed to upstreaming improvements as needed and beyond this grant.

### Ecosystem Fit

The impact of this project extends beyond the Substrate and Polkadot ecosystems, contributing to the diversity of Bitcoin protocol implementation within the broader blockchain landscape.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Liu-Cheng Xu

### Contact

- **Contact Name:** Liu-Cheng Xu
- **Contact Email:** [xuliuchengxlc@gmail.com](mailto:xuliuchengxlc@gmail.com)
- **Website:** https://github.com/liuchengxu

### Legal Structure

- Individual

### Team's experience

- Liu-Cheng Xu
    
    He is a seasoned protocol-level blockchain engineer with extensive experience with the Substrate framework. He was the core developer and subsequent tech lead of ChainX project from 2018 to 2021. Post-ChainX, he embarked on a venture with the permanent storage project Canyon and received the grant [canyon_network](https://github.com/w3f/Grants-Program/blob/df34fc617c88346411319b4293db5eb9cb2769b9/applications/canyon_network.md) for implementing the Proof Of Access consensus with the Substrate ecosystem. Due to regulatory changes in his country, Canyon was discontinued. He later transitioned to Subspace Labs as the lead protocol engineer, spearheading the execution layer development in Subspace's modular solution from 2021 to 2023.
    

### Team Code Repos

- https://github.com/subcoin-project/subcoin

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/liucheng-xu-2a639b116/

## Development Status :open_book:

Since the initial grant’s completion, I have continued to address the identified challenges. With the deeper investigation and guidance of the Parity team, I’ve submitted a [draft PR](https://github.com/paritytech/polkadot-sdk/pull/5956) to address the key OOM issue. Preliminary testing shows promising results.

## Development Roadmap :nut_and_bolt:

### Overview

This project is planned as 2 milestones, completed in two months.

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1.5
- **Total Costs:** 30,000 USD
- **DOT %:** 50%

### Milestone 1

- **Estimated duration:** 1 month
- **FTE:** 1.5
- **Costs:** 15,000 USD

> :exclamation: The default deliverables 0a-0d below are mandatory for all milestones, and deliverable 0e at least for the last one.
> 

| Number | Deliverable | Specification |
| --- | --- | --- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to do a fast sync to the tip of the Bitcoin chain. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Full Bitcoin Fast Sync | The key obstacles listed in https://github.com/subcoin-project/subcoin/issues/56#issue-2535464363 will be resolved and a public bootstrap node synced to Bitcoin’s tip will be deployed, enabling users to quickly sync to Bitcoin’s latest state using fast sync. |

### Milestone 2

- **Estimated duration:** 1 month
- **FTE:** 1.5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the tool to download the UTXO set snapshot and import it to Bitcoin Core node. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | We will publish an article that explains what was done/achieved as part of the grant. |
| 1. | `subcoin-snapcake` | We will provide a dedicated tool for downloading the UTXO set snapshot compatible with Bitcoin Core from the Subcoin P2P network. This tool is resources-efficient and does not actually a full regular Substrate node but only utilizes the Substate networking compoenents. |

## Future Plans

Promote the Decentralized Bitcoin Fast Sync to the Bitcoin ecosystem while working towards a robust and feature-rich Bitcoin software in Substrate.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](https://www.notion.so/README.md#moneybag-referral-program).

- **Referrer:** -
- **Payment Address:** -

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** -
