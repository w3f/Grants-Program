# Solidity Verifier Implementation for "Accountable Light Client Systems for PoS Blockchains"

- **Team Name:** Darwinia
- **Payment Address:** 0x5FD8bCC6180eCd977813465bDd0A76A5a9F88B47 (Ethereum USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

Darwinia wants to implement a light client verifier in solidity language as described in this [paper](https://eprint.iacr.org/2022/1205) from the Web3 Foundation.

Darwinia is working in the cross-chain space. We have two Substrate based blockchains Crab and Darwinia, they are currently parachains to Kusama and Polkadot respectively. Many cross-chain facilities of Darwinia are also based on Parity's Technologies.

Darwinia has been following cross-chain innovations, especially from W3F and Polkadot, and trying to apply these innovations in practice. 

The cross-chain solutions we are currently focusing on are mainly on-chain light clients. So we know the importance of this kind of light client system described in the paper.

### Project Details

We have read this paper and found it very valuable. It provides a very efficient way to use snark to verify aggregate signatures, while still keeping signers' accountable. This approach makes the generation of zk proof very fast and cost effective.

We have implemented [an beacon light client from ethereum to darwinia](https://darwinia.subscan.io/account/0xD2A37C4523542F2dFD7Cb792D2aeAd5c61C1bAAE), which is based on the verification of bls aggregate signature. Although aggregate signatures effectively reduce the cross-chain gas, it is still not low enough because pubkeys need to be stored in the contract or carried in the message every time the header is updated. This can be a big problem if the number of pubkeys is large.

So, we are looking for a better solution to the pubkeys problem of aggregate signatures. We put our eyes on zero-knowledge proofs. Zero-knowledge proofs are considered as an honest-computation proof method, so we just need to put the computation of the verification process off the chain. But through our studying, we found that the number of constraints under the generic snark scheme was so huge that not only the proof was slow to generate, but also required very powerful device. We were stuck here until we came across this paper from W3F.

This verifier will be implemented based on the BLS12-377 and BW6-761 curves, which is consistent with the implementation in the paper and [W3F's PoC implementation](https://github.com/w3f/apk-proofs).

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

  This verifier will be useful when Polkadot/Substrate/Kusama bridges to an EVM-compatible blockchain. 

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  
  The user of this lib will be the cross-chain messaging/bridge service providers.
  
- What need(s) does your project meet?

  The light clients which use this library should preferably support precompiles of BLS12-377 and BW6-761. But, according to the paper, you can replace these two elliptic curves with other satisfying elliptic curves. What we can to do is provide an interface to make it easy to switch curves. You can switch to other curve precompiles, or use the solidity version of the curve implementations If gas and speed are not an issue.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

  We don't see any solidity implementations of this kind of verifier.

## Team :busts_in_silhouette:

### Team members

- Denny, denny.wang@itering.io
- Echo, echo.hu@itering.io
- Aki, aki.wu@itering.io

### Contact

- **Contact Name:** Aki Wu
- **Contact Email:** aki.wu@itering.io
- **Website:** https://github.com/wuminzhe

### Legal Structure

- **Registered Address:** 3 FRASER STREET #05-25 DUO TOWER SINGAPORE (189352)
- **Registered Legal Entity:** ITERING TECH PTE. LTD.

### Team's experience

Darwinia has many years of experience in the blockchain cross-chain field. We are familiar with various cross-chain approaches, especially those based on light clients. We know Polkadot's technology well, our chains and some cross-chain facilities are based on parity's technology. We are also very familiar with solidity language. The beacon light client we developed with solidity has already run on Darwinia chain.

### Team Code Repos

- https://github.com/darwinia-network/darwinia-messages-sol
- https://github.com/darwinia-network/darwinia-messages-substrate
- https://github.com/darwinia-network/darwinia
- https://github.com/darwinia-network/darwinia-common

Github accounts of team members:

- Denny: https://github.com/hackfisher
- Echo: https://github.com/hujw77
- Aki: https://github.com/wuminzhe

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 — Basic verifier

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can integrate it to a light client. We will provide example code to verify the proof generated from [W3F's PoC example](https://github.com/w3f/apk-proofs/blob/main/bw6/examples/recursive.rs). |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Curve precompiles | We will create the two curves(BLS12-377 and BW6-761) precompiles which can run inside [frontier](https://github.com/paritytech/frontier). |
| 2. | Verifier | The verifier it self. |
| 3. |                           |                                                              |

### Milestone 2 — Packed verifier

- **Estimated Duration:** 0.5 month
- **FTE:**  2
- **Costs:** 8,000 USD

|  Number | Deliverable               | Specification                                                |
| ------: | ------------------------- | ------------------------------------------------------------ |
| **0a.** | License                   | MIT                                                          |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can integrate it to a light client. We will provide example code to verify the proof generated from [W3F's PoC example](https://github.com/w3f/apk-proofs/blob/main/bw6/examples/recursive.rs). |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|      1. |                           |                                                              |
|      2. |                           |                                                              |
|      3. |                           |                                                              |
|      4. |                           |                                                              |
|      5. |                           |                                                              |

### Milestone 3 — Counting verifier

- **Estimated Duration:** 0.5 month
- **FTE:**  2
- **Costs:** 8,000 USD

|  Number | Deliverable               | Specification                                                |
| ------: | ------------------------- | ------------------------------------------------------------ |
| **0a.** | License                   | MIT                                                          |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can integrate it to a light client. We will provide example code to verify the proof generated from [W3F's PoC example](https://github.com/w3f/apk-proofs/blob/main/bw6/examples/recursive.rs). |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|      1. |                           |                                                              |
|      2. |                           |                                                              |
|      3. |                           |                                                              |
|      4. |                           |                                                              |
|      5. |                           |                                                              |

## Future Plans

- We plan to use this lib to implement our beacon accountable light client after the grant is completed.

- Adapt to other evm chains that meet the conditions, and support different curves.

## Referral Program :moneybag: 

- **Referrer:** Aki Wu
- **Payment Address:** 0x794BF0B66926D84CB735283D849f454A2A8d9a44 (Ethereum USDC)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / personal recommendation

Aadditional information:

- [Darwinia truth layer code](https://github.com/darwinia-network/darwinia-messages-sol/tree/master/contracts/bridge/src/truth) currently include Beacon light client, BSC light client and Darwinia light client.
- [Helix Bridge](https://helixbridge.app/en) which have bridges based on Darwinia cross-chain messaging.
