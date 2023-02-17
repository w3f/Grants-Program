# Solidity Verifier Implementation for Accountable Light Client

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

We have read this paper and found it very valuable. It provides a very efficient way to use SNARK to verify aggregated public key of signers , while still keeping signers' accountable. This approach makes the proof generation very fast and cost effective.

We have implemented [an beacon light client from ethereum to darwinia](https://darwinia.subscan.io/account/0xD2A37C4523542F2dFD7Cb792D2aeAd5c61C1bAAE), which is based on the verification of BLS aggregate signature. Although aggregate signatures effectively reduce the cross-chain gas, it is still not low enough because the entire list of public keys need to be known by the light client smart contract. This can be a big problem if the number of pubkeys is large.

So, we are looking for a better solution to the pubkeys problem of aggregate signature. We put our eyes on zero-knowledge proofs. Zero-knowledge proofs are considered as an honest-computation proof method, with this method we only need to put the verification computation process off the chain. But through our studies, we found that the number of constraints under the generic snark scheme was so huge that not only the proof was slow to generate, but also required very powerful device. We were stuck here until we came across this paper from W3F.

This verifier will be implemented based on the BLS12-377 and BW6-761 elliptic curves, which is consistent with the implementation in the paper and [W3F's PoC implementation](https://github.com/w3f/apk-proofs).

### Ecosystem Fit

- Where and how does your project fit into the ecosystem?

  This verifier will be useful when Polkadot/Substrate/Kusama bridges to an EVM-compatible blockchain. 

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  
  The users of this verifier will be the cross-chain messaging/bridge service providers.
  
- What need(s) does your project meet?

  The light clients which use this verifier should preferably support precompiles of BLS12-377 and BW6-761. You can use the no-precompiles version of the curve implementations If gas and speed are not an issue.

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

Darwinia has many years of experience in the blockchain cross-chain field. We are familiar with various cross-chain approaches, especially those based on light clients. We know Polkadot's technology well, our chains and some cross-chain facilities are based on parity's technology. We are also very familiar with solidity language. The beacon light client we developed with solidity has already run on Darwinia Chain.

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
- **Total Costs:** 70,000 USD

### Milestone 1 — Curve precompiles

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 20,000 USD

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
- **Costs:** 30,000 USD

|  Number | Deliverable               | Specification                                                |
| ------: | ------------------------- | ------------------------------------------------------------ |
| **0a.** | License                   | MIT                                                          |
| **0b.** | Documentation             | We will provide both **inline documentation** of the code and an example to verify the proof generated from [W3F's PoC example](https://github.com/w3f/apk-proofs/blob/main/bw6/examples/recursive.rs). |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
|      1. | APK verifier              | We will implement the apk verifer which will check the apk is correct. |
|      2. | BLS verifier              | We will implement the bls verifier which will check if the aggregate signature is signed by the apk. |
|      3. | Signers threshold checker | Check if the bitvector contains enough signers.              |
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

- We plan to use this verifier to implement our bridge on chain light client after the grant is completed. 

- Adapt to other evm chains that meet the curves conditions.

- Follow W3F paper's updates.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / personal recommendation

Additional information:

- [Darwinia truth layer code](https://github.com/darwinia-network/darwinia-messages-sol/tree/master/contracts/bridge/src/truth) currently include Beacon light client, BSC light client and Darwinia light client.
- [Helix Bridge](https://helixbridge.app/en) which have bridges based on Darwinia cross-chain messaging protocol.
