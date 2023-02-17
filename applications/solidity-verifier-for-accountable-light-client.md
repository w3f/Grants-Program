# Solidity Verifier Implementation for Accountable Light Client

- **Team Name:** Itering
- **Payment Address:** 0x5FD8bCC6180eCd977813465bDd0A76A5a9F88B47 (Ethereum USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

Darwinia is interested in implementing an on-chain accountable light client verifier using the Solidity language. The design of the accountable light client comes from the recent [paper](https://eprint.iacr.org/2022/1205) published by the Web3 Foundation. 

Darwinia is constantly following innovations in the cross-chain space, especially from the Web3 Foundation and Polkadot, with a goal of implementing these innovations in practical settings. Currently, Darwinia is prioritizing the development of on-chain light clients as the cross-chain solution. As a development company that contributes to Darwinia, we recognize the importance of the accountable light client system presented in the paper.

### Project Details

After reading the paper, we found it to be extremely valuable. It presents an efficient method for utilizing SNARK to verify the aggregated public key of signers, while still holding those signers accountable. This approach greatly improves the speed and cost-effectiveness of proof generation.

Darwinia has created [a beacon light client from ethereum to darwinia](https://darwinia.subscan.io/account/0xD2A37C4523542F2dFD7Cb792D2aeAd5c61C1bAAE), which is based on the BLS aggregate signature verification. The cross-chain gas is effectively reduced by aggregate signatures, but it is still too high because the light client smart contract needs to be aware of the entire list of public keys. If there are too many pubkeys, this could be a serious issue.

So, we are searching for a more effective solution to the aggregate signature pubkeys problem. We concentrate on the honest computation provided by zero-knowledge proof solutions. It allows us to off-chain the verification step. But through our study, we discovered that the generic SNARK solutions have so many limits that not only took a long time to produce the proof, but also required an extremely powerful device. We were stuck here until we came across this paper and Alistair's explanation [video](https://www.youtube.com/watch?v=MCvX9ZZhO4I&list=PLOyWqupZ-WGvywLqJDsMIYdCn8QEa2ShQ&index=19) and [slides](https://docs.google.com/presentation/d/16LlsXWY2Q6_6QGZxkg84evaJqWNk6szX).

This verifier will be implemented based on the BLS12-377 and BW6-761 elliptic curves, which is consistent with the implementation in the paper and [W3F's PoC implementation](https://github.com/w3f/apk-proofs).

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

  When Polkadot/Substrate/Kusama bridges to a blockchain that is EVM-compatible, this verifier will be helpful.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  
  The users of this verifier will be the cross-chain messaging/bridge service providers.
  
- What need(s) does your project meet?

  Precompiled versions of BLS12-377 and BW6-761 should ideally be supported by the blockchains that use this verifier. 

  If gas and speed are not a concern, you can also use the no-precompiled curves.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

  This kind of verifier hasn't been implemented in solidity yet, as far as we know.

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

Darwinia has accumulated significant expertise in the field of blockchain cross-chain technology through several years of experience. We are well-versed in various cross-chain approaches, particularly those involving light clients. Our team is highly knowledgeable about Polkadot's technology, and our chains, along with some cross-chain facilities, have been developed using Parity's technology. Additionally, we have extensive experience with the Solidity programming language. Notably, we have already implemented a beacon light client in Solidity that has been successfully running on the Darwinia Chain.

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

- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
  https://forum.polkadot.network/t/decentralized-dot-eth-bridges-a-comparison-thread/777/33

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**  4 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 95,000 USD

### Milestone 1 — Curve precompiles

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 30,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | BLS12-377 precompile | We will create a [EIP-2539](https://eips.ethereum.org/EIPS/eip-2539) compatible BLS12-377 precompile which can run inside [frontier](https://github.com/paritytech/frontier). |
| 2. | BW6-761precompile | We will create a [EIP-3026](https://eips.ethereum.org/EIPS/eip-3026) compatible BW6-761 precompile which can run inside [frontier](https://github.com/paritytech/frontier). |
| 3. |                           |                                                              |

### Milestone 2 — Basic & Packed verifier

- **Estimated Duration:** 2 month
- **FTE:**  2
- **Costs:** 45,000 USD

|  Number | Deliverable               | Specification                                                |
| ------: | ------------------------- | ------------------------------------------------------------ |
| **0a.** | License                   | MIT                                                          |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and an example to verify the proof generated from [W3F's PoC example](https://github.com/w3f/apk-proofs/blob/main/bw6/examples/recursive.rs). |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|      1. | APK verifier              | We will implement the apk verifer which will check the apk is correct. |
|      2. | BLS verifier              | We will implement the bls verifier which will check if the aggregate signature is signed by the apk. |
|      3. | Signers threshold checker | Check if the bitvector of pubkeys contains enough signers.   |
|      4. |                           |                                                              |

### Milestone 3 — Counting verifier

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 20,000 USD

|  Number | Deliverable               | Specification                                                |
| ------: | ------------------------- | ------------------------------------------------------------ |
| **0a.** | License                   | MIT                                                          |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code.   |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article                   | We will publish an medium **article** that explains what was done. |
|      1. | Counting verifier         | We will implement the counting verifier described in the [PoC](https://github.com/w3f/apk-proofs/blob/main/bw6/src/piop/counting.rs). |
|      2. |                           |                                                              |

## Future Plans

- We intend to leverage this verifier to develop our on-chain light clients after the grant is completed. 
- Adapt to other EVM chains that satisfy the curves' requirements.
- Follow the revision of the W3F paper.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / personal recommendation

Additional information:

- [Darwinia truth layer](https://github.com/darwinia-network/darwinia-messages-sol/tree/master/contracts/bridge/src/truth) currently include Beacon light client, BSC light client and Darwinia light client.
- [Helix Bridge](https://helixbridge.app/en) which have bridges based on Darwinia cross-chain messaging protocol.
