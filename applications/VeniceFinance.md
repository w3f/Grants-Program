# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Venice Finance
- **Team Name:** Venice
- **Payment Address:** Ethereum (USDT/DAI) 0x176e32A652F9f5Ad2a3A8EF3302F34D540EdfC3E
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

ETHEREUM is a dark forest
Since January 2020, cumulative miner extractable value, or MEV, has reached a total of $761M on Ethereum alone. *MEV, as a measure of the profit that miners can make through their ability to arbitrarily include/exclude/re-order transactions within the blocks they produce, is mainly prevalent as front-running attacks on decentralized exchanges, which is becoming a billion dollar problem, together with millions of dollars lost in gas fees.
The U.S. infrastructure bill’s crypto provision implies to expand the Tax Code’s definition of “broker” to capture non-custodial actors, including the $53 Billion DEX markets, forcing them all to KYC users.
Sophisticated tools to track wallet movements in a more granular and organized fashion, such as Nansen, are emerging, which diminishes a trader’s alpha by having their trading strategies exposed.
Above are only examples of DEX exploits from a fully-transparent ledger when privacy is deprioritized.

With programmable privacy by default, Venice protects its users from such malicious exploits as front-running attacks/GPA-style MEV, transaction linkability, identity traceability, and more.

### Overview

Venice is a next-generation, Zero-Knowledge powered decentralized exchange, primarily focused on privacy preservation, front-running resistance, and cross-chain liquidity aggregation.

Venice utilizes advanced cryptography algorithms like Bulletproofs and Turbo-PLONKS to protect users from value extracting players and other malicious exploits while providing lightning-fast trades, minimal slippage, and maximum liquidity efficiency (Uniswap’s market making algorithm is implemented in V0 with future upgrades planned).

Venice is committed to the ideals of permissionless access, privacy-protection, and auditable transparency, all indispensable components for a future where anyone in the world can access financial services without fear of identity breach or related counterparty risk.



### Project Details

**Onion Transfer & ZK Synthetic Assets**

![image4](https://user-images.githubusercontent.com/96151378/147000970-f3412510-c6f8-4c75-a95c-30861c13bdad.png)

Venice’s beta implementation supports Onion Transfer, utilizing cryptography algorithms, like atomic swap and anonymous transfer, to create ZK synthetic versions of any asset supported in the Venice ecosystem, removing account traceability and introducing fundamental privacy protection.

Onion Transfer enables a “decontamination” process which helps users to establish privacy-preserving on-chain identities by breaking the on-chain link between sources and destination addresses: it automates the transfer of user assets from a traceable account, linked to an identity KYC’ed on CEX, to an untraceable address; users can migrate and trade their assets from a “contaminated” accounts on the many ecosystems supported by Venice for privacy protection.


**FRONTRUNNING RESISTANCE (Bulletproofs)**

![image3](https://user-images.githubusercontent.com/96151378/147001093-8e7dee45-8d03-4d26-a7d0-9499e2aba486.png)

V2 plans to leverage the Bulletproofs functionality by interfacing to the EVM ledger using pre-compiled contracts, the asset type and amount in the txn data can be masked in a smart contract while the transaction itself still remains public and verifiable.

Venice supports trades/swaps wherein the asset type and amount are masked, effectively removing any chance of malicious users exploiting the system. It also provides an elegant mechanism to prevent front-running while maintaining the ideology behind a completely decentralized and transparent system.

**FULLY-ANONYMOUS PRIVACY (Turbo-PLONK, MPC)**

![image2](https://user-images.githubusercontent.com/96151378/147001267-b977fdd4-ebd3-4f16-83c4-f1e6719ba97c.png)

The technologies of Onion Transfer, together with front-running resistance, have provided a full set of privacy solutions. For mass adoption of the Pri-fi evolution through frictionless UX and better product-market fit, V3 will interface ‘Triple Masking’ to EVM to provide fully-anonymous privacy to obfuscate all smart contract inputs, allowing a user to trade without revealing his identity or position.
- This feature is implemented by an efficient implementation of Turbo-PLONK, to be deployed on the UTXO ledger first and then exposed to the EVM ledger through pre-compiled contracts.
- This feature enables the sender to provide zero-knowledge proofs of a transaction input, which is verifiable by the ledger without revealing details of the transaction.
- The network in this case would be secured through a multi-party computation (MPC).

### Ecosystem Fit

![image1](https://user-images.githubusercontent.com/96151378/147001486-c69edaaf-ee36-42b3-8e3a-c1cbdfefdc4d.png)

Venice offers programmable & composable privacy solutions for liquidity to migrate in and out of the polkadot ecosystem across all blockchains via bridges. 

Venice provides:
- Programmability to liquidity native to privacy-centric ecosystems like Zcash, Monero 
- Cheap transactions, fast finality and privacy-protection to liquidity native to EVM- compatible protocols like Polygon & Ethereum
- Privacy-preserving interoperability to cross-ecosystem swaps, like Cosmos<>Polkadot

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Beth Li
- Names of team members: Alex Park, Tanmay, Taylor, Oleks, Sergio, Andy, Beth Li, Carrie

### Contact

- **Contact Name:** Beth Li
- **Contact Email:** Beth@venice.finance
- **Website:** venice.finance

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

We are an elite group of world-class engineers, researchers, business operators, and investment professionals. The Venice contributors team has more than 80 years of combined leadership experience in fintech, financial engineering, and cryptography, with experience from top-tier schools/institutions/corporates including UC Berkeley, Yahoo, Stanford University, Columbia, EY, Deloitte, MUFG, CITI Group, Plug&Play, etc. 

### Team Code Repos

- https://github.com/VeniceFinance
- https://github.com/VeniceFinance/venice-swap-periphery
- https://github.com/VeniceFinance/venice-swap-core

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/VeniceDeveloper
- https://github.com/PassengerAndy

## Development Status :open_book:

MVP LINK: testnet.venice.finance

**Research Dairy:**
**Zero-Knowledge Proof Systems for FULLY-ANONYMOUS PRIVACY SUPPORT**

The goal is to prove a statement without leaking extra information. for example, for some N,xN,x, prove xx is a quadratic residue in Z∗NZN∗.

Let L⊆Σ∗L⊆Σ∗. A zero-knowledge proof system for LL is a pair (P,V)(P,V) satisfying

1. (Complete) For all x∈Lx∈L, a verifier says "yes" after interacting with the prover
2. (Sound) For all x∉Lx∉L, and for all provers P∗P∗, a verifier says "no" after interacting with P∗P∗ with probability at least 1/21/2.
3. (Perfect) For all verifiers V∗V∗, there exists a simulator S∗S∗ that is a randomized polynomial time algorithm such that for all x∈Lx∈L,{transcript((P,V∗)(x))}={S∗(x)}{transcript((P,V∗)(x))}={S∗(x)}
* (equality of distributions)

The existence of a simulator implies that if x∈Lx∈L, then V∗V∗ cannot learn more than the fact that x∈Lx∈L.

**Example:** Let N=pq,x∈Z∗NN=pq,x∈ZN∗. Suppose we wish to prove that xx is a quadratic residue in Z∗NZN∗. Then let x=α2x=α2 (modulo NN).
* PP: r←ZNr←ZN, sends a=r2a=r2
* VV: sends b←{0,1}b←{0,1}
* PP: sends z=rαbz=rαb
* VV: tests z2=axbz2=axb. If so, output "yes", otherwise output "no"

Completeness of this scheme is immediate. As for soundness: if aa is not a quadratic residue, then the verifier says "no" with probability of at least one half (i.e. when b=0b=0). If aa is a quadratic residue, but xx is not, then the verifier says "no" with probability of at least one half (i.e when b=1b=1).

Claim: if xx is not a quadratic residue in Z∗NZN∗ then for all P∗P∗, VV says "no" with probability of at least one half.

It remains to show that the scheme is perfect zero-knowledge. Let V∗V∗ be some verifier, and suppose transcript((P,V∗)(N,x))=[a,b,z]transcript((P,V∗)(N,x))=[a,b,z].

Then construct a blackbox simulator S∗S∗ as follows:
* Pick a random z←Z∗Nz←ZN∗, and a random b←{0,1}b←{0,1}.
* Set a=z2/xbmodNa=z2/xbmodN
* Run V∗(x)V∗(x), give it aa as first message from prover.
* V∗V∗ outputs some b′b′ in {0,1}{0,1}. If b≠b′b≠b′ then go to step 1, otherwise output [a,b,z][a,b,z] as the transcript. This takes two iterations on average.

**Claim:** {transcript(P,V∗)(N,x)}={S∗(N,x)}{transcript(P,V∗)(N,x)}={S∗(N,x)} (equality of distributions).

Sketch of proof: aa is uniform in the quadratic residues of Z∗NZN∗ because xx is a quadratic residue. bb is from the same distribution generated by V∗V∗ given aa. z satisfies z2=axbz2=axb and is from the correct definition.

Soundness can be improved by repeating the protocol sequentially. One might consider repetition in parallel, i.e.:
* PP: r1,...,rn←ZNr1,...,rn←ZN, sends a1=r21,...,an=r2na1=r12,...,an=rn2
* VV: sends b1,...,bn←{0,1}b1,...,bn←{0,1}
* PP: sends z1=r1αb1,...,zn=rnalphabnz1=r1α1b,...,zn=rnalphanb
* VV: tests z2i=aixbizi2=aixib for i=1,...,ni=1,...,n. If so, output "yes", otherwise output "no"

This scheme is complete and sound, but it is not clear how to build a simulator. (We can only guess all the bibi's correctly with probability 1/2n1/2n.)

**Theorem [KG '89]:** If LL has a three-round perfect zero knowledge proof with negligible cheating probability then L∈BPPL∈BPP.

Since it is believed that quadratic residuosity is not in BPP, it is therefore also thought that no three-round strongly sound perfect zero- knowledge protocol for quadratic residuosity exists.

Hence we introduce a weaker version of zero- knowledge:

**Computational ZK:** (P,V)(P,V) is a (t,ϵ)(t,ϵ)-zero-knowledge proof system for a language LL if it is
* Sound
* Complete
* Computational ZK: for all verifiers V∗V∗ there exists a simulator S∗S∗ such that for all x∈Lx∈L, the distribution {transcript((P,V∗)(x))}{transcript((P,V∗)(x))} is (t,ϵ)(t,ϵ)-indistinguishable from {S∗(x)}{S∗(x)}.

**Theorem [GMW '87]:** If a (t,ϵ)(t,ϵ)-bit commitment scheme exists, then all languages in NPNP have computational ZK proofs.

**Definition:** (imprecise definition) A (t,ϵ)(t,ϵ)-bit commitment scheme is defined as follows:
* Commiter has a bit b∈{0,1}b∈{0,1}, and sends commit(b)∈{0,1}∗commit(b)∈{0,1}∗ (a commitment to a bit bb).
* Commiter can open a commitment as b′b′ and the verifier can check that b=b′b=b′.

This scheme should be: * Binding: an infinitely powerful committer can’t convince the verifier that commitment is a commitment to b′≠bb′≠b. * Sound: commit(b)commit(b) reveals no information about bb, i.e. for any bit b∈{0,1}b∈{0,1}, {commit(b),b}{commit(b),b} is (t,ϵ)(t,ϵ)-indistinguishable from {commit(b),r|r←{0,1}}{commit(b),r|r←{0,1}}.

Example: one-way permutations imply commitment schemes:

Let f:{0,1}n→{0,1}nf:{0,1}n→{0,1}n be a one-way permutation. Choose r←{0,1}nr←{0,1}n, and set commit(b)=[f(r),B(r)⊕b]commit(b)=[f(r),B(r)⊕b] where BB is a hardcore bit of ff.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 monthes
- **Full-Time Equivalent (FTE):**  6
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Implement Substrate Modules

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) utilize venice finance to trade, provide liquidity and farm. Link: docs.venice.finance |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article/workshop that explains tokenomics, product intro, testnet user flow, etc. 
| 1. | VenicePair | We will create a Substrate module that will enable pair-tokens staking |  
| 2. | VeniceRouter | we will implement the SWAP router |  
| 3. | Venice | Implement all basic features of Venince |  


## Future Plans

Built on the ethos of usability and privacy, Venice provides a foundation for the open & accessible financial system of the future.

**V0 2021 Q4**

- MVP launch on testnet w/ Onion Transfer utilizing ZK synthetic assets supported by atomic swaps and confidential transfers
- Bridge Integration to Ethereum and Binance Smart Chain

**V1 2022 Q1**

- V1 Mainnet launch
- Bridge integration to Bitcoin and Arbitrum, deployment on Ethereum and BSC
- Governance & VENI community DAO w/ $10 million initial liquidity support

**V2**

- V2 launch w/ front-running resistance utilizing Bulletproofs
- Bridge integration to Polygon, Terra and Avalanche, deployment on Avalanche, Polygon and Arbitrum
- Introduce limit order functionality to support customizable liquidity positions

**V3**

- V3 launch w/ full anonymity utilizing Turbo-PLONK and Multi Party Computation
- Oracle integration
- Improved market-making algorithm to support single-sided liquidity provision, staking rewards auto compounding and stablecoin swap support

**V4**

- V4 launch w/ customized private money market supporting leveraged lending and NFT collateralization
- Introduce launchpad for new project incubation

***As a decentralized ecosystem, any further roadmap will be determined by Venice’s community. Venice welcomes other teams to innovate on top of the existing product, creating a thriving ecosystem and network effect. Grants and bounties will be given to contributors who create new successful features.***
