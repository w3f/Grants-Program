# Polka Vote Palette

This document was created as part of the instructions in this [link](https://grants.web3.foundation/docs/Process/how-to-apply).
Please checkout the extended disscusion draft (includes long term roadmap), [here](https://docs.google.com/document/d/1FxD8y2c9BZwW0YHQRb-vXjSyzQPZ1LDQCHuV6CJGqOM/edit?usp=sharing).
- **Team Name:** ZK as a Service
- **Payment Details:**
  - **DOT**: 1yMfKojPhJWxnEJURLZeDjRzUwXzPDqU8WAU5pMkhbzxDB5
  - **Payment**: 1yMfKojPhJWxnEJURLZeDjRzUwXzPDqU8WAU5pMkhbzxDB5 ,USDC. 
- **[Level](https://grants.web3.foundation/docs/Introduction/levels):** 1


## Project Overview :page_facing_up:

### Overview

For Kusama Zk Track.

The PolkaVote protocol is an on-chain protocol for binary anonymous voting that leverages ZKP and to evaluates the final vote on a chain in an anonymous fashion, while obfuscating the vote itself but not the voter's identity.

I <3 Cryptography.

### Project Details

Project's objective is to implement a system such as the following [demo](https://polka-vote.vercel.app/), as palette.

For some preliminary work and relevant documetation, please refere to the following refernces:

1. PolkaVote [Repository](https://github.com/armsves/PolkaVote)
2. **Milestone 2** "Open Vote Network" Voting Protocol - [documentation](https://docs.google.com/document/d/1YVKr12syRW6wnb29Mm0YCZWd-yZ7TkwCkqFcMXGzQwU/edit?tab=t.0#heading=h.aj0slpbu3v8x)
3. Open Vote Network Protocol [Wikipedia](https://en.wikipedia.org/wiki/Open_vote_network) page
4. Open Vote Network Protocol Research [Paper](https://eprint.iacr.org/2017/110.pdf)


### Ecosystem Fit

A prominent problem with OpenGov today is that all referendum votes are fully public, which makes individual voters vulnerable to external pressure, coercion, or retaliation. When others can verify how you voted, they can influence you through social pressure—forcing you to act in their interests rather than in Polkadot’s.
Zero-knowledge proofs solve this by allowing a voter to prove that their vote was valid and included in the final tally without revealing the vote itself or their stake. This brings true anonymity to OpenGov, making it infeasible for any third party to confirm or credibly threaten based on an individual’s vote, thus restoring independence and integrity to the decision-making process.

It seems like the first go to for such a project is Kusama. As the project grows mature and is battle tested it can be integrated in OpenGov protocol.

## Team :busts_in_silhouette:

### Team members
- **Team leader and only member:** Gil Henkin

### Contact

- **Contact Name:** Gil Henkin
- **Contact Email:** gil7788@gmail.com
- **Website:** [Professional Page](https://gil-henkin.web.app/)

### Team's experience

I have an extensive background in dApps development, as well as a profound knowledge in Cryptography both on the theoretical level and hands-on level.

Some of the ZK interesting projects are (links in the next section below):
1. PolkaVote (hackathon winner)
2. ZK-PVM (hackathon winner)
3. ZK Digital Identity Aggregator 
4. My ZK Circom Circuits Portfolio 

### Team Code Repos

- https://github.com/armsves/PolkaVote
- https://github.com/gil7788/zero-knowledge-polkadot-machine
- https://github.com/gil7788/zk-identity
- https://github.com/gil7788/zk-sandbox

My GitHub account:
- https://github.com/gil7788

### Team LinkedIn Profiles

- https://www.linkedin.com/in/gilhenkin

## Development Status :open_book:

Since Palette Revive on Passethub, doesn't support precompiled BN128 curves it is impossible to deploy ZK verifier contracts due to contract size. It automatically sets the Polkadot eco-system in a non-adventageous position when it comes to Zk technologies, ZK competability and advancement.

This proposal serves as the 3rd Milestone of the PolkaVote Web Summit hackathon winner. The idea is to implement the same system that was proposed and developed in the second Web Summit hackathon milestone as a palette.

By implementing "The Open Vote Network" we can introduce an anonymous protocol that is actually running on a Polkadot chain, by leveraging Polkadot-sdk and Noir/Circom for ZK.

For references and preliminary work, please check out the links below:

1. **Milestone 1** Homomorphically additive ZK Voting - [documentation](https://docs.google.com/document/d/1vTirzHW5sFZefvPmq85l9IZcgwMRSMA8MIYW7oxPN74/edit?usp=sharing) 
2. **Milestone 2** "Open Vote Network" Voting Protocol - [documentation](https://docs.google.com/document/d/1YVKr12syRW6wnb29Mm0YCZWd-yZ7TkwCkqFcMXGzQwU/edit?tab=t.0#heading=h.aj0slpbu3v8x)
3. PolkaVote [Repository](https://github.com/armsves/PolkaVote)
4. Open Vote Network Protocol [Wikipedia](https://en.wikipedia.org/wiki/Open_vote_network) page
5. Open Vote Network Protocol Research [Paper](https://eprint.iacr.org/2017/110.pdf)


## Development Roadmap :nut_and_bolt:

**Week 1** Refactoring of the second milestone and Polkadot-sdk research. </br>
**Week 2** Circuit development, testing and compilation into Rust and a format that is palette competible. </br>
**Week 3** Implementation of the Palette with Rust generated verifiers. </br>
**Week 4** Integration with front end and end-to-end implementation.
Rest of the days - review of the protocol, and potential milestone 4 grant proposal.

### Overview

- **Total Estimated Duration:** 1 Month.
- **Full-Time Equivalent (FTE):**  1 FTE.
- **Total Costs:** 10,000 USD.
- **DOT %:** 50%.

### Milestone 1 — Palette

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense. See the [delivery guidelines](https://grants.web3.foundation/docs/Support%20Docs/milestone-deliverables-guidelines#license) for details. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **README.md** file  that explains how a user can Build/Deploy the front end and Test/Compile/Run the palette and the circuits. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. The provided tests will be written in Noir and for the Palette.|
| **0d.** | Docker | No docker is needed. A docker will be provided for the front end|
| **0e** | Article | Gladly will write an article, open to discuss other options as well |
| 1. | Substrate module: Vote | We will create a Substrate module that will:<br>• **Register Voter** – Verifies registration proof, registers voter.<br>• **Get Decryption Value By Voter Index** – Returns a voter’s decryption share if registration is complete.<br>• **Vote** – Verifies voting proof, records vote, and may trigger final tally.<br>• **Evaluate Final Vote** – Aggregates encrypted votes and calls brute-force decryption.<br>• **Get Registered Voters** – Returns voter addresses and voting status.<br>• **Get Final Vote** – Returns final result if voting is complete.<br> **ZK Verifiers** – Under the hood there will be 2 verifiers utilized and generated - one for registration and one for verificaion. |

## Future Plans

This is yet another milestone towards an anonymous peer-to-peer protocol that one day will extent OpenGov by introducing oblivous voting functionality.

Future milestones will include R&D of more advanced cryptographic techniques, a potential collaboration with [XX Network](https://xx.network/) and additional anonimization on the networking layer, as well as on the block-chain level.

This is a research-centric project that delves deep into cryptographic theory and requires solid engineering skills. The next milestones will focus on exploring different cryptographic settings, with the primary goal of finding the most applicable approach for OpenGov.
It is an exciting time to research such a problem, as ZK technology continues to improve each year and some voting protocols can now run in a reasonable time frame.

Maintenance will not be required for this milestone, as the front end will be deployed on Vercel (using the free tier) and the pallet will handle the rest of the functionality and core verification logic.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](https://grants.web3.foundation/docs/referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDC) payment address. Please also specify the currency. (e.g. 15oF4... (USDC))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**  Personal recommendation.


